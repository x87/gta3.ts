// Generated from Main/Commercial/yard3.sc
import { $ } from '../../utils';


async function mission_start_yd3() {
    Stat.RegisterMissionGiven();
    // SCRIPT_NAME yard3
    $.flag_player_on_mission = 1;
    $.flag_player_on_yardie_mission = 1;

    await asyncWait(0);

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_yd3_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  //SWITCH_STREAMING OFF

  PRINT_BIG ( YD3 ) 15000 2 //"Yardie Mission 1"

  TIMERA = 0

  WHILE TIMERA < 1500
  WAIT 0

  ENDWHILE
  */

    // ******************************************CUTSCENE***************************************

    {
        World.SetPedDensityMultiplier(0.0);
        Game.SetPoliceIgnorePlayer($.player, true /* on */);

        //WHILE NOT HAS_MODEL_LOADED cut_obj1
        //	WAIT 0

        //ENDWHILE

        Cutscene.Load('YD_PH3');
        Cutscene.SetOffset(121.0, -272.3, 15.25);
        World.ClearAreaOfChars(100.5, -250.0, 0.0, 130.5, -290.0, 25.0);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        //CLEAR_AREA 1219.5 -321.1 27.5 1.0 TRUE
        //SET_PLAYER_COORDINATES player 1219.5 -321.1 26.4

        //SET_PLAYER_HEADING player 180.0

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }
        Text.PrintNow('YD3_A', 10000, 1);

        while ($.cs_time < 3700) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_A1', 10000, 1);

        while ($.cs_time < 6370) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_B', 10000, 1);

        while ($.cs_time < 8658) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_B1', 10000, 1);

        while ($.cs_time < 10408) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_B2', 10000, 1);

        while ($.cs_time < 13950) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_C', 10000, 1);

        while ($.cs_time < 16920) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('YD3_C1', 10000, 1);
        /*

  WHILE cs_time < 28919
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( DIAB2_H ) 10000 1
  */

        while ($.cs_time < 20066) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Streaming.Switch(true /* ON */);
        Text.ClearPrints();
        Cutscene.Clear();
        //SET_CAMERA_IN_FRONT_OF_PLAYER

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);
        World.SetPedDensityMultiplier(1.0);
        Game.SetPoliceIgnorePlayer($.player, false /* off */);
    }

    //PRINT_BIG ( YD3 ) 15000 2

    await asyncWait(1000);

    $.counter_cars_yd3 = 0;
    /*

  blip_x_yd3 = 1217.0
  blip_y_yd3 = -243.5


  garage_min_x_yd3 = 1213.0
  garage_min_y_yd3 = -241.0
  garage_max_x_yd3 = 1221.0
  garage_max_y_yd3 = -245.5

  garage_min_x_yd3 = 257.0
  garage_min_y_yd3 = -803.0
  garage_max_x_yd3 = 263.0
  garage_max_y_yd3 = -795.0*/

    $.blip_x_yd3 = 260.0;
    $.blip_y_yd3 = -798.0;

    $.loop_2_passport = 0;

    $.flag_player_in_diablocar = 0;
    $.flag_player_in_mafiacar = 0;
    $.flag_player_in_yakuzacar = 0;
    //flag_player_in_any_gangcar = 0

    $.flag_diablo_delivered_yd3 = 0;
    $.flag_yakuzacar_delivered_yd3 = 0;
    $.flag_mafia_delivered_yd3 = 0;

    $.flag_dam_message = 0;
    $.flag_garage_message = 0;
    $.flag_already_boosted_message = 0;

    //flag_gangcar_flipped = 0

    $.flag_messages = 0;
    //flag_blip_garage = 0
    //flag_blip_spray = 0

    //PRINT_NOW ( YD3_A ) 4000 1 //"We want you to boost some gang cars so we can do hits on our enemies' turf and set them at each other's throats."
    //MESSAGE_WAIT 4000 1
    //PRINT_NOW ( YD3_B ) 4000 1 //"We want a Mafia beamer, a Triad van and a Diablo stallion so we can hit any gang in Portland."
    //MESSAGE_WAIT 4000 1
    //PRINT_NOW ( YD3_C ) 4000 1 //"Drop them off at <location> and remember, they're no use to us wrecked!!"

    //SET_GARAGE garage_min_x_yd3 garage_min_y_yd3 26.8 garage_max_x_yd3 garage_max_y_yd3 31.8 GARAGE_MISSION garage_yd3

    $.blip_garage_yd3 = Blip.AddForCoord($.blip_x_yd3, $.blip_y_yd3, -100.0);

    // Mission stuff goes here
}

async function loop_1() {
    //WHILE counter_cars_yd3 < 3

    await asyncWait(0);
    // SCM GOSUB blippage
    await blippage();
    // fallback if label was not emitted as async function: no-op continues linearly

    if ($.player.isInAnyCar()) {
        if ($.player.isInModel(137 /* CAR_DIABLOS */)) {
            if ($.flag_diablo_delivered_yd3 == 0) {
                $.gangcar_yd3 = $.player.storeCarIsIn();
                $.gangcar_yd3.setCanRespray(false /* False */);
                $.flag_player_in_diablocar = 1;
                $.flag_player_in_mafiacar = 0;
                $.flag_player_in_yakuzacar = 0;
                // SCM GOSUB damage_check
                await damage_check();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.flag_diablo_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
                Text.PrintNow('YD3_E', 3000, 1); //You've already boosted a diablo gangcar!
                $.flag_already_boosted_message = 1;
            }
        }
        if ($.player.isInModel(134 /* CAR_MAFIA */)) {
            if ($.flag_mafia_delivered_yd3 == 0) {
                $.gangcar_yd3 = $.player.storeCarIsIn();
                $.gangcar_yd3.setCanRespray(false /* False */);
                $.flag_player_in_diablocar = 0;
                $.flag_player_in_mafiacar = 1;
                $.flag_player_in_yakuzacar = 0;
                // SCM GOSUB damage_check
                await damage_check();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.flag_mafia_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
                Text.PrintNow('YD3_F', 3000, 1); //You've already boosted a mafia gangcar!
                $.flag_already_boosted_message = 1;
            }
        }
        if ($.player.isInModel(136 /* CAR_YAKUZA */)) {
            if ($.flag_yakuzacar_delivered_yd3 == 0) {
                $.gangcar_yd3 = $.player.storeCarIsIn();
                $.gangcar_yd3.setCanRespray(false /* False */);
                $.flag_player_in_diablocar = 0;
                $.flag_player_in_mafiacar = 0;
                $.flag_player_in_yakuzacar = 1;
                // SCM GOSUB damage_check
                await damage_check();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.flag_yakuzacar_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
                Text.PrintNow('YD3_G', 3000, 1); //You've already boosted a Triad fish van!
                $.flag_already_boosted_message = 1;
            }
        }
    } else {
        $.flag_dam_message = 0;
        $.flag_garage_message = 0;
        $.flag_already_boosted_message = 0;
        //loop_2_passport = 0
    }

    if ($.loop_2_passport == 0) {
        // SCM GOTO → loop_1 (not lowered; manual jump required)
        throw new Error('unresolved GOTO loop_1'); // fallback: would break linear control flow
    }

    //flag_messages = 0
}

async function loop_2() {
    // SCM GOSUB damage_check
    await damage_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.garage_yd3.isCarInMission()) {
        //IF IS_CAR_IN_AREA_2D gangcar_yd3 garage_min_x_yd3 garage_min_y_yd3 garage_max_x_yd3 garage_max_y_yd3 false
        //AND NOT IS_PLAYER_IN_AREA_2D player garage_min_x_yd3 garage_min_y_yd3 garage_max_x_yd3 garage_max_y_yd3 false
        //AND IS_CAR_HEALTH_GREATER gangcar_yd3 800

        //GOSUB blippage

        if ($.flag_player_in_diablocar == 1 && $.flag_diablo_delivered_yd3 == 0) {
            $.flag_diablo_delivered_yd3 = 1;
            ++$.counter_cars_yd3;
            $.flag_player_in_diablocar = 0;
            //flag_player_in_any_gangcar = 0

            $.loop_2_passport = 0;
            Text.PrintNow('YD3_H', 3000, 1); //Diablo gangcar boosted!
            Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        }
        if ($.flag_player_in_mafiacar == 1 && $.flag_mafia_delivered_yd3 == 0) {
            $.flag_mafia_delivered_yd3 = 1;
            ++$.counter_cars_yd3;
            $.flag_player_in_mafiacar = 0;
            //flag_player_in_any_gangcar = 0

            $.loop_2_passport = 0;
            Text.PrintNow('YD3_I', 3000, 1); //Mafia gangcar boosted!
            Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        }
        if ($.flag_player_in_yakuzacar == 1 && $.flag_yakuzacar_delivered_yd3 == 0) {
            ++$.counter_cars_yd3;
            $.flag_yakuzacar_delivered_yd3 = 1;
            $.flag_player_in_yakuzacar = 0;
            //flag_player_in_any_gangcar = 0

            $.loop_2_passport = 0;
            Text.PrintNow('YD3_J', 3000, 1); //Triad gangcar boosted!
            Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
        }
    }

    if (!Car.IsDead($.gangcar_yd3)) {
        if (
            $.gangcar_yd3.isInArea2D($.garage_min_x_yd3, $.garage_min_y_yd3, $.garage_max_x_yd3, $.garage_max_y_yd3, false /* false */) &&
            !$.player.isInArea2D($.garage_min_x_yd3, $.garage_min_y_yd3, $.garage_max_x_yd3, $.garage_max_y_yd3, false /* false */) &&
            !$.gangcar_yd3.isHealthGreater(800)
        ) {
            $.gangcar_yd3.markAsNoLongerNeeded();
        }
    }

    if ($.counter_cars_yd3 < 3) {
        // SCM GOTO → loop_1 (not lowered; manual jump required)
        throw new Error('unresolved GOTO loop_1'); // fallback: would break linear control flow
    }

    // SCM GOTO → mission_yd3_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_yd3_passed'); // fallback: would break linear control flow

    // Mission Yardie3 failed
}

async function mission_yd3_failed() {
    Text.PrintBig('M_FAIL', 2000, 1);
    return;

    // mission yd3 passed
}

async function mission_yd3_passed() {
    $.flag_yardie_mission3_passed = 1;
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.clearWantedLevel();
    $.player.addScore(10000);
    Stat.RegisterMissionPassed('YD3');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT yardie_mission4_loop
    return;

    // mission cleanup
}

async function mission_cleanup_yd3() {
    $.blip_garage_yd3.remove();
    $.garage_yd3.setTargetCarForMission(-1);

    $.flag_player_on_mission = 0;
    $.flag_player_on_yardie_mission = 0;
    Mission.Finish();
    return;

    // ******************GOSUBS***********************************
}

async function blippage() {
    if ($.flag_dam_message == 1) {
        if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            $.blip_garage_yd3.remove();
            $.blip_garage_yd3 = Blip.AddSpriteForCoord(925.3, -359.2, 11.0, 18 /* RADAR_SPRITE_SPRAY */);
            //flag_blip_spray = 1
        }
        if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
            $.blip_garage_yd3.remove();
            $.blip_garage_yd3 = Blip.AddSpriteForCoord(380.4, -493.8, 26.2, 18 /* RADAR_SPRITE_SPRAY */);
            //flag_blip_spray = 1
        }
        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
            $.blip_garage_yd3.remove();
            $.blip_garage_yd3 = Blip.AddSpriteForCoord(-1142.1, 34.0, 59.0, 18 /* RADAR_SPRITE_SPRAY */);
            //flag_blip_spray = 1
        }
    } else {
        $.blip_garage_yd3.remove();
        $.blip_garage_yd3 = Blip.AddForCoord($.blip_x_yd3, $.blip_y_yd3, -100.0);
    }

    return;
}

async function damage_check() {
    if ($.player.isInAnyCar()) {
        if (!Car.IsDead($.gangcar_yd3)) {
            if ($.player.isInCar($.gangcar_yd3)) {
                if ($.gangcar_yd3.isHealthGreater(900) || !$.gangcar_yd3.isVisiblyDamaged()) {
                    if ($.flag_garage_message == 0) {
                        Text.PrintNow('YD3_L', 3000, 1); //Now take it to the garage!
                        $.garage_yd3.setTargetCarForMission($.gangcar_yd3);
                        $.flag_garage_message = 1;
                        $.flag_dam_message = 0;
                        $.loop_2_passport = 1;
                    }
                } else {
                    if ($.flag_dam_message == 0) {
                        Text.PrintNow('YD3_K', 3000, 1); //The car's nearly wrecked! Get it repaired!
                        $.garage_yd3.setTargetCarForMission(-1);
                        $.flag_dam_message = 1;
                        $.flag_garage_message = 0;
                        $.loop_2_passport = 0;
                    }
                }
            }
        }
    }

    return;
}

export async function yard3() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************YARDIE MISSION ********************************
    // *****************************************************************************************
    // ***************************************'GANG CAR ROUND_UP'*******************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_yd3
    await mission_start_yd3();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_yd3_failed
        await mission_yd3_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_yd3
    await mission_cleanup_yd3();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT gangcar_yd3

    // VAR_INT flag_player_in_diablocar flag_player_in_mafiacar flag_player_in_yakuzacar
    // VAR_INT flag_diablo_delivered_yd3 flag_yakuzacar_delivered_yd3 flag_mafia_delivered_yd3
    // VAR_INT loop_2_passport
    // VAR_INT counter_cars_yd3
    //VAR_INT garage_yd3

    // VAR_INT blip_garage_yd3
    // VAR_INT flag_dam_message flag_garage_message flag_already_boosted_message
    // VAR_INT flag_messages

    //VAR_FLOAT garage_min_x_yd3 garage_min_y_yd3
    //VAR_FLOAT garage_max_x_yd3 garage_max_y_yd3

    // VAR_FLOAT blip_x_yd3 blip_y_yd3
    //VAR_FLOAT gangcar_x gangcar_y gangcar_z

    // ****************************************Mission Start************************************
}
