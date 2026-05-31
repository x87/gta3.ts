// Generated from Main/Industrial/toni3.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *************************************Toni mission 3****************************************
// *************************************Pick up the Lads**************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_toni3

    // IF has_deatharrest_been_executed
    // 	GOSUB mission_toni3_failed
    // ENDIF

    // GOSUB mission_cleanup_toni3

    // MISSION_END

    // Variables for mission

    // VAR_INT carry_car blip1_t3 blip2_t3 blip3_t3 blip4_t3 blip5_t3 cutscene_seen_flag

    // VAR_INT flag_displayed_horn_message_tm3 flag_displayed_wanted_message_tm3 flag_car_blip_displayed

    // VAR_INT triads1 triads2 triads3 triads4 triads5 triads6 triads7 triads8 triads9 triads10

    // VAR_INT triad_van1 triad_van2 triad_van3 triad_van4 triad_van5 triad_van6

    // ***************************************Mission Start*************************************
    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_toni_mission = 1;
    // SCRIPT_NAME toni3
    Text.ClearThisBigPrint('M_PASS');
    await asyncWait(0);

    $.cutscene_seen_flag = 0;

    /*
    IF CAN_PLAYER_START_MISSION Player
    MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
    ELSE
    GOTO mission_toni3_failed
    ENDIF

    SET_FADING_COLOUR 0 0 0

    DO_FADE 1500 FADE_OUT

    SWITCH_STREAMING OFF

    PRINT_BIG ( TM3 ) 15000 2 //"Toni Mission 1"
    */

    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
    Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'NOTE');
    Streaming.RequestModel(537 /* ind_newrizzos */);

    /*
    WHILE GET_FADING_STATUS
    WAIT 0

    ENDWHILE
    */

    //LOAD_SCENE 1218.4 -314.5 28.9

    Streaming.LoadAllModelsNow();

    while (!Streaming.HasModelLoaded(185 /* cut_obj1 */) || !Streaming.HasModelLoaded(186 /* cut_obj2 */) || !Streaming.HasModelLoaded(537 /* ind_newrizzos */)) {
        await asyncWait(0);
    }

    Cutscene.Load('T3_MAS');
    Cutscene.SetOffset(1218.42, -314.5, 28.9);

    $.cs_player = CutsceneObject.Create(PED_PLAYER);
    $.cs_player.setAnim('player');

    $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ1);
    $.cs_playerhead.setAnim('player');

    $.cs_note = CutsceneObject.Create(186 /* cut_obj2 */);
    $.cs_note.setAnim('NOTE');

    World.ClearArea(1219.5, -321.1, 27.5, 1.0, true);
    $.player.setCoordinates(1219.5, -321.1, 26.4);

    $.player.setHeading(180.0);

    World.ClearArea(1216.1, -313.0, 29.9, 10.0, true); //TONIS RESTAURANT

    Camera.DoFade(1500, FADE_IN);

    //SWITCH_WORLD_PROCESSING OFF

    World.SwitchRubbish(OFF);
    Streaming.Switch(ON);
    Cutscene.Start();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    /*
    WHILE cs_time < 100
    WAIT 0
    GET_CUTSCENE_TIME cs_time
    ENDWHILE

    PRINT_NOW ( TM3_MA ) 5000 1 // Pick Frankies Limo at Joeys and take it to him

    WHILE cs_time < 1000
    WAIT 0
    GET_CUTSCENE_TIME cs_time
    ENDWHILE

    PRINT_NOW ( TM3_MB ) 5000 1 // Pick Frankies Limo at Joeys and take it to him

    WHILE cs_time < 2000
    WAIT 0
    GET_CUTSCENE_TIME cs_time
    ENDWHILE

    PRINT_NOW ( TM3_MC ) 5000 1 // Pick Frankies Limo at Joeys and take it to him
    */

    while ($.cs_time < 3006) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_A', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 5297) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_B', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 8661) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_C', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 12025) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_D', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 14817) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_E', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 17107) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_F', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 18968) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('TM3_G', 10000, 1); // Pick Frankies Limo at Joeys and take it to him

    while ($.cs_time < 19787) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 21666) {
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

    //SWITCH_WORLD_PROCESSING ON

    World.SwitchRubbish(ON);
    Cutscene.Clear();
    Camera.SetInFrontOfPlayer();

    await asyncWait(500);

    Camera.DoFade(1500, FADE_IN);

    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
    Streaming.MarkModelAsNoLongerNeeded(537 /* ind_newrizzos */);

    // START OF MISSION

    Streaming.LoadSpecialCharacter(1, 'tony');
    Streaming.LoadSpecialCharacter(2, 'joey2');
    Streaming.LoadSpecialCharacter(3, 'luigi');

    Streaming.RequestModel(CAR_STRETCH);
    Streaming.RequestModel(CAR_BELLYUP);
    Streaming.RequestModel(PED_GANG_TRIAD_A);
    Streaming.RequestModel(PED_GANG_TRIAD_B);

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasSpecialCharacterLoaded(3)) {
        await asyncWait(0);
    }

    while (
        !Streaming.HasModelLoaded(CAR_STRETCH) ||
        !Streaming.HasModelLoaded(CAR_BELLYUP) ||
        !Streaming.HasModelLoaded(PED_GANG_TRIAD_A) ||
        !Streaming.HasModelLoaded(PED_GANG_TRIAD_B)
    ) {
        await asyncWait(0);
    }
    /*
    WHILE NOT ROTATE_OBJECT joeys_garage_door3 135.0 30.0 FALSE
    WAIT 0

    ENDWHILE
    */

    $.carry_car = Car.Create(CAR_STRETCH, 1187.0, -860.4, 14.5);
    $.carry_car.setHeading(225.0);
    $.carry_car.changeColor(CARCOLOUR_BLACK, CARCOLOUR_BLACK);
    $.carry_car.setStrong(true);
    $.carry_car.setProofs(true, true, true, true, true);
    //ADD_BLIP_FOR_CAR carry_car blip1_t3

    $.blip1_t3 = Blip.AddForCoord(1191.7, -870.0, -100.0);
    $.carry_car.setCanRespray(OFF);
    //SET_RADIO_CHANNEL carry_car 1 -1

    //PICK UP LIMO AND JOEY

    //GOTO skip_to_toni3_cut //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    pick_up_joey: {
        $.flag_car_blip_displayed = 1 /* TRUE */;

        if (Car.IsDead($.carry_car)) {
            FAIL("mission_toni3_failed");
        }

        while (!$.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.5, 1.5, 2.0, true)) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        $.player.setControl(OFF);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);
        Hud.SwitchWidescreen(ON);
        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, FADE_OUT);

        await asyncWait(1000);
        Streaming.LoadScene(1190.07, -869.86, 13.97);

        if ($.player.isPlaying()) {
            World.ClearArea(1190.2, -866.4, 14.1, 1.0, true);
            $.player.setCoordinates(1189.5, -867.6, 14.1);
            $.player.setHeading(36.0);
            Camera.SetFixedPosition(1186.177, -852.455, 17.219, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(1186.077, -853.425, 16.995, JUMP_CUT);
            $.script_controlled_player = $.player.getChar();
            $.script_controlled_player.setRunning(true);
            if (!Car.IsDead($.carry_car)) {
                $.script_controlled_player.setObjEnterCarAsDriver($.carry_car);
            }
            Camera.DoFade(1000, FADE_IN);
            await asyncWait(1000);
        }

        if (Car.IsDead($.carry_car)) {
            FAIL("mission_toni3_failed");
        }

        while (!$.player.isInCar($.carry_car)) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }
        /*
        WHILE NOT ROTATE_OBJECT joeys_garage_door3 45.0 30.0 FALSE
        WAIT 0

        ENDWHILE
        */

        $.blip1_t3.remove();
        Audio.SetRadioChannel(1, -1);

        $.joey = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 1179.4, -858.6, 14.0);
        $.joey.clearThreatSearch();

        if (Car.IsDead($.carry_car)) {
            FAIL("mission_toni3_failed");
        }

        $.joey.setObjEnterCarAsPassenger($.carry_car);

        //SET_FIXED_CAMERA_POSITION 1182.8 -856.1 17.0 0.0 0.0 0.0
        //POINT_CAMERA_AT_CHAR joey FIXED INTERPOLATION

        TIMERB = 0;
        Audio.LoadMissionAudio(SfxMission.T3_a);

        while (!$.joey.isInCar($.carry_car)) {
            await asyncWait(0);
            if (Char.IsDead($.joey)) {
                FAIL("mission_toni3_failed");
            }
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.joey) && !Car.IsDead($.carry_car)) {
                }
            }
        }

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        $.joey.setCantBeDraggedOut(true);
        $.blip3_t3 = Blip.AddForCoord(906.2, -426.0, -100.0);

        //CAR DRIVING OUT OF GARAGE CUT SCENE

        World.ClearArea(1195.0, -870.3, 15.0, 10.0, true);

        Camera.SetFixedPosition(1200.9, -866.5, 19.0, 0.0, 0.0, 0.0);
        Camera.PointAtPlayer($.player, FIXED, JUMP_CUT);

        const _res287 = $.joeys_garage_door2.getCoordinates();
        $.joeydoor2_X = _res287.x;
        $.joeydoor2_Y = _res287.y;
        $.joeydoor2_Z = _res287.z;
        const _res288 = $.joeys_garage_door3.getCoordinates();
        $.joeydoor3_X = _res288.x;
        $.joeydoor3_Y = _res288.y;
        $.joeydoor3_Z = _res288.z;

        $.joeydoor2_Z = $.joeydoor2_Z + 3.0;
        $.joeydoor3_Z = $.joeydoor3_Z + 3.0;

        while (
            !$.joeys_garage_door2.slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, false) ||
            !$.joeys_garage_door3.slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, false)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        $.carry_car.gotoCoordinatesAccurate(1198.4, -871.1, -100.0);
        $.carry_car.setCruiseSpeed(4.0);
        $.carry_car.setDrivingStyle(3);

        while (!$.carry_car.locate2D(1198.4, -871.1, 2.0, 2.0, false)) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        const _res289 = $.joeys_garage_door2.getCoordinates();
        $.joeydoor2_X = _res289.x;
        $.joeydoor2_Y = _res289.y;
        $.joeydoor2_Z = _res289.z;
        const _res290 = $.joeys_garage_door3.getCoordinates();
        $.joeydoor3_X = _res290.x;
        $.joeydoor3_Y = _res290.y;
        $.joeydoor3_Z = _res290.z;

        $.joeydoor2_Z = $.joeydoor2_Z - 3.0;
        $.joeydoor3_Z = $.joeydoor3_Z - 3.0;

        while (
            !$.joeys_garage_door2.slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, false) ||
            !$.joeys_garage_door3.slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, false)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        $.blip1_t3 = Blip.AddForCar($.carry_car);
        $.blip1_t3.remove();

        Hud.SwitchWidescreen(OFF);
        $.player.setControl(ON);
        $.carry_car.setStatus(STATUS_PLAYER);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);
        Camera.RestoreJumpcut();
        Camera.SetInFrontOfPlayer();
        $.carry_car.setProofs(false, false, false, false, false);
        $.flag_displayed_horn_message_tm3 = 0;
        $.flag_displayed_wanted_message_tm3 = 0;

        //PICK UP LUIGI

        $.blip3_t3.remove();
    }

    pick_up_Luigi: while (true) {
        if (Car.IsDead($.carry_car)) {
            FAIL("mission_toni3_failed");
        }

        $.flag_car_blip_displayed = 1 /* TRUE */;
        $.blob_flag = 1;

        while (
            !$.player.isStoppedInArea3D(903.8, -423.0, 14.0, 908.3, -431.0, 18.0, !!$.blob_flag) ||
            !$.player.isInCar($.carry_car) ||
            !$.player.isPressingHorn() ||
            $.player.isWantedLevelGreater(0)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                Text.PrintNow('TM3_A1', 5000, 1); //Joeys dead
                FAIL("mission_toni3_failed");
            }
            if ($.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 1 /* TRUE */) {
                    $.blip3_t3 = Blip.AddForCoord(906.2, -426.0, -100.0);
                    $.blob_flag = 1;
                    $.blip1_t3.remove();
                    $.flag_car_blip_displayed = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 0 /* FALSE */) {
                    $.blip1_t3 = Blip.AddForCar($.carry_car);
                    $.blip3_t3.remove();
                    $.blob_flag = 0;
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
                    $.flag_car_blip_displayed = 1 /* TRUE */;
                }
            }
            if ($.player.isStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false)) {
                if ($.player.isInCar($.carry_car)) {
                    if ($.player.isWantedLevelGreater(0)) {
                        if ($.flag_displayed_wanted_message_tm3 == 0) {
                            Text.PrintNow('WANTED1', 5000, 1);
                            $.flag_displayed_wanted_message_tm3 = 1;
                        }
                    } else {
                        if ($.flag_displayed_horn_message_tm3 == 0) {
                            Text.PrintNow('HORN', 5000, 1);
                            $.flag_displayed_horn_message_tm3 = 1;
                        }
                    }
                }
            }
            if (!$.player.isInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false)) {
                if ($.flag_displayed_horn_message_tm3 == 1 || $.flag_displayed_wanted_message_tm3 == 1) {
                    Text.ClearThisPrint('WANTED1');
                    Text.ClearThisPrint('HORN');
                    $.flag_displayed_horn_message_tm3 = 0;
                    $.flag_displayed_wanted_message_tm3 = 0;
                }
            }
            if (!$.carry_car.isHealthGreater(600)) {
                await asyncWait(500);
                if (Car.IsDead($.carry_car)) {
                    Text.PrintNow('TM3_A1', 5000, 1); //Joeys dead
                    FAIL("mission_toni3_failed");
                }
                Text.PrintNow('TRASH', 5000, 2); //Repair the car!
                $.blip1_t3.remove();
                $.blip3_t3.remove();
                $.blip1_t3 = Blip.AddForCar($.carry_car);
                $.blip1_t3.changeDisplay(BLIP_ONLY);
                $.flag_car_blip_displayed = 1 /* TRUE */;
                while (!$.carry_car.isHealthGreater(600)) {
                    await asyncWait(0);
                    if (Car.IsDead($.carry_car)) {
                        Text.PrintNow('TM3_A1', 5000, 1); //Joeys dead
                        FAIL("mission_toni3_failed");
                    }
                    if ($.player.isInCar($.carry_car)) {
                        if ($.flag_car_blip_displayed == 1 /* TRUE */) {
                            //ADD_BLIP_FOR_COORD 925.0 -359.5 -100.0 blip5_t3
                            $.blip5_t3 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, RADAR_SPRITE_SPRAY);
                            $.blip1_t3.remove();
                            $.flag_car_blip_displayed = 0 /* FALSE */;
                        }
                    }
                    if (!$.player.isInCar($.carry_car)) {
                        if ($.flag_car_blip_displayed == 0 /* FALSE */) {
                            $.blip1_t3 = Blip.AddForCar($.carry_car);
                            $.blip5_t3.remove();
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
                            $.flag_car_blip_displayed = 1 /* TRUE */;
                        }
                    }
                }
                $.blip5_t3.remove();
                continue pick_up_Luigi; // SCM GOTO → pick_up_Luigi
            }
        }

        Text.ClearThisPrint('WANTED1');
        Text.ClearThisPrint('HORN');

        if (!Car.IsDead($.carry_car)) {
            $.carry_car.lockDoors(CARLOCK_LOCKED_PLAYER_INSIDE);
        }

        await asyncWait(500);

        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);
        $.blip3_t3.remove();

        if (!Car.IsDead($.carry_car)) {
            $.carry_car.lockDoors(CARLOCK_UNLOCKED);
        }

        World.ClearArea(897.0, -425.5, 14.7, 6.0, true);

        //SET_FIXED_CAMERA_POSITION 903.2 -427.7 16.6 0.0 0.0 0.0
        //POINT_CAMERA_AT_CHAR luigi FIXED JUMP_CUT

        Camera.SetFixedPosition(900.505, -419.672, 14.976, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(900.937, -420.566, 15.093, JUMP_CUT);

        $.luigi = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL3, 897.0, -425.3, 14.8);
        $.luigi.clearThreatSearch();

        World.SetPedDensityMultiplier(0.0);

        TIMERB = 0;
        Audio.LoadMissionAudio(SfxMission.T3_b);

        $.luigi.setObjGotoCoordOnFoot(901.0, -426.4);

        while (!$.luigi.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.luigi)) {
                FAIL("mission_toni3_failed");
            }
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
            if (TIMERB > 12000) {
                if (!Char.IsDead($.luigi)) {
                    $.luigi.setCoordinates(901.0, -426.4, -100.0);
                }
            }
        }

        $.luigi.setObjEnterCarAsPassenger($.carry_car);

        while (!$.luigi.isInCar($.carry_car)) {
            await asyncWait(0);
            if (Char.IsDead($.luigi)) {
                FAIL("mission_toni3_failed");
            }
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        $.luigi.setCantBeDraggedOut(true);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        $.player.setControl(ON);
        Camera.RestoreJumpcut();
        Hud.SwitchWidescreen(OFF);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);
        World.SetPedDensityMultiplier(1.0);

        Path.SwitchPedRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
        Path.SwitchRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);

        $.flag_displayed_horn_message_tm3 = 0;
        $.flag_displayed_wanted_message_tm3 = 0;

        //PICK UP TONI
        break pick_up_Luigi; // xxx: fallthrough
    }

    pick_up_toni: while (true) {
        $.flag_car_blip_displayed = 1 /* TRUE */;
        $.blob_flag = 1;

        if (!Car.IsDead($.carry_car)) {
            if (!$.player.isInCar($.carry_car)) {
                $.blip1_t3.remove();
                $.blip1_t3 = Blip.AddForCar($.carry_car);
                $.blob_flag = 0;
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
            }
        }

        while (
            !$.player.isStoppedInArea3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, !!$.blob_flag) ||
            !$.player.isInCar($.carry_car) ||
            !$.player.isPressingHorn() ||
            $.player.isWantedLevelGreater(0)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                Text.PrintNow('TM3_A2', 5000, 1); //Joey and Luigi are dead
                FAIL("mission_toni3_failed");
            }
            if ($.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 1 /* TRUE */) {
                    $.blip4_t3 = Blip.AddForCoord(1200.5, -322.5, -100.0);
                    $.blob_flag = 1;
                    $.blip1_t3.remove();
                    $.flag_car_blip_displayed = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 0 /* FALSE */) {
                    $.blip1_t3.remove();
                    $.blip1_t3 = Blip.AddForCar($.carry_car);
                    $.blob_flag = 0;
                    $.blip4_t3.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
                    $.flag_car_blip_displayed = 1 /* TRUE */;
                }
            }
            if ($.player.isStoppedInAreaInCar3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, false)) {
                if ($.player.isInCar($.carry_car)) {
                    if ($.player.isWantedLevelGreater(0)) {
                        if ($.flag_displayed_wanted_message_tm3 == 0) {
                            Text.PrintNow('WANTED1', 5000, 1);
                            $.flag_displayed_wanted_message_tm3 = 1;
                        }
                    } else {
                        if ($.flag_displayed_horn_message_tm3 == 0) {
                            Text.PrintNow('HORN', 5000, 1);
                            $.flag_displayed_horn_message_tm3 = 1;
                        }
                    }
                }
            }
            if (!$.player.isInAreaInCar3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, false)) {
                if ($.flag_displayed_horn_message_tm3 == 1 || $.flag_displayed_wanted_message_tm3 == 1) {
                    Text.ClearThisPrint('WANTED1');
                    Text.ClearThisPrint('HORN');
                    $.flag_displayed_horn_message_tm3 = 0;
                    $.flag_displayed_wanted_message_tm3 = 0;
                }
            }
            if (!$.carry_car.isHealthGreater(600)) {
                await asyncWait(500);
                if (Car.IsDead($.carry_car)) {
                    Text.PrintNow('TM3_A2', 5000, 1); //Joey and Luigi are dead
                    FAIL("mission_toni3_failed");
                }
                Text.PrintNow('TRASH', 5000, 2); //Repair the car!
                $.blip1_t3.remove();
                $.blip4_t3.remove();
                $.blip1_t3 = Blip.AddForCar($.carry_car);
                $.blip1_t3.changeDisplay(BLIP_ONLY);
                $.flag_car_blip_displayed = 1 /* TRUE */;
                while (!$.carry_car.isHealthGreater(600)) {
                    await asyncWait(0);
                    if (Car.IsDead($.carry_car)) {
                        Text.PrintNow('TM3_A2', 5000, 1); //Joey and Luigi are dead
                        FAIL("mission_toni3_failed");
                    }
                    if ($.player.isInCar($.carry_car)) {
                        if ($.flag_car_blip_displayed == 1 /* TRUE */) {
                            $.blip5_t3 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, RADAR_SPRITE_SPRAY);
                            $.blip1_t3.remove();
                            $.flag_car_blip_displayed = 0 /* FALSE */;
                        }
                    }
                    if (!$.player.isInCar($.carry_car)) {
                        if ($.flag_car_blip_displayed == 0 /* FALSE */) {
                            $.blip1_t3 = Blip.AddForCar($.carry_car);
                            $.blip5_t3.remove();
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
                            $.flag_car_blip_displayed = 1 /* TRUE */;
                        }
                    }
                }
                $.blip5_t3.remove();
                continue pick_up_toni; // SCM GOTO → pick_up_toni
            }
        }

        Text.ClearThisPrint('WANTED1');
        Text.ClearThisPrint('HORN');

        if (!Car.IsDead($.carry_car)) {
            $.carry_car.lockDoors(CARLOCK_LOCKED_PLAYER_INSIDE);
        }

        await asyncWait(500);

        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);
        $.blip4_t3.remove();

        if (!Car.IsDead($.carry_car)) {
            $.carry_car.lockDoors(CARLOCK_UNLOCKED);
        }

        World.ClearArea(1213.6, -321.1, 26.5, 10.0, true);

        $.toni = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL1, 1217.0, -321.1, -100.0);
        $.toni.setHeading(90.0);
        $.toni.clearThreatSearch();

        //SET_FIXED_CAMERA_POSITION 1211.6 -323.7 28.0 0.0 0.0 0.0
        //POINT_CAMERA_AT_CHAR toni FIXED JUMP_CUT

        Camera.SetFixedPosition(1222.214, -328.629, 34.454, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1221.629, -328.046, 33.891, JUMP_CUT);

        World.SetPedDensityMultiplier(0.0);
        /*
        TIMERB = 0

        SET_CHAR_OBJ_GOTO_COORD_ON_FOOT toni 1219.2 -320.9

        WHILE NOT IS_CHAR_OBJECTIVE_PASSED toni
        WAIT 0

        IF IS_CHAR_DEAD toni
        GOTO mission_toni3_failed
        ENDIF

        IF IS_CAR_DEAD carry_car
        GOTO mission_toni3_failed
        ENDIF

        IF TIMERB > 12000
        IF NOT IS_CHAR_DEAD	toni
        SET_CHAR_COORDINATES toni 1219.2 -320.9 26.4
        ENDIF
        ENDIF

        ENDWHILE
        */

        TIMERB = 0;

        Audio.LoadMissionAudio(SfxMission.T3_c);

        $.toni.setObjGotoCoordOnFoot(1205.5, -321.0);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                FAIL("mission_toni3_failed");
            }
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
            if (TIMERB > 12000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(1205.5, -321.0, -100.0);
                }
            }
        }

        Camera.SetFixedPosition(1206.2, -326.2, 27.0, 0.0, 0.0, 0.0);
        Camera.PointAtChar($.toni, FIXED, JUMP_CUT);
        $.toni.setObjEnterCarAsPassenger($.carry_car);

        while (!$.toni.isInCar($.carry_car)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                FAIL("mission_toni3_failed");
            }
            if (Car.IsDead($.carry_car)) {
                FAIL("mission_toni3_failed");
            }
        }

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        $.toni.setCantBeDraggedOut(true);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);
        World.SetPedDensityMultiplier(1.0);

        //YET ANOTHER AMBUSH BY THE TRIADS

        $.triad_van1 = Car.Create(CAR_BELLYUP, 1193.0, -228.0, -100.0);
        $.triad_van1.setHeading(180.0);
        $.triad_van1.setDrivingStyle(3);
        $.triad_van1.setCruiseSpeed(30.0);
        $.triad_van1.setStrong(true);

        $.triads1 = Char.CreateInsideCar($.triad_van1, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A);
        $.triads1.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad_van1.setMission(2);
        $.triads1.setThreatSearch(THREAT_PLAYER1);

        $.triads2 = Char.CreateAsPassenger($.triad_van1, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 0);
        $.triads2.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads2.setObjKillPlayerAnyMeans($.player);
        //SET_CHAR_OBJ_DESTROY_CAR triads2 carry_car

        $.triads2.setThreatSearch(THREAT_PLAYER1);

        $.triad_van2 = Car.Create(CAR_BELLYUP, 1275.8, -346.7, -100.0);
        $.triad_van2.setHeading(1.0);
        $.triad_van2.setDrivingStyle(3);
        $.triad_van2.setCruiseSpeed(30.0);
        $.triad_van2.setStrong(true);

        $.triads3 = Char.CreateInsideCar($.triad_van2, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A);
        $.triads3.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad_van2.setMission(2);
        $.triads3.setThreatSearch(THREAT_PLAYER1);

        $.triads4 = Char.CreateAsPassenger($.triad_van2, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 0);
        $.triads4.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads4.setObjKillPlayerAnyMeans($.player);
        //SET_CHAR_OBJ_DESTROY_CAR triads4 carry_car

        $.triads4.setThreatSearch(THREAT_PLAYER1);

        $.triad_van3 = Car.Create(CAR_BELLYUP, 1342.5, -281.5, -100.0);
        $.triad_van3.setHeading(90.0);
        $.triad_van3.setDrivingStyle(3);
        $.triad_van3.setCruiseSpeed(30.0);
        $.triad_van3.setStrong(true);

        $.triads5 = Char.CreateInsideCar($.triad_van3, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A);
        $.triads5.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad_van3.setMission(2);
        $.triads5.setThreatSearch(THREAT_PLAYER1);

        $.triads6 = Char.CreateAsPassenger($.triad_van3, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 0);
        $.triads6.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads6.setObjKillPlayerAnyMeans($.player);
        //SET_CHAR_OBJ_DESTROY_CAR triads6 carry_car

        $.triads6.setThreatSearch(THREAT_PLAYER1);

        $.triad_van4 = Car.Create(CAR_BELLYUP, 1121.6, -345.2, -100.0);
        $.triad_van4.setHeading(270.0);
        $.triad_van4.setDrivingStyle(3);
        $.triad_van4.setCruiseSpeed(30.0);
        $.triad_van4.setStrong(true);

        $.triads7 = Char.CreateInsideCar($.triad_van4, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A);
        $.triads7.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad_van4.setMission(2);
        $.triads7.setThreatSearch(THREAT_PLAYER1);

        $.triads8 = Char.CreateAsPassenger($.triad_van4, PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 0);
        $.triads8.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads8.setObjKillPlayerAnyMeans($.player);
        //SET_CHAR_OBJ_DESTROY_CAR triads8 carry_car

        $.triads8.setThreatSearch(THREAT_PLAYER1);

        //ROAD BLOCK

        $.triad_van5 = Car.Create(CAR_BELLYUP, 1383.3, -285.0, -100.0);
        $.triad_van5.setHeading(10.0);

        $.triad_van6 = Car.Create(CAR_BELLYUP, 1383.3, -279.0, -100.0);
        $.triad_van6.setHeading(160.0);

        $.triads9 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 1382.1, -281.7, -100.0);
        $.triads9.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads9.setStayInSamePlace(true);
        $.triads9.setObjDestroyCar($.carry_car);
        $.triads9.setThreatSearch(THREAT_PLAYER1);

        $.triads10 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 1384.3, -291.5, -100.0);
        $.triads10.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triads10.setStayInSamePlace(true);
        $.triads10.setObjDestroyCar($.carry_car);
        $.triads10.setThreatSearch(THREAT_PLAYER1);

        Camera.PointAtCar($.triad_van1, BEHINDCAR, INTERPOLATION);

        await asyncWait(3000);

        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.RestoreJumpcut();

        //GO TO FRANKIES
        break pick_up_toni; // xxx: fallthrough
    }

    get_to_frankies: while (true) {
        $.flag_car_blip_displayed = 1 /* TRUE */;

        if (!Car.IsDead($.carry_car)) {
            $.frankie_garage.setTargetCarForMission($.carry_car);
        }

        if (!Car.IsDead($.carry_car)) {
            if (!$.player.isInCar($.carry_car)) {
                $.blip1_t3.remove();
                $.blip1_t3 = Blip.AddForCar($.carry_car);
                $.blob_flag = 0;
                Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
            }
        }

        while (!$.frankie_garage.isCarInMission()) {
            //OR NOT IS_PLAYER_IN_CAR player carry_car
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                Text.PrintNow('TM3_A3', 5000, 1); //Joey, luigi and Toni are dead
                FAIL("mission_toni3_failed");
            }
            if ($.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 1 /* TRUE */) {
                    $.blip2_t3 = Blip.AddForCoord(1428.6, -183.1, -100.0);
                    $.blip2_t3.changeDisplay(BLIP_ONLY);
                    $.blip1_t3.remove();
                    $.flag_car_blip_displayed = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.carry_car)) {
                if ($.flag_car_blip_displayed == 0 /* FALSE */) {
                    $.blip1_t3 = Blip.AddForCar($.carry_car);
                    $.blip2_t3.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the carry_car!"
                    $.flag_car_blip_displayed = 1 /* TRUE */;
                }
            }
            if (!Car.IsDead($.triad_van1)) {
                if ($.triad_van1.isInArea2D(1393.6, -268.2, 1427.1, -154.1, false)) {
                    if (!Char.IsDead($.triads1) && !Char.IsDead($.triads2)) {
                        $.triads1.setObjKillPlayerOnFoot($.player);
                        $.triads2.setObjKillPlayerOnFoot($.player);
                    }
                }
            }
            if (!Car.IsDead($.triad_van2)) {
                if ($.triad_van2.isInArea2D(1393.6, -268.2, 1427.1, -154.1, false)) {
                    if (!Char.IsDead($.triads3) && !Char.IsDead($.triads4)) {
                        $.triads3.setObjKillPlayerOnFoot($.player);
                        $.triads4.setObjKillPlayerOnFoot($.player);
                    }
                }
            }
            if (!Car.IsDead($.triad_van3)) {
                if ($.triad_van3.isInArea2D(1393.6, -268.2, 1427.1, -154.1, false)) {
                    if (!Char.IsDead($.triads5) && !Char.IsDead($.triads6)) {
                        $.triads5.setObjKillPlayerOnFoot($.player);
                        $.triads6.setObjKillPlayerOnFoot($.player);
                    }
                }
            }
            if (!Car.IsDead($.triad_van4)) {
                if ($.triad_van4.isInArea2D(1393.6, -268.2, 1427.1, -154.1, false)) {
                    if (!Char.IsDead($.triads7) && !Char.IsDead($.triads8)) {
                        $.triads7.setObjKillPlayerOnFoot($.player);
                        $.triads8.setObjKillPlayerOnFoot($.player);
                    }
                }
            }
        }

        $.blip1_t3.remove();
        $.blip2_t3.remove();
        Camera.SetFixedPosition(1421.8, -182.5, 52.5, 0.0, 0.0, 0.0);
        Camera.PointAtCar($.carry_car, FIXED, INTERPOLATION);

        await asyncWait(1000);

        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);

        if ($.player.isInAnyCar()) {
            $.player.warpFromCarToCoord(1454.6, -189.5, 55.0);
        } else {
            $.player.setCoordinates(1454.6, -189.5, 55.0);
        }

        if (!Char.IsDead($.triads1)) {
            $.triads1.delete();
        }
        if (!Char.IsDead($.triads2)) {
            $.triads2.delete();
        }
        if (!Char.IsDead($.triads3)) {
            $.triads3.delete();
        }
        if (!Char.IsDead($.triads4)) {
            $.triads4.delete();
        }
        if (!Char.IsDead($.triads5)) {
            $.triads5.delete();
        }
        if (!Char.IsDead($.triads6)) {
            $.triads6.delete();
        }
        if (!Char.IsDead($.triads7)) {
            $.triads7.delete();
        }
        if (!Char.IsDead($.triads8)) {
            $.triads8.delete();
        }
        if (!Char.IsDead($.triads9)) {
            $.triads9.delete();
        }
        if (!Char.IsDead($.triads10)) {
            $.triads10.delete();
        }
        if (!Car.IsDead($.triad_van1)) {
            $.triad_van1.delete();
        }
        if (!Car.IsDead($.triad_van2)) {
            $.triad_van2.delete();
        }
        if (!Car.IsDead($.triad_van3)) {
            $.triad_van3.delete();
        }
        if (!Car.IsDead($.triad_van4)) {
            $.triad_van4.delete();
        }
        if (!Car.IsDead($.triad_van5)) {
            $.triad_van5.delete();
        }
        if (!Car.IsDead($.triad_van6)) {
            $.triad_van6.delete();
        }

        //skip_to_toni3_cut: //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //LOAD_SCENE 1457.776 -185.348 54.925	//TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //SET_PLAYER_COORDINATES player 1454.6 -189.5 55.0 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        $.breakout_timer_start = Clock.GetGameTimer();
        $.breakout_diff = 0;

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0);
            if (Car.IsDead($.carry_car)) {
                Text.PrintNow('TM3_A3', 5000, 1); //Joey, luigi and Toni are dead
                FAIL("mission_toni3_failed");
            }
            $.breakout_timer = Clock.GetGameTimer();
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
        }

        $.player.makeSafeForCutscene();

        // ****************************************START OF CUTSCENE2********************************

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1500, FADE_OUT);

        World.ClearArea(1427.0, -187.8, 50.0, 12.0, true);
        World.ClearArea(1444.99, -186.9, 56.0, 30.0, true);

        World.SwitchRubbish(OFF);
        Streaming.Switch(OFF);

        Streaming.LoadSpecialCharacter(4, 'frankie');
        Streaming.RequestModel(PED_GANG_MAFIA_B);

        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'FRANKH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'JOEYH');
        Streaming.LoadSpecialModel(188 /* cut_obj4 */, 'LUIGIH');
        Streaming.LoadSpecialModel(189 /* cut_obj5 */, 'TONYH');
        Streaming.RequestModel(542 /* salvsdetail */);
        Streaming.RequestModel(540 /* swank_inside */);
        Streaming.RequestModel(541 /* franksclb02 */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(4) ||
            !Streaming.HasModelLoaded(PED_GANG_MAFIA_B) ||
            !Streaming.HasModelLoaded(542 /* salvsdetail */) ||
            !Streaming.HasModelLoaded(540 /* swank_inside */) ||
            !Streaming.HasModelLoaded(541 /* franksclb02 */)
        ) {
            await asyncWait(0);
        }

        while (
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
            !Streaming.HasModelLoaded(188 /* cut_obj4 */) ||
            !Streaming.HasModelLoaded(189 /* cut_obj5 */)
        ) {
            await asyncWait(0);
        }

        Cutscene.Load('S0_MAS');
        Cutscene.SetOffset(1457.776, -185.348, 54.925);

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_tony = CutsceneObject.Create(PED_SPECIAL1);
        $.cs_tony.setAnim('tony');

        $.cs_joey = CutsceneObject.Create(PED_SPECIAL2);
        $.cs_joey.setAnim('joey2');

        $.cs_luigi = CutsceneObject.Create(PED_SPECIAL3);
        $.cs_luigi.setAnim('luigi');

        $.cs_frankie = CutsceneObject.Create(PED_SPECIAL4);
        $.cs_frankie.setAnim('frankie');

        $.cs_mafia = CutsceneObject.Create(PED_GANG_MAFIA_B);
        $.cs_mafia.setAnim('gang02');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* cut_obj1 */);
        $.cs_playerhead.setAnim('player');

        $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, 186 /* cut_obj2 */);
        $.cs_frankiehead.setAnim('frank');

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, 187 /* cut_obj3 */);
        $.cs_joeyhead.setAnim('joey');

        $.cs_luigihead = CutsceneHead.Create($.cs_luigi, 188 /* cut_obj4 */);
        $.cs_luigihead.setAnim('luigi');

        $.cs_tonyhead = CutsceneHead.Create($.cs_tony, 189 /* cut_obj5 */);
        $.cs_tonyhead.setAnim('tony');

        //SET_PLAYER_COORDINATES player 1455.2 -186.8 55.0

        $.player.setHeading(341.0);

        Camera.DoFade(1500, FADE_IN);

        Streaming.Switch(ON);
        Cutscene.Start();

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 416) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_H', 10000, 1);

        while ($.cs_time < 3252) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_I', 10000, 1);

        while ($.cs_time < 4866) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_J', 10000, 1);

        while ($.cs_time < 5839) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_K', 10000, 1);

        while ($.cs_time < 10201) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_L', 10000, 1);

        while ($.cs_time < 13769) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_M', 10000, 1);

        while ($.cs_time < 17654) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_N', 10000, 1);

        while ($.cs_time < 18718) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_N2', 10000, 1);

        while ($.cs_time < 19529) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_O', 10000, 1);

        while ($.cs_time < 21673) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_P', 10000, 1);

        while ($.cs_time < 25525) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_Q', 10000, 1);

        while ($.cs_time < 26615) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_R', 10000, 1);

        while ($.cs_time < 29462) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_S', 10000, 1);

        while ($.cs_time < 32814) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_T', 10000, 1);

        while ($.cs_time < 35855) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_U', 10000, 1);

        while ($.cs_time < 37787) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_V', 10000, 1);

        while ($.cs_time < 44707) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM3_W', 10000, 1);

        while ($.cs_time < 47837) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 48666) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, FADE_OUT);
        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        Camera.DoFade(0, FADE_OUT);

        Cutscene.Clear();

        Camera.DoFade(0, FADE_OUT);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.UnloadSpecialCharacter(2);
        Streaming.UnloadSpecialCharacter(3);
        Streaming.UnloadSpecialCharacter(4);
        Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* cut_obj2 */);
        Streaming.MarkModelAsNoLongerNeeded(187 /* cut_obj3 */);
        Streaming.MarkModelAsNoLongerNeeded(188 /* cut_obj4 */);
        Streaming.MarkModelAsNoLongerNeeded(189 /* cut_obj5 */);
        Streaming.MarkModelAsNoLongerNeeded(542 /* salvsdetail */);
        Streaming.MarkModelAsNoLongerNeeded(540 /* swank_inside */);
        Streaming.MarkModelAsNoLongerNeeded(541 /* franksclb02 */);

        await asyncWait(500);

        Camera.DoFade(1500, FADE_IN);
        break get_to_frankies; // xxx: fallthrough
    }

    return; // SCM GOTO → mission_toni3_passed
}

// Mission toni3 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission toni3 passed
async function onPassed() {
    $.flag_toni_mission3_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 15000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(15000);
    Stat.RegisterMissionPassed('TM3');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT frankie_mission1_loop
    $.luigi_contact_blip.remove();
    $.joey_contact_blip.remove();
    $.toni_contact_blip.remove();
    $.frankie_contact_blip.remove();
    $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, RADAR_SPRITE_SAL);
    //WAIT 3000
    //WARP_PLAYER_FROM_CAR_TO_COORD player 1455.7 -187.3 -100.0

    $.carry_car.delete();
    Camera.RestoreJumpcut();
    Camera.SetBehindPlayer();
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_toni_mission = 0;
    $.blip1_t3.remove();
    $.blip2_t3.remove();
    $.blip3_t3.remove();
    $.blip4_t3.remove();
    $.blip5_t3.remove();
    $.joey.removeElegantly();
    $.luigi.removeElegantly();
    $.toni.removeElegantly();
    Streaming.MarkModelAsNoLongerNeeded(CAR_STRETCH);
    Streaming.MarkModelAsNoLongerNeeded(CAR_BELLYUP);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_TRIAD_A);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_TRIAD_B);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_MAFIA_B);
    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Streaming.UnloadSpecialCharacter(3);
    Streaming.UnloadSpecialCharacter(4);
    $.frankie_garage.setTargetCarForMission(-1 as any);
    Text.ClearThisPrint('IN_VEH');
    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
