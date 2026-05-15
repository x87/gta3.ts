// Generated from Main/Industrial/wanted.sc
import { $ } from '../../utils';



// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************
// ***************************************WANTED INFO***************************************
// *****************************************************************************************
// *****************************************************************************************
// *****************************************************************************************

// Mission start stuff

// GOSUB wanted_info_start
// GOSUB wanted_info_cleanup
// MISSION_END

// Variables for info script

// VAR_INT copcar_info copcar2_info swatvan_info cop_info cop2_info flag_copcar_progress
// VAR_INT swat1_info swat2_info flag_swat_progress bribe_pickup
// VAR_INT wanted_level diablocar_info diablo_info
//VAR_INT health_pickup_info	armour_pickup_info
//VAR_INT info_time_lapsed info_time_now info_time_start flag_info

// VAR_FLOAT car_x car_y car_z

// ****************************************Mission Start************************************

async function body() {
    //REGISTER_MISSION_GIVEN

    // SCRIPT_NAME wanted
    ONMISSION = true;

    await asyncWait(0);

    //Set Variables

    $.info_time_lapsed = 0;
    $.info_time_now = 0;
    $.info_time_start = 0;
    $.flag_info = 0;
    $.flag_copcar_progress = 0;
    $.flag_swat_progress = 0;
    $.flag_intro_jump = 0;
    $.wanted_level = 0;

    //Set Coords

    //Mission Script

    $.wanted_level = $.player.storeWantedLevel();
    //CLEAR_WANTED_LEVEL player

    Game.SetPoliceIgnorePlayer($.player, true /* on */);
    $.player.setControl(false /* off */);
    //SWITCH_WIDESCREEN on

    Streaming.Switch(false /* OFF */);

    //SET_SWAT_REQUIRED TRUE

    Streaming.RequestModel(117 /* CAR_ENFORCER */);
    //REQUEST_MODEL CAR_RUMPO

    Streaming.RequestModel(2 /* PED_SWAT */);
    Streaming.RequestModel(137 /* CAR_DIABLOS */);
    Streaming.RequestModel(15 /* PED_GANG_DIABLO_B */);

    Streaming.LoadAllModelsNow();

    while (!Streaming.HasModelLoaded(117 /* CAR_ENFORCER */)) {
        await asyncWait(0);
        //PRINT_NOW TEST1 1000 1
    }
    while (!Streaming.HasModelLoaded(2 /* PED_SWAT */)) {
        await asyncWait(0);
        //PRINT_NOW TEST2 1000 1
    }

    while (!Streaming.HasModelLoaded(15 /* PED_GANG_DIABLO_B */)) {
        await asyncWait(0);
        //PRINT_NOW TEST3 1000 1
    }
    while (!Streaming.HasModelLoaded(137 /* CAR_DIABLOS */)) {
        await asyncWait(0);
        //PRINT_NOW TEST4 1000 1
    }

    Streaming.Switch(true /* ON */);

    while ($.flag_info < 13) {
        await asyncWait(0);

        if ($.flag_info == 0) {
            $.info_time_start = Clock.GetGameTimer();
            //SET_FIXED_CAMERA_POSITION 1135.0 -672.5 15.5 0.0 0.0 0.0
            //POINT_CAMERA_AT_PLAYER player FIXED INTERPOLATION
            /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_OUT
      WAIT 1500*/

            $.copcar_info = Car.Create(116 /* CAR_POLICE */, 1110.0, -823.0, 15.0);
            $.copcar_info.setHeading(330.0);
            $.cop_info = Char.CreateInsideCar($.copcar_info, 4 /* PEDTYPE_CIVMALE */, 1 /* PED_COP */);
            //CAR_SET_IDLE copcar_info

            $.copcar2_info = Car.Create(116 /* CAR_POLICE */, 1105.0, -828.0, 15.0);
            $.copcar2_info.setHeading(330.0);
            $.cop2_info = Char.CreateInsideCar($.copcar2_info, 4 /* PEDTYPE_CIVMALE */, 1 /* PED_COP */);
            //CAR_SET_IDLE copcar2_info

            $.diablocar_info = Car.Create(137 /* CAR_DIABLOS */, 1115.0, -818.0, 15.0);
            $.diablocar_info.setHeading(0.0);
            $.diablo_info = Char.CreateInsideCar($.diablocar_info, 9 /* PEDTYPE_GANG_DIABLO */, 15 /* PED_GANG_DIABLO_B */);
            //CAR_SET_IDLE diablocar_info

            World.SetCarDensityMultiplier(0.3);
            World.SetPedDensityMultiplier(0.0);
            /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_IN
      WAIT 1500*/
            Text.PrintHelp('WANT_A');
            $.flag_info = 1;
        }
        if ($.flag_intro_jump == 0) {
            $.info_time_now = Clock.GetGameTimer();
            $.info_time_lapsed = $.info_time_now - $.info_time_start;
        }
        if ($.info_time_lapsed > 3500 && $.flag_info == 1) {
            Text.PrintHelp('WANT_G'); //When you are arrested you will be returned to the nearest police station and you will lose all your weapons
            if (!Car.IsDead($.copcar_info) && !Car.IsDead($.copcar2_info) && !Car.IsDead($.diablocar_info)) {
                $.copcar2_info.setCruiseSpeed(75.0);
                $.copcar2_info.setDrivingStyle(3);
                $.copcar2_info.setRamCar($.diablocar_info);
                $.copcar_info.setCruiseSpeed(70.0);
                $.copcar_info.setDrivingStyle(3);
                $.copcar_info.setRamCar($.diablocar_info);
            }
            Camera.SetFixedPosition(1134.0, -695.0, 18.0, 0.0, 0.0, 0.0);
            if (!Car.IsDead($.diablocar_info)) {
                Camera.PointAtCar($.diablocar_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
            }
            if (!Car.IsDead($.diablocar_info)) {
                $.diablocar_info.setCruiseSpeed(50.0);
                $.diablocar_info.setDrivingStyle(2);
                $.diablocar_info.gotoCoordinates(982.0, -617.0, 15.0);
                //GET_CAR_COORDINATES diablocar_info car_x car_y car_z
            }
            if (!Car.IsDead($.copcar_info) && !Car.IsDead($.copcar2_info)) {
                $.copcar_info.switchSiren(true /* ON */);
                $.copcar2_info.switchSiren(true /* ON */);
            }
            $.flag_info = 2;
        }
        if ($.info_time_lapsed > 5500 && $.flag_copcar_progress == 0) {
            World.ClearArea(1142.0, -666.0, 14.8, 10.0, true /* true */);
            $.swatvan_info = Car.Create(117 /* CAR_ENFORCER */, 1142.0, -666.0, 14.8);
            //CREATE_CAR CAR_RUMPO 1142.0 -666.0 14.8 swatvan_info
            $.swatvan_info.setHeading(90.0);
            $.swatvan_info.lockDoors(1 /* CARLOCK_UNLOCKED */);
            $.swatvan_info.setIdle();
            $.swat2_info = Char.Create(4 /* PEDTYPE_CIVMALE */, 2 /* PED_SWAT */, 1138.0, -671.0, 15.0);
            $.swat1_info = Char.Create(4 /* PEDTYPE_CIVMALE */, 2 /* PED_SWAT */, 1137.8, -661.3, 15.0);
            $.swat1_info.giveWeapon(6 /* WEAPONTYPE_M16 */, 60);
            $.swat2_info.setHeading(110.0);
            $.swat1_info.setHeading(80.0);
            $.swat1_info.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
            if (!Char.IsDead($.diablo_info)) {
                $.swat1_info.lookAtCharAlways($.diablo_info);
            }
            if (!Char.IsDead($.cop_info)) {
                $.swat2_info.lookAtCharAlways($.cop_info);
            }
            $.flag_copcar_progress = 1;
        }
        if ($.info_time_lapsed > 7500 && $.flag_info == 2) {
            Text.PrintHelp('WANT_H'); //The cops will take some of your cash as a bribe
            $.flag_info = 3;
        }
        if ($.info_time_lapsed > 10500 && $.flag_info == 3) {
            Text.PrintHelp('WANT_I'); //Any mission you were on will fail.
            $.flag_info = 4;
        }
        if ($.info_time_lapsed > 12500 && $.flag_info == 4) {
            Text.PrintHelp('WANT_B'); //your wanted level is represented by the row of stars in the .....
            if (!Car.IsDead($.swatvan_info)) {
                Camera.SetFixedPosition(1135.8, -673.0, 14.8, 0.0, 0.0, 0.0);
                Camera.PointAtCar($.swatvan_info, 15 /* FIXED */, 2 /* JUMP_CUT */);
                $.copcar_info.delete();
                $.copcar2_info.delete();
                $.diablocar_info.delete();
            }
            $.flag_info = 5;
        }
        if ($.info_time_lapsed > 13500 && $.flag_info == 5) {
            if (!Car.IsDead($.swatvan_info) && !Char.IsDead($.swat2_info)) {
                $.swat2_info.stopLooking();
                $.swat2_info.setObjEnterCarAsDriver($.swatvan_info);
            }
            $.flag_info = 6;
        }
        if ($.info_time_lapsed > 16000 && $.flag_info == 6) {
            Text.PrintHelp('WANT_C'); //You now have a wanted level of one....
            $.player.alterWantedLevel(1);
            if (!Car.IsDead($.swatvan_info) && !Char.IsDead($.swat1_info)) {
                $.swat1_info.setObjEnterCarAsPassenger($.swatvan_info);
            }
            $.flag_info = 7;
        }

        if ($.info_time_lapsed > 18000 && $.flag_info == 7) {
            Text.PrintHelp('WANT_D'); //Two....
            $.player.alterWantedLevel(2);
            $.flag_info = 8;
        }

        if ($.info_time_lapsed > 20000 && $.flag_info == 8) {
            Text.PrintHelp('WANT_E'); //Three....
            $.player.alterWantedLevel(3);
            $.flag_info = 9;
        }

        if ($.info_time_lapsed > 22000 && $.flag_info == 9) {
            Text.PrintHelp('WANT_F'); //As your wanted level increases you will attract more powerful forms of law enforcement
            $.flag_info = 10;
        }
        if ($.info_time_lapsed > 26000 && $.flag_info == 10) {
            Camera.SetFixedPosition(1135.0, -672.5, 15.5, 0.0, 0.0, 0.0);
            Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */);
            Text.PrintHelp('WANT_J'); // You will find ways of reducing.......
            $.bribe_pickup = Pickup.Create(1383 /* bribe */, 14 /* PICKUP_ON_STREET_SLOW */, 1143.0, -671.0, 15.0);
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
            $.bribe_pickup.remove();
            $.diablo_info.delete();
            $.diablocar_info.delete();
            $.cop_info.delete();
            $.copcar_info.delete();
            $.cop2_info.delete();
            $.copcar2_info.delete();
            $.swat1_info.delete();
            $.swat2_info.delete();
            $.swatvan_info.delete();
            //REMOVE_PICKUP armour_pickup_info
            Camera.RestoreJumpcut();
            //SWITCH_WIDESCREEN off
            $.player.setControl(true /* on */);
            $.player.alterWantedLevel($.wanted_level);
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 1 /* FADE_IN */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
            $.flag_info = 13;
        }
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
        if (!Car.IsDead($.swatvan_info) && !Char.IsDead($.swat1_info) && !Char.IsDead($.swat2_info)) {
            if ($.flag_swat_progress == 0 && $.info_time_lapsed > 21000) {
                if ($.swat1_info.isInCar($.swatvan_info) && $.swat2_info.isInCar($.swatvan_info)) {
                    $.swatvan_info.setCruiseSpeed(10.0);
                    $.swatvan_info.setDrivingStyle(2);
                    $.swatvan_info.gotoCoordinatesAccurate(1133.0, -669.0, 15.0);
                    $.flag_swat_progress = 1;
                }
            }
        }
        if (!Car.IsDead($.swatvan_info)) {
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
}

async function cleanup() {
    Camera.RestoreJumpcut();
    Hud.SwitchWidescreen(false /* off */);
    $.player.setControl(true /* on */);
    Game.SetPoliceIgnorePlayer($.player, false /* off */);

    if (!Car.IsDead($.swatvan_info)) {
        $.swatvan_info.wanderRandomly();
    }
    if (!Car.IsDead($.copcar_info)) {
        $.copcar_info.wanderRandomly();
    }
    if (!Car.IsDead($.diablocar_info)) {
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

    Streaming.MarkModelAsNoLongerNeeded(1 /* PED_COP */);
    Streaming.MarkModelAsNoLongerNeeded(15 /* PED_GANG_DIABLO_B */);
    Streaming.MarkModelAsNoLongerNeeded(2 /* PED_SWAT */);
    Streaming.MarkModelAsNoLongerNeeded(137 /* CAR_DIABLOS */);
    Streaming.MarkModelAsNoLongerNeeded(117 /* CAR_ENFORCER */);
    Streaming.MarkModelAsNoLongerNeeded(116 /* CAR_POLICE */);
    Game.SetSwatRequired(false /* FALSE */);
    //REMOVE_PICKUP heal_info

    ONMISSION = false;
    $.flag_wanted_info = 1;

    Mission.Finish();
}

export default () => body().finally(cleanup);

