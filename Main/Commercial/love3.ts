// Generated from Main/Commercial/love3.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_love3() {
    $.flag_player_on_mission = 1
    $.flag_player_on_love_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME love3

    $.drug_current_timer = 0
    $.temporary_time_drug = 0
    $.last_drug_dropped_timer = 0
    $.package_numbers = 0
    $.packages_collected = 0
    $.police_boat_flag = 0
    $.police_rating = 0

    $.packge_01 = 0
    $.packge_02 = 0
    $.packge_03 = 0
    $.packge_04 = 0
    $.packge_05 = 0
    $.packge_06 = 0

    $.counter_display_flag = 0
    //garage_flag_l3 = 0

    $.PlaneX = 0.0
    $.PlaneY = 0.0
    $.PlaneZ = 0.0

    // ****************************************START OF CUTSCENE********************************

    Streaming.LoadSpecialCharacter(1, love2)
    Streaming.LoadSpecialCharacter(2, ojg2)
    Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH)
    Streaming.RequestModel(tshrorckgrdn)
    Streaming.RequestModel(tshrorckgrdn_alfas)

    Streaming.LoadAllModelsNow()

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasSpecialCharacterLoaded(2) ||
        !Streaming.HasModelLoaded(hier`cutobj01`) ||
        !Streaming.HasModelLoaded(tshrorckgrdn_alfas) ||
        !Streaming.HasModelLoaded(tshrorckgrdn)
    ) {
        await asyncWait(0)
    }

    Cutscene.Load(D3_ADO)

    Cutscene.SetOffset(85.2162, -1532.9093, 243.5422)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim($.player)

    $.cs_love = CutsceneObject.Create(ped`SPECIAL1`)
    $.cs_love.setAnim(love2)

    $.cs_ojg = CutsceneObject.Create(ped`SPECIAL2`)
    $.cs_ojg.setAnim(ojg2)

    $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`)
    $.cs_lovehead.setAnim($.love)

    World.ClearArea(82.44, -1548.49, 28.0, 2.0, true /* TRUE */)

    $.player.setCoordinates(82.44, -1548.49, 28.0)

    $.player.setHeading(90.0)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    Streaming.Switch(true /* ON */)
    World.SwitchRubbish(false /* OFF */)

    Cutscene.Start()

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 12262) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(LOVE3_A, 5000, 1) //"In these days of moral hypocrisy certain valuable commodities can be hard to import."

    while ($.cs_time < 16652) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(LOVE3_B, 5000, 1) //"On it's approach to Liberty airport tonight, a light aircraft will pass over the bay."

    while ($.cs_time < 20065) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(LOVE3_C, 5000, 1) //"It will drop several packages into the water."

    while ($.cs_time < 22434) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(LOVE3_D, 5000, 1) //"Make sure you pick them up before anyone else does."

    while ($.cs_time < 25333) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Camera.DoFade(1500, 0 /* FADE_OUT */)

    while (!Cutscene.HasFinished()) {
        await asyncWait(0)
    }

    World.SwitchRubbish(true /* ON */)

    Text.ClearPrints()

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Cutscene.Clear()

    Camera.DoFade(0, 0 /* FADE_OUT */)

    Streaming.RequestModel(car`DEADDODO`)
    Streaming.RequestModel(car`SPEEDER`)
    Streaming.RequestModel(car`PREDATOR`)

    Streaming.LoadAllModelsNow()

    Camera.SetBehindPlayer()

    await asyncWait(500)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Streaming.UnloadSpecialCharacter(1)
    Streaming.UnloadSpecialCharacter(2)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn)
    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas)

    // ******************************************END OF CUTSCENE********************************

    while (!Streaming.HasModelLoaded(car`DEADDODO`) || !Streaming.HasModelLoaded(car`SPEEDER`) || !Streaming.HasModelLoaded(car`PREDATOR`)) {
        await asyncWait(0)
    }

    $.players_boat = Car.Create(135 /* BOAT_SPEEDER */, 837.0, -1115.6, -0.2)
    $.players_boat.setHeading(140.0)

    $.players_boat_blip = Blip.AddForCar($.players_boat)

    Text.PrintNow(LOVE3_1, 5000, 1)

    DrugDropOff.Start()

    if ($.flag_player_on_mission == 0) {
        $.plane_blip = Blip.AddForCoord($.PlaneX, $.PlaneY, $.PlaneZ) // JUST SO I CAN REMOVE THE
    }

    await asyncWait(1000)

    $.plane_timer = 120000

    Hud.DisplayTimer($.plane_timer)
}

async function plane_drop_loop() {
    // SCM GOTO → plane_drop_loop lowered to endless loop
    while (true) {
        await asyncWait(0)

        if (DrugDropOff.HasPlaneBeenShotDown()) {
            Text.PrintNow(LOVE3_4, 5000, 1)
            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
        }

        if ($.plane_timer == 0) {
            Hud.ClearTimer($.plane_timer)
            Text.PrintNow(LOVE3_5, 5000, 1) // "The plane is now in range."
            $.plane_timer = -1000
        }

        if ($.player.isInModel(113 /* BOAT_PREDATOR */) || $.player.isInModel(135 /* BOAT_SPEEDER */) || $.player.isInModel(136 /* BOAT_REEFER */)) {
            $.players_boat_blip.remove()
        }

        $.plane_blip.remove()

        if ($.package_numbers < 6) {
            ;[$.PlaneX, $.PlaneY, $.PlaneZ] = DrugDropOff.FindPlaneCoordinates()
            $.plane_blip = Blip.AddForCoordOld($.PlaneX, $.PlaneY, $.PlaneZ, 4, 2 /* BLIP_ONLY */)
            $.plane_blip.changeScale(3)
            $.drug_current_timer = Clock.GetGameTimer()
            $.temporary_time_drug = $.drug_current_timer - $.last_drug_dropped_timer
            if ($.temporary_time_drug > 7000) {
                $.last_drug_dropped_timer = Clock.GetGameTimer()
                if ($.PlaneX < 750.0 && $.PlaneX > 615.0 && $.PlaneY < 650.0 && $.PlaneY > -1213.0) {
                    $.last_drug_dropped_timer = Clock.GetGameTimer()
                    if ($.package_numbers == 0) {
                        $.float_packge_01 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_1_x = $.PlaneX
                        $.package_1_y = $.PlaneY
                        $.packge_01 = 1
                    }
                    if ($.package_numbers == 1) {
                        $.float_packge_02 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_2_x = $.PlaneX
                        $.package_2_y = $.PlaneY
                        $.packge_02 = 1
                    }
                    if ($.package_numbers == 2) {
                        $.float_packge_03 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_3_x = $.PlaneX
                        $.package_3_y = $.PlaneY
                        $.packge_03 = 1
                    }
                    if ($.package_numbers == 3) {
                        $.float_packge_04 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_4_x = $.PlaneX
                        $.package_4_y = $.PlaneY
                        $.packge_04 = 1
                    }
                    if ($.package_numbers == 4) {
                        $.float_packge_05 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_5_x = $.PlaneX
                        $.package_5_y = $.PlaneY
                        $.packge_05 = 1
                    }
                    if ($.package_numbers == 5) {
                        $.float_packge_06 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ)
                        $.package_6_x = $.PlaneX
                        $.package_6_y = $.PlaneY
                        $.packge_06 = 1
                    }
                    $.package_numbers++
                }
            }
        }

        if ($.packge_01 > 0 && $.packages_collected < 6) {
            Text.PrintWithNumberNow(LOVE3_3, $.package_numbers, 5000, 1) //"The plane has dropped ~1~ of 8 packages."
        }

        if ($.packge_01 == 1) {
            if ($.float_packge_01.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_01 = 2
            }
        }

        if ($.packge_02 == 1) {
            if ($.float_packge_02.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_02 = 2
            }
        }

        if ($.packge_03 == 1) {
            if ($.float_packge_03.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_03 = 2
            }
        }

        if ($.packge_04 == 1) {
            if ($.float_packge_04.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_04 = 2
            }
        }

        if ($.packge_05 == 1) {
            if ($.float_packge_05.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_05 = 2
            }
        }

        if ($.packge_06 == 1) {
            if ($.float_packge_06.hasBeenCollected()) {
                Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */)
                ++$.packages_collected
                if ($.counter_display_flag == 0) {
                    Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT)
                    $.counter_display_flag = 1
                }
                $.police_rating += 1
                $.player.alterWantedLevelNoDrop($.police_rating)
                $.packge_06 = 2
            }
        }

        if ($.packge_06 > 0) {
            if ($.police_boat_flag == 0) {
                if (!Camera.IsPointOnScreen(560.5223, -474.0232, -0.2, 5.0)) {
                    $.police_boat = Car.Create(113 /* BOAT_PREDATOR */, 560.5223, -474.0232, -0.2)
                    $.police_boat_driver = Char.CreateInsideCar($.police_boat, 4 /* PEDTYPE_CIVMALE */, ped`COP`)
                    $.police_boat.setHeading(179.7861)
                    $.police_boat.goto($.package_6_x, $.package_6_y, 0.0)
                    $.police_boat_flag = 1
                }
            }
            if (!Car.IsDead($.police_boat)) {
                if ($.police_boat_flag == 1) {
                    if ($.police_boat.locate2D($.package_6_x, $.package_6_y, 4.0, 4.0, false)) {
                        if ($.packge_06 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto($.package_5_x, $.package_5_y, 0.0)
                            $.police_boat_flag = 2
                        }
                    }
                }
                if ($.police_boat_flag == 2) {
                    if ($.police_boat.locate2D($.package_5_x, $.package_5_y, 4.0, 4.0, false)) {
                        if ($.packge_05 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto($.package_4_x, $.package_4_y, 0.0)
                            $.police_boat_flag = 3
                        }
                    }
                }
                if ($.police_boat_flag == 3) {
                    if ($.police_boat.locate2D($.package_4_x, $.package_4_y, 4.0, 4.0, false)) {
                        if ($.packge_04 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto($.package_3_x, $.package_3_y, 0.0)
                            $.police_boat_flag = 4
                        }
                    }
                }
                if ($.police_boat_flag == 4) {
                    if ($.police_boat.locate2D($.package_3_x, $.package_3_y, 4.0, 4.0, false)) {
                        if ($.packge_03 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto($.package_2_x, $.package_2_y, 0.0)
                            $.police_boat_flag = 5
                        }
                    }
                }
                if ($.police_boat_flag == 5) {
                    if ($.police_boat.locate2D($.package_2_x, $.package_2_y, 4.0, 4.0, false)) {
                        if ($.packge_02 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto($.package_1_x, $.package_1_y, 0.0)
                            $.police_boat_flag = 6
                        }
                    }
                }
                if ($.police_boat_flag == 6) {
                    if ($.police_boat.locate2D($.package_1_x, $.package_1_y, 4.0, 4.0, false)) {
                        if ($.packge_01 == 1) {
                            $.float_packge_01.remove()
                            $.float_packge_02.remove()
                            $.float_packge_03.remove()
                            $.float_packge_04.remove()
                            $.float_packge_05.remove()
                            $.float_packge_06.remove()
                            Text.PrintNow(LOVE3_6, 5000, 1) // "~r~The Police got the the package first!"
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat.setCruiseSpeed(100.0)
                            // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_love3_failed') // fallback: would break linear control flow
                        } else {
                            $.police_boat.goto(641.555, 594.6697, 0.0)
                            $.police_boat_flag = 99
                        }
                    }
                }
            }
        }

        if ($.packages_collected == 6) {
            Text.PrintNow(LOVE3_2, 5000, 1) // "You have them all.  Take the package to Donald Love"
            $.plane_blip.remove()
            $.plane_blip = Blip.AddForCoord(87.3, -1548.6, 27.255) //130.0 -1585.0 26.0
            $.temporary_time_drug = 0
            // SCM GOTO → garage_loop_l3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO garage_loop_l3') // fallback: would break linear control flow
        }
    }
}

async function garage_loop_l3() {
    while (!Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
        await asyncWait(0)
    }

    while (!$.player.locateStoppedOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, true)) {
        await asyncWait(0)
    }

    $.player.setControl(false /* OFF */)

    Game.SetEveryoneIgnorePlayer($.player, true /* ON */)
    Game.SetAllCarsCanBeDamaged(false /* FALSE */)
    $.player.clearWantedLevel()

    Camera.SetFixedPosition(81.3343, -1540.0887, 27.7976, 0.0, 0.0, 0.0)
    Camera.PointAtPoint(81.8719, -1540.9318, 27.8039, 2 /* JUMP_CUT */)

    Hud.SwitchWidescreen(true /* ON */)

    $.script_controlled_player = $.player.getChar()

    $.script_controlled_player.setObjRunToCoord(87.4588, -1548.7035)
    {
        TIMERA = 0

        while (!$.player.locateOnFoot2D(87.4588, -1548.7035, 1.0, 1.0, false)) {
            await asyncWait(0)
            if (TIMERA > 3000) {
                // SCM GOTO → get_out_of_loop_l3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO get_out_of_loop_l3') // fallback: would break linear control flow
            }
        }
    }
}

async function get_out_of_loop_l3() {
    $.script_controlled_player.setObjRunToCoord(98.7615, -1548.6489)

    Camera.DoFade(1000, 0 /* FADE_OUT */)

    World.ClearArea(87.3, -1548.6, 28.3, 2.0, false)

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    $.script_controlled_player.setObjNoObj()
    $.script_controlled_player.setIdle()
    $.script_controlled_player.setObjRunToCoord(81.2603, -1548.9347)
    $.script_controlled_player.setObjNoObj()
    $.script_controlled_player.setIdle()

    await asyncWait(250)

    $.player.setCoordinates(81.2603, -1548.9347, 27.4)
    $.player.setHeading(90.0)
    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* OFF */)
    $.player.setControl(true /* ON */)
    Camera.SetInFrontOfPlayer()
    Game.SetEveryoneIgnorePlayer($.player, false /* OFF */)
    Game.SetAllCarsCanBeDamaged(true /* TRUE */)

    Camera.DoFade(1000, 1 /* FADE_IN */)

    // SCM GOTO → mission_love3_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love3_passed') // fallback: would break linear control flow

    // Mission love 3 failed
}

async function mission_love3_failed() {
    Text.PrintBig(M_FAIL, 5000, 1)
    return

    // mission love 3 passed
}

async function mission_love3_passed() {
    $.flag_love_mission3_passed = 1
    $.flag_commercial_passed = 1
    Stat.SetCommercialPassed()

    if (Object.DoesExist($.subway_gate_suburban1)) {
        $.subway_gate_suburban1.delete()
    }
    if (Object.DoesExist($.subway_gate_suburban2)) {
        $.subway_gate_suburban2.delete()
    }
    if (Object.DoesExist($.tunnel_gate_suburban)) {
        $.tunnel_gate_suburban.delete()
    }

    if (Object.DoesExist($.helix_barrier)) {
        $.helix_barrier.delete()
    }

    Path.SwitchRoadsOn(496.7, 75.5, -30.0, 484.0, 44.2, 0.0) //tunnel to suburbia
    Path.SwitchRoadsOn(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0) //Commercial to Suburbia Bridge

    if ($.flag_ray_mission5_passed == 1) {
        $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */)
        // START_NEW_SCRIPT ray_mission6_loop
    }

    Text.PrintWithNumberBig(M_PASS, 10000, 5000, 1)
    $.player.addScore(10000)
    $.player.clearWantedLevel()
    Stat.RegisterMissionPassed(LOVE3)
    Audio.PlayMissionPassedTune(1)
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT love_mission4_loop
    // START_NEW_SCRIPT hood_phone_start
    return

    // mission cleanup
}

async function mission_cleanup_love3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_love_mission = 0

    Hud.ClearTimer($.plane_timer)
    Hud.ClearCounter($.packages_collected)
    Streaming.MarkModelAsNoLongerNeeded(car`SPEEDER`)
    Streaming.MarkModelAsNoLongerNeeded(car`DEADDODO`)
    //SET_TARGET_CAR_FOR_MISSION_GARAGE loves_garage -1

    $.players_boat_blip.remove()
    $.plane_blip.remove()
    Mission.Finish()
    return
}

export async function love3() {
    // MissionBoundary
    // *****************************************************************************************
    // *********************************    Love mission 3   ***********************************
    // ********************************* A Drop in the Ocean ***********************************
    // *****************************************************************************************
    // *** The Player must pick up several packages that will be dropped from a Cessna into  ***
    // *** the bay that night. The player will use a boat to collect them. It is a decoy	 ***
    // *** (player does not know this at this time) so the police are aware of them. As soon ***
    // *** has the player has picked up the first package the police chopper will be on him. ***
    // *** Once the player has collected them all he must get them back to land and to his 	 ***
    // *** hideout in a car with the ensuing police chase. 									 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_love3
    await mission_start_love3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_love3_failed
        await mission_love3_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_love3
    await mission_cleanup_love3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT players_boat players_boat_blip police_boat_flag police_boat
    // VAR_INT plane_blip random_int_l3 counter_display_flag plane_timer police_boat_driver police_rating
    // VAR_INT float_packge_01 float_packge_02 float_packge_03 float_packge_04 float_packge_05 float_packge_06
    // VAR_INT drug_current_timer temporary_time_drug last_drug_dropped_timer package_numbers cs_ojg
    // VAR_INT packge_01 packge_02 packge_03 packge_04 packge_05 packge_06 packages_collected

    // VAR_FLOAT PlaneX PlaneY PlaneZ
    // VAR_FLOAT package_1_x package_1_y
    // VAR_FLOAT package_2_x package_2_y
    // VAR_FLOAT package_3_x package_3_y
    // VAR_FLOAT package_4_x package_4_y
    // VAR_FLOAT package_5_x package_5_y
    // VAR_FLOAT package_6_x package_6_y

    // ****************************************Mission Start************************************
}
