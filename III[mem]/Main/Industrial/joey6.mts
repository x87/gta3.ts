// Generated from Main/Industrial/joey6.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';


// *******************************************************************************************
// *******************************************************************************************
// **************************************Joey Mission 6***************************************
// ****************************************Bank Job*******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey6

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey6_failed
    // ENDIF

    // GOSUB mission_cleanup_joey6

    // MISSION_END

    // Variables for mission

    // VAR_INT thug1 thug2 thug3 thugs_score joey_alarm_loop flag_not_enough_seats

    // VAR_INT blip1_jm6 blip2_jm6 blip3_jm6 thug1_blip thug2_blip thug3_blip

    // VAR_INT any_car_jm6 maxpassengers sound_already_created_before

    // VAR_INT flag_displayed_horn_message_jm6 flag_displayed_wanted_message_jm6

    // VAR_INT thug1_is_dead thug2_is_dead thug3_is_dead blip_for_thug_added1 blip_for_thug_added2 blip_for_thug_added3

    // VAR_INT objective_count objective_count_done_before1 objective_count_done_before2 objective_count_done_before3

    // VAR_FLOAT bankdoor_X bankdoor_Y bankdoor_Z bankdoor2_X bankdoor2_Y bankdoor2_Z

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey6
    await asyncWait(0);

    Streaming.LoadSpecialCharacter(1, 'joey');
    Streaming.LoadSpecialModel(CUT_OBJ1, 'JOEYH');
    Streaming.LoadSpecialModel(CUT_OBJ2, 'PLAYERH');
    Streaming.LoadSpecialModel(CUT_OBJ3, 'TROLL');
    Streaming.RequestModel(CAR_STALLION);
    Streaming.RequestModel(939 /* jogarageext */);
    Streaming.RequestModel(1074 /* jogarageint */);

    Streaming.LoadAllModelsNow();

    //LOAD_SCENE 1190.07 -869.86 13.97

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasModelLoaded(CUT_OBJ1) ||
        !Streaming.HasModelLoaded(CUT_OBJ2) ||
        !Streaming.HasModelLoaded(CUT_OBJ3)
    ) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */) || !Streaming.HasModelLoaded(CAR_STALLION)) {
        await asyncWait(0);
    }

    Cutscene.Load('J6_TBJ');
    Cutscene.SetOffset(1190.079, -869.861, 13.977);

    $.cut_car3_lm3 = Car.Create(CAR_STALLION, 1192.9, -860.8, 14.0);
    $.cut_car3_lm3.setHeading(150.0);

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

    while ($.cs_time < 4434) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM6_A', 10000, 2); // Mission brief

    while ($.cs_time < 6704) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM6_B', 10000, 2); // Mission brief

    while ($.cs_time < 12000) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM6_C', 10000, 2); // Mission brief

    while ($.cs_time < 14274) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM6_D', 10000, 2); // Mission brief

    while ($.cs_time < 17302) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM6_E', 10000, 2); // Mission brief

    while ($.cs_time < 21000) {
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
    Streaming.MarkModelAsNoLongerNeeded(CAR_STALLION);
    Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
    Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

    $.cut_car3_lm3.delete();

    $.thugs_score = 0;
    $.sound_already_created_before = 0;
    $.flag_not_enough_seats = 0;

    Streaming.LoadSpecialCharacter(2, 'robber');

    while (!Streaming.HasSpecialCharacterLoaded(2)) {
        await asyncWait(0);
    }

    // START OF MISSION

    $.blip1_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
    $.blip1_jm6.changeDisplay(BLIP_ONLY);

    $.flag_displayed_horn_message_jm6 = 0;
    $.flag_displayed_wanted_message_jm6 = 0;

    $.thug1_is_dead = 0;
    $.thug2_is_dead = 0;
    $.thug3_is_dead = 0;
    $.blip_for_thug_added1 = 0;
    $.blip_for_thug_added2 = 0;
    $.blip_for_thug_added3 = 0;

    //PICK UP THE THUGS

    pick_up_thugs: while (true) {
        await asyncWait(0);

        while (!$.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, true) || !$.player.isPressingHorn() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_not_enough_seats == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                    }
                } else {
                    if ($.flag_not_enough_seats == 0) {
                        Text.PrintNow('HORN', 5000, 1);
                    }
                }
            } else {
                $.flag_not_enough_seats = 0;
            }
            if (!$.player.isInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false)) {
                Text.ClearThisPrint('WANTED1');
                Text.ClearThisPrint('HORN');
            }
            if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, false)) {
                Text.PrintNow('JM6_5', 5000, 1); //"We need a getaway vehicle"
            } else {
                Text.ClearThisPrint('JM6_5');
            }
            const { hours, minutes } = Clock.GetTimeOfDay();
            $.hours = hours;
            $.minutes = minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_joey6_failed");
            }
        }

        $.any_car_jm6 = $.player.storeCarIsIn();

        $.maxpassengers = $.any_car_jm6.getMaximumNumberOfPassengers();

        Text.ClearThisPrint('WANTED1');
        Text.ClearThisPrint('HORN');

        if (!($.maxpassengers > 2)) {
            Text.PrintNow('NODOORS', 5000, 1); //Car not big enough
            $.flag_not_enough_seats = 1;
            continue pick_up_thugs; // SCM GOTO → pick_up_thugs
        }

        if ($.player.isInModel(CAR_COACH) || $.player.isInModel(CAR_BUS)) {
            Text.PrintNow('JM6_6', 5000, 1); //Go and get a vehicle less conspicuous
            $.flag_not_enough_seats = 1;
            continue pick_up_thugs; // SCM GOTO → pick_up_thugs
        }

        //PICK UP THUGS CUT_SCENE**************************************************************************************

        World.ClearArea(1087.7, -229.2, 8.0, 6.0, true);

        if (!Car.IsDead($.any_car_jm6)) {
            $.any_car_jm6.lockDoors(CARLOCK_LOCKED_PLAYER_INSIDE);
        }

        await asyncWait(500);

        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);

        if (!Car.IsDead($.any_car_jm6)) {
            $.any_car_jm6.lockDoors(CARLOCK_UNLOCKED);
        }

        $.blip1_jm6.remove();

        $.thug1 = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 1086.5, -238.3, 9.0);
        $.thug1.turnToFacePlayer($.player);
        $.thug1.setIdle();

        $.thug2 = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 1088.4, -237.9, 9.0);
        $.thug2.turnToFacePlayer($.player);
        $.thug2.setIdle();

        $.thug3 = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 1090.4, -238.0, 9.0);
        $.thug3.turnToFacePlayer($.player);
        $.thug3.setIdle();

        $.thug1.giveWeapon(WEAPONTYPE_PISTOL, 100);
        $.thug2.giveWeapon(WEAPONTYPE_SHOTGUN, 50);
        $.thug3.giveWeapon(WEAPONTYPE_UZI, 100);

        Camera.SetFixedPosition(1078.773, -232.474, 12.19, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1079.691, -232.132, 11.99, JUMP_CUT);

        //APPLY_BRAKES_TO_PLAYERS_CAR Player On

        $.thug1.setPersonality(PEDSTAT_TOUGH_GUY);
        $.thug2.setPersonality(PEDSTAT_TOUGH_GUY);
        $.thug3.setPersonality(PEDSTAT_TOUGH_GUY);

        $.thug1.setThreatSearch(THREAT_COP);
        $.thug2.setThreatSearch(THREAT_COP);
        $.thug3.setThreatSearch(THREAT_COP);

        await asyncWait(1000);

        while (!$.Bank_job_door.slide(1087.523, -233.801, 13.5, 0.0, 0.0, 0.07, false)) {
            await asyncWait(0);
            const { hours, minutes } = Clock.GetTimeOfDay();
            $.hours = hours;
            $.minutes = minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_joey6_failed");
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                FAIL("mission_joey6_failed");
            }
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.followPlayer($.player);
            $.thug1.setRunning(true);
            await asyncWait(800);
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.followPlayer($.player);
            $.thug2.setRunning(true);
            await asyncWait(800);
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.followPlayer($.player);
            $.thug3.setRunning(true);
            //WAIT 400
        }

        if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug1) && !Char.IsDead($.thug2) && !Char.IsDead($.thug3)) {
            TIMERB = 0;
            while (!$.thug1.isInCar($.any_car_jm6) || !$.thug2.isInCar($.any_car_jm6) || !$.thug3.isInCar($.any_car_jm6)) {
                await asyncWait(0);
                if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                    Text.PrintNow('JM6_7', 5000, 1);
                    FAIL("mission_joey6_failed");
                }
                if (Car.IsDead($.any_car_jm6)) {
                    FAIL("mission_joey6_failed");
                }
                const { hours, minutes } = Clock.GetTimeOfDay();
                $.hours = hours;
                $.minutes = minutes;
                if ($.hours >= 17) {
                    Text.PrintNow('OUTTIME', 5000, 1);
                    FAIL("mission_joey6_failed");
                }
                if (TIMERB > 15000) {
                    break pick_up_thugs; // SCM GOTO → next_robber_bit
                }
            }
        }
        break pick_up_thugs; // xxx: fallthrough
    }

    next_robber_bit: {
        //SAMPLE1*********************************************************

        Audio.LoadMissionAudio(SfxMission.J6_a);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Camera.RestoreJumpcut();
        $.player.applyBrakesToCar(OFF);
        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);

        //END OF PICK UP THUGS CUT_SCENE*******************************************************************************

        Text.PrintNow('JM6_1', 5000, 1); //"Lets go"

        while (!$.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.2, false)) {
            await asyncWait(0);
            const { hours, minutes } = Clock.GetTimeOfDay();
            $.hours = hours;
            $.minutes = minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_joey6_failed");
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                FAIL("mission_joey6_failed");
            }
        }

        $.blip3_jm6 = Blip.AddForCoord(1038.0, -700.0, -100.0);
        //CHANGE_BLIP_DISPLAY blip3_jm6 BLIP_ONLY

        $.flag_displayed_wanted_message_jm6 = 0;
    }

    //GET TO THE BANK
    get_to_the_bank: while (true) {
        await asyncWait(0);

        if (Car.IsDead($.any_car_jm6)) {
        }

        while (!$.player.isStoppedInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, true) || !$.player.isInAnyCar() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if (Car.IsDead($.any_car_jm6)) {
            }
            if ($.player.isInAnyCar()) {
                $.any_car_jm6 = $.player.storeCarIsIn();
            }
            if (!Char.IsDead($.thug1)) {
                if (!$.thug1.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added1 == 0) {
                        $.thug1_blip = Blip.AddForChar($.thug1);
                        $.blip_for_thug_added1 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added1 == 1) {
                            $.thug1.followPlayer($.player);
                            $.thug1_blip.remove();
                            $.blip_for_thug_added1 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug2)) {
                if (!$.thug2.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added2 == 0) {
                        $.thug2_blip = Blip.AddForChar($.thug2);
                        $.blip_for_thug_added2 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added2 == 1) {
                            $.thug2.followPlayer($.player);
                            $.thug2_blip.remove();
                            $.blip_for_thug_added2 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug3)) {
                if (!$.thug3.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added3 == 0) {
                        $.thug3_blip = Blip.AddForChar($.thug3);
                        $.blip_for_thug_added3 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added3 == 1) {
                            $.thug3.followPlayer($.player);
                            $.thug3_blip.remove();
                            $.blip_for_thug_added3 = 0;
                        }
                    }
                }
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                FAIL("mission_joey6_failed");
            }
            if ($.player.isStoppedInAreaInCar3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm6 == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                        $.flag_displayed_wanted_message_jm6 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false)) {
                    $.flag_displayed_wanted_message_jm6 = 0;
                }
            }
            if ($.player.isInAreaOnFoot3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false)) {
                Text.PrintNow('JM6_5', 5000, 1); //"We need a getaway vehicle"
            } else {
                Text.ClearThisPrint('JM6_5');
            }
            const { hours, minutes } = Clock.GetTimeOfDay();
            $.hours = hours;
            $.minutes = minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_joey6_failed");
            }
        }

        if ($.player.isInModel(CAR_COACH) || $.player.isInModel(CAR_BUS)) {
            Text.PrintNow('JM6_6', 5000, 1); //Go and get a vehicle less conspicuous
            //WAIT 3000
            continue get_to_the_bank; // SCM GOTO → get_to_the_bank
        }

        if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
            Text.PrintNow('JM6_7', 5000, 1);
            FAIL("mission_joey6_failed");
        }

        if (!$.thug1.isInCar($.any_car_jm6) || !$.thug2.isInCar($.any_car_jm6) || !$.thug3.isInCar($.any_car_jm6)) {
            Text.PrintNow('JM6_7', 5000, 1); //Go and get a vehicle less conspicuous
            //WAIT 3000
            continue get_to_the_bank; // SCM GOTO → get_to_the_bank
        }

        // BANK ROBBERY CUT SCENE**************************************************************************************

        World.ClearArea(1037.3, -699.6, 15.0, 6.0, true);
        World.SetPedDensityMultiplier(0.0);

        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);
        $.player.applyBrakesToCar(ON);

        Camera.SetFixedPosition(1036.448, -705.615, 14.512, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1036.637, -704.639, 14.624, JUMP_CUT);

        $.blip3_jm6.remove();

        //SAMPLE2*********************************************************

        Audio.LoadMissionAudio(SfxMission.J6_b);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Text.PrintNow('JM6_2', 5000, 1); //"Wait here"

        $.any_car_jm6 = $.player.storeCarIsIn();

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug1)) {
                $.thug1.leaveGroup();
                $.thug1.setObjLeaveCar($.any_car_jm6);
            }
        }

        await asyncWait(400);

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug2)) {
                $.thug2.leaveGroup();
                $.thug2.setObjLeaveCar($.any_car_jm6);
            }
        }

        await asyncWait(400);

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug3)) {
                $.thug3.leaveGroup();
                $.thug3.setObjLeaveCar($.any_car_jm6);
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        //WAITING FOR THUGS TO GET OUT OF CAR

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if (Car.IsDead($.any_car_jm6)) {
                FAIL("mission_joey6_failed");
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug1)) {
                if ($.thug1_is_dead == 0) {
                    if (!$.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                        $.thug1.setObjRunToCoord(1037.4, -699.9);
                        await asyncWait(300);
                        $.objective_count++;
                        $.objective_count_done_before1 = 1;
                    }
                }
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug2)) {
                if ($.thug2_is_dead == 0) {
                    if (!$.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                        $.thug2.setObjRunToCoord(1037.4, -699.9);
                        await asyncWait(300);
                        $.objective_count++;
                        $.objective_count_done_before2 = 1;
                    }
                }
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug3)) {
                if ($.thug3_is_dead == 0) {
                    if (!$.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                        $.thug3.setObjRunToCoord(1037.4, -699.9);
                        $.objective_count++;
                        $.objective_count_done_before3 = 1;
                    }
                }
            }
        }

        //THUGS GO IN THE BANK
        /*
        IF NOT IS_CHAR_DEAD thug1
        SET_CHAR_OBJ_RUN_TO_COORD thug1 1037.4 -699.9
        WAIT 400
        ENDIF

        IF NOT IS_CHAR_DEAD thug2
        SET_CHAR_OBJ_RUN_TO_COORD thug2 1037.4 -699.9
        WAIT 400
        ENDIF

        IF NOT IS_CHAR_DEAD thug3
        SET_CHAR_OBJ_RUN_TO_COORD thug3 1037.4 -699.9
        ENDIF
        */

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        const _res275 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res275.x;
        $.bankdoor_Y = _res275.y;
        $.bankdoor_Z = _res275.z;
        $.bankdoor_Y = $.bankdoor_Y - 1.0;

        const _res276 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res276.x;
        $.bankdoor2_Y = _res276.y;
        $.bankdoor2_Z = _res276.z;
        $.bankdoor2_Y = $.bankdoor2_Y + 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false)
        ) {
            await asyncWait(0);
        }

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1037.4, -699.9, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1037.4, -699.9, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1037.4, -699.9, 13.9);
                }
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.setCoordinates(1104.0, -792.0, 14.0);
                    $.thug1.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.setCoordinates(1102.0, -792.0, 14.0);
                    $.thug2.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.setCoordinates(1100.0, -792.0, 14.0);
                    $.thug3.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1032.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1032.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1032.9, -700.2, 13.9);
                }
            }
        }

        Audio.LoadMissionAudio(SfxMission.J6_1);

        const _res277 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res277.x;
        $.bankdoor_Y = _res277.y;
        $.bankdoor_Z = _res277.z;
        $.bankdoor_Y = $.bankdoor_Y + 1.0;

        const _res278 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res278.x;
        $.bankdoor2_Y = _res278.y;
        $.bankdoor2_Z = _res278.z;
        $.bankdoor2_Y = $.bankdoor2_Y - 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false)
        ) {
            await asyncWait(0);
        }

        //WAIT 1000

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
        }

        await asyncWait(1000);

        //THUGS COME OUT OF BANK

        World.ClearArea(1037.3, -699.6, 15.0, 4.0, true);

        const _res279 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res279.x;
        $.bankdoor_Y = _res279.y;
        $.bankdoor_Z = _res279.z;
        $.bankdoor_Y = $.bankdoor_Y - 1.0;

        const _res280 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res280.x;
        $.bankdoor2_Y = _res280.y;
        $.bankdoor2_Z = _res280.z;
        $.bankdoor2_Y = $.bankdoor2_Y + 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false)
        ) {
            await asyncWait(0);
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.setCoordinates(1032.9, -700.2, 15.0);
            $.thug1.setObjRunToCoord(1036.9, -700.2);
            //SET_PLAYER_AS_LEADER thug1 player
        }

        await asyncWait(800);

        if (!Char.IsDead($.thug2)) {
            $.thug2.setCoordinates(1032.9, -700.2, 15.0);
            $.thug2.setObjRunToCoord(1036.9, -700.2);
        }

        await asyncWait(800);

        if (!Char.IsDead($.thug3)) {
            $.thug3.setCoordinates(1032.9, -700.2, 15.0);
            $.thug3.setObjRunToCoord(1036.9, -700.2);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1036.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1036.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1036.9, -700.2, 13.9);
                }
            }
        }

        $.joey_alarm_loop = Sound.AddContinuous(1034.8, -700.1, 15.0, SOUND_BANK_ALARM_LOOP_L);
        $.sound_already_created_before = 1;

        //SAMPLE3*********************************************************

        Audio.LoadMissionAudio(SfxMission.J6_d);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        $.player.alterWantedLevelNoDrop(3);

        const _res281 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res281.x;
        $.bankdoor_Y = _res281.y;
        $.bankdoor_Z = _res281.z;
        $.bankdoor_Y = $.bankdoor_Y + 1.0;

        const _res282 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res282.x;
        $.bankdoor2_Y = _res282.y;
        $.bankdoor2_Z = _res282.z;
        $.bankdoor2_Y = $.bankdoor2_Y - 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false)
        ) {
            await asyncWait(0);
        }

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.RestoreJumpcut();
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);
        $.player.applyBrakesToCar(OFF);
        World.SetPedDensityMultiplier(1.0);

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }

            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }

            //	STORE_CAR_PLAYER_IS_IN player any_car_jm6
            //	maybe should stop player leaving this car while the thugs get in

            if (Car.IsDead($.any_car_jm6)) {
                FAIL("mission_joey6_failed");
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            /*
            IF TIMERB > 15000
            IF NOT IS_CAR_DEAD any_car_jm6
            IF NOT IS_CHAR_DEAD	thug1
            //WARP_CHAR_INTO_CAR thug1 any_car_jm6
            //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
            ENDIF
            IF NOT IS_CHAR_DEAD	thug2
            //WARP_CHAR_INTO_CAR thug2 any_car_jm6
            //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
            ENDIF
            IF NOT IS_CHAR_DEAD	thug3
            //WARP_CHAR_INTO_CAR thug3 any_car_jm6
            //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
            ENDIF
            ENDIF
            ENDIF
            */
        }

        //END OF BANK ROBBERY CUT SCENE********************************************************************************

        $.blip2_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
        $.blip2_jm6.changeDisplay(BLIP_ONLY);

        //SAMPLE4*********************************************************

        Audio.LoadMissionAudio(SfxMission.J6_c);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Text.PrintNow('JM6_3', 3000, 1); //"get us out of here"

        //PRINT_SOON ( JM6_4 ) 5000 1 //"get us out of here"

        break get_to_the_bank; // xxx: fallthrough
    }

    //Get back to warehouse

    back_to_safe_house: while (true) {
        await asyncWait(0);

        if (Car.IsDead($.any_car_jm6)) {
        }

        while (!$.player.isStoppedInArea2D(1089.9, -223.9, 1084.5, -228.5, true) || !$.player.isInAnyCar() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if (Car.IsDead($.any_car_jm6)) {
            }
            if ($.player.isInAnyCar()) {
                $.any_car_jm6 = $.player.storeCarIsIn();
            }
            if (Char.IsDead($.thug1) && Char.IsDead($.thug2) && Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_8', 5000, 1);
                FAIL("mission_joey6_failed");
            }
            if (!Char.IsDead($.thug1)) {
                if (!$.thug1.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added1 == 0) {
                        $.thug1_blip = Blip.AddForChar($.thug1);
                        $.blip_for_thug_added1 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added1 == 1) {
                            $.thug1.followPlayer($.player);
                            $.thug1_blip.remove();
                            $.blip_for_thug_added1 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug2)) {
                if (!$.thug2.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added2 == 0) {
                        $.thug2_blip = Blip.AddForChar($.thug2);
                        $.blip_for_thug_added2 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added2 == 1) {
                            $.thug2.followPlayer($.player);
                            $.thug2_blip.remove();
                            $.blip_for_thug_added2 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug3)) {
                if (!$.thug3.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added3 == 0) {
                        $.thug3_blip = Blip.AddForChar($.thug3);
                        $.blip_for_thug_added3 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false)) {
                        if ($.blip_for_thug_added3 == 1) {
                            $.thug3.followPlayer($.player);
                            $.thug3_blip.remove();
                            $.blip_for_thug_added3 = 0;
                        }
                    }
                }
            }
            if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm6 == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                        $.flag_displayed_wanted_message_jm6 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea2D(1089.9, -223.9, 1084.5, -228.5, false)) {
                    $.flag_displayed_wanted_message_jm6 = 0;
                }
            }
            if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, true)) {
                Text.PrintNow('EBAL_5', 5000, 1);
            } else {
                Text.ClearThisPrint('EBAL_5');
            }
        }

        //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************

        if (!Char.IsDead($.thug1)) {
            if (!$.thug1.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                continue back_to_safe_house; // SCM GOTO → back_to_safe_house
            }
        }

        if (!Char.IsDead($.thug2)) {
            if (!$.thug2.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                continue back_to_safe_house; // SCM GOTO → back_to_safe_house
            }
        }

        if (!Char.IsDead($.thug3)) {
            if (!$.thug3.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                continue back_to_safe_house; // SCM GOTO → back_to_safe_house
            }
        }

        World.ClearArea(1087.7, -229.2, 8.0, 6.0, true);

        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);

        Camera.SetFixedPosition(1098.781, -228.929, 16.723, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1098.005, -229.116, 16.12, JUMP_CUT);

        if (!Car.IsDead($.any_car_jm6)) {
            $.player.applyBrakesToCar(ON);
            if (!Char.IsDead($.thug1)) {
                $.thug1.leaveGroup();
                if ($.thug1.isInAnyCar()) {
                    $.any_car_jm6 = $.thug1.storeCarIsIn();
                    $.thug1.setObjLeaveCar($.any_car_jm6);
                }
            }
            await asyncWait(400);
            if (!Char.IsDead($.thug2)) {
                $.thug2.leaveGroup();
                if ($.thug2.isInAnyCar()) {
                    $.any_car_jm6 = $.thug2.storeCarIsIn();
                    $.thug2.setObjLeaveCar($.any_car_jm6);
                }
            }
            await asyncWait(400);
            if (!Char.IsDead($.thug3)) {
                $.thug3.leaveGroup();
                if ($.thug3.isInAnyCar()) {
                    $.any_car_jm6 = $.thug3.storeCarIsIn();
                    $.thug3.setObjLeaveCar($.any_car_jm6);
                }
            }
        }

        if (!Char.IsDead($.thug1)) {
            if (!$.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false)) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.markAsNoLongerNeeded();
                }
                //thug1_is_dead = 1
            }
        }

        if (!Char.IsDead($.thug2)) {
            if (!$.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false)) {
                if (!Char.IsDead($.thug2)) {
                    $.thug2.markAsNoLongerNeeded();
                }
                //thug2_is_dead = 1
            }
        }

        if (!Char.IsDead($.thug3)) {
            if (!$.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false)) {
                if (!Char.IsDead($.thug3)) {
                    $.thug3.markAsNoLongerNeeded();
                }
                //thug3_is_dead = 1
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        while (!$.Bank_job_door.slide(1087.523, -233.801, 14.012, 0.0, 0.0, 0.2, false)) {
            await asyncWait(0);
        }

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1)) {
                if ($.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                    $.thug1_is_dead = 1;
                }
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }

            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if (!Car.IsDead($.any_car_jm6)) {
                if ($.thug1_is_dead == 0) {
                    if (!$.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
                        $.thug1.setObjRunToCoord(1087.0, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before1 = 1;
                    }
                }
                if ($.thug2_is_dead == 0) {
                    if (!$.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
                        $.thug2.setObjRunToCoord(1087.5, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before2 = 1;
                    }
                }
                if ($.thug3_is_dead == 0) {
                    if (!$.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
                        $.thug3.setObjRunToCoord(1088.0, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before3 = 1;
                    }
                }
            }
        }

        $.blip1_jm6.remove();

        if (!Char.IsDead($.thug1)) {
            $.thug1.setObjRunToCoord(1087.0, -238.6);
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.setObjRunToCoord(1087.5, -238.6);
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.setObjRunToCoord(1088.0, -238.6);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }

            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }

            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                FAIL("mission_joey6_failed");
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1087.0, -238.6, 10.0);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1087.5, -238.6, 10.0);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1088.0, -238.6, 10.0);
                }
            }
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.setObjWaitOnFoot();
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.setObjWaitOnFoot();
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.setObjWaitOnFoot();
        }

        while (!$.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.1, false)) {
            await asyncWait(0);
        }

        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.RestoreJumpcut();
        Game.SetPoliceIgnorePlayer($.player, OFF);
        Game.SetEveryoneIgnorePlayer($.player, OFF);
        $.player.applyBrakesToCar(OFF);

        //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************

        break back_to_safe_house; // xxx: fallthrough
    }

    return; // SCM GOTO → mission_joey6_passed
}

// Mission Joey6 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission joey6 passed
async function onPassed() {
    $.flag_joey_mission6_passed = 1;
    if (!Char.IsDead($.thug1)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug1.delete();

    if (!Char.IsDead($.thug2)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug2.delete();

    if (!Char.IsDead($.thug3)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug3.delete();
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', $.thugs_score, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore($.thugs_score);
    Stat.RegisterMissionPassed('JM6');
    Stat.PlayerMadeProgress(1);
    $.joey_contact_blip.remove();
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    if ($.sound_already_created_before == 1) {
        $.joey_alarm_loop.remove();
    }
    $.blip1_jm6.remove();
    $.blip3_jm6.remove();
    $.blip2_jm6.remove();
    $.thug1_blip.remove();
    $.thug2_blip.remove();
    $.thug3_blip.remove();
    World.SetPedDensityMultiplier(1.0);
    Streaming.UnloadSpecialCharacter(2);
    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
