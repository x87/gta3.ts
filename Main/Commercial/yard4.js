// Generated from Main/Commercial/yard4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_yardie4() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_yardie_mission = 1;
  await asyncWait(0);
  {
  World.SetPedDensityMultiplier(0.0);
  Game.SetPoliceIgnorePlayer($.player, 1 /* on */);
  Cutscene.Load(YD_PH4);
  Cutscene.SetOffset(121.0, -272.3, 15.25);
  World.ClearAreaOfChars(100.5, -250.0, 0.0, 130.5, -290.0, 25.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD4_A", 10000, 1);
  while ($.cs_time < 3000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD4_A1", 10000, 1);
  while ($.cs_time < 5322) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD4_A2", 10000, 1);
  while ($.cs_time < 8600) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  Text.ClearPrints();
  Cutscene.Clear();
  await asyncWait(500);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  }
  $.flag_van1_arrived = 0;
  $.flag_bomb1_active = 0;
  $.flag_bomb4_active = 0;
  $.flag_bomb7_active = 0;
  $.flag_bomb9_active = 0;
  $.gen1_x = -113.62;
  $.gen1_y = -1420.5;
  $.gen2_x = -90.54;
  $.gen2_y = -1480.0;
  $.gen3_x = -38.4;
  $.gen3_y = -1447.0;
  $.gen4_x = -53.2;
  $.gen4_y = -1501.0;
  $.abandoned_car_x = -71.5;
  $.abandoned_car_y = -1471.0;
  Streaming.RequestModel(car`ESPERANTO`);
  Streaming.RequestModel(car`PONY`);
  while (!(Streaming.HasModelLoaded(car`ESPERANTO`)) || !(Streaming.HasModelLoaded(car`PONY`))) {
    await asyncWait(0);
  }
  Streaming.LoadSpecialCharacter(1, bomber);
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  $.timer_y4 = 90000;
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Hud.DisplayTimer($.timer_y4);
}

async function create_car_yd5() {
  $.abandoned_car_y4 = Car.Create(102 /* CAR_ESPERANTO */, $.abandoned_car_x, $.abandoned_car_y, -100.0);
  $.abandoned_car_y4.SetHeading(270.0);
  $.abandoned_car_y4.SetIdle();
  $.blip_abandoned_car_y4 = Blip.AddForCar($.abandoned_car_y4);
  $.gen2_van = Car.Create(96 /* CAR_PONY */, $.gen2_x, $.gen2_y, 27.0);
  $.gen2_van.SetHeading(345.0);
  $.gen2_van.SetIdle();
  $.gen2_van.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  if (!(Car.IsDead($.abandoned_car_y4))) {
    while (!($.player.IsInCar($.abandoned_car_y4))) {
      await asyncWait(0);
      if ($.timer_y4 < 1) {
        Text.PrintNow("taxi2", 3000, 1);
        // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd4_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.abandoned_car_y4)) {
        Text.PrintNow("WRECKED", 3000, 1);
        // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd4_failed"); // fallback: would break linear control flow
      }
    }
  }
  else {
    Text.PrintNow("WRECKED", 3000, 1);
    // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd4_failed"); // fallback: would break linear control flow
  }
  $.blip_abandoned_car_y4.Remove();
  $.player.SetControl(0 /* Off */);
  Hud.ClearTimer($.timer_y4);
  World.ClearArea(-113.4, -1431.5, 26.0, 20.0, 1 /* true */);
  $.gen1_van = Car.Create(96 /* CAR_PONY */, $.gen1_x, $.gen1_y, 26.2);
  $.gen1_van.SetHeading(180.0);
  $.gen1_van.SetIdle();
  $.gen1_van.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.human_bomb_demo = Char.CreateAsPassenger($.gen1_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0);
  $.gen3_van = Car.Create(96 /* CAR_PONY */, $.gen3_x, $.gen3_y, 26.2);
  $.gen3_van.SetHeading(90.0);
  $.gen3_van.SetIdle();
  $.gen3_van.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.gen4_van = Car.Create(96 /* CAR_PONY */, $.gen4_x, $.gen4_y, 26.2);
  $.gen4_van.SetHeading(90.0);
  $.gen4_van.SetIdle();
  $.gen4_van.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  Camera.SetFixedPosition(-82.0, -1472.0, 27.5, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.abandoned_car_y4))) {
    Camera.PointAtCar($.abandoned_car_y4, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  Hud.SwitchWidescreen(1 /* on */);
  Text.PrintNow("YD4_B", 3500, 2);
  // MESSAGE_WAIT(3500, 1 /* true */);
  Text.PrintNow("YD4_C", 3500, 2);
  // MESSAGE_WAIT(3500, 1 /* true */);
  Text.PrintNow("YD4_D", 2500, 2);
  // MESSAGE_WAIT(2500, 1 /* true */);
  if (!(Car.IsDead($.gen1_van))) {
    $.gen1_van.GotoCoordinatesAccurate(-113.2, -1442.5, 26.2);
    Camera.PointAtCar($.gen1_van, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }
  if (!(Car.IsDead($.gen3_van))) {
    $.gen3_van.GotoCoordinates(-53.5, -1446.7, 26.2);
  }
  while ($.flag_van1_arrived == 0) {
    await asyncWait(0);
    if (!(Car.IsDead($.gen1_van))) {
      if ($.gen1_van.Locate2D(-113.2, -1442.5, 4.0, 4.0, 0 /* false */)) {
        $.flag_van1_arrived = 1;
      }
    }
    else {
      // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_yd4_failed"); // fallback: would break linear control flow
    }
  }
  if (!(Car.IsDead($.gen1_van)) && !(Char.IsDead($.human_bomb_demo))) {
    $.human_bomb_demo.SetObjLeaveCar($.gen1_van);
    while ($.human_bomb_demo.IsInCar($.gen1_van)) {
      await asyncWait(0);
      if (!(Char.IsDead($.human_bomb_demo))) {
        [$.bomb_z, $.bomb_y, $.bomb_z] = $.human_bomb_demo.GetCoordinates();
      }
      if (Char.IsDead($.human_bomb_demo)) {
        // SCM GOTO → selkirk (not lowered; manual jump required)
        throw new Error("unresolved GOTO selkirk"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.gen1_van)) {
        // SCM GOTO → selkirk (not lowered; manual jump required)
        throw new Error("unresolved GOTO selkirk"); // fallback: would break linear control flow
      }
    }
  }
  $.human_bomb_demo.SetHeading(180.0);
  Camera.SetFixedPosition(-115.76, -1455.0, 25.9, 0.0, 0.0, 0.0);
  $.human_bomb_demo.SetIdle();
  Camera.PointAtChar($.human_bomb_demo, 15 /* FIXED */, 2 /* JUMP_CUT */);
  Text.PrintNow("YD4_1", 3000, 1);
  if (!(Char.IsDead($.human_bomb_demo))) {
    $.human_bomb_demo.SetObjRunToCoord(-114.5, -1452.4);
    while (!($.human_bomb_demo.LocateOnFoot2D(-114.5, -1452.4, 3.0, 3.0, 0))) {
      await asyncWait(0);
      if (!(Char.IsDead($.human_bomb_demo))) {
        [$.bomb_x, $.bomb_y, $.bomb_z] = $.human_bomb_demo.GetCoordinates();
      }
      else {
        // SCM GOTO → selkirk (not lowered; manual jump required)
        throw new Error("unresolved GOTO selkirk"); // fallback: would break linear control flow
      }
    }
  }
  await asyncWait(3000);
  if (!(Char.IsDead($.human_bomb_demo))) {
    [$.y4_x, $.y4_y, $.y4_z] = $.player.GetCoordinates();
    Camera.PointAtChar($.human_bomb_demo, 4 /* FOLLOWPED */, 1 /* INTERPOLATION */);
    $.human_bomb_demo.SetObjRunToCoord($.y4_x, $.y4_y);
    while (!($.human_bomb_demo.LocateOnFoot2D($.y4_x, $.y4_y, 5.0, 5.0, 0))) {
      await asyncWait(0);
      if (!(Char.IsDead($.human_bomb_demo))) {
        [$.bomb_x, $.bomb_y, $.bomb_z] = $.human_bomb_demo.GetCoordinates();
      }
      if (Char.IsDead($.human_bomb_demo)) {
        // SCM GOTO → selkirk (not lowered; manual jump required)
        throw new Error("unresolved GOTO selkirk"); // fallback: would break linear control flow
      }
    }
  }
}

async function selkirk() {
  Fx.AddExplosion($.bomb_x, $.bomb_y, $.bomb_z, 0 /* EXPLOSION_GRENADE */);
  Sound.AddOneOffSound($.bomb_x, $.bomb_y, $.bomb_z, 0 /* sound_test_1 */);
  Camera.Shake(500);
  await asyncWait(1000);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.player.SetControl(1 /* on */);
  await asyncWait(0);
  $.human_bomb_demo.MarkAsNoLongerNeeded();
  Text.PrintNow("YD4_2", 3000, 1);
  // SCM GOTO → le_loop_de_mort (not lowered; manual jump required)
  throw new Error("unresolved GOTO le_loop_de_mort"); // fallback: would break linear control flow
}

async function generator_1_easy() {
  if (!(Car.IsDead($.gen1_van))) {
    $.human_bomb_1 = Char.CreateAsPassenger($.gen1_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0);
    $.flag_bomb1_active = 1;
    $.human_bomb_1.SetObjLeaveCar($.gen1_van);
    $.blip_bomber_1 = Blip.AddForChar($.human_bomb_1);
    while ($.human_bomb_1.IsInCar($.gen1_van)) {
      [$.bomb_x, $.bomb_y, $.bomb_z] = $.human_bomb_1.GetCoordinates();
      await asyncWait(0);
      if (Char.IsDead($.human_bomb_1) || Car.IsDead($.gen1_van)) {
        return;
      }
    }
  }
  return;
}

async function generator_2_easy() {
  if (!(Car.IsDead($.gen2_van))) {
    $.human_bomb_4 = Char.CreateAsPassenger($.gen2_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0);
    $.flag_bomb4_active = 1;
    $.human_bomb_4.SetObjLeaveCar($.gen2_van);
    $.blip_bomber_4 = Blip.AddForChar($.human_bomb_4);
    while ($.human_bomb_4.IsInCar($.gen2_van)) {
      [$.bomb4_x, $.bomb4_y, $.bomb4_z] = $.human_bomb_4.GetCoordinates();
      await asyncWait(0);
      if (Char.IsDead($.human_bomb_4) || Car.IsDead($.gen2_van)) {
        return;
      }
    }
  }
  return;
}

async function generator_3_easy() {
  if (!(Car.IsDead($.gen3_van))) {
    $.human_bomb_7 = Char.CreateAsPassenger($.gen3_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0);
    $.flag_bomb7_active = 1;
    $.human_bomb_7.SetObjLeaveCar($.gen3_van);
    $.blip_bomber_7 = Blip.AddForChar($.human_bomb_7);
    while ($.human_bomb_7.IsInCar($.gen3_van)) {
      [$.bomb7_x, $.bomb7_y, $.bomb7_z] = $.human_bomb_7.GetCoordinates();
      await asyncWait(0);
      if (Char.IsDead($.human_bomb_7) || Car.IsDead($.gen3_van)) {
        return;
      }
    }
  }
  return;
}

async function generator_4_easy() {
  if (!(Car.IsDead($.gen4_van))) {
    $.human_bomb_9 = Char.CreateAsPassenger($.gen4_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0);
    $.flag_bomb9_active = 1;
    $.human_bomb_9.SetObjLeaveCar($.gen4_van);
    $.blip_bomber_9 = Blip.AddForChar($.human_bomb_9);
    while ($.human_bomb_9.IsInCar($.gen4_van)) {
      [$.bomb9_x, $.bomb9_y, $.bomb9_z] = $.human_bomb_9.GetCoordinates();
      await asyncWait(0);
      if (Char.IsDead($.human_bomb_9) || Car.IsDead($.gen4_van)) {
        return;
      }
    }
  }
  return;
}

async function le_loop_de_mort() {
  // SCM GOTO → le_loop_de_mort lowered to endless loop
  while (true) {
    await asyncWait(0);
    if ($.flag_bomb1_active == 0) {
      // SCM GOSUB generator_1_easy
      await generator_1_easy();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    else {
      if (!(Char.IsDead($.human_bomb_1))) {
        [$.y4_x, $.y4_y, $.y4_z] = $.player.GetCoordinates();
        $.human_bomb_1.SetObjRunToCoord($.y4_x, $.y4_y);
        [$.bomb_x, $.bomb_y, $.bomb_z] = $.human_bomb_1.GetCoordinates();
        $.human_bomb_1.ClearThreatSearch();
        if ($.human_bomb_1.LocateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, 0) || !($.human_bomb_1.IsHealthGreater(95))) {
          // SCM GOSUB detonate_1
          await detonate_1();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.human_bomb_1.MarkAsNoLongerNeeded();
          $.flag_bomb1_active = 0;
          // SCM GOSUB generator_1_easy
          await generator_1_easy();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
      else {
        // SCM GOSUB detonate_1
        await detonate_1();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.human_bomb_1.MarkAsNoLongerNeeded();
        $.flag_bomb1_active = 0;
      }
    }
    if ($.flag_bomb4_active == 0) {
      // SCM GOSUB generator_2_easy
      await generator_2_easy();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    else {
      if (!(Char.IsDead($.human_bomb_4))) {
        [$.y4_x, $.y4_y, $.y4_z] = $.player.GetCoordinates();
        $.human_bomb_4.SetObjRunToCoord($.y4_x, $.y4_y);
        [$.bomb4_x, $.bomb4_y, $.bomb4_z] = $.human_bomb_4.GetCoordinates();
        $.human_bomb_4.ClearThreatSearch();
        if ($.human_bomb_4.LocateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, 0) || !($.human_bomb_4.IsHealthGreater(95))) {
          // SCM GOSUB detonate_4
          await detonate_4();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.human_bomb_4.MarkAsNoLongerNeeded();
          $.flag_bomb4_active = 0;
        }
      }
      else {
        // SCM GOSUB detonate_4
        await detonate_4();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.human_bomb_4.MarkAsNoLongerNeeded();
        $.flag_bomb4_active = 0;
      }
    }
    if ($.flag_bomb7_active == 0) {
      // SCM GOSUB generator_3_easy
      await generator_3_easy();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    else {
      if (!(Char.IsDead($.human_bomb_7))) {
        [$.y4_x, $.y4_y, $.y4_z] = $.player.GetCoordinates();
        $.human_bomb_7.SetObjRunToCoord($.y4_x, $.y4_y);
        [$.bomb7_x, $.bomb7_y, $.bomb7_z] = $.human_bomb_7.GetCoordinates();
        $.human_bomb_7.ClearThreatSearch();
        if ($.human_bomb_7.LocateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, 0) || !($.human_bomb_7.IsHealthGreater(95))) {
          // SCM GOSUB detonate_7
          await detonate_7();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.human_bomb_7.MarkAsNoLongerNeeded();
          $.flag_bomb7_active = 0;
        }
      }
      else {
        // SCM GOSUB detonate_7
        await detonate_7();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.human_bomb_7.MarkAsNoLongerNeeded();
        $.flag_bomb7_active = 0;
      }
    }
    if ($.flag_bomb9_active == 0) {
      // SCM GOSUB generator_4_easy
      await generator_4_easy();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    else {
      if (!(Char.IsDead($.human_bomb_9))) {
        [$.y4_x, $.y4_y, $.y4_z] = $.player.GetCoordinates();
        [$.bomb9_x, $.bomb9_y, $.bomb9_z] = $.human_bomb_9.GetCoordinates();
        $.human_bomb_9.ClearThreatSearch();
        $.human_bomb_9.SetObjRunToCoord($.y4_x, $.y4_y);
        if ($.human_bomb_9.LocateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, 0) || !($.human_bomb_9.IsHealthGreater(95))) {
          // SCM GOSUB detonate_9
          await detonate_9();
          // fallback if label was not emitted as async function: no-op continues linearly
          $.human_bomb_9.MarkAsNoLongerNeeded();
          $.flag_bomb9_active = 0;
        }
      }
      else {
        // SCM GOSUB detonate_9
        await detonate_9();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.human_bomb_9.MarkAsNoLongerNeeded();
        $.flag_bomb9_active = 0;
      }
    }
    if (Car.IsDead($.gen1_van) && Car.IsDead($.gen2_van) && Car.IsDead($.gen3_van) && Car.IsDead($.gen4_van)) {
      if (Char.IsDead($.human_bomb_1) && Char.IsDead($.human_bomb_4) && Char.IsDead($.human_bomb_7) && Char.IsDead($.human_bomb_9)) {
        // SCM GOTO → mission_yardie4_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yardie4_passed"); // fallback: would break linear control flow
      }
    }
  }
}

async function detonate_1() {
  if ($.flag_bomb1_active == 1) {
    Fx.AddExplosion($.bomb_x, $.bomb_y, $.bomb_z, 0 /* EXPLOSION_GRENADE */);
    Sound.AddOneOffSound($.bomb_x, $.bomb_y, $.bomb_z, 0 /* sound_test_1 */);
    Camera.Shake(500);
    $.flag_bomb1_active = 0;
    $.blip_bomber_1.Remove();
  }
  return;
}

async function detonate_4() {
  if ($.flag_bomb4_active == 1) {
    Fx.AddExplosion($.bomb4_x, $.bomb4_y, $.bomb4_z, 0 /* EXPLOSION_GRENADE */);
    Sound.AddOneOffSound($.bomb4_x, $.bomb4_y, $.bomb4_z, 0 /* sound_test_1 */);
    Camera.Shake(500);
    $.blip_bomber_4.Remove();
  }
  return;
}

async function detonate_7() {
  if ($.flag_bomb7_active == 1) {
    Fx.AddExplosion($.bomb7_x, $.bomb7_y, $.bomb7_z, 0 /* EXPLOSION_GRENADE */);
    Sound.AddOneOffSound($.bomb7_x, $.bomb7_y, $.bomb7_z, 0 /* sound_test_1 */);
    Camera.Shake(500);
    $.flag_bomb7_active = 0;
    $.blip_bomber_7.Remove();
  }
  return;
}

async function detonate_9() {
  if ($.flag_bomb9_active == 1) {
    Fx.AddExplosion($.bomb9_x, $.bomb9_y, $.bomb9_z, 0 /* EXPLOSION_GRENADE */);
    Sound.AddOneOffSound($.bomb9_x, $.bomb9_y, $.bomb9_z, 0 /* sound_test_1 */);
    Camera.Shake(500);
    $.flag_bomb9_active = 0;
    $.blip_bomber_9.Remove();
  }
  return;
}

async function mission_yd4_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_yardie4_passed() {
  $.flag_yardie_mission4_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(YD4);
  Stat.PlayerMadeProgress(1);
  Game.SetThreatForPedType(11 /* PEDTYPE_GANG_YARDIE */, 0 /* THREAT_PLAYER1 */);
  $.yardie_contact_blip.Remove();
  // START_NEW_SCRIPT yardie_mission1_loop
  $.flag_yardie_mission1_passed = 0;
  return;
}

async function mission_cleanup_yardie4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_yardie_mission = 0;
  $.blip_abandoned_car_y4.Remove();
  Hud.ClearTimer($.timer_y4);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(ped`SPECIAL1`);
  Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`);
  Streaming.MarkModelAsNoLongerNeeded(car`PONY`);
  Mission.Finish();
  return;
}

export async function yard4() {
  // MissionBoundary
  // SCM GOSUB mission_start_yardie4
  await mission_start_yardie4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_yd4_failed
    await mission_yd4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_yardie4
  await mission_cleanup_yardie4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT abandoned_car_y4 flag_van1_arrived
  // VAR_INT timer_y4
  // VAR_INT blip_abandoned_car_y4
  // VAR_INT gen1_van gen2_van gen3_van gen4_van
  // VAR_INT human_bomb_1
  // VAR_INT human_bomb_4
  // VAR_INT human_bomb_7
  // VAR_INT human_bomb_9
  // VAR_INT human_bomb_demo
  // VAR_INT blip_bomber_1 blip_bomber_4 blip_bomber_7 blip_bomber_9
  // VAR_INT flag_bomb1_active
  // VAR_INT flag_bomb4_active
  // VAR_INT flag_bomb7_active
  // VAR_INT flag_bomb9_active
  // VAR_FLOAT gen1_x gen1_y
  // VAR_FLOAT gen2_x gen2_y
  // VAR_FLOAT gen3_x gen3_y
  // VAR_FLOAT gen4_x gen4_y
  // VAR_FLOAT abandoned_car_x abandoned_car_y
  // VAR_FLOAT y4_x y4_y y4_z
  // VAR_FLOAT bomb_x bomb_y bomb_z
  // VAR_FLOAT bomb4_x bomb4_y bomb4_z
  // VAR_FLOAT bomb7_x bomb7_y bomb7_z
  // VAR_FLOAT bomb9_x bomb9_y bomb9_z
}
