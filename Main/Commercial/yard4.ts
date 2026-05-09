// Generated from Main/Commercial/yard4.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_yardie4() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME yard4
    $.flag_player_on_mission = 1
    $.flag_player_on_yardie_mission = 1

    await asyncWait(0)

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_yd4_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  //SWITCH_STREAMING OFF

  PRINT_BIG ( YD4 ) 15000 2 //"Yardie Mission 4"

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

        Cutscene.Load(YD_PH4)
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
        Text.PrintNow('YD4_A', 10000, 1)

        while ($.cs_time < 3000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD4_A1', 10000, 1)

        while ($.cs_time < 5322) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('YD4_A2', 10000, 1)
        /*
  WHILE cs_time < 10759
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( YD4_C ) 10000 1

  WHILE cs_time < 13770
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( YD4_D ) 10000 1

  WHILE cs_time < 18676
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( YD4_D1 ) 10000 1


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

        while ($.cs_time < 8600) {
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

        await asyncWait(500)

        World.SetPedDensityMultiplier(1.0)
        Game.SetPoliceIgnorePlayer($.player, false /* off */)

        Camera.DoFade(1500, 1 /* FADE_IN */)
    }

    $.flag_van1_arrived = 0

    $.flag_bomb1_active = 0
    $.flag_bomb4_active = 0
    $.flag_bomb7_active = 0
    $.flag_bomb9_active = 0
    $.gen1_x = -113.62
    $.gen1_y = -1420.5
    $.gen2_x = -90.54
    $.gen2_y = -1480.0
    $.gen3_x = -38.4
    $.gen3_y = -1447.0
    $.gen4_x = -53.2
    $.gen4_y = -1501.0

    //counter_bomb1 = 0
    //counter_bomb4 = 0
    //counter_bomb7 = 0
    //counter_bomb9 = 0

    $.abandoned_car_x = -71.5
    $.abandoned_car_y = -1471.0

    Streaming.RequestModel(car`ESPERANTO`)
    Streaming.RequestModel(car`PONY`)
    while (!Streaming.HasModelLoaded(car`ESPERANTO`) || !Streaming.HasModelLoaded(car`PONY`)) {
        await asyncWait(0)
    }

    Streaming.LoadSpecialCharacter(1, bomber)
    while (!Streaming.HasSpecialCharacterLoaded(1)) {
        await asyncWait(0)
    }

    //PRINT_BIG ( YD4 ) 15000 2

    //WAIT 1000

    //PRINT_NOW ( YD4_A ) 8000 2

    //WAIT 8000

    $.timer_y4 = 90000

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Hud.DisplayTimer($.timer_y4)
}

async function create_car_yd5() {
    $.abandoned_car_y4 = Car.Create(102 /* CAR_ESPERANTO */, $.abandoned_car_x, $.abandoned_car_y, -100.0)
    $.abandoned_car_y4.setHeading(270.0)
    $.abandoned_car_y4.setIdle()
    $.blip_abandoned_car_y4 = Blip.AddForCar($.abandoned_car_y4)

    $.gen2_van = Car.Create(96 /* CAR_PONY */, $.gen2_x, $.gen2_y, 27.0)
    $.gen2_van.setHeading(345.0)
    $.gen2_van.setIdle()
    $.gen2_van.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

    // Mission stuff goes here

    if (!Car.IsDead($.abandoned_car_y4)) {
        while (!$.player.isInCar($.abandoned_car_y4)) {
            await asyncWait(0)
            if ($.timer_y4 < 1) {
                Text.PrintNow('taxi2', 3000, 1)
                // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd4_failed') // fallback: would break linear control flow
            }
            if (Car.IsDead($.abandoned_car_y4)) {
                Text.PrintNow('WRECKED', 3000, 1)
                // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yd4_failed') // fallback: would break linear control flow
            }
        }
    } else {
        Text.PrintNow('WRECKED', 3000, 1)
        // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_yd4_failed') // fallback: would break linear control flow
    }

    $.blip_abandoned_car_y4.remove()
    $.player.setControl(false /* Off */)
    Hud.ClearTimer($.timer_y4)

    World.ClearArea(-113.4, -1431.5, 26.0, 20.0, true /* true */)

    $.gen1_van = Car.Create(96 /* CAR_PONY */, $.gen1_x, $.gen1_y, 26.2)
    $.gen1_van.setHeading(180.0)
    $.gen1_van.setIdle()
    $.gen1_van.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)
    $.human_bomb_demo = Char.CreateAsPassenger($.gen1_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0)

    $.gen3_van = Car.Create(96 /* CAR_PONY */, $.gen3_x, $.gen3_y, 26.2)
    $.gen3_van.setHeading(90.0)
    $.gen3_van.setIdle()
    $.gen3_van.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

    $.gen4_van = Car.Create(96 /* CAR_PONY */, $.gen4_x, $.gen4_y, 26.2)
    $.gen4_van.setHeading(90.0)
    $.gen4_van.setIdle()
    $.gen4_van.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)

    Camera.SetFixedPosition(-82.0, -1472.0, 27.5, 0.0, 0.0, 0.0)
    if (!Car.IsDead($.abandoned_car_y4)) {
        Camera.PointAtCar($.abandoned_car_y4, 15 /* FIXED */, 2 /* JUMP_CUT */)
    }
    //POINT_CAMERA_AT_PLAYER player FIXED JUMP_CUT

    Hud.SwitchWidescreen(true /* on */)

    Text.PrintNow('YD4_B', 3500, 2)
    // MESSAGE_WAIT(3500, true /* true */);

    Text.PrintNow('YD4_C', 3500, 2)
    // MESSAGE_WAIT(3500, true /* true */);

    Text.PrintNow('YD4_D', 2500, 2)
    // MESSAGE_WAIT(2500, true /* true */);

    if (!Car.IsDead($.gen1_van)) {
        $.gen1_van.gotoCoordinatesAccurate(-113.2, -1442.5, 26.2)
        Camera.PointAtCar($.gen1_van, 15 /* FIXED */, 1 /* INTERPOLATION */)
    }
    if (!Car.IsDead($.gen3_van)) {
        $.gen3_van.gotoCoordinates(-53.5, -1446.7, 26.2)
    }

    while ($.flag_van1_arrived == 0) {
        await asyncWait(0)
        if (!Car.IsDead($.gen1_van)) {
            if ($.gen1_van.locate2D(-113.2, -1442.5, 4.0, 4.0, false /* false */)) {
                $.flag_van1_arrived = 1
            }
        } else {
            // SCM GOTO → mission_yd4_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_yd4_failed') // fallback: would break linear control flow
        }
    }

    if (!Car.IsDead($.gen1_van) && !Char.IsDead($.human_bomb_demo)) {
        $.human_bomb_demo.setObjLeaveCar($.gen1_van)
        while ($.human_bomb_demo.isInCar($.gen1_van)) {
            await asyncWait(0)
            if (!Char.IsDead($.human_bomb_demo)) {
                const _res147 = $.human_bomb_demo.getCoordinates()
                $.bomb_z = _res147.x
                $.bomb_y = _res147.y
                $.bomb_z = _res147.z
            }
            if (Char.IsDead($.human_bomb_demo)) {
                // SCM GOTO → selkirk (not lowered; manual jump required)
                throw new Error('unresolved GOTO selkirk') // fallback: would break linear control flow
            }
            if (Car.IsDead($.gen1_van)) {
                // SCM GOTO → selkirk (not lowered; manual jump required)
                throw new Error('unresolved GOTO selkirk') // fallback: would break linear control flow
            }
        }
    }

    $.human_bomb_demo.setHeading(180.0)
    Camera.SetFixedPosition(-115.76, -1455.0, 25.9, 0.0, 0.0, 0.0)
    $.human_bomb_demo.setIdle()
    Camera.PointAtChar($.human_bomb_demo, 15 /* FIXED */, 2 /* JUMP_CUT */)
    //SET_CAMERA_ZOOM CAM_ZOOM_TWO

    Text.PrintNow('YD4_1', 3000, 1)

    if (!Char.IsDead($.human_bomb_demo)) {
        $.human_bomb_demo.setObjRunToCoord(-114.5, -1452.4)
        while (!$.human_bomb_demo.locateOnFoot2D(-114.5, -1452.4, 3.0, 3.0, false)) {
            await asyncWait(0)
            if (!Char.IsDead($.human_bomb_demo)) {
                const _res148 = $.human_bomb_demo.getCoordinates()
                $.bomb_x = _res148.x
                $.bomb_y = _res148.y
                $.bomb_z = _res148.z
            } else {
                // SCM GOTO → selkirk (not lowered; manual jump required)
                throw new Error('unresolved GOTO selkirk') // fallback: would break linear control flow
            }
        }
    }

    await asyncWait(3000)

    if (!Char.IsDead($.human_bomb_demo)) {
        const _res149 = $.player.getCoordinates()
        $.y4_x = _res149.x
        $.y4_y = _res149.y
        $.y4_z = _res149.z
        Camera.PointAtChar($.human_bomb_demo, 4 /* FOLLOWPED */, 1 /* INTERPOLATION */)
        $.human_bomb_demo.setObjRunToCoord($.y4_x, $.y4_y)
        while (!$.human_bomb_demo.locateOnFoot2D($.y4_x, $.y4_y, 5.0, 5.0, false)) {
            await asyncWait(0)
            if (!Char.IsDead($.human_bomb_demo)) {
                const _res150 = $.human_bomb_demo.getCoordinates()
                $.bomb_x = _res150.x
                $.bomb_y = _res150.y
                $.bomb_z = _res150.z
            }
            if (Char.IsDead($.human_bomb_demo)) {
                // SCM GOTO → selkirk (not lowered; manual jump required)
                throw new Error('unresolved GOTO selkirk') // fallback: would break linear control flow
            }
        }
    }
}

async function selkirk() {
    Fx.AddExplosion($.bomb_x, $.bomb_y, $.bomb_z, 0 /* EXPLOSION_GRENADE */)
    Sound.AddOneOffSound($.bomb_x, $.bomb_y, $.bomb_z, 0 /* sound_test_1 */)
    Camera.Shake(500)

    await asyncWait(1000)

    Camera.RestoreJumpcut()
    Hud.SwitchWidescreen(false /* off */)
    $.player.setControl(true /* on */)
    await asyncWait(0)
    $.human_bomb_demo.markAsNoLongerNeeded()
    Text.PrintNow('YD4_2', 3000, 1)

    // Bomber generation loop

    // SCM GOTO → le_loop_de_mort (not lowered; manual jump required)
    throw new Error('unresolved GOTO le_loop_de_mort') // fallback: would break linear control flow

    // GENERATORS*****GENERATORS*****GENERATORS*****GENERATORS*****GENERATORS*****GENERATORS*****

    //111111111111111111111111111111111111111111111111111111111111111111111
}

async function generator_1_easy() {
    if (!Car.IsDead($.gen1_van)) {
        $.human_bomb_1 = Char.CreateAsPassenger($.gen1_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0)
        $.flag_bomb1_active = 1
        $.human_bomb_1.setObjLeaveCar($.gen1_van)
        $.blip_bomber_1 = Blip.AddForChar($.human_bomb_1)
        while ($.human_bomb_1.isInCar($.gen1_van)) {
            const _res151 = $.human_bomb_1.getCoordinates()
            $.bomb_x = _res151.x
            $.bomb_y = _res151.y
            $.bomb_z = _res151.z
            await asyncWait(0)
            if (Char.IsDead($.human_bomb_1) || Car.IsDead($.gen1_van)) {
                return
            }
        }
    }

    return

    //222222222222222222222222222222222222222222222222222222222222222222222222
}

async function generator_2_easy() {
    if (!Car.IsDead($.gen2_van)) {
        $.human_bomb_4 = Char.CreateAsPassenger($.gen2_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0)
        $.flag_bomb4_active = 1
        $.human_bomb_4.setObjLeaveCar($.gen2_van)
        $.blip_bomber_4 = Blip.AddForChar($.human_bomb_4)

        while ($.human_bomb_4.isInCar($.gen2_van)) {
            const _res152 = $.human_bomb_4.getCoordinates()
            $.bomb4_x = _res152.x
            $.bomb4_y = _res152.y
            $.bomb4_z = _res152.z
            await asyncWait(0)
            if (Char.IsDead($.human_bomb_4) || Car.IsDead($.gen2_van)) {
                return
            }
        }
    }

    return

    //333333333333333333333333333333333333333333333333333333333333333333333333
}

async function generator_3_easy() {
    if (!Car.IsDead($.gen3_van)) {
        $.human_bomb_7 = Char.CreateAsPassenger($.gen3_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0)
        $.flag_bomb7_active = 1
        $.human_bomb_7.setObjLeaveCar($.gen3_van)
        $.blip_bomber_7 = Blip.AddForChar($.human_bomb_7)
        while ($.human_bomb_7.isInCar($.gen3_van)) {
            const _res153 = $.human_bomb_7.getCoordinates()
            $.bomb7_x = _res153.x
            $.bomb7_y = _res153.y
            $.bomb7_z = _res153.z
            await asyncWait(0)
            if (Char.IsDead($.human_bomb_7) || Car.IsDead($.gen3_van)) {
                return
            }
        }
    }

    return

    //444444444444444444444444444444444444444444444444444444444444444444444444
}

async function generator_4_easy() {
    if (!Car.IsDead($.gen4_van)) {
        $.human_bomb_9 = Char.CreateAsPassenger($.gen4_van, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 0)
        $.flag_bomb9_active = 1
        $.human_bomb_9.setObjLeaveCar($.gen4_van)
        $.blip_bomber_9 = Blip.AddForChar($.human_bomb_9)
        while ($.human_bomb_9.isInCar($.gen4_van)) {
            const _res154 = $.human_bomb_9.getCoordinates()
            $.bomb9_x = _res154.x
            $.bomb9_y = _res154.y
            $.bomb9_z = _res154.z
            await asyncWait(0)
            if (Char.IsDead($.human_bomb_9) || Car.IsDead($.gen4_van)) {
                return
            }
        }
    }

    return

    // MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****MAIN LOOP*****
}

async function le_loop_de_mort() {
    // SCM GOTO → le_loop_de_mort lowered to endless loop
    while (true) {
        await asyncWait(0)

        if ($.flag_bomb1_active == 0) {
            // SCM GOSUB generator_1_easy
            await generator_1_easy()
            // fallback if label was not emitted as async function: no-op continues linearly
        } else {
            if (!Char.IsDead($.human_bomb_1)) {
                const _res155 = $.player.getCoordinates()
                $.y4_x = _res155.x
                $.y4_y = _res155.y
                $.y4_z = _res155.z
                $.human_bomb_1.setObjRunToCoord($.y4_x, $.y4_y)
                const _res156 = $.human_bomb_1.getCoordinates()
                $.bomb_x = _res156.x
                $.bomb_y = _res156.y
                $.bomb_z = _res156.z
                $.human_bomb_1.clearThreatSearch()
                if ($.human_bomb_1.locateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, false) || !$.human_bomb_1.isHealthGreater(95)) {
                    // SCM GOSUB detonate_1
                    await detonate_1()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.human_bomb_1.markAsNoLongerNeeded()
                    $.flag_bomb1_active = 0
                    // SCM GOSUB generator_1_easy
                    await generator_1_easy()
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
            } else {
                // SCM GOSUB detonate_1
                await detonate_1()
                // fallback if label was not emitted as async function: no-op continues linearly
                $.human_bomb_1.markAsNoLongerNeeded()
                $.flag_bomb1_active = 0
            }
        }

        if ($.flag_bomb4_active == 0) {
            // SCM GOSUB generator_2_easy
            await generator_2_easy()
            // fallback if label was not emitted as async function: no-op continues linearly
        } else {
            if (!Char.IsDead($.human_bomb_4)) {
                const _res157 = $.player.getCoordinates()
                $.y4_x = _res157.x
                $.y4_y = _res157.y
                $.y4_z = _res157.z
                $.human_bomb_4.setObjRunToCoord($.y4_x, $.y4_y)
                const _res158 = $.human_bomb_4.getCoordinates()
                $.bomb4_x = _res158.x
                $.bomb4_y = _res158.y
                $.bomb4_z = _res158.z
                $.human_bomb_4.clearThreatSearch()
                if ($.human_bomb_4.locateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, false) || !$.human_bomb_4.isHealthGreater(95)) {
                    // SCM GOSUB detonate_4
                    await detonate_4()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.human_bomb_4.markAsNoLongerNeeded()
                    $.flag_bomb4_active = 0
                }
            } else {
                // SCM GOSUB detonate_4
                await detonate_4()
                // fallback if label was not emitted as async function: no-op continues linearly
                $.human_bomb_4.markAsNoLongerNeeded()
                $.flag_bomb4_active = 0
            }
        }

        if ($.flag_bomb7_active == 0) {
            // SCM GOSUB generator_3_easy
            await generator_3_easy()
            // fallback if label was not emitted as async function: no-op continues linearly
        } else {
            if (!Char.IsDead($.human_bomb_7)) {
                const _res159 = $.player.getCoordinates()
                $.y4_x = _res159.x
                $.y4_y = _res159.y
                $.y4_z = _res159.z
                $.human_bomb_7.setObjRunToCoord($.y4_x, $.y4_y)
                const _res160 = $.human_bomb_7.getCoordinates()
                $.bomb7_x = _res160.x
                $.bomb7_y = _res160.y
                $.bomb7_z = _res160.z
                $.human_bomb_7.clearThreatSearch()
                if ($.human_bomb_7.locateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, false) || !$.human_bomb_7.isHealthGreater(95)) {
                    // SCM GOSUB detonate_7
                    await detonate_7()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.human_bomb_7.markAsNoLongerNeeded()
                    $.flag_bomb7_active = 0
                }
            } else {
                // SCM GOSUB detonate_7
                await detonate_7()
                // fallback if label was not emitted as async function: no-op continues linearly
                $.human_bomb_7.markAsNoLongerNeeded()
                $.flag_bomb7_active = 0
            }
        }

        if ($.flag_bomb9_active == 0) {
            // SCM GOSUB generator_4_easy
            await generator_4_easy()
            // fallback if label was not emitted as async function: no-op continues linearly
        } else {
            if (!Char.IsDead($.human_bomb_9)) {
                const _res161 = $.player.getCoordinates()
                $.y4_x = _res161.x
                $.y4_y = _res161.y
                $.y4_z = _res161.z
                const _res162 = $.human_bomb_9.getCoordinates()
                $.bomb9_x = _res162.x
                $.bomb9_y = _res162.y
                $.bomb9_z = _res162.z
                $.human_bomb_9.clearThreatSearch()
                $.human_bomb_9.setObjRunToCoord($.y4_x, $.y4_y)
                if ($.human_bomb_9.locateAnyMeans3D($.y4_x, $.y4_y, $.y4_z, 3.0, 3.0, 4.0, false) || !$.human_bomb_9.isHealthGreater(95)) {
                    // SCM GOSUB detonate_9
                    await detonate_9()
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.human_bomb_9.markAsNoLongerNeeded()
                    $.flag_bomb9_active = 0
                }
            } else {
                // SCM GOSUB detonate_9
                await detonate_9()
                // fallback if label was not emitted as async function: no-op continues linearly
                $.human_bomb_9.markAsNoLongerNeeded()
                $.flag_bomb9_active = 0
            }
        }

        if (Car.IsDead($.gen1_van) && Car.IsDead($.gen2_van) && Car.IsDead($.gen3_van) && Car.IsDead($.gen4_van)) {
            if (Char.IsDead($.human_bomb_1) && Char.IsDead($.human_bomb_4) && Char.IsDead($.human_bomb_7) && Char.IsDead($.human_bomb_9)) {
                // SCM GOTO → mission_yardie4_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_yardie4_passed') // fallback: would break linear control flow
            }
        }

        // DETONATIONS*****DETONATIONS*****DETONATIONS*****DETONATIONS*****DETONATIONS*****DETONATIONS*****DETONATIONS*****
    }
}

async function detonate_1() {
    if ($.flag_bomb1_active == 1) {
        Fx.AddExplosion($.bomb_x, $.bomb_y, $.bomb_z, 0 /* EXPLOSION_GRENADE */)
        Sound.AddOneOffSound($.bomb_x, $.bomb_y, $.bomb_z, 0 /* sound_test_1 */)
        Camera.Shake(500)
        $.flag_bomb1_active = 0
        $.blip_bomber_1.remove()
    }
    return
}

async function detonate_4() {
    if ($.flag_bomb4_active == 1) {
        Fx.AddExplosion($.bomb4_x, $.bomb4_y, $.bomb4_z, 0 /* EXPLOSION_GRENADE */)
        Sound.AddOneOffSound($.bomb4_x, $.bomb4_y, $.bomb4_z, 0 /* sound_test_1 */)
        Camera.Shake(500)
        $.blip_bomber_4.remove()
    }
    return
}

async function detonate_7() {
    if ($.flag_bomb7_active == 1) {
        Fx.AddExplosion($.bomb7_x, $.bomb7_y, $.bomb7_z, 0 /* EXPLOSION_GRENADE */)
        Sound.AddOneOffSound($.bomb7_x, $.bomb7_y, $.bomb7_z, 0 /* sound_test_1 */)
        Camera.Shake(500)
        $.flag_bomb7_active = 0
        $.blip_bomber_7.remove()
    }
    return
}

async function detonate_9() {
    if ($.flag_bomb9_active == 1) {
        Fx.AddExplosion($.bomb9_x, $.bomb9_y, $.bomb9_z, 0 /* EXPLOSION_GRENADE */)
        Sound.AddOneOffSound($.bomb9_x, $.bomb9_y, $.bomb9_z, 0 /* sound_test_1 */)
        Camera.Shake(500)
        $.flag_bomb9_active = 0
        $.blip_bomber_9.remove()
    }
    return

    // Mission yardie4 failed
}

async function mission_yd4_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)

    return

    // mission yardie4 passed
}

async function mission_yardie4_passed() {
    $.flag_yardie_mission4_passed = 1
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.clearWantedLevel()
    $.player.addScore(10000)
    Stat.RegisterMissionPassed(YD4)
    Stat.PlayerMadeProgress(1)
    Game.SetThreatForPedType(11 /* PEDTYPE_GANG_YARDIE */, 0 /* THREAT_PLAYER1 */)

    $.yardie_contact_blip.remove()
    // START_NEW_SCRIPT yardie_mission1_loop
    $.flag_yardie_mission1_passed = 0
    return

    // mission cleanup
}

async function mission_cleanup_yardie4() {
    $.flag_player_on_mission = 0

    $.flag_player_on_yardie_mission = 0
    $.blip_abandoned_car_y4.remove()
    Hud.ClearTimer($.timer_y4)
    Streaming.UnloadSpecialCharacter(1)
    Streaming.MarkModelAsNoLongerNeeded(ped`SPECIAL1`)
    Streaming.MarkModelAsNoLongerNeeded(car`ESPERANTO`)
    Streaming.MarkModelAsNoLongerNeeded(car`PONY`)
    Mission.Finish()
    return
}

export async function yard4() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Yardie mission 4********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_yardie4
    await mission_start_yardie4()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_yd4_failed
        await mission_yd4_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_yardie4
    await mission_cleanup_yardie4()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission

    // VAR_INT abandoned_car_y4 flag_van1_arrived

    // VAR_INT timer_y4

    // VAR_INT blip_abandoned_car_y4

    // VAR_INT gen1_van gen2_van gen3_van gen4_van

    // VAR_INT human_bomb_1
    //VAR_INT human_bomb_2
    //VAR_INT human_bomb_3

    // VAR_INT human_bomb_4
    //VAR_INT human_bomb_5
    //VAR_INT human_bomb_6

    // VAR_INT human_bomb_7
    //VAR_INT human_bomb_8

    // VAR_INT human_bomb_9
    // VAR_INT human_bomb_demo

    // VAR_INT blip_bomber_1 blip_bomber_4 blip_bomber_7 blip_bomber_9

    // VAR_INT flag_bomb1_active
    // VAR_INT flag_bomb4_active
    // VAR_INT flag_bomb7_active
    // VAR_INT flag_bomb9_active

    //VAR_INT counter_bomb1 counter_bomb4 counter_bomb7
    //VAR_INT counter_bomb9

    //VAR_INT bomber_collective_1 bomber_collective_2 bomber_collective_3

    //CO-ORD VARIABLES*****************************************************

    // VAR_FLOAT gen1_x gen1_y
    // VAR_FLOAT gen2_x gen2_y
    // VAR_FLOAT gen3_x gen3_y
    // VAR_FLOAT gen4_x gen4_y

    // VAR_FLOAT abandoned_car_x abandoned_car_y

    // VAR_FLOAT y4_x y4_y y4_z

    // VAR_FLOAT bomb_x bomb_y bomb_z
    // VAR_FLOAT bomb4_x bomb4_y bomb4_z
    // VAR_FLOAT bomb7_x bomb7_y bomb7_z
    // VAR_FLOAT bomb9_x bomb9_y bomb9_z

    // ****************************************Mission Start************************************
}
