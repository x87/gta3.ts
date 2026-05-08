// Generated from Main/Suburban/hood4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.total_no_pills_carried_hm4 = 0;
  $.flag_player_in_area_hm4 = 0;
  $.timer_hm4 = 361000;
  $.flag_player_had_car_message_hm4 = 0;
  $.flag_blip_added_hm4 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph4);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_A", 10000, 1);
  while ($.cs_time < 5840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_B", 10000, 1);
  while ($.cs_time < 8171) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_C", 10000, 1);
  while ($.cs_time < 11161) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_F", 10000, 1);
  while ($.cs_time < 13963) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_G", 10000, 1);
  while ($.cs_time < 17683) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM4_H", 10000, 1);
  while ($.cs_time < 19787) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM4_H");
  while ($.cs_time < 20433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetPedDensityMultiplier(1.0);
  Text.PrintNow("HM4_D", 5000, 1);
  while (!($.player.IsInAnyCar())) {
    await asyncWait(0);
  }
  $.car_hm4 = $.player.StoreCarIsIn();
  $.garage_hm4.SetTargetCarForMission($.car_hm4);
  $.radar_blip_coord2_hm4 = Blip.AddForCoord(-1080.0, -163.2, -100.0);
  Text.PrintNow("HM4_1", 7000, 1);
  Pacman.StartScramble(-1080.0, -163.2, -100.0, 100.0, 90);
  Hud.DisplayTimer($.timer_hm4);
  Hud.DisplayCounterWithString($.total_no_pills_carried_hm4, 0 /* COUNTER_DISPLAY_NUMBER */, collect);
  while (!($.total_no_pills_carried_hm4 >= 30)) {
    await asyncWait(0);
    $.no_of_pills_carried_hm4 = Pacman.GetNumberOfPowerPillsCarried();
    if ($.player.IsInArea3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 0 /* FALSE */)) {
      $.player.ClearWantedLevel();
    }
    if ($.no_of_pills_carried_hm4 > 0) {
      if ($.flag_blip_added_hm4 == 0) {
        $.radar_blip_coord2_hm4.Remove();
        $.radar_blip_coord1_hm4 = Blip.AddForCoord(-844.9, -169.6, 32.8);
        Text.PrintNow("HM4_2", 7000, 1);
        $.flag_blip_added_hm4 = 1;
      }
    }
    if ($.player.IsInAnyCar()) {
      $.car_hm4 = $.player.StoreCarIsIn();
      $.garage_hm4.SetTargetCarForMission($.car_hm4);
      if ($.player.IsStoppedInAreaInCar3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 0 /* FALSE */) && $.flag_player_in_area_hm4 == 0) {
        $.total_no_pills_carried_hm4 += $.no_of_pills_carried_hm4;
        Sound.AddOneOffSound(-834.9, -168.8, 33.9, 83 /* SOUND_UNLOAD_GOLD */);
        Pacman.ClearNumberOfPowerPillsCarried();
        $.flag_player_in_area_hm4 = 1;
      }
      if ($.player.IsInCar($.car_hm4) && !($.player.IsStoppedInAreaInCar3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 0 /* FALSE */)) && $.flag_player_in_area_hm4 == 1) {
        $.flag_player_in_area_hm4 = 0;
      }
    }
    if (!($.player.IsInAnyCar())) {
      $.garage_hm4.SetTargetCarForMission(-1);
      if ($.flag_player_had_car_message_hm4 == 0) {
        Text.PrintNow("IN_VEH2", 5000, 1);
        if ($.flag_blip_added_hm4 == 1) {
          $.radar_blip_coord1_hm4.Remove();
        }
        $.flag_player_had_car_message_hm4 = 1;
      }
    }
    else {
      $.car_hm4 = $.player.StoreCarIsIn();
      $.garage_hm4.SetTargetCarForMission($.car_hm4);
      if ($.flag_player_had_car_message_hm4 == 1) {
        if ($.flag_blip_added_hm4 == 1) {
          $.radar_blip_coord1_hm4 = Blip.AddForCoord(-844.9, -169.6, 32.8);
        }
        $.flag_player_had_car_message_hm4 = 0;
      }
    }
    if ($.timer_hm4 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_hood4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood4_failed"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord1_hm4.Remove();
  }
  // SCM GOTO → mission_hood4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_hood4_passed"); // fallback: would break linear control flow
}

async function mission_hood4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  $.garage_hm4.SetTargetCarForMission(-1);
  if ($.player.HasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.IsDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  return;
}

async function mission_hood4_passed() {
  $.flag_hood_mission4_passed = 1;
  Stat.RegisterMissionPassed("HM_4");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 25000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(25000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT hood_mission5_loop
  return;
}

async function mission_cleanup_hood4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  $.garage_hm4.SetTargetCarForMission(-1);
  Pacman.ClearNumberOfPowerPillsCarried();
  Pacman.Clear();
  $.radar_blip_coord1_hm4.Remove();
  $.radar_blip_coord2_hm4.Remove();
  Hud.ClearTimer($.timer_hm4);
  Hud.ClearCounter($.total_no_pills_carried_hm4);
  Mission.Finish();
  return;
}

export async function hood4() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_hood4
  await mission_start_hood4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_hood4_failed
    await mission_hood4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_hood4
  await mission_cleanup_hood4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT total_no_pills_carried_hm4
  // VAR_INT radar_blip_coord1_hm4
  // VAR_INT no_of_pills_carried_hm4
  // VAR_INT flag_player_in_area_hm4
  // VAR_INT timer_hm4
  // VAR_INT car_hm4
  // VAR_INT radar_blip_car1_hm4
  // VAR_INT flag_player_had_car_message_hm4
  // VAR_INT flag_blip_added_hm4
  // VAR_INT radar_blip_coord2_hm4
}
