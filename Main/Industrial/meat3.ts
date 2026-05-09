// Generated from Main/Industrial/meat3.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_meat3() {
    $.flag_player_on_mission = 1

    $.flag_player_on_meat_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_player_had_car_message_meat3 = 0

    $.flag_wife_in_area = 0

    $.blob_flag = 1

    {
        // *****************************************START OF CUTSCENE*******************************

        /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_failed_meat3
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( MEA3 ) 15000 2 //"THE WIFE"

  SWITCH_STREAMING OFF

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH

  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        World.SetPedDensityMultiplier(0.0)

        World.ClearAreaOfChars(1164.25, -888.87, 10.0, 1291.76, -811.71, 20.0)

        //LOAD_ALL_MODELS_NOW

        //WHILE NOT HAS_MODEL_LOADED cut_obj1

        //	WAIT 0

        //ENDWHILE

        Cutscene.Load('mt_ph3')
        Cutscene.SetOffset(1223.88, -839.414, 13.95)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim('player')

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.Switch(true /* ON */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('MEA3_A', 10000, 1) //"The business..."

        while ($.cs_time < 6470) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('MEA3_B', 10000, 1) //"My wife has..."

        while ($.cs_time < 11321) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('MEA3_C', 10000, 1) //"I've left a car..."

        while ($.cs_time < 13506) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('MEA3_D', 10000, 1) //"Go and pick her...."

        while ($.cs_time < 17471) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('MEA3_D')

        while ($.cs_time < 18333) {
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

        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

        World.SetPedDensityMultiplier(1.0)

        // *****************************************END OF CUTSCENE*********************************

        Streaming.RequestModel(ped`FEMALE2`)

        Streaming.RequestModel(car`ESPERANTO`)

        Audio.LoadMissionAudio('mf2_a' as any)

        while (!Streaming.HasModelLoaded(ped`FEMALE2`) || !Streaming.HasModelLoaded(car`ESPERANTO`) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
        }

        $.car_meat3 = Car.Create(102 /* CAR_ESPERANTO */, 1190.0, -796.0, 13.8)

        $.car_meat3.setHeading(300.0)

        $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3)

        // waiting for the player to get into the car

        while (!$.player.isInCar($.car_meat3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        $.radar_blip_car_meat3.remove()

        Text.PrintNow('MEA3_B3', 7000, 1) //"Get the wife, press the horn to get her into the car!"

        $.wife_meat3 = Char.Create(5 /* PEDTYPE_CIVFEMALE */, ped`FEMALE2`, 1064.0, -378.0, 13.9)

        $.wife_meat3.clearThreatSearch()

        $.wife_meat3.turnToFaceCoord(1059.0, -378.0, 100.0)

        $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3)

        $.wife_meat3.setCantBeDraggedOut(true /* TRUE */)

        // Waiting for the player to be in the area

        while (!$.player.locateInCarChar2D($.wife_meat3, 8.0, 8.0, false /* FALSE */) || !$.player.isInCar($.car_meat3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (!$.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1) //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3)
                $.radar_blip_ped1_meat3.remove()
                $.flag_player_had_car_message_meat3 = 1
                $.blob_flag = 0
            }
            if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
                $.radar_blip_car_meat3.remove()
                $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3)
                $.flag_player_had_car_message_meat3 = 0
                $.blob_flag = 1
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        // tells the wife to get into players car

        $.wife_meat3.setObjEnterCarAsPassenger($.car_meat3)

        while (!$.wife_meat3.isInCar($.car_meat3) || !$.player.isInCar($.car_meat3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                if (Char.IsDead($.wife_meat3)) {
                    Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            } else {
                if (!$.player.locateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, false /* FALSE */)) {
                    Text.PrintNow('MEA3_3', 5000, 1) //"You have left his wife behind"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1) //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3)
                $.radar_blip_ped1_meat3.remove()
                $.flag_player_had_car_message_meat3 = 1
                $.blob_flag = 0
            }
            if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
                $.radar_blip_car_meat3.remove()
                $.radar_blip_ped1_meat3 = Blip.AddForChar($.wife_meat3)
                $.flag_player_had_car_message_meat3 = 0
                $.blob_flag = 1
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        $.radar_blip_ped1_meat3.remove()

        Audio.PlayMissionAudio()

        Text.PrintNow('MEA3_B4', 7000, 1) //"Marty wants to see me? Well it better be quick because I have a slot booked at the gym, and a hair appointment after that."

        $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0)

        if (Audio.HasMissionAudioFinished()) {
            Text.ClearThisPrint('MEA3_B4')
        }

        $.blob_flag = 1

        // waiting for the wife to be at the factory

        while (!$.wife_meat3.locateStoppedInCar3D(1205.7, -789.2, 13.9, 4.0, 4.0, 6.0, $.blob_flag) || !$.wife_meat3.isInCar($.car_meat3)) {
            await asyncWait(0)
            if (Audio.HasMissionAudioFinished()) {
                Text.ClearThisPrint('MEA3_B4')
            }
            if (Car.IsDead($.car_meat3)) {
                if (Char.IsDead($.wife_meat3)) {
                    Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            } else {
                if (!$.player.locateAnyMeansChar3D($.wife_meat3, 30.0, 30.0, 30.0, false /* FALSE */)) {
                    Text.PrintNow('MEA3_3', 5000, 1) //"You have left his wife behind"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 0) {
                Text.PrintNow('IN_VEH', 5000, 1) //"Get back into the vehicle and get on with the mission!"
                $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3)
                $.radar_blip_coord2_meat3.remove()
                $.flag_player_had_car_message_meat3 = 1
                $.blob_flag = 0
            }
            if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
                $.radar_blip_car_meat3.remove()
                $.radar_blip_coord2_meat3 = Blip.AddForCoord(1205.7, -789.2, -100.0)
                $.flag_player_had_car_message_meat3 = 0
                $.blob_flag = 1
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        $.radar_blip_coord2_meat3.remove()

        Hud.SwitchWidescreen(true /* ON */)

        $.player.setControl(false /* OFF */)

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        $.wife_meat3.setCantBeDraggedOut(false /* FALSE */)

        $.wife_meat3.setObjLeaveCar($.car_meat3)

        while ($.wife_meat3.isInCar($.car_meat3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                if (Char.IsDead($.wife_meat3)) {
                    Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        $.wife_meat3.setObjGotoCoordOnFoot(1204.2, -801.9)

        Camera.SetFixedPosition(1201.8, -784.7, 17.0, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(1204.4, -802.7, 15.0, 2 /* JUMP_CUT */)

        World.ClearArea(1200.8, -799.3, 14.0, 10.0, true /* TRUE */)

        TIMERB = 0

        // Waiting for the wifes to get to the meat grinding area

        while (!($.flag_wife_in_area == 1)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.flag_wife_in_area == 0) {
                if ($.wife_meat3.locateOnFoot2D(1204.2, -801.9, 0.5, 0.5, false /* FALSE */)) {
                    $.flag_wife_in_area = 1
                }
            }
            if (TIMERB >= 25000) {
                if (!($.flag_wife_in_area == 1)) {
                    $.wife_meat3.setCoordinates(1204.2, -801.9, 13.7)
                    // SCM GOTO → wife_stuck1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO wife_stuck1') // fallback: would break linear control flow
                }
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }
    }

    async function wife_stuck1() {
        // opens the door

        while (!$.doggy_door.rotate(135.0, 5.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        $.wife_meat3.setObjGotoCoordOnFoot(1205.9, -805.8)

        TIMERB = 0

        while (!$.wife_meat3.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (TIMERB >= 25000) {
                if (!$.wife_meat3.locateOnFoot3D(1205.9, -805.8, 14.0, 1.0, 1.0, 1.0, false /* FALSE */)) {
                    $.wife_meat3.removeElegantly()
                    // SCM GOTO → mission_bloke_stuck_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_bloke_stuck_meat3') // fallback: would break linear control flow
                }
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        // Shuts the door
    }

    async function mission_bloke_stuck_meat3() {
        Audio.LoadMissionAudio('mf4_c' as any)

        while (!$.doggy_door.rotate(45.0, 5.0, false /* FALSE */) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if (Char.IsDead($.wife_meat3)) {
                Text.PrintNow('MEA3_1', 5000, 1) //"The wife's dead!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        Camera.RestoreJumpcut()

        $.wife_meat3.removeElegantly()

        Audio.PlayMissionAudio()

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
            if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
                Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
                // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
            }
        }

        Hud.SwitchWidescreen(false /* OFF */)

        $.player.setControl(true /* ON */)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)

        Text.PrintNow('MEA3_B6', 5000, 1) //"Take the car and dump it into the sea, this will get rid of any evidence."

        if (Car.IsDead($.car_meat3)) {
            Text.PrintNow('MEA3_2', 5000, 1) //"You were told to dump the vehicle in the sea!"
            // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
        }

        if ($.car_meat3.isUpsidedown() && $.car_meat3.isStopped()) {
            Text.PrintNow('UPSIDE', 5000, 1) //"The vehicle's upsidedown!"
            // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
        }

        // waiting for the car to be dumped in the water

        while (!$.car_meat3.isInWater()) {
            await asyncWait(0)
            if (Car.IsDead($.car_meat3)) {
                if (!$.car_meat3.isInWater()) {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                    // SCM GOTO → mission_failed_meat3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_failed_meat3') // fallback: would break linear control flow
                }
            } else {
                if (!$.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 0) {
                    $.radar_blip_car_meat3 = Blip.AddForCar($.car_meat3)
                    $.flag_player_had_car_message_meat3 = 1
                }
                if ($.player.isInCar($.car_meat3) && $.flag_player_had_car_message_meat3 == 1) {
                    $.radar_blip_car_meat3.remove()
                    Text.PrintNow('MEA3_B6', 5000, 1) //"Dump the vehicle in the sea!"
                    $.flag_player_had_car_message_meat3 = 0
                }
            }
        }
    }

    // SCM GOTO → mission_passed_meat3 (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_passed_meat3') // fallback: would break linear control flow

    // Mission Failed
}

async function mission_failed_meat3() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"

    return

    // Mission Passed
}

async function mission_passed_meat3() {
    Text.PrintWithNumberBig('m_pass', 2000, 5000, 1) //"Mission Passed!"
    Stat.RegisterMissionPassed('MEA3')
    Stat.PlayerMadeProgress(1)
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(3000)
    $.flag_meat_mission3_passed = 1
    $.player.clearWantedLevel()
    // START_NEW_SCRIPT meat_mission4_loop
    return

    // Mission Cleanup
}

async function mission_cleanup_meat3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_meat_mission = 0
    $.wife_meat3.removeElegantly()
    Streaming.MarkModelAsNoLongerNeeded(ped`FEMALE2`)
    Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`)
    $.radar_blip_ped1_meat3.remove()
    $.radar_blip_car_meat3.remove()
    $.radar_blip_coord2_meat3.remove()
    Mission.Finish()
    return
}

export async function meat3() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // ***********************************Meat Factory Mission 3**********************************
    // *****************************************"The Wife"****************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME meat3

    // Mission Start Stuff

    // SCM GOSUB mission_start_meat3
    await mission_start_meat3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_failed_meat3
        await mission_failed_meat3()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_meat3
    await mission_cleanup_meat3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variable for mission

    // VAR_INT car_meat3

    // VAR_INT wife_meat3

    // VAR_INT radar_blip_car_meat3

    // VAR_INT radar_blip_ped1_meat3

    // VAR_INT flag_player_had_car_message_meat3

    // VAR_INT radar_blip_coord2_meat3

    // VAR_INT flag_wife_in_area

    // ****************************************Mission Start************************************
}
