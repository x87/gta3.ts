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

    missionFinishFix();

    while (true) {
        await _asyncWait(0);
        if (!ONMISSION && p.isPlaying() && p.canStartMission()) {
            for (const mission of missions) {
                const missionKey = mission.scriptPath;
                const canStart = await mission.canStart();

                if (!canStart) {
                    canStartMap.delete(missionKey);
                    continue;
                }

                if (mission.beforeMission) {
                    // execute side effects of failing checks in beforeMission only once
                    let isFirstTimeCanStart = !canStartMap.has(missionKey);
                    canStartMap.set(missionKey, true);

                    let beforeMissionResult = undefined;
                    try {
                        beforeMissionResult = await mission.beforeMission(isFirstTimeCanStart);
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

function missionFinishFix() {
    // need to force ONMISSION=true in order to make Mission.Finish functional
    const _missionFinish = Mission.Finish;
    Mission.Finish = function () {
        let _onMission = ONMISSION;
        ONMISSION = true;
        _missionFinish();
        ONMISSION = _onMission;
    };
}

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
