import { type MissionDefinition, missions } from './missions.mts';

log('[*] Mission Monitor started');

class DeatharrestBeenExecutedError extends Error {
    constructor() {
        super('Death or arrest detected');
        this.name = 'DeatharrestBeenExecutedError';
    }
}

(async function () {
    const p = new Player(0);
    const _asyncWait = globalThis.asyncWait;
    // @ts-ignore
    asyncWait = async function (delay) {
        await _asyncWait(delay);
        if (ONMISSION && !p.isPlaying()) {
            throw new DeatharrestBeenExecutedError();
        }
    };
    while (true) {
        await _asyncWait(0);
        if (!ONMISSION && p.isPlaying() && p.canStartMission()) {
            for (const mission of missions) {
                if (mission.canStart()) {
                    await loadAndLaunchMission(mission);
                    break;
                }
            }
        }
    }
})();

async function loadAndLaunchMission(mission: MissionDefinition) {
    log(`[+] Starting mission ${mission.scriptPath}`);
    return (await import(mission.scriptPath))
        .default()
        .catch((e: Error) => {
            if (e instanceof DeatharrestBeenExecutedError) {
                log(`[-] Mission ${mission.scriptPath} failed due to death or arrest`);
            } else {
                log(`[-] Unhandled error in mission ${mission.name}: ${e.message}`);
            }
        })
        .finally(() => {
            log(`[+] Finished mission ${mission.scriptPath}`);
            // gc.collect();
        });
}
