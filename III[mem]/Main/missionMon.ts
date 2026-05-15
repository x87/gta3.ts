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
    const canStartMap = new Map<string, boolean>();
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
                const missionKey = mission.scriptPath;
                const canStart = await mission.canStart();

                if (!canStart) {
                    canStartMap.set(missionKey, false);
                    continue;
                }

                if (canStartMap.get(missionKey)) {
                    // if the mission can start, but additional checks in beforeMission have not been met yet
                    continue;
                }

                canStartMap.set(missionKey, true);

                if (mission.beforeMission) {
                    let beforeMissionResult: void | boolean | undefined = undefined;
                    try {
                        beforeMissionResult = await mission.beforeMission();
                    } catch (e) {
                        log(`[-] Error in beforeMission of mission ${mission.name} from ${mission.scriptPath}: ${unwrapError(e)}`);
                    }

                    if (beforeMissionResult === false) {
                        log(`[~] Mission "${mission.name}" from ${mission.scriptPath} canceled by beforeMission`);
                        break;
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
