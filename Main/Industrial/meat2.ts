// Generated from Main/Industrial/meat2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat2 = 0;
  $.flag_victim1_in_area = 0;
  $.flag_victim2_in_area = 0;
  $.flag_car_in_area_meat2 = 0;
  $.blob_flag = 1;
  $.flag_remove_blip1_meat2 = 0;
  $.flag_remove_blip2_meat2 = 0;
  $.flag_car_in_zone2_meat2 = 0;
  $.flag_player_had_out_car_message_meat2 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph2);
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
  //"I hired some..."
  Text.PrintNow("MEA2_A", 10000, 1);
  while ($.cs_time < 4424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"and steal some..."
  Text.PrintNow("MEA2_B", 10000, 1);
  while ($.cs_time < 8124) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"The thieveing bastards..."
  Text.PrintNow("MEA2_C", 10000, 1);
  while ($.cs_time < 10996) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"IF I don't...."
  Text.PrintNow("MEA2_D", 10000, 1);
  while ($.cs_time < 12362) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Can you believe..."
  Text.PrintNow("MEA2_E", 10000, 1);
  while ($.cs_time < 13728) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I've left a car..."
  Text.PrintNow("MEA2_F", 10000, 1);
  while ($.cs_time < 16082) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Use it to..."
  Text.PrintNow("MEA2_G", 10000, 1);
  while ($.cs_time < 19591) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Them bring 'em..."
  Text.PrintNow("MEA2_H", 10000, 1);
  while ($.cs_time < 24155) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA2_H");
  while ($.cs_time < 25233) {
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
  // **************************************END OF CUTSCENE************************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(ped`CRIMINAL1`);
  Streaming.RequestModel(ped`CRIMINAL2`);
  Streaming.RequestModel(car`SENTINEL`);
  //PRINT_BIG ( MEA2 ) 15000 2 //"The Thieves"
  //WAIT 1000
  while (!(Streaming.HasModelLoaded(ped`CRIMINAL1`)) || !(Streaming.HasModelLoaded(ped`CRIMINAL2`)) || !(Streaming.HasModelLoaded(car`SENTINEL`))) {
    await asyncWait(0);
  }
  $.car_meat2 = Car.Create(88 /* CAR_SENTINEL */, 1190.0, -796.0, 13.8);
  $.car_meat2.setHeading(300.0);
  // waiting for the player to get into the car
  $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.player.isInCar($.car_meat2))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat2.remove();
  //"Go and meet the creditors."
  Text.PrintNow("MEA2_B3", 7000, 1);
  $.victim1_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL1`, 869.0, -611.0, -100.0);
  $.victim1_meat2.clearThreatSearch();
  $.victim1_meat2.turnToFaceCoord(869.0, -615.0, -100.0);
  $.victim1_meat2.setCantBeDraggedOut(true /* TRUE */);
  $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
  $.victim2_meat2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`CRIMINAL2`, 871.0, -612.0, -100.0);
  $.victim2_meat2.clearThreatSearch();
  $.victim2_meat2.turnToFaceCoord(869.0, -615.0, -100.0);
  $.victim2_meat2.setCantBeDraggedOut(true /* TRUE */);
  // waiting for the player to get to the creditors
  $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
  //"The vehicle's wrecked!"
  //"A creditor's dead!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  // tells the two thieves to get into the car
  while (!($.player.locateInCarChar2D($.victim1_meat2, 8.0, 8.0, false /* FALSE */)) || !($.player.locateInCarChar2D($.victim2_meat2, 8.0, 8.0, false /* FALSE */)) || !($.player.isInCar($.car_meat2))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_ped1_meat2.remove();
      $.radar_blip_ped2_meat2.remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.remove();
      $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
      $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.victim1_meat2.setObjEnterCarAsPassenger($.car_meat2);
  $.victim2_meat2.setObjEnterCarAsPassenger($.car_meat2);
  //"A creditor's dead!"
  //"The vehicle's wrecked!"
  //"You have left a creditor behind!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.victim1_meat2.isInCar($.car_meat2)) || !($.victim2_meat2.isInCar($.car_meat2)) || !($.player.isInCar($.car_meat2))) {
    await asyncWait(0);
    //"A creditor's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"A creditor's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        //"A creditor's dead!"
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"A creditor's dead!"
    //"You have left a creditor behind!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      //"You have left a creditor behind!"
      if (!($.player.locateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left a creditor behind!"
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"A creditor's dead!"
    //"You have left a creditor behind!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      //"You have left a creditor behind!"
      if (!($.player.locateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left a creditor behind!"
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_ped1_meat2.remove();
      $.radar_blip_ped2_meat2.remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.remove();
      $.radar_blip_ped1_meat2 = Blip.AddForChar($.victim1_meat2);
      $.radar_blip_ped2_meat2 = Blip.AddForChar($.victim2_meat2);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    if ($.victim1_meat2.isInCar($.car_meat2) && $.flag_remove_blip1_meat2 == 0) {
      $.radar_blip_ped1_meat2.remove();
      $.flag_remove_blip1_meat2 = 1;
    }
    if ($.victim2_meat2.isInCar($.car_meat2) && $.flag_remove_blip2_meat2 == 0) {
      $.radar_blip_ped2_meat2.remove();
      $.flag_remove_blip2_meat2 = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat2.remove();
  $.radar_blip_ped2_meat2.remove();
  //"Take us to the Bitch'n Dog Food Factory"
  Text.PrintNow("MEA2_B4", 7000, 1);
  $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  $.blob_flag = 1;
  //"A creditor's dead!"
  //"The vehicle's wrecked!"
  //"You have left a creditor behind!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.victim1_meat2.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.victim2_meat2.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, false /* FALSE */)) || !($.victim1_meat2.isInCar($.car_meat2)) || !($.victim2_meat2.isInCar($.car_meat2))) {
    await asyncWait(0);
    //"A creditor's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"A creditor's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        //"A creditor's dead!"
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"A creditor's dead!"
    //"You have left a creditor behind!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      //"You have left a creditor behind!"
      if (!($.player.locateAnyMeansChar3D($.victim1_meat2, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left a creditor behind!"
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"A creditor's dead!"
    //"You have left a creditor behind!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    else {
      //"You have left a creditor behind!"
      if (!($.player.locateAnyMeansChar3D($.victim2_meat2, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You have left a creditor behind!"
        Text.PrintNow("MEA2_4", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_coord2_meat2.remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.remove();
      $.radar_blip_coord2_meat2 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat2.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.victim1_meat2.setCantBeDraggedOut(false /* FALSE */);
  $.victim1_meat2.setObjLeaveCar($.car_meat2);
  $.victim2_meat2.setCantBeDraggedOut(false /* FALSE */);
  $.victim2_meat2.setObjLeaveCar($.car_meat2);
  //"A creditor's dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while ($.victim1_meat2.isInCar($.car_meat2) && $.victim2_meat2.isInCar($.car_meat2)) {
    await asyncWait(0);
    //"A creditor's dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"A creditor's dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.victim1_meat2) || Char.IsDead($.victim2_meat2)) {
        //"A creditor's dead!"
        Text.PrintNow("MEA2_2", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
      }
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.victim1_meat2.setObjGotoCoordOnFoot(1203.3, -801.7);
  await asyncWait(500);
  //"A creditor's dead!"
  if (Char.IsDead($.victim2_meat2)) {
    //"A creditor's dead!"
    Text.PrintNow("MEA2_2", 5000, 1);
    // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
  }
  $.victim2_meat2.setObjGotoCoordOnFoot(1202.4, -800.0);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  World.ClearArea(1201.8, -799.7, 13.8, 10.0, true /* TRUE */);
  // Waiting for the blokes to get to the meat grinding area
  timerb = 0;
  //"The vehicle's wrecked!"
  //"A creditor's dead!"
  //"The vehicle's upsidedown!"
  while (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
    await asyncWait(0);
    if (!($.doggy_door.rotate(135.0, 5.0, false /* FALSE */))) {
      [$.doorx, $.doory, $.doorz] = $.doggy_door.getCoordinates();
    }
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    if ($.flag_victim1_in_area == 0) {
      if ($.victim1_meat2.locateOnFoot2D(1203.3, -801.7, 0.5, 0.5, false /* FALSE */)) {
        $.flag_victim1_in_area = 1;
        $.victim1_meat2.setObjGotoCoordOnFoot(1209.4, -807.2);
      }
    }
    if ($.flag_victim1_in_area == 1) {
      if ($.victim1_meat2.locateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, false /* FALSE */)) {
        $.flag_victim1_in_area = 2;
      }
    }
    if ($.flag_victim2_in_area == 0) {
      if ($.victim2_meat2.locateOnFoot2D(1202.4, -800.0, 0.5, 0.5, false /* FALSE */)) {
        $.flag_victim2_in_area = 1;
        $.victim2_meat2.setObjGotoCoordOnFoot(1209.4, -807.2);
      }
    }
    if ($.flag_victim2_in_area == 1) {
      if ($.victim2_meat2.locateOnFoot3D(1209.4, -807.2, 14.0, 4.0, 4.0, 4.0, false /* FALSE */)) {
        $.flag_victim2_in_area = 2;
      }
    }
    if (timerb >= 30000) {
      if (!($.flag_victim1_in_area == 2) || !($.flag_victim2_in_area == 2)) {
        $.victim1_meat2.removeElegantly();
        $.victim2_meat2.removeElegantly();
        // SCM GOTO → mission_bloke_stuck (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
}

async function mission_bloke_stuck() {
  // Shuts the door
  Audio.LoadMissionAudio(MF4_B);
  //"The vehicle's wrecked!"
  //"A creditor's dead!"
  //"The vehicle's upsidedown!"
  while (!($.doggy_door.rotate(45.0, 5.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim1_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"A creditor's dead!"
    if (Char.IsDead($.victim2_meat2)) {
      //"A creditor's dead!"
      Text.PrintNow("MEA2_2", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.victim1_meat2.removeElegantly();
  $.victim2_meat2.removeElegantly();
  Audio.PlayMissionAudio();
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  //"Take the car to the crusher to get rid of evidence, get out of the car and the crane will pick it up."
  Text.PrintSoon("MEA2_B6", 5000, 1);
  $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
  // waiting for the player to respray the car
  $.sprayshop1.hasResprayHappened();
  //"The vehicle's wrecked!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.sprayshop1.hasResprayHappened()) || !($.player.isInCar($.car_meat2)) || !($.player.isStoppedInArea2D(922.6, -366.1, 928.6, -354.3, false /* FALSE */))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
      $.radar_blip_coord3_meat2.remove();
      $.flag_player_had_car_message_meat2 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
      $.radar_blip_car_meat2.remove();
      $.radar_blip_coord3_meat2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */);
      $.flag_player_had_car_message_meat2 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord3_meat2.remove();
  //"Dump the car by the road bridge in Chinatown."
  Text.PrintNow("MEA2_3", 5000, 1);
  $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);
  $.blob_flag = 1;
  //"The vehicle's wrecked!"
  //"Get out of the vehicle!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.car_meat2.locateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, $.blob_flag)) || $.player.isInCar($.car_meat2)) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat2)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
    //"Get out of the vehicle!"
    if ($.car_meat2.locateStopped3D(1195.6, -805.0, 13.7, 4.0, 4.0, 4.0, false /* FALSE */)) {
      //"Get out of the vehicle!"
      if ($.flag_player_had_out_car_message_meat2 == 0) {
        //"Get out of the vehicle!"
        Text.PrintNow("OUT_VEH", 5000, 1);
        $.flag_player_had_out_car_message_meat2 = 1;
      }
      $.flag_car_in_zone2_meat2 = 1;
    }
    else {
      $.flag_car_in_zone2_meat2 = 0;
      $.flag_player_had_out_car_message_meat2 = 0;
    }
    //"Get back into the vehicle and get on with the mission!"
    if ($.flag_car_in_zone2_meat2 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      if (!($.player.isInCar($.car_meat2)) && $.flag_player_had_car_message_meat2 == 0) {
        //"Get back into the vehicle and get on with the mission!"
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat2 = Blip.AddForCar($.car_meat2);
        $.radar_blip_coord4_meat2.remove();
        $.flag_player_had_car_message_meat2 = 1;
        $.blob_flag = 0;
      }
      if ($.player.isInCar($.car_meat2) && $.flag_player_had_car_message_meat2 == 1) {
        $.radar_blip_car_meat2.remove();
        $.radar_blip_coord4_meat2 = Blip.AddForCoord(1195.6, -805.0, 13.7);
        $.flag_player_had_car_message_meat2 = 0;
        $.blob_flag = 1;
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat2.isUpsidedown() && $.car_meat2.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat2"); // fallback: would break linear control flow
    }
  }
  if (!(Car.IsDead($.car_meat2))) {
    $.car_meat2.changeLock(2 /* CARLOCK_LOCKED */);
  }
  $.radar_blip_coord4_meat2.remove();
  }
  // Mission Failed
  // SCM GOTO → mission_passed_meat2 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat2"); // fallback: would break linear control flow
}

async function mission_failed_meat2() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // Mission Passed
  return;
}

async function mission_passed_meat2() {
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 3000, 5000, 1);
  Stat.RegisterMissionPassed("MEA2");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(2000);
  $.flag_meat_mission2_passed = 1;
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT meat_mission3_loop
  // Mission Cleanup
  return;
}

async function mission_cleanup_meat2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.victim1_meat2.removeElegantly();
  $.victim2_meat2.removeElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL1`);
  Streaming.MarkModelAsNoLongerNeeded(ped`CRIMINAL2`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  $.radar_blip_ped1_meat2.remove();
  $.radar_blip_ped2_meat2.remove();
  $.radar_blip_car_meat2.remove();
  $.radar_blip_coord2_meat2.remove();
  $.radar_blip_coord3_meat2.remove();
  $.radar_blip_coord4_meat2.remove();
  Mission.Finish();
  return;
}

export async function meat2() {
  // *******************************************************************************************
  // ***********************************Meat Factory Mission 2**********************************
  // *****************************************"The Thieves"*************************************
  // MissionBoundary
  // Mission Start Stuff
  // ScriptName
  // SCM GOSUB mission_start_meat2
  await mission_start_meat2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat2
    await mission_failed_meat2();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat2
  await mission_cleanup_meat2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variable for mission
  // MissionBoundary
  // VAR_INT car_meat2
  // VAR_INT victim1_meat2
  // VAR_INT victim2_meat2
  // VAR_INT radar_blip_car_meat2
  // VAR_INT radar_blip_ped1_meat2
  // VAR_INT radar_blip_ped2_meat2
  // VAR_INT flag_player_had_car_message_meat2
  // VAR_INT radar_blip_coord2_meat2
  // VAR_INT flag_victim1_in_area
  // VAR_INT flag_victim2_in_area
  // VAR_INT radar_blip_coord3_meat2
  // VAR_INT flag_car_in_area_meat2
  // VAR_FLOAT doorx
  // VAR_FLOAT doory
  // VAR_FLOAT doorz
  // VAR_INT flag_remove_blip1_meat2
  // VAR_INT flag_remove_blip2_meat2
  // VAR_INT flag_car_in_zone2_meat2
  // VAR_INT radar_blip_coord4_meat2
  // ****************************************Mission Start************************************
  // VAR_INT flag_player_had_out_car_message_meat2
}
