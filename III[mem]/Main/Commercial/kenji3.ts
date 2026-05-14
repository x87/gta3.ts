// Generated from Main/Commercial/kenji3.sc
import { $ } from '../../utils';


async function mission_start_kenji3() {
    $.flag_player_on_mission = 1;

    $.flag_player_on_kenji_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.flag_player_had_car_message_km3 = 0;

    $.flag_player_been_bad_km3 = 0;

    $.counter_number_of_colombians_killed_km3 = 0;

    $.counter_all_colombian_cars_dead_km3 = 0;

    $.flag_colombian1_dead_km3 = 0;

    $.flag_colombian2_dead_km3 = 0;

    $.flag_colombian5_dead_km3 = 0;

    $.flag_colombian6_dead_km3 = 0;

    $.flag_colombian_car1_dead_km3 = 0;

    $.flag_colombian_car2_dead_km3 = 0;

    $.flag_yakuza1_km3_dead = 0;

    $.flag_blip_on_yakuza_km3 = 0;

    $.blob_flag = 1;

    $.flag_yakuza_message_km3 = 0;

    $.flag_bloke_in_car_km3 = 0;

    $.flag_car1_created_km3 = 0;

    $.flag_car2_created_km3 = 0;

    $.money_been_picked_up_km3 = 0;

    $.flag_money_created_km3 = 0;

    $.flag_go_for_player_km3 = 0;

    $.flag_trap_audio_removed_km3 = 0;

    $.flag_helper_not_in_car_km3 = 0;

    Path.SwitchRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
    Path.SwitchPedRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);

    {
        // ****************************************START OF CUTSCENE********************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_kenji3_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( KM3 ) 15000 2  //"Kenji Mission 3"

  SWITCH_STREAMING OFF
  */

        // Cutscene stuff

        Streaming.LoadSpecialCharacter(1, 'KENJI');
        Streaming.RequestModel(16 /* PED_GANG_YAKUZA_A */);
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'KENJIH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'PLAYERH');
        Streaming.RequestModel(1570 /* casino_garden */);

        /*
  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(16 /* PED_GANG_YAKUZA_A */) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(1570 /* casino_garden */)
        ) {
            await asyncWait(0);
        }

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE

        Cutscene.Load('k3_ds');

        Cutscene.SetOffset(476.38, -1382.168, 67.347);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);

        $.cs_player.setAnim('player');

        $.cs_kenji = CutsceneObject.Create(26 /* PED_SPECIAL1 */);

        $.cs_kenji.setAnim('kenji');

        $.cs_yakuza = CutsceneObject.Create(16 /* PED_GANG_YAKUZA_A */);

        $.cs_yakuza.setAnim('gang07');

        $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, 185 /* CUT_OBJ1 */);

        $.cs_kenjihead.setAnim('kenji');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 186 /* CUT_OBJ2 */);

        $.cs_playerhead.setAnim('player');

        World.ClearArea(459.1, -1413.0, 25.11, 1.0, true /* TRUE */);

        $.player.setCoordinates(459.1, -1413.0, 25.11);

        $.player.setHeading(132.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);

        Streaming.Switch(true /* ON */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 1533) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_A', 10000, 1); //"When trouble looms, the fool turns his back, while the wise man faces it down."

        while ($.cs_time < 6549) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_B', 10000, 1); //"The Colombian Cartel have ignored repeated requests to leave our interests in Liberty well alone."

        while ($.cs_time < 11426) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_C', 10000, 1); //"Now they are negotiating terms with the Jamaicans in order to humiliate us further."

        while ($.cs_time < 15676) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_D', 10000, 1); //"They are finalizing a deal across town. Take some of my men, steal a Yardie car and go pay your respects to the Colombians."

        while ($.cs_time < 17697) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_F', 10000, 1); //"Take one of my men, steal a Yardie car and go pay your respects to the Colombians."

        while ($.cs_time < 22086) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM3_E', 10000, 1); //"Our honor demands that you leave no one alive."

        while ($.cs_time < 24442) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('KM3_E');

        while ($.cs_time < 25000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();

        World.SwitchRubbish(true /* ON */);

        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(1570 /* casino_garden */);

        // *******************************************END OF CUTSCENE*******************************

        Streaming.RequestModel(135 /* CAR_YARDIE */);

        Streaming.RequestModel(138 /* CAR_COLUMB */);

        Streaming.RequestModel(18 /* PED_GANG_YARDIE_A */);

        Streaming.RequestModel(20 /* PED_GANG_COLOMBIAN_A */);

        while (
            !Streaming.HasModelLoaded(135 /* CAR_YARDIE */) ||
            !Streaming.HasModelLoaded(18 /* PED_GANG_YARDIE_A */) ||
            !Streaming.HasModelLoaded(20 /* PED_GANG_COLOMBIAN_A */) ||
            !Streaming.HasModelLoaded(138 /* CAR_COLUMB */)
        ) {
            await asyncWait(0);
        }

        Text.PrintNow('KM3_1', 7000, 1); //"First go and get the yardie car!"

        // waiting for the player to steal a yardie car

        Audio.LoadMissionAudio('k3_a' as any);

        while (!$.player.isInModel(135 /* CAR_YARDIE */) || !Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Text.PrintNow('KM3_2', 7000, 1); //"Good now pick up the boys in the yardie car, press the horn to get them into the car!"

        // yakuza bloke 1

        $.yakuza1_km3 = Char.Create(4 /* PEDTYPE_CIVMALE */, 16 /* PED_GANG_YAKUZA_A */, 99.6, -414.3, -100.0);

        $.yakuza1_km3.clearThreatSearch();

        $.yakuza1_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        $.yakuza1_km3.setHeading(0.0);

        $.yakuza1_km3.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to infinate ammo

        $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);

        // waiting for the player to reach the yakuza gang members

        while (!$.player.locateInCarChar3D($.yakuza1_km3, 8.0, 8.0, 8.0, false /* FALSE */) || !$.player.isInModel(135 /* CAR_YARDIE */) || !$.player.isStopped()) {
            await asyncWait(0);
            if (Char.IsDead($.yakuza1_km3)) {
                Text.PrintNow('KM3_10', 5000, 1); //"The contact is dead!"
                $.flag_yakuza1_km3_dead = 1;
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (!$.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 0) {
                Text.PrintNow('KM3_8', 7000, 1); //"Get a Yardie car and get on with the mission!"
                $.radar_blip_ped1_km3.remove();
                $.flag_player_had_car_message_km3 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
                $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
                $.flag_player_had_car_message_km3 = 0;
                $.blob_flag = 1;
            }
        }

        $.yakuza1_km3.followPlayer($.player);
        $.radar_blip_ped1_km3.remove();

        // waiting for the yakuza guy to get into the players car and give his message

        while (!$.player.locateInCarChar3D($.yakuza1_km3, 1.0, 1.0, 3.0, false /* FALSE */) || !$.player.isInModel(135 /* CAR_YARDIE */)) {
            //OR NOT IS_PLAYER_STOPPED player

            await asyncWait(0);
            if (Char.IsDead($.yakuza1_km3)) {
                Text.PrintNow('KM3_10', 5000, 1); //"The contact is dead!"
                $.flag_yakuza1_km3_dead = 1;
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (!$.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 0) {
                Text.PrintNow('KM3_8', 7000, 1); //"Get a Yardie car and get on with the mission!"
                $.radar_blip_ped1_km3.remove();
                $.flag_player_had_car_message_km3 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
                $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
                $.flag_player_had_car_message_km3 = 0;
                $.blob_flag = 1;
            }
            if (!$.yakuza1_km3.isInPlayersGroup($.player) && $.flag_yakuza_message_km3 == 0) {
                Text.PrintNow('HEY9', 5000, 1); //"You have not got the information from the contact go back and get it."
                $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
                $.flag_yakuza_message_km3 = 1;
            }
            if ($.player.locateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, false /* FALSE */) && $.flag_yakuza_message_km3 == 1) {
                $.yakuza1_km3.followPlayer($.player);
                $.radar_blip_ped1_km3.remove();
                $.flag_yakuza_message_km3 = 0;
            }
        }

        $.radar_blip_ped1_km3.remove();

        Text.PrintNow('KM3_3', 5000, 1); //"Okay the meeting is being held at XXXXXXX!"

        $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);

        // Colombian car 1

        $.colombian_car1_km3 = Car.Create(138 /* CAR_COLUMB */, 230.3, -42.2, -100.0);

        $.colombian_car1_km3.setHeading(0.0);

        $.colombian_car1_km3.setOnlyDamagedByPlayer(true /* TRUE */);

        $.colombian_car1_km3.changeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);

        $.flag_car1_created_km3 = 1;

        // Colombian car 2

        $.colombian_car2_km3 = Car.Create(138 /* CAR_COLUMB */, 235.9, -41.3, -100.0);

        $.colombian_car2_km3.setHeading(0.0);

        $.colombian_car2_km3.setOnlyDamagedByPlayer(true /* TRUE */);

        $.colombian_car2_km3.changeLock(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);

        $.flag_car2_created_km3 = 1;

        // creates colombian 1 in car 1

        $.colombian1_km3 = Char.CreateInsideCar($.colombian_car1_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */);

        $.colombian1_km3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000); //AK47 set to infinate ammo

        $.colombian1_km3.clearThreatSearch();

        $.colombian_car1_km3.setIdle();

        // creates colombian 2 in car 1

        $.colombian2_km3 = Char.CreateAsPassenger($.colombian_car1_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */, 0);

        $.colombian2_km3.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); //set to infinate ammo

        $.colombian2_km3.clearThreatSearch();

        // creates colombian 5 in car 2

        $.colombian5_km3 = Char.CreateInsideCar($.colombian_car2_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */);

        $.colombian5_km3.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); //set to infinate ammo

        $.colombian_car2_km3.setIdle();

        $.colombian5_km3.clearThreatSearch();

        // creates colombian 6 in car 2

        $.colombian6_km3 = Char.CreateAsPassenger($.colombian_car2_km3, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */, 0);

        $.colombian6_km3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000); //AK47 set to infinate ammo

        $.colombian6_km3.clearThreatSearch();

        // waiting for the player to get to the meeting

        $.blob_flag = 1;

        while (!$.player.locateStoppedInCar2D(231.1, -26.3, 6.0, 6.0, $.blob_flag) || !$.player.isInModel(135 /* CAR_YARDIE */)) {
            await asyncWait(0);
            if ($.flag_yakuza1_km3_dead == 0) {
                if (Char.IsDead($.yakuza1_km3)) {
                    $.flag_yakuza1_km3_dead = 1;
                } else {
                    if (!$.yakuza1_km3.isInPlayersGroup($.player) && $.flag_blip_on_yakuza_km3 == 0) {
                        Text.PrintNow('HEY7', 5000, 1); //"You have left your contact behind go and get him!"
                        $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
                        $.radar_blip_coord2_km3.remove();
                        $.flag_blip_on_yakuza_km3 = 1;
                        $.blob_flag = 0;
                    }
                    if ($.player.locateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_yakuza_km3 == 1) {
                        $.yakuza1_km3.followPlayer($.player);
                        $.radar_blip_ped1_km3.remove();
                        $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
                        $.flag_blip_on_yakuza_km3 = 0;
                        $.blob_flag = 1;
                    }
                }
            }
            if (Car.IsDead($.colombian_car1_km3)) {
                $.flag_colombian_car1_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered.!"
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.colombian_car2_km3)) {
                $.flag_colombian_car2_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered.!
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian1_km3)) {
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian2_km3)) {
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian5_km3)) {
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian6_km3)) {
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (!$.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 0) {
                Text.PrintNow('KM3_8', 7000, 1); //"Get a Yardie car and get on with the mission!
                $.radar_blip_coord2_km3.remove();
                $.flag_player_had_car_message_km3 = 1;
                $.blob_flag = 0;
            }
            if ($.player.isInModel(135 /* CAR_YARDIE */) && $.flag_player_had_car_message_km3 == 1) {
                $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
                $.flag_player_had_car_message_km3 = 0;
                $.blob_flag = 1;
            }
            if ($.player.locateAnyMeans2D(231.1, -26.3, 10.0, 10.0, false /* FALSE */)) {
                if (!$.player.isInModel(135 /* CAR_YARDIE */) || $.player.isShooting()) {
                    Text.PrintNow('KM3_14', 7000, 1); //"You have been seen the deals off"
                    // SCM GOSUB attack_player
                    await attack_player();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
            }
        }

        $.radar_blip_coord2_km3.remove();

        if ($.flag_colombian_car1_dead_km3 == 0) {
            $.colombian_car1_km3.setOnlyDamagedByPlayer(false /* FALSE */);
        }

        if ($.flag_colombian_car2_dead_km3 == 0) {
            $.colombian_car2_km3.setOnlyDamagedByPlayer(false /* FALSE */);
        }

        Text.PrintNow('KM3_5', 7000, 1); //"Press the horn to get the deal going, as soon as the Columbians are out of the car kill them all!"

        // waiting for the player to press the horn

        $.blob_flag = 1;

        while (!$.player.isPressingHorn() || !$.player.locateStoppedInCar2D(231.1, -26.3, 6.0, 6.0, $.blob_flag) || !$.player.isInModel(135 /* CAR_YARDIE */)) {
            await asyncWait(0);
            if ($.flag_yakuza1_km3_dead == 0) {
                if (Char.IsDead($.yakuza1_km3)) {
                    $.flag_yakuza1_km3_dead = 1;
                } else {
                    if (!$.yakuza1_km3.isInPlayersGroup($.player) && $.flag_blip_on_yakuza_km3 == 0) {
                        Text.PrintNow('HEY7', 5000, 1); //"You have left your contact behind go and get him!"
                        $.radar_blip_ped1_km3 = Blip.AddForChar($.yakuza1_km3);
                        $.radar_blip_coord2_km3.remove();
                        $.flag_blip_on_yakuza_km3 = 1;
                        $.blob_flag = 0;
                    }
                    if ($.player.locateAnyMeansChar2D($.yakuza1_km3, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_yakuza_km3 == 1) {
                        $.yakuza1_km3.followPlayer($.player);
                        $.radar_blip_ped1_km3.remove();
                        $.radar_blip_coord2_km3 = Blip.AddForCoord(231.1, -26.3, -100.0);
                        $.flag_blip_on_yakuza_km3 = 0;
                        $.blob_flag = 1;
                    }
                    $.yakuza1_km3.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                }
            }
            if (Car.IsDead($.colombian_car1_km3)) {
                $.flag_colombian_car1_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The vehicle's KM3_11!
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.colombian_car2_km3)) {
                $.flag_colombian_car2_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The vehicle's KM3_11!
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian1_km3)) {
                $.flag_colombian1_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian2_km3)) {
                $.flag_colombian2_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian5_km3)) {
                $.flag_colombian5_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian6_km3)) {
                $.flag_colombian6_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if ($.player.locateAnyMeans2D(231.1, -26.3, 10.0, 10.0, false /* FALSE */)) {
                if (!$.player.isInModel(135 /* CAR_YARDIE */) || $.player.isShooting()) {
                    Text.PrintNow('KM3_14', 7000, 1); //"You have been seen the deals off"
                    // SCM GOSUB attack_player
                    await attack_player();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
            }
        }

        Text.ClearThisPrint('KM3_5');

        Hud.SwitchWidescreen(true /* ON */);

        $.player.setControl(false /* OFF */);

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        World.ClearArea(252.0, -45.75, 20.8, 1.0, true /* TRUE */);

        Camera.SetFixedPosition(252.0, -45.75, 20.8, 0.0, 0.0, 0.0);

        Camera.PointAtPoint(251.1, -45.2, 20.6, 2 /* JUMP_CUT */);

        $.colombian1_km3.setObjLeaveCar($.colombian_car1_km3);

        $.colombian2_km3.setObjLeaveCar($.colombian_car1_km3);

        $.colombian5_km3.setObjLeaveCar($.colombian_car2_km3);

        $.colombian6_km3.setObjLeaveCar($.colombian_car2_km3);

        if (!Car.IsDead($.colombian_car1_km3)) {
            $.colombian_car1_km3.changeLock(1 /* CARLOCK_UNLOCKED */);
        }

        if (!Car.IsDead($.colombian_car2_km3)) {
            $.colombian_car2_km3.changeLock(1 /* CARLOCK_UNLOCKED */);
        }

        // waiting for the guys to get out of the car

        while (
            $.colombian1_km3.isInCar($.colombian_car1_km3) &&
            $.colombian2_km3.isInCar($.colombian_car1_km3) &&
            $.colombian5_km3.isInCar($.colombian_car2_km3) &&
            $.colombian6_km3.isInCar($.colombian_car2_km3)
        ) {
            await asyncWait(0);
            if ($.flag_yakuza1_km3_dead == 0) {
                if (Char.IsDead($.yakuza1_km3)) {
                    $.flag_yakuza1_km3_dead = 1;
                }
            }
            if (Car.IsDead($.colombian_car1_km3)) {
                $.flag_colombian_car1_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.colombian_car2_km3)) {
                $.flag_colombian_car2_dead_km3 = 1;
                Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian1_km3)) {
                $.flag_colombian1_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian2_km3)) {
                $.flag_colombian2_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian5_km3)) {
                $.flag_colombian5_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.colombian6_km3)) {
                $.flag_colombian6_dead_km3 = 1;
                Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
            }
        }

        //IF NOT IS_CHAR_DEAD colombian2_km3
        //	POINT_CAMERA_AT_CHAR colombian2_km3 FOLLOWPED JUMP_CUT
        //ENDIF

        if ($.flag_colombian2_dead_km3 == 0) {
            $.colombian2_km3.setObjGotoCoordOnFoot(233.3, -37.1);
            while (!$.colombian2_km3.isObjectivePassed()) {
                await asyncWait(0);
                if ($.flag_yakuza1_km3_dead == 0) {
                    if (Char.IsDead($.yakuza1_km3)) {
                        $.flag_yakuza1_km3_dead = 1;
                    }
                }
                if (Car.IsDead($.colombian_car1_km3)) {
                    $.flag_colombian_car1_dead_km3 = 1;
                    Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.colombian_car2_km3)) {
                    $.flag_colombian_car2_dead_km3 = 1;
                    Text.PrintNow('KM3_11', 5000, 1); //"The Cartel have been attacked and the briefcase has not been recovered."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
                if (Char.IsDead($.colombian1_km3)) {
                    $.flag_colombian1_dead_km3 = 1;
                    Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
                if (Char.IsDead($.colombian2_km3)) {
                    $.flag_colombian2_dead_km3 = 1;
                    Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
                if (Char.IsDead($.colombian5_km3)) {
                    $.flag_colombian5_dead_km3 = 1;
                    Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
                if (Char.IsDead($.colombian6_km3)) {
                    $.flag_colombian6_dead_km3 = 1;
                    Text.PrintNow('KM3_9', 5000, 1); //"One of the Colombians is dead, the deals off."
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
            }
            $.money_km3 = Pickup.Create(1319 /* briefcase */, 3 /* PICKUP_ONCE */, 233.7, -36.0, 15.8);
            $.flag_money_created_km3 = 1;
        }

        Hud.SwitchWidescreen(false /* OFF */);

        Camera.RestoreJumpcut();

        $.player.setControl(true /* ON */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);

        Text.PrintNow('KM3_12', 5000, 1); //"Kill all of the Colombians, destory the vehicles and recover the briefcase."

        TIMERA = 0;

        while ($.flag_go_for_player_km3 == 0) {
            await asyncWait(0);
            if (TIMERA >= 4000) {
                $.flag_go_for_player_km3 = 1;
            }
            if ($.flag_yakuza1_km3_dead == 0) {
                if (Char.IsDead($.yakuza1_km3)) {
                    $.flag_yakuza1_km3_dead = 1;
                } else {
                    if ($.flag_helper_not_in_car_km3 == 0) {
                        if ($.yakuza1_km3.isInAnyCar()) {
                            $.car3_km3 = $.yakuza1_km3.storeCarIsIn();
                            if (!Car.IsDead($.car3_km3)) {
                                $.yakuza1_km3.leaveGroup();
                                $.yakuza1_km3.setObjLeaveCar($.car3_km3);
                            }
                        } else {
                            $.flag_helper_not_in_car_km3 = 1;
                        }
                    }
                    if ($.flag_helper_not_in_car_km3 == 1) {
                        $.yakuza1_km3.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza1_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    }
                }
            }
            if ($.flag_colombian1_dead_km3 == 0) {
                if (Char.IsDead($.colombian1_km3)) {
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian1_dead_km3 = 1;
                }
            }
            if ($.flag_colombian2_dead_km3 == 0) {
                if (Char.IsDead($.colombian2_km3)) {
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian2_dead_km3 = 1;
                }
            }
            if ($.flag_colombian5_dead_km3 == 0) {
                if (Char.IsDead($.colombian5_km3)) {
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian5_dead_km3 = 1;
                }
            }
            if ($.flag_colombian6_dead_km3 == 0) {
                if (Char.IsDead($.colombian6_km3)) {
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian6_dead_km3 = 1;
                }
            }

            if ($.flag_colombian_car1_dead_km3 == 0) {
                if (Car.IsDead($.colombian_car1_km3)) {
                    ++$.counter_all_colombian_cars_dead_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian_car1_dead_km3 = 1;
                }
            }
            if ($.flag_colombian_car2_dead_km3 == 0) {
                if (Car.IsDead($.colombian_car2_km3)) {
                    ++$.counter_all_colombian_cars_dead_km3;
                    $.flag_go_for_player_km3 = 1;
                    $.flag_colombian_car2_dead_km3 = 1;
                }
            }
            if (!$.player.isInModel(135 /* CAR_YARDIE */)) {
                $.flag_go_for_player_km3 = 1;
            }
            if (!$.player.locateAnyMeans2D(231.1, -26.3, 6.0, 6.0, false /* FALSE */)) {
                $.flag_go_for_player_km3 = 1;
            }
            if ($.player.locateAnyMeans2D(231.1, -26.3, 6.0, 6.0, false /* FALSE */)) {
                if ($.player.isShooting()) {
                    $.flag_go_for_player_km3 = 1;
                }
            }
            if ($.money_been_picked_up_km3 == 0) {
                if ($.money_km3.hasBeenCollected()) {
                    Text.PrintNow('KM4_8', 5000, 1); //"Briefcase collected!"
                    $.flag_go_for_player_km3 = 1;
                    $.money_been_picked_up_km3 = 1;
                }
            }
        }
    }

    async function kill_player_km3() {
        Audio.PlayMissionAudio();

        Text.PrintNow('KM3_7', 7000, 1); //"Hey... your not who we were expecting!"

        // briefcase

        if ($.money_been_picked_up_km3 == 0) {
            $.radar_blip_money_km3 = Blip.AddForPickup($.money_km3);
        }

        // car 1

        if ($.flag_colombian_car1_dead_km3 == 0) {
            $.radar_blip_colombian_car1_km3 = Blip.AddForCar($.colombian_car1_km3);
        }

        // car 2

        if ($.flag_colombian_car2_dead_km3 == 0) {
            $.radar_blip_colombian_car2_km3 = Blip.AddForCar($.colombian_car2_km3);
        }

        // colombian1

        if ($.flag_colombian1_dead_km3 == 0) {
            $.colombian1_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.colombian1_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
            $.colombian1_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

            //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT colombian1_km3 player

            $.radar_blip_colombian1_km3 = Blip.AddForChar($.colombian1_km3);
        }

        // colombian2

        if ($.flag_colombian2_dead_km3 == 0) {
            $.colombian2_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.colombian2_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
            $.colombian2_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

            //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT colombian2_km3 player

            $.radar_blip_colombian2_km3 = Blip.AddForChar($.colombian2_km3);
        }

        // colombian5

        if ($.flag_colombian5_dead_km3 == 0) {
            $.radar_blip_colombian5_km3 = Blip.AddForChar($.colombian5_km3);
            $.colombian5_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.colombian5_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
            $.colombian5_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

            //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS colombian5_km3 player
        }

        // colombian6

        if ($.flag_colombian6_dead_km3 == 0) {
            $.radar_blip_colombian6_km3 = Blip.AddForChar($.colombian6_km3);
            $.colombian6_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.colombian6_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
            $.colombian6_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

            //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT colombian6_km3 player
        }

        TIMERB = 0;

        // waiting for all the columbains and their cars to be destroyed

        while (!($.counter_number_of_colombians_killed_km3 == 4) || !($.counter_all_colombian_cars_dead_km3 == 2) || !($.money_been_picked_up_km3 == 1)) {
            await asyncWait(0);
            if ($.flag_trap_audio_removed_km3 == 0) {
                if (Audio.HasMissionAudioFinished()) {
                    Text.ClearThisPrint('KM3_7');
                    $.flag_trap_audio_removed_km3 = 1;
                }
            }
            if ($.money_been_picked_up_km3 == 0) {
                if ($.money_km3.hasBeenCollected()) {
                    Text.PrintNow('KM4_8', 5000, 1); //"Briefcase collected!"
                    $.radar_blip_money_km3.remove();
                    $.money_been_picked_up_km3 = 1;
                }
            }

            if ($.flag_yakuza1_km3_dead == 0) {
                if (Char.IsDead($.yakuza1_km3)) {
                    $.flag_yakuza1_km3_dead = 1;
                } else {
                    if ($.flag_helper_not_in_car_km3 == 0) {
                        if ($.yakuza1_km3.isInAnyCar()) {
                            $.car3_km3 = $.yakuza1_km3.storeCarIsIn();
                            if (!Car.IsDead($.car3_km3)) {
                                $.yakuza1_km3.leaveGroup();
                                $.yakuza1_km3.setObjLeaveCar($.car3_km3);
                            }
                        } else {
                            $.flag_helper_not_in_car_km3 = 1;
                        }
                    }
                    if ($.flag_helper_not_in_car_km3 == 1) {
                        $.yakuza1_km3.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza1_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    }
                }
            }
            if ($.counter_number_of_colombians_killed_km3 == 4) {
                if (!Char.IsDead($.yakuza1_km3)) {
                    if ($.player.locateAnyMeansChar2D($.yakuza1_km3, 20.0, 20.0, false /* FALSE */)) {
                        $.yakuza1_km3.followPlayer($.player);
                    }
                }
            }
            if ($.flag_colombian1_dead_km3 == 0) {
                if (Char.IsDead($.colombian1_km3)) {
                    $.radar_blip_colombian1_km3.remove();
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_colombian1_dead_km3 = 1;
                }
            }
            if ($.flag_colombian2_dead_km3 == 0) {
                if (Char.IsDead($.colombian2_km3)) {
                    $.radar_blip_colombian2_km3.remove();
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_colombian2_dead_km3 = 1;
                }
            }
            if ($.flag_colombian5_dead_km3 == 0) {
                if (Char.IsDead($.colombian5_km3)) {
                    $.radar_blip_colombian5_km3.remove();
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_colombian5_dead_km3 = 1;
                }
            }
            if ($.flag_colombian6_dead_km3 == 0) {
                if (Char.IsDead($.colombian6_km3)) {
                    $.radar_blip_colombian6_km3.remove();
                    ++$.counter_number_of_colombians_killed_km3;
                    $.flag_colombian6_dead_km3 = 1;
                }
            }

            if ($.flag_colombian_car1_dead_km3 == 0) {
                if (Car.IsDead($.colombian_car1_km3)) {
                    $.radar_blip_colombian_car1_km3.remove();
                    ++$.counter_all_colombian_cars_dead_km3;
                    $.flag_colombian_car1_dead_km3 = 1;
                }
            }
            if ($.flag_colombian_car2_dead_km3 == 0) {
                if (Car.IsDead($.colombian_car2_km3)) {
                    $.radar_blip_colombian_car2_km3.remove();
                    ++$.counter_all_colombian_cars_dead_km3;
                    $.flag_colombian_car2_dead_km3 = 1;
                }
            }
        }

        if (!Char.IsDead($.yakuza1_km3)) {
            if ($.player.locateAnyMeansChar2D($.yakuza1_km3, 20.0, 20.0, false /* FALSE */)) {
                $.yakuza1_km3.followPlayer($.player);
            }
        }

        Text.PrintNow('KM3_13', 5000, 1); //"Take the briefcase back to the casino."

        $.radar_blip_coord3_km3 = Blip.AddForCoord(452.3, -1465.8, 17.6);

        $.blob_flag = 1;

        while (!$.player.locateStoppedAnyMeans3D(452.3, -1465.8, 17.6, 4.0, 4.0, 4.0, $.blob_flag)) {
            await asyncWait(0);
        }

        $.radar_blip_coord3_km3.remove();

        Hud.SwitchWidescreen(true /* ON */);

        $.player.setControl(false /* OFF */);

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        $.script_controlled_player = $.player.getChar();

        if ($.player.isInAnyCar()) {
            $.car_cut_km3 = $.player.storeCarIsIn();
            $.script_controlled_player.setObjLeaveCar($.car_cut_km3);
            while ($.player.isInCar($.car_cut_km3)) {
                await asyncWait(0);
                if (Car.IsDead($.car_cut_km3)) {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicles wrecked!"
                    // SCM GOTO → mission_kenji3_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji3_failed'); // fallback: would break linear control flow
                }
            }
        }

        Camera.SetFixedPosition(420.41, -1479.59, 26.13, 0.0, 0.0, 0.0);

        Camera.PointAtPoint(420.87, -1478.75, 26.38, 2 /* JUMP_CUT */);

        $.player.setCoordinates(425.85, -1477.16, -100.0);

        $.script_controlled_player.setObjGotoCoordOnFoot(428.57, -1465.01);

        while (!$.script_controlled_player.isObjectivePassed()) {
            await asyncWait(0);
        }

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1000, 0 /* FADE_OUT */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        $.player.setCoordinates(426.81, -1486.4, 17.64);

        $.player.setHeading(180.0);

        Camera.RestoreJumpcut();

        Camera.SetInFrontOfPlayer();

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1000, 1 /* FADE_IN */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Hud.SwitchWidescreen(false /* OFF */);

        $.player.setControl(true /* ON */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
    }

    // SCM GOTO → mission_kenji3_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_kenji3_passed'); // fallback: would break linear control flow

    // Mission Kenji3 failed
}

async function mission_kenji3_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    return;

    // mission Kenji3 passed
}

async function mission_kenji3_passed() {
    $.flag_kenji_mission3_passed = 1;
    Stat.RegisterMissionPassed('KM3');
    Stat.PlayerMadeProgress(1);
    Text.PrintWithNumberBig('M_PASS', 25000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.addScore(25000);
    $.player.clearWantedLevel();
    // START_NEW_SCRIPT kenji_mission4_loop
    return;

    // mission cleanup
}

async function mission_cleanup_kenji3() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_kenji_mission = 0;

    if (!Car.IsDead($.colombian_car1_km3)) {
        if ($.flag_colombian_car1_dead_km3 == 0) {
            $.colombian_car1_km3.changeLock(1 /* CARLOCK_UNLOCKED */);
            $.colombian_car1_km3.setOnlyDamagedByPlayer(false /* FALSE */);
        }
    }

    if (!Car.IsDead($.colombian_car2_km3)) {
        if ($.flag_colombian_car2_dead_km3 == 0) {
            $.colombian_car2_km3.changeLock(1 /* CARLOCK_UNLOCKED */);
            $.colombian_car2_km3.setOnlyDamagedByPlayer(false /* FALSE */);
        }
    }

    if ($.flag_money_created_km3 == 1) {
        if ($.money_been_picked_up_km3 == 0) {
            $.money_km3.remove();
        }
    }

    Streaming.MarkModelAsNoLongerNeeded(135 /* CAR_YARDIE */);
    Streaming.MarkModelAsNoLongerNeeded(138 /* CAR_COLUMB */);
    Streaming.MarkModelAsNoLongerNeeded(16 /* PED_GANG_YAKUZA_A */);
    Streaming.MarkModelAsNoLongerNeeded(18 /* PED_GANG_YARDIE_A */);
    Streaming.MarkModelAsNoLongerNeeded(20 /* PED_GANG_COLOMBIAN_A */);
    $.radar_blip_ped1_km3.remove();
    $.radar_blip_coord2_km3.remove();
    $.radar_blip_colombian_car1_km3.remove();
    $.radar_blip_colombian_car2_km3.remove();
    $.radar_blip_colombian1_km3.remove();
    $.radar_blip_colombian2_km3.remove();
    $.radar_blip_colombian5_km3.remove();
    $.radar_blip_colombian6_km3.remove();
    $.radar_blip_money_km3.remove();
    $.radar_blip_coord3_km3.remove();
    Mission.Finish();
    return;
}

async function attack_player() {
    // colombian1

    if ($.flag_colombian1_dead_km3 == 0) {
        $.colombian1_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.colombian1_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
        $.colombian1_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.colombian1_km3.setObjKillPlayerAnyMeans($.player);
    }

    // colombian2

    if ($.flag_colombian2_dead_km3 == 0) {
        $.colombian2_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.colombian2_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
        $.colombian2_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.colombian2_km3.setObjKillPlayerAnyMeans($.player);
    }

    // colombian5

    if ($.flag_colombian5_dead_km3 == 0) {
        $.colombian5_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.colombian5_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
        $.colombian5_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.colombian5_km3.setObjKillPlayerAnyMeans($.player);
    }

    // colombian6

    if ($.flag_colombian6_dead_km3 == 0) {
        $.colombian6_km3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.colombian6_km3.setThreatSearch(1024 /* THREAT_GANG_YAKUZA */);
        $.colombian6_km3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.colombian6_km3.setObjKillPlayerAnyMeans($.player);
    }

    return;
}

export async function kenji3() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Kenji Mission 3*********************************
    // *******************************************Deal Steal************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME kenji3

    // Mission start stuff

    // SCM GOSUB mission_start_kenji3
    await mission_start_kenji3();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_kenji3_failed
        await mission_kenji3_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_kenji3
    await mission_cleanup_kenji3();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT colombian_car1_km3

    // VAR_INT colombian_car2_km3

    // VAR_INT colombian1_km3

    // VAR_INT colombian2_km3

    // VAR_INT colombian5_km3

    // VAR_INT colombian6_km3

    // VAR_INT yakuza1_km3

    // VAR_INT counter_number_of_yardies_dead_km3

    // VAR_INT radar_blip_yardie_car_km3

    // VAR_INT radar_blip_ped1_km3

    // VAR_INT radar_blip_coord2_km3

    // VAR_INT flag_player_had_car_message_km3

    // VAR_INT flag_player_had_repair_message_km3

    // VAR_INT flag_player_been_bad_km3

    // VAR_INT radar_blip_colombian_car1_km3

    // VAR_INT radar_blip_colombian_car2_km3

    // VAR_INT radar_blip_colombian1_km3

    // VAR_INT radar_blip_colombian2_km3

    // VAR_INT radar_blip_colombian5_km3

    // VAR_INT radar_blip_colombian6_km3

    // VAR_INT counter_number_of_colombians_killed_km3

    // VAR_INT counter_all_colombian_cars_dead_km3

    // VAR_INT flag_colombian1_dead_km3

    // VAR_INT flag_colombian2_dead_km3

    // VAR_INT flag_colombian5_dead_km3

    // VAR_INT flag_colombian6_dead_km3

    // VAR_INT flag_colombian_car1_dead_km3

    // VAR_INT flag_colombian_car2_dead_km3

    // VAR_INT car_km3

    // VAR_INT flag_yakuza1_km3_dead

    // VAR_INT car2_km3

    // VAR_INT car3_km3

    // VAR_INT car_cut_km3

    // VAR_INT flag_blip_on_yakuza_km3

    // VAR_INT flag_yakuza_message_km3

    // VAR_INT flag_bloke_in_car_km3

    // VAR_INT flag_car1_created_km3

    // VAR_INT flag_car2_created_km3

    // VAR_INT money_km3

    // VAR_INT radar_blip_money_km3

    // VAR_INT money_been_picked_up_km3

    // VAR_INT radar_blip_coord3_km3

    // VAR_INT flag_money_created_km3

    // VAR_INT flag_go_for_player_km3

    // VAR_INT flag_trap_audio_removed_km3

    // VAR_INT flag_helper_not_in_car_km3

    // ****************************************Mission Start************************************
}
