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
  Streaming.LoadScene(807.0, -937.0, 36.6);
  await asyncWait(0);
  $.flag_blip_on_eightball = 0;
  $.flag_player_got_cops_message_eightball = 0;
  $.flag_player_got_car_message1_eightball = 0;
  $.flag_player_in_area = 0;
  $.flag_eightball_in_area = 0;
  $.flag_player_had_car_message_lm1 = 0;
  $.flag_player_not_in_car_message_lm1 = 0;
  $.no_of_passengers_car_lm1 = 0;
  $.flag_girl1_in_car_lm1 = 0;
  $.passenger_count_lm1 = 0;
  $.total_space_in_car_lm1 = 0;
  $.flag_blip_on_girl1_lm1 = 0;
  $.flag_coord_blip_on = 0;
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
    $.damagea = Object.CreateNoOffset(bridgefuka, 715.746, -937.908, 40.194);
    $.damagea.DontRemove();
    $.damageb = Object.CreateNoOffset(bridgefukb, 787.835, -939.24, 38.971);
    $.damageb.DontRemove();
    $.flag_bridge_created_8ball = 1;
  }
  $.player.SetHeading(180.0);
  $.car_eightball = Car.Create(104 /* CAR_KURUMA */, 812.0131, -945.5528, 35.7889);
  $.car_eightball.ChangeColor(58, 1);
  $.car_eightball.SetHeading(262.3871);
  $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 811.90, -942.47, -100.0);
  $.eightball.SetAnimGroup(9 /* ANIM_GANG2_PED */);
  $.eightball.ClearThreatSearch();
  $.eightball.TurnToFaceCoord(811.90, -939.95, 35.8);
  $.eightball.LookAtPlayerAlways($.player);
  Restart.OverrideNext(811.90, -939.95, 35.8, 180.0);
  $.playersdoor.SetHeading(0.0);
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Fx.AddParticleEffect(4, 791.661, -936.916, 38.313, 0 /* FALSE */);
  Fx.AddParticleEffect(4, 788.337, -938.467, 38.073, 0 /* FALSE */);
  Fx.AddParticleEffect(4, 786.493, -942.398, 39.8, 0 /* FALSE */);
  Fx.AddParticleEffect(10, 783.572, -938.549, 38.448, 0 /* FALSE */);
  Fx.AddParticleEffect(10, 790.537, -935.67, 38.005, 0 /* FALSE */);
  Fx.AddParticleEffect(10, 789.295, -938.882, 38.127, 0 /* FALSE */);
  $.fire_sound_8ball.Remove();
  $.fire_sound_8ball = Sound.AddContinuous(790.537, -935.67, 38.005, 102 /* SOUND_PRETEND_FIRE_LOOP */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Camera.SetFixedPosition(785.0, -936.77, 39.75, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.eightball, 15 /* fixed */, 2 /* jump_cut */);
  Audio.LoadMissionAudio(LIB_A1);
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Camera.SetFadingColor(0, 0, 0);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  await asyncWait(2000);
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Camera.SetFixedPosition(804.5746, -933.048, 39.9828, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(805.1921, -933.7454, 39.6193, 2 /* JUMP_CUT */);
  Text.PrintBig("EBAL", 15000, 2);
  Audio.PlayMissionAudio();
  Text.PrintNow("EBAL_A", 5000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Text.ClearThisPrint("EBAL_A");
  Audio.LoadMissionAudio(LIB_A2);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("EBAL_A1", 5000, 1);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_A1");
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.eightball.StopLooking();
  $.eightball.SetObjEnterCarAsPassenger($.car_eightball);
  while (!($.eightball.IsInCar($.car_eightball))) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_A1");
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
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
  $.eightball.SetCantBeDraggedOut(1 /* TRUE */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
  // SCM GOSUB car_gen_start_8ball
  await car_gen_start_8ball();
  // fallback if label was not emitted as async function: no-op continues linearly
  await asyncWait(500);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_A1");
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.PrintHelp("EBAL_1");
  }
  if ($.controlmode == 1) {
    Text.PrintHelp("EBAL_1");
  }
  if ($.controlmode == 2) {
    Text.PrintHelp("EBAL_1B");
  }
  if ($.controlmode == 3) {
    Text.PrintHelp("EBAL_1");
  }
  timerb = 0;
  await asyncWait(3000);
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  while (!($.player.IsInCar($.car_eightball)) || !($.eightball.IsInCar($.car_eightball))) {
    await asyncWait(0);
    if (timerb < 120000) {
      $.player.ClearWantedLevel();
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.cop_car1_8ball = Car.Create(109 /* car_police */, 1083.2, -945.0, 13.8);
  $.cop1_8ball = Char.CreateInsideCar($.cop_car1_8ball, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
  $.cop1_8ball.ClearThreatSearch();
  $.cop_car1_8ball.SetHeading(90.0);
  $.cop_car1_8ball.SwitchSiren(1 /* ON */);
  $.cop_car1_8ball.SetDrivingStyle(2);
  $.cop_car1_8ball.SetCruiseSpeed(20.0);
  $.cop_car1_8ball.GotoCoordinates(713.9, -916.7, 42.0);
  $.cop_car2_8ball = Car.Create(109 /* car_police */, 1074.1, -946.7, 13.8);
  $.cop2_8ball = Char.CreateInsideCar($.cop_car2_8ball, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
  $.cop2_8ball.ClearThreatSearch();
  $.cop_car2_8ball.SetHeading(90.0);
  $.cop_car2_8ball.SwitchSiren(1 /* ON */);
  $.cop_car2_8ball.SetDrivingStyle(2);
  $.cop_car2_8ball.SetCruiseSpeed(20.0);
  $.cop_car2_8ball.GotoCoordinates(718.7, -922.2, 42.0);
  $.radar_blip_car1_eightball.Remove();
  await asyncWait(500);
  if (timerb < 120000) {
    $.player.ClearWantedLevel();
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.PrintHelp("HELP4_A");
  }
  if ($.controlmode == 1) {
    Text.PrintHelp("HELP4_A");
  }
  if ($.controlmode == 2) {
    Text.PrintHelp("HELP4_A");
  }
  if ($.controlmode == 3) {
    Text.PrintHelp("HELP4_D");
  }
  $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
  timera = 0;
  $.blob_flag = 1;
  if (timerb < 120000) {
    $.player.ClearWantedLevel();
  }
  Audio.LoadMissionAudio(LIB_A);
  timera = 0;
  while (timera < 10000) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.car_eightball))) {
        $.blob_flag = 0;
        if ($.flag_car_message_8ball == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord1_eightball.Remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.Remove();
          $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    if ($.player.LocateInCar2D(875.0, -309.0, 20.0, 20.0, 0 /* FALSE */) && $.player.IsInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
      Text.PrintHelp("HELP1");
      $.flag_help_8ball1 = 1;
    }
  }
  Text.PrintHelp("EBAL_3");
  Hud.FlashObject(8 /* HUD_FLASH_RADAR */);
  timera = 0;
  while (!($.player.IsStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, $.blob_flag)) || !($.eightball.IsStoppedInAreaInCar3D(879.4, -303.4, 7.3, 870.1, -311.7, 10.0, 0 /* FALSE */)) || !($.player.IsSittingInCar($.car_eightball)) || !($.eightball.IsSittingInCar($.car_eightball)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (timerb < 120000) {
      $.player.ClearWantedLevel();
    }
    if ($.flag_timer_stopped_flashing_8ball == 0) {
      if (timera > 4000) {
        Hud.FlashObject(-1);
        $.flag_timer_stopped_flashing_8ball = 1;
      }
    }
    if ($.flag_brake_message == 0) {
      if (timera >= 10000) {
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 0) {
          Text.PrintHelp("HELP5_A");
        }
        if ($.controlmode == 1) {
          Text.PrintHelp("HELP5_A");
        }
        if ($.controlmode == 2) {
          Text.PrintHelp("HELP5_A");
        }
        if ($.controlmode == 3) {
          Text.PrintHelp("HELP5_D");
        }
        $.flag_brake_message = 1;
        timera = 0;
      }
    }
    if (timera > 10000) {
      if ($.flag_hbrake_message == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 0) {
          Text.PrintHelp("HELP6_A");
        }
        if ($.controlmode == 1) {
          Text.PrintHelp("HELP6_A");
        }
        if ($.controlmode == 2) {
          Text.PrintHelp("HELP6_C");
        }
        if ($.controlmode == 3) {
          Text.PrintHelp("HELP6_D");
        }
        $.flag_hbrake_message = 1;
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.car_eightball))) {
        $.blob_flag = 0;
        if ($.flag_car_message_8ball == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord1_eightball.Remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.Remove();
          $.radar_blip_coord1_eightball = Blip.AddForCoord(875.0, -309.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    if ($.player.LocateInCar2D(875.0, -309.0, 20.0, 20.0, 0 /* FALSE */) && $.player.IsInCar($.car_eightball) && $.flag_help_8ball1 == 0) {
      Text.PrintHelp("HELP1");
      $.flag_help_8ball1 = 1;
    }
  }
  Text.ClearHelp();
  $.radar_blip_coord1_eightball.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.ClearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  if (!(Car.IsDead($.cop_car1_8ball))) {
    $.cop_car1_8ball.Delete();
  }
  if (!(Car.IsDead($.cop_car2_8ball))) {
    $.cop_car2_8ball.Delete();
  }
  World.ClearArea(886.8, -310.1, -100.0, 2.0, 1 /* TRUE */);
  [$.car_8ball_x, $.car_8ball_y, $.car_8ball_z] = $.car_eightball.GetCoordinates();
  $.car_8ball_heading = $.car_eightball.GetHeading();
  [$.car_colour1_8ball, $.car_colour2_8ball] = $.car_eightball.GetColors();
  while (!($.playersdoor.Rotate(210.0, 10.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  World.ClearArea(889.7, -308.2, 8.6, 3.0, 1 /* TRUE */);
  $.script_controlled_player = $.player.GetChar();
  $.script_controlled_player.ClearThreatSearch();
  $.eightball.SetObjLeaveCar($.car_eightball);
  while ($.eightball.IsInCar($.car_eightball)) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("EBAL_B", 7000, 1);
  $.eightball.SetObjRunToCoord(892.7, -308.6);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  await asyncWait(1000);
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Audio.HasMissionAudioFinished()) {
    Text.ClearThisPrint("EBAL_B");
  }
  $.script_controlled_player.SetObjLeaveCar($.car_eightball);
  World.ClearArea(868.63, -311.7, 8.3, 1.0, 1 /* TRUE */);
  if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, 0 /* FALSE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */)) {
    Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
  }
  else {
    Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
  }
  while ($.script_controlled_player.IsInCar($.car_eightball)) {
    await asyncWait(0);
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_B");
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.script_controlled_player.SetObjRunToCoord(892.4, -308.5);
  timerb = 0;
  while (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if ($.flag_player_in_area == 0) {
      if ($.script_controlled_player.LocateOnFoot2D(892.4, -308.5, 0.5, 0.5, 0 /* FALSE */)) {
        $.script_controlled_player.SetObjRunToCoord(892.4, -305.6);
        $.flag_player_in_area = 1;
      }
    }
    if ($.flag_eightball_in_area == 0) {
      if ($.eightball.LocateOnFoot2D(892.7, -308.6, 0.5, 0.5, 0 /* FALSE */)) {
        $.eightball.SetObjRunToCoord(894.2, -304.3);
        $.flag_eightball_in_area = 1;
      }
    }
    if ($.flag_player_in_area == 1) {
      if ($.script_controlled_player.LocateOnFoot2D(892.4, -305.6, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_player_in_area = 2;
      }
    }
    if ($.flag_eightball_in_area == 1) {
      if ($.eightball.LocateOnFoot2D(894.2, -304.3, 0.5, 0.5, 0 /* FALSE */)) {
        $.flag_eightball_in_area = 2;
      }
    }
    if (timerb >= 10000) {
      if (!($.flag_player_in_area == 2) || !($.flag_eightball_in_area == 2)) {
        $.player.SetCoordinates(892.4, -305.6, 7.7);
        $.script_controlled_player.SetIdle();
        $.eightball.SetCoordinates(894.2, -304.3, 7.7);
        $.eightball.SetIdle();
        // SCM GOTO → mission_bloke_stuck_8ball (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck_8ball"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_bloke_stuck_8ball() {
  Camera.SetFixedPosition(886.8, -310.1, 9.9, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(887.7, -309.8, 9.8, 2 /* JUMP_CUT */);
  $.eightball.SetIdle();
  $.script_controlled_player.SetObjNoObj();
  Text.PrintHelp("S_PROMP");
  await asyncWait(4000);
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  Text.PrintHelp("S_PROM2");
  Camera.PointAtPoint(887.8, -310.5, 9.7, 1 /* interpolation */);
  $.player.SetCoordinates(895.9, -311.4, 7.7);
  $.eightball.SetCoordinates(884.3, -309.2, 7.6);
  if (!(Char.IsDead($.eightball))) {
    $.eightball.Undress(eight2);
    while (!(Streaming.HasModelLoaded(ped`SPECIAL1`))) {
      await asyncWait(0);
      if (Car.IsDead($.car_eightball)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!(Char.IsDead($.eightball))) {
      $.eightball.Dress();
    }
  }
  if (!(Char.IsDead($.script_controlled_player))) {
    $.script_controlled_player.Undress($.player);
    while (!(Streaming.HasModelLoaded(ped`PLAYER`))) {
      await asyncWait(0);
      if (Car.IsDead($.car_eightball)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!(Char.IsDead($.script_controlled_player))) {
      $.script_controlled_player.Dress();
    }
  }
  await asyncWait(3000);
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.player.SetCoordinates(883.5, -308.2, 7.6);
  Weather.Release();
  $.eightball.SetObjEnterCarAsPassenger($.car_eightball);
  await asyncWait(1500);
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.script_controlled_player.SetObjEnterCarAsDriver($.car_eightball);
  World.ClearArea(868.63, -311.7, 8.3, 1.0, 1 /* TRUE */);
  if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, 0 /* FALSE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */)) {
    Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
  }
  else {
    Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
  }
  Text.ClearHelp();
  while (!($.player.IsInCar($.car_eightball)) || !($.eightball.IsInCar($.car_eightball))) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  while (!($.playersdoor.Rotate(0.0, 10.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.blob_flag = 1;
}

async function hideout_reached() {
  if ($.flag_reached_hideout == 1) {
    Hud.SwitchWidescreen(1 /* ON */);
    $.player.SetControl(0 /* OFF */);
    Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
    $.player.SetHeading(90.0);
    World.ClearArea(868.63, -311.7, 8.3, 1.0, 1 /* TRUE */);
    if (World.IsAreaOccupied(870.4, -309.9, 6.0, 865.2, -314.7, 12.0, 0 /* FALSE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */)) {
      Camera.SetFixedPosition(848.265, -295.26, 19.136, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(849.11, -295.79, 19.18, 2 /* jump_cut */);
    }
    else {
      Camera.SetFixedPosition(868.63, -311.7, 8.3, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(869.59, -311.53, 8.53, 2 /* jump_cut */);
    }
    $.playersdoor.SetHeading(0.0);
    Streaming.LoadSpecialCharacter(1, eight2);
    Streaming.RequestModel(car`KURUMA`);
    Streaming.LoadAllModelsNow();
    $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 884.3, -309.2, 7.6);
    $.eightball.SetAnimGroup(9 /* ANIM_GANG2_PED */);
    $.eightball.SetHeading(90.0);
    $.eightball.ClearThreatSearch();
    $.car_eightball = Car.Create(104 /* CAR_KURUMA */, $.car_8ball_x, $.car_8ball_y, $.car_8ball_z);
    $.car_eightball.SetHeading($.car_8ball_heading);
    $.car_eightball.ChangeColor($.car_colour1_8ball, $.car_colour2_8ball);
    Weather.Release();
    $.script_controlled_player.SetObjEnterCarAsDriver($.car_eightball);
    $.eightball.SetObjEnterCarAsPassenger($.car_eightball);
    while (!($.player.IsInCar($.car_eightball)) || !($.eightball.IsInCar($.car_eightball))) {
      await asyncWait(0);
      if (Car.IsDead($.car_eightball)) {
        if (Char.IsDead($.eightball)) {
          Text.PrintNow("EBAL_4", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
        else {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      else {
        if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    $.eightball.SetCantBeDraggedOut(1 /* TRUE */);
    Camera.RestoreJumpcut();
    Camera.SetInFrontOfPlayer();
    Hud.SwitchWidescreen(0 /* OFF */);
    $.player.SetControl(1 /* ON */);
    Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  }
  if ($.flag_reached_hideout == 0) {
    World.RemoveParticleEffectsInArea(804.02, -948.03, 30.0, 765.15, -924.32, 50.0);
    $.fire_sound_8ball.Remove();
    $.damagea.Delete();
    $.damageb.Delete();
    World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, LOD_land014, indhelix_barrier);
    World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, indhelix_barrier, 1 /* TRUE */);
  }
  $.flag_reached_hideout = 1;
  Restart.OverrideNext(883.5, -308.2, 7.6, 90.0);
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
  Audio.LoadMissionAudio(LIB_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.car_eightball))) {
        $.blob_flag = 0;
        if ($.flag_car_message_8ball == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.Remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.Remove();
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("EBAL_D", 5000, 1);
  await asyncWait(2000);
  if (Car.IsDead($.car_eightball)) {
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  else {
    if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
      Text.PrintNow("UPSIDE", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInCar($.car_eightball))) {
      $.blob_flag = 0;
      if ($.flag_car_message_8ball == 0) {
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_coord2_eightball.Remove();
        $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
        $.flag_car_message_8ball = 1;
      }
    }
    else {
      $.blob_flag = 1;
      if ($.flag_car_message_8ball == 1) {
        $.radar_blip_car1_eightball.Remove();
        $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
        $.flag_car_message_8ball = 0;
      }
    }
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  Text.PrintNow("EBAL_D1", 7000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.car_eightball))) {
        $.blob_flag = 0;
        if ($.flag_car_message_8ball == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.Remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.Remove();
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("EBAL_D");
  Text.ClearThisPrint("EBAL_D1");
  Audio.LoadMissionAudio(LIB_C);
  while (!($.player.IsStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag)) || !($.eightball.IsStoppedInAreaInCar3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, 0 /* FALSE */)) || !($.player.IsInCar($.car_eightball)) || !($.eightball.IsInCar($.car_eightball)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.car_eightball))) {
        $.blob_flag = 0;
        if ($.flag_car_message_8ball == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_coord2_eightball.Remove();
          $.radar_blip_car1_eightball = Blip.AddForCar($.car_eightball);
          $.flag_car_message_8ball = 1;
        }
      }
      else {
        $.blob_flag = 1;
        if ($.flag_car_message_8ball == 1) {
          $.radar_blip_car1_eightball.Remove();
          $.radar_blip_coord2_eightball = Blip.AddForCoord(906.2, -426.0, -100.0);
          $.flag_car_message_8ball = 0;
        }
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if ($.player.LocateInCar2D(902.8, -425.6, 15.0, 15.0, 0 /* FALSE */) && $.player.IsInCar($.car_eightball) && $.flag_help_8ball2 == 0) {
      Text.PrintHelp("HELP1");
      $.flag_help_8ball2 = 1;
    }
  }
  Text.ClearHelp();
  $.radar_blip_coord2_eightball.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.ClearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  World.ClearArea(887.4, -417.3, 13.9, 10.0, 1 /* TRUE */);
  $.script_controlled_player = $.player.GetChar();
  $.script_controlled_player.ClearThreatSearch();
  $.script_controlled_player.SetObjLeaveCar($.car_eightball);
  $.eightball.SetObjLeaveCar($.car_eightball);
  Audio.PlayMissionAudio();
  Text.PrintNow("EBAL_G", 7000, 1);
  while ($.script_controlled_player.IsInCar($.car_eightball)) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_G");
    }
  }
  if (Char.IsDead($.eightball)) {
    Text.PrintNow("EBAL_4", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  while ($.eightball.IsInCar($.car_eightball)) {
    await asyncWait(0);
    if (Car.IsDead($.car_eightball)) {
      if (Char.IsDead($.eightball)) {
        Text.PrintNow("EBAL_4", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_eightball.IsUpsidedown() && $.car_eightball.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if (Audio.HasMissionAudioFinished()) {
      Text.ClearThisPrint("EBAL_G");
    }
  }
  $.car_eightball.MarkAsNoLongerNeeded();
  $.script_controlled_player.SetObjGotoCoordOnFoot(897.1, -426.3);
  $.eightball.SetObjGotoCoordOnFoot(897.3, -424.6);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  Text.ClearThisPrint("EBAL_G");
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.eightball.SetCantBeDraggedOut(0 /* FALSE */);
  Text.ClearHelp();
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Char.IsDead($.eightball)) {
      Text.PrintNow("EBAL_4", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
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
    $.eightball.SetObjWaitOnFoot();
  }
  $.script_controlled_player.SetObjWaitOnFoot();
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`)) || !(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
  }
  $.eightball.Delete();
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 0 /* FALSE */);
  Cutscene.Load(l1_lg);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_micky.SetAnim($.micky);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.SetAnim(eight2);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_luigi.SetAnim($.luigi);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj02`);
  $.cs_mickyhead.SetAnim($.micky);
  $.cs_eighthead = CutsceneHead.Create($.cs_eight, hier`cutobj03`);
  $.cs_eighthead.SetAnim(eight);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj04`);
  $.cs_luigihead.SetAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj05`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.SetAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(896.6, -426.2, 13.9);
  $.player.SetHeading(270.0);
  TIMERA = 0;
  while (TIMERA < 3500) {
    await asyncWait(0);
  }
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.ClearArea(887.4, -417.3, 13.9, 10.0, 1 /* TRUE */);
  World.ClearArea(892.8, -425.5, 13.9, 3.0, 1 /* TRUE */);
  World.ClearArea(896.3, -425.6, 13.8, 3.0, 1 /* TRUE */);
  World.ClearArea(899.7, -425.7, 14.0, 0.5, 1 /* TRUE */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  $.player.SetVisible(0 /* OFF */);
  while ($.cs_time < 11165) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_H", 10000, 1);
  while ($.cs_time < 13416) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("EBAL_H");
  while ($.cs_time < 30834) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_J", 10000, 1);
  while ($.cs_time < 33186) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_K", 10000, 1);
  while ($.cs_time < 35235) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_L", 10000, 1);
  while ($.cs_time < 41551) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_M", 10000, 1);
  while ($.cs_time < 45634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("EBAL_N", 10000, 1);
  while ($.cs_time < 47560) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
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
  Streaming.Switch(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(1 /* ON */);
  Streaming.LoadScene(920.3, -425.4, 15.0);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 1 /* TRUE */);
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
  $.player.SetControl(1 /* ON */);
  World.SetPedDensityMultiplier(1.0);
  Streaming.LoadSpecialCharacter(2, $.misty);
  Text.PrintNow("EBAL_5", 5000, 1);
  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  $.girl1_lm1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1144.6, -592.8, 13.9);
  $.girl1_lm1.ClearThreatSearch();
  $.girl1_lm1.SetHeading(90.0);
  $.girl1_lm1.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
  $.flag_blip_on_girl1_lm1 = 1;
  Audio.LoadMissionAudio(LIB_D);
  while (!($.player.IsInAnyCar()) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      $.car_lm1 = $.player.StoreCarIsIn();
    }
  }
  $.controlmode = Pad.GetControllerMode();
  if ($.controlmode == 0) {
    Text.ClearHelp();
    Text.PrintHelp("RADIO_A");
  }
  if ($.controlmode == 1) {
    Text.ClearHelp();
    Text.PrintHelp("RADIO_B");
  }
  if ($.controlmode == 2) {
    Text.ClearHelp();
    Text.PrintHelp("RADIO_C");
  }
  if ($.controlmode == 3) {
    Text.ClearHelp();
    Text.PrintHelp("RADIO_D");
  }
  Text.PrintNow("EBAL_6", 5000, 1);
  while ($.flag_girl1_in_car_lm1 == 0) {
    await asyncWait(0);
    if ($.flag_girl_in_group_lm1 == 0) {
      if (Char.IsDead($.girl1_lm1)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if ($.flag_misty_stop == 0) {
        if ($.player.LocateInCarChar2D($.girl1_lm1, 20.0, 20.0, 0 /* FALSE */)) {
          Text.PrintHelp("LM1_7");
          $.flag_misty_stop = 1;
        }
      }
      if (!($.player.IsInAnyCar())) {
        if ($.flag_player_had_vehicle_message_lm1 == 0) {
          Text.PrintNow("IN_VEH2", 5000, 1);
          if ($.flag_blip_on_girl1_lm1 == 1) {
            $.radar_blip_ped1_lm1.Remove();
            $.flag_blip_on_girl1_lm1 = 0;
          }
          $.flag_player_had_vehicle_message_lm1 = 1;
        }
      }
      else {
        $.car_lm1 = $.player.StoreCarIsIn();
        if ($.flag_player_had_vehicle_message_lm1 == 1) {
          Text.PrintNow("EBAL_6", 5000, 1);
          if ($.flag_blip_on_girl1_lm1 == 0) {
            $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
            $.flag_blip_on_girl1_lm1 = 1;
          }
          $.flag_player_had_vehicle_message_lm1 = 0;
        }
      }
      if ($.player.IsInAnyCar()) {
        $.car_lm1 = $.player.StoreCarIsIn();
        if ($.player.LocateInCarChar2D($.girl1_lm1, 8.0, 8.0, 0 /* FALSE */)) {
          if ($.player.IsStopped()) {
            $.girl1_lm1.SetObjEnterCarAsPassenger($.car_lm1);
            while (!($.girl1_lm1.IsInCar($.car_lm1)) || !($.player.IsInCar($.car_lm1))) {
              await asyncWait(0);
              if (Char.IsDead($.girl1_lm1)) {
                Text.PrintNow("MISTY1", 5000, 1);
                // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
              }
              if (Car.IsDead($.car_lm1)) {
                if (Char.IsDead($.girl1_lm1)) {
                  Text.PrintNow("MISTY1", 5000, 1);
                  // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
                }
                else {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
                }
              }
              if ($.girl1_lm1.IsInCar($.car_lm1)) {
                $.girl1_lm1.SetCantBeDraggedOut(1 /* TRUE */);
              }
              if (!($.player.IsInCar($.car_lm1))) {
                if ($.flag_player_had_vehicle_message_lm1 == 0) {
                  Text.PrintNow("IN_VEH", 5000, 1);
                  if ($.flag_blip_on_girl1_lm1 == 1) {
                    $.radar_blip_ped1_lm1.Remove();
                    $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
                    $.flag_blip_on_girl1_lm1 = 0;
                  }
                  $.flag_player_had_vehicle_message_lm1 = 1;
                }
              }
              else {
                if ($.flag_player_had_vehicle_message_lm1 == 1) {
                  Text.PrintNow("EBAL_6", 5000, 1);
                  if ($.flag_blip_on_girl1_lm1 == 0) {
                    $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
                    $.radar_blip_car1_lm1.Remove();
                    $.flag_blip_on_girl1_lm1 = 1;
                  }
                  $.flag_player_had_vehicle_message_lm1 = 0;
                }
              }
            }
            $.radar_blip_ped1_lm1.Remove();
            $.radar_blip_car1_lm1.Remove();
            $.flag_blip_on_girl1_lm1 = 0;
            $.flag_girl_in_group_lm1 = 1;
          }
        }
      }
    }
    if ($.flag_girl_in_group_lm1 == 1) {
      if (Char.IsDead($.girl1_lm1)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.car_lm1)) {
        if (Char.IsDead($.girl1_lm1)) {
          Text.PrintNow("MISTY1", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
        else {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
        }
      }
      if (!($.player.IsInCar($.car_lm1))) {
        if ($.flag_player_had_car_message_lm1 == 0) {
          Text.PrintNow("IN_VEH", 5000, 1);
          $.radar_blip_car1_lm1 = Blip.AddForCar($.car_lm1);
          $.flag_player_had_car_message_lm1 = 1;
        }
      }
      if ($.player.IsInCar($.car_lm1)) {
        if ($.girl1_lm1.IsInCar($.car_lm1)) {
          Text.PrintNow("LM1_9", 10000, 1);
          Audio.PlayMissionAudio();
          $.girl1_lm1.SetCantBeDraggedOut(0 /* FALSE */);
          $.flag_girl1_in_car_lm1 = 1;
        }
        if ($.flag_player_had_car_message_lm1 == 1) {
          $.radar_blip_car1_lm1.Remove();
          $.flag_player_had_car_message_lm1 = 0;
        }
      }
    }
  }
  $.radar_blip_ped1_lm1.Remove();
  $.girl1_lm1.FollowPlayer($.player);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      if (!($.girl1_lm1.IsInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
        Text.PrintNow("HEY4", 5000, 1);
        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
        $.flag_blip_on_girl1_lm1 = 1;
      }
      if ($.player.LocateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
        $.girl1_lm1.FollowPlayer($.player);
        $.radar_blip_ped1_lm1.Remove();
        $.flag_blip_on_girl1_lm1 = 0;
      }
    }
    if (Car.IsDead($.car_lm1)) {
      if (Char.IsDead($.girl1_lm1)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  Text.ClearThisPrint("LM1_9");
  Text.PrintNow("LM1_2", 7000, 1);
  $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);
  $.blob_flag = 1;
  Text.PrintHelp("LOOK_A");
  timera = 0;
  while (!($.girl1_lm1.IsStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, $.blob_flag)) || !($.player.IsStoppedInArea3D(903.8, -420.2, 14.0, 908.3, -431.1, 18.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if ($.flag_player_had_camera_message_8ball == 0) {
      $.controlmode = Pad.GetControllerMode();
      if (timera > 10000) {
        if ($.controlmode == 0) {
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
        if ($.controlmode == 0) {
          Text.PrintHelp("CAM_B");
          $.flag_player_had_camera_message_8ball = 1;
        }
        if ($.controlmode == 0) {
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
        if ($.controlmode == 0) {
          Text.PrintHelp("CAM_A");
          $.flag_player_had_camera_message_8ball = 1;
        }
      }
    }
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
    else {
      if (!($.girl1_lm1.IsInPlayersGroup($.player)) && $.flag_blip_on_girl1_lm1 == 0) {
        Text.PrintNow("HEY4", 5000, 1);
        $.radar_blip_ped1_lm1 = Blip.AddForChar($.girl1_lm1);
        $.radar_blip_coord1_lm1.Remove();
        $.blob_flag = 0;
        $.flag_blip_on_girl1_lm1 = 1;
      }
      if ($.player.LocateAnyMeansChar2D($.girl1_lm1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_girl1_lm1 == 1) {
        $.girl1_lm1.FollowPlayer($.player);
        Text.PrintNow("LM1_2", 7000, 1);
        $.radar_blip_coord1_lm1 = Blip.AddForCoord(906.2, -426.0, -100.0);
        $.radar_blip_ped1_lm1.Remove();
        $.blob_flag = 1;
        $.flag_blip_on_girl1_lm1 = 0;
      }
    }
  }
  $.radar_blip_coord1_lm1.Remove();
  $.girl1_lm1.LeaveGroup();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  $.player.ClearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  World.ClearArea(887.4, -417.3, 13.9, 10.0, 1 /* TRUE */);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  Streaming.RequestModel(luigiineerclub);
  if ($.girl1_lm1.IsInAnyCar()) {
    $.girl1_lm1.SetCantBeDraggedOut(0 /* FALSE */);
    $.car_lm1 = $.girl1_lm1.StoreCarIsIn();
    $.girl1_lm1.SetObjLeaveCar($.car_lm1);
    while ($.girl1_lm1.IsInAnyCar()) {
      await asyncWait(0);
      if (Char.IsDead($.girl1_lm1)) {
        Text.PrintNow("MISTY1", 5000, 1);
        // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
      }
    }
  }
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  $.girl1_lm1.SetObjGotoCoordOnFoot(900.17, -425.4);
  timerb = 0;
  while (timerb < 1000) {
    await asyncWait(0);
    if (Char.IsDead($.girl1_lm1)) {
      Text.PrintNow("MISTY1", 5000, 1);
      // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.girl1_lm1)) {
    Text.PrintNow("MISTY1", 5000, 1);
    // SCM GOTO → mission_eightball_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_eightball_failed"); // fallback: would break linear control flow
  }
  $.girl1_lm1.SetCoordinates(898.9, -425.8, 13.9);
  $.girl1_lm1.SetHeading(90.0);
  $.girl1_lm1.SetObjGotoCoordOnFoot(887.1, -425.22);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(882.6, -425.6, 14.4, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(890.2, -421.1, 15.0, 2 /* jump_cut */);
  Text.PrintWithNumberBig("M_PASS", 1500, 5000, 1);
  $.player.AddScore(1500);
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
  Hud.SwitchWidescreen(0 /* OFF */);
  await asyncWait(0);
  Camera.RestoreJumpcut();
  await asyncWait(750);
  Camera.DoFade(250, 1 /* FADE_IN */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  // SCM GOTO → mission_eightball_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_eightball_passed"); // fallback: would break linear control flow
}

async function mission_eightball_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  $.flag_eightball_mission_launched = 0;
  if ($.flag_reached_hideout == 0) {
    Restart.CriticalMission(811.90, -939.95, 35.8, 180.0);
  }
  else {
    Restart.CriticalMission(883.5, -308.2, 7.6, 90.0);
  }
  Mission.Finish();
  while (!($.player.IsPlaying())) {
    await asyncWait(0);
  }
  return;
}

async function mission_eightball_passed() {
  Restart.CancelOverride();
  $.flag_eightball_mission_passed = 1;
  Stat.RegisterMissionPassed("LM1");
  Stat.PlayerMadeProgress(1);
  $.flag_luigi_mission1_passed = 1;
  $.player.ClearWantedLevel();
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
  $.fire_sound_8ball.Remove();
  Camera.SetFadingColor(0, 0, 0);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  Streaming.MarkModelAsNoLongerNeeded(car`KURUMA`);
  $.radar_blip_coord1_eightball.Remove();
  $.radar_blip_coord2_eightball.Remove();
  $.radar_blip_car1_eightball.Remove();
  $.eightball.Delete();
  $.girl1_lm1.Delete();
  $.radar_blip_coord1_lm1.Remove();
  $.radar_blip_ped1_lm1.Remove();
  $.radar_blip_car1_lm1.Remove();
  Hud.FlashObject(-1);
  if (!(Car.IsDead($.cop_car1_8ball))) {
    $.cop_car1_8ball.MarkAsNoLongerNeeded();
  }
  if (!(Car.IsDead($.cop_car2_8ball))) {
    $.cop_car2_8ball.MarkAsNoLongerNeeded();
  }
  if (!(Char.IsDead($.girl1_lm1))) {
    $.girl1_lm1.SetCantBeDraggedOut(0 /* FALSE */);
  }
  Mission.Finish();
  return;
}

async function car_gen_start_8ball() {
  $.gen_car44.Switch(101);
  $.gen_car45.Switch(101);
  $.gen_car46.Switch(101);
  $.gen_car47.Switch(101);
  $.gen_car48.Switch(101);
  $.gen_car49.Switch(101);
  $.gen_car28.Switch(101);
  $.gen_car29.Switch(101);
  $.gen_car1.Switch(101);
  $.gen_car2.Switch(101);
  $.gen_car3.Switch(101);
  $.gen_car4.Switch(101);
  $.gen_car5.Switch(101);
  $.gen_car6.Switch(101);
  $.gen_car6.Switch(101);
  $.gen_car9.Switch(101);
  $.gen_car10.Switch(101);
  $.gen_car11.Switch(101);
  $.gen_car12.Switch(101);
  $.gen_car13.Switch(101);
  $.gen_car15.Switch(101);
  $.gen_car16.Switch(101);
  $.gen_car17.Switch(101);
  $.gen_car18.Switch(101);
  $.gen_car57.Switch(101);
  $.gen_car58.Switch(101);
  $.gen_car19.Switch(101);
  $.gen_car20.Switch(101);
  $.gen_car21.Switch(101);
  $.gen_car22.Switch(101);
  $.gen_car24.Switch(101);
  $.gen_car25.Switch(101);
  $.gen_car59.Switch(101);
  $.gen_car23.Switch(101);
  $.gen_car30.Switch(101);
  $.gen_car31.Switch(101);
  $.gen_car53.Switch(101);
  $.gen_car8.Switch(101);
  $.gen_car32.Switch(101);
  $.gen_car34.Switch(101);
  $.gen_car36.Switch(101);
  $.gen_car37.Switch(101);
  $.gen_car38.Switch(101);
  $.gen_car40.Switch(101);
  $.gen_car41.Switch(101);
  $.gen_car42.Switch(101);
  $.gen_car43.Switch(101);
  $.gen_car54.Switch(101);
  $.gen_car55.Switch(101);
  $.gen_car56.Switch(101);
  $.gen_car33.Switch(101);
  $.gen_car51.Switch(101);
  $.gen_car52.Switch(101);
  $.gen_car64.Switch(101);
  $.com_car1.Switch(101);
  $.com_car2.Switch(101);
  $.com_car25.Switch(101);
  $.com_car26.Switch(101);
  $.com_car3.Switch(101);
  $.com_car4.Switch(101);
  $.com_car5.Switch(101);
  $.com_car6.Switch(101);
  $.com_car7.Switch(101);
  $.com_car8.Switch(101);
  $.com_car9.Switch(101);
  $.com_car10.Switch(101);
  $.com_car11.Switch(101);
  $.com_car12.Switch(101);
  $.com_car20.Switch(101);
  $.com_car21.Switch(101);
  $.com_car27.Switch(101);
  $.com_car28.Switch(101);
  $.com_car29.Switch(101);
  $.com_car30.Switch(101);
  $.com_car31.Switch(101);
  $.com_car32.Switch(101);
  $.com_car33.Switch(101);
  $.com_car34.Switch(101);
  $.com_car35.Switch(101);
  $.com_car36.Switch(101);
  $.com_car37.Switch(101);
  $.com_car38.Switch(101);
  $.com_car39.Switch(101);
  $.com_car40.Switch(101);
  $.gen_car60.Switch(0);
  $.gen_car61.Switch(0);
  $.gen_car62.Switch(0);
  $.com_car41.Switch(101);
  $.com_car42.Switch(101);
  $.com_car43.Switch(101);
  $.com_car44.Switch(101);
  $.com_car45.Switch(101);
  $.gen_car35.Switch(101);
  $.com_car15.Switch(101);
  $.com_car16.Switch(101);
  $.com_car17.Switch(101);
  $.com_car19.Switch(101);
  $.com_car24.Switch(101);
  $.com_car13.Switch(101);
  $.com_car23.Switch(0);
  $.com_car14.Switch(101);
  $.com_car22.Switch(101);
  $.phil_car.Switch(101);
  $.com_car46.Switch(101);
  $.com_car47.Switch(101);
  $.com_car48.Switch(101);
  $.com_car49.Switch(101);
  $.special_tank.Switch(0);
  $.sub_car1.Switch(101);
  $.sub_car2.Switch(101);
  $.sub_car3.Switch(101);
  $.sub_car4.Switch(101);
  $.sub_car5.Switch(101);
  $.sub_car6.Switch(101);
  $.sub_car7.Switch(101);
  $.sub_car25.Switch(101);
  $.gen_car63.Switch(0);
  $.sub_car40.Switch(101);
  $.sub_car41.Switch(101);
  $.sub_car42.Switch(101);
  $.sub_car43.Switch(101);
  $.sub_car44.Switch(101);
  $.sub_car45.Switch(101);
  $.sub_car46.Switch(101);
  $.sub_car8.Switch(101);
  $.sub_car9.Switch(101);
  $.sub_car10.Switch(101);
  $.sub_car11.Switch(101);
  $.sub_car12.Switch(101);
  $.sub_car13.Switch(101);
  $.sub_car14.Switch(101);
  $.sub_car15.Switch(101);
  $.sub_car16.Switch(101);
  $.sub_car19.Switch(101);
  $.sub_car20.Switch(101);
  $.sub_car17.Switch(101);
  $.sub_car18.Switch(101);
  $.sub_car21.Switch(101);
  $.sub_car22.Switch(101);
  $.sub_car23.Switch(101);
  $.sub_car24.Switch(101);
  $.sub_car30.Switch(101);
  $.sub_car31.Switch(101);
  $.rc_van1.Switch(101);
  $.rc_van2.Switch(101);
  $.rc_van3.Switch(101);
  $.rc_van4.Switch(101);
  return;
}

export async function _8ball() {
  // MissionBoundary
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
  // MissionBoundary
  // VAR_INT radar_blip_car1_eightball
  // VAR_INT radar_blip_coord1_eightball
  // VAR_INT radar_blip_coord2_eightball
  // VAR_INT eightball
  // VAR_INT car_eightball
  // VAR_INT van_8ball
  // VAR_INT flag_blip_on_eightball
  // VAR_INT flag_player_got_cops_message_eightball
  // VAR_INT flag_player_got_car_message1_eightball
  // VAR_INT radar_blip_ped1_eightball
  // VAR_INT flag_player_in_area
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
  // VAR_INT flag_brake_message
  // VAR_INT flag_hbrake_message
  // VAR_INT flag_look2_8ball
  // VAR_INT flag_look3_8ball
  // VAR_INT flag_misty_stop
  // VAR_INT flag_player_had_camera_message_8ball
  // VAR_INT car_colour1_8ball
  // VAR_INT car_colour2_8ball
  // VAR_INT flag_girl_in_group_lm1
  // VAR_INT radar_blip_car1_lm1
  // VAR_INT flag_timer_stopped_flashing_8ball
  // VAR_INT fire_sound_8ball
}
