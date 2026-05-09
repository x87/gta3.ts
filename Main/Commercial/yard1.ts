// Generated from Main/Commercial/yard1.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_yd1() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME yard1
    $.flag_player_on_mission = 1
    $.flag_player_on_yardie_mission = 1

    await asyncWait(0)

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_yd1_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  //SWITCH_STREAMING OFF

  PRINT_BIG ( YD1 ) 15000 2 //"Yardie Mission 1"

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

        Cutscene.Load(YD_PH1)
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

        while ($.cs_time < 2237) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('YD1_A', 10000, 1)

        while ($.cs_time < 3791) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD1_A1', 10000, 1)

        while ($.cs_time < 8312) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD1_B', 10000, 1)

        while ($.cs_time < 12880) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD1_C', 10000, 1)

        while ($.cs_time < 15965) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD1_D', 10000, 1)

        while ($.cs_time < 20462) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD1_D1', 10000, 1)
        /*

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

        while ($.cs_time < 25166) {
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

        World.SetPedDensityMultiplier(1.0)
        Game.SetPoliceIgnorePlayer($.player, false /* off */)
        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)
    }

    //------------LOCATION VARIABLES---(NB: ALL LOCATIONS SHOULD HAVE X Y & Z IN FINISHED SCRIPT!!)-----------------------------------------------------

    $.finish_x = 107.0

    $.finish_y = -288.0

    $.start_x = 50.0

    $.start_y = 70.0

    $.flag_corona_yd1 = 0
    $.flag_hotrod1_start = 0
    $.flag_hotrod2_start = 0
    $.flag_hotrod3_start = 0

    $.counter_rush_start = 0
    $.counter_hotrods = 0
    $.counter_player_points = 0
    $.counter_nonplayer1_points = 0
    $.counter_nonplayer2_points = 0
    $.counter_nonplayer3_points = 0
    $.counter_finish = 0
    $.counter_placing = 0
    $.counter_joint_placing = 0

    $.blip_start_yd1 = Blip.AddForCoord($.start_x, $.start_y, -100.0)

    $.flag_leader = 0
    $.flag_random_yd1 = 0

    Streaming.RequestModel(ped`MALE2`)
    Streaming.RequestModel(car`PATRIOT`)
    Streaming.RequestModel(car`CHEETAH`)
    Streaming.RequestModel(car`BOBCAT`)

    while (!Streaming.HasModelLoaded(ped`MALE2`) || !Streaming.HasModelLoaded(car`PATRIOT`) || !Streaming.HasModelLoaded(car`CHEETAH`) || !Streaming.HasModelLoaded(car`BOBCAT`)) {
        await asyncWait(1000)
    }

    // --------Mission stuff goes here-----------------------------------------------------
}

async function is_player_there() {
    // SCM GOTO → is_player_there lowered to endless loop
    while (true) {
        if ($.player.isStoppedInAreaInCar2D(45.0, 65.0, 55.0, 75.0, true /* true */)) {
            $.player_car = $.player.storeCarIsIn()
            // SCM GOTO → player_is_there (not lowered; manual jump required)
            throw new Error('unresolved GOTO player_is_there') // fallback: would break linear control flow
        }

        if ($.player.locateOnFoot2D($.start_x, $.start_y, 5.0, 5.0, false /* false */)) {
            Text.PrintNow('YD1_G', 2000, 1)
        }
        await asyncWait(0)
    }
}

async function player_is_there() {
    $.wanted_yd1 = $.player.storeWantedLevel()
    $.player.clearWantedLevel()

    $.blip_start_yd1.remove()

    $.player.setControl(false /* off */)
    $.player_car.lockDoors(2 /* CARLOCK_LOCKED */)
    Camera.SetFixedPosition(66.7, 51.0, 18.0, 0.0, 0.0, 0.0)
    Camera.DoFade(1500, 0 /* FADE_OUT */)
    await asyncWait(1500)
    Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */)
    Hud.SwitchWidescreen(true /* on */)

    Camera.SetFadingColor(0, 0, 0)
    Camera.DoFade(1500, 1 /* FADE_IN */)
    await asyncWait(1500)

    World.ClearArea(90.0, 50.0, 16.0, 20.0, true /* true */)
    World.ClearArea(93.0, 57.0, 16.0, 20.0, true /* true */)
    World.ClearArea(78.0, 50.0, 16.0, 20.0, true /* true */)
    World.ClearArea(93.0, 43.0, 16.0, 20.0, true /* true */)

    World.SetCarDensityMultiplier(0.0)
    World.SetPedDensityMultiplier(0.0)

    await asyncWait(2000)

    Camera.PointAtPoint(90.0, 50.0, 16.0, 1 /* INTERPOLATION */)

    World.ClearArea(102.0, 90.0, 16.0, 20.0, true /* true */)
    $.hot_rod_1 = Car.Create(89 /* CAR_PATRIOT */, 102.0, 90.0, 16.0)
    $.street_racer_1 = Char.CreateInsideCar($.hot_rod_1, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
    $.hot_rod_1.setWatertight(true /* true */)
    $.hot_rod_1.setUpsidedownNotDamaged(true /* true */)
    $.hot_rod_1.lockDoors(2 /* CARLOCK_LOCKED */)
    $.hot_rod_1.setHeading(190.0)
    $.hot_rod_1.setCruiseSpeed(20.0)
    $.hot_rod_1.setDrivingStyle(0)
    $.hot_rod_1.gotoCoordinatesAccurate(93.0, 57.0, 16.0)

    World.ClearArea(75.0, 76.0, 16.0, 20.0, true /* true */)
    $.hot_rod_2 = Car.Create(98 /* CAR_CHEETAH */, 75.0, 76.0, 16.0)
    $.street_racer_2 = Char.CreateInsideCar($.hot_rod_2, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
    $.hot_rod_2.setWatertight(true /* true */)
    $.hot_rod_2.setUpsidedownNotDamaged(true /* true */)
    $.hot_rod_2.lockDoors(2 /* CARLOCK_LOCKED */)
    $.hot_rod_2.setHeading(220.0)
    $.hot_rod_2.setCruiseSpeed(20.0)
    $.hot_rod_2.setDrivingStyle(0)
    $.hot_rod_2.gotoCoordinatesAccurate(78.0, 50.0, 16.0)

    World.ClearArea(108.0, 3.0, 16.0, 20.0, true /* true */)
    $.hot_rod_3 = Car.Create(105 /* CAR_BOBCAT */, 108.0, 3.0, 16.0)
    $.street_racer_3 = Char.CreateInsideCar($.hot_rod_3, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
    $.hot_rod_3.setWatertight(true /* true */)
    $.hot_rod_3.setUpsidedownNotDamaged(true /* true */)
    $.hot_rod_3.lockDoors(2 /* CARLOCK_LOCKED */)
    //SET_CAR_HEADING hot_rod_3 360.0

    $.hot_rod_3.setCruiseSpeed(10.0)
    $.hot_rod_3.setDrivingStyle(0)
    $.hot_rod_3.gotoCoordinatesAccurate(93.0, 43.0, 16.0)

    $.blip_hot_rod_3 = Blip.AddForCar($.hot_rod_3)
    $.blip_hot_rod_2 = Blip.AddForCar($.hot_rod_2)
    $.blip_hot_rod_1 = Blip.AddForCar($.hot_rod_1)

    Text.PrintNow('YD1_E', 3000, 2)

    $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)

    while ($.counter_hotrods < 3) {
        await asyncWait(0)
        if (!Car.IsDead($.hot_rod_1)) {
            if ($.hot_rod_1.locate2D(93.0, 57.0, 3.0, 3.0, false /* false */) && $.flag_hotrod1_start == 0) {
                $.hot_rod_1.setIdle()
                $.flag_hotrod1_start = 1
                ++$.counter_hotrods
            }
        }
        $.hot_rod_1.setHealth(1000)
        if (!Car.IsDead($.hot_rod_2)) {
            if ($.hot_rod_2.locate2D(78.0, 50.0, 3.0, 3.0, false /* false */) && $.flag_hotrod2_start == 0) {
                $.hot_rod_2.setIdle()
                $.flag_hotrod2_start = 1
                ++$.counter_hotrods
            }
        }
        $.hot_rod_2.setHealth(1000)
        if (!Car.IsDead($.hot_rod_3)) {
            if ($.hot_rod_3.locate2D(93.0, 43.0, 3.0, 3.0, false /* false */) && $.flag_hotrod3_start == 0) {
                $.hot_rod_3.setIdle()
                $.flag_hotrod3_start = 1
                ++$.counter_hotrods
            }
        }
        $.hot_rod_3.setHealth(1000)
    }

    await asyncWait(1500)

    Camera.SetFadingColor(0, 0, 0)
    Camera.DoFade(1500, 0 /* FADE_OUT */)
    await asyncWait(1500)

    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    $.player.alterWantedLevel($.wanted_yd1)

    Camera.DoFade(1500, 1 /* FADE_IN */)
    await asyncWait(1500)

    if (!Car.IsDead($.player_car)) {
        $.player_car.lockDoors(1 /* CARLOCK_UNLOCKED */)
    }

    World.SetCarDensityMultiplier(1.0)
    World.SetPedDensityMultiplier(1.0)

    //----------------GENERATE ROUTE FLAG--------------------------------------------

    $.random_yd1 = Math.Random()

    if ($.random_yd1 > 21845 && $.random_yd1 < 43691) {
        $.flag_random_yd1 = 1
    }

    if ($.random_yd1 > 43690) {
        $.flag_random_yd1 = 2
    }

    //-----------TURN OFF TUNNEL NODES-------------------------

    Path.SwitchRoadsOff(500.0, 60.0, -25.0, 600.0, 140.0, 0.0)
    Path.SwitchRoadsOff(-400.0, 60.0, -25.0, -300.0, 140.0, 0.0)

    //-----------------RACE COUNTDOWN-----------------------------------------------

    if ($.player.isInAnyCar()) {
        $.player_car = $.player.storeCarIsIn()
    }

    while (!Car.IsDead($.player_car) && $.player_car.locate2D($.start_x, $.start_y, 10.0, 10.0, false /* false */)) {
        await asyncWait(1000)
        if ($.counter_rush_start == 4) {
            // SCM GOTO → and_its_go_go_go (not lowered; manual jump required)
            throw new Error('unresolved GOTO and_its_go_go_go') // fallback: would break linear control flow
        }
        if ($.counter_rush_start == 3) {
            Text.PrintBig('YD1GO', 1000, 4)
            ++$.counter_rush_start
            $.player.setControl(true /* on */)
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 100 /* SOUND_RACE_START_GO */)
        }
        if ($.counter_rush_start == 2) {
            Text.PrintBig('YD1_1', 1000, 4)
            ++$.counter_rush_start
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 99 /* SOUND_RACE_START_1 */)
        }
        if ($.counter_rush_start == 1) {
            Text.PrintBig('YD1_2', 1000, 4)
            ++$.counter_rush_start
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 98 /* SOUND_RACE_START_2 */)
        }
        if ($.counter_rush_start == 0) {
            Text.PrintBig('YD1_3', 1000, 4)
            ++$.counter_rush_start
            Sound.AddOneOffSound(0.0, 0.0, 0.0, 97 /* SOUND_RACE_START_3 */)
        }
    }

    Text.PrintNow('YD1_F', 4000, 2)

    //-------------------RACE START-------------------------------------------------------------
}

async function and_its_go_go_go() {
    // SCM GOSUB driving_style_car_1
    await driving_style_car_1()
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB driving_style_car_2
    await driving_style_car_2()
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB driving_style_car_3
    await driving_style_car_3()
    // fallback if label was not emitted as async function: no-op continues linearly

    //------------------MAIN LOOP--------------------------------------------------------------
}

async function main_loop() {
    // SCM GOTO → main_loop lowered to endless loop
    while (true) {
        if ($.flag_corona_yd1 == 0) {
            Fx.DrawCorona($.finish_x, $.finish_y, -100.0, 2.0, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 200, 120, 120)
            /*ELSE
      DRAW_CORONA finish_x finish_y 16.1 2.0 CORONATYPE_HEX FLARETYPE_NONE 0 200 200*/
        }

        if ($.player.isInAnyCar()) {
            $.player_car = $.player.storeCarIsIn()

            const _res119 = $.player_car.getCoordinates()
            $.player_car_x = _res119.x
            $.player_car_y = _res119.y
            $.player_car_z = _res119.z
            $.x_sum = $.finish_x - $.player_car_x
            $.y_sum = $.finish_y - $.player_car_y
            $.x_sum = $.x_sum * $.x_sum
            $.y_sum = $.y_sum * $.y_sum
            $.player_dist = $.x_sum + $.y_sum

            if (!Car.IsDead($.hot_rod_1) || $.hot_rod_1.isInWater()) {
                if (!Char.IsDead($.street_racer_1) && !$.player.isInCar($.hot_rod_1)) {
                    const _res120 = $.hot_rod_1.getCoordinates()
                    $.hot_rod_1_x = _res120.x
                    $.hot_rod_1_y = _res120.y
                    $.hot_rod_1_z = _res120.z
                    if ($.hot_rod_1_z < 0.0) {
                        const _res121 = Path.GetClosestCarNodeWithHeading($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                        $.hot_rod_1_x = _res121.nodeX
                        $.hot_rod_1_y = _res121.nodeY
                        $.hot_rod_1_z = _res121.nodeZ
                        $.hot_rod_heading = _res121.angle
                        //GET_CLOSEST_CAR_NODE hot_rod_1_x hot_rod_1_y hot_rod_1_z hot_rod_1_x hot_rod_1_y hot_rod_1_z
                        if (!Camera.IsPointOnScreen($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z, 3.0)) {
                            $.hot_rod_1.setCoordinates($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                            $.hot_rod_1.setHeading($.hot_rod_heading)
                        }
                    }
                    if (!$.hot_rod_1.isHealthGreater(450)) {
                        $.hot_rod_1.setHealth(600)
                    }
                    if ($.hot_rod_1.isUpsidedown() && $.hot_rod_1.isStopped()) {
                        $.street_racer_1.setObjLeaveCar($.hot_rod_1)
                        if (!$.hot_rod_1.isOnScreen()) {
                            const _res122 = $.hot_rod_1.getCoordinates()
                            $.hot_rod_1_x = _res122.x
                            $.hot_rod_1_y = _res122.y
                            $.hot_rod_1_z = _res122.z
                            const _res123 = Path.GetClosestCarNodeWithHeading($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                            $.hot_rod_1_x = _res123.nodeX
                            $.hot_rod_1_y = _res123.nodeY
                            $.hot_rod_1_z = _res123.nodeZ
                            $.hot_rod_heading = _res123.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_1_x hot_rod_1_y hot_rod_1_z hot_rod_1_x hot_rod_1_y hot_rod_1_z
                            if (!Camera.IsPointOnScreen($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z, 3.0)) {
                                $.hot_rod_1.setCoordinates($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                                $.hot_rod_1.setHeading($.hot_rod_heading)
                                $.street_racer_1.delete()
                                $.street_racer_1 = Char.CreateInsideCar($.hot_rod_1, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.hot_rod_1.isInWater()) {
                        //PRINT_BIG (Y1_TEST) 2000 1//CAR IN WATER!!
                        if (!$.hot_rod_1.isOnScreen()) {
                            const _res124 = $.hot_rod_1.getCoordinates()
                            $.hot_rod_1_x = _res124.x
                            $.hot_rod_1_y = _res124.y
                            $.hot_rod_1_z = _res124.z
                            const _res125 = Path.GetClosestCarNodeWithHeading($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                            $.hot_rod_1_x = _res125.nodeX
                            $.hot_rod_1_y = _res125.nodeY
                            $.hot_rod_1_z = _res125.nodeZ
                            $.hot_rod_heading = _res125.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_1_x hot_rod_1_y hot_rod_1_z hot_rod_1_x hot_rod_1_y hot_rod_1_z
                            if (!Camera.IsPointOnScreen($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z, 3.0)) {
                                $.hot_rod_1.setCoordinates($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                                $.hot_rod_1.setHeading($.hot_rod_heading)
                                $.street_racer_1.delete()
                                $.street_racer_1 = Char.CreateInsideCar($.hot_rod_1, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.timer_reset_hr1 == 1) {
                        if (!$.hot_rod_1.isStopped()) {
                            $.timer_reset_hr1 = 0
                        }
                    }
                    if ($.hot_rod_1.isStopped()) {
                        if ($.timer_reset_hr1 == 0) {
                            $.timer_start_hr1 = Clock.GetGameTimer()
                            $.timer_reset_hr1 = 1
                        }
                        if ($.timer_reset_hr1 == 1) {
                            $.timer_current_hr1 = Clock.GetGameTimer()
                            $.hr1_time_dif = $.timer_current_hr1 - $.timer_start_hr1
                        }
                        if ($.hr1_time_dif > 4000) {
                            if (!$.hot_rod_1.isOnScreen()) {
                                const _res126 = $.hot_rod_1.getCoordinates()
                                $.hot_rod_1_x = _res126.x
                                $.hot_rod_1_y = _res126.y
                                $.hot_rod_1_z = _res126.z
                                const _res127 = Path.GetClosestCarNodeWithHeading($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                                $.hot_rod_1_x = _res127.nodeX
                                $.hot_rod_1_y = _res127.nodeY
                                $.hot_rod_1_z = _res127.nodeZ
                                $.hot_rod_heading = _res127.angle
                                //GET_CLOSEST_CAR_NODE hot_rod_1_x hot_rod_1_y hot_rod_1_z hot_rod_1_x hot_rod_1_y hot_rod_1_z
                                if (!Camera.IsPointOnScreen($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z, 3.0)) {
                                    $.hot_rod_1.setCoordinates($.hot_rod_1_x, $.hot_rod_1_y, $.hot_rod_1_z)
                                    $.hot_rod_1.setHeading($.hot_rod_heading)
                                    $.timer_reset_hr1 = 0
                                }
                            }
                        }
                    }

                    const _res128 = $.hot_rod_1.getCoordinates()
                    $.hot_rod_1_x = _res128.x
                    $.hot_rod_1_y = _res128.y
                    $.hot_rod_1_z = _res128.z
                    $.x_sum = $.finish_x - $.hot_rod_1_x
                    $.y_sum = $.finish_y - $.hot_rod_1_y
                    $.x_sum = $.x_sum * $.x_sum
                    $.y_sum = $.y_sum * $.y_sum
                    $.hot_rod_1_dist = $.x_sum + $.y_sum
                    if ($.hot_rod_1_dist > $.player_dist) {
                        $.hot_rod_1.setMission(2) //MISSION_RAMPLAYER_FARAWAY
                    }
                    if ($.player_dist > $.hot_rod_1_dist) {
                        // SCM GOSUB driving_style_car_1
                        await driving_style_car_1()
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                } else {
                    $.hot_rod_1.setIdle()
                }
            }

            if (!Car.IsDead($.hot_rod_2) || $.hot_rod_2.isInWater()) {
                if (!Char.IsDead($.street_racer_2) && !$.player.isInCar($.hot_rod_2)) {
                    const _res129 = $.hot_rod_2.getCoordinates()
                    $.hot_rod_2_x = _res129.x
                    $.hot_rod_2_y = _res129.y
                    $.hot_rod_2_z = _res129.z
                    if ($.hot_rod_2_z < 0.0) {
                        const _res130 = Path.GetClosestCarNodeWithHeading($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                        $.hot_rod_2_x = _res130.nodeX
                        $.hot_rod_2_y = _res130.nodeY
                        $.hot_rod_2_z = _res130.nodeZ
                        $.hot_rod_heading = _res130.angle
                        //GET_CLOSEST_CAR_NODE hot_rod_2_x hot_rod_2_y hot_rod_2_z hot_rod_2_x hot_rod_2_y hot_rod_2_z
                        if (!Camera.IsPointOnScreen($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z, 3.0)) {
                            $.hot_rod_2.setCoordinates($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                            $.hot_rod_2.setHeading($.hot_rod_heading)
                        }
                    }
                    if (!$.hot_rod_2.isHealthGreater(450)) {
                        $.hot_rod_2.setHealth(600)
                    }
                    if ($.hot_rod_2.isUpsidedown() && $.hot_rod_2.isStopped()) {
                        $.street_racer_2.setObjLeaveCar($.hot_rod_2)
                        if (!$.hot_rod_2.isOnScreen()) {
                            const _res131 = $.hot_rod_2.getCoordinates()
                            $.hot_rod_2_x = _res131.x
                            $.hot_rod_2_y = _res131.y
                            $.hot_rod_2_z = _res131.z
                            const _res132 = Path.GetClosestCarNodeWithHeading($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                            $.hot_rod_2_x = _res132.nodeX
                            $.hot_rod_2_y = _res132.nodeY
                            $.hot_rod_2_z = _res132.nodeZ
                            $.hot_rod_heading = _res132.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_2_x hot_rod_2_y hot_rod_2_z hot_rod_2_x hot_rod_2_y hot_rod_2_z
                            if (!Camera.IsPointOnScreen($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z, 3.0)) {
                                $.hot_rod_2.setCoordinates($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                                $.hot_rod_2.setHeading($.hot_rod_heading)
                                $.street_racer_2.delete()
                                $.street_racer_2 = Char.CreateInsideCar($.hot_rod_2, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.hot_rod_2.isInWater()) {
                        //PRINT_BIG (Y1_TEST) 2000 1
                        if (!$.hot_rod_2.isOnScreen()) {
                            const _res133 = $.hot_rod_2.getCoordinates()
                            $.hot_rod_2_x = _res133.x
                            $.hot_rod_2_y = _res133.y
                            $.hot_rod_2_z = _res133.z
                            const _res134 = Path.GetClosestCarNodeWithHeading($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                            $.hot_rod_2_x = _res134.nodeX
                            $.hot_rod_2_y = _res134.nodeY
                            $.hot_rod_2_z = _res134.nodeZ
                            $.hot_rod_heading = _res134.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_2_x hot_rod_2_y hot_rod_2_z hot_rod_2_x hot_rod_2_y hot_rod_2_z
                            if (!Camera.IsPointOnScreen($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z, 3.0)) {
                                $.hot_rod_2.setCoordinates($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                                $.hot_rod_2.setHeading($.hot_rod_heading)
                                $.street_racer_2.delete()
                                $.street_racer_2 = Char.CreateInsideCar($.hot_rod_2, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.timer_reset_hr2 == 1) {
                        if (!$.hot_rod_2.isStopped()) {
                            $.timer_reset_hr2 = 0
                        }
                    }
                    if ($.hot_rod_2.isStopped()) {
                        if ($.timer_reset_hr2 == 0) {
                            $.timer_start_hr2 = Clock.GetGameTimer()
                            $.timer_reset_hr2 = 1
                        }
                        if ($.timer_reset_hr2 == 1) {
                            $.timer_current_hr2 = Clock.GetGameTimer()
                            $.hr2_time_dif = $.timer_current_hr2 - $.timer_start_hr2
                        }
                        if ($.hr2_time_dif > 4000) {
                            if (!$.hot_rod_2.isOnScreen()) {
                                const _res135 = $.hot_rod_2.getCoordinates()
                                $.hot_rod_2_x = _res135.x
                                $.hot_rod_2_y = _res135.y
                                $.hot_rod_2_z = _res135.z
                                const _res136 = Path.GetClosestCarNodeWithHeading($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                                $.hot_rod_2_x = _res136.nodeX
                                $.hot_rod_2_y = _res136.nodeY
                                $.hot_rod_2_z = _res136.nodeZ
                                $.hot_rod_heading = _res136.angle
                                //GET_CLOSEST_CAR_NODE hot_rod_2_x hot_rod_2_y hot_rod_2_z hot_rod_2_x hot_rod_2_y hot_rod_2_z
                                if (!Camera.IsPointOnScreen($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z, 3.0)) {
                                    $.hot_rod_2.setCoordinates($.hot_rod_2_x, $.hot_rod_2_y, $.hot_rod_2_z)
                                    $.hot_rod_2.setHeading($.hot_rod_heading)
                                    $.timer_reset_hr2 = 0
                                }
                            }
                        }
                    }

                    const _res137 = $.hot_rod_2.getCoordinates()
                    $.hot_rod_2_x = _res137.x
                    $.hot_rod_2_y = _res137.y
                    $.hot_rod_2_z = _res137.z
                    $.x_sum = $.finish_x - $.hot_rod_2_x
                    $.y_sum = $.finish_y - $.hot_rod_2_y
                    $.x_sum = $.x_sum * $.x_sum
                    $.y_sum = $.y_sum * $.y_sum
                    $.hot_rod_2_dist = $.x_sum + $.y_sum

                    if ($.hot_rod_2_dist > $.player_dist) {
                        $.hot_rod_2.setMission(2) //RAMPLAYER_FARAWAY
                    }

                    if ($.player_dist > $.hot_rod_2_dist) {
                        // SCM GOSUB driving_style_car_2
                        await driving_style_car_2()
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                } else {
                    $.hot_rod_2.setIdle()
                }
            }
            if (!Car.IsDead($.hot_rod_3) || $.hot_rod_3.isInWater()) {
                if (!Char.IsDead($.street_racer_3) && !$.player.isInCar($.hot_rod_3)) {
                    const _res138 = $.hot_rod_3.getCoordinates()
                    $.hot_rod_3_x = _res138.x
                    $.hot_rod_3_y = _res138.y
                    $.hot_rod_3_z = _res138.z
                    if ($.hot_rod_3_z < 0.0) {
                        const _res139 = Path.GetClosestCarNodeWithHeading($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                        $.hot_rod_3_x = _res139.nodeX
                        $.hot_rod_3_y = _res139.nodeY
                        $.hot_rod_3_z = _res139.nodeZ
                        $.hot_rod_heading = _res139.angle
                        //GET_CLOSEST_CAR_NODE hot_rod_3_x hot_rod_3_y hot_rod_3_z hot_rod_3_x hot_rod_3_y hot_rod_3_z
                        if (!Camera.IsPointOnScreen($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z, 3.0)) {
                            $.hot_rod_3.setCoordinates($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                            $.hot_rod_3.setHeading($.hot_rod_heading)
                        }
                    }
                    if (!$.hot_rod_3.isHealthGreater(450)) {
                        $.hot_rod_3.setHealth(600)
                    }
                    if ($.hot_rod_3.isUpsidedown() && $.hot_rod_3.isStopped()) {
                        $.street_racer_3.setObjLeaveCar($.hot_rod_3)
                        if (!$.hot_rod_3.isOnScreen()) {
                            const _res140 = $.hot_rod_3.getCoordinates()
                            $.hot_rod_3_x = _res140.x
                            $.hot_rod_3_y = _res140.y
                            $.hot_rod_3_z = _res140.z
                            const _res141 = Path.GetClosestCarNodeWithHeading($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                            $.hot_rod_3_x = _res141.nodeX
                            $.hot_rod_3_y = _res141.nodeY
                            $.hot_rod_3_z = _res141.nodeZ
                            $.hot_rod_heading = _res141.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_3_x hot_rod_3_y hot_rod_3_z hot_rod_3_x hot_rod_3_y hot_rod_3_z
                            if (!Camera.IsPointOnScreen($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z, 3.0)) {
                                $.hot_rod_3.setCoordinates($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                                $.hot_rod_3.setHeading($.hot_rod_heading)
                                $.street_racer_3.delete()
                                $.street_racer_3 = Char.CreateInsideCar($.hot_rod_3, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.hot_rod_3.isInWater()) {
                        //PRINT_BIG (Y1_TEST) 2000 1
                        if (!$.hot_rod_3.isOnScreen()) {
                            const _res142 = $.hot_rod_3.getCoordinates()
                            $.hot_rod_3_x = _res142.x
                            $.hot_rod_3_y = _res142.y
                            $.hot_rod_3_z = _res142.z
                            const _res143 = Path.GetClosestCarNodeWithHeading($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                            $.hot_rod_3_x = _res143.nodeX
                            $.hot_rod_3_y = _res143.nodeY
                            $.hot_rod_3_z = _res143.nodeZ
                            $.hot_rod_heading = _res143.angle
                            //GET_CLOSEST_CAR_NODE hot_rod_3_x hot_rod_3_y hot_rod_3_z hot_rod_3_x hot_rod_3_y hot_rod_3_z
                            if (!Camera.IsPointOnScreen($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z, 3.0)) {
                                $.hot_rod_3.setCoordinates($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                                $.hot_rod_3.setHeading($.hot_rod_heading)
                                $.street_racer_3.delete()
                                $.street_racer_3 = Char.CreateInsideCar($.hot_rod_3, 4 /* PEDTYPE_CIVMALE */, ped`MALE2`)
                            }
                        }
                    }
                    if ($.timer_reset_hr3 == 1) {
                        if (!$.hot_rod_3.isStopped()) {
                            $.timer_reset_hr3 = 0
                        }
                    }
                    if ($.hot_rod_3.isStopped()) {
                        if ($.timer_reset_hr3 == 0) {
                            $.timer_start_hr3 = Clock.GetGameTimer()
                            $.timer_reset_hr3 = 1
                        }
                        if ($.timer_reset_hr3 == 1) {
                            $.timer_current_hr3 = Clock.GetGameTimer()
                            $.hr3_time_dif = $.timer_current_hr3 - $.timer_start_hr3
                        }
                        if ($.hr3_time_dif > 4000) {
                            if (!$.hot_rod_3.isOnScreen()) {
                                const _res144 = $.hot_rod_3.getCoordinates()
                                $.hot_rod_3_x = _res144.x
                                $.hot_rod_3_y = _res144.y
                                $.hot_rod_3_z = _res144.z
                                const _res145 = Path.GetClosestCarNodeWithHeading($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                                $.hot_rod_3_x = _res145.nodeX
                                $.hot_rod_3_y = _res145.nodeY
                                $.hot_rod_3_z = _res145.nodeZ
                                $.hot_rod_heading = _res145.angle
                                //GET_CLOSEST_CAR_NODE hot_rod_3_x hot_rod_3_y hot_rod_3_z hot_rod_3_x hot_rod_3_y hot_rod_3_z
                                if (!Camera.IsPointOnScreen($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z, 3.0)) {
                                    $.hot_rod_3.setCoordinates($.hot_rod_3_x, $.hot_rod_3_y, $.hot_rod_3_z)
                                    $.hot_rod_3.setHeading($.hot_rod_heading)
                                    $.timer_reset_hr3 = 0
                                }
                            }
                        }
                    }
                } else {
                    $.hot_rod_3.setIdle()
                }
            }
        }

        if (!$.player.isInAnyCar()) {
            // SCM GOSUB driving_style_car_1
            await driving_style_car_1()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB driving_style_car_2
            await driving_style_car_2()
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB driving_style_car_3
            await driving_style_car_3()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if ($.player.locateInCar2D($.finish_x, $.finish_y, 6.0, 6.0, false /* false */)) {
            // SCM GOSUB player_points
            await player_points()
            // fallback if label was not emitted as async function: no-op continues linearly
        }

        if (!Car.IsDead($.hot_rod_1)) {
            if ($.hot_rod_1.locate2D($.finish_x, $.finish_y, 6.0, 6.0, false /* false */)) {
                // SCM GOSUB nonplayer_points_1
                await nonplayer_points_1()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        if (!Car.IsDead($.hot_rod_2)) {
            if ($.hot_rod_2.locate2D($.finish_x, $.finish_y, 6.0, 6.0, false /* false */)) {
                // SCM GOSUB nonplayer_points_2
                await nonplayer_points_2()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        if (!Car.IsDead($.hot_rod_3)) {
            if ($.hot_rod_3.locate2D($.finish_x, $.finish_y, 6.0, 6.0, false /* false */)) {
                // SCM GOSUB nonplayer_points_3
                await nonplayer_points_3()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }

        await asyncWait(0)

        // SCM GOSUB driving_style_car_3
        await driving_style_car_3()
        // fallback if label was not emitted as async function: no-op continues linearly

        if ($.counter_finish == 15) {
            // SCM GOTO → race_finished (not lowered; manual jump required)
            throw new Error('unresolved GOTO race_finished') // fallback: would break linear control flow
        }

        //------------------------------RACE FINISHED---------------------------------------------
    }
}

async function race_finished() {
    if ($.counter_player_points == $.counter_nonplayer1_points) {
        ++$.counter_joint_placing
    }

    if ($.counter_player_points == $.counter_nonplayer2_points) {
        ++$.counter_joint_placing
    }

    if ($.counter_player_points == $.counter_nonplayer3_points) {
        ++$.counter_joint_placing
    }

    if ($.counter_player_points > $.counter_nonplayer1_points) {
        ++$.counter_placing
    }

    if ($.counter_player_points > $.counter_nonplayer2_points) {
        ++$.counter_placing
    }

    if ($.counter_player_points > $.counter_nonplayer3_points) {
        ++$.counter_placing
    }

    if ($.counter_placing == 3) {
        // SCM GOTO → mission_yd1_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd1_passed') // fallback: would break linear control flow
    }

    if ($.counter_placing < 3) {
        // SCM GOTO → mission_yd1_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd1_failed') // fallback: would break linear control flow
    }

    // --------------------------Race failed-----------------------------------------------
}

async function mission_yd1_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)

    await asyncWait(2000)

    if ($.counter_joint_placing == 0) {
        if ($.counter_placing == 2) {
            Text.PrintWithNumberNow('Y1_2ND', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
        if ($.counter_placing == 1) {
            Text.PrintWithNumberNow('Y1_3RD', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
        if ($.counter_placing == 0) {
            Text.PrintWithNumberNow('Y1_LAST', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
    }

    if ($.counter_joint_placing == 1) {
        if ($.counter_placing == 2) {
            Text.PrintWithNumberNow('Y1_J1ST', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
        if ($.counter_placing == 1) {
            Text.PrintWithNumberNow('Y1_J2ND', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
        if ($.counter_placing == 0) {
            Text.PrintWithNumberNow('Y1JLAST', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
    }

    if ($.counter_joint_placing == 2) {
        if ($.counter_placing == 1) {
            Text.PrintWithNumberNow('Y1_J1ST', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
        if ($.counter_placing == 0) {
            Text.PrintWithNumberNow('Y1JLAST', $.counter_player_points, 4000, 1)
            await asyncWait(2000)
        }
    }

    return

    // Race passed
}

async function mission_yd1_passed() {
    if ($.flag_yardie_mission4_passed == 0) {
        Stat.RegisterMissionPassed(YD1)
        Stat.PlayerMadeProgress(1)
        $.flag_yardie_mission1_passed = 1
        // START_NEW_SCRIPT yardie_mission2_loop
    }

    $.reward_yd1 = 1000 * $.counter_player_points
    Text.PrintWithNumberBig('M_PASS', $.reward_yd1, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    Text.PrintWithNumberNow('Y1_1ST', $.counter_player_points, 4000, 1)
    $.player.clearWantedLevel()
    $.player.addScore($.reward_yd1)
    Stat.RegisterHighestScore(0, $.counter_player_points)

    return

    // mission cleanup
}

async function mission_cleanup_yd1() {
    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    //SET_PLAYER_CONTROL player on

    $.blip_hot_rod_1.remove()
    $.blip_hot_rod_2.remove()
    $.blip_hot_rod_3.remove()
    $.blip_start_yd1.remove()

    Streaming.MarkModelAsNoLongerNeeded(ped`MALE2`)
    Streaming.MarkModelAsNoLongerNeeded(car`PATRIOT`)
    Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`)
    Streaming.MarkModelAsNoLongerNeeded(car`BOBCAT`)

    Path.SwitchRoadsOn(500.0, 60.0, -25.0, 600.0, 140.0, 0.0)
    Path.SwitchRoadsOn(-400.0, 60.0, -25.0, -300.0, 140.0, 0.0)

    $.flag_player_on_mission = 0
    $.flag_player_on_ray_mission = 0

    //DELETE_CHAR street_racer_1

    $.blip_rush_destination.remove()

    Mission.Finish()
    return

    //---------------------------GOSUBS-----------------------------------------------
}

async function driving_style_car_1() {
    if (!Car.IsDead($.hot_rod_1)) {
        $.hot_rod_1.setCruiseSpeed(40.0)
        $.hot_rod_1.setDrivingStyle(3)
        $.hot_rod_1.gotoCoordinatesAccurate($.finish_x, $.finish_y, -1.0)
        $.flag_drive_mode_1 = 0
    }
    return
}

async function driving_style_car_2() {
    if (!Car.IsDead($.hot_rod_2)) {
        $.hot_rod_2.setCruiseSpeed(45.0)
        $.hot_rod_2.setDrivingStyle(2)
        $.hot_rod_2.gotoCoordinatesAccurate($.finish_x, $.finish_y, -1.0)
        $.flag_drive_mode_2 = 0
    }
    return
}

async function driving_style_car_3() {
    if (!Car.IsDead($.hot_rod_3)) {
        $.hot_rod_3.setCruiseSpeed(35.0)
        $.hot_rod_3.setDrivingStyle(2)
        $.hot_rod_3.gotoCoordinatesAccurate($.finish_x, $.finish_y, -1.0)
        $.flag_drive_mode_3 = 0
    }
    return
}

async function player_points() {
    ++$.counter_player_points
    ++$.counter_finish
    //ADD_SCORE player 1000
    //PRINT_BIG ( YD1_BON ) 1000 4

    Text.PrintWithNumberBig('YD1_CNT', $.counter_player_points, 2000, 4)
    Sound.AddOneOffSound($.player_car_x, $.player_car_y, $.player_car_z, 94 /* SOUND_PART_MISSION_COMPLETE */)
    // SCM GOSUB finish_coord_generator
    await finish_coord_generator()
    // fallback if label was not emitted as async function: no-op continues linearly
    return
}

async function nonplayer_points_1() {
    ++$.counter_nonplayer1_points
    ++$.counter_finish
    Sound.AddOneOffSound($.player_car_x, $.player_car_y, $.player_car_z, 94 /* SOUND_PART_MISSION_COMPLETE */)
    // SCM GOSUB finish_coord_generator
    await finish_coord_generator()
    // fallback if label was not emitted as async function: no-op continues linearly
    return
}

async function nonplayer_points_2() {
    ++$.counter_nonplayer2_points
    ++$.counter_finish
    Sound.AddOneOffSound($.player_car_x, $.player_car_y, $.player_car_z, 94 /* SOUND_PART_MISSION_COMPLETE */)
    // SCM GOSUB finish_coord_generator
    await finish_coord_generator()
    // fallback if label was not emitted as async function: no-op continues linearly
    return
}

async function nonplayer_points_3() {
    ++$.counter_nonplayer3_points
    ++$.counter_finish
    Sound.AddOneOffSound($.player_car_x, $.player_car_y, $.player_car_z, 94 /* SOUND_PART_MISSION_COMPLETE */)
    // SCM GOSUB finish_coord_generator
    await finish_coord_generator()
    // fallback if label was not emitted as async function: no-op continues linearly
    return

    //----------------FINISH COORD GENERATOR--------------------------------------
}

async function finish_coord_generator() {
    if ($.flag_random_yd1 == 0) {
        if ($.counter_finish == 1) {
            $.blip_rush_destination.remove()
            $.finish_x = 106.0
            $.finish_y = -403.36
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
            //flag_corona_yd1 = 1
        }
        if ($.counter_finish == 2) {
            $.blip_rush_destination.remove()
            $.finish_x = 86.8
            $.finish_y = -538.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
            //flag_corona_yd1 = 0
        }
        if ($.counter_finish == 3) {
            $.blip_rush_destination.remove()
            $.finish_x = 173.5
            $.finish_y = -696.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 4) {
            $.blip_rush_destination.remove()
            $.finish_x = 165.0
            $.finish_y = -886.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 5) {
            $.blip_rush_destination.remove()
            $.finish_x = 78.5
            $.finish_y = -945.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 6) {
            $.blip_rush_destination.remove()
            $.finish_x = -69.4
            $.finish_y = -926.2
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 7) {
            $.blip_rush_destination.remove()
            $.finish_x = 207.8
            $.finish_y = -1041.5
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 8) {
            $.blip_rush_destination.remove()
            $.finish_x = 49.1
            $.finish_y = -1034.1
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 9) {
            $.blip_rush_destination.remove()
            $.finish_x = 74.3
            $.finish_y = -920.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 10) {
            $.blip_rush_destination.remove()
            $.finish_x = 105.5
            $.finish_y = -1095.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 11) {
            $.blip_rush_destination.remove()
            $.finish_x = -114.0
            $.finish_y = -499.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 12) {
            $.blip_rush_destination.remove()
            $.finish_x = -10.79
            $.finish_y = -463.1
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 13) {
            $.blip_rush_destination.remove()
            $.finish_x = 346.0
            $.finish_y = -1211.4
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        /*
    IF counter_finish = 14
    REMOVE_BLIP blip_rush_destination
    finish_x = 524.3
    finish_y = -519.6
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 15
    REMOVE_BLIP blip_rush_destination
    finish_x = 530.4
    finish_y = -55.2
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 16
    REMOVE_BLIP blip_rush_destination
    finish_x = 548.5
    finish_y = -370.5
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 17
    REMOVE_BLIP blip_rush_destination
    finish_x = 69.8
    finish_y = 107.0
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 18
    REMOVE_BLIP blip_rush_destination
    finish_x = -41.6
    finish_y = -1353.5
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF
    */
        if ($.counter_finish == 14) {
            $.blip_rush_destination.remove()
            $.finish_x = $.start_x
            $.finish_y = $.start_y
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 15) {
            $.blip_rush_destination.remove()
        }
    }

    if ($.flag_random_yd1 == 1) {
        if ($.counter_finish == 1) {
            $.blip_rush_destination.remove()
            $.finish_x = 173.5
            $.finish_y = -696.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 2) {
            $.blip_rush_destination.remove()
            $.finish_x = -114.0
            $.finish_y = -499.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 3) {
            $.blip_rush_destination.remove()
            $.finish_x = -10.79
            $.finish_y = -463.1
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 4) {
            $.blip_rush_destination.remove()
            $.finish_x = 78.5
            $.finish_y = -945.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 5) {
            $.blip_rush_destination.remove()
            $.finish_x = -69.4
            $.finish_y = -926.2
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 6) {
            $.blip_rush_destination.remove()
            $.finish_x = -73.4
            $.finish_y = -1013.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 7) {
            $.blip_rush_destination.remove()
            $.finish_x = 207.8
            $.finish_y = -1041.5
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 8) {
            $.blip_rush_destination.remove()
            $.finish_x = 86.8
            $.finish_y = -538.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
            //flag_corona_yd1 = 0
        }
        if ($.counter_finish == 9) {
            $.blip_rush_destination.remove()
            $.finish_x = 49.1
            $.finish_y = -1034.1
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 10) {
            $.blip_rush_destination.remove()
            $.finish_x = 74.3
            $.finish_y = -920.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 11) {
            $.blip_rush_destination.remove()
            $.finish_x = 105.5
            $.finish_y = -1095.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 12) {
            $.blip_rush_destination.remove()
            $.finish_x = 346.0
            $.finish_y = -1211.4
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 13) {
            $.blip_rush_destination.remove()
            $.finish_x = -8.4
            $.finish_y = -803.2
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        /*
    IF counter_finish = 14
    REMOVE_BLIP blip_rush_destination
    finish_x = 548.5
    finish_y = -370.5
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 15
    REMOVE_BLIP blip_rush_destination
    finish_x = 165.0
    finish_y = -886.0
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 16
    REMOVE_BLIP blip_rush_destination
    finish_x = 69.8
    finish_y = 107.0
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 17
    REMOVE_BLIP blip_rush_destination
    finish_x = -41.6
    finish_y = -1353.5
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 18
    REMOVE_BLIP blip_rush_destination
    finish_x = 106.0
    finish_y = -403.36
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    //flag_corona_yd1 = 1
    ENDIF
    */
        if ($.counter_finish == 14) {
            $.blip_rush_destination.remove()
            $.finish_x = $.start_x
            $.finish_y = $.start_y
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 15) {
            $.blip_rush_destination.remove()
        }
    }

    if ($.flag_random_yd1 == 2) {
        if ($.counter_finish == 14) {
            $.blip_rush_destination.remove()
            $.finish_x = $.start_x
            $.finish_y = $.start_y
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        /*
    IF counter_finish = 18
    REMOVE_BLIP blip_rush_destination
    finish_x = -10.79
    finish_y = -463.1
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 17
    REMOVE_BLIP blip_rush_destination
    finish_x = 78.5
    finish_y = -945.0
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 16
    REMOVE_BLIP blip_rush_destination
    finish_x = -69.4
    finish_y = -926.2
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 15
    REMOVE_BLIP blip_rush_destination
    finish_x = 524.3
    finish_y = -519.6
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF

    IF counter_finish = 14
    REMOVE_BLIP blip_rush_destination
    finish_x = 172.8
    finish_y = -1066.9
    ADD_BLIP_FOR_COORD finish_x finish_y -100.0 blip_rush_destination
    ENDIF
    */
        if ($.counter_finish == 13) {
            $.blip_rush_destination.remove()
            $.finish_x = 86.8
            $.finish_y = -538.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
            //flag_corona_yd1 = 0
        }
        if ($.counter_finish == 12) {
            $.blip_rush_destination.remove()
            $.finish_x = 49.1
            $.finish_y = -1034.1
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 11) {
            $.blip_rush_destination.remove()
            $.finish_x = 74.3
            $.finish_y = -920.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 10) {
            $.blip_rush_destination.remove()
            $.finish_x = 105.5
            $.finish_y = -1095.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 9) {
            $.blip_rush_destination.remove()
            $.finish_x = 346.0
            $.finish_y = -1211.4
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }

        if ($.counter_finish == 8) {
            $.blip_rush_destination.remove()
            $.finish_x = -8.4
            $.finish_y = -803.2
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 7) {
            $.blip_rush_destination.remove()
            $.finish_x = 251.5
            $.finish_y = -208.5
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 6) {
            $.blip_rush_destination.remove()
            $.finish_x = 165.0
            $.finish_y = -886.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 5) {
            $.blip_rush_destination.remove()
            $.finish_x = -72.5
            $.finish_y = -803.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 4) {
            $.blip_rush_destination.remove()
            $.finish_x = -41.6
            $.finish_y = -1353.5
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 3) {
            $.blip_rush_destination.remove()
            $.finish_x = 106.0
            $.finish_y = -403.36
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
            //flag_corona_yd1 = 1
        }
        if ($.counter_finish == 2) {
            $.blip_rush_destination.remove()
            $.finish_x = 122.1
            $.finish_y = -932.0
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 1) {
            $.blip_rush_destination.remove()
            $.finish_x = 173.5
            $.finish_y = -696.6
            $.blip_rush_destination = Blip.AddForCoord($.finish_x, $.finish_y, -100.0)
        }
        if ($.counter_finish == 15) {
            $.blip_rush_destination.remove()
        }
    }

    return
}

export async function yard1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************YARDIE MISSION ONE DRUG RUSH********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_yd1
    await mission_start_yd1()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_yd1_failed
        await mission_yd1_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_yd1
    await mission_cleanup_yd1()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission

    // VAR_INT hot_rod_1 hot_rod_2 hot_rod_3
    // VAR_INT player_car wanted_yd1

    // VAR_INT street_racer_1 street_racer_2 street_racer_3

    // VAR_INT blip_hot_rod_3 blip_hot_rod_2 blip_hot_rod_1

    // VAR_INT blip_rush_destination flag_random_yd1 random_yd1

    // VAR_INT blip_start_yd1

    // VAR_FLOAT start_x start_y

    // VAR_FLOAT finish_x finish_y

    // VAR_FLOAT x_sum y_sum x_sum_player y_sum_player

    // VAR_FLOAT hot_rod_1_x hot_rod_1_y hot_rod_1_z hot_rod_1_dist
    // VAR_FLOAT hot_rod_2_x hot_rod_2_y hot_rod_2_z hot_rod_2_dist
    // VAR_FLOAT hot_rod_3_x hot_rod_3_y hot_rod_3_z
    // VAR_FLOAT hot_rod_heading

    // VAR_FLOAT player_car_x player_car_y player_car_z player_dist

    // VAR_INT counter_rush_start counter_hotrods
    // VAR_INT flag_hotrod1_start flag_hotrod2_start flag_hotrod3_start

    // VAR_INT flag_drive_mode_1 flag_drive_mode_2 flag_drive_mode_3

    // VAR_INT flag_leader

    // VAR_INT counter_player_points reward_yd1

    // VAR_INT counter_nonplayer1_points counter_nonplayer2_points counter_nonplayer3_points

    // VAR_INT counter_finish
    // VAR_INT flag_corona_yd1

    // VAR_INT counter_placing counter_joint_placing

    // VAR_INT timer_reset_hr1 timer_reset_hr2 timer_reset_hr3
    // VAR_INT timer_start_hr1 timer_start_hr2 timer_start_hr3
    // VAR_INT timer_current_hr1 timer_current_hr2 timer_current_hr3
    // VAR_INT hr1_time_dif hr2_time_dif hr3_time_dif

    // ****************************************Mission Start************************************
}
