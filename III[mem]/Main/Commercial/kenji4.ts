// Generated from Main/Commercial/kenji4.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_kenji4() {
    $.flag_player_on_mission = 1;

    $.flag_player_on_kenji_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.counter_number_of_hispanics_dead = 0;

    $.flag_hispanic1_km4_dead = 0;

    $.flag_hispanic2_km4_dead = 0;

    $.flag_hispanic3_km4_dead = 0;

    $.flag_hispanic4_km4_dead = 0;

    $.flag_hispanic5_km4_dead = 0;

    $.flag_hispanic6_km4_dead = 0;

    $.flag_briefcase3_pickedup_km4 = 0;

    $.flag_hispanic1_hate_player_km4 = 0;

    $.flag_hispanic2_hate_player_km4 = 0;

    $.flag_hispanic3_hate_player_km4 = 0;

    $.flag_hispanic4_hate_player_km4 = 0;

    $.flag_hispanic5_hate_player_km4 = 0;

    $.switch_gang_diablo_off = 1;

    $.flag_player_had_message_km4 = 0;

    $.flag_briefcase1_created_km4 = 0;

    $.flag_briefcase2_created_km4 = 0;

    $.flag_briefcase3_created_km4 = 0;

    $.flag_briefcase1_collected_km4 = 0;

    $.flag_briefcase2_collected_km4 = 0;

    $.flag_briefcase3_collected_km4 = 0;

    World.SwapNearestBuildingModel(-88.371, -487.666, 15.166, 50.0, 408 /* convstore01 */, 400 /* convstre_dmge01 */);

    {
        // ****************************************START OF CUTSCENE********************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_kenji4_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( KM4 ) 15000 2  //"SHIMA"

  SWITCH_STREAMING OFF
  */

        // Cutscene stuff

        Streaming.LoadSpecialCharacter(1, 'KENJI');
        Streaming.RequestModel(16 /* PED_GANG_YAKUZA_A */);
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'KENJIH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'PLAYERH');
        Streaming.RequestModel(1570 /* casino_garden */);

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

        Cutscene.Load('k4_shi');

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

        while ($.cs_time < 3580) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_A', 10000, 1); //"To be truly strong, it is important that you never show weakness."

        while ($.cs_time < 8316) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_B', 10000, 1); //"The business's that are fortunate enough to have our protection settle their accounts today."

        while ($.cs_time < 13513) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_C', 10000, 1); //"Please go and collect the money immediately, so we can enter it into the casino accounts."

        while ($.cs_time < 17808) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('KM4_C');

        while ($.cs_time < 18333) {
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

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(1570 /* casino_garden */);

        // *******************************************END OF CUTSCENE*******************************

        Streaming.RequestModel(14 /* PED_GANG_DIABLO_A */);

        while (!Streaming.HasModelLoaded(14 /* PED_GANG_DIABLO_A */)) {
            await asyncWait(0);
        }

        $.briefcase1_km4 = Pickup.Create(1319 /* briefcase */, 3 /* pickup_once */, 236.8, -1580.0, 25.7);

        $.flag_briefcase1_created_km4 = 1;

        $.radar_blip_coord2_km4 = Blip.AddForPickup($.briefcase1_km4);

        // waits for the player to get the first briefcase

        while (!$.briefcase1_km4.hasBeenCollected()) {
            await asyncWait(0);
        }

        $.flag_briefcase1_collected_km4 = 1;

        Text.PrintNow('KM4_8', 5000, 1); //"Briefcase collected!"

        $.radar_blip_coord2_km4.remove();

        $.briefcase2_km4 = Pickup.Create(1319 /* briefcase */, 3 /* pickup_once */, 119.56, -1110.51, 25.66);

        $.flag_briefcase2_created_km4 = 1;

        $.radar_blip_coord3_km4 = Blip.AddForPickup($.briefcase2_km4);

        // creates Diablo 6 who is by the second briefcase

        $.hispanic6_km4 = Char.Create(4 /* PEDTYPE_CIVMALE */, 14 /* PED_GANG_DIABLO_A */, 122.2, -1113.2, 25.2);

        $.hispanic6_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic6_km4.clearThreatSearch();

        $.hispanic6_km4.turnToFaceCoord(120.6, -1111.8, -100.0);

        // waiting for the player to get the second briefcase

        Zone.SetPedDensity('park', 1 /* DAY */, 0);
        Zone.SetPedDensity('park', 0 /* NIGHT */, 0);

        while (!$.briefcase2_km4.hasBeenCollected()) {
            await asyncWait(0);
            if ($.flag_hispanic6_km4_dead == 0) {
                if (Char.IsDead($.hispanic6_km4)) {
                    $.flag_hispanic6_km4_dead = 1;
                } else {
                    if ($.player.locateAnyMeansChar2D($.hispanic6_km4, 10.0, 10.0, false /* FALSE */)) {
                        $.hispanic6_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.hispanic6_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.hispanic6_km4.setObjKillPlayerAnyMeans($.player);
                    }
                }
            }
        }

        $.flag_briefcase2_collected_km4 = 1;

        Text.PrintNow('KM4_8', 5000, 1); //"Briefcase collected!"

        $.radar_blip_coord3_km4.remove();

        $.radar_blip_coord5_km4 = Blip.AddForCoord(-91.5, -484.2, 15.2);

        while (!$.player.locateStoppedAnyMeans3D(-91.5, -484.2, 15.2, 4.0, 4.0, 3.0, true /* TRUE */)) {
            await asyncWait(0);
        }

        Hud.SwitchWidescreen(true /* ON */);

        $.radar_blip_coord5_km4.remove();

        $.player.setControl(false /* OFF */);

        World.ClearArea(-91.0, -488.9, 18.7, 2.0, true /* TRUE */);

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        Camera.SetFixedPosition(-87.33, -502.99, 21.33, 0.0, 0.0, 0.0);

        Camera.PointAtPoint(-87.37, -502.06, 20.97, 2 /* JUMP_CUT */);

        $.script_controlled_player = $.player.getChar();

        if ($.player.isInAnyCar()) {
            $.car_km4 = $.player.storeCarIsIn();
            $.script_controlled_player.setObjLeaveCar($.car_km4);
            while ($.script_controlled_player.isInCar($.car_km4)) {
                await asyncWait(0);
                if (Car.IsDead($.car_km4)) {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicles dead!"
                    // SCM GOTO → mission_kenji4_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji4_failed'); // fallback: would break linear control flow
                }
            }
        }

        $.script_controlled_player.setObjGotoCoordOnFoot(-92.07, -488.84);

        TIMERB = 0;

        while (TIMERB < 1000) {
            await asyncWait(0);
        }

        // **************************************CUT SCENE WITH SHOP KEEPER*************************

        $.breakout_timer_start = Clock.GetGameTimer();

        $.breakout_diff = 0;

        while (!$.player.canStartMission() && $.breakout_diff < 5000) {
            await asyncWait(0);
            $.breakout_timer = Clock.GetGameTimer();
            $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
        }

        $.player.makeSafeForCutscene();

        Camera.SetFadingColor(0, 0, 0);

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        Streaming.Switch(false /* OFF */);

        // Cutscene stuff

        Streaming.LoadSpecialCharacter(2, 'KEEPER');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'KEEPERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'PLAYERH');
        Streaming.LoadSpecialModel(187 /* CUT_OBJ3 */, 'SHDOOR');

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        $.script_controlled_player.setIdle();

        World.SetPedDensityMultiplier(0.0);

        World.ClearAreaOfChars(-117.66, -565.7, 10.0, 12.34, -396.77, 20.0);

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(2) ||
            !Streaming.HasModelLoaded(187 /* cut_obj3 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */)
        ) {
            await asyncWait(0);
        }

        World.SetVisibilityOfClosestObjectOfType(-88.3, -487.6, 15.1, 6.0, 415 /* convstore01_door */, false /* FALSE */);

        Cutscene.Load('k4_shi2');

        Cutscene.SetOffset(-88.1829, -491.4236, 15.1439); //Proper one

        //SET_CUTSCENE_OFFSET -90.1829 -491.4236 15.143  // Test one

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);

        $.cs_player.setAnim('player');

        $.cs_keeper = CutsceneObject.Create(27 /* PED_SPECIAL2 */);

        $.cs_keeper.setAnim('keeper');

        $.cs_shopdoor = CutsceneObject.Create(187 /* cut_obj3 */);

        $.cs_shopdoor.setAnim('shdoor');

        $.cs_keeperhead = CutsceneHead.Create($.cs_keeper, 185 /* CUT_OBJ1 */);

        $.cs_keeperhead.setAnim('keeper');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 186 /* CUT_OBJ2 */);

        $.cs_playerhead.setAnim('player');

        World.ClearArea(-93.01, -489.43, 15.16, 1.0, true /* TRUE */);

        $.player.setCoordinates(-93.01, -489.43, 15.16);

        $.player.setHeading(101.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);

        Streaming.Switch(true /* ON */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 2690) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_1', 10000, 1); //"I can't pay you and I wouldn't pay you if I could!"

        while ($.cs_time < 4898) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_9', 10000, 1); //"Some young gang just jacked out the place, they took everything."

        while ($.cs_time < 7467) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_2', 10000, 1); //"You guys are useless."

        while ($.cs_time < 8511) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM4_10', 10000, 1); //"What kind of Yakuza are you anyway?"

        while ($.cs_time < 10710) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('KM4_10');

        while ($.cs_time < 11000) {
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

        Camera.SetBehindPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Camera.SetBehindPlayer();

        World.SetVisibilityOfClosestObjectOfType(-88.3, -487.6, 15.1, 6.0, 415 /* convstore01_door */, true /* TRUE */);

        Streaming.UnloadSpecialCharacter(2);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(187 /* CUT_OBJ3 */);

        World.SetPedDensityMultiplier(1.0);

        // **********************************END OF CUTSCENE WITH SHOPKEEPER************************

        Hud.SwitchWidescreen(false /* OFF */);

        Game.SetPoliceIgnorePlayer($.player, false /* OFF */);

        $.player.setControl(true /* ON */);

        Zone.SetPedDensity('park', 1 /* DAY */, 1);
        Zone.SetPedDensity('park', 0 /* NIGHT */, 1);

        Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);

        $.radar_blip_coord1_km4 = Blip.AddForCoordOld(938.0, -180.0, -100.0, 5, 3 /* BOTH */);

        $.radar_blip_coord1_km4.changeScale(3);

        $.radar_blip_dummy1_km4 = Blip.AddForCoordOld(930.0, -190.0, -100.0, 1, 3 /* BOTH */);

        $.radar_blip_dummy1_km4.changeScale(3);

        $.radar_blip_dummy2_km4 = Blip.AddForCoordOld(931.0, -184.0, -100.0, 1, 3 /* BOTH */);

        $.radar_blip_dummy2_km4.changeScale(3);

        $.radar_blip_dummy3_km4 = Blip.AddForCoordOld(943.0, -182.0, -100.0, 1, 3 /* BOTH */);

        $.radar_blip_dummy3_km4.changeScale(3);

        $.radar_blip_dummy4_km4 = Blip.AddForCoordOld(943.0, -190.0, -100.0, 1, 3 /* BOTH */);

        $.radar_blip_dummy4_km4.changeScale(3);

        $.radar_blip_dummy5_km4 = Blip.AddForCoordOld(939.0, -183.0, -100.0, 1, 3 /* BOTH */);

        $.radar_blip_dummy5_km4.changeScale(3);

        Text.PrintNow('KM4_4', 7000, 1); //"Punish the gang responsible and retrieve the protection money!"

        // creates the final briefcase and the hispanics

        while (!Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            await asyncWait(0);
        }

        $.briefcase3_km4 = Pickup.Create(1319 /* briefcase */, 3 /* pickup_once */, 938.0, -180.0, 4.5);

        $.flag_briefcase3_created_km4 = 1;

        $.radar_blip_coord4_km4 = Blip.AddForPickup($.briefcase3_km4);

        $.radar_blip_coord1_km4.remove();

        // hispanic 1

        $.hispanic1_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, 14 /* PED_GANG_DIABLO_A */, 930.0, -190.0, -100.0);

        $.radar_blip_diablo1_km4 = Blip.AddForChar($.hispanic1_km4);

        $.radar_blip_dummy1_km4.remove();

        $.hispanic1_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic1_km4.clearThreatSearch();

        $.hispanic1_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        // hispanic 2

        $.hispanic2_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, 14 /* PED_GANG_DIABLO_A */, 931.0, -184.0, -100.0);

        $.radar_blip_diablo2_km4 = Blip.AddForChar($.hispanic2_km4);

        $.radar_blip_dummy2_km4.remove();

        $.hispanic2_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic2_km4.clearThreatSearch();

        $.hispanic2_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        // hispanic 3

        $.hispanic3_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, 14 /* PED_GANG_DIABLO_A */, 943.0, -182.0, -100.0);

        $.radar_blip_diablo3_km4 = Blip.AddForChar($.hispanic3_km4);

        $.radar_blip_dummy3_km4.remove();

        $.hispanic3_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic3_km4.clearThreatSearch();

        $.hispanic3_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        // hispanic 4

        $.hispanic4_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, 14 /* PED_GANG_DIABLO_A */, 943.0, -190.0, -100.0);

        $.radar_blip_diablo4_km4 = Blip.AddForChar($.hispanic4_km4);

        $.radar_blip_dummy4_km4.remove();

        $.hispanic4_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic4_km4.clearThreatSearch();

        $.hispanic4_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        // hispanic 5

        $.hispanic5_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, 14 /* PED_GANG_DIABLO_A */, 939.0, -183.0, -100.0);

        $.radar_blip_diablo5_km4 = Blip.AddForChar($.hispanic5_km4);

        $.radar_blip_dummy5_km4.remove();

        $.hispanic5_km4.giveWeapon(3 /* WEAPONTYPE_UZI */, 30000); // sets weapon to have infinate bullets

        $.hispanic5_km4.clearThreatSearch();

        $.hispanic5_km4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);

        while ($.flag_briefcase3_pickedup_km4 == 0 || $.counter_number_of_hispanics_dead < 5) {
            await asyncWait(0);
            if ($.flag_hispanic1_km4_dead == 0) {
                if (Char.IsDead($.hispanic1_km4)) {
                    $.radar_blip_diablo1_km4.remove();
                    ++$.counter_number_of_hispanics_dead;
                    $.flag_hispanic1_km4_dead = 1;
                }
            }
            if ($.flag_hispanic2_km4_dead == 0) {
                if (Char.IsDead($.hispanic2_km4)) {
                    $.radar_blip_diablo2_km4.remove();
                    ++$.counter_number_of_hispanics_dead;
                    $.flag_hispanic2_km4_dead = 1;
                }
            }
            if ($.flag_hispanic3_km4_dead == 0) {
                if (Char.IsDead($.hispanic3_km4)) {
                    $.radar_blip_diablo3_km4.remove();
                    ++$.counter_number_of_hispanics_dead;
                    $.flag_hispanic3_km4_dead = 1;
                }
            }
            if ($.flag_hispanic4_km4_dead == 0) {
                if (Char.IsDead($.hispanic4_km4)) {
                    $.radar_blip_diablo4_km4.remove();
                    ++$.counter_number_of_hispanics_dead;
                    $.flag_hispanic4_km4_dead = 1;
                }
            }
            if ($.flag_hispanic5_km4_dead == 0) {
                if (Char.IsDead($.hispanic5_km4)) {
                    $.radar_blip_diablo5_km4.remove();
                    ++$.counter_number_of_hispanics_dead;
                    $.flag_hispanic5_km4_dead = 1;
                }
            }
            if ($.flag_briefcase3_pickedup_km4 == 0) {
                if ($.briefcase3_km4.hasBeenCollected()) {
                    $.radar_blip_coord4_km4.remove();
                    Text.PrintNow('KM4_8', 5000, 1); //"Briefcase collected!"
                    $.flag_briefcase3_collected_km4 = 1;
                    $.flag_briefcase3_pickedup_km4 = 1;
                }
            }
            if ($.player.locateAnyMeans3D(940.0, -185.0, 4.2, 25.0, 25.0, 10.0, false /* FALSE */)) {
                if ($.flag_hispanic1_km4_dead == 0 && $.flag_hispanic1_hate_player_km4 == 0) {
                    $.hispanic1_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.hispanic1_km4.turnToFacePlayer($.player);
                    $.hispanic1_km4.setObjKillPlayerAnyMeans($.player);
                    $.flag_hispanic1_hate_player_km4 = 1;
                }
                if ($.flag_hispanic2_km4_dead == 0 && $.flag_hispanic2_hate_player_km4 == 0) {
                    $.hispanic2_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.hispanic2_km4.turnToFacePlayer($.player);
                    $.hispanic2_km4.setObjKillPlayerAnyMeans($.player);
                    $.flag_hispanic2_hate_player_km4 = 1;
                }
                if ($.flag_hispanic3_km4_dead == 0 && $.flag_hispanic3_hate_player_km4 == 0) {
                    $.hispanic3_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.hispanic3_km4.turnToFacePlayer($.player);
                    $.hispanic3_km4.setObjKillPlayerAnyMeans($.player);
                    $.flag_hispanic3_hate_player_km4 = 1;
                }
                if ($.flag_hispanic4_km4_dead == 0 && $.flag_hispanic4_hate_player_km4 == 0) {
                    $.hispanic4_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.hispanic4_km4.turnToFacePlayer($.player);
                    $.hispanic4_km4.setObjKillPlayerAnyMeans($.player);
                    $.flag_hispanic4_hate_player_km4 = 1;
                }
                if ($.flag_hispanic5_km4_dead == 0 && $.flag_hispanic5_hate_player_km4 == 0) {
                    $.hispanic5_km4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                    $.hispanic5_km4.turnToFacePlayer($.player);
                    $.hispanic5_km4.setObjKillPlayerAnyMeans($.player);
                    $.flag_hispanic5_hate_player_km4 = 1;
                }
            }
        }

        Text.PrintNow('KM4_11', 5000, 1); //"Take the money back to the casino!"

        $.radar_blip_coord6_km4 = Blip.AddForCoord(452.3, -1465.8, 17.6);

        $.blob_flag = 1;

        while (!$.player.locateStoppedAnyMeans3D(452.3, -1465.8, 17.6, 4.0, 4.0, 4.0, $.blob_flag)) {
            await asyncWait(0);
        }

        $.radar_blip_coord6_km4.remove();

        Hud.SwitchWidescreen(true /* ON */);

        $.player.setControl(false /* OFF */);

        Game.SetPoliceIgnorePlayer($.player, true /* ON */);

        Game.SetEveryoneIgnorePlayer($.player, true /* ON */);

        $.script_controlled_player = $.player.getChar();

        if ($.player.isInAnyCar()) {
            $.car_cut_km4 = $.player.storeCarIsIn();
            $.script_controlled_player.setObjLeaveCar($.car_cut_km4);
            while ($.player.isInCar($.car_cut_km4)) {
                await asyncWait(0);
                if (Car.IsDead($.car_cut_km4)) {
                    Text.PrintNow('WRECKED', 5000, 1); //"The vehicles wrecked!"
                    // SCM GOTO → mission_kenji4_failed (not lowered; manual jump required)
                    throw new Error('unresolved GOTO mission_kenji4_failed'); // fallback: would break linear control flow
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

    // SCM GOTO → mission_kenji4_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_kenji4_passed'); // fallback: would break linear control flow

    // Mission Kenji3 failed
}

async function mission_kenji4_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    return;

    // mission Kenji3 passed
}

async function mission_kenji4_passed() {
    $.flag_kenji_mission4_passed = 1;
    Stat.RegisterMissionPassed('KM4');
    Stat.PlayerMadeProgress(1);
    Text.PrintWithNumberBig('m_pass', 10000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.addScore(10000);
    $.player.clearWantedLevel();
    // START_NEW_SCRIPT kenji_mission5_loop
    return;

    // mission cleanup
}

async function mission_cleanup_kenji4() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_kenji_mission = 0;
    $.switch_gang_diablo_off = 0;

    if ($.flag_briefcase1_created_km4 == 1) {
        if ($.flag_briefcase1_collected_km4 == 0) {
            $.briefcase1_km4.remove();
        }
    }

    if ($.flag_briefcase2_created_km4 == 1) {
        if ($.flag_briefcase2_collected_km4 == 0) {
            $.briefcase2_km4.remove();
        }
    }

    if ($.flag_briefcase3_created_km4 == 1) {
        if ($.flag_briefcase3_collected_km4 == 0) {
            $.briefcase3_km4.remove();
        }
    }

    $.radar_blip_diablo1_km4.remove();
    $.radar_blip_diablo2_km4.remove();
    $.radar_blip_diablo3_km4.remove();
    $.radar_blip_diablo4_km4.remove();
    $.radar_blip_diablo5_km4.remove();
    Streaming.MarkModelAsNoLongerNeeded(14 /* PED_GANG_DIABLO_A */);
    Streaming.MarkModelAsNoLongerNeeded(16 /* PED_GANG_YAKUZA_A */);
    $.radar_blip_coord2_km4.remove();
    $.radar_blip_coord3_km4.remove();
    $.radar_blip_coord4_km4.remove();
    $.radar_blip_coord5_km4.remove();
    $.radar_blip_coord1_km4.remove();
    $.radar_blip_coord6_km4.remove();
    $.radar_blip_dummy1_km4.remove();
    $.radar_blip_dummy2_km4.remove();
    $.radar_blip_dummy3_km4.remove();
    $.radar_blip_dummy4_km4.remove();
    $.radar_blip_dummy5_km4.remove();
    Zone.SetPedDensity('park', 1 /* DAY */, 1);
    Zone.SetPedDensity('park', 0 /* NIGHT */, 1);
    Mission.Finish();
    return;
}

export async function kenji4() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************Kenji mission 4*********************************
    // *********************************************"Shima"*************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME kenji4

    // Mission start stuff

    // SCM GOSUB mission_start_kenji4
    await mission_start_kenji4();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_kenji4_failed
        await mission_kenji4_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_kenji4
    await mission_cleanup_kenji4();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT briefcase1_km4

    // VAR_INT briefcase2_km4

    // VAR_INT briefcase3_km4

    // VAR_INT hispanic1_km4

    // VAR_INT hispanic2_km4

    // VAR_INT hispanic3_km4

    // VAR_INT hispanic4_km4

    // VAR_INT hispanic5_km4

    // VAR_INT hispanic6_km4

    // VAR_INT radar_blip_coord2_km4

    // VAR_INT radar_blip_coord3_km4

    // VAR_INT radar_blip_coord4_km4

    // VAR_INT radar_blip_coord5_km4

    // VAR_INT radar_blip_ped_km4

    // VAR_INT radar_blip_coord1_km4

    // VAR_INT counter_number_of_hispanics_dead

    // VAR_INT flag_hispanic1_km4_dead

    // VAR_INT flag_hispanic2_km4_dead

    // VAR_INT flag_hispanic3_km4_dead

    // VAR_INT flag_hispanic4_km4_dead

    // VAR_INT flag_hispanic5_km4_dead

    // VAR_INT flag_hispanic6_km4_dead

    // VAR_INT flag_briefcase3_pickedup_km4

    // VAR_INT flag_hispanic1_hate_player_km4

    // VAR_INT flag_hispanic2_hate_player_km4

    // VAR_INT flag_hispanic3_hate_player_km4

    // VAR_INT flag_hispanic4_hate_player_km4

    // VAR_INT flag_hispanic5_hate_player_km4

    // VAR_INT radar_blip_diablo1_km4

    // VAR_INT radar_blip_diablo2_km4

    // VAR_INT radar_blip_diablo3_km4

    // VAR_INT radar_blip_diablo4_km4

    // VAR_INT radar_blip_diablo5_km4

    // VAR_INT radar_blip_dummy1_km4

    // VAR_INT radar_blip_dummy2_km4

    // VAR_INT radar_blip_dummy3_km4

    // VAR_INT radar_blip_dummy4_km4

    // VAR_INT radar_blip_dummy5_km4

    // VAR_INT flag_player_had_message_km4

    // VAR_INT car_km4

    // VAR_INT flag_briefcase1_created_km4

    // VAR_INT flag_briefcase2_created_km4

    // VAR_INT flag_briefcase3_created_km4

    // VAR_INT flag_briefcase1_collected_km4

    // VAR_INT flag_briefcase2_collected_km4

    // VAR_INT flag_briefcase3_collected_km4

    // VAR_INT radar_blip_coord6_km4

    // VAR_INT car_cut_km4

    // ****************************************Mission Start************************************
}
