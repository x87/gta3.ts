// Generated from Main/Industrial/health.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function health_info_start() {
  // ScriptName
  $.flag_player_on_mission = 1;
  await asyncWait(0);
  $.info_time_lapsed = 0;
  $.info_time_now = 0;
  $.info_time_start = 0;
  $.flag_info = 0;
  $.flag_bottom = 0;
  $.wanted_level = 0;
  $.flag_intro_jump = 0;
  $.player.SetControl(0 /* off */);
  $.wanted_level = $.player.StoreWantedLevel();
  $.player.ClearWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, 1 /* on */);
  Streaming.RequestModel(car`AMBULANCE`);
  Streaming.RequestModel(ped`MEDIC`);
  while (!(Streaming.HasModelLoaded(car`AMBULANCE`)) || !(Streaming.HasModelLoaded(ped`MEDIC`))) {
    await asyncWait(0);
  }
  Camera.SetFixedPosition(1138.6, -600.0, 18.0, 0.0, 0.0, 0.0);
  Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */);
  while ($.flag_info < 8) {
    await asyncWait(0);
    if ($.flag_info == 0) {
      $.info_time_start = Clock.GetGameTimer();
      World.ClearArea(1141.0, -622.0, 14.8, 30.0, 1 /* true */);
      World.ClearArea(1125.77, -594.0, 14.8, 10.0, 1 /* true */);
      World.SetCarDensityMultiplier(0.0);
      World.SetPedDensityMultiplier(0.0);
      $.amb_info = Car.Create(99 /* CAR_AMBULANCE */, 1140.2, -621.5, 14.8);
      $.amb_info.SetHeading(90.0);
      $.medic_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MEDIC`, 1136.75, -617.8, 14.7);
      $.medic_info.SetHeading(25.0);
      $.medic_info.SetIdle();
      $.medic_info.SetStayInSamePlace(1 /* true */);
      Text.PrintHelp("HEAL_A");
      Hud.FlashObject(4 /* HUD_FLASH_HEALTH */);
      $.flag_info = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.info_time_now = Clock.GetGameTimer();
      $.info_time_lapsed = $.info_time_now - $.info_time_start;
    }
    if ($.info_time_lapsed > 3000 && $.flag_info < 2) {
      Hud.FlashObject(-1);
    }
    if ($.info_time_lapsed > 5000 && $.flag_info == 1) {
      Text.PrintHelp("HEAL_B");
      $.flag_info = 2;
    }
    if ($.info_time_lapsed > 11000 && $.flag_info == 2) {
      if (!(Car.IsDead($.amb_info)) && !(Char.IsDead($.medic_info))) {
        Camera.SetFixedPosition(1133.0, -613.5, 17.0, 0.0, 0.0, 0.0);
        Camera.PointAtCar($.amb_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
        $.medic_info.SetStayInSamePlace(0 /* false */);
        $.medic_info.SetObjEnterCarAsDriver($.amb_info);
      }
      Text.PrintHelp("HEAL_C");
      $.flag_info = 3;
    }
    if ($.info_time_lapsed > 14000 && $.flag_info == 3) {
      Text.PrintHelp("WANT_I");
      $.flag_info = 4;
    }
    if ($.info_time_lapsed > 17500 && $.flag_info == 4) {
      $.flag_info = 5;
    }
    if ($.info_time_lapsed > 19500 && $.flag_info == 5) {
      Text.PrintHelp("HEAL_E");
      Camera.SetFixedPosition(1138.6, -600.0, 18.0, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(1144.3, -603.5, 15.0, 2 /* JUMP_CUT */);
      $.health_pickup_info = Pickup.Create(health, 14 /* PICKUP_ON_STREET_SLOW */, 1144.3, -603.5, 15.0);
      if (!(Car.IsDead($.amb_info))) {
        $.amb_info.WanderRandomly();
      }
      $.flag_info = 6;
    }
    if ($.info_time_lapsed > 22500 && $.flag_info == 6) {
      Camera.PointAtPoint(1147.0, -601.1, 15.0, 1 /* INTERPOLATION */);
      $.armour_pickup_info = Pickup.Create(bodyarmour, 14 /* PICKUP_ON_STREET_SLOW */, 1147.0, -601.1, 15.0);
      $.flag_info = 7;
    }
    if ($.info_time_lapsed > 24000 && $.flag_info == 7) {
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      Text.ClearHelp();
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.amb_info.Delete();
      $.medic_info.Delete();
      $.health_pickup_info.Remove();
      $.armour_pickup_info.Remove();
      Camera.RestoreJumpcut();
      $.player.SetControl(1 /* on */);
      $.player.AlterWantedLevel($.wanted_level);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.flag_info = 8;
    }
    if ($.info_time_lapsed > 16500 && $.flag_info < 7) {
      if (!(Car.IsDead($.amb_info)) && !(Char.IsDead($.medic_info))) {
        if ($.medic_info.IsInCar($.amb_info) && $.flag_bottom == 0) {
          $.amb_info.SetCruiseSpeed(40.0);
          $.amb_info.SetDrivingStyle(2);
          $.amb_info.SwitchSiren(1 /* ON */);
          $.amb_info.GotoCoordinates(1023.0, -480.0, 19.7);
          $.flag_bottom = 1;
        }
      }
    }
    if ($.flag_intro_jump == 0 && $.flag_info < 7) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        $.info_time_lapsed = 24001;
        $.flag_info = 7;
        $.flag_intro_jump = 1;
      }
    }
  }
  return;
}

async function health_info_cleanup() {
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  $.amb_info.MarkAsNoLongerNeeded();
  $.medic_info.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(car`AMBULANCE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`MEDIC`);
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  $.flag_player_on_mission = 0;
  $.flag_health_info = 1;
  Mission.Finish();
  return;
}

export async function health() {
  // MissionBoundary
  // SCM GOSUB health_info_start
  await health_info_start();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB health_info_cleanup
    await health_info_cleanup();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB health_info_cleanup
  await health_info_cleanup();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT amb_info medic_info flag_bottom
  // VAR_INT health_pickup_info armour_pickup_info
  // VAR_INT info_time_lapsed info_time_now info_time_start flag_info
}
