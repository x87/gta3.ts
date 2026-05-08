// Generated from Main/Industrial/meat2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat2 = 0;
  $.flag_victim1_in_area = 0;
  $.flag_victim2_in_area = 0;
  $.flag_car_in_area_meat2 = 0;
  $.blob_flag = 1;
  $.flag_remove_blip1_meat2 = 0;
  $.flag_remove_blip2_meat2 = 0;
  $.flag_car_in_zone2_meat2 = 0;
  $.flag_player_had_out_car_message_meat2 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph2);
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
  Text.PrintNow("MEA2_A", 10000, 1);
  while ($.cs_time < 4424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_B", 10000, 1);
  while ($.cs_time < 8124) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_C", 10000, 1);
  while ($.cs_time < 10996) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_D", 10000, 1);
  while ($.cs_time < 12362) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_E", 10000, 1);
  while ($.cs_time < 13728) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_F", 10000, 1);
  while ($.cs_time < 16082) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_G", 10000, 1);
  while ($.cs_time < 19591) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA2_H", 10000, 1);
  while ($.cs_time < 24155) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA2_H");
  while ($.cs_time < 25233) {
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
  Streaming.RequestModel(ped`CRIMINAL1`);
  Streaming.RequestModel(ped`CRIMINAL2`);
  Streaming.RequestModel(car`SENTINEL`);
  while (!(Streaming.HasModelLoaded(ped`CRIMINAL1`)) || !(Streaming.HasModelLoaded(ped`CRIMINAL2`)) || !(Streaming.HasModelLoaded(car`SENTINEL`))) {
    await asyncWait(0);
  }
  $.car_meat2 = Car.Create(88 /* CAR_SENTINEL */, 1190.0, -796.0, 13.8);
  $.car_meat2.SetHeading(300.0);
  $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
  while (!($.player.IsInCar($.car_meat2))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat2.Remove();
  Text.PrintNow("MEA2_B3", 7000, 1);
  $.victim1_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL1`, 869.0, -611.0, -100.0);
  $.victim1_meat2.ClearThreatSearch();
  $.victim1_meat2.TurnToFaceCoord(869.0, -615.0, -100.0);
  $.victim1_meat2.SetCantBeDraggedOut(1 /* TRUE */);
  $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
  $.victim2_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL2`, 871.0, -612.0, -100.0);
  $.victim2_meat2.ClearThreatSearch();
  $.victim2_meat2.TurnToFaceCoord(869.0, -615.0, -100.0);
  $.victim2_meat2.SetCantBeDraggedOut(1 /* TRUE */);
  $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
  while (!($.player.LocateInCarChar2D($.victim1_meat2, 8.0, 8.0, 0 /* FALSE */)) || !($.player.LocateInCarChar2D($.victim2_meat2, 8.0, 8.0, 0 /* FALSE */)) || !($.player.IsInCar($.car_meat2))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_ped1_meat2.Remove();
      $.radar_blip_ped2_meat2.Remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.Remove();
      $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
      $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.victim1_meat2.SetObjEnterCarAsPassenger($.car_meat2);
  $.victim2_meat2.SetObjEnterCarAsPassenger($.car_meat2);
  while (!($.victim1_meat2.IsInCar($.car_meat2)) || !($.victim2_meat2.IsInCar($.car_meat2)) || !($.player.IsInCar($.car_meat2))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_ped1_meat2.Remove();
      $.radar_blip_ped2_meat2.Remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.Remove();
      $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
      $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    if ($.victim1_meat2.IsInCar($.car_meat2) && $.flag_remove_blip1_meat2 == 0) {
      $.radar_blip_ped1_meat2.Remove();
      $.flag_remove_blip1_meat2 = 1;
    }
    if ($.victim2_meat2.IsInCar($.car_meat2) && $.flag_remove_blip2_meat2 == 0) {
      $.radar_blip_ped2_meat2.Remove();
      $.flag_remove_blip2_meat2 = 1;
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat2.Remove();
  $.radar_blip_ped2_meat2.Remove();
  Text.PrintNow("MEA2_B4", 7000, 1);
  $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  $.blob_flag = 1;
  while (!($.victim1_meat2.LocateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.victim2_meat2.LocateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, 0 /* FALSE */)) || !($.victim1_meat2.IsInCar($.car_meat2)) || !($.victim2_meat2.IsInCar($.car_meat2))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_coord2_meat2.Remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.Remove();
      $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat2.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.victim1_meat2.SetCantBeDraggedOut(0 /* FALSE */);
  $.victim1_meat2.SetObjLeaveCar($.car_meat2);
  $.victim2_meat2.SetCantBeDraggedOut(0 /* FALSE */);
  $.victim2_meat2.SetObjLeaveCar($.car_meat2);
  while ($.victim1_meat2.IsInCar($.car_meat2) && $.victim2_meat2.IsInCar($.car_meat2)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.victim1_meat2.SetObjGotoCoordOnFoot(1203.3, -801.7);
  await asyncWait(500);
  if (Char.IsDead($.victim2_meat2)) {
    Text.PrintNow("MEA2_2", 5000, 1);
    // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
  }
  $.victim2_meat2.SetObjGotoCoordOnFoot(1202.4, -800.0);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  World.ClearArea(1201.8, -799.7, 13.8, 10.0, 1 /* TRUE */);
  timerb = 0;
  while (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
    await asyncWait(0);
    if (!($.doggy_door.Rotate(135.0, 5.0, 0 /* FALSE */))) {
      [$.doorx, $.doory, $.doorz] = $.doggy_door.GetCoordinates();
    }
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.flag_victim1_in_area == 0) {
      if ($.victim1_meat2.LocateOnFoot2D(1203.3, -801.7, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_victim1_in_area = 1;
        $.victim1_meat2.SetObjGotoCoordOnFoot(1209.4, -807.2);
      }
    }
    if ($.flag_victim1_in_area == 1) {
      if ($.victim1_meat2.LocateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, 0 /* FALSE */)) {
        $.flag_victim1_in_area = 2;
      }
    }
    if ($.flag_victim2_in_area == 0) {
      if ($.victim2_meat2.LocateOnFoot2D(1202.4, -800.0, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_victim2_in_area = 1;
        $.victim2_meat2.SetObjGotoCoordOnFoot(1209.4, -807.2);
      }
    }
    if ($.flag_victim2_in_area == 1) {
      if ($.victim2_meat2.LocateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, 0 /* FALSE */)) {
        $.flag_victim2_in_area = 2;
      }
    }
    if (timerb >= 30000) {
      if (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
        $.victim1_meat2.RemoveElegantly();
        $.victim2_meat2.RemoveElegantly();
        // SCM GOTO → mission_bloke_stuck (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
}

async function mission_bloke_stuck() {
  Audio.LoadMissionAudio(MF4_B);
  while (!($.doggy_door.Rotate(45.0, 5.0, 0 /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim1_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.victim2_meat2)) {
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.victim1_meat2.RemoveElegantly();
  $.victim2_meat2.RemoveElegantly();
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Text.PrintSoon("MEA2_B6", 5000, 1);
  $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
  $.sprayshop1.HasResprayHappened();
  while (!($.sprayshop1.HasResprayHappened()) || !($.player.IsInCar($.car_meat2)) || !($.player.IsStoppedInArea2D(922.6, -366.1, 928.6, -354.3, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_coord3_meat2.Remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.Remove();
      $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord3_meat2.Remove();
  Text.PrintNow("MEA2_3", 5000, 1);
  $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);
  $.blob_flag = 1;
  while (!($.car_meat2.LocateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, $.blob_flag)) || $.player.IsInCar($.car_meat2)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.car_meat2.LocateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, 0 /* FALSE */)) {
      if ($.flag_player_had_out_car_message_meat2 == 0) {
        Text.PrintNow("OUT_VEH", 5000, 1);
        $.flag_player_had_out_car_message_meat2 = 1;
      }
      $.flag_car_in_zone2_meat2 = 1;
    }
    else {
      $.flag_car_in_zone2_meat2 = 0;
      $.flag_player_had_out_car_message_meat2 = 0;
    }
    if ($.flag_car_in_zone2_meat2 == 0) {
      if (!($.player.IsInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
        $.radar_blip_coord4_meat2.Remove();
        $.flag_player_had_car_message_meat2 = 1;
        $.blob_flag = 0;
      }
      if ($.player.IsInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
        $.radar_blip_car_meat2.Remove();
        $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);
        $.flag_player_had_car_message_meat2 = 0;
        $.blob_flag = 1;
      }
    }
    if ($.car_meat2.IsUpsidedown() && $.car_meat2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  if (!(Car.IsDead($.car_meat2))) {
    $.car_meat2.ChangeLock(2 /* CARLOCK_LOCKED */);
  }
  $.radar_blip_coord4_meat2.Remove();
  }
  // SCM GOTO → mission_passed_meat2 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat2"); // fallback: would break linear control flow
}

async function mission_failed_meat2() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_passed_meat2() {
  Text.PrintWithNumberBig("m_pass", 3000, 5000, 1);
  Stat.RegisterMissionPassed("MEA2");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(2000);
  $.flag_meat_mission2_passed = 1;
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT meat_mission3_loop
  return;
}

async function mission_cleanup_meat2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.victim1_meat2.RemoveElegantly();
  $.victim2_meat2.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL1`);
  Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL2`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  $.radar_blip_ped1_meat2.Remove();
  $.radar_blip_ped2_meat2.Remove();
  $.radar_blip_car_meat2.Remove();
  $.radar_blip_coord2_meat2.Remove();
  $.radar_blip_coord3_meat2.Remove();
  $.radar_blip_coord4_meat2.Remove();
  Mission.Finish();
  return;
}

export async function meat2() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_meat2
  await mission_start_meat2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat2
    await mission_failed_meat2();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat2
  await mission_cleanup_meat2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT car_meat2
  // VAR_INT victim1_meat2
  // VAR_INT victim2_meat2
  // VAR_INT radar_blip_car_meat2
  // VAR_INT radar_blip_ped1_meat2
  // VAR_INT radar_blip_ped2_meat2
  // VAR_INT flag_player_had_car_message_meat2
  // VAR_INT radar_blip_coord2_meat2
  // VAR_INT flag_victim1_in_area
  // VAR_INT flag_victim2_in_area
  // VAR_INT radar_blip_coord3_meat2
  // VAR_INT flag_car_in_area_meat2
  // VAR_FLOAT doorx
  // VAR_FLOAT doory
  // VAR_FLOAT doorz
  // VAR_INT flag_remove_blip1_meat2
  // VAR_INT flag_remove_blip2_meat2
  // VAR_INT flag_car_in_zone2_meat2
  // VAR_INT radar_blip_coord4_meat2
  // VAR_INT flag_player_had_out_car_message_meat2
}
