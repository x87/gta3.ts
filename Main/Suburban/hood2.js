// Generated from Main/Suburban/hood2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.counter_all_vans_dead_hm2 = 0;
  $.flag_van1_dead_hm2 = 0;
  $.flag_van2_dead_hm2 = 0;
  $.flag_van3_dead_hm2 = 0;
  $.counter_all_vans_dead_hm2 = 0;
  $.counter_no_of_cars_player_had_hm2 = 0;
  $.flag_player_got_car_hm2 = 0;
  $.flag_buggy_help2_hm2 = 0;
  $.flag_buggy_help3_hm2 = 0;
  $.flag_buggy_help1_hm2 = 0;
  $.buggies_left_hm2 = 0;
  $.total_buggy_hm2 = 5;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph2);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_A", 10000, 1);
  while ($.cs_time < 3468) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_B", 10000, 1);
  while ($.cs_time < 6630) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_C", 10000, 1);
  while ($.cs_time < 8077) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_D", 10000, 1);
  while ($.cs_time < 9819) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_E", 10000, 1);
  while ($.cs_time < 12413) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM2_F", 10000, 1);
  while ($.cs_time < 14200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM2_F");
  while ($.cs_time < 15333) {
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
  Streaming.RequestModel(car`TOYZ`);
  Streaming.RequestModel(car`SECURICAR`);
  Streaming.RequestModel(car`rcbandit`);
  while (!(Streaming.HasModelLoaded(car`TOYZ`)) || !(Streaming.HasModelLoaded(car`SECURICAR`)) || !(Streaming.HasModelLoaded(car`rcbandit`))) {
    await asyncWait(0);
  }
  $.mission_car_hm2 = Car.Create(142 /* CAR_TOYZ */, -682.02, 76.60, -100.0);
  $.radar_blip_car1_hm2 = Blip.AddForCar($.mission_car_hm2);
  while (!($.player.IsSittingInCar($.mission_car_hm2))) {
    await asyncWait(0);
    if (Car.IsDead($.mission_car_hm2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
  }
  $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
  Hud.DisplayCounterWithString($.buggies_left_hm2, 0 /* COUNTER_DISPLAY_NUMBER */, "BUGGY");
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.radar_blip_car1_hm2.Remove();
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  if ($.controlmode == 1) {
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  if ($.controlmode == 2) {
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  if ($.controlmode == 3) {
    Text.PrintHelp("HM2_1A");
    $.flag_buggy_help1_hm2 = 1;
  }
  World.ClearArea(-681.42, 91.35, 17.7, 2.0, 1 /* TRUE */);
  Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);
  ++$.counter_no_of_cars_player_had_hm2;
  $.target_van1_hm2 = Car.Create(111 /* CAR_SECURICAR */, -841.0, -130.0, -100.0);
  $.van_driver1_hm2 = Char.CreateInsideCar($.target_van1_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van1_hm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.target_van1_hm2.SetAvoidLevelTransitions(1 /* TRUE */);
  $.radar_blip_van1_hm2 = Blip.AddForCar($.target_van1_hm2);
  $.target_van1_hm2.SetDrivingStyle(2);
  $.target_van1_hm2.SetCruiseSpeed(12.0);
  $.target_van1_hm2.WanderRandomly();
  $.target_van2_hm2 = Car.Create(111 /* CAR_SECURICAR */, -437.0, -67.0, -100.0);
  $.van_driver2_hm2 = Char.CreateInsideCar($.target_van2_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van2_hm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.target_van2_hm2.SetAvoidLevelTransitions(1 /* TRUE */);
  $.radar_blip_van2_hm2 = Blip.AddForCar($.target_van2_hm2);
  $.target_van2_hm2.SetDrivingStyle(2);
  $.target_van2_hm2.SetCruiseSpeed(12.0);
  $.target_van2_hm2.WanderRandomly();
  $.target_van3_hm2 = Car.Create(111 /* CAR_SECURICAR */, -1172.0, 467.0, -100.0);
  $.van_driver3_hm2 = Char.CreateInsideCar($.target_van3_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van3_hm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.target_van3_hm2.SetAvoidLevelTransitions(1 /* TRUE */);
  $.radar_blip_van3_hm2 = Blip.AddForCar($.target_van3_hm2);
  $.target_van3_hm2.SetDrivingStyle(2);
  $.target_van3_hm2.SetCruiseSpeed(12.0);
  $.target_van3_hm2.WanderRandomly();
  $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
  timerb = 0;
  while (!($.counter_all_vans_dead_hm2 == 3)) {
    await asyncWait(0);
    $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
    if ($.flag_buggy_help2_hm2 == 0 && $.flag_buggy_help1_hm2 == 1) {
      if (timerb > 7000) {
        Text.PrintHelp("HM2_3");
        $.flag_buggy_help2_hm2 = 1;
      }
    }
    if ($.flag_buggy_help3_hm2 == 0) {
      if ($.flag_buggy_help2_hm2 == 1) {
        if (timerb > 14000) {
          Text.PrintHelp("HM2_4");
          $.flag_buggy_help3_hm2 = 1;
        }
      }
    }
    $.player.ClearWantedLevel();
    if (!(Car.IsDead($.mission_car_hm2))) {
      if (!($.player.IsInRemoteMode()) && $.counter_no_of_cars_player_had_hm2 < 6 && $.flag_player_got_car_hm2 == 0 && $.player.IsSittingInCar($.mission_car_hm2)) {
        World.ClearArea(-681.42, 91.35, 17.7, 2.0, 0 /* FALSE */);
        Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);
        ++$.counter_no_of_cars_player_had_hm2;
        $.flag_player_got_car_hm2 = 1;
      }
    }
    if (!($.player.IsInRemoteMode())) {
      $.flag_player_got_car_hm2 = 0;
    }
    if ($.flag_van1_dead_hm2 == 0) {
      if (Car.IsDead($.target_van1_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van1_hm2.Remove();
        $.flag_van1_dead_hm2 = 1;
      }
    }
    if ($.flag_van2_dead_hm2 == 0) {
      if (Car.IsDead($.target_van2_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van2_hm2.Remove();
        $.flag_van2_dead_hm2 = 1;
      }
    }
    if ($.flag_van3_dead_hm2 == 0) {
      if (Car.IsDead($.target_van3_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van3_hm2.Remove();
        $.flag_van3_dead_hm2 = 1;
      }
    }
    if ($.counter_no_of_cars_player_had_hm2 == 5 && $.flag_player_got_car_hm2 == 0 && !($.counter_all_vans_dead_hm2 == 3)) {
      Text.PrintNow("HM2_2", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInAnyCar())) {
      Text.PrintBig("M_FAIL", 5000, 1);
      Text.PrintNow("HM2_2", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
  }
  Rc.BlowUpBuggy();
  }
  // SCM GOTO → mission_hood2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_hood2_passed"); // fallback: would break linear control flow
}

async function mission_hood2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  if ($.player.HasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.IsDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  return;
}

async function mission_hood2_passed() {
  $.flag_hood_mission2_passed = 1;
  Stat.RegisterMissionPassed("HM_2");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT hood_mission3_loop
  return;
}

async function mission_cleanup_hood2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  Streaming.LoadScene(-660.9, 76.0, 18.7);
  Streaming.MarkModelAsNoLongerNeeded(car`TOYZ`);
  Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`);
  Streaming.MarkModelAsNoLongerNeeded(car`rcbandit`);
  Hud.ClearCounter($.buggies_left_hm2);
  $.radar_blip_car1_hm2.Remove();
  $.radar_blip_van1_hm2.Remove();
  $.radar_blip_van2_hm2.Remove();
  $.radar_blip_van3_hm2.Remove();
  Mission.Finish();
  return;
}

export async function hood2() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_hood2
  await mission_start_hood2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_hood2_failed
    await mission_hood2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_hood2
  await mission_cleanup_hood2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT mission_car_hm2
  // VAR_INT radar_blip_car1_hm2
  // VAR_INT target_van1_hm2
  // VAR_INT target_van2_hm2
  // VAR_INT target_van3_hm2
  // VAR_INT van_driver1_hm2
  // VAR_INT van_driver2_hm2
  // VAR_INT van_driver3_hm2
  // VAR_INT radar_blip_van1_hm2
  // VAR_INT radar_blip_van2_hm2
  // VAR_INT radar_blip_van3_hm2
  // VAR_INT flag_van1_dead_hm2
  // VAR_INT flag_van2_dead_hm2
  // VAR_INT flag_van3_dead_hm2
  // VAR_INT counter_all_vans_dead_hm2
  // VAR_INT counter_no_of_cars_player_had_hm2
  // VAR_INT flag_player_got_car_hm2
  // VAR_INT flag_buggy_help2_hm2
  // VAR_INT flag_buggy_help3_hm2
  // VAR_INT flag_buggy_help1_hm2
  // VAR_INT buggies_left_hm2
  // VAR_INT total_buggy_hm2
}
