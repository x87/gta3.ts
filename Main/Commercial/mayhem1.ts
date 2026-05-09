// Generated from Main/Commercial/mayhem1.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_mayhem() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME mayhem
    $.flag_player_on_mission = 1
    //flag_player_on_carpark_mission = 1

    Text.PrintBig('MM_1', 15000, 2)

    await asyncWait(0)

    //Set Variables

    $.counter_4x4_pickups = 0
    $.timer_4x4 = 20000
    $.flag_intro = 0
    $.flag_mayhem_trigger = 1
    $.record_temp = 0
    $.flag_intro_jump = 0

    $.flag_blip_1 = 0
    $.flag_blip_2 = 0
    $.flag_blip_3 = 0
    $.flag_blip_4 = 0
    $.flag_blip_5 = 0
    $.flag_blip_6 = 0
    $.flag_blip_7 = 0
    $.flag_blip_8 = 0
    $.flag_blip_9 = 0
    $.flag_blip_10 = 0
    $.flag_blip_11 = 0
    $.flag_blip_12 = 0
    $.flag_blip_13 = 0
    $.flag_blip_14 = 0
    $.flag_blip_15 = 0
    $.flag_blip_16 = 0
    $.flag_blip_17 = 0
    $.flag_blip_18 = 0
    $.flag_blip_19 = 0
    $.flag_blip_20 = 0

    //Set Coords

    $.x_1 = 286.0
    $.y_1 = -519.0
    $.z_1 = 26.2

    $.x_2 = 302.0
    $.y_2 = -532.0
    $.z_2 = 26.2

    $.x_3 = 271.0
    $.y_3 = -547.0
    $.z_3 = 26.2

    $.x_4 = 303.0
    $.y_4 = -577.0
    $.z_4 = 26.2

    $.x_5 = 327.5
    $.y_5 = -583.0
    $.z_5 = 29.2

    $.x_6 = 324.5
    $.y_6 = -536.5
    $.z_6 = 29.2

    $.x_7 = 340.0
    $.y_7 = -492.0
    $.z_7 = 29.2

    $.x_8 = 311.0
    $.y_8 = -510.0
    $.z_8 = 29.2

    $.x_9 = 293.0
    $.y_9 = -484.0
    $.z_9 = 31.6

    $.x_10 = 302.0
    $.y_10 = -511.0
    $.z_10 = 31.6

    $.x_11 = 301.0
    $.y_11 = -560.0
    $.z_11 = 31.6

    $.x_12 = 301.0
    $.y_12 = -606.0
    $.z_12 = 31.6

    $.x_13 = 314.5
    $.y_13 = -595.0
    $.z_13 = 33.9

    $.x_14 = 338.0
    $.y_14 = -565.0
    $.z_14 = 33.9

    $.x_15 = 317.0
    $.y_15 = -545.0
    $.z_15 = 33.9

    $.x_16 = 337.0
    $.y_16 = -523.0
    $.z_16 = 33.9

    $.x_17 = 302.0
    $.y_17 = -606.5
    $.z_17 = 36.3

    $.x_18 = 304.0
    $.y_18 = -544.5
    $.z_18 = 36.3

    $.x_19 = 266.24
    $.y_19 = -627.0
    $.z_19 = 40.5

    $.x_20 = 272.0
    $.y_20 = -537.0
    $.z_20 = 36.3

    //Mission Script

    $.wanted_4x4 = $.player.storeWantedLevel()
    $.player.clearWantedLevel()
    $.player_4x4 = $.player.storeCarIsIn()

    $.player.setControl(false /* off */)
    Hud.SwitchWidescreen(true /* on */)

    if (!Car.IsDead($.player_4x4)) {
        $.player_4x4.lockDoors(2 /* CARLOCK_LOCKED */)
    }

    $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1)
    $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2)
    $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3)
    $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4)
    $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5)
    $.blip_6 = Blip.AddForCoord($.x_6, $.y_6, $.z_6)
    $.blip_7 = Blip.AddForCoord($.x_7, $.y_7, $.z_7)
    $.blip_8 = Blip.AddForCoord($.x_8, $.y_8, $.z_8)
    $.blip_9 = Blip.AddForCoord($.x_9, $.y_9, $.z_9)
    $.blip_10 = Blip.AddForCoord($.x_10, $.y_10, $.z_10)
    $.blip_11 = Blip.AddForCoord($.x_11, $.y_11, $.z_11)
    $.blip_12 = Blip.AddForCoord($.x_12, $.y_12, $.z_12)
    $.blip_13 = Blip.AddForCoord($.x_13, $.y_13, $.z_13)
    $.blip_14 = Blip.AddForCoord($.x_14, $.y_14, $.z_14)
    $.blip_15 = Blip.AddForCoord($.x_15, $.y_15, $.z_15)
    $.blip_16 = Blip.AddForCoord($.x_16, $.y_16, $.z_16)
    $.blip_17 = Blip.AddForCoord($.x_17, $.y_17, $.z_17)
    $.blip_18 = Blip.AddForCoord($.x_18, $.y_18, $.z_18)
    $.blip_19 = Blip.AddForCoord($.x_19, $.y_19, $.z_19)
    $.blip_20 = Blip.AddForCoord($.x_20, $.y_20, $.z_20)

    while ($.counter_4x4_pickups < 20) {
        await asyncWait(0)

        if ($.flag_blip_1 == 0) {
            Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_1, $.y_1, $.z_1, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_1.remove()
                $.flag_blip_1 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_2 == 0) {
            Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_2, $.y_2, $.z_2, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_2.remove()
                $.flag_blip_2 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_3 == 0) {
            Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_3, $.y_3, $.z_3, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_3.remove()
                $.flag_blip_3 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_4 == 0) {
            Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_4, $.y_4, $.z_4, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_4.remove()
                $.flag_blip_4 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_5 == 0) {
            Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_5, $.y_5, $.z_5, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_5, $.y_5, $.z_5, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_5.remove()
                $.flag_blip_5 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_6 == 0) {
            Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_6, $.y_6, $.z_6, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_6.remove()
                $.flag_blip_6 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_7 == 0) {
            Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_7, $.y_7, $.z_7, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_7.remove()
                $.flag_blip_7 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_8 == 0) {
            Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_8, $.y_8, $.z_8, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_8.remove()
                $.flag_blip_8 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_9 == 0) {
            Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_9, $.y_9, $.z_9, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_9.remove()
                $.flag_blip_9 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_10 == 0) {
            Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_10, $.y_10, $.z_10, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_10.remove()
                $.flag_blip_10 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_11 == 0) {
            Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_11, $.y_11, $.z_11, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_11.remove()
                $.flag_blip_11 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_12 == 0) {
            Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_12, $.y_12, $.z_12, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_12.remove()
                $.flag_blip_12 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_13 == 0) {
            Fx.DrawCorona($.x_13, $.y_13, $.z_13, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_13, $.y_13, $.z_13, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_13, $.y_13, $.z_13, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_13.remove()
                $.flag_blip_13 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_14 == 0) {
            Fx.DrawCorona($.x_14, $.y_14, $.z_14, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_14, $.y_14, $.z_14, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_14, $.y_14, $.z_14, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_14.remove()
                $.flag_blip_14 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_15 == 0) {
            Fx.DrawCorona($.x_15, $.y_15, $.z_15, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_15, $.y_15, $.z_15, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_15, $.y_15, $.z_15, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_15.remove()
                $.flag_blip_15 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_16 == 0) {
            Fx.DrawCorona($.x_16, $.y_16, $.z_16, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_16, $.y_16, $.z_16, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_16, $.y_16, $.z_16, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_16.remove()
                $.flag_blip_16 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_17 == 0) {
            Fx.DrawCorona($.x_17, $.y_17, $.z_17, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_17, $.y_17, $.z_17, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_17, $.y_17, $.z_17, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_17.remove()
                $.flag_blip_17 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_18 == 0) {
            Fx.DrawCorona($.x_18, $.y_18, $.z_18, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_18, $.y_18, $.z_18, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_18, $.y_18, $.z_18, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_18.remove()
                $.flag_blip_18 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_19 == 0) {
            Fx.DrawCorona($.x_19, $.y_19, $.z_19, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_19, $.y_19, $.z_19, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_19, $.y_19, $.z_19, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_19.remove()
                $.flag_blip_19 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_20 == 0) {
            Fx.DrawCorona($.x_20, $.y_20, $.z_20, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_20, $.y_20, $.z_20, 2.0, 2.0, 2.0, false /* false */)) {
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_20, $.y_20, $.z_20, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 5000
                $.blip_20.remove()
                $.flag_blip_20 = 1
                Text.PrintWithNumberNow('MM_1_B', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_intro_mayhem_before == 1) {
            if ($.flag_intro_jump == 0 && $.flag_intro < 5) {
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.intro_time_lapsed = 10501
                    $.flag_intro = 4
                    $.flag_intro_jump = 1
                }
            }
        }
        if ($.flag_intro == 0) {
            $.timer_intro_start = Clock.GetGameTimer()
            Camera.SetFixedPosition(281.48, -526.25, 26.4, 0.0, 0.0, 0.0)
            Audio.SetMusicDoesFade(false /* FALSE */)
            Camera.DoFade(1500, 0 /* FADE_OUT */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Camera.PointAtPoint($.x_1, $.y_1, $.z_1, 2 /* JUMP_CUT */)
            Camera.DoFade(1500, 1 /* FADE_IN */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Text.PrintNow('MM_1_A', 5500, 1)
            $.flag_intro = 1
        }
        if ($.flag_intro_jump == 0) {
            $.timer_intro_now = Clock.GetGameTimer()
            $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start
        }
        if ($.intro_time_lapsed > 3500 && $.flag_intro == 1) {
            Camera.PointAtPoint($.x_2, $.y_2, $.z_2, 1 /* INTERPOLATION */)
            $.flag_intro = 2
        }
        if ($.intro_time_lapsed > 5500 && $.flag_intro == 2) {
            Text.PrintNow('MM_1_C', 5000, 1)
            $.flag_intro = 3
        }
        if ($.intro_time_lapsed > 7000 && $.flag_intro == 3) {
            Camera.PointAtPoint($.x_3, $.y_3, $.z_3, 1 /* INTERPOLATION */)
            $.flag_intro = 4
        }
        if ($.intro_time_lapsed > 10500 && $.flag_intro == 4) {
            Camera.DoFade(1500, 0 /* FADE_OUT */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Text.ClearPrints()
            Camera.RestoreJumpcut()
            Hud.SwitchWidescreen(false /* off */)
            $.player.setControl(true /* on */)
            $.player.alterWantedLevel($.wanted_4x4)
            if (!Car.IsDead($.player_4x4)) {
                $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */)
            }
            Camera.DoFade(1500, 1 /* FADE_IN */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Hud.DisplayTimer($.timer_4x4)
            Audio.SetMusicDoesFade(true /* TRUE */)
            $.flag_intro = 5
            $.flag_intro_mayhem_before = 1
        }
        if ($.timer_4x4 < 1) {
            Text.PrintNow('taxi2', 3000, 1)
            // SCM GOTO → mission_mayhem_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_mayhem_failed') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(122 /* CAR_STALLION */)) {
            Text.PrintNow('T4x4_F', 3000, 1)
            // SCM GOTO → mission_mayhem_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_mayhem_failed') // fallback: would break linear control flow
        }
    }

    if ($.counter_4x4_pickups == 20) {
        // SCM GOTO → mission_mayhem_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_mayhem_passed') // fallback: would break linear control flow
    }

    // --------------------------Mission failed-----------------------------------------------
}

async function mission_mayhem_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)

    return

    // -------------------------Mission passed-------------------------------------------------
}

async function mission_mayhem_passed() {
    if ($.flag_mayhem_mission1_passed == 0) {
        $.record_mayhem = 120000 - $.timer_4x4
        $.record_mayhem = $.record_mayhem / 1000
    }

    if ($.flag_mayhem_mission1_passed == 1) {
        $.record_temp = 120000 - $.timer_4x4
        $.record_temp = $.record_temp / 1000
        if ($.record_temp < $.record_mayhem) {
            $.record_mayhem = $.record_temp
        }
    }

    Text.PrintWithNumberBig('M_PASS', 30000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    //PRINT_WITH_NUMBER_NOW (Y1_1ST) counter_player_points 4000 1

    $.player.clearWantedLevel()
    $.player.addScore(30000)
    Stat.Register4X4MayhemTime($.record_mayhem)
    if ($.flag_mayhem_mission1_passed == 0) {
        Stat.RegisterMissionPassed('MM_1')
        $.flag_mayhem_mission1_passed = 1
        Stat.PlayerMadeProgress(1)
    }
    //START_NEW_SCRIPT carpark_mission2_loop

    return

    // mission cleanup
}

async function mission_cleanup_mayhem() {
    $.player.setControl(true /* on */)
    Hud.ClearTimer($.timer_4x4)
    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)

    $.blip_1.remove()
    $.blip_2.remove()
    $.blip_3.remove()
    $.blip_4.remove()
    $.blip_5.remove()
    $.blip_6.remove()
    $.blip_7.remove()
    $.blip_8.remove()
    $.blip_9.remove()
    $.blip_10.remove()
    $.blip_11.remove()
    $.blip_12.remove()
    $.blip_13.remove()
    $.blip_14.remove()
    $.blip_15.remove()
    $.blip_16.remove()
    $.blip_17.remove()
    $.blip_18.remove()
    $.blip_19.remove()
    $.blip_20.remove()

    $.flag_player_on_mission = 0
    //flag_player_on_carpark_mission = 0

    Mission.Finish()
    return
}

export async function mayhem1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***************************************Multi-storey Mayhem*******************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_mayhem
    await mission_start_mayhem()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_mayhem_failed
        await mission_mayhem_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_mayhem
    await mission_cleanup_mayhem()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission
    /* variables called in T4x4_1.sc
  VAR_INT player_carpark
  VAR_INT counter_4x4_pickups timer_4x4
  VAR_INT wanted_4x4
  VAR_INT intro_time_lapsed timer_intro_now timer_intro_start flag_intro
  VAR_INT record_mayhem

  VAR_INT flag_blip_1 flag_blip_2 flag_blip_3 flag_blip_4
  VAR_INT flag_blip_5 flag_blip_6 flag_blip_7 flag_blip_8
  VAR_INT flag_blip_9 flag_blip_10 flag_blip_11 flag_blip_12
  VAR_INT flag_blip_13 flag_blip_14 flag_blip_15 flag_blip_16
  VAR_INT flag_blip_17 flag_blip_18 flag_blip_19 flag_blip_20

  VAR_INT blip_1 blip_2 blip_3 blip_4
  VAR_INT blip_5 blip_6 blip_7 blip_8
  VAR_INT blip_9 blip_10 blip_11 blip_12
  VAR_INT blip_13 blip_14 blip_15 blip_16
  VAR_INT blip_17 blip_18 blip_19 blip_20

  VAR_FLOAT x_1 y_1 z_1
  VAR_FLOAT x_2 y_2 z_2
  VAR_FLOAT x_3 y_3 z_3
  VAR_FLOAT x_4 y_4 z_4
  VAR_FLOAT x_5 y_5 z_5
  VAR_FLOAT x_6 y_6 z_6
  VAR_FLOAT x_7 y_7 z_7
  VAR_FLOAT x_8 y_8 z_8
  VAR_FLOAT x_9 y_9 z_9
  VAR_FLOAT x_10 y_10 z_10
  VAR_FLOAT x_11 y_11 z_11
  VAR_FLOAT x_12 y_12 z_12
  */

    // ****************************************Mission Start************************************
}
