// Generated from Main/Commercial/yard2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_yd2() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_yardie_mission = 1;
  await asyncWait(0);
  {
  World.SetPedDensityMultiplier(0.0);
  Game.SetPoliceIgnorePlayer($.player, 1 /* on */);
  Cutscene.Load(YD_PH2);
  Cutscene.SetOffset(121.0, -272.3, 15.25);
  World.ClearAreaOfChars(100.5, -250.0, 0.0, 130.5, -290.0, 25.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD2_A", 10000, 1);
  while ($.cs_time < 4581) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD2_A1", 10000, 1);
  while ($.cs_time < 7135) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD2_B", 10000, 1);
  while ($.cs_time < 10431) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD2_B1", 10000, 1);
  while ($.cs_time < 13900) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  Text.ClearPrints();
  Cutscene.Clear();
  }
  await asyncWait(0);
  Streaming.RequestModel(car`PERENNIAL`);
  Streaming.RequestModel(ped`GANG_YARDIE_A`);
  Streaming.RequestModel(ped`GANG_YARDIE_B`);
  while (!(Streaming.HasModelLoaded(car`PERENNIAL`)) || !(Streaming.HasModelLoaded(ped`GANG_YARDIE_A`)) || !(Streaming.HasModelLoaded(ped`GANG_YARDIE_B`))) {
    await asyncWait(0);
  }
  $.timer_dif_yd2 = 0;
  $.flag_out_of_car_message = 0;
  $.flag_upsidedown = 0;
  flag_chap_1_n_v = 0;
  flag_chap_2_n_v = 0;
  $.flag_clear = 0;
  $.body_count_yd2 = 0;
  $.driveby_total_1 = 0;
  $.driveby_total_2 = 0;
  Player.ResetNumOfModelsKilled();
  $.driveby_x = 940.0;
  $.driveby_y = -220.0;
  $.yd2turf_x = 231.0;
  $.yd2turf_y = -531.0;
  $.wanted_yd2 = $.player.StoreWantedLevel();
  $.player.ClearWantedLevel();
  $.player.SetControl(0 /* off */);
  $.player_yd2 = $.player.GetChar();
  Camera.SetFixedPosition(117.3, -266.3, 17.0, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
  Hud.SwitchWidescreen(1 /* on */);
  World.SetCarDensityMultiplier(0.0);
  World.ClearArea(4.2, -310.1, 16.0, 40.0, 1 /* true */);
  World.ClearArea(97.0, -285.5, 16.0, 50.0, 1 /* true */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  await asyncWait(1500);
  $.gang_car_yd2 = Car.Create(87 /* CAR_PERENNIAL */, 4.2, -310.1, 16.0);
  $.gang_car_yd2.SetHeading(0.0);
  $.gang_car_yd2.SetOnlyDamagedByPlayer(1 /* True */);
  $.chaperone_1 = Char.CreateInsideCar($.gang_car_yd2, 4 /* PEDTYPE_CIVMALE */, ped`GANG_YARDIE_A`);
  $.chaperone_2 = Char.CreateAsPassenger($.gang_car_yd2, 4 /* PEDTYPE_CIVMALE */, ped`GANG_YARDIE_B`, 0);
  $.gang_car_yd2.GotoCoordinates(113.0, -272.0, 16.0);
  $.gang_car_yd2.SetCruiseSpeed(25.0);
  $.gang_car_yd2.SetDrivingStyle(3);
  if (!(Car.IsDead($.gang_car_yd2))) {
    Camera.PointAtCar($.gang_car_yd2, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }
  while (!($.gang_car_yd2.LocateStopped2D(113.0, -272.0, 5.0, 5.0, 0 /* false */))) {
    await asyncWait(0);
    if (Car.IsDead($.gang_car_yd2)) {
      // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
    }
    if ($.flag_clear == 0) {
      World.ClearArea(115.0, -272.0, 16.0, 10.0, 1 /* true */);
      $.flag_clear = 1;
    }
  }
  $.player_yd2.TurnToFaceCoord(115.0, -272.0, 16.0);
  if (!(Car.IsDead($.gang_car_yd2))) {
    $.gang_car_yd2.SetIdle();
    if (!(Char.IsDead($.chaperone_2)) && !(Char.IsDead($.chaperone_1))) {
      $.chaperone_1.SetObjLeaveCar($.gang_car_yd2);
      $.chaperone_2.SetObjLeaveCar($.gang_car_yd2);
    }
  }
  if (!(Char.IsDead($.chaperone_2)) && !(Char.IsDead($.chaperone_1)) && !(Car.IsDead($.gang_car_yd2))) {
    while ($.chaperone_2.IsInCar($.gang_car_yd2) || $.chaperone_1.IsInCar($.gang_car_yd2)) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_2) || Char.IsDead($.chaperone_1) || Car.IsDead($.gang_car_yd2)) {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
    }
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  if (!(Char.IsDead($.chaperone_2))) {
    Camera.PointAtChar($.chaperone_2, 15 /* FIXED */, 1 /* INTERPOLATION */);
  }
  if (!(Char.IsDead($.chaperone_1)) && !(Char.IsDead($.player_yd2))) {
    $.chaperone_1.LookAtCharAlways($.player_yd2);
  }
}

async function plinky_yd2() {
  await asyncWait(0);
  [$.y2_x, $.y2_y, $.y2_z] = $.player.GetCoordinates();
  if (!(Char.IsDead($.chaperone_2)) && !(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetHealth(100);
    $.chaperone_2.SetHealth(100);
    $.y2_y = $.y2_y - 1.0;
    $.chaperone_2.SetObjGotoCoordOnFoot($.y2_x, $.y2_y);
    $.chaperone_1.SetObjWaitOnFoot();
    $.chaperone_2.LookAtCharAlways($.player_yd2);
    $.player_yd2.LookAtCharAlways($.chaperone_2);
    if (!($.chaperone_2.LocateOnFoot2D($.y2_x, $.y2_y, 2.0, 2.0, 0 /* false */))) {
      // SCM GOTO → plinky_yd2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO plinky_yd2"); // fallback: would break linear control flow
    }
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.TurnToFacePlayer($.player);
    $.player_yd2.TurnToFaceChar($.chaperone_2);
    $.chaperone_2.SetObjWaitOnFoot();
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  Audio.LoadMissionAudio(YD2_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_C", 10000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Text.ClearPrints();
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetHealth(100);
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.SetHealth(100);
  }
  Audio.LoadMissionAudio(YD2_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_D", 10000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Text.ClearPrints();
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetHealth(100);
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.SetHealth(100);
  }
  Audio.LoadMissionAudio(YD2_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_CC", 10000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → poodle (not lowered; manual jump required)
      throw new Error("unresolved GOTO poodle"); // fallback: would break linear control flow
    }
  }
  Text.ClearPrints();
}

async function poodle() {
  $.player_yd2.StopLooking();
  $.player.GiveWeapon(3 /* WEAPONTYPE_UZI */, 150);
  await asyncWait(1000);
  $.player.SetCurrentWeapon(3 /* WEAPONTYPE_UZI */);
  while (!($.player.IsCurrentWeapon(3 /* WEAPONTYPE_UZI */))) {
    await asyncWait(0);
  }
  Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */);
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetHealth(100);
    $.chaperone_1.StopLooking();
    if (!(Car.IsDead($.gang_car_yd2))) {
      $.chaperone_1.SetObjEnterCarAsPassenger($.gang_car_yd2);
    }
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.SetHealth(100);
    $.chaperone_2.LookAtCharAlways($.player_yd2);
  }
  Audio.SetRadioChannel(2 /* JAH_RADIO */, 0);
  if (!(Car.IsDead($.gang_car_yd2))) {
    $.player_yd2.SetObjEnterCarAsDriver($.gang_car_yd2);
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  while (!($.player_yd2.IsInCar($.gang_car_yd2))) {
    await asyncWait(0);
    if (Car.IsDead($.gang_car_yd2)) {
      // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.chaperone_1))) {
      $.chaperone_1.SetHealth(100);
    }
    if (!(Char.IsDead($.chaperone_2))) {
      $.chaperone_2.SetHealth(100);
    }
  }
  if (!(Car.IsDead($.gang_car_yd2)) && !(Char.IsDead($.chaperone_2)) && !(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.StopLooking();
    $.chaperone_2.StopLooking();
    $.chaperone_2.SetObjEnterCarAsPassenger($.gang_car_yd2);
    while (!($.chaperone_2.IsInCar($.gang_car_yd2)) || !($.chaperone_1.IsInCar($.gang_car_yd2))) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_2) || Char.IsDead($.chaperone_1) || Car.IsDead($.gang_car_yd2)) {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
      if (!(Char.IsDead($.chaperone_1))) {
        $.chaperone_1.SetHealth(100);
      }
      if (!(Char.IsDead($.chaperone_2))) {
        $.chaperone_2.SetHealth(100);
      }
    }
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  if (!(Car.IsDead($.gang_car_yd2))) {
    $.gang_car_yd2.SetOnlyDamagedByPlayer(0 /* false */);
  }
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetCantBeDraggedOut(1 /* TRUE */);
    $.chaperone_1.SetStaysInCurrentLevel(0 /* FALSE */);
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.SetCantBeDraggedOut(1 /* TRUE */);
    $.chaperone_2.SetStaysInCurrentLevel(0 /* FALSE */);
  }
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.player.SetControl(1 /* on */);
  Audio.LoadMissionAudio(YD2_C1);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintSoon("YD2_E", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  $.blip_driveby_yd2 = Blip.AddForCoord($.driveby_x, $.driveby_y, -100.0);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  World.SetCarDensityMultiplier(1.0);
  Zone.SetPedInfo("TOWERS", 1 /* DAY */, 15, 0, 0, 700, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("TOWERS", 0 /* NIGHT */, 10, 0, 0, 800, 0, 0, 0, 0, 10);
  $.player.AlterWantedLevel($.wanted_yd2);
}

async function getting_there() {
  if (!(Car.IsDead($.gang_car_yd2))) {
    while (!($.player.IsInZone("TOWERS"))) {
      await asyncWait(0);
      if (!(Car.IsDead($.gang_car_yd2))) {
        if ($.gang_car_yd2.IsUpsidedown() && $.gang_car_yd2.IsStopped()) {
          $.flag_upsidedown = 1;
          // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
        }
        if (!($.gang_car_yd2.IsHealthGreater(250))) {
          if (!($.gang_car_yd2.Locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, 0 /* false */)) && !($.gang_car_yd2.Locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, 0 /* false */))) {
            $.flag_upsidedown = 1;
            // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
          }
        }
        if (!($.player.IsInCar($.gang_car_yd2))) {
          $.flag_upsidedown = 2;
          // SCM GOSUB player_out_of_car
          await player_out_of_car();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (!(Car.IsDead($.gang_car_yd2))) {
            if (!($.player.IsInCar($.gang_car_yd2))) {
              $.flag_upsidedown = 2;
              // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
            }
          }
          else {
            // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
          }
          $.gang_car_yd2.LockDoors(2 /* CARLOCK_LOCKED */);
        }
      }
      else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
    }
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  Audio.LoadMissionAudio(YD2_F);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_G1", 2500, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  Audio.LoadMissionAudio(YD2_G);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintSoon("YD2_G2", 2500, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  $.blip_driveby_yd2.Remove();
  Hud.DisplayCounterWithString($.body_count_yd2, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  while ($.body_count_yd2 < 10) {
    await asyncWait(0);
    if (!(Car.IsDead($.gang_car_yd2))) {
      if ($.gang_car_yd2.IsUpsidedown() && $.gang_car_yd2.IsStopped()) {
        $.flag_upsidedown = 1;
        // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
      }
      if (!($.gang_car_yd2.IsHealthGreater(250))) {
        if (!($.gang_car_yd2.Locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, 0 /* false */)) && !($.gang_car_yd2.Locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, 0 /* false */))) {
          $.flag_upsidedown = 1;
          // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
        }
      }
      if (!($.player.IsInCar($.gang_car_yd2))) {
        // SCM GOSUB player_out_of_car
        await player_out_of_car();
        // fallback if label was not emitted as async function: no-op continues linearly
        if (!(Car.IsDead($.gang_car_yd2))) {
          if (!($.player.IsInCar($.gang_car_yd2))) {
            $.flag_upsidedown = 2;
            // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
          }
        }
        else {
          // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
        }
      }
    }
    else {
      // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
    }
    $.driveby_total_1 = Player.GetNumOfModelsKilled(ped`GANG_DIABLO_A`);
    $.driveby_total_2 = Player.GetNumOfModelsKilled(ped`GANG_DIABLO_B`);
    $.body_count_yd2 = $.driveby_total_1 + $.driveby_total_2;
  }
  Audio.LoadMissionAudio(YD2_H);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_H", 2500, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  Hud.ClearCounter($.body_count_yd2);
}

async function back_to_yardie_turf() {
  $.blip_driveby_yd2 = Blip.AddForCoord($.yd2turf_x, $.yd2turf_y, 26.0);
  if (!(Car.IsDead($.gang_car_yd2))) {
    while (!($.gang_car_yd2.LocateStopped3D($.yd2turf_x, $.yd2turf_y, 26.0, 5.0, 5.0, 5.0, 1 /* true */))) {
      await asyncWait(0);
      if (!(Car.IsDead($.gang_car_yd2))) {
        if ($.gang_car_yd2.IsUpsidedown() && $.gang_car_yd2.IsStopped()) {
          $.flag_upsidedown = 1;
          // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
        }
        if (!($.gang_car_yd2.IsHealthGreater(250))) {
          if (!($.gang_car_yd2.Locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, 0 /* false */)) && !($.gang_car_yd2.Locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, 0 /* false */))) {
            $.flag_upsidedown = 1;
            // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
          }
        }
        if (!($.player.IsInCar($.gang_car_yd2))) {
          // SCM GOSUB player_out_of_car
          await player_out_of_car();
          // fallback if label was not emitted as async function: no-op continues linearly
          if (!(Car.IsDead($.gang_car_yd2))) {
            if (!($.player.IsInCar($.gang_car_yd2))) {
              $.flag_upsidedown = 2;
              // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
            }
          }
          else {
            // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
          }
        }
      }
      else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
    }
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  $.player.SetControl(0 /* off */);
  if (!(Char.IsDead($.chaperone_1)) && !(Char.IsDead($.chaperone_2)) && !(Car.IsDead($.gang_car_yd2))) {
    $.gang_car_yd2.SetHealth(850);
    $.chaperone_1.SetObjLeaveCar($.gang_car_yd2);
    $.chaperone_2.SetObjLeaveCar($.gang_car_yd2);
  }
  else {
    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
  }
  Audio.LoadMissionAudio(YD2_OK);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("YD2_L", 4000, 1);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  $.player.SetControl(1 /* on */);
  // SCM GOTO → mission_yd2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_yd2_passed"); // fallback: would break linear control flow
}

async function mission_yd2_failed() {
  if (!(Char.IsDead($.chaperone_1)) && !(Car.IsDead($.gang_car_yd2))) {
    $.chaperone_1.SetObjLeaveCar($.gang_car_yd2);
  }
  if (!(Char.IsDead($.chaperone_2)) && !(Car.IsDead($.gang_car_yd2))) {
    $.chaperone_2.SetObjLeaveCar($.gang_car_yd2);
  }
  if ($.flag_upsidedown == 1) {
    Audio.LoadMissionAudio(YD2_D);
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
    }
    Audio.PlayMissionAudio();
    Text.PrintNow("YD2_M", 4000, 1);
  }
  if ($.flag_upsidedown == 2) {
    Audio.LoadMissionAudio(YD2_E);
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
    }
    Audio.PlayMissionAudio();
    Text.PrintNow("YD2_F", 4000, 1);
  }
  if (!(Char.IsDead($.chaperone_1)) && !(Car.IsDead($.gang_car_yd2))) {
    while ($.chaperone_1.IsInCar($.gang_car_yd2)) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_1)) {
        // SCM GOTO → boddle (not lowered; manual jump required)
        throw new Error("unresolved GOTO boddle"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.gang_car_yd2)) {
        // SCM GOTO → boddle (not lowered; manual jump required)
        throw new Error("unresolved GOTO boddle"); // fallback: would break linear control flow
      }
    }
  }
}

async function boddle() {
  if (!(Char.IsDead($.chaperone_2)) && !(Car.IsDead($.gang_car_yd2))) {
    while ($.chaperone_2.IsInCar($.gang_car_yd2)) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_2)) {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.gang_car_yd2)) {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_yd2_failed_assert"); // fallback: would break linear control flow
      }
    }
  }
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
    while (!($.chaperone_1.IsCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */))) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_1)) {
        // SCM GOTO → oink (not lowered; manual jump required)
        throw new Error("unresolved GOTO oink"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead($.chaperone_1))) {
      $.chaperone_1.TurnToFacePlayer($.player);
      if ($.player.IsInZone("TOWERS")) {
        $.chaperone_1.SetThreatSearch(9 /* THREAT_GANG_DIABLO */);
      }
      $.chaperone_1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
}

async function oink() {
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30);
    while (!($.chaperone_2.IsCurrentWeapon(3 /* WEAPONTYPE_UZI */))) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_2)) {
        // SCM GOTO → poink (not lowered; manual jump required)
        throw new Error("unresolved GOTO poink"); // fallback: would break linear control flow
      }
    }
    if (!(Char.IsDead($.chaperone_2))) {
      $.chaperone_2.TurnToFacePlayer($.player);
      if ($.player.IsInZone("TOWERS")) {
        $.chaperone_2.SetThreatSearch(9 /* THREAT_GANG_DIABLO */);
      }
      $.chaperone_2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    }
  }
}

async function poink() {

}

async function mission_yd2_failed_assert() {
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_yd2_passed() {
  $.flag_yardie_mission2_passed = 1;
  if (!(Char.IsDead($.chaperone_1)) && !(Char.IsDead($.chaperone_2)) && !(Car.IsDead($.gang_car_yd2))) {
    while ($.chaperone_1.IsInCar($.gang_car_yd2) || $.chaperone_2.IsInCar($.gang_car_yd2)) {
      await asyncWait(0);
      if (Char.IsDead($.chaperone_1) || Char.IsDead($.chaperone_2) || Car.IsDead($.gang_car_yd2)) {
        // SCM GOTO → filby (not lowered; manual jump required)
        throw new Error("unresolved GOTO filby"); // fallback: would break linear control flow
      }
    }
  }
  else {
    // SCM GOTO → filby (not lowered; manual jump required)
    throw new Error("unresolved GOTO filby"); // fallback: would break linear control flow
  }
}

async function filby() {
  if (!(Char.IsDead($.chaperone_1))) {
    $.chaperone_1.SetObjFleeOnFootTillSafe();
  }
  if (!(Char.IsDead($.chaperone_2))) {
    $.chaperone_2.SetObjFleeOnFootTillSafe();
  }
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(YD2);
  Stat.PlayerMadeProgress(1);
  Game.SetThreatForPedType(9 /* PEDTYPE_GANG_DIABLO */, 0 /* THREAT_PLAYER1 */);
  // START_NEW_SCRIPT yardie_mission3_loop
  return;
}

async function mission_cleanup_yd2() {
  $.blip_driveby_yd2.Remove();
  $.flag_player_on_mission = 0;
  $.flag_player_on_yardie_mission = 0;
  Hud.ClearCounter($.body_count_yd2);
  $.blip_driveby_yd2.Remove();
  Hud.SwitchWidescreen(0 /* off */);
  Camera.RestoreJumpcut();
  if (!(Car.IsDead($.gang_car_yd2))) {
    $.gang_car_yd2.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_B`);
  Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`);
  Zone.SetPedInfo("TOWERS", 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("TOWERS", 0 /* NIGHT */, 10, 0, 0, 500, 0, 0, 0, 0, 10);
  Mission.Finish();
  return;
}

async function player_out_of_car() {
  if (!(Car.IsDead($.gang_car_yd2))) {
    $.gang_car_yd2.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  while ($.timer_dif_yd2 < 7500) {
    await asyncWait(0);
    if (!(Car.IsDead($.gang_car_yd2))) {
      if (!($.gang_car_yd2.IsHealthGreater(250))) {
        if (!($.gang_car_yd2.Locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, 0 /* false */)) && !($.gang_car_yd2.Locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, 0 /* false */))) {
          $.flag_upsidedown = 1;
          // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_yd2_failed"); // fallback: would break linear control flow
        }
      }
      if ($.flag_out_of_car_message == 0) {
        Audio.LoadMissionAudio(YD2_ASS);
        while (!(Audio.HasMissionAudioLoaded())) {
          await asyncWait(0);
        }
        Audio.PlayMissionAudio();
        Text.PrintNow("YD2_N", 3000, 1);
        $.flag_out_of_car_message = 1;
        $.timer_start_yd2 = Clock.GetGameTimer();
      }
      $.timer_now_yd2 = Clock.GetGameTimer();
      $.timer_dif_yd2 = $.timer_now_yd2 - $.timer_start_yd2;
      if (!(Car.IsDead($.gang_car_yd2))) {
        if ($.player.IsInCar($.gang_car_yd2)) {
          $.flag_out_of_car_message = 0;
          return;
        }
      }
    }
  }
  $.gang_car_yd2.LockDoors(2 /* CARLOCK_LOCKED */);
  return;
}

export async function yard2() {
  // MissionBoundary
  // SCM GOSUB mission_start_yd2
  await mission_start_yd2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_yd2_failed
    await mission_yd2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_yd2
  await mission_cleanup_yd2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT gang_car_yd2
  // VAR_INT chaperone_1 chaperone_2
  // VAR_INT body_count_yd2
  // VAR_INT player_yd2 wanted_yd2 flag_clear
  // VAR_INT blip_driveby_yd2
  // VAR_INT flag_upsidedown flag_chap_1_n&v flag_chap_2_n&v flag_out_of_car_message
  // VAR_INT driveby_total_1 driveby_total_2
  // VAR_INT timer_dif_yd2 timer_start_yd2 timer_now_yd2
  // VAR_FLOAT driveby_x driveby_y
  // VAR_FLOAT yd2turf_x yd2turf_y
  // VAR_FLOAT y2_x y2_y y2_z
}
