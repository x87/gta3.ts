// Generated from Main/Industrial/genstuf.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_genstuf() {
  {
  // START_NEW_SCRIPT ind_ammu
  // START_NEW_SCRIPT fish_factory_gen
  // START_NEW_SCRIPT tramp_tunnel
  // START_NEW_SCRIPT ind_sound
  // START_NEW_SCRIPT com_ammu
  // START_NEW_SCRIPT com_car_park
  // START_NEW_SCRIPT dog_sound
  // START_NEW_SCRIPT cobblers
  // MissionBoundary
  }
}

async function cobblers() {
  {
  await asyncWait(1000);
  if ($.flag_industrial_passed == 1) {
    $.info_pickup7a.Remove();
    $.info_pickup8.Remove();
    $.info_pickup9.Remove();
    $.info_pickup3.Remove();
    $.info_pickup4.Remove();
    $.info_pickup5.Remove();
    $.info_pickup1.Remove();
    return; // TERMINATE_THIS_SCRIPT
  }
  // SCM GOTO → cobblers (not lowered; manual jump required)
  throw new Error("unresolved GOTO cobblers"); // fallback: would break linear control flow
  }
}

async function check_info_pickup() {
  {
  // LVAR_INT pickup message_num
}

async function start_pickup_script() {
  while (!(pickup.HasBeenCollected())) {
    await asyncWait(500);
  }
  if (message_num == 1) {
    Text.PrintHelp("SPRAY");
  }
  if (message_num == 2) {
    Text.PrintHelp("BOMB");
  }
  if (message_num == 3) {
    Text.PrintHelp("AMMU");
  }
  if (message_num == 4) {
    Text.PrintHelp("SAVE2");
  }
  if (message_num == 5) {
    Text.PrintHelp("SAVE1");
  }
  if (message_num == 6) {
    Text.PrintHelp("CRUSH");
  }
  // SCM GOTO → start_pickup_script (not lowered; manual jump required)
  throw new Error("unresolved GOTO start_pickup_script"); // fallback: would break linear control flow
  }
}

async function check_info_pickup_2() {
  {
  // LVAR_INT pickup message_num
}

async function start_pickup_script_2() {
  while (!(pickup.HasBeenCollected())) {
    await asyncWait(500);
  }
  $.controlmode = Pad.GetControllerMode();
  if (message_num == 7) {
    Text.PrintHelp("BRIDGE1");
  }
  if (message_num == 8) {
    Text.PrintHelp("TUNNEL");
  }
  if (message_num == 9) {
    Text.PrintHelp("TUBE1");
  }
  if (message_num == 10) {
    if ($.controlmode == 0 || $.controlmode == 1 || $.controlmode == 3) {
      Text.PrintHelp("L_TRN_1");
    }
    if ($.controlmode == 2) {
      Text.PrintHelp("L_TRN_2");
    }
  }
  if (message_num == 11) {
    if ($.controlmode == 0 || $.controlmode == 1 || $.controlmode == 3) {
      Text.PrintHelp("S_TRN_1");
    }
    if ($.controlmode == 2) {
      Text.PrintHelp("S_TRN_2");
    }
  }
  // SCM GOTO → start_pickup_script_2 (not lowered; manual jump required)
  throw new Error("unresolved GOTO start_pickup_script_2"); // fallback: would break linear control flow
  }
}

async function ind_ammu() {
  {
  // ScriptName
}

async function ind_ammu_inner() {
  await asyncWait(70);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("LITTLEI")) {
      if ($.player.IsInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, 0 /* FALSE */)) {
        if ($.camera_ammu1 == 0) {
          $.player.SetControl(0 /* Off */);
          Camera.SetFadingColor(1, 1, 1);
          Streaming.Switch(0 /* OFF */);
          Streaming.LoadSpecialCharacter(4, sam);
          Audio.SetMusicDoesFade(0 /* FALSE */);
          Camera.DoFade(500, 0 /* FADE_OUT */);
          while (!(Streaming.HasSpecialCharacterLoaded(4))) {
            await asyncWait(0);
          }
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          Streaming.Switch(1 /* ON */);
          $.current_time = Clock.GetGameTimer();
          $.time_difference = $.current_time - $.time_since_murdering_shopkeeper1;
          if ($.time_difference > 60000) {
            $.ammu_shop_bloke1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL4`, 1070.81, -396.97, 14.2);
            $.ammu_shop_bloke1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.ammu_shop_bloke1.SetHeading(170.0);
            $.ammu_shop_bloke1.SetStayInSamePlace(1 /* TRUE */);
            $.ammu_shop_bloke1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
            if ($.player.IsPlaying()) {
              $.ammu_shop_bloke1.LookAtPlayerAlways($.player);
            }
          }
          Streaming.UnloadSpecialCharacter(4);
          Camera.SetFixedPosition(1071.95, -402.8, 17.0, 0.0, 0.0, 0.0);
          Camera.EnablePlayerControl();
          if ($.player.IsPlaying()) {
            Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
            World.ClearArea(1067.9, -397.3, 14.2, 1.0, 1 /* TRUE */);
            $.player.SetCoordinates(1067.9, -397.3, 14.2);
            $.player.SetHeading(200.0);
          }
          Camera.DoFade(500, 1 /* FADE_IN */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          if ($.player.IsPlaying()) {
            $.player.SetControl(1 /* on */);
          }
          if (!(Char.IsDead($.ammu_shop_bloke1))) {
            if ($.special_ammu_audio == 0) {
              if ($.ammu_sample == 0) {
                $.ammu_shop_bloke1.SetSay(103 /* SOUND_AMMUNATION_CHAT_1 */);
              }
              if ($.ammu_sample == 1) {
                $.ammu_shop_bloke1.SetSay(104 /* SOUND_AMMUNATION_CHAT_2 */);
              }
              if ($.ammu_sample == 2) {
                $.ammu_shop_bloke1.SetSay(105 /* SOUND_AMMUNATION_CHAT_3 */);
              }
            }
          }
          $.camera_ammu1 = 1;
        }
        else {
          if ($.player.IsShooting()) {
            if (!(Char.IsDead($.ammu_shop_bloke1))) {
              if ($.ammu_bloke_kill_player == 0) {
                if ($.player.IsPlaying()) {
                  $.ammu_shop_bloke1.SetObjKillPlayerOnFoot($.player);
                }
                $.ammu_bloke_kill_player = 1;
              }
            }
          }
        }
      }
      else {
        if ($.camera_ammu1 == 1) {
          $.player.SetControl(0 /* Off */);
          Camera.DoFade(500, 0 /* FADE_OUT */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
            $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer();
          }
          $.ammu_shop_bloke1.Delete();
          World.ClearArea(1063.3, -395.3, 14.2, 1.0, 1 /* TRUE */);
          if ($.player.IsPlaying()) {
            $.player.SetCoordinates(1063.3, -395.3, 14.2);
            $.player.SetHeading(90.0);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
          }
          Camera.DoFade(500, 1 /* FADE_IN */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          Audio.SetMusicDoesFade(1 /* TRUE */);
          if ($.player.IsPlaying()) {
            $.player.SetControl(1 /* on */);
          }
          $.ammu_sample++;
          if ($.ammu_sample > 2) {
            $.ammu_sample = 0;
          }
          $.ammu_bloke_kill_player = 0;
          $.camera_ammu1 = 0;
        }
      }
    }
    else {
      if ($.camera_ammu1 == 1) {
        if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
          $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer();
        }
        Camera.RestoreJumpcut();
        Camera.SetInFrontOfPlayer();
        $.ammu_shop_bloke1.Delete();
        Audio.SetMusicDoesFade(1 /* TRUE */);
        $.camera_ammu1 = 0;
      }
    }
  }
  // SCM GOTO → ind_ammu_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO ind_ammu_inner"); // fallback: would break linear control flow
  }
}

async function fish_factory_gen() {
  {
  // ScriptName
}

async function fish_factory_gen_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if ($.fish_factory_destroyed == 0) {
      if ($.player.IsInZone("PORT_W")) {
        if ($.has_player_been_at_fish_before == 0) {
          Streaming.RequestModel(ped`GANG_TRIAD_A`);
          Streaming.RequestModel(ped`GANG_TRIAD_B`);
          while (!(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_B`))) {
            await asyncWait(0);
          }
          $.fish_triad1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 997.0, -1112.0, -100.0);
          $.fish_triad1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 964.0, -1095.0, -100.0);
          $.fish_triad2.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 982.0, -1085.0, -100.0);
          $.fish_triad3.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 953.0, -1122.0, -100.0);
          $.fish_triad4.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad5 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 1008.0, -1126.0, -100.0);
          $.fish_triad5.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad6 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 974.0, -1142.0, -100.0);
          $.fish_triad6.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
          $.fish_triad6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.fish_triad1.WanderDir(0);
          $.fish_triad2.WanderDir(0);
          $.fish_triad3.WanderDir(0);
          $.fish_triad4.WanderDir(0);
          $.fish_triad5.WanderDir(0);
          $.fish_triad6.WanderDir(0);
          $.has_player_been_at_fish_before = 1;
        }
      }
      else {
        if ($.has_player_been_at_fish_before == 1) {
          $.fish_triad1.MarkAsNoLongerNeeded();
          $.fish_triad2.MarkAsNoLongerNeeded();
          $.fish_triad3.MarkAsNoLongerNeeded();
          $.fish_triad4.MarkAsNoLongerNeeded();
          $.fish_triad5.MarkAsNoLongerNeeded();
          $.fish_triad6.MarkAsNoLongerNeeded();
          if ($.flag_player_on_mission == 0) {
            Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
            Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`);
            $.has_player_been_at_fish_before = 0;
          }
        }
      }
    }
    else {
      if ($.has_player_been_at_fish_before == 1) {
        $.fish_triad1.MarkAsNoLongerNeeded();
        $.fish_triad2.MarkAsNoLongerNeeded();
        $.fish_triad3.MarkAsNoLongerNeeded();
        $.fish_triad4.MarkAsNoLongerNeeded();
        $.fish_triad5.MarkAsNoLongerNeeded();
        $.fish_triad6.MarkAsNoLongerNeeded();
        if ($.flag_player_on_mission == 0) {
          Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
          Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`);
          $.has_player_been_at_fish_before = 0;
        }
      }
    }
  }
  // SCM GOTO → fish_factory_gen_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO fish_factory_gen_inner"); // fallback: would break linear control flow
  }
}

async function tramp_tunnel() {
  {
  // ScriptName
}

async function tramp_tunnel_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("LITTLEI")) {
      if ($.player.IsInArea3D(1325.0, -512.0, 14.0, 1315.0, -165.8, 17.0, 0 /* FALSE */)) {
        if ($.has_player_been_in_tramp_tunnel_before == 0) {
          Streaming.RequestModel(ped`SCUM_MAN`);
          Streaming.RequestModel(ped`SCUM_WOMAN`);
          while (!(Streaming.HasModelLoaded(ped`SCUM_MAN`)) || !(Streaming.HasModelLoaded(ped`SCUM_WOMAN`))) {
            await asyncWait(0);
          }
          $.tramp1 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_MAN`, 1320.4, -370.0, 15.0);
          $.tramp1.GiveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1);
          $.tramp1.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
          $.tramp1.SetThreatSearch(20 /* THREAT_GUN */);
          $.tramp1.SetThreatSearch(25 /* THREAT_DEADPEDS */);
          $.tramp2 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_WOMAN`, 1317.0, -365.0, 15.0);
          $.tramp2.GiveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1);
          $.tramp2.SetHeading(290.0);
          $.tramp2.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
          $.tramp2.SetThreatSearch(20 /* THREAT_GUN */);
          $.tramp2.SetThreatSearch(25 /* THREAT_DEADPEDS */);
          $.tramp3 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_WOMAN`, 1322.4, -367.0, 15.0);
          $.tramp3.GiveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1);
          $.tramp3.SetHeading(57.0);
          $.tramp3.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
          $.tramp3.SetThreatSearch(20 /* THREAT_GUN */);
          $.tramp3.SetThreatSearch(25 /* THREAT_DEADPEDS */);
          $.tramp4 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_MAN`, 1320.0, -362.0, 15.0);
          $.tramp4.GiveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1);
          $.tramp4.SetHeading(180.0);
          $.tramp4.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
          $.tramp4.SetThreatSearch(20 /* THREAT_GUN */);
          $.tramp4.SetThreatSearch(25 /* THREAT_DEADPEDS */);
          Streaming.MarkModelAsNoLongerNeeded(ped`SCUM_MAN`);
          Streaming.MarkModelAsNoLongerNeeded(ped`SCUM_WOMAN`);
          $.tramps_been_created = 1;
          $.has_player_been_in_tramp_tunnel_before = 1;
        }
        else {
          if ($.tramps_been_created == 1) {
            if ($.tramp_is_dead == 0) {
              if (Char.IsDead($.tramp1) || Char.IsDead($.tramp2) || Char.IsDead($.tramp3) || Char.IsDead($.tramp4)) {
                timerA = 0;
                $.tramp_is_dead = 1;
              }
            }
          }
        }
      }
      else {
        if ($.has_player_been_in_tramp_tunnel_before == 1) {
          if ($.tramps_been_created == 1) {
            $.tramp1.MarkAsNoLongerNeeded();
            $.tramp2.MarkAsNoLongerNeeded();
            $.tramp3.MarkAsNoLongerNeeded();
            $.tramp4.MarkAsNoLongerNeeded();
            $.tramps_been_created = 0;
          }
          if ($.tramp_is_dead == 1) {
            if (timerA > 1440000) {
              $.tramp_is_dead = 0;
              $.has_player_been_in_tramp_tunnel_before = 0;
            }
          }
          else {
            $.has_player_been_in_tramp_tunnel_before = 0;
          }
        }
      }
    }
    else {
      if ($.has_player_been_in_tramp_tunnel_before == 1) {
        if ($.tramps_been_created == 1) {
          $.tramp1.MarkAsNoLongerNeeded();
          $.tramp2.MarkAsNoLongerNeeded();
          $.tramp3.MarkAsNoLongerNeeded();
          $.tramp4.MarkAsNoLongerNeeded();
          $.tramps_been_created = 0;
        }
        if ($.tramp_is_dead == 1) {
          if (timerA > 1440000) {
            $.tramp_is_dead = 0;
            $.has_player_been_in_tramp_tunnel_before = 0;
          }
        }
        else {
          $.has_player_been_in_tramp_tunnel_before = 0;
        }
      }
    }
  }
  // SCM GOTO → tramp_tunnel_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO tramp_tunnel_inner"); // fallback: would break linear control flow
  }
}

async function ind_sound() {
  {
  // ScriptName
}

async function ind_sound_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("REDLIGH")) {
      [$.hours, $.minutes] = Clock.GetTimeOfDay();
      if ($.hours >= 20 || $.hours <= 5) {
        if ($.flag_sounds_added_redlight == 0) {
          $.sound_loop8 = Sound.AddContinuous(891.9, -416.9, 16.1, 32 /* SOUND_STRIP_CLUB_LOOP_2_S */);
          $.sound_loop9 = Sound.AddContinuous(924.2, -464.3, 16.0, 30 /* SOUND_STRIP_CLUB_LOOP_1_S */);
          $.sound_loop10 = Sound.AddContinuous(901.1, -392.0, 15.0, 62 /* SOUND_PORN_CINEMA_1_S */);
          $.sound_loop11 = Sound.AddContinuous(901.2, -339.0, 10.0, 64 /* SOUND_PORN_CINEMA_2_S */);
          $.sound_loop12 = Sound.AddContinuous(960.1, -379.0, 15.0, 66 /* SOUND_PORN_CINEMA_3_S */);
          $.flag_sounds_added_redlight = 1;
        }
      }
      else {
        if ($.flag_sounds_added_redlight == 1) {
          $.sound_loop8.Remove();
          $.sound_loop9.Remove();
          $.sound_loop10.Remove();
          $.sound_loop11.Remove();
          $.sound_loop12.Remove();
          $.flag_sounds_added_redlight = 0;
        }
      }
    }
  }
  // SCM GOTO → ind_sound_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO ind_sound_inner"); // fallback: would break linear control flow
  }
}

async function dog_sound() {
  {
  // ScriptName
}

async function dog_sound_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("PORT_I")) {
      [$.hours, $.minutes] = Clock.GetTimeOfDay();
      if ($.hours >= 9 && $.hours <= 17) {
        if ($.flag_sounds_added_dog == 0) {
          $.sound_loop7 = Sound.AddContinuous(1210.9, -802.2, 15.0, 37 /* SOUND_SAWMILL_LOOP_L */);
          $.flag_sounds_added_dog = 1;
        }
      }
      else {
        if ($.flag_sounds_added_dog == 1) {
          $.sound_loop7.Remove();
          $.flag_sounds_added_dog = 0;
        }
      }
    }
  }
  // SCM GOTO → dog_sound_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO dog_sound_inner"); // fallback: would break linear control flow
  }
}

async function com_ammu() {
  {
  // ScriptName
}

async function com_ammu_inner() {
  await asyncWait(70);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("COM_EAS")) {
      if ($.player.IsInArea3D(353.3, -711.7, 24.0, 339.8, -722.4, 28.0, 0 /* FALSE */)) {
        if ($.camera_ammu2 == 0) {
          $.player.SetControl(0 /* Off */);
          Camera.SetFadingColor(1, 1, 1);
          Streaming.Switch(0 /* OFF */);
          Streaming.LoadSpecialCharacter(4, sam);
          Audio.SetMusicDoesFade(0 /* FALSE */);
          Camera.DoFade(500, 0 /* FADE_OUT */);
          while (!(Streaming.HasSpecialCharacterLoaded(4))) {
            await asyncWait(0);
          }
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          Streaming.Switch(1 /* ON */);
          $.current_time = Clock.GetGameTimer();
          $.time_difference = $.current_time - $.time_since_murdering_shopkeeper1;
          if ($.time_difference > 60000) {
            $.ammu_shop_bloke1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL4`, 350.2, -719.9, 25.4);
            $.ammu_shop_bloke1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.ammu_shop_bloke1.SetHeading(70.0);
            $.ammu_shop_bloke1.SetStayInSamePlace(1 /* TRUE */);
            $.ammu_shop_bloke1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
            if ($.player.IsPlaying()) {
              $.ammu_shop_bloke1.LookAtPlayerAlways($.player);
            }
          }
          Streaming.UnloadSpecialCharacter(4);
          Camera.SetFixedPosition(341.74, -720.676, 28.019, 0.0, 0.0, 0.0);
          Camera.EnablePlayerControl();
          if ($.player.IsPlaying()) {
            Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
            World.ClearArea(350.7, -713.1, 26.4, 1.0, 1 /* TRUE */);
            $.player.SetCoordinates(350.7, -713.1, 25.4);
            $.player.SetHeading(108.0);
          }
          Camera.DoFade(500, 1 /* FADE_IN */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          if ($.player.IsPlaying()) {
            $.player.SetControl(1 /* on */);
          }
          if (!(Char.IsDead($.ammu_shop_bloke1))) {
            if ($.special_ammu_audio == 0) {
              if ($.ammu_sample == 0) {
                $.ammu_shop_bloke1.SetSay(103 /* SOUND_AMMUNATION_CHAT_1 */);
              }
              if ($.ammu_sample == 1) {
                $.ammu_shop_bloke1.SetSay(104 /* SOUND_AMMUNATION_CHAT_2 */);
              }
              if ($.ammu_sample == 2) {
                $.ammu_shop_bloke1.SetSay(105 /* SOUND_AMMUNATION_CHAT_3 */);
              }
            }
          }
          $.camera_ammu2 = 1;
        }
        else {
          if ($.player.IsShooting()) {
            if (!(Char.IsDead($.ammu_shop_bloke1))) {
              if ($.ammu_bloke_kill_player == 0) {
                if ($.player.IsPlaying()) {
                  $.ammu_shop_bloke1.SetObjKillPlayerOnFoot($.player);
                }
                $.ammu_bloke_kill_player = 1;
              }
            }
          }
        }
      }
      else {
        if ($.camera_ammu2 == 1) {
          $.player.SetControl(0 /* Off */);
          Camera.DoFade(500, 0 /* FADE_OUT */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
            $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer();
          }
          $.ammu_shop_bloke1.Delete();
          World.ClearArea(352.0, -708.8, 25.4, 1.0, 1 /* TRUE */);
          if ($.player.IsPlaying()) {
            $.player.SetCoordinates(352.0, -708.8, 25.4);
            $.player.SetHeading(0.0);
            Camera.RestoreJumpcut();
            Camera.SetInFrontOfPlayer();
          }
          Camera.DoFade(500, 1 /* FADE_IN */);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          Audio.SetMusicDoesFade(1 /* TRUE */);
          if ($.player.IsPlaying()) {
            $.player.SetControl(1 /* on */);
          }
          $.ammu_sample++;
          if ($.ammu_sample > 2) {
            $.ammu_sample = 0;
          }
          $.ammu_bloke_kill_player = 0;
          $.camera_ammu2 = 0;
        }
      }
    }
    else {
      if ($.camera_ammu2 == 1) {
        if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
          $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer();
        }
        Camera.RestoreJumpcut();
        Camera.SetInFrontOfPlayer();
        $.ammu_shop_bloke1.Delete();
        Audio.SetMusicDoesFade(1 /* TRUE */);
        $.camera_ammu2 = 0;
      }
    }
  }
  // SCM GOTO → com_ammu_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO com_ammu_inner"); // fallback: would break linear control flow
  }
}

async function com_car_park() {
  {
  // ScriptName
}

async function com_car_park_inner() {
  await asyncWait(250);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.player.IsInZone("COM_EAS")) {
        if ($.player.IsInArea3D(266.83, -610.93, 25.0, 306.31, -479.92, 30.0, 0)) {
          World.SetCarDensityMultiplier(0.0);
          if ($.second_floor_cars_exist == 0) {
            // SCM GOSUB second_floor_of_cars
            await second_floor_of_cars();
            // fallback if label was not emitted as async function: no-op continues linearly
            $.second_floor_cars_exist = 1;
          }
          if ($.third_floor_cars_exist == 1) {
            World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84);
            $.third_floor_cars_exist = 0;
          }
          if ($.fourth_floor_cars_exist == 1) {
            World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0);
            $.fourth_floor_cars_exist = 0;
          }
          if ($.fifth_floor_cars_exist == 1) {
            World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0);
            $.fifth_floor_cars_exist = 0;
          }
          $.need_to_clear_area_flag = 1;
        }
        if ($.need_to_clear_area_flag > 0) {
          if ($.player.IsInArea3D(306.31, -610.93, 28.0, 346.81, -479.92, 32.42, 0)) {
            if ($.second_floor_cars_exist == 0) {
              // SCM GOSUB second_floor_of_cars
              await second_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.second_floor_cars_exist = 1;
            }
            if ($.third_floor_cars_exist == 0) {
              // SCM GOSUB third_floor_of_cars
              await third_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.third_floor_cars_exist = 1;
            }
            if ($.fourth_floor_cars_exist == 1) {
              World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0);
              $.fourth_floor_cars_exist = 0;
            }
            if ($.fifth_floor_cars_exist == 1) {
              World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0);
              $.fifth_floor_cars_exist = 0;
            }
            $.need_to_clear_area_flag = 2;
          }
        }
        if ($.need_to_clear_area_flag > 1) {
          if ($.player.IsInArea3D(266.83, -610.93, 30.4, 306.31, -479.92, 34.84, 0)) {
            if ($.second_floor_cars_exist == 0) {
              // SCM GOSUB second_floor_of_cars
              await second_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.second_floor_cars_exist = 1;
            }
            if ($.third_floor_cars_exist == 0) {
              // SCM GOSUB third_floor_of_cars
              await third_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.third_floor_cars_exist = 1;
            }
            if ($.fourth_floor_cars_exist == 0) {
              // SCM GOSUB fourth_floor_of_cars
              await fourth_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.fourth_floor_cars_exist = 1;
            }
            if ($.fifth_floor_cars_exist == 1) {
              World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0);
              $.fifth_floor_cars_exist = 0;
            }
            $.need_to_clear_area_flag = 3;
          }
        }
        if ($.need_to_clear_area_flag > 2) {
          if ($.player.IsInArea3D(306.31, -610.93, 32.84, 346.81, -479.92, 40.0, 0)) {
            if ($.second_floor_cars_exist == 1) {
              World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42);
              $.second_floor_cars_exist = 0;
            }
            if ($.third_floor_cars_exist == 0) {
              // SCM GOSUB third_floor_of_cars
              await third_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.third_floor_cars_exist = 1;
            }
            if ($.fourth_floor_cars_exist == 0) {
              // SCM GOSUB fourth_floor_of_cars
              await fourth_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.fourth_floor_cars_exist = 1;
            }
            if ($.fifth_floor_cars_exist == 0) {
              // SCM GOSUB fifth_floor_of_cars
              await fifth_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.fifth_floor_cars_exist = 1;
            }
            $.need_to_clear_area_flag = 4;
          }
        }
        if ($.need_to_clear_area_flag > 3) {
          if ($.player.IsInArea3D(266.83, -610.93, 35.23, 306.31, -479.92, 40.0, 0)) {
            if ($.second_floor_cars_exist == 1) {
              World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42);
              $.second_floor_cars_exist = 0;
            }
            if ($.third_floor_cars_exist == 1) {
              World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84);
              $.third_floor_cars_exist = 0;
            }
            if ($.fourth_floor_cars_exist == 0) {
              // SCM GOSUB fourth_floor_of_cars
              await fourth_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.fourth_floor_cars_exist = 1;
            }
            if ($.fifth_floor_cars_exist == 0) {
              // SCM GOSUB fifth_floor_of_cars
              await fifth_floor_of_cars();
              // fallback if label was not emitted as async function: no-op continues linearly
              $.fifth_floor_cars_exist = 1;
            }
            $.need_to_clear_area_flag = 5;
          }
        }
        if ($.need_to_clear_area_flag > 0) {
          if (!($.player.IsInArea3D(266.83, -610.93, 25.0, 346.81, -479.92, 40.0, 0))) {
            World.SetCarDensityMultiplier(1.0);
            World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42);
            World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84);
            World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0);
            World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0);
            $.second_floor_cars_exist = 0;
            $.third_floor_cars_exist = 0;
            $.fourth_floor_cars_exist = 0;
            $.fifth_floor_cars_exist = 0;
            $.need_to_clear_area_flag = 0;
          }
        }
      }
    }
    if ($.need_to_clear_area_flag > 0) {
      if (!($.player.IsInArea3D(266.83, -610.93, 25.0, 346.81, -479.92, 40.0, 0))) {
        World.SetCarDensityMultiplier(1.0);
        World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42);
        World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84);
        World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0);
        World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0);
        $.second_floor_cars_exist = 0;
        $.third_floor_cars_exist = 0;
        $.fourth_floor_cars_exist = 0;
        $.fifth_floor_cars_exist = 0;
        $.need_to_clear_area_flag = 0;
      }
    }
  }
  // SCM GOTO → com_car_park_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO com_car_park_inner"); // fallback: would break linear control flow
  }
}

async function second_floor_of_cars() {
  World.CreateRandomCarForCarPark(311.5469, -510.2604, 28.1100, 91.0159);
  World.CreateRandomCarForCarPark(323.5103, -526.5427, 28.1100, 270.3409);
  World.CreateRandomCarForCarPark(342.6624, -542.3556, 28.1100, 268.3777);
  World.CreateRandomCarForCarPark(311.4912, -554.4299, 28.1100, 91.0689);
  World.CreateRandomCarForCarPark(310.4685, -574.6492, 28.1100, 269.4606);
  World.CreateRandomCarForCarPark(342.7477, -590.4939, 28.1100, 268.4776);
  return;
}

async function third_floor_of_cars() {
  World.CreateRandomCarForCarPark(302.2802, -580.5526, 30.5114, 270.3723);
  World.CreateRandomCarForCarPark(289.5574, -564.5915, 30.5114, 88.0410);
  World.CreateRandomCarForCarPark(283.8795, -548.4308, 30.5114, 92.5479);
  World.CreateRandomCarForCarPark(270.6312, -528.4613, 30.5114, 88.6249);
  World.CreateRandomCarForCarPark(301.5385, -484.7673, 30.3863, 271.6668);
  return;
}

async function fourth_floor_of_cars() {
  World.CreateRandomCarForCarPark(311.0863, -512.6859, 32.8451, 91.1545);
  World.CreateRandomCarForCarPark(342.6769, -536.3028, 32.8375, 266.6709);
  World.CreateRandomCarForCarPark(311.4744, -564.1841, 32.8375, 267.5539);
  World.CreateRandomCarForCarPark(330.5274, -584.3387, 32.8375, 267.7581);
  World.CreateRandomCarForCarPark(342.9128, -600.6630, 32.8375, 87.2900);
  return;
}

async function fifth_floor_of_cars() {
  World.CreateRandomCarForCarPark(282.3572, -582.5417, 35.2389, 267.0331);
  World.CreateRandomCarForCarPark(302.7462, -574.5422, 35.2465, 271.0973);
  World.CreateRandomCarForCarPark(270.9382, -530.4745, 35.2389, 88.3213);
  World.CreateRandomCarForCarPark(303.2198, -510.6057, 35.2389, 88.6673);
  World.CreateRandomCarForCarPark(283.2274, -502.7662, 35.2389, 89.4868);
  World.CreateRandomCarForCarPark(302.4006, -485.5503, 35.2389, 266.0503);
  return;
}

export async function genstuf() {
  // MissionBoundary
  // VAR_INT tramp1 tramp2 tramp3 tramp4 tramp_is_dead tramps_been_created
  // VAR_INT tramp1_dead tramp2_dead tramp3_dead tramp4_dead
  // VAR_INT has_player_been_in_tramp_tunnel_before
  // VAR_INT flag_sounds_added_redlight
  // VAR_INT camera_ammu1 camera_ammu2 ammu_sample
  // VAR_INT has_player_been_at_fish_before
  // VAR_INT flag_need_wall_change_km1 ammu_bloke_kill_player
  // VAR_INT flag_failed_love1 special_ammu_audio
  // VAR_INT need_to_clear_area_flag
  // VAR_INT fish_triad1 fish_triad2 fish_triad3 fish_triad4 fish_triad5 fish_triad6
  // VAR_INT flag_sounds_added_dog
  // VAR_INT second_floor_cars_exist third_floor_cars_exist fourth_floor_cars_exist fifth_floor_cars_exist
  $.second_floor_cars_exist = 0;
  $.third_floor_cars_exist = 0;
  $.fourth_floor_cars_exist = 0;
  $.fifth_floor_cars_exist = 0;
  $.need_to_clear_area_flag = 0;
  $.has_player_been_at_fish_before = 0;
  $.has_player_been_in_tramp_tunnel_before = 0;
  $.flag_sounds_added_redlight = 0;
  $.tramps_been_created = 0;
  $.tramp_is_dead = 0;
  $.camera_ammu1 = 0;
  $.camera_ammu2 = 0;
  $.flag_sounds_added_dog = 0;
  $.flag_failed_love1 = 0;
  $.flag_need_wall_change_km1 = 0;
  $.flag_player_on_phil_mission = 0;
  $.tramp1 = -1;
  $.tramp2 = -1;
  $.tramp3 = -1;
  $.tramp4 = -1;
  $.tramp1_dead = 0;
  $.tramp2_dead = 0;
  $.tramp4_dead = 0;
  $.tramp3_dead = 0;
  $.ammu_sample = 0;
  $.special_ammu_audio = 0;
  $.ammu_bloke_kill_player = 0;
  // ScriptName
  // SET_DEATHARREST_STATE(0 /* OFF */);
}
