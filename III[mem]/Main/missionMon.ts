import { type MissionDefinition, missions } from './missions.mts';
import { unwrapError, verbose } from '../utils';

verbose('[*] Mission Monitor started');

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
                if (await mission.canStart()) {
                    if (mission.beforeMission) {
                        try {
                            await mission.beforeMission();
                        } catch (e) {
                            log(`[-] Error in beforeMission of mission ${mission.name} from ${mission.scriptPath}: ${unwrapError(e)}`);
                        }
                    }
                    await loadAndLaunchMission(mission);
                    if (mission.afterMission) {
                        try {
                            await mission.afterMission();
                        } catch (e) {
                            log(`[-] Error in afterMission of mission ${mission.name} from ${mission.scriptPath}: ${unwrapError(e)}`);
                        }
                    }
                    break;
                }
            }
        }
    }
})();

async function loadAndLaunchMission(mission: MissionDefinition) {
    log(`[+] Starting mission "${mission.name}" from ${mission.scriptPath}`);
    return (await import(mission.scriptPath))
        .default()
        .catch((e: Error) => {
            if (e instanceof DeatharrestBeenExecutedError) {
                log(`[-] Mission "${mission.name}" from ${mission.scriptPath} failed due to death or arrest`);
            } else {
                log(`[-] Unhandled error in mission "${mission.name}" from ${mission.scriptPath}: ${unwrapError(e)}`);
            }
        })
        .finally(() => {
            log(`[-] Finished mission "${mission.name}" from ${mission.scriptPath}`);
            // gc.collect();
        });
}
