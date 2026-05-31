// Generated from Main/Industrial/joey5.sc
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *************************************Joey mission 5****************************************
// *********************************Dead Skunk in the Trunk***********************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey5

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey5_failed
    // ENDIF

    // GOSUB mission_cleanup_joey5

    // MISSION_END

    // Variables for mission

    // VAR_INT deadman_car blip1_j5 blip2_j5

    // VAR_INT lipsbrother1_car lipsbrother2_car is_lipsbrother1_car_dead is_lipsbrother2_car_dead

    // VAR_INT lipsbrother1 lipsbrother2 skunk_message_played_before

    // VAR_INT flag_car_blip_displayed_j5 flag_car_crushed_joey5

    // VAR_INT on_new_objective_joey5_1 on_new_objective_joey5_2

    // VAR_INT flag_dont_do_car_check_joey5 flag_leave_car_message_joey5 flag_car_in_area_joey5

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey5
    await asyncWait(0);

    $.skunk_message_played_before = 0;
    $.flag_dont_do_car_check_joey5 = 0;
    $.flag_leave_car_message_joey5 = 0;
    $.flag_car_in_area_joey5 = 0;

    setup_block: {
        Streaming.LoadSpecialCharacter(1, 'joey');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'JOEYH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'PLAYERH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'TROLL');
        Streaming.RequestModel(CAR_IDAHO);
        Streaming.RequestModel(939 /* jogarageext */);
        Streaming.RequestModel(1074 /* jogarageint */);

        //LOAD_SCENE 1190.07 -869.86 13.97

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */)
        ) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */) || !Streaming.HasModelLoaded(CAR_IDAHO)) {
            await asyncWait(0);
        }

        Cutscene.Load('J5_DST');
        Cutscene.SetOffset(1190.079, -869.861, 13.977);

        $.cut_car2_lm3 = Car.Create(CAR_IDAHO, 1182.5, -857.0, 14.1);
        $.cut_car2_lm3.setHeading(291.2);

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_joey = CutsceneObject.Create(PED_SPECIAL1);
        $.cs_joey.setAnim('joey');

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, CUT_OBJ1);
        $.cs_joeyhead.setAnim('joey');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ2);
        $.cs_playerhead.setAnim('player');

        $.cs_troll = CutsceneObject.Create(CUT_OBJ3);
        $.cs_troll.setAnim('TROLL');

        World.ClearArea(1191.9, -870.4, 15.0, 1.0, true);
        $.player.setCoordinates(1191.9, -870.4, -100.0);

        $.player.setHeading(230.0);

        Camera.DoFade(1500, FADE_IN);

        World.SwitchRubbish(OFF);
        Streaming.Switch(ON);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 1250) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM5_A', 10000, 2); // Mission brief

        while ($.cs_time < 5658) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM5_B', 10000, 2); // Mission brief

        while ($.cs_time < 8419) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM5_C', 10000, 2); // Mission brief

        while ($.cs_time < 12522) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM5_D', 10000, 2); // Mission brief

        while ($.cs_time < 16368) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM5_E', 10000, 2); // Mission brief

        while ($.cs_time < 18855) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 20000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, FADE_OUT);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        World.SwitchRubbish(ON);
        Cutscene.Clear();
        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, FADE_IN);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ3);
        Streaming.MarkModelAsNoLongerNeeded(CAR_IDAHO);
        Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
        Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

        $.cut_car2_lm3.delete();

        $.on_new_objective_joey5_1 = 0;
        $.on_new_objective_joey5_2 = 0;
        $.is_lipsbrother1_car_dead = 0;
        $.is_lipsbrother2_car_dead = 0;
        $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
        $.flag_car_crushed_joey5 = 0;

        Streaming.RequestModel(PED_GANG_MAFIA_B);
        Streaming.RequestModel(CAR_CORPSE);
        Streaming.RequestModel(CAR_SENTINEL);

        while (!Streaming.HasModelLoaded(PED_GANG_MAFIA_B) || !Streaming.HasModelLoaded(CAR_CORPSE) || !Streaming.HasModelLoaded(CAR_SENTINEL)) {
            await asyncWait(0);
        }

        // START OF MISSION

        $.deadman_car = Car.Create(CAR_CORPSE, 867.2, -992.8, -100.0);
        $.blip1_j5 = Blip.AddForCar($.deadman_car);

        $.lipsbrother1_car = Car.Create(CAR_SENTINEL, 892.0, -992.3, 4.6);
        $.lipsbrother1_car.setHeading(90.0);
        $.lipsbrother1_car.setStrong(true);
        $.lipsbrother1 = Char.CreateInsideCar($.lipsbrother1_car, PEDTYPE_GANG_MAFIA, PED_GANG_MAFIA_B);
        $.lipsbrother1.giveWeapon(WEAPONTYPE_PISTOL, 60);
        $.lipsbrother1_car.setIdle();
        $.lipsbrother1_car.lockDoors(CARLOCK_LOCKED);
        $.lipsbrother1_car.setOnlyDamagedByPlayer(true);

        $.lipsbrother2_car = Car.Create(CAR_SENTINEL, 800.0, -961.9, -100.0);
        $.lipsbrother2_car.setHeading(241.0);
        $.lipsbrother2_car.setStrong(true);
        $.lipsbrother2 = Char.CreateInsideCar($.lipsbrother2_car, PEDTYPE_GANG_MAFIA, PED_GANG_MAFIA_B);
        $.lipsbrother2.giveWeapon(WEAPONTYPE_PISTOL, 60);
        $.lipsbrother2_car.setIdle();
        $.lipsbrother2_car.lockDoors(CARLOCK_LOCKED);
        $.lipsbrother2_car.setOnlyDamagedByPlayer(true);

        while (!$.player.isInCar($.deadman_car)) {
            await asyncWait(0);
            if (Car.IsDead($.deadman_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey5_failed");
            }
            if ($.deadman_car.isUpsidedown() && $.deadman_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey5_failed");
            }
            if (Char.IsDead($.lipsbrother1) && $.is_lipsbrother1_car_dead == 0) {
                $.player.addScore(5000);
                $.is_lipsbrother1_car_dead = 1;
            }
            if (Char.IsDead($.lipsbrother2) && $.is_lipsbrother2_car_dead == 0) {
                $.player.addScore(5000);
                $.is_lipsbrother2_car_dead = 1;
            }
            if (!Car.IsDead($.lipsbrother1_car)) {
                if (!$.lipsbrother1_car.isHealthGreater(999)) {
                    Text.PrintNow('JM5_2', 5000, 1); // Gosh! it's the Forelis!
                    break setup_block; // SCM GOTO → kill_the_player
                }
            }
            if (!Car.IsDead($.lipsbrother2_car)) {
                if (!$.lipsbrother2_car.isHealthGreater(999)) {
                    Text.PrintNow('JM5_2', 5000, 1); // Gosh! it's the Forelis!
                    break setup_block; // SCM GOTO → kill_the_player
                }
            }
        }

        Game.SetPoliceIgnorePlayer($.player, ON);
        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);

        Camera.SetFixedPosition(863.389, -988.698, 4.35, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(864.217, -989.236, 4.507, JUMP_CUT);
        World.SetPedDensityMultiplier(0.0);

        Text.PrintNow('JM5_2', 5000, 1); // Gosh! it's the Forelis!

        await asyncWait(1500);

        if (!Char.IsDead($.lipsbrother1)) {
            if (!Car.IsDead($.lipsbrother1_car)) {
                $.lipsbrother1_car.setMission(MISSION_RAMPLAYER_FARAWAY);
                $.lipsbrother1_car.setOnlyDamagedByPlayer(false);
                $.lipsbrother1_car.setCruiseSpeed(40.0);
                $.lipsbrother1_car.setDrivingStyle(2);
                $.lipsbrother1.setThreatSearch(THREAT_PLAYER1);
            }
        }

        if (!Char.IsDead($.lipsbrother2)) {
            if (!Car.IsDead($.lipsbrother2_car)) {
                $.lipsbrother2_car.setMission(MISSION_BLOCKPLAYER_FARAWAY);
                $.lipsbrother2_car.setOnlyDamagedByPlayer(false);
                $.lipsbrother2_car.setCruiseSpeed(40.0);
                $.lipsbrother2_car.setDrivingStyle(2);
                $.lipsbrother2.setThreatSearch(THREAT_PLAYER1);
            }
        }

        await asyncWait(1500);

        World.SetPedDensityMultiplier(1.0);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.RestoreJumpcut();
    }

    kill_the_player: {
        if (!Char.IsDead($.lipsbrother1)) {
            if (!Car.IsDead($.lipsbrother1_car)) {
                $.lipsbrother1_car.setMission(MISSION_RAMPLAYER_FARAWAY);
                $.lipsbrother1_car.setOnlyDamagedByPlayer(false);
                $.lipsbrother1_car.setCruiseSpeed(40.0);
                $.lipsbrother1_car.setDrivingStyle(2);
                $.lipsbrother1.setThreatSearch(THREAT_PLAYER1);
            }
        }

        if (!Char.IsDead($.lipsbrother2)) {
            if (!Car.IsDead($.lipsbrother2_car)) {
                $.lipsbrother2_car.setMission(MISSION_RAMPLAYER_FARAWAY);
                $.lipsbrother2_car.setOnlyDamagedByPlayer(false);
                $.lipsbrother2_car.setCruiseSpeed(40.0);
                $.lipsbrother2_car.setDrivingStyle(2);
                $.lipsbrother2.setThreatSearch(THREAT_PLAYER1);
            }
        }

        $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, -100.0);

        //	char_dead1 = 0
        //	char_dead2 = 0

        $.blip2_j5.remove();

        $.blob_flag = 1;
    }

    car_not_quite_under_crane: await asyncWait(0);

    if (Car.IsDead($.deadman_car)) {
        Text.PrintNow('WRECKED', 5000, 1);
        FAIL("mission_joey5_failed");
    }

    while (!$.deadman_car.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 30.0, !!$.blob_flag)) {
        await asyncWait(0);
        await skunk_car_check(); // SCM GOSUB skunk_car_check
        if (Car.IsDead($.deadman_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        } else {
            if ($.deadman_car.isInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 30.0, false)) {
                $.flag_dont_do_car_check_joey5 = 1;
                if ($.flag_leave_car_message_joey5 == 0) {
                    Text.PrintNow('OUT_VEH', 4000, 1); //"Get out of the car!"
                    $.flag_leave_car_message_joey5 = 1;
                }
            } else {
                $.flag_leave_car_message_joey5 = 0;
                $.flag_dont_do_car_check_joey5 = 0;
            }
        }
        if ($.deadman_car.isUpsidedown() && $.deadman_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        }
        if ($.flag_dont_do_car_check_joey5 == 0) {
            if (!Car.IsDead($.deadman_car)) {
                if ($.player.isInCar($.deadman_car)) {
                    if ($.flag_car_blip_displayed_j5 == 1 /* TRUE */) {
                        $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, -100.0);
                        $.blip2_j5.changeDisplay(BLIP_ONLY);
                        $.blip1_j5.remove();
                        $.flag_car_blip_displayed_j5 = 0 /* FALSE */;
                        $.blob_flag = 1;
                    }
                }
                if (!$.player.isInCar($.deadman_car)) {
                    if ($.flag_car_blip_displayed_j5 == 0 /* FALSE */) {
                        $.blip1_j5 = Blip.AddForCar($.deadman_car);
                        $.blip2_j5.remove();
                        Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                        $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
                        $.blob_flag = 0;
                    }
                }
            }
        }
        if ($.flag_player_had_crusher_help_hm5 == 0) {
            if ($.player.locateAnyMeans2D(1140.3, 50.1, 20.0, 20.0, false)) {
                if ($.player.isInCar($.deadman_car)) {
                    Text.PrintHelp('CRUSH'); //"To crush the car..."
                    $.flag_player_had_crusher_help_hm5 = 1;
                }
            }
        }
        if ($.player.isInCar($.deadman_car) && $.skunk_message_played_before == 0) {
            Text.PrintNow('JM5_1', 4000, 1); // Take it to the crusher
            $.skunk_message_played_before = 1;
        }
    }

    if (Car.IsDead($.deadman_car)) {
        Text.PrintNow('WRECKED', 5000, 1);
        FAIL("mission_joey5_failed");
    }

    $.blob_flag = 1;

    while (!Crane.IsLiftingCar(1120.0, 46.0, $.deadman_car)) {
        await asyncWait(0);
        await skunk_car_check(); // SCM GOSUB skunk_car_check
        if (Car.IsDead($.deadman_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        }
        if ($.deadman_car.isUpsidedown() && $.deadman_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        }
        if ($.deadman_car.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 20.0, !!$.blob_flag)) {
            $.flag_car_in_area_joey5 = 1;
        } else {
            $.flag_car_in_area_joey5 = 0;
        }
        if ($.flag_car_in_area_joey5 == 0) {
            if (!Car.IsDead($.deadman_car)) {
                if ($.player.isInCar($.deadman_car)) {
                    if ($.flag_car_blip_displayed_j5 == 1 /* TRUE */) {
                        $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, -100.0);
                        $.blip2_j5.changeDisplay(BLIP_ONLY);
                        $.blip1_j5.remove();
                        $.flag_car_blip_displayed_j5 = 0 /* FALSE */;
                        $.blob_flag = 1;
                    }
                }
                if (!$.player.isInCar($.deadman_car)) {
                    if ($.flag_car_blip_displayed_j5 == 0 /* FALSE */) {
                        $.blip1_j5 = Blip.AddForCar($.deadman_car);
                        $.blip2_j5.remove();
                        Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                        $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
                        $.blob_flag = 0;
                    }
                }
            }
        }
    }

    $.blip1_j5.remove();
    $.blip2_j5.remove();
    Text.ClearPrints();

    while (!$.deadman_car.isCrushed()) {
        await skunk_car_check(); // SCM GOSUB skunk_car_check
        if (Car.IsDead($.deadman_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        }
        if ($.deadman_car.isCrushed()) {
            return; // SCM GOTO → mission_joey5_passed
        }
        if ($.deadman_car.isUpsidedown() && $.deadman_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey5_failed");
        }
        await asyncWait(0);
    }

    return; // SCM GOTO → mission_joey5_passed
}

// Mission joey5 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission joey5 passed
async function onPassed() {
    $.flag_joey_mission5_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(10000);
    Stat.RegisterMissionPassed('JM5');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT joey_mission6_loop
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    $.blip1_j5.remove();
    $.blip2_j5.remove();
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_MAFIA_B);
    Streaming.MarkModelAsNoLongerNeeded(CAR_SENTINEL);
    Streaming.MarkModelAsNoLongerNeeded(CAR_CORPSE);
    if (!Car.IsDead($.lipsbrother1_car)) {
        $.lipsbrother1_car.lockDoors(CARLOCK_UNLOCKED);
    }
    if (!Car.IsDead($.lipsbrother2_car)) {
        $.lipsbrother2_car.lockDoors(CARLOCK_UNLOCKED);
    }
    Mission.Finish();
}

// *********************************************************
async function skunk_car_check() {
    {
        if (Char.IsDead($.lipsbrother1) && $.is_lipsbrother1_car_dead == 0) {
            $.player.addScore(5000);
            $.is_lipsbrother1_car_dead = 1;
        }

        if (Char.IsDead($.lipsbrother2) && $.is_lipsbrother2_car_dead == 0) {
            $.player.addScore(5000);
            $.is_lipsbrother2_car_dead = 1;
        }

        if (!Car.IsDead($.lipsbrother1_car)) {
            if ($.lipsbrother1_car.isUpsidedown() && $.lipsbrother1_car.isStopped() && $.on_new_objective_joey5_1 == 0) {
                if (!Char.IsDead($.lipsbrother1)) {
                    $.lipsbrother1_car.lockDoors(CARLOCK_UNLOCKED);
                    $.lipsbrother1.setObjKillPlayerOnFoot($.player);
                }
                $.on_new_objective_joey5_1 = 1;
            }
            if ($.lipsbrother1_car.isInArea2D(1122.7, 2.9, 1183.8, 111.9, false) && $.on_new_objective_joey5_1 == 0) {
                if (!Char.IsDead($.lipsbrother1)) {
                    $.lipsbrother1_car.lockDoors(CARLOCK_UNLOCKED);
                    $.lipsbrother1.setObjKillPlayerOnFoot($.player);
                }
                $.on_new_objective_joey5_1 = 1;
            }
        }

        if (!Car.IsDead($.lipsbrother2_car)) {
            if ($.lipsbrother2_car.isUpsidedown() && $.lipsbrother2_car.isStopped() && $.on_new_objective_joey5_2 == 0) {
                if (!Char.IsDead($.lipsbrother2)) {
                    $.lipsbrother2_car.lockDoors(CARLOCK_UNLOCKED);
                    $.lipsbrother2.setObjKillPlayerOnFoot($.player);
                }
                $.on_new_objective_joey5_2 = 1;
            }
            if (!Car.IsDead($.lipsbrother2_car)) {
                if ($.lipsbrother2_car.isInArea2D(1122.7, 2.9, 1183.8, 111.9, false) && $.on_new_objective_joey5_1 == 0) {
                    if (!Char.IsDead($.lipsbrother2)) {
                        $.lipsbrother2_car.lockDoors(CARLOCK_UNLOCKED);
                        $.lipsbrother2.setObjKillPlayerOnFoot($.player);
                    }
                    $.on_new_objective_joey5_1 = 1;
                }
            }
        }

        return;
    }
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
