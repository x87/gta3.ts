// Generated from Main/Industrial/genstuf.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_genstuf() {
    {
        // START_NEW_SCRIPT ind_ammu
        // START_NEW_SCRIPT fish_factory_gen
        // START_NEW_SCRIPT tramp_tunnel
        // START_NEW_SCRIPT ind_sound
        // START_NEW_SCRIPT com_ammu
        // START_NEW_SCRIPT com_car_park
        // START_NEW_SCRIPT dog_sound
        // START_NEW_SCRIPT cobblers
        // MissionBoundary
    }
}

async function cobblers() {
    // SCM GOTO → cobblers lowered to endless loop
    while (true) {
        {
            await asyncWait(1000)
            if ($.flag_industrial_passed == 1) {
                $.info_pickup7a.remove()
                $.info_pickup8.remove()
                $.info_pickup9.remove()
                $.info_pickup3.remove()
                $.info_pickup4.remove()
                $.info_pickup5.remove()
                $.info_pickup1.remove()
                return // TERMINATE_THIS_SCRIPT
            }
        }
    }
}

async function check_info_pickup() {
    {
        // LVAR_INT pickup message_num
    }

    async function start_pickup_script() {
        // SCM GOTO → start_pickup_script lowered to endless loop
        while (true) {
            while (!pickup.hasBeenCollected()) {
                await asyncWait(500)
            }

            if (message_num == 1) {
                Text.PrintHelp('SPRAY')
            }

            if (message_num == 2) {
                Text.PrintHelp('BOMB')
            }

            if (message_num == 3) {
                Text.PrintHelp('AMMU')
            }

            if (message_num == 4) {
                Text.PrintHelp('SAVE2')
            }

            if (message_num == 5) {
                Text.PrintHelp('SAVE1')
            }

            if (message_num == 6) {
                Text.PrintHelp('CRUSH')
            }
            /*
    IF message_num = 7
    PRINT_HELP ( BRIDGE1 )
    ENDIF

    IF message_num = 8
    PRINT_HELP ( TUNNEL )
    ENDIF

    IF message_num = 9
    PRINT_HELP ( TUBE )
    ENDIF

    IF message_num = 10
    PRINT_HELP ( A_TRAIN )
    ENDIF

    WHILE HAS_PICKUP_BEEN_COLLECTED pickup
    WAIT 500
    ENDWHILE
    */
        }
    }
}

async function check_info_pickup_2() {
    {
        // LVAR_INT pickup message_num
    }

    async function start_pickup_script_2() {
        // SCM GOTO → start_pickup_script_2 lowered to endless loop
        while (true) {
            while (!pickup.hasBeenCollected()) {
                await asyncWait(500)
            }

            $.controlmode = Pad.GetControllerMode()

            /*
    IF message_num = 1
    PRINT_HELP ( SPRAY )
    ENDIF

    IF message_num = 2
    PRINT_HELP ( BOMB )
    ENDIF

    IF message_num = 3
    PRINT_HELP ( AMMU )
    ENDIF

    IF message_num = 4
    PRINT_HELP ( SAVE2 )
    ENDIF

    IF message_num = 5
    PRINT_HELP ( SAVE1 )
    ENDIF

    IF message_num = 6
    PRINT_HELP ( CRUSH )
    ENDIF
    */

            if (message_num == 7) {
                Text.PrintHelp('BRIDGE1')
            }

            if (message_num == 8) {
                Text.PrintHelp('TUNNEL')
            }

            if (message_num == 9) {
                Text.PrintHelp('TUBE1')
            }

            if (message_num == 10) {
                if ($.controlmode == 0 || $.controlmode == 1 || $.controlmode == 3) {
                    Text.PrintHelp('L_TRN_1') //"Press the~h~ \ button~w~ to ~h~enter ~w~or ~h~exit~w~ a vehicle."
                }
                if ($.controlmode == 2) {
                    Text.PrintHelp('L_TRN_2') //"Press the~h~ L1 button~w~ to ~h~enter ~w~or ~h~exit~w~ a vehicle."
                }
            }

            if (message_num == 11) {
                if ($.controlmode == 0 || $.controlmode == 1 || $.controlmode == 3) {
                    Text.PrintHelp('S_TRN_1') //"Press the~h~ \ button~w~ to ~h~enter ~w~or ~h~exit~w~ a vehicle."
                }
                if ($.controlmode == 2) {
                    Text.PrintHelp('S_TRN_2') //"Press the~h~ L1 button~w~ to ~h~enter ~w~or ~h~exit~w~ a vehicle."
                }
            }

            /*
    WHILE HAS_PICKUP_BEEN_COLLECTED pickup
    WAIT 500
    ENDWHILE
    */
        }
    }
}

async function ind_ammu() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME I_AMMU
    }

    async function ind_ammu_inner() {
        // SCM GOTO → ind_ammu_inner lowered to endless loop
        while (true) {
            await asyncWait(70)

            if ($.player.isPlaying()) {
                if ($.player.isInZone('LITTLEI')) {
                    if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false /* FALSE */)) {
                        if ($.camera_ammu1 == 0) {
                            $.player.setControl(false /* Off */)
                            Camera.SetFadingColor(1, 1, 1)
                            Streaming.Switch(false /* OFF */)
                            Streaming.LoadSpecialCharacter(4, 'sam')
                            Audio.SetMusicDoesFade(false /* FALSE */)
                            Camera.DoFade(500, 0 /* FADE_OUT */)
                            while (!Streaming.HasSpecialCharacterLoaded(4)) {
                                await asyncWait(0)
                            }
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            Streaming.Switch(true /* ON */)
                            $.current_time = Clock.GetGameTimer()
                            $.time_difference = $.current_time - $.time_since_murdering_shopkeeper1
                            if ($.time_difference > 60000) {
                                $.ammu_shop_bloke1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL4`, 1070.81, -396.97, 14.2)
                                $.ammu_shop_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                                $.ammu_shop_bloke1.setHeading(170.0)
                                $.ammu_shop_bloke1.setStayInSamePlace(true /* TRUE */)
                                $.ammu_shop_bloke1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999)
                                if ($.player.isPlaying()) {
                                    $.ammu_shop_bloke1.lookAtPlayerAlways($.player)
                                }
                            }
                            Streaming.UnloadSpecialCharacter(4)
                            Camera.SetFixedPosition(1071.95, -402.8, 17.0, 0.0, 0.0, 0.0)
                            Camera.EnablePlayerControl()
                            if ($.player.isPlaying()) {
                                Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */)
                                World.ClearArea(1067.9, -397.3, 14.2, 1.0, true /* TRUE */)
                                $.player.setCoordinates(1067.9, -397.3, 14.2)
                                $.player.setHeading(200.0)
                            }
                            Camera.DoFade(500, 1 /* FADE_IN */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            if ($.player.isPlaying()) {
                                $.player.setControl(true /* on */)
                            }
                            if (!Char.IsDead($.ammu_shop_bloke1)) {
                                if ($.special_ammu_audio == 0) {
                                    if ($.ammu_sample == 0) {
                                        $.ammu_shop_bloke1.setSay(103 /* SOUND_AMMUNATION_CHAT_1 */)
                                    }
                                    if ($.ammu_sample == 1) {
                                        $.ammu_shop_bloke1.setSay(104 /* SOUND_AMMUNATION_CHAT_2 */)
                                    }
                                    if ($.ammu_sample == 2) {
                                        $.ammu_shop_bloke1.setSay(105 /* SOUND_AMMUNATION_CHAT_3 */)
                                    }
                                }
                            }
                            $.camera_ammu1 = 1
                        } else {
                            if ($.player.isShooting()) {
                                if (!Char.IsDead($.ammu_shop_bloke1)) {
                                    if ($.ammu_bloke_kill_player == 0) {
                                        if ($.player.isPlaying()) {
                                            $.ammu_shop_bloke1.setObjKillPlayerOnFoot($.player)
                                        }
                                        $.ammu_bloke_kill_player = 1
                                    }
                                }
                            }
                        }
                    } else {
                        if ($.camera_ammu1 == 1) {
                            $.player.setControl(false /* Off */)
                            Camera.DoFade(500, 0 /* FADE_OUT */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
                                $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer()
                            }
                            $.ammu_shop_bloke1.delete()
                            World.ClearArea(1063.3, -395.3, 14.2, 1.0, true /* TRUE */)
                            if ($.player.isPlaying()) {
                                $.player.setCoordinates(1063.3, -395.3, 14.2)
                                $.player.setHeading(90.0)
                                Camera.RestoreJumpcut()
                                Camera.SetInFrontOfPlayer()
                            }
                            Camera.DoFade(500, 1 /* FADE_IN */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            Audio.SetMusicDoesFade(true /* TRUE */)
                            if ($.player.isPlaying()) {
                                $.player.setControl(true /* on */)
                            }
                            $.ammu_sample++
                            if ($.ammu_sample > 2) {
                                $.ammu_sample = 0
                            }
                            $.ammu_bloke_kill_player = 0
                            $.camera_ammu1 = 0
                        }
                    }
                } else {
                    if ($.camera_ammu1 == 1) {
                        if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
                            $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer()
                        }
                        Camera.RestoreJumpcut()
                        Camera.SetInFrontOfPlayer()
                        $.ammu_shop_bloke1.delete()
                        Audio.SetMusicDoesFade(true /* TRUE */)
                        $.camera_ammu1 = 0
                    }
                }
            }
        }
    }
}

async function fish_factory_gen() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME FISHGEN
    }

    async function fish_factory_gen_inner() {
        // SCM GOTO → fish_factory_gen_inner lowered to endless loop
        while (true) {
            await asyncWait(1000)

            if ($.player.isPlaying()) {
                //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL

                //FISH FACTORY SET UP
                if ($.fish_factory_destroyed == 0) {
                    if ($.player.isInZone('PORT_W')) {
                        //CREATES A GANG OF TRIADS DOWN AT THE FISH FACTORY

                        if ($.has_player_been_at_fish_before == 0) {
                            Streaming.RequestModel(ped`GANG_TRIAD_A`)
                            Streaming.RequestModel(ped`GANG_TRIAD_B`)
                            while (!Streaming.HasModelLoaded(ped`GANG_TRIAD_A`) || !Streaming.HasModelLoaded(ped`GANG_TRIAD_B`)) {
                                await asyncWait(0)
                            }
                            $.fish_triad1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 997.0, -1112.0, -100.0)
                            $.fish_triad1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad1 THREAT_GANG_MAFIA
                            $.fish_triad1.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 964.0, -1095.0, -100.0)
                            $.fish_triad2.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad2 THREAT_GANG_MAFIA
                            $.fish_triad2.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 982.0, -1085.0, -100.0)
                            $.fish_triad3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad3 THREAT_GANG_MAFIA
                            $.fish_triad3.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad4 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_B`, 953.0, -1122.0, -100.0)
                            $.fish_triad4.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad4 THREAT_GANG_MAFIA
                            $.fish_triad4.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad5 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 1008.0, -1126.0, -100.0)
                            $.fish_triad5.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad5 THREAT_GANG_MAFIA
                            $.fish_triad5.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad6 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 974.0, -1142.0, -100.0)
                            $.fish_triad6.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100)
                            //SET_CHAR_THREAT_SEARCH fish_triad6 THREAT_GANG_MAFIA
                            $.fish_triad6.setThreatSearch(0 /* THREAT_PLAYER1 */)
                            $.fish_triad1.wanderDir(0)
                            $.fish_triad2.wanderDir(0)
                            $.fish_triad3.wanderDir(0)
                            $.fish_triad4.wanderDir(0)
                            $.fish_triad5.wanderDir(0)
                            $.fish_triad6.wanderDir(0)
                            $.has_player_been_at_fish_before = 1
                        }
                    } else {
                        if ($.has_player_been_at_fish_before == 1) {
                            $.fish_triad1.markAsNoLongerNeeded()
                            $.fish_triad2.markAsNoLongerNeeded()
                            $.fish_triad3.markAsNoLongerNeeded()
                            $.fish_triad4.markAsNoLongerNeeded()
                            $.fish_triad5.markAsNoLongerNeeded()
                            $.fish_triad6.markAsNoLongerNeeded()
                            if ($.flag_player_on_mission == 0) {
                                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
                                Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
                                $.has_player_been_at_fish_before = 0
                            }
                        }
                    }
                } else {
                    if ($.has_player_been_at_fish_before == 1) {
                        $.fish_triad1.markAsNoLongerNeeded()
                        $.fish_triad2.markAsNoLongerNeeded()
                        $.fish_triad3.markAsNoLongerNeeded()
                        $.fish_triad4.markAsNoLongerNeeded()
                        $.fish_triad5.markAsNoLongerNeeded()
                        $.fish_triad6.markAsNoLongerNeeded()
                        if ($.flag_player_on_mission == 0) {
                            Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`)
                            Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_B`)
                            $.has_player_been_at_fish_before = 0
                        }
                    }
                }

                //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
            }
        }
    }
}

async function tramp_tunnel() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME TRAMPS
    }

    async function tramp_tunnel_inner() {
        // SCM GOTO → tramp_tunnel_inner lowered to endless loop
        while (true) {
            await asyncWait(1000)

            if ($.player.isPlaying()) {
                //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL

                //CREATES TRAMPS IN ABANDONED TUNNEL
                if ($.player.isInZone('LITTLEI')) {
                    if ($.player.isInArea3D(1325.0, -512.0, 14.0, 1315.0, -165.8, 17.0, false /* FALSE */)) {
                        if ($.has_player_been_in_tramp_tunnel_before == 0) {
                            Streaming.RequestModel(ped`SCUM_MAN`)
                            Streaming.RequestModel(ped`SCUM_WOMAN`)
                            while (!Streaming.HasModelLoaded(ped`SCUM_MAN`) || !Streaming.HasModelLoaded(ped`SCUM_WOMAN`)) {
                                await asyncWait(0)
                            }
                            $.tramp1 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_MAN`, 1320.4, -370.0, 15.0)
                            $.tramp1.giveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1)
                            $.tramp1.setPersonality(14 /* PEDSTAT_GEEK_GUY */)
                            $.tramp1.setThreatSearch(20 /* THREAT_GUN */)
                            $.tramp1.setThreatSearch(25 /* THREAT_DEADPEDS */)
                            $.tramp2 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_WOMAN`, 1317.0, -365.0, 15.0)
                            $.tramp2.giveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1)
                            $.tramp2.setHeading(290.0)
                            $.tramp2.setPersonality(14 /* PEDSTAT_GEEK_GUY */)
                            $.tramp2.setThreatSearch(20 /* THREAT_GUN */)
                            $.tramp2.setThreatSearch(25 /* THREAT_DEADPEDS */)
                            $.tramp3 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_WOMAN`, 1322.4, -367.0, 15.0)
                            $.tramp3.giveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1)
                            $.tramp3.setHeading(57.0)
                            $.tramp3.setPersonality(14 /* PEDSTAT_GEEK_GUY */)
                            $.tramp3.setThreatSearch(20 /* THREAT_GUN */)
                            $.tramp3.setThreatSearch(25 /* THREAT_DEADPEDS */)
                            $.tramp4 = Char.Create(19 /* PEDTYPE_BUM */, ped`SCUM_MAN`, 1320.0, -362.0, 15.0)
                            $.tramp4.giveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 1)
                            $.tramp4.setHeading(180.0)
                            $.tramp4.setPersonality(14 /* PEDSTAT_GEEK_GUY */)
                            $.tramp4.setThreatSearch(20 /* THREAT_GUN */)
                            $.tramp4.setThreatSearch(25 /* THREAT_DEADPEDS */)
                            Streaming.MarkModelAsNoLongerNeeded(ped`SCUM_MAN`)
                            Streaming.MarkModelAsNoLongerNeeded(ped`SCUM_WOMAN`)
                            $.tramps_been_created = 1
                            $.has_player_been_in_tramp_tunnel_before = 1
                        } else {
                            if ($.tramps_been_created == 1) {
                                if ($.tramp_is_dead == 0) {
                                    if (Char.IsDead($.tramp1) || Char.IsDead($.tramp2) || Char.IsDead($.tramp3) || Char.IsDead($.tramp4)) {
                                        TIMERA = 0
                                        $.tramp_is_dead = 1
                                    }
                                }
                            }
                        }
                    } else {
                        if ($.has_player_been_in_tramp_tunnel_before == 1) {
                            if ($.tramps_been_created == 1) {
                                $.tramp1.markAsNoLongerNeeded()
                                $.tramp2.markAsNoLongerNeeded()
                                $.tramp3.markAsNoLongerNeeded()
                                $.tramp4.markAsNoLongerNeeded()
                                $.tramps_been_created = 0
                            }
                            if ($.tramp_is_dead == 1) {
                                if (TIMERA > 1440000) {
                                    $.tramp_is_dead = 0
                                    $.has_player_been_in_tramp_tunnel_before = 0
                                }
                            } else {
                                $.has_player_been_in_tramp_tunnel_before = 0
                            }
                        }
                    }
                } else {
                    if ($.has_player_been_in_tramp_tunnel_before == 1) {
                        if ($.tramps_been_created == 1) {
                            $.tramp1.markAsNoLongerNeeded()
                            $.tramp2.markAsNoLongerNeeded()
                            $.tramp3.markAsNoLongerNeeded()
                            $.tramp4.markAsNoLongerNeeded()
                            $.tramps_been_created = 0
                        }
                        if ($.tramp_is_dead == 1) {
                            if (TIMERA > 1440000) {
                                $.tramp_is_dead = 0
                                $.has_player_been_in_tramp_tunnel_before = 0
                            }
                        } else {
                            $.has_player_been_in_tramp_tunnel_before = 0
                        }
                    }
                }

                //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
            }
        }
    }
}

async function ind_sound() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME I_SOUND
    }

    async function ind_sound_inner() {
        // SCM GOTO → ind_sound_inner lowered to endless loop
        while (true) {
            await asyncWait(1000)

            if ($.player.isPlaying()) {
                //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
                //TIME OF DAY SOUND EFFECTS	(REDLIGHT)

                if ($.player.isInZone('REDLIGH')) {
                    const _res261 = Clock.GetTimeOfDay()
                    $.hours = _res261.hours
                    $.minutes = _res261.minutes
                    if ($.hours >= 20 || $.hours <= 5) {
                        if ($.flag_sounds_added_redlight == 0) {
                            $.sound_loop8 = Sound.AddContinuous(891.9, -416.9, 16.1, 32 /* SOUND_STRIP_CLUB_LOOP_2_S */) //Luigi's club
                            $.sound_loop9 = Sound.AddContinuous(924.2, -464.3, 16.0, 30 /* SOUND_STRIP_CLUB_LOOP_1_S */) //Sex Kitten Club
                            $.sound_loop10 = Sound.AddContinuous(901.1, -392.0, 15.0, 62 /* SOUND_PORN_CINEMA_1_S */) //XXX Cinema1
                            $.sound_loop11 = Sound.AddContinuous(901.2, -339.0, 10.0, 64 /* SOUND_PORN_CINEMA_2_S */) //XXX Cinema2
                            $.sound_loop12 = Sound.AddContinuous(960.1, -379.0, 15.0, 66 /* SOUND_PORN_CINEMA_3_S */) //XXX Cinema
                            $.flag_sounds_added_redlight = 1
                        }
                    } else {
                        if ($.flag_sounds_added_redlight == 1) {
                            $.sound_loop8.remove()
                            $.sound_loop9.remove()
                            $.sound_loop10.remove()
                            $.sound_loop11.remove()
                            $.sound_loop12.remove()
                            $.flag_sounds_added_redlight = 0
                        }
                    }
                }

                //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
            }
        }
    }
}

async function dog_sound() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME D_SOUND
    }

    async function dog_sound_inner() {
        // SCM GOTO → dog_sound_inner lowered to endless loop
        while (true) {
            await asyncWait(1000)

            if ($.player.isPlaying()) {
                //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL

                if ($.player.isInZone('PORT_I')) {
                    const _res262 = Clock.GetTimeOfDay()
                    $.hours = _res262.hours
                    $.minutes = _res262.minutes
                    if ($.hours >= 9 && $.hours <= 17) {
                        if ($.flag_sounds_added_dog == 0) {
                            //Portland Industrial
                            $.sound_loop7 = Sound.AddContinuous(1210.9, -802.2, 15.0, 37 /* SOUND_SAWMILL_LOOP_L */) //Dog food factory
                            $.flag_sounds_added_dog = 1
                        }
                    } else {
                        if ($.flag_sounds_added_dog == 1) {
                            $.sound_loop7.remove()
                            $.flag_sounds_added_dog = 0
                        }
                    }
                }

                //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
            }
        }
    }
}

async function com_ammu() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME C_AMMU
    }

    async function com_ammu_inner() {
        // SCM GOTO → com_ammu_inner lowered to endless loop
        while (true) {
            await asyncWait(70)

            if ($.player.isPlaying()) {
                // AMMU NATION COMMERCIAL

                if ($.player.isInZone('COM_EAS')) {
                    if ($.player.isInArea3D(353.3, -711.7, 24.0, 339.8, -722.4, 28.0, false /* FALSE */)) {
                        if ($.camera_ammu2 == 0) {
                            $.player.setControl(false /* Off */)
                            Camera.SetFadingColor(1, 1, 1)
                            Streaming.Switch(false /* OFF */)
                            Streaming.LoadSpecialCharacter(4, 'sam')
                            Audio.SetMusicDoesFade(false /* FALSE */)
                            Camera.DoFade(500, 0 /* FADE_OUT */)
                            while (!Streaming.HasSpecialCharacterLoaded(4)) {
                                await asyncWait(0)
                            }
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            Streaming.Switch(true /* ON */)
                            $.current_time = Clock.GetGameTimer()
                            $.time_difference = $.current_time - $.time_since_murdering_shopkeeper1
                            if ($.time_difference > 60000) {
                                $.ammu_shop_bloke1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL4`, 350.2, -719.9, 25.4)
                                $.ammu_shop_bloke1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */)
                                $.ammu_shop_bloke1.setHeading(70.0)
                                $.ammu_shop_bloke1.setStayInSamePlace(true /* TRUE */)
                                $.ammu_shop_bloke1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999)
                                if ($.player.isPlaying()) {
                                    $.ammu_shop_bloke1.lookAtPlayerAlways($.player)
                                }
                            }
                            Streaming.UnloadSpecialCharacter(4)
                            Camera.SetFixedPosition(341.74, -720.676, 28.019, 0.0, 0.0, 0.0)
                            Camera.EnablePlayerControl()
                            if ($.player.isPlaying()) {
                                Camera.PointAtPlayer($.player, 15 /* FIXED */, 2 /* JUMP_CUT */)
                                World.ClearArea(350.7, -713.1, 26.4, 1.0, true /* TRUE */)
                                $.player.setCoordinates(350.7, -713.1, 25.4)
                                $.player.setHeading(108.0)
                            }
                            Camera.DoFade(500, 1 /* FADE_IN */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            if ($.player.isPlaying()) {
                                $.player.setControl(true /* on */)
                            }
                            if (!Char.IsDead($.ammu_shop_bloke1)) {
                                if ($.special_ammu_audio == 0) {
                                    if ($.ammu_sample == 0) {
                                        $.ammu_shop_bloke1.setSay(103 /* SOUND_AMMUNATION_CHAT_1 */)
                                    }
                                    if ($.ammu_sample == 1) {
                                        $.ammu_shop_bloke1.setSay(104 /* SOUND_AMMUNATION_CHAT_2 */)
                                    }
                                    if ($.ammu_sample == 2) {
                                        $.ammu_shop_bloke1.setSay(105 /* SOUND_AMMUNATION_CHAT_3 */)
                                    }
                                }
                            }
                            $.camera_ammu2 = 1
                        } else {
                            if ($.player.isShooting()) {
                                if (!Char.IsDead($.ammu_shop_bloke1)) {
                                    if ($.ammu_bloke_kill_player == 0) {
                                        if ($.player.isPlaying()) {
                                            $.ammu_shop_bloke1.setObjKillPlayerOnFoot($.player)
                                        }
                                        $.ammu_bloke_kill_player = 1
                                    }
                                }
                            }
                        }
                    } else {
                        if ($.camera_ammu2 == 1) {
                            $.player.setControl(false /* Off */)
                            Camera.DoFade(500, 0 /* FADE_OUT */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
                                $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer()
                            }
                            $.ammu_shop_bloke1.delete()
                            World.ClearArea(352.0, -708.8, 25.4, 1.0, true /* TRUE */)
                            if ($.player.isPlaying()) {
                                $.player.setCoordinates(352.0, -708.8, 25.4)
                                $.player.setHeading(0.0)
                                Camera.RestoreJumpcut()
                                Camera.SetInFrontOfPlayer()
                            }
                            Camera.DoFade(500, 1 /* FADE_IN */)
                            while (Camera.GetFadingStatus()) {
                                await asyncWait(0)
                            }
                            Audio.SetMusicDoesFade(true /* TRUE */)
                            if ($.player.isPlaying()) {
                                $.player.setControl(true /* on */)
                            }
                            $.ammu_sample++
                            if ($.ammu_sample > 2) {
                                $.ammu_sample = 0
                            }
                            $.ammu_bloke_kill_player = 0
                            $.camera_ammu2 = 0
                        }
                    }
                } else {
                    if ($.camera_ammu2 == 1) {
                        if (Char.IsDead($.ammu_shop_bloke1) && $.time_difference > 60000) {
                            $.time_since_murdering_shopkeeper1 = Clock.GetGameTimer()
                        }
                        Camera.RestoreJumpcut()
                        Camera.SetInFrontOfPlayer()
                        $.ammu_shop_bloke1.delete()
                        Audio.SetMusicDoesFade(true /* TRUE */)
                        $.camera_ammu2 = 0
                    }
                }
            }
        }
    }
}

async function com_car_park() {
    {
        //	Should be called in mission_start_genstuf
        // SCRIPT_NAME C_CARP
    }

    async function com_car_park_inner() {
        // SCM GOTO → com_car_park_inner lowered to endless loop
        while (true) {
            await asyncWait(250)

            if ($.player.isPlaying()) {
                if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
                    // PARKED CARS GENERATOR FOR THE MULTISTORY CARPARK IN NEWPORT
                    if ($.player.isInZone('COM_EAS')) {
                        if ($.player.isInArea3D(266.83, -610.93, 25.0, 306.31, -479.92, 30.0, false)) {
                            World.SetCarDensityMultiplier(0.0)
                            if ($.second_floor_cars_exist == 0) {
                                // SCM GOSUB second_floor_of_cars
                                await second_floor_of_cars()
                                // fallback if label was not emitted as async function: no-op continues linearly
                                $.second_floor_cars_exist = 1
                            }
                            if ($.third_floor_cars_exist == 1) {
                                World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84) // 3RD FLOOR CLEAR
                                $.third_floor_cars_exist = 0
                            }
                            if ($.fourth_floor_cars_exist == 1) {
                                World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0) // 4TH FLOOR CLEAR
                                $.fourth_floor_cars_exist = 0
                            }
                            if ($.fifth_floor_cars_exist == 1) {
                                World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0) // 5TH FLOOR CLEAR
                                $.fifth_floor_cars_exist = 0
                            }
                            $.need_to_clear_area_flag = 1
                        }
                        if ($.need_to_clear_area_flag > 0) {
                            if ($.player.isInArea3D(306.31, -610.93, 28.0, 346.81, -479.92, 32.42, false)) {
                                if ($.second_floor_cars_exist == 0) {
                                    // SCM GOSUB second_floor_of_cars
                                    await second_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.second_floor_cars_exist = 1
                                }
                                if ($.third_floor_cars_exist == 0) {
                                    // SCM GOSUB third_floor_of_cars
                                    await third_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.third_floor_cars_exist = 1
                                }
                                if ($.fourth_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0) // 4TH FLOOR CLEAR
                                    $.fourth_floor_cars_exist = 0
                                }
                                if ($.fifth_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0) // 5TH FLOOR CLEAR
                                    $.fifth_floor_cars_exist = 0
                                }
                                $.need_to_clear_area_flag = 2
                            }
                        }
                        if ($.need_to_clear_area_flag > 1) {
                            if ($.player.isInArea3D(266.83, -610.93, 30.4, 306.31, -479.92, 34.84, false)) {
                                if ($.second_floor_cars_exist == 0) {
                                    // SCM GOSUB second_floor_of_cars
                                    await second_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.second_floor_cars_exist = 1
                                }
                                if ($.third_floor_cars_exist == 0) {
                                    // SCM GOSUB third_floor_of_cars
                                    await third_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.third_floor_cars_exist = 1
                                }
                                if ($.fourth_floor_cars_exist == 0) {
                                    // SCM GOSUB fourth_floor_of_cars
                                    await fourth_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.fourth_floor_cars_exist = 1
                                }
                                if ($.fifth_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0) // 5TH FLOOR CLEAR
                                    $.fifth_floor_cars_exist = 0
                                }
                                $.need_to_clear_area_flag = 3
                            }
                        }
                        if ($.need_to_clear_area_flag > 2) {
                            if ($.player.isInArea3D(306.31, -610.93, 32.84, 346.81, -479.92, 40.0, false)) {
                                if ($.second_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42) // 2ND FLOOR CLEAR
                                    $.second_floor_cars_exist = 0
                                }
                                if ($.third_floor_cars_exist == 0) {
                                    // SCM GOSUB third_floor_of_cars
                                    await third_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.third_floor_cars_exist = 1
                                }
                                if ($.fourth_floor_cars_exist == 0) {
                                    // SCM GOSUB fourth_floor_of_cars
                                    await fourth_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.fourth_floor_cars_exist = 1
                                }
                                if ($.fifth_floor_cars_exist == 0) {
                                    // SCM GOSUB fifth_floor_of_cars
                                    await fifth_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.fifth_floor_cars_exist = 1
                                }
                                $.need_to_clear_area_flag = 4
                            }
                        }
                        if ($.need_to_clear_area_flag > 3) {
                            if ($.player.isInArea3D(266.83, -610.93, 35.23, 306.31, -479.92, 40.0, false)) {
                                if ($.second_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42) // 2ND FLOOR CLEAR
                                    $.second_floor_cars_exist = 0
                                }
                                if ($.third_floor_cars_exist == 1) {
                                    World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84) // 3RD FLOOR CLEAR
                                    $.third_floor_cars_exist = 0
                                }
                                if ($.fourth_floor_cars_exist == 0) {
                                    // SCM GOSUB fourth_floor_of_cars
                                    await fourth_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.fourth_floor_cars_exist = 1
                                }
                                if ($.fifth_floor_cars_exist == 0) {
                                    // SCM GOSUB fifth_floor_of_cars
                                    await fifth_floor_of_cars()
                                    // fallback if label was not emitted as async function: no-op continues linearly
                                    $.fifth_floor_cars_exist = 1
                                }
                                $.need_to_clear_area_flag = 5
                            }
                        }
                        if ($.need_to_clear_area_flag > 0) {
                            if (!$.player.isInArea3D(266.83, -610.93, 25.0, 346.81, -479.92, 40.0, false)) {
                                World.SetCarDensityMultiplier(1.0)
                                World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42) // 2ND FLOOR CLEAR
                                World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84) // 3RD FLOOR CLEAR
                                World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0) // 4TH FLOOR CLEAR
                                World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0) // 5TH FLOOR CLEAR
                                $.second_floor_cars_exist = 0
                                $.third_floor_cars_exist = 0
                                $.fourth_floor_cars_exist = 0
                                $.fifth_floor_cars_exist = 0
                                $.need_to_clear_area_flag = 0
                            }
                        }
                    }
                }
                if ($.need_to_clear_area_flag > 0) {
                    if (!$.player.isInArea3D(266.83, -610.93, 25.0, 346.81, -479.92, 40.0, false)) {
                        World.SetCarDensityMultiplier(1.0)
                        World.ClearAreaOfCars(306.31, -610.93, 28.0, 346.81, -479.92, 32.42) // 2ND FLOOR CLEAR
                        World.ClearAreaOfCars(266.83, -610.93, 30.4, 306.31, -479.92, 34.84) // 3RD FLOOR CLEAR
                        World.ClearAreaOfCars(306.31, -610.93, 32.84, 346.81, -479.92, 40.0) // 4TH FLOOR CLEAR
                        World.ClearAreaOfCars(266.83, -610.93, 35.23, 306.31, -479.92, 40.0) // 5TH FLOOR CLEAR
                        $.second_floor_cars_exist = 0
                        $.third_floor_cars_exist = 0
                        $.fourth_floor_cars_exist = 0
                        $.fifth_floor_cars_exist = 0
                        $.need_to_clear_area_flag = 0
                    }
                }
            }
        }
    }
}

async function second_floor_of_cars() {
    World.CreateRandomCarForCarPark(311.5469, -510.2604, 28.11, 91.0159) // 2ND FLOOR CARS
    World.CreateRandomCarForCarPark(323.5103, -526.5427, 28.11, 270.3409)
    World.CreateRandomCarForCarPark(342.6624, -542.3556, 28.11, 268.3777)
    World.CreateRandomCarForCarPark(311.4912, -554.4299, 28.11, 91.0689)
    World.CreateRandomCarForCarPark(310.4685, -574.6492, 28.11, 269.4606)
    World.CreateRandomCarForCarPark(342.7477, -590.4939, 28.11, 268.4776)
    return
}

async function third_floor_of_cars() {
    World.CreateRandomCarForCarPark(302.2802, -580.5526, 30.5114, 270.3723) // 3RD FLOOR CARS
    World.CreateRandomCarForCarPark(289.5574, -564.5915, 30.5114, 88.041)
    World.CreateRandomCarForCarPark(283.8795, -548.4308, 30.5114, 92.5479)
    World.CreateRandomCarForCarPark(270.6312, -528.4613, 30.5114, 88.6249)
    World.CreateRandomCarForCarPark(301.5385, -484.7673, 30.3863, 271.6668)
    return
}

async function fourth_floor_of_cars() {
    World.CreateRandomCarForCarPark(311.0863, -512.6859, 32.8451, 91.1545) // 4TH FLOOR CARS
    World.CreateRandomCarForCarPark(342.6769, -536.3028, 32.8375, 266.6709)
    World.CreateRandomCarForCarPark(311.4744, -564.1841, 32.8375, 267.5539)
    World.CreateRandomCarForCarPark(330.5274, -584.3387, 32.8375, 267.7581)
    World.CreateRandomCarForCarPark(342.9128, -600.663, 32.8375, 87.29)
    return
}

async function fifth_floor_of_cars() {
    World.CreateRandomCarForCarPark(282.3572, -582.5417, 35.2389, 267.0331) // 5TH FLOOR CARS
    World.CreateRandomCarForCarPark(302.7462, -574.5422, 35.2465, 271.0973)
    World.CreateRandomCarForCarPark(270.9382, -530.4745, 35.2389, 88.3213)
    World.CreateRandomCarForCarPark(303.2198, -510.6057, 35.2389, 88.6673)
    World.CreateRandomCarForCarPark(283.2274, -502.7662, 35.2389, 89.4868)
    World.CreateRandomCarForCarPark(302.4006, -485.5503, 35.2389, 266.0503)
    return

    /*
  check_for_dead_peds_in_genstuf:

  IF IS_CHAR_DEAD tramp1
  tramp1_dead = 1
  ELSE
  tramp1_dead = 0
  ENDIF

  IF IS_CHAR_DEAD tramp2
  tramp2_dead = 1
  ELSE
  tramp2_dead = 0
  ENDIF

  IF IS_CHAR_DEAD tramp3
  tramp3_dead = 1
  ELSE
  tramp3_dead = 0
  ENDIF

  IF IS_CHAR_DEAD tramp4
  tramp4_dead = 1
  ELSE
  tramp4_dead = 0
  ENDIF
  RETURN
  */
}

export async function genstuf() {
    // MissionBoundary

    // VAR_INT tramp1 tramp2 tramp3 tramp4 tramp_is_dead tramps_been_created
    // VAR_INT tramp1_dead tramp2_dead tramp3_dead tramp4_dead
    // VAR_INT has_player_been_in_tramp_tunnel_before
    // VAR_INT flag_sounds_added_redlight
    // VAR_INT camera_ammu1 camera_ammu2 ammu_sample
    // VAR_INT has_player_been_at_fish_before
    // VAR_INT flag_need_wall_change_km1 ammu_bloke_kill_player
    // VAR_INT flag_failed_love1 special_ammu_audio
    // VAR_INT need_to_clear_area_flag
    // VAR_INT fish_triad1 fish_triad2 fish_triad3 fish_triad4 fish_triad5 fish_triad6
    // VAR_INT flag_sounds_added_dog
    // VAR_INT second_floor_cars_exist third_floor_cars_exist fourth_floor_cars_exist fifth_floor_cars_exist

    $.second_floor_cars_exist = 0
    $.third_floor_cars_exist = 0
    $.fourth_floor_cars_exist = 0
    $.fifth_floor_cars_exist = 0

    $.need_to_clear_area_flag = 0
    $.has_player_been_at_fish_before = 0
    $.has_player_been_in_tramp_tunnel_before = 0
    $.flag_sounds_added_redlight = 0
    $.tramps_been_created = 0
    $.tramp_is_dead = 0
    $.camera_ammu1 = 0
    $.camera_ammu2 = 0
    $.flag_sounds_added_dog = 0

    //loaded_all_industrial_models_before = 0
    //loaded_all_commercial_models_before = 0
    //loaded_all_suburban_models_before = 0

    $.flag_failed_love1 = 0
    $.flag_need_wall_change_km1 = 0
    $.flag_player_on_phil_mission = 0
    $.tramp1 = -1
    $.tramp2 = -1
    $.tramp3 = -1
    $.tramp4 = -1
    $.tramp1_dead = 0
    $.tramp2_dead = 0
    $.tramp4_dead = 0
    $.tramp3_dead = 0
    $.ammu_sample = 0
    $.special_ammu_audio = 0
    $.ammu_bloke_kill_player = 0

    // SCRIPT_NAME genstuf

    // SET_DEATHARREST_STATE(false /* OFF */);
}
