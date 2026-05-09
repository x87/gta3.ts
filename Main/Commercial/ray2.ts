// Generated from Main/Commercial/ray2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray2() {
  Stat.RegisterMissionGiven();
  // ScriptName
  //	PRINT_BIG ( RM2 ) 15000 2


  // *****************************************Set Flags************************************



  $.flag_player_on_mission = 1;


  $.flag_player_on_ray_mission = 1;


  $.flag_player_on_phil_mission = 1;


  $.rays_cutscene_flag = 1;


  await asyncWait(0);

  /*
  IF NOT rays_camera_1 = 0
  OR NOT rays_camera_2 = 0
  OR NOT rays_camera_3 = 0
  RESTORE_CAMERA_JUMPCUT
  rays_camera_1 = 0
  rays_camera_2 = 0
  rays_camera_3 = 0
  ENDIF
  */
  //set flags


  $.flag_m16_gone = 0;
  $.flag_uzi_gone = 0;
  $.flag_rocket_gone = 0;
  $.flag_shotgun_gone = 0;
  $.flag_molotov_gone = 0;


  $.flag_phil_in_area = 0;
  $.flag_phil_arrived = 0;
  $.flag_phil_dead = 0;


  $.flag_trucks = 0;


  $.flag_v1_dead = 0;
  $.flag_v2_dead = 0;
  $.flag_v3_dead = 0;
  $.flag_v4_dead = 0;
  $.flag_v5_dead = 0;
  $.flag_v6_dead = 0;
  $.flag_v7_dead = 0;
  $.flag_v8_dead = 0;
  $.flag_v9_dead = 0;
  $.flag_v10_dead = 0;
  $.flag_v11_dead = 0;
  $.flag_v12_dead = 0;
  $.counter_dead_varmints = 0;
  //condition_1 = 0


  $.flag_cartel_arrived = 0;
  //flag_camera = 0


  $.stallion_bailout = 0;
  $.sentinel_bailout = 0;
  $.perenial_bailout = 0;
  $.flag_stallion_arrived = 0;
  $.flag_sentinel_arrived = 0;
  $.flag_perenial_arrived = 0;


  $.flag_stallion_created = 0;
  $.flag_sentinel_created = 0;
  $.flag_perenial_created = 0;


  $.flag_launch_stallion = 0;
  //flag_launch_sentinel = 0

  $.flag_launch_perenial = 0;


  $.flag_sneaky_1 = 0;
  $.flag_sneaky_2 = 0;


  $.flag_audio = 0;
  $.flag_gate = 0;
  // *******************************************Set Coord*****************************************


  $.wh_x_rm2 = 137.15;
  $.wh_y_rm2 = 192.43;
  $.wh2_x_rm2 = 121.5;
  $.wh2_y_rm2 = 214.6;


  $.varmint_gen1_x = 174.0;
  $.varmint_gen1_y = 170.0;



  $.stage_3_x = 153.0;
  $.stage_3_y = 220.0;
  $.stage_1_x = 172.0;
  $.stage_1_y = 207.0;
  $.stage_2_x = 152.0;
  $.stage_2_y = 204.0;



  $.phils_defcon_x = 136.5;
  $.phils_defcon_y = 176.7;
  $.phils_defcon_z = 11.6;
  /*
  phils_defcon_minx = 119.0
  phils_defcon_miny = 168.0
  phils_defcon_maxx = 146.0
  phils_defcon_maxy = 198.0
  */

  $.m16_x = 145.5;
  $.m16_y = 170.0;
  $.uzi_x = 143.5;
  $.uzi_y = 170.0;
  $.shotgun_x = 141.5;
  $.shotgun_y = 170.0;
  $.rocket_x = 126.98;
  $.rocket_y = 198.24;
  $.rocket_z = 14.53;
  $.molotov_x = 126.98;
  $.molotov_y = 191.73;
  $.molotov_z = 14.53;


  // ****************************************START OF CUTSCENE********************************

  /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_ray2_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 250 FADE_OUT

  PRINT_BIG RM2 15000 2 //"Arms Shortage"

  SWITCH_STREAMING OFF
  */


  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.RequestModel(toilet);
  /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }

  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE


  Cutscene.Load(r2_ap);


  Streaming.Switch(true /* ON */);


  Cutscene.SetOffset(39.424, -726.677, 21.692);


  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);


  $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_ray.setAnim($.ray);


  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.setAnim($.player);


  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.setAnim($.ray);

  //CREATE_CUTSCENE_OBJECT cut_obj1 cs_ludoor
  //SET_CUTSCENE_ANIM cs_ludoor LUDOOR

  //SET_PLAYER_COORDINATES player 38.7 -725.7 22.0

  //SET_PLAYER_HEADING player 270.0



  World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */);


  $.player.setCoordinates(39.0, -723.5, 22.0);


  $.player.setHeading(90.0);


  Camera.DoFade(250, 1 /* FADE_IN */);


  Camera.SetNearClip(0.2);


  Cutscene.Start();
  Streaming.Switch(false /* OFF */);
  World.SwitchRubbish(false /* OFF */);

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 6426) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_A1, 10000, 1); //"Hey kid, over here!"


  while ($.cs_time < 8218) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_A, 10000, 1); //"An old army buddy of mine runs a business up in Rockford."


  while ($.cs_time < 11093) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_B, 10000, 1); //"We saw action in Nicaragua, back when this country knew what it was doing."


  while ($.cs_time < 14634) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_C, 10000, 1); //"Some Cartel scum roughed him up yesterday and said they'd be back for some of his stock today.


  while ($.cs_time < 20938) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_D, 10000, 1); //"He could do with some back-up and in return he'll give you knock-down rates on any hardware you buy."


  while ($.cs_time < 26599) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM2_D1, 10000, 1); //"I'd go myself but the old siatica's playing up again -cough cough- so, eerr, good luck."


  while ($.cs_time < 38333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1000, 0 /* FADE_OUT */);



  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }

  //DO_FADE 1000 FADE_IN


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Cutscene.Clear();


  Camera.DoFade(0, 0 /* FADE_OUT */);


  Camera.SetBehindPlayer();
  Camera.SetNearClip(0.9);


  await asyncWait(500);


  Camera.DoFade(1000, 1 /* FADE_IN */);

  //WHILE GET_FADING_STATUS
  // WAIT 0
  //ENDWHILE

  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE


  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(toilet);


  Streaming.Switch(true /* ON */);
  World.SwitchRubbish(true /* ON */);
  $.rays_cutscene_flag = 0;
  // ******************************************END OF CUTSCENE********************************

  // Mission stuff goes here


  $.blip_warehouse_rm2 = Blip.AddForCoord($.wh_x_rm2, $.wh_y_rm2, -100.0);

  //------------------REQUEST_MODELS ------------------------------


  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`))) {
    await asyncWait(0);
  }


  Streaming.LoadSpecialCharacter(1, dealer);
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(car`COLUMB`);
  while (!(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  /*
  REQUEST_MODEL CAR_STALLION
  WHILE NOT HAS_MODEL_LOADED CAR_STALLION
  WAIT 0
  ENDWHILE

  REQUEST_MODEL CAR_PERENNIAL
  WHILE NOT HAS_MODEL_LOADED CAR_PERENNIAL
  WAIT 0
  ENDWHILE
  */

  Streaming.RequestModel(car`BARRACKS`);
  while (!(Streaming.HasModelLoaded(car`BARRACKS`))) {
    await asyncWait(0);
  }


  Streaming.RequestModel(car`RHINO`);
  while (!(Streaming.HasModelLoaded(car`RHINO`))) {
    await asyncWait(0);
  }
  /*
  REQUEST_MODEL CAR_PATRIOT
  WHILE NOT HAS_MODEL_LOADED CAR_PATRIOT
  WAIT 0
  ENDWHILE
  */






  //------------------WAITING FOR PLAYER TO ARRIVE---------------------------------------


  while (!($.player.locateAnyMeans2D($.wh_x_rm2, $.wh_y_rm2, 4.0, 4.0, true /* true */))) {
    //AND NOT LOCATE_PLAYER_ANY_MEANS_2D player wh2_x_rm2 wh2_y_rm2 2.0 2.0 false
    await asyncWait(0);
    if ($.player.isInZone("HOSPI_2") && $.flag_trucks == 0) {

      //--------------------CREATE PHIL'S TRUCKS---------------------------------------------

      $.phil_truck_1 = Car.Create(115 /* CAR_RHINO */, 132.0, 173.9, 11.6);
      $.phil_truck_1.setHeading(0.0);
      $.phil_truck_1.setIdle();
      $.phil_truck_1.setProofs(true /* TRUE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
      $.phil_truck_1.lockDoors(2 /* CARLOCK_LOCKED */);
      $.phil_truck_2 = Car.Create(116 /* CAR_BARRACKS */, 133.56, 208.76, 11.93);
      $.phil_truck_2.setHeading(180.0);
      $.phil_truck_2.setIdle();
      $.phil_truck_2.setProofs(true /* TRUE */, false /* FALSE */, false /* FALSE */, false /* FALSE */, false /* FALSE */);
      $.phil_truck_2.lockDoors(2 /* CARLOCK_LOCKED */);
      /*
      $.flag_trucks = 1;
    }
    if ($.flag_gate == 0) {
      if ($.gate2_sfx1 == 0) {
        Sound.AddOneOffSound(147.249, 207.323, 10.599, 92 /* SOUND_GATE_START_CLUNK */);
        $.gate2_sfx1 = 1;
      }
      while (!($.phils_compnd_gate.slide(147.249, 214.823, 10.599, 0.0, 0.1, 0.0, false /* FALSE */))) {
        await asyncWait(0);
      }
      if ($.not_clunked_yet == 1) {
        $.gate_sfx2 = 0;
        $.not_clunked_yet = 0;
      }
      if ($.gate2_sfx2 == 0) {
        Sound.AddOneOffSound(147.249, 214.823, 10.599, 93 /* SOUND_GATE_STOP_CLUNK */);
        $.gate2_sfx2 = 1;
      }
      $.flag_gate = 1;
    }


  }

  //--------------------PLAYER ARRIVED (CUTSCENE)------------------------------------------
  //-----------------------CREATE PHIL-------------------


  World.ClearArea($.phils_defcon_x, $.phils_defcon_y, 11.5, 20.0, true /* true */);
  $.phil = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, $.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  $.phil.setHeading(360.0);
  $.phil.giveWeapon(6 /* WEAPONTYPE_M16 */, 200);
  $.phil.addArmor(100);
  $.phil.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.phil.clearThreatSearch();
  $.phil.setThreatSearch(12 /* THREAT_GANG_COLOMBIAN */);
  $.phil.setStayInSamePlace(true /* true */);
  //CHAR_SET_IDLE phil


  //-----------------------CREATE PHIL'S 'SUPPLIES'-------------------------------------


  $.phils_m16 = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 60, $.m16_x, $.m16_y, 11.5);
  $.phils_uzi = Pickup.Create(159 /* WEAPON_UZI */, 3 /* PICKUP_ONCE */, $.uzi_x, $.uzi_y, 11.5);
  $.phils_shotgun = Pickup.Create(157 /* WEAPON_SHOTGUN */, 3 /* PICKUP_ONCE */, $.shotgun_x, $.shotgun_y, 11.5);
  $.phils_rocket = Pickup.Create(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, $.rocket_x, $.rocket_y, $.rocket_z);
  $.phils_molotov = Pickup.Create(155 /* WEAPON_MOLOTOV */, 3 /* PICKUP_ONCE */, $.molotov_x, $.molotov_y, $.molotov_z);
  $.phils_armour = Pickup.Create(1364 /* bodyarmour */, 14 /* PICKUP_ON_STREET_SLOW */, 121.16, 194.92, 11.53);



  $.blip_warehouse_rm2.remove();


  $.player.setControl(false /* off */);
  $.player_rm2 = $.player.getChar();
  Camera.SetFixedPosition(141.5, 184.5, 12.5, 0.0, 0.0, 0.0);
  Hud.SwitchWidescreen(true /* on */);


  if ($.player.isInAnyCar()) {
    $.player_car_rm2 = $.player.storeCarIsIn();
    $.player.applyBrakesToCar(true /* on */);
    $.player_car_rm2.setIdle();
    Camera.PointAtCar($.player_car_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.player_rm2.setObjLeaveCar($.player_car_rm2);
    while ($.player_rm2.isInCar($.player_car_rm2)) {
      await asyncWait(0);
      if (Car.IsDead($.player_car_rm2)) {
        // SCM GOTO → bibble (not lowered; manual jump required)
        throw new Error("unresolved GOTO bibble"); // fallback: would break linear control flow
      }
    }
  }


  Camera.PointAtChar($.player_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);


}

async function bibble() {



  await asyncWait(0);


  $.phils_defcon_y = $.phils_defcon_y + 3.0;
  $.player_rm2.setObjRunToCoord($.phils_defcon_x, $.phils_defcon_y);



  while (!($.player.locateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, false /* false */))) {
    await asyncWait(0);
  }
  //SET_CHAR_OBJ_NO_OBJ player_rm2



  Audio.LoadMissionAudio(R2_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_E", 4000, 1); //"Ray phoned ahead....but I thought there'd be more of you.
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }



  Audio.LoadMissionAudio(R2_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_E1", 4000, 1); //"I can't believe the yellow bastard's left me without proper cover again!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }



  Audio.LoadMissionAudio(R2_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_F", 4000, 1); //"Well three arms are better than one, so grab whatever you need."
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }



  Audio.LoadMissionAudio(R2_D);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_F1", 4000, 1); //"Those Colombians will be here any minute."
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
      // SCM GOTO → peedle (not lowered; manual jump required)
      throw new Error("unresolved GOTO peedle"); // fallback: would break linear control flow
    }
  }


}

async function peedle() {
  Audio.ClearMissionAudio();


  Text.ClearPrints();
  $.player.setControl(true /* on */);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* off */);


  $.timer_start_rm2 = Clock.GetGameTimer();
  $.timer_now_rm2 = Clock.GetGameTimer();
  $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;

  //-------GIVE PLAYER TIME TO GET PICKUPS WITHOUT LEAVING COMPOUND-------

  World.ClearArea($.varmint_gen1_x, $.varmint_gen1_y, 11.5, 20.0, true /* true */);
  World.ClearArea($.stage_3_x, $.stage_3_y, 11.5, 20.0, true /* true */);
  World.ClearArea($.stage_1_x, $.stage_1_y, 11.5, 20.0, true /* true */);
  World.ClearArea($.stage_2_x, $.stage_2_y, 11.5, 20.0, true /* true */);

  /*IF NOT IS_CAR_DEAD phil_truck_3
  LOCK_CAR_DOORS phil_truck_3 CARLOCK_UNLOCKED
  ENDIF*/

  if (!(Car.IsDead($.phil_truck_2))) {
    $.phil_truck_2.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }


  while ($.timer_dif_rm2 < 25000 && $.player.isInArea2D(119.0, 167.0, 147.0, 246.0, false /* false */)) {
    await asyncWait(0);
    // SCM GOSUB pickups
    await pickups();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.player.isInArea2D(147.0, 198.0, 156.0, 208.0, false /* false */)) {
      // SCM GOTO → herring (not lowered; manual jump required)
      throw new Error("unresolved GOTO herring"); // fallback: would break linear control flow
    }
    if ($.player.isInAnyCar()) {
      // SCM GOTO → herring (not lowered; manual jump required)
      throw new Error("unresolved GOTO herring"); // fallback: would break linear control flow
    }
    $.timer_now_rm2 = Clock.GetGameTimer();
    $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;
    if (Char.IsDead($.phil)) {
      $.flag_phil_dead = 1;
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }


  }


}

async function herring() {
  //----LOAD PHIL'S SOUND BITE-----------------------------------------


  Audio.LoadMissionAudio(R2_E);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }

  //-----------------MAIN LOOP-----------------------------------------


  $.timer_start_rm2 = Clock.GetGameTimer();


  while ($.counter_dead_varmints < 12) {
    await asyncWait(0);
    $.timer_now_rm2 = Clock.GetGameTimer();
    $.timer_dif_rm2 = $.timer_now_rm2 - $.timer_start_rm2;
    // SCM GOSUB pickups
    await pickups();
    // fallback if label was not emitted as async function: no-op continues linearly


    //--------sentinel gen stuff--------------------------------------------

    if ($.timer_dif_rm2 > 2000 && $.flag_sentinel_created == 0) {
      $.sentinel1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.sentinel1_rm2.setOnlyDamagedByPlayer(true /* TRUE */);
      $.sentinel1_rm2.lockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_sentinel1 = Blip.AddForCar($.sentinel1_rm2);
      $.varmint_1 = Char.CreateInsideCar($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
      $.varmint_2 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.varmint_3 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1);
      $.varmint_4 = Char.CreateAsPassenger($.sentinel1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
      $.sentinel1_rm2.setCruiseSpeed(10.0);
      $.sentinel1_rm2.setDrivingStyle(3);
      $.sentinel1_rm2.gotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_sentinel_created = 1;
    }
    if ($.flag_launch_stallion == 0 && $.flag_sentinel_created == 1) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        if ($.sentinel1_rm2.locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, false /* false */)) {
          $.sentinel1_rm2.gotoCoordinatesAccurate($.stage_2_x, $.stage_2_y, 11.6);
          $.flag_launch_stallion = 1;
        }
      }
    }
    if ($.flag_launch_stallion == 1 && $.flag_sentinel_created == 1) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        if ($.sentinel1_rm2.locate2D($.stage_2_x, $.stage_2_y, 4.0, 4.0, false /* false */)) {
          $.flag_launch_stallion = 2;
          $.flag_sentinel_arrived = 1;
          $.sentinel1_rm2.setOnlyDamagedByPlayer(false /* FALSE */);
          $.sentinel1_rm2.lockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_sentinel_created == 1) {
      if (Car.IsDead($.sentinel1_rm2)) {
        $.flag_launch_stallion = 1;
        $.blip_sentinel1.remove();
      }
      else {
        if (!($.sentinel1_rm2.isHealthGreater(950))) {
          $.flag_sentinel_arrived = 1;
          if ($.flag_launch_stallion == 0) {
            $.flag_launch_stallion = 1;
          }
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }

    //-----stallion gen stuff------------------------------------------------

    if ($.timer_dif_rm2 > 4000 && $.flag_stallion_created == 0 && $.flag_launch_stallion > 0) {
      $.stallion1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.stallion1_rm2.setOnlyDamagedByPlayer(true /* TRUE */);
      $.stallion1_rm2.lockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_stallion1 = Blip.AddForCar($.stallion1_rm2);
      $.varmint_5 = Char.CreateInsideCar($.stallion1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
      $.varmint_6 = Char.CreateAsPassenger($.stallion1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.stallion1_rm2.setCruiseSpeed(10.0);
      $.stallion1_rm2.setDrivingStyle(3);
      $.stallion1_rm2.gotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_stallion_created = 1;
    }
    if ($.flag_launch_perenial == 0 && $.flag_stallion_created == 1) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        if ($.stallion1_rm2.locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, false /* false */)) {
          $.stallion1_rm2.gotoCoordinatesAccurate($.stage_3_x, $.stage_3_y, 11.6);
          $.flag_launch_perenial = 1;
        }
      }
    }
    if ($.flag_launch_perenial == 1 && $.flag_stallion_created == 1) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        if ($.stallion1_rm2.locate2D($.stage_3_x, $.stage_3_y, 4.0, 4.0, false /* false */)) {
          $.flag_launch_perenial = 2;
          $.flag_stallion_arrived = 1;
          $.stallion1_rm2.setOnlyDamagedByPlayer(false /* FALSE */);
          $.stallion1_rm2.lockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_stallion_created == 1) {
      if (Car.IsDead($.stallion1_rm2)) {
        $.flag_launch_perenial = 1;
        $.blip_stallion1.remove();
      }
      else {
        if (!($.stallion1_rm2.isHealthGreater(950))) {
          $.flag_stallion_arrived = 1;
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }

    //-----perenial gen stuff-----------------------------------------------

    if ($.timer_dif_rm2 > 6000 && $.flag_perenial_created == 0 && $.flag_launch_perenial > 0) {
      $.perenial1_rm2 = Car.Create(131 /* CAR_COLUMB */, $.varmint_gen1_x, $.varmint_gen1_y, -100.0);
      $.perenial1_rm2.setOnlyDamagedByPlayer(true /* TRUE */);
      $.perenial1_rm2.lockDoors(2 /* CARLOCK_LOCKED */);
      $.blip_perenial1 = Blip.AddForCar($.perenial1_rm2);
      $.varmint_7 = Char.CreateInsideCar($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
      $.varmint_8 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 0);
      $.varmint_9 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, 1);
      $.varmint_10 = Char.CreateAsPassenger($.perenial1_rm2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
      $.perenial1_rm2.setCruiseSpeed(10.0);
      $.perenial1_rm2.setDrivingStyle(3);
      $.perenial1_rm2.gotoCoordinatesAccurate($.stage_1_x, $.stage_1_y, 11.6);
      $.flag_perenial_created = 1;
    }


    if ($.flag_perenial_created == 1) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        if ($.perenial1_rm2.locate2D($.stage_1_x, $.stage_1_y, 4.0, 4.0, false /* false */)) {
          $.flag_perenial_arrived = 1;
          $.perenial1_rm2.setOnlyDamagedByPlayer(false /* FALSE */);
          $.perenial1_rm2.lockDoors(1 /* CARLOCK_UNLOCKED */);
          if ($.flag_cartel_arrived < 2) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }
    if ($.flag_perenial_created == 1) {
      if (Car.IsDead($.perenial1_rm2)) {
        $.blip_perenial1.remove();
      }
      else {
        if (!($.perenial1_rm2.isHealthGreater(950))) {
          $.flag_perenial_arrived = 1;
          if ($.flag_cartel_arrived == 0) {
            $.flag_cartel_arrived = 1;
          }
        }
      }
    }

    //----------------Sneaky backstab----------------------------------------

    if ($.flag_cartel_arrived > 0 && $.timer_dif_rm2 > 12000) {
      if ($.flag_sneaky_1 == 0) {
        if (!(Camera.IsPointOnScreen(121.3, 217.7, 11.5, 2.5))) {
          $.varmint_11 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 121.3, 235.7, 11.5);
          $.varmint_11.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 80);
          $.varmint_11.addArmor(100);
          $.blip_v11 = Blip.AddForCharOld($.varmint_11, 1, 2 /* BLIP_ONLY */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_11 player
          $.varmint_11.setObjRunToCoord($.phils_defcon_x, $.phils_defcon_y);
          $.varmint_11.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_11.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_11.setHeedThreats(true /* true */);
          $.flag_sneaky_1 = 1;
        }
      }
      if ($.flag_sneaky_2 == 0) {
        if (!(Camera.IsPointOnScreen(121.3, 241.6, 11.5, 2.5))) {
          $.varmint_12 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 121.3, 241.6, 11.5);
          $.varmint_12.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_12.addArmor(100);
          $.blip_v12 = Blip.AddForCharOld($.varmint_12, 1, 2 /* BLIP_ONLY */);
          $.varmint_12.setObjRunToCoord(124.15, 184.7);
          $.varmint_12.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_12.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_12.setHeedThreats(true /* true */);
          /*IF NOT IS_CHAR_DEAD phil
          $.flag_sneaky_2 = 1;
        }
      }
    }
    if (Char.IsDead($.phil)) {
      $.flag_phil_dead = 1;
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }
    if ($.flag_cartel_arrived == 1) {
      Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
      Audio.PlayMissionAudio();
      Text.PrintNow("RM2_K", 4000, 1); //"SHIT They're here! LOCK'N'LOAD!!"
      $.flag_cartel_arrived = 2;
    }
    // SCM GOSUB varmint_deaths
    await varmint_deaths();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB big_bailout_routine
    await big_bailout_routine();
    // fallback if label was not emitted as async function: no-op continues linearly


  }

  //-------All Cartel Varmints dead-----------------------------------------------

  if (!(Char.IsDead($.phil))) {
    $.phil.setHealth(5);
  }


  if (!(Char.IsDead($.phil))) {
    $.phil.setStayInSamePlace(true /* true */);
    [$.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z] = $.phil.getCoordinates();
    if (!($.player.locateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, false /* false */))) {
      Text.PrintNow("RM2_G", 2500, 1); //"Go check on Phil!"
      $.blip_phil = Blip.AddForChar($.phil);
      while (!($.player.locateAnyMeans2D($.phils_defcon_x, $.phils_defcon_y, 2.0, 2.0, false /* false */))) {
        await asyncWait(0);
        if (Char.IsDead($.phil)) {
          $.flag_phil_dead = 1;
          $.blip_phil.remove();
          // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
        }
      }
    }
  }


  if (Char.IsDead($.phil)) {
    $.flag_phil_dead = 1;
    $.blip_phil.remove();
    // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
  }
  else {
    $.phil.setHealth(100);
  }


  $.blip_phil.remove();


  $.player.setControl(false /* off */);
  Hud.SwitchWidescreen(true /* on */);
  Camera.SetFixedPosition(134.6, 184.7, 11.16, 0.0, 0.0, 0.0);


  if ($.player.isInAnyCar()) {
    $.player_car_rm2 = $.player.storeCarIsIn();
    $.player.applyBrakesToCar(true /* on */);
    $.player_car_rm2.setIdle();
    Camera.PointAtCar($.player_car_rm2, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.player_rm2.setObjLeaveCar($.player_car_rm2);
    while ($.player_rm2.isInCar($.player_car_rm2)) {
      await asyncWait(0);
      if (Car.IsDead($.player_car_rm2)) {
        // SCM GOTO → boobble (not lowered; manual jump required)
        throw new Error("unresolved GOTO boobble"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.phil)) {
        $.flag_phil_dead = 1;
        $.blip_phil.remove();
        // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
      }
    }
  }


}

async function boobble() {

  //GET_PLAYER_COORDINATES player player_rm2_x player_rm2_y player_rm2_z

  $.player_rm2 = $.player.getChar();


  if (!(Char.IsDead($.phil))) {
    $.phil.turnToFaceChar($.player_rm2);
    Camera.PointAtChar($.phil, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }

  //TURN_CHAR_TO_FACE_CHAR player_rm2 phil
  //TURN_CHAR_TO_FACE_CHAR phil player_rm2
  //CHAR_LOOK_AT_CHAR_ALWAYS player_rm2 phil


  Audio.LoadMissionAudio(R2_F);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_L", 3000, 1); // Heh-hey! If I'd teamed up with you in Nicaragua maybe I'd still have my arm!
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }


  if ($.flag_m16_gone == 0) {
    $.phils_m16.remove();
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.remove();
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.remove();
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.remove();
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.remove();
  }


  if ($.flag_ray_mission2_passed == 0) {
    $.phils_armour.remove();
  }


  $.m16_x = 145.5;
  $.m16_y = 170.0;
  $.uzi_x = 143.5;
  $.uzi_y = 170.0;
  $.shotgun_x = 141.5;
  $.shotgun_y = 170.0;
  $.phils_m16 = Pickup.Create(161 /* WEAPON_M16 */, 1 /* PICKUP_IN_SHOP */, $.m16_x, $.m16_y, 11.5);
  $.phils_uzi = Pickup.Create(157 /* WEAPON_SHOTGUN */, 1 /* PICKUP_IN_SHOP */, $.uzi_x, $.uzi_y, 11.5);
  $.phils_shotgun = Pickup.Create(156 /* WEAPON_ROCKET */, 1 /* PICKUP_IN_SHOP */, $.shotgun_x, $.shotgun_y, 11.5);
  $.flag_m16_gone = 1;
  $.flag_uzi_gone = 1;
  $.flag_shotgun_gone = 1;


  Audio.LoadMissionAudio(R2_G);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_M", 3000, 1); // If you need any firepower just drop by and take what you need from the rack
  Camera.SetFixedPosition(143.5, 179.0, 11.5, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(144.0, 170.7, 11.5, 2 /* JUMP_CUT */);
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }




  Audio.LoadMissionAudio(R2_H);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.SetMissionAudioPosition($.phils_defcon_x, $.phils_defcon_y, $.phils_defcon_z);
  Audio.PlayMissionAudio();
  Text.PrintNow("RM2_N", 3000, 1); //-leave the cash under the bench. Now get out of here, I'll handle the cops
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }


  Camera.PointAtPlayer($.player, 15 /* FIXED */, 1 /* INTERPOLATION */);
  await asyncWait(2000);

  //ALTER_WANTED_LEVEL_NO_DROP player 3


  if (!(Char.IsDead($.phil))) {
    $.phil.setObjNoObj();
    $.phil.setObjGotoCoordOnFoot(144.0, 174.4);
  }


  while ($.flag_phil_arrived == 0) {
    await asyncWait(0);
    if (!(Char.IsDead($.phil))) {
      if ($.phil.locateOnFoot2D(144.0, 174.4, 1.0, 1.0, false /* false */)) {
        $.flag_phil_arrived = 1;
      }
    }
    else {
      // SCM GOTO → mission_ray2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray2_failed"); // fallback: would break linear control flow
    }
  }


  $.phil.delete();
  Hud.SwitchWidescreen(false /* off */);
  Camera.RestoreJumpcut();
  $.player.setControl(true /* on */);


  // SCM GOTO → mission_ray2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray2_passed"); // fallback: would break linear control flow




  // Mission Ray2 failed


}

async function mission_ray2_failed() {


  if ($.flag_phil_dead == 1) {
    Text.PrintNow("RM2_H", 3000, 1); //Phil has been killed!!
  }


  Text.PrintBig("M_FAIL", 2000, 1);


  return;



  // mission Ray2 passed


}

async function mission_ray2_passed() {


  if ($.flag_m16_gone == 0) {
    $.phils_m16.remove();
    $.flag_m16_gone = 1;
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.remove();
    $.flag_shotgun_gone = 1;
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.remove();
    $.flag_uzi_gone = 1;
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.remove();
    $.flag_molotov_gone = 1;
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.remove();
    $.flag_rocket_gone = 1;
  }



  $.flag_ray_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1); //"Mission Passed!"
  Audio.PlayMissionPassedTune(1);
  $.player.clearWantedLevel();
  $.player.addScore(10000);
  Stat.RegisterMissionPassed(RM2);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT ray_mission3_loop
  return;



  // mission cleanup


}

async function mission_cleanup_ray2() {


  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  $.flag_player_on_phil_mission = 0;


  $.player.setControl(true /* on */);
  Hud.SwitchWidescreen(false /* off */);
  Camera.RestoreJumpcut();



  Streaming.MarkModelAsNoLongerNeeded(ped`SPECIAL1`);
  Streaming.MarkModelAsNoLongerNeeded(car`RHINO`);
  Streaming.MarkModelAsNoLongerNeeded(car`PATRIOT`);


  Streaming.MarkModelAsNoLongerNeeded(car`BARRACKS`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CAR_PERENNIAL

  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);


  Streaming.UnloadSpecialCharacter(1);


  $.blip_warehouse_rm2.remove();
  $.blip_sentinel1.remove();
  $.blip_stallion1.remove();
  $.blip_perenial1.remove();


  // SCM GOSUB blip_removal_rm2
  await blip_removal_rm2();
  // fallback if label was not emitted as async function: no-op continues linearly


  if ($.flag_m16_gone == 0) {
    $.phils_m16.remove();
  }
  if ($.flag_shotgun_gone == 0) {
    $.phils_shotgun.remove();
  }
  if ($.flag_uzi_gone == 0) {
    $.phils_uzi.remove();
  }
  if ($.flag_molotov_gone == 0) {
    $.phils_molotov.remove();
  }
  if ($.flag_rocket_gone == 0) {
    $.phils_rocket.remove();
  }


  if ($.flag_ray_mission2_passed == 0) {
    $.phils_armour.remove();
  }


  Mission.Finish();
  return;


  //---------------------------GOSUBS----------------GOSUBS---------------------------actuallydon'tchaknow


  //-------------------------------BAILOUT----------------------------------------------


}

async function big_bailout_routine() {


  if ($.stallion_bailout == 0 && $.flag_stallion_arrived == 1) {
    if (!(Char.IsDead($.varmint_5))) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        $.varmint_5.setObjLeaveCar($.stallion1_rm2);
        while ($.varmint_5.isInCar($.stallion1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.stallion1_rm2)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_5)) {
            // SCM GOTO → plook1 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook1"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_5))) {
          $.blip_v5 = Blip.AddForCharOld($.varmint_5, 1, 2 /* BLIP_ONLY */);
          $.varmint_5.addArmor(100);
          $.varmint_5.giveWeapon(3 /* WEAPONTYPE_UZI */, 60);
          $.varmint_5.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_5.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_5.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_5.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_5 player

        }
      }
    }
    // SCM label plook1
    if (!(Char.IsDead($.varmint_6))) {
      if (!(Car.IsDead($.stallion1_rm2))) {
        $.varmint_6.setObjLeaveCar($.stallion1_rm2);
        while ($.varmint_6.isInCar($.stallion1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.stallion1_rm2)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_6)) {
            // SCM GOTO → plook2 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook2"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_6))) {
          //AND NOT IS_CHAR_DEAD phil
          $.blip_v6 = Blip.AddForCharOld($.varmint_6, 1, 2 /* BLIP_ONLY */);
          $.varmint_6.giveWeapon(3 /* WEAPONTYPE_UZI */, 60);
          $.varmint_6.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_6.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_6.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_6.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_CHAR_ON_FOOT varmint_6 phil

        }
      }
    }
    // SCM label plook2
    $.blip_stallion1.remove();
    $.stallion_bailout = 1;


  }



  if ($.sentinel_bailout == 0 && $.flag_sentinel_arrived == 1) {
    if (!(Char.IsDead($.varmint_1))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_1.setObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_1.isInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_1)) {
            // SCM GOTO → plook3 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook3"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_1))) {
          $.blip_v1 = Blip.AddForCharOld($.varmint_1, 1, 2 /* BLIP_ONLY */);
          $.varmint_1.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_1.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_1.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_1.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_1.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_1 player

        }
      }
    }
    // SCM label plook3
    if (!(Char.IsDead($.varmint_2))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_2.setObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_2.isInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_2)) {
            // SCM GOTO → plook4 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook4"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_2))) {
          //AND NOT IS_CHAR_DEAD phil
          $.blip_v2 = Blip.AddForCharOld($.varmint_2, 1, 2 /* BLIP_ONLY */);
          $.varmint_2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_2.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_2.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_2.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_2.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_CHAR_ON_FOOT varmint_2 phil

        }
      }
    }
    // SCM label plook4
    if (!(Char.IsDead($.varmint_3))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_3.setObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_3.isInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_3)) {
            // SCM GOTO → plook5 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook5"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_3))) {
          //AND NOT IS_CHAR_DEAD phil
          $.blip_v3 = Blip.AddForCharOld($.varmint_3, 1, 2 /* BLIP_ONLY */);
          $.varmint_3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 80);
          $.varmint_3.setObjRunToCoord(140.0, 209.5);
          $.varmint_3.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_3.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_3.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_CHAR_ON_FOOT varmint_3 phil

        }
      }
    }
    // SCM label plook5
    if (!(Char.IsDead($.varmint_4))) {
      if (!(Car.IsDead($.sentinel1_rm2))) {
        $.varmint_4.setObjLeaveCar($.sentinel1_rm2);
        while ($.varmint_4.isInCar($.sentinel1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.sentinel1_rm2)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_4)) {
            // SCM GOTO → plook6 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook6"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_4))) {
          $.blip_v4 = Blip.AddForCharOld($.varmint_4, 1, 2 /* BLIP_ONLY */);
          $.varmint_4.addArmor(100);
          $.varmint_4.giveWeapon(10 /* WEAPONTYPE_MOLOTOV */, 5);
          $.varmint_4.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_4.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_4.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_4.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_4 player

        }
      }
    }
    // SCM label plook6
    $.blip_sentinel1.remove();
    $.sentinel_bailout = 1;
  }


  if ($.perenial_bailout == 0 && $.flag_perenial_arrived == 1) {
    if (!(Char.IsDead($.varmint_7))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_7.setObjLeaveCar($.perenial1_rm2);
        while ($.varmint_7.isInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_7)) {
            // SCM GOTO → plook7 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook7"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_7))) {
          $.blip_v7 = Blip.AddForCharOld($.varmint_7, 1, 2 /* BLIP_ONLY */);
          $.varmint_7.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 10);
          $.varmint_7.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_7.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_7.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_7.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_7 player

        }
      }
    }
    // SCM label plook7
    if (!(Char.IsDead($.varmint_8))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_8.setObjLeaveCar($.perenial1_rm2);
        while ($.varmint_8.isInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_8)) {
            // SCM GOTO → plook8 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook8"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_8))) {
          //AND NOT IS_CHAR_DEAD phil
          $.blip_v8 = Blip.AddForCharOld($.varmint_8, 1, 2 /* BLIP_ONLY */);
          $.varmint_8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 45);
          $.varmint_8.setObjRunToCoord(129.7, 199.8);
          $.varmint_8.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_8.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_8.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_CHAR_ON_FOOT varmint_8 phil

        }
      }
    }
    // SCM label plook8
    if (!(Char.IsDead($.varmint_9))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_9.setObjLeaveCar($.perenial1_rm2);
        while ($.varmint_9.isInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_9)) {
            // SCM GOTO → plook9 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook9"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_9))) {
          //AND NOT IS_CHAR_DEAD phil
          $.blip_v9 = Blip.AddForCharOld($.varmint_9, 1, 2 /* BLIP_ONLY */);
          $.varmint_9.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 30);
          $.varmint_9.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_9.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_9.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_9.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_CHAR_ON_FOOT varmint_9 phil

        }
      }
    }
    // SCM label plook9
    if (!(Char.IsDead($.varmint_10))) {
      if (!(Car.IsDead($.perenial1_rm2))) {
        $.varmint_10.setObjLeaveCar($.perenial1_rm2);
        while ($.varmint_10.isInCar($.perenial1_rm2)) {
          await asyncWait(0);
          if (Car.IsDead($.perenial1_rm2)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
          if (Char.IsDead($.varmint_10)) {
            // SCM GOTO → plook10 (not lowered; manual jump required)
            throw new Error("unresolved GOTO plook10"); // fallback: would break linear control flow
          }
        }
        if (!(Char.IsDead($.varmint_10))) {
          $.blip_v10 = Blip.AddForCharOld($.varmint_10, 1, 2 /* BLIP_ONLY */);
          $.varmint_10.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 20);
          $.varmint_10.addArmor(100);
          $.varmint_10.setObjRunToCoord($.wh_x_rm2, $.wh_y_rm2);
          $.varmint_10.setThreatSearch(0 /* THREAT_PLAYER1 */);
          $.varmint_10.setThreatSearch(19 /* THREAT_SPECIAL */);
          $.varmint_10.setHeedThreats(true /* true */);
          //SET_CHAR_OBJ_KILL_PLAYER_ON_FOOT varmint_10 player

        }
      }
    }
    // SCM label plook10
    $.blip_perenial1.remove();
    $.perenial_bailout = 1;
  }



  return;

  //-------------------VARMINT DEATHS-----------------------------------------


}

async function varmint_deaths() {


  if ($.flag_sentinel_created == 1) {
    if ($.flag_v1_dead == 0) {
      if (Char.IsDead($.varmint_1)) {
        $.flag_v1_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v1.remove();
      }
    }
    if ($.flag_v2_dead == 0) {
      if (Char.IsDead($.varmint_2)) {
        $.flag_v2_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v2.remove();
      }
    }
    if ($.flag_v3_dead == 0) {
      if (Char.IsDead($.varmint_3)) {
        $.flag_v3_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v3.remove();
      }
    }
    if ($.flag_v4_dead == 0) {
      if (Char.IsDead($.varmint_4)) {
        $.flag_v4_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v4.remove();
      }
    }
  }


  if ($.flag_stallion_created == 1) {
    if ($.flag_v5_dead == 0) {
      if (Char.IsDead($.varmint_5)) {
        $.flag_v5_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v5.remove();
      }
    }
    if ($.flag_v6_dead == 0) {
      if (Char.IsDead($.varmint_6)) {
        $.flag_v6_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v6.remove();
      }
    }
  }


  if ($.flag_perenial_created == 1) {
    if ($.flag_v7_dead == 0) {
      if (Char.IsDead($.varmint_7)) {
        $.flag_v7_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v7.remove();
      }
    }
    if ($.flag_v8_dead == 0) {
      if (Char.IsDead($.varmint_8)) {
        $.flag_v8_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v8.remove();
      }
    }
    if ($.flag_v9_dead == 0) {
      if (Char.IsDead($.varmint_9)) {
        $.flag_v9_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v9.remove();
      }
    }
    if ($.flag_v10_dead == 0) {
      if (Char.IsDead($.varmint_10)) {
        $.flag_v10_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v10.remove();
      }
    }
  }


  if ($.flag_sneaky_1 == 1) {
    if ($.flag_v11_dead == 0) {
      if (Char.IsDead($.varmint_11)) {
        $.flag_v11_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v11.remove();
      }
    }
  }
  if ($.flag_sneaky_2 == 1) {
    if ($.flag_v12_dead == 0) {
      if (Char.IsDead($.varmint_12)) {
        $.flag_v12_dead = 1;
        ++$.counter_dead_varmints;
        $.blip_v12.remove();
      }
    }
  }



  return;

  //---------------PICKUPS------------------------


}

async function pickups() {


  if ($.flag_m16_gone == 0) {
    if ($.phils_m16.hasBeenCollected()) {
      //GIVE_WEAPON_TO_PLAYER player WEAPONTYPE_M16 80
      $.player.setCurrentWeapon(6 /* WEAPONTYPE_M16 */);
      $.flag_m16_gone = 1;
    }
  }


  if ($.flag_uzi_gone == 0) {
    if ($.phils_uzi.hasBeenCollected()) {
      //GIVE_WEAPON_TO_PLAYER player WEAPONTYPE_UZI 100
      $.player.setCurrentWeapon(3 /* WEAPONTYPE_UZI */);
      $.flag_uzi_gone = 1;
    }
  }


  if ($.flag_rocket_gone == 0) {
    if ($.phils_rocket.hasBeenCollected()) {
      //GIVE_WEAPON_TO_PLAYER player WEAPONTYPE_ROCKET 3
      $.player.setCurrentWeapon(8 /* WEAPONTYPE_ROCKET */);
      $.flag_rocket_gone = 1;
    }
  }


  if ($.flag_shotgun_gone == 0) {
    if ($.phils_shotgun.hasBeenCollected()) {
      //GIVE_WEAPON_TO_PLAYER player WEAPONTYPE_SHOTGUN 100
      $.player.setCurrentWeapon(4 /* WEAPONTYPE_SHOTGUN */);
      $.flag_shotgun_gone = 1;
    }
  }


  if ($.flag_molotov_gone == 0) {
    if ($.phils_molotov.hasBeenCollected()) {
      //GIVE_WEAPON_TO_PLAYER player WEAPONTYPE_SHOTGUN 100
      $.player.setCurrentWeapon(10 /* WEAPONTYPE_MOLOTOV */);
      $.flag_molotov_gone = 1;
    }
  }


  return;


  //------blip removal-------------------------------


}

async function blip_removal_rm2() {


  $.blip_v1.remove();
  $.blip_v2.remove();
  $.blip_v3.remove();
  $.blip_v4.remove();
  $.blip_v5.remove();
  $.blip_v6.remove();
  $.blip_v7.remove();
  $.blip_v8.remove();
  $.blip_v9.remove();
  $.blip_v10.remove();
  $.blip_v11.remove();
  $.blip_v12.remove();


  return;
}

export async function ray2() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************Ray mission 2***********************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************

  // Mission start stuff


  // SCM GOSUB mission_start_ray2
  await mission_start_ray2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray2_failed
    await mission_ray2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray2
  await mission_cleanup_ray2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary

  // Variables for mission


  // VAR_INT blip_warehouse_rm2
  // VAR_FLOAT wh_x_rm2 wh_y_rm2 wh2_x_rm2 wh2_y_rm2
  // VAR_FLOAT phils_defcon_x phils_defcon_y phils_defcon_z
  //VAR_FLOAT phils_defcon_minx phils_defcon_miny phils_defcon_maxx phils_defcon_maxy

  // VAR_INT flag_phil_in_area flag_phil_arrived

  //VAR_INT phils_m16 phils_uzi phils_shotgun

  // VAR_INT phils_molotov phils_rocket phils_m16 phils_uzi phils_shotgun phils_armour
  // VAR_INT flag_m16_gone flag_uzi_gone flag_rocket_gone flag_shotgun_gone
  // VAR_INT flag_molotov_gone
  // VAR_FLOAT m16_x m16_y
  // VAR_FLOAT uzi_x uzi_y
  // VAR_FLOAT rocket_x rocket_y rocket_z
  // VAR_FLOAT molotov_x molotov_y molotov_z
  // VAR_FLOAT shotgun_x shotgun_y


  // VAR_INT player_rm2 player_car_rm2
  // VAR_INT phil phil_truck_1 phil_truck_2 blip_phil
  //VAR_INT phil_truck_3

  // VAR_INT flag_phil_dead flag_trucks


  // VAR_INT varmint_1 varmint_2 varmint_3
  // VAR_INT varmint_4 varmint_5 varmint_6
  // VAR_INT varmint_7 varmint_8 varmint_9
  // VAR_INT varmint_10 varmint_11 varmint_12


  // VAR_INT blip_v1 blip_v2 blip_v3 blip_v4
  // VAR_INT blip_v5 blip_v6 blip_v7 blip_v8
  // VAR_INT blip_v9 blip_v10 blip_v11 blip_v12


  // VAR_INT flag_v1_dead flag_v2_dead flag_v3_dead
  // VAR_INT flag_v4_dead flag_v5_dead flag_v6_dead
  // VAR_INT flag_v7_dead flag_v8_dead flag_v9_dead
  // VAR_INT flag_v10_dead flag_v11_dead flag_v12_dead
  // VAR_INT counter_dead_varmints
  //VAR_INT condition_1

  // VAR_INT flag_cartel_arrived flag_sneaky_1 flag_sneaky_2



  // VAR_INT sentinel1_rm2 stallion1_rm2 perenial1_rm2
  // VAR_INT stallion_bailout sentinel_bailout perenial_bailout
  // VAR_INT flag_stallion_arrived flag_sentinel_arrived flag_perenial_arrived
  // VAR_INT flag_stallion_created flag_sentinel_created flag_perenial_created
  // VAR_INT flag_launch_perenial flag_launch_stallion
  //VAR_INT flag_launch_sentinel

  // VAR_INT blip_stallion1 blip_perenial1 blip_sentinel1


  // VAR_FLOAT varmint_gen1_x varmint_gen1_y
  //VAR_FLOAT varmint_gen2_x varmint_gen2_y
  //VAR_FLOAT varmint_gen3_x varmint_gen3_y


  // VAR_FLOAT stage_1_x stage_1_y
  // VAR_FLOAT stage_2_x stage_2_y
  // VAR_FLOAT stage_3_x stage_3_y
  // VAR_INT timer_dif_rm2 timer_now_rm2 timer_start_rm2


  //VAR_FLOAT player_rm2_x player_rm2_y player_rm2_z


  // VAR_INT flag_audio flag_gate
  // ****************************************Mission Start************************************


}
