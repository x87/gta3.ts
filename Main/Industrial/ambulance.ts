// Generated from Main/Industrial/ambulance.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ambulance() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_ambulance_mission = 1;
  await asyncWait(0);
  // ScriptName
  $.ped_time_limit = 0;
  $.players_ambulance = 0;
  $.flag_got_range_message = 0;
  $.ambulance_health_last = 0;
  $.ambulance_health_now = 0;
  $.time_drop = 0;
  $.max_peds_in_car = 0;
  $.peds_in_car = 0;
  $.player_in_range_flag = 0;
  $.number_of_injured_peds = 1;
  $.ped_counter = 0;
  $.injured_ped_1_flag = 0;
  $.injured_ped_2_flag = 0;
  $.injured_ped_3_flag = 0;
  $.injured_ped_4_flag = 0;
  $.injured_ped_5_flag = 0;
  $.injured_ped_6_flag = 0;
  $.injured_ped_7_flag = 0;
  $.injured_ped_8_flag = 0;
  $.injured_ped_9_flag = 0;
  $.injured_ped_10_flag = 0;
  $.injured_ped_11_flag = 0;
  //injured_ped_13_flag		= 0
  //injured_ped_14_flag		= 0
  //injured_ped_15_flag		= 0
  $.injured_ped_12_flag = 0;
  $.saved_peds = 0;
  $.first_rescue_flag = 0;
  $.first_chunk_flag = 0;
  $.time_chunk_divider = 11.0;
  $.ambulance_level = 1;
  $.time_chunk = 0;
  $.time_chunk_in_secs = 0;
  $.score_am = 0;
  $.bonus_time_flag = 0;
  $.drop_off_time_bonus = 0;
  $.hospital_blip_flag = 0;
  $.mission_end_button_ambulance = 0;
  $.car_full_flag = 0;
  $.saved_peds_this_go = 0;
  $.paramedic_location = 0;
  // Take the injured people to the Hospital
  Text.PrintNow(ATUTOR2, 3000, 1);
  await asyncWait(3000);
  Game.SetWantedMultiplier(0.5);
}

async function mission_root() {
  // Ambulance Mission Level ~1~
  Text.PrintWithNumberNow(ALEVEL, $.ambulance_level, 5000, 4);
  Hud.ClearTimer($.ped_time_limit);
  $.ped_time_limit = 0;
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
  while ($.number_of_injured_peds > $.ped_counter) {
    // SCM GOSUB generate_random_coord
    await generate_random_coord();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB create_random_injured_ped
    await create_random_injured_ped();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB generate_timelimit
    await generate_timelimit();
    // fallback if label was not emitted as async function: no-op continues linearly
    ++$.ped_counter;
  }
  if ($.number_of_injured_peds > 3) {
    $.bonus_time_flag = 1;
  }
  else {
    $.bonus_time_flag = 0;
  }
  $.time_chunk = $.ped_time_limit / $.number_of_injured_peds;
  $.time_chunk /= 2;
  $.brackets_var = $.number_of_injured_peds + 1;
  $.time_chunk *= $.brackets_var;
  $.ped_time_limit += $.time_chunk;
  $.ped_time_limit = $.ped_time_limit / $.number_of_injured_peds;
  $.time_chunk = $.ped_time_limit;
  $.time_chunk /= 2;
  Hud.DisplayTimer($.ped_time_limit);
  if ($.flag_player_on_mission == 0) {
    $.hospital_blip = Blip.AddForCoord($.hospital_x, $.hospital_y, $.hospital_z);
  }
  ////////////////
  // SCM GOTO → ambulance_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ambulance_loop"); // fallback: would break linear control flow
}

async function create_random_injured_ped() {
  if ($.number_of_injured_peds > 0 && $.injured_ped_1_flag == 0) {
    $.injured_ped_1 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_1_flag = 1;
    $.injured_ped_1.setBleeding(true /* TRUE */);
    $.injured_ped_1.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_1.setHeading($.random_ped_heading);
    $.injured_ped_1.setRunning(true /* TRUE */);
    $.injured_ped_1.clearThreatSearch();
    $.injured_ped_1_blip = Blip.AddForChar($.injured_ped_1);
    $.injured_ped_1.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 1 && $.injured_ped_2_flag == 0) {
    $.injured_ped_2 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_2_flag = 1;
    $.injured_ped_2.setBleeding(true /* TRUE */);
    $.injured_ped_2.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_2.setHeading($.random_ped_heading);
    $.injured_ped_2.setRunning(true /* TRUE */);
    $.injured_ped_2.clearThreatSearch();
    $.injured_ped_2_blip = Blip.AddForChar($.injured_ped_2);
    $.injured_ped_2.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 2 && $.injured_ped_3_flag == 0) {
    $.injured_ped_3 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_3_flag = 1;
    $.injured_ped_3.setBleeding(true /* TRUE */);
    $.injured_ped_3.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_3.setHeading($.random_ped_heading);
    $.injured_ped_3.setRunning(true /* TRUE */);
    $.injured_ped_3.clearThreatSearch();
    $.injured_ped_3_blip = Blip.AddForChar($.injured_ped_3);
    $.injured_ped_3.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 3 && $.injured_ped_4_flag == 0) {
    $.injured_ped_4 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_4_flag = 1;
    $.injured_ped_4.setBleeding(true /* TRUE */);
    $.injured_ped_4.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_4.setHeading($.random_ped_heading);
    $.injured_ped_4.setRunning(true /* TRUE */);
    $.injured_ped_4.clearThreatSearch();
    $.injured_ped_4_blip = Blip.AddForChar($.injured_ped_4);
    $.injured_ped_4.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 4 && $.injured_ped_5_flag == 0) {
    $.injured_ped_5 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_5_flag = 1;
    $.injured_ped_5.setBleeding(true /* TRUE */);
    $.injured_ped_5.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_5.setHeading($.random_ped_heading);
    $.injured_ped_5.setRunning(true /* TRUE */);
    $.injured_ped_5.clearThreatSearch();
    $.injured_ped_5_blip = Blip.AddForChar($.injured_ped_5);
    $.injured_ped_5.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 5 && $.injured_ped_6_flag == 0) {
    $.injured_ped_6 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_6_flag = 1;
    $.injured_ped_6.setBleeding(true /* TRUE */);
    $.injured_ped_6.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_6.setHeading($.random_ped_heading);
    $.injured_ped_6.setRunning(true /* TRUE */);
    $.injured_ped_6.clearThreatSearch();
    $.injured_ped_6_blip = Blip.AddForChar($.injured_ped_6);
    $.injured_ped_6.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 6 && $.injured_ped_7_flag == 0) {
    $.injured_ped_7 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_7_flag = 1;
    $.injured_ped_7.setBleeding(true /* TRUE */);
    $.injured_ped_7.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_7.setHeading($.random_ped_heading);
    $.injured_ped_7.setRunning(true /* TRUE */);
    $.injured_ped_7.clearThreatSearch();
    $.injured_ped_7_blip = Blip.AddForChar($.injured_ped_7);
    $.injured_ped_7.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 7 && $.injured_ped_8_flag == 0) {
    $.injured_ped_8 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_8_flag = 1;
    $.injured_ped_8.setBleeding(true /* TRUE */);
    $.injured_ped_8.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_8.setHeading($.random_ped_heading);
    $.injured_ped_8.setRunning(true /* TRUE */);
    $.injured_ped_8.clearThreatSearch();
    $.injured_ped_8_blip = Blip.AddForChar($.injured_ped_8);
    $.injured_ped_8.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 8 && $.injured_ped_9_flag == 0) {
    $.injured_ped_9 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_9_flag = 1;
    $.injured_ped_9.setBleeding(true /* TRUE */);
    $.injured_ped_9.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_9.setHeading($.random_ped_heading);
    $.injured_ped_9.setRunning(true /* TRUE */);
    $.injured_ped_9.clearThreatSearch();
    $.injured_ped_9_blip = Blip.AddForChar($.injured_ped_9);
    $.injured_ped_9.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 9 && $.injured_ped_10_flag == 0) {
    $.injured_ped_10 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_10_flag = 1;
    $.injured_ped_10.setBleeding(true /* TRUE */);
    $.injured_ped_10.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_10.setHeading($.random_ped_heading);
    $.injured_ped_10.setRunning(true /* TRUE */);
    $.injured_ped_10.clearThreatSearch();
    $.injured_ped_10_blip = Blip.AddForChar($.injured_ped_10);
    $.injured_ped_10.setObjWaitOnFoot();
    return;
  }
  if ($.number_of_injured_peds > 10 && $.injured_ped_11_flag == 0) {
    $.injured_ped_11 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_11_flag = 1;
    $.injured_ped_11.setBleeding(true /* TRUE */);
    $.injured_ped_11.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_11.setHeading($.random_ped_heading);
    $.injured_ped_11.setRunning(true /* TRUE */);
    $.injured_ped_11.clearThreatSearch();
    $.injured_ped_11_blip = Blip.AddForChar($.injured_ped_11);
    $.injured_ped_11.setObjWaitOnFoot();
    return;
  }
  //IF number_of_injured_peds > 12
  //AND injured_ped_13_flag = 0
  //	CREATE_RANDOM_CHAR ped_coord_x ped_coord_y ped_coord_z injured_ped_13
  //	injured_ped_13_flag = 1
  //	SET_CHAR_BLEEDING injured_ped_13 TRUE
  //	GENERATE_RANDOM_FLOAT_IN_RANGE 0.0 359.9 random_ped_heading
  //	SET_CHAR_HEADING injured_ped_13 random_ped_heading
  //	SET_CHAR_RUNNING injured_ped_13 TRUE
  //	CLEAR_CHAR_THREAT_SEARCH injured_ped_13
  //	ADD_BLIP_FOR_CHAR injured_ped_13 injured_ped_13_blip
  //	SET_CHAR_OBJ_WAIT_ON_FOOT injured_ped_13
  //	RETURN
  //ENDIF
  //
  //IF number_of_injured_peds > 13
  //AND injured_ped_14_flag = 0
  //	CREATE_RANDOM_CHAR ped_coord_x ped_coord_y ped_coord_z injured_ped_14
  //	injured_ped_14_flag = 1
  //	SET_CHAR_BLEEDING injured_ped_14 TRUE
  //	SET_CHAR_HEADING injured_ped_14 random_ped_heading
  //	SET_CHAR_RUNNING injured_ped_14 TRUE
  //	CLEAR_CHAR_THREAT_SEARCH injured_ped_14
  //	ADD_BLIP_FOR_CHAR injured_ped_14 injured_ped_14_blip
  //	SET_CHAR_OBJ_WAIT_ON_FOOT injured_ped_14
  //IF number_of_injured_peds > 14
  //AND injured_ped_15_flag = 0
  //	CREATE_RANDOM_CHAR ped_coord_x ped_coord_y ped_coord_z injured_ped_15
  //	injured_ped_15_flag = 1
  //	SET_CHAR_BLEEDING injured_ped_15 TRUE
  //	SET_CHAR_HEADING injured_ped_15 random_ped_heading
  //	SET_CHAR_RUNNING injured_ped_15 TRUE
  //	CLEAR_CHAR_THREAT_SEARCH injured_ped_15
  //	ADD_BLIP_FOR_CHAR injured_ped_15 injured_ped_15_blip
  //	SET_CHAR_OBJ_WAIT_ON_FOOT injured_ped_15
  if ($.number_of_injured_peds > 11 && $.injured_ped_12_flag == 0) {
    $.injured_ped_12 = Char.CreateRandom($.ped_coord_x, $.ped_coord_y, $.ped_coord_z);
    $.injured_ped_12_flag = 1;
    $.injured_ped_12.setBleeding(true /* TRUE */);
    $.injured_ped_12.setOnlyDamagedByPlayer(true /* TRUE */);
    $.random_ped_heading = Math.RandomFloatInRange(0.0, 359.9);
    $.injured_ped_12.setHeading($.random_ped_heading);
    $.injured_ped_12.setRunning(true /* TRUE */);
    $.injured_ped_12.clearThreatSearch();
    $.injured_ped_12_blip = Blip.AddForChar($.injured_ped_12);
    $.injured_ped_12.setObjWaitOnFoot();
    return;
  }
  ////////////////
  return;
}

async function generate_random_coord() {
  await asyncWait(0);
  [$.player1_a_x, $.player1_a_y, $.player1_a_z] = $.player.getCoordinates();
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.random_x = Math.RandomFloatInRange(778.0, 1540.0);
    $.random_y = Math.RandomFloatInRange(-1110.0, 0.0);
    $.hospital_x = 1141.5;
    $.hospital_y = -595.2402;
    $.hospital_z = 13.9;
    $.hospital_door_x = 1149.1873;
    $.hospital_door_y = -597.3521;
    $.flag_got_range_message = 0;
    $.player_in_range_flag = 1;
    $.paramedic_location = 1;
  }
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.random_x = Math.RandomFloatInRange(-192.0, 545.0);
    $.random_y = Math.RandomFloatInRange(-1626.0, 98.0);
    $.hospital_x = 178.5;
    $.hospital_y = -23.6;
    $.hospital_z = 15.2;
    $.hospital_door_x = 182.75;
    $.hospital_door_y = -15.8;
    $.flag_got_range_message = 0;
    $.player_in_range_flag = 1;
    $.paramedic_location = 2;
  }
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.random_x = Math.RandomFloatInRange(-1300.0, -414.0);
    $.random_y = Math.RandomFloatInRange(-608.8, 380.0);
    $.hospital_x = -1255.5;
    $.hospital_y = -144.4254;
    $.hospital_z = 57.8;
    $.hospital_door_x = -1246.7969;
    $.hospital_door_y = -139.1016;
    $.flag_got_range_message = 0;
    $.player_in_range_flag = 1;
    $.paramedic_location = 3;
  }
  //"The ambulance radio is out of range, get closer to a hospital."
  if ($.player_in_range_flag == 0 && $.flag_got_range_message == 0) {
    //"The ambulance radio is out of range, get closer to a hospital."
    if ($.flag_got_range_message == 0) {
      //"The ambulance radio is out of range, get closer to a hospital."
      Text.PrintNow(A_RANGE, 5000, 1);
      $.flag_got_range_message = 1;
    }
    // SCM GOTO → ambulance_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
  }
  $.controlmode = Pad.GetControllerMode();
  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      $.mission_end_button_ambulance = 1;
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      $.mission_end_button_ambulance = 1;
    }
  }
  //"~r~Ambulance mission cancelled!"
  if ($.mission_end_button_ambulance == 1) {
    //"~r~Ambulance mission cancelled!"
    if (!($.controlmode == 3)) {
      //"~r~Ambulance mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        //"~r~Ambulance mission cancelled!"
        Text.PrintNow(A_CANC, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //"~r~Ambulance mission cancelled!"
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        //"~r~Ambulance mission cancelled!"
        Text.PrintNow(A_CANC, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
    }
  }
  //"~r~Ambulance mission cancelled!"
  if (!($.player.isInModel(99 /* CAR_AMBULANCE */))) {
    //"~r~Ambulance mission cancelled!"
    Text.PrintNow(A_CANC, 3000, 1);
    // SCM GOTO → ambulance_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
  }
  [$.ped_coord_x, $.ped_coord_y, $.ped_coord_z] = Path.GetClosestCharNode($.random_x, $.random_y, $.player1_a_z);
  //MIN_X // COLOMBIAN BOAT
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 1398.0 && $.ped_coord_x < 1615.0 && $.ped_coord_y > -965.0 && $.ped_coord_y < -902.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // BACK OF LUIGI'S
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 879.0 && $.ped_coord_x < 892.0 && $.ped_coord_y > -427.0 && $.ped_coord_y < -407.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // FISH FACTORY
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 944.8 && $.ped_coord_x < 1017.1 && $.ped_coord_y > -1148.8 && $.ped_coord_y < -1076.6) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // CHINATOWN MARKET
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 920.8 && $.ped_coord_x < 1004.0 && $.ped_coord_y > -754.2 && $.ped_coord_y < -670.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // CALAHAN BRIDGE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 670.0 && $.ped_coord_x < 1035.0 && $.ped_coord_y > -953.0 && $.ped_coord_y < -912.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // DOCKS INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 1364.0 && $.ped_coord_x < 1641.0 && $.ped_coord_y > -1165.0 && $.ped_coord_y < -617.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // TUNNEL ENTRANCE INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 649.0 && $.ped_coord_x < 1066.0 && $.ped_coord_y > 25.0 && $.ped_coord_y < 217.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // AIRPORT SUBURBAN
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > -1611.5 && $.ped_coord_x < -745.3 && $.ped_coord_y > -1001.9 && $.ped_coord_y < -371.2) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // OLD SCHOOL HALL AND PARK AREA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 939.8 && $.ped_coord_x < 1035.6 && $.ped_coord_y > -901.3 && $.ped_coord_y < -828.2) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // DOG FOOD FACTORY
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 1215.3 && $.ped_coord_x < 1223.7 && $.ped_coord_y > -839.4 && $.ped_coord_y < -763.6) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // INDUSTRIAL SAFEHOUSE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 845.3 && $.ped_coord_x < 899.6 && $.ped_coord_y > -312.6 && $.ped_coord_y < -295.7) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // DOJO COMMERCIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 113.3 && $.ped_coord_x < 99.7 && $.ped_coord_y > -1284.8 && $.ped_coord_y < -1273.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // COLOMBIAN OJG COMPOUND
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 18.33 && $.ped_coord_x < 92.06 && $.ped_coord_y > -388.7 && $.ped_coord_y < -312.38) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // BAIT WAREHOUSE CARPARK SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > -1255.4 && $.ped_coord_x < -1187.9 && $.ped_coord_y > 80.6 && $.ped_coord_y < 123.4) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // FRANKIES HOUSE
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 1386.4 && $.ped_coord_x < 1475.8 && $.ped_coord_y > -292.1 && $.ped_coord_y < -168.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // FOOT BRIDGE CHINATOWN
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.ped_coord_x > 766.7 && $.ped_coord_x < 851.8 && $.ped_coord_y > -604.1 && $.ped_coord_y < -558.2) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  //MIN_X // INDUSTRIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.paramedic_location == 1) {
    //MIN_X // INDUSTRIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.ped_coord_x > 778.0) || !($.ped_coord_x < 1540.0) || !($.ped_coord_y > -1110.0) || !($.ped_coord_y < 190.0)) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
  }
  //MIN_X // COMMERCIAL
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.paramedic_location == 2) {
    //MIN_X // COMMERCIAL
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.ped_coord_x > -192.0) || !($.ped_coord_x < 545.0) || !($.ped_coord_y > -1626.0) || !($.ped_coord_y < 98.0)) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
  }
  //MIN_X // SUBURBIA
  //MAX_X
  //MIN_Y
  //MAX_Y
  if ($.paramedic_location == 3) {
    //MIN_X // SUBURBIA
    //MAX_X
    //MIN_Y
    //MAX_Y
    if (!($.ped_coord_x > -1300.0) || !($.ped_coord_x < -414.0) || !($.ped_coord_y > -608.8) || !($.ped_coord_y < 380.0)) {
      // SCM GOTO → generate_random_coord (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
    }
  }
  if ($.ped_coord_z < -1.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  $.difference_x_float_a = $.player1_a_x - $.ped_coord_x;
  $.difference_y_float_a = $.player1_a_y - $.ped_coord_y;
  $.difference_x_float_a = $.difference_x_float_a * $.difference_x_float_a;
  $.difference_y_float_a = $.difference_y_float_a * $.difference_y_float_a;
  $.sum_difference_a_xy = $.difference_x_float_a + $.difference_y_float_a;
  $.players_distance_from_ped = Math.Sqrt($.sum_difference_a_xy);
  if ($.players_distance_from_ped < 120.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  $.difference_x_float_a = $.hospital_x - $.ped_coord_x;
  $.difference_y_float_a = $.hospital_y - $.ped_coord_y;
  $.difference_x_float_a = $.difference_x_float_a * $.difference_x_float_a;
  $.difference_y_float_a = $.difference_y_float_a * $.difference_y_float_a;
  $.sum_difference_a_xy = $.difference_x_float_a + $.difference_y_float_a;
  $.peds_distance_from_hospital = Math.Sqrt($.sum_difference_a_xy);
  if ($.peds_distance_from_hospital < 100.0) {
    // SCM GOTO → generate_random_coord (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
  }
  if ($.injured_ped_1_flag > 0) {
    if (!(Char.IsDead($.injured_ped_1))) {
      if ($.injured_ped_1.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_2_flag > 0) {
    if (!(Char.IsDead($.injured_ped_2))) {
      if ($.injured_ped_2.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_3_flag > 0) {
    if (!(Char.IsDead($.injured_ped_3))) {
      if ($.injured_ped_3.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_4_flag > 0) {
    if (!(Char.IsDead($.injured_ped_4))) {
      if ($.injured_ped_4.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_5_flag > 0) {
    if (!(Char.IsDead($.injured_ped_5))) {
      if ($.injured_ped_5.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_6_flag > 0) {
    if (!(Char.IsDead($.injured_ped_6))) {
      if ($.injured_ped_6.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_7_flag > 0) {
    if (!(Char.IsDead($.injured_ped_7))) {
      if ($.injured_ped_7.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_8_flag > 0) {
    if (!(Char.IsDead($.injured_ped_8))) {
      if ($.injured_ped_8.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_9_flag > 0) {
    if (!(Char.IsDead($.injured_ped_9))) {
      if ($.injured_ped_9.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  if ($.injured_ped_10_flag > 0) {
    if (!(Char.IsDead($.injured_ped_10))) {
      if ($.injured_ped_10.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  //IF injured_ped_12_flag > 0
  //	IF NOT IS_CHAR_DEAD injured_ped_12
  //		IF LOCATE_CHAR_ANY_MEANS_2D injured_ped_12 ped_coord_x ped_coord_y 25.0 25.0 0
  //			GOTO generate_random_coord
  //		ENDIF
  //	ENDIF
  //ENDIF
  //
  //IF injured_ped_13_flag > 0
  //	IF NOT IS_CHAR_DEAD injured_ped_13
  //		IF LOCATE_CHAR_ANY_MEANS_2D injured_ped_13 ped_coord_x ped_coord_y 25.0 25.0 0
  //IF injured_ped_14_flag > 0
  //	IF NOT IS_CHAR_DEAD injured_ped_14
  //		IF LOCATE_CHAR_ANY_MEANS_2D injured_ped_14 ped_coord_x ped_coord_y 25.0 25.0 0
  if ($.injured_ped_11_flag > 0) {
    if (!(Char.IsDead($.injured_ped_11))) {
      if ($.injured_ped_11.locateAnyMeans2D($.ped_coord_x, $.ped_coord_y, 25.0, 25.0, false)) {
        // SCM GOTO → generate_random_coord (not lowered; manual jump required)
        throw new Error("unresolved GOTO generate_random_coord"); // fallback: would break linear control flow
      }
    }
  }
  ////////////////
  return;
}

async function generate_timelimit() {
  if ($.paramedic_location == 3) {
    $.time_chunk_divider = 10.0;
  }
  $.ped_time_limit_float = $.peds_distance_from_hospital / $.time_chunk_divider;
  $.ped_time_limit_float = $.ped_time_limit_float * 1000.0;
  $.ped_time_limit_temp = $.ped_time_limit_float;
  $.ped_time_limit += $.ped_time_limit_temp;
  ///////////////
  return;
}

async function ambulance_loop() {
  // SCM GOTO → ambulance_loop lowered to endless loop
  while (true) {
    await asyncWait(0);
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
        $.mission_end_button_ambulance = 1;
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
        $.mission_end_button_ambulance = 1;
      }
    }
    //"~r~Ambulance mission cancelled!"
    if ($.mission_end_button_ambulance == 1) {
      //"~r~Ambulance mission cancelled!"
      if (!($.controlmode == 3)) {
        //"~r~Ambulance mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
          //"~r~Ambulance mission cancelled!"
          Text.PrintNow(A_CANC, 3000, 1);
          // SCM GOTO → ambulance_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
        }
      }
      else {
        //"~r~Ambulance mission cancelled!"
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
          //"~r~Ambulance mission cancelled!"
          Text.PrintNow(A_CANC, 3000, 1);
          // SCM GOTO → ambulance_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
        }
      }
    }
    //"~r~Ambulance mission cancelled!"
    if (!($.player.isInModel(99 /* CAR_AMBULANCE */))) {
      //"~r~Ambulance mission cancelled!"
      Text.PrintNow(A_CANC, 3000, 1);
      // SCM GOTO → ambulance_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
    }
    else {
      $.players_ambulance = $.player.storeCarIsIn();
    }
    if ($.number_of_injured_peds > 6 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 0) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }
    if ($.number_of_injured_peds > 9 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 1) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }
    if ($.number_of_injured_peds > 12 && $.bonus_time_flag == 2 && $.drop_off_time_bonus == 2) {
      $.bonus_time_flag = 1;
      ++$.drop_off_time_bonus;
    }
    //"Health delivered to hideout"
    if ($.ambulance_pager_flag == 0) {
      //"Health delivered to hideout"
      if ($.total_saved_peds > 34) {
        //"Health delivered to hideout"
        Pager.AddMessage(PAGEB13, 140, 100, 1);
        // SCM GOSUB progress_counter1
        await progress_counter1();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.ambulance_pager_flag = 1;
      }
    }
    //"Adrenaline delivered to hideout"
    if ($.ambulance_pager_flag == 1) {
      //"Adrenaline delivered to hideout"
      if ($.total_saved_peds > 69) {
        //"Adrenaline delivered to hideout"
        Pager.AddMessage(PAGEB14, 140, 100, 1);
        // SCM GOSUB progress_counter2
        await progress_counter2();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.ambulance_pager_flag = 2;
      }
    }
    //The patient is dead
    //"Your too late"
    /////////////////
    if ($.injured_ped_1_flag > 0) {
      //The patient is dead
      if (Char.IsDead($.injured_ped_1)) {
        //The patient is dead
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      //"Your too late"
      if ($.ped_time_limit == 0) {
        $.injured_ped_1.explodeHead();
        $.injured_ped_1.removeElegantly();
        //"Your too late"
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_1_flag == 3) {
        if ($.injured_ped_1.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_1.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_1_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_1, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_1.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_1_flag = 2;
          }
        }
      }
      if ($.injured_ped_1_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_1, 25.0, 25.0, false))) {
          $.injured_ped_1_flag = 1;
        }
      }
      if ($.injured_ped_1_flag == 2) {
        if ($.injured_ped_1.isInAnyCar()) {
          $.injured_ped_1_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_1_flag = 3;
        }
      }
      if ($.injured_ped_1_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_1.setObjLeaveCar($.players_ambulance);
          $.injured_ped_1_flag = 4;
        }
      }
      if ($.injured_ped_1_flag == 4) {
        if (!($.injured_ped_1.isInAnyCar())) {
          $.injured_ped_1.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_1.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_1_flag = 0;
        }
      }
    }
    //////////////////
    if ($.injured_ped_2_flag > 0) {
      if (Char.IsDead($.injured_ped_2)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_2.explodeHead();
        $.injured_ped_2.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_2_flag == 3) {
        if ($.injured_ped_2.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_2.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_2_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_2, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_2.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_2_flag = 2;
          }
        }
      }
      if ($.injured_ped_2_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_2, 25.0, 25.0, false))) {
          $.injured_ped_2_flag = 1;
        }
      }
      if ($.injured_ped_2_flag == 2) {
        if ($.injured_ped_2.isInAnyCar()) {
          $.injured_ped_2_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_2_flag = 3;
        }
      }
      if ($.injured_ped_2_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_2.setObjLeaveCar($.players_ambulance);
          $.injured_ped_2_flag = 4;
        }
      }
      if ($.injured_ped_2_flag == 4) {
        if (!($.injured_ped_2.isInAnyCar())) {
          $.injured_ped_2.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_2.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_2_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_3_flag > 0) {
      if (Char.IsDead($.injured_ped_3)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_3.explodeHead();
        $.injured_ped_3.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_3_flag == 3) {
        if ($.injured_ped_3.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_3.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_3_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_3, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_3.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_3_flag = 2;
          }
        }
      }
      if ($.injured_ped_3_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_3, 25.0, 25.0, false))) {
          $.injured_ped_3_flag = 1;
        }
      }
      if ($.injured_ped_3_flag == 2) {
        if ($.injured_ped_3.isInAnyCar()) {
          $.injured_ped_3_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_3_flag = 3;
        }
      }
      if ($.injured_ped_3_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_3.setObjLeaveCar($.players_ambulance);
          $.injured_ped_3_flag = 4;
        }
      }
      if ($.injured_ped_3_flag == 4) {
        if (!($.injured_ped_3.isInAnyCar())) {
          $.injured_ped_3.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_3.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_3_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_4_flag > 0) {
      if (Char.IsDead($.injured_ped_4)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_4.explodeHead();
        $.injured_ped_4.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_4_flag == 3) {
        if ($.injured_ped_4.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_4.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_4_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_4, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_4.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_4_flag = 2;
          }
        }
      }
      if ($.injured_ped_4_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_4, 25.0, 25.0, false))) {
          $.injured_ped_4_flag = 1;
        }
      }
      if ($.injured_ped_4_flag == 2) {
        if ($.injured_ped_4.isInAnyCar()) {
          $.injured_ped_4_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_4_flag = 3;
        }
      }
      if ($.injured_ped_4_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_4.setObjLeaveCar($.players_ambulance);
          $.injured_ped_4_flag = 4;
        }
      }
      if ($.injured_ped_4_flag == 4) {
        if (!($.injured_ped_4.isInAnyCar())) {
          $.injured_ped_4.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_4.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_4_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_5_flag > 0) {
      if (Char.IsDead($.injured_ped_5)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_5.explodeHead();
        $.injured_ped_5.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_5_flag == 3) {
        if ($.injured_ped_5.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_5.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_5_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_5, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_5.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_5_flag = 2;
          }
        }
      }
      if ($.injured_ped_5_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_5, 25.0, 25.0, false))) {
          $.injured_ped_5_flag = 1;
        }
      }
      if ($.injured_ped_5_flag == 2) {
        if ($.injured_ped_5.isInAnyCar()) {
          $.injured_ped_5_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_5_flag = 3;
        }
      }
      if ($.injured_ped_5_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_5.setObjLeaveCar($.players_ambulance);
          $.injured_ped_5_flag = 4;
        }
      }
      if ($.injured_ped_5_flag == 4) {
        if (!($.injured_ped_5.isInAnyCar())) {
          $.injured_ped_5.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_5.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_5_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_6_flag > 0) {
      if (Char.IsDead($.injured_ped_6)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_6.explodeHead();
        $.injured_ped_6.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_6_flag == 3) {
        if ($.injured_ped_6.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_6.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_6_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_6, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_6.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_6_flag = 2;
          }
        }
      }
      if ($.injured_ped_6_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_6, 25.0, 25.0, false))) {
          $.injured_ped_6_flag = 1;
        }
      }
      if ($.injured_ped_6_flag == 2) {
        if ($.injured_ped_6.isInAnyCar()) {
          $.injured_ped_6_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_6_flag = 3;
        }
      }
      if ($.injured_ped_6_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_6.setObjLeaveCar($.players_ambulance);
          $.injured_ped_6_flag = 4;
        }
      }
      if ($.injured_ped_6_flag == 4) {
        if (!($.injured_ped_6.isInAnyCar())) {
          $.injured_ped_6.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_6.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_6_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_7_flag > 0) {
      if (Char.IsDead($.injured_ped_7)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_7.explodeHead();
        $.injured_ped_7.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_7_flag == 3) {
        if ($.injured_ped_7.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_7.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_7_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_7, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_7.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_7_flag = 2;
          }
        }
      }
      if ($.injured_ped_7_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_7, 25.0, 25.0, false))) {
          $.injured_ped_7_flag = 1;
        }
      }
      if ($.injured_ped_7_flag == 2) {
        if ($.injured_ped_7.isInAnyCar()) {
          $.injured_ped_7_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_7_flag = 3;
        }
      }
      if ($.injured_ped_7_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_7.setObjLeaveCar($.players_ambulance);
          $.injured_ped_7_flag = 4;
        }
      }
      if ($.injured_ped_7_flag == 4) {
        if (!($.injured_ped_7.isInAnyCar())) {
          $.injured_ped_7.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_7.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_7_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_8_flag > 0) {
      if (Char.IsDead($.injured_ped_8)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_8.explodeHead();
        $.injured_ped_8.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_8_flag == 3) {
        if ($.injured_ped_8.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_8.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_8_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_8, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_8.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_8_flag = 2;
          }
        }
      }
      if ($.injured_ped_8_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_8, 25.0, 25.0, false))) {
          $.injured_ped_8_flag = 1;
        }
      }
      if ($.injured_ped_8_flag == 2) {
        if ($.injured_ped_8.isInAnyCar()) {
          $.injured_ped_8_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_8_flag = 3;
        }
      }
      if ($.injured_ped_8_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_8.setObjLeaveCar($.players_ambulance);
          $.injured_ped_8_flag = 4;
        }
      }
      if ($.injured_ped_8_flag == 4) {
        if (!($.injured_ped_8.isInAnyCar())) {
          $.injured_ped_8.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_8.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_8_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_9_flag > 0) {
      if (Char.IsDead($.injured_ped_9)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_9.explodeHead();
        $.injured_ped_9.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_9_flag == 3) {
        if ($.injured_ped_9.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_9.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_9_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_9, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_9.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_9_flag = 2;
          }
        }
      }
      if ($.injured_ped_9_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_9, 25.0, 25.0, false))) {
          $.injured_ped_9_flag = 1;
        }
      }
      if ($.injured_ped_9_flag == 2) {
        if ($.injured_ped_9.isInAnyCar()) {
          $.injured_ped_9_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_9_flag = 3;
        }
      }
      if ($.injured_ped_9_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_9.setObjLeaveCar($.players_ambulance);
          $.injured_ped_9_flag = 4;
        }
      }
      if ($.injured_ped_9_flag == 4) {
        if (!($.injured_ped_9.isInAnyCar())) {
          $.injured_ped_9.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_9.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_9_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_10_flag > 0) {
      if (Char.IsDead($.injured_ped_10)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_10.explodeHead();
        $.injured_ped_10.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_10_flag == 3) {
        if ($.injured_ped_10.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_10.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_10_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_10, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_10.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_10_flag = 2;
          }
        }
      }
      if ($.injured_ped_10_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_10, 25.0, 25.0, false))) {
          $.injured_ped_10_flag = 1;
        }
      }
      if ($.injured_ped_10_flag == 2) {
        if ($.injured_ped_10.isInAnyCar()) {
          $.injured_ped_10_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_10_flag = 3;
        }
      }
      if ($.injured_ped_10_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_10.setObjLeaveCar($.players_ambulance);
          $.injured_ped_10_flag = 4;
        }
      }
      if ($.injured_ped_10_flag == 4) {
        if (!($.injured_ped_10.isInAnyCar())) {
          $.injured_ped_10.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_10.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_10_flag = 0;
        }
      }
    }
    ////////////////
    if ($.injured_ped_11_flag > 0) {
      if (Char.IsDead($.injured_ped_11)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_11.explodeHead();
        $.injured_ped_11.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_11_flag == 3) {
        if ($.injured_ped_11.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_11.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_11_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_11, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_11.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_11_flag = 2;
          }
        }
      }
      if ($.injured_ped_11_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_11, 25.0, 25.0, false))) {
          $.injured_ped_11_flag = 1;
        }
      }
      if ($.injured_ped_11_flag == 2) {
        if ($.injured_ped_11.isInAnyCar()) {
          $.injured_ped_11_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_11_flag = 3;
        }
      }
      if ($.injured_ped_11_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_11.setObjLeaveCar($.players_ambulance);
          $.injured_ped_11_flag = 4;
        }
      }
      if ($.injured_ped_11_flag == 4) {
        if (!($.injured_ped_11.isInAnyCar())) {
          $.injured_ped_11.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_11.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_11_flag = 0;
        }
      }
    }
    ////////////////
    //IF injured_ped_13_flag > 0
    //	IF IS_CHAR_DEAD injured_ped_13
    //		PRINT_NOW A_FAIL3 3000 1
    //		GOTO ambulance_failed
    //	ENDIF
    //
    //	IF ped_time_limit = 0
    //		EXPLODE_CHAR_HEAD injured_ped_13
    //		REMOVE_CHAR_ELEGANTLY injured_ped_13
    //		PRINT_NOW A_FAIL2 3000 1
    //	IF injured_ped_13_flag = 3
    //		IF IS_CHAR_MALE injured_ped_13
    //			ped_sex_flag = 0
    //		ELSE
    //			ped_sex_flag = 1
    //		ENDIF
    //		GET_CHAR_COORDINATES injured_ped_13 sound_x sound_y sound_z
    //		GOSUB chunk1_ambulance
    //	IF injured_ped_13_flag = 1
    //		IF LOCATE_PLAYER_IN_CAR_CHAR_3D player injured_ped_13 10.0 10.0 2.0 0
    //			GOSUB chunk2_ambulance
    //			IF car_full_flag = 0
    //				SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER injured_ped_13 players_ambulance
    //				injured_ped_13_flag = 2
    //			ENDIF
    //	IF injured_ped_13_flag = 2
    //		IF NOT LOCATE_PLAYER_IN_CAR_CHAR_2D player injured_ped_13 25.0 25.0 0
    //			injured_ped_13_flag = 1
    //		IF IS_CHAR_IN_ANY_CAR injured_ped_13
    //			REMOVE_BLIP injured_ped_13_blip
    //			GOSUB chunk3_ambulance
    //			injured_ped_13_flag = 3
    //		IF LOCATE_STOPPED_PLAYER_IN_CAR_3D player hospital_x hospital_y hospital_z 6.0 6.0 2.0 1
    //			SET_CHAR_OBJ_LEAVE_CAR injured_ped_13 players_ambulance
    //			injured_ped_13_flag = 4
    //	IF injured_ped_13_flag = 4
    //		IF NOT IS_CHAR_IN_ANY_CAR injured_ped_13
    //			SET_CHAR_OBJ_GOTO_COORD_ON_FOOT injured_ped_13 hospital_door_x hospital_door_y
    //			MARK_CHAR_AS_NO_LONGER_NEEDED injured_ped_13
    //			GOSUB chunk4_ambulance
    //			injured_ped_13_flag = 0
    //ENDIF
    //IF injured_ped_14_flag > 0
    //	IF IS_CHAR_DEAD injured_ped_14
    //		EXPLODE_CHAR_HEAD injured_ped_14
    //		REMOVE_CHAR_ELEGANTLY injured_ped_14
    //	IF injured_ped_14_flag = 3
    //		IF IS_CHAR_MALE injured_ped_14
    //		GET_CHAR_COORDINATES injured_ped_14 sound_x sound_y sound_z
    //	IF injured_ped_14_flag = 1
    //		IF LOCATE_PLAYER_IN_CAR_CHAR_3D player injured_ped_14 10.0 10.0 2.0 0
    //				SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER injured_ped_14 players_ambulance
    //				injured_ped_14_flag = 2
    //	IF injured_ped_14_flag = 2
    //		IF NOT LOCATE_PLAYER_IN_CAR_CHAR_2D player injured_ped_14 25.0 25.0 0
    //			injured_ped_14_flag = 1
    //		IF IS_CHAR_IN_ANY_CAR injured_ped_14
    //			REMOVE_BLIP injured_ped_14_blip
    //			injured_ped_14_flag = 3
    //			SET_CHAR_OBJ_LEAVE_CAR injured_ped_14 players_ambulance
    //			injured_ped_14_flag = 4
    //	IF injured_ped_14_flag = 4
    //		IF NOT IS_CHAR_IN_ANY_CAR injured_ped_14
    //			SET_CHAR_OBJ_GOTO_COORD_ON_FOOT injured_ped_14 hospital_door_x hospital_door_y
    //			MARK_CHAR_AS_NO_LONGER_NEEDED injured_ped_14
    //			injured_ped_14_flag = 0
    //IF injured_ped_15_flag > 0
    //	IF IS_CHAR_DEAD injured_ped_15
    //		EXPLODE_CHAR_HEAD injured_ped_15
    //		REMOVE_CHAR_ELEGANTLY injured_ped_15
    //	IF injured_ped_15_flag = 3
    //		IF IS_CHAR_MALE injured_ped_15
    //		GET_CHAR_COORDINATES injured_ped_15 sound_x sound_y sound_z
    //	IF injured_ped_15_flag = 1
    //		IF LOCATE_PLAYER_IN_CAR_CHAR_3D player injured_ped_15 10.0 10.0 2.0 0
    //				SET_CHAR_OBJ_ENTER_CAR_AS_PASSENGER injured_ped_15 players_ambulance
    //				injured_ped_15_flag = 2
    //	IF injured_ped_15_flag = 2
    //		IF NOT LOCATE_PLAYER_IN_CAR_CHAR_2D player injured_ped_15 25.0 25.0 0
    //			injured_ped_15_flag = 1
    //		IF IS_CHAR_IN_ANY_CAR injured_ped_15
    //			REMOVE_BLIP injured_ped_15_blip
    //			injured_ped_15_flag = 3
    //			SET_CHAR_OBJ_LEAVE_CAR injured_ped_15 players_ambulance
    //			injured_ped_15_flag = 4
    //	IF injured_ped_15_flag = 4
    //		IF NOT IS_CHAR_IN_ANY_CAR injured_ped_15
    //			SET_CHAR_OBJ_GOTO_COORD_ON_FOOT injured_ped_15 hospital_door_x hospital_door_y
    //			MARK_CHAR_AS_NO_LONGER_NEEDED injured_ped_15
    //			injured_ped_15_flag = 0
    /////////////////
    if ($.injured_ped_12_flag > 0) {
      if (Char.IsDead($.injured_ped_12)) {
        Text.PrintNow(A_FAIL3, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.ped_time_limit == 0) {
        $.injured_ped_12.explodeHead();
        $.injured_ped_12.removeElegantly();
        Text.PrintNow(A_FAIL2, 3000, 1);
        // SCM GOTO → ambulance_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO ambulance_failed"); // fallback: would break linear control flow
      }
      if ($.injured_ped_12_flag == 3) {
        if ($.injured_ped_12.isMale()) {
          $.ped_sex_flag = 0;
        }
        else {
          $.ped_sex_flag = 1;
        }
        [$.sound_x, $.sound_y, $.sound_z] = $.injured_ped_12.getCoordinates();
        // SCM GOSUB chunk1_ambulance
        await chunk1_ambulance();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.injured_ped_12_flag == 1) {
        if ($.player.locateInCarChar3D($.injured_ped_12, 10.0, 10.0, 2.0, false)) {
          // SCM GOSUB chunk2_ambulance
          await chunk2_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.car_full_flag == 0) {
            $.injured_ped_12.setObjEnterCarAsPassenger($.players_ambulance);
            $.injured_ped_12_flag = 2;
          }
        }
      }
      if ($.injured_ped_12_flag == 2) {
        if (!($.player.locateInCarChar2D($.injured_ped_12, 25.0, 25.0, false))) {
          $.injured_ped_12_flag = 1;
        }
      }
      if ($.injured_ped_12_flag == 2) {
        if ($.injured_ped_12.isInAnyCar()) {
          $.injured_ped_12_blip.remove();
          // SCM GOSUB chunk3_ambulance
          await chunk3_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_12_flag = 3;
        }
      }
      if ($.injured_ped_12_flag == 3) {
        if ($.player.locateStoppedInCar3D($.hospital_x, $.hospital_y, $.hospital_z, 6.0, 6.0, 2.0, true)) {
          $.injured_ped_12.setObjLeaveCar($.players_ambulance);
          $.injured_ped_12_flag = 4;
        }
      }
      if ($.injured_ped_12_flag == 4) {
        if (!($.injured_ped_12.isInAnyCar())) {
          $.injured_ped_12.setObjGotoCoordOnFoot($.hospital_door_x, $.hospital_door_y);
          $.injured_ped_12.markAsNoLongerNeeded();
          // SCM GOSUB chunk4_ambulance
          await chunk4_ambulance();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.injured_ped_12_flag = 0;
        }
      }
    }
    //"Health delivered to hideout"
    //"Adrenaline delivered to hideout"
    //	REMOVE_BLIP injured_ped_13_blip
    //	REMOVE_BLIP injured_ped_14_blip
    //	REMOVE_BLIP injured_ped_15_blip
    //"Ambulance missions complete!"
    //"You will never get tired!"
    //"Ambulance missions complete! You will never get tired when running!"
    if ($.saved_peds == $.number_of_injured_peds) {
      $.score_am = $.saved_peds * $.ambulance_level;
      $.score_am *= 100;
      Text.PrintWithNumberBig(REWARD, $.score_am, 6000, 6);
      $.total_saved_peds += $.saved_peds;
      //"Health delivered to hideout"
      if ($.ambulance_pager_flag == 0) {
        //"Health delivered to hideout"
        if ($.total_saved_peds > 34) {
          //"Health delivered to hideout"
          Pager.AddMessage(PAGEB13, 140, 100, 1);
          // SCM GOSUB progress_counter1
          await progress_counter1();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.ambulance_pager_flag = 1;
        }
      }
      //"Adrenaline delivered to hideout"
      if ($.ambulance_pager_flag == 1) {
        //"Adrenaline delivered to hideout"
        if ($.total_saved_peds > 69) {
          //"Adrenaline delivered to hideout"
          Pager.AddMessage(PAGEB14, 140, 100, 1);
          // SCM GOSUB progress_counter2
          await progress_counter2();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.ambulance_pager_flag = 2;
        }
      }
      $.saved_peds_this_go += $.saved_peds;
      ++$.number_of_injured_peds;
      $.saved_peds = 0;
      $.ped_counter = 0;
      $.player.addScore($.score_am);
      $.hospital_blip_flag = 0;
      $.hospital_blip.remove();
      $.injured_ped_1_blip.remove();
      $.injured_ped_2_blip.remove();
      $.injured_ped_3_blip.remove();
      $.injured_ped_4_blip.remove();
      $.injured_ped_5_blip.remove();
      $.injured_ped_6_blip.remove();
      $.injured_ped_7_blip.remove();
      $.injured_ped_8_blip.remove();
      $.injured_ped_9_blip.remove();
      $.injured_ped_10_blip.remove();
      $.injured_ped_11_blip.remove();
      //	REMOVE_BLIP injured_ped_13_blip
      //	REMOVE_BLIP injured_ped_14_blip
      //	REMOVE_BLIP injured_ped_15_blip
      $.injured_ped_12_blip.remove();
      Stat.RegisterAmbulanceLevel($.ambulance_level);
      ++$.ambulance_level;
      //"Ambulance missions complete!"
      //"You will never get tired!"
      //"Ambulance missions complete! You will never get tired when running!"
      if ($.ambulance_level == 13) {
        //"Ambulance missions complete!"
        Text.PrintBig(A_COMP1, 5000, 5);
        //"You will never get tired!"
        Text.PrintBig(A_COMP2, 6000, 6);
        //"Ambulance missions complete! You will never get tired when running!"
        Pager.AddMessage(A_COMP3, 140, 100, 1);
        Audio.PlayMissionPassedTune(1);
        $.player.setNeverGetsTired(true /* TRUE */);
        Stat.PlayerMadeProgress(1);
        return;
      }
      // SCM GOTO → mission_root (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_root"); // fallback: would break linear control flow
    }
  }
}

async function ambulance_failed() {
  Hud.ClearTimer($.ped_time_limit);
  Text.ClearHelp();
  Text.PrintBig(A_FAIL1, 5000, 5);
  //PEOPLE SAVED: ~1~
  Text.PrintWithNumberBig(A_SAVES, $.saved_peds_this_go, 6000, 6);
  $.hospital_blip_flag = 0;
  $.hospital_blip.remove();
  $.injured_ped_1_blip.remove();
  $.injured_ped_2_blip.remove();
  $.injured_ped_3_blip.remove();
  $.injured_ped_4_blip.remove();
  $.injured_ped_5_blip.remove();
  $.injured_ped_6_blip.remove();
  $.injured_ped_7_blip.remove();
  $.injured_ped_8_blip.remove();
  $.injured_ped_9_blip.remove();
  $.injured_ped_10_blip.remove();
  $.injured_ped_11_blip.remove();
  //REMOVE_BLIP injured_ped_13_blip
  //REMOVE_BLIP injured_ped_14_blip
  //REMOVE_BLIP injured_ped_15_blip
  $.injured_ped_12_blip.remove();
  Game.SetWantedMultiplier(1.0);
  $.flag_player_on_mission = 0;
  $.flag_player_on_ambulance_mission = 0;
  Mission.Finish();
  //////////////////////////////////////////////////////////////////////
  return;
}

async function chunk1_ambulance() {
  $.ambulance_health_now = $.players_ambulance.getHealth();
  if ($.ambulance_health_now < $.ambulance_health_last) {
    $.time_drop = $.ambulance_health_last - $.ambulance_health_now;
    $.time_drop = $.time_drop * 50;
    $.ped_time_limit = $.ped_time_limit - $.time_drop;
    $.random_scream = Math.RandomIntInRange(0, 2);
    if ($.ped_sex_flag == 0) {
      if ($.random_scream == 0) {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 78 /* SOUND_INJURED_PED_MALE_OUCH_S */);
      }
      else {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 79 /* SOUND_INJURED_PED_MALE_OUCH_L */);
      }
    }
    else {
      if ($.random_scream == 0) {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 80 /* SOUND_INJURED_PED_FEMALE_OUCH_S */);
      }
      else {
        Sound.AddOneOffSound($.sound_x, $.sound_y, $.sound_z, 81 /* SOUND_INJURED_PED_FEMALE_OUCH_L */);
      }
    }
    if ($.ped_time_limit < 0) {
      $.ped_time_limit = 0;
    }
    $.ambulance_health_last = $.ambulance_health_now;
  }
  //////////////////////////////////////////////////////////////////////
  return;
}

async function chunk2_ambulance() {
  $.peds_in_car = $.players_ambulance.getNumberOfPassengers();
  $.max_peds_in_car = $.players_ambulance.getMaximumNumberOfPassengers();
  //"I'm not getting in there, its full of injured people."
  if ($.peds_in_car == $.max_peds_in_car) {
    //"I'm not getting in there, its full of injured people."
    Text.PrintNow(A_FULL, 5000, 1);
    $.car_full_flag = 1;
  }
  else {
    $.car_full_flag = 0;
  }
  $.ambulance_health_last = $.players_ambulance.getHealth();
  //////////////////////////////////////////////////////////////////////
  return;
}

async function chunk3_ambulance() {
  if ($.hospital_blip_flag == 0) {
    $.hospital_blip = Blip.AddForCoord($.hospital_x, $.hospital_y, $.hospital_z);
    $.hospital_blip_flag = 1;
  }
  $.time_chunk_in_secs = $.time_chunk / 1000;
  //+~1~ Seconds
  Text.PrintWithNumberBig(A_TIME, $.time_chunk_in_secs, 6000, 6);
  $.ped_time_limit += $.time_chunk;
  //////////////////////////////////////////////////////////////////////
  return;
}

async function chunk4_ambulance() {
  Text.PrintBig(A_PASS, 3000, 5);
  //+~1~ Seconds
  if ($.bonus_time_flag == 1) {
    $.time_chunk_in_secs = $.time_chunk / 1000;
    //+~1~ Seconds
    Text.PrintWithNumberBig(A_TIME, $.time_chunk_in_secs, 6000, 6);
    $.players_ambulance = $.player.storeCarIsIn();
    $.players_ambulance_health = $.players_ambulance.getHealth();
    $.players_ambulance_health += 110;
    $.players_ambulance.setHealth($.players_ambulance_health);
    $.ped_time_limit += $.time_chunk;
    ++$.bonus_time_flag;
  }
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  ++$.saved_peds;
  Stat.RegisterLifeSaved();
  //////////////////////////////////////////////////////////////////////
  return;
}

async function progress_counter1() {
  Stat.PlayerMadeProgress(1);
  //////////////////////////////////////////////////////////////////////
  return;
}

async function progress_counter2() {
  Stat.PlayerMadeProgress(1);
  //////////////////////////////////////////////////////////////////////
  return;
}

export async function ambulance() {
  // *****************************************************************************************
  // *********************************** Ambulance missions **********************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_ambulance
  await mission_start_ambulance();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB ambulance_failed
  await ambulance_failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT ped_time_limit players_ambulance flag_got_range_message ped_time_limit_temp ped_counter number_of_injured_peds brackets_var
  // VAR_INT ambulance_health_last ambulance_health_now time_drop max_peds_in_car peds_in_car player_in_range_flag score_am bonus_time_flag
  // VAR_INT saved_peds hospital_blip first_rescue_flag time_chunk first_chunk_flag ambulance_level time_chunk_in_secs car_full_flag paramedic_location
  // VAR_INT drop_off_time_bonus hospital_blip_flag random_scream mission_end_button_ambulance ped_sex_flag players_ambulance_health saved_peds_this_go
  // VAR_INT injured_ped_1 injured_ped_1_blip injured_ped_1_flag
  // VAR_INT injured_ped_2 injured_ped_2_blip injured_ped_2_flag
  // VAR_INT injured_ped_3 injured_ped_3_blip injured_ped_3_flag
  // VAR_INT injured_ped_4 injured_ped_4_blip injured_ped_4_flag
  // VAR_INT injured_ped_5 injured_ped_5_blip injured_ped_5_flag
  // VAR_INT injured_ped_6 injured_ped_6_blip injured_ped_6_flag
  // VAR_INT injured_ped_7 injured_ped_7_blip injured_ped_7_flag
  // VAR_INT injured_ped_8 injured_ped_8_blip injured_ped_8_flag
  // VAR_INT injured_ped_9 injured_ped_9_blip injured_ped_9_flag
  // VAR_INT injured_ped_10 injured_ped_10_blip injured_ped_10_flag
  // VAR_INT injured_ped_11 injured_ped_11_blip injured_ped_11_flag
  //VAR_INT injured_ped_13 injured_ped_13_blip injured_ped_13_flag
  //VAR_INT injured_ped_14 injured_ped_14_blip injured_ped_14_flag
  //VAR_INT injured_ped_15 injured_ped_15_blip injured_ped_15_flag
  // VAR_INT injured_ped_12 injured_ped_12_blip injured_ped_12_flag
  // VAR_FLOAT random_x random_y hospital_x hospital_y hospital_z
  // VAR_FLOAT player1_a_x player1_a_y player1_a_z hospital_door_x hospital_door_y
  // VAR_FLOAT ped_coord_x ped_coord_y ped_coord_z sound_x sound_y sound_z
  // VAR_FLOAT difference_x_float_a difference_y_float_a sum_difference_a_xy
  // ****************************************Mission Start************************************
  // VAR_FLOAT players_distance_from_ped peds_distance_from_hospital ped_time_limit_float random_ped_heading time_chunk_divider
}
