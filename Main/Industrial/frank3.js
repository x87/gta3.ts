// Generated from Main/Industrial/frank3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_frankie3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_frankie_mission = 1;
  await asyncWait(0);
  $.flag_on_frankie3 = 0;
  $.flag_bloke_leave_group_fm3 = 0;
  $.flag_bloke_in_area_fm3 = 0;
  $.timer_fm3 = 25000;
  $.flag_guard1_fm3_dead = 0;
  $.flag_guard2_fm3_dead = 0;
  $.flag_guard3_fm3_dead = 0;
  $.flag_guard4_fm3_dead = 0;
  $.flag_guard5_fm3_dead = 0;
  $.flag_guard6_fm3_dead = 0;
  $.flag_guard7_fm3_dead = 0;
  $.flag_guard8_fm3_dead = 0;
  $.flag_guard9_fm3_dead = 0;
  $.flag_guard10_fm3_dead = 0;
  $.flag_guard11_fm3_dead = 0;
  $.flag_guard12_fm3_dead = 0;
  $.flag_got_message_fm3 = 0;
  $.flag_guard3_fm3_created = 0;
  $.flag_guard4_fm3_created = 0;
  $.flag_guard5_fm3_created = 0;
  $.flag_guard6_fm3_created = 0;
  $.flag_blip_on_eightball_fm3 = 0;
  $.flag_guard1_looking_for_8ball = 0;
  $.flag_guard2_looking_for_8ball = 0;
  $.flag_guard3_looking_for_8ball = 0;
  $.flag_guard4_looking_for_8ball = 0;
  $.flag_guard5_looking_for_8ball = 0;
  $.flag_guard6_looking_for_8ball = 0;
  $.flag_guard7_looking_for_8ball = 0;
  $.flag_guard8_looking_for_8ball = 0;
  $.flag_guard9_looking_for_8ball = 0;
  $.flag_guard10_looking_for_8ball = 0;
  $.flag_guard11_looking_for_8ball = 0;
  $.flag_guard12_looking_for_8ball = 0;
  $.flag_8ball_ordered_area1 = 0;
  $.flag_drop_crate_fm3 = 0;
  $.counter_no_guards_dead_fm3 = 0;
  $.blob_flag = 1;
  $.flag_played_cops_audio_fm3 = 0;
  $.flag_played_8ball_audio_fm3 = 0;
  $.flag_gun_help1_fm3 = 0;
  $.flag_gun_help2_fm3 = 0;
  $.flag_gun_help3_fm3 = 0;
  $.flag_timer_fm3 = 0;
  $.flag_timer2_fm3 = 0;
  $.flag_timer3_fm3 = 0;
  $.flag_timer4_fm3 = 0;
  $.eightball_x_fm3 = 0.0;
  $.eightball_y_fm3 = 0.0;
  $.eightball_z_fm3 = 0.0;
  $.flag_columb_car1_dead = 0;
  $.flag_columb_car2_dead = 0;
  $.flag_audio_cops_loaded_fm3 = 0;
  $.flag_timer_set_fm3 = 0;
  $.flag_8ball_moved1 = 0;
  $.flag_8ball_moved2 = 0;
  $.flag_8ball_moved3 = 0;
  $.flag_8ball_moved4 = 0;
  $.flag_8ball_moved5 = 0;
  $.flag_8ball_moved6 = 0;
  $.flag_8ball_moved7 = 0;
  $.flag_8ball_moved8 = 0;
  $.flag_8ball_moved9 = 0;
  $.flag_8ball_moved10 = 0;
  $.flag_8ball_moved11 = 0;
  $.flag_8ball_moved12 = 0;
  $.flag_car_marked_fm3 = 0;
  $.flag_8ball_ducking_fm3 = 0;
  {
  if ($.flag_player_had_cut1_fm3 == 1) {
    if ($.flag_taken_money_off_fm3 == 1 || $.player.IsScoreGreater(99999)) {
      // SCM GOTO → player_has_money (not lowered; manual jump required)
      throw new Error("unresolved GOTO player_has_money"); // fallback: would break linear control flow
    }
  }
}

async function player_not_got_money() {
  World.ClearArea(1272.6, -95.6, -100.0, 2.0, 1 /* TRUE */);
  Streaming.LoadSpecialCharacter(1, EIGHT2);
  Streaming.LoadSpecialModel(hier`cutobj01`, EITDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, EIGHTH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.RequestModel(ind_land089c);
  Streaming.RequestModel(mak_semtech);
  Streaming.RequestModel(mak_bomb01);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ind_land089c)) || !(Streaming.HasModelLoaded(mak_semtech)) || !(Streaming.HasModelLoaded(mak_bomb01))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, cs8_door, 0 /* FALSE */);
  Cutscene.Load(s4_bdba);
  Cutscene.SetOffset(1272.5, -90.7, 13.8);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.SetAnim(eight2);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj02`);
  $.cs_eighthead.SetAnim(eight);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_eitdoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_eitdoor.SetAnim(EITDOOR);
  World.ClearArea(1272.6, -95.6, -100.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1272.6, -95.6, -100.0);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2849) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8A", 10000, 1);
  while ($.cs_time < 5438) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8B", 10000, 1);
  while ($.cs_time < 8136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8C", 10000, 1);
  while ($.cs_time < 10752) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8D", 10000, 1);
  while ($.cs_time < 13578) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_CC", 10000, 1);
  while ($.cs_time < 14964) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM3_CC");
  while ($.cs_time < 15666) {
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
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, cs8_door, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(ind_land089c);
  Streaming.MarkModelAsNoLongerNeeded(mak_semtech);
  Streaming.MarkModelAsNoLongerNeeded(mak_bomb01);
  $.flag_player_had_cut1_fm3 = 1;
  // SCM GOTO → mission_cleanup_frankie3 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_cleanup_frankie3"); // fallback: would break linear control flow
}

async function player_has_money() {
  World.ClearArea(1272.6, -95.6, -100.0, 2.0, 1 /* TRUE */);
  Streaming.LoadSpecialCharacter(1, EIGHT2);
  Streaming.LoadSpecialModel(hier`cutobj01`, EITDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, EIGHTH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, rifle);
  Streaming.LoadSpecialModel(hier`cutobj05`, $.cs_bomb);
  Streaming.RequestModel(ind_land089c);
  Streaming.RequestModel(mak_semtech);
  Streaming.RequestModel(mak_bomb01);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ind_land089c)) || !(Streaming.HasModelLoaded(mak_semtech)) || !(Streaming.HasModelLoaded(mak_bomb01))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, cs8_door, 0 /* FALSE */);
  Cutscene.Load(s4_bdbb);
  Cutscene.SetOffset(1272.5, -90.7, 13.8);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.SetAnim(eight2);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj02`);
  $.cs_eighthead.SetAnim(eight);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_eitdoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_eitdoor.SetAnim(EITDOOR);
  $.cs_rifle = CutsceneObject.Create(hier`cutobj04`);
  $.cs_rifle.SetAnim(rifle);
  $.cs_bomb = CutsceneObject.Create(hier`cutobj05`);
  $.cs_bomb.SetAnim($.cs_bomb);
  World.ClearArea(1272.6, -95.6, -100.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1272.6, -95.6, -100.0);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3123) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8E", 10000, 1);
  while ($.cs_time < 4903) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8F", 10000, 1);
  while ($.cs_time < 8643) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_8G", 10000, 1);
  while ($.cs_time < 10635) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM3_8G");
  while ($.cs_time < 17000) {
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
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, cs8_door, 1 /* TRUE */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.MarkModelAsNoLongerNeeded(ind_land089c);
  Streaming.MarkModelAsNoLongerNeeded(mak_semtech);
  Streaming.MarkModelAsNoLongerNeeded(mak_bomb01);
  if ($.flag_taken_money_off_fm3 == 0) {
    $.player.AddScore(-100000);
    Stat.RegisterMissionGiven();
    $.flag_taken_money_off_fm3 = 1;
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(car`COLUMB`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  $.boat_barrel7 = Object.Create(barrel4, 1535.15, -930.763, 18.7294);
  $.boat_barrel8 = Object.Create(barrel4, 1535.18, -929.604, 18.7294);
  $.boat_barrel9 = Object.Create(barrel4, 1535.21, -928.446, 18.7294);
  $.boat_barrel15 = Object.Create(barrel4, 1484.85, -942.803, 18.7328);
  $.boat_barrel16 = Object.Create(barrel4, 1483.69, -942.752, 18.7328);
  $.boat_barrel17 = Object.Create(barrel4, 1482.53, -942.701, 18.7328);
  World.ClearArea(1272.8, -96.5, -100.0, 1.0, 1 /* TRUE */);
  $.ped_8ball_fm3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 1272.8, -96.5, -100.0);
  $.ped_8ball_fm3.SetHeading(270.0);
  $.ped_8ball_fm3.ClearThreatSearch();
  $.ped_8ball_fm3.SetIdle();
  $.player.GiveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 30);
  $.player.SetCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */);
  $.ped_8ball_fm3.FollowPlayer($.player);
  $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    if (!($.ped_8ball_fm3.IsInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.Remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.FollowPlayer($.player);
      $.radar_blip_ped2_fm3.Remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
  }
  $.controlmode = Pad.GetControllerMode();
  Audio.LoadMissionAudio(S3_A);
  timera = 0;
  while (timera < 7000 || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    if (!($.ped_8ball_fm3.IsInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.Remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.FollowPlayer($.player);
      $.radar_blip_ped2_fm3.Remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    if ($.flag_gun_help1_fm3 == 0) {
      if ($.controlmode == 0) {
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      if ($.controlmode == 1) {
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      if ($.controlmode == 2) {
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      if ($.controlmode == 3) {
        Text.PrintHelp("HELP7_D");
        $.flag_gun_help1_fm3 = 1;
      }
    }
  }
  $.controlmode = Pad.GetControllerMode();
  timera = 0;
  while (timera < 7000) {
    await asyncWait(0);
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    if (!($.ped_8ball_fm3.IsInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.Remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.FollowPlayer($.player);
      $.radar_blip_ped2_fm3.Remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    if ($.flag_gun_help2_fm3 == 0) {
      if ($.controlmode == 0) {
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
      if ($.controlmode == 1) {
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
      if ($.controlmode == 2) {
        Text.PrintHelp("HELP8_B");
        $.flag_gun_help2_fm3 = 1;
      }
      if ($.controlmode == 3) {
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
    }
  }
  $.controlmode = Pad.GetControllerMode();
  timera = 0;
  while (timera < 7000) {
    await asyncWait(0);
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    if (!($.ped_8ball_fm3.IsInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.Remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.FollowPlayer($.player);
      $.radar_blip_ped2_fm3.Remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    if ($.flag_gun_help3_fm3 == 0) {
      if ($.controlmode == 0) {
        Text.PrintHelp("HELP9_A");
        $.flag_gun_help3_fm3 = 1;
      }
      if ($.controlmode == 1) {
        Text.PrintHelp("HELP9_A");
        $.flag_gun_help3_fm3 = 1;
      }
      if ($.controlmode == 2) {
        Text.PrintHelp("HELP9_B");
        $.flag_gun_help3_fm3 = 1;
      }
      if ($.controlmode == 3) {
        Text.PrintHelp("HELP9_C");
        $.flag_gun_help3_fm3 = 1;
      }
    }
  }
  $.guard1_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1524.0, -900.0, -100.0);
  $.guard1_fm3.TurnToFaceCoord(1524.0, -887.0, -100.0);
  $.guard1_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard1_fm3.ClearThreatSearch();
  $.guard1_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard1_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard1_fm3.SetHeedThreats(1 /* true */);
  $.guard2_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1530.0, -901.0, -100.0);
  $.guard2_fm3.TurnToFaceCoord(1530.0, -887.0, -100.0);
  $.guard2_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard2_fm3.ClearThreatSearch();
  $.guard2_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard2_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard2_fm3.SetHeedThreats(1 /* true */);
  $.guard3_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1534.6, -936.8, 18.4);
  Path.AddRoutePoint(0, 1533.9, -926.0, -100.0);
  Path.AddRoutePoint(0, 1534.6, -936.8, -100.0);
  $.guard3_fm3.SetObjFollowRoute(0, 3 /* follow_route_loop */);
  $.guard3_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard3_fm3.ClearThreatSearch();
  $.guard3_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard3_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard3_fm3.SetHeedThreats(1 /* true */);
  $.guard4_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1510.2, -941.7, 18.4);
  Path.AddRoutePoint(1, 1527.5, -942.9, -100.0);
  Path.AddRoutePoint(1, 1510.2, -941.7, -100.0);
  $.guard4_fm3.SetObjFollowRoute(1, 3 /* follow_route_loop */);
  $.guard4_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard4_fm3.ClearThreatSearch();
  $.guard4_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard4_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard4_fm3.SetHeedThreats(1 /* true */);
  $.guard5_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1502.6, -926.7, -100.0);
  Path.AddRoutePoint(2, 1512.2, -927.6, -100.0);
  Path.AddRoutePoint(2, 1502.6, -926.7, -100.0);
  $.guard5_fm3.SetObjFollowRoute(2, 3 /* follow_route_loop */);
  $.guard5_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard5_fm3.ClearThreatSearch();
  $.guard5_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard5_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
  $.guard5_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard5_fm3.SetHeedThreats(1 /* true */);
  $.guard6_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1472.5, -917.7, -100.0);
  Path.AddRoutePoint(3, 1507.1, -918.7, -100.0);
  Path.AddRoutePoint(3, 1472.5, -917.7, -100.0);
  $.guard6_fm3.SetObjFollowRoute(3, 3 /* follow_route_loop */);
  $.guard6_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard6_fm3.ClearThreatSearch();
  $.guard6_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard6_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard6_fm3.SetHeedThreats(1 /* true */);
  $.guard7_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1500.3, -922.2, -100.0);
  Path.AddRoutePoint(4, 1499.1, -943.7, -100.0);
  Path.AddRoutePoint(4, 1500.3, -922.2, -100.0);
  $.guard7_fm3.SetObjFollowRoute(4, 3 /* follow_route_loop */);
  $.guard7_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard7_fm3.ClearThreatSearch();
  $.guard7_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard7_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard7_fm3.SetHeedThreats(1 /* true */);
  $.guard8_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1489.5, -955.8, -100.0);
  Path.AddRoutePoint(5, 1490.2, -924.8, -100.0);
  Path.AddRoutePoint(5, 1489.5, -955.8, -100.0);
  $.guard8_fm3.SetObjFollowRoute(5, 3 /* follow_route_loop */);
  $.guard8_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard8_fm3.ClearThreatSearch();
  $.guard8_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard8_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard8_fm3.SetHeedThreats(1 /* true */);
  $.guard9_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1484.4, -930.5, 19.8);
  $.guard9_fm3.TurnToFaceCoord(1487.8, -925.6, -100.0);
  $.guard9_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard9_fm3.ClearThreatSearch();
  $.guard9_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard9_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard9_fm3.SetHeedThreats(1 /* true */);
  $.guard10_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1476.8, -950.9, -100.0);
  Path.AddRoutePoint(6, 1476.8, -950.9, -100.0);
  Path.AddRoutePoint(6, 1476.8, -927.2, -100.0);
  $.guard10_fm3.SetObjFollowRoute(6, 3 /* follow_route_loop */);
  $.guard10_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard10_fm3.ClearThreatSearch();
  $.guard10_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard10_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard10_fm3.SetHeedThreats(1 /* true */);
  $.guard11_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1524.0, -919.0, -100.0);
  $.guard11_fm3.TurnToFaceCoord(1525.0, -897.0, -100.0);
  $.guard11_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard11_fm3.ClearThreatSearch();
  $.guard11_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard11_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard11_fm3.SetHeedThreats(1 /* true */);
  $.guard12_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1529.0, -919.0, -100.0);
  $.guard12_fm3.TurnToFaceCoord(1525.0, -897.0, -100.0);
  $.guard12_fm3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard12_fm3.ClearThreatSearch();
  $.guard12_fm3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard12_fm3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard12_fm3.SetHeedThreats(1 /* true */);
  $.car_columb1_fm3 = Car.Create(131 /* CAR_COLUMB */, 1534.4, -891.5, 10.8);
  $.car_columb1_fm3.SetHeading(90.0);
  $.car_columb2_fm3 = Car.Create(131 /* CAR_COLUMB */, 1515.7, -896.3, 10.8);
  $.car_columb2_fm3.SetHeading(314.0);
  $.blob_flag = 1;
  while (!($.flag_bloke_in_area_fm3 == 13)) {
    await asyncWait(0);
    // SCM GOSUB car_dead_check
    await car_dead_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB guard_death_check
    await guard_death_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_bloke_leave_group_fm3 == 0) {
      if ($.counter_no_guards_dead_fm3 > 0) {
        Text.PrintNow("FM3_8", 5000, 1);
        // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    else {
      [$.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3] = $.ped_8ball_fm3.GetCoordinates();
    }
    if ($.flag_bloke_leave_group_fm3 == 0) {
      if (!($.ped_8ball_fm3.IsInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
        Text.PrintNow("HEY3", 5000, 1);
        $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
        $.radar_blip_coord2_fm3.Remove();
        $.blob_flag = 0;
        $.flag_blip_on_eightball_fm3 = 1;
      }
      if ($.player.LocateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
        $.ped_8ball_fm3.FollowPlayer($.player);
        $.radar_blip_ped2_fm3.Remove();
        $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
        $.blob_flag = 1;
        $.flag_blip_on_eightball_fm3 = 0;
      }
    }
    if ($.player.IsInAnyCar()) {
      $.car_fm3 = $.player.StoreCarIsIn();
    }
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    if ($.flag_bloke_leave_group_fm3 == 0) {
      if ($.player.LocateStoppedAnyMeans2D(1529.0, -824.0, 3.0, 4.0, $.blob_flag) && $.ped_8ball_fm3.LocateStoppedAnyMeans2D(1529.0, -824.0, 3.0, 4.0, 1 /* TRUE */) && $.flag_bloke_leave_group_fm3 == 0) {
        $.radar_blip_coord2_fm3.Remove();
        $.ped_8ball_fm3.LeaveGroup();
        $.flag_bloke_leave_group_fm3 = 1;
        Hud.SwitchWidescreen(1 /* ON */);
        $.player.SetControl(0 /* OFF */);
        Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
        if ($.flag_got_message_fm3 == 0 && $.flag_bloke_leave_group_fm3 == 1) {
          if ($.flag_played_8ball_audio_fm3 == 0) {
            Audio.PlayMissionAudio();
            $.flag_played_8ball_audio_fm3 = 1;
          }
          Text.PrintNow("FM3_8I", 5000, 1);
          $.radar_blip_coord3_fm3 = Blip.AddForCoord(1498.7, -870.5, -100.0);
          $.flag_bloke_in_area_fm3 = 1;
          $.flag_got_message_fm3 = 1;
        }
        while (!(Audio.HasMissionAudioFinished())) {
          await asyncWait(0);
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        Camera.SetFixedPosition(1543.01, -877.81, 16.84, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1542.43, -878.62, 16.75, 2 /* JUMP_CUT */);
        if ($.flag_timer_fm3 == 0) {
          timera = 0;
          $.flag_timer_fm3 = 1;
        }
        while (timera <= 5000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → camera_jump_fm3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO camera_jump_fm3"); // fallback: would break linear control flow
          }
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1536.8, -895.0, 10.8, 1.0, 0 /* FALSE */);
        Camera.SetFixedPosition(1537.1, -899.8, 12.5, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1536.4, -900.4, 12.7, 2 /* JUMP_CUT */);
        if ($.flag_timer_fm3 == 1 && $.flag_timer2_fm3 == 0) {
          timera = 0;
          $.flag_timer2_fm3 = 1;
        }
        while (timera <= 5000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → camera_jump_fm3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO camera_jump_fm3"); // fallback: would break linear control flow
          }
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1522.839, -916.137, 19.602, 1.0, 0 /* FALSE */);
        Camera.SetFixedPosition(1522.839, -916.137, 19.602, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1521.984, -916.648, 19.699, 2 /* JUMP_CUT */);
        if ($.flag_timer3_fm3 == 0 && $.flag_timer2_fm3 == 1) {
          timera = 0;
          $.flag_timer3_fm3 = 1;
        }
        while (timera <= 5000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → camera_jump_fm3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO camera_jump_fm3"); // fallback: would break linear control flow
          }
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1476.3, -922.7, 19.0, 1.0, 0 /* FALSE */);
        Camera.SetFixedPosition(1476.3, -922.7, 19.0, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1477.1, -923.3, 19.1, 2 /* JUMP_CUT */);
        if ($.flag_timer4_fm3 == 0 && $.flag_timer3_fm3 == 1) {
          timera = 0;
          $.flag_timer4_fm3 = 1;
        }
        while (timera <= 5000) {
          await asyncWait(0);
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → camera_jump_fm3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO camera_jump_fm3"); // fallback: would break linear control flow
          }
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        // SCM label camera_jump_fm3
        Camera.RestoreJumpcut();
        // SCM GOSUB car_dead_check
        await car_dead_check();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB guard_death_check
        await guard_death_check();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB clear_area_check_fm3
        await clear_area_check_fm3();
        // fallback if label was not emitted as async function: no-op continues linearly
        if (Char.IsDead($.ped_8ball_fm3)) {
          Text.PrintNow("FM3_7", 5000, 1);
          // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
        }
        if ($.ped_8ball_fm3.IsInAnyCar()) {
          $.car_fm3 = $.ped_8ball_fm3.StoreCarIsIn();
          while (!($.car_fm3.IsStopped())) {
            await asyncWait(0);
            // SCM GOSUB car_dead_check
            await car_dead_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB guard_death_check
            await guard_death_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clear_area_check_fm3
            await clear_area_check_fm3();
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Car.IsDead($.car_fm3)) {
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
              else {
                Text.PrintNow("WRECKED", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
            if (Char.IsDead($.ped_8ball_fm3)) {
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
          await asyncWait(0);
          // SCM GOSUB car_dead_check
          await car_dead_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB guard_death_check
          await guard_death_check();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB clear_area_check_fm3
          await clear_area_check_fm3();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (Car.IsDead($.car_fm3)) {
            if (Char.IsDead($.ped_8ball_fm3)) {
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
            else {
              Text.PrintNow("WRECKED", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
          if (Char.IsDead($.ped_8ball_fm3)) {
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
          $.ped_8ball_fm3.SetObjLeaveCar($.car_fm3);
          while ($.ped_8ball_fm3.IsInCar($.car_fm3)) {
            await asyncWait(0);
            // SCM GOSUB car_dead_check
            await car_dead_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB guard_death_check
            await guard_death_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clear_area_check_fm3
            await clear_area_check_fm3();
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Car.IsDead($.car_fm3)) {
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
              else {
                Text.PrintNow("WRECKED", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
            if (Char.IsDead($.ped_8ball_fm3)) {
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
        }
        Hud.SwitchWidescreen(0 /* OFF */);
        $.player.SetControl(1 /* ON */);
        Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
      }
    }
    if ($.flag_bloke_in_area_fm3 < 13) {
      // SCM GOSUB car_dead_check
      await car_dead_check();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB guard_death_check
      await guard_death_check();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB clear_area_check_fm3
      await clear_area_check_fm3();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.player.LocateOnFoot3D(1498.7, -870.5, 26.8, 3.0, 3.0, 2.0, 0 /* FALSE */)) {
        $.radar_blip_coord3_fm3.Remove();
      }
      if ($.flag_played_8ball_audio_fm3 == 1) {
        if ($.flag_played_cops_audio_fm3 == 0) {
          if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint("FM3_8I");
          }
        }
      }
      if ($.flag_bloke_in_area_fm3 == 1) {
        if ($.flag_8ball_ordered_area1 == 0) {
          $.ped_8ball_fm3.SetObjRunToCoord(1545.9, -867.7);
          timera = 0;
          $.flag_8ball_ordered_area1 = 1;
        }
        if ($.flag_8ball_moved1 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1545.9, -867.7, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1545.9, -867.7, 10.8);
              $.flag_8ball_moved1 = 1;
            }
          }
        }
        if ($.flag_8ball_ducking_fm3 == 0) {
          if ($.ped_8ball_fm3.LocateOnFoot2D(1545.9, -867.7, 1.0, 1.0, 0 /* FALSE */)) {
            $.flag_8ball_moved1 = 1;
            $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 10000);
            $.flag_8ball_ducking_fm3 = 1;
          }
        }
        if ($.counter_no_guards_dead_fm3 > 0 || $.player.IsShootingInArea(1610.6, -614.6, 1340.9, -1074.5, 0 /* FALSE */)) {
          TIMERB = 0;
          while (TIMERB < 5000) {
            await asyncWait(0);
            // SCM GOSUB car_dead_check
            await car_dead_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB guard_death_check
            await guard_death_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clear_area_check_fm3
            await clear_area_check_fm3();
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Char.IsDead($.ped_8ball_fm3)) {
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
          $.flag_bloke_in_area_fm3 = 2;
          if ($.flag_car_marked_fm3 == 0) {
            $.car_columb1_fm3.MarkAsNoLongerNeeded();
            $.car_columb2_fm3.MarkAsNoLongerNeeded();
            $.flag_car_marked_fm3 = 1;
          }
        }
      }
      if ($.flag_bloke_in_area_fm3 == 2) {
        $.ped_8ball_fm3.SetObjRunToCoord(1527.0, -899.0);
        if ($.flag_timer_set_fm3 == 0) {
          timera = 0;
          $.flag_timer_set_fm3 = 1;
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1527.0, -899.0, 2.0, 2.0, 0 /* FALSE */)) {
          $.flag_8ball_moved2 = 1;
          $.flag_bloke_in_area_fm3 = 3;
        }
        if ($.flag_8ball_moved2 == 0) {
          if (timera >= 20000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1527.0, -899.0, 2.0, 2.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1527.0, -899.0, 10.8);
              $.flag_8ball_moved2 = 1;
            }
          }
        }
      }
      if ($.flag_bloke_in_area_fm3 == 3) {
        $.ped_8ball_fm3.SetObjRunToCoord(1526.0, -919.0);
        if ($.flag_timer_set_fm3 == 1) {
          timera = 0;
          $.flag_timer_set_fm3 = 2;
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1526.0, -919.0, 2.0, 2.0, 0 /* FALSE */)) {
          $.flag_8ball_moved3 = 1;
          $.flag_bloke_in_area_fm3 = 4;
        }
        if ($.flag_8ball_moved3 == 0) {
          if (timera >= 20000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1526.0, -919.0, 2.0, 2.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1526.0, -919.0, 18.4);
              $.flag_8ball_moved3 = 1;
            }
          }
        }
      }
      if ($.flag_bloke_in_area_fm3 == 4) {
        $.ped_8ball_fm3.SetObjRunToCoord(1522.9, -924.3);
        if ($.flag_timer_set_fm3 == 2) {
          timera = 0;
          $.flag_timer_set_fm3 = 3;
        }
        if ($.flag_8ball_moved4 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1522.9, -924.3, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1522.9, -924.3, 18.4);
              $.flag_8ball_moved4 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1522.9, -924.3, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved4 = 1;
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 1) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 2;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 5;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 5) {
        $.ped_8ball_fm3.SetObjRunToCoord(1517.0, -929.0);
        if ($.flag_timer_set_fm3 == 3) {
          timera = 0;
          $.flag_timer_set_fm3 = 4;
        }
        if ($.flag_8ball_moved5 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1517.0, -929.0, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1517.0, -929.0, 18.4);
              $.flag_8ball_moved5 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1517.0, -929.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved5 = 1;
          Audio.LoadMissionAudio(S3_B);
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 2) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 3;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 6;
          if (Audio.HasMissionAudioLoaded()) {
            $.flag_audio_cops_loaded_fm3 = 1;
          }
          if ($.flag_played_cops_audio_fm3 == 0) {
            if ($.flag_audio_cops_loaded_fm3 == 1) {
              Audio.PlayMissionAudio();
              $.flag_played_cops_audio_fm3 = 1;
            }
          }
        }
      }
      if ($.flag_bloke_in_area_fm3 == 6) {
        $.ped_8ball_fm3.SetObjRunToCoord(1510.0, -923.0);
        if ($.flag_timer_set_fm3 == 4) {
          timera = 0;
          $.flag_timer_set_fm3 = 5;
        }
        if ($.flag_8ball_moved6 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1510.0, -923.0, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1510.0, -923.0, 18.4);
              $.flag_8ball_moved6 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1510.0, -923.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved6 = 1;
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 3) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 4;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 7;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 7) {
        $.ped_8ball_fm3.SetObjRunToCoord(1504.4, -928.6);
        if ($.flag_timer_set_fm3 == 5) {
          timera = 0;
          $.flag_timer_set_fm3 = 6;
        }
        if ($.flag_8ball_moved7 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1504.4, -928.6, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1504.4, -928.6, 18.4);
              $.flag_8ball_moved7 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1504.4, -928.6, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved7 = 1;
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 4) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 5;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 8;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 8) {
        $.ped_8ball_fm3.SetObjRunToCoord(1493.7, -922.1);
        if ($.flag_timer_set_fm3 == 6) {
          timera = 0;
          $.flag_timer_set_fm3 = 7;
        }
        if ($.flag_8ball_moved8 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1493.7, -922.1, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1493.7, -922.1, 18.4);
              $.flag_8ball_moved8 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1493.7, -922.1, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved8 = 1;
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 5) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 6;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 9;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 9) {
        $.ped_8ball_fm3.SetObjRunToCoord(1487.0, -930.2);
        if ($.flag_timer_set_fm3 == 7) {
          timera = 0;
          $.flag_timer_set_fm3 = 8;
        }
        if ($.flag_8ball_moved9 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1487.0, -930.2, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1487.0, -930.2, 18.4);
              $.flag_8ball_moved9 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1487.0, -930.2, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved9 = 1;
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 6) {
              $.ped_8ball_fm3.SetWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 7;
            }
            TIMERB = 0;
            while (TIMERB < 5000) {
              await asyncWait(0);
              // SCM GOSUB car_dead_check
              await car_dead_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB guard_death_check
              await guard_death_check();
              // fallback if label was not emitted as async function: no-op continues linearly
              // SCM GOSUB clear_area_check_fm3
              await clear_area_check_fm3();
              // fallback if label was not emitted as async function: no-op continues linearly
              if (Char.IsDead($.ped_8ball_fm3)) {
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 10;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 10) {
        $.ped_8ball_fm3.SetObjRunToCoord(1481.5, -926.8);
        if ($.flag_timer_set_fm3 == 8) {
          timera = 0;
          $.flag_timer_set_fm3 = 9;
        }
        if ($.flag_8ball_moved10 == 0) {
          if (timera >= 15000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1481.5, -926.8, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1481.5, -926.8, 18.4);
              $.flag_8ball_moved10 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1481.5, -926.8, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved10 = 1;
          $.flag_bloke_in_area_fm3 = 11;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 11) {
        $.ped_8ball_fm3.SetObjRunToCoord(1475.8, -940.3);
        if ($.flag_timer_set_fm3 == 9) {
          timera = 0;
          $.flag_timer_set_fm3 = 10;
        }
        if ($.flag_8ball_moved11 == 0) {
          if (timera >= 15000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1475.8, -940.3, 1.0, 1.0, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1475.8, -940.3, 18.4);
              $.flag_8ball_moved11 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1475.8, -940.3, 1.0, 1.0, 0 /* FALSE */)) {
          $.flag_8ball_moved11 = 1;
          $.flag_bloke_in_area_fm3 = 12;
        }
      }
      if ($.flag_bloke_in_area_fm3 == 12) {
        $.ped_8ball_fm3.SetObjRunToCoord(1474.2, -940.2);
        if ($.flag_timer_set_fm3 == 10) {
          timera = 0;
          $.flag_timer_set_fm3 = 11;
        }
        if ($.flag_8ball_moved12 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.LocateOnFoot2D(1474.2, -940.2, 0.5, 0.5, 0 /* FALSE */))) {
              $.ped_8ball_fm3.SetCoordinates(1474.2, -940.2, 18.4);
              $.flag_8ball_moved12 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.LocateOnFoot2D(1474.2, -940.2, 0.5, 0.5, 0 /* FALSE */)) {
          $.flag_8ball_moved12 = 1;
          $.ped_8ball_fm3.SetIdle();
          $.flag_bloke_in_area_fm3 = 13;
          TIMERB = 0;
          while (TIMERB < 3000) {
            await asyncWait(0);
            // SCM GOSUB car_dead_check
            await car_dead_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB guard_death_check
            await guard_death_check();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB clear_area_check_fm3
            await clear_area_check_fm3();
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Char.IsDead($.ped_8ball_fm3)) {
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
        }
      }
    }
  }
  timera = 0;
  while (timera < 3000) {
    await asyncWait(0);
    // SCM GOSUB car_dead_check
    await car_dead_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB guard_death_check
    await guard_death_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Char.IsDead($.ped_8ball_fm3)) {
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadSpecialModel(hier`cutobj01`, ship);
  Streaming.LoadSpecialModel(hier`cutobj02`, gangp);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.guard1_fm3.RemoveElegantly();
  $.guard2_fm3.RemoveElegantly();
  $.guard3_fm3.RemoveElegantly();
  $.guard4_fm3.RemoveElegantly();
  $.guard5_fm3.RemoveElegantly();
  $.guard6_fm3.RemoveElegantly();
  $.guard7_fm3.RemoveElegantly();
  $.guard8_fm3.RemoveElegantly();
  $.guard9_fm3.RemoveElegantly();
  $.guard10_fm3.RemoveElegantly();
  $.guard11_fm3.RemoveElegantly();
  $.guard12_fm3.RemoveElegantly();
  World.ClearArea(1519.02, -934.60, 18.4, 25.0, 1 /* TRUE */);
  $.boat_barrel7.Delete();
  $.boat_barrel8.Delete();
  $.boat_barrel9.Delete();
  $.boat_barrel15.Delete();
  $.boat_barrel16.Delete();
  $.boat_barrel17.Delete();
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1508.77, -937.206, 20.6832, 50.0, rustship_structure, 0 /* FALSE */);
  World.SwapNearestBuildingModel(1508.77, -937.206, 20.6832, 50.0, rustship_structure, LOD_land014);
  World.SetVisibilityOfClosestObjectOfType(1508.77, -937.206, 20.6832, 50.0, LODtship_structure, 0 /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(1526.75, -907.423, 14.2965, 50.0, boatramp1, 0 /* FALSE */);
  World.SwapNearestBuildingModel(1526.75, -907.423, 14.2965, 50.0, boatramp1, LOD_land014);
  Cutscene.Load(s4_bdbd);
  Cutscene.SetOffset(1573.8866, -906.0611, 11.1);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.SetAnim(eight2);
  $.cs_ship = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ship.SetAnim(ship);
  $.cs_gangplank = CutsceneObject.Create(hier`cutobj02`);
  $.cs_gangplank.SetAnim(gangp);
  World.ClearArea(1526.5, -894.8, -100.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1526.5, -894.8, -100.0);
  $.player.SetHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.ped_8ball_fm3.Delete();
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  // unsupported START_BOAT_FOAM_ANIMATION
  Fx.UpdateBoatFoamAnimation($.cs_ship);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1478.48, -936.52, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 2565) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1479.48, -936.52, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 3433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1481.48, -936.52, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 4433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1487.92, -933.90, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 5833) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1490.70, -928.15, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 6433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1595.53, -921.84, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 7433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1500.53, -921.84, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 8433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1502.53, -921.84, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 9633) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1510.5, -918.2, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 12833) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1510.5, -918.2, 20.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 13000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
  }
  Fx.AddExplosion(1518.02, -931.86, 19.4, 5 /* EXPLOSION_HELI */);
  while ($.cs_time < 33333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
    Fx.UpdateBoatFoamAnimation($.cs_ship);
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
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  // SCM GOTO → mission_frankie3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_frankie3_passed"); // fallback: would break linear control flow
  }
}

async function mission_frankie3_failed() {
  $.player.SetAmmo(7 /* WEAPONTYPE_SNIPERRIFLE */, 0);
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_frankie3_passed() {
  $.flag_frankie_mission3_passed = 1;
  Stat.RegisterMissionPassed("FM3");
  Stat.PlayerMadeProgress(1);
  Restart.CancelOverride();
  Text.PrintWithNumberBig("m_pass", 150000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(150000);
  $.player.ClearWantedLevel();
  $.eightball_contact_blip.Remove();
  $.flag_frankie_switched_off = 0;
  $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
  // START_NEW_SCRIPT frankie_mission4_loop
  // START_NEW_SCRIPT emergency_crane_pager
  return;
}

async function mission_cleanup_frankie3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  $.flag_on_frankie3 = 0;
  if (!(Char.IsDead($.guard1_fm3))) {
    $.guard1_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard2_fm3))) {
    $.guard2_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard3_fm3))) {
    $.guard3_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard4_fm3))) {
    $.guard4_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard5_fm3))) {
    $.guard5_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard6_fm3))) {
    $.guard6_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard7_fm3))) {
    $.guard7_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard8_fm3))) {
    $.guard8_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard9_fm3))) {
    $.guard9_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard10_fm3))) {
    $.guard10_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard11_fm3))) {
    $.guard11_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.guard12_fm3))) {
    $.guard12_fm3.SetStayInSamePlace(0 /* FALSE */);
  }
  $.ped_8ball_fm3.RemoveElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  $.ped_8ball_fm3.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  $.radar_blip_coord2_fm3.Remove();
  $.radar_blip_coord3_fm3.Remove();
  Hud.ClearTimer($.timer_fm3);
  Path.RemoveRoute(0);
  Path.RemoveRoute(1);
  Path.RemoveRoute(2);
  Path.RemoveRoute(3);
  Path.RemoveRoute(4);
  Path.RemoveRoute(5);
  Path.RemoveRoute(6);
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  $.boat_barrel7.Delete();
  $.boat_barrel8.Delete();
  $.boat_barrel9.Delete();
  $.boat_barrel15.Delete();
  $.boat_barrel16.Delete();
  $.boat_barrel17.Delete();
  Mission.Finish();
  return;
}

async function guard_death_check() {
  if ($.flag_guard1_fm3_dead == 0) {
    if (Char.IsDead($.guard1_fm3)) {
      $.flag_guard1_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard1_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard2_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          if ($.flag_columb_car2_dead == 0) {
            $.guard1_fm3.SetObjRunToCoord(1517.6, -896.6);
          }
          else {
            $.guard1_fm3.SetObjRunToCoord(1523.3, -893.7);
          }
          $.guard1_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard1_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard1_looking_for_8ball == 1) {
        if ($.flag_columb_car2_dead == 0) {
          if ($.guard1_fm3.LocateOnFoot3D(1517.6, -896.6, 10.8, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
            $.guard1_fm3.SetObjGuardSpot(1517.6, -896.6, 10.8);
            $.guard1_fm3.SetStayInSamePlace(1 /* TRUE */);
            $.guard1_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          }
        }
        else {
          if ($.guard1_fm3.LocateOnFoot3D(1523.3, -893.7, 10.8, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
            $.guard1_fm3.SetObjGuardSpot(1523.3, -893.7, 10.8);
            $.guard1_fm3.SetStayInSamePlace(1 /* TRUE */);
            $.guard1_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          }
        }
      }
    }
  }
  if ($.flag_guard2_fm3_dead == 0) {
    if (Char.IsDead($.guard2_fm3)) {
      $.flag_guard2_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard2_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard1_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          if ($.flag_columb_car1_dead == 0) {
            $.guard2_fm3.SetObjRunToCoord(1532.9, -893.8);
          }
          else {
            $.guard2_fm3.SetObjRunToCoord(1528.6, -892.2);
          }
          $.guard2_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard2_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard2_looking_for_8ball == 1) {
        if ($.flag_columb_car1_dead == 0) {
          if ($.guard2_fm3.LocateOnFoot3D(1532.9, -893.8, 10.8, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
            $.guard2_fm3.SetObjGuardSpot(1532.9, -893.8, 10.8);
            $.guard2_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
            $.guard2_fm3.SetStayInSamePlace(1 /* TRUE */);
          }
        }
        else {
          if ($.guard2_fm3.LocateOnFoot3D(1528.6, -892.2, 10.8, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
            $.guard2_fm3.SetObjGuardSpot(1528.6, -892.2, 10.8);
            $.guard2_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
            $.guard2_fm3.SetStayInSamePlace(1 /* TRUE */);
          }
        }
      }
    }
  }
  if ($.flag_guard3_fm3_dead == 0) {
    if (Char.IsDead($.guard3_fm3)) {
      $.flag_guard3_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard3_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 2 || $.counter_no_guards_dead_fm3 > 0 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard3_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.guard3_fm3.SetObjRunToCoord(1534.1, -931.2);
          $.flag_guard3_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard3_looking_for_8ball == 1) {
        if ($.guard3_fm3.LocateOnFoot3D(1534.1, -931.2, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard3_fm3.SetObjGuardSpot(1534.1, -931.2, 18.4);
          $.guard3_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard3_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard4_fm3_dead == 0) {
    if (Char.IsDead($.guard4_fm3)) {
      $.flag_guard4_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard4_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 4 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.counter_no_guards_dead_fm3 > 0) {
          $.guard4_fm3.SetObjRunToCoord(1517.5, -940.6);
          $.guard4_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard4_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard4_looking_for_8ball == 1) {
        if ($.guard4_fm3.LocateAnyMeans3D(1517.5, -940.6, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard4_fm3.SetObjRunToCoord(1516.1, -932.6);
          $.flag_guard4_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard4_looking_for_8ball == 2) {
        if ($.guard4_fm3.LocateAnyMeans3D(1516.1, -932.6, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard4_fm3.SetObjGuardSpot(1516.1, -932.6, 18.4);
          $.guard4_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard4_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard5_fm3_dead == 0) {
    if (Char.IsDead($.guard5_fm3)) {
      $.flag_guard5_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard5_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard6_fm3_dead == 1 || $.flag_guard7_fm3_dead == 1) {
          $.guard5_fm3.SetObjRunToCoord(1505.6, -926.1);
          $.guard5_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard5_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard5_looking_for_8ball == 1) {
        if ($.guard5_fm3.LocateAnyMeans3D(1505.6, -926.1, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard5_fm3.SetObjRunToCoord(1507.2, -924.0);
          $.flag_guard5_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard5_looking_for_8ball == 2) {
        if ($.guard5_fm3.LocateAnyMeans3D(1507.2, -924.0, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard5_fm3.SetObjGuardSpot(1507.2, -924.0, 18.4);
          $.guard5_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard5_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard6_fm3_dead == 0) {
    if (Char.IsDead($.guard6_fm3)) {
      $.flag_guard6_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard6_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard5_fm3_dead == 1 || $.flag_guard7_fm3_dead == 1) {
          $.guard6_fm3.SetObjRunToCoord(1501.0, -919.8);
          $.guard6_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard6_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard6_looking_for_8ball == 1) {
        if ($.guard6_fm3.LocateAnyMeans3D(1501.0, -919.8, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard6_fm3.SetObjGuardSpot(1501.0, -919.8, 18.4);
          $.guard6_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard6_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard7_fm3_dead == 0) {
    if (Char.IsDead($.guard7_fm3)) {
      $.flag_guard7_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard7_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_guard5_fm3_dead == 1 || $.flag_guard6_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard7_fm3.SetObjRunToCoord(1499.4, -937.8);
          $.guard7_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard7_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard7_looking_for_8ball == 1) {
        if ($.guard7_fm3.LocateAnyMeans3D(1499.4, -937.8, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard7_fm3.SetObjRunToCoord(1502.2, -930.8);
          $.flag_guard7_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard7_looking_for_8ball == 2) {
        if ($.guard7_fm3.LocateAnyMeans3D(1502.2, -930.8, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard7_fm3.SetObjGuardSpot(1502.2, -930.8, 18.4);
          $.guard7_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard7_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard8_fm3_dead == 0) {
    if (Char.IsDead($.guard8_fm3)) {
      $.flag_guard8_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard8_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_guard9_fm3_dead == 1 || $.flag_guard10_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard8_fm3.SetObjRunToCoord(1491.6, -935.8);
          $.guard8_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard8_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard8_looking_for_8ball == 1) {
        if ($.guard8_fm3.LocateAnyMeans3D(1491.6, -935.8, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard8_fm3.SetObjRunToCoord(1487.6, -933.6);
          $.flag_guard8_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard8_looking_for_8ball == 2) {
        if ($.guard8_fm3.LocateAnyMeans3D(1487.6, -933.6, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard8_fm3.SetObjGuardSpot(1487.6, -933.6, 18.4);
          $.guard8_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard8_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard9_fm3_dead == 0) {
    if (Char.IsDead($.guard9_fm3)) {
      $.flag_guard9_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard9_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 6 || $.flag_guard8_fm3_dead == 1 || $.flag_guard10_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard9_fm3.SetObjGuardSpot(1484.4, -930.5, 19.8);
          $.guard9_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.guard9_fm3.SetStayInSamePlace(1 /* TRUE */);
          $.guard9_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.flag_guard9_looking_for_8ball = 1;
        }
      }
    }
  }
  if ($.flag_guard10_fm3_dead == 0) {
    if (Char.IsDead($.guard10_fm3)) {
      $.flag_guard10_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard10_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 6 || $.flag_guard8_fm3_dead == 1 || $.flag_guard9_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard10_fm3.SetObjRunToCoord(1476.7, -936.3);
          $.guard10_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard10_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard10_looking_for_8ball == 1) {
        if ($.guard10_fm3.LocateAnyMeans3D(1476.7, -936.3, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard10_fm3.SetObjRunToCoord(1482.6, -930.5);
          $.flag_guard10_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard10_looking_for_8ball == 2) {
        if ($.guard10_fm3.LocateAnyMeans3D(1482.6, -930.5, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard10_fm3.SetObjGuardSpot(1482.6, -930.5, 18.4);
          $.guard10_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard10_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard11_fm3_dead == 0) {
    if (Char.IsDead($.guard11_fm3)) {
      $.flag_guard11_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard11_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard12_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard1_fm3_dead == 1 || $.flag_guard2_fm3_dead == 1) {
          $.guard11_fm3.SetObjRunToCoord(1528.5, -927.5);
          $.guard11_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard11_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard11_looking_for_8ball == 1) {
        if ($.guard11_fm3.LocateAnyMeans3D(1528.5, -927.5, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard11_fm3.SetObjRunToCoord(1521.5, -927.2);
          $.flag_guard11_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard11_looking_for_8ball == 2) {
        if ($.guard11_fm3.LocateAnyMeans3D(1521.5, -927.2, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard11_fm3.SetObjGuardSpot(1521.5, -927.2, 18.4);
          $.guard11_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard11_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  if ($.flag_guard12_fm3_dead == 0) {
    if (Char.IsDead($.guard12_fm3)) {
      $.flag_guard12_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      if ($.flag_guard12_looking_for_8ball == 0) {
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard11_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard1_fm3_dead == 1 || $.flag_guard2_fm3_dead == 1) {
          $.guard12_fm3.SetObjRunToCoord(1517.6, -923.1);
          $.guard12_fm3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard12_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard12_looking_for_8ball == 1) {
        if ($.guard12_fm3.LocateAnyMeans3D(1517.6, -923.1, 18.4, 0.5, 0.5, 2.0, 0 /* FALSE */)) {
          $.guard12_fm3.SetObjRunToCoord(1512.7, -929.0);
          $.flag_guard12_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard12_looking_for_8ball == 2) {
        if ($.guard12_fm3.LocateAnyMeans3D(1512.7, -929.0, 18.4, 0.2, 0.2, 2.0, 0 /* FALSE */)) {
          $.guard12_fm3.SetObjGuardSpot(1512.7, -929.0, 18.4);
          $.guard12_fm3.TurnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard12_fm3.SetStayInSamePlace(1 /* TRUE */);
        }
      }
    }
  }
  return;
}

async function car_dead_check() {
  if ($.flag_columb_car1_dead == 0) {
    if (Car.IsDead($.car_columb1_fm3)) {
      $.flag_columb_car1_dead = 1;
    }
  }
  if ($.flag_columb_car2_dead == 0) {
    if (Car.IsDead($.car_columb2_fm3)) {
      $.flag_columb_car2_dead = 1;
    }
  }
  return;
}

async function clear_area_check_fm3() {
  if ($.flag_bloke_in_area_fm3 <= 2) {
    World.ClearArea(1545.9, -867.7, 10.8, 1.0, 0 /* FALSE */);
    World.ClearArea(1527.0, -899.0, 10.8, 1.0, 0 /* FALSE */);
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 3) {
    World.ClearArea(1527.0, -899.0, 10.8, 1.0, 0 /* FALSE */);
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 4) {
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 5) {
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 6) {
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 7) {
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 8) {
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 9) {
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 10) {
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 11) {
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 12) {
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, 0 /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, 0 /* FALSE */);
  }
  return;
}

export async function frank3() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_frankie3
  await mission_start_frankie3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_frankie3_failed
    await mission_frankie3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_frankie3
  await mission_cleanup_frankie3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT ped_8ball_fm3
  // VAR_INT radar_blip_ped2_fm3
  // VAR_INT radar_blip_coord3_fm3
  // VAR_INT guard1_fm3
  // VAR_INT guard2_fm3
  // VAR_INT guard3_fm3
  // VAR_INT guard4_fm3
  // VAR_INT guard5_fm3
  // VAR_INT guard6_fm3
  // VAR_INT guard7_fm3
  // VAR_INT guard8_fm3
  // VAR_INT guard9_fm3
  // VAR_INT guard10_fm3
  // VAR_INT guard11_fm3
  // VAR_INT guard12_fm3
  // VAR_INT car_fm3
  // VAR_INT timer_fm3
  // VAR_INT radar_blip_coord2_fm3
  // VAR_INT flag_bloke_leave_group_fm3
  // VAR_INT flag_bloke_in_area_fm3
  // VAR_INT flag_guard1_fm3_dead
  // VAR_INT flag_guard2_fm3_dead
  // VAR_INT flag_guard3_fm3_dead
  // VAR_INT flag_guard4_fm3_dead
  // VAR_INT flag_guard5_fm3_dead
  // VAR_INT flag_guard6_fm3_dead
  // VAR_INT flag_guard7_fm3_dead
  // VAR_INT flag_guard8_fm3_dead
  // VAR_INT flag_guard9_fm3_dead
  // VAR_INT flag_guard10_fm3_dead
  // VAR_INT flag_guard11_fm3_dead
  // VAR_INT flag_guard12_fm3_dead
  // VAR_INT flag_got_message_fm3
  // VAR_INT flag_on_frankie3
  // VAR_INT flag_guard3_fm3_created
  // VAR_INT flag_guard4_fm3_created
  // VAR_INT flag_guard5_fm3_created
  // VAR_INT flag_guard6_fm3_created
  // VAR_INT flag_blip_on_eightball_fm3
  // VAR_INT flag_guard1_looking_for_8ball
  // VAR_INT flag_guard2_looking_for_8ball
  // VAR_INT flag_guard3_looking_for_8ball
  // VAR_INT flag_guard4_looking_for_8ball
  // VAR_INT flag_guard5_looking_for_8ball
  // VAR_INT flag_guard6_looking_for_8ball
  // VAR_INT flag_guard7_looking_for_8ball
  // VAR_INT flag_guard8_looking_for_8ball
  // VAR_INT flag_guard9_looking_for_8ball
  // VAR_INT flag_guard10_looking_for_8ball
  // VAR_INT flag_guard11_looking_for_8ball
  // VAR_INT flag_guard12_looking_for_8ball
  // VAR_INT flag_8ball_ordered_area1
  // VAR_INT crate_fm3
  // VAR_INT flag_drop_crate_fm3
  // VAR_INT counter_no_guards_dead_fm3
  // VAR_INT flag_played_cops_audio_fm3
  // VAR_INT flag_played_8ball_audio_fm3
  // VAR_INT flag_gun_help1_fm3
  // VAR_INT flag_gun_help2_fm3
  // VAR_INT flag_gun_help3_fm3
  // VAR_INT flag_timer_fm3
  // VAR_INT flag_timer2_fm3
  // VAR_INT flag_timer3_fm3
  // VAR_INT flag_timer4_fm3
  // VAR_INT boat_barrel7
  // VAR_INT boat_barrel8
  // VAR_INT boat_barrel9
  // VAR_INT boat_barrel10
  // VAR_INT boat_barrel11
  // VAR_INT boat_barrel12
  // VAR_INT boat_barrel13
  // VAR_INT boat_barrel14
  // VAR_INT boat_barrel15
  // VAR_INT boat_barrel16
  // VAR_INT boat_barrel17
  // VAR_FLOAT eightball_x_fm3
  // VAR_FLOAT eightball_y_fm3
  // VAR_FLOAT eightball_z_fm3
  // VAR_INT car_columb1_fm3
  // VAR_INT car_columb2_fm3
  // VAR_INT flag_columb_car1_dead
  // VAR_INT flag_columb_car2_dead
  // VAR_INT flag_audio_cops_loaded_fm3
  // VAR_INT flag_timer_set_fm3
  // VAR_INT flag_8ball_moved1
  // VAR_INT flag_8ball_moved2
  // VAR_INT flag_8ball_moved3
  // VAR_INT flag_8ball_moved4
  // VAR_INT flag_8ball_moved5
  // VAR_INT flag_8ball_moved6
  // VAR_INT flag_8ball_moved7
  // VAR_INT flag_8ball_moved8
  // VAR_INT flag_8ball_moved9
  // VAR_INT flag_8ball_moved10
  // VAR_INT flag_8ball_moved11
  // VAR_INT flag_8ball_moved12
  // VAR_INT flag_car_marked_fm3
  // VAR_INT flag_8ball_ducking_fm3
}
