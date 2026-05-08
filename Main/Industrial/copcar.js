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
  [$.player_c_x, $.player_c_y, $.player_c_z] = $.player.GetCoordinates();
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
  if ($.player_in_range == 0) {
    if ($.got_range_message == 0) {
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
  if ($.criminal_coord_x > 1398.0 && $.criminal_coord_x < 1615.0 && $.criminal_coord_y > -965.0 && $.criminal_coord_y < -902.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 879.0 && $.criminal_coord_x < 892.0 && $.criminal_coord_y > -427.0 && $.criminal_coord_y < -407.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 944.8 && $.criminal_coord_x < 1017.1 && $.criminal_coord_y > -1148.8 && $.criminal_coord_y < -1076.6) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 920.8 && $.criminal_coord_x < 1004.0 && $.criminal_coord_y > -754.2 && $.criminal_coord_y < -670.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 670.0 && $.criminal_coord_x < 1035.0 && $.criminal_coord_y > -953.0 && $.criminal_coord_y < -912.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 1364.0 && $.criminal_coord_x < 1641.0 && $.criminal_coord_y > -1165.0 && $.criminal_coord_y < -617.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 649.0 && $.criminal_coord_x < 1066.0 && $.criminal_coord_y > 25.0 && $.criminal_coord_y < 217.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > -1611.5 && $.criminal_coord_x < -745.3 && $.criminal_coord_y > -1001.9 && $.criminal_coord_y < -371.2) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 939.8 && $.criminal_coord_x < 1035.6 && $.criminal_coord_y > -901.3 && $.criminal_coord_y < -828.2) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 1215.3 && $.criminal_coord_x < 1223.7 && $.criminal_coord_y > -839.4 && $.criminal_coord_y < -763.6) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 845.3 && $.criminal_coord_x < 899.6 && $.criminal_coord_y > -312.6 && $.criminal_coord_y < -295.7) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 113.3 && $.criminal_coord_x < 99.7 && $.criminal_coord_y > -1284.8 && $.criminal_coord_y < -1273.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 18.33 && $.criminal_coord_x < 92.06 && $.criminal_coord_y > -388.7 && $.criminal_coord_y < -312.38) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > -1255.4 && $.criminal_coord_x < -1187.9 && $.criminal_coord_y > 80.6 && $.criminal_coord_y < 123.4) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.criminal_coord_x > 1386.4 && $.criminal_coord_x < 1475.8 && $.criminal_coord_y > -292.1 && $.criminal_coord_y < -168.0) {
    // SCM GOTO → criminal_in_car (not lowered; manual jump required)
    throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
  }
  if ($.location == 1) {
    if (!($.criminal_coord_x > 778.0) || !($.criminal_coord_x < 1540.0) || !($.criminal_coord_y > -1110.0) || !($.criminal_coord_y < 190.0)) {
      // SCM GOTO → criminal_in_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
    }
  }
  if ($.location == 2) {
    if (!($.criminal_coord_x > -192.0) || !($.criminal_coord_x < 545.0) || !($.criminal_coord_y > -1626.0) || !($.criminal_coord_y < 98.0)) {
      // SCM GOTO → criminal_in_car (not lowered; manual jump required)
      throw new Error("unresolved GOTO criminal_in_car"); // fallback: would break linear control flow
    }
  }
  if ($.location == 3) {
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
  if ($.car_model > 113 && $.car_model < 128) {
    // SCM GOTO → generate_car_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_car_model"); // fallback: would break linear control flow
  }
  if ($.car_model == 97) {
    // SCM GOTO → generate_car_model (not lowered; manual jump required)
    throw new Error("unresolved GOTO generate_car_model"); // fallback: would break linear control flow
  }
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
  $.criminal_car.SetAvoidLevelTransitions(1 /* TRUE */);
  $.criminal_car.SetHealth(800);
  Streaming.MarkModelAsNoLongerNeeded(car`model`);
  $.criminal_car.SetHeading($.criminal_heading);
  [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = Path.GetClosestCharNode($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  $.criminal = Char.CreateRandom($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  $.criminal.SetIsChrisCriminal(1 /* TRUE */);
  $.criminal.WarpIntoCar($.criminal_car);
  $.criminal.SetRunning(1 /* TRUE */);
  $.criminal.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.criminal.ClearThreatSearch();
  $.criminal.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.criminal.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.criminal.SetThreatSearch(1 /* THREAT_PLAYER2 */);
  $.criminal.SetThreatSearch(2 /* THREAT_PLAYER3 */);
  $.criminal.SetThreatSearch(3 /* THREAT_PLAYER4 */);
  $.criminal.SetThreatSearch(4 /* THREAT_CIVMALE */);
  $.criminal.SetThreatSearch(5 /* THREAT_CIVFEMALE */);
  $.criminal.SetThreatSearch(6 /* THREAT_COP */);
  $.criminal.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.criminal.SetThreatSearch(9 /* THREAT_GANG_DIABLO */);
  $.criminal.SetThreatSearch(8 /* THREAT_GANG_TRIAD */);
  $.criminal.SetThreatSearch(11 /* THREAT_GANG_YARDIE */);
  $.criminal.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
  $.criminal.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
  $.criminal.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
  $.criminal.SetThreatSearch(16 /* THREAT_EMERGENCY */);
  $.criminal.SetThreatSearch(17 /* THREAT_PROSTITUTE */);
  $.criminal.SetThreatSearch(18 /* THREAT_CRIMINAL */);
  $.criminal.SetThreatSearch(20 /* THREAT_GUN */);
  $.criminal.SetThreatSearch(21 /* THREAT_COP_CAR */);
  $.criminal.SetThreatSearch(22 /* THREAT_FAST_CAR */);
  $.criminal.SetThreatSearch(24 /* THREAT_FIREMAN */);
  $.criminal.SetHeedThreats(1 /* TRUE */);
  $.criminal_car.MarkAsNoLongerNeeded();
  if ($.flag_industrial_passed == 0) {
    $.random_gun = Math.RandomIntInRange(0, 5);
  }
  if ($.flag_industrial_passed == 1) {
    $.random_gun = Math.RandomIntInRange(2, 6);
  }
  if ($.flag_commercial_passed == 1) {
    $.random_gun = Math.RandomIntInRange(3, 10);
  }
  $.criminal.GiveWeapon($.random_gun, 1000);
  $.criminal_blip = Blip.AddForChar($.criminal);
  Text.ClearHelp();
  if ($.got_siren_help_before == 0) {
    $.controlmode = Pad.GetControllerMode();
    if ($.controlmode == 0) {
      Text.PrintHelp(SIREN_1);
    }
    if ($.controlmode == 1) {
      Text.PrintHelp(SIREN_2);
    }
    if ($.controlmode == 2) {
      Text.PrintHelp(SIREN_3);
    }
    if ($.controlmode == 3) {
      Text.PrintHelp(SIREN_4);
    }
    $.got_siren_help_before = 1;
  }
  if ($.criminal.IsInZone("PORT_W")) {
    Text.PrintStringInStringNow(C_BREIF, PORT_W, 5000, 1);
  }
  if ($.criminal.IsInZone("PORT_S")) {
    Text.PrintStringInStringNow(C_BREIF, PORT_S, 5000, 1);
  }
  if ($.criminal.IsInZone("PORT_E")) {
    Text.PrintStringInStringNow(C_BREIF, PORT_E, 5000, 1);
  }
  if ($.criminal.IsInZone("PORT_I")) {
    Text.PrintStringInStringNow(C_BREIF, PORT_I, 5000, 1);
  }
  if ($.criminal.IsInZone("S_VIEW")) {
    Text.PrintStringInStringNow(C_BREIF, S_VIEW, 5000, 1);
  }
  if ($.criminal.IsInZone("CHINA")) {
    Text.PrintStringInStringNow(C_BREIF, CHINA, 5000, 1);
  }
  if ($.criminal.IsInZone("EASTBAY")) {
    Text.PrintStringInStringNow(C_BREIF, EASTBAY, 5000, 1);
  }
  if ($.criminal.IsInZone("LITTLEI")) {
    Text.PrintStringInStringNow(C_BREIF, LITTLEI, 5000, 1);
  }
  if ($.criminal.IsInZone("REDLIGH")) {
    Text.PrintStringInStringNow(C_BREIF, REDLIGH, 5000, 1);
  }
  if ($.criminal.IsInZone("TOWERS")) {
    Text.PrintStringInStringNow(C_BREIF, TOWERS, 5000, 1);
  }
  if ($.criminal.IsInZone("HARWOOD")) {
    Text.PrintStringInStringNow(C_BREIF, HARWOOD, 5000, 1);
  }
  if ($.criminal.IsInZone("ROADBR1")) {
    Text.PrintStringInStringNow(C_BREIF, ROADBR1, 5000, 1);
  }
  if ($.criminal.IsInZone("ROADBR2")) {
    Text.PrintStringInStringNow(C_BREIF, ROADBR2, 5000, 1);
  }
  if ($.criminal.IsInZone("STADIUM")) {
    Text.PrintStringInStringNow(C_BREIF, STADIUM, 5000, 1);
  }
  if ($.criminal.IsInZone("HOSPI_2")) {
    Text.PrintStringInStringNow(C_BREIF, HOSPI_2, 5000, 1);
  }
  if ($.criminal.IsInZone("UNIVERS")) {
    Text.PrintStringInStringNow(C_BREIF, UNIVERS, 5000, 1);
  }
  if ($.criminal.IsInZone("CONSTRU")) {
    Text.PrintStringInStringNow(C_BREIF, CONSTRU, 5000, 1);
  }
  if ($.criminal.IsInZone("PARK")) {
    Text.PrintStringInStringNow(C_BREIF, PARK, 5000, 1);
  }
  if ($.criminal.IsInZone("COM_EAS")) {
    Text.PrintStringInStringNow(C_BREIF, COM_EAS, 5000, 1);
  }
  if ($.criminal.IsInZone("SHOPING")) {
    Text.PrintStringInStringNow(C_BREIF, SHOPING, 5000, 1);
  }
  if ($.criminal.IsInZone("YAKUSA")) {
    Text.PrintStringInStringNow(C_BREIF, YAKUSA, 5000, 1);
  }
  if ($.criminal.IsInZone("AIRPORT")) {
    Text.PrintStringInStringNow(C_BREIF, AIRPORT, 5000, 1);
  }
  if ($.criminal.IsInZone("PROJECT")) {
    Text.PrintStringInStringNow(C_BREIF, PROJECT, 5000, 1);
  }
  if ($.criminal.IsInZone("SUB_IND")) {
    Text.PrintStringInStringNow(C_BREIF, SUB_IND, 5000, 1);
  }
  if ($.criminal.IsInZone("SWANKS")) {
    Text.PrintStringInStringNow(C_BREIF, SWANKS, 5000, 1);
  }
  if ($.criminal.IsInZone("BIG_DAM")) {
    Text.PrintStringInStringNow(C_BREIF, BIG_DAM, 5000, 1);
  }
  [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal.GetCoordinates();
  Audio.PoliceRadioMessage($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
  TIMERB = 0;
  Hud.DisplayTimer($.cop_time_limit);
  while (!(Char.IsDead($.criminal))) {
    if ($.cop_time_limit < 1) {
      if (!($.player.LocateAnyMeansChar2D($.criminal, 100.0, 100.0, 0))) {
        $.criminal_blip.Remove();
        $.criminal.Delete();
        $.criminal_created_flag = 0;
        Text.PrintNow(C_ESCP, 3000, 1);
      }
      else {
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
      if (!($.criminal.IsHealthGreater(70))) {
        $.criminal.SetObjStealAnyCar();
      }
    }
    if ($.criminal.IsInAnyCar() && $.got_car_crim_is_in == 0) {
      $.criminal_car.MarkAsNoLongerNeeded();
      $.criminal_car = $.criminal.StoreCarIsIn();
      $.criminal_car.SetUpsidedownNotDamaged(1 /* TRUE */);
      $.criminal_car.SetDrivingStyle(2);
      $.criminal_car.SetCruiseSpeed(42.0);
      $.criminal_car.WanderRandomly();
      $.criminal_car.SetAvoidLevelTransitions(1 /* TRUE */);
      $.got_car_crim_is_in = 1;
    }
    if ($.got_car_crim_is_in == 1) {
      if (!($.criminal.IsInAnyCar())) {
        $.range_int = Math.RandomIntInRange(0, 5);
        if ($.range_int == 0) {
          $.criminal.SetObjFleePlayerOnFootTillSafe($.player);
        }
        if ($.range_int == 1) {
          if ($.player.LocateAnyMeansChar2D($.criminal, 150.0, 150.0, 0)) {
            $.criminal.SetObjStealAnyCar();
          }
          else {
            if (Streaming.HasModelLoaded(car`SENTINEL`)) {
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal.GetCoordinates();
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              $.criminal_car.MarkAsNoLongerNeeded();
              $.criminal_car = Car.Create(88 /* CAR_SENTINEL */, $.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              $.criminal_car.SetHeading($.warp_heading_cop);
              $.criminal.SetObjEnterCarAsDriver($.criminal_car);
            }
            else {
              $.criminal.SetObjStealAnyCar();
            }
          }
        }
        if ($.range_int == 2) {
          $.criminal.SetObjKillPlayerAnyMeans($.player);
        }
        if ($.range_int == 3) {
          if ($.player.IsInAnyCar()) {
            $.players_cop_car = $.player.StoreCarIsIn();
            $.criminal.SetObjDestroyCar($.players_cop_car);
          }
          else {
            $.criminal.SetObjKillPlayerAnyMeans($.player);
          }
        }
        if ($.range_int == 4) {
          $.range_int = Math.RandomIntInRange(0, 8);
          $.criminal.WanderDir(-1);
        }
        $.got_car_crim_is_in = 0;
      }
    }
    if ($.got_car_crim_is_in == 1) {
      if (!(Car.IsDead($.criminal_car))) {
        if (TIMERB > 1000) {
          TIMERB = 0;
          if ($.player.LocateAnyMeansChar2D($.criminal, 20.0, 20.0, 0)) {
            $.criminal_car.SetCruiseSpeed(46.0);
          }
          else {
            if ($.player.LocateAnyMeansChar2D($.criminal, 50.0, 50.0, 0)) {
              $.criminal_car.SetCruiseSpeed(39.0);
            }
            else {
              if ($.player.LocateAnyMeansChar2D($.criminal, 90.0, 90.0, 0)) {
                $.criminal_car.SetCruiseSpeed(32.0);
              }
              else {
                if ($.player.LocateAnyMeansChar2D($.criminal, 130.0, 130.0, 0)) {
                  $.criminal_car.SetCruiseSpeed(26.0);
                }
                else {
                  $.criminal_car.SetCruiseSpeed(18.0);
                }
              }
            }
          }
        }
        if ($.criminal_car.IsStopped()) {
          if ($.timer_reset_flag == 0) {
            TIMERA = 0;
            $.timer_reset_flag = 1;
          }
          if (TIMERA > 8000 && $.timer_reset_flag == 1) {
            if ($.player.LocateAnyMeansChar2D($.criminal, 90.0, 90.0, 0)) {
              $.criminal.SetObjLeaveCar($.criminal_car);
              $.timer_reset_flag = 0;
            }
            else {
              if (!($.criminal_car.IsOnScreen())) {
                [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal_car.GetCoordinates();
                [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                if (!(Camera.IsPointOnScreen($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, 4.0))) {
                  $.criminal_car.SetCoordinates($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                  $.criminal_car.SetHeading($.warp_heading_cop);
                  $.timer_reset_flag = 0;
                }
              }
            }
          }
        }
        if ($.criminal_car.IsUpsidedown() && $.criminal_car.IsStopped()) {
          if ($.player.LocateAnyMeansChar2D($.criminal, 90.0, 90.0, 0)) {
            $.criminal.SetObjLeaveCar($.criminal_car);
            $.criminal_car.SetUpsidedownNotDamaged(0 /* FALSE */);
          }
          else {
            if (!($.criminal_car.IsOnScreen())) {
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z] = $.criminal_car.GetCoordinates();
              [$.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, $.warp_heading_cop] = Path.GetClosestCarNodeWithHeading($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
              if (!(Camera.IsPointOnScreen($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z, 4.0))) {
                $.criminal_car.SetCoordinates($.criminal_coord_x, $.criminal_coord_y, $.criminal_coord_z);
                $.criminal_car.SetHeading($.warp_heading_cop);
              }
            }
          }
        }
        if (!($.criminal_car.IsHealthGreater(250))) {
          $.criminal.SetObjLeaveCar($.criminal_car);
        }
      }
    }
    await asyncWait(0);
  }
  }
  $.criminal.MarkAsNoLongerNeeded();
  $.criminal_car.MarkAsNoLongerNeeded();
  ++$.total_criminals_killed;
  Stat.RegisterCriminalCaught();
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  if ($.total_criminals_killed == 1) {
    Hud.DisplayCounterWithString($.total_criminals_killed, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  }
  $.criminal_blip.Remove();
  $.vigilante_score = $.total_criminals_killed * 500;
  Text.PrintBig(C_PASS, 5000, 5);
  Text.PrintWithNumberBig(REWARD, $.vigilante_score, 5000, 6);
  $.player.AddScore($.vigilante_score);
  if ($.total_criminals_killed == $.vigilante_bonus_kills) {
    $.vigilante = $.total_criminals_killed * 2;
    $.vigilante *= 500;
    Text.PrintBigQ(C_VIGIL, 5000, 5);
    Text.PrintWithNumberBigQ(REWARD, $.vigilante, 6000, 6);
    $.player.AddScore($.vigilante);
    if ($.vigilante_bonus_kills == 10) {
      $.player.SetGetOutOfJailFree(1 /* TRUE */);
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
  if ($.play_pager_message1 == 0) {
    if ($.ind_copcar_kills == 10) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message1 = 1;
    }
  }
  if ($.play_pager_message1 == 1) {
    if ($.ind_copcar_kills == 20) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message1 = 2;
    }
  }
  if ($.play_pager_message2 == 0) {
    if ($.com_copcar_kills == 10) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message2 = 1;
    }
  }
  if ($.play_pager_message2 == 1) {
    if ($.com_copcar_kills == 20) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message2 = 2;
    }
  }
  if ($.play_pager_message3 == 0) {
    if ($.sub_copcar_kills == 10) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message3 = 1;
    }
  }
  if ($.play_pager_message3 == 1) {
    if ($.sub_copcar_kills == 20) {
      Pager.AddMessage(PAGEB12, 140, 100, 1);
      Stat.PlayerMadeProgress(1);
      $.play_pager_message3 = 2;
    }
  }
  while (!($.player.IsInModel(109 /* CAR_POLICE */)) && !($.player.IsInModel(110 /* CAR_ENFORCER */)) && !($.player.IsInModel(115 /* CAR_RHINO */)) && !($.player.IsInModel(100 /* CAR_FBI */))) {
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
    Text.PrintWithNumberNow(COPCART, $.timer_in_secs, 200, 1);
    if ($.timer_in_secs < 1) {
      Text.PrintNow(C_TIME, 3000, 1);
      // SCM GOTO → cop_car_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO cop_car_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  if ($.player.IsInAnyCar()) {
    $.players_cop_car = $.player.StoreCarIsIn();
    $.players_cop_car_health = $.players_cop_car.GetHealth();
    $.players_cop_car_health += 100;
    $.players_cop_car.SetHealth($.players_cop_car_health);
  }
  // SCM GOTO → cop_car_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO cop_car_passed"); // fallback: would break linear control flow
}

async function cop_car_passed() {
  Hud.ClearTimer($.cop_time_limit);
  $.criminal_blip.Remove();
  if ($.criminal_created_flag == 1) {
    $.criminal.MarkAsNoLongerNeeded();
    $.criminal_created_flag = 0;
  }
  // SCM GOTO → next_cop_car (not lowered; manual jump required)
  throw new Error("unresolved GOTO next_cop_car"); // fallback: would break linear control flow
}

async function cop_car_failed() {
  Text.PrintBig(C_FAIL, 5000, 5);
  Text.PrintWithNumberBig(C_KILLS, $.total_criminals_killed, 6000, 6);
  Hud.ClearTimer($.cop_time_limit);
  Hud.ClearCounter($.total_criminals_killed);
  $.criminal_blip.Remove();
  Text.ClearHelp();
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`model`);
  if ($.criminal_created_flag == 1) {
    $.criminal.MarkAsNoLongerNeeded();
    $.criminal_created_flag = 0;
  }
  $.flag_player_on_mission = 0;
  $.flag_player_on_cop_mission = 0;
  Mission.Finish();
  return;
}

async function copcar_cancelled_checks() {
  if (!($.player.IsInModel(109 /* CAR_POLICE */)) && !($.player.IsInModel(110 /* CAR_ENFORCER */)) && !($.player.IsInModel(115 /* CAR_RHINO */)) && !($.player.IsInModel(100 /* CAR_FBI */))) {
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
    Text.PrintWithNumberNow(COPCART, $.timer_in_secs, 200, 1);
    if ($.timer_in_secs < 1) {
      Text.PrintNow(C_TIME, 3000, 1);
      $.copcar_cancelled_flag = 1;
      return;
    }
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.player.IsInModel(109 /* CAR_POLICE */) || $.player.IsInModel(110 /* CAR_ENFORCER */) || $.player.IsInModel(115 /* CAR_RHINO */) || $.player.IsInModel(100 /* CAR_FBI */)) {
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
  if ($.mission_end_button == 1) {
    if (!($.controlmode == 3)) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */))) {
        Text.PrintNow(C_CANC, 3000, 1);
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
    else {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */))) {
        Text.PrintNow(C_CANC, 3000, 1);
        $.copcar_cancelled_flag = 1;
        return;
      }
    }
  }
  return;
}

export async function copcar() {
  // MissionBoundary
  // SCM GOSUB mission_start_cop_car
  await mission_start_cop_car();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB cop_car_failed
  await cop_car_failed();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT got_range_message player_in_range car_model criminal_car range_int mission_end_button total_criminals_killed players_cop_car_health
  // VAR_INT criminal_created_flag criminal criminal_blip random_gun cop_time_limit got_car_crim_is_in timer_reset_flag vigilante_bonus_kills location got_cop_breif
  // VAR_INT game_time_flag game_timer_start copcar_timer game_time_present game_time_difference timer_in_secs players_cop_car vigilante vigilante_score copcar_cancelled_flag
  // VAR_FLOAT player_c_x player_c_y player_c_z random_crim_x random_crim_y criminal_coord_x criminal_coord_y criminal_coord_z
  // VAR_FLOAT diff_x_float diff_y_float sum_of_diff_xy players_distance_from_criminal cop_time_limit_float criminal_heading warp_heading_cop
}
