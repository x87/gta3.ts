// Generated from Main/Industrial/luigi4.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_luigi4() {
    $.flag_player_on_mission = 1

    $.flag_player_on_luigi_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_player_got_message_luigi4 = 0

    $.car_health_lm4 = 0

    $.flag_car_dead_lm4 = 0

    $.flag_pimp_dead_lm4 = 0

    $.car_lm4_x = 0.0

    $.car_lm4_y = 0.0

    $.car_lm4_z = 0.0

    $.flag_collected_gun_lm4 = 0

    $.flag_gun_message_lm4 = 0

    $.flag_pimp2_dead_lm4 = 0

    $.flag_pimp_kill_player_luigi4 = 0

    $.flag_ped1_not_in_car = 0

    $.flag_ped2_not_in_car = 0

    $.flag_player_had_shop_audio_lm4 = 0

    $.flag_player_had_message1_lm4 = 0

    $.flag_player_had_message2_lm4 = 0

    $.flag_blokes_get_out_of_car_lm4 = 0

    $.flag_car_blip_on_lm4 = 0

    $.flag_done_camera_lm4 = 0

    $.flag_set_car_driving_lm4 = 0

    // ***************************************START OF CUTSCENE*********************************

    {
        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_luigi4_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( LM4 ) 15000 2 //"Pump Action Pimp"

  SWITCH_STREAMING OFF
  */

        Streaming.LoadSpecialCharacter(1, $.luigi)

        Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR)

        Streaming.LoadSpecialModel(hier`cutobj02`, LUIGIH)

        Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH)

        Streaming.RequestModel(indhibuild3)

        Streaming.RequestModel(luigiclubout)

        Streaming.RequestModel(luigiineerclub)

        Streaming.RequestModel(car`DIABLOS`)
        Streaming.RequestModel(ped`GANG_DIABLO_A`)
        Streaming.RequestModel(ped`PIMP`)

        /*
  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        World.SetPedDensityMultiplier(0.0)

        World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0)

        Streaming.LoadAllModelsNow()

        // Cutscene stuff

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(hier`cutobj03`)
        ) {
            await asyncWait(0)
        }

        while (
            !Streaming.HasModelLoaded(indhibuild3) ||
            !Streaming.HasModelLoaded(luigiclubout) ||
            !Streaming.HasModelLoaded(luigiineerclub) ||
            !Streaming.HasModelLoaded(car`DIABLOS`) ||
            !Streaming.HasModelLoaded(ped`GANG_DIABLO_A`) ||
            !Streaming.HasModelLoaded(ped`PIMP`)
        ) {
            await asyncWait(0)
        }

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, false /* FALSE */)

        Cutscene.Load(l4_pap)

        Cutscene.SetOffset(900.782, -427.523, 13.829)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim($.player)

        $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_luigi.setAnim($.luigi)

        $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`)

        $.cs_luigihead.setAnim($.luigi)

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`)

        $.cs_playerhead.setAnim($.player)

        $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`)

        $.cs_ludoor.setAnim(LUDOOR)

        //CLEAR_AREA 902.2 -425.8 13.9 1.0 TRUE
        //SET_PLAYER_COORDINATES player 902.2 -425.8 13.9

        World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */)
        $.player.setCoordinates(896.6, -426.2, 13.9)

        $.player.setHeading(270.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 8775) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM4_A', 10000, 1) //"Some Diablo skumball has been pimping his skuzzy bitches in my backyard."

        while ($.cs_time < 12872) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM4_B', 10000, 1) //"Go and take care of things for me."

        while ($.cs_time < 14886) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM4_C', 10000, 1) //"If you need a "piece" go round the back of AmmuNation opposite the subway."

        while ($.cs_time < 18506) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM4_C')

        while ($.cs_time < 19333) {
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

        World.SwitchRubbish(true /* ON */)

        Streaming.Switch(true /* ON */)

        Streaming.LoadScene(920.3, -425.4, 15.0)

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */)

        Streaming.UnloadSpecialCharacter(1)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)

        Streaming.MarkModelAsNoLongerNeeded(indhibuild3)

        Streaming.MarkModelAsNoLongerNeeded(luigiclubout)

        Streaming.MarkModelAsNoLongerNeeded(luigiineerclub)

        World.SetPedDensityMultiplier(1.0)

        // ******************************************END OF CUT_SCENE*******************************

        Streaming.RequestModel(car`DIABLOS`)
        Streaming.RequestModel(ped`GANG_DIABLO_A`)
        Streaming.RequestModel(ped`PIMP`)

        Streaming.LoadAllModelsNow()

        while (!Streaming.HasModelLoaded(car`DIABLOS`) || !Streaming.HasModelLoaded(ped`GANG_DIABLO_A`) || !Streaming.HasModelLoaded(ped`PIMP`)) {
            await asyncWait(0)
        }

        Hud.SwitchWidescreen(true /* ON */)

        $.player.setControl(false /* OFF */)

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */)

        $.car_lm4 = Car.Create(130 /* CAR_DIABLOS */, 1058.5, -421.0, -100.0)

        $.car_lm4.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

        $.car_lm4.setHeading(360.0)

        $.car_lm4.setOnlyDamagedByPlayer(true /* TRUE */)

        $.car_lm4.setWatertight(true /* TRUE */)

        $.rival_pimp_to_kill = Char.CreateInsideCar($.car_lm4, 4 /* PEDTYPE_CIVMALE */, ped`GANG_DIABLO_A`)

        $.rival_pimp_to_kill.clearThreatSearch()

        $.rival_pimp_to_kill.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000) // sets weapon to infinate ammo

        $.pimp_lm4 = Char.CreateAsPassenger($.car_lm4, 4 /* PEDTYPE_CIVMALE */, ped`PIMP`, 0)

        $.pimp_lm4.clearThreatSearch()

        $.pimp_lm4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 30000) // sets weapon to infinate ammo

        $.car_lm4.setMission(11 /* MISSION_STOP_FOREVER */)

        $.radar_blip_car1_lm4 = Blip.AddForCar($.car_lm4)

        $.flag_car_blip_on_lm4 = 1

        Streaming.LoadScene(1065.1, -398.6, 14.97)

        Camera.SetFixedPosition(1048.1, -398.3, 15.5, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(1049.1, -398.3, 15.5, 2 /* JUMP_CUT */)

        $.gun_lm4 = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 3 /* pickup_once */, 45, 1080.5, -396.0, 14.5)

        $.radar_blip_coord1_lm4 = Blip.AddSpriteForPickup($.gun_lm4, 20 /* RADAR_SPRITE_WEAPON */)

        timerb = 0

        while (timerb < 8400) {
            await asyncWait(0)

            if ($.flag_set_car_driving_lm4 == 0) {
                if (timerb >= 2000) {
                    if (!Car.IsDead($.car_lm4)) {
                        $.car_lm4.setMission(1 /* MISSION_CRUISE */)
                        $.car_lm4.setCruiseSpeed(20.0)
                        $.flag_set_car_driving_lm4 = 1
                    }
                }
            }
            if ($.flag_done_camera_lm4 == 0) {
                if (!Car.IsDead($.car_lm4)) {
                    if ($.car_lm4.locate2D(1058.5, -398.5, 6.0, 6.0, false /* FALSE */)) {
                        Camera.PointAtPoint(1048.6, -397.4, 15.5, 1 /* INTERPOLATION */)
                        $.flag_done_camera_lm4 = 1
                    }
                }
            }
            // SCM GOSUB car_check_lm4
            await car_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB ped_death_check_lm4
            await ped_death_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB help_text_check_lm4
            await help_text_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.flag_collected_gun_lm4 == 0) {
                if ($.gun_lm4.hasBeenCollected()) {
                    $.radar_blip_coord1_lm4.remove()
                    $.flag_collected_gun_lm4 = 1
                }

                if ($.flag_player_had_shop_audio_lm4 == 0) {
                    if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false /* FALSE */)) {
                        if ($.camera_ammu1 == 1) {
                            // SCM GOSUB audio_load_lm4
                            await audio_load_lm4()
                            // fallback if label was not emitted as async function: no-op continues linearly
                        }
                    }
                }
            }

            if ($.flag_ped2_not_in_car == 1 && $.flag_ped1_not_in_car == 1) {
                if ($.flag_car_blip_on_lm4 == 1) {
                    $.radar_blip_car1_lm4.remove()
                    $.flag_car_blip_on_lm4 = 0
                }
            }
        }

        Streaming.LoadScene(920.3, -425.4, 15.0)

        Camera.RestoreJumpcut()

        Hud.SwitchWidescreen(false /* OFF */)

        $.player.setControl(true /* ON */)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */)

        while ($.flag_pimp_dead_lm4 == 0 || $.flag_pimp2_dead_lm4 == 0) {
            await asyncWait(0)
            // SCM GOSUB car_check_lm4
            await car_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB ped_death_check_lm4
            await ped_death_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB help_text_check_lm4
            await help_text_check_lm4()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.flag_collected_gun_lm4 == 0) {
                if ($.gun_lm4.hasBeenCollected()) {
                    $.radar_blip_coord1_lm4.remove()
                    $.flag_collected_gun_lm4 = 1
                }

                if ($.flag_player_had_shop_audio_lm4 == 0) {
                    if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false /* FALSE */)) {
                        // SCM GOSUB audio_load_lm4
                        await audio_load_lm4()
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
            }
            if ($.flag_ped2_not_in_car == 1 && $.flag_ped1_not_in_car == 1) {
                if ($.flag_car_blip_on_lm4 == 1) {
                    $.radar_blip_car1_lm4.remove()
                    $.flag_car_blip_on_lm4 = 0
                }
            }
        }

        $.radar_blip_coord1_lm4.remove()

        //timera = 0

        //WHILE timera < 3000

        //	WAIT 0

        //ENDWHILE

        // SCM GOTO → mission_luigi4_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_luigi4_passed') // fallback: would break linear control flow

        // Mission Luigi1 failed
    }

    async function mission_luigi4_failed() {
        Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"

        if (!Char.IsDead($.rival_pimp_to_kill)) {
            $.rival_pimp_to_kill.removeElegantly()
        }

        if (Char.IsDead($.pimp_lm4)) {
            $.pimp_lm4.removeElegantly()
        }

        return

        // mission Luigi1 passed
    }

    async function mission_luigi4_passed() {
        $.flag_luigi_mission4_passed = 1
        Stat.RegisterMissionPassed('LM4')
        Stat.PlayerMadeProgress(1)
        Text.PrintWithNumberBig('m_pass', 4000, 5000, 1) //"Mission Passed!"
        Audio.PlayMissionPassedTune(1)
        $.player.addScore(4000)
        $.player.clearWantedLevel()
        // START_NEW_SCRIPT luigi_mission5_loop

        if ($.out_of_stock_pistol == 0) {
            // START_NEW_SCRIPT pistol_message
        }

        return

        // mission cleanup
    }

    async function mission_cleanup_luigi4() {
        $.flag_player_on_mission = 0
        $.flag_player_on_luigi_mission = 0
        $.special_ammu_audio = 0

        if ($.flag_car_dead_lm4 == 0) {
            if (!Car.IsDead($.car_lm4)) {
                $.car_lm4.setOnlyDamagedByPlayer(false /* FALSE */)
                $.car_lm4.lockDoors(1 /* CARLOCK_UNLOCKED */)
                $.car_lm4.setWatertight(false /* FALSE */)
            }
        }

        $.gun_lm4.remove()
        Streaming.MarkModelAsNoLongerNeeded(car`DIABLOS`)
        Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_A`)
        Streaming.MarkModelAsNoLongerNeeded(ped`PIMP`)
        if ($.flag_collected_gun_lm4 == 0) {
            $.gun_lm4.remove()
        }
        // SCM GOSUB shite_complier_bit
        await shite_complier_bit()
        // fallback if label was not emitted as async function: no-op continues linearly
        Mission.Finish()
        return

        // *************************PED GOSUB HAS TO GO HERE FOR STUPID COMPILER********************
    }

    async function ped_death_check_lm4() {
        // Checks for the Diablo

        if ($.flag_pimp_dead_lm4 == 0) {
            if (!Char.IsDead($.rival_pimp_to_kill)) {
                if ($.flag_blokes_get_out_of_car_lm4 == 1 || !$.rival_pimp_to_kill.isInCar($.car_lm4)) {
                    if ($.flag_player_got_message_luigi4 == 0) {
                        $.rival_pimp_to_kill.setObjKillPlayerAnyMeans($.player)
                        $.rival_pimp_to_kill.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.rival_pimp_to_kill.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.flag_player_got_message_luigi4 = 1
                    }
                }
                if ($.flag_ped1_not_in_car == 0) {
                    if (!$.rival_pimp_to_kill.isInCar($.car_lm4)) {
                        $.radar_blip_ped1_lm4 = Blip.AddForChar($.rival_pimp_to_kill)
                        $.flag_ped1_not_in_car = 1
                    }
                }
            }
            if (Char.IsDead($.rival_pimp_to_kill)) {
                $.radar_blip_ped1_lm4.remove()
                $.flag_pimp_dead_lm4 = 1
            }
        }

        // Checks for the pimp model

        if ($.flag_pimp2_dead_lm4 == 0) {
            if (!Char.IsDead($.pimp_lm4)) {
                if ($.flag_blokes_get_out_of_car_lm4 == 1 || !$.pimp_lm4.isInCar($.car_lm4)) {
                    if ($.flag_pimp_kill_player_luigi4 == 0) {
                        $.pimp_lm4.setObjKillPlayerAnyMeans($.player)
                        $.pimp_lm4.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.pimp_lm4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.flag_pimp_kill_player_luigi4 = 1
                    }
                }
                if ($.flag_ped2_not_in_car == 0) {
                    if (!$.pimp_lm4.isInCar($.car_lm4)) {
                        $.radar_blip_ped2_lm4 = Blip.AddForChar($.pimp_lm4)
                        $.flag_ped2_not_in_car = 1
                    }
                }
            }
            if (Char.IsDead($.pimp_lm4)) {
                $.radar_blip_ped2_lm4.remove()
                $.flag_pimp2_dead_lm4 = 1
            }
        }

        return

        // **************************************************END OF PED GOSUB******************************
    }

    async function audio_load_lm4() {
        if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false /* FALSE */)) {
            $.special_ammu_audio = 1
            if ($.camera_ammu1 == 1) {
                if (!Char.IsDead($.ammu_shop_bloke1)) {
                    if ($.flag_player_had_message1_lm4 == 0) {
                        Audio.LoadMissionAudio(AMMU_A)
                        $.flag_player_had_message1_lm4 = 1
                    }
                    if ($.flag_player_had_message1_lm4 == 1) {
                        if (Audio.HasMissionAudioLoaded()) {
                            Audio.PlayMissionAudio()
                            Text.PrintNow('AMMU_A', 5000, 1) //"Luigi said..."
                            $.flag_player_had_message1_lm4 = 2
                        }
                    }
                    if ($.flag_player_had_message1_lm4 == 2) {
                        if (Audio.HasMissionAudioFinished()) {
                            Text.ClearThisPrint('AMMU_A')
                            $.flag_player_had_message1_lm4 = 3
                        }
                    }
                    if ($.flag_player_had_message1_lm4 == 3 && $.flag_player_had_message2_lm4 == 0) {
                        Audio.LoadMissionAudio(AMMU_C)
                        $.flag_player_had_message2_lm4 = 1
                    }
                    if ($.flag_player_had_message2_lm4 == 1) {
                        if (Audio.HasMissionAudioLoaded()) {
                            Audio.PlayMissionAudio()
                            Text.PrintNow('AMMU_C', 5000, 1) //"Go round the back..."
                            $.flag_player_had_message2_lm4 = 2
                        }
                    }
                    if ($.flag_player_had_message2_lm4 == 2) {
                        if (Audio.HasMissionAudioFinished()) {
                            Text.ClearThisPrint('AMMU_C')
                            $.flag_player_had_shop_audio_lm4 = 1
                            $.special_ammu_audio = 0
                            $.flag_player_had_message2_lm4 = 3
                        }
                    }
                } else {
                    Audio.ClearMissionAudio()
                    $.special_ammu_audio = 0
                }
            }
        } else {
            Audio.ClearMissionAudio()
            $.special_ammu_audio = 0
        }

        return
    }

    async function car_check_lm4() {
        if ($.flag_car_dead_lm4 == 0) {
            if (Car.IsDead($.car_lm4)) {
                if ($.flag_car_blip_on_lm4 == 1) {
                    $.radar_blip_car1_lm4.remove()
                    $.flag_car_blip_on_lm4 = 0
                }
                $.flag_car_dead_lm4 = 1
            } else {
                if ($.car_lm4.isInWater()) {
                    if ($.car_lm4.isOnScreen()) {
                        $.car_lm4.setWatertight(false /* FALSE */)
                    } else {
                        ;[$.car_lm4_x, $.car_lm4_y, $.car_lm4_z] = $.car_lm4.getCoordinates()
                        ;[$.car_lm4_x, $.car_lm4_y, $.car_lm4_z] = Path.GetClosestCarNode($.car_lm4_x, $.car_lm4_y, $.car_lm4_z)
                    }
                    if (!Camera.IsPointOnScreen($.car_lm4_x, $.car_lm4_y, $.car_lm4_z, 5.0)) {
                        $.car_lm4.setCoordinates($.car_lm4_x, $.car_lm4_y, $.car_lm4_z)
                    }
                }
                $.car_health_lm4 = $.car_lm4.getHealth()
                if ($.car_health_lm4 < 999) {
                    $.flag_blokes_get_out_of_car_lm4 = 1
                } else {
                    $.flag_blokes_get_out_of_car_lm4 = 0
                }
            }
        }

        return
    }

    async function help_text_check_lm4() {
        if ($.flag_player_had_gun_message == 0) {
            if ($.player.isInAreaOnFoot3D(1075.2, -384.8, 14.0, 1086.2, -403.3, 17.0, false /* FALSE */)) {
                $.controlmode = Pad.GetControllerMode()
                if ($.controlmode == 0) {
                    if ($.flag_gun_message_lm4 == 0) {
                        Text.PrintHelp('GUN_1A') //"Use R2 and L2 to cycle through your weapons."
                        timerb = 0
                        $.flag_gun_message_lm4 = 1
                    }
                    if ($.flag_gun_message_lm4 == 1) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_2A') //"Hold R1 to auto-target, press circle to fire!"
                            timerb = 0
                            $.flag_gun_message_lm4 = 2
                        }
                    }
                    if ($.flag_gun_message_lm4 == 2) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_3A') //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 3
                        }
                    }
                    if ($.flag_gun_message_lm4 == 3) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_4A') //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 4
                        }
                    }
                    if ($.flag_gun_message_lm4 == 4) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_5') //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                            $.flag_gun_message_lm4 = 5
                            $.flag_player_had_gun_message = 1
                        }
                    }
                }

                // Control Mode 1

                if ($.controlmode == 1) {
                    if ($.flag_gun_message_lm4 == 0) {
                        Text.PrintHelp('GUN_1A') //"Use R2 and L2 to cycle through your weapons."
                        timerb = 0
                        $.flag_gun_message_lm4 = 1
                    }
                    if ($.flag_gun_message_lm4 == 1) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_2A') //"Hold R1 to auto-target, press circle to fire!"
                            timerb = 0
                            $.flag_gun_message_lm4 = 2
                        }
                    }
                    if ($.flag_gun_message_lm4 == 2) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_3A') //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 3
                        }
                    }
                    if ($.flag_gun_message_lm4 == 3) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_4A') //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 4
                        }
                    }
                    if ($.flag_gun_message_lm4 == 4) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_5') //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                            $.flag_gun_message_lm4 = 5
                            $.flag_player_had_gun_message = 1
                        }
                    }
                }

                // Control Mode 2

                if ($.controlmode == 2) {
                    if ($.flag_gun_message_lm4 == 0) {
                        Text.PrintHelp('GUN_1A') //"Use R2 and L2 to cycle through your weapons."
                        timerb = 0
                        $.flag_gun_message_lm4 = 1
                    }
                    if ($.flag_gun_message_lm4 == 1) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_2C') //"Hold R1 to auto-target, press circle to fire!"
                            timerb = 0
                            $.flag_gun_message_lm4 = 2
                        }
                    }
                    if ($.flag_gun_message_lm4 == 2) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_3A') //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 3
                        }
                    }
                    if ($.flag_gun_message_lm4 == 3) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_4A') //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 4
                        }
                    }
                    if ($.flag_gun_message_lm4 == 4) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_5') //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                            $.flag_gun_message_lm4 = 5
                            $.flag_player_had_gun_message = 1
                        }
                    }
                }

                // Control Mode 3

                if ($.controlmode == 3) {
                    if ($.flag_gun_message_lm4 == 0) {
                        Text.PrintHelp('GUN_1A') //"Use R2 and L2 to cycle through your weapons."
                        timerb = 0
                        $.flag_gun_message_lm4 = 1
                    }
                    if ($.flag_gun_message_lm4 == 1) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_2D') //"Hold R1 to auto-target, press circle to fire!"
                            timerb = 0
                            $.flag_gun_message_lm4 = 2
                            //	flag_player_had_gun_message = 1
                        }
                    }
                    if ($.flag_gun_message_lm4 == 1) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_2C') //"Hold R1 to auto-target, press circle to fire!"
                            timerb = 0
                            $.flag_gun_message_lm4 = 2
                        }
                    }
                    if ($.flag_gun_message_lm4 == 2) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_3B') //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 3
                        }
                    }
                    if ($.flag_gun_message_lm4 == 3) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_4B') //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                            timerb = 0
                            $.flag_gun_message_lm4 = 4
                        }
                    }
                    if ($.flag_gun_message_lm4 == 4) {
                        if (timerb > 10000) {
                            Text.PrintHelp('GUN_5') //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                            $.flag_gun_message_lm4 = 5
                            $.flag_player_had_gun_message = 1
                        }
                    }
                }
            }
        }

        return
    }

    async function shite_complier_bit() {
        $.radar_blip_ped1_lm4.remove()
        $.radar_blip_ped2_lm4.remove()
        $.radar_blip_coord1_lm4.remove()
        $.radar_blip_car1_lm4.remove()

        return
    }
}

export async function luigi4() {
    // MissionBoundary

    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Luigi mission 4*********************************
    // *****************************************Pump Action Pimp********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME luigi4

    // Mission Start Stuff

    // SCM GOSUB mission_start_luigi4
    await mission_start_luigi4()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_luigi4_failed
        await mission_luigi4_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_luigi4
    await mission_cleanup_luigi4()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variable for mission

    // VAR_INT radar_blip_ped1_lm4

    // VAR_INT radar_blip_coord1_lm4

    // VAR_INT radar_blip_car1_lm4

    // VAR_INT rival_pimp_to_kill

    // VAR_INT car_lm4

    // VAR_INT flag_player_got_message_luigi4

    // VAR_INT car_health_lm4

    // VAR_INT flag_car_dead_lm4

    // VAR_INT flag_pimp_dead_lm4

    // VAR_INT gun_lm4

    // VAR_FLOAT car_lm4_x

    // VAR_FLOAT car_lm4_y

    // VAR_FLOAT car_lm4_z

    // VAR_INT flag_collected_gun_lm4

    // VAR_INT flag_gun_message_lm4

    // VAR_INT flag_pimp2_dead_lm4

    // VAR_INT pimp_lm4

    // VAR_INT flag_pimp_kill_player_luigi4

    // VAR_INT radar_blip_ped2_lm4

    // VAR_INT flag_ped1_not_in_car

    // VAR_INT flag_ped2_not_in_car

    // VAR_INT flag_player_had_shop_audio_lm4

    // VAR_INT flag_player_had_message1_lm4

    // VAR_INT flag_player_had_message2_lm4

    // VAR_INT flag_blokes_get_out_of_car_lm4

    // VAR_INT flag_car_blip_on_lm4

    // VAR_INT flag_done_camera_lm4

    // VAR_INT flag_set_car_driving_lm4

    // **********************************************Mission Start******************************
}
