// Generated from Main/Suburban/rc3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_rc3() {
  $.flag_player_on_mission = 1;
  if ($.flag_rc3_passed == 0) {
    Stat.RegisterMissionGiven();
  }
  Text.PrintBig("RC4", 15000, 2);
  await asyncWait(0);
  $.counter_RCDD = 0;
  $.flag_buggy_help1_hm2 = 0;
  $.controlmode = 0;
  $.reward_RCDD = 0;
  $.cam_x = -646.0;
  $.cam_y = 62.0;
  $.cam_z = 19.0;
  $.rc_x = -641.0;
  $.rc_y = 60.0;
  $.rc_z = 22.0;
  $.timer_RCDD = 120000;
  Player.ResetNumOfModelsKilled();
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.player.setControl(false /* off */);
  $.wanted_4x4 = $.player.storeWantedLevel();
  $.player.clearWantedLevel();
  $.rc_van = $.player.storeCarIsIn();
  //UP GANGCAR NUMBERS AND DENSITY
  Hud.SwitchWidescreen(true /* on */);
  Zone.SetCarInfo("PROJECT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 300, 20, 400, 50, 50, 0, 0, 0);
  Zone.SetCarInfo("PROJECT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 400, 10, 400, 50, 50, 0, 0, 0);
  Camera.SetFixedPosition($.cam_x, $.cam_y, $.cam_z, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.rc_van))) {
    $.rc_van.lockDoors(2 /* CARLOCK_LOCKED */);
    Camera.PointAtCar($.rc_van, 15 /* FIXED */, 2 /* JUMP_CUT */);
    World.ClearArea($.rc_x, $.rc_y, $.rc_z, 5.0, true /* true */);
  }
  //You have 4 minutes to blow up as many Diablo Gang Cars as possible!
  Text.PrintNow("RC_5", 4000, 1);
  //REQUEST_MODEL car_hoods
  Streaming.RequestModel(car`rcbandit`);
  //OR NOT HAS_MODEL_LOADED car_hoods
  //GIVE_REMOTE_CONTROLLED_CAR_TO_PLAYER player rc_x rc_y rc_z 180.0
  while (!(Streaming.HasModelLoaded(car`rcbandit`))) {
    await asyncWait(0);
  }
  Hud.DisplayCounterWithString($.counter_RCDD, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  Hud.DisplayTimer($.timer_RCDD);
  $.timer_intro_start = Clock.GetGameTimer();
  //"The vehicle's wrecked!"
  //"Press |, or drive the RC car into a vehicle's wheels to detonate"
  //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
  while (!($.timer_RCDD < 1)) {
    await asyncWait(0);
    $.timer_intro_now = Clock.GetGameTimer();
    $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
    //"The vehicle's wrecked!"
    if (Car.IsDead($.rc_van)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 3000, 1);
      // SCM GOTO → mission_rc3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rc3_failed"); // fallback: would break linear control flow
    }
    //"Press |, or drive the RC car into a vehicle's wheels to detonate"
    //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
    if ($.player.isPlaying()) {
      $.player.clearWantedLevel();
      //"Press |, or drive the RC car into a vehicle's wheels to detonate"
      //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
      if ($.intro_time_lapsed > 4000 && $.flag_buggy_help1_hm2 == 0) {
        $.controlmode = Pad.GetControllerMode();
        //"Press |, or drive the RC car into a vehicle's wheels to detonate"
        if ($.controlmode == 0) {
          //"Press |, or drive the RC car into a vehicle's wheels to detonate"
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        //"Press |, or drive the RC car into a vehicle's wheels to detonate"
        if ($.controlmode == 1) {
          //"Press |, or drive the RC car into a vehicle's wheels to detonate"
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        //"Press |, or drive the RC car into a vehicle's wheels to detonate"
        if ($.controlmode == 2) {
          //"Press |, or drive the RC car into a vehicle's wheels to detonate"
          Text.PrintHelp("RCHELP");
          $.flag_buggy_help1_hm2 = 1;
        }
        //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
        if ($.controlmode == 3) {
          //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
          Text.PrintHelp("RCHELPA");
          $.flag_buggy_help1_hm2 = 1;
        }
        Hud.SwitchWidescreen(false /* off */);
        $.player.setControl(true /* on */);
        Camera.Restore();
      }
      if (!($.player.isSittingInCar($.rc_van))) {
        // SCM GOTO → mission_rc3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_rc3_failed"); // fallback: would break linear control flow
      }
    }
    else {
      // SCM GOTO → mission_rc3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_rc3_failed"); // fallback: would break linear control flow
    }
    $.counter_RCDD = Player.GetNumOfModelsKilled(car`hoods`);
    if ($.intro_time_lapsed > 4000) {
      if (!($.player.isInRemoteMode())) {
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
  // Mission rc3 failed
  if ($.counter_RCDD > $.rec_rc3) {
    $.reward_RCDD = $.counter_RCDD - $.rec_rc3;
    $.reward_RCDD = $.reward_RCDD * 1000;
    $.rec_rc3 = $.counter_RCDD;
    // SCM GOTO → mission_rc3_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_rc3_passed"); // fallback: would break linear control flow
  }
}

async function mission_rc3_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  Text.PrintNow("NRECORD", 5000, 1);
  // mission rc3 passed
  return;
}

async function mission_rc3_passed() {
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", $.reward_RCDD, 5000, 1);
  Text.PrintNow("RECORD", 3000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore($.reward_RCDD);
  if ($.flag_rc3_passed == 0) {
    Stat.PlayerMadeProgress(1);
    $.flag_rc3_passed = 1;
    Stat.RegisterMissionPassed(RC4);
  }
  Stat.RegisterHighestScore(4, $.rec_rc3);
  // mission cleanup
  return;
}

async function mission_cleanup_rc3() {
  $.flag_player_on_mission = 0;
  $.flag_just_done_rc_mission = 1;
  Streaming.LoadScene($.cam_x, $.cam_y, $.cam_z);
  Streaming.MarkModelAsNoLongerNeeded(car`rcbandit`);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  $.player.setControl(true /* ON */);
  Camera.Restore();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.alterWantedLevel($.wanted_4x4);
  Hud.ClearTimer($.timer_RCDD);
  Hud.ClearCounter($.counter_RCDD);
  Rc.BlowUpBuggy();
  if (!(Car.IsDead($.rc_van))) {
    $.rc_van.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  Zone.SetCarInfo("PROJECT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 100, 20, 400, 50, 50, 0, 0, 0);
  //MARK_MODEL_AS_NO_LONGER_NEEDED car_hoods
  Zone.SetCarInfo("PROJECT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 150, 10, 400, 50, 50, 0, 0, 0);
  Mission.Finish();
  return;
}

export async function rc3() {
  // *******************************************************************************************
  // **************************************RC Destruction Derby*********************************
  // ***************************************Diablo Demolition***********************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_rc3
  await mission_start_rc3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_rc3_failed
    await mission_rc3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_rc3
  await mission_cleanup_rc3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  /*
  VAR_INT counter_RCDD rc_van
  VAR_INT timer_RCDD
  VAR_INT reward_RCDD
  VAR_FLOAT cam_x cam_y cam_z
  VAR_FLOAT rc_x rc_y rc_z
  */
  // ***************************************Mission Start*************************************
  // MissionBoundary
}
