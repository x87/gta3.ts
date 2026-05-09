// Generated from Main/Industrial/8ball.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_eightball() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_eightball_mission = 1;
  Stat.RegisterMissionGiven();
  Weather.ForceNow(1 /* WEATHER_CLOUDY */);
  Clock.SetTimeOfDay(4, 0);
  // THIS MIGHT HAVE TO COME OUT!!!!!!!!!!!!!!!!!!!!!!!!!!!
  Streaming.LoadScene(807.0, -937.0, 36.6);
  await asyncWait(0);
  $.flag_blip_on_eightball = 0;
  $.flag_player_got_cops_message_eightball = 0;
  $.flag_player_got_car_message1_eightball = 0;
  $.flag_player_in_area = 0;
  // luigi variables
  $.flag_eightball_in_area = 0;
  $.flag_player_had_car_message_lm1 = 0;
  $.flag_player_not_in_car_message_lm1 = 0;
  $.no_of_passengers_car_lm1 = 0;
  $.flag_girl1_in_car_lm1 = 0;
  $.passenger_count_lm1 = 0;
  $.total_space_in_car_lm1 = 0;
  $.flag_blip_on_girl1_lm1 = 0;
  $.flag_coord_blip_on = 0;
  // luigi blip stuff
  $.blob_flag = 1;
  $.flag_luigi_coord1_blip_created = 0;
  $.flag_luigi_ped1_blip_created = 0;
  $.flag_girl1_in_group_lm1 = 0;
  $.flag_player_had_vehicle_message_lm1 = 0;
  $.flag_player_in_area_lm1 = 0;
  $.flag_eightball_in_area_lm1 = 0;
  $.flag_help_8ball1 = 0;
  $.flag_help_8ball2 = 0;
  $.flag_car_message_8ball = 0;
  $.flag_brake_message = 0;
  $.flag_hbrake_message = 0;
  $.flag_look2_8ball = 0;
  $.flag_look3_8ball = 0;
  $.flag_misty_stop = 0;
  $.flag_player_had_camera_message_8ball = 0;
  $.flag_girl_in_group_lm1 = 0;
  $.flag_timer_stopped_flashing_8ball = 0;
  {
  if ($.flag_reached_hideout == 0) {
    Streaming.RequestModel(car`KURUMA`);
    Streaming.LoadSpecialCharacter(1, eight);
    Streaming.LoadAllModelsNow();
    $.car_8ball_x = 0.0;
    $.car_8ball_y = 0.0;
    $.car_8ball_z = 0.0;
    $.car_8ball_heading = 0.0;
    $.car_colour1_8ball = 0;
    $.car_colour2_8ball = 0;
  }
  else {
    // SCM GOTO → hideout_reached (not lowered; manual jump required)
    throw new Error("unresolved GOTO hideout_reached"); // fallback: would break linear control flow
  }
  if ($.flag_bridge_created_8ball == 0) {
    $.damagea = Object.CreateNoOffset(725 /* bridgefuka */, 715.746, -937.908, 40.194);
    $.damagea.dontRemove();
    $.damageb = Object.CreateNoOffset(724 /* bridgefukb */, 787.835, -939.24, 38.971);
    $.damageb.dontRemove();
    $.flag_bridge_created_8ball = 1;
  }
  $.player.setHeading(180.0);
  // new Aaron position
  $.car_eightball = Car.Create(104 /* CAR_KURUMA */, 812.0131, -945.5528, 35.7889);
  $.car_eightball.changeColor(58, 1);
  $.car_eightball.setHeading(262.3871);
  // New Aaron position
  $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 811.90, -942.47, -100.0);
  $.eightball.setAnimGroup(9 /* ANIM_GANG2_PED */);
  $.eightball.clearThreatSearch();
  // New Aaron position
  $.eightball.turnToFaceCoord(811.90, -939.95, 35.8);
  $.eightball.lookAtPlayerAlways($.player);
  //Restarts at the bridge
  Restart.OverrideNext(811.90, -939.95, 35.8, 180.0);
  $.playersdoor.setHeading(0.0);
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  //SMOKE ON CARS
  Fx.AddParticleEffect(4, 791.661, -936.916, 38.313, false /* FALSE */);
  Fx.AddParticleEffect(4, 788.337, -938.467, 38.073, false /* FALSE */);
  Fx.AddParticleEffect(4, 786.493, -942.398, 39.8, false /* FALSE */);
  //FIRE ON CARS
  Fx.AddParticleEffect(10, 783.572, -938.549, 38.448, false /* FALSE */);
  Fx.AddParticleEffect(10, 790.537, -935.67, 38.005, false /* FALSE */);
  Fx.AddParticleEffect(10, 789.295, -938.882, 38.127, false /* FALSE */);
  $.fire_sound_8ball.remove();
  $.fire_sound_8ball = Sound.AddContinuous(790.537, -935.67, 38.005, 102 /* SOUND_PRETEND_FIRE_LOOP */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  // New position
  Camera.SetFixedPosition(785.0, -936.77, 39.75, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.eightball, 15 /* fixed */, 2 /* jump_cut */);
  Audio.LoadMissionAudio(LIB_A1);
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Camera.SetFadingColor(0, 0, 0);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  await asyncWait(2000);
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Camera.SetFixedPosition(804.5746, -933.048, 39.9828, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(805.1921, -933.7454, 39.6193, 2 /* JUMP_CUT */);
  //"Give me Liberty"
  Text.PrintBig("EBAL", 15000, 2);
  Audio.PlayMissionAudio();
  //"I know a place on the edge of the Red Light District where we can lay low,
  Text.PrintNow("EBAL_A", 5000, 1);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Text.ClearThisPrint("EBAL_A");
  Audio.LoadMissionAudio(LIB_A2);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Audio.PlayMissionAudio();
  //"but my hands are badly burned so you'll have to drive.""
  Text.PrintNow("EBAL_A1", 5000, 1);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_A1");
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.eightball.stopLooking();
  $.eightball.setObjEnterCarAsPassenger($.car_eightball);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!($.eightball.isInCar($.car_eightball))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_A1");
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  // This will tune the radio to HEAD RADIO
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_A1");
  }
  if ($.flag_done_radio_8ball == 0) {
    Audio.SetRadioChannel(0 /* HEAD_RADIO */, 0);
    $.flag_done_radio_8ball = 1;
  }
  else {
    Audio.SetRadioChannel(0 /* HEAD_RADIO */, -1);
  }
  $.eightball.setCantBeDraggedOut(true /* TRUE */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.Restore();
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
  // This turns on all the car generators in the level
  // SCM GOSUB car_gen_start_8ball
  await car_gen_start_8ball();
  // fallback if label was not emitted as async function: no-op continues linearly
  await asyncWait(500);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_A1");
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  // gives the player the help message for entering cars
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.controlmode = Pad.GetControllerMode();
  //"Press Triangle to enter a vehicle."
  if ($.controlmode == 0) {
    //"Press Triangle to enter a vehicle."
    Text.PrintHelp("EBAL_1");
  }
  //"Press Triangle to enter a vehicle."
  if ($.controlmode == 1) {
    //"Press Triangle to enter a vehicle."
    Text.PrintHelp("EBAL_1");
  }
  //"Press Triangle to enter a vehicle."
  if ($.controlmode == 2) {
    //"Press Triangle to enter a vehicle."
    Text.PrintHelp("EBAL_1B");
  }
  //"Press Triangle to enter a vehicle."
  if ($.controlmode == 3) {
    //"Press Triangle to enter a vehicle."
    Text.PrintHelp("EBAL_1");
  }
  // Timer for police wanted level stuff
  timerb = 0;
  await asyncWait(3000);
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  // Waiting for the player to get into the car
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  // 2 mins
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  // creates two cops cars that drive onto the bridge
  while (!($.player.isInCar($.car_eightball)) || !($.eightball.isInCar($.car_eightball))) {
    await asyncWait(0);
    // 2 mins
    if (timerb < 120000) {
      $.player.clearWantedLevel();
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.cop_car1_8ball = Car.Create(109 /* car_police */, 1083.2, -945.0, 13.8);
  $.cop1_8ball = Char.CreateInsideCar($.cop_car1_8ball, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
  $.cop1_8ball.clearThreatSearch();
  $.cop_car1_8ball.setHeading(90.0);
  $.cop_car1_8ball.switchSiren(true /* ON */);
  $.cop_car1_8ball.setDrivingStyle(2);
  $.cop_car1_8ball.setCruiseSpeed(20.0);
  $.cop_car1_8ball.gotoCoordinates(713.9, -916.7, 42.0);
  $.cop_car2_8ball = Car.Create(109 /* car_police */, 1074.1, -946.7, 13.8);
  $.cop2_8ball = Char.CreateInsideCar($.cop_car2_8ball, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
  $.cop2_8ball.clearThreatSearch();
  $.cop_car2_8ball.setHeading(90.0);
  $.cop_car2_8ball.switchSiren(true /* ON */);
  $.cop_car2_8ball.setDrivingStyle(2);
  $.cop_car2_8ball.setCruiseSpeed(20.0);
  $.cop_car2_8ball.gotoCoordinates(718.7, -922.2, 42.0);
  // Accelertation help messages
  $.radar_blip_car1_eightball.remove();
  await asyncWait(500);
  // 2 mins
  if (timerb < 120000) {
    $.player.clearWantedLevel();
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.controlmode = Pad.GetControllerMode();
  //"Press the / button to accelerate."
  if ($.controlmode == 0) {
    //"Press the / button to accelerate."
    Text.PrintHelp("HELP4_A");
  }
  //"Press the / button to accelerate."
  if ($.controlmode == 1) {
    //"Press the / button to accelerate."
    Text.PrintHelp("HELP4_A");
  }
  //"Press the / button to accelerate."
  if ($.controlmode == 2) {
    //"Press the / button to accelerate."
    Text.PrintHelp("HELP4_A");
  }
  //"Press the / button to accelerate."
  if ($.controlmode == 3) {
    //"Press the / button to accelerate."
    Text.PrintHelp("HELP4_D");
  }
  $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
  timera = 0;
  $.blob_flag = 1;
  // 2 mins
  if (timerb < 120000) {
    $.player.clearWantedLevel();
  }
  Audio.LoadMissionAudio(LIB_A);
  timera = 0;
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Stop in the centre of the red dome."
  while (timera < 10000) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get back into the car and get on with the mission!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Get back into the car and get on with the mission!"
      if (!($.player.isInCar($.car_eightball))) {
        $.blob_flag = 0;
        //"Get back into the car and get on with the mission!"
        if ($.flag_car_message_8ball == 0) {
          //"Get back into the car and get on with the mission!"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord1_eightball.remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.remove();
          $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    //Stop in the centre of the red dome."
    if ($.player.locateInCar2D(875.0, -309.0, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
      //Stop in the centre of the red dome."
      Text.PrintHelp("HELP1");
      $.flag_help_8ball1 = 1;
    }
  }
  //"Follow the "blip" to find the hideout!"
  Text.PrintHelp("EBAL_3");
  Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
  // waiting for the player to get to Luigi's
  timera = 0;
  // 2 mins
  //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
  //"Press the R1 button to apply the vehicle's handbrake."
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Stop in the centre of the red dome."
  while (!($.player.isStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, $.blob_flag)) || !($.eightball.isStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, false /* FALSE */)) || !($.player.isSittingInCar($.car_eightball)) || !($.eightball.isSittingInCar($.car_eightball)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    // 2 mins
    if (timerb < 120000) {
      $.player.clearWantedLevel();
    }
    if ($.flag_timer_stopped_flashing_8ball == 0) {
      if (timera > 4000) {
        Hud.FlashObject(-1);
        $.flag_timer_stopped_flashing_8ball = 1;
      }
    }
    //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
    if ($.flag_brake_message == 0) {
      //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
      if (timera >= 10000) {
        $.controlmode = Pad.GetControllerMode();
        //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
        if ($.controlmode == 0) {
          //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
          Text.PrintHelp("HELP5_A");
        }
        //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
        if ($.controlmode == 1) {
          //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
          Text.PrintHelp("HELP5_A");
        }
        //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
        if ($.controlmode == 2) {
          //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
          Text.PrintHelp("HELP5_A");
        }
        //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
        if ($.controlmode == 3) {
          //"Press the ^ button to brake, when stopped this will make the vehicle reverse."
          Text.PrintHelp("HELP5_D");
        }
        $.flag_brake_message = 1;
        timera = 0;
      }
    }
    //"Press the R1 button to apply the vehicle's handbrake."
    if (timera > 10000) {
      //"Press the R1 button to apply the vehicle's handbrake."
      if ($.flag_hbrake_message == 0) {
        $.controlmode = Pad.GetControllerMode();
        //"Press the R1 button to apply the vehicle's handbrake."
        if ($.controlmode == 0) {
          //"Press the R1 button to apply the vehicle's handbrake."
          Text.PrintHelp("HELP6_A");
        }
        //"Press the R1 button to apply the vehicle's handbrake."
        if ($.controlmode == 1) {
          //"Press the R1 button to apply the vehicle's handbrake."
          Text.PrintHelp("HELP6_A");
        }
        //"Press the R1 button to apply the vehicle's handbrake."
        if ($.controlmode == 2) {
          //"Press the R1 button to apply the vehicle's handbrake."
          Text.PrintHelp("HELP6_C");
        }
        //"Press the R1 button to apply the vehicle's handbrake."
        if ($.controlmode == 3) {
          //"Press the R1 button to apply the vehicle's handbrake."
          Text.PrintHelp("HELP6_D");
        }
        $.flag_hbrake_message = 1;
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get back into the car and get on with the mission!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Get back into the car and get on with the mission!"
      if (!($.player.isInCar($.car_eightball))) {
        $.blob_flag = 0;
        //"Get back into the car and get on with the mission!"
        if ($.flag_car_message_8ball == 0) {
          //"Get back into the car and get on with the mission!"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord1_eightball.remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.remove();
          $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    //Stop in the centre of the red dome."
    if ($.player.locateInCar2D(875.0, -309.0, 20.0, 20.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
      //Stop in the centre of the red dome."
      Text.PrintHelp("HELP1");
      $.flag_help_8ball1 = 1;
    }
  }
  Text.ClearHelp();
  // ******************************Player and 8ball are at base scripted cutscene*************
  $.radar_blip_coord1_eightball.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.clearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.player.setControl(false /* OFF */);
  if (!(Car.IsDead($.cop_car1_8ball))) {
    $.cop_car1_8ball.delete();
  }
  if (!(Car.IsDead($.cop_car2_8ball))) {
    $.cop_car2_8ball.delete();
  }
  World.ClearArea(886.8, -310.1, -100.0, 2.0, true /* TRUE */);
  [$.car_8ball_x, $.car_8ball_y, $.car_8ball_z] = $.car_eightball.getCoordinates();
  $.car_8ball_heading = $.car_eightball.getHeading();
  [$.car_colour1_8ball, $.car_colour2_8ball] = $.car_eightball.getColors();
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!($.playersdoor.rotate(210.0, 10.0, false /* FALSE */))) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  // This should remove any stuff that is in the way for the cut-scene
  World.ClearArea(889.7, -308.2, 8.6, 3.0, true /* TRUE */);
  $.script_controlled_player = $.player.getChar();
  $.script_controlled_player.clearThreatSearch();
  $.eightball.setObjLeaveCar($.car_eightball);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while ($.eightball.isInCar($.car_eightball)) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Audio.PlayMissionAudio();
  //"This is the place! Let's get off the street and find a change of clothes!"
  Text.PrintNow("EBAL_B", 7000, 1);
  $.eightball.setObjRunToCoord(892.7, -308.6);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  await asyncWait(1000);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  $.script_controlled_player.setObjLeaveCar($.car_eightball);
  World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);
  //high camera that points to the water tower
  //low new camera that points to the save house
  if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
    //high camera that points to the water tower
    Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
  }
  else {
    //low new camera that points to the save house
    Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //Make player walk into the doors and get a change of clothes
  while ($.script_controlled_player.isInCar($.car_eightball)) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_B");
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.script_controlled_player.setObjRunToCoord(892.4, -308.5);
  timerb = 0;
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if ($.flag_player_in_area == 0) {
      if ($.script_controlled_player.locateOnFoot2D(892.4, -308.5, 0.5, 0.5, false /* FALSE */)) {
        $.script_controlled_player.setObjRunToCoord(892.4, -305.6);
        $.flag_player_in_area = 1;
      }
    }
    if ($.flag_eightball_in_area == 0) {
      if ($.eightball.locateOnFoot2D(892.7, -308.6, 0.5, 0.5, false /* FALSE */)) {
        $.eightball.setObjRunToCoord(894.2, -304.3);
        $.flag_eightball_in_area = 1;
      }
    }
    if ($.flag_player_in_area == 1) {
      if ($.script_controlled_player.locateOnFoot2D(892.4, -305.6, 0.5, 0.5, false /* FALSE */)) {
        $.flag_player_in_area = 2;
      }
    }
    if ($.flag_eightball_in_area == 1) {
      if ($.eightball.locateOnFoot2D(894.2, -304.3, 0.5, 0.5, false /* FALSE */)) {
        $.flag_eightball_in_area = 2;
      }
    }
    if (timerb >= 10000) {
      if (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
        $.player.setCoordinates(892.4, -305.6, 7.7);
        $.script_controlled_player.setIdle();
        $.eightball.setCoordinates(894.2, -304.3, 7.7);
        $.eightball.setIdle();
        // SCM GOTO → mission_bloke_stuck_8ball (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck_8ball"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_bloke_stuck_8ball() {
  Camera.SetFixedPosition(886.8, -310.1, 9.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(887.7, -309.8, 9.8, 2 /* JUMP_CUT */);
  $.eightball.setIdle();
  $.script_controlled_player.setObjNoObj();
  //"When not on a mission you can save your game here, this will also advance time six hours."
  Text.PrintHelp("S_PROMP");
  await asyncWait(4000);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"The garage next door can store one car."
  Text.PrintHelp("S_PROM2");
  Camera.PointAtPoint(887.8, -310.5, 9.7, 1 /* interpolation */);
  $.player.setCoordinates(895.9, -311.4, 7.7);
  // Clothes change
  //8-BAll change
  $.eightball.setCoordinates(884.3, -309.2, 7.6);
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //Player change
  if (!(Char.IsDead($.eightball))) {
    $.eightball.undress(eight2);
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    while (!(Streaming.HasModelLoaded(ped`SPECIAL1`))) {
      await asyncWait(0);
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      if (Car.IsDead($.car_eightball)) {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //You've flipped your wheels!"
        if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
          //You've flipped your wheels!"
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!(Char.IsDead($.eightball))) {
      $.eightball.dress();
    }
  }
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (!(Char.IsDead($.script_controlled_player))) {
    $.script_controlled_player.undress($.player);
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    while (!(Streaming.HasModelLoaded(ped`PLAYER`))) {
      await asyncWait(0);
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      if (Car.IsDead($.car_eightball)) {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //You've flipped your wheels!"
        if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
          //You've flipped your wheels!"
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!(Char.IsDead($.script_controlled_player))) {
      $.script_controlled_player.dress();
    }
  }
  await asyncWait(3000);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.player.setCoordinates(883.5, -308.2, 7.6);
  Weather.Release();
  $.eightball.setObjEnterCarAsPassenger($.car_eightball);
  await asyncWait(1500);
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.script_controlled_player.setObjEnterCarAsDriver($.car_eightball);
  World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);
  //high camera that points to the water tower
  //low new camera that points to the save house
  if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
    //high camera that points to the water tower
    Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
  }
  else {
    //low new camera that points to the save house
    Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
  }
  Text.ClearHelp();
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!($.player.isInCar($.car_eightball)) || !($.eightball.isInCar($.car_eightball))) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while (!($.playersdoor.rotate(0.0, 10.0, false /* FALSE */))) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  //ADD_BLIP_FOR_COORD 906.2 -426.0 -100.0 radar_blip_coord2_eightball
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  // *************Restart function for 8ball and the player at players hideout***************
  $.blob_flag = 1;
}

async function hideout_reached() {
  //high camera that points to the water tower
  //low new camera that points to the save house
  //CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL1 887.2 -308.4 7.6 eightball
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  // **************************************end of the restart stuff***************************
  if ($.flag_reached_hideout == 1) {
    Hud.SwitchWidescreen(true /* ON */);
    $.player.setControl(false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player, true /* ON */);
    $.player.setHeading(90.0);
    World.ClearArea(868.63, -311.7, 8.3, 1.0, true /* TRUE */);
    //high camera that points to the water tower
    //low new camera that points to the save house
    if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
      //high camera that points to the water tower
      Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
    }
    else {
      //low new camera that points to the save house
      Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
    }
    $.playersdoor.setHeading(0.0);
    Streaming.LoadSpecialCharacter(1, eight2);
    Streaming.RequestModel(car`KURUMA`);
    //CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL1 887.2 -308.4 7.6 eightball
    Streaming.LoadAllModelsNow();
    $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 884.3, -309.2, 7.6);
    $.eightball.setAnimGroup(9 /* ANIM_GANG2_PED */);
    $.eightball.setHeading(90.0);
    $.eightball.clearThreatSearch();
    $.car_eightball = Car.Create(104 /* CAR_KURUMA */, $.car_8ball_x, $.car_8ball_y, $.car_8ball_z);
    $.car_eightball.setHeading($.car_8ball_heading);
    $.car_eightball.changeColor($.car_colour1_8ball, $.car_colour2_8ball);
    Weather.Release();
    $.script_controlled_player.setObjEnterCarAsDriver($.car_eightball);
    $.eightball.setObjEnterCarAsPassenger($.car_eightball);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    while (!($.player.isInCar($.car_eightball)) || !($.eightball.isInCar($.car_eightball))) {
      await asyncWait(0);
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      if (Car.IsDead($.car_eightball)) {
        //"8-Balls dead!
        //"The vehicle's wrecked!"
        if (Char.IsDead($.eightball)) {
          //"8-Balls dead!
          Text.PrintNow("EBAL_4", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
        else {
          //"The vehicle's wrecked!"
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      else {
        //You've flipped your wheels!"
        if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
          //You've flipped your wheels!"
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      //"8-Balls dead!
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    $.eightball.setCantBeDraggedOut(true /* TRUE */);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
    Hud.SwitchWidescreen(false /* OFF */);
    $.player.setControl(true /* ON */);
    Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  }
  if ($.flag_reached_hideout == 0) {
    World.RemoveParticleEffectsInArea(804.02, -948.03, 30.0, 765.15, -924.32, 50.0);
    $.fire_sound_8ball.remove();
    $.damagea.delete();
    $.damageb.delete();
    World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, 218 /* LOD_land014 */, 855 /* indhelix_barrier */);
    World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, true /* TRUE */);
  }
  $.flag_reached_hideout = 1;
  // Players hideout
  Restart.OverrideNext(883.5, -308.2, 7.6, 90.0);
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //Luigis blip
  $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
  Audio.LoadMissionAudio(LIB_B);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Luigis
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get back into the car and get on with the mission!"
    //Luigis
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Get back into the car and get on with the mission!"
      //Luigis
      if (!($.player.isInCar($.car_eightball))) {
        $.blob_flag = 0;
        //"Get back into the car and get on with the mission!"
        if ($.flag_car_message_8ball == 0) {
          //"Get back into the car and get on with the mission!"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        //Luigis
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.remove();
          //Luigis
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  //"I know a guy, he's connected, Names Luigi.
  Text.PrintNow("EBAL_D", 5000, 1);
  await asyncWait(2000);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Luigis
  if (Car.IsDead($.car_eightball)) {
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"The vehicle's wrecked!"
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    //You've flipped your wheels!"
    if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
      //You've flipped your wheels!"
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"Get back into the car and get on with the mission!"
    //Luigis
    if (!($.player.isInCar($.car_eightball))) {
      $.blob_flag = 0;
      //"Get back into the car and get on with the mission!"
      if ($.flag_car_message_8ball == 0) {
        //"Get back into the car and get on with the mission!"
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_coord2_eightball.remove();
        $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
        $.flag_car_message_8ball = 1;
      }
    }
    else {
      $.blob_flag = 1;
      //Luigis
      if ($.flag_car_message_8ball == 1) {
        $.radar_blip_car1_eightball.remove();
        //Luigis
        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
        $.flag_car_message_8ball = 0;
      }
    }
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"Me an' him go back so I could probably get you some work."
  //waiting for the player to got to Luigi's
  Text.PrintNow("EBAL_D1", 7000, 1);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Luigis
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get back into the car and get on with the mission!"
    //Luigis
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Get back into the car and get on with the mission!"
      //Luigis
      if (!($.player.isInCar($.car_eightball))) {
        $.blob_flag = 0;
        //"Get back into the car and get on with the mission!"
        if ($.flag_car_message_8ball == 0) {
          //"Get back into the car and get on with the mission!"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        //Luigis
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.remove();
          //Luigis
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("EBAL_D");
  // waiting for the player to get to luigi's
  Text.ClearThisPrint("EBAL_D1");
  Audio.LoadMissionAudio(LIB_C);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get back into the car and get on with the mission!"
  //Luigis
  //Stop in the centre of the red dome."
  while (!($.player.isStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag)) || !($.eightball.isStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false /* FALSE */)) || !($.player.isInCar($.car_eightball)) || !($.eightball.isInCar($.car_eightball)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get back into the car and get on with the mission!"
    //Luigis
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Get back into the car and get on with the mission!"
      //Luigis
      if (!($.player.isInCar($.car_eightball))) {
        $.blob_flag = 0;
        //"Get back into the car and get on with the mission!"
        if ($.flag_car_message_8ball == 0) {
          //"Get back into the car and get on with the mission!"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        //Luigis
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.remove();
          //Luigis
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //Stop in the centre of the red dome."
    if ($.player.locateInCar2D(902.8, -425.6, 15.0, 15.0, false /* FALSE */) && $.player.isInCar($.car_eightball) && $.flag_help_8ball2 == 0) {
      //Stop in the centre of the red dome."
      Text.PrintHelp("HELP1");
      $.flag_help_8ball2 = 1;
    }
  }
  Text.ClearHelp();
  $.radar_blip_coord2_eightball.remove();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.clearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  $.player.setControl(false /* OFF */);
  // This should get rid of any stuff for the cut-scene
  World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */);
  $.script_controlled_player = $.player.getChar();
  $.script_controlled_player.clearThreatSearch();
  $.script_controlled_player.setObjLeaveCar($.car_eightball);
  $.eightball.setObjLeaveCar($.car_eightball);
  Audio.PlayMissionAudio();
  //"Here's Luigi's club. c'mon lets go round the back and use the service door."
  Text.PrintNow("EBAL_G", 7000, 1);
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while ($.script_controlled_player.isInCar($.car_eightball)) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_G");
    }
  }
  //"8-Balls dead!
  if (Char.IsDead($.eightball)) {
    //"8-Balls dead!
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  //"8-Balls dead!
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  while ($.eightball.isInCar($.car_eightball)) {
    await asyncWait(0);
    //"8-Balls dead!
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    if (Car.IsDead($.car_eightball)) {
      //"8-Balls dead!
      //"The vehicle's wrecked!"
      if (Char.IsDead($.eightball)) {
        //"8-Balls dead!
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      //You've flipped your wheels!"
      if ($.car_eightball.isUpsidedown() && $.car_eightball.isStopped()) {
        //You've flipped your wheels!"
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_G");
    }
  }
  $.car_eightball.markAsNoLongerNeeded();
  $.script_controlled_player.setObjGotoCoordOnFoot(897.1, -426.3);
  $.eightball.setObjGotoCoordOnFoot(897.3, -424.6);
  //"8-Balls dead!
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("EBAL_G");
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  $.eightball.setCantBeDraggedOut(false /* FALSE */);
  // ****************************Player and eightball cut-scene at luigi's********************
  Text.ClearHelp();
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  //	if player is not in control after 5 secs do the cutscene anyway
  //"8-Balls dead!
  while (!($.player.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    //"8-Balls dead!
    if (Char.IsDead($.eightball)) {
      //"8-Balls dead!
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.makeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(false /* OFF */);
  //"Luigi's Girls"
  Text.PrintBig("LM1", 15000, 2);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  Streaming.LoadSpecialCharacter(2, $.micky);
  Streaming.LoadSpecialCharacter(3, $.luigi);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, MICKYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, EIGHTH);
  Streaming.LoadSpecialModel(hier`cutobj04`, LUIGIH);
  Streaming.LoadSpecialModel(hier`cutobj05`, PLAYERH);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);
  if (!(Char.IsDead($.eightball))) {
    $.eightball.setObjWaitOnFoot();
  }
  // Cutscene stuff
  $.script_controlled_player.setObjWaitOnFoot();
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`)) || !(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
  }
  $.eightball.delete();
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, false /* FALSE */);
  Cutscene.Load(l1_lg);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_micky.setAnim($.micky);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.setAnim(eight2);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_luigi.setAnim($.luigi);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj02`);
  $.cs_mickyhead.setAnim($.micky);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj03`);
  $.cs_eighthead.setAnim(eight);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj04`);
  $.cs_luigihead.setAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj05`);
  $.cs_playerhead.setAnim($.player);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.setAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */);
  $.player.setCoordinates(896.6, -426.2, 13.9);
  $.player.setHeading(270.0);
  TIMERA = 0;
  while (TIMERA < 3500) {
    await asyncWait(0);
  }
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // This should get rid of anything in the alleway
  World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */);
  World.ClearArea(892.8, -425.5, 13.9, 3.0, true /* TRUE */);
  World.ClearArea(896.3, -425.6, 13.8, 3.0, true /* TRUE */);
  World.ClearArea(899.7, -425.7, 14.0, 0.5, true /* TRUE */);
  World.SwitchRubbish(false /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  // Displays cutscene text
  $.player.setVisible(false /* OFF */);
  while ($.cs_time < 11165) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Wait here while I go in and talk to Luigi."
  Text.PrintNow("EBAL_H", 10000, 1);
  while ($.cs_time < 13416) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //PRINT_NOW ( EBAL_I ) 10000 1 //"Da boss will be out to see you shortly..."
  Text.ClearThisPrint("EBAL_H");
  while ($.cs_time < 30834) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"8-Ball's got some business up stairs."
  Text.PrintNow("EBAL_J", 10000, 1);
  while ($.cs_time < 33186) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Maybe you can do me a favor."
  Text.PrintNow("EBAL_K", 10000, 1);
  while ($.cs_time < 35235) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"One of my girls needs a ride so grab a car and pick up Misty from the clinic. Then bring her back here"
  Text.PrintNow("EBAL_L", 10000, 1);
  while ($.cs_time < 41551) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Remember no one messes with my girls"
  Text.PrintNow("EBAL_M", 10000, 1);
  while ($.cs_time < 45634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"So keep your hands on the wheel!"
  Text.PrintNow("EBAL_N", 10000, 1);
  while ($.cs_time < 47560) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"If you don't mess this up there might be more work for you."
  Text.PrintNow("EBAL_O", 10000, 1);
  while ($.cs_time < 51911) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("EBAL_O");
  while ($.cs_time < 52500) {
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
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Streaming.Switch(true /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(true /* ON */);
  Streaming.LoadScene(920.3, -425.4, 15.0);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  $.player.setControl(true /* ON */);
  // ************************************************END OF CUT_SCENE*************************
  // *****************************************LUIGI'S GIRLS***********************************
  World.SetPedDensityMultiplier(1.0);
  Streaming.LoadSpecialCharacter(2, $.misty);
  //"Get a vehicle!"
  // Waiting for the player to be in a car
  Text.PrintNow("EBAL_5", 5000, 1);
  // Creates the first girl
  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  $.girl1_lm1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1144.6, -592.8, 13.9);
  $.girl1_lm1.clearThreatSearch();
  $.girl1_lm1.setHeading(90.0);
  $.girl1_lm1.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
  $.flag_blip_on_girl1_lm1 = 1;
  Audio.LoadMissionAudio(LIB_D);
  //"Misty's dead!
  while (!($.player.isInAnyCar()) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    //"Misty's dead!
    if (Char.IsDead($.girl1_lm1)) {
      //"Misty's dead!
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if ($.player.isInAnyCar()) {
      $.car_lm1 = $.player.storeCarIsIn();
    }
  }
  $.controlmode = Pad.GetControllerMode();
  //"Press the L1 button to cycle through the radio stations."
  if ($.controlmode == 0) {
    Text.ClearHelp();
    //"Press the L1 button to cycle through the radio stations."
    Text.PrintHelp("RADIO_A");
  }
  //"Press the SELECT button to cycle through the radio stations.
  if ($.controlmode == 1) {
    Text.ClearHelp();
    //"Press the SELECT button to cycle through the radio stations.
    Text.PrintHelp("RADIO_B");
  }
  //"Press the L3 button to cycle through the radio stations."
  if ($.controlmode == 2) {
    Text.ClearHelp();
    //"Press the L3 button to cycle through the radio stations."
    Text.PrintHelp("RADIO_C");
  }
  //"Press the | button to cycle through the radio stations."
  if ($.controlmode == 3) {
    Text.ClearHelp();
    //"Press the | button to cycle through the radio stations."
    Text.PrintHelp("RADIO_D");
  }
  //"Pick up Misty!"
  // Waiting for the player and the girls all to be in the one car
  Text.PrintNow("EBAL_6", 5000, 1);
  //"Misty's dead!
  //"Stop the vehicle next to Misty and allow her to enter it."
  //"Get a vehicle and get on with the mission!"
  //"Pick up Misty!"
  //"The Vehicles wrecked"
  //Get into the car and get on with the mission"
  //"Hey I'm Misty!"
  while ($.flag_girl1_in_car_lm1 == 0) {
    await asyncWait(0);
    //"Misty's dead!
    //"Stop the vehicle next to Misty and allow her to enter it."
    //"Get a vehicle and get on with the mission!"
    //"Pick up Misty!"
    //"The Vehicles wrecked"
    if ($.flag_girl_in_group_lm1 == 0) {
      //"Misty's dead!
      if (Char.IsDead($.girl1_lm1)) {
        //"Misty's dead!
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Stop the vehicle next to Misty and allow her to enter it."
      if ($.flag_misty_stop == 0) {
        //"Stop the vehicle next to Misty and allow her to enter it."
        if ($.player.locateInCarChar2D($.girl1_lm1, 20.0, 20.0, false /* FALSE */)) {
          //"Stop the vehicle next to Misty and allow her to enter it."
          Text.PrintHelp("LM1_7");
          $.flag_misty_stop = 1;
        }
      }
      //"Get a vehicle and get on with the mission!"
      //"Pick up Misty!"
      if (!($.player.isInAnyCar())) {
        //"Get a vehicle and get on with the mission!"
        if ($.flag_player_had_vehicle_message_lm1 == 0) {
          //"Get a vehicle and get on with the mission!"
          Text.PrintNow("IN_VEH2", 5000, 1);
          if ($.flag_blip_on_girl1_lm1 == 1) {
            $.radar_blip_ped1_lm1.remove();
            $.flag_blip_on_girl1_lm1 = 0;
          }
          $.flag_player_had_vehicle_message_lm1 = 1;
        }
      }
      else {
        $.car_lm1 = $.player.storeCarIsIn();
        //"Pick up Misty!"
        if ($.flag_player_had_vehicle_message_lm1 == 1) {
          //"Pick up Misty!"
          Text.PrintNow("EBAL_6", 5000, 1);
          if ($.flag_blip_on_girl1_lm1 == 0) {
            $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
            $.flag_blip_on_girl1_lm1 = 1;
          }
          $.flag_player_had_vehicle_message_lm1 = 0;
        }
      }
      //"Misty's dead!
      //"The Vehicles wrecked"
      //"Get a vehicle and get on with the mission!"
      //"Pick up Misty!"
      if ($.player.isInAnyCar()) {
        $.car_lm1 = $.player.storeCarIsIn();
        //"Misty's dead!
        //"The Vehicles wrecked"
        //"Get a vehicle and get on with the mission!"
        //"Pick up Misty!"
        if ($.player.locateInCarChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */)) {
          //"Misty's dead!
          //"The Vehicles wrecked"
          //"Get a vehicle and get on with the mission!"
          //"Pick up Misty!"
          if ($.player.isStopped()) {
            $.girl1_lm1.setObjEnterCarAsPassenger($.car_lm1);
            //"Misty's dead!
            //"The Vehicles wrecked"
            //"Get a vehicle and get on with the mission!"
            //"Pick up Misty!"
            while (!($.girl1_lm1.isInCar($.car_lm1)) || !($.player.isInCar($.car_lm1))) {
              await asyncWait(0);
              //"Misty's dead!
              if (Char.IsDead($.girl1_lm1)) {
                //"Misty's dead!
                Text.PrintNow("MISTY1", 5000, 1);
                // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
              }
              //"Misty's dead!
              //"The Vehicles wrecked"
              if (Car.IsDead($.car_lm1)) {
                //"Misty's dead!
                //"The Vehicles wrecked"
                if (Char.IsDead($.girl1_lm1)) {
                  //"Misty's dead!
                  Text.PrintNow("MISTY1", 5000, 1);
                  // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
                }
                else {
                  //"The Vehicles wrecked"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
                }
              }
              if ($.girl1_lm1.isInCar($.car_lm1)) {
                $.girl1_lm1.setCantBeDraggedOut(true /* TRUE */);
              }
              //"Get a vehicle and get on with the mission!"
              //"Pick up Misty!"
              if (!($.player.isInCar($.car_lm1))) {
                //"Get a vehicle and get on with the mission!"
                if ($.flag_player_had_vehicle_message_lm1 == 0) {
                  //"Get a vehicle and get on with the mission!"
                  Text.PrintNow("IN_VEH", 5000, 1);
                  if ($.flag_blip_on_girl1_lm1 == 1) {
                    $.radar_blip_ped1_lm1.remove();
                    $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
                    $.flag_blip_on_girl1_lm1 = 0;
                  }
                  $.flag_player_had_vehicle_message_lm1 = 1;
                }
              }
              else {
                //"Pick up Misty!"
                if ($.flag_player_had_vehicle_message_lm1 == 1) {
                  //"Pick up Misty!"
                  Text.PrintNow("EBAL_6", 5000, 1);
                  if ($.flag_blip_on_girl1_lm1 == 0) {
                    $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                    $.radar_blip_car1_lm1.remove();
                    $.flag_blip_on_girl1_lm1 = 1;
                  }
                  $.flag_player_had_vehicle_message_lm1 = 0;
                }
              }
            }
            $.radar_blip_ped1_lm1.remove();
            $.radar_blip_car1_lm1.remove();
            $.flag_blip_on_girl1_lm1 = 0;
            $.flag_girl_in_group_lm1 = 1;
          }
        }
      }
    }
    //"Misty's dead!
    //"The Vehicles wrecked"
    //Get into the car and get on with the mission"
    //"Hey I'm Misty!"
    if ($.flag_girl_in_group_lm1 == 1) {
      //"Misty's dead!
      if (Char.IsDead($.girl1_lm1)) {
        //"Misty's dead!
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      //"Misty's dead!
      //"The Vehicles wrecked"
      if (Car.IsDead($.car_lm1)) {
        //"Misty's dead!
        //"The Vehicles wrecked"
        if (Char.IsDead($.girl1_lm1)) {
          //"Misty's dead!
          Text.PrintNow("MISTY1", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
        else {
          //"The Vehicles wrecked"
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      //Get into the car and get on with the mission"
      if (!($.player.isInCar($.car_lm1))) {
        //Get into the car and get on with the mission"
        if ($.flag_player_had_car_message_lm1 == 0) {
          //Get into the car and get on with the mission"
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
          $.flag_player_had_car_message_lm1 = 1;
        }
      }
      //"Hey I'm Misty!"
      if ($.player.isInCar($.car_lm1)) {
        //"Hey I'm Misty!"
        if ($.girl1_lm1.isInCar($.car_lm1)) {
          //"Hey I'm Misty!"
          Text.PrintNow("LM1_9", 10000, 1);
          Audio.PlayMissionAudio();
          $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
          $.flag_girl1_in_car_lm1 = 1;
        }
        if ($.flag_player_had_car_message_lm1 == 1) {
          $.radar_blip_car1_lm1.remove();
          $.flag_player_had_car_message_lm1 = 0;
        }
      }
    }
  }
  $.radar_blip_ped1_lm1.remove();
  $.girl1_lm1.followPlayer($.player);
  //"Misty's dead!
  //"You have left Misty behind go and get her!"
  //PRINT_NOW ( LM1_2 ) 7000 1 //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
  //"The Vehicles wrecked"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"Misty's dead!
    //"You have left Misty behind go and get her!"
    //PRINT_NOW ( LM1_2 ) 7000 1 //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
    if (Char.IsDead($.girl1_lm1)) {
      //"Misty's dead!
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"You have left Misty behind go and get her!"
      if (!($.girl1_lm1.isInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
        //"You have left Misty behind go and get her!"
        Text.PrintNow("HEY4", 5000, 1);
        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
        $.flag_blip_on_girl1_lm1 = 1;
      }
      //PRINT_NOW ( LM1_2 ) 7000 1 //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
      if ($.player.locateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
        //PRINT_NOW ( LM1_2 ) 7000 1 //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
        $.girl1_lm1.followPlayer($.player);
        $.radar_blip_ped1_lm1.remove();
        $.flag_blip_on_girl1_lm1 = 0;
      }
    }
    //"Misty's dead!
    //"The Vehicles wrecked"
    if (Car.IsDead($.car_lm1)) {
      //"Misty's dead!
      //"The Vehicles wrecked"
      if (Char.IsDead($.girl1_lm1)) {
        //"Misty's dead!
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        //"The Vehicles wrecked"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Text.ClearThisPrint("LM1_9");
  //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
  Text.PrintNow("LM1_2", 7000, 1);
  $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);
  $.blob_flag = 1;
  //"Press and hold the ~h~L2 button to look left~w~ while in a vehicle."
  Text.PrintHelp("LOOK_A");
  // waiting for the player to get to luigi's
  timera = 0;
  //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
  //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
  //"Misty's dead!
  //"You have left Misty behind go and get her!"
  //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
  while (!($.girl1_lm1.isStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag)) || !($.player.isStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, false /* FALSE */))) {
    await asyncWait(0);
    //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
    //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
    if ($.flag_player_had_camera_message_8ball == 0) {
      $.controlmode = Pad.GetControllerMode();
      //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
      //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
      if (timera > 10000) {
        //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
        if ($.controlmode == 0) {
          //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
        //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
        if ($.controlmode == 0) {
          //"Press the ~h~directional button up~w~ and ~h~down~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
          Text.PrintHelp("CAM_B");
          $.flag_player_had_camera_message_8ball = 1;
        }
        //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
        if ($.controlmode == 0) {
          //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
        //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
        if ($.controlmode == 0) {
          //"Press the ~h~SELECT button~w~ to change ~h~camera ~w~modes when on foot or in a vehicle."
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
      }
    }
    //"Misty's dead!
    //"You have left Misty behind go and get her!"
    //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
    if (Char.IsDead($.girl1_lm1)) {
      //"Misty's dead!
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      //"You have left Misty behind go and get her!"
      if (!($.girl1_lm1.isInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
        //"You have left Misty behind go and get her!"
        Text.PrintNow("HEY4", 5000, 1);
        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
        $.radar_blip_coord1_lm1.remove();
        $.blob_flag = 0;
        $.flag_blip_on_girl1_lm1 = 1;
      }
      //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
      if ($.player.locateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
        $.girl1_lm1.followPlayer($.player);
        //"Hi take us to the Red Light District please, we'll be ever so 'grateful'!"
        Text.PrintNow("LM1_2", 7000, 1);
        $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);
        $.radar_blip_ped1_lm1.remove();
        $.blob_flag = 1;
        $.flag_blip_on_girl1_lm1 = 0;
      }
    }
  }
  $.radar_blip_coord1_lm1.remove();
  // *********************************MISTY CUT AT END****************************************
  $.girl1_lm1.leaveGroup();
  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  $.player.clearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  // This should get rid of any stuff for the cut-scene
  World.ClearArea(887.4, -417.3, 13.9, 10.0, true /* TRUE */);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  //"Misty's dead!
  if ($.girl1_lm1.isInAnyCar()) {
    $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
    $.car_lm1 = $.girl1_lm1.storeCarIsIn();
    $.girl1_lm1.setObjLeaveCar($.car_lm1);
    //"Misty's dead!
    while ($.girl1_lm1.isInAnyCar()) {
      await asyncWait(0);
      //"Misty's dead!
      if (Char.IsDead($.girl1_lm1)) {
        //"Misty's dead!
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  //"Misty's dead!
  // Misty walks to the top of the alleyway
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
    //"Misty's dead!
    if (Char.IsDead($.girl1_lm1)) {
      //"Misty's dead!
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.girl1_lm1.setObjGotoCoordOnFoot(900.17, -425.4);
  timerb = 0;
  //"Misty's dead!
  while (timerb < 1000) {
    await asyncWait(0);
    //"Misty's dead!
    if (Char.IsDead($.girl1_lm1)) {
      //"Misty's dead!
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  //"Misty's dead!
  if (Char.IsDead($.girl1_lm1)) {
    //"Misty's dead!
    Text.PrintNow("MISTY1", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.girl1_lm1.setCoordinates(898.9, -425.8, 13.9);
  $.girl1_lm1.setHeading(90.0);
  $.girl1_lm1.setObjGotoCoordOnFoot(887.1, -425.22);
  Hud.SwitchWidescreen(true /* ON */);
  Camera.SetFixedPosition(882.6, -425.6, 14.4, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(890.2, -421.1, 15.0, 2 /* jump_cut */);
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", 1500, 5000, 1);
  $.player.addScore(1500);
  //plays the mission complete tune
  Audio.PlayMissionPassedTune(1);
  timerb = 0;
  while (timerb < 5000) {
    await asyncWait(0);
  }
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  await asyncWait(0);
  Camera.SetBehindPlayer();
  await asyncWait(0);
  Hud.SwitchWidescreen(false /* OFF */);
  await asyncWait(0);
  Camera.RestoreJumpcut();
  await asyncWait(750);
  Camera.DoFade(250, 1 /* FADE_IN */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  // Mission 8ball failed
  // SCM GOTO → mission_eightball_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_eightball_passed"); // fallback: would break linear control flow
}

async function mission_eightball_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  $.flag_eightball_mission_launched = 0;
  // New bridge restart
  // Player hideout
  if ($.flag_reached_hideout == 0) {
    // New bridge restart
    Restart.CriticalMission(811.90, -939.95, 35.8, 180.0);
  }
  else {
    // Player hideout
    Restart.CriticalMission(883.5, -308.2, 7.6, 90.0);
  }
  //	marks models as no longer needed so that they can be deleted before the player is teleported
  Mission.Finish();
  while (!($.player.isPlaying())) {
    await asyncWait(0);
  }
  // mission eightball passed
  return;
}

async function mission_eightball_passed() {
  Restart.CancelOverride();
  $.flag_eightball_mission_passed = 1;
  Stat.RegisterMissionPassed("LM1");
  Stat.PlayerMadeProgress(1);
  $.flag_luigi_mission1_passed = 1;
  $.player.clearWantedLevel();
  // New blip down alleyway
  $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
  // START_NEW_SCRIPT luigi_mission2_loop
  // START_NEW_SCRIPT blob_help_loop
  // START_NEW_SCRIPT luigi_message
  return;
  }
}

async function mission_cleanup_eightball() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_eightball_mission = 0;
  World.RemoveParticleEffectsInArea(804.02, -948.03, 30.0, 765.15, -924.32, 50.0);
  $.fire_sound_8ball.remove();
  Camera.SetFadingColor(0, 0, 0);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  Streaming.MarkModelAsNoLongerNeeded(car`KURUMA`);
  $.radar_blip_coord1_eightball.remove();
  $.radar_blip_coord2_eightball.remove();
  $.radar_blip_car1_eightball.remove();
  $.eightball.delete();
  $.girl1_lm1.delete();
  $.radar_blip_coord1_lm1.remove();
  $.radar_blip_ped1_lm1.remove();
  $.radar_blip_car1_lm1.remove();
  Hud.FlashObject(-1);
  if (!(Car.IsDead($.cop_car1_8ball))) {
    $.cop_car1_8ball.markAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.cop_car2_8ball))) {
    $.cop_car2_8ball.markAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.girl1_lm1))) {
    $.girl1_lm1.setCantBeDraggedOut(false /* FALSE */);
  }
  Mission.Finish();
  return;
}

async function car_gen_start_8ball() {
  $.gen_car44.switch(101);
  $.gen_car45.switch(101);
  $.gen_car46.switch(101);
  $.gen_car47.switch(101);
  $.gen_car48.switch(101);
  // switches on the car generators from the fuzz ball
  $.gen_car49.switch(101);
  $.gen_car28.switch(101);
  $.gen_car29.switch(101);
  $.gen_car1.switch(101);
  $.gen_car2.switch(101);
  $.gen_car3.switch(101);
  $.gen_car4.switch(101);
  $.gen_car5.switch(101);
  $.gen_car6.switch(101);
  $.gen_car6.switch(101);
  $.gen_car9.switch(101);
  $.gen_car10.switch(101);
  $.gen_car11.switch(101);
  $.gen_car12.switch(101);
  $.gen_car13.switch(101);
  $.gen_car15.switch(101);
  $.gen_car16.switch(101);
  $.gen_car17.switch(101);
  $.gen_car18.switch(101);
  $.gen_car57.switch(101);
  $.gen_car58.switch(101);
  $.gen_car19.switch(101);
  $.gen_car20.switch(101);
  $.gen_car21.switch(101);
  $.gen_car22.switch(101);
  $.gen_car24.switch(101);
  $.gen_car25.switch(101);
  $.gen_car59.switch(101);
  $.gen_car23.switch(101);
  $.gen_car30.switch(101);
  $.gen_car31.switch(101);
  $.gen_car53.switch(101);
  $.gen_car8.switch(101);
  $.gen_car32.switch(101);
  $.gen_car34.switch(101);
  $.gen_car36.switch(101);
  $.gen_car37.switch(101);
  $.gen_car38.switch(101);
  $.gen_car40.switch(101);
  $.gen_car41.switch(101);
  $.gen_car42.switch(101);
  $.gen_car43.switch(101);
  $.gen_car54.switch(101);
  $.gen_car55.switch(101);
  $.gen_car56.switch(101);
  $.gen_car33.switch(101);
  $.gen_car51.switch(101);
  $.gen_car52.switch(101);
  $.gen_car64.switch(101);
  $.com_car1.switch(101);
  $.com_car2.switch(101);
  $.com_car25.switch(101);
  $.com_car26.switch(101);
  $.com_car3.switch(101);
  $.com_car4.switch(101);
  $.com_car5.switch(101);
  $.com_car6.switch(101);
  $.com_car7.switch(101);
  $.com_car8.switch(101);
  $.com_car9.switch(101);
  $.com_car10.switch(101);
  $.com_car11.switch(101);
  $.com_car12.switch(101);
  $.com_car20.switch(101);
  $.com_car21.switch(101);
  $.com_car27.switch(101);
  $.com_car28.switch(101);
  $.com_car29.switch(101);
  $.com_car30.switch(101);
  $.com_car31.switch(101);
  $.com_car32.switch(101);
  $.com_car33.switch(101);
  $.com_car34.switch(101);
  $.com_car35.switch(101);
  $.com_car36.switch(101);
  $.com_car37.switch(101);
  $.com_car38.switch(101);
  $.com_car39.switch(101);
  $.com_car40.switch(101);
  $.gen_car60.switch(0);
  $.gen_car61.switch(0);
  $.gen_car62.switch(0);
  $.com_car41.switch(101);
  $.com_car42.switch(101);
  $.com_car43.switch(101);
  $.com_car44.switch(101);
  $.com_car45.switch(101);
  $.gen_car35.switch(101);
  $.com_car15.switch(101);
  $.com_car16.switch(101);
  $.com_car17.switch(101);
  $.com_car19.switch(101);
  $.com_car24.switch(101);
  $.com_car13.switch(101);
  $.com_car23.switch(0);
  $.com_car14.switch(101);
  $.com_car22.switch(101);
  $.phil_car.switch(101);
  $.com_car46.switch(101);
  $.com_car47.switch(101);
  $.com_car48.switch(101);
  $.com_car49.switch(101);
  $.special_tank.switch(0);
  $.sub_car1.switch(101);
  $.sub_car2.switch(101);
  $.sub_car3.switch(101);
  $.sub_car4.switch(101);
  $.sub_car5.switch(101);
  $.sub_car6.switch(101);
  $.sub_car7.switch(101);
  $.sub_car25.switch(101);
  $.gen_car63.switch(0);
  $.sub_car40.switch(101);
  $.sub_car41.switch(101);
  $.sub_car42.switch(101);
  $.sub_car43.switch(101);
  $.sub_car44.switch(101);
  $.sub_car45.switch(101);
  $.sub_car46.switch(101);
  $.sub_car8.switch(101);
  $.sub_car9.switch(101);
  $.sub_car10.switch(101);
  $.sub_car11.switch(101);
  $.sub_car12.switch(101);
  $.sub_car13.switch(101);
  $.sub_car14.switch(101);
  $.sub_car15.switch(101);
  $.sub_car16.switch(101);
  $.sub_car19.switch(101);
  $.sub_car20.switch(101);
  $.sub_car17.switch(101);
  $.sub_car18.switch(101);
  $.sub_car21.switch(101);
  $.sub_car22.switch(101);
  $.sub_car23.switch(101);
  $.sub_car24.switch(101);
  $.sub_car30.switch(101);
  $.sub_car31.switch(101);
  $.rc_van1.switch(101);
  $.rc_van2.switch(101);
  $.rc_van3.switch(101);
  $.rc_van4.switch(101);
  return;
}

export async function _8ball() {
  // *****************************************************************************************
  // **************************************8Ball Mission**************************************
  // **************************************Luigi's Girls**************************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_eightball
  await mission_start_eightball();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_eightball_failed
    await mission_eightball_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_eightball
  await mission_cleanup_eightball();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT radar_blip_car1_eightball
  // VAR_INT radar_blip_coord1_eightball
  // VAR_INT radar_blip_coord2_eightball
  // VAR_INT eightball
  //Any car the player might get into
  // VAR_INT car_eightball
  //Car that I create
  // VAR_INT van_8ball
  // VAR_INT flag_blip_on_eightball
  // VAR_INT flag_player_got_cops_message_eightball
  // VAR_INT flag_player_got_car_message1_eightball
  // VAR_INT radar_blip_ped1_eightball
  // VAR_INT flag_player_in_area
  // Luigi variables for missions
  // VAR_INT flag_eightball_in_area
  // VAR_INT radar_blip_coord1_lm1
  // VAR_INT radar_blip_ped1_lm1
  // VAR_INT radar_blip_ped2_lm1
  // VAR_INT girl1_lm1
  // VAR_INT car_lm1
  // VAR_INT flag_player_had_car_message_lm1
  // VAR_INT flag_player_not_in_car_message_lm1
  // VAR_INT no_of_passengers_car_lm1
  // VAR_INT flag_girl1_in_car_lm1
  // VAR_INT passenger_count_lm1
  // VAR_INT total_space_in_car_lm1
  // VAR_INT flag_blip_on_girl1_lm1
  // VAR_INT flag_coord_blip_on
  // VAR_INT flag_luigi_coord1_blip_created
  // VAR_INT flag_luigi_ped1_blip_created
  // VAR_INT flag_girl1_in_group_lm1
  // VAR_INT flag_player_had_vehicle_message_lm1
  // VAR_INT flag_player_in_area_lm1
  // VAR_INT flag_eightball_in_area_lm1
  // VAR_INT flag_help_8ball1
  // car variables for restart
  // VAR_INT flag_help_8ball2
  // VAR_FLOAT car_8ball_x
  // VAR_FLOAT car_8ball_y
  // VAR_FLOAT car_8ball_z
  // VAR_FLOAT car_8ball_heading
  // VAR_INT flag_car_message_8ball
  // VAR_INT cop_car1_8ball
  // VAR_INT cop_car2_8ball
  // VAR_INT cop1_8ball
  // VAR_INT cop2_8ball
  // Brake message
  // VAR_INT flag_brake_message
  // Handbrake message
  // VAR_INT flag_hbrake_message
  // Look right message
  // VAR_INT flag_look2_8ball
  // Look behind message
  // VAR_INT flag_look3_8ball
  // Misty message to tell player to stop and let her in the car
  // VAR_INT flag_misty_stop
  // Tells player how to change camera modes
  // VAR_INT flag_player_had_camera_message_8ball
  // VAR_INT car_colour1_8ball
  // VAR_INT car_colour2_8ball
  // VAR_INT flag_girl_in_group_lm1
  // VAR_INT radar_blip_car1_lm1
  // Stops the radar flashing
  // VAR_INT flag_timer_stopped_flashing_8ball
  // ***************************************Mission Start*************************************
  // VAR_INT fire_sound_8ball
}
