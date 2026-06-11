// Generated from Main/Industrial/rc2.sc
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// **************************************RC Destruction Derby*********************************
// ***************************************Diablo Demolition***********************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // SCRIPT_NAME RC2

    // Mission start stuff

    // GOSUB mission_start_rc2

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_rc2_failed
    // ENDIF
    // GOSUB mission_cleanup_rc2

    // MISSION_END

    // Variables for mission

    /*
  VAR_INT counter_RCDD rc_van
  VAR_INT timer_RCDD
  VAR_INT reward_RCDD

  VAR_FLOAT cam_x cam_y cam_z
  VAR_FLOAT rc_x rc_y rc_z
  */
    // ***************************************Mission Start*************************************

    ONMISSION = true;

    if ($.flag_rc2_passed == 0) {
        Stat.RegisterMissionGiven();
    }

    Text.PrintBig('RC2', 15000, 2);

    await asyncWait(0);

    $.counter_RCDD = 0;
    $.flag_buggy_help1_hm2 = 0;
    $.controlmode = 0;
    $.reward_RCDD = 0;

    $.cam_x = 1159.0;
    $.cam_y = -317.5;
    $.cam_z = 24.0;

    $.rc_x = 1166.0;
    $.rc_y = -310.0;
    $.rc_z = 23.5;

    $.timer_RCDD = 120000;

    Player.ResetNumOfModelsKilled();

    Game.SetPoliceIgnorePlayer($.player, ON);
    $.player.setControl(OFF);
    $.wanted_4x4 = $.player.storeWantedLevel();
    $.player.clearWantedLevel();
    $.rc_van = $.player.storeCarIsIn();
    Hud.SwitchWidescreen(ON);

    //UP GANGCAR NUMBERS AND DENSITY

    Zone.SetCarInfo('LITTLEI', DAY, 10, 250, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 250, 50, 0);
    Zone.SetCarInfo('LITTLEI', NIGHT, 8, 250, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 150, 0, 0);

    Camera.SetFixedPosition($.cam_x, $.cam_y, $.cam_z, 0.0, 0.0, 0.0);
    if (!Car.IsDead($.rc_van)) {
        $.rc_van.lockDoors(CARLOCK_LOCKED);
        Camera.PointAtCar($.rc_van, FIXED, JUMP_CUT);
        World.ClearArea($.rc_x, $.rc_y, $.rc_z, 5.0, true);
    }

    Text.PrintNow('RC_2', 4000, 1); //You have 4 minutes to blow up as many Diablo Gang Cars as possible!

    Streaming.RequestModel(CAR_RCBANDIT);
    Streaming.RequestModel(CAR_MAFIA);

    while (!Streaming.HasModelLoaded(CAR_RCBANDIT) || !Streaming.HasModelLoaded(CAR_MAFIA)) {
        await asyncWait(0);
    }

    //GIVE_REMOTE_CONTROLLED_CAR_TO_PLAYER player rc_x rc_y rc_z 180.0

    Hud.DisplayCounterWithString($.$id.counter_RCDD, 0, 'KILLS');
    Hud.DisplayTimer($.$id.timer_RCDD);
    $.timer_intro_start = Clock.GetGameTimer();

    while (!($.timer_RCDD < 1)) {
        await asyncWait(0);
        $.timer_intro_now = Clock.GetGameTimer();
        $.intro_time_lapsed = $.timer_intro_now - $.timer_intro_start;
        if (Car.IsDead($.rc_van)) {
            Text.PrintNow('WRECKED', 3000, 1); //"The vehicle's wrecked!"
            FAIL("mission_rc2_failed");
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
                Hud.SwitchWidescreen(OFF);
                $.player.setControl(ON);
                Camera.Restore();
            }
            if (!$.player.isSittingInCar($.rc_van)) {
                FAIL("mission_rc2_failed");
            }
        } else {
            FAIL("mission_rc2_failed");
        }
        $.counter_RCDD = Player.GetNumOfModelsKilled(CAR_MAFIA);
        if ($.intro_time_lapsed > 4000) {
            if (!$.player.isInRemoteMode()) {
                Rc.GiveCarToPlayer($.player, $.rc_x, $.rc_y, $.rc_z, 180.0);
            }
        }
    }

    Hud.ClearTimer($.$id.timer_RCDD);
    Hud.ClearCounter($.$id.counter_RCDD);
    Rc.BlowUpBuggy();

    TIMERA = 0;

    while (TIMERA < 1500) {
        await asyncWait(0);
    }

    if ($.counter_RCDD > $.rec_rc2) {
        $.reward_RCDD = $.counter_RCDD - $.rec_rc2;
        $.reward_RCDD = $.reward_RCDD * 1000;
        $.rec_rc2 = $.counter_RCDD;
        return; // SCM GOTO → mission_rc2_passed
    } else {
        FAIL("mission_rc2_failed");
    }
}

// Mission rc2 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
    Text.PrintNow('NRECORD', 5000, 1);
}

// mission rc2 passed
async function onPassed() {
    //reward_RCDD = counter_RCDD * 1000

    Text.PrintWithNumberBig('M_PASS', $.reward_RCDD, 5000, 1); //"Mission Passed!"
    Text.PrintNow('RECORD', 3000, 1);
    Audio.PlayMissionPassedTune(1);
    $.player.addScore($.reward_RCDD);
    if ($.flag_rc2_passed == 0) {
        Stat.PlayerMadeProgress(1);
        $.flag_rc2_passed = 1;
        Stat.RegisterMissionPassed('RC2');
    }
    Stat.RegisterHighestScore(2, $.rec_rc2);
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_just_done_rc_mission = 1;
    Streaming.LoadScene($.cam_x, $.cam_y, $.cam_z);
    Streaming.MarkModelAsNoLongerNeeded(CAR_RCBANDIT);
    Game.SetPoliceIgnorePlayer($.player, OFF);
    $.player.setControl(ON);
    Camera.Restore();
    Hud.SwitchWidescreen(OFF);
    $.player.alterWantedLevel($.wanted_4x4);

    Hud.ClearTimer($.$id.timer_RCDD);
    Hud.ClearCounter($.$id.counter_RCDD);
    Rc.BlowUpBuggy();

    if (!Car.IsDead($.rc_van)) {
        $.rc_van.lockDoors(CARLOCK_UNLOCKED);
    }

    Zone.SetCarInfo('LITTLEI', DAY, 10, 100, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 350, 50, 0);
    Zone.SetCarInfo('LITTLEI', NIGHT, 8, 150, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 150, 0, 0);

    Streaming.MarkModelAsNoLongerNeeded(CAR_MAFIA);

    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
