// Generated from Main/Commercial/asuka1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_asuka1() {
    $.flag_player_on_mission = 1;
    $.flag_player_on_asuka_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    // SCRIPT_NAME asuka1

    $.hours_a1 = 0;
    $.mins_a1 = 0;
    $.time_left_a1 = 0;
    $.mafia_8_flag = 0;
    $.mafia_9_flag = 0;
    $.mafia_10_flag = 0;
    $.mafia_11_flag = 0;
    $.mafia_12_flag = 0;
    $.mafia_13_flag = 0;
    $.frankie_flag = 0;
    $.set_beamer_1_kill_player = 0;
    $.set_beamer_2_kill_player = 0;
    $.set_beamer_3_kill_player = 0;
    $.beamer1_health = 0;
    $.beamer2_health = 0;
    $.beamer3_health = 0;
    $.garage_door_close = 0;
    $.timera_reset_flag_a1 = 0;
    $.timerb_reset_flag_a1 = 0;
    $.timerc_reset_flag_a1 = 0;
    $.timerc_started_a1 = 0;
    $.timerc_current_a1 = 0;
    $.timerc_a1 = 0;
    $.door_crash_flag = 0;
    $.spotted_print = 0;
    $.frankies_ride = 0;
    $.beamer_1_dead_flag = 0;
    $.beamer_2_dead_flag = 0;
    $.beamer_3_dead_flag = 0;
    $.enter_car_flag = 0;
    $.fuckers_car = -1;
    $.frankie_exists_flag = 0;
    $.mafia_5_kill_player_flag = 0;
    $.mafia_7_kill_player_flag = 0;
    $.mafia_8_kill_player_flag = 0;
    $.mafia_9_kill_player_flag = 0;
    $.mafia_10_kill_player_flag = 0;
    $.mafia_11_kill_player_flag = 0;
    $.mafia_12_kill_player_flag = 0;
    $.mafia_13_kill_player_flag = 0;
    $.mafia_15_kill_player_flag = 0;
    $.timerx_reset_flag = 0;
    $.timery_reset_flag = 0;
    $.timerz_reset_flag = 0;

    $.beamer1_stuck_x = 0.0;
    $.beamer1_stuck_y = 0.0;
    $.beamer1_stuck_z = 0.0;
    $.beamer2_stuck_x = 0.0;
    $.beamer2_stuck_y = 0.0;
    $.beamer2_stuck_z = 0.0;
    $.beamer3_stuck_x = 0.0;
    $.beamer3_stuck_y = 0.0;
    $.beamer3_stuck_z = 0.0;
    {
        // ****************************************START OF CUTSCENE********************************

        /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_asuka1_failed
  ENDIF

  SWITCH_STREAMING OFF

  PRINT_BIG AM1 15000 2
  */

        Streaming.LoadSpecialCharacter(1, 'asuka');
        Streaming.LoadSpecialCharacter(2, 'maria');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'ASUKAH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'MARIAH');
        Streaming.RequestModel(2216 /* condo_ivy */);
        Streaming.RequestModel(2215 /* kmricndo01 */);

        /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasSpecialCharacterLoaded(2) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */)
        ) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(2216 /* condo_ivy */) || !Streaming.HasModelLoaded(2215 /* kmricndo01 */)) {
            await asyncWait(0);
        }

        Cutscene.Load('A1_SS0');

        Cutscene.SetOffset(523.102, -636.96, 15.616);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_asuka = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_asuka.setAnim('asuka');

        $.cs_maria = CutsceneObject.Create(27 /* PED_SPECIAL2 */);
        $.cs_maria.setAnim('maria');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* cut_obj1 */);
        $.cs_playerhead.setAnim('player');

        $.cs_asukahead = CutsceneHead.Create($.cs_asuka, 186 /* cut_obj2 */);
        $.cs_asukahead.setAnim('asuka');

        $.cs_mariahead = CutsceneHead.Create($.cs_maria, 187 /* cut_obj3 */);
        $.cs_mariahead.setAnim('maria');

        World.ClearArea(523.6, -639.4, 16.6, 1.0, true /* TRUE */);
        $.player.setCoordinates(523.6, -639.4, 16.0);

        $.player.setHeading(180.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Cutscene.Start();

        World.SwitchRubbish(false /* OFF */);
        //SWITCH_STREAMING OFF
        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 5353) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_A', 15000, 1);

        while ($.cs_time < 9624) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_B', 15000, 1);

        while ($.cs_time < 13409) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_C', 15000, 1);

        while ($.cs_time < 17788) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_D', 15000, 1);

        while ($.cs_time < 20113) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_E', 15000, 1);

        while ($.cs_time < 25303) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        const _res1 = Clock.GetTimeOfDay();
        $.hours_a1 = _res1.hours;
        $.mins_a1 = _res1.minutes;

        $.hours_a1 = $.hours_a1 + 3;
        if ($.hours_a1 > 23) {
            $.hours_a1 = $.hours_a1 - 24;
        }

        $.mins_a1 = 30;

        if ($.hours_a1 > 9) {
            Text.PrintWith2NumbersNow('AM1_F', $.hours_a1, $.mins_a1, 15000, 1); // "Salvatore Leon will be leaving Luigi's at about ~1~:~1~."
        } else {
            Text.PrintWith2NumbersNow('AM1_K', $.hours_a1, $.mins_a1, 15000, 1); // "Salvatore Leon will be leaving Luigi's at about 0~1~:~1~."
        }

        while ($.cs_time < 29629) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_G', 15000, 1);

        while ($.cs_time < 32657) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_H', 15000, 1);

        while ($.cs_time < 37360) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_I', 15000, 1);

        while ($.cs_time < 40118) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('AM1_J', 15000, 1);

        while ($.cs_time < 41666) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Streaming.Switch(true /* ON */);
        World.SwitchRubbish(true /* ON */);

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();

        Camera.DoFade(0, 0 /* FADE_OUT */);

        Camera.SetInFrontOfPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Streaming.UnloadSpecialCharacter(1);
        Streaming.UnloadSpecialCharacter(2);
        Streaming.MarkModelAsNoLongerNeeded(2216 /* condo_ivy */);
        Streaming.MarkModelAsNoLongerNeeded(2215 /* kmricndo01 */);
        Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* cut_obj2 */);
        Streaming.MarkModelAsNoLongerNeeded(187 /* cut_obj3 */);

        // ******************************************END OF CUTSCENE********************************

        Streaming.LoadSpecialCharacter(1, 'frankie');
        Streaming.RequestModel(10 /* PED_GANG_MAFIA_A */);
        Streaming.RequestModel(11 /* PED_GANG_MAFIA_B */);
        Streaming.RequestModel(134 /* CAR_MAFIA */);

        while (
            !Streaming.HasModelLoaded(134 /* CAR_MAFIA */) ||
            !Streaming.HasModelLoaded(10 /* PED_GANG_MAFIA_A */) ||
            !Streaming.HasModelLoaded(11 /* PED_GANG_MAFIA_B */) ||
            !Streaming.HasSpecialCharacterLoaded(1)
        ) {
            await asyncWait(0);
        }

        $.create_char_in_club_x = 894.0;
        $.create_char_in_club_y = -417.0;
        $.create_char_in_club_z = 15.3;

        $.mission_blip_am1 = Blip.AddForCoord($.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);

        $.bottom_of_steps_x = 885.53;
        $.bottom_of_steps_y = -417.0;

        $.back_of_alley_x = 886.03;
        $.back_of_alley_y = -425.77;

        $.street_x = 902.72;
        $.street_y = -425.65;

        $.mafia_10_x = 902.72 - 1.0;
        $.mafia_10_y = -425.65 + 3.0;

        $.mafia_11_x = 902.72 + 1.0;
        $.mafia_11_y = -425.65 + 3.0;

        $.mafia_12_x = 902.72 + 1.0;
        $.mafia_12_y = -425.65 - 2.0;

        $.mafia_13_x = 902.72 - 1.0;
        $.mafia_13_y = -425.65 - 2.0;

        $.mafia_8_flag = 0;
        $.mafia_9_flag = 0;
        $.mafia_10_flag = 0;
        $.mafia_11_flag = 0;
        $.mafia_12_flag = 0;
        $.mafia_13_flag = 0;
        $.kill_player_now_flag = 0;

        Text.PrintNow('AM1_5', 5000, 1); //"Get to the Red Light District and wait for Salvatore to leave the club."
        if ($.hours_a1 > 9) {
            Text.PrintWith2NumbersSoon('AM1_8', $.hours_a1, $.mins_a1, 5000, 1); //"Salvatore will be leaving at about ~1~:~1~"
        } else {
            Text.PrintWith2NumbersSoon('AM1_10', $.hours_a1, $.mins_a1, 5000, 1); //"Salvatore will be leaving at about 0~1~:~1~"
        }

        //IF ammu2_blip_added = 0
        //	ADD_SPRITE_BLIP_FOR_COORD 345.5 -713.5 26.1 RADAR_SPRITE_WEAPON ammu_nation2
        //	ADD_SPRITE_BLIP_FOR_COORD 379.0 -493.8 25.2 RADAR_SPRITE_SPRAY sprayshop2_blip
        //	ammu2_blip_added = 1
        //ENDIF

        $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);

        while (!($.time_left_a1 < 1)) {
            await asyncWait(0);
            $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
            if ($.garage_door_close == 0) {
                if ($.player.isInZone('REDLIGH')) {
                    Text.PrintNow('AM1_6', 5000, 1); //"Don't hang around Luigi's club, or the Mafia will spot you"
                    $.mission_blip_am1.remove();
                    $.garage_door_close = 1;
                }
            }
        }

        if ($.garage_door_close == 0) {
            if ($.player.isInZone('REDLIGH')) {
                Text.PrintNow('AM1_6', 5000, 1); //"Don't hang around Luigi's club, or the Mafia will spot you"
                $.mission_blip_am1.remove();
                $.garage_door_close = 1;
            }
        }
        $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);

        while (!Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            await asyncWait(0);
            $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
            if ($.time_left_a1 < 1) {
                Text.PrintNow('AM1_3', 5000, 1); //"You've missed Salvatore!"
                // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka1_failed'); // fallback: would break linear control flow
            }
        }

        Path.SwitchRoadsOff(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
        $.frankie_garage.changeType(1 /* GARAGE_MISSION */);

        if (!$.player.locateAnyMeans2D(908.3, -86.0, 100.0, 100.0, false)) {
            $.working_x_a1 = 908.3;
            $.working_y_a1 = -86.0;
            $.working_z_a1 = 7.0;
            $.beamer1_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer_heading = $.beamer1_a1.getHeading();
            $.beamer_heading = $.beamer_heading - 180.0;
            $.beamer1_a1.setHeading($.beamer_heading);
            $.beamer1_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer1_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer1_a1.setUpsidedownNotDamaged(true /* TRUE */);
            $.working_y_a1 = $.working_y_a1 + 11.0;
            $.beamer2_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer2_a1.setHeading($.beamer_heading);
            $.beamer2_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer2_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer2_a1.setUpsidedownNotDamaged(true /* TRUE */);
            $.working_y_a1 = $.working_y_a1 + 11.0;
            $.beamer3_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer3_a1.setHeading($.beamer_heading);
            $.beamer3_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer3_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer3_a1.setUpsidedownNotDamaged(true /* TRUE */);
        } else {
            $.working_x_a1 = 1123.67;
            $.working_y_a1 = -59.3;
            $.working_z_a1 = 7.0;
            $.beamer3_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer_heading = $.beamer3_a1.getHeading();
            $.beamer_heading = $.beamer_heading - 180.0;
            $.beamer3_a1.setHeading($.beamer_heading);
            $.beamer3_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer3_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer3_a1.setUpsidedownNotDamaged(true /* TRUE */);
            $.working_y_a1 = $.working_y_a1 - 11.0;
            $.beamer2_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer2_a1.setHeading($.beamer_heading);
            $.beamer2_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer2_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer2_a1.setUpsidedownNotDamaged(true /* TRUE */);
            $.working_y_a1 = $.working_y_a1 - 11.0;
            $.beamer1_a1 = Car.Create(134 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
            $.beamer1_a1.setHeading($.beamer_heading);
            $.beamer1_a1.lockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
            $.beamer1_a1.setOnlyDamagedByPlayer(true /* TRUE */);
            $.beamer1_a1.setUpsidedownNotDamaged(true /* TRUE */);
        }

        $.mafia_1X = Char.CreateInsideCar($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */);
        $.mafia_2X = Char.CreateInsideCar($.beamer2_a1, 7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */);
        $.mafia_3X = Char.CreateInsideCar($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */);
        $.mafia_4X = Char.CreateAsPassenger($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 0);
        $.mafia_5X = Char.CreateAsPassenger($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, 1);
        $.mafia_6X = Char.CreateAsPassenger($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, 0);
        $.mafia_7X = Char.CreateAsPassenger($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1);
        $.mafia_14X = Char.CreateAsPassenger($.beamer2_a1, 7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, 0);
        $.mafia_1X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_2X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_3X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_4X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_5X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_6X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_7X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_14X.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.mafia_1X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_2X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_3X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_4X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_5X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_6X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_7X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_14X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_1X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_2X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_3X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_4X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_5X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_6X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_7X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_14X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);

        $.working_x_a1 = 908.0;
        $.working_y_a1 = -435.5;
        $.working_z_a1 = 14.56;
        $.beamer1_a1.gotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);

        $.working_y_a1 = $.working_y_a1 + 7.0;
        $.beamer2_a1.gotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);

        $.working_y_a1 = $.working_y_a1 + 7.0;
        $.beamer3_a1.gotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);

        $.beamer1_a1.setDrivingStyle(2);
        $.beamer2_a1.setDrivingStyle(2);
        $.beamer3_a1.setDrivingStyle(2);
        $.beamer1_a1.setCruiseSpeed(15.0);
        $.beamer2_a1.setCruiseSpeed(14.0);
        $.beamer3_a1.setCruiseSpeed(13.0);

        if (ScriptObject.DoesExist($.backdoor)) {
            $.door_position_a1 = $.backdoor.getHeading();
        }

        Audio.LoadMissionAudio('a1_a' as any);

        if (!$.player.isInArea2D(873.0, -443.0, 927.0, -378.0, false)) {
            $.player.setControl(false /* OFF */);
            Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
            Game.SetAllCarsCanBeDamaged(false /* FALSE */);
            if ($.player.isInAnyCar()) {
                $.player.applyBrakesToCar(true /* ON */);
            }
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(0, 0 /* FADE_OUT */);
            await asyncWait(0);
            //	DO_FADE 250 FADE_OUT
            //	WHILE GET_FADING_STATUS
            //		WAIT 0
            //	ENDWHILE
            Hud.SwitchWidescreen(true /* ON */);
            World.ClearArea(905.759, -419.944, 8.0, 8.0, false /* FALSE */);
            Streaming.RequestModel(257 /* indhibuild3 */);
            Streaming.RequestModel(256 /* luigiclubout */);
            Streaming.RequestModel(243 /* luigiineerclub */);
            Streaming.RequestModel(620 /* ind_customroad016 */);
            Streaming.LoadAllModelsNow();
            Streaming.Switch(false /* OFF */);
            Camera.SetFixedPosition(881.36, -425.198, 19.727, 0.0, 0.0, 0.0);
            Camera.PointAtPoint(882.109, -424.825, 19.181, 2 /* JUMP_CUT */);
            TIMERB = 0;
            $.beamer1_health = 1;
        }

        TIMERA = 0;
        $.skip_flag = 0;

        while ($.mafia_8_flag < 3 || $.mafia_9_flag < 3 || $.mafia_10_flag < 3 || $.mafia_11_flag < 3 || $.mafia_12_flag < 3 || $.mafia_13_flag < 3) {
            await asyncWait(0);
            if ($.beamer1_health == 1) {
                if (TIMERB > 30000) {
                    Hud.SwitchWidescreen(false /* OFF */);
                    $.player.setControl(true /* ON */);
                    Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
                    Game.SetAllCarsCanBeDamaged(true /* TRUE */);
                    Streaming.Switch(true /* ON */);
                    if ($.player.isInAnyCar()) {
                        $.player.applyBrakesToCar(false /* OFF */);
                    }
                    Camera.RestoreJumpcut();
                    Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */);
                    Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */);
                    Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */);
                    Streaming.MarkModelAsNoLongerNeeded(620 /* ind_customroad016 */);
                    Camera.DoFade(250, 1 /* FADE_IN */);
                    $.skip_flag = 2;
                    $.beamer1_health = 0;
                }
                if ($.skip_flag == 0) {
                    if (!Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) && !Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
                        $.skip_flag = 1;
                    }
                }
                if ($.skip_flag == 1) {
                    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
                        Hud.SwitchWidescreen(false /* OFF */);
                        $.player.setControl(true /* ON */);
                        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
                        Game.SetAllCarsCanBeDamaged(true /* TRUE */);
                        Streaming.Switch(true /* ON */);
                        if ($.player.isInAnyCar()) {
                            $.player.applyBrakesToCar(false /* OFF */);
                        }
                        Camera.RestoreJumpcut();
                        Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */);
                        Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */);
                        Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */);
                        Streaming.MarkModelAsNoLongerNeeded(620 /* ind_customroad016 */);
                        Camera.DoFade(250, 1 /* FADE_IN */);
                        $.beamer1_health = 0;
                    }
                }
            }
            if (!($.time_left_a1 == 0)) {
                $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
            }
            if ($.garage_door_close == 0) {
                if ($.player.isInZone('REDLIGH')) {
                    Text.PrintNow('AM1_6', 5000, 1); //"Don't hang around Luigi's club, or the Mafia will spot you"
                    $.mission_blip_am1.remove();
                    $.garage_door_close = 1;
                }
            }

            //____CREATE MAFIA 8 TO GUARD THE STEPS____//

            if (!($.door_position_a1 == 90.0)) {
                $.diff_heading_door = 90.0 - $.door_position_a1;
                if ($.diff_heading_door < 10.0) {
                    $.door_position_a1 = 90.0;
                } else {
                    $.door_position_a1 += 10.0;
                }
                $.backdoor.setHeading($.door_position_a1);
                $.door_crash_flag = 1;
            }
            if ($.mafia_8_flag == 0) {
                $.mafia_8X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                //SET_CHAR_THREAT_SEARCH mafia_8X THREAT_PLAYER1
                $.mafia_8X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                //SET_CHAR_HEED_THREATS mafia_8X TRUE
                $.mafia_8X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                $.mafia_8X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                $.mafia_8_flag = 1;
            } else {
                if (Char.IsDead($.mafia_8X)) {
                    $.kill_player_now_flag = 1;
                    $.mafia_8_flag = 4;
                }
            }
            if ($.mafia_8_flag == 1) {
                if ($.mafia_8X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_8X.setObjGotoCoordOnFoot(887.6, -418.5);
                    $.mafia_8_flag = 2;
                }
            }
            if ($.mafia_8_flag == 2) {
                if ($.mafia_8X.locateStoppedOnFoot2D(887.6, -418.5, 0.5, 0.5, false)) {
                    $.mafia_8X.setHeading(90.0);
                    $.mafia_8X.setIdle();
                    $.mafia_8_flag = 3;
                }
            }
            if ($.mafia_8_flag > 0 && $.mafia_8_flag < 4) {
                if ($.mafia_8X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //____CREATE MAFIA 9 TO GUARD THE STEPS____//

            if ($.mafia_8_flag > 0 && $.mafia_9_flag == 0) {
                if (Char.IsDead($.mafia_8X)) {
                    $.mafia_9X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                    if ($.beamer1_health == 1) {
                        Camera.DoFade(400, 1 /* FADE_IN */);
                    }
                    //SET_CHAR_THREAT_SEARCH mafia_9X THREAT_PLAYER1
                    $.mafia_9X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    //SET_CHAR_HEED_THREATS mafia_9X TRUE
                    $.mafia_9X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                    $.mafia_9X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_9_flag = 1;
                } else {
                    if (!$.mafia_8X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, false)) {
                        $.mafia_9X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                        if ($.beamer1_health == 1) {
                            Camera.DoFade(400, 1 /* FADE_IN */);
                        }
                        //SET_CHAR_THREAT_SEARCH mafia_9X THREAT_PLAYER1
                        $.mafia_9X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        //SET_CHAR_HEED_THREATS mafia_9X TRUE
                        $.mafia_9X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.mafia_9X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.mafia_9_flag = 1;
                    }
                }
            } else {
                if ($.mafia_9_flag > 0) {
                    if (Char.IsDead($.mafia_9X)) {
                        $.kill_player_now_flag = 1;
                        $.mafia_9_flag = 4;
                    }
                }
            }

            if ($.mafia_9_flag == 1) {
                if ($.mafia_9X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_9X.setObjGotoCoordOnFoot(887.6, -415.3);
                    $.mafia_9_flag = 2;
                }
            }
            if ($.mafia_9_flag == 2) {
                if ($.mafia_9X.locateStoppedOnFoot2D(887.6, -415.3, 0.5, 0.5, false)) {
                    $.mafia_9X.setHeading(90.0);
                    $.mafia_9X.setIdle();
                    $.mafia_9_flag = 3;
                }
            }
            if ($.mafia_9_flag > 0 && $.mafia_9_flag < 4) {
                if ($.mafia_9X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //___CREATE MAFIA 10 TO GUARD THE ALLEY____//

            if ($.mafia_9_flag > 0 && $.mafia_10_flag == 0) {
                if (Char.IsDead($.mafia_9X)) {
                    $.mafia_10X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                    $.mafia_10X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.mafia_10X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    //SET_CHAR_HEED_THREATS mafia_10X TRUE
                    $.mafia_10X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                    $.mafia_10X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_10_flag = 1;
                } else {
                    if (!$.mafia_9X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, false)) {
                        $.mafia_10X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                        $.mafia_10X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.mafia_10X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        //SET_CHAR_HEED_THREATS mafia_10X TRUE
                        $.mafia_10X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.mafia_10X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.mafia_10_flag = 1;
                    }
                }
            } else {
                if ($.mafia_10_flag > 0) {
                    if (Char.IsDead($.mafia_10X)) {
                        $.kill_player_now_flag = 1;
                        $.mafia_10_flag = 4;
                    }
                }
            }
            if ($.mafia_10_flag == 1) {
                if ($.mafia_10X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_10X.setObjGotoCoordOnFoot($.mafia_10_x, $.mafia_10_y);
                    $.mafia_10_flag = 2;
                }
            }
            if ($.mafia_10_flag == 2) {
                if ($.mafia_10X.locateStoppedOnFoot2D($.mafia_10_x, $.mafia_10_y, 0.5, 0.5, false)) {
                    $.mafia_10X.setHeading(0.0);
                    $.mafia_10X.setIdle();
                    $.mafia_10_flag = 3;
                }
            }
            if ($.mafia_10_flag > 0 && $.mafia_10_flag < 4) {
                if ($.mafia_10X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //___CREATE MAFIA 11 TO GUARD THE ALLEY____//

            if ($.mafia_10_flag > 0 && $.mafia_11_flag == 0) {
                if (Char.IsDead($.mafia_10X)) {
                    $.mafia_11X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                    $.mafia_11X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.mafia_11X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    //SET_CHAR_HEED_THREATS mafia_11X TRUE
                    $.mafia_11X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                    $.mafia_11X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_11_flag = 1;
                } else {
                    if (!$.mafia_10X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, false)) {
                        $.mafia_11X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                        $.mafia_11X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.mafia_11X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        //SET_CHAR_HEED_THREATS mafia_11X TRUE
                        $.mafia_11X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.mafia_11X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.mafia_11_flag = 1;
                    }
                }
            } else {
                if ($.mafia_11_flag > 0) {
                    if (Char.IsDead($.mafia_11X)) {
                        $.kill_player_now_flag = 1;
                        $.mafia_11_flag = 4;
                    }
                }
            }

            if ($.mafia_11_flag == 1) {
                if ($.mafia_11X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_11X.setObjGotoCoordOnFoot($.mafia_11_x, $.mafia_11_y);
                    $.mafia_11_flag = 2;
                }
            }
            if ($.mafia_11_flag == 2) {
                if ($.mafia_11X.locateStoppedOnFoot2D($.mafia_11_x, $.mafia_11_y, 0.5, 0.5, false)) {
                    $.mafia_11X.setHeading(0.0);
                    $.mafia_11X.setIdle();
                    $.mafia_11_flag = 3;
                }
            }
            if ($.mafia_11_flag > 0 && $.mafia_11_flag < 4) {
                if ($.mafia_11X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //___CREATE MAFIA 12 TO GUARD THE ALLEY____//

            if ($.mafia_11_flag > 0 && $.mafia_12_flag == 0) {
                if (Char.IsDead($.mafia_11X)) {
                    $.mafia_12X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                    $.mafia_12X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.mafia_12X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    //SET_CHAR_HEED_THREATS mafia_12X TRUE
                    $.mafia_12X.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                    $.mafia_12X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_12_flag = 1;
                } else {
                    if (!$.mafia_11X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, false)) {
                        $.mafia_12X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                        $.mafia_12X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.mafia_12X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        //SET_CHAR_HEED_THREATS mafia_12X TRUE
                        $.mafia_12X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.mafia_12X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.mafia_12_flag = 1;
                    }
                }
            } else {
                if ($.mafia_12_flag > 0) {
                    if (Char.IsDead($.mafia_12X)) {
                        $.kill_player_now_flag = 1;
                        $.mafia_12_flag = 4;
                    }
                }
            }
            if ($.mafia_12_flag == 1) {
                if ($.mafia_12X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_12X.setObjGotoCoordOnFoot($.mafia_12_x, $.mafia_12_y);
                    $.mafia_12_flag = 2;
                }
            }
            if ($.mafia_12_flag == 2) {
                if ($.mafia_12X.locateStoppedOnFoot2D($.mafia_12_x, $.mafia_12_y, 0.5, 0.5, false)) {
                    $.mafia_12X.setHeading(180.0);
                    $.mafia_12X.setIdle();
                    $.mafia_12_flag = 3;
                }
            }
            if ($.mafia_12_flag > 0 && $.mafia_12_flag < 4) {
                if ($.mafia_12X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //___CREATE MAFIA 13 TO GUARD THE ALLEY____//

            if ($.mafia_12_flag > 0 && $.mafia_13_flag == 0) {
                if (Char.IsDead($.mafia_12X)) {
                    $.mafia_13X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                    $.mafia_13X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.mafia_13X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    //SET_CHAR_HEED_THREATS mafia_13X TRUE
                    $.mafia_13X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                    $.mafia_13X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_13_flag = 1;
                } else {
                    if (!$.mafia_12X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, false)) {
                        $.mafia_13X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
                        $.mafia_13X.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.mafia_13X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        //SET_CHAR_HEED_THREATS mafia_13X TRUE
                        $.mafia_13X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.mafia_13X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.mafia_13_flag = 1;
                    }
                }
            } else {
                if ($.mafia_13_flag > 0) {
                    if (Char.IsDead($.mafia_13X)) {
                        $.kill_player_now_flag = 1;
                        $.mafia_13_flag = 4;
                    }
                }
            }
            if ($.mafia_13_flag == 1) {
                if ($.mafia_13X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_13X.setObjGotoCoordOnFoot($.mafia_13_x, $.mafia_13_y);
                    if ($.beamer1_health == 1) {
                        Hud.SwitchWidescreen(false /* OFF */);
                        $.player.setControl(true /* ON */);
                        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
                        Game.SetAllCarsCanBeDamaged(true /* TRUE */);
                        Streaming.Switch(true /* ON */);
                        if ($.player.isInAnyCar()) {
                            $.player.applyBrakesToCar(false /* OFF */);
                        }
                        Camera.RestoreJumpcut();
                        Streaming.MarkModelAsNoLongerNeeded(257 /* indhibuild3 */);
                        Streaming.MarkModelAsNoLongerNeeded(256 /* luigiclubout */);
                        Streaming.MarkModelAsNoLongerNeeded(243 /* luigiineerclub */);
                        Streaming.MarkModelAsNoLongerNeeded(620 /* ind_customroad016 */);
                        $.beamer1_health = 0;
                    }
                    $.mafia_13_flag = 2;
                }
            }
            if ($.mafia_13_flag == 2) {
                if ($.mafia_13X.locateStoppedOnFoot2D($.mafia_13_x, $.mafia_13_y, 0.5, 0.5, false)) {
                    $.mafia_13X.setHeading(180.0);
                    $.mafia_13X.setIdle();
                    $.mafia_13_flag = 3;
                }
            }
            if ($.mafia_13_flag > 0 && $.mafia_13_flag < 4) {
                if ($.mafia_13X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }

            //________CHECK IF THERE IS A CAR AT THE END OF THE ALLEY IF THERE IS ONE OF THE MAFIA WILL MOVE IT_______//

            if ($.fuckers_car < 1) {
                $.fuckers_car = World.GetRandomCarOfTypeInArea(900.467, -431.884, 905.759, -419.944, -1);
            }

            if (Car.IsDead($.fuckers_car)) {
                //		IF NOT fuckers_car = -1
                //			IF NOT enter_car_flag = 0
                $.fuckers_car.markAsNoLongerNeeded();
                $.fuckers_car = -1;
                $.enter_car_flag = 0;
                //			ENDIF
                //		ENDIF
            }
            if ($.enter_car_flag < 5) {
                if (!($.fuckers_car == -1)) {
                    if ($.fuckers_car == $.beamer1_a1) {
                        if (!Car.IsDead($.beamer1_a1)) {
                            $.beamer1_a1.gotoCoordinatesAccurate(904.9, -434.1, 15.0);
                        } else {
                            $.beamer1_a1.delete();
                        }
                    } else {
                        if ($.fuckers_car == $.beamer2_a1) {
                            if (!Car.IsDead($.beamer2_a1)) {
                                $.beamer2_a1.gotoCoordinatesAccurate(904.9, -434.1, 15.0);
                            } else {
                                $.beamer2_a1.delete();
                            }
                        } else {
                            if ($.fuckers_car == $.beamer3_a1) {
                                if (!Car.IsDead($.beamer3_a1)) {
                                    $.beamer3_a1.gotoCoordinatesAccurate(904.9, -434.1, 15.0);
                                } else {
                                    $.beamer3_a1.delete();
                                }
                            } else {
                                if ($.mafia_10_flag < 4) {
                                    if ($.mafia_10_flag > 1) {
                                        if ($.mafia_10X.locateOnFootCar2D($.fuckers_car, 4.0, 4.0, false)) {
                                            $.mafia_10X.setObjEnterCarAsDriver($.fuckers_car);
                                            TIMERA = 0;
                                            $.enter_car_flag = 10;
                                        }
                                    }
                                } else {
                                    if ($.mafia_11_flag < 4) {
                                        if ($.mafia_11_flag > 1) {
                                            if ($.mafia_11X.locateOnFootCar2D($.fuckers_car, 4.0, 4.0, false)) {
                                                $.mafia_11X.setObjEnterCarAsDriver($.fuckers_car);
                                                TIMERA = 0;
                                                $.enter_car_flag = 11;
                                            }
                                        }
                                    } else {
                                        if ($.mafia_12_flag < 4) {
                                            if ($.mafia_12_flag > 1) {
                                                if ($.mafia_12X.locateOnFootCar2D($.fuckers_car, 4.0, 4.0, false)) {
                                                    $.mafia_12X.setObjEnterCarAsDriver($.fuckers_car);
                                                    TIMERA = 0;
                                                    $.enter_car_flag = 12;
                                                }
                                            }
                                        } else {
                                            if ($.mafia_13_flag < 4) {
                                                if ($.mafia_13_flag > 1) {
                                                    if ($.mafia_13X.locateOnFootCar2D($.fuckers_car, 4.0, 4.0, false)) {
                                                        $.mafia_13X.setObjEnterCarAsDriver($.fuckers_car);
                                                        TIMERA = 0;
                                                        $.enter_car_flag = 13;
                                                    }
                                                }
                                            } else {
                                                if (Car.IsDead($.fuckers_car)) {
                                                    $.fuckers_car.markAsNoLongerNeeded();
                                                    $.kill_player_now_flag = 1;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if ($.enter_car_flag == 10) {
                if ($.mafia_10X.isInCar($.fuckers_car)) {
                    // SCM GOSUB move_fuckers_car
                    await move_fuckers_car();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.mafia_10_flag = 4;
                    $.enter_car_flag = 5;
                }
            }
            if ($.enter_car_flag == 11) {
                if ($.mafia_11X.isInCar($.fuckers_car)) {
                    // SCM GOSUB move_fuckers_car
                    await move_fuckers_car();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.mafia_11_flag = 4;
                    $.enter_car_flag = 5;
                }
            }
            if ($.enter_car_flag == 12) {
                if ($.mafia_12X.isInCar($.fuckers_car)) {
                    // SCM GOSUB move_fuckers_car
                    await move_fuckers_car();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.mafia_12_flag = 4;
                    $.enter_car_flag = 5;
                }
            }
            if ($.enter_car_flag == 13) {
                if ($.mafia_13X.isInCar($.fuckers_car)) {
                    // SCM GOSUB move_fuckers_car
                    await move_fuckers_car();
                    // fallback if label was not emitted as async function: no-op continues linearly
                    $.mafia_13_flag = 4;
                    $.enter_car_flag = 5;
                }
            }
            if ($.enter_car_flag > 9) {
                if (TIMERA > 20000) {
                    if (!Car.IsDead($.fuckers_car)) {
                        if (!$.player.isInCar($.fuckers_car)) {
                            $.fuckers_car.markAsNoLongerNeeded();
                            $.enter_car_flag = 0;
                            $.fuckers_car = -1;
                        } else {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            }
            if (TIMERA > 180000) {
                $.frankie_exists_flag = 1;
            }
            //________________________________________________________________________________________________________//

            if ($.kill_player_now_flag == 1) {
                // SCM GOSUB kill_player_now_script
                await kill_player_now_script();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if (!($.frankie_exists_flag == 0)) {
                // SCM GOTO → create_salvatore (not lowered; manual jump required)
                throw new Error('unresolved GOTO create_salvatore'); // fallback: would break linear control flow
            }
        }

        if ($.frankie_exists_flag == 0) {
            if ($.player.isInArea2D(878.79, -427.4, 890.77, -403.89, false) || $.player.isInArea2D(878.79, -433.86, 890.77, -427.4, false)) {
                $.frankie_exists_flag = 2;
            } else {
                $.frankie_exists_flag = 1;
            }
        }
    }

    async function create_salvatore() {
        if ($.frankie_exists_flag == 1) {
            $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, 26 /* PED_SPECIAL1 */, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
            if ($.kill_player_now_flag == 0) {
                $.frankie.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
            } else {
                $.frankie.setObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
            }
        }

        if ($.frankie_exists_flag == 2) {
            $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, 26 /* PED_SPECIAL1 */, 900.2028, -416.9139, 14.0); // OUT FRONT OF CLUB
            $.frankie.setObjRunToCoord($.street_x, $.street_y);
            $.frankie_flag = 5;
        }

        if ($.frankie_exists_flag == 3) {
            $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, 26 /* PED_SPECIAL1 */, 884.6421, -422.9535, 14.0); //CLOSER TO END OF ALLEY
            $.frankie.setObjRunToCoord($.street_x, $.street_y);
            $.frankie_flag = 5;
        }

        $.frankie.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.frankie.setPersonality(14 /* PEDSTAT_GEEK_GUY */);
        $.frankie.setOnlyDamagedByPlayer(true /* TRUE */);

        $.mission_blip_am1.remove();
        $.mission_blip_am1 = Blip.AddForChar($.frankie);
        Text.PrintNow('AM1_1', 5000, 1); //"Salvatore is now leaving Luigi's"

        $.garage_door_close = 0;

        while (!$.frankie.isInAnyCar()) {
            await asyncWait(0);
            if (Char.IsDead($.frankie)) {
                // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka1_passed'); // fallback: would break linear control flow
            }
            if (!($.time_left_a1 == 0)) {
                $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
            }
            if ($.frankie.hasSpottedPlayer($.player)) {
                $.kill_player_now_flag = 1;
            }

            //___IF MAFIA HAVE SPOTTED THE PLAYER, MAKE FRANKIE RUN____//

            if (!Char.IsDead($.mafia_8X)) {
                if ($.mafia_8X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_8_flag = 4;
            }
            if (!Char.IsDead($.mafia_9X)) {
                if ($.mafia_9X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_9_flag = 4;
            }
            if (!Char.IsDead($.mafia_10X)) {
                if ($.mafia_10X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_10_flag = 4;
            }
            if (!Char.IsDead($.mafia_11X)) {
                if ($.mafia_11X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_11_flag = 4;
            }
            if (!Char.IsDead($.mafia_12X)) {
                if ($.mafia_12X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_12_flag = 4;
            }
            if (!Char.IsDead($.mafia_13X)) {
                if ($.mafia_13X.hasSpottedPlayer($.player)) {
                    if (!$.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false)) {
                        if (!$.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
                            $.kill_player_now_flag = 1;
                        }
                    }
                }
            } else {
                $.kill_player_now_flag = 1;
                $.mafia_13_flag = 4;
            }
            if ($.kill_player_now_flag == 1) {
                // SCM GOSUB kill_player_now_script
                await kill_player_now_script();
                // fallback if label was not emitted as async function: no-op continues linearly
            }

            //___GET FRANKIE INTO A CAR, IF ALL CARS ARE DEAD FRANKIE RUNS BACK____//

            if (Car.IsDead($.beamer1_a1)) {
                $.beamer_1_dead_flag = 1;
            }
            if (Car.IsDead($.beamer2_a1)) {
                $.beamer_2_dead_flag = 1;
            }
            if (Car.IsDead($.beamer3_a1)) {
                $.beamer_3_dead_flag = 1;
            }
            if ($.frankie_flag == 0) {
                if ($.frankie.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    if ($.kill_player_now_flag == 0) {
                        $.frankie.setObjGotoCoordOnFoot($.street_x, $.street_y);
                    } else {
                        $.frankie.setObjRunToCoord($.street_x, $.street_y);
                    }
                    $.frankie_flag = 5;
                }
            }
            if ($.frankie_flag == 5) {
                if ($.frankie.locateOnFoot2D($.street_x, $.street_y, 1.0, 1.0, false)) {
                    if ($.beamer_2_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer2_a1, 30.0, 30.0, false)) {
                        $.frankie.setObjEnterCarAsPassenger($.beamer2_a1);
                        $.frankie_flag = 2;
                    } else {
                        if ($.beamer_3_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer3_a1, 30.0, 30.0, false)) {
                            $.frankie.setObjEnterCarAsPassenger($.beamer3_a1);
                            $.frankie_flag = 3;
                        } else {
                            if ($.beamer_1_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer1_a1, 30.0, 30.0, false)) {
                                $.frankie.setObjEnterCarAsPassenger($.beamer1_a1);
                                $.frankie_flag = 1;
                            } else {
                                $.frankie.setObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
                                $.frankie_flag = 4;
                            }
                        }
                    }
                }
            }
            if ($.frankie_flag == 2) {
                if ($.beamer_2_dead_flag == 1) {
                    if ($.beamer_1_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer1_a1, 30.0, 30.0, false)) {
                        $.frankie.setObjEnterCarAsPassenger($.beamer1_a1);
                        $.frankie_flag = 1;
                    } else {
                        if ($.beamer_3_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer3_a1, 30.0, 30.0, false)) {
                            $.frankie.setObjEnterCarAsPassenger($.beamer3_a1);
                            $.frankie_flag = 3;
                        } else {
                            $.frankie.setObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
                            $.frankie_flag = 4;
                        }
                    }
                }
            }
            if ($.frankie_flag == 3) {
                if ($.beamer_3_dead_flag == 1) {
                    if ($.beamer_1_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer1_a1, 30.0, 30.0, false)) {
                        $.frankie.setObjEnterCarAsPassenger($.beamer1_a1);
                        $.frankie_flag = 1;
                    } else {
                        $.frankie.setObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.frankie_flag = 4;
                    }
                }
            }
            if ($.frankie_flag == 1) {
                if ($.beamer_1_dead_flag == 1) {
                    if ($.beamer_3_dead_flag == 0 && $.frankie.locateOnFootCar2D($.beamer3_a1, 30.0, 30.0, false)) {
                        $.frankie.setObjEnterCarAsPassenger($.beamer3_a1);
                        $.frankie_flag = 3;
                    } else {
                        $.frankie.setObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
                        $.frankie_flag = 4;
                    }
                }
            }
            if ($.frankie_flag == 4) {
                if ($.frankie.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.frankie.setObjRunToCoord($.create_char_in_club_x, $.create_char_in_club_y);
                    $.frankie_flag = 6;
                }
            }
            if ($.frankie_flag == 6) {
                if ($.frankie.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 1.0, 1.0, false)) {
                    $.frankie.delete();
                    Text.PrintNow('AM1_9', 5000, 1); //"Salvatore has escaped back into Luigi's Club!"
                    // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka1_failed'); // fallback: would break linear control flow
                }
            }
        }

        if (!Car.IsDead($.beamer1_a1)) {
            if ($.frankie_flag == 1) {
                $.beamer1_a1.gotoCoordinates(1438.0, -183.4, 50.5);
                $.frankie_garage.setTargetCarForMission($.beamer1_a1);
            } else {
                $.beamer1_a1.gotoCoordinates(1423.7, -168.1, 50.2);
            }
            if ($.kill_player_now_flag == 0) {
                $.beamer1_a1.setCruiseSpeed(18.0);
            } else {
                $.beamer1_a1.setCruiseSpeed(43.0);
            }
        }

        if (!Car.IsDead($.beamer2_a1)) {
            if ($.frankie_flag == 2) {
                $.beamer2_a1.gotoCoordinates(1438.0, -183.4, 50.5);
                $.frankie_garage.setTargetCarForMission($.beamer2_a1);
            } else {
                $.beamer2_a1.gotoCoordinates(1418.7, -168.1, 50.2);
            }
            if ($.kill_player_now_flag == 0) {
                $.beamer2_a1.setCruiseSpeed(17.0);
            } else {
                $.beamer2_a1.setCruiseSpeed(42.0);
            }
        }

        if (!Car.IsDead($.beamer3_a1)) {
            if ($.frankie_flag == 3) {
                $.beamer3_a1.gotoCoordinates(1438.0, -183.4, 50.5);
                $.frankie_garage.setTargetCarForMission($.beamer3_a1);
            } else {
                $.beamer3_a1.gotoCoordinates(1418.7, -168.1, 50.2);
            }
            if ($.kill_player_now_flag == 0) {
                $.beamer3_a1.setCruiseSpeed(16.0);
            } else {
                $.beamer3_a1.setCruiseSpeed(41.0);
            }
        }

        Path.SwitchRoadsOn(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
        $.frankie_garage.changeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
        if (!Char.IsDead($.frankie)) {
            $.frankie.addArmor(100);
        }
        $.beamer1_health = 0;
        $.timerb_reset_flag_a1 = 0;
        TIMERA = 0;
        TIMERB = 0;
    }

    async function cars_going_to_frankies() {
        // SCM GOTO → cars_going_to_frankies lowered to endless loop
        while (true) {
            //WHILE NOT IS_CHAR_STOPPED_IN_AREA_IN_CAR_3D frankie 1428.2 -179.2 50.0 1417.4 -186.3 53.0 0
            //WHILE NOT garage_door_close = 1

            await asyncWait(0);

            if (Char.IsDead($.frankie)) {
                // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka1_passed'); // fallback: would break linear control flow
            }

            //_____SEND MAFIA_8X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_8_flag == 4)) {
                if (Char.IsDead($.mafia_8X)) {
                    $.mafia_8_flag = 4;
                }
            }

            if ($.mafia_8_flag == 3) {
                $.mafia_8X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_8X.setHeedThreats(true /* TRUE */);
                $.mafia_8_flag = 5;
            }

            if ($.mafia_8_flag == 5) {
                if ($.mafia_8X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_8X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_8_flag = 6;
                }
            }

            if ($.mafia_8_flag == 6) {
                if ($.mafia_8X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_8X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_8_flag = 7;
                }
            }

            if ($.mafia_8_flag == 7) {
                if ($.mafia_8X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_8X.delete();
                    $.mafia_8_flag = 4;
                }
            }

            //_____SEND MAFIA_9X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_9_flag == 4)) {
                if (Char.IsDead($.mafia_9X)) {
                    $.mafia_9_flag = 4;
                }
            }

            if ($.mafia_9_flag == 3) {
                $.mafia_9X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_9X.setHeedThreats(true /* TRUE */);
                $.mafia_9_flag = 5;
            }

            if ($.mafia_9_flag == 5) {
                if ($.mafia_9X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_9X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_9_flag = 6;
                }
            }

            if ($.mafia_9_flag == 6) {
                if ($.mafia_9X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_9X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_9_flag = 7;
                }
            }

            if ($.mafia_9_flag == 7) {
                if ($.mafia_9X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_9X.delete();
                    $.mafia_9_flag = 4;
                }
            }

            //_____SEND MAFIA_10X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_10_flag == 4)) {
                if (Char.IsDead($.mafia_10X)) {
                    $.mafia_10_flag = 4;
                }
            }

            if ($.mafia_10_flag == 3) {
                $.mafia_10X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_10X.setHeedThreats(true /* TRUE */);
                $.mafia_10_flag = 5;
            }

            if ($.mafia_10_flag == 5) {
                if ($.mafia_10X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_10X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_10_flag = 6;
                }
            }

            if ($.mafia_10_flag == 6) {
                if ($.mafia_10X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_10X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_10_flag = 7;
                }
            }

            if ($.mafia_10_flag == 7) {
                if ($.mafia_10X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_10X.delete();
                    $.mafia_10_flag = 4;
                }
            }

            //_____SEND MAFIA_11X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_11_flag == 4)) {
                if (Char.IsDead($.mafia_11X)) {
                    $.mafia_11_flag = 4;
                }
            }

            if ($.mafia_11_flag == 3) {
                $.mafia_11X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_11X.setHeedThreats(true /* TRUE */);
                $.mafia_11_flag = 5;
            }

            if ($.mafia_11_flag == 5) {
                if ($.mafia_11X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_11X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_11_flag = 6;
                }
            }

            if ($.mafia_11_flag == 6) {
                if ($.mafia_11X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_11X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_11_flag = 7;
                }
            }

            if ($.mafia_11_flag == 7) {
                if ($.mafia_11X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_11X.delete();
                    $.mafia_11_flag = 4;
                }
            }

            //_____SEND MAFIA_12X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_12_flag == 4)) {
                if (Char.IsDead($.mafia_12X)) {
                    $.mafia_12_flag = 4;
                }
            }

            if ($.mafia_12_flag == 3) {
                $.mafia_12X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_12X.setHeedThreats(true /* TRUE */);
                $.mafia_12_flag = 5;
            }

            if ($.mafia_12_flag == 5) {
                if ($.mafia_12X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_12X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_12_flag = 6;
                }
            }

            if ($.mafia_12_flag == 6) {
                if ($.mafia_12X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_12X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_12_flag = 7;
                }
            }

            if ($.mafia_12_flag == 7) {
                if ($.mafia_12X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_12X.delete();
                    $.mafia_12_flag = 4;
                }
            }

            //_____SEND MAFIA_13X BACK INTO THE CLUB THEN DELETE HIM____//

            if (!($.mafia_13_flag == 4)) {
                if (Char.IsDead($.mafia_13X)) {
                    $.mafia_13_flag = 4;
                }
            }

            if ($.mafia_13_flag == 3) {
                $.mafia_13X.setObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
                $.mafia_13X.setHeedThreats(true /* TRUE */);
                $.mafia_13_flag = 5;
            }

            if ($.mafia_13_flag == 5) {
                if ($.mafia_13X.locateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, false)) {
                    $.mafia_13X.setObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
                    $.mafia_13_flag = 6;
                }
            }

            if ($.mafia_13_flag == 6) {
                if ($.mafia_13X.locateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, false)) {
                    $.mafia_13X.setObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
                    $.mafia_13_flag = 7;
                }
            }

            if ($.mafia_13_flag == 7) {
                if ($.mafia_13X.locateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, false)) {
                    $.mafia_13X.delete();
                    $.mafia_13_flag = 4;
                }
            }

            //_____          CARS - IF THEY'RE ATACKED THEY DRIVE FASTER                 _____//
            //_____    IF FRANKIES CAR IS ATTACKED BOTH OTHER CARS ATTACK THE PLAYER     _____//
            //_____IF ONE OF THE OTHER CARS IS DESTROYED THE OTHER WILL ATTACK THE PLAYER_____//

            if (Char.IsDead($.frankie)) {
                // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_asuka1_passed'); // fallback: would break linear control flow
            }

            if ($.frankies_ride == 0) {
                if ($.frankie.locateInCar2D(1371.0, -283.9, 50.0, 50.0, false)) {
                    $.frankies_ride = $.frankie.storeCarIsIn();
                    $.frankies_ride.setCruiseSpeed(20.0);
                    //PRINT_WITH_NUMBER_NOW NUMBER 15 5000 1
                }
            }

            if (!Car.IsDead($.beamer1_a1)) {
                $.beamer1_health = $.beamer1_a1.getHealth();
                if ($.beamer1_health < 1000) {
                    if (!($.frankies_ride == $.beamer1_a1)) {
                        $.beamer1_a1.setCruiseSpeed(51.0);
                    }
                    if (!Car.IsDead($.beamer2_a1)) {
                        if (!($.frankies_ride == $.beamer2_a1)) {
                            $.beamer2_a1.setCruiseSpeed(50.0);
                        }
                    }
                    if (!Car.IsDead($.beamer3_a1)) {
                        if (!($.frankies_ride == $.beamer3_a1)) {
                            $.beamer3_a1.setCruiseSpeed(49.0);
                            $.set_beamer_3_kill_player = 1;
                        }
                    }
                }
            } else {
                if (!Car.IsDead($.beamer3_a1)) {
                    if (!($.frankie_flag == 3)) {
                        $.set_beamer_3_kill_player = 1;
                    } else {
                        if (!Car.IsDead($.beamer2_a1)) {
                            if (!($.frankie_flag == 2)) {
                                $.set_beamer_2_kill_player = 1;
                            }
                        }
                    }
                }
            }

            if (!Car.IsDead($.beamer3_a1)) {
                $.beamer3_health = $.beamer3_a1.getHealth();
                if ($.beamer3_health < 1000) {
                    if (!($.frankies_ride == $.beamer3_a1)) {
                        $.beamer3_a1.setCruiseSpeed(51.0);
                    }
                    if (!Car.IsDead($.beamer1_a1)) {
                        if (!($.frankies_ride == $.beamer1_a1)) {
                            $.beamer1_a1.setCruiseSpeed(50.0);
                            $.set_beamer_1_kill_player = 1;
                        }
                    }
                    if (!Car.IsDead($.beamer2_a1)) {
                        if (!($.frankies_ride == $.beamer2_a1)) {
                            $.beamer2_a1.setCruiseSpeed(49.0);
                        }
                    }
                }
            } else {
                if (!Car.IsDead($.beamer1_a1)) {
                    if (!($.frankie_flag == 1)) {
                        $.set_beamer_1_kill_player = 1;
                    } else {
                        if (!Car.IsDead($.beamer2_a1)) {
                            if (!($.frankie_flag == 2)) {
                                $.set_beamer_2_kill_player = 1;
                            }
                        }
                    }
                }
            }

            if (!Car.IsDead($.beamer2_a1)) {
                $.beamer2_health = $.beamer2_a1.getHealth();
                if ($.beamer2_health < 1000) {
                    if (!($.frankies_ride == $.beamer2_a1)) {
                        $.beamer2_a1.setCruiseSpeed(51.0);
                    }
                    if (!Car.IsDead($.beamer1_a1)) {
                        if (!($.frankies_ride == $.beamer1_a1)) {
                            $.beamer1_a1.setCruiseSpeed(50.0);
                            $.set_beamer_1_kill_player = 1;
                        }
                    }
                    if (!Car.IsDead($.beamer3_a1)) {
                        if (!($.frankies_ride == $.beamer3_a1)) {
                            $.beamer3_a1.setCruiseSpeed(49.0);
                            $.set_beamer_3_kill_player = 1;
                        }
                    }
                }
            } else {
                if (!Car.IsDead($.beamer1_a1)) {
                    if (!($.frankie_flag == 1)) {
                        $.set_beamer_1_kill_player = 1;
                    } else {
                        if (!Car.IsDead($.beamer3_a1)) {
                            if (!($.frankie_flag == 3)) {
                                $.set_beamer_3_kill_player = 1;
                            }
                        }
                    }
                }
            }

            if ($.set_beamer_1_kill_player == 1) {
                if (!Car.IsDead($.beamer1_a1)) {
                    if (!($.frankies_ride == $.beamer1_a1)) {
                        $.beamer1_a1.setCruiseSpeed(100.0);
                        $.beamer1_a1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    }
                }
            }

            if ($.set_beamer_2_kill_player == 1) {
                if (!Car.IsDead($.beamer2_a1)) {
                    if (!($.frankies_ride == $.beamer2_a1)) {
                        $.beamer2_a1.setCruiseSpeed(100.0);
                        $.beamer2_a1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    }
                }
            }

            if ($.set_beamer_3_kill_player == 1) {
                if (!Car.IsDead($.beamer3_a1)) {
                    if (!($.frankies_ride == $.beamer3_a1)) {
                        $.beamer3_a1.setCruiseSpeed(100.0);
                        $.beamer3_a1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                    }
                }
            }

            if ($.set_beamer_1_kill_player == 1) {
                if (!Char.IsDead($.mafia_1X) || !Car.IsDead($.beamer1_a1)) {
                    if ($.player.isInAnyCar()) {
                        $.players_car_a1 = $.player.storeCarIsIn();
                        $.players_car_a1_speed = $.players_car_a1.getSpeed();
                        $.beamer1_a1_speed = $.beamer1_a1.getSpeed();
                        if ($.beamer1_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
                            if ($.mafia_1X.locateInCarCar2D($.players_car_a1, 10.0, 10.0, false)) {
                                if (!Char.IsDead($.mafia_6X)) {
                                    $.mafia_6X.setObjKillPlayerAnyMeans($.player);
                                    $.mafia_6X.setRunning(true /* TRUE */);
                                }
                                if (!Char.IsDead($.mafia_7X)) {
                                    $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                                    $.mafia_7X.setRunning(true /* TRUE */);
                                }
                            }
                        }
                    }
                }
            }

            if ($.set_beamer_2_kill_player == 1) {
                if (!Char.IsDead($.mafia_2X) || !Car.IsDead($.beamer2_a1)) {
                    if ($.player.isInAnyCar()) {
                        $.players_car_a1 = $.player.storeCarIsIn();
                        $.players_car_a1_speed = $.players_car_a1.getSpeed();
                        $.beamer2_a1_speed = $.beamer2_a1.getSpeed();
                        if ($.beamer2_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
                            if ($.mafia_2X.locateInCarCar2D($.players_car_a1, 10.0, 10.0, false)) {
                                if (!Char.IsDead($.mafia_14X)) {
                                    $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                                    $.mafia_14X.setRunning(true /* TRUE */);
                                }
                            }
                        }
                    }
                }
            }

            if ($.set_beamer_3_kill_player == 1) {
                if (!Char.IsDead($.mafia_3X) || !Car.IsDead($.beamer3_a1)) {
                    if ($.player.isInAnyCar()) {
                        $.players_car_a1 = $.player.storeCarIsIn();
                        $.players_car_a1_speed = $.players_car_a1.getSpeed();
                        $.beamer3_a1_speed = $.beamer3_a1.getSpeed();
                        if ($.beamer3_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
                            if ($.mafia_3X.locateInCarCar2D($.players_car_a1, 10.0, 10.0, false)) {
                                if (!Char.IsDead($.mafia_4X)) {
                                    $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                                    $.mafia_4X.setRunning(true /* TRUE */);
                                }
                                if (!Char.IsDead($.mafia_5X)) {
                                    $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                                    $.mafia_5X.setRunning(true /* TRUE */);
                                }
                            }
                        }
                    }
                }
            }

            //___________IF THE CARS GET STUCK OR UPSIDEDOWN THIS BIT WILL WARP THEM___________//

            if (!Car.IsDead($.beamer1_a1)) {
                if ($.beamer1_a1.isUpsidedown() && $.beamer1_a1.isStopped()) {
                    if (!$.beamer1_a1.isOnScreen()) {
                        const _res2 = $.beamer1_a1.getCoordinates();
                        $.a1_x = _res2.x;
                        $.a1_y = _res2.y;
                        $.a1_z = _res2.z;
                        const _res3 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                        $.a1_x = _res3.nodeX;
                        $.a1_y = _res3.nodeY;
                        $.a1_z = _res3.nodeZ;
                        //				IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 3.0
                        if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                            $.beamer1_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                            $.beamer1_a1.turnToFaceCoord(1438.0, -183.4);
                        } else {
                            if (!Char.IsDead($.mafia_1X)) {
                                $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_7X)) {
                                $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                            }
                            if ($.frankie_flag == 1) {
                                if (!Char.IsDead($.frankie)) {
                                    $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                    $.frankie.setObjKillPlayerAnyMeans($.player);
                                }
                            }
                        }
                    } else {
                        if (!Char.IsDead($.mafia_1X)) {
                            $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                        }
                        if (!Char.IsDead($.mafia_7X)) {
                            $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                        }
                        if ($.frankie_flag == 1) {
                            if (!Char.IsDead($.frankie)) {
                                $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                $.frankie.setObjKillPlayerAnyMeans($.player);
                            }
                        }
                    }
                }
                if ($.timera_reset_flag_a1 == 1) {
                    if (!$.beamer1_a1.isStopped()) {
                        $.timera_reset_flag_a1 = 0;
                    }
                }
                if ($.beamer1_a1.isStopped()) {
                    if ($.timera_reset_flag_a1 == 0) {
                        TIMERA = 0;
                        $.timera_reset_flag_a1 = 1;
                    }
                    if (TIMERA > 4000 && $.timera_reset_flag_a1 == 1) {
                        if (!$.beamer1_a1.isOnScreen()) {
                            const _res4 = $.beamer1_a1.getCoordinates();
                            $.a1_x = _res4.x;
                            $.a1_y = _res4.y;
                            $.a1_z = _res4.z;
                            const _res5 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                            $.a1_x = _res5.nodeX;
                            $.a1_y = _res5.nodeY;
                            $.a1_z = _res5.nodeZ;
                            //					IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                            if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                $.beamer1_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                $.beamer1_a1.turnToFaceCoord(1438.0, -183.4);
                                $.timera_reset_flag_a1 = 0;
                            } else {
                                if (!Char.IsDead($.mafia_1X)) {
                                    $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_7X)) {
                                    $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 1) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        } else {
                            if (!Char.IsDead($.mafia_1X)) {
                                $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_7X)) {
                                $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                            }
                            if ($.frankie_flag == 1) {
                                if (!Char.IsDead($.frankie)) {
                                    $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                    $.frankie.setObjKillPlayerAnyMeans($.player);
                                }
                            }
                        }
                    }
                }
                if ($.beamer1_a1.locate3D($.beamer1_stuck_x, $.beamer1_stuck_y, $.beamer1_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timerx_reset_flag == 0) {
                        $.timerx_started = Clock.GetGameTimer();
                        $.timerx_reset_flag = 1;
                    }
                    if ($.timerx_reset_flag == 1) {
                        $.timerx_current = Clock.GetGameTimer();
                        $.timerx = $.timerx_current - $.timerx_started;
                        if ($.timerx > 5000) {
                            if (!$.beamer1_a1.isOnScreen()) {
                                const _res6 = $.beamer1_a1.getCoordinates();
                                $.a1_x = _res6.x;
                                $.a1_y = _res6.y;
                                $.a1_z = _res6.z;
                                const _res7 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                                $.a1_x = _res7.nodeX;
                                $.a1_y = _res7.nodeY;
                                $.a1_z = _res7.nodeZ;
                                //						IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                                if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                    $.beamer1_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                    $.beamer1_a1.turnToFaceCoord(1438.0, -183.4);
                                    $.timera_reset_flag_a1 = 0;
                                } else {
                                    if (!Char.IsDead($.mafia_1X)) {
                                        $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_7X)) {
                                        $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if ($.frankie_flag == 1) {
                                        if (!Char.IsDead($.frankie)) {
                                            $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                            $.frankie.setObjKillPlayerAnyMeans($.player);
                                        }
                                    }
                                }
                            } else {
                                if (!Char.IsDead($.mafia_1X)) {
                                    $.mafia_1X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_7X)) {
                                    $.mafia_7X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 1) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.beamer1_a1.locate3D($.beamer1_stuck_x, $.beamer1_stuck_y, $.beamer1_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res8 = $.beamer1_a1.getCoordinates();
                    $.beamer1_stuck_x = _res8.x;
                    $.beamer1_stuck_y = _res8.y;
                    $.beamer1_stuck_z = _res8.z;
                    $.timerx_reset_flag = 0;
                }
            }

            if (!Car.IsDead($.beamer2_a1)) {
                if ($.beamer2_a1.isUpsidedown() && $.beamer2_a1.isStopped()) {
                    if (!$.beamer2_a1.isOnScreen()) {
                        const _res9 = $.beamer2_a1.getCoordinates();
                        $.a1_x = _res9.x;
                        $.a1_y = _res9.y;
                        $.a1_z = _res9.z;
                        const _res10 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                        $.a1_x = _res10.nodeX;
                        $.a1_y = _res10.nodeY;
                        $.a1_z = _res10.nodeZ;
                        //				IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 3.0
                        if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                            $.beamer2_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                            $.beamer2_a1.turnToFaceCoord(1438.0, -183.4);
                        } else {
                            if (!Char.IsDead($.mafia_2X)) {
                                $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_14X)) {
                                $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                            }
                            if ($.frankie_flag == 2) {
                                if (!Char.IsDead($.frankie)) {
                                    $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                    $.frankie.setObjKillPlayerAnyMeans($.player);
                                }
                            }
                        }
                    } else {
                        if (!Char.IsDead($.mafia_2X)) {
                            $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                        }
                        if (!Char.IsDead($.mafia_14X)) {
                            $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                        }
                        if ($.frankie_flag == 2) {
                            if (!Char.IsDead($.frankie)) {
                                $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                $.frankie.setObjKillPlayerAnyMeans($.player);
                            }
                        }
                    }
                }
                if ($.timerb_reset_flag_a1 == 1) {
                    if (!$.beamer2_a1.isStopped()) {
                        $.timerb_reset_flag_a1 = 0;
                    }
                }
                if ($.beamer2_a1.isStopped()) {
                    if ($.timerb_reset_flag_a1 == 0) {
                        TIMERB = 0;
                        $.timerb_reset_flag_a1 = 1;
                    }
                    if (TIMERB > 5000 && $.timerb_reset_flag_a1 == 1) {
                        if (!$.beamer2_a1.isOnScreen()) {
                            const _res11 = $.beamer2_a1.getCoordinates();
                            $.a1_x = _res11.x;
                            $.a1_y = _res11.y;
                            $.a1_z = _res11.z;
                            const _res12 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                            $.a1_x = _res12.nodeX;
                            $.a1_y = _res12.nodeY;
                            $.a1_z = _res12.nodeZ;
                            //					IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                            if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                $.beamer2_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                $.beamer2_a1.turnToFaceCoord(1438.0, -183.4);
                                $.timerb_reset_flag_a1 = 0;
                            } else {
                                if (!Char.IsDead($.mafia_2X)) {
                                    $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_14X)) {
                                    $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 2) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        } else {
                            if (!Char.IsDead($.mafia_2X)) {
                                $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_14X)) {
                                $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                            }
                            if ($.frankie_flag == 2) {
                                if (!Char.IsDead($.frankie)) {
                                    $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                    $.frankie.setObjKillPlayerAnyMeans($.player);
                                }
                            }
                        }
                    }
                }
                if ($.beamer2_a1.locate3D($.beamer2_stuck_x, $.beamer2_stuck_y, $.beamer2_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timery_reset_flag == 0) {
                        $.timery_started = Clock.GetGameTimer();
                        $.timery_reset_flag = 1;
                    }
                    if ($.timery_reset_flag == 1) {
                        $.timery_current = Clock.GetGameTimer();
                        $.timery = $.timery_current - $.timery_started;
                        if ($.timery > 5000) {
                            if (!$.beamer2_a1.isOnScreen()) {
                                const _res13 = $.beamer2_a1.getCoordinates();
                                $.a1_x = _res13.x;
                                $.a1_y = _res13.y;
                                $.a1_z = _res13.z;
                                const _res14 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                                $.a1_x = _res14.nodeX;
                                $.a1_y = _res14.nodeY;
                                $.a1_z = _res14.nodeZ;
                                //						IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                                if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                    $.beamer2_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                    $.beamer2_a1.turnToFaceCoord(1438.0, -183.4);
                                    $.timerb_reset_flag_a1 = 0;
                                } else {
                                    if (!Char.IsDead($.mafia_2X)) {
                                        $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_14X)) {
                                        $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if ($.frankie_flag == 2) {
                                        if (!Char.IsDead($.frankie)) {
                                            $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                            $.frankie.setObjKillPlayerAnyMeans($.player);
                                        }
                                    }
                                }
                            } else {
                                if (!Char.IsDead($.mafia_2X)) {
                                    $.mafia_2X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_14X)) {
                                    $.mafia_14X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 2) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.beamer2_a1.locate3D($.beamer2_stuck_x, $.beamer2_stuck_y, $.beamer2_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res15 = $.beamer2_a1.getCoordinates();
                    $.beamer2_stuck_x = _res15.x;
                    $.beamer2_stuck_y = _res15.y;
                    $.beamer2_stuck_z = _res15.z;
                    $.timery_reset_flag = 0;
                }
            }

            if (!Car.IsDead($.beamer3_a1)) {
                if ($.beamer3_a1.isUpsidedown() && $.beamer3_a1.isStopped()) {
                    if (!$.beamer3_a1.isOnScreen()) {
                        const _res16 = $.beamer3_a1.getCoordinates();
                        $.a1_x = _res16.x;
                        $.a1_y = _res16.y;
                        $.a1_z = _res16.z;
                        const _res17 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                        $.a1_x = _res17.nodeX;
                        $.a1_y = _res17.nodeY;
                        $.a1_z = _res17.nodeZ;
                        //				IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 3.0
                        if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                            $.beamer3_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                            $.beamer3_a1.turnToFaceCoord(1438.0, -183.4);
                        } else {
                            if (!Char.IsDead($.mafia_3X)) {
                                $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_4X)) {
                                $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                            }
                            if (!Char.IsDead($.mafia_5X)) {
                                $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                            }
                            if ($.frankie_flag == 3) {
                                if (!Char.IsDead($.frankie)) {
                                    $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                    $.frankie.setObjKillPlayerAnyMeans($.player);
                                }
                            }
                        }
                    } else {
                        if (!Char.IsDead($.mafia_3X)) {
                            $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                        }
                        if (!Char.IsDead($.mafia_4X)) {
                            $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                        }
                        if (!Char.IsDead($.mafia_5X)) {
                            $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                        }
                        if ($.frankie_flag == 3) {
                            if (!Char.IsDead($.frankie)) {
                                $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                $.frankie.setObjKillPlayerAnyMeans($.player);
                            }
                        }
                    }
                }
                if ($.timerc_reset_flag_a1 == 1) {
                    if (!$.beamer3_a1.isStopped()) {
                        $.timerc_reset_flag_a1 = 0;
                    }
                }
                if ($.beamer3_a1.isStopped()) {
                    if ($.timerc_reset_flag_a1 == 0) {
                        $.timerc_started_a1 = Clock.GetGameTimer();
                        $.timerc_reset_flag_a1 = 1;
                    }
                    if ($.timerc_reset_flag_a1 == 1) {
                        $.timerc_current_a1 = Clock.GetGameTimer();
                        $.timerc_a1 = $.timerc_current_a1 - $.timerc_started_a1;
                        if ($.timerc_a1 > 5000) {
                            if (!$.beamer3_a1.isOnScreen()) {
                                const _res18 = $.beamer3_a1.getCoordinates();
                                $.a1_x = _res18.x;
                                $.a1_y = _res18.y;
                                $.a1_z = _res18.z;
                                const _res19 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                                $.a1_x = _res19.nodeX;
                                $.a1_y = _res19.nodeY;
                                $.a1_z = _res19.nodeZ;
                                //						IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                                if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                    $.beamer3_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                    $.beamer3_a1.turnToFaceCoord(1438.0, -183.4);
                                    $.timerc_reset_flag_a1 = 0;
                                } else {
                                    if (!Char.IsDead($.mafia_3X)) {
                                        $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_4X)) {
                                        $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_5X)) {
                                        $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if ($.frankie_flag == 3) {
                                        if (!Char.IsDead($.frankie)) {
                                            $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                            $.frankie.setObjKillPlayerAnyMeans($.player);
                                        }
                                    }
                                }
                            } else {
                                if (!Char.IsDead($.mafia_3X)) {
                                    $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_4X)) {
                                    $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_5X)) {
                                    $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 3) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        }
                    }
                }
                if ($.beamer3_a1.locate3D($.beamer3_stuck_x, $.beamer3_stuck_y, $.beamer3_stuck_z, 4.0, 4.0, 4.0, false)) {
                    if ($.timerz_reset_flag == 0) {
                        $.timerz_started = Clock.GetGameTimer();
                        $.timerz_reset_flag = 1;
                    }
                    if ($.timerz_reset_flag == 1) {
                        $.timerz_current = Clock.GetGameTimer();
                        $.timerz = $.timerz_current - $.timerz_started;
                        if ($.timerz > 5000) {
                            if (!$.beamer3_a1.isOnScreen()) {
                                const _res20 = $.beamer3_a1.getCoordinates();
                                $.a1_x = _res20.x;
                                $.a1_y = _res20.y;
                                $.a1_z = _res20.z;
                                const _res21 = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
                                $.a1_x = _res21.nodeX;
                                $.a1_y = _res21.nodeY;
                                $.a1_z = _res21.nodeZ;
                                //						IF NOT IS_POINT_ON_SCREEN a1_x a1_y a1_z 4.0
                                if (!$.player.locateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, false)) {
                                    $.beamer3_a1.setCoordinates($.a1_x, $.a1_y, $.a1_z);
                                    $.beamer3_a1.turnToFaceCoord(1438.0, -183.4);
                                    $.timerc_reset_flag_a1 = 0;
                                } else {
                                    if (!Char.IsDead($.mafia_3X)) {
                                        $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_4X)) {
                                        $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if (!Char.IsDead($.mafia_5X)) {
                                        $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                                    }
                                    if ($.frankie_flag == 3) {
                                        if (!Char.IsDead($.frankie)) {
                                            $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                            $.frankie.setObjKillPlayerAnyMeans($.player);
                                        }
                                    }
                                }
                            } else {
                                if (!Char.IsDead($.mafia_3X)) {
                                    $.mafia_3X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_4X)) {
                                    $.mafia_4X.setObjKillPlayerAnyMeans($.player);
                                }
                                if (!Char.IsDead($.mafia_5X)) {
                                    $.mafia_5X.setObjKillPlayerAnyMeans($.player);
                                }
                                if ($.frankie_flag == 3) {
                                    if (!Char.IsDead($.frankie)) {
                                        $.frankie.giveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                                        $.frankie.setObjKillPlayerAnyMeans($.player);
                                    }
                                }
                            }
                        }
                    }
                }
                if (!$.beamer3_a1.locate3D($.beamer3_stuck_x, $.beamer3_stuck_y, $.beamer3_stuck_z, 4.0, 4.0, 4.0, false)) {
                    const _res22 = $.beamer3_a1.getCoordinates();
                    $.beamer3_stuck_x = _res22.x;
                    $.beamer3_stuck_y = _res22.y;
                    $.beamer3_stuck_z = _res22.z;
                    $.timerz_reset_flag = 0;
                }
            }

            //___________THIS BIT OPENS THE GARAGE, IF FRANKIE GETS THERE MISSION FAILED_________//

            if ($.garage_door_close == 0) {
                if ($.frankie.locateAnyMeans3D(1426.0, -183.4, 50.5, 15.0, 12.0, 6.0, false)) {
                    $.frankie_garage.open();
                    $.garage_door_close = 1;
                }
            }

            if ($.garage_door_close == 1) {
                if (!$.player.isInArea3D(1427.6, -187.3, 49.5, 1442.6, -179.0, 53.8, false)) {
                    if ($.frankie.isInArea3D(1428.8, -187.0, 50.0, 1442.5, -179.9, 53.0, false)) {
                        $.frankie_garage.close();
                        $.garage_door_close = 2;
                    }
                } else {
                    $.frankie_garage.open();
                }
            }

            if ($.garage_door_close == 2) {
                if ($.player.isInArea3D(1427.6, -187.3, 49.5, 1442.6, -179.0, 53.8, false)) {
                    $.frankie_garage.open();
                    $.garage_door_close = 1;
                }
                if ($.frankie_garage.isClosed()) {
                    Text.PrintNow('AM1_7', 5000, 1); //"Salvatore got back to his club alive!"
                    // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_asuka1_failed'); // fallback: would break linear control flow
                }
            }

            // Mission Asuka1 failed
        }
    }

    async function mission_asuka1_failed() {
        if (!Char.IsDead($.mafia_1X)) {
            $.mafia_1X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_2X)) {
            $.mafia_2X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_3X)) {
            $.mafia_3X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_4X)) {
            $.mafia_4X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_5X)) {
            $.mafia_5X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_6X)) {
            $.mafia_6X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_7X)) {
            $.mafia_7X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_8X)) {
            $.mafia_8X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_9X)) {
            $.mafia_9X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_10X)) {
            $.mafia_10X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_11X)) {
            $.mafia_11X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_12X)) {
            $.mafia_12X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_13X)) {
            $.mafia_13X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_14X)) {
            $.mafia_14X.setObjKillPlayerAnyMeans($.player);
        }

        Text.PrintBig('M_FAIL', 5000, 1);
        return;

        // mission Asuka1 passed
    }

    async function mission_asuka1_passed() {
        $.flag_asuka_mission1_passed = 1;

        if (!Char.IsDead($.mafia_1X)) {
            $.mafia_1X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_2X)) {
            $.mafia_2X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_3X)) {
            $.mafia_3X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_4X)) {
            $.mafia_4X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_5X)) {
            $.mafia_5X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_6X)) {
            $.mafia_6X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_7X)) {
            $.mafia_7X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_8X)) {
            $.mafia_8X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_9X)) {
            $.mafia_9X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_10X)) {
            $.mafia_10X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_11X)) {
            $.mafia_11X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_12X)) {
            $.mafia_12X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_13X)) {
            $.mafia_13X.setObjKillPlayerAnyMeans($.player);
        }
        if (!Char.IsDead($.mafia_14X)) {
            $.mafia_14X.setObjKillPlayerAnyMeans($.player);
        }

        Text.PrintWithNumberBig('M_PASS', 25000, 5000, 1);
        $.player.addScore(25000);
        Game.SetThreatForPedType(7 /* PEDTYPE_GANG_MAFIA */, 1 /* THREAT_PLAYER1 */);
        Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 4 /* WEAPONTYPE_SHOTGUN */); //The Mafia
        $.player.clearWantedLevel();
        Stat.RegisterMissionPassed('AM1');
        Audio.PlayMissionPassedTune(1);
        Stat.PlayerMadeProgress(1);
        // START_NEW_SCRIPT asuka_mission2_loop
        // START_NEW_SCRIPT joeys_buggy_loop
        // START_NEW_SCRIPT yardie_phone_start
        return;

        // mission cleanup
    }

    async function mission_cleanup_asuka1() {
        // START_NEW_SCRIPT close_asuka1_door

        //IF NOT IS_CHAR_DEAD frankie
        //	REMOVE_CHAR_ELEGANTLY frankie
        //ENDIF

        $.frankie_garage.setTargetCarForMission(-1);

        Streaming.MarkModelAsNoLongerNeeded(134 /* CAR_MAFIA */);
        Streaming.MarkModelAsNoLongerNeeded(10 /* PED_GANG_MAFIA_A */);
        Streaming.MarkModelAsNoLongerNeeded(11 /* PED_GANG_MAFIA_B */);
        Streaming.UnloadSpecialCharacter(1);
        $.mission_blip_am1.remove();
        Path.SwitchRoadsOn(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
        $.flag_player_on_mission = 0;
        $.flag_player_on_asuka_mission = 0;
        Mission.Finish();
        return;
    }

    async function kill_player_now_script() {
        if ($.spotted_print == 0) {
            if (Audio.HasMissionAudioLoaded()) {
                Text.PrintNow('AM1_2', 5000, 1);
                Audio.PlayMissionAudio();
                $.spotted_print = 1;
            }
        }

        if (!Char.IsDead($.frankie)) {
            $.frankie.setRunning(true /* TRUE */);
        }

        if (
            $.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false) ||
            $.player.isInArea2D(878.79, -433.86, 890.77, -427.4, false) ||
            $.player.isInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, false)
        ) {
            if (!($.mafia_13_flag == 4)) {
                if (!($.mafia_13_flag == 0)) {
                    if ($.mafia_13_flag > 1 && $.mafia_13_kill_player_flag == 0) {
                        $.mafia_13X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_13X.setObjRunToCoord(886.0037, -414.0266); // NEAR BOTTOM OF STEPS
                        $.mafia_13_kill_player_flag = 1;
                    }
                    if ($.mafia_13_kill_player_flag == 1) {
                        if ($.mafia_13X.locateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, false)) {
                            $.mafia_13X.setUsePednodeSeek(false /* FALSE */);
                            $.mafia_13X.setObjRunToCoord(888.8883, -409.8141); // AT BOTTOM OF STEPS
                            $.mafia_13_kill_player_flag = 2;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 2) {
                        if ($.mafia_13X.locateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, false)) {
                            $.mafia_13X.setObjRunToCoord(880.9434, -409.0293); // ON LANDING
                            $.mafia_13_kill_player_flag = 3;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 3) {
                        if ($.mafia_13X.locateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, false)) {
                            $.mafia_13X.setObjRunToCoord(880.9827, -406.0733); // ON LANDING
                            $.mafia_13_kill_player_flag = 4;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 4) {
                        if ($.mafia_13X.locateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, false)) {
                            $.mafia_13X.setObjRunToCoord(892.101, -406.2053); // ON ROOF TOP OF STAIRS
                            $.mafia_13_kill_player_flag = 5;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 5) {
                        if ($.mafia_13X.locateOnFoot2D(892.101, -406.2053, 1.0, 1.0, false)) {
                            $.mafia_13X.setObjRunToCoord(892.2498, -421.2303); // IN MIDDLE OF ROOF
                            $.mafia_13_kill_player_flag = 6;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 6) {
                        if ($.mafia_13X.locateOnFoot2D(892.2498, -421.2303, 1.0, 1.0, false)) {
                            if ($.player.isInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, false)) {
                                $.mafia_13X.setObjRunToCoord(893.2559, -425.0609); // ABOVE SMALL ROOF BETWEEN BILLBOARDS
                            } else {
                                $.mafia_13X.setObjRunToCoord(892.1462, -429.0872); // ABOVE SMALL ROOF
                            }
                            $.mafia_13_kill_player_flag = 7;
                        }
                    }
                    if ($.mafia_13_kill_player_flag == 7) {
                        if ($.player.isInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, false)) {
                            $.mafia_13X.setObjRunToCoord(893.2559, -425.0609); // ABOVE SMALL ROOF BETWEEN BILLBOARDS
                            if ($.mafia_13X.locateStoppedOnFoot2D(893.2559, -425.0609, 1.0, 1.0, false)) {
                                $.mafia_13X.setUsePednodeSeek(true /* TRUE */);
                                $.mafia_13X.setStayInSamePlace(true /* TRUE */);
                                $.mafia_13X.setObjKillPlayerOnFoot($.player);
                                $.mafia_13_kill_player_flag = 8;
                            }
                        } else {
                            $.mafia_13X.setObjRunToCoord(892.1462, -429.0872); // ABOVE SMALL ROOF
                            if ($.mafia_13X.locateStoppedOnFoot2D(892.1462, -429.0872, 1.0, 1.0, false)) {
                                $.mafia_13X.setUsePednodeSeek(true /* TRUE */);
                                $.mafia_13X.setStayInSamePlace(true /* TRUE */);
                                $.mafia_13X.setObjKillPlayerOnFoot($.player);
                                $.mafia_13_kill_player_flag = 8;
                            }
                        }
                    }
                }
            }
            if (!($.mafia_12_flag == 4)) {
                if (!($.mafia_12_flag == 0)) {
                    if ($.player.isInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, false)) {
                        if ($.mafia_12_flag > 1 && $.mafia_12_kill_player_flag == 0) {
                            $.mafia_12X.setUsePednodeSeek(true /* TRUE */);
                            $.mafia_12X.setObjRunToCoord(886.0037, -414.0266); // NEAR BOTTOM OF STEPS
                            $.mafia_12_kill_player_flag = 1;
                        }
                        if ($.mafia_12_kill_player_flag == 1) {
                            if ($.mafia_12X.locateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, false)) {
                                $.mafia_12X.setUsePednodeSeek(false /* FALSE */);
                                $.mafia_12X.setObjRunToCoord(888.8883, -409.8141); // AT BOTTOM OF STEPS
                                $.mafia_12_kill_player_flag = 2;
                            }
                        }
                        if ($.mafia_12_kill_player_flag == 2) {
                            if ($.mafia_12X.locateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, false)) {
                                $.mafia_12X.setObjRunToCoord(880.9434, -409.0293); // ON LANDING
                                $.mafia_12_kill_player_flag = 3;
                            }
                        }
                        if ($.mafia_12_kill_player_flag == 3) {
                            if ($.mafia_12X.locateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, false)) {
                                $.mafia_12X.setObjRunToCoord(880.9827, -406.0733); // ON LANDING
                                $.mafia_12_kill_player_flag = 4;
                            }
                        }
                        if ($.mafia_12_kill_player_flag == 4) {
                            if ($.mafia_12X.locateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, false)) {
                                $.mafia_12X.setObjRunToCoord(892.101, -406.2053); // ON ROOF TOP OF STAIRS
                                $.mafia_12_kill_player_flag = 5;
                            }
                        }
                        if ($.mafia_12_kill_player_flag == 5) {
                            if ($.mafia_12X.locateOnFoot2D(892.101, -406.2053, 1.0, 1.0, false)) {
                                $.mafia_12X.setObjRunToCoord(899.3036, -408.1849); // AT FRONT OF ROOF
                                $.mafia_12X.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
                                $.mafia_12_kill_player_flag = 6;
                            }
                        }
                        if ($.mafia_12_kill_player_flag == 6) {
                            if ($.mafia_12X.locateStoppedOnFoot2D(899.3036, -408.1849, 1.0, 1.0, false)) {
                                $.mafia_12X.setUsePednodeSeek(true /* TRUE */);
                                $.mafia_12X.setStayInSamePlace(true /* TRUE */);
                                $.mafia_12X.setObjKillPlayerOnFoot($.player);
                                $.mafia_12_kill_player_flag = 7;
                            }
                        }
                    } else {
                        if ($.mafia_12_flag > 1 && $.mafia_12_kill_player_flag == 0) {
                            $.mafia_12X.setUsePednodeSeek(true /* TRUE */);
                            $.mafia_12X.setObjRunToCoord(882.7668, -414.3651);
                            $.mafia_12_kill_player_flag = 1;
                        }
                        if ($.mafia_12_kill_player_flag == 1) {
                            if ($.mafia_12X.locateStoppedOnFoot2D(882.7668, -414.3651, 1.0, 1.0, false)) {
                                $.mafia_12X.setUsePednodeSeek(true /* TRUE */);
                                $.mafia_12X.setStayInSamePlace(true /* TRUE */);
                                $.mafia_12X.setObjKillPlayerOnFoot($.player);
                                $.mafia_12_kill_player_flag = 7;
                            }
                        }
                    }
                }
            }
            if (!($.mafia_11_flag == 4)) {
                if (!($.mafia_11_flag == 0)) {
                    if ($.mafia_11_flag > 1 && $.mafia_11_kill_player_flag == 0) {
                        $.mafia_11X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_11X.setObjRunToCoord(886.0037, -414.0266); // NEAR BOTTOM OF STEPS
                        $.mafia_11_kill_player_flag = 1;
                    }
                    if ($.mafia_11_kill_player_flag == 1) {
                        if ($.mafia_11X.locateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, false)) {
                            $.mafia_11X.setUsePednodeSeek(false /* FALSE */);
                            $.mafia_11X.setObjRunToCoord(888.8883, -409.8141); // AT BOTTOM OF STEPS
                            $.mafia_11_kill_player_flag = 2;
                        }
                    }
                    if ($.mafia_11_kill_player_flag == 2) {
                        if ($.mafia_11X.locateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, false)) {
                            $.mafia_11X.setObjRunToCoord(880.9434, -409.0293); // ON LANDING
                            $.mafia_11_kill_player_flag = 3;
                        }
                    }
                    if ($.mafia_11_kill_player_flag == 3) {
                        if ($.mafia_11X.locateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, false)) {
                            $.mafia_11X.setObjRunToCoord(880.9827, -406.0733); // ON LANDING
                            $.mafia_11_kill_player_flag = 4;
                        }
                    }
                    if ($.mafia_11_kill_player_flag == 4) {
                        if ($.mafia_11X.locateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, false)) {
                            $.mafia_11X.setObjRunToCoord(892.101, -406.2053); // ON ROOF TOP OF STAIRS
                            $.mafia_11_kill_player_flag = 5;
                        }
                    }
                    if ($.mafia_11_kill_player_flag == 5) {
                        if ($.mafia_11X.locateOnFoot2D(892.101, -406.2053, 1.0, 1.0, false)) {
                            $.mafia_11X.setObjRunToCoord(892.2498, -421.2303); // IN MIDDLE OF ROOF
                            $.mafia_11X.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
                            $.mafia_11_kill_player_flag = 6;
                        }
                    }
                    if ($.mafia_11_kill_player_flag == 6) {
                        if ($.mafia_11X.locateStoppedOnFoot2D(892.2498, -421.2303, 1.0, 1.0, false)) {
                            $.mafia_11X.setUsePednodeSeek(true /* TRUE */);
                            $.mafia_11X.setStayInSamePlace(true /* TRUE */);
                            $.mafia_11X.setObjKillPlayerOnFoot($.player);
                            $.mafia_11_kill_player_flag = 7;
                        }
                    }
                }
            }
            if (!($.mafia_10_flag == 4)) {
                if (!($.mafia_10_flag == 0)) {
                    if ($.mafia_10_flag > 1 && $.mafia_10_kill_player_flag == 0) {
                        $.mafia_10X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_10X.setObjRunToCoord(886.0037, -414.0266); // NEAR BOTTOM OF STEPS
                        $.mafia_10_kill_player_flag = 1;
                    }
                    if ($.mafia_10_kill_player_flag == 1) {
                        if ($.mafia_10X.locateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, false)) {
                            $.mafia_10X.setUsePednodeSeek(false /* FALSE */);
                            $.mafia_10X.setObjRunToCoord(888.8883, -409.8141); // AT BOTTOM OF STEPS
                            $.mafia_10_kill_player_flag = 2;
                        }
                    }
                    if ($.mafia_10_kill_player_flag == 2) {
                        if ($.mafia_10X.locateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, false)) {
                            $.mafia_10X.setObjRunToCoord(880.9434, -409.0293); // ON LANDING
                            $.mafia_10_kill_player_flag = 3;
                        }
                    }
                    if ($.mafia_10_kill_player_flag == 3) {
                        if ($.mafia_10X.locateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, false)) {
                            $.mafia_10X.setObjRunToCoord(880.9827, -406.0733); // ON LANDING
                            $.mafia_10_kill_player_flag = 4;
                        }
                    }
                    if ($.mafia_10_kill_player_flag == 4) {
                        if ($.mafia_10X.locateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, false)) {
                            $.mafia_10X.setObjRunToCoord(892.101, -406.2053); // ON ROOF TOP OF STAIRS
                            $.mafia_10X.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
                            $.mafia_10_kill_player_flag = 5;
                        }
                    }
                    if ($.mafia_10_kill_player_flag == 5) {
                        if ($.mafia_10X.locateStoppedOnFoot2D(892.101, -406.2053, 1.0, 1.0, false)) {
                            $.mafia_10X.setUsePednodeSeek(true /* TRUE */);
                            $.mafia_10X.setStayInSamePlace(true /* TRUE */);
                            $.mafia_10X.setObjKillPlayerOnFoot($.player);
                            $.mafia_10_kill_player_flag = 6;
                        }
                    }
                }
            }
            if (!($.mafia_9_flag == 4)) {
                if (!($.mafia_9_flag == 0)) {
                    if ($.mafia_9_flag > 1 && $.mafia_9_kill_player_flag == 0) {
                        $.mafia_9X.setStayInSamePlace(true /* TRUE */);
                        $.mafia_9X.setObjKillPlayerOnFoot($.player);
                        $.mafia_9_kill_player_flag = 1;
                    }
                }
            }
            if (!($.mafia_8_flag == 4)) {
                if (!($.mafia_8_flag == 0)) {
                    if ($.mafia_8_flag > 1 && $.mafia_8_kill_player_flag == 0) {
                        $.mafia_8X.setStayInSamePlace(true /* TRUE */);
                        $.mafia_8X.setObjKillPlayerOnFoot($.player);
                        $.mafia_8_kill_player_flag = 1;
                    }
                }
            }
            if ($.frankie_exists_flag == 0) {
                if ($.timerb_reset_flag_a1 == 0) {
                    TIMERB = 0;
                    $.timerb_reset_flag_a1 = 1;
                }
                if ($.timerb_reset_flag_a1 == 1) {
                    if (TIMERB > 30000) {
                        if ($.time_left_a1 < 1) {
                            $.frankie_exists_flag = 2;
                        }
                    }
                }
            }
            if ($.mafia_10_kill_player_flag == 6 || $.mafia_10_flag == 4) {
                if ($.mafia_11_kill_player_flag == 7 || $.mafia_11_flag == 4) {
                    if ($.mafia_12_kill_player_flag == 7 || $.mafia_12_flag == 4) {
                        if ($.mafia_13_kill_player_flag == 8 || $.mafia_13_flag == 4) {
                            if ($.time_left_a1 < 1) {
                                if ($.frankie_exists_flag == 0) {
                                    $.frankie_exists_flag = 2;
                                }
                            }
                        }
                    }
                }
            }
            return;
        } else {
            if (!($.mafia_8_flag == 4)) {
                if (!($.mafia_8_flag == 0)) {
                    if ($.mafia_8_kill_player_flag == 1) {
                        $.mafia_8X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_8X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_8_kill_player_flag = 0;
                    }
                }
            }
            if (!($.mafia_9_flag == 4)) {
                if (!($.mafia_9_flag == 0)) {
                    if ($.mafia_9_kill_player_flag == 1) {
                        $.mafia_9X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_9X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_9_kill_player_flag = 0;
                    }
                }
            }
            if (!($.mafia_10_flag == 4)) {
                if (!($.mafia_10_flag == 0)) {
                    if ($.mafia_10_kill_player_flag == 6) {
                        $.mafia_10X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_10X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_10_kill_player_flag = 0;
                    }
                }
            }
            if (!($.mafia_11_flag == 4)) {
                if (!($.mafia_11_flag == 0)) {
                    if ($.mafia_11_kill_player_flag == 7) {
                        $.mafia_11X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_11X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_11_kill_player_flag = 0;
                    }
                }
            }
            if (!($.mafia_12_flag == 4)) {
                if (!($.mafia_12_flag == 0)) {
                    if ($.mafia_12_kill_player_flag == 7) {
                        $.mafia_12X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_12X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_12_kill_player_flag = 0;
                    }
                }
            }
            if (!($.mafia_13_flag == 4)) {
                if (!($.mafia_13_flag == 0)) {
                    if ($.mafia_13_kill_player_flag == 8) {
                        $.mafia_13X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_13X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_13_kill_player_flag = 0;
                    }
                }
            }
        }

        if ($.player.isInArea2D(920.0792, -408.8181, 931.3213, -398.101, false)) {
            if (!($.mafia_5_kill_player_flag == -100)) {
                if (!Char.IsDead($.mafia_5X)) {
                    if ($.mafia_5_kill_player_flag == 0) {
                        $.mafia_5X.setObjRunToCoord(919.2639, -397.0023); //CORNER OF STREET
                        $.mafia_5_kill_player_flag = 1;
                    }
                } else {
                    $.mafia_5_kill_player_flag = -100;
                }
                if ($.mafia_5_kill_player_flag == 1) {
                    if ($.mafia_5X.locateOnFoot2D(919.2639, -397.0023, 1.0, 1.0, false)) {
                        $.mafia_5X.setObjRunToCoord(958.428, -397.0979); //IN FRONT OF ALLEY
                        $.mafia_5_kill_player_flag = 2;
                    }
                }
                if ($.mafia_5_kill_player_flag == 2) {
                    if ($.mafia_5X.locateOnFoot2D(958.428, -397.0979, 1.0, 1.0, false)) {
                        $.mafia_5X.setUsePednodeSeek(false /* FALSE */);
                        $.mafia_5X.setObjRunToCoord(958.0251, -416.7367); //BOTTOM OF STEPS
                        $.mafia_5_kill_player_flag = 3;
                    }
                }
                if ($.mafia_5_kill_player_flag == 3) {
                    if ($.mafia_5X.locateOnFoot2D(958.0251, -416.7367, 1.0, 1.0, false)) {
                        $.mafia_5X.setObjRunToCoord(949.0732, -416.6061); //LANDING ON STEPS
                        $.mafia_5_kill_player_flag = 4;
                    }
                }
                if ($.mafia_5_kill_player_flag == 4) {
                    if ($.mafia_5X.locateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, false)) {
                        $.mafia_5X.setObjRunToCoord(948.9913, -407.5764); //TOP OF STEPS
                        $.mafia_5_kill_player_flag = 5;
                    }
                }
                if ($.mafia_5_kill_player_flag == 5) {
                    if ($.mafia_5X.locateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, false)) {
                        $.mafia_5X.setObjRunToCoord(929.8204, -404.7728); //ON THE SNIPER ROOF
                        $.mafia_5_kill_player_flag = 6;
                    }
                }
                if ($.mafia_5_kill_player_flag == 6) {
                    if ($.mafia_5X.locateOnFoot2D(929.8204, -404.7728, 1.0, 1.0, false)) {
                        $.mafia_5X.setStayInSamePlace(true /* TRUE */);
                        $.mafia_5X.setObjKillPlayerOnFoot($.player);
                        $.mafia_5X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_5_kill_player_flag = 7;
                    }
                }
            }
            if (!($.mafia_7_kill_player_flag == -100)) {
                if (!Char.IsDead($.mafia_7X)) {
                    if ($.mafia_7_kill_player_flag == 0) {
                        $.mafia_7X.setObjRunToCoord(919.2639, -397.0023); //CORNER OF STREET
                        $.mafia_7_kill_player_flag = 1;
                    }
                } else {
                    $.mafia_7_kill_player_flag = -100;
                }
                if ($.mafia_7_kill_player_flag == 1) {
                    if ($.mafia_7X.locateOnFoot2D(919.2639, -397.0023, 1.0, 1.0, false)) {
                        $.mafia_7X.setObjRunToCoord(958.428, -397.0979); //IN FRONT OF ALLEY
                        $.mafia_7_kill_player_flag = 2;
                    }
                }
                if ($.mafia_7_kill_player_flag == 2) {
                    if ($.mafia_7X.locateOnFoot2D(958.428, -397.0979, 1.0, 1.0, false)) {
                        $.mafia_7X.setUsePednodeSeek(false /* FALSE */);
                        $.mafia_7X.setObjRunToCoord(958.0251, -416.7367); //BOTTOM OF STEPS
                        $.mafia_7_kill_player_flag = 3;
                    }
                }
                if ($.mafia_7_kill_player_flag == 3) {
                    if ($.mafia_7X.locateOnFoot2D(958.0251, -416.7367, 1.0, 1.0, false)) {
                        $.mafia_7X.setObjRunToCoord(949.0732, -416.6061); //LANDING ON STEPS
                        $.mafia_7_kill_player_flag = 4;
                    }
                }
                if ($.mafia_7_kill_player_flag == 4) {
                    if ($.mafia_7X.locateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, false)) {
                        $.mafia_7X.setObjRunToCoord(948.9913, -407.5764); //TOP OF STEPS
                        $.mafia_7_kill_player_flag = 5;
                    }
                }
                if ($.mafia_7_kill_player_flag == 5) {
                    if ($.mafia_7X.locateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, false)) {
                        $.mafia_7X.setObjRunToCoord(930.0654, -407.9679); //ON THE SNIPER ROOF
                        $.mafia_7_kill_player_flag = 6;
                    }
                }
                if ($.mafia_7_kill_player_flag == 6) {
                    if ($.mafia_7X.locateOnFoot2D(930.0654, -407.9679, 1.0, 1.0, false)) {
                        $.mafia_7X.setStayInSamePlace(true /* TRUE */);
                        $.mafia_7X.setObjKillPlayerOnFoot($.player);
                        $.mafia_7X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_7_kill_player_flag = 7;
                    }
                }
            }
            if ($.mafia_15_kill_player_flag == 0) {
                if (!Camera.IsPointOnScreen(949.0732, -416.6061, 19.5, 2.0)) {
                    $.mafia_15X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, 958.0251, -416.7367, 14.2); //BOTTOM OF STEPS
                    $.mafia_15X.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                    $.mafia_15X.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                    $.mafia_15X.setUsePednodeSeek(false /* FALSE */);
                    $.mafia_15X.setObjGotoCoordOnFoot(949.0732, -416.6061); //LANDING ON STEPS
                    $.mafia_15_kill_player_flag = 1;
                }
            }
            if (!($.mafia_15_kill_player_flag == -100)) {
                if ($.mafia_15_kill_player_flag > 0) {
                    if (Char.IsDead($.mafia_15X)) {
                        $.mafia_15_kill_player_flag = -100;
                    }
                }
                if ($.mafia_15_kill_player_flag == 1) {
                    if ($.mafia_15X.locateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, false)) {
                        $.mafia_15X.setObjRunToCoord(948.9913, -407.5764); //TOP OF STEPS
                        $.mafia_15_kill_player_flag = 2;
                    }
                }
                if ($.mafia_15_kill_player_flag == 2) {
                    if ($.mafia_15X.locateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, false)) {
                        $.mafia_15X.setObjRunToCoord(929.5118, -406.648); //ON THE SNIPER ROOF
                        $.mafia_15_kill_player_flag = 3;
                    }
                }
                if ($.mafia_15_kill_player_flag == 3) {
                    if ($.mafia_15X.locateOnFoot2D(929.5118, -406.648, 1.0, 1.0, false)) {
                        $.mafia_15X.setStayInSamePlace(true /* TRUE */);
                        $.mafia_15X.setObjKillPlayerOnFoot($.player);
                        $.mafia_15X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_15_kill_player_flag = 4;
                    }
                }
            }
            if ($.mafia_15_kill_player_flag == 4) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.mafia_5_kill_player_flag == 7) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.mafia_7_kill_player_flag == 7) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.mafia_5_kill_player_flag == -100) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.mafia_7_kill_player_flag == -100) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.mafia_15_kill_player_flag == -100) {
                if (!($.frankie_exists_flag == 0)) {
                    $.frankie_exists_flag = 3;
                }
            }
            if ($.frankie_exists_flag == 0) {
                if ($.timerb_reset_flag_a1 == 0) {
                    TIMERB = 0;
                    $.timerb_reset_flag_a1 = 1;
                }
                if ($.timerb_reset_flag_a1 == 1) {
                    if (TIMERB > 15000) {
                        if ($.time_left_a1 < 1) {
                            $.frankie_exists_flag = 3;
                        }
                    }
                }
            }
            return;
        } else {
            if (!($.mafia_5_kill_player_flag == -100)) {
                if (!($.mafia_5_kill_player_flag == 0)) {
                    if (!Char.IsDead($.mafia_5X)) {
                        $.mafia_5X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_5X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_5_kill_player_flag = 0;
                    } else {
                        $.mafia_5_kill_player_flag = -100;
                    }
                }
            }
            if (!($.mafia_7_kill_player_flag == -100)) {
                if (!($.mafia_7_kill_player_flag == 0)) {
                    if (!Char.IsDead($.mafia_7X)) {
                        $.mafia_7X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_7X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_7_kill_player_flag = 0;
                    } else {
                        $.mafia_7_kill_player_flag = -100;
                    }
                }
            }
            if (!($.mafia_15_kill_player_flag == -100)) {
                if (!($.mafia_15_kill_player_flag == 0)) {
                    if (!Char.IsDead($.mafia_15X)) {
                        $.mafia_15X.setUsePednodeSeek(true /* TRUE */);
                        $.mafia_15X.setStayInSamePlace(false /* FALSE */);
                        $.mafia_15_kill_player_flag = -100;
                    } else {
                        $.mafia_15_kill_player_flag = -100;
                    }
                }
            }
        }

        if (
            $.player.isInArea2D(878.79, -427.4, 890.77, -403.89, false) ||
            $.player.isInArea3D(890.77, -427.4, 13.0, 900.0, -423.82, 18.9, false) ||
            $.player.isInArea2D(900.0, -443.0, 927.0, -378.0, false)
        ) {
            if (!($.mafia_8_flag == 4)) {
                if (!($.mafia_8_flag == 0)) {
                    $.mafia_8X.setObjKillPlayerOnFoot($.player);
                }
            }
            if (!($.mafia_9_flag == 4)) {
                if (!($.mafia_9_flag == 0)) {
                    $.mafia_9X.setObjKillPlayerOnFoot($.player);
                }
            }
            if (!($.mafia_10_flag == 4)) {
                if (!($.mafia_10_flag == 0)) {
                    $.mafia_10X.setObjKillPlayerOnFoot($.player);
                }
            }
            if (!($.mafia_11_flag == 4)) {
                if (!($.mafia_11_flag == 0)) {
                    $.mafia_11X.setObjKillPlayerOnFoot($.player);
                }
            }
            if (!($.mafia_12_flag == 4)) {
                if (!($.mafia_12_flag == 0)) {
                    $.mafia_12X.setObjKillPlayerOnFoot($.player);
                }
            }
            if (!($.mafia_13_flag == 4)) {
                if (!($.mafia_13_flag == 0)) {
                    $.mafia_13X.setObjKillPlayerOnFoot($.player);
                }
            }
            if ($.player.isInArea2D(900.0, -443.0, 927.0, -378.0, false)) {
                if (!Char.IsDead($.mafia_5X)) {
                    $.mafia_5X.setObjKillPlayerOnFoot($.player);
                }
                if (!Char.IsDead($.mafia_7X)) {
                    $.mafia_7X.setObjKillPlayerOnFoot($.player);
                }
            }
            if ($.frankie_exists_flag == 0) {
                if ($.timerb_reset_flag_a1 == 0) {
                    TIMERB = 0;
                    $.timerb_reset_flag_a1 = 1;
                }
                if ($.timerb_reset_flag_a1 == 1) {
                    if (TIMERB > 25000) {
                        if ($.time_left_a1 < 1) {
                            $.frankie_exists_flag = 2;
                        }
                    }
                }
            }
            return;
        }

        $.kill_player_now_flag = 0;

        return;
    }

    async function move_fuckers_car() {
        $.fuckers_car.setDrivingStyle(2);
        $.fuckers_car.setCruiseSpeed(20.0);
        if (
            $.player.isInArea2D(878.79, -427.4, 890.77, -403.89, false) ||
            $.player.isInArea3D(890.77, -427.4, 13.0, 900.0, -423.82, 18.9, false) ||
            $.player.isInArea2D(845.75, -443.85, 890.77, -433.86, false) ||
            $.player.isInArea2D(878.79, -433.86, 890.77, -427.4, false) ||
            $.player.isInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, false)
        ) {
            $.fuckers_car.wanderRandomly();
            $.fuckers_car.setAvoidLevelTransitions(true /* TRUE */);
        } else {
            $.fuckers_car.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }

        return;
    }
}

export async function asuka1() {
    // MissionBoundary
    // *****************************************************************************************
    // *******************************   Asuka mission 1   *************************************
    // ******************************* Salvatore's Sendoff *************************************
    // *****************************************************************************************
    // *** Salvatore will be leaving Luigi's Club in 3 hours. The player will have to kill 	 ***
    // *** him before he arrives at his mansion. He will come out of the club with a very 	 ***
    // *** large Mafia escort. (3 cars full and 5 extra goons) If the player is spotted 	 ***
    // *** before Salvatore leaves the club, they will attack. 								 ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_asuka1
    await mission_start_asuka1();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_asuka1_failed
        await mission_asuka1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_asuka1
    await mission_cleanup_asuka1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT hours_a1 mins_a1 time_left_a1 beamer1_a1 beamer2_a1 beamer3_a1 mission_blip_am1
    // VAR_INT mafia_1X mafia_2X mafia_3X mafia_4X mafia_5X mafia_6X mafia_7X mafia_8X mafia_9X mafia_10X mafia_11X mafia_12X mafia_13X mafia_14X mafia_15X
    // VAR_INT mafia_8_flag mafia_9_flag mafia_10_flag mafia_11_flag mafia_12_flag mafia_13_flag frankie_flag
    // VAR_INT set_beamer_1_kill_player set_beamer_2_kill_player set_beamer_3_kill_player
    // VAR_INT beamer1_health beamer2_health beamer3_health garage_door_close timera_reset_flag_a1 timerb_reset_flag_a1 timerc_reset_flag_a1
    // VAR_INT timerc_started_a1 timerc_current_a1 timerc_a1 frankies_ride fuckers_car beamer_1_dead_flag beamer_2_dead_flag beamer_3_dead_flag
    // VAR_INT players_car_a1 kill_player_now_flag spotted_print enter_car_flag frankie_exists_flag
    // VAR_INT mafia_8_kill_player_flag mafia_9_kill_player_flag mafia_10_kill_player_flag mafia_11_kill_player_flag mafia_12_kill_player_flag mafia_13_kill_player_flag
    // VAR_INT mafia_5_kill_player_flag mafia_7_kill_player_flag mafia_15_kill_player_flag
    // VAR_INT timerx timerx_started timerx_current timerx_reset_flag
    // VAR_INT timery timery_started timery_current timery_reset_flag
    // VAR_INT timerz timerz_started timerz_current timerz_reset_flag

    // VAR_FLOAT players_car_a1_speed beamer1_a1_speed beamer2_a1_speed beamer3_a1_speed
    // VAR_FLOAT create_char_in_club_x create_char_in_club_y create_char_in_club_z bottom_of_steps_x bottom_of_steps_y mafia_10_x mafia_10_y
    // VAR_FLOAT mafia_11_x mafia_11_y mafia_12_x mafia_12_y mafia_13_x mafia_13_y working_x_a1 working_y_a1 working_z_a1 beamer_heading
    // VAR_FLOAT street_x street_y back_of_alley_x back_of_alley_y a1_x a1_y a1_z diff_heading_door
    // VAR_FLOAT beamer1_stuck_x beamer1_stuck_y beamer1_stuck_z beamer2_stuck_x beamer2_stuck_y beamer2_stuck_z beamer3_stuck_x beamer3_stuck_y beamer3_stuck_z

    // ****************************************Mission Start************************************
}
