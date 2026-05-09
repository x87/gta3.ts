// Generated from Main/Industrial/luigi3.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_luigi3() {
    $.flag_player_on_mission = 1

    $.flag_player_on_luigi_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_player_got_message_lm3 = 0

    $.flag_player_got_cops_message_lm3 = 0

    $.flag_player_not_in_zone_lm3 = 0

    $.door1_position_lm3 = 0.0

    $.door2_position_lm3 = 0.0

    $.difference_in_heading_door1_lm3 = 0.0

    $.difference_in_heading_door2_lm3 = 0.0

    $.flag_blip_on_misty_lm3 = 0

    $.blob_flag = 1

    $.flag_had_bus_message_lm3 = 0

    $.flag_camera_mode_lm3 = 0

    // *****************************************START OF CUT_SCENE******************************

    {
        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_luigi3_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  SWITCH_STREAMING OFF

  PRINT_BIG ( LM3 ) 15000 2 //"Drive Misty For Me."
  */

        Streaming.LoadSpecialCharacter(1, 'LUIGI')
        Streaming.LoadSpecialCharacter(2, 'MICKY')

        Streaming.RequestModel(257 /* indhibuild3 */)

        Streaming.RequestModel(256 /* luigiclubout */)

        Streaming.RequestModel(243 /* luigiineerclub */)

        Streaming.LoadSpecialModel(hier`cutobj01`, 'LUDOOR')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'LUIGIH')
        Streaming.LoadSpecialModel(hier`cutobj03`, 'PLAYERH')
        Streaming.LoadSpecialModel(hier`cutobj04`, 'MICKYH')

        /*
  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        World.SetPedDensityMultiplier(0.0)

        World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0)

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasSpecialCharacterLoaded(2) ||
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

        Cutscene.Load('l3_dm')

        Cutscene.SetOffset(900.782, -427.523, 13.829)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim('player')

        $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_luigi.setAnim('luigi')

        $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`)

        $.cs_micky.setAnim('micky')

        $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`)

        $.cs_luigihead.setAnim('luigi')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`)

        $.cs_playerhead.setAnim('player')

        $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj04`)

        $.cs_mickyhead.setAnim('micky')

        $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`)

        $.cs_ludoor.setAnim('LUDOOR')

        World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */)
        $.player.setCoordinates(896.6, -426.2, 13.9)

        $.player.setHeading(270.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2433) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_A', 10000, 1) //"Hey I've gotta talk to you... All right Mick I talk to yah later"

        while ($.cs_time < 5504) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM3_A')

        while ($.cs_time < 8333) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_B', 10000, 1) //"How yah doing kid?

        while ($.cs_time < 9667) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_C', 10000, 1) //"The Don's son, Joey Leone, he wants some action from his regular girl Misty"

        while ($.cs_time < 13833) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_D', 10000, 1) //"Go pick her up at Hepburn Heights..."

        while ($.cs_time < 15467) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_E', 10000, 1) //"but watch yourself that's Diablo turf."

        while ($.cs_time < 18233) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_F', 10000, 1) //"Then run her over to his garage in Trenton and make it quick,"

        while ($.cs_time < 21100) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_G', 10000, 1) //"Joey ain't the kinda you keep waiting, remember, this is your foot in the door..."

        while ($.cs_time < 25333) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_H', 10000, 1) //"so keep your eyes on the road and off Misty!"

        while ($.cs_time < 27701) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM3_H')

        while ($.cs_time < 29666) {
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

        World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */)

        Streaming.UnloadSpecialCharacter(1)
        Streaming.UnloadSpecialCharacter(2)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`)

        Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */)

        Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */)

        Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */)

        World.SetPedDensityMultiplier(1.0)

        // *****************************************END OF CUTSCENE*********************************

        Streaming.LoadSpecialCharacter(2, 'misty')

        while (!Streaming.HasSpecialCharacterLoaded(2)) {
            await asyncWait(0)
        }

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        Text.PrintNow('LM3_10', 5000, 1) //Get a vehicle!"

        $.controlmode = Pad.GetControllerMode()

        if ($.controlmode == 0) {
            Text.PrintHelp('HELP15') //"Press the...."
        }

        if ($.controlmode == 1) {
            Text.PrintHelp('HELP15') //"Press the...."
        }

        if ($.controlmode == 2) {
            Text.PrintHelp('HELP15') //"Press the...."
        }

        if ($.controlmode == 3) {
            Text.PrintHelp('HELP15') //"Press the...."
        }

        // waiting for the player to get into a car

        while (!$.player.isInAnyCar()) {
            await asyncWait(0)
        }

        $.car_lm3 = $.player.storeCarIsIn()

        Text.PrintNow('LM3_4', 7000, 1) //"Now Pick up Misty!"

        Audio.LoadMissionAudio('l2_a' as any)

        $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0)

        // waiting for the player to get to Misty's flat

        $.blob_flag = 1

        while (!$.player.locateStoppedInCar2D(937.9, -259.8, 3.0, 3.0, $.blob_flag) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
            if (!$.player.isInAnyCar() && $.flag_player_got_message_lm3 == 0) {
                Text.PrintNow('IN_VEH2', 5000, 1) //"Get a vehicle and get on with the mission!"
                $.radar_blip_coord1_lm3.remove()
                $.flag_player_got_message_lm3 = 1
                $.blob_flag = 0
            }
            if ($.player.isInAnyCar() && $.flag_player_got_message_lm3 == 1) {
                $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0)
                $.car_lm3 = $.player.storeCarIsIn()
                $.flag_player_got_message_lm3 = 0
                $.blob_flag = 1
            }
        }

        $.controlmode = Pad.GetControllerMode()

        if ($.controlmode == 0) {
            Text.PrintHelp('LM3_1A') //"Press the~h~ L3 button~w~ to activate the ~h~horn~w~ and let Misty know you are here."
        }

        if ($.controlmode == 1) {
            Text.PrintHelp('LM3_1B') //"Press the~h~ L1 button~w~ to activate the ~h~horn~w~ and let Misty know you are here."
        }

        if ($.controlmode == 2) {
            Text.PrintHelp('LM3_1C') //"Press the~h~ R1 button~w~ to activate the ~h~horn~w~ and let Misty know you are here."
        }

        if ($.controlmode == 3) {
            Text.PrintHelp('LM3_1A') //"Press the~h~ L3 button~w~ to activate the ~h~horn~w~ and let Misty know you are here."
        }

        $.blob_flag = 1

        while (!$.player.isPressingHorn() || !$.player.locateStoppedInCar2D(937.9, -259.8, 3.0, 3.0, $.blob_flag) || !$.player.isSittingInAnyCar()) {
            await asyncWait(0)
            if (!$.player.isInAnyCar() && $.flag_player_got_message_lm3 == 0) {
                Text.PrintNow('IN_VEH2', 5000, 1) //"Get a vehicle and get on with the mission!"
                $.radar_blip_coord1_lm3.remove()
                $.flag_player_got_message_lm3 = 1
                $.blob_flag = 0
            }
            if ($.player.isInAnyCar() && $.flag_player_got_message_lm3 == 1) {
                $.radar_blip_coord1_lm3 = Blip.AddForCoord(937.9, -259.8, -100.0)
                $.car_lm3 = $.player.storeCarIsIn()
                $.flag_player_got_message_lm3 = 0
                $.blob_flag = 1
            }
        }

        Text.ClearHelp()

        $.script_controlled_player = $.player.getChar()

        $.script_controlled_player.setCantBeDraggedOut(true /* TRUE */)

        /*
  IF IS_PLAYER_IN_ANY_CAR player

  STORE_CAR_PLAYER_IS_IN player car_lm3

  IF NOT IS_CAR_DEAD car_lm3
  LOCK_CAR_DOORS car_lm3 CARLOCK_LOCKED_PLAYER_INSIDE
  ENDIF

  ENDIF
  */

        await asyncWait(500)

        Hud.SwitchWidescreen(true /* ON */)

        $.player.setControl(false /* OFF */)

        /*
  IF IS_PLAYER_IN_ANY_CAR player

  STORE_CAR_PLAYER_IS_IN player car_lm3

  IF NOT IS_CAR_DEAD car_lm3
  LOCK_CAR_DOORS car_lm3 CARLOCK_LOCKED_PLAYER_INSIDE
  ENDIF

  ENDIF
  */

        World.ClearArea(936.2, -263.9, 5.0, 1.0, true /* TRUE */)

        if ($.player.locateInCar2D(937.9, -259.8, 3.0, 3.0, false /* FALSE */)) {
            if (
                $.player.isInModel(121 /* CAR_BUS */) ||
                $.player.isInModel(127 /* CAR_COACH */) ||
                $.player.isInModel(145 /* CAR_FLATBED */) ||
                $.player.isInModel(97 /* CAR_FIRETRUCK */) ||
                $.player.isInModel(90 /* CAR_LANDSTALKER */) ||
                $.player.isInModel(93 /* CAR_LINERUNNER */)
            ) {
                $.flag_camera_mode_lm3 = 1
            }
            if (
                $.player.isInModel(98 /* CAR_TRASHMASTER */) ||
                $.player.isInModel(103 /* CAR_PONY */) ||
                $.player.isInModel(104 /* CAR_MULE */) ||
                $.player.isInModel(106 /* CAR_AMBULANCE */) ||
                $.player.isInModel(113 /* CAR_MRWHOOPEE */) ||
                $.player.isInModel(117 /* CAR_ENFORCER */)
            ) {
                $.flag_camera_mode_lm3 = 1
            }
            if (
                $.player.isInModel(130 /* CAR_RUMPO */) ||
                $.player.isInModel(132 /* CAR_BELLYUP */) ||
                $.player.isInModel(133 /* CAR_MRWONGS */) ||
                $.player.isInModel(146 /* CAR_YANKEE */) ||
                $.player.isInModel(118 /* CAR_SECURICAR */)
            ) {
                $.flag_camera_mode_lm3 = 1
            }
        }

        if ($.flag_camera_mode_lm3 == 1) {
            World.ClearArea(930.112, -264.972, 7.336, 4.0, true /* TRUE */)
            Camera.SetFixedPosition(930.112, -264.972, 7.336, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(930.959, -265.474, 7.164, 2 /* JUMP_CUT */)
        } else {
            World.ClearArea(928.169, -267.549, 4.0, 4.0, true /* TRUE */)
            Camera.SetFixedPosition(928.169, -267.549, 5.623, 0.0, 0.0, 0.0)
            Camera.PointAtPoint(929.162, -267.43, 5.656, 2 /* JUMP_CUT */)
        }

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */)

        //CLEAR_AREA 943.8 -271.5 4.0 4.0 TRUE // This should get rid of any stuff to block the cut-scene area

        World.ClearArea(941.7, -269.2, 4.0, 1.0, true /* TRUE */) // Location misty is going to run to

        $.radar_blip_coord1_lm3.remove()

        $.misty_lm3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 946.47, -275.5, 3.9)

        $.misty_lm3.turnToFaceCoord(942.0, -268.0, -100.0)

        $.misty_lm3.clearThreatSearch()

        $.misty_lm3.setAnimGroup(15 /* ANIM_SEXY_WOMANPED */)

        // opens the doors

        $.door1_position_lm3 = $.misty_door1.getHeading()

        while (!($.door1_position_lm3 == 90.0)) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
            $.difference_in_heading_door1_lm3 = 90.0 - $.door1_position_lm3
            if ($.difference_in_heading_door1_lm3 < 10.0) {
                $.door1_position_lm3 = 90.0
            } else {
                $.door1_position_lm3 += 10.0
            }
            $.misty_door1.setHeading($.door1_position_lm3)
        }

        await asyncWait(0)

        if (Char.IsDead($.misty_lm3)) {
            Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
            // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
        }

        World.ClearArea(944.1, -270.7, 4.0, 2.0, true /* TRUE */)

        $.misty_lm3.setObjGotoCoordOnFoot(944.1, -270.7)

        //POINT_CAMERA_AT_CHAR misty_lm3 FIXED JUMP_CUT

        TIMERB = 0

        while (!$.misty_lm3.isObjectivePassed()) {
            await asyncWait(0)
            if ($.player.isInAnyCar()) {
                $.car_lm3 = $.player.storeCarIsIn()
                if (Car.IsDead($.car_lm3)) {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                }
            }
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
            if (TIMERB >= 10000) {
                if (!$.misty_lm3.isObjectivePassed()) {
                    $.misty_lm3.setCoordinates(944.1, -270.7, 3.9)
                }
            }
        }

        World.ClearArea(941.0, -264.0, -100.0, 4.0, true /* TRUE */)

        /*
  // Close the door

  WHILE NOT door1_position_lm3 = 0.0

  WAIT 0

  IF IS_PLAYER_IN_ANY_CAR player

  STORE_CAR_PLAYER_IS_IN player car_lm3

  IF IS_CAR_DEAD car_lm3
  PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
  GOTO mission_luigi3_failed
  ENDIF

  ENDIF

  IF IS_CHAR_DEAD misty_lm3
  PRINT_NOW ( MISTY1 ) 5000 1  //"Misty's dead!"
  GOTO mission_luigi3_failed
  ENDIF

  difference_in_heading_door1_lm3 = door1_position_lm3

  IF difference_in_heading_door1_lm3 < 10.0
  door1_position_lm3 = 0.0
  ELSE
  door1_position_lm3 -= 10.0
  ENDIF

  SET_OBJECT_HEADING misty_door1 door1_position_lm3

  ENDWHILE

  */

        Camera.SetFixedPosition(934.2, -265.8, 5.9, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(934.7, -264.9, 5.7, 2 /* JUMP_CUT */)

        $.misty_door1.setHeading(0.0)

        if (!Char.IsDead($.misty_lm3)) {
            if (!World.IsAreaOccupied(934.1, -266.46, 2.0, 935.08, -268.9, 10.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, true /* TRUE */, true /* TRUE */)) {
                World.ClearArea(934.79, -267.47, 3.9, 1.0, true /* TRUE */)
                $.misty_lm3.setCoordinates(934.79, -267.47, 3.9)
            }
        }

        if ($.player.isInAnyCar()) {
            $.car_lm3 = $.player.storeCarIsIn()
            $.misty_lm3.setObjEnterCarAsPassenger($.car_lm3)

            //	IF NOT IS_CAR_DEAD car_lm3
            //		LOCK_CAR_DOORS car_lm3 CARLOCK_UNLOCKED
            //	ENDIF

            if (Car.IsDead($.car_lm3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }

            // waiting for Misty to get into the car

            while (!$.misty_lm3.isInCar($.car_lm3)) {
                await asyncWait(0)
                if (Car.IsDead($.car_lm3)) {
                    if (Char.IsDead($.misty_lm3)) {
                        Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                    }
                }
                if (Char.IsDead($.misty_lm3)) {
                    Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                }
            }
        } else {
            $.misty_lm3.setObjGotoPlayerOnFoot($.player)
            while (!$.misty_lm3.isObjectivePassed()) {
                await asyncWait(0)
                if ($.player.isInAnyCar()) {
                    $.car_lm3 = $.player.storeCarIsIn()
                    if (Car.IsDead($.car_lm3)) {
                        Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                        // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                    }
                }
                if (Char.IsDead($.misty_lm3)) {
                    Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                    // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
                }
            }
        }

        $.misty_lm3.followPlayer($.player)

        Hud.SwitchWidescreen(false /* OFF */)

        Camera.Restore()

        $.script_controlled_player.setCantBeDraggedOut(false /* FALSE */)

        $.player.setControl(true /* ON */)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */)

        Audio.PlayMissionAudio()

        Text.PrintNow('LM3_5', 7000, 1) //"You working for Luigi regular huh? It's about time he got a driver we can trust!"

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
            if (!$.misty_lm3.isInPlayersGroup($.player) && $.flag_blip_on_misty_lm3 == 0) {
                Text.PrintNow('HEY4', 5000, 1) //"You have left Misty behind go and get her!"
                $.radar_blip_ped1_lm3 = Blip.AddForChar($.misty_lm3)
                //REMOVE_BLIP radar_blip_coord2_lm3
                $.flag_blip_on_misty_lm3 = 1
                $.blob_flag = 0
            }
            if ($.player.locateAnyMeansChar2D($.misty_lm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_misty_lm3 == 1) {
                $.misty_lm3.followPlayer($.player)
                //PRINT_NOW ( LM3_2 ) 5000 1 //"Take Misty to see Joey Leone."
                $.radar_blip_ped1_lm3.remove()
                //ADD_BLIP_FOR_COORD 1196.0 -874.0 -100.0 radar_blip_coord2_lm3
                $.flag_blip_on_misty_lm3 = 0
                $.blob_flag = 1
            }
        }

        Text.ClearThisPrint('LM3_5')

        Text.PrintNow('LM3_2', 5000, 1) //"Take Misty to see Joey Leone."

        $.radar_blip_coord2_lm3 = Blip.AddForCoord(1196.0, -874.0, -100.0)

        $.blob_flag = 1

        while (!$.player.locateStoppedAnyMeans2D(1196.0, -874.0, 3.0, 4.0, $.blob_flag) || !$.misty_lm3.locateStoppedAnyMeans2D(1196.0, -874.0, 3.0, 4.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
            if (!$.misty_lm3.isInPlayersGroup($.player) && $.flag_blip_on_misty_lm3 == 0) {
                Text.PrintNow('HEY4', 5000, 1) //"You have left Misty behind go and get her!"
                $.radar_blip_ped1_lm3 = Blip.AddForChar($.misty_lm3)
                $.radar_blip_coord2_lm3.remove()
                $.flag_blip_on_misty_lm3 = 1
                $.blob_flag = 0
            }
            if ($.player.locateAnyMeansChar2D($.misty_lm3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_misty_lm3 == 1) {
                $.misty_lm3.followPlayer($.player)
                Text.PrintNow('LM3_2', 5000, 1) //"Take Misty to see Joey Leone."
                $.radar_blip_ped1_lm3.remove()
                $.radar_blip_coord2_lm3 = Blip.AddForCoord(1196.0, -874.0, -100.0)
                $.flag_blip_on_misty_lm3 = 0
                $.blob_flag = 1
            }
        }

        $.radar_blip_coord2_lm3.remove()

        Camera.SetFixedPosition(1211.85, -882.4, 19.42, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(1210.99, -881.9, 19.34, 2 /* JUMP_CUT */)

        if (Char.IsDead($.misty_lm3)) {
            Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
            // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
        }

        $.misty_lm3.leaveGroup()

        Hud.SwitchWidescreen(true /* ON */)

        $.player.setControl(false /* OFF */)

        $.player.clearWantedLevel()

        World.ClearArea(1190.6, -869.1, -100.0, 6.0, true /* TRUE */) // This should get rid of any stuff to block the cut-scene area

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        $.script_controlled_player = $.player.getChar()

        if ($.misty_lm3.isInAnyCar()) {
            $.car_lm3 = $.misty_lm3.storeCarIsIn()
            $.misty_lm3.setObjLeaveCar($.car_lm3)
        }

        while ($.misty_lm3.isInAnyCar()) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
        }

        if ($.script_controlled_player.isInAnyCar()) {
            $.car_lm3 = $.script_controlled_player.storeCarIsIn()
            $.script_controlled_player.setObjLeaveCar($.car_lm3)
        }

        $.misty_lm3.setObjGotoCoordOnFoot(1193.1, -868.3)

        while ($.script_controlled_player.isInAnyCar()) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
        }

        $.script_controlled_player.setObjGotoCoordOnFoot(1193.1, -868.3)

        await asyncWait(500)

        if (Char.IsDead($.misty_lm3)) {
            Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
            // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
        }

        $.car_lm3.markAsNoLongerNeeded()

        // ********************************START OF CUT-SCENE PART TWO******************************

        $.breakout_timer_start = Clock.GetGameTimer()

        $.breakout_diff = 0

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0)
            if (Char.IsDead($.misty_lm3)) {
                Text.PrintNow('MISTY1', 5000, 1) //"Misty's dead!"
                // SCM GOTO → mission_luigi3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_luigi3_failed') // fallback: would break linear control flow
            }
            $.breakout_timer = Clock.GetGameTimer()
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start
        }

        $.player.makeSafeForCutscene()

        Camera.SetFadingColor(0, 0, 0)

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        Streaming.Switch(false /* OFF */)

        Streaming.LoadSpecialCharacter(1, 'joey')
        Streaming.LoadSpecialModel(hier`cutobj01`, 'JOEDOOR')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'JOEYH')
        Streaming.LoadSpecialModel(hier`cutobj03`, 'PLAYERH')
        Streaming.LoadSpecialModel(hier`cutobj04`, 'MISTYH')
        Streaming.RequestModel(car`MAFIA`)
        Streaming.RequestModel(car`IDAHO`)
        Streaming.RequestModel(car`STALLION`)
        Streaming.RequestModel(939 /* jogarageext */)
        Streaming.RequestModel(1074 /* jogarageint */)

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        $.script_controlled_player.setIdle()

        if (!Char.IsDead($.misty_lm3)) {
            $.misty_lm3.setIdle()
        }

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(car`IDAHO`) ||
            !Streaming.HasModelLoaded(car`MAFIA`) ||
            !Streaming.HasModelLoaded(car`STALLION`)
        ) {
            await asyncWait(0)
        }

        while (
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(hier`cutobj04`) ||
            !Streaming.HasModelLoaded(hier`cutobj03`) ||
            !Streaming.HasModelLoaded(939 /* jogarageext */) ||
            !Streaming.HasModelLoaded(1074 /* jogarageint */)
        ) {
            await asyncWait(0)
        }

        Cutscene.Load('j0_dm2')

        Cutscene.SetOffset(1190.079, -869.861, 13.977)

        $.cut_car_lm3 = Car.Create(134 /* CAR_MAFIA */, 1189.1, -858.8, 14.0)

        $.cut_car_lm3.setHeading(76.0)

        $.cut_car2_lm3 = Car.Create(91 /* CAR_IDAHO */, 1182.5, -857.0, 14.1)

        $.cut_car2_lm3.setHeading(291.2)

        $.cut_car3_lm3 = Car.Create(129 /* CAR_STALLION */, 1192.9, -860.8, 14.0)

        $.cut_car3_lm3.setHeading(150.0)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim('player')

        $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`)
        $.cs_joey.setAnim('joey')

        $.cs_misty = CutsceneObject.Create(ped`SPECIAL2`)
        $.cs_misty.setAnim('misty')

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj02`)
        $.cs_joeyhead.setAnim('joey')

        $.cs_mistyhead = CutsceneHead.Create($.cs_misty, hier`cutobj04`)
        $.cs_mistyhead.setAnim('misty')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`)
        $.cs_playerhead.setAnim('player')

        $.cs_joedoor = CutsceneObject.Create(hier`cutobj01`)
        $.cs_joedoor.setAnim('JOEDOOR')

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, false /* FALSE */)

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, false /* FALSE */)

        World.ClearArea(1194.0, -872.5, 14.0, 2.0, true /* TRUE */)

        $.player.setCoordinates(1194.0, -872.5, -100.0)

        $.player.setHeading(230.0)

        $.misty_lm3.delete()

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 10538) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_6', 10000, 1) //"Joey..."

        while ($.cs_time < 11896) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM3_6')

        while ($.cs_time < 14353) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_6A', 10000, 1) //"Am I goin' to play with our big end again?"

        while ($.cs_time < 16869) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_7', 10000, 1) //"I'll be with you In a minute spark plug."

        while ($.cs_time < 20173) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_8', 10000, 1) //"Hey, I'm Joey."

        while ($.cs_time < 21116) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_9', 10000, 1) //"Luigi said you were reliable so come back later,"

        while ($.cs_time < 23397) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_9A', 10000, 1) //"There might be some work for you."

        while ($.cs_time < 25088) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LM3_9B', 10000, 1) //"Alright."

        while ($.cs_time < 25723) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LM3_9B')

        while ($.cs_time < 26666) {
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

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, true /* TRUE */)
        World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, true /* TRUE */)

        Streaming.UnloadSpecialCharacter(1)
        Streaming.UnloadSpecialCharacter(2)

        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`)
        Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`)
        Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`)
        Streaming.MarkModelAsNoLongerNeeded(car`STALLION`)
        Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */)
        Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */)

        $.cut_car_lm3.delete()

        $.cut_car2_lm3.delete()

        $.cut_car3_lm3.delete()

        // **********************************END OF CUT-SCENE PART TWO***********************************
    }

    // SCM GOTO → mission_luigi3_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_luigi3_passed') // fallback: would break linear control flow

    // Mission Luigi1 failed
}

async function mission_luigi3_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"

    return

    // mission Luigi1 passed
}

async function mission_luigi3_passed() {
    $.flag_luigi_mission3_passed = 1
    Stat.RegisterMissionPassed('LM3')
    Stat.PlayerMadeProgress(1)
    Text.PrintWithNumberBig('m_pass', 1000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(1000)
    $.player.clearWantedLevel()
    $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */)
    // START_NEW_SCRIPT luigi_mission4_loop
    // START_NEW_SCRIPT joey_mission1_loop
    // START_NEW_SCRIPT meat_mission1_loop
    return

    // mission cleanup
}

async function mission_cleanup_luigi3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_luigi_mission = 0
    /*
  IF NOT IS_CAR_DEAD car_lm3
  LOCK_CAR_DOORS car_lm3 CARLOCK_UNLOCKED
  ENDIF
  */

    $.misty_lm3.removeElegantly()
    Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`)
    Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`)
    Streaming.MarkModelAsNoLongerNeeded(car`STALLION`)
    $.radar_blip_coord1_lm3.remove()
    $.radar_blip_coord2_lm3.remove()
    Mission.Finish()
    return
}

export async function luigi3() {
    // MissionBoundary

    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Luigi mission 3*********************************
    // ***************************************"Drive Misty For Me"******************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME luigi3

    // Mission Start Stuff

    // SCM GOSUB mission_start_luigi3
    await mission_start_luigi3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_luigi3_failed
        await mission_luigi3_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_luigi3
    await mission_cleanup_luigi3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variable for mission

    // VAR_INT radar_blip_coord1_lm3

    // VAR_INT radar_blip_coord2_lm3

    // VAR_INT misty_lm3

    // VAR_INT car_lm3

    // VAR_INT flag_player_got_message_lm3

    // VAR_INT flag_player_got_cops_message_lm3

    // VAR_INT flag_player_not_in_zone_lm3

    // VAR_FLOAT door1_position_lm3

    // VAR_FLOAT door2_position_lm3

    // VAR_FLOAT difference_in_heading_door1_lm3

    // VAR_FLOAT difference_in_heading_door2_lm3

    // VAR_INT flag_blip_on_misty_lm3

    // VAR_INT radar_blip_ped1_lm3

    // VAR_INT flag_had_bus_message_lm3

    // VAR_INT flag_camera_mode_lm3

    // VAR_INT cut_car_lm3

    // VAR_INT cut_car2_lm3

    // VAR_INT cut_car3_lm3

    // ****************************************Mission Start************************************
}
