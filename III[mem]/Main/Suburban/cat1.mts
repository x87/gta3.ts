// Generated from Main/Suburban/cat1.sc
import { SfxMission } from '../../../.config/enums';
import { $, FAIL } from '../../utils';
// *******************************************************************************************
// *******************************************************************************************
// *************************************Cat mission 1*****************************************
// *************************************FINAL MISSION*****************************************
// *******************************************************************************************
// *******************************************************************************************
// *******************************************************************************************

async function body() {
    // Mission start stuff

    // GOSUB mission_start_cat1

    // IF HAS_DEATHARREST_BEEN_EXECUTED
    // 	GOSUB mission_cat1_failed
    // ENDIF

    // GOSUB mission_cleanup_cat1

    // Variables for mission

    // VAR_INT blip1_cat1 marias_blip
    // VAR_INT colubian_guard1 colubian_guard2 colubian_guard3 colubian_guard4 colubian_guard5 colubian_guard6 colubian_guard7 colubian_guard8
    // VAR_INT colubian_guard9 colubian_guard10 colubian_guard11 colubian_guard12 colubian_guard13 colubian_guard14 colubian_guard15 colubian_guard16
    // VAR_INT colubian_guard17 colubian_guard18 colubian_guard19 colubian_guard20 colubian_guard21 colubian_guard22 colubian_guard23 colubian_guard24
    // VAR_INT colubian_guard25 colubian_guard26
    // VAR_INT colubian_car1 colubian_car2 colubian_car3 colubian_car4 colubian_car5 colubian_car6 colubian_car7 colubian_car8
    // VAR_INT escape_chopper set_as_leader_before been_on_heli_pad Dead_guards_gun
    // VAR_INT countdown_cat1 rocket_launch added_the_blip_for_maria maria_created_before
    // VAR_INT camera_cut first_credits_loop
    // VAR_INT shaggin_waggin maria_prossie
    // VAR_FLOAT playerx_cat playery_cat playerz_cat

    // ***************************************Mission Start*************************************

    Stat.RegisterMissionGiven();
    ONMISSION = true;
    $.flag_player_on_cat_mission = 1;
    // SCRIPT_NAME cat1
    await asyncWait(0);

    $.added_the_blip_for_maria = 0;
    $.been_on_heli_pad = 0;
    $.set_as_leader_before = 0;
    $.maria_created_before = 0;
    ONMISSION = true;
    $.camera_cut = 0;

    Zone.SetPedInfo('WEE_DAM', DAY, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    Zone.SetPedInfo('WEE_DAM', NIGHT, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    Zone.SetCarInfo('WEE_DAM', DAY, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    Zone.SetCarInfo('WEE_DAM', NIGHT, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    $.player.clearWantedLevel();

    Streaming.LoadSpecialCharacter(1, 'Maria');
    Streaming.LoadSpecialCharacter(2, 'cat');
    Streaming.LoadSpecialCharacter(3, 'col2');
    Streaming.LoadSpecialCharacter(4, 'colrob');
    Streaming.LoadSpecialModel(CUT_OBJ1, 'fulcase');
    Streaming.LoadSpecialModel(CUT_OBJ2, 'cath');
    Streaming.RequestModel(PED_GANG_COLOMBIAN_A);
    Streaming.RequestModel(PED_GANG_COLOMBIAN_B);
    Streaming.RequestModel(CAR_COLUMB);
    Streaming.RequestModel(CAR_FLATBED);
    Streaming.RequestModel(2570 /* New_Colmansn */);
    Streaming.RequestModel(2343 /* landpart15 */);
    Streaming.RequestModel(2559 /* Security_Hut */);
    Streaming.RequestModel(2384 /* columansion_wall */);

    Streaming.LoadAllModelsNow();

    while (
        !Streaming.HasSpecialCharacterLoaded(1) ||
        !Streaming.HasSpecialCharacterLoaded(2) ||
        !Streaming.HasSpecialCharacterLoaded(4) ||
        !Streaming.HasModelLoaded(CUT_OBJ1) ||
        !Streaming.HasModelLoaded(CUT_OBJ2)
    ) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(PED_GANG_COLOMBIAN_A) || !Streaming.HasModelLoaded(PED_GANG_COLOMBIAN_B)) {
        await asyncWait(0);
    }

    while (
        !Streaming.HasModelLoaded(CAR_COLUMB) ||
        !Streaming.HasModelLoaded(2570 /* New_Colmansn */) ||
        !Streaming.HasModelLoaded(2343 /* landpart15 */) ||
        !Streaming.HasModelLoaded(2559 /* Security_Hut */) ||
        !Streaming.HasModelLoaded(2384 /* columansion_wall */)
    ) {
        await asyncWait(0);
    }

    Streaming.LoadScene(-363.5, 243.5, 59.3);

    Cutscene.Load('C1_TEX');
    Cutscene.SetOffset(-358.553, 249.189, 59.329);

    $.cs_player = CutsceneObject.Create(PED_PLAYER);
    $.cs_player.setAnim('player');

    $.cs_maria = CutsceneObject.Create(PED_SPECIAL1);
    $.cs_maria.setAnim('maria');

    $.cs_cat = CutsceneObject.Create(PED_SPECIAL2);
    $.cs_cat.setAnim('cat');

    //CREATE_CUTSCENE_OBJECT PED_SPECIAL3 cs_colub1
    //SET_CUTSCENE_ANIM cs_colub1 col2 //(unarmed)

    $.cs_colub2 = CutsceneObject.Create(PED_SPECIAL4);
    $.cs_colub2.setAnim('colrob'); //(Pistol)

    $.cs_colub3 = CutsceneObject.Create(PED_GANG_COLOMBIAN_A);
    $.cs_colub3.setAnim('gang11'); //(unarmed)

    $.cs_colub4 = CutsceneObject.Create(PED_GANG_COLOMBIAN_B);
    $.cs_colub4.setAnim('gang12'); //(unarmed)

    $.cs_case = CutsceneObject.Create(CUT_OBJ1);
    $.cs_case.setAnim('fulcase');

    $.cs_cathead = CutsceneHead.Create($.cs_cat, CUT_OBJ2);
    $.cs_cathead.setAnim('cat');

    $.colubian_car1 = Car.Create(CAR_COLUMB, -422.9, 291.8, 61.8);
    $.colubian_car1.setHeading(226.0);

    $.colubian_guard1 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -395.4, 293.4, -100.0); //Near Cat
    $.colubian_guard1.giveWeapon(WEAPONTYPE_UZI, 200);
    //ADD_ARMOUR_TO_CHAR colubian_guard1 100

    $.colubian_guard3 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -368.1, 252.4, -100.0); //Guarding gate (west)
    $.colubian_guard3.giveWeapon(WEAPONTYPE_UZI, 200);
    $.colubian_guard3.setHeading(0.0);

    $.colubian_guard4 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -358.0, 251.8, -100.0); //Guarding gate	(east)
    $.colubian_guard4.giveWeapon(WEAPONTYPE_UZI, 200);
    $.colubian_guard4.setHeading(0.0);

    $.colubian_guard12 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -392.4, 301.0, 70.7); //On masion balcony (west)
    $.colubian_guard12.giveWeapon(WEAPONTYPE_CHAINGUN, 200);
    $.colubian_guard12.setHeading(0.0);
    $.colubian_guard12.setStayInSamePlace(true);

    $.colubian_guard13 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -374.0, 301.0, 70.7); //On masion balcony (east)
    $.colubian_guard13.giveWeapon(WEAPONTYPE_CHAINGUN, 200);
    $.colubian_guard13.setHeading(0.0);
    $.colubian_guard13.setStayInSamePlace(true);

    Game.SetEveryoneIgnorePlayer($.player, ON);

    $.colubian_guard1.turnToFacePlayer($.player);
    $.colubian_guard12.turnToFacePlayer($.player);
    $.colubian_guard13.turnToFacePlayer($.player);
    World.ClearArea(-362.8, 246.5, 60.0, 4.5, true);

    $.colubian_guard2 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -380.1, 282.6, -100.0); //Dead guard
    $.colubian_guard2.setHeading(229.0);
    $.colubian_guard2.setHealth(0);

    Camera.DoFade(1500, FADE_IN);

    World.SwitchRubbish(OFF);
    Streaming.Switch(ON);
    Cutscene.Start();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 22000) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    $.player.setCoordinates(-363.3, 253.0, -100.0);
    //PRINT_NOW ( CAT2_A1 ) 3000 2 // Mission brief

    while ($.cs_time < 32166) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_A', 10000, 2); // Mission brief

    while ($.cs_time < 38548) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_B', 10000, 2); // Mission brief

    while ($.cs_time < 40043) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_B2', 10000, 2); // Mission brief

    while ($.cs_time < 43684) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_C', 10000, 2); // Mission brief

    while ($.cs_time < 45711) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_D', 10000, 2); // Mission brief

    while ($.cs_time < 52048) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_E', 10000, 2); // Mission brief

    while ($.cs_time < 54527) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_E2', 10000, 2); // Mission brief

    while ($.cs_time < 57558) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('CAT2_E3', 10000, 2); // Mission brief

    while ($.cs_time < 58661) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.ClearPrints();

    while ($.cs_time < 65000) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    //DO_FADE 1500 FADE_OUT

    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE

    Text.ClearPrints();

    $.Dead_guards_gun = Pickup.CreateWithAmmo(WEAPON_COLT45, PICKUP_ONCE, 48, -380.1, 282.6, 62.6);
    World.ClearArea(-381.8, 284.0, 62.9, 1.0, true);
    $.player.setCoordinates(-381.8, 284.0, -100.0);
    $.player.setHeading(232.0);

    while (!Cutscene.HasFinished()) {
        await asyncWait(0);
    }

    //SWITCH_WORLD_PROCESSING ON

    World.SwitchRubbish(ON);
    Cutscene.Clear();
    Game.SetEveryoneIgnorePlayer($.player, ON);
    Camera.SetBehindPlayer();

    $.player.removeAllWeapons();

    //WAIT 500

    //DO_FADE 1500 FADE_IN

    if ($.nicked_half_a_mil_before == 0) {
        $.player.addScore(-500000);
        $.nicked_half_a_mil_before = 1;
    }

    Streaming.UnloadSpecialCharacter(3);
    Streaming.UnloadSpecialCharacter(4);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ1);
    Streaming.MarkModelAsNoLongerNeeded(CUT_OBJ2);
    Streaming.MarkModelAsNoLongerNeeded(2570 /* New_Colmansn */);
    Streaming.MarkModelAsNoLongerNeeded(2343 /* landpart15 */);
    Streaming.MarkModelAsNoLongerNeeded(2559 /* Security_Hut */);
    Streaming.MarkModelAsNoLongerNeeded(2384 /* columansion_wall */);

    while (!Streaming.HasModelLoaded(CAR_FLATBED)) {
        await asyncWait(0);
    }

    Text.PrintNow('CATINF1', 5000, 2); // Mission brief

    await asyncWait(1000);

    Game.SetEveryoneIgnorePlayer($.player, OFF);
    //GOTO last_cutscene //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //flag_cat_mission1_passed = 1
    //START_NEW_SCRIPT credits_loop
    //GOSUB credits

    $.countdown_cat1 = 421000;
    Hud.DisplayTimer($.$id.countdown_cat1);
    if (!Char.IsDead($.colubian_guard1) && !Char.IsDead($.colubian_guard2) && !Char.IsDead($.colubian_guard12) && !Char.IsDead($.colubian_guard13)) {
        $.colubian_guard1.setObjKillPlayerAnyMeans($.player);
        $.colubian_guard1.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard2.setObjKillPlayerAnyMeans($.player);
        $.colubian_guard2.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard12.setObjKillPlayerAnyMeans($.player);
        $.colubian_guard12.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard13.setObjKillPlayerAnyMeans($.player);
        $.colubian_guard13.setThreatSearch(THREAT_PLAYER1);
    }

    if (!Char.IsDead($.colubian_guard3) && !Char.IsDead($.colubian_guard4)) {
        $.colubian_guard3.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard4.setThreatSearch(THREAT_PLAYER1);
    }

    Path.SwitchPedRoadsOff(-942.6, 337.0, 10.0, -953.6, 361.4, 30.0); // DAM

    while ($.player.isInArea3D(-448.0, 241.7, 50.0, -292.4, 365.2, 90.0, false)) {
        await asyncWait(0);
        if ($.countdown_cat1 == 0) {
            FAIL("mission_cat1_failed");
        }
        $.player.clearWantedLevel();
    }

    CatalinaHeli.Start();

    $.escape_chopper = -1 as any;

    while ($.escape_chopper == (-1 as any)) {
        await asyncWait(0);
        $.escape_chopper = CatalinaHeli.Grab();
    }

    await asyncWait(1000);

    if (!Car.IsDead($.escape_chopper)) {
        $.blip1_cat1 = Blip.AddForCar($.escape_chopper);
        $.blip1_cat1.changeDisplay(BLIP_ONLY);
        Camera.SetFixedPosition(-364.5, 243.7, 62.7, 0.0, 0.0, 0.0);
        Camera.PointAtCar($.escape_chopper, FIXED, INTERPOLATION);
        Hud.SwitchWidescreen(ON);
        $.player.setControl(OFF);
        Game.SetPoliceIgnorePlayer($.player, ON);
        Game.SetEveryoneIgnorePlayer($.player, ON);
        $.escape_chopper.setProofs(true, true, true, true, true);
    }

    if ($.player.isInAnyCar()) {
        $.player.applyBrakesToCar(ON);
    }

    await asyncWait(5000);

    Camera.Restore();
    Hud.SwitchWidescreen(OFF);
    $.player.setControl(ON);
    $.player.applyBrakesToCar(OFF);
    Game.SetPoliceIgnorePlayer($.player, OFF);
    Game.SetEveryoneIgnorePlayer($.player, OFF);

    if ($.player.isInAnyCar()) {
        $.player.applyBrakesToCar(OFF);
    }

    Text.PrintNow('CATINF2', 5000, 2); // Mission brief

    before_end_of_game: {
        while (!$.player.isInZone('BIG_DAM')) {
            await asyncWait(0);
            if ($.countdown_cat1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_cat1_failed");
            }
            if (CatalinaHeli.HasBeenShotDown()) {
                break before_end_of_game; // SCM GOTO → end_of_game
            }
            $.player.clearWantedLevel();
        }

        Game.SetThreatForPedType(PEDTYPE_GANG_COLOMBIAN, THREAT_PLAYER1);
        Gang.SetWeapons(GANG_COLOMBIAN, WEAPONTYPE_UZI, WEAPONTYPE_CHAINGUN); //The COLUMBIANS

        $.colubian_guard1.markAsNoLongerNeeded();
        $.colubian_guard2.markAsNoLongerNeeded();
        $.colubian_guard3.markAsNoLongerNeeded();
        $.colubian_guard4.markAsNoLongerNeeded();

        $.colubian_car6 = Car.Create(CAR_COLUMB, -946.8, 310.0, -100.0);
        $.colubian_car6.setHeading(104.7);

        $.colubian_car7 = Car.Create(CAR_COLUMB, -952.3, 310.3, -100.0);
        $.colubian_car7.setHeading(78.8);

        $.colubian_guard14 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -955.5, 309.7, -100.0); //guards by 1st columbian block
        $.colubian_guard14.setHeading(220.0);
        $.colubian_guard14.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard14 100

        $.colubian_guard14.giveWeapon(WEAPONTYPE_CHAINGUN, 500);

        $.colubian_guard15 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -943.0, 311.0, -100.0); //guards by 1st columbian block
        $.colubian_guard15.setHeading(176.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard15 100

        $.colubian_guard15.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard15.giveWeapon(WEAPONTYPE_CHAINGUN, 500);

        $.colubian_car2 = Car.Create(CAR_COLUMB, -1035.7, 464.1, -100.0);
        $.colubian_car2.setHeading(194.0);

        $.colubian_car3 = Car.Create(CAR_COLUMB, -1033.8, 458.9, -100.0);
        $.colubian_car3.setHeading(330.8);

        $.rocket_launch = Pickup.CreateWithAmmo(WEAPON_ROCKET, PICKUP_ONCE, 3, -1149.7, 347.7, 30.4);

        while (!$.player.isInZone('WEE_DAM')) {
            await asyncWait(0);
            if ($.countdown_cat1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_cat1_failed");
            }
            if (CatalinaHeli.HasBeenShotDown()) {
                break before_end_of_game; // SCM GOTO → end_of_game
            }
            $.player.clearWantedLevel();
        }

        Game.SetPoliceIgnorePlayer($.player, ON);

        //SET_GANG_PLAYER_ATTITUDE GANG_COLOMBIAN HATES player //The COLUMBIANS

        //SWITCH_PED_ROADS_ON -952.5 361.4 10.0 -939.3 374.0 30.0 // DAM
        /*
        SETUP_ZONE_PED_INFO WEE_DAM DAY   (15) 0 0 0 0 0 1000 0 0
        SETUP_ZONE_PED_INFO WEE_DAM NIGHT (15) 0 0 0 0 0 1000 0 0
        SETUP_ZONE_CAR_INFO WEE_DAM DAY   (0) 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        SETUP_ZONE_CAR_INFO WEE_DAM NIGHT (0) 0 0 0 0 0 0 0 0 0 0 0 0 0	0
        */

        while (!$.player.isInArea3D(-927.4, 391.5, 50.0, -1124.3, 485.1, 0.0, false)) {
            await asyncWait(0);
            if ($.countdown_cat1 == 0) {
                FAIL("mission_cat1_failed");
            }
            if (CatalinaHeli.HasBeenShotDown()) {
                break before_end_of_game; // SCM GOTO → end_of_game
            }
            $.player.clearWantedLevel();
        }

        $.colubian_guard14.markAsNoLongerNeeded();
        $.colubian_guard15.markAsNoLongerNeeded();
        $.colubian_car6.markAsNoLongerNeeded();
        $.colubian_car7.markAsNoLongerNeeded();

        $.colubian_guard5 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1037.2, 467.9, -100.0); //guards by 2nd columbian block
        $.colubian_guard5.setHeading(272.0);
        $.colubian_guard5.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard5 100

        $.colubian_guard5.giveWeapon(WEAPONTYPE_M16, 500);

        $.colubian_guard6 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1035.0, 454.8, -100.0); //guards by 2nd columbian block
        $.colubian_guard6.setHeading(247.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard6 100

        $.colubian_guard6.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard6.giveWeapon(WEAPONTYPE_M16, 500);

        $.colubian_guard7 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1087.8, 472.0, -100.0); //Fist guard on tower
        $.colubian_guard7.setHeading(237.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard7 100

        $.colubian_guard7.setStayInSamePlace(true);
        $.colubian_guard7.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard7.giveWeapon(WEAPONTYPE_M16, 500);
        $.colubian_guard7.setAccuracy(40);

        $.colubian_guard8 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1142.3, 445.3, -100.0); //Fist guard on second tower
        $.colubian_guard8.setHeading(287.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard8 100

        $.colubian_guard8.setStayInSamePlace(true);
        $.colubian_guard8.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard8.giveWeapon(WEAPONTYPE_M16, 500);
        $.colubian_guard8.setAccuracy(40);

        $.colubian_car4 = Car.Create(CAR_FLATBED, -1086.1, 464.4, -100.0);
        $.colubian_car4.setHeading(215.0);

        $.colubian_car5 = Car.Create(CAR_FLATBED, -1174.8, 406.9, -100.0);
        $.colubian_car5.setHeading(322.0);

        $.colubian_car8 = Car.Create(CAR_FLATBED, -1164.2, 393.7, -100.0);
        $.colubian_car8.setHeading(23.8);

        $.colubian_guard16 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1065.3, 453.8, -100.0); //guards by 2nd columbian block
        $.colubian_guard16.setHeading(289.0);
        $.colubian_guard16.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard16 100

        $.colubian_guard16.giveWeapon(WEAPONTYPE_CHAINGUN, 500);
        $.colubian_guard16.setStayInSamePlace(true);

        $.colubian_guard17 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1066.3, 475.8, -100.0); //guards by 2nd columbian block
        $.colubian_guard17.setHeading(224.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard17 100

        $.colubian_guard17.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard17.giveWeapon(WEAPONTYPE_CHAINGUN, 500);

        $.colubian_guard18 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1104.9, 440.1, -100.0); //On boxes
        $.colubian_guard18.setHeading(292.0);
        $.colubian_guard18.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard18 100

        $.colubian_guard18.giveWeapon(WEAPONTYPE_M16, 500);

        $.colubian_guard19 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1125.4, 448.8, -100.0); //On boxes
        $.colubian_guard19.setHeading(272.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard19 100

        $.colubian_guard19.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard19.giveWeapon(WEAPONTYPE_M16, 500);
        $.colubian_guard19.setStayInSamePlace(true);

        $.colubian_guard22 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1159.5, 424.2, -100.0); //By boxes
        $.colubian_guard22.setHeading(278.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard22 100

        $.colubian_guard22.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard22.giveWeapon(WEAPONTYPE_CHAINGUN, 500);

        $.colubian_guard23 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1170.0, 379.9, -100.0); //ground near heli pad
        $.colubian_guard23.setHeading(309.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard23 100

        $.colubian_guard23.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard23.giveWeapon(WEAPONTYPE_CHAINGUN, 500);

        $.colubian_guard24 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1171.7, 384.8, -100.0); //ground near heli pad
        $.colubian_guard24.setHeading(309.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard24 100

        $.colubian_guard24.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard24.giveWeapon(WEAPONTYPE_M16, 500);

        $.colubian_guard26 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1156.8, 407.5, -100.0); //ground near heli pad
        $.colubian_guard26.setHeading(319.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard26 100

        $.colubian_guard26.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard26.giveWeapon(WEAPONTYPE_M16, 500);

        while (!$.player.isInArea3D(-1111.2, 446.0, 20.0, -1221.7, 366.6, 30.0, false)) {
            await asyncWait(0);
            if ($.countdown_cat1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_cat1_failed");
            }
            if (CatalinaHeli.HasBeenShotDown()) {
                break before_end_of_game; // SCM GOTO → end_of_game
            }
            $.player.clearWantedLevel();
        }

        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard5
        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard6
        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard7
        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard8
        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard16
        //MARK_CHAR_AS_NO_LONGER_NEEDED colubian_guard17

        $.colubian_car2.markAsNoLongerNeeded();
        $.colubian_car3.markAsNoLongerNeeded();

        $.colubian_guard9 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1183.0, 370.9, -100.0); //Below Heli Pad with flame thrower
        $.colubian_guard9.setHeading(342.0);
        $.colubian_guard9.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard9 100

        $.colubian_guard9.giveWeapon(WEAPONTYPE_FLAMETHROWER, 1000);
        $.colubian_guard9.setAccuracy(30);

        $.colubian_guard10 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B, -1204.9, 343.0, -100.0); //On heli pad with flame thrower
        $.colubian_guard10.setHeading(342.0);
        //ADD_ARMOUR_TO_CHAR colubian_guard10 100

        $.colubian_guard10.setThreatSearch(THREAT_PLAYER1);
        $.colubian_guard10.giveWeapon(WEAPONTYPE_FLAMETHROWER, 1000);
        $.colubian_guard10.setStayInSamePlace(true);

        $.colubian_guard20 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1188.5, 368.0, -100.0); //On heli pad with M16
        $.colubian_guard20.setHeading(7.0);
        $.colubian_guard20.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard20 100

        $.colubian_guard20.giveWeapon(WEAPONTYPE_M16, 1000);
        $.colubian_guard20.setAccuracy(30);
        $.colubian_guard20.setStayInSamePlace(true);

        $.colubian_guard21 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1176.3, 357.1, -100.0); //On heli pad with AK47
        $.colubian_guard21.setHeading(58.0);
        $.colubian_guard21.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard21 100

        $.colubian_guard21.giveWeapon(WEAPONTYPE_CHAINGUN, 1000);
        $.colubian_guard21.setAccuracy(30);
        $.colubian_guard21.setStayInSamePlace(true);

        $.colubian_guard25 = Char.Create(PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_A, -1199.4, 334.1, -100.0); //On heli pad with AK47
        $.colubian_guard25.setHeading(3.0);
        $.colubian_guard21.setThreatSearch(THREAT_PLAYER1);
        //ADD_ARMOUR_TO_CHAR colubian_guard25 100

        $.colubian_guard25.giveWeapon(WEAPONTYPE_CHAINGUN, 1000);
        $.colubian_guard25.setAccuracy(30);
        $.colubian_guard25.setStayInSamePlace(true);

        $.maria = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL1, -1201.6, 338.6, -100.0);
        $.maria.setProofs(true, true, true, true, true);
        $.maria.setAnimGroup(ANIM_SEXY_WOMANPED);
        $.maria.lookAtPlayerAlways($.player);
        $.maria.setHeading(339.0);
        $.maria_created_before = 1;

        $.catalina = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL2, -1182.0, 346.1, -100.0);
        $.catalina.setProofs(true, true, true, true, true);
        $.catalina.setAnimGroup(ANIM_SEXY_WOMANPED);

        //SHORT CATALINA ESCAPE CUT SCENE

        if (!Char.IsDead($.catalina)) {
            Camera.SetFixedPosition(-1190.6, 334.4, 32.1, 0.0, 0.0, 0.0);
            Camera.PointAtChar($.maria, FIXED, JUMP_CUT);
            $.player.setControl(OFF);
            Hud.SwitchWidescreen(ON);
            //SET_POLICE_IGNORE_PLAYER player ON
            Game.SetEveryoneIgnorePlayer($.player, ON);
            if ($.player.isInAnyCar()) {
                $.player.applyBrakesToCar(ON);
            }
            Audio.LoadMissionAudio(SfxMission.C_1);
            await asyncWait(3000);
            if (!Char.IsDead($.catalina)) {
                Camera.PointAtChar($.catalina, FIXED, INTERPOLATION);
                $.catalina.setObjRunToCoord(-1163.3, 341.2);
                Text.PrintNow('CAT2_J', 3000, 2); // Mission brief
            }
            while (!Audio.HasMissionAudioLoaded()) {
                await asyncWait(0);
            }
            Audio.PlayMissionAudio();
        }

        await asyncWait(3000);

        //SWITCH_ROADS_ON -952.5 361.4 10.0 -939.3 374.0 30.0 // DAM

        Hud.SwitchWidescreen(OFF);
        $.player.setControl(ON);
        Camera.RestoreJumpcut();
        $.catalina.delete();
        //SET_POLICE_IGNORE_PLAYER Player OFF

        Game.SetEveryoneIgnorePlayer($.player, OFF);

        if ($.player.isInAnyCar()) {
            $.player.applyBrakesToCar(OFF);
        }

        await asyncWait(1000);

        if (!Char.IsDead($.maria)) {
            $.maria.setProofs(false, false, false, false, false);
        }

        if (!Car.IsDead($.escape_chopper)) {
            $.escape_chopper.setProofs(false, false, false, false, false);
            CatalinaHeli.TakeOff();
        }

        if (!Car.IsDead($.colubian_car5)) {
            $.colubian_guard11 = Char.CreateInsideCar($.colubian_car5, PEDTYPE_GANG_COLOMBIAN, PED_GANG_COLOMBIAN_B);
            $.colubian_guard11.giveWeapon(WEAPONTYPE_CHAINGUN, 300);
            $.colubian_car5.setMission(MISSION_RAMPLAYER_FARAWAY);
            $.colubian_car5.setCruiseSpeed(40.0);
            $.colubian_car5.setDrivingStyle(3);
        }

        while (!CatalinaHeli.HasBeenShotDown()) {
            await asyncWait(0);
            const { x, y, z } = $.player.getCoordinates();
            $.playerx_cat = x;
            $.playery_cat = y;
            $.playerz_cat = z;
            if ($.countdown_cat1 == 0) {
                Text.PrintNow('OUTTIME', 5000, 1);
                FAIL("mission_cat1_failed");
            }
            if (Char.IsDead($.maria)) {
                Text.PrintNow('BITCH_D', 5000, 1);
                FAIL("mission_cat1_failed");
            }
            if ($.player.locateOnFootChar3D($.maria, 10.0, 10.0, 3.0, false)) {
                if ($.set_as_leader_before == 0) {
                    $.maria.stopLooking();
                    $.maria.followPlayer($.player);
                    $.set_as_leader_before = 1;
                }
            } else {
                if ($.set_as_leader_before == 1) {
                    $.set_as_leader_before = 0;
                }
            }
            /*
            IF NOT IS_CAR_DEAD escape_chopper
            IF LOCATE_PLAYER_ANY_MEANS_CAR_3D Player escape_chopper 20.0 20.0 30.0 FALSE
            GET_PLAYER_COORDINATES Player playerx_cat playery_cat playerz_cat
            //playerz_cat = playerz_cat + 1

            SET_FIXED_CAMERA_POSITION playerx_cat playery_cat playerz_cat 0.0 0.0 0.0
            POINT_CAMERA_AT_CAR escape_chopper FIXED INTERPOLATION
            ELSE
            RESTORE_CAMERA
            ENDIF
            ENDIF
            */
            if ($.player.isInArea3D(-1142.0, 327.8, 29.0, -1215.6, 368.4, 40.0, false)) {
                if ($.been_on_heli_pad == 0) {
                    if (!Char.IsDead($.colubian_guard10)) {
                        $.colubian_guard10.setStayInSamePlace(false);
                        $.colubian_guard10.setObjKillPlayerAnyMeans($.player);
                    }
                    if (!Char.IsDead($.colubian_guard20)) {
                        $.colubian_guard20.setStayInSamePlace(false);
                        $.colubian_guard20.setObjKillPlayerAnyMeans($.player);
                    }
                    if (!Char.IsDead($.colubian_guard21)) {
                        $.colubian_guard21.setStayInSamePlace(false);
                        $.colubian_guard21.setObjKillPlayerAnyMeans($.player);
                    }
                    if (!Char.IsDead($.colubian_guard25)) {
                        $.colubian_guard25.setStayInSamePlace(false);
                        $.colubian_guard25.setObjKillPlayerAnyMeans($.player);
                    }
                    $.been_on_heli_pad = 1;
                }
            }
            $.player.clearWantedLevel();
        }
    }

    //RESTORE_CAMERA
    Camera.SetFadingColor(255, 255, 255);
    Camera.DoFade(500, FADE_OUT);

    Hud.ClearTimer($.$id.countdown_cat1);
    CatalinaHeli.Remove();

    if ($.maria_created_before == 0) {
        $.maria = Char.Create(PEDTYPE_SPECIAL, PED_SPECIAL1, -1201.6, 338.6, -100.0);
        $.maria.setProofs(true, true, true, true, true);
        $.maria.setAnimGroup(ANIM_SEXY_WOMANPED);
        $.maria.lookAtPlayerAlways($.player);
        $.maria.setHeading(339.0);
    }

    Camera.DoFade(500, FADE_IN);

    while (!$.maria.isInPlayersGroup($.player)) {
        await asyncWait(0);
        if (Char.IsDead($.maria)) {
            Text.PrintNow('BITCH_D', 5000, 1);
            FAIL("mission_cat1_failed");
        }
        if (!$.maria.isInPlayersGroup($.player)) {
            if ($.added_the_blip_for_maria == 0) {
                $.marias_blip = Blip.AddForChar($.maria);
                $.added_the_blip_for_maria = 1;
            }
        } else {
            if ($.added_the_blip_for_maria == 1) {
                $.marias_blip.remove();
                $.added_the_blip_for_maria = 0;
            }
        }
        if ($.player.locateOnFootChar3D($.maria, 10.0, 10.0, 3.0, false)) {
            if ($.set_as_leader_before == 0) {
                $.maria.stopLooking();
                $.maria.followPlayer($.player);
                $.set_as_leader_before = 1;
            }
        } else {
            if ($.set_as_leader_before == 1) {
                $.set_as_leader_before = 0;
            }
        }
        if ($.player.isInArea3D(-1142.0, 327.8, 29.0, -1215.6, 368.4, 40.0, false)) {
            if ($.been_on_heli_pad == 0) {
                if (!Char.IsDead($.colubian_guard10)) {
                    $.colubian_guard10.setStayInSamePlace(false);
                    $.colubian_guard10.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.colubian_guard20)) {
                    $.colubian_guard20.setStayInSamePlace(false);
                    $.colubian_guard20.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.colubian_guard21)) {
                    $.colubian_guard21.setStayInSamePlace(false);
                    $.colubian_guard21.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.colubian_guard25)) {
                    $.colubian_guard25.setStayInSamePlace(false);
                    $.colubian_guard25.setObjKillPlayerAnyMeans($.player);
                }
                $.been_on_heli_pad = 1;
            }
        }
        $.player.clearWantedLevel();
    }

    //last_cutscene:	//TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    $.breakout_timer_start = Clock.GetGameTimer();
    $.breakout_diff = 0;

    while (!$.player.canStartMission() && $.breakout_diff < 5000) {
        await asyncWait(0);
        if (Char.IsDead($.maria)) {
            Text.PrintNow('BITCH_D', 5000, 1);
            FAIL("mission_cat1_failed");
        }
        $.breakout_timer = Clock.GetGameTimer();
        $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
    }

    $.player.makeSafeForCutscene();

    //END OF GAME CUT_SCENE***************************************************************************************************

    $.player.clearWantedLevel();
    Camera.SetFadingColor(0, 0, 0);

    Camera.DoFade(1500, FADE_OUT);

    //PRINT_BIG ( CAT2 ) 5000 2 //"Catalina"

    TIMERA = 0;

    Weather.ForceNow(WEATHER_SUNNY);

    while (TIMERA < 1500) {
        await asyncWait(0);
    }

    Streaming.LoadSpecialCharacter(1, 'Maria');

    while (!Streaming.HasSpecialCharacterLoaded(1)) {
        await asyncWait(0);
    }

    Cutscene.Load('END');
    Audio.LoadEndOfGameTune();
    Cutscene.SetOffset(-1031.7601, 451.7612, 22.5624);

    $.cs_player = CutsceneObject.Create(PED_PLAYER);
    $.cs_player.setAnim('player');

    $.cs_maria = CutsceneObject.Create(PED_SPECIAL1);
    $.cs_maria.setAnim('maria');

    //CREATE_CUTSCENE_HEAD cs_maria CUT_OBJ1 cs_mariahead
    //SET_CUTSCENE_HEAD_ANIM cs_mariahead maria

    //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ3 cs_playerhead
    //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

    //CLEAR_AREA -381.8 284.0 62.9 1.0 TRUE
    //SET_PLAYER_COORDINATES player -381.8 284.0 -100.0
    //SET_PLAYER_HEADING player 232.0

    if (!Char.IsDead($.colubian_guard8)) {
        $.colubian_guard8.setHealth(0);
    }

    Camera.DoFade(1500, FADE_IN);

    World.SwitchRubbish(OFF);

    Cutscene.Start();
    Audio.PlayEndOfGameTune();

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 5507) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_A', 10000, 2); // Mission brief

    while ($.cs_time < 7855) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_B', 10000, 2); // Mission brief

    while ($.cs_time < 10313) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_C', 10000, 2); // Mission brief

    while ($.cs_time < 13610) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_D', 10000, 2); // Mission brief

    while ($.cs_time < 16428) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_E', 10000, 2); // Mission brief

    while ($.cs_time < 20514) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_F', 10000, 2); // Mission brief

    while ($.cs_time < 22827) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_G', 10000, 2); // Mission brief

    while ($.cs_time < 26173) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_H', 10000, 2); // Mission brief

    while ($.cs_time < 28028) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_I', 10000, 2); // Mission brief

    while ($.cs_time < 29276) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_J', 10000, 2); // Mission brief

    while ($.cs_time < 31901) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_K', 10000, 2); // Mission brief

    while ($.cs_time < 35772) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_L', 10000, 2); // Mission brief

    while ($.cs_time < 38820) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_M', 10000, 2); // Mission brief

    while ($.cs_time < 42136) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_N', 10000, 2); // Mission brief

    while ($.cs_time < 44646) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_O', 10000, 2); // Mission brief

    while ($.cs_time < 46971) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_P', 10000, 2); // Mission brief

    while ($.cs_time < 49254) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_Q', 10000, 2); // Mission brief

    while ($.cs_time < 51621) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_R', 10000, 2); // Mission brief

    while ($.cs_time < 54000) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_S', 10000, 2); // Mission brief

    while ($.cs_time < 56584) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_T', 10000, 2); // Mission brief

    while ($.cs_time < 59278) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('END_U', 4000, 2); // Mission brief

    while ($.cs_time < 66666) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Audio.SetMusicDoesFade(false);

    Camera.SetFadingColor(1, 1, 1);
    Camera.DoFade(2000, FADE_OUT);

    while (Camera.GetFadingStatus()) {
        await asyncWait(0);
    }

    while (!Cutscene.HasFinished()) {
        await asyncWait(0);
    }

    //SWITCH_WORLD_PROCESSING ON

    Text.ClearPrints();
    Cutscene.Clear();

    await mission_start_credits(); // SCM GOSUB mission_start_credits
    //SET_CAMERA_BEHIND_PLAYER

    return; // SCM GOTO → mission_cat1_passed
}

// Mission cat1 failed
async function onFailed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed"
    if (!Char.IsDead($.maria)) {
        $.maria.removeElegantly();
    }
}

// mission cat1 passed
async function onPassed() {
    $.flag_cat_mission1_passed = 1;
    $.flag_suburban_passed = 1;
    //PLAY_MISSION_PASSED_TUNE 1
    //PRINT_WITH_NUMBER_BIG ( M_PASS ) 1000000 5000 1 //"Mission Passed!"

    $.player.clearWantedLevel();
    Stat.RegisterMissionPassed('CAT2');
    Stat.PlayerMadeProgress(1);
    $.maria_contact_blip.remove();
    $.special_tank.switch(101);
    Stat.SetSuburbanPassed();
    //START_NEW_SCRIPT credits_loop
}

// mission cleanup
async function cleanup() {
    $.flag_player_on_cat_mission = 0;
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_COLOMBIAN_A);
    Streaming.MarkModelAsNoLongerNeeded(PED_GANG_COLOMBIAN_B);
    Streaming.MarkModelAsNoLongerNeeded(CAR_COLUMB);
    Streaming.MarkModelAsNoLongerNeeded(CAR_FLATBED);
    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Streaming.UnloadSpecialCharacter(3);
    Streaming.UnloadSpecialCharacter(4);
    //SET_FADING_COLOUR 0 0 0

    Hud.ClearTimer($.$id.countdown_cat1);
    Path.SwitchPedRoadsOn(-942.6, 337.0, 10.0, -953.6, 361.4, 30.0); // DAM
    $.blip1_cat1.remove();
    $.marias_blip.remove();
    $.catalina.delete();
    CatalinaHeli.Remove();
    $.rocket_launch.remove();
    $.Dead_guards_gun.remove();
    Zone.SetPedInfo('WEE_DAM', DAY, 8, 0, 0, 0, 0, 0, 100, 0, 0);
    Zone.SetPedInfo('WEE_DAM', NIGHT, 5, 0, 0, 0, 0, 0, 100, 0, 0);
    Zone.SetCarInfo('WEE_DAM', DAY, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    Zone.SetCarInfo('WEE_DAM', NIGHT, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    //DO_FADE 0 FADE_OUT
    //CLEAR_THREAT_FOR_PED_TYPE PEDTYPE_GANG_COLOMBIAN THREAT_PLAYER1

    Mission.Finish();
}

// **************************************CREDITS************************************************
async function mission_start_credits() {
    before_final_final_scene: {
        await asyncWait(0);
        $.player.setControl(OFF);
        Game.SetEveryoneIgnorePlayer($.player, true);
        $.player.setVisible(false);
        World.SwitchRubbish(OFF);
        Hud.SwitchWidescreen(ON);
        $.player.addScore(1000000);

        Credits.Start();
        TIMERA = 0;
        Clock.SetTimeOfDay(2, 40);
        // SCM GOTO → first_credits_loop: skip initial fade-out on first iteration
        let _skip_first_fadeout = true;

        while (!Credits.AreFinished()) {
            await asyncWait(0);
            if ($.camera_cut == 0) {
                if (!_skip_first_fadeout) {
                    Camera.DoFade(1500, FADE_OUT);
                    while (Camera.GetFadingStatus()) {
                        await asyncWait(0);
                        if (TIMERA > 40000) {
                            if (Pad.IsButtonPressed(PAD1, CROSS)) {
                                break before_final_final_scene; // SCM GOTO → final_final_scene
                            }
                        }
                    }
                }
                _skip_first_fadeout = false;
                // SCM label first_credits_loop
                $.player.setCoordinates(-361.9, 248.0, -100.0); // Colubian mansion
                Camera.SetFixedPosition(-364.393, 265.064, 82.87, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-363.973, 264.189, 82.632, JUMP_CUT);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (TIMERA > 40000) {
                        if (Pad.IsButtonPressed(PAD1, CROSS)) {
                            break before_final_final_scene; // SCM GOTO → final_final_scene
                        }
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 30000) {
                    await asyncWait(0);
                    if (TIMERA > 40000) {
                        if (Pad.IsButtonPressed(PAD1, CROSS)) {
                            break before_final_final_scene; // SCM GOTO → final_final_scene
                        }
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 1;
            }
            if ($.camera_cut == 1) {
                Camera.DoFade(1500, FADE_OUT);
                while (Camera.GetFadingStatus()) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.player.setCoordinates(-1174.25, -7.017, -100.0); // Industrial bit
                Camera.SetFixedPosition(-1176.481, -17.694, 75.992, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-1175.726, -17.055, 75.847, JUMP_CUT);
                Clock.SetTimeOfDay(5, 40);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 30000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 2;
            }
            if ($.camera_cut == 2) {
                Camera.DoFade(1500, FADE_OUT);
                while (Camera.GetFadingStatus()) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.player.setCoordinates(-468.7, -3.3, -100.0); // Projects
                Camera.SetFixedPosition(-413.07, 19.261, 54.403, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-413.942, 18.976, 54.006, JUMP_CUT);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 30000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 3;
            }
            if ($.camera_cut == 3) {
                Camera.DoFade(1500, FADE_OUT);
                while (Camera.GetFadingStatus()) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.player.setCoordinates(-855.7, -717.3, -100.0); // Airport
                Camera.SetFixedPosition(-959.517, -656.414, 55.464, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-958.668, -656.912, 55.288, JUMP_CUT);
                Clock.SetTimeOfDay(22, 0);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 30000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 4;
            }
            if ($.camera_cut == 4) {
                Camera.DoFade(1500, FADE_OUT);
                while (Camera.GetFadingStatus()) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.player.setCoordinates(-532.7, -611.7, 43.3); // Bridge
                Camera.SetFixedPosition(-571.592, -611.137, 67.566, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-570.697, -611.579, 67.493, JUMP_CUT);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 30000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 5;
            }
            if ($.camera_cut == 5) {
                Camera.DoFade(1500, FADE_OUT);
                while (Camera.GetFadingStatus()) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.player.setCoordinates(-671.6, -155.9, -100.0); // Twisted Bridge
                Camera.SetFixedPosition(-706.59, -219.085, 25.797, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-706.155, -218.19, 25.696, JUMP_CUT);
                Clock.SetTimeOfDay(1, 20);
                Weather.ForceNow(WEATHER_RAINY);
                TIMERB = 0;
                while (TIMERB < 20000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                Camera.DoFade(1500, FADE_IN);
                TIMERB = 0;
                while (TIMERB < 40000) {
                    await asyncWait(0);
                    if (Pad.IsButtonPressed(PAD1, CROSS)) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                    if (Credits.AreFinished()) {
                        break before_final_final_scene; // SCM GOTO → final_final_scene
                    }
                }
                $.camera_cut = 0;
            }
        }
    }

    // **********************************END OF CAMERA CUTSCENE****************************
    final_final_scene: {
        Credits.Stop();
        //FORCE_WEATHER_NOW WEATHER_CLOUDY

        //SET_FADING_COLOUR 0 0 0

        Clock.SetTimeOfDay(7, 0);

        Audio.SetMusicDoesFade(true);

        Camera.DoFade(2000, FADE_OUT);

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        $.player.setVisible(true);
        $.player.setHealth(100);
        World.ClearArea(-666.8, -1.8, 18.8, 2.0, true);
        $.player.setCoordinates(-666.8, -1.8, -100.0);
        Streaming.LoadScene(-666.8, -1.8, 19.0);
        $.player.setHeading(180.0);
        Camera.RestoreJumpcut();
        Camera.SetInFrontOfPlayer();
        Hud.SwitchWidescreen(OFF);
        TIMERB = 0;

        ONMISSION = false;
        $.flag_player_on_cat_mission = 0;

        TIMERB = 0;

        while (TIMERB < 2500) {
            await asyncWait(0);
        }

        Camera.DoFade(2000, FADE_IN);
        Audio.StopEndOfGameTune();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }
    }
}

export default () => body().then(onPassed).catch(onFailed).finally(cleanup);
