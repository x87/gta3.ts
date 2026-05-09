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
  // 25 secs
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
    if ($.flag_taken_money_off_fm3 == 1 || $.player.isScoreGreater(99999)) {
      // SCM GOTO → player_has_money (not lowered; manual jump required)
      throw new Error("unresolved GOTO player_has_money"); // fallback: would break linear control flow
    }
  }
}

async function player_not_got_money() {
  // ************************START OF CUTSCENE TWO "PLAYER NOT GOT THE MONEY"*****************
  /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_frankie3_failed
  ENDIF
  SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  PRINT_BIG ( FM3 ) 15000 2 //"Bomb Da Base"
  SWITCH_STREAMING OFF
  */
  World.ClearArea(1272.6, -95.6, -100.0, 2.0, true /* TRUE */);
  Streaming.LoadSpecialCharacter(1, EIGHT2);
  Streaming.LoadSpecialModel(hier`cutobj01`, EITDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, EIGHTH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.RequestModel(ind_land089c);
  Streaming.RequestModel(mak_semtech);
  Streaming.RequestModel(mak_bomb01);
  // Cutscene stuff
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ind_land089c)) || !(Streaming.HasModelLoaded(mak_semtech)) || !(Streaming.HasModelLoaded(mak_bomb01))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, 538 /* cs8_door */, false /* FALSE */);
  Cutscene.Load(s4_bdba);
  Cutscene.SetOffset(1272.5, -90.7, 13.8);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.setAnim(eight2);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj02`);
  $.cs_eighthead.setAnim(eight);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.setAnim($.player);
  $.cs_eitdoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_eitdoor.setAnim(EITDOOR);
  World.ClearArea(1272.6, -95.6, -100.0, 1.0, true /* TRUE */);
  $.player.setCoordinates(1272.6, -95.6, -100.0);
  $.player.setHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2849) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Yo my man! Salvatore phoned ahead,"
  Text.PrintNow("FM3_8A", 10000, 1);
  while ($.cs_time < 5438) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"but a job like this is gonna' need a lot of fireworks."
  Text.PrintNow("FM3_8B", 10000, 1);
  while ($.cs_time < 8136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I'll need $100000 to cover expenses"
  Text.PrintNow("FM3_8C", 10000, 1);
  while ($.cs_time < 10752) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"but you know with me you get a lot of bang for your bucks."
  Text.PrintNow("FM3_8D", 10000, 1);
  while ($.cs_time < 13578) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Come back when you have the money."
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
  World.SwitchRubbish(true /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, 538 /* cs8_door */, true /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(ind_land089c);
  Streaming.MarkModelAsNoLongerNeeded(mak_semtech);
  // ************************END OF CUTSCENE TWO "PLAYER NOT GOT THE MONEY********************
  Streaming.MarkModelAsNoLongerNeeded(mak_bomb01);
  $.flag_player_had_cut1_fm3 = 1;
  // SCM GOTO → mission_cleanup_frankie3 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_cleanup_frankie3"); // fallback: would break linear control flow
}

async function player_has_money() {
  // ********************************START OF CUTSCENE ONE "GOT THE MONEY"********************
  /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_frankie3_failed
  ENDIF
  SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  PRINT_BIG ( FM3 ) 15000 2 //"Bomb Da Base"
  SWITCH_STREAMING OFF
  */
  World.ClearArea(1272.6, -95.6, -100.0, 2.0, true /* TRUE */);
  Streaming.LoadSpecialCharacter(1, EIGHT2);
  Streaming.LoadSpecialModel(hier`cutobj01`, EITDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, EIGHTH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, rifle);
  Streaming.LoadSpecialModel(hier`cutobj05`, $.cs_bomb);
  Streaming.RequestModel(ind_land089c);
  Streaming.RequestModel(mak_semtech);
  Streaming.RequestModel(mak_bomb01);
  // Cutscene stuff
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ind_land089c)) || !(Streaming.HasModelLoaded(mak_semtech)) || !(Streaming.HasModelLoaded(mak_bomb01))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, 538 /* cs8_door */, false /* FALSE */);
  Cutscene.Load(s4_bdbb);
  Cutscene.SetOffset(1272.5, -90.7, 13.8);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.setAnim(eight2);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj02`);
  $.cs_eighthead.setAnim(eight);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.setAnim($.player);
  $.cs_eitdoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_eitdoor.setAnim(EITDOOR);
  $.cs_rifle = CutsceneObject.Create(hier`cutobj04`);
  $.cs_rifle.setAnim(rifle);
  $.cs_bomb = CutsceneObject.Create(hier`cutobj05`);
  $.cs_bomb.setAnim($.cs_bomb);
  World.ClearArea(1272.6, -95.6, -100.0, 1.0, true /* TRUE */);
  $.player.setCoordinates(1272.6, -95.6, -100.0);
  $.player.setHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3123) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Okay, let's do this thing!"
  Text.PrintNow("FM3_8E", 10000, 1);
  while ($.cs_time < 4903) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I can set this baby to detonate, but I still can't use a piece with these hands."
  Text.PrintNow("FM3_8F", 10000, 1);
  while ($.cs_time < 8643) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Here, this rifle should help you pop some heads!"
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
  World.SwitchRubbish(true /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  //UNLOAD_SPECIAL_CHARACTER 1
  World.SetVisibilityOfClosestObjectOfType(1271.8, -91.3, 13.9, 3.0, 538 /* cs8_door */, true /* TRUE */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.MarkModelAsNoLongerNeeded(ind_land089c);
  Streaming.MarkModelAsNoLongerNeeded(mak_semtech);
  //GOTO wiltest  //TEST STUFF TO COME OUT!!!!!!!!!!!!!!
  // ********************************END OF CUTSCENE ONE "GOT THE MONEY"**********************
  Streaming.MarkModelAsNoLongerNeeded(mak_bomb01);
  // *********************************START OF THE MISSION STUFF******************************
  if ($.flag_taken_money_off_fm3 == 0) {
    $.player.addScore(-100000);
    Stat.RegisterMissionGiven();
    $.flag_taken_money_off_fm3 = 1;
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  Streaming.RequestModel(barrel4);
  Streaming.RequestModel(car`COLUMB`);
  //OR NOT HAS_SPECIAL_CHARACTER_LOADED 1
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(barrel4)) || !(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  // barrels on the boat 1 - 6, 10 - 14 removed as they were doubles
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  $.boat_barrel7 = Object.Create(1344 /* barrel4 */, 1535.15, -930.763, 18.7294);
  $.boat_barrel8 = Object.Create(1344 /* barrel4 */, 1535.18, -929.604, 18.7294);
  $.boat_barrel9 = Object.Create(1344 /* barrel4 */, 1535.21, -928.446, 18.7294);
  $.boat_barrel15 = Object.Create(1344 /* barrel4 */, 1484.85, -942.803, 18.7328);
  $.boat_barrel16 = Object.Create(1344 /* barrel4 */, 1483.69, -942.752, 18.7328);
  $.boat_barrel17 = Object.Create(1344 /* barrel4 */, 1482.53, -942.701, 18.7328);
  World.ClearArea(1272.8, -96.5, -100.0, 1.0, true /* TRUE */);
  $.ped_8ball_fm3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 1272.8, -96.5, -100.0);
  $.ped_8ball_fm3.setHeading(270.0);
  $.ped_8ball_fm3.clearThreatSearch();
  $.ped_8ball_fm3.setIdle();
  $.player.giveWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */, 30);
  $.player.setCurrentWeapon(7 /* WEAPONTYPE_SNIPERRIFLE */);
  $.ped_8ball_fm3.followPlayer($.player);
  $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
  //"8-Ball's dead!"
  //"You have left 8-ball behind go and get him!"
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    //"You have left 8-ball behind go and get him!"
    if (!($.ped_8ball_fm3.isInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      //"You have left 8-ball behind go and get him!"
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.locateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.followPlayer($.player);
      $.radar_blip_ped2_fm3.remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
  }
  $.controlmode = Pad.GetControllerMode();
  Audio.LoadMissionAudio(S3_A);
  timera = 0;
  //"8-Ball's dead!"
  //"You have left 8-ball behind go and get him!"
  //"Press and hold the R1 button to target with the sniper rifle."
  //"Press and hold the L1 button to target with the sniper rifle."
  while (timera < 7000 || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    //"You have left 8-ball behind go and get him!"
    if (!($.ped_8ball_fm3.isInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      //"You have left 8-ball behind go and get him!"
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.locateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.followPlayer($.player);
      $.radar_blip_ped2_fm3.remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    //"Press and hold the R1 button to target with the sniper rifle."
    //"Press and hold the L1 button to target with the sniper rifle."
    if ($.flag_gun_help1_fm3 == 0) {
      //"Press and hold the R1 button to target with the sniper rifle."
      if ($.controlmode == 0) {
        //"Press and hold the R1 button to target with the sniper rifle."
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      //"Press and hold the R1 button to target with the sniper rifle."
      if ($.controlmode == 1) {
        //"Press and hold the R1 button to target with the sniper rifle."
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      //"Press and hold the R1 button to target with the sniper rifle."
      if ($.controlmode == 2) {
        //"Press and hold the R1 button to target with the sniper rifle."
        Text.PrintHelp("HELP7_A");
        $.flag_gun_help1_fm3 = 1;
      }
      //"Press and hold the L1 button to target with the sniper rifle."
      if ($.controlmode == 3) {
        //"Press and hold the L1 button to target with the sniper rifle."
        Text.PrintHelp("HELP7_D");
        $.flag_gun_help1_fm3 = 1;
      }
    }
  }
  $.controlmode = Pad.GetControllerMode();
  timera = 0;
  //"8-Ball's dead!"
  //"You have left 8-ball behind go and get him!"
  //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
  //"Press the \ button to zoom in with the rifle and the ^ button to zoom out again."
  while (timera < 7000) {
    await asyncWait(0);
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    //"You have left 8-ball behind go and get him!"
    if (!($.ped_8ball_fm3.isInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      //"You have left 8-ball behind go and get him!"
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.locateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.followPlayer($.player);
      $.radar_blip_ped2_fm3.remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
    //"Press the \ button to zoom in with the rifle and the ^ button to zoom out again."
    if ($.flag_gun_help2_fm3 == 0) {
      //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
      if ($.controlmode == 0) {
        //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
      //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
      if ($.controlmode == 1) {
        //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
      //"Press the \ button to zoom in with the rifle and the ^ button to zoom out again."
      if ($.controlmode == 2) {
        //"Press the \ button to zoom in with the rifle and the ^ button to zoom out again."
        Text.PrintHelp("HELP8_B");
        $.flag_gun_help2_fm3 = 1;
      }
      //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
      if ($.controlmode == 3) {
        //"Press the ^ button to zoom in with the rifle and the / button to zoom out again."
        Text.PrintHelp("HELP8_A");
        $.flag_gun_help2_fm3 = 1;
      }
    }
  }
  $.controlmode = Pad.GetControllerMode();
  timera = 0;
  //"8-Ball's dead!"
  //"You have left 8-ball behind go and get him!"
  //"Press the | button to fire the sniper rifle."
  //"Press the / button to fire the sniper rifle."
  //"Press the R1 button to fire the sniper rifle."
  //sets up the default guards on the boat
  //guard1 on quayside righthand side of the ramp
  while (timera < 7000) {
    await asyncWait(0);
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    //"You have left 8-ball behind go and get him!"
    if (!($.ped_8ball_fm3.isInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
      //"You have left 8-ball behind go and get him!"
      Text.PrintNow("HEY3", 5000, 1);
      $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
      $.radar_blip_coord2_fm3.remove();
      $.blob_flag = 0;
      $.flag_blip_on_eightball_fm3 = 1;
    }
    if ($.player.locateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
      $.ped_8ball_fm3.followPlayer($.player);
      $.radar_blip_ped2_fm3.remove();
      $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
      $.blob_flag = 1;
      $.flag_blip_on_eightball_fm3 = 0;
    }
    //"Press the | button to fire the sniper rifle."
    //"Press the / button to fire the sniper rifle."
    //"Press the R1 button to fire the sniper rifle."
    if ($.flag_gun_help3_fm3 == 0) {
      //"Press the | button to fire the sniper rifle."
      if ($.controlmode == 0) {
        //"Press the | button to fire the sniper rifle."
        Text.PrintHelp("HELP9_A");
        $.flag_gun_help3_fm3 = 1;
      }
      //"Press the | button to fire the sniper rifle."
      if ($.controlmode == 1) {
        //"Press the | button to fire the sniper rifle."
        Text.PrintHelp("HELP9_A");
        $.flag_gun_help3_fm3 = 1;
      }
      //"Press the / button to fire the sniper rifle."
      if ($.controlmode == 2) {
        //"Press the / button to fire the sniper rifle."
        Text.PrintHelp("HELP9_B");
        $.flag_gun_help3_fm3 = 1;
      }
      //"Press the R1 button to fire the sniper rifle."
      if ($.controlmode == 3) {
        //"Press the R1 button to fire the sniper rifle."
        Text.PrintHelp("HELP9_C");
        $.flag_gun_help3_fm3 = 1;
      }
    }
  }
  $.guard1_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1524.0, -900.0, -100.0);
  $.guard1_fm3.turnToFaceCoord(1524.0, -887.0, -100.0);
  // sets weapon to infinate ammo
  $.guard1_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard1_fm3.clearThreatSearch();
  $.guard1_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard1_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard2 on quayside left side of the ramp
  $.guard1_fm3.setHeedThreats(true /* true */);
  $.guard2_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1530.0, -901.0, -100.0);
  $.guard2_fm3.turnToFaceCoord(1530.0, -887.0, -100.0);
  // sets weapon to infinate ammo
  $.guard2_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard2_fm3.clearThreatSearch();
  $.guard2_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard2_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard3 on boat left hand side by exploding creates
  $.guard2_fm3.setHeedThreats(true /* true */);
  //follows route 0
  $.guard3_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1534.6, -936.8, 18.4);
  Path.AddRoutePoint(0, 1533.9, -926.0, -100.0);
  Path.AddRoutePoint(0, 1534.6, -936.8, -100.0);
  $.guard3_fm3.setObjFollowRoute(0, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard3_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard3_fm3.clearThreatSearch();
  $.guard3_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard3_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard4 on boat walks behind the large containers towards the rear of the shop
  $.guard3_fm3.setHeedThreats(true /* true */);
  //follows route 1
  $.guard4_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1510.2, -941.7, 18.4);
  Path.AddRoutePoint(1, 1527.5, -942.9, -100.0);
  Path.AddRoutePoint(1, 1510.2, -941.7, -100.0);
  $.guard4_fm3.setObjFollowRoute(1, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard4_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard4_fm3.clearThreatSearch();
  $.guard4_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard4_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard5 on boat just behid the first row of boxes
  $.guard4_fm3.setHeedThreats(true /* true */);
  //follows route 2
  $.guard5_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1502.6, -926.7, -100.0);
  Path.AddRoutePoint(2, 1512.2, -927.6, -100.0);
  Path.AddRoutePoint(2, 1502.6, -926.7, -100.0);
  $.guard5_fm3.setObjFollowRoute(2, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard5_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard5_fm3.clearThreatSearch();
  $.guard5_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard5_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
  $.guard5_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard6 on boat by the rail of the boat
  $.guard5_fm3.setHeedThreats(true /* true */);
  //follows route 3
  $.guard6_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1472.5, -917.7, -100.0);
  Path.AddRoutePoint(3, 1507.1, -918.7, -100.0);
  Path.AddRoutePoint(3, 1472.5, -917.7, -100.0);
  $.guard6_fm3.setObjFollowRoute(3, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard6_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard6_fm3.clearThreatSearch();
  $.guard6_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard6_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard7 on boat end of large boxes by crate 4
  $.guard6_fm3.setHeedThreats(true /* true */);
  //follows route 4
  $.guard7_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1500.3, -922.2, -100.0);
  Path.AddRoutePoint(4, 1499.1, -943.7, -100.0);
  Path.AddRoutePoint(4, 1500.3, -922.2, -100.0);
  $.guard7_fm3.setObjFollowRoute(4, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard7_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard7_fm3.clearThreatSearch();
  $.guard7_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard7_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //Guard8 between second last container and crates 5,6 and 7
  $.guard7_fm3.setHeedThreats(true /* true */);
  //follows route 5
  $.guard8_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1489.5, -955.8, -100.0);
  Path.AddRoutePoint(5, 1490.2, -924.8, -100.0);
  Path.AddRoutePoint(5, 1489.5, -955.8, -100.0);
  $.guard8_fm3.setObjFollowRoute(5, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard8_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard8_fm3.clearThreatSearch();
  $.guard8_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard8_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard9 stands on top of crate6 does not patrol
  $.guard8_fm3.setHeedThreats(true /* true */);
  $.guard9_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1484.4, -930.5, 19.8);
  $.guard9_fm3.turnToFaceCoord(1487.8, -925.6, -100.0);
  // sets weapon to infinate ammo
  $.guard9_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard9_fm3.clearThreatSearch();
  $.guard9_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard9_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard10 walks from right hand side boat door to behind containers and back again
  $.guard9_fm3.setHeedThreats(true /* true */);
  //follows route 6
  $.guard10_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1476.8, -950.9, -100.0);
  Path.AddRoutePoint(6, 1476.8, -950.9, -100.0);
  Path.AddRoutePoint(6, 1476.8, -927.2, -100.0);
  $.guard10_fm3.setObjFollowRoute(6, 3 /* follow_route_loop */);
  // sets weapon to infinate ammo
  $.guard10_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard10_fm3.clearThreatSearch();
  $.guard10_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard10_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard11 on boat top right of the gang plank
  $.guard10_fm3.setHeedThreats(true /* true */);
  $.guard11_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1524.0, -919.0, -100.0);
  $.guard11_fm3.turnToFaceCoord(1525.0, -897.0, -100.0);
  // AK47 sets weapon to infinate ammo
  $.guard11_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard11_fm3.clearThreatSearch();
  $.guard11_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard11_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  //guard12 on boat top left hand side of the gang plank
  $.guard11_fm3.setHeedThreats(true /* true */);
  $.guard12_fm3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1529.0, -919.0, -100.0);
  $.guard12_fm3.turnToFaceCoord(1525.0, -897.0, -100.0);
  // AK47 sets weapon to infinate ammo
  $.guard12_fm3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.guard12_fm3.clearThreatSearch();
  $.guard12_fm3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.guard12_fm3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.guard12_fm3.setHeedThreats(true /* true */);
  $.car_columb1_fm3 = Car.Create(131 /* CAR_COLUMB */, 1534.4, -891.5, 10.8);
  $.car_columb1_fm3.setHeading(90.0);
  $.car_columb2_fm3 = Car.Create(131 /* CAR_COLUMB */, 1515.7, -896.3, 10.8);
  // waiting for the boat to be destroyed
  $.car_columb2_fm3.setHeading(314.0);
  $.blob_flag = 1;
  //GOSUB clear_area_check_fm3
  //"The guards have been alerted!"
  //"8-Ball's dead!"
  //"You have left 8-ball behind go and get him!"
  //	CHANGE_BLIP_DISPLAY radar_blip_coord2_fm3 blip_only
  //"Get a good vantage point and I'll head in when you fire the first shot."
  // Camera looks at the boat and guards
  // checks to see if the player is in a vehicle
  //PRINT_NOW ( FM3_4 ) 7000 1 //"Stop the vehicle and let me out!"
  //"The vehicle wrecked!"
  // tells players mate to go to his stageing area
  // Bottom of boat ramp
  // Top of the boat ramp
  // create one on the boat
  // Create two on the boat
  // Create three on the boat
  // Create four on the boat
  // Create five on the boat
  // Create six on the boat
  // just past crate six
  // Outside the door on the boat
  // Inside the door on the boat
  // *********waiting for 8ball to place the bomb and then he legs it off of the boat********
  while (!($.flag_bloke_in_area_fm3 == 13)) {
    await asyncWait(0);
    // SCM GOSUB car_dead_check
    await car_dead_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    //GOSUB clear_area_check_fm3
    // SCM GOSUB guard_death_check
    await guard_death_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    //"The guards have been alerted!"
    if ($.flag_bloke_leave_group_fm3 == 0) {
      //"The guards have been alerted!"
      if ($.counter_no_guards_dead_fm3 > 0) {
        //"The guards have been alerted!"
        Text.PrintNow("FM3_8", 5000, 1);
        // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    else {
      [$.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3] = $.ped_8ball_fm3.getCoordinates();
    }
    //"You have left 8-ball behind go and get him!"
    //	CHANGE_BLIP_DISPLAY radar_blip_coord2_fm3 blip_only
    if ($.flag_bloke_leave_group_fm3 == 0) {
      //"You have left 8-ball behind go and get him!"
      if (!($.ped_8ball_fm3.isInPlayersGroup($.player)) && $.flag_blip_on_eightball_fm3 == 0) {
        //"You have left 8-ball behind go and get him!"
        Text.PrintNow("HEY3", 5000, 1);
        $.radar_blip_ped2_fm3 = Blip.AddForChar($.ped_8ball_fm3);
        $.radar_blip_coord2_fm3.remove();
        $.blob_flag = 0;
        $.flag_blip_on_eightball_fm3 = 1;
      }
      //	CHANGE_BLIP_DISPLAY radar_blip_coord2_fm3 blip_only
      if ($.player.locateAnyMeansChar2D($.ped_8ball_fm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_eightball_fm3 == 1) {
        $.ped_8ball_fm3.followPlayer($.player);
        $.radar_blip_ped2_fm3.remove();
        //	CHANGE_BLIP_DISPLAY radar_blip_coord2_fm3 blip_only
        $.radar_blip_coord2_fm3 = Blip.AddForCoord(1529.0, -824.0, -100.0);
        $.blob_flag = 1;
        $.flag_blip_on_eightball_fm3 = 0;
      }
    }
    if ($.player.isInAnyCar()) {
      $.car_fm3 = $.player.storeCarIsIn();
    }
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    //"Get a good vantage point and I'll head in when you fire the first shot."
    //"8-Ball's dead!"
    // Camera looks at the boat and guards
    // checks to see if the player is in a vehicle
    //PRINT_NOW ( FM3_4 ) 7000 1 //"Stop the vehicle and let me out!"
    //"The vehicle wrecked!"
    // tells players mate to go to his stageing area
    if ($.flag_bloke_leave_group_fm3 == 0) {
      //"Get a good vantage point and I'll head in when you fire the first shot."
      //"8-Ball's dead!"
      // Camera looks at the boat and guards
      // checks to see if the player is in a vehicle
      //PRINT_NOW ( FM3_4 ) 7000 1 //"Stop the vehicle and let me out!"
      //"The vehicle wrecked!"
      if ($.player.locateStoppedAnyMeans2D(1529.0, -824.0, 3.0, 4.0, $.blob_flag) && $.ped_8ball_fm3.locateStoppedAnyMeans2D(1529.0, -824.0, 3.0, 4.0, true /* TRUE */) && $.flag_bloke_leave_group_fm3 == 0) {
        $.radar_blip_coord2_fm3.remove();
        $.ped_8ball_fm3.leaveGroup();
        $.flag_bloke_leave_group_fm3 = 1;
        Hud.SwitchWidescreen(true /* ON */);
        $.player.setControl(false /* OFF */);
        Game.SetPoliceIgnorePlayer($.player, true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
        //"Get a good vantage point and I'll head in when you fire the first shot."
        if ($.flag_got_message_fm3 == 0 && $.flag_bloke_leave_group_fm3 == 1) {
          if ($.flag_played_8ball_audio_fm3 == 0) {
            Audio.PlayMissionAudio();
            $.flag_played_8ball_audio_fm3 = 1;
          }
          //"Get a good vantage point and I'll head in when you fire the first shot."
          Text.PrintNow("FM3_8I", 5000, 1);
          $.radar_blip_coord3_fm3 = Blip.AddForCoord(1498.7, -870.5, -100.0);
          $.flag_bloke_in_area_fm3 = 1;
          $.flag_got_message_fm3 = 1;
        }
        //"8-Ball's dead!"
        // Camera looks at the boat and guards
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
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
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
        //"8-Ball's dead!"
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
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1536.8, -895.0, 10.8, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(1537.1, -899.8, 12.5, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1536.4, -900.4, 12.7, 2 /* JUMP_CUT */);
        if ($.flag_timer_fm3 == 1 && $.flag_timer2_fm3 == 0) {
          timera = 0;
          $.flag_timer2_fm3 = 1;
        }
        //"8-Ball's dead!"
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
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1522.839, -916.137, 19.602, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(1522.839, -916.137, 19.602, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1521.984, -916.648, 19.699, 2 /* JUMP_CUT */);
        if ($.flag_timer3_fm3 == 0 && $.flag_timer2_fm3 == 1) {
          timera = 0;
          $.flag_timer3_fm3 = 1;
        }
        //"8-Ball's dead!"
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
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
        }
        World.ClearArea(1476.3, -922.7, 19.0, 1.0, false /* FALSE */);
        Camera.SetFixedPosition(1476.3, -922.7, 19.0, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1477.1, -923.3, 19.1, 2 /* JUMP_CUT */);
        if ($.flag_timer4_fm3 == 0 && $.flag_timer3_fm3 == 1) {
          timera = 0;
          $.flag_timer4_fm3 = 1;
        }
        //"8-Ball's dead!"
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
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
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
        //"8-Ball's dead!"
        // checks to see if the player is in a vehicle
        if (Char.IsDead($.ped_8ball_fm3)) {
          //"8-Ball's dead!"
          Text.PrintNow("FM3_7", 5000, 1);
          // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
        }
        //PRINT_NOW ( FM3_4 ) 7000 1 //"Stop the vehicle and let me out!"
        //"8-Ball's dead!"
        //"The vehicle wrecked!"
        if ($.ped_8ball_fm3.isInAnyCar()) {
          $.car_fm3 = $.ped_8ball_fm3.storeCarIsIn();
          //"8-Ball's dead!"
          //"The vehicle wrecked!"
          while (!($.car_fm3.isStopped())) {
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
            //"8-Ball's dead!"
            //"The vehicle wrecked!"
            if (Car.IsDead($.car_fm3)) {
              //"8-Ball's dead!"
              //"The vehicle wrecked!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
              else {
                //"The vehicle wrecked!"
                Text.PrintNow("WRECKED", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
            //"8-Ball's dead!"
            if (Char.IsDead($.ped_8ball_fm3)) {
              //"8-Ball's dead!"
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
          //"8-Ball's dead!"
          //"The vehicle wrecked!"
          if (Car.IsDead($.car_fm3)) {
            //"8-Ball's dead!"
            //"The vehicle wrecked!"
            if (Char.IsDead($.ped_8ball_fm3)) {
              //"8-Ball's dead!"
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
            else {
              //"The vehicle wrecked!"
              Text.PrintNow("WRECKED", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
          //"8-Ball's dead!"
          if (Char.IsDead($.ped_8ball_fm3)) {
            //"8-Ball's dead!"
            Text.PrintNow("FM3_7", 5000, 1);
            // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
          }
          $.ped_8ball_fm3.setObjLeaveCar($.car_fm3);
          //"8-Ball's dead!"
          //"The vehicle wrecked!"
          while ($.ped_8ball_fm3.isInCar($.car_fm3)) {
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
            //"8-Ball's dead!"
            //"The vehicle wrecked!"
            if (Car.IsDead($.car_fm3)) {
              //"8-Ball's dead!"
              //"The vehicle wrecked!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
              else {
                //"The vehicle wrecked!"
                Text.PrintNow("WRECKED", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
            //"8-Ball's dead!"
            if (Char.IsDead($.ped_8ball_fm3)) {
              //"8-Ball's dead!"
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
        }
        Hud.SwitchWidescreen(false /* OFF */);
        $.player.setControl(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
      }
    }
    //"8-Ball's dead!"
    // Bottom of boat ramp
    // Top of the boat ramp
    // create one on the boat
    // Create two on the boat
    // Create three on the boat
    // Create four on the boat
    // Create five on the boat
    // Create six on the boat
    // just past crate six
    // Outside the door on the boat
    // Inside the door on the boat
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
      if ($.player.locateOnFoot3D(1498.7, -870.5, 26.8, 3.0, 3.0, 2.0, false /* FALSE */)) {
        $.radar_blip_coord3_fm3.remove();
      }
      if ($.flag_played_8ball_audio_fm3 == 1) {
        if ($.flag_played_cops_audio_fm3 == 0) {
          if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint("FM3_8I");
          }
        }
      }
      //"8-Ball's dead!"
      // Bottom of boat ramp
      if ($.flag_bloke_in_area_fm3 == 1) {
        if ($.flag_8ball_ordered_area1 == 0) {
          $.ped_8ball_fm3.setObjRunToCoord(1545.9, -867.7);
          timera = 0;
          $.flag_8ball_ordered_area1 = 1;
        }
        if ($.flag_8ball_moved1 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1545.9, -867.7, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1545.9, -867.7, 10.8);
              $.flag_8ball_moved1 = 1;
            }
          }
        }
        if ($.flag_8ball_ducking_fm3 == 0) {
          if ($.ped_8ball_fm3.locateOnFoot2D(1545.9, -867.7, 1.0, 1.0, false /* FALSE */)) {
            $.flag_8ball_moved1 = 1;
            $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 10000);
            $.flag_8ball_ducking_fm3 = 1;
          }
        }
        //"8-Ball's dead!"
        if ($.counter_no_guards_dead_fm3 > 0 || $.player.isShootingInArea(1610.6, -614.6, 1340.9, -1074.5, false /* FALSE */)) {
          TIMERB = 0;
          //"8-Ball's dead!"
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
            //"8-Ball's dead!"
            if (Char.IsDead($.ped_8ball_fm3)) {
              //"8-Ball's dead!"
              Text.PrintNow("FM3_7", 5000, 1);
              // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
            }
          }
          $.flag_bloke_in_area_fm3 = 2;
          if ($.flag_car_marked_fm3 == 0) {
            $.car_columb1_fm3.markAsNoLongerNeeded();
            $.car_columb2_fm3.markAsNoLongerNeeded();
            $.flag_car_marked_fm3 = 1;
          }
        }
      }
      // Top of the boat ramp
      if ($.flag_bloke_in_area_fm3 == 2) {
        $.ped_8ball_fm3.setObjRunToCoord(1527.0, -899.0);
        if ($.flag_timer_set_fm3 == 0) {
          timera = 0;
          $.flag_timer_set_fm3 = 1;
        }
        if ($.ped_8ball_fm3.locateOnFoot2D(1527.0, -899.0, 2.0, 2.0, false /* FALSE */)) {
          $.flag_8ball_moved2 = 1;
          $.flag_bloke_in_area_fm3 = 3;
        }
        if ($.flag_8ball_moved2 == 0) {
          if (timera >= 20000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1527.0, -899.0, 2.0, 2.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1527.0, -899.0, 10.8);
              $.flag_8ball_moved2 = 1;
            }
          }
        }
      }
      // create one on the boat
      if ($.flag_bloke_in_area_fm3 == 3) {
        $.ped_8ball_fm3.setObjRunToCoord(1526.0, -919.0);
        if ($.flag_timer_set_fm3 == 1) {
          timera = 0;
          $.flag_timer_set_fm3 = 2;
        }
        if ($.ped_8ball_fm3.locateOnFoot2D(1526.0, -919.0, 2.0, 2.0, false /* FALSE */)) {
          $.flag_8ball_moved3 = 1;
          $.flag_bloke_in_area_fm3 = 4;
        }
        if ($.flag_8ball_moved3 == 0) {
          if (timera >= 20000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1526.0, -919.0, 2.0, 2.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1526.0, -919.0, 18.4);
              $.flag_8ball_moved3 = 1;
            }
          }
        }
      }
      //"8-Ball's dead!"
      // Create two on the boat
      if ($.flag_bloke_in_area_fm3 == 4) {
        $.ped_8ball_fm3.setObjRunToCoord(1522.9, -924.3);
        if ($.flag_timer_set_fm3 == 2) {
          timera = 0;
          $.flag_timer_set_fm3 = 3;
        }
        if ($.flag_8ball_moved4 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1522.9, -924.3, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1522.9, -924.3, 18.4);
              $.flag_8ball_moved4 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1522.9, -924.3, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved4 = 1;
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 1) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 2;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 5;
        }
      }
      //"8-Ball's dead!"
      // Create three on the boat
      if ($.flag_bloke_in_area_fm3 == 5) {
        $.ped_8ball_fm3.setObjRunToCoord(1517.0, -929.0);
        if ($.flag_timer_set_fm3 == 3) {
          timera = 0;
          $.flag_timer_set_fm3 = 4;
        }
        if ($.flag_8ball_moved5 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1517.0, -929.0, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1517.0, -929.0, 18.4);
              $.flag_8ball_moved5 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1517.0, -929.0, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved5 = 1;
          Audio.LoadMissionAudio(S3_B);
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 2) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 3;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
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
      //"8-Ball's dead!"
      // Create four on the boat
      if ($.flag_bloke_in_area_fm3 == 6) {
        $.ped_8ball_fm3.setObjRunToCoord(1510.0, -923.0);
        if ($.flag_timer_set_fm3 == 4) {
          timera = 0;
          $.flag_timer_set_fm3 = 5;
        }
        if ($.flag_8ball_moved6 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1510.0, -923.0, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1510.0, -923.0, 18.4);
              $.flag_8ball_moved6 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1510.0, -923.0, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved6 = 1;
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 3) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 4;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 7;
        }
      }
      //"8-Ball's dead!"
      // Create five on the boat
      if ($.flag_bloke_in_area_fm3 == 7) {
        $.ped_8ball_fm3.setObjRunToCoord(1504.4, -928.6);
        if ($.flag_timer_set_fm3 == 5) {
          timera = 0;
          $.flag_timer_set_fm3 = 6;
        }
        if ($.flag_8ball_moved7 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1504.4, -928.6, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1504.4, -928.6, 18.4);
              $.flag_8ball_moved7 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1504.4, -928.6, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved7 = 1;
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 4) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 5;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 8;
        }
      }
      //"8-Ball's dead!"
      // Create six on the boat
      if ($.flag_bloke_in_area_fm3 == 8) {
        $.ped_8ball_fm3.setObjRunToCoord(1493.7, -922.1);
        if ($.flag_timer_set_fm3 == 6) {
          timera = 0;
          $.flag_timer_set_fm3 = 7;
        }
        if ($.flag_8ball_moved8 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1493.7, -922.1, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1493.7, -922.1, 18.4);
              $.flag_8ball_moved8 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1493.7, -922.1, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved8 = 1;
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 5) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 6;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 9;
        }
      }
      //"8-Ball's dead!"
      // just past crate six
      if ($.flag_bloke_in_area_fm3 == 9) {
        $.ped_8ball_fm3.setObjRunToCoord(1487.0, -930.2);
        if ($.flag_timer_set_fm3 == 7) {
          timera = 0;
          $.flag_timer_set_fm3 = 8;
        }
        if ($.flag_8ball_moved9 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1487.0, -930.2, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1487.0, -930.2, 18.4);
              $.flag_8ball_moved9 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1487.0, -930.2, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved9 = 1;
          //"8-Ball's dead!"
          if ($.counter_no_guards_dead_fm3 < 12) {
            if ($.flag_8ball_ducking_fm3 == 6) {
              $.ped_8ball_fm3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 5000);
              $.flag_8ball_ducking_fm3 = 7;
            }
            TIMERB = 0;
            //"8-Ball's dead!"
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
              //"8-Ball's dead!"
              if (Char.IsDead($.ped_8ball_fm3)) {
                //"8-Ball's dead!"
                Text.PrintNow("FM3_7", 5000, 1);
                // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
              }
            }
          }
          $.flag_bloke_in_area_fm3 = 10;
        }
      }
      // Outside the door on the boat
      if ($.flag_bloke_in_area_fm3 == 10) {
        $.ped_8ball_fm3.setObjRunToCoord(1481.5, -926.8);
        if ($.flag_timer_set_fm3 == 8) {
          timera = 0;
          $.flag_timer_set_fm3 = 9;
        }
        if ($.flag_8ball_moved10 == 0) {
          if (timera >= 15000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1481.5, -926.8, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1481.5, -926.8, 18.4);
              $.flag_8ball_moved10 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.locateOnFoot2D(1481.5, -926.8, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved10 = 1;
          $.flag_bloke_in_area_fm3 = 11;
        }
      }
      // Inside the door on the boat
      if ($.flag_bloke_in_area_fm3 == 11) {
        $.ped_8ball_fm3.setObjRunToCoord(1475.8, -940.3);
        if ($.flag_timer_set_fm3 == 9) {
          timera = 0;
          $.flag_timer_set_fm3 = 10;
        }
        if ($.flag_8ball_moved11 == 0) {
          if (timera >= 15000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1475.8, -940.3, 1.0, 1.0, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1475.8, -940.3, 18.4);
              $.flag_8ball_moved11 = 1;
            }
          }
        }
        if ($.ped_8ball_fm3.locateOnFoot2D(1475.8, -940.3, 1.0, 1.0, false /* FALSE */)) {
          $.flag_8ball_moved11 = 1;
          $.flag_bloke_in_area_fm3 = 12;
        }
      }
      //"8-Ball's dead!"
      if ($.flag_bloke_in_area_fm3 == 12) {
        $.ped_8ball_fm3.setObjRunToCoord(1474.2, -940.2);
        if ($.flag_timer_set_fm3 == 10) {
          timera = 0;
          $.flag_timer_set_fm3 = 11;
        }
        if ($.flag_8ball_moved12 == 0) {
          if (timera >= 25000) {
            if (!($.ped_8ball_fm3.locateOnFoot2D(1474.2, -940.2, 0.5, 0.5, false /* FALSE */))) {
              $.ped_8ball_fm3.setCoordinates(1474.2, -940.2, 18.4);
              $.flag_8ball_moved12 = 1;
            }
          }
        }
        //"8-Ball's dead!"
        if ($.ped_8ball_fm3.locateOnFoot2D(1474.2, -940.2, 0.5, 0.5, false /* FALSE */)) {
          $.flag_8ball_moved12 = 1;
          $.ped_8ball_fm3.setIdle();
          $.flag_bloke_in_area_fm3 = 13;
          TIMERB = 0;
          //"8-Ball's dead!"
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
            //"8-Ball's dead!"
            if (Char.IsDead($.ped_8ball_fm3)) {
              //"8-Ball's dead!"
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
  //"8-Ball's dead!"
  // ***********************************BOAT BLOWING UP CUTSCENE******************************
  //wiltest:  // TEST STUFF TO COME OUT!!!!!!!!!!!!!!!!!!!!!!!!
  while (timera < 3000) {
    await asyncWait(0);
    // SCM GOSUB car_dead_check
    await car_dead_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB guard_death_check
    await guard_death_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  //	if player is not in control after 5 secs do the cutscene anyway
  //"8-Ball's dead!"
  while (!($.player.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    //"8-Ball's dead!"
    if (Char.IsDead($.ped_8ball_fm3)) {
      //"8-Ball's dead!"
      Text.PrintNow("FM3_7", 5000, 1);
      // SCM GOTO → mission_frankie3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie3_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.makeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  // Cutscene stuff
  Streaming.Switch(false /* OFF */);
  Streaming.LoadSpecialModel(hier`cutobj01`, ship);
  //LOAD_SPECIAL_CHARACTER 1 EIGHT2  // TEST STUFF
  Streaming.LoadSpecialModel(hier`cutobj02`, gangp);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.guard1_fm3.removeElegantly();
  $.guard2_fm3.removeElegantly();
  $.guard3_fm3.removeElegantly();
  $.guard4_fm3.removeElegantly();
  $.guard5_fm3.removeElegantly();
  $.guard6_fm3.removeElegantly();
  $.guard7_fm3.removeElegantly();
  $.guard8_fm3.removeElegantly();
  $.guard9_fm3.removeElegantly();
  $.guard10_fm3.removeElegantly();
  $.guard11_fm3.removeElegantly();
  $.guard12_fm3.removeElegantly();
  World.ClearArea(1519.02, -934.60, 18.4, 25.0, true /* TRUE */);
  $.boat_barrel7.delete();
  $.boat_barrel8.delete();
  $.boat_barrel9.delete();
  $.boat_barrel15.delete();
  $.boat_barrel16.delete();
  $.boat_barrel17.delete();
  Streaming.LoadAllModelsNow();
  //OR NOT HAS_SPECIAL_CHARACTER_LOADED 1 // TEST STUFF
  // Swaps boat for building lod then sets boat lod to invisible
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(1508.77, -937.206, 20.6832, 50.0, 952 /* rustship_structure */, false /* FALSE */);
  World.SwapNearestBuildingModel(1508.77, -937.206, 20.6832, 50.0, 952 /* rustship_structure */, 218 /* LOD_land014 */);
  World.SetVisibilityOfClosestObjectOfType(1508.77, -937.206, 20.6832, 50.0, 1060 /* LODtship_structure */, false /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(1526.75, -907.423, 14.2965, 50.0, 1033 /* boatramp1 */, false /* FALSE */);
  World.SwapNearestBuildingModel(1526.75, -907.423, 14.2965, 50.0, 1033 /* boatramp1 */, 218 /* LOD_land014 */);
  Cutscene.Load(s4_bdbd);
  Cutscene.SetOffset(1573.8866, -906.0611, 11.1);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.setAnim(eight2);
  $.cs_ship = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ship.setAnim(ship);
  $.cs_gangplank = CutsceneObject.Create(hier`cutobj02`);
  $.cs_gangplank.setAnim(gangp);
  World.ClearArea(1526.5, -894.8, -100.0, 1.0, true /* TRUE */);
  $.player.setCoordinates(1526.5, -894.8, -100.0);
  $.player.setHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.ped_8ball_fm3.delete();
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();
  // unsupported START_BOAT_FOAM_ANIMATION
  // Displays cutscene text
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
  World.SwitchRubbish(true /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  // *****************************END OF BOAT BLOWING UP CUTSCENE*****************************
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  // SCM GOTO → mission_frankie3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_frankie3_passed"); // fallback: would break linear control flow
  }
}

async function mission_frankie3_failed() {
  $.player.setAmmo(7 /* WEAPONTYPE_SNIPERRIFLE */, 0);
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission Frankie3 passed
  return;
}

async function mission_frankie3_passed() {
  $.flag_frankie_mission3_passed = 1;
  Stat.RegisterMissionPassed("FM3");
  Stat.PlayerMadeProgress(1);
  Restart.CancelOverride();
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 150000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(150000);
  $.player.clearWantedLevel();
  $.eightball_contact_blip.remove();
  $.flag_frankie_switched_off = 0;
  $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
  // START_NEW_SCRIPT frankie_mission4_loop
  // START_NEW_SCRIPT emergency_crane_pager
  // mission cleanup
  return;
}

async function mission_cleanup_frankie3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  $.flag_on_frankie3 = 0;
  if (!(Char.IsDead($.guard1_fm3))) {
    $.guard1_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard2_fm3))) {
    $.guard2_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard3_fm3))) {
    $.guard3_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard4_fm3))) {
    $.guard4_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard5_fm3))) {
    $.guard5_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard6_fm3))) {
    $.guard6_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard7_fm3))) {
    $.guard7_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard8_fm3))) {
    $.guard8_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard9_fm3))) {
    $.guard9_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard10_fm3))) {
    $.guard10_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard11_fm3))) {
    $.guard11_fm3.setStayInSamePlace(false /* FALSE */);
  }
  if (!(Char.IsDead($.guard12_fm3))) {
    $.guard12_fm3.setStayInSamePlace(false /* FALSE */);
  }
  $.ped_8ball_fm3.removeElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.MarkModelAsNoLongerNeeded(barrel4);
  $.ped_8ball_fm3.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  $.radar_blip_coord2_fm3.remove();
  $.radar_blip_coord3_fm3.remove();
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
  $.boat_barrel7.delete();
  $.boat_barrel8.delete();
  $.boat_barrel9.delete();
  $.boat_barrel15.delete();
  $.boat_barrel16.delete();
  $.boat_barrel17.delete();
  Mission.Finish();
  return;
}

async function guard_death_check() {
  //Guard now looks out for 8-ball
  // guard2
  if ($.flag_guard1_fm3_dead == 0) {
    //Guard now looks out for 8-ball
    if (Char.IsDead($.guard1_fm3)) {
      $.flag_guard1_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard now looks out for 8-ball
      if ($.flag_guard1_looking_for_8ball == 0) {
        //Guard now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard2_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          if ($.flag_columb_car2_dead == 0) {
            $.guard1_fm3.setObjRunToCoord(1517.6, -896.6);
          }
          else {
            $.guard1_fm3.setObjRunToCoord(1523.3, -893.7);
          }
          //Guard now looks out for 8-ball
          $.guard1_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard1_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard1_looking_for_8ball == 1) {
        if ($.flag_columb_car2_dead == 0) {
          if ($.guard1_fm3.locateOnFoot3D(1517.6, -896.6, 10.8, 0.5, 0.5, 2.0, false /* FALSE */)) {
            $.guard1_fm3.setObjGuardSpot(1517.6, -896.6, 10.8);
            $.guard1_fm3.setStayInSamePlace(true /* TRUE */);
            $.guard1_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          }
        }
        else {
          if ($.guard1_fm3.locateOnFoot3D(1523.3, -893.7, 10.8, 0.5, 0.5, 2.0, false /* FALSE */)) {
            $.guard1_fm3.setObjGuardSpot(1523.3, -893.7, 10.8);
            $.guard1_fm3.setStayInSamePlace(true /* TRUE */);
            $.guard1_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          }
        }
      }
    }
  }
  //Guard now looks out for 8-ball
  // guard3
  if ($.flag_guard2_fm3_dead == 0) {
    //Guard now looks out for 8-ball
    if (Char.IsDead($.guard2_fm3)) {
      $.flag_guard2_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard now looks out for 8-ball
      if ($.flag_guard2_looking_for_8ball == 0) {
        //Guard now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard1_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          if ($.flag_columb_car1_dead == 0) {
            $.guard2_fm3.setObjRunToCoord(1532.9, -893.8);
          }
          else {
            $.guard2_fm3.setObjRunToCoord(1528.6, -892.2);
          }
          //Guard now looks out for 8-ball
          $.guard2_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard2_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard2_looking_for_8ball == 1) {
        if ($.flag_columb_car1_dead == 0) {
          if ($.guard2_fm3.locateOnFoot3D(1532.9, -893.8, 10.8, 0.5, 0.5, 2.0, false /* FALSE */)) {
            $.guard2_fm3.setObjGuardSpot(1532.9, -893.8, 10.8);
            $.guard2_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
            $.guard2_fm3.setStayInSamePlace(true /* TRUE */);
          }
        }
        else {
          if ($.guard2_fm3.locateOnFoot3D(1528.6, -892.2, 10.8, 0.5, 0.5, 2.0, false /* FALSE */)) {
            $.guard2_fm3.setObjGuardSpot(1528.6, -892.2, 10.8);
            $.guard2_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
            $.guard2_fm3.setStayInSamePlace(true /* TRUE */);
          }
        }
      }
    }
  }
  //8ball has reached the gangplank of the boat
  //Guard3 now looks out for 8-ball
  //flag_guard3_looking_for_8ball = 2
  // guard4
  if ($.flag_guard3_fm3_dead == 0) {
    //8ball has reached the gangplank of the boat
    //Guard3 now looks out for 8-ball
    //flag_guard3_looking_for_8ball = 2
    if (Char.IsDead($.guard3_fm3)) {
      $.flag_guard3_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //8ball has reached the gangplank of the boat
      //Guard3 now looks out for 8-ball
      if ($.flag_guard3_looking_for_8ball == 0) {
        //8ball has reached the gangplank of the boat
        //Guard3 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 2 || $.counter_no_guards_dead_fm3 > 0 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          //Guard3 now looks out for 8-ball
          $.guard3_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.guard3_fm3.setObjRunToCoord(1534.1, -931.2);
          $.flag_guard3_looking_for_8ball = 1;
        }
      }
      //flag_guard3_looking_for_8ball = 2
      if ($.flag_guard3_looking_for_8ball == 1) {
        //flag_guard3_looking_for_8ball = 2
        if ($.guard3_fm3.locateOnFoot3D(1534.1, -931.2, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard3_fm3.setObjGuardSpot(1534.1, -931.2, 18.4);
          $.guard3_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          //flag_guard3_looking_for_8ball = 2
          $.guard3_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //8-ball has reached the second create on the boat
  //Guard4 now looks out for 8-ball
  // Guard5
  if ($.flag_guard4_fm3_dead == 0) {
    //8-ball has reached the second create on the boat
    //Guard4 now looks out for 8-ball
    if (Char.IsDead($.guard4_fm3)) {
      $.flag_guard4_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //8-ball has reached the second create on the boat
      //Guard4 now looks out for 8-ball
      if ($.flag_guard4_looking_for_8ball == 0) {
        //8-ball has reached the second create on the boat
        //Guard4 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 4 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.counter_no_guards_dead_fm3 > 0) {
          $.guard4_fm3.setObjRunToCoord(1517.5, -940.6);
          //Guard4 now looks out for 8-ball
          $.guard4_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard4_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard4_looking_for_8ball == 1) {
        if ($.guard4_fm3.locateAnyMeans3D(1517.5, -940.6, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard4_fm3.setObjRunToCoord(1516.1, -932.6);
          $.flag_guard4_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard4_looking_for_8ball == 2) {
        if ($.guard4_fm3.locateAnyMeans3D(1516.1, -932.6, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard4_fm3.setObjGuardSpot(1516.1, -932.6, 18.4);
          $.guard4_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard4_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard5 now looks out for 8-ball
  // Guard6
  if ($.flag_guard5_fm3_dead == 0) {
    //Guard5 now looks out for 8-ball
    if (Char.IsDead($.guard5_fm3)) {
      $.flag_guard5_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard5 now looks out for 8-ball
      if ($.flag_guard5_looking_for_8ball == 0) {
        //Guard5 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard6_fm3_dead == 1 || $.flag_guard7_fm3_dead == 1) {
          $.guard5_fm3.setObjRunToCoord(1505.6, -926.1);
          //Guard5 now looks out for 8-ball
          $.guard5_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard5_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard5_looking_for_8ball == 1) {
        if ($.guard5_fm3.locateAnyMeans3D(1505.6, -926.1, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard5_fm3.setObjRunToCoord(1507.2, -924.0);
          $.flag_guard5_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard5_looking_for_8ball == 2) {
        if ($.guard5_fm3.locateAnyMeans3D(1507.2, -924.0, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard5_fm3.setObjGuardSpot(1507.2, -924.0, 18.4);
          $.guard5_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard5_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard6 now looks out for 8-ball
  // Guard7
  if ($.flag_guard6_fm3_dead == 0) {
    //Guard6 now looks out for 8-ball
    if (Char.IsDead($.guard6_fm3)) {
      $.flag_guard6_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard6 now looks out for 8-ball
      if ($.flag_guard6_looking_for_8ball == 0) {
        //Guard6 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard5_fm3_dead == 1 || $.flag_guard7_fm3_dead == 1) {
          $.guard6_fm3.setObjRunToCoord(1501.0, -919.8);
          //Guard6 now looks out for 8-ball
          $.guard6_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard6_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard6_looking_for_8ball == 1) {
        if ($.guard6_fm3.locateAnyMeans3D(1501.0, -919.8, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard6_fm3.setObjGuardSpot(1501.0, -919.8, 18.4);
          $.guard6_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard6_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard7 now looks out for 8-ball
  // Guard8
  if ($.flag_guard7_fm3_dead == 0) {
    //Guard7 now looks out for 8-ball
    if (Char.IsDead($.guard7_fm3)) {
      $.flag_guard7_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard7 now looks out for 8-ball
      if ($.flag_guard7_looking_for_8ball == 0) {
        //Guard7 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_guard5_fm3_dead == 1 || $.flag_guard6_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard7_fm3.setObjRunToCoord(1499.4, -937.8);
          //Guard7 now looks out for 8-ball
          $.guard7_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard7_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard7_looking_for_8ball == 1) {
        if ($.guard7_fm3.locateAnyMeans3D(1499.4, -937.8, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard7_fm3.setObjRunToCoord(1502.2, -930.8);
          $.flag_guard7_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard7_looking_for_8ball == 2) {
        if ($.guard7_fm3.locateAnyMeans3D(1502.2, -930.8, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard7_fm3.setObjGuardSpot(1502.2, -930.8, 18.4);
          $.guard7_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard7_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard8 now looks out for 8-ball
  // Guard9
  if ($.flag_guard8_fm3_dead == 0) {
    //Guard8 now looks out for 8-ball
    if (Char.IsDead($.guard8_fm3)) {
      $.flag_guard8_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard8 now looks out for 8-ball
      if ($.flag_guard8_looking_for_8ball == 0) {
        //Guard8 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 5 || $.flag_guard9_fm3_dead == 1 || $.flag_guard10_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard8_fm3.setObjRunToCoord(1491.6, -935.8);
          //Guard8 now looks out for 8-ball
          $.guard8_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard8_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard8_looking_for_8ball == 1) {
        if ($.guard8_fm3.locateAnyMeans3D(1491.6, -935.8, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard8_fm3.setObjRunToCoord(1487.6, -933.6);
          $.flag_guard8_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard8_looking_for_8ball == 2) {
        if ($.guard8_fm3.locateAnyMeans3D(1487.6, -933.6, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard8_fm3.setObjGuardSpot(1487.6, -933.6, 18.4);
          $.guard8_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard8_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard9 now looks out for 8-ball
  // Guard10
  if ($.flag_guard9_fm3_dead == 0) {
    //Guard9 now looks out for 8-ball
    if (Char.IsDead($.guard9_fm3)) {
      $.flag_guard9_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard9 now looks out for 8-ball
      if ($.flag_guard9_looking_for_8ball == 0) {
        //Guard9 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 6 || $.flag_guard8_fm3_dead == 1 || $.flag_guard10_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard9_fm3.setObjGuardSpot(1484.4, -930.5, 19.8);
          //Guard9 now looks out for 8-ball
          $.guard9_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.guard9_fm3.setStayInSamePlace(true /* TRUE */);
          $.guard9_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.flag_guard9_looking_for_8ball = 1;
        }
      }
    }
  }
  //Guard10 now looks out for 8-ball
  // Guard11
  if ($.flag_guard10_fm3_dead == 0) {
    //Guard10 now looks out for 8-ball
    if (Char.IsDead($.guard10_fm3)) {
      $.flag_guard10_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard10 now looks out for 8-ball
      if ($.flag_guard10_looking_for_8ball == 0) {
        //Guard10 now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 6 || $.flag_guard8_fm3_dead == 1 || $.flag_guard9_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1) {
          $.guard10_fm3.setObjRunToCoord(1476.7, -936.3);
          //Guard10 now looks out for 8-ball
          $.guard10_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard10_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard10_looking_for_8ball == 1) {
        if ($.guard10_fm3.locateAnyMeans3D(1476.7, -936.3, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard10_fm3.setObjRunToCoord(1482.6, -930.5);
          $.flag_guard10_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard10_looking_for_8ball == 2) {
        if ($.guard10_fm3.locateAnyMeans3D(1482.6, -930.5, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard10_fm3.setObjGuardSpot(1482.6, -930.5, 18.4);
          $.guard10_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard10_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard now looks out for 8-ball
  // Guard12
  if ($.flag_guard11_fm3_dead == 0) {
    //Guard now looks out for 8-ball
    if (Char.IsDead($.guard11_fm3)) {
      $.flag_guard11_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard now looks out for 8-ball
      if ($.flag_guard11_looking_for_8ball == 0) {
        //Guard now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard12_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard1_fm3_dead == 1 || $.flag_guard2_fm3_dead == 1) {
          $.guard11_fm3.setObjRunToCoord(1528.5, -927.5);
          //Guard now looks out for 8-ball
          $.guard11_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard11_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard11_looking_for_8ball == 1) {
        if ($.guard11_fm3.locateAnyMeans3D(1528.5, -927.5, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard11_fm3.setObjRunToCoord(1521.5, -927.2);
          $.flag_guard11_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard11_looking_for_8ball == 2) {
        if ($.guard11_fm3.locateAnyMeans3D(1521.5, -927.2, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard11_fm3.setObjGuardSpot(1521.5, -927.2, 18.4);
          $.guard11_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard11_fm3.setStayInSamePlace(true /* TRUE */);
        }
      }
    }
  }
  //Guard now looks out for 8-ball
  if ($.flag_guard12_fm3_dead == 0) {
    //Guard now looks out for 8-ball
    if (Char.IsDead($.guard12_fm3)) {
      $.flag_guard12_fm3_dead = 1;
      ++$.counter_no_guards_dead_fm3;
    }
    else {
      //Guard now looks out for 8-ball
      if ($.flag_guard12_looking_for_8ball == 0) {
        //Guard now looks out for 8-ball
        if ($.flag_bloke_in_area_fm3 == 2 || $.flag_guard11_fm3_dead == 1 || $.flag_columb_car1_dead == 1 || $.flag_columb_car2_dead == 1 || $.flag_guard1_fm3_dead == 1 || $.flag_guard2_fm3_dead == 1) {
          $.guard12_fm3.setObjRunToCoord(1517.6, -923.1);
          //Guard now looks out for 8-ball
          $.guard12_fm3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.flag_guard12_looking_for_8ball = 1;
        }
      }
      if ($.flag_guard12_looking_for_8ball == 1) {
        if ($.guard12_fm3.locateAnyMeans3D(1517.6, -923.1, 18.4, 0.5, 0.5, 2.0, false /* FALSE */)) {
          $.guard12_fm3.setObjRunToCoord(1512.7, -929.0);
          $.flag_guard12_looking_for_8ball = 2;
        }
      }
      if ($.flag_guard12_looking_for_8ball == 2) {
        if ($.guard12_fm3.locateAnyMeans3D(1512.7, -929.0, 18.4, 0.2, 0.2, 2.0, false /* FALSE */)) {
          $.guard12_fm3.setObjGuardSpot(1512.7, -929.0, 18.4);
          $.guard12_fm3.turnToFaceCoord($.eightball_x_fm3, $.eightball_y_fm3, $.eightball_z_fm3);
          $.guard12_fm3.setStayInSamePlace(true /* TRUE */);
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
    World.ClearArea(1545.9, -867.7, 10.8, 1.0, false /* FALSE */);
    World.ClearArea(1527.0, -899.0, 10.8, 1.0, false /* FALSE */);
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 3) {
    World.ClearArea(1527.0, -899.0, 10.8, 1.0, false /* FALSE */);
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 4) {
    World.ClearArea(1526.0, -919.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 5) {
    World.ClearArea(1522.9, -924.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 6) {
    World.ClearArea(1517.0, -929.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 7) {
    World.ClearArea(1510.0, -923.0, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 8) {
    World.ClearArea(1504.4, -928.6, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 9) {
    World.ClearArea(1493.7, -922.1, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 10) {
    World.ClearArea(1487.0, -930.2, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 11) {
    World.ClearArea(1481.5, -926.8, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  if ($.flag_bloke_in_area_fm3 == 12) {
    World.ClearArea(1475.8, -940.3, 18.4, 1.0, false /* FALSE */);
    World.ClearArea(1474.2, -940.2, 18.4, 1.0, false /* FALSE */);
  }
  return;
}

export async function frank3() {
  // *****************************************************************************************
  // *************************************Frankie Mission 3***********************************
  // ***************************************"BOMB DA BASE"************************************
  // MissionBoundary
  // Mission start stuff
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
  // Variables for mission
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
  // guards told to look for 8ball
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
  // Check to see if the player is cheating
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
  // if 8ball gets stuck timer to warp him to his next location
  // VAR_INT flag_timer_set_fm3
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved1
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved2
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved3
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved4
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved5
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved6
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved7
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved8
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved9
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved10
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved11
  // if 8ball gets stuck these will warp him to his next location
  // VAR_INT flag_8ball_moved12
  // VAR_INT flag_car_marked_fm3
  // ***************************************Start Mission*************************************
  // VAR_INT flag_8ball_ducking_fm3
}
