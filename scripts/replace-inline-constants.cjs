#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const rootArg = [...args].find((arg) => arg.startsWith("--root="));
const constantsArg = [...args].find((arg) => arg.startsWith("--constants="));

const rootDir = path.resolve(rootArg ? rootArg.slice("--root=".length) : "III[mem]");
const constantsFile = path.resolve(
  constantsArg ? constantsArg.slice("--constants=".length) : path.join("III[mem]", "utils", "constants.mts"),
);

const INLINE_CONSTANT_PATTERN = /(-?\d+(?:\.\d+)?)\s*\/\*\s*([A-Za-z][A-Za-z0-9_]*)\s*\*\//g;
const CONSTANT_DECLARATION_PATTERN = /globalThis\.([A-Za-z][A-Za-z0-9_]*)\s*=\s*([^;]+);/g;

function isTargetFile(fileName) {
  const lower = fileName.toLowerCase();
  return (lower.endsWith(".ts") || lower.endsWith(".mts")) && !lower.endsWith(".d.ts");
}

function collectSourceFiles(dir) {
  const files = [];

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }

      if (entry.isFile() && isTargetFile(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  walk(dir);
  return files;
}

function parseConstantValue(rawValue) {
  const trimmed = rawValue.trim();
  if (/^-?\d+(?:\.\d+)?$/.test(trimmed)) {
    return Number(trimmed);
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  return undefined;
}

function loadConstantsMap(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const constantMap = new Map();
  const normalizedConstantMap = new Map();

  for (const match of text.matchAll(CONSTANT_DECLARATION_PATTERN)) {
    const [, name, rawValue] = match;
    const value = parseConstantValue(rawValue);
    if (value !== undefined) {
      constantMap.set(name, value);

      const normalizedName = name.toUpperCase();
      if (!normalizedConstantMap.has(normalizedName)) {
        normalizedConstantMap.set(normalizedName, { name, value });
      }
    }
  }

  return { constantMap, normalizedConstantMap };
}

function lineFromOffset(text, offset) {
  let line = 1;
  for (let i = 0; i < offset; i += 1) {
    if (text.charCodeAt(i) === 10) {
      line += 1;
    }
  }
  return line;
}

function main() {
  if (!fs.existsSync(rootDir)) {
    throw new Error(`Root directory not found: ${rootDir}`);
  }

  if (!fs.existsSync(constantsFile)) {
    throw new Error(`Constants file not found: ${constantsFile}`);
  }

  const { constantMap, normalizedConstantMap } = loadConstantsMap(constantsFile);
  if (constantMap.size === 0) {
    throw new Error(`No constants could be parsed from ${constantsFile}`);
  }

  const files = collectSourceFiles(rootDir).filter((filePath) => path.resolve(filePath) !== constantsFile);

  let totalReplacements = 0;
  let changedFiles = 0;

  const missingConstants = [];
  const mismatchedConstants = [];

  for (const filePath of files) {
    const originalText = fs.readFileSync(filePath, "utf8");
    let fileReplacements = 0;

    const updatedText = originalText.replace(INLINE_CONSTANT_PATTERN, (fullMatch, rawNumber, constantName, offset) => {
      const resolvedConstant = normalizedConstantMap.get(constantName.toUpperCase());
      if (!resolvedConstant || typeof resolvedConstant.value !== "number") {
        missingConstants.push({
          filePath,
          line: lineFromOffset(originalText, offset),
          value: rawNumber,
          constantName,
        });
        return fullMatch;
      }

      const numericValue = Number(rawNumber);
      if (!Number.isFinite(numericValue) || numericValue !== resolvedConstant.value) {
        mismatchedConstants.push({
          filePath,
          line: lineFromOffset(originalText, offset),
          value: rawNumber,
          constantName,
          expected: resolvedConstant.value,
          resolvedName: resolvedConstant.name,
        });
        return fullMatch;
      }

      fileReplacements += 1;
      totalReplacements += 1;
      return resolvedConstant.name;
    });

    if (updatedText !== originalText) {
      changedFiles += 1;
      if (!dryRun) {
        fs.writeFileSync(filePath, updatedText, "utf8");
      }
    }

    if (fileReplacements > 0) {
      const relative = path.relative(process.cwd(), filePath);
      console.log(`${dryRun ? "Would update" : "Updated"} ${relative} (${fileReplacements} replacement${fileReplacements === 1 ? "" : "s"})`);
    }
  }

  console.log("\nSummary:");
  console.log(` - Constants parsed: ${constantMap.size}`);
  console.log(` - Files scanned: ${files.length}`);
  console.log(` - Files changed: ${changedFiles}`);
  console.log(` - Replacements applied: ${totalReplacements}`);

  if (missingConstants.length > 0 || mismatchedConstants.length > 0) {
    console.log("\nUnknown constants report:");

    if (missingConstants.length > 0) {
      console.log(`\nMissing constants (${missingConstants.length}):`);
      for (const entry of missingConstants) {
        console.log(
          ` - ${path.relative(process.cwd(), entry.filePath)}:${entry.line} | ${entry.value} /* ${entry.constantName} */ (name not found in constants.mts)`,
        );
      }
    }

    if (mismatchedConstants.length > 0) {
      console.log(`\nValue mismatches (${mismatchedConstants.length}):`);
      for (const entry of mismatchedConstants) {
        console.log(
          ` - ${path.relative(process.cwd(), entry.filePath)}:${entry.line} | ${entry.value} /* ${entry.constantName} */ (expected ${entry.expected} for ${entry.resolvedName})`,
        );
      }
    }
  } else {
    console.log("\nUnknown constants report: none");
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
