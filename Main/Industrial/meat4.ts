// Generated from Main/Industrial/meat4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_meat4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_meat_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_meat4 = 0;
  $.flag_loanshark_in_area = 0;
  $.flag_owner_dead_meat4 = 0;
  $.blob_flag = 1;
  {
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  Cutscene.Load(mt_ph4);
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
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Damn I'm in trouble..."
  Text.PrintNow("MEA4_A", 10000, 1);
  while ($.cs_time < 3885) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Turns out my wife..."
  Text.PrintNow("MEA4_B", 10000, 1);
  while ($.cs_time < 7252) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"He's got real..."
  Text.PrintNow("MEA4_C", 10000, 1);
  while ($.cs_time < 10502) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I've agreed to see him...."
  Text.PrintNow("MEA4_D", 10000, 1);
  while ($.cs_time < 11844) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"He thinks that..."
  Text.PrintNow("MEA4_E", 10000, 1);
  while ($.cs_time < 13374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //but my guess..."
  Text.PrintNow("MEA4_F", 10000, 1);
  while ($.cs_time < 14622) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Liberty's dogs..."
  Text.PrintNow("MEA4_G", 10000, 1);
  while ($.cs_time < 17623) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("MEA4_G");
  while ($.cs_time < 18233) {
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
  // ********************************END OF CUTSCENE******************************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.RequestModel(ped`FAN_MAN2`);
  Streaming.RequestModel(ped`B_MAN2`);
  Streaming.RequestModel(car`STALLION`);
  Audio.LoadMissionAudio(MF3_A);
  while (!(Streaming.HasModelLoaded(ped`FAN_MAN2`)) || !(Streaming.HasModelLoaded(ped`B_MAN2`)) || !(Streaming.HasModelLoaded(car`STALLION`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat4 = Car.Create(122 /* CAR_STALLION */, 1190.0, -796.0, 13.8);
  $.car_meat4.setHeading(300.0);
  // waiting for the player to get into the car
  $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
  //"The vehicle's wrecked!"
  //"The vehicle's upsidedown!"
  while (!($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat4)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat4.remove();
  //"Pick up the Loan Shark, press the horn to get him into the car!"
  Text.PrintNow("MEA4_B3", 7000, 1);
  $.loanshark_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`FAN_MAN2`, 897.0, -476.0, 14.6);
  $.loanshark_meat4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.loanshark_meat4.clearThreatSearch();
  $.loanshark_meat4.turnToFaceCoord(895.0, -486.0, -100.0);
  $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
  // player is in area
  $.loanshark_meat4.setCantBeDraggedOut(true /* TRUE */);
  //"The vehicle's wrecked!"
  //"The Loan Sharks dead!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  // tells the bloke to get into the players car
  while (!($.player.locateInCarChar2D($.loanshark_meat4, 8.0, 8.0, false /* FALSE */)) || !($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat4)) {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_ped1_meat4.remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.remove();
      $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.setObjEnterCarAsPassenger($.car_meat4);
  //"The Loan Sharks dead!"
  //"The vehicle's wrecked!"
  //"You left the Loan Shark behind"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.loanshark_meat4.isInCar($.car_meat4)) || !($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat4)) {
      //"The Loan Sharks dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.loanshark_meat4)) {
        //"The Loan Sharks dead!"
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    //"The Loan Sharks dead!"
    //"You left the Loan Shark behind"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      //"You left the Loan Shark behind"
      if (!($.player.locateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You left the Loan Shark behind"
        Text.PrintNow("MEA4_3", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_ped1_meat4.remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.remove();
      $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat4.remove();
  Audio.PlayMissionAudio();
  //"This little "Spank" junkie better have my money, get me to the factory"
  Text.PrintNow("MEA4_B4", 10000, 1);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA4_B4");
  }
  $.radar_blip_coord2_meat4 = Blip.AddForCoord(1217.0, -794.0, -100.0);
  $.owner_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN2`, 1208.0, -789.0, 13.9);
  $.owner_meat4.clearThreatSearch();
  $.owner_meat4.turnToFaceCoord(1210.0, -791.0, -100.0);
  $.blob_flag = 1;
  //"The Loan Sharks dead!"
  //"The vehicle's wrecked!"
  //"You left the Loan Shark behind"
  //"The factory owners dead!"
  //"Get back into the vehicle and get on with the mission!"
  //"The vehicle's upsidedown!"
  while (!($.loanshark_meat4.locateStoppedInCar3D(1217.0, -794.0, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.loanshark_meat4.isInCar($.car_meat4))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B4");
    }
    //"The Loan Sharks dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat4)) {
      //"The Loan Sharks dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.loanshark_meat4)) {
        //"The Loan Sharks dead!"
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    //"The Loan Sharks dead!"
    //"You left the Loan Shark behind"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      //"You left the Loan Shark behind"
      if (!($.player.locateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, false /* FALSE */))) {
        //"You left the Loan Shark behind"
        Text.PrintNow("MEA4_3", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"Get back into the vehicle and get on with the mission!"
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      //"Get back into the vehicle and get on with the mission!"
      Text.PrintNow("IN_VEH", 5000, 1);
      $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
      $.radar_blip_coord2_meat4.remove();
      $.flag_player_had_car_message_meat4 = 1;
      $.blob_flag = 0;
    }
    if ($.player.isInCar($.car_meat4) && $.flag_player_had_car_message_meat4 == 1) {
      $.radar_blip_car_meat4.remove();
      $.radar_blip_coord2_meat4 = Blip.AddForCoord(1217.0, -794.0, -100.0);
      $.flag_player_had_car_message_meat4 = 0;
      $.blob_flag = 1;
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord2_meat4.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.loanshark_meat4.leaveGroup();
  $.loanshark_meat4.setCantBeDraggedOut(false /* FALSE */);
  $.loanshark_meat4.setObjLeaveCar($.car_meat4);
  //"The Loan Sharks dead!"
  //"The vehicle's wrecked!"
  //"The factory owners dead!"
  //"The vehicle's upsidedown!"
  while ($.loanshark_meat4.isInCar($.car_meat4)) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    //"The vehicle's wrecked!"
    if (Car.IsDead($.car_meat4)) {
      //"The Loan Sharks dead!"
      //"The vehicle's wrecked!"
      if (Char.IsDead($.loanshark_meat4)) {
        //"The Loan Sharks dead!"
        Text.PrintNow("MEA4_1", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The vehicle's upsidedown!"
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      //"The vehicle's upsidedown!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.setObjGotoCoordOnFoot(1209.6, -791.0);
  Camera.SetFixedPosition(1218.1, -795.0, 16.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.6, -785.7, 13.9, 2 /* JUMP_CUT */);
  World.ClearArea(1212.0, -792.0, 14.0, 10.0, true /* TRUE */);
  // Waiting for the blokes to get to the meat grinding area
  Audio.LoadMissionAudio(MF3_B);
  timerb = 0;
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!($.flag_loanshark_in_area == 1) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.flag_loanshark_in_area == 0) {
      if ($.loanshark_meat4.locateOnFoot2D(1209.6, -791.0, 0.5, 0.5, false /* FALSE */)) {
        $.flag_loanshark_in_area = 1;
      }
    }
    if (timerb >= 25000) {
      if (!($.flag_loanshark_in_area == 1)) {
        $.loanshark_meat4.setCoordinates(1209.6, -791.0, 13.7);
        // SCM GOTO → loanshark_got_stuck (not lowered; manual jump required)
        throw new Error("unresolved GOTO loanshark_got_stuck"); // fallback: would break linear control flow
      }
    }
  }
}

async function loanshark_got_stuck() {
  $.loanshark_meat4.setIdle();
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  //"Emm hi, I need more time to get the money."
  Text.PrintNow("MEA4_B5", 10000, 1);
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B5");
  Audio.LoadMissionAudio(MF3_B1);
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  //"But if you just step into my office I could..."
  Text.PrintNow("MEA4_B7", 20000, 1);
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Text.ClearThisPrint("MEA4_B7");
  Audio.LoadMissionAudio(MF3_C);
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  //"I warned you about defaulting on a payment!"
  Text.PrintNow("MEA4_B6", 10000, 1);
  //"The Loan Sharks dead!"
  //"The factory owners dead!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    //"The factory owners dead!"
    if (Char.IsDead($.owner_meat4)) {
      //"The factory owners dead!"
      Text.PrintNow("MEA4_2", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B6");
  $.loanshark_meat4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 2);
  // Waiting for the owner to be killed
  $.loanshark_meat4.setObjKillCharOnFoot($.owner_meat4);
  timera = 0;
  //"The Loan Sharks dead!"
  while (!($.flag_owner_dead_meat4 == 1)) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B6");
    }
    if (Char.IsDead($.owner_meat4)) {
      $.flag_owner_dead_meat4 = 1;
    }
    //"The Loan Sharks dead!"
    if (Char.IsDead($.loanshark_meat4)) {
      //"The Loan Sharks dead!"
      Text.PrintNow("MEA4_1", 5000, 1);
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (timera > 10000) {
      if (!(Char.IsDead($.owner_meat4))) {
        $.flag_owner_dead_meat4 = 1;
      }
    }
  }
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA4_B6");
  }
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Camera.RestoreJumpcut();
  }
  // Mission Failed
  // SCM GOTO → mission_passed_meat4 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat4"); // fallback: would break linear control flow
}

async function mission_failed_meat4() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  if (!(Char.IsDead($.owner_meat4))) {
    $.owner_meat4.removeElegantly();
  }
  if (!(Char.IsDead($.loanshark_meat4))) {
    $.loanshark_meat4.removeElegantly();
  }
  // Mission Passed
  return;
}

async function mission_passed_meat4() {
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 4000, 5000, 1);
  Stat.RegisterMissionPassed("MEA4");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(4000);
  $.flag_meat_mission4_passed = 1;
  $.player.clearWantedLevel();
  // Mission Cleanup
  return;
}

async function mission_cleanup_meat4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_meat_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`FAN_MAN2`);
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN2`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  $.radar_blip_ped1_meat4.remove();
  $.radar_blip_car_meat4.remove();
  $.radar_blip_coord2_meat4.remove();
  Mission.Finish();
  return;
}

export async function meat4() {
  // *******************************************************************************************
  // ***********************************Meat Factory Mission 4**********************************
  // **************************************"The Loan Shark"*************************************
  // MissionBoundary
  // Mission Start Stuff
  // ScriptName
  // SCM GOSUB mission_start_meat4
  await mission_start_meat4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_failed_meat4
    await mission_failed_meat4();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_meat4
  await mission_cleanup_meat4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variable for mission
  // MissionBoundary
  // VAR_INT car_meat4
  // VAR_INT loanshark_meat4
  // VAR_INT owner_meat4
  // VAR_INT radar_blip_car_meat4
  // VAR_INT radar_blip_ped1_meat4
  // VAR_INT flag_player_had_car_message_meat4
  // VAR_INT radar_blip_coord2_meat4
  // VAR_INT flag_owner_dead_meat4
  // ****************************************Mission Start************************************
  // VAR_INT flag_loanshark_in_area
}
