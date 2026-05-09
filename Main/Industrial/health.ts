// Generated from Main/Industrial/health.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function health_info_start() {
    //REGISTER_MISSION_GIVEN

    // SCRIPT_NAME health
    $.flag_player_on_mission = 1

    await asyncWait(0)

    //Set Variables

    $.info_time_lapsed = 0
    $.info_time_now = 0
    $.info_time_start = 0
    $.flag_info = 0
    $.flag_bottom = 0
    $.wanted_level = 0
    $.flag_intro_jump = 0
    //Set Coords

    //Mission Script

    $.player.setControl(false /* off */)

    $.wanted_level = $.player.storeWantedLevel()
    $.player.clearWantedLevel()
    Game.SetPoliceIgnorePlayer($.player, true /* on */)
    //SWITCH_WIDESCREEN on

    Streaming.RequestModel(car`AMBULANCE`)
    Streaming.RequestModel(ped`MEDIC`)

    while (!Streaming.HasModelLoaded(car`AMBULANCE`) || !Streaming.HasModelLoaded(ped`MEDIC`)) {
        await asyncWait(0)
    }

    Camera.SetFixedPosition(1138.6, -600.0, 18.0, 0.0, 0.0, 0.0)
    Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */)

    while ($.flag_info < 8) {
        await asyncWait(0)

        if ($.flag_info == 0) {
            $.info_time_start = Clock.GetGameTimer()
            /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_OUT
      WAIT 1500*/
            World.ClearArea(1141.0, -622.0, 14.8, 30.0, true /* true */)
            World.ClearArea(1125.77, -594.0, 14.8, 10.0, true /* true */)
            World.SetCarDensityMultiplier(0.0)
            World.SetPedDensityMultiplier(0.0)
            $.amb_info = Car.Create(99 /* CAR_AMBULANCE */, 1140.2, -621.5, 14.8)
            $.amb_info.setHeading(90.0)
            $.medic_info = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MEDIC`, 1136.75, -617.8, 14.7)
            $.medic_info.setHeading(25.0)
            $.medic_info.setIdle()
            $.medic_info.setStayInSamePlace(true /* true */)
            //CAR_SET_IDLE amb_info
            /*SET_FADING_COLOUR 0 0 0
      DO_FADE 1500 FADE_IN
      WAIT 1500*/
            Text.PrintHelp('HEAL_A')
            Hud.FlashObject(4 /* HUD_FLASH_HEALTH */)
            $.flag_info = 1
        }
        if ($.flag_intro_jump == 0) {
            $.info_time_now = Clock.GetGameTimer()
            $.info_time_lapsed = $.info_time_now - $.info_time_start
        }
        if ($.info_time_lapsed > 3000 && $.flag_info < 2) {
            Hud.FlashObject(-1)
        }
        if ($.info_time_lapsed > 5000 && $.flag_info == 1) {
            Text.PrintHelp('HEAL_B')
            $.flag_info = 2
        }
        if ($.info_time_lapsed > 11000 && $.flag_info == 2) {
            if (!Car.IsDead($.amb_info) && !Char.IsDead($.medic_info)) {
                Camera.SetFixedPosition(1133.0, -613.5, 17.0, 0.0, 0.0, 0.0)
                Camera.PointAtCar($.amb_info, 15 /* FIXED */, 2 /* JUMP_CUT */)
                $.medic_info.setStayInSamePlace(false /* false */)
                $.medic_info.setObjEnterCarAsDriver($.amb_info)
            }
            Text.PrintHelp('HEAL_C')
            $.flag_info = 3
        }
        if ($.info_time_lapsed > 14000 && $.flag_info == 3) {
            Text.PrintHelp('WANT_I')
            $.flag_info = 4
        }
        if ($.info_time_lapsed > 17500 && $.flag_info == 4) {
            $.flag_info = 5
        }
        if ($.info_time_lapsed > 19500 && $.flag_info == 5) {
            Text.PrintHelp('HEAL_E')
            Camera.SetFixedPosition(1138.6, -600.0, 18.0, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(1144.3, -603.5, 15.0, 2 /* JUMP_CUT */)
            $.health_pickup_info = Pickup.Create(1362 /* health */, 14 /* PICKUP_ON_STREET_SLOW */, 1144.3, -603.5, 15.0)
            if (!Car.IsDead($.amb_info)) {
                $.amb_info.wanderRandomly()
            }
            $.flag_info = 6
        }
        if ($.info_time_lapsed > 22500 && $.flag_info == 6) {
            Camera.PointAtPoint(1147.0, -601.1, 15.0, 1 /* INTERPOLATION */)
            $.armour_pickup_info = Pickup.Create(1364 /* bodyarmour */, 14 /* PICKUP_ON_STREET_SLOW */, 1147.0, -601.1, 15.0)
            $.flag_info = 7
        }
        if ($.info_time_lapsed > 24000 && $.flag_info == 7) {
            Camera.SetFadingColor(0, 0, 0)
            Camera.DoFade(1500, 0 /* FADE_OUT */)
            Text.ClearHelp()
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            $.amb_info.delete()
            $.medic_info.delete()
            $.health_pickup_info.remove()
            $.armour_pickup_info.remove()
            Camera.RestoreJumpcut()
            //SWITCH_WIDESCREEN off
            $.player.setControl(true /* on */)
            $.player.alterWantedLevel($.wanted_level)
            Camera.SetFadingColor(0, 0, 0)
            Camera.DoFade(1500, 1 /* FADE_IN */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            $.flag_info = 8
        }
        if ($.info_time_lapsed > 16500 && $.flag_info < 7) {
            if (!Car.IsDead($.amb_info) && !Char.IsDead($.medic_info)) {
                if ($.medic_info.isInCar($.amb_info) && $.flag_bottom == 0) {
                    $.amb_info.setCruiseSpeed(40.0)
                    $.amb_info.setDrivingStyle(2)
                    $.amb_info.switchSiren(true /* ON */)
                    $.amb_info.gotoCoordinates(1023.0, -480.0, 19.7)
                    $.flag_bottom = 1
                }
            }
        }
        if ($.flag_intro_jump == 0 && $.flag_info < 7) {
            if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                $.info_time_lapsed = 24001
                $.flag_info = 7
                $.flag_intro_jump = 1
            }
        }
    }

    return

    // mission cleanup
}

async function health_info_cleanup() {
    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    $.player.setControl(true /* on */)
    Game.SetPoliceIgnorePlayer($.player, false /* off */)

    $.amb_info.markAsNoLongerNeeded()
    $.medic_info.markAsNoLongerNeeded()

    Streaming.MarkModelAsNoLongerNeeded(car`AMBULANCE`)
    Streaming.MarkModelAsNoLongerNeeded(ped`MEDIC`)

    World.SetCarDensityMultiplier(1.0)
    World.SetPedDensityMultiplier(1.0)

    //REMOVE_PICKUP heal_info

    $.flag_player_on_mission = 0
    $.flag_health_info = 1

    Mission.Finish()
    return

    //----main stuff-------
}

export async function health() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***************************************HEALTH INFO***************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB health_info_start
    await health_info_start()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB health_info_cleanup
        await health_info_cleanup()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB health_info_cleanup
    await health_info_cleanup()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for info script

    // VAR_INT amb_info medic_info flag_bottom
    // VAR_INT health_pickup_info armour_pickup_info
    // VAR_INT info_time_lapsed info_time_now info_time_start flag_info

    // ****************************************Mission Start************************************
}
