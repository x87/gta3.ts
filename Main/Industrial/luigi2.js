// Generated from Main/Industrial/luigi2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_luigi2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_luigi_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_got_help_message_lm2 = 0;
  $.flag_victim_ped_lm2_changed = 0;
  $.flag_victim_dead_lm2 = 0;
  $.flag_car_in_garage_lm2 = 0;
  $.flag_player_had_car_message_lm2 = 0;
  $.flag_player_had_garage_message_lm2 = 0;
  $.flag_buyer1_dead_lm2 = 0;
  $.flag_buyer2_dead_lm2 = 0;
  $.flag_done_looking_bit_lm2 = 0;
  $.flag_had_spray_help = 0;
  $.flag_player_had_bat_message_lm2 = 0;
  $.flag_had_path_message_lm2 = 0;
  $.flag_lockup_message_lm2 = 0;
  $.flag_girl1_running_lm2 = 0;
  $.flag_girl2_running_lm2 = 0;
  $.flag_player_in_area_lm2 = 0;
  $.flag_player_in_car_lm2 = 0;
  {
  Streaming.RequestModel(ped`DOCKER2`);
  Streaming.RequestModel(ped`PROSTITUTE`);
  Streaming.RequestModel(ped`PROSTITUTE2`);
  Streaming.RequestModel(car`STALLION`);
  Text.ClearHelp();
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  Streaming.LoadSpecialCharacter(1, $.micky);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, MICKYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, NOTE);
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 0 /* FALSE */);
  Cutscene.Load(l2_dsb);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_micky.SetAnim($.micky);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj02`);
  $.cs_mickyhead.SetAnim($.micky);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.SetAnim(LUDOOR);
  $.cs_note = CutsceneObject.Create(hier`cutobj04`);
  $.cs_note.SetAnim(NOTE);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(896.6, -426.2, 13.9);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_C", 10000, 1);
  while ($.cs_time < 7989) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_D", 10000, 1);
  while ($.cs_time < 12078) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_A", 10000, 1);
  while ($.cs_time < 15287) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_E", 10000, 1);
  while ($.cs_time < 19558) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_B", 10000, 1);
  while ($.cs_time < 23042) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_F", 10000, 1);
  while ($.cs_time < 25852) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM2_G", 10000, 1);
  while ($.cs_time < 28632) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM2_G");
  while ($.cs_time < 31000) {
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
  Camera.SetBehindPlayer();
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  World.SetPedDensityMultiplier(1.0);
  Path.SwitchPedRoadsOff(1609.8, -615.2, 9.0, 1557.8, -673.4, 20.0);
  $.bat_lm2 = Pickup.Create(153 /* WEAPON_BAT */, 3 /* PICKUP_ONCE */, 917.2, -425.3, 14.5);
  $.bat_blip_lm2 = Blip.AddForPickup($.bat_lm2);
  while (!(Streaming.HasModelLoaded(car`STALLION`)) || !(Streaming.HasModelLoaded(ped`DOCKER2`)) || !(Streaming.HasModelLoaded(ped`PROSTITUTE`)) || !(Streaming.HasModelLoaded(ped`PROSTITUTE2`))) {
    await asyncWait(0);
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.player.SetControl(1 /* ON */);
  Text.PrintNow("BAT1", 5000, 1);
  Text.PrintHelp("HELP14");
  $.victim_ped_lm2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, ped`DOCKER2`, 1399.64, -833.72, -100.0);
  $.victim_ped_lm2.TurnToFaceCoord(1397.46, -835.52, 10.8);
  $.victim_ped_lm2.ClearThreatSearch();
  $.buyer1_lm2 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1397.21, -832.86, -100.0);
  $.buyer1_lm2.ClearThreatSearch();
  $.buyer1_lm2.TurnToFaceCoord(1399.64, -833.72, 10.8);
  $.buyer2_lm2 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1397.28, -834.43, -100.0);
  $.buyer2_lm2.ClearThreatSearch();
  $.buyer2_lm2.TurnToFaceCoord(1399.64, -833.72, 10.8);
  $.car_lm2 = Car.Create(122 /* CAR_STALLION */, 1396.67, -837.69, -100.0);
  $.car_lm2.SetHeading(301.0);
  $.car_lm2.ChangeLock(2 /* CARLOCK_LOCKED */);
  $.radar_blip_ped1_lm2 = Blip.AddForChar($.victim_ped_lm2);
  if (!(Char.IsDead($.victim_ped_lm2))) {
    if (!(Char.IsDead($.buyer1_lm2))) {
      Game.SetCharsChatting($.victim_ped_lm2, $.buyer1_lm2, -1);
    }
  }
  await asyncWait(0);
  timerb = 0;
  while (!(Char.IsDead($.victim_ped_lm2))) {
    // SCM GOSUB girls_running
    await girls_running();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_player_had_bat_message_lm2 == 0) {
      if ($.bat_lm2.HasBeenCollected()) {
        Text.PrintHelp("GUN_1A");
        $.bat_blip_lm2.Remove();
        Text.ClearThisPrint("BAT1");
        $.flag_player_had_bat_message_lm2 = 1;
      }
    }
    if ($.flag_had_path_message_lm2 == 0) {
      if (timerb >= 30000) {
        Text.PrintHelp("HELP13");
        $.flag_had_path_message_lm2 = 1;
      }
    }
    if (Char.IsDead($.victim_ped_lm2)) {
      $.radar_blip_ped1_lm2.Remove();
      $.flag_victim_dead_lm2 = 1;
    }
    if (Car.IsDead($.car_lm2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.car_lm2.IsUpsidedown() && $.car_lm2.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
      }
    }
    if ($.flag_done_looking_bit_lm2 == 1 || $.player.IsInArea3D(1430.75, -807.0, 9.0, 1355.2, -883.2, 20.0, 0 /* FALSE */)) {
      $.flag_done_looking_bit_lm2 = 1;
      $.flag_player_in_area_lm2 = 1;
      if ($.flag_victim_dead_lm2 == 0) {
        if ($.player.LocateAnyMeansChar3D($.victim_ped_lm2, 10.0, 10.0, 10.0, 0 /* FALSE */) && $.flag_victim_ped_lm2_changed == 0) {
          $.victim_ped_lm2.TurnToFacePlayer($.player);
          $.victim_ped_lm2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.victim_ped_lm2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.victim_ped_lm2.SetHeedThreats(1 /* TRUE */);
          $.victim_ped_lm2.SetObjKillPlayerOnFoot($.player);
          $.flag_victim_ped_lm2_changed = 1;
        }
        if ($.player.LocateAnyMeansChar3D($.victim_ped_lm2, 6.0, 6.0, 15.0, 0 /* FALSE */) && $.flag_player_got_help_message_lm2 == 0) {
          $.controlmode = Pad.GetControllerMode();
          if ($.controlmode == 0) {
            Text.PrintHelp("LM2_2A");
            $.flag_player_got_help_message_lm2 = 1;
          }
          if ($.controlmode == 1) {
            Text.PrintHelp("LM2_2A");
            $.flag_player_got_help_message_lm2 = 1;
          }
          if ($.controlmode == 2) {
            Text.PrintHelp("LM2_2C");
            $.flag_player_got_help_message_lm2 = 1;
          }
          if ($.controlmode == 3) {
            Text.PrintHelp("LM2_2D");
            $.flag_player_got_help_message_lm2 = 1;
          }
        }
      }
    }
    await asyncWait(0);
  }
  if (!($.bat_lm2.HasBeenCollected())) {
    $.bat_blip_lm2.Remove();
    $.bat_lm2.Remove();
    $.flag_player_had_bat_message_lm2 = 1;
  }
  $.radar_blip_ped1_lm2.Remove();
  if (Car.IsDead($.car_lm2)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
  }
  else {
    if ($.car_lm2.IsUpsidedown() && $.car_lm2.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
    }
  }
  $.car_lm2.ChangeLock(1 /* CARLOCK_UNLOCKED */);
  $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2);
  Text.PrintNow("LM2_1", 7000, 1);
  while (!($.player.IsInCar($.car_lm2))) {
    await asyncWait(0);
    // SCM GOSUB girls_running
    await girls_running();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Car.IsDead($.car_lm2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.car_lm2.IsUpsidedown() && $.car_lm2.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.flag_player_in_car_lm2 = 1;
  Game.SetFreeResprays(1 /* ON */);
  $.radar_blip_car1_lm2.Remove();
  $.radar_blip_coord1_lm2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
  $.sphere1_lm2 = Sphere.Create(925.1, -350.5, 9.3, 2.5);
  $.sprayshop1.HasResprayHappened();
  while (!($.sprayshop1.HasResprayHappened()) || !($.player.IsInCar($.car_lm2)) || !($.player.IsStoppedInArea2D(922.6, -366.1, 928.6, -354.3, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_lm2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.car_lm2.IsUpsidedown() && $.car_lm2.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
      }
    }
    if (!($.player.IsInCar($.car_lm2)) && $.flag_player_had_car_message_lm2 == 0) {
      Text.PrintNow("IN_VEH", 7000, 1);
      $.radar_blip_coord1_lm2.Remove();
      $.sphere1_lm2.Remove();
      $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2);
      $.flag_player_had_car_message_lm2 = 1;
    }
    if ($.player.IsInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 1) {
      $.radar_blip_car1_lm2.Remove();
      $.radar_blip_coord1_lm2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
      if ($.flag_had_spray_help == 0) {
        $.sphere1_lm2 = Sphere.Create(925.1, -350.5, 9.3, 2.5);
      }
      $.flag_player_had_car_message_lm2 = 0;
    }
    if ($.player.LocateInCar3D(925.1, -350.5, 9.3, 2.5, 2.5, 2.5, 0 /* FALSE */) && $.player.IsInCar($.car_lm2)) {
      if ($.flag_had_spray_help == 0) {
        Text.PrintHelp("SPRAY1");
        $.sphere1_lm2.Remove();
        $.flag_had_spray_help = 1;
      }
    }
  }
  $.sphere1_lm2.Remove();
  $.radar_blip_coord1_lm2.Remove();
  $.radar_blip_coord2_lm2 = Blip.AddForCoord(1087.0, -574.0, -100.0);
  $.sphere2_lm2 = Sphere.Create(1088.4, -574.4, 13.7, 2.5);
  $.flag_blip2_on_lm2 = 1;
  $.garage_lm2.SetTargetCarForMission($.car_lm2);
  timerb = 0;
  while (!($.garage_lm2.IsCarInMission())) {
    await asyncWait(0);
    if ($.flag_lockup_message_lm2 == 0) {
      if (timerb >= 3000) {
        Text.PrintNow("LM2_3", 7000, 1);
        $.flag_lockup_message_lm2 = 1;
      }
    }
    if ($.flag_car_in_garage_lm2 == 0) {
      if (Car.IsDead($.car_lm2)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.car_lm2.IsUpsidedown() && $.car_lm2.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_luigi2_failed"); // fallback: would break linear control flow
        }
      }
      if (!($.player.IsInCar($.car_lm2)) && $.flag_player_had_car_message_lm2 == 0) {
        Text.PrintNow("IN_VEH", 5000, 1);
        $.sphere2_lm2.Remove();
        $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2);
        $.radar_blip_coord2_lm2.Remove();
        $.flag_player_had_car_message_lm2 = 1;
      }
      if ($.player.IsInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 1) {
        $.radar_blip_car1_lm2.Remove();
        $.radar_blip_coord2_lm2 = Blip.AddForCoord(1087.0, -574.0, -100.0);
        if ($.flag_player_had_garage_message_lm2 == 0) {
          $.sphere2_lm2 = Sphere.Create(1088.4, -574.4, 13.7, 2.5);
        }
        $.flag_player_had_car_message_lm2 = 0;
      }
      if ($.flag_player_had_garage_message_lm2 == 0) {
        if ($.player.LocateInCar3D(1088.4, -574.4, 13.7, 2.5, 2.5, 2.5, 0 /* FALSE */) && $.player.IsInCar($.car_lm2)) {
          Text.PrintHelp("GARAGE");
          $.sphere2_lm2.Remove();
          $.flag_player_had_garage_message_lm2 = 1;
        }
      }
      if (!($.player.LocateInCar3D(1088.4, -574.4, 13.7, 2.5, 2.5, 2.5, 0 /* FALSE */)) && $.flag_player_had_garage_message_lm2 == 1) {
        $.flag_player_had_garage_message_lm2 = 0;
      }
    }
    if (!(Car.IsDead($.car_lm2))) {
      if ($.garage_lm2.DoesContainCar($.car_lm2)) {
        $.flag_car_in_garage_lm2 = 1;
      }
      else {
        $.flag_car_in_garage_lm2 = 0;
      }
    }
  }
  $.radar_blip_coord2_lm2.Remove();
  $.sphere2_lm2.Remove();
  }
  // SCM GOTO → mission_luigi2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_luigi2_passed"); // fallback: would break linear control flow
}

async function mission_luigi2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_luigi2_passed() {
  $.flag_luigi_mission2_passed = 1;
  Stat.RegisterMissionPassed("LM2");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 4000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(4000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT luigi_mission3_loop
  return;
}

async function mission_cleanup_luigi2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  if ($.flag_player_had_bat_message_lm2 == 0) {
    $.bat_blip_lm2.Remove();
    $.bat_lm2.Remove();
  }
  if (!(Car.IsDead($.car_lm2))) {
    $.car_lm2.ChangeLock(1 /* CARLOCK_UNLOCKED */);
  }
  $.garage_lm2.SetTargetCarForMission(-1);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Streaming.MarkModelAsNoLongerNeeded(ped`DOCKER2`);
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE2`);
  $.radar_blip_ped1_lm2.Remove();
  $.radar_blip_car1_lm2.Remove();
  $.radar_blip_coord1_lm2.Remove();
  $.radar_blip_coord2_lm2.Remove();
  $.bat_blip_lm2.Remove();
  $.sphere1_lm2.Remove();
  $.sphere2_lm2.Remove();
  Game.SetFreeResprays(0 /* OFF */);
  Path.SwitchPedRoadsOn(1609.8, -615.2, 9.0, 1557.8, -673.4, 20.0);
  Mission.Finish();
  return;
}

async function girls_running() {
  if ($.flag_player_in_car_lm2 == 0) {
    if ($.flag_player_in_area_lm2 == 1) {
      if ($.flag_victim_ped_lm2_changed == 1) {
        if ($.flag_buyer1_dead_lm2 == 0) {
          if (Char.IsDead($.buyer1_lm2)) {
            $.flag_buyer1_dead_lm2 = 1;
          }
          else {
            if ($.flag_girl1_running_lm2 == 0) {
              $.buyer1_lm2.SetObjRunToCoord(1387.21, -837.38);
              $.flag_girl1_running_lm2 = 1;
            }
            if ($.flag_girl1_running_lm2 == 1) {
              if ($.buyer1_lm2.LocateOnFoot3D(1387.21, -837.38, 10.8, 4.0, 4.0, 4.0, 0 /* FALSE */)) {
                $.buyer1_lm2.SetObjFleePlayerOnFootAlways($.player);
                $.flag_girl1_running_lm2 = 2;
              }
            }
          }
        }
        if ($.flag_buyer2_dead_lm2 == 0) {
          if (Char.IsDead($.buyer2_lm2)) {
            $.flag_buyer2_dead_lm2 = 1;
          }
          else {
            if ($.flag_girl2_running_lm2 == 0) {
              $.buyer2_lm2.SetObjRunToCoord(1385.98, -839.30);
              $.flag_girl2_running_lm2 = 1;
            }
            if ($.flag_girl2_running_lm2 == 1) {
              if ($.buyer2_lm2.LocateOnFoot3D(1385.98, -839.30, 10.8, 4.0, 4.0, 4.0, 0 /* FALSE */)) {
                $.buyer2_lm2.SetObjFleePlayerOnFootAlways($.player);
                $.flag_girl2_running_lm2 = 2;
              }
            }
          }
        }
      }
    }
  }
  return;
}

export async function luigi2() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_luigi2
  await mission_start_luigi2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_luigi2_failed
    await mission_luigi2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_luigi2
  await mission_cleanup_luigi2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT radar_blip_ped1_lm2
  // VAR_INT victim_ped_lm2
  // VAR_INT flag_player_got_help_message_lm2
  // VAR_INT flag_victim_ped_lm2_changed
  // VAR_INT car_lm2
  // VAR_INT radar_blip_car1_lm2
  // VAR_INT radar_blip_coord1_lm2
  // VAR_INT radar_blip_coord2_lm2
  // VAR_INT flag_victim_dead_lm2
  // VAR_INT flag_player_had_car_message_lm2
  // VAR_INT flag_car_in_garage_lm2
  // VAR_INT flag_player_had_garage_message_lm2
  // VAR_INT flag_blip1_on_lm2
  // VAR_INT flag_blip2_on_lm2
  // VAR_INT buyer1_lm2
  // VAR_INT buyer2_lm2
  // VAR_INT flag_buyer1_dead_lm2
  // VAR_INT flag_buyer2_dead_lm2
  // VAR_INT flag_done_looking_bit_lm2
  // VAR_INT bat_lm2
  // VAR_INT sphere1_lm2
  // VAR_INT sphere2_lm2
  // VAR_INT flag_had_spray_help
  // VAR_INT flag_player_had_bat_message_lm2
  // VAR_INT bat_blip_lm2
  // VAR_INT flag_had_path_message_lm2
  // VAR_INT flag_lockup_message_lm2
  // VAR_INT flag_girl1_running_lm2
  // VAR_INT flag_girl2_running_lm2
  // VAR_INT flag_player_in_area_lm2
  // VAR_INT flag_player_in_car_lm2
}
