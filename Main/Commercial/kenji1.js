// Generated from Main/Commercial/kenji1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_km1 = 0;
  $.flag_player_had_bomb_message_km1 = 0;
  $.flag_player_got_cops_message_km1 = 0;
  $.flag_player_wanted_level_changed = 0;
  $.flag_blip_on_yakuza_ped1_km1 = 0;
  $.flag_car_got_bomb_km1 = 0;
  $.total_counter_km1 = 0;
  $.counter_bomb_km1 = 0;
  $.counter_police_km1 = 0;
  $.flag_had_bomb_message_km1 = 0;
  $.flag_blip_on_km1 = 0;
  $.blob_flag = 1;
  $.flag_area_bomb_message_km1 = 0;
  $.flag_spray_blip_on_km1 = 0;
  $.flag_bomb_km1 = 0;
  $.debris1_x = 0.0;
  $.debris1_y = 0.0;
  $.debris1_z = 0.0;
  $.debris2_x = 0.0;
  $.debris2_y = 0.0;
  $.debris2_z = 0.0;
  $.debris3_x = 0.0;
  $.debris3_y = 0.0;
  $.debris3_z = 0.0;
  $.debris4_x = 0.0;
  $.debris4_y = 0.0;
  $.debris4_z = 0.0;
  $.flag_dojo_blip_on = 0;
  $.flag_player_wanted = 0;
  $.flag_kanbu_in_group = 0;
  $.flag_player_had_dome_message_km1 = 0;
  $.flag_played_cop_radio_km1 = 0;
  {
  if ($.flag_need_wall_change_km1 == 1) {
    World.SwapNearestBuildingModel(328.026, -1090.262, 26.941, 2.0, police_celhole, police_cell_wall);
    $.flag_need_wall_change_km1 = 0;
  }
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k1_kbo);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.SetAnim($.kenji);
  $.cs_yakuza = CutsceneObject.Create(ped`GANG_YAKUZA_A`);
  $.cs_yakuza.SetAnim(gang07);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.SetAnim($.kenji);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(459.1, -1413.0, 25.11);
  $.player.SetHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 8392) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_A", 10000, 1);
  while ($.cs_time < 9918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_E", 10000, 1);
  while ($.cs_time < 13732) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_B", 10000, 1);
  while ($.cs_time < 17547) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_F", 10000, 1);
  while ($.cs_time < 20683) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_C", 10000, 1);
  while ($.cs_time < 23650) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_G", 10000, 1);
  while ($.cs_time < 25430) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM1_H", 10000, 1);
  while ($.cs_time < 28749) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM1_H");
  while ($.cs_time < 31200) {
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
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  Text.PrintNow("KM1_1", 5000, 1);
  Streaming.RequestModel(rubble01);
  Streaming.RequestModel(rubble02);
  Audio.LoadMissionAudio(K1_A);
  while (!(Streaming.HasModelLoaded(rubble01)) || !(Streaming.HasModelLoaded(rubble02)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.cell_beating = Sound.AddContinuous(326.4, -1092.4, 26.0, 77 /* SOUND_POLICE_CELL_BEATING_LOOP_L */);
  while (!($.player.IsInModel(109 /* CAR_POLICE */))) {
    await asyncWait(0);
  }
  $.mission_cop_car_km1 = $.player.StoreCarIsIn();
  Text.PrintNow("KM1_2", 5000, 1);
  $.sphere_km1 = Sphere.Create(373.9, -576.4, 25.1, 4.0);
  $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
  while (!($.flag_car_got_bomb_km1 == 1)) {
    await asyncWait(0);
    if ($.player.IsInModel(109 /* CAR_POLICE */)) {
      $.mission_cop_car_km1 = $.player.StoreCarIsIn();
      if ($.flag_player_had_car_message_km1 == 1) {
        $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
        if ($.flag_player_had_dome_message_km1 == 0) {
          $.sphere_km1 = Sphere.Create(373.9, -576.4, 25.1, 4.0);
        }
        $.flag_player_had_car_message_km1 = 0;
      }
      if ($.mission_cop_car_km1.IsArmedWithBomb(1 /* CARBOMB_TIMED */)) {
        $.flag_car_got_bomb_km1 = 1;
      }
      else {
        if ($.flag_had_bomb_message_km1 == 0) {
          Text.PrintNow("KM1_2", 5000, 1);
          $.flag_had_bomb_message_km1 = 1;
        }
      }
    }
    else {
      if ($.flag_player_had_car_message_km1 == 0) {
        Text.PrintNow("KM1_4", 7000, 1);
        $.radar_blip_coord1_km1.Remove();
        $.sphere_km1.Remove();
        $.flag_player_had_car_message_km1 = 1;
      }
      $.flag_had_bomb_message_km1 = 0;
    }
    if ($.player.LocateInCar2D(373.9, -576.4, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_had_dome_message_km1 == 0) {
        Text.PrintHelp("KM1_13");
        $.sphere_km1.Remove();
        $.flag_player_had_dome_message_km1 = 1;
      }
    }
    else {
      $.flag_player_had_dome_message_km1 = 0;
    }
  }
  $.radar_blip_coord1_km1.Remove();
  $.sphere_km1.Remove();
  Text.PrintNow("KM1_5", 7000, 1);
  $.radar_blip_coord2_km1 = Blip.AddForCoord(327.0, -1086.0, -100.0);
  $.blob_flag = 1;
  $.flag_blip_on_km1 = 1;
  $.blob_flag = 1;
  while ($.counter_bomb_km1 == 0) {
    await asyncWait(0);
    if ($.flag_area_bomb_message_km1 == 0) {
      if ($.player.IsInModel(109 /* CAR_POLICE */)) {
        $.mission_cop_car_km1 = $.player.StoreCarIsIn();
        $.flag_player_had_car_message_km1 = 0;
        if ($.mission_cop_car_km1.IsArmedWithBomb(1 /* CARBOMB_TIMED */) || $.mission_cop_car_km1.IsArmedWithBomb(4 /* CARBOMB_TIMEDACTIVE */)) {
          if ($.flag_player_had_bomb_message_km1 == 1) {
            $.radar_blip_coord1_km1.Remove();
            $.flag_player_had_bomb_message_km1 = 0;
          }
          if ($.flag_blip_on_km1 == 0) {
            $.radar_blip_coord2_km1 = Blip.AddForCoord(327.0, -1086.0, -100.0);
            $.flag_blip_on_km1 = 1;
            $.blob_flag = 1;
          }
          if ($.mission_cop_car_km1.IsInArea3D(331.7, -1091.0, 24.0, 323.7, -1078.3, 33.0, $.blob_flag)) {
            $.controlmode = Pad.GetControllerMode();
            if ($.flag_bomb_km1 == 0) {
              if ($.controlmode == 0) {
                Text.PrintHelp("KM1_8A");
              }
              if ($.controlmode == 1) {
                Text.PrintHelp("KM1_8A");
              }
              if ($.controlmode == 2) {
                Text.PrintHelp("KM1_8A");
              }
              if ($.controlmode == 3) {
                Text.PrintHelp("KM1_8D");
              }
              $.flag_bomb_km1 = 1;
            }
            if ($.mission_cop_car_km1.IsArmedWithBomb(4 /* CARBOMB_TIMEDACTIVE */)) {
              $.counter_bomb_km1 = 1;
              $.flag_area_bomb_message_km1 = 1;
            }
            else {
              $.flag_area_bomb_message_km1 = 0;
            }
          }
        }
        else {
          if ($.flag_area_bomb_message_km1 == 0) {
            if ($.flag_player_had_bomb_message_km1 == 0) {
              Text.PrintNow("KM1_6", 7000, 1);
              $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
              $.flag_player_had_bomb_message_km1 = 1;
              if ($.flag_blip_on_km1 == 1) {
                $.radar_blip_coord2_km1.Remove();
                $.flag_blip_on_km1 = 0;
                $.blob_flag = 0;
              }
            }
          }
        }
      }
      else {
        $.blob_flag = 0;
        if ($.flag_player_had_car_message_km1 == 0) {
          Text.PrintNow("KM1_4", 7000, 1);
          $.radar_blip_coord2_km1.Remove();
          $.flag_blip_on_km1 = 0;
          $.flag_player_had_car_message_km1 = 1;
        }
        if ($.flag_player_had_bomb_message_km1 == 1) {
          $.radar_blip_coord1_km1.Remove();
          $.flag_player_had_bomb_message_km1 = 0;
        }
      }
    }
  }
  Text.ClearHelp();
  $.radar_blip_coord2_km1.Remove();
  while (!(World.IsExplosionInArea(3 /* EXPLOSION_CAR */, 323.3, -1072.6, 24.0, 335.5, -1094.0, 33.0))) {
    if (Car.IsDead($.mission_cop_car_km1)) {
      Text.PrintNow("KM1_11", 5000, 1);
      $.player.AlterWantedLevelNoDrop(3);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  if (!(Car.IsDead($.mission_cop_car_km1))) {
    Text.PrintNow("KM1_11", 5000, 1);
    $.player.AlterWantedLevelNoDrop(3);
    // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOSUB wall_explosion
    await wall_explosion();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.cell_beating.Remove();
  $.police_alarm = Sound.AddContinuous(328.418, -1088.174, 28.3, 69 /* SOUND_BANK_ALARM_LOOP_L */);
  World.ClearArea(327.0, -1086.0, -100.0, 4.0, 1 /* TRUE */);
  World.SwapNearestBuildingModel(328.026, -1090.262, 26.941, 2.0, police_cell_wall, police_celhole);
  $.flag_need_wall_change_km1 = 1;
  $.radar_blip_coord2_km1.Remove();
  await asyncWait(500);
  $.yakuza_ped1_km1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 328.2, -1092.2, 24.9);
  $.yakuza_ped1_km1.SetRunning(1 /* TRUE */);
  $.yakuza_ped1_km1.ClearThreatSearch();
  $.yakuza_ped1_km1.FollowPlayer($.player);
  Text.PrintNow("KM1_12", 7000, 1);
  $.player.AlterWantedLevelNoDrop(3);
  $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
  timera = 0;
  while ($.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if ($.flag_played_cop_radio_km1 == 0) {
      if (timera > 2000) {
        Audio.PlayMissionAudio();
        $.flag_played_cop_radio_km1 = 1;
      }
    }
    if (Char.IsDead($.yakuza_ped1_km1)) {
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    if (!($.yakuza_ped1_km1.IsInPlayersGroup($.player))) {
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        Text.PrintNow("HEY6", 5000, 1);
        $.radar_blip_ped1_km1 = Blip.AddForChar($.yakuza_ped1_km1);
        $.spray_blip_km1.Remove();
        $.flag_blip_on_yakuza_ped1_km1 = 1;
      }
    }
    if ($.player.LocateAnyMeansChar2D($.yakuza_ped1_km1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_yakuza_ped1_km1 == 1) {
      $.yakuza_ped1_km1.FollowPlayer($.player);
      $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
      $.radar_blip_ped1_km1.Remove();
      $.flag_blip_on_yakuza_ped1_km1 = 0;
    }
  }
  $.spray_blip_km1.Remove();
  Text.PrintNow("KM1_3", 7000, 1);
  $.radar_blip_coord3_km1 = Blip.AddForCoord(105.6, -1292.68, -100.0);
  $.flag_dojo_blip_on = 1;
  Audio.LoadMissionAudio(k1_b);
  $.blob_flag = 1;
  while (!($.player.LocateStoppedAnyMeans2D(105.6, -1292.68, 3.0, 4.0, $.blob_flag)) || !($.yakuza_ped1_km1.LocateStoppedAnyMeans2D(105.6, -1292.68, 3.0, 4.0, 0 /* FALSE */)) || !(Audio.HasMissionAudioLoaded()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if (Char.IsDead($.yakuza_ped1_km1)) {
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    if (!($.yakuza_ped1_km1.IsInPlayersGroup($.player))) {
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        Text.PrintNow("HEY6", 5000, 1);
        $.radar_blip_ped1_km1 = Blip.AddForChar($.yakuza_ped1_km1);
        $.flag_blip_on_yakuza_ped1_km1 = 1;
        $.blob_flag = 0;
      }
      if ($.flag_spray_blip_on_km1 == 1) {
        $.spray_blip_km1.Remove();
        $.flag_spray_blip_on_km1 = 0;
        $.flag_player_got_cops_message_km1 = 0;
      }
    }
    if ($.player.LocateAnyMeansChar2D($.yakuza_ped1_km1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_yakuza_ped1_km1 == 1) {
      $.yakuza_ped1_km1.FollowPlayer($.player);
      $.radar_blip_ped1_km1.Remove();
      $.flag_blip_on_yakuza_ped1_km1 = 0;
      $.blob_flag = 1;
    }
    if ($.player.IsWantedLevelGreater(0)) {
      if ($.flag_player_got_cops_message_km1 == 0) {
        if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
          Text.PrintNow("WANTED1", 7000, 1);
          $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
          $.flag_player_got_cops_message_km1 = 1;
          $.flag_spray_blip_on_km1 = 1;
        }
      }
    }
    else {
      $.flag_player_got_cops_message_km1 = 0;
      if ($.flag_spray_blip_on_km1 == 1) {
        $.spray_blip_km1.Remove();
        $.flag_spray_blip_on_km1 = 0;
      }
    }
    if ($.flag_spray_blip_on_km1 == 0) {
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        if ($.flag_dojo_blip_on == 0) {
          $.radar_blip_coord3_km1 = Blip.AddForCoord(105.6, -1292.68, -100.0);
          Text.PrintNow("KM1_3", 7000, 1);
          $.blob_flag = 1;
          $.flag_dojo_blip_on = 1;
        }
      }
    }
    if ($.flag_dojo_blip_on == 1) {
      if ($.flag_spray_blip_on_km1 == 1 || $.flag_blip_on_yakuza_ped1_km1 == 1) {
        $.radar_blip_coord3_km1.Remove();
        $.blob_flag = 0;
        $.flag_dojo_blip_on = 0;
      }
    }
  }
  $.radar_blip_coord3_km1.Remove();
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Hud.SwitchWidescreen(1 /* ON */);
  $.yakuza_ped1_km1.LeaveGroup();
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.yakuza_ped1_km1)) {
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
  }
  Camera.SetFixedPosition(93.45, -1279.27, 35.08, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(94.19, -1279.91, 34.79, 2 /* JUMP_CUT */);
  $.yakuza_ped1_km1.SetRunning(0 /* FALSE */);
  if ($.yakuza_ped1_km1.IsInAnyCar()) {
    $.car_km1 = $.yakuza_ped1_km1.StoreCarIsIn();
    $.yakuza_ped1_km1.SetObjLeaveCar($.car_km1);
    while ($.yakuza_ped1_km1.IsInCar($.car_km1)) {
      await asyncWait(0);
      if (Char.IsDead($.yakuza_ped1_km1)) {
        Text.PrintNow("KM1_10", 5000, 1);
        // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.car_km1)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
      }
    }
  }
  World.ClearArea(111.05, -1274.75, 25.16, 6.0, 1 /* TRUE */);
  $.yakuza_ped1_km1.SetObjRunToCoord(111.05, -1274.75);
  timerb = 0;
  while (!($.yakuza_ped1_km1.LocateOnFoot3D(111.05, -1274.75, 25.16, 2.0, 2.0, 2.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.yakuza_ped1_km1)) {
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    if (timerb >= 8000) {
      if (!($.yakuza_ped1_km1.LocateOnFoot3D(111.05, -1274.75, 25.16, 2.0, 2.0, 2.0, 0 /* FALSE */))) {
        $.yakuza_ped1_km1.RemoveElegantly();
        // SCM GOTO → mission_bloke_got_stuck_km1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_got_stuck_km1"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_bloke_got_stuck_km1() {
  $.yakuza_ped1_km1.Delete();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Camera.RestoreJumpcut();
  // SCM GOTO → mission_kenji1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji1_passed"); // fallback: would break linear control flow
}

async function mission_kenji1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_kenji1_passed() {
  $.flag_kenji_mission1_passed = 1;
  Stat.RegisterMissionPassed("KM1");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 30000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(30000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT kenji_mission2_loop
  return;
}

async function mission_cleanup_kenji1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.police_alarm.Remove();
  $.cell_beating.Remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(rubble01);
  Streaming.MarkModelAsNoLongerNeeded(rubble02);
  $.radar_blip_coord1_km1.Remove();
  $.radar_blip_coord2_km1.Remove();
  $.radar_blip_coord3_km1.Remove();
  $.radar_blip_ped1_km1.Remove();
  $.spray_blip_km1.Remove();
  $.sphere_km1.Remove();
  Mission.Finish();
  return;
}

async function wall_explosion() {
  Fx.AddExplosion(328.1, -1087.5, 27.7, 5 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 328.1, -1088.3, 26.0, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 3000);
  $.debris1 = Object.Create(rubble02, 328.1, -1084.1, 27.0);
  $.debris2 = Object.Create(rubble02, 328.5, -1084.7, 27.0);
  $.debris3 = Object.Create(rubble01, 326.6, -1083.7, 26.0);
  $.debris4 = Object.Create(rubble01, 330.0, -1084.4, 27.0);
  $.debris1.SetDynamic(1 /* TRUE */);
  $.debris2.SetDynamic(1 /* TRUE */);
  $.debris3.SetDynamic(1 /* TRUE */);
  $.debris4.SetDynamic(1 /* TRUE */);
  $.debris1.SetVelocity(3.0, 16.0, 15.0);
  $.debris2.SetVelocity(-5.0, 10.0, 5.0);
  $.debris3.SetVelocity(7.0, 7.0, 7.0);
  $.debris4.SetVelocity(-4.0, 13.0, 10.0);
  return;
  }
}

export async function kenji1() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_kenji1
  await mission_start_kenji1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji1_failed
    await mission_kenji1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji1
  await mission_cleanup_kenji1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT mission_cop_car_km1
  // VAR_INT radar_blip_coord1_km1
  // VAR_INT radar_blip_coord2_km1
  // VAR_INT radar_blip_coord3_km1
  // VAR_INT flag_player_had_car_message_km1
  // VAR_INT flag_player_had_bomb_message_km1
  // VAR_INT flag_player_got_cops_message_km1
  // VAR_INT yakuza_ped1_km1
  // VAR_INT mission_car_km1
  // VAR_INT flag_player_wanted_level_changed
  // VAR_INT flag_blip_on_yakuza_ped1_km1
  // VAR_INT radar_blip_ped1_km1
  // VAR_INT flag_car_got_bomb_km1
  // VAR_INT total_counter_km1
  // VAR_INT counter_bomb_km1
  // VAR_INT counter_police_km1
  // VAR_INT car_km1
  // VAR_INT flag_had_bomb_message_km1
  // VAR_INT flag_blip_on_km1
  // VAR_INT flag_area_bomb_message_km1
  // VAR_INT police_alarm
  // VAR_INT spray_blip_km1
  // VAR_INT flag_spray_blip_on_km1
  // VAR_INT flag_bomb_km1
  // VAR_INT cell_beating
  // VAR_INT debris1
  // VAR_INT debris2
  // VAR_INT debris3
  // VAR_INT debris4
  // VAR_FLOAT debris1_x
  // VAR_FLOAT debris1_y
  // VAR_FLOAT debris1_z
  // VAR_FLOAT debris2_x
  // VAR_FLOAT debris2_y
  // VAR_FLOAT debris2_z
  // VAR_FLOAT debris3_x
  // VAR_FLOAT debris3_y
  // VAR_FLOAT debris3_z
  // VAR_FLOAT debris4_x
  // VAR_FLOAT debris4_y
  // VAR_FLOAT debris4_z
  // VAR_INT flag_dojo_blip_on
  // VAR_INT flag_player_wanted
  // VAR_INT flag_kanbu_in_group
  // VAR_INT sphere_km1
  // VAR_INT flag_player_had_dome_message_km1
  // VAR_INT flag_played_cop_radio_km1
}
