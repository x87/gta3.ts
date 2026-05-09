// Generated from Main/Industrial/diablo3.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_diablo3() {
    Stat.RegisterMissionGiven()
    $.flag_player_on_mission = 1
    $.flag_player_on_diablo_mission = 1
    // SCRIPT_NAME diablo3
    await asyncWait(0)

    Streaming.RequestModel(ped`GANG_TRIAD_A`)
    Streaming.RequestModel(ped`GANG_TRIAD_B`)

    $.traid_threat_cleared_D3 = 0

    {
        World.SetPedDensityMultiplier(0.0)
        World.ClearAreaOfChars(890.3, -309.1, 0.0, 1038.1, -132.9, 10.0)

        Cutscene.Load(EL_PH4)
        Cutscene.SetOffset(938.27, -229.561, 4.023)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim($.player)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.Switch(true /* ON */)
        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('DIAB3_A', 10000, 1)

        while ($.cs_time < 5553) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_B', 10000, 1)

        while ($.cs_time < 7767) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_C', 10000, 1)

        while ($.cs_time < 11105) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_D', 10000, 1)

        while ($.cs_time < 14603) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_E', 10000, 1)

        while ($.cs_time < 17813) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_F', 10000, 1)

        while ($.cs_time < 22948) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB3_G', 10000, 1)

        while ($.cs_time < 23775) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearPrints()

        while ($.cs_time < 26333) {
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

        Cutscene.Clear()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SetPedDensityMultiplier(1.0)

        Zone.SetPedInfo('CHINA', 1 /* DAY */, 30, 0, 650, 0, 0, 0, 0, 0, 0)
        Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 30, 0, 650, 0, 0, 0, 0, 0, 0)

        // START MISSION

        $.all_gang_created_before = 0
        $.counter_diablo3 = 0
        $.dead_burn_man1 = 0
        $.dead_burn_man2 = 0
        $.dead_burn_man3 = 0
        $.dead_burn_man4 = 0
        $.dead_burn_man5 = 0
        $.dead_burn_man6 = 0
        $.given_money_before = 0

        if (Game.IsThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)) {
            Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
            $.traid_threat_cleared_D3 = 1
        }

        Player.ResetNumOfModelsKilled()

        $.flamethrower_diablo3 = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 3 /* PICKUP_ONCE */, 0, 879.2, -810.0, -100.0)
        $.blip1_diablo3 = Blip.AddSpriteForCoord(879.2, -810.0, -100.0, 20 /* RADAR_SPRITE_WEAPON */)
        //CHANGE_BLIP_DISPLAY blip1_diablo3 BLIP_ONLY

        while (!Streaming.HasModelLoaded(ped`GANG_TRIAD_A`) || !Streaming.HasModelLoaded(ped`GANG_TRIAD_B`)) {
            await asyncWait(0)
        }

        while (!$.flamethrower_diablo3.hasBeenCollected()) {
            await asyncWait(0)
        }

        $.blip1_diablo3.remove()

        KillFrenzy.Start('DIAB3_1', 9 /* WEAPONTYPE_FLAMETHROWER */, 151000, 25, ped`GANG_TRIAD_A`, ped`GANG_TRIAD_B`, -1, -1, false /* FALSE */)
    }

    async function Diablo3_loop() {
        // SCM GOTO → Diablo3_loop lowered to endless loop
        while (true) {
            await asyncWait(0)

            $.CurrentStatus = KillFrenzy.ReadStatus()

            if ($.CurrentStatus == 2) {
                // SCM GOTO → mission_diablo3_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo3_passed') // fallback: would break linear control flow
            }

            if ($.CurrentStatus == 3) {
                // SCM GOTO → mission_diablo3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo3_failed') // fallback: would break linear control flow
            }

            if ($.player.isInArea2D(1038.0, -781.0, 838.0, -915.0, false /* FALSE */)) {
                if ($.all_gang_created_before == 0) {
                    $.burn_man1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 932.0, -846.0, 14.5)
                    $.burn_man1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 933.0, -846.0, 14.5)
                    $.burn_man2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man2.followChar($.burn_man1)
                    $.burn_man3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 934.0, -846.0, 14.5)
                    $.burn_man3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man3.followChar($.burn_man1)
                    $.burn_man4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 935.0, -846.0, 14.5)
                    $.burn_man4.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man4.followChar($.burn_man1)
                    $.burn_man5 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 936.0, -846.0, 14.5)
                    $.burn_man5.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man5.followChar($.burn_man1)
                    $.burn_man6 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 937.0, -846.0, 14.5)
                    $.burn_man6.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 60)
                    $.burn_man6.followChar($.burn_man1)
                    $.all_gang_created_before = 1
                }

                if (Char.IsDead($.burn_man1) && $.dead_burn_man1 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man1 = 1
                }
                if (Char.IsDead($.burn_man2) && $.dead_burn_man2 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man2 = 1
                }
                if (Char.IsDead($.burn_man3) && $.dead_burn_man3 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man3 = 1
                }
                if (Char.IsDead($.burn_man4) && $.dead_burn_man4 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man4 = 1
                }
                if (Char.IsDead($.burn_man5) && $.dead_burn_man5 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man5 = 1
                }
                if (Char.IsDead($.burn_man6) && $.dead_burn_man6 == 0) {
                    ++$.counter_diablo3
                    $.dead_burn_man6 = 1
                }
                if ($.counter_diablo3 == 6 && $.given_money_before == 0) {
                    $.player.addScore(6000)
                    const _res223 = $.player.getCoordinates()
                    $.player_X = _res223.x
                    $.player_Y = _res223.y
                    $.player_Z = _res223.z
                    Sound.AddOneOffSound($.player_X, $.player_Y, $.player_Z, 94 /* SOUND_PART_MISSION_COMPLETE */)
                    $.given_money_before = 1
                }
                if ($.player.isShootingInArea(916.0, -863.0, 956.0, -830.0, false /* FALSE */) || $.player.isInArea2D(916.0, -863.0, 956.0, -830.0, false /* FALSE */)) {
                    if ($.dead_burn_man1 == 0) {
                        $.burn_man1.setObjKillPlayerOnFoot($.player)
                    }
                    if ($.dead_burn_man2 == 0) {
                        $.burn_man2.setObjKillPlayerOnFoot($.player)
                    }
                    if ($.dead_burn_man3 == 0) {
                        $.burn_man3.setObjKillPlayerOnFoot($.player)
                    }
                    if ($.dead_burn_man4 == 0) {
                        $.burn_man4.setObjKillPlayerOnFoot($.player)
                    }
                    if ($.dead_burn_man5 == 0) {
                        $.burn_man5.setObjKillPlayerOnFoot($.player)
                    }
                    if ($.dead_burn_man6 == 0) {
                        $.burn_man6.setObjKillPlayerOnFoot($.player)
                    }
                }
            }

            $.CurrentStatus = KillFrenzy.ReadStatus()
        }

        // Mission toni1 failed
    }
}

async function mission_diablo3_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed"
    return

    // mission toni1 passed
}

async function mission_diablo3_passed() {
    $.flag_diablo_mission3_passed = 1
    Audio.PlayMissionPassedTune(1)
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
    $.player.clearWantedLevel()
    $.player.addScore(10000)
    Stat.RegisterMissionPassed('DIAB3')
    Stat.PlayerMadeProgress(1)
    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
    // START_NEW_SCRIPT diablo_mission4_loop
    return

    // mission cleanup
}

async function mission_cleanup_diablo3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_diablo_mission = 0
    $.blip1_diablo3.remove()
    $.flamethrower_diablo3.remove()
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
    Zone.SetPedInfo('CHINA', 1 /* DAY */, 20, 0, 200, 0, 0, 0, 0, 0, 20) //China town
    Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 10, 0, 300, 0, 0, 0, 0, 0, 10)
    if ($.traid_threat_cleared_D3 == 1) {
        Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
    }
    Mission.Finish()
    return
}

export async function diablo3() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Deablo mission 3**************************************
    // ***********************************BURN, BURN THEM ALL!!!!*********************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_diablo3
    await mission_start_diablo3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_diablo3_failed
        await mission_diablo3_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_diablo3
    await mission_cleanup_diablo3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    //VAR_INT countdown_diablo3 // On screen countdown timer

    //VAR_INT counter1_dm3

    // VAR_INT counter_diablo3

    // VAR_INT burn_man1 burn_man2 burn_man3 burn_man4 burn_man5 burn_man6

    // VAR_INT dead_burn_man1 dead_burn_man2 dead_burn_man3 dead_burn_man4 dead_burn_man5 dead_burn_man6

    // VAR_INT blip1_diablo3 flamethrower_diablo3

    // VAR_INT all_gang_created_before traid_threat_cleared_D3

    // VAR_INT CurrentStatus given_money_before

    // ***************************************Mission Start*************************************
}
