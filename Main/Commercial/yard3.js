// Generated from Main/Commercial/yard3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_yd3() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_yardie_mission = 1;
  await asyncWait(0);
  {
  World.SetPedDensityMultiplier(0.0);
  Game.SetPoliceIgnorePlayer($.player, 1 /* on */);
  Cutscene.Load(YD_PH3);
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
  Text.PrintNow("YD3_A", 10000, 1);
  while ($.cs_time < 3700) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_A1", 10000, 1);
  while ($.cs_time < 6370) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_B", 10000, 1);
  while ($.cs_time < 8658) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_B1", 10000, 1);
  while ($.cs_time < 10408) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_B2", 10000, 1);
  while ($.cs_time < 13950) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_C", 10000, 1);
  while ($.cs_time < 16920) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("YD3_C1", 10000, 1);
  while ($.cs_time < 20066) {
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
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  }
  await asyncWait(1000);
  $.counter_cars_yd3 = 0;
  $.blip_x_yd3 = 260.0;
  $.blip_y_yd3 = -798.0;
  $.loop_2_passport = 0;
  $.flag_player_in_diablocar = 0;
  $.flag_player_in_mafiacar = 0;
  $.flag_player_in_yakuzacar = 0;
  $.flag_diablo_delivered_yd3 = 0;
  $.flag_yakuzacar_delivered_yd3 = 0;
  $.flag_mafia_delivered_yd3 = 0;
  $.flag_dam_message = 0;
  $.flag_garage_message = 0;
  $.flag_already_boosted_message = 0;
  $.flag_messages = 0;
  $.blip_garage_yd3 = Blip.AddForCoord($.blip_x_yd3, $.blip_y_yd3, -100.0);
}

async function loop_1() {
  await asyncWait(0);
  // SCM GOSUB blippage
  await blippage();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.player.IsInAnyCar()) {
    if ($.player.IsInModel(130 /* CAR_DIABLOS */)) {
      if ($.flag_diablo_delivered_yd3 == 0) {
        $.gangcar_yd3 = $.player.StoreCarIsIn();
        $.gangcar_yd3.SetCanRespray(0 /* False */);
        $.flag_player_in_diablocar = 1;
        $.flag_player_in_mafiacar = 0;
        $.flag_player_in_yakuzacar = 0;
        // SCM GOSUB damage_check
        await damage_check();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.flag_diablo_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
        Text.PrintNow("YD3_E", 3000, 1);
        $.flag_already_boosted_message = 1;
      }
    }
    if ($.player.IsInModel(127 /* CAR_MAFIA */)) {
      if ($.flag_mafia_delivered_yd3 == 0) {
        $.gangcar_yd3 = $.player.StoreCarIsIn();
        $.gangcar_yd3.SetCanRespray(0 /* False */);
        $.flag_player_in_diablocar = 0;
        $.flag_player_in_mafiacar = 1;
        $.flag_player_in_yakuzacar = 0;
        // SCM GOSUB damage_check
        await damage_check();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.flag_mafia_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
        Text.PrintNow("YD3_F", 3000, 1);
        $.flag_already_boosted_message = 1;
      }
    }
    if ($.player.IsInModel(129 /* CAR_YAKUZA */)) {
      if ($.flag_yakuzacar_delivered_yd3 == 0) {
        $.gangcar_yd3 = $.player.StoreCarIsIn();
        $.gangcar_yd3.SetCanRespray(0 /* False */);
        $.flag_player_in_diablocar = 0;
        $.flag_player_in_mafiacar = 0;
        $.flag_player_in_yakuzacar = 1;
        // SCM GOSUB damage_check
        await damage_check();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.flag_yakuzacar_delivered_yd3 == 1 && $.flag_already_boosted_message == 0) {
        Text.PrintNow("YD3_G", 3000, 1);
        $.flag_already_boosted_message = 1;
      }
    }
  }
  else {
    $.flag_dam_message = 0;
    $.flag_garage_message = 0;
    $.flag_already_boosted_message = 0;
  }
  if ($.loop_2_passport == 0) {
    // SCM GOTO → loop_1 (not lowered; manual jump required)
    throw new Error("unresolved GOTO loop_1"); // fallback: would break linear control flow
  }
}

async function loop_2() {
  // SCM GOSUB damage_check
  await damage_check();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.garage_yd3.IsCarInMission()) {
    if ($.flag_player_in_diablocar == 1 && $.flag_diablo_delivered_yd3 == 0) {
      $.flag_diablo_delivered_yd3 = 1;
      ++$.counter_cars_yd3;
      $.flag_player_in_diablocar = 0;
      $.loop_2_passport = 0;
      Text.PrintNow("YD3_H", 3000, 1);
      Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
    }
    if ($.flag_player_in_mafiacar == 1 && $.flag_mafia_delivered_yd3 == 0) {
      $.flag_mafia_delivered_yd3 = 1;
      ++$.counter_cars_yd3;
      $.flag_player_in_mafiacar = 0;
      $.loop_2_passport = 0;
      Text.PrintNow("YD3_I", 3000, 1);
      Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
    }
    if ($.flag_player_in_yakuzacar == 1 && $.flag_yakuzacar_delivered_yd3 == 0) {
      ++$.counter_cars_yd3;
      $.flag_yakuzacar_delivered_yd3 = 1;
      $.flag_player_in_yakuzacar = 0;
      $.loop_2_passport = 0;
      Text.PrintNow("YD3_J", 3000, 1);
      Sound.AddOneOffSound(260.0, -790.0, 28.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
    }
  }
  if (!(Car.IsDead($.gangcar_yd3))) {
    if ($.gangcar_yd3.IsInArea2D($.garage_min_x_yd3, $.garage_min_y_yd3, $.garage_max_x_yd3, $.garage_max_y_yd3, 0 /* false */) && !($.player.IsInArea2D($.garage_min_x_yd3, $.garage_min_y_yd3, $.garage_max_x_yd3, $.garage_max_y_yd3, 0 /* false */)) && !($.gangcar_yd3.IsHealthGreater(800))) {
      $.gangcar_yd3.MarkAsNoLongerNeeded();
    }
  }
  if ($.counter_cars_yd3 < 3) {
    // SCM GOTO → loop_1 (not lowered; manual jump required)
    throw new Error("unresolved GOTO loop_1"); // fallback: would break linear control flow
  }
  // SCM GOTO → mission_yd3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_yd3_passed"); // fallback: would break linear control flow
}

async function mission_yd3_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  return;
}

async function mission_yd3_passed() {
  $.flag_yardie_mission3_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(YD3);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT yardie_mission4_loop
  return;
}

async function mission_cleanup_yd3() {
  $.blip_garage_yd3.Remove();
  $.garage_yd3.SetTargetCarForMission(-1);
  $.flag_player_on_mission = 0;
  $.flag_player_on_yardie_mission = 0;
  Mission.Finish();
  return;
}

async function blippage() {
  if ($.flag_dam_message == 1) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      $.blip_garage_yd3.Remove();
      $.blip_garage_yd3 = Blip.AddSpriteForCoord(925.3, -359.2, 11.0, 18 /* RADAR_SPRITE_SPRAY */);
    }
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      $.blip_garage_yd3.Remove();
      $.blip_garage_yd3 = Blip.AddSpriteForCoord(380.4, -493.8, 26.2, 18 /* RADAR_SPRITE_SPRAY */);
    }
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      $.blip_garage_yd3.Remove();
      $.blip_garage_yd3 = Blip.AddSpriteForCoord(-1142.1, 34.0, 59.0, 18 /* RADAR_SPRITE_SPRAY */);
    }
  }
  else {
    $.blip_garage_yd3.Remove();
    $.blip_garage_yd3 = Blip.AddForCoord($.blip_x_yd3, $.blip_y_yd3, -100.0);
  }
  return;
}

async function damage_check() {
  if ($.player.IsInAnyCar()) {
    if (!(Car.IsDead($.gangcar_yd3))) {
      if ($.player.IsInCar($.gangcar_yd3)) {
        if ($.gangcar_yd3.IsHealthGreater(900) || !($.gangcar_yd3.IsVisiblyDamaged())) {
          if ($.flag_garage_message == 0) {
            Text.PrintNow("YD3_L", 3000, 1);
            $.garage_yd3.SetTargetCarForMission($.gangcar_yd3);
            $.flag_garage_message = 1;
            $.flag_dam_message = 0;
            $.loop_2_passport = 1;
          }
        }
        else {
          if ($.flag_dam_message == 0) {
            Text.PrintNow("YD3_K", 3000, 1);
            $.garage_yd3.SetTargetCarForMission(-1);
            $.flag_dam_message = 1;
            $.flag_garage_message = 0;
            $.loop_2_passport = 0;
          }
        }
      }
    }
  }
  return;
}

export async function yard3() {
  // MissionBoundary
  // SCM GOSUB mission_start_yd3
  await mission_start_yd3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_yd3_failed
    await mission_yd3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_yd3
  await mission_cleanup_yd3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT gangcar_yd3
  // VAR_INT flag_player_in_diablocar flag_player_in_mafiacar flag_player_in_yakuzacar
  // VAR_INT flag_diablo_delivered_yd3 flag_yakuzacar_delivered_yd3 flag_mafia_delivered_yd3
  // VAR_INT loop_2_passport
  // VAR_INT counter_cars_yd3
  // VAR_INT blip_garage_yd3
  // VAR_INT flag_dam_message flag_garage_message flag_already_boosted_message
  // VAR_INT flag_messages
  // VAR_FLOAT blip_x_yd3 blip_y_yd3
}
