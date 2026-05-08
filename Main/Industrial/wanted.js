// Generated from Main/Industrial/wanted.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function wanted_info_start() {
  // ScriptName
  $.flag_player_on_mission = 1;
  await asyncWait(0);
  $.info_time_lapsed = 0;
  $.info_time_now = 0;
  $.info_time_start = 0;
  $.flag_info = 0;
  $.flag_copcar_progress = 0;
  $.flag_swat_progress = 0;
  $.flag_intro_jump = 0;
  $.wanted_level = 0;
  $.wanted_level = $.player.StoreWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, 1 /* on */);
  $.player.SetControl(0 /* off */);
  Streaming.Switch(0 /* OFF */);
  Streaming.RequestModel(car`ENFORCER`);
  Streaming.RequestModel(ped`SWAT`);
  Streaming.RequestModel(car`DIABLOS`);
  Streaming.RequestModel(ped`GANG_DIABLO_B`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`ENFORCER`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ped`SWAT`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ped`GANG_DIABLO_B`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(car`DIABLOS`))) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  while ($.flag_info < 13) {
    await asyncWait(0);
    if ($.flag_info == 0) {
      $.info_time_start = Clock.GetGameTimer();
      $.copcar_info = Car.Create(109 /* CAR_POLICE */, 1110.0, -823.0, 15.0);
      $.copcar_info.SetHeading(330.0);
      $.cop_info = Char.CreateInsideCar($.copcar_info, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
      $.copcar2_info = Car.Create(109 /* CAR_POLICE */, 1105.0, -828.0, 15.0);
      $.copcar2_info.SetHeading(330.0);
      $.cop2_info = Char.CreateInsideCar($.copcar2_info, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
      $.diablocar_info = Car.Create(130 /* CAR_DIABLOS */, 1115.0, -818.0, 15.0);
      $.diablocar_info.SetHeading(0.0);
      $.diablo_info = Char.CreateInsideCar($.diablocar_info, 9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_B`);
      World.SetCarDensityMultiplier(0.3);
      World.SetPedDensityMultiplier(0.0);
      Text.PrintHelp("WANT_A");
      $.flag_info = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.info_time_now = Clock.GetGameTimer();
      $.info_time_lapsed = $.info_time_now - $.info_time_start;
    }
    if ($.info_time_lapsed > 3500 && $.flag_info == 1) {
      Text.PrintHelp("WANT_G");
      if (!(Car.IsDead($.copcar_info)) && !(Car.IsDead($.copcar2_info)) && !(Car.IsDead($.diablocar_info))) {
        $.copcar2_info.SetCruiseSpeed(75.0);
        $.copcar2_info.SetDrivingStyle(3);
        $.copcar2_info.SetRamCar($.diablocar_info);
        $.copcar_info.SetCruiseSpeed(70.0);
        $.copcar_info.SetDrivingStyle(3);
        $.copcar_info.SetRamCar($.diablocar_info);
      }
      Camera.SetFixedPosition(1134.0, -695.0, 18.0, 0.0, 0.0, 0.0);
      if (!(Car.IsDead($.diablocar_info))) {
        Camera.PointAtCar($.diablocar_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
      }
      if (!(Car.IsDead($.diablocar_info))) {
        $.diablocar_info.SetCruiseSpeed(50.0);
        $.diablocar_info.SetDrivingStyle(2);
        $.diablocar_info.GotoCoordinates(982.0, -617.0, 15.0);
      }
      if (!(Car.IsDead($.copcar_info)) && !(Car.IsDead($.copcar2_info))) {
        $.copcar_info.SwitchSiren(1 /* ON */);
        $.copcar2_info.SwitchSiren(1 /* ON */);
      }
      $.flag_info = 2;
    }
    if ($.info_time_lapsed > 5500 && $.flag_copcar_progress == 0) {
      World.ClearArea(1142.0, -666.0, 14.8, 10.0, 1 /* true */);
      $.swatvan_info = Car.Create(110 /* CAR_ENFORCER */, 1142.0, -666.0, 14.8);
      $.swatvan_info.SetHeading(90.0);
      $.swatvan_info.LockDoors(1 /* CARLOCK_UNLOCKED */);
      $.swatvan_info.SetIdle();
      $.swat2_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 1138.0, -671.0, 15.0);
      $.swat1_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 1137.8, -661.3, 15.0);
      $.swat1_info.GiveWeapon(6 /* WEAPONTYPE_M16 */, 60);
      $.swat2_info.SetHeading(110.0);
      $.swat1_info.SetHeading(80.0);
      $.swat1_info.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
      if (!(Char.IsDead($.diablo_info))) {
        $.swat1_info.LookAtCharAlways($.diablo_info);
      }
      if (!(Char.IsDead($.cop_info))) {
        $.swat2_info.LookAtCharAlways($.cop_info);
      }
      $.flag_copcar_progress = 1;
    }
    if ($.info_time_lapsed > 7500 && $.flag_info == 2) {
      Text.PrintHelp("WANT_H");
      $.flag_info = 3;
    }
    if ($.info_time_lapsed > 10500 && $.flag_info == 3) {
      Text.PrintHelp("WANT_I");
      $.flag_info = 4;
    }
    if ($.info_time_lapsed > 12500 && $.flag_info == 4) {
      Text.PrintHelp("WANT_B");
      if (!(Car.IsDead($.swatvan_info))) {
        Camera.SetFixedPosition(1135.8, -673.0, 14.8, 0.0, 0.0, 0.0);
        Camera.PointAtCar($.swatvan_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
        $.copcar_info.Delete();
        $.copcar2_info.Delete();
        $.diablocar_info.Delete();
      }
      $.flag_info = 5;
    }
    if ($.info_time_lapsed > 13500 && $.flag_info == 5) {
      if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat2_info))) {
        $.swat2_info.StopLooking();
        $.swat2_info.SetObjEnterCarAsDriver($.swatvan_info);
      }
      $.flag_info = 6;
    }
    if ($.info_time_lapsed > 16000 && $.flag_info == 6) {
      Text.PrintHelp("WANT_C");
      $.player.AlterWantedLevel(1);
      if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat1_info))) {
        $.swat1_info.SetObjEnterCarAsPassenger($.swatvan_info);
      }
      $.flag_info = 7;
    }
    if ($.info_time_lapsed > 18000 && $.flag_info == 7) {
      Text.PrintHelp("WANT_D");
      $.player.AlterWantedLevel(2);
      $.flag_info = 8;
    }
    if ($.info_time_lapsed > 20000 && $.flag_info == 8) {
      Text.PrintHelp("WANT_E");
      $.player.AlterWantedLevel(3);
      $.flag_info = 9;
    }
    if ($.info_time_lapsed > 22000 && $.flag_info == 9) {
      Text.PrintHelp("WANT_F");
      $.flag_info = 10;
    }
    if ($.info_time_lapsed > 26000 && $.flag_info == 10) {
      Camera.SetFixedPosition(1135.0, -672.5, 15.5, 0.0, 0.0, 0.0);
      Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
      Text.PrintHelp("WANT_J");
      $.bribe_pickup = Pickup.Create(bribe, 14 /* PICKUP_ON_STREET_SLOW */, 1143.0, -671.0, 15.0);
      Camera.PointAtPoint(1143.0, -671.0, 15.0, 1 /* INTERPOLATION */);
      $.flag_info = 11;
    }
    if ($.info_time_lapsed > 30000 && $.flag_info == 11) {
      $.flag_info = 12;
    }
    if ($.info_time_lapsed > 34000 && $.flag_info == 12) {
      Text.ClearHelp();
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.bribe_pickup.Remove();
      $.diablo_info.Delete();
      $.diablocar_info.Delete();
      $.cop_info.Delete();
      $.copcar_info.Delete();
      $.cop2_info.Delete();
      $.copcar2_info.Delete();
      $.swat1_info.Delete();
      $.swat2_info.Delete();
      $.swatvan_info.Delete();
      Camera.RestoreJumpcut();
      $.player.SetControl(1 /* on */);
      $.player.AlterWantedLevel($.wanted_level);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.flag_info = 13;
    }
    if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat1_info)) && !(Char.IsDead($.swat2_info))) {
      if ($.flag_swat_progress == 0 && $.info_time_lapsed > 21000) {
        if ($.swat1_info.IsInCar($.swatvan_info) && $.swat2_info.IsInCar($.swatvan_info)) {
          $.swatvan_info.SetCruiseSpeed(10.0);
          $.swatvan_info.SetDrivingStyle(2);
          $.swatvan_info.GotoCoordinatesAccurate(1133.0, -669.0, 15.0);
          $.flag_swat_progress = 1;
        }
      }
    }
    if (!(Car.IsDead($.swatvan_info))) {
      if ($.swatvan_info.Locate2D(1133.0, -669.0, 3.0, 3.0, 0 /* false */) && $.flag_swat_progress == 1 && $.info_time_lapsed > 22000) {
        $.swatvan_info.GotoCoordinates(982.0, -617.0, 15.0);
        $.swatvan_info.SetCruiseSpeed(30.0);
        $.swatvan_info.SetDrivingStyle(3);
        $.swatvan_info.SwitchSiren(1 /* ON */);
        $.flag_swat_progress = 2;
      }
    }
    if ($.flag_intro_jump == 0 && $.flag_info < 12) {
      if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
        $.info_time_lapsed = 34001;
        $.flag_info = 12;
        $.flag_intro_jump = 1;
      }
    }
  }
  return;
}

async function wanted_info_cleanup() {
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* off */);
  $.player.SetControl(1 /* on */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* off */);
  if (!(Car.IsDead($.swatvan_info))) {
    $.swatvan_info.WanderRandomly();
  }
  if (!(Car.IsDead($.copcar_info))) {
    $.copcar_info.WanderRandomly();
  }
  if (!(Car.IsDead($.diablocar_info))) {
    $.diablocar_info.WanderRandomly();
  }
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  $.swatvan_info.MarkAsNoLongerNeeded();
  $.copcar_info.MarkAsNoLongerNeeded();
  $.diablocar_info.MarkAsNoLongerNeeded();
  $.cop_info.MarkAsNoLongerNeeded();
  $.swat1_info.MarkAsNoLongerNeeded();
  $.swat2_info.MarkAsNoLongerNeeded();
  $.diablo_info.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(ped`COP`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`);
  Streaming.MarkModelAsNoLongerNeeded(car`DIABLOS`);
  Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`);
  Streaming.MarkModelAsNoLongerNeeded(car`POLICE`);
  Game.SetSwatRequired(0 /* FALSE */);
  $.flag_player_on_mission = 0;
  $.flag_wanted_info = 1;
  Mission.Finish();
  return;
}

export async function wanted() {
  // MissionBoundary
  // SCM GOSUB wanted_info_start
  await wanted_info_start();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB wanted_info_cleanup
  await wanted_info_cleanup();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT copcar_info copcar2_info swatvan_info cop_info cop2_info flag_copcar_progress
  // VAR_INT swat1_info swat2_info flag_swat_progress bribe_pickup
  // VAR_INT wanted_level diablocar_info diablo_info
  // VAR_FLOAT car_x car_y car_z
}
