// Generated from Main/Industrial/meat2.sc
import { $ } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************
// ***********************************Meat Factory Mission 2**********************************
// *****************************************"The Thieves"*************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // SCRIPT_NAME meat2

    // Mission Start Stuff

    // GOSUB mission_start_meat2

    // 	IF HAS_DEATHARREST_BEEN_EXECUTED
    // 		GOSUB mission_failed_meat2
    // 	ENDIF

    // GOSUB mission_cleanup_meat2

    // MISSION_END

    // Variable for mission

    // VAR_INT car_meat2

    // VAR_INT victim1_meat2

    // VAR_INT victim2_meat2

    // VAR_INT radar_blip_car_meat2

    // VAR_INT radar_blip_ped1_meat2

    // VAR_INT radar_blip_ped2_meat2

    // VAR_INT flag_player_had_car_message_meat2

    // VAR_INT radar_blip_coord2_meat2

    // VAR_INT flag_victim1_in_area

    // VAR_INT flag_victim2_in_area

    // VAR_INT radar_blip_coord3_meat2

    // VAR_INT flag_car_in_area_meat2

    // VAR_FLOAT doorx

    // VAR_FLOAT doory

    // VAR_FLOAT doorz

    // VAR_INT flag_remove_blip1_meat2

    // VAR_INT flag_remove_blip2_meat2

    // VAR_INT flag_car_in_zone2_meat2

    // VAR_INT radar_blip_coord4_meat2

    // VAR_INT flag_player_had_out_car_message_meat2

    // ****************************************Mission Start************************************

    ONMISSION = true;

    $.flag_player_on_meat_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.flag_player_had_car_message_meat2 = 0;

    $.flag_victim1_in_area = 0;

    $.flag_victim2_in_area = 0;

    $.flag_car_in_area_meat2 = 0;

    $.blob_flag = 1;

    $.flag_remove_blip1_meat2 = 0;

    $.flag_remove_blip2_meat2 = 0;

    $.flag_car_in_zone2_meat2 = 0;

    $.flag_player_had_out_car_message_meat2 = 0;

    // *******************************START OF CUTSCENE*****************************************

    /*
        IF CAN_PLAYER_START_MISSION Player
        MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
        ELSE
        GOTO mission_failed_meat2
        ENDIF

        SET_FADING_COLOUR 0 0 0

        DO_FADE 1500 FADE_OUT

        PRINT_BIG ( MEA2 ) 15000 2 //"THE THIEVES"

        SWITCH_STREAMING OFF

        //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH

        WHILE GET_FADING_STATUS

        WAIT 0

        ENDWHILE
        */

    World.SetPedDensityMultiplier(0.0);

    World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);

    //LOAD_ALL_MODELS_NOW

    //WHILE NOT HAS_MODEL_LOADED cut_obj1

    //	WAIT 0

    //ENDWHILE

    Cutscene.Load('mt_ph2');
    Cutscene.SetOffset(1223.88, -839.414, 13.95);

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
    Text.PrintNow('MEA2_A', 10000, 1); //"I hired some..."

    while ($.cs_time < 4424) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_B', 10000, 1); //"and steal some..."

    while ($.cs_time < 8124) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_C', 10000, 1); //"The thieveing bastards..."

    while ($.cs_time < 10996) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_D', 10000, 1); //"IF I don't...."

    while ($.cs_time < 12362) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_E', 10000, 1); //"Can you believe..."

    while ($.cs_time < 13728) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_F', 10000, 1); //I've left a car..."

    while ($.cs_time < 16082) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_G', 10000, 1); //"Use it to..."

    while ($.cs_time < 19591) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('MEA2_H', 10000, 1); //"Them bring 'em..."

    while ($.cs_time < 24155) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearThisPrint('MEA2_H');

    while ($.cs_time < 25233) {
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

    await asyncWait(500);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

    World.SetPedDensityMultiplier(1.0);

    // **************************************END OF CUTSCENE************************************

    Streaming.RequestModel(24 /* PED_CRIMINAL1 */);

    Streaming.RequestModel(25 /* PED_CRIMINAL2 */);

    Streaming.RequestModel(95 /* CAR_SENTINEL */);

    while (!Streaming.HasModelLoaded(24 /* PED_CRIMINAL1 */) || !Streaming.HasModelLoaded(25 /* PED_CRIMINAL2 */) || !Streaming.HasModelLoaded(95 /* CAR_SENTINEL */)) {
        await asyncWait(0);
    }

    //PRINT_BIG ( MEA2 ) 15000 2 //"The Thieves"

    //WAIT 1000

    $.car_meat2 = Car.Create(95 /* CAR_SENTINEL */, 1190.0, -796.0, 13.8);

    $.car_meat2.setHeading(300.0);

    $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);

    // waiting for the player to get into the car

    while (!$.player.isInCar($.car_meat2)) {
        await asyncWait(0);
        if (Car.IsDead($.car_meat2)) {
            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    $.radar_blip_car_meat2.remove();

    Text.PrintNow('MEA2_B3', 7000, 1); //"Go and meet the creditors."

    $.victim1_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, 24 /* PED_CRIMINAL1 */, 869.0, -611.0, -100.0);

    $.victim1_meat2.clearThreatSearch();

    $.victim1_meat2.turnToFaceCoord(869.0, -615.0, -100.0);

    $.victim1_meat2.setCantBeDraggedOut(true /* TRUE */);

    $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);

    $.victim2_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, 25 /* PED_CRIMINAL2 */, 871.0, -612.0, -100.0);

    $.victim2_meat2.clearThreatSearch();

    $.victim2_meat2.turnToFaceCoord(869.0, -615.0, -100.0);

    $.victim2_meat2.setCantBeDraggedOut(true /* TRUE */);

    $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);

    // waiting for the player to get to the creditors

    while (
        !$.player.locateInCarChar2D($.victim1_meat2, 8.0, 8.0, false /* FALSE */) ||
        !$.player.locateInCarChar2D($.victim2_meat2, 8.0, 8.0, false /* FALSE */) ||
        !$.player.isInCar($.car_meat2)
    ) {
        await asyncWait(0);
        if (Car.IsDead($.car_meat2)) {
            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (Char.IsDead($.victim1_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (Char.IsDead($.victim2_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (!$.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 0) {
            Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
            $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
            $.radar_blip_ped1_meat2.remove();
            $.radar_blip_ped2_meat2.remove();
            $.flag_player_had_car_message_meat2 = 1;
            $.blob_flag = 0;
        }
        if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
            $.radar_blip_car_meat2.remove();
            $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
            $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
            $.flag_player_had_car_message_meat2 = 0;
            $.blob_flag = 1;
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    // tells the two thieves to get into the car

    $.victim1_meat2.setObjEnterCarAsPassenger($.car_meat2);

    $.victim2_meat2.setObjEnterCarAsPassenger($.car_meat2);

    while (!$.victim1_meat2.isInCar($.car_meat2) || !$.victim2_meat2.isInCar($.car_meat2) || !$.player.isInCar($.car_meat2)) {
        await asyncWait(0);
        if (Car.IsDead($.car_meat2)) {
            if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
                Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            } else {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (Char.IsDead($.victim1_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        } else {
            if (!$.player.locateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, false /* FALSE */)) {
                Text.PrintNow('MEA2_4', 5000, 1); //"You have left a creditor behind!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (Char.IsDead($.victim2_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        } else {
            if (!$.player.locateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, false /* FALSE */)) {
                Text.PrintNow('MEA2_4', 5000, 1); //"You have left a creditor behind!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (!$.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 0) {
            Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
            $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
            $.radar_blip_ped1_meat2.remove();
            $.radar_blip_ped2_meat2.remove();
            $.flag_player_had_car_message_meat2 = 1;
            $.blob_flag = 0;
        }
        if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
            $.radar_blip_car_meat2.remove();
            $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
            $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
            $.flag_player_had_car_message_meat2 = 0;
            $.blob_flag = 1;
        }
        if ($.victim1_meat2.isInCar($.car_meat2) && $.flag_remove_blip1_meat2 == 0) {
            $.radar_blip_ped1_meat2.remove();
            $.flag_remove_blip1_meat2 = 1;
        }
        if ($.victim2_meat2.isInCar($.car_meat2) && $.flag_remove_blip2_meat2 == 0) {
            $.radar_blip_ped2_meat2.remove();
            $.flag_remove_blip2_meat2 = 1;
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    $.radar_blip_ped1_meat2.remove();

    $.radar_blip_ped2_meat2.remove();

    Text.PrintNow('MEA2_B4', 7000, 1); //"Take us to the Bitch'n Dog Food Factory"

    $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);

    $.blob_flag = 1;

    while (
        !$.victim1_meat2.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, !!$.blob_flag) ||
        !$.victim2_meat2.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, false /* FALSE */) ||
        !$.victim1_meat2.isInCar($.car_meat2) ||
        !$.victim2_meat2.isInCar($.car_meat2)
    ) {
        await asyncWait(0);
        if (Car.IsDead($.car_meat2)) {
            if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
                Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            } else {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (Char.IsDead($.victim1_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        } else {
            if (!$.player.locateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, false /* FALSE */)) {
                Text.PrintNow('MEA2_4', 5000, 1); //"You have left a creditor behind!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (Char.IsDead($.victim2_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        } else {
            if (!$.player.locateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, false /* FALSE */)) {
                Text.PrintNow('MEA2_4', 5000, 1); //"You have left a creditor behind!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (!$.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 0) {
            Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
            $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
            $.radar_blip_coord2_meat2.remove();
            $.flag_player_had_car_message_meat2 = 1;
            $.blob_flag = 0;
        }
        if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
            $.radar_blip_car_meat2.remove();
            $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);
            $.flag_player_had_car_message_meat2 = 0;
            $.blob_flag = 1;
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    $.radar_blip_coord2_meat2.remove();

    Hud.SwitchWidescreen(true /* ON */);

    $.player.setControl(false /* OFF */);

    Game.SetPoliceIgnorePlayer($.player, true /* ON */);

    $.victim1_meat2.setCantBeDraggedOut(false /* FALSE */);

    $.victim1_meat2.setObjLeaveCar($.car_meat2);

    $.victim2_meat2.setCantBeDraggedOut(false /* FALSE */);

    $.victim2_meat2.setObjLeaveCar($.car_meat2);

    while ($.victim1_meat2.isInCar($.car_meat2) && $.victim2_meat2.isInCar($.car_meat2)) {
        await asyncWait(0);
        if (Car.IsDead($.car_meat2)) {
            if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
                Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            } else {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }
        if (Char.IsDead($.victim1_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (Char.IsDead($.victim2_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    $.victim1_meat2.setObjGotoCoordOnFoot(1203.3, -801.7);

    await asyncWait(500);

    if (Char.IsDead($.victim2_meat2)) {
        Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
        // SCM GOTO → mission_failed_meat2
        throw new Error('unresolved GOTO mission_failed_meat2');
    }

    $.victim2_meat2.setObjGotoCoordOnFoot(1202.4, -800.0);

    Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);

    Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);

    World.ClearArea(1201.8, -799.7, 13.8, 10.0, true /* TRUE */);

    TIMERB = 0;

    // Waiting for the blokes to get to the meat grinding area

    while (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
        await asyncWait(0);
        if (!$.doggy_door.rotate(135.0, 5.0, false /* FALSE */)) {
            const _res285 = $.doggy_door.getCoordinates();
            $.doorx = _res285.x;
            $.doory = _res285.y;
            $.doorz = _res285.z;
        }
        if (Car.IsDead($.car_meat2)) {
            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (Char.IsDead($.victim1_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if (Char.IsDead($.victim2_meat2)) {
            Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
        if ($.flag_victim1_in_area == 0) {
            if ($.victim1_meat2.locateOnFoot2D(1203.3, -801.7, 0.5, 0.5, false /* FALSE */)) {
                $.flag_victim1_in_area = 1;
                $.victim1_meat2.setObjGotoCoordOnFoot(1209.4, -807.2);
            }
        }
        if ($.flag_victim1_in_area == 1) {
            if ($.victim1_meat2.locateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, false /* FALSE */)) {
                $.flag_victim1_in_area = 2;
            }
        }

        if ($.flag_victim2_in_area == 0) {
            if ($.victim2_meat2.locateOnFoot2D(1202.4, -800.0, 0.5, 0.5, false /* FALSE */)) {
                $.flag_victim2_in_area = 1;
                $.victim2_meat2.setObjGotoCoordOnFoot(1209.4, -807.2);
            }
        }
        if ($.flag_victim2_in_area == 1) {
            if ($.victim2_meat2.locateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, false /* FALSE */)) {
                $.flag_victim2_in_area = 2;
            }
        }
        if (TIMERB >= 30000) {
            if (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
                $.victim1_meat2.removeElegantly();
                $.victim2_meat2.removeElegantly();
                // SCM GOTO → mission_bloke_stuck
                break;
            }
        }
        if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat2
            throw new Error('unresolved GOTO mission_failed_meat2');
        }
    }

    mission_bloke_stuck: {
        Audio.LoadMissionAudio('mf4_b' as any);

        // Shuts the door

        while (!$.doggy_door.rotate(45.0, 5.0, false /* FALSE */) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat2)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if (Char.IsDead($.victim1_meat2)) {
                Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if (Char.IsDead($.victim2_meat2)) {
                Text.PrintNow('MEA2_2', 5000, 1); //"A creditor's dead!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }

        Camera.RestoreJumpcut();

        $.victim1_meat2.removeElegantly();

        $.victim2_meat2.removeElegantly();

        Audio.PlayMissionAudio();

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat2)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }

        Hud.SwitchWidescreen(false /* OFF */);

        $.player.setControl(true /* ON */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        Text.PrintSoon('MEA2_B6', 5000, 1); //"Take the car to the crusher to get rid of evidence, get out of the car and the crane will pick it up."

        $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);

        $.sprayshop1.hasResprayHappened();

        // waiting for the player to respray the car

        while (!$.sprayshop1.hasResprayHappened() || !$.player.isInCar($.car_meat2) || !$.player.isStoppedInArea2D(922.6, -366.1, 928.6, -354.3, false /* FALSE */)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat2)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if (!$.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
                $.radar_blip_coord3_meat2.remove();
                $.flag_player_had_car_message_meat2 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
                $.radar_blip_car_meat2.remove();
                $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
                $.flag_player_had_car_message_meat2 = 0;
                $.blob_flag = 1;
            }
            if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }

        $.radar_blip_coord3_meat2.remove();

        Text.PrintNow('MEA2_3', 5000, 1); //"Dump the car by the road bridge in Chinatown."

        $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);

        $.blob_flag = 1;

        while (!$.car_meat2.locateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, !!$.blob_flag) || $.player.isInCar($.car_meat2)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat2)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
            if ($.car_meat2.locateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, false /* FALSE */)) {
                if ($.flag_player_had_out_car_message_meat2 == 0) {
                    Text.PrintNow('OUT_VEH', 5000, 1); //"Get out of the vehicle!"
                    $.flag_player_had_out_car_message_meat2 = 1;
                }
                $.flag_car_in_zone2_meat2 = 1;
            } else {
                $.flag_car_in_zone2_meat2 = 0;
                $.flag_player_had_out_car_message_meat2 = 0;
            }
            if ($.flag_car_in_zone2_meat2 == 0) {
                if (!$.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 0) {
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                    $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
                    $.radar_blip_coord4_meat2.remove();
                    $.flag_player_had_car_message_meat2 = 1;
                    $.blob_flag = 0;
                }
                if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
                    $.radar_blip_car_meat2.remove();
                    $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);
                    $.flag_player_had_car_message_meat2 = 0;
                    $.blob_flag = 1;
                }
            }
            if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat2
                throw new Error('unresolved GOTO mission_failed_meat2');
            }
        }

        if (!Car.IsDead($.car_meat2)) {
            $.car_meat2.changeLock(2 /* CARLOCK_LOCKED */);
        }

        $.radar_blip_coord4_meat2.remove();
    }

    // SCM GOTO → mission_passed_meat2
    return;
}

// Mission Failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
}

// Mission Passed
async function onPassed() {
    Text.PrintWithNumberBig('M_PASS', 3000, 5000, 1); //"Mission Passed!"
    Stat.RegisterMissionPassed('MEA2');
    Stat.PlayerMadeProgress(1);
    Audio.PlayMissionPassedTune(1);
    $.player.addScore(2000);
    $.flag_meat_mission2_passed = 1;
    $.player.clearWantedLevel();
    // START_NEW_SCRIPT meat_mission3_loop // xxx: moved to mission monitor
}

// Mission Cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_meat_mission = 0;
    $.victim1_meat2.removeElegantly();
    $.victim2_meat2.removeElegantly();
    Streaming.MarkModelAsNoLongerNeeded(24 /* PED_CRIMINAL1 */);
    Streaming.MarkModelAsNoLongerNeeded(25 /* PED_CRIMINAL2 */);
    Streaming.MarkModelAsNoLongerNeeded(95 /* CAR_SENTINEL */);
    $.radar_blip_ped1_meat2.remove();
    $.radar_blip_ped2_meat2.remove();
    $.radar_blip_car_meat2.remove();
    $.radar_blip_coord2_meat2.remove();
    $.radar_blip_coord3_meat2.remove();
    $.radar_blip_coord4_meat2.remove();
    Mission.Finish();
    return;
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
