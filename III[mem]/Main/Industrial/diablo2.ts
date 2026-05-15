// Generated from Main/Industrial/diablo2.sc
import { $ } from '../../utils';


async function mission_start_diablo2() {
    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_diablo_mission = 1;
    // SCRIPT_NAME diablo2
    await asyncWait(0);

    {
        World.SetPedDensityMultiplier(0.0);
        World.ClearAreaOfChars(890.3, -309.1, 0.0, 1038.1, -132.9, 10.0);

        Cutscene.Load('EL_PH2');
        Cutscene.SetOffset(938.27, -229.561, 4.023);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }
        Text.PrintNow('DIAB2_A', 10000, 1);

        while ($.cs_time < 9115) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_B', 10000, 1);

        while ($.cs_time < 15149) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_C', 10000, 1);

        while ($.cs_time < 18028) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_D', 10000, 1);

        while ($.cs_time < 20605) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_E', 10000, 1);

        while ($.cs_time < 22985) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_F', 10000, 1);

        while ($.cs_time < 26130) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_G', 10000, 1);

        while ($.cs_time < 30784) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('DIAB2_H', 10000, 1);

        while ($.cs_time < 33726) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 34000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SetPedDensityMultiplier(1.0);

        $.ojective_creamed_guy1_done_before = 0;
        $.ojective_creamed_guy2_done_before = 0;
        $.ojective_creamed_guy3_done_before = 0;
        $.ojective_creamed_guy4_done_before = 0;
        $.ojective_creamed_guys_passed = 0;
        $.creamers_spotted_you = 0;
        $.removed_ice_cream_blip = 0;

        Streaming.RequestModel(113 /* CAR_MRWHOOPEE */);
        Streaming.RequestModel(10 /* PED_GANG_MAFIA_A */);
        Streaming.RequestModel(49 /* PED_LI_MAN1 */);

        while (!Streaming.HasModelLoaded(113 /* CAR_MRWHOOPEE */) || !Streaming.HasModelLoaded(10 /* PED_GANG_MAFIA_A */) || !Streaming.HasModelLoaded(49 /* PED_LI_MAN1 */)) {
            await asyncWait(0);
        }

        await asyncWait(2000);

        $.briefcase_diablo2 = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, 934.9, -69.8, 8.1);
        $.blip1_diablo2 = Blip.AddForPickup($.briefcase_diablo2);

        Text.Print('DIAB2_1', 5000, 1); // Pick up briefcase

        while (!$.briefcase_diablo2.hasBeenCollected()) {
            await asyncWait(0);
        }

        $.blip1_diablo2.remove();

        $.icecream_van1 = Car.Create(113 /* CAR_MRWHOOPEE */, 1381.0, -382.0, -100.0);
        $.icecream_man1 = Char.CreateInsideCar($.icecream_van1, 4 /* PEDTYPE_CIVMALE */, 49 /* PED_LI_MAN1 */);
        $.icecream_van1.setDrivingStyle(0 /* DRIVINGMODE_STOPFORCARS */);
        $.blip1_icecream1 = Blip.AddForCar($.icecream_van1);

        Text.PrintNow('DIAB2_2', 5000, 1); // Find an icecream van

        while (!$.player.isInModel(113 /* CAR_MRWHOOPEE */)) {
            await asyncWait(0);
            if (Car.IsDead($.icecream_van1)) {
                // SCM GOTO → mission_diablo2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo2_failed'); // fallback: would break linear control flow
            }
        }

        $.blip1_icecream1.remove();
        $.icecreamvan_any = $.player.storeCarIsIn();

        if (!Car.IsDead($.icecreamvan_any)) {
            $.icecreamvan_any.armWithBomb(3 /* CARBOMB_REMOTE */);
            Player.GiveDetonator();
            $.player.setCurrentWeapon(12 /* WEAPONTYPE_DETONATOR */);
        }

        Text.PrintNow('DIAB2_3', 5000, 1); // Park the icecream van down at atlantic quays

        $.flag_car_blip_displayed_dm2 = 1 /* TRUE */;
        $.blob_flag = 1;

        while (
            !$.icecreamvan_any.isStoppedInArea3D(1215.9, -1128.7, 11.2, 1210.4, -1123.3, 14.2, $.blob_flag) ||
            !$.player.isInCar($.icecreamvan_any) ||
            !$.icecreamvan_any.isIcecreamJingleOn()
        ) {
            await asyncWait(0);
            if (Car.IsDead($.icecreamvan_any)) {
                // SCM GOTO → mission_diablo2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo2_failed'); // fallback: would break linear control flow
            }
            if ($.icecreamvan_any.isStoppedInArea3D(1215.9, -1128.7, 11.2, 1210.4, -1123.3, 14.2, false /* FALSE */) && $.player.isInCar($.icecreamvan_any)) {
                $.controlmode = Pad.GetControllerMode();
                if ($.controlmode == 0) {
                    Text.PrintNow('DIAB2_6', 1000, 1); // Tap L3 quickly to set the Icecream jingle
                }
                if ($.controlmode == 1) {
                    Text.PrintNow('DIAB2_4', 1000, 1); // Tap L1 quickly to set the Icecream jingle
                }
                if ($.controlmode == 2) {
                    Text.PrintNow('DIAB2_7', 1000, 1); // Tap R1 quickly to set the Icecream jingle
                }
                if ($.controlmode == 3) {
                    Text.PrintNow('DIAB2_6', 1000, 1); // Tap L3 quickly to set the Icecream jingle
                }
            }
            if ($.player.isInCar($.icecreamvan_any)) {
                if ($.flag_car_blip_displayed_dm2 == 1 /* TRUE */) {
                    $.blip2_diablo2 = Blip.AddForCoord(1219.7, -1137.2, -100.0);
                    $.blob_flag = 1;
                    $.blip1_icecream1.remove();
                    $.flag_car_blip_displayed_dm2 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.icecreamvan_any)) {
                if ($.flag_car_blip_displayed_dm2 == 0 /* FALSE */) {
                    $.blip1_icecream1 = Blip.AddForCar($.icecreamvan_any);
                    $.blob_flag = 0;
                    $.blip2_diablo2.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.flag_car_blip_displayed_dm2 = 1 /* TRUE */;
                }
            }
        }

        World.ClearArea(1190.5, -1141.2, 11.6, 2.0, true /* TRUE */);
        $.creamed_guy1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1190.5, -1141.2, 11.6);

        World.ClearArea(1192.5, -1141.2, 11.6, 2.0, true /* TRUE */);
        $.creamed_guy2 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1192.5, -1141.2, 11.6);

        World.ClearArea(1194.5, -1141.2, 11.6, 2.0, true /* TRUE */);
        $.creamed_guy3 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1194.5, -1141.2, 11.6);

        World.ClearArea(1196.5, -1141.2, 11.6, 2.0, true /* TRUE */);
        $.creamed_guy4 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1196.5, -1141.2, 11.6);

        $.creamed_guy1.giveWeapon(3 /* WEAPONTYPE_UZI */, 160);
        $.creamed_guy2.giveWeapon(3 /* WEAPONTYPE_UZI */, 160);
        $.creamed_guy3.giveWeapon(3 /* WEAPONTYPE_UZI */, 160);
        $.creamed_guy4.giveWeapon(3 /* WEAPONTYPE_UZI */, 160);
        $.creamed_guy1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.creamed_guy2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.creamed_guy3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.creamed_guy4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        Text.PrintNow('DIAB2_5', 5000, 1); // Use the remote to detonate the icecream van

        await asyncWait(2000);

        World.ClearArea(1205.6, -1141.1, 11.6, 10.0, true /* TRUE */);

        if (!Char.IsDead($.creamed_guy1)) {
            $.creamed_guy1.setObjGotoCoordOnFoot(1205.6, -1141.1);
        }

        if (!Char.IsDead($.creamed_guy2)) {
            $.creamed_guy2.setObjGotoCoordOnFoot(1205.6, -1141.1);
        }

        if (!Char.IsDead($.creamed_guy3)) {
            $.creamed_guy3.setObjGotoCoordOnFoot(1205.6, -1141.1);
        }

        if (!Char.IsDead($.creamed_guy4)) {
            $.creamed_guy4.setObjGotoCoordOnFoot(1205.6, -1141.1);
        }

        while (!($.ojective_creamed_guys_passed == 4)) {
            await asyncWait(0);
            if (Car.IsDead($.icecreamvan_any) && $.removed_ice_cream_blip == 0) {
                $.blip1_icecream1.remove();
                $.removed_ice_cream_blip = 1;
            }
            if (Char.IsDead($.creamed_guy1) && Char.IsDead($.creamed_guy2) && Char.IsDead($.creamed_guy3) && Char.IsDead($.creamed_guy4)) {
                // SCM GOTO → mission_diablo2_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo2_passed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.creamed_guy1) && $.ojective_creamed_guy1_done_before == 0) {
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy1_done_before = 1;
            }
            if (Char.IsDead($.creamed_guy2) && $.ojective_creamed_guy2_done_before == 0) {
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy2_done_before = 1;
            }
            if (Char.IsDead($.creamed_guy3) && $.ojective_creamed_guy3_done_before == 0) {
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy3_done_before = 1;
            }
            if (Char.IsDead($.creamed_guy4) && $.ojective_creamed_guy4_done_before == 0) {
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy4_done_before = 1;
            }
            const _res222 = $.icecreamvan_any.getCoordinates();
            $.icecreamx = _res222.x;
            $.icecreamy = _res222.y;
            $.icecreamz = _res222.z;
            if ($.creamed_guy1.isObjectivePassed() && $.ojective_creamed_guy1_done_before == 0) {
                $.creamed_guy1.setObjGotoCoordOnFoot($.icecreamx, $.icecreamy);
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy1_done_before = 1;
            }
            if ($.creamed_guy2.isObjectivePassed() && $.ojective_creamed_guy2_done_before == 0) {
                $.creamed_guy2.setObjGotoCoordOnFoot($.icecreamx, $.icecreamy);
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy2_done_before = 1;
            }
            if ($.creamed_guy3.isObjectivePassed() && $.ojective_creamed_guy3_done_before == 0) {
                $.creamed_guy3.setObjGotoCoordOnFoot($.icecreamx, $.icecreamy);
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy3_done_before = 1;
            }
            if ($.creamed_guy4.isObjectivePassed() && $.ojective_creamed_guy4_done_before == 0) {
                $.creamed_guy4.setObjGotoCoordOnFoot($.icecreamx, $.icecreamy);
                $.ojective_creamed_guys_passed++;
                $.ojective_creamed_guy4_done_before = 1;
            }
            if (!Char.IsDead($.creamed_guy1)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy1, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy1.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy2)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy2, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy2.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy3)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy3, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy3.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy4)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy4, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy4.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy1)) {
                $.creamed_guy1_health = $.creamed_guy1.getHealth();
            }
            if (!Char.IsDead($.creamed_guy2)) {
                $.creamed_guy2_health = $.creamed_guy2.getHealth();
            }
            if (!Char.IsDead($.creamed_guy3)) {
                $.creamed_guy3_health = $.creamed_guy3.getHealth();
            }
            if (!Char.IsDead($.creamed_guy4)) {
                $.creamed_guy4_health = $.creamed_guy4.getHealth();
            }
            if ($.creamed_guy1_health < 100 || $.creamed_guy2_health < 100 || $.creamed_guy3_health < 100 || $.creamed_guy4_health < 100) {
                if ($.creamers_spotted_you == 0) {
                    if (!Char.IsDead($.creamed_guy1)) {
                        $.creamed_guy1.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy2)) {
                        $.creamed_guy2.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy3)) {
                        $.creamed_guy3.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy4)) {
                        $.creamed_guy4.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    $.creamers_spotted_you = 1;
                }
            }
        }

        while (!Char.IsDead($.creamed_guy1) || !Char.IsDead($.creamed_guy2) || !Char.IsDead($.creamed_guy3) || !Char.IsDead($.creamed_guy4)) {
            await asyncWait(0);
            if (Car.IsDead($.icecreamvan_any) && $.removed_ice_cream_blip == 0) {
                $.blip1_icecream1.remove();
                $.removed_ice_cream_blip = 1;
            }
            if (!Char.IsDead($.creamed_guy1)) {
                $.creamed_guy1_health = $.creamed_guy1.getHealth();
            }
            if (!Char.IsDead($.creamed_guy2)) {
                $.creamed_guy2_health = $.creamed_guy2.getHealth();
            }
            if (!Char.IsDead($.creamed_guy3)) {
                $.creamed_guy3_health = $.creamed_guy3.getHealth();
            }
            if (!Char.IsDead($.creamed_guy4)) {
                $.creamed_guy4_health = $.creamed_guy4.getHealth();
            }
            if ($.creamed_guy1_health < 100 || $.creamed_guy2_health < 100 || $.creamed_guy3_health < 100 || $.creamed_guy4_health < 100) {
                if ($.creamers_spotted_you == 0) {
                    if (!Char.IsDead($.creamed_guy1)) {
                        $.creamed_guy1.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy2)) {
                        $.creamed_guy2.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy3)) {
                        $.creamed_guy3.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.creamed_guy4)) {
                        $.creamed_guy4.setObjKillPlayerOnFoot($.player);
                        $.creamed_guy4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    $.creamers_spotted_you = 1;
                }
            }
            if (!Char.IsDead($.creamed_guy1)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy1, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy1.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy2)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy2, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy2.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy3)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy3, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy3.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
            if (!Char.IsDead($.creamed_guy4)) {
                if ($.player.locateAnyMeansChar3D($.creamed_guy4, 8.0, 8.0, 2.0, false /* FALSE */)) {
                    $.creamed_guy4.setObjKillPlayerOnFoot($.player);
                    $.creamed_guy4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                }
            }
        }

        // SCM GOTO → mission_diablo2_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_diablo2_passed'); // fallback: would break linear control flow
    }

    // Mission Diablo2 failed
}

async function mission_diablo2_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    return;

    // mission Diablo2 passed
}

async function mission_diablo2_passed() {
    $.flag_diablo_mission2_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 6000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(8000);
    Stat.RegisterMissionPassed('DIAB2');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT diablo_mission3_loop // xxx: moved to mission monitor
    return;

    // mission cleanup
}

async function mission_cleanup_diablo2() {
    ONMISSION = false;
    $.flag_player_on_diablo_mission = 0;
    $.blip1_icecream1.remove();
    $.blip1_diablo2.remove();
    $.blip2_diablo2.remove();
    $.briefcase_diablo2.remove();
    Streaming.MarkModelAsNoLongerNeeded(113 /* CAR_MRWHOOPEE */);
    Streaming.MarkModelAsNoLongerNeeded(10 /* PED_GANG_MAFIA_A */);
    Streaming.MarkModelAsNoLongerNeeded(49 /* PED_LI_MAN1 */);
    $.player.setAmmo(12 /* WEAPONTYPE_DETONATOR */, 0);
    Mission.Finish();
    return;
}

export async function diablo2() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Deablo mission 2**************************************
    // ***********************************Destroy Icream Vans*************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_diablo2
    await mission_start_diablo2();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_diablo2_failed
        await mission_diablo2_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_diablo2
    await mission_cleanup_diablo2();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT icecream_van1 flag_car_blip_displayed_dm2

    // VAR_INT blip1_icecream1 blip1_diablo2 blip2_diablo2 creamers_spotted_you

    // VAR_INT briefcase_diablo2 removed_ice_cream_blip

    // VAR_INT ojective_creamed_guys_passed

    // VAR_INT icecream_man1 icecreamvan_any creamed_guy1 creamed_guy2 creamed_guy3 creamed_guy4

    // VAR_INT ojective_creamed_guy1_done_before ojective_creamed_guy2_done_before ojective_creamed_guy3_done_before ojective_creamed_guy4_done_before

    // VAR_FLOAT icecreamx icecreamy icecreamz

    // VAR_INT creamed_guy1_health creamed_guy2_health creamed_guy3_health creamed_guy4_health

    // ***************************************Mission Start*************************************
}
