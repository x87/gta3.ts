// Generated from Main/Commercial/4x4_2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_4x4two() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  Text.PrintBig("T4X4_2", 15000, 2);
  await asyncWait(0);
  $.counter_4x4_pickups = 0;
  $.timer_4x4 = 0;
  $.flag_intro = 0;
  $.flag_4x4two_trigger = 1;
  $.flag_timer = 0;
  $.flag_intro_jump = 0;
  $.flag_blip_1 = 0;
  $.flag_blip_2 = 0;
  $.flag_blip_3 = 0;
  $.flag_blip_4 = 0;
  $.flag_blip_5 = 0;
  $.flag_blip_6 = 0;
  $.flag_blip_7 = 0;
  $.flag_blip_8 = 0;
  $.flag_blip_9 = 0;
  $.flag_blip_10 = 0;
  $.flag_blip_11 = 0;
  $.flag_blip_12 = 0;
  $.record_temp = 0;
  $.x_1 = 6.52;
  $.y_1 = -701.37;
  $.z_1 = 29.0;
  $.x_2 = 6.53;
  $.y_2 = -745.1;
  $.z_2 = 29.0;
  $.x_3 = 51.87;
  $.y_3 = -605.19;
  $.z_3 = 25.94;
  $.x_4 = 52.85;
  $.y_4 = -639.2;
  $.z_4 = 28.55;
  $.x_5 = 53.89;
  $.y_5 = -885.37;
  $.z_5 = 31.95;
  $.x_6 = 81.66;
  $.y_6 = -779.26;
  $.z_6 = 26.65;
  $.x_7 = 64.26;
  $.y_7 = -777.5;
  $.z_7 = 25.74;
  $.x_8 = 90.30;
  $.y_8 = -732.48;
  $.z_8 = 31.23;
  $.x_9 = 83.48;
  $.y_9 = -724.55;
  $.z_9 = 31.6;
  $.x_10 = 39.61;
  $.y_10 = -724.42;
  $.z_10 = 22.77;
  $.x_11 = 11.63;
  $.y_11 = -743.12;
  $.z_11 = 28.54;
  $.x_12 = 68.55;
  $.y_12 = -773.13;
  $.z_12 = 22.92;
  $.wanted_4x4 = $.player.StoreWantedLevel();
  $.player.ClearWantedLevel();
  $.player_4x4 = $.player.StoreCarIsIn();
  if (!(Car.IsDead($.player_4x4))) {
    $.player_4x4.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  $.player.SetControl(0 /* off */);
  Hud.SwitchWidescreen(1 /* on */);
  $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);
  $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2);
  $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3);
  $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4);
  $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5);
  $.blip_6 = Blip.AddForCoord($.x_6, $.y_6, $.z_6);
  $.blip_7 = Blip.AddForCoord($.x_7, $.y_7, $.z_7);
  $.blip_8 = Blip.AddForCoord($.x_8, $.y_8, $.z_8);
  $.blip_9 = Blip.AddForCoord($.x_9, $.y_9, $.z_9);
  $.blip_10 = Blip.AddForCoord($.x_10, $.y_10, $.z_10);
  $.blip_11 = Blip.AddForCoord($.x_11, $.y_11, $.z_11);
  $.blip_12 = Blip.AddForCoord($.x_12, $.y_12, $.z_12);
  while ($.counter_4x4_pickups < 12) {
    await asyncWait(0);
    if ($.counter_4x4_pickups == 1 && $.flag_timer == 0) {
      Hud.DisplayTimer($.timer_4x4);
      $.flag_timer = 1;
    }
    if ($.flag_blip_1 == 0) {
      Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_1, $.y_1, $.z_1, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_1.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_1 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_2 == 0) {
      Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_2, $.y_2, $.z_2, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_2.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_2 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_3 == 0) {
      Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_3, $.y_3, $.z_3, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_3.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_3 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_4 == 0) {
      Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_4, $.y_4, $.z_4, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_4.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_4 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_5 == 0) {
      Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_5, $.y_5, $.z_5, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_5.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_5, $.y_5, $.z_5, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_5 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_6 == 0) {
      Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_6, $.y_6, $.z_6, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_6.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_6 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_7 == 0) {
      Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_7, $.y_7, $.z_7, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_7.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_7 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_8 == 0) {
      Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_8, $.y_8, $.z_8, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_8.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_8 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_9 == 0) {
      Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_9, $.y_9, $.z_9, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_9.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_9 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_10 == 0) {
      Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_10, $.y_10, $.z_10, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_10.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_10 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_11 == 0) {
      Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_11, $.y_11, $.z_11, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_11.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_11 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_blip_12 == 0) {
      Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
      if ($.player.LocateInCar3D($.x_12, $.y_12, $.z_12, 2.5, 2.5, 3.5, 0 /* false */)) {
        $.blip_12.Remove();
        ++$.counter_4x4_pickups;
        Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 94 /* SOUND_PART_MISSION_COMPLETE */);
        $.timer_4x4 = $.timer_4x4 + 10000;
        $.flag_blip_12 = 1;
        Text.PrintWithNumberNow("T4X4_2B", $.counter_4x4_pickups, 3000, 1);
      }
    }
    if ($.flag_intro2_before == 1) {
      if ($.flag_intro_jump == 0 && $.flag_intro < 5) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          $.intro_time_lapsed = 10501;
          $.flag_intro = 4;
          $.flag_intro_jump = 1;
        }
      }
    }
    if ($.flag_intro == 0) {
      $.timer_intro_start = Clock.GetGameTimer();
      Camera.SetFixedPosition(50.48, -727.5, 27.0, 0.0, 0.0, 0.0);
      Audio.SetMusicDoesFade(0 /* FALSE */);
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Streaming.LoadScene(50.48, -727.5, 27.0);
      Camera.PointAtPoint($.x_8, $.y_8, $.z_8, 2 /* JUMP_CUT */);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.PrintNow("T4X4_2A", 5000, 1);
      $.flag_intro = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.timer_intro_now = Clock.GetGameTimer();
      $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
    }
    if ($.intro_time_lapsed > 3500 && $.flag_intro == 1) {
      Camera.PointAtPoint($.x_9, $.y_9, $.z_9, 1 /* INTERPOLATION */);
      $.flag_intro = 2;
    }
    if ($.intro_time_lapsed > 6500 && $.flag_intro == 2) {
      Text.PrintNow("T4X4_2C", 5500, 1);
      $.flag_intro = 3;
    }
    if ($.intro_time_lapsed > 7000 && $.flag_intro == 3) {
      Camera.PointAtPoint($.x_10, $.y_10, $.z_10, 1 /* INTERPOLATION */);
      $.flag_intro = 4;
    }
    if ($.intro_time_lapsed > 10500 && $.flag_intro == 4) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Text.ClearPrints();
      Streaming.LoadScene(50.0, -930.0, 20.0);
      Camera.RestoreJumpcut();
      Hud.SwitchWidescreen(0 /* off */);
      $.player.SetControl(1 /* on */);
      if (!(Car.IsDead($.player_4x4))) {
        $.player_4x4.LockDoors(1 /* CARLOCK_UNLOCKED */);
      }
      $.player.AlterWantedLevel($.wanted_4x4);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      Audio.SetMusicDoesFade(1 /* TRUE */);
      $.flag_intro = 5;
      $.flag_intro2_before = 1;
    }
    if ($.flag_timer == 1) {
      if ($.timer_4x4 < 1) {
        Text.PrintNow("taxi2", 3000, 1);
        // SCM GOTO → mission_4x4two_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_4x4two_failed"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInModel(83 /* CAR_LANDSTALKER */))) {
      Text.PrintNow("T4x4_F", 3000, 1);
      // SCM GOTO → mission_4x4two_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_4x4two_failed"); // fallback: would break linear control flow
    }
  }
  if ($.counter_4x4_pickups == 12) {
    // SCM GOTO → mission_4x4two_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_4x4two_passed"); // fallback: would break linear control flow
  }
}

async function mission_4x4two_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_4x4two_passed() {
  if ($.flag_4x4_mission2_passed == 0) {
    $.record_4x4_two = 120000 - $.timer_4x4;
    $.record_4x4_two = $.record_4x4_two / 1000;
  }
  if ($.flag_4x4_mission2_passed == 1) {
    $.record_temp = 120000 - $.timer_4x4;
    $.record_temp = $.record_temp / 1000;
    if ($.record_temp < $.record_4x4_two) {
      $.record_4x4_two = $.record_temp;
    }
  }
  Text.PrintWithNumberBig("M_PASS", 30000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(30000);
  Stat.Register4X4TwoTime($.record_4x4_two);
  if ($.flag_4x4_mission2_passed == 0) {
    Stat.RegisterMissionPassed(T4X4_2);
    $.flag_4x4_mission2_passed = 1;
    Stat.PlayerMadeProgress(1);
  }
  return;
}

async function mission_cleanup_4x4two() {
  Hud.ClearTimer($.timer_4x4);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.player.SetControl(1 /* on */);
  $.blip_1.Remove();
  $.blip_2.Remove();
  $.blip_3.Remove();
  $.blip_4.Remove();
  $.blip_5.Remove();
  $.blip_6.Remove();
  $.blip_7.Remove();
  $.blip_8.Remove();
  $.blip_9.Remove();
  $.blip_10.Remove();
  $.blip_11.Remove();
  $.blip_12.Remove();
  $.flag_player_on_mission = 0;
  Mission.Finish();
  return;
}

export async function _4x4_2() {
  // MissionBoundary
  // SCM GOSUB mission_start_4x4two
  await mission_start_4x4two();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_4x4two_failed
    await mission_4x4two_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_4x4two
  await mission_cleanup_4x4two();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
}
