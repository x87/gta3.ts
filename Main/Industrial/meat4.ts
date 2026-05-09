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
  World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  Cutscene.Load(mt_ph4);
  Cutscene.SetOffset(1223.88, -839.414, 13.95);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();
  // Displays cutscene text
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_A", 10000, 1); //"Damn I'm in trouble..."
  while ($.cs_time < 3885) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_B", 10000, 1); //"Turns out my wife..."
  while ($.cs_time < 7252) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_C", 10000, 1); //"He's got real..."
  while ($.cs_time < 10502) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_D", 10000, 1); //"I've agreed to see him...."
  while ($.cs_time < 11844) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_E", 10000, 1); //"He thinks that..."
  while ($.cs_time < 13374) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_F", 10000, 1); //but my guess..."
  while ($.cs_time < 14622) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("MEA4_G", 10000, 1); //"Liberty's dogs..."
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
  Camera.DoFade(1500, 1 /* FADE_IN */);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1
  World.SetPedDensityMultiplier(1.0);
  // ********************************END OF CUTSCENE******************************************
  Streaming.RequestModel(ped`FAN_MAN2`);
  Streaming.RequestModel(ped`B_MAN2`);
  Streaming.RequestModel(car`STALLION`);
  Audio.LoadMissionAudio(MF3_A);
  while (!(Streaming.HasModelLoaded(ped`FAN_MAN2`)) || !(Streaming.HasModelLoaded(ped`B_MAN2`)) || !(Streaming.HasModelLoaded(car`STALLION`)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.car_meat4 = Car.Create(122 /* CAR_STALLION */, 1190.0, -796.0, 13.8);
  $.car_meat4.setHeading(300.0);
  $.radar_blip_car_meat4 = Blip.AddForCar($.car_meat4);
  // waiting for the player to get into the car
  while (!($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      Text.PrintNow("WRECKED", 5000, 1); //"The vehicle's wrecked!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1); //"The vehicle's upsidedown!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_car_meat4.remove();
  Text.PrintNow("MEA4_B3", 7000, 1); //"Pick up the Loan Shark, press the horn to get him into the car!"
  $.loanshark_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`FAN_MAN2`, 897.0, -476.0, 14.6);
  $.loanshark_meat4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.loanshark_meat4.clearThreatSearch();
  $.loanshark_meat4.turnToFaceCoord(895.0, -486.0, -100.0);
  $.radar_blip_ped1_meat4 = Blip.AddForChar($.loanshark_meat4);
  $.loanshark_meat4.setCantBeDraggedOut(true /* TRUE */);
  // player is in area
  while (!($.player.locateInCarChar2D($.loanshark_meat4, 8.0, 8.0, false /* FALSE */)) || !($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      Text.PrintNow("WRECKED", 5000, 1); //"The vehicle's wrecked!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
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
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1); //"The vehicle's upsidedown!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  // tells the bloke to get into the players car
  $.loanshark_meat4.setObjEnterCarAsPassenger($.car_meat4);
  while (!($.loanshark_meat4.isInCar($.car_meat4)) || !($.player.isInCar($.car_meat4))) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1); //"The vehicle's wrecked!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.locateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, false /* FALSE */))) {
        Text.PrintNow("MEA4_3", 5000, 1); //"You left the Loan Shark behind"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
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
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1); //"The vehicle's upsidedown!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_ped1_meat4.remove();
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B4", 10000, 1); //"This little "Spank" junkie better have my money, get me to the factory"
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("MEA4_B4");
  }
  $.radar_blip_coord2_meat4 = Blip.AddForCoord(1217.0, -794.0, -100.0);
  $.owner_meat4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN2`, 1208.0, -789.0, 13.9);
  $.owner_meat4.clearThreatSearch();
  $.owner_meat4.turnToFaceCoord(1210.0, -791.0, -100.0);
  $.blob_flag = 1;
  while (!($.loanshark_meat4.locateStoppedInCar3D(1217.0, -794.0, 13.9, 4.0, 4.0, 6.0, $.blob_flag)) || !($.loanshark_meat4.isInCar($.car_meat4))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B4");
    }
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1); //"The vehicle's wrecked!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.locateAnyMeansChar3D($.loanshark_meat4, 30.0, 30.0, 30.0, false /* FALSE */))) {
        Text.PrintNow("MEA4_3", 5000, 1); //"You left the Loan Shark behind"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (!($.player.isInCar($.car_meat4)) && $.flag_player_had_car_message_meat4 == 0) {
      Text.PrintNow("IN_VEH", 5000, 1); //"Get back into the vehicle and get on with the mission!"
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
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1); //"The vehicle's upsidedown!"
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
  while ($.loanshark_meat4.isInCar($.car_meat4)) {
    await asyncWait(0);
    if (Car.IsDead($.car_meat4)) {
      if (Char.IsDead($.loanshark_meat4)) {
        Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1); //"The vehicle's wrecked!"
        // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if ($.car_meat4.isUpsidedown() && $.car_meat4.isStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1); //"The vehicle's upsidedown!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.setObjGotoCoordOnFoot(1209.6, -791.0);
  Camera.SetFixedPosition(1218.1, -795.0, 16.0, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1204.6, -785.7, 13.9, 2 /* JUMP_CUT */);
  World.ClearArea(1212.0, -792.0, 14.0, 10.0, true /* TRUE */);
  Audio.LoadMissionAudio(MF3_B);
  // Waiting for the blokes to get to the meat grinding area
  timerb = 0;
  while (!($.flag_loanshark_in_area == 1) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
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
  Text.PrintNow("MEA4_B5", 10000, 1); //"Emm hi, I need more time to get the money."
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B5");
  Audio.LoadMissionAudio(MF3_B1);
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B7", 20000, 1); //"But if you just step into my office I could..."
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Text.ClearThisPrint("MEA4_B7");
  Audio.LoadMissionAudio(MF3_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  $.loanshark_meat4.turnToFaceChar($.owner_meat4);
  Audio.PlayMissionAudio();
  Text.PrintNow("MEA4_B6", 10000, 1); //"I warned you about defaulting on a payment!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.owner_meat4)) {
      Text.PrintNow("MEA4_2", 5000, 1); //"The factory owners dead!"
      // SCM GOTO → mission_failed_meat4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_failed_meat4"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("MEA4_B6");
  $.loanshark_meat4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 2);
  $.loanshark_meat4.setObjKillCharOnFoot($.owner_meat4);
  // Waiting for the owner to be killed
  timera = 0;
  while (!($.flag_owner_dead_meat4 == 1)) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("MEA4_B6");
    }
    if (Char.IsDead($.owner_meat4)) {
      $.flag_owner_dead_meat4 = 1;
    }
    if (Char.IsDead($.loanshark_meat4)) {
      Text.PrintNow("MEA4_1", 5000, 1); //"The Loan Sharks dead!"
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
  // SCM GOTO → mission_passed_meat4 (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_passed_meat4"); // fallback: would break linear control flow
  // Mission Failed
}

async function mission_failed_meat4() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed!"
  if (!(Char.IsDead($.owner_meat4))) {
    $.owner_meat4.removeElegantly();
  }
  if (!(Char.IsDead($.loanshark_meat4))) {
    $.loanshark_meat4.removeElegantly();
  }
  return;
  // Mission Passed
}

async function mission_passed_meat4() {
  Text.PrintWithNumberBig("m_pass", 4000, 5000, 1); //"Mission Passed!"
  Stat.RegisterMissionPassed("MEA4");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(4000);
  $.flag_meat_mission4_passed = 1;
  $.player.clearWantedLevel();
  return;
  // Mission Cleanup
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
  // MissionBoundary
  // *******************************************************************************************
  // ***********************************Meat Factory Mission 4**********************************
  // **************************************"The Loan Shark"*************************************
  // ScriptName
  // Mission Start Stuff
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
  // MissionBoundary
  // Variable for mission
  // VAR_INT car_meat4
  // VAR_INT loanshark_meat4
  // VAR_INT owner_meat4
  // VAR_INT radar_blip_car_meat4
  // VAR_INT radar_blip_ped1_meat4
  // VAR_INT flag_player_had_car_message_meat4
  // VAR_INT radar_blip_coord2_meat4
  // VAR_INT flag_owner_dead_meat4
  // VAR_INT flag_loanshark_in_area
  // ****************************************Mission Start************************************
}
