// Generated from Main/Industrial/toni4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_toni4() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_toni_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.grunts1_been_created_before = 0;
  $.grunts2_been_created_before = 0;
  $.grunts3_been_created_before = 0;
  $.grabbed_peds_before = 0;
  $.been_in_fish_factory = 0;
  $.audio_played_tm4 = 0;
  $.triad1_can_leg_it = 0;
  $.triad1_can_leg_it = 0;
  $.triad1_can_leg_it = 0;
  $.pay_back_for_traids1 = 0;
  $.pay_back_for_traids2 = 0;
  $.pay_back_for_traids3 = 0;
  {
  Streaming.RequestModel(ped`GANG_MAFIA_A`);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.RequestModel(ind_newrizzos);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, NOTE);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_A`)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasModelLoaded(ind_newrizzos))) {
    await asyncWait(0);
  }
  $.mafia_goon1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, 1216.4, -309.9, -100.0);
  $.mafia_goon2 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1215.9, -311.2, 29.0);
  if (!(Char.IsDead($.mafia_goon1)) && !(Char.IsDead($.mafia_goon2))) {
    $.mafia_goon1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 300);
    $.mafia_goon1.SetThreatSearch(6 /* THREAT_COP */);
    $.mafia_goon1.SetThreatSearch(8 /* THREAT_GANG_TRIAD */);
    $.mafia_goon1.SetRunning(1 /* TRUE */);
    $.mafia_goon1.TurnToFaceChar($.mafia_goon2);
    Game.SetCharsChatting($.mafia_goon1, $.mafia_goon2, 24000);
    $.mafia_goon2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 300);
    $.mafia_goon2.SetThreatSearch(6 /* THREAT_COP */);
    $.mafia_goon2.SetThreatSearch(8 /* THREAT_GANG_TRIAD */);
    $.mafia_goon2.SetRunning(1 /* TRUE */);
    $.mafia_goon2.TurnToFaceChar($.mafia_goon1);
  }
  Cutscene.Load(T4_TAT);
  Cutscene.SetOffset(1218.42, -314.5, 28.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_note = CutsceneObject.Create(hier`cutobj02`);
  $.cs_note.SetAnim(NOTE);
  World.ClearArea(1219.6, -323.0, 25.6, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1219.6, -323.0, 25.6);
  $.player.SetHeading(180.0);
  World.ClearArea(1216.1, -313.0, 29.9, 10.0, 1 /* TRUE */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 82) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_A", 10000, 1);
  while ($.cs_time < 2415) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_A2", 10000, 1);
  while ($.cs_time < 4420) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_B", 10000, 1);
  while ($.cs_time < 7629) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_C", 10000, 1);
  while ($.cs_time < 11110) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_D", 10000, 1);
  while ($.cs_time < 13283) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_E", 10000, 1);
  while ($.cs_time < 18058) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_F", 10000, 1);
  while ($.cs_time < 21248) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM4_G", 10000, 1);
  while ($.cs_time < 24000) {
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
  if (!(Char.IsDead($.mafia_goon1)) && !(Char.IsDead($.mafia_goon2))) {
    Game.SetCharsChatting($.mafia_goon1, $.mafia_goon2, 0);
  }
  $.player.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
  $.player.SetCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */);
  if (!(Char.IsDead($.mafia_goon1)) && !(Char.IsDead($.mafia_goon2))) {
    $.mafia_goon1.SetCoordinates(1220.2, -321.8, 26.4);
    $.mafia_goon2.SetCoordinates(1219.0, -321.3, 26.4);
  }
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(ind_newrizzos);
  Streaming.RequestModel(ped`GANG_TRIAD_A`);
  Streaming.RequestModel(ped`GANG_TRIAD_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_B`))) {
    await asyncWait(0);
  }
  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */);
  $.warlords_dead = 0;
  $.triads_spot_you = 0;
  $.clear_triads_threats = 0;
  if (!(Char.IsDead($.mafia_goon1))) {
    $.mafia_goon1.FollowPlayer($.player);
  }
  if (!(Char.IsDead($.mafia_goon2))) {
    $.mafia_goon2.FollowPlayer($.player);
  }
  Zone.SetPedInfo("LITTLEI", 1 /* DAY */, 15, 500, 250, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("LITTLEI", 0 /* NIGHT */, 8, 500, 250, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("CHINA", 1 /* DAY */, 30, 350, 600, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("CHINA", 0 /* NIGHT */, 30, 350, 600, 0, 0, 0, 0, 0, 0);
  $.triad_head1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 906.4, -541.4, 14.4);
  $.triad_head1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
  $.triad_head1.SetHeading(109.0);
  $.blip1_tm4 = Blip.AddForChar($.triad_head1);
  $.triad_head1.AddArmor(100);
  $.triad_head1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_head1.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.triad_head1.SetStayInSamePlace(1 /* TRUE */);
  $.triad_head2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 968.6, -682.2, 14.3);
  $.triad_head2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
  $.blip2_tm4 = Blip.AddForChar($.triad_head2);
  $.triad_head2.AddArmor(100);
  $.triad_head2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_head2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.triad_head2.SetStayInSamePlace(1 /* TRUE */);
  $.triad_head3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 968.3, -1136.8, 15.0);
  $.triad_head3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
  $.triad_head3.SetHeading(38.0);
  $.blip3_tm4 = Blip.AddForChar($.triad_head3);
  $.triad_head3.AddArmor(100);
  $.triad_head3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.triad_head3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.triad_head3.SetStayInSamePlace(1 /* TRUE */);
  $.char_already_dead1 = 0;
  $.char_already_dead2 = 0;
  $.char_already_dead3 = 0;
  Audio.LoadMissionAudio(T4_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  while (!($.warlords_dead == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.triad_head1) && $.char_already_dead1 == 0) {
      $.blip1_tm4.Remove();
      $.warlords_dead++;
      $.char_already_dead1 = 1;
    }
    if (Char.IsDead($.triad_head2) && $.char_already_dead2 == 0) {
      $.blip2_tm4.Remove();
      $.warlords_dead++;
      $.char_already_dead2 = 1;
    }
    if (Char.IsDead($.triad_head3) && $.char_already_dead3 == 0) {
      $.blip3_tm4.Remove();
      $.warlords_dead++;
      $.char_already_dead3 = 1;
    }
    if ($.player.IsInZone("PORT_W") && $.has_player_been_at_fish_before == 1 && $.clear_triads_threats == 0) {
      if (!(Char.IsDead($.fish_triad1))) {
        $.fish_triad1.ClearThreatSearch();
      }
      if (!(Char.IsDead($.fish_triad2))) {
        $.fish_triad2.ClearThreatSearch();
      }
      if (!(Char.IsDead($.fish_triad3))) {
        $.fish_triad3.ClearThreatSearch();
      }
      if (!(Char.IsDead($.fish_triad4))) {
        $.fish_triad4.ClearThreatSearch();
      }
      if (!(Char.IsDead($.fish_triad5))) {
        $.fish_triad5.ClearThreatSearch();
      }
      if (!(Char.IsDead($.fish_triad6))) {
        $.fish_triad6.ClearThreatSearch();
      }
      Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */);
      $.clear_triads_threats = 1;
    }
    if ($.player.IsInZone("FISHFAC")) {
      if ($.triads_spot_you == 0) {
        if (!($.player.IsInAnyCar())) {
          if (!(Char.IsDead($.fish_triad1))) {
            $.fish_triad1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad2))) {
            $.fish_triad2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad3))) {
            $.fish_triad3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad4))) {
            $.fish_triad4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad5))) {
            $.fish_triad5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad6))) {
            $.fish_triad6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          $.triads_spot_you = 1;
        }
        if (Char.IsDead($.fish_triad1) || Char.IsDead($.fish_triad2) || Char.IsDead($.fish_triad3) || Char.IsDead($.fish_triad4) || Char.IsDead($.fish_triad5) || Char.IsDead($.fish_triad6)) {
          if (!(Char.IsDead($.fish_triad1))) {
            $.fish_triad1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad2))) {
            $.fish_triad2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad3))) {
            $.fish_triad3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad4))) {
            $.fish_triad4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad5))) {
            $.fish_triad5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          if (!(Char.IsDead($.fish_triad6))) {
            $.fish_triad6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          }
          $.triads_spot_you = 1;
        }
      }
    }
    if ($.player.IsInZone("CHINA") && $.audio_played_tm4 == 0) {
      Audio.PlayMissionAudio();
      $.audio_played_tm4 = 1;
    }
    if ($.grunts1_been_created_before == 0) {
      if (!(Char.IsDead($.triad_head1))) {
        if ($.player.LocateAnyMeansChar2D($.triad_head1, 80.0, 80.0, 0 /* FALSE */)) {
          $.triad_grunt1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 907.4, -542.4, 14.4);
          $.triad_grunt1.SetHeading(180.0);
          $.triad_grunt1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt1.FollowChar($.triad_head1);
          $.triad_grunt1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_grunt1B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 907.4, -542.4, 14.4);
          $.triad_grunt1B.SetHeading(160.0);
          $.triad_grunt1B.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt1B.FollowChar($.triad_head1);
          $.triad_grunt1B.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_head1.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.grunts1_been_created_before = 1;
        }
      }
    }
    if (!(Char.IsDead($.triad_head1))) {
      if ($.player.LocateAnyMeansChar2D($.triad_head1, 30.0, 30.0, 0 /* FALSE */) && $.triad1_can_leg_it == 0) {
        $.triad_head1.SetStayInSamePlace(0 /* FALSE */);
        $.triad1_can_leg_it = 1;
      }
    }
    if ($.grunts2_been_created_before == 0) {
      if (!(Char.IsDead($.triad_head2))) {
        if ($.player.LocateAnyMeansChar2D($.triad_head2, 80.0, 80.0, 0 /* FALSE */)) {
          $.triad_grunt2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 965.6, -680.2, 14.3);
          $.triad_grunt2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt2.FollowChar($.triad_head2);
          $.triad_grunt2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_grunt2B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 965.5, -683.0, 14.3);
          $.triad_grunt2B.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt2B.FollowChar($.triad_head2);
          $.triad_grunt2B.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_head2.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.grunts2_been_created_before = 1;
        }
      }
    }
    if (!(Char.IsDead($.triad_head2))) {
      if ($.player.LocateAnyMeansChar2D($.triad_head2, 30.0, 30.0, 0 /* FALSE */) && $.triad2_can_leg_it == 0) {
        $.triad_head2.SetStayInSamePlace(0 /* FALSE */);
        $.triad2_can_leg_it = 1;
      }
    }
    if ($.grunts3_been_created_before == 0) {
      if (!(Char.IsDead($.triad_head3))) {
        if ($.player.LocateAnyMeansChar2D($.triad_head3, 80.0, 80.0, 0 /* FALSE */)) {
          $.triad_grunt3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 967.1, -1134.0, 15.0);
          $.triad_grunt3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt3.FollowChar($.triad_head3);
          $.triad_grunt3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_head3.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.triad_grunt3B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 966.1, -1129.0, 15.0);
          $.triad_grunt3B.GiveWeapon(3 /* WEAPONTYPE_UZI */, 80);
          $.triad_grunt3B.FollowChar($.triad_head3);
          $.triad_grunt3B.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.triad_head3.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.grunts3_been_created_before = 1;
        }
      }
    }
    if ($.grunts1_been_created_before == 1 && $.pay_back_for_traids1 == 0) {
      if (Char.IsDead($.triad_grunt1) || Char.IsDead($.triad_grunt1B) || Char.IsDead($.triad_head1)) {
        if (!(Char.IsDead($.triad_grunt1))) {
          $.triad_grunt1.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_grunt1B))) {
          $.triad_grunt1B.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_head1))) {
          $.triad_head1.SetObjKillPlayerOnFoot($.player);
        }
        $.pay_back_for_traids1 = 1;
      }
    }
    if ($.grunts2_been_created_before == 1 && $.pay_back_for_traids2 == 0) {
      if (Char.IsDead($.triad_grunt2) || Char.IsDead($.triad_grunt2B) || Char.IsDead($.triad_head2)) {
        if (!(Char.IsDead($.triad_grunt2))) {
          $.triad_grunt2.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_grunt2B))) {
          $.triad_grunt2B.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_head2))) {
          $.triad_head2.SetObjKillPlayerOnFoot($.player);
        }
        $.pay_back_for_traids2 = 1;
      }
    }
    if ($.grunts3_been_created_before == 1 && $.pay_back_for_traids3 == 0) {
      if (Char.IsDead($.triad_grunt3) || Char.IsDead($.triad_grunt3B) || Char.IsDead($.triad_head3)) {
        if (!(Char.IsDead($.triad_grunt3))) {
          $.triad_grunt3.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_grunt3B))) {
          $.triad_grunt3B.SetObjKillPlayerOnFoot($.player);
        }
        if (!(Char.IsDead($.triad_head3))) {
          $.triad_head3.SetObjKillPlayerOnFoot($.player);
        }
        $.pay_back_for_traids3 = 1;
      }
    }
    if (!(Char.IsDead($.triad_head3))) {
      if ($.player.LocateAnyMeansChar2D($.triad_head3, 30.0, 30.0, 0 /* FALSE */) && $.triad3_can_leg_it == 0) {
        $.triad_head3.SetStayInSamePlace(0 /* FALSE */);
        $.triad3_can_leg_it = 1;
      }
    }
    if (!(Char.IsDead($.mafia_goon1))) {
      if (!($.player.LocateAnyMeansChar2D($.mafia_goon1, 120.0, 120.0, 0 /* FALSE */))) {
        $.mafia_goon1.Delete();
      }
      else {
        if (!($.mafia_goon1.IsInPlayersGroup($.player))) {
          $.mafia_goon1.FollowPlayer($.player);
        }
      }
    }
    if (!(Char.IsDead($.mafia_goon2))) {
      if (!($.player.LocateAnyMeansChar2D($.mafia_goon2, 120.0, 120.0, 0 /* FALSE */))) {
        $.mafia_goon2.Delete();
      }
      else {
        if (!($.mafia_goon2.IsInPlayersGroup($.player))) {
          $.mafia_goon2.FollowPlayer($.player);
        }
      }
    }
    if ($.player.IsInArea3D(1025.2, -1108.4, 12.0, 1009.2, -1098.4, 16.0, 0 /* FALSE */)) {
      if (!($.player.IsInModel(125 /* CAR_BELLYUP */)) && !($.player.IsInModel(91 /* CAR_TRASHMASTER */))) {
        if ($.player.IsInArea3D(1015.6, -1100.5, 12.0, 1009.2, -1108.1, 16.0, 0 /* FALSE */) && $.been_in_fish_factory == 0) {
          $.been_in_fish_factory = 1;
        }
        if ($.been_in_fish_factory == 0) {
          Text.PrintNow("TM4_GAT", 5000, 1);
        }
      }
    }
  }
  }
  // SCM GOTO → mission_toni4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_toni4_passed"); // fallback: would break linear control flow
}

async function mission_toni4_failed() {
  Zone.SetPedInfo("CHINA", 1 /* DAY */, 20, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CHINA", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  return;
}

async function mission_toni4_passed() {
  $.flag_toni_mission4_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 30000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(30000);
  Stat.RegisterMissionPassed(TM4);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT toni_mission5_loop
  Zone.SetPedInfo("CHINA", 1 /* DAY */, 20, 0, 200, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CHINA", 0 /* NIGHT */, 10, 0, 300, 0, 0, 0, 0, 0, 10);
  return;
}

async function mission_cleanup_toni4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_toni_mission = 0;
  $.blip1_tm4.Remove();
  $.blip2_tm4.Remove();
  $.blip3_tm4.Remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`);
  Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */);
  Zone.SetPedInfo("LITTLEI", 1 /* DAY */, 17, 300, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("LITTLEI", 0 /* NIGHT */, 11, 400, 0, 0, 0, 0, 0, 0, 10);
  Mission.Finish();
  return;
}

export async function toni4() {
  // MissionBoundary
  // SCM GOSUB mission_start_toni4
  await mission_start_toni4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_toni4_failed
    await mission_toni4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_toni4
  await mission_cleanup_toni4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip1_tm4 blip2_tm4 blip3_tm4 triad1_can_leg_it triad2_can_leg_it triad3_can_leg_it
  // VAR_INT triad_head1 triad_head2 triad_head3 warlords_dead
  // VAR_INT triad_grunt1 triad_grunt1B triad_grunt2 triad_grunt2B triad_grunt3 triad_grunt3B
  // VAR_INT grunts1_been_created_before grunts2_been_created_before grunts3_been_created_before
  // VAR_INT mafia_goon1 mafia_goon2 been_in_fish_factory clear_triads_threats
  // VAR_INT grabbed_peds_before Fishbastards audio_played_tm4
  // VAR_INT char_already_dead1 char_already_dead2 char_already_dead3
  // VAR_INT pay_back_for_traids1 pay_back_for_traids2 pay_back_for_traids3
}
