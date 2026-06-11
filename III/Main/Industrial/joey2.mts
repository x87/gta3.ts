// Generated from Main/Industrial/joey2.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *************************************Joey mission 2****************************************
// ************************************Kill Chunky Dave***************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey2

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey2_failed
    // ENDIF

    // GOSUB mission_cleanup_joey2

    // MISSION_END

    // Variables for mission

    // VAR_INT chunkys_car chunkys_car2

    // VAR_INT blip1_jm2 blip2_jm2

    // VAR_INT chunky_mate1 chunky_mate2 chunky_mate3

    // VAR_INT mate1health mate2health mate3health chunkyhealth

    // VAR_INT been_in_shop_before noodle_stand gun_chunky

    // VAR_INT flag_gun_message_jm2 has_audio_been_activated

    //VAR_INT test_car_health_counter

    //VAR_INT flag_player_got_joey2_message

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey2
    await asyncWait(0);

    $.flag_gun_message_jm2 = 0;
    $.has_audio_been_activated = 0;

    /*
    IF CAN_PLAYER_START_MISSION Player
    MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
    ELSE
    GOTO mission_joey2_failed
    ENDIF

    SET_FADING_COLOUR 0 0 0

    DO_FADE 1500 FADE_OUT

    SWITCH_STREAMING OFF

    PRINT_BIG ( JM2 ) 15000 2 //"Joey Mission 2"
    */

    Streaming.LoadSpecialCharacter(1, 'joey');
    Streaming.LoadSpecialModel(CUT_OBJ1, 'JOEYH');
    Streaming.LoadSpecialModel(CUT_OBJ2, 'PLAYERH');
    Streaming.LoadSpecialModel(CUT_OBJ3, 'TROLL');
    Streaming.RequestModel(939 /* jogarageext */);
    Streaming.RequestModel(1074 /* jogarageint */);

    /*
        WHILE GET_FADING_STATUS
        WAIT 0

        ENDWHILE
        */

    //LOAD_SCENE 1190.07 -869.86 13.97

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasModelLoaded(CUT_OBJ1) ||
        !Streaming.HasModelLoaded(CUT_OBJ2) ||
        !Streaming.HasModelLoaded(CUT_OBJ3)
    ) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */)) {
        await asyncWait(0);
    }

    Cutscene.Load('J2_KCL');
    Cutscene.SetOffset(1190.079, -869.861, 13.977);

    $.cs_player = CutsceneObject.Create(PED_PLAYER);
    $.cs_player.setAnim('player');

    $.cs_joey = CutsceneObject.Create(PED_SPECIAL1);
    $.cs_joey.setAnim('joey');

    $.cs_joeyhead = CutsceneHead.Create($.cs_joey, CUT_OBJ1);
    $.cs_joeyhead.setAnim('joey');

    $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ2);
    $.cs_playerhead.setAnim('player');

    $.cs_troll = CutsceneObject.Create(CUT_OBJ3);
    $.cs_troll.setAnim('TROLL');

    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door1 FALSE
    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door2 FALSE

    World.ClearArea(1191.9, -870.4, 15.0, 1.0, true);
    $.player.setCoordinates(1191.9, -870.4, -100.0);

    $.player.setHeading(230.0);

    Camera.DoFade(1500, FADE_IN);

    //SWITCH_WORLD_PROCESSING OFF

    World.SwitchRubbish(OFF);
    Streaming.Switch(ON);
    Cutscene.Start();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 5118) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_A', 10000, 2); // Mission brief

    while ($.cs_time < 10669) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_B', 10000, 2); // Mission brief

    while ($.cs_time < 13048) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_C', 10000, 2); // Mission brief

    while ($.cs_time < 15427) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_D', 10000, 2); // Mission brief

    while ($.cs_time < 17662) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_E', 10000, 2); // Mission brief

    while ($.cs_time < 18887) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_F', 10000, 2); // Mission brief

    while ($.cs_time < 22708) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_G', 10000, 2); // Mission brief

    while ($.cs_time < 25159) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM2_H', 10000, 2); // Mission brief

    while ($.cs_time < 28982) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 31000) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Camera.DoFade(1500, FADE_OUT);

    while (!Cutscene.HasFinished()) {
        await asyncWait(0);
    }

    Text.ClearPrints();

    while (Camera.GetFadingStatus()) {
        await asyncWait(0);
    }

    //SWITCH_WORLD_PROCESSING ON

    World.SwitchRubbish(ON);
    Cutscene.Clear();
    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door1 TRUE
    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door2 TRUE

    Camera.SetInFrontOfPlayer();

    await asyncWait(500);

    Camera.DoFade(1500, FADE_IN);

    Streaming.UnloadSpecialCharacter(1);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ3);
    Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
    Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

    Streaming.LoadSpecialCharacter(2, 'chunky');
    Streaming.RequestModel(PED_GANG_TRIAD_A);
    Streaming.RequestModel(CAR_PERENNIAL);

    while (!Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(PED_GANG_TRIAD_A) || !Streaming.HasModelLoaded(CAR_PERENNIAL)) {
        await asyncWait(0);
    }

    //ADD_BLIP_FOR_COORD 1080.0 -397.0 -100.0 blip2_jm2

    $.gun_chunky = Pickup.CreateWithAmmo(WEAPON_COLT45, PICKUP_ONCE, 45, 1080.5, -396.0, -100.0);
    $.blip2_jm2 = Blip.AddSpriteForPickup($.gun_chunky, RADAR_SPRITE_WEAPON);

    $.noodle_stand = ScriptObject.Create(1406 /* noodlesbox */, 975.0, -720.0, 14.0);

    // START OF MISSION

    $.chunkys_car = Car.Create(CAR_PERENNIAL, 1007.1, -756.4, 14.5);
    $.chunkys_car.setHeading(120.0);
    //LOCK_CAR_DOORS chunkys_car CARLOCK_LOCKOUT_PLAYER_ONLY

    $.chunkys_car2 = Car.Create(CAR_PERENNIAL, 912.3, -686.1, 14.5);
    $.chunkys_car2.setHeading(90.0);
    //LOCK_CAR_DOORS chunkys_car2 CARLOCK_LOCKOUT_PLAYER_ONLY

    $.chunky_mate1 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 976.1, -715.3, 14.2);
    $.chunky_mate1.setHeading(346.0);
    $.chunky_mate1.giveWeapon(WEAPONTYPE_BASEBALLBAT, 0);
    $.chunky_mate1.setObjGuardSpot(976.1, -715.3, 14.2);
    $.chunky_mate1.setPersonality(PEDSTAT_TOUGH_GUY);

    $.chunky_mate2 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 975.7, -724.7, 14.2);
    $.chunky_mate2.setHeading(222.0);
    $.chunky_mate2.giveWeapon(WEAPONTYPE_BASEBALLBAT, 0);
    $.chunky_mate2.setObjGuardSpot(975.7, -724.7, 14.2);
    $.chunky_mate2.setPersonality(PEDSTAT_TOUGH_GUY);

    $.chunky_mate3 = Char.Create(PEDTYPE_GANG_TRIAD, PED_GANG_TRIAD_A, 984.0, -727.7, 14.2);
    $.chunky_mate3.setHeading(243.0);
    $.chunky_mate3.giveWeapon(WEAPONTYPE_PISTOL, 100);
    $.chunky_mate3.setObjGuardSpot(984.0, -727.7, 14.2);
    $.chunky_mate3.setPersonality(PEDSTAT_TOUGH_GUY);

    $.chunky = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 975.3, -720.4, 14.2);
    $.chunky.setHeading(270.0);
    $.blip1_jm2 = Blip.AddForChar($.chunky);
    $.chunky.setObjWaitOnFoot();
    $.chunky.setPersonality(PEDSTAT_GEEK_GUY);
    $.chunky.setRunning(true);
    //SET_CHAR_HEALTH chunky 100

    $.chunky.addArmor(100);
    $.blip1_jm2.changeDisplay(BLIP_ONLY);
    $.chunky.setAnimGroup(ANIM_PANIC_CHUNKYPED);

    setup_block: {
        while (!$.player.locateAnyMeansChar3D($.chunky, 25.0, 26.0, 4.0, false)) {
            await asyncWait(0);
            if (!$.gun_chunky.hasBeenCollected()) {
                await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
            }

            await controller_modes(); // SCM GOSUB controller_modes
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                $.blip2_jm2.remove();
                $.been_in_shop_before = 1;
            }
            if (!Char.IsDead($.chunky)) {
                $.chunky.setOnlyDamagedByPlayer(true);
                $.chunkyhealth = $.chunky.getHealth();
            }
            if (!Char.IsDead($.chunky_mate1)) {
                $.chunky_mate1.setOnlyDamagedByPlayer(true);
                $.mate1health = $.chunky_mate1.getHealth();
            }
            if (!Char.IsDead($.chunky_mate2)) {
                $.chunky_mate2.setOnlyDamagedByPlayer(true);
                $.mate2health = $.chunky_mate2.getHealth();
            }
            if (!Char.IsDead($.chunky_mate3)) {
                $.chunky_mate3.setOnlyDamagedByPlayer(true);
                $.mate3health = $.chunky_mate3.getHealth();
            }
            if ($.mate1health < 99 || $.mate2health < 99 || $.mate3health < 99 || $.chunkyhealth < 99) {
                break setup_block; // SCM GOTO → kill_and_run
            }
            if (Char.IsDead($.chunky_mate1) || Char.IsDead($.chunky_mate2) || Char.IsDead($.chunky_mate3)) {
                break setup_block; // SCM GOTO → kill_and_run
            }
        }

        Game.SetPoliceIgnorePlayer($.player, ON);
        $.player.setControl(OFF);
        Hud.SwitchWidescreen(ON);
        World.SetPedDensityMultiplier(0.0);

        //SET_FIXED_CAMERA_POSITION 977.756 -719.673 16.206 0.0 0.0 0.0

        Camera.SetFixedPosition(984.819, -704.631, 21.468, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(984.279, -705.429, 21.202, JUMP_CUT);

        //IF NOT IS_CHAR_DEAD	chunky
        //	POINT_CAMERA_AT_CHAR chunky FIXED JUMP_CUT
        //ENDIF

        await asyncWait(3000);

        Camera.SetFixedPosition(978.135, -718.497, 15.642, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(977.293, -719.016, 15.794, JUMP_CUT);

        //SET_FIXED_CAMERA_POSITION 984.1 -714.9 17.4 0.0 0.0 0.0
        //IF NOT IS_CHAR_DEAD	chunky
        //	POINT_CAMERA_AT_CHAR chunky FIXED INTERPOLATION
        //ENDIF

        await asyncWait(3000);

        World.SetPedDensityMultiplier(1.0);
        Game.SetPoliceIgnorePlayer($.player, OFF);
        $.player.setControl(ON);
        Hud.SwitchWidescreen(OFF);
        Camera.RestoreJumpcut();
        //REMOVE_BLIP blip3_jm2

        if (Char.IsDead($.chunky)) {
            return; // SCM GOTO → mission_joey2_passed
        }

        while (!$.player.locateAnyMeansChar3D($.chunky, 20.0, 18.0, 4.0, false)) {
            await asyncWait(0);
            if (!$.gun_chunky.hasBeenCollected()) {
                await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
            }

            await controller_modes(); // SCM GOSUB controller_modes
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                $.blip2_jm2.remove();
                $.been_in_shop_before = 1;
            }
            if (!Char.IsDead($.chunky)) {
                $.chunky.setOnlyDamagedByPlayer(true);
                $.chunkyhealth = $.chunky.getHealth();
            }
            if (!Char.IsDead($.chunky_mate1)) {
                $.chunky_mate1.setOnlyDamagedByPlayer(true);
                $.mate1health = $.chunky_mate1.getHealth();
            }
            if (!Char.IsDead($.chunky_mate2)) {
                $.chunky_mate2.setOnlyDamagedByPlayer(true);
                $.mate2health = $.chunky_mate2.getHealth();
            }
            if (!Char.IsDead($.chunky_mate3)) {
                $.chunky_mate3.setOnlyDamagedByPlayer(true);
                $.mate3health = $.chunky_mate3.getHealth();
            }
            if ($.mate1health < 99 || $.mate2health < 99 || $.mate3health < 99 || $.chunkyhealth < 99) {
                break setup_block; // SCM GOTO → kill_and_run
            }
            if (Char.IsDead($.chunky_mate1) || Char.IsDead($.chunky_mate2) || Char.IsDead($.chunky_mate3)) {
                break setup_block; // SCM GOTO → kill_and_run
            }
        }
    }

    kill_and_run: while (true) {
        //REMOVE_BLIP blip3_jm2

        $.blip1_jm2.changeDisplay(BOTH);

        if (!Char.IsDead($.chunky_mate1)) {
            $.chunky_mate1.setObjKillPlayerOnFoot($.player);
            $.chunky_mate1.setOnlyDamagedByPlayer(false);
            $.chunky_mate1.setThreatSearch(THREAT_PLAYER1);
        }

        if (!Char.IsDead($.chunky_mate2)) {
            $.chunky_mate2.setObjKillPlayerOnFoot($.player);
            $.chunky_mate2.setOnlyDamagedByPlayer(false);
            $.chunky_mate2.setThreatSearch(THREAT_PLAYER1);
        }

        if (!Char.IsDead($.chunky_mate3)) {
            $.chunky_mate3.setObjKillPlayerOnFoot($.player);
            $.chunky_mate3.setOnlyDamagedByPlayer(false);
            $.chunky_mate3.setThreatSearch(THREAT_PLAYER1);
        }

        if (!Char.IsDead($.chunky)) {
            $.chunky.setHeedThreats(false);
            $.chunky.setOnlyDamagedByPlayer(false);
        }

        $.chunky.setObjRunToCoord(975.5, -722.9);

        TIMERB = 0;

        while (!$.chunky.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            await pickup_and_audio(); // SCM GOSUB pickup_and_audio
        }

        if ($.player.isInArea2D(974.2, -727.5, 1003.4, -748.8, false)) {
            run_the_other_way: {
                $.chunky.setObjRunToCoord(979.1, -720.8);

                while (!$.chunky.isObjectivePassed()) {
                    await asyncWait(0);
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }

                    await pickup_and_audio(); // SCM GOSUB pickup_and_audio
                }

                $.chunky.setObjRunToCoord(976.7, -687.0);

                while (!$.chunky.isObjectivePassed()) {
                    await asyncWait(0);
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }

                    await pickup_and_audio(); // SCM GOSUB pickup_and_audio
                }

                $.chunky.setObjRunToCoord(943.5, -679.2);

                while (!$.chunky.isObjectivePassed()) {
                    await asyncWait(0);
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }

                    await pickup_and_audio(); // SCM GOSUB pickup_and_audio
                }

                $.chunky.setObjRunToCoord(920.3, -681.5);

                while (!$.chunky.isObjectivePassed()) {
                    await asyncWait(0);
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }

                    await pickup_and_audio(); // SCM GOSUB pickup_and_audio
                }

                if (Char.IsDead($.chunky)) {
                    return; // SCM GOTO → mission_joey2_passed
                }

                if (Car.IsDead($.chunkys_car2)) {
                    break kill_and_run; // SCM GOTO → fuckin_run_for_it
                } else {
                    if (!$.chunkys_car2.isInArea2D(922.7, -673.9, 906.6, -698.0, false) || !$.chunkys_car2.isHealthGreater(300)) {
                        break kill_and_run; // SCM GOTO → fuckin_run_for_it
                    }
                }

                $.chunky.setObjEnterCarAsDriver($.chunkys_car2);

                while (!$.chunky.isInCar($.chunkys_car2)) {
                    await asyncWait(0);
                    if (Car.IsDead($.chunkys_car2)) {
                        break kill_and_run; // SCM GOTO → fuckin_run_for_it
                    } else {
                        if (!$.chunkys_car2.isInArea2D(922.7, -673.9, 906.6, -698.0, false) || !$.chunkys_car2.isHealthGreater(300)) {
                            break kill_and_run; // SCM GOTO → fuckin_run_for_it
                        }
                    }
                    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                        $.blip2_jm2.remove();
                        $.been_in_shop_before = 1;
                    }
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }
                }

                if (!Car.IsDead($.chunkys_car2)) {
                    $.chunkys_car2.wanderRandomly();
                    $.chunkys_car2.setDrivingStyle(2);
                    $.chunkys_car2.setCruiseSpeed(20.0);
                    //LOCK_CAR_DOORS chunkys_car2 CARLOCK_UNLOCKED
                }

                //DISPLAY_ONSCREEN_COUNTER test_car_health_counter //TEST STUFF!!!!!!!!!!!!!

                while ($.chunkys_car2.isHealthGreater(300)) {
                    await asyncWait(0);

                    await controller_modes(); // SCM GOSUB controller_modes
                    if (!$.gun_chunky.hasBeenCollected()) {
                        await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
                    }
                    if (Car.IsDead($.chunkys_car2)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }
                    if (!$.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false)) {
                        Text.PrintNow('AWAY', 5000, 2); // Mission brief
                        FAIL("mission_joey2_failed");
                    }
                    if (!$.chunky.isInCar($.chunkys_car2)) {
                        break kill_and_run; // SCM GOTO → fuckin_run_for_it
                    }
                    if ($.chunkys_car2.isUpsidedown() && $.chunkys_car2.isStopped()) {
                        $.chunky.setObjLeaveCar($.chunkys_car2);
                        break kill_and_run; // SCM GOTO → fuckin_run_for_it
                    }
                    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                        $.blip2_jm2.remove();
                        $.been_in_shop_before = 1;
                    }
                }

                if (Char.IsDead($.chunky)) {
                    return; // SCM GOTO → mission_joey2_passed
                }

                $.chunky.setObjLeaveCar($.chunkys_car2);

                while ($.chunky.isInCar($.chunkys_car2)) {
                    await asyncWait(0);

                    await controller_modes(); // SCM GOSUB controller_modes
                    if (!$.gun_chunky.hasBeenCollected()) {
                        await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
                    }
                    if (Char.IsDead($.chunky)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }
                    if (!$.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false)) {
                        Text.PrintNow('AWAY', 5000, 2); // Mission brief
                        FAIL("mission_joey2_failed");
                    }
                    if (Car.IsDead($.chunkys_car2)) {
                        return; // SCM GOTO → mission_joey2_passed
                    }
                    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                        $.blip2_jm2.remove();
                        $.been_in_shop_before = 1;
                    }
                }
                break kill_and_run; // xxx: fallthrough fuckin_run_for_it
            }
        }

        $.chunky.setObjRunToCoord(985.1, -733.9);

        while (!$.chunky.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }

            await pickup_and_audio(); // SCM GOSUB pickup_and_audio
        }

        $.chunky.setObjRunToCoord(1004.2, -736.9);

        while (!$.chunky.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }

            await pickup_and_audio(); // SCM GOSUB pickup_and_audio
        }

        $.chunky.setObjRunToCoord(1006.3, -753.2);

        while (!$.chunky.isObjectivePassed()) {
            await asyncWait(0);
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }

            await pickup_and_audio(); // SCM GOSUB pickup_and_audio
        }

        if (Char.IsDead($.chunky)) {
            return; // SCM GOTO → mission_joey2_passed
        }

        if (Car.IsDead($.chunkys_car)) {
            break kill_and_run; // SCM GOTO → fuckin_run_for_it
        } else {
            if (!$.chunkys_car.isInArea2D(1004.0, -738.0, 1012.0, -763.0, false) || !$.chunkys_car.isHealthGreater(300)) {
                break kill_and_run; // SCM GOTO → fuckin_run_for_it
            }
        }

        $.chunky.setObjEnterCarAsDriver($.chunkys_car);

        while (!$.chunky.isInCar($.chunkys_car)) {
            await asyncWait(0);
            if (Car.IsDead($.chunkys_car)) {
                break kill_and_run; // SCM GOTO → fuckin_run_for_it
            } else {
                if (!$.chunkys_car.isInArea2D(1004.0, -738.0, 1012.0, -763.0, false) || !$.chunkys_car.isHealthGreater(300)) {
                    break kill_and_run; // SCM GOTO → fuckin_run_for_it
                }
            }
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                $.blip2_jm2.remove();
                $.been_in_shop_before = 1;
            }
        }

        if (!Car.IsDead($.chunkys_car)) {
            $.chunkys_car.wanderRandomly();
            $.chunkys_car.setDrivingStyle(2);
            $.chunkys_car.setCruiseSpeed(20.0);
            //LOCK_CAR_DOORS chunkys_car CARLOCK_UNLOCKED
        }

        //DISPLAY_ONSCREEN_COUNTER test_car_health_counter //TEST STUFF!!!!!!!!!!!!!

        while ($.chunkys_car.isHealthGreater(300)) {
            await asyncWait(0);

            await controller_modes(); // SCM GOSUB controller_modes
            if (!$.gun_chunky.hasBeenCollected()) {
                await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
            }
            if (Car.IsDead($.chunkys_car)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if (!$.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false)) {
                Text.PrintNow('AWAY', 5000, 2); // Mission brief
                FAIL("mission_joey2_failed");
            }
            if (!$.chunky.isInCar($.chunkys_car)) {
                break kill_and_run; // SCM GOTO → fuckin_run_for_it
            }
            if ($.chunkys_car.isUpsidedown() && $.chunkys_car.isStopped()) {
                $.chunky.setObjLeaveCar($.chunkys_car);
                break kill_and_run; // SCM GOTO → fuckin_run_for_it
            }
            if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                $.blip2_jm2.remove();
                $.been_in_shop_before = 1;
            }
        }

        if (Char.IsDead($.chunky)) {
            return; // SCM GOTO → mission_joey2_passed
        }

        $.chunky.setObjLeaveCar($.chunkys_car);

        while ($.chunky.isInCar($.chunkys_car)) {
            await asyncWait(0);
            await controller_modes(); // SCM GOSUB controller_modes

            if (!$.gun_chunky.hasBeenCollected()) {
                await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
            }
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if (!$.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false)) {
                Text.PrintNow('AWAY', 5000, 2); // Mission brief
                FAIL("mission_joey2_failed");
            }
            if (Car.IsDead($.chunkys_car)) {
                return; // SCM GOTO → mission_joey2_passed
            }
            if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
                $.blip2_jm2.remove();
                $.been_in_shop_before = 1;
            }
        }

        break kill_and_run; // SCM GOTO → fuckin_run_for_it
    }

    fuckin_run_for_it: {
        if (!Char.IsDead($.chunky)) {
            $.chunky.setObjFleePlayerOnFootAlways($.player);
        }

        //CHANGE_BLIP_DISPLAY blip1_jm2 BOTH

        while (!Char.IsDead($.chunky)) {
            await asyncWait(0);
            if (Char.IsDead($.chunky)) {
                return; // SCM GOTO → mission_joey2_passed
            }

            await controller_modes(); // SCM GOSUB controller_modes
            await pickup_and_audio(); // SCM GOSUB pickup_and_audio

            if (!$.gun_chunky.hasBeenCollected()) {
                await Ammu_bloke_audio(); // SCM GOSUB Ammu_bloke_audio
            }
            if (!$.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false)) {
                Text.PrintNow('AWAY', 5000, 2); // Mission brief
                FAIL("mission_joey2_failed");
            }
        }
    }
}

// Mission joey2 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission joey2 passed
async function onPassed() {
    $.flag_joey_mission2_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(10000);
    Stat.RegisterMissionPassed('JM2');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT joey_mission3_loop
    if ($.out_of_stock_pistol == 0) {
        // START_NEW_SCRIPT pistol_message
    }
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    $.special_ammu_audio = 0;
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_TRIAD_A);
    Streaming.MarkModelAsNoLongerNeeded(CAR_PERENNIAL);
    Streaming.UnloadSpecialCharacter(2);
    $.blip1_jm2.remove();
    $.blip2_jm2.remove();
    $.gun_chunky.remove();
    if (!Char.IsDead($.chunky)) {
        $.chunky.removeElegantly();
    }
    Mission.Finish();
}

async function controller_modes() {
    if ($.flag_player_had_gun_message == 0) {
        if ($.player.isInAreaOnFoot3D(1075.2, -384.8, 14.0, 1086.2, -403.3, 17.0, false)) {
            $.controlmode = Pad.GetControllerMode();

            // Control Mode 0

            if ($.controlmode == 0) {
                if ($.flag_gun_message_jm2 == 0) {
                    Text.PrintHelp('GUN_1A'); //"Use R2 and L2 to cycle through your weapons."
                    TIMERB = 0;
                    $.flag_gun_message_jm2 = 1;
                }
                if ($.flag_gun_message_jm2 == 1) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_2A'); //"Hold R1 to auto-target, press circle to fire!"
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 2;
                    }
                }
                if ($.flag_gun_message_jm2 == 2) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_3A'); //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 3;
                    }
                }
                if ($.flag_gun_message_jm2 == 3) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_4A'); //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 4;
                    }
                }
                if ($.flag_gun_message_jm2 == 4) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_5'); //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                        $.flag_gun_message_jm2 = 5;
                        $.flag_player_had_gun_message = 1;
                    }
                }
            }

            // Control Mode 1

            if ($.controlmode == 1) {
                if ($.flag_gun_message_jm2 == 0) {
                    Text.PrintHelp('GUN_1A'); //"Use R2 and L2 to cycle through your weapons."
                    TIMERB = 0;
                    $.flag_gun_message_jm2 = 1;
                }
                if ($.flag_gun_message_jm2 == 1) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_2A'); //"Hold R1 to auto-target, press circle to fire!"
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 2;
                    }
                }
                if ($.flag_gun_message_jm2 == 2) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_3A'); //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 3;
                    }
                }
                if ($.flag_gun_message_jm2 == 3) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_4A'); //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 4;
                    }
                }
                if ($.flag_gun_message_jm2 == 4) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_5'); //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                        $.flag_gun_message_jm2 = 5;
                        $.flag_player_had_gun_message = 1;
                    }
                }
            }

            // Control Mode 2

            if ($.controlmode == 2) {
                if ($.flag_gun_message_jm2 == 0) {
                    Text.PrintHelp('GUN_1A'); //"Use R2 and L2 to cycle through your weapons."
                    TIMERB = 0;
                    $.flag_gun_message_jm2 = 1;
                }
                if ($.flag_gun_message_jm2 == 1) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_2C'); //"Hold R1 to auto-target, press circle to fire!"
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 2;
                    }
                }
                if ($.flag_gun_message_jm2 == 2) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_3A'); //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 3;
                    }
                }
                if ($.flag_gun_message_jm2 == 3) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_4A'); //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 4;
                    }
                }
                if ($.flag_gun_message_jm2 == 4) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_5'); //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                        $.flag_gun_message_jm2 = 5;
                        $.flag_player_had_gun_message = 1;
                    }
                }
            }

            // Control Mode 3

            if ($.controlmode == 3) {
                if ($.flag_gun_message_jm2 == 0) {
                    Text.PrintHelp('GUN_1A'); //"Use R2 and L2 to cycle through your weapons."
                    TIMERB = 0;
                    $.flag_gun_message_jm2 = 1;
                }
                if ($.flag_gun_message_jm2 == 1) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_2D'); //"Hold R1 to auto-target, press circle to fire!"
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 2;
                        //	flag_player_had_gun_message = 1
                    }
                }
                if ($.flag_gun_message_jm2 == 1) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_2C'); //"Hold R1 to auto-target, press circle to fire!"
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 2;
                    }
                }
                if ($.flag_gun_message_jm2 == 2) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_3B'); //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 3;
                    }
                }
                if ($.flag_gun_message_jm2 == 3) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_4B'); //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
                        TIMERB = 0;
                        $.flag_gun_message_jm2 = 4;
                    }
                }
                if ($.flag_gun_message_jm2 == 4) {
                    if (TIMERB > 10000) {
                        Text.PrintHelp('GUN_5'); //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
                        $.flag_gun_message_jm2 = 5;
                        $.flag_player_had_gun_message = 1;
                    }
                }
            }
        }
    }
}

async function Ammu_bloke_audio() {
    if ($.has_audio_been_activated == 0) {
        if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false)) {
            $.special_ammu_audio = 1;
            Audio.LoadMissionAudio(SfxMission.Ammu_b); //AMMU_B
            if ($.camera_ammu1 == 1) {
                if (!Char.IsDead($.ammu_shop_bloke1)) {
                    clear_audio: {
                        while (!Audio.HasMissionAudioLoaded()) {
                            await asyncWait(0);
                            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
                                break clear_audio; // SCM GOTO → clear_audio
                            }
                        }
                        Audio.PlayMissionAudio();
                        Text.PrintNow('AMMU_B', 5000, 2); // Mission brief
                        while (!Audio.HasMissionAudioFinished()) {
                            await asyncWait(0);
                            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
                                break clear_audio; // SCM GOTO → clear_audio
                            }
                        }
                        Audio.LoadMissionAudio(SfxMission.Ammu_c); //AMMU_C
                        while (!Audio.HasMissionAudioLoaded()) {
                            await asyncWait(0);
                            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
                                break clear_audio; // SCM GOTO → clear_audio
                            }
                        }
                        Audio.PlayMissionAudio();
                        Text.PrintNow('AMMU_C', 5000, 2); // Mission brief
                    }
                    // SCM label clear_audio
                    $.has_audio_been_activated = 1;
                    //CLEAR_MISSION_AUDIO
                    $.special_ammu_audio = 0;
                } else {
                    $.special_ammu_audio = 0;
                    Audio.ClearMissionAudio();
                }
            }
        } else {
            $.special_ammu_audio = 0;
            Audio.ClearMissionAudio();
        }
    }
}

async function pickup_and_audio() {
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
        $.blip2_jm2.remove();
        $.been_in_shop_before = 1;
    }

    if (!Char.IsDead($.chunky)) {
        if (TIMERB > 2500) {
            TIMERB = 0;
            $.chunky.setSay(SOUND_CHUNKY_RUN_SHOUT);
        }
    }
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
