// Generated from Main/Industrial/wanted.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function wanted_info_start() {
  // ScriptName
  $.flag_player_on_mission = 1;
  //Set Variables
  await asyncWait(0);
  $.info_time_lapsed = 0;
  $.info_time_now = 0;
  $.info_time_start = 0;
  $.flag_info = 0;
  $.flag_copcar_progress = 0;
  $.flag_swat_progress = 0;
  $.flag_intro_jump = 0;
  //Set Coords
  //Mission Script
  $.wanted_level = 0;
  //CLEAR_WANTED_LEVEL player
  $.wanted_level = $.player.storeWantedLevel();
  Game.SetPoliceIgnorePlayer($.player, true /* on */);
  //SWITCH_WIDESCREEN on
  $.player.setControl(false /* off */);
  //SET_SWAT_REQUIRED TRUE
  Streaming.Switch(false /* OFF */);
  //REQUEST_MODEL CAR_RUMPO
  Streaming.RequestModel(car`ENFORCER`);
  Streaming.RequestModel(ped`SWAT`);
  Streaming.RequestModel(car`DIABLOS`);
  Streaming.RequestModel(ped`GANG_DIABLO_B`);
  Streaming.LoadAllModelsNow();
  //PRINT_NOW TEST1 1000 1
  while (!(Streaming.HasModelLoaded(car`ENFORCER`))) {
    //PRINT_NOW TEST1 1000 1
    await asyncWait(0);
  }
  //PRINT_NOW TEST2 1000 1
  while (!(Streaming.HasModelLoaded(ped`SWAT`))) {
    //PRINT_NOW TEST2 1000 1
    await asyncWait(0);
  }
  //PRINT_NOW TEST3 1000 1
  while (!(Streaming.HasModelLoaded(ped`GANG_DIABLO_B`))) {
    //PRINT_NOW TEST3 1000 1
    await asyncWait(0);
  }
  //PRINT_NOW TEST4 1000 1
  while (!(Streaming.HasModelLoaded(car`DIABLOS`))) {
    //PRINT_NOW TEST4 1000 1
    await asyncWait(0);
  }
  Streaming.Switch(true /* ON */);
  //SET_FIXED_CAMERA_POSITION 1135.0 -672.5 15.5 0.0 0.0 0.0
  //POINT_CAMERA_AT_PLAYER player FIXED INTERPOLATION
  /*SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  WAIT 1500*/
  //CAR_SET_IDLE copcar_info
  //CAR_SET_IDLE copcar2_info
  //CAR_SET_IDLE diablocar_info
  /*SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_IN
  WAIT 1500*/
  //When you are arrested you will be returned to the nearest police station and you will lose all your weapons
  //GET_CAR_COORDINATES diablocar_info car_x car_y car_z
  //CREATE_CAR CAR_RUMPO 1142.0 -666.0 14.8 swatvan_info
  //The cops will take some of your cash as a bribe
  //Any mission you were on will fail.
  //your wanted level is represented by the row of stars in the .....
  //You now have a wanted level of one....
  //Two....
  //Three....
  //As your wanted level increases you will attract more powerful forms of law enforcement
  // You will find ways of reducing.......
  //REMOVE_PICKUP armour_pickup_info
  //SWITCH_WIDESCREEN off
  /*
  IF NOT IS_CAR_DEAD copcar_info
  IF LOCATE_CAR_2D copcar_info 1132.0 -671.4 4.0 4.0 false
  AND flag_copcar_progress = 0
  CAR_GOTO_COORDINATES_ACCURATE copcar_info 1124.0 -505.0 19.7
  SET_CAR_CRUISE_SPEED copcar_info 18.0
  SET_CAR_DRIVING_STYLE  copcar_info 2
  SWITCH_CAR_SIREN copcar_info ON
  flag_copcar_progress = 1
  ENDIF
  ENDIF
  IF NOT IS_CAR_DEAD copcar_info
  AND flag_copcar_progress = 1
  CAR_GOTO_COORDINATES copcar_info car_x car_y car_z
  ENDIF
  */
  while ($.flag_info < 13) {
    await asyncWait(0);
    //SET_FIXED_CAMERA_POSITION 1135.0 -672.5 15.5 0.0 0.0 0.0
    //POINT_CAMERA_AT_PLAYER player FIXED INTERPOLATION
    /*SET_FADING_COLOUR 0 0 0
    DO_FADE 1500 FADE_OUT
    WAIT 1500*/
    //CAR_SET_IDLE copcar_info
    //CAR_SET_IDLE copcar2_info
    //CAR_SET_IDLE diablocar_info
    /*SET_FADING_COLOUR 0 0 0
    DO_FADE 1500 FADE_IN
    WAIT 1500*/
    if ($.flag_info == 0) {
      //SET_FIXED_CAMERA_POSITION 1135.0 -672.5 15.5 0.0 0.0 0.0
      //POINT_CAMERA_AT_PLAYER player FIXED INTERPOLATION
      /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_OUT
      WAIT 1500*/
      $.info_time_start = Clock.GetGameTimer();
      $.copcar_info = Car.Create(109 /* CAR_POLICE */, 1110.0, -823.0, 15.0);
      $.copcar_info.setHeading(330.0);
      //CAR_SET_IDLE copcar_info
      $.cop_info = Char.CreateInsideCar($.copcar_info, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
      $.copcar2_info = Car.Create(109 /* CAR_POLICE */, 1105.0, -828.0, 15.0);
      $.copcar2_info.setHeading(330.0);
      //CAR_SET_IDLE copcar2_info
      $.cop2_info = Char.CreateInsideCar($.copcar2_info, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
      $.diablocar_info = Car.Create(130 /* CAR_DIABLOS */, 1115.0, -818.0, 15.0);
      $.diablocar_info.setHeading(0.0);
      //CAR_SET_IDLE diablocar_info
      $.diablo_info = Char.CreateInsideCar($.diablocar_info, 9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_B`);
      World.SetCarDensityMultiplier(0.3);
      /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_IN
      WAIT 1500*/
      World.SetPedDensityMultiplier(0.0);
      Text.PrintHelp("WANT_A");
      $.flag_info = 1;
    }
    if ($.flag_intro_jump == 0) {
      $.info_time_now = Clock.GetGameTimer();
      $.info_time_lapsed = $.info_time_now - $.info_time_start;
    }
    //When you are arrested you will be returned to the nearest police station and you will lose all your weapons
    //GET_CAR_COORDINATES diablocar_info car_x car_y car_z
    if ($.info_time_lapsed > 3500 && $.flag_info == 1) {
      //When you are arrested you will be returned to the nearest police station and you will lose all your weapons
      Text.PrintHelp("WANT_G");
      if (!(Car.IsDead($.copcar_info)) && !(Car.IsDead($.copcar2_info)) && !(Car.IsDead($.diablocar_info))) {
        $.copcar2_info.setCruiseSpeed(75.0);
        $.copcar2_info.setDrivingStyle(3);
        $.copcar2_info.setRamCar($.diablocar_info);
        $.copcar_info.setCruiseSpeed(70.0);
        $.copcar_info.setDrivingStyle(3);
        $.copcar_info.setRamCar($.diablocar_info);
      }
      Camera.SetFixedPosition(1134.0, -695.0, 18.0, 0.0, 0.0, 0.0);
      if (!(Car.IsDead($.diablocar_info))) {
        Camera.PointAtCar($.diablocar_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
      }
      //GET_CAR_COORDINATES diablocar_info car_x car_y car_z
      if (!(Car.IsDead($.diablocar_info))) {
        $.diablocar_info.setCruiseSpeed(50.0);
        $.diablocar_info.setDrivingStyle(2);
        //GET_CAR_COORDINATES diablocar_info car_x car_y car_z
        $.diablocar_info.gotoCoordinates(982.0, -617.0, 15.0);
      }
      if (!(Car.IsDead($.copcar_info)) && !(Car.IsDead($.copcar2_info))) {
        $.copcar_info.switchSiren(true /* ON */);
        $.copcar2_info.switchSiren(true /* ON */);
      }
      $.flag_info = 2;
    }
    //CREATE_CAR CAR_RUMPO 1142.0 -666.0 14.8 swatvan_info
    if ($.info_time_lapsed > 5500 && $.flag_copcar_progress == 0) {
      World.ClearArea(1142.0, -666.0, 14.8, 10.0, true /* true */);
      //CREATE_CAR CAR_RUMPO 1142.0 -666.0 14.8 swatvan_info
      $.swatvan_info = Car.Create(110 /* CAR_ENFORCER */, 1142.0, -666.0, 14.8);
      $.swatvan_info.setHeading(90.0);
      $.swatvan_info.lockDoors(1 /* CARLOCK_UNLOCKED */);
      $.swatvan_info.setIdle();
      $.swat2_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 1138.0, -671.0, 15.0);
      $.swat1_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 1137.8, -661.3, 15.0);
      $.swat1_info.giveWeapon(6 /* WEAPONTYPE_M16 */, 60);
      $.swat2_info.setHeading(110.0);
      $.swat1_info.setHeading(80.0);
      $.swat1_info.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
      if (!(Char.IsDead($.diablo_info))) {
        $.swat1_info.lookAtCharAlways($.diablo_info);
      }
      if (!(Char.IsDead($.cop_info))) {
        $.swat2_info.lookAtCharAlways($.cop_info);
      }
      $.flag_copcar_progress = 1;
    }
    //The cops will take some of your cash as a bribe
    if ($.info_time_lapsed > 7500 && $.flag_info == 2) {
      //The cops will take some of your cash as a bribe
      Text.PrintHelp("WANT_H");
      $.flag_info = 3;
    }
    //Any mission you were on will fail.
    if ($.info_time_lapsed > 10500 && $.flag_info == 3) {
      //Any mission you were on will fail.
      Text.PrintHelp("WANT_I");
      $.flag_info = 4;
    }
    //your wanted level is represented by the row of stars in the .....
    if ($.info_time_lapsed > 12500 && $.flag_info == 4) {
      //your wanted level is represented by the row of stars in the .....
      Text.PrintHelp("WANT_B");
      if (!(Car.IsDead($.swatvan_info))) {
        Camera.SetFixedPosition(1135.8, -673.0, 14.8, 0.0, 0.0, 0.0);
        Camera.PointAtCar($.swatvan_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
        $.copcar_info.delete();
        $.copcar2_info.delete();
        $.diablocar_info.delete();
      }
      $.flag_info = 5;
    }
    if ($.info_time_lapsed > 13500 && $.flag_info == 5) {
      if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat2_info))) {
        $.swat2_info.stopLooking();
        $.swat2_info.setObjEnterCarAsDriver($.swatvan_info);
      }
      $.flag_info = 6;
    }
    //You now have a wanted level of one....
    if ($.info_time_lapsed > 16000 && $.flag_info == 6) {
      //You now have a wanted level of one....
      Text.PrintHelp("WANT_C");
      $.player.alterWantedLevel(1);
      if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat1_info))) {
        $.swat1_info.setObjEnterCarAsPassenger($.swatvan_info);
      }
      $.flag_info = 7;
    }
    //Two....
    if ($.info_time_lapsed > 18000 && $.flag_info == 7) {
      //Two....
      Text.PrintHelp("WANT_D");
      $.player.alterWantedLevel(2);
      $.flag_info = 8;
    }
    //Three....
    if ($.info_time_lapsed > 20000 && $.flag_info == 8) {
      //Three....
      Text.PrintHelp("WANT_E");
      $.player.alterWantedLevel(3);
      $.flag_info = 9;
    }
    //As your wanted level increases you will attract more powerful forms of law enforcement
    if ($.info_time_lapsed > 22000 && $.flag_info == 9) {
      //As your wanted level increases you will attract more powerful forms of law enforcement
      Text.PrintHelp("WANT_F");
      $.flag_info = 10;
    }
    // You will find ways of reducing.......
    if ($.info_time_lapsed > 26000 && $.flag_info == 10) {
      Camera.SetFixedPosition(1135.0, -672.5, 15.5, 0.0, 0.0, 0.0);
      Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
      // You will find ways of reducing.......
      Text.PrintHelp("WANT_J");
      $.bribe_pickup = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 1143.0, -671.0, 15.0);
      Camera.PointAtPoint(1143.0, -671.0, 15.0, 1 /* INTERPOLATION */);
      $.flag_info = 11;
    }
    if ($.info_time_lapsed > 30000 && $.flag_info == 11) {
      $.flag_info = 12;
    }
    //REMOVE_PICKUP armour_pickup_info
    //SWITCH_WIDESCREEN off
    /*
    IF NOT IS_CAR_DEAD copcar_info
    IF LOCATE_CAR_2D copcar_info 1132.0 -671.4 4.0 4.0 false
    AND flag_copcar_progress = 0
    CAR_GOTO_COORDINATES_ACCURATE copcar_info 1124.0 -505.0 19.7
    SET_CAR_CRUISE_SPEED copcar_info 18.0
    SET_CAR_DRIVING_STYLE  copcar_info 2
    SWITCH_CAR_SIREN copcar_info ON
    flag_copcar_progress = 1
    ENDIF
    ENDIF
    IF NOT IS_CAR_DEAD copcar_info
    AND flag_copcar_progress = 1
    CAR_GOTO_COORDINATES copcar_info car_x car_y car_z
    ENDIF
    */
    if ($.info_time_lapsed > 34000 && $.flag_info == 12) {
      Text.ClearHelp();
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.bribe_pickup.remove();
      $.diablo_info.delete();
      $.diablocar_info.delete();
      $.cop_info.delete();
      $.copcar_info.delete();
      $.cop2_info.delete();
      $.copcar2_info.delete();
      $.swat1_info.delete();
      $.swat2_info.delete();
      //REMOVE_PICKUP armour_pickup_info
      $.swatvan_info.delete();
      //SWITCH_WIDESCREEN off
      Camera.RestoreJumpcut();
      $.player.setControl(true /* on */);
      $.player.alterWantedLevel($.wanted_level);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(1500, 1 /* FADE_IN */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
      }
      $.flag_info = 13;
    }
    if (!(Car.IsDead($.swatvan_info)) && !(Char.IsDead($.swat1_info)) && !(Char.IsDead($.swat2_info))) {
      if ($.flag_swat_progress == 0 && $.info_time_lapsed > 21000) {
        if ($.swat1_info.isInCar($.swatvan_info) && $.swat2_info.isInCar($.swatvan_info)) {
          $.swatvan_info.setCruiseSpeed(10.0);
          $.swatvan_info.setDrivingStyle(2);
          $.swatvan_info.gotoCoordinatesAccurate(1133.0, -669.0, 15.0);
          $.flag_swat_progress = 1;
        }
      }
    }
    if (!(Car.IsDead($.swatvan_info))) {
      if ($.swatvan_info.locate2D(1133.0, -669.0, 3.0, 3.0, false /* false */) && $.flag_swat_progress == 1 && $.info_time_lapsed > 22000) {
        $.swatvan_info.gotoCoordinates(982.0, -617.0, 15.0);
        $.swatvan_info.setCruiseSpeed(30.0);
        $.swatvan_info.setDrivingStyle(3);
        $.swatvan_info.switchSiren(true /* ON */);
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
  // mission cleanup
  return;
}

async function wanted_info_cleanup() {
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* off */);
  $.player.setControl(true /* on */);
  Game.SetPoliceIgnorePlayer($.player, false /* off */);
  if (!(Car.IsDead($.swatvan_info))) {
    $.swatvan_info.wanderRandomly();
  }
  if (!(Car.IsDead($.copcar_info))) {
    $.copcar_info.wanderRandomly();
  }
  if (!(Car.IsDead($.diablocar_info))) {
    $.diablocar_info.wanderRandomly();
  }
  World.SetCarDensityMultiplier(1.0);
  World.SetPedDensityMultiplier(1.0);
  $.swatvan_info.markAsNoLongerNeeded();
  $.copcar_info.markAsNoLongerNeeded();
  $.diablocar_info.markAsNoLongerNeeded();
  $.cop_info.markAsNoLongerNeeded();
  $.swat1_info.markAsNoLongerNeeded();
  $.swat2_info.markAsNoLongerNeeded();
  $.diablo_info.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(ped`COP`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`);
  Streaming.MarkModelAsNoLongerNeeded(car`DIABLOS`);
  Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`);
  Streaming.MarkModelAsNoLongerNeeded(car`POLICE`);
  //REMOVE_PICKUP heal_info
  Game.SetSwatRequired(false /* FALSE */);
  $.flag_player_on_mission = 0;
  $.flag_wanted_info = 1;
  Mission.Finish();
  //----main stuff-------
  return;
}

export async function wanted() {
  // *****************************************************************************************
  // ***************************************WANTED INFO***************************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB wanted_info_start
  await wanted_info_start();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB wanted_info_cleanup
  await wanted_info_cleanup();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for info script
  // MissionBoundary
  // VAR_INT copcar_info copcar2_info swatvan_info cop_info cop2_info flag_copcar_progress
  // VAR_INT swat1_info swat2_info flag_swat_progress bribe_pickup
  //VAR_INT health_pickup_info	armour_pickup_info
  //VAR_INT info_time_lapsed info_time_now info_time_start flag_info
  // VAR_INT wanted_level diablocar_info diablo_info
  // ****************************************Mission Start************************************
  // VAR_FLOAT car_x car_y car_z
}
