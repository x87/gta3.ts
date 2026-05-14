// Generated from Main/Commercial/asuka2.sc
import { $ } from '../../utils';


async function mission_start_asuka2() {
    Stat.RegisterMissionGiven();
    $.flag_player_on_mission = 1;
    $.flag_player_on_asuka_mission = 1;
    // SCRIPT_NAME asuka2
    await asyncWait(0);

    $.number_of_feds_killed = 0;
    $.been_damaged_before = 0;
    $.fbi_spotted_player = 0;
    $.fbi_spotted_player2 = 0;

    {
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'ASUKAH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'KENJIH');
        Streaming.LoadSpecialCharacter(1, 'asuka');
        Streaming.LoadSpecialCharacter(2, 'kenji');
        Streaming.RequestModel(2216 /* condo_ivy */);
        Streaming.RequestModel(2215 /* kmricndo01 */);

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasSpecialCharacterLoaded(2) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */)
        ) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(2216 /* condo_ivy */) || !Streaming.HasModelLoaded(2215 /* kmricndo01 */)) {
            await asyncWait(0);
        }

        Cutscene.Load('A3_SS');
        Cutscene.SetOffset(523.102, -636.96, 15.616);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_asuka = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_asuka.setAnim('asuka');

        $.cs_kenji = CutsceneObject.Create(27 /* PED_SPECIAL2 */);
        $.cs_kenji.setAnim('kenji');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
        $.cs_playerhead.setAnim('player');

        $.cs_asukahead = CutsceneHead.Create($.cs_asuka, 186 /* CUT_OBJ2 */);
        $.cs_asukahead.setAnim('asuka');

        $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, 187 /* CUT_OBJ3 */);
        $.cs_kenjihead.setAnim('kenji');

        World.ClearArea(523.6, -639.4, 16.6, 1.0, true /* TRUE */);
        $.player.setCoordinates(523.6, -639.4, 16.0);

        $.player.setHeading(180.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);
        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 1892) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_A', 10000, 1);

        while ($.cs_time < 4983) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_A2', 10000, 1);

        while ($.cs_time < 8705) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_B', 10000, 1);

        while ($.cs_time < 10494) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_C', 10000, 1);

        while ($.cs_time < 16940) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_D', 10000, 1);

        while ($.cs_time < 22566) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_E', 10000, 1);

        while ($.cs_time < 26394) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_E2', 10000, 1);

        while ($.cs_time < 28456) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_F', 10000, 1);

        while ($.cs_time < 32144) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM2_G', 10000, 1);

        while ($.cs_time < 36663) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 39000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        World.SwitchRubbish(true /* ON */);
        Cutscene.Clear();
        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(187 /* CUT_OBJ3 */);
        Streaming.MarkModelAsNoLongerNeeded(2216 /* condo_ivy */);
        Streaming.MarkModelAsNoLongerNeeded(2215 /* kmricndo01 */);
        Streaming.UnloadSpecialCharacter(1);
        Streaming.UnloadSpecialCharacter(2);

        Streaming.RequestModel(10 /* PED_GANG_MAFIA_A */);
        Streaming.RequestModel(11 /* PED_GANG_MAFIA_B */);
        Streaming.RequestModel(130 /* CAR_RUMPO */);

        while (!Streaming.HasModelLoaded(10 /* PED_GANG_MAFIA_A */) || !Streaming.HasModelLoaded(11 /* PED_GANG_MAFIA_B */) || !Streaming.HasModelLoaded(130 /* CAR_RUMPO */)) {
            await asyncWait(0);
        }

        // MISSION START

        $.fed1_already_dead = 0;
        $.fed2_already_dead = 0;
        $.fed3_already_dead = 0;
        $.fed4_already_dead = 0;
        $.fed5_already_dead = 0;
        $.fed6_already_dead = 0;
        $.fed7_already_dead = 0;
        $.fed8_already_dead = 0;
        $.fed9_already_dead = 0;
        $.fed10_already_dead = 0;
        $.fedvan1_already_dead = 0;

        //ADD_BLIP_FOR_COORD 430.0 -1448.7 -100.0 blip1_FBI1

        $.countdown_as2 = 391000;
        Hud.DisplayTimer($.countdown_as2);

        //FEDS ON TOWER BLOCK*****************************************************************************

        $.FBI1 = Char.Create(4 /* PEDTYPE_CIVMALE */, 10 /* PED_GANG_MAFIA_A */, 383.0, -1447.9, 51.4); //Floor4
        $.FBI1.setHeading(304.0);
        $.FBI1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI1.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI1.setStayInSamePlace(true /* TRUE */);
        $.FBI1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip1_FBI1 = Blip.AddForChar($.FBI1);
        //ADD_ARMOUR_TO_CHAR FBI1 99

        $.FBI2 = Char.Create(4 /* PEDTYPE_CIVMALE */, 11 /* PED_GANG_MAFIA_B */, 381.2, -1438.2, 63.4); //floor6
        $.FBI2.setHeading(304.0);
        $.FBI2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI2.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI2.setStayInSamePlace(true /* TRUE */);
        $.FBI2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip2_FBI2 = Blip.AddForChar($.FBI2);
        //ADD_ARMOUR_TO_CHAR FBI2 99

        $.FBI3 = Char.Create(4 /* PEDTYPE_CIVMALE */, 10 /* PED_GANG_MAFIA_A */, 383.5, -1452.3, 69.4); //floor7
        $.FBI3.setHeading(304.0);
        $.FBI3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI3.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI3.setStayInSamePlace(true /* TRUE */);
        $.FBI3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip3_FBI3 = Blip.AddForChar($.FBI3);
        //ADD_ARMOUR_TO_CHAR FBI3 99

        $.FBI8 = Char.Create(4 /* PEDTYPE_CIVMALE */, 11 /* PED_GANG_MAFIA_B */, 381.6, -1451.7, 57.5); //floor5
        $.FBI8.setHeading(304.0);
        $.FBI8.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI8.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI8.setStayInSamePlace(true /* TRUE */);
        $.FBI8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip8_FBI8 = Blip.AddForChar($.FBI8);
        //ADD_ARMOUR_TO_CHAR FBI8 99

        $.FBI9 = Char.Create(4 /* PEDTYPE_CIVMALE */, 10 /* PED_GANG_MAFIA_A */, 381.4, -1443.5, 75.5); //floor8
        $.FBI9.setHeading(304.0);
        $.FBI9.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI9.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI9.setStayInSamePlace(true /* TRUE */);
        $.FBI9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip9_FBI9 = Blip.AddForChar($.FBI9);
        //ADD_ARMOUR_TO_CHAR FBI9 99

        $.FBI10 = Char.Create(4 /* PEDTYPE_CIVMALE */, 11 /* PED_GANG_MAFIA_B */, 379.0, -1449.6, 81.4); //floor9 (Top)
        $.FBI10.setHeading(304.0);
        $.FBI10.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI10.giveWeapon(6 /* WEAPONTYPE_M16 */, 600);
        $.FBI10.setStayInSamePlace(true /* TRUE */);
        $.FBI10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip10_FBI10 = Blip.AddForChar($.FBI10);
        //ADD_ARMOUR_TO_CHAR FBI10 99

        //FEDS AT PARK**********************************************************************************

        $.FBI4 = Char.Create(4 /* PEDTYPE_CIVMALE */, 10 /* PED_GANG_MAFIA_A */, 48.4, -642.8, 29.0); //Park
        $.FBI4.setHeading(169.0);
        $.FBI4.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
        $.FBI4.setStayInSamePlace(true /* TRUE */);
        $.FBI4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip4_FBI4 = Blip.AddForChar($.FBI4);
        //ADD_ARMOUR_TO_CHAR FBI4 99

        $.FBI7 = Char.Create(4 /* PEDTYPE_CIVMALE */, 11 /* PED_GANG_MAFIA_B */, 42.2, -641.3, 27.8); //Park
        $.FBI7.setHeading(208.0);
        $.FBI7.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
        $.FBI7.setStayInSamePlace(true /* TRUE */);
        $.FBI7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.blip7_FBI7 = Blip.AddForChar($.FBI7);
        //ADD_ARMOUR_TO_CHAR FBI7 99

        //FEDS IN VAN**********************************************************************************

        $.FBI_VAN1 = Car.Create(130 /* CAR_RUMPO */, 61.3, -1389.4, 26.3);
        $.FBI_VAN1.changeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
        $.FBI_VAN1.setOnlyDamagedByPlayer(true /* True */);
        $.FBI_VAN1.lockDoors(2 /* CARLOCK_LOCKED */);
        $.FBI_VAN1.setHeading(151.0);
        $.FBI5 = Char.CreateInsideCar($.FBI_VAN1, 4 /* PEDTYPE_CIVMALE */, 10 /* PED_GANG_MAFIA_A */);
        $.blip5_FBI5 = Blip.AddForChar($.FBI5);
        $.FBI6 = Char.CreateAsPassenger($.FBI_VAN1, 4 /* PEDTYPE_CIVMALE */, 11 /* PED_GANG_MAFIA_B */, 2);
        $.blip6_FBI6 = Blip.AddForChar($.FBI6);
        $.FBI_VAN1.setIdle();
        $.FBI5.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI6.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.FBI5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.FBI6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.FBI5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
        $.FBI6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);

        /*
  LOAD_MISSION_AUDIO A3_A

  WHILE NOT HAS_MISSION_AUDIO_LOADED
  WAIT 0
  ENDWHILE
  */

        while (!($.number_of_feds_killed == 10)) {
            await asyncWait(0);
            if (Char.IsDead($.FBI1) && $.fed1_already_dead == 0) {
                $.blip1_FBI1.remove();
                $.number_of_feds_killed++;
                $.fed1_already_dead = 1;
            }
            if (Char.IsDead($.FBI2) && $.fed2_already_dead == 0) {
                $.blip2_FBI2.remove();
                $.number_of_feds_killed++;
                $.fed2_already_dead = 1;
            }
            if (Char.IsDead($.FBI3) && $.fed3_already_dead == 0) {
                $.blip3_FBI3.remove();
                $.number_of_feds_killed++;
                $.fed3_already_dead = 1;
            }
            if (Char.IsDead($.FBI4) && $.fed4_already_dead == 0) {
                $.blip4_FBI4.remove();
                $.number_of_feds_killed++;
                $.fed4_already_dead = 1;
            }
            if (Char.IsDead($.FBI5) && $.fed5_already_dead == 0) {
                $.blip5_FBI5.remove();
                $.number_of_feds_killed++;
                $.fed5_already_dead = 1;
            }
            if (Char.IsDead($.FBI6) && $.fed6_already_dead == 0) {
                $.blip6_FBI6.remove();
                $.number_of_feds_killed++;
                $.fed6_already_dead = 1;
            }
            if (Char.IsDead($.FBI7) && $.fed7_already_dead == 0) {
                $.blip7_FBI7.remove();
                $.number_of_feds_killed++;
                $.fed7_already_dead = 1;
            }
            if (Char.IsDead($.FBI8) && $.fed8_already_dead == 0) {
                $.blip8_FBI8.remove();
                $.number_of_feds_killed++;
                $.fed8_already_dead = 1;
            }
            if (Char.IsDead($.FBI9) && $.fed9_already_dead == 0) {
                $.blip9_FBI9.remove();
                $.number_of_feds_killed++;
                $.fed9_already_dead = 1;
            }
            if (Char.IsDead($.FBI10) && $.fed10_already_dead == 0) {
                $.blip10_FBI10.remove();
                $.number_of_feds_killed++;
                $.fed10_already_dead = 1;
            }

            //CHECK PED HEALTH
            if (!Char.IsDead($.FBI1)) {
                $.FBI1health = $.FBI1.getHealth();
            }
            if (!Char.IsDead($.FBI2)) {
                $.FBI2health = $.FBI2.getHealth();
            }
            if (!Char.IsDead($.FBI3)) {
                $.FBI3health = $.FBI3.getHealth();
            }
            if (!Char.IsDead($.FBI4)) {
                $.FBI4health = $.FBI4.getHealth();
            }
            if (!Char.IsDead($.FBI7)) {
                $.FBI7health = $.FBI7.getHealth();
            }
            if (!Char.IsDead($.FBI8)) {
                $.FBI8health = $.FBI8.getHealth();
            }
            if (!Char.IsDead($.FBI9)) {
                $.FBI9health = $.FBI9.getHealth();
            }
            if (!Char.IsDead($.FBI10)) {
                $.FBI10health = $.FBI10.getHealth();
            }

            //PARK
            if ($.FBI4health < 100 || $.FBI7health < 100) {
                if ($.fbi_spotted_player2 == 0) {
                    if (!Char.IsDead($.FBI4)) {
                        $.FBI4.setObjKillPlayerOnFoot($.player);
                        $.FBI4.setAccuracy(70);
                    }
                    if (!Char.IsDead($.FBI7)) {
                        $.FBI7.setObjKillPlayerOnFoot($.player);
                        $.FBI7.setAccuracy(70);
                    }
                    $.fbi_spotted_player2 = 1;
                }
            }

            //PARK
            if (Char.IsDead($.FBI4) || Char.IsDead($.FBI7)) {
                if ($.fbi_spotted_player2 == 0) {
                    if (!Char.IsDead($.FBI4)) {
                        $.FBI4.setObjKillPlayerOnFoot($.player);
                        $.FBI4.setAccuracy(70);
                    }
                    if (!Char.IsDead($.FBI7)) {
                        $.FBI7.setObjKillPlayerOnFoot($.player);
                        $.FBI7.setAccuracy(70);
                    }
                    $.fbi_spotted_player2 = 1;
                }
            }

            //ROOFTOP
            if ($.FBI1health < 100 || $.FBI2health < 100 || $.FBI3health < 100 || $.FBI8health < 100 || $.FBI9health < 100 || $.FBI10health < 100) {
                if ($.fbi_spotted_player == 0) {
                    //PLAY_MISSION_AUDIO

                    if (!Char.IsDead($.FBI1)) {
                        $.FBI1.setObjKillPlayerOnFoot($.player);
                        $.FBI1.setAccuracy(50);
                    }
                    if (!Char.IsDead($.FBI2)) {
                        $.FBI2.setObjKillPlayerOnFoot($.player);
                        $.FBI2.setAccuracy(50);
                    }
                    if (!Char.IsDead($.FBI3)) {
                        await asyncWait(500);
                        if (!Char.IsDead($.FBI3)) {
                            $.FBI3.setObjKillPlayerOnFoot($.player);
                            $.FBI3.setAccuracy(50);
                        }
                    }
                    if (!Char.IsDead($.FBI8)) {
                        $.FBI8.setObjKillPlayerOnFoot($.player);
                        $.FBI8.setAccuracy(50);
                    }
                    if (!Char.IsDead($.FBI9)) {
                        await asyncWait(1000);
                        if (!Char.IsDead($.FBI9)) {
                            $.FBI9.setObjKillPlayerOnFoot($.player);
                            $.FBI9.setAccuracy(50);
                        }
                    }
                    if (!Char.IsDead($.FBI10)) {
                        await asyncWait(1000);
                        if (!Char.IsDead($.FBI10)) {
                            $.FBI10.setObjKillPlayerOnFoot($.player);
                            $.FBI10.setAccuracy(70);
                        }
                    }
                    $.fbi_spotted_player = 1;
                }
            }

            //ROOFTOP
            if (Char.IsDead($.FBI1) || Char.IsDead($.FBI2) || Char.IsDead($.FBI3) || Char.IsDead($.FBI8) || Char.IsDead($.FBI9) || Char.IsDead($.FBI10)) {
                if ($.fbi_spotted_player == 0) {
                    //PLAY_MISSION_AUDIO

                    if (!Char.IsDead($.FBI1)) {
                        $.FBI1.setObjKillPlayerOnFoot($.player);
                        $.FBI1.setAccuracy(40);
                    }
                    if (!Char.IsDead($.FBI2)) {
                        $.FBI2.setObjKillPlayerOnFoot($.player);
                        $.FBI2.setAccuracy(40);
                    }
                    if (!Char.IsDead($.FBI3)) {
                        await asyncWait(500);
                        if (!Char.IsDead($.FBI3)) {
                            $.FBI3.setObjKillPlayerOnFoot($.player);
                            $.FBI3.setAccuracy(50);
                        }
                    }
                    if (!Char.IsDead($.FBI8)) {
                        $.FBI8.setObjKillPlayerOnFoot($.player);
                        $.FBI8.setAccuracy(40);
                    }
                    if (!Char.IsDead($.FBI9)) {
                        await asyncWait(1000);
                        if (!Char.IsDead($.FBI9)) {
                            $.FBI9.setObjKillPlayerOnFoot($.player);
                            $.FBI9.setAccuracy(50);
                        }
                    }
                    if (!Char.IsDead($.FBI10)) {
                        await asyncWait(1000);
                        if (!Char.IsDead($.FBI10)) {
                            $.FBI10.setObjKillPlayerOnFoot($.player);
                            $.FBI10.setAccuracy(70);
                        }
                    }

                    $.fbi_spotted_player = 1;
                }
            }
            if (!Car.IsDead($.FBI_VAN1)) {
                if (!$.FBI_VAN1.isHealthGreater(999) && $.been_damaged_before == 0) {
                    if (!Char.IsDead($.FBI5) && !Char.IsDead($.FBI6)) {
                        $.FBI_VAN1.setOnlyDamagedByPlayer(false /* false */);
                        $.FBI5.setObjKillPlayerAnyMeans($.player);
                        $.FBI6.setObjKillPlayerAnyMeans($.player);
                        $.FBI_VAN1.lockDoors(1 /* CARLOCK_UNLOCKED */);
                        $.been_damaged_before = 1;
                    }
                }
            }
            if ($.countdown_as2 == 0) {
                // SCM GOTO → mission_asuka2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka2_failed'); // fallback: would break linear control flow
            }
        }
    }

    // SCM GOTO → mission_asuka2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_asuka2_passed'); // fallback: would break linear control flow

    // Mission asuka2 failed
}

async function mission_asuka2_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    return;

    // mission asuka2 passed
}

async function mission_asuka2_passed() {
    $.flag_asuka_mission2_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 15000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(15000);
    Stat.RegisterMissionPassed('AM2');
    Stat.PlayerMadeProgress(1);
    $.kenji_contact_blip = Blip.AddSpriteForContactPoint(459.1, -1413.0, 26.1, 11 /* RADAR_SPRITE_KENJI */); //TEST STUFF
    $.com_ammu_nation2.remove();
    $.com_sprayshop2.remove();
    // START_NEW_SCRIPT asuka_mission3_loop
    // START_NEW_SCRIPT kenji_mission1_loop
    return;

    // mission cleanup
}

async function mission_cleanup_asuka2() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_asuka_mission = 0;
    Streaming.MarkModelAsNoLongerNeeded(10 /* PED_GANG_MAFIA_A */);
    Streaming.MarkModelAsNoLongerNeeded(11 /* PED_GANG_MAFIA_B */);
    Streaming.MarkModelAsNoLongerNeeded(130 /* CAR_RUMPO */);
    $.blip1_FBI1.remove();
    $.blip2_FBI2.remove();
    $.blip3_FBI3.remove();
    $.blip4_FBI4.remove();
    $.blip5_FBI5.remove();
    $.blip6_FBI6.remove();
    $.blip7_FBI7.remove();
    $.blip8_FBI8.remove();
    $.blip9_FBI9.remove();
    $.blip10_FBI10.remove();
    Hud.ClearTimer($.countdown_as2);
    Mission.Finish();
    return;
}

export async function asuka2() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ****************************************Asuka mission 2**********************************
    // **************************************Sniper Surveillance********************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_asuka2
    await mission_start_asuka2();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_asuka2_failed
        await mission_asuka2_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_asuka2
    await mission_cleanup_asuka2();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT tail_car_asuka2

    // VAR_INT blip1_FBI1 blip2_FBI2 blip3_FBI3 blip4_FBI4 blip5_FBI5 blip6_FBI6 blip7_FBI7 blip8_FBI8 blip9_FBI9 blip10_FBI10 blip1_FBI_VAN

    // VAR_INT countdown_as2 FBI1health FBI2health FBI3health FBI4health FBI7health FBI8health FBI9health FBI10health

    // VAR_INT FBI1 FBI2 FBI3 FBI4 FBI5 FBI6 FBI7 FBI8 FBI9 FBI10 FBI_VAN1

    // VAR_INT sniper_asuka been_damaged_before

    // VAR_INT number_of_feds_killed fed1_already_dead fed2_already_dead fed3_already_dead fed4_already_dead fed5_already_dead fed6_already_dead

    // VAR_INT fed7_already_dead fed8_already_dead fed9_already_dead fed10_already_dead

    // VAR_INT fedvan1_already_dead fbi_spotted_player fbi_spotted_player2

    // ****************************************Mission Start************************************
}
