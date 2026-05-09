// Generated from Main/Industrial/toni2.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_toni2() {
    Stat.RegisterMissionGiven()
    $.flag_player_on_mission = 1
    $.flag_player_on_toni_mission = 1
    // SCRIPT_NAME toni2
    await asyncWait(0)

    $.thong1_dead = 0
    $.thong1B_dead = 0
    $.thong2_dead = 0
    $.thong2B_dead = 0
    $.thong3_dead = 0
    $.thong3B_dead = 0
    $.thongs_killed = 0
    $.thongs_killed_message = 0
    $.traid_threat_cleared_T2 = 0

    {
        Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH)
        Streaming.LoadSpecialModel(hier`cutobj02`, NOTE)
        Streaming.RequestModel(ind_newrizzos)

        Streaming.LoadAllModelsNow()

        while (!Streaming.HasModelLoaded(hier`cutobj01`) || !Streaming.HasModelLoaded(hier`cutobj02`) || !Streaming.HasModelLoaded(ind_newrizzos)) {
            await asyncWait(0)
        }

        Cutscene.Load(T2_TPU)
        Cutscene.SetOffset(1218.42, -314.5, 28.9)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim($.player)

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
        $.cs_playerhead.setAnim($.player)

        $.cs_note = CutsceneObject.Create(hier`cutobj02`)
        $.cs_note.setAnim(NOTE)

        World.ClearArea(1219.5, -321.1, 27.5, 1.0, true /* TRUE */)
        $.player.setCoordinates(1219.5, -321.1, 26.4)

        $.player.setHeading(180.0)

        World.ClearArea(1216.1, -313.0, 29.9, 10.0, true /* TRUE */) //TONIS RESTAURANT

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)
        Streaming.Switch(true /* ON */)
        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 151) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('TM2_A', 10000, 1)

        while ($.cs_time < 3879) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('TM2_AA', 10000, 1)

        while ($.cs_time < 7522) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('TM2_B', 10000, 1)

        while ($.cs_time < 10947) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('TM2_C', 10000, 1)

        while ($.cs_time < 14507) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('TM2_D', 10000, 1)

        while ($.cs_time < 18705) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('TM2_E', 10000, 1)

        while ($.cs_time < 22114) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearPrints()

        while ($.cs_time < 23333) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        while (!Cutscene.HasFinished()) {
            await asyncWait(0)
        }

        Text.ClearPrints()

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        World.SwitchRubbish(true /* ON */)
        Cutscene.Clear()
        Camera.SetInFrontOfPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(ind_newrizzos)

        // START OF MISSION

        if (Game.IsThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)) {
            Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
            $.traid_threat_cleared_T2 = 1
        }

        $.gen_car31.switch(0)

        $.briefcase_tm2 = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, 865.7, -663.6, 14.8)

        $.blip1_t2 = Blip.AddForPickup($.briefcase_tm2)

        Streaming.RequestModel(car`BELLYUP`)
        Streaming.RequestModel(ped`GANG_TRIAD_A`)
        Streaming.RequestModel(ped`GANG_TRIAD_B`)

        while (!Streaming.HasModelLoaded(car`BELLYUP`) || !Streaming.HasModelLoaded(ped`GANG_TRIAD_A`) || !Streaming.HasModelLoaded(ped`GANG_TRIAD_B`)) {
            await asyncWait(0)
        }
    }

    async function main_toni2() {
        await asyncWait(0)

        while (!$.briefcase_tm2.hasBeenCollected()) {
            await asyncWait(0)
        }

        $.blip1_t2.remove()

        Game.SetPoliceIgnorePlayer($.player, true /* On */)
        $.player.setControl(false /* Off */)
        Hud.SwitchWidescreen(true /* ON */)

        World.ClearArea(869.4, -639.0, 15.0, 1.0, true /* TRUE */)
        $.thong1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 869.4, -639.0, -100.0)
        $.thong1.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1)
        $.thong1.setObjGotoCoordOnFoot(869.4, -656.0)

        World.ClearArea(868.5, -637.0, 15.0, 1.0, true /* TRUE */)
        $.thong1B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 868.5, -637.0, -100.0)
        $.thong1B.setHeading(180.0)
        $.thong1B.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 200)
        //SET_CHAR_OBJ_GOTO_COORD_ON_FOOT thong1B 869.4 -656.0

        Camera.SetFixedPosition(869.7, -666.0, 16.0, 0.0, 0.0, 0.0)

        Camera.PointAtChar($.thong1, 15 /* FIXED */, 1 /* INTERPOLATION */)

        await asyncWait(2500)

        World.ClearArea(869.4, -688.0, 15.0, 1.0, true /* TRUE */)
        $.thong2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 869.4, -688.0, -100.0)
        $.thong2.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1)
        $.thong2.setObjGotoCoordOnFoot(869.4, -678.0)

        World.ClearArea(868.5, -690.0, 15.0, 1.0, true /* TRUE */)
        $.thong2B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 868.5, -690.0, -100.0)
        $.thong2B.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
        //SET_CHAR_OBJ_GOTO_COORD_ON_FOOT thong2B 869.4 -678.0

        Camera.PointAtChar($.thong2, 15 /* FIXED */, 1 /* INTERPOLATION */)

        await asyncWait(2500)

        World.ClearArea(892.6, -666.0, 15.0, 4.0, true /* TRUE */)
        $.thong_car = Car.Create(125 /* CAR_BELLYUP */, 892.5, -666.0, -100.0)
        $.thong_car.setHeading(180.0)
        $.thong3 = Char.CreateInsideCar($.thong_car, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`)
        $.thong3B = Char.CreateAsPassenger($.thong_car, 8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 0)
        $.thong3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 27)
        $.thong3B.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 1)
        $.thong_car.setIdle()

        Camera.PointAtCar($.thong_car, 15 /* FIXED */, 1 /* INTERPOLATION */)

        $.thong3B.setObjLeaveCar($.thong_car)

        while ($.thong3B.isInCar($.thong_car)) {
            await asyncWait(0)
            if (Char.IsDead($.thong3B) || Car.IsDead($.thong_car)) {
                // SCM GOTO → next_bit_tm2 (not lowered; manual jump required)
                throw new Error('unresolved GOTO next_bit_tm2') // fallback: would break linear control flow
            }
        }

        if (!Char.IsDead($.thong3B)) {
            $.thong3B.setObjGotoCoordOnFoot(886.2, -665.8)
        }

        await asyncWait(2500)
    }

    async function next_bit_tm2() {
        $.player.setControl(true /* On */)
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)
        Hud.SwitchWidescreen(false /* OFF */)
        Camera.Restore()

        await asyncWait(0)

        if (!Char.IsDead($.thong1)) {
            $.thong1.setObjKillPlayerAnyMeans($.player)
            $.thong1.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }

        if (!Char.IsDead($.thong1B)) {
            //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS thong1B player
            $.thong1B.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }

        if (!Char.IsDead($.thong2)) {
            $.thong2.setObjKillPlayerAnyMeans($.player)
            $.thong2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }

        if (!Char.IsDead($.thong2B)) {
            //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS thong2B player
            $.thong2B.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }

        if (!Char.IsDead($.thong3B)) {
            $.thong3B.setObjKillPlayerAnyMeans($.player)
            $.thong3B.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }

        Text.PrintNow('TM2_3', 5000, 1) // " Get back to Toni's!"

        if (!Char.IsDead($.thong1)) {
            $.thong_blip1 = Blip.AddForChar($.thong1)
        }
        if (!Char.IsDead($.thong1B)) {
            $.thong_blip1B = Blip.AddForChar($.thong1B)
        }
        if (!Char.IsDead($.thong2)) {
            $.thong_blip2 = Blip.AddForChar($.thong2)
        }
        if (!Char.IsDead($.thong2B)) {
            $.thong_blip2B = Blip.AddForChar($.thong2B)
        }
        if (!Char.IsDead($.thong3)) {
            $.thong_blip3 = Blip.AddForChar($.thong3)
        }
        if (!Char.IsDead($.thong3B)) {
            $.thong_blip3B = Blip.AddForChar($.thong3B)
        }

        while (!($.thongs_killed == 6)) {
            await asyncWait(0)
            if (Char.IsDead($.thong1) && $.thong1_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip1.remove()
                $.thong1_dead = 1
            }
            if (Char.IsDead($.thong1B) && $.thong1B_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip1B.remove()
                $.thong1B_dead = 1
            }
            if (Char.IsDead($.thong2) && $.thong2_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip2.remove()
                $.thong2_dead = 1
            }
            if (Char.IsDead($.thong2B) && $.thong2B_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip2B.remove()
                $.thong2B_dead = 1
            }
            if (Char.IsDead($.thong3) && $.thong3_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip3.remove()
                $.thong3_dead = 1
            }
            if (Char.IsDead($.thong3B) && $.thong3B_dead == 0) {
                $.thongs_killed++
                //ADD_SCORE player 500
                $.thong_blip3B.remove()
                $.thong3B_dead = 1
            }
            if (!$.player.isInArea2D(890.0, -639.3, 846.6, -688.0, false /* FALSE */)) {
                if (!Char.IsDead($.thong1B)) {
                    $.thong1B.setObjKillPlayerAnyMeans($.player)
                    //SET_CHAR_THREAT_SEARCH thong1B THREAT_PLAYER1
                }
                if (!Char.IsDead($.thong2B)) {
                    $.thong2B.setObjKillPlayerAnyMeans($.player)
                    //SET_CHAR_THREAT_SEARCH thong1B THREAT_PLAYER1
                }
                if (!Char.IsDead($.thong3)) {
                    $.thong3.setObjKillPlayerAnyMeans($.player)
                    $.thong3.setThreatSearch(0 /* THREAT_PLAYER1 */)
                }
            }
        }

        Text.PrintNow('TM2_1', 5000, 1) // " Get back to Toni's!"

        $.blip2_t2 = Blip.AddForCoord(1223.0, -327.0, -100.0)
        //CHANGE_BLIP_DISPLAY blip2_t2 BLIP_ONLY

        while (!$.player.locateOnFoot3D(1219.6, -320.7, 27.4, 1.0, 1.0, 2.0, true /* TRUE */)) {
            await asyncWait(0)

            /*
    IF thongs_killed = 6
    AND thongs_killed_message = 0
    PRINT_NOW ( TM2_2 ) 6000 1
    ADD_SCORE player 500
    thongs_killed_message = 1
    ENDIF
    */
        }

        $.player.setControl(false /* OFF */)
        Game.SetPoliceIgnorePlayer($.player, true /* ON */)
        Hud.SwitchWidescreen(true /* ON */)

        $.script_controlled_player = $.player.getChar()
        $.script_controlled_player.setRunning(true /* TRUE */)

        Camera.SetFixedPosition(1214.4, -323.9, 29.8, 0.0, 0.0, 0)
        Camera.PointAtPoint(1215.2, -323.4, 29.4, 2 /* JUMP_CUT */)

        World.ClearArea(1219.6, -314.0, 29.7, 2.0, true /* TRUE */)
        $.script_controlled_player.setObjRunToCoord(1219.6, -314.0)

        Audio.PlayMissionPassedTune(1)
        Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
        $.player.clearWantedLevel()
        $.player.addScore(10000)

        TIMERB = 0

        while (!$.script_controlled_player.isObjectivePassed()) {
            await asyncWait(0)
            if (TIMERB > 7000) {
                if (!Char.IsDead($.script_controlled_player)) {
                    $.script_controlled_player.setCoordinates(1219.6, -314.0, -100.0)
                }
            }
        }

        World.ClearArea(1219.6, -323.8, 26.8, 2.0, true /* TRUE */)
        $.script_controlled_player.setObjRunToCoord(1219.6, -323.8)

        TIMERB = 0

        while (!$.script_controlled_player.isObjectivePassed()) {
            await asyncWait(0)
            if (TIMERB > 7000) {
                if (!Char.IsDead($.script_controlled_player)) {
                    $.script_controlled_player.setCoordinates(1219.6, -323.8, -100.0)
                }
            }
        }

        $.player.setControl(true /* ON */)
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)
        Hud.SwitchWidescreen(false /* OFF */)
        Camera.RestoreJumpcut()
        $.script_controlled_player.setRunning(false /* FALSE */)
    }

    // SCM GOTO → mission_toni2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_toni2_passed') // fallback: would break linear control flow

    // Mission toni2 failed
}

async function mission_toni2_failed() {
    return

    // mission toni2 passed
}

async function mission_toni2_passed() {
    $.flag_toni_mission2_passed = 1
    //PLAY_MISSION_PASSED_TUNE 1
    //PRINT_WITH_NUMBER_BIG ( M_PASS ) 10000 5000 1 //"Mission Passed!"
    //CLEAR_WANTED_LEVEL player
    //ADD_SCORE player 10000

    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
    Stat.RegisterMissionPassed(TM2)
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT toni_mission3_loop
    return

    // mission cleanup
}

async function mission_cleanup_toni2() {
    $.flag_player_on_mission = 0
    $.flag_player_on_toni_mission = 0
    $.gen_car31.switch(101)
    $.blip1_t2.remove()
    $.blip2_t2.remove()
    $.thong_blip1.remove()
    $.thong_blip1B.remove()
    $.thong_blip2.remove()
    $.thong_blip2B.remove()
    $.thong_blip3.remove()
    $.thong_blip3B.remove()
    $.briefcase_tm2.remove()
    Streaming.MarkModelAsNoLongerNeeded(car`BELLYUP`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
    if ($.traid_threat_cleared_T2 == 1) {
        Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
    }
    Mission.Finish()
    return
}

export async function toni2() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Toni mission 2****************************************
    // **************************************Triad Ambush*****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_toni2
    await mission_start_toni2()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_toni2_failed
        await mission_toni2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_toni2
    await mission_cleanup_toni2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT thong1 thong1B thong2 thong2B thong3 thong3B thong_car

    // VAR_INT blip1_t2 blip2_t2 thong_blip1 thong_blip1B thong_blip2 thong_blip2B thong_blip3 thong_blip3B

    // VAR_INT thong1_dead thong1B_dead thong2_dead thong2B_dead thong3_dead thong3B_dead thongs_killed thongs_killed_message

    // VAR_INT briefcase_tm2 traid_threat_cleared_T2

    // ***************************************Mission Start*************************************
}
