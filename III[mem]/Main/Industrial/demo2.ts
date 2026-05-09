// Generated from Main/Industrial/demo2.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_demo() {}

async function demo_start() {
    // SCM GOTO → demo_start lowered to endless loop
    while (true) {
        Restart.OverrideNext(892.9, -445.0, 14.0);
        $.flag_player_on_mission = 1;
        await asyncWait(0);

        // Player position Luigi's

        $.player.setVisible(false /* FALSE */);
        $.player.setControl(false /* OFF */);
        Game.SetPoliceIgnorePlayer($.player, true /* ON */);
        $.player.setCoordinates(892.9, -445.0, 14.0);
        Hud.SwitchWidescreen(true /* ON */);
        Camera.SetFixedPosition(902.2, -434.2, 14.8, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(920.5, -395.0, 17.0, 2 /* JUMP_CUT */);
        await asyncWait(8000);
        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);

        await asyncWait(1000);

        // player position China Town/Market

        $.player.setCoordinates(928.8, -687.9, 14.0);
        $.player.setHeading(0.0);
        $.player.setVisible(true /* ON */);

        Camera.SetFixedPosition(913.1, -673.9, 14.7, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(931.6, -685.7, 20.6, 2 /* JUMP_CUT */);
        Clock.SetTimeOfDay(0, 36);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);

        await asyncWait(1000);
        $.player.setVisible(false /* FALSE */);

        // player position Docks

        $.player.setCoordinates(1313.5, -954.1, 14.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(1356.3, -921.5, 11.7, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1516.0, -749.2, 69.2, 2 /* JUMP_CUT */);
        Weather.ForceNow(0 /* WEATHER_SUNNY */);
        Clock.SetTimeOfDay(6, 33);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // player position Signs by skyrail

        $.player.setCoordinates(842.4, -780.7, 14.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(846.0, -787.7, 20.4, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(837.2, -778.5, 21.2, 2 /* JUMP_CUT */);
        Weather.ForceNow(2 /* WEATHER_RAINY */);
        Clock.SetTimeOfDay(2, 27);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // Player position subway with cops

        //SET_PLAYER_COORDINATES player 1017.9 -479.2 23.0

        $.player.setCoordinates(1027.1, -445.7, 20.3);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(1021.0, -441.0, 14.8, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1021.8, -441.7, 14.8, 2 /* JUMP_CUT */);
        Weather.ForceNow(1 /* WEATHER_CLOUDY */);
        Clock.SetTimeOfDay(11, 0);
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        $.player.alterWantedLevelNoDrop(3);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();
        $.player.clearWantedLevel();
        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        await asyncWait(1000);

        // Player position Trees and bridge

        $.player.setCoordinates(898.5, -95.1, -100.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(856.0, -65.0, 10.6, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(857.3, -65.9, 10.4, 2 /* JUMP_CUT */);
        Weather.ForceNow(0 /* WEATHER_SUNNY */);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // Player position Hepburn Heights

        $.player.setCoordinates(899.7, -264.7, 4.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(902.1, -262.9, 4.47, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(917.5, -283.1, 7.5, 2 /* JUMP_CUT */);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);

        await asyncWait(1000);

        // Player position Tonis

        $.player.setCoordinates(1187.5, -367.3, 24.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(1188.0, -351.0, 31.0, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1206.7, -324.4, 30.3, 2 /* JUMP_CUT */);
        Weather.ForceNow(1 /* WEATHER_CLOUDY */);
        Clock.SetTimeOfDay(21, 0);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // Player position Red Light/Porn Cinema

        $.player.setCoordinates(889.3, -447.7, 14.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(899.7, -442.3, 15.0, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(914.1, -445.3, 16.0, 2 /* JUMP_CUT */);
        Weather.ForceNow(1 /* WEATHER_CLOUDY */);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // Player position China Town with banners

        $.player.setCoordinates(889.8, -706.9, 14.0);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(891.5, -718.4, 14.5, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(906.9, -748.7, 24.0, 2 /* JUMP_CUT */);
        Weather.ForceNow(2 /* WEATHER_RAINY */);
        Clock.SetTimeOfDay(4, 6);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // Player position looking to Commercial

        $.player.setCoordinates(1021.4, -337.2, 14.5);
        $.player.setHeading(90.0);

        Camera.SetFixedPosition(1043.3, -299.1, 46.0, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(887.2, -432.9, 38.0, 2 /* JUMP_CUT */);
        Weather.ForceNow(0 /* WEATHER_SUNNY */);
        Clock.SetTimeOfDay(12, 44);

        await asyncWait(3000);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        await asyncWait(15000);

        Camera.SetFadingColor(0, 0, 0);
        Camera.DoFade(1000, 0 /* FADE_OUT */);
        Weather.Release();

        await asyncWait(1000);

        // mission joey1 passed
    }
}

async function mission_demo_passed() {
    return;

    // mission cleanup
}

async function mission_cleanup_demo() {
    $.flag_player_on_mission = 0;
    Camera.Restore();
    $.player.setControl(true /* ON */);
    Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
    Hud.SwitchWidescreen(false /* OFF */);
    $.player.setVisible(true /* TRUE */);
    Weather.Release();
    Mission.Finish();
    return;
}

export async function demo2() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Player Demo2****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_demo
    await mission_start_demo();
    // fallback if label was not emitted as async function: no-op continues linearly

    // SCM GOSUB mission_cleanup_demo
    await mission_cleanup_demo();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    //VAR_INT flag_done_loop_once

    // ***************************************Mission Start*************************************
}
