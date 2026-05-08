// Generated from Main/Industrial/joey3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey3() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.in_the_locate_joey3 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, TROLL);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint))) {
    await asyncWait(0);
  }
  Cutscene.Load(J3_VH);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
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
  while ($.cs_time < 5515) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_A", 10000, 2);
  while ($.cs_time < 7894) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_B", 10000, 2);
  while ($.cs_time < 10381) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_C", 10000, 2);
  while ($.cs_time < 14589) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_D", 10000, 2);
  while ($.cs_time < 17518) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_E", 10000, 2);
  while ($.cs_time < 21627) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM3_F", 10000, 2);
  while ($.cs_time < 24675) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 27333) {
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
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  Streaming.LoadSpecialCharacter(2, S_GUARD);
  Streaming.RequestModel(car`SECURICAR`);
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(car`SECURICAR`))) {
    await asyncWait(0);
  }
  $.van_jm3 = Car.Create(111 /* CAR_SECURICAR */, 1063.0, -805.0, 14.6);
  $.van_jm3.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.van_jm3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.van_jm3.SetProofs(1 /* TRUE */, 1 /* TRUE */, 0 /* FALSE */, 0 /* FALSE */, 1 /* TRUE */);
  $.van_jm3.SetCruiseSpeed(14.0);
  $.van_jm3.SetDrivingStyle(0);
  $.blip1_jm3 = Blip.AddForCar($.van_jm3);
  $.van_man1_jm3 = Char.CreateInsideCar($.van_jm3, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`);
  $.van_man1_jm3.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
  $.van_man2_jm3 = Char.CreateAsPassenger($.van_jm3, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 0);
  $.van_man2_jm3.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
  $.test_van_health_counter = $.van_jm3.GetHealth();
  Hud.DisplayCounterWithString($.test_van_health_counter, 1 /* COUNTER_DISPLAY_BAR */, "DAM");
  $.test_van_health_counter = $.van_jm3.GetHealth();
  $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
  if ($.test_van_health_counter2 > 400) {
    $.test_van_health_counter2 = 400;
  }
  $.test_van_health_counter = $.test_van_health_counter2 / 4;
  while ($.van_jm3.IsHealthGreater(999)) {
    await asyncWait(0);
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    $.test_van_health_counter = $.van_jm3.GetHealth();
    $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
    if ($.test_van_health_counter2 > 400) {
      $.test_van_health_counter2 = 400;
    }
    $.test_van_health_counter = $.test_van_health_counter2 / 4;
  }
  if (!(Car.IsDead($.van_jm3))) {
    $.van_jm3.SetDrivingStyle(2);
    $.van_jm3.SetCruiseSpeed(20.0);
    $.player.AlterWantedLevelNoDrop(1);
    $.van_jm3.SetOnlyDamagedByPlayer(0 /* FALSE */);
    $.old_van_health = $.van_jm3.GetHealth();
  }
  while ($.van_jm3.IsHealthGreater(750)) {
    await asyncWait(0);
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.van_jm3))) {
      $.test_van_health_counter = $.van_jm3.GetHealth();
      if ($.test_van_health_counter < $.old_van_health) {
        $.player.AlterWantedLevelNoDrop(1);
      }
      $.old_van_health = $.test_van_health_counter;
      $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
      if ($.test_van_health_counter2 > 400) {
        $.test_van_health_counter2 = 400;
      }
      $.test_van_health_counter = $.test_van_health_counter2 / 4;
    }
  }
  while ($.van_jm3.IsHealthGreater(600)) {
    await asyncWait(0);
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.van_jm3))) {
      $.test_van_health_counter = $.van_jm3.GetHealth();
      if ($.test_van_health_counter < $.old_van_health) {
        $.player.AlterWantedLevelNoDrop(2);
      }
      $.old_van_health = $.test_van_health_counter;
      $.test_van_health_counter2 = 1000 - $.test_van_health_counter;
      if ($.test_van_health_counter2 > 400) {
        $.test_van_health_counter2 = 400;
      }
      $.test_van_health_counter = $.test_van_health_counter2 / 4;
    }
  }
  if (!(Car.IsDead($.van_jm3))) {
    $.van_jm3.LockDoors(1 /* CARLOCK_UNLOCKED */);
    Hud.ClearCounter($.test_van_health_counter);
    if (!(Char.IsDead($.van_man1_jm3))) {
      $.van_man1_jm3.SetObjLeaveCar($.van_jm3);
    }
    if (!(Char.IsDead($.van_man2_jm3))) {
      $.van_man2_jm3.SetObjLeaveCar($.van_jm3);
    }
  }
  if (Car.IsDead($.van_jm3)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
  }
  while (!($.van_man1_jm3.IsInCar($.van_jm3)) || !($.van_man2_jm3.IsInCar($.van_jm3))) {
    await asyncWait(0);
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.van_man1_jm3) || Char.IsDead($.van_man2_jm3)) {
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
  }
  await asyncWait(1600);
  if (Car.IsDead($.van_jm3)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
  }
  if (!(Char.IsDead($.van_man1_jm3)) && !(Char.IsDead($.van_man2_jm3))) {
    $.van_man1_jm3.SetObjFleePlayerOnFootAlways($.player);
    $.van_man2_jm3.SetObjFleePlayerOnFootAlways($.player);
    $.van_man2_jm3.SetSay(96 /* SOUND_SECURITY_GUARD_RUN_AWAY_SHOUT */);
  }
  if (!(Car.IsDead($.van_jm3))) {
    $.Garage_bank.SetTargetCarForMission($.van_jm3);
  }
  $.flag_car_blip_displayed_jm3 = 1 /* TRUE */;
}

async function garage_stop() {
  TIMERB = 0;
  while (!($.van_jm3.IsStoppedInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 0 /* FALSE */)) || !($.player.IsInCar($.van_jm3))) {
    await asyncWait(0);
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.van_jm3)) {
      if ($.flag_car_blip_displayed_jm3 == 1 /* TRUE */) {
        $.blip2_jm3 = Blip.AddForCoord(1445.8, -796.7, -100.0);
        $.blip2_jm3.ChangeDisplay(2 /* BLIP_ONLY */);
        $.blip1_jm3.Remove();
        Text.PrintNow("jm3_1", 5000, 1);
        $.flag_car_blip_displayed_jm3 = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.van_jm3))) {
      if ($.flag_car_blip_displayed_jm3 == 0 /* FALSE */) {
        $.blip1_jm3 = Blip.AddForCar($.van_jm3);
        $.blip2_jm3.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed_jm3 = 1 /* TRUE */;
      }
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.van_man2_jm3))) {
      if (TIMERB > 4000) {
        TIMERB = 0;
        $.van_man2_jm3.SetSay(96 /* SOUND_SECURITY_GUARD_RUN_AWAY_SHOUT */);
      }
    }
    if ($.in_the_locate_joey3 == 0) {
      if ($.player.LocateInCar3D(1445.0, -811.5, 11.8, 4.0, 6.0, 4.0, 1 /* TRUE */)) {
        $.player.ClearWantedLevel();
        $.in_the_locate_joey3 = 1;
      }
    }
    if ($.in_the_locate_joey3 == 1) {
      if (!($.van_jm3.IsInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 0 /* FALSE */)) && !($.player.LocateInCar3D(1445.0, -811.5, 11.8, 4.0, 6.0, 4.0, 0 /* FALSE */))) {
        $.in_the_locate_joey3 = 0;
      }
    }
  }
  Text.PrintNow("OUT_VEH", 5000, 2);
  while (!($.Garage_bank.IsCarInMission())) {
    if (Car.IsDead($.van_jm3)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    if (!($.van_jm3.IsInArea3D(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 0 /* FALSE */))) {
      // SCM GOTO → garage_stop (not lowered; manual jump required)
      throw new Error("unresolved GOTO garage_stop"); // fallback: would break linear control flow
    }
    if ($.van_jm3.IsUpsidedown() && $.van_jm3.IsStopped()) {
      // SCM GOTO → mission_joey3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey3_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  $.blip2_jm3.Remove();
  }
  // SCM GOTO → mission_joey3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey3_passed"); // fallback: would break linear control flow
}

async function mission_joey3_failed() {
  Text.PrintBig("m_fail", 2000, 1);
  return;
}

async function mission_joey3_passed() {
  $.flag_joey_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 20000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(20000);
  Stat.RegisterMissionPassed(JM3);
  Stat.PlayerMadeProgress(1);
  $.Garage_bank.ChangeTypeWithCarModel(7 /* GARAGE_COLLECTSPECIFICCARS */, 111 /* CAR_SECURICAR */);
  // START_NEW_SCRIPT joey_mission4_loop
  // START_NEW_SCRIPT diablo_phone_start
  // START_NEW_SCRIPT van_heist_garage_pager
  return;
}

async function mission_cleanup_joey3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.blip1_jm3.Remove();
  $.blip2_jm3.Remove();
  Streaming.UnloadSpecialCharacter(2);
  $.Garage_bank.SetTargetCarForMission(-1);
  Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`);
  Hud.ClearCounter($.test_van_health_counter);
  Mission.Finish();
  return;
}

export async function joey3() {
  // MissionBoundary
  // SCM GOSUB mission_start_joey3
  await mission_start_joey3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey3_failed
    await mission_joey3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey3
  await mission_cleanup_joey3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT van_jm3 in_the_locate_joey3
  // VAR_INT blip1_jm3 blip2_jm3
  // VAR_INT flag_car_blip_displayed_jm3
  // VAR_INT van_man1_jm3 van_man2_jm3 old_van_health
  // VAR_INT test_van_health_counter test_van_health_counter2
}
