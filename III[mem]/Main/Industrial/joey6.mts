// Generated from Main/Industrial/joey6.sc
import { $ } from '../../utils';


async function body() {
    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_joey_mission = 1;
    // SCRIPT_NAME joey6
    await asyncWait(0);

    {
        Streaming.LoadSpecialCharacter(1, 'joey');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'JOEYH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'PLAYERH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'TROLL');
        Streaming.RequestModel(129 /* CAR_STALLION */);
        Streaming.RequestModel(939 /* jogarageext */);
        Streaming.RequestModel(1074 /* jogarageint */);

        Streaming.LoadAllModelsNow();

        //LOAD_SCENE 1190.07 -869.86 13.97

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */)
        ) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(939 /* jogarageext */) || !Streaming.HasModelLoaded(1074 /* jogarageint */) || !Streaming.HasModelLoaded(129 /* CAR_STALLION */)) {
            await asyncWait(0);
        }

        Cutscene.Load('J6_TBJ');
        Cutscene.SetOffset(1190.079, -869.861, 13.977);

        $.cut_car3_lm3 = Car.Create(129 /* CAR_STALLION */, 1192.9, -860.8, 14.0);
        $.cut_car3_lm3.setHeading(150.0);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_joey = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_joey.setAnim('joey');

        $.cs_joeyhead = CutsceneHead.Create($.cs_joey, 185 /* CUT_OBJ1 */);
        $.cs_joeyhead.setAnim('joey');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 186 /* CUT_OBJ2 */);
        $.cs_playerhead.setAnim('player');

        $.cs_troll = CutsceneObject.Create(187 /* CUT_OBJ3 */);
        $.cs_troll.setAnim('TROLL');

        World.ClearArea(1191.9, -870.4, 15.0, 1.0, true /* TRUE */);
        $.player.setCoordinates(1191.9, -870.4, -100.0);

        $.player.setHeading(230.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);
        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 4434) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM6_A', 10000, 2); // Mission brief

        while ($.cs_time < 6704) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM6_B', 10000, 2); // Mission brief

        while ($.cs_time < 12000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM6_C', 10000, 2); // Mission brief

        while ($.cs_time < 14274) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM6_D', 10000, 2); // Mission brief

        while ($.cs_time < 17302) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('JM6_E', 10000, 2); // Mission brief

        while ($.cs_time < 21000) {
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
        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(187 /* CUT_OBJ3 */);
        Streaming.MarkModelAsNoLongerNeeded(129 /* CAR_STALLION */);
        Streaming.MarkModelAsNoLongerNeeded(939 /* jogarageext */);
        Streaming.MarkModelAsNoLongerNeeded(1074 /* jogarageint */);

        $.cut_car3_lm3.delete();

        $.thugs_score = 0;
        $.sound_already_created_before = 0;
        $.flag_not_enough_seats = 0;

        Streaming.LoadSpecialCharacter(2, 'robber');

        while (!Streaming.HasSpecialCharacterLoaded(2)) {
            await asyncWait(0);
        }

        // START OF MISSION

        $.blip1_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
        $.blip1_jm6.changeDisplay(2 /* BLIP_ONLY */);

        $.flag_displayed_horn_message_jm6 = 0;
        $.flag_displayed_wanted_message_jm6 = 0;

        $.thug1_is_dead = 0;
        $.thug2_is_dead = 0;
        $.thug3_is_dead = 0;
        $.blip_for_thug_added1 = 0;
        $.blip_for_thug_added2 = 0;
        $.blip_for_thug_added3 = 0;

        //PICK UP THE THUGS
    }

    async function pick_up_thugs() {
        await asyncWait(0);

        while (!$.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */) || !$.player.isPressingHorn() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_not_enough_seats == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                    }
                } else {
                    if ($.flag_not_enough_seats == 0) {
                        Text.PrintNow('HORN', 5000, 1);
                    }
                }
            } else {
                $.flag_not_enough_seats = 0;
            }
            if (!$.player.isInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
                Text.ClearThisPrint('WANTED1');
                Text.ClearThisPrint('HORN');
            }
            if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
                Text.PrintNow('JM6_5', 5000, 1); //"We need a getaway vehicle"
            } else {
                Text.ClearThisPrint('JM6_5');
            }
            const _res270 = Clock.GetTimeOfDay();
            $.hours = _res270.hours;
            $.minutes = _res270.minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
        }

        $.any_car_jm6 = $.player.storeCarIsIn();

        $.maxpassengers = $.any_car_jm6.getMaximumNumberOfPassengers();

        Text.ClearThisPrint('WANTED1');
        Text.ClearThisPrint('HORN');

        if (!($.maxpassengers > 2)) {
            Text.PrintNow('NODOORS', 5000, 1); //Car not big enough
            $.flag_not_enough_seats = 1;
            // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
            throw new Error('unresolved GOTO pick_up_thugs'); // fallback: would break linear control flow
        }

        if ($.player.isInModel(127 /* CAR_COACH */) || $.player.isInModel(121 /* CAR_BUS */)) {
            Text.PrintNow('JM6_6', 5000, 1); //Go and get a vehicle less conspicuous
            $.flag_not_enough_seats = 1;
            // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
            throw new Error('unresolved GOTO pick_up_thugs'); // fallback: would break linear control flow
        }

        //PICK UP THUGS CUT_SCENE**************************************************************************************

        World.ClearArea(1087.7, -229.2, 8.0, 6.0, true /* TRUE */);

        if (!Car.IsDead($.any_car_jm6)) {
            $.any_car_jm6.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
        }

        await asyncWait(500);

        $.player.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        if (!Car.IsDead($.any_car_jm6)) {
            $.any_car_jm6.lockDoors(1 /* CARLOCK_UNLOCKED */);
        }

        $.blip1_jm6.remove();

        $.thug1 = Char.Create(21 /* PEDTYPE_SPECIAL */, 27 /* PED_SPECIAL2 */, 1086.5, -238.3, 9.0);
        $.thug1.turnToFacePlayer($.player);
        $.thug1.setIdle();

        $.thug2 = Char.Create(21 /* PEDTYPE_SPECIAL */, 27 /* PED_SPECIAL2 */, 1088.4, -237.9, 9.0);
        $.thug2.turnToFacePlayer($.player);
        $.thug2.setIdle();

        $.thug3 = Char.Create(21 /* PEDTYPE_SPECIAL */, 27 /* PED_SPECIAL2 */, 1090.4, -238.0, 9.0);
        $.thug3.turnToFacePlayer($.player);
        $.thug3.setIdle();

        $.thug1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
        $.thug2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
        $.thug3.giveWeapon(3 /* WEAPONTYPE_UZI */, 100);

        Camera.SetFixedPosition(1078.773, -232.474, 12.19, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1079.691, -232.132, 11.99, 2 /* JUMP_CUT */);

        //APPLY_BRAKES_TO_PLAYERS_CAR Player On

        $.thug1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.thug2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.thug3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        $.thug1.setThreatSearch(64 /* THREAT_COP */);
        $.thug2.setThreatSearch(64 /* THREAT_COP */);
        $.thug3.setThreatSearch(64 /* THREAT_COP */);

        await asyncWait(1000);

        while (!$.Bank_job_door.slide(1087.523, -233.801, 13.5, 0.0, 0.0, 0.07, false /* FALSE */)) {
            await asyncWait(0);
            const _res271 = Clock.GetTimeOfDay();
            $.hours = _res271.hours;
            $.minutes = _res271.minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.followPlayer($.player);
            $.thug1.setRunning(true /* TRUE */);
            await asyncWait(800);
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.followPlayer($.player);
            $.thug2.setRunning(true /* TRUE */);
            await asyncWait(800);
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.followPlayer($.player);
            $.thug3.setRunning(true /* TRUE */);
            //WAIT 400
        }

        if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug1) && !Char.IsDead($.thug2) && !Char.IsDead($.thug3)) {
            TIMERB = 0;
            while (!$.thug1.isInCar($.any_car_jm6) || !$.thug2.isInCar($.any_car_jm6) || !$.thug3.isInCar($.any_car_jm6)) {
                await asyncWait(0);
                if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                    Text.PrintNow('JM6_7', 5000, 1);
                    // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.any_car_jm6)) {
                    // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
                }
                const _res272 = Clock.GetTimeOfDay();
                $.hours = _res272.hours;
                $.minutes = _res272.minutes;
                if ($.hours >= 17) {
                    Text.PrintNow('OUTTIME', 5000, 1);
                    // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
                }
                if (TIMERB > 15000) {
                    // SCM GOTO → next_robber_bit (not lowered; manual jump required)
                    throw new Error('unresolved GOTO next_robber_bit'); // fallback: would break linear control flow
                }
            }
        }
    }

    async function next_robber_bit() {
        //SAMPLE1*********************************************************

        Audio.LoadMissionAudio('j6_a' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Camera.RestoreJumpcut();
        $.player.applyBrakesToCar(false /* OFF */);
        $.player.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);

        //END OF PICK UP THUGS CUT_SCENE*******************************************************************************

        Text.PrintNow('JM6_1', 5000, 1); //"Lets go"

        while (!$.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.2, false /* FALSE */)) {
            await asyncWait(0);
            const _res273 = Clock.GetTimeOfDay();
            $.hours = _res273.hours;
            $.minutes = _res273.minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
        }

        $.blip3_jm6 = Blip.AddForCoord(1038.0, -700.0, -100.0);
        //CHANGE_BLIP_DISPLAY blip3_jm6 BLIP_ONLY

        $.flag_displayed_wanted_message_jm6 = 0;

        //GET TO THE BANK
    }

    async function get_to_the_bank() {
        await asyncWait(0);

        if (Car.IsDead($.any_car_jm6)) {
        }

        while (!$.player.isStoppedInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, true /* TRUE */) || !$.player.isInAnyCar() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if (Car.IsDead($.any_car_jm6)) {
            }
            if ($.player.isInAnyCar()) {
                $.any_car_jm6 = $.player.storeCarIsIn();
            }
            if (!Char.IsDead($.thug1)) {
                if (!$.thug1.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added1 == 0) {
                        $.thug1_blip = Blip.AddForChar($.thug1);
                        $.blip_for_thug_added1 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added1 == 1) {
                            $.thug1.followPlayer($.player);
                            $.thug1_blip.remove();
                            $.blip_for_thug_added1 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug2)) {
                if (!$.thug2.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added2 == 0) {
                        $.thug2_blip = Blip.AddForChar($.thug2);
                        $.blip_for_thug_added2 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added2 == 1) {
                            $.thug2.followPlayer($.player);
                            $.thug2_blip.remove();
                            $.blip_for_thug_added2 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug3)) {
                if (!$.thug3.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added3 == 0) {
                        $.thug3_blip = Blip.AddForChar($.thug3);
                        $.blip_for_thug_added3 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added3 == 1) {
                            $.thug3.followPlayer($.player);
                            $.thug3_blip.remove();
                            $.blip_for_thug_added3 = 0;
                        }
                    }
                }
            }
            if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_7', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.player.isStoppedInAreaInCar3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm6 == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                        $.flag_displayed_wanted_message_jm6 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */)) {
                    $.flag_displayed_wanted_message_jm6 = 0;
                }
            }
            if ($.player.isInAreaOnFoot3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */)) {
                Text.PrintNow('JM6_5', 5000, 1); //"We need a getaway vehicle"
            } else {
                Text.ClearThisPrint('JM6_5');
            }
            const _res274 = Clock.GetTimeOfDay();
            $.hours = _res274.hours;
            $.minutes = _res274.minutes;
            if ($.hours >= 17) {
                Text.PrintNow('OUTTIME', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
        }

        if ($.player.isInModel(127 /* CAR_COACH */) || $.player.isInModel(121 /* CAR_BUS */)) {
            Text.PrintNow('JM6_6', 5000, 1); //Go and get a vehicle less conspicuous
            //WAIT 3000
            // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
            throw new Error('unresolved GOTO get_to_the_bank'); // fallback: would break linear control flow
        }

        if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
            Text.PrintNow('JM6_7', 5000, 1);
            // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
        }

        if (!$.thug1.isInCar($.any_car_jm6) || !$.thug2.isInCar($.any_car_jm6) || !$.thug3.isInCar($.any_car_jm6)) {
            Text.PrintNow('JM6_7', 5000, 1); //Go and get a vehicle less conspicuous
            //WAIT 3000
            // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
            throw new Error('unresolved GOTO get_to_the_bank'); // fallback: would break linear control flow
        }

        // BANK ROBBERY CUT SCENE**************************************************************************************

        World.ClearArea(1037.3, -699.6, 15.0, 6.0, true /* TRUE */);
        World.SetPedDensityMultiplier(0.0);

        $.player.setControl(false /* OFF */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, true /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, true /* On */);
        $.player.applyBrakesToCar(true /* ON */);

        Camera.SetFixedPosition(1036.448, -705.615, 14.512, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1036.637, -704.639, 14.624, 2 /* JUMP_CUT */);

        $.blip3_jm6.remove();

        //SAMPLE2*********************************************************

        Audio.LoadMissionAudio('j6_b' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Text.PrintNow('JM6_2', 5000, 1); //"Wait here"

        $.any_car_jm6 = $.player.storeCarIsIn();

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug1)) {
                $.thug1.leaveGroup();
                $.thug1.setObjLeaveCar($.any_car_jm6);
            }
        }

        await asyncWait(400);

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug2)) {
                $.thug2.leaveGroup();
                $.thug2.setObjLeaveCar($.any_car_jm6);
            }
        }

        await asyncWait(400);

        if (!Car.IsDead($.any_car_jm6)) {
            if (!Char.IsDead($.thug3)) {
                $.thug3.leaveGroup();
                $.thug3.setObjLeaveCar($.any_car_jm6);
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        //WAITING FOR THUGS TO GET OUT OF CAR

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (Car.IsDead($.any_car_jm6)) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug1)) {
                if ($.thug1_is_dead == 0) {
                    if (!$.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                        $.thug1.setObjRunToCoord(1037.4, -699.9);
                        await asyncWait(300);
                        $.objective_count++;
                        $.objective_count_done_before1 = 1;
                    }
                }
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug2)) {
                if ($.thug2_is_dead == 0) {
                    if (!$.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                        $.thug2.setObjRunToCoord(1037.4, -699.9);
                        await asyncWait(300);
                        $.objective_count++;
                        $.objective_count_done_before2 = 1;
                    }
                }
            }
            if (!Car.IsDead($.any_car_jm6) && !Char.IsDead($.thug3)) {
                if ($.thug3_is_dead == 0) {
                    if (!$.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                        $.thug3.setObjRunToCoord(1037.4, -699.9);
                        $.objective_count++;
                        $.objective_count_done_before3 = 1;
                    }
                }
            }
        }

        //THUGS GO IN THE BANK
        /*
  IF NOT IS_CHAR_DEAD thug1
  SET_CHAR_OBJ_RUN_TO_COORD thug1 1037.4 -699.9
  WAIT 400
  ENDIF

  IF NOT IS_CHAR_DEAD thug2
  SET_CHAR_OBJ_RUN_TO_COORD thug2 1037.4 -699.9
  WAIT 400
  ENDIF

  IF NOT IS_CHAR_DEAD thug3
  SET_CHAR_OBJ_RUN_TO_COORD thug3 1037.4 -699.9
  ENDIF
  */

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        const _res275 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res275.x;
        $.bankdoor_Y = _res275.y;
        $.bankdoor_Z = _res275.z;
        $.bankdoor_Y = $.bankdoor_Y - 1.0;

        const _res276 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res276.x;
        $.bankdoor2_Y = _res276.y;
        $.bankdoor2_Z = _res276.z;
        $.bankdoor2_Y = $.bankdoor2_Y + 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */)
        ) {
            await asyncWait(0);
        }

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.setObjRunToCoord(1032.9, -700.2);
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1037.4, -699.9, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1037.4, -699.9, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1037.4, -699.9, 13.9);
                }
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.setCoordinates(1104.0, -792.0, 14.0);
                    $.thug1.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.setCoordinates(1102.0, -792.0, 14.0);
                    $.thug2.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.setCoordinates(1100.0, -792.0, 14.0);
                    $.thug3.setObjWaitOnFoot();
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1032.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1032.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1032.9, -700.2, 13.9);
                }
            }
        }

        Audio.LoadMissionAudio('j6_1' as any);

        const _res277 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res277.x;
        $.bankdoor_Y = _res277.y;
        $.bankdoor_Z = _res277.z;
        $.bankdoor_Y = $.bankdoor_Y + 1.0;

        const _res278 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res278.x;
        $.bankdoor2_Y = _res278.y;
        $.bankdoor2_Z = _res278.z;
        $.bankdoor2_Y = $.bankdoor2_Y - 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */)
        ) {
            await asyncWait(0);
        }

        //WAIT 1000

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
        }

        await asyncWait(1000);

        //THUGS COME OUT OF BANK

        World.ClearArea(1037.3, -699.6, 15.0, 4.0, true /* TRUE */);

        const _res279 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res279.x;
        $.bankdoor_Y = _res279.y;
        $.bankdoor_Z = _res279.z;
        $.bankdoor_Y = $.bankdoor_Y - 1.0;

        const _res280 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res280.x;
        $.bankdoor2_Y = _res280.y;
        $.bankdoor2_Z = _res280.z;
        $.bankdoor2_Y = $.bankdoor2_Y + 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */)
        ) {
            await asyncWait(0);
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.setCoordinates(1032.9, -700.2, 15.0);
            $.thug1.setObjRunToCoord(1036.9, -700.2);
            //SET_PLAYER_AS_LEADER thug1 player
        }

        await asyncWait(800);

        if (!Char.IsDead($.thug2)) {
            $.thug2.setCoordinates(1032.9, -700.2, 15.0);
            $.thug2.setObjRunToCoord(1036.9, -700.2);
        }

        await asyncWait(800);

        if (!Char.IsDead($.thug3)) {
            $.thug3.setCoordinates(1032.9, -700.2, 15.0);
            $.thug3.setObjRunToCoord(1036.9, -700.2);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.thug1.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.thug2.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.thug3.followPlayer($.player);
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1036.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1036.9, -700.2, 13.9);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1036.9, -700.2, 13.9);
                }
            }
        }

        $.joey_alarm_loop = Sound.AddContinuous(1034.8, -700.1, 15.0, 69 /* SOUND_BANK_ALARM_LOOP_L */);
        $.sound_already_created_before = 1;

        //SAMPLE3*********************************************************

        Audio.LoadMissionAudio('j6_d' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        $.player.alterWantedLevelNoDrop(3);

        const _res281 = $.bankdoor1.getCoordinates();
        $.bankdoor_X = _res281.x;
        $.bankdoor_Y = _res281.y;
        $.bankdoor_Z = _res281.z;
        $.bankdoor_Y = $.bankdoor_Y + 1.0;

        const _res282 = $.bankdoor2.getCoordinates();
        $.bankdoor2_X = _res282.x;
        $.bankdoor2_Y = _res282.y;
        $.bankdoor2_Z = _res282.z;
        $.bankdoor2_Y = $.bankdoor2_Y - 1.0;

        while (
            !$.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */) ||
            !$.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */)
        ) {
            await asyncWait(0);
        }

        while (!Audio.HasMissionAudioFinished()) {
            await asyncWait(0);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        $.player.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        Camera.RestoreJumpcut();
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
        $.player.applyBrakesToCar(false /* Off */);
        World.SetPedDensityMultiplier(1.0);

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }
            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }

            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }

            //	STORE_CAR_PLAYER_IS_IN player any_car_jm6
            //	maybe should stop player leaving this car while the thugs get in

            if (Car.IsDead($.any_car_jm6)) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            /*
    IF TIMERB > 15000
    IF NOT IS_CAR_DEAD any_car_jm6
    IF NOT IS_CHAR_DEAD	thug1
    //WARP_CHAR_INTO_CAR thug1 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    IF NOT IS_CHAR_DEAD	thug2
    //WARP_CHAR_INTO_CAR thug2 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    IF NOT IS_CHAR_DEAD	thug3
    //WARP_CHAR_INTO_CAR thug3 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    ENDIF
    ENDIF
    */
        }

        //END OF BANK ROBBERY CUT SCENE********************************************************************************

        $.blip2_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
        $.blip2_jm6.changeDisplay(2 /* BLIP_ONLY */);

        //SAMPLE4*********************************************************

        Audio.LoadMissionAudio('j6_c' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        Audio.PlayMissionAudio();

        Text.PrintNow('JM6_3', 3000, 1); //"get us out of here"

        //PRINT_SOON ( JM6_4 ) 5000 1 //"get us out of here"

        //Get back to warehouse
    }

    async function back_to_safe_house() {
        await asyncWait(0);

        if (Car.IsDead($.any_car_jm6)) {
        }

        while (!$.player.isStoppedInArea2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */) || !$.player.isInAnyCar() || $.player.isWantedLevelGreater(0)) {
            await asyncWait(0);
            if (Car.IsDead($.any_car_jm6)) {
            }
            if ($.player.isInAnyCar()) {
                $.any_car_jm6 = $.player.storeCarIsIn();
            }
            if (Char.IsDead($.thug1) && Char.IsDead($.thug2) && Char.IsDead($.thug3)) {
                Text.PrintNow('JM6_8', 5000, 1);
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (!Char.IsDead($.thug1)) {
                if (!$.thug1.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added1 == 0) {
                        $.thug1_blip = Blip.AddForChar($.thug1);
                        $.blip_for_thug_added1 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added1 == 1) {
                            $.thug1.followPlayer($.player);
                            $.thug1_blip.remove();
                            $.blip_for_thug_added1 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug2)) {
                if (!$.thug2.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added2 == 0) {
                        $.thug2_blip = Blip.AddForChar($.thug2);
                        $.blip_for_thug_added2 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added2 == 1) {
                            $.thug2.followPlayer($.player);
                            $.thug2_blip.remove();
                            $.blip_for_thug_added2 = 0;
                        }
                    }
                }
            }
            if (!Char.IsDead($.thug3)) {
                if (!$.thug3.isInPlayersGroup($.player)) {
                    if ($.blip_for_thug_added3 == 0) {
                        $.thug3_blip = Blip.AddForChar($.thug3);
                        $.blip_for_thug_added3 = 1;
                    }
                    if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */)) {
                        if ($.blip_for_thug_added3 == 1) {
                            $.thug3.followPlayer($.player);
                            $.thug3_blip.remove();
                            $.blip_for_thug_added3 = 0;
                        }
                    }
                }
            }
            if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
                if ($.player.isWantedLevelGreater(0)) {
                    if ($.flag_displayed_wanted_message_jm6 == 0) {
                        Text.PrintNow('WANTED1', 5000, 1);
                        $.flag_displayed_wanted_message_jm6 = 1;
                    }
                }
            } else {
                if (!$.player.isInArea2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
                    $.flag_displayed_wanted_message_jm6 = 0;
                }
            }
            if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */)) {
                Text.PrintNow('EBAL_5', 5000, 1);
            } else {
                Text.ClearThisPrint('EBAL_5');
            }
        }

        //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************

        if (!Char.IsDead($.thug1)) {
            if (!$.thug1.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
                throw new Error('unresolved GOTO back_to_safe_house'); // fallback: would break linear control flow
            }
        }

        if (!Char.IsDead($.thug2)) {
            if (!$.thug2.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
                throw new Error('unresolved GOTO back_to_safe_house'); // fallback: would break linear control flow
            }
        }

        if (!Char.IsDead($.thug3)) {
            if (!$.thug3.isInPlayersGroup($.player)) {
                Text.PrintNow('HEY2', 4000, 1);
                // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
                throw new Error('unresolved GOTO back_to_safe_house'); // fallback: would break linear control flow
            }
        }

        World.ClearArea(1087.7, -229.2, 8.0, 6.0, true /* TRUE */);

        $.player.setControl(false /* Off */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, true /* On */);
        Game.SetEveryoneIgnorePlayer($.player, true /* On */);

        Camera.SetFixedPosition(1098.781, -228.929, 16.723, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(1098.005, -229.116, 16.12, 2 /* JUMP_CUT */);

        if (!Car.IsDead($.any_car_jm6)) {
            $.player.applyBrakesToCar(true /* On */);
            if (!Char.IsDead($.thug1)) {
                $.thug1.leaveGroup();
                if ($.thug1.isInAnyCar()) {
                    $.any_car_jm6 = $.thug1.storeCarIsIn();
                    $.thug1.setObjLeaveCar($.any_car_jm6);
                }
            }
            await asyncWait(400);
            if (!Char.IsDead($.thug2)) {
                $.thug2.leaveGroup();
                if ($.thug2.isInAnyCar()) {
                    $.any_car_jm6 = $.thug2.storeCarIsIn();
                    $.thug2.setObjLeaveCar($.any_car_jm6);
                }
            }
            await asyncWait(400);
            if (!Char.IsDead($.thug3)) {
                $.thug3.leaveGroup();
                if ($.thug3.isInAnyCar()) {
                    $.any_car_jm6 = $.thug3.storeCarIsIn();
                    $.thug3.setObjLeaveCar($.any_car_jm6);
                }
            }
        }

        if (!Char.IsDead($.thug1)) {
            if (!$.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */)) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.markAsNoLongerNeeded();
                }
                //thug1_is_dead = 1
            }
        }

        if (!Char.IsDead($.thug2)) {
            if (!$.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */)) {
                if (!Char.IsDead($.thug2)) {
                    $.thug2.markAsNoLongerNeeded();
                }
                //thug2_is_dead = 1
            }
        }

        if (!Char.IsDead($.thug3)) {
            if (!$.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */)) {
                if (!Char.IsDead($.thug3)) {
                    $.thug3.markAsNoLongerNeeded();
                }
                //thug3_is_dead = 1
            }
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        while (!$.Bank_job_door.slide(1087.523, -233.801, 14.012, 0.0, 0.0, 0.2, false /* FALSE */)) {
            await asyncWait(0);
        }

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1)) {
                if ($.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                    $.thug1_is_dead = 1;
                }
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }

            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }
            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if (!Car.IsDead($.any_car_jm6)) {
                if ($.thug1_is_dead == 0) {
                    if (!$.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
                        $.thug1.setObjRunToCoord(1087.0, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before1 = 1;
                    }
                }
                if ($.thug2_is_dead == 0) {
                    if (!$.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
                        $.thug2.setObjRunToCoord(1087.5, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before2 = 1;
                    }
                }
                if ($.thug3_is_dead == 0) {
                    if (!$.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
                        //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
                        $.thug3.setObjRunToCoord(1088.0, -238.6);
                        $.objective_count++;
                        $.objective_count_done_before3 = 1;
                    }
                }
            }
        }

        $.blip1_jm6.remove();

        if (!Char.IsDead($.thug1)) {
            $.thug1.setObjRunToCoord(1087.0, -238.6);
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.setObjRunToCoord(1087.5, -238.6);
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.setObjRunToCoord(1088.0, -238.6);
        }

        $.objective_count = 0;
        $.objective_count_done_before1 = 0;
        $.objective_count_done_before2 = 0;
        $.objective_count_done_before3 = 0;

        TIMERB = 0;

        while (!($.objective_count == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
                $.objective_count++;
                $.objective_count_done_before1 = 1;
                $.thug1_is_dead = 1;
            }
            if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
                $.objective_count++;
                $.objective_count_done_before2 = 1;
                $.thug2_is_dead = 1;
            }

            if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
                $.objective_count++;
                $.objective_count_done_before3 = 1;
                $.thug3_is_dead = 1;
            }

            if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
                // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_joey6_failed'); // fallback: would break linear control flow
            }
            if ($.thug1_is_dead == 0) {
                if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before1 = 1;
                }
            }
            if ($.thug2_is_dead == 0) {
                if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before2 = 1;
                }
            }
            if ($.thug3_is_dead == 0) {
                if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
                    $.objective_count++;
                    $.objective_count_done_before3 = 1;
                }
            }
            if (TIMERB > 15000) {
                if (!Char.IsDead($.thug1)) {
                    $.thug1.setCoordinates(1087.0, -238.6, 10.0);
                }
                if (!Char.IsDead($.thug2)) {
                    $.thug2.setCoordinates(1087.5, -238.6, 10.0);
                }
                if (!Char.IsDead($.thug3)) {
                    $.thug3.setCoordinates(1088.0, -238.6, 10.0);
                }
            }
        }

        if (!Char.IsDead($.thug1)) {
            $.thug1.setObjWaitOnFoot();
        }

        if (!Char.IsDead($.thug2)) {
            $.thug2.setObjWaitOnFoot();
        }

        if (!Char.IsDead($.thug3)) {
            $.thug3.setObjWaitOnFoot();
        }

        while (!$.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.1, false /* FALSE */)) {
            await asyncWait(0);
        }

        $.player.setControl(true /* ON */);
        Hud.SwitchWidescreen(false /* OFF */);
        Camera.RestoreJumpcut();
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
        $.player.applyBrakesToCar(false /* Off */);

        //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************
    }

    // SCM GOTO → mission_joey6_passed (not lowered; manual jump required)
    return;

    // Mission Joey6 failed
}

async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    return;

    // mission joey6 passed
}

async function onPassed() {
    $.flag_joey_mission6_passed = 1;
    if (!Char.IsDead($.thug1)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug1.delete();

    if (!Char.IsDead($.thug2)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug2.delete();

    if (!Char.IsDead($.thug3)) {
        $.thugs_score = $.thugs_score + 10000;
    }
    $.thug3.delete();
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', $.thugs_score, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore($.thugs_score);
    Stat.RegisterMissionPassed('JM6');
    Stat.PlayerMadeProgress(1);
    $.joey_contact_blip.remove();
    return;

    // mission cleanup
}

async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_joey_mission = 0;
    if ($.sound_already_created_before == 1) {
        $.joey_alarm_loop.remove();
    }
    $.blip1_jm6.remove();
    $.blip3_jm6.remove();
    $.blip2_jm6.remove();
    $.thug1_blip.remove();
    $.thug2_blip.remove();
    $.thug3_blip.remove();
    World.SetPedDensityMultiplier(1.0);
    Streaming.UnloadSpecialCharacter(2);
    Mission.Finish();
    return;
}

// MissionBoundary
// *******************************************************************************************
// *******************************************************************************************
// **************************************Joey Mission 6***************************************
// ****************************************Bank Job*******************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

// Mission start stuff

// SCM GOSUB mission_start_joey6
// fallback if label was not emitted as async function: no-op continues linearly

// SCM GOSUB mission_joey6_failed
// fallback if label was not emitted as async function: no-op continues linearly

// SCM GOSUB mission_cleanup_joey6
// fallback if label was not emitted as async function: no-op continues linearly

// MissionBoundary

// Variables for mission

// VAR_INT thug1 thug2 thug3 thugs_score joey_alarm_loop flag_not_enough_seats

// VAR_INT blip1_jm6 blip2_jm6 blip3_jm6 thug1_blip thug2_blip thug3_blip

// VAR_INT any_car_jm6 maxpassengers sound_already_created_before

// VAR_INT flag_displayed_horn_message_jm6 flag_displayed_wanted_message_jm6

// VAR_INT thug1_is_dead thug2_is_dead thug3_is_dead blip_for_thug_added1 blip_for_thug_added2 blip_for_thug_added3

// VAR_INT objective_count objective_count_done_before1 objective_count_done_before2 objective_count_done_before3

// VAR_FLOAT bankdoor_X bankdoor_Y bankdoor_Z bankdoor2_X bankdoor2_Y bankdoor2_Z

// ***************************************Mission Start*************************************

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);

