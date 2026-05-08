// Generated from Main/Commercial/ray5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray5() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.rays_cutscene_flag = 1;
  await asyncWait(0);
  $.flag_bodycast_clear = 0;
  $.flag_redalert = 0;
  $.flag_random_ray5 = 0;
  $.flag_police_trigger = 0;
  $.flag_audio = 0;
  $.ambulance_health = 0;
  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.RequestModel(toilet);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }
  Cutscene.Load(r5_pb);
  Streaming.Switch(1 /* ON */);
  Cutscene.SetOffset(39.424, -726.677, 21.692);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_ray.SetAnim($.ray);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.SetAnim($.ray);
  World.ClearArea(39.0, -723.5, 22.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(39.0, -723.5, 22.0);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 919) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_A, 2000, 1);
  while ($.cs_time < 3082) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_A1, 4500, 1);
  while ($.cs_time < 7840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_B, 3000, 1);
  while ($.cs_time < 10868) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_B1, 2000, 1);
  while ($.cs_time < 13138) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_C, 4000, 1);
  while ($.cs_time < 17626) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM5_D, 2500, 1);
  while ($.cs_time < 24333) {
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
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  $.rays_cutscene_flag = 0;
  Streaming.RequestModel(car`AMBULANCE`);
  Streaming.RequestModel(car`ENFORCER`);
  Streaming.RequestModel(ped`COP`);
  Streaming.RequestModel(ped`SWAT`);
  while (!(Streaming.HasModelLoaded(car`AMBULANCE`)) || !(Streaming.HasModelLoaded(ped`COP`)) || !(Streaming.HasModelLoaded(ped`SWAT`)) || !(Streaming.HasModelLoaded(car`ENFORCER`))) {
    await asyncWait(0);
  }
  $.swatvan1 = Car.Create(110 /* CAR_ENFORCER */, 417.8, -1064.0, 26.4);
  $.swatvan1.SetHeading(50.0);
  $.swatvan1.SetIdle();
  $.swatvan1.SwitchSiren(1 /* ON */);
  $.swatvan2 = Car.Create(110 /* CAR_ENFORCER */, 335.4, -1185.2, 26.4);
  $.swatvan2.SetHeading(150.0);
  $.swatvan2.SetIdle();
  $.swatvan2.SwitchSiren(1 /* ON */);
  $.swat1_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 414.6, -1060.3, 26.2);
  $.swat1_rc5.SetHeading(0.0);
  $.swat1_rc5.ClearThreatSearch();
  $.swat1_rc5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.swat1_rc5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
  $.swat1_rc5.SetCurrentWeapon(6 /* WEAPONTYPE_M16 */);
  $.swat1_rc5.SetStayInSamePlace(1 /* true */);
  $.swat1_rc5.AddArmor(100);
  $.swat2_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 365.0, -1146.7, 23.0);
  $.swat2_rc5.SetHeading(270.0);
  $.swat2_rc5.ClearThreatSearch();
  $.swat2_rc5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.swat2_rc5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
  $.swat2_rc5.SetCurrentWeapon(6 /* WEAPONTYPE_M16 */);
  $.swat2_rc5.SetStayInSamePlace(1 /* true */);
  $.swat2_rc5.AddArmor(100);
  $.swat3_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 331.5, -1184.1, 26.2);
  $.swat3_rc5.SetHeading(100.0);
  $.swat3_rc5.ClearThreatSearch();
  $.swat3_rc5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.swat3_rc5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
  $.swat3_rc5.SetCurrentWeapon(6 /* WEAPONTYPE_M16 */);
  $.swat3_rc5.SetStayInSamePlace(1 /* true */);
  $.swat3_rc5.AddArmor(100);
  $.swat4_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 336.0, -1122.0, 26.0);
  $.swat4_rc5.SetHeading(230.0);
  $.swat4_rc5.ClearThreatSearch();
  $.swat4_rc5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.swat4_rc5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
  $.swat4_rc5.SetCurrentWeapon(6 /* WEAPONTYPE_M16 */);
  $.swat4_rc5.SetStayInSamePlace(1 /* true */);
  $.swat4_rc5.AddArmor(100);
  Audio.LoadMissionAudio(R5_A);
}

async function amb_generator() {
  $.ambulance_health = 0;
  Hud.DisplayCounterWithString($.ambulance_health, 1 /* COUNTER_DISPLAY_BAR */, DAM);
  $.ambulance_rc5 = Car.Create(99 /* CAR_AMBULANCE */, 387.3, 4.5, 11.4);
  $.blip_ambulance_rc5 = Blip.AddForCar($.ambulance_rc5);
  $.cop_driver = Char.CreateInsideCar($.ambulance_rc5, 6 /* PEDTYPE_COP */, ped`COP`);
  $.ambulance_rc5.LockDoors(2 /* CARLOCK_LOCKED */);
  $.ambulance_rc5.SetHeading(166.0);
  $.ambulance_rc5.SetCruiseSpeed(20.0);
  $.ambulance_rc5.SetDrivingStyle(0);
  $.ambulance_rc5.SetOnlyDamagedByPlayer(1 /* true */);
  $.ambulance_health = $.ambulance_rc5.GetHealth();
  $.random_ray5 = Math.Random();
  if ($.random_ray5 < 21846) {
    $.ambulance_rc5.GotoCoordinates(-148.93, 18.04, 26.5);
  }
  if ($.random_ray5 > 21845 && $.random_ray5 < 43691) {
    $.ambulance_rc5.GotoCoordinates(402.88, -404.88, 26.5);
    $.flag_random_ray5 = 1;
  }
  if ($.random_ray5 > 43690) {
    $.ambulance_rc5.GotoCoordinates(-13.2, -804.7, 26.5);
    $.flag_random_ray5 = 2;
  }
  while ($.flag_redalert == 0) {
    await asyncWait(0);
    if (!(Car.IsDead($.ambulance_rc5))) {
      [$.amb_rc5_x, $.amb_rc5_y, $.amb_rc5_z] = $.ambulance_rc5.GetCoordinates();
      $.ambulance_health = $.ambulance_rc5.GetHealth();
      $.ambulance_health = $.ambulance_health * -1;
      $.ambulance_health = $.ambulance_health + 1000;
      if ($.flag_random_ray5 == 0) {
        if ($.ambulance_rc5.Locate2D(-148.93, 18.04, 15.0, 15.0, 0 /* false */)) {
          $.ambulance_rc5.GotoCoordinates(405.2, -1137.7, 26.0);
          $.flag_random_ray5 = 3;
        }
      }
      if ($.flag_random_ray5 == 1) {
        if ($.ambulance_rc5.Locate2D(402.88, -404.88, 15.0, 15.0, 0 /* false */)) {
          $.ambulance_rc5.GotoCoordinates(405.2, -1137.7, 26.0);
          $.flag_random_ray5 = 3;
        }
      }
      if ($.flag_random_ray5 == 2) {
        if ($.ambulance_rc5.Locate2D(-13.2, -804.7, 15.0, 15.0, 0 /* false */)) {
          $.ambulance_rc5.GotoCoordinates(405.2, -1137.7, 26.0);
          $.flag_random_ray5 = 3;
        }
      }
      if ($.flag_random_ray5 == 3) {
        if ($.ambulance_rc5.Locate2D(405.2, -1137.7, 15.0, 15.0, 0 /* false */)) {
          $.flag_redalert = 1;
          $.ambulance_rc5.GotoCoordinates(362.0, -1138.0, 23.0);
          $.ambulance_rc5.SetCruiseSpeed(15.0);
          $.ambulance_rc5.SetDrivingStyle(0);
        }
      }
      if ($.ambulance_rc5.IsOnScreen()) {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(0 /* false */);
      }
      else {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(1 /* true */);
      }
    }
    else {
      Text.PrintNow("RM5_3", 2500, 1);
      $.ambulance_rc5.MarkAsNoLongerNeeded();
      $.cop_driver.MarkAsNoLongerNeeded();
      $.blip_ambulance_rc5.Remove();
      Hud.ClearCounter($.ambulance_health);
      $.flag_random_ray5 = 0;
      $.flag_police_trigger = 0;
      // SCM GOTO → amb_generator (not lowered; manual jump required)
      throw new Error("unresolved GOTO amb_generator"); // fallback: would break linear control flow
    }
    if ($.player.LocateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, 0 /* false */)) {
      if (!(Car.IsDead($.ambulance_rc5))) {
        Text.PrintNow("RM5_2", 3000, 1);
        $.ambulance_rc5.SetCruiseSpeed(28.0);
        $.ambulance_rc5.SetDrivingStyle(3);
        $.ambulance_rc5.GotoCoordinates(405.2, -1137.7, 26.0);
        Audio.PlayMissionAudio();
        $.ambulance_rc5.SwitchSiren(1 /* ON */);
        $.player.AlterWantedLevelNoDrop(2);
        $.flag_redalert = 1;
        $.flag_police_trigger = 1;
      }
    }
    // SCM GOSUB swat_team
    await swat_team();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  while ($.flag_redalert == 1) {
    await asyncWait(0);
    if (!(Car.IsDead($.ambulance_rc5))) {
      $.ambulance_health = $.ambulance_rc5.GetHealth();
      $.ambulance_health = $.ambulance_health * -1;
      $.ambulance_health = $.ambulance_health + 1000;
      if (!($.ambulance_rc5.IsHealthGreater(900))) {
        // SCM GOTO → injured_cop_bailout (not lowered; manual jump required)
        throw new Error("unresolved GOTO injured_cop_bailout"); // fallback: would break linear control flow
      }
      if ($.ambulance_rc5.Locate2D(405.2, -1137.7, 15.0, 15.0, 0 /* false */)) {
        $.ambulance_rc5.SetCruiseSpeed(10.0);
        $.flag_redalert = 2;
        $.ambulance_rc5.GotoCoordinates(362.0, -1138.0, 23.0);
        $.ambulance_rc5.SetCruiseSpeed(15.0);
        $.ambulance_rc5.SetDrivingStyle(0);
      }
      if ($.ambulance_rc5.IsOnScreen()) {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(0 /* false */);
      }
      else {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(1 /* true */);
      }
    }
    else {
      Text.PrintNow("RM5_3", 2500, 1);
      $.ambulance_rc5.MarkAsNoLongerNeeded();
      $.cop_driver.MarkAsNoLongerNeeded();
      $.blip_ambulance_rc5.Remove();
      Hud.ClearCounter($.ambulance_health);
      $.flag_random_ray5 = 0;
      $.flag_police_trigger = 0;
      // SCM GOTO → amb_generator (not lowered; manual jump required)
      throw new Error("unresolved GOTO amb_generator"); // fallback: would break linear control flow
    }
    if ($.player.LocateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, 0 /* false */) && $.flag_police_trigger == 0) {
      if (!(Car.IsDead($.ambulance_rc5))) {
        Text.PrintNow("RM5_2", 3000, 1);
        $.ambulance_rc5.SetCruiseSpeed(28.0);
        $.ambulance_rc5.SetDrivingStyle(3);
        $.ambulance_rc5.GotoCoordinates(405.2, -1137.7, 26.0);
        Audio.PlayMissionAudio();
        $.ambulance_rc5.SwitchSiren(1 /* ON */);
        $.player.AlterWantedLevelNoDrop(2);
        $.flag_redalert = 1;
        $.flag_police_trigger = 1;
      }
    }
    // SCM GOSUB swat_team
    await swat_team();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  while ($.flag_redalert == 2) {
    await asyncWait(0);
    if (!(Car.IsDead($.ambulance_rc5))) {
      $.ambulance_health = $.ambulance_rc5.GetHealth();
      $.ambulance_health = $.ambulance_health * -1;
      $.ambulance_health = $.ambulance_health + 1000;
      if ($.ambulance_rc5.Locate2D(362.0, -1138.0, 5.0, 5.0, 1 /* true */)) {
        $.flag_redalert = 3;
        $.ambulance_rc5.SetCruiseSpeed(0.0);
        $.ambulance_rc5.SetDrivingStyle(0);
        $.ambulance_rc5.SwitchSiren(0 /* OFF */);
        $.ambulance_rc5.SetIdle();
      }
      if (!($.ambulance_rc5.IsHealthGreater(900))) {
        // SCM GOTO → injured_cop_bailout (not lowered; manual jump required)
        throw new Error("unresolved GOTO injured_cop_bailout"); // fallback: would break linear control flow
      }
      if ($.ambulance_rc5.IsOnScreen()) {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(0 /* false */);
      }
      else {
        $.ambulance_rc5.SetOnlyDamagedByPlayer(1 /* true */);
      }
    }
    else {
      Text.PrintNow("RM5_3", 2500, 1);
      $.ambulance_rc5.MarkAsNoLongerNeeded();
      $.cop_driver.MarkAsNoLongerNeeded();
      $.blip_ambulance_rc5.Remove();
      Hud.ClearCounter($.ambulance_health);
      $.flag_random_ray5 = 0;
      $.flag_redalert = 0;
      // SCM GOTO → amb_generator (not lowered; manual jump required)
      throw new Error("unresolved GOTO amb_generator"); // fallback: would break linear control flow
    }
    if ($.player.LocateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, 0 /* false */) && $.flag_police_trigger == 0) {
      Text.PrintNow("RM5_2", 3000, 1);
      $.player.AlterWantedLevelNoDrop(2);
      $.flag_police_trigger = 1;
    }
    // SCM GOSUB swat_team
    await swat_team();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOTO → mission_ray5_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray5_failed"); // fallback: would break linear control flow
}

async function injured_cop_bailout() {
  $.blip_ambulance_rc5.Remove();
  [$.amb_rc5_x, $.amb_rc5_y, $.amb_rc5_z] = $.ambulance_rc5.GetCoordinates();
  $.amb_rc5_z = $.amb_rc5_z + 2.5;
  $.injured_cop_rc5 = Object.Create(bodycast, $.amb_rc5_x, $.amb_rc5_y, $.amb_rc5_z);
  $.injured_cop_rc5.SetCollision(1 /* TRUE */);
  $.injured_cop_rc5.SetDynamic(1 /* true */);
  $.injured_cop_rc5.MakeTargetable();
  $.injured_cop_rc5.AddToVelocity(0.0, 0.0, 5.0);
  $.blip_injured_cop_rc5 = Blip.AddForObject($.injured_cop_rc5);
  $.player.AlterWantedLevelNoDrop(3);
  Hud.ClearCounter($.ambulance_health);
  Hud.DisplayCounterWithString($.bodycast_health, 1 /* COUNTER_DISPLAY_BAR */, DAM);
  Text.PrintNow("RM5_6", 3000, 1);
  while (!($.injured_cop_rc5.HasBeenDamaged())) {
    await asyncWait(0);
    [$.ic_x, $.ic_y, $.ic_z] = $.injured_cop_rc5.GetCoordinates();
    Audio.SetMissionAudioPosition($.ic_x, $.ic_y, $.ic_z);
    $.bodycast_health = Object.GetBodyCastHealth();
    $.bodycast_health = $.bodycast_health * -1;
    $.bodycast_health = $.bodycast_health + 1000;
    $.bodycast_health = $.bodycast_health / 10;
    if ($.flag_audio == 0) {
      Audio.PlayMissionAudio();
    }
    if (Audio.HasMissionAudioFinished()) {
      $.flag_audio = 1;
    }
    if ($.player.IsCurrentWeapon(2 /* WEAPONTYPE_PISTOL */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_4", 500, 1);
    }
    if ($.player.IsCurrentWeapon(3 /* WEAPONTYPE_UZI */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_4", 500, 1);
    }
    if ($.player.IsCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_4", 500, 1);
    }
    if ($.player.IsCurrentWeapon(6 /* WEAPONTYPE_M16 */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_4", 500, 1);
    }
    if ($.player.IsCurrentWeapon(5 /* WEAPONTYPE_CHAINGUN */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_4", 500, 1);
    }
    if ($.player.IsCurrentWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_5", 500, 1);
    }
    if ($.player.IsCurrentWeapon(10 /* WEAPONTYPE_MOLOTOV */) && !($.player.IsInAnyCar())) {
      Text.Print("RM5_5", 500, 1);
    }
    if ($.ic_z < 1.0) {
      Text.PrintNow("RM5_8", 3000, 1);
      // SCM GOTO → quentin (not lowered; manual jump required)
      throw new Error("unresolved GOTO quentin"); // fallback: would break linear control flow
    }
    // SCM GOSUB swat_team
    await swat_team();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function quentin() {
  $.blip_injured_cop_rc5.Remove();
  // SCM GOTO → mission_ray5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray5_passed"); // fallback: would break linear control flow
}

async function mission_ray5_failed() {
  Text.PrintNow(RM5_7, 3000, 1);
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_ray5_passed() {
  $.flag_ray_mission5_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(RM5);
  Stat.PlayerMadeProgress(1);
  if (!($.flag_love_mission3_passed == 1)) {
    $.ray_contact_blip.Remove();
  }
  else {
    // START_NEW_SCRIPT ray_mission6_loop
  }
  return;
}

async function mission_cleanup_ray5() {
  Hud.ClearCounter($.ambulance_health);
  Hud.ClearCounter($.bodycast_health);
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  $.injured_cop_rc5.MarkAsNoLongerNeeded();
  $.swat1_rc5.MarkAsNoLongerNeeded();
  $.swat2_rc5.MarkAsNoLongerNeeded();
  $.swat3_rc5.MarkAsNoLongerNeeded();
  $.swat4_rc5.MarkAsNoLongerNeeded();
  $.cop_driver.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(car`AMBULANCE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`);
  Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`);
  $.blip_ambulance_rc5.Remove();
  Mission.Finish();
  return;
}

async function swat_team() {
  if ($.player.IsInArea3D(366.0, -1146.0, 21.0, 396.0, -1134.0, 28.0, 0 /* false */)) {
    if (!(Char.IsDead($.swat1_rc5))) {
      $.swat1_rc5.SetObjKillPlayerAnyMeans($.player);
    }
    if (!(Char.IsDead($.swat2_rc5))) {
      $.swat2_rc5.SetObjKillPlayerAnyMeans($.player);
    }
  }
  if ($.player.IsInArea3D(318.0, -1170.0, 22.0, 366.0, -1120.0, 25.0, 0 /* false */)) {
    if (!(Char.IsDead($.swat1_rc5))) {
      $.swat1_rc5.SetObjKillPlayerAnyMeans($.player);
    }
    if (!(Char.IsDead($.swat2_rc5))) {
      $.swat2_rc5.SetObjKillPlayerAnyMeans($.player);
    }
    if (!(Char.IsDead($.swat3_rc5))) {
      $.swat3_rc5.SetObjKillPlayerAnyMeans($.player);
    }
    if (!(Char.IsDead($.swat4_rc5))) {
      $.swat4_rc5.SetObjKillPlayerAnyMeans($.player);
    }
  }
  return;
}

export async function ray5() {
  // MissionBoundary
  // SCM GOSUB mission_start_ray5
  await mission_start_ray5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray5_failed
    await mission_ray5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray5
  await mission_cleanup_ray5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT ambulance_rc5 ambulance_health flag_redalert
  // VAR_INT injured_cop_rc5 cop_driver bodycast_health
  // VAR_INT swat1_rc5 swat2_rc5 swat3_rc5 swat4_rc5
  // VAR_INT swatvan1 swatvan2
  // VAR_INT blip_ambulance_rc5 flag_bodycast_clear flag_police_trigger
  // VAR_INT blip_injured_cop_rc5 zed_value random_ray5 flag_random_ray5
  // VAR_FLOAT amb_rc5_x amb_rc5_y amb_rc5_z
  // VAR_FLOAT ic_x ic_y ic_z
}
