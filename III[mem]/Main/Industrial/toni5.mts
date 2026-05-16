// Generated from Main/Industrial/toni5.sc
import { $ } from '../../utils';


async function body() {
    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_toni_mission = 1;
    // SCRIPT_NAME toni5
    await asyncWait(0);

    {
        Streaming.LoadSpecialCharacter(1, 'tony');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'TONYH');
        Streaming.RequestModel(537 /* ind_newrizzos */);

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(537 /* ind_newrizzos */)
        ) {
            await asyncWait(0);
        }

        Cutscene.Load('t5_bf');
        Cutscene.SetOffset(1218.42, -314.5, 28.9);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_tony = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_tony.setAnim('tony');

        $.cs_tonyhead = CutsceneHead.Create($.cs_tony, 186 /* CUT_OBJ2 */);
        $.cs_tonyhead.setAnim('tony');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
        $.cs_playerhead.setAnim('player');

        World.ClearArea(1219.5, -321.1, 27.5, 1.0, true /* TRUE */);
        $.player.setCoordinates(1219.5, -321.1, 26.4);

        $.player.setHeading(180.0);

        World.ClearArea(1216.1, -313.0, 29.9, 10.0, true /* TRUE */); //TONIS RESTAURANT

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);
        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 1350) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_B', 10000, 1); // Mission brief

        while ($.cs_time < 3169) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_C', 10000, 1); // Mission brief

        while ($.cs_time < 5730) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_D', 10000, 1); // Mission brief

        while ($.cs_time < 7755) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_E', 10000, 1); // Mission brief

        while ($.cs_time < 12490) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_F', 10000, 1); // Mission brief

        while ($.cs_time < 17220) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_G', 10000, 1); // Mission brief

        while ($.cs_time < 21330) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_H', 10000, 1); // Mission brief

        while ($.cs_time < 24141) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_I', 10000, 1); // Mission brief

        while ($.cs_time < 25817) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM5_J', 10000, 1); // Mission brief

        while ($.cs_time < 28632) {
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
        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(537 /* ind_newrizzos */);

        Streaming.RequestModel(98 /* CAR_TRASHMASTER */);

        while (!Streaming.HasModelLoaded(98 /* CAR_TRASHMASTER */)) {
            await asyncWait(0);
        }

        $.triads_spot_you = 0;
        $.clear_triads_threats = 0;

        // START MISSION

        $.explosive_truck = Car.Create(98 /* CAR_TRASHMASTER */, 1314.0, -106.0, -100.0);
        $.explosive_truck.setProofs(true /* TRUE */, true /* TRUE */, false /* FALSE */, false /* FALSE */, true /* TRUE */);
        $.explosive_truck.armWithBomb(1 /* CARBOMB_TIMED */);

        $.fish_factory_destroyed = 0;

        $.blip1_tm5 = Blip.AddForCar($.explosive_truck);

        while (!$.player.isInCar($.explosive_truck)) {
            await asyncWait(0);
            if (Car.IsDead($.explosive_truck)) {
                // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
            }
            // SCM GOSUB triad_AI
            await triad_AI();
            // fallback if label was not emitted as async function: no-op continues linearly
            if (!$.explosive_truck.isHealthGreater(860) && !$.explosive_truck.isInArea3D(961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0, false /* FALSE */)) {
                $.explosive_truck.explode();
                // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
            }
        }

        $.countdown_tm5 = 151000;
        Hud.DisplayTimer($.countdown_tm5);

        $.explosive_truck_health = $.explosive_truck.getHealth();
        Hud.DisplayCounterWithString($.explosive_truck_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM');
        $.explosive_truck_health2 = 1000 - $.explosive_truck_health;
        if ($.explosive_truck_health2 > 100) {
            $.explosive_truck_health2 = 100;
        }
        $.explosive_truck_health = $.explosive_truck_health2;

        $.flag_car_blip_displayed_tm5 = 1 /* TRUE */;
        $.blob_flag = 1;
    }

    async function toni5_wait_for_van() {
        await asyncWait(0);

        if (Car.IsDead($.explosive_truck)) {
            // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
        }

        while (!$.explosive_truck.isStoppedInArea3D(961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0, $.blob_flag)) {
            await asyncWait(0);
            if (Car.IsDead($.explosive_truck)) {
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
            }
            // SCM GOSUB triad_AI
            await triad_AI();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB Truck_health
            await Truck_health();
            // fallback if label was not emitted as async function: no-op continues linearly
            const _res291 = $.explosive_truck.getCoordinates();
            $.truck_x = _res291.x;
            $.truck_y = _res291.y;
            $.truck_z = _res291.z;
            if ($.player.isInCar($.explosive_truck)) {
                if ($.flag_car_blip_displayed_tm5 == 1 /* TRUE */) {
                    $.blip2_tm5 = Blip.AddForCoord(965.0, -1117.0, -100.0);
                    $.blob_flag = 1;
                    $.blip1_tm5.remove();
                    $.flag_car_blip_displayed_tm5 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.explosive_truck)) {
                if ($.flag_car_blip_displayed_tm5 == 0 /* FALSE */) {
                    $.blip1_tm5 = Blip.AddForCar($.explosive_truck);
                    $.blob_flag = 0;
                    $.blip2_tm5.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the car!"
                    $.flag_car_blip_displayed_tm5 = 1 /* TRUE */;
                }
            }
            if (!$.explosive_truck.isHealthGreater(900) && !$.explosive_truck.isInArea3D(961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0, false /* FALSE */)) {
                $.explosive_truck.explode();
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
            }
            if ($.countdown_tm5 == 0 && !$.explosive_truck.isInArea3D(961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0, false /* FALSE */)) {
                $.explosive_truck.explode();
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
            }
        }

        Streaming.RequestModel(418 /* fshfctry_dstryd */);
        Text.PrintNow('JM1_3', 5000, 2); //Activate the car bomb then get out of there!
        Weather.Force(0 /* WEATHER_SUNNY */);

        if (Car.IsDead($.explosive_truck)) {
            Text.PrintNow('WRECKED', 5000, 1);
            // SCM GOTO → mission_toni5_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_toni5_failed'); // fallback: would break linear control flow
        }

        while (!World.IsExplosionInArea(3 /* EXPLOSION_CAR */, 961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0)) {
            await asyncWait(0);
            if (Car.IsDead($.explosive_truck)) {
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → explosion (not lowered; manual jump required)
                throw new Error('unresolved GOTO explosion'); // fallback: would break linear control flow
            }
            // SCM GOSUB triad_AI
            await triad_AI();
            // fallback if label was not emitted as async function: no-op continues linearly
            // SCM GOSUB Truck_health
            await Truck_health();
            // fallback if label was not emitted as async function: no-op continues linearly
            const _res292 = $.explosive_truck.getCoordinates();
            $.truck_x = _res292.x;
            $.truck_y = _res292.y;
            $.truck_z = _res292.z;
            if (!$.explosive_truck.isInArea3D(961.0, -1112.5, 12.5, 969.5, -1122.8, 15.0, false /* FALSE */)) {
                // SCM GOTO → toni5_wait_for_van (not lowered; manual jump required)
                throw new Error('unresolved GOTO toni5_wait_for_van'); // fallback: would break linear control flow
            }
            if (!$.player.isInCar($.explosive_truck) && !$.explosive_truck.isArmedWithBomb(4 /* CARBOMB_TIMEDACTIVE */)) {
                Text.PrintNow('JM1_5', 5000, 1); // The vehicle bomb's not set!
            }
            if (!$.explosive_truck.isHealthGreater(900)) {
                $.explosive_truck.explode();
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → explosion (not lowered; manual jump required)
                throw new Error('unresolved GOTO explosion'); // fallback: would break linear control flow
            }
            if ($.countdown_tm5 == 0) {
                $.explosive_truck.explode();
                Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, $.truck_x, $.truck_y, $.truck_z, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 4000);
                // SCM GOTO → explosion (not lowered; manual jump required)
                throw new Error('unresolved GOTO explosion'); // fallback: would break linear control flow
            }
        }
    }

    async function explosion() {
        Hud.ClearTimer($.countdown_tm5);

        $.player.setControl(false /* Off */);
        Hud.SwitchWidescreen(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, true /* On */);
        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        Camera.SetFixedPosition(940.279, -1136.787, 16.55, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(941.065, -1136.169, 16.522, 2 /* JUMP_CUT */);

        $.blip1_tm5.remove();
        $.blip2_tm5.remove();
        await asyncWait(300);

        Camera.Shake(300);
        //ADD_MOVING_PARTICLE_EFFECT POBJECT_FIREBALL_AND_SMOKE 965.8 -1111.9 15.5 0.0 0.0 0.0 4.0 0 0 0 4000

        Fx.AddExplosion(965.8, -1111.9, 15.5, 5 /* EXPLOSION_HELI */);
        //ADD_ONE_OFF_SOUND 965.8 -1111.9 15.5 sound_test_1

        $.fish_Fire3 = ScriptFire.Create(966.0, -1111.8, 13.8);

        //ADD_MOVING_PARTICLE_EFFECT POBJECT_FIREBALL_AND_SMOKE 966.0 -1123.0 15.4 0.0 0.0 0.0 4.0 0 0 0 4000

        Fx.AddExplosion(966.0, -1123.0, 15.4, 5 /* EXPLOSION_HELI */);
        //ADD_ONE_OFF_SOUND 966.0 -1123.0 15.4 sound_test_1

        await asyncWait(600);

        Camera.Shake(400);
        Fx.AddExplosion(970.0, -1119.0, 16.0, 5 /* EXPLOSION_HELI */);
        await asyncWait(300);

        Camera.Shake(300);
        Fx.AddExplosion(985.0, -1119.0, 14.0, 5 /* EXPLOSION_HELI */);
        await asyncWait(400);

        Camera.Shake(400);
        Fx.AddExplosion(985.0, -1120.0, 20.0, 5 /* EXPLOSION_HELI */);
        await asyncWait(200);

        Camera.Shake(300);
        Camera.SetFixedPosition(960.5, -1094.0, 21.1, 0.0, 0.0, 0.0);
        Camera.PointAtPoint(961.2, -1094.7, 20.8, 2 /* JUMP_CUT */);

        Fx.AddExplosion(969.2, -1104.0, 18.3, 5 /* EXPLOSION_HELI */);
        await asyncWait(300);

        Camera.Shake(400);
        Fx.AddExplosion(968.4, -1119.2, 17.4, 5 /* EXPLOSION_HELI */);
        await asyncWait(200);

        Camera.Shake(300);
        Fx.AddExplosion(979.4, -1103.9, 18.9, 5 /* EXPLOSION_HELI */);
        await asyncWait(300);

        Camera.Shake(400);
        Fx.AddExplosion(976.0, -1108.3, 21.4, 5 /* EXPLOSION_HELI */);
        await asyncWait(300);

        Camera.Shake(300);
        Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 969.8, -1104.9, 18.7, 0.0, 0.0, 0.0, 5.0, 0, 0, 0, 5000);
        //ADD_MOVING_PARTICLE_EFFECT POBJECT_FIREBALL_AND_SMOKE 986.3 -1103.4 14.7 0.0 0.0 0.0 4.0 0 0 0 4000

        Fx.AddExplosion(972.7, -1102.2, 18.5, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(986.3, -1103.4, 14.7, 5 /* EXPLOSION_HELI */);
        $.debris1_tm5 = ScriptObject.Create(1413 /* fish01 */, 972.7, -1103.6, 20.6);
        $.debris2_tm5 = ScriptObject.Create(1413 /* fish01 */, 972.7, -1103.2, 20.6);
        $.debris3_tm5 = ScriptObject.Create(1413 /* fish01 */, 978.8, -1107.2, 21.6);
        $.debris4_tm5 = ScriptObject.Create(1413 /* fish01 */, 979.8, -1105.2, 21.6);
        $.debris1_tm5.setDynamic(true /* TRUE */);
        $.debris2_tm5.setDynamic(true /* TRUE */);
        $.debris3_tm5.setDynamic(true /* TRUE */);
        $.debris4_tm5.setDynamic(true /* TRUE */);
        $.debris1_tm5.setVelocity(-10.0, 6.0, 18.0);
        $.debris2_tm5.setVelocity(8.0, 7.0, 16.0);
        $.debris3_tm5.setVelocity(-7.0, 10.0, 14.0);
        $.debris4_tm5.setVelocity(9.0, 6.0, 15.0);
        Sound.AddOneOffSound(969.8, -1104.9, 18.7, 0 /* sound_test_1 */);
        //ADD_ONE_OFF_SOUND 971.7 -1101.2 17.5 sound_test_1

        await asyncWait(400);
        Camera.Shake(500);

        Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 974.2, -1129.8, 19.5, 0.0, 0.0, 0.0, 5.0, 0, 0, 0, 5000);
        //ADD_MOVING_PARTICLE_EFFECT POBJECT_FIREBALL_AND_SMOKE 973.6 -1128.8 19.6 0.0 0.0 0.0 4.0 0 0 0 4000

        Fx.AddExplosion(982.0, -1102.8, 17.4, 5 /* EXPLOSION_HELI */);
        Fx.AddExplosion(973.6, -1128.8, 19.6, 5 /* EXPLOSION_HELI */);
        $.debris5_tm5 = ScriptObject.Create(1413 /* fish01 */, 982.0, -1103.8, 20.4);
        $.debris6_tm5 = ScriptObject.Create(1413 /* fish01 */, 982.0, -1103.0, 20.4);
        $.debris7_tm5 = ScriptObject.Create(1413 /* fish01 */, 983.0, -1112.0, 20.4);
        $.debris8_tm5 = ScriptObject.Create(1413 /* fish01 */, 985.0, -1108.0, 19.4);
        $.debris9_tm5 = ScriptObject.Create(1413 /* fish01 */, 977.0, -1113.0, 21.4);
        $.debris10_tm5 = ScriptObject.Create(1413 /* fish01 */, 976.0, -1115.0, 21.4);
        $.debris5_tm5.setDynamic(true /* TRUE */);
        $.debris6_tm5.setDynamic(true /* TRUE */);
        $.debris7_tm5.setDynamic(true /* TRUE */);
        $.debris8_tm5.setDynamic(true /* TRUE */);
        $.debris9_tm5.setDynamic(true /* TRUE */);
        $.debris10_tm5.setDynamic(true /* TRUE */);
        $.debris5_tm5.setVelocity(-3.0, 6.0, 18.0);
        $.debris6_tm5.setVelocity(5.0, 7.0, 16.0);
        $.debris7_tm5.setVelocity(-6.0, 7.0, 17.0);
        $.debris8_tm5.setVelocity(8.0, 9.0, 16.0);
        $.debris9_tm5.setVelocity(-7.0, 8.0, 14.0);
        $.debris10_tm5.setVelocity(-1.0, 10.0, 14.0);
        Sound.AddOneOffSound(974.2, -1129.8, 19.5, 0 /* sound_test_1 */);
        //ADD_ONE_OFF_SOUND 983.0 -1103.8 18.4 sound_test_1

        Camera.SetFadingColor(255, 255, 255);

        Camera.DoFade(400, 0 /* FADE_OUT */);
        if (!$.player.isDead()) {
            World.SwapNearestBuildingModel(981.5, -1123.9, 16.7, 80.0, 419 /* fishfctory */, 418 /* fshfctry_dstryd */);
        }
        Camera.DoFade(400, 1 /* FADE_IN */);

        $.fish_Fire2 = ScriptFire.Create(979.3, -1106.1, 14.7);
        $.fish_fire4 = ScriptFire.Create(981.0, -1132.0, 14.0);
        $.fish_fire6 = ScriptFire.Create(970.6, -1107.5, 18.5);
        $.fish_fire7 = ScriptFire.Create(965.8, -1123.4, 14.0);

        $.fish_factory_destroyed = 1;

        await asyncWait(3000);

        Weather.Release();
        Hud.SwitchWidescreen(false /* OFF */);
        $.player.setControl(true /* ON */);
        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
        Camera.RestoreJumpcut();
    }

    // SCM GOTO → mission_toni5_passed (not lowered; manual jump required)
    return;

    // Mission toni5 failed
}

async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    return;

    // mission toni5 passed
}

async function onPassed() {
    $.flag_toni_mission5_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 30000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(30000);
    $.frankie_contact_blip.remove();
    $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
    Zone.SetPedInfo('FISHFAC', 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0); //Fish factory
    Zone.SetPedInfo('FISHFAC', 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    $.gen_car47.switch(0);
    $.gen_car48.switch(0);
    $.gen_car49.switch(0);
    $.flag_frankie_switched_off = 0;
    Stat.RegisterMissionPassed('TM5');
    Stat.PlayerMadeProgress(1);
    $.toni_contact_blip.remove();
    // START_NEW_SCRIPT toni5_flames_loop
    return;

    // mission cleanup
}

async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_toni_mission = 0;
    $.blip1_tm5.remove();
    $.blip2_tm5.remove();
    Hud.ClearTimer($.countdown_tm5);
    Hud.ClearCounter($.explosive_truck_health);
    Streaming.MarkModelAsNoLongerNeeded(98 /* CAR_TRASHMASTER */);
    Streaming.MarkModelAsNoLongerNeeded(418 /* fshfctry_dstryd */);
    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */); //TEST
    Camera.SetFadingColor(1, 1, 1);
    Mission.Finish();
    return;

    {
    }

    async function triad_AI() {
        if ($.player.isInZone('PORT_W') && $.has_player_been_at_fish_before == 1 && $.clear_triads_threats == 0) {
            if (!Char.IsDead($.fish_triad1)) {
                $.fish_triad1.clearThreatSearch();
            }
            if (!Char.IsDead($.fish_triad2)) {
                $.fish_triad2.clearThreatSearch();
            }
            if (!Char.IsDead($.fish_triad3)) {
                $.fish_triad3.clearThreatSearch();
            }
            if (!Char.IsDead($.fish_triad4)) {
                $.fish_triad4.clearThreatSearch();
            }
            if (!Char.IsDead($.fish_triad5)) {
                $.fish_triad5.clearThreatSearch();
            }
            if (!Char.IsDead($.fish_triad6)) {
                $.fish_triad6.clearThreatSearch();
            }
            Game.ClearThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */);
            $.clear_triads_threats = 1;
        }

        if ($.player.isInZone('FISHFAC')) {
            if ($.triads_spot_you == 0) {
                if (!$.player.isInAnyCar()) {
                    if (!Char.IsDead($.fish_triad1)) {
                        $.fish_triad1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad2)) {
                        $.fish_triad2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad3)) {
                        $.fish_triad3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad4)) {
                        $.fish_triad4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad5)) {
                        $.fish_triad5.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad6)) {
                        $.fish_triad6.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */); //TEST
                    $.triads_spot_you = 1;
                }
                if (
                    Char.IsDead($.fish_triad1) ||
                    Char.IsDead($.fish_triad2) ||
                    Char.IsDead($.fish_triad3) ||
                    Char.IsDead($.fish_triad4) ||
                    Char.IsDead($.fish_triad5) ||
                    Char.IsDead($.fish_triad6)
                ) {
                    if (!Char.IsDead($.fish_triad1)) {
                        $.fish_triad1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad2)) {
                        $.fish_triad2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad3)) {
                        $.fish_triad3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad4)) {
                        $.fish_triad4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad5)) {
                        $.fish_triad5.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    if (!Char.IsDead($.fish_triad6)) {
                        $.fish_triad6.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    }
                    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */); //TEST
                    $.triads_spot_you = 1;
                }
            }
        }

        return;
    }
}

async function Truck_health() {
    {
        if (!Car.IsDead($.explosive_truck)) {
            $.explosive_truck_health = $.explosive_truck.getHealth();
            $.explosive_truck_health2 = 1000 - $.explosive_truck_health;
            if ($.explosive_truck_health2 > 100) {
                $.explosive_truck_health2 = 100;
            }
            $.explosive_truck_health = $.explosive_truck_health2;
        }

        return;
    }
}

// MissionBoundary
// *******************************************************************************************
// *******************************************************************************************
// *************************************Toni mission 5****************************************
// **********************************Destroy Fish Factory*************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

// Mission start stuff

// SCM GOSUB mission_start_toni5
// fallback if label was not emitted as async function: no-op continues linearly

// SCM GOSUB mission_toni5_failed
// fallback if label was not emitted as async function: no-op continues linearly

// SCM GOSUB mission_cleanup_toni5
// fallback if label was not emitted as async function: no-op continues linearly

// MissionBoundary

// Variables for mission

// VAR_INT blip1_tm5 blip2_tm5

// VAR_INT explosive_truck countdown_tm5

// VAR_INT fish_factory_destroyed triads_spot_you

// VAR_INT flag_car_blip_displayed_tm5 explosive_truck_health explosive_truck_health2

// VAR_INT fish_fire2 fish_fire3 fish_fire4 fish_fire5 fish_fire6 fish_fire7

// VAR_INT debris1_tm5 debris2_tm5 debris3_tm5 debris4_tm5 debris5_tm5 debris6_tm5 debris7_tm5 debris8_tm5 debris9_tm5 debris10_tm5

// VAR_FLOAT truck_x truck_y truck_z

// ***************************************Mission Start*************************************

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);

