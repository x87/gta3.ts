// Generated from Main/Commercial/love2.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function create_yakuza() {
    if ($.flag_yak_created_love2 == 0) {
        $.kenji_car_love2 = Car.Create(129 /* CAR_YAKUZA */, 302.0, -550.0, 37.0)
        $.kenji_car_love2.setHeading(90.0)
        $.kenji_car_love2.setIdle()
        $.kenji_car_love2.setOnlyDamagedByPlayer(false /* False */)
        $.yak_car_1_love2 = Car.Create(92 /* CAR_STRETCH */, 291.4, -547.0, 37.0)
        $.yak_car_1_love2.setHeading(320.0)
        $.yak_car_1_love2.setIdle()
        $.yak_car_1_love2.setOnlyDamagedByPlayer(false /* False */)
        $.yak_car_2_love2 = Car.Create(129 /* CAR_YAKUZA */, 294.6, -558.0, 37.0)
        $.yak_car_2_love2.setHeading(96.0)
        $.yak_car_2_love2.setIdle()
        $.yak_car_2_love2.setOnlyDamagedByPlayer(false /* False */)
        $.yak_car_1_love2 = Car.Create(92 /* CAR_STRETCH */, 299.4, -540.0, 37.0)
        $.yak_car_1_love2.setHeading(296.0)
        $.yak_car_1_love2.setIdle()
        $.yak_car_1_love2.setOnlyDamagedByPlayer(false /* False */)
        $.yak_1_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 286.4, -543.5, 37.0)
        $.yak_1_love2.setHeading(180.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_1_love2 267.7 -592.0 306.0 -480.0

        $.yak_2_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 304.5, -544.3, 37.0)
        $.yak_2_love2.setHeading(40.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_2_love2 MinX MinY MaxX MaxY
        $.yak_2_love2.addArmor(100)
        $.yak_3_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 299.25, -534.0, 37.0)
        $.yak_3_love2.setHeading(20.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_3_love2 MinX MinY MaxX MaxY

        $.yak_4_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 295.0, -562.0, 37.0)
        $.yak_4_love2.setHeading(180.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_4_love2 MinX MinY MaxX MaxY

        $.yak_5_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 295.0, -544.0, 37.0)
        $.yak_5_love2.setHeading(15.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_5_love2 267.7 -592.0 306.0 -480.0
        $.yak_5_love2.addArmor(100)
        $.yak_6_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 300.0, -556.0, 37.0)
        $.yak_6_love2.setHeading(160.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_4_love2 MinX MinY MaxX MaxY

        $.yak_7_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 301.0, -516.0, 37.0)
        $.yak_7_love2.setHeading(45.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_4_love2 MinX MinY MaxX MaxY

        $.yak_8_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 273.0, -570.0, 37.0)
        $.yak_8_love2.setHeading(260.0)
        //SET_CHAR_OBJ_GUARD_AREA yak_4_love2 MinX MinY MaxX MaxY

        $.yak_1_love2.giveWeapon(6 /* WEAPONTYPE_M16 */, 80)
        $.yak_2_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_3_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_3_love2.setAccuracy(40)
        $.yak_4_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_4_love2.setAccuracy(40)
        $.yak_5_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_5_love2.setAccuracy(40)
        $.yak_6_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_7_love2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 25)
        $.yak_8_love2.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.yak_8_love2.setAccuracy(40)
        $.yak_1_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_2_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_3_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_4_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_5_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_6_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_7_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.yak_8_love2.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.kenji = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 304.2, -543.1, 36.3)
        $.kenji.setHeading(140.0)
        $.kenji.setThreatSearch(0 /* THREAT_PLAYER1 */)
        $.kenji.giveWeapon(3 /* WEAPONTYPE_UZI */, 60)
        $.kenji.addArmor(100)
        $.blip_kenji_love2 = Blip.AddForChar($.kenji)
        $.kenji.setStayInSamePlace(true /* true */)
        $.flag_yak_created_love2 = 1
    }

    return
}

async function player_wanted_love2() {
    if ($.flag_yak_created_love2 == 1 && $.flag_wanted_love2 == 0) {
        if (Char.IsDead($.yak_1_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_2_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_3_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_4_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_5_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_6_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_7_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
        if (Char.IsDead($.yak_8_love2)) {
            $.player.alterWantedLevelNoDrop(3)
            $.flag_wanted_love2 = 1
        }
    }

    return

    // ****************************************Mission Start************************************
}

async function mission_start_love2() {
    Stat.RegisterMissionGiven()
    // SCRIPT_NAME love2
    $.flag_player_on_mission = 1
    $.flag_player_on_love_mission = 1
    await asyncWait(0)

    $.flag_carpark_blip = 0
    $.flag_kenji_dead = 0
    $.flag_message = 0
    $.flag_yak_created_love2 = 0
    $.flag_wanted_love2 = 0
    $.flag_yak_attack_love2 = 0
    $.flag_player_clear = 0
    $.flag_kenji_cut = 0
    $.flag_kenji_look = 0

    $.flag_1_dead_love2 = 0
    $.flag_2_dead_love2 = 0
    $.flag_3_dead_love2 = 0
    $.flag_4_dead_love2 = 0
    $.flag_5_dead_love2 = 0
    $.flag_6_dead_love2 = 0
    $.flag_7_dead_love2 = 0
    $.flag_8_dead_love2 = 0

    $.counter_kenji_guards_dead = 0

    $.carpark_minx = 265.5
    $.carpark_miny = -610.5
    $.carpark_maxx = 345.5
    $.carpark_maxy = -479.5

    $.carpark_minz = 32.5
    $.carpark_maxz = 50.0

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_love2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( LOVE2 ) 15000 2	//"Love Mission 2"

  SWITCH_STREAMING OFF
  */

    Streaming.RequestModel(tshrorckgrdn)
    Streaming.RequestModel(tshrorckgrdn_alfas)

    while (!Streaming.HasModelLoaded(tshrorckgrdn_alfas) || !Streaming.HasModelLoaded(tshrorckgrdn)) {
        await asyncWait(0)
    }

    // ****************************************START OF CUTSCENE********************************

    Streaming.LoadSpecialCharacter(1, $.love)
    //LOAD_SPECIAL_CHARACTER 2 butler

    Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH)
    Streaming.LoadSpecialModel(hier`cutobj02`, LOVEH)
    //LOAD_SPECIAL_MODEL cut_obj3 BUTLERH

    /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(hier`cutobj01`) || !Streaming.HasModelLoaded(hier`cutobj02`)) {
        //OR NOT HAS_SPECIAL_CHARACTER_LOADED 2
        //OR NOT HAS_MODEL_LOADED cut_obj3
        await asyncWait(0)
    }

    Cutscene.Load(d2_kk)

    Streaming.Switch(true /* ON */)

    Cutscene.SetOffset(85.2162, -1532.9093, 243.5422)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim($.player)

    $.cs_love = CutsceneObject.Create(ped`SPECIAL1`)
    $.cs_love.setAnim($.love)

    //CREATE_CUTSCENE_OBJECT PED_SPECIAL2 cs_butler
    //SET_CUTSCENE_ANIM cs_butler butler

    $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`)
    $.cs_playerhead.setAnim($.player)

    $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj02`)
    $.cs_lovehead.setAnim($.love)

    //CREATE_CUTSCENE_HEAD cs_butler CUT_OBJ3 cs_butlerhead
    //SET_CUTSCENE_HEAD_ANIM cs_butlerhead butler

    $.player.setCoordinates(85.0, -1548.2, 28.3)

    $.player.setHeading(90.0)

    Camera.DoFade(250, 1 /* FADE_IN */)

    World.SwitchRubbish(false /* OFF */)

    Cutscene.Start()
    //SWITCH_STREAMING OFF

    // Displays cutscene text

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 5434) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_A', 4000, 1) //"Nothing drives down real estate prices like a good old fashi etc..."
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 9893) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_B', 4500, 1) //"....but that might be going too far in this etc."
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 14631) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_C', 4000, 1) //"I want you to kill the Yakuza WAKA-gashira, Kenji Kasen."
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 18811) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_D', 3000, 1) //"I've learned .....t the top of the multi-story carpark in Newport."
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 21947) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_E', 3500, 1) //"The Yakuza must blame.....Steal a Cartel car and take out Kenji!"
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 26266) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_F', 3500, 1) //"The Yakuza must blame.....Steal a Cartel car and take out Kenji!"
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 30656) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_G', 3000, 1) //"The Yakuza must blame.....Steal a Cartel car and take out Kenji!"
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 33442) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Text.PrintNow('LOVE2_H', 4500, 1) //"The Yakuza must blame.....Steal a Cartel car and take out Kenji!"
    //MESSAGE_WAIT 3000 true

    while ($.cs_time < 41066) {
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

    //WHILE GET_FADING_STATUS
    // WAIT 0
    //ENDWHILE

    //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE

    Streaming.UnloadSpecialCharacter(1)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`)
    Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`)
    //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ3

    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn)
    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas)

    //SWITCH_STREAMING ON

    World.SwitchRubbish(true /* ON */)
    // ******************************************END OF CUTSCENE********************************

    /*
  //++++++++++++++++++++++++++++++++++++++++++++CUT SCENE++++++++++++++++++++++++++++++++++

  PRINT_BIG ( LOVE2 ) 15000 2	//"Love Mission 2"

  SET_PLAYER_CONTROL player OFF

  DO_FADE 1500 FADE_OUT

  WAIT 1500

  SWITCH_WIDESCREEN ON

  SET_PLAYER_COORDINATES player 114.24 -1543.31 246.03
  //SET_PLAYER_HEADING player Heading

  LOAD_SPECIAL_CHARACTER 1 misty

  WHILE NOT HAS_SPECIAL_CHARACTER_LOADED 1
  WAIT 0
  ENDWHILE

  CREATE_CHAR PEDTYPE_CIVMALE PED_SPECIAL1 126.6 -1556.5 246.39 love
  TURN_CHAR_TO_FACE_PLAYER love player

  DO_FADE 1500 FADE_IN

  WAIT 1500

  GET_PLAYER_CHAR player script_controlled_player

  IF IS_CHAR_DEAD love
  GOTO mission_love2_failed
  ENDIF

  SET_CHAR_OBJ_GOTO_CHAR_ON_FOOT script_controlled_player love

  WHILE NOT LOCATE_PLAYER_ON_FOOT_CHAR_2D player love 3.0 3.0 0
  WAIT 0
  IF IS_CHAR_DEAD love
  GOTO mission_love2_failed
  ENDIF

  ENDWHILE

  TURN_CHAR_TO_FACE_PLAYER love player
  TURN_CHAR_TO_FACE_CHAR script_controlled_player love

  PRINT_NOW (LOVE2_A) 3000 1	//"Nothing drives down real estate prices like a good old fashi etc..."
  MESSAGE_WAIT 3000 true
  PRINT_NOW (LOVE2_B) 3000 1	//"....but that might be going too far in this etc."
  MESSAGE_WAIT 3000 true
  PRINT_NOW (LOVE2_C) 3000 1	//"I want you to kill the Yakuza WAKA-gashira, Kenji Kasen."
  MESSAGE_WAIT 3000 true
  PRINT_NOW (LOVE2_D) 3000 1	//"I've learned .....t the top of the multi-story carpark in Newport."
  MESSAGE_WAIT 3000 true
  PRINT_NOW (LOVE2_E) 3000 1	//"The Yakuza must blame.....Steal a Cartel car and take out Kenji!"
  MESSAGE_WAIT 3000 true
  */
    /*
  SET_CHAR_OBJ_GOTO_COORD_ON_FOOT script_controlled_player 114.24 -1543.31

  WHILE NOT IS_CHAR_OBJECTIVE_PASSED script_controlled_player
  WAIT 0
  ENDWHILE

  //SET_CHAR_OBJ_NO_OBJ script_controlled_player

  DO_FADE 1500 FADE_OUT
  WAIT 1500

  SWITCH_WIDESCREEN OFF
  SET_PLAYER_COORDINATES player 85.1 -1548.8 28.3
  //SET_PLAYER_HEADING player Heading

  DELETE_CHAR love
  UNLOAD_SPECIAL_CHARACTER 1

  DO_FADE 1500 FADE_IN
  WAIT 1500

  SET_PLAYER_CONTROL player ON



  //++++++++++++++++++++++++++++++++++++++++++++++++CUTSCENE OVER+++++++++++++++++++++++++++++
  */

    Streaming.LoadSpecialCharacter(1, $.kenji)
    while (!Streaming.HasSpecialCharacterLoaded(1)) {
        await asyncWait(0)
    }

    Streaming.RequestModel(ped`GANG_YAKUZA_A`)
    while (!Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) {
        await asyncWait(0)
    }

    Streaming.RequestModel(ped`GANG_YAKUZA_B`)
    while (!Streaming.HasModelLoaded(ped`GANG_YAKUZA_B`)) {
        await asyncWait(0)
    }

    Streaming.RequestModel(car`YAKUZA`)
    while (!Streaming.HasModelLoaded(car`YAKUZA`)) {
        await asyncWait(0)
    }

    Streaming.RequestModel(car`STRETCH`)
    while (!Streaming.HasModelLoaded(car`STRETCH`)) {
        await asyncWait(0)
    }

    Audio.LoadMissionAudio(LO2_A)

    /*
  REQUEST_MODEL CAR_COLUMB//test stuff
  WHILE NOT HAS_MODEL_LOADED CAR_COLUMB
  WAIT 0
  ENDWHILE

  PRINT_NOW (LOVE2_3) 3000 1//test stuff
  CREATE_CAR CAR_COLUMB 54.0 -1625.0 -100.0 test_car_love2//test stuff
  CAR_SET_IDLE test_car_love2//test stuff
  */

    //While loop 1: player not at carpark AND player not in CAR_COLUMB
}

async function while_loop_1() {
    while ($.flag_kenji_dead == 0) {
        await asyncWait(0)
        if ($.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 3
            // SCM GOTO → while_loop_4 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_4') // fallback: would break linear control flow
        }
        if ($.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 1
            // SCM GOTO → while_loop_2 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_2') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 2
            // SCM GOTO → while_loop_3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_3') // fallback: would break linear control flow
        }
        if ($.flag_message == 0) {
            Text.PrintNow('LOVE2_1', 6000, 1) //"Go and steal a Colombian Gangcar!"
            await asyncWait(3000)
            $.flag_message = 1
        }
    }

    //While loop 2: player not at carpark AND player in CAR_COLUMB
}

async function while_loop_2() {
    while ($.flag_kenji_dead == 0) {
        await asyncWait(0)
        if ($.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 3
            // SCM GOTO → while_loop_4 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_4') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 0
            // SCM GOTO → while_loop_1 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_1') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 2
            // SCM GOTO → while_loop_3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_3') // fallback: would break linear control flow
        }
        if ($.flag_message == 1) {
            Text.PrintNow('LOVE2_2', 4000, 1) //"Now get to the multi-storey in Newport and kill Kenji!"
            await asyncWait(3000)
            $.flag_message = 0
        }
        if ($.flag_carpark_blip == 0) {
            $.blip_carpark = Blip.AddForCoord(305.0, -545.0, 30.0)
            $.flag_carpark_blip = 1
        }
    }

    //While loop 3: player at carpark AND NOT in CAR_COLUMB
}

async function while_loop_3() {
    if ($.flag_carpark_blip == 1) {
        $.blip_carpark.remove()
        $.flag_carpark_blip = 0
    }

    while ($.flag_kenji_dead == 0) {
        await asyncWait(0)
        if ($.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 3
            // SCM GOTO → while_loop_4 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_4') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 0
            // SCM GOTO → while_loop_1 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_1') // fallback: would break linear control flow
        }
        if ($.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 1
            // SCM GOTO → while_loop_2 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_2') // fallback: would break linear control flow
        }
        if ($.flag_message == 2) {
            Text.PrintNow('LOVE2_3', 3000, 1) //If you proceed without a Cartel car you will be identified!
            $.flag_message = 0
        }
        if (!$.player.isInAnyCar() && $.player.isInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)) {
            Text.PrintNow('LOVE2_4', 3000, 1) //The Yakuza have identified you!
            if ($.flag_yak_created_love2 == 1) {
                if (!Char.IsDead($.kenji) && !Car.IsDead($.kenji_car_love2)) {
                    $.kenji.setObjEnterCarAsDriver($.kenji_car_love2)
                }
            }
            // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
        }
        if ($.player.isInArea3D($.carpark_minx, $.carpark_miny, 35.0, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)) {
            if (!$.player.isInModel(131 /* CAR_COLUMB */)) {
                Text.PrintNow('LOVE2_4', 3000, 1) //The Yakuza have identified you!
                if ($.flag_yak_created_love2 == 1) {
                    if (!Char.IsDead($.kenji) && !Car.IsDead($.kenji_car_love2)) {
                        $.kenji.setObjEnterCarAsDriver($.kenji_car_love2)
                    }
                }
                // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
            }
        }

        // SCM GOSUB create_yakuza
        await create_yakuza()
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB player_wanted_love2
        await player_wanted_love2()
        // fallback if label was not emitted as async function: no-op continues linearly
        if ($.flag_wanted_love2 == 1) {
            Audio.PlayMissionAudio()
            $.flag_wanted_love2 = 2
        }
    }

    //While loop 4: player at carpark AND in CAR_COLUMB
}

async function while_loop_4() {
    if ($.flag_carpark_blip == 1) {
        $.blip_carpark.remove()
        $.flag_carpark_blip = 0
    }

    while ($.flag_kenji_dead == 0) {
        await asyncWait(0)
        if ($.player.isInModel(131 /* CAR_COLUMB */)) {
            $.player_car = $.player.storeCarIsIn()
            $.player_car.setStrong(true /* true */)
        }
        /*
    IF NOT IS_PLAYER_IN_MODEL player CAR_COLUMB
    AND IS_PLAYER_IN_AREA_3D	player carpark_minx carpark_miny carpark_minz carpark_maxx carpark_maxy carpark_maxz false
    PRINT_NOW (LOVE2_4) 3000 1 //The Yakuza have identified you!
    GOTO mission_love2_failed
    ENDIF
    */
        if (
            $.flag_yak_attack_love2 == 0 &&
            $.player.isInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)
        ) {
            if (!Char.IsDead($.yak_7_love2)) {
                $.yak_7_love2.setObjKillPlayerAnyMeans($.player)
            }
            if (!Char.IsDead($.yak_8_love2)) {
                $.yak_8_love2.setObjKillPlayerAnyMeans($.player)
            }
            $.flag_yak_attack_love2 = 1
        }
        if (!$.player.isInAnyCar() && $.player.isInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)) {
            Text.PrintNow('LOVE2_4', 3000, 1) //The Yakuza have identified you!
            if ($.flag_yak_created_love2 == 1) {
                if (!Char.IsDead($.kenji) && !Car.IsDead($.kenji_car_love2)) {
                    $.kenji.setObjEnterCarAsDriver($.kenji_car_love2)
                }
            }
            // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
        }
        if ($.player.isInArea3D($.carpark_minx, $.carpark_miny, 35.0, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)) {
            if (!$.player.isInModel(131 /* CAR_COLUMB */)) {
                Text.PrintNow('LOVE2_4', 3000, 1) //The Yakuza have identified you!
                if ($.flag_yak_created_love2 == 1) {
                    if (!Char.IsDead($.kenji) && !Car.IsDead($.kenji_car_love2)) {
                        $.kenji.setObjEnterCarAsDriver($.kenji_car_love2)
                    }
                }
                // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
            } else {
                if (!Char.IsDead($.kenji)) {
                    $.kenji.turnToFacePlayer($.player)
                }
            }
        }
        if ($.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            if (!Char.IsDead($.yak_7_love2)) {
                $.yak_7_love2.setObjNoObj()
            }
            if (!Char.IsDead($.yak_8_love2)) {
                $.yak_8_love2.setObjNoObj()
            }
            $.flag_yak_attack_love2 = 0
            $.flag_message = 1
            // SCM GOTO → while_loop_2 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_2') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && !$.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 0
            // SCM GOTO → while_loop_1 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_1') // fallback: would break linear control flow
        }
        if (!$.player.isInModel(131 /* CAR_COLUMB */) && $.player.isInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, false /* false */)) {
            $.flag_message = 2
            // SCM GOTO → while_loop_3 (not lowered; manual jump required)
            throw new Error('unresolved GOTO while_loop_3') // fallback: would break linear control flow
        }

        if ($.flag_yak_created_love2 == 1 && $.flag_kenji_cut == 0 && $.player.isInModel(131 /* CAR_COLUMB */)) {
            if ($.player.isInArea3D(317.2, -603.5, 33.0, 332.0, -593.1, 35.0, false /* false */)) {
                $.flag_kenji_cut = 1
                // SCM GOSUB kenji_cut
                await kenji_cut()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
            if ($.player.isInArea3D(317.2, -506.3, 33.0, 332.0, -497.3, 35.0, false /* false */)) {
                $.flag_kenji_cut = 2
                // SCM GOSUB kenji_cut
                await kenji_cut()
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }
        // SCM GOSUB create_yakuza
        await create_yakuza()
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB player_wanted_love2
        await player_wanted_love2()
        // fallback if label was not emitted as async function: no-op continues linearly
        if ($.flag_wanted_love2 == 1) {
            Audio.PlayMissionAudio()
            $.flag_wanted_love2 = 2
        }
        // SCM GOSUB yak_death_count
        await yak_death_count()
        // fallback if label was not emitted as async function: no-op continues linearly
        if (Char.IsDead($.kenji)) {
            $.flag_kenji_dead = 1
            $.blip_kenji_love2.remove()
        }
    }

    while ($.flag_player_clear == 0) {
        await asyncWait(0)
        if ($.flag_kenji_dead == 1) {
            Text.PrintNow('LOVE2_5', 3000, 1) //Kenji is dead!! Get out of NEWPORT and dump the Cartel car!!
            $.flag_kenji_dead = 2
        }
        // SCM GOSUB yak_death_count
        await yak_death_count()
        // fallback if label was not emitted as async function: no-op continues linearly
        if ($.counter_kenji_guards_dead == 8) {
            Text.PrintNow('LOVE2_6', 3000, 1) //You've killed all the witnesses!!
            // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
        }
        if (
            !$.player.isInModel(131 /* CAR_COLUMB */) &&
            $.player.isInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, false /* false */)
        ) {
            Text.PrintNow('LOVE2_4', 3000, 1) //The Yakuza have identified you!
            // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_love2_failed') // fallback: would break linear control flow
        }
        if (!$.player.isInZone('COM_EAS') && $.player.isInModel(131 /* CAR_COLUMB */) && $.flag_kenji_dead == 2) {
            Text.PrintNow('LOVE2_7', 3000, 1) //Now dump the car!
            $.flag_kenji_dead = 3
        }
        if ($.player.isInZone('COM_EAS') && !$.player.isInModel(131 /* CAR_COLUMB */) && $.flag_kenji_dead == 2) {
            Text.PrintNow('LOVE2_8', 3000, 1) //Now get out of Newport!
            $.flag_kenji_dead = 3
        }
        if (!$.player.isInZone('COM_EAS') && !$.player.isInModel(131 /* CAR_COLUMB */)) {
            $.flag_player_clear = 1
        }
    }

    // SCM GOTO → mission_love2_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love2_passed') // fallback: would break linear control flow

    // Mission Love 2 failed
}

async function mission_love2_failed() {
    Text.PrintBig('M_FAIL', 2000, 1)
    $.blip_kenji_love2.remove()
    $.kenji.removeElegantly()

    return

    // mission Love 2 passed
}

async function mission_love2_passed() {
    $.flag_love_mission2_passed = 1
    Text.PrintWithNumberBig('M_PASS', 30000, 5000, 1) //"Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.clearWantedLevel()
    $.player.addScore(30000)
    Stat.RegisterMissionPassed('LOVE2')
    Stat.PlayerMadeProgress(1)
    $.kenji_contact_blip.remove()
    // START_NEW_SCRIPT love_mission3_loop

    return

    // mission cleanup
}

async function mission_cleanup_love2() {
    if ($.flag_carpark_blip == 1) {
        $.blip_carpark.remove()
    }

    $.blip_kenji_love2.remove()
    $.kenji.removeElegantly()

    Streaming.UnloadSpecialCharacter(1)

    Camera.RestoreJumpcut()
    $.player.setControl(true /* on */)
    Hud.SwitchWidescreen(false /* off */)

    $.flag_player_on_mission = 0
    $.flag_player_on_love_mission = 0

    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`)
    Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`)
    Streaming.MarkModelAsNoLongerNeeded(car`STRETCH`)
    Streaming.MarkModelAsNoLongerNeeded(car`YAKUZA`)

    Mission.Finish()
    return

    //-----------------------------GOSUBS--------------------------------------
}

async function yak_death_count() {
    if (Char.IsDead($.yak_1_love2) && $.flag_1_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_1_dead_love2 = 1
    }
    if (Char.IsDead($.yak_2_love2) && $.flag_2_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_2_dead_love2 = 1
    }
    if (Char.IsDead($.yak_3_love2) && $.flag_3_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_3_dead_love2 = 1
    }
    if (Char.IsDead($.yak_4_love2) && $.flag_4_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_4_dead_love2 = 1
    }
    if (Char.IsDead($.yak_5_love2) && $.flag_5_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_5_dead_love2 = 1
    }
    if (Char.IsDead($.yak_6_love2) && $.flag_6_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_6_dead_love2 = 1
    }
    if (Char.IsDead($.yak_7_love2) && $.flag_7_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_7_dead_love2 = 1
    }
    if (Char.IsDead($.yak_8_love2) && $.flag_8_dead_love2 == 0) {
        ++$.counter_kenji_guards_dead
        $.flag_8_dead_love2 = 1
    }

    return
}

async function kenji_cut() {
    if ($.flag_kenji_cut == 1) {
        $.player.applyBrakesToCar(true /* On */)
        Hud.SwitchWidescreen(true /* on */)
        $.player.setControl(false /* off */)
        Camera.SetFixedPosition(303.11, -542.44, 37.1, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(303.67, -543.36, 36.92, 2 /* JUMP_CUT */)
        $.timer_kenji_cut_start = Clock.GetGameTimer()
        $.timer_kenji_cut_dif = $.timer_kenji_cut_start - $.timer_kenji_cut_start
        while ($.timer_kenji_cut_dif < 7500) {
            await asyncWait(0)
            //PRINT_WITH_NUMBER_NOW ( Z ) timer_kenji_cut_dif 1000 1
            $.timer_kenji_cut_now = Clock.GetGameTimer()
            $.timer_kenji_cut_dif = $.timer_kenji_cut_now - $.timer_kenji_cut_start
            if ($.timer_kenji_cut_dif > 1000 && $.flag_kenji_look == 0) {
                if (!Char.IsDead($.kenji) && !Char.IsDead($.yak_2_love2)) {
                    //CHAR_LOOK_AT_CHAR_ALWAYS kenji yak_3_love2
                    $.kenji.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 4000)
                    $.yak_2_love2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 4000)
                    $.flag_kenji_look = 1
                }
            }
            if ($.timer_kenji_cut_dif > 2500 && $.flag_kenji_cut == 1) {
                /*IF NOT IS_CHAR_DEAD kenji
        STOP_CHAR_LOOKING kenji
        ENDIF*/
                if (!Char.IsDead($.yak_3_love2)) {
                    Camera.PointAtChar($.yak_3_love2, 15 /* FIXED */, 1 /* INTERPOLATION */)
                }
                $.flag_kenji_cut = 3
            }
            if ($.timer_kenji_cut_dif > 5000 && $.flag_kenji_cut == 3) {
                if (!Char.IsDead($.yak_1_love2)) {
                    Camera.PointAtChar($.yak_1_love2, 15 /* FIXED */, 1 /* INTERPOLATION */)
                    $.flag_kenji_cut = 4
                }
            }
        }
        Camera.RestoreJumpcut()
        $.player.setControl(true /* on */)
        Hud.SwitchWidescreen(false /* off */)
    }

    if ($.flag_kenji_cut == 2) {
        $.player.applyBrakesToCar(true /* On */)
        Hud.SwitchWidescreen(true /* on */)
        $.player.setControl(false /* off */)
        Camera.SetFixedPosition(303.32, -544.7, 37.09, 0.0, 0.0, 0.0)
        Camera.PointAtPoint(303.83, -543.85, 36.96, 2 /* JUMP_CUT */)
        $.timer_kenji_cut_start = Clock.GetGameTimer()
        $.timer_kenji_cut_dif = $.timer_kenji_cut_start - $.timer_kenji_cut_start
        while ($.timer_kenji_cut_dif < 7500) {
            await asyncWait(0)
            //PRINT_WITH_NUMBER_NOW ( Z ) timer_kenji_cut_dif 1000 1
            $.timer_kenji_cut_now = Clock.GetGameTimer()
            $.timer_kenji_cut_dif = $.timer_kenji_cut_now - $.timer_kenji_cut_start
            if ($.timer_kenji_cut_dif > 1000 && $.flag_kenji_look == 0) {
                if (!Char.IsDead($.kenji) && !Char.IsDead($.yak_2_love2)) {
                    //CHAR_LOOK_AT_CHAR_ALWAYS kenji yak_1_love2
                    $.kenji.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 4000)
                    $.yak_2_love2.setWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 4000)
                    $.flag_kenji_look = 1
                }
            }
            if ($.timer_kenji_cut_dif > 2500 && $.flag_kenji_cut == 2) {
                /*IF NOT IS_CHAR_DEAD kenji
        STOP_CHAR_LOOKING kenji
        ENDIF*/
                if (!Char.IsDead($.yak_1_love2)) {
                    Camera.PointAtChar($.yak_1_love2, 15 /* FIXED */, 1 /* INTERPOLATION */)
                }
                $.flag_kenji_cut = 3
            }
            if ($.timer_kenji_cut_dif > 5000 && $.flag_kenji_cut == 3) {
                if (!Char.IsDead($.yak_4_love2)) {
                    Camera.PointAtChar($.yak_4_love2, 15 /* FIXED */, 1 /* INTERPOLATION */)
                    $.flag_kenji_cut = 4
                }
            }
        }
        Camera.RestoreJumpcut()
        $.player.setControl(true /* on */)
        Hud.SwitchWidescreen(false /* off */)
    }

    return
}

export async function love2() {
    // MissionBoundary
    // *****************************************************************************************
    // *********************************    Love mission 2   ***********************************
    // *********************************  Assassinate Kenji  ***********************************
    // *****************************************************************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_love2
    await mission_start_love2()
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_love2_failed
        await mission_love2_failed()
        // fallback if label was not emitted as async function: no-op continues linearly
    }

    // SCM GOSUB mission_cleanup_love2
    await mission_cleanup_love2()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_FLOAT carpark_minx carpark_miny carpark_maxx carpark_maxy
    // VAR_FLOAT carpark_minz carpark_maxz

    // VAR_INT blip_carpark blip_kenji_love2
    // VAR_INT flag_carpark_blip

    //VAR_INT test_car_love2//test stuff

    // VAR_INT flag_kenji_dead flag_yak_created_love2 flag_wanted_love2 flag_kenji_look
    // VAR_INT flag_message flag_yak_attack_love2 flag_player_clear flag_kenji_cut
    // VAR_INT timer_kenji_cut_start timer_kenji_cut_dif timer_kenji_cut_now

    // VAR_INT kenji_car_love2 yak_car_1_love2 yak_car_2_love2
    // VAR_INT yak_1_love2 yak_2_love2 yak_3_love2 yak_4_love2
    // VAR_INT yak_5_love2 yak_6_love2 yak_7_love2 yak_8_love2
    // VAR_INT counter_kenji_guards_dead
    // VAR_INT flag_1_dead_love2 flag_2_dead_love2 flag_3_dead_love2 flag_4_dead_love2
    // VAR_INT flag_5_dead_love2 flag_6_dead_love2 flag_7_dead_love2 flag_8_dead_love2
    //VAR_INT flag_1_dead_love2 flag_1_dead_love2 flag_1_dead_love2 flag_1_dead_love2

    //VAR_INT yak_9_love2 yak_10_love2 yak_11_love2 yak_12_love2

    //VAR_INT kenji

    //+++++++++++++++++++++++++++CREATE PEDS GOSUB++++++++++++++++++++++++++++++++++++++++++++
}
