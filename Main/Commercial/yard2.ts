// Generated from Main/Commercial/yard2.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_yd2() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME yard2
    $.flag_player_on_mission = 1
    $.flag_player_on_yardie_mission = 1
    await asyncWait(0)

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_yd2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  //SWITCH_STREAMING OFF

  PRINT_BIG ( YD2 ) 15000 2 //"Yardie Mission 1"

  TIMERA = 0

  WHILE TIMERA < 1500
  WAIT 0

  ENDWHILE
  */

    // ******************************************CUTSCENE***************************************

    {
        World.SetPedDensityMultiplier(0.0)
        Game.SetPoliceIgnorePlayer($.player, true /* on */)

        //WHILE NOT HAS_MODEL_LOADED cut_obj1
        //	WAIT 0

        //ENDWHILE

        Cutscene.Load(YD_PH2)
        Cutscene.SetOffset(121.0, -272.3, 15.25)
        World.ClearAreaOfChars(100.5, -250.0, 0.0, 130.5, -290.0, 25.0)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim($.player)

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        //CLEAR_AREA 1219.5 -321.1 27.5 1.0 TRUE
        //SET_PLAYER_COORDINATES player 1219.5 -321.1 26.4

        //SET_PLAYER_HEADING player 180.0

        Camera.DoFade(1500, 1 /* FADE_IN */)

        //SWITCH_STREAMING OFF

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('YD2_A', 10000, 1)

        while ($.cs_time < 4581) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD2_A1', 10000, 1)

        while ($.cs_time < 7135) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD2_B', 10000, 1)

        while ($.cs_time < 10431) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD2_B1', 10000, 1)
        /*
  WHILE cs_time < 13770
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( YD2_D ) 10000 1

  WHILE cs_time < 18676
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( YD2_D1 ) 10000 1


  WHILE cs_time < 24139
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( DIAB2_G ) 10000 1

  WHILE cs_time < 28919
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( DIAB2_H ) 10000 1
  */

        while ($.cs_time < 13900) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        while (!Cutscene.HasFinished()) {
            await asyncWait(0)
        }

        Streaming.Switch(true /* ON */)
        Text.ClearPrints()
        Cutscene.Clear()
        //SET_CAMERA_IN_FRONT_OF_PLAYER
    }

    await asyncWait(0)

    Streaming.RequestModel(car`PERENNIAL`)
    Streaming.RequestModel(ped`GANG_YARDIE_A`)
    Streaming.RequestModel(ped`GANG_YARDIE_B`)

    while (!Streaming.HasModelLoaded(car`PERENNIAL`) || !Streaming.HasModelLoaded(ped`GANG_YARDIE_A`) || !Streaming.HasModelLoaded(ped`GANG_YARDIE_B`)) {
        await asyncWait(0)
    }

    //PRINT_BIG ( YD2 ) 15000 2

    $.timer_dif_yd2 = 0
    $.flag_out_of_car_message = 0
    $.flag_upsidedown = 0
    flag_chap_1_n_v = 0
    flag_chap_2_n_v = 0
    $.flag_clear = 0
    $.body_count_yd2 = 0
    $.driveby_total_1 = 0
    $.driveby_total_2 = 0

    Player.ResetNumOfModelsKilled()

    //------------COORDS-----------------------

    $.driveby_x = 940.0
    $.driveby_y = -220.0

    $.yd2turf_x = 231.0
    $.yd2turf_y = -531.0

    //------------------CUTSCENE-------------------------------

    $.wanted_yd2 = $.player.storeWantedLevel()
    $.player.clearWantedLevel()

    $.player.setControl(false /* off */)
    $.player_yd2 = $.player.getChar()

    Camera.SetFixedPosition(117.3, -266.3, 17.0, 0.0, 0.0, 0.0)
    Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */)
    Hud.SwitchWidescreen(true /* on */)

    //clear traffic--------------------------

    // SETUP_ZONE_CAR_INFO STADIUM DAY   (10) (0 0 0) 0 0 0 0 20 300 300 300 0 0 0
    // SETUP_ZONE_CAR_INFO STADIUM NIGHT ( 7) (0 0 0) 0 0 0 0 10 300 300 300 0 0 0

    World.SetCarDensityMultiplier(0.0)

    /*
  PRINT_NOW ( YD2_A ) 4000 1//I need to see if you're capable of doing my dirty work
  WAIT 4000

  PRINT_NOW ( YD2_B ) 4000 1//A couple of my boys will be there to meet you and take you for a ride.
  WAIT 4000
  */
    // Mission stuff goes here

    //DO_FADE 1500 FADE_OUT
    //WAIT 1500

    World.ClearArea(4.2, -310.1, 16.0, 40.0, true /* true */)
    World.ClearArea(97.0, -285.5, 16.0, 50.0, true /* true */)

    Camera.DoFade(1500, 1 /* FADE_IN */)
    await asyncWait(1500)

    $.gang_car_yd2 = Car.Create(87 /* CAR_PERENNIAL */, 4.2, -310.1, 16.0)
    $.gang_car_yd2.setHeading(0.0)
    $.gang_car_yd2.setOnlyDamagedByPlayer(true /* True */)

    $.chaperone_1 = Char.CreateInsideCar($.gang_car_yd2, 4 /* PEDTYPE_CIVMALE */, ped`GANG_YARDIE_A`)
    $.chaperone_2 = Char.CreateAsPassenger($.gang_car_yd2, 4 /* PEDTYPE_CIVMALE */, ped`GANG_YARDIE_B`, 0)

    $.gang_car_yd2.gotoCoordinates(113.0, -272.0, 16.0)
    $.gang_car_yd2.setCruiseSpeed(25.0)
    $.gang_car_yd2.setDrivingStyle(3)

    if (!Car.IsDead($.gang_car_yd2)) {
        Camera.PointAtCar($.gang_car_yd2, 15 /* FIXED */, 1 /* INTERPOLATION */)
    }

    while (!$.gang_car_yd2.locateStopped2D(113.0, -272.0, 5.0, 5.0, false /* false */)) {
        await asyncWait(0)
        if (Car.IsDead($.gang_car_yd2)) {
            // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
        }
        if ($.flag_clear == 0) {
            World.ClearArea(115.0, -272.0, 16.0, 10.0, true /* true */)
            $.flag_clear = 1
        }
    }

    $.player_yd2.turnToFaceCoord(115.0, -272.0, 16.0)

    if (!Car.IsDead($.gang_car_yd2)) {
        $.gang_car_yd2.setIdle()
        if (!Char.IsDead($.chaperone_2) && !Char.IsDead($.chaperone_1)) {
            $.chaperone_1.setObjLeaveCar($.gang_car_yd2)
            $.chaperone_2.setObjLeaveCar($.gang_car_yd2)
        }
    }

    if (!Char.IsDead($.chaperone_2) && !Char.IsDead($.chaperone_1) && !Car.IsDead($.gang_car_yd2)) {
        while ($.chaperone_2.isInCar($.gang_car_yd2) || $.chaperone_1.isInCar($.gang_car_yd2)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_2) || Char.IsDead($.chaperone_1) || Car.IsDead($.gang_car_yd2)) {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
        }
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    if (!Char.IsDead($.chaperone_2)) {
        Camera.PointAtChar($.chaperone_2, 15 /* FIXED */, 1 /* INTERPOLATION */)
    }

    if (!Char.IsDead($.chaperone_1) && !Char.IsDead($.player_yd2)) {
        $.chaperone_1.lookAtCharAlways($.player_yd2)
    }
}

async function plinky_yd2() {
    await asyncWait(0)
    ;[$.y2_x, $.y2_y, $.y2_z] = $.player.getCoordinates()

    if (!Char.IsDead($.chaperone_2) && !Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setHealth(100)
        $.chaperone_2.setHealth(100)
        //y2_x = y2_x + 1.0
        $.y2_y = $.y2_y - 1.0
        $.chaperone_2.setObjGotoCoordOnFoot($.y2_x, $.y2_y)
        $.chaperone_1.setObjWaitOnFoot()
        //GET_CHAR_COORDINATES chaperone_2 yd2_x yd2_y yd2_z
        $.chaperone_2.lookAtCharAlways($.player_yd2)
        $.player_yd2.lookAtCharAlways($.chaperone_2)
        if (!$.chaperone_2.locateOnFoot2D($.y2_x, $.y2_y, 2.0, 2.0, false /* false */)) {
            // SCM GOTO → plinky_yd2 (not lowered; manual jump required)
            throw new Error('unresolved GOTO plinky_yd2') // fallback: would break linear control flow
        }
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.turnToFacePlayer($.player)
        $.player_yd2.turnToFaceChar($.chaperone_2)
        $.chaperone_2.setObjWaitOnFoot()
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    Audio.LoadMissionAudio(YD2_A)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_C', 10000, 1) //We're going for a little ride into Hepburn Heights, Whack us some Diablo's.
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Text.ClearPrints()

    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setHealth(100)
    }
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.setHealth(100)
    }

    Audio.LoadMissionAudio(YD2_B)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_D', 10000, 1) //You do the driving and shooting. We'll make sure you don't get cold feet
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Text.ClearPrints()

    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setHealth(100)
    }
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.setHealth(100)
    }

    Audio.LoadMissionAudio(YD2_C)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_CC', 10000, 1) //Here, you'll need a 'piece'
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → poodle (not lowered; manual jump required)
            throw new Error('unresolved GOTO poodle') // fallback: would break linear control flow
        }
    }
    Text.ClearPrints()
}

async function poodle() {
    $.player_yd2.stopLooking()
    //SET_CHAR_OBJ_NO_OBJ player_yd2
    //SET_PLAYER_CONTROL player on

    $.player.giveWeapon(3 /* WEAPONTYPE_UZI */, 150)
    await asyncWait(1000)
    $.player.setCurrentWeapon(3 /* WEAPONTYPE_UZI */)

    while (!$.player.isCurrentWeapon(3 /* WEAPONTYPE_UZI */)) {
        await asyncWait(0)
    }

    //SET_PLAYER_CONTROL player off

    Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */)

    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setHealth(100)
        $.chaperone_1.stopLooking()
        if (!Car.IsDead($.gang_car_yd2)) {
            $.chaperone_1.setObjEnterCarAsPassenger($.gang_car_yd2)
        }
    }
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.setHealth(100)
        $.chaperone_2.lookAtCharAlways($.player_yd2)
    }

    Audio.SetRadioChannel(2 /* JAH_RADIO */, 0)

    if (!Car.IsDead($.gang_car_yd2)) {
        $.player_yd2.setObjEnterCarAsDriver($.gang_car_yd2)
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    while (!$.player_yd2.isInCar($.gang_car_yd2)) {
        await asyncWait(0)
        if (Car.IsDead($.gang_car_yd2)) {
            // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
        }
        if (!Char.IsDead($.chaperone_1)) {
            $.chaperone_1.setHealth(100)
        }
        if (!Char.IsDead($.chaperone_2)) {
            $.chaperone_2.setHealth(100)
        }
    }

    if (!Car.IsDead($.gang_car_yd2) && !Char.IsDead($.chaperone_2) && !Char.IsDead($.chaperone_1)) {
        $.chaperone_1.stopLooking()
        $.chaperone_2.stopLooking()
        $.chaperone_2.setObjEnterCarAsPassenger($.gang_car_yd2)
        while (!$.chaperone_2.isInCar($.gang_car_yd2) || !$.chaperone_1.isInCar($.gang_car_yd2)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_2) || Char.IsDead($.chaperone_1) || Car.IsDead($.gang_car_yd2)) {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
            if (!Char.IsDead($.chaperone_1)) {
                $.chaperone_1.setHealth(100)
            }
            if (!Char.IsDead($.chaperone_2)) {
                $.chaperone_2.setHealth(100)
            }
        }
        //LOCK_CAR_DOORS gang_car_yd2 CARLOCK_LOCKED
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    if (!Car.IsDead($.gang_car_yd2)) {
        $.gang_car_yd2.setOnlyDamagedByPlayer(false /* false */)
        //LOCK_CAR_DOORS gang_car_yd2 CARLOCK_LOCKED
    }

    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setCantBeDraggedOut(true /* TRUE */)
        $.chaperone_1.setStaysInCurrentLevel(false /* FALSE */)
    }
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.setCantBeDraggedOut(true /* TRUE */)
        $.chaperone_2.setStaysInCurrentLevel(false /* FALSE */)
    }

    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    $.player.setControl(true /* on */)

    Audio.LoadMissionAudio(YD2_C1)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
    }
    Audio.PlayMissionAudio()
    Text.PrintSoon('YD2_E', 4000, 1) //Let's drive!!
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
    }

    $.blip_driveby_yd2 = Blip.AddForCoord($.driveby_x, $.driveby_y, -100.0)

    World.SetPedDensityMultiplier(1.0)
    Game.SetPoliceIgnorePlayer($.player, false /* off */)

    //----reset traffic density--------------------------

    World.SetCarDensityMultiplier(1.0)

    //---------------------SET PED DENSITIES----------------------------------------------------

    Zone.SetPedInfo('TOWERS', 1 /* DAY */, 15, 0, 0, 700, 0, 0, 0, 0, 20)
    Zone.SetPedInfo('TOWERS', 0 /* NIGHT */, 10, 0, 0, 800, 0, 0, 0, 0, 10)

    //-----------------------GETTING TO THE HIT-------------------------------------------------

    $.player.alterWantedLevel($.wanted_yd2)
}

async function getting_there() {
    if (!Car.IsDead($.gang_car_yd2)) {
        while (!$.player.isInZone('TOWERS')) {
            await asyncWait(0)
            if (!Car.IsDead($.gang_car_yd2)) {
                if ($.gang_car_yd2.isUpsidedown() && $.gang_car_yd2.isStopped()) {
                    $.flag_upsidedown = 1
                    // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                }
                if (!$.gang_car_yd2.isHealthGreater(250)) {
                    if (
                        !$.gang_car_yd2.locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, false /* false */) &&
                        !$.gang_car_yd2.locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, false /* false */)
                    ) {
                        $.flag_upsidedown = 1
                        // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                    }
                }
                if (!$.player.isInCar($.gang_car_yd2)) {
                    $.flag_upsidedown = 2
                    // SCM GOSUB player_out_of_car
                    await player_out_of_car()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    if (!Car.IsDead($.gang_car_yd2)) {
                        if (!$.player.isInCar($.gang_car_yd2)) {
                            $.flag_upsidedown = 2
                            // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                        }
                    } else {
                        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
                    }
                    $.gang_car_yd2.lockDoors(2 /* CARLOCK_LOCKED */)
                }
            } else {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
        }
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    Audio.LoadMissionAudio(YD2_F)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_G1', 2500, 1) //Hepburn Heights -Diablo turf.
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
    }

    Audio.LoadMissionAudio(YD2_G)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
    }
    Audio.PlayMissionAudio()
    Text.PrintSoon('YD2_G2', 2500, 1) //"Whack us five Diablos, but remember; you don't leave this car!"
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
    }

    //------------------------------THE HIT-----------------------------------------------------------------

    $.blip_driveby_yd2.remove()
    Hud.DisplayCounterWithString($.body_count_yd2, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS)

    while ($.body_count_yd2 < 10) {
        await asyncWait(0)
        if (!Car.IsDead($.gang_car_yd2)) {
            if ($.gang_car_yd2.isUpsidedown() && $.gang_car_yd2.isStopped()) {
                $.flag_upsidedown = 1
                // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
            }
            if (!$.gang_car_yd2.isHealthGreater(250)) {
                if (
                    !$.gang_car_yd2.locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, false /* false */) &&
                    !$.gang_car_yd2.locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, false /* false */)
                ) {
                    $.flag_upsidedown = 1
                    // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                }
            }
            if (!$.player.isInCar($.gang_car_yd2)) {
                // SCM GOSUB player_out_of_car
                await player_out_of_car()
                // fallback if label was not emitted as async function: no-op continues linearly
                if (!Car.IsDead($.gang_car_yd2)) {
                    if (!$.player.isInCar($.gang_car_yd2)) {
                        $.flag_upsidedown = 2
                        // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                    }
                } else {
                    // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
                }
            }
        } else {
            // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
        }
        $.driveby_total_1 = Player.GetNumOfModelsKilled(ped`GANG_DIABLO_A`)
        $.driveby_total_2 = Player.GetNumOfModelsKilled(ped`GANG_DIABLO_B`)
        $.body_count_yd2 = $.driveby_total_1 + $.driveby_total_2
        /*
    IF body_count_yd2 > 1
    SET_GANG_PLAYER_ATTITUDE GANG_DIABLO HATES player
    SET_GANG_WEAPONS GANG_DIABLO WEAPONTYPE_BASEBALLBAT WEAPONTYPE_UZI
    ELSE
    SET_GANG_PLAYER_ATTITUDE GANG_DIABLO NEUTRAL player
    ENDIF
    */
    }

    //------------------------------------BACK TO YARDIE TURF-------------------------------------------------------

    Audio.LoadMissionAudio(YD2_H)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_H', 2500, 1) //"OK, Get us back to Yardie turf, GO GO GO!!"
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
    }

    Hud.ClearCounter($.body_count_yd2)
}

async function back_to_yardie_turf() {
    $.blip_driveby_yd2 = Blip.AddForCoord($.yd2turf_x, $.yd2turf_y, 26.0)

    if (!Car.IsDead($.gang_car_yd2)) {
        while (!$.gang_car_yd2.locateStopped3D($.yd2turf_x, $.yd2turf_y, 26.0, 5.0, 5.0, 5.0, true /* true */)) {
            await asyncWait(0)
            if (!Car.IsDead($.gang_car_yd2)) {
                if ($.gang_car_yd2.isUpsidedown() && $.gang_car_yd2.isStopped()) {
                    $.flag_upsidedown = 1
                    // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                }
                if (!$.gang_car_yd2.isHealthGreater(250)) {
                    if (
                        !$.gang_car_yd2.locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, false /* false */) &&
                        !$.gang_car_yd2.locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, false /* false */)
                    ) {
                        $.flag_upsidedown = 1
                        // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                    }
                }
                if (!$.player.isInCar($.gang_car_yd2)) {
                    // SCM GOSUB player_out_of_car
                    await player_out_of_car()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    if (!Car.IsDead($.gang_car_yd2)) {
                        if (!$.player.isInCar($.gang_car_yd2)) {
                            $.flag_upsidedown = 2
                            // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                            throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                        }
                    } else {
                        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
                    }
                }
            } else {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
        }
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }
    /*
  PRINT_NOW (YD2_I) 4000 1//"OK, stop and drop us off."

  //REMOVE_BLIP blip_driveby_yd2

  IF NOT IS_CAR_DEAD gang_car_yd2
  WHILE NOT IS_CAR_STOPPED_IN_AREA_2D gang_car_yd2 yd2turf_x yd2turf_y 5.0 5.0 true

  WAIT 0
  IF NOT IS_CAR_DEAD gang_car_yd2
  IF NOT LOCATE_CAR_2D gang_car_yd2 yd2turf_x yd2turf_y 30.0 30.0 false
  PRINT_SOON (YD2_J) 4000 1//HEY! Where you going? Get us back to our turf!
  GOTO back_to_yardie_turf
  ENDIF
  IF IS_CAR_UPSIDEDOWN gang_car_yd2
  AND IS_CAR_STOPPED gang_car_yd2
  flag_upsidedown = 1
  GOTO mission_yd2_failed
  ENDIF
  IF NOT IS_CAR_HEALTH_GREATER gang_car_yd2 50
  flag_upsidedown = 1
  GOTO mission_yd2_failed
  ENDIF
  IF NOT IS_PLAYER_IN_CAR player gang_car_yd2
  GOSUB player_out_of_car
  IF NOT IS_CAR_DEAD gang_car_yd2
  IF NOT IS_PLAYER_IN_CAR player gang_car_yd2
  flag_upsidedown = 2
  GOTO mission_yd2_failed
  ENDIF
  ELSE
  GOTO mission_yd2_failed_assert
  ENDIF
  ENDIF
  ELSE
  GOTO mission_yd2_failed_assert
  ENDIF

  ENDWHILE
  ELSE
  GOTO mission_yd2_failed_assert
  ENDIF
  */

    $.player.setControl(false /* off */)

    if (!Char.IsDead($.chaperone_1) && !Char.IsDead($.chaperone_2) && !Car.IsDead($.gang_car_yd2)) {
        $.gang_car_yd2.setHealth(850)
        $.chaperone_1.setObjLeaveCar($.gang_car_yd2)
        $.chaperone_2.setObjLeaveCar($.gang_car_yd2)
    } else {
        // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
    }

    Audio.LoadMissionAudio(YD2_OK)
    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
    }
    Audio.PlayMissionAudio()
    Text.PrintNow('YD2_L', 4000, 1) //"You did good Reaper Man!"
    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
    }

    $.player.setControl(true /* on */)

    // SCM GOTO → mission_yd2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_yd2_passed') // fallback: would break linear control flow

    // Mission Yardie2 failed
}

async function mission_yd2_failed() {
    if (!Char.IsDead($.chaperone_1) && !Car.IsDead($.gang_car_yd2)) {
        $.chaperone_1.setObjLeaveCar($.gang_car_yd2)
    }
    if (!Char.IsDead($.chaperone_2) && !Car.IsDead($.gang_car_yd2)) {
        $.chaperone_2.setObjLeaveCar($.gang_car_yd2)
    }

    if ($.flag_upsidedown == 1) {
        Audio.LoadMissionAudio(YD2_D)
        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
        }
        Audio.PlayMissionAudio()
        Text.PrintNow('YD2_M', 4000, 1) //"He's wrecked my car!! Waste him!!"
    }

    if ($.flag_upsidedown == 2) {
        Audio.LoadMissionAudio(YD2_E)
        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0)
        }
        Audio.PlayMissionAudio()
        Text.PrintNow('YD2_F', 4000, 1) //"He's bailing out on us!"
    }

    if (!Char.IsDead($.chaperone_1) && !Car.IsDead($.gang_car_yd2)) {
        while ($.chaperone_1.isInCar($.gang_car_yd2)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_1)) {
                // SCM GOTO → boddle (not lowered; manual jump required)
                throw new Error('unresolved GOTO boddle') // fallback: would break linear control flow
            }
            if (Car.IsDead($.gang_car_yd2)) {
                // SCM GOTO → boddle (not lowered; manual jump required)
                throw new Error('unresolved GOTO boddle') // fallback: would break linear control flow
            }
        }
    }
}

async function boddle() {
    if (!Char.IsDead($.chaperone_2) && !Car.IsDead($.gang_car_yd2)) {
        while ($.chaperone_2.isInCar($.gang_car_yd2)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_2)) {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
            if (Car.IsDead($.gang_car_yd2)) {
                // SCM GOTO → mission_yd2_failed_assert (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd2_failed_assert') // fallback: would break linear control flow
            }
        }
    }

    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10)
        while (!$.chaperone_1.isCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_1)) {
                // SCM GOTO → oink (not lowered; manual jump required)
                throw new Error('unresolved GOTO oink') // fallback: would break linear control flow
            }
        }
        if (!Char.IsDead($.chaperone_1)) {
            $.chaperone_1.turnToFacePlayer($.player)
            if ($.player.isInZone('TOWERS')) {
                $.chaperone_1.setThreatSearch(9 /* THREAT_GANG_DIABLO */)
            }
            $.chaperone_1.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }
    }
}

async function oink() {
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.giveWeapon(3 /* WEAPONTYPE_UZI */, 30)
        while (!$.chaperone_2.isCurrentWeapon(3 /* WEAPONTYPE_UZI */)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_2)) {
                // SCM GOTO → poink (not lowered; manual jump required)
                throw new Error('unresolved GOTO poink') // fallback: would break linear control flow
            }
        }
        if (!Char.IsDead($.chaperone_2)) {
            $.chaperone_2.turnToFacePlayer($.player)
            if ($.player.isInZone('TOWERS')) {
                $.chaperone_2.setThreatSearch(9 /* THREAT_GANG_DIABLO */)
            }
            $.chaperone_2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        }
    }
}

async function poink() {
    /*
  //Yardies chase player off!!

  WHILE NOT IS_PLAYER_DEAD player
  WAIT 0
  IF NOT IS_CHAR_DEAD	chaperone_1
  GET_CHAR_COORDINATES chaperone_1 chap_1_x chap_1_y chap_1_z
  IF NOT LOCATE_PLAYER_ANY_MEANS_2D player chap_1_x chap_1_y 30.0 30.0 false
  MARK_CHAR_AS_NO_LONGER_NEEDED chaperone_1
  flag_chap_1_n&v = 1
  ENDIF
  ELSE
  flag_chap_1_n&v = 1
  ENDIF
  IF NOT IS_CHAR_DEAD	chaperone_2
  GET_CHAR_COORDINATES chaperone_2 chap_2_x chap_2_y chap_2_z
  IF NOT LOCATE_PLAYER_ANY_MEANS_2D player chap_2_x chap_2_y 30.0 30.0 false
  MARK_CHAR_AS_NO_LONGER_NEEDED chaperone_2
  flag_chap_2_n&v = 1
  ENDIF
  ELSE
  flag_chap_2_n&v = 1
  ENDIF
  IF flag_chap_1_n&v = 1
  AND flag_chap_2_n&v = 1
  GOTO mission_yd2_failed_assert
  ENDIF

  ENDWHILE
  */
}

async function mission_yd2_failed_assert() {
    Text.PrintBig('M_FAIL', 2000, 1)

    return

    // mission yd2 passed
}

async function mission_yd2_passed() {
    $.flag_yardie_mission2_passed = 1

    if (!Char.IsDead($.chaperone_1) && !Char.IsDead($.chaperone_2) && !Car.IsDead($.gang_car_yd2)) {
        while ($.chaperone_1.isInCar($.gang_car_yd2) || $.chaperone_2.isInCar($.gang_car_yd2)) {
            await asyncWait(0)
            if (Char.IsDead($.chaperone_1) || Char.IsDead($.chaperone_2) || Car.IsDead($.gang_car_yd2)) {
                // SCM GOTO → filby (not lowered; manual jump required)
                throw new Error('unresolved GOTO filby') // fallback: would break linear control flow
            }
        }
    } else {
        // SCM GOTO → filby (not lowered; manual jump required)
        throw new Error('unresolved GOTO filby') // fallback: would break linear control flow
    }
}

async function filby() {
    if (!Char.IsDead($.chaperone_1)) {
        $.chaperone_1.setObjFleeOnFootTillSafe()
    }
    if (!Char.IsDead($.chaperone_2)) {
        $.chaperone_2.setObjFleeOnFootTillSafe()
    }

    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.clearWantedLevel()
    $.player.addScore(10000)
    Stat.RegisterMissionPassed(YD2)
    Stat.PlayerMadeProgress(1)
    Game.SetThreatForPedType(9 /* PEDTYPE_GANG_DIABLO */, 0 /* THREAT_PLAYER1 */)
    // START_NEW_SCRIPT yardie_mission3_loop
    return

    // mission cleanup
}

async function mission_cleanup_yd2() {
    $.blip_driveby_yd2.remove()

    $.flag_player_on_mission = 0
    $.flag_player_on_yardie_mission = 0
    Hud.ClearCounter($.body_count_yd2)
    $.blip_driveby_yd2.remove()
    //SET_PLAYER_CONTROL player on

    Hud.SwitchWidescreen(false /* off */)
    Camera.RestoreJumpcut()
    if (!Car.IsDead($.gang_car_yd2)) {
        $.gang_car_yd2.lockDoors(1 /* CARLOCK_UNLOCKED */)
    }
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_B`)

    Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`)

    //------------RESTORE PED DENSITIES---------------------------------------

    Zone.SetPedInfo('TOWERS', 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 20)
    Zone.SetPedInfo('TOWERS', 0 /* NIGHT */, 10, 0, 0, 500, 0, 0, 0, 0, 10)

    Mission.Finish()
    return

    //-----------------------------GOSUBS----------------------------------------------
}

async function player_out_of_car() {
    if (!Car.IsDead($.gang_car_yd2)) {
        $.gang_car_yd2.lockDoors(1 /* CARLOCK_UNLOCKED */)
    }
    while ($.timer_dif_yd2 < 7500) {
        await asyncWait(0)
        if (!Car.IsDead($.gang_car_yd2)) {
            if (!$.gang_car_yd2.isHealthGreater(250)) {
                if (
                    !$.gang_car_yd2.locate3D(379.0, -493.7, 26.2, 15.0, 15.0, 15.0, false /* false */) &&
                    !$.gang_car_yd2.locate3D(925.4, -358.7, 10.8, 15.0, 15.0, 15.0, false /* false */)
                ) {
                    $.flag_upsidedown = 1
                    // SCM GOTO → mission_yd2_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_yd2_failed') // fallback: would break linear control flow
                }
            }
            if ($.flag_out_of_car_message == 0) {
                Audio.LoadMissionAudio(YD2_ASS)
                while (!Audio.HasMissionAudioLoaded()) {
                    await asyncWait(0)
                }
                Audio.PlayMissionAudio()
                Text.PrintNow('YD2_N', 3000, 1) //you got five seconds to get back in this car.
                $.flag_out_of_car_message = 1
                $.timer_start_yd2 = Clock.GetGameTimer()
            }
            $.timer_now_yd2 = Clock.GetGameTimer()
            $.timer_dif_yd2 = $.timer_now_yd2 - $.timer_start_yd2
            if (!Car.IsDead($.gang_car_yd2)) {
                if ($.player.isInCar($.gang_car_yd2)) {
                    $.flag_out_of_car_message = 0
                    return
                }
            }
        }
    }

    $.gang_car_yd2.lockDoors(2 /* CARLOCK_LOCKED */)

    return
}

export async function yard2() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************YARDIE MISSION 2********************************
    // *****************************************************************************************
    // ********************************************'UZI RIDER'**********************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_yd2
    await mission_start_yd2()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_yd2_failed
        await mission_yd2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_yd2
    await mission_cleanup_yd2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT gang_car_yd2

    // VAR_INT chaperone_1 chaperone_2

    // VAR_INT body_count_yd2

    // VAR_INT player_yd2 wanted_yd2 flag_clear

    // VAR_INT blip_driveby_yd2

    // VAR_INT flag_upsidedown flag_chap_1_n&v flag_chap_2_n&v flag_out_of_car_message

    // VAR_INT driveby_total_1 driveby_total_2
    // VAR_INT timer_dif_yd2 timer_start_yd2 timer_now_yd2

    // VAR_FLOAT driveby_x driveby_y

    // VAR_FLOAT yd2turf_x yd2turf_y

    // VAR_FLOAT y2_x y2_y y2_z
    //VAR_FLOAT yd2_x yd2_y yd2_z
    //VAR_FLOAT chap_1_x chap_1_y chap_1_z
    //VAR_FLOAT chap_2_x chap_2_y chap_2_z

    // ****************************************Mission Start************************************
}
