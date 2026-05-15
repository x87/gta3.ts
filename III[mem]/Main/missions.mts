import { $ } from '../utils';

interface MissionDefinition {
    name: string;
    scriptPath: string;
    canStart(): Promise<boolean>;
    beforeMission?(): Promise<void | boolean>;
    afterMission?(): Promise<void>;
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

        async beforeMission() {
            $.flag_eightball_mission_launched = 1;
        },
    },

    // *******************************************Luigi Missions********************************
    {
        scriptPath: `./Industrial/luigi2.mts`,
        name: `Donna' "Spank" Ma Bitch Up`,
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_luigi_mission2_passed == 0) {
                return false;
            }

            if ($.flag_luigi_mission2_passed == 1) {
                return false;
            }

            if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LM2', 15000, 2); //"Don'a SPANK ma bitch up"
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
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
        async beforeMission() {
            Text.PrintBig('MM_1', 15000, 2);
            await asyncWait(0);
        },
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
        async beforeMission() {
            Text.PrintBig('AMBUL_M', 15000, 2);
            await asyncWait(0);
            $.been_in_ambulance_before = 1;
        },
    },
    // ***************************************Fire Mission 1**********************************
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
        async beforeMission() {
            Text.PrintBig('FIRE_M', 15000, 2);
            await asyncWait(0);
            $.been_in_a_firetruk_before = 1;
        },
    },
    // ************************************** Cop Car Mission ***********************************
    {
        scriptPath: `./Industrial/copcar.ts`,
        name: 'Cop Car Mission',
        async canStart() {
            if (
                $.player.isInModel(116 /* CAR_POLICE */) ||
                $.player.isInModel(117 /* CAR_ENFORCER */) ||
                $.player.isInModel(122 /* CAR_RHINO */) ||
                $.player.isInModel(107 /* CAR_FBI */)
            ) {
                if ($.flag_player_on_cop_mission == 0) {
                    $.controlmode = Pad.GetControllerMode();
                    if ($.been_in_a_copcar_before == 0) {
                        if (!($.controlmode == 3)) {
                            Text.PrintHelp('CTUTOR'); //Press RIGHTSHOCK to start
                        } else {
                            Text.PrintHelp('CTUTOR2'); //Press SQUARE to start
                        }
                        $.been_in_a_copcar_before = 1;
                    }
                    if (!($.controlmode == 3)) {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
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
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                }
            } else {
                if ($.been_in_a_copcar_before == 1) {
                    Text.ClearHelp();
                    $.been_in_a_copcar_before = 0;
                }
            }
            return false;
        },
        async beforeMission() {
            Text.PrintBig('COP_M', 4000, 5);
            await asyncWait(0);
            $.been_in_a_copcar_before = 1;
        },
    },
    // ***************************************Taxi Mission 1**********************************
    {
        scriptPath: `./Industrial/taxi1.mts`,
        name: 'Taxi Mission 1',
        async canStart() {
            if ($.player.isInTaxi()) {
                if ($.flag_taxi1_mission_launched == 0) {
                    $.controlmode = Pad.GetControllerMode();
                    if ($.been_in_a_taxi_before == 0) {
                        if (!($.controlmode == 3)) {
                            Text.PrintHelp('TTUTOR'); //Press RIGHTSHOCK to start
                        } else {
                            Text.PrintHelp('TTUTOR2'); //Press SQUARE to start
                        }
                        $.been_in_a_taxi_before = 1;
                    }
                    if (!($.controlmode == 3)) {
                        if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
                                await asyncWait(0);
                                if (!$.player.isPlaying()) {
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
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                }
            } else {
                if ($.been_in_a_taxi_before == 1) {
                    Text.ClearHelp();
                    $.been_in_a_taxi_before = 0;
                }
            }
            return false;
        },
        async beforeMission() {
            Text.PrintBig('TAXI_M', 4000, 5);
            await asyncWait(0);
            $.been_in_a_taxi_before = 1;
        },
    },

    // *************************************Meat Factory Mission 1******************************
    {
        scriptPath: `./Industrial/meat1.mts`,
        name: 'Meat Factory Mission 1',
        async canStart() {
            if ($.flag_meat_mission1_passed == 1) {
                return false;
            }

            if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                const { hours } = Clock.GetTimeOfDay();
                if (hours >= 9 && hours < 19) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('MEA1', 15000, 2); //"THE CROOK"
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
        async afterMission() {
            if ($.flag_meat_mission1_passed == 1) {
                $.meat_phone.turnOff();
            }
        },
    },
    {
        scriptPath: `./Industrial/meat2.mts`,
        name: 'Meat Factory Mission 2',
        async canStart() {
            if ($.flag_meat_mission2_passed == 1) {
                return false;
            }

            if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                const { hours } = Clock.GetTimeOfDay();
                if (hours >= 9 && hours < 19) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('MEA2', 15000, 2); //"THE THIEVES"
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
        async afterMission() {
            if ($.flag_meat_mission2_passed == 1) {
                $.meat_phone.turnOff();
            }
        },
    },
    {
        scriptPath: `./Industrial/meat3.mts`,
        name: 'Meat Factory Mission 3',
        async canStart() {
            if ($.flag_meat_mission3_passed == 1) {
                return false;
            }

            if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                const { hours } = Clock.GetTimeOfDay();
                if (hours >= 9 && hours < 19) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('MEA3', 15000, 2); //"THE WIFE"
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
        async afterMission() {
            if ($.flag_meat_mission3_passed == 1) {
                $.meat_phone.turnOff();
            }
        },
    },
    {
        scriptPath: `./Industrial/meat4.mts`,
        name: 'Meat Factory Mission 4',
        async canStart() {
            if ($.flag_meat_mission4_passed == 1) {
                return false;
            }

            if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
                const { hours } = Clock.GetTimeOfDay();
                if (hours >= 9 && hours < 19) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('MEA4', 15000, 2); //"HER LOVER"
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
        async afterMission() {
            if ($.flag_meat_mission4_passed == 1) {
                $.meat_phone.turnOff();
            }
        },
    },

    // *******************************************Luigi Missions 3-5*****************************
    {
        scriptPath: `./Industrial/luigi3.ts`,
        name: 'Drive Misty For Me',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_luigi_mission3_passed == 0) {
                return false;
            }
            if ($.flag_luigi_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/luigi4.ts`,
        name: 'Pump Action Pimp',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_luigi_mission4_passed == 0) {
                return false;
            }
            if ($.flag_luigi_mission4_passed == 1) {
                return false;
            }
            if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
                $.flag_luigi_mission4_terminated = 1;
                return false;
            }
            if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/luigi5.ts`,
        name: 'Farewell Love Muscle',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_luigi_mission5_passed == 0) {
                return false;
            }
            if ($.flag_luigi_mission5_passed == 1) {
                return false;
            }
            if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
                $.flag_luigi_mission5_terminated = 1;
                return false;
            }
            if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Joey Missions 1-6******************************
    {
        scriptPath: `./Industrial/joey1.ts`,
        name: 'Harmless Drifter',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission1_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            const { hours } = Clock.GetTimeOfDay();
            if (!(hours >= 5 && hours < 21)) {
                Text.PrintNow('WRONGT1', 5000, 1);
                return false;
            }
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/joey2.ts`,
        name: 'Stop the Van',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission2_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/joey3.ts`,
        name: 'Kanbu Bust Out',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission3_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/joey4.ts`,
        name: 'Steal The Deal',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission4_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/joey5.ts`,
        name: 'Taken Out',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission5_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission5_passed == 1) {
                return false;
            }
            if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
                $.flag_joey_mission5_terminated = 1;
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/joey6.ts`,
        name: 'Farewell Chunky Lee Chong',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_joey_mission6_passed == 0) {
                return false;
            }
            if ($.flag_joey_mission6_passed == 1) {
                return false;
            }
            if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
                $.flag_joey_mission6_terminated = 1;
                return false;
            }
            if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            const { hours } = Clock.GetTimeOfDay();
            if (!(hours >= 6 && hours < 14)) {
                Text.PrintNow('WRONGT2', 5000, 1);
                return false;
            }
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('JM6', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Toni Missions 1-5***************************
    {
        scriptPath: `./Industrial/toni1.ts`,
        name: 'Mike Lips Last Gig',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_toni_mission1_passed == 0) {
                return false;
            }
            if ($.flag_toni_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('TM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/toni2.ts`,
        name: 'Blow Fish',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_toni_mission2_passed == 0) {
                return false;
            }
            if ($.flag_toni_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('TM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/toni3.ts`,
        name: 'Toni Cipriani',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_toni_mission3_passed == 0) {
                return false;
            }
            if ($.flag_toni_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('TM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/toni4.ts`,
        name: 'Turismo',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_toni_mission4_passed == 0) {
                return false;
            }
            if ($.flag_toni_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('TM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/toni5.ts`,
        name: 'No Escape',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_toni_mission5_passed == 0) {
                return false;
            }
            if ($.flag_toni_mission5_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('TM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Frankie Missions 1-4****************************
    {
        scriptPath: `./Industrial/frank1.ts`,
        name: 'Pulp Friction',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_frankie_mission1_passed == 0) {
                return false;
            }
            if ($.flag_frankie_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false)) {
                if ($.flag_frankie_switched_off == 0) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('FM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/frank2.ts`,
        name: "Cuttin' The Grass",
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_frankie_mission2_passed == 0) {
                return false;
            }
            if ($.flag_frankie_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false)) {
                if ($.flag_frankie_switched_off == 0) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('FM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/frank2.1.ts`,
        name: 'Bomb Da Base Part 1',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_frankie_mission2_1_passed == 0) {
                return false;
            }
            if ($.flag_frankie_mission2_1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            if ($.flag_frankie_switched_off != 0) {
                Text.PrintNow('FRANGO', 5000, 1);
                return false;
            }
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('FM21', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/frank3.ts`,
        name: 'Bomb Da Base Part 2',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_frankie_mission3_passed == 0) {
                return false;
            }
            if ($.flag_frankie_mission3_passed == 1) {
                return false;
            }
            if ($.flag_frankie_mission3_part2_launched == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1272.2, -92.9, 13.8, 1.0, 1.0, 2.0, false)) {
                if ($.flag_eightball_switched_off == 0) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('FM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/frank4.ts`,
        name: 'The Guns Part 1',
        async canStart() {
            if ($.flag_industrial_passed == 1 && $.flag_frankie_mission4_passed == 0) {
                return false;
            }
            if ($.flag_frankie_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false)) {
                if ($.flag_frankie_switched_off == 0) {
                    return true;
                }
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('FM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Diablo Missions 1-4**************************
    {
        scriptPath: `./Industrial/diablo1.ts`,
        name: 'Diablo Destruction',
        async canStart() {
            if ($.flag_diablo_mission1_passed == 1) {
                return false;
            }
            if (!$._flag_diablo_phone_start_complete) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('DIAB1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/diablo2.ts`,
        name: 'Diablos Mission 2',
        async canStart() {
            if ($.flag_diablo_mission2_passed == 1) {
                return false;
            }
            if ($.flag_diablo_mission1_passed == 0) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('DIAB2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/diablo3.ts`,
        name: 'Diablos Mission 3',
        async canStart() {
            if ($.flag_diablo_mission3_passed == 1) {
                return false;
            }
            if ($.flag_diablo_mission2_passed == 0) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('DIAB3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Industrial/diablo4.ts`,
        name: 'Diablos Mission 4',
        async canStart() {
            if ($.flag_diablo_mission4_passed == 1) {
                return false;
            }
            if ($.flag_diablo_mission3_passed == 0) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('DIAB4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Asuka Missions 1-5*****************************
    {
        scriptPath: `./Commercial/asuka1.ts`,
        name: 'Asuka Mission 1',
        async canStart() {
            if ($.flag_asuka_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/asuka2.ts`,
        name: 'Asuka Mission 2',
        async canStart() {
            if ($.flag_asuka_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/asuka3.ts`,
        name: 'Asuka Mission 3',
        async canStart() {
            if ($.flag_asuka_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/asuka4.ts`,
        name: 'Asuka Mission 4',
        async canStart() {
            if ($.flag_asuka_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/asuka5.ts`,
        name: 'Asuka Mission 5',
        async canStart() {
            if ($.flag_love_mission4_passed == 1) {
                return false;
            }
            if ($.flag_asuka_mission5_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Kenji Missions 1-5****************************
    {
        scriptPath: `./Commercial/kenji1.ts`,
        name: 'Kanbu Bust Out',
        async canStart() {
            if ($.flag_kenji_mission1_passed == 1 || $.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('KM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/kenji2.ts`,
        name: 'Gone in Sixty Seconds',
        async canStart() {
            if ($.flag_kenji_mission2_passed == 1 || $.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('KM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/kenji3.ts`,
        name: 'Kenji Mission 3',
        async canStart() {
            if ($.flag_kenji_mission3_passed == 1 || $.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('KM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/kenji4.ts`,
        name: 'Shima',
        async canStart() {
            if ($.flag_kenji_mission4_passed == 1 || $.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('KM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/kenji5.ts`,
        name: 'Smack Down',
        async canStart() {
            if ($.flag_kenji_mission5_passed == 1 || $.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('KM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Ray Missions 1-6*****************************
    {
        scriptPath: `./Commercial/ray1.ts`,
        name: 'Silence the Sneak',
        async canStart() {
            if ($.flag_ray_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/ray2.ts`,
        name: 'Arms Shortage',
        async canStart() {
            if ($.flag_ray_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/ray3.ts`,
        name: 'Evidence Dash',
        async canStart() {
            if ($.flag_ray_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/ray4.ts`,
        name: 'Gone Fishing',
        async canStart() {
            if ($.flag_ray_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/ray5.ts`,
        name: 'Ray Mission 5',
        async canStart() {
            if ($.flag_ray_mission5_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/ray6.ts`,
        name: 'Ray Mission 6',
        async canStart() {
            if ($.flag_ray_mission6_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.rays_cutscene_flag = 1;
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('RM6', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Love Missions 1-7****************************
    {
        scriptPath: `./Commercial/love1.ts`,
        name: 'Rescue the Old Oriental Gentleman',
        async canStart() {
            if ($.flag_love_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/love2.ts`,
        name: 'Love Mission 2',
        async canStart() {
            if ($.flag_love_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/love3.ts`,
        name: 'Love Mission 3',
        async canStart() {
            if ($.flag_love_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/love4.ts`,
        name: 'Her Lover',
        async canStart() {
            if ($.flag_love_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/love5.ts`,
        name: 'Love Mission 5',
        async canStart() {
            if ($.flag_love_mission5_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/love6.ts`,
        name: 'Love Mission 6',
        async canStart() {
            if ($.flag_love_mission6_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE6', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/love7.ts`,
        name: 'Love Mission 7',
        async canStart() {
            if ($.flag_love_mission7_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('LOVE7', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Yardie Missions 1-4****************************
    {
        scriptPath: `./Commercial/yard1.ts`,
        name: 'Yardie Mission 1',
        async canStart() {
            if ($.flag_yardie_mission1_passed == 1) {
                return false;
            }
            if (!$._flag_yardie_phone_start_complete) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('YD1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/yard2.ts`,
        name: 'Yardie Mission 2',
        async canStart() {
            if ($.flag_yardie_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('YD2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/yard3.ts`,
        name: 'Yardie Mission 3',
        async canStart() {
            if ($.flag_yardie_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('YD3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Commercial/yard4.ts`,
        name: 'Yardie Mission 4',
        async canStart() {
            if ($.flag_yardie_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('YD4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Asuka Suburban Missions 1-3*********************
    {
        scriptPath: `./Suburban/asusb1.ts`,
        name: 'Asuka Suburban Mission 1',
        async canStart() {
            if ($.flag_asuka_suburban_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AS1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/asusb2.ts`,
        name: 'Asuka Suburban Mission 2',
        async canStart() {
            if ($.flag_asuka_suburban_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AS2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/asusb3.ts`,
        name: 'Asuka Suburban Mission 3',
        async canStart() {
            if ($.flag_asuka_suburban_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('AS3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },

    // *******************************************Hood Missions 1-5**************************
    {
        scriptPath: `./Suburban/hood1.ts`,
        name: 'Uzi Driver',
        async canStart() {
            if ($.flag_hood_mission1_passed == 1) {
                return false;
            }
            if (!$._flag_hood_phone_start_complete) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('HM_1', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/hood2.ts`,
        name: 'Toyminator',
        async canStart() {
            if ($.flag_hood_mission2_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('HM_2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/hood3.ts`,
        name: 'Hood Mission 3',
        async canStart() {
            if ($.flag_hood_mission3_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('HM_3', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/hood4.ts`,
        name: 'Hood Mission 4',
        async canStart() {
            if ($.flag_hood_mission4_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('HM_4', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/hood5.ts`,
        name: 'Hood Mission 5',
        async canStart() {
            if ($.flag_hood_mission5_passed == 1) {
                return false;
            }
            if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig('HM_5', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
    {
        scriptPath: `./Suburban/cat1.ts`,
        name: 'Catalina Mission 1',
        async canStart() {
            if ($.flag_cat_mission1_passed == 1) {
                return false;
            }
            if ($.player.locateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, false)) {
                return true;
            }
            return false;
        },
        async beforeMission() {
            if (!$.nicked_half_a_mil_before && !$.player.isScoreGreater(499999)) {
                Text.PrintNow('CAT_MON', 5000, 1);
                return false;
            }
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            Text.PrintBig('CAT2', 15000, 2);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
        },
    },
];

export { missions, type MissionDefinition };
