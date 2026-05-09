// Generated from Main/Industrial/debug.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_debug() {
  await asyncWait(0);
  //CHEAT MODE ON
  if (Pad.IsButtonPressed(1 /* PAD2 */, 14 /* SQUARE */) && Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */) && cheat_mode_on_flag == 0) {
    //CHEAT MODE ON
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 17 /* CIRCLE */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 12 /* START */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */))) {
      //CHEAT MODE ON
      Text.PrintNow(CHEATON, 2000, 1);
      cheat_mode_on = 1;
      cheat_mode_on_flag = 1;
    }
  }
  if (!(Pad.IsButtonPressed(1 /* PAD2 */, 14 /* SQUARE */)) || !(Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */))) {
    if (cheat_mode_on_flag == 1) {
      cheat_mode_on_flag = 2;
    }
    if (cheat_mode_on_flag == 3) {
      cheat_mode_on_flag = 0;
    }
  }
  //CHEAT MODE OFF
  if (Pad.IsButtonPressed(1 /* PAD2 */, 14 /* SQUARE */) && Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */) && cheat_mode_on_flag == 2) {
    //CHEAT MODE OFF
    Text.PrintNow(CHEATOF, 2000, 1);
    cheat_mode_on = 0;
    cheat_mode_on_flag = 3;
  }
  if ($.player.isPlaying()) {
    if (Pad.IsButtonPressed(1 /* PAD2 */, 12 /* START */) && invulnerability_on == 0) {
      $.script_controlled_player = $.player.getChar();
      $.script_controlled_player.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */);
      invulnerability_on = 1;
    }
    if (Pad.IsButtonPressed(1 /* PAD2 */, 12 /* START */) && invulnerability_on == 2) {
      $.script_controlled_player = $.player.getChar();
      $.script_controlled_player.setProofs(false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
      invulnerability_on = 3;
    }
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 12 /* START */))) {
      if (invulnerability_on == 1) {
        invulnerability_on = 2;
      }
      if (invulnerability_on == 3) {
        invulnerability_on = 0;
      }
    }
  }
  if (Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */) && debug_crap_on == 0 /* FALSE */ && crap_press_flag == 0) {
    Debugger.Enable();
    debug_crap_on = 1 /* TRUE */;
    crap_press_flag = 1;
  }
  if (Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */) && debug_crap_on == 1 /* TRUE */ && crap_press_flag == 0) {
    Debugger.Disable();
    debug_crap_on = 0 /* FALSE */;
    crap_press_flag = 1;
  }
  if (!(Pad.IsButtonPressed(1 /* PAD2 */, 15 /* TRIANGLE */)) && crap_press_flag == 1) {
    crap_press_flag = 0;
  }
  if (Pad.IsButtonPressed(1 /* PAD2 */, 16 /* CROSS */) && Pad.IsButtonPressed(1 /* PAD2 */, 14 /* SQUARE */)) {
    if ($.player.isPlaying()) {
      if (!($.player.isInAnyCar())) {
        $.player.explodeHead();
      }
      else {
        [text_x, text_y, text_z] = $.player.getCoordinates();
        Fx.AddExplosion(text_x, text_y, text_z, 3 /* EXPLOSION_CAR */);
        Fx.AddExplosion(text_x, text_y, text_z, 3 /* EXPLOSION_CAR */);
        Fx.AddExplosion(text_x, text_y, text_z, 3 /* EXPLOSION_CAR */);
      }
      await asyncWait(1000);
    }
  }
  //CHEAT MODE ON
  if (cheat_mode_on == 0 && Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
    //CHEAT MODE ON
    if ($.player.isPlaying()) {
      weather_crap++;
      if (weather_crap > 5) {
        weather_crap = 1;
      }
      //CHEAT MODE ON
      if (weather_crap == 1) {
        Weather.ForceNow(0 /* WEATHER_SUNNY */);
        //CHEAT MODE ON
        Text.PrintNow("WEATHER", 1000, 1);
        await asyncWait(300);
      }
      //CHEAT MODE ON
      if (weather_crap == 2) {
        Weather.ForceNow(1 /* WEATHER_CLOUDY */);
        //CHEAT MODE ON
        Text.PrintNow("WEATHER", 1000, 1);
        await asyncWait(300);
      }
      //CHEAT MODE ON
      if (weather_crap == 3) {
        Weather.ForceNow(2 /* WEATHER_RAINY */);
        //CHEAT MODE ON
        Text.PrintNow("WEATHER", 1000, 1);
        await asyncWait(300);
      }
      //CHEAT MODE ON
      if (weather_crap == 4) {
        Weather.ForceNow(3 /* WEATHER_FOGGY */);
        //CHEAT MODE ON
        Text.PrintNow("WEATHER", 1000, 1);
        await asyncWait(300);
      }
      //CHEAT MODE ON
      if (weather_crap == 5) {
        Weather.Release();
        //CHEAT MODE ON
        Text.PrintNow("WEATHE2", 1000, 1);
        await asyncWait(300);
      }
    }
  }
  //		IF IS_PLAYER_IN_ANY_CAR player
  //			STORE_CAR_PLAYER_IS_IN_NO_SAVE player players_car_debug
  //			SET_CAR_BIG_WHEELS players_car_debug TRUE
  //		ENDIF
  //			SET_CAR_BIG_WHEELS players_car_debug FALSE
  if (cheat_mode_on == 1 && cheat_mode_on_flag == 2) {
    //		IF IS_PLAYER_IN_ANY_CAR player
    //			STORE_CAR_PLAYER_IS_IN_NO_SAVE player players_car_debug
    //			SET_CAR_BIG_WHEELS players_car_debug TRUE
    //		ENDIF
    if (Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */) && repeat_button_press == 0 && slow_motion == 0) {
      Clock.SetTimeScale(0.0);
      slow_motion = 1;
      //		ENDIF
      repeat_button_press = 1;
    }
    //		IF IS_PLAYER_IN_ANY_CAR player
    //			STORE_CAR_PLAYER_IS_IN_NO_SAVE player players_car_debug
    //			SET_CAR_BIG_WHEELS players_car_debug FALSE
    //		ENDIF
    if (Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */) && repeat_button_press == 0 && slow_motion == 1) {
      Clock.SetTimeScale(1.0);
      slow_motion = 0;
      //		ENDIF
      repeat_button_press = 1;
    }
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 5 /* LEFTSHOULDER2 */))) {
      if (repeat_button_press == 1) {
        repeat_button_press = 0;
      }
    }
    if (Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */) && repeat_butt_press == 0 && no_cars == 0) {
      World.SetCarDensityMultiplier(0.0);
      Text.PrintNow(CARSOFF, 2000, 1);
      no_cars = 1;
      repeat_butt_press = 1;
    }
    if (Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */) && repeat_butt_press == 0 && no_cars == 1) {
      World.SetCarDensityMultiplier(1.0);
      Text.PrintNow(CARS_ON, 2000, 1);
      no_cars = 0;
      repeat_butt_press = 1;
    }
    if (!(Pad.IsButtonPressed(1 /* PAD2 */, 13 /* SELECT */))) {
      if (repeat_butt_press == 1) {
        repeat_butt_press = 0;
      }
    }
  }
  //ENDIF AT THE BOTTOM OF THE SCRIPT
  // Writing coordinates to file...
  //"Loading vehicle, press pad2 leftshoulder1 to cancel"
  //++ counter_create_car
  //IF counter_create_car = 90
  //AND initial_car_selected = 0
  //counter_create_car = 91
  //initial_car_selected = 1
  //initial_create_car = 1
  //ENDIF
  //CAR_TAXI
  //CAR_CABBIE
  //CAR_POLICE
  //CAR_FIRETRUCK
  //CAR_AMBULANCE
  //CAR_BANSHEE
  //CAR_INFERNUS
  //CAR_STINGER
  //initial_create_car = 0
  //PLANE_AIRTRAIN
  //PLANE_DEADDODO
  //TRAIN_SUBWAY
  //HELI_POLICE
  //CAR_RCBANDIT
  //HELI
  //		IF IS_BUTTON_PRESSED PAD2 LEFTSHOULDER1
  //		AND flag_create_car = 1
  //			IF NOT IS_CAR_DEAD magic_car
  //				GENERATE_RANDOM_INT_IN_RANGE 0 88 car_colour2
  //				CHANGE_CAR_COLOUR magic_car car_colour car_colour2 // 0 - 88
  //				++car_colour
  //				IF car_colour > 87
  //					car_colour = 0
  //				ENDIF
  //			ENDIF
  //		ENDIF
  // Industrial mission jump stuff
  //WARP PLAYER
  //IF flag_player_on_mission = 0
  //SWAP BRIDGE FROM FIXED TO DAMAGED
  //8ball
  //flag_industrial_passed = 0
  //flag_commercial_passed = 0
  //Luigi
  //Joey
  //Toni
  //Frankie
  //Diablo
  //Asuka
  //SWAP BRIDGE FROM DAMAGED TO FIXED
  //flag_industrial_passed = 1
  //Kenji
  //Ray
  //Love
  //Yardie
  //Asuka2
  //flag_commercial_passed = 1
  //Hoods
  //CAT
  //INDUSTRIAL MISSION SKIP RIGHT
  //flag_eightball_mission_passed = 0
  //"Eightball Mission 1"
  // TEST STUFF
  //"luigi Mission 2"
  //"luigi Mission 3"
  //"luigi Mission 4"
  //"luigi Mission 5"
  //"joey Mission 1"
  //REMOVE LUIGIS BLIP
  //"joey Mission 2"
  //"joey Mission 3"
  //"joey Mission 4"
  //"joey Mission 5"
  //"joey Mission 6"
  //"Toni Mission 1"
  //REMOVE JOEYS BLIP
  //"Toni Mission 2"
  //"Toni Mission 3"
  //"Toni Mission 4"
  //"Toni Mission 5"
  //"frankie Mission 1"
  //REMOVE TONIS BLIP
  //"frankie Mission 2"
  //"frankie Mission 2.1"
  //"frankie Mission 3"
  //REMOVE FRANKIES BLIP
  //"frankie Mission 4"
  //TEST STUFF
  //REMOVE 8_BALLS BLIP
  //"Diablo Mission 1"
  //"Diablo Mission 2"
  //"Diablo Mission 3"
  //"Diablo Mission 4"
  //"Meat Mission 1"
  //"Meat Mission 2"
  //"Meat Mission 3"
  //"Meat Mission 4"
  //COMMERCIAL MISSION SKIP RIGHT
  //"asuka Mission 1"
  //"asuka Mission 2"
  //"asuka Mission 3"
  //"asuka Mission 4"
  //"asuka Mission 5"
  //"asuka Mission 6 (SUBURBAN MISSION)"
  //"asuka Mission 7 (SUBURBAN MISSION)"
  //"asuka Mission 8 (SUBURBAN MISSION)"
  //"kenji Mission 1"
  //"kenji Mission 2"
  //"kenji Mission 3"
  //"kenji Mission 4"
  //"kenji Mission 5"
  //"ray Mission 1"
  //"ray Mission 2"
  //"ray Mission 3"
  //"ray Mission 4"
  //"ray Mission 5"
  //"ray Mission 6"
  //"love Mission 1"
  //"love Mission 2"
  //"love Mission 3"
  //"love Mission 4"
  //"love Mission 5"
  //"love Mission 6"
  //"love Mission 7"
  //"Yardie Mission 1"
  //"Yardie Mission 2"
  //"Yardie Mission 3"
  //"Yardie Mission 4"
  // SUBURBAN MISSION SKIP RIGHT
  //flag_suburban_passed = 0
  //"Hood Mission 1"
  //"Hood Mission 2"
  //"Hood Mission 3"
  //"Hood Mission 4"
  //"Hood Mission 5"
  //"Final mission"
  //	IF IS_PLAYER_PLAYING player
  if ($.player.isPlaying()) {
    // Writing coordinates to file...
    //"Loading vehicle, press pad2 leftshoulder1 to cancel"
    //++ counter_create_car
    //IF counter_create_car = 90
    //AND initial_car_selected = 0
    //counter_create_car = 91
    //initial_car_selected = 1
    //initial_create_car = 1
    //ENDIF
    //CAR_TAXI
    //CAR_CABBIE
    //CAR_POLICE
    //CAR_FIRETRUCK
    //CAR_AMBULANCE
    //CAR_BANSHEE
    //CAR_INFERNUS
    //CAR_STINGER
    //initial_create_car = 0
    //PLANE_AIRTRAIN
    //PLANE_DEADDODO
    //TRAIN_SUBWAY
    //HELI_POLICE
    //CAR_RCBANDIT
    //HELI
    //		IF IS_BUTTON_PRESSED PAD2 LEFTSHOULDER1
    //		AND flag_create_car = 1
    //			IF NOT IS_CAR_DEAD magic_car
    //				GENERATE_RANDOM_INT_IN_RANGE 0 88 car_colour2
    //				CHANGE_CAR_COLOUR magic_car car_colour car_colour2 // 0 - 88
    //				++car_colour
    //				IF car_colour > 87
    //					car_colour = 0
    //				ENDIF
    //			ENDIF
    //		ENDIF
    // Industrial mission jump stuff
    //WARP PLAYER
    //IF flag_player_on_mission = 0
    if (cheat_mode_on == 1 && cheat_mode_on_flag == 2) {
      // Writing coordinates to file...
      if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */) && text_button_pressed == 0) {
        [text_x, text_y, text_z] = $.player.getCoordinates();
        text_z = World.GetGroundZFor3DCoord(text_x, text_y, text_z);
        text_h = $.player.getHeading();
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_FLOAT_TO_DEBUG_FILE
        // unsupported SAVE_NEWLINE_TO_DEBUG_FILE
        // Writing coordinates to file...
        Text.PrintNow(TEXTXYZ, 800, 1);
        text_button_pressed = 1;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) && text_button_pressed == 1) {
        text_button_pressed = 0;
      }
      //"Loading vehicle, press pad2 leftshoulder1 to cancel"
      //++ counter_create_car
      //IF counter_create_car = 90
      //AND initial_car_selected = 0
      //counter_create_car = 91
      //initial_car_selected = 1
      //initial_create_car = 1
      //ENDIF
      //CAR_TAXI
      //CAR_CABBIE
      //CAR_POLICE
      //CAR_FIRETRUCK
      //CAR_AMBULANCE
      //CAR_BANSHEE
      //CAR_INFERNUS
      //CAR_STINGER
      //initial_create_car = 0
      //PLANE_AIRTRAIN
      //PLANE_DEADDODO
      //TRAIN_SUBWAY
      //HELI_POLICE
      //CAR_RCBANDIT
      //HELI
      //		IF IS_BUTTON_PRESSED PAD2 LEFTSHOULDER1
      //		AND flag_create_car = 1
      //			IF NOT IS_CAR_DEAD magic_car
      //				GENERATE_RANDOM_INT_IN_RANGE 0 88 car_colour2
      //				CHANGE_CAR_COLOUR magic_car car_colour car_colour2 // 0 - 88
      //				++car_colour
      //				IF car_colour > 87
      //					car_colour = 0
      //				ENDIF
      //			ENDIF
      //		ENDIF
      if (Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */) && flag_create_car == 0 && button_press_flag == 0) {
        [x_float_m, y_float_m, z_float_m] = $.player.getCoordinates();
        player_heading_debug = $.player.getHeading();
        if (player_heading_debug < 45.0 && player_heading_debug > 0.0) {
          y_float_m += 5.0;
          debug_car_heading = 90.0;
        }
        if (player_heading_debug < 360.0 && player_heading_debug > 315.0) {
          y_float_m += 5.0;
          debug_car_heading = 90.0;
        }
        if (player_heading_debug < 135.0 && player_heading_debug > 45.0) {
          x_float_m -= 5.0;
          debug_car_heading = 180.0;
        }
        if (player_heading_debug < 225.0 && player_heading_debug > 135.0) {
          y_float_m -= 5.0;
          debug_car_heading = 270.0;
        }
        if (player_heading_debug < 315.0 && player_heading_debug > 225.0) {
          x_float_m += 5.0;
          debug_car_heading = 0.0;
        }
        z_float_m = z_float_m + 0.6;
        z_float_m = World.GetGroundZFor3DCoord(x_float_m, y_float_m, z_float_m);
        Streaming.RequestModel(counter_create_car);
        //"Loading vehicle, press pad2 leftshoulder1 to cancel"
        //++ counter_create_car
        while (!(Streaming.HasModelLoaded(counter_create_car))) {
          await asyncWait(0);
          //"Loading vehicle, press pad2 leftshoulder1 to cancel"
          Text.PrintNow(LOADCAR, 100, 1);
          //++ counter_create_car
          if (Pad.IsButtonPressed(1 /* PAD2 */, 4 /* LEFTSHOULDER1 */)) {
            // SCM GOTO → next_carzzz (not lowered; manual jump required)
            throw new Error("unresolved GOTO next_carzzz"); // fallback: would break linear control flow
          }
        }
        magic_car = Car.Create(counter_create_car, x_float_m, y_float_m, z_float_m);
        magic_car.setHeading(debug_car_heading);
        magic_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
        Streaming.MarkModelAsNoLongerNeeded(counter_create_car);
        magic_car.markAsNoLongerNeeded();
        // SCM label next_carzzz
        //IF counter_create_car = 90
        //AND initial_car_selected = 0
        //counter_create_car = 91
        //initial_car_selected = 1
        //initial_create_car = 1
        //ENDIF
        //CAR_TAXI
        //CAR_CABBIE
        //CAR_POLICE
        //CAR_FIRETRUCK
        //CAR_AMBULANCE
        //CAR_BANSHEE
        //CAR_INFERNUS
        //CAR_STINGER
        //initial_create_car = 0
        //PLANE_AIRTRAIN
        //PLANE_DEADDODO
        //TRAIN_SUBWAY
        //HELI_POLICE
        //CAR_RCBANDIT
        //HELI
        if (initial_create_car == 0) {
          //CAR_TAXI
          if (counter_create_car == 105 && initial_car_selected == 0) {
            //CAR_TAXI
            counter_create_car = 110;
            initial_car_selected = 1;
          }
          //CAR_CABBIE
          if (counter_create_car == 110 && initial_car_selected == 0) {
            //CAR_CABBIE
            counter_create_car = 128;
            initial_car_selected = 1;
          }
          //CAR_POLICE
          if (counter_create_car == 128 && initial_car_selected == 0) {
            //CAR_POLICE
            counter_create_car = 116;
            initial_car_selected = 1;
          }
          //CAR_FIRETRUCK
          if (counter_create_car == 116 && initial_car_selected == 0) {
            //CAR_FIRETRUCK
            counter_create_car = 97;
            initial_car_selected = 1;
          }
          //CAR_AMBULANCE
          if (counter_create_car == 97 && initial_car_selected == 0) {
            //CAR_AMBULANCE
            counter_create_car = 106;
            initial_car_selected = 1;
          }
          //CAR_BANSHEE
          if (counter_create_car == 106 && initial_car_selected == 0) {
            //CAR_BANSHEE
            counter_create_car = 119;
            initial_car_selected = 1;
          }
          //CAR_INFERNUS
          if (counter_create_car == 119 && initial_car_selected == 0) {
            //CAR_INFERNUS
            counter_create_car = 101;
            initial_car_selected = 1;
            initial_create_car = 1;
          }
          //CAR_STINGER
          if (counter_create_car == 101 && initial_car_selected == 0) {
            //CAR_STINGER
            counter_create_car = 92;
            initial_car_selected = 1;
            initial_create_car = 1;
          }
        }
        else {
          ++counter_create_car;
          //initial_create_car = 0
          if (counter_create_car > 150) {
            //initial_create_car = 0
            counter_create_car = 90;
          }
          //PLANE_AIRTRAIN
          //PLANE_DEADDODO
          if (counter_create_car == 140 || counter_create_car == 141) {
            counter_create_car = 142;
          }
          //TRAIN_SUBWAY
          //HELI_POLICE
          if (counter_create_car == 124 || counter_create_car == 125) {
            counter_create_car = 126;
          }
          //CAR_RCBANDIT
          if (counter_create_car == 131) {
            counter_create_car = 132;
          }
          //HELI
          if (counter_create_car == 147) {
            counter_create_car = 148;
          }
        }
        flag_create_car = 1;
        button_press_flag = 1;
      }
      if (!(Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */)) && button_press_flag == 1) {
        button_press_flag = 0;
      }
      if (Pad.IsButtonPressed(1 /* PAD2 */, 6 /* RIGHTSHOULDER1 */) && flag_create_car == 1 && button_press_flag == 0) {
        if (Car.IsDead(magic_car)) {
          magic_car.delete();
        }
        else {
          if (!($.player.isInCar(magic_car))) {
            magic_car.delete();
          }
          else {
            magic_car.markAsNoLongerNeeded();
          }
        }
        flag_create_car = 0;
        initial_car_selected = 0;
        button_press_flag = 1;
      }
    }
    //SWAP BRIDGE FROM FIXED TO DAMAGED
    //8ball
    //flag_industrial_passed = 0
    //flag_commercial_passed = 0
    //Luigi
    //Joey
    //Toni
    //Frankie
    //Diablo
    //Asuka
    //SWAP BRIDGE FROM DAMAGED TO FIXED
    //flag_industrial_passed = 1
    //Kenji
    //Ray
    //Love
    //Yardie
    //Asuka2
    //flag_commercial_passed = 1
    //Hoods
    //CAT
    //WARP PLAYER
    //IF flag_player_on_mission = 0
    if (Pad.IsButtonPressed(1 /* PAD2 */, 8 /* DPADUP */)) {
      //SWAP BRIDGE FROM FIXED TO DAMAGED
      //8ball
      //flag_industrial_passed = 0
      //flag_commercial_passed = 0
      //Luigi
      //Joey
      //Toni
      //Frankie
      //Diablo
      //Asuka
      //SWAP BRIDGE FROM DAMAGED TO FIXED
      //flag_industrial_passed = 1
      //Kenji
      //Ray
      //Love
      //Yardie
      //Asuka2
      //flag_commercial_passed = 1
      //Hoods
      //CAT
      if ($.player.isPlaying()) {
        button_pressed_warp++;
        //SWAP BRIDGE FROM FIXED TO DAMAGED
        if (button_pressed_warp > 14) {
          //SWAP BRIDGE FROM FIXED TO DAMAGED
          button_pressed_warp = 0;
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
          World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
          World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
        }
        //8ball
        //flag_industrial_passed = 0
        //flag_commercial_passed = 0
        if (button_pressed_warp == 1) {
          //flag_industrial_passed = 0
          //flag_commercial_passed = 0
          $.player.setCoordinates(811.90, -939.95, -100.0);
          await asyncWait(300);
        }
        //Luigi
        if (button_pressed_warp == 2) {
          $.player.setCoordinates(905.2, -425.4, 13.9);
          await asyncWait(300);
        }
        //Joey
        if (button_pressed_warp == 3) {
          $.player.setCoordinates(1193.0, -872.0, 13.9);
          await asyncWait(300);
        }
        //Toni
        if (button_pressed_warp == 4) {
          $.player.setCoordinates(1203.0, -320.0, 23.9);
          await asyncWait(300);
        }
        //Frankie
        if (button_pressed_warp == 5) {
          $.player.setCoordinates(1453.0, -193.0, 54.5);
          await asyncWait(300);
        }
        //Diablo
        if (button_pressed_warp == 6) {
          $.player.setCoordinates(938.6, -235.3, -100.0);
          await asyncWait(300);
        }
        //Asuka
        //SWAP BRIDGE FROM DAMAGED TO FIXED
        //flag_industrial_passed = 1
        //flag_commercial_passed = 0
        if (button_pressed_warp == 7) {
          //SWAP BRIDGE FROM DAMAGED TO FIXED
          $.player.setCoordinates(531.5, -648.7, -100.0);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
          World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
          World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
          World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);
          //flag_industrial_passed = 1
          //flag_commercial_passed = 0
          if (add_just_the_once_though == 0) {
            Restart.AddHospital(183.5, -17.8, 16.2, 180.0);
            Restart.AddPolice(340.3, -1123.4, 25.0, 180.0);
            Restart.AddHospital(-1253.0, -138.2, 57.8, 90.0);
            Restart.AddPolice(-1259.5, -44.5, 57.8, 90.0);
            Game.SetMaxWantedLevel(6);
            add_just_the_once_though = 1;
          }
          await asyncWait(300);
        }
        //Kenji
        if (button_pressed_warp == 8) {
          $.player.setCoordinates(458.8, -1424.6, 26.1);
          await asyncWait(300);
        }
        //Ray
        if (button_pressed_warp == 9) {
          $.player.setCoordinates(48.6, -724.0, 24.9);
          await asyncWait(300);
        }
        //Love
        if (button_pressed_warp == 10) {
          $.player.setCoordinates(78.9, -1548.4, 28.2);
          await asyncWait(300);
        }
        //Yardie
        if (button_pressed_warp == 11) {
          $.player.setCoordinates(118.3, -272.6, -100.0);
          await asyncWait(300);
        }
        //Asuka2
        //flag_industrial_passed = 1
        //flag_commercial_passed = 1
        if (button_pressed_warp == 12) {
          //flag_industrial_passed = 1
          //flag_commercial_passed = 1
          $.player.setCoordinates(367.9, -331.2, -100.0);
          await asyncWait(300);
        }
        //Hoods
        if (button_pressed_warp == 13) {
          $.player.setCoordinates(-443.0, -8.9, 2.8);
          await asyncWait(300);
        }
        //CAT
        if (button_pressed_warp == 14) {
          $.player.setCoordinates(-364.7, 240.7, -100.0);
          button_pressed_warp = 0;
          await asyncWait(300);
        }
      }
    }
    //8ball
    //Luigi
    //Joey
    //Toni
    //Frankie
    //Diablo
    //SWAP BRIDGE FROM FIXED TO DAMAGED
    //flag_industrial_passed = 0
    //flag_commercial_passed = 0
    //Asuka
    //flag_industrial_passed = 1
    //Kenji
    //Ray
    //Love
    //Yardie
    //Asuka2
    //Hoods
    //CAT
    //SWAP BRIDGE FROM DAMAGED TO FIXED
    //flag_commercial_passed = 1
    //INDUSTRIAL MISSION SKIP RIGHT
    if (Pad.IsButtonPressed(1 /* PAD2 */, 9 /* DPADDOWN */)) {
      //8ball
      //Luigi
      //Joey
      //Toni
      //Frankie
      //Diablo
      //SWAP BRIDGE FROM FIXED TO DAMAGED
      //flag_industrial_passed = 0
      //flag_commercial_passed = 0
      //Asuka
      //flag_industrial_passed = 1
      //Kenji
      //Ray
      //Love
      //Yardie
      //Asuka2
      //Hoods
      //CAT
      //SWAP BRIDGE FROM DAMAGED TO FIXED
      //flag_commercial_passed = 1
      if ($.player.isPlaying()) {
        if (button_pressed_warp == 0) {
          button_pressed_warp = 14;
          // SCM GOTO → start_mission_warp (not lowered; manual jump required)
          throw new Error("unresolved GOTO start_mission_warp"); // fallback: would break linear control flow
        }
        button_pressed_warp--;
        // SCM label start_mission_warp
        //8ball
        if (button_pressed_warp == 1) {
          $.player.setCoordinates(811.90, -939.95, -100.0);
          await asyncWait(300);
        }
        //Luigi
        if (button_pressed_warp == 2) {
          $.player.setCoordinates(905.2, -425.4, 13.9);
          await asyncWait(300);
        }
        //Joey
        if (button_pressed_warp == 3) {
          $.player.setCoordinates(1193.0, -872.0, 13.9);
          await asyncWait(300);
        }
        //Toni
        if (button_pressed_warp == 4) {
          $.player.setCoordinates(1203.0, -320.0, 23.9);
          await asyncWait(300);
        }
        //Frankie
        if (button_pressed_warp == 5) {
          $.player.setCoordinates(1453.0, -193.0, 54.5);
          await asyncWait(300);
        }
        //Diablo
        //SWAP BRIDGE FROM FIXED TO DAMAGED
        //flag_industrial_passed = 0
        //flag_commercial_passed = 0
        if (button_pressed_warp == 6) {
          //SWAP BRIDGE FROM FIXED TO DAMAGED
          $.player.setCoordinates(938.6, -235.3, -100.0);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
          World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
          World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
          //flag_industrial_passed = 0
          //flag_commercial_passed = 0
          if (add_just_the_once_though == 0) {
            Restart.AddHospital(183.5, -17.8, 16.2, 180.0);
            Restart.AddPolice(340.3, -1123.4, 25.0, 180.0);
            Restart.AddHospital(-1253.0, -138.2, 57.8, 90.0);
            Restart.AddPolice(-1259.5, -44.5, 57.8, 90.0);
            Game.SetMaxWantedLevel(6);
            add_just_the_once_though = 1;
          }
          await asyncWait(300);
        }
        //Asuka
        //flag_industrial_passed = 1
        if (button_pressed_warp == 7) {
          //flag_industrial_passed = 1
          $.player.setCoordinates(531.5, -648.7, -100.0);
          await asyncWait(300);
        }
        //Kenji
        if (button_pressed_warp == 8) {
          $.player.setCoordinates(458.8, -1424.6, 26.1);
          await asyncWait(300);
        }
        //Ray
        if (button_pressed_warp == 9) {
          $.player.setCoordinates(48.6, -724.0, 24.9);
          await asyncWait(300);
        }
        //Love
        if (button_pressed_warp == 10) {
          $.player.setCoordinates(78.9, -1548.4, 28.2);
          await asyncWait(300);
        }
        //Yardie
        //flag_industrial_passed = 1
        //flag_commercial_passed = 0
        if (button_pressed_warp == 11) {
          //flag_industrial_passed = 1
          //flag_commercial_passed = 0
          $.player.setCoordinates(118.3, -272.6, -100.0);
          await asyncWait(300);
        }
        //Asuka2
        if (button_pressed_warp == 12) {
          $.player.setCoordinates(367.9, -331.2, -100.0);
          await asyncWait(300);
        }
        //Hoods
        if (button_pressed_warp == 13) {
          $.player.setCoordinates(-443.0, -6.6, 2.8);
          await asyncWait(300);
        }
        //CAT
        //SWAP BRIDGE FROM DAMAGED TO FIXED
        //flag_industrial_passed = 1
        //flag_commercial_passed = 1
        if (button_pressed_warp == 14) {
          //SWAP BRIDGE FROM DAMAGED TO FIXED
          $.player.setCoordinates(-364.7, 240.7, -100.0);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
          World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
          World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);
          World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
          World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
          World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
          World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
          World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);
          World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);
          //flag_industrial_passed = 1
          //flag_commercial_passed = 1
          if (add_just_the_once_though == 0) {
            Restart.AddHospital(183.5, -17.8, 16.2, 180.0);
            Restart.AddPolice(340.3, -1123.4, 25.0, 180.0);
            Restart.AddHospital(-1253.0, -138.2, 57.8, 90.0);
            Restart.AddPolice(-1259.5, -44.5, 57.8, 90.0);
            Game.SetMaxWantedLevel(6);
            add_just_the_once_though = 1;
          }
          await asyncWait(300);
        }
      }
    }
    //flag_industrial_passed = 0
    //flag_eightball_mission_passed = 0
    //"Eightball Mission 1"
    // TEST STUFF
    //"luigi Mission 2"
    //"luigi Mission 3"
    //"luigi Mission 4"
    //"luigi Mission 5"
    //"joey Mission 1"
    //REMOVE LUIGIS BLIP
    //"joey Mission 2"
    //"joey Mission 3"
    //"joey Mission 4"
    //"joey Mission 5"
    //"joey Mission 6"
    //"Toni Mission 1"
    //REMOVE JOEYS BLIP
    //"Toni Mission 2"
    //"Toni Mission 3"
    //"Toni Mission 4"
    //"Toni Mission 5"
    //"frankie Mission 1"
    //REMOVE TONIS BLIP
    //"frankie Mission 2"
    //"frankie Mission 2.1"
    //"frankie Mission 3"
    //REMOVE FRANKIES BLIP
    //"frankie Mission 4"
    //TEST STUFF
    //REMOVE 8_BALLS BLIP
    //"Diablo Mission 1"
    //"Diablo Mission 2"
    //"Diablo Mission 3"
    //"Diablo Mission 4"
    //"Meat Mission 1"
    //"Meat Mission 2"
    //"Meat Mission 3"
    //"Meat Mission 4"
    //COMMERCIAL MISSION SKIP RIGHT
    if ($.flag_player_on_mission == 0) {
      //flag_industrial_passed = 0
      //flag_eightball_mission_passed = 0
      //"Eightball Mission 1"
      // TEST STUFF
      //"luigi Mission 2"
      //"luigi Mission 3"
      //"luigi Mission 4"
      //"luigi Mission 5"
      //"joey Mission 1"
      //REMOVE LUIGIS BLIP
      //"joey Mission 2"
      //"joey Mission 3"
      //"joey Mission 4"
      //"joey Mission 5"
      //"joey Mission 6"
      //"Toni Mission 1"
      //REMOVE JOEYS BLIP
      //"Toni Mission 2"
      //"Toni Mission 3"
      //"Toni Mission 4"
      //"Toni Mission 5"
      //"frankie Mission 1"
      //REMOVE TONIS BLIP
      //"frankie Mission 2"
      //"frankie Mission 2.1"
      //"frankie Mission 3"
      //REMOVE FRANKIES BLIP
      //"frankie Mission 4"
      //TEST STUFF
      //REMOVE 8_BALLS BLIP
      //"Diablo Mission 1"
      //"Diablo Mission 2"
      //"Diablo Mission 3"
      //"Diablo Mission 4"
      //"Meat Mission 1"
      //"Meat Mission 2"
      //"Meat Mission 3"
      //"Meat Mission 4"
      if (Pad.IsButtonPressed(1 /* PAD2 */, 11 /* DPADRIGHT */)) {
        //flag_industrial_passed = 0
        //flag_eightball_mission_passed = 0
        //"Eightball Mission 1"
        // TEST STUFF
        //"luigi Mission 2"
        //"luigi Mission 3"
        //"luigi Mission 4"
        //"luigi Mission 5"
        //"joey Mission 1"
        //REMOVE LUIGIS BLIP
        //"joey Mission 2"
        //"joey Mission 3"
        //"joey Mission 4"
        //"joey Mission 5"
        //"joey Mission 6"
        //"Toni Mission 1"
        //REMOVE JOEYS BLIP
        //"Toni Mission 2"
        //"Toni Mission 3"
        //"Toni Mission 4"
        //"Toni Mission 5"
        //"frankie Mission 1"
        //REMOVE TONIS BLIP
        //"frankie Mission 2"
        //"frankie Mission 2.1"
        //"frankie Mission 3"
        //REMOVE FRANKIES BLIP
        //"frankie Mission 4"
        //TEST STUFF
        //REMOVE 8_BALLS BLIP
        //"Diablo Mission 1"
        //"Diablo Mission 2"
        //"Diablo Mission 3"
        //"Diablo Mission 4"
        //"Meat Mission 1"
        //"Meat Mission 2"
        //"Meat Mission 3"
        //"Meat Mission 4"
        if ($.player.isPlaying()) {
          //flag_industrial_passed = 0
          //flag_eightball_mission_passed = 0
          //"Eightball Mission 1"
          // TEST STUFF
          //"luigi Mission 2"
          //"luigi Mission 3"
          //"luigi Mission 4"
          //"luigi Mission 5"
          //"joey Mission 1"
          //REMOVE LUIGIS BLIP
          //"joey Mission 2"
          //"joey Mission 3"
          //"joey Mission 4"
          //"joey Mission 5"
          //"joey Mission 6"
          //"Toni Mission 1"
          //REMOVE JOEYS BLIP
          //"Toni Mission 2"
          //"Toni Mission 3"
          //"Toni Mission 4"
          //"Toni Mission 5"
          //"frankie Mission 1"
          //REMOVE TONIS BLIP
          //"frankie Mission 2"
          //"frankie Mission 2.1"
          //"frankie Mission 3"
          //REMOVE FRANKIES BLIP
          //"frankie Mission 4"
          //TEST STUFF
          //REMOVE 8_BALLS BLIP
          //"Diablo Mission 1"
          //"Diablo Mission 2"
          //"Diablo Mission 3"
          //"Diablo Mission 4"
          //"Meat Mission 1"
          //"Meat Mission 2"
          //"Meat Mission 3"
          //"Meat Mission 4"
          if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            button_pressed_ind++;
            //flag_eightball_mission_passed = 0
            if (button_pressed_ind > 29) {
              $.flag_meat_mission4_passed = 1;
              //flag_eightball_mission_passed = 0
              await asyncWait(300);
              $.flag_luigi_mission2_passed = 0;
              $.flag_luigi_mission3_passed = 0;
              $.flag_luigi_mission4_passed = 0;
              $.flag_luigi_mission5_passed = 0;
              $.flag_joey_mission1_passed = 0;
              $.flag_joey_mission2_passed = 0;
              $.flag_joey_mission3_passed = 0;
              $.flag_joey_mission4_passed = 0;
              $.flag_joey_mission5_passed = 0;
              $.flag_joey_mission6_passed = 0;
              $.flag_toni_mission1_passed = 0;
              $.flag_toni_mission2_passed = 0;
              $.flag_toni_mission3_passed = 0;
              $.flag_toni_mission4_passed = 0;
              $.flag_toni_mission5_passed = 0;
              $.flag_frankie_mission1_passed = 0;
              $.flag_frankie_mission2_passed = 0;
              $.flag_frankie_mission2_1_passed = 0;
              $.flag_frankie_mission3_passed = 0;
              $.flag_frankie_mission4_passed = 0;
              $.flag_diablo_mission1_passed = 0;
              $.flag_diablo_mission2_passed = 0;
              $.flag_diablo_mission3_passed = 0;
              $.flag_diablo_mission4_passed = 0;
              $.flag_meat_mission1_passed = 0;
              $.flag_meat_mission2_passed = 0;
              $.flag_meat_mission3_passed = 0;
              $.flag_meat_mission4_passed = 0;
              button_pressed_ind = 1;
            }
            //"Eightball Mission 1"
            // TEST STUFF
            if (button_pressed_ind == 1) {
              $.flag_eightball_mission_passed = 1;
              //"Eightball Mission 1"
              Text.PrintBig("EBAL", 1000, 4);
              await asyncWait(300);
              $.flag_eightball_mission_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT eightball_mission_loop
              Text.PrintNow("LUIGI", 2000, 1);
            }
            //"luigi Mission 2"
            // TEST STUFF
            if (button_pressed_ind == 2) {
              $.flag_luigi_mission2_passed = 1;
              //"luigi Mission 2"
              Text.PrintBig("LM2", 1000, 4);
              await asyncWait(300);
              $.flag_luigi_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT luigi_mission2_loop
              $.flag_eightball_mission_passed = 1;
              $.luigi_contact_blip.remove();
              $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
            }
            //"luigi Mission 3"
            // TEST STUFF
            if (button_pressed_ind == 3) {
              $.flag_luigi_mission3_passed = 1;
              //"luigi Mission 3"
              Text.PrintBig("LM3", 1000, 4);
              await asyncWait(300);
              $.flag_luigi_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT luigi_mission3_loop
              $.flag_luigi_mission2_passed = 1;
            }
            //"luigi Mission 4"
            // TEST STUFF
            if (button_pressed_ind == 4) {
              $.flag_luigi_mission4_passed = 1;
              //"luigi Mission 4"
              Text.PrintBig("LM4", 1000, 4);
              await asyncWait(300);
              $.flag_luigi_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT luigi_mission4_loop
              $.flag_luigi_mission3_passed = 1;
            }
            //"luigi Mission 5"
            // TEST STUFF
            if (button_pressed_ind == 5) {
              $.flag_luigi_mission5_passed = 1;
              //"luigi Mission 5"
              Text.PrintBig("LM5", 1000, 4);
              await asyncWait(300);
              $.flag_luigi_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT luigi_mission5_loop
              $.flag_luigi_mission4_passed = 1;
            }
            //"joey Mission 1"
            // TEST STUFF
            //REMOVE LUIGIS BLIP
            if (button_pressed_ind == 6) {
              $.flag_joey_mission1_passed = 1;
              //"joey Mission 1"
              Text.PrintBig("JM1", 1000, 4);
              Text.PrintNow("JOEY", 2000, 1);
              await asyncWait(300);
              $.flag_joey_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission1_loop
              $.flag_luigi_mission5_passed = 1;
              //REMOVE LUIGIS BLIP
              $.luigi_contact_blip.remove();
              $.joey_contact_blip.remove();
              $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
            }
            //"joey Mission 2"
            // TEST STUFF
            if (button_pressed_ind == 7) {
              $.flag_joey_mission2_passed = 1;
              //"joey Mission 2"
              Text.PrintBig("JM2", 1000, 4);
              await asyncWait(300);
              $.flag_joey_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission2_loop
              $.flag_joey_mission1_passed = 1;
            }
            //"joey Mission 3"
            // TEST STUFF
            if (button_pressed_ind == 8) {
              $.flag_joey_mission3_passed = 1;
              //"joey Mission 3"
              Text.PrintBig("JM3", 1000, 4);
              await asyncWait(300);
              $.flag_joey_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission3_loop
              $.flag_joey_mission2_passed = 1;
            }
            //"joey Mission 4"
            // TEST STUFF
            if (button_pressed_ind == 9) {
              $.flag_joey_mission4_passed = 1;
              //"joey Mission 4"
              Text.PrintBig("JM4", 1000, 4);
              await asyncWait(300);
              $.flag_joey_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission4_loop
              $.flag_joey_mission3_passed = 1;
            }
            //"joey Mission 5"
            // TEST STUFF
            if (button_pressed_ind == 10) {
              $.flag_joey_mission5_passed = 1;
              //"joey Mission 5"
              Text.PrintBig("JM5", 1000, 4);
              await asyncWait(300);
              $.flag_joey_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission5_loop
              $.flag_joey_mission4_passed = 1;
            }
            //"joey Mission 6"
            // TEST STUFF
            if (button_pressed_ind == 11) {
              $.flag_joey_mission6_passed = 1;
              //"joey Mission 6"
              Text.PrintBig("JM6", 1000, 4);
              await asyncWait(300);
              $.flag_joey_mission6_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT joey_mission6_loop
              $.flag_joey_mission5_passed = 1;
            }
            //"Toni Mission 1"
            // TEST STUFF
            //REMOVE JOEYS BLIP
            if (button_pressed_ind == 12) {
              $.flag_toni_mission1_passed = 1;
              //"Toni Mission 1"
              Text.PrintBig("TM1", 1000, 4);
              Text.PrintNow("TONI", 2000, 1);
              await asyncWait(300);
              $.flag_toni_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT toni_mission1_loop
              $.flag_joey_mission6_passed = 1;
              //REMOVE JOEYS BLIP
              $.joey_contact_blip.remove();
              $.toni_contact_blip.remove();
              $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, 26.4, 19 /* RADAR_SPRITE_TONY */);
            }
            //"Toni Mission 2"
            // TEST STUFF
            if (button_pressed_ind == 13) {
              $.flag_toni_mission2_passed = 1;
              //"Toni Mission 2"
              Text.PrintBig("TM2", 1000, 4);
              await asyncWait(300);
              $.flag_toni_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT toni_mission2_loop
              $.flag_toni_mission1_passed = 1;
            }
            //"Toni Mission 3"
            // TEST STUFF
            if (button_pressed_ind == 14) {
              $.flag_toni_mission3_passed = 1;
              //"Toni Mission 3"
              Text.PrintBig("TM3", 1000, 4);
              await asyncWait(300);
              $.flag_toni_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT toni_mission3_loop
              $.flag_toni_mission2_passed = 1;
            }
            //"Toni Mission 4"
            // TEST STUFF
            if (button_pressed_ind == 15) {
              $.flag_toni_mission4_passed = 1;
              //"Toni Mission 4"
              Text.PrintBig("TM4", 1000, 4);
              await asyncWait(300);
              $.flag_toni_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT toni_mission4_loop
              $.flag_toni_mission3_passed = 1;
            }
            //"Toni Mission 5"
            // TEST STUFF
            if (button_pressed_ind == 16) {
              $.flag_toni_mission5_passed = 1;
              //"Toni Mission 5"
              Text.PrintBig("TM5", 1000, 4);
              await asyncWait(300);
              $.flag_toni_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT toni_mission5_loop
              $.flag_toni_mission4_passed = 1;
            }
            //"frankie Mission 1"
            // TEST STUFF
            //REMOVE TONIS BLIP
            if (button_pressed_ind == 17) {
              $.flag_frankie_mission1_passed = 1;
              //"frankie Mission 1"
              Text.PrintBig("FM1", 1000, 4);
              Text.PrintNow("FRANK", 2000, 1);
              await asyncWait(300);
              $.flag_frankie_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT frankie_mission1_loop
              $.flag_toni_mission5_passed = 1;
              //REMOVE TONIS BLIP
              $.toni_contact_blip.remove();
              $.frankie_contact_blip.remove();
              $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
            }
            //"frankie Mission 2"
            // TEST STUFF
            if (button_pressed_ind == 18) {
              $.flag_frankie_mission2_passed = 1;
              //"frankie Mission 2"
              Text.PrintBig("FM2", 1000, 4);
              await asyncWait(300);
              $.flag_frankie_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT frankie_mission2_loop
              $.flag_frankie_mission1_passed = 1;
            }
            //"frankie Mission 2.1"
            if (button_pressed_ind == 19) {
              $.flag_frankie_mission2_1_passed = 1;
              //"frankie Mission 2.1"
              Text.PrintBig("FM21", 1000, 4);
              await asyncWait(300);
              $.flag_frankie_mission2_1_passed = 0;
              // START_NEW_SCRIPT frankie_mission2.1_loop
              $.flag_frankie_mission2_passed = 1;
            }
            //"frankie Mission 3"
            // TEST STUFF
            //REMOVE FRANKIES BLIP
            if (button_pressed_ind == 20) {
              $.flag_frankie_mission3_passed = 1;
              //"frankie Mission 3"
              Text.PrintBig("FM3", 1000, 4);
              await asyncWait(300);
              $.flag_frankie_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT frankie_mission3_loop
              $.flag_frankie_mission2_1_passed = 1;
              //REMOVE FRANKIES BLIP
              $.frankie_contact_blip.remove();
              $.eightball_contact_blip.remove();
              $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
            }
            //"frankie Mission 4"
            //TEST STUFF
            //REMOVE 8_BALLS BLIP
            if (button_pressed_ind == 21) {
              $.flag_frankie_mission4_passed = 1;
              //"frankie Mission 4"
              Text.PrintBig("FM4", 1000, 4);
              await asyncWait(300);
              $.flag_frankie_mission4_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT frankie_mission4_loop
              $.flag_frankie_mission3_passed = 1;
              //REMOVE 8_BALLS BLIP
              $.eightball_contact_blip.remove();
              $.frankie_contact_blip.remove();
              $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
            }
            //"Diablo Mission 1"
            //TEST STUFF
            //REMOVE FRANKIES BLIP
            if (button_pressed_ind == 22) {
              $.flag_diablo_mission1_passed = 1;
              //"Diablo Mission 1"
              Text.PrintBig("DIAB1", 1000, 4);
              await asyncWait(300);
              $.flag_diablo_mission1_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT diablo_mission1_loop
              $.flag_frankie_mission4_passed = 1;
              //REMOVE FRANKIES BLIP
              $.frankie_contact_blip.remove();
              $.diablo_contact_blip.remove();
              $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
            }
            //"Diablo Mission 2"
            //TEST STUFF
            if (button_pressed_ind == 23) {
              $.flag_diablo_mission2_passed = 1;
              //"Diablo Mission 2"
              Text.PrintBig("DIAB2", 1000, 4);
              await asyncWait(300);
              $.flag_diablo_mission2_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT diablo_mission2_loop
              $.flag_diablo_mission1_passed = 1;
            }
            //"Diablo Mission 3"
            //TEST STUFF
            if (button_pressed_ind == 24) {
              $.flag_diablo_mission3_passed = 1;
              //"Diablo Mission 3"
              Text.PrintBig("DIAB3", 1000, 4);
              await asyncWait(300);
              $.flag_diablo_mission3_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT diablo_mission3_loop
              $.flag_diablo_mission2_passed = 1;
            }
            //"Diablo Mission 4"
            //TEST STUFF
            if (button_pressed_ind == 25) {
              $.flag_diablo_mission4_passed = 1;
              //"Diablo Mission 4"
              Text.PrintBig("DIAB4", 1000, 4);
              await asyncWait(300);
              $.flag_diablo_mission4_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT diablo_mission4_loop
              $.flag_diablo_mission3_passed = 1;
            }
            //"Meat Mission 1"
            //TEST STUFF
            if (button_pressed_ind == 26) {
              $.flag_meat_mission1_passed = 1;
              //"Meat Mission 1"
              Text.PrintBig("MEA1", 1000, 4);
              await asyncWait(300);
              $.flag_meat_mission1_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT meat_mission1_loop
              $.flag_diablo_mission4_passed = 1;
              $.diablo_contact_blip.remove();
            }
            //"Meat Mission 2"
            //TEST STUFF
            if (button_pressed_ind == 27) {
              $.flag_meat_mission2_passed = 1;
              //"Meat Mission 2"
              Text.PrintBig("MEA2", 1000, 4);
              await asyncWait(300);
              $.flag_meat_mission2_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT meat_mission2_loop
              $.flag_meat_mission1_passed = 1;
            }
            //"Meat Mission 3"
            //TEST STUFF
            if (button_pressed_ind == 28) {
              $.flag_meat_mission3_passed = 1;
              //"Meat Mission 3"
              Text.PrintBig("MEA3", 1000, 4);
              await asyncWait(300);
              $.flag_meat_mission3_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT meat_mission3_loop
              $.flag_meat_mission2_passed = 1;
            }
            //"Meat Mission 4"
            //TEST STUFF
            if (button_pressed_ind == 29) {
              $.flag_meat_mission4_passed = 1;
              //"Meat Mission 4"
              Text.PrintBig("MEA4", 1000, 4);
              await asyncWait(300);
              $.flag_meat_mission4_passed = 0;
              //TEST STUFF
              // START_NEW_SCRIPT meat_mission4_loop
              $.flag_meat_mission3_passed = 1;
            }
          }
        }
      }
    }
    //flag_industrial_passed = 1
    //flag_commercial_passed = 0
    //"asuka Mission 1"
    // TEST STUFF
    //"asuka Mission 2"
    //"asuka Mission 3"
    //"asuka Mission 4"
    //"asuka Mission 5"
    //"asuka Mission 6 (SUBURBAN MISSION)"
    //"asuka Mission 7 (SUBURBAN MISSION)"
    //"asuka Mission 8 (SUBURBAN MISSION)"
    //"kenji Mission 1"
    //"kenji Mission 2"
    //"kenji Mission 3"
    //"kenji Mission 4"
    //"kenji Mission 5"
    //"ray Mission 1"
    //"ray Mission 2"
    //"ray Mission 3"
    //"ray Mission 4"
    //"ray Mission 5"
    //"ray Mission 6"
    //flag_commercial_passed = 1
    //"love Mission 1"
    //"love Mission 2"
    //"love Mission 3"
    //"love Mission 4"
    //"love Mission 5"
    //"love Mission 6"
    //"love Mission 7"
    //"Yardie Mission 1"
    //"Yardie Mission 2"
    //"Yardie Mission 3"
    //"Yardie Mission 4"
    // SUBURBAN MISSION SKIP RIGHT
    if ($.flag_player_on_mission == 0) {
      //flag_industrial_passed = 1
      //flag_commercial_passed = 0
      //"asuka Mission 1"
      // TEST STUFF
      //"asuka Mission 2"
      //"asuka Mission 3"
      //"asuka Mission 4"
      //"asuka Mission 5"
      //"asuka Mission 6 (SUBURBAN MISSION)"
      //"asuka Mission 7 (SUBURBAN MISSION)"
      //"asuka Mission 8 (SUBURBAN MISSION)"
      //"kenji Mission 1"
      //"kenji Mission 2"
      //"kenji Mission 3"
      //"kenji Mission 4"
      //"kenji Mission 5"
      //"ray Mission 1"
      //"ray Mission 2"
      //"ray Mission 3"
      //"ray Mission 4"
      //"ray Mission 5"
      //"ray Mission 6"
      //flag_commercial_passed = 1
      //"love Mission 1"
      //"love Mission 2"
      //"love Mission 3"
      //"love Mission 4"
      //"love Mission 5"
      //"love Mission 6"
      //"love Mission 7"
      //"Yardie Mission 1"
      //"Yardie Mission 2"
      //"Yardie Mission 3"
      //"Yardie Mission 4"
      if (Pad.IsButtonPressed(1 /* PAD2 */, 11 /* DPADRIGHT */)) {
        //flag_industrial_passed = 1
        //flag_commercial_passed = 0
        //"asuka Mission 1"
        // TEST STUFF
        //"asuka Mission 2"
        //"asuka Mission 3"
        //"asuka Mission 4"
        //"asuka Mission 5"
        //"asuka Mission 6 (SUBURBAN MISSION)"
        //"asuka Mission 7 (SUBURBAN MISSION)"
        //"asuka Mission 8 (SUBURBAN MISSION)"
        //"kenji Mission 1"
        //"kenji Mission 2"
        //"kenji Mission 3"
        //"kenji Mission 4"
        //"kenji Mission 5"
        //"ray Mission 1"
        //"ray Mission 2"
        //"ray Mission 3"
        //"ray Mission 4"
        //"ray Mission 5"
        //"ray Mission 6"
        //flag_commercial_passed = 1
        //"love Mission 1"
        //"love Mission 2"
        //"love Mission 3"
        //"love Mission 4"
        //"love Mission 5"
        //"love Mission 6"
        //"love Mission 7"
        //"Yardie Mission 1"
        //"Yardie Mission 2"
        //"Yardie Mission 3"
        //"Yardie Mission 4"
        if ($.player.isPlaying()) {
          //flag_industrial_passed = 1
          //flag_commercial_passed = 0
          //"asuka Mission 1"
          // TEST STUFF
          //"asuka Mission 2"
          //"asuka Mission 3"
          //"asuka Mission 4"
          //"asuka Mission 5"
          //"asuka Mission 6 (SUBURBAN MISSION)"
          //"asuka Mission 7 (SUBURBAN MISSION)"
          //"asuka Mission 8 (SUBURBAN MISSION)"
          //"kenji Mission 1"
          //"kenji Mission 2"
          //"kenji Mission 3"
          //"kenji Mission 4"
          //"kenji Mission 5"
          //"ray Mission 1"
          //"ray Mission 2"
          //"ray Mission 3"
          //"ray Mission 4"
          //"ray Mission 5"
          //"ray Mission 6"
          //flag_commercial_passed = 1
          //"love Mission 1"
          //"love Mission 2"
          //"love Mission 3"
          //"love Mission 4"
          //"love Mission 5"
          //"love Mission 6"
          //"love Mission 7"
          //"Yardie Mission 1"
          //"Yardie Mission 2"
          //"Yardie Mission 3"
          //"Yardie Mission 4"
          if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
            button_pressed_com++;
            if (button_pressed_com > 30) {
              $.flag_yardie_mission4_passed = 1;
              await asyncWait(300);
              $.flag_asuka_mission1_passed = 0;
              $.flag_asuka_mission2_passed = 0;
              $.flag_asuka_mission3_passed = 0;
              $.flag_asuka_mission4_passed = 0;
              $.flag_asuka_mission5_passed = 0;
              $.flag_asuka_suburban_mission1_passed = 0;
              $.flag_asuka_suburban_mission2_passed = 0;
              $.flag_asuka_suburban_mission3_passed = 0;
              $.flag_kenji_mission1_passed = 0;
              $.flag_kenji_mission2_passed = 0;
              $.flag_kenji_mission3_passed = 0;
              $.flag_kenji_mission4_passed = 0;
              $.flag_kenji_mission5_passed = 0;
              $.flag_ray_mission1_passed = 0;
              $.flag_ray_mission2_passed = 0;
              $.flag_ray_mission3_passed = 0;
              $.flag_ray_mission4_passed = 0;
              $.flag_ray_mission5_passed = 0;
              $.flag_ray_mission6_passed = 0;
              $.flag_love_mission1_passed = 0;
              $.flag_love_mission2_passed = 0;
              $.flag_love_mission3_passed = 0;
              $.flag_love_mission4_passed = 0;
              $.flag_love_mission5_passed = 0;
              $.flag_love_mission6_passed = 0;
              $.flag_love_mission7_passed = 0;
              $.flag_yardie_mission1_passed = 0;
              $.flag_yardie_mission2_passed = 0;
              $.flag_yardie_mission3_passed = 0;
              $.flag_yardie_mission4_passed = 0;
              button_pressed_com = 1;
            }
            //"asuka Mission 1"
            // TEST STUFF
            if (button_pressed_com == 1) {
              $.flag_asuka_mission1_passed = 1;
              //"asuka Mission 1"
              Text.PrintBig("AM1", 1000, 4);
              Text.PrintNow("ASUKA", 2000, 1);
              await asyncWait(300);
              $.flag_asuka_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_mission1_loop
              $.yardie_contact_blip.remove();
              $.asuka_contact_blip.remove();
              $.asuka_contact_blip = Blip.AddSpriteForContactPoint(523.7, -643.0, 16.1, 1 /* RADAR_SPRITE_ASUKA */);
            }
            //"asuka Mission 2"
            // TEST STUFF
            if (button_pressed_com == 2) {
              $.flag_asuka_mission2_passed = 1;
              //"asuka Mission 2"
              Text.PrintBig("AM2", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_mission2_loop
              $.blip_yardie_created_before = 1;
              $.flag_asuka_mission1_passed = 1;
            }
            //"asuka Mission 3"
            // TEST STUFF
            if (button_pressed_com == 3) {
              $.flag_asuka_mission3_passed = 1;
              //"asuka Mission 3"
              Text.PrintBig("AM3", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_mission3_loop
              $.blip_yardie_created_before = 0;
              $.flag_asuka_mission2_passed = 1;
            }
            //"asuka Mission 4"
            // TEST STUFF
            if (button_pressed_com == 4) {
              $.flag_asuka_mission4_passed = 1;
              //"asuka Mission 4"
              Text.PrintBig("AM4", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_mission4_loop
              $.flag_asuka_mission3_passed = 1;
            }
            //"asuka Mission 5"
            // TEST STUFF
            if (button_pressed_com == 5) {
              $.flag_asuka_mission5_passed = 1;
              //"asuka Mission 5"
              Text.PrintBig("AM5", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_mission5_loop
              $.flag_asuka_mission4_passed = 1;
            }
            //"asuka Mission 6 (SUBURBAN MISSION)"
            // TEST STUFF
            if (button_pressed_com == 6) {
              $.flag_asuka_suburban_mission1_passed = 1;
              //"asuka Mission 6 (SUBURBAN MISSION)"
              Text.PrintBig("AS1", 1000, 4);
              Text.PrintNow("B_SITE", 2000, 1);
              await asyncWait(300);
              $.flag_asuka_suburban_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_suburban_mission1_loop
              $.flag_asuka_mission5_passed = 1;
              $.asuka_contact_blip.remove();
              $.asuka_contact_blip = Blip.AddSpriteForContactPoint(366.939, -328.025, 20.268, 1 /* RADAR_SPRITE_ASUKA */);
            }
            //"asuka Mission 7 (SUBURBAN MISSION)"
            // TEST STUFF
            if (button_pressed_com == 7) {
              $.flag_asuka_suburban_mission2_passed = 1;
              //"asuka Mission 7 (SUBURBAN MISSION)"
              Text.PrintBig("AS2", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_suburban_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_suburban_mission2_loop
              $.flag_asuka_suburban_mission1_passed = 1;
            }
            //"asuka Mission 8 (SUBURBAN MISSION)"
            // TEST STUFF
            if (button_pressed_com == 8) {
              $.flag_asuka_suburban_mission3_passed = 1;
              //"asuka Mission 8 (SUBURBAN MISSION)"
              Text.PrintBig("AS3", 1000, 4);
              await asyncWait(300);
              $.flag_asuka_suburban_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT asuka_suburban_mission3_loop
              $.flag_asuka_suburban_mission2_passed = 1;
            }
            //"kenji Mission 1"
            // TEST STUFF
            if (button_pressed_com == 9) {
              $.flag_kenji_mission1_passed = 1;
              //"kenji Mission 1"
              Text.PrintBig("KM1", 1000, 4);
              Text.PrintNow("KENJI", 2000, 1);
              await asyncWait(300);
              $.flag_kenji_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT kenji_mission1_loop
              $.flag_asuka_suburban_mission3_passed = 1;
              $.asuka_contact_blip.remove();
              $.kenji_contact_blip.remove();
              $.kenji_contact_blip = Blip.AddSpriteForContactPoint(459.1, -1413.0, 26.1, 11 /* RADAR_SPRITE_KENJI */);
            }
            //"kenji Mission 2"
            // TEST STUFF
            if (button_pressed_com == 10) {
              $.flag_kenji_mission2_passed = 1;
              //"kenji Mission 2"
              Text.PrintBig("KM2", 1000, 4);
              await asyncWait(300);
              $.flag_kenji_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT kenji_mission2_loop
              $.flag_kenji_mission1_passed = 1;
            }
            //"kenji Mission 3"
            // TEST STUFF
            if (button_pressed_com == 11) {
              $.flag_kenji_mission3_passed = 1;
              //"kenji Mission 3"
              Text.PrintBig("KM3", 1000, 4);
              await asyncWait(300);
              $.flag_kenji_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT kenji_mission3_loop
              $.flag_kenji_mission2_passed = 1;
            }
            //"kenji Mission 4"
            // TEST STUFF
            if (button_pressed_com == 12) {
              $.flag_kenji_mission4_passed = 1;
              //"kenji Mission 4"
              Text.PrintBig("KM4", 1000, 4);
              await asyncWait(300);
              $.flag_kenji_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT kenji_mission4_loop
              $.flag_kenji_mission3_passed = 1;
            }
            //"kenji Mission 5"
            // TEST STUFF
            if (button_pressed_com == 13) {
              $.flag_kenji_mission5_passed = 0;
              //"kenji Mission 5"
              Text.PrintBig("KM5", 1000, 4);
              await asyncWait(300);
              $.flag_kenji_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT kenji_mission5_loop
              $.flag_kenji_mission4_passed = 1;
            }
            //"ray Mission 1"
            // TEST STUFF
            if (button_pressed_com == 14) {
              $.flag_ray_mission1_passed = 1;
              //"ray Mission 1"
              Text.PrintBig("RM1", 1000, 4);
              Text.PrintNow("RAY", 2000, 1);
              await asyncWait(300);
              $.flag_ray_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission1_loop
              $.flag_kenji_mission5_passed = 1;
              $.kenji_contact_blip.remove();
              $.ray_contact_blip.remove();
              $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
            }
            //"ray Mission 2"
            // TEST STUFF
            if (button_pressed_com == 15) {
              $.flag_ray_mission2_passed = 1;
              //"ray Mission 2"
              Text.PrintBig("RM2", 1000, 4);
              await asyncWait(300);
              $.flag_ray_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission2_loop
              $.flag_ray_mission1_passed = 1;
            }
            //"ray Mission 3"
            // TEST STUFF
            if (button_pressed_com == 16) {
              $.flag_ray_mission3_passed = 1;
              //"ray Mission 3"
              Text.PrintBig("RM3", 1000, 4);
              await asyncWait(300);
              $.flag_ray_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission3_loop
              $.flag_ray_mission2_passed = 1;
            }
            //"ray Mission 4"
            // TEST STUFF
            if (button_pressed_com == 17) {
              $.flag_ray_mission4_passed = 1;
              //"ray Mission 4"
              Text.PrintBig("RM4", 1000, 4);
              await asyncWait(300);
              $.flag_ray_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission4_loop
              $.flag_ray_mission3_passed = 1;
            }
            //"ray Mission 5"
            // TEST STUFF
            if (button_pressed_com == 18) {
              $.flag_ray_mission5_passed = 1;
              //"ray Mission 5"
              Text.PrintBig("RM5", 1000, 4);
              await asyncWait(300);
              $.flag_ray_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission5_loop
              $.flag_ray_mission4_passed = 1;
            }
            //"ray Mission 6"
            // TEST STUFF
            //flag_industrial_passed = 1
            //flag_commercial_passed = 1
            if (button_pressed_com == 19) {
              $.flag_ray_mission6_passed = 1;
              //"ray Mission 6"
              Text.PrintBig("RM6", 1000, 4);
              await asyncWait(300);
              $.flag_ray_mission6_passed = 0;
              $.flag_love_mission3_passed = 1;
              // TEST STUFF
              // START_NEW_SCRIPT ray_mission6_loop
              //flag_industrial_passed = 1
              //flag_commercial_passed = 1
              $.flag_ray_mission5_passed = 1;
            }
            //"love Mission 1"
            // TEST STUFF
            if (button_pressed_com == 20) {
              $.flag_love_mission1_passed = 1;
              //"love Mission 1"
              Text.PrintBig("love1", 1000, 4);
              Text.PrintNow("LOVE", 2000, 1);
              await asyncWait(300);
              $.flag_love_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission1_loop
              $.flag_ray_mission6_passed = 1;
              $.ray_contact_blip.remove();
              $.love_contact_blip.remove();
              $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
            }
            //"love Mission 2"
            // TEST STUFF
            if (button_pressed_com == 21) {
              $.flag_love_mission2_passed = 1;
              //"love Mission 2"
              Text.PrintBig("love2", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission2_loop
              $.flag_love_mission1_passed = 1;
            }
            //"love Mission 3"
            // TEST STUFF
            if (button_pressed_com == 22) {
              $.flag_love_mission3_passed = 1;
              //"love Mission 3"
              Text.PrintBig("love3", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission3_loop
              $.flag_love_mission2_passed = 1;
            }
            //"love Mission 4"
            // TEST STUFF
            if (button_pressed_com == 23) {
              $.flag_love_mission4_passed = 1;
              //"love Mission 4"
              Text.PrintBig("love4", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission4_passed = 0;
              $.flag_asuka_suburban_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission4_loop
              $.flag_blip_hood_created = 1;
              $.flag_love_mission3_passed = 1;
            }
            //"love Mission 5"
            // TEST STUFF
            //flag_industrial_passed = 1
            //flag_commercial_passed = 1
            if (button_pressed_com == 24) {
              $.flag_love_mission5_passed = 1;
              //"love Mission 5"
              Text.PrintBig("love5", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission5_loop
              $.flag_blip_hood_created = 0;
              //flag_industrial_passed = 1
              //flag_commercial_passed = 1
              $.flag_love_mission4_passed = 1;
            }
            //"love Mission 6"
            // TEST STUFF
            //flag_industrial_passed = 1
            //flag_commercial_passed = 1
            if (button_pressed_com == 25) {
              $.flag_love_mission6_passed = 1;
              //"love Mission 6"
              Text.PrintBig("love6", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission6_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission6_loop
              //flag_industrial_passed = 1
              //flag_commercial_passed = 1
              $.flag_love_mission5_passed = 1;
            }
            //"love Mission 7"
            // TEST STUFF
            //flag_industrial_passed = 1
            //flag_commercial_passed = 1
            if (button_pressed_com == 26) {
              $.flag_love_mission7_passed = 1;
              //"love Mission 7"
              Text.PrintBig("love7", 1000, 4);
              await asyncWait(300);
              $.flag_love_mission7_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT love_mission7_loop
              //flag_industrial_passed = 1
              //flag_commercial_passed = 1
              $.flag_love_mission6_passed = 1;
            }
            //"Yardie Mission 1"
            // TEST STUFF
            if (button_pressed_com == 27) {
              $.flag_yardie_mission1_passed = 1;
              //"Yardie Mission 1"
              Text.PrintBig("YD1", 1000, 4);
              Text.PrintNow("YARDIE", 2000, 1);
              await asyncWait(300);
              $.flag_yardie_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT yardie_mission1_loop
              $.flag_love_mission7_passed = 1;
              $.love_contact_blip.remove();
              $.yardie_contact_blip.remove();
              $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
            }
            //"Yardie Mission 2"
            // TEST STUFF
            if (button_pressed_com == 28) {
              $.flag_yardie_mission2_passed = 1;
              //"Yardie Mission 2"
              Text.PrintBig("YD2", 1000, 4);
              await asyncWait(300);
              $.flag_yardie_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT yardie_mission2_loop
              $.flag_yardie_mission1_passed = 1;
            }
            //"Yardie Mission 3"
            // TEST STUFF
            if (button_pressed_com == 29) {
              $.flag_yardie_mission3_passed = 1;
              //"Yardie Mission 3"
              Text.PrintBig("YD3", 1000, 4);
              await asyncWait(300);
              $.flag_yardie_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT yardie_mission3_loop
              $.flag_yardie_mission2_passed = 1;
            }
            //"Yardie Mission 4"
            // TEST STUFF
            if (button_pressed_com == 30) {
              $.flag_yardie_mission4_passed = 1;
              //"Yardie Mission 4"
              Text.PrintBig("YD4", 1000, 4);
              await asyncWait(300);
              $.flag_yardie_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT yardie_mission4_loop
              $.flag_yardie_mission3_passed = 1;
            }
          }
        }
      }
    }
    //flag_commercial_passed = 1
    //flag_suburban_passed = 0
    //"Hood Mission 1"
    // TEST STUFF
    //"Hood Mission 2"
    //"Hood Mission 3"
    //"Hood Mission 4"
    //"Hood Mission 5"
    //"Final mission"
    if ($.flag_player_on_mission == 0) {
      //flag_commercial_passed = 1
      //flag_suburban_passed = 0
      //"Hood Mission 1"
      // TEST STUFF
      //"Hood Mission 2"
      //"Hood Mission 3"
      //"Hood Mission 4"
      //"Hood Mission 5"
      //"Final mission"
      if (Pad.IsButtonPressed(1 /* PAD2 */, 11 /* DPADRIGHT */)) {
        //flag_commercial_passed = 1
        //flag_suburban_passed = 0
        //"Hood Mission 1"
        // TEST STUFF
        //"Hood Mission 2"
        //"Hood Mission 3"
        //"Hood Mission 4"
        //"Hood Mission 5"
        //"Final mission"
        if ($.player.isPlaying()) {
          //flag_commercial_passed = 1
          //flag_suburban_passed = 0
          //"Hood Mission 1"
          // TEST STUFF
          //"Hood Mission 2"
          //"Hood Mission 3"
          //"Hood Mission 4"
          //"Hood Mission 5"
          //"Final mission"
          if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
            button_pressed_sub++;
            if (button_pressed_sub > 6) {
              $.flag_cat_mission1_passed = 1;
              await asyncWait(300);
              $.flag_cat_mission1_passed = 0;
              $.flag_hood_mission1_passed = 0;
              $.flag_hood_mission2_passed = 0;
              $.flag_hood_mission3_passed = 0;
              $.flag_hood_mission4_passed = 0;
              $.flag_hood_mission5_passed = 0;
              button_pressed_sub = 1;
            }
            //"Hood Mission 1"
            // TEST STUFF
            if (button_pressed_sub == 1) {
              $.flag_hood_mission1_passed = 1;
              //"Hood Mission 1"
              Text.PrintBig("HM_1", 1000, 4);
              Text.PrintNow("HOOD", 2000, 1);
              await asyncWait(300);
              $.flag_hood_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT hood_mission1_loop
              $.maria_contact_blip.remove();
              $.hood_contact_blip.remove();
              $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
            }
            //"Hood Mission 2"
            // TEST STUFF
            if (button_pressed_sub == 2) {
              $.flag_hood_mission2_passed = 1;
              //"Hood Mission 2"
              Text.PrintBig("HM_2", 1000, 4);
              await asyncWait(300);
              $.flag_hood_mission2_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT hood_mission2_loop
              $.flag_hood_mission1_passed = 1;
            }
            //"Hood Mission 3"
            // TEST STUFF
            if (button_pressed_sub == 3) {
              $.flag_hood_mission3_passed = 1;
              //"Hood Mission 3"
              Text.PrintBig("HM_3", 1000, 4);
              await asyncWait(300);
              $.flag_hood_mission3_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT hood_mission3_loop
              $.flag_hood_mission2_passed = 1;
            }
            //"Hood Mission 4"
            // TEST STUFF
            if (button_pressed_sub == 4) {
              $.flag_hood_mission4_passed = 1;
              //"Hood Mission 4"
              Text.PrintBig("HM_4", 1000, 4);
              await asyncWait(300);
              $.flag_hood_mission4_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT hood_mission4_loop
              $.flag_hood_mission3_passed = 1;
            }
            //"Hood Mission 5"
            // TEST STUFF
            if (button_pressed_sub == 5) {
              $.flag_hood_mission5_passed = 1;
              //"Hood Mission 5"
              Text.PrintBig("HM_5", 1000, 4);
              await asyncWait(300);
              $.flag_hood_mission5_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT hood_mission5_loop
              $.flag_hood_mission4_passed = 1;
            }
            //"Final mission"
            // TEST STUFF
            if (button_pressed_sub == 6) {
              $.flag_cat_mission1_passed = 1;
              //"Final mission"
              Text.PrintBig("CAT2", 1000, 4);
              await asyncWait(300);
              $.flag_cat_mission1_passed = 0;
              // TEST STUFF
              // START_NEW_SCRIPT cat_mission1_loop
              $.flag_hood_mission5_passed = 1;
              $.hood_contact_blip.remove();
              $.maria_contact_blip.remove();
              $.maria_contact_blip = Blip.AddSpriteForContactPoint(-362.8, 245.9, 60.0, 3 /* RADAR_SPRITE_CAT */);
            }
          }
        }
      }
    }
  }
  // SCM GOTO → mission_start_debug (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_debug"); // fallback: would break linear control flow
  // MissionBoundary
}

export async function debug() {
  // MissionBoundary
  // VAR_FLOAT x_float_m y_float_m z_float_m text_x text_y text_z text_h player_heading_debug debug_car_heading
  // VAR_INT magic_car button_press_flag car_colour car_colour2 intro_explosion_flag
  // VAR_INT flag_create_car initial_create_car initial_car_selected
  // VAR_INT counter_create_car colour_counter cheat_mode_on_flag cheat_mode_on
  // VAR_INT button_pressed_warp button_pressed_ind button_pressed_com button_pressed_sub
  // VAR_INT repeat_button_press slow_motion text_button_pressed players_car_debug
  // VAR_INT debug_crap_on crap_press_flag no_cars repeat_butt_press
  // VAR_INT weather_crap add_just_the_once_though invulnerability_on
  initial_create_car = 0;
  //CAR_CHEETAH
  counter_create_car = 105;
  button_pressed_warp = 0;
  button_pressed_ind = 0;
  button_pressed_com = 0;
  button_pressed_sub = 0;
  cheat_mode_on_flag = 0;
  cheat_mode_on = 0;
  weather_crap = 0;
  add_just_the_once_though = 0;
  // ScriptName
  // SET_DEATHARREST_STATE(false /* OFF */);
}
