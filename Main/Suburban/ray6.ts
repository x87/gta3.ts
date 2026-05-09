// Generated from Main/Suburban/ray6.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_ray6() {
    $.flag_player_on_mission = 1
    $.flag_player_on_ray_mission = 1
    $.rays_cutscene_flag = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME ray6

    $.time_till_flight = 180000
    $.flag_blip_on_ray = 0
    $.airport_door_flag = 0
    $.door1_closed = 0
    $.door2_closed = 0
    $.total_cia = 0
    $.pickups_created_rm6 = 0
    $.cia_1_flag = 0
    $.cia_2_flag = 0
    $.cia_3_flag = 0
    $.cia_4_flag = 0
    $.cia_5_flag = 0
    $.cia_6_flag = 0
    $.cia_7_flag = 0
    $.cia_8_flag = 0
    $.cia_9_flag = 0
    $.cia_10_flag = 0
    $.cia_11_flag = 0
    $.cia_12_flag = 0
    $.cia_13_flag = 0
    $.cia_14_flag = 0
    $.cia_15_flag = 0
    $.cia_16_flag = 0
    $.cia_17_flag = 0

    // ****************************************START OF CUTSCENE********************************

    //SET_FADING_COLOUR 0 0 0
    //
    //DO_FADE 1500 FADE_OUT
    //
    //IF CAN_PLAYER_START_MISSION player
    //	MAKE_PLAYER_SAFE_FOR_CUTSCENE player
    //ELSE
    //	GOTO mission_ray6_failed
    //ENDIF
    //
    //PRINT_BIG RM6 15000 2 //"Marked Man"

    Streaming.LoadSpecialCharacter(1, $.ray)
    Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH)
    Streaming.LoadSpecialModel(hier`cutobj02`, RAYH)
    Streaming.RequestModel(toilet)

    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(hier`cutobj01`) || !Streaming.HasModelLoaded(hier`cutobj02`) || !Streaming.HasModelLoaded(toilet)) {
        await asyncWait(0)
    }

    World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */)

    $.player.setCoordinates(39.0, -723.5, 22.0)

    $.player.setHeading(90.0)

    Cutscene.Load(r6_mm)

    Cutscene.SetOffset(39.424, -726.677, 21.692)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)

    $.cs_player.setAnim($.player)

    $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`)

    $.cs_ray.setAnim($.ray)

    $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
    $.cs_playerhead.setAnim($.player)

    $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`)
    $.cs_rayhead.setAnim($.ray)

    //SET_PLAYER_COORDINATES player 38.7 -725.7 22.0
    //
    //SET_PLAYER_HEADING player 270.0

    Camera.DoFade(1500, 1 /* FADE_IN */)

    Camera.SetNearClip(0.2)

    Cutscene.Start()

    Streaming.Switch(false /* OFF */)
    World.SwitchRubbish(false /* OFF */)
    // Displays cutscene text

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 1807) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_A, 4000, 1) //"You weren't followed? Good."

    while ($.cs_time < 4920) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_B, 4000, 1) //"This is it, I'm in way over my fucking head and I'm starting to fucking drown here!"

    while ($.cs_time < 8597) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_C, 4000, 1) //"The CIA seem to have a vested interest in SPANK"

    while ($.cs_time < 11482) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_C1, 4000, 1) //"and they don't like us fucking with the Cartel!"

    while ($.cs_time < 14220) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_D, 4000, 1) //"I'm a marked man, so I'm getting out of here."

    while ($.cs_time < 17464) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow(RM6_E, 4000, 1) //"Get me to my flight at the airport and I'll make it worth your while!!"

    while ($.cs_time < 21666) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Camera.DoFade(1500, 0 /* FADE_OUT */)

    while (!Cutscene.HasFinished()) {
        await asyncWait(0)
    }

    World.SwitchRubbish(true /* ON */)

    Text.ClearPrints()

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Cutscene.Clear()

    Camera.DoFade(0, 0 /* FADE_OUT */)
    Camera.SetNearClip(0.9)

    Camera.SetBehindPlayer()

    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
    Streaming.MarkModelAsNoLongerNeeded(toilet)
    Streaming.RequestModel(ped`B_MAN3`)

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasModelLoaded(ped`B_MAN3`)) {
        await asyncWait(0)
    }

    $.ray = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 38.7, -727.7, 22.0)
    $.ray.addArmor(100)

    $.ray.followPlayer($.player)

    Streaming.Switch(true /* ON */)
    Camera.DoFade(1500, 1 /* FADE_IN */)
    $.rays_cutscene_flag = 0

    // ******************************************END OF CUTSCENE********************************

    Hud.DisplayTimer($.time_till_flight)

    $.rays_blip = Blip.AddForCoord(-739.0, -583.0, -100.0)

    if (Char.IsDead($.ray)) {
        Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
        // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
    }

    $.ray.setRunning(true /* TRUE */)

    Text.PrintNow(RM6_5, 15000, 1) //"The CIA have the bridge under surveillance, find another route across."

    while (!$.ray.locateStoppedAnyMeans2D(-738.301, -582.8834, 8.0, 8.0, true)) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
        if ($.time_till_flight < 1) {
            Text.PrintNow(RM6_7, 5000, 1) //"~r~Ray has missed his flight."
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_1_flag == 0) {
                if ($.player.locateAnyMeans2D(-25.8545, -612.5001, 100.0, 100.0, false)) {
                    $.cia_1 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -25.8545, -612.5001, 42.1683)
                    $.cia_1.setHeading(239.6049)
                    $.cia_1.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_1.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_1.setIdle()
                    $.cia_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_1.setStayInSamePlace(true /* TRUE */)
                    $.cia_1.addArmor(100)
                    ++$.total_cia
                    $.cia_1_flag = 1
                }
            }
        }
        if ($.cia_1_flag == 1) {
            if (!$.player.locateAnyMeans2D(-25.8545, -612.5001, 100.0, 100.0, false)) {
                $.cia_1.delete()
                --$.total_cia
                $.cia_1_flag = 0
            }
        }
        if ($.cia_1_flag == 1) {
            if (Char.IsDead($.cia_1)) {
                $.cia_1_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_1, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_1.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_1, 40.0, 40.0, false)) {
                    $.cia_1.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_2_flag == 0) {
                if ($.player.locateAnyMeans2D(-24.0225, -630.3363, 100.0, 100.0, false)) {
                    $.cia_2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -24.0225, -630.3363, 42.1125)
                    $.cia_2.setHeading(293.6046)
                    $.cia_2.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_2.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_2.setIdle()
                    $.cia_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_2.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_2.setStayInSamePlace(true /* TRUE */)
                    $.cia_2.addArmor(100)
                    ++$.total_cia
                    $.cia_2_flag = 1
                }
            }
        }
        if ($.cia_2_flag == 1) {
            if (!$.player.locateAnyMeans2D(-24.0225, -630.3363, 100.0, 100.0, false)) {
                $.cia_2.delete()
                --$.total_cia
                $.cia_2_flag = 0
            }
        }
        if ($.cia_2_flag == 1) {
            if (Char.IsDead($.cia_2)) {
                $.cia_2_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_2, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_2.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_2, 40.0, 40.0, false)) {
                    $.cia_2.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_3_flag == 0) {
                if ($.player.locateAnyMeans2D(-35.1159, -632.8395, 100.0, 100.0, false)) {
                    $.cia_3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -35.1159, -632.8395, 42.4257)
                    $.cia_3.setHeading(255.4109)
                    $.cia_3.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_3.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_3.setIdle()
                    $.cia_3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_3.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_3.setStayInSamePlace(true /* TRUE */)
                    $.cia_3.addArmor(100)
                    ++$.total_cia
                    $.cia_3_flag = 1
                }
            }
        }
        if ($.cia_3_flag == 1) {
            if (!$.player.locateAnyMeans2D(-35.1159, -632.8395, 100.0, 100.0, false)) {
                $.cia_3.delete()
                --$.total_cia
                $.cia_3_flag = 0
            }
        }
        if ($.cia_3_flag == 1) {
            if (Char.IsDead($.cia_3)) {
                $.cia_3_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_3, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_3.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_3, 40.0, 40.0, false)) {
                    $.cia_3.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_4_flag == 0) {
                if ($.player.locateAnyMeans2D(-24.3022, -650.4634, 100.0, 100.0, false)) {
                    $.cia_4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -24.3022, -650.4634, 46.5876)
                    $.cia_4.setHeading(344.2893)
                    $.cia_4.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_4.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_4.setIdle()
                    $.cia_4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_4.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_4.setStayInSamePlace(true /* TRUE */)
                    $.cia_4.addArmor(100)
                    ++$.total_cia
                    $.cia_4_flag = 1
                }
            }
        }
        if ($.cia_4_flag == 1) {
            if (!$.player.locateAnyMeans2D(-24.3022, -650.4634, 100.0, 100.0, false)) {
                $.cia_4.delete()
                --$.total_cia
                $.cia_4_flag = 0
            }
        }
        if ($.cia_4_flag == 1) {
            if (Char.IsDead($.cia_4)) {
                $.cia_4_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_4, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_4.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_4, 40.0, 40.0, false)) {
                    $.cia_4.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_5_flag == 0) {
                if ($.player.locateAnyMeans2D(-217.9545, -630.407, 100.0, 100.0, false)) {
                    $.cia_5 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -217.9545, -630.407, 45.9975)
                    $.cia_5.setHeading(344.2893)
                    $.cia_5.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_5.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_5.setIdle()
                    $.cia_5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_5.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_5.setStayInSamePlace(true /* TRUE */)
                    $.cia_5.addArmor(100)
                    ++$.total_cia
                    $.cia_5_flag = 1
                }
            }
        }
        if ($.cia_5_flag == 1) {
            if (!$.player.locateAnyMeans2D(-217.9545, -630.407, 100.0, 100.0, false)) {
                $.cia_5.delete()
                --$.total_cia
                $.cia_5_flag = 0
            }
        }
        if ($.cia_5_flag == 1) {
            if (Char.IsDead($.cia_5)) {
                $.cia_5_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_5, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_5.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_5, 40.0, 40.0, false)) {
                    $.cia_5.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_6_flag == 0) {
                if ($.player.locateAnyMeans2D(-212.4922, -632.7455, 100.0, 100.0, false)) {
                    $.cia_6 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -212.4922, -632.7455, 45.9514)
                    $.cia_6.setHeading(247.0256)
                    $.cia_6.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_6.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_6.setIdle()
                    $.cia_6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_6.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_6.setStayInSamePlace(true /* TRUE */)
                    $.cia_6.addArmor(100)
                    ++$.total_cia
                    $.cia_6_flag = 1
                }
            }
        }
        if ($.cia_6_flag == 1) {
            if (!$.player.locateAnyMeans2D(-212.4922, -632.7455, 100.0, 100.0, false)) {
                $.cia_6.delete()
                --$.total_cia
                $.cia_6_flag = 0
            }
        }
        if ($.cia_6_flag == 1) {
            if (Char.IsDead($.cia_6)) {
                $.cia_6_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_6, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_6.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_6, 40.0, 40.0, false)) {
                    $.cia_6.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_7_flag == 0) {
                if ($.player.locateAnyMeans2D(-437.0927, -612.5157, 100.0, 100.0, false)) {
                    $.cia_7 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -437.0927, -612.5157, 44.5994)
                    $.cia_7.setHeading(247.0256)
                    $.cia_7.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_7.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_7.setIdle()
                    $.cia_7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_7.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_7.setStayInSamePlace(true /* TRUE */)
                    $.cia_7.addArmor(100)
                    ++$.total_cia
                    $.cia_7_flag = 1
                }
            }
        }
        if ($.cia_7_flag == 1) {
            if (!$.player.locateAnyMeans2D(-437.0927, -612.5157, 100.0, 100.0, false)) {
                $.cia_7.delete()
                --$.total_cia
                $.cia_7_flag = 0
            }
        }
        if ($.cia_7_flag == 1) {
            if (Char.IsDead($.cia_7)) {
                $.cia_7_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_7, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_7.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_7, 40.0, 40.0, false)) {
                    $.cia_7.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_8_flag == 0) {
                if ($.player.locateAnyMeans2D(-534.6777, -631.2995, 100.0, 100.0, false)) {
                    $.cia_8 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -534.6777, -631.2995, 42.277)
                    $.cia_8.setHeading(247.0256)
                    $.cia_8.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_8.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_8.setIdle()
                    $.cia_8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_8.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_8.setStayInSamePlace(true /* TRUE */)
                    $.cia_8.addArmor(100)
                    ++$.total_cia
                    $.cia_8_flag = 1
                }
            }
        }
        if ($.cia_8_flag == 1) {
            if (!$.player.locateAnyMeans2D(-534.6777, -631.2995, 100.0, 100.0, false)) {
                $.cia_8.delete()
                --$.total_cia
                $.cia_8_flag = 0
            }
        }
        if ($.cia_8_flag == 1) {
            if (Char.IsDead($.cia_8)) {
                $.cia_8_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_8, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_8.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_8, 40.0, 40.0, false)) {
                    $.cia_8.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_9_flag == 0) {
                if ($.player.locateAnyMeans2D(-523.4218, -650.3831, 100.0, 100.0, false)) {
                    $.cia_9 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -523.4218, -650.3831, 42.5261)
                    $.cia_9.setHeading(316.7352)
                    $.cia_9.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999)
                    $.cia_9.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_9.setIdle()
                    $.cia_9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_9.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_9.setStayInSamePlace(true /* TRUE */)
                    $.cia_9.addArmor(100)
                    ++$.total_cia
                    $.cia_9_flag = 1
                }
            }
        }
        if ($.cia_9_flag == 1) {
            if (!$.player.locateAnyMeans2D(-523.4218, -650.3831, 100.0, 100.0, false)) {
                $.cia_9.delete()
                --$.total_cia
                $.cia_9_flag = 0
            }
        }
        if ($.cia_9_flag == 1) {
            if (Char.IsDead($.cia_9)) {
                $.cia_9_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_9, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_9.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_9, 40.0, 40.0, false)) {
                    $.cia_9.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_10_flag == 0) {
                if ($.player.locateAnyMeans2D(-628.0785, -498.4106, 100.0, 100.0, false)) {
                    $.cia_10 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -628.0785, -498.4106, 22.3884)
                    $.cia_10.setHeading(76.5552)
                    $.cia_10.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_10.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_10.setIdle()
                    $.cia_10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_10.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_10.setStayInSamePlace(true /* TRUE */)
                    $.cia_10.addArmor(100)
                    ++$.total_cia
                    $.cia_10_flag = 1
                }
            }
        }
        if ($.cia_10_flag == 1) {
            if (!$.player.locateAnyMeans2D(-628.0785, -498.4106, 100.0, 100.0, false)) {
                $.cia_10.delete()
                --$.total_cia
                $.cia_10_flag = 0
            }
        }
        if ($.cia_10_flag == 1) {
            if (Char.IsDead($.cia_10)) {
                $.cia_10_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_10, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_10.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_10, 40.0, 40.0, false)) {
                    $.cia_10.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_11_flag == 0) {
                if ($.player.locateAnyMeans2D(-637.6517, -501.7922, 100.0, 100.0, false)) {
                    $.cia_11 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -637.6517, -501.7922, 22.3455)
                    $.cia_11.setHeading(76.5552)
                    $.cia_11.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_11.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_11.setIdle()
                    $.cia_11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_11.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_11.setStayInSamePlace(true /* TRUE */)
                    $.cia_11.addArmor(100)
                    ++$.total_cia
                    $.cia_11_flag = 1
                }
            }
        }
        if ($.cia_11_flag == 1) {
            if (!$.player.locateAnyMeans2D(-637.6517, -501.7922, 100.0, 100.0, false)) {
                $.cia_11.delete()
                --$.total_cia
                $.cia_11_flag = 0
            }
        }
        if ($.cia_11_flag == 1) {
            if (Char.IsDead($.cia_11)) {
                $.cia_11_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_11, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_11.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_11, 40.0, 40.0, false)) {
                    $.cia_11.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_12_flag == 0) {
                if ($.player.locateAnyMeans2D(-692.3098, -563.0333, 100.0, 100.0, false)) {
                    $.cia_12 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -692.3098, -563.0333, 21.511)
                    $.cia_12.setHeading(344.2857)
                    $.cia_12.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_12.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_12.setIdle()
                    $.cia_12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_12.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_12.setStayInSamePlace(true /* TRUE */)
                    $.cia_12.addArmor(100)
                    ++$.total_cia
                    $.cia_12_flag = 1
                }
            }
        }
        if ($.cia_12_flag == 1) {
            if (!$.player.locateAnyMeans2D(-692.3098, -563.0333, 100.0, 100.0, false)) {
                $.cia_12.delete()
                --$.total_cia
                $.cia_12_flag = 0
            }
        }
        if ($.cia_12_flag == 1) {
            if (Char.IsDead($.cia_12)) {
                $.cia_12_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_12, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_12.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_12, 40.0, 40.0, false)) {
                    $.cia_12.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_13_flag == 0) {
                if ($.player.locateAnyMeans2D(-671.1359, -540.5952, 100.0, 100.0, false)) {
                    $.cia_13 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -671.1359, -540.5952, 22.9211)
                    $.cia_13.setHeading(281.8996)
                    $.cia_13.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_13.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_13.setIdle()
                    $.cia_13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_13.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_13.setStayInSamePlace(true /* TRUE */)
                    $.cia_13.addArmor(100)
                    ++$.total_cia
                    $.cia_13_flag = 1
                }
            }
        }
        if ($.cia_13_flag == 1) {
            if (!$.player.locateAnyMeans2D(-671.1359, -540.5952, 100.0, 100.0, false)) {
                $.cia_13.delete()
                --$.total_cia
                $.cia_13_flag = 0
            }
        }
        if ($.cia_13_flag == 1) {
            if (Char.IsDead($.cia_13)) {
                $.cia_13_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_13, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_13.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_13, 40.0, 40.0, false)) {
                    $.cia_13.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_14_flag == 0) {
                if ($.player.locateAnyMeans2D(-638.4215, -419.262, 100.0, 100.0, false)) {
                    $.cia_14 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -638.4215, -419.262, 17.8198)
                    $.cia_14.setHeading(113.6173)
                    $.cia_14.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_14.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_14.setIdle()
                    $.cia_14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_14.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_14.setStayInSamePlace(true /* TRUE */)
                    $.cia_14.addArmor(100)
                    ++$.total_cia
                    $.cia_14_flag = 1
                }
            }
        }
        if ($.cia_14_flag == 1) {
            if (!$.player.locateAnyMeans2D(-638.4215, -419.262, 100.0, 100.0, false)) {
                $.cia_14.delete()
                --$.total_cia
                $.cia_14_flag = 0
            }
        }
        if ($.cia_14_flag == 1) {
            if (Char.IsDead($.cia_14)) {
                $.cia_14_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_14, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_14.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_14, 40.0, 40.0, false)) {
                    $.cia_14.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_15_flag == 0) {
                if ($.player.locateAnyMeans2D(-655.3353, -404.4556, 100.0, 100.0, false)) {
                    $.cia_15 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -655.3353, -404.4556, 17.8198)
                    $.cia_15.setHeading(191.1247)
                    $.cia_15.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_15.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_15.setIdle()
                    $.cia_15.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_15.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_15.setStayInSamePlace(true /* TRUE */)
                    $.cia_15.addArmor(100)
                    ++$.total_cia
                    $.cia_15_flag = 1
                }
            }
        }
        if ($.cia_15_flag == 1) {
            if (!$.player.locateAnyMeans2D(-655.3353, -404.4556, 100.0, 100.0, false)) {
                $.cia_15.delete()
                --$.total_cia
                $.cia_15_flag = 0
            }
        }
        if ($.cia_15_flag == 1) {
            if (Char.IsDead($.cia_15)) {
                $.cia_15_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_15, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_15.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_15, 40.0, 40.0, false)) {
                    $.cia_15.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_16_flag == 0) {
                if ($.player.locateAnyMeans2D(-677.0261, -425.047, 100.0, 100.0, false)) {
                    $.cia_16 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -677.0261, -425.047, 18.514)
                    $.cia_16.setHeading(265.4145)
                    $.cia_16.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_16.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_16.setIdle()
                    $.cia_16.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_16.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_16.setStayInSamePlace(true /* TRUE */)
                    $.cia_16.addArmor(100)
                    ++$.total_cia
                    $.cia_16_flag = 1
                }
            }
        }
        if ($.cia_16_flag == 1) {
            if (!$.player.locateAnyMeans2D(-677.0261, -425.047, 100.0, 100.0, false)) {
                $.cia_16.delete()
                --$.total_cia
                $.cia_16_flag = 0
            }
        }
        if ($.cia_16_flag == 1) {
            if (Char.IsDead($.cia_16)) {
                $.cia_16_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_16, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_16.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_16, 40.0, 40.0, false)) {
                    $.cia_16.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if ($.total_cia < 16) {
            if ($.cia_17_flag == 0) {
                if ($.player.locateAnyMeans2D(-679.1292, -485.1575, 100.0, 100.0, false)) {
                    $.cia_17 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`, -679.1292, -485.1575, 18.2578)
                    $.cia_17.setHeading(260.2034)
                    $.cia_17.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999)
                    $.cia_17.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.cia_17.setIdle()
                    $.cia_17.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.cia_17.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.cia_17.setStayInSamePlace(true /* TRUE */)
                    $.cia_17.addArmor(100)
                    ++$.total_cia
                    $.cia_17_flag = 1
                }
            }
        }
        if ($.cia_17_flag == 1) {
            if (!$.player.locateAnyMeans2D(-679.1292, -485.1575, 100.0, 100.0, false)) {
                $.cia_17.delete()
                --$.total_cia
                $.cia_17_flag = 0
            }
        }
        if ($.cia_17_flag == 1) {
            if (Char.IsDead($.cia_17)) {
                $.cia_17_flag = 2
            } else {
                if ($.player.locateInCarChar2D($.cia_17, 40.0, 40.0, false)) {
                    $.player_death_car = $.player.storeCarIsIn()
                    $.cia_17.setObjDestroyCar($.player_death_car)
                }
                if ($.player.locateOnFootChar2D($.cia_17, 40.0, 40.0, false)) {
                    $.cia_17.setObjKillPlayerOnFoot($.player)
                }
            }
        }

        ////////

        if (!$.ray.isInPlayersGroup($.player) && $.flag_blip_on_ray == 0) {
            Text.PrintNow(RM6_8, 5000, 1) //"You have left Ray behind, go back and get him."
            $.rays_blip.remove()
            $.rays_blip = Blip.AddForChar($.ray)
            $.flag_blip_on_ray = 1
        }
        if ($.flag_blip_on_ray == 1) {
            if ($.player.locateAnyMeansChar2D($.ray, 8.0, 8.0, false /* FALSE */)) {
                $.ray.followPlayer($.player)
                $.rays_blip.remove()
                $.rays_blip = Blip.AddForCoord(-739.0, -583.0, 8.0)
                $.flag_blip_on_ray = 0
            }
        }
    }

    $.rays_blip.remove()

    Hud.ClearTimer($.time_till_flight)

    $.player.setControl(false /* OFF */)
    Game.SetEveryoneIgnorePlayer($.player, true /* ON */)
    //SET_ALL_CARS_CAN_BE_DAMAGED FALSE

    Hud.SwitchWidescreen(true /* ON */)
    Camera.SetFixedPosition(-732.0104, -571.0955, 14.0482, 0.0, 0.0, 0.0)
    Camera.PointAtChar($.ray, 15 /* FIXED */, 2 /* JUMP_CUT */)

    if (!$.ray.isInAnyCar() || !$.player.isInAnyCar()) {
        $.ray.turnToFacePlayer($.player)
        $.script_controlled_player = $.player.getChar()
        $.script_controlled_player.turnToFaceChar($.ray)
    }

    Audio.LoadMissionAudio(R6_A)

    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
    }

    Audio.PlayMissionAudio()
    Text.PrintNow(RM6_1, 5000, 1) //"Here's a key to a lock-up."

    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
    }

    Audio.LoadMissionAudio(R6_A1)

    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
    }

    Audio.PlayMissionAudio()
    Text.PrintNow(RM6_2, 5000, 1) //"You'll find some cash and some 'supplies' I'd stashed in case things got tight."

    while (!Audio.HasMissionAudioFinished()) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
    }

    Audio.LoadMissionAudio(R6_B)

    while (!Audio.HasMissionAudioLoaded()) {
        await asyncWait(0)
        if (Char.IsDead($.ray)) {
            Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
            // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
        }
    }

    Audio.PlayMissionAudio()
    Text.PrintNow(RM6_3, 5000, 1) //"See y'around."

    if ($.ray.isInAnyCar()) {
        $.ray.leaveGroup()
        $.player_death_car = $.ray.storeCarIsIn()
        $.ray.setObjLeaveCar($.player_death_car)
    }

    while (!($.airport_door_flag == 6) || !($.door1_closed == 0) || !($.door2_closed == 0)) {
        await asyncWait(0)
        if (!($.airport_door_flag == 6)) {
            if (Char.IsDead($.ray)) {
                Text.PrintNow(RM6_6, 5000, 1) //"~r~Ray is dead!"
                // SCM GOTO → mission_ray6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_ray6_failed') // fallback: would break linear control flow
            }
        }
        if ($.airport_door_flag == 0) {
            if (!$.ray.isInAnyCar()) {
                $.ray.leaveGroup()
                $.ray.setObjRunToCoord(-744.7192, -586.4615)
                Camera.SetFixedPosition(-751.3805, -603.0235, 11.4096, 0.0, 0.0, 0.0)
                Camera.PointAtChar($.ray, 15 /* FIXED */, 2 /* JUMP_CUT */)
                $.airport_door_flag = 1
            }
        }
        if ($.airport_door_flag == 1) {
            if ($.ray.locateOnFoot2D(-744.7192, -586.4615, 1.5, 1.5, false)) {
                $.ray.setObjRunToCoord(-757.1901, -587.293)
                $.airport_door_flag = 2
            }
        }
        if ($.airport_door_flag == 2) {
            if ($.ray.locateOnFoot2D(-757.1901, -587.293, 1.5, 1.5, false)) {
                $.ray.setObjRunToCoord(-768.0753, -599.416)
                $.airport_door_flag = 3
            }
        }
        if ($.airport_door_flag == 3) {
            if ($.ray.locateOnFoot2D(-768.0753, -599.416, 1.5, 1.5, false)) {
                $.ray.setObjRunToCoord(-772.6748, -600.3857)
                $.airport_door_flag = 4
            }
        }
        if ($.airport_door_flag > 3 && $.door1_closed == 0) {
            if ($.airportdoor1.slide(-770.414, -597.865, 11.847, 0.1, 0.1, 0.1, false)) {
                $.door1_closed = 1
            }
        }
        if ($.airport_door_flag > 3 && $.door2_closed == 0) {
            if ($.airportdoor2.slide(-770.414, -602.885, 11.847, 0.1, 0.1, 0.1, false)) {
                $.door2_closed = 1
            }
        }
        if ($.airport_door_flag == 4) {
            if ($.ray.locateOnFoot2D(-772.6748, -600.3857, 1.5, 1.5, false)) {
                $.ray.setObjRunToCoord(-772.6249, -604.7247)
                $.airport_door_flag = 5
            }
        }
        if ($.airport_door_flag > 4 && $.door1_closed == 1) {
            if (!$.player.isInArea2D(-773.75, -605.205, -768.76, -595.613, false)) {
                if ($.airportdoor1.slide(-770.414, -599.292, 11.847, 0.1, 0.1, 0.1, false)) {
                    $.door1_closed = 0
                }
            }
        }
        if ($.airport_door_flag > 4 && $.door2_closed == 1) {
            if (!$.player.isInArea2D(-773.75, -605.205, -768.76, -595.613, false)) {
                if ($.airportdoor2.slide(-770.414, -601.369, 11.846, 0.1, 0.1, 0.1, false)) {
                    $.door2_closed = 0
                }
            }
        }
        if ($.airport_door_flag == 5) {
            if ($.ray.locateOnFoot2D(-772.6249, -604.7247, 1.5, 1.5, false)) {
                $.player.setControl(true /* ON */)
                Hud.SwitchWidescreen(false /* OFF */)
                Camera.SetBehindPlayer()
                Camera.RestoreJumpcut()
                $.ray.delete()
                $.airport_door_flag = 6
            }
        }
    }

    Text.PrintNow(RM6_4, 5000, 1) //GO TO THE LOCKUP TO GET YOUR REWARD

    $.rays_blip = Blip.AddForCoord(241.1441, -997.766, 20.9853)

    Streaming.RequestModel(car`PATRIOT`)

    while (!$.player.locateAnyMeans2D(241.1441, -997.766, 50.0, 50.0, false)) {
        await asyncWait(0)
    }

    while (!Streaming.HasModelLoaded(car`PATRIOT`)) {
        await asyncWait(0)
    }

    $.rays_prize_car = Car.Create(89 /* CAR_PATRIOT */, 241.1441, -997.766, 20.9853)
    //SET_CAR_COLOUR 256 256/WHITE
    //SET_CAR_CANT_BE_RESPRAYED
    //SET_CAR_DO_NOT_DELETE	maybe

    $.rays_prize_car.setHeading(270.0)
    $.rays_prize_car.setProofs(true /* TRUE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */)
    $.rays_prize_car.setStrong(true /* TRUE */)
    $.rays_prize_weapon1 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 1000, 244.0506, -993.9206, 21.0)
    $.rays_prize_weapon2 = Pickup.CreateWithAmmo(162 /* WEAPON_FLAME */, 3 /* PICKUP_ONCE */, 1000, 237.3226, -998.5697, 21.0)
    $.rays_prize_weapon3 = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, 25, 243.8931, -995.5624, 21.0)
    $.rays_prize_weapon4 = Pickup.CreateWithAmmo(158 /* WEAPON_SNIPER */, 3 /* PICKUP_ONCE */, 50, 241.2706, -993.679, 21.0)
    $.rays_cash = Pickup.CreateMoney(238.9743, -993.6944, 21.0, 20000)

    $.pickups_created_rm6 = 1

    while (!$.player.locateAnyMeans2D(230.2258, -996.4656, 2.0, 2.0, false)) {
        await asyncWait(0)
    }

    $.rays_prize_garage.open()

    Pager.AddMessage(RM6_666, 140, 666, 1) //"Take care of my armoured Cheetah, I had it modified to be bullet proof. See you in Miami, Ray"

    await asyncWait(13000)

    // SCM GOTO → mission_ray6_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_ray6_passed') // fallback: would break linear control flow

    // Mission Ray 6 failed
}

async function mission_ray6_failed() {
    if ($.pickups_created_rm6 == 1) {
        $.rays_prize_weapon1.remove()
        $.rays_prize_weapon2.remove()
        $.rays_prize_weapon3.remove()
        $.rays_prize_weapon4.remove()
        $.rays_cash.remove()
        $.rays_prize_car.delete()
        $.pickups_created_rm6 = 0
    }
    $.ray.removeElegantly()
    Text.PrintBig(M_FAIL, 5000, 1)
    return

    // mission Ray 6 passed
}

async function mission_ray6_passed() {
    $.flag_ray_mission6_passed = 1
    Text.PrintWithNumberBig(M_PASS, 20000, 2000, 1)
    $.player.addScore(20000)
    $.player.clearWantedLevel()
    Stat.RegisterMissionPassed(RM6)
    Audio.PlayMissionPassedTune(1)
    Stat.PlayerMadeProgress(1)
    $.ray_contact_blip.remove()
    return

    // mission cleanup
}

async function mission_cleanup_ray6() {
    $.flag_player_on_mission = 0
    $.flag_player_on_ray_mission = 0

    if (Object.DoesExist($.airportdoor1)) {
        $.airportdoor1.setCoordinates(-770.414, -599.292, 11.847)
    }

    if (Object.DoesExist($.airportdoor2)) {
        $.airportdoor2.setCoordinates(-770.414, -601.369, 11.846)
    }

    if ($.player.isInArea2D(-773.75, -605.205, -768.76, -595.613, false)) {
        $.player.setCoordinates(-767.8299, -600.3843, 11.0)
        $.player.setHeading(270.0)
    }

    Hud.ClearTimer($.time_till_flight)
    $.rays_blip.remove()

    Streaming.UnloadSpecialCharacter(1)
    Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN3`)
    Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`)
    Streaming.MarkModelAsNoLongerNeeded(car`PATRIOT`)

    Mission.Finish()
    return
}

export async function ray6() {
    // MissionBoundary
    // *****************************************************************************************
    // ************************************   Ray 6    *****************************************
    // ************************************ Marked Man *****************************************
    // *****************************************************************************************
    // *** The CIA is making money from Cartel deals and is concerned that the Yakuza are 	 ***
    // *** hindering the operation. They've discovered that Ray is helping them and they've  ***
    // *** decided to 'rub him out'. Ray is running scared and needs a ride to the airport.  ***
    // *** His contact point is empty, but the player will get a pager message. The player is***
    // *** followed by the C.I.A Ray is dressed in a Hawaiian shirt and has two cases packed.***
    // *** He's booked on a flight (timed mission). The CIA give chase.						 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_ray6
    await mission_start_ray6()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_ray6_failed
        await mission_ray6_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_ray6
    await mission_cleanup_ray6()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT time_till_flight flag_blip_on_ray rays_blip total_cia player_death_car airport_door_flag door1_closed door2_closed
    // VAR_INT cia_1 cia_1_flag
    // VAR_INT cia_2 cia_2_flag
    // VAR_INT cia_3 cia_3_flag
    // VAR_INT cia_4 cia_4_flag
    // VAR_INT cia_5 cia_5_flag
    // VAR_INT cia_6 cia_6_flag
    // VAR_INT cia_7 cia_7_flag
    // VAR_INT cia_8 cia_8_flag
    // VAR_INT cia_9 cia_9_flag
    // VAR_INT cia_10 cia_10_flag
    // VAR_INT cia_11 cia_11_flag
    // VAR_INT cia_12 cia_12_flag
    // VAR_INT cia_13 cia_13_flag
    // VAR_INT cia_14 cia_14_flag
    // VAR_INT cia_15 cia_15_flag
    // VAR_INT cia_16 cia_16_flag
    // VAR_INT cia_17 cia_17_flag
    // VAR_INT rays_prize_car rays_prize_weapon1 rays_prize_weapon2 rays_prize_weapon3 rays_prize_weapon4 rays_cash pickups_created_rm6

    // ****************************************Mission Start************************************
}
