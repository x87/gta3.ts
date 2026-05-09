// Generated from Main/Industrial/frank2.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_frankie2() {
    $.flag_player_on_mission = 1

    $.flag_player_on_frankie_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.hours_fm2 = 0

    $.minutes_fm2 = 0

    $.hours_stuff_happen_fm2 = 0

    $.minutes_stuff_happen_fm2 = 0

    $.flag_player_got_car_message_fm2 = 0

    $.flag_player_got_cops_message_fm2 = 0

    $.time_car_stopped_fm2 = 0

    $.flag_car_has_just_stopped = 0

    $.timer_difference = 0

    $.flag_taxi1_exit_car_fm2 = 0

    $.flag_taxi2_exit_car_fm2 = 0

    $.flag_car_fm2_created = 0

    $.flag_mission_taxi_fm2_created = 0

    $.flag_no_longer_mad = 0

    $.flag_curley_at_point1_fm2 = 0

    $.flag_curley_at_point2_fm2 = 0

    $.flag_curley_bob_fm2_dead = 0

    $.flag_bob_in_position_one = 0

    $.flag_bob_in_position_two = 0

    $.flag_bob_in_position_three = 0

    $.flag_curley_bob_dead_fm2 = 0

    $.car_health_fm2 = 0

    $.blob_flag = 1

    $.flag_car_fm2_dead = 0

    $.car_fm2_x = 0.0

    $.car_fm2_y = 0.0

    $.car_fm2_z = 0.0

    $.flag_curly_mad_fm2 = 0

    $.spooked_counter = 0

    $.spooked_check = 0

    $.flag_player_had_warning1_fm2 = 0

    $.flag_player_had_warning2_fm2 = 0

    $.flag_curly_moved_fm2 = 0

    {
        // ******************************************START OF CUTSCENE******************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_frankie2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( FM2 ) 15000 2 //"Cuttin' The Grass"

  SWITCH_STREAMING OFF
  */

        Streaming.LoadSpecialCharacter(1, $.frankie)
        Streaming.RequestModel(ped`GANG_MAFIA_B`)
        Streaming.LoadSpecialModel(hier`cutobj01`, FRANKH)
        //LOAD_SPECIAL_MODEL cut_obj2 PLAYERH

        Streaming.RequestModel(franksclb02)
        Streaming.RequestModel(salvsdetail)
        Streaming.RequestModel(swank_inside)

        /*
  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        Streaming.LoadAllModelsNow()

        // Cutscene stuff

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(ped`GANG_MAFIA_B`) || !Streaming.HasModelLoaded(hier`cutobj01`)) {
            //OR NOT HAS_MODEL_LOADED cut_obj2

            await asyncWait(0)
        }

        while (!Streaming.HasModelLoaded(franksclb02) || !Streaming.HasModelLoaded(salvsdetail) || !Streaming.HasModelLoaded(swank_inside)) {
            await asyncWait(0)
        }

        Cutscene.Load(s2_ctg)

        Cutscene.SetOffset(1457.776, -185.348, 54.925)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim($.player)

        $.cs_frankie = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_frankie.setAnim($.frankie)

        $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj01`)

        $.cs_frankiehead.setAnim(frank)

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ2 cs_playerhead

        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`)

        $.cs_mafia.setAnim(gang02)

        World.ClearArea(1455.1, -187.8, -100.0, 1.0, true /* TRUE */)

        $.player.setCoordinates(1455.1, -187.8, -100.0)

        $.player.setHeading(180.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Streaming.Switch(true /* ON */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 1726) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_J', 10000, 1) //"Leave us alone for a minute,"

        while ($.cs_time < 2910) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('FM2_J')

        while ($.cs_time < 4558) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_A', 10000, 1) //"The Colombian Cartel is making SPANK somewhere in Liberty.

        while ($.cs_time < 7896) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_K', 10000, 1) //"But we don't know where, and they seem to know everything we're doin' before we do."

        while ($.cs_time < 13257) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_B', 10000, 1) //"We got us a rat."

        while ($.cs_time < 15103) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_L', 10000, 1) //"There is a guy named Curly Bob works the bar at Luigi's.

        while ($.cs_time < 18415) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_M', 10000, 1) //"He's been throwing more money around than he's earning."

        while ($.cs_time < 21238) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_C', 10000, 1) //"He ain't pimping or pushing so he must be talking."

        while ($.cs_time < 25040) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_N', 10000, 1) //"He usually gets a taxi home after work. So follow him."

        while ($.cs_time < 28251) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_O', 10000, 1) //"And if he's rattin' us out...kill him."

        while ($.cs_time < 30960) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('FM2_O')

        while ($.cs_time < 38333) {
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

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE

        Streaming.UnloadSpecialCharacter(1)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`)
        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ2

        Streaming.MarkModelAsNoLongerNeeded(franksclb02)

        Streaming.MarkModelAsNoLongerNeeded(salvsdetail)

        Streaming.MarkModelAsNoLongerNeeded(swank_inside)

        // *******************************************END OF CUTSCENE*******************************

        Streaming.LoadSpecialCharacter(2, curly)

        Streaming.RequestModel(car`TAXI`)
        Streaming.RequestModel(ped`TAXI_DRIVER`)

        while (!Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(car`TAXI`) || !Streaming.HasModelLoaded(ped`TAXI_DRIVER`)) {
            await asyncWait(0)
        }

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        Zone.SetPedInfo('PORT_E', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        Zone.SetPedInfo('PORT_E', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        Zone.SetCarInfo('PORT_E', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        Zone.SetCarInfo('PORT_E', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

        // CREATES THE TAXI FOR THE BLOKE TO GET INTO

        Text.PrintNow('FM2_11', 5000, 1) //"Park out the front of Luigi's Club, Curly Bob will be leaving shortly."

        $.radar_blip_club_fm2 = Blip.AddForCoord(907.0, -424.7, 13.8)

        $.car_fm2 = Car.Create(103 /* CAR_TAXI */, 906.9, -433.7, -100.0)

        $.car_fm2.setOnlyDamagedByPlayer(true /* TRUE */)

        $.flag_car_fm2_created = 1

        $.car_fm2.setHeading(180.0)

        $.car_fm2.changeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

        $.van_driver_fm2 = Char.CreateInsideCar($.car_fm2, 4 /* PEDTYPE_CIVMALE */, ped`TAXI_DRIVER`)

        $.van_driver_fm2.setCantBeDraggedOut(true /* TRUE */)

        $.van_driver_fm2.clearThreatSearch()

        $.car_fm2.setIdle()

        Hud.SwitchWidescreen(false /* OFF */)

        Camera.Restore()

        $.player.setControl(true /* on */)

        Game.SetPoliceIgnorePlayer($.player, false /* off */)

        timerb = 0

        //GET_TIME_OF_DAY hours_fm2 minutes_fm2

        //minutes_stuff_happen_fm2 = minutes_fm2 - 1

        //IF minutes_stuff_happen_fm2 <= 0

        //	minutes_stuff_happen_fm2 += 60

        //ENDIF

        // waiting for the time of day to be correct

        //WHILE NOT minutes_fm2 = minutes_stuff_happen_fm2

        //	WAIT 0

        //GET_TIME_OF_DAY hours_fm2 minutes_fm2

        //ENDWHILE

        while (timerb < 60000) {
            await asyncWait(0)
        }

        // checks to see where curly will be created

        if ($.player.isInArea3D(901.2, -427.8, 12.0, 878.1, -422.4, 27.0, false /* FALSE */) || $.player.isInArea3D(878.1, -422.4, 12.0, 900.4, -404.2, 27.0, false /* FALSE */)) {
            // creates curley bob infront of the club

            World.ClearArea(902.9, -398.8, 14.0, 1.0, true /* TRUE */)
            $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 902.9, -398.8, 14.0)
            $.radar_blip_ped1_fm2 = Blip.AddForChar($.curley_bob_fm2)
            $.radar_blip_ped1_fm2.changeDisplay(1 /* MARKER_ONLY */)
            $.curley_bob_fm2.clearThreatSearch()
            $.curley_bob_fm2.setObjGotoCoordOnFoot(902.7, -430.4)
            timerb = 0
            while (!$.curley_bob_fm2.locateOnFoot2D(902.7, -430.4, 1.0, 1.0, false /* FALSE */)) {
                await asyncWait(0)
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if (!$.curley_bob_fm2.isHealthGreater(99)) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if ($.flag_curly_moved_fm2 == 0) {
                    if (timerb >= 15000) {
                        if (!$.curley_bob_fm2.locateOnFoot2D(902.7, -430.4, 1.0, 1.0, false /* FALSE */)) {
                            $.curley_bob_fm2.setCoordinates(902.7, -430.4, 13.7)
                            $.flag_curly_moved_fm2 = 1
                        }
                    }
                }
            }
            $.curley_bob_fm2.setIdle()
            // SCM GOTO → mission_check (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_check') // fallback: would break linear control flow
        } else {
            // creates curley bob down the alleyway

            World.ClearArea(886.3, -422.2, 13.8, 1.0, true /* TRUE */)
            $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 886.3, -422.2, 13.8)
            $.radar_blip_ped1_fm2 = Blip.AddForChar($.curley_bob_fm2)
            $.radar_blip_ped1_fm2.changeDisplay(1 /* MARKER_ONLY */)
            $.curley_bob_fm2.clearThreatSearch()
            $.curley_bob_fm2.setObjGotoCoordOnFoot(888.0, -425.0)
            World.ClearArea(887.4, -417.3, 13.9, 10.0, false /* FALSE */) // This should get rid of anything is his way
            World.ClearArea(892.8, -425.5, 13.9, 3.0, false /* FALSE */)
            World.ClearArea(896.3, -425.6, 13.8, 3.0, false /* FALSE */)
            World.ClearArea(899.1, -424.6, 14.0, 3.0, false /* FALSE */)
            World.ClearArea(903.4, -425.6, 13.9, 2.0, false /* FALSE */)

            //waiting for curly bob to get to the pavement

            timerb = 0
            while (!$.curley_bob_fm2.locateOnFoot2D(904.0, -427.3, 1.0, 1.0, false /* FALSE */)) {
                await asyncWait(0)
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if (!$.curley_bob_fm2.isHealthGreater(99)) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if ($.curley_bob_fm2.locateOnFoot2D(888.0, -425.0, 1.0, 1.0, false /* FALSE */)) {
                    $.curley_bob_fm2.setObjRunToCoord(892.1, -425.3)
                }

                if ($.curley_bob_fm2.locateOnFoot2D(892.1, -425.3, 1.0, 1.0, false /* FALSE */)) {
                    $.curley_bob_fm2.setObjGotoCoordOnFoot(904.0, -427.3)
                }
                if ($.flag_curly_moved_fm2 == 0) {
                    if (timerb >= 25000) {
                        if (!$.curley_bob_fm2.locateOnFoot2D(904.0, -427.3, 1.0, 1.0, false /* FALSE */)) {
                            $.curley_bob_fm2.setCoordinates(904.0, -427.3, 13.9)
                            $.flag_curly_moved_fm2 = 1
                        }
                    }
                }
            }
            $.curley_bob_fm2.setIdle()
        }
    }

    async function mission_check() {
        $.radar_blip_club_fm2.remove()

        // Checks to see which part of the mission the player will get

        if (!$.player.isStoppedInAreaInCar2D(905.0, -432.0, 910.0, -419.0, false /* FALSE */)) {
            // SCM GOTO → mission_jump3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_jump3') // fallback: would break linear control flow
        }

        // Checks to see if the player is in the area in a taxi

        if ($.player.isInModel(103 /* car_taxi */) || $.player.isInModel(121 /* car_cabbie */) || $.player.isInModel(141 /* car_borgnine */)) {
            $.mission_taxi_fm2 = $.player.storeCarIsIn()
            $.flag_mission_taxi_fm2_created = 1
        } else {
            // SCM GOTO → mission_jump3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_jump3') // fallback: would break linear control flow
        }

        // *********************If player is in a taxi luanches part one of the mission*************

        if ($.player.locateStoppedInCar2D(906.0, -425.0, 4.0, 4.0, false /* FALSE */) && $.player.isInCar($.mission_taxi_fm2)) {
            if (Char.IsDead($.curley_bob_fm2)) {
                Text.PrintNow('FM2_9', 5000, 1) //Curly Bob's dead!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
            if ($.player.isInModel(103 /* car_taxi */) || $.player.isInModel(121 /* car_cabbie */)) {
                $.mission_taxi_fm2 = $.player.storeCarIsIn()
            }

            // Checks to see if the taxi is damaged or not

            if (Car.IsDead($.mission_taxi_fm2)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle is wrecked!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            } else {
                if ($.mission_taxi_fm2.isUpsidedown() && $.mission_taxi_fm2.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
            if (!$.mission_taxi_fm2.isHealthGreater(700)) {
                Text.PrintNow('FM2_6', 5000, 1) //"Get out of here! I'm not taking a ride in this shit-heap!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
            $.curley_bob_fm2.setObjEnterCarAsPassenger($.mission_taxi_fm2)
            while (!$.curley_bob_fm2.isInCar($.mission_taxi_fm2)) {
                await asyncWait(0)
                if (Car.IsDead($.mission_taxi_fm2)) {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if ($.mission_taxi_fm2.isUpsidedown() && $.mission_taxi_fm2.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if (!$.curley_bob_fm2.isHealthGreater(99)) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if (!$.player.locateInCarChar2D($.curley_bob_fm2, 5.0, 5.0, false /* FALSE */)) {
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
            $.radar_blip_ped1_fm2.remove()
            Text.PrintNow('FM2_5', 7000, 1) //"Take me to the Portland Harbour East docks."
            $.radar_blip_coord2_fm2 = Blip.AddForCoord(1529.0, -827.0, -100.0)
            $.blob_flag = 1
            while (
                !$.player.locateStoppedInCar2D(1529.0, -827.0, 3.0, 4.0, $.blob_flag) ||
                !$.curley_bob_fm2.isInCar($.mission_taxi_fm2) ||
                !$.player.isInCar($.mission_taxi_fm2)
            ) {
                await asyncWait(0)
                if (Car.IsDead($.mission_taxi_fm2)) {
                    Text.PrintNow('WRECKED', 5000, 1) //"The vehicle is wrecked!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if ($.mission_taxi_fm2.isUpsidedown() && $.mission_taxi_fm2.isStopped()) {
                        Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
                if (!$.curley_bob_fm2.isInCar($.mission_taxi_fm2)) {
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
                if (!$.player.isInCar($.mission_taxi_fm2) && $.flag_player_got_car_message_fm2 == 0) {
                    Text.ClearPrints()
                    Text.PrintNow('IN_VEH', 5000, 1) //"Get back into the vehicle and get on with the mission"
                    $.radar_blip_car1_fm2 = Blip.AddForCar($.mission_taxi_fm2)
                    $.radar_blip_coord2_fm2.remove()
                    $.flag_player_got_car_message_fm2 = 1
                    $.blob_flag = 0
                }
                if ($.player.isInCar($.mission_taxi_fm2) && $.flag_player_got_car_message_fm2 == 1) {
                    $.radar_blip_coord2_fm2 = Blip.AddForCoord(1529.0, -827.0, -100.0)
                    $.radar_blip_coord2_fm2.changeDisplay(2 /* BLIP_ONLY */)
                    $.radar_blip_car1_fm2.remove()
                    $.flag_player_got_car_message_fm2 = 0
                    $.blob_flag = 1
                }
                if ($.mission_taxi_fm2.isStopped()) {
                    if ($.flag_car_has_just_stopped == 0) {
                        //GET_GAME_TIMER time_car_stopped_fm2
                        timerb = 0
                        $.flag_car_has_just_stopped = 1
                    }
                    //GET_GAME_TIMER current_time_fm2
                    //timer_difference = current_time_fm2 - time_car_stopped_fm2
                    //IF timer_difference > 10000
                    if (timerb > 10000) {
                        $.flag_taxi1_exit_car_fm2 = 1
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                } else {
                    $.flag_car_has_just_stopped = 0
                }
            }
            $.radar_blip_coord2_fm2.remove()
            // SCM GOTO → mission_jump2 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_jump2') // fallback: would break linear control flow
        }

        // *********If player does not have a taxi creates taxi for Curley Bob to get into**********
    }

    async function mission_jump3() {
        if (Car.IsDead($.car_fm2)) {
            Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
            $.flag_car_fm2_dead = 1
            // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
        } else {
            if ($.car_fm2.isUpsidedown() && $.car_fm2.isStopped()) {
                Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
        }

        if ($.car_fm2.locateStopped2D(906.9, -433.0, 6.0, 6.0, false /* FALSE */) && !$.car_fm2.isUpsidedown()) {
            $.curley_bob_fm2.setObjEnterCarAsPassenger($.car_fm2)
        } else {
            Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
            // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
        }

        //waiting for the character to get into the car

        while (!$.curley_bob_fm2.isInCar($.car_fm2)) {
            await asyncWait(0)
            if (Char.IsDead($.curley_bob_fm2)) {
                Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            } else {
                if (!$.curley_bob_fm2.isHealthGreater(99)) {
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
            if (Car.IsDead($.car_fm2)) {
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1) //The vehicle's wrecked!"
                    $.flag_car_fm2_dead = 1
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            } else {
                if ($.car_fm2.isUpsidedown() && $.car_fm2.isStopped()) {
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
        }

        $.radar_blip_ped1_fm2.remove()

        Text.PrintNow('FM2_2', 7000, 1) //Tail Curly Bob!"

        Hud.SwitchWidescreen(false /* OFF */)

        Camera.Restore()

        $.player.setControl(true /* on */)

        Game.SetPoliceIgnorePlayer($.player, false /* off */)

        $.radar_blip_car2_fm2 = Blip.AddForCar($.car_fm2)

        $.radar_blip_car2_fm2.changeDisplay(1 /* MARKER_ONLY */)

        $.car_fm2.setCruiseSpeed(30.0)

        $.car_fm2.gotoCoordinatesAccurate(1529.0, -827.0, -100.0)

        $.car_fm2.setDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */)

        $.car_fm2.setCruiseSpeed(20.0)

        StuckCarCheck.Add($.car_fm2, 5.0, 30000)

        Hud.DisplayCounterWithString($.spooked_counter, 1 /* COUNTER_DISPLAY_BAR */, 'FM2_16')

        timerb = 0

        timera = 0

        // Waiting for the car to get to the bottom of the dock area

        while (!$.car_fm2.locate2D(1529.0, -827.0, 3.0, 3.0, false /* FALSE */)) {
            await asyncWait(0)
            if ($.spooked_check == 0) {
                if (timerb > 1500) {
                    $.spooked_check = 1
                }
            }
            if (Car.IsDead($.car_fm2)) {
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    Text.PrintNow('WRECKED', 5000, 1) //The vehicle's wrecked!"
                    $.flag_car_fm2_dead = 1
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            } else {
                if (StuckCarCheck.IsCarStuck($.car_fm2)) {
                    $.spooked_counter = 100
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
                if ($.car_fm2.isUpsidedown() && $.car_fm2.isStopped()) {
                    $.spooked_counter = 100
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
            World.ClearArea(1529.0, -827.0, -100.0, 4.0, false /* FALSE */) // This should clear the area at the bottom of the docks
            if (Char.IsDead($.curley_bob_fm2)) {
                Text.PrintNow('FM2_9', 5000, 1) //"Curly's dead!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            } else {
                if ($.spooked_check == 1) {
                    if ($.player.locateAnyMeansChar3D($.curley_bob_fm2, 40.0, 40.0, 40.0, false /* FALSE */)) {
                        if ($.player.locateAnyMeansChar3D($.curley_bob_fm2, 30.0, 30.0, 30.0, false /* FALSE */)) {
                            if ($.player.locateAnyMeansChar3D($.curley_bob_fm2, 20.0, 20.0, 20.0, false /* FALSE */)) {
                                if ($.player.isInModel(127 /* CAR_MAFIA */)) {
                                    if (timera > 8) {
                                        ++$.spooked_counter
                                        timera = 0
                                    }
                                } else {
                                    if (timera > 16) {
                                        ++$.spooked_counter
                                        timera = 0
                                    }
                                }
                            } else {
                                if ($.player.isInModel(127 /* CAR_MAFIA */)) {
                                    if (timera > 16) {
                                        ++$.spooked_counter
                                        timera = 0
                                    }
                                } else {
                                    if (timera > 32) {
                                        ++$.spooked_counter
                                        timera = 0
                                    }
                                }
                            }
                        } else {
                            if ($.player.isInModel(127 /* CAR_MAFIA */)) {
                                if (timera > 32) {
                                    ++$.spooked_counter
                                    timera = 0
                                }
                            } else {
                                if (timera > 64) {
                                    ++$.spooked_counter
                                    timera = 0
                                }
                            }
                        }
                    } else {
                        if ($.player.isInModel(127 /* CAR_MAFIA */)) {
                            if (timera > 500) {
                                if ($.spooked_counter > 0) {
                                    --$.spooked_counter
                                }
                                timera = 0
                            }
                        } else {
                            if (timera > 250) {
                                if ($.spooked_counter > 0) {
                                    --$.spooked_counter
                                }
                                timera = 0
                            }
                        }
                    }
                }

                if ($.spooked_counter > 10) {
                    if ($.flag_player_had_warning1_fm2 == 0) {
                        Text.PrintNow('FM2_15', 5000, 1) //"Don't get too close or curly will suspect something!"
                        $.flag_player_had_warning1_fm2 = 1
                    }
                }

                if ($.spooked_counter == 100) {
                    Text.PrintNow('FM2_14', 5000, 1) //"You got too close and spooked Curly!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }

                if (!$.curley_bob_fm2.isInCar($.car_fm2)) {
                    $.spooked_counter = 100
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
                if ($.curley_bob_fm2.isInArea2D(1538.0, -741.0, 1304.0, -901.0, false /* FALSE */)) {
                    $.car_fm2.setDrivingStyle(1)
                    $.car_fm2.setCruiseSpeed(10.0)
                    $.flag_no_longer_mad = 1
                }
                if ($.flag_no_longer_mad == 0) {
                    if ($.player.locateAnyMeansChar2D($.curley_bob_fm2, 30.0, 30.0, false /* FALSE */)) {
                        $.car_fm2.setDrivingStyle(2 /* DRIVINGMODE_AVOIDCARS */)
                        $.car_fm2.setCruiseSpeed(25.0)
                    } else {
                        $.car_fm2.setDrivingStyle(1 /* DRIVINGMODE_SLOWDOWNFORCARS */)
                        $.car_fm2.setCruiseSpeed(20.0)
                    }
                }
            }
            if ($.car_fm2.isVisiblyDamaged()) {
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    $.spooked_counter = 100
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            }
            if ($.car_fm2.isStopped()) {
                if ($.flag_car_has_just_stopped == 0) {
                    $.time_car_stopped_fm2 = Clock.GetGameTimer()
                    $.flag_car_has_just_stopped = 1
                }
                $.current_time_fm2 = Clock.GetGameTimer()
                $.timer_difference = $.current_time_fm2 - $.time_car_stopped_fm2
                if ($.timer_difference > 15000) {
                    $.flag_taxi2_exit_car_fm2 = 1
                    $.spooked_counter = 100
                    Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                }
            } else {
                $.flag_car_has_just_stopped = 0
            }
        }

        $.radar_blip_car2_fm2.remove()

        StuckCarCheck.Remove($.car_fm2)

        // ********************Curley Bob gets out of the script controlled taxi********************

        if ($.flag_car_fm2_created == 1 && $.curley_bob_fm2.isInCar($.car_fm2)) {
            $.flag_taxi2_exit_car_fm2 = 1
        }

        if ($.flag_taxi2_exit_car_fm2 == 1) {
            $.curley_bob_fm2.setObjLeaveCar($.car_fm2)

            while ($.curley_bob_fm2.isInCar($.car_fm2)) {
                await asyncWait(0)
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if (!$.curley_bob_fm2.isHealthGreater(99)) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if (Car.IsDead($.car_fm2)) {
                    if (Char.IsDead($.curley_bob_fm2)) {
                        Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1) //The vehicle's wrecked!"
                        $.flag_car_fm2_dead = 1
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                } else {
                    if ($.car_fm2.isUpsidedown() && $.car_fm2.isStopped()) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
            }
            Hud.ClearCounter($.spooked_counter)
            if (!$.player.locateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 160.0, false /* FALSE */)) {
                Text.PrintNow('FM2_12', 5000, 1) //"You lost him!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }

            // Checks to see if the player is around the ramp and will fail the mission

            if ($.player.isInArea3D(1573.72, -876.49, 5.0, 1404.09, -1034.3, 30.0, false /* FALSE */)) {
                $.spooked_counter = 100
                Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
            // SCM GOTO → mission_jump4 (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_jump4') // fallback: would break linear control flow
        }

        // *****************Orders Curley Bob out of the taxi if the player is driving**************
    }

    async function mission_jump2() {
        if ($.flag_mission_taxi_fm2_created == 1 && $.curley_bob_fm2.isInCar($.mission_taxi_fm2)) {
            $.flag_taxi1_exit_car_fm2 = 1
        }

        if ($.flag_taxi1_exit_car_fm2 == 1) {
            $.curley_bob_fm2.setObjLeaveCar($.mission_taxi_fm2)
            while ($.curley_bob_fm2.isInCar($.mission_taxi_fm2)) {
                await asyncWait(0)
                if (Char.IsDead($.curley_bob_fm2)) {
                    Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                    // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                } else {
                    if (!$.curley_bob_fm2.isHealthGreater(99)) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
                if (Car.IsDead($.mission_taxi_fm2)) {
                    if (Char.IsDead($.curley_bob_fm2)) {
                        Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    } else {
                        Text.PrintNow('WRECKED', 5000, 1) //The vehicle's wrecked!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                } else {
                    if ($.mission_taxi_fm2.isUpsidedown() && $.mission_taxi_fm2.isStopped()) {
                        Text.PrintNow('FM2_7', 7000, 1) //"Something's spooked Curly, the meeting's off!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
            }
            if (!$.player.locateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 160.0, false /* FALSE */)) {
                Text.PrintNow('FM2_12', 5000, 1) //"You lost him!"
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
        }

        // ***********************Curley Bob has finally got to the docks***************************
    }

    async function mission_jump4() {
        Hud.SwitchWidescreen(true /* ON */)

        if ($.player.isInAnyCar()) {
            $.player.applyBrakesToCar(true /* ON */)
        }

        $.player.setControl(false /* OFF */)

        $.player.clearWantedLevel() // This might have to come out when this bit is an Alex cut-scene

        if (!Char.IsDead($.van_driver_fm2)) {
            $.van_driver_fm2.setCantBeDraggedOut(false /* FALSE */)
        }

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        World.ClearArea(1546.56, -834.79, 12.7, 1.0, true /* TRUE */)

        Camera.SetFixedPosition(1546.56, -834.79, 12.7, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(1545.5, -834.6, 12.79, 2 /* JUMP_CUT */)

        $.curley_bob_fm2.setObjRunToCoord(1532.0, -889.0)

        timerb = 0

        while (timerb < 1500) {
            await asyncWait(0)
            World.ClearArea(1532.0, -889.0, -100.0, 3.0, false /* FALSE */) // Clears area curly is running to.
            if (Char.IsDead($.curley_bob_fm2)) {
                Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                $.flag_curley_bob_fm2_dead = 1
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
        }

        if (Char.IsDead($.curley_bob_fm2)) {
            Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
            $.flag_curley_bob_fm2_dead = 1
            // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
        }

        // ****************************************START OF CUTSCENE TWO****************************

        $.breakout_timer_start = Clock.GetGameTimer()

        $.breakout_diff = 0

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0)
            if (Char.IsDead($.curley_bob_fm2)) {
                Text.PrintNow('FM2_9', 5000, 1) //"Curly Bob's dead!"
                $.flag_curley_bob_fm2_dead = 1
                // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
            }
            $.breakout_timer = Clock.GetGameTimer()
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start
        }

        $.player.makeSafeForCutscene()

        Camera.SetFadingColor(0, 0, 0)

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        Streaming.Switch(false /* OFF */)

        Streaming.LoadSpecialCharacter(3, $.miguel)
        Streaming.LoadSpecialCharacter(4, cat)
        Streaming.LoadSpecialModel(hier`cutobj01`, MIGUELH)
        Streaming.LoadSpecialModel(hier`cutobj02`, CATH)
        Streaming.LoadSpecialModel(hier`cutobj03`, CURLYH)
        Streaming.RequestModel(car`COLUMB`)

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        if (!Char.IsDead($.curley_bob_fm2)) {
            $.curley_bob_fm2.setIdle()
        }

        Streaming.LoadAllModelsNow()

        // Cutscene stuff

        while (
            !Streaming.HasSpecialCharacterLoaded(3) ||
            !Streaming.HasSpecialCharacterLoaded(4) ||
            !Streaming.HasModelLoaded(car`COLUMB`) ||
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(hier`cutobj03`)
        ) {
            await asyncWait(0)
        }

        // creates car

        $.baddie_car_fm2 = Car.Create(131 /* CAR_COLUMB */, 1542.9, -896.1975, 10.6)

        $.baddie_car_fm2.setHeading(90.0)

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE

        Cutscene.Load(s2_ctg2)

        Cutscene.SetOffset(1573.8866, -906.0611, 11.1)

        $.cs_curly = CutsceneObject.Create(ped`SPECIAL2`)

        $.cs_curly.setAnim(curly)

        $.cs_miguel = CutsceneObject.Create(ped`SPECIAL3`)

        $.cs_miguel.setAnim($.miguel)

        $.cs_catalina = CutsceneObject.Create(ped`SPECIAL4`)

        $.cs_catalina.setAnim(cat)

        $.cs_miguelhead = CutsceneHead.Create($.cs_miguel, hier`cutobj01`)

        $.cs_miguelhead.setAnim($.miguel)

        $.cs_catalinahead = CutsceneHead.Create($.cs_catalina, hier`cutobj02`)

        $.cs_catalinahead.setAnim(cat)

        $.cs_curlyhead = CutsceneHead.Create($.cs_curly, hier`cutobj03`)

        $.cs_curlyhead.setAnim(curly)

        World.ClearArea(898.6, -425.6, 13.9, 1.0, true /* TRUE */)

        //SET_PLAYER_COORDINATES player 898.6 -425.6 13.9  // Player is in a taxi so don't comment back in

        Camera.DoFade(1500, 1 /* FADE_IN */)

        $.curley_bob_fm2.delete()

        Streaming.Switch(true /* ON */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time <= 0) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_F', 10000, 1) //"Here comes our little friend. Mr. big mouth himself."

        while ($.cs_time < 3225) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_G', 10000, 1) //"Were you followed? You know what goes on here is our little secret."

        while ($.cs_time < 7047) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_H', 10000, 1) //"No..no, I wasn't followed, You got my stuff?"

        while ($.cs_time < 10272) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_I', 10000, 1) //"Here's your SPANK, squealer, now talk."

        while ($.cs_time < 13914) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_P', 10000, 1) //"OK, so the Leone's are fighting wars on two fronts."

        while ($.cs_time < 16721) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_Q', 10000, 1) //"They're in a turf war with the Triads with no sign of either side giving up."

        while ($.cs_time < 20483) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_R', 10000, 1) //"Meanwhile Loey Leone has stirred up some bad blood with the Forellis."

        while ($.cs_time < 24246) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_S', 10000, 1) //"Every day they're losing men and influence in the city."

        while ($.cs_time < 26993) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_T', 10000, 1) //"Salvatore is becoming dangerous and paranoid. He suspects everybody and everything."

        while ($.cs_time < 31770) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('FM2_U', 10000, 1) //"With loyalty like yours, what has he possibly got to worry about."

        while ($.cs_time < 35267) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('FM2_U')

        while ($.cs_time < 37000) {
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

        if ($.flag_car_fm2_dead == 0) {
            if (!Car.IsDead($.car_fm2)) {
                $.van_driver_fm2.delete()
                $.car_fm2.delete()
                $.flag_car_fm2_dead = 0
            }
        }

        $.baddie_car_fm2.delete()

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Camera.SetBehindPlayer()

        Streaming.UnloadSpecialCharacter(3)
        Streaming.UnloadSpecialCharacter(4)
        Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)

        // ******************************************END OF CUTSCENE TWO****************************

        // ********************************Kill Curley Bob Stuff************************************

        Hud.SwitchWidescreen(false /* OFF */)

        Camera.Restore()

        $.player.setControl(true /* ON */)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)

        $.curley_bob_fm2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1493.7, -886.6, -100.0)

        $.curley_bob_fm2.setHeading(90.0)

        $.curley_bob_fm2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 30000)

        $.curley_bob_fm2.setObjFleePlayerOnFootAlways($.player)

        $.radar_blip_ped2_fm2 = Blip.AddForChar($.curley_bob_fm2)

        Text.PrintNow('FM2_8', 7000, 1) //"Kill Curley Bob for his treachery!"

        while (!($.flag_curley_bob_dead_fm2 == 1)) {
            await asyncWait(0)
            if ($.flag_curley_bob_dead_fm2 == 0) {
                if (Char.IsDead($.curley_bob_fm2)) {
                    $.flag_curley_bob_dead_fm2 = 1
                } else {
                    if ($.player.locateAnyMeansChar3D($.curley_bob_fm2, 25.0, 25.0, 25.0, false /* FALSE */)) {
                        if ($.flag_curly_mad_fm2 == 0) {
                            $.curley_bob_fm2.setObjKillPlayerAnyMeans($.player)
                            $.flag_curly_mad_fm2 = 1
                        }
                    } else {
                        $.flag_curly_mad_fm2 = 0
                        $.curley_bob_fm2.setObjFleePlayerOnFootAlways($.player)
                    }

                    if (!$.curley_bob_fm2.isOnScreen() && !$.player.locateAnyMeansChar3D($.curley_bob_fm2, 160.0, 160.0, 80.0, false /* FALSE */)) {
                        Text.PrintNow('FM2_10', 5000, 1) //"Curly got away!"
                        // SCM GOTO → mission_frankie2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_frankie2_failed') // fallback: would break linear control flow
                    }
                }
            }
        }

        $.radar_blip_ped2_fm2.remove()
    }

    // SCM GOTO → mission_frankie2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_frankie2_passed') // fallback: would break linear control flow

    // Mission Frankie2 failed
}

async function mission_frankie2_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
    $.curley_bob_fm2.removeElegantly()
    return

    // mission Frankie2 passed
}

async function mission_frankie2_passed() {
    $.flag_frankie_mission2_passed = 1
    Stat.RegisterMissionPassed('FM2')
    Stat.PlayerMadeProgress(1)
    Text.PrintWithNumberBig('m_pass', 15000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(15000)
    $.player.clearWantedLevel()
    // START_NEW_SCRIPT frankie_mission2.1_loop
    // START_NEW_SCRIPT toni4_pager_loop

    if ($.flag_toni_mission5_passed == 0) {
        $.flag_frankie_switched_off = 1
        $.frankie_contact_blip.remove()
    }

    return

    // mission cleanup
}

async function mission_cleanup_frankie2() {
    $.flag_player_on_mission = 0
    $.flag_player_on_frankie_mission = 0

    if ($.flag_car_fm2_dead == 0) {
        if (!Car.IsDead($.car_fm2)) {
            $.car_fm2.changeLock(1 /* CARLOCK_UNLOCKED */)
            $.car_fm2.setOnlyDamagedByPlayer(false /* FALSE */)
        }
    }
    Streaming.MarkModelAsNoLongerNeeded(car`TAXI`)
    Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`)
    Streaming.MarkModelAsNoLongerNeeded(ped`TAXI_DRIVER`)
    $.radar_blip_club_fm2.remove()
    $.radar_blip_ped1_fm2.remove()
    $.radar_blip_coord2_fm2.remove()
    $.radar_blip_car1_fm2.remove()
    $.radar_blip_car2_fm2.remove()
    $.radar_blip_ped2_fm2.remove()
    Zone.SetPedInfo('PORT_E', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Zone.SetPedInfo('PORT_E', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Zone.SetCarInfo('PORT_E', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Zone.SetCarInfo('PORT_E', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    Hud.ClearCounter($.spooked_counter)
    Mission.Finish()
    return
}

export async function frank2() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***********************************Frankie Mission 2*************************************
    // **********************************"Cuttin' The Grass"************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME frank2

    // Mission start stuff

    // SCM GOSUB mission_start_frankie2
    await mission_start_frankie2()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_frankie2_failed
        await mission_frankie2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_frankie2
    await mission_cleanup_frankie2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT curley_bob_fm2

    // VAR_INT hours_fm2

    // VAR_INT minutes_fm2

    // VAR_INT hours_stuff_happen_fm2

    // VAR_INT mission_taxi_fm2

    // VAR_INT radar_blip_coord2_fm2

    // VAR_INT radar_blip_coord3_fm2

    // VAR_INT car_fm2

    // VAR_INT van_driver_fm2

    // VAR_INT radar_blip_coord1_fm2

    // VAR_INT radar_blip_ped1_fm2

    // VAR_INT radar_blip_car1_fm2

    // VAR_INT columbian_fm2

    // VAR_INT radar_blip_ped2_fm2

    // VAR_INT flag_player_too_far_message_fm2

    // VAR_INT minutes_stuff_happen_fm2

    // VAR_INT flag_player_got_car_message_fm2

    // VAR_INT flag_player_got_cops_message_fm2

    // VAR_INT time_car_stopped_fm2

    // VAR_INT current_time_fm2

    // VAR_INT flag_car_has_just_stopped

    // VAR_INT timer_difference

    // VAR_INT flag_taxi1_exit_car_fm2

    // VAR_INT flag_taxi2_exit_car_fm2

    // VAR_INT flag_car_fm2_created

    // VAR_INT flag_mission_taxi_fm2_created

    // VAR_INT flag_no_longer_mad

    // VAR_INT flag_curley_at_point1_fm2

    // VAR_INT flag_curley_at_point2_fm2

    // VAR_INT flag_curley_bob_fm2_dead

    // VAR_INT flag_bob_in_position_one

    // VAR_INT flag_bob_in_position_two

    // VAR_INT flag_bob_in_position_three

    // VAR_INT baddie_car_fm2

    // VAR_INT radar_blip_car2_fm2

    // VAR_INT flag_curley_bob_dead_fm2

    // VAR_INT car_health_fm2

    // VAR_INT flag_car_fm2_dead

    // VAR_FLOAT car_fm2_x

    // VAR_FLOAT car_fm2_y

    // VAR_FLOAT car_fm2_z

    // VAR_INT radar_blip_club_fm2

    // VAR_INT flag_curly_mad_fm2

    // VAR_INT spooked_counter

    // VAR_INT spooked_check

    // VAR_INT flag_player_had_warning1_fm2

    // VAR_INT flag_player_had_warning2_fm2

    // VAR_INT flag_curly_moved_fm2

    // ****************************************Start Mission************************************
}
