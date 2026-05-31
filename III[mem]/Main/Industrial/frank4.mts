// Generated from Main/Industrial/frank4.sc
import { $, FAIL } from '../../utils';

// *******************************************************************************************
// *******************************************************************************************
// ***********************************Final Industrial****************************************
// ***********************************go to commercial****************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_frank4

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_frank4_failed
    // ENDIF

    // GOSUB mission_cleanup_frank4

    // MISSION_END
    // Variables for mission

    //VAR_INT maria // mission specific ped

    // VAR_INT blip1_fm4 blip2_fm4 blip3_fm4 boat_blip

    // VAR_INT flag_player_got_frank4_message frank4_car1 frank4_car2

    // VAR_INT boat_mar bomb_car flag_car_blip_displayed_fm4

    // VAR_INT car_dead_once girls_attack_player

    // VAR_FLOAT boat_mar_X boat_mar_Y boat_mar_Z

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_frankie_mission = 1;
    // SCRIPT_NAME frank4
    await asyncWait(0);

    $.girls_attack_player = 0;
    $.car_dead_once = 0;

    Streaming.LoadSpecialCharacter(1, 'frankie');
    //LOAD_SPECIAL_CHARACTER 2 goon

    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
    Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'FRANKH');

    Streaming.RequestModel(PED_GANG_MAFIA_B);
    Streaming.RequestModel(541 /* franksclb02 */);
    Streaming.RequestModel(542 /* salvsdetail */);
    Streaming.RequestModel(540 /* swank_inside */);

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
        !Streaming.HasModelLoaded(PED_GANG_MAFIA_B)
    ) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(541 /* franksclb02 */) || !Streaming.HasModelLoaded(542 /* salvsdetail */) || !Streaming.HasModelLoaded(540 /* swank_inside */)) {
        await asyncWait(0);
    }

    Cutscene.Load('S5_LRQ');
    Cutscene.SetOffset(1457.776, -185.348, 54.925);

    $.cs_player = CutsceneObject.Create(PED_PLAYER);
    $.cs_player.setAnim('player');

    $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ1);
    $.cs_playerhead.setAnim('player');

    $.cs_frankie = CutsceneObject.Create(PED_SPECIAL1);
    $.cs_frankie.setAnim('frankie');

    $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, CUT_OBJ2);
    $.cs_frankiehead.setAnim('frank');

    $.cs_mafia = CutsceneObject.Create(PED_GANG_MAFIA_B);
    $.cs_mafia.setAnim('gang02');

    //CREATE_CUTSCENE_OBJECT PED_SPECIAL2 cs_mafia
    //SET_CUTSCENE_ANIM cs_mafia gang02

    $.player.setCoordinates(1455.2, -186.8, 55.0);

    $.player.setHeading(130.0);

    Camera.DoFade(1500, FADE_IN);

    //SWITCH_WORLD_PROCESSING OFF

    World.SwitchRubbish(OFF);
    Streaming.Switch(ON);
    Cutscene.Start();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 2397) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_A', 10000, 1); // Mission brief

    while ($.cs_time < 5260) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_B', 10000, 1); // Mission brief

    while ($.cs_time < 9273) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_C', 10000, 1); // Mission brief

    while ($.cs_time < 12861) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_D', 10000, 1); // Mission brief

    while ($.cs_time < 15447) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_E', 10000, 1); // Mission brief

    while ($.cs_time < 18080) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_F', 10000, 1); // Mission brief

    while ($.cs_time < 22832) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('FM4_H', 10000, 1); // Mission brief

    while ($.cs_time < 24908) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 26333) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Camera.DoFade(1000, FADE_OUT);

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
    Camera.SetBehindPlayer();

    await asyncWait(500);

    Camera.DoFade(1000, FADE_IN);

    Streaming.UnloadSpecialCharacter(1);
    //UNLOAD_SPECIAL_CHARACTER 2

    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_MAFIA_B);
    Streaming.MarkModelAsNoLongerNeeded(541 /* franksclb02 */);
    Streaming.MarkModelAsNoLongerNeeded(542 /* salvsdetail */);
    Streaming.MarkModelAsNoLongerNeeded(540 /* swank_inside */);
    //REQUEST_MODEL BOAT_SPEEDER
    //REQUEST_MODEL CAR_CHEETAH
    //LOAD_SPECIAL_MODEL cut_obj3 MARIAH
    //LOAD_SPECIAL_MODEL cut_obj4 ASUKAH

    /*
    WHILE NOT HAS_MODEL_LOADED cut_obj3
    OR NOT HAS_MODEL_LOADED cut_obj4
    WAIT 0
    ENDWHILE
    */

    Streaming.RequestModel(BOAT_REEFER);
    Streaming.RequestModel(CAR_CHEETAH);

    while (!Streaming.HasModelLoaded(BOAT_REEFER) || !Streaming.HasModelLoaded(CAR_CHEETAH)) {
        await asyncWait(0);
    }

    //GOTO skip_frank_cut1 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //CREATE SUBURBAN BARRIERS

    if ($.barriers_been_added == 0) {
        $.subway_gate_suburban1 = ScriptObject.CreateNoOffset(1280 /* subwaygate */, -672.0, -760.0, 8.3);
        $.subway_gate_suburban1.dontRemove();
        $.subway_gate_suburban1.setHeading(270.0);
        $.subway_gate_suburban2 = ScriptObject.CreateNoOffset(1280 /* subwaygate */, -672.0, -768.9, 8.3);
        $.subway_gate_suburban2.dontRemove();
        $.subway_gate_suburban2.setHeading(270.0);
        $.tunnel_gate_suburban = ScriptObject.CreateNoOffset(1281 /* tunnelentrance */, 533.3, 97.0, -21.3);
        $.tunnel_gate_suburban.dontRemove();
        $.tunnel_gate_suburban.setHeading(45.0);
        $.barriers_been_added = 1;
    }

    // START OF MISSION

    $.bomb_car = Car.Create(CAR_CHEETAH, 951.0, -421.0, 14.6);
    $.bomb_car.armWithBomb(CARBOMB_ONIGNITIONACTIVE);
    $.blip1_fm4 = Blip.AddForCar($.bomb_car);

    while (!$.player.isInZone('REDLIGH')) {
        await asyncWait(0);
        if (Car.IsDead($.bomb_car) && $.car_dead_once == 0) {
            $.blip1_fm4.remove();
            $.car_dead_once = 1;
        }
    }

    Pager.AddMessage('FM4_1', 140, 10, 2);

    $.blip2_fm4 = Blip.AddForCoord(835.7, -1091.7, -100.0);
    /*
    CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL2 835.6 -1110.7 2.0 maria
    ADD_BLIP_FOR_CHAR maria blip2_fm4
    CHAR_SET_IDLE maria
    CLEAR_CHAR_THREAT_SEARCH maria
    SET_CHAR_HEADING maria 345.0

    CREATE_CHAR PEDTYPE_SPECIAL PED_SPECIAL3 834.3 -1111.7 2.0 asuka
    CHAR_SET_IDLE asuka
    CLEAR_CHAR_THREAT_SEARCH asuka
    SET_CHAR_HEADING asuka 5.0
    */

    while (!$.player.locateStoppedInCar3D(827.3, -1084.3, 6.8, 5.0, 5.0, 4.0, true)) {
        await asyncWait(0);
        if (Car.IsDead($.bomb_car) && $.car_dead_once == 0) {
            $.blip1_fm4.remove();
            $.car_dead_once = 1;
        }
        if ($.player.locateOnFoot3D(827.3, -1084.3, 6.8, 5.0, 5.0, 4.0, false)) {
            break; // SCM GOTO → on_foot_frank4
        }

        /*
        IF IS_PLAYER_IN_CAR Player bomb_car
        GOTO mission_frank4_failed
        ENDIF
        */
    }

    on_foot_frank4: {
        $.player.setControl(OFF);

        //skip_frank_cut1: //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //SET_PLAYER_COORDINATES player 845.5 -1098.0 -100.0 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        Weather.ForceNow(WEATHER_SUNNY);

        $.blip1_fm4.remove();
        $.blip2_fm4.remove();

        //MEET MARIA ON THE INDUSTRIAL PIER CUT SCENE****************************************************************************

        $.breakout_timer_start = Clock.GetGameTimer();
        $.breakout_diff = 0;

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0);
            $.breakout_timer = Clock.GetGameTimer();
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
        }

        $.player.makeSafeForCutscene();

        //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1500, FADE_OUT);

        Streaming.Switch(OFF);

        Streaming.LoadSpecialCharacter(2, 'maria');
        Streaming.LoadSpecialCharacter(3, 'asuka');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'MARIAH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'ASUKAH');

        //PRINT_BIG ( FM4 ) 15000 2 //"Frankie Mission 4"

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        $.boat_mar = Boat.Create(BOAT_REEFER, 835.0, -1117.0, 0.4);
        $.boat_mar.setHeading(143.0);
        $.boat_mar.anchor(true);
        $.boat_mar.stop();

        Streaming.LoadAllModelsNow();

        while (!Streaming.HasSpecialCharacterLoaded(2) || !Streaming.HasSpecialCharacterLoaded(3)) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(186 /* cut_obj2 */) || !Streaming.HasModelLoaded(187 /* cut_obj3 */)) {
            await asyncWait(0);
        }

        Cutscene.Load('S5_LRQB');
        Cutscene.SetOffset(831.0839, -1114.2113, 0.1822);
        //SET_CUTSCENE_OFFSET 830.0839 -1114.2113 0.1822

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_maria = CutsceneObject.Create(PED_SPECIAL2);
        $.cs_maria.setAnim('maria');

        $.cs_asuka = CutsceneObject.Create(PED_SPECIAL3);
        $.cs_asuka.setAnim('asuka');

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        $.cs_mariahead = CutsceneHead.Create($.cs_maria, CUT_OBJ2);
        $.cs_mariahead.setAnim('maria');

        $.cs_asukahead = CutsceneHead.Create($.cs_asuka, CUT_OBJ3);
        $.cs_asukahead.setAnim('asuka');

        //SET_PLAYER_COORDINATES player 835.4 -1108.7 1.0

        //SET_PLAYER_HEADING player 230.0

        if (!Car.IsDead($.boat_mar)) {
            if ($.player.isInAnyCar()) {
                $.player.warpFromCarToCoord(835.4, -1108.7, 1.0);
            }
        }

        $.player.warpIntoCar($.boat_mar);

        Camera.DoFade(1500, FADE_IN);

        //SWITCH_WORLD_PROCESSING OFF

        World.SwitchRubbish(OFF);
        Streaming.Switch(ON);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 697) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_2', 10000, 1); // Mission brief

        while ($.cs_time < 3275) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_3', 10000, 1); // Mission brief

        while ($.cs_time < 6479) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_4', 10000, 1); // Mission brief

        while ($.cs_time < 9000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_4B', 10000, 1); // Mission brief

        while ($.cs_time < 11356) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_5', 10000, 1); // Mission brief

        while ($.cs_time < 13307) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_6', 10000, 1); // Mission brief

        while ($.cs_time < 16285) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_6B', 10000, 1); // Mission brief

        while ($.cs_time < 19438) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_7', 10000, 1); // Mission brief

        while ($.cs_time < 23340) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_8', 10000, 1); // Mission brief

        while ($.cs_time < 24733) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM4_9', 10000, 1); // Mission brief

        while ($.cs_time < 30156) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 31666) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        /*
        IF NOT IS_CAR_DEAD boat_mar
        SET_CAR_COORDINATES boat_mar 834.9 -1116.5 0.5
        SET_CAR_HEADING boat_mar 143.0
        ENDIF
        */

        Camera.DoFade(1000, FADE_OUT);

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
        $.player.setControl(ON);
        Camera.SetBehindPlayer();

        $.maria = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, 837.0, -1116.5, 1.8);
        $.maria.setOnlyDamagedByPlayer(true);
        $.maria.setHeading(17.0);
        $.maria.setStaysInCurrentLevel(false);
        $.maria.setIgnoreLevelTransitions(true);
        //boat_mar_Y = boat_mar_Y	- 1.0

        $.asuka = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL3, 836.6, -1114.6, 1.8);
        $.asuka.setOnlyDamagedByPlayer(true);
        $.asuka.setHeading(178.0);
        $.asuka.setStaysInCurrentLevel(false);
        $.asuka.setIgnoreLevelTransitions(true);

        Game.SetCharsChatting($.maria, $.asuka, 999999);

        $.asuka.turnToFaceChar($.maria);

        if (!Car.IsDead($.boat_mar)) {
            $.blip3_fm4 = Blip.AddForCoord(565.3, -678.4, -100.0);
            $.boat_blip = Blip.AddForCar($.boat_mar);
        }

        await asyncWait(500);

        Camera.DoFade(1000, FADE_IN);

        //UNLOAD_SPECIAL_CHARACTER 2
        //UNLOAD_SPECIAL_CHARACTER 3

        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ3);

        //GOTO skip_frank_cut2 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        if (!Car.IsDead($.boat_mar)) {
            $.boat_mar.anchor(false);
        }

        $.flag_car_blip_displayed_fm4 = 1 /* TRUE */;

        if (Char.IsDead($.asuka) || Char.IsDead($.maria)) {
            FAIL("mission_frank4_failed");
        }

        while (
            !$.player.isInArea3D(565.3, -678.4, -2.0, 575.3, -688.4, 4.0, true) ||
            !$.maria.isInArea3D(565.3, -678.4, -2.0, 575.3, -688.4, 4.0, false) ||
            !$.asuka.isInArea3D(565.3, -678.4, -2.0, 575.3, -688.4, 4.0, false)
        ) {
            //OR NOT IS_PLAYER_IN_CAR player boat_mar
            await asyncWait(0);
            if (Car.IsDead($.boat_mar)) {
                FAIL("mission_frank4_failed");
            }
            if (Char.IsDead($.asuka) || Char.IsDead($.maria)) {
                FAIL("mission_frank4_failed");
            }
            if ($.player.isInCar($.boat_mar)) {
                if ($.flag_car_blip_displayed_fm4 == 1 /* TRUE */) {
                    $.blip3_fm4.remove();
                    $.blip3_fm4 = Blip.AddForCoord(565.3, -678.4, -100.0);
                    $.boat_blip.remove();
                    $.flag_car_blip_displayed_fm4 = 0 /* FALSE */;
                }
            }
            if (!$.player.isInCar($.boat_mar)) {
                if ($.flag_car_blip_displayed_fm4 == 0 /* FALSE */) {
                    $.boat_blip.remove();
                    $.boat_blip = Blip.AddForCar($.boat_mar);
                    $.blip3_fm4.remove();
                    Text.PrintNow('IN_VEH', 5000, 1); //"Get back in the vehicle!"
                    $.flag_car_blip_displayed_fm4 = 1 /* TRUE */;
                }
            }
            if ($.girls_attack_player == 0) {
                if (!$.asuka.isHealthGreater(96) || !$.maria.isHealthGreater(96)) {
                    if (!Char.IsDead($.asuka)) {
                        $.asuka.setObjKillPlayerOnFoot($.player);
                        $.asuka.giveWeapon(WEAPONTYPE_UZI, 200);
                    }
                    if (!Char.IsDead($.maria)) {
                        $.maria.setObjKillPlayerOnFoot($.player);
                        $.maria.giveWeapon(WEAPONTYPE_UZI, 200);
                    }
                    $.girls_attack_player = 1;
                }
            }
        }

        if (!Car.IsDead($.boat_mar)) {
            $.boat_mar.anchor(true);
            $.boat_mar.stop();
        }

        Text.ClearPrints();
        $.blip3_fm4.remove();

        //skip_frank_cut2: //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //SET_PLAYER_COORDINATES player 559.4 -791.9 -100.0 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        //EVERYONE OFF THE BOAT IN COMMERCIAL CUTSCENE**************************************************************************

        $.breakout_timer_start = Clock.GetGameTimer();
        $.breakout_diff = 0;

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0);
            if (Car.IsDead($.boat_mar)) {
                FAIL("mission_frank4_failed");
            }
            if (Char.IsDead($.asuka) || Char.IsDead($.maria)) {
                FAIL("mission_frank4_failed");
            }
            $.breakout_timer = Clock.GetGameTimer();
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
        }

        $.player.makeSafeForCutscene();

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1000, FADE_OUT);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Streaming.LoadCollisionWithScreen(2 /* Level_commercial */);

        if (!Car.IsDead($.boat_mar)) {
            if ($.player.isInAnyCar()) {
                $.player.warpFromCarToCoord(515.1, -650.9, 16.0); //612.3 -674.5 1.8
            }
        }

        $.player.setCoordinates(515.1, -650.9, 16.0); //612.3 -674.5 1.8
        $.player.setHeading(90.0);

        Streaming.Switch(OFF);

        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'MARIAH');
        Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'ASUKAH');
        Streaming.RequestModel(CAR_YAKUZA);
        Streaming.RequestModel(CAR_BLISTA);

        //PRINT_BIG ( FM4 ) 15000 2 //"Frankie Mission 4"

        Streaming.LoadAllModelsNow();

        while (!Streaming.HasModelLoaded(185 /* cut_obj1 */) || !Streaming.HasModelLoaded(186 /* cut_obj2 */) || !Streaming.HasModelLoaded(187 /* cut_obj3 */)) {
            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(CAR_YAKUZA) || !Streaming.HasModelLoaded(CAR_BLISTA)) {
            await asyncWait(0);
        }

        $.maria.delete();
        $.asuka.delete();

        Cutscene.Load('S5_LRQC');
        Cutscene.SetOffset(523.102, -636.96, 15.616); //563.0 -683.0 1.8

        $.cs_player = CutsceneObject.Create(PED_PLAYER);
        $.cs_player.setAnim('player');

        $.cs_maria = CutsceneObject.Create(PED_SPECIAL2);
        $.cs_maria.setAnim('maria');

        $.cs_asuka = CutsceneObject.Create(PED_SPECIAL3);
        $.cs_asuka.setAnim('asuka');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, CUT_OBJ1);
        $.cs_playerhead.setAnim('player');

        $.cs_mariahead = CutsceneHead.Create($.cs_maria, CUT_OBJ2);
        $.cs_mariahead.setAnim('maria');

        $.cs_asukahead = CutsceneHead.Create($.cs_asuka, CUT_OBJ3);
        $.cs_asukahead.setAnim('asuka');

        Camera.DoFade(1000, FADE_IN);

        $.player.setCoordinates(515.1, -650.9, 16.0);
        $.player.setHeading(90.0);

        $.frank4_car1 = Car.Create(CAR_YAKUZA, 500.0, -659.4, -100.0);

        $.frank4_car2 = Car.Create(CAR_BLISTA, 486.5, -643.6, -100.0);

        Streaming.MarkModelAsNoLongerNeeded(CAR_YAKUZA);
        Streaming.MarkModelAsNoLongerNeeded(CAR_BLISTA);
        $.frank4_car1.markAsNoLongerNeeded();
        $.frank4_car2.markAsNoLongerNeeded();

        //SWITCH_WORLD_PROCESSING OFF

        World.SwitchRubbish(OFF);
        Streaming.Switch(ON);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 12345) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_1', 5000, 1); // Mission brief

        while ($.cs_time < 14476) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_2', 5000, 1); // Mission brief

        while ($.cs_time < 16021) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_3', 5000, 1); // Mission brief

        while ($.cs_time < 17946) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_4', 5000, 1); // Mission brief

        while ($.cs_time < 21438) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_5', 5000, 1); // Mission brief

        while ($.cs_time < 23312) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('LRQC_6', 5000, 1); // Mission brief

        while ($.cs_time < 25177) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearPrints();

        while ($.cs_time < 28000) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1000, FADE_OUT);

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
        Camera.SetInFrontOfPlayer();
        //SET_CAMERA_BEHIND_PLAYER

        await asyncWait(500);

        Camera.DoFade(1000, FADE_IN);

        Streaming.UnloadSpecialCharacter(2);
        Streaming.UnloadSpecialCharacter(3);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
        Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ3);
        Weather.Release();
    }

    return; // SCM GOTO → mission_frank4_passed
}

// Mission frank4 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"
}

// mission frank4 passed
async function onPassed() {
    $.flag_frankie_mission4_passed = 1;
    $.flag_industrial_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Stat.SetIndustrialPassed();
    $.bridge_is_damaged = 1;
    //SWAP BRIDGE FROM DAMAGED TO FIXED

    World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
    World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1140 /* nbbridgfk2 */, 1141 /* nbbridgcabls01 */);
    World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
    World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1147 /* damgbridgerdb */, 1143 /* nbbridgerdb */);
    World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);
    World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1146 /* damgbbridgerda */, 1145 /* nbbridgerda */);

    World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
    World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1187 /* lodridgfk2 */, 1181 /* lodridgcabls01 */);
    World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
    World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1185 /* lodgbridgerdb */, 1183 /* lodridgerdb */);
    World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);
    World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1186 /* lodgbbridgerda */, 1184 /* lodridgerda */);

    World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, false);

    World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, 218 /* LOD_land014 */);

    $.subway_gate_industrial.delete();
    $.tunnel_gate_industrial.delete();

    if ($.ammu2_blip_added == 0) {
        $.com_ammu_nation2 = Blip.AddSpriteForCoord(345.5, -713.5, 26.1, RADAR_SPRITE_WEAPON);
        $.com_sprayshop2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, RADAR_SPRITE_SPRAY);
        $.ammu2_blip_added = 1;
    }

    Path.SwitchRoadsOn(619.6, -911.5, 45.0, 834.3, -954.5, 32.0); //Industrial to commercial Bridge
    Path.SwitchRoadsOn(659.6, 200.0, -20.0, 945.8, 147.5, 5.0); //Tunnel
    Path.SwitchRoadsOn(529.6, 106.5, -30.0, 581.4, 65.7, 0.0); //tunnel from commercial to intersection for sub and ind
    Stat.RegisterMissionPassed('FM4');
    Stat.PlayerMadeProgress(1);
    $.com_car23.switch(101);
    $.frankie_contact_blip.remove();
    $.luigi_contact_blip.remove();
    $.toni_contact_blip.remove();
    $.joey_contact_blip.remove();
    Text.PrintWithNumberBig('M_PASS', 20000, 5000, 1); //"Mission Passed!"
    $.player.addScore(20000);
    // START_NEW_SCRIPT asuka_mission1_loop
    $.asuka_contact_blip.remove();
    $.asuka_contact_blip = Blip.AddSpriteForContactPoint(523.7, -643.0, 16.1, RADAR_SPRITE_ASUKA);
}

// mission cleanup
async function cleanup() {
    ONMISSION = false;
    $.flag_player_on_frankie_mission = 0;
    $.blip1_fm4.remove();
    $.blip2_fm4.remove();
    $.blip3_fm4.remove();
    $.boat_blip.remove();
    Weather.Release();
    Streaming.MarkModelAsNoLongerNeeded(BOAT_REEFER);
    Streaming.MarkModelAsNoLongerNeeded(CAR_CHEETAH);
    Streaming.MarkModelAsNoLongerNeeded(CAR_YAKUZA);
    Streaming.MarkModelAsNoLongerNeeded(CAR_BLISTA);
    $.maria.removeElegantly();
    $.asuka.removeElegantly();
    //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

    Streaming.UnloadSpecialCharacter(2);
    Streaming.UnloadSpecialCharacter(3);
    Mission.Finish();
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
