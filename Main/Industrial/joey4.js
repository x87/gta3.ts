// Generated from Main/Industrial/joey4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey4() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  // ScriptName
  await asyncWait(0);
  if ($.tonis_car_created_before == 1) {
    // SCM GOSUB delete_tonis_car
    await delete_tonis_car();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.flag_displayed_wanted_message_jm4 = 0;
  $.flag_displayed_horn_message_jm4 = 0;
  $.Toni_abuse1_done_before = 0;
  $.ojective_triad1_done_before = 0;
  $.ojective_triad2_done_before = 0;
  $.triads_ojective_passed = 0;
  $.tonis_audio_all_finished = 0;
  $.played_tune_before = 0;
  World.SetCarDensityMultiplier(0.0);
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialCharacter(2, tony);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, TONYH);
  Streaming.RequestModel(car`MAFIA`);
  Streaming.RequestModel(car`IDAHO`);
  Streaming.RequestModel(car`STALLION`);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`MAFIA`)) || !(Streaming.HasModelLoaded(car`IDAHO`)) || !(Streaming.HasModelLoaded(car`STALLION`))) {
    await asyncWait(0);
  }
  $.tonis_ride = Car.Create(127 /* CAR_MAFIA */, 1189.72, -864.28, 14.1);
  $.tonis_car_created_before = 1;
  $.tonis_ride.SetHeading(-142.0);
  Audio.SetRadioChannel(1, -1);
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint))) {
    await asyncWait(0);
  }
  Cutscene.Load(J4_ETH);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
  $.cut_car2_lm3 = Car.Create(84 /* CAR_IDAHO */, 1182.5, -857.0, 14.1);
  $.cut_car2_lm3.SetHeading(291.2);
  $.cut_car3_lm3 = Car.Create(122 /* CAR_STALLION */, 1192.9, -860.8, 14.0);
  $.cut_car3_lm3.SetHeading(150.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.SetAnim($.joey);
  $.cs_tony = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_tony.SetAnim(tony);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj02`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_tonyhead = CutsceneHead.Create($.cs_tony, hier`cutobj04`);
  $.cs_tonyhead.SetAnim(tony);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_joedoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_joedoor.SetAnim(JOEDOOR);
  World.ClearArea(1195.0, -870.3, 15.0, 10.0, 1 /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 0 /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 0 /* FALSE */);
  [$.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z] = $.joeys_garage_door2.GetCoordinates();
  [$.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z] = $.joeys_garage_door3.GetCoordinates();
  $.joeydoor2_Z = $.joeydoor2_Z + 3.0;
  $.joeydoor3_Z = $.joeydoor3_Z + 3.0;
  while (!($.joeys_garage_door2.Slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 100.0, 0 /* FALSE */)) || !($.joeys_garage_door3.Slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 100.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Camera.DoFade(1800, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_A", 10000, 1);
  while ($.cs_time < 4000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_B", 10000, 1);
  while ($.cs_time < 6180) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_C", 10000, 1);
  while ($.cs_time < 10230) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_D", 10000, 1);
  while ($.cs_time < 13040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_E", 10000, 1);
  while ($.cs_time < 15110) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_F", 10000, 1);
  while ($.cs_time < 18080) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM4_G", 10000, 1);
  while ($.cs_time < 23511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 23833) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  Cutscene.Clear();
  if (!(Car.IsDead($.tonis_ride))) {
    $.toni = Char.CreateAsPassenger($.tonis_ride, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 0);
    $.toni.ClearThreatSearch();
    $.toni.SetCantBeDraggedOut(1 /* TRUE */);
    $.toni.AddArmor(100);
    $.player.WarpIntoCar($.tonis_ride);
  }
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 1 /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 1 /* TRUE */);
  World.ClearArea(1198.5, -871.4, 15.0, 10.0, 1 /* TRUE */);
  Camera.SetFixedPosition(1200.831, -869.373, 15.001, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1199.887, -869.701, 15.025, 2 /* JUMP_CUT */);
  await asyncWait(0);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  $.cut_car2_lm3.Delete();
  $.cut_car3_lm3.Delete();
  Audio.LoadMissionAudio(J4T_1);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_10", 5000, 1);
  if (!(Car.IsDead($.tonis_ride))) {
    $.tonis_ride.GotoCoordinatesAccurate(1198.5, -871.4, -100.0);
    $.tonis_ride.SetCruiseSpeed(2.0);
    $.tonis_ride.SetDrivingStyle(3);
  }
  if (!(Char.IsDead($.toni))) {
    $.toni.LookAtPlayerAlways($.player);
    $.player.LookAtCharAlways($.toni);
  }
  while (!($.tonis_ride.Locate2D(1198.5, -871.4, 2.0, 2.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_audio_all_finished == 0) {
      while (!(Audio.HasMissionAudioFinished())) {
        await asyncWait(0);
        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
          Text.PrintNow("JM4_8", 5000, 1);
          // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
        }
      }
      Audio.LoadMissionAudio(J4T_2);
      while (!(Audio.HasMissionAudioLoaded())) {
        await asyncWait(0);
        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
          Text.PrintNow("JM4_8", 5000, 1);
          // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
        }
      }
      Audio.PlayMissionAudio();
      Text.PrintNow("JM4_11", 5000, 1);
      while (!(Audio.HasMissionAudioFinished())) {
        await asyncWait(0);
        if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
          Text.PrintNow("JM4_8", 5000, 1);
          // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
        }
      }
      Audio.LoadMissionAudio(J4T_3);
      $.tonis_audio_all_finished = 1;
    }
  }
  Text.ClearPrints();
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_12", 5000, 1);
  [$.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z] = $.joeys_garage_door2.GetCoordinates();
  [$.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z] = $.joeys_garage_door3.GetCoordinates();
  $.joeydoor2_Z = $.joeydoor2_Z - 3.0;
  $.joeydoor3_Z = $.joeydoor3_Z - 3.0;
  while (!($.joeys_garage_door2.Slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, 0 /* FALSE */)) || !($.joeys_garage_door3.Slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(J4T_4);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_13", 5000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.toni))) {
    $.toni.StopLooking();
    $.player.StopLooking();
  }
  Text.ClearPrints();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* On */);
  $.tonis_ride.SetStatus(0 /* STATUS_PLAYER */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* Off */);
  Camera.Restore();
  World.SetCarDensityMultiplier(1.0);
  $.gen_car12.Switch(0);
  Streaming.RequestModel(ped`GANG_TRIAD_A`);
  Streaming.RequestModel(ped`GANG_TRIAD_B`);
  Audio.LoadMissionAudio(J4_A);
  while (!(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_B`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Path.SwitchPedRoadsOff(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  Path.SwitchRoadsOff(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  World.ClearArea(843.4, -663.8, 15.0, 10.0, 1 /* TRUE */);
  $.blip1_jm4 = Blip.AddForCoord(843.0, -660.0, -100.0);
  $.blip1_jm4.ChangeDisplay(2 /* BLIP_ONLY */);
  $.triad1_jm4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 850.0, -663.0, 14.7);
  $.triad1_jm4.ClearThreatSearch();
  $.triad1_jm4.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  $.triad2_jm4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 850.0, -664.7, 14.7);
  $.triad2_jm4.ClearThreatSearch();
  $.triad2_jm4.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  $.triad1_jm4.TurnToFaceChar($.triad2_jm4);
  $.triad2_jm4.TurnToFaceChar($.triad1_jm4);
  $.blip1_jm4.Remove();
  $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
  $.blob_flag = 1;
  if (Car.IsDead($.tonis_ride)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  while (!($.player.IsStoppedInAreaInCar3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, $.blob_flag)) || $.player.IsWantedLevelGreater(0) || !($.player.IsInCar($.tonis_ride))) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.tonis_ride))) {
      if ($.flag_car_blip_displayed_jm4 == 0 /* FALSE */) {
        $.blip2_jm4 = Blip.AddForCar($.tonis_ride);
        $.blob_flag = 0;
        $.blip1_jm4.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
      }
    }
    if ($.player.IsInCar($.tonis_ride)) {
      if ($.flag_car_blip_displayed_jm4 == 1 /* TRUE */) {
        $.blip1_jm4 = Blip.AddForCoord(843.0, -660.0, -100.0);
        $.blob_flag = 1;
        $.blip2_jm4.Remove();
        $.flag_car_blip_displayed_jm4 = 0 /* FALSE */;
      }
    }
    if (!($.tonis_ride.IsHealthGreater(900)) && $.Toni_abuse1_done_before == 0) {
      Text.PrintNow("JM4_6", 5000, 1);
      Audio.PlayMissionAudio();
      $.Toni_abuse1_done_before = 1;
    }
    if ($.player.IsStoppedInAreaInCar3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm4 == 0) {
          Text.PrintNow("WANTED1", 3000, 1);
          $.flag_displayed_wanted_message_jm4 = 1;
        }
      }
    }
    else {
      if (!($.player.IsInArea3D(839.2, -667.4, 14.0, 842.1, -673.9, 17.0, 0 /* FALSE */))) {
        $.flag_displayed_wanted_message_jm4 = 0;
      }
    }
  }
  $.blip1_jm4.Remove();
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* Off */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(825.604, -680.602, 16.567, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(826.336, -679.921, 16.539, 2 /* JUMP_CUT */);
  Audio.LoadMissionAudio(J4_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4))) {
    Game.SetCharsChatting($.triad1_jm4, $.triad2_jm4, 999999);
  }
  if (!(Char.IsDead($.toni))) {
    $.toni.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_2", 5000, 1);
  World.ClearArea(843.4, -663.8, 15.0, 10.0, 1 /* TRUE */);
  await asyncWait(4000);
  if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  $.toni.GiveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  $.toni.SetObjLeaveCar($.tonis_ride);
  while ($.toni.IsInCar($.tonis_ride)) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Camera.SetFixedPosition(841.312, -669.063, 16.536, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(842.117, -668.501, 16.343, 2 /* JUMP_CUT */);
  if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  $.toni.TurnToFaceCoord(843.9, -663.7, 15.1);
  TIMERB = 0;
  $.toni.SetObjGotoCoordOnFoot(843.9, -663.7);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(843.9, -663.7, 13.9);
      }
    }
  }
  while (!($.laundrete_door1.Rotate(90.0, 10.0, 0 /* FALSE */)) || !($.laundrete_door2.Rotate(90.0, 10.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  TIMERB = 0;
  $.toni.SetObjGotoCoordOnFoot(848.1, -663.4);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(848.1, -663.4, 13.9);
      }
    }
  }
  $.toni.SetObjWaitOnFoot();
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4))) {
    Game.SetCharsChatting($.triad1_jm4, $.triad2_jm4, 0);
  }
  await asyncWait(0);
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4)) && !(Char.IsDead($.toni))) {
    $.triad1_jm4.TurnToFaceChar($.toni);
    $.triad2_jm4.TurnToFaceChar($.toni);
    $.triad1_jm4.LookAtCharAlways($.toni);
    $.triad2_jm4.LookAtCharAlways($.toni);
  }
  await asyncWait(5000);
  Sound.AddOneOffSound(845.0, -663.0, 14.0, 0 /* sound_test_1 */);
  $.door1_position_jm4 = $.laundrete_door1.GetHeading();
  $.door2_position_jm4 = $.laundrete_door2.GetHeading();
  if (Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  $.toni.TurnToFaceCoord(843.9, -663.7, 15.1);
  if (!(Char.IsDead($.triad1_jm4)) || !(Char.IsDead($.triad2_jm4))) {
    $.triad1_jm4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
    $.triad2_jm4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  }
  $.toni.SetRunning(1 /* TRUE */);
  if (!(Char.IsDead($.triad1_jm4)) || !(Char.IsDead($.triad2_jm4))) {
    $.triad1_jm4.SetStayInSamePlace(1 /* TRUE */);
    $.triad2_jm4.SetStayInSamePlace(1 /* TRUE */);
    $.triad1_jm4.SetObjKillCharOnFoot($.toni);
    $.triad2_jm4.SetObjKillCharOnFoot($.toni);
  }
  World.ClearArea(843.4, -663.8, 15.0, 10.0, 1 /* TRUE */);
  TIMERB = 0;
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4))) {
    $.triad1_jm4.StopLooking();
    $.triad2_jm4.StopLooking();
  }
  $.toni.SetObjRunToCoord(843.9, -663.7);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(843.9, -663.7, 13.9);
      }
    }
  }
  $.toni.SetObjEnterCarAsPassenger($.tonis_ride);
  Camera.SetFixedPosition(836.029, -677.868, 15.840, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(836.713, -677.156, 15.680, 2 /* JUMP_CUT */);
  await asyncWait(1500);
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4))) {
    $.triad1_jm4.SetStayInSamePlace(0 /* FALSE */);
    $.triad2_jm4.SetStayInSamePlace(0 /* FALSE */);
    $.triad1_jm4.SetObjRunToCoord(842.0, -663.8);
    $.triad2_jm4.SetObjRunToCoord(843.5, -663.8);
  }
  while (!($.triads_ojective_passed == 2)) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.triad1_jm4) && $.ojective_triad1_done_before == 0) {
      $.triads_ojective_passed++;
      $.ojective_triad1_done_before = 1;
    }
    if (Char.IsDead($.triad2_jm4) && $.ojective_triad2_done_before == 0) {
      $.triads_ojective_passed++;
      $.ojective_triad2_done_before = 1;
    }
    if ($.triad1_jm4.IsObjectivePassed() && $.ojective_triad1_done_before == 0) {
      $.triad1_jm4.SetObjDestroyCar($.tonis_ride);
      $.triads_ojective_passed++;
      $.ojective_triad1_done_before = 1;
    }
    if ($.triad2_jm4.IsObjectivePassed() && $.ojective_triad2_done_before == 0) {
      $.triad2_jm4.SetObjDestroyCar($.tonis_ride);
      $.triads_ojective_passed++;
      $.ojective_triad2_done_before = 1;
    }
  }
  while (!($.toni.IsInCar($.tonis_ride))) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  $.triad3_jm4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 843.1, -689.0, 13.9);
  $.triad3_jm4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad3_jm4.SetObjKillPlayerOnFoot($.player);
  $.triad3_jm4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad4_jm4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 844.3, -634.8, 13.9);
  $.triad4_jm4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad4_jm4.SetObjKillPlayerOnFoot($.player);
  $.triad4_jm4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  if (!(Char.IsDead($.toni))) {
    $.toni.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
  }
  if (!(Char.IsDead($.triad1_jm4)) && !(Char.IsDead($.triad2_jm4))) {
    $.triad1_jm4.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
    $.triad2_jm4.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
  }
  $.player.SetControl(1 /* On */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  Audio.LoadMissionAudio(J4_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_3", 4000, 1);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.blip3_jm4 = Blip.AddForCoord(1216.8, -327.6, -100.0);
  $.blip3_jm4.ChangeDisplay(2 /* BLIP_ONLY */);
  while (!($.laundrete_door1.Rotate(0.0, 10.0, 0 /* FALSE */)) || !($.laundrete_door2.Rotate(180.0, 10.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  $.is_char1_dead_jm4 = 0;
  $.is_char2_dead_jm4 = 0;
  $.is_char3_dead_jm4 = 0;
  $.is_char4_dead_jm4 = 0;
  $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
  $.blip3_jm4.Remove();
  if (!(Char.IsDead($.triad1_jm4))) {
    $.triad1_jm4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.triad2_jm4))) {
    $.triad2_jm4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  World.ClearArea(1216.7, -328.1, 26.0, 6.0, 1 /* TRUE */);
  $.flag_displayed_wanted_message_jm4 = 0;
  $.blob_flag = 1;
  while (!($.player.IsStoppedInAreaInCar3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, $.blob_flag)) || $.player.IsWantedLevelGreater(0) || !($.player.IsInCar($.tonis_ride))) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tonis_ride)) {
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.tonis_ride))) {
      if ($.flag_car_blip_displayed_jm4 == 0 /* FALSE */) {
        $.blip2_jm4 = Blip.AddForCar($.tonis_ride);
        $.blip3_jm4.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.blob_flag = 0;
        $.flag_car_blip_displayed_jm4 = 1 /* TRUE */;
      }
    }
    if ($.player.IsInCar($.tonis_ride)) {
      if ($.flag_car_blip_displayed_jm4 == 1 /* TRUE */) {
        $.blip3_jm4 = Blip.AddForCoord(1216.8, -327.6, -100.0);
        $.blip2_jm4.Remove();
        $.blob_flag = 1;
        $.flag_car_blip_displayed_jm4 = 0 /* FALSE */;
      }
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.triad1_jm4) && $.is_char1_dead_jm4 == 0) {
      $.is_char1_dead_jm4 = 1;
    }
    if (Char.IsDead($.triad2_jm4) && $.is_char2_dead_jm4 == 0) {
      $.is_char2_dead_jm4 = 1;
    }
    if (Char.IsDead($.triad3_jm4) && $.is_char3_dead_jm4 == 0) {
      $.is_char3_dead_jm4 = 1;
    }
    if (Char.IsDead($.triad4_jm4) && $.is_char4_dead_jm4 == 0) {
      $.is_char4_dead_jm4 = 1;
    }
    if ($.is_char1_dead_jm4 == 1 && $.is_char2_dead_jm4 == 1 && $.is_char3_dead_jm4 == 1 && $.is_char4_dead_jm4 == 1 && $.played_tune_before == 0) {
      $.player.AddScore(2000);
      [$.player_X, $.player_Y, $.player_Z] = $.player.GetCoordinates();
      Sound.AddOneOffSound($.player_X, $.player_Y, $.player_Z, 94 /* SOUND_PART_MISSION_COMPLETE */);
      $.played_tune_before = 1;
    }
    if ($.player.IsStoppedInAreaInCar3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm4 == 0) {
          Text.PrintNow("WANTED1", 3000, 1);
          $.flag_displayed_wanted_message_jm4 = 1;
        }
      }
    }
    else {
      if (!($.player.IsInArea3D(1215.0, -326.9, 25.0, 1220.2, -330.5, 27.0, 0 /* FALSE */))) {
        $.flag_displayed_wanted_message_jm4 = 0;
      }
    }
  }
  $.blip3_jm4.Remove();
  World.ClearArea(1216.5, -326.8, 26.0, 6.0, 1 /* TRUE */);
  World.ClearArea(1219.6, -319.2, 27.7, 2.0, 1 /* TRUE */);
  $.player.SetControl(0 /* Off */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(1224.119, -333.413, 26.529, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1223.382, -332.738, 26.568, 2 /* JUMP_CUT */);
  if (!(Char.IsDead($.toni))) {
    $.toni.SetCurrentWeapon(0 /* WEAPONTYPE_UNARMED */);
    $.toni.LookAtPlayerAlways($.player);
    $.player.LookAtCharAlways($.toni);
  }
  $.blip2_jm4.Remove();
  Audio.LoadMissionAudio(J4_D);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_4", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(J4_E);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM4_5", 5000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(J4_F);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  if (!(Char.IsDead($.toni))) {
    $.toni.SetRunning(0 /* FALSE */);
    $.toni.SetObjLeaveCar($.tonis_ride);
    $.toni.StopLooking();
    $.player.StopLooking();
  }
  while ($.toni.IsInCar($.tonis_ride)) {
    await asyncWait(0);
    if (Car.IsDead($.tonis_ride) || Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if ($.tonis_ride.IsUpsidedown() && $.tonis_ride.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  TIMERB = 0;
  World.ClearArea(1219.4, -324.4, 26.1, 2.0, 1 /* TRUE */);
  $.toni.SetObjGotoCoordOnFoot(1219.4, -324.4);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(1219.4, -324.4, -100.0);
      }
    }
  }
  if (Char.IsDead($.toni)) {
    Text.PrintNow("JM4_8", 5000, 1);
    // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
  }
  TIMERB = 0;
  World.ClearArea(1219.5, -315.4, 29.9, 2.0, 1 /* TRUE */);
  $.toni.SetObjGotoCoordOnFoot(1219.5, -318.6);
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 3000, 7000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(3000);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      Text.PrintNow("JM4_8", 5000, 1);
      // SCM GOTO → mission_joey4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey4_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(1219.5, -318.6, 28.4);
      }
    }
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* On */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Camera.RestoreJumpcut();
  $.toni.Delete();
  }
  // SCM GOTO → mission_joey4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey4_passed"); // fallback: would break linear control flow
}

async function mission_joey4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_joey4_passed() {
  $.flag_joey_mission4_passed = 1;
  Stat.RegisterMissionPassed(JM4);
  Stat.PlayerMadeProgress(1);
  $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, 26.4, 19 /* RADAR_SPRITE_TONY */);
  $.SHOP_UZI.Remove();
  $.SHOP_UZI2 = Pickup.Create(159 /* WEAPON_UZI */, 1 /* PICKUP_IN_SHOP */, 1070.5, -400.8, 15.2);
  // START_NEW_SCRIPT toni_mission1_loop
  // START_NEW_SCRIPT joey_mission5_loop
  // START_NEW_SCRIPT uzi_message
  return;
}

async function mission_cleanup_joey4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.blip1_jm4.Remove();
  $.blip2_jm4.Remove();
  $.blip3_jm4.Remove();
  Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`);
  Path.SwitchPedRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  Path.SwitchRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  Streaming.UnloadSpecialCharacter(2);
  $.gen_car12.Switch(101);
  $.toni.RemoveElegantly();
  Mission.Finish();
  return;
  {
}

async function delete_tonis_car() {
  $.tonis_ride.Delete();
  return;
  }
}

export async function joey4() {
  // MissionBoundary
  // SCM GOSUB mission_start_joey4
  await mission_start_joey4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey4_failed
    await mission_joey4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey4
  await mission_cleanup_joey4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip1_jm4 blip2_jm4 blip3_jm4 flag_car_blip_displayed_jm4 triads_ojective_passed
  // VAR_INT ojective_triad1_done_before ojective_triad2_done_before
  // VAR_INT Toni_abuse1_done_before tonis_car_created_before played_tune_before
  // VAR_INT flag_displayed_wanted_message_jm4 flag_displayed_horn_message_jm4
  // VAR_INT tonis_ride is_char1_dead_jm4 is_char2_dead_jm4 is_char3_dead_jm4 is_char4_dead_jm4
  // VAR_INT triad1_jm4 triad2_jm4 triad3_jm4 triad4_jm4 tonis_audio_all_finished
  // VAR_FLOAT door1_position_jm4 door2_position_jm4
}
