// Generated from Main/Commercial/asuka5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_asuka5() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_mission = 1;
  // ScriptName
  await asyncWait(0);
  Game.SetMaxWantedLevel(5);
  $.cleared_timer_once_asuka5 = 0;
  $.got_to_coord_once = 0;
  {
  Streaming.LoadSpecialModel(hier`cutobj02`, NOTE);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.RequestModel(condo_ivy);
  Streaming.RequestModel(kmricndo01);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(condo_ivy)) || !(Streaming.HasModelLoaded(kmricndo01))) {
    await asyncWait(0);
  }
  Cutscene.Load(A5_K2FT);
  Cutscene.SetOffset(523.102, -636.96, 15.616);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_note = CutsceneObject.Create(hier`cutobj02`);
  $.cs_note.setAnim(NOTE);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.setAnim($.player);
  World.ClearArea(523.6, -639.4, 16.6, 1.0, true /* TRUE */);
  $.player.setCoordinates(523.6, -639.4, 16.0);
  $.player.setHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();
  // Displays cutscene text
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2220) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM5_A", 10000, 1);
  while ($.cs_time < 4363) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM5_B", 10000, 1);
  while ($.cs_time < 11558) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM5_C", 10000, 1);
  while ($.cs_time < 16227) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM5_D", 10000, 1);
  while ($.cs_time < 17342) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 17666) {
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
  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(condo_ivy);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  Streaming.RequestModel(car`ESPERANTO`);
  Streaming.LoadSpecialCharacter(1, $.tanner);
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(car`ESPERANTO`))) {
    await asyncWait(0);
  }
  Audio.LoadMissionAudio(A5_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  //START MISSION
  $.tanner_car = Car.Create(102 /* CAR_ESPERANTO */, 420.9, -1396.5, 26.0); //TEST INDUSTRIAL!!!!!!!!!
  $.tanner_car.setHeading(90.0);
  $.tanner_car.setOnlyDamagedByPlayer(true /* TRUE */);
  $.tanner_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.tanner_car.setStaysInCurrentLevel(true /* TRUE */);
  $.tanner_car.setAvoidLevelTransitions(true /* TRUE */);
  $.blip1_as5 = Blip.AddForCoord(414.0, -1378.0, -100.0);
  $.blip1_as5.changeDisplay(2 /* BLIP_ONLY */);
  while (!($.player.isStoppedInArea3D(411.8, -1375.3, 25.6, 417.0, -1381.9, 28.6, true /* TRUE */))) {
    await asyncWait(0);
    if (Car.IsDead($.tanner_car)) {
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
    if (!($.tanner_car.isHealthGreater(999)) || !($.tanner_car.isInArea2D(417.1, -1398.0, 425.4, -1394.9, false /* FALSE */))) {
      Text.PrintNow("AM5_1", 5000, 1);
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
  }
  $.blip1_as5.remove();
  $.blip2_as5 = Blip.AddForCar($.tanner_car);
  $.player.setControl(false /* Off */);
  World.ClearArea(427.9, -1392.7, 21.1, 20.0, true /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Hud.SwitchWidescreen(true /* ON */);
  $.tanner = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 436.5, -1399.8, 33.7); //TEST INDUSTRIAL!!!!!!!!
  $.tanner.setRunning(true /* TRUE */);
  Camera.SetFixedPosition(437.4, -1387.4, 30.9, 0.0, 0.0, 0.0); //TEST INDUSTRIAL!!!!!!!!
  Camera.PointAtChar($.tanner, 15 /* FIXED */, 2 /* JUMP_CUT */);
  TIMERB = 0;
  $.tanner.setObjRunToCoord(435.7, -1388.8);
  while (!($.tanner.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car)) {
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.lips))) {
        $.tanner.setCoordinates(435.7, -1388.8, -100.0);
      }
    }
  }
  TIMERB = 0;
  $.tanner.setObjRunToCoord(423.5, -1388.8);
  while (!($.tanner.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car)) {
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.lips))) {
        $.tanner.setCoordinates(427.3, -1388.6, 25.0);
      }
    }
  }
  TIMERB = 0;
  $.tanner.setObjRunToCoord(423.6, -1393.1);
  while (!($.tanner.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car)) {
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.lips))) {
        $.tanner.setCoordinates(423.6, -1393.1, 25.0);
      }
    }
  }
  Camera.SetFixedPosition(436.0, -1390.8, 31.0, 0.0, 0.0, 0.0); //TEST INDUSTRIAL!!!!!!!!
  Camera.PointAtChar($.tanner, 15 /* FIXED */, 1 /* INTERPOLATION */);
  $.tanner.setObjEnterCarAsDriver($.tanner_car);
  while (!($.tanner.isInCar($.tanner_car))) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car)) {
      // SCM GOTO → mission_asuka5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.tanner)) {
    // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
  }
  World.ClearArea(427.9, -1392.7, 21.1, 20.0, true /* TRUE */);
  Camera.PointAtCar($.tanner_car, 15 /* FIXED */, 1 /* INTERPOLATION */);
  Hud.DisplayCounterWithString($.test_tanner_health_counter, 1 /* COUNTER_DISPLAY_BAR */, "DAM");
  // SCM GOSUB tanner_health
  await tanner_health();
  // fallback if label was not emitted as async function: no-op continues linearly
  $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
  $.tanner_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
  $.tanner_car.setCruiseSpeed(20.0);
  $.tanner_car.setDrivingStyle(2);
  await asyncWait(1000);
  Camera.RestoreJumpcut();
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Hud.SwitchWidescreen(false /* OFF */);
  if (!(Car.IsDead($.tanner_car))) {
    while ($.tanner_car.isHealthGreater(999)) {
      await asyncWait(0);
      if (Char.IsDead($.tanner)) {
        // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
        Hud.ClearCounter($.test_tanner_health_counter);
        $.cleared_timer_once_asuka5 = 1;
      }
      if (!($.tanner_car.locate2D(319.9, -1388.6, 8.0, 8.0, false /* FALSE */))) {
        if ($.got_to_coord_once == 0) {
          $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
          $.tanner_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
        }
      }
      else {
        $.tanner_car.wanderRandomly();
        $.got_to_coord_once = 1;
      }
      if ($.tanner_car.isUpsidedown() && $.tanner_car.isStopped()) {
        // SCM GOTO → tanner_shits_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO tanner_shits_it"); // fallback: would break linear control flow
      }
      // SCM GOSUB tanner_health
      await tanner_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (Char.IsDead($.tanner)) {
    // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
    Hud.ClearCounter($.test_tanner_health_counter);
    $.cleared_timer_once_asuka5 = 1;
  }
  Audio.PlayMissionAudio();
  $.tanner_car.setCruiseSpeed(30.0);
  $.player.alterWantedLevelNoDrop(4);
  if (!(Car.IsDead($.tanner_car))) {
    $.old_tanner_health = $.tanner_car.getHealth();
  }
  while ($.tanner_car.isHealthGreater(300)) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
      Hud.ClearCounter($.test_tanner_health_counter);
      $.cleared_timer_once_asuka5 = 1;
    }
    if (!($.tanner_car.locate2D(319.9, -1388.6, 6.0, 6.0, false /* FALSE */))) {
      if ($.got_to_coord_once == 0) {
        $.tanner_car.gotoCoordinatesAccurate(319.9, -1388.6, -100.0);
        $.tanner_car.setMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
      }
    }
    else {
      $.tanner_car.wanderRandomly();
      $.got_to_coord_once = 1;
    }
    if ($.tanner_car.isUpsidedown() && $.tanner_car.isStopped()) {
      // SCM GOTO → tanner_shits_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO tanner_shits_it"); // fallback: would break linear control flow
    }
    // SCM GOSUB tanner_health
    await tanner_health();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function tanner_shits_it() {
  if (Char.IsDead($.tanner)) {
    // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
  }
  Hud.ClearCounter($.test_tanner_health_counter);
  $.blip2_as5.remove();
  $.tanner_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
  $.tanner.setObjLeaveCar($.tanner_car);
  $.blip3_as5 = Blip.AddForChar($.tanner);
  $.tanner_car.setCruiseSpeed(0.0);
  $.tanner_car.setMission(11 /* MISSION_STOP_FOREVER */);
  while ($.tanner.isInCar($.tanner_car)) {
    await asyncWait(0);
    if (Char.IsDead($.tanner)) {
      // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
      Hud.ClearCounter($.test_tanner_health_counter);
      $.cleared_timer_once_asuka5 = 1;
    }
  }
  if (Char.IsDead($.tanner)) {
    // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
  }
  $.tanner.setOnlyDamagedByPlayer(true /* True */);
  if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
    Hud.ClearCounter($.test_tanner_health_counter);
    $.cleared_timer_once_asuka5 = 1;
  }
  $.tanner.setObjFleePlayerOnFootAlways($.player);
  $.tanner.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
  while (!(Char.IsDead($.tanner))) {
    await asyncWait(0);
    if (Car.IsDead($.tanner_car) && $.cleared_timer_once_asuka5 == 0) {
      Hud.ClearCounter($.test_tanner_health_counter);
      $.cleared_timer_once_asuka5 = 1;
    }
  }
  // SCM GOTO → mission_asuka5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_asuka5_passed"); // fallback: would break linear control flow
  }
}

async function mission_asuka5_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  return;
  // mission asuka5 passed
}

async function mission_asuka5_passed() {
  $.flag_asuka_mission5_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 20000, 5000, 1); //"Mission Passed!"
  $.player.clearWantedLevel();
  $.player.addScore(20000);
  $.asuka_contact_blip.remove();
  Stat.RegisterMissionPassed(AM5);
  Stat.PlayerMadeProgress(1);
  return;
  // mission cleanup
}

async function mission_cleanup_asuka5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`);
  Streaming.UnloadSpecialCharacter(1);
  if (!(Char.IsDead($.tanner))) {
    $.tanner.removeElegantly();
  }
  $.blip1_as5.remove();
  $.blip2_as5.remove();
  $.blip3_as5.remove();
  Hud.ClearCounter($.test_tanner_health_counter);
  Mission.Finish();
  return;
}

async function tanner_health() {
  {
  if (!(Car.IsDead($.tanner_car))) {
    $.test_tanner_health_counter = $.tanner_car.getHealth();
    if ($.test_tanner_health_counter < $.old_tanner_health) {
      $.player.alterWantedLevelNoDrop(4);
    }
    $.old_tanner_health = $.test_tanner_health_counter;
    $.test_tanner_health_counter2 = 1000 - $.test_tanner_health_counter;
    if ($.test_tanner_health_counter2 > 700) {
      $.test_tanner_health_counter2 = 700;
    }
    $.test_tanner_health_counter = $.test_tanner_health_counter2 / 7;
  }
  return;
  }
}

export async function asuka5() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************asuka mission 5********************************
  // ********************************************Kill Tanner**********************************
  // Mission start stuff
  // SCM GOSUB mission_start_asuka5
  await mission_start_asuka5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_asuka5_failed
    await mission_asuka5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_asuka5
  await mission_cleanup_asuka5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // Variables for mission
  // VAR_INT blip1_as5 blip2_as5 blip3_as5
  // VAR_INT tanner_car got_to_coord_once old_tanner_health
  // VAR_INT tanner cleared_timer_once_asuka5
  // VAR_INT test_tanner_health_counter test_tanner_health_counter2
  // VAR_FLOAT test_tanner_health_float
  // ****************************************Mission Start************************************
}
