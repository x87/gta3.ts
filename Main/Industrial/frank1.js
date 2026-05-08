// Generated from Main/Industrial/frank1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_frankie1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_frankie_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.chico_message_flag = 0;
  $.flag_blip_on_limo = 0;
  $.timera_reset = 0;
  $.timerb_reset = 0;
  $.clubbers_flee_flag = 0;
  $.clubber3_car1 = 0;
  $.clubber5_car2 = 0;
  $.clubber8_car3 = 0;
  $.flag_blip_on_maria = 0;
  $.create_more_swat1 = 0;
  $.create_more_swat2 = 0;
  $.swat1_exit_car = 0;
  $.swat2_exit_car = 0;
  $.maria_blip = 0;
  $.add_sound_flag = 0;
  $.locate_dome_flag = 0;
  $.chico_audio_flag = 0;
  $.swat_cam_needs_restoring = 0;
  $.skip_cutscene_flag = 0;
  $.timerc_reset_flag_f1a = 0;
  $.timerc_current_f1a = 0;
  $.timerc_started_f1a = 0;
  $.timerc_f1a = 0;
  $.timerc_reset_flag_f1b = 0;
  $.timerc_current_f1b = 0;
  $.timerc_started_f1b = 0;
  $.timerc_f1b = 0;
  $.fuckup_flag = 0;
  $.fuckup_timer_start = 0;
  $.fuckup_timer_current = 0;
  $.fuckup_timer = 0;
  $.shadow_counter = 0;
  $.inside_warehouse_x = 1273.0;
  $.inside_warehouse_y = -1107.4;
  $.inside_warehouse_z = 11.5;
  $.outside_warehouse_x = 1261.0;
  $.outside_warehouse_y = -1108.0;
  $.swat1_stuck_x = 0.0;
  $.swat1_stuck_y = 0.0;
  $.swat1_stuck_z = 0.0;
  $.swat2_stuck_x = 0.0;
  $.swat2_stuck_y = 0.0;
  $.swat2_stuck_z = 0.0;
  $.R = 0;
  $.G = 0;
  $.R1 = 0;
  $.G1 = 0;
  $.R2 = 0;
  $.G2 = 0;
  $.R3 = 0;
  $.G3 = 0;
  $.R4 = 0;
  $.G4 = 0;
  $.R5 = 0;
  $.G5 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.frankie);
  Streaming.LoadSpecialCharacter(2, $.maria);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, FRANKH);
  Streaming.LoadSpecialModel(hier`cutobj03`, MARIAH);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.RequestModel(salvsdetail);
  Streaming.RequestModel(swank_inside);
  Streaming.RequestModel(franksclb02);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(salvsdetail)) || !(Streaming.HasModelLoaded(swank_inside)) || !(Streaming.HasModelLoaded(franksclb02))) {
    await asyncWait(0);
  }
  if ($.maria_exists == 1) {
    // SCM GOSUB delete_char_maria
    await delete_char_maria();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.maria_exists = 0;
  $.frankie_garage.ChangeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.frankie_garage.Close();
  World.SwitchRubbish(0 /* OFF */);
  World.ClearArea(1444.99, -186.9, 56.0, 35.0, 1 /* TRUE */);
  Cutscene.Load(S1_PF);
  Cutscene.SetOffset(1457.776, -185.348, 54.925);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_frankie = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_frankie.SetAnim($.frankie);
  $.cs_maria = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_maria.SetAnim($.maria);
  $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`);
  $.cs_mafia.SetAnim(gang02);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj02`);
  $.cs_frankiehead.SetAnim(frank);
  $.cs_mariahead = CutsceneHead.Create($.cs_maria, hier`cutobj03`);
  $.cs_mariahead.SetAnim($.maria);
  $.player.SetCoordinates(1418.0, -186.0, -100.0);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 219) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_A, 15000, 1);
  while ($.cs_time < 1849) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_B, 15000, 1);
  while ($.cs_time < 4493) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_C, 15000, 1);
  while ($.cs_time < 7519) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_D, 15000, 1);
  while ($.cs_time < 10505) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_E, 15000, 1);
  while ($.cs_time < 14239) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_F, 15000, 1);
  while ($.cs_time < 15964) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_G, 15000, 1);
  while ($.cs_time < 18485) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_H, 15000, 1);
  while ($.cs_time < 21608) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_I, 15000, 1);
  while ($.cs_time < 24863) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_J, 15000, 1);
  while ($.cs_time < 28287) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_K, 15000, 1);
  while ($.cs_time < 31451) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_L, 15000, 1);
  while ($.cs_time < 34679) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_M, 15000, 1);
  while ($.cs_time < 36802) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_N, 15000, 1);
  while ($.cs_time < 39747) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(FM1_O, 15000, 1);
  while ($.cs_time < 43500) {
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
  $.player.SetCoordinates(1418.0, -186.0, -100.0);
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(salvsdetail);
  Streaming.MarkModelAsNoLongerNeeded(swank_inside);
  Streaming.MarkModelAsNoLongerNeeded(franksclb02);
  Streaming.RequestModel(car`STRETCH`);
  Streaming.RequestModel(ped`CRIMINAL1`);
  World.ClearArea(1444.99, -186.9, 56.0, 35.0, 1 /* TRUE */);
  World.SwitchRubbish(1 /* ON */);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`STRETCH`)) || !(Streaming.HasModelLoaded(ped`CRIMINAL1`))) {
    await asyncWait(0);
  }
  $.frankies_limo = Car.Create(92 /* CAR_STRETCH */, 1436.0, -183.0, 50.0);
  Audio.SetRadioChannel(3, -1);
  $.frankies_limo.SetHeading(90.0);
  $.frankies_limo.ChangeColor(0, 0);
  $.frankies_limo.SetStrong(1 /* TRUE */);
  $.frankies_limo.SetCanRespray(0 /* FALSE */);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  $.maria_exists = 1;
  $.maria = Char.CreateAsPassenger($.frankies_limo, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1);
  $.maria.ClearThreatSearch();
  $.maria.AddArmor(100);
  $.maria.SetCantBeDraggedOut(1 /* TRUE */);
  $.maria.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  if (!($.maria.IsInCar($.frankies_limo))) {
    $.maria.SetObjEnterCarAsPassenger($.frankies_limo);
  }
  $.chico = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL1`, 770.2257, -565.9869, 13.8);
  $.chico.SetHeading(265.2053);
  $.chico.ClearThreatSearch();
  $.chico.SetIdle();
  $.chico.SetStayInSamePlace(1 /* TRUE */);
  Path.SwitchPedRoadsOff(759.0, -616.0, 11.0, 782.0, -536.0, 26.0);
  $.camera_mode = Math.RandomIntInRange(0, 4);
  if ($.camera_mode < 1) {
    Camera.SetFixedPosition(1405.736, -190.179, 62.455, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(1427.2837, -183.5375, 49.4573, 2 /* JUMP_CUT */);
  }
  if ($.camera_mode == 1) {
    Camera.SetFixedPosition(1425.685, -178.463, 50.184, 0.0, 0.0, 0.0);
    Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  if ($.camera_mode == 2) {
    Camera.SetFixedPosition(1432.161, -179.705, 50.643, 0.0, 0.0, 0.0);
    Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  if ($.camera_mode > 2) {
    Camera.SetFixedPosition(1421.134, -193.771, 63.916, 0.0, 0.0, 0.0);
    Camera.PointAtCar($.frankies_limo, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  $.player.WarpIntoCar($.frankies_limo);
  Camera.DoFade(0, 0 /* FADE_OUT */);
  [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
  $.fm1_blip = Blip.AddForCoord(775.5, -557.3, 14.0);
  Streaming.RequestModel(ped`GANG_MAFIA_A`);
  Streaming.RequestModel(car`SENTINEL`);
  Streaming.RequestModel(car`CHEETAH`);
  Streaming.RequestModel(car`MANANA`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(ped`GANG_MAFIA_A`)) || !(Streaming.HasModelLoaded(car`SENTINEL`)) || !(Streaming.HasModelLoaded(car`CHEETAH`)) || !(Streaming.HasModelLoaded(car`MANANA`))) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  if (Char.IsDead($.maria)) {
    Text.PrintNow(FM1_7, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.frankies_limo)) {
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  if (!($.maria.IsInCar($.frankies_limo))) {
    $.maria.SetObjEnterCarAsPassenger($.frankies_limo);
  }
  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  if (Char.IsDead($.maria)) {
    Text.PrintNow(FM1_7, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.frankies_limo)) {
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  if (!($.maria.IsInCar($.frankies_limo))) {
    $.maria.SetObjEnterCarAsPassenger($.frankies_limo);
  }
  $.frankie_garage.ChangeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.frankie_garage.Open();
  $.frankies_limo.GotoCoordinatesAccurate(1416.1118, -189.4448, 49.5264);
  while (!($.frankies_limo.Locate2D(1420.5, -189.1, 3.0, 3.0, 0))) {
    await asyncWait(0);
    if (Car.IsDead($.frankies_limo)) {
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
  }
  $.frankie_garage.Close();
  $.player.ApplyBrakesToCar(1 /* ON */);
  if (Char.IsDead($.maria)) {
    Text.PrintNow(FM1_7, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  Camera.SetInFrontOfPlayer();
  Camera.RestoreJumpcut();
  $.player.SetControl(1 /* ON */);
  $.frankies_limo.SetStatus(0 /* STATUS_PLAYER */);
  Hud.SwitchWidescreen(0 /* OFF */);
  $.locate_dome_flag = 1;
  Streaming.RequestModel(car`ENFORCER`);
  Streaming.RequestModel(ped`SWAT`);
  Streaming.RequestModel(ped`P_MAN1`);
  Streaming.RequestModel(ped`FEMALE1`);
  Streaming.RequestModel(ped`FEMALE2`);
  while (!($.maria.LocateStoppedInCar3D(775.5, -557.3, 14.0, 3.0, 3.0, 2.0, $.locate_dome_flag))) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chico)) {
      Text.PrintNow(FM1_8, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
      $.locate_dome_flag = 0;
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForCar($.frankies_limo);
      Text.PrintNow("FM1_1", 5000, 1);
      $.flag_blip_on_limo = 1;
    }
    if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
      $.locate_dome_flag = 1;
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForChar($.chico);
      $.flag_blip_on_limo = 0;
    }
    [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
    if ($.player.LocateInCar2D($.chico_x, $.chico_y, 30.0, 30.0, 0) && $.chico_message_flag == 0) {
      Text.PrintNow(FM1_P, 5000, 1);
      $.chico_message_flag = 1;
    }
    if ($.chico_message_flag == 1 && !($.player.LocateInCar2D($.chico_x, $.chico_y, 30.0, 30.0, 0))) {
      Text.PrintNow(FM1_6, 5000, 1);
      $.chico_message_flag = 0;
    }
  }
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  Camera.SetFixedPosition(770.7659, -569.9462, 14.3248, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(770.7453, -568.9474, 14.4, 2 /* JUMP_CUT */);
  $.fm1_blip.Remove();
  $.frankie_garage.Close();
  $.maria.SetObjLeaveCar($.frankies_limo);
  while ($.maria.IsInAnyCar()) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chico)) {
      Text.PrintNow(FM1_8, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
      $.fm1_blip = Blip.AddForCar($.frankies_limo);
      Text.PrintNow("FM1_1", 5000, 1);
      $.flag_blip_on_limo = 1;
    }
    if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
      $.fm1_blip.Remove();
      $.flag_blip_on_limo = 0;
    }
    if (!($.player.LocateAnyMeansChar2D($.maria, 20.0, 20.0, 0))) {
      Text.PrintNow(FM1_3, 5000, 1);
    }
  }
  $.maria.SetObjGotoCharOnFoot($.chico);
  [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
  while (!($.maria.LocateStoppedOnFoot2D($.chico_x, $.chico_y, 3.0, 3.0, 0))) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chico)) {
      Text.PrintNow(FM1_8, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
    if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
      $.fm1_blip = Blip.AddForCar($.frankies_limo);
      Text.PrintNow("FM1_1", 5000, 1);
      $.flag_blip_on_limo = 1;
    }
    if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
      $.fm1_blip.Remove();
      $.flag_blip_on_limo = 0;
    }
    if (!($.player.LocateAnyMeansChar2D($.maria, 20.0, 20.0, 0))) {
      Text.PrintNow(FM1_3, 5000, 1);
    }
  }
  Text.ClearSmallPrints();
  while (!($.chico_audio_flag == 15)) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      Audio.ClearMissionAudio();
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      Audio.ClearMissionAudio();
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chico)) {
      Text.PrintNow(FM1_8, 5000, 1);
      Audio.ClearMissionAudio();
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.skip_cutscene_flag == 0) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */))) {
        $.skip_cutscene_flag = 1;
      }
    }
    if ($.skip_cutscene_flag == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        $.skip_cutscene_flag = 2;
      }
    }
    if ($.skip_cutscene_flag == 2) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */))) {
        Audio.ClearMissionAudio();
        Audio.LoadMissionAudio(S1_F);
        $.chico.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.maria.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 15;
        $.skip_cutscene_flag = 3;
      }
    }
    if ($.chico_audio_flag == 0) {
      $.chico.TurnToFaceChar($.maria);
      $.maria.TurnToFaceChar($.chico);
      Audio.LoadMissionAudio(S1_A);
      $.chico_audio_flag = 1;
    }
    if ($.chico_audio_flag == 14) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_F);
        $.chico.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 15;
      }
    }
    if ($.chico_audio_flag == 13) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_U, 2000, 1);
        $.chico.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
        $.chico_audio_flag = 14;
      }
    }
    if ($.chico_audio_flag == 12) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_E);
        $.maria.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 13;
      }
    }
    if ($.chico_audio_flag == 11) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.maria.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_T, 4000, 2);
        $.maria.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
        $.chico_audio_flag = 12;
      }
    }
    if ($.chico_audio_flag == 10) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_D);
        $.chico.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 11;
      }
    }
    if ($.chico_audio_flag == 9) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_S1, 15000, 2);
        $.chico_audio_flag = 10;
      }
    }
    if ($.chico_audio_flag == 8) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_C1);
        $.chico_audio_flag = 9;
      }
    }
    if ($.chico_audio_flag == 7) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
        $.chico.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_S, 5000, 2);
        $.chico_audio_flag = 8;
      }
    }
    if ($.chico_audio_flag == 6) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_C);
        $.maria.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 7;
      }
    }
    if ($.chico_audio_flag == 5) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.maria.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_R, 6000, 2);
        $.maria.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
        $.chico_audio_flag = 6;
      }
    }
    if ($.chico_audio_flag == 4) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_B);
        $.chico.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.chico_audio_flag = 5;
      }
    }
    if ($.chico_audio_flag == 3) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_Q1, 6000, 2);
        $.chico_audio_flag = 4;
      }
    }
    if ($.chico_audio_flag == 2) {
      if (Audio.HasMissionAudioFinished()) {
        $.chico.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.chico);
        Audio.LoadMissionAudio(S1_A1);
        $.chico_audio_flag = 3;
      }
    }
    if ($.chico_audio_flag == 1) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.chico.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_Q, 6000, 2);
        $.chico.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 10000);
        $.chico_audio_flag = 2;
      }
    }
  }
}

async function maria_getting_into_car() {
  if (Char.IsDead($.maria)) {
    Text.PrintNow(FM1_7, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.frankies_limo)) {
    Text.PrintNow(WRECKED, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  Text.ClearSmallPrints();
  $.maria.SetObjEnterCarAsPassenger($.frankies_limo);
  $.maria.SetRunning(1 /* TRUE */);
  $.chico.MarkAsNoLongerNeeded();
  Path.SwitchPedRoadsOn(759.0, -616.0, 11.0, 782.0, -536.0, 26.0);
  while (!($.maria.IsInCar($.frankies_limo))) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
  }
  if ($.flag_player_on_mission == 0) {
    $.fm1_blip = Blip.AddForCar($.frankies_limo);
    $.maria_blip = Blip.AddForChar($.maria);
  }
  $.player.SetControl(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  $.maria.SetRunning(0 /* FALSE */);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow(FM1_V, 5000, 1);
  $.fm1_blip.Remove();
  $.maria_blip.Remove();
  $.fm1_blip = Blip.AddForCoord(1256.6, -1099.3, -11.7);
  $.doorman1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1267.73, -1109.24, 11.0);
  $.doorman1.SetHeading(90.0);
  $.doorman1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
  $.doorman1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.doorman1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.doorman1.SetObjWaitOnFoot();
  $.doorman1.SetHeedThreats(1 /* TRUE */);
  $.doorman2 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1267.73, -1105.62, 11.0);
  $.doorman2.SetHeading(90.0);
  $.doorman2.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
  $.doorman2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.doorman2.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.doorman2.SetObjWaitOnFoot();
  $.doorman2.SetHeedThreats(1 /* TRUE */);
  $.parked_car1 = Car.Create(88 /* CAR_SENTINEL */, 1243.0, -1112.0, 11.0);
  $.parked_car2 = Car.Create(98 /* CAR_CHEETAH */, 1247.0, -1112.0, 11.0);
  $.parked_car3 = Car.Create(93 /* CAR_MANANA */, 1251.0, -1112.0, 11.0);
  Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1270.8430, -1107.7288, 11.1079, 0.0, 1.0, 0, 255, 0, 0);
  Fx.DrawLight(1273.1917, -1107.3098, 11.1079, 255, 0, 0);
  $.warehouse_rave_loop = Sound.AddContinuous(1269.7494, -1100.4137, 14.0, 73 /* SOUND_RAVE_LOOP_INDUSTRIAL_L */);
  Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.0, -1107.2, 10.7, 0);
  Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.0522, -1107.2312, 10.7, 0);
  Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.1, -1107.1, 10.7, 0);
  Fx.AddParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, 1273.2, -1107.0, 10.7, 0);
  Fx.AddParticleEffect(3 /* POBJECT_WALL_STEAM_SLOWMOTION */, 1270.0, -1107.35, 10.8, 0);
  Fx.AddParticleEffect(1 /* POBJECT_PAVEMENT_STEAM_SLOWMOTION */, 1271.5223, -1107.5471, 10.6, 0);
  $.add_sound_flag = 1;
  $.locate_dome_flag = 1;
  $.chico_message_flag = 0;
  $.flag_blip_on_limo = 0;
  while (!($.maria.LocateStoppedInCar2D(1259.0410, -1107.7825, 3.0, 3.0, $.locate_dome_flag))) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.chico_message_flag == 0) {
      if ($.maria.LocateAnyMeans2D(1258.0, -1100.0, 50.0, 50.0, 0)) {
        Text.PrintNow(FM1_9, 5000, 1);
        $.chico_message_flag = 1;
      }
    }
    if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForCar($.frankies_limo);
      Text.PrintNow("FM1_1", 5000, 1);
      $.locate_dome_flag = 0;
      $.flag_blip_on_limo = 1;
    }
    if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForCoord(1262.1, -1099.4, -100.0);
      $.locate_dome_flag = 1;
      $.flag_blip_on_limo = 0;
    }
    if ($.chico_audio_flag == 16) {
      if (Audio.HasMissionAudioLoaded()) {
        $.chico_audio_flag = 17;
      }
    }
    if ($.chico_audio_flag == 15) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_G);
        $.chico_audio_flag = 16;
      }
    }
  }
  if (!($.chico_audio_flag == 17)) {
    await asyncWait(0);
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
      if (Char.IsDead($.maria)) {
        Text.PrintNow(FM1_7, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.frankies_limo)) {
        Text.PrintNow(WRECKED, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
    }
    $.chico_audio_flag = 17;
  }
  [$.chico_x, $.chico_y, $.chico_z] = $.maria.GetCoordinates();
  Audio.PlayMissionAudio();
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  Text.PrintNow(FM1_W, 5000, 1);
  await asyncWait(0);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
  }
  $.player.SetControl(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  $.maria.SetObjLeaveCar($.frankies_limo);
  while ($.maria.IsInCar($.frankies_limo)) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.chico_audio_flag == 17) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_H);
        $.chico_audio_flag = 18;
      }
    }
  }
  $.maria.SetObjGotoCoordOnFoot(1266.85, -1107.65);
  TIMERA = 0;
  while (!($.maria.LocateOnFoot2D(1266.85, -1107.65, 1.0, 1.0, 0))) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (TIMERA > 20000) {
      World.ClearArea(1267.665, -1107.569, 11.38, 3.0, 0 /* FALSE */);
    }
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.chico_audio_flag == 17) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_H);
        $.chico_audio_flag = 18;
      }
    }
  }
  $.maria.SetObjGotoCoordOnFoot($.inside_warehouse_x, $.inside_warehouse_y);
  while (!($.maria.LocateOnFoot2D($.inside_warehouse_x, $.inside_warehouse_y, 1.0, 1.0, 0))) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (TIMERA > 20000) {
      World.ClearArea(1267.665, -1107.569, 11.38, 4.0, 0 /* FALSE */);
    }
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.chico_audio_flag == 17) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_H);
        $.chico_audio_flag = 18;
      }
    }
  }
  $.maria_exists = 0;
  $.maria.Delete();
}

async function wait_for_maria() {
  // SCM GOTO → wait_for_maria lowered to endless loop
  while (true) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    TIMERA = 0;
    while ($.player.LocateAnyMeans2D(1262.1, -1099.4, 22.0, 22.0, 0)) {
      await asyncWait(0);
      // SCM GOSUB draw_disco_lights
      await draw_disco_lights();
      // fallback if label was not emitted as async function: no-op continues linearly
      if (TIMERA > 10000) {
        // SCM GOTO → club_busted (not lowered; manual jump required)
        throw new Error("unresolved GOTO club_busted"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.frankies_limo)) {
        Text.PrintNow(WRECKED, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
      if ($.chico_audio_flag == 17) {
        if (Audio.HasMissionAudioFinished()) {
          Audio.LoadMissionAudio(S1_H);
          $.chico_audio_flag = 18;
        }
      }
    }
    Text.PrintNow("FM1_4", 500, 2);
  }
}

async function club_busted() {
  while (!(Streaming.HasModelLoaded(car`ENFORCER`)) || !(Streaming.HasModelLoaded(ped`SWAT`)) || !(Streaming.HasModelLoaded(ped`P_MAN1`)) || !(Streaming.HasModelLoaded(ped`FEMALE1`)) || !(Streaming.HasModelLoaded(ped`FEMALE2`))) {
    await asyncWait(0);
  }
}

async function swat_car_one() {
  $.swatvan_fm1 = Car.Create(110 /* CAR_ENFORCER */, 1293.0, -925.0, -100.0);
  $.swatvan_fm1.SetHeading(225.0);
  $.swatvan_fm1.SetCruiseSpeed(40.0);
  $.swatvan_fm1.SetDrivingStyle(2);
  $.swatvan_fm1.SwitchSiren(1 /* ON */);
  $.swatvan_fm1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.cop1_fm1 = Char.CreateInsideCar($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`);
  $.cop1_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop1_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop1_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop2_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 0);
  $.cop2_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop2_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop2_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop3_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 1);
  $.cop3_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop3_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop3_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop4_fm1 = Char.CreateAsPassenger($.swatvan_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 2);
  $.cop4_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop4_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop4_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.swatvan_fm1.GotoCoordinates(1252.0, -1086.0, -100.0);
  if ($.create_more_swat1 == 1) {
    $.create_more_swat1 = 0;
    return;
  }
}

async function swat_car_two() {
  $.swatvan2_fm1 = Car.Create(110 /* CAR_ENFORCER */, 1084.0, -1012.0, -100.0);
  $.swatvan2_fm1.SetHeading(180.0);
  $.swatvan2_fm1.SetCruiseSpeed(40.0);
  $.swatvan2_fm1.SetDrivingStyle(2);
  $.swatvan2_fm1.SwitchSiren(1 /* ON */);
  $.swatvan2_fm1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.cop5_fm1 = Char.CreateInsideCar($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`);
  $.cop5_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop5_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop5_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop6_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 0);
  $.cop6_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop6_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop6_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop7_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 1);
  $.cop7_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop7_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop7_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.cop8_fm1 = Char.CreateAsPassenger($.swatvan2_fm1, 13 /* PEDTYPE_GANG_HOOD */, ped`SWAT`, 2);
  $.cop8_fm1.SetThreatSearch(7 /* THREAT_GANG_MAFIA */);
  $.cop8_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.cop8_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 99);
  $.swatvan2_fm1.GotoCoordinates(1235.0, -1099.0, -100.0);
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  Camera.SetFixedPosition(1309.913, -1061.354, 15.691, 0.0, 0.0, 0.0);
  Camera.PointAtCar($.swatvan_fm1, 15 /* FIXED */, 2 /* JUMP_CUT */);
  Camera.SetGenerateCarsAround(1 /* TRUE */);
  $.swat_cam_needs_restoring = 1;
  if ($.create_more_swat2 == 1) {
    $.create_more_swat2 = 0;
    return;
  }
  if (!($.chico_audio_flag == 18)) {
    while (!(Audio.HasMissionAudioFinished())) {
      await asyncWait(0);
      if (Car.IsDead($.frankies_limo)) {
        Text.PrintNow(WRECKED, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
    }
    Audio.LoadMissionAudio(S1_H);
    $.chico_audio_flag = 18;
  }
  await asyncWait(0);
  if ($.chico_audio_flag == 18) {
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
      if (Car.IsDead($.frankies_limo)) {
        Text.PrintNow(WRECKED, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
    }
    $.chico_audio_flag = 19;
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("FM1_SS", 4000, 2);
  while ($.swat1_exit_car == 0 || $.swat2_exit_car == 0) {
    await asyncWait(0);
    if ($.fuckup_flag == 0) {
      $.fuckup_timer_start = Clock.GetGameTimer();
      $.fuckup_flag = 1;
    }
    if ($.fuckup_flag == 1) {
      $.fuckup_timer_current = Clock.GetGameTimer();
      $.fuckup_timer = $.fuckup_timer_current - $.fuckup_timer_start;
      if ($.fuckup_timer > 180000) {
        $.swat1_exit_car = 1;
        $.swat2_exit_car = 1;
        if ($.swat_cam_needs_restoring == 1) {
          Camera.SetBehindPlayer();
          Camera.RestoreJumpcut();
          $.player.SetControl(1 /* ON */);
          Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
          Hud.SwitchWidescreen(0 /* OFF */);
          Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
          Camera.SetGenerateCarsAround(0 /* FALSE */);
          $.swat_cam_needs_restoring = 0;
        }
        $.fuckup_flag = 2;
      }
    }
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.chico_audio_flag == 20) {
      if (Audio.HasMissionAudioLoaded()) {
        $.chico_audio_flag = 21;
      }
    }
    if ($.chico_audio_flag == 19) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_I);
        $.chico_audio_flag = 20;
      }
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.swatvan_fm1)) {
      $.swatvan_fm1.MarkAsNoLongerNeeded();
      $.cop1_fm1.MarkAsNoLongerNeeded();
      $.cop2_fm1.MarkAsNoLongerNeeded();
      $.cop3_fm1.MarkAsNoLongerNeeded();
      $.cop4_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat1 = 1;
      // SCM GOSUB swat_car_one
      await swat_car_one();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.swatvan_fm1.IsUpsidedown() && $.swatvan_fm1.IsStopped()) {
      $.swatvan_fm1.MarkAsNoLongerNeeded();
      $.cop1_fm1.MarkAsNoLongerNeeded();
      $.cop2_fm1.MarkAsNoLongerNeeded();
      $.cop3_fm1.MarkAsNoLongerNeeded();
      $.cop4_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat1 = 1;
      // SCM GOSUB swat_car_one
      await swat_car_one();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.swatvan_fm1.IsInWater()) {
      $.swatvan_fm1.MarkAsNoLongerNeeded();
      $.cop1_fm1.MarkAsNoLongerNeeded();
      $.cop2_fm1.MarkAsNoLongerNeeded();
      $.cop3_fm1.MarkAsNoLongerNeeded();
      $.cop4_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat1 = 1;
      // SCM GOSUB swat_car_one
      await swat_car_one();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.timera_reset == 1) {
      if (!($.swatvan_fm1.IsStopped())) {
        $.timera_reset = 0;
      }
    }
    if ($.swatvan_fm1.IsStopped()) {
      if ($.timera_reset == 0) {
        TIMERA = 0;
        $.timera_reset = 1;
      }
      if (TIMERA > 5000 && $.timera_reset == 1) {
        $.swatvan_fm1.MarkAsNoLongerNeeded();
        $.cop1_fm1.MarkAsNoLongerNeeded();
        $.cop2_fm1.MarkAsNoLongerNeeded();
        $.cop3_fm1.MarkAsNoLongerNeeded();
        $.cop4_fm1.MarkAsNoLongerNeeded();
        $.create_more_swat1 = 1;
        // SCM GOSUB swat_car_one
        await swat_car_one();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.swatvan_fm1.Locate3D($.swat1_stuck_x, $.swat1_stuck_y, $.swat1_stuck_z, 2.0, 2.0, 2.0, 0)) {
      if ($.timerc_reset_flag_f1a == 0) {
        $.timerc_started_f1a = Clock.GetGameTimer();
        $.timerc_reset_flag_f1a = 1;
      }
      if ($.timerc_reset_flag_f1a == 1) {
        $.timerc_current_f1a = Clock.GetGameTimer();
        $.timerc_f1a = $.timerc_current_f1a - $.timerc_started_f1a;
        if ($.timerc_f1a > 8000) {
          $.swatvan_fm1.MarkAsNoLongerNeeded();
          $.cop1_fm1.MarkAsNoLongerNeeded();
          $.cop2_fm1.MarkAsNoLongerNeeded();
          $.cop3_fm1.MarkAsNoLongerNeeded();
          $.cop4_fm1.MarkAsNoLongerNeeded();
          $.create_more_swat1 = 1;
          // SCM GOSUB swat_car_one
          await swat_car_one();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
    }
    if (!($.swatvan_fm1.Locate3D($.swat1_stuck_x, $.swat1_stuck_y, $.swat1_stuck_z, 2.0, 2.0, 2.0, 0))) {
      [$.swat1_stuck_x, $.swat1_stuck_y, $.swat1_stuck_z] = $.swatvan_fm1.GetCoordinates();
      $.timerc_reset_flag_f1a = 0;
    }
    if (Car.IsDead($.swatvan2_fm1)) {
      $.swatvan2_fm1.MarkAsNoLongerNeeded();
      $.cop5_fm1.MarkAsNoLongerNeeded();
      $.cop6_fm1.MarkAsNoLongerNeeded();
      $.cop7_fm1.MarkAsNoLongerNeeded();
      $.cop8_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat2 = 1;
      // SCM GOSUB swat_car_two
      await swat_car_two();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.swatvan2_fm1.IsUpsidedown() && $.swatvan2_fm1.IsStopped()) {
      $.swatvan2_fm1.MarkAsNoLongerNeeded();
      $.cop5_fm1.MarkAsNoLongerNeeded();
      $.cop6_fm1.MarkAsNoLongerNeeded();
      $.cop7_fm1.MarkAsNoLongerNeeded();
      $.cop8_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat2 = 1;
      // SCM GOSUB swat_car_two
      await swat_car_two();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.swatvan2_fm1.IsInWater()) {
      $.swatvan2_fm1.MarkAsNoLongerNeeded();
      $.cop5_fm1.MarkAsNoLongerNeeded();
      $.cop6_fm1.MarkAsNoLongerNeeded();
      $.cop7_fm1.MarkAsNoLongerNeeded();
      $.cop8_fm1.MarkAsNoLongerNeeded();
      $.create_more_swat2 = 1;
      // SCM GOSUB swat_car_two
      await swat_car_two();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if ($.timerb_reset == 1) {
      if (!($.swatvan2_fm1.IsStopped())) {
        $.timerb_reset = 0;
      }
    }
    if ($.swatvan2_fm1.IsStopped()) {
      if ($.timerb_reset == 0) {
        TIMERB = 0;
        $.timerb_reset = 1;
      }
      if (TIMERB > 5000 && $.timerb_reset == 1) {
        $.swatvan2_fm1.MarkAsNoLongerNeeded();
        $.cop5_fm1.MarkAsNoLongerNeeded();
        $.cop6_fm1.MarkAsNoLongerNeeded();
        $.cop7_fm1.MarkAsNoLongerNeeded();
        $.cop8_fm1.MarkAsNoLongerNeeded();
        $.create_more_swat2 = 1;
        // SCM GOSUB swat_car_two
        await swat_car_two();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.swatvan2_fm1.Locate3D($.swat2_stuck_x, $.swat2_stuck_y, $.swat2_stuck_z, 2.0, 2.0, 2.0, 0)) {
      if ($.timerc_reset_flag_f1b == 0) {
        $.timerc_started_f1b = Clock.GetGameTimer();
        $.timerc_reset_flag_f1b = 1;
      }
      if ($.timerc_reset_flag_f1b == 1) {
        $.timerc_current_f1b = Clock.GetGameTimer();
        $.timerc_f1b = $.timerc_current_f1b - $.timerc_started_f1b;
        if ($.timerc_f1b > 8000) {
          $.swatvan2_fm1.MarkAsNoLongerNeeded();
          $.cop5_fm1.MarkAsNoLongerNeeded();
          $.cop6_fm1.MarkAsNoLongerNeeded();
          $.cop7_fm1.MarkAsNoLongerNeeded();
          $.cop8_fm1.MarkAsNoLongerNeeded();
          $.create_more_swat2 = 1;
          // SCM GOSUB swat_car_two
          await swat_car_two();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
    }
    if (!($.swatvan2_fm1.Locate3D($.swat2_stuck_x, $.swat2_stuck_y, $.swat2_stuck_z, 2.0, 2.0, 2.0, 0))) {
      [$.swat2_stuck_x, $.swat2_stuck_y, $.swat2_stuck_z] = $.swatvan2_fm1.GetCoordinates();
      $.timerc_reset_flag_f1b = 0;
    }
    if ($.swatvan_fm1.Locate2D(1252.0, -1086.0, 8.0, 8.0, 0) && $.swat1_exit_car == 0) {
      if ($.swat_cam_needs_restoring == 1) {
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        $.player.SetControl(1 /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
        Hud.SwitchWidescreen(0 /* OFF */);
        Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
        Camera.SetGenerateCarsAround(0 /* FALSE */);
        $.swat_cam_needs_restoring = 0;
      }
      if ($.chico_audio_flag == 21) {
        if (!(Char.IsDead($.doorman1))) {
          [$.chico_x, $.chico_y, $.chico_z] = $.doorman1.GetCoordinates();
          Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
        }
        else {
          $.doorman1.MarkAsNoLongerNeeded();
          if (!(Char.IsDead($.doorman2))) {
            [$.chico_x, $.chico_y, $.chico_z] = $.doorman2.GetCoordinates();
            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
          }
          else {
            $.doorman2.MarkAsNoLongerNeeded();
          }
        }
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_TT, 5000, 1);
        $.chico_audio_flag = 22;
      }
      $.swatvan_fm1.SetCruiseSpeed(0.0);
      if (!(Char.IsDead($.cop1_fm1))) {
        $.cop1_fm1.SetObjLeaveCar($.swatvan_fm1);
        $.cop1_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop1_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop2_fm1))) {
        $.cop2_fm1.SetObjLeaveCar($.swatvan_fm1);
        $.cop2_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop2_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop3_fm1))) {
        $.cop3_fm1.SetObjLeaveCar($.swatvan_fm1);
        $.cop3_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop3_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop4_fm1))) {
        $.cop4_fm1.SetObjLeaveCar($.swatvan_fm1);
        $.cop4_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop4_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.doorman2)) && !(Char.IsDead($.cop1_fm1))) {
        $.doorman2.SetObjKillCharOnFoot($.cop1_fm1);
      }
      $.swat1_exit_car = 1;
    }
    if ($.swatvan2_fm1.Locate2D(1235.0, -1099.0, 8.0, 8.0, 0) && $.swat2_exit_car == 0) {
      if ($.swat_cam_needs_restoring == 1) {
        Camera.RestoreJumpcut();
        Camera.SetBehindPlayer();
        $.player.SetControl(1 /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
        Hud.SwitchWidescreen(0 /* OFF */);
        Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
        Camera.SetGenerateCarsAround(0 /* FALSE */);
        $.swat_cam_needs_restoring = 0;
      }
      if ($.chico_audio_flag == 21) {
        if (!(Char.IsDead($.doorman1))) {
          [$.chico_x, $.chico_y, $.chico_z] = $.doorman1.GetCoordinates();
          Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
        }
        else {
          if (!(Char.IsDead($.doorman2))) {
            [$.chico_x, $.chico_y, $.chico_z] = $.doorman2.GetCoordinates();
            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
          }
        }
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_TT, 5000, 1);
        $.chico_audio_flag = 22;
      }
      $.swatvan2_fm1.SetCruiseSpeed(0.0);
      if (!(Char.IsDead($.cop5_fm1))) {
        $.cop5_fm1.SetObjLeaveCar($.swatvan2_fm1);
        $.cop5_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop5_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop6_fm1))) {
        $.cop6_fm1.SetObjLeaveCar($.swatvan2_fm1);
        $.cop6_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop6_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop7_fm1))) {
        $.cop7_fm1.SetObjLeaveCar($.swatvan2_fm1);
        $.cop7_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop7_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.cop8_fm1))) {
        $.cop8_fm1.SetObjLeaveCar($.swatvan2_fm1);
        $.cop8_fm1.SetHeedThreats(1 /* TRUE */);
      }
      else {
        $.cop8_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.doorman1)) && !(Char.IsDead($.cop5_fm1))) {
        $.doorman1.SetObjKillCharOnFoot($.cop5_fm1);
      }
      $.swat2_exit_car = 1;
    }
  }
  if ($.swat_cam_needs_restoring == 1) {
    Camera.SetBehindPlayer();
    Camera.RestoreJumpcut();
    $.player.SetControl(1 /* ON */);
    Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
    Hud.SwitchWidescreen(0 /* OFF */);
    Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
    Camera.SetGenerateCarsAround(0 /* FALSE */);
    $.swat_cam_needs_restoring = 0;
  }
  while ($.clubbers_flee_flag < 10) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.chico_audio_flag == 23) {
      if (Audio.HasMissionAudioLoaded()) {
        $.chico_audio_flag = 24;
      }
    }
    if ($.chico_audio_flag == 22) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_J);
        $.chico_audio_flag = 23;
      }
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.clubbers_flee_flag == 0) {
      $.clubber1_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`P_MAN1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
      $.clubber1_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
      $.clubber1_fm1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 99);
      $.clubber1_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.clubber1_fm1.SetRunning(1 /* TRUE */);
      $.clubber1_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
      $.clubbers_flee_flag = 1;
    }
    if ($.clubbers_flee_flag == 1) {
      if (Char.IsDead($.clubber1_fm1)) {
        $.clubber1_fm1.MarkAsNoLongerNeeded();
        $.clubber2_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber2_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber2_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber2_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber2_fm1.SetRunning(1 /* TRUE */);
        $.clubber2_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 2;
      }
      else {
        if (!($.clubber1_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber2_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber2_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber2_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber2_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber2_fm1.SetRunning(1 /* TRUE */);
          $.clubber2_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 2;
        }
      }
    }
    if ($.clubbers_flee_flag == 2) {
      if (Char.IsDead($.clubber2_fm1)) {
        $.clubber2_fm1.MarkAsNoLongerNeeded();
        $.clubber3_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber3_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber3_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber3_fm1.SetRunning(1 /* TRUE */);
        $.clubber3_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber3_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 3;
        $.clubber3_car1 = 1;
      }
      else {
        if (!($.clubber2_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber3_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber3_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber3_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber3_fm1.SetRunning(1 /* TRUE */);
          $.clubber3_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber3_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 3;
          $.clubber3_car1 = 1;
        }
      }
    }
    if ($.clubbers_flee_flag == 3) {
      if (Char.IsDead($.clubber3_fm1)) {
        $.clubber3_fm1.MarkAsNoLongerNeeded();
        $.clubber4_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber4_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber4_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber4_fm1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 99);
        $.clubber4_fm1.SetRunning(1 /* TRUE */);
        $.clubber4_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 4;
      }
      else {
        if (!($.clubber3_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber4_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber4_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber4_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber4_fm1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 99);
          $.clubber4_fm1.SetRunning(1 /* TRUE */);
          $.clubber4_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 4;
        }
      }
    }
    if ($.clubbers_flee_flag == 4) {
      if (Char.IsDead($.clubber4_fm1)) {
        $.clubber4_fm1.MarkAsNoLongerNeeded();
        $.clubber5_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber5_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber5_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber5_fm1.SetRunning(1 /* TRUE */);
        $.clubber5_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber5_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 5;
        $.clubber5_car2 = 1;
      }
      else {
        if (!($.clubber4_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber5_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber5_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber5_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber5_fm1.SetRunning(1 /* TRUE */);
          $.clubber5_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber5_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 5;
          $.clubber5_car2 = 1;
        }
      }
    }
    if ($.clubbers_flee_flag == 5) {
      if (Char.IsDead($.clubber5_fm1)) {
        $.clubber5_fm1.MarkAsNoLongerNeeded();
        $.clubber6_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber6_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber6_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber6_fm1.SetRunning(1 /* TRUE */);
        $.clubber6_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber6_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 6;
      }
      else {
        if (!($.clubber5_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber6_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`CRIMINAL1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber6_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber6_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber6_fm1.SetRunning(1 /* TRUE */);
          $.clubber6_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber6_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 6;
        }
      }
    }
    if ($.clubbers_flee_flag == 6) {
      if (Char.IsDead($.clubber6_fm1)) {
        $.clubber6_fm1.MarkAsNoLongerNeeded();
        $.clubber7_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber7_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber7_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber7_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber7_fm1.SetRunning(1 /* TRUE */);
        $.clubber7_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 7;
      }
      else {
        if (!($.clubber6_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber7_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`FEMALE1`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber7_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber7_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber7_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber7_fm1.SetRunning(1 /* TRUE */);
          $.clubber7_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 7;
        }
      }
    }
    if ($.clubbers_flee_flag == 7) {
      if (Char.IsDead($.clubber7_fm1)) {
        $.clubber7_fm1.MarkAsNoLongerNeeded();
        $.clubber8_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.clubber8_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
        $.clubber8_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.clubber8_fm1.SetRunning(1 /* TRUE */);
        $.clubber8_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
        $.clubber8_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
        $.clubbers_flee_flag = 8;
        $.clubber8_car3 = 1;
      }
      else {
        if (!($.clubber7_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          $.clubber8_fm1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.clubber8_fm1.SetThreatSearch(13 /* THREAT_GANG_HOOD */);
          $.clubber8_fm1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.clubber8_fm1.SetRunning(1 /* TRUE */);
          $.clubber8_fm1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 50);
          $.clubber8_fm1.SetObjRunToCoord($.outside_warehouse_x, $.outside_warehouse_y);
          $.clubbers_flee_flag = 8;
          $.clubber8_car3 = 1;
        }
      }
    }
    if ($.clubbers_flee_flag == 8) {
      if (Char.IsDead($.clubber8_fm1)) {
        $.clubber8_fm1.MarkAsNoLongerNeeded();
        if ($.swat_cam_needs_restoring == 1) {
          Camera.RestoreJumpcut();
          Camera.SetBehindPlayer();
          $.player.SetControl(1 /* ON */);
          Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
          Hud.SwitchWidescreen(0 /* OFF */);
          Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
          Camera.SetGenerateCarsAround(0 /* FALSE */);
          $.swat_cam_needs_restoring = 0;
        }
        $.maria_exists = 1;
        $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
        $.maria.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
        $.maria.AddArmor(100);
        $.maria.ClearThreatSearch();
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForChar($.maria);
        Text.PrintNow(FM1_5, 4000, 2);
        $.player.AlterWantedLevelNoDrop(2);
        $.maria.SetRunning(1 /* TRUE */);
        [$.chico_x, $.chico_y, $.chico_z] = $.player.GetCoordinates();
        $.maria.SetObjRunToCoord($.chico_x, $.chico_y);
        $.clubbers_flee_flag = 9;
      }
      else {
        if (!($.clubber8_fm1.LocateAnyMeans2D($.inside_warehouse_x, $.inside_warehouse_y, 2.0, 2.0, 0))) {
          if ($.swat_cam_needs_restoring == 1) {
            Camera.RestoreJumpcut();
            Camera.SetBehindPlayer();
            $.player.SetControl(1 /* ON */);
            Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
            Hud.SwitchWidescreen(0 /* OFF */);
            Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
            Camera.SetGenerateCarsAround(0 /* FALSE */);
            $.swat_cam_needs_restoring = 0;
          }
          $.maria_exists = 1;
          $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, $.inside_warehouse_x, $.inside_warehouse_y, $.inside_warehouse_z);
          $.maria.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
          $.maria.AddArmor(100);
          $.maria.ClearThreatSearch();
          $.fm1_blip.Remove();
          $.fm1_blip = Blip.AddForChar($.maria);
          Text.PrintNow(FM1_5, 4000, 2);
          $.player.AlterWantedLevelNoDrop(2);
          $.maria.SetRunning(1 /* TRUE */);
          [$.chico_x, $.chico_y, $.chico_z] = $.player.GetCoordinates();
          $.maria.SetObjRunToCoord($.chico_x, $.chico_y);
          $.clubbers_flee_flag = 9;
        }
      }
    }
    if ($.clubbers_flee_flag == 9) {
      if (Char.IsDead($.maria)) {
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
      else {
        $.maria.SetObjGotoPlayerOnFoot($.player);
        if ($.player.LocateAnyMeansChar2D($.maria, 4.0, 4.0, 0)) {
          $.maria.FollowPlayer($.player);
          $.fm1_blip.Remove();
          $.clubbers_flee_flag = 10;
        }
      }
    }
    if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
      // SCM GOSUB clubbers_into_cars
      await clubbers_into_cars();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB police_idle_checks
    await police_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB clubber_idle_checks
    await clubber_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.fuckup_flag == 2) {
      $.swat1_exit_car = 0;
      $.swat2_exit_car = 0;
      $.fuckup_flag = 3;
    }
    if ($.swat1_exit_car == 0) {
      if ($.swatvan_fm1.LocateStopped2D(1252.0, -1086.0, 18.0, 18.0, 0)) {
        if ($.chico_audio_flag == 21) {
          if (!(Char.IsDead($.doorman1))) {
            [$.chico_x, $.chico_y, $.chico_z] = $.doorman1.GetCoordinates();
            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
          }
          else {
            $.doorman1.MarkAsNoLongerNeeded();
            if (!(Char.IsDead($.doorman2))) {
              [$.chico_x, $.chico_y, $.chico_z] = $.doorman2.GetCoordinates();
              Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
            }
            else {
              $.doorman2.MarkAsNoLongerNeeded();
            }
          }
          Audio.PlayMissionAudio();
          Text.PrintNow(FM1_TT, 5000, 1);
          $.chico_audio_flag = 22;
        }
        if (!(Char.IsDead($.cop1_fm1))) {
          $.cop1_fm1.SetObjLeaveCar($.swatvan_fm1);
          $.cop1_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop1_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop2_fm1))) {
          $.cop2_fm1.SetObjLeaveCar($.swatvan_fm1);
          $.cop2_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop2_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop3_fm1))) {
          $.cop3_fm1.SetObjLeaveCar($.swatvan_fm1);
          $.cop3_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop3_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop4_fm1))) {
          $.cop4_fm1.SetObjLeaveCar($.swatvan_fm1);
          $.cop4_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop4_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.doorman2)) && !(Char.IsDead($.cop1_fm1))) {
          $.doorman2.SetObjKillCharOnFoot($.cop1_fm1);
        }
        $.swat1_exit_car = 1;
      }
    }
    if ($.swat2_exit_car == 0) {
      if ($.swatvan2_fm1.LocateStopped2D(1235.0, -1099.0, 18.0, 18.0, 0)) {
        if ($.chico_audio_flag == 21) {
          if (!(Char.IsDead($.doorman1))) {
            [$.chico_x, $.chico_y, $.chico_z] = $.doorman1.GetCoordinates();
            Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
          }
          else {
            $.doorman1.MarkAsNoLongerNeeded();
            if (!(Char.IsDead($.doorman2))) {
              [$.chico_x, $.chico_y, $.chico_z] = $.doorman2.GetCoordinates();
              Audio.SetMissionAudioPosition($.chico_x, $.chico_y, $.chico_z);
            }
            else {
              $.doorman2.MarkAsNoLongerNeeded();
            }
          }
          Audio.PlayMissionAudio();
          Text.PrintNow(FM1_TT, 5000, 1);
          $.chico_audio_flag = 22;
        }
        if (!(Char.IsDead($.cop5_fm1))) {
          $.cop5_fm1.SetObjLeaveCar($.swatvan2_fm1);
          $.cop5_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop5_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop6_fm1))) {
          $.cop6_fm1.SetObjLeaveCar($.swatvan2_fm1);
          $.cop6_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop6_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop7_fm1))) {
          $.cop7_fm1.SetObjLeaveCar($.swatvan2_fm1);
          $.cop7_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop7_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.cop8_fm1))) {
          $.cop8_fm1.SetObjLeaveCar($.swatvan2_fm1);
          $.cop8_fm1.SetHeedThreats(1 /* TRUE */);
        }
        else {
          $.cop8_fm1.MarkAsNoLongerNeeded();
        }
        if (!(Char.IsDead($.doorman1)) && !(Char.IsDead($.cop5_fm1))) {
          $.doorman1.SetObjKillCharOnFoot($.cop5_fm1);
        }
        $.swat2_exit_car = 1;
      }
    }
  }
  $.swatvan_fm1.MarkAsNoLongerNeeded();
  $.swatvan2_fm1.MarkAsNoLongerNeeded();
  while (!($.maria.IsInAnyCar())) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.chico_audio_flag == 23) {
      if (Audio.HasMissionAudioLoaded()) {
        $.chico_audio_flag = 24;
      }
    }
    if ($.chico_audio_flag == 22) {
      if (Audio.HasMissionAudioFinished()) {
        Audio.LoadMissionAudio(S1_J);
        $.chico_audio_flag = 23;
      }
    }
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (!($.maria.IsInPlayersGroup($.player)) && $.flag_blip_on_maria == 0) {
      Text.PrintNow(FM1_10, 5000, 1);
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForChar($.maria);
      $.flag_blip_on_maria = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.maria, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_maria == 1) {
      $.maria.FollowPlayer($.player);
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
      $.flag_blip_on_maria = 0;
    }
    if ($.flag_blip_on_maria == 0) {
      if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForCar($.frankies_limo);
        Text.PrintNow("FM1_1", 5000, 1);
        $.flag_blip_on_limo = 1;
      }
      if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForChar($.maria);
        $.flag_blip_on_limo = 0;
      }
    }
    if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
      // SCM GOSUB clubbers_into_cars
      await clubbers_into_cars();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB police_idle_checks
    await police_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB clubber_idle_checks
    await clubber_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.fm1_blip.Remove();
  $.flag_blip_on_maria = 0;
  $.flag_blip_on_limo = 0;
  $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
  await asyncWait(0);
  if (!($.chico_audio_flag == 24)) {
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
      // SCM GOSUB draw_disco_lights
      await draw_disco_lights();
      // fallback if label was not emitted as async function: no-op continues linearly
      if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
        // SCM GOSUB clubbers_into_cars
        await clubbers_into_cars();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      // SCM GOSUB police_idle_checks
      await police_idle_checks();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB clubber_idle_checks
      await clubber_idle_checks();
      // fallback if label was not emitted as async function: no-op continues linearly
      if (Char.IsDead($.maria)) {
        Text.PrintNow(FM1_7, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.frankies_limo)) {
        Text.PrintNow(WRECKED, 5000, 1);
        // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
      }
      if (!($.maria.IsInPlayersGroup($.player)) && $.flag_blip_on_maria == 0) {
        Text.PrintNow(FM1_10, 5000, 1);
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForChar($.maria);
        $.flag_blip_on_maria = 1;
      }
      if ($.player.LocateAnyMeansChar2D($.maria, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_maria == 1) {
        $.maria.FollowPlayer($.player);
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
        $.flag_blip_on_maria = 0;
      }
      if ($.flag_blip_on_maria == 0) {
        if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
          $.fm1_blip.Remove();
          $.fm1_blip = Blip.AddForCar($.frankies_limo);
          Text.PrintNow("FM1_1", 5000, 1);
          $.flag_blip_on_limo = 1;
        }
        if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
          $.fm1_blip.Remove();
          $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
          $.flag_blip_on_limo = 0;
        }
      }
      // SCM GOSUB police_idle_checks
      await police_idle_checks();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB clubber_idle_checks
      await clubber_idle_checks();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    $.chico_audio_flag = 24;
  }
  Audio.PlayMissionAudio();
  Text.PrintNow(FM1_X, 5000, 1);
  $.frankie_garage.ChangeType(21 /* GARAGE_MISSION_KEEPCAR_REMAINCLOSED */);
  if (!(Car.IsDead($.frankies_limo))) {
    $.frankie_garage.SetTargetCarForMission($.frankies_limo);
  }
  while (!($.frankie_garage.IsCarInMission())) {
    await asyncWait(0);
    // SCM GOSUB draw_disco_lights
    await draw_disco_lights();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.frankies_limo)) {
      Text.PrintNow(WRECKED, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.frankies_limo.Locate2D(1424.8, -183.0, 20.0, 20.0, 0)) {
      $.player.ClearWantedLevel();
    }
    if (!($.maria.IsInPlayersGroup($.player)) && $.flag_blip_on_maria == 0) {
      Text.PrintNow(FM1_10, 5000, 1);
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForChar($.maria);
      $.flag_blip_on_maria = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.maria, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_maria == 1) {
      $.maria.FollowPlayer($.player);
      $.fm1_blip.Remove();
      $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
      $.flag_blip_on_limo = 0;
      $.flag_blip_on_maria = 0;
    }
    if ($.flag_blip_on_maria == 0) {
      if (!($.player.IsInCar($.frankies_limo)) && $.flag_blip_on_limo == 0) {
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForCar($.frankies_limo);
        Text.PrintNow("FM1_1", 5000, 1);
        $.flag_blip_on_limo = 1;
      }
      if ($.player.IsInCar($.frankies_limo) && $.flag_blip_on_limo == 1) {
        $.fm1_blip.Remove();
        $.fm1_blip = Blip.AddForCoord(1424.0, -183.5, 50.0);
        $.flag_blip_on_limo = 0;
      }
    }
    if (!($.clubber3_car1 == 3) || !($.clubber5_car2 == 3) || !($.clubber8_car3 == 3)) {
      // SCM GOSUB clubbers_into_cars
      await clubbers_into_cars();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB police_idle_checks
    await police_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB clubber_idle_checks
    await clubber_idle_checks();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.player.ClearWantedLevel();
  Camera.DoFade(500, 0 /* FADE_OUT */);
  await asyncWait(500);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  if (Char.IsDead($.maria)) {
    Text.PrintNow(FM1_7, 5000, 1);
    // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
  }
  $.maria.LeaveGroup();
  $.player.ClearWantedLevel();
  $.player.WarpFromCarToCoord(1435.7676, -176.4341, 52.2953);
  $.player.SetHeading(184.9588);
  $.maria_exists = 0;
  $.maria.Delete();
  $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1435.9358, -178.4347, 54.0279);
  $.maria_exists = 1;
  $.maria.SetHeading(184.9134);
  $.script_controlled_player = $.player.GetChar();
  $.maria.ClearThreatSearch();
  $.script_controlled_player.ClearThreatSearch();
  Camera.SetFixedPosition(1433.4507, -173.6104, 55.66595, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.maria, 15 /* FIXED */, 2 /* JUMP_CUT */);
  $.maria.SetObjGotoCoordOnFoot(1436.2628, -180.6451);
  $.script_controlled_player.SetObjGotoCoordOnFoot(1436.2628, -180.6451);
  $.frankies_limo.Delete();
  World.ClearArea(1423.9675, -189.2235, 49.2032, 5.0, 0 /* FALSE */);
  Camera.DoFade(500, 1 /* FADE_IN */);
  Audio.LoadMissionAudio(S1_K);
  $.flag_blip_on_maria = 0;
  $.skip_cutscene_flag = 0;
  while (!($.flag_blip_on_maria == 8)) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow(FM1_7, 5000, 1);
      // SCM GOTO → mission_frankie1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie1_failed"); // fallback: would break linear control flow
    }
    if ($.skip_cutscene_flag == 0) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */))) {
        $.skip_cutscene_flag = 1;
      }
    }
    if ($.skip_cutscene_flag == 1) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        $.skip_cutscene_flag = 2;
      }
    }
    if ($.skip_cutscene_flag == 2) {
      if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */))) {
        Camera.DoFade(0, 0 /* FADE_OUT */);
        await asyncWait(0);
        Audio.ClearMissionAudio();
        Text.ClearSmallPrints();
        Hud.SwitchWidescreen(0 /* OFF */);
        $.player.SetControl(1 /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
        Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
        $.maria.Delete();
        $.player.SetCoordinates(1443.6184, -188.2894, 55.0);
        $.player.SetHeading(180.0);
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        Camera.DoFade(500, 1 /* FADE_IN */);
        $.skip_cutscene_flag = 3;
        // SCM GOTO → mission_frankie1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie1_passed"); // fallback: would break linear control flow
      }
    }
    if ($.flag_blip_on_maria == 7) {
      if ($.player.LocateAnyMeans2D(1443.6184, -188.2894, 1.0, 1.0, 0)) {
        if (!($.maria.IsOnScreen())) {
          $.maria_exists = 0;
          $.maria.Delete();
          $.flag_blip_on_maria = 8;
        }
      }
    }
    if ($.flag_blip_on_maria == 6) {
      if (Audio.HasMissionAudioFinished()) {
        Text.ClearSmallPrints();
        $.maria.SetWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.script_controlled_player.SetObjGotoCoordOnFoot(1443.6184, -188.2894);
        $.maria.SetObjGotoCoordOnFoot(1453.5276, -179.3224);
        $.flag_blip_on_maria = 7;
      }
    }
    if ($.flag_blip_on_maria == 5) {
      if (Audio.HasMissionAudioLoaded()) {
        [$.chico_x, $.chico_y, $.chico_z] = $.maria.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_AA, 8000, 1);
        $.flag_blip_on_maria = 6;
      }
    }
    if ($.flag_blip_on_maria == 4) {
      if (Audio.HasMissionAudioFinished()) {
        $.script_controlled_player.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.script_controlled_player);
        Audio.LoadMissionAudio(S1_L);
        $.flag_blip_on_maria = 5;
      }
    }
    if ($.flag_blip_on_maria == 3) {
      if (Audio.HasMissionAudioLoaded()) {
        $.script_controlled_player.TurnToFaceChar($.maria);
        $.maria.TurnToFaceChar($.script_controlled_player);
        [$.chico_x, $.chico_y, $.chico_z] = $.maria.GetCoordinates();
        Audio.PlayMissionAudio();
        Text.PrintNow(FM1_Y, 8000, 1);
        $.maria.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 20000);
        $.flag_blip_on_maria = 4;
      }
    }
    if ($.flag_blip_on_maria == 2) {
      if ($.maria.LocateStoppedOnFoot2D(1440.5144, -179.1538, 1.0, 1.0, 0)) {
        $.swat1_stuck_x = $.maria.GetHeading();
        $.swat1_stuck_x -= 3.0;
        if ($.swat1_stuck_x < 0.0) {
          $.swat1_stuck_x = 359.0;
        }
        if ($.swat1_stuck_x < 180.0) {
          $.swat1_stuck_x = 180.0;
        }
        $.maria.SetHeading($.swat1_stuck_x);
        $.maria.LookAtPlayerAlways($.player);
        if ($.player.LocateStoppedOnFoot2D(1440.6287, -181.4022, 1.0, 1.0, 0)) {
          $.maria.StopLooking();
          Camera.SetFixedPosition(1442.1001, -173.1516, 55.8166, 0.0, 0.0, 0.0);
          Camera.PointAtPoint(1441.78, -174.0602, 55.6919, 2 /* JUMP_CUT */);
          $.player.SetHeading(0.0);
          $.script_controlled_player.TurnToFaceChar($.maria);
          $.player.TurnToFaceChar($.maria);
          $.maria.TurnToFaceChar($.script_controlled_player);
          $.flag_blip_on_maria = 3;
        }
      }
    }
    if ($.flag_blip_on_maria == 1) {
      if ($.player.LocateOnFoot2D(1436.2628, -180.6451, 1.0, 1.0, 0)) {
        $.script_controlled_player.SetObjGotoCoordOnFoot(1440.6287, -181.4022);
        $.flag_blip_on_maria = 2;
      }
    }
    if ($.flag_blip_on_maria == 0) {
      if ($.maria.LocateOnFoot2D(1436.2628, -180.6451, 1.0, 1.0, 0)) {
        $.maria.SetObjGotoCoordOnFoot(1440.5144, -179.1538);
        $.flag_blip_on_maria = 1;
      }
    }
  }
  Camera.SetBehindPlayer();
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  // SCM GOTO → mission_frankie1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_frankie1_passed"); // fallback: would break linear control flow
  }
}

async function mission_frankie1_failed() {
  Text.PrintBig("m_fail", 5000, 1);
  return;
}

async function mission_frankie1_passed() {
  $.flag_frankie_mission1_passed = 1;
  if ($.flag_luigi_mission4_terminated == 1) {
    // START_NEW_SCRIPT luigi_mission4_loop
    $.luigi_contact_blip.Remove();
    $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
  }
  if ($.flag_luigi_mission5_terminated == 1) {
    // START_NEW_SCRIPT luigi_mission5_loop
    $.luigi_contact_blip.Remove();
    $.luigi_contact_blip = Blip.AddSpriteForContactPoint(886.2, -417.1, -100.0, 13 /* RADAR_SPRITE_LUIGI */);
  }
  if ($.flag_joey_mission5_terminated == 1) {
    // START_NEW_SCRIPT joey_mission5_loop
    $.joey_contact_blip.Remove();
    $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
  }
  if ($.flag_joey_mission6_terminated == 1) {
    // START_NEW_SCRIPT joey_mission6_loop
    $.joey_contact_blip.Remove();
    $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
  }
  Text.PrintWithNumberBig(m_pass, 10000, 5000, 1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed(FM1);
  Stat.PlayerMadeProgress(1);
  $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, 26.4, 19 /* RADAR_SPRITE_TONY */);
  // START_NEW_SCRIPT toni_mission4_loop
  // START_NEW_SCRIPT frankie_mission2_loop
  // START_NEW_SCRIPT imp_exp_pager
  return;
}

async function mission_cleanup_frankie1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  if ($.add_sound_flag == 1) {
    $.warehouse_rave_loop.Remove();
  }
  World.RemoveParticleEffectsInArea(1264.0, -1111.0, 5.0, 1275.0, -1103.0, 15.0);
  Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL1`);
  Streaming.MarkModelAsNoLongerNeeded(car`STRETCH`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`);
  Streaming.MarkModelAsNoLongerNeeded(car`MANANA`);
  Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`);
  Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`);
  Streaming.MarkModelAsNoLongerNeeded(ped`P_MAN1`);
  Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE1`);
  Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE2`);
  $.fm1_blip.Remove();
  $.frankie_garage.ChangeType(14 /* GARAGE_MISSION_KEEPCAR */);
  $.frankie_garage.SetTargetCarForMission(-1);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Mission.Finish();
  return;
}

async function clubbers_into_cars() {
  if ($.clubbers_flee_flag > 2) {
    if ($.clubber3_car1 == 1) {
      if (!(Char.IsDead($.clubber3_fm1))) {
        if ($.clubber3_fm1.LocateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, 0)) {
          if (Car.IsStillAlive($.parked_car1)) {
            if ($.parked_car1.Locate2D(1243.0, -1112.0, 8.0, 8.0, 0)) {
              $.clubber3_fm1.SetObjEnterCarAsDriver($.parked_car1);
              $.clubber3_car1 = 2;
            }
            else {
              $.clubber3_fm1.SetHeedThreats(1 /* TRUE */);
              $.parked_car1.MarkAsNoLongerNeeded();
              $.clubber3_fm1.MarkAsNoLongerNeeded();
              $.clubber3_car1 = 3;
            }
          }
          else {
            $.clubber3_fm1.SetHeedThreats(1 /* TRUE */);
            $.parked_car1.MarkAsNoLongerNeeded();
            $.clubber3_fm1.MarkAsNoLongerNeeded();
            $.clubber3_car1 = 3;
          }
        }
      }
      else {
        $.clubber3_fm1.MarkAsNoLongerNeeded();
        $.parked_car1.MarkAsNoLongerNeeded();
        $.clubber3_car1 = 3;
      }
    }
    if ($.clubber3_car1 == 2) {
      if (!(Char.IsDead($.clubber3_fm1))) {
        if (!(Car.IsDead($.parked_car1))) {
          if ($.clubber3_fm1.IsInCar($.parked_car1)) {
            $.parked_car1.SetDrivingStyle(2);
            $.parked_car1.SetCruiseSpeed(100.0);
            $.parked_car1.WanderRandomly();
            $.parked_car1.SetAvoidLevelTransitions(1 /* TRUE */);
            $.parked_car1.MarkAsNoLongerNeeded();
            $.clubber3_car1 = 3;
          }
        }
        else {
          $.clubber3_fm1.SetHeedThreats(1 /* TRUE */);
          $.clubber3_fm1.MarkAsNoLongerNeeded();
          $.parked_car1.MarkAsNoLongerNeeded();
          $.clubber3_car1 = 3;
        }
      }
      else {
        $.parked_car1.MarkAsNoLongerNeeded();
        $.clubber3_fm1.MarkAsNoLongerNeeded();
        $.clubber3_car1 = 3;
      }
    }
  }
  if ($.clubbers_flee_flag > 4) {
    if ($.clubber5_car2 == 1) {
      if (!(Char.IsDead($.clubber5_fm1))) {
        if ($.clubber5_fm1.LocateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, 0)) {
          if (Car.IsStillAlive($.parked_car2)) {
            if ($.parked_car2.Locate2D(1243.0, -1112.0, 8.0, 8.0, 0)) {
              $.clubber5_fm1.SetObjEnterCarAsDriver($.parked_car2);
              $.clubber5_car2 = 2;
            }
            else {
              $.clubber5_fm1.SetHeedThreats(1 /* TRUE */);
              $.clubber5_fm1.MarkAsNoLongerNeeded();
              $.parked_car2.MarkAsNoLongerNeeded();
              $.clubber5_car2 = 3;
            }
          }
          else {
            $.clubber5_fm1.SetHeedThreats(1 /* TRUE */);
            $.clubber5_fm1.MarkAsNoLongerNeeded();
            $.parked_car2.MarkAsNoLongerNeeded();
            $.clubber5_car2 = 3;
          }
        }
      }
      else {
        $.clubber5_fm1.MarkAsNoLongerNeeded();
        $.parked_car2.MarkAsNoLongerNeeded();
        $.clubber5_car2 = 3;
      }
    }
    if ($.clubber5_car2 == 2) {
      if (!(Char.IsDead($.clubber5_fm1))) {
        if (!(Car.IsDead($.parked_car2))) {
          if ($.clubber5_fm1.IsInCar($.parked_car2)) {
            $.parked_car2.SetDrivingStyle(2);
            $.parked_car2.SetCruiseSpeed(100.0);
            $.parked_car2.WanderRandomly();
            $.parked_car2.SetAvoidLevelTransitions(1 /* TRUE */);
            $.parked_car2.MarkAsNoLongerNeeded();
            $.clubber5_car2 = 3;
          }
        }
        else {
          $.clubber5_fm1.SetHeedThreats(1 /* TRUE */);
          $.parked_car2.MarkAsNoLongerNeeded();
          $.clubber5_fm1.MarkAsNoLongerNeeded();
          $.clubber5_car2 = 3;
        }
      }
      else {
        $.parked_car2.MarkAsNoLongerNeeded();
        $.clubber5_fm1.MarkAsNoLongerNeeded();
        $.clubber5_car2 = 3;
      }
    }
  }
  if ($.clubbers_flee_flag > 7) {
    if ($.clubber8_car3 == 1) {
      if (!(Char.IsDead($.clubber8_fm1))) {
        if ($.clubber8_fm1.LocateOnFoot2D($.outside_warehouse_x, $.outside_warehouse_y, 3.0, 3.0, 0)) {
          if (Car.IsStillAlive($.parked_car3)) {
            if ($.parked_car3.Locate2D(1243.0, -1112.0, 8.0, 8.0, 0)) {
              $.clubber8_fm1.SetObjEnterCarAsDriver($.parked_car3);
              $.clubber8_car3 = 2;
            }
            else {
              $.clubber8_fm1.SetHeedThreats(1 /* TRUE */);
              $.clubber8_fm1.MarkAsNoLongerNeeded();
              $.parked_car3.MarkAsNoLongerNeeded();
              $.clubber8_car3 = 3;
            }
          }
          else {
            $.clubber8_fm1.SetHeedThreats(1 /* TRUE */);
            $.clubber8_fm1.MarkAsNoLongerNeeded();
            $.parked_car3.MarkAsNoLongerNeeded();
            $.clubber8_car3 = 3;
          }
        }
      }
      else {
        $.parked_car3.MarkAsNoLongerNeeded();
        $.clubber8_fm1.MarkAsNoLongerNeeded();
        $.clubber8_car3 = 3;
      }
    }
    if ($.clubber8_car3 == 2) {
      if (!(Char.IsDead($.clubber8_fm1))) {
        if (!(Car.IsDead($.parked_car3))) {
          if ($.clubber8_fm1.IsInCar($.parked_car3)) {
            $.parked_car3.SetDrivingStyle(2);
            $.parked_car3.SetCruiseSpeed(100.0);
            $.parked_car3.WanderRandomly();
            $.parked_car3.SetAvoidLevelTransitions(1 /* TRUE */);
            $.parked_car3.MarkAsNoLongerNeeded();
            $.clubber8_car3 = 3;
          }
        }
        else {
          $.clubber8_fm1.SetHeedThreats(1 /* TRUE */);
          $.clubber8_fm1.MarkAsNoLongerNeeded();
          $.parked_car3.MarkAsNoLongerNeeded();
          $.clubber8_car3 = 3;
        }
      }
      else {
        $.clubber8_fm1.MarkAsNoLongerNeeded();
        $.parked_car3.MarkAsNoLongerNeeded();
        $.clubber8_car3 = 3;
      }
    }
  }
  return;
}

async function clubber_idle_checks() {
  if (Char.IsDead($.cop1_fm1) && Char.IsDead($.cop2_fm1) && Char.IsDead($.cop3_fm1) && Char.IsDead($.cop4_fm1) && Char.IsDead($.cop5_fm1) && Char.IsDead($.cop6_fm1)) {
    if (Char.IsDead($.cop7_fm1) && Char.IsDead($.cop8_fm1)) {
      if (!(Char.IsDead($.clubber1_fm1))) {
        $.clubber1_fm1.SetObjFleePlayerOnFootAlways($.player);
        $.clubber1_fm1.MarkAsNoLongerNeeded();
      }
      else {
        $.clubber1_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber2_fm1))) {
        $.clubber2_fm1.WanderDir(-1);
        $.clubber2_fm1.MarkAsNoLongerNeeded();
      }
      else {
        $.clubber2_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber4_fm1))) {
        $.clubber4_fm1.SetObjFleePlayerOnFootAlways($.player);
        $.clubber4_fm1.MarkAsNoLongerNeeded();
      }
      else {
        $.clubber4_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber6_fm1))) {
        $.clubber6_fm1.WanderDir(-1);
        $.clubber6_fm1.MarkAsNoLongerNeeded();
      }
      else {
        $.clubber6_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber7_fm1))) {
        $.clubber7_fm1.SetObjFleePlayerOnFootAlways($.player);
        $.clubber7_fm1.MarkAsNoLongerNeeded();
      }
      else {
        $.clubber7_fm1.MarkAsNoLongerNeeded();
      }
    }
    else {
      if (!(Char.IsDead($.clubber1_fm1))) {
        if ($.clubber1_fm1.IsStopped()) {
          if (!($.clubber1_fm1.IsShooting())) {
            $.clubber1_fm1.WanderDir(-1);
          }
        }
      }
      else {
        $.clubber1_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber2_fm1))) {
        if ($.clubber2_fm1.IsStopped()) {
          if (!($.clubber2_fm1.IsShooting())) {
            $.clubber2_fm1.SetObjFleePlayerOnFootAlways($.player);
          }
        }
      }
      else {
        $.clubber2_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber4_fm1))) {
        if ($.clubber4_fm1.IsStopped()) {
          if (!($.clubber4_fm1.IsShooting())) {
            $.clubber4_fm1.WanderDir(-1);
          }
        }
      }
      else {
        $.clubber4_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber6_fm1))) {
        if ($.clubber6_fm1.IsStopped()) {
          if (!($.clubber6_fm1.IsShooting())) {
            $.clubber6_fm1.SetObjFleePlayerOnFootAlways($.player);
          }
        }
      }
      else {
        $.clubber6_fm1.MarkAsNoLongerNeeded();
      }
      if (!(Char.IsDead($.clubber7_fm1))) {
        if ($.clubber7_fm1.IsStopped()) {
          if (!($.clubber7_fm1.IsShooting())) {
            $.clubber7_fm1.WanderDir(-1);
          }
        }
      }
      else {
        $.clubber7_fm1.MarkAsNoLongerNeeded();
      }
    }
  }
  else {
    if (!(Char.IsDead($.clubber1_fm1))) {
      if ($.clubber1_fm1.IsStopped()) {
        if (!($.clubber1_fm1.IsShooting())) {
          $.clubber1_fm1.WanderDir(-1);
        }
      }
    }
    else {
      $.clubber1_fm1.MarkAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.clubber2_fm1))) {
      if ($.clubber2_fm1.IsStopped()) {
        if (!($.clubber2_fm1.IsShooting())) {
          $.clubber2_fm1.SetObjFleePlayerOnFootAlways($.player);
        }
      }
    }
    else {
      $.clubber2_fm1.MarkAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.clubber4_fm1))) {
      if ($.clubber4_fm1.IsStopped()) {
        if (!($.clubber4_fm1.IsShooting())) {
          $.clubber4_fm1.WanderDir(-1);
        }
      }
    }
    else {
      $.clubber4_fm1.MarkAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.clubber6_fm1))) {
      if ($.clubber6_fm1.IsStopped()) {
        if (!($.clubber6_fm1.IsShooting())) {
          $.clubber6_fm1.SetObjFleePlayerOnFootAlways($.player);
        }
      }
    }
    else {
      $.clubber6_fm1.MarkAsNoLongerNeeded();
    }
    if (!(Char.IsDead($.clubber7_fm1))) {
      if ($.clubber7_fm1.IsStopped()) {
        if (!($.clubber7_fm1.IsShooting())) {
          $.clubber7_fm1.WanderDir(-1);
        }
      }
    }
    else {
      $.clubber7_fm1.MarkAsNoLongerNeeded();
    }
  }
  return;
}

async function police_idle_checks() {
  if (!(Char.IsDead($.cop1_fm1))) {
    $.cop1_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop1_fm1.IsStopped()) {
      if (!($.cop1_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber1_fm1))) {
          $.cop1_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber2_fm1))) {
            $.cop1_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber4_fm1))) {
              $.cop1_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber6_fm1))) {
                $.cop1_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber7_fm1))) {
                  $.cop1_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
                }
                else {
                  $.cop1_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop1_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop1_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop2_fm1))) {
    $.cop2_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop2_fm1.IsStopped()) {
      if (!($.cop2_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber7_fm1))) {
          $.cop2_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber4_fm1))) {
            $.cop2_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber6_fm1))) {
              $.cop2_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber2_fm1))) {
                $.cop2_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber1_fm1))) {
                  $.cop2_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
                }
                else {
                  $.cop2_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop2_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop2_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop3_fm1))) {
    $.cop3_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop3_fm1.IsStopped()) {
      if (!($.cop3_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber7_fm1))) {
          $.cop3_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber4_fm1))) {
            $.cop3_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber6_fm1))) {
              $.cop3_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber2_fm1))) {
                $.cop3_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber1_fm1))) {
                  $.cop3_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
                }
                else {
                  $.cop3_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop3_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop3_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop4_fm1))) {
    $.cop4_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop4_fm1.IsStopped()) {
      if (!($.cop4_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber4_fm1))) {
          $.cop4_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber7_fm1))) {
            $.cop4_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber2_fm1))) {
              $.cop4_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber6_fm1))) {
                $.cop4_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber1_fm1))) {
                  $.cop4_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
                }
                else {
                  $.cop4_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop4_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop4_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop5_fm1))) {
    $.cop5_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop5_fm1.IsStopped()) {
      if (!($.cop5_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber4_fm1))) {
          $.cop5_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber7_fm1))) {
            $.cop5_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber2_fm1))) {
              $.cop5_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber6_fm1))) {
                $.cop5_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber1_fm1))) {
                  $.cop5_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
                }
                else {
                  $.cop5_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop5_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop5_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop6_fm1))) {
    $.cop6_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop6_fm1.IsStopped()) {
      if (!($.cop6_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber4_fm1))) {
          $.cop6_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber1_fm1))) {
            $.cop6_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber2_fm1))) {
              $.cop6_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber7_fm1))) {
                $.cop6_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber6_fm1))) {
                  $.cop6_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
                }
                else {
                  $.cop6_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop6_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop6_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop7_fm1))) {
    $.cop7_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop7_fm1.IsStopped()) {
      if (!($.cop7_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber4_fm1))) {
          $.cop7_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber1_fm1))) {
            $.cop7_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber2_fm1))) {
              $.cop7_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber7_fm1))) {
                $.cop7_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber6_fm1))) {
                  $.cop7_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
                }
                else {
                  $.cop7_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop7_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop7_fm1.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.cop8_fm1))) {
    $.cop8_fm1.SetSay(101 /* SOUND_SWAT_PED_SHOUT */);
    if ($.cop8_fm1.IsStopped()) {
      if (!($.cop8_fm1.IsShooting())) {
        if (!(Char.IsDead($.clubber6_fm1))) {
          $.cop8_fm1.SetObjKillCharOnFoot($.clubber6_fm1);
        }
        else {
          if (!(Char.IsDead($.clubber1_fm1))) {
            $.cop8_fm1.SetObjKillCharOnFoot($.clubber1_fm1);
          }
          else {
            if (!(Char.IsDead($.clubber2_fm1))) {
              $.cop8_fm1.SetObjKillCharOnFoot($.clubber2_fm1);
            }
            else {
              if (!(Char.IsDead($.clubber7_fm1))) {
                $.cop8_fm1.SetObjKillCharOnFoot($.clubber7_fm1);
              }
              else {
                if (!(Char.IsDead($.clubber4_fm1))) {
                  $.cop8_fm1.SetObjKillCharOnFoot($.clubber4_fm1);
                }
                else {
                  $.cop8_fm1.SetObjKillPlayerOnFoot($.player);
                  $.cop8_fm1.MarkAsNoLongerNeeded();
                }
              }
            }
          }
        }
      }
    }
  }
  else {
    $.cop8_fm1.MarkAsNoLongerNeeded();
  }
  return;
}

async function draw_disco_lights() {
  ++$.shadow_counter;
  if ($.shadow_counter > 28 && $.shadow_counter < 32) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1272.5963, -1107.4248, 12.0, 30.0, 0.8, 0, $.R, $.G, 0);
    Fx.DrawLight(1272.45, -1107.6, 13.1, $.R, $.G, 0);
  }
  else {
    $.G = Math.RandomIntInRange(0, 101);
    $.R = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter > 15 && $.shadow_counter < 20) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1270.9584, -1107.6783, 12.0, 0.0, 1.2, 0, $.R1, $.G1, 0);
    Fx.DrawLight(1272.45, -1107.18, 13.1, $.R1, $.G1, 0);
  }
  else {
    $.G1 = Math.RandomIntInRange(0, 101);
    $.R1 = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter > 20 && $.shadow_counter < 40) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1273.3, -1107.0, 12.0, 80.0, 1.0, 0, $.R2, $.G2, 0);
    Fx.DrawLight(1272.45, -1107.6, 12.8, $.R2, $.G2, 0);
  }
  else {
    $.G2 = Math.RandomIntInRange(0, 101);
    $.R2 = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter > 18 && $.shadow_counter < 40) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1273.3, -1107.7, 12.0, 140.0, 0.8, 0, $.R3, $.G3, 0);
    Fx.DrawLight(1272.45, -1107.18, 12.8, $.R3, $.G3, 0);
  }
  else {
    $.G3 = Math.RandomIntInRange(0, 101);
    $.R3 = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter > 5 && $.shadow_counter < 14) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1271.4812, -1108.0588, 12.0, 235.0, 1.1, 0, $.R4, $.G4, 0);
    Fx.DrawLight(1272.45, -1107.6, 12.5, $.R4, $.G4, 0);
  }
  else {
    $.G4 = Math.RandomIntInRange(0, 101);
    $.R4 = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter > 9 && $.shadow_counter < 26) {
    Fx.DrawShadow(3 /* SHADOW_EXPLOSION */, 1271.5570, -1107.0217, 12.0, 325.0, 1.8, 0, $.R5, $.G5, 0);
    Fx.DrawLight(1272.45, -1107.18, 12.5, $.R5, $.G5, 0);
  }
  else {
    $.G5 = Math.RandomIntInRange(0, 101);
    $.R5 = Math.RandomIntInRange(0, 101);
  }
  if ($.shadow_counter == 40 || $.shadow_counter > 40) {
    $.shadow_counter = 0;
  }
  return;
}

async function delete_char_maria() {
  $.maria.Delete();
  return;
}

export async function frank1() {
  // MissionBoundary
  // SCM GOSUB mission_start_frankie1
  await mission_start_frankie1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_frankie1_failed
    await mission_frankie1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_frankie1
  await mission_cleanup_frankie1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT frankies_limo chico chico_message_flag fm1_blip flag_blip_on_limo doorman1 doorman2 parked_car1 parked_car2 parked_car3 timera_reset timerb_reset
  // VAR_INT swatvan_fm1 swatvan2_fm1 cop1_fm1 cop2_fm1 cop3_fm1 cop4_fm1 cop5_fm1 cop6_fm1 cop7_fm1 cop8_fm1 clubbers_flee_flag
  // VAR_INT R G R1 G1 R2 G2 R3 G3 R4 G4 R5 G5 shadow_counter add_sound_flag camera_mode chico_audio_flag
  // VAR_INT clubber1_fm1 clubber2_fm1 clubber3_fm1 clubber4_fm1 clubber5_fm1 clubber6_fm1 clubber7_fm1 clubber8_fm1 maria_blip warehouse_rave_loop
  // VAR_INT clubber3_car1 clubber5_car2 clubber8_car3 flag_blip_on_maria create_more_swat1 create_more_swat2 swat1_exit_car swat2_exit_car
  // VAR_INT timerc_reset_flag_f1a timerc_current_f1a timerc_started_f1a timerc_f1a fuckup_flag fuckup_timer_start fuckup_timer_current fuckup_timer
  // VAR_INT timerc_reset_flag_f1b timerc_current_f1b timerc_started_f1b timerc_f1b locate_dome_flag swat_cam_needs_restoring skip_cutscene_flag
  // VAR_FLOAT swat1_stuck_x swat1_stuck_y swat1_stuck_z
  // VAR_FLOAT swat2_stuck_x swat2_stuck_y swat2_stuck_z
  // VAR_FLOAT chico_x chico_y chico_z inside_warehouse_x inside_warehouse_y inside_warehouse_z outside_warehouse_x outside_warehouse_y
}
