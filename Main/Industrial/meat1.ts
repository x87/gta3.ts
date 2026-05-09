// Generated from Main/Industrial/meat1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat1 = 0;
  $.flag_bankmanager_in_area = 0;
  $.flag_car_crushed_meat1 = 0;
  $.flag_car_in_area_meat1 = 0;
  $.flag_leave_car_message_meat1 = 0;
  $.flag_dont_do_car_check_meat1 = 0;
  $.blob_flag = 1;
  $.flag_player_had_crusher_help_hm5 = 0;
  $.flag_bankman_moved_meat1 = 0;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph1);
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
  //"The names Marty..."
  Text.PrintNow("MEA1_B", 10000, 1);
  while ($.cs_time < 4424) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I run the..."
  Text.PrintNow("MEA1_C", 10000, 1);
  while ($.cs_time < 7668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I got money..."
  Text.PrintNow("MEA1_D", 10000, 1);
  while ($.cs_time < 9604) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I'm meeting...."
  Text.PrintNow("MEA1_E", 10000, 1);
  while ($.cs_time < 12652) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"He's a crooked..."
  Text.PrintNow("MEA1_F", 10000, 1);
  while ($.cs_time < 17740) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Take my car..."
  Text.PrintNow("MEA1_G", 10000, 1);
  while ($.cs_time < 21290) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I've got a..."
  Text.PrintNow("MEA1_H", 10000, 1);
  while ($.cs_time < 24535) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA1_H");
  while ($.cs_time < 25666) {
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
  // ******************************************END OF CUTSCENE********************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(ped`B_MAN1`);
  Streaming.RequestModel(car`PERENNIAL`);
  Audio.LoadMissionAudio(MF1_A);
  while (!(Streaming.HasModelLoaded(ped`B_MAN1`)) || !(Streaming.HasModelLoaded(car`PERENNIAL`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat1 = Car.Create(87 /* CAR_PERENNIAL */, 1190.0, -796.0, 13.8);
  $.car_meat1.setHeading(300.0);
  // waiting for the player to get into the car
  $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.player.isInCar($.car_meat1))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat1.remove();
  //"Go and meet the Bank Manager."
  Text.PrintNow("MEA1_B3", 7000, 1);
  $.bankmanager_meat1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN1`, 1039.0, -695.0, 13.9);
  $.bankmanager_meat1.clearThreatSearch();
  $.bankmanager_meat1.turnToFaceCoord(1042.0, -695.0, -100.0);
  $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
  // waiting for the player and the Bank manager to be in the same area
  $.bankmanager_meat1.setCantBeDraggedOut(true /* TRUE */);
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  //The Bank Managers dead!"
  //"Get back into the vehicle and get on with the mission!"
  // player is at the bank manager
  while (!($.player.locateInCarChar2D($.bankmanager_meat1, 8.0, 8.0, false /* FALSE */)) || !($.player.isInCar($.car_meat1))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_ped1_meat1.remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.remove();
      $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  // waiting for them both to be in the car
  $.bankmanager_meat1.setObjEnterCarAsPassenger($.car_meat1);
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  //You have left the Bank Manager behind!"
  //"Get back into the vehicle and get on with the mission!"
  while (!($.bankmanager_meat1.isInCar($.car_meat1)) || !($.player.isInCar($.car_meat1))) {
    await asyncWait(0);
    //The Bank Managers dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //The Bank Managers dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.bankmanager_meat1)) {
        //The Bank Managers dead!"
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //The Bank Managers dead!"
    //You have left the Bank Manager behind!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      //You have left the Bank Manager behind!"
      if (!($.player.locateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //You have left the Bank Manager behind!"
        Text.PrintNow("MEA1_4", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_ped1_meat1.remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.remove();
      $.radar_blip_ped1_meat1 = Blip.AddForChar($.bankmanager_meat1);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  $.radar_blip_ped1_meat1.remove();
  Audio.PlayMissionAudio();
  //"Mr. Chonks sent you? Ok, take me to see him."
  Text.PrintNow("MEA1_B4", 7000, 1);
  $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA1_B4");
  }
  //waiting for them to be at the Dogfood factory
  $.blob_flag = 1;
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  //You have left the Bank Manager behind!"
  //"Get back into the vehicle and get on with the mission!"
  while (!($.bankmanager_meat1.locateStoppedInCar3D(1205.7, -789.2, 14.8, 4.0, 4.0, 6.0, $.blob_flag)) || !($.bankmanager_meat1.isInCar($.car_meat1))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA1_B4");
    }
    //The Bank Managers dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //The Bank Managers dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.bankmanager_meat1)) {
        Audio.ClearMissionAudio();
        //The Bank Managers dead!"
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //The Bank Managers dead!"
    //You have left the Bank Manager behind!"
    if (Char.IsDead($.bankmanager_meat1)) {
      Audio.ClearMissionAudio();
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      //You have left the Bank Manager behind!"
      if (!($.player.locateAnyMeansChar3D($.bankmanager_meat1, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //You have left the Bank Manager behind!"
        Text.PrintNow("MEA1_4", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
      $.radar_blip_coord2_meat1.remove();
      $.flag_player_had_car_message_meat1 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
      $.radar_blip_car_meat1.remove();
      $.radar_blip_coord2_meat1 = Blip.AddForCoord(1205.7, -789.2, -100.0);
      $.flag_player_had_car_message_meat1 = 0;
      $.blob_flag = 1;
    }
  }
  $.radar_blip_coord2_meat1.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  World.ClearArea(1201.8, -799.7, 13.8, 5.0, true /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.bankmanager_meat1.setCantBeDraggedOut(false /* FALSE */);
  $.bankmanager_meat1.setObjLeaveCar($.car_meat1);
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while ($.bankmanager_meat1.isInCar($.car_meat1)) {
    await asyncWait(0);
    //The Bank Managers dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //The Bank Managers dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.bankmanager_meat1)) {
        //The Bank Managers dead!"
        Text.PrintNow("MEA1_1", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.bankmanager_meat1.setObjGotoCoordOnFoot(1204.2, -801.9);
  Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */);
  // Waiting for the blokes to get to the meat grinding area
  World.ClearArea(1200.8, -799.3, 14.0, 10.0, true /* TRUE */);
  timerb = 0;
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  // opens the door
  while (!($.flag_bankmanager_in_area == 1)) {
    await asyncWait(0);
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.flag_bankmanager_in_area == 0) {
      if ($.bankmanager_meat1.locateOnFoot2D(1204.2, -801.9, 0.5, 0.5, false /* FALSE */)) {
        $.flag_bankmanager_in_area = 1;
      }
    }
    if ($.flag_bankman_moved_meat1 == 0) {
      if (timerb >= 20000) {
        $.bankmanager_meat1.setCoordinates(1204.2, -801.9, 13.7);
        $.flag_bankman_moved_meat1 = 1;
      }
    }
  }
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.doggy_door.rotate(135.0, 5.0, false /* FALSE */))) {
    await asyncWait(0);
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.bankmanager_meat1.setObjGotoCoordOnFoot(1205.9, -805.8);
  timerb = 0;
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  // Shuts the door
  while (!($.bankmanager_meat1.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */))) {
    await asyncWait(0);
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if (timerb >= 20000) {
      if (!($.bankmanager_meat1.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */))) {
        $.bankmanager_meat1.removeElegantly();
        // SCM GOTO → bloke_got_stuck_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO bloke_got_stuck_meat1"); // fallback: would break linear control flow
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
}

async function bloke_got_stuck_meat1() {
  Audio.LoadMissionAudio(MF4_A);
  //The Bank Managers dead!"
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.doggy_door.rotate(45.0, 5.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //The Bank Managers dead!"
    if (Char.IsDead($.bankmanager_meat1)) {
      //The Bank Managers dead!"
      Text.PrintNow("MEA1_1", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  $.bankmanager_meat1.removeElegantly();
  Audio.PlayMissionAudio();
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat1)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  //"Take the car to the crusher to get rid of evidence, get out of the car and the crane will pick it up."
  Text.PrintSoon("MEA1_B6", 5000, 1);
  // waiting for the car to get to the area to be crushed
  $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
  $.blob_flag = 1;
  //" You idiot! The cops will find the evidence in the car."
  //"Get out of the car!"
  //"Get back into the vehicle and get on with the mission!"
  //"To crush the car..."
  //"The vehicle's upsidedown!"
  // waiting for the crane to pick up the car
  while (!($.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, $.blob_flag))) {
    await asyncWait(0);
    //" You idiot! The cops will find the evidence in the car."
    //"Get out of the car!"
    if (Car.IsDead($.car_meat1)) {
      //" You idiot! The cops will find the evidence in the car."
      Text.PrintNow("MEA1_2", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    else {
      //"Get out of the car!"
      if ($.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 9.0, false /* FALSE */)) {
        $.flag_dont_do_car_check_meat1 = 1;
        //"Get out of the car!"
        if ($.flag_leave_car_message_meat1 == 0) {
          //"Get out of the car!"
          Text.PrintNow("MEA1_3", 5000, 1);
          $.flag_leave_car_message_meat1 = 1;
        }
      }
      else {
        $.flag_leave_car_message_meat1 = 0;
        $.flag_dont_do_car_check_meat1 = 0;
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if ($.flag_dont_do_car_check_meat1 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      if (!($.player.isInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
        //"Get back into the vehicle and get on with the mission!"
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
        $.radar_blip_coord3_meat1.remove();
        $.flag_player_had_car_message_meat1 = 1;
        $.blob_flag = 0;
      }
      if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
        $.radar_blip_car_meat1.remove();
        $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
        $.flag_player_had_car_message_meat1 = 0;
        $.blob_flag = 1;
      }
    }
    //"To crush the car..."
    if ($.flag_player_had_crusher_help_hm5 == 0) {
      //"To crush the car..."
      if ($.player.locateAnyMeans2D(1140.3, 50.1, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_meat1)) {
        //"To crush the car..."
        Text.PrintHelp("CRUSH");
        $.flag_player_had_crusher_help_hm5 = 1;
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  $.blob_flag = 1;
  //" You idiot! The cops will find the evidence in the car."
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!(Crane.IsLiftingCar(1120.0, 46.0, $.car_meat1))) {
    await asyncWait(0);
    //" You idiot! The cops will find the evidence in the car."
    if (Car.IsDead($.car_meat1)) {
      //" You idiot! The cops will find the evidence in the car."
      Text.PrintNow("MEA1_2", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
    if ($.car_meat1.isStoppedInArea3D(1135.8, 55.5, -1.0, 1149.8, 46.3, 20.0, $.blob_flag)) {
      $.flag_car_in_area_meat1 = 1;
    }
    else {
      $.flag_car_in_area_meat1 = 0;
    }
    //"Get back into the vehicle and get on with the mission!"
    if ($.flag_car_in_area_meat1 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      if (!($.player.isInCar($.car_meat1)) && $.flag_player_had_car_message_meat1 == 0) {
        //"Get back into the vehicle and get on with the mission!"
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car_meat1 = Blip.AddForCar($.car_meat1);
        $.radar_blip_coord3_meat1.remove();
        $.flag_player_had_car_message_meat1 = 1;
        $.blob_flag = 0;
      }
      if ($.player.isInCar($.car_meat1) && $.flag_player_had_car_message_meat1 == 1) {
        $.radar_blip_car_meat1.remove();
        $.radar_blip_coord3_meat1 = Blip.AddForCoord(1138.0, 52.0, -100.0);
        $.flag_player_had_car_message_meat1 = 0;
        $.blob_flag = 1;
      }
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat1.isUpsidedown() && $.car_meat1.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
    }
  }
  // waiting for the car to be crushed
  $.radar_blip_coord3_meat1.remove();
  //"You idiot! The cops will find the evidence in the car."
  while ($.flag_car_crushed_meat1 == 0) {
    await asyncWait(0);
    //"You idiot! The cops will find the evidence in the car."
    if ($.car_meat1.isCrushed()) {
      $.flag_car_crushed_meat1 = 1;
      // SCM GOTO → mission_passed_meat1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_passed_meat1"); // fallback: would break linear control flow
    }
    else {
      //"You idiot! The cops will find the evidence in the car."
      if (Car.IsDead($.car_meat1)) {
        //"You idiot! The cops will find the evidence in the car."
        Text.PrintNow("MEA1_2", 5000, 1);
        // SCM GOTO → mission_failed_meat1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat1"); // fallback: would break linear control flow
      }
    }
  }
  }
}

async function mission_failed_meat1() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // Mission Passed
  return;
}

async function mission_passed_meat1() {
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 1000, 5000, 1);
  Stat.RegisterMissionPassed("MEA1");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(1000);
  $.flag_meat_mission1_passed = 1;
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT meat_mission2_loop
  // Mission Cleanup
  return;
}

async function mission_cleanup_meat1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  $.bankmanager_meat1.removeElegantly();
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN1`);
  Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`);
  $.radar_blip_ped1_meat1.remove();
  $.radar_blip_car_meat1.remove();
  $.radar_blip_coord2_meat1.remove();
  $.radar_blip_coord3_meat1.remove();
  Mission.Finish();
  return;
}

export async function meat1() {
  // *******************************************************************************************
  // ***********************************Meat Factory Mission 1**********************************
  // *************************************"The Bank Manager"************************************
  // MissionBoundary
  // Mission Start Stuff
  // ScriptName
  // SCM GOSUB mission_start_meat1
  await mission_start_meat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat1
    await mission_failed_meat1();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat1
  await mission_cleanup_meat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variable for mission
  // MissionBoundary
  // VAR_INT car_meat1
  // VAR_INT bankmanager_meat1
  // VAR_INT radar_blip_car_meat1
  // VAR_INT radar_blip_ped1_meat1
  // VAR_INT radar_blip_coord3_meat1
  // VAR_INT flag_player_had_car_message_meat1
  // VAR_INT radar_blip_coord2_meat1
  // VAR_INT flag_bankmanager_in_area
  // VAR_INT flag_car_crushed_meat1
  // VAR_INT flag_car_in_area_meat1
  // VAR_INT flag_leave_car_message_meat1
  // VAR_INT flag_dont_do_car_check_meat1
  // VAR_INT flag_player_had_crusher_help_hm5
  // ****************************************Mission Start************************************
  // VAR_INT flag_bankman_moved_meat1
}
