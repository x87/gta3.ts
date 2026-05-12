import { $ } from '../vars.mts';

const p = new Player(0);

interface MissionDefinition {
    name: string;
    scriptPath: string;
    canStart(): boolean;
    onPassed?(): void;
    onFailed?(): void;
}

const missions: MissionDefinition[] = [
    {
        scriptPath: `./Industrial/intro.mts`,
        name: 'The Intro',
        canStart() {
            return !$._flag_intro_passed;
        },
    },
    {
        scriptPath: `./Industrial/8ball.mts`,
        name: "Luigi's Girls",
        canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_eightball_mission_passed == 0) {
                return false;
            }

            if ($.flag_eightball_mission_passed == 1) {
                return false;
            }
            if ($.flag_eightball_mission_launched == 0) {
                if ($.flag_reached_hideout == 0) {
                    if ($.player.locateOnFoot2D(811.9, -939.95, 3.5, 3.5, false /* FALSE */)) {
                        return true;
                    }
                } else {
                    if ($.player.locateOnFoot2D(883.5, -308.2, 3.5, 3.5, false /* FALSE */)) {
                        return true;
                    }
                }
            }
            return false;
        },
    },
];

export { missions, type MissionDefinition };
