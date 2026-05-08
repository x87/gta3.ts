// Generated from Main/Industrial/luigi4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_luigi4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_luigi_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_got_message_luigi4 = 0;
  $.car_health_lm4 = 0;
  $.flag_car_dead_lm4 = 0;
  $.flag_pimp_dead_lm4 = 0;
  $.car_lm4_x = 0.0;
  $.car_lm4_y = 0.0;
  $.car_lm4_z = 0.0;
  $.flag_collected_gun_lm4 = 0;
  $.flag_gun_message_lm4 = 0;
  $.flag_pimp2_dead_lm4 = 0;
  $.flag_pimp_kill_player_luigi4 = 0;
  $.flag_ped1_not_in_car = 0;
  $.flag_ped2_not_in_car = 0;
  $.flag_player_had_shop_audio_lm4 = 0;
  $.flag_player_had_message1_lm4 = 0;
  $.flag_player_had_message2_lm4 = 0;
  $.flag_blokes_get_out_of_car_lm4 = 0;
  $.flag_car_blip_on_lm4 = 0;
  $.flag_done_camera_lm4 = 0;
  $.flag_set_car_driving_lm4 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.luigi);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, LUIGIH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  Streaming.RequestModel(car`DIABLOS`);
  Streaming.RequestModel(ped`GANG_DIABLO_A`);
  Streaming.RequestModel(ped`PIMP`);
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub)) || !(Streaming.HasModelLoaded(car`DIABLOS`)) || !(Streaming.HasModelLoaded(ped`GANG_DIABLO_A`)) || !(Streaming.HasModelLoaded(ped`PIMP`))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 0 /* FALSE */);
  Cutscene.Load(l4_pap);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_luigi.SetAnim($.luigi);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`);
  $.cs_luigihead.SetAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.SetAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(896.6, -426.2, 13.9);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 8775) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM4_A", 10000, 1);
  while ($.cs_time < 12872) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM4_B", 10000, 1);
  while ($.cs_time < 14886) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM4_C", 10000, 1);
  while ($.cs_time < 18506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM4_C");
  while ($.cs_time < 19333) {
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
  Streaming.LoadScene(920.3, -425.4, 15.0);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(car`DIABLOS`);
  Streaming.RequestModel(ped`GANG_DIABLO_A`);
  Streaming.RequestModel(ped`PIMP`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`DIABLOS`)) || !(Streaming.HasModelLoaded(ped`GANG_DIABLO_A`)) || !(Streaming.HasModelLoaded(ped`PIMP`))) {
    await asyncWait(0);
  }
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.car_lm4 = Car.Create(130 /* CAR_DIABLOS */, 1058.5, -421.0, -100.0);
  $.car_lm4.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.car_lm4.SetHeading(360.0);
  $.car_lm4.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.car_lm4.SetWatertight(1 /* TRUE */);
  $.rival_pimp_to_kill = Char.CreateInsideCar($.car_lm4, 4 /* PEDTYPE_CIVMALE */, ped`GANG_DIABLO_A`);
  $.rival_pimp_to_kill.ClearThreatSearch();
  $.rival_pimp_to_kill.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.pimp_lm4 = Char.CreateAsPassenger($.car_lm4, 4 /* PEDTYPE_CIVMALE */, ped`PIMP`, 0);
  $.pimp_lm4.ClearThreatSearch();
  $.pimp_lm4.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 30000);
  $.car_lm4.SetMission(11 /* MISSION_STOP_FOREVER */);
  $.radar_blip_car1_lm4 = Blip.AddForCar($.car_lm4);
  $.flag_car_blip_on_lm4 = 1;
  Streaming.LoadScene(1065.1, -398.6, 14.97);
  Camera.SetFixedPosition(1048.1, -398.3, 15.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1049.1, -398.3, 15.5, 2 /* JUMP_CUT */);
  $.gun_lm4 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 3 /* pickup_once */, 45, 1080.5, -396.0, 14.5);
  $.radar_blip_coord1_lm4 = Blip.AddSpriteForPickup($.gun_lm4, 20 /* RADAR_SPRITE_WEAPON */);
  timerb = 0;
  while (timerb < 8400) {
    await asyncWait(0);
    if ($.flag_set_car_driving_lm4 == 0) {
      if (timerb >= 2000) {
        if (!(Car.IsDead($.car_lm4))) {
          $.car_lm4.SetMission(1 /* MISSION_CRUISE */);
          $.car_lm4.SetCruiseSpeed(20.0);
          $.flag_set_car_driving_lm4 = 1;
        }
      }
    }
    if ($.flag_done_camera_lm4 == 0) {
      if (!(Car.IsDead($.car_lm4))) {
        if ($.car_lm4.Locate2D(1058.5, -398.5, 6.0, 6.0, 0 /* FALSE */)) {
          Camera.PointAtPoint(1048.6, -397.4, 15.5, 1 /* INTERPOLATION */);
          $.flag_done_camera_lm4 = 1;
        }
      }
    }
    // SCM GOSUB car_check_lm4
    await car_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB ped_death_check_lm4
    await ped_death_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB help_text_check_lm4
    await help_text_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_collected_gun_lm4 == 0) {
      if ($.gun_lm4.HasBeenCollected()) {
        $.radar_blip_coord1_lm4.Remove();
        $.flag_collected_gun_lm4 = 1;
      }
      if ($.flag_player_had_shop_audio_lm4 == 0) {
        if ($.player.IsInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, 0 /* FALSE */)) {
          if ($.camera_ammu1 == 1) {
            // SCM GOSUB audio_load_lm4
            await audio_load_lm4();
            // fallback if label was not emitted as async function: no-op continues linearly
          }
        }
      }
    }
    if ($.flag_ped2_not_in_car == 1 && $.flag_ped1_not_in_car == 1) {
      if ($.flag_car_blip_on_lm4 == 1) {
        $.radar_blip_car1_lm4.Remove();
        $.flag_car_blip_on_lm4 = 0;
      }
    }
  }
  Streaming.LoadScene(920.3, -425.4, 15.0);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  while ($.flag_pimp_dead_lm4 == 0 || $.flag_pimp2_dead_lm4 == 0) {
    await asyncWait(0);
    // SCM GOSUB car_check_lm4
    await car_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB ped_death_check_lm4
    await ped_death_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB help_text_check_lm4
    await help_text_check_lm4();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_collected_gun_lm4 == 0) {
      if ($.gun_lm4.HasBeenCollected()) {
        $.radar_blip_coord1_lm4.Remove();
        $.flag_collected_gun_lm4 = 1;
      }
      if ($.flag_player_had_shop_audio_lm4 == 0) {
        if ($.player.IsInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, 0 /* FALSE */)) {
          // SCM GOSUB audio_load_lm4
          await audio_load_lm4();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
    }
    if ($.flag_ped2_not_in_car == 1 && $.flag_ped1_not_in_car == 1) {
      if ($.flag_car_blip_on_lm4 == 1) {
        $.radar_blip_car1_lm4.Remove();
        $.flag_car_blip_on_lm4 = 0;
      }
    }
  }
  $.radar_blip_coord1_lm4.Remove();
  // SCM GOTO → mission_luigi4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_luigi4_passed"); // fallback: would break linear control flow
}

async function mission_luigi4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  if (!(Char.IsDead($.rival_pimp_to_kill))) {
    $.rival_pimp_to_kill.RemoveElegantly();
  }
  if (Char.IsDead($.pimp_lm4)) {
    $.pimp_lm4.RemoveElegantly();
  }
  return;
}

async function mission_luigi4_passed() {
  $.flag_luigi_mission4_passed = 1;
  Stat.RegisterMissionPassed("LM4");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 4000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(4000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT luigi_mission5_loop
  if ($.out_of_stock_pistol == 0) {
    // START_NEW_SCRIPT pistol_message
  }
  return;
}

async function mission_cleanup_luigi4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  $.special_ammu_audio = 0;
  if ($.flag_car_dead_lm4 == 0) {
    if (!(Car.IsDead($.car_lm4))) {
      $.car_lm4.SetOnlyDamagedByPlayer(0 /* FALSE */);
      $.car_lm4.LockDoors(1 /* CARLOCK_UNLOCKED */);
      $.car_lm4.SetWatertight(0 /* FALSE */);
    }
  }
  $.gun_lm4.Remove();
  Streaming.MarkModelAsNoLongerNeeded(car`DIABLOS`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`PIMP`);
  if ($.flag_collected_gun_lm4 == 0) {
    $.gun_lm4.Remove();
  }
  // SCM GOSUB shite_complier_bit
  await shite_complier_bit();
  // fallback if label was not emitted as async function: no-op continues linearly
  Mission.Finish();
  return;
}

async function ped_death_check_lm4() {
  if ($.flag_pimp_dead_lm4 == 0) {
    if (!(Char.IsDead($.rival_pimp_to_kill))) {
      if ($.flag_blokes_get_out_of_car_lm4 == 1 || !($.rival_pimp_to_kill.IsInCar($.car_lm4))) {
        if ($.flag_player_got_message_luigi4 == 0) {
          $.rival_pimp_to_kill.SetObjKillPlayerAnyMeans($.player);
          $.rival_pimp_to_kill.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.rival_pimp_to_kill.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.flag_player_got_message_luigi4 = 1;
        }
      }
      if ($.flag_ped1_not_in_car == 0) {
        if (!($.rival_pimp_to_kill.IsInCar($.car_lm4))) {
          $.radar_blip_ped1_lm4 = Blip.AddForChar($.rival_pimp_to_kill);
          $.flag_ped1_not_in_car = 1;
        }
      }
    }
    if (Char.IsDead($.rival_pimp_to_kill)) {
      $.radar_blip_ped1_lm4.Remove();
      $.flag_pimp_dead_lm4 = 1;
    }
  }
  if ($.flag_pimp2_dead_lm4 == 0) {
    if (!(Char.IsDead($.pimp_lm4))) {
      if ($.flag_blokes_get_out_of_car_lm4 == 1 || !($.pimp_lm4.IsInCar($.car_lm4))) {
        if ($.flag_pimp_kill_player_luigi4 == 0) {
          $.pimp_lm4.SetObjKillPlayerAnyMeans($.player);
          $.pimp_lm4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.pimp_lm4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.flag_pimp_kill_player_luigi4 = 1;
        }
      }
      if ($.flag_ped2_not_in_car == 0) {
        if (!($.pimp_lm4.IsInCar($.car_lm4))) {
          $.radar_blip_ped2_lm4 = Blip.AddForChar($.pimp_lm4);
          $.flag_ped2_not_in_car = 1;
        }
      }
    }
    if (Char.IsDead($.pimp_lm4)) {
      $.radar_blip_ped2_lm4.Remove();
      $.flag_pimp2_dead_lm4 = 1;
    }
  }
  return;
}

async function audio_load_lm4() {
  if ($.player.IsInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, 0 /* FALSE */)) {
    $.special_ammu_audio = 1;
    if ($.camera_ammu1 == 1) {
      if (!(Char.IsDead($.ammu_shop_bloke1))) {
        if ($.flag_player_had_message1_lm4 == 0) {
          Audio.LoadMissionAudio(AMMU_A);
          $.flag_player_had_message1_lm4 = 1;
        }
        if ($.flag_player_had_message1_lm4 == 1) {
          if (Audio.HasMissionAudioLoaded()) {
            Audio.PlayMissionAudio();
            Text.PrintNow("AMMU_A", 5000, 1);
            $.flag_player_had_message1_lm4 = 2;
          }
        }
        if ($.flag_player_had_message1_lm4 == 2) {
          if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint("AMMU_A");
            $.flag_player_had_message1_lm4 = 3;
          }
        }
        if ($.flag_player_had_message1_lm4 == 3 && $.flag_player_had_message2_lm4 == 0) {
          Audio.LoadMissionAudio(AMMU_C);
          $.flag_player_had_message2_lm4 = 1;
        }
        if ($.flag_player_had_message2_lm4 == 1) {
          if (Audio.HasMissionAudioLoaded()) {
            Audio.PlayMissionAudio();
            Text.PrintNow("AMMU_C", 5000, 1);
            $.flag_player_had_message2_lm4 = 2;
          }
        }
        if ($.flag_player_had_message2_lm4 == 2) {
          if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint("AMMU_C");
            $.flag_player_had_shop_audio_lm4 = 1;
            $.special_ammu_audio = 0;
            $.flag_player_had_message2_lm4 = 3;
          }
        }
      }
      else {
        Audio.ClearMissionAudio();
        $.special_ammu_audio = 0;
      }
    }
  }
  else {
    Audio.ClearMissionAudio();
    $.special_ammu_audio = 0;
  }
  return;
}

async function car_check_lm4() {
  if ($.flag_car_dead_lm4 == 0) {
    if (Car.IsDead($.car_lm4)) {
      if ($.flag_car_blip_on_lm4 == 1) {
        $.radar_blip_car1_lm4.Remove();
        $.flag_car_blip_on_lm4 = 0;
      }
      $.flag_car_dead_lm4 = 1;
    }
    else {
      if ($.car_lm4.IsInWater()) {
        if ($.car_lm4.IsOnScreen()) {
          $.car_lm4.SetWatertight(0 /* FALSE */);
        }
        else {
          [$.car_lm4_x, $.car_lm4_y, $.car_lm4_z] = $.car_lm4.GetCoordinates();
          [$.car_lm4_x, $.car_lm4_y, $.car_lm4_z] = Path.GetClosestCarNode($.car_lm4_x, $.car_lm4_y, $.car_lm4_z);
        }
        if (!(Camera.IsPointOnScreen($.car_lm4_x, $.car_lm4_y, $.car_lm4_z, 5.0))) {
          $.car_lm4.SetCoordinates($.car_lm4_x, $.car_lm4_y, $.car_lm4_z);
        }
      }
      $.car_health_lm4 = $.car_lm4.GetHealth();
      if ($.car_health_lm4 < 999) {
        $.flag_blokes_get_out_of_car_lm4 = 1;
      }
      else {
        $.flag_blokes_get_out_of_car_lm4 = 0;
      }
    }
  }
  return;
}

async function help_text_check_lm4() {
  if ($.flag_player_had_gun_message == 0) {
    if ($.player.IsInAreaOnFoot3D(1075.2, -384.8, 14.0, 1086.2, -403.3, 17.0, 0 /* FALSE */)) {
      $.controlmode = Pad.GetControllerMode();
      if ($.controlmode == 0) {
        if ($.flag_gun_message_lm4 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_lm4 = 1;
        }
        if ($.flag_gun_message_lm4 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_lm4 = 2;
          }
        }
        if ($.flag_gun_message_lm4 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_lm4 = 3;
          }
        }
        if ($.flag_gun_message_lm4 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_lm4 = 4;
          }
        }
        if ($.flag_gun_message_lm4 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_lm4 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 1) {
        if ($.flag_gun_message_lm4 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_lm4 = 1;
        }
        if ($.flag_gun_message_lm4 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_lm4 = 2;
          }
        }
        if ($.flag_gun_message_lm4 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_lm4 = 3;
          }
        }
        if ($.flag_gun_message_lm4 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_lm4 = 4;
          }
        }
        if ($.flag_gun_message_lm4 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_lm4 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 2) {
        if ($.flag_gun_message_lm4 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_lm4 = 1;
        }
        if ($.flag_gun_message_lm4 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_lm4 = 2;
          }
        }
        if ($.flag_gun_message_lm4 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_lm4 = 3;
          }
        }
        if ($.flag_gun_message_lm4 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_lm4 = 4;
          }
        }
        if ($.flag_gun_message_lm4 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_lm4 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 3) {
        if ($.flag_gun_message_lm4 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_lm4 = 1;
        }
        if ($.flag_gun_message_lm4 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2D");
            timerb = 0;
            $.flag_gun_message_lm4 = 2;
          }
        }
        if ($.flag_gun_message_lm4 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_lm4 = 2;
          }
        }
        if ($.flag_gun_message_lm4 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3B");
            timerb = 0;
            $.flag_gun_message_lm4 = 3;
          }
        }
        if ($.flag_gun_message_lm4 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4B");
            timerb = 0;
            $.flag_gun_message_lm4 = 4;
          }
        }
        if ($.flag_gun_message_lm4 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_lm4 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
    }
  }
  return;
}

async function shite_complier_bit() {
  $.radar_blip_ped1_lm4.Remove();
  $.radar_blip_ped2_lm4.Remove();
  $.radar_blip_coord1_lm4.Remove();
  $.radar_blip_car1_lm4.Remove();
  return;
  }
}

export async function luigi4() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_luigi4
  await mission_start_luigi4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_luigi4_failed
    await mission_luigi4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_luigi4
  await mission_cleanup_luigi4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT radar_blip_ped1_lm4
  // VAR_INT radar_blip_coord1_lm4
  // VAR_INT radar_blip_car1_lm4
  // VAR_INT rival_pimp_to_kill
  // VAR_INT car_lm4
  // VAR_INT flag_player_got_message_luigi4
  // VAR_INT car_health_lm4
  // VAR_INT flag_car_dead_lm4
  // VAR_INT flag_pimp_dead_lm4
  // VAR_INT gun_lm4
  // VAR_FLOAT car_lm4_x
  // VAR_FLOAT car_lm4_y
  // VAR_FLOAT car_lm4_z
  // VAR_INT flag_collected_gun_lm4
  // VAR_INT flag_gun_message_lm4
  // VAR_INT flag_pimp2_dead_lm4
  // VAR_INT pimp_lm4
  // VAR_INT flag_pimp_kill_player_luigi4
  // VAR_INT radar_blip_ped2_lm4
  // VAR_INT flag_ped1_not_in_car
  // VAR_INT flag_ped2_not_in_car
  // VAR_INT flag_player_had_shop_audio_lm4
  // VAR_INT flag_player_had_message1_lm4
  // VAR_INT flag_player_had_message2_lm4
  // VAR_INT flag_blokes_get_out_of_car_lm4
  // VAR_INT flag_car_blip_on_lm4
  // VAR_INT flag_done_camera_lm4
  // VAR_INT flag_set_car_driving_lm4
}
