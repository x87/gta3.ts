// Generated from Main/Industrial/joey4.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// **************************************Joey Mission 4***************************************
// ***************************************pick up Toni****************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey4

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey4_failed
    // ENDIF

    // GOSUB mission_cleanup_joey4

    // MISSION_END

    // Variables for mission

    // VAR_INT blip1_jm4 blip2_jm4 blip3_jm4 flag_car_blip_displayed_jm4 triads_ojective_passed

    // VAR_INT ojective_triad1_done_before ojective_triad2_done_before

    // VAR_INT Toni_abuse1_done_before tonis_car_created_before played_tune_before

    // VAR_INT flag_displayed_wanted_message_jm4 flag_displayed_horn_message_jm4

    // VAR_INT tonis_ride is_char1_dead_jm4 is_char2_dead_jm4 is_char3_dead_jm4 is_char4_dead_jm4

    // VAR_INT triad1_jm4 triad2_jm4 triad3_jm4 triad4_jm4 tonis_audio_all_finished

    // VAR_FLOAT door1_position_jm4 door2_position_jm4

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey4
    await asyncWait(0);

    if ($.tonis_car_created_before == 1) {
        await delete_tonis_car(); // SCM GOSUB delete_tonis_car
    }

    $.flag_displayed_wanted_message_jm4 = 0;
    $.flag_displayed_horn_message_jm4 = 0;
    $.Toni_abuse1_done_before = 0;
    $.ojective_triad1_done_before = 0;
    $.ojective_triad2_done_before = 0;
    $.triads_ojective_passed = 0;
    $.tonis_audio_all_finished = 0;
    $.played_tune_before = 0;

    World.SetCarDensityMultiplier(0.0); //TURN ALL THE CARS OFF

    {
        Streaming.LoadSpecialCharacter(1, 'joey');
        Streaming.LoadSpecialCharacter(2, 'tony');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'JOEDOOR');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'JOEYH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'PLAYERH');
        Streaming.LoadSpecialModel(188 /* cut_obj4 */, 'TONYH');
        Streaming.RequestModel(CAR_MAFIA);
        Streaming.RequestModel(CAR_IDAHO);
        Streaming.RequestModel(CAR_STALLION);
        Streaming.RequestModel(939 /* jogarageext */);
        Streaming.RequestModel(1074 /* jogarageint */);

        Streaming.LoadAllModelsNow();

        while (!Streaming.HasModelLoaded(CAR_MAFIA) || !Streaming.HasModelLoaded(CAR_IDAHO) || !Streaming.HasModelLoaded(CAR_STALLION)) {
            await asyncWait(0);
        }

        $.tonis_ride = Car.Create(CAR_MAFIA, 1189.72, -864.28, 14.1);
        $.tonis_car_created_before = 1;
        $.tonis_ride.setHeading(-142.0);
        Audio.SetRadioChannel(1, -1);

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2)) {
            await asyncWait(0);
        }

        while (
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
            !Streaming.HasModelLoaded(188 /* cut_obj4 */)
        ) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */)) {
            await asyncWait(0);
        }

        //LOAD_SCENE 1190.07 -869.86 13.97

        Cutscene.Load('J4_ETH');
        Cutscene.SetOffset(1190.079, -869.861, 13.977);

        $.cut_car2_lm3 = Car.Create(CAR_IDAHO, 1182.5, -857.0, 14.1);
        $.cut_car2_lm3.setHeading(291.2);

        $.cut_car3_lm3 = Car.Create(CAR_STALLION, 1192.9, -860.8, 14.0);
        $.cut_car3_lm3.setHeading(150.0);

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_joey = CutsceneObject.Create(PED_SPECIAL1);
        $.cs_joey.setAnim('joey');

        $.cs_tony = CutsceneObject.Create(PED_SPECIAL2);
        $.cs_tony.setAnim('tony');

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, CUT_OBJ2);
        $.cs_joeyhead.setAnim('joey');

        $.cs_tonyhead = CutsceneHead.Create($.cs_tony, CUT_OBJ4);
        $.cs_tonyhead.setAnim('tony');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ3);
        $.cs_playerhead.setAnim('player');

        $.cs_joedoor = CutsceneObject.Create(185 /* cut_obj1 */);
        $.cs_joedoor.setAnim('JOEDOOR');

        World.ClearArea(1195.0, -870.3, 15.0, 10.0, true);

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, false);
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, false);

        //MOVE GARAGE UP

        const _res265 = $.joeys_garage_door2.getCoordinates();
        $.joeydoor2_X = _res265.x;
        $.joeydoor2_Y = _res265.y;
        $.joeydoor2_Z = _res265.z;
        const _res266 = $.joeys_garage_door3.getCoordinates();
        $.joeydoor3_X = _res266.x;
        $.joeydoor3_Y = _res266.y;
        $.joeydoor3_Z = _res266.z;

        $.joeydoor2_Z = $.joeydoor2_Z + 3.0;
        $.joeydoor3_Z = $.joeydoor3_Z + 3.0;

        while (
            !$.joeys_garage_door2.slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 100.0, false) ||
            !$.joeys_garage_door3.slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 100.0, false)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        Camera.DoFade(1800, FADE_IN);

        //SWITCH_WORLD_PROCESSING OFF

        World.SwitchRubbish(OFF);
        Streaming.Switch(ON);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 1) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_A', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 4000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_B', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 6180) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_C', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 10230) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_D', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 13040) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_E', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 15110) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_F', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 18080) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM4_G', 10000, 1); //"Go to X, wait for Toni"

        while ($.cs_time < 23511) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 23833) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        //DO_FADE 1000 FADE_OUT

        //WHILE GET_FADING_STATUS
        //	WAIT 0
        //ENDWHILE

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        //SWITCH_WORLD_PROCESSING ON

        World.SwitchRubbish(ON);
        Text.ClearPrints();
        Cutscene.Clear();

        if (!Car.IsDead($.tonis_ride)) {
            $.toni = Char.CreateAsPassenger($.tonis_ride, PEDTYPE_SPECIAL, PED_SPECIAL2, 0);
            $.toni.clearThreatSearch();
            $.toni.setCantBeDraggedOut(true);
            $.toni.addArmor(100);
            $.player.warpIntoCar($.tonis_ride);
        }

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, true);
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, true);

        World.ClearArea(1198.5, -871.4, 15.0, 10.0, true);
        //SET_FIXED_CAMERA_POSITION 1206.0 -864.6 15.4 0.0 0.0 0.0
        //POINT_CAMERA_AT_PLAYER player FIXED JUMP_CUT

        Camera.SetFixedPosition(1200.831, -869.373, 15.001, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1199.887, -869.701, 15.025, JUMP_CUT);

        await asyncWait(0);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        $.player.setControl(OFF);

        //WAIT 500

        //DO_FADE 1000 FADE_IN

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ3);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ4);
        Streaming.MarkModelAsNoLongerNeeded(CAR_IDAHO);
        Streaming.MarkModelAsNoLongerNeeded(CAR_STALLION);
        Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
        Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

        $.cut_car2_lm3.delete();
        $.cut_car3_lm3.delete();

        Audio.LoadMissionAudio(SfxMission.J4t_1);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_10', 5000, 1); //"Go to X, wait for Toni"

        //CAR DRIVING OUT OF GARAGE CUT SCENE

        if (!Car.IsDead($.tonis_ride)) {
            $.tonis_ride.gotoCoordinatesAccurate(1198.5, -871.4, -100.0);
            $.tonis_ride.setCruiseSpeed(2.0);
            $.tonis_ride.setDrivingStyle(3);
        }

        if (!Char.IsDead($.toni)) {
            $.toni.lookAtPlayerAlways($.player);
            $.player.lookAtCharAlways($.toni);
            //SET_ANIM_GROUP_FOR_CHAR toni ANIM_OLDFAT_PED
        }

        while (!$.tonis_ride.locate2D(1198.5, -871.4, 2.0, 2.0, false)) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_audio_all_finished == 0) {
                while (!Audio.HasMissionAudioFinished()) {
                    await asyncWait(0);
                    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                        Text.PrintNow('JM4_8', 5000, 1);
                        FAIL("mission_joey4_failed");
                    }
                }
                Audio.LoadMissionAudio(SfxMission.J4t_2);
                while (!Audio.HasMissionAudioLoaded()) {
                    await asyncWait(0);
                    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                        Text.PrintNow('JM4_8', 5000, 1);
                        FAIL("mission_joey4_failed");
                    }
                }
                Audio.PlayMissionAudio();
                Text.PrintNow('JM4_11', 5000, 1); //"Go to X, wait for Toni"
                while (!Audio.HasMissionAudioFinished()) {
                    await asyncWait(0);
                    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                        Text.PrintNow('JM4_8', 5000, 1);
                        FAIL("mission_joey4_failed");
                    }
                }
                Audio.LoadMissionAudio(SfxMission.J4t_3);
                $.tonis_audio_all_finished = 1;
            }
        }

        Text.ClearPrints();

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_12', 5000, 1); //"Go to X, wait for Toni"

        const _res267 = $.joeys_garage_door2.getCoordinates();
        $.joeydoor2_X = _res267.x;
        $.joeydoor2_Y = _res267.y;
        $.joeydoor2_Z = _res267.z;
        const _res268 = $.joeys_garage_door3.getCoordinates();
        $.joeydoor3_X = _res268.x;
        $.joeydoor3_Y = _res268.y;
        $.joeydoor3_Z = _res268.z;

        $.joeydoor2_Z = $.joeydoor2_Z - 3.0;
        $.joeydoor3_Z = $.joeydoor3_Z - 3.0;

        while (
            !$.joeys_garage_door2.slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, false) ||
            !$.joeys_garage_door3.slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, false)
        ) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        Audio.LoadMissionAudio(SfxMission.J4t_4);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_13', 5000, 1); //"Go to X, wait for Toni"

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        if (!Char.IsDead($.toni)) {
            $.toni.stopLooking();
            $.player.stopLooking();
        }

        Text.ClearPrints();

        Hud.SwitchWidescreen(OFF);
        $.player.setControl(ON);
        $.tonis_ride.setStatus(STATUS_PLAYER);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Camera.Restore();
        World.SetCarDensityMultiplier(1.0); // TURN ALL THE CARS BACK ON
        $.gen_car12.switch(0);

        Streaming.RequestModel(PED_GANG_TRIAD_A);
        Streaming.RequestModel(PED_GANG_TRIAD_B);
        Audio.LoadMissionAudio(SfxMission.J4_a);

        while (!Streaming.HasModelLoaded(PED_GANG_TRIAD_A) || !Streaming.HasModelLoaded(PED_GANG_TRIAD_B) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Path.SwitchPedRoadsOff(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
        Path.SwitchRoadsOff(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
        World.ClearArea(843.4, -663.8, 15.0, 10.0, true);

        $.blip1_jm4 = Blip.AddForCoord(843.0, -660.0, -100.0);
        $.blip1_jm4.changeDisplay(BLIP_ONLY);

        $.triad1_jm4 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 850.0, -663.0, 14.7);
        $.triad1_jm4.clearThreatSearch();
        $.triad1_jm4.setProofs(true, true, true, true, true);

        $.triad2_jm4 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 850.0, -664.7, 14.7);
        $.triad2_jm4.clearThreatSearch();
        $.triad2_jm4.setProofs(true, true, true, true, true);

        $.triad1_jm4.turnToFaceChar($.triad2_jm4);
        $.triad2_jm4.turnToFaceChar($.triad1_jm4);

        $.blip1_jm4.remove();
        $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
        $.blob_flag = 1;

        if (Car.IsDead($.tonis_ride)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        while (!$.player.isStoppedInAreaInCar3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, !!$.blob_flag) || $.player.isWantedLevelGreater(0) || !$.player.isInCar($.tonis_ride)) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (!$.player.isInCar($.tonis_ride)) {
                if ($.flag_car_blip_displayed_jm4 == 0 /* FALSE */) {
                    $.blip2_jm4 = Blip.AddForCar($.tonis_ride);
                    $.blob_flag = 0;
                    $.blip1_jm4.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
                }
            }
            if ($.player.isInCar($.tonis_ride)) {
                if ($.flag_car_blip_displayed_jm4 == 1 /* TRUE */) {
                    $.blip1_jm4 = Blip.AddForCoord(843.0, -660.0, -100.0);
                    $.blob_flag = 1;
                    $.blip2_jm4.remove();
                    $.flag_car_blip_displayed_jm4 = 0 /* FALSE */;
                }
            }
            if (!$.tonis_ride.isHealthGreater(900) && $.Toni_abuse1_done_before == 0) {
                Text.PrintNow('JM4_6', 5000, 1); //"Watch the fuckin CAR!"
                Audio.PlayMissionAudio();
                $.Toni_abuse1_done_before = 1;
            }
            if ($.player.isStoppedInAreaInCar3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, false)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm4 == 0) {
                        Text.PrintNow('WANTED1', 3000, 1);
                        $.flag_displayed_wanted_message_jm4 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, false)) {
                    $.flag_displayed_wanted_message_jm4 = 0;
                }
            }
        }

        $.blip1_jm4.remove();
        Game.SetPoliceIgnorePlayer($.player, ON);
        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Camera.SetFixedPosition(825.604, -680.602, 16.567, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(826.336, -679.921, 16.539, JUMP_CUT);

        Audio.LoadMissionAudio(SfxMission.J4_b);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        //TONI LANDRETTE CUT_SCENE

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4)) {
            Game.SetCharsChatting($.triad1_jm4, $.triad2_jm4, 999999);
        }

        if (!Char.IsDead($.toni)) {
            $.toni.setProofs(true, true, true, true, true);
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_2', 5000, 1); //wait here

        World.ClearArea(843.4, -663.8, 15.0, 10.0, true);

        await asyncWait(4000);

        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        $.toni.giveWeapon(WEAPONTYPE_BASEBALLBAT, 0);
        $.toni.setObjLeaveCar($.tonis_ride);

        while ($.toni.isInCar($.tonis_ride)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        //SET_FIXED_CAMERA_POSITION 840.0 -672.4 17.0 0.0 0.0 0.0
        //SET_FIXED_CAMERA_POSITION 836.632 -670.922 17.843 0.0 0.0 0.0
        //POINT_CAMERA_AT_CHAR toni FIXED INTERPOLATION

        Camera.SetFixedPosition(841.312, -669.063, 16.536, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(842.117, -668.501, 16.343, JUMP_CUT);

        //TONI WALKS TO DOORS

        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        $.toni.turnToFaceCoord(843.9, -663.7, 15.1);

        TIMERB = 0;

        $.toni.setObjGotoCoordOnFoot(843.9, -663.7);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(843.9, -663.7, 13.9);
                }
            }
        }

        //OPEN DOORS

        while (!$.laundrete_door1.rotate(90.0, 10.0, false) || !$.laundrete_door2.rotate(90.0, 10.0, false)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        //TONI WALKS IN

        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        TIMERB = 0;

        $.toni.setObjGotoCoordOnFoot(848.1, -663.4);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(848.1, -663.4, 13.9);
                }
            }
        }

        $.toni.setObjWaitOnFoot();

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4)) {
            Game.SetCharsChatting($.triad1_jm4, $.triad2_jm4, 0);
        }

        await asyncWait(0);

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4) && !Char.IsDead($.toni)) {
            $.triad1_jm4.turnToFaceChar($.toni);
            $.triad2_jm4.turnToFaceChar($.toni);
            $.triad1_jm4.lookAtCharAlways($.toni);
            $.triad2_jm4.lookAtCharAlways($.toni);
        }

        await asyncWait(5000);

        Sound.AddOneOffSound(845.0, -663.0, 14.0, 0 /* sound_test_1 */); //Need Sound event

        $.door1_position_jm4 = $.laundrete_door1.getHeading();
        $.door2_position_jm4 = $.laundrete_door2.getHeading();

        if (Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        $.toni.turnToFaceCoord(843.9, -663.7, 15.1);

        if (!Char.IsDead($.triad1_jm4) || !Char.IsDead($.triad2_jm4)) {
            $.triad1_jm4.giveWeapon(WEAPONTYPE_PISTOL, 100);
            $.triad2_jm4.giveWeapon(WEAPONTYPE_PISTOL, 100);
        }

        $.toni.setRunning(true);

        if (!Char.IsDead($.triad1_jm4) || !Char.IsDead($.triad2_jm4)) {
            $.triad1_jm4.setStayInSamePlace(true);
            $.triad2_jm4.setStayInSamePlace(true);
            $.triad1_jm4.setObjKillCharOnFoot($.toni);
            $.triad2_jm4.setObjKillCharOnFoot($.toni);
        }

        //TONI RUNS OUT

        World.ClearArea(843.4, -663.8, 15.0, 10.0, true);

        TIMERB = 0;

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4)) {
            $.triad1_jm4.stopLooking();
            $.triad2_jm4.stopLooking();
        }

        $.toni.setObjRunToCoord(843.9, -663.7);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(843.9, -663.7, 13.9);
                }
            }
        }

        $.toni.setObjEnterCarAsPassenger($.tonis_ride);
        Camera.SetFixedPosition(836.029, -677.868, 15.84, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(836.713, -677.156, 15.68, JUMP_CUT);

        await asyncWait(1500);

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4)) {
            $.triad1_jm4.setStayInSamePlace(false);
            $.triad2_jm4.setStayInSamePlace(false);
            $.triad1_jm4.setObjRunToCoord(842.0, -663.8);
            $.triad2_jm4.setObjRunToCoord(843.5, -663.8);
        }

        //TRIADS RUN OUT

        while (!($.triads_ojective_passed == 2)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if (Char.IsDead($.triad1_jm4) && $.ojective_triad1_done_before == 0) {
                $.triads_ojective_passed++;
                $.ojective_triad1_done_before = 1;
            }
            if (Char.IsDead($.triad2_jm4) && $.ojective_triad2_done_before == 0) {
                $.triads_ojective_passed++;
                $.ojective_triad2_done_before = 1;
            }
            if ($.triad1_jm4.isObjectivePassed() && $.ojective_triad1_done_before == 0) {
                $.triad1_jm4.setObjDestroyCar($.tonis_ride);
                $.triads_ojective_passed++;
                $.ojective_triad1_done_before = 1;
            }
            if ($.triad2_jm4.isObjectivePassed() && $.ojective_triad2_done_before == 0) {
                $.triad2_jm4.setObjDestroyCar($.tonis_ride);
                $.triads_ojective_passed++;
                $.ojective_triad2_done_before = 1;
            }
        }

        while (!$.toni.isInCar($.tonis_ride)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        $.triad3_jm4 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 843.1, -689.0, 13.9);
        $.triad3_jm4.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad3_jm4.setObjKillPlayerOnFoot($.player);
        $.triad3_jm4.setThreatSearch(THREAT_PLAYER1);

        $.triad4_jm4 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_B, 844.3, -634.8, 13.9);
        $.triad4_jm4.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.triad4_jm4.setObjKillPlayerOnFoot($.player);
        $.triad4_jm4.setThreatSearch(THREAT_PLAYER1);

        if (!Char.IsDead($.toni)) {
            $.toni.setProofs(false, false, false, false, false);
        }

        if (!Char.IsDead($.triad1_jm4) && !Char.IsDead($.triad2_jm4)) {
            $.triad1_jm4.setProofs(false, false, false, false, false);
            $.triad2_jm4.setProofs(false, false, false, false, false);
        }

        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.Restore();

        Audio.LoadMissionAudio(SfxMission.J4_c);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_3', 4000, 1); //"GO GO GO!"
        Game.SetPoliceIgnorePlayer($.player, OFF);

        $.blip3_jm4 = Blip.AddForCoord(1216.8, -327.6, -100.0);
        $.blip3_jm4.changeDisplay(BLIP_ONLY);

        // CLOSE DOORS

        while (!$.laundrete_door1.rotate(0.0, 10.0, false) || !$.laundrete_door2.rotate(180.0, 10.0, false)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        $.is_char1_dead_jm4 = 0;
        $.is_char2_dead_jm4 = 0;
        $.is_char3_dead_jm4 = 0;
        $.is_char4_dead_jm4 = 0;
        $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;

        $.blip3_jm4.remove();

        // waiting for the player to get to Toni's

        if (!Char.IsDead($.triad1_jm4)) {
            $.triad1_jm4.setThreatSearch(THREAT_PLAYER1);
        }

        if (!Char.IsDead($.triad2_jm4)) {
            $.triad2_jm4.setThreatSearch(THREAT_PLAYER1);
        }

        World.ClearArea(1216.7, -328.1, 26.0, 6.0, true);

        $.flag_displayed_wanted_message_jm4 = 0;

        $.blob_flag = 1;

        while (!$.player.isStoppedInAreaInCar3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, !!$.blob_flag) || $.player.isWantedLevelGreater(0) || !$.player.isInCar($.tonis_ride)) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Car.IsDead($.tonis_ride)) {
                FAIL("mission_joey4_failed");
            }
            if (!$.player.isInCar($.tonis_ride)) {
                if ($.flag_car_blip_displayed_jm4 == 0 /* FALSE */) {
                    $.blip2_jm4 = Blip.AddForCar($.tonis_ride);
                    $.blip3_jm4.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.blob_flag = 0;
                    $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
                }
            }
            if ($.player.isInCar($.tonis_ride)) {
                if ($.flag_car_blip_displayed_jm4 == 1 /* TRUE */) {
                    $.blip3_jm4 = Blip.AddForCoord(1216.8, -327.6, -100.0);
                    $.blip2_jm4.remove();
                    $.blob_flag = 1;
                    $.flag_car_blip_displayed_jm4 = 0 /* FALSE */;
                }
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (Char.IsDead($.triad1_jm4) && $.is_char1_dead_jm4 == 0) {
                $.is_char1_dead_jm4 = 1;
            }
            if (Char.IsDead($.triad2_jm4) && $.is_char2_dead_jm4 == 0) {
                $.is_char2_dead_jm4 = 1;
            }
            if (Char.IsDead($.triad3_jm4) && $.is_char3_dead_jm4 == 0) {
                $.is_char3_dead_jm4 = 1;
            }
            if (Char.IsDead($.triad4_jm4) && $.is_char4_dead_jm4 == 0) {
                $.is_char4_dead_jm4 = 1;
            }
            if ($.is_char1_dead_jm4 == 1 && $.is_char2_dead_jm4 == 1 && $.is_char3_dead_jm4 == 1 && $.is_char4_dead_jm4 == 1 && $.played_tune_before == 0) {
                $.player.addScore(2000);
                const _res269 = $.player.getCoordinates();
                $.player_X = _res269.x;
                $.player_Y = _res269.y;
                $.player_Z = _res269.z;
                Sound.AddOneOffSound($.player_X, $.player_Y, $.player_Z, SOUND_PART_MISSION_COMPLETE);
                $.played_tune_before = 1;
            }
            if ($.player.isStoppedInAreaInCar3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, false)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm4 == 0) {
                        Text.PrintNow('WANTED1', 3000, 1);
                        $.flag_displayed_wanted_message_jm4 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, false)) {
                    $.flag_displayed_wanted_message_jm4 = 0;
                }
            }
        }

        $.blip3_jm4.remove();

        World.ClearArea(1216.5, -326.8, 26.0, 6.0, true);
        World.ClearArea(1219.6, -319.2, 27.7, 2.0, true);
        $.player.setControl(OFF);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Hud.SwitchWidescreen(ON);

        Camera.SetFixedPosition(1224.119, -333.413, 26.529, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1223.382, -332.738, 26.568, JUMP_CUT);

        if (!Char.IsDead($.toni)) {
            $.toni.setCurrentWeapon(WEAPONTYPE_UNARMED);
            $.toni.lookAtPlayerAlways($.player);
            $.player.lookAtCharAlways($.toni);
        }

        $.blip2_jm4.remove();

        //SAMPLE 1***************************************************

        Audio.LoadMissionAudio(SfxMission.J4_d);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_4', 4000, 1); //"come back for job"

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        //SAMPLE 2***************************************************

        Audio.LoadMissionAudio(SfxMission.J4_e);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();
        Text.PrintNow('JM4_5', 5000, 1); //"come back for job"

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        //SAMPLE 3***************************************************

        Audio.LoadMissionAudio(SfxMission.J4_f);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        if (!Char.IsDead($.toni)) {
            $.toni.setRunning(false);
            $.toni.setObjLeaveCar($.tonis_ride);
            $.toni.stopLooking();
            $.player.stopLooking();
        }

        while ($.toni.isInCar($.tonis_ride)) {
            await asyncWait(0);
            if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if ($.tonis_ride.isUpsidedown() && $.tonis_ride.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                FAIL("mission_joey4_failed");
            }
        }

        if (Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        TIMERB = 0;
        World.ClearArea(1219.4, -324.4, 26.1, 2.0, true);
        $.toni.setObjGotoCoordOnFoot(1219.4, -324.4);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(1219.4, -324.4, -100.0);
                }
            }
        }

        if (Char.IsDead($.toni)) {
            Text.PrintNow('JM4_8', 5000, 1);
            FAIL("mission_joey4_failed");
        }

        TIMERB = 0;
        World.ClearArea(1219.5, -315.4, 29.9, 2.0, true);
        $.toni.setObjGotoCoordOnFoot(1219.5, -318.6);

        Audio.PlayMissionPassedTune(1);
        Text.PrintWithNumberBig('M_PASS', 3000, 7000, 1); //"Mission Passed!"
        $.player.clearWantedLevel();
        $.player.addScore(3000);

        while (!$.toni.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.toni)) {
                Text.PrintNow('JM4_8', 5000, 1);
                FAIL("mission_joey4_failed");
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.toni)) {
                    $.toni.setCoordinates(1219.5, -318.6, 28.4);
                }
            }
        }

        Hud.SwitchWidescreen(OFF);
        $.player.setControl(ON);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Camera.RestoreJumpcut();
        $.toni.delete();
    }

    return; // SCM GOTO → mission_joey4_passed
}

// Mission Joey4 failed
async function onFailed() {
    //SWITCH_WIDESCREEN OFF
    //SET_PLAYER_CONTROL Player On
    //RESTORE_CAMERA_JUMPCUT

    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission Joey4 passed
async function onPassed() {
    $.flag_joey_mission4_passed = 1;
    //PLAY_MISSION_PASSED_TUNE 1
    //PRINT_WITH_NUMBER_BIG ( M_PASS ) 3000 5000 1 //"Mission Passed!"
    //CLEAR_WANTED_LEVEL player
    //ADD_SCORE player 3000

    Stat.RegisterMissionPassed('JM4');
    Stat.PlayerMadeProgress(1);
    $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, 26.4, RADAR_SPRITE_TONY);
    $.SHOP_UZI.remove();
    $.SHOP_UZI2 = Pickup.Create(WEAPON_UZI, PICKUP_IN_SHOP, 1070.5, -400.8, 15.2);
    // START_NEW_SCRIPT toni_mission1_loop
    // START_NEW_SCRIPT joey_mission5_loop
    // START_NEW_SCRIPT uzi_message
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    $.blip1_jm4.remove();
    $.blip2_jm4.remove();
    $.blip3_jm4.remove();
    Streaming.MarkModelAsNoLongerNeeded(CAR_MAFIA);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_TRIAD_A);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_TRIAD_B);
    Path.SwitchPedRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
    Path.SwitchRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
    Streaming.UnloadSpecialCharacter(2);
    $.gen_car12.switch(101);
    $.toni.removeElegantly();
    Mission.Finish();
}

async function delete_tonis_car() {
    $.tonis_ride.delete();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
