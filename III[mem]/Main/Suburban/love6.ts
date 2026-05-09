// Generated from Main/Suburban/love6.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_love6() {
    $.flag_player_on_mission = 1;
    $.flag_player_on_love_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    // SCRIPT_NAME love6

    $.get_in_van = 0;
    $.survival_time = 180000;

    // ****************************************START OF CUTSCENE********************************

    //SET_FADING_COLOUR 0 0 0
    //
    //DO_FADE 1500 FADE_OUT
    //
    //IF CAN_PLAYER_START_MISSION player
    //	MAKE_PLAYER_SAFE_FOR_CUTSCENE player
    //ELSE
    //	GOTO mission_love6_failed
    //ENDIF
    //
    //PRINT_BIG LOVE6	15000 2

    Streaming.LoadSpecialCharacter(1, 'love2');
    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'LOVEH');
    Streaming.RequestModel(1731 /* tshrorckgrdn */);
    Streaming.RequestModel(1732 /* tshrorckgrdn_alfas */);

    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasModelLoaded(1731 /* tshrorckgrdn */) ||
        !Streaming.HasModelLoaded(1732 /* tshrorckgrdn_alfas */) ||
        !Streaming.HasModelLoaded(185 /* cut_obj1 */)
    ) {
        await asyncWait(0);
    }

    Cutscene.Load('D6_STS');

    Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);

    $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
    $.cs_player.setAnim('player');

    $.cs_love = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
    $.cs_love.setAnim('love2');

    $.cs_lovehead = CutsceneHead.Create($.cs_love, 185 /* CUT_OBJ1 */);
    $.cs_lovehead.setAnim('love');

    World.ClearArea(82.44, -1548.49, 28.0, 2.0, true /* TRUE */);

    $.player.setCoordinates(82.44, -1548.49, 28.0);

    $.player.setHeading(90.0);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    Cutscene.Start();

    World.SwitchRubbish(false /* OFF */);

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 1526) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_A', 5000, 1); //"A lesson in business, my friend;"

    while ($.cs_time < 3011) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_E', 5000, 1); //"if you have a unique commodity, the world and his wife will try to wrestle it from your grasp."

    while ($.cs_time < 7026) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_B', 5000, 1); //"Even if they have little understanding as to its true value."

    while ($.cs_time < 10679) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_C', 5000, 1); //"SWAT teams have cordoned the area around my friend and the package."

    while ($.cs_time < 14011) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_D', 5000, 1); //"Get over there, pick up the van and bust out as a decoy."

    while ($.cs_time < 16741) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('LOVE6_F', 5000, 1); //"Keep them busy for 5 minutes and he should make good his escape!"

    while ($.cs_time < 20333) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Camera.DoFade(1500, 0 /* FADE_OUT */);

    while (!Cutscene.HasFinished()) {
        await asyncWait(0);
    }

    World.SwitchRubbish(true /* ON */);

    Text.ClearPrints();

    Cutscene.Clear();

    Camera.DoFade(0, 0 /* FADE_OUT */);

    Camera.SetBehindPlayer();

    Streaming.UnloadSpecialCharacter(1);
    Streaming.MarkModelAsNoLongerNeeded(1731 /* tshrorckgrdn */);
    Streaming.MarkModelAsNoLongerNeeded(1732 /* tshrorckgrdn_alfas */);
    Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);

    Game.SetSwatRequired(true /* TRUE */);
    Streaming.RequestModel(117 /* CAR_ENFORCER */);
    Streaming.RequestModel(2 /* PED_SWAT */);
    Streaming.RequestModel(1 /* PED_COP */);
    Streaming.RequestModel(116 /* CAR_POLICE */);
    Streaming.RequestModel(118 /* CAR_SECURICAR */);

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasModelLoaded(117 /* CAR_ENFORCER */) ||
        !Streaming.HasModelLoaded(116 /* CAR_POLICE */) ||
        !Streaming.HasModelLoaded(1 /* PED_COP */) ||
        !Streaming.HasModelLoaded(2 /* PED_SWAT */) ||
        !Streaming.HasModelLoaded(118 /* CAR_SECURICAR */)
    ) {
        await asyncWait(0);
    }

    Streaming.Switch(true /* ON */);
    Camera.DoFade(1500, 1 /* FADE_IN */);

    Audio.LoadMissionAudio('lo6_a' as any);

    while (Camera.GetFadingStatus()) {
        await asyncWait(0);
    }

    // ******************************************END OF CUTSCENE********************************

    $.decoy_van_blip = Blip.AddForCoordOld(-1026.5, -73.5, 39.0, 0 /* RED */, 2 /* BLIP_ONLY */);
    $.decoy_van_blip.changeScale(3);

    while (!Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
        await asyncWait(0);
    }

    while (!$.player.locateAnyMeans2D(-1026.5, -73.5, 200.0, 200.0, false)) {
        await asyncWait(0);
    }

    Game.SetMaxWantedLevel(6);

    $.decoy_van = Car.Create(118 /* CAR_SECURICAR */, -1026.5, -73.5, 39.0);
    $.decoy_van.changeColor(0, 0);
    $.decoy_van.setHeading(270.0);
    $.decoy_van.setIdle();
    $.decoy_van.lockDoors(1 /* CARLOCK_UNLOCKED */);
    $.decoy_van.setStrong(true /* TRUE */);

    $.decoy_van_blip.remove();
    $.decoy_van_blip = Blip.AddForCar($.decoy_van);

    $.swat_1 = Car.Create(117 /* CAR_ENFORCER */, -1005.5, 11.0, 44.0);
    $.swat_1.setHeading(119.0);
    $.swat_1.setIdle();
    $.ped_swat_1 = Char.CreateInsideCar($.swat_1, 6 /* PEDTYPE_COP */, 2 /* PED_SWAT */);
    $.ped_swat_1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_1.setIdle();
    $.ped_swat_1.setObjNoObj();
    $.swat_1.setMission(0 /* MISSION_NONE */);

    $.swat_2 = Car.Create(117 /* CAR_ENFORCER */, -1112.4, -46.4, 49.0);
    $.swat_2.setHeading(212.0);
    $.swat_2.setIdle();
    $.ped_swat_2 = Char.CreateInsideCar($.swat_2, 6 /* PEDTYPE_COP */, 2 /* PED_SWAT */);
    $.ped_swat_2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_2.setIdle();
    $.ped_swat_2.setObjNoObj();
    $.swat_2.setMission(0 /* MISSION_NONE */);

    $.swat_3 = Car.Create(117 /* CAR_ENFORCER */, -1118.4, -63.6, 48.7);
    $.swat_3.setHeading(321.0);
    $.swat_3.setIdle();
    $.ped_swat_3 = Char.CreateInsideCar($.swat_3, 6 /* PEDTYPE_COP */, 2 /* PED_SWAT */);
    $.ped_swat_3.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_3.setIdle();
    $.ped_swat_3.setObjNoObj();
    $.swat_3.setMission(0 /* MISSION_NONE */);

    $.swat_4 = Car.Create(117 /* CAR_ENFORCER */, -963.3, -108.7, 34.7);
    $.swat_4.setHeading(103.0);
    $.swat_4.setIdle();
    $.ped_swat_4 = Char.CreateInsideCar($.swat_4, 6 /* PEDTYPE_COP */, 2 /* PED_SWAT */);
    $.ped_swat_4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_4.setIdle();
    $.ped_swat_4.setObjNoObj();
    $.swat_4.setMission(0 /* MISSION_NONE */);

    $.swat_5 = Car.Create(117 /* CAR_ENFORCER */, -957.0, -111.0, 34.5);
    $.swat_5.setHeading(108.5);
    $.swat_5.setIdle();
    $.ped_swat_5 = Char.CreateInsideCar($.swat_5, 6 /* PEDTYPE_COP */, 2 /* PED_SWAT */);
    $.ped_swat_5.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_5.setIdle();
    $.ped_swat_5.setObjNoObj();
    $.swat_5.setMission(0 /* MISSION_NONE */);

    $.cop_1 = Car.Create(116 /* CAR_POLICE */, -983.0, -120.3, 33.6);
    $.cop_1.setHeading(270.0);
    $.cop_1.setIdle();
    $.ped_cop_1 = Char.CreateInsideCar($.cop_1, 6 /* PEDTYPE_COP */, 1 /* PED_COP */);
    $.ped_cop_1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
    $.ped_cop_1.setIdle();
    $.ped_cop_1.setObjNoObj();
    $.cop_1.setMission(0 /* MISSION_NONE */);

    $.cop_2 = Car.Create(116 /* CAR_POLICE */, -1018.8, 4.4, 43.7);
    $.cop_2.setHeading(262.0);
    $.cop_2.setIdle();
    $.ped_cop_2 = Char.CreateInsideCar($.cop_2, 6 /* PEDTYPE_COP */, 1 /* PED_COP */);
    $.ped_cop_2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
    $.ped_cop_2.setIdle();
    $.ped_cop_2.setObjNoObj();
    $.cop_2.setMission(0 /* MISSION_NONE */);

    $.cop_3 = Car.Create(116 /* CAR_POLICE */, -1114.4, -50.0, 48.6);
    $.cop_3.setHeading(202.0);
    $.cop_3.setIdle();
    $.ped_cop_3 = Char.CreateInsideCar($.cop_3, 6 /* PEDTYPE_COP */, 1 /* PED_COP */);
    $.ped_cop_3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
    $.ped_cop_3.setIdle();
    $.ped_cop_3.setObjNoObj();
    $.cop_3.setMission(0 /* MISSION_NONE */);

    $.ped_swat_6 = Char.Create(6 /* PEDTYPE_COP */, 2 /* PED_SWAT */, -1115.7, -63.9, 48.8);
    $.ped_swat_6.setHeading(342.0);
    $.ped_swat_6.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_6.setIdle();
    $.ped_swat_6.setObjNoObj();

    $.ped_swat_7 = Char.Create(6 /* PEDTYPE_COP */, 2 /* PED_SWAT */, -965.3, -111.2, 34.0);
    $.ped_swat_7.setHeading(41.0);
    $.ped_swat_7.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_7.setIdle();
    $.ped_swat_7.setObjNoObj();

    $.ped_swat_8 = Char.Create(6 /* PEDTYPE_COP */, 2 /* PED_SWAT */, -960.5, -113.0, 34.0);
    $.ped_swat_8.setHeading(173.0);
    $.ped_swat_8.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_swat_8.setIdle();
    $.ped_swat_8.setObjNoObj();

    $.ped_cop_4 = Char.Create(6 /* PEDTYPE_COP */, 1 /* PED_COP */, -1103.4, -47.8, 48.8);
    $.ped_cop_4.setHeading(255.0);
    $.ped_cop_4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_cop_4.setIdle();
    $.ped_cop_4.setObjNoObj();

    $.ped_cop_5 = Char.Create(6 /* PEDTYPE_COP */, 1 /* PED_COP */, -984.0, -91.2, 36.0);
    $.ped_cop_5.setHeading(339.0);
    $.ped_cop_5.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_cop_5.setIdle();
    $.ped_cop_5.setObjNoObj();

    $.ped_cop_6 = Char.Create(6 /* PEDTYPE_COP */, 1 /* PED_COP */, -1005.0, 5.5, 43.8);
    $.ped_cop_6.setHeading(169.0);
    $.ped_cop_6.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
    $.ped_cop_6.setIdle();
    $.ped_cop_6.setObjNoObj();

    while (!$.player.isInCar($.decoy_van)) {
        await asyncWait(0);
        if (Car.IsDead($.decoy_van)) {
            // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love6_failed'); // fallback: would break linear control flow
        }
    }

    $.decoy_van_blip.remove();

    //PRINT_NOW GOGO 5000 1 //GO GO GO!!

    if (!Char.IsDead($.ped_swat_6)) {
        $.ped_swat_6.setObjKillPlayerAnyMeans($.player);
        $.ped_swat_6.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.ped_swat_7)) {
        $.ped_swat_7.setObjDestroyCar($.decoy_van);
        $.ped_swat_7.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.ped_swat_8)) {
        $.ped_swat_8.setObjKillPlayerAnyMeans($.player);
        $.ped_swat_8.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.ped_cop_4)) {
        $.ped_cop_4.setObjDestroyCar($.decoy_van);
        $.ped_cop_4.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.ped_cop_5)) {
        $.ped_cop_5.setObjKillPlayerAnyMeans($.player);
        $.ped_cop_5.markAsNoLongerNeeded();
    }

    if (!Char.IsDead($.ped_cop_6)) {
        $.ped_cop_6.setObjDestroyCar($.decoy_van);
        $.ped_cop_6.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.swat_1)) {
        $.swat_1.setCruiseSpeed(100.0);
        $.swat_1.setDrivingStyle(2);
        $.swat_1.setRamCar($.decoy_van);
        $.swat_1.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.swat_2)) {
        $.swat_2.setCruiseSpeed(100.0);
        $.swat_2.setDrivingStyle(2);
        $.swat_2.setRamCar($.decoy_van);
        $.swat_2.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.swat_3)) {
        $.swat_3.setCruiseSpeed(100.0);
        $.swat_3.setDrivingStyle(2);
        $.swat_3.setRamCar($.decoy_van);
        $.swat_3.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.swat_4)) {
        $.swat_4.setCruiseSpeed(100.0);
        $.swat_4.setDrivingStyle(2);
        $.swat_4.setRamCar($.decoy_van);
        $.swat_4.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.swat_5)) {
        $.swat_5.setCruiseSpeed(100.0);
        $.swat_5.setDrivingStyle(2);
        $.swat_5.setRamCar($.decoy_van);
        $.swat_5.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.cop_1)) {
        $.cop_1.setCruiseSpeed(100.0);
        $.cop_1.setDrivingStyle(2);
        $.cop_1.setRamCar($.decoy_van);
        $.cop_1.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.cop_2)) {
        $.cop_2.setCruiseSpeed(100.0);
        $.cop_2.setDrivingStyle(2);
        $.cop_2.setRamCar($.decoy_van);
        $.cop_2.markAsNoLongerNeeded();
    }

    if (!Car.IsDead($.cop_3)) {
        $.cop_3.setCruiseSpeed(100.0);
        $.cop_3.setDrivingStyle(2);
        $.cop_3.setRamCar($.decoy_van);
        $.cop_3.markAsNoLongerNeeded();
    }

    $.player.alterWantedLevel(6);

    Hud.DisplayTimer($.survival_time);

    Text.PrintNow('LOVE6_1', 5000, 1); //"Now lead the cops away!"

    if (Audio.HasMissionAudioLoaded()) {
        Audio.PlayMissionAudio();
    }

    $.decoy_van_health = $.decoy_van.getHealth();
    //escort_truck_health += dummy_health
    //escort_truck_health = escort_truck_health / 2

    $.decoy_van_health = $.decoy_van_health - 250;
    $.decoy_van_health = $.decoy_van_health * 100;
    $.decoy_van_health = $.decoy_van_health / 750;
    $.decoy_van_health2 = $.decoy_van_health;
    $.decoy_van_health = 100 - $.decoy_van_health2;
    if ($.decoy_van_health > 100) {
        $.decoy_van_health = 100;
    }

    Hud.DisplayCounterWithString($.decoy_van_health, 1 /* COUNTER_DISPLAY_BAR */, 'DAM');

    while ($.survival_time > 0) {
        await asyncWait(0);
        if (Car.IsDead($.decoy_van)) {
            // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love6_failed'); // fallback: would break linear control flow
        }
        $.player.alterWantedLevel(6);
        $.decoy_van_health = $.decoy_van.getHealth();
        //	escort_truck_health += dummy_health
        //	escort_truck_health = escort_truck_health / 2
        $.decoy_van_health = $.decoy_van_health - 250;
        $.decoy_van_health = $.decoy_van_health * 100;
        $.decoy_van_health = $.decoy_van_health / 750;
        $.decoy_van_health2 = $.decoy_van_health;
        $.decoy_van_health = 100 - $.decoy_van_health2;
        if ($.decoy_van_health > 100) {
            $.decoy_van_health = 100;
        }
        if (!$.player.isInCar($.decoy_van)) {
            if ($.get_in_van == 0) {
                $.out_of_car_timer_start = Clock.GetGameTimer();
                if ($.survival_time > 15000) {
                    $.out_of_car_timer = 15000;
                } else {
                    $.out_of_car_timer = $.survival_time;
                }
                $.decoy_van_blip = Blip.AddForCar($.decoy_van);
                $.get_in_van = 1;
            }
            $.out_of_car_timer_present = Clock.GetGameTimer();
            $.out_of_car_timer_diff = $.out_of_car_timer_present - $.out_of_car_timer_start;
            $.out_of_car_timer -= $.out_of_car_timer_diff;
            $.out_of_car_timer_start = $.out_of_car_timer_present;
            $.out_of_car_timer_secs = $.out_of_car_timer / 1000;
            Text.PrintWithNumberNow('LOVE6_3', $.out_of_car_timer_secs, 200, 1); //~g~You have ~1~ seconds to return to the Securicar before you fail the mission.
            if ($.out_of_car_timer_secs < 1) {
                Text.PrintNow('LOVE6_4', 3000, 1); //~r~You ditched the Decoy Securicar!
                // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love6_failed'); // fallback: would break linear control flow
            }
        }
        if ($.player.isInCar($.decoy_van) && $.get_in_van == 1) {
            $.decoy_van_blip.remove();
            $.get_in_van = 0;
        }
    }

    if ($.player.locateAnyMeans2D(-1026.5, -73.5, 160.0, 160.0, false)) {
        Text.PrintNow('LOVE6_2', 5000, 1); //"You failed to lead the police far enough away."
        // SCM GOTO → mission_love6_failed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_love6_failed'); // fallback: would break linear control flow
    }

    // SCM GOTO → mission_love6_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love6_passed'); // fallback: would break linear control flow

    // Mission Love 6 failed
}

async function mission_love6_failed() {
    Text.PrintBig('M_FAIL', 5000, 1);
    return;

    // mission Love 6 passed
}

async function mission_love6_passed() {
    $.flag_love_mission6_passed = 1;
    Text.PrintWithNumberBig('M_PASS', 35000, 5000, 1);
    $.player.addScore(35000);
    $.player.clearWantedLevel();
    Stat.RegisterMissionPassed('LOVE6');
    Audio.PlayMissionPassedTune(1);
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT love_mission7_loop
    return;

    // mission cleanup
}

async function mission_cleanup_love6() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_love_mission = 0;

    $.decoy_van_blip.remove();
    Hud.ClearTimer($.survival_time);
    Hud.ClearCounter($.decoy_van_health);

    Game.SetSwatRequired(false /* FALSE */);
    Streaming.MarkModelAsNoLongerNeeded(118 /* CAR_SECURICAR */);
    Streaming.MarkModelAsNoLongerNeeded(116 /* CAR_POLICE */);
    Streaming.MarkModelAsNoLongerNeeded(1 /* PED_COP */);
    Streaming.MarkModelAsNoLongerNeeded(117 /* CAR_ENFORCER */);
    Streaming.MarkModelAsNoLongerNeeded(2 /* PED_SWAT */);

    Mission.Finish();
    return;
}

export async function love6() {
    // MissionBoundary
    // *****************************************************************************************
    // *******************************    Donald Love 6    *************************************
    // *******************************    Swat the SWAT    *************************************
    // *****************************************************************************************
    // *** Ray has tipped off Love that the Liberty PD are going to mount a raid on his pad. ***
    // *** Three SWAT vans are going to approach the contact point from different directions ***
    // *** to trap any one escaping.  The player must take out the SWAT teams.				 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_love6
    await mission_start_love6();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_love6_failed
        await mission_love6_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_love6
    await mission_cleanup_love6();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables For Mission

    // VAR_INT decoy_van swat_1 swat_2 swat_3 swat_4 swat_5 cop_1 cop_2 cop_3
    // VAR_INT ped_swat_1 ped_swat_2 ped_swat_3 ped_swat_4 ped_swat_5 ped_swat_6 ped_swat_7 ped_swat_8
    // VAR_INT ped_cop_1 ped_cop_2 ped_cop_3 ped_cop_4 ped_cop_5 ped_cop_6
    // VAR_INT survival_time decoy_van_blip get_in_van decoy_van_health decoy_van_health2
    // VAR_INT out_of_car_timer_present out_of_car_timer_start out_of_car_timer out_of_car_timer_diff out_of_car_timer_secs

    // ****************************************Mission Start************************************
}
