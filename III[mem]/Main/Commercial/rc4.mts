// Generated from Main/Commercial/rc4.sc
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// **************************************RC Destruction Derby*********************************
// ***************************************Diablo Demolition***********************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // SCRIPT_NAME RC4

    // Mission start stuff

    // GOSUB mission_start_rc4

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_rc4_failed
    // ENDIF
    // GOSUB mission_cleanup_rc4

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

    if ($.flag_rc4_passed == 0) {
        Stat.RegisterMissionGiven();
    }
    Text.PrintBig('RC3', 15000, 2);

    await asyncWait(0);

    $.counter_RCDD = 0;
    $.flag_buggy_help1_hm2 = 0;
    $.controlmode = 0;
    $.reward_RCDD = 0;

    $.cam_x = 370.0;
    $.cam_y = -1316.0;
    $.cam_z = 29.0;

    $.rc_x = 373.0;
    $.rc_y = -1317.0;
    $.rc_z = 26.5;

    $.timer_RCDD = 120000;

    Player.ResetNumOfModelsKilled();

    Game.SetPoliceIgnorePlayer($.player, ON);
    $.player.setControl(OFF);
    $.wanted_4x4 = $.player.storeWantedLevel();
    $.player.clearWantedLevel();
    $.rc_van = $.player.storeCarIsIn();
    Hud.SwitchWidescreen(ON);

    //UP GANGCAR NUMBERS AND DENSITY

    Zone.SetCarInfo('YAKUSA', DAY, 20, 0, 0, 0, 270, 0, 0, 0, 10, 300, 200, 200, 0, 0, 0);
    Zone.SetCarInfo('YAKUSA', NIGHT, 15, 0, 0, 0, 290, 0, 0, 0, 10, 300, 200, 200, 0, 0, 0);

    Camera.SetFixedPosition($.cam_x, $.cam_y, $.cam_z, 0.0, 0.0, 0.0);
    if (!Car.IsDead($.rc_van)) {
        $.rc_van.lockDoors(CARLOCK_LOCKED);
        Camera.PointAtCar($.rc_van, FIXED, JUMP_CUT);
        World.ClearArea($.rc_x, $.rc_y, $.rc_z, 5.0, true);
    }

    Text.PrintNow('RC_3', 4000, 1); //You have 4 minutes to blow up as many Diablo Gang Cars as possible!

    Streaming.RequestModel(131 /* car_rcbandit */);
    //REQUEST_MODEL car_yakuza

    while (!Streaming.HasModelLoaded(131 /* car_rcbandit */)) {
        //OR NOT HAS_MODEL_LOADED car_yakuza
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
            FAIL("mission_rc4_failed");
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
                FAIL("mission_rc4_failed");
            }
        } else {
            FAIL("mission_rc4_failed");
        }
        $.counter_RCDD = Player.GetNumOfModelsKilled(136 /* car_yakuza */);
        if ($.intro_time_lapsed > 4000) {
            if (!$.player.isInRemoteMode()) {
                Rc.GiveCarToPlayer($.player, $.rc_x, $.rc_y, $.rc_z, 60.0);
            }
        }
    }

    Hud.ClearTimer($.$id.timer_RCDD);
    Hud.ClearCounter($.$id.counter_RCDD);
    Rc.BlowUpBuggy();

    {
        TIMERA = 0;

        while (TIMERA < 1500) {
            await asyncWait(0);
        }
    }

    if ($.counter_RCDD > $.rec_rc4) {
        $.reward_RCDD = $.counter_RCDD - $.rec_rc4;
        $.reward_RCDD = $.reward_RCDD * 1000;
        $.rec_rc4 = $.counter_RCDD;
        return; // SCM GOTO → mission_rc4_passed
    } else {
        FAIL("mission_rc4_failed");
    }
}

// Mission rc4 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
    Text.PrintNow('NRECORD', 5000, 1);
}

// mission rc4 passed
async function onPassed() {
    //reward_RCDD = counter_RCDD * 1000

    Text.PrintWithNumberBig('M_PASS', $.reward_RCDD, 5000, 1); //"Mission Passed!"
    Text.PrintNow('RECORD', 3000, 1);
    Audio.PlayMissionPassedTune(1);
    $.player.addScore($.reward_RCDD);
    if ($.flag_rc4_passed == 0) {
        Stat.PlayerMadeProgress(1);
        $.flag_rc4_passed = 1;
        Stat.RegisterMissionPassed('RC3');
    }
    Stat.RegisterHighestScore(3, $.rec_rc4);
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_just_done_rc_mission = 1;
    Streaming.LoadScene($.cam_x, $.cam_y, $.cam_z);
    Streaming.MarkModelAsNoLongerNeeded(131 /* car_rcbandit */);
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

    Zone.SetCarInfo('YAKUSA', DAY, 20, 0, 0, 0, 100, 0, 0, 0, 20, 350, 200, 250, 0, 0, 0);
    Zone.SetCarInfo('YAKUSA', NIGHT, 15, 0, 0, 0, 150, 0, 0, 0, 10, 350, 200, 200, 0, 0, 0);

    //MARK_MODEL_AS_NO_LONGER_NEEDED car_yakuza

    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
