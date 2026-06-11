// Generated from Main/Industrial/joey3.sc
import { $, FAIL } from '../../utils';
// *******************************************************************************************
// *******************************************************************************************
// *************************************Joey mission 3****************************************
// ***************************************Van heist*******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey3

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey3_failed
    // ENDIF

    // GOSUB mission_cleanup_joey3

    // MISSION_END

    // Variables for mission

    // VAR_INT van_jm3 in_the_locate_joey3

    // VAR_INT blip1_jm3 blip2_jm3

    // VAR_INT flag_car_blip_displayed_jm3

    // VAR_INT van_man1_jm3 van_man2_jm3 old_van_health

    // VAR_INT test_van_health_counter test_van_health_counter2

    // ***************************************Mission Start*************************************
    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey3
    await asyncWait(0);

    $.in_the_locate_joey3 = 0;

    Streaming.LoadSpecialCharacter(1, 'joey');
    Streaming.LoadSpecialModel(CUT_OBJ1, 'JOEYH');
    Streaming.LoadSpecialModel(CUT_OBJ2, 'PLAYERH');
    Streaming.LoadSpecialModel(CUT_OBJ3, 'TROLL');
    Streaming.RequestModel(939 /* jogarageext */);
    Streaming.RequestModel(1074 /* jogarageint */);

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasModelLoaded(CUT_OBJ1) ||
        !Streaming.HasModelLoaded(CUT_OBJ2) ||
        !Streaming.HasModelLoaded(CUT_OBJ3)
    ) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */)) {
        await asyncWait(0);
    }

    Cutscene.Load('J3_VH');
    Cutscene.SetOffset(1190.079, -869.861, 13.977);

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

    while ($.cs_time < 5515) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_A', 10000, 2); // Mission brief

    while ($.cs_time < 7894) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_B', 10000, 2); // Mission brief

    while ($.cs_time < 10381) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_C', 10000, 2); // Mission brief

    while ($.cs_time < 14589) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_D', 10000, 2); // Mission brief

    while ($.cs_time < 17518) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_E', 10000, 2); // Mission brief

    while ($.cs_time < 21627) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM3_F', 10000, 2); // Mission brief

    while ($.cs_time < 24675) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 27333) {
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
    Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
    Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

    Streaming.LoadSpecialCharacter(2, 'S_GUARD');
    Streaming.RequestModel(CAR_SECURICAR);

    while (!Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(CAR_SECURICAR)) {
        await asyncWait(0);
    }

    // START OF MISSION

    $.van_jm3 = Car.Create(CAR_SECURICAR, 1063.0, -805.0, 14.6);
    $.van_jm3.lockDoors(CARLOCK_LOCKOUT_PLAYER_ONLY);
    $.van_jm3.setOnlyDamagedByPlayer(true);
    $.van_jm3.setProofs(true, true, false, false, true);
    $.van_jm3.setCruiseSpeed(14.0);
    $.van_jm3.setDrivingStyle(0);
    $.blip1_jm3 = Blip.AddForCar($.van_jm3);

    $.van_man1_jm3 = Char.CreateInsideCar($.van_jm3, PEDTYPE_SPECIAL, PED_SPECIAL2);
    $.van_man1_jm3.setPersonality(PEDSTAT_GEEK_GUY);

    $.van_man2_jm3 = Char.CreateAsPassenger($.van_jm3, PEDTYPE_SPECIAL, PED_SPECIAL2, 0);
    $.van_man2_jm3.setPersonality(PEDSTAT_GEEK_GUY);

    Hud.DisplayCounterWithString($.$id.test_van_health_counter, 1, 'DAM');

    $.test_van_health_counter = $.van_jm3.getHealth();
    $.test_van_health_counter2 = 1000 - $.test_van_health_counter;

    if ($.test_van_health_counter2 > 400) {
        $.test_van_health_counter2 = 400;
    }

    $.test_van_health_counter = $.test_van_health_counter2 / 4;

    while ($.van_jm3.isHealthGreater(999)) {
        await asyncWait(0);
        if (Car.IsDead($.van_jm3)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey3_failed");
        }
        if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
            FAIL("mission_joey3_failed");
        }
        $.test_van_health_counter = $.van_jm3.getHealth();
        $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
        if ($.test_van_health_counter2 > 400) {
            $.test_van_health_counter2 = 400;
        }
        $.test_van_health_counter = $.test_van_health_counter2 / 4;
    }

    if (!Car.IsDead($.van_jm3)) {
        $.van_jm3.setDrivingStyle(2);
        $.van_jm3.setCruiseSpeed(20.0);
        $.player.alterWantedLevelNoDrop(1);
        $.van_jm3.setOnlyDamagedByPlayer(false);
        $.old_van_health = $.van_jm3.getHealth();
    }

    while ($.van_jm3.isHealthGreater(750)) {
        await asyncWait(0);
        if (Car.IsDead($.van_jm3)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey3_failed");
        }
        if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
            FAIL("mission_joey3_failed");
        }
        if (!Car.IsDead($.van_jm3)) {
            $.test_van_health_counter = $.van_jm3.getHealth();
            if ($.test_van_health_counter < $.old_van_health) {
                $.player.alterWantedLevelNoDrop(1);
            }
            $.old_van_health = $.test_van_health_counter;
            $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
            if ($.test_van_health_counter2 > 400) {
                $.test_van_health_counter2 = 400;
            }
            $.test_van_health_counter = $.test_van_health_counter2 / 4;
        }
    }

    while ($.van_jm3.isHealthGreater(600)) {
        await asyncWait(0);
        if (Car.IsDead($.van_jm3)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey3_failed");
        }
        if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
            FAIL("mission_joey3_failed");
        }
        if (!Car.IsDead($.van_jm3)) {
            $.test_van_health_counter = $.van_jm3.getHealth();
            if ($.test_van_health_counter < $.old_van_health) {
                $.player.alterWantedLevelNoDrop(2);
            }
            $.old_van_health = $.test_van_health_counter;
            $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
            if ($.test_van_health_counter2 > 400) {
                $.test_van_health_counter2 = 400;
            }
            $.test_van_health_counter = $.test_van_health_counter2 / 4;
        }
    }

    if (!Car.IsDead($.van_jm3)) {
        $.van_jm3.lockDoors(CARLOCK_UNLOCKED);

        Hud.ClearCounter($.$id.test_van_health_counter);
        if (!Char.IsDead($.van_man1_jm3)) {
            $.van_man1_jm3.setObjLeaveCar($.van_jm3);
        }
        if (!Char.IsDead($.van_man2_jm3)) {
            $.van_man2_jm3.setObjLeaveCar($.van_jm3);
        }
    }

    if (Car.IsDead($.van_jm3)) {
        Text.PrintNow('WRECKED', 5000, 1);
        FAIL("mission_joey3_failed");
    }

    while (!$.van_man1_jm3.isInCar($.van_jm3) || !$.van_man2_jm3.isInCar($.van_jm3)) {
        await asyncWait(0);
        if (Car.IsDead($.van_jm3)) {
            Text.PrintNow('WRECKED', 5000, 1);
            FAIL("mission_joey3_failed");
        }
        if (Char.IsDead($.van_man1_jm3) || Char.IsDead($.van_man2_jm3)) {
        }
        if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
            FAIL("mission_joey3_failed");
        }
    }

    await asyncWait(1600);

    if (Car.IsDead($.van_jm3)) {
        Text.PrintNow('WRECKED', 5000, 1);
        FAIL("mission_joey3_failed");
    }

    if (!Char.IsDead($.van_man1_jm3) && !Char.IsDead($.van_man2_jm3)) {
        $.van_man1_jm3.setObjFleePlayerOnFootAlways($.player);
        $.van_man2_jm3.setObjFleePlayerOnFootAlways($.player);
        $.van_man2_jm3.setSay(SOUND_SECURITY_GUARD_RUN_AWAY_SHOUT);
    }

    if (!Car.IsDead($.van_jm3)) {
        $.Garage_bank.setTargetCarForMission($.van_jm3);
    }

    $.flag_car_blip_displayed_jm3 = 1 /* TRUE */;

    garage_stop: while (true) {
        // SCM label garage_stop
        TIMERB = 0;

        while (!$.van_jm3.isStoppedInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, false) || !$.player.isInCar($.van_jm3)) {
            await asyncWait(0);
            if (Car.IsDead($.van_jm3)) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey3_failed");
            }
            if ($.player.isInCar($.van_jm3)) {
                if ($.flag_car_blip_displayed_jm3 == 1 /* TRUE */) {
                    $.blip2_jm3 = Blip.AddForCoord(1445.8, -796.7, -100.0);
                    $.blip2_jm3.changeDisplay(BLIP_ONLY);
                    $.blip1_jm3.remove();
                    Text.PrintNow('JM3_1', 5000, 1);
                    $.flag_car_blip_displayed_jm3 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.van_jm3)) {
                if ($.flag_car_blip_displayed_jm3 == 0 /* FALSE */) {
                    $.blip1_jm3 = Blip.AddForCar($.van_jm3);
                    $.blip2_jm3.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the Van!"
                    $.flag_car_blip_displayed_jm3 = 1 /* TRUE */;
                }
            }
            if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
                FAIL("mission_joey3_failed");
            }
            if (!Char.IsDead($.van_man2_jm3)) {
                if (TIMERB > 4000) {
                    TIMERB = 0;
                    $.van_man2_jm3.setSay(SOUND_SECURITY_GUARD_RUN_AWAY_SHOUT);
                }
            }
            if ($.in_the_locate_joey3 == 0) {
                if ($.player.locateInCar3D(1445.0, -811.5, 11.8, 4.0, 6.0, 4.0, true)) {
                    $.player.clearWantedLevel();
                    $.in_the_locate_joey3 = 1;
                }
            }
            if ($.in_the_locate_joey3 == 1) {
                if (
                    !$.van_jm3.isInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, false) &&
                    !$.player.locateInCar3D(1445.0, -811.5, 11.8, 4.0, 6.0, 4.0, false)
                ) {
                    $.in_the_locate_joey3 = 0;
                }
            }
        }

        Text.PrintNow('OUT_VEH', 5000, 2); //Get out of the van

        while (!$.Garage_bank.isCarInMission()) {
            if (Car.IsDead($.van_jm3)) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey3_failed");
            }
            if (!$.van_jm3.isInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, false)) {
                continue garage_stop; // SCM GOTO → garage_stop
            }
            if ($.van_jm3.isUpsidedown() && $.van_jm3.isStopped()) {
                FAIL("mission_joey3_failed");
            }
            await asyncWait(0);
        }

        $.blip2_jm3.remove();
        break garage_stop; // xxx: fallthrough
    }

    return; // SCM GOTO → mission_joey3_passed
}

// Mission joey3 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 2000, 1);
}

// mission joey3 passed
async function onPassed() {
    $.flag_joey_mission3_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(20000);
    Stat.RegisterMissionPassed('JM3');
    Stat.PlayerMadeProgress(1);
    $.Garage_bank.changeTypeWithCarModel(GARAGE_COLLECTSPECIFICCARS, CAR_SECURICAR);
    // START_NEW_SCRIPT joey_mission4_loop
    // START_NEW_SCRIPT diablo_phone_start
    // START_NEW_SCRIPT van_heist_garage_pager
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    $.blip1_jm3.remove();
    $.blip2_jm3.remove();
    Streaming.UnloadSpecialCharacter(2);
    $.Garage_bank.setTargetCarForMission(-1 as any);
    Streaming.MarkModelAsNoLongerNeeded(CAR_SECURICAR);
    Hud.ClearCounter($.$id.test_van_health_counter);
    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
