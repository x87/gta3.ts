// Generated from Main/Industrial/meat1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_meat1() {
    $.flag_player_on_mission = 1;

    $.flag_player_on_meat_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.flag_player_had_car_message_meat1 = 0;

    $.flag_bankmanager_in_area = 0;

    $.flag_car_crushed_meat1 = 0;

    $.flag_car_in_area_meat1 = 0;

    $.flag_leave_car_message_meat1 = 0;

    $.flag_dont_do_car_check_meat1 = 0;

    $.blob_flag = 1;

    $.flag_player_had_crusher_help_hm5 = 0;

    $.flag_bankman_moved_meat1 = 0;
    {
        // ******************************************START OF CUTSCENE******************************

        /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_failed_meat1
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( MEA1 ) 15000 2 //"THE CROOK"

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

        Cutscene.Load('mt_ph1');
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
        Text.PrintNow('MEA1_B', 10000, 1); //"The names Marty..."

        while ($.cs_time < 4424) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_C', 10000, 1); //"I run the..."

        while ($.cs_time < 7668) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_D', 10000, 1); //"I got money..."

        while ($.cs_time < 9604) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_E', 10000, 1); //"I'm meeting...."

        while ($.cs_time < 12652) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_F', 10000, 1); //"He's a crooked..."

        while ($.cs_time < 17740) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_G', 10000, 1); //Take my car..."

        while ($.cs_time < 21290) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('MEA1_H', 10000, 1); //"I've got a..."

        while ($.cs_time < 24535) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('MEA1_H');

        while ($.cs_time < 25666) {
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

        // ******************************************END OF CUTSCENE********************************

        Streaming.RequestModel(59 /* PED_B_MAN1 */);

        Streaming.RequestModel(94 /* CAR_PERENNIAL */);

        Audio.LoadMissionAudio('mf1_a' as any);

        while (!Streaming.HasModelLoaded(59 /* PED_B_MAN1 */) || !Streaming.HasModelLoaded(94 /* CAR_PERENNIAL */) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        $.car_meat1 = Car.Create(94 /* CAR_PERENNIAL */, 1190.0, -796.0, 13.8);

        $.car_meat1.setHeading(300.0);

        $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);

        // waiting for the player to get into the car

        while (!$.player.isInCar($.car_meat1)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        $.radar_blip_car_meat1.remove();

        Text.PrintNow('MEA1_B3', 7000, 1); //"Go and meet the Bank Manager."

        $.bankmanager_meat1 = Char.Create(4 /* PEDTYPE_CIVMALE */, 59 /* PED_B_MAN1 */, 1039.0, -695.0, 13.9);

        $.bankmanager_meat1.clearThreatSearch();

        $.bankmanager_meat1.turnToFaceCoord(1042.0, -695.0, -100.0);

        $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);

        $.bankmanager_meat1.setCantBeDraggedOut(true /* TRUE */);

        // waiting for the player and the Bank manager to be in the same area

        while (!$.player.locateInCarChar2D($.bankmanager_meat1, 8.0, 8.0, false /* FALSE */) || !$.player.isInCar($.car_meat1)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (!$.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
                $.radar_blip_ped1_meat1.remove();
                $.flag_player_had_car_message_meat1 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
                $.radar_blip_car_meat1.remove();
                $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
                $.flag_player_had_car_message_meat1 = 0;
                $.blob_flag = 1;
            }
        }

        // player is at the bank manager

        $.bankmanager_meat1.setObjEnterCarAsPassenger($.car_meat1);

        // waiting for them both to be in the car

        while (!$.bankmanager_meat1.isInCar($.car_meat1) || !$.player.isInCar($.car_meat1)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                if (Char.IsDead($.bankmanager_meat1)) {
                    Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            } else {
                if (!$.player.locateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, false /* FALSE */)) {
                    Text.PrintNow('MEA1_4', 5000, 1); //You have left the Bank Manager behind!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
                $.radar_blip_ped1_meat1.remove();
                $.flag_player_had_car_message_meat1 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
                $.radar_blip_car_meat1.remove();
                $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
                $.flag_player_had_car_message_meat1 = 0;
                $.blob_flag = 1;
            }
        }

        $.radar_blip_ped1_meat1.remove();

        Audio.PlayMissionAudio();

        Text.PrintNow('MEA1_B4', 7000, 1); //"Mr. Chonks sent you? Ok, take me to see him."

        $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);

        if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint('MEA1_B4');
        }

        $.blob_flag = 1;

        //waiting for them to be at the Dogfood factory

        while (!$.bankmanager_meat1.locateStoppedInCar3D(1205.7, -789.2, 14.8, 4.0, 4.0, 6.0, $.blob_flag) || !$.bankmanager_meat1.isInCar($.car_meat1)) {
            await asyncWait(0);
            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('MEA1_B4');
            }
            if (Car.IsDead($.car_meat1)) {
                if (Char.IsDead($.bankmanager_meat1)) {
                    Audio.ClearMissionAudio();
                    Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.bankmanager_meat1)) {
                Audio.ClearMissionAudio();
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            } else {
                if (!$.player.locateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, false /* FALSE */)) {
                    Text.PrintNow('MEA1_4', 5000, 1); //You have left the Bank Manager behind!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
                $.radar_blip_coord2_meat1.remove();
                $.flag_player_had_car_message_meat1 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
                $.radar_blip_car_meat1.remove();
                $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);
                $.flag_player_had_car_message_meat1 = 0;
                $.blob_flag = 1;
            }
        }

        $.radar_blip_coord2_meat1.remove();

        Hud.SwitchWidescreen(true /* ON */);

        $.player.setControl(false /* OFF */);

        World.ClearArea(1201.8, -799.7, 13.8, 5.0, true /* TRUE */);

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        $.bankmanager_meat1.setCantBeDraggedOut(false /* FALSE */);

        $.bankmanager_meat1.setObjLeaveCar($.car_meat1);

        while ($.bankmanager_meat1.isInCar($.car_meat1)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                if (Char.IsDead($.bankmanager_meat1)) {
                    Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        $.bankmanager_meat1.setObjGotoCoordOnFoot(1204.2, -801.9);

        Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);

        Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);

        World.ClearArea(1200.8, -799.3, 14.0, 10.0, true /* TRUE */);

        // Waiting for the blokes to get to the meat grinding area

        TIMERB = 0;

        while (!($.flag_bankmanager_in_area == 1)) {
            await asyncWait(0);
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.flag_bankmanager_in_area == 0) {
                if ($.bankmanager_meat1.locateOnFoot2D(1204.2, -801.9, 0.5, 0.5, false /* FALSE */)) {
                    $.flag_bankmanager_in_area = 1;
                }
            }
            if ($.flag_bankman_moved_meat1 == 0) {
                if (TIMERB >= 20000) {
                    $.bankmanager_meat1.setCoordinates(1204.2, -801.9, 13.7);
                    $.flag_bankman_moved_meat1 = 1;
                }
            }
        }

        // opens the door

        while (!$.doggy_door.rotate(135.0, 5.0, false /* FALSE */)) {
            await asyncWait(0);
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        $.bankmanager_meat1.setObjGotoCoordOnFoot(1205.9, -805.8);

        TIMERB = 0;

        while (!$.bankmanager_meat1.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */)) {
            await asyncWait(0);
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (TIMERB >= 20000) {
                if (!$.bankmanager_meat1.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */)) {
                    $.bankmanager_meat1.removeElegantly();
                    // SCM GOTO → bloke_got_stuck_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO bloke_got_stuck_meat1'); // fallback: would break linear control flow
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        // Shuts the door
    }

    async function bloke_got_stuck_meat1() {
        Audio.LoadMissionAudio('mf4_a' as any);

        while (!$.doggy_door.rotate(45.0, 5.0, false /* FALSE */) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Char.IsDead($.bankmanager_meat1)) {
                Text.PrintNow('MEA1_1', 5000, 1); //The Bank Managers dead!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        Camera.RestoreJumpcut();

        $.bankmanager_meat1.removeElegantly();

        Audio.PlayMissionAudio();

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        Hud.SwitchWidescreen(false /* OFF */);

        $.player.setControl(true /* ON */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        Text.PrintSoon('MEA1_B6', 5000, 1); //"Take the car to the crusher to get rid of evidence, get out of the car and the crane will pick it up."

        $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);

        // waiting for the car to get to the area to be crushed

        $.blob_flag = 1;

        while (!$.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, $.blob_flag)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('MEA1_2', 5000, 1); //" You idiot! The cops will find the evidence in the car."
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            } else {
                if ($.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, false /* FALSE */)) {
                    $.flag_dont_do_car_check_meat1 = 1;
                    if ($.flag_leave_car_message_meat1 == 0) {
                        Text.PrintNow('MEA1_3', 5000, 1); //"Get out of the car!"
                        $.flag_leave_car_message_meat1 = 1;
                    }
                } else {
                    $.flag_leave_car_message_meat1 = 0;
                    $.flag_dont_do_car_check_meat1 = 0;
                }
            }
            if ($.flag_dont_do_car_check_meat1 == 0) {
                if (!$.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 0) {
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                    $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
                    $.radar_blip_coord3_meat1.remove();
                    $.flag_player_had_car_message_meat1 = 1;
                    $.blob_flag = 0;
                }
                if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
                    $.radar_blip_car_meat1.remove();
                    $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
                    $.flag_player_had_car_message_meat1 = 0;
                    $.blob_flag = 1;
                }
            }
            if ($.flag_player_had_crusher_help_hm5 == 0) {
                if ($.player.locateAnyMeans2D(1140.3, 50.1, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_meat1)) {
                    Text.PrintHelp('CRUSH'); //"To crush the car..."
                    $.flag_player_had_crusher_help_hm5 = 1;
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        // waiting for the crane to pick up the car

        $.blob_flag = 1;

        while (!Crane.IsLiftingCar(1120.0, 46.0, $.car_meat1)) {
            await asyncWait(0);
            if (Car.IsDead($.car_meat1)) {
                Text.PrintNow('MEA1_2', 5000, 1); //" You idiot! The cops will find the evidence in the car."
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
            if ($.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 20.0, $.blob_flag)) {
                $.flag_car_in_area_meat1 = 1;
            } else {
                $.flag_car_in_area_meat1 = 0;
            }
            if ($.flag_car_in_area_meat1 == 0) {
                if (!$.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 0) {
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the vehicle and get on with the mission!"
                    $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
                    $.radar_blip_coord3_meat1.remove();
                    $.flag_player_had_car_message_meat1 = 1;
                    $.blob_flag = 0;
                }
                if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
                    $.radar_blip_car_meat1.remove();
                    $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
                    $.flag_player_had_car_message_meat1 = 0;
                    $.blob_flag = 1;
                }
            }
            if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
            }
        }

        $.radar_blip_coord3_meat1.remove();

        // waiting for the car to be crushed

        while ($.flag_car_crushed_meat1 == 0) {
            await asyncWait(0);
            if ($.car_meat1.isCrushed()) {
                $.flag_car_crushed_meat1 = 1;
                // SCM GOTO → mission_passed_meat1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_passed_meat1'); // fallback: would break linear control flow
            } else {
                if (Car.IsDead($.car_meat1)) {
                    Text.PrintNow('MEA1_2', 5000, 1); //"You idiot! The cops will find the evidence in the car."
                    // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat1'); // fallback: would break linear control flow
                }
            }
        }
    }

    // Mission Failed
}

async function mission_failed_meat1() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    return;

    // Mission Passed
}

async function mission_passed_meat1() {
    Text.PrintWithNumberBig('m_pass', 1000, 5000, 1); //"Mission Passed!"
    Stat.RegisterMissionPassed('MEA1');
    Stat.PlayerMadeProgress(1);
    Audio.PlayMissionPassedTune(1);
    $.player.addScore(1000);
    $.flag_meat_mission1_passed = 1;
    $.player.clearWantedLevel();
    // START_NEW_SCRIPT meat_mission2_loop
    return;

    // Mission Cleanup
}

async function mission_cleanup_meat1() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_meat_mission = 0;
    $.bankmanager_meat1.removeElegantly();
    Streaming.MarkModelAsNoLongerNeeded(59 /* PED_B_MAN1 */);
    Streaming.MarkModelAsNoLongerNeeded(94 /* CAR_PERENNIAL */);
    $.radar_blip_ped1_meat1.remove();
    $.radar_blip_car_meat1.remove();
    $.radar_blip_coord2_meat1.remove();
    $.radar_blip_coord3_meat1.remove();
    Mission.Finish();
    return;
}

export async function meat1() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // ***********************************Meat Factory Mission 1**********************************
    // *************************************"The Bank Manager"************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME meat1

    // Mission Start Stuff

    // SCM GOSUB mission_start_meat1
    await mission_start_meat1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_failed_meat1
        await mission_failed_meat1();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_meat1
    await mission_cleanup_meat1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variable for mission

    // VAR_INT car_meat1

    // VAR_INT bankmanager_meat1

    // VAR_INT radar_blip_car_meat1

    // VAR_INT radar_blip_ped1_meat1

    // VAR_INT radar_blip_coord3_meat1

    // VAR_INT flag_player_had_car_message_meat1

    // VAR_INT radar_blip_coord2_meat1

    // VAR_INT flag_bankmanager_in_area

    // VAR_INT flag_car_crushed_meat1

    // VAR_INT flag_car_in_area_meat1

    // VAR_INT flag_leave_car_message_meat1

    // VAR_INT flag_dont_do_car_check_meat1

    // VAR_INT flag_player_had_crusher_help_hm5

    // VAR_INT flag_bankman_moved_meat1

    // ****************************************Mission Start************************************
}
