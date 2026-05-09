// Generated from Main/Industrial/luigi1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_luigi1() {
    $.flag_player_on_mission = 1;

    $.flag_player_on_luigi_mission = 1;

    await asyncWait(0);

    $.flag_player_had_car_message_lm1 = 0;

    $.flag_player_not_in_car_message_lm1 = 0;

    flag_luigi_created_lm1 = 0;

    $.no_of_passengers_car_lm1 = 0;

    $.flag_girl1_in_car_lm1 = 0;

    flag_girl2_in_car_lm1 = 0;

    $.passenger_count_lm1 = 0;

    $.total_space_in_car_lm1 = 0;

    $.flag_blip_on_girl1_lm1 = 0;

    flag_blip_on_girl2_lm1 = 0;

    $.flag_coord_blip_on = 0;

    Streaming.LoadSpecialCharacter(1, 'MICKY');
    Streaming.LoadSpecialCharacter(2, 'EIGHT');
    Streaming.LoadSpecialCharacter(3, 'LUIGI');

    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'LUDOOR');
    Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'MICKYH');
    Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'EIGHT');
    Streaming.LoadSpecialModel(188 /* cut_obj4 */, 'LUIGI');

    {
        if ($.flag_failed_luigi1 == 0) {
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(250, 0 /* FADE_OUT */);
            Text.PrintBig('LM2', 10000, 2); //"  "
            TIMERA = 0;

            // Cutscene stuff

            while (
                !Streaming.HasSpecialCharacterLoaded(1) ||
                !Streaming.HasSpecialCharacterLoaded(2) ||
                !Streaming.HasSpecialCharacterLoaded(3) ||
                !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
                !Streaming.HasModelLoaded(186 /* cut_obj2 */)
            ) {
                await asyncWait(0);
            }
            while (!Streaming.HasModelLoaded(187 /* cut_obj3 */) || !Streaming.HasModelLoaded(188 /* cut_obj4 */)) {
                await asyncWait(0);
            }

            //WHILE GET_FADING_STATUS

            //	WAIT 0

            //ENDWHILE

            Cutscene.Load('luigi1');
            Cutscene.SetOffset(901.82, -426.3, 13.85);
            $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
            $.cs_player.setAnim('player');
            $.cs_micky = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
            $.cs_micky.setAnim('micky');
            $.cs_eight = CutsceneObject.Create(27 /* PED_SPECIAL2 */);
            $.cs_eight.setAnim('eight');
            $.cs_luigi = CutsceneObject.Create(28 /* PED_SPECIAL3 */);
            $.cs_luigi.setAnim('luigi');
            $.cs_mickyhead = CutsceneHead.Create($.cs_micky, 186 /* CUT_OBJ2 */);
            $.cs_mickyhead.setAnim('micky');
            $.cs_eighthead = CutsceneHead.Create($.cs_eight, 187 /* CUT_OBJ3 */);
            $.cs_eighthead.setAnim('eight');
            $.cs_luigihead = CutsceneHead.Create($.cs_luigi, 188 /* CUT_OBJ4 */);
            $.cs_luigihead.setAnim('luigi');
            $.cs_ludoor = CutsceneObject.Create(185 /* cut_obj1 */);
            $.cs_ludoor.setAnim('LUDOOR');
            while (TIMERA < 3500) {
                await asyncWait(0);
            }
            Camera.DoFade(250, 1 /* FADE_IN */);

            //WHILE GET_FADING_STATUS
            //	WAIT 0
            //ENDWHILE

            Cutscene.Start();
            $.player.setVisible(false /* OFF */);

            //SET_PLAYER_COORDINATES player 903.1 -424.8 13.9
            $.player.setCoordinates(896.6, -426.2, 13.9);
            $.player.setHeading(180.0);

            // Displays cutscene text

            $.cs_time = Cutscene.GetTime();
            while ($.cs_time < 16000) {
                await asyncWait(0);
                $.cs_time = Cutscene.GetTime();
            }
            Text.PrintNow('LM2_A', 5000, 1); //"There's a new high on the street goes by the name of SPANK. Some wiseguy's been introducing this trash to my girls down Portland Harbour.
            while ($.cs_time < 21000) {
                await asyncWait(0);
                $.cs_time = Cutscene.GetTime();
            }
            Text.PrintNow('LM2_B', 5000, 1); //"Go and introduce a bat to his face, then take his car, get it resprayed and take it to the lockup. I want compensation for this insult!"
            while (!Cutscene.HasFinished()) {
                await asyncWait(0);
            }
            Cutscene.Clear();
            Text.ClearPrints();
            Streaming.UnloadSpecialCharacter(1);
            Streaming.UnloadSpecialCharacter(2);
            Streaming.UnloadSpecialCharacter(3);
        }

        //SWITCH_WIDESCREEN ON

        $.player.setControl(false /* off */);

        Streaming.RequestModel(39 /* PED_PROSTITUTE */);

        Streaming.LoadSpecialCharacter(2, 'misty');

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(39 /* PED_PROSTITUTE */)) {
            await asyncWait(0);
        }

        /*
  CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL1 889.83 -415.93 15.5 luigi

  flag_luigi_created_lm1 = 1

  CLEAR_CHAR_THREAT_SEARCH luigi

  CHAR_SET_IDLE luigi

  SET_POLICE_IGNORE_PLAYER player ON

  GET_PLAYER_CHAR player script_controlled_player

  CLEAR_CHAR_THREAT_SEARCH script_controlled_player

  CHAR_SET_IDLE script_controlled_player

  //SET_OBJECT_HEADING luigi_club_door 270.0

  //SET_CHAR_OBJ_GOTO_COORD_ON_FOOT luigi 890.50 -415.84

  //WHILE NOT IS_CHAR_OBJECTIVE_PASSED luigi

  //	WAIT 0

  //ENDWHILE

  TURN_CHAR_TO_FACE_COORD luigi 882.0 -415.0 -100.0

  TURN_PLAYER_TO_FACE_CHAR player luigi

  SET_FIXED_CAMERA_POSITION 886.0 -415.0 16.0 0.0 0.0 0.0

  POINT_CAMERA_AT_CHAR luigi fixed interpolation

  SET_GANG_PLAYER_ATTITUDE GANG_MAFIA LOVES player //The Mafia now like the player

  PRINT_BIG ( LM1 ) 5000 1

  WAIT 1000

  PRINT_NOW ( LM1_A ) 7000 1 //"But he vouched for you. So I was thinking maybe you can do me a favour."

  MESSAGE_WAIT 7000 flag_played_luigi1_already

  PRINT_NOW ( LM1_B ) 7000 1 //"A couple of my girls need a ride so grab a car and pick up Trixie from the Reverend Flannery's and Misty from the clinic."

  MESSAGE_WAIT 7000 flag_played_luigi1_already

  PRINT_NOW ( LM1_C ) 7000 1 //"Then bring them back here. Remember no one messes with my girls so keep your hands on the wheel!"

  MESSAGE_WAIT 7000 flag_played_luigi1_already

  PRINT_NOW ( LM1_D ) 7000 1 //"If you don't mess this up there might be more work for you."

  MESSAGE_WAIT 7000 flag_played_luigi1_already

  DELETE_CHAR luigi

  flag_luigi_created_lm1 = 0

  SWITCH_WIDESCREEN OFF

  RESTORE_CAMERA
  */

        $.player.setControl(true /* on */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        // Creates the first girl

        $.girl1_lm1 = Char.Create(21 /* PEDTYPE_SPECIAL */, 27 /* PED_SPECIAL2 */, 1158.0, -536.0, 20.0);

        $.girl1_lm1.clearThreatSearch();

        $.girl1_lm1.turnToFaceCoord(1158.0, -541.0, -100.0);

        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);

        // Creates second girl

        girl2_lm1 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, 39 /* PED_PROSTITUTE */, 1383.0, -392.0, -100.0);

        girl2_lm1.clearThreatSearch();

        girl2_lm1.turnToFaceCoord(1380.0, -391.0, -100.0);

        $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);

        // Waiting for the player to be in a car

        while (!$.player.isInAnyCar()) {
            await asyncWait(0);
        }

        $.car_lm1 = $.player.storeCarIsIn();

        $.no_of_passengers_car_lm1 = $.car_lm1.getMaximumNumberOfPassengers();

        // Waiting for the player and the girls all to be in the one car

        while (!$.player.isInAnyCar() || !($.flag_girl1_in_car_lm1 == 1) || !(flag_girl2_in_car_lm1 == 1)) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead(girl2_lm1)) {
                Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
            }
            if ($.player.isInAnyCar()) {
                $.car_lm1 = $.player.storeCarIsIn();
                $.no_of_passengers_car_lm1 = $.car_lm1.getMaximumNumberOfPassengers();
                $.flag_player_not_in_car_message_lm1 = 0;

                // Checks for girl1

                if ($.flag_girl1_in_car_lm1 == 0) {
                    if ($.player.locateInCarChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.player.isStopped()) {
                        $.flag_player_had_car_message_lm1 = 0;
                        $.passenger_count_lm1 = $.car_lm1.getNumberOfPassengers();
                        $.total_space_in_car_lm1 = $.no_of_passengers_car_lm1 - $.passenger_count_lm1;
                        if ($.total_space_in_car_lm1 >= 1) {
                            $.girl1_lm1.followPlayer($.player);
                            while (!$.girl1_lm1.isInCar($.car_lm1)) {
                                await asyncWait(0);
                                if (Car.IsDead($.car_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }
                                if (Char.IsDead($.girl1_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }
                                if (Char.IsDead(girl2_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }

                                //IF LOCATE_PLAYER_IN_CAR_CHAR_2D player girl1_lm1 8.0 8.0 FALSE
                                //AND IS_PLAYER_STOPPED player
                                //	SET_PLAYER_AS_LEADER girl1_lm1 player
                                //ENDIF
                            }
                            $.radar_blip_ped1_lm1.remove();
                            $.flag_girl1_in_car_lm1 = 1;
                        } else {
                            if ($.flag_player_had_car_message_lm1 == 0) {
                                Text.PrintNow('NODOORS', 7000, 1); //"The cars not big enough get another one!"
                                $.flag_player_had_car_message_lm1 = 1;
                            }
                        }
                    }
                }

                // Checks for girl 2

                if (flag_girl2_in_car_lm1 == 0) {
                    if ($.player.locateInCarChar2D(girl2_lm1, 8.0, 8.0, false /* FALSE */) && $.player.isStopped()) {
                        $.flag_player_had_car_message_lm1 = 0;
                        $.passenger_count_lm1 = $.car_lm1.getNumberOfPassengers();
                        $.total_space_in_car_lm1 = $.no_of_passengers_car_lm1 - $.passenger_count_lm1;

                        if ($.total_space_in_car_lm1 >= 1) {
                            girl2_lm1.followPlayer($.player);
                            while (!girl2_lm1.isInCar($.car_lm1)) {
                                await asyncWait(0);
                                if (Car.IsDead($.car_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }
                                if (Char.IsDead($.girl1_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }
                                if (Char.IsDead(girl2_lm1)) {
                                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                                }

                                //IF LOCATE_PLAYER_IN_CAR_CHAR_2D player girl2_lm1 8.0 8.0 FALSE
                                //AND IS_PLAYER_STOPPED player
                                //	SET_PLAYER_AS_LEADER girl2_lm1 player
                                //ENDIF
                            }
                            $.radar_blip_ped2_lm1.remove();
                            flag_girl2_in_car_lm1 = 1;
                        } else {
                            if ($.flag_player_had_car_message_lm1 == 0) {
                                Text.PrintNow('NODOORS', 7000, 1); //"The cars not big enough get another one!"
                                $.flag_player_had_car_message_lm1 = 1;
                            }
                        }
                    }
                }

                if ($.flag_girl1_in_car_lm1 == 1) {
                    if (!$.girl1_lm1.isInPlayersGroup($.player) && $.flag_blip_on_girl1_lm1 == 0) {
                        Text.PrintSoon('HEY', 5000, 1); //"Hey wait for me!"
                        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                        $.flag_girl1_in_car_lm1 = 0;
                        $.flag_blip_on_girl1_lm1 = 1;
                    }

                    //IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player girl1_lm1 8.0 8.0 FALSE
                    //AND flag_blip_on_girl1_lm1 = 1
                    //	SET_PLAYER_AS_LEADER girl1_lm1 player
                    //	REMOVE_BLIP radar_blip_ped1_lm1
                    //	flag_blip_on_girl1_lm1 = 0
                    //ENDIF

                    //IF IS_CHAR_DEAD girl1_lm1
                    //	PRINT_BIG ( M_FAIL ) 5000 1 //"Mission Failed!"
                    //	GOTO mission_luigi1_failed
                    //ENDIF
                    //
                    //IF IS_CHAR_DEAD girl2_lm1
                    //	PRINT_BIG ( M_FAIL ) 5000 1 //"Mission Failed!"
                    //	GOTO mission_luigi1_failed
                    //ENDIF
                }
                if (flag_girl2_in_car_lm1 == 1) {
                    if (!girl2_lm1.isInPlayersGroup($.player) && flag_blip_on_girl2_lm1 == 0) {
                        Text.PrintSoon('HEY', 5000, 1); //"Hey wait for me!"
                        $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);
                        flag_girl2_in_car_lm1 = 0;
                        flag_blip_on_girl2_lm1 = 1;
                    }

                    //IF LOCATE_PLAYER_ANY_MEANS_CHAR_2D player girl2_lm1 8.0 8.0 FALSE
                    //	AND flag_blip_on_girl2_lm1 = 1
                    //		SET_PLAYER_AS_LEADER girl2_lm1 player
                    //		REMOVE_BLIP radar_blip_ped2_lm1
                    //		flag_blip_on_girl2_lm1 = 0
                    //	ENDIF

                    //IF IS_CHAR_DEAD girl1_lm1
                    //	PRINT_BIG ( M_FAIL ) 5000 1 //"Mission Failed!"
                    //	GOTO mission_luigi1_failed
                    //ENDIF

                    //IF IS_CHAR_DEAD girl2_lm1
                    //	PRINT_BIG ( M_FAIL ) 5000 1 //"Mission Failed!"
                    //	GOTO mission_luigi1_failed
                    //ENDIF
                }
            } else {
                if ($.flag_player_not_in_car_message_lm1 == 0) {
                    Text.PrintNow('IN_VEH2', 7000, 1); //"Get a vehicle and get on with the mission!"
                    $.flag_player_not_in_car_message_lm1 = 1;
                }
            }
        }

        Text.PrintNow('LM1_2', 7000, 1); //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"

        $.radar_blip_coord1_lm1 = Blip.AddForCoord(908.0, -425.0, -100.0);

        $.flag_coord_blip_on = 1;

        // waiting for the player to get to luigi's

        while (
            !$.player.locateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, true /* TRUE */) ||
            !$.girl1_lm1.locateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, false /* FALSE */) ||
            !girl2_lm1.locateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, false /* FALSE */)
        ) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead(girl2_lm1)) {
                Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
            }
            if ($.player.isInAnyCar()) {
                //AND flag_player_not_in_car_message_lm1 = 1
                $.car_lm1 = $.player.storeCarIsIn();
                $.no_of_passengers_car_lm1 = $.car_lm1.getMaximumNumberOfPassengers();

                //IF IS_CHAR_IN_CAR girl1_lm1 car_lm1
                //AND IS_CHAR_IN_CAR girl2_lm1 car_lm1
                //	ADD_BLIP_FOR_COORD 908.0 -425.0 -100.0 radar_blip_coord1_lm1
                //	flag_player_not_in_car_message_lm1 = 0
                //ENDIF

                if ($.no_of_passengers_car_lm1 < 2 && $.flag_player_had_car_message_lm1 == 0) {
                    Text.PrintNow('NODOORS', 7000, 1); //"The car is not big enought get an other one!"
                    $.flag_player_had_car_message_lm1 = 1;
                }
                if ($.no_of_passengers_car_lm1 >= 2 && $.flag_player_had_car_message_lm1 == 1) {
                    $.flag_player_had_car_message_lm1 = 0;
                }
            }

            //IF NOT IS_PLAYER_IN_ANY_CAR player
            //AND flag_player_not_in_car_message_lm1 = 0
            //	PRINT_NOW ( IN_VEH2 ) 7000 1 //"Get a vehicle and get on with the mission!"
            //	REMOVE_BLIP radar_blip_coord1_lm1
            //	flag_player_not_in_car_message_lm1 = 1
            //ENDIF

            if (!$.girl1_lm1.isInPlayersGroup($.player) && $.flag_blip_on_girl1_lm1 == 0) {
                Text.PrintSoon('HEY', 5000, 1); //"Hey wait for me!"
                $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                $.radar_blip_coord1_lm1.remove();
                $.flag_blip_on_girl1_lm1 = 1;
            }
            if (!girl2_lm1.isInPlayersGroup($.player) && flag_blip_on_girl2_lm1 == 0) {
                Text.PrintSoon('HEY', 5000, 1); //"Hey wait for me!"
                $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);
                $.radar_blip_coord1_lm1.remove();
                flag_blip_on_girl2_lm1 = 1;
            }
            if ($.player.locateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
                $.girl1_lm1.followPlayer($.player);
                $.radar_blip_ped1_lm1.remove();
                $.flag_coord_blip_on = 0;
                $.flag_blip_on_girl1_lm1 = 0;
            }
            if ($.player.locateAnyMeansChar2D(girl2_lm1, 8.0, 8.0, false /* FALSE */) && flag_blip_on_girl2_lm1 == 1) {
                girl2_lm1.followPlayer($.player);
                $.radar_blip_ped2_lm1.remove();
                $.flag_coord_blip_on = 0;
                flag_blip_on_girl2_lm1 = 0;
            }
            if ($.girl1_lm1.isInPlayersGroup($.player) && girl2_lm1.isInPlayersGroup($.player) && $.flag_coord_blip_on == 0) {
                $.radar_blip_coord1_lm1 = Blip.AddForCoord(908.0, -425.0, -100.0);
                $.flag_coord_blip_on = 1;
            }
        }

        $.radar_blip_coord1_lm1.remove();

        $.girl1_lm1.leaveGroup();

        girl2_lm1.leaveGroup();

        if ($.girl1_lm1.isInAnyCar() && girl2_lm1.isInAnyCar()) {
            $.car_lm1 = $.girl1_lm1.storeCarIsIn();
            $.girl1_lm1.setObjLeaveCar($.car_lm1);
            $.car_lm1 = girl2_lm1.storeCarIsIn();
            girl2_lm1.setObjLeaveCar($.car_lm1);
            while ($.girl1_lm1.isInAnyCar() && girl2_lm1.isInAnyCar()) {
                await asyncWait(0);
                if (Char.IsDead($.girl1_lm1)) {
                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                }
                if (Char.IsDead(girl2_lm1)) {
                    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
                    // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi1_failed'); // fallback: would break linear control flow
                }
            }
        }
    }

    // SCM GOTO → mission_luigi1_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_luigi1_passed'); // fallback: would break linear control flow

    // Mission Luigi1 failed
}

async function mission_luigi1_failed() {
    $.flag_failed_luigi1 = 1;
    // START_NEW_SCRIPT luigi_mission1.2_loop
    return;

    // mission Luigi1 passed
}

async function mission_luigi1_passed() {
    $.flag_luigi_mission1_passed = 1;
    Text.PrintBig('m_pass', 2000, 1);
    $.player.clearWantedLevel();
    $.player.addScore(1500);
    // START_NEW_SCRIPT luigi_mission2_loop
    return;

    // mission cleanup
}

async function mission_cleanup_luigi1() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_luigi_mission = 0;
    Streaming.MarkModelAsNoLongerNeeded(39 /* PED_PROSTITUTE */);
    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Camera.Restore();
    $.player.setControl(true /* on */);
    Game.SetPoliceIgnorePlayer($.player, false /* off */);
    Hud.SwitchWidescreen(false /* OFF */);

    //IF flag_girl1_in_car_lm1 = 1
    //AND flag_girl2_in_car_lm1 = 1

    $.radar_blip_coord1_lm1.remove();
    //ENDIF

    //IF flag_girl1_in_car_lm1 = 0
    //OR flag_blip_on_girl1_lm1 = 1

    $.radar_blip_ped1_lm1.remove();
    //ENDIF

    //IF flag_girl2_in_car_lm1 = 0
    //OR flag_blip_on_girl2_lm1 = 1

    $.radar_blip_ped2_lm1.remove();
    //ENDIF

    Mission.Finish();
    return;
}

export async function luigi1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Luigi mission 1*********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_luigi1
    await mission_start_luigi1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_luigi1_failed
        await mission_luigi1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_luigi1
    await mission_cleanup_luigi1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variable for mission

    // VAR_INT radar_blip_coord1_lm1

    // VAR_INT radar_blip_ped1_lm1

    // VAR_INT radar_blip_ped2_lm1

    // VAR_INT girl1_lm1

    // VAR_INT girl2_lm1

    // VAR_INT car_lm1

    // VAR_INT flag_player_had_car_message_lm1

    // VAR_INT flag_player_not_in_car_message_lm1

    // VAR_INT flag_luigi_created_lm1

    // VAR_INT no_of_passengers_car_lm1

    // VAR_INT flag_girl1_in_car_lm1

    // VAR_INT flag_girl2_in_car_lm1

    // VAR_INT passenger_count_lm1

    // VAR_INT total_space_in_car_lm1

    // VAR_INT flag_blip_on_girl1_lm1

    // VAR_INT flag_blip_on_girl2_lm1

    // VAR_INT flag_coord_blip_on

    // ****************************************Mission Start************************************
}
