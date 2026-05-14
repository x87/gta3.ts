import { $ } from '../vars.mts';

const p = new Player(0);

interface MissionDefinition {
    name: string;
    scriptPath: string;
    canStart(): Promise<boolean>;
    beforeStart?(): Promise<void>;
    onPassed?(): void;
    onFailed?(): void;
}

const missions: MissionDefinition[] = [
    {
        scriptPath: `./Industrial/intro.mts`,
        name: 'The Intro',
        async canStart() {
            return !$._flag_intro_passed;
        },
    },
    {
        scriptPath: `./Industrial/8ball.mts`,
        name: "Luigi's Girls",
        async canStart() {
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

        async beforeStart() {
            $.flag_eightball_mission_launched = 1;
        }
    },

    //  ***********************wanted/health info************************************************
    {
        scriptPath: `./Industrial/health.mts`,
        name: 'health info',
        async canStart() {
            if ($.player.isInZone('S_VIEW') && $.heal_info_trip == 1 /*&& $.flag_health_info == 0*/) {
                if ($.heal_info.hasBeenCollected()) {
                    return true;
                }
            }
            return false;
        },
        async beforeStart() {
            $.player.setControl(false /* off */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/wanted.mts`,
        name: 'wanted info',
        async canStart() {
            if ($.player.isInZone('S_VIEW') && $.wanted_info_trip == 1 /*&& $.flag_wanted_info == 0*/) {
                if ($.wanted_info.hasBeenCollected()) {
                    return true;
                }
            }
            return false;
        },
        async beforeStart() {
            $.player.setControl(false /* off */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *************************************RC Demolition****************************************
    {
        scriptPath: `./Industrial/rc1.mts`,
        name: 'RC Destruction Derby 1',
        async canStart() {
            if (!$.player.isInModel(149 /* CAR_TOYZ */)) {
                $.flag_just_done_rc_mission = 0;
            }
            return $.flag_just_done_rc_mission == 0 && $.player.isInModel(149 /* CAR_TOYZ */) && $.player.locateAnyMeans3D(1014.0, -120.0, 5.0, 5.0, 5.0, 5.0, false /* false */);
        },
        async beforeStart() {
            Text.PrintBig('RC1', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Industrial/rc2.mts`,
        name: 'RC Destruction Derby 2',
        async canStart() {
            if (!$.player.isInModel(149 /* CAR_TOYZ */)) {
                $.flag_just_done_rc_mission = 0;
            }
            return $.flag_just_done_rc_mission == 0 && $.player.isInModel(149 /* CAR_TOYZ */) && $.player.locateAnyMeans3D(1158.0, -309.0, 23.0, 5.0, 5.0, 5.0, false /* false */);
        },
        async beforeStart() {
            Text.PrintBig('RC2', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Industrial/rc3.mts`,
        name: 'RC Destruction Derby 3',
        async canStart() {
            if (!$.player.isInModel(149 /* CAR_TOYZ */)) {
                $.flag_just_done_rc_mission = 0;
            }
            return $.flag_just_done_rc_mission == 0 && $.player.isInModel(149 /* CAR_TOYZ */) && $.player.locateAnyMeans3D(-636.0, 65.0, 19.0, 5.0, 5.0, 5.0, false /* false */);
        },
        async beforeStart() {
            Text.PrintBig('RC4', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Industrial/rc4.mts`,
        name: 'RC Destruction Derby 4',
        async canStart() {
            if (!$.player.isInModel(149 /* CAR_TOYZ */)) {
                $.flag_just_done_rc_mission = 0;
            }
            return $.flag_just_done_rc_mission == 0 && $.player.isInModel(149 /* CAR_TOYZ */) && $.player.locateAnyMeans3D(366.0, -1312.0, 26.0, 5.0, 5.0, 5.0, false /* false */);
        },
        async beforeStart() {
            Text.PrintBig('RC3', 15000, 2);
            await asyncWait(0);
        },
    },

    // *******************************************4x4 Missions***********************************
    {
        scriptPath: `./Industrial/4x4_1.mts`,
        name: '4x4 by Far',
        async canStart() {
            if ($.flag_4x4_mission1_passed == 0) {
                $.record_4x4_one = 300;
            }
            if ($.player.isInZone('S_VIEW')) {
                if ($.player.isInModel(96 /* CAR_PATRIOT */) && !$.player.isInArea2D(1294.0, -656.0, 1316.0, -638.0, false /* false */)) {
                    $.flag_4x4one_trigger = 1;
                }
                if ($.player.isInModel(96 /* CAR_PATRIOT */) && $.flag_4x4one_trigger == 0) {
                    return true;
                }

                if (!$.player.isInAnyCar()) {
                    $.flag_4x4one_trigger = 0;
                }
            }
            return false;

        },
        async beforeStart() {
            Text.PrintBig('T4X4_1', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Commercial/4x4_2.mts`,
        name: 'A ride in the Park',
        async canStart() {
            if ($.flag_4x4_mission2_passed == 0) {
                $.record_4x4_two = 120;
            }

            if ($.player.isInZone('PARK')) {
                if ($.player.isInModel(90 /* CAR_LANDSTALKER */) && !$.player.isInArea2D(58.0, -585.0, 68.0, -595.0, false /* false */)) {
                    $.flag_4x4two_trigger = 1;
                }
                if ($.player.isInModel(90 /* CAR_LANDSTALKER */) && $.flag_4x4two_trigger == 0) {
                    return true;
                }
                if (!$.player.isInAnyCar()) {
                    $.flag_4x4two_trigger = 0;
                }
            }

            return false;
        },
        async beforeStart() {
            Text.PrintBig('T4X4_2', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Suburban/4x4_3.mts`,
        name: 'GRIPPED, SORTED',
        async canStart() {
            if ($.flag_4x4_mission3_passed == 0) {
                $.record_4x4_three = 300;
            }

            if ($.player.isInArea2D(-230.0, 255.0, -210.0, 275.0, false /* false */)) {
                if ($.player.isInModel(96 /* CAR_PATRIOT */) && !$.player.isInArea2D(-230.0, 255.0, -210.0, 275.0, false /* false */)) {
                    $.flag_4x4three_trigger = 1;
                }
                if ($.player.isInModel(96 /* CAR_PATRIOT */) && $.flag_4x4three_trigger == 0) {
                    return true;
                }

                if (!$.player.isInAnyCar()) {
                    $.flag_4x4three_trigger = 0;
                }
            }

            return false;
        },
        async beforeStart() {
            Text.PrintBig('T4X4_3', 15000, 2);
            await asyncWait(0);
        },
    },
    {
        scriptPath: `./Commercial/mayhem1.ts`,
        name: 'Multi-storey Mayhem',
        async canStart() {
            if ($.player.isInZone('COM_EAS')) {
                if ($.player.isInModel(129 /* CAR_STALLION */) && !$.player.isInArea2D(238.0, -612.0, 267.0, -469.0, false /* false */)) {
                    $.flag_mayhem_trigger = 1;
                }
                if ($.player.isInModel(129 /* CAR_STALLION */) && $.flag_mayhem_trigger == 0) {
                    return true;
                }

                if (!$.player.isInAnyCar()) {
                    $.flag_mayhem_trigger = 0;
                }
            }
            return false;
        },
        async beforeStart() {
            Text.PrintBig('MM_1', 15000, 2);
            await asyncWait(0);
        }
    },

    // ********************************** Ambulance Mission **********************************
    {
        scriptPath: `./Industrial/ambulance.ts`,
        name: 'Ambulance missions',
        async canStart() {
            if ($.player.isInModel(106 /* CAR_AMBULANCE */)) {
                if ($.flag_player_on_ambulance_mission == 0) {
                    $.controlmode = Pad.GetControllerMode();
                    if ($.been_in_ambulance_before == 0) {
                        if (!($.controlmode == 3)) {
                            Text.PrintHelp('ATUTOR'); //Press RIGHTSHOCK to start
                        } else {
                            Text.PrintHelp('ATUTOR3'); //Press SQUARE to start
                        }
                        $.been_in_ambulance_before = 1;
                    }
                    if (!($.controlmode == 3)) {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
                                    // SCM GOTO → ambulance_mission_loop
                                    return false;
                                }
                            }
                            return true;
                        }
                    } else {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
                                    // SCM GOTO → ambulance_mission_loop
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                }
            } else {
                if ($.been_in_ambulance_before == 1) {
                    Text.ClearHelp();
                    $.been_in_ambulance_before = 0;
                }
            }

            return false;
        },
        async beforeStart() {
            Text.PrintBig('AMBUL_M', 15000, 2);
            await asyncWait(0);
            $.been_in_ambulance_before = 1;
        }
    },
    {
        scriptPath: `./Industrial/firetruck.ts`,
        name: 'Fire missions',
        async canStart() {

            if ($.player.isInModel(97 /* CAR_FIRETRUCK */)) {
                if ($.flag_player_on_fire_mission == 0) {
                    $.controlmode = Pad.GetControllerMode();
                    if ($.been_in_a_firetruk_before == 0) {
                        if (!($.controlmode == 3)) {
                            Text.PrintHelp('FTUTOR'); //Press RIGHTSHOCK to start
                        } else {
                            Text.PrintHelp('FTUTOR2'); //Press SQUARE to start
                        }
                        $.been_in_a_firetruk_before = 1;
                    }
                    if (!($.controlmode == 3)) {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
                                    // SCM GOTO → fire_truck_mission_loop
                                    return false;
                                }
                            }
                            return true;
                        }
                    } else {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
                                    // SCM GOTO → fire_truck_mission_loop
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                }
            } else {
                if ($.been_in_a_firetruk_before == 1) {
                    Text.ClearHelp();
                    $.been_in_a_firetruk_before = 0;
                }
            }

            return false;
        },
        async beforeStart() {
            Text.PrintBig('FIRE_M', 15000, 2);
            await asyncWait(0);
            $.been_in_a_firetruk_before = 1;
        }
    },
];

export { missions, type MissionDefinition };
