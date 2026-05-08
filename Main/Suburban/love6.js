// Generated from Main/Suburban/love6.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love6() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.get_in_van = 0;
  $.survival_time = 180000;
  Streaming.LoadSpecialCharacter(1, love2);
  Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH);
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(tshrorckgrdn)) || !(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  Cutscene.Load(D6_STS);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.SetAnim(love2);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`);
  $.cs_lovehead.SetAnim($.love);
  World.ClearArea(82.44, -1548.49, 28.0, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(82.44, -1548.49, 28.0);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1526) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_A, 5000, 1);
  while ($.cs_time < 3011) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_E, 5000, 1);
  while ($.cs_time < 7026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_B, 5000, 1);
  while ($.cs_time < 10679) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_C, 5000, 1);
  while ($.cs_time < 14011) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_D, 5000, 1);
  while ($.cs_time < 16741) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE6_F, 5000, 1);
  while ($.cs_time < 20333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Game.SetSwatRequired(1 /* TRUE */);
  Streaming.RequestModel(car`ENFORCER`);
  Streaming.RequestModel(ped`SWAT`);
  Streaming.RequestModel(ped`COP`);
  Streaming.RequestModel(car`POLICE`);
  Streaming.RequestModel(car`SECURICAR`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`ENFORCER`)) || !(Streaming.HasModelLoaded(car`POLICE`)) || !(Streaming.HasModelLoaded(ped`COP`)) || !(Streaming.HasModelLoaded(ped`SWAT`)) || !(Streaming.HasModelLoaded(car`SECURICAR`))) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Audio.LoadMissionAudio(LO6_A);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.decoy_van_blip = Blip.AddForCoordOld(-1026.5, -73.5, 39.0, 0 /* RED */, 2 /* BLIP_ONLY */);
  $.decoy_van_blip.ChangeScale(3);
  while (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
    await asyncWait(0);
  }
  while (!($.player.LocateAnyMeans2D(-1026.5, -73.5, 200.0, 200.0, 0))) {
    await asyncWait(0);
  }
  Game.SetMaxWantedLevel(6);
  $.decoy_van = Car.Create(111 /* CAR_SECURICAR */, -1026.5, -73.5, 39.0);
  $.decoy_van.ChangeColor(0, 0);
  $.decoy_van.SetHeading(270.0);
  $.decoy_van.SetIdle();
  $.decoy_van.LockDoors(1 /* CARLOCK_UNLOCKED */);
  $.decoy_van.SetStrong(1 /* TRUE */);
  $.decoy_van_blip.Remove();
  $.decoy_van_blip = Blip.AddForCar($.decoy_van);
  $.swat_1 = Car.Create(110 /* CAR_ENFORCER */, -1005.5, 11.0, 44.0);
  $.swat_1.SetHeading(119.0);
  $.swat_1.SetIdle();
  $.ped_swat_1 = Char.CreateInsideCar($.swat_1, 6 /* PEDTYPE_COP */, ped`SWAT`);
  $.ped_swat_1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_1.SetIdle();
  $.ped_swat_1.SetObjNoObj();
  $.swat_1.SetMission(0 /* MISSION_NONE */);
  $.swat_2 = Car.Create(110 /* CAR_ENFORCER */, -1112.4, -46.4, 49.0);
  $.swat_2.SetHeading(212.0);
  $.swat_2.SetIdle();
  $.ped_swat_2 = Char.CreateInsideCar($.swat_2, 6 /* PEDTYPE_COP */, ped`SWAT`);
  $.ped_swat_2.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_2.SetIdle();
  $.ped_swat_2.SetObjNoObj();
  $.swat_2.SetMission(0 /* MISSION_NONE */);
  $.swat_3 = Car.Create(110 /* CAR_ENFORCER */, -1118.4, -63.6, 48.7);
  $.swat_3.SetHeading(321.0);
  $.swat_3.SetIdle();
  $.ped_swat_3 = Char.CreateInsideCar($.swat_3, 6 /* PEDTYPE_COP */, ped`SWAT`);
  $.ped_swat_3.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_3.SetIdle();
  $.ped_swat_3.SetObjNoObj();
  $.swat_3.SetMission(0 /* MISSION_NONE */);
  $.swat_4 = Car.Create(110 /* CAR_ENFORCER */, -963.3, -108.7, 34.7);
  $.swat_4.SetHeading(103.0);
  $.swat_4.SetIdle();
  $.ped_swat_4 = Char.CreateInsideCar($.swat_4, 6 /* PEDTYPE_COP */, ped`SWAT`);
  $.ped_swat_4.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_4.SetIdle();
  $.ped_swat_4.SetObjNoObj();
  $.swat_4.SetMission(0 /* MISSION_NONE */);
  $.swat_5 = Car.Create(110 /* CAR_ENFORCER */, -957.0, -111.0, 34.5);
  $.swat_5.SetHeading(108.5);
  $.swat_5.SetIdle();
  $.ped_swat_5 = Char.CreateInsideCar($.swat_5, 6 /* PEDTYPE_COP */, ped`SWAT`);
  $.ped_swat_5.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_5.SetIdle();
  $.ped_swat_5.SetObjNoObj();
  $.swat_5.SetMission(0 /* MISSION_NONE */);
  $.cop_1 = Car.Create(109 /* CAR_POLICE */, -983.0, -120.3, 33.6);
  $.cop_1.SetHeading(270.0);
  $.cop_1.SetIdle();
  $.ped_cop_1 = Char.CreateInsideCar($.cop_1, 6 /* PEDTYPE_COP */, ped`COP`);
  $.ped_cop_1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.ped_cop_1.SetIdle();
  $.ped_cop_1.SetObjNoObj();
  $.cop_1.SetMission(0 /* MISSION_NONE */);
  $.cop_2 = Car.Create(109 /* CAR_POLICE */, -1018.8, 4.4, 43.7);
  $.cop_2.SetHeading(262.0);
  $.cop_2.SetIdle();
  $.ped_cop_2 = Char.CreateInsideCar($.cop_2, 6 /* PEDTYPE_COP */, ped`COP`);
  $.ped_cop_2.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.ped_cop_2.SetIdle();
  $.ped_cop_2.SetObjNoObj();
  $.cop_2.SetMission(0 /* MISSION_NONE */);
  $.cop_3 = Car.Create(109 /* CAR_POLICE */, -1114.4, -50.0, 48.6);
  $.cop_3.SetHeading(202.0);
  $.cop_3.SetIdle();
  $.ped_cop_3 = Char.CreateInsideCar($.cop_3, 6 /* PEDTYPE_COP */, ped`COP`);
  $.ped_cop_3.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.ped_cop_3.SetIdle();
  $.ped_cop_3.SetObjNoObj();
  $.cop_3.SetMission(0 /* MISSION_NONE */);
  $.ped_swat_6 = Char.Create(6 /* PEDTYPE_COP */, ped`SWAT`, -1115.7, -63.9, 48.8);
  $.ped_swat_6.SetHeading(342.0);
  $.ped_swat_6.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_6.SetIdle();
  $.ped_swat_6.SetObjNoObj();
  $.ped_swat_7 = Char.Create(6 /* PEDTYPE_COP */, ped`SWAT`, -965.3, -111.2, 34.0);
  $.ped_swat_7.SetHeading(41.0);
  $.ped_swat_7.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_7.SetIdle();
  $.ped_swat_7.SetObjNoObj();
  $.ped_swat_8 = Char.Create(6 /* PEDTYPE_COP */, ped`SWAT`, -960.5, -113.0, 34.0);
  $.ped_swat_8.SetHeading(173.0);
  $.ped_swat_8.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_swat_8.SetIdle();
  $.ped_swat_8.SetObjNoObj();
  $.ped_cop_4 = Char.Create(6 /* PEDTYPE_COP */, ped`COP`, -1103.4, -47.8, 48.8);
  $.ped_cop_4.SetHeading(255.0);
  $.ped_cop_4.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_cop_4.SetIdle();
  $.ped_cop_4.SetObjNoObj();
  $.ped_cop_5 = Char.Create(6 /* PEDTYPE_COP */, ped`COP`, -984.0, -91.2, 36.0);
  $.ped_cop_5.SetHeading(339.0);
  $.ped_cop_5.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_cop_5.SetIdle();
  $.ped_cop_5.SetObjNoObj();
  $.ped_cop_6 = Char.Create(6 /* PEDTYPE_COP */, ped`COP`, -1005.0, 5.5, 43.8);
  $.ped_cop_6.SetHeading(169.0);
  $.ped_cop_6.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.ped_cop_6.SetIdle();
  $.ped_cop_6.SetObjNoObj();
  while (!($.player.IsInCar($.decoy_van))) {
    await asyncWait(0);
    if (Car.IsDead($.decoy_van)) {
      // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love6_failed"); // fallback: would break linear control flow
    }
  }
  $.decoy_van_blip.Remove();
  if (!(Char.IsDead($.ped_swat_6))) {
    $.ped_swat_6.SetObjKillPlayerAnyMeans($.player);
    $.ped_swat_6.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_swat_7))) {
    $.ped_swat_7.SetObjDestroyCar($.decoy_van);
    $.ped_swat_7.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_swat_8))) {
    $.ped_swat_8.SetObjKillPlayerAnyMeans($.player);
    $.ped_swat_8.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_cop_4))) {
    $.ped_cop_4.SetObjDestroyCar($.decoy_van);
    $.ped_cop_4.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_cop_5))) {
    $.ped_cop_5.SetObjKillPlayerAnyMeans($.player);
    $.ped_cop_5.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.ped_cop_6))) {
    $.ped_cop_6.SetObjDestroyCar($.decoy_van);
    $.ped_cop_6.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.swat_1))) {
    $.swat_1.SetCruiseSpeed(100.0);
    $.swat_1.SetDrivingStyle(2);
    $.swat_1.SetRamCar($.decoy_van);
    $.swat_1.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.swat_2))) {
    $.swat_2.SetCruiseSpeed(100.0);
    $.swat_2.SetDrivingStyle(2);
    $.swat_2.SetRamCar($.decoy_van);
    $.swat_2.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.swat_3))) {
    $.swat_3.SetCruiseSpeed(100.0);
    $.swat_3.SetDrivingStyle(2);
    $.swat_3.SetRamCar($.decoy_van);
    $.swat_3.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.swat_4))) {
    $.swat_4.SetCruiseSpeed(100.0);
    $.swat_4.SetDrivingStyle(2);
    $.swat_4.SetRamCar($.decoy_van);
    $.swat_4.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.swat_5))) {
    $.swat_5.SetCruiseSpeed(100.0);
    $.swat_5.SetDrivingStyle(2);
    $.swat_5.SetRamCar($.decoy_van);
    $.swat_5.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.cop_1))) {
    $.cop_1.SetCruiseSpeed(100.0);
    $.cop_1.SetDrivingStyle(2);
    $.cop_1.SetRamCar($.decoy_van);
    $.cop_1.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.cop_2))) {
    $.cop_2.SetCruiseSpeed(100.0);
    $.cop_2.SetDrivingStyle(2);
    $.cop_2.SetRamCar($.decoy_van);
    $.cop_2.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.cop_3))) {
    $.cop_3.SetCruiseSpeed(100.0);
    $.cop_3.SetDrivingStyle(2);
    $.cop_3.SetRamCar($.decoy_van);
    $.cop_3.MarkAsNoLongerNeeded();
  }
  $.player.AlterWantedLevel(6);
  Hud.DisplayTimer($.survival_time);
  Text.PrintNow(LOVE6_1, 5000, 1);
  if (Audio.HasMissionAudioLoaded()) {
    Audio.PlayMissionAudio();
  }
  $.decoy_van_health = $.decoy_van.GetHealth();
  $.decoy_van_health = $.decoy_van_health - 250;
  $.decoy_van_health = $.decoy_van_health * 100;
  $.decoy_van_health = $.decoy_van_health / 750;
  $.decoy_van_health2 = $.decoy_van_health;
  $.decoy_van_health = 100 - $.decoy_van_health2;
  if ($.decoy_van_health > 100) {
    $.decoy_van_health = 100;
  }
  Hud.DisplayCounterWithString($.decoy_van_health, 1 /* COUNTER_DISPLAY_BAR */, DAM);
  while ($.survival_time > 0) {
    await asyncWait(0);
    if (Car.IsDead($.decoy_van)) {
      // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love6_failed"); // fallback: would break linear control flow
    }
    $.player.AlterWantedLevel(6);
    $.decoy_van_health = $.decoy_van.GetHealth();
    $.decoy_van_health = $.decoy_van_health - 250;
    $.decoy_van_health = $.decoy_van_health * 100;
    $.decoy_van_health = $.decoy_van_health / 750;
    $.decoy_van_health2 = $.decoy_van_health;
    $.decoy_van_health = 100 - $.decoy_van_health2;
    if ($.decoy_van_health > 100) {
      $.decoy_van_health = 100;
    }
    if (!($.player.IsInCar($.decoy_van))) {
      if ($.get_in_van == 0) {
        $.out_of_car_timer_start = Clock.GetGameTimer();
        if ($.survival_time > 15000) {
          $.out_of_car_timer = 15000;
        }
        else {
          $.out_of_car_timer = $.survival_time;
        }
        $.decoy_van_blip = Blip.AddForCar($.decoy_van);
        $.get_in_van = 1;
      }
      $.out_of_car_timer_present = Clock.GetGameTimer();
      $.out_of_car_timer_diff = $.out_of_car_timer_present - $.out_of_car_timer_start;
      $.out_of_car_timer -= $.out_of_car_timer_diff;
      $.out_of_car_timer_start = $.out_of_car_timer_present;
      $.out_of_car_timer_secs = $.out_of_car_timer / 1000;
      Text.PrintWithNumberNow(LOVE6_3, $.out_of_car_timer_secs, 200, 1);
      if ($.out_of_car_timer_secs < 1) {
        Text.PrintNow(LOVE6_4, 3000, 1);
        // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love6_failed"); // fallback: would break linear control flow
      }
    }
    if ($.player.IsInCar($.decoy_van) && $.get_in_van == 1) {
      $.decoy_van_blip.Remove();
      $.get_in_van = 0;
    }
  }
  if ($.player.LocateAnyMeans2D(-1026.5, -73.5, 160.0, 160.0, 0)) {
    Text.PrintNow(LOVE6_2, 5000, 1);
    // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_love6_failed"); // fallback: would break linear control flow
  }
  // SCM GOTO → mission_love6_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love6_passed"); // fallback: would break linear control flow
}

async function mission_love6_failed() {
  Text.PrintBig(M_FAIL, 5000, 1);
  return;
}

async function mission_love6_passed() {
  $.flag_love_mission6_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 35000, 5000, 1);
  $.player.AddScore(35000);
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(LOVE6);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT love_mission7_loop
  return;
}

async function mission_cleanup_love6() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  $.decoy_van_blip.Remove();
  Hud.ClearTimer($.survival_time);
  Hud.ClearCounter($.decoy_van_health);
  Game.SetSwatRequired(0 /* FALSE */);
  Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`);
  Streaming.MarkModelAsNoLongerNeeded(car`POLICE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`COP`);
  Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`);
  Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`);
  Mission.Finish();
  return;
}

export async function love6() {
  // MissionBoundary
  // SCM GOSUB mission_start_love6
  await mission_start_love6();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love6_failed
    await mission_love6_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love6
  await mission_cleanup_love6();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT decoy_van swat_1 swat_2 swat_3 swat_4 swat_5 cop_1 cop_2 cop_3
  // VAR_INT ped_swat_1 ped_swat_2 ped_swat_3 ped_swat_4 ped_swat_5 ped_swat_6 ped_swat_7 ped_swat_8
  // VAR_INT ped_cop_1 ped_cop_2 ped_cop_3 ped_cop_4 ped_cop_5 ped_cop_6
  // VAR_INT survival_time decoy_van_blip get_in_van decoy_van_health decoy_van_health2
  // VAR_INT out_of_car_timer_present out_of_car_timer_start out_of_car_timer out_of_car_timer_diff out_of_car_timer_secs
}
