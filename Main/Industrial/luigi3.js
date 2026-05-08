// Generated from Main/Industrial/luigi3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_luigi3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_luigi_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_got_message_lm3 = 0;
  $.flag_player_got_cops_message_lm3 = 0;
  $.flag_player_not_in_zone_lm3 = 0;
  $.door1_position_lm3 = 0.0;
  $.door2_position_lm3 = 0.0;
  $.difference_in_heading_door1_lm3 = 0.0;
  $.difference_in_heading_door2_lm3 = 0.0;
  $.flag_blip_on_misty_lm3 = 0;
  $.blob_flag = 1;
  $.flag_had_bus_message_lm3 = 0;
  $.flag_camera_mode_lm3 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.luigi);
  Streaming.LoadSpecialCharacter(2, $.micky);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, LUIGIH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, MICKYH);
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 0 /* FALSE */);
  Cutscene.Load(l3_dm);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_luigi.SetAnim($.luigi);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_micky.SetAnim($.micky);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`);
  $.cs_luigihead.SetAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj04`);
  $.cs_mickyhead.SetAnim($.micky);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.SetAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(896.6, -426.2, 13.9);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_A", 10000, 1);
  while ($.cs_time < 5504) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM3_A");
  while ($.cs_time < 8333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_B", 10000, 1);
  while ($.cs_time < 9667) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_C", 10000, 1);
  while ($.cs_time < 13833) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_D", 10000, 1);
  while ($.cs_time < 15467) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_E", 10000, 1);
  while ($.cs_time < 18233) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_F", 10000, 1);
  while ($.cs_time < 21100) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_G", 10000, 1);
  while ($.cs_time < 25333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_H", 10000, 1);
  while ($.cs_time < 27701) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM3_H");
  while ($.cs_time < 29666) {
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
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  Streaming.LoadScene(920.3, -425.4, 15.0);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  World.SetPedDensityMultiplier(1.0);
  Streaming.LoadSpecialCharacter(2, $.misty);
  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Text.PrintNow("LM3_10", 5000, 1);
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.PrintHelp("HELP15");
  }
  if ($.controlmode == 1) {
    Text.PrintHelp("HELP15");
  }
  if ($.controlmode == 2) {
    Text.PrintHelp("HELP15");
  }
  if ($.controlmode == 3) {
    Text.PrintHelp("HELP15");
  }
  while (!($.player.IsInAnyCar())) {
    await asyncWait(0);
  }
  $.car_lm3 = $.player.StoreCarIsIn();
  Text.PrintNow("LM3_4", 7000, 1);
  Audio.LoadMissionAudio(L2_A);
  $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0);
  $.blob_flag = 1;
  while (!($.player.LocateStoppedInCar2D(937.9, -259.8, 3.0, 3.0, $.blob_flag)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (!($.player.IsInAnyCar()) && $.flag_player_got_message_lm3 == 0) {
      Text.PrintNow("IN_VEH2", 5000, 1);
      $.radar_blip_coord1_lm3.Remove();
      $.flag_player_got_message_lm3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInAnyCar() && $.flag_player_got_message_lm3 == 1) {
      $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0);
      $.car_lm3 = $.player.StoreCarIsIn();
      $.flag_player_got_message_lm3 = 0;
      $.blob_flag = 1;
    }
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.PrintHelp("LM3_1A");
  }
  if ($.controlmode == 1) {
    Text.PrintHelp("LM3_1B");
  }
  if ($.controlmode == 2) {
    Text.PrintHelp("LM3_1C");
  }
  if ($.controlmode == 3) {
    Text.PrintHelp("LM3_1A");
  }
  $.blob_flag = 1;
  while (!($.player.IsPressingHorn()) || !($.player.LocateStoppedInCar2D(937.9, -259.8, 3.0, 3.0, $.blob_flag)) || !($.player.IsSittingInAnyCar())) {
    await asyncWait(0);
    if (!($.player.IsInAnyCar()) && $.flag_player_got_message_lm3 == 0) {
      Text.PrintNow("IN_VEH2", 5000, 1);
      $.radar_blip_coord1_lm3.Remove();
      $.flag_player_got_message_lm3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInAnyCar() && $.flag_player_got_message_lm3 == 1) {
      $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0);
      $.car_lm3 = $.player.StoreCarIsIn();
      $.flag_player_got_message_lm3 = 0;
      $.blob_flag = 1;
    }
  }
  Text.ClearHelp();
  $.script_controlled_player = $.player.GetChar();
  $.script_controlled_player.SetCantBeDraggedOut(1 /* TRUE */);
  await asyncWait(500);
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  World.ClearArea(936.2, -263.9, 5.0, 1.0, 1 /* TRUE */);
  if ($.player.LocateInCar2D(937.9, -259.8, 3.0, 3.0, 0 /* FALSE */)) {
    if ($.player.IsInModel(114 /* CAR_BUS */) || $.player.IsInModel(120 /* CAR_COACH */) || $.player.IsInModel(138 /* CAR_FLATBED */) || $.player.IsInModel(90 /* CAR_FIRETRUCK */) || $.player.IsInModel(83 /* CAR_LANDSTALKER */) || $.player.IsInModel(86 /* CAR_LINERUNNER */)) {
      $.flag_camera_mode_lm3 = 1;
    }
    if ($.player.IsInModel(91 /* CAR_TRASHMASTER */) || $.player.IsInModel(96 /* CAR_PONY */) || $.player.IsInModel(97 /* CAR_MULE */) || $.player.IsInModel(99 /* CAR_AMBULANCE */) || $.player.IsInModel(106 /* CAR_MRWHOOPEE */) || $.player.IsInModel(110 /* CAR_ENFORCER */)) {
      $.flag_camera_mode_lm3 = 1;
    }
    if ($.player.IsInModel(123 /* CAR_RUMPO */) || $.player.IsInModel(125 /* CAR_BELLYUP */) || $.player.IsInModel(126 /* CAR_MRWONGS */) || $.player.IsInModel(139 /* CAR_YANKEE */) || $.player.IsInModel(111 /* CAR_SECURICAR */)) {
      $.flag_camera_mode_lm3 = 1;
    }
  }
  if ($.flag_camera_mode_lm3 == 1) {
    World.ClearArea(930.112, -264.972, 7.336, 4.0, 1 /* TRUE */);
    Camera.SetFixedPosition(930.112, -264.972, 7.336, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(930.959, -265.474, 7.164, 2 /* JUMP_CUT */);
  }
  else {
    World.ClearArea(928.169, -267.549, 4.0, 4.0, 1 /* TRUE */);
    Camera.SetFixedPosition(928.169, -267.549, 5.623, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(929.162, -267.43, 5.656, 2 /* JUMP_CUT */);
  }
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  World.ClearArea(941.7, -269.2, 4.0, 1.0, 1 /* TRUE */);
  $.radar_blip_coord1_lm3.Remove();
  $.misty_lm3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 946.47, -275.50, 3.9);
  $.misty_lm3.TurnToFaceCoord(942.0, -268.0, -100.0);
  $.misty_lm3.ClearThreatSearch();
  $.misty_lm3.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.door1_position_lm3 = $.misty_door1.GetHeading();
  while (!($.door1_position_lm3 == 90.0)) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    $.difference_in_heading_door1_lm3 = 90.0 - $.door1_position_lm3;
    if ($.difference_in_heading_door1_lm3 < 10.0) {
      $.door1_position_lm3 = 90.0;
    }
    else {
      $.door1_position_lm3 += 10.0;
    }
    $.misty_door1.SetHeading($.door1_position_lm3);
  }
  await asyncWait(0);
  if (Char.IsDead($.misty_lm3)) {
    Text.PrintNow("MISTY1", 5000, 1);
    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
  }
  World.ClearArea(944.1, -270.7, 4.0, 2.0, 1 /* TRUE */);
  $.misty_lm3.SetObjGotoCoordOnFoot(944.1, -270.7);
  timerb = 0;
  while (!($.misty_lm3.IsObjectivePassed())) {
    await asyncWait(0);
    if ($.player.IsInAnyCar()) {
      $.car_lm3 = $.player.StoreCarIsIn();
      if (Car.IsDead($.car_lm3)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    if (timerb >= 10000) {
      if (!($.misty_lm3.IsObjectivePassed())) {
        $.misty_lm3.SetCoordinates(944.1, -270.7, 3.9);
      }
    }
  }
  World.ClearArea(941.0, -264.0, -100.0, 4.0, 1 /* TRUE */);
  Camera.SetFixedPosition(934.2, -265.8, 5.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(934.7, -264.9, 5.7, 2 /* JUMP_CUT */);
  $.misty_door1.SetHeading(0.0);
  if (!(Char.IsDead($.misty_lm3))) {
    if (!(World.IsAreaOccupied(934.10, -266.46, 2.0, 935.08, -268.90, 10.0, 0 /* FALSE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */))) {
      World.ClearArea(934.79, -267.47, 3.9, 1.0, 1 /* TRUE */);
      $.misty_lm3.SetCoordinates(934.79, -267.47, 3.9);
    }
  }
  if ($.player.IsInAnyCar()) {
    $.car_lm3 = $.player.StoreCarIsIn();
    $.misty_lm3.SetObjEnterCarAsPassenger($.car_lm3);
    if (Car.IsDead($.car_lm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    while (!($.misty_lm3.IsInCar($.car_lm3))) {
      await asyncWait(0);
      if (Car.IsDead($.car_lm3)) {
        if (Char.IsDead($.misty_lm3)) {
          Text.PrintNow("MISTY1", 5000, 1);
          // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
        }
        else {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
        }
      }
      if (Char.IsDead($.misty_lm3)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
      }
    }
  }
  else {
    $.misty_lm3.SetObjGotoPlayerOnFoot($.player);
    while (!($.misty_lm3.IsObjectivePassed())) {
      await asyncWait(0);
      if ($.player.IsInAnyCar()) {
        $.car_lm3 = $.player.StoreCarIsIn();
        if (Car.IsDead($.car_lm3)) {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
        }
      }
      if (Char.IsDead($.misty_lm3)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.misty_lm3.FollowPlayer($.player);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  $.script_controlled_player.SetCantBeDraggedOut(0 /* FALSE */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Audio.PlayMissionAudio();
  Text.PrintNow("LM3_5", 7000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    if (!($.misty_lm3.IsInPlayersGroup($.player)) && $.flag_blip_on_misty_lm3 == 0) {
      Text.PrintNow("HEY4", 5000, 1);
      $.radar_blip_ped1_lm3 = Blip.AddForChar($.misty_lm3);
      $.flag_blip_on_misty_lm3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.LocateAnyMeansChar2D($.misty_lm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_misty_lm3 == 1) {
      $.misty_lm3.FollowPlayer($.player);
      $.radar_blip_ped1_lm3.Remove();
      $.flag_blip_on_misty_lm3 = 0;
      $.blob_flag = 1;
    }
  }
  Text.ClearThisPrint("LM3_5");
  Text.PrintNow("LM3_2", 5000, 1);
  $.radar_blip_coord2_lm3 = Blip.AddForCoord(1196.0, -874.0, -100.0);
  $.blob_flag = 1;
  while (!($.player.LocateStoppedAnyMeans2D(1196.0, -874.0, 3.0, 4.0, $.blob_flag)) || !($.misty_lm3.LocateStoppedAnyMeans2D(1196.0, -874.0, 3.0, 4.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    if (!($.misty_lm3.IsInPlayersGroup($.player)) && $.flag_blip_on_misty_lm3 == 0) {
      Text.PrintNow("HEY4", 5000, 1);
      $.radar_blip_ped1_lm3 = Blip.AddForChar($.misty_lm3);
      $.radar_blip_coord2_lm3.Remove();
      $.flag_blip_on_misty_lm3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.LocateAnyMeansChar2D($.misty_lm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_misty_lm3 == 1) {
      $.misty_lm3.FollowPlayer($.player);
      Text.PrintNow("LM3_2", 5000, 1);
      $.radar_blip_ped1_lm3.Remove();
      $.radar_blip_coord2_lm3 = Blip.AddForCoord(1196.0, -874.0, -100.0);
      $.flag_blip_on_misty_lm3 = 0;
      $.blob_flag = 1;
    }
  }
  $.radar_blip_coord2_lm3.Remove();
  Camera.SetFixedPosition(1211.85, -882.40, 19.42, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1210.99, -881.90, 19.34, 2 /* JUMP_CUT */);
  if (Char.IsDead($.misty_lm3)) {
    Text.PrintNow("MISTY1", 5000, 1);
    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
  }
  $.misty_lm3.LeaveGroup();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  $.player.ClearWantedLevel();
  World.ClearArea(1190.6, -869.1, -100.0, 6.0, 1 /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.script_controlled_player = $.player.GetChar();
  if ($.misty_lm3.IsInAnyCar()) {
    $.car_lm3 = $.misty_lm3.StoreCarIsIn();
    $.misty_lm3.SetObjLeaveCar($.car_lm3);
  }
  while ($.misty_lm3.IsInAnyCar()) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
  }
  if ($.script_controlled_player.IsInAnyCar()) {
    $.car_lm3 = $.script_controlled_player.StoreCarIsIn();
    $.script_controlled_player.SetObjLeaveCar($.car_lm3);
  }
  $.misty_lm3.SetObjGotoCoordOnFoot(1193.1, -868.3);
  while ($.script_controlled_player.IsInAnyCar()) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
  }
  $.script_controlled_player.SetObjGotoCoordOnFoot(1193.1, -868.3);
  await asyncWait(500);
  if (Char.IsDead($.misty_lm3)) {
    Text.PrintNow("MISTY1", 5000, 1);
    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
  }
  $.car_lm3.MarkAsNoLongerNeeded();
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Char.IsDead($.misty_lm3)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi3_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, MISTYH);
  Streaming.RequestModel(car`MAFIA`);
  Streaming.RequestModel(car`IDAHO`);
  Streaming.RequestModel(car`STALLION`);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.script_controlled_player.SetIdle();
  if (!(Char.IsDead($.misty_lm3))) {
    $.misty_lm3.SetIdle();
  }
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(car`IDAHO`)) || !(Streaming.HasModelLoaded(car`MAFIA`)) || !(Streaming.HasModelLoaded(car`STALLION`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint))) {
    await asyncWait(0);
  }
  Cutscene.Load(j0_dm2);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
  $.cut_car_lm3 = Car.Create(127 /* CAR_MAFIA */, 1189.1, -858.8, 14.0);
  $.cut_car_lm3.SetHeading(76.0);
  $.cut_car2_lm3 = Car.Create(84 /* CAR_IDAHO */, 1182.5, -857.0, 14.1);
  $.cut_car2_lm3.SetHeading(291.2);
  $.cut_car3_lm3 = Car.Create(122 /* CAR_STALLION */, 1192.9, -860.8, 14.0);
  $.cut_car3_lm3.SetHeading(150.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.SetAnim($.joey);
  $.cs_misty = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_misty.SetAnim($.misty);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj02`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_mistyhead = CutsceneHead.Create($.cs_misty, hier`cutobj04`);
  $.cs_mistyhead.SetAnim($.misty);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_joedoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_joedoor.SetAnim(JOEDOOR);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 0 /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 0 /* FALSE */);
  World.ClearArea(1194.0, -872.5, 14.0, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(1194.0, -872.5, -100.0);
  $.player.SetHeading(230.0);
  $.misty_lm3.Delete();
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 10538) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_6", 10000, 1);
  while ($.cs_time < 11896) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM3_6");
  while ($.cs_time < 14353) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_6A", 10000, 1);
  while ($.cs_time < 16869) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_7", 10000, 1);
  while ($.cs_time < 20173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_8", 10000, 1);
  while ($.cs_time < 21116) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_9", 10000, 1);
  while ($.cs_time < 23397) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_9A", 10000, 1);
  while ($.cs_time < 25088) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM3_9B", 10000, 1);
  while ($.cs_time < 25723) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM3_9B");
  while ($.cs_time < 26666) {
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
  World.SwitchRubbish(1 /* ON */);
  Streaming.Switch(1 /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 1 /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`);
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  $.cut_car_lm3.Delete();
  $.cut_car2_lm3.Delete();
  $.cut_car3_lm3.Delete();
  }
  // SCM GOTO → mission_luigi3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_luigi3_passed"); // fallback: would break linear control flow
}

async function mission_luigi3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_luigi3_passed() {
  $.flag_luigi_mission3_passed = 1;
  Stat.RegisterMissionPassed("LM3");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 1000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(1000);
  $.player.ClearWantedLevel();
  $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
  // START_NEW_SCRIPT luigi_mission4_loop
  // START_NEW_SCRIPT joey_mission1_loop
  // START_NEW_SCRIPT meat_mission1_loop
  return;
}

async function mission_cleanup_luigi3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  $.misty_lm3.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`);
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  $.radar_blip_coord1_lm3.Remove();
  $.radar_blip_coord2_lm3.Remove();
  Mission.Finish();
  return;
}

export async function luigi3() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_luigi3
  await mission_start_luigi3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_luigi3_failed
    await mission_luigi3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_luigi3
  await mission_cleanup_luigi3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT radar_blip_coord1_lm3
  // VAR_INT radar_blip_coord2_lm3
  // VAR_INT misty_lm3
  // VAR_INT car_lm3
  // VAR_INT flag_player_got_message_lm3
  // VAR_INT flag_player_got_cops_message_lm3
  // VAR_INT flag_player_not_in_zone_lm3
  // VAR_FLOAT door1_position_lm3
  // VAR_FLOAT door2_position_lm3
  // VAR_FLOAT difference_in_heading_door1_lm3
  // VAR_FLOAT difference_in_heading_door2_lm3
  // VAR_INT flag_blip_on_misty_lm3
  // VAR_INT radar_blip_ped1_lm3
  // VAR_INT flag_had_bus_message_lm3
  // VAR_INT flag_camera_mode_lm3
  // VAR_INT cut_car_lm3
  // VAR_INT cut_car2_lm3
  // VAR_INT cut_car3_lm3
}
