// Generated from Main/Commercial/ray1.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_ray1() {
    $.flag_player_on_mission = 1
    $.flag_player_on_ray_mission = 1
    $.rays_cutscene_flag = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME ray1

    $.wanted_lvl_flag_r1 = 0
    $.game_timer_r1 = 0
    $.game_timer_start_r1 = 0
    $.car_moving_stuck_flag = 0
    $.getaway_stuck_flag = 0
    $.get_away_car_health = 1000
    $.game_timer_current_r1 = 0
    $.get_away_car_x = 0.0
    $.get_away_car_y = 0.0
    $.get_away_car_z = 0.0
    $.mfail_timer = 0
    $.mfail_timer_current = 0
    $.mfail_timer_started = 0
    $.mfail_timer_reset_flag = 0
    $.carlock_flag = 0
    {
        // ****************************************START OF CUTSCENE********************************

        /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_ray1_failed
  ENDIF

  SWITCH_STREAMING OFF

  PRINT_BIG RM1 15000 2 //"Silence the sneak"
  */

        Streaming.LoadSpecialCharacter(1, 'ray')
        Streaming.LoadSpecialModel(hier`cutobj01`, 'PLAYERH')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'RAYH')
        Streaming.RequestModel(2104 /* toilet */)

        /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

        Streaming.LoadAllModelsNow()

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(hier`cutobj01`) ||
            !Streaming.HasModelLoaded(hier`cutobj02`) ||
            !Streaming.HasModelLoaded(2104 /* toilet */)
        ) {
            await asyncWait(0)
        }

        World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */)

        $.player.setCoordinates(39.0, -723.5, 22.0)

        $.player.setHeading(90.0)

        Cutscene.Load('r1_sw')

        Cutscene.SetOffset(39.424, -726.677, 21.692)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim('player')

        $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`)
        $.cs_ray.setAnim('ray')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
        $.cs_playerhead.setAnim('player')

        $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`)
        $.cs_rayhead.setAnim('ray')

        Camera.DoFade(1500, 1 /* FADE_IN */)
        Camera.SetNearClip(0.2)

        Cutscene.Start()

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2070) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('RM1_A', 8000, 1) //"That scum bag McAffrey he took more bribes than anyone, and now he's gone too far."

        while ($.cs_time < 6097) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('RM1_B', 8000, 1) //"Reckons he'll get an honorable discharge if he turns states evidence."

        while ($.cs_time < 9509) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('RM1_C', 8000, 1) //"He just squealed."

        while ($.cs_time < 11019) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('RM1_D', 8000, 1) //"He's under armed protection in a WitSec property down Newport some apartment behind the car park."

        while ($.cs_time < 16109) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('RM1_E', 8000, 1) //"Torch the place and that should flush 'em out, then make sure he never talks to no one."

        while ($.cs_time < 21333) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        $.player.giveWeapon(11 /* WEAPONTYPE_GRENADE */, 12)

        while (!Cutscene.HasFinished()) {
            await asyncWait(0)
        }

        Text.ClearPrints()

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        Cutscene.Clear()

        Camera.DoFade(0, 0 /* FADE_OUT */)
        Camera.SetNearClip(0.9)

        Camera.SetBehindPlayer()

        Streaming.UnloadSpecialCharacter(1)
        Streaming.MarkModelAsNoLongerNeeded(2104 /* toilet */)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)

        Streaming.RequestModel(ped`LI_MAN2`)
        Streaming.RequestModel(car`SENTINEL`)

        Streaming.LoadAllModelsNow()

        while (!Streaming.HasModelLoaded(ped`LI_MAN2`) || !Streaming.HasModelLoaded(car`SENTINEL`)) {
            await asyncWait(0)
        }

        Streaming.Switch(true /* ON */)
        Camera.DoFade(1500, 1 /* FADE_IN */)

        $.rays_cutscene_flag = 0

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        // ******************************************END OF CUTSCENE********************************

        Streaming.RequestModel(2202 /* safehouse */)

        $.ray1_blip = Blip.AddForCoord(378.0, -443.2, 29.9)

        Text.PrintNow('RM1_1', 5000, 1) //"Check out the witness protection house."

        while (!$.player.isStoppedInArea2D(330.35, -471.43, 375.982, -431.119, false)) {
            await asyncWait(0)
        }

        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Game.SetAllCarsCanBeDamaged(false /* FALSE */)
        Camera.SetFixedPosition(373.29, -444.714, 28.537, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(374.1447, -444.2669, 28.8032, 1 /* INTERPOLATION */)

        await asyncWait(3000)

        $.player.setControl(true /* ON */)
        Hud.SwitchWidescreen(false /* OFF */)
        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
        Game.SetAllCarsCanBeDamaged(true /* TRUE */)
        Camera.Restore()

        Audio.LoadMissionAudio('r1_a' as any)

        $.get_away_car = 0
        $.police_guard1 = 0
        $.police_guard2 = 0

        while (!World.IsProjectileInArea(376.5, -445.2, 28.1, 380.1, -441.2, 31.7)) {
            await asyncWait(0)
            $.get_away_car = $.player.getAmmoInWeapon(11 /* WEAPONTYPE_GRENADE */)
            $.police_guard1 = $.player.getAmmoInWeapon(8 /* WEAPONTYPE_ROCKET */)
            $.get_away_car += $.police_guard1
            if ($.police_guard2 == 0) {
                if ($.get_away_car == 0) {
                    Text.PrintNow('RM1_4', 5000, 1) //"You have run out of grenades! Get some more from ammunation"
                    $.ray1_blip.remove()
                    $.ray1_blip = Blip.AddSpriteForCoord(345.5, -713.5, 26.1, 20 /* RADAR_SPRITE_WEAPON */)
                    $.police_guard2 = 1
                }
            }
            if ($.police_guard2 == 1) {
                if ($.get_away_car > 0) {
                    Text.PrintNow('RM1_5', 5000, 1) //"Get back to the safehouse and torch it"
                    $.ray1_blip.remove()
                    $.ray1_blip = Blip.AddForCoord(378.0, -443.2, 29.9)
                    $.police_guard2 = 0
                }
            }
        }

        World.DestroyProjectilesInArea(376.1, -445.2, 28.1, 380.1, -441.2, 31.7)

        $.player.setControl(false /* OFF */)
        Hud.SwitchWidescreen(true /* ON */)
        Game.SetEveryoneIgnorePlayer($.player, true /* TRUE */)
        Game.SetAllCarsCanBeDamaged(false /* FALSE */)
        Camera.SetFixedPosition(373.29, -444.714, 28.537, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(374.1447, -444.2669, 28.8032, 1 /* INTERPOLATION */)

        await asyncWait(100)

        Fx.AddExplosion(378.0, -443.5, 28.9, 0 /* EXPLOSION_GRENADE */)

        await asyncWait(500)

        $.fire_1 = ScriptFire.Create(377.0, -444.0, 28.1)
        $.fire_2 = ScriptFire.Create(377.0, -443.0, 28.1)
        $.fire_3 = ScriptFire.Create(379.0, -444.0, 28.1)
        $.fire_4 = ScriptFire.Create(379.0, -443.0, 28.1)
        $.fire_1.setAudio(true /* TRUE */)
        $.fire_2.setAudio(false /* FALSE */)
        $.fire_3.setAudio(false /* FALSE */)
        $.fire_4.setAudio(false /* FALSE */)

        await asyncWait(250)

        $.burning_cop = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 378.0584, -444.7376, 28.3)

        await asyncWait(250)

        Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 377.0, -441.6, 28.9, false)
        Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 378.0, -443.3, 28.9, false)

        await asyncWait(800)

        Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -443.35, 30.0, false)

        await asyncWait(500)

        Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -442.7, 30.0, false)
        Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -443.8, 30.0, false)

        await asyncWait(1500)

        $.player.setControl(true /* ON */)
        Hud.SwitchWidescreen(false /* OFF */)
        Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */)
        Game.SetAllCarsCanBeDamaged(true /* TRUE */)
        Camera.RestoreJumpcut()
        Camera.SetBehindPlayer()

        //get_away_car  = 0
        //police_guard1 = 0
        //police_guard2 = 0

        $.get_away_car = Car.Create(88 /* CAR_SENTINEL */, 380.0, -437.5, 21.1) // IN GARAGE
        $.get_away_car.setHeading(90.0)
        $.get_away_car.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */)
        $.get_away_car.setStrong(true /* TRUE */)

        $.police_guard1 = Char.CreateInsideCar($.get_away_car, 4 /* PEDTYPE_CIVMALE */, ped`COP`)
        $.the_witness = Char.CreateAsPassenger($.get_away_car, 4 /* PEDTYPE_CIVMALE */, ped`LI_MAN2`, 1)

        $.police_guard2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 376.5428, -435.1743, 20.0837)
        $.police_guard2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
        $.police_guard2.setObjGotoCoordOnFoot(374.0, -435.1743)

        $.police_guard3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 376.5428, -439.7169, 20.0837)
        $.police_guard3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
        $.police_guard3.setObjGotoCoordOnFoot(374.0, -439.7169)

        $.witsec_garage.deactivate()
        $.witsec_garage.activate()

        $.ray1_blip.remove()

        $.get_away_car.setCruiseSpeed(20.0)
        $.get_away_car.setDrivingStyle(2)
        $.get_away_car.wanderRandomly()
        $.get_away_car.setAvoidLevelTransitions(true /* TRUE */)

        Text.PrintNow('RM1_2', 5000, 1) //"Take out the witness!"

        $.game_timer_start_r1 = Clock.GetGameTimer()

        while (Char.IsStillAlive($.the_witness)) {
            if (!Char.IsDead($.police_guard2)) {
                if (!$.police_guard2.isInArea2D(375.0, -441.5, 386.0, -434.0, false)) {
                    $.police_guard2.setObjKillPlayerOnFoot($.player)
                }
            }
            if (!Char.IsDead($.police_guard3)) {
                if (!$.police_guard3.isInArea2D(375.0, -441.5, 386.0, -434.0, false)) {
                    $.police_guard3.setObjKillPlayerOnFoot($.player)
                }
            }
            if ($.wanted_lvl_flag_r1 == 0) {
                $.game_timer_current_r1 = Clock.GetGameTimer()
                $.game_timer_r1 = $.game_timer_current_r1 - $.game_timer_start_r1
                if ($.game_timer_r1 > 3000) {
                    $.player.alterWantedLevelNoDrop(2)
                    $.ray1_blip = Blip.AddForChar($.the_witness)
                    if (Audio.HasMissionAudioLoaded()) {
                        Audio.PlayMissionAudio()
                    }
                    $.wanted_lvl_flag_r1 = 1
                }
            }
            if ($.wanted_lvl_flag_r1 == 1) {
                if (!$.player.locateAnyMeansChar2D($.the_witness, 160.0, 160.0, false) && !$.the_witness.isOnScreen()) {
                    if ($.mfail_timer_reset_flag == 0) {
                        $.ray1_blip.remove()
                        $.mfail_timer_started = Clock.GetGameTimer()
                        $.mfail_timer_reset_flag = 1
                    }
                    if ($.mfail_timer_reset_flag == 1) {
                        $.mfail_timer_current = Clock.GetGameTimer()
                        $.mfail_timer = $.mfail_timer_current - $.mfail_timer_started
                        if ($.mfail_timer > 4000) {
                            if (!$.the_witness.isOnScreen()) {
                                $.mfail_timer_reset_flag = 0
                                $.the_witness.delete()
                                Text.PrintNow('RM1_3', 5000, 1) //"McAffrey got away!"
                                // SCM GOTO → mission_ray1_failed (not lowered; manual jump required)
                                throw new Error('unresolved GOTO mission_ray1_failed') // fallback: would break linear control flow
                            }
                        }
                    }
                }
                if ($.mfail_timer_reset_flag == 1) {
                    if ($.player.locateAnyMeansChar2D($.the_witness, 160.0, 160.0, false) || $.the_witness.isOnScreen()) {
                        $.ray1_blip.remove()
                        $.ray1_blip = Blip.AddForChar($.the_witness)
                        $.mfail_timer_reset_flag = 0
                    }
                }
            }
            if (!$.the_witness.isInAnyCar()) {
                $.the_witness.setObjFleePlayerOnFootAlways($.player)
            }
            if (!Car.IsDead($.get_away_car)) {
                if ($.the_witness.isInCar($.get_away_car)) {
                    if ($.carlock_flag == 0) {
                        if (!$.get_away_car.locate2D(380.0, -437.5, 40.0, 40.0, false)) {
                            $.get_away_car.lockDoors(1 /* CARLOCK_UNLOCKED */)
                            $.get_away_car.setCruiseSpeed(40.0)
                            $.get_away_car.setStrong(false /* FALSE */)
                            if ($.get_away_car.isHealthGreater(800)) {
                                $.get_away_car.setHealth(800)
                            }
                            $.carlock_flag = 1
                        }
                    }
                    if ($.get_away_car.isUpsidedown() && $.get_away_car.isStopped()) {
                        $.the_witness.setObjLeaveCar($.get_away_car)
                        if (!Char.IsDead($.police_guard1)) {
                            $.police_guard1.setObjKillPlayerOnFoot($.player)
                            $.police_guard1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
                        }
                    }
                    if ($.player.isInCar($.get_away_car)) {
                        $.the_witness.setObjLeaveCar($.get_away_car)
                        if (!Char.IsDead($.police_guard1)) {
                            $.police_guard1.setObjKillPlayerOnFoot($.player)
                            $.police_guard1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
                        }
                    }
                    $.get_away_car_health = $.get_away_car.getHealth()
                    if ($.get_away_car_health < 200) {
                        $.the_witness.setObjLeaveCar($.get_away_car)
                        if (!Char.IsDead($.police_guard1)) {
                            $.police_guard1.setObjKillPlayerOnFoot($.player)
                            $.police_guard1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
                        }
                    }
                    if ($.get_away_car.isStopped()) {
                        if ($.getaway_stuck_flag == 0) {
                            TIMERA = 0
                            $.getaway_stuck_flag = 1
                        }
                        if ($.getaway_stuck_flag == 1) {
                            if (TIMERA > 5000) {
                                $.the_witness.setObjLeaveCar($.get_away_car)
                                if (!Char.IsDead($.police_guard1)) {
                                    $.police_guard1.setObjKillPlayerOnFoot($.player)
                                    $.police_guard1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
                                }
                            }
                        }
                    }
                    if (!$.get_away_car.isStopped()) {
                        $.getaway_stuck_flag = 0
                    }
                    if ($.get_away_car.locate2D($.get_away_car_x, $.get_away_car_y, 3.0, 3.0, false)) {
                        if ($.car_moving_stuck_flag == 0) {
                            TIMERB = 0
                            $.car_moving_stuck_flag = 1
                        }
                        if ($.car_moving_stuck_flag == 1) {
                            if (TIMERB > 8000) {
                                $.the_witness.setObjLeaveCar($.get_away_car)
                                if (!Char.IsDead($.police_guard1)) {
                                    $.police_guard1.setObjKillPlayerOnFoot($.player)
                                    $.police_guard1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000)
                                }
                            }
                        }
                    } else {
                        const _res69 = $.get_away_car.getCoordinates()
                        $.get_away_car_x = _res69.x
                        $.get_away_car_y = _res69.y
                        $.get_away_car_z = _res69.z
                        $.car_moving_stuck_flag = 0
                    }
                }
            }
            await asyncWait(0)
        }

        // SCM GOTO → mission_ray1_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_ray1_passed') // fallback: would break linear control flow
    }

    // Mission Ray 1 failed
}

async function mission_ray1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1)
    return

    // mission Ray 1 passed
}

async function mission_ray1_passed() {
    $.flag_ray_mission1_passed = 1
    Text.PrintWithNumberBig('M_PASS', 30000, 5000, 1)
    $.player.addScore(30000)
    $.player.clearWantedLevel()
    Audio.PlayMissionPassedTune(1)
    Stat.RegisterMissionPassed('RM1')
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT ray_mission2_loop
    return

    // mission cleanup
}

async function mission_cleanup_ray1() {
    $.ray1_blip.remove()

    World.RemoveParticleEffectsInArea(372.0, -449.0, 25.0, 383.0, -436.0, 33.0)

    Streaming.MarkModelAsNoLongerNeeded(ped`LI_MAN2`)
    Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`)
    Streaming.MarkModelAsNoLongerNeeded(2202 /* safehouse */)

    $.flag_player_on_mission = 0
    $.flag_player_on_ray_mission = 0
    World.RemoveAllScriptFires()
    Mission.Finish()
    return
}

export async function ray1() {
    // MissionBoundary
    // *****************************************************************************************
    // ************************************ Ray mission 1  *************************************
    // ************************************ Silent Witness *************************************
    // *****************************************************************************************
    // *** There was a witness to Salvatore's murder, kill him! Go to the witness protection ***
    // *** house and flush him out by throwing a grenade through the window. The witness and ***
    // *** some police escorts run out and leg it in a car, chase them and kill them.		 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_ray1
    await mission_start_ray1()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_ray1_failed
        await mission_ray1_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_ray1
    await mission_cleanup_ray1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT get_away_car police_guard1 police_guard2 the_witness ray1_blip burning_cop
    // VAR_INT police_guard3 fire_1 fire_2 fire_3 fire_4 wanted_lvl_flag_r1 game_timer_r1 game_timer_start_r1
    // VAR_INT car_moving_stuck_flag getaway_stuck_flag get_away_car_health game_timer_current_r1
    // VAR_INT mfail_timer mfail_timer_current mfail_timer_started mfail_timer_reset_flag carlock_flag

    // VAR_FLOAT get_away_car_x get_away_car_y get_away_car_z

    // ****************************************Mission Start************************************
}
