// Generated from Main/Commercial/kenji5.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_kenji5() {
    $.flag_player_on_mission = 1;
    $.flag_player_on_kenji_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    // SCRIPT_NAME kenji5

    $.number_of_peds = 0;
    $.ped_2_exists = 0;
    $.delete_oldest_ped_time = 0;
    $.on_screen_counter_flag = 0;
    $.ped_3_exists = 0;
    $.ped_4_exists = 0;
    $.dead_peds = 0;
    $.minimum_kills = 0;
    $.ped_1_time = 0;
    $.ped_2_time = 0;
    $.ped_3_time = 0;
    $.ped_4_time = 0;
    $.oldest_ped_time = 0;
    $.oldest_ped = 0;
    $.random_direction = 0;
    $.ped_1_exists = 0;
    $.ped_5_exists = 0;
    $.ped_5_time = 0;
    $.ped_6_exists = 0;
    $.ped_6_time = 0;
    $.ped_7_exists = 0;
    $.ped_7_time = 0;
    $.ped_8_exists = 0;
    $.ped_8_time = 0;
    $.ped_9_exists = 0;
    $.ped_9_time = 0;
    $.ped_10_exists = 0;
    $.ped_10_time = 0;
    $.ped_11_exists = 0;
    $.ped_11_time = 0;
    $.ped_12_exists = 0;
    $.ped_12_time = 0;
    $.ped_13_exists = 0;
    $.ped_13_time = 0;
    $.ped_14_exists = 0;
    $.ped_14_time = 0;
    $.ped_15_exists = 0;
    $.ped_15_time = 0;

    $.minimum_kills = 8;
    {
        // ****************************************START OF CUTSCENE********************************

        /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_kenji5_failed
  ENDIF

  SWITCH_STREAMING OFF

  PRINT_BIG KM5 15000 2 // "SMACK DOWN"
  */

        Streaming.LoadSpecialCharacter(1, 'KENJI');
        Streaming.RequestModel(16 /* PED_GANG_YAKUZA_A */);
        Streaming.RequestModel(17 /* PED_GANG_YAKUZA_B */);
        Streaming.RequestModel(18 /* PED_GANG_YARDIE_A */);
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'KENJIH');
        Streaming.RequestModel(1570 /* casino_garden */);

        /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasSpecialCharacterLoaded(1) ||
            !Streaming.HasModelLoaded(16 /* PED_GANG_YAKUZA_A */) ||
            !Streaming.HasModelLoaded(17 /* PED_GANG_YAKUZA_B */) ||
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(1570 /* casino_garden */)
        ) {
            await asyncWait(0);
        }

        Cutscene.Load('K5_SD');

        Cutscene.SetOffset(476.38, -1382.168, 67.347);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_kenji = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
        $.cs_kenji.setAnim('kenji');

        $.cs_yakuza = CutsceneObject.Create(16 /* PED_GANG_YAKUZA_A */);
        $.cs_yakuza.setAnim('gang07');

        $.cs_yakuza2 = CutsceneObject.Create(17 /* PED_GANG_YAKUZA_B */);
        $.cs_yakuza2.setAnim('gang08');

        $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, 185 /* cut_obj1 */);
        $.cs_kenjihead.setAnim('kenji');

        //CREATE_CUTSCENE_HEAD cs_player cut_obj2 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        World.ClearArea(459.1, -1413.0, 25.11, 1.0, true /* TRUE */);
        $.player.setCoordinates(459.1, -1413.0, 25.11);
        $.player.setHeading(132.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 6121) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_A', 7000, 1); //"YOU! How fitting you should choose this moment to show your worthless face!"

        while ($.cs_time < 11088) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_B', 7000, 1); //"It would appear your attempts to dissuade the Jamaicans"

        while ($.cs_time < 13770) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_B1', 7000, 1); //"from becoming bed fellows with the Cartel were wholly inadequate!"

        while ($.cs_time < 17324) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_C', 7000, 1); //"Yardie pushers line Liberty's streets selling packets of SPANK like they were selling hotdogs!"

        while ($.cs_time < 22060) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_D', 7000, 1); //"Those Cartel pigs are laughing at us, at me!"

        while ($.cs_time < 24716) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_E', 7000, 1); //"I will give you one last chance to prove my sister's faith in you to be well founded!"

        while ($.cs_time < 29220) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('KM5_F', 7000, 1); //"Run these scumbags into the ground and wash your shame in rivers of our enemies' blood!!!"

        while ($.cs_time < 33666) {
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

        Streaming.Switch(true /* ON */);

        World.SwitchRubbish(true /* ON */);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Camera.SetInFrontOfPlayer();

        //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(16 /* PED_GANG_YAKUZA_A */);
        Streaming.MarkModelAsNoLongerNeeded(17 /* PED_GANG_YAKUZA_B */);
        Streaming.MarkModelAsNoLongerNeeded(185 /* cut_obj1 */);
        Streaming.MarkModelAsNoLongerNeeded(1570 /* casino_garden */);

        // *******************************************END OF CUTSCENE*******************************

        while (!Streaming.HasModelLoaded(18 /* PED_GANG_YARDIE_A */)) {
            await asyncWait(0);
        }

        // SCM GOTO → main_part_of_script (not lowered; manual jump required)
        throw new Error('unresolved GOTO main_part_of_script'); // fallback: would break linear control flow
    }

    async function create_random_ped() {
        if ($.delete_oldest_ped_time > 10000) {
            $.delete_oldest_ped_time = $.delete_oldest_ped_time - 5000;
        }

        if ($.ped_1_exists == 0) {
            // SCM label generate_coord_ped_1
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res23 = $.player.getCoordinates();
            $.garbage_x = _res23.x;
            $.garbage_y = _res23.y;
            $.garbage_z = _res23.z;
            const _res24 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_1_x = _res24.nodeX;
            $.ped_1_y = _res24.nodeY;
            $.ped_1_z = _res24.nodeZ;
            $.difference_x = $.garbage_x - $.ped_1_x;
            $.difference_y = $.garbage_y - $.ped_1_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_1 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_1'); // fallback: would break linear control flow
            }
            $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_1_blip.changeScale(3);
            $.ped_1_exists = 1;
            $.ped_1_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_2_exists == 0) {
            // SCM label generate_coord_ped_2
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res25 = $.player.getCoordinates();
            $.garbage_x = _res25.x;
            $.garbage_y = _res25.y;
            $.garbage_z = _res25.z;
            const _res26 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_2_x = _res26.nodeX;
            $.ped_2_y = _res26.nodeY;
            $.ped_2_z = _res26.nodeZ;
            $.difference_x = $.garbage_x - $.ped_2_x;
            $.difference_y = $.garbage_y - $.ped_2_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_2 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_2'); // fallback: would break linear control flow
            }
            $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_2_blip.changeScale(3);
            $.ped_2_exists = 1;
            $.ped_2_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_3_exists == 0) {
            // SCM label generate_coord_ped_3
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res27 = $.player.getCoordinates();
            $.garbage_x = _res27.x;
            $.garbage_y = _res27.y;
            $.garbage_z = _res27.z;
            const _res28 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_3_x = _res28.nodeX;
            $.ped_3_y = _res28.nodeY;
            $.ped_3_z = _res28.nodeZ;
            $.difference_x = $.garbage_x - $.ped_3_x;
            $.difference_y = $.garbage_y - $.ped_3_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_3 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_3'); // fallback: would break linear control flow
            }
            $.ped_3_blip = Blip.AddForCoordOld($.ped_3_x, $.ped_3_y, $.ped_3_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_3_blip.changeScale(3);
            $.ped_3_exists = 1;
            $.ped_3_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_4_exists == 0) {
            // SCM label generate_coord_ped_4
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res29 = $.player.getCoordinates();
            $.garbage_x = _res29.x;
            $.garbage_y = _res29.y;
            $.garbage_z = _res29.z;
            const _res30 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_4_x = _res30.nodeX;
            $.ped_4_y = _res30.nodeY;
            $.ped_4_z = _res30.nodeZ;
            $.difference_x = $.garbage_x - $.ped_4_x;
            $.difference_y = $.garbage_y - $.ped_4_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_4 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_4'); // fallback: would break linear control flow
            }
            $.ped_4_blip = Blip.AddForCoordOld($.ped_4_x, $.ped_4_y, $.ped_4_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_4_blip.changeScale(3);
            $.ped_4_exists = 1;
            $.ped_4_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_5_exists == 0) {
            // SCM label generate_coord_ped_5
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res31 = $.player.getCoordinates();
            $.garbage_x = _res31.x;
            $.garbage_y = _res31.y;
            $.garbage_z = _res31.z;
            const _res32 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_5_x = _res32.nodeX;
            $.ped_5_y = _res32.nodeY;
            $.ped_5_z = _res32.nodeZ;
            $.difference_x = $.garbage_x - $.ped_5_x;
            $.difference_y = $.garbage_y - $.ped_5_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_5 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_5'); // fallback: would break linear control flow
            }
            $.ped_5_blip = Blip.AddForCoordOld($.ped_5_x, $.ped_5_y, $.ped_5_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_5_blip.changeScale(3);
            $.ped_5_exists = 1;
            $.ped_5_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_6_exists == 0) {
            // SCM label generate_coord_ped_6
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res33 = $.player.getCoordinates();
            $.garbage_x = _res33.x;
            $.garbage_y = _res33.y;
            $.garbage_z = _res33.z;
            const _res34 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_6_x = _res34.nodeX;
            $.ped_6_y = _res34.nodeY;
            $.ped_6_z = _res34.nodeZ;
            $.difference_x = $.garbage_x - $.ped_6_x;
            $.difference_y = $.garbage_y - $.ped_6_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_6 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_6'); // fallback: would break linear control flow
            }
            $.ped_6_blip = Blip.AddForCoordOld($.ped_6_x, $.ped_6_y, $.ped_6_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_6_blip.changeScale(3);
            $.ped_6_exists = 1;
            $.ped_6_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_7_exists == 0) {
            // SCM label generate_coord_ped_7
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res35 = $.player.getCoordinates();
            $.garbage_x = _res35.x;
            $.garbage_y = _res35.y;
            $.garbage_z = _res35.z;
            const _res36 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_7_x = _res36.nodeX;
            $.ped_7_y = _res36.nodeY;
            $.ped_7_z = _res36.nodeZ;
            $.difference_x = $.garbage_x - $.ped_7_x;
            $.difference_y = $.garbage_y - $.ped_7_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_7 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_7'); // fallback: would break linear control flow
            }
            $.ped_7_blip = Blip.AddForCoordOld($.ped_7_x, $.ped_7_y, $.ped_7_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_7_blip.changeScale(3);
            $.ped_7_exists = 1;
            $.ped_7_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_8_exists == 0) {
            // SCM label generate_coord_ped_8
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res37 = $.player.getCoordinates();
            $.garbage_x = _res37.x;
            $.garbage_y = _res37.y;
            $.garbage_z = _res37.z;
            const _res38 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_8_x = _res38.nodeX;
            $.ped_8_y = _res38.nodeY;
            $.ped_8_z = _res38.nodeZ;
            $.difference_x = $.garbage_x - $.ped_8_x;
            $.difference_y = $.garbage_y - $.ped_8_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_8 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_8'); // fallback: would break linear control flow
            }
            $.ped_8_blip = Blip.AddForCoordOld($.ped_8_x, $.ped_8_y, $.ped_8_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_8_blip.changeScale(3);
            $.ped_8_exists = 1;
            $.ped_8_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_9_exists == 0) {
            // SCM label generate_coord_ped_9
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res39 = $.player.getCoordinates();
            $.garbage_x = _res39.x;
            $.garbage_y = _res39.y;
            $.garbage_z = _res39.z;
            const _res40 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_9_x = _res40.nodeX;
            $.ped_9_y = _res40.nodeY;
            $.ped_9_z = _res40.nodeZ;
            $.difference_x = $.garbage_x - $.ped_9_x;
            $.difference_y = $.garbage_y - $.ped_9_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_9 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_9'); // fallback: would break linear control flow
            }
            $.ped_9_blip = Blip.AddForCoordOld($.ped_9_x, $.ped_9_y, $.ped_9_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_9_blip.changeScale(3);
            $.ped_9_exists = 1;
            $.ped_9_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_10_exists == 0) {
            // SCM label generate_coord_ped_10
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res41 = $.player.getCoordinates();
            $.garbage_x = _res41.x;
            $.garbage_y = _res41.y;
            $.garbage_z = _res41.z;
            const _res42 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_10_x = _res42.nodeX;
            $.ped_10_y = _res42.nodeY;
            $.ped_10_z = _res42.nodeZ;
            $.difference_x = $.garbage_x - $.ped_10_x;
            $.difference_y = $.garbage_y - $.ped_10_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_10 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_10'); // fallback: would break linear control flow
            }
            $.ped_10_blip = Blip.AddForCoordOld($.ped_10_x, $.ped_10_y, $.ped_10_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_10_blip.changeScale(3);
            $.ped_10_exists = 1;
            $.ped_10_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_11_exists == 0) {
            // SCM label generate_coord_ped_11
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res43 = $.player.getCoordinates();
            $.garbage_x = _res43.x;
            $.garbage_y = _res43.y;
            $.garbage_z = _res43.z;
            const _res44 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_11_x = _res44.nodeX;
            $.ped_11_y = _res44.nodeY;
            $.ped_11_z = _res44.nodeZ;
            $.difference_x = $.garbage_x - $.ped_11_x;
            $.difference_y = $.garbage_y - $.ped_11_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_11 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_11'); // fallback: would break linear control flow
            }
            $.ped_11_blip = Blip.AddForCoordOld($.ped_11_x, $.ped_11_y, $.ped_11_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_11_blip.changeScale(3);
            $.ped_11_exists = 1;
            $.ped_11_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_12_exists == 0) {
            // SCM label generate_coord_ped_12
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res45 = $.player.getCoordinates();
            $.garbage_x = _res45.x;
            $.garbage_y = _res45.y;
            $.garbage_z = _res45.z;
            const _res46 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_12_x = _res46.nodeX;
            $.ped_12_y = _res46.nodeY;
            $.ped_12_z = _res46.nodeZ;
            $.difference_x = $.garbage_x - $.ped_12_x;
            $.difference_y = $.garbage_y - $.ped_12_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_12 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_12'); // fallback: would break linear control flow
            }
            $.ped_12_blip = Blip.AddForCoordOld($.ped_12_x, $.ped_12_y, $.ped_12_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_12_blip.changeScale(3);
            $.ped_12_exists = 1;
            $.ped_12_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_13_exists == 0) {
            // SCM label generate_coord_ped_13
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res47 = $.player.getCoordinates();
            $.garbage_x = _res47.x;
            $.garbage_y = _res47.y;
            $.garbage_z = _res47.z;
            const _res48 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_13_x = _res48.nodeX;
            $.ped_13_y = _res48.nodeY;
            $.ped_13_z = _res48.nodeZ;
            $.difference_x = $.garbage_x - $.ped_13_x;
            $.difference_y = $.garbage_y - $.ped_13_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_13 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_13'); // fallback: would break linear control flow
            }
            $.ped_13_blip = Blip.AddForCoordOld($.ped_13_x, $.ped_13_y, $.ped_13_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_13_blip.changeScale(3);
            $.ped_13_exists = 1;
            $.ped_13_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_14_exists == 0) {
            // SCM label generate_coord_ped_14
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res49 = $.player.getCoordinates();
            $.garbage_x = _res49.x;
            $.garbage_y = _res49.y;
            $.garbage_z = _res49.z;
            const _res50 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_14_x = _res50.nodeX;
            $.ped_14_y = _res50.nodeY;
            $.ped_14_z = _res50.nodeZ;
            $.difference_x = $.garbage_x - $.ped_14_x;
            $.difference_y = $.garbage_y - $.ped_14_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_14 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_14'); // fallback: would break linear control flow
            }
            $.ped_14_blip = Blip.AddForCoordOld($.ped_14_x, $.ped_14_y, $.ped_14_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_14_blip.changeScale(3);
            $.ped_14_exists = 1;
            $.ped_14_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        if ($.ped_15_exists == 0) {
            // SCM label generate_coord_ped_15
            $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
            $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
            const _res51 = $.player.getCoordinates();
            $.garbage_x = _res51.x;
            $.garbage_y = _res51.y;
            $.garbage_z = _res51.z;
            const _res52 = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
            $.ped_15_x = _res52.nodeX;
            $.ped_15_y = _res52.nodeY;
            $.ped_15_z = _res52.nodeZ;
            $.difference_x = $.garbage_x - $.ped_15_x;
            $.difference_y = $.garbage_y - $.ped_15_y;
            $.difference_x = $.difference_x * $.difference_x;
            $.difference_y = $.difference_y * $.difference_y;
            $.sum_diff = $.difference_x + $.difference_y;
            $.distance = Math.Sqrt($.sum_diff);
            if ($.distance < 110.0) {
                // SCM GOTO → generate_coord_ped_15 (not lowered; manual jump required)
                throw new Error('unresolved GOTO generate_coord_ped_15'); // fallback: would break linear control flow
            }
            $.ped_15_blip = Blip.AddForCoordOld($.ped_15_x, $.ped_15_y, $.ped_15_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_15_blip.changeScale(3);
            $.ped_15_exists = 1;
            $.ped_15_time = Clock.GetGameTimer();
            ++$.number_of_peds;
            return;
        }

        return;
    }

    async function main_part_of_script() {
        $.ped_1_x = 39.3;
        $.ped_1_y = -880.6;
        $.ped_1_z = 34.0;

        $.ped_2_x = -55.4331;
        $.ped_2_y = -974.3467;
        $.ped_2_z = 25.4;

        $.delete_oldest_ped_time = 80000;

        $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
        $.ped_1_blip.changeScale(3);

        $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
        $.ped_2_blip.changeScale(3);

        Text.PrintNow('KM5_6', 5000, 1); //"You must murder at least 8 Yardie dealers."
        Text.PrintSoon('KM5_7', 6000, 1); //"Kill them quickly!  Once they've pushed their SPANK they're off the streets."

        Hud.DisplayCounterWithString($.dead_peds, 0 /* COUNTER_DISPLAY_NUMBER */, 'KILLS');

        $.ped_1_exists = 1;
        $.ped_2_exists = 1;
        $.number_of_peds = 2;
        TIMERA = 0;

        while ($.number_of_peds > 0) {
            await asyncWait(0);
            if ($.dead_peds > 0) {
                if (TIMERA > $.delete_oldest_ped_time) {
                    TIMERA = 0;
                    // SCM GOSUB delete_oldest_ped
                    await delete_oldest_ped();
                    // fallback if label was not emitted as async function: no-op continues linearly
                }
            }
            if ($.ped_1_exists > 0) {
                if ($.ped_1_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_1_x, $.ped_1_y, 90.0, 90.0, false)) {
                        $.ped_1 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_1_x, $.ped_1_y, $.ped_1_z);
                        $.ped_1.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_1.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_1.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_1.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_1.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_1.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_1.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_1.wanderDir($.random_direction);
                        $.ped_1_blip.remove();
                        $.ped_1_blip = Blip.AddForCharOld($.ped_1, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_1_blip.changeScale(3);
                        $.ped_1_exists = 2;
                    }
                }
                if ($.ped_1_exists == 2) {
                    if (Char.IsDead($.ped_1)) {
                        $.ped_1_blip.remove();
                        $.ped_1.markAsNoLongerNeeded();
                        $.ped_1_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        if ($.on_screen_counter_flag == 0) {
                            Text.PrintSoon('KM5_7', 6000, 1); //"Kill them quickly!  Once they've pushed their SPANK they're off the streets."
                            TIMERA = 0;
                            $.on_screen_counter_flag = 1;
                        }
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_1_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_1, 90.0, 90.0, false)) {
                            const _res53 = $.ped_1.getCoordinates();
                            $.ped_1_x = _res53.x;
                            $.ped_1_y = _res53.y;
                            $.ped_1_z = _res53.z;
                            $.ped_1_blip.remove();
                            $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_1_blip.changeScale(3);
                            $.ped_1.delete();
                            $.ped_1_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_2_exists > 0) {
                if ($.ped_2_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_2_x, $.ped_2_y, 90.0, 90.0, false)) {
                        $.ped_2 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_2_x, $.ped_2_y, $.ped_2_z);
                        $.ped_2.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_2.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_2.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_2.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_2.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_2.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_2.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.ped_2_blip.remove();
                        $.ped_2_blip = Blip.AddForCharOld($.ped_2, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_2_blip.changeScale(3);
                        $.ped_2_exists = 2;
                    }
                }
                if ($.ped_2_exists == 2) {
                    if (Char.IsDead($.ped_2)) {
                        $.ped_2_blip.remove();
                        $.ped_2.markAsNoLongerNeeded();
                        $.ped_2_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        if ($.on_screen_counter_flag == 0) {
                            Text.PrintSoon('KM5_7', 6000, 1); //"Kill them quickly!  Once they've pushed their SPANK they're off the streets."
                            TIMERA = 0;
                            $.on_screen_counter_flag = 1;
                        }
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_2_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_2, 90.0, 90.0, false)) {
                            const _res54 = $.ped_2.getCoordinates();
                            $.ped_2_x = _res54.x;
                            $.ped_2_y = _res54.y;
                            $.ped_2_z = _res54.z;
                            $.ped_2_blip.remove();
                            $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_2_blip.changeScale(3);
                            $.ped_2.delete();
                            $.ped_2_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_3_exists > 0) {
                if ($.ped_3_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_3_x, $.ped_3_y, 90.0, 90.0, false)) {
                        $.ped_3 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_3_x, $.ped_3_y, $.ped_3_z);
                        $.ped_3.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_3.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_3.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_3.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_3.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_3.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_3.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_3.wanderDir($.random_direction);
                        $.ped_3_blip.remove();
                        $.ped_3_blip = Blip.AddForCharOld($.ped_3, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_3_blip.changeScale(3);
                        $.ped_3_exists = 2;
                    }
                }
                if ($.ped_3_exists == 2) {
                    if (Char.IsDead($.ped_3)) {
                        $.ped_3_blip.remove();
                        $.ped_3.markAsNoLongerNeeded();
                        $.ped_3_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_3_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_3, 90.0, 90.0, false)) {
                            const _res55 = $.ped_3.getCoordinates();
                            $.ped_3_x = _res55.x;
                            $.ped_3_y = _res55.y;
                            $.ped_3_z = _res55.z;
                            $.ped_3_blip.remove();
                            $.ped_3_blip = Blip.AddForCoordOld($.ped_3_x, $.ped_3_y, $.ped_3_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_3_blip.changeScale(3);
                            $.ped_3.delete();
                            $.ped_3_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_4_exists > 0) {
                if ($.ped_4_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_4_x, $.ped_4_y, 90.0, 90.0, false)) {
                        $.ped_4 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_4_x, $.ped_4_y, $.ped_4_z);
                        $.ped_4.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_4.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_4.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_4.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_4.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_4.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_4.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_4.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_4.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_4.wanderDir($.random_direction);
                        $.ped_4_blip.remove();
                        $.ped_4_blip = Blip.AddForCharOld($.ped_4, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_4_blip.changeScale(3);
                        $.ped_4_exists = 2;
                    }
                }
                if ($.ped_4_exists == 2) {
                    if (Char.IsDead($.ped_4)) {
                        $.ped_4_blip.remove();
                        $.ped_4.markAsNoLongerNeeded();
                        $.ped_4_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_4_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_4, 90.0, 90.0, false)) {
                            const _res56 = $.ped_4.getCoordinates();
                            $.ped_4_x = _res56.x;
                            $.ped_4_y = _res56.y;
                            $.ped_4_z = _res56.z;
                            $.ped_4_blip.remove();
                            $.ped_4_blip = Blip.AddForCoordOld($.ped_4_x, $.ped_4_y, $.ped_4_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_4_blip.changeScale(3);
                            $.ped_4.delete();
                            $.ped_4_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_5_exists > 0) {
                if ($.ped_5_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_5_x, $.ped_5_y, 90.0, 90.0, false)) {
                        $.ped_5 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_5_x, $.ped_5_y, $.ped_5_z);
                        $.ped_5.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_5.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_5.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_5.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_5.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_5.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_5.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_5.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_5.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_5.wanderDir($.random_direction);
                        $.ped_5_blip.remove();
                        $.ped_5_blip = Blip.AddForCharOld($.ped_5, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_5_blip.changeScale(3);
                        $.ped_5_exists = 2;
                    }
                }
                if ($.ped_5_exists == 2) {
                    if (Char.IsDead($.ped_5)) {
                        $.ped_5_blip.remove();
                        $.ped_5.markAsNoLongerNeeded();
                        $.ped_5_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_5_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_5, 90.0, 90.0, false)) {
                            const _res57 = $.ped_5.getCoordinates();
                            $.ped_5_x = _res57.x;
                            $.ped_5_y = _res57.y;
                            $.ped_5_z = _res57.z;
                            $.ped_5_blip.remove();
                            $.ped_5_blip = Blip.AddForCoordOld($.ped_5_x, $.ped_5_y, $.ped_5_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_5_blip.changeScale(3);
                            $.ped_5.delete();
                            $.ped_5_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_6_exists > 0) {
                if ($.ped_6_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_6_x, $.ped_6_y, 90.0, 90.0, false)) {
                        $.ped_6 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_6_x, $.ped_6_y, $.ped_6_z);
                        $.ped_6.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_6.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_6.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_6.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_6.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_6.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_6.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_6.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_6.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_6.wanderDir($.random_direction);
                        $.ped_6_blip.remove();
                        $.ped_6_blip = Blip.AddForCharOld($.ped_6, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_6_blip.changeScale(3);
                        $.ped_6_exists = 2;
                    }
                }
                if ($.ped_6_exists == 2) {
                    if (Char.IsDead($.ped_6)) {
                        $.ped_6_blip.remove();
                        $.ped_6.markAsNoLongerNeeded();
                        $.ped_6_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_6_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_6, 90.0, 90.0, false)) {
                            const _res58 = $.ped_6.getCoordinates();
                            $.ped_6_x = _res58.x;
                            $.ped_6_y = _res58.y;
                            $.ped_6_z = _res58.z;
                            $.ped_6_blip.remove();
                            $.ped_6_blip = Blip.AddForCoordOld($.ped_6_x, $.ped_6_y, $.ped_6_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_6_blip.changeScale(3);
                            $.ped_6.delete();
                            $.ped_6_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_7_exists > 0) {
                if ($.ped_7_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_7_x, $.ped_7_y, 90.0, 90.0, false)) {
                        $.ped_7 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_7_x, $.ped_7_y, $.ped_7_z);
                        $.ped_7.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_7.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_7.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_7.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_7.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_7.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_7.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_7.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_7.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_7.wanderDir($.random_direction);
                        $.ped_7_blip.remove();
                        $.ped_7_blip = Blip.AddForCharOld($.ped_7, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_7_blip.changeScale(3);
                        $.ped_7_exists = 2;
                    }
                }
                if ($.ped_7_exists == 2) {
                    if (Char.IsDead($.ped_7)) {
                        $.ped_7_blip.remove();
                        $.ped_7.markAsNoLongerNeeded();
                        $.ped_7_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_7_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_7, 90.0, 90.0, false)) {
                            const _res59 = $.ped_7.getCoordinates();
                            $.ped_7_x = _res59.x;
                            $.ped_7_y = _res59.y;
                            $.ped_7_z = _res59.z;
                            $.ped_7_blip.remove();
                            $.ped_7_blip = Blip.AddForCoordOld($.ped_7_x, $.ped_7_y, $.ped_7_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_7_blip.changeScale(3);
                            $.ped_7.delete();
                            $.ped_7_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_8_exists > 0) {
                if ($.ped_8_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_8_x, $.ped_8_y, 90.0, 90.0, false)) {
                        $.ped_8 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_8_x, $.ped_8_y, $.ped_8_z);
                        $.ped_8.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_8.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_8.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_8.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_8.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_8.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_8.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_8.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_8.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_8.wanderDir($.random_direction);
                        $.ped_8_blip.remove();
                        $.ped_8_blip = Blip.AddForCharOld($.ped_8, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_8_blip.changeScale(3);
                        $.ped_8_exists = 2;
                    }
                }
                if ($.ped_8_exists == 2) {
                    if (Char.IsDead($.ped_8)) {
                        $.ped_8_blip.remove();
                        $.ped_8.markAsNoLongerNeeded();
                        $.ped_8_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_8_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_8, 90.0, 90.0, false)) {
                            const _res60 = $.ped_8.getCoordinates();
                            $.ped_8_x = _res60.x;
                            $.ped_8_y = _res60.y;
                            $.ped_8_z = _res60.z;
                            $.ped_8_blip.remove();
                            $.ped_8_blip = Blip.AddForCoordOld($.ped_8_x, $.ped_8_y, $.ped_8_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_8_blip.changeScale(3);
                            $.ped_8.delete();
                            $.ped_8_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_9_exists > 0) {
                if ($.ped_9_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_9_x, $.ped_9_y, 90.0, 90.0, false)) {
                        $.ped_9 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_9_x, $.ped_9_y, $.ped_9_z);
                        $.ped_9.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_9.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_9.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_9.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_9.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_9.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_9.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_9.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_9.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_9.wanderDir($.random_direction);
                        $.ped_9_blip.remove();
                        $.ped_9_blip = Blip.AddForCharOld($.ped_9, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_9_blip.changeScale(3);
                        $.ped_9_exists = 2;
                    }
                }
                if ($.ped_9_exists == 2) {
                    if (Char.IsDead($.ped_9)) {
                        $.ped_9_blip.remove();
                        $.ped_9.markAsNoLongerNeeded();
                        $.ped_9_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_9_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_9, 90.0, 90.0, false)) {
                            const _res61 = $.ped_9.getCoordinates();
                            $.ped_9_x = _res61.x;
                            $.ped_9_y = _res61.y;
                            $.ped_9_z = _res61.z;
                            $.ped_9_blip.remove();
                            $.ped_9_blip = Blip.AddForCoordOld($.ped_9_x, $.ped_9_y, $.ped_9_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_9_blip.changeScale(3);
                            $.ped_9.delete();
                            $.ped_9_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_10_exists > 0) {
                if ($.ped_10_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_10_x, $.ped_10_y, 90.0, 90.0, false)) {
                        $.ped_10 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_10_x, $.ped_10_y, $.ped_10_z);
                        $.ped_10.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_10.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_10.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_10.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_10.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_10.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_10.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_10.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_10.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_10.wanderDir($.random_direction);
                        $.ped_10_blip.remove();
                        $.ped_10_blip = Blip.AddForCharOld($.ped_10, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_10_blip.changeScale(3);
                        $.ped_10_exists = 2;
                    }
                }
                if ($.ped_10_exists == 2) {
                    if (Char.IsDead($.ped_10)) {
                        $.ped_10_blip.remove();
                        $.ped_10.markAsNoLongerNeeded();
                        $.ped_10_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_10_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_10, 90.0, 90.0, false)) {
                            const _res62 = $.ped_10.getCoordinates();
                            $.ped_10_x = _res62.x;
                            $.ped_10_y = _res62.y;
                            $.ped_10_z = _res62.z;
                            $.ped_10_blip.remove();
                            $.ped_10_blip = Blip.AddForCoordOld($.ped_10_x, $.ped_10_y, $.ped_10_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_10_blip.changeScale(3);
                            $.ped_10.delete();
                            $.ped_10_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_11_exists > 0) {
                if ($.ped_11_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_11_x, $.ped_11_y, 90.0, 90.0, false)) {
                        $.ped_11 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_11_x, $.ped_11_y, $.ped_11_z);
                        $.ped_11.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_11.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_11.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_11.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_11.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_11.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_11.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_11.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_11.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_11.wanderDir($.random_direction);
                        $.ped_11_blip.remove();
                        $.ped_11_blip = Blip.AddForCharOld($.ped_11, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_11_blip.changeScale(3);
                        $.ped_11_exists = 2;
                    }
                }
                if ($.ped_11_exists == 2) {
                    if (Char.IsDead($.ped_11)) {
                        $.ped_11_blip.remove();
                        $.ped_11.markAsNoLongerNeeded();
                        $.ped_11_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_11_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_11, 90.0, 90.0, false)) {
                            const _res63 = $.ped_11.getCoordinates();
                            $.ped_11_x = _res63.x;
                            $.ped_11_y = _res63.y;
                            $.ped_11_z = _res63.z;
                            $.ped_11_blip.remove();
                            $.ped_11_blip = Blip.AddForCoordOld($.ped_11_x, $.ped_11_y, $.ped_11_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_11_blip.changeScale(3);
                            $.ped_11.delete();
                            $.ped_11_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_12_exists > 0) {
                if ($.ped_12_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_12_x, $.ped_12_y, 90.0, 90.0, false)) {
                        $.ped_12 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_12_x, $.ped_12_y, $.ped_12_z);
                        $.ped_12.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_12.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_12.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_12.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_12.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_12.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_12.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_12.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_12.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_12.wanderDir($.random_direction);
                        $.ped_12_blip.remove();
                        $.ped_12_blip = Blip.AddForCharOld($.ped_12, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_12_blip.changeScale(3);
                        $.ped_12_exists = 2;
                    }
                }
                if ($.ped_12_exists == 2) {
                    if (Char.IsDead($.ped_12)) {
                        $.ped_12_blip.remove();
                        $.ped_12.markAsNoLongerNeeded();
                        $.ped_12_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_12_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_12, 90.0, 90.0, false)) {
                            const _res64 = $.ped_12.getCoordinates();
                            $.ped_12_x = _res64.x;
                            $.ped_12_y = _res64.y;
                            $.ped_12_z = _res64.z;
                            $.ped_12_blip.remove();
                            $.ped_12_blip = Blip.AddForCoordOld($.ped_12_x, $.ped_12_y, $.ped_12_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_12_blip.changeScale(3);
                            $.ped_12.delete();
                            $.ped_12_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_13_exists > 0) {
                if ($.ped_13_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_13_x, $.ped_13_y, 90.0, 90.0, false)) {
                        $.ped_13 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_13_x, $.ped_13_y, $.ped_13_z);
                        $.ped_13.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_13.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_13.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_13.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_13.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_13.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_13.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_13.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_13.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_13.wanderDir($.random_direction);
                        $.ped_13_blip.remove();
                        $.ped_13_blip = Blip.AddForCharOld($.ped_13, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_13_blip.changeScale(3);
                        $.ped_13_exists = 2;
                    }
                }
                if ($.ped_13_exists == 2) {
                    if (Char.IsDead($.ped_13)) {
                        $.ped_13_blip.remove();
                        $.ped_13.markAsNoLongerNeeded();
                        $.ped_13_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_13_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_13, 90.0, 90.0, false)) {
                            const _res65 = $.ped_13.getCoordinates();
                            $.ped_13_x = _res65.x;
                            $.ped_13_y = _res65.y;
                            $.ped_13_z = _res65.z;
                            $.ped_13_blip.remove();
                            $.ped_13_blip = Blip.AddForCoordOld($.ped_13_x, $.ped_13_y, $.ped_13_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_13_blip.changeScale(3);
                            $.ped_13.delete();
                            $.ped_13_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_14_exists > 0) {
                if ($.ped_14_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_14_x, $.ped_14_y, 90.0, 90.0, false)) {
                        $.ped_14 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_14_x, $.ped_14_y, $.ped_14_z);
                        $.ped_14.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_14.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_14.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_14.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_14.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_14.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_14.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_14.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_14.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_14.wanderDir($.random_direction);
                        $.ped_14_blip.remove();
                        $.ped_14_blip = Blip.AddForCharOld($.ped_14, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_14_blip.changeScale(3);
                        $.ped_14_exists = 2;
                    }
                }
                if ($.ped_14_exists == 2) {
                    if (Char.IsDead($.ped_14)) {
                        $.ped_14_blip.remove();
                        $.ped_14.markAsNoLongerNeeded();
                        $.ped_14_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_14_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_14, 90.0, 90.0, false)) {
                            const _res66 = $.ped_14.getCoordinates();
                            $.ped_14_x = _res66.x;
                            $.ped_14_y = _res66.y;
                            $.ped_14_z = _res66.z;
                            $.ped_14_blip.remove();
                            $.ped_14_blip = Blip.AddForCoordOld($.ped_14_x, $.ped_14_y, $.ped_14_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_14_blip.changeScale(3);
                            $.ped_14.delete();
                            $.ped_14_exists = 1;
                        }
                    }
                }
            }
            if ($.ped_15_exists > 0) {
                if ($.ped_15_exists == 1) {
                    if ($.player.locateAnyMeans2D($.ped_15_x, $.ped_15_y, 90.0, 90.0, false)) {
                        $.ped_15 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, 18 /* PED_GANG_YARDIE_A */, $.ped_15_x, $.ped_15_y, $.ped_15_z);
                        $.ped_15.giveWeapon(3 /* WEAPONTYPE_UZI */, 999);
                        $.ped_15.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
                        $.ped_15.setThreatSearch(1048576 /* THREAT_GUN */);
                        $.ped_15.setThreatSearch(4194304 /* THREAT_FAST_CAR */);
                        $.ped_15.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.ped_15.setThreatSearch(2 /* THREAT_PLAYER2 */);
                        $.ped_15.setThreatSearch(4 /* THREAT_PLAYER3 */);
                        $.ped_15.setThreatSearch(8 /* THREAT_PLAYER4 */);
                        $.ped_15.setOnlyDamagedByPlayer(true /* TRUE */);
                        $.random_direction = Math.RandomIntInRange(0, 8);
                        $.ped_15.wanderDir($.random_direction);
                        $.ped_15_blip.remove();
                        $.ped_15_blip = Blip.AddForCharOld($.ped_15, 1 /* GREEN */, 3 /* BOTH */);
                        $.ped_15_blip.changeScale(3);
                        $.ped_15_exists = 2;
                    }
                }
                if ($.ped_15_exists == 2) {
                    if (Char.IsDead($.ped_15)) {
                        $.ped_15_blip.remove();
                        $.ped_15.markAsNoLongerNeeded();
                        $.ped_15_exists = 0;
                        ++$.dead_peds;
                        --$.number_of_peds;
                        Text.PrintNow('KM5_1', 2000, 1); // "One down, two more to kill."
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                        // SCM GOSUB create_random_ped
                        await create_random_ped();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if ($.ped_15_exists == 2) {
                        if (!$.player.locateAnyMeansChar2D($.ped_15, 90.0, 90.0, false)) {
                            const _res67 = $.ped_15.getCoordinates();
                            $.ped_15_x = _res67.x;
                            $.ped_15_y = _res67.y;
                            $.ped_15_z = _res67.z;
                            $.ped_15_blip.remove();
                            $.ped_15_blip = Blip.AddForCoordOld($.ped_15_x, $.ped_15_y, $.ped_15_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
                            $.ped_15_blip.changeScale(3);
                            $.ped_15.delete();
                            $.ped_15_exists = 1;
                        }
                    }
                }
            }
        }

        if ($.dead_peds > $.minimum_kills || $.dead_peds == $.minimum_kills) {
            // SCM GOTO → mission_kenji5_passed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_kenji5_passed'); // fallback: would break linear control flow
        } else {
            // SCM GOTO → mission_kenji5_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_kenji5_failed'); // fallback: would break linear control flow
        }
    }

    async function delete_oldest_ped() {
        $.oldest_ped = 0;

        $.oldest_ped_time = Clock.GetGameTimer();

        if ($.ped_1_exists == 1 && $.ped_1_time < $.oldest_ped_time) {
            $.oldest_ped = 1;
            $.oldest_ped_time = $.ped_1_time;
        }

        if ($.ped_2_exists == 1 && $.ped_2_time < $.oldest_ped_time) {
            $.oldest_ped = 2;
            $.oldest_ped_time = $.ped_2_time;
        }

        if ($.ped_3_exists == 1 && $.ped_3_time < $.oldest_ped_time) {
            $.oldest_ped = 3;
            $.oldest_ped_time = $.ped_3_time;
        }

        if ($.ped_4_exists == 1 && $.ped_4_time < $.oldest_ped_time) {
            $.oldest_ped = 4;
            $.oldest_ped_time = $.ped_4_time;
        }

        if ($.ped_5_exists == 1 && $.ped_5_time < $.oldest_ped_time) {
            $.oldest_ped = 5;
            $.oldest_ped_time = $.ped_5_time;
        }

        if ($.ped_6_exists == 1 && $.ped_6_time < $.oldest_ped_time) {
            $.oldest_ped = 6;
            $.oldest_ped_time = $.ped_6_time;
        }

        if ($.ped_7_exists == 1 && $.ped_7_time < $.oldest_ped_time) {
            $.oldest_ped = 7;
            $.oldest_ped_time = $.ped_7_time;
        }

        if ($.ped_8_exists == 1 && $.ped_8_time < $.oldest_ped_time) {
            $.oldest_ped = 8;
            $.oldest_ped_time = $.ped_8_time;
        }

        if ($.ped_9_exists == 1 && $.ped_9_time < $.oldest_ped_time) {
            $.oldest_ped = 9;
            $.oldest_ped_time = $.ped_9_time;
        }

        if ($.ped_10_exists == 1 && $.ped_10_time < $.oldest_ped_time) {
            $.oldest_ped = 10;
            $.oldest_ped_time = $.ped_10_time;
        }

        if ($.ped_11_exists == 1 && $.ped_11_time < $.oldest_ped_time) {
            $.oldest_ped = 11;
            $.oldest_ped_time = $.ped_11_time;
        }

        if ($.ped_12_exists == 1 && $.ped_12_time < $.oldest_ped_time) {
            $.oldest_ped = 12;
            $.oldest_ped_time = $.ped_12_time;
        }

        if ($.ped_13_exists == 1 && $.ped_13_time < $.oldest_ped_time) {
            $.oldest_ped = 13;
            $.oldest_ped_time = $.ped_13_time;
        }

        if ($.ped_14_exists == 1 && $.ped_14_time < $.oldest_ped_time) {
            $.oldest_ped = 14;
            $.oldest_ped_time = $.ped_14_time;
        }

        if ($.ped_15_exists == 1 && $.ped_15_time < $.oldest_ped_time) {
            $.oldest_ped = 15;
            $.oldest_ped_time = $.ped_15_time;
        }

        ///////////////////////////////////////

        if ($.oldest_ped == 1) {
            $.ped_1_blip.remove();
            $.ped_1.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_1_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 2) {
            $.ped_2_blip.remove();
            $.ped_2.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_2_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 3) {
            $.ped_3_blip.remove();
            $.ped_3.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_3_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 4) {
            $.ped_4_blip.remove();
            $.ped_4.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_4_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 5) {
            $.ped_5_blip.remove();
            $.ped_5.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_5_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 6) {
            $.ped_6_blip.remove();
            $.ped_6.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_6_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 7) {
            $.ped_7_blip.remove();
            $.ped_7.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_7_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 8) {
            $.ped_8_blip.remove();
            $.ped_8.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_8_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 9) {
            $.ped_9_blip.remove();
            $.ped_9.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_9_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 10) {
            $.ped_10_blip.remove();
            $.ped_10.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_10_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 11) {
            $.ped_11_blip.remove();
            $.ped_11.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_11_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 12) {
            $.ped_12_blip.remove();
            $.ped_12.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_12_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 13) {
            $.ped_13_blip.remove();
            $.ped_13.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_13_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 14) {
            $.ped_14_blip.remove();
            $.ped_14.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_14_exists = 0;
            --$.number_of_peds;
        }

        if ($.oldest_ped == 15) {
            $.ped_15_blip.remove();
            $.ped_15.markAsNoLongerNeeded();
            Text.PrintNow('KM5_2', 2000, 1); // "A Yardie has gone to ground."
            $.ped_15_exists = 0;
            --$.number_of_peds;
        }

        return;
    }

    // Mission Kenji5 failed
}

async function mission_kenji5_failed() {
    Text.PrintBig('M_FAIL', 5000, 1);
    Text.PrintWithNumberNow('KM5_3', $.minimum_kills, 3000, 1); // "You failed to kill at least ~1~ yardies."
    return;

    // mission Kenji5 passed
}

async function mission_kenji5_passed() {
    $.flag_kenji_mission5_passed = 1;
    Text.PrintWithNumberBig('m_pass', 10000, 5000, 1);
    $.player.addScore(10000);
    if ($.dead_peds == 8) {
        Text.PrintWithNumberNow('KM5_4', $.dead_peds, 3000, 1); // "Congratulations you killed ~1~ Yardies."
    } else {
        $.reward_kills = $.dead_peds - $.minimum_kills;
        $.reward_kills = $.reward_kills * 1000;
        Text.PrintWith2NumbersNow('KM5_5', $.dead_peds, $.reward_kills, 3000, 1); // "Congratulations you killed ~1~ Yardies."
    }
    $.player.clearWantedLevel();
    Stat.RegisterMissionPassed('KM5');
    Audio.PlayMissionPassedTune(1);
    Stat.PlayerMadeProgress(1);
    $.kenji_contact_blip.remove();
    return;

    // mission cleanup
}

async function mission_cleanup_kenji5() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_kenji_mission = 0;

    $.ped_1_blip.remove();
    $.ped_2_blip.remove();
    $.ped_3_blip.remove();
    $.ped_4_blip.remove();
    $.ped_5_blip.remove();
    $.ped_6_blip.remove();
    $.ped_7_blip.remove();
    $.ped_8_blip.remove();

    $.ped_9_blip.remove();
    $.ped_10_blip.remove();
    $.ped_11_blip.remove();
    $.ped_12_blip.remove();
    $.ped_13_blip.remove();
    $.ped_14_blip.remove();
    $.ped_15_blip.remove();

    Hud.ClearCounter($.dead_peds);

    Streaming.MarkModelAsNoLongerNeeded(18 /* PED_GANG_YARDIE_A */);

    Mission.Finish();

    return;
}

export async function kenji5() {
    // MissionBoundary
    // *****************************************************************************************
    // *******************************   Kenji Mission 5   *************************************
    // *******************************     Smack Down      *************************************
    // *****************************************************************************************
    // *** Kenji wants you to hit the Yardies pushing Spank for the Cartel. They're dotted   ***
    // *** about Liberty dealing in gangs or from vehicles. The player must race round the 	 ***
    // *** city splattering and killing all the dealers within a time limit. Occasionally 	 ***
    // *** they may have a 'backup vehicle' that will give chase to make the mission harder. ***
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_kenji5
    await mission_start_kenji5();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_kenji5_failed
        await mission_kenji5_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_kenji5
    await mission_cleanup_kenji5();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables For Mission

    // VAR_INT number_of_peds ped_2_exists ped_2_blip ped_2 delete_oldest_ped_time on_screen_counter_flag
    // VAR_INT ped_3_exists ped_3_blip ped_3 ped_4_exists ped_4_blip ped_4 dead_peds minimum_kills reward_kills
    // VAR_INT ped_1_time ped_2_time ped_3_time ped_4_time oldest_ped_time oldest_ped random_direction
    // VAR_INT ped_1_blip ped_1_exists ped_1
    // VAR_INT ped_5_blip ped_5_exists ped_5 ped_5_time
    // VAR_INT ped_6_blip ped_6_exists ped_6 ped_6_time
    // VAR_INT ped_7_blip ped_7_exists ped_7 ped_7_time cs_yakuza2
    // VAR_INT ped_8_blip ped_8_exists ped_8 ped_8_time
    // VAR_INT ped_9_blip ped_9_exists ped_9 ped_9_time
    // VAR_INT ped_10_blip ped_10_exists ped_10 ped_10_time
    // VAR_INT ped_11_blip ped_11_exists ped_11 ped_11_time
    // VAR_INT ped_12_blip ped_12_exists ped_12 ped_12_time
    // VAR_INT ped_13_blip ped_13_exists ped_13 ped_13_time
    // VAR_INT ped_14_blip ped_14_exists ped_14 ped_14_time
    // VAR_INT ped_15_blip ped_15_exists ped_15 ped_15_time

    // VAR_FLOAT ped_15_x ped_15_y ped_15_z
    // VAR_FLOAT ped_14_x ped_14_y ped_14_z
    // VAR_FLOAT ped_13_x ped_13_y ped_13_z
    // VAR_FLOAT ped_12_x ped_12_y ped_12_z
    // VAR_FLOAT ped_11_x ped_11_y ped_11_z
    // VAR_FLOAT ped_10_x ped_10_y ped_10_z
    // VAR_FLOAT ped_9_x ped_9_y ped_9_z
    // VAR_FLOAT ped_8_x ped_8_y ped_8_z
    // VAR_FLOAT ped_7_x ped_7_y ped_7_z
    // VAR_FLOAT ped_6_x ped_6_y ped_6_z
    // VAR_FLOAT ped_5_x ped_5_y ped_5_z
    // VAR_FLOAT ped_1_x ped_1_y ped_1_z
    // VAR_FLOAT ped_2_x ped_2_y ped_2_z ped_3_x ped_3_y ped_3_z
    // VAR_FLOAT ped_4_x ped_4_y ped_4_z random_commercial_x random_commercial_y garbage_x garbage_y garbage_z
    // VAR_FLOAT difference_x difference_y sum_diff distance

    // ****************************************Mission Start************************************
}
