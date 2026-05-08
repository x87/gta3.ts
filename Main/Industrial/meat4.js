// Generated from Main/Industrial/meat4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat4 = 0;
  $.flag_loanshark_in_area = 0;
  $.flag_owner_dead_meat4 = 0;
  $.blob_flag = 1;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph4);
  Cutscene.SetOffset(1223.88, -839.414, 13.95);
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
  Text.PrintNow("MEA4_A", 10000, 1);
  while ($.cs_time < 3885) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_B", 10000, 1);
  while ($.cs_time < 7252) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_C", 10000, 1);
  while ($.cs_time < 10502) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_D", 10000, 1);
  while ($.cs_time < 11844) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_E", 10000, 1);
  while ($.cs_time < 13374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_F", 10000, 1);
  while ($.cs_time < 14622) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_G", 10000, 1);
  while ($.cs_time < 17623) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA4_G");
  while ($.cs_time < 18233) {
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
  Streaming.RequestModel(ped`FAN_MAN2`);
  Streaming.RequestModel(ped`B_MAN2`);
  Streaming.RequestModel(car`STALLION`);
  Audio.LoadMissionAudio(MF3_A);
  while (!(Streaming.HasModelLoaded(ped`FAN_MAN2`)) || !(Streaming.HasModelLoaded(ped`B_MAN2`)) || !(Streaming.HasModelLoaded(car`STALLION`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat4 = Car.Create(122 /* CAR_STALLION */, 1190.0, -796.0, 13.8);
  $.car_meat4.SetHeading(300.0);
  $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
  while (!($.player.IsInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.car_meat4.IsUpsidedown() && $.car_meat4.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat4.Remove();
  Text.PrintNow("MEA4_B3", 7000, 1);
  $.loanshark_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`FAN_MAN2`, 897.0, -476.0, 14.6);
  $.loanshark_meat4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.loanshark_meat4.ClearThreatSearch();
  $.loanshark_meat4.TurnToFaceCoord(895.0, -486.0, -100.0);
  $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
  $.loanshark_meat4.SetCantBeDraggedOut(1 /* TRUE */);
  while (!($.player.LocateInCarChar2D($.loanshark_meat4, 8.0, 8.0, 0 /* FALSE */)) || !($.player.IsInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_ped1_meat4.Remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.Remove();
      $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat4.IsUpsidedown() && $.car_meat4.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.SetObjEnterCarAsPassenger($.car_meat4);
  while (!($.loanshark_meat4.IsInCar($.car_meat4)) || !($.player.IsInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA4_3", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_ped1_meat4.Remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.Remove();
      $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat4.IsUpsidedown() && $.car_meat4.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat4.Remove();
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B4", 10000, 1);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA4_B4");
  }
  $.radar_blip_coord2_meat4 = Blip.AddForCoord(1217.0, -794.0, -100.0);
  $.owner_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN2`, 1208.0, -789.0, 13.9);
  $.owner_meat4.ClearThreatSearch();
  $.owner_meat4.TurnToFaceCoord(1210.0, -791.0, -100.0);
  $.blob_flag = 1;
  while (!($.loanshark_meat4.LocateStoppedInCar3D(1217.0, -794.0, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.loanshark_meat4.IsInCar($.car_meat4))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B4");
    }
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA4_3", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_coord2_meat4.Remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.Remove();
      $.radar_blip_coord2_meat4 = Blip.AddForCoord(1217.0, -794.0, -100.0);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat4.IsUpsidedown() && $.car_meat4.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat4.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.loanshark_meat4.LeaveGroup();
  $.loanshark_meat4.SetCantBeDraggedOut(0 /* FALSE */);
  $.loanshark_meat4.SetObjLeaveCar($.car_meat4);
  while ($.loanshark_meat4.IsInCar($.car_meat4)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.car_meat4.IsUpsidedown() && $.car_meat4.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.SetObjGotoCoordOnFoot(1209.6, -791.0);
  Camera.SetFixedPosition(1218.1, -795.0, 16.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.6, -785.7, 13.9, 2 /* JUMP_CUT */);
  World.ClearArea(1212.0, -792.0, 14.0, 10.0, 1 /* TRUE */);
  Audio.LoadMissionAudio(MF3_B);
  timerb = 0;
  while (!($.flag_loanshark_in_area == 1) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.flag_loanshark_in_area == 0) {
      if ($.loanshark_meat4.LocateOnFoot2D(1209.6, -791.0, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_loanshark_in_area = 1;
      }
    }
    if (timerb >= 25000) {
      if (!($.flag_loanshark_in_area == 1)) {
        $.loanshark_meat4.SetCoordinates(1209.6, -791.0, 13.7);
        // SCM GOTO → loanshark_got_stuck (not lowered; manual jump required)
        throw new Error("unresolved GOTO loanshark_got_stuck"); // fallback: would break linear control flow
      }
    }
  }
}

async function loanshark_got_stuck() {
  $.loanshark_meat4.SetIdle();
  $.loanshark_meat4.TurnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B5", 10000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B5");
  Audio.LoadMissionAudio(MF3_B1);
  $.loanshark_meat4.TurnToFaceChar($.owner_meat4);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.TurnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B7", 20000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.TurnToFaceChar($.owner_meat4);
  Text.ClearThisPrint("MEA4_B7");
  Audio.LoadMissionAudio(MF3_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.TurnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B6", 10000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B6");
  $.loanshark_meat4.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 2);
  $.loanshark_meat4.SetObjKillCharOnFoot($.owner_meat4);
  timera = 0;
  while (!($.flag_owner_dead_meat4 == 1)) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B6");
    }
    if (Char.IsDead($.owner_meat4)) {
      $.flag_owner_dead_meat4 = 1;
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (timera > 10000) {
      if (!(Char.IsDead($.owner_meat4))) {
        $.flag_owner_dead_meat4 = 1;
      }
    }
  }
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA4_B6");
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Camera.RestoreJumpcut();
  }
  // SCM GOTO → mission_passed_meat4 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat4"); // fallback: would break linear control flow
}

async function mission_failed_meat4() {
  Text.PrintBig("M_FAIL", 5000, 1);
  if (!(Char.IsDead($.owner_meat4))) {
    $.owner_meat4.RemoveElegantly();
  }
  if (!(Char.IsDead($.loanshark_meat4))) {
    $.loanshark_meat4.RemoveElegantly();
  }
  return;
}

async function mission_passed_meat4() {
  Text.PrintWithNumberBig("m_pass", 4000, 5000, 1);
  Stat.RegisterMissionPassed("MEA4");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(4000);
  $.flag_meat_mission4_passed = 1;
  $.player.ClearWantedLevel();
  return;
}

async function mission_cleanup_meat4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`FAN_MAN2`);
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN2`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  $.radar_blip_ped1_meat4.Remove();
  $.radar_blip_car_meat4.Remove();
  $.radar_blip_coord2_meat4.Remove();
  Mission.Finish();
  return;
}

export async function meat4() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_meat4
  await mission_start_meat4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat4
    await mission_failed_meat4();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat4
  await mission_cleanup_meat4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT car_meat4
  // VAR_INT loanshark_meat4
  // VAR_INT owner_meat4
  // VAR_INT radar_blip_car_meat4
  // VAR_INT radar_blip_ped1_meat4
  // VAR_INT flag_player_had_car_message_meat4
  // VAR_INT radar_blip_coord2_meat4
  // VAR_INT flag_owner_dead_meat4
  // VAR_INT flag_loanshark_in_area
}
