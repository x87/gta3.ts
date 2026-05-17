// Generated from Main/Industrial/joey1.sc
import { $ } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// *************************************Joey mission 1****************************************
// ************************************Kill Mike Lips*****************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_joey1

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_joey1_failed
    // ENDIF

    // GOSUB mission_cleanup_joey1

    // MISSION_END

    // Variables for mission

    // VAR_INT mike_car

    // VAR_FLOAT mikes_car_heading

    // VAR_INT blip1_jm1 blip2_jm1 blip3_jm1 blip4_jm1

    // VAR_INT flag_player_got_joey1_message flag_car_blip_displayed_jm1

    // VAR_INT flag_displayed_wanted_message_jm1

    // VAR_INT countdown_jm1 mission_passed_for_lips_finished

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    $.mission_passed_for_lips_finished = 0;
    // SCRIPT_NAME joey1
    await asyncWait(0);

    $.flag_displayed_wanted_message_jm1 = 0;

    Streaming.LoadSpecialCharacter(1, 'joey');
    Streaming.LoadSpecialCharacter(2, 'misty');
    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'JOEDOOR');
    Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'JOEYH');
    Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'PLAYERH');
    Streaming.LoadSpecialModel(188 /* cut_obj4 */, 'MISTYH');
    Streaming.RequestModel(91 /* CAR_IDAHO */);
    Streaming.RequestModel(939 /* jogarageext */);
    Streaming.RequestModel(1074 /* jogarageint */);

    Streaming.LoadAllModelsNow();

    while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */)) {
        await asyncWait(0);
    }

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasModelLoaded(91 /* CAR_IDAHO */)) {
        await asyncWait(0);
    }

    while (
        !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
        !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
        !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
        !Streaming.HasModelLoaded(188 /* cut_obj4 */)
    ) {
        await asyncWait(0);
    }

    Cutscene.Load('J1_LFL');
    Cutscene.SetOffset(1190.079, -869.861, 13.977);

    $.cut_car2_lm3 = Car.Create(91 /* CAR_IDAHO */, 1182.5, -857.0, 14.1);
    $.cut_car2_lm3.setHeading(291.2);

    $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
    $.cs_player.setAnim('player');

    $.cs_joey = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
    $.cs_joey.setAnim('joey');

    $.cs_misty = CutsceneObject.Create(27 /* PED_SPECIAL2 */);
    $.cs_misty.setAnim('misty');

    $.cs_joeyhead = CutsceneHead.Create($.cs_joey, 186 /* CUT_OBJ2 */);
    $.cs_joeyhead.setAnim('joey');

    $.cs_mistyhead = CutsceneHead.Create($.cs_misty, 188 /* CUT_OBJ4 */);
    $.cs_mistyhead.setAnim('misty');

    $.cs_playerhead = CutsceneHead.Create($.cs_player, 187 /* CUT_OBJ3 */);
    $.cs_playerhead.setAnim('player');

    $.cs_joedoor = CutsceneObject.Create(185 /* cut_obj1 */);
    $.cs_joedoor.setAnim('JOEDOOR');

    World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, false /* FALSE */);
    World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, false /* FALSE */);

    World.ClearArea(1191.9, -870.4, 15.0, 1.0, true /* TRUE */);
    $.player.setCoordinates(1191.9, -870.4, -100.0);

    $.player.setHeading(230.0);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    World.SwitchRubbish(false /* OFF */);
    Streaming.Switch(true /* ON */);
    Cutscene.Start();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 433) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_A', 10000, 2); // Mission brief

    while ($.cs_time < 2739) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_B', 10000, 2); // Mission brief

    while ($.cs_time < 6344) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_C', 10000, 2); // Mission brief

    while ($.cs_time < 8362) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_D', 10000, 2); // Mission brief

    while ($.cs_time < 10700) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_E', 10000, 2); // Mission brief

    while ($.cs_time < 12688) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_F', 10000, 2); // Mission brief

    while ($.cs_time < 15858) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_G', 10000, 2); // Mission brief

    while ($.cs_time < 19969) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_H', 10000, 2); // Mission brief

    while ($.cs_time < 21519) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_I', 3000, 2); // Mission brief

    while ($.cs_time < 24979) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_J', 10000, 2); // Mission brief

    while ($.cs_time < 27466) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('JM1_K', 10000, 2); // Mission brief

    while ($.cs_time < 29204) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 30000) {
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

    World.SwitchRubbish(true /* ON */);
    Cutscene.Clear();
    World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1375 /* joey_door1 */, true /* TRUE */);
    World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, 1374 /* joey_door2 */, true /* TRUE */);
    Camera.SetInFrontOfPlayer();

    $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */);
    $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
    $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0);
    $.blip2_jm1.remove();
    $.blip3_jm1.remove();
    $.blip4_jm1.remove();

    await asyncWait(500);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
    Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
    Streaming.MarkModelAsNoLongerNeeded(187 /* CUT_OBJ3 */);
    Streaming.MarkModelAsNoLongerNeeded(188 /* CUT_OBJ4 */);
    Streaming.MarkModelAsNoLongerNeeded(91 /* CAR_IDAHO */);
    Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
    Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

    $.cut_car2_lm3.delete();

    // START OF MISSION

    Streaming.LoadSpecialCharacter(3, 'lips');
    Streaming.RequestModel(91 /* CAR_IDAHO */);

    while (!Streaming.HasModelLoaded(91 /* CAR_IDAHO */) || !Streaming.HasSpecialCharacterLoaded(3)) {
        await asyncWait(0);
    }

    if ($.timer_help_message_displayed == 0) {
        Text.PrintHelp('TIMER');
        $.timer_help_message_displayed = 1;
    }

    $.mike_car = Car.Create(91 /* CAR_IDAHO */, 1336.2, -460.8, -100.0);
    $.mike_car.makeABitStronger(true /* TRUE */);
    $.mike_car.lockDoors(6 /* CARLOCK_FORCE_SHUT_DOORS */);
    $.mike_car.setHeading(90.0);
    $.mike_car.setCanRespray(false /* OFF */);
    $.blip1_jm1 = Blip.AddForCar($.mike_car);
    $.countdown_jm1 = 361000;
    Hud.DisplayTimer($.countdown_jm1);

    if (Car.IsDead($.mike_car)) {
        Text.PrintNow('WRECKED', 5000, 1);
        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
    }

    while (!$.player.isInCar($.mike_car)) {
        await asyncWait(0);
        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if ($.countdown_jm1 == 0) {
            Text.PrintNow('OUTTIME', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
    }

    Text.PrintNow('JM1_1', 5000, 1); //"Go to 8 Balls"

    Game.SetFreeBombs(true /* On */);

    Go_to_8Balls: while (true) {
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;

        while (!$.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */) && !$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */)) {
            await asyncWait(0);
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                    if (!$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */) || !$.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) {
                        $.blip2_jm1.remove();
                        $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */);
                        $.blip1_jm1.remove();
                    }
                    $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                    $.blip1_jm1 = Blip.AddForCar($.mike_car);
                    $.blip2_jm1.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                }
            }
            if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                Text.PrintSoon('JM1_4', 5000, 2); //Repair the car!
                $.blip1_jm1.remove();
                $.blip1_jm1 = Blip.AddForCar($.mike_car);
                $.blip1_jm1.changeDisplay(2 /* BLIP_ONLY */);
                $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                while ($.mike_car.isVisiblyDamaged()) {
                    await asyncWait(0);
                    if (Car.IsDead($.mike_car)) {
                        Text.PrintNow('WRECKED', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */) || $.mike_car.isArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) {
                        $.blip2_jm1.remove();
                    }
                    if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                        Text.PrintNow('WRECKED', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.countdown_jm1 == 0) {
                        Text.PrintNow('OUTTIME', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                            $.blip4_jm1.remove();
                            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                            $.blip1_jm1.remove();
                            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
                        }
                    }
                    if (!$.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                            $.blip1_jm1 = Blip.AddForCar($.mike_car);
                            $.blip4_jm1.remove();
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                        }
                    }
                }
                $.blip4_jm1.remove();
                continue Go_to_8Balls; // SCM GOTO → Go_to_8Balls
            }
        }

        await asyncWait(4000);

        Text.PrintNow('JM1_2', 5000, 2); // Car rigged
        $.blip1_jm1.remove();
        $.blip2_jm1.remove();
        $.blip4_jm1.remove();
        break; // xxx: fallthrough
    }

    one_before_joey_label1: Game.SetFreeBombs(false /* Off */);

    joey_label1: while (true) {
        await asyncWait(0);
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;

        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }

        $.blob_flag = 1;

        while (!$.mike_car.isStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, !!$.blob_flag) || $.player.isWantedLevelGreater(0) || $.mike_car.isVisiblyDamaged()) {
            await asyncWait(0);
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                    $.blip3_jm1.remove();
                    $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0);
                    $.blip1_jm1.remove();
                    $.blob_flag = 1;
                    $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.mike_car)) {
                if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                    $.blip1_jm1 = Blip.AddForCar($.mike_car);
                    $.blip3_jm1.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.blob_flag = 0;
                    $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                }
            }
            if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                Text.PrintSoon('JM1_4', 5000, 2); //Repair the car!
                $.blip3_jm1.remove();
                $.blip1_jm1.remove();
                $.blip1_jm1 = Blip.AddForCar($.mike_car);
                $.blip1_jm1.changeDisplay(2 /* BLIP_ONLY */);
                $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                while ($.mike_car.isVisiblyDamaged()) {
                    await asyncWait(0);
                    if (Car.IsDead($.mike_car)) {
                        Text.PrintNow('WRECKED', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                        Text.PrintNow('WRECKED', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.countdown_jm1 == 0) {
                        Text.PrintNow('OUTTIME', 5000, 1);
                        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                    }
                    if ($.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
                            $.blip4_jm1.remove();
                            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
                            $.blip1_jm1.remove();
                            $.blob_flag = 1;
                            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
                        }
                    }
                    if (!$.player.isInCar($.mike_car)) {
                        if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
                            $.blip1_jm1 = Blip.AddForCar($.mike_car);
                            $.blip4_jm1.remove();
                            Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                            $.blob_flag = 0;
                            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
                        }
                    }
                }
                $.blip4_jm1.remove();
                continue joey_label1; // SCM GOTO → joey_label1
            }
            if ($.player.isInAreaInCar3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm1 == 0) {
                        Text.PrintNow('WANTED1', 4000, 1);
                        $.flag_displayed_wanted_message_jm1 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                    $.flag_displayed_wanted_message_jm1 = 0;
                }
            }
        }

        $.blip1_jm1.remove();
        $.blip2_jm1.remove();
        $.blip3_jm1.remove();
        $.blip4_jm1.remove();

        if ($.countdown_jm1 == 0) {
            Text.PrintNow('OUTTIME', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }

        if (!Car.IsDead($.mike_car)) {
            $.mikes_car_heading = $.mike_car.getHeading();
            if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
                Text.PrintNow('JM1_6', 5000, 1); //Put the car back in the correct position
                continue joey_label1; // SCM GOTO → joey_label1
            }
            if ($.player.isInCar($.mike_car)) {
                Text.PrintNow('JM1_3', 5000, 2); //Activate the car bomb then get out of there!
            }
        }

        cars_rigged: while (true) {
            await asyncWait(0);

            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }

            while (
                !$.mike_car.isStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, true /* TRUE */) ||
                $.player.isInArea3D(1306.0, -482.0, 49.0, 1350.0, -444.0, 59.0, false /* FALSE */) ||
                !$.player.isInArea3D(1306.0, -484.0, 49.0, 1370.0, -434.0, 69.0, false /* FALSE */)
            ) {
                await asyncWait(0);
                if (Car.IsDead($.mike_car)) {
                    Text.PrintNow('WRECKED', 5000, 1);
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                }
                if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                    Text.PrintNow('WRECKED', 5000, 1);
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                }
                if ($.countdown_jm1 == 0) {
                    Text.PrintNow('OUTTIME', 5000, 1);
                    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
                }
                if (!$.mike_car.isInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, false /* FALSE */)) {
                    Text.PrintNow('JM1_6', 5000, 1);
                    continue joey_label1; // SCM GOTO → joey_label1
                }
                $.mikes_car_heading = $.mike_car.getHeading();
                if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
                    Text.PrintNow('JM1_6', 5000, 1);
                    continue joey_label1; // SCM GOTO → joey_label1
                }
                if (!$.mike_car.isHealthGreater(700) || $.mike_car.isVisiblyDamaged()) {
                    continue joey_label1; // SCM GOTO → joey_label1
                }
            }

            if ($.countdown_jm1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }

            if (!$.mike_car.isArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */)) {
                Text.PrintNow('JM1_5', 5000, 1); // The vehicle bomb's not set!
                continue cars_rigged; // SCM GOTO → cars_rigged
            }
            break joey_label1; // xxx: fallthrough to LIPS CUT_SCENE
        } //xxx: endof cars_rigged
    } //xxx:: endof joey_label1

    //LIPS CUT_SCENE

    World.ClearArea(1325.5, -452.5, 54.0, 4.0, true /* TRUE */);
    World.ClearArea(1328.4, -453.0, 54.0, 4.0, true /* TRUE */);
    World.ClearArea(1330.0, -466.1, 49.0, 4.0, true /* TRUE */);
    World.ClearArea(1333.6, -465.3, 49.0, 4.0, true /* TRUE */);

    Hud.ClearTimer($.countdown_jm1);
    Game.SetPoliceIgnorePlayer($.player, true /* On */);
    $.player.setControl(false /* Off */);
    Hud.SwitchWidescreen(true /* ON */);

    $.lips = Char.Create(21 /* PEDTYPE_SPECIAL */, 28 /* PED_SPECIAL3 */, 1325.5, -452.5, -100.0);
    $.lips.setHeading(270.0);

    Camera.SetFixedPosition(1337.814, -468.631, 49.774, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(1337.053, -468.016, 49.982, 2 /* JUMP_CUT */);

    $.lips.setObjGotoCoordOnFoot(1328.4, -453.0);

    if (Char.IsDead($.lips)) {
        return; // SCM GOTO → mission_joey1_passed
    }

    TIMERB = 0;

    if (!Char.IsDead($.lips)) {
        while (!$.lips.isObjectivePassed()) {
            await asyncWait(0);
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.lips)) {
                return; // SCM GOTO → mission_joey1_passed
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.lips.setCoordinates(1328.4, -453.0, -100.0);
                }
            }
        }
    }

    TIMERB = 0;

    if (!Char.IsDead($.lips)) {
        $.lips.setObjGotoCoordOnFoot(1330.0, -466.1);
    }

    while (!$.lips.isObjectivePassed()) {
        await asyncWait(0);
        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if (Char.IsDead($.lips)) {
            return; // SCM GOTO → mission_joey1_passed
        }
        if (TIMERB > 10000) {
            if (!Char.IsDead($.lips)) {
                $.lips.setCoordinates(1330.0, -466.1, -100.0);
            }
        }
    }

    TIMERB = 0;

    if (!Char.IsDead($.lips)) {
        $.lips.setObjGotoCoordOnFoot(1333.6, -465.3);
    }

    Camera.SetFixedPosition(1344.8, -471.2, 54.0, 0.0, 0.0, 0.0);

    if (!Car.IsDead($.mike_car)) {
        Camera.PointAtCar($.mike_car, 15 /* FIXED */, 2 /* JUMP_CUT */);
    }

    if (!Char.IsDead($.lips)) {
        while (!$.lips.isObjectivePassed()) {
            await asyncWait(0);
            if (Car.IsDead($.mike_car)) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
                Text.PrintNow('WRECKED', 5000, 1);
                // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.lips)) {
                return; // SCM GOTO → mission_joey1_passed
            }
            if (TIMERB > 10000) {
                if (!Char.IsDead($.lips)) {
                    $.lips.setCoordinates(1333.6, -465.3, -100.0);
                }
            }
        }
    }

    if (!Char.IsDead($.lips) && !Car.IsDead($.mike_car)) {
        $.lips.setObjEnterCarAsDriver($.mike_car);
    }

    while (!$.lips.isInCar($.mike_car)) {
        await asyncWait(0);
        if (Car.IsDead($.mike_car)) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if ($.mike_car.isUpsidedown() && $.mike_car.isStopped()) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey1_failed'); // fallback: would break linear control flow
        }
        if (Char.IsDead($.lips)) {
            return; // SCM GOTO → mission_joey1_passed
        }
    }

    Game.SetAllCarsCanBeDamaged(true /* TRUE */);

    await asyncWait(2500);
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
    $.player.addScore(10000);
    $.mission_passed_for_lips_finished = 1;
    await asyncWait(5000);

    $.player.setControl(true /* On */);
    Hud.SwitchWidescreen(false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player, false /* Off */);
}

// Mission joey1 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
}

// mission joey1 passed
async function onPassed() {
    $.flag_joey_mission1_passed = 1;

    if ($.mission_passed_for_lips_finished == 0) {
        Audio.PlayMissionPassedTune(1);
        Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1); //"Mission Passed!"
        $.player.addScore(10000);
        $.mission_passed_for_lips_finished = 1;
    }

    Stat.RegisterMissionPassed('JM1');
    Stat.PlayerMadeProgress(1);
    $.lips.removeElegantly();
    // START_NEW_SCRIPT joey_mission2_loop
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    $.blip1_jm1.remove();
    $.blip2_jm1.remove();
    $.blip3_jm1.remove();
    $.blip4_jm1.remove();
    Streaming.MarkModelAsNoLongerNeeded(91 /* CAR_IDAHO */);
    Streaming.UnloadSpecialCharacter(3);
    Hud.ClearTimer($.countdown_jm1);
    if (!Car.IsDead($.mike_car)) {
        $.mike_car.setCanRespray(true /* ON */);
        $.mike_car.lockDoors(1 /* CARLOCK_UNLOCKED */);
        $.mike_car.makeABitStronger(false /* FALSE */);
    }
    Game.SetFreeBombs(false /* Off */);
    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
