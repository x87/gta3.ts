// Generated from Main/Suburban/asusb2.sc
import { $ } from '../../vars.mts'
import { car, ped, hier } from '../../ide.mts'

async function mission_start_as2() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME asusb2
    $.flag_player_on_mission = 1
    $.flag_player_on_asuka_suburban_mission = 1

    await asyncWait(0)

    //WAIT 1000

    //---------------------------------SET FLAGS & VARIABLES-------------------------------------------

    $.flag_kappa1_dead = 0
    $.flag_kappa2_dead = 0
    $.flag_kappa3_dead = 0
    $.flag_kappa4_dead = 0
    $.flag_kappa5_dead = 0
    $.flag_kappa6_dead = 0
    $.flag_kappa7_dead = 0
    $.flag_kappa8_dead = 0
    $.flag_kappa9_dead = 0
    $.flag_kappa10_dead = 0
    $.flag_kappa11_dead = 0
    $.flag_kappa12_dead = 0

    $.flag_kappa1_created = 0
    $.flag_kappa2_created = 0
    $.flag_kappa3_created = 0
    $.flag_kappa4_created = 0
    $.flag_kappa5_created = 0
    $.flag_kappa6_created = 0
    $.flag_kappa7_created = 0
    $.flag_kappa8_created = 0
    $.flag_kappa9_created = 0
    $.flag_kappa10_created = 0
    $.flag_kappa11_created = 0
    $.flag_kappa12_created = 0

    $.blip_kappa1_created = 0
    $.blip_kappa2_created = 0
    $.blip_kappa3_created = 0
    $.blip_kappa4_created = 0
    $.blip_kappa5_created = 0
    $.blip_kappa6_created = 0
    $.blip_kappa7_created = 0
    $.blip_kappa8_created = 0
    $.blip_kappa9_created = 0
    $.blip_kappa10_created = 0
    $.blip_kappa11_created = 0
    $.blip_kappa12_created = 0

    $.counter_kappa_dead = 0

    $.particle_time_as2 = 0

    $.counter_kappa_dead_ind = 0
    $.counter_kappa_dead_com = 0
    $.counter_kappa_dead_sub = 0

    $.flag_as2_1 = 0
    $.flag_as2_2 = 0
    $.flag_as2_3 = 0
    $.flag_particle_as2 = 0

    $.flag_guard1_created = 0

    $.kappa_time = 470000
    $.flag_timer_started = 0

    // ****************************************LOCATION COORDS**************************************

    $.kappa1_x = 1342.0
    $.kappa1_y = -821.0

    $.kappa2_x = 1024.1
    $.kappa2_y = -465.57

    $.kappa3_x = 1351.22
    $.kappa3_y = -259.56

    $.kappa4_x = 286.4
    $.kappa4_y = -667.8

    $.kappa5_x = 28.0
    $.kappa5_y = -850.0

    $.kappa6_x = 14.16
    $.kappa6_y = -1140.0

    $.kappa7_x = 73.16
    $.kappa7_y = -1359.8

    $.kappa8_x = -221.0
    $.kappa8_y = -197.0

    $.kappa9_x = 282.8
    $.kappa9_y = -1492.4

    $.kappa10_x = -644.0
    $.kappa10_y = -721.5

    $.kappa11_x = -212.0
    $.kappa11_y = 310.0

    $.kappa12_x = -1255.0
    $.kappa12_y = -113.0

    //  ******************************************* START OF CUTSCENE ***************************

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_as2_failed
  ENDIF

  //	PRINT_BIG ( AS2 ) 15000 2

  SET_FADING_COLOUR 0 0 0

  DO_FADE 250 FADE_OUT

  PRINT_BIG ( AS2 ) 15000 2

  SWITCH_STREAMING OFF
  */

    Streaming.RequestModel(2011 /* csitecutscene */)

    Streaming.LoadSpecialCharacter(1, 'asuka')
    Streaming.LoadSpecialCharacter(2, 'miguel')

    Streaming.LoadSpecialModel(hier`cutobj01`, 'PLAYERH')
    Streaming.LoadSpecialModel(hier`cutobj02`, 'ASUKAH')
    Streaming.LoadSpecialModel(hier`cutobj03`, 'WHIP')

    /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasModelLoaded(2011 /* csitecutscene */)) {
        await asyncWait(0)
    }

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2)) {
        await asyncWait(0)
    }

    while (!Streaming.HasModelLoaded(hier`cutobj01`) || !Streaming.HasModelLoaded(hier`cutobj02`) || !Streaming.HasModelLoaded(hier`cutobj03`)) {
        await asyncWait(0)
    }

    Cutscene.Load('a7_etg')

    Streaming.Switch(true /* ON */)

    Cutscene.SetOffset(369.02, -327.5, 18.46)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim('player')

    $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`)
    $.cs_asuka.setAnim('asuka')

    $.cs_miguel = CutsceneObject.Create(ped`SPECIAL2`)
    $.cs_miguel.setAnim('miguel')

    $.cs_whip = CutsceneObject.Create(hier`cutobj03`)
    $.cs_whip.setAnim('WHIP')

    $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
    $.cs_playerhead.setAnim('player')

    $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj02`)
    $.cs_asukahead.setAnim('asuka')

    //CREATE_CUTSCENE_HEAD cs_miguel CUT_OBJ3 cs_miguelhead
    //SET_CUTSCENE_HEAD_ANIM cs_miguelhead miguel

    $.player.setCoordinates(373.7523, -327.2676, 17.195)

    $.player.setHeading(270.0)

    Camera.DoFade(250, 1 /* FADE_IN */)

    World.SwitchRubbish(false /* OFF */)
    Streaming.Switch(false /* OFF */)
    World.SwitchProcessing(false /* OFF */)

    Cutscene.Start()

    //------CUTSCENE TEXT-----------------------------

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 3445) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_A1', 10000, 1)

    while ($.cs_time < 7961) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_A2', 10000, 1)

    while ($.cs_time < 9836) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_A', 10000, 1)

    while ($.cs_time < 13013) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_B', 10000, 1)

    while ($.cs_time < 16802) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_C', 10000, 1)

    while ($.cs_time < 20591) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_D', 10000, 1)

    while ($.cs_time < 23499) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_E', 10000, 1)

    while ($.cs_time < 27594) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('AS2_F', 10000, 1)

    while ($.cs_time < 30000) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Camera.DoFade(1500, 0 /* FADE_OUT */)

    while (!Cutscene.HasFinished()) {
        await asyncWait(0)
    }

    Text.ClearPrints()

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Cutscene.Clear()

    Camera.DoFade(0, 0 /* FADE_OUT */)

    Camera.SetBehindPlayer()

    await asyncWait(500)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    Streaming.UnloadSpecialCharacter(1)
    Streaming.UnloadSpecialCharacter(2)
    Streaming.MarkModelAsNoLongerNeeded(2011 /* csitecutscene */)

    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`)

    World.SwitchRubbish(true /* ON */)
    Streaming.Switch(true /* ON */)
    World.SwitchProcessing(true /* ON */)
    // ******************************************END OF CUTSCENE********************************

    // Mission stuff goes here

    Hud.DisplayCounterWithString($.counter_kappa_dead, 0 /* COUNTER_DISPLAY_NUMBER */, 'KILLS')

    $.timer_as2_start = Clock.GetGameTimer()

    Text.PrintNow('AS2_12', 5000, 1) //Cruise Liberty's districts to find etc. etc.

    Text.PrintSoon('AS2_12A', 5000, 1)

    Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */) //The Mafia

    /*
  REQUEST_MODEL PED_FEMALE1
  WHILE NOT HAS_MODEL_LOADED PED_FEMALE1
  WAIT 0
  ENDWHILE
  */

    Streaming.RequestModel(1403 /* coffee */)
    while (!Streaming.HasModelLoaded(1403 /* coffee */)) {
        await asyncWait(0)
    }

    Streaming.RequestModel(car`COLUMB`)
    while (!Streaming.HasModelLoaded(car`COLUMB`)) {
        await asyncWait(0)
    }
    Streaming.RequestModel(ped`GANG_COLOMBIAN_A`)
    while (!Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) {
        await asyncWait(0)
    }
    Streaming.RequestModel(ped`GANG_COLOMBIAN_B`)
    while (!Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`)) {
        await asyncWait(0)
    }

    /*
  PRINT_NOW (AS2_A) 4000 1 //We underestimated Catalina's plans for SPANK. It reaches far beyond the Yardies selling it on street corners.
  MESSAGE_WAIT 4000 true
  PRINT_NOW (AS2_B) 4000 1 //The Cartel have a front company; The Kappa Coffee House franchise.
  MESSAGE_WAIT 4000 true
  PRINT_NOW (AS2_C) 4000 1 //They've been selling SPANK through street stalls all over Liberty's three districts.
  MESSAGE_WAIT 4000 true
  PRINT_NOW (AS2_D) 4000 1 //Put all these drug barrows out of operation!!
  MESSAGE_WAIT 4000 true
  PRINT_NOW (AS2_E) 4000 1 //Once you've done the first hit, you'll have eight minutes before the Cartel can warn their pushers.
  MESSAGE_WAIT 4000 true

  //-----test stuff-----
  test_x = 354.0
  test_y = -327.0
  CREATE_OBJECT coffee test_x test_y -100.0 kappa_test
  //SET_OBJECT_HEADING kappa_test 0.0
  */

    while ($.counter_kappa_dead < 9) {
        await asyncWait(0)
        //-------------------------------------------CREATE KAPPAS------------------------------------------------------------------------------------
        if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
            if ($.flag_kappa1_created == 0) {
                if ($.player.locateAnyMeans2D($.kappa1_x, $.kappa1_y, 150.0, 150.0, false /* false */)) {
                    $.kappa_cartel1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, $.kappa1_x, $.kappa1_y, -100.0)
                    //SET_CHAR_HEADING kappa_cartel1 270.0
                    $.kappa_cartel1.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel1.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_cartel1.setStayInSamePlace(true /* true */)
                    $.kappa_1 = ScriptObject.Create(1403 /* coffee */, $.kappa1_x, $.kappa1_y, -100.0)
                    $.kappa_1.setHeading(180.0)
                    $.kappa_1.setCollision(true /* true */)
                    $.kappa_1.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE -1350.4 -259.6 49.7 false
                    if ($.blip_kappa1_created == 0) {
                        $.blip_kappa1 = Blip.AddForObject($.kappa_1)
                        $.blip_kappa1_created = 1
                    }
                    $.flag_kappa1_created = 1
                }
            }

            /*
      IF flag_kappa2_created = 0
      IF LOCATE_PLAYER_ANY_MEANS_2D player kappa2_x kappa2_y 70.0 70.0 false
      CREATE_CHAR PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_B kappa2_x kappa2_y -100.0 kappa_cartel2
      //SET_CHAR_HEADING kappa_cartel2 270.0
      SET_CHAR_THREAT_SEARCH kappa_cartel2 THREAT_PLAYER1
      GIVE_WEAPON_TO_CHAR kappa_cartel2 WEAPONTYPE_UZI 60
      SET_CHAR_STAY_IN_SAME_PLACE kappa_cartel2 true
      CREATE_OBJECT coffee kappa2_x kappa2_y -100.0 kappa_2
      SET_OBJECT_HEADING kappa_2 270.0
      SET_OBJECT_COLLISION kappa_2 true
      SET_OBJECT_DYNAMIC kappa_2 false
      //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 1024.2 -466.5 14.9 false
      IF blip_kappa2_created = 0
      ADD_BLIP_FOR_OBJECT kappa_2 blip_kappa2
      blip_kappa2_created = 1
      ENDIF
      flag_Kappa2_created = 1
      ENDIF
      ENDIF
      */

            if ($.flag_kappa3_created == 0) {
                if ($.player.isInZone('LITTLEI')) {
                    $.kappa_cartel3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, $.kappa3_x, $.kappa3_y, -100.0)
                    $.kappa_cartel3.setHeading(270.0)
                    $.kappa_cartel3.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel3.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10)
                    $.kappa_cartel3.setStayInSamePlace(true /* true */)
                    $.kappa_3 = ScriptObject.Create(1403 /* coffee */, $.kappa3_x, $.kappa3_y, -100.0)
                    $.kappa_3.setHeading(180.0)
                    $.kappa_3.setCollision(true /* true */)
                    $.kappa_3.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 1343.3 -845.5 15.0 false
                    if ($.blip_kappa3_created == 0) {
                        $.blip_kappa3 = Blip.AddForObject($.kappa_3)
                        $.blip_kappa3_created = 1
                    }
                    $.flag_kappa3_created = 1
                }
            }
            /*	ELSE
      IF flag_kappa1_created = 1
      IF flag_kappa1_dead = 0
      DELETE_CHAR kappa_cartel1
      DELETE_OBJECT kappa_1
      flag_kappa1_created = 0
      blip_kappa1_created = 0
      ENDIF
      IF flag_kappa1_dead = 1
      DELETE_CHAR kappa_cartel1
      DELETE_OBJECT kappa_1
      ENDIF
      ENDIF

      IF flag_kappa2_created = 1
      IF flag_kappa2_dead = 0
      DELETE_CHAR kappa_cartel2
      DELETE_OBJECT kappa_2
      flag_kappa2_created = 0
      blip_kappa2_created = 0
      ENDIF
      IF flag_kappa2_dead = 1
      DELETE_CHAR kappa_cartel2
      DELETE_OBJECT kappa_2
      ENDIF
      ENDIF

      IF flag_kappa3_created = 1
      IF flag_kappa3_dead = 0
      DELETE_CHAR kappa_cartel3
      DELETE_OBJECT kappa_3
      flag_kappa3_created = 0
      blip_kappa3_created = 0
      ENDIF
      IF flag_kappa3_dead = 1
      DELETE_CHAR kappa_cartel3
      DELETE_OBJECT kappa_3
      ENDIF
      ENDIF
      */
        }
        if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
            if ($.flag_kappa4_created == 0) {
                //IF IS_PLAYER_IN_ZONE player COM_EAS
                $.kappa_cartel4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, $.kappa4_x, $.kappa4_y, -100.0)
                $.kappa_cartel4.setHeading(360.0)
                $.kappa_cartel4.setThreatSearch(1 /* THREAT_PLAYER1 */)
                $.kappa_cartel4.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                $.kappa_cartel4.setStayInSamePlace(true /* true */)
                $.kappa_cartel4.addArmor(100)
                $.kappa_4 = ScriptObject.Create(1403 /* coffee */, $.kappa4_x, $.kappa4_y, -100.0)
                //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE_SLOWMOTION 286.5 -668.5 26.2 false
                $.kappa_4.setHeading(270.0)
                $.kappa_4.setCollision(true /* true */)
                $.kappa_4.setDynamic(false /* false */)
                if ($.blip_kappa4_created == 0) {
                    $.blip_kappa4 = Blip.AddForObject($.kappa_4)
                    $.blip_kappa4_created = 1
                }
                $.flag_kappa4_created = 1
                //ENDIF
            }
            if ($.flag_kappa5_created == 0) {
                if ($.player.isInZone('PARK')) {
                    $.kappa_cartel5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, $.kappa5_x, $.kappa5_y, -100.0)
                    $.kappa_cartel5.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel5.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_cartel5.setStayInSamePlace(true /* true */)
                    $.kappa_5 = ScriptObject.Create(1403 /* coffee */, $.kappa5_x, $.kappa5_y, -100.0)
                    $.kappa_5.setCollision(true /* true */)
                    $.kappa_5.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 28.6 -849.9 32.7 false
                    if ($.blip_kappa5_created == 0) {
                        $.blip_kappa5 = Blip.AddForObject($.kappa_5)
                        $.blip_kappa5_created = 1
                    }
                    $.flag_kappa5_created = 1
                }
            }
            if ($.flag_kappa6_created == 0) {
                if ($.player.isInZone('SHOPING')) {
                    $.kappa_cartel6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, $.kappa6_x, $.kappa6_y, -100.0)
                    $.kappa_cartel6.setHeading(190.0)
                    $.kappa_cartel6.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel6.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_cartel6.setStayInSamePlace(true /* true */)
                    $.kappa_6 = ScriptObject.Create(1403 /* coffee */, $.kappa6_x, $.kappa6_y, -100.0)
                    $.kappa_6.setHeading(145.0)
                    $.kappa_6.setCollision(true /* true */)
                    $.kappa_6.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 13.67 -1140.5 26.19 false
                    if ($.blip_kappa6_created == 0) {
                        $.blip_kappa6 = Blip.AddForObject($.kappa_6)
                        $.blip_kappa6_created = 1
                    }
                    $.flag_kappa6_created = 1
                }
            }
            if ($.flag_kappa7_created == 0) {
                if ($.player.isInZone('SHOPING')) {
                    $.kappa_cartel7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, $.kappa7_x, $.kappa7_y, -100.0)
                    //SET_CHAR_HEADING kappa_cartel7 190.0
                    $.kappa_cartel7.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel7.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_cartel7.setStayInSamePlace(true /* true */)
                    $.kappa_7 = ScriptObject.Create(1403 /* coffee */, $.kappa7_x, $.kappa7_y, -100.0)
                    $.kappa_7.setCollision(true /* true */)
                    $.kappa_7.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 74.0 -1359.6 26.2 false
                    if ($.blip_kappa7_created == 0) {
                        $.blip_kappa7 = Blip.AddForObject($.kappa_7)
                        $.blip_kappa7_created = 1
                    }
                    $.flag_kappa7_created = 1
                }
            }
            /*
      IF flag_kappa8_created = 0
      IF IS_PLAYER_IN_ZONE player	STADIUM
      CREATE_CHAR PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_B kappa8_x kappa8_y -100.0 kappa_cartel8
      SET_CHAR_HEADING kappa_cartel8 350.0
      SET_CHAR_THREAT_SEARCH kappa_cartel8 THREAT_PLAYER1
      GIVE_WEAPON_TO_CHAR kappa_cartel8 WEAPONTYPE_SHOTGUN 10
      SET_CHAR_STAY_IN_SAME_PLACE kappa_cartel8 true
      CREATE_OBJECT coffee kappa8_x kappa8_y -100.0 kappa_8
      SET_OBJECT_HEADING kappa_8 270.0
      SET_OBJECT_COLLISION kappa_8 true
      SET_OBJECT_DYNAMIC kappa_8 false
      //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE -220.8 -197.5 12.1 false
      IF blip_kappa8_created = 0
      ADD_BLIP_FOR_OBJECT kappa_8 blip_kappa8
      blip_kappa8_created = 1
      ENDIF
      flag_Kappa8_created = 1
      ENDIF
      ENDIF
      */
            if ($.flag_kappa9_created == 0) {
                if ($.player.isInZone('YAKUSA')) {
                    $.kappa_cartel9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, $.kappa9_x, $.kappa9_y, 23.7)
                    $.kappa_cartel9.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel9.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10)
                    $.kappa_cartel9.setStayInSamePlace(true /* true */)
                    $.kappa_9 = ScriptObject.Create(1403 /* coffee */, $.kappa9_x, $.kappa9_y, -100.0)
                    $.kappa_9.setHeading(270.0)
                    $.kappa_9.setCollision(true /* true */)
                    $.kappa_9.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE 282.9 -1493.1 23.7 false
                    if ($.blip_kappa9_created == 0) {
                        $.blip_kappa9 = Blip.AddForObject($.kappa_9)
                        $.blip_kappa9_created = 1
                    }
                    $.flag_kappa9_created = 1
                }
            }
            /*	ELSE
      IF flag_kappa10_created = 1
      IF flag_kappa4_dead = 0
      DELETE_CHAR kappa_cartel4
      DELETE_OBJECT kappa_4
      flag_kappa4_created = 0
      blip_kappa4_created = 0
      ENDIF
      IF flag_kappa4_dead = 1
      DELETE_CHAR kappa_cartel4
      DELETE_OBJECT kappa_4
      ENDIF
      ENDIF
      IF flag_kappa5_created = 1
      IF flag_kappa5_dead = 0
      DELETE_CHAR kappa_cartel5
      DELETE_OBJECT kappa_5
      flag_kappa5_created = 0
      blip_kappa5_created = 0
      ENDIF
      IF flag_kappa5_dead = 1
      DELETE_CHAR kappa_cartel5
      DELETE_OBJECT kappa_5
      ENDIF
      ENDIF
      IF flag_kappa6_created = 1
      IF flag_kappa6_dead = 0
      DELETE_CHAR kappa_cartel6
      DELETE_OBJECT kappa_6
      flag_kappa6_created = 0
      blip_kappa6_created = 0
      ENDIF
      IF flag_kappa6_dead = 1
      DELETE_CHAR kappa_cartel6
      DELETE_OBJECT kappa_6
      ENDIF
      ENDIF
      IF flag_kappa7_created = 1
      IF flag_kappa7_dead = 0
      DELETE_CHAR kappa_cartel7
      DELETE_OBJECT kappa_7
      flag_kappa7_created = 0
      blip_kappa7_created = 0
      ENDIF
      IF flag_kappa7_dead = 1
      DELETE_CHAR kappa_cartel7
      DELETE_OBJECT kappa_7
      ENDIF
      ENDIF

      IF flag_kappa8_created = 1
      IF flag_kappa8_dead = 0
      DELETE_CHAR kappa_cartel8
      DELETE_OBJECT kappa_8
      flag_kappa8_created = 0
      blip_kappa8_created = 0
      ENDIF
      IF flag_kappa8_dead = 1
      DELETE_CHAR kappa_cartel8
      DELETE_OBJECT kappa_8
      ENDIF
      ENDIF

      IF flag_kappa9_created = 1
      IF flag_kappa9_dead = 0
      DELETE_CHAR kappa_cartel9
      DELETE_OBJECT kappa_9
      flag_kappa9_created = 0
      blip_kappa9_created = 0
      ENDIF
      IF flag_kappa9_dead = 1
      DELETE_CHAR kappa_cartel9
      DELETE_OBJECT kappa_9
      ENDIF
      ENDIF
      */
        }
        if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
            if ($.flag_kappa10_created == 0) {
                if ($.player.isInZone('AIRPORT')) {
                    $.kappa_cartel10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, $.kappa10_x, $.kappa10_y, 18.9)
                    $.kappa_cartel10.setHeading(50.0)
                    $.kappa_cartel10.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel10.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_cartel10.setStayInSamePlace(true /* true */)
                    $.kappa_10 = ScriptObject.Create(1403 /* coffee */, $.kappa10_x, $.kappa10_y, -100.0)
                    $.kappa_10.setCollision(true /* true */)
                    $.kappa_10.setDynamic(false /* false */)
                    //ADD_PARTICLE_EFFECT POBJECT_DRY_ICE -724.3 -548.8 9.1 false
                    if ($.blip_kappa10_created == 0) {
                        $.blip_kappa10 = Blip.AddForObject($.kappa_10)
                        $.blip_kappa10_created = 1
                    }
                    $.flag_kappa10_created = 1
                }
            }
            /*
      IF flag_kappa11_created = 0
      IF IS_PLAYER_IN_ZONE player SWANKS
      OR IS_PLAYER_IN_ZONE player PROJECT
      CREATE_CHAR PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_A kappa11_x kappa11_y -100.0 kappa_cartel11
      SET_CHAR_HEADING kappa_cartel11 90.0
      SET_CHAR_THREAT_SEARCH kappa_cartel11 THREAT_PLAYER1
      GIVE_WEAPON_TO_CHAR kappa_cartel11 WEAPONTYPE_UZI 60
      SET_CHAR_STAY_IN_SAME_PLACE kappa_cartel11 true
      CREATE_OBJECT coffee kappa11_x kappa11_y -100.0 kappa_11
      SET_OBJECT_HEADING kappa_11 0.0
      SET_OBJECT_COLLISION kappa_11 true
      SET_OBJECT_DYNAMIC kappa_11 false
      IF blip_kappa11_created = 0
      ADD_BLIP_FOR_OBJECT kappa_11 blip_kappa11
      blip_kappa11_created = 1
      ENDIF
      flag_Kappa11_created = 1
      ENDIF
      ENDIF
      */
            if ($.flag_kappa12_created == 0) {
                if ($.player.isInZone('SUB_IND')) {
                    $.kappa_cartel12 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, $.kappa12_x, $.kappa12_y, -100.0)
                    $.kappa_cartel12.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    $.kappa_cartel12.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.kappa_12 = ScriptObject.Create(1403 /* coffee */, $.kappa12_x, $.kappa12_y, -100.0)
                    $.kappa_cartel12.setStayInSamePlace(true /* true */)
                    $.kappa_12.setCollision(true /* true */)
                    $.kappa_12.setDynamic(false /* false */)
                    if ($.blip_kappa12_created == 0) {
                        $.blip_kappa12 = Blip.AddForObject($.kappa_12)
                        $.blip_kappa12_created = 1
                    }
                    $.flag_kappa12_created = 1
                }
            }
            if ($.flag_kappa10_created == 1 || $.flag_kappa12_created == 1) {
                if ($.flag_guard1_created == 0) {
                    $.patriot_1 = Car.Create(138 /* CAR_COLUMB */, -706.3, -285.7, 18.3)
                    $.varmint_1 = Char.CreateInsideCar($.patriot_1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`)
                    $.varmint_1.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
                    $.varmint_1.setObjKillPlayerAnyMeans($.player)
                    $.flag_guard1_created = 1
                }
            }
            /*	ELSE
      IF flag_kappa10_created = 1
      IF flag_kappa10_dead = 0
      DELETE_CHAR kappa_cartel10
      DELETE_OBJECT kappa_10
      flag_kappa10_created = 0
      blip_kappa10_created = 0
      ENDIF
      IF flag_kappa10_dead = 1
      DELETE_CHAR kappa_cartel10
      DELETE_OBJECT kappa_10
      ENDIF
      ENDIF

      IF flag_kappa11_created = 1
      IF flag_kappa11_dead = 0
      DELETE_CHAR kappa_cartel11
      DELETE_OBJECT kappa_11
      flag_kappa11_created = 0
      blip_kappa11_created = 0
      ENDIF
      IF flag_kappa11_dead = 1
      DELETE_CHAR kappa_cartel11
      DELETE_OBJECT kappa_11
      ENDIF
      ENDIF

      IF flag_kappa12_created = 1
      IF flag_kappa12_dead = 0
      DELETE_CHAR kappa_cartel12
      DELETE_OBJECT kappa_12
      flag_kappa12_created = 0
      blip_kappa12_created = 0
      ENDIF
      IF flag_kappa12_dead = 1
      DELETE_CHAR kappa_cartel12
      DELETE_OBJECT kappa_12
      ENDIF
      ENDIF
      */
        }
        //---------------------------------------KAPPA DEATH CHECK---------------------------------------------------------------------------------------
        if ($.flag_kappa1_dead == 0 && $.flag_kappa1_created == 1) {
            if ($.kappa_1.hasBeenDamaged()) {
                $.flag_kappa1_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_ind
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa1.remove()
                if (!Char.IsDead($.kappa_cartel1)) {
                    $.kappa_cartel1.clearThreatSearch()
                    $.kappa_cartel1.setObjRunToCoord(1335.5, -820.5)
                }
            }
            if (!Char.IsDead($.kappa_cartel1)) {
                $.kappa_cartel1.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa1_dead > 0) {
            if (!Char.IsDead($.kappa_cartel1)) {
                if ($.kappa_cartel1.isObjectivePassed()) {
                    $.kappa_cartel1.turnToFacePlayer($.player)
                    $.kappa_cartel1.setStayInSamePlace(false /* false */)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel1
                    $.kappa_cartel1.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel1 player
                }
            }
        }

        /*
    IF flag_kappa2_dead = 0
    AND flag_kappa2_created = 1
    IF HAS_OBJECT_BEEN_DAMAGED kappa_2
    flag_kappa2_dead = 1
    ++ counter_kappa_dead
    ++ counter_kappa_dead_ind
    kappa_time = kappa_time + 10000
    PRINT_WITH_NUMBER_BIG (AS2_11) counter_kappa_dead 2000 1
    REMOVE_BLIP blip_kappa2
    MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel2
    ENDIF
    IF NOT IS_CHAR_DEAD	kappa_cartel2
    TURN_CHAR_TO_FACE_PLAYER kappa_cartel2 player
    ENDIF
    ENDIF
    */
        if ($.flag_kappa3_dead == 0 && $.flag_kappa3_created == 1) {
            if ($.kappa_3.hasBeenDamaged()) {
                $.flag_kappa3_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_ind
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa3.remove()
                if (!Char.IsDead($.kappa_cartel3)) {
                    $.kappa_cartel3.clearThreatSearch()
                    $.kappa_cartel3.setObjRunToCoord(1342.7, -259.0)
                }
            }
            if (!Char.IsDead($.kappa_cartel3)) {
                $.kappa_cartel3.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa3_dead > 0) {
            if (!Char.IsDead($.kappa_cartel3)) {
                if ($.kappa_cartel3.isObjectivePassed()) {
                    $.kappa_cartel3.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel3
                    $.kappa_cartel3.setStayInSamePlace(false /* false */)
                    $.kappa_cartel3.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel3 player
                }
            }
        }
        if ($.flag_kappa4_dead == 0 && $.flag_kappa4_created == 1) {
            if ($.kappa_4.hasBeenDamaged()) {
                $.flag_kappa4_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_com
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa4.remove()
                if (!Char.IsDead($.kappa_cartel4)) {
                    $.kappa_cartel4.clearThreatSearch()
                    $.kappa_cartel4.setObjRunToCoord(280.0, -676.5)
                }
            }
            if (!Char.IsDead($.kappa_cartel4)) {
                $.kappa_cartel4.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa4_dead > 0) {
            if (!Char.IsDead($.kappa_cartel4)) {
                if ($.kappa_cartel4.isObjectivePassed()) {
                    $.kappa_cartel4.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel4
                    $.kappa_cartel4.setStayInSamePlace(false /* false */)
                    $.kappa_cartel4.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel4 player
                }
            }
        }
        if ($.flag_kappa5_dead == 0 && $.flag_kappa5_created == 1) {
            if ($.kappa_5.hasBeenDamaged()) {
                $.flag_kappa5_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_com
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa5.remove()
                if (!Char.IsDead($.kappa_cartel5)) {
                    $.kappa_cartel5.clearThreatSearch()
                    $.kappa_cartel5.setObjRunToCoord(34.5, -850.0)
                }
            }
            if (!Char.IsDead($.kappa_cartel5)) {
                $.kappa_cartel5.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa5_dead > 0) {
            if (!Char.IsDead($.kappa_cartel5)) {
                if ($.kappa_cartel5.isObjectivePassed()) {
                    $.kappa_cartel5.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel5
                    $.kappa_cartel5.setStayInSamePlace(false /* false */)
                    $.kappa_cartel5.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel5 player
                }
            }
        }
        if ($.flag_kappa6_dead == 0 && $.flag_kappa6_created == 1) {
            if ($.kappa_6.hasBeenDamaged()) {
                $.flag_kappa6_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_com
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa6.remove()
                if (!Char.IsDead($.kappa_cartel6)) {
                    $.kappa_cartel6.clearThreatSearch()
                    $.kappa_cartel6.setObjRunToCoord(13.7, -1135.3)
                }
            }
            if (!Char.IsDead($.kappa_cartel6)) {
                $.kappa_cartel6.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa6_dead > 0) {
            if (!Char.IsDead($.kappa_cartel6)) {
                if ($.kappa_cartel6.isObjectivePassed()) {
                    $.kappa_cartel6.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel6
                    $.kappa_cartel6.setStayInSamePlace(false /* false */)
                    $.kappa_cartel6.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel6 player
                }
            }
        }
        if ($.flag_kappa7_dead == 0 && $.flag_kappa7_created == 1) {
            if ($.kappa_7.hasBeenDamaged()) {
                $.flag_kappa7_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_com
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa7.remove()
                if (!Char.IsDead($.kappa_cartel7)) {
                    $.kappa_cartel7.clearThreatSearch()
                    $.kappa_cartel7.setObjRunToCoord(79.0, -1361.0)
                }
            }
            if (!Char.IsDead($.kappa_cartel7)) {
                $.kappa_cartel7.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa7_dead > 0) {
            if (!Char.IsDead($.kappa_cartel7)) {
                if ($.kappa_cartel7.isObjectivePassed()) {
                    $.kappa_cartel7.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel7
                    $.kappa_cartel7.setStayInSamePlace(false /* false */)
                    $.kappa_cartel7.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel7 player
                }
            }
        }
        /*
    IF flag_kappa8_dead = 0
    AND flag_kappa8_created = 1
    IF HAS_OBJECT_BEEN_DAMAGED kappa_8
    flag_kappa8_dead = 1
    ++ counter_kappa_dead
    ++ counter_kappa_dead_com
    kappa_time = kappa_time + 10000
    PRINT_WITH_NUMBER_BIG (AS2_11) counter_kappa_dead 2000 1
    REMOVE_BLIP blip_kappa8
    MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel8
    ENDIF
    IF NOT IS_CHAR_DEAD	kappa_cartel8
    TURN_CHAR_TO_FACE_PLAYER kappa_cartel8 player
    ENDIF
    ENDIF
    */
        if ($.flag_kappa9_dead == 0 && $.flag_kappa9_created == 1) {
            if ($.kappa_9.hasBeenDamaged()) {
                $.flag_kappa9_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_com
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa9.remove()
                if (!Char.IsDead($.kappa_cartel9)) {
                    $.kappa_cartel9.clearThreatSearch()
                    $.kappa_cartel9.setObjRunToCoord(282.5, -1501.0)
                }
            }
            if (!Char.IsDead($.kappa_cartel9)) {
                $.kappa_cartel9.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa9_dead > 0) {
            if (!Char.IsDead($.kappa_cartel9)) {
                if ($.kappa_cartel9.isObjectivePassed()) {
                    $.kappa_cartel9.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel9
                    $.kappa_cartel9.setStayInSamePlace(false /* false */)
                    $.kappa_cartel9.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel9 player
                }
            }
        }
        if ($.flag_kappa10_dead == 0 && $.flag_kappa10_created == 1) {
            if ($.kappa_10.hasBeenDamaged()) {
                $.flag_kappa10_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_sub
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa10.remove()
                if (!Char.IsDead($.kappa_cartel10)) {
                    $.kappa_cartel10.clearThreatSearch()
                    $.kappa_cartel10.setObjRunToCoord(-638.8, -721.6)
                }
            }
            if (!Char.IsDead($.kappa_cartel10)) {
                $.kappa_cartel10.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa10_dead > 0) {
            if (!Char.IsDead($.kappa_cartel10)) {
                if ($.kappa_cartel10.isObjectivePassed()) {
                    $.kappa_cartel10.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel10
                    $.kappa_cartel10.setStayInSamePlace(false /* false */)
                    $.kappa_cartel10.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel10 player
                }
            }
        }

        /*
    IF flag_kappa11_dead = 0
    AND flag_kappa11_created = 1
    IF HAS_OBJECT_BEEN_DAMAGED kappa_11
    flag_kappa11_dead = 1
    ++ counter_kappa_dead
    ++ counter_kappa_dead_sub
    kappa_time = kappa_time + 10000
    PRINT_WITH_NUMBER_BIG (AS2_11) counter_kappa_dead 2000 1
    REMOVE_BLIP blip_kappa11
    MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel11
    ENDIF
    IF NOT IS_CHAR_DEAD	kappa_cartel11
    TURN_CHAR_TO_FACE_PLAYER kappa_cartel11 player
    ENDIF
    ENDIF
    */
        if ($.flag_kappa12_dead == 0 && $.flag_kappa12_created == 1) {
            if ($.kappa_12.hasBeenDamaged()) {
                $.flag_kappa12_dead = 1
                ++$.counter_kappa_dead
                ++$.counter_kappa_dead_sub
                //kappa_time = kappa_time + 10000
                Text.PrintWithNumberBig('AS2_11', $.counter_kappa_dead, 2000, 1)
                $.blip_kappa12.remove()
                if (!Char.IsDead($.kappa_cartel12)) {
                    $.kappa_cartel12.clearThreatSearch()
                    $.kappa_cartel12.setObjRunToCoord(-1251.0, -114.5)
                }
            }
            if (!Char.IsDead($.kappa_cartel12)) {
                $.kappa_cartel12.turnToFacePlayer($.player)
            }
        }
        if ($.flag_kappa12_dead > 0) {
            if (!Char.IsDead($.kappa_cartel12)) {
                if ($.kappa_cartel12.isObjectivePassed()) {
                    $.kappa_cartel12.turnToFacePlayer($.player)
                    //MARK_CHAR_AS_NO_LONGER_NEEDED kappa_cartel12
                    $.kappa_cartel12.setStayInSamePlace(false /* false */)
                    $.kappa_cartel12.setThreatSearch(1 /* THREAT_PLAYER1 */)
                    //SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS kappa_cartel12 player
                }
            }
        }
        //---------------------STEAM--------------------------

        $.timer_as2_now = Clock.GetGameTimer()
        $.timer_as2_dif = $.timer_as2_now - $.timer_as2_start
        if ($.timer_as2_dif > $.particle_time_as2) {
            $.particle_time_as2 = $.particle_time_as2 + 50
            $.flag_particle_as2 = 1
        }
        if ($.flag_particle_as2 == 1) {
            if ($.flag_kappa1_dead == 0 && $.flag_kappa1_created == 1) {
                const _res315 = $.kappa_1.getCoordinates()
                $.steam_x = _res315.x
                $.steam_y = _res315.y
                $.steam_z = _res315.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa1_dead == 1 && $.flag_kappa1_created == 1) {
                const _res316 = $.kappa_1.getCoordinates()
                $.steam_x = _res316.x
                $.steam_y = _res316.y
                $.steam_z = _res316.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                $.kappa_1_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa1_dead = 2
            }
            /*
      IF flag_kappa2_dead = 0
      AND flag_kappa2_created = 1
      GET_OBJECT_COORDINATES kappa_2 steam_x steam_y steam_z
      steam_x = steam_x + 1.0
      //steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      ADD_MOVING_PARTICLE_EFFECT POBJECT_DRY_ICE_SLOWMOTION steam_x steam_y steam_z 0.0 0.0 0.0 0.3 0 0 0 50
      ENDIF
      IF flag_kappa2_dead = 1
      AND flag_kappa2_created = 1
      GET_OBJECT_COORDINATES kappa_2 steam_x steam_y steam_z
      steam_x = steam_x + 1.0
      //steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      START_SCRIPT_FIRE steam_x steam_y steam_z kappa_2_fire
      flag_kappa2_dead = 2
      ENDIF
      */
            if ($.flag_kappa3_dead == 0 && $.flag_kappa3_created == 1) {
                const _res317 = $.kappa_3.getCoordinates()
                $.steam_x = _res317.x
                $.steam_y = _res317.y
                $.steam_z = _res317.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa3_dead == 1 && $.flag_kappa3_created == 1) {
                const _res318 = $.kappa_3.getCoordinates()
                $.steam_x = _res318.x
                $.steam_y = _res318.y
                $.steam_z = _res318.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                $.kappa_3_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa3_dead = 2
            }
            if ($.flag_kappa4_dead == 0 && $.flag_kappa4_created == 1) {
                const _res319 = $.kappa_4.getCoordinates()
                $.steam_x = _res319.x
                $.steam_y = _res319.y
                $.steam_z = _res319.z
                $.steam_x = $.steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa4_dead == 1 && $.flag_kappa4_created == 1) {
                const _res320 = $.kappa_4.getCoordinates()
                $.steam_x = _res320.x
                $.steam_y = _res320.y
                $.steam_z = _res320.z
                $.steam_x = $.steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_4_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa4_dead = 2
            }
            if ($.flag_kappa5_dead == 0 && $.flag_kappa5_created == 1) {
                const _res321 = $.kappa_5.getCoordinates()
                $.steam_x = _res321.x
                $.steam_y = _res321.y
                $.steam_z = _res321.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa5_dead == 1 && $.flag_kappa5_created == 1) {
                const _res322 = $.kappa_5.getCoordinates()
                $.steam_x = _res322.x
                $.steam_y = _res322.y
                $.steam_z = _res322.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_5_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa5_dead = 2
            }
            if ($.flag_kappa6_dead == 0 && $.flag_kappa6_created == 1) {
                const _res323 = $.kappa_6.getCoordinates()
                $.steam_x = _res323.x
                $.steam_y = _res323.y
                $.steam_z = _res323.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                $.steam_x = $.steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa6_dead == 1 && $.flag_kappa6_created == 1) {
                const _res324 = $.kappa_6.getCoordinates()
                $.steam_x = _res324.x
                $.steam_y = _res324.y
                $.steam_z = _res324.z
                //steam_x = steam_x + 1.0
                //steam_y = steam_y + 1.0
                $.steam_x = $.steam_x - 1.0
                $.steam_y = $.steam_y - 1.0
                $.kappa_6_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa6_dead = 2
            }
            if ($.flag_kappa7_dead == 0 && $.flag_kappa7_created == 1) {
                const _res325 = $.kappa_7.getCoordinates()
                $.steam_x = _res325.x
                $.steam_y = _res325.y
                $.steam_z = _res325.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa7_dead == 1 && $.flag_kappa7_created == 1) {
                const _res326 = $.kappa_7.getCoordinates()
                $.steam_x = _res326.x
                $.steam_y = _res326.y
                $.steam_z = _res326.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_7_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa7_dead = 2
            }
            /*
      IF flag_kappa8_dead = 0
      AND flag_kappa8_created = 1
      GET_OBJECT_COORDINATES kappa_8 steam_x steam_y steam_z
      steam_x = steam_x + 1.0
      //steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      ADD_MOVING_PARTICLE_EFFECT POBJECT_DRY_ICE_SLOWMOTION steam_x steam_y steam_z 0.0 0.0 0.0 0.3 0 0 0 50
      ENDIF
      IF flag_kappa8_dead = 1
      AND flag_kappa8_created = 1
      GET_OBJECT_COORDINATES kappa_8 steam_x steam_y steam_z
      steam_x = steam_x + 1.0
      //steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      START_SCRIPT_FIRE steam_x steam_y steam_z kappa_8_fire
      flag_kappa8_dead = 2
      ENDIF
      */
            if ($.flag_kappa9_dead == 0 && $.flag_kappa9_created == 1) {
                const _res327 = $.kappa_9.getCoordinates()
                $.steam_x = _res327.x
                $.steam_y = _res327.y
                $.steam_z = _res327.z
                $.steam_x = $.steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa9_dead == 1 && $.flag_kappa9_created == 1) {
                const _res328 = $.kappa_9.getCoordinates()
                $.steam_x = _res328.x
                $.steam_y = _res328.y
                $.steam_z = _res328.z
                $.steam_x = $.steam_x + 1.0
                //steam_y = steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_9_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa9_dead = 2
            }
            if ($.flag_kappa10_dead == 0 && $.flag_kappa10_created == 1) {
                const _res329 = $.kappa_10.getCoordinates()
                $.steam_x = _res329.x
                $.steam_y = _res329.y
                $.steam_z = _res329.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa10_dead == 1 && $.flag_kappa10_created == 1) {
                const _res330 = $.kappa_10.getCoordinates()
                $.steam_x = _res330.x
                $.steam_y = _res330.y
                $.steam_z = _res330.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_10_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa10_dead = 2
            }
            /*
      IF flag_kappa11_dead = 0
      AND flag_kappa11_created = 1
      GET_OBJECT_COORDINATES kappa_11 steam_x steam_y steam_z
      //steam_x = steam_x + 1.0
      steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      ADD_MOVING_PARTICLE_EFFECT POBJECT_DRY_ICE_SLOWMOTION steam_x steam_y steam_z 0.0 0.0 0.0 0.3 0 0 0 50
      ENDIF
      IF flag_kappa11_dead = 1
      AND flag_kappa11_created = 1
      GET_OBJECT_COORDINATES kappa_11 steam_x steam_y steam_z
      //steam_x = steam_x + 1.0
      steam_y = steam_y + 1.0
      //steam_x = steam_x - 1.0
      //steam_y = steam_y - 1.0
      START_SCRIPT_FIRE steam_x steam_y steam_z kappa_11_fire
      flag_kappa11_dead = 2
      ENDIF
      */
            if ($.flag_kappa12_dead == 0 && $.flag_kappa12_created == 1) {
                const _res331 = $.kappa_12.getCoordinates()
                $.steam_x = _res331.x
                $.steam_y = _res331.y
                $.steam_z = _res331.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                Fx.AddMovingParticleEffect(12 /* POBJECT_DRY_ICE_SLOWMOTION */, $.steam_x, $.steam_y, $.steam_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 50)
            }
            if ($.flag_kappa12_dead == 1 && $.flag_kappa12_created == 1) {
                const _res332 = $.kappa_12.getCoordinates()
                $.steam_x = _res332.x
                $.steam_y = _res332.y
                $.steam_z = _res332.z
                //steam_x = steam_x + 1.0
                $.steam_y = $.steam_y + 1.0
                //steam_x = steam_x - 1.0
                //steam_y = steam_y - 1.0
                $.kappa_12_fire = ScriptFire.Create($.steam_x, $.steam_y, $.steam_z)
                $.flag_kappa12_dead = 2
            }
            $.flag_particle_as2 = 0
        }

        //-------------------------------------------TIMER-------TIMER----TIMER----------------------------------------

        if ($.kappa_time < 1) {
            Text.PrintNow('AS2_4', 3000, 1) //The Cartel have warned their pushers!!
            //WAIT 3000
            // SCM GOTO → mission_as2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_as2_failed') // fallback: would break linear control flow
        }
        if ($.counter_kappa_dead == 1 && $.flag_timer_started == 0) {
            Hud.DisplayTimer($.kappa_time)
            $.flag_timer_started = 1
        }

        //----------------------------------------PLAYER INFO----------------------------------------------------------

        if ($.counter_kappa_dead_ind == 2 && $.flag_as2_1 == 0) {
            Text.PrintNow('AS2_1', 3000, 1) //All Espresso Carts in Portland wrecked!
            await asyncWait(3000)
            $.flag_as2_1 = 1
            if ($.flag_as2_2 == 0 && $.flag_as2_3 == 0) {
                Text.PrintNow('AS2_5', 4000, 1) //There are still coffee carts in Staunton Island and Shoreside Vale!
                await asyncWait(3000)
            }
            if ($.flag_as2_2 == 1 && $.flag_as2_3 == 0) {
                Text.PrintNow('AS2_6', 4000, 1) //There are still coffee carts in Shoreside Vale!
                await asyncWait(3000)
            }
            if ($.flag_as2_2 == 0 && $.flag_as2_3 == 1) {
                Text.PrintNow('AS2_7', 4000, 1) //There are still coffee carts on Staunton Island!
                await asyncWait(3000)
            }
        }
        if ($.counter_kappa_dead_com == 5 && $.flag_as2_2 == 0) {
            Text.PrintNow('AS2_2', 3000, 1) //All Espresso Carts in Downtown wrecked!
            await asyncWait(3000)
            $.flag_as2_2 = 1
            if ($.flag_as2_1 == 0 && $.flag_as2_3 == 0) {
                Text.PrintNow('AS2_9', 4000, 1) //There are still coffee carts in Portland and Shoreside Vale!
                await asyncWait(3000)
            }
            if ($.flag_as2_1 == 1 && $.flag_as2_3 == 0) {
                Text.PrintNow('AS2_6', 4000, 1) //There are still coffee carts in Shoreside Vale!
                await asyncWait(3000)
            }
            if ($.flag_as2_1 == 0 && $.flag_as2_3 == 1) {
                Text.PrintNow('AS2_8', 4000, 1) //There are still coffee carts in Portland!
                await asyncWait(3000)
            }
        }
        if ($.counter_kappa_dead_sub == 2 && $.flag_as2_3 == 0) {
            Text.PrintNow('AS2_3', 3000, 1) //All Espresso Carts in Shoreside Vale wrecked!
            await asyncWait(3000)
            $.flag_as2_3 = 1
            if ($.flag_as2_1 == 0 && $.flag_as2_2 == 0) {
                Text.PrintNow('AS2_10', 4000, 1) //There are still coffee carts in Portland and Staunton Island!
                await asyncWait(3000)
            }
            if ($.flag_as2_1 == 1 && $.flag_as2_2 == 0) {
                Text.PrintNow('AS2_7', 4000, 1) //There are still coffee carts on Staunton Island!
                await asyncWait(3000)
            }
            if ($.flag_as2_1 == 0 && $.flag_as2_2 == 1) {
                Text.PrintNow('AS2_8', 4000, 1) //There are still coffee carts in Portland!
                await asyncWait(3000)
            }
        }
    }

    // SCM GOTO → mission_as2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_as2_passed') // fallback: would break linear control flow

    // Mission Asuka Sub2 failed
}

async function mission_as2_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)

    if ($.player.hasBeenArrested()) {
        Restart.OverridePolice(2 /* LEVEL_COMMERCIAL */)
    }

    if ($.player.isDead()) {
        Restart.OverrideHospital(2 /* LEVEL_COMMERCIAL */)
    }

    return

    // mission Asuka Sub2 passed
}

async function mission_as2_passed() {
    $.flag_asuka_suburban_mission2_passed = 1
    Text.PrintWithNumberBig('M_PASS', 40000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.clearWantedLevel()
    $.player.addScore(40000)
    Stat.RegisterMissionPassed('AS2')
    Stat.PlayerMadeProgress(1)
    // START_NEW_SCRIPT asuka_suburban_mission3_loop
    return

    // mission cleanup
}

async function mission_cleanup_as2() {
    $.flag_player_on_mission = 0
    $.flag_player_on_asuka_suburban_mission = 0

    Hud.ClearTimer($.kappa_time)
    Hud.ClearCounter($.counter_kappa_dead)

    Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 4 /* WEAPONTYPE_SHOTGUN */) //The Mafia

    if ($.flag_kappa1_dead == 0 && $.flag_kappa1_created == 1) {
        $.blip_kappa1.remove()
    }
    /*IF flag_kappa2_dead = 0
  AND flag_kappa2_created = 1
  REMOVE_BLIP blip_kappa2
  ENDIF*/

    if ($.flag_kappa3_dead == 0 && $.flag_kappa3_created == 1) {
        $.blip_kappa3.remove()
    }
    if ($.flag_kappa4_dead == 0 && $.flag_kappa4_created == 1) {
        $.blip_kappa4.remove()
    }
    if ($.flag_kappa5_dead == 0 && $.flag_kappa5_created == 1) {
        $.blip_kappa5.remove()
    }
    if ($.flag_kappa6_dead == 0 && $.flag_kappa6_created == 1) {
        $.blip_kappa6.remove()
    }
    if ($.flag_kappa7_dead == 0 && $.flag_kappa7_created == 1) {
        $.blip_kappa7.remove()
    }
    /*IF flag_kappa8_dead = 0
  AND flag_kappa8_created = 1
  REMOVE_BLIP blip_kappa8
  ENDIF*/

    if ($.flag_kappa9_dead == 0 && $.flag_kappa9_created == 1) {
        $.blip_kappa9.remove()
    }
    if ($.flag_kappa10_dead == 0 && $.flag_kappa10_created == 1) {
        $.blip_kappa10.remove()
    }
    /*IF flag_kappa11_dead = 0
  AND flag_kappa11_created = 1
  REMOVE_BLIP blip_kappa11
  ENDIF*/

    if ($.flag_kappa12_dead == 0 && $.flag_kappa12_created == 1) {
        $.blip_kappa12.remove()
    }

    World.RemoveAllScriptFires()

    $.kappa_1.markAsNoLongerNeeded()
    //MARK_OBJECT_AS_NO_LONGER_NEEDED kappa_2

    $.kappa_3.markAsNoLongerNeeded()
    $.kappa_4.markAsNoLongerNeeded()
    $.kappa_5.markAsNoLongerNeeded()
    $.kappa_6.markAsNoLongerNeeded()
    $.kappa_7.markAsNoLongerNeeded()
    //MARK_OBJECT_AS_NO_LONGER_NEEDED kappa_8

    $.kappa_9.markAsNoLongerNeeded()
    $.kappa_10.markAsNoLongerNeeded()
    //MARK_OBJECT_AS_NO_LONGER_NEEDED kappa_11

    $.kappa_12.markAsNoLongerNeeded()

    Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`)
    Streaming.MarkModelAsNoLongerNeeded(1403 /* coffee */)

    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`)

    Mission.Finish()
    return

    ///________________________________GOSUBS_______GOSUBS________________________________BYTHEWAY
}

export async function asusb2() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***********************************ASUKA SUBURBAN MISSION 2******************************
    // *****************************************************************************************
    // **************************************'Espresso-2-Go'***********************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_as2
    await mission_start_as2()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_as2_failed
        await mission_as2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_as2
    await mission_cleanup_as2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT kappa_1 kappa_3 kappa_4
    // VAR_INT kappa_5 kappa_6 kappa_7
    // VAR_INT kappa_9 kappa_10 kappa_12

    //VAR_INT varmint_1 varmint_2

    // VAR_INT patriot_1
    // VAR_INT flag_guard1_created flag_guard2_created

    // VAR_INT kappa_1_fire kappa_2_fire kappa_3_fire kappa_4_fire
    // VAR_INT kappa_5_fire kappa_6_fire kappa_7_fire kappa_8_fire
    // VAR_INT kappa_9_fire kappa_10_fire kappa_11_fire kappa_12_fire

    // VAR_INT kappa_cartel1 kappa_cartel2 kappa_cartel3 kappa_cartel4
    // VAR_INT kappa_cartel5 kappa_cartel6 kappa_cartel7 kappa_cartel8
    // VAR_INT kappa_cartel9 kappa_cartel10 kappa_cartel11 kappa_cartel12

    // VAR_INT flag_kappa1_dead flag_kappa2_dead flag_kappa3_dead flag_kappa4_dead
    // VAR_INT flag_kappa5_dead flag_kappa6_dead flag_kappa7_dead flag_kappa8_dead
    // VAR_INT flag_kappa9_dead flag_kappa10_dead flag_kappa11_dead flag_kappa12_dead

    // VAR_INT flag_kappa1_created flag_kappa2_created flag_kappa3_created flag_kappa4_created
    // VAR_INT flag_kappa5_created flag_kappa6_created flag_kappa7_created flag_kappa8_created
    // VAR_INT flag_kappa9_created flag_kappa10_created flag_kappa11_created flag_kappa12_created

    // VAR_INT blip_kappa1_created blip_kappa2_created blip_kappa3_created blip_kappa4_created
    // VAR_INT blip_kappa5_created blip_kappa6_created blip_kappa7_created blip_kappa8_created
    // VAR_INT blip_kappa9_created blip_kappa10_created blip_kappa11_created blip_kappa12_created

    // VAR_INT blip_kappa1 blip_kappa2 blip_kappa3 blip_kappa4
    // VAR_INT blip_kappa5 blip_kappa6 blip_kappa7 blip_kappa8
    // VAR_INT blip_kappa9 blip_kappa10 blip_kappa11 blip_kappa12

    // VAR_INT kappa_time
    // VAR_INT flag_timer_started
    //VAR_INT cs_whip

    // VAR_INT timer_as2_dif timer_as2_now timer_as2_start flag_particle_as2 particle_time_as2

    // VAR_INT counter_kappa_dead
    // VAR_INT counter_kappa_dead_ind
    // VAR_INT counter_kappa_dead_com
    // VAR_INT counter_kappa_dead_sub

    // VAR_INT flag_as2_1 flag_as2_2 flag_as2_3

    // VAR_FLOAT kappa1_x kappa1_y
    // VAR_FLOAT kappa2_x kappa2_y
    // VAR_FLOAT kappa3_x kappa3_y
    // VAR_FLOAT kappa4_x kappa4_y
    // VAR_FLOAT kappa5_x kappa5_y
    // VAR_FLOAT kappa6_x kappa6_y
    // VAR_FLOAT kappa7_x kappa7_y
    // VAR_FLOAT kappa8_x kappa8_y
    // VAR_FLOAT kappa9_x kappa9_y
    // VAR_FLOAT kappa10_x kappa10_y
    // VAR_FLOAT kappa11_x kappa11_y
    // VAR_FLOAT kappa12_x kappa12_y
    // VAR_FLOAT steam_x steam_y steam_z

    //--test stuff-------------

    // VAR_FLOAT test_x test_y
    // VAR_INT kappa_test

    //VAR_FLOAT min_x_as2 min_y_as2 min_z_as2 max_x_as2 max_y_as2 max_z_as2

    // ****************************************Mission Start************************************
}
