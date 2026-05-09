// Generated from Main/Suburban/hood5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood5() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_baddie1_dead_hm5 = 0;
  $.flag_baddie2_dead_hm5 = 0;
  $.flag_baddie3_dead_hm5 = 0;
  $.flag_baddie4_dead_hm5 = 0;
  $.flag_baddie5_dead_hm5 = 0;
  $.flag_baddie6_dead_hm5 = 0;
  $.flag_baddie7_dead_hm5 = 0;
  $.flag_baddie8_dead_hm5 = 0;
  $.flag_baddie9_dead_hm5 = 0;
  $.counter_no_of_baddies_dead_hm5 = 0;
  $.flag_players_buddy_normal = 0;
  $.flag_goodie_hm5_dead_hm5 = 0;
  $.flag_goodie_message_hm5 = 0;
  $.flag_bat_created_hm5 = 0;
  $.flag_bat_collected_hm5 = 0;
  $.flag_player_in_area_hm5 = 0;
  $.flag_baddie1_mad_hm5 = 0;
  $.flag_baddie2_mad_hm5 = 0;
  $.flag_baddie3_mad_hm5 = 0;
  $.flag_baddie4_mad_hm5 = 0;
  $.flag_baddie5_mad_hm5 = 0;
  $.flag_baddie6_mad_hm5 = 0;
  $.flag_baddie7_mad_hm5 = 0;
  $.flag_baddie8_mad_hm5 = 0;
  $.flag_baddie9_mad_hm5 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  Cutscene.Load(hd_ph5);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();
  // Displays cutscene text
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2190) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_A", 10000, 1); //"Them Nines..."
  while ($.cs_time < 4403) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_B", 10000, 1); //"But they still..."
  while ($.cs_time < 6287) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_C", 10000, 1); //"They agreed to..."
  while ($.cs_time < 7888) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_D", 10000, 1); //"A gang of them..."
  while ($.cs_time < 9678) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_E", 10000, 1); //"Two of yaw"
  while ($.cs_time < 11491) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_F", 10000, 1); //"I'd join you..."
  while ($.cs_time < 12974) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_G", 10000, 1); //"I ain't due my..."
  while ($.cs_time < 14952) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_H", 10000, 1); //"Y'kmow what..."
  while ($.cs_time < 16068) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_I", 10000, 1); //"Go and meet..."
  while ($.cs_time < 17531) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM5_J", 10000, 1); //"He'll show..."
  while ($.cs_time < 19234) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM5_J");
  while ($.cs_time < 20166) {
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
  //SWITCH_STREAMING ON
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1
  World.SetPedDensityMultiplier(1.0);
  // *****************************************END OF CUTSCENE**********************************
  Streaming.RequestModel(ped`GANG_HOOD_A`);
  Streaming.RequestModel(ped`GANG_HOOD_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_HOOD_A`)) || !(Streaming.HasModelLoaded(ped`GANG_HOOD_B`))) {
    await asyncWait(0);
  }
  Path.SwitchRoadsOff(-414.997, 77.799, 2.5, -267.467, 103.23, 10.0);
  Path.SwitchRoadsOff(-286.387, 77.799, 2.5, -215.814, 272.287, 10.0);
  $.bat_hm5 = Pickup.Create(153 /* WEAPON_BAT */, 3 /* pickup_once */, -637.0, -28.5, -100.0);
  $.flag_bat_created_hm5 = 1;
  // Creates players helper ped
  $.goodie_hm5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`GANG_HOOD_A`, -640.9, -28.8, 18.8);
  $.goodie_hm5.setHeading(180.0);
  $.goodie_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_goodie_hm5 = Blip.AddForChar($.goodie_hm5);
  $.goodie_hm5.clearThreatSearch();
  while (!($.player.locateAnyMeansChar2D($.goodie_hm5, 8.0, 8.0, false /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  $.goodie_hm5.turnToFacePlayer($.player);
  $.goodie_hm5.followPlayer($.player);
  $.radar_blip_goodie_hm5.remove();
  Audio.LoadMissionAudio(H5_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if (!($.goodie_hm5.isInPlayersGroup($.player)) && $.flag_goodie_message_hm5 == 0) {
      Text.PrintNow("HEY9", 5000, 1); //"You have not got the information from the contact go back and get it."
      $.radar_blip_goodie_hm5 = Blip.AddForChar($.goodie_hm5);
      $.flag_goodie_message_hm5 = 1;
    }
    if ($.player.locateAnyMeansChar2D($.goodie_hm5, 8.0, 8.0, false /* FALSE */) && $.flag_goodie_message_hm5 == 1) {
      $.goodie_hm5.followPlayer($.player);
      $.radar_blip_goodie_hm5.remove();
      $.flag_goodie_message_hm5 = 0;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  $.radar_blip_goodie_hm5.remove();
  Audio.PlayMissionAudio();
  Text.PrintNow("HM5_1", 7000, 1); //"Yo, Ice setyou was comin'. There are rules, bats only, no guns, no cars
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  Text.ClearThisPrint("HM5_1");
  Audio.LoadMissionAudio(H5_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  Audio.PlayMissionAudio();
  Text.Print("HM5_5", 7000, 1); //"This is a battle for respect, you cool?"  //Change to print now when audio is there
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  Text.ClearThisPrint("HM5_5");
  Audio.LoadMissionAudio(H5_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  Audio.PlayMissionAudio();
  Text.Print("HM5_6", 7000, 1); //"Lets go crack some blue skulls ( should be purple )"  //Change to print now when audio is there
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      Text.PrintNow("HM5_4", 5000, 1); //"Your contact is dead!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  Text.ClearThisPrint("HM5_6");
  // Creates baddie1
  $.baddie1_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -237.0, 315.5, -100.0);
  $.baddie1_hm5.setHealth(250);
  $.baddie1_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie1_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie1_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped1_hm5 = Blip.AddForChar($.baddie1_hm5);
  $.baddie1_hm5.setHeedThreats(true /* TRUE */);
  $.baddie1_hm5.turnToFaceCoord(-232.0, 253.0, -100.0);
  $.baddie1_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie2
  $.baddie2_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -234.1, 315.5, -100.0);
  $.baddie2_hm5.setHealth(250);
  $.baddie2_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie2_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie2_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped2_hm5 = Blip.AddForChar($.baddie2_hm5);
  $.baddie2_hm5.setHeedThreats(true /* TRUE */);
  $.baddie2_hm5.turnToFaceCoord(-232.0, 253.0, -100.0);
  $.baddie2_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie3
  $.baddie3_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -229.3, 315.5, -100.0);
  $.baddie3_hm5.setHealth(250);
  $.baddie3_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie3_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie3_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped3_hm5 = Blip.AddForChar($.baddie3_hm5);
  $.baddie3_hm5.setHeedThreats(true /* TRUE */);
  $.baddie3_hm5.turnToFaceCoord(-232.0, 253.0, -100.0);
  $.baddie3_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie4
  $.baddie4_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -222.5, 298.4, -100.0); //281.5
  $.baddie4_hm5.setHealth(250);
  $.baddie4_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie4_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie4_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped4_hm5 = Blip.AddForChar($.baddie4_hm5);
  $.baddie4_hm5.setHeedThreats(true /* TRUE */);
  $.baddie4_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie4_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie5
  $.baddie5_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -222.5, 287.6, -100.0);
  $.baddie5_hm5.setHealth(250);
  $.baddie5_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie5_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie5_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped5_hm5 = Blip.AddForChar($.baddie5_hm5);
  $.baddie5_hm5.setHeedThreats(true /* TRUE */);
  $.baddie5_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie5_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie6
  $.baddie6_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -222.5, 275.9, -100.0);
  $.baddie6_hm5.setHealth(250);
  $.baddie6_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie6_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie6_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped6_hm5 = Blip.AddForChar($.baddie6_hm5);
  $.baddie6_hm5.setHeedThreats(true /* TRUE */);
  $.baddie6_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie6_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie7
  $.baddie7_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -239.8, 287.6, -100.0);
  $.baddie7_hm5.setHealth(250);
  $.baddie7_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie7_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie7_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped7_hm5 = Blip.AddForChar($.baddie7_hm5);
  $.baddie7_hm5.setHeedThreats(true /* TRUE */);
  $.baddie7_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie7_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie8
  $.baddie8_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -239.8, 298.4, -100.0);
  $.baddie8_hm5.setHealth(250);
  $.baddie8_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie8_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie8_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped8_hm5 = Blip.AddForChar($.baddie8_hm5);
  $.baddie8_hm5.setHeedThreats(true /* TRUE */);
  $.baddie8_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie8_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // Creates baddie9
  $.baddie9_hm5 = Char.Create(13 /* PEDTYPE_GANG_HOOD */, ped`GANG_HOOD_B`, -239.8, 275.9, -100.0);
  $.baddie9_hm5.setHealth(250);
  $.baddie9_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie9_hm5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.baddie9_hm5.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1);
  $.radar_blip_ped9_hm5 = Blip.AddForChar($.baddie9_hm5);
  $.baddie9_hm5.setHeedThreats(true /* TRUE */);
  $.baddie9_hm5.turnToFaceCoord(-226.1, 280.8, -100.0);
  $.baddie9_hm5.setOnlyDamagedByPlayer(true /* TRUE */);
  // waiting for all the guys to be dead
  while (!($.counter_no_of_baddies_dead_hm5 == 9)) {
    await asyncWait(0);
    if (Char.IsDead($.goodie_hm5)) {
      $.flag_goodie_hm5_dead_hm5 = 1;
    }
    if ($.player.isInArea3D(-247.3, 333.9, 2.0, -209.5, 250.2, 15.0, false /* FALSE */)) {
      $.flag_player_in_area_hm5 = 1;
      if ($.flag_goodie_hm5_dead_hm5 == 0) {
        if (!($.goodie_hm5.isInAnyCar())) {
          if ($.flag_players_buddy_normal == 0) {
            $.goodie_hm5.leaveGroup();
            $.goodie_hm5.setThreatSearch(13 /* THREAT_GANG_HOOD */);
            $.goodie_hm5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.flag_players_buddy_normal = 1;
          }
        }
      }
    }
    if ($.flag_player_in_area_hm5 == 1) {
      if ($.flag_baddie1_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie1_hm5))) {
          $.baddie1_hm5.turnToFacePlayer($.player);
          $.baddie1_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie1_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie2_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie2_hm5))) {
          $.baddie2_hm5.turnToFacePlayer($.player);
          $.baddie2_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie2_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie3_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie3_hm5))) {
          $.baddie3_hm5.turnToFacePlayer($.player);
          $.baddie3_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie3_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie4_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie4_hm5))) {
          $.baddie4_hm5.turnToFacePlayer($.player);
          $.baddie4_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie4_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie5_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie5_hm5))) {
          $.baddie5_hm5.turnToFacePlayer($.player);
          $.baddie5_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie5_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie6_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie6_hm5))) {
          $.baddie6_hm5.turnToFacePlayer($.player);
          $.baddie6_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie6_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie7_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie7_hm5))) {
          $.baddie7_hm5.turnToFacePlayer($.player);
          $.baddie7_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie7_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie8_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie8_hm5))) {
          $.baddie8_hm5.turnToFacePlayer($.player);
          $.baddie8_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie8_mad_hm5 = 1;
        }
      }
      if ($.flag_baddie9_mad_hm5 == 0) {
        if (!(Char.IsDead($.baddie9_hm5))) {
          $.baddie9_hm5.turnToFacePlayer($.player);
          $.baddie9_hm5.setObjKillPlayerOnFoot($.player);
          $.flag_baddie9_mad_hm5 = 1;
        }
      }
    }
    // Checks for baddie1
    if ($.flag_baddie1_dead_hm5 == 0) {
      if (Char.IsDead($.baddie1_hm5)) {
        if ($.baddie1_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped1_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie1_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie2
    if ($.flag_baddie2_dead_hm5 == 0) {
      if (Char.IsDead($.baddie2_hm5)) {
        if ($.baddie2_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped2_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie2_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie3
    if ($.flag_baddie3_dead_hm5 == 0) {
      if (Char.IsDead($.baddie3_hm5)) {
        if ($.baddie3_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped3_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie3_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie4
    if ($.flag_baddie4_dead_hm5 == 0) {
      if (Char.IsDead($.baddie4_hm5)) {
        if ($.baddie4_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped4_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie4_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie5
    if ($.flag_baddie5_dead_hm5 == 0) {
      if (Char.IsDead($.baddie5_hm5)) {
        if ($.baddie5_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped5_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie5_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie6
    if ($.flag_baddie6_dead_hm5 == 0) {
      if (Char.IsDead($.baddie6_hm5)) {
        if ($.baddie6_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped6_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie6_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie7
    if ($.flag_baddie7_dead_hm5 == 0) {
      if (Char.IsDead($.baddie7_hm5)) {
        if ($.baddie7_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped7_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie7_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie8
    if ($.flag_baddie8_dead_hm5 == 0) {
      if (Char.IsDead($.baddie8_hm5)) {
        if ($.baddie8_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped8_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie8_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    // Checks for baddie9
    if ($.flag_baddie9_dead_hm5 == 0) {
      if (Char.IsDead($.baddie9_hm5)) {
        if ($.baddie9_hm5.hasBeenDamagedByWeapon(1 /* WEAPONTYPE_BASEBALLBAT */)) {
          $.radar_blip_ped9_hm5.remove();
          ++$.counter_no_of_baddies_dead_hm5;
          $.flag_baddie9_dead_hm5 = 1;
        }
        else {
          Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
          // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
        }
      }
    }
    if ($.player.isShootingInArea(-327.0, 72.0, -134.0, 350.0, false /* FALSE */)) {
      if ($.flag_baddie1_dead_hm5 == 0) {
        $.baddie1_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie2_dead_hm5 == 0) {
        $.baddie2_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie3_dead_hm5 == 0) {
        $.baddie3_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie4_dead_hm5 == 0) {
        $.baddie4_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie5_dead_hm5 == 0) {
        $.baddie5_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie6_dead_hm5 == 0) {
        $.baddie6_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie7_dead_hm5 == 0) {
        $.baddie7_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie8_dead_hm5 == 0) {
        $.baddie8_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      if ($.flag_baddie9_dead_hm5 == 0) {
        $.baddie9_hm5.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
      }
      Text.PrintNow("HM5_3", 7000, 1); //You were told to use a baseball bat only!"
      // SCM GOTO → mission_hood5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood5_failed"); // fallback: would break linear control flow
    }
    if ($.flag_bat_created_hm5 == 1) {
      if ($.flag_bat_collected_hm5 == 0) {
        if ($.bat_hm5.hasBeenCollected()) {
          $.flag_bat_collected_hm5 = 1;
        }
      }
    }
  }
  }
  // SCM GOTO → mission_hood5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_hood5_passed"); // fallback: would break linear control flow
  // Mission hood5 failed
}

async function mission_hood5_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
  if ($.player.hasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.isDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  return;
  // mission hood5 passed
}

async function mission_hood5_passed() {
  $.flag_hood_mission5_passed = 1;
  Stat.RegisterMissionPassed("HM_5");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(10000);
  $.player.clearWantedLevel();
  $.hood_contact_blip.remove();
  Gang.SetPedModelPreference(6 /* GANG_HOOD */, 0);
  // START_NEW_SCRIPT hood_mission3_loop
  return;
  // mission cleanup
}

async function mission_cleanup_hood5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_HOOD_A`);
  $.radar_blip_goodie_hm5.remove();
  $.radar_blip_ped1_hm5.remove();
  $.radar_blip_ped2_hm5.remove();
  $.radar_blip_ped3_hm5.remove();
  $.radar_blip_ped4_hm5.remove();
  $.radar_blip_ped5_hm5.remove();
  $.radar_blip_ped6_hm5.remove();
  $.radar_blip_ped7_hm5.remove();
  $.radar_blip_ped8_hm5.remove();
  $.radar_blip_ped9_hm5.remove();
  if ($.flag_bat_created_hm5 == 1) {
    if ($.flag_bat_collected_hm5 == 0) {
      $.bat_hm5.remove();
    }
  }
  if ($.flag_baddie1_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie1_hm5))) {
      $.baddie1_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie2_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie2_hm5))) {
      $.baddie2_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie3_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie3_hm5))) {
      $.baddie3_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie4_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie4_hm5))) {
      $.baddie4_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie5_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie5_hm5))) {
      $.baddie5_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie6_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie6_hm5))) {
      $.baddie6_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie7_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie7_hm5))) {
      $.baddie7_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie8_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie8_hm5))) {
      $.baddie8_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  if ($.flag_baddie9_dead_hm5 == 0) {
    if (!(Char.IsDead($.baddie9_hm5))) {
      $.baddie9_hm5.setOnlyDamagedByPlayer(false /* FALSE */);
    }
  }
  Mission.Finish();
  return;
}

export async function hood5() {
  // MissionBoundary
  // *******************************************************************************************
  // *************************************Hood Mission 5****************************************
  // ***********************************Baseball Bat Fight**************************************
  // ScriptName
  // Mission start stuff
  // SCM GOSUB mission_start_hood5
  await mission_start_hood5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_hood5_failed
    await mission_hood5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_hood5
  await mission_cleanup_hood5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // Variables for mission
  // VAR_INT baddie1_hm5
  // VAR_INT baddie2_hm5
  // VAR_INT baddie3_hm5
  // VAR_INT baddie4_hm5
  // VAR_INT baddie5_hm5
  // VAR_INT baddie6_hm5
  // VAR_INT baddie7_hm5
  // VAR_INT baddie8_hm5
  // VAR_INT baddie9_hm5
  // VAR_INT radar_blip_ped1_hm5
  // VAR_INT radar_blip_ped2_hm5
  // VAR_INT radar_blip_ped3_hm5
  // VAR_INT radar_blip_ped4_hm5
  // VAR_INT radar_blip_ped5_hm5
  // VAR_INT radar_blip_ped6_hm5
  // VAR_INT radar_blip_ped7_hm5
  // VAR_INT radar_blip_ped8_hm5
  // VAR_INT radar_blip_ped9_hm5
  // VAR_INT flag_baddie1_dead_hm5
  // VAR_INT flag_baddie2_dead_hm5
  // VAR_INT flag_baddie3_dead_hm5
  // VAR_INT flag_baddie4_dead_hm5
  // VAR_INT flag_baddie5_dead_hm5
  // VAR_INT flag_baddie6_dead_hm5
  // VAR_INT flag_baddie7_dead_hm5
  // VAR_INT flag_baddie8_dead_hm5
  // VAR_INT flag_baddie9_dead_hm5
  // VAR_INT counter_no_of_baddies_dead_hm5
  // VAR_INT radar_blip_goodie_hm5
  // VAR_INT goodie_hm5
  // VAR_INT bat_hm5
  // VAR_INT flag_players_buddy_normal
  // VAR_INT flag_goodie_hm5_dead_hm5
  // VAR_INT car_hm5
  // VAR_INT flag_goodie_message_hm5
  // VAR_INT flag_bat_created_hm5
  // VAR_INT flag_bat_collected_hm5
  // VAR_INT flag_player_in_area_hm5
  // VAR_INT flag_baddie1_mad_hm5
  // VAR_INT flag_baddie2_mad_hm5
  // VAR_INT flag_baddie3_mad_hm5
  // VAR_INT flag_baddie4_mad_hm5
  // VAR_INT flag_baddie5_mad_hm5
  // VAR_INT flag_baddie6_mad_hm5
  // VAR_INT flag_baddie7_mad_hm5
  // VAR_INT flag_baddie8_mad_hm5
  // VAR_INT flag_baddie9_mad_hm5
  // ***************************************Mission Start*************************************
}
