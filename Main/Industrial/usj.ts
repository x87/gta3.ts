// Generated from Main/Industrial/usj.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_usj() {
  // SCM GOTO → mission_start_usj lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (!($.player.isPlaying())) {
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    if (!($.player.isInAnyCar())) {
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    $.players_car_usj = $.player.storeCarIsInNoSave();
    if ($.players_car_usj.isBoat()) {
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    $.car_speed_usj = $.players_car_usj.getSpeed();
    if (!($.car_speed_usj > 25.0)) {
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    if (!($.players_car_usj.isInAirProper())) {
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      if ($.player.isInZone("ROADBR1")) {
        if ($.player.locateInCar2D(940.4, -933.7, 4.0, 4.0, false)) {
          $.usj_number = 1;
          $.camera_x = 998.0;
          $.camera_y = -938.5;
          $.camera_z = 19.3;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar3D(793.17, -929.963, 42.166, 4.0, 2.0, 3.0, false)) {
          $.usj_number = 11;
          $.camera_x = 841.8475;
          $.camera_y = -930.1524;
          $.camera_z = 34.3645;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("PORT_S")) {
        if ($.player.locateInCar2D(1168.983, -1156.913, 10.0, 7.0, false)) {
          $.usj_number = 2;
          $.camera_x = 1217.2;
          $.camera_y = -1162.4;
          $.camera_z = 15.0;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(1231.858, -1129.855, 4.0, 2.5, false)) {
          $.usj_number = 5;
          $.camera_x = 1201.384;
          $.camera_y = -1135.662;
          $.camera_z = 19.64;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("CHINA")) {
        if ($.player.locateInCar2D(789.697, -572.312, 2.7, 5.0, false)) {
          $.usj_number = 3;
          $.camera_x = 779.957;
          $.camera_y = -561.1698;
          $.camera_z = 25.1615;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar3D(991.727, -470.397, 19.785, 2.0, 4.0, 3.0, false)) {
          $.usj_number = 10;
          $.camera_x = 987.5289;
          $.camera_y = -462.6134;
          $.camera_z = 21.8678;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("PORT_I")) {
        if ($.player.locateInCar2D(1136.621, -976.864, 4.0, 2.5, false)) {
          $.usj_number = 6;
          $.camera_x = 1107.076;
          $.camera_y = -964.015;
          $.camera_z = 22.981;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("PORT_E")) {
        if ($.player.locateInCar2D(1375.758, -952.149, 5.0, 5.0, false)) {
          $.usj_number = 7;
          $.camera_x = 1369.274;
          $.camera_y = -981.598;
          $.camera_z = 18.734;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.player.isInZone("COM_EAS")) {
        if ($.player.locateInCar3D(470.728, -918.38, 19.828, 6.0, 3.0, 3.0, false)) {
          $.usj_number = 4;
          $.camera_x = 460.954;
          $.camera_y = -947.844;
          $.camera_z = 17.934;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(271.152, -607.027, 4.0, 5.0, false)) {
          $.usj_number = 13;
          $.camera_x = 281.8645;
          $.camera_y = -626.5409;
          $.camera_z = 26.9559;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(320.223, -896.357, 6.0, 5.0, false)) {
          $.usj_number = 14;
          $.camera_x = 332.8589;
          $.camera_y = -906.3721;
          $.camera_z = 39.7656;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("PARK")) {
        if ($.player.locateInCar3D(157.584, -998.192, 30.39, 2.5, 2.8, 2.0, false)) {
          $.usj_number = 12;
          $.camera_x = 141.5205;
          $.camera_y = -1006.8531;
          $.camera_z = 26.177;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.player.isInZone("SUB_IND")) {
        if ($.player.locateInCar3D(-1182.442, 22.213, 74.03, 3.0, 4.0, 3.0, false)) {
          $.usj_number = 8;
          $.camera_x = -1204.47;
          $.camera_y = -14.721;
          $.camera_z = 62.1738;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("BIG_DAM")) {
        if ($.player.locateInCar3D(-1160.622, 105.944, 73.531, 4.0, 3.5, 3.0, false)) {
          $.usj_number = 9;
          $.camera_x = -1137.7355;
          $.camera_y = 115.1705;
          $.camera_z = 64.4229;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(-994.754, 253.616, 10.0, 15.0, false)) {
          $.usj_number = 15;
          $.camera_x = -1014.4852;
          $.camera_y = 268.1786;
          $.camera_z = 38.8862;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("PROJECT")) {
        if ($.player.locateInCar2D(-699.058, -172.26, 6.0, 7.0, false)) {
          $.usj_number = 16;
          $.camera_x = -738.03;
          $.camera_y = -132.5792;
          $.camera_z = 12.501;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      if ($.player.isInZone("AIRPORT")) {
        if ($.player.locateInCar2D(-1100.542, -847.44, 4.0, 12.0, false)) {
          $.usj_number = 17;
          $.camera_x = -1068.0343;
          $.camera_y = -863.0062;
          $.camera_z = 18.4249;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(-1375.772, -848.662, 4.0, 12.0, false)) {
          $.usj_number = 18;
          $.camera_x = -1337.7358;
          $.camera_y = -862.9677;
          $.camera_z = 18.0594;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(-1379.849, -625.095, 12.0, 4.0, false)) {
          $.usj_number = 19;
          $.camera_x = -1397.5281;
          $.camera_y = -572.0431;
          $.camera_z = 18.8811;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
        if ($.player.locateInCar2D(-1177.38, -569.913, 3.3, 2.0, false)) {
          $.usj_number = 20;
          $.camera_x = -1195.1605;
          $.camera_y = -560.7097;
          $.camera_z = 18.9029;
          // SCM GOTO → the_jump (not lowered; manual jump required)
          throw new Error("unresolved GOTO the_jump"); // fallback: would break linear control flow
        }
      }
      // SCM GOTO → mission_start_usj (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
    }
  }
}

async function the_jump() {
  $.flag_1st_locate_usj = 0;
  $.flag_2nd_locate_usj = 0;
  $.collision_counter_usj = 0;
  Clock.SetTimeScale(0.3);
  Camera.SetFixedPosition($.camera_x, $.camera_y, $.camera_z, 0.0, 0.0, 0.0);
  Camera.PointAtCar($.players_car_usj, 15 /* FIXED */, 2 /* JUMP_CUT */);
  while ($.players_car_usj.isInAirProper() || $.collision_counter_usj < 10) {
    ++$.collision_counter_usj;
    await asyncWait(0);
    if (Car.IsDead($.players_car_usj)) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if ($.players_car_usj.isInWater()) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isPlaying())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isInAnyCar())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if ($.usj_number == 1) {
      if ($.player.locateInCar3D(946.5, -934.1, 26.8, 1.0, 4.0, 6.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(993.5, -933.8, 21.8, 1.0, 4.0, 6.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 2) {
      if ($.player.locateInCar3D(1190.0, -1154.0, 25.0, 1.0, 10.0, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(1243.6, -1154.0, 13.5, 20.0, 15.0, 3.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 3) {
      if ($.player.locateInCar3D(789.316, -563.296, 29.202, 10.0, 0.5, 5.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(789.316, -558.888, 29.202, 10.0, 0.5, 5.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 4) {
      if ($.player.locateInCar3D(470.728, -931.7, 24.828, 9.0, 0.5, 8.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(470.532, -962.841, 16.589, 6.5, 14.5, 2.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 5) {
      if ($.player.locateInCar3D(1205.573, -1124.826, 25.819, 1.0, 15.0, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(1182.763, -1124.826, 25.819, 1.0, 15.0, 10.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 6) {
      if ($.player.locateInCar3D(1127.485, -978.877, 29.145, 1.0, 15.0, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
      }
      if ($.player.locateInCar3D(1104.808, -978.877, 29.145, 1.0, 15.0, 10.0, false)) {
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 7) {
      if ($.player.locateInCar3D(1376.953, -984.634, 23.53, 8.0, 0.5, 7.5, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 8) {
      if ($.player.locateInCar3D(-1197.722, -41.855, 63.732, 30.0, 5.5, 8.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 9) {
      if ($.player.locateInCar3D(-1095.672, 116.771, 60.304, 16.5, 4.0, 2.5, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 10) {
      if ($.player.locateInCar3D(995.212, -440.228, 26.456, 4.3, 0.5, 5.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 11) {
      if ($.player.locateInCar3D(879.708, -933.811, 26.845, 30.0, 5.5, 0.5, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 12) {
      if ($.player.locateInCar3D(130.308, -999.861, 32.406, 0.5, 6.0, 7.5, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 13) {
      if ($.player.locateInCar2D(271.836, -656.396, 5.0, 5.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 14) {
      if ($.player.locateInCar2D(308.231, -942.208, 23.0, 5.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 15) {
      if ($.player.locateInCar2D(-1073.749, 246.756, 38.0, 22.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 16) {
      if ($.player.locateInCar2D(-706.363, -91.074, 18.0, 30.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 17) {
      if ($.player.locateInCar3D(-1067.966, -847.738, 27.527, 0.5, 14.5, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 18) {
      if ($.player.locateInCar3D(-1342.627, -847.864, 26.928, 0.5, 14.5, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 19) {
      if ($.player.locateInCar3D(-1380.287, -573.483, 22.686, 14.3, 0.5, 10.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.usj_number == 20) {
      if ($.player.locateInCar3D(-1184.052, -569.913, 24.278, 0.5, 6.0, 8.0, false)) {
        $.flag_1st_locate_usj = 1;
        $.flag_2nd_locate_usj = 1;
      }
    }
    if ($.flag_1st_locate_usj == 1 && $.flag_2nd_locate_usj == 1) {
      // SCM GOTO → mission_usj_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_usj_passed"); // fallback: would break linear control flow
    }
  }
  while ($.players_car_usj.isInAirProper()) {
    await asyncWait(0);
    if (Car.IsDead($.players_car_usj)) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if ($.players_car_usj.isInWater()) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isPlaying())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isInAnyCar())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
  }
  await asyncWait(600);
}

async function camera_restore_if_fail() {
  Clock.SetTimeScale(1.0);
  Camera.RestoreJumpcut();
  // SCM GOTO → mission_start_usj (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
  // mission usj1 passed
}

async function mission_usj_passed() {
  while ($.players_car_usj.isInAirProper()) {
    await asyncWait(0);
    if (Car.IsDead($.players_car_usj)) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if ($.players_car_usj.isInWater()) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isPlaying())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
    if (!($.player.isInAnyCar())) {
      // SCM GOTO → camera_restore_if_fail (not lowered; manual jump required)
      throw new Error("unresolved GOTO camera_restore_if_fail"); // fallback: would break linear control flow
    }
  }
  await asyncWait(600);
}

async function camera_restore_if_passed() {
  Clock.SetTimeScale(1.0);
  Camera.RestoreJumpcut();
  if ($.usj_number == 1 && $.flag_usj1_passed == 0) {
    $.flag_usj1_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 2 && $.flag_usj2_passed == 0) {
    $.flag_usj2_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 3 && $.flag_usj3_passed == 0) {
    $.flag_usj3_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 4 && $.flag_usj4_passed == 0) {
    $.flag_usj4_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 5 && $.flag_usj5_passed == 0) {
    $.flag_usj5_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 6 && $.flag_usj6_passed == 0) {
    $.flag_usj6_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 7 && $.flag_usj7_passed == 0) {
    $.flag_usj7_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 8 && $.flag_usj8_passed == 0) {
    $.flag_usj8_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 9 && $.flag_usj9_passed == 0) {
    $.flag_usj9_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 10 && $.flag_usj10_passed == 0) {
    $.flag_usj10_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 11 && $.flag_usj11_passed == 0) {
    $.flag_usj11_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 12 && $.flag_usj12_passed == 0) {
    $.flag_usj12_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 13 && $.flag_usj13_passed == 0) {
    $.flag_usj13_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 14 && $.flag_usj14_passed == 0) {
    $.flag_usj14_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 15 && $.flag_usj15_passed == 0) {
    $.flag_usj15_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 16 && $.flag_usj16_passed == 0) {
    $.flag_usj16_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 17 && $.flag_usj17_passed == 0) {
    $.flag_usj17_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 18 && $.flag_usj18_passed == 0) {
    $.flag_usj18_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 19 && $.flag_usj19_passed == 0) {
    $.flag_usj19_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  if ($.usj_number == 20 && $.flag_usj20_passed == 0) {
    $.flag_usj20_passed = 1;
    ++$.total_completed_usj;
    Stat.PlayerMadeProgress(1);
    // SCM GOTO → reward_usj (not lowered; manual jump required)
    throw new Error("unresolved GOTO reward_usj"); // fallback: would break linear control flow
  }
  // SCM GOTO → mission_start_usj (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
}

async function reward_usj() {
  if ($.total_completed_usj < 20) {
    Text.PrintBigQ(USJ, 5000, 5); //UNIQUE STUNT BONUS!
    Text.PrintWithNumberBig(REWARD, $.cash_reward_usj, 6000, 6);
    $.player.addScore($.cash_reward_usj);
  }
  else {
    Text.PrintBigQ(USJ_ALL, 5000, 5); //ALL UNIQUE STUNTS COMPLETED!
    Text.PrintWithNumberBig(REWARD, 1000000, 6000, 6);
    $.player.addScore(1000000);
  }
  Sound.AddOneOffSound(0.0, 0.0, 0.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
  Stat.RegisterUniqueJumpFound();
  $.cash_reward_usj += 5000;
  // SCM GOTO → mission_start_usj (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_start_usj"); // fallback: would break linear control flow
  // MissionBoundary
}

export async function usj() {
  // MissionBoundary
  // *****************************************************************************************
  // ********************************** Unique Stunt Jumps ***********************************
  // Variables for mission
  // VAR_INT players_car_usj cash_reward_usj total_completed_usj
  // VAR_INT flag_1st_locate_usj flag_2nd_locate_usj usj_number collision_counter_usj
  // VAR_INT flag_usj1_passed flag_usj2_passed flag_usj3_passed flag_usj4_passed flag_usj5_passed flag_usj6_passed flag_usj7_passed
  // VAR_INT flag_usj8_passed flag_usj9_passed flag_usj10_passed flag_usj11_passed flag_usj12_passed flag_usj13_passed flag_usj14_passed
  // VAR_INT flag_usj15_passed flag_usj16_passed flag_usj17_passed flag_usj18_passed flag_usj19_passed flag_usj20_passed
  // VAR_FLOAT car_speed_usj camera_x camera_y camera_z
  // ****************************************Mission Start************************************
  $.flag_usj1_passed = 0;
  $.flag_usj2_passed = 0;
  $.flag_usj3_passed = 0;
  $.flag_usj4_passed = 0;
  $.flag_usj5_passed = 0;
  $.flag_usj6_passed = 0;
  $.flag_usj7_passed = 0;
  $.flag_usj8_passed = 0;
  $.flag_usj9_passed = 0;
  $.flag_usj10_passed = 0;
  $.flag_usj11_passed = 0;
  $.flag_usj12_passed = 0;
  $.flag_usj13_passed = 0;
  $.flag_usj14_passed = 0;
  $.flag_usj15_passed = 0;
  $.flag_usj16_passed = 0;
  $.flag_usj17_passed = 0;
  $.flag_usj18_passed = 0;
  $.flag_usj19_passed = 0;
  $.flag_usj20_passed = 0;
  $.cash_reward_usj = 5000;
  $.usj_number = 0;
  $.total_completed_usj = 0;
  // SET_DEATHARREST_STATE(false /* OFF */);
  Stat.SetUniqueJumpsTotal(20);
  // ScriptName
}
