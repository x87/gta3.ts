// Generated from Main/Industrial/meat3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat3 = 0;
  $.flag_wife_in_area = 0;
  $.blob_flag = 1;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph3);
  Cutscene.SetOffset(1223.88, -839.414, 13.95);
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
  Text.PrintNow("MEA3_A", 10000, 1);
  while ($.cs_time < 6470) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA3_B", 10000, 1);
  while ($.cs_time < 11321) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA3_C", 10000, 1);
  while ($.cs_time < 13506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA3_D", 10000, 1);
  while ($.cs_time < 17471) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA3_D");
  while ($.cs_time < 18333) {
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
  Streaming.RequestModel(ped`FEMALE2`);
  Streaming.RequestModel(car`ESPERANTO`);
  Audio.LoadMissionAudio(MF2_A);
  while (!(Streaming.HasModelLoaded(ped`FEMALE2`)) || !(Streaming.HasModelLoaded(car`ESPERANTO`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat3 = Car.Create(102 /* CAR_ESPERANTO */, 1190.0, -796.0, 13.8);
  $.car_meat3.SetHeading(300.0);
  $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
  while (!($.player.IsInCar($.car_meat3))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat3.Remove();
  Text.PrintNow("MEA3_B3", 7000, 1);
  $.wife_meat3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, ped`FEMALE2`, 1064.0, -378.0, 13.9);
  $.wife_meat3.ClearThreatSearch();
  $.wife_meat3.TurnToFaceCoord(1059.0, -378.0, 100.0);
  $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
  $.wife_meat3.SetCantBeDraggedOut(1 /* TRUE */);
  while (!($.player.LocateInCarChar2D($.wife_meat3, 8.0, 8.0, 0 /* FALSE */)) || !($.player.IsInCar($.car_meat3))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_ped1_meat3.Remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.Remove();
      $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.SetObjEnterCarAsPassenger($.car_meat3);
  while (!($.wife_meat3.IsInCar($.car_meat3)) || !($.player.IsInCar($.car_meat3))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      if (Char.IsDead($.wife_meat3)) {
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA3_3", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_ped1_meat3.Remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.Remove();
      $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat3.Remove();
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA3_B4", 7000, 1);
  $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA3_B4");
  }
  $.blob_flag = 1;
  while (!($.wife_meat3.LocateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.wife_meat3.IsInCar($.car_meat3))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA3_B4");
    }
    if (Car.IsDead($.car_meat3)) {
      if (Char.IsDead($.wife_meat3)) {
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA3_3", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_coord2_meat3.Remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.Remove();
      $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat3.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.wife_meat3.SetCantBeDraggedOut(0 /* FALSE */);
  $.wife_meat3.SetObjLeaveCar($.car_meat3);
  while ($.wife_meat3.IsInCar($.car_meat3)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      if (Char.IsDead($.wife_meat3)) {
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.SetObjGotoCoordOnFoot(1204.2, -801.9);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  World.ClearArea(1200.8, -799.3, 14.0, 10.0, 1 /* TRUE */);
  timerb = 0;
  while (!($.flag_wife_in_area == 1)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.flag_wife_in_area == 0) {
      if ($.wife_meat3.LocateOnFoot2D(1204.2, -801.9, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_wife_in_area = 1;
      }
    }
    if (timerb >= 25000) {
      if (!($.flag_wife_in_area == 1)) {
        $.wife_meat3.SetCoordinates(1204.2, -801.9, 13.7);
        // SCM GOTO → wife_stuck1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO wife_stuck1"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
}

async function wife_stuck1() {
  while (!($.doggy_door.Rotate(135.0, 5.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.SetObjGotoCoordOnFoot(1205.9, -805.8);
  timerb = 0;
  while (!($.wife_meat3.LocateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (timerb >= 25000) {
      if (!($.wife_meat3.LocateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, 0 /* FALSE */))) {
        $.wife_meat3.RemoveElegantly();
        // SCM GOTO → mission_bloke_stuck_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck_meat3"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
}

async function mission_bloke_stuck_meat3() {
  Audio.LoadMissionAudio(MF4_C);
  while (!($.doggy_door.Rotate(45.0, 5.0, 0 /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.wife_meat3)) {
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.wife_meat3.RemoveElegantly();
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Text.PrintNow("MEA3_B6", 5000, 1);
  if (Car.IsDead($.car_meat3)) {
    Text.PrintNow("MEA3_2", 5000, 1);
    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
  }
  if ($.car_meat3.IsUpsidedown() && $.car_meat3.IsStopped()) {
    Text.PrintNow("UPSIDE", 5000, 1);
    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
  }
  while (!($.car_meat3.IsInWater())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat3)) {
      if (!($.car_meat3.IsInWater())) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    else {
      if (!($.player.IsInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
        $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
        $.flag_player_had_car_message_meat3 = 1;
      }
      if ($.player.IsInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
        $.radar_blip_car_meat3.Remove();
        Text.PrintNow("MEA3_B6", 5000, 1);
        $.flag_player_had_car_message_meat3 = 0;
      }
    }
  }
  }
  // SCM GOTO → mission_passed_meat3 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat3"); // fallback: would break linear control flow
}

async function mission_failed_meat3() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_passed_meat3() {
  Text.PrintWithNumberBig("m_pass", 2000, 5000, 1);
  Stat.RegisterMissionPassed("MEA3");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(3000);
  $.flag_meat_mission3_passed = 1;
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT meat_mission4_loop
  return;
}

async function mission_cleanup_meat3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.wife_meat3.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE2`);
  Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`);
  $.radar_blip_ped1_meat3.Remove();
  $.radar_blip_car_meat3.Remove();
  $.radar_blip_coord2_meat3.Remove();
  Mission.Finish();
  return;
}

export async function meat3() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_meat3
  await mission_start_meat3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat3
    await mission_failed_meat3();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat3
  await mission_cleanup_meat3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT car_meat3
  // VAR_INT wife_meat3
  // VAR_INT radar_blip_car_meat3
  // VAR_INT radar_blip_ped1_meat3
  // VAR_INT flag_player_had_car_message_meat3
  // VAR_INT radar_blip_coord2_meat3
  // VAR_INT flag_wife_in_area
}
