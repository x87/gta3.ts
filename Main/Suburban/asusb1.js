// Generated from Main/Suburban/asusb1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_as1() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_suburban_mission = 1;
  await asyncWait(0);
  Streaming.RequestModel(csitecutscene);
  Streaming.LoadSpecialCharacter(1, $.asuka);
  Streaming.LoadSpecialCharacter(2, $.miguel);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, ASUKAH);
  Streaming.LoadSpecialModel(hier`cutobj03`, WHIP);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(csitecutscene))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  Cutscene.Load(a6_bait);
  Streaming.Switch(1 /* ON */);
  Cutscene.SetOffset(369.02, -327.5, 18.46);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_asuka.SetAnim($.asuka);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_miguel.SetAnim($.miguel);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj02`);
  $.cs_asukahead.SetAnim($.asuka);
  $.cs_whip = CutsceneObject.Create(hier`cutobj03`);
  $.cs_whip.SetAnim(WHIP);
  $.player.SetCoordinates(373.7523, -327.2676, 17.1950);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3598) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS1_A", 10000, 1);
  while ($.cs_time < 6277) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS1_B", 10000, 1);
  while ($.cs_time < 12209) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS1_C", 10000, 1);
  while ($.cs_time < 17758) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS1_D", 10000, 1);
  while ($.cs_time < 22581) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS1_E", 10000, 1);
  while ($.cs_time < 29000) {
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
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(csitecutscene);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  World.SwitchRubbish(1 /* ON */);
  Streaming.Switch(1 /* ON */);
  World.SwitchProcessing(1 /* ON */);
  $.flag_yak1_dead = 0;
  $.flag_yak2_dead = 0;
  $.flag_yak3_dead = 0;
  $.flag_yak4_dead = 0;
  $.flag_yak5_dead = 0;
  $.flag_yak6_dead = 0;
  $.counter_yakuza_killed_as1 = 0;
  $.yak1_mission = 0;
  $.flag_cartel_a_created = 0;
  $.flag_cartel_b_created = 0;
  $.flag_cartel_d_created = 0;
  $.flag_yakuza_created_as1 = 0;
  $.cartel1_as1_dead = 0;
  $.cartel2_as1_dead = 0;
  $.cartel3_as1_dead = 0;
  $.cartel4_as1_dead = 0;
  $.cartel5_as1_dead = 0;
  $.cartel6_as1_dead = 0;
  $.cartel7_as1_dead = 0;
  $.cartel8_as1_dead = 0;
  $.cartel13_as1_dead = 0;
  $.cartel14_as1_dead = 0;
  $.cartel15_as1_dead = 0;
  $.cartel16_as1_dead = 0;
  $.counter_cartels_killed_as1 = 0;
  $.counter_asukas_revenge = 0;
  $.counter_bailouts = 0;
  $.flag_bailout_a = 0;
  $.flag_bailout_b = 0;
  $.flag_bailout_d = 0;
  $.yaks_a_killed_by_player = 0;
  $.yaks_b_killed_by_player = 0;
  $.yaks_killed_by_player = 0;
  $.timer_as3_now = 0;
  $.particle_time = 0;
  $.flag_particle = 0;
  $.flag_a_attack = 0;
  $.flag_b_attack = 0;
  $.flag_d_attack = 0;
  $.flag_wellybob = 0;
  $.killzone_cent_x = -1185.0;
  $.killzone_cent_y = 105.0;
  $.killzone_min_x = -1254.0;
  $.killzone_min_y = 85.0;
  $.killzone_max_x = -1178.0;
  $.killzone_max_y = 160.0;
  $.cartel_a_x = -996.85;
  $.cartel_a_y = -247.5;
  $.cartel_b_x = -877.0;
  $.cartel_b_y = 562.0;
  $.cartel_d_x = -459.0;
  $.cartel_d_y = 251.5;
  $.yak1_x = -1168.0;
  $.yak1_y = 110.26;
  $.yak2_x = -1185.0;
  $.yak2_y = 90.4;
  $.yak3_x = -1205.24;
  $.yak3_y = 94.11;
  $.yak4_x = -1160.0;
  $.yak4_y = 119.57;
  $.yak5_x = -1173.3;
  $.yak5_y = 95.5;
  $.yak6_x = -1184.5;
  $.yak6_y = 122.6;
  $.car_a_as1_x = 0.0;
  $.car_a_as1_y = 0.0;
  $.car_a_as1_z = 0.0;
  $.car_b_as1_x = 0.0;
  $.car_b_as1_y = 0.0;
  $.car_b_as1_z = 0.0;
  $.car_d_as1_x = 0.0;
  $.car_d_as1_y = 0.0;
  $.car_d_as1_z = 0.0;
  $.blip_cartel_a_as1 = Blip.AddForCoord($.cartel_a_x, $.cartel_a_y, -100.0);
  $.blip_cartel_b_as1 = Blip.AddForCoord($.cartel_b_x, $.cartel_b_y, -100.0);
  $.blip_cartel_d_as1 = Blip.AddForCoord($.cartel_d_x, $.cartel_d_y, -100.0);
  $.blip_killzone = Blip.AddForCoord($.killzone_cent_x, $.killzone_cent_y, -100.0);
  $.blip_killzone.ChangeColor(4);
  Hud.DisplayCounterWithString($.counter_cartels_killed_as1, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  Path.SwitchRoadsOff($.killzone_min_x, $.killzone_min_y, 65.0, -1170.0, $.killzone_max_y, 85.0);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_YAKUZA_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_YAKUZA_B`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`SENTINEL`);
  while (!(Streaming.HasModelLoaded(car`SENTINEL`))) {
    await asyncWait(0);
  }
  Player.ResetNumOfModelsKilled();
  while ($.counter_cartels_killed_as1 < 12) {
    await asyncWait(0);
    [$.player_X, $.player_Y, $.player_Z] = $.player.GetCoordinates();
    if ($.player.LocateAnyMeans3D($.killzone_min_x, $.killzone_min_y, 65.0, $.killzone_max_x, $.killzone_max_y, 75.0, 0 /* false */)) {
      $.flag_wellybob = 1;
    }
    else {
      $.flag_wellybob = 0;
    }
    // SCM GOSUB yak_deaths
    await yak_deaths();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.counter_bailouts > $.counter_asukas_revenge) {
      Text.PrintNow("AS1_H", 3000, 1);
      // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as1_failed"); // fallback: would break linear control flow
    }
    if ($.counter_yakuza_killed_as1 > 5) {
      Text.PrintNow("AS1_G", 3000, 1);
      // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as1_failed"); // fallback: would break linear control flow
    }
    // SCM GOSUB cartel_deaths
    await cartel_deaths();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB vegetables
    await vegetables();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB unhappy_car_check
    await unhappy_car_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_yakuza_created_as1 == 0) {
      if ($.player.IsInZone("SUB_IND") || $.player.IsInZone("BIG_DAM")) {
        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
          if ($.flag_yak1_dead == 0) {
            $.yakuza1_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, $.yak1_x, $.yak1_y, 70.0);
            $.yakuza1_as1.SetHeading(130.0);
            $.yakuza1_as1.ClearThreatSearch();
            $.yakuza1_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza1_as1.SetThreatSearch(6 /* THREAT_COP */);
            $.yakuza1_as1.AddArmor(100);
            $.yakuza1_as1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.yakuza1_as1.SetStayInSamePlace(1 /* true */);
          }
          if ($.flag_yak2_dead == 0) {
            $.yakuza2_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, $.yak2_x, $.yak2_y, 72.06);
            $.yakuza2_as1.SetHeading(45.0);
            $.yakuza2_as1.ClearThreatSearch();
            $.yakuza2_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza2_as1.SetThreatSearch(6 /* THREAT_COP */);
            $.yakuza2_as1.AddArmor(100);
            $.yakuza2_as1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
            $.yakuza2_as1.SetStayInSamePlace(1 /* true */);
          }
          if ($.flag_yak3_dead == 0) {
            $.yakuza3_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, $.yak3_x, $.yak3_y, 72.06);
            $.yakuza3_as1.SetHeading(295.0);
            $.yakuza3_as1.ClearThreatSearch();
            $.yakuza3_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza3_as1.SetThreatSearch(6 /* THREAT_COP */);
            $.yakuza3_as1.AddArmor(100);
            $.yakuza3_as1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.yakuza3_as1.SetStayInSamePlace(1 /* true */);
          }
          if ($.flag_yak4_dead == 0) {
            $.yakuza4_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, $.yak4_x, $.yak4_y, 72.06);
            $.yakuza4_as1.SetHeading(130.0);
            $.yakuza4_as1.ClearThreatSearch();
            $.yakuza4_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza4_as1.SetThreatSearch(6 /* THREAT_COP */);
            $.yakuza4_as1.AddArmor(100);
            $.yakuza4_as1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.yakuza4_as1.SetStayInSamePlace(1 /* true */);
          }
          if ($.flag_yak5_dead == 0) {
            $.yakuza5_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, $.yak5_x, $.yak5_y, 72.44);
            $.yakuza5_as1.SetHeading(60.0);
            $.yakuza5_as1.ClearThreatSearch();
            $.yakuza5_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza5_as1.SetThreatSearch(21 /* THREAT_COP_CAR */);
            $.yakuza5_as1.AddArmor(100);
            $.yakuza5_as1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.yakuza5_as1.SetStayInSamePlace(1 /* true */);
          }
          if ($.flag_yak6_dead == 0) {
            $.yakuza6_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, $.yak6_x, $.yak6_y, 68.76);
            $.yakuza6_as1.SetHeading(180.0);
            $.yakuza6_as1.ClearThreatSearch();
            $.yakuza6_as1.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
            $.yakuza6_as1.SetThreatSearch(21 /* THREAT_COP_CAR */);
            $.yakuza6_as1.AddArmor(100);
            $.yakuza6_as1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
            $.yakuza6_as1.SetStayInSamePlace(1 /* true */);
          }
          $.flag_yakuza_created_as1 = 1;
        }
      }
    }
    if ($.flag_yakuza_created_as1 == 1) {
      if (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
        $.yakuza1_as1.Delete();
        $.yakuza2_as1.Delete();
        $.yakuza3_as1.Delete();
        $.yakuza4_as1.Delete();
        $.yakuza5_as1.Delete();
        $.yakuza6_as1.Delete();
        $.flag_yakuza_created_as1 = 0;
      }
    }
    if ($.flag_cartel_a_created == 0) {
      if ($.player.IsInZone("SUB_IND") || $.player.IsInZone("AIRPORT")) {
        $.cartel_car_a_as1 = Car.Create(88 /* CAR_SENTINEL */, $.cartel_a_x, $.cartel_a_y, 34.0);
        $.cartel_car_a_as1.SetHeading(270.0);
        $.cartel_car_a_as1.SetUpsidedownNotDamaged(1 /* true */);
        $.cartel1_as1 = Char.CreateInsideCar($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
        $.cartel2_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
        $.cartel3_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1);
        $.cartel4_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 2);
        $.cartel_car_a_as1.SetIdle();
        $.flag_cartel_a_created = 1;
      }
    }
    if ($.flag_cartel_a_created == 1) {
      if ($.flag_a_attack == 0) {
        if ($.player.LocateAnyMeans2D($.cartel_a_x, $.cartel_a_y, 30.0, 30.0, 0 /* false */)) {
          if (!(Car.IsDead($.cartel_car_a_as1))) {
            $.cartel_car_a_as1.SetStrong(1 /* TRUE */);
            $.cartel_car_a_as1.LockDoors(2 /* CARLOCK_LOCKED */);
            $.cartel_car_a_as1.SetOnlyDamagedByPlayer(1 /* True */);
            $.blip_cartel_a_as1.Remove();
            $.cartel_car_a_as1.SetCruiseSpeed(50.0);
            $.cartel_car_a_as1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cartel_car_a_as1.SetDrivingStyle(2);
            $.blip_cartelcar_a = Blip.AddForCar($.cartel_car_a_as1);
            $.cartel_car_a_as1.SetStaysInCurrentLevel(0 /* FALSE */);
            $.flag_a_attack = 1;
          }
        }
        else {
          if (Car.IsDead($.cartel_car_a_as1)) {
            $.blip_cartel_a_as1.Remove();
          }
        }
      }
      if (Car.IsDead($.cartel_car_a_as1) && $.flag_a_attack == 0) {
        Text.PrintNow("AS1_H", 3000, 1);
        // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_as1_failed"); // fallback: would break linear control flow
      }
      if (!(Car.IsDead($.cartel_car_a_as1))) {
        if ($.flag_bailout_a == 0 && $.flag_a_attack == 1) {
          if (!($.cartel_car_a_as1.Locate2D($.player_X, $.player_Y, 40.0, 40.0, 0 /* false */))) {
            $.cartel_car_a_as1.SetCruiseSpeed(30.0);
          }
          else {
            $.cartel_car_a_as1.SetCruiseSpeed(60.0);
          }
          if (!($.cartel_car_a_as1.IsHealthGreater(250))) {
            // SCM GOSUB bailout_a
            await bailout_a();
            // fallback if label was not emitted as async function: no-op continues linearly
          }
          if (!($.player.IsInAnyCar()) && $.flag_bailout_a == 0 && !(Car.IsDead($.cartel_car_a_as1))) {
            if ($.flag_wellybob == 0) {
              [$.player_X, $.player_Y, $.player_Z] = $.player.GetCoordinates();
              if ($.cartel_car_a_as1.Locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, 0 /* false */)) {
                // SCM GOSUB bailout_a
                await bailout_a();
                // fallback if label was not emitted as async function: no-op continues linearly
              }
            }
          }
          if (!(Car.IsDead($.cartel_car_a_as1))) {
            if ($.cartel_car_a_as1.Locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, 0 /* false */) && $.flag_bailout_a == 0) {
              $.cartel_car_a_as1.SetOnlyDamagedByPlayer(0 /* false */);
              ++$.counter_asukas_revenge;
              // SCM GOSUB bailout_a
              await bailout_a();
              // fallback if label was not emitted as async function: no-op continues linearly
            }
          }
        }
      }
      if ($.flag_bailout_a == 1) {
        if (!(Char.IsDead($.cartel1_as1))) {
          $.cartel1_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel2_as1))) {
          $.cartel2_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel3_as1))) {
          $.cartel3_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel4_as1))) {
          if ($.cartel4_as1.LocateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, 0 /* false */) && !(Char.IsDead($.yakuza1_as1))) {
            $.cartel4_as1.SetObjKillCharAnyMeans($.yakuza1_as1);
          }
          else {
            $.cartel4_as1.SetObjKillPlayerAnyMeans($.player);
          }
        }
      }
    }
    if ($.flag_cartel_b_created == 0) {
      if ($.player.IsInZone("BIG_DAM")) {
        $.cartel_car_b_as1 = Car.Create(88 /* CAR_SENTINEL */, $.cartel_b_x, $.cartel_b_y, 74.2);
        $.cartel_car_b_as1.SetUpsidedownNotDamaged(1 /* true */);
        $.cartel_car_b_as1.SetHeading(180.0);
        $.cartel5_as1 = Char.CreateInsideCar($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
        $.cartel6_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
        $.cartel7_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
        $.cartel8_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 2);
        $.cartel_car_b_as1.SetIdle();
        $.flag_cartel_b_created = 1;
      }
    }
    if ($.flag_cartel_b_created == 1) {
      if ($.flag_b_attack == 0) {
        if ($.player.LocateAnyMeans2D($.cartel_b_x, $.cartel_b_y, 40.0, 40.0, 0 /* false */)) {
          if (!(Car.IsDead($.cartel_car_b_as1))) {
            $.cartel_car_b_as1.SetStrong(1 /* TRUE */);
            $.cartel_car_b_as1.LockDoors(2 /* CARLOCK_LOCKED */);
            $.cartel_car_b_as1.SetOnlyDamagedByPlayer(1 /* True */);
            $.blip_cartel_b_as1.Remove();
            $.cartel_car_b_as1.SetCruiseSpeed(50.0);
            $.cartel_car_b_as1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cartel_car_b_as1.SetDrivingStyle(2);
            $.blip_cartelcar_b = Blip.AddForCar($.cartel_car_b_as1);
            $.cartel_car_b_as1.SetStaysInCurrentLevel(0 /* FALSE */);
            $.flag_b_attack = 1;
          }
        }
        else {
          if (Car.IsDead($.cartel_car_b_as1)) {
            $.blip_cartel_b_as1.Remove();
          }
        }
      }
      if (Car.IsDead($.cartel_car_b_as1) && $.flag_b_attack == 0) {
        Text.PrintNow("AS1_H", 3000, 1);
        // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_as1_failed"); // fallback: would break linear control flow
      }
      if (!(Car.IsDead($.cartel_car_b_as1))) {
        if ($.flag_bailout_b == 0 && $.flag_b_attack == 1) {
          if (!($.cartel_car_b_as1.Locate2D($.player_X, $.player_Y, 40.0, 40.0, 0 /* false */))) {
            $.cartel_car_b_as1.SetCruiseSpeed(30.0);
          }
          else {
            $.cartel_car_b_as1.SetCruiseSpeed(60.0);
          }
          if (!($.cartel_car_b_as1.IsHealthGreater(250))) {
            // SCM GOSUB bailout_b
            await bailout_b();
            // fallback if label was not emitted as async function: no-op continues linearly
          }
          if (!($.player.IsInAnyCar()) && $.flag_bailout_b == 0 && !(Car.IsDead($.cartel_car_b_as1))) {
            if ($.flag_wellybob == 0) {
              [$.player_X, $.player_Y, $.player_Z] = $.player.GetCoordinates();
              if ($.cartel_car_b_as1.Locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, 0 /* false */)) {
                // SCM GOSUB bailout_b
                await bailout_b();
                // fallback if label was not emitted as async function: no-op continues linearly
              }
            }
          }
          if (!(Car.IsDead($.cartel_car_b_as1))) {
            if ($.cartel_car_b_as1.Locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, 0 /* false */) && $.flag_bailout_b == 0) {
              $.cartel_car_b_as1.SetOnlyDamagedByPlayer(0 /* false */);
              ++$.counter_asukas_revenge;
              // SCM GOSUB bailout_b
              await bailout_b();
              // fallback if label was not emitted as async function: no-op continues linearly
            }
          }
        }
      }
      if ($.flag_bailout_b == 1) {
        if (!(Char.IsDead($.cartel5_as1))) {
          $.cartel5_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel6_as1))) {
          $.cartel6_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel7_as1))) {
          $.cartel7_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel8_as1))) {
          if ($.cartel8_as1.LocateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, 0 /* false */) && !(Char.IsDead($.yakuza4_as1))) {
            $.cartel8_as1.SetObjKillCharAnyMeans($.yakuza4_as1);
          }
          else {
            $.cartel8_as1.SetObjKillPlayerAnyMeans($.player);
          }
        }
      }
    }
    if ($.flag_cartel_d_created == 0) {
      if ($.player.LocateAnyMeans3D($.cartel_d_x, $.cartel_d_y, 70.0, 70.0, 70.0, 20.0, 0 /* false */)) {
        $.cartel_car_d_as1 = Car.Create(88 /* CAR_SENTINEL */, $.cartel_d_x, $.cartel_d_y, 70.0);
        $.cartel_car_d_as1.SetUpsidedownNotDamaged(1 /* true */);
        $.cartel_car_d_as1.SetHeading(180.0);
        $.cartel_car_d_as1.SetIdle();
        $.cartel13_as1 = Char.CreateInsideCar($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
        $.cartel14_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
        $.cartel15_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
        $.cartel16_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 2);
        $.cartel_car_d_as1.SetIdle();
        $.flag_cartel_d_created = 1;
      }
    }
    if ($.flag_cartel_d_created == 1) {
      if ($.flag_d_attack == 0) {
        if ($.player.LocateAnyMeans3D($.cartel_d_x, $.cartel_d_y, 70.0, 30.0, 30.0, 20.0, 0 /* false */)) {
          if (!(Car.IsDead($.cartel_car_d_as1))) {
            $.cartel_car_d_as1.SetStrong(1 /* TRUE */);
            $.cartel_car_d_as1.LockDoors(2 /* CARLOCK_LOCKED */);
            $.cartel_car_d_as1.SetOnlyDamagedByPlayer(1 /* True */);
            $.blip_cartel_d_as1.Remove();
            $.cartel_car_d_as1.SetCruiseSpeed(50.0);
            $.cartel_car_d_as1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
            $.cartel_car_d_as1.SetDrivingStyle(2);
            $.blip_cartelcar_d = Blip.AddForCar($.cartel_car_d_as1);
            $.cartel_car_d_as1.SetStaysInCurrentLevel(0 /* FALSE */);
            $.flag_d_attack = 1;
          }
        }
        else {
          if (Car.IsDead($.cartel_car_d_as1)) {
            $.blip_cartel_d_as1.Remove();
          }
        }
      }
      if (Car.IsDead($.cartel_car_d_as1) && $.flag_d_attack == 0) {
        Text.PrintNow("AS1_H", 3000, 1);
        // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_as1_failed"); // fallback: would break linear control flow
      }
      if (!(Car.IsDead($.cartel_car_d_as1))) {
        if ($.flag_bailout_d == 0 && $.flag_d_attack == 1) {
          if (!($.cartel_car_d_as1.Locate2D($.player_X, $.player_Y, 40.0, 40.0, 0 /* false */))) {
            $.cartel_car_d_as1.SetCruiseSpeed(30.0);
          }
          else {
            $.cartel_car_d_as1.SetCruiseSpeed(60.0);
          }
          if (!($.cartel_car_d_as1.IsHealthGreater(250))) {
            // SCM GOSUB bailout_d
            await bailout_d();
            // fallback if label was not emitted as async function: no-op continues linearly
          }
          if (!($.player.IsInAnyCar()) && $.flag_bailout_d == 0 && !(Car.IsDead($.cartel_car_d_as1))) {
            if ($.flag_wellybob == 0) {
              [$.player_X, $.player_Y, $.player_Z] = $.player.GetCoordinates();
              if ($.cartel_car_d_as1.Locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, 0 /* false */)) {
                // SCM GOSUB bailout_d
                await bailout_d();
                // fallback if label was not emitted as async function: no-op continues linearly
              }
            }
          }
          if (!(Car.IsDead($.cartel_car_d_as1))) {
            if ($.cartel_car_d_as1.Locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, 0 /* false */) && $.flag_bailout_d == 0) {
              $.cartel_car_d_as1.SetOnlyDamagedByPlayer(0 /* false */);
              ++$.counter_asukas_revenge;
              // SCM GOSUB bailout_d
              await bailout_d();
              // fallback if label was not emitted as async function: no-op continues linearly
            }
          }
        }
      }
      if ($.flag_bailout_d == 1) {
        if (!(Char.IsDead($.cartel13_as1))) {
          $.cartel13_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel14_as1))) {
          $.cartel14_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel15_as1))) {
          $.cartel15_as1.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.cartel16_as1))) {
          if ($.cartel16_as1.LocateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, 0 /* false */) && !(Char.IsDead($.yakuza4_as1))) {
            $.cartel16_as1.SetObjKillCharAnyMeans($.yakuza4_as1);
          }
          else {
            $.cartel16_as1.SetObjKillPlayerAnyMeans($.player);
          }
        }
      }
    }
  }
  if ($.counter_asukas_revenge > 2) {
    // SCM GOTO → mission_as1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_as1_passed"); // fallback: would break linear control flow
  }
  else {
    Text.PrintNow("AS1_H", 3000, 1);
  }
}

async function mission_as1_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  if ($.player.HasBeenArrested()) {
    Restart.OverridePolice(2 /* LEVEL_COMMERCIAL */);
  }
  if ($.player.IsDead()) {
    Restart.OverrideHospital(2 /* LEVEL_COMMERCIAL */);
  }
  return;
}

async function mission_as1_passed() {
  $.flag_asuka_suburban_mission1_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 35000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(35000);
  Stat.RegisterMissionPassed(AS1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT asuka_suburban_mission2_loop
  return;
}

async function mission_cleanup_as1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_suburban_mission = 0;
  Hud.ClearCounter($.counter_cartels_killed_as1);
  // SCM GOSUB blip_removal
  await blip_removal();
  // fallback if label was not emitted as async function: no-op continues linearly
  $.blip_cartel_a_as1.Remove();
  $.blip_cartel_b_as1.Remove();
  $.blip_cartel_d_as1.Remove();
  $.blip_killzone.Remove();
  $.blip_cartelcar_a.Remove();
  $.blip_cartelcar_b.Remove();
  $.blip_cartelcar_d.Remove();
  $.cartel_car_a_as1.MarkAsNoLongerNeeded();
  $.cartel_car_b_as1.MarkAsNoLongerNeeded();
  $.cartel_car_d_as1.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Mission.Finish();
  return;
}

async function yak_deaths() {
  if ($.flag_yakuza_created_as1 == 1) {
    if (Char.IsDead($.yakuza1_as1)) {
      if ($.flag_yak1_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak1_dead = 1;
      }
    }
    if (Char.IsDead($.yakuza2_as1)) {
      if ($.flag_yak2_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak2_dead = 1;
      }
    }
    if (Char.IsDead($.yakuza3_as1)) {
      if ($.flag_yak3_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak3_dead = 1;
      }
    }
    if (Char.IsDead($.yakuza4_as1)) {
      if ($.flag_yak4_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak4_dead = 1;
      }
    }
    if (Char.IsDead($.yakuza5_as1)) {
      if ($.flag_yak5_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak5_dead = 1;
      }
    }
    if (Char.IsDead($.yakuza6_as1)) {
      if ($.flag_yak6_dead == 0) {
        ++$.counter_yakuza_killed_as1;
        $.flag_yak6_dead = 1;
      }
    }
    $.yaks_a_killed_by_player = Player.GetNumOfModelsKilled(ped`GANG_YAKUZA_A`);
    $.yaks_b_killed_by_player = Player.GetNumOfModelsKilled(ped`GANG_YAKUZA_B`);
    $.yaks_killed_by_player = $.yaks_a_killed_by_player + $.yaks_b_killed_by_player;
    if ($.yaks_killed_by_player > 2) {
      if (!(Char.IsDead($.yakuza1_as1))) {
        $.yakuza1_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
      if (!(Char.IsDead($.yakuza2_as1))) {
        $.yakuza2_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
      if (!(Char.IsDead($.yakuza3_as1))) {
        $.yakuza3_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
      if (!(Char.IsDead($.yakuza4_as1))) {
        $.yakuza4_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
      if (!(Char.IsDead($.yakuza5_as1))) {
        $.yakuza5_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
      if (!(Char.IsDead($.yakuza6_as1))) {
        $.yakuza6_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      }
    }
  }
  return;
}

async function bailout_a() {
  if ($.flag_bailout_a == 0) {
    $.flag_bailout_a = 1;
    ++$.counter_bailouts;
    $.blip_cartelcar_a.Remove();
    $.cartel_car_a_as1.LockDoors(1 /* CARLOCK_UNLOCKED */);
    if (!(Char.IsDead($.cartel1_as1)) && !(Car.IsDead($.cartel_car_a_as1))) {
      $.cartel1_as1.SetObjLeaveCar($.cartel_car_a_as1);
      while ($.cartel1_as1.IsInCar($.cartel_car_a_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel1_as1)) {
          // SCM GOTO → c_a_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_2"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_a_as1)) {
          // SCM GOTO → c_a_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_2"); // fallback: would break linear control flow
        }
      }
      $.cartel1_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel1_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel1 = Blip.AddForChar($.cartel1_as1);
    }
    // SCM label c_a_2
    if (!(Char.IsDead($.cartel2_as1)) && !(Car.IsDead($.cartel_car_a_as1))) {
      $.cartel2_as1.SetObjLeaveCar($.cartel_car_a_as1);
      while ($.cartel2_as1.IsInCar($.cartel_car_a_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel2_as1)) {
          // SCM GOTO → c_a_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_3"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_a_as1)) {
          // SCM GOTO → c_a_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_3"); // fallback: would break linear control flow
        }
      }
      $.cartel2_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel2_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel2 = Blip.AddForChar($.cartel2_as1);
    }
    // SCM label c_a_3
    if (!(Char.IsDead($.cartel3_as1)) && !(Car.IsDead($.cartel_car_a_as1))) {
      $.cartel3_as1.SetObjLeaveCar($.cartel_car_a_as1);
      while ($.cartel3_as1.IsInCar($.cartel_car_a_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel3_as1)) {
          // SCM GOTO → c_a_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_4"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_a_as1)) {
          // SCM GOTO → c_a_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_4"); // fallback: would break linear control flow
        }
      }
      $.cartel3_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel3_as1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
      $.blip_cartel3 = Blip.AddForChar($.cartel3_as1);
    }
    // SCM label c_a_4
    if (!(Char.IsDead($.cartel4_as1)) && !(Car.IsDead($.cartel_car_a_as1))) {
      $.cartel4_as1.SetObjLeaveCar($.cartel_car_a_as1);
      while ($.cartel4_as1.IsInCar($.cartel_car_a_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel4_as1)) {
          // SCM GOTO → c_a_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_5"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_a_as1)) {
          // SCM GOTO → c_a_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_a_5"); // fallback: would break linear control flow
        }
      }
      $.cartel4_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel4_as1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
      $.blip_cartel4 = Blip.AddForChar($.cartel4_as1);
    }
    // SCM label c_a_5
  }
  return;
}

async function bailout_b() {
  if ($.flag_bailout_b == 0) {
    $.flag_bailout_b = 1;
    ++$.counter_bailouts;
    $.blip_cartelcar_b.Remove();
    $.cartel_car_b_as1.LockDoors(1 /* CARLOCK_UNLOCKED */);
    if (!(Char.IsDead($.cartel5_as1)) && !(Car.IsDead($.cartel_car_b_as1))) {
      $.cartel5_as1.SetObjLeaveCar($.cartel_car_b_as1);
      while ($.cartel5_as1.IsInCar($.cartel_car_b_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel5_as1)) {
          // SCM GOTO → c_b_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_2"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_b_as1)) {
          // SCM GOTO → c_b_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_2"); // fallback: would break linear control flow
        }
      }
      $.cartel5_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel5_as1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 90);
      $.blip_cartel5 = Blip.AddForChar($.cartel5_as1);
    }
    // SCM label c_b_2
    if (!(Char.IsDead($.cartel6_as1)) && !(Car.IsDead($.cartel_car_b_as1))) {
      $.cartel6_as1.SetObjLeaveCar($.cartel_car_b_as1);
      while ($.cartel6_as1.IsInCar($.cartel_car_b_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel6_as1)) {
          // SCM GOTO → c_b_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_3"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_b_as1)) {
          // SCM GOTO → c_b_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_3"); // fallback: would break linear control flow
        }
      }
      $.cartel6_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel6_as1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 90);
      $.blip_cartel6 = Blip.AddForChar($.cartel6_as1);
    }
    // SCM label c_b_3
    if (!(Char.IsDead($.cartel7_as1)) && !(Car.IsDead($.cartel_car_b_as1))) {
      $.cartel7_as1.SetObjLeaveCar($.cartel_car_b_as1);
      while ($.cartel7_as1.IsInCar($.cartel_car_b_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel7_as1)) {
          // SCM GOTO → c_b_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_4"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_b_as1)) {
          // SCM GOTO → c_b_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_4"); // fallback: would break linear control flow
        }
      }
      $.cartel7_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel7_as1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 90);
      $.blip_cartel7 = Blip.AddForChar($.cartel7_as1);
    }
    // SCM label c_b_4
    if (!(Char.IsDead($.cartel8_as1)) && !(Car.IsDead($.cartel_car_b_as1))) {
      $.cartel8_as1.SetObjLeaveCar($.cartel_car_b_as1);
      while ($.cartel8_as1.IsInCar($.cartel_car_b_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel8_as1)) {
          // SCM GOTO → c_b_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_5"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_b_as1)) {
          // SCM GOTO → c_b_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_b_5"); // fallback: would break linear control flow
        }
      }
      $.cartel8_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel8_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel8 = Blip.AddForChar($.cartel8_as1);
    }
    // SCM label c_b_5
  }
  return;
}

async function bailout_d() {
  if ($.flag_bailout_d == 0) {
    $.flag_bailout_d = 1;
    ++$.counter_bailouts;
    $.blip_cartelcar_d.Remove();
    $.cartel_car_d_as1.LockDoors(1 /* CARLOCK_UNLOCKED */);
    if (!(Char.IsDead($.cartel13_as1)) && !(Car.IsDead($.cartel_car_d_as1))) {
      $.cartel13_as1.SetObjLeaveCar($.cartel_car_d_as1);
      while ($.cartel13_as1.IsInCar($.cartel_car_d_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel13_as1)) {
          // SCM GOTO → c_d_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_2"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_d_as1)) {
          // SCM GOTO → c_d_2 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_2"); // fallback: would break linear control flow
        }
      }
      $.cartel13_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel13_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel13 = Blip.AddForChar($.cartel13_as1);
    }
    // SCM label c_d_2
    if (!(Char.IsDead($.cartel14_as1)) && !(Car.IsDead($.cartel_car_d_as1))) {
      $.cartel14_as1.SetObjLeaveCar($.cartel_car_d_as1);
      while ($.cartel14_as1.IsInCar($.cartel_car_d_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel14_as1)) {
          // SCM GOTO → c_d_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_3"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_d_as1)) {
          // SCM GOTO → c_d_3 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_3"); // fallback: would break linear control flow
        }
      }
      $.cartel14_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel14_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel14 = Blip.AddForChar($.cartel14_as1);
    }
    // SCM label c_d_3
    if (!(Char.IsDead($.cartel15_as1)) && !(Car.IsDead($.cartel_car_d_as1))) {
      $.cartel15_as1.SetObjLeaveCar($.cartel_car_d_as1);
      while ($.cartel15_as1.IsInCar($.cartel_car_d_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel15_as1)) {
          // SCM GOTO → c_d_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_4"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_d_as1)) {
          // SCM GOTO → c_d_4 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_4"); // fallback: would break linear control flow
        }
      }
      $.cartel15_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel15_as1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
      $.blip_cartel15 = Blip.AddForChar($.cartel15_as1);
    }
    // SCM label c_d_4
    if (!(Char.IsDead($.cartel16_as1)) && !(Car.IsDead($.cartel_car_d_as1))) {
      $.cartel16_as1.SetObjLeaveCar($.cartel_car_d_as1);
      while ($.cartel16_as1.IsInCar($.cartel_car_d_as1)) {
        await asyncWait(0);
        if (Char.IsDead($.cartel16_as1)) {
          // SCM GOTO → c_d_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_5"); // fallback: would break linear control flow
        }
        if (Car.IsDead($.cartel_car_d_as1)) {
          // SCM GOTO → c_d_5 (not lowered; manual jump required)
          throw new Error("unresolved GOTO c_d_5"); // fallback: would break linear control flow
        }
      }
      $.cartel16_as1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.cartel16_as1.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.blip_cartel16 = Blip.AddForChar($.cartel16_as1);
    }
    // SCM label c_d_5
  }
  return;
}

async function cartel_deaths() {
  if ($.flag_cartel_a_created == 1) {
    if ($.cartel1_as1_dead == 0) {
      if (Char.IsDead($.cartel1_as1)) {
        if ($.cartel1_as1_dead == 0) {
          $.cartel1_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel1.Remove();
        }
      }
    }
    if ($.cartel2_as1_dead == 0) {
      if (Char.IsDead($.cartel2_as1)) {
        if ($.cartel2_as1_dead == 0) {
          $.cartel2_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel2.Remove();
        }
      }
    }
    if ($.cartel3_as1_dead == 0) {
      if (Char.IsDead($.cartel3_as1)) {
        if ($.cartel3_as1_dead == 0) {
          $.cartel3_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel3.Remove();
          if ($.yak1_mission == 1) {
            $.yak1_mission = 0;
          }
        }
      }
    }
    if ($.cartel4_as1_dead == 0) {
      if (Char.IsDead($.cartel4_as1)) {
        if ($.cartel4_as1_dead == 0) {
          $.cartel4_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel4.Remove();
        }
      }
    }
    if ($.cartel4_as1_dead == 1) {
      if ($.cartel3_as1_dead == 1) {
        if ($.cartel2_as1_dead == 1) {
          if ($.cartel1_as1_dead == 1) {
            if ($.flag_bailout_a == 0) {
              ++$.counter_bailouts;
              $.flag_bailout_a = 1;
            }
          }
        }
      }
    }
  }
  if ($.flag_cartel_b_created == 1) {
    if ($.cartel5_as1_dead == 0) {
      if (Char.IsDead($.cartel5_as1)) {
        if ($.cartel5_as1_dead == 0) {
          $.cartel5_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel5.Remove();
        }
      }
    }
    if ($.cartel6_as1_dead == 0) {
      if (Char.IsDead($.cartel6_as1)) {
        if ($.cartel6_as1_dead == 0) {
          $.cartel6_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel6.Remove();
        }
      }
    }
    if ($.cartel7_as1_dead == 0) {
      if (Char.IsDead($.cartel7_as1)) {
        if ($.cartel7_as1_dead == 0) {
          $.cartel7_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel7.Remove();
        }
      }
    }
    if ($.cartel8_as1_dead == 0) {
      if (Char.IsDead($.cartel8_as1)) {
        if ($.cartel8_as1_dead == 0) {
          $.cartel8_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel8.Remove();
          if ($.yak1_mission == 2) {
            $.yak1_mission = 0;
          }
        }
      }
    }
    if ($.cartel8_as1_dead == 1) {
      if ($.cartel7_as1_dead == 1) {
        if ($.cartel6_as1_dead == 1) {
          if ($.cartel5_as1_dead == 1) {
            if ($.flag_bailout_b == 0) {
              ++$.counter_bailouts;
              $.flag_bailout_b = 1;
            }
          }
        }
      }
    }
  }
  if ($.flag_cartel_d_created == 1) {
    if ($.cartel13_as1_dead == 0) {
      if (Char.IsDead($.cartel13_as1)) {
        if ($.cartel13_as1_dead == 0) {
          $.cartel13_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel13.Remove();
        }
      }
    }
    if ($.cartel14_as1_dead == 0) {
      if (Char.IsDead($.cartel14_as1)) {
        if ($.cartel14_as1_dead == 0) {
          $.cartel14_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel14.Remove();
        }
      }
    }
    if ($.cartel15_as1_dead == 0) {
      if (Char.IsDead($.cartel15_as1)) {
        if ($.cartel15_as1_dead == 0) {
          $.cartel15_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel15.Remove();
        }
      }
    }
    if ($.cartel16_as1_dead == 0) {
      if (Char.IsDead($.cartel16_as1)) {
        if ($.cartel16_as1_dead == 0) {
          $.cartel16_as1_dead = 1;
          ++$.counter_cartels_killed_as1;
          $.blip_cartel16.Remove();
          if ($.yak1_mission == 7) {
            $.yak1_mission = 0;
          }
        }
      }
    }
    if ($.cartel16_as1_dead == 1) {
      if ($.cartel15_as1_dead == 1) {
        if ($.cartel14_as1_dead == 1) {
          if ($.cartel13_as1_dead == 1) {
            if ($.flag_bailout_d == 0) {
              ++$.counter_bailouts;
              $.flag_bailout_d = 1;
            }
          }
        }
      }
    }
  }
  return;
}

async function cartel_car_a_stuck() {
  if (!(Car.IsDead($.cartel_car_a_as1))) {
    if ($.cartel_car_a_as1.IsUpsidedown() && $.cartel_car_a_as1.IsStopped()) {
      if (!($.cartel_car_a_as1.IsOnScreen())) {
        [$.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z] = $.cartel_car_a_as1.GetCoordinates();
        [$.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0))) {
          $.cartel_car_a_as1.SetCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
          $.cartel_car_a_as1.SetHeading($.cartel_heading);
          $.cartel_car_a_as1.SetOnPathToPlayer();
        }
      }
      else {
        // SCM GOSUB bailout_a
        await bailout_a();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.cartel_car_a_as1.IsInWater()) {
      if (!($.cartel_car_a_as1.IsOnScreen())) {
        [$.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z] = $.cartel_car_a_as1.GetCoordinates();
        [$.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0))) {
          $.cartel_car_a_as1.SetCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
          $.cartel_car_a_as1.SetHeading($.cartel_heading);
          $.cartel_car_a_as1.SetOnPathToPlayer();
        }
      }
      else {
        $.flag_bailout_a = 1;
        ++$.counter_bailouts;
        $.blip_cartelcar_a.Remove();
        $.cartel_car_a_as1.SetWatertight(0 /* FALSE */);
        // SCM GOSUB cartel_deaths
        await cartel_deaths();
        // fallback if label was not emitted as async function: no-op continues linearly
        return;
      }
    }
  }
  else {
    $.blip_cartelcar_a.Remove();
  }
  return;
}

async function cartel_car_b_stuck() {
  if (!(Car.IsDead($.cartel_car_b_as1))) {
    if ($.cartel_car_b_as1.IsUpsidedown() && $.cartel_car_b_as1.IsStopped()) {
      if (!($.cartel_car_b_as1.IsOnScreen())) {
        [$.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z] = $.cartel_car_b_as1.GetCoordinates();
        [$.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0))) {
          $.cartel_car_b_as1.SetCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
          $.cartel_car_b_as1.SetHeading($.cartel_heading);
          $.cartel_car_b_as1.SetOnPathToPlayer();
        }
      }
      else {
        // SCM GOSUB bailout_b
        await bailout_b();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.cartel_car_b_as1.IsInWater()) {
      if (!($.cartel_car_b_as1.IsOnScreen())) {
        [$.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z] = $.cartel_car_b_as1.GetCoordinates();
        [$.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0))) {
          $.cartel_car_b_as1.SetCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
          $.cartel_car_b_as1.SetHeading($.cartel_heading);
          $.cartel_car_b_as1.SetOnPathToPlayer();
        }
      }
      else {
        $.flag_bailout_b = 1;
        $.cartel_car_b_as1.SetWatertight(0 /* FALSE */);
        ++$.counter_bailouts;
        $.blip_cartelcar_b.Remove();
        // SCM GOSUB cartel_deaths
        await cartel_deaths();
        // fallback if label was not emitted as async function: no-op continues linearly
        return;
      }
    }
  }
  else {
    $.blip_cartelcar_b.Remove();
  }
  return;
}

async function cartel_car_d_stuck() {
  if (!(Car.IsDead($.cartel_car_d_as1))) {
    if ($.cartel_car_d_as1.IsUpsidedown() && $.cartel_car_d_as1.IsStopped()) {
      if (!($.cartel_car_d_as1.IsOnScreen())) {
        [$.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z] = $.cartel_car_d_as1.GetCoordinates();
        [$.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0))) {
          $.cartel_car_d_as1.SetCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
          $.cartel_car_d_as1.SetHeading($.cartel_heading);
          $.cartel_car_d_as1.SetOnPathToPlayer();
        }
      }
      else {
        // SCM GOSUB bailout_d
        await bailout_d();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.cartel_car_d_as1.IsInWater()) {
      if (!($.cartel_car_d_as1.IsOnScreen())) {
        [$.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z] = $.cartel_car_d_as1.GetCoordinates();
        [$.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
        if (!(Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0))) {
          $.cartel_car_d_as1.SetCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
          $.cartel_car_d_as1.SetHeading($.cartel_heading);
          $.cartel_car_d_as1.SetOnPathToPlayer();
        }
      }
      else {
        $.flag_bailout_d = 1;
        $.cartel_car_d_as1.SetWatertight(0 /* FALSE */);
        ++$.counter_bailouts;
        $.blip_cartelcar_d.Remove();
        // SCM GOSUB cartel_deaths
        await cartel_deaths();
        // fallback if label was not emitted as async function: no-op continues linearly
        return;
      }
    }
  }
  else {
    $.blip_cartelcar_d.Remove();
  }
  return;
}

async function vegetables() {
  if ($.flag_cartel_a_created == 1) {
    if (!(Car.IsDead($.cartel_car_a_as1))) {
      if ($.flag_bailout_a == 0 && $.flag_a_attack == 1) {
        // SCM GOSUB cartel_car_a_stuck
        await cartel_car_a_stuck();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    else {
      $.blip_cartelcar_a.Remove();
    }
  }
  if ($.flag_cartel_b_created == 1) {
    if (!(Car.IsDead($.cartel_car_b_as1))) {
      if ($.flag_bailout_b == 0 && $.flag_b_attack == 1) {
        // SCM GOSUB cartel_car_b_stuck
        await cartel_car_b_stuck();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    else {
      $.blip_cartelcar_b.Remove();
    }
  }
  if ($.flag_cartel_d_created == 1) {
    if (!(Car.IsDead($.cartel_car_d_as1))) {
      if ($.flag_bailout_d == 0 && $.flag_d_attack == 1) {
        // SCM GOSUB cartel_car_d_stuck
        await cartel_car_d_stuck();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    else {
      $.blip_cartelcar_d.Remove();
    }
  }
  return;
}

async function blip_removal() {
  $.blip_cartel1.Remove();
  $.blip_cartel2.Remove();
  $.blip_cartel3.Remove();
  $.blip_cartel4.Remove();
  $.blip_cartel5.Remove();
  $.blip_cartel6.Remove();
  $.blip_cartel7.Remove();
  $.blip_cartel8.Remove();
  $.blip_cartel13.Remove();
  $.blip_cartel14.Remove();
  $.blip_cartel15.Remove();
  $.blip_cartel16.Remove();
  if ($.flag_yak1_dead == 0) {
    $.yakuza1_as1.MarkAsNoLongerNeeded();
  }
  if ($.flag_yak2_dead == 0) {
    $.yakuza2_as1.MarkAsNoLongerNeeded();
  }
  if ($.flag_yak3_dead == 0) {
    $.yakuza3_as1.MarkAsNoLongerNeeded();
  }
  if ($.flag_yak4_dead == 0) {
    $.yakuza4_as1.MarkAsNoLongerNeeded();
  }
  if ($.flag_yak5_dead == 0) {
    $.yakuza5_as1.MarkAsNoLongerNeeded();
  }
  if ($.flag_yak6_dead == 0) {
    $.yakuza6_as1.MarkAsNoLongerNeeded();
  }
  return;
}

async function unhappy_car_check() {
  $.timer_as3_now = Clock.GetGameTimer();
  if ($.timer_as3_now > $.particle_time) {
    $.particle_time = $.timer_as3_now + 6000;
    $.flag_particle = 1;
  }
  if ($.flag_particle == 1) {
    if (!(Car.IsDead($.cartel_car_a_as1)) && $.flag_a_attack == 1 && $.flag_bailout_a == 0) {
      $.car_a_x_old = $.car_a_as1_x;
      $.car_a_y_old = $.car_a_as1_y;
      $.car_a_z_old = $.car_a_as1_z;
      [$.car_a_as1_x, $.car_a_as1_y, $.car_a_as1_z] = $.cartel_car_a_as1.GetCoordinates();
      if ($.cartel_car_a_as1.Locate2D($.car_a_x_old, $.car_a_y_old, 3.0, 3.0, 0 /* false */)) {
        if (!($.cartel_car_a_as1.IsOnScreen())) {
          [$.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.car_a_as1_x, $.car_a_as1_y, $.car_a_as1_z);
          if (!(Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0))) {
            $.cartel_car_a_as1.SetCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
            $.cartel_car_a_as1.SetHeading($.cartel_heading);
            $.cartel_car_a_as1.SetOnPathToPlayer();
          }
        }
      }
    }
    if (!(Car.IsDead($.cartel_car_b_as1)) && $.flag_b_attack == 1 && $.flag_bailout_b == 0) {
      $.car_b_x_old = $.car_b_as1_x;
      $.car_b_y_old = $.car_b_as1_y;
      $.car_b_z_old = $.car_b_as1_z;
      [$.car_b_as1_x, $.car_b_as1_y, $.car_b_as1_z] = $.cartel_car_b_as1.GetCoordinates();
      if ($.cartel_car_b_as1.Locate2D($.car_b_x_old, $.car_b_y_old, 3.0, 3.0, 0 /* false */)) {
        if (!($.cartel_car_b_as1.IsOnScreen())) {
          [$.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.car_b_as1_x, $.car_b_as1_y, $.car_b_as1_z);
          if (!(Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0))) {
            $.cartel_car_b_as1.SetCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
            $.cartel_car_b_as1.SetHeading($.cartel_heading);
            $.cartel_car_b_as1.SetOnPathToPlayer();
          }
        }
      }
    }
    if (!(Car.IsDead($.cartel_car_d_as1)) && $.flag_d_attack == 1 && $.flag_bailout_d == 0) {
      $.car_d_x_old = $.car_d_as1_x;
      $.car_d_y_old = $.car_d_as1_y;
      $.car_d_z_old = $.car_d_as1_z;
      [$.car_d_as1_x, $.car_d_as1_y, $.car_d_as1_z] = $.cartel_car_d_as1.GetCoordinates();
      if ($.cartel_car_d_as1.Locate2D($.car_d_x_old, $.car_d_y_old, 3.0, 3.0, 0 /* false */)) {
        if (!($.cartel_car_d_as1.IsOnScreen())) {
          [$.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, $.cartel_heading] = Path.GetClosestCarNodeWithHeading($.car_d_as1_x, $.car_d_as1_y, $.car_d_as1_z);
          if (!(Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0))) {
            $.cartel_car_d_as1.SetCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
            $.cartel_car_d_as1.SetHeading($.cartel_heading);
            $.cartel_car_d_as1.SetOnPathToPlayer();
          }
        }
      }
    }
    $.flag_particle = 0;
  }
  return;
}

export async function asusb1() {
  // MissionBoundary
  // SCM GOSUB mission_start_as1
  await mission_start_as1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_as1_failed
    await mission_as1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_as1
  await mission_cleanup_as1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT cartel_car_a_as1 cartel_car_b_as1 cartel_car_d_as1
  // VAR_INT cartel1_as1 cartel2_as1 cartel3_as1 cartel4_as1
  // VAR_INT cartel5_as1 cartel6_as1 cartel7_as1 cartel8_as1
  // VAR_INT cartel13_as1 cartel14_as1 cartel15_as1 cartel16_as1
  // VAR_INT blip_cartel1 blip_cartel2 blip_cartel3 blip_cartel4
  // VAR_INT blip_cartel5 blip_cartel6 blip_cartel7 blip_cartel8
  // VAR_INT blip_cartel13 blip_cartel14 blip_cartel15 blip_cartel16
  // VAR_INT blip_cartelcar_a blip_cartelcar_b blip_cartelcar_d
  // VAR_INT cartel1_as1_dead cartel2_as1_dead cartel3_as1_dead cartel4_as1_dead
  // VAR_INT cartel5_as1_dead cartel6_as1_dead cartel7_as1_dead cartel8_as1_dead
  // VAR_INT cartel13_as1_dead cartel14_as1_dead cartel15_as1_dead cartel16_as1_dead
  // VAR_INT yakuza1_as1 yakuza2_as1 yakuza3_as1 yakuza4_as1
  // VAR_INT yakuza5_as1 yakuza6_as1 yakuza7_as1 yakuza8_as1
  // VAR_INT flag_yak1_dead flag_yak2_dead flag_yak3_dead flag_yak4_dead
  // VAR_INT flag_yak5_dead flag_yak6_dead
  // VAR_INT yak1_mission
  // VAR_INT flag_yakuza_created_as1
  // VAR_INT counter_yakuza_killed_as1
  // VAR_INT flag_wellybob
  // VAR_INT yaks_a_killed_by_player yaks_b_killed_by_player yaks_killed_by_player
  // VAR_INT flag_a_attack flag_b_attack flag_d_attack
  // VAR_INT blip_cartel_a_as1 blip_cartel_b_as1 blip_cartel_d_as1
  // VAR_INT blip_killzone
  // VAR_INT flag_cartel_a_created
  // VAR_INT flag_cartel_b_created
  // VAR_INT flag_cartel_d_created
  // VAR_INT counter_cartels_killed_as1 counter_asukas_revenge counter_bailouts
  // VAR_INT flag_bailout_a flag_bailout_b flag_bailout_d
  // VAR_FLOAT cartel_heading
  // VAR_FLOAT killzone_cent_x killzone_cent_y
  // VAR_FLOAT killzone_min_x killzone_min_y killzone_max_x killzone_max_y
  // VAR_FLOAT cartel_a_x cartel_a_y
  // VAR_FLOAT cartel_b_x cartel_b_y
  // VAR_FLOAT cartel_d_x cartel_d_y
  // VAR_FLOAT yak1_x yak1_y
  // VAR_FLOAT yak2_x yak2_y
  // VAR_FLOAT yak3_x yak3_y
  // VAR_FLOAT yak4_x yak4_y
  // VAR_FLOAT yak5_x yak5_y
  // VAR_FLOAT yak6_x yak6_y
  // VAR_FLOAT car_a_x_old car_a_y_old car_a_z_old car_a_as1_x car_a_as1_y car_a_as1_z
  // VAR_FLOAT car_b_x_old car_b_y_old car_b_z_old car_b_as1_x car_b_as1_y car_b_as1_z
  // VAR_FLOAT car_d_x_old car_d_y_old car_d_z_old car_d_as1_x car_d_as1_y car_d_as1_z
  // VAR_FLOAT cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z
  // VAR_FLOAT cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z
  // VAR_FLOAT cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z
}
