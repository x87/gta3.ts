// Generated from Main/Industrial/frank2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_frankie2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_frankie_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.hours_fm2 = 0;
  $.minutes_fm2 = 0;
  $.hours_stuff_happen_fm2 = 0;
  $.minutes_stuff_happen_fm2 = 0;
  $.flag_player_got_car_message_fm2 = 0;
  $.flag_player_got_cops_message_fm2 = 0;
  $.time_car_stopped_fm2 = 0;
  $.flag_car_has_just_stopped = 0;
  $.timer_difference = 0;
  $.flag_taxi1_exit_car_fm2 = 0;
  $.flag_taxi2_exit_car_fm2 = 0;
  $.flag_car_fm2_created = 0;
  $.flag_mission_taxi_fm2_created = 0;
  $.flag_no_longer_mad = 0;
  $.flag_curley_at_point1_fm2 = 0;
  $.flag_curley_at_point2_fm2 = 0;
  $.flag_curley_bob_fm2_dead = 0;
  $.flag_bob_in_position_one = 0;
  $.flag_bob_in_position_two = 0;
  $.flag_bob_in_position_three = 0;
  $.flag_curley_bob_dead_fm2 = 0;
  $.car_health_fm2 = 0;
  $.blob_flag = 1;
  $.flag_car_fm2_dead = 0;
  $.car_fm2_x = 0.0;
  $.car_fm2_y = 0.0;
  $.car_fm2_z = 0.0;
  $.flag_curly_mad_fm2 = 0;
  $.spooked_counter = 0;
  $.spooked_check = 0;
  $.flag_player_had_warning1_fm2 = 0;
  $.flag_player_had_warning2_fm2 = 0;
  $.flag_curly_moved_fm2 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.frankie);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.LoadSpecialModel(hier`cutobj01`, FRANKH);
  Streaming.RequestModel(franksclb02);
  Streaming.RequestModel(salvsdetail);
  Streaming.RequestModel(swank_inside);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(franksclb02)) || !(Streaming.HasModelLoaded(salvsdetail)) || !(Streaming.HasModelLoaded(swank_inside))) {
    await asyncWait(0);
  }
  Cutscene.Load(s2_ctg);
  Cutscene.SetOffset(1457.776, -185.348, 54.925);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_frankie = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_frankie.SetAnim($.frankie);
  $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj01`);
  $.cs_frankiehead.SetAnim(frank);
  $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`);
  $.cs_mafia.SetAnim(gang02);
  World.ClearArea(1455.1, -187.8, -100.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1455.1, -187.8, -100.0);
  $.player.SetHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1726) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_J", 10000, 1);
  while ($.cs_time < 2910) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM2_J");
  while ($.cs_time < 4558) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_A", 10000, 1);
  while ($.cs_time < 7896) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_K", 10000, 1);
  while ($.cs_time < 13257) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_B", 10000, 1);
  while ($.cs_time < 15103) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_L", 10000, 1);
  while ($.cs_time < 18415) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_M", 10000, 1);
  while ($.cs_time < 21238) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_C", 10000, 1);
  while ($.cs_time < 25040) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_N", 10000, 1);
  while ($.cs_time < 28251) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_O", 10000, 1);
  while ($.cs_time < 30960) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM2_O");
  while ($.cs_time < 38333) {
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
  World.SwitchRubbish(1 /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.MarkModelAsNoLongerNeeded(franksclb02);
  Streaming.MarkModelAsNoLongerNeeded(salvsdetail);
  Streaming.MarkModelAsNoLongerNeeded(swank_inside);
  Streaming.LoadSpecialCharacter(2, curly);
  Streaming.RequestModel(car`TAXI`);
  Streaming.RequestModel(ped`TAXI_DRIVER`);
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(car`TAXI`)) || !(Streaming.HasModelLoaded(ped`TAXI_DRIVER`))) {
    await asyncWait(0);
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Text.PrintNow("FM2_11", 5000, 1);
  $.radar_blip_club_fm2 = Blip.AddForCoord(907.0, -424.7, 13.8);
  $.car_fm2 = Car.Create(103 /* CAR_TAXI */, 906.9, -433.7, -100.0);
  $.car_fm2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.flag_car_fm2_created = 1;
  $.car_fm2.SetHeading(180.0);
  $.car_fm2.ChangeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.van_driver_fm2 = Char.CreateInsideCar($.car_fm2, 4 /* PEDTYPE_CIVMALE */, ped`TAXI_DRIVER`);
  $.van_driver_fm2.SetCantBeDraggedOut(1 /* TRUE */);
  $.van_driver_fm2.ClearThreatSearch();
  $.car_fm2.SetIdle();
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  timerb = 0;
  while (timerb < 60000) {
    await asyncWait(0);
  }
  if ($.player.IsInArea3D(901.2, -427.8, 12.0, 878.1, -422.4, 27.0, 0 /* FALSE */) || $.player.IsInArea3D(878.1, -422.4, 12.0, 900.4, -404.2, 27.0, 0 /* FALSE */)) {
    World.ClearArea(902.9, -398.8, 14.0, 1.0, 1 /* TRUE */);
    $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 902.9, -398.8, 14.0);
    $.radar_blip_ped1_fm2 = Blip.AddForChar($.curley_bob_fm2);
    $.radar_blip_ped1_fm2.ChangeDisplay(1 /* MARKER_ONLY */);
    $.curley_bob_fm2.ClearThreatSearch();
    $.curley_bob_fm2.SetObjGotoCoordOnFoot(902.7, -430.4);
    timerb = 0;
    while (!($.curley_bob_fm2.LocateOnFoot2D(902.7, -430.4, 1.0, 1.0, 0 /* FALSE */))) {
      await asyncWait(0);
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!($.curley_bob_fm2.IsHealthGreater(99))) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if ($.flag_curly_moved_fm2 == 0) {
        if (timerb >= 15000) {
          if (!($.curley_bob_fm2.LocateOnFoot2D(902.7, -430.4, 1.0, 1.0, 0 /* FALSE */))) {
            $.curley_bob_fm2.SetCoordinates(902.7, -430.4, 13.7);
            $.flag_curly_moved_fm2 = 1;
          }
        }
      }
    }
    $.curley_bob_fm2.SetIdle();
    // SCM GOTO → mission_check (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_check"); // fallback: would break linear control flow
  }
  else {
    World.ClearArea(886.3, -422.2, 13.8, 1.0, 1 /* TRUE */);
    $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 886.3, -422.2, 13.8);
    $.radar_blip_ped1_fm2 = Blip.AddForChar($.curley_bob_fm2);
    $.radar_blip_ped1_fm2.ChangeDisplay(1 /* MARKER_ONLY */);
    $.curley_bob_fm2.ClearThreatSearch();
    $.curley_bob_fm2.SetObjGotoCoordOnFoot(888.0, -425.0);
    World.ClearArea(887.4, -417.3, 13.9, 10.0, 0 /* FALSE */);
    World.ClearArea(892.8, -425.5, 13.9, 3.0, 0 /* FALSE */);
    World.ClearArea(896.3, -425.6, 13.8, 3.0, 0 /* FALSE */);
    World.ClearArea(899.1, -424.6, 14.0, 3.0, 0 /* FALSE */);
    World.ClearArea(903.4, -425.6, 13.9, 2.0, 0 /* FALSE */);
    timerb = 0;
    while (!($.curley_bob_fm2.LocateOnFoot2D(904.0, -427.3, 1.0, 1.0, 0 /* FALSE */))) {
      await asyncWait(0);
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!($.curley_bob_fm2.IsHealthGreater(99))) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if ($.curley_bob_fm2.LocateOnFoot2D(888.0, -425.0, 1.0, 1.0, 0 /* FALSE */)) {
        $.curley_bob_fm2.SetObjRunToCoord(892.1, -425.3);
      }
      if ($.curley_bob_fm2.LocateOnFoot2D(892.1, -425.3, 1.0, 1.0, 0 /* FALSE */)) {
        $.curley_bob_fm2.SetObjGotoCoordOnFoot(904.0, -427.3);
      }
      if ($.flag_curly_moved_fm2 == 0) {
        if (timerb >= 25000) {
          if (!($.curley_bob_fm2.LocateOnFoot2D(904.0, -427.3, 1.0, 1.0, 0 /* FALSE */))) {
            $.curley_bob_fm2.SetCoordinates(904.0, -427.3, 13.9);
            $.flag_curly_moved_fm2 = 1;
          }
        }
      }
    }
    $.curley_bob_fm2.SetIdle();
  }
}

async function mission_check() {
  $.radar_blip_club_fm2.Remove();
  if (!($.player.IsStoppedInAreaInCar2D(905.0, -432.0, 910.0, -419.0, 0 /* FALSE */))) {
    // SCM GOTO → mission_jump3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_jump3"); // fallback: would break linear control flow
  }
  if ($.player.IsInModel(103 /* car_taxi */) || $.player.IsInModel(121 /* car_cabbie */) || $.player.IsInModel(141 /* car_borgnine */)) {
    $.mission_taxi_fm2 = $.player.StoreCarIsIn();
    $.flag_mission_taxi_fm2_created = 1;
  }
  else {
    // SCM GOTO → mission_jump3 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_jump3"); // fallback: would break linear control flow
  }
  if ($.player.LocateStoppedInCar2D(906.0, -425.0, 4.0, 4.0, 0 /* FALSE */) && $.player.IsInCar($.mission_taxi_fm2)) {
    if (Char.IsDead($.curley_bob_fm2)) {
      Text.PrintNow("FM2_9", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInModel(103 /* car_taxi */) || $.player.IsInModel(121 /* car_cabbie */)) {
      $.mission_taxi_fm2 = $.player.StoreCarIsIn();
    }
    if (Car.IsDead($.mission_taxi_fm2)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.mission_taxi_fm2.IsUpsidedown() && $.mission_taxi_fm2.IsStopped()) {
        Text.PrintNow("UPSIDE", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    if (!($.mission_taxi_fm2.IsHealthGreater(700))) {
      Text.PrintNow("FM2_6", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    $.curley_bob_fm2.SetObjEnterCarAsPassenger($.mission_taxi_fm2);
    while (!($.curley_bob_fm2.IsInCar($.mission_taxi_fm2))) {
      await asyncWait(0);
      if (Car.IsDead($.mission_taxi_fm2)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.mission_taxi_fm2.IsUpsidedown() && $.mission_taxi_fm2.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!($.curley_bob_fm2.IsHealthGreater(99))) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if (!($.player.LocateInCarChar2D($.curley_bob_fm2, 5.0, 5.0, 0 /* FALSE */))) {
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    $.radar_blip_ped1_fm2.Remove();
    Text.PrintNow("FM2_5", 7000, 1);
    $.radar_blip_coord2_fm2 = Blip.AddForCoord(1529.0, -827.0, -100.0);
    $.blob_flag = 1;
    while (!($.player.LocateStoppedInCar2D(1529.0, -827.0, 3.0, 4.0, $.blob_flag)) || !($.curley_bob_fm2.IsInCar($.mission_taxi_fm2)) || !($.player.IsInCar($.mission_taxi_fm2))) {
      await asyncWait(0);
      if (Car.IsDead($.mission_taxi_fm2)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if ($.mission_taxi_fm2.IsUpsidedown() && $.mission_taxi_fm2.IsStopped()) {
          Text.PrintNow("UPSIDE", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      if (!($.curley_bob_fm2.IsInCar($.mission_taxi_fm2))) {
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      if (!($.player.IsInCar($.mission_taxi_fm2)) && $.flag_player_got_car_message_fm2 == 0) {
        Text.ClearPrints();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.radar_blip_car1_fm2 = Blip.AddForCar($.mission_taxi_fm2);
        $.radar_blip_coord2_fm2.Remove();
        $.flag_player_got_car_message_fm2 = 1;
        $.blob_flag = 0;
      }
      if ($.player.IsInCar($.mission_taxi_fm2) && $.flag_player_got_car_message_fm2 == 1) {
        $.radar_blip_coord2_fm2 = Blip.AddForCoord(1529.0, -827.0, -100.0);
        $.radar_blip_coord2_fm2.ChangeDisplay(2 /* BLIP_ONLY */);
        $.radar_blip_car1_fm2.Remove();
        $.flag_player_got_car_message_fm2 = 0;
        $.blob_flag = 1;
      }
      if ($.mission_taxi_fm2.IsStopped()) {
        if ($.flag_car_has_just_stopped == 0) {
          timerb = 0;
          $.flag_car_has_just_stopped = 1;
        }
        if (timerb > 10000) {
          $.flag_taxi1_exit_car_fm2 = 1;
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        $.flag_car_has_just_stopped = 0;
      }
    }
    $.radar_blip_coord2_fm2.Remove();
    // SCM GOTO → mission_jump2 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_jump2"); // fallback: would break linear control flow
  }
}

async function mission_jump3() {
  if (Car.IsDead($.car_fm2)) {
    Text.PrintNow("FM2_7", 7000, 1);
    $.flag_car_fm2_dead = 1;
    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
  }
  else {
    if ($.car_fm2.IsUpsidedown() && $.car_fm2.IsStopped()) {
      Text.PrintNow("FM2_7", 7000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
  }
  if ($.car_fm2.LocateStopped2D(906.9, -433.0, 6.0, 6.0, 0 /* FALSE */) && !($.car_fm2.IsUpsidedown())) {
    $.curley_bob_fm2.SetObjEnterCarAsPassenger($.car_fm2);
  }
  else {
    Text.PrintNow("FM2_7", 7000, 1);
    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
  }
  while (!($.curley_bob_fm2.IsInCar($.car_fm2))) {
    await asyncWait(0);
    if (Char.IsDead($.curley_bob_fm2)) {
      Text.PrintNow("FM2_9", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    else {
      if (!($.curley_bob_fm2.IsHealthGreater(99))) {
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    if (Car.IsDead($.car_fm2)) {
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        $.flag_car_fm2_dead = 1;
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if ($.car_fm2.IsUpsidedown() && $.car_fm2.IsStopped()) {
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.radar_blip_ped1_fm2.Remove();
  Text.PrintNow("FM2_2", 7000, 1);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  $.radar_blip_car2_fm2 = Blip.AddForCar($.car_fm2);
  $.radar_blip_car2_fm2.ChangeDisplay(1 /* MARKER_ONLY */);
  $.car_fm2.SetCruiseSpeed(30.0);
  $.car_fm2.GotoCoordinatesAccurate(1529.0, -827.0, -100.0);
  $.car_fm2.SetDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */);
  $.car_fm2.SetCruiseSpeed(20.0);
  StuckCarCheck.Add($.car_fm2, 5.0, 30000);
  Hud.DisplayCounterWithString($.spooked_counter, 1 /* COUNTER_DISPLAY_BAR */, "FM2_16");
  timerb = 0;
  timera = 0;
  while (!($.car_fm2.Locate2D(1529.0, -827.0, 3.0, 3.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if ($.spooked_check == 0) {
      if (timerb > 1500) {
        $.spooked_check = 1;
      }
    }
    if (Car.IsDead($.car_fm2)) {
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        Text.PrintNow("WRECKED", 5000, 1);
        $.flag_car_fm2_dead = 1;
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    else {
      if (StuckCarCheck.IsCarStuck($.car_fm2)) {
        $.spooked_counter = 100;
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      if ($.car_fm2.IsUpsidedown() && $.car_fm2.IsStopped()) {
        $.spooked_counter = 100;
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    World.ClearArea(1529.0, -827.0, -100.0, 4.0, 0 /* FALSE */);
    if (Char.IsDead($.curley_bob_fm2)) {
      Text.PrintNow("FM2_9", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.spooked_check == 1) {
        if ($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 40.0, 40.0, 40.0, 0 /* FALSE */)) {
          if ($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 30.0, 30.0, 30.0, 0 /* FALSE */)) {
            if ($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 20.0, 20.0, 20.0, 0 /* FALSE */)) {
              if ($.player.IsInModel(127 /* CAR_MAFIA */)) {
                if (timera > 8) {
                  ++$.spooked_counter;
                  timera = 0;
                }
              }
              else {
                if (timera > 16) {
                  ++$.spooked_counter;
                  timera = 0;
                }
              }
            }
            else {
              if ($.player.IsInModel(127 /* CAR_MAFIA */)) {
                if (timera > 16) {
                  ++$.spooked_counter;
                  timera = 0;
                }
              }
              else {
                if (timera > 32) {
                  ++$.spooked_counter;
                  timera = 0;
                }
              }
            }
          }
          else {
            if ($.player.IsInModel(127 /* CAR_MAFIA */)) {
              if (timera > 32) {
                ++$.spooked_counter;
                timera = 0;
              }
            }
            else {
              if (timera > 64) {
                ++$.spooked_counter;
                timera = 0;
              }
            }
          }
        }
        else {
          if ($.player.IsInModel(127 /* CAR_MAFIA */)) {
            if (timera > 500) {
              if ($.spooked_counter > 0) {
                --$.spooked_counter;
              }
              timera = 0;
            }
          }
          else {
            if (timera > 250) {
              if ($.spooked_counter > 0) {
                --$.spooked_counter;
              }
              timera = 0;
            }
          }
        }
      }
      if ($.spooked_counter > 10) {
        if ($.flag_player_had_warning1_fm2 == 0) {
          Text.PrintNow("FM2_15", 5000, 1);
          $.flag_player_had_warning1_fm2 = 1;
        }
      }
      if ($.spooked_counter == 100) {
        Text.PrintNow("FM2_14", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      if (!($.curley_bob_fm2.IsInCar($.car_fm2))) {
        $.spooked_counter = 100;
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      if ($.curley_bob_fm2.IsInArea2D(1538.0, -741.0, 1304.0, -901.0, 0 /* FALSE */)) {
        $.car_fm2.SetDrivingStyle(1);
        $.car_fm2.SetCruiseSpeed(10.0);
        $.flag_no_longer_mad = 1;
      }
      if ($.flag_no_longer_mad == 0) {
        if ($.player.LocateAnyMeansChar2D($.curley_bob_fm2, 30.0, 30.0, 0 /* FALSE */)) {
          $.car_fm2.SetDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */);
          $.car_fm2.SetCruiseSpeed(25.0);
        }
        else {
          $.car_fm2.SetDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */);
          $.car_fm2.SetCruiseSpeed(20.0);
        }
      }
    }
    if ($.car_fm2.IsVisiblyDamaged()) {
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        $.spooked_counter = 100;
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    if ($.car_fm2.IsStopped()) {
      if ($.flag_car_has_just_stopped == 0) {
        $.time_car_stopped_fm2 = Clock.GetGameTimer();
        $.flag_car_has_just_stopped = 1;
      }
      $.current_time_fm2 = Clock.GetGameTimer();
      $.timer_difference = $.current_time_fm2 - $.time_car_stopped_fm2;
      if ($.timer_difference > 15000) {
        $.flag_taxi2_exit_car_fm2 = 1;
        $.spooked_counter = 100;
        Text.PrintNow("FM2_7", 7000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
    }
    else {
      $.flag_car_has_just_stopped = 0;
    }
  }
  $.radar_blip_car2_fm2.Remove();
  StuckCarCheck.Remove($.car_fm2);
  if ($.flag_car_fm2_created == 1 && $.curley_bob_fm2.IsInCar($.car_fm2)) {
    $.flag_taxi2_exit_car_fm2 = 1;
  }
  if ($.flag_taxi2_exit_car_fm2 == 1) {
    $.curley_bob_fm2.SetObjLeaveCar($.car_fm2);
    while ($.curley_bob_fm2.IsInCar($.car_fm2)) {
      await asyncWait(0);
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!($.curley_bob_fm2.IsHealthGreater(99))) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if (Car.IsDead($.car_fm2)) {
        if (Char.IsDead($.curley_bob_fm2)) {
          Text.PrintNow("FM2_9", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
        else {
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car_fm2_dead = 1;
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        if ($.car_fm2.IsUpsidedown() && $.car_fm2.IsStopped()) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
    }
    Hud.ClearCounter($.spooked_counter);
    if (!($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("FM2_12", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInArea3D(1573.72, -876.49, 5.0, 1404.09, -1034.30, 30.0, 0 /* FALSE */)) {
      $.spooked_counter = 100;
      Text.PrintNow("FM2_7", 7000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    // SCM GOTO → mission_jump4 (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_jump4"); // fallback: would break linear control flow
  }
}

async function mission_jump2() {
  if ($.flag_mission_taxi_fm2_created == 1 && $.curley_bob_fm2.IsInCar($.mission_taxi_fm2)) {
    $.flag_taxi1_exit_car_fm2 = 1;
  }
  if ($.flag_taxi1_exit_car_fm2 == 1) {
    $.curley_bob_fm2.SetObjLeaveCar($.mission_taxi_fm2);
    while ($.curley_bob_fm2.IsInCar($.mission_taxi_fm2)) {
      await asyncWait(0);
      if (Char.IsDead($.curley_bob_fm2)) {
        Text.PrintNow("FM2_9", 5000, 1);
        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!($.curley_bob_fm2.IsHealthGreater(99))) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      if (Car.IsDead($.mission_taxi_fm2)) {
        if (Char.IsDead($.curley_bob_fm2)) {
          Text.PrintNow("FM2_9", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
        else {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
      else {
        if ($.mission_taxi_fm2.IsUpsidedown() && $.mission_taxi_fm2.IsStopped()) {
          Text.PrintNow("FM2_7", 7000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
    }
    if (!($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("FM2_12", 5000, 1);
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
  }
}

async function mission_jump4() {
  Hud.SwitchWidescreen(1 /* ON */);
  if ($.player.IsInAnyCar()) {
    $.player.ApplyBrakesToCar(1 /* ON */);
  }
  $.player.SetControl(0 /* OFF */);
  $.player.ClearWantedLevel();
  if (!(Char.IsDead($.van_driver_fm2))) {
    $.van_driver_fm2.SetCantBeDraggedOut(0 /* FALSE */);
  }
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  World.ClearArea(1546.56, -834.79, 12.70, 1.0, 1 /* TRUE */);
  Camera.SetFixedPosition(1546.56, -834.79, 12.70, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1545.50, -834.60, 12.79, 2 /* JUMP_CUT */);
  $.curley_bob_fm2.SetObjRunToCoord(1532.0, -889.0);
  timerb = 0;
  while (timerb < 1500) {
    await asyncWait(0);
    World.ClearArea(1532.0, -889.0, -100.0, 3.0, 0 /* FALSE */);
    if (Char.IsDead($.curley_bob_fm2)) {
      Text.PrintNow("FM2_9", 5000, 1);
      $.flag_curley_bob_fm2_dead = 1;
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
  }
  if (Char.IsDead($.curley_bob_fm2)) {
    Text.PrintNow("FM2_9", 5000, 1);
    $.flag_curley_bob_fm2_dead = 1;
    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Char.IsDead($.curley_bob_fm2)) {
      Text.PrintNow("FM2_9", 5000, 1);
      $.flag_curley_bob_fm2_dead = 1;
      // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadSpecialCharacter(3, $.miguel);
  Streaming.LoadSpecialCharacter(4, cat);
  Streaming.LoadSpecialModel(hier`cutobj01`, MIGUELH);
  Streaming.LoadSpecialModel(hier`cutobj02`, CATH);
  Streaming.LoadSpecialModel(hier`cutobj03`, CURLYH);
  Streaming.RequestModel(car`COLUMB`);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  if (!(Char.IsDead($.curley_bob_fm2))) {
    $.curley_bob_fm2.SetIdle();
  }
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(car`COLUMB`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  $.baddie_car_fm2 = Car.Create(131 /* CAR_COLUMB */, 1542.9, -896.1975, 10.6);
  $.baddie_car_fm2.SetHeading(90.0);
  Cutscene.Load(s2_ctg2);
  Cutscene.SetOffset(1573.8866, -906.0611, 11.1);
  $.cs_curly = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_curly.SetAnim(curly);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_miguel.SetAnim($.miguel);
  $.cs_catalina = CutsceneObject.Create(ped`SPECIAL4`);
  $.cs_catalina.SetAnim(cat);
  $.cs_miguelhead = CutsceneHead.Create($.cs_miguel, hier`cutobj01`);
  $.cs_miguelhead.SetAnim($.miguel);
  $.cs_catalinahead = CutsceneHead.Create($.cs_catalina, hier`cutobj02`);
  $.cs_catalinahead.SetAnim(cat);
  $.cs_curlyhead = CutsceneHead.Create($.cs_curly, hier`cutobj03`);
  $.cs_curlyhead.SetAnim(curly);
  World.ClearArea(898.6, -425.6, 13.9, 1.0, 1 /* TRUE */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.curley_bob_fm2.Delete();
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time <= 0) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_F", 10000, 1);
  while ($.cs_time < 3225) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_G", 10000, 1);
  while ($.cs_time < 7047) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_H", 10000, 1);
  while ($.cs_time < 10272) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_I", 10000, 1);
  while ($.cs_time < 13914) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_P", 10000, 1);
  while ($.cs_time < 16721) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_Q", 10000, 1);
  while ($.cs_time < 20483) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_R", 10000, 1);
  while ($.cs_time < 24246) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_S", 10000, 1);
  while ($.cs_time < 26993) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_T", 10000, 1);
  while ($.cs_time < 31770) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM2_U", 10000, 1);
  while ($.cs_time < 35267) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM2_U");
  while ($.cs_time < 37000) {
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
  if ($.flag_car_fm2_dead == 0) {
    if (!(Car.IsDead($.car_fm2))) {
      $.van_driver_fm2.Delete();
      $.car_fm2.Delete();
      $.flag_car_fm2_dead = 0;
    }
  }
  $.baddie_car_fm2.Delete();
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1493.7, -886.6, -100.0);
  $.curley_bob_fm2.SetHeading(90.0);
  $.curley_bob_fm2.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 30000);
  $.curley_bob_fm2.SetObjFleePlayerOnFootAlways($.player);
  $.radar_blip_ped2_fm2 = Blip.AddForChar($.curley_bob_fm2);
  Text.PrintNow("FM2_8", 7000, 1);
  while (!($.flag_curley_bob_dead_fm2 == 1)) {
    await asyncWait(0);
    if ($.flag_curley_bob_dead_fm2 == 0) {
      if (Char.IsDead($.curley_bob_fm2)) {
        $.flag_curley_bob_dead_fm2 = 1;
      }
      else {
        if ($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 25.0, 25.0, 25.0, 0 /* FALSE */)) {
          if ($.flag_curly_mad_fm2 == 0) {
            $.curley_bob_fm2.SetObjKillPlayerAnyMeans($.player);
            $.flag_curly_mad_fm2 = 1;
          }
        }
        else {
          $.flag_curly_mad_fm2 = 0;
          $.curley_bob_fm2.SetObjFleePlayerOnFootAlways($.player);
        }
        if (!($.curley_bob_fm2.IsOnScreen()) && !($.player.LocateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 80.0, 0 /* FALSE */))) {
          Text.PrintNow("FM2_10", 5000, 1);
          // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_frankie2_failed"); // fallback: would break linear control flow
        }
      }
    }
  }
  $.radar_blip_ped2_fm2.Remove();
  }
  // SCM GOTO → mission_frankie2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_frankie2_passed"); // fallback: would break linear control flow
}

async function mission_frankie2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  $.curley_bob_fm2.RemoveElegantly();
  return;
}

async function mission_frankie2_passed() {
  $.flag_frankie_mission2_passed = 1;
  Stat.RegisterMissionPassed("FM2");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 15000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(15000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT frankie_mission2.1_loop
  // START_NEW_SCRIPT toni4_pager_loop
  if ($.flag_toni_mission5_passed == 0) {
    $.flag_frankie_switched_off = 1;
    $.frankie_contact_blip.Remove();
  }
  return;
}

async function mission_cleanup_frankie2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  if ($.flag_car_fm2_dead == 0) {
    if (!(Car.IsDead($.car_fm2))) {
      $.car_fm2.ChangeLock(1 /* CARLOCK_UNLOCKED */);
      $.car_fm2.SetOnlyDamagedByPlayer(0 /* FALSE */);
    }
  }
  Streaming.MarkModelAsNoLongerNeeded(car`TAXI`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Streaming.MarkModelAsNoLongerNeeded(ped`TAXI_DRIVER`);
  $.radar_blip_club_fm2.Remove();
  $.radar_blip_ped1_fm2.Remove();
  $.radar_blip_coord2_fm2.Remove();
  $.radar_blip_car1_fm2.Remove();
  $.radar_blip_car2_fm2.Remove();
  $.radar_blip_ped2_fm2.Remove();
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Hud.ClearCounter($.spooked_counter);
  Mission.Finish();
  return;
}

export async function frank2() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_frankie2
  await mission_start_frankie2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_frankie2_failed
    await mission_frankie2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_frankie2
  await mission_cleanup_frankie2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT curley_bob_fm2
  // VAR_INT hours_fm2
  // VAR_INT minutes_fm2
  // VAR_INT hours_stuff_happen_fm2
  // VAR_INT mission_taxi_fm2
  // VAR_INT radar_blip_coord2_fm2
  // VAR_INT radar_blip_coord3_fm2
  // VAR_INT car_fm2
  // VAR_INT van_driver_fm2
  // VAR_INT radar_blip_coord1_fm2
  // VAR_INT radar_blip_ped1_fm2
  // VAR_INT radar_blip_car1_fm2
  // VAR_INT columbian_fm2
  // VAR_INT radar_blip_ped2_fm2
  // VAR_INT flag_player_too_far_message_fm2
  // VAR_INT minutes_stuff_happen_fm2
  // VAR_INT flag_player_got_car_message_fm2
  // VAR_INT flag_player_got_cops_message_fm2
  // VAR_INT time_car_stopped_fm2
  // VAR_INT current_time_fm2
  // VAR_INT flag_car_has_just_stopped
  // VAR_INT timer_difference
  // VAR_INT flag_taxi1_exit_car_fm2
  // VAR_INT flag_taxi2_exit_car_fm2
  // VAR_INT flag_car_fm2_created
  // VAR_INT flag_mission_taxi_fm2_created
  // VAR_INT flag_no_longer_mad
  // VAR_INT flag_curley_at_point1_fm2
  // VAR_INT flag_curley_at_point2_fm2
  // VAR_INT flag_curley_bob_fm2_dead
  // VAR_INT flag_bob_in_position_one
  // VAR_INT flag_bob_in_position_two
  // VAR_INT flag_bob_in_position_three
  // VAR_INT baddie_car_fm2
  // VAR_INT radar_blip_car2_fm2
  // VAR_INT flag_curley_bob_dead_fm2
  // VAR_INT car_health_fm2
  // VAR_INT flag_car_fm2_dead
  // VAR_FLOAT car_fm2_x
  // VAR_FLOAT car_fm2_y
  // VAR_FLOAT car_fm2_z
  // VAR_INT radar_blip_club_fm2
  // VAR_INT flag_curly_mad_fm2
  // VAR_INT spooked_counter
  // VAR_INT spooked_check
  // VAR_INT flag_player_had_warning1_fm2
  // VAR_INT flag_player_had_warning2_fm2
  // VAR_INT flag_curly_moved_fm2
}
