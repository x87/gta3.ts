// Generated from Main/Industrial/meat3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat3 = 0;
  $.flag_wife_in_area = 0;
  $.blob_flag = 1;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph3);
  Cutscene.SetOffset(1223.88, -839.414, 13.95);
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
  //"The business..."
  Text.PrintNow("MEA3_A", 10000, 1);
  while ($.cs_time < 6470) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"My wife has..."
  Text.PrintNow("MEA3_B", 10000, 1);
  while ($.cs_time < 11321) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I've left a car..."
  Text.PrintNow("MEA3_C", 10000, 1);
  while ($.cs_time < 13506) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Go and pick her...."
  Text.PrintNow("MEA3_D", 10000, 1);
  while ($.cs_time < 17471) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA3_D");
  while ($.cs_time < 18333) {
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
  await asyncWait(500);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // *****************************************END OF CUTSCENE*********************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(ped`FEMALE2`);
  Streaming.RequestModel(car`ESPERANTO`);
  Audio.LoadMissionAudio(MF2_A);
  while (!(Streaming.HasModelLoaded(ped`FEMALE2`)) || !(Streaming.HasModelLoaded(car`ESPERANTO`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat3 = Car.Create(102 /* CAR_ESPERANTO */, 1190.0, -796.0, 13.8);
  $.car_meat3.setHeading(300.0);
  // waiting for the player to get into the car
  $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.player.isInCar($.car_meat3))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat3.remove();
  //"Get the wife, press the horn to get her into the car!"
  Text.PrintNow("MEA3_B3", 7000, 1);
  $.wife_meat3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, ped`FEMALE2`, 1064.0, -378.0, 13.9);
  $.wife_meat3.clearThreatSearch();
  $.wife_meat3.turnToFaceCoord(1059.0, -378.0, 100.0);
  $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
  // Waiting for the player to be in the area
  $.wife_meat3.setCantBeDraggedOut(true /* TRUE */);
  //"The vehicle's wrecked!"
  //"The wife's dead!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  // tells the wife to get into players car
  while (!($.player.locateInCarChar2D($.wife_meat3, 8.0, 8.0, false /* FALSE */)) || !($.player.isInCar($.car_meat3))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_ped1_meat3.remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.remove();
      $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.setObjEnterCarAsPassenger($.car_meat3);
  //"The wife's dead!"
  //"The vehicle's wrecked!"
  //"You have left his wife behind"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.wife_meat3.isInCar($.car_meat3)) || !($.player.isInCar($.car_meat3))) {
    await asyncWait(0);
    //"The wife's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The wife's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.wife_meat3)) {
        //"The wife's dead!"
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    //"The wife's dead!"
    //"You have left his wife behind"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    else {
      //"You have left his wife behind"
      if (!($.player.locateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left his wife behind"
        Text.PrintNow("MEA3_3", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_ped1_meat3.remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.remove();
      $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat3.remove();
  Audio.PlayMissionAudio();
  //"Marty wants to see me? Well it better be quick because I have a slot booked at the gym, and a hair appointment after that."
  Text.PrintNow("MEA3_B4", 7000, 1);
  $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA3_B4");
  }
  // waiting for the wife to be at the factory
  $.blob_flag = 1;
  //"The wife's dead!"
  //"The vehicle's wrecked!"
  //"You have left his wife behind"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.wife_meat3.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.wife_meat3.isInCar($.car_meat3))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA3_B4");
    }
    //"The wife's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The wife's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.wife_meat3)) {
        //"The wife's dead!"
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    //"The wife's dead!"
    //"You have left his wife behind"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    else {
      //"You have left his wife behind"
      if (!($.player.locateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left his wife behind"
        Text.PrintNow("MEA3_3", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
      $.radar_blip_coord2_meat3.remove();
      $.flag_player_had_car_message_meat3 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
      $.radar_blip_car_meat3.remove();
      $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat3 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat3.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.wife_meat3.setCantBeDraggedOut(false /* FALSE */);
  $.wife_meat3.setObjLeaveCar($.car_meat3);
  //"The wife's dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while ($.wife_meat3.isInCar($.car_meat3)) {
    await asyncWait(0);
    //"The wife's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The wife's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.wife_meat3)) {
        //"The wife's dead!"
        Text.PrintNow("MEA3_1", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.setObjGotoCoordOnFoot(1204.2, -801.9);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  World.ClearArea(1200.8, -799.3, 14.0, 10.0, true /* TRUE */);
  // Waiting for the wifes to get to the meat grinding area
  timerb = 0;
  //"The vehicle's wrecked!"
  //"The wife's dead!"
  //"The vehicle's upsidedown!"
  while (!($.flag_wife_in_area == 1)) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if ($.flag_wife_in_area == 0) {
      if ($.wife_meat3.locateOnFoot2D(1204.2, -801.9, 0.5, 0.5, false /* FALSE */)) {
        $.flag_wife_in_area = 1;
      }
    }
    if (timerb >= 25000) {
      if (!($.flag_wife_in_area == 1)) {
        $.wife_meat3.setCoordinates(1204.2, -801.9, 13.7);
        // SCM GOTO → wife_stuck1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO wife_stuck1"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
}

async function wife_stuck1() {
  //"The vehicle's wrecked!"
  //"The wife's dead!"
  //"The vehicle's upsidedown!"
  while (!($.doggy_door.rotate(135.0, 5.0, false /* FALSE */))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  $.wife_meat3.setObjGotoCoordOnFoot(1205.9, -805.8);
  timerb = 0;
  //"The vehicle's wrecked!"
  //"The wife's dead!"
  //"The vehicle's upsidedown!"
  // Shuts the door
  while (!($.wife_meat3.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    if (timerb >= 25000) {
      if (!($.wife_meat3.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */))) {
        $.wife_meat3.removeElegantly();
        // SCM GOTO → mission_bloke_stuck_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck_meat3"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
}

async function mission_bloke_stuck_meat3() {
  Audio.LoadMissionAudio(MF4_C);
  //"The vehicle's wrecked!"
  //"The wife's dead!"
  //"The vehicle's upsidedown!"
  while (!($.doggy_door.rotate(45.0, 5.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The wife's dead!"
    if (Char.IsDead($.wife_meat3)) {
      //"The wife's dead!"
      Text.PrintNow("MEA3_1", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.wife_meat3.removeElegantly();
  Audio.PlayMissionAudio();
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  //"Take the car and dump it into the sea, this will get rid of any evidence."
  Text.PrintNow("MEA3_B6", 5000, 1);
  //"You were told to dump the vehicle in the sea!"
  if (Car.IsDead($.car_meat3)) {
    //"You were told to dump the vehicle in the sea!"
    Text.PrintNow("MEA3_2", 5000, 1);
    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
  }
  //"The vehicle's upsidedown!"
  // waiting for the car to be dumped in the water
  if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
    //"The vehicle's upsidedown!"
    Text.PrintNow("UPSIDE", 5000, 1);
    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
  }
  //"The vehicle's wrecked!"
  //"Dump the vehicle in the sea!"
  while (!($.car_meat3.isInWater())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    //"Dump the vehicle in the sea!"
    if (Car.IsDead($.car_meat3)) {
      //"The vehicle's wrecked!"
      if (!($.car_meat3.isInWater())) {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat3"); // fallback: would break linear control flow
      }
    }
    else {
      if (!($.player.isInCar($.car_meat3)) && $.flag_player_had_car_message_meat3 == 0) {
        $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3);
        $.flag_player_had_car_message_meat3 = 1;
      }
      //"Dump the vehicle in the sea!"
      if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
        $.radar_blip_car_meat3.remove();
        //"Dump the vehicle in the sea!"
        Text.PrintNow("MEA3_B6", 5000, 1);
        $.flag_player_had_car_message_meat3 = 0;
      }
    }
  }
  }
  // Mission Failed
  // SCM GOTO → mission_passed_meat3 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat3"); // fallback: would break linear control flow
}

async function mission_failed_meat3() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // Mission Passed
  return;
}

async function mission_passed_meat3() {
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 2000, 5000, 1);
  Stat.RegisterMissionPassed("MEA3");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(3000);
  $.flag_meat_mission3_passed = 1;
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT meat_mission4_loop
  // Mission Cleanup
  return;
}

async function mission_cleanup_meat3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.wife_meat3.removeElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE2`);
  Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`);
  $.radar_blip_ped1_meat3.remove();
  $.radar_blip_car_meat3.remove();
  $.radar_blip_coord2_meat3.remove();
  Mission.Finish();
  return;
}

export async function meat3() {
  // *******************************************************************************************
  // ***********************************Meat Factory Mission 3**********************************
  // *****************************************"The Wife"****************************************
  // MissionBoundary
  // Mission Start Stuff
  // ScriptName
  // SCM GOSUB mission_start_meat3
  await mission_start_meat3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat3
    await mission_failed_meat3();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat3
  await mission_cleanup_meat3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variable for mission
  // MissionBoundary
  // VAR_INT car_meat3
  // VAR_INT wife_meat3
  // VAR_INT radar_blip_car_meat3
  // VAR_INT radar_blip_ped1_meat3
  // VAR_INT flag_player_had_car_message_meat3
  // VAR_INT radar_blip_coord2_meat3
  // ****************************************Mission Start************************************
  // VAR_INT flag_wife_in_area
}
