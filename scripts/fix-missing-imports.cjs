#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const projectArg = [...args].find((arg) => arg.startsWith("--project="));
const projectFile = projectArg ? projectArg.slice("--project=".length) : "tsconfig.json";
const projectPath = path.resolve(projectFile);

const formatHost = {
  getCanonicalFileName: (fileName) => fileName,
  getCurrentDirectory: () => process.cwd(),
  getNewLine: () => ts.sys.newLine,
};

function keyFor(fileName) {
  const resolved = path.resolve(fileName);
  return ts.sys.useCaseSensitiveFileNames ? resolved : resolved.toLowerCase();
}

function isTargetSource(fileName) {
  const lower = fileName.toLowerCase();
  return (lower.endsWith(".ts") || lower.endsWith(".mts")) && !lower.endsWith(".d.ts");
}

function isImportFix(action) {
  if (action.fixName && /import/i.test(action.fixName)) {
    return true;
  }

  if (action.description && /import/i.test(action.description)) {
    return true;
  }

  return action.changes.some((change) =>
    change.textChanges.some((textChange) => /\bimport\b/.test(textChange.newText)),
  );
}

function formatDiagnostics(diagnostics) {
  return ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost);
}

function readConfig(tsconfigPath) {
  const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
  if (configFile.error) {
    throw new Error(formatDiagnostics([configFile.error]));
  }

  const parsed = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    path.dirname(tsconfigPath),
    undefined,
    tsconfigPath,
  );

  if (parsed.errors.length > 0) {
    throw new Error(formatDiagnostics(parsed.errors));
  }

  return parsed;
}

function main() {
  if (!fs.existsSync(projectPath)) {
    throw new Error(`Could not find tsconfig at ${projectPath}`);
  }

  const parsed = readConfig(projectPath);
  const fileState = new Map();

  for (const fileName of parsed.fileNames) {
    if (!isTargetSource(fileName)) {
      continue;
    }

    const resolved = path.resolve(fileName);
    if (!fs.existsSync(resolved)) {
      continue;
    }

    const text = fs.readFileSync(resolved, "utf8");
    fileState.set(keyFor(resolved), {
      fileName: resolved,
      originalText: text,
      text,
      version: 0,
    });
  }

  if (fileState.size === 0) {
    console.log("No .ts or .mts source files found in tsconfig.");
    return;
  }

  const serviceHost = {
    getCompilationSettings: () => parsed.options,
    getCurrentDirectory: () => process.cwd(),
    getDefaultLibFileName: (options) => ts.getDefaultLibFilePath(options),
    getScriptFileNames: () => [...fileState.values()].map((state) => state.fileName),
    getScriptVersion: (fileName) => String(fileState.get(keyFor(fileName))?.version ?? 0),
    getScriptSnapshot: (fileName) => {
      const state = fileState.get(keyFor(fileName));
      if (state) {
        return ts.ScriptSnapshot.fromString(state.text);
      }

      if (ts.sys.fileExists(fileName)) {
        const text = ts.sys.readFile(fileName);
        return text == null ? undefined : ts.ScriptSnapshot.fromString(text);
      }

      return undefined;
    },
    directoryExists: ts.sys.directoryExists,
    fileExists: ts.sys.fileExists,
    getDirectories: ts.sys.getDirectories,
    readDirectory: ts.sys.readDirectory,
    readFile: ts.sys.readFile,
    realpath: ts.sys.realpath,
    useCaseSensitiveFileNames: () => ts.sys.useCaseSensitiveFileNames,
  };

  const languageService = ts.createLanguageService(serviceHost, ts.createDocumentRegistry());

  function applyFix(action) {
    let changed = false;

    for (const change of action.changes) {
      const state = fileState.get(keyFor(change.fileName));
      if (!state) {
        continue;
      }

      let nextText = state.text;
      const orderedChanges = [...change.textChanges].sort((a, b) => b.span.start - a.span.start);

      for (const textChange of orderedChanges) {
        nextText =
          nextText.slice(0, textChange.span.start) +
          textChange.newText +
          nextText.slice(textChange.span.start + textChange.span.length);
      }

      if (nextText !== state.text) {
        state.text = nextText;
        state.version += 1;
        changed = true;
      }
    }

    return changed;
  }

  function findFirstImportFix(fileName) {
    const diagnostics = [
      ...languageService.getSemanticDiagnostics(fileName),
      ...languageService.getSuggestionDiagnostics(fileName),
    ];

    for (const diagnostic of diagnostics) {
      if (diagnostic.start == null) {
        continue;
      }

      const fixActions = languageService.getCodeFixesAtPosition(
        fileName,
        diagnostic.start,
        diagnostic.start + (diagnostic.length ?? 0),
        [diagnostic.code],
        {},
        {},
      );

      const importFix = fixActions.find(isImportFix);
      if (importFix) {
        return importFix;
      }
    }

    return undefined;
  }

  const changedFiles = [];
  let totalFixes = 0;

  for (const state of fileState.values()) {
    let fixesForFile = 0;

    for (let guard = 0; guard < 200; guard += 1) {
      const importFix = findFirstImportFix(state.fileName);
      if (!importFix) {
        break;
      }

      const changed = applyFix(importFix);
      if (!changed) {
        break;
      }

      fixesForFile += 1;
      totalFixes += 1;
    }

    if (fixesForFile > 0) {
      changedFiles.push({ fileName: state.fileName, fixes: fixesForFile });
    }
  }

  if (changedFiles.length === 0) {
    console.log("No missing-import fixes were found.");
    return;
  }

  if (dryRun) {
    console.log(`Dry run: ${changedFiles.length} file(s) would be updated.`);
  } else {
    for (const state of fileState.values()) {
      if (state.text !== state.originalText) {
        fs.writeFileSync(state.fileName, state.text, "utf8");
      }
    }
    console.log(`Updated ${changedFiles.length} file(s).`);
  }

  console.log(`Applied ${totalFixes} import fix(es).`);
  for (const entry of changedFiles) {
    console.log(` - ${path.relative(process.cwd(), entry.fileName)} (${entry.fixes})`);
  }
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}