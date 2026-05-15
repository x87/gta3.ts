// Generated from Main/Suburban/hood2.sc
import { $ } from '../../utils';


async function mission_start_hood2() {
    ONMISSION = true;

    $.flag_player_on_hood_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.counter_all_vans_dead_hm2 = 0;

    $.flag_van1_dead_hm2 = 0;

    $.flag_van2_dead_hm2 = 0;

    $.flag_van3_dead_hm2 = 0;

    $.counter_all_vans_dead_hm2 = 0;

    $.counter_no_of_cars_player_had_hm2 = 0;

    $.flag_player_got_car_hm2 = 0;

    $.flag_buggy_help2_hm2 = 0;

    $.flag_buggy_help3_hm2 = 0;

    $.flag_buggy_help1_hm2 = 0;

    $.buggies_left_hm2 = 0;

    $.total_buggy_hm2 = 5;

    {
        // *****************************************START OF CUTSCENE*******************************

        /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_hood2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( HM_2 ) 15000 2 //"TOYMINATOR"

  SWITCH_STREAMING OFF

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH

  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        World.SetPedDensityMultiplier(0.0);

        World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);

        //LOAD_ALL_MODELS_NOW

        //WHILE NOT HAS_MODEL_LOADED cut_obj1

        //	WAIT 0

        //ENDWHILE

        Cutscene.Load('hd_ph2');
        Cutscene.SetOffset(-444.714, -6.321, 2.9);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.Switch(true /* ON */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }
        Text.PrintNow('HM2_A', 10000, 1); //" Those Nines are..."

        while ($.cs_time < 3468) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('HM2_B', 10000, 1); //"These Bitches..."

        while ($.cs_time < 6630) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('HM2_C', 10000, 1); //"and slinging it to brothers..."

        while ($.cs_time < 8077) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('HM2_D', 10000, 1); //"Theres a car parked up the way..."

        while ($.cs_time < 9819) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('HM2_E', 10000, 1); //"There's some stuff in there.."

        while ($.cs_time < 12413) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('HM2_F', 10000, 1); //"and wreck all there..."

        while ($.cs_time < 14200) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('HM2_F');

        while ($.cs_time < 15333) {
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

        Cutscene.Clear();

        //SWITCH_STREAMING ON

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

        World.SetPedDensityMultiplier(1.0);

        // ******************************************END OF CUTSCENE********************************

        Streaming.RequestModel(149 /* CAR_TOYZ */);

        Streaming.RequestModel(118 /* CAR_SECURICAR */);

        Streaming.RequestModel(131 /* car_rcbandit */);

        while (!Streaming.HasModelLoaded(149 /* CAR_TOYZ */) || !Streaming.HasModelLoaded(118 /* CAR_SECURICAR */) || !Streaming.HasModelLoaded(131 /* car_rcbandit */)) {
            await asyncWait(0);
        }

        $.mission_car_hm2 = Car.Create(149 /* CAR_TOYZ */, -682.02, 76.6, -100.0);

        //SET_CAR_HEADING mission_car_hm2 0.0

        $.radar_blip_car1_hm2 = Blip.AddForCar($.mission_car_hm2);

        // waiting for the player to get into the control car

        while (!$.player.isSittingInCar($.mission_car_hm2)) {
            await asyncWait(0);
            if (Car.IsDead($.mission_car_hm2)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood2_failed'); // fallback: would break linear control flow
            }
        }

        $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;

        Hud.DisplayCounterWithString($.buggies_left_hm2, 0 /* COUNTER_DISPLAY_NUMBER */, 'BUGGY');

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        $.radar_blip_car1_hm2.remove();

        $.controlmode = Pad.GetControllerMode();

        if ($.controlmode == 0) {
            Text.PrintHelp('HM2_1'); //"Use the radio controlled cars to destroy the trucks press | to detonate"
            $.flag_buggy_help1_hm2 = 1;
        }

        if ($.controlmode == 1) {
            Text.PrintHelp('HM2_1'); //"Use the radio controlled cars to destroy the trucks press | to detonate"
            $.flag_buggy_help1_hm2 = 1;
        }

        if ($.controlmode == 2) {
            Text.PrintHelp('HM2_1'); //"Use the radio controlled cars to destroy the trucks press | to detonate"
            $.flag_buggy_help1_hm2 = 1;
        }

        if ($.controlmode == 3) {
            Text.PrintHelp('HM2_1A'); //"Use the radio controlled cars to destroy the trucks press the R1 button to detonate."
            $.flag_buggy_help1_hm2 = 1;
        }

        World.ClearArea(-681.42, 91.35, 17.7, 2.0, true /* TRUE */);

        Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);

        ++$.counter_no_of_cars_player_had_hm2;

        // creates van 1

        $.target_van1_hm2 = Car.Create(118 /* CAR_SECURICAR */, -841.0, -130.0, -100.0);

        $.van_driver1_hm2 = Char.CreateInsideCar($.target_van1_hm2, 4 /* PEDTYPE_CIVMALE */, 7 /* PED_MALE1 */);

        $.target_van1_hm2.setOnlyDamagedByPlayer(true /* TRUE */);

        $.target_van1_hm2.setAvoidLevelTransitions(true /* TRUE */);

        $.radar_blip_van1_hm2 = Blip.AddForCar($.target_van1_hm2);

        $.target_van1_hm2.setDrivingStyle(2);

        $.target_van1_hm2.setCruiseSpeed(12.0);

        $.target_van1_hm2.wanderRandomly();

        // creates van 2

        $.target_van2_hm2 = Car.Create(118 /* CAR_SECURICAR */, -437.0, -67.0, -100.0);

        $.van_driver2_hm2 = Char.CreateInsideCar($.target_van2_hm2, 4 /* PEDTYPE_CIVMALE */, 7 /* PED_MALE1 */);

        $.target_van2_hm2.setOnlyDamagedByPlayer(true /* TRUE */);

        $.target_van2_hm2.setAvoidLevelTransitions(true /* TRUE */);

        $.radar_blip_van2_hm2 = Blip.AddForCar($.target_van2_hm2);

        $.target_van2_hm2.setDrivingStyle(2);

        $.target_van2_hm2.setCruiseSpeed(12.0);

        $.target_van2_hm2.wanderRandomly();

        // creates van 3

        $.target_van3_hm2 = Car.Create(118 /* CAR_SECURICAR */, -1172.0, 467.0, -100.0);

        $.van_driver3_hm2 = Char.CreateInsideCar($.target_van3_hm2, 4 /* PEDTYPE_CIVMALE */, 7 /* PED_MALE1 */);

        $.target_van3_hm2.setOnlyDamagedByPlayer(true /* TRUE */);

        $.target_van3_hm2.setAvoidLevelTransitions(true /* TRUE */);

        $.radar_blip_van3_hm2 = Blip.AddForCar($.target_van3_hm2);

        $.target_van3_hm2.setDrivingStyle(2);

        $.target_van3_hm2.setCruiseSpeed(12.0);

        $.target_van3_hm2.wanderRandomly();

        // waiting for the player to destroy all of the vans

        $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;

        TIMERB = 0;

        while (!($.counter_all_vans_dead_hm2 == 3)) {
            await asyncWait(0);
            $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
            if ($.flag_buggy_help2_hm2 == 0 && $.flag_buggy_help1_hm2 == 1) {
                if (TIMERB > 7000) {
                    Text.PrintHelp('HM2_3'); //"The buggies can go underneath vehicles but if you touch the wheels the buggy will detonate instantly."
                    $.flag_buggy_help2_hm2 = 1;
                    //timerb = 0
                }
            }
            if ($.flag_buggy_help3_hm2 == 0) {
                if ($.flag_buggy_help2_hm2 == 1) {
                    if (TIMERB > 14000) {
                        Text.PrintHelp('HM2_4'); //"The buggy will detonate if you get out of range!"
                        $.flag_buggy_help3_hm2 = 1;
                    }
                }
            }
            $.player.clearWantedLevel();
            if (!Car.IsDead($.mission_car_hm2)) {
                if (!$.player.isInRemoteMode() && $.counter_no_of_cars_player_had_hm2 < 6 && $.flag_player_got_car_hm2 == 0 && $.player.isSittingInCar($.mission_car_hm2)) {
                    World.ClearArea(-681.42, 91.35, 17.7, 2.0, false /* FALSE */);
                    Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);
                    ++$.counter_no_of_cars_player_had_hm2;
                    $.flag_player_got_car_hm2 = 1;
                }
            }
            if (!$.player.isInRemoteMode()) {
                $.flag_player_got_car_hm2 = 0;
            }
            if ($.flag_van1_dead_hm2 == 0) {
                if (Car.IsDead($.target_van1_hm2)) {
                    ++$.counter_all_vans_dead_hm2;
                    Text.PrintNow('HM2_6', 5000, 1); //"Armoured Car destroyed!"
                    $.radar_blip_van1_hm2.remove();
                    $.flag_van1_dead_hm2 = 1;
                }
            }
            if ($.flag_van2_dead_hm2 == 0) {
                if (Car.IsDead($.target_van2_hm2)) {
                    ++$.counter_all_vans_dead_hm2;
                    Text.PrintNow('HM2_6', 5000, 1); //"Armoured Car destroyed!"
                    $.radar_blip_van2_hm2.remove();
                    $.flag_van2_dead_hm2 = 1;
                }
            }
            if ($.flag_van3_dead_hm2 == 0) {
                if (Car.IsDead($.target_van3_hm2)) {
                    ++$.counter_all_vans_dead_hm2;
                    Text.PrintNow('HM2_6', 5000, 1); //"Armoured Car destroyed!"
                    $.radar_blip_van3_hm2.remove();
                    $.flag_van3_dead_hm2 = 1;
                }
            }
            if ($.counter_no_of_cars_player_had_hm2 == 5 && $.flag_player_got_car_hm2 == 0 && !($.counter_all_vans_dead_hm2 == 3)) {
                Text.PrintNow('HM2_2', 5000, 1); //"You failed to destroy all the armoured cars!"
                // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood2_failed'); // fallback: would break linear control flow
            }
            if (!$.player.isInAnyCar()) {
                Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                Text.PrintNow('HM2_2', 5000, 1); //"You failed to destroy all the armoured cars!"
                // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood2_failed'); // fallback: would break linear control flow
            }
        }

        Rc.BlowUpBuggy();
    }

    // SCM GOTO → mission_hood2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_hood2_passed'); // fallback: would break linear control flow

    // Mission hood2 failed
}

async function mission_hood2_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    if ($.player.hasBeenArrested()) {
        Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
    }

    if ($.player.isDead()) {
        Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
    }

    return;

    // mission hood2 passed
}

async function mission_hood2_passed() {
    $.flag_hood_mission2_passed = 1;
    Stat.RegisterMissionPassed('HM_2');
    Stat.PlayerMadeProgress(1);
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.addScore(10000);
    $.player.clearWantedLevel();
    // START_NEW_SCRIPT hood_mission3_loop
    return;

    // mission cleanup
}

async function mission_cleanup_hood2() {
    ONMISSION = false;
    $.flag_player_on_hood_mission = 0;
    Streaming.LoadScene(-660.9, 76.0, 18.7);
    Streaming.MarkModelAsNoLongerNeeded(149 /* CAR_TOYZ */);
    Streaming.MarkModelAsNoLongerNeeded(118 /* CAR_SECURICAR */);
    Streaming.MarkModelAsNoLongerNeeded(131 /* car_rcbandit */);
    Hud.ClearCounter($.buggies_left_hm2);
    $.radar_blip_car1_hm2.remove();
    $.radar_blip_van1_hm2.remove();
    $.radar_blip_van2_hm2.remove();
    $.radar_blip_van3_hm2.remove();
    Mission.Finish();
    return;
}

export async function hood2() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Hood Mission 2****************************************
    // **************************************R C ASSASSIN*****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME hood2

    // Mission start stuff

    // SCM GOSUB mission_start_hood2
    await mission_start_hood2();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_hood2_failed
        await mission_hood2_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_hood2
    await mission_cleanup_hood2();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT mission_car_hm2

    // VAR_INT radar_blip_car1_hm2

    // VAR_INT target_van1_hm2

    // VAR_INT target_van2_hm2

    // VAR_INT target_van3_hm2

    // VAR_INT van_driver1_hm2

    // VAR_INT van_driver2_hm2

    // VAR_INT van_driver3_hm2

    // VAR_INT radar_blip_van1_hm2

    // VAR_INT radar_blip_van2_hm2

    // VAR_INT radar_blip_van3_hm2

    // VAR_INT flag_van1_dead_hm2

    // VAR_INT flag_van2_dead_hm2

    // VAR_INT flag_van3_dead_hm2

    // VAR_INT counter_all_vans_dead_hm2

    // VAR_INT counter_no_of_cars_player_had_hm2

    // VAR_INT flag_player_got_car_hm2

    // VAR_INT flag_buggy_help2_hm2

    // VAR_INT flag_buggy_help3_hm2

    // VAR_INT flag_buggy_help1_hm2

    // VAR_INT buggies_left_hm2

    // VAR_INT total_buggy_hm2

    // ***************************************Mission Start*************************************
}
