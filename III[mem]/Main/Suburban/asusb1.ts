// Generated from Main/Suburban/asusb1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_as1() {
    Stat.RegisterMissionGiven();
    // SCRIPT_NAME asusb1
    $.flag_player_on_mission = 1;
    $.flag_player_on_asuka_suburban_mission = 1;

    await asyncWait(0);

    /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_as1_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  SWITCH_STREAMING OFF

  PRINT_BIG ( AS1 ) 15000 2
  */

    //  ******************************************* START OF CUTSCENE ***************************

    Streaming.RequestModel(2011 /* csitecutscene */);

    Streaming.LoadSpecialCharacter(1, 'asuka');
    Streaming.LoadSpecialCharacter(2, 'miguel');

    Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'PLAYERH');
    Streaming.LoadSpecialModel(186 /* cut_obj2 */, 'ASUKAH');
    Streaming.LoadSpecialModel(187 /* cut_obj3 */, 'WHIP');

    /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */

    Streaming.LoadAllModelsNow();

    while (!Streaming.HasModelLoaded(2011 /* csitecutscene */)) {
        await asyncWait(0);
    }

    while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasSpecialCharacterLoaded(2)) {
        await asyncWait(0);
    }

    while (!Streaming.HasModelLoaded(185 /* cut_obj1 */) || !Streaming.HasModelLoaded(186 /* cut_obj2 */) || !Streaming.HasModelLoaded(187 /* cut_obj3 */)) {
        await asyncWait(0);
    }

    Cutscene.Load('a6_bait');

    Streaming.Switch(true /* ON */);

    Cutscene.SetOffset(369.02, -327.5, 18.46);

    $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);
    $.cs_player.setAnim('player');

    $.cs_asuka = CutsceneObject.Create(26 /* PED_SPECIAL1 */);
    $.cs_asuka.setAnim('asuka');

    $.cs_miguel = CutsceneObject.Create(27 /* PED_SPECIAL2 */);
    $.cs_miguel.setAnim('miguel');

    $.cs_playerhead = CutsceneHead.Create($.cs_player, 185 /* CUT_OBJ1 */);
    $.cs_playerhead.setAnim('player');

    $.cs_asukahead = CutsceneHead.Create($.cs_asuka, 186 /* CUT_OBJ2 */);
    $.cs_asukahead.setAnim('asuka');

    $.cs_whip = CutsceneObject.Create(187 /* cut_obj3 */);
    $.cs_whip.setAnim('WHIP');

    //CREATE_CUTSCENE_HEAD cs_miguel CUT_OBJ3 cs_miguelhead
    //SET_CUTSCENE_HEAD_ANIM cs_miguelhead miguel

    $.player.setCoordinates(373.7523, -327.2676, 17.195);

    $.player.setHeading(270.0);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    World.SwitchRubbish(false /* OFF */);

    Cutscene.Start();

    //------CUTSCENE TEXT-----------------------------

    $.cs_time = Cutscene.GetTime();

    while ($.cs_time < 3598) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('AS1_A', 10000, 1);

    while ($.cs_time < 6277) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('AS1_B', 10000, 1);

    while ($.cs_time < 12209) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('AS1_C', 10000, 1);

    while ($.cs_time < 17758) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('AS1_D', 10000, 1);

    while ($.cs_time < 22581) {
        await asyncWait(0);
        $.cs_time = Cutscene.GetTime();
    }

    Text.PrintNow('AS1_E', 10000, 1);

    while ($.cs_time < 29000) {
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

    Camera.DoFade(0, 0 /* FADE_OUT */);

    Camera.SetBehindPlayer();

    await asyncWait(500);

    Camera.DoFade(1500, 1 /* FADE_IN */);

    Streaming.UnloadSpecialCharacter(1);
    Streaming.UnloadSpecialCharacter(2);
    Streaming.MarkModelAsNoLongerNeeded(2011 /* csitecutscene */);

    Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
    Streaming.MarkModelAsNoLongerNeeded(186 /* CUT_OBJ2 */);
    Streaming.MarkModelAsNoLongerNeeded(187 /* CUT_OBJ3 */);

    World.SwitchRubbish(true /* ON */);
    Streaming.Switch(true /* ON */);
    World.SwitchProcessing(true /* ON */);
    // ******************************************END OF CUTSCENE********************************

    //---------------------------------SET FLAGS & VARIABLES-------------------------------------------

    $.flag_yak1_dead = 0;
    $.flag_yak2_dead = 0;
    $.flag_yak3_dead = 0;
    $.flag_yak4_dead = 0;
    $.flag_yak5_dead = 0;
    $.flag_yak6_dead = 0;
    //flag_all_yak_dead = 0

    $.counter_yakuza_killed_as1 = 0;
    /*
  flag_blip_removed_a = 0
  flag_blip_removed_b = 0
  flag_blip_removed_c = 0
  flag_blip_removed_d = 0

  flag_car_a_blip = 0
  flag_car_b_blip = 0
  flag_car_c_blip = 0
  flag_car_d_blip = 0
  */

    $.yak1_mission = 0;
    //yak4_mission = 0

    $.flag_cartel_a_created = 0;
    $.flag_cartel_b_created = 0;
    //flag_cartel_c_created = 0

    $.flag_cartel_d_created = 0;
    $.flag_yakuza_created_as1 = 0;

    //flag_cartelcar_a_dead = 0
    //flag_cartelcar_b_dead = 0
    //flag_cartelcar_c_dead = 0
    //flag_cartelcar_d_dead = 0

    $.cartel1_as1_dead = 0;
    $.cartel2_as1_dead = 0;
    $.cartel3_as1_dead = 0;
    $.cartel4_as1_dead = 0;
    $.cartel5_as1_dead = 0;
    $.cartel6_as1_dead = 0;
    $.cartel7_as1_dead = 0;
    $.cartel8_as1_dead = 0;
    /*
  cartel9_as1_dead = 0
  cartel10_as1_dead = 0
  cartel11_as1_dead = 0
  cartel12_as1_dead = 0
  */

    $.cartel13_as1_dead = 0;
    $.cartel14_as1_dead = 0;
    $.cartel15_as1_dead = 0;
    $.cartel16_as1_dead = 0;

    $.counter_cartels_killed_as1 = 0;
    $.counter_asukas_revenge = 0;
    $.counter_bailouts = 0;
    //counter_yak_ammo = 0

    $.flag_bailout_a = 0;
    $.flag_bailout_b = 0;
    //flag_bailout_c = 0

    $.flag_bailout_d = 0;

    $.yaks_a_killed_by_player = 0;
    $.yaks_b_killed_by_player = 0;
    $.yaks_killed_by_player = 0;

    //timer_as3_start = 0

    $.timer_as3_now = 0;
    //timer_as3_dif = 0

    $.particle_time = 0;
    $.flag_particle = 0;

    $.flag_a_attack = 0;
    $.flag_b_attack = 0;
    $.flag_d_attack = 0;
    //flag_c_attack = 0

    $.flag_wellybob = 0;
    // ****************************************LOCATION COORDS**************************************

    $.killzone_cent_x = -1185.0;
    $.killzone_cent_y = 105.0;
    $.killzone_min_x = -1254.0;
    $.killzone_min_y = 85.0;
    $.killzone_max_x = -1178.0;
    $.killzone_max_y = 160.0;

    $.cartel_a_x = -996.85;
    $.cartel_a_y = -247.5;

    $.cartel_b_x = -877.0;
    $.cartel_b_y = 562.0;

    //cartel_c_x = -714.0// AIRPORT
    //cartel_c_y = -722.0

    $.cartel_d_x = -459.0;
    $.cartel_d_y = 251.5;

    $.yak1_x = -1168.0;
    $.yak1_y = 110.26;
    $.yak2_x = -1185.0;
    $.yak2_y = 90.4;
    $.yak3_x = -1205.24;
    $.yak3_y = 94.11;
    $.yak4_x = -1160.0;
    $.yak4_y = 119.57;
    $.yak5_x = -1173.3;
    $.yak5_y = 95.5;
    $.yak6_x = -1184.5;
    $.yak6_y = 122.6;

    $.car_a_as1_x = 0.0;
    $.car_a_as1_y = 0.0;
    $.car_a_as1_z = 0.0;
    $.car_b_as1_x = 0.0;
    $.car_b_as1_y = 0.0;
    $.car_b_as1_z = 0.0;
    //car_c_as1_x = 0.0
    //car_c_as1_y = 0.0
    //car_c_as1_z = 0.0

    $.car_d_as1_x = 0.0;
    $.car_d_as1_y = 0.0;
    $.car_d_as1_z = 0.0;

    $.blip_cartel_a_as1 = Blip.AddForCoord($.cartel_a_x, $.cartel_a_y, -100.0);
    $.blip_cartel_b_as1 = Blip.AddForCoord($.cartel_b_x, $.cartel_b_y, -100.0);
    //ADD_BLIP_FOR_COORD cartel_c_x cartel_c_y -100.0 blip_cartel_c_as1

    $.blip_cartel_d_as1 = Blip.AddForCoord($.cartel_d_x, $.cartel_d_y, -100.0);
    $.blip_killzone = Blip.AddForCoord($.killzone_cent_x, $.killzone_cent_y, -100.0);
    $.blip_killzone.changeColor(4);

    Hud.DisplayCounterWithString($.counter_cartels_killed_as1, 0 /* COUNTER_DISPLAY_NUMBER */, 'KILLS');

    Path.SwitchRoadsOff($.killzone_min_x, $.killzone_min_y, 65.0, -1170.0, $.killzone_max_y, 85.0);

    // Mission stuff goes here
    /*
  REQUEST_MODEL PED_FEMALE1
  WHILE NOT HAS_MODEL_LOADED PED_FEMALE1
  WAIT 0
  ENDWHILE

  REQUEST_MODEL PED_FEMALE2
  WHILE NOT HAS_MODEL_LOADED PED_FEMALE2
  WAIT 0
  ENDWHILE
  */

    Streaming.RequestModel(16 /* PED_GANG_YAKUZA_A */);
    while (!Streaming.HasModelLoaded(16 /* PED_GANG_YAKUZA_A */)) {
        await asyncWait(0);
    }

    Streaming.RequestModel(17 /* PED_GANG_YAKUZA_B */);
    while (!Streaming.HasModelLoaded(17 /* PED_GANG_YAKUZA_B */)) {
        await asyncWait(0);
    }

    Streaming.RequestModel(20 /* PED_GANG_COLOMBIAN_A */);
    while (!Streaming.HasModelLoaded(20 /* PED_GANG_COLOMBIAN_A */)) {
        await asyncWait(0);
    }

    Streaming.RequestModel(21 /* PED_GANG_COLOMBIAN_B */);
    while (!Streaming.HasModelLoaded(21 /* PED_GANG_COLOMBIAN_B */)) {
        await asyncWait(0);
    }

    Streaming.RequestModel(95 /* CAR_SENTINEL */);
    while (!Streaming.HasModelLoaded(95 /* CAR_SENTINEL */)) {
        await asyncWait(0);
    }

    /*
  REQUEST_MODEL PED_MALE3
  WHILE NOT HAS_MODEL_LOADED PED_MALE3
  WAIT 0
  ENDWHILE

  REQUEST_MODEL PED_MALE4
  WHILE NOT HAS_MODEL_LOADED PED_MALE4
  WAIT 0
  ENDWHILE



  PRINT_NOW ( AS1_A ) 4000 1 //"Go and find the Colombian death squads and lead them to the Kill Zone."
  WAIT 4000
  PRINT_NOW ( AS1_B ) 4000 1 //"But be careful! They are professionals and they're being paid to kill you!"
  WAIT 4000
  */

    Player.ResetNumOfModelsKilled();

    while ($.counter_cartels_killed_as1 < 12) {
        await asyncWait(0);
        const _res293 = $.player.getCoordinates();
        $.player_X = _res293.x;
        $.player_Y = _res293.y;
        $.player_Z = _res293.z;
        if ($.player.locateAnyMeans3D($.killzone_min_x, $.killzone_min_y, 65.0, $.killzone_max_x, $.killzone_max_y, 75.0, false /* false */)) {
            $.flag_wellybob = 1;
        } else {
            $.flag_wellybob = 0;
        }
        // SCM GOSUB yak_deaths
        await yak_deaths();
        // fallback if label was not emitted as async function: no-op continues linearly
        if ($.counter_bailouts > $.counter_asukas_revenge) {
            Text.PrintNow('AS1_H', 3000, 1); //you failed to lead the Deathsquad into the Yakuza trap!!
            // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_as1_failed'); // fallback: would break linear control flow
        }

        if ($.counter_yakuza_killed_as1 > 5) {
            Text.PrintNow('AS1_G', 3000, 1); //Too many Yakuza are dead!!
            // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_as1_failed'); // fallback: would break linear control flow
        }
        // SCM GOSUB cartel_deaths
        await cartel_deaths();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB vegetables
        await vegetables();
        // fallback if label was not emitted as async function: no-op continues linearly
        // SCM GOSUB unhappy_car_check
        await unhappy_car_check();
        // fallback if label was not emitted as async function: no-op continues linearly

        //---------------------------------YAKUZA KILLZONE GENERATION-----------------------------------------------------------

        if ($.flag_yakuza_created_as1 == 0) {
            if ($.player.isInZone('SUB_IND') || $.player.isInZone('BIG_DAM')) {
                if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                    if ($.flag_yak1_dead == 0) {
                        $.yakuza1_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 16 /* PED_GANG_YAKUZA_A */, $.yak1_x, $.yak1_y, 70.0);
                        $.yakuza1_as1.setHeading(130.0);
                        $.yakuza1_as1.clearThreatSearch();
                        $.yakuza1_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza1_as1.setThreatSearch(64 /* THREAT_COP */);
                        $.yakuza1_as1.addArmor(100);
                        $.yakuza1_as1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
                        $.yakuza1_as1.setStayInSamePlace(true /* true */);
                    }
                    if ($.flag_yak2_dead == 0) {
                        $.yakuza2_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 17 /* PED_GANG_YAKUZA_B */, $.yak2_x, $.yak2_y, 72.06);
                        $.yakuza2_as1.setHeading(45.0);
                        $.yakuza2_as1.clearThreatSearch();
                        $.yakuza2_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza2_as1.setThreatSearch(64 /* THREAT_COP */);
                        $.yakuza2_as1.addArmor(100);
                        $.yakuza2_as1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.yakuza2_as1.setStayInSamePlace(true /* true */);
                    }
                    if ($.flag_yak3_dead == 0) {
                        $.yakuza3_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 17 /* PED_GANG_YAKUZA_B */, $.yak3_x, $.yak3_y, 72.06);
                        $.yakuza3_as1.setHeading(295.0);
                        $.yakuza3_as1.clearThreatSearch();
                        $.yakuza3_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza3_as1.setThreatSearch(64 /* THREAT_COP */);
                        $.yakuza3_as1.addArmor(100);
                        $.yakuza3_as1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
                        $.yakuza3_as1.setStayInSamePlace(true /* true */);
                    }
                    if ($.flag_yak4_dead == 0) {
                        $.yakuza4_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 16 /* PED_GANG_YAKUZA_A */, $.yak4_x, $.yak4_y, 72.06);
                        $.yakuza4_as1.setHeading(130.0);
                        $.yakuza4_as1.clearThreatSearch();
                        $.yakuza4_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza4_as1.setThreatSearch(64 /* THREAT_COP */);
                        $.yakuza4_as1.addArmor(100);
                        $.yakuza4_as1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
                        $.yakuza4_as1.setStayInSamePlace(true /* true */);
                    }
                    if ($.flag_yak5_dead == 0) {
                        $.yakuza5_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 16 /* PED_GANG_YAKUZA_A */, $.yak5_x, $.yak5_y, 72.44);
                        $.yakuza5_as1.setHeading(60.0);
                        $.yakuza5_as1.clearThreatSearch();
                        $.yakuza5_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza5_as1.setThreatSearch(2097152 /* THREAT_COP_CAR */);
                        $.yakuza5_as1.addArmor(100);
                        $.yakuza5_as1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
                        $.yakuza5_as1.setStayInSamePlace(true /* true */);
                    }
                    if ($.flag_yak6_dead == 0) {
                        $.yakuza6_as1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, 17 /* PED_GANG_YAKUZA_B */, $.yak6_x, $.yak6_y, 68.76);
                        $.yakuza6_as1.setHeading(180.0);
                        $.yakuza6_as1.clearThreatSearch();
                        $.yakuza6_as1.setThreatSearch(4096 /* THREAT_GANG_COLOMBIAN */);
                        $.yakuza6_as1.setThreatSearch(2097152 /* THREAT_COP_CAR */);
                        $.yakuza6_as1.addArmor(100);
                        $.yakuza6_as1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
                        $.yakuza6_as1.setStayInSamePlace(true /* true */);
                    }

                    $.flag_yakuza_created_as1 = 1;
                }
            }
        }
        if ($.flag_yakuza_created_as1 == 1) {
            if (!Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
                $.yakuza1_as1.delete();
                $.yakuza2_as1.delete();
                $.yakuza3_as1.delete();
                $.yakuza4_as1.delete();
                $.yakuza5_as1.delete();
                $.yakuza6_as1.delete();
                $.flag_yakuza_created_as1 = 0;
            }
            /*
      IF counter_yak_ammo = 0
      IF counter_asukas_revenge = 1
      IF NOT IS_CHAR_DEAD	yakuza1_as1
      ADD_AMMO_TO_CHAR yakuza1_as1 WEAPONTYPE_CHAINGUN 30
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza2_as1
      ADD_AMMO_TO_CHAR yakuza2_as1 WEAPONTYPE_SHOTGUN 7
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza3_as1
      ADD_AMMO_TO_CHAR yakuza3_as1 WEAPONTYPE_CHAINGUN 30
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza4_as1
      ADD_AMMO_TO_CHAR yakuza4_as1 WEAPONTYPE_M16 60
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza5_as1
      ADD_AMMO_TO_CHAR yakuza5_as1 WEAPONTYPE_M16 60
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza6_as1
      ADD_AMMO_TO_CHAR yakuza6_as1 WEAPONTYPE_SHOTGUN 7
      ENDIF
      ++ counter_yak_ammo
      ENDIF
      ENDIF
      IF counter_yak_ammo = 1
      IF counter_asukas_revenge = 2
      IF NOT IS_CHAR_DEAD	yakuza1_as1
      ADD_AMMO_TO_CHAR yakuza1_as1 WEAPONTYPE_CHAINGUN 30
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza2_as1
      ADD_AMMO_TO_CHAR yakuza2_as1 WEAPONTYPE_SHOTGUN 7
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza3_as1
      ADD_AMMO_TO_CHAR yakuza3_as1 WEAPONTYPE_CHAINGUN 30
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza4_as1
      ADD_AMMO_TO_CHAR yakuza4_as1 WEAPONTYPE_M16 60
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza5_as1
      ADD_AMMO_TO_CHAR yakuza5_as1 WEAPONTYPE_M16 60
      ENDIF
      IF NOT IS_CHAR_DEAD	yakuza6_as1
      ADD_AMMO_TO_CHAR yakuza6_as1 WEAPONTYPE_SHOTGUN 7
      ENDIF
      ++ counter_yak_ammo
      ENDIF
      ENDIF
      */
        }

        //--------------------------------CARTEL DEATH SQUAD 1 GENERATOR----------------------------------------

        if ($.flag_cartel_a_created == 0) {
            if ($.player.isInZone('SUB_IND') || $.player.isInZone('AIRPORT')) {
                $.cartel_car_a_as1 = Car.Create(95 /* CAR_SENTINEL */, $.cartel_a_x, $.cartel_a_y, 34.0);
                $.cartel_car_a_as1.setHeading(270.0);
                $.cartel_car_a_as1.setUpsidedownNotDamaged(true /* true */);
                $.cartel1_as1 = Char.CreateInsideCar($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */);
                $.cartel2_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 0);
                $.cartel3_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 1);
                $.cartel4_as1 = Char.CreateAsPassenger($.cartel_car_a_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 2);
                $.cartel_car_a_as1.setIdle();
                $.flag_cartel_a_created = 1;
            }
        }

        //-----------------------------------CARTEL DEATH SQUAD 1 ATTACK-----------------------------------------

        if ($.flag_cartel_a_created == 1) {
            if ($.flag_a_attack == 0) {
                if ($.player.locateAnyMeans2D($.cartel_a_x, $.cartel_a_y, 30.0, 30.0, false /* false */)) {
                    if (!Car.IsDead($.cartel_car_a_as1)) {
                        $.cartel_car_a_as1.setStrong(true /* TRUE */);
                        $.cartel_car_a_as1.lockDoors(2 /* CARLOCK_LOCKED */);
                        $.cartel_car_a_as1.setOnlyDamagedByPlayer(true /* True */);
                        $.blip_cartel_a_as1.remove();
                        $.cartel_car_a_as1.setCruiseSpeed(50.0);
                        $.cartel_car_a_as1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                        $.cartel_car_a_as1.setDrivingStyle(2);
                        $.blip_cartelcar_a = Blip.AddForCar($.cartel_car_a_as1);
                        $.cartel_car_a_as1.setStaysInCurrentLevel(false /* FALSE */);
                        //SET_CAR_WATERTIGHT cartel_car_a_as1 TRUE
                        $.flag_a_attack = 1;
                    }
                } else {
                    if (Car.IsDead($.cartel_car_a_as1)) {
                        $.blip_cartel_a_as1.remove();
                    }
                }
            }
            if (Car.IsDead($.cartel_car_a_as1) && $.flag_a_attack == 0) {
                Text.PrintNow('AS1_H', 3000, 1); //you failed to lead the Deathsquad into the Yakuza trap!!
                // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_as1_failed'); // fallback: would break linear control flow
            }

            if (!Car.IsDead($.cartel_car_a_as1)) {
                if ($.flag_bailout_a == 0 && $.flag_a_attack == 1) {
                    if (!$.cartel_car_a_as1.locate2D($.player_X, $.player_Y, 40.0, 40.0, false /* false */)) {
                        $.cartel_car_a_as1.setCruiseSpeed(30.0);
                        //CAR_WANDER_RANDOMLY cartel_car_a_as1
                        //SET_CAR_MISSION cartel_car_a_as1 MISSION_NONE
                        //CAR_GOTO_COORDINATES cartel_car_a_as1 player_x player_y player_z
                        //SET_CAR_DRIVING_STYLE cartel_car_a_as1 2
                    } else {
                        $.cartel_car_a_as1.setCruiseSpeed(60.0);
                        //SET_CAR_MISSION cartel_car_a_as1 MISSION_RAMPLAYER_FARAWAY
                        //SET_CAR_DRIVING_STYLE cartel_car_a_as1 2
                    }
                    if (!$.cartel_car_a_as1.isHealthGreater(250)) {
                        // SCM GOSUB bailout_a
                        await bailout_a();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }
                    if (!$.player.isInAnyCar() && $.flag_bailout_a == 0 && !Car.IsDead($.cartel_car_a_as1)) {
                        if ($.flag_wellybob == 0) {
                            const _res294 = $.player.getCoordinates();
                            $.player_X = _res294.x;
                            $.player_Y = _res294.y;
                            $.player_Z = _res294.z;
                            if ($.cartel_car_a_as1.locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, false /* false */)) {
                                // SCM GOSUB bailout_a
                                await bailout_a();
                                // fallback if label was not emitted as async function: no-op continues linearly
                            }
                        }
                    }
                    if (!Car.IsDead($.cartel_car_a_as1)) {
                        if ($.cartel_car_a_as1.locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, false /* false */) && $.flag_bailout_a == 0) {
                            $.cartel_car_a_as1.setOnlyDamagedByPlayer(false /* false */);
                            ++$.counter_asukas_revenge;
                            // SCM GOSUB bailout_a
                            await bailout_a();
                            // fallback if label was not emitted as async function: no-op continues linearly
                        }
                    }
                }
            }

            if ($.flag_bailout_a == 1) {
                if (!Char.IsDead($.cartel1_as1)) {
                    $.cartel1_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel2_as1)) {
                    $.cartel2_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel3_as1)) {
                    $.cartel3_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel4_as1)) {
                    if ($.cartel4_as1.locateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, false /* false */) && !Char.IsDead($.yakuza1_as1)) {
                        $.cartel4_as1.setObjKillCharAnyMeans($.yakuza1_as1);
                    } else {
                        $.cartel4_as1.setObjKillPlayerAnyMeans($.player);
                    }
                }
            }
        }

        //--------------------------------CARTEL DEATH SQUAD 2 GENERATOR-----------------------------------

        if ($.flag_cartel_b_created == 0) {
            if ($.player.isInZone('BIG_DAM')) {
                $.cartel_car_b_as1 = Car.Create(95 /* CAR_SENTINEL */, $.cartel_b_x, $.cartel_b_y, 74.2);
                $.cartel_car_b_as1.setUpsidedownNotDamaged(true /* true */);
                $.cartel_car_b_as1.setHeading(180.0);
                $.cartel5_as1 = Char.CreateInsideCar($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */);
                $.cartel6_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 0);
                $.cartel7_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */, 1);
                $.cartel8_as1 = Char.CreateAsPassenger($.cartel_car_b_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 2);
                $.cartel_car_b_as1.setIdle();
                $.flag_cartel_b_created = 1;
            }
        }

        //-----------------------------------CARTEL DEATH SQUAD 2 ATTACK----------------------------------

        if ($.flag_cartel_b_created == 1) {
            if ($.flag_b_attack == 0) {
                if ($.player.locateAnyMeans2D($.cartel_b_x, $.cartel_b_y, 40.0, 40.0, false /* false */)) {
                    if (!Car.IsDead($.cartel_car_b_as1)) {
                        $.cartel_car_b_as1.setStrong(true /* TRUE */);
                        $.cartel_car_b_as1.lockDoors(2 /* CARLOCK_LOCKED */);
                        $.cartel_car_b_as1.setOnlyDamagedByPlayer(true /* True */);
                        $.blip_cartel_b_as1.remove();
                        $.cartel_car_b_as1.setCruiseSpeed(50.0);
                        $.cartel_car_b_as1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                        $.cartel_car_b_as1.setDrivingStyle(2);
                        $.blip_cartelcar_b = Blip.AddForCar($.cartel_car_b_as1);
                        $.cartel_car_b_as1.setStaysInCurrentLevel(false /* FALSE */);
                        //SET_CAR_WATERTIGHT cartel_car_b_as1 TRUE
                        $.flag_b_attack = 1;
                    }
                } else {
                    if (Car.IsDead($.cartel_car_b_as1)) {
                        $.blip_cartel_b_as1.remove();
                    }
                }
            }
            if (Car.IsDead($.cartel_car_b_as1) && $.flag_b_attack == 0) {
                Text.PrintNow('AS1_H', 3000, 1); //you failed to lead the Deathsquad into the Yakuza trap!!
                // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_as1_failed'); // fallback: would break linear control flow
            }
            if (!Car.IsDead($.cartel_car_b_as1)) {
                if ($.flag_bailout_b == 0 && $.flag_b_attack == 1) {
                    if (!$.cartel_car_b_as1.locate2D($.player_X, $.player_Y, 40.0, 40.0, false /* false */)) {
                        $.cartel_car_b_as1.setCruiseSpeed(30.0);
                        //CAR_WANDER_RANDOMLY cartel_car_b_as1
                        //SET_CAR_MISSION cartel_car_b_as1 MISSION_NONE
                        //CAR_GOTO_COORDINATES cartel_car_b_as1 player_x player_y player_z
                        //SET_CAR_DRIVING_STYLE cartel_car_b_as1 2
                    } else {
                        $.cartel_car_b_as1.setCruiseSpeed(60.0);
                        //SET_CAR_MISSION cartel_car_b_as1 MISSION_RAMPLAYER_FARAWAY
                        //SET_CAR_DRIVING_STYLE cartel_car_b_as1 2
                    }
                    /*
          IF IS_CAR_IN_AREA_2D cartel_car_b_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
          CAR_GOTO_COORDINATES cartel_car_b_as1 killzone_cent_x killzone_cent_y 70.0
          ENDIF
          */
                    if (!$.cartel_car_b_as1.isHealthGreater(250)) {
                        // SCM GOSUB bailout_b
                        await bailout_b();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }

                    if (!$.player.isInAnyCar() && $.flag_bailout_b == 0 && !Car.IsDead($.cartel_car_b_as1)) {
                        if ($.flag_wellybob == 0) {
                            const _res295 = $.player.getCoordinates();
                            $.player_X = _res295.x;
                            $.player_Y = _res295.y;
                            $.player_Z = _res295.z;
                            if ($.cartel_car_b_as1.locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, false /* false */)) {
                                // SCM GOSUB bailout_b
                                await bailout_b();
                                // fallback if label was not emitted as async function: no-op continues linearly
                            }
                        }
                    }
                    if (!Car.IsDead($.cartel_car_b_as1)) {
                        if ($.cartel_car_b_as1.locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, false /* false */) && $.flag_bailout_b == 0) {
                            $.cartel_car_b_as1.setOnlyDamagedByPlayer(false /* false */);
                            ++$.counter_asukas_revenge;
                            // SCM GOSUB bailout_b
                            await bailout_b();
                            // fallback if label was not emitted as async function: no-op continues linearly
                        }
                    }
                }
            }

            if ($.flag_bailout_b == 1) {
                if (!Char.IsDead($.cartel5_as1)) {
                    $.cartel5_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel6_as1)) {
                    $.cartel6_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel7_as1)) {
                    $.cartel7_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel8_as1)) {
                    if ($.cartel8_as1.locateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, false /* false */) && !Char.IsDead($.yakuza4_as1)) {
                        $.cartel8_as1.setObjKillCharAnyMeans($.yakuza4_as1);
                    } else {
                        $.cartel8_as1.setObjKillPlayerAnyMeans($.player);
                    }
                }
            }
        }

        /*
    //--------------------------------CARTEL DEATH SQUAD 3 GENERATOR-----------------------------------



    IF flag_cartel_c_created = 0
    IF IS_PLAYER_IN_ZONE player AIRPORT
    CREATE_CAR CAR_SENTINEL cartel_c_x cartel_c_y 9.0 cartel_car_c_as1
    SET_UPSIDEDOWN_CAR_NOT_DAMAGED cartel_car_c_as1 true
    SET_CAR_HEADING cartel_car_c_as1 55.0
    CREATE_CHAR_INSIDE_CAR cartel_car_c_as1 PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_A cartel9_as1
    CREATE_CHAR_AS_PASSENGER cartel_car_c_as1 PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_B 0 cartel10_as1
    CREATE_CHAR_AS_PASSENGER cartel_car_c_as1 PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_A 1 cartel11_as1
    CREATE_CHAR_AS_PASSENGER cartel_car_c_as1 PEDTYPE_GANG_COLOMBIAN PED_GANG_COLOMBIAN_B 2 cartel12_as1
    CAR_SET_IDLE cartel_car_c_as1

    flag_cartel_c_created = 1
    ENDIF
    ENDIF


    //-----------------------------------CARTEL DEATH SQUAD 3 ATTACK----------------------------------


    IF flag_cartel_c_created = 1

    IF flag_c_attack = 0
    IF LOCATE_PLAYER_ANY_MEANS_2D player cartel_c_x cartel_c_y 30.0 30.0 false
    IF NOT IS_CAR_DEAD cartel_car_c_as1
    SET_CAR_STRONG cartel_car_c_as1 TRUE
    LOCK_CAR_DOORS cartel_car_c_as1 CARLOCK_LOCKED
    SET_CAR_ONLY_DAMAGED_BY_PLAYER cartel_car_c_as1 True
    REMOVE_BLIP blip_cartel_c_as1
    SET_CAR_CRUISE_SPEED cartel_car_c_as1 50.0
    SET_CAR_MISSION cartel_car_c_as1 MISSION_RAMPLAYER_FARAWAY
    SET_CAR_DRIVING_STYLE cartel_car_c_as1 2
    ADD_BLIP_FOR_CAR cartel_car_c_as1 blip_cartelcar_c
    SET_CAR_STAYS_IN_CURRENT_LEVEL cartel_car_c_as1 FALSE
    flag_c_attack = 1
    ENDIF
    ELSE
    IF IS_CAR_DEAD cartel_car_c_as1
    REMOVE_BLIP	blip_cartel_c_as1
    ENDIF
    ENDIF
    ENDIF


    IF NOT IS_CAR_DEAD cartel_car_c_as1
    IF flag_bailout_c = 0
    AND flag_c_attack = 1
    IF NOT LOCATE_CAR_2D cartel_car_c_as1 player_x player_y 40.0 40.0 false
    SET_CAR_CRUISE_SPEED cartel_car_c_as1 30.0
    //SET_CAR_MISSION cartel_car_c_as1 MISSION_NONE
    //CAR_GOTO_COORDINATES cartel_car_c_as1 player_x player_y player_z
    //SET_CAR_DRIVING_STYLE cartel_car_c_as1 2
    ELSE
    SET_CAR_CRUISE_SPEED cartel_car_c_as1 50.0
    //SET_CAR_MISSION cartel_car_c_as1 MISSION_RAMPLAYER_FARAWAY
    //SET_CAR_DRIVING_STYLE cartel_car_c_as1 2
    ENDIF

    IF NOT IS_CAR_HEALTH_GREATER cartel_car_c_as1 250
    GOSUB bailout_c
    ENDIF


    IF NOT IS_PLAYER_IN_ANY_CAR player
    AND flag_bailout_c = 0
    AND NOT IS_CAR_DEAD cartel_car_c_as1
    IF flag_wellybob = 0
    GET_PLAYER_COORDINATES player player_x player_y player_z
    IF LOCATE_CAR_3D cartel_car_c_as1 player_x player_y player_z 10.0 10.0 5.0 false
    GOSUB bailout_c
    ENDIF
    ENDIF
    ENDIF
    IF NOT IS_CAR_DEAD cartel_car_c_as1
    IF LOCATE_CAR_2D cartel_car_c_as1 killzone_cent_x killzone_cent_y 15.0 15.0 false
    AND flag_bailout_c = 0
    SET_CAR_ONLY_DAMAGED_BY_PLAYER cartel_car_c_as1 false
    ++ counter_asukas_revenge
    GOSUB bailout_c
    ENDIF
    ENDIF
    ENDIF
    ENDIF


    IF flag_bailout_c = 1
    IF NOT IS_CHAR_DEAD cartel9_as1
    SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS cartel9_as1 player
    ENDIF
    IF NOT IS_CHAR_DEAD cartel10_as1
    SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS cartel10_as1 player
    ENDIF
    IF NOT IS_CHAR_DEAD cartel11_as1
    SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS cartel11_as1 player
    ENDIF
    IF NOT IS_CHAR_DEAD cartel12_as1
    IF LOCATE_CHAR_ON_FOOT_2D cartel12_as1 killzone_cent_x killzone_cent_y 15.0 15.0 false
    AND NOT IS_CHAR_DEAD yakuza1_as1
    SET_CHAR_OBJ_KILL_CHAR_ANY_MEANS cartel12_as1 yakuza1_as1
    ELSE
    SET_CHAR_OBJ_KILL_PLAYER_ANY_MEANS cartel12_as1 player
    ENDIF
    ENDIF
    ENDIF


    ENDIF

    */
        //--------------------------------CARTEL DEATH SQUAD 4 GENERATOR-----------------------------------

        if ($.flag_cartel_d_created == 0) {
            if ($.player.locateAnyMeans3D($.cartel_d_x, $.cartel_d_y, 70.0, 70.0, 70.0, 20.0, false /* false */)) {
                $.cartel_car_d_as1 = Car.Create(95 /* CAR_SENTINEL */, $.cartel_d_x, $.cartel_d_y, 70.0);
                $.cartel_car_d_as1.setUpsidedownNotDamaged(true /* true */);
                $.cartel_car_d_as1.setHeading(180.0);
                $.cartel_car_d_as1.setIdle();
                $.cartel13_as1 = Char.CreateInsideCar($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */);
                $.cartel14_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 0);
                $.cartel15_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 20 /* PED_GANG_COLOMBIAN_A */, 1);
                $.cartel16_as1 = Char.CreateAsPassenger($.cartel_car_d_as1, 12 /* PEDTYPE_GANG_COLOMBIAN */, 21 /* PED_GANG_COLOMBIAN_B */, 2);
                $.cartel_car_d_as1.setIdle();
                $.flag_cartel_d_created = 1;
            }
        }

        //-----------------------------------CARTEL DEATH SQUAD 4 ATTACK----------------------------------

        if ($.flag_cartel_d_created == 1) {
            if ($.flag_d_attack == 0) {
                if ($.player.locateAnyMeans3D($.cartel_d_x, $.cartel_d_y, 70.0, 30.0, 30.0, 20.0, false /* false */)) {
                    if (!Car.IsDead($.cartel_car_d_as1)) {
                        $.cartel_car_d_as1.setStrong(true /* TRUE */);
                        $.cartel_car_d_as1.lockDoors(2 /* CARLOCK_LOCKED */);
                        $.cartel_car_d_as1.setOnlyDamagedByPlayer(true /* True */);
                        $.blip_cartel_d_as1.remove();
                        $.cartel_car_d_as1.setCruiseSpeed(50.0);
                        $.cartel_car_d_as1.setMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
                        $.cartel_car_d_as1.setDrivingStyle(2);
                        $.blip_cartelcar_d = Blip.AddForCar($.cartel_car_d_as1);
                        $.cartel_car_d_as1.setStaysInCurrentLevel(false /* FALSE */);
                        //SET_CAR_WATERTIGHT cartel_car_d_as1 TRUE
                        $.flag_d_attack = 1;
                    }
                } else {
                    if (Car.IsDead($.cartel_car_d_as1)) {
                        $.blip_cartel_d_as1.remove();
                    }
                }
            }
            if (Car.IsDead($.cartel_car_d_as1) && $.flag_d_attack == 0) {
                Text.PrintNow('AS1_H', 3000, 1); //you failed to lead the Deathsquad into the Yakuza trap!!
                // SCM GOTO → mission_as1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_as1_failed'); // fallback: would break linear control flow
            }
            if (!Car.IsDead($.cartel_car_d_as1)) {
                if ($.flag_bailout_d == 0 && $.flag_d_attack == 1) {
                    if (!$.cartel_car_d_as1.locate2D($.player_X, $.player_Y, 40.0, 40.0, false /* false */)) {
                        $.cartel_car_d_as1.setCruiseSpeed(30.0);
                        //CAR_WANDER_RANDOMLY cartel_car_d_as1
                        //SET_CAR_MISSION cartel_car_d_as1 MISSION_NONE
                        //CAR_GOTO_COORDINATES cartel_car_d_as1 player_x player_y player_z
                        //SET_CAR_DRIVING_STYLE cartel_car_d_as1 2
                    } else {
                        $.cartel_car_d_as1.setCruiseSpeed(60.0);
                        //SET_CAR_MISSION cartel_car_d_as1 MISSION_RAMPLAYER_FARAWAY
                        //SET_CAR_DRIVING_STYLE cartel_car_d_as1 2
                    }
                    /*
          IF IS_CAR_IN_AREA_2D cartel_car_d_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
          CAR_GOTO_COORDINATES cartel_car_d_as1 killzone_cent_x killzone_cent_y 70.0
          ENDIF
          */
                    if (!$.cartel_car_d_as1.isHealthGreater(250)) {
                        //OR IS_CAR_UPSIDEDOWN cartel_car_d_as1
                        // SCM GOSUB bailout_d
                        await bailout_d();
                        // fallback if label was not emitted as async function: no-op continues linearly
                    }

                    if (!$.player.isInAnyCar() && $.flag_bailout_d == 0 && !Car.IsDead($.cartel_car_d_as1)) {
                        if ($.flag_wellybob == 0) {
                            const _res296 = $.player.getCoordinates();
                            $.player_X = _res296.x;
                            $.player_Y = _res296.y;
                            $.player_Z = _res296.z;
                            if ($.cartel_car_d_as1.locate3D($.player_X, $.player_Y, $.player_Z, 10.0, 10.0, 5.0, false /* false */)) {
                                // SCM GOSUB bailout_d
                                await bailout_d();
                                // fallback if label was not emitted as async function: no-op continues linearly
                            }
                        }
                    }
                    if (!Car.IsDead($.cartel_car_d_as1)) {
                        if ($.cartel_car_d_as1.locate3D($.killzone_cent_x, $.killzone_cent_y, 70.0, 17.0, 30.0, 3.0, false /* false */) && $.flag_bailout_d == 0) {
                            $.cartel_car_d_as1.setOnlyDamagedByPlayer(false /* false */);
                            ++$.counter_asukas_revenge;
                            // SCM GOSUB bailout_d
                            await bailout_d();
                            // fallback if label was not emitted as async function: no-op continues linearly
                        }
                    }
                }
            }

            if ($.flag_bailout_d == 1) {
                if (!Char.IsDead($.cartel13_as1)) {
                    $.cartel13_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel14_as1)) {
                    $.cartel14_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel15_as1)) {
                    $.cartel15_as1.setObjKillPlayerAnyMeans($.player);
                }
                if (!Char.IsDead($.cartel16_as1)) {
                    if ($.cartel16_as1.locateOnFoot2D($.killzone_cent_x, $.killzone_cent_y, 15.0, 15.0, false /* false */) && !Char.IsDead($.yakuza4_as1)) {
                        $.cartel16_as1.setObjKillCharAnyMeans($.yakuza4_as1);
                    } else {
                        $.cartel16_as1.setObjKillPlayerAnyMeans($.player);
                    }
                }
            }
        }

        //----------------------------------------------YAK1 MISSIONS------------------------------------------------------

        /*
    IF flag_yakuza_created_as1 = 1
    IF NOT IS_CHAR_DEAD yakuza1_as1
    IF flag_cartel_a_created = 1
    IF NOT IS_CHAR_DEAD cartel3_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel3_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel3_as1
    yak1_mission = 1
    ENDIF
    ENDIF
    ENDIF

    IF flag_cartel_b_created = 1
    IF NOT IS_CHAR_DEAD cartel8_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel8_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel8_as1
    yak1_mission = 2
    ENDIF
    ENDIF
    ENDIF

    IF flag_cartel_c_created = 1
    IF NOT IS_CHAR_DEAD cartel9_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel9_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel9_as1
    yak1_mission = 3
    ENDIF
    ENDIF
    IF NOT IS_CHAR_DEAD cartel10_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel10_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel10_as1
    yak1_mission = 4
    ENDIF
    ENDIF
    IF NOT IS_CHAR_DEAD cartel11_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel11_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel11_as1
    yak1_mission = 5
    ENDIF
    ENDIF
    IF NOT IS_CHAR_DEAD cartel12_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel12_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel12_as1
    yak1_mission = 6
    ENDIF
    ENDIF
    ENDIF

    IF flag_cartel_d_created = 1
    IF NOT IS_CHAR_DEAD cartel16_as1
    AND yak1_mission = 0
    IF IS_CHAR_IN_AREA_2D cartel16_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_KILL_CHAR_ON_FOOT yakuza1_as1 cartel16_as1
    yak1_mission = 7
    ENDIF
    ENDIF
    ENDIF

    ENDIF
    ENDIF
    */
        //------------------------------------------YAK4 MISSIONS---------------------------------------------
        /*
    IF flag_yakuza_created_as1 = 1
    IF NOT IS_CHAR_DEAD yakuza4_as1
    IF flag_cartel_a_created = 1
    IF NOT IS_CAR_DEAD cartel_car_a_as1
    AND yak4_mission = 0
    IF IS_CAR_IN_AREA_2D cartel_car_a_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_DESTROY_CAR yakuza4_as1 cartel_car_a_as1
    yak4_mission = 1
    ENDIF
    ENDIF
    ENDIF
    IF flag_cartel_b_created = 1
    IF NOT IS_CAR_DEAD cartel_car_b_as1
    AND yak4_mission = 0
    IF IS_CAR_IN_AREA_2D cartel_car_b_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_DESTROY_CAR yakuza4_as1 cartel_car_b_as1
    yak4_mission = 2
    ENDIF
    ENDIF
    ENDIF

    IF flag_cartel_c_created = 1
    IF NOT IS_CAR_DEAD cartel_car_c_as1
    AND yak4_mission = 0
    IF IS_CAR_IN_AREA_2D cartel_car_c_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_DESTROY_CAR yakuza4_as1 cartel_car_c_as1
    yak4_mission = 3
    ENDIF
    ENDIF
    ENDIF

    IF flag_cartel_d_created = 1
    IF NOT IS_CAR_DEAD cartel_car_d_as1
    AND yak4_mission = 0
    IF IS_CAR_IN_AREA_2D cartel_car_d_as1 killzone_min_x killzone_min_y killzone_max_x killzone_max_y false
    SET_CHAR_OBJ_DESTROY_CAR yakuza4_as1 cartel_car_d_as1
    yak4_mission = 4
    ENDIF
    ENDIF
    ENDIF

    ENDIF
    ENDIF
    */
    }

    if ($.counter_asukas_revenge > 2) {
        // SCM GOTO → mission_as1_passed (not lowered; manual jump required)
        throw new Error('unresolved GOTO mission_as1_passed'); // fallback: would break linear control flow
    } else {
        Text.PrintNow('AS1_H', 3000, 1);
    }

    // Mission Asuka Sub1 failed
}

async function mission_as1_failed() {
    Text.PrintBig('M_FAIL', 2000, 1);

    if ($.player.hasBeenArrested()) {
        Restart.OverridePolice(2 /* LEVEL_COMMERCIAL */);
    }

    if ($.player.isDead()) {
        Restart.OverrideHospital(2 /* LEVEL_COMMERCIAL */);
    }

    return;

    // mission Asuka Sub1 passed
}

async function mission_as1_passed() {
    $.flag_asuka_suburban_mission1_passed = 1;
    Text.PrintWithNumberBig('M_PASS', 35000, 5000, 1); //"Mission Passed!"
    Audio.PlayMissionPassedTune(1);
    $.player.clearWantedLevel();
    $.player.addScore(35000);
    Stat.RegisterMissionPassed('AS1');
    Stat.PlayerMadeProgress(1);
    // START_NEW_SCRIPT asuka_suburban_mission2_loop
    return;

    // mission cleanup
}

async function mission_cleanup_as1() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_asuka_suburban_mission = 0;

    Hud.ClearCounter($.counter_cartels_killed_as1);

    // SCM GOSUB blip_removal
    await blip_removal();
    // fallback if label was not emitted as async function: no-op continues linearly

    $.blip_cartel_a_as1.remove();
    $.blip_cartel_b_as1.remove();
    //REMOVE_BLIP blip_cartel_c_as1

    $.blip_cartel_d_as1.remove();
    $.blip_killzone.remove();
    $.blip_cartelcar_a.remove();
    $.blip_cartelcar_b.remove();
    //REMOVE_BLIP blip_cartelcar_c

    $.blip_cartelcar_d.remove();

    $.cartel_car_a_as1.markAsNoLongerNeeded();
    $.cartel_car_b_as1.markAsNoLongerNeeded();
    //MARK_CAR_AS_NO_LONGER_NEEDED cartel_car_c_as1

    $.cartel_car_d_as1.markAsNoLongerNeeded();

    Streaming.MarkModelAsNoLongerNeeded(16 /* PED_GANG_YAKUZA_A */);
    Streaming.MarkModelAsNoLongerNeeded(17 /* PED_GANG_YAKUZA_B */);
    Streaming.MarkModelAsNoLongerNeeded(20 /* PED_GANG_COLOMBIAN_A */);
    Streaming.MarkModelAsNoLongerNeeded(21 /* PED_GANG_COLOMBIAN_B */);
    //MARK_MODEL_AS_NO_LONGER_NEEDED PED_FEMALE1
    //MARK_MODEL_AS_NO_LONGER_NEEDED PED_FEMALE2

    Streaming.MarkModelAsNoLongerNeeded(95 /* CAR_SENTINEL */);

    //SWITCH_ROADS_ON killzone_min_x killzone_min_y 65.0 -1170.0 killzone_max_y 85.0

    Mission.Finish();
    return;

    ///________________________________GOSUBS_______GOSUBS________________________________BYTHEWAY

    //-----------------------------------------CHECK FOR YAK DEATHS-------------------------------
}

async function yak_deaths() {
    if ($.flag_yakuza_created_as1 == 1) {
        if (Char.IsDead($.yakuza1_as1)) {
            if ($.flag_yak1_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak1_dead = 1;
            }
        }
        if (Char.IsDead($.yakuza2_as1)) {
            if ($.flag_yak2_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak2_dead = 1;
            }
        }
        if (Char.IsDead($.yakuza3_as1)) {
            if ($.flag_yak3_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak3_dead = 1;
            }
        }
        if (Char.IsDead($.yakuza4_as1)) {
            if ($.flag_yak4_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak4_dead = 1;
            }
        }
        if (Char.IsDead($.yakuza5_as1)) {
            if ($.flag_yak5_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak5_dead = 1;
            }
        }
        if (Char.IsDead($.yakuza6_as1)) {
            if ($.flag_yak6_dead == 0) {
                ++$.counter_yakuza_killed_as1;
                $.flag_yak6_dead = 1;
            }
        }
        $.yaks_a_killed_by_player = Player.GetNumOfModelsKilled(16 /* PED_GANG_YAKUZA_A */);
        $.yaks_b_killed_by_player = Player.GetNumOfModelsKilled(17 /* PED_GANG_YAKUZA_B */);
        $.yaks_killed_by_player = $.yaks_a_killed_by_player + $.yaks_b_killed_by_player;
        if ($.yaks_killed_by_player > 2) {
            if (!Char.IsDead($.yakuza1_as1)) {
                $.yakuza1_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!Char.IsDead($.yakuza2_as1)) {
                $.yakuza2_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!Char.IsDead($.yakuza3_as1)) {
                $.yakuza3_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!Char.IsDead($.yakuza4_as1)) {
                $.yakuza4_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!Char.IsDead($.yakuza5_as1)) {
                $.yakuza5_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
            if (!Char.IsDead($.yakuza6_as1)) {
                $.yakuza6_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            }
        }
    }
    return;

    //-----------------------------------------------------'BAILOUTS'----------------
}

async function bailout_a() {
    if ($.flag_bailout_a == 0) {
        //flag_cartelcar_a_dead = 1
        $.flag_bailout_a = 1;
        ++$.counter_bailouts;
        $.blip_cartelcar_a.remove();
        $.cartel_car_a_as1.lockDoors(1 /* CARLOCK_UNLOCKED */);
        if (!Char.IsDead($.cartel1_as1) && !Car.IsDead($.cartel_car_a_as1)) {
            $.cartel1_as1.setObjLeaveCar($.cartel_car_a_as1);
            while ($.cartel1_as1.isInCar($.cartel_car_a_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel1_as1)) {
                    // SCM GOTO → c_a_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_2'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_a_as1)) {
                    // SCM GOTO → c_a_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_2'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel1_as1
            $.cartel1_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel1_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel1 = Blip.AddForChar($.cartel1_as1);
        }
        // SCM label c_a_2
        if (!Char.IsDead($.cartel2_as1) && !Car.IsDead($.cartel_car_a_as1)) {
            $.cartel2_as1.setObjLeaveCar($.cartel_car_a_as1);
            while ($.cartel2_as1.isInCar($.cartel_car_a_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel2_as1)) {
                    // SCM GOTO → c_a_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_3'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_a_as1)) {
                    // SCM GOTO → c_a_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_3'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel2_as1
            $.cartel2_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel2_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel2 = Blip.AddForChar($.cartel2_as1);
        }
        // SCM label c_a_3
        if (!Char.IsDead($.cartel3_as1) && !Car.IsDead($.cartel_car_a_as1)) {
            $.cartel3_as1.setObjLeaveCar($.cartel_car_a_as1);
            while ($.cartel3_as1.isInCar($.cartel_car_a_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel3_as1)) {
                    // SCM GOTO → c_a_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_4'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_a_as1)) {
                    // SCM GOTO → c_a_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_4'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel3_as1
            $.cartel3_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel3_as1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
            $.blip_cartel3 = Blip.AddForChar($.cartel3_as1);
        }
        // SCM label c_a_4
        if (!Char.IsDead($.cartel4_as1) && !Car.IsDead($.cartel_car_a_as1)) {
            $.cartel4_as1.setObjLeaveCar($.cartel_car_a_as1);
            while ($.cartel4_as1.isInCar($.cartel_car_a_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel4_as1)) {
                    // SCM GOTO → c_a_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_5'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_a_as1)) {
                    // SCM GOTO → c_a_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_a_5'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel4_as1
            $.cartel4_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel4_as1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
            $.blip_cartel4 = Blip.AddForChar($.cartel4_as1);
        }
        // SCM label c_a_5
        //MARK_CAR_AS_NO_LONGER_NEEDED cartel_car_a_as1
    }
    return;
}

async function bailout_b() {
    if ($.flag_bailout_b == 0) {
        //flag_cartelcar_b_dead = 1
        $.flag_bailout_b = 1;
        ++$.counter_bailouts;
        $.blip_cartelcar_b.remove();
        $.cartel_car_b_as1.lockDoors(1 /* CARLOCK_UNLOCKED */);
        if (!Char.IsDead($.cartel5_as1) && !Car.IsDead($.cartel_car_b_as1)) {
            $.cartel5_as1.setObjLeaveCar($.cartel_car_b_as1);
            while ($.cartel5_as1.isInCar($.cartel_car_b_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel5_as1)) {
                    // SCM GOTO → c_b_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_2'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_b_as1)) {
                    // SCM GOTO → c_b_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_2'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel5_as1
            $.cartel5_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel5_as1.giveWeapon(3 /* WEAPONTYPE_UZI */, 90);
            $.blip_cartel5 = Blip.AddForChar($.cartel5_as1);
        }
        // SCM label c_b_2
        if (!Char.IsDead($.cartel6_as1) && !Car.IsDead($.cartel_car_b_as1)) {
            $.cartel6_as1.setObjLeaveCar($.cartel_car_b_as1);
            while ($.cartel6_as1.isInCar($.cartel_car_b_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel6_as1)) {
                    // SCM GOTO → c_b_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_3'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_b_as1)) {
                    // SCM GOTO → c_b_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_3'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel6_as1
            $.cartel6_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel6_as1.giveWeapon(3 /* WEAPONTYPE_UZI */, 90);
            $.blip_cartel6 = Blip.AddForChar($.cartel6_as1);
        }
        // SCM label c_b_3
        if (!Char.IsDead($.cartel7_as1) && !Car.IsDead($.cartel_car_b_as1)) {
            $.cartel7_as1.setObjLeaveCar($.cartel_car_b_as1);
            while ($.cartel7_as1.isInCar($.cartel_car_b_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel7_as1)) {
                    // SCM GOTO → c_b_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_4'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_b_as1)) {
                    // SCM GOTO → c_b_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_4'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel7_as1
            $.cartel7_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel7_as1.giveWeapon(3 /* WEAPONTYPE_UZI */, 90);
            $.blip_cartel7 = Blip.AddForChar($.cartel7_as1);
        }
        // SCM label c_b_4
        if (!Char.IsDead($.cartel8_as1) && !Car.IsDead($.cartel_car_b_as1)) {
            $.cartel8_as1.setObjLeaveCar($.cartel_car_b_as1);
            while ($.cartel8_as1.isInCar($.cartel_car_b_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel8_as1)) {
                    // SCM GOTO → c_b_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_5'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_b_as1)) {
                    // SCM GOTO → c_b_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_b_5'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel8_as1
            $.cartel8_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel8_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel8 = Blip.AddForChar($.cartel8_as1);
        }
        // SCM label c_b_5
        //MARK_CAR_AS_NO_LONGER_NEEDED cartel_car_b_as1
    }
    return;
    /*
  bailout_c:
  IF flag_bailout_c = 0
  REMOVE_BLIP blip_cartelcar_c
  LOCK_CAR_DOORS cartel_car_c_as1 CARLOCK_UNLOCKED
  IF NOT IS_CHAR_DEAD cartel9_as1
  AND NOT IS_CAR_DEAD	cartel_car_c_as1
  SET_CHAR_OBJ_LEAVE_CAR cartel9_as1 cartel_car_c_as1
  WHILE IS_CHAR_IN_CAR cartel9_as1 cartel_car_c_as1
  WAIT 0
  IF IS_CHAR_DEAD cartel9_as1
  GOTO c_c_2
  ENDIF
  IF IS_CAR_DEAD cartel_car_c_as1
  GOTO c_c_2
  ENDIF
  ENDWHILE
  SET_CHAR_THREAT_SEARCH cartel9_as1 THREAT_PLAYER1
  GIVE_WEAPON_TO_CHAR cartel9_as1 WEAPONTYPE_SHOTGUN 10
  ADD_BLIP_FOR_CHAR cartel9_as1 blip_cartel9
  ENDIF

  c_c_2:
  IF NOT IS_CHAR_DEAD cartel10_as1
  AND NOT IS_CAR_DEAD	cartel_car_c_as1
  SET_CHAR_OBJ_LEAVE_CAR cartel10_as1 cartel_car_c_as1
  WHILE IS_CHAR_IN_CAR cartel10_as1 cartel_car_c_as1
  WAIT 0
  IF IS_CHAR_DEAD cartel10_as1
  GOTO c_c_3
  ENDIF
  IF IS_CAR_DEAD cartel_car_c_as1
  GOTO c_c_3
  ENDIF
  ENDWHILE
  SET_CHAR_THREAT_SEARCH cartel10_as1 THREAT_PLAYER1
  GIVE_WEAPON_TO_CHAR cartel10_as1 WEAPONTYPE_M16 100
  ADD_BLIP_FOR_CHAR cartel10_as1 blip_cartel10
  ENDIF

  c_c_3:
  IF NOT IS_CHAR_DEAD cartel11_as1
  AND NOT IS_CAR_DEAD	cartel_car_c_as1
  SET_CHAR_OBJ_LEAVE_CAR cartel11_as1 cartel_car_c_as1
  WHILE IS_CHAR_IN_CAR cartel11_as1 cartel_car_c_as1
  WAIT 0
  IF IS_CHAR_DEAD cartel11_as1
  GOTO c_c_4
  ENDIF
  IF IS_CAR_DEAD cartel_car_c_as1
  GOTO c_c_4
  ENDIF
  ENDWHILE
  SET_CHAR_THREAT_SEARCH cartel11_as1 THREAT_PLAYER1
  GIVE_WEAPON_TO_CHAR cartel11_as1 WEAPONTYPE_M16 100
  ADD_BLIP_FOR_CHAR cartel11_as1 blip_cartel11
  ENDIF

  c_c_4:
  IF NOT IS_CHAR_DEAD cartel12_as1
  AND NOT IS_CAR_DEAD	cartel_car_c_as1
  SET_CHAR_OBJ_LEAVE_CAR cartel12_as1 cartel_car_c_as1
  WHILE IS_CHAR_IN_CAR cartel12_as1 cartel_car_c_as1
  WAIT 0
  IF IS_CHAR_DEAD cartel12_as1
  GOTO c_c_5
  ENDIF
  IF IS_CAR_DEAD cartel_car_c_as1
  GOTO c_c_5
  ENDIF
  ENDWHILE
  SET_CHAR_THREAT_SEARCH cartel12_as1 THREAT_PLAYER1
  GIVE_WEAPON_TO_CHAR cartel12_as1 WEAPONTYPE_SHOTGUN 15
  ADD_BLIP_FOR_CHAR cartel12_as1 blip_cartel12
  ENDIF

  c_c_5:
  flag_cartelcar_c_dead = 1
  flag_bailout_c = 1
  ++ counter_bailouts
  //MARK_CAR_AS_NO_LONGER_NEEDED cartel_car_c_as1
  ENDIF
  RETURN
  */
}

async function bailout_d() {
    if ($.flag_bailout_d == 0) {
        //flag_cartelcar_d_dead = 1
        $.flag_bailout_d = 1;
        ++$.counter_bailouts;
        $.blip_cartelcar_d.remove();
        $.cartel_car_d_as1.lockDoors(1 /* CARLOCK_UNLOCKED */);
        if (!Char.IsDead($.cartel13_as1) && !Car.IsDead($.cartel_car_d_as1)) {
            $.cartel13_as1.setObjLeaveCar($.cartel_car_d_as1);
            while ($.cartel13_as1.isInCar($.cartel_car_d_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel13_as1)) {
                    // SCM GOTO → c_d_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_2'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_d_as1)) {
                    // SCM GOTO → c_d_2 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_2'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel13_as1
            $.cartel13_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel13_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel13 = Blip.AddForChar($.cartel13_as1);
        }
        // SCM label c_d_2
        if (!Char.IsDead($.cartel14_as1) && !Car.IsDead($.cartel_car_d_as1)) {
            $.cartel14_as1.setObjLeaveCar($.cartel_car_d_as1);
            while ($.cartel14_as1.isInCar($.cartel_car_d_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel14_as1)) {
                    // SCM GOTO → c_d_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_3'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_d_as1)) {
                    // SCM GOTO → c_d_3 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_3'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel14_as1
            $.cartel14_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel14_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel14 = Blip.AddForChar($.cartel14_as1);
        }
        // SCM label c_d_3
        if (!Char.IsDead($.cartel15_as1) && !Car.IsDead($.cartel_car_d_as1)) {
            $.cartel15_as1.setObjLeaveCar($.cartel_car_d_as1);
            while ($.cartel15_as1.isInCar($.cartel_car_d_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel15_as1)) {
                    // SCM GOTO → c_d_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_4'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_d_as1)) {
                    // SCM GOTO → c_d_4 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_4'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel15_as1
            $.cartel15_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel15_as1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 15);
            $.blip_cartel15 = Blip.AddForChar($.cartel15_as1);
        }
        // SCM label c_d_4
        if (!Char.IsDead($.cartel16_as1) && !Car.IsDead($.cartel_car_d_as1)) {
            $.cartel16_as1.setObjLeaveCar($.cartel_car_d_as1);
            while ($.cartel16_as1.isInCar($.cartel_car_d_as1)) {
                await asyncWait(0);
                if (Char.IsDead($.cartel16_as1)) {
                    // SCM GOTO → c_d_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_5'); // fallback: would break linear control flow
                }
                if (Car.IsDead($.cartel_car_d_as1)) {
                    // SCM GOTO → c_d_5 (not lowered; manual jump required)
                    throw new Error('unresolved GOTO c_d_5'); // fallback: would break linear control flow
                }
            }
            //CLEAR_CHAR_THREAT_SEARCH cartel16_as1
            $.cartel16_as1.setThreatSearch(1 /* THREAT_PLAYER1 */);
            $.cartel16_as1.giveWeapon(6 /* WEAPONTYPE_M16 */, 100);
            $.blip_cartel16 = Blip.AddForChar($.cartel16_as1);
        }
        // SCM label c_d_5
        //MARK_CAR_AS_NO_LONGER_NEEDED cartel_car_d_as1
    }
    return;

    //-----------------------------------------------CARTEL DEATHS-----------------------------
}

async function cartel_deaths() {
    if ($.flag_cartel_a_created == 1) {
        if ($.cartel1_as1_dead == 0) {
            if (Char.IsDead($.cartel1_as1)) {
                if ($.cartel1_as1_dead == 0) {
                    $.cartel1_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel1.remove();
                }
            }
        }

        if ($.cartel2_as1_dead == 0) {
            if (Char.IsDead($.cartel2_as1)) {
                if ($.cartel2_as1_dead == 0) {
                    $.cartel2_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel2.remove();
                }
            }
        }

        if ($.cartel3_as1_dead == 0) {
            if (Char.IsDead($.cartel3_as1)) {
                if ($.cartel3_as1_dead == 0) {
                    $.cartel3_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel3.remove();
                    if ($.yak1_mission == 1) {
                        $.yak1_mission = 0;
                    }
                }
            }
        }

        if ($.cartel4_as1_dead == 0) {
            if (Char.IsDead($.cartel4_as1)) {
                if ($.cartel4_as1_dead == 0) {
                    $.cartel4_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel4.remove();
                }
            }
        }
        if ($.cartel4_as1_dead == 1) {
            if ($.cartel3_as1_dead == 1) {
                if ($.cartel2_as1_dead == 1) {
                    if ($.cartel1_as1_dead == 1) {
                        if ($.flag_bailout_a == 0) {
                            ++$.counter_bailouts;
                            $.flag_bailout_a = 1;
                        }
                    }
                }
            }
        }
    }

    if ($.flag_cartel_b_created == 1) {
        if ($.cartel5_as1_dead == 0) {
            if (Char.IsDead($.cartel5_as1)) {
                if ($.cartel5_as1_dead == 0) {
                    $.cartel5_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel5.remove();
                }
            }
        }

        if ($.cartel6_as1_dead == 0) {
            if (Char.IsDead($.cartel6_as1)) {
                if ($.cartel6_as1_dead == 0) {
                    $.cartel6_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel6.remove();
                }
            }
        }

        if ($.cartel7_as1_dead == 0) {
            if (Char.IsDead($.cartel7_as1)) {
                if ($.cartel7_as1_dead == 0) {
                    $.cartel7_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel7.remove();
                }
            }
        }

        if ($.cartel8_as1_dead == 0) {
            if (Char.IsDead($.cartel8_as1)) {
                if ($.cartel8_as1_dead == 0) {
                    $.cartel8_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel8.remove();
                    if ($.yak1_mission == 2) {
                        $.yak1_mission = 0;
                    }
                }
            }
        }
        if ($.cartel8_as1_dead == 1) {
            if ($.cartel7_as1_dead == 1) {
                if ($.cartel6_as1_dead == 1) {
                    if ($.cartel5_as1_dead == 1) {
                        if ($.flag_bailout_b == 0) {
                            ++$.counter_bailouts;
                            $.flag_bailout_b = 1;
                        }
                    }
                }
            }
        }
    }
    /*
  IF flag_cartel_c_created = 1
  IF cartel9_as1_dead = 0
  IF IS_CHAR_DEAD cartel9_as1
  IF cartel9_as1_dead = 0
  cartel9_as1_dead = 1
  ++ counter_cartels_killed_as1
  REMOVE_BLIP blip_cartel9
  IF yak1_mission = 3
  yak1_mission = 0
  ENDIF
  ENDIF
  ENDIF
  ENDIF


  IF cartel10_as1_dead = 0
  IF IS_CHAR_DEAD cartel10_as1
  IF cartel10_as1_dead = 0
  cartel10_as1_dead = 1
  ++ counter_cartels_killed_as1
  REMOVE_BLIP blip_cartel10
  IF yak1_mission = 4
  yak1_mission = 0
  ENDIF
  ENDIF
  ENDIF
  ENDIF


  IF cartel11_as1_dead = 0
  IF IS_CHAR_DEAD cartel11_as1
  IF cartel11_as1_dead = 0
  cartel11_as1_dead = 1
  ++ counter_cartels_killed_as1
  REMOVE_BLIP blip_cartel11
  IF yak1_mission = 5
  yak1_mission = 0
  ENDIF
  ENDIF
  ENDIF
  ENDIF


  IF cartel12_as1_dead = 0
  IF IS_CHAR_DEAD cartel12_as1
  IF cartel12_as1_dead = 0
  cartel12_as1_dead = 1
  ++ counter_cartels_killed_as1
  REMOVE_BLIP blip_cartel12
  IF yak1_mission = 6
  yak1_mission = 0
  ENDIF
  ENDIF
  ENDIF
  ENDIF



  IF cartel12_as1_dead = 1
  IF cartel11_as1_dead = 1
  IF cartel10_as1_dead = 1
  IF cartel9_as1_dead = 1
  flag_cartel_c_created = 2
  ENDIF
  ENDIF
  ENDIF
  ENDIF

  ENDIF
  */

    if ($.flag_cartel_d_created == 1) {
        if ($.cartel13_as1_dead == 0) {
            if (Char.IsDead($.cartel13_as1)) {
                if ($.cartel13_as1_dead == 0) {
                    $.cartel13_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel13.remove();
                }
            }
        }

        if ($.cartel14_as1_dead == 0) {
            if (Char.IsDead($.cartel14_as1)) {
                if ($.cartel14_as1_dead == 0) {
                    $.cartel14_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel14.remove();
                }
            }
        }

        if ($.cartel15_as1_dead == 0) {
            if (Char.IsDead($.cartel15_as1)) {
                if ($.cartel15_as1_dead == 0) {
                    $.cartel15_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel15.remove();
                }
            }
        }

        if ($.cartel16_as1_dead == 0) {
            if (Char.IsDead($.cartel16_as1)) {
                if ($.cartel16_as1_dead == 0) {
                    $.cartel16_as1_dead = 1;
                    ++$.counter_cartels_killed_as1;
                    $.blip_cartel16.remove();
                    if ($.yak1_mission == 7) {
                        $.yak1_mission = 0;
                    }
                }
            }
        }
        if ($.cartel16_as1_dead == 1) {
            if ($.cartel15_as1_dead == 1) {
                if ($.cartel14_as1_dead == 1) {
                    if ($.cartel13_as1_dead == 1) {
                        if ($.flag_bailout_d == 0) {
                            ++$.counter_bailouts;
                            $.flag_bailout_d = 1;
                        }
                    }
                }
            }
        }
    }

    return;

    //------------------------------------STUCK CAR ROUTINES-------------------------------------
}

async function cartel_car_a_stuck() {
    if (!Car.IsDead($.cartel_car_a_as1)) {
        if ($.cartel_car_a_as1.isUpsidedown() && $.cartel_car_a_as1.isStopped()) {
            if (!$.cartel_car_a_as1.isOnScreen()) {
                const _res297 = $.cartel_car_a_as1.getCoordinates();
                $.cartel_car_a_as1_x = _res297.x;
                $.cartel_car_a_as1_y = _res297.y;
                $.cartel_car_a_as1_z = _res297.z;
                const _res298 = Path.GetClosestCarNodeWithHeading($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
                $.cartel_car_a_as1_x = _res298.nodeX;
                $.cartel_car_a_as1_y = _res298.nodeY;
                $.cartel_car_a_as1_z = _res298.nodeZ;
                $.cartel_heading = _res298.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0)) {
                    $.cartel_car_a_as1.setCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
                    $.cartel_car_a_as1.setHeading($.cartel_heading);
                    $.cartel_car_a_as1.setOnPathToPlayer();
                }
            } else {
                // SCM GOSUB bailout_a
                await bailout_a();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }
        if ($.cartel_car_a_as1.isInWater()) {
            //PRINT_BIG (Y1_TEST) 2000 1//CAR IN WATER!! ---test stuff
            if (!$.cartel_car_a_as1.isOnScreen()) {
                const _res299 = $.cartel_car_a_as1.getCoordinates();
                $.cartel_car_a_as1_x = _res299.x;
                $.cartel_car_a_as1_y = _res299.y;
                $.cartel_car_a_as1_z = _res299.z;
                const _res300 = Path.GetClosestCarNodeWithHeading($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
                $.cartel_car_a_as1_x = _res300.nodeX;
                $.cartel_car_a_as1_y = _res300.nodeY;
                $.cartel_car_a_as1_z = _res300.nodeZ;
                $.cartel_heading = _res300.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0)) {
                    $.cartel_car_a_as1.setCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
                    $.cartel_car_a_as1.setHeading($.cartel_heading);
                    $.cartel_car_a_as1.setOnPathToPlayer();
                }
            } else {
                $.flag_bailout_a = 1;
                ++$.counter_bailouts;
                $.blip_cartelcar_a.remove();
                $.cartel_car_a_as1.setWatertight(false /* FALSE */);
                // SCM GOSUB cartel_deaths
                await cartel_deaths();
                // fallback if label was not emitted as async function: no-op continues linearly
                return;
            }
        }
        /*
    IF timer_reset_car_a = 1
    IF NOT IS_CAR_STOPPED cartel_car_a_as1
    timer_reset_car_a = 0
    ENDIF
    ENDIF

    IF IS_CAR_STOPPED cartel_car_a_as1
    IF timer_reset_car_a = 0
    GET_GAME_TIMER timer_start_car_a
    timer_reset_car_a = 1
    ENDIF

    IF timer_reset_car_a = 1
    GET_GAME_TIMER timer_current_car_a
    car_a_time_dif = timer_current_car_a - timer_start_car_a
    ENDIF

    IF car_a_time_dif > 4000
    IF NOT IS_CAR_ON_SCREEN cartel_car_a_as1
    GET_CAR_COORDINATES cartel_car_a_as1 cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z
    GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z cartel_heading
    IF NOT IS_POINT_ON_SCREEN cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z 3.0
    SET_CAR_COORDINATES cartel_car_a_as1 cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z
    SET_CAR_HEADING	cartel_car_a_as1 cartel_heading
    timer_reset_car_a = 0
    ENDIF
    ENDIF
    ENDIF
    ENDIF*/
    } else {
        $.blip_cartelcar_a.remove();
    }

    return;
}

async function cartel_car_b_stuck() {
    if (!Car.IsDead($.cartel_car_b_as1)) {
        if ($.cartel_car_b_as1.isUpsidedown() && $.cartel_car_b_as1.isStopped()) {
            if (!$.cartel_car_b_as1.isOnScreen()) {
                const _res301 = $.cartel_car_b_as1.getCoordinates();
                $.cartel_car_b_as1_x = _res301.x;
                $.cartel_car_b_as1_y = _res301.y;
                $.cartel_car_b_as1_z = _res301.z;
                const _res302 = Path.GetClosestCarNodeWithHeading($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
                $.cartel_car_b_as1_x = _res302.nodeX;
                $.cartel_car_b_as1_y = _res302.nodeY;
                $.cartel_car_b_as1_z = _res302.nodeZ;
                $.cartel_heading = _res302.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0)) {
                    $.cartel_car_b_as1.setCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
                    $.cartel_car_b_as1.setHeading($.cartel_heading);
                    $.cartel_car_b_as1.setOnPathToPlayer();
                }
            } else {
                // SCM GOSUB bailout_b
                await bailout_b();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }
        if ($.cartel_car_b_as1.isInWater()) {
            //PRINT_BIG (Y1_TEST) 2000 1//CAR IN WATER!!----test stuff
            if (!$.cartel_car_b_as1.isOnScreen()) {
                const _res303 = $.cartel_car_b_as1.getCoordinates();
                $.cartel_car_b_as1_x = _res303.x;
                $.cartel_car_b_as1_y = _res303.y;
                $.cartel_car_b_as1_z = _res303.z;
                const _res304 = Path.GetClosestCarNodeWithHeading($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
                $.cartel_car_b_as1_x = _res304.nodeX;
                $.cartel_car_b_as1_y = _res304.nodeY;
                $.cartel_car_b_as1_z = _res304.nodeZ;
                $.cartel_heading = _res304.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0)) {
                    $.cartel_car_b_as1.setCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
                    $.cartel_car_b_as1.setHeading($.cartel_heading);
                    $.cartel_car_b_as1.setOnPathToPlayer();
                }
            } else {
                $.flag_bailout_b = 1;
                $.cartel_car_b_as1.setWatertight(false /* FALSE */);
                ++$.counter_bailouts;
                $.blip_cartelcar_b.remove();
                // SCM GOSUB cartel_deaths
                await cartel_deaths();
                // fallback if label was not emitted as async function: no-op continues linearly
                return;
            }
        }
        /*
    IF timer_reset_car_b = 1
    IF NOT IS_CAR_STOPPED cartel_car_b_as1
    timer_reset_car_b = 0
    ENDIF
    ENDIF

    IF IS_CAR_STOPPED cartel_car_b_as1
    IF timer_reset_car_b = 0
    GET_GAME_TIMER timer_start_car_b
    timer_reset_car_b = 1
    ENDIF

    IF timer_reset_car_b = 1
    GET_GAME_TIMER timer_current_car_b
    car_b_time_dif = timer_current_car_b - timer_start_car_b
    ENDIF

    IF car_b_time_dif > 4000
    IF NOT IS_CAR_ON_SCREEN cartel_car_b_as1
    GET_CAR_COORDINATES cartel_car_b_as1 cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z
    GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z cartel_heading
    IF NOT IS_POINT_ON_SCREEN cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z 3.0
    SET_CAR_COORDINATES cartel_car_b_as1 cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z
    SET_CAR_HEADING cartel_car_b_as1 cartel_heading
    timer_reset_car_b = 0
    ENDIF
    ENDIF
    ENDIF
    ENDIF*/
    } else {
        $.blip_cartelcar_b.remove();
    }

    return;
    /*
  cartel_car_c_stuck:

  IF NOT IS_CAR_DEAD cartel_car_c_as1
  IF IS_CAR_UPSIDEDOWN cartel_car_c_as1
  AND IS_CAR_STOPPED cartel_car_c_as1
  IF NOT IS_CAR_ON_SCREEN cartel_car_c_as1
  GET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_heading
  IF NOT IS_POINT_ON_SCREEN cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z 3.0
  SET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  SET_CAR_HEADING	cartel_car_c_as1 cartel_heading
  ENDIF
  ELSE
  GOSUB bailout_c
  ENDIF
  ENDIF

  IF IS_CAR_IN_WATER cartel_car_c_as1
  //PRINT_BIG (Y1_TEST) 2000 1//CAR IN WATER!!----test stuff!!
  IF NOT IS_CAR_ON_SCREEN cartel_car_c_as1
  GET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_heading
  IF NOT IS_POINT_ON_SCREEN cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z 3.0
  SET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  SET_CAR_HEADING	cartel_car_c_as1 cartel_heading
  ENDIF
  ELSE
  flag_bailout_c = 1
  REMOVE_BLIP	blip_cartelcar_c
  GOSUB cartel_deaths
  RETURN
  ENDIF
  ENDIF

  IF timer_reset_car_c = 1
  IF NOT IS_CAR_STOPPED cartel_car_c_as1
  timer_reset_car_c = 0
  ENDIF
  ENDIF

  IF IS_CAR_STOPPED cartel_car_c_as1
  IF timer_reset_car_c = 0
  GET_GAME_TIMER timer_start_car_c
  timer_reset_car_c = 1
  ENDIF

  IF timer_reset_car_c = 1
  GET_GAME_TIMER timer_current_car_c
  car_c_time_dif = timer_current_car_c - timer_start_car_c
  ENDIF

  IF car_c_time_dif > 4000
  IF NOT IS_CAR_ON_SCREEN cartel_car_c_as1
  GET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z cartel_heading
  IF NOT IS_POINT_ON_SCREEN cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z 3.0
  SET_CAR_COORDINATES cartel_car_c_as1 cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z
  SET_CAR_HEADING	cartel_car_c_as1 cartel_heading
  timer_reset_car_c = 0
  ENDIF
  ENDIF
  ENDIF
  ENDIF
  ELSE
  REMOVE_BLIP	blip_cartelcar_c
  ENDIF

  RETURN
  */
}

async function cartel_car_d_stuck() {
    if (!Car.IsDead($.cartel_car_d_as1)) {
        if ($.cartel_car_d_as1.isUpsidedown() && $.cartel_car_d_as1.isStopped()) {
            if (!$.cartel_car_d_as1.isOnScreen()) {
                const _res305 = $.cartel_car_d_as1.getCoordinates();
                $.cartel_car_d_as1_x = _res305.x;
                $.cartel_car_d_as1_y = _res305.y;
                $.cartel_car_d_as1_z = _res305.z;
                const _res306 = Path.GetClosestCarNodeWithHeading($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
                $.cartel_car_d_as1_x = _res306.nodeX;
                $.cartel_car_d_as1_y = _res306.nodeY;
                $.cartel_car_d_as1_z = _res306.nodeZ;
                $.cartel_heading = _res306.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0)) {
                    $.cartel_car_d_as1.setCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
                    $.cartel_car_d_as1.setHeading($.cartel_heading);
                    $.cartel_car_d_as1.setOnPathToPlayer();
                }
            } else {
                // SCM GOSUB bailout_d
                await bailout_d();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        }
        if ($.cartel_car_d_as1.isInWater()) {
            //PRINT_BIG (Y1_TEST) 2000 1//CAR IN WATER!! ---etst stuff!!
            if (!$.cartel_car_d_as1.isOnScreen()) {
                const _res307 = $.cartel_car_d_as1.getCoordinates();
                $.cartel_car_d_as1_x = _res307.x;
                $.cartel_car_d_as1_y = _res307.y;
                $.cartel_car_d_as1_z = _res307.z;
                const _res308 = Path.GetClosestCarNodeWithHeading($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
                $.cartel_car_d_as1_x = _res308.nodeX;
                $.cartel_car_d_as1_y = _res308.nodeY;
                $.cartel_car_d_as1_z = _res308.nodeZ;
                $.cartel_heading = _res308.angle;
                if (!Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0)) {
                    $.cartel_car_d_as1.setCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
                    $.cartel_car_d_as1.setHeading($.cartel_heading);
                    $.cartel_car_d_as1.setOnPathToPlayer();
                }
            } else {
                $.flag_bailout_d = 1;
                $.cartel_car_d_as1.setWatertight(false /* FALSE */);
                ++$.counter_bailouts;
                $.blip_cartelcar_d.remove();
                // SCM GOSUB cartel_deaths
                await cartel_deaths();
                // fallback if label was not emitted as async function: no-op continues linearly
                return;
            }
        }
        /*
    IF timer_reset_car_d = 1
    IF NOT IS_CAR_STOPPED cartel_car_d_as1
    timer_reset_car_d = 0
    ENDIF
    ENDIF

    IF IS_CAR_STOPPED cartel_car_d_as1
    IF timer_reset_car_d = 0
    GET_GAME_TIMER timer_start_car_d
    timer_reset_car_d = 1
    ENDIF

    IF timer_reset_car_d = 1
    GET_GAME_TIMER timer_current_car_d
    car_d_time_dif = timer_current_car_d - timer_start_car_d
    ENDIF

    IF car_d_time_dif > 4000
    IF NOT IS_CAR_ON_SCREEN cartel_car_d_as1
    GET_CAR_COORDINATES cartel_car_d_as1 cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z
    GET_CLOSEST_CAR_NODE_WITH_HEADING cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z cartel_heading
    IF NOT IS_POINT_ON_SCREEN cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z 3.0
    SET_CAR_COORDINATES cartel_car_d_as1 cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z
    SET_CAR_HEADING	cartel_car_d_as1 cartel_heading
    timer_reset_car_d = 0
    ENDIF
    ENDIF
    ENDIF
    ENDIF*/
    } else {
        $.blip_cartelcar_d.remove();
    }

    return;
}

async function vegetables() {
    if ($.flag_cartel_a_created == 1) {
        if (!Car.IsDead($.cartel_car_a_as1)) {
            if ($.flag_bailout_a == 0 && $.flag_a_attack == 1) {
                // SCM GOSUB cartel_car_a_stuck
                await cartel_car_a_stuck();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        } else {
            $.blip_cartelcar_a.remove();
            //yak4_mission = 0
        }
    }

    if ($.flag_cartel_b_created == 1) {
        if (!Car.IsDead($.cartel_car_b_as1)) {
            if ($.flag_bailout_b == 0 && $.flag_b_attack == 1) {
                // SCM GOSUB cartel_car_b_stuck
                await cartel_car_b_stuck();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        } else {
            $.blip_cartelcar_b.remove();
            //yak4_mission = 0
        }
    }
    /*
  IF flag_cartel_c_created = 1
  IF NOT IS_CAR_DEAD cartel_car_c_as1
  IF flag_bailout_c = 0
  AND flag_c_attack = 1
  GOSUB cartel_car_c_stuck
  ENDIF
  ELSE
  REMOVE_BLIP	blip_cartelcar_c
  yak4_mission = 0
  ENDIF
  ENDIF
  */

    if ($.flag_cartel_d_created == 1) {
        if (!Car.IsDead($.cartel_car_d_as1)) {
            if ($.flag_bailout_d == 0 && $.flag_d_attack == 1) {
                // SCM GOSUB cartel_car_d_stuck
                await cartel_car_d_stuck();
                // fallback if label was not emitted as async function: no-op continues linearly
            }
        } else {
            $.blip_cartelcar_d.remove();
            //yak4_mission = 0
        }
    }

    return;

    //------------------------------------CLEAN-UP GOSUBS-----------------------------------------
}

async function blip_removal() {
    $.blip_cartel1.remove();
    $.blip_cartel2.remove();
    $.blip_cartel3.remove();
    $.blip_cartel4.remove();
    $.blip_cartel5.remove();
    $.blip_cartel6.remove();
    $.blip_cartel7.remove();
    $.blip_cartel8.remove();
    /*
  REMOVE_BLIP blip_cartel9
  REMOVE_BLIP blip_cartel10
  REMOVE_BLIP blip_cartel11
  REMOVE_BLIP blip_cartel12
  */

    $.blip_cartel13.remove();
    $.blip_cartel14.remove();
    $.blip_cartel15.remove();
    $.blip_cartel16.remove();

    if ($.flag_yak1_dead == 0) {
        $.yakuza1_as1.markAsNoLongerNeeded();
    }
    if ($.flag_yak2_dead == 0) {
        $.yakuza2_as1.markAsNoLongerNeeded();
    }
    if ($.flag_yak3_dead == 0) {
        $.yakuza3_as1.markAsNoLongerNeeded();
    }
    if ($.flag_yak4_dead == 0) {
        $.yakuza4_as1.markAsNoLongerNeeded();
    }
    if ($.flag_yak5_dead == 0) {
        $.yakuza5_as1.markAsNoLongerNeeded();
    }
    if ($.flag_yak6_dead == 0) {
        $.yakuza6_as1.markAsNoLongerNeeded();
    }

    return;

    // ***********extrat stuck car gosub*********************
}

async function unhappy_car_check() {
    $.timer_as3_now = Clock.GetGameTimer();
    //	timer_as3_dif = timer_as3_now - timer_as3_start

    if ($.timer_as3_now > $.particle_time) {
        $.particle_time = $.timer_as3_now + 6000;
        $.flag_particle = 1;
    }

    if ($.flag_particle == 1) {
        if (!Car.IsDead($.cartel_car_a_as1) && $.flag_a_attack == 1 && $.flag_bailout_a == 0) {
            $.car_a_x_old = $.car_a_as1_x;
            $.car_a_y_old = $.car_a_as1_y;
            $.car_a_z_old = $.car_a_as1_z;
            const _res309 = $.cartel_car_a_as1.getCoordinates();
            $.car_a_as1_x = _res309.x;
            $.car_a_as1_y = _res309.y;
            $.car_a_as1_z = _res309.z;
            if ($.cartel_car_a_as1.locate2D($.car_a_x_old, $.car_a_y_old, 3.0, 3.0, false /* false */)) {
                if (!$.cartel_car_a_as1.isOnScreen()) {
                    //GET_CAR_COORDINATES cartel_car_a_as1 cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z
                    const _res310 = Path.GetClosestCarNodeWithHeading($.car_a_as1_x, $.car_a_as1_y, $.car_a_as1_z);
                    $.cartel_car_a_as1_x = _res310.nodeX;
                    $.cartel_car_a_as1_y = _res310.nodeY;
                    $.cartel_car_a_as1_z = _res310.nodeZ;
                    $.cartel_heading = _res310.angle;
                    if (!Camera.IsPointOnScreen($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z, 3.0)) {
                        $.cartel_car_a_as1.setCoordinates($.cartel_car_a_as1_x, $.cartel_car_a_as1_y, $.cartel_car_a_as1_z);
                        $.cartel_car_a_as1.setHeading($.cartel_heading);
                        $.cartel_car_a_as1.setOnPathToPlayer();
                    }
                }
            }
        }
        if (!Car.IsDead($.cartel_car_b_as1) && $.flag_b_attack == 1 && $.flag_bailout_b == 0) {
            $.car_b_x_old = $.car_b_as1_x;
            $.car_b_y_old = $.car_b_as1_y;
            $.car_b_z_old = $.car_b_as1_z;
            const _res311 = $.cartel_car_b_as1.getCoordinates();
            $.car_b_as1_x = _res311.x;
            $.car_b_as1_y = _res311.y;
            $.car_b_as1_z = _res311.z;
            if ($.cartel_car_b_as1.locate2D($.car_b_x_old, $.car_b_y_old, 3.0, 3.0, false /* false */)) {
                if (!$.cartel_car_b_as1.isOnScreen()) {
                    //GET_CAR_COORDINATES cartel_car_b_as1 cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z
                    const _res312 = Path.GetClosestCarNodeWithHeading($.car_b_as1_x, $.car_b_as1_y, $.car_b_as1_z);
                    $.cartel_car_b_as1_x = _res312.nodeX;
                    $.cartel_car_b_as1_y = _res312.nodeY;
                    $.cartel_car_b_as1_z = _res312.nodeZ;
                    $.cartel_heading = _res312.angle;
                    if (!Camera.IsPointOnScreen($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z, 3.0)) {
                        $.cartel_car_b_as1.setCoordinates($.cartel_car_b_as1_x, $.cartel_car_b_as1_y, $.cartel_car_b_as1_z);
                        $.cartel_car_b_as1.setHeading($.cartel_heading);
                        $.cartel_car_b_as1.setOnPathToPlayer();
                    }
                }
            }
        }
        if (!Car.IsDead($.cartel_car_d_as1) && $.flag_d_attack == 1 && $.flag_bailout_d == 0) {
            $.car_d_x_old = $.car_d_as1_x;
            $.car_d_y_old = $.car_d_as1_y;
            $.car_d_z_old = $.car_d_as1_z;
            const _res313 = $.cartel_car_d_as1.getCoordinates();
            $.car_d_as1_x = _res313.x;
            $.car_d_as1_y = _res313.y;
            $.car_d_as1_z = _res313.z;
            if ($.cartel_car_d_as1.locate2D($.car_d_x_old, $.car_d_y_old, 3.0, 3.0, false /* false */)) {
                if (!$.cartel_car_d_as1.isOnScreen()) {
                    //GET_CAR_COORDINATES cartel_car_d_as1 cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z
                    const _res314 = Path.GetClosestCarNodeWithHeading($.car_d_as1_x, $.car_d_as1_y, $.car_d_as1_z);
                    $.cartel_car_d_as1_x = _res314.nodeX;
                    $.cartel_car_d_as1_y = _res314.nodeY;
                    $.cartel_car_d_as1_z = _res314.nodeZ;
                    $.cartel_heading = _res314.angle;
                    if (!Camera.IsPointOnScreen($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z, 3.0)) {
                        $.cartel_car_d_as1.setCoordinates($.cartel_car_d_as1_x, $.cartel_car_d_as1_y, $.cartel_car_d_as1_z);
                        $.cartel_car_d_as1.setHeading($.cartel_heading);
                        $.cartel_car_d_as1.setOnPathToPlayer();
                    }
                }
            }
        }
        $.flag_particle = 0;
    }

    return;
}

export async function asusb1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************
    // ***********************************ASUKA SUBURBAN MISSION 1******************************
    // *****************************************************************************************
    // ******************************************'BAIT'*****************************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_as1
    await mission_start_as1();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (HAS_DEATHARREST_BEEN_EXECUTED()) {
        // SCM GOSUB mission_as1_failed
        await mission_as1_failed();
        // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB mission_cleanup_as1
    await mission_cleanup_as1();
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT cartel_car_a_as1 cartel_car_b_as1 cartel_car_d_as1
    // VAR_INT cartel1_as1 cartel2_as1 cartel3_as1 cartel4_as1
    // VAR_INT cartel5_as1 cartel6_as1 cartel7_as1 cartel8_as1
    //VAR_INT cartel9_as1 cartel10_as1 cartel11_as1 cartel12_as1

    // VAR_INT cartel13_as1 cartel14_as1 cartel15_as1 cartel16_as1

    // VAR_INT blip_cartel1 blip_cartel2 blip_cartel3 blip_cartel4
    // VAR_INT blip_cartel5 blip_cartel6 blip_cartel7 blip_cartel8
    //VAR_INT blip_cartel9 blip_cartel10 blip_cartel11 blip_cartel12

    // VAR_INT blip_cartel13 blip_cartel14 blip_cartel15 blip_cartel16

    // VAR_INT blip_cartelcar_a blip_cartelcar_b blip_cartelcar_d

    // VAR_INT cartel1_as1_dead cartel2_as1_dead cartel3_as1_dead cartel4_as1_dead
    // VAR_INT cartel5_as1_dead cartel6_as1_dead cartel7_as1_dead cartel8_as1_dead
    //VAR_INT cartel9_as1_dead cartel10_as1_dead cartel11_as1_dead cartel12_as1_dead

    // VAR_INT cartel13_as1_dead cartel14_as1_dead cartel15_as1_dead cartel16_as1_dead

    // VAR_INT yakuza1_as1 yakuza2_as1 yakuza3_as1 yakuza4_as1
    // VAR_INT yakuza5_as1 yakuza6_as1 yakuza7_as1 yakuza8_as1

    // VAR_INT flag_yak1_dead flag_yak2_dead flag_yak3_dead flag_yak4_dead
    // VAR_INT flag_yak5_dead flag_yak6_dead

    // VAR_INT yak1_mission

    // VAR_INT flag_yakuza_created_as1
    // VAR_INT counter_yakuza_killed_as1
    // VAR_INT flag_wellybob

    // VAR_INT yaks_a_killed_by_player yaks_b_killed_by_player yaks_killed_by_player
    // VAR_INT flag_a_attack flag_b_attack flag_d_attack

    // VAR_INT blip_cartel_a_as1 blip_cartel_b_as1 blip_cartel_d_as1
    // VAR_INT blip_killzone

    // VAR_INT flag_cartel_a_created
    // VAR_INT flag_cartel_b_created
    //VAR_INT flag_cartel_c_created

    // VAR_INT flag_cartel_d_created
    // VAR_INT counter_cartels_killed_as1 counter_asukas_revenge counter_bailouts
    //VAR_INT flag_cartelcar_a_dead flag_cartelcar_b_dead flag_cartelcar_c_dead flag_cartelcar_d_dead

    //VAR_INT flag_blip_removed_a flag_blip_removed_b flag_blip_removed_c flag_blip_removed_d
    //VAR_INT flag_car_a_blip flag_car_b_blip flag_car_c_blip flag_car_d_blip

    // VAR_INT flag_bailout_a flag_bailout_b flag_bailout_d

    // VAR_FLOAT cartel_heading

    // VAR_FLOAT killzone_cent_x killzone_cent_y
    // VAR_FLOAT killzone_min_x killzone_min_y killzone_max_x killzone_max_y
    // VAR_FLOAT cartel_a_x cartel_a_y
    // VAR_FLOAT cartel_b_x cartel_b_y
    //VAR_FLOAT cartel_c_x cartel_c_y

    // VAR_FLOAT cartel_d_x cartel_d_y
    // VAR_FLOAT yak1_x yak1_y
    // VAR_FLOAT yak2_x yak2_y
    // VAR_FLOAT yak3_x yak3_y
    // VAR_FLOAT yak4_x yak4_y
    // VAR_FLOAT yak5_x yak5_y
    // VAR_FLOAT yak6_x yak6_y
    /*
  VAR_INT timer_reset_car_a timer_reset_car_b timer_reset_car_c timer_reset_car_d
  VAR_INT timer_start_car_a timer_start_car_b timer_start_car_c timer_start_car_d
  VAR_INT timer_current_car_a timer_current_car_b timer_current_car_c timer_current_car_d
  VAR_INT car_a_time_dif car_b_time_dif car_c_time_dif car_d_time_dif
  */

    // VAR_FLOAT car_a_x_old car_a_y_old car_a_z_old car_a_as1_x car_a_as1_y car_a_as1_z
    // VAR_FLOAT car_b_x_old car_b_y_old car_b_z_old car_b_as1_x car_b_as1_y car_b_as1_z
    //VAR_FLOAT car_c_x_old car_c_y_old car_c_z_old car_c_as1_x car_c_as1_y car_c_as1_z

    // VAR_FLOAT car_d_x_old car_d_y_old car_d_z_old car_d_as1_x car_d_as1_y car_d_as1_z

    // VAR_FLOAT cartel_car_a_as1_x cartel_car_a_as1_y cartel_car_a_as1_z
    // VAR_FLOAT cartel_car_b_as1_x cartel_car_b_as1_y cartel_car_b_as1_z
    //VAR_FLOAT cartel_car_c_as1_x cartel_car_c_as1_y cartel_car_c_as1_z

    // VAR_FLOAT cartel_car_d_as1_x cartel_car_d_as1_y cartel_car_d_as1_z

    //VAR_FLOAT player_x player_y player_z

    // ****************************************Mission Start************************************
}
