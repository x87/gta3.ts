// Generated from Main/Industrial/8ball.sc
import { $ } from '../../vars.mts';

// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// **************************************8Ball Mission**************************************
// **************************************Luigi's Girls**************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

async function body() {

    // SCRIPT_NAME eight

    // Mission start stuff

    // GOSUB mission_start_eightball

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_eightball_failed
    // ENDIF

    // GOSUB mission_cleanup_eightball

    // Variables for mission

    // VAR_INT radar_blip_car1_eightball

    // VAR_INT radar_blip_coord1_eightball

    // VAR_INT radar_blip_coord2_eightball

    // VAR_INT eightball

    // VAR_INT car_eightball

    // VAR_INT van_8ball

    // VAR_INT flag_blip_on_eightball

    // VAR_INT flag_player_got_cops_message_eightball

    // VAR_INT flag_player_got_car_message1_eightball

    // VAR_INT radar_blip_ped1_eightball

    // VAR_INT flag_player_in_area

    // VAR_INT flag_eightball_in_area

    // Luigi variables for missions

    // VAR_INT radar_blip_coord1_lm1

    // VAR_INT radar_blip_ped1_lm1

    // VAR_INT radar_blip_ped2_lm1

    // VAR_INT girl1_lm1

    // VAR_INT car_lm1

    // VAR_INT flag_player_had_car_message_lm1

    // VAR_INT flag_player_not_in_car_message_lm1

    // VAR_INT no_of_passengers_car_lm1

    // VAR_INT flag_girl1_in_car_lm1

    // VAR_INT passenger_count_lm1

    // VAR_INT total_space_in_car_lm1

    // VAR_INT flag_blip_on_girl1_lm1

    // VAR_INT flag_coord_blip_on

    // VAR_INT flag_luigi_coord1_blip_created

    // VAR_INT flag_luigi_ped1_blip_created

    // VAR_INT flag_girl1_in_group_lm1

    // VAR_INT flag_player_had_vehicle_message_lm1

    // VAR_INT flag_player_in_area_lm1

    // VAR_INT flag_eightball_in_area_lm1

    // VAR_INT flag_help_8ball1

    // VAR_INT flag_help_8ball2

    // car variables for restart

    // VAR_FLOAT car_8ball_x

    // VAR_FLOAT car_8ball_y

    // VAR_FLOAT car_8ball_z

    // VAR_FLOAT car_8ball_heading

    // VAR_INT flag_car_message_8ball

    // VAR_INT cop_car1_8ball

    // VAR_INT cop_car2_8ball

    // VAR_INT cop1_8ball

    // VAR_INT cop2_8ball

    // VAR_INT flag_brake_message

    // VAR_INT flag_hbrake_message

    // VAR_INT flag_look2_8ball

    // VAR_INT flag_look3_8ball

    // VAR_INT flag_misty_stop

    // VAR_INT flag_player_had_camera_message_8ball

    // VAR_INT car_colour1_8ball

    // VAR_INT car_colour2_8ball

    // VAR_INT flag_girl_in_group_lm1

    // VAR_INT radar_blip_car1_lm1

    // VAR_INT flag_timer_stopped_flashing_8ball

    // VAR_INT fire_sound_8ball

    // ***************************************Mission Start*************************************

    mission_start_eightball: {
        // $.flag_player_on_mission = 1;
        ONMISSION = true;

        $.flag_player_on_eightball_mission = 1;

        Stat.RegisterMissionGiven();

        Weather.ForceNow(1 /* WEATHER_CLOUDY */);

        Clock.SetTimeOfDay(4, 0);

        Streaming.LoadScene(807.0, -937.0, 36.6); // THIS MIGHT HAVE TO COME OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!

        await asyncWait(0);

        $.flag_blip_on_eightball = 0;

        $.flag_player_got_cops_message_eightball = 0;

        $.flag_player_got_car_message1_eightball = 0;

        $.flag_player_in_area = 0;

        $.flag_eightball_in_area = 0;

        // luigi variables

        $.flag_player_had_car_message_lm1 = 0;

        $.flag_player_not_in_car_message_lm1 = 0;

        $.no_of_passengers_car_lm1 = 0;

        $.flag_girl1_in_car_lm1 = 0;

        $.passenger_count_lm1 = 0;

        $.total_space_in_car_lm1 = 0;

        $.flag_blip_on_girl1_lm1 = 0;

        $.flag_coord_blip_on = 0;

        $.blob_flag = 1;

        // luigi blip stuff

        $.flag_luigi_coord1_blip_created = 0;
        $.flag_luigi_ped1_blip_created = 0;
        $.flag_girl1_in_group_lm1 = 0;
        $.flag_player_had_vehicle_message_lm1 = 0;

        $.flag_player_in_area_lm1 = 0;

        $.flag_eightball_in_area_lm1 = 0;

        $.flag_help_8ball1 = 0;

        $.flag_help_8ball2 = 0;

        $.flag_car_message_8ball = 0;

        $.flag_brake_message = 0;

        $.flag_hbrake_message = 0;

        $.flag_look2_8ball = 0;

        $.flag_look3_8ball = 0;

        $.flag_misty_stop = 0;

        $.flag_player_had_camera_message_8ball = 0;

        $.flag_girl_in_group_lm1 = 0;

        $.flag_timer_stopped_flashing_8ball = 0;

        if ($.flag_reached_hideout == 0) {
            Streaming.RequestModel(111 /* CAR_KURUMA */);
            Streaming.LoadSpecialCharacter(1, 'eight');
            Streaming.LoadAllModelsNow();
            $.car_8ball_x = 0.0;
            $.car_8ball_y = 0.0;
            $.car_8ball_z = 0.0;
            $.car_8ball_heading = 0.0;
            $.car_colour1_8ball = 0;
            $.car_colour2_8ball = 0;

            if ($.flag_bridge_created_8ball == 0) {
                $.damagea = ScriptObject.CreateNoOffset(725 /* bridgefuka */, 715.746, -937.908, 40.194);
                $.damagea.dontRemove();
                $.damageb = ScriptObject.CreateNoOffset(724 /* bridgefukb */, 787.835, -939.24, 38.971);
                $.damageb.dontRemove();
                $.flag_bridge_created_8ball = 1;
            }

            $.player.setHeading(180.0);

            $.car_eightball = Car.Create(111 /* CAR_KURUMA */, 812.0131, -945.5528, 35.7889); // new Aaron position

            $.car_eightball.changeColor(58, 1);

            $.car_eightball.setHeading(262.3871);

            $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, 26 /* PED_SPECIAL1 */, 811.9, -942.47, -100.0); // New Aaron position

            $.eightball.setAnimGroup(9 /* ANIM_GANG2_PED */);

            $.eightball.clearThreatSearch();

            $.eightball.turnToFaceCoord(811.9, -939.95, 35.8); // New Aaron position

            $.eightball.lookAtPlayerAlways($.player);

            Restart.OverrideNext(811.9, -939.95, 35.8, 180.0); //Restarts at the bridge

            $.playersdoor.setHeading(0.0);

            Hud.SwitchWidescreen(true /* ON */);

            $.player.setControl(false /* OFF */);

            Fx.AddParticleEffect(4, 791.661, -936.916, 38.313, false /* FALSE */); //SMOKE ON CARS
            Fx.AddParticleEffect(4, 788.337, -938.467, 38.073, false /* FALSE */);
            Fx.AddParticleEffect(4, 786.493, -942.398, 39.8, false /* FALSE */);

            Fx.AddParticleEffect(10, 783.572, -938.549, 38.448, false /* FALSE */); //FIRE ON CARS
            Fx.AddParticleEffect(10, 790.537, -935.67, 38.005, false /* FALSE */);
            Fx.AddParticleEffect(10, 789.295, -938.882, 38.127, false /* FALSE */);

            $.fire_sound_8ball.remove();

            $.fire_sound_8ball = Sound.AddContinuous(790.537, -935.67, 38.005, 102 /* SOUND_PRETEND_FIRE_LOOP */);

            Game.SetPoliceIgnorePlayer($.player, true /* ON */);

            Camera.SetFixedPosition(785.0, -936.77, 39.75, 0.0, 0.0, 0.0); // New position

            Camera.PointAtChar($.eightball, 15 /* fixed */, 2 /* jump_cut */);

            Audio.LoadMissionAudio('lib_a1' as any);

            Camera.SetFadingColor(0, 0, 0);

            Camera.DoFade(1000, 1 /* FADE_IN */);

            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }

            Camera.SetFadingColor(0, 0, 0);

            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0);
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            await asyncWait(2000);

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            Camera.SetFixedPosition(804.5746, -933.048, 39.9828, 0.0, 0.0, 0.0);

            Camera.PointAtPoint(805.1921, -933.7454, 39.6193, 2 /* JUMP_CUT */);

            Text.PrintBig('EBAL', 15000, 2); //"Give me Liberty"

            Audio.PlayMissionAudio();

            Text.PrintNow('EBAL_A', 5000, 1); //"I know a place on the edge of the Red Light District where we can lay low,

            while (!Audio.HasMissionAudioFinished()) {
                await asyncWait(0);
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            Text.ClearThisPrint('EBAL_A');

            Audio.LoadMissionAudio('lib_a2' as any);

            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0);
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            Audio.PlayMissionAudio();

            Text.PrintNow('EBAL_A1', 5000, 1); //"but my hands are badly burned so you'll have to drive.""

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_A1');
            }

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            $.eightball.stopLooking();

            $.eightball.setObjEnterCarAsPassenger($.car_eightball);

            while (!$.eightball.isInCar($.car_eightball)) {
                await asyncWait(0);
                if (Audio.HasMissionAudioFinished()) {
                    Text.ClearThisPrint('EBAL_A1');
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_A1');
            }

            // This will tune the radio to HEAD RADIO

            if ($.flag_done_radio_8ball == 0) {
                Audio.SetRadioChannel(0 /* HEAD_RADIO */, 0);
                $.flag_done_radio_8ball = 1;
            } else {
                Audio.SetRadioChannel(0 /* HEAD_RADIO */, -1);
            }

            $.eightball.setCantBeDraggedOut(true /* TRUE */);

            Hud.SwitchWidescreen(false /* OFF */);

            Camera.Restore();

            $.player.setControl(true /* ON */);

            Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

            $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);

            // SCM GOSUB car_gen_start_8ball
            await car_gen_start_8ball();
            // fallback if label was not emitted as async function: no-op continues linearly

            await asyncWait(500);

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_A1');
            }

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            // gives the player the help message for entering cars

            $.controlmode = Pad.GetControllerMode();

            if ($.controlmode == 0) {
                Text.PrintHelp('EBAL_1'); //"Press Triangle to enter a vehicle."
            }

            if ($.controlmode == 1) {
                Text.PrintHelp('EBAL_1'); //"Press Triangle to enter a vehicle."
            }

            if ($.controlmode == 2) {
                Text.PrintHelp('EBAL_1B'); //"Press Triangle to enter a vehicle."
            }

            if ($.controlmode == 3) {
                Text.PrintHelp('EBAL_1'); //"Press Triangle to enter a vehicle."
            }

            TIMERB = 0;

            await asyncWait(3000);

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            // Waiting for the player to get into the car

            while (!$.player.isInCar($.car_eightball) || !$.eightball.isInCar($.car_eightball)) {
                await asyncWait(0);
                if (TIMERB < 120000) {
                    $.player.clearWantedLevel();
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            // creates two cops cars that drive onto the bridge

            $.cop_car1_8ball = Car.Create(116 /* car_police */, 1083.2, -945.0, 13.8);

            $.cop1_8ball = Char.CreateInsideCar($.cop_car1_8ball, 4 /* PEDTYPE_CIVMALE */, 1 /* PED_COP */);

            $.cop1_8ball.clearThreatSearch();

            $.cop_car1_8ball.setHeading(90.0);

            $.cop_car1_8ball.switchSiren(true /* ON */);

            $.cop_car1_8ball.setDrivingStyle(2);

            $.cop_car1_8ball.setCruiseSpeed(20.0);

            $.cop_car1_8ball.gotoCoordinates(713.9, -916.7, 42.0);

            $.cop_car2_8ball = Car.Create(116 /* car_police */, 1074.1, -946.7, 13.8);

            $.cop2_8ball = Char.CreateInsideCar($.cop_car2_8ball, 4 /* PEDTYPE_CIVMALE */, 1 /* PED_COP */);

            $.cop2_8ball.clearThreatSearch();

            $.cop_car2_8ball.setHeading(90.0);

            $.cop_car2_8ball.switchSiren(true /* ON */);

            $.cop_car2_8ball.setDrivingStyle(2);

            $.cop_car2_8ball.setCruiseSpeed(20.0);

            $.cop_car2_8ball.gotoCoordinates(718.7, -922.2, 42.0);

            $.radar_blip_car1_eightball.remove();

            // Accelertation help messages

            await asyncWait(500);

            if (TIMERB < 120000) {
                $.player.clearWantedLevel();
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            $.controlmode = Pad.GetControllerMode();

            if ($.controlmode == 0) {
                Text.PrintHelp('HELP4_A'); //"Press the / button to accelerate."
            }

            if ($.controlmode == 1) {
                Text.PrintHelp('HELP4_A'); //"Press the / button to accelerate."
            }

            if ($.controlmode == 2) {
                Text.PrintHelp('HELP4_A'); //"Press the / button to accelerate."
            }

            if ($.controlmode == 3) {
                Text.PrintHelp('HELP4_D'); //"Press the / button to accelerate."
            }

            $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);

            TIMERA = 0;

            $.blob_flag = 1;

            if (TIMERB < 120000) {
                $.player.clearWantedLevel();
            }

            Audio.LoadMissionAudio('lib_a' as any);

            TIMERA = 0;

            while (TIMERA < 10000) {
                await asyncWait(0);
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                    if (!$.player.isInCar($.car_eightball)) {
                        $.blob_flag = 0;
                        if ($.flag_car_message_8ball == 0) {
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                            $.radar_blip_coord1_eightball.remove();
                            $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                            $.flag_car_message_8ball = 1;
                        }
                    } else {
                        $.blob_flag = 1;
                        if ($.flag_car_message_8ball == 1) {
                            $.radar_blip_car1_eightball.remove();
                            $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
                            $.flag_car_message_8ball = 0;
                        }
                    }
                }
                if ($.player.locateInCar2D(875.0, -309.0, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
                    Text.PrintHelp('HELP1'); //Stop in the centre of the red dome."
                    $.flag_help_8ball1 = 1;
                }
            }

            Text.PrintHelp('EBAL_3'); //"Follow the "blip" to find the hideout!"

            Hud.FlashObject(8 /* HUD_FLASH_RADAR */);

            TIMERA = 0;

            // waiting for the player to get to Luigi's

            while (
                !$.player.isStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, $.blob_flag) ||
                !$.eightball.isStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, false /* FALSE */) ||
                !$.player.isSittingInCar($.car_eightball) ||
                !$.eightball.isSittingInCar($.car_eightball) ||
                !Audio.HasMissionAudioLoaded()
            ) {
                await asyncWait(0);
                if (TIMERB < 120000) {
                    $.player.clearWantedLevel();
                }
                if ($.flag_timer_stopped_flashing_8ball == 0) {
                    if (TIMERA > 4000) {
                        Hud.FlashObject(-1);
                        $.flag_timer_stopped_flashing_8ball = 1;
                    }
                }
                if ($.flag_brake_message == 0) {
                    if (TIMERA >= 10000) {
                        $.controlmode = Pad.GetControllerMode();
                        if ($.controlmode == 0) {
                            Text.PrintHelp('HELP5_A'); //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
                        }
                        if ($.controlmode == 1) {
                            Text.PrintHelp('HELP5_A'); //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
                        }
                        if ($.controlmode == 2) {
                            Text.PrintHelp('HELP5_A'); //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
                        }
                        if ($.controlmode == 3) {
                            Text.PrintHelp('HELP5_D'); //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
                        }
                        $.flag_brake_message = 1;
                        TIMERA = 0;
                    }
                }
                if (TIMERA > 10000) {
                    if ($.flag_hbrake_message == 0) {
                        $.controlmode = Pad.GetControllerMode();
                        if ($.controlmode == 0) {
                            Text.PrintHelp('HELP6_A'); //"Press the R1 button to apply the vehicle's handbrake."
                        }
                        if ($.controlmode == 1) {
                            Text.PrintHelp('HELP6_A'); //"Press the R1 button to apply the vehicle's handbrake."
                        }
                        if ($.controlmode == 2) {
                            Text.PrintHelp('HELP6_C'); //"Press the R1 button to apply the vehicle's handbrake."
                        }
                        if ($.controlmode == 3) {
                            Text.PrintHelp('HELP6_D'); //"Press the R1 button to apply the vehicle's handbrake."
                        }
                        $.flag_hbrake_message = 1;
                    }
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                    if (!$.player.isInCar($.car_eightball)) {
                        $.blob_flag = 0;
                        if ($.flag_car_message_8ball == 0) {
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                            $.radar_blip_coord1_eightball.remove();
                            $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                            $.flag_car_message_8ball = 1;
                        }
                    } else {
                        $.blob_flag = 1;
                        if ($.flag_car_message_8ball == 1) {
                            $.radar_blip_car1_eightball.remove();
                            $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
                            $.flag_car_message_8ball = 0;
                        }
                    }
                }
                if ($.player.locateInCar2D(875.0, -309.0, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
                    Text.PrintHelp('HELP1'); //Stop in the centre of the red dome."
                    $.flag_help_8ball1 = 1;
                }
            }

            Text.ClearHelp();

            $.radar_blip_coord1_eightball.remove();

            // ******************************Player and 8ball are at base scripted cutscene*************

            Hud.SwitchWidescreen(true /* ON */);

            $.player.clearWantedLevel();

            Game.SetPoliceIgnorePlayer($.player, true /* ON */);

            $.player.setControl(false /* OFF */);

            if (!Car.IsDead($.cop_car1_8ball)) {
                $.cop_car1_8ball.delete();
            }

            if (!Car.IsDead($.cop_car2_8ball)) {
                $.cop_car2_8ball.delete();
            }

            World.ClearArea(886.8, -310.1, -100.0, 2.0, true /* TRUE */);

            const _res163 = $.car_eightball.getCoordinates();
            $.car_8ball_x = _res163.x;
            $.car_8ball_y = _res163.y;
            $.car_8ball_z = _res163.z;

            $.car_8ball_heading = $.car_eightball.getHeading();

            const _res164 = $.car_eightball.getColors();
            $.car_colour1_8ball = _res164.color1;
            $.car_colour2_8ball = _res164.color2;

            while (!$.playersdoor.rotate(210.0, 10.0, false /* FALSE */)) {
                await asyncWait(0);
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            World.ClearArea(889.7, -308.2, 8.6, 3.0, true /* TRUE */); // This should remove any stuff that is in the way for the cut-scene

            $.script_controlled_player = $.player.getChar();

            $.script_controlled_player.clearThreatSearch();

            $.eightball.setObjLeaveCar($.car_eightball);

            while ($.eightball.isInCar($.car_eightball)) {
                await asyncWait(0);
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            Audio.PlayMissionAudio();

            Text.PrintNow('EBAL_B', 7000, 1); //"This is the place! Let's get off the street and find a change of clothes!"

            $.eightball.setObjRunToCoord(892.7, -308.6);

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_B');
            }

            await asyncWait(1000);

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_B');
            }

            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }

            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }

            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_B');
            }

            $.script_controlled_player.setObjLeaveCar($.car_eightball);

            World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);

            if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
                Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0); //high camera that points to the water tower
                Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
            } else {
                Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0); //low new camera that points to the save house
                Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
            }

            while ($.script_controlled_player.isInCar($.car_eightball)) {
                await asyncWait(0);
                if (Audio.HasMissionAudioFinished()) {
                    Text.ClearThisPrint('EBAL_B');
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
            }

            //Make player walk into the doors and get a change of clothes

            $.script_controlled_player.setObjRunToCoord(892.4, -308.5);

            TIMERB = 0;

            while (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
                await asyncWait(0);
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if ($.flag_player_in_area == 0) {
                    if ($.script_controlled_player.locateOnFoot2D(892.4, -308.5, 0.5, 0.5, false /* FALSE */)) {
                        $.script_controlled_player.setObjRunToCoord(892.4, -305.6);
                        $.flag_player_in_area = 1;
                    }
                }

                if ($.flag_eightball_in_area == 0) {
                    if ($.eightball.locateOnFoot2D(892.7, -308.6, 0.5, 0.5, false /* FALSE */)) {
                        $.eightball.setObjRunToCoord(894.2, -304.3);
                        $.flag_eightball_in_area = 1;
                    }
                }
                if ($.flag_player_in_area == 1) {
                    if ($.script_controlled_player.locateOnFoot2D(892.4, -305.6, 0.5, 0.5, false /* FALSE */)) {
                        $.flag_player_in_area = 2;
                    }
                }
                if ($.flag_eightball_in_area == 1) {
                    if ($.eightball.locateOnFoot2D(894.2, -304.3, 0.5, 0.5, false /* FALSE */)) {
                        $.flag_eightball_in_area = 2;
                    }
                }
                if (TIMERB >= 10000) {
                    if (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
                        $.player.setCoordinates(892.4, -305.6, 7.7);
                        $.script_controlled_player.setIdle();
                        $.eightball.setCoordinates(894.2, -304.3, 7.7);
                        $.eightball.setIdle();
                        break; // SCM GOTO → mission_bloke_stuck_8ball
                    }
                }
            }

            mission_bloke_stuck_8ball: {
                Camera.SetFixedPosition(886.8, -310.1, 9.9, 0.0, 0.0, 0.0);

                Camera.PointAtPoint(887.7, -309.8, 9.8, 2 /* JUMP_CUT */);

                $.eightball.setIdle();

                $.script_controlled_player.setObjNoObj();

                Text.PrintHelp('S_PROMP'); //"When not on a mission you can save your game here, this will also advance time six hours."

                await asyncWait(4000);

                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }

                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }

                Text.PrintHelp('S_PROM2'); //"The garage next door can store one car."

                Camera.PointAtPoint(887.8, -310.5, 9.7, 1 /* interpolation */);

                $.player.setCoordinates(895.9, -311.4, 7.7);

                $.eightball.setCoordinates(884.3, -309.2, 7.6);

                // Clothes change

                //8-BAll change

                if (!Char.IsDead($.eightball)) {
                    $.eightball.undress('eight2');
                    while (!Streaming.HasModelLoaded(26 /* PED_SPECIAL1 */)) {
                        await asyncWait(0);
                        if (Car.IsDead($.car_eightball)) {
                            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        } else {
                            if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                                Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                                // SCM GOTO → mission_eightball_failed
                                throw new Error('unresolved GOTO mission_eightball_failed');
                            }
                        }
                    }
                    if (!Char.IsDead($.eightball)) {
                        $.eightball.dress();
                    }
                }

                //Player change

                if (!Char.IsDead($.script_controlled_player)) {
                    $.script_controlled_player.undress('player');
                    while (!Streaming.HasModelLoaded(0 /* PED_PLAYER */)) {
                        await asyncWait(0);
                        if (Car.IsDead($.car_eightball)) {
                            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        } else {
                            if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                                Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                                // SCM GOTO → mission_eightball_failed
                                throw new Error('unresolved GOTO mission_eightball_failed');
                            }
                        }
                    }
                    if (!Char.IsDead($.script_controlled_player)) {
                        $.script_controlled_player.dress();
                    }
                }

                await asyncWait(3000);

                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }

                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }

                $.player.setCoordinates(883.5, -308.2, 7.6);

                Weather.Release();

                $.eightball.setObjEnterCarAsPassenger($.car_eightball);

                await asyncWait(1500);

                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }

                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }

                $.script_controlled_player.setObjEnterCarAsDriver($.car_eightball);

                World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);

                if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
                    Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0); //high camera that points to the water tower
                    Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
                } else {
                    Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0); //low new camera that points to the save house
                    Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
                }

                Text.ClearHelp();

                while (!$.player.isInCar($.car_eightball) || !$.eightball.isInCar($.car_eightball)) {
                    await asyncWait(0);
                    if (Car.IsDead($.car_eightball)) {
                        if (Char.IsDead($.eightball)) {
                            Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        } else {
                            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        }
                    } else {
                        if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                            Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        }
                    }
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }

                while (!$.playersdoor.rotate(0.0, 10.0, false /* FALSE */)) {
                    await asyncWait(0);
                    if (Car.IsDead($.car_eightball)) {
                        if (Char.IsDead($.eightball)) {
                            Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        } else {
                            Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        }
                    } else {
                        if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                            Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                            // SCM GOTO → mission_eightball_failed
                            throw new Error('unresolved GOTO mission_eightball_failed');
                        }
                    }
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }

                Camera.RestoreJumpcut();

                Camera.SetInFrontOfPlayer();

                Hud.SwitchWidescreen(false /* OFF */);

                $.player.setControl(true /* ON */);

                Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

                //ADD_BLIP_FOR_COORD 906.2 -426.0 -100.0 radar_blip_coord2_eightball

                $.blob_flag = 1;

                // *************Restart function for 8ball and the player at players hideout***************
            }
        }
    }

    hideout_reached: {
        if ($.flag_reached_hideout == 1) {
            Hud.SwitchWidescreen(true /* ON */);
            $.player.setControl(false /* OFF */);
            Game.SetPoliceIgnorePlayer($.player, true /* ON */);
            $.player.setHeading(90.0);
            World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);
            if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
                Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0); //high camera that points to the water tower
                Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
            } else {
                Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0); //low new camera that points to the save house
                Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
            }
            $.playersdoor.setHeading(0.0);
            Streaming.LoadSpecialCharacter(1, 'eight2');
            Streaming.RequestModel(111 /* CAR_KURUMA */);
            Streaming.LoadAllModelsNow();

            //CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL1 887.2 -308.4 7.6 eightball

            $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, 26 /* PED_SPECIAL1 */, 884.3, -309.2, 7.6);
            $.eightball.setAnimGroup(9 /* ANIM_GANG2_PED */);
            $.eightball.setHeading(90.0);
            $.eightball.clearThreatSearch();
            $.car_eightball = Car.Create(111 /* CAR_KURUMA */, $.car_8ball_x, $.car_8ball_y, $.car_8ball_z);
            $.car_eightball.setHeading($.car_8ball_heading);
            $.car_eightball.changeColor($.car_colour1_8ball, $.car_colour2_8ball);
            Weather.Release();
            $.script_controlled_player.setObjEnterCarAsDriver($.car_eightball);
            $.eightball.setObjEnterCarAsPassenger($.car_eightball);
            while (!$.player.isInCar($.car_eightball) || !$.eightball.isInCar($.car_eightball)) {
                await asyncWait(0);
                if (Car.IsDead($.car_eightball)) {
                    if (Char.IsDead($.eightball)) {
                        Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                } else {
                    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }
            $.eightball.setCantBeDraggedOut(true /* TRUE */);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
            Hud.SwitchWidescreen(false /* OFF */);
            $.player.setControl(true /* ON */);
            Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        }

        // **************************************end of the restart stuff***************************

        if ($.flag_reached_hideout == 0) {
            World.RemoveParticleEffectsInArea(804.02, -948.03, 30.0, 765.15, -924.32, 50.0);
            $.fire_sound_8ball.remove();
            $.damagea.delete();
            $.damageb.delete();
            World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, 218 /* LOD_land014 */, 855 /* indhelix_barrier */);
            World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, true /* TRUE */);
        }
        $.flag_reached_hideout = 1;

        Restart.OverrideNext(883.5, -308.2, 7.6, 90.0); // Players hideout

        if (Char.IsDead($.eightball)) {
            Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
            // SCM GOTO → mission_eightball_failed
            throw new Error('unresolved GOTO mission_eightball_failed');
        }

        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0); //Luigis blip

        Audio.LoadMissionAudio('lib_b' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (!$.player.isInCar($.car_eightball)) {
                    $.blob_flag = 0;
                    if ($.flag_car_message_8ball == 0) {
                        Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                        $.radar_blip_coord2_eightball.remove();
                        $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                        $.flag_car_message_8ball = 1;
                    }
                } else {
                    $.blob_flag = 1;
                    if ($.flag_car_message_8ball == 1) {
                        $.radar_blip_car1_eightball.remove();
                        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0); //Luigis
                        $.flag_car_message_8ball = 0;
                    }
                }
            }
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        }

        Audio.PlayMissionAudio();

        Text.PrintNow('EBAL_D', 5000, 1); //"I know a guy, he's connected, Names Luigi.

        await asyncWait(2000);

        if (Car.IsDead($.car_eightball)) {
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            } else {
                Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        } else {
            if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            if (!$.player.isInCar($.car_eightball)) {
                $.blob_flag = 0;
                if ($.flag_car_message_8ball == 0) {
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                    $.radar_blip_coord2_eightball.remove();
                    $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                    $.flag_car_message_8ball = 1;
                }
            } else {
                $.blob_flag = 1;
                if ($.flag_car_message_8ball == 1) {
                    $.radar_blip_car1_eightball.remove();
                    $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0); //Luigis
                    $.flag_car_message_8ball = 0;
                }
            }
        }

        if (Char.IsDead($.eightball)) {
            Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
            // SCM GOTO → mission_eightball_failed
            throw new Error('unresolved GOTO mission_eightball_failed');
        }

        Text.PrintNow('EBAL_D1', 7000, 1); //"Me an' him go back so I could probably get you some work."

        //waiting for the player to got to Luigi's

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (!$.player.isInCar($.car_eightball)) {
                    $.blob_flag = 0;
                    if ($.flag_car_message_8ball == 0) {
                        Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                        $.radar_blip_coord2_eightball.remove();
                        $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                        $.flag_car_message_8ball = 1;
                    }
                } else {
                    $.blob_flag = 1;
                    if ($.flag_car_message_8ball == 1) {
                        $.radar_blip_car1_eightball.remove();
                        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0); //Luigis
                        $.flag_car_message_8ball = 0;
                    }
                }
            }
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        }

        Text.ClearThisPrint('EBAL_D');

        Text.ClearThisPrint('EBAL_D1');

        // waiting for the player to get to luigi's

        Audio.LoadMissionAudio('lib_c' as any);

        while (
            !$.player.isStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag) ||
            !$.eightball.isStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false /* FALSE */) ||
            !$.player.isInCar($.car_eightball) ||
            !$.eightball.isInCar($.car_eightball) ||
            !Audio.HasMissionAudioLoaded()
        ) {
            await asyncWait(0);
            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (!$.player.isInCar($.car_eightball)) {
                    $.blob_flag = 0;
                    if ($.flag_car_message_8ball == 0) {
                        Text.PrintNow('IN_VEH', 5000, 1); //"Get back into the car and get on with the mission!"
                        $.radar_blip_coord2_eightball.remove();
                        $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
                        $.flag_car_message_8ball = 1;
                    }
                } else {
                    $.blob_flag = 1;
                    if ($.flag_car_message_8ball == 1) {
                        $.radar_blip_car1_eightball.remove();
                        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0); //Luigis
                        $.flag_car_message_8ball = 0;
                    }
                }
            }
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            if ($.player.locateInCar2D(902.8, -425.6, 15.0, 15.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball2 == 0) {
                Text.PrintHelp('HELP1'); //Stop in the centre of the red dome."
                $.flag_help_8ball2 = 1;
            }
        }

        Text.ClearHelp();

        $.radar_blip_coord2_eightball.remove();

        Hud.SwitchWidescreen(true /* ON */);

        $.player.clearWantedLevel();

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        $.player.setControl(false /* OFF */);

        World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */); // This should get rid of any stuff for the cut-scene

        $.script_controlled_player = $.player.getChar();

        $.script_controlled_player.clearThreatSearch();

        $.script_controlled_player.setObjLeaveCar($.car_eightball);

        $.eightball.setObjLeaveCar($.car_eightball);

        Audio.PlayMissionAudio();

        Text.PrintNow('EBAL_G', 7000, 1); //"Here's Luigi's club. c'mon lets go round the back and use the service door."

        while ($.script_controlled_player.isInCar($.car_eightball)) {
            await asyncWait(0);
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }
            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_G');
            }
        }

        if (Char.IsDead($.eightball)) {
            Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
            // SCM GOTO → mission_eightball_failed
            throw new Error('unresolved GOTO mission_eightball_failed');
        }

        while ($.eightball.isInCar($.car_eightball)) {
            await asyncWait(0);
            if (Car.IsDead($.car_eightball)) {
                if (Char.IsDead($.eightball)) {
                    Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicle's wrecked!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            } else {
                if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1); //You've flipped your wheels!"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('EBAL_G');
            }
        }

        $.car_eightball.markAsNoLongerNeeded();

        $.script_controlled_player.setObjGotoCoordOnFoot(897.1, -426.3);

        $.eightball.setObjGotoCoordOnFoot(897.3, -424.6);

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        }

        Text.ClearThisPrint('EBAL_G');

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        $.eightball.setCantBeDraggedOut(false /* FALSE */);

        Text.ClearHelp();

        // ****************************Player and eightball cut-scene at luigi's********************

        $.breakout_timer_start = Clock.GetGameTimer();

        $.breakout_diff = 0;

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0);
            if (Char.IsDead($.eightball)) {
                Text.PrintNow('EBAL_4', 5000, 1); //"8-Balls dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            $.breakout_timer = Clock.GetGameTimer();
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
        }

        $.player.makeSafeForCutscene();

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        Streaming.Switch(false /* OFF */);

        Text.PrintBig('LM1', 15000, 2); //"Luigi's Girls"

        Streaming.RequestModel(257 /* indhibuild3 */);
        Streaming.RequestModel(256 /* luigiclubout */);
        Streaming.RequestModel(243 /* luigiineerclub */);

        Streaming.LoadSpecialCharacter(2, 'MICKY');
        Streaming.LoadSpecialCharacter(3, 'LUIGI');

        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'LUDOOR');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'MICKYH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'EIGHTH');
        Streaming.LoadSpecialModel(188 /* cut_obj4 */, 'LUIGIH');
        Streaming.LoadSpecialModel(189 /* cut_obj5 */, 'PLAYERH');

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Streaming.LoadAllModelsNow();

        World.SetPedDensityMultiplier(0.0);

        World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);

        if (!Char.IsDead($.eightball)) {
            $.eightball.setObjWaitOnFoot();
        }

        $.script_controlled_player.setObjWaitOnFoot();

        // Cutscene stuff

        while (
            !Streaming.HasSpecialCharacterLoaded(2) ||
            !Streaming.HasSpecialCharacterLoaded(3) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */)
        ) {
            await asyncWait(0);
        }

        while (
            !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
            !Streaming.HasModelLoaded(188 /* cut_obj4 */) ||
            !Streaming.HasModelLoaded(189 /* cut_obj5 */) ||
            !Streaming.HasModelLoaded(257 /* indhibuild3 */) ||
            !Streaming.HasModelLoaded(256 /* luigiclubout */) ||
            !Streaming.HasModelLoaded(243 /* luigiineerclub */)
        ) {
            await asyncWait(0);
        }

        $.eightball.delete();

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, false /* FALSE */);

        Cutscene.Load('l1_lg');

        Cutscene.SetOffset(900.782, -427.523, 13.829);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);

        $.cs_player.setAnim('player');

        $.cs_micky = CutsceneObject.Create(27 /* PED_SPECIAL2 */);

        $.cs_micky.setAnim('micky');

        $.cs_eight = CutsceneObject.Create(26 /* PED_SPECIAL1 */);

        $.cs_eight.setAnim('eight2');

        $.cs_luigi = CutsceneObject.Create(28 /* PED_SPECIAL3 */);

        $.cs_luigi.setAnim('luigi');

        $.cs_mickyhead = CutsceneHead.Create($.cs_micky, 186 /* CUT_OBJ2 */);

        $.cs_mickyhead.setAnim('micky');

        $.cs_eighthead = CutsceneHead.Create($.cs_eight, 187 /* CUT_OBJ3 */);

        $.cs_eighthead.setAnim('eight');

        $.cs_luigihead = CutsceneHead.Create($.cs_luigi, 188 /* CUT_OBJ4 */);

        $.cs_luigihead.setAnim('luigi');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 189 /* CUT_OBJ5 */);

        $.cs_playerhead.setAnim('player');

        $.cs_ludoor = CutsceneObject.Create(185 /* cut_obj1 */);

        $.cs_ludoor.setAnim('LUDOOR');

        World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */);
        $.player.setCoordinates(896.6, -426.2, 13.9);

        $.player.setHeading(270.0);

        TIMERA = 0;

        while (TIMERA < 3500) {
            await asyncWait(0);
        }

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */); // This should get rid of anything in the alleway

        World.ClearArea(892.8, -425.5, 13.9, 3.0, true /* TRUE */);

        World.ClearArea(896.3, -425.6, 13.8, 3.0, true /* TRUE */);

        World.ClearArea(899.7, -425.7, 14.0, 0.5, true /* TRUE */);

        World.SwitchRubbish(false /* OFF */);

        Cutscene.Start();

        $.cs_time = Cutscene.GetTime();

        $.player.setVisible(false /* OFF */);

        // Displays cutscene text

        while ($.cs_time < 11165) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_H', 10000, 1); //"Wait here while I go in and talk to Luigi."

        while ($.cs_time < 13416) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('EBAL_H');

        //PRINT_NOW ( EBAL_I ) 10000 1 //"Da boss will be out to see you shortly..."

        while ($.cs_time < 30834) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_J', 10000, 1); //"8-Ball's got some business up stairs."

        while ($.cs_time < 33186) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_K', 10000, 1); //"Maybe you can do me a favor."

        while ($.cs_time < 35235) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_L', 10000, 1); //"One of my girls needs a ride so grab a car and pick up Misty from the clinic. Then bring her back here"

        while ($.cs_time < 41551) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_M', 10000, 1); //"Remember no one messes with my girls"

        while ($.cs_time < 45634) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_N', 10000, 1); //"So keep your hands on the wheel!"

        while ($.cs_time < 47560) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('EBAL_O', 10000, 1); //"If you don't mess this up there might be more work for you."

        while ($.cs_time < 51911) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('EBAL_O');

        while ($.cs_time < 52500) {
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

        Camera.SetBehindPlayer();

        await asyncWait(500);

        Streaming.Switch(true /* ON */);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(true /* ON */);

        Streaming.LoadScene(920.3, -425.4, 15.0);

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */);

        Streaming.UnloadSpecialCharacter(1);

        Streaming.UnloadSpecialCharacter(2);

        Streaming.UnloadSpecialCharacter(3);

        Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);

        Streaming.MarkModelAsNoLongerNeeded(186 /* cut_obj2 */);

        Streaming.MarkModelAsNoLongerNeeded(187 /* cut_obj3 */);

        Streaming.MarkModelAsNoLongerNeeded(188 /* cut_obj4 */);

        Streaming.MarkModelAsNoLongerNeeded(189 /* cut_obj5 */);

        Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */);

        Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */);

        Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */);

        $.player.setControl(true /* ON */);

        World.SetPedDensityMultiplier(1.0);

        // ************************************************END OF CUT_SCENE*************************

        // *****************************************LUIGI'S GIRLS***********************************

        Streaming.LoadSpecialCharacter(2, 'MISTY');

        Text.PrintNow('EBAL_5', 5000, 1); //"Get a vehicle!"

        // Waiting for the player to be in a car

        while (!Streaming.HasSpecialCharacterLoaded(2)) {
            await asyncWait(0);
        }

        // Creates the first girl

        $.girl1_lm1 = Char.Create(21 /* PEDTYPE_SPECIAL */, 27 /* PED_SPECIAL2 */, 1144.6, -592.8, 13.9);

        $.girl1_lm1.clearThreatSearch();

        $.girl1_lm1.setHeading(90.0);

        $.girl1_lm1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);

        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);

        $.flag_blip_on_girl1_lm1 = 1;

        Audio.LoadMissionAudio('lib_d' as any);

        while (!$.player.isInAnyCar() || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
            if ($.player.isInAnyCar()) {
                $.car_lm1 = $.player.storeCarIsIn();
            }
        }

        $.controlmode = Pad.GetControllerMode();

        if ($.controlmode == 0) {
            Text.ClearHelp();
            Text.PrintHelp('RADIO_A'); //"Press the L1 button to cycle through the radio stations."
        }

        if ($.controlmode == 1) {
            Text.ClearHelp();
            Text.PrintHelp('RADIO_B'); //"Press the SELECT button to cycle through the radio stations.
        }

        if ($.controlmode == 2) {
            Text.ClearHelp();
            Text.PrintHelp('RADIO_C'); //"Press the L3 button to cycle through the radio stations."
        }

        if ($.controlmode == 3) {
            Text.ClearHelp();
            Text.PrintHelp('RADIO_D'); //"Press the | button to cycle through the radio stations."
        }

        Text.PrintNow('EBAL_6', 5000, 1); //"Pick up Misty!"

        // Waiting for the player and the girls all to be in the one car

        while ($.flag_girl1_in_car_lm1 == 0) {
            await asyncWait(0);
            if ($.flag_girl_in_group_lm1 == 0) {
                if (Char.IsDead($.girl1_lm1)) {
                    Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if ($.flag_misty_stop == 0) {
                    if ($.player.locateInCarChar2D($.girl1_lm1, 20.0, 20.0, false /* FALSE */)) {
                        Text.PrintHelp('LM1_7'); //"Stop the vehicle next to Misty and allow her to enter it."
                        $.flag_misty_stop = 1;
                    }
                }
                if (!$.player.isInAnyCar()) {
                    if ($.flag_player_had_vehicle_message_lm1 == 0) {
                        Text.PrintNow('IN_VEH2', 5000, 1); //"Get a vehicle and get on with the mission!"
                        if ($.flag_blip_on_girl1_lm1 == 1) {
                            $.radar_blip_ped1_lm1.remove();
                            $.flag_blip_on_girl1_lm1 = 0;
                        }
                        $.flag_player_had_vehicle_message_lm1 = 1;
                    }
                } else {
                    $.car_lm1 = $.player.storeCarIsIn();
                    if ($.flag_player_had_vehicle_message_lm1 == 1) {
                        Text.PrintNow('EBAL_6', 5000, 1); //"Pick up Misty!"
                        if ($.flag_blip_on_girl1_lm1 == 0) {
                            $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                            $.flag_blip_on_girl1_lm1 = 1;
                        }
                        $.flag_player_had_vehicle_message_lm1 = 0;
                    }
                }
                if ($.player.isInAnyCar()) {
                    $.car_lm1 = $.player.storeCarIsIn();
                    if ($.player.locateInCarChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */)) {
                        if ($.player.isStopped()) {
                            $.girl1_lm1.setObjEnterCarAsPassenger($.car_lm1);
                            while (!$.girl1_lm1.isInCar($.car_lm1) || !$.player.isInCar($.car_lm1)) {
                                await asyncWait(0);
                                if (Char.IsDead($.girl1_lm1)) {
                                    Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                                    // SCM GOTO → mission_eightball_failed
                                    throw new Error('unresolved GOTO mission_eightball_failed');
                                }
                                if (Car.IsDead($.car_lm1)) {
                                    if (Char.IsDead($.girl1_lm1)) {
                                        Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                                        // SCM GOTO → mission_eightball_failed
                                        throw new Error('unresolved GOTO mission_eightball_failed');
                                    } else {
                                        Text.PrintNow('WRECKED', 5000, 1); //"The Vehicles wrecked"
                                        // SCM GOTO → mission_eightball_failed
                                        throw new Error('unresolved GOTO mission_eightball_failed');
                                    }
                                }
                                if ($.girl1_lm1.isInCar($.car_lm1)) {
                                    $.girl1_lm1.setCantBeDraggedOut(true /* TRUE */);
                                }
                                if (!$.player.isInCar($.car_lm1)) {
                                    if ($.flag_player_had_vehicle_message_lm1 == 0) {
                                        Text.PrintNow('IN_VEH', 5000, 1); //"Get a vehicle and get on with the mission!"
                                        if ($.flag_blip_on_girl1_lm1 == 1) {
                                            $.radar_blip_ped1_lm1.remove();
                                            $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
                                            $.flag_blip_on_girl1_lm1 = 0;
                                        }
                                        $.flag_player_had_vehicle_message_lm1 = 1;
                                    }
                                } else {
                                    if ($.flag_player_had_vehicle_message_lm1 == 1) {
                                        Text.PrintNow('EBAL_6', 5000, 1); //"Pick up Misty!"
                                        if ($.flag_blip_on_girl1_lm1 == 0) {
                                            $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                                            $.radar_blip_car1_lm1.remove();
                                            $.flag_blip_on_girl1_lm1 = 1;
                                        }
                                        $.flag_player_had_vehicle_message_lm1 = 0;
                                    }
                                }
                            }
                            $.radar_blip_ped1_lm1.remove();
                            $.radar_blip_car1_lm1.remove();
                            $.flag_blip_on_girl1_lm1 = 0;
                            $.flag_girl_in_group_lm1 = 1;
                        }
                    }
                }
            }
            if ($.flag_girl_in_group_lm1 == 1) {
                if (Char.IsDead($.girl1_lm1)) {
                    Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
                if (Car.IsDead($.car_lm1)) {
                    if (Char.IsDead($.girl1_lm1)) {
                        Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1); //"The Vehicles wrecked"
                        // SCM GOTO → mission_eightball_failed
                        throw new Error('unresolved GOTO mission_eightball_failed');
                    }
                }
                if (!$.player.isInCar($.car_lm1)) {
                    if ($.flag_player_had_car_message_lm1 == 0) {
                        Text.PrintNow('IN_VEH', 5000, 1); //Get into the car and get on with the mission"
                        $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
                        $.flag_player_had_car_message_lm1 = 1;
                    }
                }
                if ($.player.isInCar($.car_lm1)) {
                    if ($.girl1_lm1.isInCar($.car_lm1)) {
                        Text.PrintNow('LM1_9', 10000, 1); //"Hey I'm Misty!"
                        Audio.PlayMissionAudio();
                        $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
                        $.flag_girl1_in_car_lm1 = 1;
                    }
                    if ($.flag_player_had_car_message_lm1 == 1) {
                        $.radar_blip_car1_lm1.remove();
                        $.flag_player_had_car_message_lm1 = 0;
                    }
                }
            }
        }

        $.radar_blip_ped1_lm1.remove();

        $.girl1_lm1.followPlayer($.player);

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            } else {
                if (!$.girl1_lm1.isInPlayersGroup($.player) && $.flag_blip_on_girl1_lm1 == 0) {
                    Text.PrintNow('HEY4', 5000, 1); //"You have left Misty behind go and get her!"
                    $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                    $.flag_blip_on_girl1_lm1 = 1;
                }
                if ($.player.locateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
                    $.girl1_lm1.followPlayer($.player);
                    //PRINT_NOW ( LM1_2 ) 7000 1 //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
                    $.radar_blip_ped1_lm1.remove();
                    $.flag_blip_on_girl1_lm1 = 0;
                }
            }
            if (Car.IsDead($.car_lm1)) {
                if (Char.IsDead($.girl1_lm1)) {
                    Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                } else {
                    Text.PrintNow('WRECKED', 5000, 1); //"The Vehicles wrecked"
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }
        }

        Text.ClearThisPrint('LM1_9');

        Text.PrintNow('LM1_2', 7000, 1); //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"

        $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);

        $.blob_flag = 1;

        Text.PrintHelp('LOOK_A'); //"Press and hold the ~h~L2 button to look left~w~ while in a vehicle."

        TIMERA = 0;

        // waiting for the player to get to luigi's

        while (
            !$.girl1_lm1.isStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag) ||
            !$.player.isStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false /* FALSE */)
        ) {
            await asyncWait(0);
            if ($.flag_player_had_camera_message_8ball == 0) {
                $.controlmode = Pad.GetControllerMode();
                if (TIMERA > 10000) {
                    if ($.controlmode == 0) {
                        Text.PrintHelp('CAM_A'); //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
                        $.flag_player_had_camera_message_8ball = 1;
                    }
                    if ($.controlmode == 0) {
                        Text.PrintHelp('CAM_B'); //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
                        $.flag_player_had_camera_message_8ball = 1;
                    }
                    if ($.controlmode == 0) {
                        Text.PrintHelp('CAM_A'); //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
                        $.flag_player_had_camera_message_8ball = 1;
                    }
                    if ($.controlmode == 0) {
                        Text.PrintHelp('CAM_A'); //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
                        $.flag_player_had_camera_message_8ball = 1;
                    }
                }
            }
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            } else {
                if (!$.girl1_lm1.isInPlayersGroup($.player) && $.flag_blip_on_girl1_lm1 == 0) {
                    Text.PrintNow('HEY4', 5000, 1); //"You have left Misty behind go and get her!"
                    $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                    $.radar_blip_coord1_lm1.remove();
                    $.blob_flag = 0;
                    $.flag_blip_on_girl1_lm1 = 1;
                }
                if ($.player.locateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
                    $.girl1_lm1.followPlayer($.player);
                    Text.PrintNow('LM1_2', 7000, 1); //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
                    $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);
                    $.radar_blip_ped1_lm1.remove();
                    $.blob_flag = 1;
                    $.flag_blip_on_girl1_lm1 = 0;
                }
            }
        }

        $.radar_blip_coord1_lm1.remove();

        $.girl1_lm1.leaveGroup();

        // *********************************MISTY CUT AT END****************************************

        Hud.SwitchWidescreen(true /* ON */);

        $.player.setControl(false /* OFF */);

        $.player.clearWantedLevel();

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */); // This should get rid of any stuff for the cut-scene

        Streaming.RequestModel(257 /* indhibuild3 */);
        Streaming.RequestModel(256 /* luigiclubout */);
        Streaming.RequestModel(243 /* luigiineerclub */);

        if ($.girl1_lm1.isInAnyCar()) {
            $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
            $.car_lm1 = $.girl1_lm1.storeCarIsIn();
            $.girl1_lm1.setObjLeaveCar($.car_lm1);
            while ($.girl1_lm1.isInAnyCar()) {
                await asyncWait(0);
                if (Char.IsDead($.girl1_lm1)) {
                    Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                    // SCM GOTO → mission_eightball_failed
                    throw new Error('unresolved GOTO mission_eightball_failed');
                }
            }
        }

        while (!Streaming.HasModelLoaded(257 /* indhibuild3 */) || !Streaming.HasModelLoaded(256 /* luigiclubout */) || !Streaming.HasModelLoaded(243 /* luigiineerclub */)) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        }

        // Misty walks to the top of the alleyway

        $.girl1_lm1.setObjGotoCoordOnFoot(900.17, -425.4);

        TIMERB = 0;

        while (TIMERB < 1000) {
            await asyncWait(0);
            if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
                // SCM GOTO → mission_eightball_failed
                throw new Error('unresolved GOTO mission_eightball_failed');
            }
        }

        if (Char.IsDead($.girl1_lm1)) {
            Text.PrintNow('MISTY1', 5000, 1); //"Misty's dead!
            // SCM GOTO → mission_eightball_failed
            throw new Error('unresolved GOTO mission_eightball_failed');
        }

        $.girl1_lm1.setCoordinates(898.9, -425.8, 13.9);
        $.girl1_lm1.setHeading(90.0);

        $.girl1_lm1.setObjGotoCoordOnFoot(887.1, -425.22);

        Hud.SwitchWidescreen(true /* ON */);
        Camera.SetFixedPosition(882.6, -425.6, 14.4, 0.0, 0.0, 0.0);

        Camera.PointAtPoint(890.2, -421.1, 15.0, 2 /* jump_cut */);

        Text.PrintWithNumberBig('M_PASS', 1500, 5000, 1); //"Mission Passed!"
        $.player.addScore(1500);
        Audio.PlayMissionPassedTune(1); //plays the mission complete tune

        TIMERB = 0;

        while (TIMERB < 5000) {
            await asyncWait(0);
        }

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1000, 0 /* FADE_OUT */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        await asyncWait(0);

        Camera.SetBehindPlayer();

        await asyncWait(0);

        Hud.SwitchWidescreen(false /* OFF */);

        await asyncWait(0);

        Camera.RestoreJumpcut();

        await asyncWait(750);

        Camera.DoFade(250, 1 /* FADE_IN */);

        $.player.setControl(true /* ON */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);

        // SCM GOTO → mission_eightball_passed
    }
}

async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    $.flag_eightball_mission_launched = 0;

    if ($.flag_reached_hideout == 0) {
        Restart.CriticalMission(811.9, -939.95, 35.8, 180.0); // New bridge restart
    } else {
        Restart.CriticalMission(883.5, -308.2, 7.6, 90.0); // Player hideout
    }

    Mission.Finish(); //	marks models as no longer needed so that they can be deleted before the player is teleported

    while (!$.player.isPlaying()) {
        await asyncWait(0);
    }
}

async function onPassed() {
    Restart.CancelOverride();
    $.flag_eightball_mission_passed = 1;
    Stat.RegisterMissionPassed('LM1');
    Stat.PlayerMadeProgress(1);
    $.flag_luigi_mission1_passed = 1;
    $.player.clearWantedLevel();
    $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */); // New blip down alleyway
    // START_NEW_SCRIPT luigi_mission2_loop
    // START_NEW_SCRIPT blob_help_loop
    // START_NEW_SCRIPT luigi_message
}

async function cleanup() {
    // $.flag_player_on_mission = 0;
    ONMISSION = false;
    $.flag_player_on_eightball_mission = 0;
    World.RemoveParticleEffectsInArea(804.02, -948.03, 30.0, 765.15, -924.32, 50.0);
    $.fire_sound_8ball.remove();
    Camera.SetFadingColor(0, 0, 0);
    Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */);
    Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */);
    Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */);
    Streaming.MarkModelAsNoLongerNeeded(111 /* CAR_KURUMA */);
    $.radar_blip_coord1_eightball.remove();
    $.radar_blip_coord2_eightball.remove();
    $.radar_blip_car1_eightball.remove();
    $.eightball.delete();
    $.girl1_lm1.delete();
    $.radar_blip_coord1_lm1.remove();
    $.radar_blip_ped1_lm1.remove();
    $.radar_blip_car1_lm1.remove();
    Hud.FlashObject(-1);

    if (!Car.IsDead($.cop_car1_8ball)) {
        $.cop_car1_8ball.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.cop_car2_8ball)) {
        $.cop_car2_8ball.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.girl1_lm1)) {
        $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
    }

    Mission.Finish();
}

async function car_gen_start_8ball() {
    // Switches on the car generators from Greasy Joes and Fish Factory

    $.gen_car44.switch(101);

    $.gen_car45.switch(101);

    $.gen_car46.switch(101);

    $.gen_car47.switch(101);

    $.gen_car48.switch(101);

    $.gen_car49.switch(101);

    // switches on the car generators from the fuzz ball

    $.gen_car28.switch(101);

    $.gen_car29.switch(101);

    $.gen_car1.switch(101);

    $.gen_car2.switch(101);

    $.gen_car3.switch(101);

    $.gen_car4.switch(101);

    $.gen_car5.switch(101);

    $.gen_car6.switch(101);

    $.gen_car6.switch(101);

    $.gen_car9.switch(101);

    $.gen_car10.switch(101);

    $.gen_car11.switch(101);

    $.gen_car12.switch(101);

    $.gen_car13.switch(101);

    $.gen_car15.switch(101);

    $.gen_car16.switch(101);

    $.gen_car17.switch(101);

    $.gen_car18.switch(101);

    $.gen_car57.switch(101);

    $.gen_car58.switch(101);

    $.gen_car19.switch(101);

    $.gen_car20.switch(101);

    $.gen_car21.switch(101);

    $.gen_car22.switch(101);

    $.gen_car24.switch(101);

    $.gen_car25.switch(101);

    $.gen_car59.switch(101);

    $.gen_car23.switch(101);

    $.gen_car30.switch(101);

    $.gen_car31.switch(101);

    $.gen_car53.switch(101);

    $.gen_car8.switch(101);

    $.gen_car32.switch(101);

    $.gen_car34.switch(101);

    $.gen_car36.switch(101);

    $.gen_car37.switch(101);

    $.gen_car38.switch(101);

    $.gen_car40.switch(101);

    $.gen_car41.switch(101);

    $.gen_car42.switch(101);

    $.gen_car43.switch(101);

    $.gen_car54.switch(101);

    $.gen_car55.switch(101);

    $.gen_car56.switch(101);

    $.gen_car33.switch(101);

    $.gen_car51.switch(101);

    $.gen_car52.switch(101);

    $.gen_car64.switch(101);

    $.com_car1.switch(101);

    $.com_car2.switch(101);

    $.com_car25.switch(101);

    $.com_car26.switch(101);

    $.com_car3.switch(101);

    $.com_car4.switch(101);

    $.com_car5.switch(101);

    $.com_car6.switch(101);

    $.com_car7.switch(101);

    $.com_car8.switch(101);

    $.com_car9.switch(101);

    $.com_car10.switch(101);

    $.com_car11.switch(101);

    $.com_car12.switch(101);

    $.com_car20.switch(101);

    $.com_car21.switch(101);

    $.com_car27.switch(101);

    $.com_car28.switch(101);

    $.com_car29.switch(101);

    $.com_car30.switch(101);

    $.com_car31.switch(101);

    $.com_car32.switch(101);

    $.com_car33.switch(101);

    $.com_car34.switch(101);

    $.com_car35.switch(101);

    $.com_car36.switch(101);

    $.com_car37.switch(101);

    $.com_car38.switch(101);

    $.com_car39.switch(101);

    $.com_car40.switch(101);

    $.gen_car60.switch(0);

    $.gen_car61.switch(0);

    $.gen_car62.switch(0);

    $.com_car41.switch(101);

    $.com_car42.switch(101);

    $.com_car43.switch(101);

    $.com_car44.switch(101);

    $.com_car45.switch(101);

    $.gen_car35.switch(101);

    $.com_car15.switch(101);

    $.com_car16.switch(101);

    $.com_car17.switch(101);

    $.com_car19.switch(101);

    $.com_car24.switch(101);

    $.com_car13.switch(101);

    $.com_car23.switch(0);

    $.com_car14.switch(101);

    $.com_car22.switch(101);

    $.phil_car.switch(101);

    $.com_car46.switch(101);

    $.com_car47.switch(101);

    $.com_car48.switch(101);

    $.com_car49.switch(101);

    $.special_tank.switch(0);

    $.sub_car1.switch(101);

    $.sub_car2.switch(101);

    $.sub_car3.switch(101);

    $.sub_car4.switch(101);

    $.sub_car5.switch(101);

    $.sub_car6.switch(101);

    $.sub_car7.switch(101);

    $.sub_car25.switch(101);

    $.gen_car63.switch(0);

    $.sub_car40.switch(101);

    $.sub_car41.switch(101);

    $.sub_car42.switch(101);

    $.sub_car43.switch(101);

    $.sub_car44.switch(101);

    $.sub_car45.switch(101);

    $.sub_car46.switch(101);

    $.sub_car8.switch(101);

    $.sub_car9.switch(101);

    $.sub_car10.switch(101);

    $.sub_car11.switch(101);

    $.sub_car12.switch(101);

    $.sub_car13.switch(101);

    $.sub_car14.switch(101);

    $.sub_car15.switch(101);

    $.sub_car16.switch(101);

    $.sub_car19.switch(101);

    $.sub_car20.switch(101);

    $.sub_car17.switch(101);

    $.sub_car18.switch(101);

    $.sub_car21.switch(101);

    $.sub_car22.switch(101);

    $.sub_car23.switch(101);

    $.sub_car24.switch(101);

    $.sub_car30.switch(101);

    $.sub_car31.switch(101);

    $.rc_van1.switch(101);

    $.rc_van2.switch(101);

    $.rc_van3.switch(101);

    $.rc_van4.switch(101);
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
