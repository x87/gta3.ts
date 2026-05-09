// Generated from Main/Suburban/hood2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.counter_all_vans_dead_hm2 = 0;
  $.flag_van1_dead_hm2 = 0;
  $.flag_van2_dead_hm2 = 0;
  $.flag_van3_dead_hm2 = 0;
  $.counter_all_vans_dead_hm2 = 0;
  $.counter_no_of_cars_player_had_hm2 = 0;
  $.flag_player_got_car_hm2 = 0;
  $.flag_buggy_help2_hm2 = 0;
  $.flag_buggy_help3_hm2 = 0;
  $.flag_buggy_help1_hm2 = 0;
  $.buggies_left_hm2 = 0;
  $.total_buggy_hm2 = 5;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph2);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player
  $.cs_player.setAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //" Those Nines are..."
  Text.PrintNow("HM2_A", 10000, 1);
  while ($.cs_time < 3468) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"These Bitches..."
  Text.PrintNow("HM2_B", 10000, 1);
  while ($.cs_time < 6630) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"and slinging it to brothers..."
  Text.PrintNow("HM2_C", 10000, 1);
  while ($.cs_time < 8077) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Theres a car parked up the way..."
  Text.PrintNow("HM2_D", 10000, 1);
  while ($.cs_time < 9819) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"There's some stuff in there.."
  Text.PrintNow("HM2_E", 10000, 1);
  while ($.cs_time < 12413) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"and wreck all there..."
  Text.PrintNow("HM2_F", 10000, 1);
  while ($.cs_time < 14200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM2_F");
  while ($.cs_time < 15333) {
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
  //SWITCH_STREAMING ON
  Cutscene.Clear();
  await asyncWait(500);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // ******************************************END OF CUTSCENE********************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(car`TOYZ`);
  Streaming.RequestModel(car`SECURICAR`);
  Streaming.RequestModel(car`rcbandit`);
  while (!(Streaming.HasModelLoaded(car`TOYZ`)) || !(Streaming.HasModelLoaded(car`SECURICAR`)) || !(Streaming.HasModelLoaded(car`rcbandit`))) {
    await asyncWait(0);
  }
  //SET_CAR_HEADING mission_car_hm2 0.0
  $.mission_car_hm2 = Car.Create(142 /* CAR_TOYZ */, -682.02, 76.60, -100.0);
  // waiting for the player to get into the control car
  $.radar_blip_car1_hm2 = Blip.AddForCar($.mission_car_hm2);
  //"The vehicle's wrecked!"
  while (!($.player.isSittingInCar($.mission_car_hm2))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.mission_car_hm2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
  }
  $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
  Hud.DisplayCounterWithString($.buggies_left_hm2, 0 /* COUNTER_DISPLAY_NUMBER */, "BUGGY");
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.radar_blip_car1_hm2.remove();
  $.controlmode = Pad.GetControllerMode();
  //"Use the radio controlled cars to destroy the trucks press | to detonate"
  if ($.controlmode == 0) {
    //"Use the radio controlled cars to destroy the trucks press | to detonate"
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  //"Use the radio controlled cars to destroy the trucks press | to detonate"
  if ($.controlmode == 1) {
    //"Use the radio controlled cars to destroy the trucks press | to detonate"
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  //"Use the radio controlled cars to destroy the trucks press | to detonate"
  if ($.controlmode == 2) {
    //"Use the radio controlled cars to destroy the trucks press | to detonate"
    Text.PrintHelp("HM2_1");
    $.flag_buggy_help1_hm2 = 1;
  }
  //"Use the radio controlled cars to destroy the trucks press the R1 button to detonate."
  if ($.controlmode == 3) {
    //"Use the radio controlled cars to destroy the trucks press the R1 button to detonate."
    Text.PrintHelp("HM2_1A");
    $.flag_buggy_help1_hm2 = 1;
  }
  World.ClearArea(-681.42, 91.35, 17.7, 2.0, true /* TRUE */);
  Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);
  // creates van 1
  ++$.counter_no_of_cars_player_had_hm2;
  $.target_van1_hm2 = Car.Create(111 /* CAR_SECURICAR */, -841.0, -130.0, -100.0);
  $.van_driver1_hm2 = Char.CreateInsideCar($.target_van1_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van1_hm2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.target_van1_hm2.setAvoidLevelTransitions(true /* TRUE */);
  $.radar_blip_van1_hm2 = Blip.AddForCar($.target_van1_hm2);
  $.target_van1_hm2.setDrivingStyle(2);
  $.target_van1_hm2.setCruiseSpeed(12.0);
  // creates van 2
  $.target_van1_hm2.wanderRandomly();
  $.target_van2_hm2 = Car.Create(111 /* CAR_SECURICAR */, -437.0, -67.0, -100.0);
  $.van_driver2_hm2 = Char.CreateInsideCar($.target_van2_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van2_hm2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.target_van2_hm2.setAvoidLevelTransitions(true /* TRUE */);
  $.radar_blip_van2_hm2 = Blip.AddForCar($.target_van2_hm2);
  $.target_van2_hm2.setDrivingStyle(2);
  $.target_van2_hm2.setCruiseSpeed(12.0);
  // creates van 3
  $.target_van2_hm2.wanderRandomly();
  $.target_van3_hm2 = Car.Create(111 /* CAR_SECURICAR */, -1172.0, 467.0, -100.0);
  $.van_driver3_hm2 = Char.CreateInsideCar($.target_van3_hm2, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.target_van3_hm2.setOnlyDamagedByPlayer(true /* TRUE */);
  $.target_van3_hm2.setAvoidLevelTransitions(true /* TRUE */);
  $.radar_blip_van3_hm2 = Blip.AddForCar($.target_van3_hm2);
  $.target_van3_hm2.setDrivingStyle(2);
  $.target_van3_hm2.setCruiseSpeed(12.0);
  // waiting for the player to destroy all of the vans
  $.target_van3_hm2.wanderRandomly();
  $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
  timerb = 0;
  //"The buggies can go underneath vehicles but if you touch the wheels the buggy will detonate instantly."
  //timerb = 0
  //"The buggy will detonate if you get out of range!"
  //"Armoured Car destroyed!"
  //"You failed to destroy all the armoured cars!"
  //"Mission Failed!"
  while (!($.counter_all_vans_dead_hm2 == 3)) {
    await asyncWait(0);
    $.buggies_left_hm2 = $.total_buggy_hm2 - $.counter_no_of_cars_player_had_hm2;
    //"The buggies can go underneath vehicles but if you touch the wheels the buggy will detonate instantly."
    //timerb = 0
    if ($.flag_buggy_help2_hm2 == 0 && $.flag_buggy_help1_hm2 == 1) {
      //"The buggies can go underneath vehicles but if you touch the wheels the buggy will detonate instantly."
      //timerb = 0
      if (timerb > 7000) {
        //"The buggies can go underneath vehicles but if you touch the wheels the buggy will detonate instantly."
        Text.PrintHelp("HM2_3");
        //timerb = 0
        $.flag_buggy_help2_hm2 = 1;
      }
    }
    //"The buggy will detonate if you get out of range!"
    if ($.flag_buggy_help3_hm2 == 0) {
      //"The buggy will detonate if you get out of range!"
      if ($.flag_buggy_help2_hm2 == 1) {
        //"The buggy will detonate if you get out of range!"
        if (timerb > 14000) {
          //"The buggy will detonate if you get out of range!"
          Text.PrintHelp("HM2_4");
          $.flag_buggy_help3_hm2 = 1;
        }
      }
    }
    $.player.clearWantedLevel();
    if (!(Car.IsDead($.mission_car_hm2))) {
      if (!($.player.isInRemoteMode()) && $.counter_no_of_cars_player_had_hm2 < 6 && $.flag_player_got_car_hm2 == 0 && $.player.isSittingInCar($.mission_car_hm2)) {
        World.ClearArea(-681.42, 91.35, 17.7, 2.0, false /* FALSE */);
        Rc.GiveCarToPlayer($.player, -681.42, 91.35, 17.7, 94.0);
        ++$.counter_no_of_cars_player_had_hm2;
        $.flag_player_got_car_hm2 = 1;
      }
    }
    if (!($.player.isInRemoteMode())) {
      $.flag_player_got_car_hm2 = 0;
    }
    //"Armoured Car destroyed!"
    if ($.flag_van1_dead_hm2 == 0) {
      //"Armoured Car destroyed!"
      if (Car.IsDead($.target_van1_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        //"Armoured Car destroyed!"
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van1_hm2.remove();
        $.flag_van1_dead_hm2 = 1;
      }
    }
    //"Armoured Car destroyed!"
    if ($.flag_van2_dead_hm2 == 0) {
      //"Armoured Car destroyed!"
      if (Car.IsDead($.target_van2_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        //"Armoured Car destroyed!"
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van2_hm2.remove();
        $.flag_van2_dead_hm2 = 1;
      }
    }
    //"Armoured Car destroyed!"
    if ($.flag_van3_dead_hm2 == 0) {
      //"Armoured Car destroyed!"
      if (Car.IsDead($.target_van3_hm2)) {
        ++$.counter_all_vans_dead_hm2;
        //"Armoured Car destroyed!"
        Text.PrintNow("HM2_6", 5000, 1);
        $.radar_blip_van3_hm2.remove();
        $.flag_van3_dead_hm2 = 1;
      }
    }
    //"You failed to destroy all the armoured cars!"
    if ($.counter_no_of_cars_player_had_hm2 == 5 && $.flag_player_got_car_hm2 == 0 && !($.counter_all_vans_dead_hm2 == 3)) {
      //"You failed to destroy all the armoured cars!"
      Text.PrintNow("HM2_2", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
    //"Mission Failed!"
    //"You failed to destroy all the armoured cars!"
    if (!($.player.isInAnyCar())) {
      //"Mission Failed!"
      Text.PrintBig("M_FAIL", 5000, 1);
      //"You failed to destroy all the armoured cars!"
      Text.PrintNow("HM2_2", 5000, 1);
      // SCM GOTO → mission_hood2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood2_failed"); // fallback: would break linear control flow
    }
  }
  Rc.BlowUpBuggy();
  }
  // Mission hood2 failed
  // SCM GOTO → mission_hood2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_hood2_passed"); // fallback: would break linear control flow
}

async function mission_hood2_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  if ($.player.hasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.isDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  // mission hood2 passed
  return;
}

async function mission_hood2_passed() {
  $.flag_hood_mission2_passed = 1;
  Stat.RegisterMissionPassed("HM_2");
  Stat.PlayerMadeProgress(1);
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(10000);
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT hood_mission3_loop
  // mission cleanup
  return;
}

async function mission_cleanup_hood2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  Streaming.LoadScene(-660.9, 76.0, 18.7);
  Streaming.MarkModelAsNoLongerNeeded(car`TOYZ`);
  Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`);
  Streaming.MarkModelAsNoLongerNeeded(car`rcbandit`);
  Hud.ClearCounter($.buggies_left_hm2);
  $.radar_blip_car1_hm2.remove();
  $.radar_blip_van1_hm2.remove();
  $.radar_blip_van2_hm2.remove();
  $.radar_blip_van3_hm2.remove();
  Mission.Finish();
  return;
}

export async function hood2() {
  // *******************************************************************************************
  // *************************************Hood Mission 2****************************************
  // **************************************R C ASSASSIN*****************************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_hood2
  await mission_start_hood2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_hood2_failed
    await mission_hood2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_hood2
  await mission_cleanup_hood2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT mission_car_hm2
  // VAR_INT radar_blip_car1_hm2
  // VAR_INT target_van1_hm2
  // VAR_INT target_van2_hm2
  // VAR_INT target_van3_hm2
  //Drives van 1
  // VAR_INT van_driver1_hm2
  //Drives van 2
  // VAR_INT van_driver2_hm2
  //Drives van 3
  // VAR_INT van_driver3_hm2
  // VAR_INT radar_blip_van1_hm2
  // VAR_INT radar_blip_van2_hm2
  // VAR_INT radar_blip_van3_hm2
  // VAR_INT flag_van1_dead_hm2
  // VAR_INT flag_van2_dead_hm2
  // VAR_INT flag_van3_dead_hm2
  // VAR_INT counter_all_vans_dead_hm2
  // VAR_INT counter_no_of_cars_player_had_hm2
  // VAR_INT flag_player_got_car_hm2
  // VAR_INT flag_buggy_help2_hm2
  // VAR_INT flag_buggy_help3_hm2
  // VAR_INT flag_buggy_help1_hm2
  // VAR_INT buggies_left_hm2
  // ***************************************Mission Start*************************************
  // VAR_INT total_buggy_hm2
}
