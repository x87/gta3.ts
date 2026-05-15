import { $ } from './vars.mts';

let _verbose = true;

export async function run_on_newgame(fn: () => Promise<void>) {
    run_if(() => !$._flag_is_loaded_game, fn);
}

export async function run_gated(variable: keyof typeof $, fn: () => Promise<void>) {
    run_if(
        () => $[variable] == 0,
        async () => {
            verbose(`Run gated script on $.${variable} (${$[variable]})`);
            await fn();
            verbose(`Setting $.${variable} to 1`);
            $[variable] = 1 as any;
        }
    );

}

export async function run_if(condition: () => boolean, fn: () => Promise<void>) {
    try {
        if (condition()) {
            await fn();
        }
    } catch (e) {
        log(unwrapError(e));
    }
}

export async function wait_for(variable: keyof typeof $, checkInterval = 0) {
    while ($[variable] == 0) {
        await asyncWait(checkInterval);
    }
}

export function verbose(message: any) {
    if (_verbose) {
        log(message);
    }
}

export async function GOSUB_FILE(file: string) {
    verbose(`GOSUB_FILE: ${file}`);
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
