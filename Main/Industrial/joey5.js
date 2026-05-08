// Generated from Main/Industrial/joey5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey5() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.skunk_message_played_before = 0;
  $.flag_dont_do_car_check_joey5 = 0;
  $.flag_leave_car_message_joey5 = 0;
  $.flag_car_in_area_joey5 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, TROLL);
  Streaming.RequestModel(car`IDAHO`);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint)) || !(Streaming.HasModelLoaded(car`IDAHO`))) {
    await asyncWait(0);
  }
  Cutscene.Load(J5_DST);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
  $.cut_car2_lm3 = Car.Create(84 /* CAR_IDAHO */, 1182.5, -857.0, 14.1);
  $.cut_car2_lm3.SetHeading(291.2);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.SetAnim($.joey);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj01`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_troll = CutsceneObject.Create(hier`cutobj03`);
  $.cs_troll.SetAnim(TROLL);
  World.ClearArea(1191.9, -870.4, 15.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1191.9, -870.4, -100.0);
  $.player.SetHeading(230.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1250) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM5_A", 10000, 2);
  while ($.cs_time < 5658) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM5_B", 10000, 2);
  while ($.cs_time < 8419) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM5_C", 10000, 2);
  while ($.cs_time < 12522) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM5_D", 10000, 2);
  while ($.cs_time < 16368) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM5_E", 10000, 2);
  while ($.cs_time < 18855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 20000) {
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
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  $.cut_car2_lm3.Delete();
  $.on_new_objective_joey5_1 = 0;
  $.on_new_objective_joey5_2 = 0;
  $.is_lipsbrother1_car_dead = 0;
  $.is_lipsbrother2_car_dead = 0;
  $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
  $.flag_car_crushed_joey5 = 0;
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.RequestModel(car`CORPSE`);
  Streaming.RequestModel(car`SENTINEL`);
  while (!(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasModelLoaded(car`CORPSE`)) || !(Streaming.HasModelLoaded(car`SENTINEL`))) {
    await asyncWait(0);
  }
  $.deadman_car = Car.Create(108 /* CAR_CORPSE */, 867.2, -992.8, -100.0);
  $.blip1_j5 = Blip.AddForCar($.deadman_car);
  $.lipsbrother1_car = Car.Create(88 /* CAR_SENTINEL */, 892.0, -992.3, 4.6);
  $.lipsbrother1_car.SetHeading(90.0);
  $.lipsbrother1_car.SetStrong(1 /* TRUE */);
  $.lipsbrother1 = Char.CreateInsideCar($.lipsbrother1_car, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`);
  $.lipsbrother1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 60);
  $.lipsbrother1_car.SetIdle();
  $.lipsbrother1_car.LockDoors(2 /* CARLOCK_LOCKED */);
  $.lipsbrother1_car.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.lipsbrother2_car = Car.Create(88 /* CAR_SENTINEL */, 800.0, -961.9, -100.0);
  $.lipsbrother2_car.SetHeading(241.0);
  $.lipsbrother2_car.SetStrong(1 /* TRUE */);
  $.lipsbrother2 = Char.CreateInsideCar($.lipsbrother2_car, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`);
  $.lipsbrother2.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 60);
  $.lipsbrother2_car.SetIdle();
  $.lipsbrother2_car.LockDoors(2 /* CARLOCK_LOCKED */);
  $.lipsbrother2_car.SetOnlyDamagedByPlayer(1 /* TRUE */);
  while (!($.player.IsInCar($.deadman_car))) {
    await asyncWait(0);
    if (Car.IsDead($.deadman_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if ($.deadman_car.IsUpsidedown() && $.deadman_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.lipsbrother1) && $.is_lipsbrother1_car_dead == 0) {
      $.player.AddScore(5000);
      $.is_lipsbrother1_car_dead = 1;
    }
    if (Char.IsDead($.lipsbrother2) && $.is_lipsbrother2_car_dead == 0) {
      $.player.AddScore(5000);
      $.is_lipsbrother2_car_dead = 1;
    }
    if (!(Car.IsDead($.lipsbrother1_car))) {
      if (!($.lipsbrother1_car.IsHealthGreater(999))) {
        Text.PrintNow("JM5_2", 5000, 1);
        // SCM GOTO → kill_the_player (not lowered; manual jump required)
        throw new Error("unresolved GOTO kill_the_player"); // fallback: would break linear control flow
      }
    }
    if (!(Car.IsDead($.lipsbrother2_car))) {
      if (!($.lipsbrother2_car.IsHealthGreater(999))) {
        Text.PrintNow("JM5_2", 5000, 1);
        // SCM GOTO → kill_the_player (not lowered; manual jump required)
        throw new Error("unresolved GOTO kill_the_player"); // fallback: would break linear control flow
      }
    }
  }
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(863.389, -988.698, 4.350, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(864.217, -989.236, 4.507, 2 /* JUMP_CUT */);
  World.SetPedDensityMultiplier(0.0);
  Text.PrintNow("JM5_2", 5000, 1);
  await asyncWait(1500);
  if (!(Char.IsDead($.lipsbrother1))) {
    if (!(Car.IsDead($.lipsbrother1_car))) {
      $.lipsbrother1_car.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
      $.lipsbrother1_car.SetOnlyDamagedByPlayer(0 /* FALSE */);
      $.lipsbrother1_car.SetCruiseSpeed(40.0);
      $.lipsbrother1_car.SetDrivingStyle(2);
      $.lipsbrother1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
  if (!(Char.IsDead($.lipsbrother2))) {
    if (!(Car.IsDead($.lipsbrother2_car))) {
      $.lipsbrother2_car.SetMission(4 /* MISSION_BLOCKPLAYER_FARAWAY */);
      $.lipsbrother2_car.SetOnlyDamagedByPlayer(0 /* FALSE */);
      $.lipsbrother2_car.SetCruiseSpeed(40.0);
      $.lipsbrother2_car.SetDrivingStyle(2);
      $.lipsbrother2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
  await asyncWait(1500);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
}

async function kill_the_player() {
  if (!(Char.IsDead($.lipsbrother1))) {
    if (!(Car.IsDead($.lipsbrother1_car))) {
      $.lipsbrother1_car.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
      $.lipsbrother1_car.SetOnlyDamagedByPlayer(0 /* FALSE */);
      $.lipsbrother1_car.SetCruiseSpeed(40.0);
      $.lipsbrother1_car.SetDrivingStyle(2);
      $.lipsbrother1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
  if (!(Char.IsDead($.lipsbrother2))) {
    if (!(Car.IsDead($.lipsbrother2_car))) {
      $.lipsbrother2_car.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
      $.lipsbrother2_car.SetOnlyDamagedByPlayer(0 /* FALSE */);
      $.lipsbrother2_car.SetCruiseSpeed(40.0);
      $.lipsbrother2_car.SetDrivingStyle(2);
      $.lipsbrother2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
  $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, .0, -100.0);
  $.blip2_j5.Remove();
  $.blob_flag = 1;
}

async function car_not_quite_under_crane() {
  await asyncWait(0);
  if (Car.IsDead($.deadman_car)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
  }
  while (!($.deadman_car.IsStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 30.0, $.blob_flag))) {
    await asyncWait(0);
    // SCM GOSUB skunk_car_check
    await skunk_car_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Car.IsDead($.deadman_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.deadman_car.IsInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 30.0, 0 /* FALSE */)) {
        $.flag_dont_do_car_check_joey5 = 1;
        if ($.flag_leave_car_message_joey5 == 0) {
          Text.PrintNow("OUT_VEH", 4000, 1);
          $.flag_leave_car_message_joey5 = 1;
        }
      }
      else {
        $.flag_leave_car_message_joey5 = 0;
        $.flag_dont_do_car_check_joey5 = 0;
      }
    }
    if ($.deadman_car.IsUpsidedown() && $.deadman_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if ($.flag_dont_do_car_check_joey5 == 0) {
      if (!(Car.IsDead($.deadman_car))) {
        if ($.player.IsInCar($.deadman_car)) {
          if ($.flag_car_blip_displayed_j5 == 1 /* TRUE */) {
            $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, .0, -100.0);
            $.blip2_j5.ChangeDisplay(2 /* BLIP_ONLY */);
            $.blip1_j5.Remove();
            $.flag_car_blip_displayed_j5 = 0 /* FALSE */;
            $.blob_flag = 1;
          }
        }
        if (!($.player.IsInCar($.deadman_car))) {
          if ($.flag_car_blip_displayed_j5 == 0 /* FALSE */) {
            $.blip1_j5 = Blip.AddForCar($.deadman_car);
            $.blip2_j5.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
            $.blob_flag = 0;
          }
        }
      }
    }
    if ($.flag_player_had_crusher_help_hm5 == 0) {
      if ($.player.LocateAnyMeans2D(1140.3, 50.1, 20.0, 20.0, 0 /* FALSE */)) {
        if ($.player.IsInCar($.deadman_car)) {
          Text.PrintHelp("CRUSH");
          $.flag_player_had_crusher_help_hm5 = 1;
        }
      }
    }
    if ($.player.IsInCar($.deadman_car) && $.skunk_message_played_before == 0) {
      Text.PrintNow("JM5_1", 4000, 1);
      $.skunk_message_played_before = 1;
    }
  }
  if (Car.IsDead($.deadman_car)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
  }
  $.blob_flag = 1;
  while (!(Crane.IsLiftingCar(1120.0, 46.0, $.deadman_car))) {
    await asyncWait(0);
    // SCM GOSUB skunk_car_check
    await skunk_car_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Car.IsDead($.deadman_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if ($.deadman_car.IsUpsidedown() && $.deadman_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if ($.deadman_car.IsStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 20.0, $.blob_flag)) {
      $.flag_car_in_area_joey5 = 1;
    }
    else {
      $.flag_car_in_area_joey5 = 0;
    }
    if ($.flag_car_in_area_joey5 == 0) {
      if (!(Car.IsDead($.deadman_car))) {
        if ($.player.IsInCar($.deadman_car)) {
          if ($.flag_car_blip_displayed_j5 == 1 /* TRUE */) {
            $.blip2_j5 = Blip.AddForCoord(1139.0, 54.5, .0, -100.0);
            $.blip2_j5.ChangeDisplay(2 /* BLIP_ONLY */);
            $.blip1_j5.Remove();
            $.flag_car_blip_displayed_j5 = 0 /* FALSE */;
            $.blob_flag = 1;
          }
        }
        if (!($.player.IsInCar($.deadman_car))) {
          if ($.flag_car_blip_displayed_j5 == 0 /* FALSE */) {
            $.blip1_j5 = Blip.AddForCar($.deadman_car);
            $.blip2_j5.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.flag_car_blip_displayed_j5 = 1 /* TRUE */;
            $.blob_flag = 0;
          }
        }
      }
    }
  }
  $.blip1_j5.Remove();
  $.blip2_j5.Remove();
  Text.ClearPrints();
  while (!($.deadman_car.IsCrushed())) {
    // SCM GOSUB skunk_car_check
    await skunk_car_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Car.IsDead($.deadman_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    if ($.deadman_car.IsCrushed()) {
      // SCM GOTO → mission_joey5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_passed"); // fallback: would break linear control flow
    }
    if ($.deadman_car.IsUpsidedown() && $.deadman_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey5_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  // SCM GOTO → mission_joey5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey5_passed"); // fallback: would break linear control flow
  }
}

async function mission_joey5_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_joey5_passed() {
  $.flag_joey_mission5_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(JM5);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT joey_mission6_loop
  return;
}

async function mission_cleanup_joey5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.blip1_j5.Remove();
  $.blip2_j5.Remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`CORPSE`);
  if (!(Car.IsDead($.lipsbrother1_car))) {
    $.lipsbrother1_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  if (!(Car.IsDead($.lipsbrother2_car))) {
    $.lipsbrother2_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  Mission.Finish();
  return;
}

async function skunk_car_check() {
  {
  if (Char.IsDead($.lipsbrother1) && $.is_lipsbrother1_car_dead == 0) {
    $.player.AddScore(5000);
    $.is_lipsbrother1_car_dead = 1;
  }
  if (Char.IsDead($.lipsbrother2) && $.is_lipsbrother2_car_dead == 0) {
    $.player.AddScore(5000);
    $.is_lipsbrother2_car_dead = 1;
  }
  if (!(Car.IsDead($.lipsbrother1_car))) {
    if ($.lipsbrother1_car.IsUpsidedown() && $.lipsbrother1_car.IsStopped() && $.on_new_objective_joey5_1 == 0) {
      if (!(Char.IsDead($.lipsbrother1))) {
        $.lipsbrother1_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
        $.lipsbrother1.SetObjKillPlayerOnFoot($.player);
      }
      $.on_new_objective_joey5_1 = 1;
    }
    if ($.lipsbrother1_car.IsInArea2D(1122.7, 2.9, 1183.8, 111.9, 0 /* FALSE */) && $.on_new_objective_joey5_1 == 0) {
      if (!(Char.IsDead($.lipsbrother1))) {
        $.lipsbrother1_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
        $.lipsbrother1.SetObjKillPlayerOnFoot($.player);
      }
      $.on_new_objective_joey5_1 = 1;
    }
  }
  if (!(Car.IsDead($.lipsbrother2_car))) {
    if ($.lipsbrother2_car.IsUpsidedown() && $.lipsbrother2_car.IsStopped() && $.on_new_objective_joey5_2 == 0) {
      if (!(Char.IsDead($.lipsbrother2))) {
        $.lipsbrother2_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
        $.lipsbrother2.SetObjKillPlayerOnFoot($.player);
      }
      $.on_new_objective_joey5_2 = 1;
    }
    if (!(Car.IsDead($.lipsbrother2_car))) {
      if ($.lipsbrother2_car.IsInArea2D(1122.7, 2.9, 1183.8, 111.9, 0 /* FALSE */) && $.on_new_objective_joey5_1 == 0) {
        if (!(Char.IsDead($.lipsbrother2))) {
          $.lipsbrother2_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
          $.lipsbrother2.SetObjKillPlayerOnFoot($.player);
        }
        $.on_new_objective_joey5_1 = 1;
      }
    }
  }
  return;
  }
}

export async function joey5() {
  // MissionBoundary
  // SCM GOSUB mission_start_joey5
  await mission_start_joey5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey5_failed
    await mission_joey5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey5
  await mission_cleanup_joey5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT deadman_car blip1_j5 blip2_j5
  // VAR_INT lipsbrother1_car lipsbrother2_car is_lipsbrother1_car_dead is_lipsbrother2_car_dead
  // VAR_INT lipsbrother1 lipsbrother2 skunk_message_played_before
  // VAR_INT flag_car_blip_displayed_j5 flag_car_crushed_joey5
  // VAR_INT on_new_objective_joey5_1 on_new_objective_joey5_2
  // VAR_INT flag_dont_do_car_check_joey5 flag_leave_car_message_joey5 flag_car_in_area_joey5
}
