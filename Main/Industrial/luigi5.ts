// Generated from Main/Industrial/luigi5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_luigi5() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_luigi_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.max_no_of_passengers_lm5 = 0;
  $.flag_prossie1_at_ball = 0;
  $.flag_prossie2_at_ball = 0;
  $.flag_prossie3_at_ball = 0;
  $.flag_prossie4_at_ball = 0;
  $.flag_prossie5_at_ball = 0;
  $.flag_prossie6_at_ball = 0;
  $.flag_prossie7_at_ball = 0;
  $.flag_prossie8_at_ball = 0;
  $.room_left_in_car_lm5 = 0;
  $.no_of_passengers_lm5 = 0;
  $.flag_had_room_message_lm5 = 0;
  $.counter_no_of_girls_at_the_ball = 0;
  $.score_lm5 = 0;
  $.flag_prossie2_in_car_park = 0;
  $.flag_prossie2_told_to_go_into_ball = 0;
  $.flag_prossie1_in_car_park = 0;
  $.flag_prossie1_told_to_go_into_ball = 0;
  // 5 mins
  $.timer_lm5 = 301000;
  $.flag_blip_on_prossie1_lm5 = 0;
  $.flag_blip_on_prossie2_lm5 = 0;
  $.flag_blip_on_prossie3_lm5 = 0;
  $.flag_blip_on_prossie4_lm5 = 0;
  $.flag_blip_on_prossie5_lm5 = 0;
  $.flag_blip_on_prossie6_lm5 = 0;
  $.flag_blip_on_prossie7_lm5 = 0;
  $.flag_blip_on_prossie8_lm5 = 0;
  $.flag_prossie1_lm5_in_car = 0;
  $.flag_prossie2_lm5_in_car = 0;
  $.flag_prossie3_lm5_in_car = 0;
  $.flag_prossie4_lm5_in_car = 0;
  $.flag_prossie5_lm5_in_car = 0;
  $.flag_prossie6_lm5_in_car = 0;
  $.flag_prossie7_lm5_in_car = 0;
  $.flag_prossie8_lm5_in_car = 0;
  $.flag_prossie3_in_car_park = 0;
  $.flag_prossie3_told_to_go_into_ball = 0;
  $.flag_prossie4_in_car_park = 0;
  $.flag_prossie4_told_to_go_into_ball = 0;
  $.flag_prossie5_in_car_park = 0;
  $.flag_prossie5_told_to_go_into_ball = 0;
  $.flag_prossie6_in_car_park = 0;
  $.flag_prossie6_told_to_go_into_ball = 0;
  $.flag_prossie7_in_car_park = 0;
  $.flag_prossie7_told_to_go_into_ball = 0;
  $.flag_prossie8_in_car_park = 0;
  $.flag_prossie8_told_to_go_into_ball = 0;
  $.number_of_dead_prossies = 0;
  $.flag_moved_door1_lm5 = 0;
  $.flag_moved_door2_lm5 = 0;
  $.flag_had_car_message1_lm5 = 0;
  $.flag_had_car_message2_lm5 = 0;
  $.flag_had_car_message3_lm5 = 0;
  $.flag_had_car_message4_lm5 = 0;
  $.flag_had_car_message5_lm5 = 0;
  $.flag_had_car_message6_lm5 = 0;
  $.flag_had_car_message7_lm5 = 0;
  $.flag_had_car_message8_lm5 = 0;
  $.counter_girls_trying_to_get_to_ball = 0;
  // If the girls get stuck
  $.flag_timer_prossie1_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie2_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie3_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie4_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie5_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie6_lm5 = 0;
  // If the girls get stuck
  $.flag_timer_prossie7_lm5 = 0;
  // If the girls get stuck
  // *****************************************START OF CUTSCENE*******************************
  $.flag_timer_prossie8_lm5 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.luigi);
  Streaming.LoadSpecialCharacter(2, $.micky);
  Streaming.LoadSpecialModel(hier`cutobj01`, LUDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, LUIGIH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, MICKYH);
  Streaming.RequestModel(indhibuild3);
  Streaming.RequestModel(luigiclubout);
  /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */
  Streaming.RequestModel(luigiineerclub);
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(926.54, -471.72, 1.0, 830.76, -257.96, 25.0);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(indhibuild3)) || !(Streaming.HasModelLoaded(luigiclubout)) || !(Streaming.HasModelLoaded(luigiineerclub))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, false /* FALSE */);
  Cutscene.Load(l5_tfb);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_luigi.setAnim($.luigi);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_micky.setAnim($.micky);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`);
  $.cs_luigihead.setAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.setAnim($.player);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj04`);
  $.cs_mickyhead.setAnim($.micky);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  //CLEAR_AREA 902.2 -425.8 13.9 1.0 TRUE
  //SET_PLAYER_COORDINATES player 902.2 -425.8 13.9
  $.cs_ludoor.setAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, true /* TRUE */);
  $.player.setCoordinates(896.6, -426.2, 13.9);
  $.player.setHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 11950) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"The Policeman's Ball is being held at the old school hall near the Callahan Bridge"
  Text.PrintNow("LM5_A", 10000, 1);
  while ($.cs_time < 15702) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"and they'll be looking for some "old school action."
  Text.PrintNow("LM5_B", 10000, 1);
  while ($.cs_time < 17617) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Now I got girls all over town walking the streets."
  Text.PrintNow("LM5_C", 10000, 1);
  while ($.cs_time < 20281) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Get 'em to the ball they'll make a bundle"
  Text.PrintNow("LM5_D", 10000, 1);
  while ($.cs_time < 22295) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Get as many of them there as you can before those cops have drunk away their green."
  Text.PrintNow("LM5_E", 10000, 1);
  while ($.cs_time < 25606) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LM5_E");
  while ($.cs_time < 26000) {
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
  Streaming.Switch(true /* ON */);
  Streaming.LoadScene(920.3, -425.4, 15.0);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, 1376 /* backdoor */, true /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  // *****************************************END OF CUTSCENE*********************************
  World.SetPedDensityMultiplier(1.0);
  $.gen_car28.switch(0);
  $.sphere_lm5 = Sphere.Create(999.9, -879.3, 14.0, 4.0);
  Streaming.RequestModel(ped`PROSTITUTE`);
  Streaming.RequestModel(ped`PROSTITUTE2`);
  while (!(Streaming.HasModelLoaded(ped`PROSTITUTE`)) || !(Streaming.HasModelLoaded(ped`PROSTITUTE2`))) {
    await asyncWait(0);
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.cop_car1_lm5 = Car.Create(109 /* CAR_POLICE */, 1027.7, -873.1, 13.9);
  $.cop_car1_lm5.setHeading(90.0);
  $.cop_car1_lm5.lockDoors(1 /* CARLOCK_UNLOCKED */);
  $.cop_car2_lm5 = Car.Create(109 /* CAR_POLICE */, 998.68, -860.80, 14.5);
  $.cop_car2_lm5.setHeading(90.0);
  $.cop_car2_lm5.lockDoors(1 /* CARLOCK_UNLOCKED */);
  $.fuzzball_sign = Object.CreateNoOffset(1329 /* policeballsigns */, 1010.74, -896.46, 24.161);
  $.ball_sounds = Sound.AddContinuous(999.9, -892.4, 16.0, 71 /* SOUND_POLICE_BALL_LOOP_L */);
  $.fuzz_door1.setHeading(270.0);
  $.fuzz_door2.setHeading(270.0);
  Hud.DisplayTimer($.timer_lm5);
  // creates prossie 1
  $.radar_blip_coord1_lm5 = Blip.AddForCoord(999.9, -879.3, -100.0);
  $.prossie1_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 870.0, -482.0, -100.0);
  $.prossie1_lm5.setHeading(180.0);
  $.prossie1_lm5.clearThreatSearch();
  $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
  $.flag_blip_on_prossie1_lm5 = 1;
  // creates prossie 2
  $.prossie1_lm5.setRunning(true /* TRUE */);
  $.prossie2_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 916.0, -90.0, -100.0);
  $.prossie2_lm5.setHeading(180.0);
  $.prossie2_lm5.clearThreatSearch();
  $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
  $.flag_blip_on_prossie2_lm5 = 1;
  // creates prossie 3
  $.prossie2_lm5.setRunning(true /* TRUE */);
  $.prossie3_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1203.0, 23.0, -100.0);
  $.prossie3_lm5.clearThreatSearch();
  $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
  $.flag_blip_on_prossie3_lm5 = 1;
  // creates prossie 4
  $.prossie3_lm5.setRunning(true /* TRUE */);
  $.prossie4_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1240.0, -336.0, -100.0);
  $.prossie4_lm5.setHeading(180.0);
  $.prossie4_lm5.clearThreatSearch();
  $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
  $.flag_blip_on_prossie4_lm5 = 1;
  // creates prossie 5
  $.prossie4_lm5.setRunning(true /* TRUE */);
  $.prossie5_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1231.0, -511.0, -100.0);
  $.prossie5_lm5.clearThreatSearch();
  $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
  $.flag_blip_on_prossie5_lm5 = 1;
  // creates prossie 6
  $.prossie5_lm5.setRunning(true /* TRUE */);
  $.prossie6_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1360.0, -798.0, -100.0);
  $.prossie6_lm5.clearThreatSearch();
  $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
  $.flag_blip_on_prossie6_lm5 = 1;
  // creates prossie 7
  $.prossie6_lm5.setRunning(true /* TRUE */);
  $.prossie7_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1093.0, -973.0, -100.0);
  $.prossie7_lm5.clearThreatSearch();
  $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
  $.flag_blip_on_prossie7_lm5 = 1;
  // creates prossie 8
  $.prossie7_lm5.setRunning(true /* TRUE */);
  $.prossie8_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 975.0, -754.0, -100.0);
  $.prossie8_lm5.setHeading(180.0);
  $.prossie8_lm5.clearThreatSearch();
  $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
  $.flag_blip_on_prossie8_lm5 = 1;
  $.prossie8_lm5.setRunning(true /* TRUE */);
  //"This is a timed mission, you must complete it before the timer runs out."
  if ($.timer_help_message_displayed == 0) {
    //"This is a timed mission, you must complete it before the timer runs out."
    Text.PrintHelp("TIMER");
    $.timer_help_message_displayed = 1;
  }
  //"You need to get a minimum of four girls to the ball!"
  Text.PrintNow("LM5_7", 7000, 1);
  // checking to see how many girls the player get to the ball
  Hud.DisplayCounterWithString($.counter_no_of_girls_at_the_ball, 0 /* COUNTER_DISPLAY_NUMBER */, "LM5_9");
}

async function prossie_checks() {
  // This should clear the area
  //"A girl has died!"
  //starts checking for prossie1
  //"You need a car!"
  //"The vehicle is wrecked!"
  //"You have left one of the girls behind go and get her!"
  //"Get a bigger car!"
  //room message
  //room left in car
  //stopped
  // locate
  //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
  //++ counter_no_of_girls_at_the_ball
  //starts checking for prossie2
  //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
  // starts check for prossie 3
  //"The vehicle has been wrecked!"
  // checks for prossie 4
  // checks for prossie 5
  // checks for prossie 6
  // checks for prossie 7
  // checks for prossie 8
  // pass or fail checks
  while ($.timer_lm5 > 0) {
    await asyncWait(0);
    // This should clear the area
    World.ClearArea(1000.4, -886.7, 14.4, 6.0, false /* FALSE */);
    // SCM GOSUB check_for_dead_prossies
    await check_for_dead_prossies();
    // fallback if label was not emitted as async function: no-op continues linearly
    //"A girl has died!"
    if ($.number_of_dead_prossies > 0) {
      //"A girl has died!"
      Text.PrintNow("LM5_2", 5000, 1);
      // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
    }
    if ($.counter_no_of_girls_at_the_ball == 8) {
      // SCM GOTO → mission_luigi5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi5_passed"); // fallback: would break linear control flow
    }
    if ($.player.isInAnyCar()) {
      $.vehicle_lm5 = $.player.storeCarIsIn();
      $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
      $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
    }
    //starts checking for prossie1
    $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
    //"You need a car!"
    //"A girl has died!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //starts checking for prossie2
    if ($.flag_prossie1_at_ball == 0) {
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie1_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message1_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message1_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message1_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie1_lm5_in_car == 0) {
            $.prossie1_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie1_lm5.followPlayer($.player);
              $.radarped_prossie1_lm5.remove();
              $.flag_blip_on_prossie1_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie1_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie1_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie1_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie1_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie1_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
                      $.flag_blip_on_prossie1_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie1_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie1_lm5 == 1) {
                      $.prossie1_lm5.followPlayer($.player);
                      $.radarped_prossie1_lm5.remove();
                      $.flag_blip_on_prossie1_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie1_lm5_in_car = 1;
              $.prossie1_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie1_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie1_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie1_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie1_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
            $.flag_blip_on_prossie1_lm5 = 1;
            $.flag_prossie1_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie1_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie1_lm5 == 1) {
            $.prossie1_lm5.followPlayer($.player);
            $.radarped_prossie1_lm5.remove();
            $.flag_blip_on_prossie1_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie1_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie1_at_ball == 0 && $.flag_prossie1_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie1_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie1_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie1_lm5.leaveGroup();
          if ($.prossie1_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie1_lm5.storeCarIsIn();
            $.prossie1_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie1_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      if ($.flag_prossie1_in_car_park == 1) {
        //"A girl has died!"
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie1_lm5.isInAnyCar()) && $.flag_prossie1_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie1_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie1_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie1_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie1_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie1_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie1_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie1_lm5.removeElegantly();
          $.flag_prossie1_at_ball = 1;
        }
        if ($.flag_prossie1_told_to_go_into_ball == 1) {
          if ($.flag_prossie1_at_ball == 0) {
            if ($.flag_timer_prossie1_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie1_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie1_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    // starts check for prossie 3
    if ($.flag_prossie2_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie2_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie2_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message2_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message2_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message2_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie2_lm5_in_car == 0) {
            $.prossie2_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie2_lm5.followPlayer($.player);
              $.radarped_prossie2_lm5.remove();
              $.flag_blip_on_prossie2_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie2_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie2_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie2_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie2_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie2_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
                      $.flag_blip_on_prossie2_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie2_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie2_lm5 == 1) {
                      $.prossie2_lm5.followPlayer($.player);
                      $.radarped_prossie2_lm5.remove();
                      $.flag_blip_on_prossie2_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie2_lm5_in_car = 1;
              $.prossie2_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie2_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie2_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie2_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie2_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
            $.flag_blip_on_prossie2_lm5 = 1;
            $.flag_prossie2_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie2_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie2_lm5 == 1) {
            $.prossie2_lm5.followPlayer($.player);
            $.radarped_prossie2_lm5.remove();
            $.flag_blip_on_prossie2_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie2_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie2_at_ball == 0 && $.flag_prossie2_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie2_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie2_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie2_lm5.leaveGroup();
          if ($.prossie2_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie2_lm5.storeCarIsIn();
            $.prossie2_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie2_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie2_in_car_park == 1) {
        //"A girl has died!"
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie2_lm5.isInAnyCar()) && $.flag_prossie2_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie2_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie2_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie2_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie2_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie2_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie2_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie2_lm5.removeElegantly();
          $.flag_prossie2_at_ball = 1;
        }
        if ($.flag_prossie2_told_to_go_into_ball == 1) {
          if ($.flag_prossie2_at_ball == 0) {
            if ($.flag_timer_prossie2_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie2_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie2_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle has been wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    // checks for prossie 4
    if ($.flag_prossie3_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie3_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"The vehicle has been wrecked!"
      //"A girl has died!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie3_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message3_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message3_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message3_lm5 = 0;
        }
        //"The vehicle has been wrecked!"
        //"A girl has died!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie3_lm5_in_car == 0) {
            $.prossie3_lm5.turnToFacePlayer($.player);
          }
          //"The vehicle has been wrecked!"
          //"A girl has died!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"The vehicle has been wrecked!"
            //"A girl has died!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie3_lm5.followPlayer($.player);
              $.radarped_prossie3_lm5.remove();
              $.flag_blip_on_prossie3_lm5 = 0;
              //"The vehicle has been wrecked!"
              //"A girl has died!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie3_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                //"The vehicle has been wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle has been wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie3_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie3_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie3_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie3_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
                      $.flag_blip_on_prossie3_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie3_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie3_lm5 == 1) {
                      $.prossie3_lm5.followPlayer($.player);
                      $.radarped_prossie3_lm5.remove();
                      $.flag_blip_on_prossie3_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie3_lm5_in_car = 1;
              $.prossie3_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie3_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie3_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie3_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie3_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
            $.flag_blip_on_prossie3_lm5 = 1;
            $.flag_prossie3_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie3_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie3_lm5 == 1) {
            $.prossie3_lm5.followPlayer($.player);
            $.radarped_prossie3_lm5.remove();
            $.flag_blip_on_prossie3_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie3_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie3_at_ball == 0 && $.flag_prossie3_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie3_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie3_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie3_lm5.leaveGroup();
          if ($.prossie3_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie3_lm5.storeCarIsIn();
            $.prossie3_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie3_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      if ($.flag_prossie3_in_car_park == 1) {
        //"A girl has died!"
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie3_lm5.isInAnyCar()) && $.flag_prossie3_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie3_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie3_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie3_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie3_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie3_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie3_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie3_lm5.removeElegantly();
          $.flag_prossie3_at_ball = 1;
        }
        if ($.flag_prossie3_told_to_go_into_ball == 1) {
          if ($.flag_prossie3_at_ball == 0) {
            if ($.flag_timer_prossie3_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie3_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie3_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    // checks for prossie 5
    if ($.flag_prossie4_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie4_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie4_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message4_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message4_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message4_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie4_lm5_in_car == 0) {
            $.prossie4_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie4_lm5.followPlayer($.player);
              $.radarped_prossie4_lm5.remove();
              $.flag_blip_on_prossie4_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie4_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie4_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie4_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie4_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie4_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
                      $.flag_blip_on_prossie4_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie4_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie4_lm5 == 1) {
                      $.prossie4_lm5.followPlayer($.player);
                      $.radarped_prossie4_lm5.remove();
                      $.flag_blip_on_prossie4_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie4_lm5_in_car = 1;
              $.prossie4_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie4_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie4_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie4_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie4_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
            $.flag_blip_on_prossie4_lm5 = 1;
            $.flag_prossie4_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie4_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie4_lm5 == 1) {
            $.prossie4_lm5.followPlayer($.player);
            $.radarped_prossie4_lm5.remove();
            $.flag_blip_on_prossie4_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie4_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie4_at_ball == 0 && $.flag_prossie4_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie4_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie4_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie4_lm5.leaveGroup();
          if ($.prossie4_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie4_lm5.storeCarIsIn();
            $.prossie4_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie4_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie4_in_car_park == 1) {
        //"A girl has died!"
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie4_lm5.isInAnyCar()) && $.flag_prossie4_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie4_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie4_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie4_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie4_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie4_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie4_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie4_lm5.removeElegantly();
          $.flag_prossie4_at_ball = 1;
        }
        if ($.flag_prossie4_told_to_go_into_ball == 1) {
          if ($.flag_prossie4_at_ball == 0) {
            if ($.flag_timer_prossie4_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie4_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie4_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    // checks for prossie 6
    if ($.flag_prossie5_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie5_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie5_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message5_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message5_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message5_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie5_lm5_in_car == 0) {
            $.prossie5_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie5_lm5.followPlayer($.player);
              $.radarped_prossie5_lm5.remove();
              $.flag_blip_on_prossie5_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie5_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie5_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie5_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie5_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie5_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
                      $.flag_blip_on_prossie5_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie5_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie5_lm5 == 1) {
                      $.prossie5_lm5.followPlayer($.player);
                      $.radarped_prossie5_lm5.remove();
                      $.flag_blip_on_prossie5_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie5_lm5_in_car = 1;
              $.prossie5_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie5_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie5_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie5_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie5_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
            $.flag_blip_on_prossie5_lm5 = 1;
            $.flag_prossie5_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie5_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie5_lm5 == 1) {
            $.prossie5_lm5.followPlayer($.player);
            $.radarped_prossie5_lm5.remove();
            $.flag_blip_on_prossie5_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie5_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie5_at_ball == 0 && $.flag_prossie5_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie5_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie5_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie5_lm5.leaveGroup();
          if ($.prossie5_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie5_lm5.storeCarIsIn();
            $.prossie5_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie5_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie5_in_car_park == 1) {
        //"A girl has died!"
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie5_lm5.isInAnyCar()) && $.flag_prossie5_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie5_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie5_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie5_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          ++$.counter_no_of_girls_at_the_ball;
          $.player.clearWantedLevel();
          $.flag_prossie5_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie5_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie5_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie5_lm5.removeElegantly();
          $.flag_prossie5_at_ball = 1;
        }
        if ($.flag_prossie5_told_to_go_into_ball == 1) {
          if ($.flag_prossie5_at_ball == 0) {
            if ($.flag_timer_prossie5_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie5_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie5_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    // checks for prossie 7
    if ($.flag_prossie6_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie6_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie6_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message6_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message6_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message6_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie6_lm5_in_car == 0) {
            $.prossie6_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie6_lm5.followPlayer($.player);
              $.radarped_prossie6_lm5.remove();
              $.flag_blip_on_prossie6_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie6_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie6_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie6_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie6_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie6_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
                      $.flag_blip_on_prossie6_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie6_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie6_lm5 == 1) {
                      $.prossie6_lm5.followPlayer($.player);
                      $.radarped_prossie6_lm5.remove();
                      $.flag_blip_on_prossie6_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie6_lm5_in_car = 1;
              $.prossie6_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie6_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie6_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie6_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie6_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
            $.flag_blip_on_prossie6_lm5 = 1;
            $.flag_prossie6_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie6_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie6_lm5 == 1) {
            $.prossie6_lm5.followPlayer($.player);
            $.radarped_prossie6_lm5.remove();
            $.flag_blip_on_prossie6_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie6_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie6_at_ball == 0 && $.flag_prossie6_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie6_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie6_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie6_lm5.leaveGroup();
          if ($.prossie6_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie6_lm5.storeCarIsIn();
            $.prossie6_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie6_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie6_in_car_park == 1) {
        //"A girl has died!"
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie6_lm5.isInAnyCar()) && $.flag_prossie6_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie6_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie6_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie6_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie6_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie6_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie6_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie6_lm5.removeElegantly();
          $.flag_prossie6_at_ball = 1;
        }
        if ($.flag_prossie6_told_to_go_into_ball == 1) {
          if ($.flag_prossie6_at_ball == 0) {
            if ($.flag_timer_prossie6_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie6_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie6_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    // checks for prossie 8
    if ($.flag_prossie7_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie7_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie7_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message7_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message7_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message7_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie7_lm5_in_car == 0) {
            $.prossie7_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie7_lm5.followPlayer($.player);
              $.radarped_prossie7_lm5.remove();
              $.flag_blip_on_prossie7_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie7_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie7_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie7_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie7_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie7_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
                      $.flag_blip_on_prossie7_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie7_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie7_lm5 == 1) {
                      $.prossie7_lm5.followPlayer($.player);
                      $.radarped_prossie7_lm5.remove();
                      $.flag_blip_on_prossie7_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie7_lm5_in_car = 1;
              $.prossie7_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie7_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie7_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie7_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie7_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
            $.flag_blip_on_prossie7_lm5 = 1;
            $.flag_prossie7_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie7_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie7_lm5 == 1) {
            $.prossie7_lm5.followPlayer($.player);
            $.radarped_prossie7_lm5.remove();
            $.flag_blip_on_prossie7_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie7_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie7_at_ball == 0 && $.flag_prossie7_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie7_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie7_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie7_lm5.leaveGroup();
          if ($.prossie7_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie7_lm5.storeCarIsIn();
            $.prossie7_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie7_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie7_in_car_park == 1) {
        //"A girl has died!"
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie7_lm5.isInAnyCar()) && $.flag_prossie7_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie7_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie7_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie7_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie7_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie7_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie7_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie7_lm5.removeElegantly();
          $.flag_prossie7_at_ball = 1;
        }
        if ($.flag_prossie7_told_to_go_into_ball == 1) {
          if ($.flag_prossie7_at_ball == 0) {
            if ($.flag_timer_prossie7_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie7_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie7_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    //"A girl has died!"
    //"You need a car!"
    //"The vehicle is wrecked!"
    //"You have left one of the girls behind go and get her!"
    //"Get a bigger car!"
    //room message
    //room left in car
    //stopped
    // locate
    //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    //++ counter_no_of_girls_at_the_ball
    //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
    if ($.flag_prossie8_at_ball == 0) {
      //"A girl has died!"
      if (Char.IsDead($.prossie8_lm5)) {
        //"A girl has died!"
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      //"You need a car!"
      //"A girl has died!"
      //"The vehicle is wrecked!"
      //"You have left one of the girls behind go and get her!"
      //"Get a bigger car!"
      //room message
      //room left in car
      //stopped
      // locate
      if ($.flag_prossie8_lm5_in_car == 0) {
        //"You need a car!"
        if ($.player.locateOnFootChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, false /* FALSE */) && $.flag_had_car_message8_lm5 == 0) {
          //"You need a car!"
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message8_lm5 = 1;
        }
        if (!($.player.locateAnyMeansChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, false /* FALSE */))) {
          $.flag_had_car_message8_lm5 = 0;
        }
        //"A girl has died!"
        //"The vehicle is wrecked!"
        //"You have left one of the girls behind go and get her!"
        //"Get a bigger car!"
        //room message
        //room left in car
        //stopped
        // locate
        if ($.player.locateInCarChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, false /* FALSE */)) {
          if ($.flag_prossie8_lm5_in_car == 0) {
            $.prossie8_lm5.turnToFacePlayer($.player);
          }
          //"A girl has died!"
          //"The vehicle is wrecked!"
          //"You have left one of the girls behind go and get her!"
          //"Get a bigger car!"
          //room message
          //room left in car
          //stopped
          if ($.player.isStopped()) {
            if ($.player.isInAnyCar()) {
              $.vehicle_lm5 = $.player.storeCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.getMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.getNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            //"A girl has died!"
            //"The vehicle is wrecked!"
            //"You have left one of the girls behind go and get her!"
            //"Get a bigger car!"
            //room message
            //room left in car
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie8_lm5.followPlayer($.player);
              $.radarped_prossie8_lm5.remove();
              $.flag_blip_on_prossie8_lm5 = 0;
              //"A girl has died!"
              //"The vehicle is wrecked!"
              //"You have left one of the girls behind go and get her!"
              while (!($.prossie8_lm5.isInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                //"A girl has died!"
                if ($.number_of_dead_prossies > 0) {
                  //"A girl has died!"
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"The vehicle is wrecked!"
                if (Car.IsDead($.vehicle_lm5)) {
                  //"The vehicle is wrecked!"
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                //"A girl has died!"
                //"You have left one of the girls behind go and get her!"
                if ($.flag_prossie8_at_ball == 0) {
                  //"A girl has died!"
                  //"You have left one of the girls behind go and get her!"
                  if (Char.IsDead($.prossie8_lm5)) {
                    //"A girl has died!"
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    //"You have left one of the girls behind go and get her!"
                    if (!($.prossie8_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie8_lm5 == 0) {
                      //"You have left one of the girls behind go and get her!"
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
                      $.flag_blip_on_prossie8_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.locateAnyMeansChar2D($.prossie8_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie8_lm5 == 1) {
                      $.prossie8_lm5.followPlayer($.player);
                      $.radarped_prossie8_lm5.remove();
                      $.flag_blip_on_prossie8_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie8_lm5_in_car = 1;
              $.prossie8_lm5.setRunning(false /* FALSE */);
            }
            else {
              //"Get a bigger car!"
              //room message
              if ($.flag_had_room_message_lm5 == 0) {
                //"Get a bigger car!"
                Text.PrintNow("LM5_1", 7000, 1);
                $.flag_had_room_message_lm5 = 1;
              }
            }
          }
        }
        else {
          $.flag_had_room_message_lm5 = 0;
        }
      }
      //"You have left one of the girls behind go and get her!"
      //"A girl has died!"
      if ($.flag_prossie8_lm5_in_car == 1) {
        //"You have left one of the girls behind go and get her!"
        if ($.flag_prossie8_in_car_park == 0) {
          //"You have left one of the girls behind go and get her!"
          if (!($.prossie8_lm5.isInPlayersGroup($.player)) && $.flag_blip_on_prossie8_lm5 == 0) {
            //"You have left one of the girls behind go and get her!"
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
            $.flag_blip_on_prossie8_lm5 = 1;
            $.flag_prossie8_lm5_in_car = 0;
          }
          if ($.player.locateAnyMeansChar2D($.prossie8_lm5, 8.0, 8.0, false /* FALSE */) && $.flag_blip_on_prossie8_lm5 == 1) {
            $.prossie8_lm5.followPlayer($.player);
            $.radarped_prossie8_lm5.remove();
            $.flag_blip_on_prossie8_lm5 = 0;
          }
        }
        //"A girl has died!"
        if ($.prossie8_lm5.isStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, false /* FALSE */) && $.flag_prossie8_at_ball == 0 && $.flag_prossie8_in_car_park == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie8_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie8_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie8_lm5.leaveGroup();
          if ($.prossie8_lm5.isInAnyCar()) {
            $.vehicle_lm5 = $.prossie8_lm5.storeCarIsIn();
            $.prossie8_lm5.setObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie8_in_car_park = 1;
        }
      }
      //"A girl has died!"
      //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      //++ counter_no_of_girls_at_the_ball
      //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
      if ($.flag_prossie8_in_car_park == 1) {
        //"A girl has died!"
        //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if (!($.prossie8_lm5.isInAnyCar()) && $.flag_prossie8_told_to_go_into_ball == 0) {
          await asyncWait(0);
          //"A girl has died!"
          if ($.flag_prossie8_at_ball == 0) {
            //"A girl has died!"
            if (Char.IsDead($.prossie8_lm5)) {
              //"A girl has died!"
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie8_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          //	PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.clearWantedLevel();
          $.flag_prossie8_told_to_go_into_ball = 1;
        }
        //++ counter_no_of_girls_at_the_ball
        //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
        if ($.prossie8_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie8_lm5.setIdle();
          //++ counter_no_of_girls_at_the_ball
          //PRINT_WITH_NUMBER_NOW ( LM5_8 ) counter_no_of_girls_at_the_ball 5000 1 // Girls at ball
          $.prossie8_lm5.removeElegantly();
          $.flag_prossie8_at_ball = 1;
        }
        if ($.flag_prossie8_told_to_go_into_ball == 1) {
          if ($.flag_prossie8_at_ball == 0) {
            if ($.flag_timer_prossie8_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie8_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie8_lm5.setCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
  }
  //"You ran out of time!"
  // Mission Luigi1 failed
  if ($.counter_no_of_girls_at_the_ball < 4) {
    //"You ran out of time!"
    Text.PrintNow("OUTTIME", 5000, 1);
    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOTO → mission_luigi5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_luigi5_passed"); // fallback: would break linear control flow
  }
}

async function mission_luigi5_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission Luigi1 passed
  return;
}

async function mission_luigi5_passed() {
  Hud.FreezeTimer(true /* TRUE */);
  // SCM GOSUB mission_end_cutscene
  await mission_end_cutscene();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.counter_girls_trying_to_get_to_ball > 0) {
    $.sphere_lm5.remove();
    Hud.SwitchWidescreen(true /* ON */);
    $.player.setControl(false /* OFF */);
    Game.SetPoliceIgnorePlayer($.player, true /* ON */);
    Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
    World.ClearArea(1006.845, -885.5, 14.7, 2.0, true /* TRUE */);
    Camera.SetFixedPosition(1006.845, -885.5, 14.7, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(1005.9, -885.0, 14.6, 2 /* JUMP_CUT */);
    // SCM GOSUB mission_end_cutscene2
    await mission_end_cutscene2();
    // fallback if label was not emitted as async function: no-op continues linearly
    Hud.SwitchWidescreen(false /* OFF */);
    Camera.RestoreJumpcut();
    $.player.setControl(true /* ON */);
    Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  }
  $.flag_luigi_mission5_passed = 1;
  $.flag_all_luigi_missions_passed = 1;
  Stat.RegisterMissionPassed("LM5");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.score_lm5 = $.counter_no_of_girls_at_the_ball * 500;
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", $.score_lm5, 10000, 1);
  $.player.addScore($.score_lm5);
  $.player.clearWantedLevel();
  //"Bonus of $2000!"
  if ($.counter_no_of_girls_at_the_ball == 8) {
    //"Bonus of $2000!"
    Text.PrintWithNumberNow("BONUS", 2000, 5000, 1);
    $.player.addScore(2000);
  }
  $.luigi_contact_blip.remove();
  // mission cleanup
  return;
}

async function mission_cleanup_luigi5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  $.gen_car28.switch(101);
  $.ball_sounds.remove();
  $.sphere_lm5.remove();
  $.fuzzball_sign.markAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE2`);
  Hud.ClearTimer($.timer_lm5);
  Hud.FreezeTimer(false /* FALSE */);
  Hud.ClearCounter($.counter_no_of_girls_at_the_ball);
  $.radar_blip_coord1_lm5.remove();
  $.radarped_prossie1_lm5.remove();
  $.radarped_prossie2_lm5.remove();
  $.radarped_prossie3_lm5.remove();
  $.radarped_prossie4_lm5.remove();
  $.radarped_prossie5_lm5.remove();
  $.radarped_prossie6_lm5.remove();
  $.radarped_prossie7_lm5.remove();
  $.radarped_prossie8_lm5.remove();
  Mission.Finish();
  // START_NEW_SCRIPT close_fuzz_doors
  return;
}

async function check_for_dead_prossies() {
  $.number_of_dead_prossies = 0;
  if ($.flag_prossie1_at_ball == 0) {
    if (Char.IsDead($.prossie1_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie2_at_ball == 0) {
    if (Char.IsDead($.prossie2_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie3_at_ball == 0) {
    if (Char.IsDead($.prossie3_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie4_at_ball == 0) {
    if (Char.IsDead($.prossie4_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie5_at_ball == 0) {
    if (Char.IsDead($.prossie5_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie6_at_ball == 0) {
    if (Char.IsDead($.prossie6_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie7_at_ball == 0) {
    if (Char.IsDead($.prossie7_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  if ($.flag_prossie8_at_ball == 0) {
    if (Char.IsDead($.prossie8_lm5)) {
      $.number_of_dead_prossies++;
    }
  }
  return;
}

async function mission_end_cutscene() {
  if ($.flag_prossie1_at_ball == 0) {
    if ($.flag_prossie1_in_car_park == 1) {
      if (!(Char.IsDead($.prossie1_lm5))) {
        $.prossie1_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie2_at_ball == 0) {
    if ($.flag_prossie2_in_car_park == 1) {
      if (!(Char.IsDead($.prossie2_lm5))) {
        $.prossie2_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie3_at_ball == 0) {
    if ($.flag_prossie3_in_car_park == 1) {
      if (!(Char.IsDead($.prossie3_lm5))) {
        $.prossie3_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie4_at_ball == 0) {
    if ($.flag_prossie4_in_car_park == 1) {
      if (!(Char.IsDead($.prossie4_lm5))) {
        $.prossie4_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie5_at_ball == 0) {
    if ($.flag_prossie5_in_car_park == 1) {
      if (!(Char.IsDead($.prossie5_lm5))) {
        $.prossie5_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie6_at_ball == 0) {
    if ($.flag_prossie6_in_car_park == 1) {
      if (!(Char.IsDead($.prossie6_lm5))) {
        $.prossie6_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie7_at_ball == 0) {
    if ($.flag_prossie7_in_car_park == 1) {
      if (!(Char.IsDead($.prossie7_lm5))) {
        $.prossie7_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie8_at_ball == 0) {
    if ($.flag_prossie8_in_car_park == 1) {
      if (!(Char.IsDead($.prossie8_lm5))) {
        $.prossie8_lm5.setObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  return;
}

async function mission_end_cutscene2() {
  timerb = 0;
  // This should clear the area
  while ($.counter_girls_trying_to_get_to_ball > 0) {
    await asyncWait(0);
    // This should clear the area
    World.ClearArea(1000.4, -886.7, 14.4, 6.0, false /* FALSE */);
    if ($.flag_prossie1_at_ball == 0) {
      if (!(Char.IsDead($.prossie1_lm5))) {
        if (timerb > 20000) {
          $.prossie1_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie1_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie1_lm5.setIdle();
          $.prossie1_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie1_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie1_at_ball = 1;
      }
    }
    if ($.flag_prossie2_at_ball == 0) {
      if (!(Char.IsDead($.prossie2_lm5))) {
        if (timerb > 20000) {
          $.prossie2_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie2_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie2_lm5.setIdle();
          $.prossie2_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie2_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie2_at_ball = 1;
      }
    }
    if ($.flag_prossie3_at_ball == 0) {
      if (!(Char.IsDead($.prossie3_lm5))) {
        if (timerb > 20000) {
          $.prossie3_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie3_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie3_lm5.setIdle();
          $.prossie3_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie3_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie3_at_ball = 1;
      }
    }
    if ($.flag_prossie4_at_ball == 0) {
      if (!(Char.IsDead($.prossie4_lm5))) {
        if (timerb > 20000) {
          $.prossie4_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie4_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie4_lm5.setIdle();
          $.prossie4_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie4_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie4_at_ball = 1;
      }
    }
    if ($.flag_prossie5_at_ball == 0) {
      if (!(Char.IsDead($.prossie5_lm5))) {
        if (timerb > 20000) {
          $.prossie5_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie5_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie5_lm5.setIdle();
          $.prossie5_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie5_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie5_at_ball = 1;
      }
    }
    if ($.flag_prossie6_at_ball == 0) {
      if (!(Char.IsDead($.prossie6_lm5))) {
        if (timerb > 20000) {
          $.prossie6_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie6_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie6_lm5.setIdle();
          $.prossie6_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie6_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie6_at_ball = 1;
      }
    }
    if ($.flag_prossie7_at_ball == 0) {
      if (!(Char.IsDead($.prossie7_lm5))) {
        if (timerb > 20000) {
          $.prossie7_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie7_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie7_lm5.setIdle();
          $.prossie7_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie7_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie7_at_ball = 1;
      }
    }
    if ($.flag_prossie8_at_ball == 0) {
      if (!(Char.IsDead($.prossie8_lm5))) {
        if (timerb > 20000) {
          $.prossie8_lm5.setCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie8_lm5.locateOnFoot2D(999.0, -891.0, 1.0, 1.0, false /* FALSE */)) {
          $.prossie8_lm5.setIdle();
          $.prossie8_lm5.removeElegantly();
          --$.counter_girls_trying_to_get_to_ball;
          $.flag_prossie8_at_ball = 1;
        }
      }
      else {
        --$.counter_girls_trying_to_get_to_ball;
        $.flag_prossie8_at_ball = 1;
      }
    }
  }
  return;
  }
}

export async function luigi5() {
  // *****************************************************************************************
  // *****************************************Luigi mission 5*********************************
  // MissionBoundary
  // Mission Start Stuff
  // ScriptName
  // SCM GOSUB mission_start_luigi5
  await mission_start_luigi5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_luigi5_failed
    await mission_luigi5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_luigi5
  await mission_cleanup_luigi5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Vehicles for mission
  // MissionBoundary
  // radar_blips
  // VAR_INT vehicle_lm5
  // VAR_INT flag_blip_on_prossie1_lm5
  // VAR_INT flag_blip_on_prossie2_lm5
  // VAR_INT flag_blip_on_prossie3_lm5
  // VAR_INT flag_blip_on_prossie4_lm5
  // VAR_INT flag_blip_on_prossie5_lm5
  // VAR_INT flag_blip_on_prossie6_lm5
  // VAR_INT flag_blip_on_prossie7_lm5
  // VAR_INT flag_blip_on_prossie8_lm5
  //location of the fuzz ball
  // VAR_INT radar_blip_coord1_lm5
  //blip for real char
  // VAR_INT radarped_prossie1_lm5
  //blip for real char
  // VAR_INT radarped_prossie2_lm5
  //blip for real char
  // VAR_INT radarped_prossie3_lm5
  //blip for real char
  // VAR_INT radarped_prossie4_lm5
  //blip for real char
  // VAR_INT radarped_prossie5_lm5
  //blip for real char
  // VAR_INT radarped_prossie6_lm5
  //blip for real char
  // VAR_INT radarped_prossie7_lm5
  //blip for real char
  // timers
  // VAR_INT radarped_prossie8_lm5
  // Characters for mission
  // VAR_INT timer_lm5
  // VAR_INT prossie1_lm5
  // VAR_INT prossie2_lm5
  // VAR_INT prossie3_lm5
  // VAR_INT prossie4_lm5
  // VAR_INT prossie5_lm5
  // VAR_INT prossie6_lm5
  // VAR_INT prossie7_lm5
  //Character created and at ball flags
  // VAR_INT prossie8_lm5
  // VAR_INT flag_prossie1_at_ball
  // VAR_INT flag_prossie2_at_ball
  // VAR_INT flag_prossie3_at_ball
  // VAR_INT flag_prossie4_at_ball
  // VAR_INT flag_prossie5_at_ball
  // VAR_INT flag_prossie6_at_ball
  // VAR_INT flag_prossie7_at_ball
  // girls in car flag
  // VAR_INT flag_prossie8_at_ball
  // VAR_INT flag_prossie1_lm5_in_car
  // VAR_INT flag_prossie2_lm5_in_car
  // VAR_INT flag_prossie3_lm5_in_car
  // VAR_INT flag_prossie4_lm5_in_car
  // VAR_INT flag_prossie5_lm5_in_car
  // VAR_INT flag_prossie6_lm5_in_car
  // VAR_INT flag_prossie7_lm5_in_car
  // no of passenger stuff
  // VAR_INT flag_prossie8_lm5_in_car
  // VAR_INT max_no_of_passengers_lm5
  // VAR_INT room_left_in_car_lm5
  // VAR_INT no_of_passengers_lm5
  // Scoreing stuff
  // VAR_INT flag_had_room_message_lm5
  // VAR_INT counter_no_of_girls_at_the_ball
  // PEds in to the building stuff
  // VAR_INT score_lm5
  // VAR_INT flag_prossie2_in_car_park
  // VAR_INT flag_prossie2_told_to_go_into_ball
  // VAR_INT flag_prossie1_in_car_park
  // VAR_INT flag_prossie1_told_to_go_into_ball
  // VAR_INT flag_prossie3_in_car_park
  // VAR_INT flag_prossie3_told_to_go_into_ball
  // VAR_INT flag_prossie4_in_car_park
  // VAR_INT flag_prossie4_told_to_go_into_ball
  // VAR_INT flag_prossie5_in_car_park
  // VAR_INT flag_prossie5_told_to_go_into_ball
  // VAR_INT flag_prossie6_in_car_park
  // VAR_INT flag_prossie6_told_to_go_into_ball
  // VAR_INT flag_prossie7_in_car_park
  // VAR_INT flag_prossie7_told_to_go_into_ball
  // VAR_INT flag_prossie8_in_car_park
  // VAR_INT flag_prossie8_told_to_go_into_ball
  // VAR_INT fuzzball_sign
  // VAR_INT number_of_dead_prossies
  // Door Stuff
  // VAR_INT ball_sounds
  // VAR_INT flag_moved_door1_lm5
  // Message from girl to tell player to get a car
  // VAR_INT flag_moved_door2_lm5
  // VAR_INT flag_had_car_message1_lm5
  // VAR_INT flag_had_car_message2_lm5
  // VAR_INT flag_had_car_message3_lm5
  // VAR_INT flag_had_car_message4_lm5
  // VAR_INT flag_had_car_message5_lm5
  // VAR_INT flag_had_car_message6_lm5
  // VAR_INT flag_had_car_message7_lm5
  // VAR_INT flag_had_car_message8_lm5
  // VAR_INT sphere_lm5
  // VAR_INT cop_car1_lm5
  // VAR_INT cop_car2_lm5
  // VAR_INT counter_girls_trying_to_get_to_ball
  // If the girls get stuck
  // VAR_INT flag_timer_prossie1_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie2_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie3_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie4_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie5_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie6_lm5
  // If the girls get stuck
  // VAR_INT flag_timer_prossie7_lm5
  // If the girls get stuck
  // ******************************************Mission Start**********************************
  // VAR_INT flag_timer_prossie8_lm5
}
