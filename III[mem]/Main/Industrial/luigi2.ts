// Generated from Main/Industrial/luigi2.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_luigi2() {
    $.flag_player_on_mission = 1

    $.flag_player_on_luigi_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_player_got_help_message_lm2 = 0

    $.flag_victim_ped_lm2_changed = 0

    $.flag_victim_dead_lm2 = 0

    $.flag_car_in_garage_lm2 = 0

    $.flag_player_had_car_message_lm2 = 0

    $.flag_player_had_garage_message_lm2 = 0

    $.flag_buyer1_dead_lm2 = 0

    $.flag_buyer2_dead_lm2 = 0

    $.flag_done_looking_bit_lm2 = 0

    $.flag_had_spray_help = 0

    $.flag_player_had_bat_message_lm2 = 0

    $.flag_had_path_message_lm2 = 0

    $.flag_lockup_message_lm2 = 0

    $.flag_girl1_running_lm2 = 0

    $.flag_girl2_running_lm2 = 0

    $.flag_player_in_area_lm2 = 0

    $.flag_player_in_car_lm2 = 0

    {
        Streaming.RequestModel(ped`DOCKER2`)

        Streaming.RequestModel(ped`PROSTITUTE`)

        Streaming.RequestModel(ped`PROSTITUTE2`)

        Streaming.RequestModel(car`STALLION`)

        Text.ClearHelp()

        // ****************************************START OF CUTSCENE********************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_luigi2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  SWITCH_STREAMING OFF

  PRINT_BIG ( LM2 ) 15000 2 //"Don'a SPANK ma bitch up"
  */

        Streaming.RequestModel(257 /* indhibuild3 */)

        Streaming.RequestModel(256 /* luigiclubout */)

        Streaming.RequestModel(243 /* luigiineerclub */)

        Streaming.LoadSpecialCharacter(1, 'MICKY')

        Streaming.LoadSpecialModel(hier`cutobj01`, 'LUDOOR')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'MICKYH')
        Streaming.LoadSpecialModel(hier`cutobj03`, 'PLAYERH')
        Streaming.LoadSpecialModel(hier`cutobj04`, 'NOTE')

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
            !Streaming.HasModelLoaded(hier`cutobj03`) ||
            !Streaming.HasModelLoaded(hier`cutobj04`)
        ) {
            await asyncWait(0)
        }

        while (!Streaming.HasModelLoaded(257 /* indhibuild3 */) || !Streaming.HasModelLoaded(256 /* luigiclubout */) || !Streaming.HasModelLoaded(243 /* luigiineerclub */)) {
            await asyncWait(0)
        }

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, false /* FALSE */)

        Cutscene.Load('l2_dsb')

        Cutscene.SetOffset(900.782, -427.523, 13.829)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim('player')

        $.cs_micky = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_micky.setAnim('micky')

        $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj02`)

        $.cs_mickyhead.setAnim('micky')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`)

        $.cs_playerhead.setAnim('player')

        $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`)

        $.cs_ludoor.setAnim('LUDOOR')

        $.cs_note = CutsceneObject.Create(hier`cutobj04`)

        $.cs_note.setAnim('NOTE')

        World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */)
        $.player.setCoordinates(896.6, -426.2, 13.9)

        $.player.setHeading(270.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 5634) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_C', 10000, 1) //"Luigi said to give you this so..."

        while ($.cs_time < 7989) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_D', 10000, 1) //"So here, here take it"

        while ($.cs_time < 12078) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_A', 10000, 1) //"There's a new high on the street goes by the name of SPANK."

        while ($.cs_time < 15287) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_E', 10000, 1) //"Some wiseguy's been introducing this trash to my girls down Portland Harbour."

        while ($.cs_time < 19558) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_B', 10000, 1) //"Go and introduce a bat to his face!

        while ($.cs_time < 23042) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_F', 10000, 1) //"Then take his car, respray it and bring it back here."

        while ($.cs_time < 25852) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM2_G', 10000, 1) //"I want compensation for this insult!"

        while ($.cs_time < 28632) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM2_G')

        while ($.cs_time < 31000) {
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

        Streaming.Switch(true /* ON */)

        World.SwitchRubbish(true /* ON */)

        Streaming.LoadScene(920.3, -425.4, 15.0)

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Camera.SetBehindPlayer()

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */)

        Streaming.UnloadSpecialCharacter(1)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`)

        Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */)

        Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */)

        Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */)

        World.SetPedDensityMultiplier(1.0)

        // ******************************************END OF CUTSCENE********************************

        Path.SwitchPedRoadsOff(1609.8, -615.2, 9.0, 1557.8, -673.4, 20.0)

        $.bat_lm2 = Pickup.Create(172 /* WEAPON_BAT */, 3 /* PICKUP_ONCE */, 917.2, -425.3, 14.5)

        $.bat_blip_lm2 = Blip.AddForPickup($.bat_lm2)

        while (
            !Streaming.HasModelLoaded(car`STALLION`) ||
            !Streaming.HasModelLoaded(ped`DOCKER2`) ||
            !Streaming.HasModelLoaded(ped`PROSTITUTE`) ||
            !Streaming.HasModelLoaded(ped`PROSTITUTE2`)
        ) {
            await asyncWait(0)
        }

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        $.player.setControl(true /* ON */)

        Text.PrintNow('BAT1', 5000, 1) //"Pick up the bat!"

        Text.PrintHelp('HELP14') //"To pick up weapons walk through them. These cannot be collected while in a vehicle"

        // creates the dealer

        $.victim_ped_lm2 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, ped`DOCKER2`, 1399.64, -833.72, -100.0)

        $.victim_ped_lm2.turnToFaceCoord(1397.46, -835.52, 10.8)

        $.victim_ped_lm2.clearThreatSearch()

        // creates prostitute one

        $.buyer1_lm2 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1397.21, -832.86, -100.0) //proper one

        $.buyer1_lm2.clearThreatSearch()

        $.buyer1_lm2.turnToFaceCoord(1399.64, -833.72, 10.8)

        // creates prostitute two

        $.buyer2_lm2 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1397.28, -834.43, -100.0)

        $.buyer2_lm2.clearThreatSearch()

        $.buyer2_lm2.turnToFaceCoord(1399.64, -833.72, 10.8)

        // dealers car

        $.car_lm2 = Car.Create(129 /* CAR_STALLION */, 1396.67, -837.69, -100.0)

        $.car_lm2.setHeading(301.0)

        $.car_lm2.changeLock(2 /* CARLOCK_LOCKED */)

        $.radar_blip_ped1_lm2 = Blip.AddForChar($.victim_ped_lm2)

        if (!Char.IsDead($.victim_ped_lm2)) {
            if (!Char.IsDead($.buyer1_lm2)) {
                Game.SetCharsChatting($.victim_ped_lm2, $.buyer1_lm2, -1) // try -1 when this has been fixed
            }
        }

        await asyncWait(0)

        TIMERB = 0

        while (!Char.IsDead($.victim_ped_lm2)) {
            // SCM GOSUB girls_running
            await girls_running()
            // fallback if label was not emitted as async function: no-op continues linearly
            if ($.flag_player_had_bat_message_lm2 == 0) {
                if ($.bat_lm2.hasBeenCollected()) {
                    Text.PrintHelp('GUN_1A')
                    $.bat_blip_lm2.remove()
                    Text.ClearThisPrint('BAT1')
                    $.flag_player_had_bat_message_lm2 = 1
                }
            }
            if ($.flag_had_path_message_lm2 == 0) {
                if (TIMERB >= 30000) {
                    Text.PrintHelp('HELP13') //"Sometimes you may need to use pathways not shown on the radar."
                    $.flag_had_path_message_lm2 = 1
                }
            }

            /*
    // Camera point at dealer stuff

    IF flag_done_looking_bit_lm2 = 0

    IF IS_PLAYER_IN_AREA_3D player 1535.2 -615.1 10.0 1610.5 -681.0 20.0 FALSE

    IF IS_PLAYER_IN_ANY_CAR player
    APPLY_BRAKES_TO_PLAYERS_CAR player ON
    ENDIF

    SWITCH_WIDESCREEN ON
    CLEAR_WANTED_LEVEL player
    SET_POLICE_IGNORE_PLAYER player ON
    SET_PLAYER_CONTROL player OFF

    IF LOCATE_PLAYER_ANY_MEANS_3D player 1589.1 -641.4 11.1 1.0 1.0 1.0 FALSE
    SET_FIXED_CAMERA_POSITION 1587.8 -651.7 18.3 0.0 0.0 0.0
    POINT_CAMERA_AT_POINT 1587.5 -651.0 17.6 JUMP_CUT
    ELSE
    SET_FIXED_CAMERA_POSITION 1589.1 -641.4 11.1 0.0 0.0 0.0
    POINT_CAMERA_AT_POINT 1588.3 -642.0 11.3 JUMP_CUT
    ENDIF


    WAIT 4500

    IF IS_CHAR_DEAD victim_ped_lm2
    REMOVE_BLIP radar_blip_ped1_lm2
    flag_victim_dead_lm2 = 1
    ENDIF

    IF IS_CAR_DEAD car_lm2
    PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
    GOTO mission_luigi2_failed
    ELSE

    IF IS_CAR_UPSIDEDOWN car_lm2
    AND IS_CAR_STOPPED car_lm2
    PRINT_NOW ( UPSIDE ) 5000 1 //You've flipped your wheels!"
    GOTO mission_luigi2_failed
    ENDIF

    ENDIF

    IF IS_PLAYER_IN_ANY_CAR player
    APPLY_BRAKES_TO_PLAYERS_CAR player FALSE
    ENDIF

    SWITCH_WIDESCREEN OFF
    RESTORE_CAMERA_JUMPCUT
    SET_POLICE_IGNORE_PLAYER player OFF
    SET_PLAYER_CONTROL player ON
    flag_done_looking_bit_lm2 = 1
    ENDIF


    ENDIF
    */

            if (Char.IsDead($.victim_ped_lm2)) {
                $.radar_blip_ped1_lm2.remove()
                $.flag_victim_dead_lm2 = 1
            }
            if (Car.IsDead($.car_lm2)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
            } else {
                if ($.car_lm2.isUpsidedown() && $.car_lm2.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //You've flipped your wheels!"
                    // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
                }
            }
            if ($.flag_done_looking_bit_lm2 == 1 || $.player.isInArea3D(1430.75, -807.0, 9.0, 1355.2, -883.2, 20.0, false /* FALSE */)) {
                $.flag_done_looking_bit_lm2 = 1
                $.flag_player_in_area_lm2 = 1
                if ($.flag_victim_dead_lm2 == 0) {
                    if ($.player.locateAnyMeansChar3D($.victim_ped_lm2, 10.0, 10.0, 10.0, false /* FALSE */) && $.flag_victim_ped_lm2_changed == 0) {
                        $.victim_ped_lm2.turnToFacePlayer($.player)
                        $.victim_ped_lm2.setThreatSearch(1 /* THREAT_PLAYER1 */)
                        $.victim_ped_lm2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.victim_ped_lm2.setHeedThreats(true /* TRUE */)
                        $.victim_ped_lm2.setObjKillPlayerOnFoot($.player)
                        $.flag_victim_ped_lm2_changed = 1
                    }
                    if ($.player.locateAnyMeansChar3D($.victim_ped_lm2, 6.0, 6.0, 15.0, false /* FALSE */) && $.flag_player_got_help_message_lm2 == 0) {
                        $.controlmode = Pad.GetControllerMode()
                        if ($.controlmode == 0) {
                            Text.PrintHelp('LM2_2A') //"Use the circle button to punch and kick!"
                            $.flag_player_got_help_message_lm2 = 1
                        }
                        if ($.controlmode == 1) {
                            Text.PrintHelp('LM2_2A') //"Use the circle button to punch and kick!"
                            $.flag_player_got_help_message_lm2 = 1
                        }
                        if ($.controlmode == 2) {
                            Text.PrintHelp('LM2_2C') //"Use the circle button to punch and kick!"
                            $.flag_player_got_help_message_lm2 = 1
                        }
                        if ($.controlmode == 3) {
                            Text.PrintHelp('LM2_2D') //"Use the circle button to punch and kick!"
                            $.flag_player_got_help_message_lm2 = 1
                        }
                    }
                }
            }
            await asyncWait(0)
        }

        if (!$.bat_lm2.hasBeenCollected()) {
            $.bat_blip_lm2.remove()
            $.bat_lm2.remove()
            $.flag_player_had_bat_message_lm2 = 1
        }

        $.radar_blip_ped1_lm2.remove()

        if (Car.IsDead($.car_lm2)) {
            Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
            // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
        } else {
            if ($.car_lm2.isUpsidedown() && $.car_lm2.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //You've flipped your wheels!"
                // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
            }
        }

        $.car_lm2.changeLock(1 /* CARLOCK_UNLOCKED */)

        $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2)

        Text.PrintNow('LM2_1', 7000, 1) //"Take the car and get it resprayed."

        // waiting for the player to get into the car

        while (!$.player.isInCar($.car_lm2)) {
            await asyncWait(0)
            // SCM GOSUB girls_running
            await girls_running()
            // fallback if label was not emitted as async function: no-op continues linearly
            if (Car.IsDead($.car_lm2)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
            } else {
                if ($.car_lm2.isUpsidedown() && $.car_lm2.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //You've flipped your wheels!"
                    // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
                }
            }
        }

        $.flag_player_in_car_lm2 = 1

        Game.SetFreeResprays(true /* ON */)

        $.radar_blip_car1_lm2.remove()

        $.radar_blip_coord1_lm2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */)

        $.sphere1_lm2 = Sphere.Create(925.1, -350.5, 9.3, 2.5)

        $.sprayshop1.hasResprayHappened()

        // waiting for the player to respray the car

        while (!$.sprayshop1.hasResprayHappened() || !$.player.isInCar($.car_lm2) || !$.player.isStoppedInArea2D(922.6, -366.1, 928.6, -354.3, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.car_lm2)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
            } else {
                if ($.car_lm2.isUpsidedown() && $.car_lm2.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //You've flipped your wheels!"
                    // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 0) {
                Text.PrintNow('IN_VEH', 7000, 1) //"Get back into the car and get on with the mission!"
                $.radar_blip_coord1_lm2.remove()
                $.sphere1_lm2.remove()
                $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2)
                $.flag_player_had_car_message_lm2 = 1
            }
            if ($.player.isInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 1) {
                $.radar_blip_car1_lm2.remove()
                $.radar_blip_coord1_lm2 = Blip.AddSpriteForCoord(924.0, -361.0, 10.0, 18 /* RADAR_SPRITE_SPRAY */)
                if ($.flag_had_spray_help == 0) {
                    $.sphere1_lm2 = Sphere.Create(925.1, -350.5, 9.3, 2.5)
                }
                $.flag_player_had_car_message_lm2 = 0
            }
            if ($.player.locateInCar3D(925.1, -350.5, 9.3, 2.5, 2.5, 2.5, false /* FALSE */) && $.player.isInCar($.car_lm2)) {
                if ($.flag_had_spray_help == 0) {
                    Text.PrintHelp('SPRAY1')
                    $.sphere1_lm2.remove()
                    $.flag_had_spray_help = 1
                }
            }
        }

        $.sphere1_lm2.remove()

        $.radar_blip_coord1_lm2.remove()

        $.radar_blip_coord2_lm2 = Blip.AddForCoord(1087.0, -574.0, -100.0)

        $.sphere2_lm2 = Sphere.Create(1088.4, -574.4, 13.7, 2.5)

        $.flag_blip2_on_lm2 = 1

        $.garage_lm2.setTargetCarForMission($.car_lm2)

        //PRINT_NOW ( LM2_3 ) 7000 1 //"Good now get the car to the lockup!"

        TIMERB = 0

        // Waiting for the player to get back to luigi's

        while (!$.garage_lm2.isCarInMission()) {
            await asyncWait(0)
            if ($.flag_lockup_message_lm2 == 0) {
                if (TIMERB >= 3000) {
                    Text.PrintNow('LM2_3', 7000, 1) //"Good now get the car to the lockup!"
                    $.flag_lockup_message_lm2 = 1
                }
            }
            if ($.flag_car_in_garage_lm2 == 0) {
                if (Car.IsDead($.car_lm2)) {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
                } else {
                    if ($.car_lm2.isUpsidedown() && $.car_lm2.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1) //You've flipped your wheels!"
                        // SCM GOTO → mission_luigi2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_luigi2_failed') // fallback: would break linear control flow
                    }
                }
                if (!$.player.isInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 0) {
                    Text.PrintNow('IN_VEH', 5000, 1) //" Get back in the car and get on with the mission!"
                    $.sphere2_lm2.remove()
                    $.radar_blip_car1_lm2 = Blip.AddForCar($.car_lm2)
                    $.radar_blip_coord2_lm2.remove()
                    $.flag_player_had_car_message_lm2 = 1
                }
                if ($.player.isInCar($.car_lm2) && $.flag_player_had_car_message_lm2 == 1) {
                    $.radar_blip_car1_lm2.remove()
                    $.radar_blip_coord2_lm2 = Blip.AddForCoord(1087.0, -574.0, -100.0)
                    if ($.flag_player_had_garage_message_lm2 == 0) {
                        $.sphere2_lm2 = Sphere.Create(1088.4, -574.4, 13.7, 2.5)
                    }
                    $.flag_player_had_car_message_lm2 = 0
                }
                if ($.flag_player_had_garage_message_lm2 == 0) {
                    if ($.player.locateInCar3D(1088.4, -574.4, 13.7, 2.5, 2.5, 2.5, false /* FALSE */) && $.player.isInCar($.car_lm2)) {
                        Text.PrintHelp('GARAGE') //"Drive the car into the garage, get out of the car and walk outside of the garage"
                        $.sphere2_lm2.remove()
                        $.flag_player_had_garage_message_lm2 = 1
                    }
                }
                if (!$.player.locateInCar3D(1088.4, -574.4, 13.7, 2.5, 2.5, 2.5, false /* FALSE */) && $.flag_player_had_garage_message_lm2 == 1) {
                    $.flag_player_had_garage_message_lm2 = 0
                }
            }
            if (!Car.IsDead($.car_lm2)) {
                //	IF IS_CAR_STOPPED_IN_AREA_2D car_lm2 1074.0 -578.0 1085.0 -568.0 FALSE
                if ($.garage_lm2.doesContainCar($.car_lm2)) {
                    $.flag_car_in_garage_lm2 = 1
                } else {
                    $.flag_car_in_garage_lm2 = 0
                }
            }
        }

        $.radar_blip_coord2_lm2.remove()

        $.sphere2_lm2.remove()
    }

    // SCM GOTO → mission_luigi2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_luigi2_passed') // fallback: would break linear control flow

    // Mission luigi1 failed
}

async function mission_luigi2_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"

    return

    // mission Luigi1 passed
}

async function mission_luigi2_passed() {
    $.flag_luigi_mission2_passed = 1
    Stat.RegisterMissionPassed('LM2')
    Stat.PlayerMadeProgress(1)
    Text.PrintWithNumberBig('M_PASS', 4000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(4000)
    $.player.clearWantedLevel()
    // START_NEW_SCRIPT luigi_mission3_loop
    return

    // mission cleanup
}

async function mission_cleanup_luigi2() {
    $.flag_player_on_mission = 0
    $.flag_player_on_luigi_mission = 0

    if ($.flag_player_had_bat_message_lm2 == 0) {
        $.bat_blip_lm2.remove()
        $.bat_lm2.remove()
    }

    if (!Car.IsDead($.car_lm2)) {
        $.car_lm2.changeLock(1 /* CARLOCK_UNLOCKED */)
    }

    $.garage_lm2.setTargetCarForMission(-1)
    Streaming.MarkModelAsNoLongerNeeded(car`STALLION`)
    Streaming.MarkModelAsNoLongerNeeded(ped`DOCKER2`)
    Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE`)
    Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE2`)
    $.radar_blip_ped1_lm2.remove()
    $.radar_blip_car1_lm2.remove()
    $.radar_blip_coord1_lm2.remove()
    $.radar_blip_coord2_lm2.remove()
    $.bat_blip_lm2.remove()
    $.sphere1_lm2.remove()
    $.sphere2_lm2.remove()
    Game.SetFreeResprays(false /* OFF */)
    Path.SwitchPedRoadsOn(1609.8, -615.2, 9.0, 1557.8, -673.4, 20.0)
    Mission.Finish()
    return
}

async function girls_running() {
    // checks for girl1

    if ($.flag_player_in_car_lm2 == 0) {
        if ($.flag_player_in_area_lm2 == 1) {
            if ($.flag_victim_ped_lm2_changed == 1) {
                if ($.flag_buyer1_dead_lm2 == 0) {
                    if (Char.IsDead($.buyer1_lm2)) {
                        $.flag_buyer1_dead_lm2 = 1
                    } else {
                        if ($.flag_girl1_running_lm2 == 0) {
                            $.buyer1_lm2.setObjRunToCoord(1387.21, -837.38)
                            $.flag_girl1_running_lm2 = 1
                        }
                        if ($.flag_girl1_running_lm2 == 1) {
                            if ($.buyer1_lm2.locateOnFoot3D(1387.21, -837.38, 10.8, 4.0, 4.0, 4.0, false /* FALSE */)) {
                                $.buyer1_lm2.setObjFleePlayerOnFootAlways($.player)
                                $.flag_girl1_running_lm2 = 2
                            }
                        }
                    }
                }

                // checks for girl2

                if ($.flag_buyer2_dead_lm2 == 0) {
                    if (Char.IsDead($.buyer2_lm2)) {
                        $.flag_buyer2_dead_lm2 = 1
                    } else {
                        if ($.flag_girl2_running_lm2 == 0) {
                            $.buyer2_lm2.setObjRunToCoord(1385.98, -839.3)
                            $.flag_girl2_running_lm2 = 1
                        }
                        if ($.flag_girl2_running_lm2 == 1) {
                            if ($.buyer2_lm2.locateOnFoot3D(1385.98, -839.3, 10.8, 4.0, 4.0, 4.0, false /* FALSE */)) {
                                $.buyer2_lm2.setObjFleePlayerOnFootAlways($.player)
                                $.flag_girl2_running_lm2 = 2
                            }
                        }
                    }
                }
            }
        }
    }

    return
}

export async function luigi2() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***********************************Luigi Mission 2***************************************
    // *******************************Donna' "Spank" Ma Bitch Up********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME luigi2

    // Mission start stuff

    // SCM GOSUB mission_start_luigi2
    await mission_start_luigi2()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_luigi2_failed
        await mission_luigi2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_luigi2
    await mission_cleanup_luigi2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT radar_blip_ped1_lm2

    // VAR_INT victim_ped_lm2

    // VAR_INT flag_player_got_help_message_lm2

    // VAR_INT flag_victim_ped_lm2_changed

    // VAR_INT car_lm2

    // VAR_INT radar_blip_car1_lm2

    // VAR_INT radar_blip_coord1_lm2

    // VAR_INT radar_blip_coord2_lm2

    // VAR_INT flag_victim_dead_lm2

    // VAR_INT flag_player_had_car_message_lm2

    // VAR_INT flag_car_in_garage_lm2

    // VAR_INT flag_player_had_garage_message_lm2

    // VAR_INT flag_blip1_on_lm2

    // VAR_INT flag_blip2_on_lm2

    // VAR_INT buyer1_lm2

    // VAR_INT buyer2_lm2

    // VAR_INT flag_buyer1_dead_lm2

    // VAR_INT flag_buyer2_dead_lm2

    // VAR_INT flag_done_looking_bit_lm2

    // VAR_INT bat_lm2

    // VAR_INT sphere1_lm2

    // VAR_INT sphere2_lm2

    // VAR_INT flag_had_spray_help

    // VAR_INT flag_player_had_bat_message_lm2

    // VAR_INT bat_blip_lm2

    // VAR_INT flag_had_path_message_lm2

    // VAR_INT flag_lockup_message_lm2

    // VAR_INT flag_girl1_running_lm2

    // VAR_INT flag_girl2_running_lm2

    // VAR_INT flag_player_in_area_lm2

    // VAR_INT flag_player_in_car_lm2

    // ********************************************Mission Start********************************
}
