// Generated from Main/Commercial/kenji3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_km3 = 0;
  $.flag_player_been_bad_km3 = 0;
  $.counter_number_of_colombians_killed_km3 = 0;
  $.counter_all_colombian_cars_dead_km3 = 0;
  $.flag_colombian1_dead_km3 = 0;
  $.flag_colombian2_dead_km3 = 0;
  $.flag_colombian5_dead_km3 = 0;
  $.flag_colombian6_dead_km3 = 0;
  $.flag_colombian_car1_dead_km3 = 0;
  $.flag_colombian_car2_dead_km3 = 0;
  $.flag_yakuza1_km3_dead = 0;
  $.flag_blip_on_yakuza_km3 = 0;
  $.blob_flag = 1;
  $.flag_yakuza_message_km3 = 0;
  $.flag_bloke_in_car_km3 = 0;
  $.flag_car1_created_km3 = 0;
  $.flag_car2_created_km3 = 0;
  $.money_been_picked_up_km3 = 0;
  $.flag_money_created_km3 = 0;
  $.flag_go_for_player_km3 = 0;
  $.flag_trap_audio_removed_km3 = 0;
  $.flag_helper_not_in_car_km3 = 0;
  Path.SwitchRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  Path.SwitchPedRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  {
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k3_ds);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.SetAnim($.kenji);
  $.cs_yakuza = CutsceneObject.Create(ped`GANG_YAKUZA_A`);
  $.cs_yakuza.SetAnim(gang07);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.SetAnim($.kenji);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(459.1, -1413.0, 25.11);
  $.player.SetHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1533) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_A", 10000, 1);
  while ($.cs_time < 6549) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_B", 10000, 1);
  while ($.cs_time < 11426) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_C", 10000, 1);
  while ($.cs_time < 15676) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_D", 10000, 1);
  while ($.cs_time < 17697) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_F", 10000, 1);
  while ($.cs_time < 22086) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM3_E", 10000, 1);
  while ($.cs_time < 24442) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM3_E");
  while ($.cs_time < 25000) {
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
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  Streaming.RequestModel(car`YARDIE`);
  Streaming.RequestModel(car`COLUMB`);
  Streaming.RequestModel(ped`GANG_YARDIE_A`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  while (!(Streaming.HasModelLoaded(car`YARDIE`)) || !(Streaming.HasModelLoaded(ped`GANG_YARDIE_A`)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Text.PrintNow("KM3_1", 7000, 1);
  Audio.LoadMissionAudio(K3_A);
  while (!($.player.IsInModel(128 /* CAR_YARDIE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Text.PrintNow("KM3_2", 7000, 1);
  $.yakuza1_km3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`GANG_YAKUZA_A`, 99.6, -414.3, -100.0);
  $.yakuza1_km3.ClearThreatSearch();
  $.yakuza1_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.yakuza1_km3.SetHeading(0.0);
  $.yakuza1_km3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
  while (!($.player.LocateInCarChar3D($.yakuza1_km3, 8.0, 8.0, 8.0, 0 /* FALSE */)) || !($.player.IsInModel(128 /* CAR_YARDIE */)) || !($.player.IsStopped())) {
    await asyncWait(0);
    if (Char.IsDead($.yakuza1_km3)) {
      Text.PrintNow("KM3_10", 5000, 1);
      $.flag_yakuza1_km3_dead = 1;
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(128 /* CAR_YARDIE */)) && $.flag_player_had_car_message_km3 == 0) {
      Text.PrintNow("KM3_8", 7000, 1);
      $.radar_blip_ped1_km3.Remove();
      $.flag_player_had_car_message_km3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInModel(128 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
      $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
      $.flag_player_had_car_message_km3 = 0;
      $.blob_flag = 1;
    }
  }
  $.yakuza1_km3.FollowPlayer($.player);
  $.radar_blip_ped1_km3.Remove();
  while (!($.player.LocateInCarChar3D($.yakuza1_km3, 1.0, 1.0, 3.0, 0 /* FALSE */)) || !($.player.IsInModel(128 /* CAR_YARDIE */))) {
    await asyncWait(0);
    if (Char.IsDead($.yakuza1_km3)) {
      Text.PrintNow("KM3_10", 5000, 1);
      $.flag_yakuza1_km3_dead = 1;
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(128 /* CAR_YARDIE */)) && $.flag_player_had_car_message_km3 == 0) {
      Text.PrintNow("KM3_8", 7000, 1);
      $.radar_blip_ped1_km3.Remove();
      $.flag_player_had_car_message_km3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInModel(128 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
      $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
      $.flag_player_had_car_message_km3 = 0;
      $.blob_flag = 1;
    }
    if (!($.yakuza1_km3.IsInPlayersGroup($.player)) && $.flag_yakuza_message_km3 == 0) {
      Text.PrintNow("HEY9", 5000, 1);
      $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
      $.flag_yakuza_message_km3 = 1;
    }
    if ($.player.LocateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, 0 /* FALSE */) && $.flag_yakuza_message_km3 == 1) {
      $.yakuza1_km3.FollowPlayer($.player);
      $.radar_blip_ped1_km3.Remove();
      $.flag_yakuza_message_km3 = 0;
    }
  }
  $.radar_blip_ped1_km3.Remove();
  Text.PrintNow("KM3_3", 5000, 1);
  $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
  $.colombian_car1_km3 = Car.Create(131 /* CAR_COLUMB */, 230.3, -42.2, -100.0);
  $.colombian_car1_km3.SetHeading(0.0);
  $.colombian_car1_km3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.colombian_car1_km3.ChangeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.flag_car1_created_km3 = 1;
  $.colombian_car2_km3 = Car.Create(131 /* CAR_COLUMB */, 235.9, -41.3, -100.0);
  $.colombian_car2_km3.SetHeading(0.0);
  $.colombian_car2_km3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.colombian_car2_km3.ChangeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.flag_car2_created_km3 = 1;
  $.colombian1_km3 = Char.CreateInsideCar($.colombian_car1_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
  $.colombian1_km3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.colombian1_km3.ClearThreatSearch();
  $.colombian_car1_km3.SetIdle();
  $.colombian2_km3 = Char.CreateAsPassenger($.colombian_car1_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
  $.colombian2_km3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.colombian2_km3.ClearThreatSearch();
  $.colombian5_km3 = Char.CreateInsideCar($.colombian_car2_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
  $.colombian5_km3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.colombian_car2_km3.SetIdle();
  $.colombian5_km3.ClearThreatSearch();
  $.colombian6_km3 = Char.CreateAsPassenger($.colombian_car2_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
  $.colombian6_km3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.colombian6_km3.ClearThreatSearch();
  $.blob_flag = 1;
  while (!($.player.LocateStoppedInCar2D(231.1, -26.3, 6.0, 6.0, $.blob_flag)) || !($.player.IsInModel(128 /* CAR_YARDIE */))) {
    await asyncWait(0);
    if ($.flag_yakuza1_km3_dead == 0) {
      if (Char.IsDead($.yakuza1_km3)) {
        $.flag_yakuza1_km3_dead = 1;
      }
      else {
        if (!($.yakuza1_km3.IsInPlayersGroup($.player)) && $.flag_blip_on_yakuza_km3 == 0) {
          Text.PrintNow("HEY7", 5000, 1);
          $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
          $.radar_blip_coord2_km3.Remove();
          $.flag_blip_on_yakuza_km3 = 1;
          $.blob_flag = 0;
        }
        if ($.player.LocateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_yakuza_km3 == 1) {
          $.yakuza1_km3.FollowPlayer($.player);
          $.radar_blip_ped1_km3.Remove();
          $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
          $.flag_blip_on_yakuza_km3 = 0;
          $.blob_flag = 1;
        }
      }
    }
    if (Car.IsDead($.colombian_car1_km3)) {
      $.flag_colombian_car1_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.colombian_car2_km3)) {
      $.flag_colombian_car2_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian1_km3)) {
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian2_km3)) {
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian5_km3)) {
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian6_km3)) {
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(128 /* CAR_YARDIE */)) && $.flag_player_had_car_message_km3 == 0) {
      Text.PrintNow("KM3_8", 7000, 1);
      $.radar_blip_coord2_km3.Remove();
      $.flag_player_had_car_message_km3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.IsInModel(128 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
      $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
      $.flag_player_had_car_message_km3 = 0;
      $.blob_flag = 1;
    }
    if ($.player.LocateAnyMeans2D(231.1, -26.3, 10.0, 10.0, 0 /* FALSE */)) {
      if (!($.player.IsInModel(128 /* CAR_YARDIE */)) || $.player.IsShooting()) {
        Text.PrintNow("KM3_14", 7000, 1);
        // SCM GOSUB attack_player
        await attack_player();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.radar_blip_coord2_km3.Remove();
  if ($.flag_colombian_car1_dead_km3 == 0) {
    $.colombian_car1_km3.SetOnlyDamagedByPlayer(0 /* FALSE */);
  }
  if ($.flag_colombian_car2_dead_km3 == 0) {
    $.colombian_car2_km3.SetOnlyDamagedByPlayer(0 /* FALSE */);
  }
  Text.PrintNow("KM3_5", 7000, 1);
  $.blob_flag = 1;
  while (!($.player.IsPressingHorn()) || !($.player.LocateStoppedInCar2D(231.1, -26.3, 6.0, 6.0, $.blob_flag)) || !($.player.IsInModel(128 /* CAR_YARDIE */))) {
    await asyncWait(0);
    if ($.flag_yakuza1_km3_dead == 0) {
      if (Char.IsDead($.yakuza1_km3)) {
        $.flag_yakuza1_km3_dead = 1;
      }
      else {
        if (!($.yakuza1_km3.IsInPlayersGroup($.player)) && $.flag_blip_on_yakuza_km3 == 0) {
          Text.PrintNow("HEY7", 5000, 1);
          $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
          $.radar_blip_coord2_km3.Remove();
          $.flag_blip_on_yakuza_km3 = 1;
          $.blob_flag = 0;
        }
        if ($.player.LocateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_yakuza_km3 == 1) {
          $.yakuza1_km3.FollowPlayer($.player);
          $.radar_blip_ped1_km3.Remove();
          $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
          $.flag_blip_on_yakuza_km3 = 0;
          $.blob_flag = 1;
        }
        $.yakuza1_km3.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
      }
    }
    if (Car.IsDead($.colombian_car1_km3)) {
      $.flag_colombian_car1_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.colombian_car2_km3)) {
      $.flag_colombian_car2_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian1_km3)) {
      $.flag_colombian1_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian2_km3)) {
      $.flag_colombian2_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian5_km3)) {
      $.flag_colombian5_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian6_km3)) {
      $.flag_colombian6_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if ($.player.LocateAnyMeans2D(231.1, -26.3, 10.0, 10.0, 0 /* FALSE */)) {
      if (!($.player.IsInModel(128 /* CAR_YARDIE */)) || $.player.IsShooting()) {
        Text.PrintNow("KM3_14", 7000, 1);
        // SCM GOSUB attack_player
        await attack_player();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
    }
  }
  Text.ClearThisPrint("KM3_5");
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  World.ClearArea(252.0, -45.75, 20.8, 1.0, 1 /* TRUE */);
  Camera.SetFixedPosition(252.0, -45.75, 20.8, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(251.1, -45.2, 20.6, 2 /* JUMP_CUT */);
  $.colombian1_km3.SetObjLeaveCar($.colombian_car1_km3);
  $.colombian2_km3.SetObjLeaveCar($.colombian_car1_km3);
  $.colombian5_km3.SetObjLeaveCar($.colombian_car2_km3);
  $.colombian6_km3.SetObjLeaveCar($.colombian_car2_km3);
  if (!(Car.IsDead($.colombian_car1_km3))) {
    $.colombian_car1_km3.ChangeLock(1 /* CARLOCK_UNLOCKED */);
  }
  if (!(Car.IsDead($.colombian_car2_km3))) {
    $.colombian_car2_km3.ChangeLock(1 /* CARLOCK_UNLOCKED */);
  }
  while ($.colombian1_km3.IsInCar($.colombian_car1_km3) && $.colombian2_km3.IsInCar($.colombian_car1_km3) && $.colombian5_km3.IsInCar($.colombian_car2_km3) && $.colombian6_km3.IsInCar($.colombian_car2_km3)) {
    await asyncWait(0);
    if ($.flag_yakuza1_km3_dead == 0) {
      if (Char.IsDead($.yakuza1_km3)) {
        $.flag_yakuza1_km3_dead = 1;
      }
    }
    if (Car.IsDead($.colombian_car1_km3)) {
      $.flag_colombian_car1_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.colombian_car2_km3)) {
      $.flag_colombian_car2_dead_km3 = 1;
      Text.PrintNow("KM3_11", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian1_km3)) {
      $.flag_colombian1_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian2_km3)) {
      $.flag_colombian2_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian5_km3)) {
      $.flag_colombian5_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.colombian6_km3)) {
      $.flag_colombian6_dead_km3 = 1;
      Text.PrintNow("KM3_9", 5000, 1);
      // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
    }
  }
  if ($.flag_colombian2_dead_km3 == 0) {
    $.colombian2_km3.SetObjGotoCoordOnFoot(233.3, -37.1);
    while (!($.colombian2_km3.IsObjectivePassed())) {
      await asyncWait(0);
      if ($.flag_yakuza1_km3_dead == 0) {
        if (Char.IsDead($.yakuza1_km3)) {
          $.flag_yakuza1_km3_dead = 1;
        }
      }
      if (Car.IsDead($.colombian_car1_km3)) {
        $.flag_colombian_car1_dead_km3 = 1;
        Text.PrintNow("KM3_11", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.colombian_car2_km3)) {
        $.flag_colombian_car2_dead_km3 = 1;
        Text.PrintNow("KM3_11", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.colombian1_km3)) {
        $.flag_colombian1_dead_km3 = 1;
        Text.PrintNow("KM3_9", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.colombian2_km3)) {
        $.flag_colombian2_dead_km3 = 1;
        Text.PrintNow("KM3_9", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.colombian5_km3)) {
        $.flag_colombian5_dead_km3 = 1;
        Text.PrintNow("KM3_9", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.colombian6_km3)) {
        $.flag_colombian6_dead_km3 = 1;
        Text.PrintNow("KM3_9", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
    }
    $.money_km3 = Pickup.Create(briefcase, 3 /* PICKUP_ONCE */, 233.7, -36.0, 15.8);
    $.flag_money_created_km3 = 1;
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Text.PrintNow("KM3_12", 5000, 1);
  timera = 0;
  while ($.flag_go_for_player_km3 == 0) {
    await asyncWait(0);
    if (timera >= 4000) {
      $.flag_go_for_player_km3 = 1;
    }
    if ($.flag_yakuza1_km3_dead == 0) {
      if (Char.IsDead($.yakuza1_km3)) {
        $.flag_yakuza1_km3_dead = 1;
      }
      else {
        if ($.flag_helper_not_in_car_km3 == 0) {
          if ($.yakuza1_km3.IsInAnyCar()) {
            $.car3_km3 = $.yakuza1_km3.StoreCarIsIn();
            if (!(Car.IsDead($.car3_km3))) {
              $.yakuza1_km3.LeaveGroup();
              $.yakuza1_km3.SetObjLeaveCar($.car3_km3);
            }
          }
          else {
            $.flag_helper_not_in_car_km3 = 1;
          }
        }
        if ($.flag_helper_not_in_car_km3 == 1) {
          $.yakuza1_km3.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
          $.yakuza1_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        }
      }
    }
    if ($.flag_colombian1_dead_km3 == 0) {
      if (Char.IsDead($.colombian1_km3)) {
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian1_dead_km3 = 1;
      }
    }
    if ($.flag_colombian2_dead_km3 == 0) {
      if (Char.IsDead($.colombian2_km3)) {
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian2_dead_km3 = 1;
      }
    }
    if ($.flag_colombian5_dead_km3 == 0) {
      if (Char.IsDead($.colombian5_km3)) {
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian5_dead_km3 = 1;
      }
    }
    if ($.flag_colombian6_dead_km3 == 0) {
      if (Char.IsDead($.colombian6_km3)) {
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian6_dead_km3 = 1;
      }
    }
    if ($.flag_colombian_car1_dead_km3 == 0) {
      if (Car.IsDead($.colombian_car1_km3)) {
        ++$.counter_all_colombian_cars_dead_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian_car1_dead_km3 = 1;
      }
    }
    if ($.flag_colombian_car2_dead_km3 == 0) {
      if (Car.IsDead($.colombian_car2_km3)) {
        ++$.counter_all_colombian_cars_dead_km3;
        $.flag_go_for_player_km3 = 1;
        $.flag_colombian_car2_dead_km3 = 1;
      }
    }
    if (!($.player.IsInModel(128 /* CAR_YARDIE */))) {
      $.flag_go_for_player_km3 = 1;
    }
    if (!($.player.LocateAnyMeans2D(231.1, -26.3, 6.0, 6.0, 0 /* FALSE */))) {
      $.flag_go_for_player_km3 = 1;
    }
    if ($.player.LocateAnyMeans2D(231.1, -26.3, 6.0, 6.0, 0 /* FALSE */)) {
      if ($.player.IsShooting()) {
        $.flag_go_for_player_km3 = 1;
      }
    }
    if ($.money_been_picked_up_km3 == 0) {
      if ($.money_km3.HasBeenCollected()) {
        Text.PrintNow("KM4_8", 5000, 1);
        $.flag_go_for_player_km3 = 1;
        $.money_been_picked_up_km3 = 1;
      }
    }
  }
}

async function kill_player_km3() {
  Audio.PlayMissionAudio();
  Text.PrintNow("KM3_7", 7000, 1);
  if ($.money_been_picked_up_km3 == 0) {
    $.radar_blip_money_km3 = Blip.AddForPickup($.money_km3);
  }
  if ($.flag_colombian_car1_dead_km3 == 0) {
    $.radar_blip_colombian_car1_km3 = Blip.AddForCar($.colombian_car1_km3);
  }
  if ($.flag_colombian_car2_dead_km3 == 0) {
    $.radar_blip_colombian_car2_km3 = Blip.AddForCar($.colombian_car2_km3);
  }
  if ($.flag_colombian1_dead_km3 == 0) {
    $.colombian1_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian1_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian1_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.radar_blip_colombian1_km3 = Blip.AddForChar($.colombian1_km3);
  }
  if ($.flag_colombian2_dead_km3 == 0) {
    $.colombian2_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian2_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian2_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.radar_blip_colombian2_km3 = Blip.AddForChar($.colombian2_km3);
  }
  if ($.flag_colombian5_dead_km3 == 0) {
    $.radar_blip_colombian5_km3 = Blip.AddForChar($.colombian5_km3);
    $.colombian5_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian5_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian5_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  }
  if ($.flag_colombian6_dead_km3 == 0) {
    $.radar_blip_colombian6_km3 = Blip.AddForChar($.colombian6_km3);
    $.colombian6_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian6_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian6_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  }
  timerb = 0;
  while (!($.counter_number_of_colombians_killed_km3 == 4) || !($.counter_all_colombian_cars_dead_km3 == 2) || !($.money_been_picked_up_km3 == 1)) {
    await asyncWait(0);
    if ($.flag_trap_audio_removed_km3 == 0) {
      if (Audio.HasMissionAudioFinished()) {
        Text.ClearThisPrint("KM3_7");
        $.flag_trap_audio_removed_km3 = 1;
      }
    }
    if ($.money_been_picked_up_km3 == 0) {
      if ($.money_km3.HasBeenCollected()) {
        Text.PrintNow("KM4_8", 5000, 1);
        $.radar_blip_money_km3.Remove();
        $.money_been_picked_up_km3 = 1;
      }
    }
    if ($.flag_yakuza1_km3_dead == 0) {
      if (Char.IsDead($.yakuza1_km3)) {
        $.flag_yakuza1_km3_dead = 1;
      }
      else {
        if ($.flag_helper_not_in_car_km3 == 0) {
          if ($.yakuza1_km3.IsInAnyCar()) {
            $.car3_km3 = $.yakuza1_km3.StoreCarIsIn();
            if (!(Car.IsDead($.car3_km3))) {
              $.yakuza1_km3.LeaveGroup();
              $.yakuza1_km3.SetObjLeaveCar($.car3_km3);
            }
          }
          else {
            $.flag_helper_not_in_car_km3 = 1;
          }
        }
        if ($.flag_helper_not_in_car_km3 == 1) {
          $.yakuza1_km3.SetThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
          $.yakuza1_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        }
      }
    }
    if ($.counter_number_of_colombians_killed_km3 == 4) {
      if (!(Char.IsDead($.yakuza1_km3))) {
        if ($.player.LocateAnyMeansChar2D($.yakuza1_km3, 20.0, 20.0, 0 /* FALSE */)) {
          $.yakuza1_km3.FollowPlayer($.player);
        }
      }
    }
    if ($.flag_colombian1_dead_km3 == 0) {
      if (Char.IsDead($.colombian1_km3)) {
        $.radar_blip_colombian1_km3.Remove();
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_colombian1_dead_km3 = 1;
      }
    }
    if ($.flag_colombian2_dead_km3 == 0) {
      if (Char.IsDead($.colombian2_km3)) {
        $.radar_blip_colombian2_km3.Remove();
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_colombian2_dead_km3 = 1;
      }
    }
    if ($.flag_colombian5_dead_km3 == 0) {
      if (Char.IsDead($.colombian5_km3)) {
        $.radar_blip_colombian5_km3.Remove();
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_colombian5_dead_km3 = 1;
      }
    }
    if ($.flag_colombian6_dead_km3 == 0) {
      if (Char.IsDead($.colombian6_km3)) {
        $.radar_blip_colombian6_km3.Remove();
        ++$.counter_number_of_colombians_killed_km3;
        $.flag_colombian6_dead_km3 = 1;
      }
    }
    if ($.flag_colombian_car1_dead_km3 == 0) {
      if (Car.IsDead($.colombian_car1_km3)) {
        $.radar_blip_colombian_car1_km3.Remove();
        ++$.counter_all_colombian_cars_dead_km3;
        $.flag_colombian_car1_dead_km3 = 1;
      }
    }
    if ($.flag_colombian_car2_dead_km3 == 0) {
      if (Car.IsDead($.colombian_car2_km3)) {
        $.radar_blip_colombian_car2_km3.Remove();
        ++$.counter_all_colombian_cars_dead_km3;
        $.flag_colombian_car2_dead_km3 = 1;
      }
    }
  }
  if (!(Char.IsDead($.yakuza1_km3))) {
    if ($.player.LocateAnyMeansChar2D($.yakuza1_km3, 20.0, 20.0, 0 /* FALSE */)) {
      $.yakuza1_km3.FollowPlayer($.player);
    }
  }
  Text.PrintNow("KM3_13", 5000, 1);
  $.radar_blip_coord3_km3 = Blip.AddForCoord(452.3, -1465.8, 17.6);
  $.blob_flag = 1;
  while (!($.player.LocateStoppedAnyMeans3D(452.3, -1465.8, 17.6, 4.0, 4.0, 4.0, $.blob_flag))) {
    await asyncWait(0);
  }
  $.radar_blip_coord3_km3.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.script_controlled_player = $.player.GetChar();
  if ($.player.IsInAnyCar()) {
    $.car_cut_km3 = $.player.StoreCarIsIn();
    $.script_controlled_player.SetObjLeaveCar($.car_cut_km3);
    while ($.player.IsInCar($.car_cut_km3)) {
      await asyncWait(0);
      if (Car.IsDead($.car_cut_km3)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji3_failed"); // fallback: would break linear control flow
      }
    }
  }
  Camera.SetFixedPosition(420.41, -1479.59, 26.13, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(420.87, -1478.75, 26.38, 2 /* JUMP_CUT */);
  $.player.SetCoordinates(425.85, -1477.16, -100.0);
  $.script_controlled_player.SetObjGotoCoordOnFoot(428.57, -1465.01);
  while (!($.script_controlled_player.IsObjectivePassed())) {
    await asyncWait(0);
  }
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.player.SetCoordinates(426.81, -1486.40, 17.64);
  $.player.SetHeading(180.0);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  }
  // SCM GOTO → mission_kenji3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji3_passed"); // fallback: would break linear control flow
}

async function mission_kenji3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_kenji3_passed() {
  $.flag_kenji_mission3_passed = 1;
  Stat.RegisterMissionPassed("KM3");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 25000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(25000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT kenji_mission4_loop
  return;
}

async function mission_cleanup_kenji3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  if (!(Car.IsDead($.colombian_car1_km3))) {
    if ($.flag_colombian_car1_dead_km3 == 0) {
      $.colombian_car1_km3.ChangeLock(1 /* CARLOCK_UNLOCKED */);
      $.colombian_car1_km3.SetOnlyDamagedByPlayer(0 /* FALSE */);
    }
  }
  if (!(Car.IsDead($.colombian_car2_km3))) {
    if ($.flag_colombian_car2_dead_km3 == 0) {
      $.colombian_car2_km3.ChangeLock(1 /* CARLOCK_UNLOCKED */);
      $.colombian_car2_km3.SetOnlyDamagedByPlayer(0 /* FALSE */);
    }
  }
  if ($.flag_money_created_km3 == 1) {
    if ($.money_been_picked_up_km3 == 0) {
      $.money_km3.Remove();
    }
  }
  Streaming.MarkModelAsNoLongerNeeded(car`YARDIE`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  $.radar_blip_ped1_km3.Remove();
  $.radar_blip_coord2_km3.Remove();
  $.radar_blip_colombian_car1_km3.Remove();
  $.radar_blip_colombian_car2_km3.Remove();
  $.radar_blip_colombian1_km3.Remove();
  $.radar_blip_colombian2_km3.Remove();
  $.radar_blip_colombian5_km3.Remove();
  $.radar_blip_colombian6_km3.Remove();
  $.radar_blip_money_km3.Remove();
  $.radar_blip_coord3_km3.Remove();
  Mission.Finish();
  return;
}

async function attack_player() {
  if ($.flag_colombian1_dead_km3 == 0) {
    $.colombian1_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian1_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian1_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.colombian1_km3.SetObjKillPlayerAnyMeans($.player);
  }
  if ($.flag_colombian2_dead_km3 == 0) {
    $.colombian2_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian2_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian2_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.colombian2_km3.SetObjKillPlayerAnyMeans($.player);
  }
  if ($.flag_colombian5_dead_km3 == 0) {
    $.colombian5_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian5_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian5_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.colombian5_km3.SetObjKillPlayerAnyMeans($.player);
  }
  if ($.flag_colombian6_dead_km3 == 0) {
    $.colombian6_km3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colombian6_km3.SetThreatSearch(10 /* THREAT_GANG_YAKUZA */);
    $.colombian6_km3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
    $.colombian6_km3.SetObjKillPlayerAnyMeans($.player);
  }
  return;
}

export async function kenji3() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_kenji3
  await mission_start_kenji3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji3_failed
    await mission_kenji3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji3
  await mission_cleanup_kenji3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT colombian_car1_km3
  // VAR_INT colombian_car2_km3
  // VAR_INT colombian1_km3
  // VAR_INT colombian2_km3
  // VAR_INT colombian5_km3
  // VAR_INT colombian6_km3
  // VAR_INT yakuza1_km3
  // VAR_INT counter_number_of_yardies_dead_km3
  // VAR_INT radar_blip_yardie_car_km3
  // VAR_INT radar_blip_ped1_km3
  // VAR_INT radar_blip_coord2_km3
  // VAR_INT flag_player_had_car_message_km3
  // VAR_INT flag_player_had_repair_message_km3
  // VAR_INT flag_player_been_bad_km3
  // VAR_INT radar_blip_colombian_car1_km3
  // VAR_INT radar_blip_colombian_car2_km3
  // VAR_INT radar_blip_colombian1_km3
  // VAR_INT radar_blip_colombian2_km3
  // VAR_INT radar_blip_colombian5_km3
  // VAR_INT radar_blip_colombian6_km3
  // VAR_INT counter_number_of_colombians_killed_km3
  // VAR_INT counter_all_colombian_cars_dead_km3
  // VAR_INT flag_colombian1_dead_km3
  // VAR_INT flag_colombian2_dead_km3
  // VAR_INT flag_colombian5_dead_km3
  // VAR_INT flag_colombian6_dead_km3
  // VAR_INT flag_colombian_car1_dead_km3
  // VAR_INT flag_colombian_car2_dead_km3
  // VAR_INT car_km3
  // VAR_INT flag_yakuza1_km3_dead
  // VAR_INT car2_km3
  // VAR_INT car3_km3
  // VAR_INT car_cut_km3
  // VAR_INT flag_blip_on_yakuza_km3
  // VAR_INT flag_yakuza_message_km3
  // VAR_INT flag_bloke_in_car_km3
  // VAR_INT flag_car1_created_km3
  // VAR_INT flag_car2_created_km3
  // VAR_INT money_km3
  // VAR_INT radar_blip_money_km3
  // VAR_INT money_been_picked_up_km3
  // VAR_INT radar_blip_coord3_km3
  // VAR_INT flag_money_created_km3
  // VAR_INT flag_go_for_player_km3
  // VAR_INT flag_trap_audio_removed_km3
  // VAR_INT flag_helper_not_in_car_km3
}
