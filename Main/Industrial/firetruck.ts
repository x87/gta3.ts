// Generated from Main/Industrial/firetruck.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_fire() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_fire_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.fire_time_limit = 0;
  $.fire_to_extinguish = 0;
  $.fire_to_extinguish_blip = 0;
  $.car_on_fire = 0;
  $.random_car_model = 0;
  $.car_on_fire_created = 0;
  $.player_in_range_fire = 0;
  $.flag_got_range_mssg = 0;
  $.score_ft = 250;
  $.displayed_timer = 0;
  $.fires_extinguished = 0;
  $.displayed_counter = 0;
  $.total_score = 0;
  $.first_fire_flag = 0;
  $.mission_end_button_ft = 0;
  $.fire_location = 0;
  $.time_divider_divider = 2.0;
}

async function next_fire() {
  await asyncWait(0);
  Game.SetWantedMultiplier(0.5);
  [$.player1_x, $.player1_y, $.player1_z] = $.player.getCoordinates();
  //"Fire truck mission cancelled!"
  if (!($.player.isInModel(90 /* CAR_FIRETRUCK */))) {
    //"Fire truck mission cancelled!"
    Text.PrintNow(F_CANC, 3000, 1);
    // SCM GOTO → failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
  }
  $.controlmode = Pad.GetControllerMode();
  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      $.mission_end_button_ft = 1;
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.mission_end_button_ft = 1;
    }
  }
  //"Fire truck mission cancelled!"
  //IF IS_PLAYER_IN_AREA_2D player 778.0 -1110.0 1540.0 190.0 0	 //INDUSTRIAL
  if ($.mission_end_button_ft == 1) {
    //"Fire truck mission cancelled!"
    if (!($.controlmode == 3)) {
      //"Fire truck mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        //"Fire truck mission cancelled!"
        Text.PrintNow(F_CANC, 3000, 1);
        // SCM GOTO → failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
      }
    }
    else {
      //"Fire truck mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        //"Fire truck mission cancelled!"
        Text.PrintNow(F_CANC, 3000, 1);
        // SCM GOTO → failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
      }
    }
  }
  //IF IS_PLAYER_IN_AREA_2D player -192.0 -1626.0 545.0 98.0 0  //COMMERCIAL
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.random_fire_x = Math.RandomFloatInRange(778.0, 1540.0);
    $.random_fire_y = Math.RandomFloatInRange(-1110.0, 190.0);
    $.flag_got_range_mssg = 0;
    $.player_in_range_fire = 1;
    $.fire_location = 1;
    $.time_divider = 13.0;
  }
  //IF IS_PLAYER_IN_AREA_2D player -1300.0 -608.8 -265.0 380.0 0  //SUBURBIA
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.random_fire_x = Math.RandomFloatInRange(-192.0, 545.0);
    $.random_fire_y = Math.RandomFloatInRange(-1626.0, 98.0);
    $.flag_got_range_mssg = 0;
    $.player_in_range_fire = 1;
    $.fire_location = 2;
    $.time_divider = 14.0;
  }
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.random_fire_x = Math.RandomFloatInRange(-1300.0, -414.0);
    $.random_fire_y = Math.RandomFloatInRange(-608.8, 380.0);
    $.flag_got_range_mssg = 0;
    $.player_in_range_fire = 1;
    $.fire_location = 3;
    $.time_divider = 11.0;
  }
  //"The radio is out of range, get closer."
  if ($.player_in_range_fire == 0 && $.flag_got_range_mssg == 0) {
    //"The radio is out of range, get closer."
    if ($.flag_got_range_mssg == 0) {
      //"The radio is out of range, get closer."
      Text.PrintNow(F_RANGE, 5000, 1);
      $.flag_got_range_mssg = 1;
    }
    // SCM GOTO → failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
  }
  [$.fire_coord_x, $.fire_coord_y, $.fire_coord_z] = Path.GetClosestCarNode($.random_fire_x, $.random_fire_y, $.player1_z);
  //MIN_X // CALAHAN BRIDGE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_coord_x > 670.0 && $.fire_coord_x < 1035.0 && $.fire_coord_y > -953.0 && $.fire_coord_y < -912.0) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MIN_X // TUNNEL ENTRANCE INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_coord_x > 649.0 && $.fire_coord_x < 1066.0 && $.fire_coord_y > 25.0 && $.fire_coord_y < 217.0) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MIN_X // AIRPORT SUBURBAN
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_coord_x > -1611.5 && $.fire_coord_x < -745.3 && $.fire_coord_y > -1001.9 && $.fire_coord_y < -371.2) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MIN_X // BAIT WAREHOUSE CARPARK SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_coord_x > -1255.4 && $.fire_coord_x < -1187.9 && $.fire_coord_y > 80.6 && $.fire_coord_y < 123.4) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MIN_X // FRANKIES HOUSE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_coord_x > 1386.4 && $.fire_coord_x < 1475.8 && $.fire_coord_y > -292.1 && $.fire_coord_y < -168.0) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  //MIN_X // INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_location == 1) {
    //MIN_X // INDUSTRIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.fire_coord_x > 778.0) || !($.fire_coord_x < 1540.0) || !($.fire_coord_y > -1110.0) || !($.fire_coord_y < 190.0)) {
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
  }
  //MIN_X // COMMERCIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_location == 2) {
    //MIN_X // COMMERCIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.fire_coord_x > -192.0) || !($.fire_coord_x < 545.0) || !($.fire_coord_y > -1626.0) || !($.fire_coord_y < 98.0)) {
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
  }
  //MIN_X // SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.fire_location == 3) {
    //MIN_X // SUBURBIA
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.fire_coord_x > -1300.0) || !($.fire_coord_x < -414.0) || !($.fire_coord_y > -608.8) || !($.fire_coord_y < 380.0)) {
      // SCM GOTO → next_fire (not lowered; manual jump required)
      throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
    }
  }
  if ($.fire_coord_z < -1.0) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  $.difference_x_float = $.player1_x - $.fire_coord_x;
  $.difference_y_float = $.player1_y - $.fire_coord_y;
  $.difference_x_float = $.difference_x_float * $.difference_x_float;
  $.difference_y_float = $.difference_y_float * $.difference_y_float;
  $.sum_difference_xy = $.difference_x_float + $.difference_y_float;
  $.players_distance_from_fire = Math.Sqrt($.sum_difference_xy);
  if ($.players_distance_from_fire < 200.0) {
    // SCM GOTO → next_fire (not lowered; manual jump required)
    throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
  }
  $.fire_time_limit_float = $.players_distance_from_fire / $.time_divider;
  $.time_divider += $.time_divider_divider;
  $.time_divider_divider += 2.0;
  $.fire_time_limit_float = $.fire_time_limit_float * 1000.0;
  $.intermediate_int = $.fire_time_limit_float;
  $.fire_time_limit += $.intermediate_int;
  if ($.fires_extinguished == 0) {
    if ($.fire_time_limit < 50000) {
      $.fire_time_limit = 50000;
    }
  }
}

async function generate_model() {
  //INC 90 NOT INC 140
  $.random_car_model = Math.RandomIntInRange(90, 140);
  // CAR_BUGGY CAR_CORPSE CAR_POLICE CAR_ENFORCER CAR_SECURICAR CAR_BANSHEE BOAT_PREDATOR CAR_BUS
  // CAR_RHINO CAR_BARRACKS TRAIN_SUBWAY HELI_POLICE PLANE_DODO CAR_COACH
  if ($.random_car_model > 113 && $.random_car_model < 128) {
    // SCM GOTO → generate_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_model"); // fallback: would break linear control flow
  }
  // CAR_BOXTER
  // CAR_FIRETRUCK
  // CAR_INFERNUS
  // CAR_CHEETAH
  if ($.random_car_model == 92 || $.random_car_model == 97 || $.random_car_model == 101 || $.random_car_model == 105) {
    // SCM GOTO → generate_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_model"); // fallback: would break linear control flow
  }
  // CAR_AMBULANCE
  // CAR_FBI
  // CAR_RCBANDIT
  // PLANE_AIRTRAIN
  if ($.random_car_model == 106 || $.random_car_model == 107 || $.random_car_model == 131 || $.random_car_model == 140) {
    // SCM GOTO → generate_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_model"); // fallback: would break linear control flow
  }
  Streaming.RequestModel($.random_car_model);
  {
  if ($.first_fire_flag == 1) {
    TIMERA = 0;
  }
  else {
    TIMERA = 3001;
    $.first_fire_flag = 1;
  }
  //"Fire truck mission cancelled!"
  while (!(Streaming.HasModelLoaded($.random_car_model)) || !(TIMERA > 3000)) {
    await asyncWait(0);
    if ($.fire_time_limit < 1) {
      Text.PrintNow(F_FAIL2, 5000, 1);
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }
    //"Fire truck mission cancelled!"
    if (!($.player.isInModel(90 /* CAR_FIRETRUCK */))) {
      //"Fire truck mission cancelled!"
      Text.PrintNow(F_CANC, 3000, 1);
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        $.mission_end_button_ft = 1;
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        $.mission_end_button_ft = 1;
      }
    }
    //"Fire truck mission cancelled!"
    if ($.mission_end_button_ft == 1) {
      //"Fire truck mission cancelled!"
      if (!($.controlmode == 3)) {
        //"Fire truck mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
          //"Fire truck mission cancelled!"
          Text.PrintNow(F_CANC, 3000, 1);
          // SCM GOTO → failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
        }
      }
      else {
        //"Fire truck mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
          //"Fire truck mission cancelled!"
          Text.PrintNow(F_CANC, 3000, 1);
          // SCM GOTO → failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
        }
      }
    }
  }
  }
  $.random_car_heading = Math.RandomFloatInRange(0.0, 359.9);
  if ($.car_on_fire_created == 0) {
    $.car_on_fire = Car.Create($.random_car_model, $.fire_coord_x, $.fire_coord_y, $.fire_coord_z);
    $.car_on_fire_created = 1;
  }
  $.dummy_ped_for_zone = Char.CreateInsideCar($.car_on_fire, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);
  $.car_on_fire.setHeading($.random_car_heading);
  $.fire_to_extinguish = ScriptFire.CreateCarFire($.car_on_fire);
  $.fire_to_extinguish_blip = Blip.AddForCar($.car_on_fire);
  $.car_on_fire.setIdle();
  $.dummy_ped_for_zone.setIdle();
  $.car_on_fire.setCruiseSpeed(0.0);
  //PRINT_NOW F_START 3000 1
  $.car_on_fire.setOnlyDamagedByPlayer(true /* TRUE */);
  // The suspect is in the Callahan Point area.
  if ($.dummy_ped_for_zone.isInZone("PORT_W")) {
    // The suspect is in the Callahan Point area.
    Text.PrintStringInStringNow(F_START, PORT_W, 5000, 1);
  }
  // The suspect is in the Atlantic Quays area.
  if ($.dummy_ped_for_zone.isInZone("PORT_S")) {
    // The suspect is in the Atlantic Quays area.
    Text.PrintStringInStringNow(F_START, PORT_S, 5000, 1);
  }
  // The suspect is in the Portland Harbour area.
  if ($.dummy_ped_for_zone.isInZone("PORT_E")) {
    // The suspect is in the Portland Harbour area.
    Text.PrintStringInStringNow(F_START, PORT_E, 5000, 1);
  }
  // The suspect is in the Trenton area.
  if ($.dummy_ped_for_zone.isInZone("PORT_I")) {
    // The suspect is in the Trenton area.
    Text.PrintStringInStringNow(F_START, PORT_I, 5000, 1);
  }
  // The suspect is in the Portland View area.
  if ($.dummy_ped_for_zone.isInZone("S_VIEW")) {
    // The suspect is in the Portland View area.
    Text.PrintStringInStringNow(F_START, S_VIEW, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Chinatown
  if ($.dummy_ped_for_zone.isInZone("CHINA")) {
    // The dummy_ped_for_zone is proceeding south in Chinatown
    Text.PrintStringInStringNow(F_START, CHINA, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Portland Beach
  if ($.dummy_ped_for_zone.isInZone("EASTBAY")) {
    // The dummy_ped_for_zone is proceeding south in Portland Beach
    Text.PrintStringInStringNow(F_START, EASTBAY, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Saint Mark's
  if ($.dummy_ped_for_zone.isInZone("LITTLEI")) {
    // The dummy_ped_for_zone is proceeding south in Saint Mark's
    Text.PrintStringInStringNow(F_START, LITTLEI, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Red Light District
  if ($.dummy_ped_for_zone.isInZone("REDLIGH")) {
    // The dummy_ped_for_zone is proceeding south in Red Light District
    Text.PrintStringInStringNow(F_START, REDLIGH, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Hepburn Heights
  if ($.dummy_ped_for_zone.isInZone("TOWERS")) {
    // The dummy_ped_for_zone is proceeding south in Hepburn Heights
    Text.PrintStringInStringNow(F_START, TOWERS, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Harwood
  if ($.dummy_ped_for_zone.isInZone("HARWOOD")) {
    // The dummy_ped_for_zone is proceeding south in Harwood
    Text.PrintStringInStringNow(F_START, HARWOOD, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Callahan Bridge
  if ($.dummy_ped_for_zone.isInZone("ROADBR1")) {
    // The dummy_ped_for_zone is proceeding south in Callahan Bridge
    Text.PrintStringInStringNow(F_START, ROADBR1, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Callahan Bridge
  //IF IS_CHAR_IN_ZONE dummy_ped_for_zone TUNNELP
  //	PRINT_STRING_IN_STRING_NOW F_START TUNNELP 5000 1 // The dummy_ped_for_zone is proceeding south in Porter Tunnel
  //ENDIF
  if ($.dummy_ped_for_zone.isInZone("ROADBR2")) {
    // The dummy_ped_for_zone is proceeding south in Callahan Bridge
    Text.PrintStringInStringNow(F_START, ROADBR2, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Aspatria
  if ($.dummy_ped_for_zone.isInZone("STADIUM")) {
    // The dummy_ped_for_zone is proceeding south in Aspatria
    Text.PrintStringInStringNow(F_START, STADIUM, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Rockford
  if ($.dummy_ped_for_zone.isInZone("HOSPI_2")) {
    // The dummy_ped_for_zone is proceeding south in Rockford
    Text.PrintStringInStringNow(F_START, HOSPI_2, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Liberty Campus
  if ($.dummy_ped_for_zone.isInZone("UNIVERS")) {
    // The dummy_ped_for_zone is proceeding south in Liberty Campus
    Text.PrintStringInStringNow(F_START, UNIVERS, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Fort Staunton
  if ($.dummy_ped_for_zone.isInZone("CONSTRU")) {
    // The dummy_ped_for_zone is proceeding south in Fort Staunton
    Text.PrintStringInStringNow(F_START, CONSTRU, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Belleville Park
  if ($.dummy_ped_for_zone.isInZone("PARK")) {
    // The dummy_ped_for_zone is proceeding south in Belleville Park
    Text.PrintStringInStringNow(F_START, PARK, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Newport
  if ($.dummy_ped_for_zone.isInZone("COM_EAS")) {
    // The dummy_ped_for_zone is proceeding south in Newport
    Text.PrintStringInStringNow(F_START, COM_EAS, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Bedford Point
  if ($.dummy_ped_for_zone.isInZone("SHOPING")) {
    // The dummy_ped_for_zone is proceeding south in Bedford Point
    Text.PrintStringInStringNow(F_START, SHOPING, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Torrington
  if ($.dummy_ped_for_zone.isInZone("YAKUSA")) {
    // The dummy_ped_for_zone is proceeding south in Torrington
    Text.PrintStringInStringNow(F_START, YAKUSA, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Francis International Airport
  if ($.dummy_ped_for_zone.isInZone("AIRPORT")) {
    // The dummy_ped_for_zone is proceeding south in Francis International Airport
    Text.PrintStringInStringNow(F_START, AIRPORT, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Wichita Gardens
  if ($.dummy_ped_for_zone.isInZone("PROJECT")) {
    // The dummy_ped_for_zone is proceeding south in Wichita Gardens
    Text.PrintStringInStringNow(F_START, PROJECT, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Pike Creek
  if ($.dummy_ped_for_zone.isInZone("SUB_IND")) {
    // The dummy_ped_for_zone is proceeding south in Pike Creek
    Text.PrintStringInStringNow(F_START, SUB_IND, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Cedar Grove
  if ($.dummy_ped_for_zone.isInZone("SWANKS")) {
    // The dummy_ped_for_zone is proceeding south in Cedar Grove
    Text.PrintStringInStringNow(F_START, SWANKS, 5000, 1);
  }
  // The dummy_ped_for_zone is proceeding south in Cochrane Dam
  if ($.dummy_ped_for_zone.isInZone("BIG_DAM")) {
    // The dummy_ped_for_zone is proceeding south in Cochrane Dam
    Text.PrintStringInStringNow(F_START, BIG_DAM, 5000, 1);
  }
  $.dummy_ped_for_zone.delete();
  if ($.displayed_timer == 0) {
    Hud.DisplayTimer($.fire_time_limit);
    $.displayed_timer = 1;
  }
  Text.ClearHelp();
  //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
  if ($.got_siren_help_before == 1) {
    $.controlmode = Pad.GetControllerMode();
    //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
    if ($.controlmode == 0) {
      //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
      Text.PrintHelp(SIREN_1);
    }
    //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
    if ($.controlmode == 1) {
      //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
      Text.PrintHelp(SIREN_2);
    }
    //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
    if ($.controlmode == 2) {
      //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
      Text.PrintHelp(SIREN_3);
    }
    //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
    if ($.controlmode == 3) {
      //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
      Text.PrintHelp(SIREN_4);
    }
    $.got_siren_help_before = 2;
  }
  //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
  if ($.got_siren_help_before == 0) {
    $.controlmode = Pad.GetControllerMode();
    //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
    if ($.controlmode == 0) {
      //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
      Text.PrintHelp(SPRAY_1);
    }
    //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
    if ($.controlmode == 1) {
      //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
      Text.PrintHelp(SPRAY_1);
    }
    //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
    if ($.controlmode == 2) {
      //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
      Text.PrintHelp(SPRAY_1);
    }
    //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
    if ($.controlmode == 3) {
      //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
      Text.PrintHelp(SPRAY_4);
    }
    $.got_siren_help_before = 1;
  }
  //"Fire truck mission cancelled!"
  while (!($.fire_to_extinguish.isExtinguished())) {
    await asyncWait(0);
    if (Car.IsDead($.car_on_fire)) {
      Text.PrintNow(F_FAIL2, 5000, 1);
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }
    if ($.fire_time_limit < 1) {
      Text.PrintNow(F_FAIL2, 5000, 1);
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }
    //"Fire truck mission cancelled!"
    if (!($.player.isInModel(90 /* CAR_FIRETRUCK */))) {
      //"Fire truck mission cancelled!"
      Text.PrintNow(F_CANC, 3000, 1);
      // SCM GOTO → failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
    }
    $.car_on_fire_health = $.car_on_fire.getHealth();
    if ($.car_on_fire_health < 900) {
      $.car_on_fire.explode();
    }
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        $.mission_end_button_ft = 1;
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        $.mission_end_button_ft = 1;
      }
    }
    //"Fire truck mission cancelled!"
    if ($.mission_end_button_ft == 1) {
      //"Fire truck mission cancelled!"
      if (!($.controlmode == 3)) {
        //"Fire truck mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
          //"Fire truck mission cancelled!"
          Text.PrintNow(F_CANC, 3000, 1);
          // SCM GOTO → failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
        }
      }
      else {
        //"Fire truck mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
          //"Fire truck mission cancelled!"
          Text.PrintNow(F_CANC, 3000, 1);
          // SCM GOTO → failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO failed"); // fallback: would break linear control flow
        }
      }
    }
  }
  /////////////////////////////////////////////////
  // SCM GOTO → passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO passed"); // fallback: would break linear control flow
}

async function passed() {
  ++$.fires_extinguished;
  Text.PrintBig(F_PASS1, 5000, 5);
  Text.PrintWithNumberBig(REWARD, $.score_ft, 6000, 6);
  Stat.RegisterFireExtinguished();
  if ($.fire_location == 1) {
    ++$.ind_fires_exting;
  }
  if ($.fire_location == 2) {
    ++$.com_fires_exting;
  }
  if ($.fire_location == 3) {
    ++$.sub_fires_exting;
  }
  //"Flamethrower delivered to hideout"
  if ($.earned_free_flamethrower == 0) {
    //"Flamethrower delivered to hideout"
    if ($.ind_fires_exting > 19 && $.com_fires_exting > 19 && $.sub_fires_exting > 19) {
      //"Flamethrower delivered to hideout"
      Pager.AddMessage(PAGEB11, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.earned_free_flamethrower = 1;
    }
  }
  $.player.addScore($.score_ft);
  $.total_score += $.score_ft;
  $.score_ft += 250;
  World.RemoveAllScriptFires();
  $.fire_to_extinguish_blip.remove();
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  //earned_free_flamethrower PAGEB11
  if ($.player.isInAnyCar()) {
    $.players_firetruck = $.player.storeCarIsIn();
    $.players_firetruck_health = $.players_firetruck.getHealth();
    $.players_firetruck_health += 150;
    $.players_firetruck.setHealth($.players_firetruck_health);
  }
  if ($.displayed_counter == 0) {
    Hud.DisplayCounterWithString($.fires_extinguished, 0 /* COUNTER_DISPLAY_NUMBER */, F_EXTIN);
    $.displayed_counter = 1;
  }
  if ($.car_on_fire_created == 1) {
    $.car_on_fire.markAsNoLongerNeeded();
    if (!(Car.IsDead($.car_on_fire))) {
      $.car_on_fire.setOnlyDamagedByPlayer(false /* FALSE */);
    }
    $.car_on_fire_created = 0;
  }
  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);
  /////////////////////////////////////////////////
  // SCM GOTO → next_fire (not lowered; manual jump required)
  throw new Error("unresolved GOTO next_fire"); // fallback: would break linear control flow
}

async function failed() {
  Hud.ClearTimer($.fire_time_limit);
  Hud.ClearCounter($.fires_extinguished);
  Text.PrintBig(F_FAIL1, 5000, 5);
  Text.PrintWithNumberBig(TSCORE, $.total_score, 6000, 6);
  World.RemoveAllScriptFires();
  $.fire_to_extinguish_blip.remove();
  Text.ClearHelp();
  Game.SetWantedMultiplier(1.0);
  if ($.car_on_fire_created == 1) {
    if (!(Car.IsDead($.car_on_fire))) {
      $.car_on_fire.setOnlyDamagedByPlayer(false /* FALSE */);
      $.car_on_fire.explode();
    }
    $.car_on_fire.markAsNoLongerNeeded();
    $.car_on_fire_created = 0;
  }
  Streaming.MarkModelAsNoLongerNeeded($.random_car_model);
  $.flag_player_on_mission = 0;
  $.flag_player_on_fire_mission = 0;
  Mission.Finish();
  return;
}

export async function firetruck() {
  // *****************************************************************************************
  // *************************************** Fire missions ***********************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_fire
  await mission_start_fire();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB failed
  await failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT fire_time_limit fire_to_extinguish fire_to_extinguish_blip car_on_fire random_car_model fires_extinguished
  // VAR_INT car_on_fire_created player_in_range_fire flag_got_range_mssg intermediate_int score_ft displayed_timer
  // VAR_INT total_score displayed_counter first_fire_flag mission_end_button_ft fire_location dummy_ped_for_zone
  // VAR_INT players_firetruck players_firetruck_health car_on_fire_health
  // VAR_FLOAT random_fire_x random_fire_y time_divider time_divider_divider
  // VAR_FLOAT player1_x player1_y player1_z
  // VAR_FLOAT fire_coord_x fire_coord_y fire_coord_z
  // VAR_FLOAT difference_x_float difference_y_float sum_difference_xy
  // ****************************************Mission Start************************************
  // VAR_FLOAT players_distance_from_fire fire_time_limit_float random_car_heading
}
