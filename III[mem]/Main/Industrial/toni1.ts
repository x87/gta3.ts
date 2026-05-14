// Generated from Main/Industrial/toni1.sc
import { $ } from '../../utils';


async function mission_start_toni1() {
    Stat.RegisterMissionGiven();
    $.flag_player_on_mission = 1;
    $.flag_player_on_toni_mission = 1;
    // SCRIPT_NAME toni1
    await asyncWait(0);

    $.picked_up_grenades = 0;
    $.counter1_toni1 = 0;
    $.dead_van1 = 0;
    $.dead_van2 = 0;
    $.dead_van3 = 0;
    //dead_van4 = 0

    $.in_van1 = 0;
    $.in_van2 = 0;
    $.in_van3 = 0;
    //in_van4	= 0

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_toni1_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  SWITCH_STREAMING OFF

  PRINT_BIG ( TM1 ) 15000 2 //"Toni Mission 1"
  */

    {
        Streaming.LoadSpecialCharacter(1, 'tony');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'TONYH');
        Streaming.RequestModel(537 /* ind_newrizzos */);

        /*
  WHILE GET_FADING_STATUS
  WAIT 0

  ENDWHILE
  */

        //LOAD_SCENE 1218.4 -314.5 28.9

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(537 /* ind_newrizzos */)
        ) {
            await asyncWait(0);
        }

        Cutscene.Load('t1_tol');
        Cutscene.SetOffset(1218.42, -314.5, 28.9);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_tony = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_tony.setAnim('tony');

        $.cs_tonyhead = CutsceneHead.Create($.cs_tony, 186 /* CUT_OBJ2 */);
        $.cs_tonyhead.setAnim('tony');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
        $.cs_playerhead.setAnim('player');

        World.ClearArea(1219.5, -321.1, 27.5, 1.0, true /* TRUE */);
        $.player.setCoordinates(1219.5, -321.1, 26.4);

        $.player.setHeading(180.0);

        World.ClearArea(1216.1, -313.0, 29.9, 10.0, true /* TRUE */); //TONIS RESTAURANT

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);
        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 171) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_A', 10000, 1); // Mission brief

        while ($.cs_time < 3769) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_B', 10000, 1); // Mission brief

        while ($.cs_time < 5825) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_C', 10000, 1); // Mission brief

        while ($.cs_time < 8026) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_D', 10000, 1); // Mission brief

        while ($.cs_time < 11500) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 15961) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_G', 10000, 1); // Mission brief

        while ($.cs_time < 21005) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_H', 10000, 1); // Mission brief

        while ($.cs_time < 22997) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_I', 10000, 1); // Mission brief

        while ($.cs_time < 27589) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM1_J', 10000, 1); // Mission brief

        while ($.cs_time < 29796) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 31666) {
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

        Streaming.RequestModel(133 /* CAR_MRWONGS */);
        Streaming.RequestModel(45 /* PED_CT_MAN1 */);
        World.SwitchRubbish(true /* ON */);
        Cutscene.Clear();
        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(537 /* ind_newrizzos */);

        while (!Streaming.HasModelLoaded(133 /* CAR_MRWONGS */) || !Streaming.HasModelLoaded(45 /* PED_CT_MAN1 */)) {
            await asyncWait(0);
        }

        // START OF MISSION

        $.gen_car31.switch(0);

        $.free_greandes = Pickup.CreateWithAmmo(170 /* WEAPON_GRENADE */, 3 /* PICKUP_ONCE */, 10, 1278.8, -81.5, 15.1);
        $.grenade_blip = Blip.AddSpriteForPickup($.free_greandes, 20 /* RADAR_SPRITE_WEAPON */);

        $.t1_triad_van1 = Car.Create(133 /* CAR_MRWONGS */, 854.0, -778.0, -100.0);
        $.vanman1 = Char.CreateInsideCar($.t1_triad_van1, 4 /* PEDTYPE_CIVMALE */, 45 /* PED_CT_MAN1 */);
        $.blip1_van1 = Blip.AddForCar($.t1_triad_van1);
        $.t1_triad_van1.setCruiseSpeed(17.0);
        $.t1_triad_van1.setDrivingStyle(0);
        $.t1_triad_van1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.vanman1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        //SET_CAR_HEALTH t1_triad_van1 600

        $.t1_triad_van2 = Car.Create(133 /* CAR_MRWONGS */, 1020.0, -677.0, -100.0);
        $.vanman2 = Char.CreateInsideCar($.t1_triad_van2, 4 /* PEDTYPE_CIVMALE */, 45 /* PED_CT_MAN1 */);
        $.blip2_van2 = Blip.AddForCar($.t1_triad_van2);
        $.t1_triad_van2.setCruiseSpeed(17.0);
        $.t1_triad_van2.setDrivingStyle(0);
        $.t1_triad_van2.setOnlyDamagedByPlayer(true /* TRUE */);
        $.vanman2.setPersonality(14 /* PEDSTAT_GEEK_GUY */);
        //SET_CAR_HEALTH t1_triad_van2 600

        $.t1_triad_van3 = Car.Create(133 /* CAR_MRWONGS */, 904.0, -579.0, -100.0);
        $.vanman3 = Char.CreateInsideCar($.t1_triad_van3, 4 /* PEDTYPE_CIVMALE */, 45 /* PED_CT_MAN1 */);
        $.blip3_van3 = Blip.AddForCar($.t1_triad_van3);
        $.t1_triad_van3.setCruiseSpeed(17.0);
        $.t1_triad_van3.setDrivingStyle(0);
        $.t1_triad_van3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.vanman3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        //SET_CAR_HEALTH t1_triad_van3 600
        /*
  CREATE_CAR CAR_MRWONGS 996.0 -463.0 14.0 t1_triad_van4
  CREATE_CHAR_INSIDE_CAR t1_triad_van4 PEDTYPE_CIVMALE PED_CT_MAN1 vanman4
  ADD_BLIP_FOR_CAR t1_triad_van4 blip4_van4
  SET_CAR_CRUISE_SPEED  t1_triad_van4 17.0
  SET_CAR_DRIVING_STYLE t1_triad_van4 0
  SET_CAR_ONLY_DAMAGED_BY_PLAYER t1_triad_van4 TRUE
  SET_CHAR_PERSONALITY vanman4 PEDSTAT_GEEK_GUY
  SET_CAR_HEALTH t1_triad_van4 600
  */

        while (!($.counter1_toni1 == 3)) {
            await asyncWait(0);
            if (Car.IsDead($.t1_triad_van1) && $.dead_van1 == 0) {
                $.blip1_van1.remove();
                $.dead_van1 = 1;
                ++$.counter1_toni1;
            }
            if (!Car.IsDead($.t1_triad_van1)) {
                if (!$.t1_triad_van1.isHealthGreater(999)) {
                    if (!Char.IsDead($.vanman1)) {
                        if ($.vanman1.isInCar($.t1_triad_van1)) {
                            $.t1_triad_van1.setCruiseSpeed(18.0);
                            $.t1_triad_van1.setDrivingStyle(2);
                            $.t1_triad_van1.setOnlyDamagedByPlayer(false /* FALSE */);
                        }
                    }
                }
            }
            if (!Car.IsDead($.t1_triad_van1)) {
                if ($.player.isInCar($.t1_triad_van1) && $.in_van1 == 0) {
                    $.t1_triad_van1.setOnlyDamagedByPlayer(false /* FALSE */);
                    $.in_van1 = 1;
                }
            }
            if (Car.IsDead($.t1_triad_van2) && $.dead_van2 == 0) {
                $.blip2_van2.remove();
                $.dead_van2 = 1;
                ++$.counter1_toni1;
            }
            if (!Car.IsDead($.t1_triad_van2)) {
                if (!$.t1_triad_van2.isHealthGreater(999)) {
                    if (!Char.IsDead($.vanman2)) {
                        if ($.vanman2.isInCar($.t1_triad_van2)) {
                            $.t1_triad_van2.setCruiseSpeed(17.0);
                            $.t1_triad_van2.setDrivingStyle(2);
                            $.t1_triad_van2.setOnlyDamagedByPlayer(false /* FALSE */);
                        }
                    }
                }
            }
            if (!Car.IsDead($.t1_triad_van2)) {
                if ($.player.isInCar($.t1_triad_van2) && $.in_van2 == 0) {
                    $.t1_triad_van2.setOnlyDamagedByPlayer(false /* FALSE */);
                    $.in_van2 = 1;
                }
            }
            if (Car.IsDead($.t1_triad_van3) && $.dead_van3 == 0) {
                $.blip3_van3.remove();
                $.dead_van3 = 1;
                ++$.counter1_toni1;
            }
            if (!Car.IsDead($.t1_triad_van3)) {
                if (!$.t1_triad_van3.isHealthGreater(999)) {
                    if (!Char.IsDead($.vanman3)) {
                        if ($.vanman3.isInCar($.t1_triad_van3)) {
                            $.t1_triad_van3.setCruiseSpeed(19.0);
                            $.t1_triad_van3.setDrivingStyle(2);
                            $.t1_triad_van3.setOnlyDamagedByPlayer(false /* FALSE */);
                        }
                    }
                }
            }
            if (!Car.IsDead($.t1_triad_van3)) {
                if ($.player.isInCar($.t1_triad_van3) && $.in_van3 == 0) {
                    $.t1_triad_van3.setOnlyDamagedByPlayer(false /* FALSE */);
                    $.in_van3 = 1;
                }
            }
            /*
    IF IS_CAR_DEAD t1_triad_van4
    AND dead_van4 = 0
    REMOVE_BLIP blip4_van4
    dead_van4 = 1
    ++ counter1_toni1
    ENDIF

    IF NOT IS_CAR_DEAD t1_triad_van4
    IF NOT IS_CAR_HEALTH_GREATER t1_triad_van4 599
    IF NOT IS_CHAR_DEAD vanman4
    IF IS_CHAR_IN_CAR vanman4 t1_triad_van4
    SET_CAR_CRUISE_SPEED t1_triad_van4 20.0
    SET_CAR_DRIVING_STYLE t1_triad_van4 2
    SET_CAR_ONLY_DAMAGED_BY_PLAYER t1_triad_van4 FALSE
    ENDIF
    ENDIF
    ENDIF
    ENDIF

    IF NOT IS_CAR_DEAD t1_triad_van4
    IF IS_PLAYER_IN_CAR player t1_triad_van4
    AND in_van4 = 0
    SET_CAR_ONLY_DAMAGED_BY_PLAYER t1_triad_van4 FALSE
    in_van4 = 1
    ENDIF
    ENDIF
    */
            if ($.free_greandes.hasBeenCollected() && $.picked_up_grenades == 0) {
                await asyncWait(1500);
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 0 || $.controlmode == 1) {
                    Text.PrintHelp('GREN_1');
                }
                if ($.controlmode == 2) {
                    Text.PrintHelp('GREN_2');
                }
                if ($.controlmode == 3) {
                    Text.PrintHelp('GREN_3');
                }
                $.picked_up_grenades = 1;
            }
        }
    }

    // SCM GOTO → mission_toni1_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_toni1_passed'); // fallback: would break linear control flow

    // Mission toni1 failed
}

async function mission_toni1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    return;

    // mission toni1 passed
}

async function mission_toni1_passed() {
    $.flag_toni_mission1_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(20000);
    Stat.RegisterMissionPassed('TM1');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT toni_mission2_loop
    return;

    // mission cleanup
}

async function mission_cleanup_toni1() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_toni_mission = 0;
    $.blip1_van1.remove();
    $.blip2_van2.remove();
    $.blip3_van3.remove();
    //REMOVE_BLIP blip4_van4

    $.grenade_blip.remove();
    $.free_greandes.remove();
    $.gen_car31.switch(101);
    Streaming.MarkModelAsNoLongerNeeded(133 /* CAR_MRWONGS */);
    Streaming.MarkModelAsNoLongerNeeded(45 /* PED_CT_MAN1 */);
    Mission.Finish();
    return;
}

export async function toni1() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Toni mission 1****************************************
    // ***************************************Laundry day*****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_toni1
    await mission_start_toni1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_toni1_failed
        await mission_toni1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_toni1
    await mission_cleanup_toni1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT t1_triad_van1 t1_triad_van2 t1_triad_van3

    // VAR_INT blip1_van1 blip2_van2 blip3_van3

    // VAR_INT counter1_toni1

    // VAR_INT vanman1 vanman2 vanman3 in_van1 in_van2 in_van3

    // VAR_INT dead_van1 dead_van2 dead_van3

    // VAR_INT grenade_blip picked_up_grenades

    // VAR_INT triad_hates_you free_greandes

    // ***************************************Mission Start*************************************
}
