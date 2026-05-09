// Generated from Main/Industrial/4x4_1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_4x4one() {
    Stat.RegisterMissionGiven();
    // SCRIPT_NAME t4x4_1
    $.flag_player_on_mission = 1;
    //flag_player_on_4x4_mission = 1

    Text.PrintBig('T4X4_1', 5000, 2);

    await asyncWait(0);

    //Set Variables

    $.counter_4x4_pickups = 0;
    $.timer_4x4 = 0;
    $.flag_intro = 0;
    $.flag_timer = 0;
    $.flag_4x4one_trigger = 1;
    $.flag_intro_jump = 0;

    $.flag_blip_1 = 0;
    $.flag_blip_2 = 0;
    $.flag_blip_3 = 0;
    $.flag_blip_4 = 0;
    $.flag_blip_5 = 0;
    $.flag_blip_6 = 0;
    $.flag_blip_7 = 0;
    $.flag_blip_8 = 0;
    $.flag_blip_9 = 0;
    $.flag_blip_10 = 0;
    $.flag_blip_11 = 0;
    $.flag_blip_12 = 0;
    $.flag_blip_13 = 0;
    $.flag_blip_14 = 0;
    $.flag_blip_15 = 0;

    $.record_temp = 0;

    //Set Coords

    $.x_1 = 1391.7;
    $.y_1 = -135.0;
    $.z_1 = 54.8;
    $.x_2 = 1428.7;
    $.y_2 = -350.53;
    $.z_2 = 39.82;
    $.x_3 = 1473.0;
    $.y_3 = -602.5;
    $.z_3 = 3.2;
    $.x_4 = 1508.74;
    $.y_4 = -150.43;
    $.z_4 = 40.31;
    $.x_5 = 1417.4;
    $.y_5 = -108.22;
    $.z_5 = 46.04;
    $.x_6 = 1619.44;
    $.y_6 = -263.8;
    $.z_6 = 27.49;
    $.x_7 = 1414.36;
    $.y_7 = -58.32;
    $.z_7 = 25.68;
    $.x_8 = 1481.34;
    $.y_8 = -146.62;
    $.z_8 = 26.85;
    $.x_9 = 1547.19;
    $.y_9 = -196.93;
    $.z_9 = 18.45;
    $.x_10 = 1557.45;
    $.y_10 = -60.88;
    $.z_10 = 17.62;
    $.x_11 = 1436.13;
    $.y_11 = -210.94;
    $.z_11 = 31.74;
    $.x_12 = 1520.62;
    $.y_12 = -293.49;
    $.z_12 = 3.03;
    $.x_13 = 1417.28;
    $.y_13 = -571.96;
    $.z_13 = 20.0;
    $.x_14 = 1423.66;
    $.y_14 = -488.49;
    $.z_14 = 36.57;
    $.x_15 = 1320.99;
    $.y_15 = -541.66;
    $.z_15 = 37.82;

    //Mission Script

    $.wanted_4x4 = $.player.storeWantedLevel();
    $.player.clearWantedLevel();
    $.player_4x4 = $.player.storeCarIsIn();
    if (!Car.IsDead($.player_4x4)) {
        $.player_4x4.lockDoors(2 /* CARLOCK_LOCKED */);
    }
    $.player.setControl(false /* off */);
    Hud.SwitchWidescreen(true /* on */);

    $.blip_1 = Blip.AddForCoord($.x_1, $.y_1, $.z_1);
    $.blip_2 = Blip.AddForCoord($.x_2, $.y_2, $.z_2);
    $.blip_3 = Blip.AddForCoord($.x_3, $.y_3, $.z_3);
    $.blip_4 = Blip.AddForCoord($.x_4, $.y_4, $.z_4);
    $.blip_5 = Blip.AddForCoord($.x_5, $.y_5, $.z_5);
    $.blip_6 = Blip.AddForCoord($.x_6, $.y_6, $.z_6);
    $.blip_7 = Blip.AddForCoord($.x_7, $.y_7, $.z_7);
    $.blip_8 = Blip.AddForCoord($.x_8, $.y_8, $.z_8);
    $.blip_9 = Blip.AddForCoord($.x_9, $.y_9, $.z_9);
    $.blip_10 = Blip.AddForCoord($.x_10, $.y_10, $.z_10);
    $.blip_11 = Blip.AddForCoord($.x_11, $.y_11, $.z_11);
    $.blip_12 = Blip.AddForCoord($.x_12, $.y_12, $.z_12);
    $.blip_13 = Blip.AddForCoord($.x_13, $.y_13, $.z_13);
    $.blip_14 = Blip.AddForCoord($.x_14, $.y_14, $.z_14);
    $.blip_15 = Blip.AddForCoord($.x_15, $.y_15, $.z_15);

    while ($.counter_4x4_pickups < 15) {
        await asyncWait(0);
        if ($.counter_4x4_pickups == 1 && $.flag_timer == 0) {
            Hud.DisplayTimer($.timer_4x4);
            $.flag_timer = 1;
        }

        if ($.flag_blip_1 == 0) {
            Fx.DrawCorona($.x_1, $.y_1, $.z_1, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_1, $.y_1, $.z_1, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_1.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_1, $.y_1, $.z_1, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_1 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_2 == 0) {
            Fx.DrawCorona($.x_2, $.y_2, $.z_2, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_2, $.y_2, $.z_2, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_2.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_2, $.y_2, $.z_2, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_2 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_3 == 0) {
            Fx.DrawCorona($.x_3, $.y_3, $.z_3, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_3, $.y_3, $.z_3, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_3.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_3, $.y_3, $.z_3, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_3 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_4 == 0) {
            Fx.DrawCorona($.x_4, $.y_4, $.z_4, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_4, $.y_4, $.z_4, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_4.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_4, $.y_4, $.z_4, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_4 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_5 == 0) {
            Fx.DrawCorona($.x_5, $.y_5, $.z_5, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_5, $.y_5, $.z_5, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_5.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_5, $.y_5, $.z_5, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_5 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_6 == 0) {
            Fx.DrawCorona($.x_6, $.y_6, $.z_6, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_6, $.y_6, $.z_6, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_6.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_6, $.y_6, $.z_6, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_6 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_7 == 0) {
            Fx.DrawCorona($.x_7, $.y_7, $.z_7, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_7, $.y_7, $.z_7, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_7.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_7, $.y_7, $.z_7, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_7 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_8 == 0) {
            Fx.DrawCorona($.x_8, $.y_8, $.z_8, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_8, $.y_8, $.z_8, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_8.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_8, $.y_8, $.z_8, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_8 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_9 == 0) {
            Fx.DrawCorona($.x_9, $.y_9, $.z_9, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_9, $.y_9, $.z_9, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_9.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_9, $.y_9, $.z_9, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_9 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_10 == 0) {
            Fx.DrawCorona($.x_10, $.y_10, $.z_10, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_10, $.y_10, $.z_10, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_10.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_10, $.y_10, $.z_10, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_10 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_11 == 0) {
            Fx.DrawCorona($.x_11, $.y_11, $.z_11, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_11, $.y_11, $.z_11, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_11.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_11, $.y_11, $.z_11, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_11 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_12 == 0) {
            Fx.DrawCorona($.x_12, $.y_12, $.z_12, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_12, $.y_12, $.z_12, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_12.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_12, $.y_12, $.z_12, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_12 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_13 == 0) {
            Fx.DrawCorona($.x_13, $.y_13, $.z_13, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_13, $.y_13, $.z_13, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_13.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_13, $.y_13, $.z_13, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_13 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_14 == 0) {
            Fx.DrawCorona($.x_14, $.y_14, $.z_14, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_14, $.y_14, $.z_14, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_14.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_14, $.y_14, $.z_14, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_14 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_blip_15 == 0) {
            Fx.DrawCorona($.x_15, $.y_15, $.z_15, 1.0, 5 /* CORONATYPE_HEX */, 0 /* FLARETYPE_NONE */, 0, 200, 200);
            if ($.player.locateInCar3D($.x_15, $.y_15, $.z_15, 2.5, 2.5, 3.5, false /* false */)) {
                $.blip_15.remove();
                ++$.counter_4x4_pickups;
                Sound.AddOneOffSound($.x_15, $.y_15, $.z_15, 94 /* SOUND_PART_MISSION_COMPLETE */);
                $.timer_4x4 = $.timer_4x4 + 20000;
                $.flag_blip_15 = 1;
                Text.PrintWithNumberNow('T4X4_1B', $.counter_4x4_pickups, 3000, 1);
            }
        }
        if ($.flag_intro1_before == 1) {
            if ($.flag_intro_jump == 0 && $.flag_intro < 5) {
                if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
                    $.intro_time_lapsed = 10501;
                    $.flag_intro = 4;
                    $.flag_intro_jump = 1;
                }
            }
        }
        if ($.flag_intro == 0) {
            $.timer_intro_start = Clock.GetGameTimer();
            Camera.SetFixedPosition(1458.0, -564.0, 28.0, 0.0, 0.0, 0.0);
            Audio.SetMusicDoesFade(false /* FALSE */);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
            Streaming.LoadScene(1458.0, -564.0, 28.0);
            Camera.PointAtPoint($.x_3, $.y_3, $.z_3, 2 /* JUMP_CUT */);
            Camera.DoFade(1500, 1 /* FADE_IN */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
            Text.PrintNow('T4X4_1A', 5500, 1);
            $.flag_intro = 1;
        }
        if ($.flag_intro_jump == 0) {
            $.timer_intro_now = Clock.GetGameTimer();
            $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
        }
        if ($.intro_time_lapsed > 3500 && $.flag_intro == 1) {
            Camera.PointAtPoint($.x_14, $.y_14, $.z_14, 1 /* INTERPOLATION */);
            $.flag_intro = 2;
        }
        if ($.intro_time_lapsed > 6500 && $.flag_intro == 2) {
            Text.PrintNow('T4X4_1C', 5500, 1);
            $.flag_intro = 3;
        }
        if ($.intro_time_lapsed > 7000 && $.flag_intro == 3) {
            Camera.PointAtPoint($.x_13, $.y_13, $.z_13, 1 /* INTERPOLATION */);
            //PRINT_NOW (T4X4_1C) 5500 1
            $.flag_intro = 4;
        }
        if ($.intro_time_lapsed > 10500 && $.flag_intro == 4) {
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
            Text.ClearPrints();
            Streaming.LoadScene(1301.0, -650.0, 12.0);
            Camera.RestoreJumpcut();
            Hud.SwitchWidescreen(false /* off */);
            $.player.setControl(true /* on */);
            if (!Car.IsDead($.player_4x4)) {
                $.player_4x4.lockDoors(1 /* CARLOCK_UNLOCKED */);
            }
            $.player.alterWantedLevel($.wanted_4x4);
            Camera.DoFade(1500, 1 /* FADE_IN */);
            while (Camera.GetFadingStatus()) {
                await asyncWait(0);
            }
            Audio.SetMusicDoesFade(true /* TRUE */);
            $.flag_intro = 5;
            $.flag_intro1_before = 1;
        }
        if ($.flag_timer == 1) {
            if ($.timer_4x4 < 1) {
                Text.PrintNow('taxi2', 3000, 1);
                // SCM GOTO → mission_4x4one_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_4x4one_failed'); // fallback: would break linear control flow
            }
        }
        if (!$.player.isInModel(96 /* CAR_PATRIOT */)) {
            Text.PrintNow('T4x4_F', 3000, 1);
            // SCM GOTO → mission_4x4one_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_4x4one_failed'); // fallback: would break linear control flow
        }
    }

    if ($.counter_4x4_pickups == 15) {
        // SCM GOTO → mission_4x4one_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_4x4one_passed'); // fallback: would break linear control flow
    }

    // --------------------------Mission failed-----------------------------------------------
}

async function mission_4x4one_failed() {
    Text.PrintBig('M_FAIL', 2000, 1);

    return;

    // -------------------------Mission passed-------------------------------------------------
}

async function mission_4x4one_passed() {
    if ($.flag_4x4_mission1_passed == 0) {
        $.record_4x4_one = 300000 - $.timer_4x4;
        $.record_4x4_one = $.record_4x4_one / 1000;
    }

    if ($.flag_4x4_mission1_passed == 1) {
        $.record_temp = 300000 - $.timer_4x4;
        $.record_temp = $.record_temp / 1000;
        if ($.record_temp < $.record_4x4_one) {
            $.record_4x4_one = $.record_temp;
        }
    }

    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.clearWantedLevel();
    $.player.addScore(20000);
    Stat.Register4X4OneTime($.record_4x4_one);
    if ($.flag_4x4_mission1_passed == 0) {
        Stat.RegisterMissionPassed('T4X4_1');
        $.flag_4x4_mission1_passed = 1;
        Stat.PlayerMadeProgress(1);
    }

    //START_NEW_SCRIPT t4x4_mission2_loop
    //START_NEW_SCRIPT multistorey_mission_loop

    return;

    // mission cleanup
}

async function mission_cleanup_4x4one() {
    $.blip_1.remove();
    $.blip_2.remove();
    $.blip_3.remove();
    $.blip_4.remove();
    $.blip_5.remove();
    $.blip_6.remove();
    $.blip_7.remove();
    $.blip_8.remove();
    $.blip_9.remove();
    $.blip_10.remove();
    $.blip_11.remove();
    $.blip_12.remove();
    $.blip_13.remove();
    $.blip_14.remove();
    $.blip_15.remove();

    Camera.RestoreJumpcut();
    Hud.SwitchWidescreen(false /* off */);
    $.player.setControl(true /* on */);

    Hud.ClearTimer($.timer_4x4);
    $.flag_player_on_mission = 0;
    //flag_player_on_4x4_mission = 0

    Mission.Finish();
    return;
}

export async function _4x4_1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***************************************4x4 by Far****************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_4x4one
    await mission_start_4x4one();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB mission_cleanup_4x4one
    await mission_cleanup_4x4one();
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission

    // VAR_INT player_4x4
    // VAR_INT counter_4x4_pickups timer_4x4
    // VAR_INT wanted_4x4 flag_timer
    // VAR_INT intro_time_lapsed timer_intro_now timer_intro_start flag_intro
    // VAR_INT flag_intro_jump

    // VAR_INT flag_blip_1 flag_blip_2 flag_blip_3 flag_blip_4
    // VAR_INT flag_blip_5 flag_blip_6 flag_blip_7 flag_blip_8
    // VAR_INT flag_blip_9 flag_blip_10 flag_blip_11 flag_blip_12
    // VAR_INT flag_blip_13 flag_blip_14 flag_blip_15 flag_blip_16
    // VAR_INT flag_blip_17 flag_blip_18 flag_blip_19 flag_blip_20

    // VAR_INT blip_1 blip_2 blip_3 blip_4
    // VAR_INT blip_5 blip_6 blip_7 blip_8
    // VAR_INT blip_9 blip_10 blip_11 blip_12
    // VAR_INT blip_13 blip_14 blip_15 blip_16
    // VAR_INT blip_17 blip_18 blip_19 blip_20

    // VAR_FLOAT x_1 y_1 z_1
    // VAR_FLOAT x_2 y_2 z_2
    // VAR_FLOAT x_3 y_3 z_3
    // VAR_FLOAT x_4 y_4 z_4
    // VAR_FLOAT x_5 y_5 z_5
    // VAR_FLOAT x_6 y_6 z_6
    // VAR_FLOAT x_7 y_7 z_7
    // VAR_FLOAT x_8 y_8 z_8
    // VAR_FLOAT x_9 y_9 z_9
    // VAR_FLOAT x_10 y_10 z_10
    // VAR_FLOAT x_11 y_11 z_11
    // VAR_FLOAT x_12 y_12 z_12
    // VAR_FLOAT x_13 y_13 z_13
    // VAR_FLOAT x_14 y_14 z_14
    // VAR_FLOAT x_15 y_15 z_15
    // VAR_FLOAT x_16 y_16 z_16
    // VAR_FLOAT x_17 y_17 z_17
    // VAR_FLOAT x_18 y_18 z_18
    // VAR_FLOAT x_19 y_19 z_19
    // VAR_FLOAT x_20 y_20 z_20

    // ****************************************Mission Start************************************
}
