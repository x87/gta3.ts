// Generated from Main/Commercial/asuka5.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************asuka mission 5********************************
// ********************************************Kill Tanner**********************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_asuka5

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_asuka5_failed
    // ENDIF

    // GOSUB mission_cleanup_asuka5

    // MISSION_END

    // Variables for mission

    // VAR_INT blip1_as5 blip2_as5 blip3_as5

    // VAR_INT tanner_car got_to_coord_once old_tanner_health

    // VAR_INT tanner cleared_timer_once_asuka5

    // VAR_INT test_tanner_health_counter test_tanner_health_counter2

    // VAR_FLOAT test_tanner_health_float

    // ****************************************Mission Start************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_asuka_mission = 1;
    // SCRIPT_NAME asuka5
    await asyncWait(0);

    Game.SetMaxWantedLevel(5);

    $.cleared_timer_once_asuka5 = 0;
    $.got_to_coord_once = 0;

    before_tanner_shits_it: {
        Streaming.LoadSpecialModel(CUT_OBJ2, 'NOTE');
        Streaming.LoadSpecialModel(CUT_OBJ1, 'PLAYERH');
        Streaming.RequestModel(2216 /* condo_ivy */);
        Streaming.RequestModel(2215 /* kmricndo01 */);

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasModelLoaded(CUT_OBJ1) ||
            !Streaming.HasModelLoaded(CUT_OBJ2) ||
            !Streaming.HasModelLoaded(2216 /* condo_ivy */) ||
            !Streaming.HasModelLoaded(2215 /* kmricndo01 */)
        ) {
            await asyncWait(0);
        }

        Cutscene.Load('A5_K2FT');
        Cutscene.SetOffset(523.102, -636.96, 15.616);

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_note = CutsceneObject.Create(CUT_OBJ2);
        $.cs_note.setAnim('NOTE');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ1);
        $.cs_playerhead.setAnim('player');

        World.ClearArea(523.6, -639.4, 16.6, 1.0, true);
        $.player.setCoordinates(523.6, -639.4, 16.0);

        $.player.setHeading(180.0);

        Camera.DoFade(1500, FADE_IN);

        World.SwitchRubbish(OFF);
        Streaming.Switch(ON);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2220) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM5_A', 10000, 1);

        while ($.cs_time < 4363) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM5_B', 10000, 1);

        while ($.cs_time < 11558) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM5_C', 10000, 1);

        while ($.cs_time < 16227) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM5_D', 10000, 1);

        while ($.cs_time < 17342) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 17666) {
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

        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
        Streaming.MarkModelAsNoLongerNeeded(2216 /* condo_ivy */);
        Streaming.MarkModelAsNoLongerNeeded(2215 /* kmricndo01 */);

        Streaming.RequestModel(CAR_ESPERANTO);
        Streaming.LoadSpecialCharacter(1, 'tanner');

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(CAR_ESPERANTO)) {
            await asyncWait(0);
        }

        Audio.LoadMissionAudio(SfxMission.A5_a);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        //START MISSION

        $.tanner_car = Car.Create(CAR_ESPERANTO, 420.9, -1396.5, 26.0); //TEST INDUSTRIAL!!!!!!!!!
        $.tanner_car.setHeading(90.0);
        $.tanner_car.setOnlyDamagedByPlayer(true);
        $.tanner_car.lockDoors(CARLOCK_LOCKOUT_PLAYER_ONLY);
        $.tanner_car.setStaysInCurrentLevel(true);
        $.tanner_car.setAvoidLevelTransitions(true);

        $.blip1_as5 = Blip.AddForCoord(414.0, -1378.0, -100.0);
        $.blip1_as5.changeDisplay(BLIP_ONLY);

        while (!$.player.isStoppedInArea3D(411.8, -1375.3, 25.6, 417.0, -1381.9, 28.6, true)) {
            await asyncWait(0);
            if (Car.IsDead($.tanner_car)) {
                FAIL('mission_asuka5_failed');
            }
            if (!$.tanner_car.isHealthGreater(999) || !$.tanner_car.isInArea2D(417.1, -1398.0, 425.4, -1394.9, false)) {
                Text.PrintNow('AM5_1', 5000, 1);
                FAIL('mission_asuka5_failed');
            }
        }

        $.blip1_as5.remove();

        $.blip2_as5 = Blip.AddForCar($.tanner_car);

        $.player.setControl(OFF);
        World.ClearArea(427.9, -1392.7, 21.1, 20.0, true);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Hud.SwitchWidescreen(ON);

        $.tanner = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL1, 436.5, -1399.8, 33.7); //TEST INDUSTRIAL!!!!!!!!
        $.tanner.setRunning(true);

        Camera.SetFixedPosition(437.4, -1387.4, 30.9, 0.0, 0.0, 0.0); //TEST INDUSTRIAL!!!!!!!!
        Camera.PointAtChar($.tanner, FIXED, JUMP_CUT);

        TIMERB = 0;
        $.tanner.setObjRunToCoord(435.7, -1388.8);

        while (!$.tanner.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.tanner)) {
                return; // SCM GOTO → mission_asuka5_passed
            }
            if (Car.IsDead($.tanner_car)) {
                FAIL('mission_asuka5_failed');
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.tanner.setCoordinates(435.7, -1388.8, -100.0);
                }
            }
        }

        TIMERB = 0;
        $.tanner.setObjRunToCoord(423.5, -1388.8);

        while (!$.tanner.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.tanner)) {
                return; // SCM GOTO → mission_asuka5_passed
            }
            if (Car.IsDead($.tanner_car)) {
                FAIL('mission_asuka5_failed');
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.tanner.setCoordinates(427.3, -1388.6, 25.0);
                }
            }
        }

        TIMERB = 0;
        $.tanner.setObjRunToCoord(423.6, -1393.1);

        while (!$.tanner.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.tanner)) {
                return; // SCM GOTO → mission_asuka5_passed
            }
            if (Car.IsDead($.tanner_car)) {
                FAIL('mission_asuka5_failed');
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.tanner.setCoordinates(423.6, -1393.1, 25.0);
                }
            }
        }

        Camera.SetFixedPosition(436.0, -1390.8, 31.0, 0.0, 0.0, 0.0); //TEST INDUSTRIAL!!!!!!!!
        Camera.PointAtChar($.tanner, FIXED, INTERPOLATION);

        $.tanner.setObjEnterCarAsDriver($.tanner_car);

        while (!$.tanner.isInCar($.tanner_car)) {
            await asyncWait(0);
            if (Char.IsDead($.tanner)) {
                return; // SCM GOTO → mission_asuka5_passed
            }
            if (Car.IsDead($.tanner_car)) {
                FAIL('mission_asuka5_failed');
            }
        }

        if (Char.IsDead($.tanner)) {
            return; // SCM GOTO → mission_asuka5_passed
        }

        World.ClearArea(427.9, -1392.7, 21.1, 20.0, true);
        Camera.PointAtCar($.tanner_car, FIXED, INTERPOLATION);

        Hud.DisplayCounterWithString($.$id.test_tanner_health_counter, 1, 'DAM');

        await tanner_health(); // SCM GOSUB tanner_health

        $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
        $.tanner_car.setMission(MISSION_GOTOCOORDS_STRAIGHT_ACCURATE);
        $.tanner_car.setCruiseSpeed(20.0);
        $.tanner_car.setDrivingStyle(2);

        await asyncWait(1000);

        Camera.RestoreJumpcut();
        $.player.setControl(ON);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Hud.SwitchWidescreen(OFF);

        if (!Car.IsDead($.tanner_car)) {
            while ($.tanner_car.isHealthGreater(999)) {
                await asyncWait(0);
                if (Char.IsDead($.tanner)) {
                    return; // SCM GOTO → mission_asuka5_passed
                }
                if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
                    Hud.ClearCounter($.$id.test_tanner_health_counter);
                    $.cleared_timer_once_asuka5 = 1;
                }
                if (!$.tanner_car.locate2D(319.9, -1388.6, 8.0, 8.0, false)) {
                    if ($.got_to_coord_once == 0) {
                        $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
                        $.tanner_car.setMission(MISSION_GOTOCOORDS_STRAIGHT_ACCURATE);
                    }
                } else {
                    $.tanner_car.wanderRandomly();
                    $.got_to_coord_once = 1;
                }
                if ($.tanner_car.isUpsidedown() && $.tanner_car.isStopped()) {
                    break before_tanner_shits_it; // SCM GOTO → before_tanner_shits_it
                }

                await tanner_health(); // SCM GOSUB tanner_health
            }
        }

        if (Char.IsDead($.tanner)) {
            return; // SCM GOTO → mission_asuka5_passed
        }

        if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
            Hud.ClearCounter($.$id.test_tanner_health_counter);
            $.cleared_timer_once_asuka5 = 1;
        }

        Audio.PlayMissionAudio();
        $.tanner_car.setCruiseSpeed(30.0);
        $.player.alterWantedLevelNoDrop(4);

        if (!Car.IsDead($.tanner_car)) {
            $.old_tanner_health = $.tanner_car.getHealth();
        }

        while ($.tanner_car.isHealthGreater(300)) {
            await asyncWait(0);
            if (Char.IsDead($.tanner)) {
                return; // SCM GOTO → mission_asuka5_passed
            }
            if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
                Hud.ClearCounter($.$id.test_tanner_health_counter);
                $.cleared_timer_once_asuka5 = 1;
            }
            if (!$.tanner_car.locate2D(319.9, -1388.6, 6.0, 6.0, false)) {
                if ($.got_to_coord_once == 0) {
                    $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
                    $.tanner_car.setMission(MISSION_GOTOCOORDS_STRAIGHT_ACCURATE);
                }
            } else {
                $.tanner_car.wanderRandomly();
                $.got_to_coord_once = 1;
            }
            if ($.tanner_car.isUpsidedown() && $.tanner_car.isStopped()) {
                break before_tanner_shits_it; // SCM GOTO → tanner_shits_it
            }

            await tanner_health(); // SCM GOSUB tanner_health
        }
    }

    tanner_shits_it: {
    }

    if (Char.IsDead($.tanner)) {
        return; // SCM GOTO → mission_asuka5_passed
    }

    Hud.ClearCounter($.$id.test_tanner_health_counter);
    $.blip2_as5.remove();
    $.tanner_car.lockDoors(CARLOCK_UNLOCKED);
    $.tanner.setObjLeaveCar($.tanner_car);
    $.blip3_as5 = Blip.AddForChar($.tanner);
    $.tanner_car.setCruiseSpeed(0.0);
    $.tanner_car.setMission(MISSION_STOP_FOREVER);

    while ($.tanner.isInCar($.tanner_car)) {
        await asyncWait(0);
        if (Char.IsDead($.tanner)) {
            return; // SCM GOTO → mission_asuka5_passed
        }
        if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
            Hud.ClearCounter($.$id.test_tanner_health_counter);
            $.cleared_timer_once_asuka5 = 1;
        }
    }

    if (Char.IsDead($.tanner)) {
        return; // SCM GOTO → mission_asuka5_passed
    }

    $.tanner.setOnlyDamagedByPlayer(true);

    if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
        Hud.ClearCounter($.$id.test_tanner_health_counter);
        $.cleared_timer_once_asuka5 = 1;
    }

    $.tanner.setObjFleePlayerOnFootAlways($.player);
    $.tanner.setAnimGroup(ANIM_PANIC_CHUNKYPED);

    while (!Char.IsDead($.tanner)) {
        await asyncWait(0);
        if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
            Hud.ClearCounter($.$id.test_tanner_health_counter);
            $.cleared_timer_once_asuka5 = 1;
        }
    }
}

// Mission asuka5 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission asuka5 passed
async function onPassed() {
    $.flag_asuka_mission5_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(20000);
    $.asuka_contact_blip.remove();
    Stat.RegisterMissionPassed('AM5');
    Stat.PlayerMadeProgress(1);
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_asuka_mission = 0;
    Streaming.MarkModelAsNoLongerNeeded(CAR_ESPERANTO);
    Streaming.UnloadSpecialCharacter(1);
    if (!Char.IsDead($.tanner)) {
        $.tanner.removeElegantly();
    }
    $.blip1_as5.remove();
    $.blip2_as5.remove();
    $.blip3_as5.remove();
    Hud.ClearCounter($.$id.test_tanner_health_counter);
    Mission.Finish();
}

async function tanner_health() {
    if (!Car.IsDead($.tanner_car)) {
        $.test_tanner_health_counter = $.tanner_car.getHealth();
        if ($.test_tanner_health_counter < $.old_tanner_health) {
            $.player.alterWantedLevelNoDrop(4);
        }
        $.old_tanner_health = $.test_tanner_health_counter;
        $.test_tanner_health_counter2 = 1000 - $.test_tanner_health_counter;
        if ($.test_tanner_health_counter2 > 700) {
            $.test_tanner_health_counter2 = 700;
        }
        $.test_tanner_health_counter = $.test_tanner_health_counter2 / 7;
    }
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
