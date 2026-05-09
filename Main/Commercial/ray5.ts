// Generated from Main/Commercial/ray5.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_ray5() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME ray5
    $.flag_player_on_mission = 1
    $.flag_player_on_ray_mission = 1

    $.rays_cutscene_flag = 1

    await asyncWait(0)

    //PRINT_BIG ( RM5 ) 15000 2

    $.flag_bodycast_clear = 0
    $.flag_redalert = 0
    $.flag_random_ray5 = 0
    $.flag_police_trigger = 0

    $.flag_audio = 0

    $.ambulance_health = 0

    // ****************************************START OF CUTSCENE********************************
    //SET_PLAYER_CONTROL player OFF
    //SWITCH_WIDESCREEN ON

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_ray5_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 250 FADE_OUT

  PRINT_BIG RM5 15000 2 //"Plaster Blaster"

  SWITCH_STREAMING OFF
  */

    Streaming.LoadSpecialCharacter(1, $.ray)
    Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH)
    Streaming.LoadSpecialModel(hier`cutobj02`, RAYH)
    Streaming.RequestModel(toilet)

    /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(hier`cutobj02`) || !Streaming.HasModelLoaded(hier`cutobj01`) || !Streaming.HasModelLoaded(toilet)) {
        await asyncWait(0)
    }

    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 47.322 -732.055 22.846 4.0 toilet_cubicle_dr2 FALSE

    Cutscene.Load(r5_pb)

    Streaming.Switch(true /* ON */)

    Cutscene.SetOffset(39.424, -726.677, 21.692)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim($.player)

    $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`)
    $.cs_ray.setAnim($.ray)

    $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
    $.cs_playerhead.setAnim($.player)

    $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`)
    $.cs_rayhead.setAnim($.ray)

    //CREATE_CUTSCENE_OBJECT cut_obj3 cs_ludoor
    //SET_CUTSCENE_ANIM cs_ludoor LUDOOR

    //SET_PLAYER_COORDINATES player 38.7 -725.7 22.0

    //SET_PLAYER_HEADING player 270.0

    World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */)

    $.player.setCoordinates(39.0, -723.5, 22.0)

    $.player.setHeading(90.0)

    Camera.DoFade(1500, 1 /* FADE_IN */)
    //SET_NEAR_CLIP 0.2

    Cutscene.Start()
    World.SwitchRubbish(false /* OFF */)

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 919) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_A', 2000, 1) //"You useless bastard!"

    while ($.cs_time < 3082) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_A1', 4500, 1) //"You messed up! My ass is on the line and you can't hurt a god damned fly."

    while ($.cs_time < 7840) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_B', 3000, 1) //"I paid you good money to kill that witness and he ain't dead!"

    while ($.cs_time < 10868) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_B1', 2000, 1) //"And today he's gonna make a Federal Deposition!"

    while ($.cs_time < 13138) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_C', 4000, 1) //"He's being moved any second now from the Carson General Hospital up in Rockford.

    while ($.cs_time < 17626) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('RM5_D', 2500, 1) //"so go do the job you were paid for!"

    while ($.cs_time < 24333) {
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

    Camera.DoFade(0, 0 /* FADE_OUT */)

    Camera.SetBehindPlayer()

    await asyncWait(500)

    Camera.DoFade(1500, 1 /* FADE_IN */)
    //SET_NEAR_CLIP 0.9

    //WHILE GET_FADING_STATUS
    // WAIT 0
    //ENDWHILE

    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 47.322 -732.055 22.846 4.0 toilet_cubicle_dr2 TRUE

    Streaming.UnloadSpecialCharacter(1)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
    Streaming.MarkModelAsNoLongerNeeded(toilet)

    //SET_PLAYER_CONTROL player ON
    //SWITCH_WIDESCREEN OFF

    Streaming.Switch(true /* ON */)
    World.SwitchRubbish(true /* ON */)

    $.rays_cutscene_flag = 0
    // ******************************************END OF CUTSCENE********************************

    Streaming.RequestModel(car`AMBULANCE`)
    Streaming.RequestModel(car`ENFORCER`)
    Streaming.RequestModel(ped`COP`)
    Streaming.RequestModel(ped`SWAT`)
    while (!Streaming.HasModelLoaded(car`AMBULANCE`) || !Streaming.HasModelLoaded(ped`COP`) || !Streaming.HasModelLoaded(ped`SWAT`) || !Streaming.HasModelLoaded(car`ENFORCER`)) {
        await asyncWait(0)
    }

    // Mission stuff goes here

    $.swatvan1 = Car.Create(110 /* CAR_ENFORCER */, 417.8, -1064.0, 26.4)
    $.swatvan1.setHeading(50.0)
    $.swatvan1.setIdle()
    $.swatvan1.switchSiren(true /* ON */)

    $.swatvan2 = Car.Create(110 /* CAR_ENFORCER */, 335.4, -1185.2, 26.4)
    $.swatvan2.setHeading(150.0)
    $.swatvan2.setIdle()
    $.swatvan2.switchSiren(true /* ON */)

    $.swat1_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 414.6, -1060.3, 26.2)
    $.swat1_rc5.setHeading(0.0)
    $.swat1_rc5.clearThreatSearch()
    $.swat1_rc5.setThreatSearch(0 /* THREAT_PLAYER1 */)
    $.swat1_rc5.giveWeapon(6 /* WEAPONTYPE_M16 */, 100)
    $.swat1_rc5.setCurrentWeapon(6 /* WEAPONTYPE_M16 */)
    $.swat1_rc5.setStayInSamePlace(true /* true */)
    $.swat1_rc5.addArmor(100)

    $.swat2_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 365.0, -1146.7, 23.0)
    $.swat2_rc5.setHeading(270.0)
    $.swat2_rc5.clearThreatSearch()
    $.swat2_rc5.setThreatSearch(0 /* THREAT_PLAYER1 */)
    $.swat2_rc5.giveWeapon(6 /* WEAPONTYPE_M16 */, 100)
    $.swat2_rc5.setCurrentWeapon(6 /* WEAPONTYPE_M16 */)
    $.swat2_rc5.setStayInSamePlace(true /* true */)
    $.swat2_rc5.addArmor(100)

    $.swat3_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 331.5, -1184.1, 26.2)
    $.swat3_rc5.setHeading(100.0)
    $.swat3_rc5.clearThreatSearch()
    $.swat3_rc5.setThreatSearch(0 /* THREAT_PLAYER1 */)
    $.swat3_rc5.giveWeapon(6 /* WEAPONTYPE_M16 */, 100)
    $.swat3_rc5.setCurrentWeapon(6 /* WEAPONTYPE_M16 */)
    $.swat3_rc5.setStayInSamePlace(true /* true */)
    $.swat3_rc5.addArmor(100)

    $.swat4_rc5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`SWAT`, 336.0, -1122.0, 26.0)
    $.swat4_rc5.setHeading(230.0)
    $.swat4_rc5.clearThreatSearch()
    $.swat4_rc5.setThreatSearch(0 /* THREAT_PLAYER1 */)
    $.swat4_rc5.giveWeapon(6 /* WEAPONTYPE_M16 */, 100)
    $.swat4_rc5.setCurrentWeapon(6 /* WEAPONTYPE_M16 */)
    $.swat4_rc5.setStayInSamePlace(true /* true */)
    $.swat4_rc5.addArmor(100)

    Audio.LoadMissionAudio(R5_A)
}

async function amb_generator() {
    $.ambulance_health = 0
    Hud.DisplayCounterWithString($.ambulance_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM')

    $.ambulance_rc5 = Car.Create(99 /* CAR_AMBULANCE */, 387.3, 4.5, 11.4)
    $.blip_ambulance_rc5 = Blip.AddForCar($.ambulance_rc5)
    $.cop_driver = Char.CreateInsideCar($.ambulance_rc5, 6 /* PEDTYPE_COP */, ped`COP`)
    $.ambulance_rc5.lockDoors(2 /* CARLOCK_LOCKED */)
    $.ambulance_rc5.setHeading(166.0)
    $.ambulance_rc5.setCruiseSpeed(20.0)
    $.ambulance_rc5.setDrivingStyle(0)
    $.ambulance_rc5.setOnlyDamagedByPlayer(true /* true */)
    //SWITCH_CAR_SIREN ambulance_rc5 ON

    $.ambulance_health = $.ambulance_rc5.getHealth()
    $.random_ray5 = Math.Random()

    if ($.random_ray5 < 21846) {
        $.ambulance_rc5.gotoCoordinates(-148.93, 18.04, 26.5)
    }

    if ($.random_ray5 > 21845 && $.random_ray5 < 43691) {
        $.ambulance_rc5.gotoCoordinates(402.88, -404.88, 26.5)
        $.flag_random_ray5 = 1
    }

    if ($.random_ray5 > 43690) {
        $.ambulance_rc5.gotoCoordinates(-13.2, -804.7, 26.5)
        $.flag_random_ray5 = 2
    }

    //-----ambulance travels to one of three way points

    while ($.flag_redalert == 0) {
        await asyncWait(0)
        if (!Car.IsDead($.ambulance_rc5)) {
            const _res116 = $.ambulance_rc5.getCoordinates()
            $.amb_rc5_x = _res116.x
            $.amb_rc5_y = _res116.y
            $.amb_rc5_z = _res116.z
            $.ambulance_health = $.ambulance_rc5.getHealth()
            $.ambulance_health = $.ambulance_health * -1
            $.ambulance_health = $.ambulance_health + 1000
            //ambulance_health = ambulance_health / 10
            //ambulance_health = ambulance_health * 5

            if ($.flag_random_ray5 == 0) {
                if ($.ambulance_rc5.locate2D(-148.93, 18.04, 15.0, 15.0, false /* false */)) {
                    $.ambulance_rc5.gotoCoordinates(405.2, -1137.7, 26.0) //---amb goto penultimate waypoint
                    $.flag_random_ray5 = 3
                }
            }
            if ($.flag_random_ray5 == 1) {
                if ($.ambulance_rc5.locate2D(402.88, -404.88, 15.0, 15.0, false /* false */)) {
                    $.ambulance_rc5.gotoCoordinates(405.2, -1137.7, 26.0) //---amb goto penultimate waypoint
                    $.flag_random_ray5 = 3
                }
            }
            if ($.flag_random_ray5 == 2) {
                if ($.ambulance_rc5.locate2D(-13.2, -804.7, 15.0, 15.0, false /* false */)) {
                    $.ambulance_rc5.gotoCoordinates(405.2, -1137.7, 26.0) //---amb goto penultimate waypoint
                    $.flag_random_ray5 = 3
                }
            }
            if ($.flag_random_ray5 == 3) {
                if ($.ambulance_rc5.locate2D(405.2, -1137.7, 15.0, 15.0, false /* false */)) {
                    $.flag_redalert = 1
                    $.ambulance_rc5.gotoCoordinates(362.0, -1138.0, 23.0) //----amb goto final destination
                    $.ambulance_rc5.setCruiseSpeed(15.0)
                    $.ambulance_rc5.setDrivingStyle(0)
                }
            }
            if ($.ambulance_rc5.isOnScreen()) {
                $.ambulance_rc5.setOnlyDamagedByPlayer(false /* false */)
            } else {
                $.ambulance_rc5.setOnlyDamagedByPlayer(true /* true */)
            }
        } else {
            Text.PrintNow('RM5_3', 2500, 1) //---ambulance was decoy!!
            $.ambulance_rc5.markAsNoLongerNeeded()
            $.cop_driver.markAsNoLongerNeeded()
            $.blip_ambulance_rc5.remove()
            Hud.ClearCounter($.ambulance_health)
            $.flag_random_ray5 = 0
            $.flag_police_trigger = 0
            // SCM GOTO → amb_generator (not lowered; manual jump required)
            throw new Error('unresolved GOTO amb_generator') // fallback: would break linear control flow
        }
        if ($.player.locateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, false /* false */)) {
            if (!Car.IsDead($.ambulance_rc5)) {
                Text.PrintNow('RM5_2', 3000, 1)
                $.ambulance_rc5.setCruiseSpeed(28.0)
                $.ambulance_rc5.setDrivingStyle(3)
                $.ambulance_rc5.gotoCoordinates(405.2, -1137.7, 26.0)
                Audio.PlayMissionAudio()
                $.ambulance_rc5.switchSiren(true /* ON */)
                $.player.alterWantedLevelNoDrop(2)
                $.flag_redalert = 1
                $.flag_police_trigger = 1
            }
        }
        // SCM GOSUB swat_team
        await swat_team()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    //------either; player has 'been spotted'-police despatched
    //------OR; ambulance has reached penultimate way point

    while ($.flag_redalert == 1) {
        await asyncWait(0)
        if (!Car.IsDead($.ambulance_rc5)) {
            $.ambulance_health = $.ambulance_rc5.getHealth()
            $.ambulance_health = $.ambulance_health * -1
            $.ambulance_health = $.ambulance_health + 1000
            //ambulance_health = ambulance_health / 10
            //ambulance_health = ambulance_health * 5

            if (!$.ambulance_rc5.isHealthGreater(900)) {
                //OR IS_CAR_STUCK_ON_ROOF ambulance_rc5
                // SCM GOTO → injured_cop_bailout (not lowered; manual jump required)
                throw new Error('unresolved GOTO injured_cop_bailout') // fallback: would break linear control flow
            }
            if ($.ambulance_rc5.locate2D(405.2, -1137.7, 15.0, 15.0, false /* false */)) {
                $.ambulance_rc5.setCruiseSpeed(10.0)
                $.flag_redalert = 2
                $.ambulance_rc5.gotoCoordinates(362.0, -1138.0, 23.0) //----amb goto final destination
                $.ambulance_rc5.setCruiseSpeed(15.0)
                $.ambulance_rc5.setDrivingStyle(0)
            }
            if ($.ambulance_rc5.isOnScreen()) {
                $.ambulance_rc5.setOnlyDamagedByPlayer(false /* false */)
            } else {
                $.ambulance_rc5.setOnlyDamagedByPlayer(true /* true */)
            }
        } else {
            Text.PrintNow('RM5_3', 2500, 1) //---ambulance was decoy!!
            $.ambulance_rc5.markAsNoLongerNeeded()
            $.cop_driver.markAsNoLongerNeeded()
            $.blip_ambulance_rc5.remove()
            Hud.ClearCounter($.ambulance_health)
            $.flag_random_ray5 = 0
            $.flag_police_trigger = 0
            // SCM GOTO → amb_generator (not lowered; manual jump required)
            throw new Error('unresolved GOTO amb_generator') // fallback: would break linear control flow
        }
        if ($.player.locateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, false /* false */) && $.flag_police_trigger == 0) {
            if (!Car.IsDead($.ambulance_rc5)) {
                Text.PrintNow('RM5_2', 3000, 1)
                $.ambulance_rc5.setCruiseSpeed(28.0)
                $.ambulance_rc5.setDrivingStyle(3)
                $.ambulance_rc5.gotoCoordinates(405.2, -1137.7, 26.0)
                Audio.PlayMissionAudio()
                $.ambulance_rc5.switchSiren(true /* ON */)
                $.player.alterWantedLevelNoDrop(2)
                $.flag_redalert = 1
                $.flag_police_trigger = 1
            }
        }
        // SCM GOSUB swat_team
        await swat_team()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    //----ambulance has reached penultimate waypoint

    while ($.flag_redalert == 2) {
        await asyncWait(0)
        if (!Car.IsDead($.ambulance_rc5)) {
            $.ambulance_health = $.ambulance_rc5.getHealth()
            $.ambulance_health = $.ambulance_health * -1
            $.ambulance_health = $.ambulance_health + 1000
            //ambulance_health = ambulance_health / 10
            //ambulance_health = ambulance_health * 5

            if ($.ambulance_rc5.locate2D(362.0, -1138.0, 5.0, 5.0, true /* true */)) {
                $.flag_redalert = 3
                $.ambulance_rc5.setCruiseSpeed(0.0)
                $.ambulance_rc5.setDrivingStyle(0)
                $.ambulance_rc5.switchSiren(false /* OFF */)
                $.ambulance_rc5.setIdle() //---ambulance has reached destination without bailout -mission failed
            }
            if (!$.ambulance_rc5.isHealthGreater(900)) {
                //OR IS_CAR_STUCK_ON_ROOF ambulance_rc5
                // SCM GOTO → injured_cop_bailout (not lowered; manual jump required)
                throw new Error('unresolved GOTO injured_cop_bailout') // fallback: would break linear control flow
            }
            if ($.ambulance_rc5.isOnScreen()) {
                $.ambulance_rc5.setOnlyDamagedByPlayer(false /* false */)
            } else {
                $.ambulance_rc5.setOnlyDamagedByPlayer(true /* true */)
            }
        } else {
            Text.PrintNow('RM5_3', 2500, 1) //---ambulance was decoy!!
            $.ambulance_rc5.markAsNoLongerNeeded()
            $.cop_driver.markAsNoLongerNeeded()
            $.blip_ambulance_rc5.remove()
            Hud.ClearCounter($.ambulance_health)
            $.flag_random_ray5 = 0
            $.flag_redalert = 0
            // SCM GOTO → amb_generator (not lowered; manual jump required)
            throw new Error('unresolved GOTO amb_generator') // fallback: would break linear control flow
        }
        if ($.player.locateAnyMeans2D($.amb_rc5_x, $.amb_rc5_y, 25.0, 25.0, false /* false */) && $.flag_police_trigger == 0) {
            Text.PrintNow('RM5_2', 3000, 1)
            $.player.alterWantedLevelNoDrop(2)
            $.flag_police_trigger = 1
        }
        // SCM GOSUB swat_team
        await swat_team()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOTO → mission_ray5_failed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_ray5_failed') // fallback: would break linear control flow
}

async function injured_cop_bailout() {
    $.blip_ambulance_rc5.remove()
    const _res117 = $.ambulance_rc5.getCoordinates()
    $.amb_rc5_x = _res117.x
    $.amb_rc5_y = _res117.y
    $.amb_rc5_z = _res117.z
    $.amb_rc5_z = $.amb_rc5_z + 2.5
    $.injured_cop_rc5 = ScriptObject.Create(1395 /* bodycast */, $.amb_rc5_x, $.amb_rc5_y, $.amb_rc5_z)
    $.injured_cop_rc5.setCollision(true /* TRUE */)
    $.injured_cop_rc5.setDynamic(true /* true */)
    $.injured_cop_rc5.makeTargetable()
    $.injured_cop_rc5.addToVelocity(0.0, 0.0, 5.0)
    $.blip_injured_cop_rc5 = Blip.AddForObject($.injured_cop_rc5)
    $.player.alterWantedLevelNoDrop(3)
    Hud.ClearCounter($.ambulance_health)

    /*
  WHILE flag_bodycast_clear = 0
  WAIT 0
  GET_OBJECT_COORDINATES injured_cop_rc5 ic_x ic_y ic_z
  IF NOT IS_CAR_DEAD ambulance_rc5
  IF NOT LOCATE_CAR_3D  ambulance_rc5 ic_x ic_y ic_z 5.0 5.0 5.0 false
  SET_OBJECT_COLLISION injured_cop_rc5 TRUE
  flag_bodycast_clear = 1
  ENDIF
  ELSE
  SET_OBJECT_COLLISION injured_cop_rc5 TRUE
  flag_bodycast_clear = 1
  ENDIF
  ENDWHILE
  */

    Hud.DisplayCounterWithString($.bodycast_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM')

    Text.PrintNow('RM5_6', 3000, 1)

    while (!$.injured_cop_rc5.hasBeenDamaged()) {
        await asyncWait(0)
        const _res118 = $.injured_cop_rc5.getCoordinates()
        $.ic_x = _res118.x
        $.ic_y = _res118.y
        $.ic_z = _res118.z
        Audio.SetMissionAudioPosition($.ic_x, $.ic_y, $.ic_z)
        $.bodycast_health = ScriptObject.GetBodyCastHealth()
        $.bodycast_health = $.bodycast_health * -1
        $.bodycast_health = $.bodycast_health + 1000
        $.bodycast_health = $.bodycast_health / 10

        if ($.flag_audio == 0) {
            Audio.PlayMissionAudio()
        }
        if (Audio.HasMissionAudioFinished()) {
            $.flag_audio = 1
        }

        //zed_value =# ic_z
        //PRINT_WITH_NUMBER_NOW ( Z ) zed_value 1000 1

        if ($.player.isCurrentWeapon(2 /* WEAPONTYPE_PISTOL */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_4', 500, 1) //bullets won't get through that armoured plaster!!
        }
        if ($.player.isCurrentWeapon(3 /* WEAPONTYPE_UZI */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_4', 500, 1)
        }
        if ($.player.isCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_4', 500, 1)
        }
        if ($.player.isCurrentWeapon(6 /* WEAPONTYPE_M16 */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_4', 500, 1)
        }
        if ($.player.isCurrentWeapon(5 /* WEAPONTYPE_CHAINGUN */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_4', 500, 1)
        }
        if ($.player.isCurrentWeapon(9 /* WEAPONTYPE_FLAMETHROWER */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_5', 500, 1) //That Plaster's flame retardent!!
        }
        if ($.player.isCurrentWeapon(10 /* WEAPONTYPE_MOLOTOV */) && !$.player.isInAnyCar()) {
            Text.Print('RM5_5', 500, 1)
        }
        if ($.ic_z < 1.0) {
            Text.PrintNow('RM5_8', 3000, 1) //witness has drowned!!
            // SCM GOTO → quentin (not lowered; manual jump required)
            throw new Error('unresolved GOTO quentin') // fallback: would break linear control flow
        }
        // SCM GOSUB swat_team
        await swat_team()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
}

async function quentin() {
    $.blip_injured_cop_rc5.remove()

    // SCM GOTO → mission_ray5_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_ray5_passed') // fallback: would break linear control flow

    // Mission Ray5 failed
}

async function mission_ray5_failed() {
    Text.PrintNow('RM5_7', 3000, 1) //Witness has been delivered!!

    Text.PrintBig('M_FAIL', 2000, 1)

    return

    // mission Ray5 passed
}

async function mission_ray5_passed() {
    $.flag_ray_mission5_passed = 1
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.clearWantedLevel()
    $.player.addScore(10000)
    Stat.RegisterMissionPassed('RM5')
    Stat.PlayerMadeProgress(1)

    if (!($.flag_love_mission3_passed == 1)) {
        $.ray_contact_blip.remove()
    } else {
        // START_NEW_SCRIPT ray_mission6_loop
    }

    return

    // mission cleanup
}

async function mission_cleanup_ray5() {
    Hud.ClearCounter($.ambulance_health)
    Hud.ClearCounter($.bodycast_health)

    $.flag_player_on_mission = 0
    $.flag_player_on_ray_mission = 0

    $.injured_cop_rc5.markAsNoLongerNeeded()

    $.swat1_rc5.markAsNoLongerNeeded()
    $.swat2_rc5.markAsNoLongerNeeded()
    $.swat3_rc5.markAsNoLongerNeeded()
    $.swat4_rc5.markAsNoLongerNeeded()
    $.cop_driver.markAsNoLongerNeeded()

    Streaming.MarkModelAsNoLongerNeeded(car`AMBULANCE`)
    Streaming.MarkModelAsNoLongerNeeded(ped`SWAT`)
    Streaming.MarkModelAsNoLongerNeeded(car`ENFORCER`)
    $.blip_ambulance_rc5.remove()

    Mission.Finish()
    return

    //------GOSUBS------------------------------
}

async function swat_team() {
    if ($.player.isInArea3D(366.0, -1146.0, 21.0, 396.0, -1134.0, 28.0, false /* false */)) {
        if (!Char.IsDead($.swat1_rc5)) {
            $.swat1_rc5.setObjKillPlayerAnyMeans($.player)
        }
        if (!Char.IsDead($.swat2_rc5)) {
            $.swat2_rc5.setObjKillPlayerAnyMeans($.player)
        }
    }
    if ($.player.isInArea3D(318.0, -1170.0, 22.0, 366.0, -1120.0, 25.0, false /* false */)) {
        if (!Char.IsDead($.swat1_rc5)) {
            $.swat1_rc5.setObjKillPlayerAnyMeans($.player)
        }
        if (!Char.IsDead($.swat2_rc5)) {
            $.swat2_rc5.setObjKillPlayerAnyMeans($.player)
        }
        if (!Char.IsDead($.swat3_rc5)) {
            $.swat3_rc5.setObjKillPlayerAnyMeans($.player)
        }
        if (!Char.IsDead($.swat4_rc5)) {
            $.swat4_rc5.setObjKillPlayerAnyMeans($.player)
        }
    }

    return
}

export async function ray5() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Ray mission 5********************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_ray5
    await mission_start_ray5()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_ray5_failed
        await mission_ray5_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_ray5
    await mission_cleanup_ray5()
    // fallback if label was not emitted as async function: no-op continues linearly
    // MissionBoundary

    // Variables for mission

    // VAR_INT ambulance_rc5 ambulance_health flag_redalert

    // VAR_INT injured_cop_rc5 cop_driver bodycast_health
    // VAR_INT swat1_rc5 swat2_rc5 swat3_rc5 swat4_rc5
    // VAR_INT swatvan1 swatvan2
    // VAR_INT blip_ambulance_rc5 flag_bodycast_clear flag_police_trigger

    // VAR_INT blip_injured_cop_rc5 zed_value random_ray5 flag_random_ray5

    // VAR_FLOAT amb_rc5_x amb_rc5_y amb_rc5_z
    // VAR_FLOAT ic_x ic_y ic_z

    // ****************************************Mission Start************************************
}
