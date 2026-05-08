// Generated from Main/Industrial/luigi1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_luigi1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_luigi_mission = 1;
  await asyncWait(0);
  $.flag_player_had_car_message_lm1 = 0;
  $.flag_player_not_in_car_message_lm1 = 0;
  flag_luigi_created_lm1 = 0;
  $.no_of_passengers_car_lm1 = 0;
  $.flag_girl1_in_car_lm1 = 0;
  flag_girl2_in_car_lm1 = 0;
  $.passenger_count_lm1 = 0;
  $.total_space_in_car_lm1 = 0;
  $.flag_blip_on_girl1_lm1 = 0;
  flag_blip_on_girl2_lm1 = 0;
  $.flag_coord_blip_on = 0;
  Streaming.LoadSpecialCharacter(1, $.micky);
  Streaming.LoadSpecialCharacter(2, EIGHT);
  Streaming.LoadSpecialCharacter(3, $.luigi);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, MICKYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, EIGHT);
  Streaming.LoadSpecialModel(hier`cutobj04`, $.luigi);
  {
  if ($.flag_failed_luigi1 == 0) {
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(250, 0 /* FADE_OUT */);
    Text.PrintBig("LM2", 10000, 2);
    TIMERA = 0;
    while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
      await asyncWait(0);
    }
    while (!(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
      await asyncWait(0);
    }
    Cutscene.Load(luigi1);
    Cutscene.SetOffset(901.82, -426.3, 13.85);
    $.cs_player = CutsceneObject.Create(ped`PLAYER`);
    $.cs_player.SetAnim($.player);
    $.cs_micky = CutsceneObject.Create(ped`SPECIAL1`);
    $.cs_micky.SetAnim($.micky);
    $.cs_eight = CutsceneObject.Create(ped`SPECIAL2`);
    $.cs_eight.SetAnim(eight);
    $.cs_luigi = CutsceneObject.Create(ped`SPECIAL3`);
    $.cs_luigi.SetAnim($.luigi);
    $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj02`);
    $.cs_mickyhead.SetAnim($.micky);
    $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj03`);
    $.cs_eighthead.SetAnim(eight);
    $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj04`);
    $.cs_luigihead.SetAnim($.luigi);
    $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
    $.cs_ludoor.SetAnim(LUDOOR);
    while (TIMERA < 3500) {
      await asyncWait(0);
    }
    Camera.DoFade(250, 1 /* FADE_IN */);
    Cutscene.Start();
    $.player.SetVisible(0 /* OFF */);
    $.player.SetCoordinates(896.6, -426.2, 13.9);
    $.player.SetHeading(180.0);
    $.cs_time = Cutscene.GetTime();
    while ($.cs_time < 16000) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("LM2_A", 5000, 1);
    while ($.cs_time < 21000) {
      await asyncWait(0);
      $.cs_time = Cutscene.GetTime();
    }
    Text.PrintNow("LM2_B", 5000, 1);
    while (!(Cutscene.HasFinished())) {
      await asyncWait(0);
    }
    Cutscene.Clear();
    Text.ClearPrints();
    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Streaming.UnloadSpecialCharacter(3);
  }
  $.player.SetControl(0 /* off */);
  Streaming.RequestModel(ped`PROSTITUTE`);
  Streaming.LoadSpecialCharacter(2, $.misty);
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(ped`PROSTITUTE`))) {
    await asyncWait(0);
  }
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.girl1_lm1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1158.0, -536.0, 20.0);
  $.girl1_lm1.ClearThreatSearch();
  $.girl1_lm1.TurnToFaceCoord(1158.0, -541.0, -100.0);
  $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
  girl2_lm1 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1383.0, -392.0, -100.0);
  girl2_lm1.ClearThreatSearch();
  girl2_lm1.TurnToFaceCoord(1380.0, -391.0, -100.0);
  $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);
  while (!($.player.IsInAnyCar())) {
    await asyncWait(0);
  }
  $.car_lm1 = $.player.StoreCarIsIn();
  $.no_of_passengers_car_lm1 = $.car_lm1.GetMaximumNumberOfPassengers();
  while (!($.player.IsInAnyCar()) || !($.flag_girl1_in_car_lm1 == 1) || !(flag_girl2_in_car_lm1 == 1)) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead(girl2_lm1)) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      $.car_lm1 = $.player.StoreCarIsIn();
      $.no_of_passengers_car_lm1 = $.car_lm1.GetMaximumNumberOfPassengers();
      $.flag_player_not_in_car_message_lm1 = 0;
      if ($.flag_girl1_in_car_lm1 == 0) {
        if ($.player.LocateInCarChar2D($.girl1_lm1, 8.0, 8.0, 0 /* FALSE */) && $.player.IsStopped()) {
          $.flag_player_had_car_message_lm1 = 0;
          $.passenger_count_lm1 = $.car_lm1.GetNumberOfPassengers();
          $.total_space_in_car_lm1 = $.no_of_passengers_car_lm1 - $.passenger_count_lm1;
          if ($.total_space_in_car_lm1 >= 1) {
            $.girl1_lm1.FollowPlayer($.player);
            while (!($.girl1_lm1.IsInCar($.car_lm1))) {
              await asyncWait(0);
              if (Car.IsDead($.car_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
              if (Char.IsDead($.girl1_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
              if (Char.IsDead(girl2_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
            }
            $.radar_blip_ped1_lm1.Remove();
            $.flag_girl1_in_car_lm1 = 1;
          }
          else {
            if ($.flag_player_had_car_message_lm1 == 0) {
              Text.PrintNow("NODOORS", 7000, 1);
              $.flag_player_had_car_message_lm1 = 1;
            }
          }
        }
      }
      if (flag_girl2_in_car_lm1 == 0) {
        if ($.player.LocateInCarChar2D(girl2_lm1, 8.0, 8.0, 0 /* FALSE */) && $.player.IsStopped()) {
          $.flag_player_had_car_message_lm1 = 0;
          $.passenger_count_lm1 = $.car_lm1.GetNumberOfPassengers();
          $.total_space_in_car_lm1 = $.no_of_passengers_car_lm1 - $.passenger_count_lm1;
          if ($.total_space_in_car_lm1 >= 1) {
            girl2_lm1.FollowPlayer($.player);
            while (!(girl2_lm1.IsInCar($.car_lm1))) {
              await asyncWait(0);
              if (Car.IsDead($.car_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
              if (Char.IsDead($.girl1_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
              if (Char.IsDead(girl2_lm1)) {
                Text.PrintBig("M_FAIL", 5000, 1);
                // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
              }
            }
            $.radar_blip_ped2_lm1.Remove();
            flag_girl2_in_car_lm1 = 1;
          }
          else {
            if ($.flag_player_had_car_message_lm1 == 0) {
              Text.PrintNow("NODOORS", 7000, 1);
              $.flag_player_had_car_message_lm1 = 1;
            }
          }
        }
      }
      if ($.flag_girl1_in_car_lm1 == 1) {
        if (!($.girl1_lm1.IsInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
          Text.PrintSoon("HEY", 5000, 1);
          $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
          $.flag_girl1_in_car_lm1 = 0;
          $.flag_blip_on_girl1_lm1 = 1;
        }
      }
      if (flag_girl2_in_car_lm1 == 1) {
        if (!(girl2_lm1.IsInPlayersGroup($.player)) && flag_blip_on_girl2_lm1 == 0) {
          Text.PrintSoon("HEY", 5000, 1);
          $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);
          flag_girl2_in_car_lm1 = 0;
          flag_blip_on_girl2_lm1 = 1;
        }
      }
    }
    else {
      if ($.flag_player_not_in_car_message_lm1 == 0) {
        Text.PrintNow("IN_VEH2", 7000, 1);
        $.flag_player_not_in_car_message_lm1 = 1;
      }
    }
  }
  Text.PrintNow("LM1_2", 7000, 1);
  $.radar_blip_coord1_lm1 = Blip.AddForCoord(908.0, -425.0, -100.0);
  $.flag_coord_blip_on = 1;
  while (!($.player.LocateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, 1 /* TRUE */)) || !($.girl1_lm1.LocateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, 0 /* FALSE */)) || !(girl2_lm1.LocateStoppedAnyMeans2D(908.0, -425.0, 4.0, 4.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead(girl2_lm1)) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      $.car_lm1 = $.player.StoreCarIsIn();
      $.no_of_passengers_car_lm1 = $.car_lm1.GetMaximumNumberOfPassengers();
      if ($.no_of_passengers_car_lm1 < 2 && $.flag_player_had_car_message_lm1 == 0) {
        Text.PrintNow("NODOORS", 7000, 1);
        $.flag_player_had_car_message_lm1 = 1;
      }
      if ($.no_of_passengers_car_lm1 >= 2 && $.flag_player_had_car_message_lm1 == 1) {
        $.flag_player_had_car_message_lm1 = 0;
      }
    }
    if (!($.girl1_lm1.IsInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
      Text.PrintSoon("HEY", 5000, 1);
      $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
      $.radar_blip_coord1_lm1.Remove();
      $.flag_blip_on_girl1_lm1 = 1;
    }
    if (!(girl2_lm1.IsInPlayersGroup($.player)) && flag_blip_on_girl2_lm1 == 0) {
      Text.PrintSoon("HEY", 5000, 1);
      $.radar_blip_ped2_lm1 = Blip.AddForChar(girl2_lm1);
      $.radar_blip_coord1_lm1.Remove();
      flag_blip_on_girl2_lm1 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
      $.girl1_lm1.FollowPlayer($.player);
      $.radar_blip_ped1_lm1.Remove();
      $.flag_coord_blip_on = 0;
      $.flag_blip_on_girl1_lm1 = 0;
    }
    if ($.player.LocateAnyMeansChar2D(girl2_lm1, 8.0, 8.0, 0 /* FALSE */) && flag_blip_on_girl2_lm1 == 1) {
      girl2_lm1.FollowPlayer($.player);
      $.radar_blip_ped2_lm1.Remove();
      $.flag_coord_blip_on = 0;
      flag_blip_on_girl2_lm1 = 0;
    }
    if ($.girl1_lm1.IsInPlayersGroup($.player) && girl2_lm1.IsInPlayersGroup($.player) && $.flag_coord_blip_on == 0) {
      $.radar_blip_coord1_lm1 = Blip.AddForCoord(908.0, -425.0, -100.0);
      $.flag_coord_blip_on = 1;
    }
  }
  $.radar_blip_coord1_lm1.Remove();
  $.girl1_lm1.LeaveGroup();
  girl2_lm1.LeaveGroup();
  if ($.girl1_lm1.IsInAnyCar() && girl2_lm1.IsInAnyCar()) {
    $.car_lm1 = $.girl1_lm1.StoreCarIsIn();
    $.girl1_lm1.SetObjLeaveCar($.car_lm1);
    $.car_lm1 = girl2_lm1.StoreCarIsIn();
    girl2_lm1.SetObjLeaveCar($.car_lm1);
    while ($.girl1_lm1.IsInAnyCar() && girl2_lm1.IsInAnyCar()) {
      await asyncWait(0);
      if (Char.IsDead($.girl1_lm1)) {
        Text.PrintBig("M_FAIL", 5000, 1);
        // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead(girl2_lm1)) {
        Text.PrintBig("M_FAIL", 5000, 1);
        // SCM GOTO → mission_luigi1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi1_failed"); // fallback: would break linear control flow
      }
    }
  }
  }
  // SCM GOTO → mission_luigi1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_luigi1_passed"); // fallback: would break linear control flow
}

async function mission_luigi1_failed() {
  $.flag_failed_luigi1 = 1;
  // START_NEW_SCRIPT luigi_mission1.2_loop
  return;
}

async function mission_luigi1_passed() {
  $.flag_luigi_mission1_passed = 1;
  Text.PrintBig("m_pass", 2000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(1500);
  // START_NEW_SCRIPT luigi_mission2_loop
  return;
}

async function mission_cleanup_luigi1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE`);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Camera.Restore();
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  Hud.SwitchWidescreen(0 /* OFF */);
  $.radar_blip_coord1_lm1.Remove();
  $.radar_blip_ped1_lm1.Remove();
  $.radar_blip_ped2_lm1.Remove();
  Mission.Finish();
  return;
}

export async function luigi1() {
  // MissionBoundary
  // SCM GOSUB mission_start_luigi1
  await mission_start_luigi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_luigi1_failed
    await mission_luigi1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_luigi1
  await mission_cleanup_luigi1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT radar_blip_coord1_lm1
  // VAR_INT radar_blip_ped1_lm1
  // VAR_INT radar_blip_ped2_lm1
  // VAR_INT girl1_lm1
  // VAR_INT girl2_lm1
  // VAR_INT car_lm1
  // VAR_INT flag_player_had_car_message_lm1
  // VAR_INT flag_player_not_in_car_message_lm1
  // VAR_INT flag_luigi_created_lm1
  // VAR_INT no_of_passengers_car_lm1
  // VAR_INT flag_girl1_in_car_lm1
  // VAR_INT flag_girl2_in_car_lm1
  // VAR_INT passenger_count_lm1
  // VAR_INT total_space_in_car_lm1
  // VAR_INT flag_blip_on_girl1_lm1
  // VAR_INT flag_blip_on_girl2_lm1
  // VAR_INT flag_coord_blip_on
}
