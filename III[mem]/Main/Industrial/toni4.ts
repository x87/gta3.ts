// Generated from Main/Industrial/toni4.sc
import { $ } from '../../utils';


async function mission_start_toni4() {
    Stat.RegisterMissionGiven();
    $.flag_player_on_mission = 1;
    $.flag_player_on_toni_mission = 1;
    // SCRIPT_NAME toni4
    await asyncWait(0);

    $.grunts1_been_created_before = 0;
    $.grunts2_been_created_before = 0;
    $.grunts3_been_created_before = 0;
    $.grabbed_peds_before = 0;
    $.been_in_fish_factory = 0;
    $.audio_played_tm4 = 0;
    $.triad1_can_leg_it = 0;
    $.triad1_can_leg_it = 0;
    $.triad1_can_leg_it = 0;
    $.pay_back_for_traids1 = 0;
    $.pay_back_for_traids2 = 0;
    $.pay_back_for_traids3 = 0;

    {
        Streaming.RequestModel(10 /* PED_GANG_MAFIA_A */);
        Streaming.RequestModel(11 /* PED_GANG_MAFIA_B */);
        Streaming.RequestModel(537 /* ind_newrizzos */);
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
        Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'NOTE');

        Streaming.LoadAllModelsNow();

        while (
            !Streaming.HasModelLoaded(185 /* cut_obj1 */) ||
            !Streaming.HasModelLoaded(186 /* cut_obj2 */) ||
            !Streaming.HasModelLoaded(10 /* PED_GANG_MAFIA_A */) ||
            !Streaming.HasModelLoaded(11 /* PED_GANG_MAFIA_B */) ||
            !Streaming.HasModelLoaded(537 /* ind_newrizzos */)
        ) {
            await asyncWait(0);
        }

        $.mafia_goon1 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 11 /* PED_GANG_MAFIA_B */, 1216.4, -309.9, -100.0);
        $.mafia_goon2 = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, 10 /* PED_GANG_MAFIA_A */, 1215.9, -311.2, 29.0);

        if (!Char.IsDead($.mafia_goon1) && !Char.IsDead($.mafia_goon2)) {
            $.mafia_goon1.giveWeapon(3 /* WEAPONTYPE_UZI */, 300);
            $.mafia_goon1.setThreatSearch(64 /* THREAT_COP */);
            $.mafia_goon1.setThreatSearch(256 /* THREAT_GANG_TRIAD */);
            $.mafia_goon1.setRunning(true /* TRUE */);
            $.mafia_goon1.turnToFaceChar($.mafia_goon2);
            Game.SetCharsChatting($.mafia_goon1, $.mafia_goon2, 24000);
            $.mafia_goon2.giveWeapon(3 /* WEAPONTYPE_UZI */, 300);
            $.mafia_goon2.setThreatSearch(64 /* THREAT_COP */);
            $.mafia_goon2.setThreatSearch(256 /* THREAT_GANG_TRIAD */);
            $.mafia_goon2.setRunning(true /* TRUE */);
            $.mafia_goon2.turnToFaceChar($.mafia_goon1);
        }

        Cutscene.Load('T4_TAT');
        Cutscene.SetOffset(1218.42, -314.5, 28.9);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
        $.cs_player.setAnim('player');

        $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
        $.cs_playerhead.setAnim('player');

        $.cs_note = CutsceneObject.Create(186 /* cut_obj2 */);
        $.cs_note.setAnim('NOTE');

        World.ClearArea(1219.6, -323.0, 25.6, 1.0, true /* TRUE */);
        $.player.setCoordinates(1219.6, -323.0, 25.6);

        $.player.setHeading(180.0);

        World.ClearArea(1216.1, -313.0, 29.9, 10.0, true /* TRUE */); //TONIS RESTAURANT

        Camera.DoFade(1500, 1 /* FADE_IN */);

        //SWITCH_WORLD_PROCESSING OFF

        World.SwitchRubbish(false /* OFF */);
        Streaming.Switch(true /* ON */);
        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        while ($.cs_time < 82) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_A', 10000, 1); // Mission brief

        while ($.cs_time < 2415) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_A2', 10000, 1); // Mission brief

        while ($.cs_time < 4420) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_B', 10000, 1); // Mission brief

        while ($.cs_time < 7629) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_C', 10000, 1); // Mission brief

        while ($.cs_time < 11110) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_D', 10000, 1); // Mission brief

        while ($.cs_time < 13283) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_E', 10000, 1); // Mission brief

        while ($.cs_time < 18058) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_F', 10000, 1); // Mission brief

        while ($.cs_time < 21248) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('TM4_G', 10000, 1); // Mission brief

        while ($.cs_time < 24000) {
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

        //SWITCH_WORLD_PROCESSING ON

        World.SwitchRubbish(true /* ON */);
        Cutscene.Clear();
        Camera.SetInFrontOfPlayer();

        if (!Char.IsDead($.mafia_goon1) && !Char.IsDead($.mafia_goon2)) {
            Game.SetCharsChatting($.mafia_goon1, $.mafia_goon2, 0);
        }

        $.player.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
        $.player.setCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */);

        if (!Char.IsDead($.mafia_goon1) && !Char.IsDead($.mafia_goon2)) {
            $.mafia_goon1.setCoordinates(1220.2, -321.8, 26.4);
            $.mafia_goon2.setCoordinates(1219.0, -321.3, 26.4);
        }

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
        Streaming.MarkModelAsNoLongerNeeded(537 /* ind_newrizzos */);

        Streaming.RequestModel(12 /* PED_GANG_TRIAD_A */);
        Streaming.RequestModel(13 /* PED_GANG_TRIAD_B */);

        while (!Streaming.HasModelLoaded(12 /* PED_GANG_TRIAD_A */) || !Streaming.HasModelLoaded(13 /* PED_GANG_TRIAD_B */)) {
            await asyncWait(0);
        }

        Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */); //TEST

        $.warlords_dead = 0;
        $.triads_spot_you = 0;
        $.clear_triads_threats = 0;

        if (!Char.IsDead($.mafia_goon1)) {
            $.mafia_goon1.followPlayer($.player);
        }

        if (!Char.IsDead($.mafia_goon2)) {
            $.mafia_goon2.followPlayer($.player);
        }

        Zone.SetPedInfo('LITTLEI', 1 /* DAY */, 15, 500, 250, 0, 0, 0, 0, 0, 0);
        Zone.SetPedInfo('LITTLEI', 0 /* NIGHT */, 8, 500, 250, 0, 0, 0, 0, 0, 0);

        Zone.SetPedInfo('CHINA', 1 /* DAY */, 30, 350, 600, 0, 0, 0, 0, 0, 0);
        Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 30, 350, 600, 0, 0, 0, 0, 0, 0);

        // START MISSION

        //RESET_NUM_OF_MODELS_KILLED_BY_PLAYER

        $.triad_head1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 906.4, -541.4, 14.4); //Fish warhouse (Chinatown)
        $.triad_head1.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
        $.triad_head1.setHeading(109.0);
        $.blip1_tm4 = Blip.AddForChar($.triad_head1);
        $.triad_head1.addArmor(100);
        //SET_CHAR_THREAT_SEARCH triad_head1 THREAT_GANG_MAFIA

        $.triad_head1.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.triad_head1.setOnlyDamagedByPlayer(true /* TRUE */);
        $.triad_head1.setStayInSamePlace(true /* TRUE */);

        $.triad_head2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 968.6, -682.2, 14.3); //Market place
        $.triad_head2.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
        $.blip2_tm4 = Blip.AddForChar($.triad_head2);
        $.triad_head2.addArmor(100);
        //SET_CHAR_THREAT_SEARCH triad_head2 THREAT_GANG_MAFIA

        $.triad_head2.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.triad_head2.setOnlyDamagedByPlayer(true /* TRUE */);
        $.triad_head2.setStayInSamePlace(true /* TRUE */);

        $.triad_head3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 968.3, -1136.8, 15.0); //Fish factory
        $.triad_head3.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
        $.triad_head3.setHeading(38.0);
        $.blip3_tm4 = Blip.AddForChar($.triad_head3);
        $.triad_head3.addArmor(100);
        //SET_CHAR_THREAT_SEARCH triad_head3 THREAT_GANG_MAFIA

        $.triad_head3.setThreatSearch(1 /* THREAT_PLAYER1 */);
        $.triad_head3.setOnlyDamagedByPlayer(true /* TRUE */);
        $.triad_head3.setStayInSamePlace(true /* TRUE */);

        $.char_already_dead1 = 0;
        $.char_already_dead2 = 0;
        $.char_already_dead3 = 0;

        Audio.LoadMissionAudio('t4_a' as any);

        while (!Audio.HasMissionAudioLoaded()) {
            await asyncWait(0);
        }

        while (!($.warlords_dead == 3)) {
            await asyncWait(0);
            if (Char.IsDead($.triad_head1) && $.char_already_dead1 == 0) {
                $.blip1_tm4.remove();
                $.warlords_dead++;
                $.char_already_dead1 = 1;
            }
            if (Char.IsDead($.triad_head2) && $.char_already_dead2 == 0) {
                $.blip2_tm4.remove();
                $.warlords_dead++;
                $.char_already_dead2 = 1;
            }
            if (Char.IsDead($.triad_head3) && $.char_already_dead3 == 0) {
                $.blip3_tm4.remove();
                $.warlords_dead++;
                $.char_already_dead3 = 1;
            }
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
                        $.triads_spot_you = 1;
                    }
                }
            }
            if ($.player.isInZone('CHINA') && $.audio_played_tm4 == 0) {
                Audio.PlayMissionAudio();
                $.audio_played_tm4 = 1;
            }
            if ($.grunts1_been_created_before == 0) {
                if (!Char.IsDead($.triad_head1)) {
                    if ($.player.locateAnyMeansChar2D($.triad_head1, 80.0, 80.0, false /* FALSE */)) {
                        $.triad_grunt1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 907.4, -542.4, 14.4);
                        $.triad_grunt1.setHeading(180.0);
                        $.triad_grunt1.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt1.followChar($.triad_head1);
                        $.triad_grunt1.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_grunt1B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 907.4, -542.4, 14.4);
                        $.triad_grunt1B.setHeading(160.0);
                        $.triad_grunt1B.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt1B.followChar($.triad_head1);
                        $.triad_grunt1B.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_head1.setOnlyDamagedByPlayer(false /* FALSE */);
                        $.grunts1_been_created_before = 1;
                    }
                }
            }
            if (!Char.IsDead($.triad_head1)) {
                if ($.player.locateAnyMeansChar2D($.triad_head1, 30.0, 30.0, false /* FALSE */) && $.triad1_can_leg_it == 0) {
                    $.triad_head1.setStayInSamePlace(false /* FALSE */);
                    $.triad1_can_leg_it = 1;
                }
            }
            if ($.grunts2_been_created_before == 0) {
                if (!Char.IsDead($.triad_head2)) {
                    if ($.player.locateAnyMeansChar2D($.triad_head2, 80.0, 80.0, false /* FALSE */)) {
                        $.triad_grunt2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 965.6, -680.2, 14.3);
                        $.triad_grunt2.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt2.followChar($.triad_head2);
                        $.triad_grunt2.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_grunt2B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 965.5, -683.0, 14.3);
                        $.triad_grunt2B.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt2B.followChar($.triad_head2);
                        $.triad_grunt2B.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_head2.setOnlyDamagedByPlayer(false /* FALSE */);
                        $.grunts2_been_created_before = 1;
                    }
                }
            }
            if (!Char.IsDead($.triad_head2)) {
                if ($.player.locateAnyMeansChar2D($.triad_head2, 30.0, 30.0, false /* FALSE */) && $.triad2_can_leg_it == 0) {
                    $.triad_head2.setStayInSamePlace(false /* FALSE */);
                    $.triad2_can_leg_it = 1;
                }
            }
            if ($.grunts3_been_created_before == 0) {
                if (!Char.IsDead($.triad_head3)) {
                    if ($.player.locateAnyMeansChar2D($.triad_head3, 80.0, 80.0, false /* FALSE */)) {
                        $.triad_grunt3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 967.1, -1134.0, 15.0);
                        $.triad_grunt3.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt3.followChar($.triad_head3);
                        $.triad_grunt3.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_head3.setOnlyDamagedByPlayer(false /* FALSE */);
                        $.triad_grunt3B = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, 13 /* PED_GANG_TRIAD_B */, 966.1, -1129.0, 15.0);
                        $.triad_grunt3B.giveWeapon(3 /* WEAPONTYPE_UZI */, 80);
                        $.triad_grunt3B.followChar($.triad_head3);
                        $.triad_grunt3B.setThreatSearch(1 /* THREAT_PLAYER1 */);
                        $.triad_head3.setOnlyDamagedByPlayer(false /* FALSE */);
                        $.grunts3_been_created_before = 1;
                    }
                }
            }
            if ($.grunts1_been_created_before == 1 && $.pay_back_for_traids1 == 0) {
                if (Char.IsDead($.triad_grunt1) || Char.IsDead($.triad_grunt1B) || Char.IsDead($.triad_head1)) {
                    if (!Char.IsDead($.triad_grunt1)) {
                        $.triad_grunt1.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_grunt1B)) {
                        $.triad_grunt1B.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_head1)) {
                        $.triad_head1.setObjKillPlayerOnFoot($.player);
                    }
                    $.pay_back_for_traids1 = 1;
                }
            }
            if ($.grunts2_been_created_before == 1 && $.pay_back_for_traids2 == 0) {
                if (Char.IsDead($.triad_grunt2) || Char.IsDead($.triad_grunt2B) || Char.IsDead($.triad_head2)) {
                    if (!Char.IsDead($.triad_grunt2)) {
                        $.triad_grunt2.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_grunt2B)) {
                        $.triad_grunt2B.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_head2)) {
                        $.triad_head2.setObjKillPlayerOnFoot($.player);
                    }
                    $.pay_back_for_traids2 = 1;
                }
            }
            if ($.grunts3_been_created_before == 1 && $.pay_back_for_traids3 == 0) {
                if (Char.IsDead($.triad_grunt3) || Char.IsDead($.triad_grunt3B) || Char.IsDead($.triad_head3)) {
                    if (!Char.IsDead($.triad_grunt3)) {
                        $.triad_grunt3.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_grunt3B)) {
                        $.triad_grunt3B.setObjKillPlayerOnFoot($.player);
                    }
                    if (!Char.IsDead($.triad_head3)) {
                        $.triad_head3.setObjKillPlayerOnFoot($.player);
                    }
                    $.pay_back_for_traids3 = 1;
                }
            }
            if (!Char.IsDead($.triad_head3)) {
                if ($.player.locateAnyMeansChar2D($.triad_head3, 30.0, 30.0, false /* FALSE */) && $.triad3_can_leg_it == 0) {
                    $.triad_head3.setStayInSamePlace(false /* FALSE */);
                    $.triad3_can_leg_it = 1;
                }
            }
            if (!Char.IsDead($.mafia_goon1)) {
                if (!$.player.locateAnyMeansChar2D($.mafia_goon1, 120.0, 120.0, false /* FALSE */)) {
                    $.mafia_goon1.delete();
                } else {
                    if (!$.mafia_goon1.isInPlayersGroup($.player)) {
                        $.mafia_goon1.followPlayer($.player);
                    }
                }
            }
            if (!Char.IsDead($.mafia_goon2)) {
                if (!$.player.locateAnyMeansChar2D($.mafia_goon2, 120.0, 120.0, false /* FALSE */)) {
                    $.mafia_goon2.delete();
                } else {
                    if (!$.mafia_goon2.isInPlayersGroup($.player)) {
                        $.mafia_goon2.followPlayer($.player);
                    }
                }
            }
            if ($.player.isInArea3D(1025.2, -1108.4, 12.0, 1009.2, -1098.4, 16.0, false /* FALSE */)) {
                if (!$.player.isInModel(132 /* CAR_BELLYUP */) && !$.player.isInModel(98 /* CAR_TRASHMASTER */)) {
                    if ($.player.isInArea3D(1015.6, -1100.5, 12.0, 1009.2, -1108.1, 16.0, false /* FALSE */) && $.been_in_fish_factory == 0) {
                        $.been_in_fish_factory = 1;
                    }
                    if ($.been_in_fish_factory == 0) {
                        Text.PrintNow('TM4_GAT', 5000, 1); // Need Belly-up
                    }
                }
            }
        }
    }

    // SCM GOTO → mission_toni4_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_toni4_passed'); // fallback: would break linear control flow

    // Mission toni4 failed
}

async function mission_toni4_failed() {
    Zone.SetPedInfo('CHINA', 1 /* DAY */, 20, 0, 300, 0, 0, 0, 0, 0, 20); //China town
    Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);

    return;

    // mission toni4 passed
}

async function mission_toni4_passed() {
    $.flag_toni_mission4_passed = 1;
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig('M_PASS', 30000, 5000, 1); //"Mission Passed!"
    $.player.clearWantedLevel();
    $.player.addScore(30000);
    Stat.RegisterMissionPassed('TM4');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT toni_mission5_loop
    Zone.SetPedInfo('CHINA', 1 /* DAY */, 20, 0, 200, 0, 0, 0, 0, 0, 20); //China town
    Zone.SetPedInfo('CHINA', 0 /* NIGHT */, 10, 0, 300, 0, 0, 0, 0, 0, 10);
    return;

    // mission cleanup
}

async function mission_cleanup_toni4() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_toni_mission = 0;
    $.blip1_tm4.remove();
    $.blip2_tm4.remove();
    $.blip3_tm4.remove();
    Streaming.MarkModelAsNoLongerNeeded(10 /* PED_GANG_MAFIA_A */);
    Streaming.MarkModelAsNoLongerNeeded(11 /* PED_GANG_MAFIA_B */);
    Streaming.MarkModelAsNoLongerNeeded(12 /* PED_GANG_TRIAD_A */);
    Streaming.MarkModelAsNoLongerNeeded(13 /* PED_GANG_TRIAD_B */);
    //UNLOAD_SPECIAL_CHARACTER 1

    Game.SetThreatForPedType(8 /* PEDTYPE_GANG_TRIAD */, 1 /* THREAT_PLAYER1 */); //TEST
    Zone.SetPedInfo('LITTLEI', 1 /* DAY */, 17, 300, 0, 0, 0, 0, 0, 0, 20); //St Marks
    Zone.SetPedInfo('LITTLEI', 0 /* NIGHT */, 11, 400, 0, 0, 0, 0, 0, 0, 10);
    Mission.Finish();
    return;
}

export async function toni4() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Toni mission 4****************************************
    // ********************************Kill the Triad Warlords************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_toni4
    await mission_start_toni4();
    // fallback if label was not emitted as async function: no-op continues linearly

    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_toni4_failed
        await mission_toni4_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_toni4
    await mission_cleanup_toni4();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT blip1_tm4 blip2_tm4 blip3_tm4 triad1_can_leg_it triad2_can_leg_it triad3_can_leg_it

    // VAR_INT triad_head1 triad_head2 triad_head3 warlords_dead

    // VAR_INT triad_grunt1 triad_grunt1B triad_grunt2 triad_grunt2B triad_grunt3 triad_grunt3B

    // VAR_INT grunts1_been_created_before grunts2_been_created_before grunts3_been_created_before

    // VAR_INT mafia_goon1 mafia_goon2 been_in_fish_factory clear_triads_threats

    // VAR_INT grabbed_peds_before Fishbastards audio_played_tm4

    // VAR_INT char_already_dead1 char_already_dead2 char_already_dead3

    // VAR_INT pay_back_for_traids1 pay_back_for_traids2 pay_back_for_traids3

    // ***************************************Mission Start*************************************
}
