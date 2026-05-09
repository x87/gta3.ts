// Generated from Main/Industrial/taxi1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_taxi1() {
  // ScriptName
  // GSW - does deatharrest have to be switched off?  YES! well maybe...
  // SET_DEATHARREST_STATE(false /* OFF */);
  $.flag_player_on_mission = 1;
  $.taxi_countdown_already_started = 0;
  $.taxi_countdown = 0;
  $.taxi_passed_this_shot = 0;
  $.taxi_score = 0;
  $.taxi_ped1 = -1;
  $.spray_blip_onscreen = 0;
  $.taxi_fucked_flag = 0;
  $.in_a_row_number = 5;
  $.in_a_row_cash = 2000;
  await asyncWait(0);
  //TEST STUFF!!!!!!!!!!!!!
  Hud.DisplayCounterWithString($.taxi_passed_this_shot, 0 /* COUNTER_DISPLAY_NUMBER */, "FARES");
  if (!($.player.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  //SWITCH_TAXI_TIMER ON
  if ($.player.isInAnyCar()) {
    $.taxi_car1 = $.player.storeCarIsIn();
  }
  else {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  $.taxi_car1.setTaxiLights(true /* On */);
  //Pick up a fare
  //WAIT 1500
  Text.PrintNow("TAXI1", 1500, 1);
  await asyncWait(0);
}

async function Start_taxi_mission() {
  if ($.done_taxi_help == 0) {
    Text.PrintHelp("TAXIH1");
    $.done_taxi_help = 1;
  }
  $.score_for_this_fare = 0;
  if (!($.player.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.taxi_car1)) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  /*
  IF taxi_passed = 0	   				//SPECIAL MISSIONS???
  AND IS_PLAYER_IN_ZONE player REDLIGH
  GOTO special_ped_mission1
  ENDIF
  */
  //	random_ped_grabber:
  if (!($.player.isInCar($.taxi_car1))) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (!($.controlmode == 3)) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && $.flag_player_on_mission == 1) {
      // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
    }
  }
  else {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && $.flag_player_on_mission == 1) {
      // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
    }
  }
  //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
  if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.taxi_ped1 = Zone.GetRandomChar("IND_ZON");
  }
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.taxi_ped1 = Zone.GetRandomChar("COM_ZON");
  }
  //IF IS_PLAYER_IN_ZONE player SUB_ZON
  //	GET_RANDOM_CHAR_IN_ZONE IND_ZON taxi_ped1
  //ENDIF
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.taxi_ped1 = Zone.GetRandomChar("SUB_ZON");
  }
  //	random_ped_grabber
  //been_in_taxi1_before = 7
  // START OF TAXI MISSION
  if ($.taxi_ped1 == -1) {
    await asyncWait(0);
    //	random_ped_grabber
    // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
    throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
  }
  $.taxi_ped1.setIdle();
  $.taxi_ped1.clearThreatSearch();
  $.taxi_ped1.setHeedThreats(false /* False */);
  $.blip1_ct1 = Blip.AddForChar($.taxi_ped1);
  //PRINT_NOW ( TAXI1 ) 2000 2 //Pick up a fare
  $.taxi_ped1.setObjHailTaxi();
}

async function ped_get_in_taxi() {
  //IF CLOSE TO THE CHAR
  //	OR NOT IS_PLAYER_IN_CAR player taxi_car1
  // ok to fail if player is arrested?
  //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
  while (!($.player.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */)) || !($.taxi_car1.isStopped())) {
    await asyncWait(0);
    // ok to fail if player is arrested?
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taxi_ped1)) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.player.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */))) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.remove();
      $.spray_blip_onscreen = 0;
      $.taxi_fucked_flag = 0;
    }
    if (!(Char.IsDead($.taxi_ped1))) {
      $.taxi_ped1.turnToFacePlayer($.player);
    }
  }
  //I ain't getting in that heap of shit!!
  if (!($.taxi_car1.isHealthGreater(500))) {
    //I ain't getting in that heap of shit!!
    Text.PrintNow("TAXI7", 4000, 1);
    if ($.spray_blip_onscreen == 0) {
      $.spray_taxi.remove();
      if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
        $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
      }
      if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
        $.spray_taxi = Blip.AddSpriteForCoord(379.0, -493.8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
      }
      if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
        $.spray_taxi = Blip.AddSpriteForCoord(-1128.0, 32.5, .8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
      }
      $.spray_blip_onscreen = 1;
      $.taxi_fucked_flag = 1;
    }
    // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
  }
  $.taxi_ped1.setRunning(true /* TRUE */);
  $.taxi_ped1.setObjEnterCarAsPassenger($.taxi_car1);
  //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
  while (!($.taxi_ped1.isInCar($.taxi_car1))) {
    await asyncWait(0);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.taxi_ped1)) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.player.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.locateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, false /* FALSE */))) {
      // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
    }
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    //PRINT_NOW ( TAXI2 ) 5000 2 //You SUCK!
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.remove();
      $.spray_blip_onscreen = 0;
    }
    if (!($.player.locateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, false /* FALSE */))) {
      // SCM GOTO → ped_get_in_taxi (not lowered; manual jump required)
      throw new Error("unresolved GOTO ped_get_in_taxi"); // fallback: would break linear control flow
    }
  }
  [$.taxi_ped_x, $.taxi_ped_y, $.taxi_ped_z] = $.taxi_ped1.getCoordinates();
  $.blip1_ct1.remove();
  //GET_GAME_TIMER taxi_start_time
  $.taxi_car1.setTaxiLights(false /* Off */);
}

async function passenger_destination() {
  await asyncWait(0);
  if (!($.player.isPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  //INDUSTRIAL*******************************************
  //OR IS_PLAYER_IN_ZONE player SUB_ZON
  //Take me to Meeouch Sex Kitten Club
  //Take me to Supa Save
  //Take me to the old School hall
  //Take me to greasy Joes
  //Take me to Ammo Nation
  //Take me to Easy Credit Autos
  //Take us to Woodys topless bar
  //Take me to The Bistro
  //Take me to the Import/Export garage
  //Take me to the 'Punk Noodles'
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(1, 11);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    //Take me to Meeouch Sex Kitten Club
    if ($.been_in_taxi1_before == 1) {
      if ($.player.isInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to Meeouch Sex Kitten Club
      Text.PrintNow("FARE1", 5000, 1);
      $.taxi_destx1 = 936.3;
      $.taxi_desty1 = -462.6;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 913.7;
      $.taxi_desty2 = -456.0;
      $.taxi_destz2 = 16.4;
    }
    //Take me to Supa Save
    if ($.been_in_taxi1_before == 2) {
      if ($.player.isInZone("S_VIEW")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to Supa Save
      Text.PrintNow("FARE2", 5000, 1);
      $.taxi_destx1 = 1268.5;
      $.taxi_desty1 = -616.4;
      $.taxi_destz1 = 11.7;
      $.taxi_destx2 = 1288.3;
      $.taxi_desty2 = -627.6;
      $.taxi_destz2 = 13.7;
    }
    //Take me to the old School hall
    if ($.been_in_taxi1_before == 3) {
      if ($.player.isInZone("CHINA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the old School hall
      Text.PrintNow("FARE3", 5000, 1);
      $.taxi_destx1 = 1008.9;
      $.taxi_desty1 = -871.9;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 995.3;
      $.taxi_desty2 = -881.9;
      $.taxi_destz2 = 16.4;
    }
    //Take me to greasy Joes
    if ($.been_in_taxi1_before == 4) {
      if ($.player.isInZone("PORT_W")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to greasy Joes
      Text.PrintNow("FARE4", 5000, 1);
      $.taxi_destx1 = 849.3;
      $.taxi_desty1 = -990.1;
      $.taxi_destz1 = 4.5;
      $.taxi_destx2 = 869.4;
      $.taxi_desty2 = -1002.6;
      $.taxi_destz2 = 6.5;
    }
    //Take me to Ammo Nation
    if ($.been_in_taxi1_before == 5) {
      if ($.player.isInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to Ammo Nation
      Text.PrintNow("FARE5", 5000, 1);
      $.taxi_destx1 = 1065.4;
      $.taxi_desty1 = -394.1;
      $.taxi_destz1 = 14.3;
      $.taxi_destx2 = 1057.9;
      $.taxi_desty2 = -408.9;
      $.taxi_destz2 = 16.3;
    }
    //Take me to Easy Credit Autos
    if ($.been_in_taxi1_before == 6) {
      if ($.player.isInZone("LITTLEI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to Easy Credit Autos
      Text.PrintNow("FARE6", 5000, 1);
      $.taxi_destx1 = 1207.0;
      $.taxi_desty1 = -122.0;
      $.taxi_destz1 = 14.0;
      $.taxi_destx2 = 1224.0;
      $.taxi_desty2 = -108.0;
      $.taxi_destz2 = 16.0;
    }
    //Take us to Woodys topless bar
    if ($.been_in_taxi1_before == 7) {
      if ($.player.isInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take us to Woodys topless bar
      Text.PrintNow("FARE7", 5000, 1);
      $.taxi_destx1 = 912.9;
      $.taxi_desty1 = -419.0;
      $.taxi_destz1 = 14.0;
      $.taxi_destx2 = 919.5;
      $.taxi_desty2 = -401.3;
      $.taxi_destz2 = 16.0;
    }
    //Take me to The Bistro
    if ($.been_in_taxi1_before == 8) {
      if ($.player.isInZone("LITTLEI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to The Bistro
      Text.PrintNow("FARE8", 5000, 1);
      $.taxi_destx1 = 1345.8;
      $.taxi_desty1 = -461.8;
      $.taxi_destz1 = 49.4;
      $.taxi_destx2 = 1334.7;
      $.taxi_desty2 = -447.0;
      $.taxi_destz2 = 51.4;
    }
    //Take me to the Import/Export garage
    if ($.been_in_taxi1_before == 9) {
      if ($.player.isInZone("PORT_E")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the Import/Export garage
      Text.PrintNow("FARE9", 5000, 1);
      $.taxi_destx1 = 1475.0;
      $.taxi_desty1 = -686.0;
      $.taxi_destz1 = 11.3;
      $.taxi_destx2 = 1485.3;
      $.taxi_desty2 = -667.5;
      $.taxi_destz2 = 13.3;
    }
    //Take me to the 'Punk Noodles'
    if ($.been_in_taxi1_before == 10) {
      if ($.player.isInZone("CHINA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the 'Punk Noodles'
      Text.PrintNow("FARE10", 5000, 1);
      $.taxi_destx1 = 1039.1;
      $.taxi_desty1 = -660.1;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 1043.9;
      $.taxi_desty2 = -647.9;
      $.taxi_destz2 = 16.4;
    }
  }
  //COMERCIAL*******************************************
  //OR IS_PLAYER_IN_ZONE player SUB_ZON
  //Take me to the constuction site
  //Take me to the stadium
  //Take me to the Church
  //Casino
  //Uni
  //Shopping Mall
  //Museum
  //(AMco)
  //Bolt Burgers
  //Take me to the park
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(11, 21);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    //Take me to the constuction site
    if ($.been_in_taxi1_before == 11) {
      if ($.player.isInZone("CONSTRU")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the constuction site
      Text.PrintNow("FARE11", 5000, 1);
      $.taxi_destx1 = 441.86;
      $.taxi_desty1 = -193.00;
      $.taxi_destz1 = 20.36;
      $.taxi_destx2 = 447.42;
      $.taxi_desty2 = -201.93;
      $.taxi_destz2 = 22.21;
    }
    //Take me to the stadium
    if ($.been_in_taxi1_before == 12) {
      if ($.player.isInZone("STADIUM")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the stadium
      Text.PrintNow("FARE12", 5000, 1);
      $.taxi_destx1 = -27.05;
      $.taxi_desty1 = -269.61;
      $.taxi_destz1 = 14.95;
      $.taxi_destx2 = -11.73;
      $.taxi_desty2 = -278.88;
      $.taxi_destz2 = 16.93;
    }
    //Take me to the Church
    if ($.been_in_taxi1_before == 13) {
      if ($.player.isInZone("SHOPING")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the Church
      Text.PrintNow("FARE13", 5000, 1);
      $.taxi_destx1 = 22.07;
      $.taxi_desty1 = -1136.95;
      $.taxi_destz1 = 25.14;
      $.taxi_destx2 = 28.95;
      $.taxi_desty2 = -1125.66;
      $.taxi_destz2 = 27.12;
    }
    //Casino
    if ($.been_in_taxi1_before == 14) {
      if ($.player.isInZone("YAKUSA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Casino
      Text.PrintNow("FARE14", 5000, 1);
      $.taxi_destx1 = 421.42;
      $.taxi_desty1 = -1390.83;
      $.taxi_destz1 = 24.95;
      $.taxi_destx2 = 415.45;
      $.taxi_desty2 = -1401.24;
      $.taxi_destz2 = 26.92;
    }
    //Uni
    if ($.been_in_taxi1_before == 15) {
      if ($.player.isInZone("UNIVERS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Uni
      Text.PrintNow("FARE15", 5000, 1);
      $.taxi_destx1 = 183.15;
      $.taxi_desty1 = -215.50;
      $.taxi_destz1 = 17.02;
      $.taxi_destx2 = 167.21;
      $.taxi_desty2 = -221.22;
      $.taxi_destz2 = 19.29;
    }
    //Shopping Mall
    if ($.been_in_taxi1_before == 16) {
      if ($.player.isInZone("PARK")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Shopping Mall
      Text.PrintNow("FARE16", 5000, 1);
      $.taxi_destx1 = 193.77;
      $.taxi_desty1 = -626.22;
      $.taxi_destz1 = 25.12;
      $.taxi_destx2 = 180.83;
      $.taxi_desty2 = -616.51;
      $.taxi_destz2 = 27.12;
    }
    //Museum
    if ($.been_in_taxi1_before == 17) {
      if ($.player.isInZone("COM_EAS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Museum
      Text.PrintNow("FARE17", 5000, 1);
      $.taxi_destx1 = 326.1;
      $.taxi_desty1 = -1001.7;
      $.taxi_destz1 = 29.05;
      $.taxi_destx2 = 316.3;
      $.taxi_desty2 = -1012.4;
      $.taxi_destz2 = 24.44;
    }
    //(AMco)
    if ($.been_in_taxi1_before == 18) {
      if ($.player.isInZone("YAKUSA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //(AMco)
      Text.PrintNow("FARE18", 5000, 1);
      $.taxi_destx1 = 246.20;
      $.taxi_desty1 = -1192.75;
      $.taxi_destz1 = 24.71;
      $.taxi_destx2 = 256.67;
      $.taxi_desty2 = -1184.17;
      $.taxi_destz2 = 26.71;
    }
    //Bolt Burgers
    if ($.been_in_taxi1_before == 19) {
      if ($.player.isInZone("SHOPING")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Bolt Burgers
      Text.PrintNow("FARE19", 5000, 1);
      $.taxi_destx1 = 28.69;
      $.taxi_desty1 = -1066.66;
      $.taxi_destz1 = 26.72;
      $.taxi_destx2 = 34.07;
      $.taxi_desty2 = -1078.96;
      $.taxi_destz2 = 24.97;
    }
    //Take me to the park
    if ($.been_in_taxi1_before == 20) {
      if ($.player.isInZone("PARK")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the park
      Text.PrintNow("FARE20", 5000, 1);
      $.taxi_destx1 = 27.56;
      $.taxi_desty1 = -776.42;
      $.taxi_destz1 = 26.26;
      $.taxi_destx2 = 38.79;
      $.taxi_desty2 = -765.06;
      $.taxi_destz2 = 28.57;
    }
  }
  //SUBURBIA*******************************************
  //Take me to the Airport
  //Take me to the DAM
  //Take me to the Import/Export garage
  //Take me to the Hospital
  //Park
  //Projects
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(21, 27);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    //Take me to the Airport
    if ($.been_in_taxi1_before == 21) {
      if ($.player.isInZone("AIRPORT")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the Airport
      Text.PrintNow("FARE21", 5000, 1);
      $.taxi_destx1 = -744.5;
      $.taxi_desty1 = -598.6;
      $.taxi_destz1 = 8.0;
      $.taxi_destx2 = -752.0;
      $.taxi_desty2 = -617.2;
      $.taxi_destz2 = 15.0;
    }
    //Take me to the DAM
    if ($.been_in_taxi1_before == 22) {
      if ($.player.isInZone("BIG_DAM")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the DAM
      Text.PrintNow("FARE22", 5000, 1);
      $.taxi_destx1 = -1111.3;
      $.taxi_desty1 = 522.9;
      $.taxi_destz1 = 65.0;
      $.taxi_destx2 = -1101.0;
      $.taxi_desty2 = 516.7;
      $.taxi_destz2 = 70.0;
    }
    //Take me to the Import/Export garage
    if ($.been_in_taxi1_before == 23) {
      if ($.player.isInZone("SUB_IND")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the Import/Export garage
      Text.PrintNow("FARE23", 5000, 1);
      $.taxi_destx1 = -1107.9;
      $.taxi_desty1 = 163.5;
      $.taxi_destz1 = 50.0;
      $.taxi_destx2 = -1115.4;
      $.taxi_desty2 = 155.6;
      $.taxi_destz2 = 68.0;
    }
    //Take me to the Hospital
    if ($.been_in_taxi1_before == 24) {
      if ($.player.isInZone("SUB_IND")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Take me to the Hospital
      Text.PrintNow("FARE24", 5000, 1);
      $.taxi_destx1 = -1253.0;
      $.taxi_desty1 = -136.6;
      $.taxi_destz1 = 55.0;
      $.taxi_destx2 = -1260.3;
      $.taxi_desty2 = -148.4;
      $.taxi_destz2 = 62.0;
    }
    //Park
    if ($.been_in_taxi1_before == 25) {
      if ($.player.isInZone("SUB_ZO2") || $.player.isInZone("SUB_ZO3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Park
      Text.PrintNow("FARE25", 5000, 1);
      $.taxi_destx1 = -230.1;
      $.taxi_desty1 = 311.5;
      $.taxi_destz1 = 0.0;
      $.taxi_destx2 = -220.2;
      $.taxi_desty2 = 322.5;
      $.taxi_destz2 = 10.0;
    }
    //Projects
    if ($.been_in_taxi1_before == 26) {
      if ($.player.isInZone("PROJECT") || $.player.isInZone("SWANKS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      //Projects
      Text.PrintNow("FARE26", 5000, 1);
      $.taxi_destx1 = -682.5;
      $.taxi_desty1 = 95.3;
      $.taxi_destz1 = 10.0;
      $.taxi_destx2 = -673.0;
      $.taxi_desty2 = 88.4;
      $.taxi_destz2 = 25.0;
    }
  }
  $.taxi_blipx = $.taxi_destx1 + $.taxi_destx2;
  $.taxi_blipx /= 2.0;
  $.taxi_blipy = $.taxi_desty1 + $.taxi_desty2;
  $.taxi_blipy /= 2.0;
  $.blip2_ct1 = Blip.AddForCoord($.taxi_blipx, $.taxi_blipy, -100.0);
  $.blip2_ct1.changeDisplay(2 /* BLIP_ONLY */);
  if (Car.IsDead($.taxi_car1)) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  $.x_diff = $.taxi_ped_x - $.taxi_blipx;
  $.y_diff = $.taxi_ped_y - $.taxi_blipy;
  $.x_diff_sq = $.x_diff * $.x_diff;
  $.y_diff_sq = $.y_diff * $.y_diff;
  $.taxi_distance_sq = $.x_diff_sq + $.y_diff_sq;
  $.taxi_distance = Math.Sqrt($.taxi_distance_sq);
  $.taxi_distance_int = $.taxi_distance;
  $.taxi_distance_int_old = $.taxi_distance_int;
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_distance_int = $.taxi_distance_int * 100;
    }
  }
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_distance_int = $.taxi_distance_int * 95;
    }
  }
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_distance_int = $.taxi_distance_int * 115;
    }
  }
  if ($.taxi_passed_this_shot == 1) {
    $.taxi_distance_int = $.taxi_distance_int * 90;
  }
  if ($.taxi_passed_this_shot == 2) {
    $.taxi_distance_int = $.taxi_distance_int * 85;
  }
  if ($.taxi_passed_this_shot == 3) {
    $.taxi_distance_int = $.taxi_distance_int * 84;
  }
  if ($.taxi_passed_this_shot == 4) {
    $.taxi_distance_int = $.taxi_distance_int * 83;
  }
  if ($.taxi_passed_this_shot == 5) {
    $.taxi_distance_int = $.taxi_distance_int * 82;
  }
  if ($.taxi_passed_this_shot > 5 && $.taxi_passed_this_shot <= 10) {
    $.taxi_distance_int = $.taxi_distance_int * 80;
  }
  if ($.taxi_passed_this_shot > 11 && $.taxi_passed_this_shot <= 20) {
    $.taxi_distance_int = $.taxi_distance_int * 75;
  }
  if ($.taxi_passed_this_shot > 20 && $.taxi_passed_this_shot <= 50) {
    $.taxi_distance_int = $.taxi_distance_int * 70;
  }
  if ($.taxi_passed_this_shot > 50) {
    $.taxi_distance_int = $.taxi_distance_int * 60;
  }
  $.taxi_countdown = $.taxi_countdown + $.taxi_distance_int;
  $.speedbonus = $.taxi_distance_int;
  $.speedbonus = $.speedbonus / 100;
  $.speedbonus = $.speedbonus * 65;
  {
  TIMERB = 0;
  if ($.taxi_countdown_already_started == 0) {
    Hud.DisplayTimer($.taxi_countdown);
    $.taxi_countdown_already_started = 1;
  }
  //SUBURBIA*******************************************
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_countdown = $.taxi_countdown + 15000;
    }
  }
  else {
    if ($.taxi_passed_this_shot == 0) {
      $.taxi_countdown = $.taxi_countdown + 10000;
    }
  }
  while (!($.taxi_car1.isStoppedInArea3D($.taxi_destx1, $.taxi_desty1, $.taxi_destz1, $.taxi_destx2, $.taxi_desty2, $.taxi_destz2, true /* TRUE */))) {
    await asyncWait(0);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.isInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    $.controlmode = Pad.GetControllerMode();
    if (!($.controlmode == 3)) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    else {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && $.flag_player_on_mission == 1) {
        // SCM GOTO → taxi_fail_button_pressed (not lowered; manual jump required)
        throw new Error("unresolved GOTO taxi_fail_button_pressed"); // fallback: would break linear control flow
      }
    }
    if ($.taxi_countdown == 0) {
      // SCM GOTO → taxi_out_of_time (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_out_of_time"); // fallback: would break linear control flow
    }
    if (!($.taxi_car1.isHealthGreater(500))) {
      if ($.spray_blip_onscreen == 0) {
        $.spray_taxi.remove();
        if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
          $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
        }
        if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
          $.spray_taxi = Blip.AddSpriteForCoord(379.0, -493.8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
        }
        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
          $.spray_taxi = Blip.AddSpriteForCoord(-1128.0, 32.5, .8, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
        }
        $.spray_blip_onscreen = 1;
        // SCM GOSUB taxi_fucked
        await taxi_fucked();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
      }
    }
    if (!(Car.IsDead($.taxi_car1))) {
      if ($.taxi_car1.isHealthGreater(500) && $.spray_blip_onscreen == 1) {
        $.spray_taxi.remove();
        $.spray_blip_onscreen = 0;
        $.taxi_fucked_flag = 0;
      }
    }
    if ($.taxi_car1.isUpsidedown() && $.taxi_car1.isStopped()) {
      // SCM GOTO → taxi_fucked (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fucked"); // fallback: would break linear control flow
    }
  }
}

async function score() {
  //SUBURBIA*******************************************
  //Fare delivered
  //Speed Bonus!!
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    //Fare delivered
    //Speed Bonus!!
    if (TIMERB > $.speedbonus) {
      $.score_for_this_fare = $.taxi_distance_int_old;
      //Fare delivered
      Text.PrintBig("TAXI4", 5000, 5);
    }
    else {
      $.score_for_this_fare = $.taxi_distance_int_old * 2;
      //Speed Bonus!!
      Text.PrintBig("TAXI5", 5000, 5);
    }
  }
  else {
    //Fare delivered
    //Speed Bonus!!
    if (TIMERB > $.speedbonus) {
      $.score_for_this_fare = $.taxi_distance_int_old / 2;
      //Fare delivered
      Text.PrintBig("TAXI4", 5000, 5);
    }
    else {
      $.score_for_this_fare = $.taxi_distance_int_old;
      //Speed Bonus!!
      Text.PrintBig("TAXI5", 5000, 5);
    }
  }
  }
  $.player.addScore($.score_for_this_fare);
  //Your score is...
  Text.PrintWithNumberBig("TSCORE2", $.score_for_this_fare, 6000, 6);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  $.taxi_score = $.taxi_score + $.score_for_this_fare;
  $.taxi_passed++;
  Stat.RegisterPassengerDroppedOffTaxi();
  //CREATE NEW TAXI AFTER COMPLETING 100 TAXI MISSIONS
  $.taxi_passed_this_shot++;
  if ($.new_taxi_created_before == 0 && $.taxi_passed == 100) {
    Pager.AddMessage("NEW_TAX", 140, 2, 0);
    $.swank_taxi.switch(101);
    Stat.PlayerMadeProgress(1);
    $.new_taxi_created_before = 1;
  }
  $.taxi_countdown = $.taxi_countdown + 10000;
  // SCM GOSUB mission_taxi1_failed
  await mission_taxi1_failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  //Bonus!
  /*
  IF taxi_passed_this_shot = 10
  PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 2000 6000 6 //Bonus!
  taxi_score = taxi_score + 2000
  ADD_SCORE player 1000
  ENDIF
  IF taxi_passed_this_shot = 15
  PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 4000 6000 6 //Bonus!
  taxi_score = taxi_score + 4000
  ADD_SCORE player 2000
  ENDIF
  IF taxi_passed_this_shot = 20
  PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 8000 6000 6 //Bonus!
  taxi_score = taxi_score + 8000
  ADD_SCORE player 4000
  ENDIF
  IF taxi_passed_this_shot = 25
  PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 16000 6000 6 //Bonus!
  taxi_score = taxi_score + 16000
  ADD_SCORE player 8000
  ENDIF
  IF taxi_passed_this_shot = 30
  PRINT_WITH_2_NUMBERS_BIG  ( IN_ROW ) taxi_passed_this_shot 32000 6000 6 //Bonus!
  taxi_score = taxi_score + 32000
  ADD_SCORE player 16000
  ENDIF
  */
  if ($.taxi_passed_this_shot == $.in_a_row_number) {
    //Bonus!
    Text.PrintWith2NumbersBig("IN_ROW", $.taxi_passed_this_shot, $.in_a_row_cash, 5000, 6);
    $.player.addScore($.in_a_row_cash);
    $.taxi_score = $.taxi_score + $.in_a_row_cash;
    $.in_a_row_number = $.in_a_row_number + 5;
    $.in_a_row_cash = $.in_a_row_cash + 2000;
  }
  //Taxi_fail_conditions
  // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
}

async function taxi_out_of_time() {
  //Out of time
  Text.PrintNow("TAXI2", 5000, 1);
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function taxi_fucked() {
  await asyncWait(0);
  //Taxi is trashed
  Text.PrintNow("TAXI3", 5000, 1);
  //SET_CHAR_PERSONALITY taxi_ped1 PEDSTAT_TOURIST
  //SET_CHAR_THREAT_SEARCH taxi_ped1 THREAT_PLAYER1
  if (!(Char.IsDead($.taxi_ped1))) {
    //SET_CHAR_THREAT_SEARCH taxi_ped1 THREAT_PLAYER1
    $.taxi_ped1.setObjFleeOnFootTillSafe();
  }
  $.taxi_fucked_flag = 1;
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function taxi_fail_button_pressed() {
  $.controlmode = Pad.GetControllerMode();
  // ok to fail if player is arrested?
  if (!($.controlmode == 3)) {
    // ok to fail if player is arrested?
    while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      await asyncWait(0);
      // ok to fail if player is arrested?
      if (!($.player.isPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  else {
    // ok to fail if player is arrested?
    while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      await asyncWait(0);
      // ok to fail if player is arrested?
      if (!($.player.isPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  // Mission taxi1 failed
  /*
  mission_taxi1_failed:
  GOSUB taxi_ped_leave
  RETURN
  */
  // mission taxi1 passed
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function mission_taxi1_passed() {
  $.blip1_ct1.remove();
  $.blip2_ct1.remove();
  $.taxi_ped1.markAsNoLongerNeeded();
  //WAIT 1000
  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.setTaxiLights(true /* On */);
  }
  await asyncWait(0);
  //Pick up a fare
  Text.PrintSoon("TAXI1", 1500, 1);
  // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
  throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
  return;
}

async function mission_taxi1_failed() {
  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if ($.taxi_ped1.isInCar($.taxi_car1)) {
        $.taxi_ped1.setObjLeaveCar($.taxi_car1);
        if ($.player.isPlaying()) {
          $.player.setControl(false /* OFF */);
        }
        while ($.taxi_ped1.isInCar($.taxi_car1)) {
          await asyncWait(0);
          if (Char.IsDead($.taxi_ped1) || Car.IsDead($.taxi_car1)) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player.isPlaying())) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player.isInCar($.taxi_car1))) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          $.controlmode = Pad.GetControllerMode();
          if (!($.controlmode == 3)) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */) && $.flag_player_on_mission == 1) {
              // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
            }
          }
          else {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */) && $.flag_player_on_mission == 1) {
              // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
              throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
            }
          }
        }
      }
    }
  }
  if ($.player.isPlaying()) {
    $.player.setControl(true /* ON */);
  }
  if ($.taxi_fucked_flag == 1) {
    return;
  }
}

async function taxi_ped_leave2() {
  await asyncWait(0);
  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if (!($.taxi_ped1.isInCar($.taxi_car1))) {
        $.taxi_ped1.wanderDir(0);
        $.taxi_ped1.markAsNoLongerNeeded();
      }
    }
  }
  if ($.player.isPlaying()) {
    $.player.setControl(true /* ON */);
  }
  // mission cleanup
  return;
}

async function mission_cleanup_taxi1() {
  Hud.ClearTimer($.taxi_countdown);
  //TEST STUFF!!!!!!!!
  Hud.ClearCounter($.taxi_passed_this_shot);
  //SWITCH_TAXI_TIMER OFF
  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.setTaxiLights(false /* Off */);
  }
  $.blip1_ct1.remove();
  $.blip2_ct1.remove();
  $.spray_taxi.remove();
  $.taxi_ped1.markAsNoLongerNeeded();
  //Taxi mission over
  Text.PrintBig("TAXI6", 5000, 5);
  //Your score is...
  Text.PrintWithNumberBig("TSCORE", $.taxi_score, 6000, 6);
  Stat.RegisterMoneyMadeTaxi($.taxi_score);
  // SET_DEATHARREST_STATE(true /* on */);
  $.flag_player_on_mission = 0;
  $.flag_taxi1_mission_launched = 0;
  if ($.player.isPlaying()) {
    $.player.setControl(true /* ON */);
  }
  Text.ClearHelp();
  Mission.Finish();
  return;
}

export async function taxi1() {
  // *******************************************************************************************
  // *************************************CRRRRRAZY TAXI****************************************
  // *******************************LETS MAKE SOME CRRRRRAZY MONEY!*****************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_taxi1
  await mission_start_taxi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB mission_cleanup_taxi1
  await mission_cleanup_taxi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT blip1_ct1 blip2_ct1 spray_blip_onscreen
  // VAR_INT taxi_car1 taxi_countdown_already_started
  //VAR_INT special_ped1
  // VAR_INT taxi_ped1 taxi_passed_this_shot taxi_fucked_flag
  // VAR_INT taxi_countdown taxi_score taxi_distance_int taxi_distance_int_old
  // VAR_INT taxi_finish_time taxi_start_time total_taxi_time_taken
  // VAR_FLOAT taxi_destx1 taxi_desty1 taxi_destz1
  // VAR_FLOAT taxi_destx2 taxi_desty2 taxi_destz2
  // VAR_FLOAT taxi_blipx taxi_blipy taxi_blipz
  // VAR_FLOAT taxi_ped_x taxi_ped_y taxi_ped_z
  // VAR_FLOAT x_diff y_diff x_diff_sq y_diff_sq taxi_distance_sq taxi_distance
  // ***************************************Mission Start*************************************
  // VAR_INT score_for_this_fare speedbonus in_a_row_cash in_a_row_number
}
