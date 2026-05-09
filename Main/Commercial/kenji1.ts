// Generated from Main/Commercial/kenji1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_had_car_message_km1 = 0;
  $.flag_player_had_bomb_message_km1 = 0;
  $.flag_player_got_cops_message_km1 = 0;
  $.flag_player_wanted_level_changed = 0;
  $.flag_blip_on_yakuza_ped1_km1 = 0;
  $.flag_car_got_bomb_km1 = 0;
  $.total_counter_km1 = 0;
  $.counter_bomb_km1 = 0;
  $.counter_police_km1 = 0;
  $.flag_had_bomb_message_km1 = 0;
  $.flag_blip_on_km1 = 0;
  $.blob_flag = 1;
  $.flag_area_bomb_message_km1 = 0;
  $.flag_spray_blip_on_km1 = 0;
  $.flag_bomb_km1 = 0;
  $.debris1_x = 0.0;
  $.debris1_y = 0.0;
  $.debris1_z = 0.0;
  $.debris2_x = 0.0;
  $.debris2_y = 0.0;
  $.debris2_z = 0.0;
  $.debris3_x = 0.0;
  $.debris3_y = 0.0;
  $.debris3_z = 0.0;
  $.debris4_x = 0.0;
  $.debris4_y = 0.0;
  $.debris4_z = 0.0;
  $.flag_dojo_blip_on = 0;
  $.flag_player_wanted = 0;
  $.flag_kanbu_in_group = 0;
  $.flag_player_had_dome_message_km1 = 0;
  $.flag_played_cop_radio_km1 = 0;
  {
  // ****************************************START OF CUTSCENE********************************
  /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_kenji1_failed
  ENDIF
  SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  PRINT_BIG ( KM1 ) 15000 2 //"Kanbu Bust out"
  SWITCH_STREAMING OFF
  */
  // Cutscene stuff
  if ($.flag_need_wall_change_km1 == 1) {
    World.SwapNearestBuildingModel(328.026, -1090.262, 26.941, 2.0, 1332 /* police_celhole */, 1331 /* police_cell_wall */);
    $.flag_need_wall_change_km1 = 0;
  }
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadAllModelsNow();
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k1_kbo);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.setAnim($.kenji);
  $.cs_yakuza = CutsceneObject.Create(ped`GANG_YAKUZA_A`);
  $.cs_yakuza.setAnim(gang07);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.setAnim($.kenji);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.setAnim($.player);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, true /* TRUE */);
  $.player.setCoordinates(459.1, -1413.0, 25.11);
  $.player.setHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 8392) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"My sister speaks highly of you,"
  Text.PrintNow("KM1_A", 10000, 1);
  while ($.cs_time < 9918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"though I am yet to be convinced that a gaijin can offer anything but disappointment. We shall see..."
  Text.PrintNow("KM1_E", 10000, 1);
  while ($.cs_time < 13732) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Perhaps you could help deal with a situation that has me at a disadvantage."
  Text.PrintNow("KM1_B", 10000, 1);
  while ($.cs_time < 17547) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Of course failure has it's own disgrace."
  Text.PrintNow("KM1_F", 10000, 1);
  while ($.cs_time < 20683) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"A Yakuza Kanbu is in custody awaiting transfer for trial."
  Text.PrintNow("KM1_C", 10000, 1);
  while ($.cs_time < 23650) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"He is a valued member of the family."
  Text.PrintNow("KM1_G", 10000, 1);
  while ($.cs_time < 25430) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Break him out of custody and get him to the dojo."
  Text.PrintNow("KM1_H", 10000, 1);
  while ($.cs_time < 28749) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM1_H");
  while ($.cs_time < 31200) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
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
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor TRUE
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  // *******************************************END OF CUTSCENE*******************************
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  //"Steal a cop car!"
  Text.PrintNow("KM1_1", 5000, 1);
  Streaming.RequestModel(rubble01);
  Streaming.RequestModel(rubble02);
  Audio.LoadMissionAudio(K1_A);
  // waiting for the player to be in a cop car
  while (!(Streaming.HasModelLoaded(rubble01)) || !(Streaming.HasModelLoaded(rubble02)) || !(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  $.cell_beating = Sound.AddContinuous(326.4, -1092.4, 26.0, 77 /* SOUND_POLICE_CELL_BEATING_LOOP_L */);
  while (!($.player.isInModel(109 /* CAR_POLICE */))) {
    await asyncWait(0);
  }
  $.mission_cop_car_km1 = $.player.storeCarIsIn();
  //"Get the car rigged with a bomb!"
  Text.PrintNow("KM1_2", 5000, 1);
  $.sphere_km1 = Sphere.Create(373.9, -576.4, 25.1, 4.0);
  // waiting for the cop car to be rigged
  $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
  //"Get the car rigged with a bomb!"
  //"Get a cop car and get on with the mission"
  //"Drive the car...
  while (!($.flag_car_got_bomb_km1 == 1)) {
    await asyncWait(0);
    //"Get the car rigged with a bomb!"
    //"Get a cop car and get on with the mission"
    if ($.player.isInModel(109 /* CAR_POLICE */)) {
      $.mission_cop_car_km1 = $.player.storeCarIsIn();
      if ($.flag_player_had_car_message_km1 == 1) {
        $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
        if ($.flag_player_had_dome_message_km1 == 0) {
          $.sphere_km1 = Sphere.Create(373.9, -576.4, 25.1, 4.0);
        }
        $.flag_player_had_car_message_km1 = 0;
      }
      //"Get the car rigged with a bomb!"
      if ($.mission_cop_car_km1.isArmedWithBomb(1 /* CARBOMB_TIMED */)) {
        $.flag_car_got_bomb_km1 = 1;
      }
      else {
        //"Get the car rigged with a bomb!"
        if ($.flag_had_bomb_message_km1 == 0) {
          //"Get the car rigged with a bomb!"
          Text.PrintNow("KM1_2", 5000, 1);
          $.flag_had_bomb_message_km1 = 1;
        }
      }
    }
    else {
      //"Get a cop car and get on with the mission"
      if ($.flag_player_had_car_message_km1 == 0) {
        //"Get a cop car and get on with the mission"
        Text.PrintNow("KM1_4", 7000, 1);
        $.radar_blip_coord1_km1.remove();
        $.sphere_km1.remove();
        $.flag_player_had_car_message_km1 = 1;
      }
      $.flag_had_bomb_message_km1 = 0;
    }
    //"Drive the car...
    if ($.player.locateInCar2D(373.9, -576.4, 2.0, 2.0, false /* FALSE */)) {
      //"Drive the car...
      if ($.flag_player_had_dome_message_km1 == 0) {
        //"Drive the car...
        Text.PrintHelp("KM1_13");
        $.sphere_km1.remove();
        $.flag_player_had_dome_message_km1 = 1;
      }
    }
    else {
      $.flag_player_had_dome_message_km1 = 0;
    }
  }
  $.radar_blip_coord1_km1.remove();
  $.sphere_km1.remove();
  //"Okay now go to the police station
  Text.PrintNow("KM1_5", 7000, 1);
  $.radar_blip_coord2_km1 = Blip.AddForCoord(327.0, -1086.0, -100.0);
  $.blob_flag = 1;
  // waiting for the player to activate the car bomb and the car to be in the area
  $.flag_blip_on_km1 = 1;
  $.blob_flag = 1;
  // bombshop
  // police station
  //"Press circle to detonate the bomb, remember to get out of the way!"
  //counter_bomb_km1 = 0
  //"Get a bomb fitted to the car!"
  //bombshop
  //"Get a cop car and get on with the mission"
  // Police station
  while ($.counter_bomb_km1 == 0) {
    await asyncWait(0);
    // bombshop
    // police station
    //"Press circle to detonate the bomb, remember to get out of the way!"
    //counter_bomb_km1 = 0
    //"Get a bomb fitted to the car!"
    //bombshop
    //"Get a cop car and get on with the mission"
    // Police station
    if ($.flag_area_bomb_message_km1 == 0) {
      // bombshop
      // police station
      //"Press circle to detonate the bomb, remember to get out of the way!"
      //counter_bomb_km1 = 0
      //"Get a bomb fitted to the car!"
      //bombshop
      //"Get a cop car and get on with the mission"
      // Police station
      if ($.player.isInModel(109 /* CAR_POLICE */)) {
        $.mission_cop_car_km1 = $.player.storeCarIsIn();
        $.flag_player_had_car_message_km1 = 0;
        // bombshop
        // police station
        //"Press circle to detonate the bomb, remember to get out of the way!"
        //counter_bomb_km1 = 0
        //"Get a bomb fitted to the car!"
        //bombshop
        if ($.mission_cop_car_km1.isArmedWithBomb(1 /* CARBOMB_TIMED */) || $.mission_cop_car_km1.isArmedWithBomb(4 /* CARBOMB_TIMEDACTIVE */)) {
          // bombshop
          if ($.flag_player_had_bomb_message_km1 == 1) {
            // bombshop
            $.radar_blip_coord1_km1.remove();
            $.flag_player_had_bomb_message_km1 = 0;
          }
          // police station
          if ($.flag_blip_on_km1 == 0) {
            // police station
            $.radar_blip_coord2_km1 = Blip.AddForCoord(327.0, -1086.0, -100.0);
            $.flag_blip_on_km1 = 1;
            $.blob_flag = 1;
          }
          //"Press circle to detonate the bomb, remember to get out of the way!"
          //counter_bomb_km1 = 0
          if ($.mission_cop_car_km1.isInArea3D(331.7, -1091.0, 24.0, 323.7, -1078.3, 33.0, $.blob_flag)) {
            $.controlmode = Pad.GetControllerMode();
            //"Press circle to detonate the bomb, remember to get out of the way!"
            if ($.flag_bomb_km1 == 0) {
              //"Press circle to detonate the bomb, remember to get out of the way!"
              if ($.controlmode == 0) {
                //"Press circle to detonate the bomb, remember to get out of the way!"
                Text.PrintHelp("KM1_8A");
              }
              //"Press circle to detonate the bomb, remember to get out of the way!"
              if ($.controlmode == 1) {
                //"Press circle to detonate the bomb, remember to get out of the way!"
                Text.PrintHelp("KM1_8A");
              }
              //"Press circle to detonate the bomb, remember to get out of the way!"
              if ($.controlmode == 2) {
                //"Press circle to detonate the bomb, remember to get out of the way!"
                Text.PrintHelp("KM1_8A");
              }
              //"Press circle to detonate the bomb, remember to get out of the way!"
              if ($.controlmode == 3) {
                //"Press circle to detonate the bomb, remember to get out of the way!"
                Text.PrintHelp("KM1_8D");
              }
              $.flag_bomb_km1 = 1;
            }
            //counter_bomb_km1 = 0
            if ($.mission_cop_car_km1.isArmedWithBomb(4 /* CARBOMB_TIMEDACTIVE */)) {
              $.counter_bomb_km1 = 1;
              $.flag_area_bomb_message_km1 = 1;
            }
            else {
              //counter_bomb_km1 = 0
              $.flag_area_bomb_message_km1 = 0;
            }
          }
        }
        else {
          //"Get a bomb fitted to the car!"
          //bombshop
          // police station
          if ($.flag_area_bomb_message_km1 == 0) {
            //"Get a bomb fitted to the car!"
            //bombshop
            // police station
            if ($.flag_player_had_bomb_message_km1 == 0) {
              //"Get a bomb fitted to the car!"
              Text.PrintNow("KM1_6", 7000, 1);
              //bombshop
              $.radar_blip_coord1_km1 = Blip.AddSpriteForCoord(380.0, -577.0, 25.1, 2 /* RADAR_SPRITE_BOMB */);
              $.flag_player_had_bomb_message_km1 = 1;
              // police station
              if ($.flag_blip_on_km1 == 1) {
                // police station
                $.radar_blip_coord2_km1.remove();
                $.flag_blip_on_km1 = 0;
                $.blob_flag = 0;
              }
            }
          }
        }
      }
      else {
        $.blob_flag = 0;
        //"Get a cop car and get on with the mission"
        // Police station
        if ($.flag_player_had_car_message_km1 == 0) {
          //"Get a cop car and get on with the mission"
          Text.PrintNow("KM1_4", 7000, 1);
          // Police station
          $.radar_blip_coord2_km1.remove();
          $.flag_blip_on_km1 = 0;
          $.flag_player_had_car_message_km1 = 1;
        }
        // bombshop
        if ($.flag_player_had_bomb_message_km1 == 1) {
          // bombshop
          $.radar_blip_coord1_km1.remove();
          $.flag_player_had_bomb_message_km1 = 0;
        }
      }
    }
  }
  Text.ClearHelp();
  // police station
  // Waiting for the player to destroy the car outside the cell
  $.radar_blip_coord2_km1.remove();
  //"You have alerted the cops"
  while (!(World.IsExplosionInArea(3 /* EXPLOSION_CAR */, 323.3, -1072.6, 24.0, 335.5, -1094.0, 33.0))) {
    //"You have alerted the cops"
    if (Car.IsDead($.mission_cop_car_km1)) {
      //"You have alerted the cops"
      Text.PrintNow("KM1_11", 5000, 1);
      $.player.alterWantedLevelNoDrop(3);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    await asyncWait(0);
  }
  //"You have alerted the cops"
  if (!(Car.IsDead($.mission_cop_car_km1))) {
    //"You have alerted the cops"
    Text.PrintNow("KM1_11", 5000, 1);
    $.player.alterWantedLevelNoDrop(3);
    // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOSUB wall_explosion
    await wall_explosion();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.cell_beating.remove();
  $.police_alarm = Sound.AddContinuous(328.418, -1088.174, 28.3, 69 /* SOUND_BANK_ALARM_LOOP_L */);
  World.ClearArea(327.0, -1086.0, -100.0, 4.0, true /* TRUE */);
  World.SwapNearestBuildingModel(328.026, -1090.262, 26.941, 2.0, 1331 /* police_cell_wall */, 1332 /* police_celhole */);
  // If player fails the wall needs to be changed back
  $.flag_need_wall_change_km1 = 1;
  $.radar_blip_coord2_km1.remove();
  await asyncWait(500);
  $.yakuza_ped1_km1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 328.2, -1092.2, 24.9);
  $.yakuza_ped1_km1.setRunning(true /* TRUE */);
  $.yakuza_ped1_km1.clearThreatSearch();
  $.yakuza_ped1_km1.followPlayer($.player);
  //"Get him to the dojo but get rid of the cops first!"
  Text.PrintNow("KM1_12", 7000, 1);
  $.player.alterWantedLevelNoDrop(3);
  // waiting for the player to get rid of his wanted level
  $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
  timera = 0;
  //"The Yakuza Kanbu is dead!"
  //You have left the Yakuza Kanbu behind go and get him!"
  while ($.player.isWantedLevelGreater(0)) {
    await asyncWait(0);
    if ($.flag_played_cop_radio_km1 == 0) {
      if (timera > 2000) {
        Audio.PlayMissionAudio();
        $.flag_played_cop_radio_km1 = 1;
      }
    }
    //"The Yakuza Kanbu is dead!"
    if (Char.IsDead($.yakuza_ped1_km1)) {
      //"The Yakuza Kanbu is dead!"
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    //You have left the Yakuza Kanbu behind go and get him!"
    if (!($.yakuza_ped1_km1.isInPlayersGroup($.player))) {
      //You have left the Yakuza Kanbu behind go and get him!"
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        //You have left the Yakuza Kanbu behind go and get him!"
        Text.PrintNow("HEY6", 5000, 1);
        $.radar_blip_ped1_km1 = Blip.AddForChar($.yakuza_ped1_km1);
        $.spray_blip_km1.remove();
        $.flag_blip_on_yakuza_ped1_km1 = 1;
      }
    }
    if ($.player.locateAnyMeansChar2D($.yakuza_ped1_km1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_yakuza_ped1_km1 == 1) {
      $.yakuza_ped1_km1.followPlayer($.player);
      $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
      $.radar_blip_ped1_km1.remove();
      $.flag_blip_on_yakuza_ped1_km1 = 0;
    }
  }
  $.spray_blip_km1.remove();
  //"Get me to the Dojo!"
  Text.PrintNow("KM1_3", 7000, 1);
  $.radar_blip_coord3_km1 = Blip.AddForCoord(105.6, -1292.68, -100.0);
  $.flag_dojo_blip_on = 1;
  // Waiting for the player to be back at the safehouse
  Audio.LoadMissionAudio(k1_b);
  $.blob_flag = 1;
  //"The Yakuza Kanbu is dead!"
  //You have left the Yakuza Kanbu behind go and get him!"
  //"Get rid of the cops!"
  //"Get me to the Dojo!"
  while (!($.player.locateStoppedAnyMeans2D(105.6, -1292.68, 3.0, 4.0, $.blob_flag)) || !($.yakuza_ped1_km1.locateStoppedAnyMeans2D(105.6, -1292.68, 3.0, 4.0, false /* FALSE */)) || !(Audio.HasMissionAudioLoaded()) || $.player.isWantedLevelGreater(0)) {
    await asyncWait(0);
    //"The Yakuza Kanbu is dead!"
    if (Char.IsDead($.yakuza_ped1_km1)) {
      //"The Yakuza Kanbu is dead!"
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    //You have left the Yakuza Kanbu behind go and get him!"
    if (!($.yakuza_ped1_km1.isInPlayersGroup($.player))) {
      //You have left the Yakuza Kanbu behind go and get him!"
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        //You have left the Yakuza Kanbu behind go and get him!"
        Text.PrintNow("HEY6", 5000, 1);
        $.radar_blip_ped1_km1 = Blip.AddForChar($.yakuza_ped1_km1);
        $.flag_blip_on_yakuza_ped1_km1 = 1;
        $.blob_flag = 0;
      }
      if ($.flag_spray_blip_on_km1 == 1) {
        $.spray_blip_km1.remove();
        $.flag_spray_blip_on_km1 = 0;
        $.flag_player_got_cops_message_km1 = 0;
      }
    }
    if ($.player.locateAnyMeansChar2D($.yakuza_ped1_km1, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_yakuza_ped1_km1 == 1) {
      $.yakuza_ped1_km1.followPlayer($.player);
      $.radar_blip_ped1_km1.remove();
      $.flag_blip_on_yakuza_ped1_km1 = 0;
      $.blob_flag = 1;
    }
    //"Get rid of the cops!"
    if ($.player.isWantedLevelGreater(0)) {
      //"Get rid of the cops!"
      if ($.flag_player_got_cops_message_km1 == 0) {
        //"Get rid of the cops!"
        if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
          //"Get rid of the cops!"
          Text.PrintNow("WANTED1", 7000, 1);
          $.spray_blip_km1 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
          $.flag_player_got_cops_message_km1 = 1;
          $.flag_spray_blip_on_km1 = 1;
        }
      }
    }
    else {
      $.flag_player_got_cops_message_km1 = 0;
      if ($.flag_spray_blip_on_km1 == 1) {
        $.spray_blip_km1.remove();
        $.flag_spray_blip_on_km1 = 0;
      }
    }
    //"Get me to the Dojo!"
    if ($.flag_spray_blip_on_km1 == 0) {
      //"Get me to the Dojo!"
      if ($.flag_blip_on_yakuza_ped1_km1 == 0) {
        //"Get me to the Dojo!"
        if ($.flag_dojo_blip_on == 0) {
          $.radar_blip_coord3_km1 = Blip.AddForCoord(105.6, -1292.68, -100.0);
          //"Get me to the Dojo!"
          Text.PrintNow("KM1_3", 7000, 1);
          $.blob_flag = 1;
          $.flag_dojo_blip_on = 1;
        }
      }
    }
    if ($.flag_dojo_blip_on == 1) {
      if ($.flag_spray_blip_on_km1 == 1 || $.flag_blip_on_yakuza_ped1_km1 == 1) {
        $.radar_blip_coord3_km1.remove();
        $.blob_flag = 0;
        $.flag_dojo_blip_on = 0;
      }
    }
  }
  $.radar_blip_coord3_km1.remove();
  $.player.setControl(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  Hud.SwitchWidescreen(true /* ON */);
  $.yakuza_ped1_km1.leaveGroup();
  Audio.PlayMissionAudio();
  //"The Yakuza Kanbu is dead!"
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
    //"The Yakuza Kanbu is dead!"
    if (Char.IsDead($.yakuza_ped1_km1)) {
      //"The Yakuza Kanbu is dead!"
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
  }
  Camera.SetFixedPosition(93.45, -1279.27, 35.08, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(94.19, -1279.91, 34.79, 2 /* JUMP_CUT */);
  // Tells ped to get out of car
  $.yakuza_ped1_km1.setRunning(false /* FALSE */);
  //"The Yakuza Kanbu is dead!"
  //"The vehicle's wrecked!"
  if ($.yakuza_ped1_km1.isInAnyCar()) {
    $.car_km1 = $.yakuza_ped1_km1.storeCarIsIn();
    $.yakuza_ped1_km1.setObjLeaveCar($.car_km1);
    //"The Yakuza Kanbu is dead!"
    //"The vehicle's wrecked!"
    while ($.yakuza_ped1_km1.isInCar($.car_km1)) {
      await asyncWait(0);
      //"The Yakuza Kanbu is dead!"
      if (Char.IsDead($.yakuza_ped1_km1)) {
        //"The Yakuza Kanbu is dead!"
        Text.PrintNow("KM1_10", 5000, 1);
        // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
      }
      //"The vehicle's wrecked!"
      if (Car.IsDead($.car_km1)) {
        //"The vehicle's wrecked!"
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
      }
    }
  }
  World.ClearArea(111.05, -1274.75, 25.16, 6.0, true /* TRUE */);
  $.yakuza_ped1_km1.setObjRunToCoord(111.05, -1274.75);
  timerb = 0;
  //"The Yakuza Kanbu is dead!"
  while (!($.yakuza_ped1_km1.locateOnFoot3D(111.05, -1274.75, 25.16, 2.0, 2.0, 2.0, false /* FALSE */))) {
    await asyncWait(0);
    //"The Yakuza Kanbu is dead!"
    if (Char.IsDead($.yakuza_ped1_km1)) {
      //"The Yakuza Kanbu is dead!"
      Text.PrintNow("KM1_10", 5000, 1);
      // SCM GOTO → mission_kenji1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji1_failed"); // fallback: would break linear control flow
    }
    if (timerb >= 8000) {
      if (!($.yakuza_ped1_km1.locateOnFoot3D(111.05, -1274.75, 25.16, 2.0, 2.0, 2.0, false /* FALSE */))) {
        $.yakuza_ped1_km1.removeElegantly();
        // SCM GOTO → mission_bloke_got_stuck_km1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_got_stuck_km1"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_bloke_got_stuck_km1() {
  $.yakuza_ped1_km1.delete();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  Camera.RestoreJumpcut();
  // Mission Kemuri1 failed
  // SCM GOTO → mission_kenji1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji1_passed"); // fallback: would break linear control flow
}

async function mission_kenji1_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission Kemuri1 passed
  return;
}

async function mission_kenji1_passed() {
  $.flag_kenji_mission1_passed = 1;
  Stat.RegisterMissionPassed("KM1");
  Stat.PlayerMadeProgress(1);
  //"Mission Passed"
  Text.PrintWithNumberBig("m_pass", 30000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(30000);
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT kenji_mission2_loop
  // mission cleanup
  return;
}

async function mission_cleanup_kenji1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.police_alarm.remove();
  $.cell_beating.remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(rubble01);
  Streaming.MarkModelAsNoLongerNeeded(rubble02);
  $.radar_blip_coord1_km1.remove();
  $.radar_blip_coord2_km1.remove();
  $.radar_blip_coord3_km1.remove();
  $.radar_blip_ped1_km1.remove();
  $.spray_blip_km1.remove();
  $.sphere_km1.remove();
  Mission.Finish();
  return;
}

async function wall_explosion() {
  Fx.AddExplosion(328.1, -1087.5, 27.7, 5 /* EXPLOSION_HELI */);
  Fx.AddMovingParticleEffect(15 /* POBJECT_FIREBALL_AND_SMOKE */, 328.1, -1088.3, 26.0, 0.0, 0.0, 0.0, 4.0, 0, 0, 0, 3000);
  $.debris1 = Object.Create(1370 /* rubble02 */, 328.1, -1084.1, 27.0);
  $.debris2 = Object.Create(1370 /* rubble02 */, 328.5, -1084.7, 27.0);
  $.debris3 = Object.Create(1369 /* rubble01 */, 326.6, -1083.7, 26.0);
  $.debris4 = Object.Create(1369 /* rubble01 */, 330.0, -1084.4, 27.0);
  $.debris1.setDynamic(true /* TRUE */);
  $.debris2.setDynamic(true /* TRUE */);
  $.debris3.setDynamic(true /* TRUE */);
  $.debris4.setDynamic(true /* TRUE */);
  $.debris1.setVelocity(3.0, 16.0, 15.0);
  $.debris2.setVelocity(-5.0, 10.0, 5.0);
  $.debris3.setVelocity(7.0, 7.0, 7.0);
  $.debris4.setVelocity(-4.0, 13.0, 10.0);
  return;
  }
}

export async function kenji1() {
  // *****************************************************************************************
  // *****************************************Kenji mission 1*********************************
  // ******************************************KANBU BUST OUT*********************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_kenji1
  await mission_start_kenji1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji1_failed
    await mission_kenji1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji1
  await mission_cleanup_kenji1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT mission_cop_car_km1
  // VAR_INT radar_blip_coord1_km1
  // VAR_INT radar_blip_coord2_km1
  // VAR_INT radar_blip_coord3_km1
  // VAR_INT flag_player_had_car_message_km1
  // VAR_INT flag_player_had_bomb_message_km1
  // VAR_INT flag_player_got_cops_message_km1
  // VAR_INT yakuza_ped1_km1
  // VAR_INT mission_car_km1
  // VAR_INT flag_player_wanted_level_changed
  // VAR_INT flag_blip_on_yakuza_ped1_km1
  // VAR_INT radar_blip_ped1_km1
  // VAR_INT flag_car_got_bomb_km1
  // VAR_INT total_counter_km1
  // VAR_INT counter_bomb_km1
  // VAR_INT counter_police_km1
  //Car at end at dojo
  // VAR_INT car_km1
  // VAR_INT flag_had_bomb_message_km1
  // VAR_INT flag_blip_on_km1
  // VAR_INT flag_area_bomb_message_km1
  // VAR_INT police_alarm
  // VAR_INT spray_blip_km1
  // VAR_INT flag_spray_blip_on_km1
  // VAR_INT flag_bomb_km1
  // VAR_INT cell_beating
  // VAR_INT debris1
  // VAR_INT debris2
  // VAR_INT debris3
  // VAR_INT debris4
  // VAR_FLOAT debris1_x
  // VAR_FLOAT debris1_y
  // VAR_FLOAT debris1_z
  // VAR_FLOAT debris2_x
  // VAR_FLOAT debris2_y
  // VAR_FLOAT debris2_z
  // VAR_FLOAT debris3_x
  // VAR_FLOAT debris3_y
  // VAR_FLOAT debris3_z
  // VAR_FLOAT debris4_x
  // VAR_FLOAT debris4_y
  // VAR_FLOAT debris4_z
  // VAR_INT flag_dojo_blip_on
  // VAR_INT flag_player_wanted
  // VAR_INT flag_kanbu_in_group
  // VAR_INT sphere_km1
  // VAR_INT flag_player_had_dome_message_km1
  // ****************************************Mission Start************************************
  // VAR_INT flag_played_cop_radio_km1
}
