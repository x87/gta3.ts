// Generated from Main/Industrial/copcar.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_cop_car() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_cop_mission = 1;
  $.vigilante_bonus_kills = 5;
  // ScriptName
  $.total_criminals_killed = 0;
  $.got_cop_breif = 0;
  await asyncWait(0);
}

async function next_cop_car() {
  $.got_range_message = 0;
  $.player_in_range = 0;
  $.car_model = 0;
  $.criminal_car = 0;
  $.criminal_created_flag = 0;
  $.criminal = 0;
  $.criminal_blip = 0;
  $.random_gun = 0;
  $.cop_time_limit = 0;
  $.got_car_crim_is_in = 0;
  $.timer_reset_flag = 0;
  $.game_time_flag = 0;
  $.mission_end_button = 0;
  $.location = 0;
  $.copcar_cancelled_flag = 0;
  $.player_c_x = 0.0;
  $.player_c_y = 0.0;
  $.player_c_z = 0.0;
  $.random_crim_x = 0.0;
  $.random_crim_y = 0.0;
  $.criminal_coord_x = 0.0;
  $.criminal_coord_y = 0.0;
  $.criminal_coord_z = 0.0;
  $.diff_x_float = 0.0;
  $.diff_y_float = 0.0;
  $.sum_of_diff_xy = 0.0;
  $.players_distance_from_criminal = 0.0;
  $.cop_time_limit_float = 0.0;
  $.criminal_heading = 0.0;
  [$.player_c_x, $.player_c_y, $.player_c_z] = $.player.getCoordinates();
  Streaming.RequestModel(car`SENTINEL`);
  {
}

async function criminal_in_car() {
  await asyncWait(0);
  if ($.got_cop_breif == 0) {
    Text.PrintNow(LEGAL, 3000, 1);
    TIMERB = 0;
    $.got_cop_breif = 1;
  }
  else {
    TIMERB = 3000;
  }
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.random_crim_x = Math.RandomFloatInRange(778.0, 1540.0);
    $.random_crim_y = Math.RandomFloatInRange(-1110.0, 190.0);
    $.got_range_message = 0;
    $.player_in_range = 1;
    $.location = 1;
  }
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.random_crim_x = Math.RandomFloatInRange(-192.0, 545.0);
    $.random_crim_y = Math.RandomFloatInRange(-1626.0, 98.0);
    $.got_range_message = 0;
    $.player_in_range = 1;
    $.location = 2;
  }
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.random_crim_x = Math.RandomFloatInRange(-1300.0, -414.0);
    $.random_crim_y = Math.RandomFloatInRange(-608.8, 380.0);
    $.got_range_message = 0;
    $.player_in_range = 1;
    $.location = 3;
  }
  //"The radio is out of range, get closer to a police station!"
  if ($.player_in_range == 0) {
    //"The radio is out of range, get closer to a police station!"
    if ($.got_range_message == 0) {
      //"The radio is out of range, get closer to a police station!"
      Text.PrintNow(C_RANGE, 5000, 1);
      $.got_range_message = 1;
    }
    // SCM GOTO → cop_car_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
  }
  // SCM GOSUB copcar_cancelled_checks
  await copcar_cancelled_checks();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.copcar_cancelled_flag == 1) {
    // SCM GOTO → cop_car_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
  }
  [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = Path.GetClosestCarNode($.random_crim_x, $.random_crim_y, $.player_c_z);
  //MIN_X // COLOMBIAN BOAT
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 1398.0 && $.criminal_coord_x < 1615.0 && $.criminal_coord_y > -965.0 && $.criminal_coord_y < -902.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // BACK OF LUIGI'S
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 879.0 && $.criminal_coord_x < 892.0 && $.criminal_coord_y > -427.0 && $.criminal_coord_y < -407.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // FISH FACTORY
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 944.8 && $.criminal_coord_x < 1017.1 && $.criminal_coord_y > -1148.8 && $.criminal_coord_y < -1076.6) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // CHINATOWN MARKET
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 920.8 && $.criminal_coord_x < 1004.0 && $.criminal_coord_y > -754.2 && $.criminal_coord_y < -670.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // CALAHAN BRIDGE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 670.0 && $.criminal_coord_x < 1035.0 && $.criminal_coord_y > -953.0 && $.criminal_coord_y < -912.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // DOCKS INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 1364.0 && $.criminal_coord_x < 1641.0 && $.criminal_coord_y > -1165.0 && $.criminal_coord_y < -617.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // TUNNEL ENTRANCE INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 649.0 && $.criminal_coord_x < 1066.0 && $.criminal_coord_y > 25.0 && $.criminal_coord_y < 217.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // AIRPORT SUBURBAN
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > -1611.5 && $.criminal_coord_x < -745.3 && $.criminal_coord_y > -1001.9 && $.criminal_coord_y < -371.2) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // OLD SCHOOL HALL AND PARK AREA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 939.8 && $.criminal_coord_x < 1035.6 && $.criminal_coord_y > -901.3 && $.criminal_coord_y < -828.2) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // DOG FOOD FACTORY
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 1215.3 && $.criminal_coord_x < 1223.7 && $.criminal_coord_y > -839.4 && $.criminal_coord_y < -763.6) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // INDUSTRIAL SAFEHOUSE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 845.3 && $.criminal_coord_x < 899.6 && $.criminal_coord_y > -312.6 && $.criminal_coord_y < -295.7) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // DOJO COMMERCIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 113.3 && $.criminal_coord_x < 99.7 && $.criminal_coord_y > -1284.8 && $.criminal_coord_y < -1273.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // COLOMBIAN OJG COMPOUND
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 18.33 && $.criminal_coord_x < 92.06 && $.criminal_coord_y > -388.7 && $.criminal_coord_y < -312.38) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // BAIT WAREHOUSE CARPARK SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > -1255.4 && $.criminal_coord_x < -1187.9 && $.criminal_coord_y > 80.6 && $.criminal_coord_y < 123.4) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // FRANKIES HOUSE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.criminal_coord_x > 1386.4 && $.criminal_coord_x < 1475.8 && $.criminal_coord_y > -292.1 && $.criminal_coord_y < -168.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  //MIN_X // INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.location == 1) {
    //MIN_X // INDUSTRIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.criminal_coord_x > 778.0) || !($.criminal_coord_x < 1540.0) || !($.criminal_coord_y > -1110.0) || !($.criminal_coord_y < 190.0)) {
      // SCM GOTO → criminal_in_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
    }
  }
  //MIN_X // COMMERCIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.location == 2) {
    //MIN_X // COMMERCIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.criminal_coord_x > -192.0) || !($.criminal_coord_x < 545.0) || !($.criminal_coord_y > -1626.0) || !($.criminal_coord_y < 98.0)) {
      // SCM GOTO → criminal_in_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
    }
  }
  //MIN_X // SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.location == 3) {
    //MIN_X // SUBURBIA
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.criminal_coord_x > -1300.0) || !($.criminal_coord_x < -414.0) || !($.criminal_coord_y > -608.8) || !($.criminal_coord_y < 380.0)) {
      // SCM GOTO → criminal_in_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
    }
  }
  if ($.criminal_coord_z < -1.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  $.diff_x_float = $.player_c_x - $.criminal_coord_x;
  $.diff_y_float = $.player_c_y - $.criminal_coord_y;
  $.diff_x_float = $.diff_x_float * $.diff_x_float;
  $.diff_y_float = $.diff_y_float * $.diff_y_float;
  $.sum_of_diff_xy = $.diff_x_float + $.diff_y_float;
  $.players_distance_from_criminal = Math.Sqrt($.sum_of_diff_xy);
  if ($.players_distance_from_criminal < 150.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  $.cop_time_limit_float = $.players_distance_from_criminal / 4.0;
  $.cop_time_limit_float = $.cop_time_limit_float * 1000.0;
  $.cop_time_limit = $.cop_time_limit_float;
  if ($.cop_time_limit < 120000) {
    $.cop_time_limit = 120000;
  }
}

async function generate_car_model() {
  $.car_model = Math.RandomIntInRange(90, 140);
  // CAR_BUGGY CAR_CORPSE CAR_POLICE CAR_ENFORCER CAR_SECURICAR CAR_BANSHEE BOAT_PREDATOR CAR_BUS
  // CAR_RHINO CAR_BARRACKS TRAIN_SUBWAY HELI_POLICE PLANE_DODO CAR_COACH
  if ($.car_model > 113 && $.car_model < 128) {
    // SCM GOTO → generate_car_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_car_model"); // fallback: would break linear control flow
  }
  // CAR_FIRETRUCK
  if ($.car_model == 97) {
    // SCM GOTO → generate_car_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_car_model"); // fallback: would break linear control flow
  }
  // CAR_AMBULANCE
  // CAR_FBI
  // CAR_RCBANDIT
  // PLANE_AIRTRAIN
  if ($.car_model == 106 || $.car_model == 107 || $.car_model == 131 || $.car_model == 140) {
    // SCM GOTO → generate_car_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_car_model"); // fallback: would break linear control flow
  }
  Streaming.RequestModel(car`model`);
  while (!(Streaming.HasModelLoaded(car`model`))) {
    await asyncWait(0);
    // SCM GOSUB copcar_cancelled_checks
    await copcar_cancelled_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
  }
  $.criminal_heading = Math.RandomFloatInRange(0.0, 359.9);
  while (!(TIMERB > 3000)) {
    await asyncWait(0);
    // SCM GOSUB copcar_cancelled_checks
    await copcar_cancelled_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
  }
  $.criminal_car = Car.Create($.car_model, $.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  $.criminal_car.setAvoidLevelTransitions(true /* TRUE */);
  $.criminal_car.setHealth(800);
  Streaming.MarkModelAsNoLongerNeeded(car`model`);
  $.criminal_car.setHeading($.criminal_heading);
  [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = Path.GetClosestCharNode($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  $.criminal = Char.CreateRandom($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  //SET_CHAR_AVOID_LEVEL_TRANSITIONS criminal TRUE
  $.criminal.setIsChrisCriminal(true /* TRUE */);
  $.criminal.warpIntoCar($.criminal_car);
  $.criminal.setRunning(true /* TRUE */);
  $.criminal.setOnlyDamagedByPlayer(true /* TRUE */);
  $.criminal.clearThreatSearch();
  $.criminal.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.criminal.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.criminal.setThreatSearch(1 /* THREAT_PLAYER2 */);
  $.criminal.setThreatSearch(2 /* THREAT_PLAYER3 */);
  $.criminal.setThreatSearch(3 /* THREAT_PLAYER4 */);
  $.criminal.setThreatSearch(4 /* THREAT_CIVMALE */);
  $.criminal.setThreatSearch(5 /* THREAT_CIVFEMALE */);
  $.criminal.setThreatSearch(6 /* THREAT_COP */);
  $.criminal.setThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.criminal.setThreatSearch(9 /* THREAT_GANG_DIABLO */);
  $.criminal.setThreatSearch(8 /* THREAT_GANG_TRIAD */);
  $.criminal.setThreatSearch(11 /* THREAT_GANG_YARDIE */);
  $.criminal.setThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
  $.criminal.setThreatSearch(13 /* THREAT_GANG_HOOD */);
  $.criminal.setThreatSearch(10 /* THREAT_GANG_YAKUZA */);
  $.criminal.setThreatSearch(16 /* THREAT_EMERGENCY */);
  $.criminal.setThreatSearch(17 /* THREAT_PROSTITUTE */);
  $.criminal.setThreatSearch(18 /* THREAT_CRIMINAL */);
  $.criminal.setThreatSearch(20 /* THREAT_GUN */);
  $.criminal.setThreatSearch(21 /* THREAT_COP_CAR */);
  $.criminal.setThreatSearch(22 /* THREAT_FAST_CAR */);
  $.criminal.setThreatSearch(24 /* THREAT_FIREMAN */);
  $.criminal.setHeedThreats(true /* TRUE */);
  $.criminal_car.markAsNoLongerNeeded();
  if ($.flag_industrial_passed == 0) {
    $.random_gun = Math.RandomIntInRange(0, 5);
  }
  if ($.flag_industrial_passed == 1) {
    $.random_gun = Math.RandomIntInRange(2, 6);
  }
  if ($.flag_commercial_passed == 1) {
    $.random_gun = Math.RandomIntInRange(3, 10);
  }
  $.criminal.giveWeapon($.random_gun, 1000);
  $.criminal_blip = Blip.AddForChar($.criminal);
  Text.ClearHelp();
  //"To turn on this vehicles sirens tap the ~h~L1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~R1 button~w~."
  //"To turn on this vehicles sirens tap the ~h~L3 button~w~."
  if ($.got_siren_help_before == 0) {
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
    $.got_siren_help_before = 1;
  }
  // The suspect is in the Callahan Point area.
  if ($.criminal.isInZone("PORT_W")) {
    // The suspect is in the Callahan Point area.
    Text.PrintStringInStringNow(C_BREIF, PORT_W, 5000, 1);
  }
  // The suspect is in the Atlantic Quays area.
  if ($.criminal.isInZone("PORT_S")) {
    // The suspect is in the Atlantic Quays area.
    Text.PrintStringInStringNow(C_BREIF, PORT_S, 5000, 1);
  }
  // The suspect is in the Portland Harbour area.
  if ($.criminal.isInZone("PORT_E")) {
    // The suspect is in the Portland Harbour area.
    Text.PrintStringInStringNow(C_BREIF, PORT_E, 5000, 1);
  }
  // The suspect is in the Trenton area.
  if ($.criminal.isInZone("PORT_I")) {
    // The suspect is in the Trenton area.
    Text.PrintStringInStringNow(C_BREIF, PORT_I, 5000, 1);
  }
  // The suspect is in the Portland View area.
  if ($.criminal.isInZone("S_VIEW")) {
    // The suspect is in the Portland View area.
    Text.PrintStringInStringNow(C_BREIF, S_VIEW, 5000, 1);
  }
  // The criminal is proceeding south in Chinatown
  if ($.criminal.isInZone("CHINA")) {
    // The criminal is proceeding south in Chinatown
    Text.PrintStringInStringNow(C_BREIF, CHINA, 5000, 1);
  }
  // The criminal is proceeding south in Portland Beach
  if ($.criminal.isInZone("EASTBAY")) {
    // The criminal is proceeding south in Portland Beach
    Text.PrintStringInStringNow(C_BREIF, EASTBAY, 5000, 1);
  }
  // The criminal is proceeding south in Saint Mark's
  if ($.criminal.isInZone("LITTLEI")) {
    // The criminal is proceeding south in Saint Mark's
    Text.PrintStringInStringNow(C_BREIF, LITTLEI, 5000, 1);
  }
  // The criminal is proceeding south in Red Light District
  if ($.criminal.isInZone("REDLIGH")) {
    // The criminal is proceeding south in Red Light District
    Text.PrintStringInStringNow(C_BREIF, REDLIGH, 5000, 1);
  }
  // The criminal is proceeding south in Hepburn Heights
  if ($.criminal.isInZone("TOWERS")) {
    // The criminal is proceeding south in Hepburn Heights
    Text.PrintStringInStringNow(C_BREIF, TOWERS, 5000, 1);
  }
  // The criminal is proceeding south in Harwood
  if ($.criminal.isInZone("HARWOOD")) {
    // The criminal is proceeding south in Harwood
    Text.PrintStringInStringNow(C_BREIF, HARWOOD, 5000, 1);
  }
  // The criminal is proceeding south in Callahan Bridge
  if ($.criminal.isInZone("ROADBR1")) {
    // The criminal is proceeding south in Callahan Bridge
    Text.PrintStringInStringNow(C_BREIF, ROADBR1, 5000, 1);
  }
  // The criminal is proceeding south in Callahan Bridge
  //IF IS_CHAR_IN_ZONE criminal TUNNELP
  //	PRINT_STRING_IN_STRING_NOW C_BREIF TUNNELP 5000 1 // The criminal is proceeding south in Porter Tunnel
  //ENDIF
  if ($.criminal.isInZone("ROADBR2")) {
    // The criminal is proceeding south in Callahan Bridge
    Text.PrintStringInStringNow(C_BREIF, ROADBR2, 5000, 1);
  }
  // The criminal is proceeding south in Aspatria
  if ($.criminal.isInZone("STADIUM")) {
    // The criminal is proceeding south in Aspatria
    Text.PrintStringInStringNow(C_BREIF, STADIUM, 5000, 1);
  }
  // The criminal is proceeding south in Rockford
  if ($.criminal.isInZone("HOSPI_2")) {
    // The criminal is proceeding south in Rockford
    Text.PrintStringInStringNow(C_BREIF, HOSPI_2, 5000, 1);
  }
  // The criminal is proceeding south in Liberty Campus
  if ($.criminal.isInZone("UNIVERS")) {
    // The criminal is proceeding south in Liberty Campus
    Text.PrintStringInStringNow(C_BREIF, UNIVERS, 5000, 1);
  }
  // The criminal is proceeding south in Fort Staunton
  if ($.criminal.isInZone("CONSTRU")) {
    // The criminal is proceeding south in Fort Staunton
    Text.PrintStringInStringNow(C_BREIF, CONSTRU, 5000, 1);
  }
  // The criminal is proceeding south in Belleville Park
  if ($.criminal.isInZone("PARK")) {
    // The criminal is proceeding south in Belleville Park
    Text.PrintStringInStringNow(C_BREIF, PARK, 5000, 1);
  }
  // The criminal is proceeding south in Newport
  if ($.criminal.isInZone("COM_EAS")) {
    // The criminal is proceeding south in Newport
    Text.PrintStringInStringNow(C_BREIF, COM_EAS, 5000, 1);
  }
  // The criminal is proceeding south in Bedford Point
  if ($.criminal.isInZone("SHOPING")) {
    // The criminal is proceeding south in Bedford Point
    Text.PrintStringInStringNow(C_BREIF, SHOPING, 5000, 1);
  }
  // The criminal is proceeding south in Torrington
  if ($.criminal.isInZone("YAKUSA")) {
    // The criminal is proceeding south in Torrington
    Text.PrintStringInStringNow(C_BREIF, YAKUSA, 5000, 1);
  }
  // The criminal is proceeding south in Francis International Airport
  if ($.criminal.isInZone("AIRPORT")) {
    // The criminal is proceeding south in Francis International Airport
    Text.PrintStringInStringNow(C_BREIF, AIRPORT, 5000, 1);
  }
  // The criminal is proceeding south in Wichita Gardens
  if ($.criminal.isInZone("PROJECT")) {
    // The criminal is proceeding south in Wichita Gardens
    Text.PrintStringInStringNow(C_BREIF, PROJECT, 5000, 1);
  }
  // The criminal is proceeding south in Pike Creek
  if ($.criminal.isInZone("SUB_IND")) {
    // The criminal is proceeding south in Pike Creek
    Text.PrintStringInStringNow(C_BREIF, SUB_IND, 5000, 1);
  }
  // The criminal is proceeding south in Cedar Grove
  if ($.criminal.isInZone("SWANKS")) {
    // The criminal is proceeding south in Cedar Grove
    Text.PrintStringInStringNow(C_BREIF, SWANKS, 5000, 1);
  }
  // The criminal is proceeding south in Cochrane Dam
  if ($.criminal.isInZone("BIG_DAM")) {
    // The criminal is proceeding south in Cochrane Dam
    Text.PrintStringInStringNow(C_BREIF, BIG_DAM, 5000, 1);
  }
  [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal.getCoordinates();
  Audio.PoliceRadioMessage($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  TIMERB = 0;
  Hud.DisplayTimer($.cop_time_limit);
  //"The suspect has escaped!"
  //"Your time as a law enforcer is over!"
  //range_int//
  while (!(Char.IsDead($.criminal))) {
    //"The suspect has escaped!"
    //"Your time as a law enforcer is over!"
    if ($.cop_time_limit < 1) {
      //"The suspect has escaped!"
      //"Your time as a law enforcer is over!"
      if (!($.player.locateAnyMeansChar2D($.criminal, 100.0, 100.0, false))) {
        $.criminal_blip.remove();
        $.criminal.delete();
        $.criminal_created_flag = 0;
        //"The suspect has escaped!"
        Text.PrintNow(C_ESCP, 3000, 1);
      }
      else {
        //"Your time as a law enforcer is over!"
        Text.PrintNow(C_TIME, 3000, 1);
      }
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
    // SCM GOSUB copcar_cancelled_checks
    await copcar_cancelled_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.copcar_cancelled_flag == 1) {
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
    if ($.got_car_crim_is_in == 0) {
      if (!($.criminal.isHealthGreater(70))) {
        $.criminal.setObjStealAnyCar();
      }
    }
    if ($.criminal.isInAnyCar() && $.got_car_crim_is_in == 0) {
      $.criminal_car.markAsNoLongerNeeded();
      $.criminal_car = $.criminal.storeCarIsIn();
      $.criminal_car.setUpsidedownNotDamaged(true /* TRUE */);
      $.criminal_car.setDrivingStyle(2);
      $.criminal_car.setCruiseSpeed(42.0);
      $.criminal_car.wanderRandomly();
      $.criminal_car.setAvoidLevelTransitions(true /* TRUE */);
      $.got_car_crim_is_in = 1;
    }
    //range_int//
    if ($.got_car_crim_is_in == 1) {
      //range_int//
      if (!($.criminal.isInAnyCar())) {
        $.range_int = Math.RandomIntInRange(0, 5);
        if ($.range_int == 0) {
          $.criminal.setObjFleePlayerOnFootTillSafe($.player);
        }
        if ($.range_int == 1) {
          if ($.player.locateAnyMeansChar2D($.criminal, 150.0, 150.0, false)) {
            $.criminal.setObjStealAnyCar();
          }
          else {
            if (Streaming.HasModelLoaded(car`SENTINEL`)) {
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal.getCoordinates();
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              $.criminal_car.markAsNoLongerNeeded();
              $.criminal_car = Car.Create(88 /* CAR_SENTINEL */, $.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              $.criminal_car.setHeading($.warp_heading_cop);
              $.criminal.setObjEnterCarAsDriver($.criminal_car);
            }
            else {
              $.criminal.setObjStealAnyCar();
            }
          }
        }
        if ($.range_int == 2) {
          $.criminal.setObjKillPlayerAnyMeans($.player);
        }
        if ($.range_int == 3) {
          if ($.player.isInAnyCar()) {
            $.players_cop_car = $.player.storeCarIsIn();
            $.criminal.setObjDestroyCar($.players_cop_car);
          }
          else {
            $.criminal.setObjKillPlayerAnyMeans($.player);
          }
        }
        //range_int//
        if ($.range_int == 4) {
          $.range_int = Math.RandomIntInRange(0, 8);
          //range_int//
          $.criminal.wanderDir(-1);
        }
        $.got_car_crim_is_in = 0;
      }
    }
    if ($.got_car_crim_is_in == 1) {
      if (!(Car.IsDead($.criminal_car))) {
        if (TIMERB > 1000) {
          TIMERB = 0;
          if ($.player.locateAnyMeansChar2D($.criminal, 20.0, 20.0, false)) {
            $.criminal_car.setCruiseSpeed(46.0);
          }
          else {
            if ($.player.locateAnyMeansChar2D($.criminal, 50.0, 50.0, false)) {
              $.criminal_car.setCruiseSpeed(39.0);
            }
            else {
              if ($.player.locateAnyMeansChar2D($.criminal, 90.0, 90.0, false)) {
                $.criminal_car.setCruiseSpeed(32.0);
              }
              else {
                if ($.player.locateAnyMeansChar2D($.criminal, 130.0, 130.0, false)) {
                  $.criminal_car.setCruiseSpeed(26.0);
                }
                else {
                  $.criminal_car.setCruiseSpeed(18.0);
                }
              }
            }
          }
        }
        if ($.criminal_car.isStopped()) {
          if ($.timer_reset_flag == 0) {
            TIMERA = 0;
            $.timer_reset_flag = 1;
          }
          if (TIMERA > 8000 && $.timer_reset_flag == 1) {
            if ($.player.locateAnyMeansChar2D($.criminal, 90.0, 90.0, false)) {
              $.criminal.setObjLeaveCar($.criminal_car);
              $.timer_reset_flag = 0;
            }
            else {
              if (!($.criminal_car.isOnScreen())) {
                [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal_car.getCoordinates();
                [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                if (!(Camera.IsPointOnScreen($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, 4.0))) {
                  $.criminal_car.setCoordinates($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                  $.criminal_car.setHeading($.warp_heading_cop);
                  $.timer_reset_flag = 0;
                }
              }
            }
          }
        }
        if ($.criminal_car.isUpsidedown() && $.criminal_car.isStopped()) {
          if ($.player.locateAnyMeansChar2D($.criminal, 90.0, 90.0, false)) {
            $.criminal.setObjLeaveCar($.criminal_car);
            $.criminal_car.setUpsidedownNotDamaged(false /* FALSE */);
          }
          else {
            if (!($.criminal_car.isOnScreen())) {
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal_car.getCoordinates();
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              if (!(Camera.IsPointOnScreen($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, 4.0))) {
                $.criminal_car.setCoordinates($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                $.criminal_car.setHeading($.warp_heading_cop);
              }
            }
          }
        }
        if (!($.criminal_car.isHealthGreater(250))) {
          $.criminal.setObjLeaveCar($.criminal_car);
        }
      }
    }
    await asyncWait(0);
  }
  }
  $.criminal.markAsNoLongerNeeded();
  $.criminal_car.markAsNoLongerNeeded();
  ++$.total_criminals_killed;
  Stat.RegisterCriminalCaught();
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  if ($.total_criminals_killed == 1) {
    Hud.DisplayCounterWithString($.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  }
  $.criminal_blip.remove();
  $.vigilante_score = $.total_criminals_killed * 500;
  Text.PrintBig(C_PASS, 5000, 5);
  Text.PrintWithNumberBig(REWARD, $.vigilante_score, 5000, 6);
  $.player.addScore($.vigilante_score);
  //FLASH_HUD_OBJECT OnscreenCounter
  //ADD_PAGER_MESSAGE PAGEB12 140 100 1	//"Get out of jail free!"
  if ($.total_criminals_killed == $.vigilante_bonus_kills) {
    $.vigilante = $.total_criminals_killed * 2;
    $.vigilante *= 500;
    Text.PrintBigQ(C_VIGIL, 5000, 5);
    Text.PrintWithNumberBigQ(REWARD, $.vigilante, 6000, 6);
    //FLASH_HUD_OBJECT OnscreenCounter
    $.player.addScore($.vigilante);
    //ADD_PAGER_MESSAGE PAGEB12 140 100 1	//"Get out of jail free!"
    if ($.vigilante_bonus_kills == 10) {
      $.player.setGetOutOfJailFree(true /* TRUE */);
    }
    $.vigilante_bonus_kills += 5;
  }
  if ($.location == 1) {
    ++$.ind_copcar_kills;
  }
  if ($.location == 2) {
    ++$.com_copcar_kills;
  }
  if ($.location == 3) {
    ++$.sub_copcar_kills;
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message1 == 0) {
    //"Police Bribe delivered to hideout"
    if ($.ind_copcar_kills == 10) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message1 = 1;
    }
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message1 == 1) {
    //"Police Bribe delivered to hideout"
    if ($.ind_copcar_kills == 20) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message1 = 2;
    }
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message2 == 0) {
    //"Police Bribe delivered to hideout"
    if ($.com_copcar_kills == 10) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message2 = 1;
    }
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message2 == 1) {
    //"Police Bribe delivered to hideout"
    if ($.com_copcar_kills == 20) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message2 = 2;
    }
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message3 == 0) {
    //"Police Bribe delivered to hideout"
    if ($.sub_copcar_kills == 10) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message3 = 1;
    }
  }
  //"Police Bribe delivered to hideout"
  if ($.play_pager_message3 == 1) {
    //"Police Bribe delivered to hideout"
    if ($.sub_copcar_kills == 20) {
      //"Police Bribe delivered to hideout"
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message3 = 2;
    }
  }
  //You have ~1~ seconds to return to the car before the mission ends.
  //"Your time as a law enforcer is over!"
  while (!($.player.isInModel(109 /* CAR_POLICE */)) && !($.player.isInModel(110 /* CAR_ENFORCER */)) && !($.player.isInModel(115 /* CAR_RHINO */)) && !($.player.isInModel(100 /* CAR_FBI */))) {
    if ($.game_time_flag == 0) {
      $.game_timer_start = Clock.GetGameTimer();
      if ($.cop_time_limit > 60000) {
        $.copcar_timer = 60000;
      }
      else {
        $.copcar_timer = $.cop_time_limit;
      }
      $.game_time_flag = 1;
    }
    $.game_time_present = Clock.GetGameTimer();
    $.game_time_difference = $.game_time_present - $.game_timer_start;
    $.copcar_timer -= $.game_time_difference;
    $.game_timer_start = $.game_time_present;
    $.timer_in_secs = $.copcar_timer / 1000;
    //You have ~1~ seconds to return to the car before the mission ends.
    Text.PrintWithNumberNow(COPCART, $.timer_in_secs, 200, 1);
    //"Your time as a law enforcer is over!"
    if ($.timer_in_secs < 1) {
      //"Your time as a law enforcer is over!"
      Text.PrintNow(C_TIME, 3000, 1);
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  if ($.player.isInAnyCar()) {
    $.players_cop_car = $.player.storeCarIsIn();
    $.players_cop_car_health = $.players_cop_car.getHealth();
    $.players_cop_car_health += 100;
    $.players_cop_car.setHealth($.players_cop_car_health);
  }
  /////////////////////////////////////////////////////////////
  // SCM GOTO → cop_car_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO cop_car_passed"); // fallback: would break linear control flow
}

async function cop_car_passed() {
  Hud.ClearTimer($.cop_time_limit);
  $.criminal_blip.remove();
  if ($.criminal_created_flag == 1) {
    $.criminal.markAsNoLongerNeeded();
    $.criminal_created_flag = 0;
  }
  /////////////////////////////////////////////////////////////
  // SCM GOTO → next_cop_car (not lowered; manual jump required)
  throw new Error("unresolved GOTO next_cop_car"); // fallback: would break linear control flow
}

async function cop_car_failed() {
  Text.PrintBig(C_FAIL, 5000, 5);
  Text.PrintWithNumberBig(C_KILLS, $.total_criminals_killed, 6000, 6);
  Hud.ClearTimer($.cop_time_limit);
  Hud.ClearCounter($.total_criminals_killed);
  $.criminal_blip.remove();
  Text.ClearHelp();
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`model`);
  if ($.criminal_created_flag == 1) {
    $.criminal.markAsNoLongerNeeded();
    $.criminal_created_flag = 0;
  }
  $.flag_player_on_mission = 0;
  $.flag_player_on_cop_mission = 0;
  Mission.Finish();
  return;
}

async function copcar_cancelled_checks() {
  //You have ~1~ seconds to return to a squad car before the mission ends.
  //"Your time as a law enforcer is over!"
  if (!($.player.isInModel(109 /* CAR_POLICE */)) && !($.player.isInModel(110 /* CAR_ENFORCER */)) && !($.player.isInModel(115 /* CAR_RHINO */)) && !($.player.isInModel(100 /* CAR_FBI */))) {
    if ($.game_time_flag == 0) {
      $.game_timer_start = Clock.GetGameTimer();
      if ($.cop_time_limit > 60000) {
        $.copcar_timer = 60000;
      }
      else {
        $.copcar_timer = $.cop_time_limit;
      }
      $.game_time_flag = 1;
    }
    $.game_time_present = Clock.GetGameTimer();
    $.game_time_difference = $.game_time_present - $.game_timer_start;
    $.copcar_timer -= $.game_time_difference;
    $.game_timer_start = $.game_time_present;
    $.timer_in_secs = $.copcar_timer / 1000;
    //You have ~1~ seconds to return to a squad car before the mission ends.
    Text.PrintWithNumberNow(COPCART, $.timer_in_secs, 200, 1);
    //"Your time as a law enforcer is over!"
    if ($.timer_in_secs < 1) {
      //"Your time as a law enforcer is over!"
      Text.PrintNow(C_TIME, 3000, 1);
      $.copcar_cancelled_flag = 1;
      return;
    }
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.player.isInModel(109 /* CAR_POLICE */) || $.player.isInModel(110 /* CAR_ENFORCER */) || $.player.isInModel(115 /* CAR_RHINO */) || $.player.isInModel(100 /* CAR_FBI */)) {
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        $.mission_end_button = 1;
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        $.mission_end_button = 1;
      }
    }
    $.game_time_flag = 0;
  }
  //"Police mission cancelled!"
  if ($.mission_end_button == 1) {
    //"Police mission cancelled!"
    if (!($.controlmode == 3)) {
      //"Police mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        //"Police mission cancelled!"
        Text.PrintNow(C_CANC, 3000, 1);
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
    else {
      //"Police mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        //"Police mission cancelled!"
        Text.PrintNow(C_CANC, 3000, 1);
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////
  return;
}

export async function copcar() {
  // *****************************************************************************************
  // *********************************** Cop Car Mission *************************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_cop_car
  await mission_start_cop_car();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB cop_car_failed
  await cop_car_failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT got_range_message player_in_range car_model criminal_car range_int mission_end_button total_criminals_killed players_cop_car_health
  // VAR_INT criminal_created_flag criminal criminal_blip random_gun cop_time_limit got_car_crim_is_in timer_reset_flag vigilante_bonus_kills location got_cop_breif
  // VAR_INT game_time_flag game_timer_start copcar_timer game_time_present game_time_difference timer_in_secs players_cop_car vigilante vigilante_score copcar_cancelled_flag
  // VAR_FLOAT player_c_x player_c_y player_c_z random_crim_x random_crim_y criminal_coord_x criminal_coord_y criminal_coord_z
  // ****************************************Mission Start************************************
  // VAR_FLOAT diff_x_float diff_y_float sum_of_diff_xy players_distance_from_criminal cop_time_limit_float criminal_heading warp_heading_cop
}
