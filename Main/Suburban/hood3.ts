// Generated from Main/Suburban/hood3.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_hood3() {
    $.flag_player_on_mission = 1

    $.flag_player_on_hood_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_player_had_repair_message_hm3 = 0

    $.flag_player_had_car_message_hm3 = 0

    $.flag_blip2_on = 0

    $.blob_flag = 1

    $.timer_hm3 = 361000

    $.car_health_hm3 = 1000

    $.car_damage_hm3 = 0

    $.flag_dont_check_stuff_hm3 = 0

    $.flag_player_had_out_message_hm3 = 0

    {
        // ********************************************START OF CUTSCENE****************************

        /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_hood3_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( HM_3 ) 15000 2 //"RIGGED TO BLOW"

  SWITCH_STREAMING OFF

  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH

  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        World.SetPedDensityMultiplier(0.0)

        World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0)

        //LOAD_ALL_MODELS_NOW

        //WHILE NOT HAS_MODEL_LOADED cut_obj1

        //	WAIT 0

        //ENDWHILE

        Cutscene.Load('hd_ph3')
        Cutscene.SetOffset(-444.714, -6.321, 2.9)

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
        Text.PrintNow('HM3_A', 10000, 1) //"Some effa..."

        while ($.cs_time < 4262) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_B', 10000, 1) //"If I lose those wheels..."

        while ($.cs_time < 7770) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_C', 10000, 1) //"Pick up my car..."

        while ($.cs_time < 11514) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_D', 10000, 1) //"Let them diffuse..."

        while ($.cs_time < 14528) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_E', 10000, 1) //"The clocks...."

        while ($.cs_time < 17707) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_F', 10000, 1) //"You hit one pot hole..."

        while ($.cs_time < 20250) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM3_G', 10000, 1) //"Now move it..."

        while ($.cs_time < 20951) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('HM3_G')

        while ($.cs_time < 21666) {
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

        //SWITCH_STREAMING ON

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

        World.SetPedDensityMultiplier(1.0)

        // *********************************************END OF CUTSCENE*****************************

        Game.ClearThreatForPedType(7 /* PEDTYPE_GANG_MAFIA */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(9 /* PEDTYPE_GANG_DIABLO */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(10 /* PEDTYPE_GANG_YAKUZA */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(11 /* PEDTYPE_GANG_YARDIE */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 0 /* THREAT_PLAYER1 */)

        Game.ClearThreatForPedType(13 /* PEDTYPE_GANG_HOOD */, 0 /* THREAT_PLAYER1 */)

        Streaming.RequestModel(car`INFERNUS`)

        while (!Streaming.HasModelLoaded(car`INFERNUS`)) {
            await asyncWait(0)
        }

        $.car_hm3 = Car.Create(94 /* CAR_INFERNUS */, -682.0, 76.0, -100.0)

        $.car_hm3.setHeading(0.0)

        $.car_hm3.setCanRespray(false /* FALSE */)

        $.radar_blip_car1_hm3 = Blip.AddForCar($.car_hm3)

        $.garage_hm3.setTargetCarForMission($.car_hm3)

        Hud.DisplayTimer($.timer_hm3)

        if (Car.IsDead($.car_hm3)) {
            Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
            // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
        }

        // waiting for the player to get into the car

        while (!$.player.isInCar($.car_hm3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_hm3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
            } else {
                if ($.car_hm3.isUpsidedown() && $.car_hm3.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                    // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
                }
            }
            if ($.timer_hm3 == 0) {
                $.car_damage_hm3 = 100
                $.car_hm3.explode()
            }
        }

        $.radar_blip_car1_hm3.remove()

        Text.PrintNow('HM3_1', 7000, 1) //"Get to the garage but watch out if the car takes too much damage it will blow!

        $.radar_blip_coord1_hm3 = Blip.AddForCoord(1354.7, -312.9, 48.9)

        Hud.DisplayCounterWithString($.car_damage_hm3, 1 /* COUNTER_DISPLAY_BAR */, 'DETON')

        // waiting for the player to reach the garage

        while (!$.garage_hm3.isCarInMission()) {
            await asyncWait(0)
            if (Car.IsDead($.car_hm3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
            } else {
                $.car_health_hm3 = $.car_hm3.getHealth()
                $.car_damage_hm3 = 1000 - $.car_health_hm3
                if ($.car_damage_hm3 > 100) {
                    $.car_damage_hm3 = 100
                }

                if ($.car_hm3.isUpsidedown() && $.car_hm3.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                    // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
                }
            }
            if ($.timer_hm3 == 0) {
                $.car_damage_hm3 = 100
                $.car_hm3.explode()
            }
            if ($.car_damage_hm3 == 100) {
                $.car_hm3.explode()
            }
            if (!$.player.isInCar($.car_hm3) && $.flag_player_had_car_message_hm3 == 0) {
                Text.PrintNow('IN_VEH', 7000, 1) //" Get back in the car and get on with the mission!"
                $.radar_blip_coord1_hm3.remove()
                $.radar_blip_car1_hm3 = Blip.AddForCar($.car_hm3)
                $.flag_player_had_car_message_hm3 = 1
            }
            if ($.player.isInCar($.car_hm3) && $.flag_player_had_car_message_hm3 == 1) {
                $.radar_blip_car1_hm3.remove()
                $.radar_blip_coord1_hm3 = Blip.AddForCoord(1354.7, -312.9, 48.9)
                $.flag_player_had_car_message_hm3 = 0
            }
        }

        $.current_time_hm3 = 361000 - $.timer_hm3

        $.current_time_hm3 = $.current_time_hm3 / 1000

        Stat.RegisterDefuseBombTime($.current_time_hm3)

        $.radar_blip_coord1_hm3.remove()

        Hud.ClearCounter($.car_damage_hm3)

        Hud.ClearTimer($.timer_hm3)

        Text.PrintNow('HM3_2', 7000, 1) //"Bring the car back and I want it mint - no damage!"

        $.radar_blip_coord2_hm3 = Blip.AddForCoord(-682.0, 76.0, -100.0)

        $.flag_blip2_on = 1

        $.blob_flag = 1

        while (!$.car_hm3.locateStopped3D(-682.0, 76.0, 17.4, 3.0, 4.0, 4.0, $.blob_flag) || $.car_hm3.isVisiblyDamaged() || $.player.isInCar($.car_hm3)) {
            await asyncWait(0)
            if (Car.IsDead($.car_hm3)) {
                Text.PrintNow('WRECKED', 5000, 1) //"The vehicle's wrecked!"
                // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
            } else {
                if ($.car_hm3.isUpsidedown() && $.car_hm3.isStopped()) {
                    Text.PrintNow('UPSIDE', 5000, 1) //"You've flipped your wheels!"
                    // SCM GOTO → mission_hood3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_hood3_failed') // fallback: would break linear control flow
                }
            }
            if ($.car_hm3.locateStopped3D(-682.0, 76.0, 17.4, 3.0, 4.0, 4.0, false /* FALSE */)) {
                if (!$.car_hm3.isVisiblyDamaged()) {
                    $.flag_dont_check_stuff_hm3 = 1
                }
                if ($.flag_player_had_out_message_hm3 == 0) {
                    Text.PrintNow('OUT_VEH', 5000, 1) //"Get out of the vehicle!"
                    $.flag_player_had_out_message_hm3 = 1
                }
            } else {
                $.flag_dont_check_stuff_hm3 = 0
                $.flag_player_had_out_message_hm3 = 0
            }
            if ($.flag_dont_check_stuff_hm3 == 0) {
                if ($.player.isInCar($.car_hm3)) {
                    if ($.flag_player_had_car_message_hm3 == 1) {
                        $.radar_blip_car1_hm3.remove()
                        $.flag_player_had_car_message_hm3 = 0
                    }
                    if ($.car_hm3.isVisiblyDamaged()) {
                        if ($.flag_player_had_repair_message_hm3 == 0) {
                            Text.PrintNow('HM3_3', 7000, 1) //"Get the car repaired I want it mint!"
                            $.radar_blip_coord2_hm3.remove()
                            $.flag_blip2_on = 0
                            $.flag_player_had_repair_message_hm3 = 1
                        }
                        $.blob_flag = 0
                    } else {
                        if ($.flag_blip2_on == 0) {
                            $.radar_blip_coord2_hm3 = Blip.AddForCoord(-682.0, 76.0, -100.0)
                            Text.PrintNow('HM3_2', 7000, 1) //"Bring the car back and I want it mint - no damage!"
                            $.flag_blip2_on = 1
                        }
                        $.blob_flag = 1
                        $.flag_player_had_repair_message_hm3 = 0
                    }
                } else {
                    if ($.flag_player_had_car_message_hm3 == 0) {
                        Text.PrintNow('IN_VEH', 7000, 1) //" Get back in the car and get on with the mission!"
                        $.radar_blip_coord2_hm3.remove()
                        $.flag_blip2_on = 0
                        $.radar_blip_car1_hm3 = Blip.AddForCar($.car_hm3)
                        $.flag_player_had_car_message_hm3 = 1
                    }
                    $.blob_flag = 0
                    $.flag_player_had_repair_message_hm3 = 0
                }
            }
        }

        if (!Car.IsDead($.car_hm3)) {
            $.car_hm3.changeLock(2 /* CARLOCK_LOCKED */)
        }

        $.radar_blip_coord2_hm3.remove()
    }

    // SCM GOTO → mission_hood3_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_hood3_passed') // fallback: would break linear control flow

    // Mission hood3 failed
}

async function mission_hood3_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"

    if ($.player.hasBeenArrested()) {
        Restart.OverridePolice(3 /* LEVEL_SUBURBAN */)
    }

    if ($.player.isDead()) {
        Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */)
    }

    return

    // mission hood3 passed
}

async function mission_hood3_passed() {
    if ($.flag_hood_mission3_passed == 0) {
        Stat.RegisterMissionPassed('HM_3')
        Stat.PlayerMadeProgress(1)
        Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1) //Mission Passed!"
        Audio.PlayMissionPassedTune(1)
        $.player.addScore(20000)
        $.player.clearWantedLevel()
        // START_NEW_SCRIPT hood_mission4_loop
        $.flag_hood_mission3_passed = 1
    } else {
        $.player.addScore(20000)
        Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1) //Mission Passed!"
        Audio.PlayMissionPassedTune(1)
        $.player.clearWantedLevel()
    }

    return

    // mission cleanup
}

async function mission_cleanup_hood3() {
    $.flag_player_on_mission = 0
    $.flag_player_on_hood_mission = 0
    $.garage_hm3.setTargetCarForMission(-1)
    Hud.ClearTimer($.timer_hm3)
    Hud.ClearCounter($.car_damage_hm3)
    Streaming.MarkModelAsNoLongerNeeded(car`INFERNUS`)
    $.radar_blip_car1_hm3.remove()
    $.radar_blip_coord1_hm3.remove()
    $.radar_blip_coord2_hm3.remove()
    Game.SetThreatForPedType(7 /* PEDTYPE_GANG_MAFIA */, 0 /* THREAT_PLAYER1 */)
    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 0 /* THREAT_PLAYER1 */)
    Game.SetThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 0 /* THREAT_PLAYER1 */)

    if ($.flag_yardie_mission2_passed == 1) {
        Game.SetThreatForPedType(9 /* PEDTYPE_GANG_DIABLO */, 0 /* THREAT_PLAYER1 */)
    }

    if ($.flag_yardie_mission4_passed == 1) {
        Game.SetThreatForPedType(11 /* PEDTYPE_GANG_YARDIE */, 0 /* THREAT_PLAYER1 */)
    }

    Mission.Finish()
    return
}

export async function hood3() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Hood Mission 3****************************************
    // *************************************Rigged To Blow****************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME hood3

    // Mission start stuff

    // SCM GOSUB mission_start_hood3
    await mission_start_hood3()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_hood3_failed
        await mission_hood3_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_hood3
    await mission_cleanup_hood3()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT car_hm3

    // VAR_INT radar_blip_car1_hm3

    // VAR_INT timer_hm3

    // VAR_INT radar_blip_coord1_hm3

    // VAR_FLOAT carx_hm3

    // VAR_FLOAT cary_hm3

    // VAR_FLOAT carz_hm3

    // VAR_INT radar_blip_coord2_hm3

    // VAR_INT flag_player_had_repair_message_hm3

    // VAR_INT flag_player_had_car_message_hm3

    // VAR_INT flag_blip2_on

    // VAR_INT current_time_hm3

    // VAR_INT best_time_hm3

    // VAR_INT car_health_hm3

    // VAR_INT car_damage_hm3

    // VAR_INT flag_dont_check_stuff_hm3

    // VAR_INT flag_player_had_out_message_hm3

    // ***************************************Mission Start*************************************
}
