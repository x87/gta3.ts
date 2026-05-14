import { $ } from './vars.mts';

let _verbose = true;

export async function run_once(fn: () => Promise<void>) {
    try {
        if (!$._flag_is_loaded_game) {
            await fn();
        }
    } catch (e) {
        log(unwrapError(e));
    }
}

export function verbose(message: any) {
    if (_verbose) {
        log(message);
    }
}

export async function GOSUB_FILE(file: string) {
    await import(file);
}

export function START_NEW_SCRIPT(file: string, args: Record<string, any> = {}) {
    verbose(`Starting new script: ${file} with args: ${JSON.stringify(args)}`);
    CLEO.runScript(file, args);
}

export function unwrapError(error: any): string {
    if (error instanceof Error) {
        let stack = error.stack || '';
        return `Error: ${error.message} ${stack}`;
    }
    return String(error);
}

export { $ };
