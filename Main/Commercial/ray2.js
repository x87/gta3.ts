// Generated from Main/Commercial/ray2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray2() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.flag_player_on_phil_mission = 1;
  $.rays_cutscene_flag = 1;
  await asyncWait(0);
  $.flag_m16_gone = 0;
  $.flag_uzi_gone = 0;
  $.flag_rocket_gone = 0;
  $.flag_shotgun_gone = 0;
  $.flag_molotov_gone = 0;
  $.flag_phil_in_area = 0;
  $.flag_phil_arrived = 0;
  $.flag_phil_dead = 0;
  $.flag_trucks = 0;
  $.flag_v1_dead = 0;
  $.flag_v2_dead = 0;
  $.flag_v3_dead = 0;
  $.flag_v4_dead = 0;
  $.flag_v5_dead = 0;
  $.flag_v6_dead = 0;
  $.flag_v7_dead = 0;
  $.flag_v8_dead = 0;
  $.flag_v9_dead = 0;
  $.flag_v10_dead = 0;
  $.flag_v11_dead = 0;
  $.flag_v12_dead = 0;
  $.counter_dead_varmints = 0;
  $.flag_cartel_arrived = 0;
  $.stallion_bailout = 0;
  $.sentinel_bailout = 0;
  $.perenial_bailout = 0;
  $.flag_stallion_arrived = 0;
  $.flag_sentinel_arrived = 0;
  $.flag_perenial_arrived = 0;
  $.flag_stallion_created = 0;
  $.flag_sentinel_created = 0;
  $.flag_perenial_created = 0;
  $.flag_launch_stallion = 0;
  $.flag_launch_perenial = 0;
  $.flag_sneaky_1 = 0;
  $.flag_sneaky_2 = 0;
  $.flag_audio = 0;
  $.flag_gate = 0;
  $.wh_x_rm2 = 137.15;
  $.wh_y_rm2 = 192.43;
  $.wh2_x_rm2 = 121.5;
  $.wh2_y_rm2 = 214.6;
  $.varmint_gen1_x = 174.0;
  $.varmint_gen1_y = 170.0;
  $.stage_3_x = 153.0;
  $.stage_3_y = 220.0;
  $.stage_1_x = 172.0;
  $.stage_1_y = 207.0;
  $.stage_2_x = 152.0;
  $.stage_2_y = 204.0;
  $.phils_defcon_x = 136.5;
  $.phils_defcon_y = 176.7;
  $.phils_defcon_z = 11.6;
  $.m16_x = 145.5;
  $.m16_y = 170.0;
  $.uzi_x = 143.5;
  $.uzi_y = 170.0;
  $.shotgun_x = 141.5;
  $.shotgun_y = 170.0;
  $.rocket_x = 126.98;
  $.rocket_y = 198.24;
  $.rocket_z = 14.53;
  $.molotov_x = 126.98;
  $.molotov_y = 191.73;
  $.molotov_z = 14.53;
  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.RequestModel(toilet);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }
  Cutscene.Load(r2_ap);
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
  Camera.DoFade(250, 1 /* FADE_IN */);
  Camera.SetNearClip(0.2);
  Cutscene.Start();
  Streaming.Switch(0 /* OFF */);
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 6426) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_A1, 10000, 1);
  while ($.cs_time < 8218) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_A, 10000, 1);
  while ($.cs_time < 11093) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_B, 10000, 1);
  while ($.cs_time < 14634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_C, 10000, 1);
  while ($.cs_time < 20938) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_D, 10000, 1);
  while ($.cs_time < 26599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM2_D1, 10000, 1);
  while ($.cs_time < 38333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1000, 0 /* FADE_OUT */);
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
  Camera.SetNearClip(0.9);
  await asyncWait(500);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  $.rays_cutscene_flag = 0;
  $.blip_warehouse_rm2 = Blip.AddForCoord($.wh_x_rm2, $.wh_y_rm2, -100.0);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`))) {
    await asyncWait(0);
  }
  Streaming.LoadSpecialCharacter(1, dealer);
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`COLUMB`);
  while (!(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`BARRACKS`);
  while (!(Streaming.HasModelLoaded(car`BARRACKS`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`RHINO`);
  while (!(Streaming.HasModelLoaded(car`RHINO`))) {
    await asyncWait(0);
  }
  while (!($.player.LocateAnyMeans2D($.wh_x_rm2, $.wh_y_rm2, 4.0, 4.0, 1 /* true */))) {
    await asyncWait(0);
    if ($.player.IsInZone("HOSPI_2") && $.flag_trucks == 0) {
      $.phil_truck_1 = Car.Create(115 /* CAR_RHINO */, 132.0, 173.9, 11.6);
      $.phil_truck_1.SetHeading(0.0);
      $.phil_truck_1.SetIdle();
      $.phil_truck_1.SetProofs(1 /* TRUE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
      $.phil_truck_1.LockDoors(2 /* CARLOCK_LOCKED */);
      $.phil_truck_2 = Car.Create(116 /* CAR_BARRACKS */, 133.56, 208.76, 11.93);
      $.phil_truck_2.SetHeading(180.0);
      $.phil_truck_2.SetIdle();
      $.phil_truck_2.SetProofs(1 /* TRUE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
      $.phil_truck_2.LockDoors(2 /* CARLOCK_LOCKED */);
      $.flag_trucks = 1;
    }
    if ($.flag_gate == 0) {
      if ($.gate2_sfx1 == 0) {
        Sound.AddOneOffSound(147.249, 207.323, 10.599, 92 /* SOUND_GATE_START_CLUNK */);
        $.gate2_sfx1 = 1;
      }
      while (!($.phils_compnd_gate.Slide(147.249, 214.823, 10.599, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
        await asyncWait(0);
      }
      if ($.not_clunked_yet == 1) {
        $.gate_sfx2 = 0;
        $.not_clunked_yet = 0;
      }
      if ($.gate2_sfx2 == 0) {
        Sound.AddOneOffSound(147.249, 214.823, 10.599, 93 /* SOUND_GATE_STOP_CLUNK */);
        $.gate2_sfx2 = 1;
      }
      $.flag_gate = 1;
    }
  }
  World.ClearArea($.phils_defcon_x, $.phils_defcon_y, 11.5, 20.0, 1 /* true */);
  $.phil = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, $.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  $.phil.SetHeading(360.0);
  $.phil.GiveWeapon(6 /* WEAPONTYPE_M16 */, 200);
  $.phil.AddArmor(100);
  $.phil.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.phil.ClearThreatSearch();
  $.phil.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
  $.phil.SetStayInSamePlace(1 /* true */);
  $.phils_m16 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 60, $.m16_x, $.m16_y, 11.5);
  $.phils_uzi = Pickup.Create(159 /* WEAPON_UZI */, 3 /* PICKUP_ONCE */, $.uzi_x, $.uzi_y, 11.5);
  $.phils_shotgun = Pickup.Create(157 /* WEAPON_SHOTGUN */, 3 /* PICKUP_ONCE */, $.shotgun_x, $.shotgun_y, 11.5);
  $.phils_rocket = Pickup.Create(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, $.rocket_x, $.rocket_y, $.rocket_z);
  $.phils_molotov = Pickup.Create(155 /* WEAPON_MOLOTOV */, 3 /* PICKUP_ONCE */, $.molotov_x, $.molotov_y, $.molotov_z);
  $.phils_armour = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 121.16, 194.92, 11.53);
  $.blip_warehouse_rm2.Remove();
  $.player.SetControl(0 /* off */);
  $.player_rm2 = $.player.GetChar();
  Camera.SetFixedPosition(141.5, 184.5, 12.5, 0.0, 0.0, 0.0);
  Hud.SwitchWidescreen(1 /* on */);
  if ($.player.IsInAnyCar()) {
    $.player_car_rm2 = $.player.StoreCarIsIn();
    $.player.ApplyBrakesToCar(1 /* on */);
    $.player_car_rm2.SetIdle();
    Camera.PointAtCar($.player_car_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.player_rm2.SetObjLeaveCar($.player_car_rm2);
    while ($.player_rm2.IsInCar($.player_car_rm2)) {
      await asyncWait(0);
      if (Car.IsDead($.player_car_rm2)) {
        // SCM GOTO → bibble (not lowered; manual jump required)
        throw new Error("unresolved GOTO bibble"); // fallback: would break linear control flow
      }
    }
  }
  Camera.PointAtChar($.player_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);
}

async function bibble() {
  await asyncWait(0);
  $.phils_defcon_y = $.phils_defcon_y + 3.0;
  $.player_rm2.SetObjRunToCoord($.phils_defcon_x, $.phils_defcon_y);
  while (!($.player.LocateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, 0 /* false */))) {
    await asyncWait(0);
  }
  Audio.LoadMissionAudio(R2_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_E", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(R2_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_E1", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(R2_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_F", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.LoadMissionAudio(R2_D);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_F1", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
}

async function peedle() {
  Audio.ClearMissionAudio();
  Text.ClearPrints();
  $.player.SetControl(1 /* on */);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.timer_start_rm2 = Clock.GetGameTimer();
  $.timer_now_rm2 = Clock.GetGameTimer();
  $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;
  World.ClearArea($.varmint_gen1_x, $.varmint_gen1_y, 11.5, 20.0, 1 /* true */);
  World.ClearArea($.stage_3_x, $.stage_3_y, 11.5, 20.0, 1 /* true */);
  World.ClearArea($.stage_1_x, $.stage_1_y, 11.5, 20.0, 1 /* true */);
  World.ClearArea($.stage_2_x, $.stage_2_y, 11.5, 20.0, 1 /* true */);
  if (!(Car.IsDead($.phil_truck_2))) {
    $.phil_truck_2.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  while ($.timer_dif_rm2 < 25000 && $.player.IsInArea2D(119.0, 167.0, 147.0, 246.0, 0 /* false */)) {
    await asyncWait(0);
    // SCM GOSUB pickups
    await pickups();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.player.IsInArea2D(147.0, 198.0, 156.0, 208.0, 0 /* false */)) {
      // SCM GOTO → herring (not lowered; manual jump required)
      throw new Error("unresolved GOTO herring"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      // SCM GOTO → herring (not lowered; manual jump required)
      throw new Error("unresolved GOTO herring"); // fallback: would break linear control flow
    }
    $.timer_now_rm2 = Clock.GetGameTimer();
    $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;
    if (Char.IsDead($.phil)) {
      $.flag_phil_dead = 1;
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }
  }
}

async function herring() {
  Audio.LoadMissionAudio(R2_E);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.timer_start_rm2 = Clock.GetGameTimer();
  while ($.counter_dead_varmints < 12) {
    await asyncWait(0);
    $.timer_now_rm2 = Clock.GetGameTimer();
    $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;
    // SCM GOSUB pickups
    await pickups();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.timer_dif_rm2 > 2000 && $.flag_sentinel_created == 0) {
      $.sentinel1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.sentinel1_rm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
      $.sentinel1_rm2.LockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_sentinel1 = Blip.AddForCar($.sentinel1_rm2);
      $.varmint_1 = Char.CreateInsideCar($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
      $.varmint_2 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.varmint_3 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1);
      $.varmint_4 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
      $.sentinel1_rm2.SetCruiseSpeed(10.0);
      $.sentinel1_rm2.SetDrivingStyle(3);
      $.sentinel1_rm2.GotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_sentinel_created = 1;
    }
    if ($.flag_launch_stallion == 0 && $.flag_sentinel_created == 1) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        if ($.sentinel1_rm2.Locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, 0 /* false */)) {
          $.sentinel1_rm2.GotoCoordinatesAccurate($.stage_2_x, $.stage_2_y, 11.6);
          $.flag_launch_stallion = 1;
        }
      }
    }
    if ($.flag_launch_stallion == 1 && $.flag_sentinel_created == 1) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        if ($.sentinel1_rm2.Locate2D($.stage_2_x, $.stage_2_y, 4.0, 4.0, 0 /* false */)) {
          $.flag_launch_stallion = 2;
          $.flag_sentinel_arrived = 1;
          $.sentinel1_rm2.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.sentinel1_rm2.LockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_sentinel_created == 1) {
      if (Car.IsDead($.sentinel1_rm2)) {
        $.flag_launch_stallion = 1;
        $.blip_sentinel1.Remove();
      }
      else {
        if (!($.sentinel1_rm2.IsHealthGreater(950))) {
          $.flag_sentinel_arrived = 1;
          if ($.flag_launch_stallion == 0) {
            $.flag_launch_stallion = 1;
          }
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.timer_dif_rm2 > 4000 && $.flag_stallion_created == 0 && $.flag_launch_stallion > 0) {
      $.stallion1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.stallion1_rm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
      $.stallion1_rm2.LockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_stallion1 = Blip.AddForCar($.stallion1_rm2);
      $.varmint_5 = Char.CreateInsideCar($.stallion1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
      $.varmint_6 = Char.CreateAsPassenger($.stallion1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.stallion1_rm2.SetCruiseSpeed(10.0);
      $.stallion1_rm2.SetDrivingStyle(3);
      $.stallion1_rm2.GotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_stallion_created = 1;
    }
    if ($.flag_launch_perenial == 0 && $.flag_stallion_created == 1) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        if ($.stallion1_rm2.Locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, 0 /* false */)) {
          $.stallion1_rm2.GotoCoordinatesAccurate($.stage_3_x, $.stage_3_y, 11.6);
          $.flag_launch_perenial = 1;
        }
      }
    }
    if ($.flag_launch_perenial == 1 && $.flag_stallion_created == 1) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        if ($.stallion1_rm2.Locate2D($.stage_3_x, $.stage_3_y, 4.0, 4.0, 0 /* false */)) {
          $.flag_launch_perenial = 2;
          $.flag_stallion_arrived = 1;
          $.stallion1_rm2.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.stallion1_rm2.LockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_stallion_created == 1) {
      if (Car.IsDead($.stallion1_rm2)) {
        $.flag_launch_perenial = 1;
        $.blip_stallion1.Remove();
      }
      else {
        if (!($.stallion1_rm2.IsHealthGreater(950))) {
          $.flag_stallion_arrived = 1;
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.timer_dif_rm2 > 6000 && $.flag_perenial_created == 0 && $.flag_launch_perenial > 0) {
      $.perenial1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.perenial1_rm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
      $.perenial1_rm2.LockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_perenial1 = Blip.AddForCar($.perenial1_rm2);
      $.varmint_7 = Char.CreateInsideCar($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
      $.varmint_8 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.varmint_9 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1);
      $.varmint_10 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
      $.perenial1_rm2.SetCruiseSpeed(10.0);
      $.perenial1_rm2.SetDrivingStyle(3);
      $.perenial1_rm2.GotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_perenial_created = 1;
    }
    if ($.flag_perenial_created == 1) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        if ($.perenial1_rm2.Locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, 0 /* false */)) {
          $.flag_perenial_arrived = 1;
          $.perenial1_rm2.SetOnlyDamagedByPlayer(0 /* FALSE */);
          $.perenial1_rm2.LockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_perenial_created == 1) {
      if (Car.IsDead($.perenial1_rm2)) {
        $.blip_perenial1.Remove();
      }
      else {
        if (!($.perenial1_rm2.IsHealthGreater(950))) {
          $.flag_perenial_arrived = 1;
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_cartel_arrived > 0 && $.timer_dif_rm2 > 12000) {
      if ($.flag_sneaky_1 == 0) {
        if (!(Camera.IsPointOnScreen(121.3, 217.7, 11.5, 2.5))) {
          $.varmint_11 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 121.3, 235.7, 11.5);
          $.varmint_11.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 80);
          $.varmint_11.AddArmor(100);
          $.blip_v11 = Blip.AddForCharOld($.varmint_11, 1, 2 /* BLIP_ONLY */);
          $.varmint_11.SetObjRunToCoord($.phils_defcon_x, $.phils_defcon_y);
          $.varmint_11.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_11.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_11.SetHeedThreats(1 /* true */);
          $.flag_sneaky_1 = 1;
        }
      }
      if ($.flag_sneaky_2 == 0) {
        if (!(Camera.IsPointOnScreen(121.3, 241.6, 11.5, 2.5))) {
          $.varmint_12 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 121.3, 241.6, 11.5);
          $.varmint_12.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_12.AddArmor(100);
          $.blip_v12 = Blip.AddForCharOld($.varmint_12, 1, 2 /* BLIP_ONLY */);
          $.varmint_12.SetObjRunToCoord(124.15, 184.7);
          $.varmint_12.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_12.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_12.SetHeedThreats(1 /* true */);
          $.flag_sneaky_2 = 1;
        }
      }
    }
    if (Char.IsDead($.phil)) {
      $.flag_phil_dead = 1;
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }
    if ($.flag_cartel_arrived == 1) {
      Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
      Audio.PlayMissionAudio();
      Text.PrintNow("RM2_K", 4000, 1);
      $.flag_cartel_arrived = 2;
    }
    // SCM GOSUB varmint_deaths
    await varmint_deaths();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB big_bailout_routine
    await big_bailout_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Char.IsDead($.phil))) {
    $.phil.SetHealth(5);
  }
  if (!(Char.IsDead($.phil))) {
    $.phil.SetStayInSamePlace(1 /* true */);
    [$.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z] = $.phil.GetCoordinates();
    if (!($.player.LocateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, 0 /* false */))) {
      Text.PrintNow("RM2_G", 2500, 1);
      $.blip_phil = Blip.AddForChar($.phil);
      while (!($.player.LocateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, 0 /* false */))) {
        await asyncWait(0);
        if (Char.IsDead($.phil)) {
          $.flag_phil_dead = 1;
          $.blip_phil.Remove();
          // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
        }
      }
    }
  }
  if (Char.IsDead($.phil)) {
    $.flag_phil_dead = 1;
    $.blip_phil.Remove();
    // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
  }
  else {
    $.phil.SetHealth(100);
  }
  $.blip_phil.Remove();
  $.player.SetControl(0 /* off */);
  Hud.SwitchWidescreen(1 /* on */);
  Camera.SetFixedPosition(134.6, 184.7, 11.16, 0.0, 0.0, 0.0);
  if ($.player.IsInAnyCar()) {
    $.player_car_rm2 = $.player.StoreCarIsIn();
    $.player.ApplyBrakesToCar(1 /* on */);
    $.player_car_rm2.SetIdle();
    Camera.PointAtCar($.player_car_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.player_rm2.SetObjLeaveCar($.player_car_rm2);
    while ($.player_rm2.IsInCar($.player_car_rm2)) {
      await asyncWait(0);
      if (Car.IsDead($.player_car_rm2)) {
        // SCM GOTO → boobble (not lowered; manual jump required)
        throw new Error("unresolved GOTO boobble"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.phil)) {
        $.flag_phil_dead = 1;
        $.blip_phil.Remove();
        // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
      }
    }
  }
}

async function boobble() {
  $.player_rm2 = $.player.GetChar();
  if (!(Char.IsDead($.phil))) {
    $.phil.TurnToFaceChar($.player_rm2);
    Camera.PointAtChar($.phil, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  Audio.LoadMissionAudio(R2_F);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_L", 3000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  if ($.flag_m16_gone == 0) {
    $.phils_m16.Remove();
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.Remove();
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.Remove();
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.Remove();
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.Remove();
  }
  if ($.flag_ray_mission2_passed == 0) {
    $.phils_armour.Remove();
  }
  $.m16_x = 145.5;
  $.m16_y = 170.0;
  $.uzi_x = 143.5;
  $.uzi_y = 170.0;
  $.shotgun_x = 141.5;
  $.shotgun_y = 170.0;
  $.phils_m16 = Pickup.Create(161 /* WEAPON_M16 */, 1 /* PICKUP_IN_SHOP */, $.m16_x, $.m16_y, 11.5);
  $.phils_uzi = Pickup.Create(157 /* WEAPON_SHOTGUN */, 1 /* PICKUP_IN_SHOP */, $.uzi_x, $.uzi_y, 11.5);
  $.phils_shotgun = Pickup.Create(156 /* WEAPON_ROCKET */, 1 /* PICKUP_IN_SHOP */, $.shotgun_x, $.shotgun_y, 11.5);
  $.flag_m16_gone = 1;
  $.flag_uzi_gone = 1;
  $.flag_shotgun_gone = 1;
  Audio.LoadMissionAudio(R2_G);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_M", 3000, 1);
  Camera.SetFixedPosition(143.5, 179.0, 11.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(144.0, 170.7, 11.5, 2 /* JUMP_CUT */);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  Audio.LoadMissionAudio(R2_H);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_N", 3000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */);
  await asyncWait(2000);
  if (!(Char.IsDead($.phil))) {
    $.phil.SetObjNoObj();
    $.phil.SetObjGotoCoordOnFoot(144.0, 174.4);
  }
  while ($.flag_phil_arrived == 0) {
    await asyncWait(0);
    if (!(Char.IsDead($.phil))) {
      if ($.phil.LocateOnFoot2D(144.0, 174.4, 1.0, 1.0, 0 /* false */)) {
        $.flag_phil_arrived = 1;
      }
    }
    else {
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }
  }
  $.phil.Delete();
  Hud.SwitchWidescreen(0 /* off */);
  Camera.RestoreJumpcut();
  $.player.SetControl(1 /* on */);
  // SCM GOTO → mission_ray2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray2_passed"); // fallback: would break linear control flow
}

async function mission_ray2_failed() {
  if ($.flag_phil_dead == 1) {
    Text.PrintNow("RM2_H", 3000, 1);
  }
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_ray2_passed() {
  if ($.flag_m16_gone == 0) {
    $.phils_m16.Remove();
    $.flag_m16_gone = 1;
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.Remove();
    $.flag_shotgun_gone = 1;
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.Remove();
    $.flag_uzi_gone = 1;
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.Remove();
    $.flag_molotov_gone = 1;
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.Remove();
    $.flag_rocket_gone = 1;
  }
  $.flag_ray_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(RM2);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT ray_mission3_loop
  return;
}

async function mission_cleanup_ray2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  $.flag_player_on_phil_mission = 0;
  $.player.SetControl(1 /* on */);
  Hud.SwitchWidescreen(0 /* off */);
  Camera.RestoreJumpcut();
  Streaming.MarkModelAsNoLongerNeeded(ped`SPECIAL1`);
  Streaming.MarkModelAsNoLongerNeeded(car`RHINO`);
  Streaming.MarkModelAsNoLongerNeeded(car`PATRIOT`);
  Streaming.MarkModelAsNoLongerNeeded(car`BARRACKS`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.UnloadSpecialCharacter(1);
  $.blip_warehouse_rm2.Remove();
  $.blip_sentinel1.Remove();
  $.blip_stallion1.Remove();
  $.blip_perenial1.Remove();
  // SCM GOSUB blip_removal_rm2
  await blip_removal_rm2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.flag_m16_gone == 0) {
    $.phils_m16.Remove();
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.Remove();
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.Remove();
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.Remove();
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.Remove();
  }
  if ($.flag_ray_mission2_passed == 0) {
    $.phils_armour.Remove();
  }
  Mission.Finish();
  return;
}

async function big_bailout_routine() {
  if ($.stallion_bailout == 0 && $.flag_stallion_arrived == 1) {
    if (!(Char.IsDead($.varmint_5))) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        $.varmint_5.SetObjLeaveCar($.stallion1_rm2);
        while ($.varmint_5.IsInCar($.stallion1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.stallion1_rm2)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_5)) {
            // SCM GOTO → plook1 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook1"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_5))) {
          $.blip_v5 = Blip.AddForCharOld($.varmint_5, 1, 2 /* BLIP_ONLY */);
          $.varmint_5.AddArmor(100);
          $.varmint_5.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
          $.varmint_5.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_5.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_5.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook1
    if (!(Char.IsDead($.varmint_6))) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        $.varmint_6.SetObjLeaveCar($.stallion1_rm2);
        while ($.varmint_6.IsInCar($.stallion1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.stallion1_rm2)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_6)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_6))) {
          $.blip_v6 = Blip.AddForCharOld($.varmint_6, 1, 2 /* BLIP_ONLY */);
          $.varmint_6.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
          $.varmint_6.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_6.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_6.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook2
    $.blip_stallion1.Remove();
    $.stallion_bailout = 1;
  }
  if ($.sentinel_bailout == 0 && $.flag_sentinel_arrived == 1) {
    if (!(Char.IsDead($.varmint_1))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_1.SetObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_1.IsInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_1)) {
            // SCM GOTO → plook3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook3"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_1))) {
          $.blip_v1 = Blip.AddForCharOld($.varmint_1, 1, 2 /* BLIP_ONLY */);
          $.varmint_1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_1.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_1.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_1.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook3
    if (!(Char.IsDead($.varmint_2))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_2.SetObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_2.IsInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_2)) {
            // SCM GOTO → plook4 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook4"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_2))) {
          $.blip_v2 = Blip.AddForCharOld($.varmint_2, 1, 2 /* BLIP_ONLY */);
          $.varmint_2.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_2.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_2.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_2.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook4
    if (!(Char.IsDead($.varmint_3))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_3.SetObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_3.IsInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_3)) {
            // SCM GOTO → plook5 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook5"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_3))) {
          $.blip_v3 = Blip.AddForCharOld($.varmint_3, 1, 2 /* BLIP_ONLY */);
          $.varmint_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 80);
          $.varmint_3.SetObjRunToCoord(140.0, 209.5);
          $.varmint_3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_3.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_3.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook5
    if (!(Char.IsDead($.varmint_4))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_4.SetObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_4.IsInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_4)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_4))) {
          $.blip_v4 = Blip.AddForCharOld($.varmint_4, 1, 2 /* BLIP_ONLY */);
          $.varmint_4.AddArmor(100);
          $.varmint_4.GiveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 5);
          $.varmint_4.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_4.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_4.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook6
    $.blip_sentinel1.Remove();
    $.sentinel_bailout = 1;
  }
  if ($.perenial_bailout == 0 && $.flag_perenial_arrived == 1) {
    if (!(Char.IsDead($.varmint_7))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_7.SetObjLeaveCar($.perenial1_rm2);
        while ($.varmint_7.IsInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_7)) {
            // SCM GOTO → plook7 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook7"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_7))) {
          $.blip_v7 = Blip.AddForCharOld($.varmint_7, 1, 2 /* BLIP_ONLY */);
          $.varmint_7.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
          $.varmint_7.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_7.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_7.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook7
    if (!(Char.IsDead($.varmint_8))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_8.SetObjLeaveCar($.perenial1_rm2);
        while ($.varmint_8.IsInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_8)) {
            // SCM GOTO → plook8 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook8"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_8))) {
          $.blip_v8 = Blip.AddForCharOld($.varmint_8, 1, 2 /* BLIP_ONLY */);
          $.varmint_8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 45);
          $.varmint_8.SetObjRunToCoord(129.7, 199.8);
          $.varmint_8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_8.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_8.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook8
    if (!(Char.IsDead($.varmint_9))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_9.SetObjLeaveCar($.perenial1_rm2);
        while ($.varmint_9.IsInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_9)) {
            // SCM GOTO → plook9 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook9"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_9))) {
          $.blip_v9 = Blip.AddForCharOld($.varmint_9, 1, 2 /* BLIP_ONLY */);
          $.varmint_9.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 30);
          $.varmint_9.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_9.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_9.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook9
    if (!(Char.IsDead($.varmint_10))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_10.SetObjLeaveCar($.perenial1_rm2);
        while ($.varmint_10.IsInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_10)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_10))) {
          $.blip_v10 = Blip.AddForCharOld($.varmint_10, 1, 2 /* BLIP_ONLY */);
          $.varmint_10.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_10.AddArmor(100);
          $.varmint_10.SetObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_10.SetThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_10.SetHeedThreats(1 /* true */);
        }
      }
    }
    // SCM label plook10
    $.blip_perenial1.Remove();
    $.perenial_bailout = 1;
  }
  return;
}

async function varmint_deaths() {
  if ($.flag_sentinel_created == 1) {
    if ($.flag_v1_dead == 0) {
      if (Char.IsDead($.varmint_1)) {
        $.flag_v1_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v1.Remove();
      }
    }
    if ($.flag_v2_dead == 0) {
      if (Char.IsDead($.varmint_2)) {
        $.flag_v2_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v2.Remove();
      }
    }
    if ($.flag_v3_dead == 0) {
      if (Char.IsDead($.varmint_3)) {
        $.flag_v3_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v3.Remove();
      }
    }
    if ($.flag_v4_dead == 0) {
      if (Char.IsDead($.varmint_4)) {
        $.flag_v4_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v4.Remove();
      }
    }
  }
  if ($.flag_stallion_created == 1) {
    if ($.flag_v5_dead == 0) {
      if (Char.IsDead($.varmint_5)) {
        $.flag_v5_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v5.Remove();
      }
    }
    if ($.flag_v6_dead == 0) {
      if (Char.IsDead($.varmint_6)) {
        $.flag_v6_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v6.Remove();
      }
    }
  }
  if ($.flag_perenial_created == 1) {
    if ($.flag_v7_dead == 0) {
      if (Char.IsDead($.varmint_7)) {
        $.flag_v7_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v7.Remove();
      }
    }
    if ($.flag_v8_dead == 0) {
      if (Char.IsDead($.varmint_8)) {
        $.flag_v8_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v8.Remove();
      }
    }
    if ($.flag_v9_dead == 0) {
      if (Char.IsDead($.varmint_9)) {
        $.flag_v9_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v9.Remove();
      }
    }
    if ($.flag_v10_dead == 0) {
      if (Char.IsDead($.varmint_10)) {
        $.flag_v10_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v10.Remove();
      }
    }
  }
  if ($.flag_sneaky_1 == 1) {
    if ($.flag_v11_dead == 0) {
      if (Char.IsDead($.varmint_11)) {
        $.flag_v11_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v11.Remove();
      }
    }
  }
  if ($.flag_sneaky_2 == 1) {
    if ($.flag_v12_dead == 0) {
      if (Char.IsDead($.varmint_12)) {
        $.flag_v12_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v12.Remove();
      }
    }
  }
  return;
}

async function pickups() {
  if ($.flag_m16_gone == 0) {
    if ($.phils_m16.HasBeenCollected()) {
      $.player.SetCurrentWeapon(6 /* WEAPONTYPE_M16 */);
      $.flag_m16_gone = 1;
    }
  }
  if ($.flag_uzi_gone == 0) {
    if ($.phils_uzi.HasBeenCollected()) {
      $.player.SetCurrentWeapon(3 /* WEAPONTYPE_UZI */);
      $.flag_uzi_gone = 1;
    }
  }
  if ($.flag_rocket_gone == 0) {
    if ($.phils_rocket.HasBeenCollected()) {
      $.player.SetCurrentWeapon(8 /* WEAPONTYPE_ROCKET */);
      $.flag_rocket_gone = 1;
    }
  }
  if ($.flag_shotgun_gone == 0) {
    if ($.phils_shotgun.HasBeenCollected()) {
      $.player.SetCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */);
      $.flag_shotgun_gone = 1;
    }
  }
  if ($.flag_molotov_gone == 0) {
    if ($.phils_molotov.HasBeenCollected()) {
      $.player.SetCurrentWeapon(10 /* WEAPONTYPE_MOLOTOV */);
      $.flag_molotov_gone = 1;
    }
  }
  return;
}

async function blip_removal_rm2() {
  $.blip_v1.Remove();
  $.blip_v2.Remove();
  $.blip_v3.Remove();
  $.blip_v4.Remove();
  $.blip_v5.Remove();
  $.blip_v6.Remove();
  $.blip_v7.Remove();
  $.blip_v8.Remove();
  $.blip_v9.Remove();
  $.blip_v10.Remove();
  $.blip_v11.Remove();
  $.blip_v12.Remove();
  return;
}

export async function ray2() {
  // MissionBoundary
  // SCM GOSUB mission_start_ray2
  await mission_start_ray2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray2_failed
    await mission_ray2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray2
  await mission_cleanup_ray2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip_warehouse_rm2
  // VAR_FLOAT wh_x_rm2 wh_y_rm2 wh2_x_rm2 wh2_y_rm2
  // VAR_FLOAT phils_defcon_x phils_defcon_y phils_defcon_z
  // VAR_INT flag_phil_in_area flag_phil_arrived
  // VAR_INT phils_molotov phils_rocket phils_m16 phils_uzi phils_shotgun phils_armour
  // VAR_INT flag_m16_gone flag_uzi_gone flag_rocket_gone flag_shotgun_gone
  // VAR_INT flag_molotov_gone
  // VAR_FLOAT m16_x m16_y
  // VAR_FLOAT uzi_x uzi_y
  // VAR_FLOAT rocket_x rocket_y rocket_z
  // VAR_FLOAT molotov_x molotov_y molotov_z
  // VAR_FLOAT shotgun_x shotgun_y
  // VAR_INT player_rm2 player_car_rm2
  // VAR_INT phil phil_truck_1 phil_truck_2 blip_phil
  // VAR_INT flag_phil_dead flag_trucks
  // VAR_INT varmint_1 varmint_2 varmint_3
  // VAR_INT varmint_4 varmint_5 varmint_6
  // VAR_INT varmint_7 varmint_8 varmint_9
  // VAR_INT varmint_10 varmint_11 varmint_12
  // VAR_INT blip_v1 blip_v2 blip_v3 blip_v4
  // VAR_INT blip_v5 blip_v6 blip_v7 blip_v8
  // VAR_INT blip_v9 blip_v10 blip_v11 blip_v12
  // VAR_INT flag_v1_dead flag_v2_dead flag_v3_dead
  // VAR_INT flag_v4_dead flag_v5_dead flag_v6_dead
  // VAR_INT flag_v7_dead flag_v8_dead flag_v9_dead
  // VAR_INT flag_v10_dead flag_v11_dead flag_v12_dead
  // VAR_INT counter_dead_varmints
  // VAR_INT flag_cartel_arrived flag_sneaky_1 flag_sneaky_2
  // VAR_INT sentinel1_rm2 stallion1_rm2 perenial1_rm2
  // VAR_INT stallion_bailout sentinel_bailout perenial_bailout
  // VAR_INT flag_stallion_arrived flag_sentinel_arrived flag_perenial_arrived
  // VAR_INT flag_stallion_created flag_sentinel_created flag_perenial_created
  // VAR_INT flag_launch_perenial flag_launch_stallion
  // VAR_INT blip_stallion1 blip_perenial1 blip_sentinel1
  // VAR_FLOAT varmint_gen1_x varmint_gen1_y
  // VAR_FLOAT stage_1_x stage_1_y
  // VAR_FLOAT stage_2_x stage_2_y
  // VAR_FLOAT stage_3_x stage_3_y
  // VAR_INT timer_dif_rm2 timer_now_rm2 timer_start_rm2
  // VAR_INT flag_audio flag_gate
}
