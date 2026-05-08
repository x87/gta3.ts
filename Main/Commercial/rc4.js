// Generated from Main/Commercial/rc4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_rc4() {
  $.flag_player_on_mission = 1;
  if ($.flag_rc4_passed == 0) {
    Stat.RegisterMissionGiven();
  }
  Text.PrintBig("RC3", 15000, 2);
  await asyncWait(0);
  $.counter_RCDD = 0;
  $.flag_buggy_help1_hm2 = 0;
  $.controlmode = 0;
  $.reward_RCDD = 0;
  $.cam_x = 370.0;
  $.cam_y = -1316.0;
  $.cam_z = 29.0;
  $.rc_x = 373.0;
  $.rc_y = -1317.0;
  $.rc_z = 26.5;
  $.timer_RCDD = 120000;
  Player.ResetNumOfModelsKilled();
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* off */);
  $.wanted_4x4 = $.player.StoreWantedLevel();
  $.player.ClearWantedLevel();
  $.rc_van = $.player.StoreCarIsIn();
  Hud.SwitchWidescreen(1 /* on */);
  Zone.SetCarInfo("YAKUSA", 1 /* DAY */, 20, 0, 0, 0, 270, 0, 0, 0, 10, 300, 200, 200, 0, 0, 0);
  Zone.SetCarInfo("YAKUSA", 0 /* NIGHT */, 15, 0, 0, 0, 290, 0, 0, 0, 10, 300, 200, 200, 0, 0, 0);
  Camera.SetFixedPosition($.cam_x, $.cam_y, $.cam_z, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.rc_van))) {
    $.rc_van.LockDoors(2 /* CARLOCK_LOCKED */);
    Camera.PointAtCar($.rc_van, 15 /* FIXED */, 2 /* JUMP_CUT */);
    World.ClearArea($.rc_x, $.rc_y, $.rc_z, 5.0, 1 /* true */);
  }
  Text.PrintNow("RC_3", 4000, 1);
  Streaming.RequestModel(car`rcbandit`);
  while (!(Streaming.HasModelLoaded(car`rcbandit`))) {
    await asyncWait(0);
  }
  Hud.DisplayCounterWithString($.counter_RCDD, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  Hud.DisplayTimer($.timer_RCDD);
  $.timer_intro_start = Clock.GetGameTimer();
  while (!($.timer_RCDD < 1)) {
    await asyncWait(0);
    $.timer_intro_now = Clock.GetGameTimer();
    $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
    if (Car.IsDead($.rc_van)) {
      Text.PrintNow("WRECKED", 3000, 1);
      // SCM GOTO → mission_rc4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rc4_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsPlaying()) {
      $.player.ClearWantedLevel();
      if ($.intro_time_lapsed > 4000 && $.flag_buggy_help1_hm2 == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 0) {
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        if ($.controlmode == 1) {
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        if ($.controlmode == 2) {
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        if ($.controlmode == 3) {
          Text.PrintHelp("RCHELPA");
          $.flag_buggy_help1_hm2 = 1;
        }
        Hud.SwitchWidescreen(0 /* off */);
        $.player.SetControl(1 /* on */);
        Camera.Restore();
      }
      if (!($.player.IsSittingInCar($.rc_van))) {
        // SCM GOTO → mission_rc4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rc4_failed"); // fallback: would break linear control flow
      }
    }
    else {
      // SCM GOTO → mission_rc4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rc4_failed"); // fallback: would break linear control flow
    }
    $.counter_RCDD = Player.GetNumOfModelsKilled(car`yakuza`);
    if ($.intro_time_lapsed > 4000) {
      if (!($.player.IsInRemoteMode())) {
        Rc.GiveCarToPlayer($.player, $.rc_x, $.rc_y, $.rc_z, 60.0);
      }
    }
  }
  Hud.ClearTimer($.timer_RCDD);
  Hud.ClearCounter($.counter_RCDD);
  Rc.BlowUpBuggy();
  {
  TIMERA = 0;
  while (TIMERA < 1500) {
    await asyncWait(0);
  }
  }
  if ($.counter_RCDD > $.rec_rc4) {
    $.reward_RCDD = $.counter_RCDD - $.rec_rc4;
    $.reward_RCDD = $.reward_RCDD * 1000;
    $.rec_rc4 = $.counter_RCDD;
    // SCM GOTO → mission_rc4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc4_passed"); // fallback: would break linear control flow
  }
}

async function mission_rc4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  Text.PrintNow("NRECORD", 5000, 1);
  return;
}

async function mission_rc4_passed() {
  Text.PrintWithNumberBig("M_PASS", $.reward_RCDD, 5000, 1);
  Text.PrintNow("RECORD", 3000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore($.reward_RCDD);
  if ($.flag_rc4_passed == 0) {
    Stat.PlayerMadeProgress(1);
    $.flag_rc4_passed = 1;
    Stat.RegisterMissionPassed(RC3);
  }
  Stat.RegisterHighestScore(3, $.rec_rc4);
  return;
}

async function mission_cleanup_rc4() {
  $.flag_player_on_mission = 0;
  $.flag_just_done_rc_mission = 1;
  Streaming.LoadScene($.cam_x, $.cam_y, $.cam_z);
  Streaming.MarkModelAsNoLongerNeeded(car`rcbandit`);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Camera.Restore();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.AlterWantedLevel($.wanted_4x4);
  Hud.ClearTimer($.timer_RCDD);
  Hud.ClearCounter($.counter_RCDD);
  Rc.BlowUpBuggy();
  if (!(Car.IsDead($.rc_van))) {
    $.rc_van.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  Zone.SetCarInfo("YAKUSA", 1 /* DAY */, 20, 0, 0, 0, 100, 0, 0, 0, 20, 350, 200, 250, 0, 0, 0);
  Zone.SetCarInfo("YAKUSA", 0 /* NIGHT */, 15, 0, 0, 0, 150, 0, 0, 0, 10, 350, 200, 200, 0, 0, 0);
  Mission.Finish();
  return;
}

export async function rc4() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_rc4
  await mission_start_rc4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_rc4_failed
    await mission_rc4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_rc4
  await mission_cleanup_rc4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
}
