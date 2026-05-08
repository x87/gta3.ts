// Generated from Main/Industrial/meat1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat1 = 0;
  $.flag_bankmanager_in_area = 0;
  $.flag_car_crushed_meat1 = 0;
  $.flag_car_in_area_meat1 = 0;
  $.flag_leave_car_message_meat1 = 0;
  $.flag_dont_do_car_check_meat1 = 0;
  $.blob_flag = 1;
  $.flag_player_had_crusher_help_hm5 = 0;
  $.flag_bankman_moved_meat1 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph1);
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
  Text.PrintNow("MEA1_B", 10000, 1);
  while ($.cs_time < 4424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_C", 10000, 1);
  while ($.cs_time < 7668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_D", 10000, 1);
  while ($.cs_time < 9604) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_E", 10000, 1);
  while ($.cs_time < 12652) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_F", 10000, 1);
  while ($.cs_time < 17740) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_G", 10000, 1);
  while ($.cs_time < 21290) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA1_H", 10000, 1);
  while ($.cs_time < 24535) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA1_H");
  while ($.cs_time < 25666) {
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
  Streaming.RequestModel(ped`B_MAN1`);
  Streaming.RequestModel(car`PERENNIAL`);
  Audio.LoadMissionAudio(MF1_A);
  while (!(Streaming.HasModelLoaded(ped`B_MAN1`)) || !(Streaming.HasModelLoaded(car`PERENNIAL`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat1 = Car.Create(87 /* CAR_PERENNIAL */, 1190.0, -796.0, 13.8);
  $.car_meat1.SetHeading(300.0);
  $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
  while (!($.player.IsInCar($.car_meat1))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat1.Remove();
  Text.PrintNow("MEA1_B3", 7000, 1);
  $.bankmanager_meat1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN1`, 1039.0, -695.0, 13.9);
  $.bankmanager_meat1.ClearThreatSearch();
  $.bankmanager_meat1.TurnToFaceCoord(1042.0, -695.0, -100.0);
  $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
  $.bankmanager_meat1.SetCantBeDraggedOut(1 /* TRUE */);
  while (!($.player.LocateInCarChar2D($.bankmanager_meat1, 8.0, 8.0, 0 /* FALSE */)) || !($.player.IsInCar($.car_meat1))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_ped1_meat1.Remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.Remove();
      $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  $.bankmanager_meat1.SetObjEnterCarAsPassenger($.car_meat1);
  while (!($.bankmanager_meat1.IsInCar($.car_meat1)) || !($.player.IsInCar($.car_meat1))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      if (Char.IsDead($.bankmanager_meat1)) {
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA1_4", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_ped1_meat1.Remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.Remove();
      $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  $.radar_blip_ped1_meat1.Remove();
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA1_B4", 7000, 1);
  $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA1_B4");
  }
  $.blob_flag = 1;
  while (!($.bankmanager_meat1.LocateStoppedInCar3D(1205.7, -789.2, 14.8, 4.0, 4.0, 6.0, $.blob_flag)) || !($.bankmanager_meat1.IsInCar($.car_meat1))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA1_B4");
    }
    if (Car.IsDead($.car_meat1)) {
      if (Char.IsDead($.bankmanager_meat1)) {
        Audio.ClearMissionAudio();
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bankmanager_meat1)) {
      Audio.ClearMissionAudio();
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.LocateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, 0 /* FALSE */))) {
        Text.PrintNow("MEA1_4", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_coord2_meat1.Remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.Remove();
      $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  $.radar_blip_coord2_meat1.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  World.ClearArea(1201.8, -799.7, 13.8, 5.0, 1 /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.bankmanager_meat1.SetCantBeDraggedOut(0 /* FALSE */);
  $.bankmanager_meat1.SetObjLeaveCar($.car_meat1);
  while ($.bankmanager_meat1.IsInCar($.car_meat1)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      if (Char.IsDead($.bankmanager_meat1)) {
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.bankmanager_meat1.SetObjGotoCoordOnFoot(1204.2, -801.9);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  World.ClearArea(1200.8, -799.3, 14.0, 10.0, 1 /* TRUE */);
  timerb = 0;
  while (!($.flag_bankmanager_in_area == 1)) {
    await asyncWait(0);
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.flag_bankmanager_in_area == 0) {
      if ($.bankmanager_meat1.LocateOnFoot2D(1204.2, -801.9, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_bankmanager_in_area = 1;
      }
    }
    if ($.flag_bankman_moved_meat1 == 0) {
      if (timerb >= 20000) {
        $.bankmanager_meat1.SetCoordinates(1204.2, -801.9, 13.7);
        $.flag_bankman_moved_meat1 = 1;
      }
    }
  }
  while (!($.doggy_door.Rotate(135.0, 5.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.bankmanager_meat1.SetObjGotoCoordOnFoot(1205.9, -805.8);
  timerb = 0;
  while (!($.bankmanager_meat1.LocateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (timerb >= 20000) {
      if (!($.bankmanager_meat1.LocateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, 0 /* FALSE */))) {
        $.bankmanager_meat1.RemoveElegantly();
        // SCM GOTO → bloke_got_stuck_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO bloke_got_stuck_meat1"); // fallback: would break linear control flow
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
}

async function bloke_got_stuck_meat1() {
  Audio.LoadMissionAudio(MF4_A);
  while (!($.doggy_door.Rotate(45.0, 5.0, 0 /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.bankmanager_meat1)) {
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.bankmanager_meat1.RemoveElegantly();
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Text.PrintSoon("MEA1_B6", 5000, 1);
  $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
  $.blob_flag = 1;
  while (!($.car_meat1.IsStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, $.blob_flag))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("MEA1_2", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      if ($.car_meat1.IsStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, 0 /* FALSE */)) {
        $.flag_dont_do_car_check_meat1 = 1;
        if ($.flag_leave_car_message_meat1 == 0) {
          Text.PrintNow("MEA1_3", 5000, 1);
          $.flag_leave_car_message_meat1 = 1;
        }
      }
      else {
        $.flag_leave_car_message_meat1 = 0;
        $.flag_dont_do_car_check_meat1 = 0;
      }
    }
    if ($.flag_dont_do_car_check_meat1 == 0) {
      if (!($.player.IsInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
        $.radar_blip_coord3_meat1.Remove();
        $.flag_player_had_car_message_meat1 = 1;
        $.blob_flag = 0;
      }
      if ($.player.IsInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
        $.radar_blip_car_meat1.Remove();
        $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
        $.flag_player_had_car_message_meat1 = 0;
        $.blob_flag = 1;
      }
    }
    if ($.flag_player_had_crusher_help_hm5 == 0) {
      if ($.player.LocateAnyMeans2D(1140.3, 50.1, 20.0, 20.0, 0 /* FALSE */) && $.player.IsInCar($.car_meat1)) {
        Text.PrintHelp("CRUSH");
        $.flag_player_had_crusher_help_hm5 = 1;
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.blob_flag = 1;
  while (!(Crane.IsLiftingCar(1120.0, 46.0, $.car_meat1))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat1)) {
      Text.PrintNow("MEA1_2", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.IsStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 20.0, $.blob_flag)) {
      $.flag_car_in_area_meat1 = 1;
    }
    else {
      $.flag_car_in_area_meat1 = 0;
    }
    if ($.flag_car_in_area_meat1 == 0) {
      if (!($.player.IsInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
        $.radar_blip_coord3_meat1.Remove();
        $.flag_player_had_car_message_meat1 = 1;
        $.blob_flag = 0;
      }
      if ($.player.IsInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
        $.radar_blip_car_meat1.Remove();
        $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
        $.flag_player_had_car_message_meat1 = 0;
        $.blob_flag = 1;
      }
    }
    if ($.car_meat1.IsUpsidedown() && $.car_meat1.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord3_meat1.Remove();
  while ($.flag_car_crushed_meat1 == 0) {
    await asyncWait(0);
    if ($.car_meat1.IsCrushed()) {
      $.flag_car_crushed_meat1 = 1;
      // SCM GOTO → mission_passed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_meat1"); // fallback: would break linear control flow
    }
    else {
      if (Car.IsDead($.car_meat1)) {
        Text.PrintNow("MEA1_2", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
  }
  }
}

async function mission_failed_meat1() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_passed_meat1() {
  Text.PrintWithNumberBig("m_pass", 1000, 5000, 1);
  Stat.RegisterMissionPassed("MEA1");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(1000);
  $.flag_meat_mission1_passed = 1;
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT meat_mission2_loop
  return;
}

async function mission_cleanup_meat1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.bankmanager_meat1.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN1`);
  Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`);
  $.radar_blip_ped1_meat1.Remove();
  $.radar_blip_car_meat1.Remove();
  $.radar_blip_coord2_meat1.Remove();
  $.radar_blip_coord3_meat1.Remove();
  Mission.Finish();
  return;
}

export async function meat1() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_meat1
  await mission_start_meat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat1
    await mission_failed_meat1();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat1
  await mission_cleanup_meat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT car_meat1
  // VAR_INT bankmanager_meat1
  // VAR_INT radar_blip_car_meat1
  // VAR_INT radar_blip_ped1_meat1
  // VAR_INT radar_blip_coord3_meat1
  // VAR_INT flag_player_had_car_message_meat1
  // VAR_INT radar_blip_coord2_meat1
  // VAR_INT flag_bankmanager_in_area
  // VAR_INT flag_car_crushed_meat1
  // VAR_INT flag_car_in_area_meat1
  // VAR_INT flag_leave_car_message_meat1
  // VAR_INT flag_dont_do_car_check_meat1
  // VAR_INT flag_player_had_crusher_help_hm5
  // VAR_INT flag_bankman_moved_meat1
}
