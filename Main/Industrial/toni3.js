// Generated from Main/Industrial/toni3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_toni3() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_toni_mission = 1;
  // ScriptName
  Text.ClearThisBigPrint("M_PASS");
  await asyncWait(0);
  $.cutscene_seen_flag = 0;
  {
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, NOTE);
  Streaming.RequestModel(ind_newrizzos);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(ind_newrizzos))) {
    await asyncWait(0);
  }
  Cutscene.Load(T3_MAS);
  Cutscene.SetOffset(1218.42, -314.5, 28.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_note = CutsceneObject.Create(hier`cutobj02`);
  $.cs_note.SetAnim(NOTE);
  World.ClearArea(1219.5, -321.1, 27.5, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1219.5, -321.1, 26.4);
  $.player.SetHeading(180.0);
  World.ClearArea(1216.1, -313.0, 29.9, 10.0, 1 /* TRUE */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3006) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_A", 10000, 1);
  while ($.cs_time < 5297) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_B", 10000, 1);
  while ($.cs_time < 8661) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_C", 10000, 1);
  while ($.cs_time < 12025) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_D", 10000, 1);
  while ($.cs_time < 14817) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_E", 10000, 1);
  while ($.cs_time < 17107) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_F", 10000, 1);
  while ($.cs_time < 18968) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM3_G", 10000, 1);
  while ($.cs_time < 19787) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 21666) {
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
  World.SwitchRubbish(1 /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(ind_newrizzos);
  Streaming.LoadSpecialCharacter(1, tony);
  Streaming.LoadSpecialCharacter(2, joey2);
  Streaming.LoadSpecialCharacter(3, $.luigi);
  Streaming.RequestModel(car`STRETCH`);
  Streaming.RequestModel(car`BELLYUP`);
  Streaming.RequestModel(ped`GANG_TRIAD_A`);
  Streaming.RequestModel(ped`GANG_TRIAD_B`);
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(car`STRETCH`)) || !(Streaming.HasModelLoaded(car`BELLYUP`)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_B`))) {
    await asyncWait(0);
  }
  $.carry_car = Car.Create(92 /* CAR_STRETCH */, 1187.0, -860.4, 14.5);
  $.carry_car.SetHeading(225.0);
  $.carry_car.ChangeColor(0 /* CARCOLOUR_BLACK */, 0 /* CARCOLOUR_BLACK */);
  $.carry_car.SetStrong(1 /* TRUE */);
  $.carry_car.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  $.blip1_t3 = Blip.AddForCoord(1191.7, -870.0, -100.0);
  $.carry_car.SetCanRespray(0 /* OFF */);
}

async function pick_up_joey() {
  $.flag_car_blip_displayed = 1 /* TRUE */;
  if (Car.IsDead($.carry_car)) {
    // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
  }
  while (!($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.5, 1.5, 2.0, 1 /* TRUE */))) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  $.player.SetControl(0 /* Off */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* On */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  await asyncWait(1000);
  Streaming.LoadScene(1190.07, -869.86, 13.97);
  if ($.player.IsPlaying()) {
    World.ClearArea(1190.2, -866.4, 14.1, 1.0, 1 /* TRUE */);
    $.player.SetCoordinates(1189.5, -867.6, 14.1);
    $.player.SetHeading(36.0);
    Camera.SetFixedPosition(1186.177, -852.455, 17.219, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(1186.077, -853.425, 16.995, 2 /* JUMP_CUT */);
    $.script_controlled_player = $.player.GetChar();
    $.script_controlled_player.SetRunning(1 /* TRUE */);
    if (!(Car.IsDead($.carry_car))) {
      $.script_controlled_player.SetObjEnterCarAsDriver($.carry_car);
    }
    Camera.DoFade(1000, 1 /* FADE_IN */);
    await asyncWait(1000);
  }
  if (Car.IsDead($.carry_car)) {
    // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
  }
  while (!($.player.IsInCar($.carry_car))) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  $.blip1_t3.Remove();
  Audio.SetRadioChannel(1, -1);
  $.joey = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1179.4, -858.6, 14.0);
  $.joey.ClearThreatSearch();
  if (Car.IsDead($.carry_car)) {
    // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
  }
  $.joey.SetObjEnterCarAsPassenger($.carry_car);
  TIMERB = 0;
  Audio.LoadMissionAudio(T3_A);
  while (!($.joey.IsInCar($.carry_car))) {
    await asyncWait(0);
    if (Char.IsDead($.joey)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.joey)) && !(Car.IsDead($.carry_car))) {
      }
    }
  }
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  $.joey.SetCantBeDraggedOut(1 /* TRUE */);
  $.blip3_t3 = Blip.AddForCoord(906.2, -426.0, -100.0);
  World.ClearArea(1195.0, -870.3, 15.0, 10.0, 1 /* TRUE */);
  Camera.SetFixedPosition(1200.9, -866.5, 19.0, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
  [$.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z] = $.joeys_garage_door2.GetCoordinates();
  [$.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z] = $.joeys_garage_door3.GetCoordinates();
  $.joeydoor2_Z = $.joeydoor2_Z + 3.0;
  $.joeydoor3_Z = $.joeydoor3_Z + 3.0;
  while (!($.joeys_garage_door2.Slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, 0 /* FALSE */)) || !($.joeys_garage_door3.Slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  $.carry_car.GotoCoordinatesAccurate(1198.4, -871.1, -100.0);
  $.carry_car.SetCruiseSpeed(4.0);
  $.carry_car.SetDrivingStyle(3);
  while (!($.carry_car.Locate2D(1198.4, -871.1, 2.0, 2.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  [$.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z] = $.joeys_garage_door2.GetCoordinates();
  [$.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z] = $.joeys_garage_door3.GetCoordinates();
  $.joeydoor2_Z = $.joeydoor2_Z - 3.0;
  $.joeydoor3_Z = $.joeydoor3_Z - 3.0;
  while (!($.joeys_garage_door2.Slide($.joeydoor2_X, $.joeydoor2_Y, $.joeydoor2_Z, 0.1, 0.1, 0.1, 0 /* FALSE */)) || !($.joeys_garage_door3.Slide($.joeydoor3_X, $.joeydoor3_Y, $.joeydoor3_Z, 0.1, 0.1, 0.1, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  $.blip1_t3 = Blip.AddForCar($.carry_car);
  $.blip1_t3.Remove();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* On */);
  $.carry_car.SetStatus(0 /* STATUS_PLAYER */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* Off */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  $.carry_car.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
  $.flag_displayed_horn_message_tm3 = 0;
  $.flag_displayed_wanted_message_tm3 = 0;
  $.blip3_t3.Remove();
}

async function pick_up_Luigi() {
  if (Car.IsDead($.carry_car)) {
    // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
  }
  $.flag_car_blip_displayed = 1 /* TRUE */;
  $.blob_flag = 1;
  while (!($.player.IsStoppedInArea3D(903.8, -423.0, 14.0, 908.3, -431.0, 18.0, $.blob_flag)) || !($.player.IsInCar($.carry_car)) || !($.player.IsPressingHorn()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      Text.PrintNow("TM3_A1", 5000, 1);
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.carry_car)) {
      if ($.flag_car_blip_displayed == 1 /* TRUE */) {
        $.blip3_t3 = Blip.AddForCoord(906.2, -426.0, -100.0);
        $.blob_flag = 1;
        $.blip1_t3.Remove();
        $.flag_car_blip_displayed = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.carry_car))) {
      if ($.flag_car_blip_displayed == 0 /* FALSE */) {
        $.blip1_t3 = Blip.AddForCar($.carry_car);
        $.blip3_t3.Remove();
        $.blob_flag = 0;
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed = 1 /* TRUE */;
      }
    }
    if ($.player.IsStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, 0 /* FALSE */)) {
      if ($.player.IsInCar($.carry_car)) {
        if ($.player.IsWantedLevelGreater(0)) {
          if ($.flag_displayed_wanted_message_tm3 == 0) {
            Text.PrintNow("WANTED1", 5000, 1);
            $.flag_displayed_wanted_message_tm3 = 1;
          }
        }
        else {
          if ($.flag_displayed_horn_message_tm3 == 0) {
            Text.PrintNow("HORN", 5000, 1);
            $.flag_displayed_horn_message_tm3 = 1;
          }
        }
      }
    }
    if (!($.player.IsInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, 0 /* FALSE */))) {
      if ($.flag_displayed_horn_message_tm3 == 1 || $.flag_displayed_wanted_message_tm3 == 1) {
        Text.ClearThisPrint("WANTED1");
        Text.ClearThisPrint("HORN");
        $.flag_displayed_horn_message_tm3 = 0;
        $.flag_displayed_wanted_message_tm3 = 0;
      }
    }
    if (!($.carry_car.IsHealthGreater(600))) {
      await asyncWait(500);
      if (Car.IsDead($.carry_car)) {
        Text.PrintNow("TM3_A1", 5000, 1);
        // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
      }
      Text.PrintNow("TRASH", 5000, 2);
      $.blip1_t3.Remove();
      $.blip3_t3.Remove();
      $.blip1_t3 = Blip.AddForCar($.carry_car);
      $.blip1_t3.ChangeDisplay(2 /* BLIP_ONLY */);
      $.flag_car_blip_displayed = 1 /* TRUE */;
      while (!($.carry_car.IsHealthGreater(600))) {
        await asyncWait(0);
        if (Car.IsDead($.carry_car)) {
          Text.PrintNow("TM3_A1", 5000, 1);
          // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
        }
        if ($.player.IsInCar($.carry_car)) {
          if ($.flag_car_blip_displayed == 1 /* TRUE */) {
            $.blip5_t3 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
            $.blip1_t3.Remove();
            $.flag_car_blip_displayed = 0 /* FALSE */;
          }
        }
        if (!($.player.IsInCar($.carry_car))) {
          if ($.flag_car_blip_displayed == 0 /* FALSE */) {
            $.blip1_t3 = Blip.AddForCar($.carry_car);
            $.blip5_t3.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.flag_car_blip_displayed = 1 /* TRUE */;
          }
        }
      }
      $.blip5_t3.Remove();
      // SCM GOTO → pick_up_Luigi (not lowered; manual jump required)
      throw new Error("unresolved GOTO pick_up_Luigi"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("WANTED1");
  Text.ClearThisPrint("HORN");
  if (!(Car.IsDead($.carry_car))) {
    $.carry_car.LockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }
  await asyncWait(500);
  $.player.SetControl(0 /* Off */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.blip3_t3.Remove();
  if (!(Car.IsDead($.carry_car))) {
    $.carry_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  World.ClearArea(897.0, -425.5, 14.7, 6.0, 1 /* TRUE */);
  Camera.SetFixedPosition(900.505, -419.672, 14.976, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(900.937, -420.566, 15.093, 2 /* JUMP_CUT */);
  $.luigi = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL3`, 897.0, -425.3, 14.8);
  $.luigi.ClearThreatSearch();
  World.SetPedDensityMultiplier(0.0);
  TIMERB = 0;
  Audio.LoadMissionAudio(T3_B);
  $.luigi.SetObjGotoCoordOnFoot(901.0, -426.4);
  while (!($.luigi.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.luigi)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 12000) {
      if (!(Char.IsDead($.luigi))) {
        $.luigi.SetCoordinates(901.0, -426.4, -100.0);
      }
    }
  }
  $.luigi.SetObjEnterCarAsPassenger($.carry_car);
  while (!($.luigi.IsInCar($.carry_car))) {
    await asyncWait(0);
    if (Char.IsDead($.luigi)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  $.luigi.SetCantBeDraggedOut(1 /* TRUE */);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  $.player.SetControl(1 /* On */);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  World.SetPedDensityMultiplier(1.0);
  Path.SwitchPedRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  Path.SwitchRoadsOn(824.9, -633.8, 13.0, 845.3, -693.8, 18.0);
  $.flag_displayed_horn_message_tm3 = 0;
  $.flag_displayed_wanted_message_tm3 = 0;
}

async function pick_up_toni() {
  $.flag_car_blip_displayed = 1 /* TRUE */;
  $.blob_flag = 1;
  if (!(Car.IsDead($.carry_car))) {
    if (!($.player.IsInCar($.carry_car))) {
      $.blip1_t3.Remove();
      $.blip1_t3 = Blip.AddForCar($.carry_car);
      $.blob_flag = 0;
      Text.PrintNow("IN_VEH", 5000, 1);
    }
  }
  while (!($.player.IsStoppedInArea3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, $.blob_flag)) || !($.player.IsInCar($.carry_car)) || !($.player.IsPressingHorn()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      Text.PrintNow("TM3_A2", 5000, 1);
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.carry_car)) {
      if ($.flag_car_blip_displayed == 1 /* TRUE */) {
        $.blip4_t3 = Blip.AddForCoord(1200.5, -322.5, -100.0);
        $.blob_flag = 1;
        $.blip1_t3.Remove();
        $.flag_car_blip_displayed = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.carry_car))) {
      if ($.flag_car_blip_displayed == 0 /* FALSE */) {
        $.blip1_t3.Remove();
        $.blip1_t3 = Blip.AddForCar($.carry_car);
        $.blob_flag = 0;
        $.blip4_t3.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed = 1 /* TRUE */;
      }
    }
    if ($.player.IsStoppedInAreaInCar3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, 0 /* FALSE */)) {
      if ($.player.IsInCar($.carry_car)) {
        if ($.player.IsWantedLevelGreater(0)) {
          if ($.flag_displayed_wanted_message_tm3 == 0) {
            Text.PrintNow("WANTED1", 5000, 1);
            $.flag_displayed_wanted_message_tm3 = 1;
          }
        }
        else {
          if ($.flag_displayed_horn_message_tm3 == 0) {
            Text.PrintNow("HORN", 5000, 1);
            $.flag_displayed_horn_message_tm3 = 1;
          }
        }
      }
    }
    if (!($.player.IsInAreaInCar3D(1197.8, -321.0, 24.3, 1202.0, -327.5, 28.0, 0 /* FALSE */))) {
      if ($.flag_displayed_horn_message_tm3 == 1 || $.flag_displayed_wanted_message_tm3 == 1) {
        Text.ClearThisPrint("WANTED1");
        Text.ClearThisPrint("HORN");
        $.flag_displayed_horn_message_tm3 = 0;
        $.flag_displayed_wanted_message_tm3 = 0;
      }
    }
    if (!($.carry_car.IsHealthGreater(600))) {
      await asyncWait(500);
      if (Car.IsDead($.carry_car)) {
        Text.PrintNow("TM3_A2", 5000, 1);
        // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
      }
      Text.PrintNow("TRASH", 5000, 2);
      $.blip1_t3.Remove();
      $.blip4_t3.Remove();
      $.blip1_t3 = Blip.AddForCar($.carry_car);
      $.blip1_t3.ChangeDisplay(2 /* BLIP_ONLY */);
      $.flag_car_blip_displayed = 1 /* TRUE */;
      while (!($.carry_car.IsHealthGreater(600))) {
        await asyncWait(0);
        if (Car.IsDead($.carry_car)) {
          Text.PrintNow("TM3_A2", 5000, 1);
          // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
        }
        if ($.player.IsInCar($.carry_car)) {
          if ($.flag_car_blip_displayed == 1 /* TRUE */) {
            $.blip5_t3 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
            $.blip1_t3.Remove();
            $.flag_car_blip_displayed = 0 /* FALSE */;
          }
        }
        if (!($.player.IsInCar($.carry_car))) {
          if ($.flag_car_blip_displayed == 0 /* FALSE */) {
            $.blip1_t3 = Blip.AddForCar($.carry_car);
            $.blip5_t3.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.flag_car_blip_displayed = 1 /* TRUE */;
          }
        }
      }
      $.blip5_t3.Remove();
      // SCM GOTO → pick_up_toni (not lowered; manual jump required)
      throw new Error("unresolved GOTO pick_up_toni"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("WANTED1");
  Text.ClearThisPrint("HORN");
  if (!(Car.IsDead($.carry_car))) {
    $.carry_car.LockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }
  await asyncWait(500);
  $.player.SetControl(0 /* Off */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.blip4_t3.Remove();
  if (!(Car.IsDead($.carry_car))) {
    $.carry_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  World.ClearArea(1213.6, -321.1, 26.5, 10.0, 1 /* TRUE */);
  $.toni = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 1217.0, -321.1, -100.0);
  $.toni.SetHeading(90.0);
  $.toni.ClearThreatSearch();
  Camera.SetFixedPosition(1222.214, -328.629, 34.454, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1221.629, -328.046, 33.891, 2 /* JUMP_CUT */);
  World.SetPedDensityMultiplier(0.0);
  TIMERB = 0;
  Audio.LoadMissionAudio(T3_C);
  $.toni.SetObjGotoCoordOnFoot(1205.5, -321.0);
  while (!($.toni.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 12000) {
      if (!(Char.IsDead($.toni))) {
        $.toni.SetCoordinates(1205.5, -321.0, -100.0);
      }
    }
  }
  Camera.SetFixedPosition(1206.2, -326.2, 27.0, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.toni, 15 /* FIXED */, 2 /* JUMP_CUT */);
  $.toni.SetObjEnterCarAsPassenger($.carry_car);
  while (!($.toni.IsInCar($.carry_car))) {
    await asyncWait(0);
    if (Char.IsDead($.toni)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.carry_car)) {
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
  }
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  $.toni.SetCantBeDraggedOut(1 /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  World.SetPedDensityMultiplier(1.0);
  $.triad_van1 = Car.Create(125 /* CAR_BELLYUP */, 1193.0, -228.0, -100.0);
  $.triad_van1.SetHeading(180.0);
  $.triad_van1.SetDrivingStyle(3);
  $.triad_van1.SetCruiseSpeed(30.0);
  $.triad_van1.SetStrong(1 /* TRUE */);
  $.triads1 = Char.CreateInsideCar($.triad_van1, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`);
  $.triads1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad_van1.SetMission(2);
  $.triads1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triads2 = Char.CreateAsPassenger($.triad_van1, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 0);
  $.triads2.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads2.SetObjKillPlayerAnyMeans($.player);
  $.triads2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_van2 = Car.Create(125 /* CAR_BELLYUP */, 1275.8, -346.7, -100.0);
  $.triad_van2.SetHeading(1.0);
  $.triad_van2.SetDrivingStyle(3);
  $.triad_van2.SetCruiseSpeed(30.0);
  $.triad_van2.SetStrong(1 /* TRUE */);
  $.triads3 = Char.CreateInsideCar($.triad_van2, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`);
  $.triads3.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad_van2.SetMission(2);
  $.triads3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triads4 = Char.CreateAsPassenger($.triad_van2, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 0);
  $.triads4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads4.SetObjKillPlayerAnyMeans($.player);
  $.triads4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_van3 = Car.Create(125 /* CAR_BELLYUP */, 1342.5, -281.5, -100.0);
  $.triad_van3.SetHeading(90.0);
  $.triad_van3.SetDrivingStyle(3);
  $.triad_van3.SetCruiseSpeed(30.0);
  $.triad_van3.SetStrong(1 /* TRUE */);
  $.triads5 = Char.CreateInsideCar($.triad_van3, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`);
  $.triads5.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad_van3.SetMission(2);
  $.triads5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triads6 = Char.CreateAsPassenger($.triad_van3, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 0);
  $.triads6.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads6.SetObjKillPlayerAnyMeans($.player);
  $.triads6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_van4 = Car.Create(125 /* CAR_BELLYUP */, 1121.6, -345.2, -100.0);
  $.triad_van4.SetHeading(270.0);
  $.triad_van4.SetDrivingStyle(3);
  $.triad_van4.SetCruiseSpeed(30.0);
  $.triad_van4.SetStrong(1 /* TRUE */);
  $.triads7 = Char.CreateInsideCar($.triad_van4, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`);
  $.triads7.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triad_van4.SetMission(2);
  $.triads7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triads8 = Char.CreateAsPassenger($.triad_van4, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 0);
  $.triads8.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads8.SetObjKillPlayerAnyMeans($.player);
  $.triads8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_van5 = Car.Create(125 /* CAR_BELLYUP */, 1383.3, -285.0, -100.0);
  $.triad_van5.SetHeading(10.0);
  $.triad_van6 = Car.Create(125 /* CAR_BELLYUP */, 1383.3, -279.0, -100.0);
  $.triad_van6.SetHeading(160.0);
  $.triads9 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 1382.1, -281.7, -100.0);
  $.triads9.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads9.SetStayInSamePlace(1 /* TRUE */);
  $.triads9.SetObjDestroyCar($.carry_car);
  $.triads9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triads10 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 1384.3, -291.5, -100.0);
  $.triads10.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.triads10.SetStayInSamePlace(1 /* TRUE */);
  $.triads10.SetObjDestroyCar($.carry_car);
  $.triads10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  Camera.PointAtCar($.triad_van1, 3 /* BEHINDCAR */, 1 /* INTERPOLATION */);
  await asyncWait(3000);
  $.player.SetControl(1 /* On */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
}

async function get_to_frankies() {
  $.flag_car_blip_displayed = 1 /* TRUE */;
  if (!(Car.IsDead($.carry_car))) {
    $.frankie_garage.SetTargetCarForMission($.carry_car);
  }
  if (!(Car.IsDead($.carry_car))) {
    if (!($.player.IsInCar($.carry_car))) {
      $.blip1_t3.Remove();
      $.blip1_t3 = Blip.AddForCar($.carry_car);
      $.blob_flag = 0;
      Text.PrintNow("IN_VEH", 5000, 1);
    }
  }
  while (!($.frankie_garage.IsCarInMission())) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      Text.PrintNow("TM3_A3", 5000, 1);
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.carry_car)) {
      if ($.flag_car_blip_displayed == 1 /* TRUE */) {
        $.blip2_t3 = Blip.AddForCoord(1428.6, -183.1, -100.0);
        $.blip2_t3.ChangeDisplay(2 /* BLIP_ONLY */);
        $.blip1_t3.Remove();
        $.flag_car_blip_displayed = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.carry_car))) {
      if ($.flag_car_blip_displayed == 0 /* FALSE */) {
        $.blip1_t3 = Blip.AddForCar($.carry_car);
        $.blip2_t3.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed = 1 /* TRUE */;
      }
    }
    if (!(Car.IsDead($.triad_van1))) {
      if ($.triad_van1.IsInArea2D(1393.6, -268.2, 1427.1, -154.1, 0 /* FALSE */)) {
        if (!(Char.IsDead($.triads1)) && !(Char.IsDead($.triads2))) {
          $.triads1.SetObjKillPlayerOnFoot($.player);
          $.triads2.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if (!(Car.IsDead($.triad_van2))) {
      if ($.triad_van2.IsInArea2D(1393.6, -268.2, 1427.1, -154.1, 0 /* FALSE */)) {
        if (!(Char.IsDead($.triads3)) && !(Char.IsDead($.triads4))) {
          $.triads3.SetObjKillPlayerOnFoot($.player);
          $.triads4.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if (!(Car.IsDead($.triad_van3))) {
      if ($.triad_van3.IsInArea2D(1393.6, -268.2, 1427.1, -154.1, 0 /* FALSE */)) {
        if (!(Char.IsDead($.triads5)) && !(Char.IsDead($.triads6))) {
          $.triads5.SetObjKillPlayerOnFoot($.player);
          $.triads6.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if (!(Car.IsDead($.triad_van4))) {
      if ($.triad_van4.IsInArea2D(1393.6, -268.2, 1427.1, -154.1, 0 /* FALSE */)) {
        if (!(Char.IsDead($.triads7)) && !(Char.IsDead($.triads8))) {
          $.triads7.SetObjKillPlayerOnFoot($.player);
          $.triads8.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
  }
  $.blip1_t3.Remove();
  $.blip2_t3.Remove();
  Camera.SetFixedPosition(1421.8, -182.5, 52.5, 0.0, 0.0, 0.0);
  Camera.PointAtCar($.carry_car, 15 /* FIXED */, 1 /* INTERPOLATION */);
  await asyncWait(1000);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  if ($.player.IsInAnyCar()) {
    $.player.WarpFromCarToCoord(1454.6, -189.5, 55.0);
  }
  else {
    $.player.SetCoordinates(1454.6, -189.5, 55.0);
  }
  if (!(Char.IsDead($.triads1))) {
    $.triads1.Delete();
  }
  if (!(Char.IsDead($.triads2))) {
    $.triads2.Delete();
  }
  if (!(Char.IsDead($.triads3))) {
    $.triads3.Delete();
  }
  if (!(Char.IsDead($.triads4))) {
    $.triads4.Delete();
  }
  if (!(Char.IsDead($.triads5))) {
    $.triads5.Delete();
  }
  if (!(Char.IsDead($.triads6))) {
    $.triads6.Delete();
  }
  if (!(Char.IsDead($.triads7))) {
    $.triads7.Delete();
  }
  if (!(Char.IsDead($.triads8))) {
    $.triads8.Delete();
  }
  if (!(Char.IsDead($.triads9))) {
    $.triads9.Delete();
  }
  if (!(Char.IsDead($.triads10))) {
    $.triads10.Delete();
  }
  if (!(Car.IsDead($.triad_van1))) {
    $.triad_van1.Delete();
  }
  if (!(Car.IsDead($.triad_van2))) {
    $.triad_van2.Delete();
  }
  if (!(Car.IsDead($.triad_van3))) {
    $.triad_van3.Delete();
  }
  if (!(Car.IsDead($.triad_van4))) {
    $.triad_van4.Delete();
  }
  if (!(Car.IsDead($.triad_van5))) {
    $.triad_van5.Delete();
  }
  if (!(Car.IsDead($.triad_van6))) {
    $.triad_van6.Delete();
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Car.IsDead($.carry_car)) {
      Text.PrintNow("TM3_A3", 5000, 1);
      // SCM GOTO → mission_toni3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_toni3_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  World.ClearArea(1427.0, -187.8, 50.0, 12.0, 1 /* TRUE */);
  World.ClearArea(1444.99, -186.9, 56.0, 30.0, 1 /* TRUE */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadSpecialCharacter(4, $.frankie);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, FRANKH);
  Streaming.LoadSpecialModel(hier`cutobj03`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj04`, LUIGIH);
  Streaming.LoadSpecialModel(hier`cutobj05`, TONYH);
  Streaming.RequestModel(salvsdetail);
  Streaming.RequestModel(swank_inside);
  Streaming.RequestModel(franksclb02);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasModelLoaded(salvsdetail)) || !(Streaming.HasModelLoaded(swank_inside)) || !(Streaming.HasModelLoaded(franksclb02))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`))) {
    await asyncWait(0);
  }
  Cutscene.Load(S0_MAS);
  Cutscene.SetOffset(1457.776, -185.348, 54.925);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_tony = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_tony.SetAnim(tony);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_joey.SetAnim(joey2);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_luigi.SetAnim($.luigi);
  $.cs_frankie = CutsceneObject.Create(ped`SPECIAL4`);
  $.cs_frankie.SetAnim($.frankie);
  $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`);
  $.cs_mafia.SetAnim(gang02);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj02`);
  $.cs_frankiehead.SetAnim(frank);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj03`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj04`);
  $.cs_luigihead.SetAnim($.luigi);
  $.cs_tonyhead = CutsceneHead.Create($.cs_tony, hier`cutobj05`);
  $.cs_tonyhead.SetAnim(tony);
  $.player.SetHeading(341.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 416) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_H, 10000, 1);
  while ($.cs_time < 3252) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_I, 10000, 1);
  while ($.cs_time < 4866) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_J, 10000, 1);
  while ($.cs_time < 5839) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_K, 10000, 1);
  while ($.cs_time < 10201) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_L, 10000, 1);
  while ($.cs_time < 13769) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_M, 10000, 1);
  while ($.cs_time < 17654) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_N, 10000, 1);
  while ($.cs_time < 18718) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_N2, 10000, 1);
  while ($.cs_time < 19529) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_O, 10000, 1);
  while ($.cs_time < 21673) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_P, 10000, 1);
  while ($.cs_time < 25525) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_Q, 10000, 1);
  while ($.cs_time < 26615) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_R, 10000, 1);
  while ($.cs_time < 29462) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_S, 10000, 1);
  while ($.cs_time < 32814) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_T, 10000, 1);
  while ($.cs_time < 35855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_U, 10000, 1);
  while ($.cs_time < 37787) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_V, 10000, 1);
  while ($.cs_time < 44707) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(TM3_W, 10000, 1);
  while ($.cs_time < 47837) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 48666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.MarkModelAsNoLongerNeeded(salvsdetail);
  Streaming.MarkModelAsNoLongerNeeded(swank_inside);
  Streaming.MarkModelAsNoLongerNeeded(franksclb02);
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  }
  // SCM GOTO → mission_toni3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_toni3_passed"); // fallback: would break linear control flow
}

async function mission_toni3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_toni3_passed() {
  $.flag_toni_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 15000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(15000);
  Stat.RegisterMissionPassed(TM3);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT frankie_mission1_loop
  $.luigi_contact_blip.Remove();
  $.joey_contact_blip.Remove();
  $.toni_contact_blip.Remove();
  $.frankie_contact_blip.Remove();
  $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
  $.carry_car.Delete();
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  return;
}

async function mission_cleanup_toni3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_toni_mission = 0;
  $.blip1_t3.Remove();
  $.blip2_t3.Remove();
  $.blip3_t3.Remove();
  $.blip4_t3.Remove();
  $.blip5_t3.Remove();
  $.joey.RemoveElegantly();
  $.luigi.RemoveElegantly();
  $.toni.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(car`STRETCH`);
  Streaming.MarkModelAsNoLongerNeeded(car`BELLYUP`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  $.frankie_garage.SetTargetCarForMission(-1);
  Text.ClearThisPrint("IN_VEH");
  Mission.Finish();
  return;
}

export async function toni3() {
  // MissionBoundary
  // SCM GOSUB mission_start_toni3
  await mission_start_toni3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (has_deatharrest_been_executed()) {
    // SCM GOSUB mission_toni3_failed
    await mission_toni3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_toni3
  await mission_cleanup_toni3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT carry_car blip1_t3 blip2_t3 blip3_t3 blip4_t3 blip5_t3 cutscene_seen_flag
  // VAR_INT flag_displayed_horn_message_tm3 flag_displayed_wanted_message_tm3 flag_car_blip_displayed
  // VAR_INT triads1 triads2 triads3 triads4 triads5 triads6 triads7 triads8 triads9 triads10
  // VAR_INT triad_van1 triad_van2 triad_van3 triad_van4 triad_van5 triad_van6
}
