// Generated from Main/Suburban/hood4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.total_no_pills_carried_hm4 = 0;
  $.flag_player_in_area_hm4 = 0;
  // 6 mins
  $.timer_hm4 = 361000;
  $.flag_player_had_car_message_hm4 = 0;
  $.flag_blip_added_hm4 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph4);
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
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Yo a Federal..."
  Text.PrintNow("HM4_A", 10000, 1);
  while ($.cs_time < 5840) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"There's platinum all..."
  Text.PrintNow("HM4_B", 10000, 1);
  while ($.cs_time < 8171) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Get a car..."
  Text.PrintNow("HM4_C", 10000, 1);
  while ($.cs_time < 11161) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"You can drop..."
  Text.PrintNow("HM4_F", 10000, 1);
  while ($.cs_time < 13963) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"This platinum..."
  Text.PrintNow("HM4_G", 10000, 1);
  while ($.cs_time < 17683) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"So make regular drop..."
  Text.PrintNow("HM4_H", 10000, 1);
  while ($.cs_time < 19787) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM4_H");
  while ($.cs_time < 20433) {
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
  // *********************************************END OF CUTSCENE*****************************
  World.SetPedDensityMultiplier(1.0);
  //"Get a vehicle!"
  Text.PrintNow("HM4_D", 5000, 1);
  while (!($.player.isInAnyCar())) {
    await asyncWait(0);
  }
  $.car_hm4 = $.player.storeCarIsIn();
  //REMOVE_BLIP radar_blip_car1_hm4
  $.garage_hm4.setTargetCarForMission($.car_hm4);
  $.radar_blip_coord2_hm4 = Blip.AddForCoord(-1080.0, -163.2, -100.0);
  //"Head to the location where the cargo is scattered!"
  Text.PrintNow("HM4_1", 7000, 1);
  // 90 tokens are created
  Pacman.StartScramble(-1080.0, -163.2, -100.0, 100.0, 90);
  Hud.DisplayTimer($.timer_hm4);
  // waiting for the player to get the correct number of pills
  Hud.DisplayCounterWithString($.total_no_pills_carried_hm4, 0 /* COUNTER_DISPLAY_NUMBER */, collect);
  // Checks to see if any pills are carried and switches off airport blip and puts on the drop off blip
  // Coords for where the gold is to be dropped off
  //"Remember when the vehicle becomes too heavy and slow goto the garage and drop off the cargo."
  // Checks and removes the no of pills that the player has collected
  // Checks for the player getting in and out of the car
  //"Get into the vehicle!"
  //"Your out of time!"
  while (!($.total_no_pills_carried_hm4 >= 30)) {
    await asyncWait(0);
    $.no_of_pills_carried_hm4 = Pacman.GetNumberOfPowerPillsCarried();
    // Checks to see if any pills are carried and switches off airport blip and puts on the drop off blip
    if ($.player.isInArea3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, false /* FALSE */)) {
      $.player.clearWantedLevel();
    }
    // Coords for where the gold is to be dropped off
    //"Remember when the vehicle becomes too heavy and slow goto the garage and drop off the cargo."
    // Checks and removes the no of pills that the player has collected
    if ($.no_of_pills_carried_hm4 > 0) {
      // Coords for where the gold is to be dropped off
      //"Remember when the vehicle becomes too heavy and slow goto the garage and drop off the cargo."
      if ($.flag_blip_added_hm4 == 0) {
        $.radar_blip_coord2_hm4.remove();
        // Coords for where the gold is to be dropped off
        $.radar_blip_coord1_hm4 = Blip.AddForCoord(-844.9, -169.6, 32.8);
        //"Remember when the vehicle becomes too heavy and slow goto the garage and drop off the cargo."
        Text.PrintNow("HM4_2", 7000, 1);
        $.flag_blip_added_hm4 = 1;
      }
    }
    // Checks for the player getting in and out of the car
    if ($.player.isInAnyCar()) {
      $.car_hm4 = $.player.storeCarIsIn();
      $.garage_hm4.setTargetCarForMission($.car_hm4);
      if ($.player.isStoppedInAreaInCar3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, false /* FALSE */) && $.flag_player_in_area_hm4 == 0) {
        $.total_no_pills_carried_hm4 += $.no_of_pills_carried_hm4;
        Sound.AddOneOffSound(-834.9, -168.8, 33.9, 83 /* SOUND_UNLOAD_GOLD */);
        Pacman.ClearNumberOfPowerPillsCarried();
        $.flag_player_in_area_hm4 = 1;
      }
      if ($.player.isInCar($.car_hm4) && !($.player.isStoppedInAreaInCar3D(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, false /* FALSE */)) && $.flag_player_in_area_hm4 == 1) {
        $.flag_player_in_area_hm4 = 0;
      }
    }
    //"Get into the vehicle!"
    if (!($.player.isInAnyCar())) {
      $.garage_hm4.setTargetCarForMission(-1);
      //"Get into the vehicle!"
      if ($.flag_player_had_car_message_hm4 == 0) {
        //"Get into the vehicle!"
        Text.PrintNow("IN_VEH2", 5000, 1);
        if ($.flag_blip_added_hm4 == 1) {
          $.radar_blip_coord1_hm4.remove();
        }
        $.flag_player_had_car_message_hm4 = 1;
      }
    }
    else {
      $.car_hm4 = $.player.storeCarIsIn();
      $.garage_hm4.setTargetCarForMission($.car_hm4);
      if ($.flag_player_had_car_message_hm4 == 1) {
        if ($.flag_blip_added_hm4 == 1) {
          $.radar_blip_coord1_hm4 = Blip.AddForCoord(-844.9, -169.6, 32.8);
        }
        $.flag_player_had_car_message_hm4 = 0;
      }
    }
    //"Your out of time!"
    if ($.timer_hm4 == 0) {
      //"Your out of time!"
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_hood4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood4_failed"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord1_hm4.remove();
  }
  // Mission hood4 failed
  // SCM GOTO → mission_hood4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_hood4_passed"); // fallback: would break linear control flow
}

async function mission_hood4_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  $.garage_hm4.setTargetCarForMission(-1);
  if ($.player.hasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.isDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  // mission hood4 passed
  return;
}

async function mission_hood4_passed() {
  $.flag_hood_mission4_passed = 1;
  Stat.RegisterMissionPassed("HM_4");
  Stat.PlayerMadeProgress(1);
  //Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", 25000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(25000);
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT hood_mission5_loop
  // mission cleanup
  return;
}

async function mission_cleanup_hood4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  $.garage_hm4.setTargetCarForMission(-1);
  Pacman.ClearNumberOfPowerPillsCarried();
  Pacman.Clear();
  $.radar_blip_coord1_hm4.remove();
  $.radar_blip_coord2_hm4.remove();
  Hud.ClearTimer($.timer_hm4);
  // TEST STUFF
  Hud.ClearCounter($.total_no_pills_carried_hm4);
  Mission.Finish();
  return;
}

export async function hood4() {
  // *******************************************************************************************
  // *************************************Hood Mission 4****************************************
  // ****************************************The Race*******************************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_hood4
  await mission_start_hood4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_hood4_failed
    await mission_hood4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_hood4
  await mission_cleanup_hood4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  //Total no of pills eaten since race started
  // VAR_INT total_no_pills_carried_hm4
  // VAR_INT radar_blip_coord1_hm4
  //no of pills player is carrying
  // VAR_INT no_of_pills_carried_hm4
  // VAR_INT flag_player_in_area_hm4
  // VAR_INT timer_hm4
  // VAR_INT car_hm4
  // VAR_INT radar_blip_car1_hm4
  // VAR_INT flag_player_had_car_message_hm4
  // VAR_INT flag_blip_added_hm4
  // ***************************************Mission Start*************************************
  // VAR_INT radar_blip_coord2_hm4
}
