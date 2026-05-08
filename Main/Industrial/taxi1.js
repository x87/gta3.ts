// Generated from Main/Industrial/taxi1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_taxi1() {
  // ScriptName
  // SET_DEATHARREST_STATE(0 /* OFF */);
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
  Hud.DisplayCounterWithString($.taxi_passed_this_shot, 0 /* COUNTER_DISPLAY_NUMBER */, "FARES");
  if (!($.player.IsPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if ($.player.IsInAnyCar()) {
    $.taxi_car1 = $.player.StoreCarIsIn();
  }
  else {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  $.taxi_car1.SetTaxiLights(1 /* On */);
  Text.PrintNow("TAXI1", 1500, 1);
  await asyncWait(0);
}

async function Start_taxi_mission() {
  if ($.done_taxi_help == 0) {
    Text.PrintHelp("TAXIH1");
    $.done_taxi_help = 1;
  }
  $.score_for_this_fare = 0;
  if (!($.player.IsPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.taxi_car1)) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (!($.player.IsInCar($.taxi_car1))) {
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
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.taxi_ped1 = Zone.GetRandomChar("SUB_ZON");
  }
  if ($.taxi_ped1 == -1) {
    await asyncWait(0);
    // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
    throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
  }
  $.taxi_ped1.SetIdle();
  $.taxi_ped1.ClearThreatSearch();
  $.taxi_ped1.SetHeedThreats(0 /* False */);
  $.blip1_ct1 = Blip.AddForChar($.taxi_ped1);
  $.taxi_ped1.SetObjHailTaxi();
}

async function ped_get_in_taxi() {
  while (!($.player.LocateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, 0 /* FALSE */)) || !($.taxi_car1.IsStopped())) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
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
    if (!($.player.IsInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, 0 /* FALSE */))) {
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
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.IsHealthGreater(500) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.Remove();
      $.spray_blip_onscreen = 0;
      $.taxi_fucked_flag = 0;
    }
    if (!(Char.IsDead($.taxi_ped1))) {
      $.taxi_ped1.TurnToFacePlayer($.player);
    }
  }
  if (!($.taxi_car1.IsHealthGreater(500))) {
    Text.PrintNow("TAXI7", 4000, 1);
    if ($.spray_blip_onscreen == 0) {
      $.spray_taxi.Remove();
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
  $.taxi_ped1.SetRunning(1 /* TRUE */);
  $.taxi_ped1.SetObjEnterCarAsPassenger($.taxi_car1);
  while (!($.taxi_ped1.IsInCar($.taxi_car1))) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
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
    if (!($.player.IsInCar($.taxi_car1))) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateInCarChar3D($.taxi_ped1, 90.0, 90.0, 20.0, 0 /* FALSE */))) {
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
    if ($.taxi_countdown_already_started == 1 && $.taxi_countdown == 0) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.taxi_car1.IsHealthGreater(500) && $.spray_blip_onscreen == 1) {
      $.spray_taxi.Remove();
      $.spray_blip_onscreen = 0;
    }
    if (!($.player.LocateInCarChar3D($.taxi_ped1, 7.0, 7.0, 2.0, 0 /* FALSE */))) {
      // SCM GOTO → ped_get_in_taxi (not lowered; manual jump required)
      throw new Error("unresolved GOTO ped_get_in_taxi"); // fallback: would break linear control flow
    }
  }
  [$.taxi_ped_x, $.taxi_ped_y, $.taxi_ped_z] = $.taxi_ped1.GetCoordinates();
  $.blip1_ct1.Remove();
  $.taxi_car1.SetTaxiLights(0 /* Off */);
}

async function passenger_destination() {
  await asyncWait(0);
  if (!($.player.IsPlaying())) {
    // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
  }
  if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(1, 11);
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.been_in_taxi1_before == 1) {
      if ($.player.IsInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE1", 5000, 1);
      $.taxi_destx1 = 936.3;
      $.taxi_desty1 = -462.6;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 913.7;
      $.taxi_desty2 = -456.0;
      $.taxi_destz2 = 16.4;
    }
    if ($.been_in_taxi1_before == 2) {
      if ($.player.IsInZone("S_VIEW")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE2", 5000, 1);
      $.taxi_destx1 = 1268.5;
      $.taxi_desty1 = -616.4;
      $.taxi_destz1 = 11.7;
      $.taxi_destx2 = 1288.3;
      $.taxi_desty2 = -627.6;
      $.taxi_destz2 = 13.7;
    }
    if ($.been_in_taxi1_before == 3) {
      if ($.player.IsInZone("CHINA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE3", 5000, 1);
      $.taxi_destx1 = 1008.9;
      $.taxi_desty1 = -871.9;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 995.3;
      $.taxi_desty2 = -881.9;
      $.taxi_destz2 = 16.4;
    }
    if ($.been_in_taxi1_before == 4) {
      if ($.player.IsInZone("PORT_W")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE4", 5000, 1);
      $.taxi_destx1 = 849.3;
      $.taxi_desty1 = -990.1;
      $.taxi_destz1 = 4.5;
      $.taxi_destx2 = 869.4;
      $.taxi_desty2 = -1002.6;
      $.taxi_destz2 = 6.5;
    }
    if ($.been_in_taxi1_before == 5) {
      if ($.player.IsInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE5", 5000, 1);
      $.taxi_destx1 = 1065.4;
      $.taxi_desty1 = -394.1;
      $.taxi_destz1 = 14.3;
      $.taxi_destx2 = 1057.9;
      $.taxi_desty2 = -408.9;
      $.taxi_destz2 = 16.3;
    }
    if ($.been_in_taxi1_before == 6) {
      if ($.player.IsInZone("LITTLEI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE6", 5000, 1);
      $.taxi_destx1 = 1207.0;
      $.taxi_desty1 = -122.0;
      $.taxi_destz1 = 14.0;
      $.taxi_destx2 = 1224.0;
      $.taxi_desty2 = -108.0;
      $.taxi_destz2 = 16.0;
    }
    if ($.been_in_taxi1_before == 7) {
      if ($.player.IsInZone("REDLIGH")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE7", 5000, 1);
      $.taxi_destx1 = 912.9;
      $.taxi_desty1 = -419.0;
      $.taxi_destz1 = 14.0;
      $.taxi_destx2 = 919.5;
      $.taxi_desty2 = -401.3;
      $.taxi_destz2 = 16.0;
    }
    if ($.been_in_taxi1_before == 8) {
      if ($.player.IsInZone("LITTLEI")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE8", 5000, 1);
      $.taxi_destx1 = 1345.8;
      $.taxi_desty1 = -461.8;
      $.taxi_destz1 = 49.4;
      $.taxi_destx2 = 1334.7;
      $.taxi_desty2 = -447.0;
      $.taxi_destz2 = 51.4;
    }
    if ($.been_in_taxi1_before == 9) {
      if ($.player.IsInZone("PORT_E")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE9", 5000, 1);
      $.taxi_destx1 = 1475.0;
      $.taxi_desty1 = -686.0;
      $.taxi_destz1 = 11.3;
      $.taxi_destx2 = 1485.3;
      $.taxi_desty2 = -667.5;
      $.taxi_destz2 = 13.3;
    }
    if ($.been_in_taxi1_before == 10) {
      if ($.player.IsInZone("CHINA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE10", 5000, 1);
      $.taxi_destx1 = 1039.1;
      $.taxi_desty1 = -660.1;
      $.taxi_destz1 = 14.4;
      $.taxi_destx2 = 1043.9;
      $.taxi_desty2 = -647.9;
      $.taxi_destz2 = 16.4;
    }
  }
  if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(11, 21);
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.been_in_taxi1_before == 11) {
      if ($.player.IsInZone("CONSTRU")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE11", 5000, 1);
      $.taxi_destx1 = 441.86;
      $.taxi_desty1 = -193.00;
      $.taxi_destz1 = 20.36;
      $.taxi_destx2 = 447.42;
      $.taxi_desty2 = -201.93;
      $.taxi_destz2 = 22.21;
    }
    if ($.been_in_taxi1_before == 12) {
      if ($.player.IsInZone("STADIUM")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE12", 5000, 1);
      $.taxi_destx1 = -27.05;
      $.taxi_desty1 = -269.61;
      $.taxi_destz1 = 14.95;
      $.taxi_destx2 = -11.73;
      $.taxi_desty2 = -278.88;
      $.taxi_destz2 = 16.93;
    }
    if ($.been_in_taxi1_before == 13) {
      if ($.player.IsInZone("SHOPING")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE13", 5000, 1);
      $.taxi_destx1 = 22.07;
      $.taxi_desty1 = -1136.95;
      $.taxi_destz1 = 25.14;
      $.taxi_destx2 = 28.95;
      $.taxi_desty2 = -1125.66;
      $.taxi_destz2 = 27.12;
    }
    if ($.been_in_taxi1_before == 14) {
      if ($.player.IsInZone("YAKUSA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE14", 5000, 1);
      $.taxi_destx1 = 421.42;
      $.taxi_desty1 = -1390.83;
      $.taxi_destz1 = 24.95;
      $.taxi_destx2 = 415.45;
      $.taxi_desty2 = -1401.24;
      $.taxi_destz2 = 26.92;
    }
    if ($.been_in_taxi1_before == 15) {
      if ($.player.IsInZone("UNIVERS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE15", 5000, 1);
      $.taxi_destx1 = 183.15;
      $.taxi_desty1 = -215.50;
      $.taxi_destz1 = 17.02;
      $.taxi_destx2 = 167.21;
      $.taxi_desty2 = -221.22;
      $.taxi_destz2 = 19.29;
    }
    if ($.been_in_taxi1_before == 16) {
      if ($.player.IsInZone("PARK")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE16", 5000, 1);
      $.taxi_destx1 = 193.77;
      $.taxi_desty1 = -626.22;
      $.taxi_destz1 = 25.12;
      $.taxi_destx2 = 180.83;
      $.taxi_desty2 = -616.51;
      $.taxi_destz2 = 27.12;
    }
    if ($.been_in_taxi1_before == 17) {
      if ($.player.IsInZone("COM_EAS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE17", 5000, 1);
      $.taxi_destx1 = 326.1;
      $.taxi_desty1 = -1001.7;
      $.taxi_destz1 = 29.05;
      $.taxi_destx2 = 316.3;
      $.taxi_desty2 = -1012.4;
      $.taxi_destz2 = 24.44;
    }
    if ($.been_in_taxi1_before == 18) {
      if ($.player.IsInZone("YAKUSA")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE18", 5000, 1);
      $.taxi_destx1 = 246.20;
      $.taxi_desty1 = -1192.75;
      $.taxi_destz1 = 24.71;
      $.taxi_destx2 = 256.67;
      $.taxi_desty2 = -1184.17;
      $.taxi_destz2 = 26.71;
    }
    if ($.been_in_taxi1_before == 19) {
      if ($.player.IsInZone("SHOPING")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE19", 5000, 1);
      $.taxi_destx1 = 28.69;
      $.taxi_desty1 = -1066.66;
      $.taxi_destz1 = 26.72;
      $.taxi_destx2 = 34.07;
      $.taxi_desty2 = -1078.96;
      $.taxi_destz2 = 24.97;
    }
    if ($.been_in_taxi1_before == 20) {
      if ($.player.IsInZone("PARK")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE20", 5000, 1);
      $.taxi_destx1 = 27.56;
      $.taxi_desty1 = -776.42;
      $.taxi_destz1 = 26.26;
      $.taxi_destx2 = 38.79;
      $.taxi_desty2 = -765.06;
      $.taxi_destz2 = 28.57;
    }
  }
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    $.been_in_taxi1_before = Math.RandomIntInRange(21, 27);
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if ($.been_in_taxi1_before == 21) {
      if ($.player.IsInZone("AIRPORT")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE21", 5000, 1);
      $.taxi_destx1 = -744.5;
      $.taxi_desty1 = -598.6;
      $.taxi_destz1 = 8.0;
      $.taxi_destx2 = -752.0;
      $.taxi_desty2 = -617.2;
      $.taxi_destz2 = 15.0;
    }
    if ($.been_in_taxi1_before == 22) {
      if ($.player.IsInZone("BIG_DAM")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE22", 5000, 1);
      $.taxi_destx1 = -1111.3;
      $.taxi_desty1 = 522.9;
      $.taxi_destz1 = 65.0;
      $.taxi_destx2 = -1101.0;
      $.taxi_desty2 = 516.7;
      $.taxi_destz2 = 70.0;
    }
    if ($.been_in_taxi1_before == 23) {
      if ($.player.IsInZone("SUB_IND")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE23", 5000, 1);
      $.taxi_destx1 = -1107.9;
      $.taxi_desty1 = 163.5;
      $.taxi_destz1 = 50.0;
      $.taxi_destx2 = -1115.4;
      $.taxi_desty2 = 155.6;
      $.taxi_destz2 = 68.0;
    }
    if ($.been_in_taxi1_before == 24) {
      if ($.player.IsInZone("SUB_IND")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE24", 5000, 1);
      $.taxi_destx1 = -1253.0;
      $.taxi_desty1 = -136.6;
      $.taxi_destz1 = 55.0;
      $.taxi_destx2 = -1260.3;
      $.taxi_desty2 = -148.4;
      $.taxi_destz2 = 62.0;
    }
    if ($.been_in_taxi1_before == 25) {
      if ($.player.IsInZone("SUB_ZO2") || $.player.IsInZone("SUB_ZO3")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
      Text.PrintNow("FARE25", 5000, 1);
      $.taxi_destx1 = -230.1;
      $.taxi_desty1 = 311.5;
      $.taxi_destz1 = 0.0;
      $.taxi_destx2 = -220.2;
      $.taxi_desty2 = 322.5;
      $.taxi_destz2 = 10.0;
    }
    if ($.been_in_taxi1_before == 26) {
      if ($.player.IsInZone("PROJECT") || $.player.IsInZone("SWANKS")) {
        // SCM GOTO → passenger_destination (not lowered; manual jump required)
        throw new Error("unresolved GOTO passenger_destination"); // fallback: would break linear control flow
      }
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
  $.blip2_ct1.ChangeDisplay(2 /* BLIP_ONLY */);
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
  while (!($.taxi_car1.IsStoppedInArea3D($.taxi_destx1, $.taxi_desty1, $.taxi_destz1, $.taxi_destx2, $.taxi_desty2, $.taxi_destz2, 1 /* TRUE */))) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.taxi_car1)) {
      // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.taxi_car1))) {
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
    if (!($.taxi_car1.IsHealthGreater(500))) {
      if ($.spray_blip_onscreen == 0) {
        $.spray_taxi.Remove();
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
      if ($.taxi_car1.IsHealthGreater(500) && $.spray_blip_onscreen == 1) {
        $.spray_taxi.Remove();
        $.spray_blip_onscreen = 0;
        $.taxi_fucked_flag = 0;
      }
    }
    if ($.taxi_car1.IsUpsidedown() && $.taxi_car1.IsStopped()) {
      // SCM GOTO → taxi_fucked (not lowered; manual jump required)
      throw new Error("unresolved GOTO taxi_fucked"); // fallback: would break linear control flow
    }
  }
}

async function score() {
  if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
    if (TIMERB > $.speedbonus) {
      $.score_for_this_fare = $.taxi_distance_int_old;
      Text.PrintBig("TAXI4", 5000, 5);
    }
    else {
      $.score_for_this_fare = $.taxi_distance_int_old * 2;
      Text.PrintBig("TAXI5", 5000, 5);
    }
  }
  else {
    if (TIMERB > $.speedbonus) {
      $.score_for_this_fare = $.taxi_distance_int_old / 2;
      Text.PrintBig("TAXI4", 5000, 5);
    }
    else {
      $.score_for_this_fare = $.taxi_distance_int_old;
      Text.PrintBig("TAXI5", 5000, 5);
    }
  }
  }
  $.player.AddScore($.score_for_this_fare);
  Text.PrintWithNumberBig("TSCORE2", $.score_for_this_fare, 6000, 6);
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  $.taxi_score = $.taxi_score + $.score_for_this_fare;
  $.taxi_passed++;
  Stat.RegisterPassengerDroppedOffTaxi();
  $.taxi_passed_this_shot++;
  if ($.new_taxi_created_before == 0 && $.taxi_passed == 100) {
    Pager.AddMessage("NEW_TAX", 140, 2, 0);
    $.swank_taxi.Switch(101);
    Stat.PlayerMadeProgress(1);
    $.new_taxi_created_before = 1;
  }
  $.taxi_countdown = $.taxi_countdown + 10000;
  // SCM GOSUB mission_taxi1_failed
  await mission_taxi1_failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.taxi_passed_this_shot == $.in_a_row_number) {
    Text.PrintWith2NumbersBig("IN_ROW", $.taxi_passed_this_shot, $.in_a_row_cash, 5000, 6);
    $.player.AddScore($.in_a_row_cash);
    $.taxi_score = $.taxi_score + $.in_a_row_cash;
    $.in_a_row_number = $.in_a_row_number + 5;
    $.in_a_row_cash = $.in_a_row_cash + 2000;
  }
  // SCM GOTO → mission_taxi1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_passed"); // fallback: would break linear control flow
}

async function taxi_out_of_time() {
  Text.PrintNow("TAXI2", 5000, 1);
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function taxi_fucked() {
  await asyncWait(0);
  Text.PrintNow("TAXI3", 5000, 1);
  if (!(Char.IsDead($.taxi_ped1))) {
    $.taxi_ped1.SetObjFleeOnFootTillSafe();
  }
  $.taxi_fucked_flag = 1;
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function taxi_fail_button_pressed() {
  $.controlmode = Pad.GetControllerMode();
  if (!($.controlmode == 3)) {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
      await asyncWait(0);
      if (!($.player.IsPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  else {
    while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
      await asyncWait(0);
      if (!($.player.IsPlaying())) {
        // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  // SCM GOTO → mission_taxi1_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_taxi1_failed"); // fallback: would break linear control flow
}

async function mission_taxi1_passed() {
  $.blip1_ct1.Remove();
  $.blip2_ct1.Remove();
  $.taxi_ped1.MarkAsNoLongerNeeded();
  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.SetTaxiLights(1 /* On */);
  }
  await asyncWait(0);
  Text.PrintSoon("TAXI1", 1500, 1);
  // SCM GOTO → Start_taxi_mission (not lowered; manual jump required)
  throw new Error("unresolved GOTO Start_taxi_mission"); // fallback: would break linear control flow
  return;
}

async function mission_taxi1_failed() {
  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if ($.taxi_ped1.IsInCar($.taxi_car1)) {
        $.taxi_ped1.SetObjLeaveCar($.taxi_car1);
        if ($.player.IsPlaying()) {
          $.player.SetControl(0 /* OFF */);
        }
        while ($.taxi_ped1.IsInCar($.taxi_car1)) {
          await asyncWait(0);
          if (Char.IsDead($.taxi_ped1) || Car.IsDead($.taxi_car1)) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player.IsPlaying())) {
            // SCM GOTO → taxi_ped_leave2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO taxi_ped_leave2"); // fallback: would break linear control flow
          }
          if (!($.player.IsInCar($.taxi_car1))) {
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
  if ($.player.IsPlaying()) {
    $.player.SetControl(1 /* ON */);
  }
  if ($.taxi_fucked_flag == 1) {
    return;
  }
}

async function taxi_ped_leave2() {
  await asyncWait(0);
  if (!(Char.IsDead($.taxi_ped1))) {
    if (!(Car.IsDead($.taxi_car1))) {
      if (!($.taxi_ped1.IsInCar($.taxi_car1))) {
        $.taxi_ped1.WanderDir(0);
        $.taxi_ped1.MarkAsNoLongerNeeded();
      }
    }
  }
  if ($.player.IsPlaying()) {
    $.player.SetControl(1 /* ON */);
  }
  return;
}

async function mission_cleanup_taxi1() {
  Hud.ClearTimer($.taxi_countdown);
  Hud.ClearCounter($.taxi_passed_this_shot);
  if (!(Car.IsDead($.taxi_car1))) {
    $.taxi_car1.SetTaxiLights(0 /* Off */);
  }
  $.blip1_ct1.Remove();
  $.blip2_ct1.Remove();
  $.spray_taxi.Remove();
  $.taxi_ped1.MarkAsNoLongerNeeded();
  Text.PrintBig("TAXI6", 5000, 5);
  Text.PrintWithNumberBig("TSCORE", $.taxi_score, 6000, 6);
  Stat.RegisterMoneyMadeTaxi($.taxi_score);
  // SET_DEATHARREST_STATE(1 /* on */);
  $.flag_player_on_mission = 0;
  $.flag_taxi1_mission_launched = 0;
  if ($.player.IsPlaying()) {
    $.player.SetControl(1 /* ON */);
  }
  Text.ClearHelp();
  Mission.Finish();
  return;
}

export async function taxi1() {
  // MissionBoundary
  // SCM GOSUB mission_start_taxi1
  await mission_start_taxi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB mission_cleanup_taxi1
  await mission_cleanup_taxi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip1_ct1 blip2_ct1 spray_blip_onscreen
  // VAR_INT taxi_car1 taxi_countdown_already_started
  // VAR_INT taxi_ped1 taxi_passed_this_shot taxi_fucked_flag
  // VAR_INT taxi_countdown taxi_score taxi_distance_int taxi_distance_int_old
  // VAR_INT taxi_finish_time taxi_start_time total_taxi_time_taken
  // VAR_FLOAT taxi_destx1 taxi_desty1 taxi_destz1
  // VAR_FLOAT taxi_destx2 taxi_desty2 taxi_destz2
  // VAR_FLOAT taxi_blipx taxi_blipy taxi_blipz
  // VAR_FLOAT taxi_ped_x taxi_ped_y taxi_ped_z
  // VAR_FLOAT x_diff y_diff x_diff_sq y_diff_sq taxi_distance_sq taxi_distance
  // VAR_INT score_for_this_fare speedbonus in_a_row_cash in_a_row_number
}
