// Generated from Main/Suburban/ray6.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray6() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.rays_cutscene_flag = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.time_till_flight = 180000;
  $.flag_blip_on_ray = 0;
  $.airport_door_flag = 0;
  $.door1_closed = 0;
  $.door2_closed = 0;
  $.total_cia = 0;
  $.pickups_created_rm6 = 0;
  $.cia_1_flag = 0;
  $.cia_2_flag = 0;
  $.cia_3_flag = 0;
  $.cia_4_flag = 0;
  $.cia_5_flag = 0;
  $.cia_6_flag = 0;
  $.cia_7_flag = 0;
  $.cia_8_flag = 0;
  $.cia_9_flag = 0;
  $.cia_10_flag = 0;
  $.cia_11_flag = 0;
  $.cia_12_flag = 0;
  $.cia_13_flag = 0;
  $.cia_14_flag = 0;
  $.cia_15_flag = 0;
  $.cia_16_flag = 0;
  $.cia_17_flag = 0;
  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.RequestModel(toilet);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }
  World.ClearArea(39.0, -723.5, 22.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(39.0, -723.5, 22.0);
  $.player.SetHeading(90.0);
  Cutscene.Load(r6_mm);
  Cutscene.SetOffset(39.424, -726.677, 21.692);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_ray.SetAnim($.ray);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.SetAnim($.ray);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetNearClip(0.2);
  Cutscene.Start();
  Streaming.Switch(0 /* OFF */);
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1807) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_A, 4000, 1);
  while ($.cs_time < 4920) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_B, 4000, 1);
  while ($.cs_time < 8597) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_C, 4000, 1);
  while ($.cs_time < 11482) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_C1, 4000, 1);
  while ($.cs_time < 14220) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_D, 4000, 1);
  while ($.cs_time < 17464) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM6_E, 4000, 1);
  while ($.cs_time < 21666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetNearClip(0.9);
  Camera.SetBehindPlayer();
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.RequestModel(ped`B_MAN3`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(ped`B_MAN3`))) {
    await asyncWait(0);
  }
  $.ray = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 38.7, -727.7, 22.0);
  $.ray.AddArmor(100);
  $.ray.FollowPlayer($.player);
  Streaming.Switch(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.rays_cutscene_flag = 0;
  Hud.DisplayTimer($.time_till_flight);
  $.rays_blip = Blip.AddForCoord(-739.0, -583.0, -100.0);
  if (Char.IsDead($.ray)) {
    Text.PrintNow(RM6_6, 5000, 1);
    // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
  }
  $.ray.SetRunning(1 /* TRUE */);
  Text.PrintNow(RM6_5, 15000, 1);
  while (!($.ray.LocateStoppedAnyMeans2D(-738.3010, -582.8834, 8.0, 8.0, 1))) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
    if ($.time_till_flight < 1) {
      Text.PrintNow(RM6_7, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
    if ($.total_cia < 16) {
      if ($.cia_1_flag == 0) {
        if ($.player.LocateAnyMeans2D(-25.8545, -612.5001, 100.0, 100.0, 0)) {
          $.cia_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -25.8545, -612.5001, 42.1683);
          $.cia_1.SetHeading(239.6049);
          $.cia_1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_1.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_1.SetIdle();
          $.cia_1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_1.SetStayInSamePlace(1 /* TRUE */);
          $.cia_1.AddArmor(100);
          ++$.total_cia;
          $.cia_1_flag = 1;
        }
      }
    }
    if ($.cia_1_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-25.8545, -612.5001, 100.0, 100.0, 0))) {
        $.cia_1.Delete();
        --$.total_cia;
        $.cia_1_flag = 0;
      }
    }
    if ($.cia_1_flag == 1) {
      if (Char.IsDead($.cia_1)) {
        $.cia_1_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_1, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_1.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_1, 40.0, 40.0, 0)) {
          $.cia_1.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_2_flag == 0) {
        if ($.player.LocateAnyMeans2D(-24.0225, -630.3363, 100.0, 100.0, 0)) {
          $.cia_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -24.0225, -630.3363, 42.1125);
          $.cia_2.SetHeading(293.6046);
          $.cia_2.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_2.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_2.SetIdle();
          $.cia_2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_2.SetStayInSamePlace(1 /* TRUE */);
          $.cia_2.AddArmor(100);
          ++$.total_cia;
          $.cia_2_flag = 1;
        }
      }
    }
    if ($.cia_2_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-24.0225, -630.3363, 100.0, 100.0, 0))) {
        $.cia_2.Delete();
        --$.total_cia;
        $.cia_2_flag = 0;
      }
    }
    if ($.cia_2_flag == 1) {
      if (Char.IsDead($.cia_2)) {
        $.cia_2_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_2, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_2.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_2, 40.0, 40.0, 0)) {
          $.cia_2.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_3_flag == 0) {
        if ($.player.LocateAnyMeans2D(-35.1159, -632.8395, 100.0, 100.0, 0)) {
          $.cia_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -35.1159, -632.8395, 42.4257);
          $.cia_3.SetHeading(255.4109);
          $.cia_3.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_3.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_3.SetIdle();
          $.cia_3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_3.SetStayInSamePlace(1 /* TRUE */);
          $.cia_3.AddArmor(100);
          ++$.total_cia;
          $.cia_3_flag = 1;
        }
      }
    }
    if ($.cia_3_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-35.1159, -632.8395, 100.0, 100.0, 0))) {
        $.cia_3.Delete();
        --$.total_cia;
        $.cia_3_flag = 0;
      }
    }
    if ($.cia_3_flag == 1) {
      if (Char.IsDead($.cia_3)) {
        $.cia_3_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_3, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_3.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_3, 40.0, 40.0, 0)) {
          $.cia_3.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_4_flag == 0) {
        if ($.player.LocateAnyMeans2D(-24.3022, -650.4634, 100.0, 100.0, 0)) {
          $.cia_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -24.3022, -650.4634, 46.5876);
          $.cia_4.SetHeading(344.2893);
          $.cia_4.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_4.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_4.SetIdle();
          $.cia_4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_4.SetStayInSamePlace(1 /* TRUE */);
          $.cia_4.AddArmor(100);
          ++$.total_cia;
          $.cia_4_flag = 1;
        }
      }
    }
    if ($.cia_4_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-24.3022, -650.4634, 100.0, 100.0, 0))) {
        $.cia_4.Delete();
        --$.total_cia;
        $.cia_4_flag = 0;
      }
    }
    if ($.cia_4_flag == 1) {
      if (Char.IsDead($.cia_4)) {
        $.cia_4_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_4, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_4.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_4, 40.0, 40.0, 0)) {
          $.cia_4.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_5_flag == 0) {
        if ($.player.LocateAnyMeans2D(-217.9545, -630.4070, 100.0, 100.0, 0)) {
          $.cia_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -217.9545, -630.4070, 45.9975);
          $.cia_5.SetHeading(344.2893);
          $.cia_5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_5.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_5.SetIdle();
          $.cia_5.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_5.SetStayInSamePlace(1 /* TRUE */);
          $.cia_5.AddArmor(100);
          ++$.total_cia;
          $.cia_5_flag = 1;
        }
      }
    }
    if ($.cia_5_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-217.9545, -630.4070, 100.0, 100.0, 0))) {
        $.cia_5.Delete();
        --$.total_cia;
        $.cia_5_flag = 0;
      }
    }
    if ($.cia_5_flag == 1) {
      if (Char.IsDead($.cia_5)) {
        $.cia_5_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_5, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_5.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_5, 40.0, 40.0, 0)) {
          $.cia_5.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_6_flag == 0) {
        if ($.player.LocateAnyMeans2D(-212.4922, -632.7455, 100.0, 100.0, 0)) {
          $.cia_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -212.4922, -632.7455, 45.9514);
          $.cia_6.SetHeading(247.0256);
          $.cia_6.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_6.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_6.SetIdle();
          $.cia_6.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_6.SetStayInSamePlace(1 /* TRUE */);
          $.cia_6.AddArmor(100);
          ++$.total_cia;
          $.cia_6_flag = 1;
        }
      }
    }
    if ($.cia_6_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-212.4922, -632.7455, 100.0, 100.0, 0))) {
        $.cia_6.Delete();
        --$.total_cia;
        $.cia_6_flag = 0;
      }
    }
    if ($.cia_6_flag == 1) {
      if (Char.IsDead($.cia_6)) {
        $.cia_6_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_6, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_6.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_6, 40.0, 40.0, 0)) {
          $.cia_6.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_7_flag == 0) {
        if ($.player.LocateAnyMeans2D(-437.0927, -612.5157, 100.0, 100.0, 0)) {
          $.cia_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -437.0927, -612.5157, 44.5994);
          $.cia_7.SetHeading(247.0256);
          $.cia_7.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_7.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_7.SetIdle();
          $.cia_7.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_7.SetStayInSamePlace(1 /* TRUE */);
          $.cia_7.AddArmor(100);
          ++$.total_cia;
          $.cia_7_flag = 1;
        }
      }
    }
    if ($.cia_7_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-437.0927, -612.5157, 100.0, 100.0, 0))) {
        $.cia_7.Delete();
        --$.total_cia;
        $.cia_7_flag = 0;
      }
    }
    if ($.cia_7_flag == 1) {
      if (Char.IsDead($.cia_7)) {
        $.cia_7_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_7, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_7.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_7, 40.0, 40.0, 0)) {
          $.cia_7.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_8_flag == 0) {
        if ($.player.LocateAnyMeans2D(-534.6777, -631.2995, 100.0, 100.0, 0)) {
          $.cia_8 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -534.6777, -631.2995, 42.2770);
          $.cia_8.SetHeading(247.0256);
          $.cia_8.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_8.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_8.SetIdle();
          $.cia_8.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_8.SetStayInSamePlace(1 /* TRUE */);
          $.cia_8.AddArmor(100);
          ++$.total_cia;
          $.cia_8_flag = 1;
        }
      }
    }
    if ($.cia_8_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-534.6777, -631.2995, 100.0, 100.0, 0))) {
        $.cia_8.Delete();
        --$.total_cia;
        $.cia_8_flag = 0;
      }
    }
    if ($.cia_8_flag == 1) {
      if (Char.IsDead($.cia_8)) {
        $.cia_8_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_8, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_8.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_8, 40.0, 40.0, 0)) {
          $.cia_8.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_9_flag == 0) {
        if ($.player.LocateAnyMeans2D(-523.4218, -650.3831, 100.0, 100.0, 0)) {
          $.cia_9 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -523.4218, -650.3831, 42.5261);
          $.cia_9.SetHeading(316.7352);
          $.cia_9.GiveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
          $.cia_9.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_9.SetIdle();
          $.cia_9.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_9.SetStayInSamePlace(1 /* TRUE */);
          $.cia_9.AddArmor(100);
          ++$.total_cia;
          $.cia_9_flag = 1;
        }
      }
    }
    if ($.cia_9_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-523.4218, -650.3831, 100.0, 100.0, 0))) {
        $.cia_9.Delete();
        --$.total_cia;
        $.cia_9_flag = 0;
      }
    }
    if ($.cia_9_flag == 1) {
      if (Char.IsDead($.cia_9)) {
        $.cia_9_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_9, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_9.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_9, 40.0, 40.0, 0)) {
          $.cia_9.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_10_flag == 0) {
        if ($.player.LocateAnyMeans2D(-628.0785, -498.4106, 100.0, 100.0, 0)) {
          $.cia_10 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -628.0785, -498.4106, 22.3884);
          $.cia_10.SetHeading(76.5552);
          $.cia_10.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_10.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_10.SetIdle();
          $.cia_10.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_10.SetStayInSamePlace(1 /* TRUE */);
          $.cia_10.AddArmor(100);
          ++$.total_cia;
          $.cia_10_flag = 1;
        }
      }
    }
    if ($.cia_10_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-628.0785, -498.4106, 100.0, 100.0, 0))) {
        $.cia_10.Delete();
        --$.total_cia;
        $.cia_10_flag = 0;
      }
    }
    if ($.cia_10_flag == 1) {
      if (Char.IsDead($.cia_10)) {
        $.cia_10_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_10, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_10.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_10, 40.0, 40.0, 0)) {
          $.cia_10.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_11_flag == 0) {
        if ($.player.LocateAnyMeans2D(-637.6517, -501.7922, 100.0, 100.0, 0)) {
          $.cia_11 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -637.6517, -501.7922, 22.3455);
          $.cia_11.SetHeading(76.5552);
          $.cia_11.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_11.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_11.SetIdle();
          $.cia_11.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_11.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_11.SetStayInSamePlace(1 /* TRUE */);
          $.cia_11.AddArmor(100);
          ++$.total_cia;
          $.cia_11_flag = 1;
        }
      }
    }
    if ($.cia_11_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-637.6517, -501.7922, 100.0, 100.0, 0))) {
        $.cia_11.Delete();
        --$.total_cia;
        $.cia_11_flag = 0;
      }
    }
    if ($.cia_11_flag == 1) {
      if (Char.IsDead($.cia_11)) {
        $.cia_11_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_11, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_11.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_11, 40.0, 40.0, 0)) {
          $.cia_11.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_12_flag == 0) {
        if ($.player.LocateAnyMeans2D(-692.3098, -563.0333, 100.0, 100.0, 0)) {
          $.cia_12 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -692.3098, -563.0333, 21.5110);
          $.cia_12.SetHeading(344.2857);
          $.cia_12.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_12.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_12.SetIdle();
          $.cia_12.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_12.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_12.SetStayInSamePlace(1 /* TRUE */);
          $.cia_12.AddArmor(100);
          ++$.total_cia;
          $.cia_12_flag = 1;
        }
      }
    }
    if ($.cia_12_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-692.3098, -563.0333, 100.0, 100.0, 0))) {
        $.cia_12.Delete();
        --$.total_cia;
        $.cia_12_flag = 0;
      }
    }
    if ($.cia_12_flag == 1) {
      if (Char.IsDead($.cia_12)) {
        $.cia_12_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_12, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_12.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_12, 40.0, 40.0, 0)) {
          $.cia_12.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_13_flag == 0) {
        if ($.player.LocateAnyMeans2D(-671.1359, -540.5952, 100.0, 100.0, 0)) {
          $.cia_13 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -671.1359, -540.5952, 22.9211);
          $.cia_13.SetHeading(281.8996);
          $.cia_13.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_13.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_13.SetIdle();
          $.cia_13.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_13.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_13.SetStayInSamePlace(1 /* TRUE */);
          $.cia_13.AddArmor(100);
          ++$.total_cia;
          $.cia_13_flag = 1;
        }
      }
    }
    if ($.cia_13_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-671.1359, -540.5952, 100.0, 100.0, 0))) {
        $.cia_13.Delete();
        --$.total_cia;
        $.cia_13_flag = 0;
      }
    }
    if ($.cia_13_flag == 1) {
      if (Char.IsDead($.cia_13)) {
        $.cia_13_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_13, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_13.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_13, 40.0, 40.0, 0)) {
          $.cia_13.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_14_flag == 0) {
        if ($.player.LocateAnyMeans2D(-638.4215, -419.2620, 100.0, 100.0, 0)) {
          $.cia_14 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -638.4215, -419.2620, 17.8198);
          $.cia_14.SetHeading(113.6173);
          $.cia_14.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_14.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_14.SetIdle();
          $.cia_14.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_14.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_14.SetStayInSamePlace(1 /* TRUE */);
          $.cia_14.AddArmor(100);
          ++$.total_cia;
          $.cia_14_flag = 1;
        }
      }
    }
    if ($.cia_14_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-638.4215, -419.2620, 100.0, 100.0, 0))) {
        $.cia_14.Delete();
        --$.total_cia;
        $.cia_14_flag = 0;
      }
    }
    if ($.cia_14_flag == 1) {
      if (Char.IsDead($.cia_14)) {
        $.cia_14_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_14, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_14.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_14, 40.0, 40.0, 0)) {
          $.cia_14.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_15_flag == 0) {
        if ($.player.LocateAnyMeans2D(-655.3353, -404.4556, 100.0, 100.0, 0)) {
          $.cia_15 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -655.3353, -404.4556, 17.8198);
          $.cia_15.SetHeading(191.1247);
          $.cia_15.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_15.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_15.SetIdle();
          $.cia_15.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_15.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_15.SetStayInSamePlace(1 /* TRUE */);
          $.cia_15.AddArmor(100);
          ++$.total_cia;
          $.cia_15_flag = 1;
        }
      }
    }
    if ($.cia_15_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-655.3353, -404.4556, 100.0, 100.0, 0))) {
        $.cia_15.Delete();
        --$.total_cia;
        $.cia_15_flag = 0;
      }
    }
    if ($.cia_15_flag == 1) {
      if (Char.IsDead($.cia_15)) {
        $.cia_15_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_15, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_15.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_15, 40.0, 40.0, 0)) {
          $.cia_15.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_16_flag == 0) {
        if ($.player.LocateAnyMeans2D(-677.0261, -425.0470, 100.0, 100.0, 0)) {
          $.cia_16 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -677.0261, -425.0470, 18.5140);
          $.cia_16.SetHeading(265.4145);
          $.cia_16.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_16.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_16.SetIdle();
          $.cia_16.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_16.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_16.SetStayInSamePlace(1 /* TRUE */);
          $.cia_16.AddArmor(100);
          ++$.total_cia;
          $.cia_16_flag = 1;
        }
      }
    }
    if ($.cia_16_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-677.0261, -425.0470, 100.0, 100.0, 0))) {
        $.cia_16.Delete();
        --$.total_cia;
        $.cia_16_flag = 0;
      }
    }
    if ($.cia_16_flag == 1) {
      if (Char.IsDead($.cia_16)) {
        $.cia_16_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_16, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_16.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_16, 40.0, 40.0, 0)) {
          $.cia_16.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if ($.total_cia < 16) {
      if ($.cia_17_flag == 0) {
        if ($.player.LocateAnyMeans2D(-679.1292, -485.1575, 100.0, 100.0, 0)) {
          $.cia_17 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -679.1292, -485.1575, 18.2578);
          $.cia_17.SetHeading(260.2034);
          $.cia_17.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
          $.cia_17.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.cia_17.SetIdle();
          $.cia_17.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.cia_17.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.cia_17.SetStayInSamePlace(1 /* TRUE */);
          $.cia_17.AddArmor(100);
          ++$.total_cia;
          $.cia_17_flag = 1;
        }
      }
    }
    if ($.cia_17_flag == 1) {
      if (!($.player.LocateAnyMeans2D(-679.1292, -485.1575, 100.0, 100.0, 0))) {
        $.cia_17.Delete();
        --$.total_cia;
        $.cia_17_flag = 0;
      }
    }
    if ($.cia_17_flag == 1) {
      if (Char.IsDead($.cia_17)) {
        $.cia_17_flag = 2;
      }
      else {
        if ($.player.LocateInCarChar2D($.cia_17, 40.0, 40.0, 0)) {
          $.player_death_car = $.player.StoreCarIsIn();
          $.cia_17.SetObjDestroyCar($.player_death_car);
        }
        if ($.player.LocateOnFootChar2D($.cia_17, 40.0, 40.0, 0)) {
          $.cia_17.SetObjKillPlayerOnFoot($.player);
        }
      }
    }
    if (!($.ray.IsInPlayersGroup($.player)) && $.flag_blip_on_ray == 0) {
      Text.PrintNow(RM6_8, 5000, 1);
      $.rays_blip.Remove();
      $.rays_blip = Blip.AddForChar($.ray);
      $.flag_blip_on_ray = 1;
    }
    if ($.flag_blip_on_ray == 1) {
      if ($.player.LocateAnyMeansChar2D($.ray, 8.0, 8.0, 0 /* FALSE */)) {
        $.ray.FollowPlayer($.player);
        $.rays_blip.Remove();
        $.rays_blip = Blip.AddForCoord(-739.0, -583.0, 8.0);
        $.flag_blip_on_ray = 0;
      }
    }
  }
  $.rays_blip.Remove();
  Hud.ClearTimer($.time_till_flight);
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(-732.0104, -571.0955, 14.0482, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.ray, 15 /* FIXED */, 2 /* JUMP_CUT */);
  if (!($.ray.IsInAnyCar()) || !($.player.IsInAnyCar())) {
    $.ray.TurnToFacePlayer($.player);
    $.script_controlled_player = $.player.GetChar();
    $.script_controlled_player.TurnToFaceChar($.ray);
  }
  Audio.LoadMissionAudio(R6_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow(RM6_1, 5000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(R6_A1);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow(RM6_2, 5000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(R6_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.ray)) {
      Text.PrintNow(RM6_6, 5000, 1);
      // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow(RM6_3, 5000, 1);
  if ($.ray.IsInAnyCar()) {
    $.ray.LeaveGroup();
    $.player_death_car = $.ray.StoreCarIsIn();
    $.ray.SetObjLeaveCar($.player_death_car);
  }
  while (!($.airport_door_flag == 6) || !($.door1_closed == 0) || !($.door2_closed == 0)) {
    await asyncWait(0);
    if (!($.airport_door_flag == 6)) {
      if (Char.IsDead($.ray)) {
        Text.PrintNow(RM6_6, 5000, 1);
        // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray6_failed"); // fallback: would break linear control flow
      }
    }
    if ($.airport_door_flag == 0) {
      if (!($.ray.IsInAnyCar())) {
        $.ray.LeaveGroup();
        $.ray.SetObjRunToCoord(-744.7192, -586.4615);
        Camera.SetFixedPosition(-751.3805, -603.0235, 11.4096, 0.0, 0.0, 0.0);
        Camera.PointAtChar($.ray, 15 /* FIXED */, 2 /* JUMP_CUT */);
        $.airport_door_flag = 1;
      }
    }
    if ($.airport_door_flag == 1) {
      if ($.ray.LocateOnFoot2D(-744.7192, -586.4615, 1.5, 1.5, 0)) {
        $.ray.SetObjRunToCoord(-757.1901, -587.2930);
        $.airport_door_flag = 2;
      }
    }
    if ($.airport_door_flag == 2) {
      if ($.ray.LocateOnFoot2D(-757.1901, -587.2930, 1.5, 1.5, 0)) {
        $.ray.SetObjRunToCoord(-768.0753, -599.4160);
        $.airport_door_flag = 3;
      }
    }
    if ($.airport_door_flag == 3) {
      if ($.ray.LocateOnFoot2D(-768.0753, -599.4160, 1.5, 1.5, 0)) {
        $.ray.SetObjRunToCoord(-772.6748, -600.3857);
        $.airport_door_flag = 4;
      }
    }
    if ($.airport_door_flag > 3 && $.door1_closed == 0) {
      if ($.airportdoor1.Slide(-770.414, -597.865, 11.847, 0.1, 0.1, 0.1, 0)) {
        $.door1_closed = 1;
      }
    }
    if ($.airport_door_flag > 3 && $.door2_closed == 0) {
      if ($.airportdoor2.Slide(-770.414, -602.885, 11.847, 0.1, 0.1, 0.1, 0)) {
        $.door2_closed = 1;
      }
    }
    if ($.airport_door_flag == 4) {
      if ($.ray.LocateOnFoot2D(-772.6748, -600.3857, 1.5, 1.5, 0)) {
        $.ray.SetObjRunToCoord(-772.6249, -604.7247);
        $.airport_door_flag = 5;
      }
    }
    if ($.airport_door_flag > 4 && $.door1_closed == 1) {
      if (!($.player.IsInArea2D(-773.75, -605.205, -768.76, -595.613, 0))) {
        if ($.airportdoor1.Slide(-770.414, -599.292, 11.847, 0.1, 0.1, 0.1, 0)) {
          $.door1_closed = 0;
        }
      }
    }
    if ($.airport_door_flag > 4 && $.door2_closed == 1) {
      if (!($.player.IsInArea2D(-773.75, -605.205, -768.76, -595.613, 0))) {
        if ($.airportdoor2.Slide(-770.414, -601.369, 11.846, 0.1, 0.1, 0.1, 0)) {
          $.door2_closed = 0;
        }
      }
    }
    if ($.airport_door_flag == 5) {
      if ($.ray.LocateOnFoot2D(-772.6249, -604.7247, 1.5, 1.5, 0)) {
        $.player.SetControl(1 /* ON */);
        Hud.SwitchWidescreen(0 /* OFF */);
        Camera.SetBehindPlayer();
        Camera.RestoreJumpcut();
        $.ray.Delete();
        $.airport_door_flag = 6;
      }
    }
  }
  Text.PrintNow(RM6_4, 5000, 1);
  $.rays_blip = Blip.AddForCoord(241.1441, -997.7660, 20.9853);
  Streaming.RequestModel(car`PATRIOT`);
  while (!($.player.LocateAnyMeans2D(241.1441, -997.7660, 50.0, 50.0, 0))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(car`PATRIOT`))) {
    await asyncWait(0);
  }
  $.rays_prize_car = Car.Create(89 /* CAR_PATRIOT */, 241.1441, -997.7660, 20.9853);
  $.rays_prize_car.SetHeading(270.0);
  $.rays_prize_car.SetProofs(1 /* TRUE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
  $.rays_prize_car.SetStrong(1 /* TRUE */);
  $.rays_prize_weapon1 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 1000, 244.0506, -993.9206, 21.0);
  $.rays_prize_weapon2 = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 3 /* PICKUP_ONCE */, 1000, 237.3226, -998.5697, 21.0);
  $.rays_prize_weapon3 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, 25, 243.8931, -995.5624, 21.0);
  $.rays_prize_weapon4 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 3 /* PICKUP_ONCE */, 50, 241.2706, -993.6790, 21.0);
  $.rays_cash = Pickup.CreateMoney(238.9743, -993.6944, 21.0, 20000);
  $.pickups_created_rm6 = 1;
  while (!($.player.LocateAnyMeans2D(230.2258, -996.4656, 2.0, 2.0, 0))) {
    await asyncWait(0);
  }
  $.rays_prize_garage.Open();
  Pager.AddMessage(RM6_666, 140, 666, 1);
  await asyncWait(13000);
  // SCM GOTO → mission_ray6_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray6_passed"); // fallback: would break linear control flow
}

async function mission_ray6_failed() {
  if ($.pickups_created_rm6 == 1) {
    $.rays_prize_weapon1.Remove();
    $.rays_prize_weapon2.Remove();
    $.rays_prize_weapon3.Remove();
    $.rays_prize_weapon4.Remove();
    $.rays_cash.Remove();
    $.rays_prize_car.Delete();
    $.pickups_created_rm6 = 0;
  }
  $.ray.RemoveElegantly();
  Text.PrintBig(M_FAIL, 5000, 1);
  return;
}

async function mission_ray6_passed() {
  $.flag_ray_mission6_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 20000, 2000, 1);
  $.player.AddScore(20000);
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(RM6);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  $.ray_contact_blip.Remove();
  return;
}

async function mission_cleanup_ray6() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  if (Object.DoesExist($.airportdoor1)) {
    $.airportdoor1.SetCoordinates(-770.414, -599.292, 11.847);
  }
  if (Object.DoesExist($.airportdoor2)) {
    $.airportdoor2.SetCoordinates(-770.414, -601.369, 11.846);
  }
  if ($.player.IsInArea2D(-773.75, -605.205, -768.76, -595.613, 0)) {
    $.player.SetCoordinates(-767.8299, -600.3843, 11.0);
    $.player.SetHeading(270.0);
  }
  Hud.ClearTimer($.time_till_flight);
  $.rays_blip.Remove();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN3`);
  Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`);
  Streaming.MarkModelAsNoLongerNeeded(car`PATRIOT`);
  Mission.Finish();
  return;
}

export async function ray6() {
  // MissionBoundary
  // SCM GOSUB mission_start_ray6
  await mission_start_ray6();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray6_failed
    await mission_ray6_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray6
  await mission_cleanup_ray6();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT time_till_flight flag_blip_on_ray rays_blip total_cia player_death_car airport_door_flag door1_closed door2_closed
  // VAR_INT cia_1 cia_1_flag
  // VAR_INT cia_2 cia_2_flag
  // VAR_INT cia_3 cia_3_flag
  // VAR_INT cia_4 cia_4_flag
  // VAR_INT cia_5 cia_5_flag
  // VAR_INT cia_6 cia_6_flag
  // VAR_INT cia_7 cia_7_flag
  // VAR_INT cia_8 cia_8_flag
  // VAR_INT cia_9 cia_9_flag
  // VAR_INT cia_10 cia_10_flag
  // VAR_INT cia_11 cia_11_flag
  // VAR_INT cia_12 cia_12_flag
  // VAR_INT cia_13 cia_13_flag
  // VAR_INT cia_14 cia_14_flag
  // VAR_INT cia_15 cia_15_flag
  // VAR_INT cia_16 cia_16_flag
  // VAR_INT cia_17 cia_17_flag
  // VAR_INT rays_prize_car rays_prize_weapon1 rays_prize_weapon2 rays_prize_weapon3 rays_prize_weapon4 rays_cash pickups_created_rm6
}
