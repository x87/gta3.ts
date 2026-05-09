// Generated from Main/Suburban/4x4_3.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_4x4three() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME t4x4_3
    $.flag_player_on_mission = 1
    //flag_player_on_4x4_mission = 1

    Text.PrintBig('T4X4_3', 5000, 2)

    await asyncWait(0)

    //Set Variables

    $.counter_4x4_pickups = 0
    $.timer_4x4 = 0
    $.flag_intro = 0
    $.flag_timer = 0
    $.flag_4x4three_trigger = 1
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

    $.record_temp = 0

    //Set Coords

    $.x_1 = -236.5
    $.y_1 = 188.8
    $.z_1 = 11.6

    $.x_2 = -288.6
    $.y_2 = 153.7
    $.z_2 = 8.4

    $.x_3 = -346.8
    $.y_3 = 158.0
    $.z_3 = 25.0

    $.x_4 = -399.8
    $.y_4 = 194.6
    $.z_4 = 50.7

    $.x_5 = -389.4
    $.y_5 = 195.7
    $.z_5 = 50.3

    $.x_6 = -335.9
    $.y_6 = 202.2
    $.z_6 = 54.7

    $.x_7 = -445.3
    $.y_7 = 205.6
    $.z_7 = 63.8

    $.x_8 = -296.9
    $.y_8 = 262.4
    $.z_8 = 66.7

    $.x_9 = -210.2
    $.y_9 = 399.9
    $.z_9 = 98.3

    $.x_10 = -187.6
    $.y_10 = 557.6
    $.z_10 = 141.6

    $.x_11 = -230.1
    $.y_11 = 609.3
    $.z_11 = 138.2

    $.x_12 = -393.5
    $.y_12 = 502.8
    $.z_12 = 150.3

    $.x_13 = -526.5
    $.y_13 = 497.2
    $.z_13 = 165.4

    $.x_14 = -393.2
    $.y_14 = 403.8
    $.z_14 = 133.9

    $.x_15 = -499.4
    $.y_15 = 407.9
    $.z_15 = 116.2

    $.x_16 = -686.6
    $.y_16 = 386.3
    $.z_16 = 103.1

    $.x_17 = -744.4
    $.y_17 = 507.8
    $.z_17 = 159.0

    $.x_18 = -814.9
    $.y_18 = 563.1
    $.z_18 = 120.5

    $.x_19 = -879.9
    $.y_19 = 585.7
    $.z_19 = 94.0

    $.x_20 = -829.3
    $.y_20 = 412.3
    $.z_20 = 93.5

    //Mission Script

    $.wanted_4x4 = $.player.storeWantedLevel()
    $.player.clearWantedLevel()
    $.player_4x4 = $.player.storeCarIsIn()
    if (!Car.IsDead($.player_4x4)) {
        $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */)
    }

    $.player.setControl(false /* off */)
    Hud.SwitchWidescreen(true /* on */)

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
        if ($.counter_4x4_pickups == 1 && $.flag_timer == 0) {
            Hud.DisplayTimer($.timer_4x4)
            $.flag_timer = 1
        }

        if ($.flag_blip_1 == 0) {
            Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_1, $.y_1, $.z_1, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_1.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_1 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_2 == 0) {
            Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_2, $.y_2, $.z_2, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_2.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_2 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_3 == 0) {
            Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_3, $.y_3, $.z_3, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_3.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_3 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_4 == 0) {
            Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_4, $.y_4, $.z_4, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_4.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_4 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_5 == 0) {
            Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_5, $.y_5, $.z_5, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_5.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_5 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_6 == 0) {
            Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_6, $.y_6, $.z_6, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_6.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_6 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_7 == 0) {
            Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_7, $.y_7, $.z_7, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_7.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_7 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_8 == 0) {
            Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_8, $.y_8, $.z_8, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_8.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_8 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_9 == 0) {
            Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_9, $.y_9, $.z_9, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_9.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_9 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_10 == 0) {
            Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_10, $.y_10, $.z_10, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_10.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_10 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_11 == 0) {
            Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_11, $.y_11, $.z_11, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_11.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_11 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_12 == 0) {
            Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_12, $.y_12, $.z_12, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_12.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_12 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_13 == 0) {
            Fx.DrawCorona($.x_13, $.y_13, $.z_13, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_13, $.y_13, $.z_13, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_13.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_13, $.y_13, $.z_13, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_13 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_14 == 0) {
            Fx.DrawCorona($.x_14, $.y_14, $.z_14, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_14, $.y_14, $.z_14, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_14.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_14, $.y_14, $.z_14, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_14 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_15 == 0) {
            Fx.DrawCorona($.x_15, $.y_15, $.z_15, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_15, $.y_15, $.z_15, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_15.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_15, $.y_15, $.z_15, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_15 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_16 == 0) {
            Fx.DrawCorona($.x_16, $.y_16, $.z_16, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_16, $.y_16, $.z_16, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_16.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_16, $.y_16, $.z_16, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_16 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_17 == 0) {
            Fx.DrawCorona($.x_17, $.y_17, $.z_17, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_17, $.y_17, $.z_17, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_17.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_17, $.y_17, $.z_17, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_17 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_18 == 0) {
            Fx.DrawCorona($.x_18, $.y_18, $.z_18, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_18, $.y_18, $.z_18, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_18.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_18, $.y_18, $.z_18, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_18 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_19 == 0) {
            Fx.DrawCorona($.x_19, $.y_19, $.z_19, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_19, $.y_19, $.z_19, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_19.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_19, $.y_19, $.z_19, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_19 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_blip_20 == 0) {
            Fx.DrawCorona($.x_20, $.y_20, $.z_20, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200)
            if ($.player.locateInCar3D($.x_20, $.y_20, $.z_20, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_20.remove()
                ++$.counter_4x4_pickups
                Sound.AddOneOffSound($.x_20, $.y_20, $.z_20, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.timer_4x4 = $.timer_4x4 + 15000
                $.flag_blip_20 = 1
                Text.PrintWithNumberNow('T4X4_3C', $.counter_4x4_pickups, 3000, 1)
            }
        }
        if ($.flag_intro3_before == 1) {
            if ($.flag_intro_jump == 0 && $.flag_intro < 4) {
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.intro_time_lapsed = 8501
                    $.flag_intro = 3
                    $.flag_intro_jump = 1
                }
            }
        }
        if ($.flag_intro == 0) {
            $.timer_intro_start = Clock.GetGameTimer()
            Camera.SetFixedPosition(-328.0, 132.0, 25.0, 0.0, 0.0, 0.0)
            Audio.SetMusicDoesFade(false /* FALSE */)
            Camera.DoFade(1500, 0 /* FADE_OUT */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Streaming.LoadScene(-328.0, 132.0, 25.0)
            Camera.PointAtPoint($.x_2, $.y_2, $.z_2, 2 /* JUMP_CUT */)
            Camera.DoFade(1500, 1 /* FADE_IN */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Text.PrintNow('T4X4_3A', 5000, 1)
            $.flag_intro = 1
        }
        if ($.flag_intro_jump == 0) {
            $.timer_intro_now = Clock.GetGameTimer()
            $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start
        }
        if ($.intro_time_lapsed > 4500 && $.flag_intro == 1) {
            Camera.PointAtPoint($.x_3, $.y_3, $.z_3, 1 /* INTERPOLATION */)
            $.flag_intro = 2
        }
        if ($.intro_time_lapsed > 6000 && $.flag_intro == 2) {
            Camera.PointAtPoint($.x_4, $.y_4, $.z_4, 1 /* INTERPOLATION */)
            Text.PrintNow('T4X4_3B', 5000, 1)
            $.flag_intro = 3
        }
        if ($.intro_time_lapsed > 8500 && $.flag_intro == 3) {
            Camera.DoFade(1500, 0 /* FADE_OUT */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Text.ClearPrints()
            Streaming.LoadScene(-230.0, 270.0, 20.0)
            Camera.RestoreJumpcut()
            Hud.SwitchWidescreen(false /* off */)
            $.player.setControl(true /* on */)
            if (!Car.IsDead($.player_4x4)) {
                $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */)
            }
            $.player.alterWantedLevel($.wanted_4x4)
            Camera.DoFade(1500, 1 /* FADE_IN */)
            while (Camera.GetFadingStatus()) {
                await asyncWait(0)
            }
            Audio.SetMusicDoesFade(true /* TRUE */)
            $.flag_intro = 4
            $.flag_intro3_before = 1
        }
        if ($.flag_timer == 1) {
            if ($.timer_4x4 < 1) {
                Text.PrintNow('taxi2', 3000, 1)
                // SCM GOTO → mission_4x4three_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_4x4three_failed') // fallback: would break linear control flow
            }
        }
        if (!$.player.isInModel(89 /* CAR_PATRIOT */)) {
            Text.PrintNow('T4x4_F', 3000, 1)
            // SCM GOTO → mission_4x4three_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_4x4three_failed') // fallback: would break linear control flow
        }
    }

    if ($.counter_4x4_pickups == 20) {
        // SCM GOTO → mission_4x4three_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_4x4three_passed') // fallback: would break linear control flow
    }

    // --------------------------Mission failed-----------------------------------------------
}

async function mission_4x4three_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)

    return

    // -------------------------Mission passed-------------------------------------------------
}

async function mission_4x4three_passed() {
    if ($.flag_4x4_mission3_passed == 0) {
        $.record_4x4_three = 300000 - $.timer_4x4
        $.record_4x4_three = $.record_4x4_three / 1000
    }

    if ($.flag_4x4_mission3_passed == 1) {
        $.record_temp = 300000 - $.timer_4x4
        $.record_temp = $.record_temp / 1000
        if ($.record_temp < $.record_4x4_three) {
            $.record_4x4_three = $.record_temp
        }
    }

    Text.PrintWithNumberBig('M_PASS', 40000, 5000, 1) //"Mission Passed!"
    $.player.clearWantedLevel()
    $.player.addScore(40000)
    Stat.Register4X4ThreeTime($.record_4x4_three)

    if ($.flag_4x4_mission3_passed == 0) {
        Stat.RegisterMissionPassed('T4X4_3')
        $.flag_4x4_mission3_passed = 1
        Stat.PlayerMadeProgress(1)
    }

    //START_NEW_SCRIPT t4x4_mission2_loop
    //START_NEW_SCRIPT multistorey_mission_loop

    return

    // mission cleanup
}

async function mission_cleanup_4x4three() {
    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    $.player.setControl(true /* on */)

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

    Hud.ClearTimer($.timer_4x4)
    $.flag_player_on_mission = 0
    //flag_player_on_4x4_mission = 0

    Mission.Finish()
    return
}

export async function _4x4_3() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***************************************GRIPPED, SORTED***********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_4x4three
    await mission_start_4x4three()
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB mission_cleanup_4x4three
    await mission_cleanup_4x4three()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission

    //VAR_INT player_4x4_three
    //VAR_INT counter_4x4_pickups timer_4x4
    //VAR_INT flag_timer_patriot
    //VAR_INT intro_time_lapsed timer_intro_now timer_intro_start flag_intro
    /*
  VAR_INT blip_1 blip_2 blip_3
  VAR_INT blip_4 blip_5 blip_6
  VAR_INT blip_7 blip_8 blip_9
  VAR_INT blip_10 blip_11 blip_12
  VAR_INT blip_13 blip_14 blip_15

  VAR_INT flag_blip_17 flag_blip_2 flag_blip_3 flag_blip_4
  VAR_INT flag_blip_5 flag_blip_6 flag_blip_7 flag_blip_8
  VAR_INT flag_blip_9 flag_blip_10 flag_blip_11 flag_blip_12
  VAR_INT flag_blip_13 flag_blip_14 flag_blip_15 flag_blip_16

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
  VAR_FLOAT x_13 y_13 z_13
  VAR_FLOAT x_14 y_14 z_14
  VAR_FLOAT x_15 y_15 z_15
  VAR_FLOAT x_16 y_16 z_16
  VAR_FLOAT x_17 y_17 z_17
  VAR_FLOAT x_18 y_18 z_18
  VAR_FLOAT x_19 y_19 z_19
  VAR_FLOAT x_20 y_20 z_20
  */

    // ****************************************Mission Start************************************
}
