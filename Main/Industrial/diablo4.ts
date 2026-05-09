// Generated from Main/Industrial/diablo4.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_diablo4() {
    Stat.RegisterMissionGiven()
    $.flag_player_on_mission = 1
    $.flag_player_on_diablo_mission = 1
    // SCRIPT_NAME diablo4

    $.audio_loop_diablo4 = 0
    $.NumEaten_diablo4_total = 0
    $.found_perv_before = 0
    $.eaten_all_the_porn = 0

    await asyncWait(0)

    {
        World.SetPedDensityMultiplier(0.0)
        World.ClearAreaOfChars(890.3, -309.1, 0.0, 1038.1, -132.9, 10.0)

        Cutscene.Load(EL_PH3)
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

        Text.PrintNow('DIAB4_A', 10000, 1)

        while ($.cs_time < 7326) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_B', 10000, 1)

        while ($.cs_time < 10740) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_C', 10000, 1)

        while ($.cs_time < 12550) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_D', 10000, 1)

        while ($.cs_time < 17195) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_E', 10000, 1)

        while ($.cs_time < 22417) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_F', 10000, 1)

        while ($.cs_time < 24124) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_G', 10000, 1)

        while ($.cs_time < 28426) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('DIAB4_H', 10000, 1)

        while ($.cs_time < 33574) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearPrints()

        while ($.cs_time < 34000) {
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

        Audio.LoadMissionAudio(EL3_A)

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
        }

        $.NumEaten_diablo4 = 0

        if ($.flag_asuka_mission1_passed == 1) {
            Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */) //The Mafia
        }

        Streaming.RequestModel(car`RUMPO`)
        Streaming.RequestModel(ped`MALE2`)
        Streaming.LoadSpecialCharacter(1, DONKY)

        while (!Streaming.HasModelLoaded(car`RUMPO`) || !Streaming.HasModelLoaded(ped`MALE2`)) {
            await asyncWait(0)
        }

        World.ClearArea(918.2, -269.7, 5.0, 5.0, true /* TRUE */)
        $.diablo_collect_porn_van = Car.Create(123 /* CAR_RUMPO */, 918.2, -269.7, -100.0)
        $.blip1_porn_van = Blip.AddForCar($.diablo_collect_porn_van)

        if (Car.IsDead($.diablo_collect_porn_van)) {
            // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
        }

        //GOTO pervert_test //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        while (!$.player.isInCar($.diablo_collect_porn_van)) {
            await asyncWait(0)
            if (Car.IsDead($.diablo_collect_porn_van)) {
                // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
            }
        }

        Pacman.StartRace(0)

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)
        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)

        if ($.diablo_collect_porn_van.locate2D(918.2, -269.7, 10.0, 10.0, false /* FALSE */)) {
            Camera.SetFixedPosition(914.282, -157.729, 6.409, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(914.107, -156.829, 6.012, 1 /* INTERPOLATION */)
        } else {
            Camera.SetFixedPosition(914.282, -157.729, 6.409, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(914.107, -156.829, 6.012, 2 /* JUMP_CUT */)
        }

        await asyncWait(4000)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)
        $.player.setControl(true /* ON */)
        Hud.SwitchWidescreen(false /* OFF */)
        Camera.RestoreJumpcut()

        $.blip1_porn_van.remove()

        $.porn_van = Car.Create(123 /* CAR_RUMPO */, 1577.1, -679.0, -100.0)
        $.porn_van.setHeading(309.0)

        $.porn_man = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`MALE2`, 1574.0, -681.1, -100.0)
        $.blip3_pornman = Blip.AddForChar($.porn_man)
        $.blip3_pornman.changeDisplay(1 /* MARKER_ONLY */)

        $.counter_diablo4 = 26000
        Hud.DisplayTimer($.counter_diablo4)

        if (Car.IsDead($.diablo_collect_porn_van)) {
            // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
        }

        $.flag_car_blip_displayed_dm4 = 1 /* TRUE */

        while (!Char.IsDead($.porn_man)) {
            await asyncWait(0)
            if (Car.IsDead($.diablo_collect_porn_van)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
            }
            if (!Char.IsDead($.porn_man)) {
                if ($.player.locateAnyMeansChar2D($.porn_man, 30.0, 30.0, false /* FALSE */) && $.found_perv_before == 0) {
                    Hud.ClearTimer($.counter_diablo4)
                    $.found_perv_before = 1
                }
            }
            if ($.counter_diablo4 == 0) {
                // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
            }
            $.NumEaten_diablo4 = Pacman.GetNumberOfPowerPillsEaten()
            if ($.NumEaten_diablo4 > 0 && $.player.isInCar($.diablo_collect_porn_van)) {
                $.counter_diablo4 = $.counter_diablo4 + 1300
                Pacman.ClearNumberOfPowerPillsEaten()
                $.NumEaten_diablo4_total++
            }
            if ($.NumEaten_diablo4_total > 0 && $.audio_loop_diablo4 == 0) {
                Audio.PlayMissionAudio()
                $.audio_loop_diablo4 = 1
            }
            if ($.player.isInCar($.diablo_collect_porn_van)) {
                if ($.flag_car_blip_displayed_dm4 == 1 /* TRUE */) {
                    $.blip1_porn_van.remove()
                    Text.ClearThisPrint('IN_VEH')
                    $.flag_car_blip_displayed_dm4 = 0 /* FALSE */
                }
            }
            if (!$.player.isInCar($.diablo_collect_porn_van)) {
                if ($.flag_car_blip_displayed_dm4 == 0 /* FALSE */) {
                    $.blip1_porn_van = Blip.AddForCar($.diablo_collect_porn_van)
                    Text.PrintNow('IN_VEH', 5000, 1) //"Get back in the car!"
                    $.flag_car_blip_displayed_dm4 = 1 /* TRUE */
                }
            }
            if ($.NumEaten_diablo4_total == 106 && $.eaten_all_the_porn == 0) {
                $.player.addScore(10000)
                const _res224 = $.player.getCoordinates()
                $.player_X = _res224.x
                $.player_Y = _res224.y
                $.player_Z = _res224.z
                Sound.AddOneOffSound($.player_X, $.player_Y, $.player_Z, 94 /* SOUND_PART_MISSION_COMPLETE */)
                $.eaten_all_the_porn = 1
            }
        }

        $.blip3_pornman.remove()
        $.blip1_porn_van.remove()
        $.blip2_porn_shop = Blip.AddForCoord(973.9, -428.3, -100.0)
        $.blip2_porn_shop.remove()

        Hud.ClearTimer($.counter_diablo4)
        Pacman.Clear()

        Text.PrintNow('DIAB4_1', 5000, 1) // Mission brief

        if (Car.IsDead($.diablo_collect_porn_van)) {
            // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
        }

        if ($.player.isInCar($.diablo_collect_porn_van)) {
            $.flag_car_blip_displayed_dm4 = 1 /* TRUE */
        } else {
            $.flag_car_blip_displayed_dm4 = 0 /* FALSE */
        }

        while (!$.diablo_collect_porn_van.isStoppedInArea3D(976.5, -422.8, 14.5, 970.8, -433.4, 16.9, true /* TRUE */)) {
            await asyncWait(0)
            if (Car.IsDead($.diablo_collect_porn_van)) {
                Text.PrintNow('WRECKED', 5000, 1)
                // SCM GOTO → mission_diablo4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_diablo4_failed') // fallback: would break linear control flow
            }
            if ($.player.isInCar($.diablo_collect_porn_van)) {
                if ($.flag_car_blip_displayed_dm4 == 1 /* TRUE */) {
                    $.blip2_porn_shop = Blip.AddForCoord(973.9, -428.3, -100.0)
                    $.blip1_porn_van.remove()
                    Text.ClearThisPrint('IN_VEH')
                    $.flag_car_blip_displayed_dm4 = 0 /* FALSE */
                }
            }
            if (!$.player.isInCar($.diablo_collect_porn_van)) {
                if ($.flag_car_blip_displayed_dm4 == 0 /* FALSE */) {
                    $.blip1_porn_van = Blip.AddForCar($.diablo_collect_porn_van)
                    $.blip2_porn_shop.remove()
                    Text.PrintSoon('IN_VEH', 5000, 1) //"Get back in the car!"
                    $.flag_car_blip_displayed_dm4 = 1 /* TRUE */
                }
            }
        }

        //PERVERTS CUT SCENE*********************************************************************

        //pervert_test:

        Game.SetPoliceIgnorePlayer($.player, true /* On */)
        $.player.setControl(false /* Off */)
        Hud.SwitchWidescreen(true /* ON */)
        World.SetPedDensityMultiplier(0.0)

        while (!Streaming.HasSpecialCharacterLoaded(1)) {
            await asyncWait(0)
        }

        await asyncWait(1000)

        Audio.SetMusicDoesFade(false /* FALSE */)
        Camera.SetFadingColor(0, 0, 0)
        Camera.DoFade(1000, 0 /* FADE_OUT */)

        await asyncWait(1000)

        World.ClearArea(988.9, -444.7, 14.9, 10.0, true /* TRUE */)

        $.pervert1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SPECIAL1`, 988.7, -444.5, 14.1)
        $.pervert1.setHeading(180.0)

        $.pervert2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SPECIAL1`, 987.7, -444.3, 13.9)
        $.pervert2.setHeading(140.0)

        $.pervert3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SPECIAL1`, 986.9, -444.9, 13.9)
        $.pervert3.setHeading(140.0)

        $.pervert4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE2`, 990.4, -441.9, 14.1)
        $.pervert4.setHeading(83.0)

        $.pervert5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE2`, 991.1, -440.7, 13.9)
        $.pervert5.setHeading(128.0)

        $.pervert6 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE2`, 992.1, -439.1, 13.9)
        $.pervert6.setHeading(141.0)

        $.pervert7 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE2`, 992.0, -437.7, 13.9)
        $.pervert7.setHeading(180.0)

        $.pervert8 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE2`, 992.1, -436.1, 13.9)
        $.pervert8.setHeading(180.0)

        Camera.SetFixedPosition(982.705, -448.508, 16.014, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(982.707, -447.632, 16.496, 2 /* JUMP_CUT */)

        $.pervert1.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 10000)
        $.pervert3.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 10000)
        $.pervert2.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 10000)

        $.pervert1.followChar($.pervert3)
        $.pervert2.followChar($.pervert3)

        Camera.DoFade(1000, 1 /* FADE_IN */)

        await asyncWait(2000)

        Camera.SetFixedPosition(986.596, -448.508, 16.014, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(986.514, -447.632, 16.496, 1 /* INTERPOLATION */)

        await asyncWait(3000)

        if (!Char.IsDead($.pervert3)) {
            Camera.SetFixedPosition(988.078, -445.869, 16.3, 0.0, 0.0, 0.0)
            Camera.PointAtChar($.pervert3, 15 /* FIXED */, 1 /* INTERPOLATION */)
        }

        await asyncWait(3000)

        World.ClearArea(978.9, -444.4, 14.9, 3.0, true /* TRUE */)

        if (!Char.IsDead($.pervert3)) {
            $.pervert3.setObjGotoCoordOnFoot(935.6, -445.8)
        }

        await asyncWait(4000)

        World.SetPedDensityMultiplier(1.0)

        Camera.SetFixedPosition(994.524, -451.391, 18.02, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(994.048, -450.563, 17.724, 1 /* INTERPOLATION */)

        await asyncWait(6000)

        if (!Char.IsDead($.pervert3)) {
            $.pervert3.wanderDir(90)
        }

        if (!Char.IsDead($.pervert2)) {
            $.pervert2.wanderDir(90)
        }

        if (!Char.IsDead($.pervert1)) {
            $.pervert1.wanderDir(90)
        }

        //PERVERTS CUT SCENE END******************************************************************

        if (!Car.IsDead($.diablo_collect_porn_van)) {
            if ($.player.isInCar($.diablo_collect_porn_van)) {
                World.ClearArea(978.3, -442.7, 13.9, 1.0, true /* TRUE */)
                $.player.warpFromCarToCoord(978.3, -442.7, 13.9)
                $.player.setHeading(180.0)
            } else {
                World.ClearArea(978.3, -442.7, 13.9, 1.0, true /* TRUE */)
                $.player.setCoordinates(978.3, -442.7, 13.9)
                $.player.setHeading(180.0)
            }
        }

        // SCM GOTO → mission_diablo4_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_diablo4_passed') // fallback: would break linear control flow
    }

    // Mission toni1 failed
}

async function mission_diablo4_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed"
    return

    // mission toni1 passed
}

async function mission_diablo4_passed() {
    $.flag_diablo_mission4_passed = 1
    Audio.PlayMissionPassedTune(1)
    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1) //"Mission Passed!"
    $.player.clearWantedLevel()
    $.player.addScore(20000)
    $.donkeymag1 = ScriptObject.Create(1325 /* donkeymag */, 895.2, -308.2, 7.4)
    $.donkeymag1.dontRemove()
    $.donkeymag2 = ScriptObject.Create(1325 /* donkeymag */, 896.1, -308.6, 7.4)
    $.donkeymag2.dontRemove()
    $.donkeymag3 = ScriptObject.Create(1325 /* donkeymag */, 890.1, -309.6, 7.4)
    $.donkeymag3.dontRemove()
    $.donkeymag1.setHeading(260.0)
    $.donkeymag2.setHeading(280.0)
    $.donkeymag3.setHeading(190.0)
    $.flag_diablo_mission1_passed = 0
    $.diablo_contact_blip.remove()
    // START_NEW_SCRIPT diablo_mission1_loop
    Stat.RegisterMissionPassed('DIAB4')
    Stat.PlayerMadeProgress(1)
    return

    // mission cleanup
}

async function mission_cleanup_diablo4() {
    $.flag_player_on_mission = 0
    $.flag_player_on_diablo_mission = 0
    $.blip1_porn_van.remove()
    $.blip2_porn_shop.remove()
    $.blip3_pornman.remove()
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`MALE2`)
    Streaming.MarkModelAsNoLongerNeeded(car`RUMPO`)
    Hud.ClearTimer($.counter_diablo4)
    Pacman.Clear()
    Audio.SetMusicDoesFade(true /* TRUE */)
    Streaming.UnloadSpecialCharacter(1)
    if ($.flag_asuka_mission1_passed == 1) {
        Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 4 /* WEAPONTYPE_SHOTGUN */) //The Mafia
    }
    Mission.Finish()
    return
}

export async function diablo4() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Deablo mission 4**************************************
    // ***************************************Donkey Porn*****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_diablo4
    await mission_start_diablo4()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_diablo4_failed
        await mission_diablo4_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_diablo4
    await mission_cleanup_diablo4()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT counter_diablo4

    // VAR_INT porn_man porn_van blip1_porn_van blip2_porn_shop blip3_pornman

    // VAR_INT NumEaten_diablo4 NumEaten_diablo4_total eaten_all_the_porn

    // VAR_INT diablo_collect_porn_van audio_loop_diablo4

    // VAR_INT flag_car_blip_displayed_dm4 found_perv_before

    // VAR_INT donkeymag1 donkeymag2 donkeymag3 pervert1 pervert2 pervert3 pervert4 pervert5 pervert6 pervert7 pervert8

    //VAR_INT pac_man_record_on	//Create a new race

    // ***************************************Mission Start*************************************
}
