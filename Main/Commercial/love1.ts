// Generated from Main/Commercial/love1.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_love1() {
    $.flag_player_on_mission = 1

    $.flag_player_on_kenji_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    $.flag_ojg_in_group = 0

    $.flag_blip_on_ojg_love1 = 0

    $.flag_baddie1_dead_love1 = 0

    $.flag_baddie2_dead_love1 = 0

    $.flag_baddie3_dead_love1 = 0

    $.flag_baddie4_dead_love1 = 0

    $.flag_baddie5_dead_love1 = 0

    $.flag_baddie6_dead_love1 = 0

    $.flag_garage_baddie1_dead_love1 = 0

    $.flag_garage_baddie2_dead_love1 = 0

    $.flag_garage_baddie3_dead_love1 = 0

    $.flag_garage_baddie4_dead_love1 = 0

    $.flag_garage_baddie5_dead_love1 = 0

    $.flag_garage_baddie6_dead_love1 = 0

    $.flag_garage1_open = 0

    $.flag_garage2_open = 0

    $.flag_garage3_open = 0

    $.flag_garage4_open = 0

    $.flag_garage5_open = 0

    $.ogg_position = 0

    $.flag_had_garage_message_love1 = 0

    $.ojg_in_area = 0

    $.flag_ojg_dead = 0

    $.flag_player_in_area_love1 = 0

    $.flag_player_got_car_message_love1 = 0

    $.flag_message_car_again = 0

    $.blob_flag = 1

    $.flag_ojg_in_area = 0

    $.flag_baddie1_in_area_love1 = 0

    $.flag_baddie2_in_area_love1 = 0

    $.flag_baddie3_in_area_love1 = 0

    $.flag_baddie4_in_area_love1 = 0

    $.flag_baddie5_in_area_love1 = 0

    $.flag_baddie6_in_area_love1 = 0

    {
        if ($.flag_failed_love1 == 1) {
            $.garage1_love1.close()
            $.garage2_love1.close()
            $.garage3_love1.close()
            $.garage4_love1.close()
            $.garage5_love1.close()
        }

        $.flag_failed_love1 = 0

        $.flag_kill_player_love1 = 0

        // ****************************************START OF CUTSCENE********************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_love1_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( LOVE1 ) 15000 2  //"Resue the Old Oriental Gentleman"

  SWITCH_STREAMING OFF
  */

        // Cutscene stuff

        Streaming.LoadSpecialCharacter(1, 'LOVE2')
        Streaming.RequestModel(1731 /* tshrorckgrdn */)
        Streaming.RequestModel(1732 /* tshrorckgrdn_alfas */)
        Streaming.LoadSpecialModel(hier`cutobj01`, 'LOVEH')
        Streaming.LoadSpecialModel(hier`cutobj02`, 'PLAYERH')

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
            !Streaming.HasModelLoaded(1731 /* tshrorckgrdn */) ||
            !Streaming.HasModelLoaded(1732 /* tshrorckgrdn_alfas */)
        ) {
            await asyncWait(0)
        }

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE

        Cutscene.Load('d1_stog')

        Cutscene.SetOffset(85.2162, -1532.9093, 243.5422)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)

        $.cs_player.setAnim('player')

        $.cs_love = CutsceneObject.Create(ped`SPECIAL1`)

        $.cs_love.setAnim('love2')

        $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`)

        $.cs_lovehead.setAnim('love')

        $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`)

        $.cs_playerhead.setAnim('player')

        World.ClearArea(83.1, -1548.7, 27.3, 1.0, true /* TRUE */)

        $.player.setCoordinates(83.1, -1548.7, 27.3)

        $.player.setHeading(90.0)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        World.SwitchRubbish(false /* OFF */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 4111) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_A', 10000, 1) //"First of all, let me thank you for dealing with that personal matter."

        while ($.cs_time < 7246) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_F', 10000, 1) //"People will read something into anything these days."

        while ($.cs_time < 10311) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_B', 10000, 1) //"Experience has taught me that a man like you can be very loyal for the right price,"

        while ($.cs_time < 14533) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_H', 10000, 1) //"but groups of men get greedy."

        while ($.cs_time < 17000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_C', 10000, 1) //"A valued resource, an old oriental gentleman I know,"

        while ($.cs_time < 20000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_I', 10000, 1) //"has been kept hostage by some South Americans in Aspatria."

        while ($.cs_time < 23188) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_D', 10000, 1) //"They're trying to extort additional funds from me but I don't believe in re-negotiation."

        while ($.cs_time < 28008) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_E', 10000, 1) //"A deal is a deal, so they'll not see a penny from me.

        while ($.cs_time < 32454) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('LOVE1_G', 10000, 1) //"Go and rescue my friend, do whatever it takes."

        while ($.cs_time < 35034) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('LOVE1_G')

        while ($.cs_time < 38333) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        Text.ClearPrints()

        while (!Cutscene.HasFinished()) {
            await asyncWait(0)
        }

        Cutscene.Clear()

        Streaming.Switch(true /* ON */)

        World.SwitchRubbish(true /* ON */)

        Camera.SetBehindPlayer()

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Camera.SetBehindPlayer()

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE

        Streaming.UnloadSpecialCharacter(1)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
        Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)

        Streaming.MarkModelAsNoLongerNeeded(1731 /* tshrorckgrdn */)

        Streaming.MarkModelAsNoLongerNeeded(1732 /* tshrorckgrdn_alfas */)

        // *******************************************END OF CUTSCENE*******************************

        Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)

        Streaming.RequestModel(car`COLUMB`)

        Streaming.LoadSpecialCharacter(2, 'OJG')

        while (!Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`) || !Streaming.HasModelLoaded(car`COLUMB`)) {
            await asyncWait(0)
        }

        Text.PrintNow('LOVE1_1', 7000, 1) //"Get a columbian gang car, you'll need it to infiltrate the hideout."

        // Waiting for the player to be in a colombian car

        while (!$.player.isInModel(131 /* CAR_COLUMB */)) {
            await asyncWait(0)
        }

        $.radar_blip_coord2_love1 = Blip.AddForCoord(52.0, -343.0, -100.0)

        // Random munber stuff to generate OGG position

        $.ogg_position = Math.RandomIntInRange(2, 6)

        if ($.ogg_position == 2) {
            $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 25.2, -340.3, 15.1)
            $.ojg_love1.clearThreatSearch()
            $.ojg_love1.turnToFaceCoord(57.0, -314.0, -100.0)
            $.ojg_love1.setIdle()
        }

        if ($.ogg_position == 3) {
            $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 26.3, -339.7, 15.1)
            $.ojg_love1.clearThreatSearch()
            $.ojg_love1.turnToFaceCoord(29.0, -339.0, -100.0)
            $.ojg_love1.setIdle()
        }

        if ($.ogg_position == 4) {
            $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 25.5, -350.4, 15.1)
            $.ojg_love1.clearThreatSearch()
            $.ojg_love1.turnToFaceCoord(29.0, -350.0, -100.0)
            $.ojg_love1.setIdle()
        }

        if ($.ogg_position == 5) {
            $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 47.0, -386.0, 15.1)
            $.ojg_love1.clearThreatSearch()
            $.ojg_love1.turnToFaceCoord(47.0, -381.0, 16.0)
            $.ojg_love1.setIdle()
        }

        Text.PrintNow('LOVE1_2', 7000, 1) //"Rescue the Old Japanese Gentleman."

        $.garage_car1_love1 = Car.Create(131 /* CAR_COLUMB */, 26.2, -365.5, 15.1)

        $.garage_car1_love1.setHeading(270.0)

        $.garage_car2_love1 = Car.Create(131 /* CAR_COLUMB */, 73.6, -352.7, 15.1)

        $.garage_car2_love1.setHeading(270.0)

        // Creates the first guard he follows route 0

        $.baddie1_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 71.0, -332.0, -100.0)

        $.baddie1_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie1_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // sets weapon to infinate ammo

        $.baddie1_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie1_love1 100

        $.baddie1_love1.turnToFaceCoord(72.0, -318.0, -100.0)

        Path.AddRoutePoint(0, 71.0, -319.0, -100.0)

        Path.AddRoutePoint(0, 71.0, -332.0, -100.0)

        $.baddie1_love1.setObjFollowRoute(0, 3 /* FOLLOW_ROUTE_LOOP */)

        // Creates the second guard he follows route 1

        $.baddie2_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 61.0, -318.0, -100.0)

        $.baddie2_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie2_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // sets weapon to infinate ammo

        $.baddie2_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie2_love1 100

        $.baddie2_love1.turnToFaceCoord(61.0, -335.0, -100.0)

        Path.AddRoutePoint(1, 61.0, -318.0, -100.0)

        Path.AddRoutePoint(1, 61.0, -335.0, -100.0)

        $.baddie2_love1.setObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */)

        // Creates the third guard - does not patrol

        $.baddie3_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 42.0, -375.0, -100.0)

        $.baddie3_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie3_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.baddie3_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie3_love1 100

        $.baddie3_love1.turnToFaceCoord(42.0, -373.0, -100.0)

        // Creates the fourth guard - does not patrol

        $.baddie4_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 52.0, -375.0, -100.0)

        $.baddie4_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie4_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.baddie4_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie4_love1 100

        $.baddie4_love1.turnToFaceCoord(52.0, -371.0, -100.0)

        // Creates the fifth guard - does not patrol

        $.baddie5_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 32.0, -345.0, -100.0)

        $.baddie5_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie5_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.baddie5_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie5_love1 100

        $.baddie5_love1.turnToFaceCoord(-30.0, -367.0, -100.0)

        // Creates the sixth guard - does not patrol

        $.baddie6_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 33.0, -328.0, -100.0)

        $.baddie6_love1.setThreatSearch(0 /* threat_player1 */)

        $.baddie6_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.baddie6_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR baddie6_love1 100

        $.baddie6_love1.turnToFaceCoord(35.0, -328.0, -100.0)

        // Garage guard1 in garage 2

        $.garage_baddie1_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 55.87, -312.77, 15.1)

        $.garage_baddie1_love1.clearThreatSearch()

        $.garage_baddie1_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie1_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie1_love1 100

        $.garage_baddie1_love1.turnToFaceCoord(56.0, -321.0, -100.0)

        // Garage guard2 in garage 2

        $.garage_baddie2_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 58.24, -312.77, 15.1)

        $.garage_baddie2_love1.clearThreatSearch()

        $.garage_baddie2_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie2_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie2_love1 100

        $.garage_baddie2_love1.turnToFaceCoord(56.0, -321.0, -100.0)

        // Garage guard3 in garage 1

        $.garage_baddie3_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 66.26, -309.99, 15.1)

        $.garage_baddie3_love1.clearThreatSearch()

        $.garage_baddie3_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie3_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie3_love1 100

        $.garage_baddie3_love1.turnToFaceCoord(65.37, -316.3, -100.0)

        // Garage guard4 in garage 3

        $.garage_baddie4_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 28.64, -339.83, 15.1)

        $.garage_baddie4_love1.clearThreatSearch()

        $.garage_baddie4_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie4_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie4_love1 100

        $.garage_baddie4_love1.turnToFaceCoord(35.26, -339.72, -100.0)

        // Garage guard5 in garage 4

        $.garage_baddie5_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 29.8, -350.5, 15.1)

        $.garage_baddie5_love1.clearThreatSearch()

        $.garage_baddie5_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie5_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie5_love1 100

        $.garage_baddie5_love1.turnToFaceCoord(34.6, -350.0, -100.0)

        // Garage guard6 in garage 5

        $.garage_baddie6_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 46.7, -379.3, 15.1)

        $.garage_baddie6_love1.clearThreatSearch()

        $.garage_baddie6_love1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000) // AK47 sets weapon to infinate ammo

        $.garage_baddie6_love1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)

        //ADD_ARMOUR_TO_CHAR garage_baddie6_love1 100

        $.garage_baddie6_love1.turnToFaceCoord(47.1, -375.9, -100.0)

        $.blob_flag = 0

        // waiting for the player to get the OGG to Loves

        while (!$.ojg_love1.locateStoppedAnyMeans2D(49.0, -1550.0, 3.0, 4.0, $.blob_flag)) {
            await asyncWait(0)
            if (Char.IsDead($.ojg_love1)) {
                Text.PrintNow('LOVE1_6', 5000, 1) //"The Old Oriental Gentleman is dead!"
                // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love1_failed') // fallback: would break linear control flow
            }

            // Checks to see while the player is not in the compound if he is in a colombian car or not

            if ($.flag_player_in_area_love1 == 0) {
                if (!$.player.isInModel(131 /* CAR_COLUMB */)) {
                    if ($.flag_player_got_car_message_love1 == 0) {
                        Text.PrintNow('LOVE1_5', 5000, 1) //"Get a colombian car and get on with the mission."
                        $.radar_blip_coord2_love1.remove()
                        $.flag_player_got_car_message_love1 = 1
                    }
                } else {
                    if ($.flag_player_got_car_message_love1 == 1) {
                        $.radar_blip_coord2_love1 = Blip.AddForCoord(52.0, -343.0, -100.0)
                        $.flag_player_got_car_message_love1 = 0
                    }
                }
            }

            // Checks to see if the player has located close enough to the player to be set into his group

            if ($.flag_ojg_in_group == 0 && $.player.locateAnyMeansChar2D($.ojg_love1, 3.0, 3.0, false /* FALSE */)) {
                $.ojg_love1.followPlayer($.player)
                Text.PrintNow('LOVE1_3', 7000, 1) //"Thanks get me back to loves!"
                $.radar_blip_coord2_love1.remove()
                $.radar_blip_coord1_love1 = Blip.AddForCoord(49.1, -1550.5, -100.0)
                $.blob_flag = 1
                $.flag_ojg_in_group = 1
            }
            if ($.flag_ojg_in_group == 0) {
                if ($.player.isInArea3D(92.2, -329.4, 15.0, 96.4, -315.8, 18.0, false /* FALSE */)) {
                    if (!$.player.isInModel(131 /* CAR_COLUMB */) && $.flag_message_car_again == 0 && $.flag_player_in_area_love1 == 1) {
                        //PRINT_NOW ( LOVE1_5 ) 5000 1 //"Get a colombian car and get on with the mission
                        Text.PrintNow('LOVE1_7', 5000, 1) //"The gate will only open for a Colombian Car.
                        $.flag_message_car_again = 1
                    }
                } else {
                    $.flag_message_car_again = 0
                }
            }

            // Checks for the normal guards in the compound

            if ($.flag_baddie1_dead_love1 == 0) {
                if (Char.IsDead($.baddie1_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie1_dead_love1 = 1
                }
            }
            if ($.flag_baddie2_dead_love1 == 0) {
                if (Char.IsDead($.baddie2_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie2_dead_love1 = 1
                }
            }
            if ($.flag_baddie3_dead_love1 == 0) {
                if (Char.IsDead($.baddie3_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie3_dead_love1 = 1
                }
            }
            if ($.flag_baddie4_dead_love1 == 0) {
                if (Char.IsDead($.baddie4_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie4_dead_love1 = 1
                }
            }
            if ($.flag_baddie5_dead_love1 == 0) {
                if (Char.IsDead($.baddie5_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie5_dead_love1 = 1
                }
            }
            if ($.flag_baddie6_dead_love1 == 0) {
                if (Char.IsDead($.baddie6_love1)) {
                    $.flag_kill_player_love1 = 1
                    $.flag_baddie6_dead_love1 = 1
                }
            }

            // Checks to see if the garage door is open and if the guards are still alive sets them to kill the player

            if ($.flag_garage_baddie1_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie1_love1)) {
                    $.flag_garage_baddie1_dead_love1 = 1
                } else {
                    if ($.flag_garage2_open == 1) {
                        $.garage_baddie1_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie1_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }
            if ($.flag_garage_baddie2_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie2_love1)) {
                    $.flag_garage_baddie2_dead_love1 = 1
                } else {
                    if ($.flag_garage2_open == 1) {
                        $.garage_baddie2_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie2_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }
            if ($.flag_garage_baddie3_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie3_love1)) {
                    $.flag_garage_baddie3_dead_love1 = 1
                } else {
                    if ($.flag_garage1_open == 1) {
                        $.garage_baddie3_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie3_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }
            if ($.flag_garage_baddie4_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie4_love1)) {
                    $.flag_garage_baddie4_dead_love1 = 1
                } else {
                    if ($.flag_garage3_open == 1) {
                        $.garage_baddie4_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie4_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }

            if ($.flag_garage_baddie5_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie5_love1)) {
                    $.flag_garage_baddie5_dead_love1 = 1
                } else {
                    if ($.flag_garage4_open == 1) {
                        $.garage_baddie5_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie5_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }
            if ($.flag_garage_baddie6_dead_love1 == 0) {
                if (Char.IsDead($.garage_baddie6_love1)) {
                    $.flag_garage_baddie6_dead_love1 = 1
                } else {
                    if ($.flag_garage5_open == 1) {
                        $.garage_baddie6_love1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                        $.garage_baddie6_love1.setObjKillPlayerAnyMeans($.player)
                    }
                }
            }

            // Checks to see if the player is in the colombian compound and if the guards are alive sets them to kill the player

            if ($.player.isInArea3D(31.0, -317.0, 14.0, 91.0, -394.0, 25.0, false /* FALSE */)) {
                $.flag_kill_player_love1 = 1
            }

            if ($.flag_kill_player_love1 == 1) {
                $.flag_player_in_area_love1 = 1

                //REMOVE_BLIP radar_blip_coord2_love1

                if ($.flag_had_garage_message_love1 == 0) {
                    Text.PrintNow('LOVE1_4', 7000, 1) //"Walk towards the garages, the Old Oriental Gentleman is in one of them."
                    $.flag_had_garage_message_love1 = 1
                }
                if ($.flag_baddie1_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie1_love1)) {
                        if ($.flag_baddie1_in_area_love1 == 0) {
                            $.baddie1_love1.setObjRunToCoord(72.5, -321.9)
                            $.flag_baddie1_in_area_love1 = 1
                        }
                        if ($.flag_baddie1_in_area_love1 == 1) {
                            if ($.baddie1_love1.locateAnyMeans2D(72.5, -321.9, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie1_love1.setObjGuardSpot(72.5, -321.9, 15.17)
                                $.baddie1_love1.turnToFacePlayer($.player)
                                $.baddie1_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }
                if ($.flag_baddie2_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie2_love1)) {
                        if ($.flag_baddie2_in_area_love1 == 0) {
                            $.baddie2_love1.setObjRunToCoord(66.5, -332.0)
                            $.flag_baddie2_in_area_love1 = 1
                        }
                        if ($.flag_baddie2_in_area_love1 == 1) {
                            if ($.baddie2_love1.locateAnyMeans2D(66.5, -332.0, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie2_love1.setObjGuardSpot(66.5, -332.0, 15.17)
                                $.baddie2_love1.turnToFacePlayer($.player)
                                $.baddie2_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }
                if ($.flag_baddie3_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie3_love1)) {
                        if ($.flag_baddie3_in_area_love1 == 0) {
                            $.baddie3_love1.setObjRunToCoord(44.4, -360.7)
                            $.flag_baddie3_in_area_love1 = 1
                        }
                        if ($.flag_baddie3_in_area_love1 == 1) {
                            if ($.baddie3_love1.locateAnyMeans2D(44.4, -360.7, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie3_love1.setObjRunToCoord(47.9, -360.1)
                                $.flag_baddie3_in_area_love1 = 2
                            }
                        }
                        if ($.flag_baddie3_in_area_love1 == 2) {
                            if ($.baddie3_love1.locateAnyMeans2D(47.9, -360.1, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie3_love1.setObjGuardSpot(47.9, -360.1, 15.1)
                                $.baddie3_love1.turnToFacePlayer($.player)
                                $.baddie3_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }
                if ($.flag_baddie4_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie4_love1)) {
                        if ($.flag_baddie4_in_area_love1 == 0) {
                            $.baddie4_love1.setObjRunToCoord(57.0, -365.3)
                            $.flag_baddie4_in_area_love1 = 1
                        }
                        if ($.flag_baddie4_in_area_love1 == 1) {
                            if ($.baddie4_love1.locateAnyMeans2D(57.0, -365.3, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie4_love1.setObjGuardSpot(57.0, -365.3, 15.1)
                                $.baddie4_love1.turnToFacePlayer($.player)
                                $.baddie4_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }
                if ($.flag_baddie5_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie5_love1)) {
                        if ($.flag_baddie5_in_area_love1 == 0) {
                            $.baddie5_love1.setObjRunToCoord(38.7, -345.1)
                            $.flag_baddie5_in_area_love1 = 1
                        }
                        if ($.flag_baddie5_in_area_love1 == 1) {
                            if ($.baddie5_love1.locateAnyMeans2D(38.7, -345.1, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie5_love1.setObjRunToCoord(45.8, -344.3)
                                $.flag_baddie5_in_area_love1 = 2
                            }
                        }
                        if ($.flag_baddie5_in_area_love1 == 2) {
                            if ($.baddie5_love1.locateAnyMeans2D(45.8, -344.3, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie5_love1.setObjGuardSpot(45.8, -344.3, 15.1)
                                $.baddie5_love1.turnToFacePlayer($.player)
                                $.baddie5_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }
                if ($.flag_baddie6_dead_love1 == 0) {
                    if (!Char.IsDead($.baddie6_love1)) {
                        if ($.flag_baddie6_in_area_love1 == 0) {
                            $.baddie6_love1.setObjRunToCoord(37.3, -331.0)
                            $.flag_baddie6_in_area_love1 = 1
                        }
                        if ($.flag_baddie6_in_area_love1 == 1) {
                            if ($.baddie6_love1.locateAnyMeans2D(37.3, -331.0, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie6_love1.setObjRunToCoord(42.5, -331.8)
                                $.flag_baddie6_in_area_love1 = 2
                            }
                        }
                        if ($.flag_baddie6_in_area_love1 == 2) {
                            if ($.baddie6_love1.locateAnyMeans2D(42.5, -331.8, 0.5, 0.5, false /* FALSE */)) {
                                $.baddie6_love1.setObjGuardSpot(42.5, -331.8, 15.1)
                                $.baddie6_love1.turnToFacePlayer($.player)
                                $.baddie6_love1.setStayInSamePlace(true /* TRUE */)
                            }
                        }
                    }
                }

                // Checks for garage1

                if ($.player.isInAreaOnFoot3D(63.01, -317.5, 13.0, 69.28, -321.73, 20.0, false /* FALSE */)) {
                    if ($.flag_garage1_open == 0) {
                        $.garage1_love1.open()
                        $.flag_garage1_open = 1
                    }
                }

                // Checks for garage2

                if ($.player.isInAreaOnFoot3D(53.7, -317.56, 13.0, 61.0, -320.46, 20.0, false /* FALSE */)) {
                    if ($.flag_garage2_open == 0) {
                        $.garage2_love1.open()
                        $.flag_garage2_open = 1
                    }
                }

                // Checks for garage3

                if ($.player.isInAreaOnFoot3D(31.8, -344.4, 13.0, 35.1, -335.6, 20.0, false /* FALSE */)) {
                    if ($.flag_garage3_open == 0) {
                        $.garage3_love1.open()
                        $.flag_garage3_open = 1
                    }
                }

                // Checks for garage4

                if ($.player.isInAreaOnFoot3D(31.41, -355.6, 13.0, 34.21, -344.81, 20.0, false /* FALSE */)) {
                    if ($.flag_garage4_open == 0) {
                        $.garage4_love1.open()
                        $.flag_garage4_open = 1
                    }
                }

                // Checks for garage5

                if ($.player.isInAreaOnFoot3D(52.9, -376.3, 13.0, 42.0, -373.2, 20.0, false /* FALSE */)) {
                    if ($.flag_garage5_open == 0) {
                        $.garage5_love1.open()
                        $.flag_garage5_open = 1
                    }
                }
            }

            // Checks to see if the OGG is in the players group and does the group breaking stuff

            if ($.flag_ojg_in_group == 1) {
                if (Char.IsDead($.ojg_love1)) {
                    Text.PrintNow('LOVE1_6', 5000, 1) //"The Old Oriental Gentleman is dead!"
                    // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_love1_failed') // fallback: would break linear control flow
                }
                if (!$.ojg_love1.isInPlayersGroup($.player) && $.flag_blip_on_ojg_love1 == 0) {
                    Text.PrintNow('HEY8', 5000, 1) //"You have left the Old Oriental Gentleman behind go and get him!"
                    $.radar_blip_ped1_love1 = Blip.AddForChar($.ojg_love1)
                    $.radar_blip_coord1_love1.remove()
                    $.flag_blip_on_ojg_love1 = 1
                    $.blob_flag = 0
                }
                if ($.player.locateAnyMeansChar2D($.ojg_love1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_ojg_love1 == 1) {
                    $.ojg_love1.followPlayer($.player)
                    Text.PrintNow('LOVE1_3', 7000, 1) //"Thanks get me back to loves!"
                    $.radar_blip_ped1_love1.remove()
                    $.radar_blip_coord1_love1 = Blip.AddForCoord(49.1, -1550.5, -100.0)
                    $.flag_blip_on_ojg_love1 = 0
                    $.blob_flag = 1
                }
            }
        }

        $.radar_blip_coord1_love1.remove()

        $.ojg_love1.leaveGroup()

        Hud.SwitchWidescreen(true /* ON */)

        $.player.setControl(false /* OFF */)

        Game.SetPoliceIgnorePlayer($.player, true /* ON */)

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */)

        // Checks to see if the OJG is in a car, if so orders him to get out

        if ($.ojg_love1.isInAnyCar()) {
            $.car2_love1 = $.ojg_love1.storeCarIsIn()
            $.ojg_love1.setObjLeaveCar($.car2_love1)
            while ($.ojg_love1.isInAnyCar()) {
                await asyncWait(0)
                if (Char.IsDead($.ojg_love1)) {
                    Text.PrintNow('LOVe1_6', 5000, 1) //"The Old Oriental Gentleman is dead!"
                    // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_love1_failed') // fallback: would break linear control flow
                }
            }
        }

        // Tells the OJG to go into Loves buildings

        $.ojg_love1.setObjRunToCoord(59.5, -1548.7)

        TIMERB = 0

        while (TIMERB < 1500) {
            await asyncWait(0)
            if (Char.IsDead($.ojg_love1)) {
                Text.PrintNow('LOVe1_6', 5000, 1) //"The Old Oriental Gentleman is dead!"
                // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love1_failed') // fallback: would break linear control flow
            }
        }

        $.ojg_love1.setCoordinates(82.9, -1548.9, 27.2)
        $.ojg_love1.setHeading(270.0)

        $.ojg_love1.setObjGotoCoordOnFoot(98.7, -1548.8)

        Camera.SetFixedPosition(77.5, -1548.8, 28.2, 0.0, 0.0, 0.0)

        Camera.PointAtPoint(93.9, -1548.9, 28.3, 2 /* JUMP_CUT */)

        TIMERB = 0

        while (!$.ojg_love1.locateOnFoot3D(98.7, -1548.8, 27.3, 0.5, 0.5, 4.0, false /* FALSE */)) {
            await asyncWait(0)
            if (Char.IsDead($.ojg_love1)) {
                Text.PrintNow('LOVe1_6', 5000, 1) //"The Old Oriental Gentleman is dead!"
                // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love1_failed') // fallback: would break linear control flow
            }
            if (TIMERB >= 8000) {
                if (!$.ojg_love1.locateOnFoot3D(98.7, -1548.8, 27.3, 0.5, 0.5, 4.0, false /* FALSE */)) {
                    $.ojg_love1.removeElegantly()
                    // SCM GOTO → mission_bloke_stuck_love1 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_bloke_stuck_love1') // fallback: would break linear control flow
                }
            }
        }
    }

    async function mission_bloke_stuck_love1() {
        $.ojg_love1.setIdle()

        Camera.RestoreJumpcut()

        $.ojg_love1.removeElegantly()

        Hud.SwitchWidescreen(false /* OFF */)

        $.player.setControl(true /* ON */)

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */)

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */)
    }

    // SCM GOTO → mission_love1_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love1_passed') // fallback: would break linear control flow

    // Mission Kenji5 failed
}

async function mission_love1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
    $.flag_failed_love1 = 1

    return

    // mission Kenji5 passed
}

async function mission_love1_passed() {
    $.flag_love_mission1_passed = 1
    Stat.RegisterMissionPassed('LOVE1')
    Stat.PlayerMadeProgress(1)
    Text.PrintWithNumberBig('m_pass', 40000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(40000)
    $.player.clearWantedLevel()
    // START_NEW_SCRIPT love_mission2_loop
    return

    // mission cleanup
}

async function mission_cleanup_love1() {
    $.flag_player_on_mission = 0
    $.flag_player_on_love_mission = 0
    Path.RemoveRoute(0)
    Path.RemoveRoute(1)
    $.player.setControl(true /* ON */)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
    Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`)
    $.radar_blip_ped1_love1.remove()
    $.radar_blip_coord1_love1.remove()
    $.radar_blip_coord2_love1.remove()

    if (!Char.IsDead($.baddie1_love1)) {
        $.baddie1_love1.setStayInSamePlace(false /* FALSE */)
    }

    if (!Char.IsDead($.baddie2_love1)) {
        $.baddie2_love1.setStayInSamePlace(false /* FALSE */)
    }

    if (!Char.IsDead($.baddie3_love1)) {
        $.baddie3_love1.setStayInSamePlace(false /* FALSE */)
    }

    if (!Char.IsDead($.baddie4_love1)) {
        $.baddie4_love1.setStayInSamePlace(false /* FALSE */)
    }

    if (!Char.IsDead($.baddie5_love1)) {
        $.baddie5_love1.setStayInSamePlace(false /* FALSE */)
    }

    if (!Char.IsDead($.baddie6_love1)) {
        $.baddie6_love1.setStayInSamePlace(false /* FALSE */)
    }

    Mission.Finish()
    return
}

export async function love1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Love Mission 1*********************************
    // **********************************Save The Old Japanese Gentleman************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME love1

    // Mission start stuff

    // SCM GOSUB mission_start_love1
    await mission_start_love1()
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_love1_failed
        await mission_love1_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_love1
    await mission_cleanup_love1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables For Mission

    // VAR_INT car_love1

    // VAR_INT car_love2

    // VAR_INT ojg_love1

    // VAR_INT baddie1_love1

    // VAR_INT baddie2_love1

    // VAR_INT baddie3_love1

    // VAR_INT baddie4_love1

    // VAR_INT baddie5_love1

    // VAR_INT baddie6_love1

    // VAR_INT garage_baddie1_love1

    // VAR_INT garage_baddie2_love1

    // VAR_INT garage_baddie3_love1

    // VAR_INT garage_baddie4_love1

    // VAR_INT garage_baddie5_love1

    // VAR_INT garage_baddie6_love1

    // VAR_INT radar_blip_ped1_love1

    // VAR_INT flag_ojg_in_group

    // VAR_INT radar_blip_coord1_love1

    // VAR_INT flag_blip_on_ojg_love1

    // VAR_INT car2_love1

    // VAR_INT flag_baddie1_dead_love1

    // VAR_INT flag_baddie2_dead_love1

    // VAR_INT flag_baddie3_dead_love1

    // VAR_INT flag_baddie4_dead_love1

    // VAR_INT flag_baddie5_dead_love1

    // VAR_INT flag_baddie6_dead_love1

    // VAR_INT flag_garage_baddie1_dead_love1

    // VAR_INT flag_garage_baddie2_dead_love1

    // VAR_INT flag_garage_baddie3_dead_love1

    // VAR_INT flag_garage_baddie4_dead_love1

    // VAR_INT flag_garage_baddie5_dead_love1

    // VAR_INT flag_garage_baddie6_dead_love1

    // VAR_INT flag_garage1_open

    // VAR_INT flag_garage2_open

    // VAR_INT flag_garage3_open

    // VAR_INT flag_garage4_open

    // VAR_INT flag_garage5_open

    // VAR_INT radar_blip_coord2_love1

    // VAR_INT ogg_position

    // VAR_INT garage_car1_love1

    // VAR_INT garage_car2_love1

    // VAR_INT flag_had_garage_message_love1

    // VAR_INT ojg_in_area

    // VAR_INT flag_ojg_dead

    // VAR_INT flag_player_in_area_love1

    // VAR_INT flag_player_got_car_message_love1

    // VAR_INT flag_message_car_again

    // VAR_INT flag_ojg_in_area

    // VAR_INT flag_kill_player_love1

    // VAR_INT flag_baddie3_in_area_love1

    // VAR_INT flag_baddie4_in_area_love1

    // VAR_INT flag_baddie5_in_area_love1

    // VAR_INT flag_baddie6_in_area_love1

    // VAR_INT flag_baddie1_in_area_love1

    // VAR_INT flag_baddie2_in_area_love1

    // ****************************************Mission Start************************************
}
