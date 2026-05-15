// Generated from Main/Industrial/diablo1.sc
import { $ } from '../../utils';


async function mission_start_d1() {
    ONMISSION = true;
    $.flag_player_on_diablo_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    // SCRIPT_NAME diablo1

    $.game_timer_start_d1 = 0;
    $.game_timer_end_d1 = 0;
    $.player_cpcounter = 0;
    $.car1_cpcounter = 0;
    $.car2_cpcounter = 0;
    $.car3_cpcounter = 0;
    $.behind_car1 = 0;
    $.behind_car2 = 0;
    $.behind_car3 = 0;
    $.position = 0;
    $.timera_reset_flag_d1 = 0;
    $.timerb_reset_flag_d1 = 0;
    $.timerc_reset_flag_d1 = 0;
    $.timerc_started = 0;
    $.timerc_current = 0;
    $.timerc = 0;
    $.timerd = 0;
    $.timerd_started = 0;
    $.timerd_current = 0;
    $.timerd_reset_flag = 0;
    $.ai_car1_locate_size = 7.0;
    $.ai_car2_locate_size = 7.0;
    $.ai_car3_locate_size = 7.0;
    $.timere_reset_flag = 0;
    $.timerf_reset_flag = 0;
    $.car1_stuck_x = 0.0;
    $.car1_stuck_y = 0.0;
    $.car1_stuck_z = 0.0;
    $.car2_stuck_x = 0.0;
    $.car2_stuck_y = 0.0;
    $.car2_stuck_z = 0.0;
    $.car3_stuck_x = 0.0;
    $.car3_stuck_y = 0.0;
    $.car3_stuck_z = 0.0;

    //_____________Check Points____________//

    //cp1_x_d1 = 776.0
    //cp1_y_d1 = -917.5
    //cp1_z_d1 = 39.0

    $.cp2_x_d1 = 1050.859;
    $.cp2_y_d1 = -929.54;
    $.cp2_z_d1 = 14.4;

    $.cp3_x_d1 = 1314.0;
    $.cp3_y_d1 = -945.0;
    $.cp3_z_d1 = 14.8;

    $.cp4_x_d1 = 1092.0;
    $.cp4_y_d1 = -1061.0;
    $.cp4_z_d1 = 14.3;

    $.cp5_x_d1 = 842.0;
    $.cp5_y_d1 = -1009.0;
    $.cp5_z_d1 = 4.4;

    $.cp6_x_d1 = 855.0;
    $.cp6_y_d1 = -768.8;
    $.cp6_z_d1 = 14.6;

    $.cp7_x_d1 = 1004.0;
    $.cp7_y_d1 = -822.0;
    $.cp7_z_d1 = 14.5;

    $.cp8_x_d1 = 1126.0;
    $.cp8_y_d1 = -602.0;
    $.cp8_z_d1 = 14.4;

    $.cp9_x_d1 = 1196.0;
    $.cp9_y_d1 = -254.0;
    $.cp9_z_d1 = 24.4;

    $.cp10_x_d1 = 1116.0;
    $.cp10_y_d1 = -14.0;
    $.cp10_z_d1 = 6.0;

    $.cp11_x_d1 = 934.0;
    $.cp11_y_d1 = -38.7;
    $.cp11_z_d1 = 7.0;

    $.cp12_x_d1 = 876.0;
    $.cp12_y_d1 = -131.0;
    $.cp12_z_d1 = 4.5;

    $.cp13_x_d1 = 870.0;
    $.cp13_y_d1 = -453.0;
    $.cp13_z_d1 = 14.4;

    $.cp14_x_d1 = 1049.0;
    $.cp14_y_d1 = -473.0;
    $.cp14_z_d1 = 14.4;

    $.cp15_x_d1 = 1337.0;
    $.cp15_y_d1 = -490.0;
    $.cp15_z_d1 = 46.0;

    $.cp16_x_d1 = 1337.0;
    $.cp16_y_d1 = -215.0;
    $.cp16_z_d1 = 45.4;

    $.cp17_x_d1 = 1048.0;
    $.cp17_y_d1 = -249.0;
    $.cp17_z_d1 = 5.0;

    $.cp18_x_d1 = 980.0;
    $.cp18_y_d1 = -565.0;
    $.cp18_z_d1 = 14.5;

    //______________________________________//

    {
        World.SetPedDensityMultiplier(0.0);
        World.ClearAreaOfChars(890.3, -309.1, 0.0, 1038.1, -132.9, 10.0);

        TIMERA = 0;

        /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  //	SWITCH_STREAMING OFF

  PRINT_BIG ( DIAB1 ) 15000 2 //"Diablo Mission 1"

  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_d1_failed
  ENDIF

  WHILE TIMERA < 1500
  WAIT 0

  ENDWHILE

  */

        Cutscene.Load('EL_PH1');
        //SET_CUTSCENE_OFFSET 939.4 -230.1 3.9

        Cutscene.SetOffset(938.27, -229.561, 4.023);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Cutscene.Start();

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB1_B', 10000, 1); //"This is El Buro of the Diablos."

        while ($.cs_time < 4731) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB1_D', 10000, 1); //"You're new in Liberty, but already you are gaining a reputation on the streets."

        while ($.cs_time < 10501) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB1_E', 10000, 1); //"There's a street race starting by the old school hall near the Callahan Bridge."

        while ($.cs_time < 15111) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB1_F', 10000, 1); //"Get yourself some wheels and first through all the checkpoints wins the prize."

        while ($.cs_time < 20500) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();
        Streaming.Switch(true /* ON */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();
        World.SetPedDensityMultiplier(1.0);

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        //____________________________________________________________________//

        Streaming.RequestModel(14 /* PED_GANG_DIABLO_A */);
        Streaming.RequestModel(15 /* PED_GANG_DIABLO_B */);
        Streaming.RequestModel(105 /* CAR_CHEETAH */);

        while (!Streaming.HasModelLoaded(105 /* CAR_CHEETAH */) || !Streaming.HasModelLoaded(14 /* PED_GANG_DIABLO_A */) || !Streaming.HasModelLoaded(15 /* PED_GANG_DIABLO_B */)) {
            await asyncWait(0);
        }

        //WHILE NOT IS_BUTTON_PRESSED PAD1 LEFTSHOCK
        //	WAIT 0
        //ENDWHILE

        Path.SwitchRoadsOff(1034.0, -956.0, 12.0, 1063.0, -847.0, 20.0);

        $.car1_d1 = Car.Create(105 /* CAR_CHEETAH */, 1048.1465, -858.6693, 13.7827);
        $.car1_d1.lockDoors(2 /* CARLOCK_LOCKED */);
        $.car1_d1.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
        $.car1_d1.setWatertight(true /* TRUE */);
        $.car1_d1.setStrong(true /* TRUE */);
        $.car1_d1.setUpsidedownNotDamaged(true /* TRUE */);

        $.car2_d1 = Car.Create(105 /* CAR_CHEETAH */, 1053.3384, -859.3337, 13.7827);
        $.car2_d1.lockDoors(2 /* CARLOCK_LOCKED */);
        $.car2_d1.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
        $.car2_d1.setWatertight(true /* TRUE */);
        $.car2_d1.setStrong(true /* TRUE */);
        $.car2_d1.setUpsidedownNotDamaged(true /* TRUE */);

        $.car3_d1 = Car.Create(105 /* CAR_CHEETAH */, 1058.6385, -859.2989, 13.7827);
        $.car3_d1.lockDoors(2 /* CARLOCK_LOCKED */);
        $.car3_d1.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
        $.car3_d1.setWatertight(true /* TRUE */);
        $.car3_d1.setStrong(true /* TRUE */);
        $.car3_d1.setUpsidedownNotDamaged(true /* TRUE */);

        $.ped_car1_driver_d1 = Char.CreateInsideCar($.car1_d1, 4 /* PEDTYPE_CIVMALE */, 14 /* PED_GANG_DIABLO_A */);
        $.ped_car2_driver_d1 = Char.CreateInsideCar($.car2_d1, 4 /* PEDTYPE_CIVMALE */, 15 /* PED_GANG_DIABLO_B */);
        $.ped_car3_driver_d1 = Char.CreateInsideCar($.car3_d1, 4 /* PEDTYPE_CIVMALE */, 14 /* PED_GANG_DIABLO_A */);

        $.ped_car1_driver_d1.setCantBeDraggedOut(true /* TRUE */);
        $.ped_car2_driver_d1.setCantBeDraggedOut(true /* TRUE */);
        $.ped_car3_driver_d1.setCantBeDraggedOut(true /* TRUE */);

        $.car1_d1.setHeading(180.0);
        $.car2_d1.setHeading(180.0);
        $.car3_d1.setHeading(180.0);

        $.car1_d1.setIdle();
        $.car2_d1.setIdle();
        $.car3_d1.setIdle();

        $.car1_d1.setDrivingStyle(2);
        $.car1_d1.setCruiseSpeed(50.0);

        $.car2_d1.setDrivingStyle(2);
        $.car2_d1.setCruiseSpeed(50.0);

        $.car3_d1.setDrivingStyle(2);
        $.car3_d1.setCruiseSpeed(50.0);

        $.car1_d1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.car2_d1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.car3_d1.setOnlyDamagedByPlayer(true /* TRUE */);

        $.blip_chase_d1 = Blip.AddForCoord(1042.9772, -858.7398, 13.7827);

        Text.PrintNow('DIAB1_4', 5000, 1); //"~g~Get a fast car and get to the starting grid."

        while (!$.player.locateStoppedInCar3D(1042.9772, -858.7398, 13.7827, 2.0, 2.0, 2.0, true)) {
            await asyncWait(0);
            if ($.player.locateStoppedOnFoot3D(1042.9772, -858.7398, 13.7827, 2.0, 2.0, 2.0, true)) {
                Text.PrintNow('YD1_G', 5000, 1);
            }
            if (Car.IsDead($.car1_d1)) {
                // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car2_d1)) {
                // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.car3_d1)) {
                // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
            }
            $.timerc = $.car1_d1.getHealth();
            if ($.timerc < 1000) {
                $.timerc = 9;
                // SCM GOTO → race_start (not lowered; manual jump required)
                throw new Error('unresolved GOTO race_start'); // fallback: would break linear control flow
            }
            $.timerc = $.car2_d1.getHealth();
            if ($.timerc < 1000) {
                $.timerc = 9;
                // SCM GOTO → race_start (not lowered; manual jump required)
                throw new Error('unresolved GOTO race_start'); // fallback: would break linear control flow
            }
            $.timerc = $.car3_d1.getHealth();
            if ($.timerc < 1000) {
                $.timerc = 9;
                // SCM GOTO → race_start (not lowered; manual jump required)
                throw new Error('unresolved GOTO race_start'); // fallback: would break linear control flow
            }

            //	IF IS_PLAYER_IN_ANY_CAR player
            //		STORE_CAR_PLAYER_IS_IN player players_car
            //		GET_CAR_SPEED players_car players_car_speed
            //		players_car_speed_int =# players_car_speed
            //		PRINT_WITH_NUMBER_NOW NUMBER players_car_speed_int 50 1
            //	ENDIF
        }
    }

    async function race_start() {
        $.car1_d1.setOnlyDamagedByPlayer(false /* FALSE */);
        $.car2_d1.setOnlyDamagedByPlayer(false /* FALSE */);
        $.car3_d1.setOnlyDamagedByPlayer(false /* FALSE */);

        if ($.timerc == 9) {
            Text.PrintBig('DIAB1_1', 1200, 4); // "3..2..1.. GO GO GO!"
        } else {
            $.player.setControl(false /* OFF */);
            Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */);
            Game.SetAllCarsCanBeDamaged(false /* FALSE */);
            Text.PrintBig('YD1_3', 1100, 4);
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */);
            await asyncWait(1000);
            Text.PrintBig('YD1_2', 1100, 4);
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */);
            await asyncWait(1000);
            Text.PrintBig('YD1_1', 1100, 4);
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */);
            await asyncWait(1000);
            Text.PrintBig('YD1GO', 800, 4);
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */);
            $.player.setControl(true /* ON */);
            Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */);
            Game.SetAllCarsCanBeDamaged(true /* TRUE */);
        }

        if (Car.IsDead($.car1_d1)) {
            // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
        }

        if (Car.IsDead($.car2_d1)) {
            // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
        }

        if (Car.IsDead($.car3_d1)) {
            // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
        }

        $.timerc = 0;

        $.blip_chase_d1.remove();

        $.blip_car1_d1 = Blip.AddForCarOld($.car1_d1, 0 /* RED */, 1 /* MARKER_ONLY */);
        $.blip_car2_d1 = Blip.AddForCarOld($.car2_d1, 0 /* RED */, 1 /* MARKER_ONLY */);
        $.blip_car3_d1 = Blip.AddForCarOld($.car3_d1, 0 /* RED */, 1 /* MARKER_ONLY */);

        $.player_x_d1 = $.cp2_x_d1;
        $.player_y_d1 = $.cp2_y_d1;
        $.player_z_d1 = $.cp2_z_d1;
        $.blip_2nd_x = $.cp3_x_d1;
        $.blip_2nd_y = $.cp3_y_d1;
        $.blip_2nd_z = $.cp3_z_d1;

        $.car1_x_d1 = $.cp2_x_d1;
        $.car1_y_d1 = $.cp2_y_d1;
        $.car1_z_d1 = $.cp2_z_d1;

        $.car2_x_d1 = $.cp2_x_d1;
        $.car2_y_d1 = $.cp2_y_d1;
        $.car2_z_d1 = $.cp2_z_d1;

        $.car3_x_d1 = $.cp2_x_d1;
        $.car3_y_d1 = $.cp2_y_d1;
        $.car3_z_d1 = $.cp2_z_d1;

        $.blip_chase_d1 = Blip.AddForCoord($.player_x_d1, $.player_y_d1, $.player_z_d1);
        $.second_blip = Blip.AddForCoordOld($.blip_2nd_x, $.blip_2nd_y, $.blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
        $.second_blip.changeScale(2);
        $.second_blip.dim(true /* TRUE */);
        $.car1_d1.gotoCoordinates($.car1_x_d1, $.car1_y_d1, $.car1_z_d1);
        $.car2_d1.gotoCoordinates($.car2_x_d1, $.car2_y_d1, $.car2_z_d1);
        $.car3_d1.gotoCoordinates($.car3_x_d1, $.car3_y_d1, $.car3_z_d1);

        $.game_timer_start_d1 = Clock.GetGameTimer();
        $.game_timer_end_d1 = Clock.GetGameTimer();
        $.game_timer_end_d1 = $.game_timer_end_d1 - $.game_timer_start_d1;
        $.game_timer_end_d1 = $.game_timer_end_d1 / 1000;
        Hud.DisplayCounterWithString($.game_timer_end_d1, 0 /* COUNTER_DISPLAY_NUMBER */, 'DIAB1_5');
    }

    async function loop1() {
        // SCM GOTO → loop1 lowered to endless loop
        while (true) {
            await asyncWait(0);

            $.game_timer_end_d1 = Clock.GetGameTimer();
            $.game_timer_end_d1 = $.game_timer_end_d1 - $.game_timer_start_d1;
            $.game_timer_end_d1 = $.game_timer_end_d1 / 1000;

            $.position = 0 + $.behind_car1;
            $.position += $.behind_car2;
            $.position += $.behind_car3;

            if ($.position == 0) {
                Text.PrintNow('FIRST', 100, 1); //"1st"
            }

            if ($.position == 1) {
                Text.PrintNow('SECOND', 100, 1); //"2nd"
            }

            if ($.position == 2) {
                Text.PrintNow('THIRD', 100, 1); //"3rd"
            }

            if ($.position == 3) {
                Text.PrintNow('FOURTH', 100, 1); //"4th"
            }

            if ($.player_cpcounter == 17) {
                Fx.DrawCorona($.player_x_d1, $.player_y_d1, $.player_z_d1, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 100, 0, 0);
            } else {
                Fx.DrawCorona($.player_x_d1, $.player_y_d1, $.player_z_d1, 5.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0, 0, 100);
            }

            if ($.player.locateInCar3D($.player_x_d1, $.player_y_d1, $.player_z_d1, 6.0, 6.0, 6.0, false)) {
                ++$.player_cpcounter;
                $.blip_chase_d1.remove();
                $.second_blip.remove();
                if ($.player_cpcounter == 1) {
                    $.player_x_d1 = $.cp3_x_d1;
                    $.player_y_d1 = $.cp3_y_d1;
                    $.player_z_d1 = $.cp3_z_d1;
                    $.blip_2nd_x = $.cp4_x_d1;
                    $.blip_2nd_y = $.cp4_y_d1;
                    $.blip_2nd_z = $.cp4_z_d1;
                }
                if ($.player_cpcounter == 2) {
                    $.player_x_d1 = $.cp4_x_d1;
                    $.player_y_d1 = $.cp4_y_d1;
                    $.player_z_d1 = $.cp4_z_d1;
                    $.blip_2nd_x = $.cp5_x_d1;
                    $.blip_2nd_y = $.cp5_y_d1;
                    $.blip_2nd_z = $.cp5_z_d1;
                }
                if ($.player_cpcounter == 3) {
                    $.player_x_d1 = $.cp5_x_d1;
                    $.player_y_d1 = $.cp5_y_d1;
                    $.player_z_d1 = $.cp5_z_d1;
                    $.blip_2nd_x = $.cp6_x_d1;
                    $.blip_2nd_y = $.cp6_y_d1;
                    $.blip_2nd_z = $.cp6_z_d1;
                }
                if ($.player_cpcounter == 4) {
                    $.player_x_d1 = $.cp6_x_d1;
                    $.player_y_d1 = $.cp6_y_d1;
                    $.player_z_d1 = $.cp6_z_d1;
                    $.blip_2nd_x = $.cp7_x_d1;
                    $.blip_2nd_y = $.cp7_y_d1;
                    $.blip_2nd_z = $.cp7_z_d1;
                }
                if ($.player_cpcounter == 5) {
                    $.player_x_d1 = $.cp7_x_d1;
                    $.player_y_d1 = $.cp7_y_d1;
                    $.player_z_d1 = $.cp7_z_d1;
                    $.blip_2nd_x = $.cp8_x_d1;
                    $.blip_2nd_y = $.cp8_y_d1;
                    $.blip_2nd_z = $.cp8_z_d1;
                }
                if ($.player_cpcounter == 6) {
                    $.player_x_d1 = $.cp8_x_d1;
                    $.player_y_d1 = $.cp8_y_d1;
                    $.player_z_d1 = $.cp8_z_d1;
                    $.blip_2nd_x = $.cp9_x_d1;
                    $.blip_2nd_y = $.cp9_y_d1;
                    $.blip_2nd_z = $.cp9_z_d1;
                }
                if ($.player_cpcounter == 7) {
                    $.player_x_d1 = $.cp9_x_d1;
                    $.player_y_d1 = $.cp9_y_d1;
                    $.player_z_d1 = $.cp9_z_d1;
                    $.blip_2nd_x = $.cp10_x_d1;
                    $.blip_2nd_y = $.cp10_y_d1;
                    $.blip_2nd_z = $.cp10_z_d1;
                }
                if ($.player_cpcounter == 8) {
                    $.player_x_d1 = $.cp10_x_d1;
                    $.player_y_d1 = $.cp10_y_d1;
                    $.player_z_d1 = $.cp10_z_d1;
                    $.blip_2nd_x = $.cp11_x_d1;
                    $.blip_2nd_y = $.cp11_y_d1;
                    $.blip_2nd_z = $.cp11_z_d1;
                }
                if ($.player_cpcounter == 9) {
                    $.player_x_d1 = $.cp11_x_d1;
                    $.player_y_d1 = $.cp11_y_d1;
                    $.player_z_d1 = $.cp11_z_d1;
                    $.blip_2nd_x = $.cp12_x_d1;
                    $.blip_2nd_y = $.cp12_y_d1;
                    $.blip_2nd_z = $.cp12_z_d1;
                }
                if ($.player_cpcounter == 10) {
                    $.player_x_d1 = $.cp12_x_d1;
                    $.player_y_d1 = $.cp12_y_d1;
                    $.player_z_d1 = $.cp12_z_d1;
                    $.blip_2nd_x = $.cp13_x_d1;
                    $.blip_2nd_y = $.cp13_y_d1;
                    $.blip_2nd_z = $.cp13_z_d1;
                }
                if ($.player_cpcounter == 11) {
                    $.player_x_d1 = $.cp13_x_d1;
                    $.player_y_d1 = $.cp13_y_d1;
                    $.player_z_d1 = $.cp13_z_d1;
                    $.blip_2nd_x = $.cp14_x_d1;
                    $.blip_2nd_y = $.cp14_y_d1;
                    $.blip_2nd_z = $.cp14_z_d1;
                }
                if ($.player_cpcounter == 12) {
                    $.player_x_d1 = $.cp14_x_d1;
                    $.player_y_d1 = $.cp14_y_d1;
                    $.player_z_d1 = $.cp14_z_d1;
                    $.blip_2nd_x = $.cp15_x_d1;
                    $.blip_2nd_y = $.cp15_y_d1;
                    $.blip_2nd_z = $.cp15_z_d1;
                }
                if ($.player_cpcounter == 13) {
                    $.player_x_d1 = $.cp15_x_d1;
                    $.player_y_d1 = $.cp15_y_d1;
                    $.player_z_d1 = $.cp15_z_d1;
                    $.blip_2nd_x = $.cp16_x_d1;
                    $.blip_2nd_y = $.cp16_y_d1;
                    $.blip_2nd_z = $.cp16_z_d1;
                }
                if ($.player_cpcounter == 14) {
                    $.player_x_d1 = $.cp16_x_d1;
                    $.player_y_d1 = $.cp16_y_d1;
                    $.player_z_d1 = $.cp16_z_d1;
                    $.blip_2nd_x = $.cp17_x_d1;
                    $.blip_2nd_y = $.cp17_y_d1;
                    $.blip_2nd_z = $.cp17_z_d1;
                }
                if ($.player_cpcounter == 15) {
                    $.player_x_d1 = $.cp17_x_d1;
                    $.player_y_d1 = $.cp17_y_d1;
                    $.player_z_d1 = $.cp17_z_d1;
                    $.blip_2nd_x = $.cp18_x_d1;
                    $.blip_2nd_y = $.cp18_y_d1;
                    $.blip_2nd_z = $.cp18_z_d1;
                }
                if ($.player_cpcounter == 16) {
                    $.player_x_d1 = $.cp18_x_d1;
                    $.player_y_d1 = $.cp18_y_d1;
                    $.player_z_d1 = $.cp18_z_d1;
                    $.blip_2nd_x = $.cp2_x_d1;
                    $.blip_2nd_y = $.cp2_y_d1;
                    $.blip_2nd_z = $.cp2_z_d1;
                }
                if ($.player_cpcounter == 17) {
                    $.player_x_d1 = $.cp2_x_d1;
                    $.player_y_d1 = $.cp2_y_d1;
                    $.player_z_d1 = $.cp2_z_d1;
                    $.blip_2nd_x = $.cp2_x_d1;
                    $.blip_2nd_y = $.cp2_y_d1;
                    $.blip_2nd_z = $.cp2_z_d1;
                }
                if ($.player_cpcounter == 18) {
                    //	AND	position = 0
                    // SCM GOTO → mission_d1_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_d1_passed'); // fallback: would break linear control flow
                }
                $.second_blip = Blip.AddForCoordOld($.blip_2nd_x, $.blip_2nd_y, $.blip_2nd_z, 5 /* PURPLE */, 2 /* BLIP_ONLY */);
                $.second_blip.dim(true /* ON */);
                $.second_blip.changeScale(2);
                $.blip_chase_d1 = Blip.AddForCoord($.player_x_d1, $.player_y_d1, $.player_z_d1);
            }

            if (!Car.IsDead($.car1_d1)) {
                $.car1_health = $.car1_d1.getHealth();
                if ($.car1_health < 500) {
                    $.car1_d1.setHealth(1000);
                }
                if (!($.player_cpcounter == $.car1_cpcounter)) {
                    if ($.player_cpcounter < $.car1_cpcounter) {
                        $.behind_car1 = 1;
                    } else {
                        $.behind_car1 = 0;
                    }
                } else {
                    const _res189 = $.car1_d1.getCoordinates();
                    $.car1_x = _res189.x;
                    $.car1_y = _res189.y;
                    $.car1_z = _res189.z;
                    $.difference_x_float_d = $.car1_x - $.player_x_d1;
                    $.difference_y_float_d = $.car1_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.car1_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    const _res190 = $.player.getCoordinates();
                    $.players_x = _res190.x;
                    $.players_y = _res190.y;
                    $.players_z = _res190.z;
                    $.difference_x_float_d = $.players_x - $.player_x_d1;
                    $.difference_y_float_d = $.players_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.players_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    if ($.players_distance_from_cp < $.car1_distance_from_cp) {
                        $.behind_car1 = 0;
                    } else {
                        $.behind_car1 = 1;
                    }
                }
                if ($.car1_d1.locate3D($.car1_stuck_x, $.car1_stuck_y, $.car1_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timerd_reset_flag == 0) {
                        $.timerd_started = Clock.GetGameTimer();
                        $.timerd_reset_flag = 1;
                    }
                    if ($.timerd_reset_flag == 1) {
                        $.timerd_current = Clock.GetGameTimer();
                        $.timerd = $.timerd_current - $.timerd_started;
                        if ($.timerd > 8000) {
                            if (!$.car1_d1.isOnScreen()) {
                                const _res191 = $.car1_d1.getCoordinates();
                                $.car1_x = _res191.x;
                                $.car1_y = _res191.y;
                                $.car1_z = _res191.z;
                                const _res192 = Path.GetClosestCarNode($.car1_x, $.car1_y, $.car1_z);
                                $.car1_x = _res192.nodeX;
                                $.car1_y = _res192.nodeY;
                                $.car1_z = _res192.nodeZ;
                                if (!World.IsPointObscuredByAMissionEntity($.car1_x, $.car1_y, $.car1_z, 4.0, 4.0, 4.0)) {
                                    if (!Camera.IsPointOnScreen($.car1_x, $.car1_y, $.car1_z, 4.0)) {
                                        $.car1_d1.setCoordinates($.car1_x, $.car1_y, $.car1_z);
                                        $.car1_d1.turnToFaceCoord($.car1_x_d1, $.car1_y_d1);
                                        $.timerd_reset_flag = 0;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.car1_d1.locate3D($.car1_stuck_x, $.car1_stuck_y, $.car1_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res193 = $.car1_d1.getCoordinates();
                    $.car1_stuck_x = _res193.x;
                    $.car1_stuck_y = _res193.y;
                    $.car1_stuck_z = _res193.z;
                    $.timerd_reset_flag = 0;
                }
                if ($.car1_d1.isUpsidedown() && $.car1_d1.isStopped()) {
                    if (!$.car1_d1.isOnScreen()) {
                        const _res194 = $.car1_d1.getCoordinates();
                        $.car1_x = _res194.x;
                        $.car1_y = _res194.y;
                        $.car1_z = _res194.z;
                        const _res195 = Path.GetClosestCarNode($.car1_x, $.car1_y, $.car1_z);
                        $.car1_x = _res195.nodeX;
                        $.car1_y = _res195.nodeY;
                        $.car1_z = _res195.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car1_x, $.car1_y, $.car1_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car1_x, $.car1_y, $.car1_z, 3.0)) {
                                $.car1_d1.setCoordinates($.car1_x, $.car1_y, $.car1_z);
                                $.car1_d1.turnToFaceCoord($.car1_x_d1, $.car1_y_d1);
                            }
                        }
                    }
                }
                if ($.timera_reset_flag_d1 == 1) {
                    if (!$.car1_d1.isStopped()) {
                        $.timera_reset_flag_d1 = 0;
                    }
                }
                if ($.car1_d1.isStopped()) {
                    if ($.timera_reset_flag_d1 == 0) {
                        TIMERA = 0;
                        $.timera_reset_flag_d1 = 1;
                    }
                    if (TIMERA > 5000 && $.timera_reset_flag_d1 == 1) {
                        if (!$.car1_d1.isOnScreen()) {
                            const _res196 = $.car1_d1.getCoordinates();
                            $.car1_x = _res196.x;
                            $.car1_y = _res196.y;
                            $.car1_z = _res196.z;
                            const _res197 = Path.GetClosestCarNode($.car1_x, $.car1_y, $.car1_z);
                            $.car1_x = _res197.nodeX;
                            $.car1_y = _res197.nodeY;
                            $.car1_z = _res197.nodeZ;
                            if (!World.IsPointObscuredByAMissionEntity($.car1_x, $.car1_y, $.car1_z, 4.0, 4.0, 4.0)) {
                                if (!Camera.IsPointOnScreen($.car1_x, $.car1_y, $.car1_z, 4.0)) {
                                    $.car1_d1.setCoordinates($.car1_x, $.car1_y, $.car1_z);
                                    $.car1_d1.turnToFaceCoord($.car1_x_d1, $.car1_y_d1);
                                    $.timera_reset_flag_d1 = 0;
                                }
                            }
                        }
                    }
                }
                if ($.car1_d1.locate3D($.car1_x_d1, $.car1_y_d1, $.car1_z_d1, $.ai_car1_locate_size, $.ai_car1_locate_size, $.ai_car1_locate_size, false)) {
                    ++$.car1_cpcounter;
                    if ($.car1_cpcounter == 1) {
                        $.car1_x_d1 = $.cp3_x_d1;
                        $.car1_y_d1 = $.cp3_y_d1;
                        $.car1_z_d1 = $.cp3_z_d1;
                    }
                    if ($.car1_cpcounter == 2) {
                        $.car1_x_d1 = $.cp4_x_d1;
                        $.car1_y_d1 = $.cp4_y_d1;
                        $.car1_z_d1 = $.cp4_z_d1;
                        Path.SwitchRoadsOn(1034.0, -956.0, 12.0, 1063.0, -847.0, 20.0);
                    }
                    if ($.car1_cpcounter == 3) {
                        $.car1_x_d1 = $.cp5_x_d1;
                        $.car1_y_d1 = $.cp5_y_d1;
                        $.car1_z_d1 = $.cp5_z_d1;
                    }
                    if ($.car1_cpcounter == 4) {
                        $.car1_x_d1 = $.cp6_x_d1;
                        $.car1_y_d1 = $.cp6_y_d1;
                        $.car1_z_d1 = $.cp6_z_d1;
                    }
                    if ($.car1_cpcounter == 5) {
                        $.car1_x_d1 = $.cp7_x_d1;
                        $.car1_y_d1 = $.cp7_y_d1;
                        $.car1_z_d1 = $.cp7_z_d1;
                    }
                    if ($.car1_cpcounter == 6) {
                        $.car1_x_d1 = $.cp8_x_d1;
                        $.car1_y_d1 = $.cp8_y_d1;
                        $.car1_z_d1 = $.cp8_z_d1;
                    }
                    if ($.car1_cpcounter == 7) {
                        $.car1_x_d1 = $.cp9_x_d1;
                        $.car1_y_d1 = $.cp9_y_d1;
                        $.car1_z_d1 = $.cp9_z_d1;
                    }
                    if ($.car1_cpcounter == 8) {
                        $.car1_x_d1 = $.cp10_x_d1;
                        $.car1_y_d1 = $.cp10_y_d1;
                        $.car1_z_d1 = $.cp10_z_d1;
                    }
                    if ($.car1_cpcounter == 9) {
                        $.car1_x_d1 = $.cp11_x_d1;
                        $.car1_y_d1 = $.cp11_y_d1;
                        $.car1_z_d1 = $.cp11_z_d1;
                    }
                    if ($.car1_cpcounter == 10) {
                        $.car1_x_d1 = $.cp12_x_d1;
                        $.car1_y_d1 = $.cp12_y_d1;
                        $.car1_z_d1 = $.cp12_z_d1;
                    }
                    if ($.car1_cpcounter == 11) {
                        $.car1_x_d1 = $.cp13_x_d1;
                        $.car1_y_d1 = $.cp13_y_d1;
                        $.car1_z_d1 = $.cp13_z_d1;
                    }
                    if ($.car1_cpcounter == 12) {
                        $.car1_x_d1 = $.cp14_x_d1;
                        $.car1_y_d1 = $.cp14_y_d1;
                        $.car1_z_d1 = $.cp14_z_d1;
                    }
                    if ($.car1_cpcounter == 13) {
                        $.car1_x_d1 = $.cp15_x_d1;
                        $.car1_y_d1 = $.cp15_y_d1;
                        $.car1_z_d1 = $.cp15_z_d1;
                    }
                    if ($.car1_cpcounter == 14) {
                        $.car1_x_d1 = $.cp16_x_d1;
                        $.car1_y_d1 = $.cp16_y_d1;
                        $.car1_z_d1 = $.cp16_z_d1;
                    }
                    if ($.car1_cpcounter == 15) {
                        $.car1_x_d1 = $.cp17_x_d1;
                        $.car1_y_d1 = $.cp17_y_d1;
                        $.car1_z_d1 = $.cp17_z_d1;
                    }
                    if ($.car1_cpcounter == 16) {
                        $.car1_x_d1 = $.cp18_x_d1;
                        $.car1_y_d1 = $.cp18_y_d1;
                        $.car1_z_d1 = $.cp18_z_d1;
                    }
                    if ($.car1_cpcounter == 17) {
                        $.car1_x_d1 = $.cp2_x_d1;
                        $.car1_y_d1 = $.cp2_y_d1;
                        $.car1_z_d1 = $.cp2_z_d1;
                        $.ai_car1_locate_size = 6.0;
                    }
                    if ($.car1_cpcounter == 18) {
                        //		AND	position > 0
                        Text.PrintNow('DIAB1_3', 5000, 1); //"~r~You failed to win the race!"
                        // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
                    }
                    if ($.ai_car1_locate_size == 7.0) {
                        $.car1_d1.gotoCoordinates($.car1_x_d1, $.car1_y_d1, $.car1_z_d1);
                    } else {
                        $.car1_d1.gotoCoordinatesAccurate($.car1_x_d1, $.car1_y_d1, $.car1_z_d1);
                    }
                }
            } else {
                if (!$.car1_d1.isInWater()) {
                    $.behind_car1 = 0;
                    $.car1_cpcounter = 0;
                }
                if ($.car1_d1.isInWater()) {
                    if (!$.car1_d1.isOnScreen()) {
                        const _res198 = $.car1_d1.getCoordinates();
                        $.car1_x = _res198.x;
                        $.car1_y = _res198.y;
                        $.car1_z = _res198.z;
                        const _res199 = Path.GetClosestCarNode($.car1_x, $.car1_y, $.car1_z);
                        $.car1_x = _res199.nodeX;
                        $.car1_y = _res199.nodeY;
                        $.car1_z = _res199.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car1_x, $.car1_y, $.car1_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car1_x, $.car1_y, $.car1_z, 3.0)) {
                                $.car1_d1.setCoordinates($.car1_x, $.car1_y, $.car1_z);
                                $.car1_d1.turnToFaceCoord($.car1_x_d1, $.car1_y_d1);
                            }
                        }
                    }
                }
            }

            if (!Car.IsDead($.car2_d1)) {
                $.car2_health = $.car2_d1.getHealth();
                if ($.car2_health < 500) {
                    $.car2_d1.setHealth(1000);
                }
                if (!($.player_cpcounter == $.car2_cpcounter)) {
                    if ($.player_cpcounter < $.car2_cpcounter) {
                        $.behind_car2 = 1;
                    } else {
                        $.behind_car2 = 0;
                    }
                } else {
                    const _res200 = $.car2_d1.getCoordinates();
                    $.car2_x = _res200.x;
                    $.car2_y = _res200.y;
                    $.car2_z = _res200.z;
                    $.difference_x_float_d = $.car2_x - $.player_x_d1;
                    $.difference_y_float_d = $.car2_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.car2_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    const _res201 = $.player.getCoordinates();
                    $.players_x = _res201.x;
                    $.players_y = _res201.y;
                    $.players_z = _res201.z;
                    $.difference_x_float_d = $.players_x - $.player_x_d1;
                    $.difference_y_float_d = $.players_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.players_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    if ($.players_distance_from_cp < $.car2_distance_from_cp) {
                        $.behind_car2 = 0;
                    } else {
                        $.behind_car2 = 1;
                    }
                }
                if ($.car2_d1.locate3D($.car2_stuck_x, $.car2_stuck_y, $.car2_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timere_reset_flag == 0) {
                        $.timere_started = Clock.GetGameTimer();
                        $.timere_reset_flag = 1;
                    }
                    if ($.timere_reset_flag == 1) {
                        $.timere_current = Clock.GetGameTimer();
                        $.timere = $.timere_current - $.timere_started;
                        if ($.timere > 8000) {
                            if (!$.car2_d1.isOnScreen()) {
                                const _res202 = $.car2_d1.getCoordinates();
                                $.car2_x = _res202.x;
                                $.car2_y = _res202.y;
                                $.car2_z = _res202.z;
                                const _res203 = Path.GetClosestCarNode($.car2_x, $.car2_y, $.car2_z);
                                $.car2_x = _res203.nodeX;
                                $.car2_y = _res203.nodeY;
                                $.car2_z = _res203.nodeZ;
                                if (!World.IsPointObscuredByAMissionEntity($.car2_x, $.car2_y, $.car2_z, 4.0, 4.0, 4.0)) {
                                    if (!Camera.IsPointOnScreen($.car2_x, $.car2_y, $.car2_z, 4.0)) {
                                        $.car2_d1.setCoordinates($.car2_x, $.car2_y, $.car2_z);
                                        $.car2_d1.turnToFaceCoord($.car2_x_d1, $.car2_y_d1);
                                        $.timere_reset_flag = 0;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.car2_d1.locate3D($.car2_stuck_x, $.car2_stuck_y, $.car2_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res204 = $.car2_d1.getCoordinates();
                    $.car2_stuck_x = _res204.x;
                    $.car2_stuck_y = _res204.y;
                    $.car2_stuck_z = _res204.z;
                    $.timere_reset_flag = 0;
                }
                if ($.car2_d1.isUpsidedown() && $.car2_d1.isStopped()) {
                    if (!$.car2_d1.isOnScreen()) {
                        const _res205 = $.car2_d1.getCoordinates();
                        $.car2_x = _res205.x;
                        $.car2_y = _res205.y;
                        $.car2_z = _res205.z;
                        const _res206 = Path.GetClosestCarNode($.car2_x, $.car2_y, $.car2_z);
                        $.car2_x = _res206.nodeX;
                        $.car2_y = _res206.nodeY;
                        $.car2_z = _res206.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car2_x, $.car2_y, $.car2_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car2_x, $.car2_y, $.car2_z, 3.0)) {
                                $.car2_d1.setCoordinates($.car2_x, $.car2_y, $.car2_z);
                                $.car2_d1.turnToFaceCoord($.car2_x_d1, $.car2_y_d1);
                            }
                        }
                    }
                }
                if ($.timerb_reset_flag_d1 == 1) {
                    if (!$.car2_d1.isStopped()) {
                        $.timerb_reset_flag_d1 = 0;
                    }
                }
                if ($.car2_d1.isStopped()) {
                    if ($.timerb_reset_flag_d1 == 0) {
                        TIMERB = 0;
                        $.timerb_reset_flag_d1 = 1;
                    }
                    if (TIMERB > 5000 && $.timerb_reset_flag_d1 == 1) {
                        if (!$.car2_d1.isOnScreen()) {
                            const _res207 = $.car2_d1.getCoordinates();
                            $.car2_x = _res207.x;
                            $.car2_y = _res207.y;
                            $.car2_z = _res207.z;
                            const _res208 = Path.GetClosestCarNode($.car2_x, $.car2_y, $.car2_z);
                            $.car2_x = _res208.nodeX;
                            $.car2_y = _res208.nodeY;
                            $.car2_z = _res208.nodeZ;
                            if (!World.IsPointObscuredByAMissionEntity($.car2_x, $.car2_y, $.car2_z, 4.0, 4.0, 4.0)) {
                                if (!Camera.IsPointOnScreen($.car2_x, $.car2_y, $.car2_z, 4.0)) {
                                    $.car2_d1.setCoordinates($.car2_x, $.car2_y, $.car2_z);
                                    $.car2_d1.turnToFaceCoord($.car2_x_d1, $.car2_y_d1);
                                    $.timerb_reset_flag_d1 = 0;
                                }
                            }
                        }
                    }
                }
                if ($.car2_d1.locate3D($.car2_x_d1, $.car2_y_d1, $.car2_z_d1, $.ai_car2_locate_size, $.ai_car2_locate_size, $.ai_car2_locate_size, false)) {
                    ++$.car2_cpcounter;
                    if ($.car2_cpcounter == 1) {
                        $.car2_x_d1 = $.cp3_x_d1;
                        $.car2_y_d1 = $.cp3_y_d1;
                        $.car2_z_d1 = $.cp3_z_d1;
                    }
                    if ($.car2_cpcounter == 2) {
                        $.car2_x_d1 = $.cp4_x_d1;
                        $.car2_y_d1 = $.cp4_y_d1;
                        $.car2_z_d1 = $.cp4_z_d1;
                    }
                    if ($.car2_cpcounter == 3) {
                        $.car2_x_d1 = $.cp5_x_d1;
                        $.car2_y_d1 = $.cp5_y_d1;
                        $.car2_z_d1 = $.cp5_z_d1;
                    }
                    if ($.car2_cpcounter == 4) {
                        $.car2_x_d1 = $.cp6_x_d1;
                        $.car2_y_d1 = $.cp6_y_d1;
                        $.car2_z_d1 = $.cp6_z_d1;
                    }
                    if ($.car2_cpcounter == 5) {
                        $.car2_x_d1 = $.cp7_x_d1;
                        $.car2_y_d1 = $.cp7_y_d1;
                        $.car2_z_d1 = $.cp7_z_d1;
                    }
                    if ($.car2_cpcounter == 6) {
                        $.car2_x_d1 = $.cp8_x_d1;
                        $.car2_y_d1 = $.cp8_y_d1;
                        $.car2_z_d1 = $.cp8_z_d1;
                    }
                    if ($.car2_cpcounter == 7) {
                        $.car2_x_d1 = $.cp9_x_d1;
                        $.car2_y_d1 = $.cp9_y_d1;
                        $.car2_z_d1 = $.cp9_z_d1;
                    }
                    if ($.car2_cpcounter == 8) {
                        $.car2_x_d1 = $.cp10_x_d1;
                        $.car2_y_d1 = $.cp10_y_d1;
                        $.car2_z_d1 = $.cp10_z_d1;
                    }
                    if ($.car2_cpcounter == 9) {
                        $.car2_x_d1 = $.cp11_x_d1;
                        $.car2_y_d1 = $.cp11_y_d1;
                        $.car2_z_d1 = $.cp11_z_d1;
                    }
                    if ($.car2_cpcounter == 10) {
                        $.car2_x_d1 = $.cp12_x_d1;
                        $.car2_y_d1 = $.cp12_y_d1;
                        $.car2_z_d1 = $.cp12_z_d1;
                    }
                    if ($.car2_cpcounter == 11) {
                        $.car2_x_d1 = $.cp13_x_d1;
                        $.car2_y_d1 = $.cp13_y_d1;
                        $.car2_z_d1 = $.cp13_z_d1;
                    }
                    if ($.car2_cpcounter == 12) {
                        $.car2_x_d1 = $.cp14_x_d1;
                        $.car2_y_d1 = $.cp14_y_d1;
                        $.car2_z_d1 = $.cp14_z_d1;
                    }
                    if ($.car2_cpcounter == 13) {
                        $.car2_x_d1 = $.cp15_x_d1;
                        $.car2_y_d1 = $.cp15_y_d1;
                        $.car2_z_d1 = $.cp15_z_d1;
                    }
                    if ($.car2_cpcounter == 14) {
                        $.car2_x_d1 = $.cp16_x_d1;
                        $.car2_y_d1 = $.cp16_y_d1;
                        $.car2_z_d1 = $.cp16_z_d1;
                    }
                    if ($.car2_cpcounter == 15) {
                        $.car2_x_d1 = $.cp17_x_d1;
                        $.car2_y_d1 = $.cp17_y_d1;
                        $.car2_z_d1 = $.cp17_z_d1;
                    }
                    if ($.car2_cpcounter == 16) {
                        $.car2_x_d1 = $.cp18_x_d1;
                        $.car2_y_d1 = $.cp18_y_d1;
                        $.car2_z_d1 = $.cp18_z_d1;
                    }
                    if ($.car2_cpcounter == 17) {
                        $.car2_x_d1 = $.cp2_x_d1;
                        $.car2_y_d1 = $.cp2_y_d1;
                        $.car2_z_d1 = $.cp2_z_d1;
                        $.ai_car2_locate_size = 6.0;
                    }
                    if ($.car2_cpcounter == 18) {
                        //		AND	position > 0
                        Text.PrintNow('DIAB1_3', 5000, 1); //"~r~You failed to win the race!"
                        // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
                    }
                    if ($.ai_car2_locate_size == 7.0) {
                        $.car2_d1.gotoCoordinates($.car2_x_d1, $.car2_y_d1, $.car2_z_d1);
                    } else {
                        $.car2_d1.gotoCoordinatesAccurate($.car2_x_d1, $.car2_y_d1, $.car2_z_d1);
                    }
                }
            } else {
                if (!$.car2_d1.isInWater()) {
                    $.behind_car2 = 0;
                    $.car2_cpcounter = 0;
                }
                if ($.car2_d1.isInWater()) {
                    if (!$.car2_d1.isOnScreen()) {
                        const _res209 = $.car2_d1.getCoordinates();
                        $.car2_x = _res209.x;
                        $.car2_y = _res209.y;
                        $.car2_z = _res209.z;
                        const _res210 = Path.GetClosestCarNode($.car2_x, $.car2_y, $.car2_z);
                        $.car2_x = _res210.nodeX;
                        $.car2_y = _res210.nodeY;
                        $.car2_z = _res210.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car2_x, $.car2_y, $.car2_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car2_x, $.car2_y, $.car2_z, 3.0)) {
                                $.car2_d1.setCoordinates($.car2_x, $.car2_y, $.car2_z);
                                $.car2_d1.turnToFaceCoord($.car2_x_d1, $.car2_y_d1);
                            }
                        }
                    }
                }
            }

            if (!Car.IsDead($.car3_d1)) {
                $.car3_health = $.car3_d1.getHealth();
                if ($.car3_health < 500) {
                    $.car3_d1.setHealth(1000);
                }
                if (!($.player_cpcounter == $.car3_cpcounter)) {
                    if ($.player_cpcounter < $.car3_cpcounter) {
                        $.behind_car3 = 1;
                    } else {
                        $.behind_car3 = 0;
                    }
                } else {
                    const _res211 = $.car3_d1.getCoordinates();
                    $.car3_x = _res211.x;
                    $.car3_y = _res211.y;
                    $.car3_z = _res211.z;
                    $.difference_x_float_d = $.car3_x - $.player_x_d1;
                    $.difference_y_float_d = $.car3_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.car3_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    const _res212 = $.player.getCoordinates();
                    $.players_x = _res212.x;
                    $.players_y = _res212.y;
                    $.players_z = _res212.z;
                    $.difference_x_float_d = $.players_x - $.player_x_d1;
                    $.difference_y_float_d = $.players_y - $.player_y_d1;
                    $.difference_x_float_d = $.difference_x_float_d * $.difference_x_float_d;
                    $.difference_y_float_d = $.difference_y_float_d * $.difference_y_float_d;
                    $.sum_difference_d_xy = $.difference_x_float_d + $.difference_y_float_d;
                    $.players_distance_from_cp = Math.Sqrt($.sum_difference_d_xy);
                    if ($.players_distance_from_cp < $.car3_distance_from_cp) {
                        $.behind_car3 = 0;
                    } else {
                        $.behind_car3 = 1;
                    }
                }
                if ($.car3_d1.locate3D($.car3_stuck_x, $.car3_stuck_y, $.car3_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timerf_reset_flag == 0) {
                        $.timerf_started = Clock.GetGameTimer();
                        $.timerf_reset_flag = 1;
                    }
                    if ($.timerf_reset_flag == 1) {
                        $.timerf_current = Clock.GetGameTimer();
                        $.timerf = $.timerf_current - $.timerf_started;
                        if ($.timerf > 8000) {
                            if (!$.car3_d1.isOnScreen()) {
                                const _res213 = $.car3_d1.getCoordinates();
                                $.car3_x = _res213.x;
                                $.car3_y = _res213.y;
                                $.car3_z = _res213.z;
                                const _res214 = Path.GetClosestCarNode($.car3_x, $.car3_y, $.car3_z);
                                $.car3_x = _res214.nodeX;
                                $.car3_y = _res214.nodeY;
                                $.car3_z = _res214.nodeZ;
                                if (!World.IsPointObscuredByAMissionEntity($.car3_x, $.car3_y, $.car3_z, 4.0, 4.0, 4.0)) {
                                    if (!Camera.IsPointOnScreen($.car3_x, $.car3_y, $.car3_z, 4.0)) {
                                        $.car3_d1.setCoordinates($.car3_x, $.car3_y, $.car3_z);
                                        $.car3_d1.turnToFaceCoord($.car3_x_d1, $.car3_y_d1);
                                        $.timerf_reset_flag = 0;
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.car3_d1.locate3D($.car3_stuck_x, $.car3_stuck_y, $.car3_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res215 = $.car3_d1.getCoordinates();
                    $.car3_stuck_x = _res215.x;
                    $.car3_stuck_y = _res215.y;
                    $.car3_stuck_z = _res215.z;
                    $.timerf_reset_flag = 0;
                }
                if ($.car3_d1.isUpsidedown() && $.car3_d1.isStopped()) {
                    if (!$.car3_d1.isOnScreen()) {
                        const _res216 = $.car3_d1.getCoordinates();
                        $.car3_x = _res216.x;
                        $.car3_y = _res216.y;
                        $.car3_z = _res216.z;
                        const _res217 = Path.GetClosestCarNode($.car3_x, $.car3_y, $.car3_z);
                        $.car3_x = _res217.nodeX;
                        $.car3_y = _res217.nodeY;
                        $.car3_z = _res217.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car3_x, $.car3_y, $.car3_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car3_x, $.car3_y, $.car3_z, 3.0)) {
                                $.car3_d1.setCoordinates($.car3_x, $.car3_y, $.car3_z);
                                $.car3_d1.turnToFaceCoord($.car3_x_d1, $.car3_y_d1);
                            }
                        }
                    }
                }
                if ($.timerc_reset_flag_d1 == 1) {
                    if (!$.car3_d1.isStopped()) {
                        $.timerc_reset_flag_d1 = 0;
                    }
                }
                if ($.car3_d1.isStopped()) {
                    if ($.timerc_reset_flag_d1 == 0) {
                        $.timerc_started = Clock.GetGameTimer();
                        $.timerc_reset_flag_d1 = 1;
                    }
                    if ($.timerc_reset_flag_d1 == 1) {
                        $.timerc_current = Clock.GetGameTimer();
                        $.timerc = $.timerc_current - $.timerc_started;
                        if ($.timerc > 5000) {
                            if (!$.car3_d1.isOnScreen()) {
                                const _res218 = $.car3_d1.getCoordinates();
                                $.car3_x = _res218.x;
                                $.car3_y = _res218.y;
                                $.car3_z = _res218.z;
                                const _res219 = Path.GetClosestCarNode($.car3_x, $.car3_y, $.car3_z);
                                $.car3_x = _res219.nodeX;
                                $.car3_y = _res219.nodeY;
                                $.car3_z = _res219.nodeZ;
                                if (!World.IsPointObscuredByAMissionEntity($.car3_x, $.car3_y, $.car3_z, 4.0, 4.0, 4.0)) {
                                    if (!Camera.IsPointOnScreen($.car3_x, $.car3_y, $.car3_z, 4.0)) {
                                        $.car3_d1.setCoordinates($.car3_x, $.car3_y, $.car3_z);
                                        $.car3_d1.turnToFaceCoord($.car3_x_d1, $.car3_y_d1);
                                        $.timerc_reset_flag_d1 = 0;
                                    }
                                }
                            }
                        }
                    }
                }
                if ($.car3_d1.locate3D($.car3_x_d1, $.car3_y_d1, $.car3_z_d1, $.ai_car3_locate_size, $.ai_car3_locate_size, $.ai_car3_locate_size, false)) {
                    ++$.car3_cpcounter;
                    if ($.car3_cpcounter == 1) {
                        $.car3_x_d1 = $.cp3_x_d1;
                        $.car3_y_d1 = $.cp3_y_d1;
                        $.car3_z_d1 = $.cp3_z_d1;
                    }
                    if ($.car3_cpcounter == 2) {
                        $.car3_x_d1 = $.cp4_x_d1;
                        $.car3_y_d1 = $.cp4_y_d1;
                        $.car3_z_d1 = $.cp4_z_d1;
                    }
                    if ($.car3_cpcounter == 3) {
                        $.car3_x_d1 = $.cp5_x_d1;
                        $.car3_y_d1 = $.cp5_y_d1;
                        $.car3_z_d1 = $.cp5_z_d1;
                    }
                    if ($.car3_cpcounter == 4) {
                        $.car3_x_d1 = $.cp6_x_d1;
                        $.car3_y_d1 = $.cp6_y_d1;
                        $.car3_z_d1 = $.cp6_z_d1;
                    }
                    if ($.car3_cpcounter == 5) {
                        $.car3_x_d1 = $.cp7_x_d1;
                        $.car3_y_d1 = $.cp7_y_d1;
                        $.car3_z_d1 = $.cp7_z_d1;
                    }
                    if ($.car3_cpcounter == 6) {
                        $.car3_x_d1 = $.cp8_x_d1;
                        $.car3_y_d1 = $.cp8_y_d1;
                        $.car3_z_d1 = $.cp8_z_d1;
                    }
                    if ($.car3_cpcounter == 7) {
                        $.car3_x_d1 = $.cp9_x_d1;
                        $.car3_y_d1 = $.cp9_y_d1;
                        $.car3_z_d1 = $.cp9_z_d1;
                    }
                    if ($.car3_cpcounter == 8) {
                        $.car3_x_d1 = $.cp10_x_d1;
                        $.car3_y_d1 = $.cp10_y_d1;
                        $.car3_z_d1 = $.cp10_z_d1;
                    }
                    if ($.car3_cpcounter == 9) {
                        $.car3_x_d1 = $.cp11_x_d1;
                        $.car3_y_d1 = $.cp11_y_d1;
                        $.car3_z_d1 = $.cp11_z_d1;
                    }
                    if ($.car3_cpcounter == 10) {
                        $.car3_x_d1 = $.cp12_x_d1;
                        $.car3_y_d1 = $.cp12_y_d1;
                        $.car3_z_d1 = $.cp12_z_d1;
                    }
                    if ($.car3_cpcounter == 11) {
                        $.car3_x_d1 = $.cp13_x_d1;
                        $.car3_y_d1 = $.cp13_y_d1;
                        $.car3_z_d1 = $.cp13_z_d1;
                    }
                    if ($.car3_cpcounter == 12) {
                        $.car3_x_d1 = $.cp14_x_d1;
                        $.car3_y_d1 = $.cp14_y_d1;
                        $.car3_z_d1 = $.cp14_z_d1;
                    }
                    if ($.car3_cpcounter == 13) {
                        $.car3_x_d1 = $.cp15_x_d1;
                        $.car3_y_d1 = $.cp15_y_d1;
                        $.car3_z_d1 = $.cp15_z_d1;
                    }
                    if ($.car3_cpcounter == 14) {
                        $.car3_x_d1 = $.cp16_x_d1;
                        $.car3_y_d1 = $.cp16_y_d1;
                        $.car3_z_d1 = $.cp16_z_d1;
                    }
                    if ($.car3_cpcounter == 15) {
                        $.car3_x_d1 = $.cp17_x_d1;
                        $.car3_y_d1 = $.cp17_y_d1;
                        $.car3_z_d1 = $.cp17_z_d1;
                    }
                    if ($.car3_cpcounter == 16) {
                        $.car3_x_d1 = $.cp18_x_d1;
                        $.car3_y_d1 = $.cp18_y_d1;
                        $.car3_z_d1 = $.cp18_z_d1;
                    }
                    if ($.car3_cpcounter == 17) {
                        $.car3_x_d1 = $.cp2_x_d1;
                        $.car3_y_d1 = $.cp2_y_d1;
                        $.car3_z_d1 = $.cp2_z_d1;
                        $.ai_car3_locate_size = 6.0;
                    }
                    if ($.car3_cpcounter == 18) {
                        //		AND	position > 0
                        Text.PrintNow('DIAB1_3', 5000, 1); //"~r~You failed to win the race!"
                        // SCM GOTO → mission_d1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_d1_failed'); // fallback: would break linear control flow
                    }
                    if ($.ai_car3_locate_size == 7.0) {
                        $.car3_d1.gotoCoordinates($.car3_x_d1, $.car3_y_d1, $.car3_z_d1);
                    } else {
                        $.car3_d1.gotoCoordinatesAccurate($.car3_x_d1, $.car3_y_d1, $.car3_z_d1);
                    }
                }
            } else {
                if (!$.car3_d1.isInWater()) {
                    $.behind_car3 = 0;
                    $.car3_cpcounter = 0;
                }
                if ($.car3_d1.isInWater()) {
                    if (!$.car3_d1.isOnScreen()) {
                        const _res220 = $.car3_d1.getCoordinates();
                        $.car3_x = _res220.x;
                        $.car3_y = _res220.y;
                        $.car3_z = _res220.z;
                        const _res221 = Path.GetClosestCarNode($.car3_x, $.car3_y, $.car3_z);
                        $.car3_x = _res221.nodeX;
                        $.car3_y = _res221.nodeY;
                        $.car3_z = _res221.nodeZ;
                        if (!World.IsPointObscuredByAMissionEntity($.car3_x, $.car3_y, $.car3_z, 4.0, 4.0, 4.0)) {
                            if (!Camera.IsPointOnScreen($.car3_x, $.car3_y, $.car3_z, 3.0)) {
                                $.car3_d1.setCoordinates($.car3_x, $.car3_y, $.car3_z);
                                $.car3_d1.turnToFaceCoord($.car3_x_d1, $.car3_y_d1);
                            }
                        }
                    }
                }
            }
        }

        // Mission d1 failed
    }
}

async function mission_d1_failed() {
    Text.PrintBig('M_FAIL', 2000, 1);
    return;

    // mission d1 passed
}

async function mission_d1_passed() {
    $.game_timer_end_d1 = Clock.GetGameTimer();
    $.game_timer_end_d1 = $.game_timer_end_d1 - $.game_timer_start_d1;
    $.game_timer_end_d1 = $.game_timer_end_d1 / 1000;
    $.player.addScore(10000);
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1);
    Text.PrintWithNumberNow('DIAB1_2', $.game_timer_end_d1, 5000, 1); //"Race time: ~1~ seconds"
    Stat.RegisterElBurroTime($.game_timer_end_d1);
    $.player.clearWantedLevel();
    Audio.PlayMissionPassedTune(1);
    //CLEAR_THREAT_FOR_PED_TYPE PEDTYPE_GANG_DIABLO THREAT_PLAYER1

    if ($.flag_diablo1_passed_before == 0) {
        Stat.RegisterMissionPassed('DIAB1');
        Stat.PlayerMadeProgress(1);
        $.flag_diablo_mission1_passed = 1;
        // START_NEW_SCRIPT diablo_mission2_loop
        $.flag_diablo1_passed_before = 1;
    }

    return;

    // mission cleanup
}

async function mission_cleanup_d1() {
    Path.SwitchRoadsOn(1034.0, -956.0, 12.0, 1063.0, -847.0, 20.0);

    $.blip_car1_d1.remove();
    $.blip_car2_d1.remove();
    $.blip_car3_d1.remove();
    $.blip_chase_d1.remove();
    $.second_blip.remove();
    Streaming.MarkModelAsNoLongerNeeded(14 /* PED_GANG_DIABLO_A */);
    Streaming.MarkModelAsNoLongerNeeded(15 /* PED_GANG_DIABLO_B */);
    Streaming.MarkModelAsNoLongerNeeded(105 /* CAR_CHEETAH */);
    Hud.ClearCounter($.game_timer_end_d1);

    ONMISSION = false;
    $.flag_player_on_diablo_mission = 0;
    Mission.Finish();
    return;
}

export async function diablo1() {
    // MissionBoundary
    // *****************************************************************************************
    // ***********************************    Diablo 1 	  **************************************
    // *********************************** Low Rider Race **************************************
    // *****************************************************************************************
    // *** There will be a race to see who is the man. It will start at the top of the 		 ***
    // *** bridge and encompass most of the industrial sector. The player must get to the 	 ***
    // *** end before his three Hispanic rivals.											 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_d1
    await mission_start_d1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_d1_failed
        await mission_d1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_d1
    await mission_cleanup_d1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    //VAR_INT	player_cpcounter_test//TEST VARS

    // VAR_FLOAT car1_x car1_y car1_z car2_x car2_y car2_z car3_x car3_y car3_z players_x players_y players_z
    // VAR_FLOAT difference_x_float_d difference_y_float_d sum_difference_d_xy ai_car1_locate_size ai_car2_locate_size ai_car3_locate_size
    // VAR_FLOAT car2_distance_from_cp car1_distance_from_cp car3_distance_from_cp players_distance_from_cp
    // VAR_FLOAT car1_stuck_x car1_stuck_y car1_stuck_z
    // VAR_FLOAT car2_stuck_x car2_stuck_y car2_stuck_z
    // VAR_FLOAT car3_stuck_x car3_stuck_y car3_stuck_z
    // VAR_FLOAT player_x_d1 player_y_d1 player_z_d1
    // VAR_FLOAT car1_x_d1 car1_y_d1 car1_z_d1
    // VAR_FLOAT car2_x_d1 car2_y_d1 car2_z_d1
    // VAR_FLOAT car3_x_d1 car3_y_d1 car3_z_d1
    // VAR_FLOAT blip_2nd_x blip_2nd_y blip_2nd_z
    // VAR_FLOAT cp2_x_d1 cp2_y_d1 cp2_z_d1
    // VAR_FLOAT cp3_x_d1 cp3_y_d1 cp3_z_d1
    // VAR_FLOAT cp4_x_d1 cp4_y_d1 cp4_z_d1
    // VAR_FLOAT cp5_x_d1 cp5_y_d1 cp5_z_d1
    // VAR_FLOAT cp6_x_d1 cp6_y_d1 cp6_z_d1
    // VAR_FLOAT cp7_x_d1 cp7_y_d1 cp7_z_d1
    // VAR_FLOAT cp8_x_d1 cp8_y_d1 cp8_z_d1
    // VAR_FLOAT cp9_x_d1 cp9_y_d1 cp9_z_d1
    // VAR_FLOAT cp10_x_d1 cp10_y_d1 cp10_z_d1
    // VAR_FLOAT cp11_x_d1 cp11_y_d1 cp11_z_d1
    // VAR_FLOAT cp12_x_d1 cp12_y_d1 cp12_z_d1
    // VAR_FLOAT cp13_x_d1 cp13_y_d1 cp13_z_d1
    // VAR_FLOAT cp14_x_d1 cp14_y_d1 cp14_z_d1
    // VAR_FLOAT cp15_x_d1 cp15_y_d1 cp15_z_d1
    // VAR_FLOAT cp16_x_d1 cp16_y_d1 cp16_z_d1
    // VAR_FLOAT cp17_x_d1 cp17_y_d1 cp17_z_d1
    // VAR_FLOAT cp18_x_d1 cp18_y_d1 cp18_z_d1
    // VAR_INT blip_chase_d1 second_blip blip_car1_d1 blip_car2_d1 blip_car3_d1
    // VAR_INT car1_d1 car2_d1 car3_d1 car1_health car2_health car3_health
    // VAR_INT ped_car1_driver_d1 ped_car2_driver_d1 ped_car3_driver_d1
    // VAR_INT game_timer_start_d1 game_timer_end_d1 player_cpcounter car1_cpcounter car2_cpcounter car3_cpcounter
    // VAR_INT behind_car1 behind_car2 behind_car3 position timera_reset_flag_d1 timerb_reset_flag_d1
    // VAR_INT timerc timerc_started timerc_current timerc_reset_flag_d1
    // VAR_INT timerd timerd_started timerd_current timerd_reset_flag
    // VAR_INT timere timere_started timere_current timere_reset_flag
    // VAR_INT timerf timerf_started timerf_current timerf_reset_flag

    // ****************************************Mission Start************************************
}
