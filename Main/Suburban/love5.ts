// Generated from Main/Suburban/love5.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_love5() {
    $.flag_player_on_mission = 1
    $.flag_player_on_love_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME love5

    $.car1_attacking_flag = 0
    $.car2_attacking_flag = 0
    $.car3_attacking_flag = 0
    $.car4_attacking_flag = 0
    $.escort_truck_flag = 0
    $.colombian_1_flag = 0
    $.colombian_2_flag = 0
    $.colombian_3_flag = 0
    $.colombian_4_flag = 0
    $.dummy_health = 2000

    // ****************************************START OF CUTSCENE********************************

    //SET_FADING_COLOUR 0 0 0
    //
    //DO_FADE 1500 FADE_OUT
    //
    //IF CAN_PLAYER_START_MISSION player
    //	MAKE_PLAYER_SAFE_FOR_CUTSCENE player
    //ELSE
    //	GOTO mission_love5_failed
    //ENDIF
    //
    //PRINT_BIG LOVE5 15000 2

    Streaming.LoadSpecialCharacter(1, 'love')
    Streaming.RequestModel(1731 /* tshrorckgrdn */)
    Streaming.RequestModel(1732 /* tshrorckgrdn_alfas */)
    Streaming.LoadSpecialModel(hier`cutobj01`, 'LOVEH')

    Streaming.Switch(false /* OFF */)

    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE

    Streaming.LoadAllModelsNow()

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasModelLoaded(1731 /* tshrorckgrdn */) ||
        !Streaming.HasModelLoaded(1732 /* tshrorckgrdn_alfas */) ||
        !Streaming.HasModelLoaded(hier`cutobj01`)
    ) {
        await asyncWait(0)
    }

    Cutscene.Load('D5_ES')

    Cutscene.SetOffset(85.2162, -1532.9093, 243.5422)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim('player')

    $.cs_love = CutsceneObject.Create(ped`SPECIAL1`)
    $.cs_love.setAnim('love')

    $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`)
    $.cs_lovehead.setAnim('love')

    World.ClearArea(82.44, -1548.49, 28.0, 2.0, true /* TRUE */)

    $.player.setCoordinates(82.44, -1548.49, 28.0)

    $.player.setHeading(90.0)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    Cutscene.Start()

    World.SwitchRubbish(false /* OFF */)

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 1324) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE5_A', 5000, 1) //"You are proving to be a safe investment, a rare thing these days."

    while ($.cs_time < 6061) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.Print('LOVE5_B', 5000, 1) //"My Oriental friend will need an escort while he takes my latest acquisition to be authenticated."

    while ($.cs_time < 10660) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.Print('LOVE5_C', 5000, 1) //"I want you to follow him, and make sure he and my package get to Pike Creek unharmed."

    while ($.cs_time < 17500) {
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

    Camera.SetBehindPlayer()

    Streaming.UnloadSpecialCharacter(1)
    Streaming.MarkModelAsNoLongerNeeded(1731 /* tshrorckgrdn */)
    Streaming.MarkModelAsNoLongerNeeded(1732 /* tshrorckgrdn_alfas */)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)

    Streaming.RequestModel(car`SECURICAR`)
    Streaming.RequestModel(car`COLUMB`)
    Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)
    Streaming.LoadSpecialCharacter(2, 'OJG')
    Streaming.LoadSpecialCharacter(3, 'S_GUARD')

    Streaming.LoadAllModelsNow()

    while (
        !Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`) ||
        !Streaming.HasModelLoaded(car`COLUMB`) ||
        !Streaming.HasSpecialCharacterLoaded(2) ||
        !Streaming.HasSpecialCharacterLoaded(3) ||
        !Streaming.HasModelLoaded(car`SECURICAR`)
    ) {
        await asyncWait(0)
    }

    Streaming.Switch(true /* ON */)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    // ******************************************END OF CUTSCENE********************************

    $.escort_truck = Car.Create(111 /* CAR_SECURICAR */, 83.6, -1592.3, 25.1)
    $.escort_truck.changeColor(0, 0)

    if (Car.IsDead($.escort_truck)) {
        Text.PrintNow('LOVE5_5', 5000, 1) //"You failed to protect the truck!"
        // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_love5_failed') // fallback: would break linear control flow
    }
    $.truck_driver = Char.CreateInsideCar($.escort_truck, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL3`)
    $.ojg = Char.CreateAsPassenger($.escort_truck, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 0)
    $.truck_driver.setCantBeDraggedOut(true /* TRUE */)
    $.escort_truck.lockDoors(2 /* CARLOCK_LOCKED */)
    $.escort_truck.setHeading(180.0)
    $.escort_truck.setDrivingStyle(2)
    $.escort_truck.setCruiseSpeed(18.0)
    $.escort_truck.setIdle()
    $.escort_truck.setStrong(true /* TRUE */)
    $.escort_truck.setProofs(false /* FALSE */, false /* FALSE */, true /* TRUE */, false /* FALSE */, false /* FALSE */)
    //SET_CAR_HEALTH escort_truck 2000

    $.escort_truck_blip = Blip.AddForCar($.escort_truck)

    $.tank_weapon = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 600, 77.6708, -1589.0255, 27.5)

    while (!$.player.locateInCarCar2D($.escort_truck, 15.0, 15.0, false) || !Camera.IsPointOnScreen(83.6, -1592.3, 25.1, 4.0)) {
        await asyncWait(0)
        if (Car.IsDead($.escort_truck)) {
            Text.PrintNow('LOVE5_5', 5000, 1) //"You failed to protect the truck!"
            // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love5_failed') // fallback: would break linear control flow
        }
        if ($.player.locateOnFootCar2D($.escort_truck, 15.0, 15.0, false)) {
            Text.PrintNow('LOVE5_2', 5000, 1) //"You'll need a car!"
        }
        if ($.player.locateOnFootCar2D($.escort_truck, 1.0, 1.0, false) && $.player.isStopped()) {
            // SCM GOTO → car_goto_bit (not lowered; manual jump required)
            throw new Error('unresolved GOTO car_goto_bit') // fallback: would break linear control flow
        }
    }
}

async function car_goto_bit() {
    $.escort_truck.gotoCoordinates(173.4898, 76.3099, 14.9781)

    Text.PrintNow('LOVE5_1', 5000, 1) //"Lets go!"

    $.escort_truck_health = $.escort_truck.getHealth()
    if ($.dummy_health > 499) {
        if ($.escort_truck_health < 500) {
            $.escort_truck_health += 500
            $.escort_truck.setHealth($.escort_truck_health)
            $.dummy_health -= 500
        }
    }
    $.escort_truck_health = $.escort_truck.getHealth()
    $.escort_truck_health += $.dummy_health
    $.escort_truck_health = $.escort_truck_health / 3
    $.escort_truck_health = $.escort_truck_health - 250
    $.escort_truck_health = $.escort_truck_health * 100
    $.escort_truck_health = $.escort_truck_health / 750
    $.escort_truck_health2 = $.escort_truck_health
    $.escort_truck_health = 100 - $.escort_truck_health2
    Hud.DisplayCounterWithString($.escort_truck_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM')

    while (!($.escort_truck_flag == 11)) {
        await asyncWait(0)
        if (Car.IsDead($.escort_truck)) {
            Text.PrintNow('LOVE5_5', 5000, 1) //"You failed to protect the truck!"
            // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love5_failed') // fallback: would break linear control flow
        } else {
            if ($.escort_truck.isUpsidedown() && $.escort_truck.isStopped()) {
                // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love5_failed') // fallback: would break linear control flow
            }
            //    	IF NOT LOCATE_PLAYER_ANY_MEANS_CAR_2D player escort_truck 220.0 220.0 0
            //    		PRINT_NOW LOVE5_4 500 1 //"Get back to the truck and defend it!"
            //    		GET_CAR_HEALTH escort_truck escort_truck_health
            //    		escort_truck_health -= 3
            //			IF escort_truck_health < 1
            //				escort_truck_health = 1
            //				EXPLODE_CAR escort_truck
            //			ELSE
            //    			SET_CAR_HEALTH escort_truck escort_truck_health
            //			ENDIF
            //		ENDIF
        }
        $.escort_truck_health = $.escort_truck.getHealth()
        if ($.dummy_health > 499) {
            if ($.escort_truck_health < 500) {
                $.escort_truck_health += 500
                $.escort_truck.setHealth($.escort_truck_health)
                $.dummy_health -= 500
            }
        }
        $.escort_truck_health = $.escort_truck.getHealth()
        $.escort_truck_health += $.dummy_health
        $.escort_truck_health = $.escort_truck_health / 3
        $.escort_truck_health = $.escort_truck_health - 250
        $.escort_truck_health = $.escort_truck_health * 100
        $.escort_truck_health = $.escort_truck_health / 750
        $.escort_truck_health2 = $.escort_truck_health
        $.escort_truck_health = 100 - $.escort_truck_health2
        if ($.escort_truck_health > 100) {
            $.escort_truck_health = 100
        }
        if ($.escort_truck_flag == 0) {
            if ($.escort_truck.locate2D(173.4898, 76.3099, 10.0, 10.0, false)) {
                $.escort_truck.gotoCoordinates(559.5281, 88.7876, -21.0725)
                $.escort_truck_flag = 1
            }
        }
        if ($.escort_truck_flag == 1) {
            if ($.escort_truck.locate2D(302.0435, -12.4083, 10.0, 10.0, false)) {
                $.escort_truck.setIgnoreLevelTransitions(true /* TRUE */)
                if (!Char.IsDead($.ojg)) {
                    $.ojg.setStaysInCurrentLevel(false /* FALSE */)
                }
                if (!Char.IsDead($.truck_driver)) {
                    $.truck_driver.setStaysInCurrentLevel(false /* FALSE */)
                }
                $.escort_truck.setDrivingStyle(1)
                World.SetCarDensityMultiplier(0.5)
            }
        }
        if ($.escort_truck_flag == 1) {
            if ($.escort_truck.locate2D(559.5281, 88.7876, 10.0, 10.0, false)) {
                $.escort_truck.gotoCoordinates(-320.4337, 87.1647, -21.0725)
                $.escort_truck_flag = 2
            }
        }
        if ($.escort_truck_flag == 2) {
            if ($.escort_truck.locate2D(-320.4337, 87.1647, 10.0, 10.0, false)) {
                $.escort_truck.gotoCoordinates(-573.8346, -426.376, -5.76)
                $.escort_truck_flag = 3
            }
        }
        if ($.escort_truck_flag == 3) {
            if ($.escort_truck.locate2D(-573.8346, -426.376, 10.0, 10.0, false)) {
                if (!Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                    Text.PrintNow('LOVE5_3', 200, 1) //"Go ahead to scout the tunnel exit!"
                } else {
                    $.escort_truck_flag = 4
                }
            }
        }
        if ($.escort_truck_flag == 4) {
            if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                $.escort_truck.gotoCoordinates(-634.9936, -491.1914, 16.1379)
                $.escort_truck_flag = 5
            }
        }
        if ($.escort_truck_flag == 5) {
            if ($.escort_truck.locate2D(-634.9936, -491.1914, 10.0, 10.0, false)) {
                $.escort_truck.gotoCoordinates(-864.45, -282.45, 32.5)
                $.escort_truck.setIgnoreLevelTransitions(false /* FALSE */)
                $.escort_truck.setStaysInCurrentLevel(true /* TRUE */)
                if (!Char.IsDead($.ojg)) {
                    $.ojg.setStaysInCurrentLevel(true /* TRUE */)
                }
                if (!Char.IsDead($.truck_driver)) {
                    $.truck_driver.setStaysInCurrentLevel(true /* TRUE */)
                }
                $.escort_truck.setDrivingStyle(2)
                World.SetCarDensityMultiplier(1.0)
                $.escort_truck_flag = 6
            }
        }
        if ($.escort_truck_flag == 6) {
            if ($.escort_truck.locate2D(-864.45, -282.45, 10.0, 10.0, false)) {
                $.escort_truck.gotoCoordinates(-975.167, -74.5367, 36.9677)
                $.escort_truck_flag = 7
            }
        }
        if ($.escort_truck_flag == 7) {
            if ($.escort_truck.locate2D(-975.167, -74.5367, 10.0, 10.0, false)) {
                // SCM GOSUB call_off_the_attackers
                await call_off_the_attackers()
                // fallback if label was not emitted as async function: no-op continues linearly
                $.escort_truck.gotoCoordinatesAccurate(-1044.0, -73.4361, 37.8615) // inside garage
                $.escort_truck.setCruiseSpeed(12.0)
                $.escort_truck_flag = 8
            }
        }
        if ($.escort_truck_flag == 8) {
            if ($.escort_truck.isInArea2D(-1022.11, -78.28, -1037.21, -69.17, false)) {
                $.escort_garage.open()
                $.escort_truck.setCruiseSpeed(5.0)
                $.escort_truck_flag = 9
            }
        }
        if ($.escort_truck_flag == 9) {
            if ($.escort_truck.isStoppedInArea2D(-1049.17, -77.47, -1037.21, -69.17, false)) {
                if (!$.player.isInArea2D(-1049.17, -77.47, -1037.21, -69.17, false)) {
                    $.escort_garage.close()
                    $.escort_truck_flag = 10
                }
            }
        }
        if ($.escort_truck_flag == 10) {
            if ($.player.isInArea2D(-1049.17, -77.47, -1037.21, -69.17, false)) {
                $.escort_garage.open()
                $.escort_truck_flag = 9
            }
            if ($.escort_garage.isClosed()) {
                $.escort_truck.delete()
                // SCM GOTO → mission_love5_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love5_passed') // fallback: would break linear control flow
                $.escort_truck_flag = 11
            }
        }

        ////////
        if ($.escort_truck_flag < 9) {
            if ($.colombian_1_flag == 0) {
                if ($.player.locateAnyMeans2D(-13.0, -464.0, 220.0, 220.0, false) || $.escort_truck.locate2D(-13.0, -464.0, 220.0, 220.0, false)) {
                    $.colombian_1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -13.0, -464.0, 17.0)
                    $.colombian_1.setHeading(270.0)
                    $.colombian_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_1.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_1.setIdle()
                    $.colombian_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_1.setStayInSamePlace(true /* TRUE */)
                    $.colombian_1_flag = 1
                }
            }
            if ($.colombian_1_flag == 1) {
                if (!$.player.locateAnyMeans2D(-13.0, -464.0, 220.0, 220.0, false) || !$.escort_truck.locate2D(-13.0, -464.0, 220.0, 220.0, false)) {
                    $.colombian_1.delete()
                    $.colombian_1_flag = 0
                }
            }
            if ($.colombian_1_flag == 1) {
                if (Char.IsDead($.colombian_1)) {
                    $.colombian_1_flag = 2
                } else {
                    if ($.colombian_1.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_1.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_2_flag == 0) {
                if ($.player.locateAnyMeans2D(3.7, -467.7, 220.0, 220.0, false) || $.escort_truck.locate2D(3.7, -467.7, 220.0, 220.0, false)) {
                    $.colombian_2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 3.7, -467.7, 17.0)
                    $.colombian_2.setHeading(85.0)
                    $.colombian_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_2.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_2.setIdle()
                    $.colombian_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_2.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_2.setStayInSamePlace(true /* TRUE */)
                    $.colombian_2_flag = 1
                }
            }
            if ($.colombian_2_flag == 1) {
                if (!$.player.locateAnyMeans2D(3.7, -467.7, 220.0, 220.0, false) || !$.escort_truck.locate2D(3.7, -467.7, 220.0, 220.0, false)) {
                    $.colombian_2.delete()
                    $.colombian_2_flag = 0
                }
            }
            if ($.colombian_2_flag == 1) {
                if (Char.IsDead($.colombian_2)) {
                    $.colombian_2_flag = 2
                } else {
                    if ($.colombian_2.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_2.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_3_flag == 0) {
                if ($.player.locateAnyMeans2D(124.4, -111.2, 220.0, 220.0, false) || $.escort_truck.locate2D(124.4, -111.2, 220.0, 220.0, false)) {
                    $.colombian_3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 124.4, -111.2, 16.0)
                    $.colombian_3.setHeading(85.0)
                    $.colombian_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_3.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_3.setIdle()
                    $.colombian_3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_3.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_3.setStayInSamePlace(true /* TRUE */)
                    $.colombian_3_flag = 1
                }
            }
            if ($.colombian_3_flag == 1) {
                if (!$.player.locateAnyMeans2D(124.4, -111.2, 220.0, 220.0, false) || !$.escort_truck.locate2D(124.4, -111.2, 220.0, 220.0, false)) {
                    $.colombian_3.delete()
                    $.colombian_3_flag = 0
                }
            }
            if ($.colombian_3_flag == 1) {
                if (Char.IsDead($.colombian_3)) {
                    $.colombian_3_flag = 2
                } else {
                    if ($.colombian_3.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_3.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_4_flag == 0) {
                if ($.player.locateAnyMeans2D(8.65, -262.74, 220.0, 220.0, false) || $.escort_truck.locate2D(8.65, -262.74, 220.0, 220.0, false)) {
                    $.colombian_4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 8.65, -262.74, 16.0)
                    $.colombian_4.setHeading(163.0)
                    $.colombian_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_4.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_4.setIdle()
                    $.colombian_4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_4.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_4.setStayInSamePlace(true /* TRUE */)
                    $.colombian_4_flag = 1
                }
            }
            if ($.colombian_4_flag == 1) {
                if (!$.player.locateAnyMeans2D(8.65, -262.74, 220.0, 220.0, false) || !$.escort_truck.locate2D(8.65, -262.74, 220.0, 220.0, false)) {
                    $.colombian_4.delete()
                    $.colombian_4_flag = 0
                }
            }
            if ($.colombian_4_flag == 1) {
                if (Char.IsDead($.colombian_4)) {
                    $.colombian_4_flag = 2
                } else {
                    if ($.colombian_4.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_4.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_5_flag == 0) {
                if ($.player.locateAnyMeans2D(287.5946, 17.6184, 220.0, 220.0, false) || $.escort_truck.locate2D(287.5946, 17.6184, 220.0, 220.0, false)) {
                    $.colombian_5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 287.5946, 17.6184, 19.0714)
                    $.colombian_5.setHeading(0.0)
                    $.colombian_5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_5.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_5.setIdle()
                    $.colombian_5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_5.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_5.setStayInSamePlace(true /* TRUE */)
                    $.colombian_5_flag = 1
                }
            }
            if ($.colombian_5_flag == 1) {
                if (!$.player.locateAnyMeans2D(287.5946, 17.6184, 220.0, 220.0, false) || !$.escort_truck.locate2D(287.5946, 17.6184, 220.0, 220.0, false)) {
                    $.colombian_5.delete()
                    $.colombian_5_flag = 0
                }
            }
            if ($.colombian_5_flag == 1) {
                if (Char.IsDead($.colombian_5)) {
                    $.colombian_5_flag = 2
                } else {
                    if ($.colombian_5.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_5.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_6_flag == 0) {
                if ($.player.locateAnyMeans2D(537.7727, 119.5505, 220.0, 220.0, false) || $.escort_truck.locate2D(537.7727, 119.5505, 220.0, 220.0, false)) {
                    $.colombian_6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 537.7727, 119.5505, -20.3699)
                    $.colombian_6.setHeading(238.1071)
                    $.colombian_6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_6.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_6.setIdle()
                    $.colombian_6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_6.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_6.setStayInSamePlace(true /* TRUE */)
                    $.colombian_6_flag = 1
                }
            }
            if ($.colombian_6_flag == 1) {
                if (!$.player.locateAnyMeans2D(537.7727, 119.5505, 220.0, 220.0, false) || !$.escort_truck.locate2D(537.7727, 119.5505, 220.0, 220.0, false)) {
                    $.colombian_6.delete()
                    $.colombian_6_flag = 0
                }
            }
            if ($.colombian_6_flag == 1) {
                if (Char.IsDead($.colombian_6)) {
                    $.colombian_6_flag = 2
                } else {
                    if ($.colombian_6.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_6.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.escort_truck_flag > 4) {
                if ($.colombian_7_flag == 0) {
                    if ($.player.locateAnyMeans2D(-632.9545, -499.5869, 220.0, 220.0, false) || $.escort_truck.locate2D(-632.9545, -499.5869, 220.0, 220.0, false)) {
                        $.colombian_7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -632.9545, -499.5869, 22.3742)
                        $.colombian_7.setHeading(15.2319)
                        $.colombian_7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                        $.colombian_7.setOnlyDamagedByPlayer(true /* TRUE */)
                        $.colombian_7.setIdle()
                        $.colombian_7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.colombian_7.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.colombian_7.setStayInSamePlace(true /* TRUE */)
                        $.colombian_7_flag = 1
                    }
                }
            }
            if ($.colombian_7_flag == 1) {
                if (!$.player.locateAnyMeans2D(-632.9545, -499.5869, 220.0, 220.0, false) || !$.escort_truck.locate2D(-632.9545, -499.5869, 220.0, 220.0, false)) {
                    $.colombian_7.delete()
                    $.colombian_7_flag = 0
                }
            }
            if ($.colombian_7_flag == 1) {
                if (Char.IsDead($.colombian_7)) {
                    $.colombian_7_flag = 2
                } else {
                    if ($.colombian_7.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_7.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_8_flag == 0) {
                if ($.player.locateAnyMeans2D(-982.5755, -115.7109, 220.0, 220.0, false) || $.escort_truck.locate2D(-982.5755, -115.7109, 220.0, 220.0, false)) {
                    $.colombian_8 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -982.5755, -115.7109, 33.0045)
                    $.colombian_8.setHeading(234.9669)
                    $.colombian_8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_8.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_8.setIdle()
                    $.colombian_8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_8.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_8.setStayInSamePlace(true /* TRUE */)
                    $.colombian_8_flag = 1
                }
            }
            if ($.colombian_8_flag == 1) {
                if (!$.player.locateAnyMeans2D(-982.5755, -115.7109, 220.0, 220.0, false) || !$.escort_truck.locate2D(-982.5755, -115.7109, 220.0, 220.0, false)) {
                    $.colombian_8.delete()
                    $.colombian_8_flag = 0
                }
            }
            if ($.colombian_8_flag == 1) {
                if (Char.IsDead($.colombian_8)) {
                    $.colombian_8_flag = 2
                } else {
                    if ($.colombian_8.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_8.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.colombian_9_flag == 0) {
                if ($.player.locateAnyMeans2D(-967.8587, -103.2732, 220.0, 220.0, false) || $.escort_truck.locate2D(-967.8587, -103.2732, 220.0, 220.0, false)) {
                    $.colombian_9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -967.8587, -103.2732, 34.2468)
                    $.colombian_9.setHeading(110.3819)
                    $.colombian_9.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                    $.colombian_9.setOnlyDamagedByPlayer(true /* TRUE */)
                    $.colombian_9.setIdle()
                    $.colombian_9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                    $.colombian_9.setThreatSearch(0 /* THREAT_PLAYER1 */)
                    $.colombian_9.setStayInSamePlace(true /* TRUE */)
                    $.colombian_9_flag = 1
                }
            }
            if ($.colombian_9_flag == 1) {
                if (!$.player.locateAnyMeans2D(-967.8587, -103.2732, 220.0, 220.0, false) || !$.escort_truck.locate2D(-967.8587, -103.2732, 220.0, 220.0, false)) {
                    $.colombian_9.delete()
                    $.colombian_9_flag = 0
                }
            }
            if ($.colombian_9_flag == 1) {
                if (Char.IsDead($.colombian_9)) {
                    $.colombian_9_flag = 2
                } else {
                    if ($.colombian_9.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_9.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.escort_truck_flag > 4) {
                if ($.colombian_10_flag == 0) {
                    if ($.player.locateAnyMeans2D(-655.9044, -405.6324, 220.0, 220.0, false) || $.escort_truck.locate2D(-655.9044, -405.6324, 220.0, 220.0, false)) {
                        $.colombian_10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -655.9044, -405.6324, 17.8121)
                        $.colombian_10.setHeading(234.7831)
                        $.colombian_10.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999)
                        $.colombian_10.setOnlyDamagedByPlayer(true /* TRUE */)
                        $.colombian_10.setIdle()
                        $.colombian_10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                        $.colombian_10.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.colombian_10.setStayInSamePlace(true /* TRUE */)
                        $.colombian_10_flag = 1
                    }
                }
            }
            if ($.colombian_10_flag == 1) {
                if (!$.player.locateAnyMeans2D(-655.9044, -405.6324, 220.0, 220.0, false) || !$.escort_truck.locate2D(-655.9044, -405.6324, 220.0, 220.0, false)) {
                    $.colombian_10.delete()
                    $.colombian_10_flag = 0
                }
            }
            if ($.colombian_10_flag == 1) {
                if (Char.IsDead($.colombian_10)) {
                    $.colombian_10_flag = 2
                } else {
                    if ($.colombian_10.locateAnyMeansCar2D($.escort_truck, 40.0, 40.0, false)) {
                        $.colombian_10.setObjDestroyCar($.escort_truck)
                    }
                }
            }

            ////////

            if ($.car1_attacking_flag == 0) {
                if ($.escort_truck.locate2D(41.0, -1070.0, 40.0, 40.0, false)) {
                    if (!Camera.IsPointOnScreen(122.0, -1099.0, 26.0, 4.0)) {
                        $.columbian_humvee1 = Car.Create(131 /* CAR_COLUMB */, 122.0, -1099.0, 26.0)
                        $.columbian_humvee1.setHeading(65.0)
                    } else {
                        $.columbian_humvee1 = Car.Create(131 /* CAR_COLUMB */, -50.0, -1021.0, 26.0)
                        $.columbian_humvee1.setHeading(240.0)
                    }
                    $.columbian_humvee1.setStaysInCurrentLevel(false /* FALSE */)
                    $.columbian_driver_1 = Char.CreateInsideCar($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`)
                    $.columbian_hitman_1 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0)
                    $.columbian_hitman_3 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1)
                    $.columbian_hitman_5 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2)
                    $.columbian_humvee1.setCruiseSpeed(40.0)
                    $.columbian_humvee1.setHealth(650)
                    $.columbian_humvee1.setDrivingStyle(2)
                    $.escort_truck.setDrivingStyle(2)
                    $.escort_truck.setCruiseSpeed(25.0)
                    $.columbian_humvee1.setIdle()
                    $.columbian_humvee1.setBlockCar($.escort_truck)
                    $.car1_attacking_flag = 1
                }
            }
            if ($.car1_attacking_flag > 0) {
                if (Car.IsDead($.columbian_humvee1)) {
                    $.car1_attacking_flag = -100
                } else {
                    if (!Char.IsDead($.columbian_driver_1)) {
                        if (!$.columbian_driver_1.isInCar($.columbian_humvee1)) {
                            $.columbian_driver_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_1.setObjDestroyCar($.escort_truck)
                        }
                    }
                    if ($.player.isInCar($.columbian_humvee1)) {
                        if (!Char.IsDead($.columbian_hitman_1)) {
                            $.columbian_hitman_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_1.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_3)) {
                            $.columbian_hitman_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_3.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_5)) {
                            $.columbian_hitman_5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_5.setObjKillPlayerOnFoot($.player)
                        }
                    }
                    if ($.columbian_humvee1.isUpsidedown() && $.columbian_humvee1.isStopped()) {
                        if (!Char.IsDead($.columbian_driver_1)) {
                            $.columbian_driver_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_1.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_1)) {
                            $.columbian_hitman_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_1.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_3)) {
                            $.columbian_hitman_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_3.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_5)) {
                            $.columbian_hitman_5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_5.setObjDestroyCar($.escort_truck)
                        }
                    }
                }
            }
            if ($.car1_attacking_flag == 1) {
                if (!Char.IsDead($.columbian_hitman_1)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee1_speed = $.columbian_humvee1.getSpeed()
                    if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_1.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_1.setObjLeaveCar($.columbian_humvee1)
                            $.columbian_hitman_1.setRunning(true /* TRUE */)
                            $.car1_attacking_flag = 2
                        }
                    }
                } else {
                    $.car1_attacking_flag = 2
                }
            }
            if ($.car1_attacking_flag == 2) {
                if (!Char.IsDead($.columbian_hitman_1)) {
                    if (!$.columbian_hitman_1.isInAnyCar()) {
                        $.columbian_hitman_1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_1.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee1.setCruiseSpeed(40.0)
                        $.columbian_humvee1.setBlockCar($.escort_truck)
                        $.car1_attacking_flag = 3
                    }
                } else {
                    $.car1_attacking_flag = 3
                }
            }
            if ($.car1_attacking_flag == 3) {
                if (!Char.IsDead($.columbian_hitman_3)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee1_speed = $.columbian_humvee1.getSpeed()
                    if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_3.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_3.setObjLeaveCar($.columbian_humvee1)
                            $.columbian_hitman_3.setRunning(true /* TRUE */)
                            $.car1_attacking_flag = 4
                        }
                    }
                } else {
                    $.car1_attacking_flag = 4
                }
            }
            if ($.car1_attacking_flag == 4) {
                if (!Char.IsDead($.columbian_hitman_3)) {
                    if (!$.columbian_hitman_3.isInAnyCar()) {
                        $.columbian_hitman_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_3.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee1.setCruiseSpeed(40.0)
                        $.columbian_humvee1.setBlockCar($.escort_truck)
                        $.car1_attacking_flag = 5
                    }
                } else {
                    $.car1_attacking_flag = 5
                }
            }
            if ($.car1_attacking_flag == 5) {
                if (!Char.IsDead($.columbian_hitman_5)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee1_speed = $.columbian_humvee1.getSpeed()
                    if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_5.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_5.setObjLeaveCar($.columbian_humvee1)
                            $.columbian_hitman_5.setRunning(true /* TRUE */)
                            $.car1_attacking_flag = 6
                        }
                    }
                } else {
                    $.car1_attacking_flag = 6
                }
            }
            if ($.car1_attacking_flag == 6) {
                if (!Char.IsDead($.columbian_hitman_5)) {
                    if (!$.columbian_hitman_5.isInAnyCar()) {
                        $.columbian_hitman_5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_5.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee1.setCruiseSpeed(40.0)
                        $.columbian_humvee1.setBlockCar($.escort_truck)
                        $.car1_attacking_flag = 7
                    }
                } else {
                    $.car1_attacking_flag = 7
                }
            }
            if ($.car1_attacking_flag == 7) {
                $.columbian_humvee1.setCruiseSpeed(40.0)
                $.columbian_humvee1.setRamCar($.escort_truck)
                $.car1_attacking_flag = 8
            }

            ////////////////////////////////////

            if ($.car2_attacking_flag == 0) {
                if ($.escort_truck.locate2D(2.0, -405.0, 40.0, 40.0, false)) {
                    if (!Camera.IsPointOnScreen(-86.0, -409.0, 16.0, 4.0)) {
                        $.columbian_humvee2 = Car.Create(131 /* CAR_COLUMB */, -86.0, -409.0, 16.0)
                        $.columbian_humvee2.setHeading(270.0)
                    } else {
                        $.columbian_humvee2 = Car.Create(131 /* CAR_COLUMB */, -100.0, -409.0, 16.0)
                        $.columbian_humvee2.setHeading(90.0)
                    }
                    $.columbian_humvee2.setStaysInCurrentLevel(false /* FALSE */)
                    $.columbian_driver_2 = Char.CreateInsideCar($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`)
                    $.columbian_hitman_2 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0)
                    $.columbian_hitman_4 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1)
                    $.columbian_hitman_6 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2)
                    $.columbian_humvee2.setCruiseSpeed(40.0)
                    $.columbian_humvee2.setDrivingStyle(2)
                    $.columbian_humvee2.setHealth(650)
                    $.columbian_humvee2.setIdle()
                    $.columbian_humvee2.setBlockCar($.escort_truck)
                    $.car2_attacking_flag = 1
                }
            }
            if ($.car2_attacking_flag > 0) {
                if (Car.IsDead($.columbian_humvee2)) {
                    $.car2_attacking_flag = -100
                } else {
                    if (!Char.IsDead($.columbian_driver_2)) {
                        if (!$.columbian_driver_2.isInCar($.columbian_humvee2)) {
                            $.columbian_driver_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_2.setObjDestroyCar($.escort_truck)
                        }
                    }
                    if ($.player.isInCar($.columbian_humvee2)) {
                        if (!Char.IsDead($.columbian_hitman_2)) {
                            $.columbian_hitman_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_2.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_4)) {
                            $.columbian_hitman_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_4.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_6)) {
                            $.columbian_hitman_6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_6.setObjKillPlayerOnFoot($.player)
                        }
                    }
                    if ($.columbian_humvee2.isUpsidedown() && $.columbian_humvee2.isStopped()) {
                        if (!Char.IsDead($.columbian_driver_2)) {
                            $.columbian_driver_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_2.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_2)) {
                            $.columbian_hitman_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_2.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_4)) {
                            $.columbian_hitman_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_4.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_6)) {
                            $.columbian_hitman_6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_6.setObjDestroyCar($.escort_truck)
                        }
                    }
                }
            }
            if ($.car2_attacking_flag == 1) {
                if (!Char.IsDead($.columbian_hitman_2)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee2_speed = $.columbian_humvee2.getSpeed()
                    if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_2.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_2.setObjLeaveCar($.columbian_humvee2)
                            $.columbian_hitman_2.setRunning(true /* TRUE */)
                            $.car2_attacking_flag = 2
                        }
                    }
                } else {
                    $.car2_attacking_flag = 2
                }
            }
            if ($.car2_attacking_flag == 2) {
                if (!Char.IsDead($.columbian_hitman_2)) {
                    if (!$.columbian_hitman_2.isInAnyCar()) {
                        $.columbian_hitman_2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_2.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee2.setCruiseSpeed(40.0)
                        $.columbian_humvee2.setBlockCar($.escort_truck)
                        $.car2_attacking_flag = 3
                    }
                } else {
                    $.car2_attacking_flag = 3
                }
            }
            if ($.car2_attacking_flag == 3) {
                if (!Char.IsDead($.columbian_hitman_4)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee2_speed = $.columbian_humvee2.getSpeed()
                    if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_4.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_4.setObjLeaveCar($.columbian_humvee2)
                            $.columbian_hitman_4.setRunning(true /* TRUE */)
                            $.car2_attacking_flag = 4
                        }
                    }
                } else {
                    $.car2_attacking_flag = 4
                }
            }
            if ($.car2_attacking_flag == 4) {
                if (!Char.IsDead($.columbian_hitman_4)) {
                    if (!$.columbian_hitman_4.isInAnyCar()) {
                        $.columbian_hitman_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_4.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee2.setCruiseSpeed(40.0)
                        $.columbian_humvee2.setBlockCar($.escort_truck)
                        $.car2_attacking_flag = 5
                    }
                } else {
                    $.car2_attacking_flag = 5
                }
            }
            if ($.car2_attacking_flag == 5) {
                if (!Char.IsDead($.columbian_hitman_6)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee2_speed = $.columbian_humvee2.getSpeed()
                    if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_6.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_6.setObjLeaveCar($.columbian_humvee2)
                            $.columbian_hitman_6.setRunning(true /* TRUE */)
                            $.car2_attacking_flag = 6
                        }
                    }
                } else {
                    $.car2_attacking_flag = 6
                }
            }
            if ($.car2_attacking_flag == 6) {
                if (!Char.IsDead($.columbian_hitman_6)) {
                    if (!$.columbian_hitman_6.isInAnyCar()) {
                        $.columbian_hitman_6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_6.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee2.setCruiseSpeed(40.0)
                        $.columbian_humvee2.setBlockCar($.escort_truck)
                        $.car2_attacking_flag = 7
                    }
                } else {
                    $.car2_attacking_flag = 7
                }
            }
            if ($.car2_attacking_flag == 7) {
                $.columbian_humvee2.setCruiseSpeed(40.0)
                $.columbian_humvee2.setRamCar($.escort_truck)
                $.car2_attacking_flag = 8
            }

            ////////////////////////////////////

            if ($.escort_truck_flag > 4) {
                if ($.car3_attacking_flag == 0) {
                    if ($.escort_truck.locate2D(-645.8259, -435.994, 40.0, 40.0, false)) {
                        if (!Camera.IsPointOnScreen(-823.6705, -435.0647, 10.0779, 4.0)) {
                            $.columbian_humvee3 = Car.Create(131 /* CAR_COLUMB */, -823.6705, -435.0647, 10.0779)
                            $.columbian_humvee3.setHeading(272.1213)
                        } else {
                            $.columbian_humvee3 = Car.Create(131 /* CAR_COLUMB */, -735.5045, -577.3362, 7.6714)
                            $.columbian_humvee3.setHeading(7.8079)
                        }
                        $.columbian_humvee3.setStaysInCurrentLevel(false /* FALSE */)
                        $.columbian_driver_3 = Char.CreateInsideCar($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`)
                        $.columbian_hitman_7 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0)
                        $.columbian_hitman_8 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1)
                        $.columbian_hitman_9 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2)
                        $.columbian_humvee3.setCruiseSpeed(40.0)
                        $.columbian_humvee3.setHealth(650)
                        $.columbian_humvee3.setDrivingStyle(2)
                        $.columbian_humvee3.setIdle()
                        $.columbian_humvee3.setBlockCar($.escort_truck)
                        $.car3_attacking_flag = 1
                    }
                }
            }
            if ($.car3_attacking_flag > 0) {
                if (Car.IsDead($.columbian_humvee3)) {
                    $.car3_attacking_flag = -100
                } else {
                    if (!Char.IsDead($.columbian_driver_3)) {
                        if (!$.columbian_driver_3.isInCar($.columbian_humvee3)) {
                            $.columbian_driver_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_3.setObjDestroyCar($.escort_truck)
                        }
                    }
                    if ($.player.isInCar($.columbian_humvee3)) {
                        if (!Char.IsDead($.columbian_hitman_7)) {
                            $.columbian_hitman_7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_7.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_8)) {
                            $.columbian_hitman_8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_8.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_9)) {
                            $.columbian_hitman_9.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_9.setObjKillPlayerOnFoot($.player)
                        }
                    }
                    if ($.columbian_humvee3.isUpsidedown() && $.columbian_humvee3.isStopped()) {
                        if (!Char.IsDead($.columbian_driver_3)) {
                            $.columbian_driver_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_3.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_7)) {
                            $.columbian_hitman_7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_7.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_8)) {
                            $.columbian_hitman_8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_8.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_9)) {
                            $.columbian_hitman_9.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_9.setObjDestroyCar($.escort_truck)
                        }
                    }
                }
            }
            if ($.car3_attacking_flag == 1) {
                if (!Char.IsDead($.columbian_hitman_7)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee3_speed = $.columbian_humvee3.getSpeed()
                    if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_7.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_7.setObjLeaveCar($.columbian_humvee3)
                            $.columbian_hitman_7.setRunning(true /* TRUE */)
                            $.car3_attacking_flag = 2
                        }
                    }
                } else {
                    $.car3_attacking_flag = 2
                }
            }
            if ($.car3_attacking_flag == 2) {
                if (!Char.IsDead($.columbian_hitman_7)) {
                    if (!$.columbian_hitman_7.isInAnyCar()) {
                        $.columbian_hitman_7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_7.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee3.setCruiseSpeed(40.0)
                        $.columbian_humvee3.setBlockCar($.escort_truck)
                        $.car3_attacking_flag = 3
                    }
                } else {
                    $.car3_attacking_flag = 3
                }
            }
            if ($.car3_attacking_flag == 3) {
                if (!Char.IsDead($.columbian_hitman_8)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee3_speed = $.columbian_humvee3.getSpeed()
                    if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_8.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_8.setObjLeaveCar($.columbian_humvee3)
                            $.columbian_hitman_8.setRunning(true /* TRUE */)
                            $.car3_attacking_flag = 4
                        }
                    }
                } else {
                    $.car3_attacking_flag = 4
                }
            }
            if ($.car3_attacking_flag == 4) {
                if (!Char.IsDead($.columbian_hitman_8)) {
                    if (!$.columbian_hitman_8.isInAnyCar()) {
                        $.columbian_hitman_8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_8.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee3.setCruiseSpeed(40.0)
                        $.columbian_humvee3.setBlockCar($.escort_truck)
                        $.car3_attacking_flag = 5
                    }
                } else {
                    $.car3_attacking_flag = 5
                }
            }
            if ($.car3_attacking_flag == 5) {
                if (!Char.IsDead($.columbian_hitman_9)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee3_speed = $.columbian_humvee3.getSpeed()
                    if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_9.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_9.setObjLeaveCar($.columbian_humvee3)
                            $.columbian_hitman_9.setRunning(true /* TRUE */)
                            $.car3_attacking_flag = 6
                        }
                    }
                } else {
                    $.car3_attacking_flag = 6
                }
            }
            if ($.car3_attacking_flag == 6) {
                if (!Char.IsDead($.columbian_hitman_9)) {
                    if (!$.columbian_hitman_9.isInAnyCar()) {
                        $.columbian_hitman_9.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_9.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee3.setCruiseSpeed(40.0)
                        $.columbian_humvee3.setBlockCar($.escort_truck)
                        $.car3_attacking_flag = 7
                    }
                } else {
                    $.car3_attacking_flag = 7
                }
            }
            if ($.car3_attacking_flag == 7) {
                $.columbian_humvee3.setCruiseSpeed(40.0)
                $.columbian_humvee3.setRamCar($.escort_truck)
                $.car3_attacking_flag = 8
            }

            ////////

            if ($.car4_attacking_flag == 0) {
                if ($.escort_truck.locate2D(-645.8259, -435.994, 40.0, 40.0, false)) {
                    if (!Camera.IsPointOnScreen(-1017.6605, -226.1589, 37.9967, 4.0)) {
                        $.columbian_humvee4 = Car.Create(131 /* CAR_COLUMB */, -1017.6605, -226.1589, 37.9967)
                        $.columbian_humvee4.setHeading(284.9633)
                    } else {
                        $.columbian_humvee4 = Car.Create(131 /* CAR_COLUMB */, -878.8591, -229.1282, 28.1703)
                        $.columbian_humvee4.setHeading(84.5748)
                    }
                    $.columbian_humvee4.setStaysInCurrentLevel(false /* FALSE */)
                    $.columbian_driver_4 = Char.CreateInsideCar($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`)
                    $.columbian_hitman_10 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0)
                    $.columbian_hitman_11 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1)
                    $.columbian_hitman_12 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2)
                    $.columbian_humvee4.setCruiseSpeed(40.0)
                    $.columbian_humvee4.setHealth(650)
                    $.columbian_humvee4.setDrivingStyle(2)
                    $.columbian_humvee4.setIdle()
                    $.columbian_humvee4.setBlockCar($.escort_truck)
                    $.car4_attacking_flag = 1
                }
            }
            if ($.car4_attacking_flag > 0) {
                if (Car.IsDead($.columbian_humvee4)) {
                    $.car4_attacking_flag = -100
                } else {
                    if (!Char.IsDead($.columbian_driver_4)) {
                        if (!$.columbian_driver_4.isInCar($.columbian_humvee4)) {
                            $.columbian_driver_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_4.setObjDestroyCar($.escort_truck)
                        }
                    }
                    if ($.player.isInCar($.columbian_humvee4)) {
                        if (!Char.IsDead($.columbian_hitman_10)) {
                            $.columbian_hitman_10.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_10.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_11)) {
                            $.columbian_hitman_11.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_11.setObjKillPlayerOnFoot($.player)
                        }
                        if (!Char.IsDead($.columbian_hitman_12)) {
                            $.columbian_hitman_12.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_12.setObjKillPlayerOnFoot($.player)
                        }
                    }
                    if ($.columbian_humvee4.isUpsidedown() && $.columbian_humvee4.isStopped()) {
                        if (!Char.IsDead($.columbian_driver_4)) {
                            $.columbian_driver_4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_driver_4.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_10)) {
                            $.columbian_hitman_10.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_10.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_11)) {
                            $.columbian_hitman_11.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_11.setObjDestroyCar($.escort_truck)
                        }
                        if (!Char.IsDead($.columbian_hitman_12)) {
                            $.columbian_hitman_12.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                            $.columbian_hitman_12.setObjDestroyCar($.escort_truck)
                        }
                    }
                }
            }
            if ($.car4_attacking_flag == 1) {
                if (!Char.IsDead($.columbian_hitman_10)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee4_speed = $.columbian_humvee4.getSpeed()
                    if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_10.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_10.setObjLeaveCar($.columbian_humvee4)
                            $.columbian_hitman_10.setRunning(true /* TRUE */)
                            $.car4_attacking_flag = 2
                        }
                    }
                } else {
                    $.car4_attacking_flag = 2
                }
            }
            if ($.car4_attacking_flag == 2) {
                if (!Char.IsDead($.columbian_hitman_10)) {
                    if (!$.columbian_hitman_10.isInAnyCar()) {
                        $.columbian_hitman_10.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_10.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee4.setCruiseSpeed(40.0)
                        $.columbian_humvee4.setBlockCar($.escort_truck)
                        $.car4_attacking_flag = 3
                    }
                } else {
                    $.car4_attacking_flag = 3
                }
            }
            if ($.car4_attacking_flag == 3) {
                if (!Char.IsDead($.columbian_hitman_11)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee4_speed = $.columbian_humvee4.getSpeed()
                    if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_11.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_11.setObjLeaveCar($.columbian_humvee4)
                            $.columbian_hitman_11.setRunning(true /* TRUE */)
                            $.car4_attacking_flag = 4
                        }
                    }
                } else {
                    $.car4_attacking_flag = 4
                }
            }
            if ($.car4_attacking_flag == 4) {
                if (!Char.IsDead($.columbian_hitman_11)) {
                    if (!$.columbian_hitman_11.isInAnyCar()) {
                        $.columbian_hitman_11.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_11.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee4.setCruiseSpeed(40.0)
                        $.columbian_humvee4.setBlockCar($.escort_truck)
                        $.car4_attacking_flag = 5
                    }
                } else {
                    $.car4_attacking_flag = 5
                }
            }
            if ($.car4_attacking_flag == 5) {
                if (!Char.IsDead($.columbian_hitman_12)) {
                    $.escort_truck_speed = $.escort_truck.getSpeed()
                    $.columbian_humvee4_speed = $.columbian_humvee4.getSpeed()
                    if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
                        if ($.columbian_hitman_12.locateInCarCar2D($.escort_truck, 10.0, 10.0, false)) {
                            $.columbian_hitman_12.setObjLeaveCar($.columbian_humvee4)
                            $.columbian_hitman_12.setRunning(true /* TRUE */)
                            $.car4_attacking_flag = 6
                        }
                    }
                } else {
                    $.car4_attacking_flag = 6
                }
            }
            if ($.car4_attacking_flag == 6) {
                if (!Char.IsDead($.columbian_hitman_12)) {
                    if (!$.columbian_hitman_12.isInAnyCar()) {
                        $.columbian_hitman_12.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999)
                        $.columbian_hitman_12.setObjDestroyCar($.escort_truck)
                        $.columbian_humvee4.setCruiseSpeed(40.0)
                        $.columbian_humvee4.setBlockCar($.escort_truck)
                        $.car4_attacking_flag = 7
                    }
                } else {
                    $.car4_attacking_flag = 7
                }
            }
            if ($.car4_attacking_flag == 7) {
                $.columbian_humvee4.setCruiseSpeed(40.0)
                $.columbian_humvee4.setRamCar($.escort_truck)
                $.car4_attacking_flag = 8
            }

            ////////////////////////////////////
        } else {
            $.columbian_humvee1.markAsNoLongerNeeded()
            $.columbian_humvee2.markAsNoLongerNeeded()
            $.columbian_humvee3.markAsNoLongerNeeded()
            $.columbian_driver_1.markAsNoLongerNeeded()
            $.columbian_driver_2.markAsNoLongerNeeded()
            $.columbian_driver_3.markAsNoLongerNeeded()
            $.columbian_hitman_1.markAsNoLongerNeeded()
            $.columbian_hitman_2.markAsNoLongerNeeded()
            $.columbian_hitman_3.markAsNoLongerNeeded()
            $.columbian_hitman_4.markAsNoLongerNeeded()
            $.columbian_hitman_5.markAsNoLongerNeeded()
            $.columbian_hitman_6.markAsNoLongerNeeded()
            $.columbian_hitman_7.markAsNoLongerNeeded()
            $.columbian_hitman_8.markAsNoLongerNeeded()
            $.columbian_hitman_9.markAsNoLongerNeeded()
            $.colombian_1.markAsNoLongerNeeded()
            $.colombian_2.markAsNoLongerNeeded()
            $.colombian_3.markAsNoLongerNeeded()
            $.colombian_4.markAsNoLongerNeeded()
            $.colombian_5.markAsNoLongerNeeded()
            $.colombian_6.markAsNoLongerNeeded()
            $.colombian_7.markAsNoLongerNeeded()
            $.colombian_8.markAsNoLongerNeeded()
            $.colombian_9.markAsNoLongerNeeded()
            $.colombian_10.markAsNoLongerNeeded()
        }
    }

    // SCM GOTO → mission_love5_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love5_passed') // fallback: would break linear control flow

    // Mission love 5 failed
}

async function mission_love5_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)
    return

    // mission love 5 passed
}

async function mission_love5_passed() {
    $.flag_love_mission5_passed = 1
    Text.PrintWithNumberBig('M_PASS', 40000, 2000, 1)
    $.player.addScore(40000)
    $.player.clearWantedLevel()
    Audio.PlayMissionPassedTune(1)
    Stat.RegisterMissionPassed('LOVE5')
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT love_mission6_loop
    return

    // mission cleanup
}

async function mission_cleanup_love5() {
    $.flag_player_on_mission = 0
    $.flag_player_on_love_mission = 0

    if (!$.tank_weapon.hasBeenCollected()) {
        $.tank_weapon.remove()
    }
    Hud.ClearCounter($.escort_truck_health)
    Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`)
    Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
    Streaming.UnloadSpecialCharacter(2)
    Streaming.UnloadSpecialCharacter(3)
    World.SetCarDensityMultiplier(1.0)

    $.escort_truck_blip.remove()

    Mission.Finish()

    return
}

async function call_off_the_attackers() {
    if (!Car.IsDead($.columbian_humvee1)) {
        $.columbian_humvee1.wanderRandomly()
    }
    if (!Car.IsDead($.columbian_humvee2)) {
        $.columbian_humvee2.wanderRandomly()
    }
    if (!Car.IsDead($.columbian_humvee3)) {
        $.columbian_humvee3.wanderRandomly()
    }
    if (!Car.IsDead($.columbian_humvee4)) {
        $.columbian_humvee4.wanderRandomly()
    }
    if (!Char.IsDead($.columbian_hitman_1)) {
        $.columbian_hitman_1.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_2)) {
        $.columbian_hitman_2.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_3)) {
        $.columbian_hitman_3.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_4)) {
        $.columbian_hitman_4.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_5)) {
        $.columbian_hitman_5.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_6)) {
        $.columbian_hitman_6.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_7)) {
        $.columbian_hitman_7.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_8)) {
        $.columbian_hitman_8.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_9)) {
        $.columbian_hitman_9.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_10)) {
        $.columbian_hitman_10.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_11)) {
        $.columbian_hitman_11.setObjKillPlayerAnyMeans($.player)
    }
    if (!Char.IsDead($.columbian_hitman_12)) {
        $.columbian_hitman_12.setObjKillPlayerAnyMeans($.player)
    }
    $.columbian_humvee1.markAsNoLongerNeeded()
    $.columbian_humvee2.markAsNoLongerNeeded()
    $.columbian_humvee3.markAsNoLongerNeeded()
    $.columbian_humvee4.markAsNoLongerNeeded()
    $.columbian_hitman_1.markAsNoLongerNeeded()
    $.columbian_hitman_2.markAsNoLongerNeeded()
    $.columbian_hitman_3.markAsNoLongerNeeded()
    $.columbian_hitman_4.markAsNoLongerNeeded()
    $.columbian_hitman_5.markAsNoLongerNeeded()
    $.columbian_hitman_6.markAsNoLongerNeeded()
    $.columbian_hitman_7.markAsNoLongerNeeded()
    $.columbian_hitman_8.markAsNoLongerNeeded()
    $.columbian_hitman_9.markAsNoLongerNeeded()
    $.columbian_hitman_10.markAsNoLongerNeeded()
    $.columbian_hitman_11.markAsNoLongerNeeded()
    $.columbian_hitman_12.markAsNoLongerNeeded()
    $.car1_attacking_flag = -100
    $.car2_attacking_flag = -100
    $.car3_attacking_flag = -100
    $.car4_attacking_flag = -100

    return
}

export async function love5() {
    // MissionBoundary
    // *****************************************************************************************
    // ********************************		Love 5 	   *****************************************
    // ********************************	Escort Service *****************************************
    // *****************************************************************************************
    // *** The packages and the OJG need transporting to the <destination>. The player must  ***
    // *** escort the van. The van will be attacked en-route by the Cartel, the player must  ***
    // *** fight off any attackers and protect the van at all costs.						 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_love5
    await mission_start_love5()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_love5_failed
        await mission_love5_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_love5
    await mission_cleanup_love5()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT escort_truck truck_driver escort_truck_blip escort_truck_health escort_truck_flag ojg
    // VAR_INT columbian_humvee1 columbian_humvee2 columbian_humvee3 columbian_driver_1 columbian_driver_2 columbian_driver_3
    // VAR_INT car1_attacking_flag car2_attacking_flag car3_attacking_flag tank_weapon escort_truck_health2
    // VAR_INT colombian_1 colombian_2 colombian_3 colombian_4 colombian_5 colombian_6 colombian_7 colombian_8 colombian_9 colombian_10
    // VAR_INT colombian_1_flag colombian_2_flag colombian_3_flag colombian_4_flag colombian_5_flag colombian_6_flag colombian_7_flag colombian_8_flag colombian_9_flag colombian_10_flag
    // VAR_INT columbian_hitman_1 columbian_hitman_2 columbian_hitman_3 columbian_hitman_4 columbian_hitman_5
    // VAR_INT columbian_hitman_6 columbian_hitman_7 columbian_hitman_8 columbian_hitman_9 dummy_health
    // VAR_INT car4_attacking_flag columbian_driver_4 columbian_hitman_10 columbian_hitman_11 columbian_hitman_12 columbian_humvee4

    // VAR_FLOAT escort_truck_speed columbian_humvee1_speed columbian_humvee2_speed columbian_humvee3_speed columbian_humvee4_speed

    // ****************************************Mission Start************************************
}
