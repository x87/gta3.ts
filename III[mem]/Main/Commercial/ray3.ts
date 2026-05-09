// Generated from Main/Commercial/ray3.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_ray3() {
    $.flag_player_on_mission = 1;
    $.flag_player_on_ray_mission = 1;
    $.rays_cutscene_flag = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    // SCRIPT_NAME ray3

    $.ia_start_x = -53.0;
    $.ia_start_y = -1380.5;
    $.ia_start_z = 26.0;

    $.amount_damage_ia_drop_evidence = 1;

    $.wanted_level_change = 1;

    $.drop_one_flag = 0;
    $.drop_evidence = 0;

    $.green = 250;
    $.red = 0;
    $.red_increase_flag = 0;
    $.red_decrease_flag = 0;
    $.green_increase_flag = 0;
    $.green_decrease_flag = 0;

    $.timera_reset_flag = 0;
    $.ia_have_evidence_flag = 0;
    $.temporary_health_var = 0;
    $.ia_car_previous_health = 0;
    $.ia_car_current_health = 0;
    $.amount_of_evidence_player_has = 0;
    $.get_coords_flag = 0;
    $.timerc_reset_flag_r3 = 0;
    $.timerd_reset_flag_r3 = 0;
    $.timerd_current_r3 = 0;
    $.timerd_started_r3 = 0;
    $.timerd_r3 = 0;

    $.timer_for_speed = 0;
    $.reset_for_timer = 0;

    $.object_current_coords_x = 0.0;
    $.object_current_coords_y = 0.0;
    $.object_current_coords_z = 0.0;

    Streaming.LoadSpecialCharacter(1, 'ray');
    {
        // ****************************************START OF CUTSCENE********************************

        /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_ray3_failed
  ENDIF

  SWITCH_STREAMING OFF

  PRINT_BIG RM3 15000 2 //"Evidence Dash"
  */

        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'RAYH');
        Streaming.RequestModel(2104 /* toilet */);

        /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(2104 /* toilet */)
        ) {
            await asyncWait(0);
        }

        World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */);

        $.player.setCoordinates(39.0, -723.5, 22.0);

        $.player.setHeading(90.0);

        Cutscene.Load('r3_ed');

        Cutscene.SetOffset(39.424, -726.677, 21.692);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);

        $.cs_player.setAnim('player');

        $.cs_ray = CutsceneObject.Create(26 /* PED_SPECIAL1 */);

        $.cs_ray.setAnim('ray');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
        $.cs_playerhead.setAnim('player');

        $.cs_rayhead = CutsceneHead.Create($.cs_ray, 186 /* CUT_OBJ2 */);
        $.cs_rayhead.setAnim('ray');

        //SET_PLAYER_COORDINATES player 38.7 -725.7 22.0
        //
        //SET_PLAYER_HEADING player 270.0

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Camera.SetNearClip(0.2);

        Cutscene.Start();

        Streaming.Switch(false /* OFF */);
        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 10381) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_A', 10000, 1); //"I know a real important man in town, a soft touch

        while ($.cs_time < 13529) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_H', 10000, 1); //"with shall we say, exotic tastes and the money to indulge them.

        while ($.cs_time < 17950) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_B', 10000, 1); //"He's involved in a legal matter and the prosecution has some rather embarrassing photos of him..."

        while ($.cs_time < 23502) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_C', 10000, 1); //"...at a morgue party or something."

        while ($.cs_time < 26180) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_D', 10000, 1); //"The evidence is being driven across town."

        while ($.cs_time < 29179) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_E', 10000, 1); //"You are going to have to ram the car and collect each bit of evidence as it falls out."

        while ($.cs_time < 34865) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_F', 10000, 1); //"When you've got it all, leave it in the car and torch it."

        while ($.cs_time < 39290) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('RM3_G', 10000, 1); //"We're both gonna do well out of this."

        while ($.cs_time < 41666) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        //DO_FADE 1000 FADE_IN

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();

        Camera.DoFade(0, 0 /* FADE_OUT */);
        Camera.SetNearClip(0.9);

        $.player.setHeading(90.0);
        Camera.SetBehindPlayer();

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(2104 /* toilet */);
        Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* cut_obj2 */);

        Streaming.RequestModel(1367 /* files */);
        Streaming.RequestModel(112 /* CAR_BOBCAT */);
        Streaming.RequestModel(61 /* PED_B_MAN3 */);

        Streaming.LoadAllModelsNow();

        while (!Streaming.HasModelLoaded(112 /* CAR_BOBCAT */) || !Streaming.HasModelLoaded(61 /* PED_B_MAN3 */) || !Streaming.HasModelLoaded(1367 /* files */)) {
            await asyncWait(0);
        }

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.Switch(true /* ON */);

        $.rays_cutscene_flag = 0;

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        // ******************************************END OF CUTSCENE********************************

        $.ia_car_rm3 = Car.Create(112 /* CAR_BOBCAT */, $.ia_start_x, $.ia_start_y, $.ia_start_z);
        $.ia_car_rm3.setAvoidLevelTransitions(true /* TRUE */);
        $.ia_car_rm3.setWatertight(true /* TRUE */);
        $.ia_car_driver_1 = Char.CreateInsideCar($.ia_car_rm3, 4 /* PEDTYPE_CIVMALE */, 61 /* PED_B_MAN3 */);
        //SET_CHAR_AVOID_LEVEL_TRANSITIONS ia_car_driver_1 TRUE

        $.ia_car_driver_1.setCantBeDraggedOut(true /* TRUE */);
        $.ia_car_rm3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.ia_car_rm3.setUpsidedownNotDamaged(true /* TRUE */);
        $.ia_car_rm3.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
        $.ia_car_rm3.setCruiseSpeed(20.0);
        $.ia_car_rm3.setDrivingStyle(2);
        $.ia_car_rm3.wanderRandomly();
        $.prosecution_car_blip = Blip.AddForCar($.ia_car_rm3);
        $.ia_car_rm3.lockDoors(2 /* CARLOCK_LOCKED */);

        if ($.flag_player_on_mission == 0) {
            $.rays_evidence_blip = Blip.AddForChar($.ia_car_driver_1);
        }

        const _res71 = $.ia_car_rm3.getCoordinates();
        $.car_stuck_x = _res71.x;
        $.car_stuck_y = _res71.y;
        $.car_stuck_z = _res71.z;
        const _res72 = $.ia_car_rm3.getCoordinates();
        $.ia_car_x = _res72.x;
        $.ia_car_y = _res72.y;
        $.ia_car_z = _res72.z;
        $.ia_car_z += 3.0;
        $.evidence_1 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);
        $.ia_car_z += 1.0;
        $.evidence_2 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);
        $.ia_car_z += 1.0;
        $.evidence_3 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);
        $.ia_car_z += 1.0;
        $.evidence_4 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);
        $.ia_car_z += 1.0;
        $.evidence_5 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);
        $.ia_car_z += 1.0;
        $.evidence_6 = ScriptObject.Create(1367 /* files */, $.ia_car_x, $.ia_car_y, $.ia_car_z);

        $.evidence_1.setCollision(false /* FALSE */);
        $.evidence_2.setCollision(false /* FALSE */);
        $.evidence_3.setCollision(false /* FALSE */);
        $.evidence_4.setCollision(false /* FALSE */);
        $.evidence_5.setCollision(false /* FALSE */);
        $.evidence_6.setCollision(false /* FALSE */);

        $.evidence_1.placeRelativeToCar($.ia_car_rm3, 0.3, -1.7, -0.1);
        $.evidence_2.placeRelativeToCar($.ia_car_rm3, 0.3, -1.2, -0.1);
        $.evidence_3.placeRelativeToCar($.ia_car_rm3, -0.3, -1.2, -0.1);
        $.evidence_4.placeRelativeToCar($.ia_car_rm3, 0.3, -0.7, -0.1);
        $.evidence_5.placeRelativeToCar($.ia_car_rm3, -0.3, -0.7, -0.1);
        $.evidence_6.placeRelativeToCar($.ia_car_rm3, -0.3, -1.7, -0.1);

        //SWITCH_ROADS_OFF -90.0 -791.0 24.0 -56.0 -587.0 36.0
        //SWITCH_ROADS_OFF 320.0 -948.0 30.0 350.0 -913.0 40.0
        //SWITCH_ROADS_OFF 251.0 -46.0 -21.0 320.0 68.0 27.0

        $.ia_have_evidence_flag = 1;
    }

    async function evidence_loop() {
        // SCM GOTO → evidence_loop lowered to endless loop
        while (true) {
            await asyncWait(0);

            if (Car.IsDead($.ia_car_rm3)) {
                if ($.ia_car_rm3.isInWater()) {
                    if (!$.player.locateAnyMeansCar2D($.ia_car_rm3, 50.0, 50.0, false)) {
                        if (!$.ia_car_rm3.isOnScreen()) {
                            const _res73 = $.ia_car_rm3.getCoordinates();
                            $.ia_car_x = _res73.x;
                            $.ia_car_y = _res73.y;
                            $.ia_car_z = _res73.z;
                            const _res74 = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
                            $.ia_car_x = _res74.nodeX;
                            $.ia_car_y = _res74.nodeY;
                            $.ia_car_z = _res74.nodeZ;
                            $.warp_heading = _res74.angle;
                            if (!Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 3.0)) {
                                $.ia_car_rm3.setCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
                                $.ia_car_rm3.setHeading($.warp_heading);
                            }
                        }
                    } else {
                        Text.PrintNow('RM3_6', 5000, 1); //"The evidence will be washed up all over Liberty!"
                        // SCM GOTO → mission_ray3_failed (not lowered; manual jump required)
                        throw new Error('unresolved GOTO mission_ray3_failed'); // fallback: would break linear control flow
                    }
                } else {
                    // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_ray3_passed'); // fallback: would break linear control flow
                }
            }

            if ($.ia_car_rm3.isUpsidedown() && $.ia_car_rm3.isStopped()) {
                if (!$.ia_car_rm3.isOnScreen()) {
                    const _res75 = $.ia_car_rm3.getCoordinates();
                    $.ia_car_x = _res75.x;
                    $.ia_car_y = _res75.y;
                    $.ia_car_z = _res75.z;
                    const _res76 = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
                    $.ia_car_x = _res76.nodeX;
                    $.ia_car_y = _res76.nodeY;
                    $.ia_car_z = _res76.nodeZ;
                    $.warp_heading = _res76.angle;
                    if (!Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 3.0)) {
                        $.ia_car_rm3.setCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
                        $.ia_car_rm3.setHeading($.warp_heading);
                    }
                } else {
                    if (!($.drop_evidence == 6)) {
                        // SCM GOSUB create_another_car
                        await create_another_car();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
            }

            if ($.timera_reset_flag == 1) {
                if (!$.ia_car_rm3.isStopped()) {
                    $.timera_reset_flag = 0;
                }
            }

            if ($.ia_car_rm3.isStopped()) {
                if ($.timera_reset_flag == 0) {
                    TIMERA = 0;
                    $.timera_reset_flag = 1;
                }
                if (TIMERA > 5000 && $.timera_reset_flag == 1) {
                    if (!$.ia_car_rm3.isOnScreen()) {
                        const _res77 = $.ia_car_rm3.getCoordinates();
                        $.ia_car_x = _res77.x;
                        $.ia_car_y = _res77.y;
                        $.ia_car_z = _res77.z;
                        const _res78 = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
                        $.ia_car_x = _res78.nodeX;
                        $.ia_car_y = _res78.nodeY;
                        $.ia_car_z = _res78.nodeZ;
                        $.warp_heading = _res78.angle;
                        if (!Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0)) {
                            $.ia_car_rm3.setCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
                            $.ia_car_rm3.setHeading($.warp_heading);
                            $.timera_reset_flag = 0;
                        }
                    } else {
                        if (!($.drop_evidence == 6)) {
                            // SCM GOSUB create_another_car
                            await create_another_car();
                            // fallback if label was not emitted as async function: no-op continues linearly
                        }
                    }
                }
            }

            if ($.ia_car_rm3.locate3D($.car_stuck_x, $.car_stuck_y, $.car_stuck_z, 4.0, 4.0, 4.0, false)) {
                if ($.timerc_reset_flag_r3 == 0) {
                    $.timerc_started_r3 = Clock.GetGameTimer();
                    $.timerc_reset_flag_r3 = 1;
                }
                if ($.timerc_reset_flag_r3 == 1) {
                    $.timerc_current_r3 = Clock.GetGameTimer();
                    $.timerc_r3 = $.timerc_current_r3 - $.timerc_started_r3;
                    if ($.timerc_r3 > 8000) {
                        if (!$.ia_car_rm3.isOnScreen()) {
                            const _res79 = $.ia_car_rm3.getCoordinates();
                            $.ia_car_x = _res79.x;
                            $.ia_car_y = _res79.y;
                            $.ia_car_z = _res79.z;
                            const _res80 = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
                            $.ia_car_x = _res80.nodeX;
                            $.ia_car_y = _res80.nodeY;
                            $.ia_car_z = _res80.nodeZ;
                            $.warp_heading = _res80.angle;
                            if (!World.IsPointObscuredByAMissionEntity($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0, 4.0, 4.0)) {
                                if (!Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0)) {
                                    $.ia_car_rm3.setCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
                                    $.ia_car_rm3.setHeading($.warp_heading);
                                    $.timerc_reset_flag_r3 = 0;
                                }
                            }
                        } else {
                            if (!($.drop_evidence == 6)) {
                                // SCM GOSUB create_another_car
                                await create_another_car();
                                // fallback if label was not emitted as async function: no-op continues linearly
                            }
                        }
                    }
                }
            }

            if (!$.ia_car_rm3.locate3D($.car_stuck_x, $.car_stuck_y, $.car_stuck_z, 4.0, 4.0, 4.0, false)) {
                const _res81 = $.ia_car_rm3.getCoordinates();
                $.car_stuck_x = _res81.x;
                $.car_stuck_y = _res81.y;
                $.car_stuck_z = _res81.z;
                $.timerc_reset_flag_r3 = 0;
            }

            $.timer_for_speed = Clock.GetGameTimer();
            $.timer_for_speed -= $.reset_for_timer;
            if ($.timer_for_speed > 1000) {
                $.reset_for_timer = Clock.GetGameTimer();
                if ($.player.locateAnyMeansCar2D($.ia_car_rm3, 20.0, 20.0, false)) {
                    $.ia_car_rm3.setCruiseSpeed(50.0);
                } else {
                    if ($.player.locateAnyMeansCar2D($.ia_car_rm3, 50.0, 50.0, false)) {
                        $.ia_car_rm3.setCruiseSpeed(41.0);
                    } else {
                        if ($.player.locateAnyMeansCar2D($.ia_car_rm3, 90.0, 90.0, false)) {
                            $.ia_car_rm3.setCruiseSpeed(34.0);
                        } else {
                            if ($.player.locateAnyMeansCar2D($.ia_car_rm3, 130.0, 130.0, false)) {
                                $.ia_car_rm3.setCruiseSpeed(28.0);
                            } else {
                                $.ia_car_rm3.setCruiseSpeed(20.0);
                            }
                        }
                    }
                }
            }

            if ($.ia_have_evidence_flag == 0) {
                if (TIMERB > 500) {
                    if ($.player.locateAnyMeans3D($.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z, 1.5, 1.5, 1.5, false)) {
                        // SCM GOSUB evidence_collected
                        await evidence_collected();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
                if (TIMERB > 10000) {
                    if ($.player.locateAnyMeans2D($.object_current_coords_x, $.object_current_coords_y, 1.5, 1.5, false)) {
                        // SCM GOSUB evidence_collected
                        await evidence_collected();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
                if (TIMERB > 120000) {
                    if ($.player.locateAnyMeans2D($.object_current_coords_x, $.object_current_coords_y, 30.0, 30.0, false)) {
                        // SCM GOSUB evidence_collected
                        await evidence_collected();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                }
            }

            $.ia_car_previous_health = $.ia_car_current_health;
            $.ia_car_current_health = $.ia_car_rm3.getHealth();
            if ($.ia_have_evidence_flag == 1) {
                if ($.ia_car_rm3.isUpright()) {
                    $.temporary_health_var = $.ia_car_previous_health - $.amount_damage_ia_drop_evidence;
                    if ($.temporary_health_var > $.ia_car_current_health) {
                        Text.PrintNow('RM3_4', 3000, 1); //"IA HAVE DROPPED THE EVIDENCE"
                        $.ia_car_rm3.setHealth(1000);
                        $.ia_car_current_health = 1000;
                        $.ia_car_previous_health = 1000;
                        $.ia_have_evidence_flag = 0;
                        $.drop_one_flag = 0;
                        $.get_coords_flag = 1;
                    }
                }
            }

            if ($.ia_have_evidence_flag == 0 && $.drop_one_flag == 0) {
                $.drop_evidence++;
                $.rays_evidence_blip.remove();
                if ($.drop_evidence == 1) {
                    $.evidence_1.placeRelativeToCar($.ia_car_rm3, 0.3, -1.7, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_1);
                    $.evidence_1.setCollision(true /* TRUE */);
                    $.evidence_1.setDynamic(true /* TRUE */);
                    $.evidence_1.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_1.makeTargetable();
                    $.player.alterWantedLevelNoDrop(2);
                    $.ia_car_rm3.setCruiseSpeed(100.0);
                    $.ia_car_rm3.setDrivingStyle(2);
                    // Play sound for police scanner here
                    TIMERB = 0;
                }
                if ($.drop_evidence == 2) {
                    $.evidence_2.placeRelativeToCar($.ia_car_rm3, 0.3, -1.2, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_2);
                    $.evidence_2.setCollision(true /* TRUE */);
                    $.evidence_2.setDynamic(true /* TRUE */);
                    $.evidence_2.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_2.makeTargetable();
                    TIMERB = 0;
                }
                if ($.drop_evidence == 3) {
                    $.evidence_3.placeRelativeToCar($.ia_car_rm3, -0.3, -1.2, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_3);
                    $.evidence_3.setCollision(true /* TRUE */);
                    $.evidence_3.setDynamic(true /* TRUE */);
                    $.evidence_3.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_3.makeTargetable();
                    TIMERB = 0;
                }
                if ($.drop_evidence == 4) {
                    $.evidence_4.placeRelativeToCar($.ia_car_rm3, 0.3, -0.7, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_4);
                    $.evidence_4.setCollision(true /* TRUE */);
                    $.evidence_4.setDynamic(true /* TRUE */);
                    $.evidence_4.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_4.makeTargetable();
                    TIMERB = 0;
                }
                if ($.drop_evidence == 5) {
                    $.evidence_5.placeRelativeToCar($.ia_car_rm3, -0.3, -0.7, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_5);
                    $.evidence_5.setCollision(true /* TRUE */);
                    $.evidence_5.setDynamic(true /* TRUE */);
                    $.evidence_5.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_5.makeTargetable();
                    TIMERB = 0;
                }
                if ($.drop_evidence == 6) {
                    $.evidence_6.placeRelativeToCar($.ia_car_rm3, -0.3, -1.7, 0.2);
                    $.rays_evidence_blip = Blip.AddForObject($.evidence_6);
                    $.evidence_6.setCollision(true /* TRUE */);
                    $.evidence_6.setDynamic(true /* TRUE */);
                    $.evidence_6.addToVelocity(0.0, 0.0, 16.0);
                    $.evidence_6.makeTargetable();
                    $.prosecution_car_blip.remove();
                    TIMERB = 0;
                }
                $.drop_one_flag = 1;
            }

            if ($.get_coords_flag == 1) {
                if ($.drop_evidence == 1) {
                    const _res82 = $.evidence_1.getCoordinates();
                    $.object_current_coords_x = _res82.x;
                    $.object_current_coords_y = _res82.y;
                    $.object_current_coords_z = _res82.z;
                }
                if ($.drop_evidence == 2) {
                    const _res83 = $.evidence_2.getCoordinates();
                    $.object_current_coords_x = _res83.x;
                    $.object_current_coords_y = _res83.y;
                    $.object_current_coords_z = _res83.z;
                }
                if ($.drop_evidence == 3) {
                    const _res84 = $.evidence_3.getCoordinates();
                    $.object_current_coords_x = _res84.x;
                    $.object_current_coords_y = _res84.y;
                    $.object_current_coords_z = _res84.z;
                }
                if ($.drop_evidence == 4) {
                    const _res85 = $.evidence_4.getCoordinates();
                    $.object_current_coords_x = _res85.x;
                    $.object_current_coords_y = _res85.y;
                    $.object_current_coords_z = _res85.z;
                }
                if ($.drop_evidence == 5) {
                    const _res86 = $.evidence_5.getCoordinates();
                    $.object_current_coords_x = _res86.x;
                    $.object_current_coords_y = _res86.y;
                    $.object_current_coords_z = _res86.z;
                }
                if ($.drop_evidence == 6) {
                    const _res87 = $.evidence_6.getCoordinates();
                    $.object_current_coords_x = _res87.x;
                    $.object_current_coords_y = _res87.y;
                    $.object_current_coords_z = _res87.z;
                }
            }

            if ($.ia_have_evidence_flag == 0) {
                if (0 /* red */ == 0) {
                    $.red_decrease_flag = 0;
                    $.red_increase_flag = 1;
                }
                if (0 /* red */ == 250) {
                    $.red_decrease_flag = 1;
                    $.red_increase_flag = 0;
                }
                if ($.red_increase_flag == 1) {
                    $.red = 0 /* red */ + 10;
                }
                if ($.red_decrease_flag == 1) {
                    $.red = 0 /* red */ - 10;
                }
                if (1 /* green */ == 0) {
                    $.green_decrease_flag = 0;
                    $.green_increase_flag = 1;
                }
                if (1 /* green */ == 250) {
                    $.green_decrease_flag = 1;
                    $.green_increase_flag = 0;
                }
                if ($.green_increase_flag == 1) {
                    $.green = 1 /* green */ + 10;
                }
                if ($.green_decrease_flag == 1) {
                    $.green = 1 /* green */ - 10;
                }
                Fx.DrawCorona(
                    $.object_current_coords_x,
                    $.object_current_coords_y,
                    $.object_current_coords_z,
                    0.5,
                    6 /* CORONATYPE_CIRCLE */,
                    0 /* FLARETYPE_NONE */,
                    0 /* red */,
                    1 /* green */,
                    0
                );
            }

            if ($.drop_evidence < 1) {
                $.evidence_1.placeRelativeToCar($.ia_car_rm3, 0.3, -1.7, -0.1);
            }

            if ($.drop_evidence < 2) {
                $.evidence_2.placeRelativeToCar($.ia_car_rm3, 0.3, -1.2, -0.1);
            }

            if ($.drop_evidence < 3) {
                $.evidence_3.placeRelativeToCar($.ia_car_rm3, -0.3, -1.2, -0.1);
            }

            if ($.drop_evidence < 4) {
                $.evidence_4.placeRelativeToCar($.ia_car_rm3, 0.3, -0.7, -0.1);
            }

            if ($.drop_evidence < 5) {
                $.evidence_5.placeRelativeToCar($.ia_car_rm3, -0.3, -0.7, -0.1);
            }

            if ($.drop_evidence < 6) {
                $.evidence_6.placeRelativeToCar($.ia_car_rm3, -0.3, -1.7, -0.1);
            }

            if ($.amount_of_evidence_player_has == 6) {
                $.rays_evidence_blip.remove();
                Text.PrintNow('RM3_1', 5000, 1);
                while (!$.player.isInAnyCar()) {
                    await asyncWait(0);
                }
                $.players_car = $.player.storeCarIsIn();
                while ($.player.isInAnyCar()) {
                    await asyncWait(0);
                }
                if (!Car.IsDead($.players_car)) {
                    $.rays_evidence_blip = Blip.AddForCar($.players_car);
                    Hud.ClearCounter($.amount_of_evidence_player_has);
                    Text.PrintNow('RM3_7', 5000, 1); // "Now torch the car!"
                    while (!Car.IsDead($.players_car)) {
                        await asyncWait(0);
                    }
                    // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_ray3_passed'); // fallback: would break linear control flow
                } else {
                    // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_ray3_passed'); // fallback: would break linear control flow
                }
            }

            // Mission Ray3 failed
        }
    }

    async function mission_ray3_failed() {
        Text.PrintBig('m_fail', 5000, 1);
        return;

        // mission Ray3 passed
    }

    async function mission_ray3_passed() {
        $.flag_ray_mission3_passed = 1;
        Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1);
        $.player.addScore(10000);
        $.player.clearWantedLevel();
        Stat.RegisterMissionPassed('RM3');
        Audio.PlayMissionPassedTune(1);
        Stat.PlayerMadeProgress(1);
        $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
        // START_NEW_SCRIPT ray_mission4_loop
        // START_NEW_SCRIPT love_mission1_loop
        return;

        // mission cleanup
    }

    async function mission_cleanup_ray3() {
        //SWITCH_ROADS_ON -90.0 -791.0 24.0 -56.0 -587.0 36.0
        //SWITCH_ROADS_ON 195.0 -948.0 24.0 280.0 -913.0 40.0
        //SWITCH_ROADS_ON 251.0 -46.0 -21.0 320.0 68.0 27.0

        $.rays_evidence_blip.remove();
        $.prosecution_car_blip.remove();
        Hud.ClearCounter($.amount_of_evidence_player_has);
        Streaming.MarkModelAsNoLongerNeeded(112 /* CAR_BOBCAT */);
        Streaming.MarkModelAsNoLongerNeeded(61 /* PED_B_MAN3 */);
        Streaming.MarkModelAsNoLongerNeeded(1325 /* DONKEYMAG */);
        $.flag_player_on_mission = 0;
        $.flag_player_on_ray_mission = 0;

        Mission.Finish();
        return;
    }

    async function create_another_car() {
        if ($.timerd_reset_flag_r3 == 0) {
            $.timerd_started_r3 = Clock.GetGameTimer();
            $.timerd_reset_flag_r3 = 1;
        }

        if ($.timerd_reset_flag_r3 == 1) {
            $.timerd_current_r3 = Clock.GetGameTimer();
            $.timerd_r3 = $.timerd_current_r3 - $.timerd_started_r3;
            if ($.timerd_r3 > 15000) {
                Text.PrintNow('RM3_8', 5000, 1); //"That car is a decoy!!"
                $.prosecution_car_blip.remove();
                $.ia_car_rm3.markAsNoLongerNeeded();
                $.ia_car_driver_1.markAsNoLongerNeeded();
                if ($.player.locateAnyMeans2D($.ia_start_x, $.ia_start_y, 150.0, 150.0, false)) {
                    $.ia_car_rm3 = Car.Create(112 /* CAR_BOBCAT */, 254.8355, -667.3972, 25.3);
                } else {
                    $.ia_car_rm3 = Car.Create(112 /* CAR_BOBCAT */, $.ia_start_x, $.ia_start_y, $.ia_start_z);
                }
                $.ia_car_driver_1 = Char.CreateInsideCar($.ia_car_rm3, 4 /* PEDTYPE_CIVMALE */, 61 /* PED_B_MAN3 */);
                $.ia_car_rm3.setWatertight(true /* TRUE */);
                $.ia_car_driver_1.setCantBeDraggedOut(true /* TRUE */);
                $.ia_car_rm3.setOnlyDamagedByPlayer(true /* TRUE */);
                $.ia_car_rm3.setUpsidedownNotDamaged(true /* TRUE */);
                $.ia_car_rm3.setProofs(true /* TRUE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */);
                $.ia_car_rm3.setCruiseSpeed(100.0);
                $.ia_car_rm3.setDrivingStyle(2);
                $.ia_car_rm3.wanderRandomly();
                $.prosecution_car_blip = Blip.AddForCar($.ia_car_rm3);
                $.ia_car_rm3.lockDoors(2 /* CARLOCK_LOCKED */);
                $.ia_car_rm3.setAvoidLevelTransitions(true /* TRUE */);
                $.timerd_reset_flag_r3 = 0;
            }
        }

        return;
    }

    async function evidence_collected() {
        $.rays_evidence_blip.remove();
        $.get_coords_flag = 0;
        Sound.AddOneOffSound($.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z, 82 /* SOUND_EVIDENCE_PICKUP */);
        if ($.drop_evidence == 1) {
            $.evidence_1.delete();
            Hud.DisplayCounterWithString($.amount_of_evidence_player_has, 0 /* COUNTER_DISPLAY_NUMBER */, 'COLLECT');
        }
        if ($.drop_evidence == 2) {
            $.evidence_2.delete();
        }
        if ($.drop_evidence == 3) {
            $.evidence_3.delete();
        }
        if ($.drop_evidence == 4) {
            $.evidence_4.delete();
        }
        if ($.drop_evidence == 5) {
            $.evidence_5.delete();
        }
        if ($.drop_evidence == 6) {
            $.evidence_6.delete();
        }
        ++$.amount_of_evidence_player_has;
        Text.PrintWithNumberNow('RM3_5', $.amount_of_evidence_player_has, 5000, 1); //"You have ~1~ evidence packages."
        $.ia_have_evidence_flag = 1;
        TIMERB = 0;

        return;
    }
}

export async function ray3() {
    // MissionBoundary
    // *****************************************************************************************
    // ************************************ Ray mission 3 **************************************
    // ************************************ Evidence Dash **************************************
    // *****************************************************************************************
    // *** The Internal Affairs are aware of Ray's activities, but are unable to get any 	 ***
    // *** evidence until now. They have just raided one of Ray's old haunts and are leaving ***
    // *** with the evidence. The player must chase them down and ram them with his car, when***
    // *** their vehicle is rammed one of the packages will roll off the back. The player 	 ***
    // *** must grab that first and then go get the next package off them. There will be 8 to***
    // *** retrieve. Once the player has the stash he must get it back to his hideout.		 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_ray3
    await mission_start_ray3();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_ray3_failed
        await mission_ray3_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_ray3
    await mission_cleanup_ray3();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT rays_evidence_blip timera_reset_flag evidence_1 evidence_2 evidence_3 evidence_4 evidence_5 evidence_6
    // VAR_INT ia_car_rm3 ia_car_driver_1 wanted_level_change stored_wanted_level
    // VAR_INT ia_have_evidence_flag players_car prosecution_car_blip timer_for_speed reset_for_timer
    // VAR_INT temporary_health_var ia_car_previous_health ia_car_current_health
    // VAR_INT red green red_increase_flag red_decrease_flag green_increase_flag green_decrease_flag
    // VAR_INT amount_of_evidence_player_has amount_damage_ia_drop_evidence drop_one_flag drop_evidence get_coords_flag
    // VAR_INT timerc_reset_flag_r3 timerc_current_r3 timerc_started_r3 timerc_r3
    // VAR_INT timerd_reset_flag_r3 timerd_current_r3 timerd_started_r3 timerd_r3

    // VAR_FLOAT ia_start_x ia_start_y ia_start_z ia_car_x ia_car_y ia_car_z warp_heading
    // VAR_FLOAT object_current_coords_x object_current_coords_y object_current_coords_z car_stuck_x car_stuck_y car_stuck_z

    // ****************************************Mission Start************************************
}
