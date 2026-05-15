// Generated from Main/Industrial/rc1.sc
import { $ } from '../../utils';


async function mission_start_rc1() {
    ONMISSION = true;

    if ($.flag_rc1_passed == 0) {
        Stat.RegisterMissionGiven();
    }

    Text.PrintBig('RC1', 15000, 2);

    await asyncWait(0);

    $.counter_RCDD = 0;
    $.flag_buggy_help1_hm2 = 0;
    $.controlmode = 0;
    $.reward_RCDD = 0;

    $.cam_x = 1019.0;
    $.cam_y = -113.5;
    $.cam_z = 9.0;

    $.rc_x = 1026.0;
    $.rc_y = -117.0;
    $.rc_z = 5.5;

    $.timer_RCDD = 120000;

    Player.ResetNumOfModelsKilled();

    Game.SetPoliceIgnorePlayer($.player, true /* ON */);
    $.player.setControl(false /* off */);
    $.wanted_4x4 = $.player.storeWantedLevel();
    $.player.clearWantedLevel();
    $.rc_van = $.player.storeCarIsIn();
    Hud.SwitchWidescreen(true /* on */);

    //UP GANGCAR NUMBERS AND DENSITY

    Zone.SetCarInfo('TOWERS', 1 /* DAY */, 8, 0, 0, 200, 0, 0, 0, 0, 20, 400, 0, 0, 350, 0, 0);
    Zone.SetCarInfo('TOWERS', 0 /* NIGHT */, 6, 0, 0, 250, 0, 0, 0, 0, 10, 540, 0, 0, 200, 0, 0);

    Camera.SetFixedPosition($.cam_x, $.cam_y, $.cam_z, 0.0, 0.0, 0.0);
    if (!Car.IsDead($.rc_van)) {
        $.rc_van.lockDoors(2 /* CARLOCK_LOCKED */);
        Camera.PointAtCar($.rc_van, 15 /* FIXED */, 2 /* JUMP_CUT */);
        World.ClearArea($.rc_x, $.rc_y, $.rc_z, 5.0, true /* true */);
    }

    Text.PrintNow('RC_1', 4000, 1); //You have 4 minutes to blow up as many Diablo Gang Cars as possible!

    Streaming.RequestModel(131 /* car_rcbandit */);
    Streaming.RequestModel(137 /* car_diablos */);

    while (!Streaming.HasModelLoaded(131 /* car_rcbandit */) || !Streaming.HasModelLoaded(137 /* car_diablos */)) {
        await asyncWait(0);
    }

    //GIVE_REMOTE_CONTROLLED_CAR_TO_PLAYER player rc_x rc_y rc_z 180.0

    Hud.DisplayCounterWithString($.counter_RCDD, 0 /* COUNTER_DISPLAY_NUMBER */, 'KILLS');
    Hud.DisplayTimer($.timer_RCDD);
    $.timer_intro_start = Clock.GetGameTimer();

    while (!($.timer_RCDD < 1)) {
        await asyncWait(0);
        $.timer_intro_now = Clock.GetGameTimer();
        $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
        if (Car.IsDead($.rc_van)) {
            Text.PrintNow('WRECKED', 3000, 1); //"The vehicle's wrecked!"
            // SCM GOTO → mission_rc1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_rc1_failed'); // fallback: would break linear control flow
        }
        if ($.player.isPlaying()) {
            $.player.clearWantedLevel();
            if ($.intro_time_lapsed > 4000 && $.flag_buggy_help1_hm2 == 0) {
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 0) {
                    Text.PrintHelp('RCHELP'); //"Press |, or drive the RC car into a vehicle's wheels to detonate"
                    $.flag_buggy_help1_hm2 = 1;
                }
                if ($.controlmode == 1) {
                    Text.PrintHelp('RCHELP'); //"Press |, or drive the RC car into a vehicle's wheels to detonate"
                    $.flag_buggy_help1_hm2 = 1;
                }
                if ($.controlmode == 2) {
                    Text.PrintHelp('RCHELP'); //"Press |, or drive the RC car into a vehicle's wheels to detonate"
                    $.flag_buggy_help1_hm2 = 1;
                }
                if ($.controlmode == 3) {
                    Text.PrintHelp('RCHELPA'); //"Press the R1 button, or drive the RC car into a vehicle's wheels to detonate"
                    $.flag_buggy_help1_hm2 = 1;
                }
                Hud.SwitchWidescreen(false /* off */);
                $.player.setControl(true /* on */);
                Camera.Restore();
            }
            if (!$.player.isSittingInCar($.rc_van)) {
                // SCM GOTO → mission_rc1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_rc1_failed'); // fallback: would break linear control flow
            }
        } else {
            // SCM GOTO → mission_rc1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_rc1_failed'); // fallback: would break linear control flow
        }
        $.counter_RCDD = Player.GetNumOfModelsKilled(137 /* car_diablos */);
        if ($.intro_time_lapsed > 4000) {
            if (!$.player.isInRemoteMode()) {
                Rc.GiveCarToPlayer($.player, $.rc_x, $.rc_y, $.rc_z, 180.0);
            }
        }
    }

    Hud.ClearTimer($.timer_RCDD);
    Hud.ClearCounter($.counter_RCDD);

    Rc.BlowUpBuggy();

    {
        TIMERA = 0;

        while (TIMERA < 1500) {
            await asyncWait(0);
        }
    }

    if ($.counter_RCDD > $.rec_rc1) {
        $.reward_RCDD = $.counter_RCDD - $.rec_rc1;
        $.reward_RCDD = $.reward_RCDD * 1000;
        $.rec_rc1 = $.counter_RCDD;
        // SCM GOTO → mission_rc1_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_rc1_passed'); // fallback: would break linear control flow
    }

    // Mission rc1 failed
}

async function mission_rc1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
    Text.PrintNow('NRECORD', 5000, 1);
    return;

    // mission rc1 passed
}

async function mission_rc1_passed() {
    //reward_RCDD = counter_RCDD * 1000

    Text.PrintWithNumberBig('M_PASS', $.reward_RCDD, 5000, 1); //"Mission Passed!"
    Text.PrintNow('RECORD', 3000, 1);
    Audio.PlayMissionPassedTune(1);
    $.player.addScore($.reward_RCDD);
    if ($.flag_rc1_passed == 0) {
        Stat.PlayerMadeProgress(1);
        $.flag_rc1_passed = 1;
        Stat.RegisterMissionPassed('RC1');
    }
    Stat.RegisterHighestScore(1, $.rec_rc1);

    return;

    // mission cleanup
}

async function mission_cleanup_rc1() {
    ONMISSION = false;
    $.flag_just_done_rc_mission = 1;
    Streaming.LoadScene($.cam_x, $.cam_y, $.cam_z);
    Streaming.MarkModelAsNoLongerNeeded(131 /* car_rcbandit */);
    Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
    $.player.setControl(true /* ON */);
    Camera.Restore();
    Hud.SwitchWidescreen(false /* OFF */);
    $.player.alterWantedLevel($.wanted_4x4);

    Hud.ClearTimer($.timer_RCDD);
    Hud.ClearCounter($.counter_RCDD);

    Rc.BlowUpBuggy();

    if (!Car.IsDead($.rc_van)) {
        $.rc_van.lockDoors(1 /* CARLOCK_UNLOCKED */);
    }

    Zone.SetCarInfo('TOWERS', 1 /* DAY */, 8, 0, 0, 100, 0, 0, 0, 0, 20, 400, 0, 0, 350, 0, 0);
    Zone.SetCarInfo('TOWERS', 0 /* NIGHT */, 6, 0, 0, 150, 0, 0, 0, 0, 10, 550, 0, 0, 200, 0, 0);

    Streaming.MarkModelAsNoLongerNeeded(137 /* car_diablos */);

    Mission.Finish();
    return;
}

export async function rc1() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // **************************************RC Destruction Derby*********************************
    // ***************************************Diablo Demolition***********************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME RC1

    // Mission start stuff

    // SCM GOSUB mission_start_rc1
    await mission_start_rc1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_rc1_failed
        await mission_rc1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_rc1
    await mission_cleanup_rc1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT counter_RCDD rc_van
    // VAR_INT timer_RCDD
    // VAR_INT reward_RCDD
    // VAR_FLOAT cam_x cam_y cam_z
    // VAR_FLOAT rc_x rc_y rc_z

    // ***************************************Mission Start*************************************
}
