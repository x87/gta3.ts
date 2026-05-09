// Generated from Main/Commercial/kenji2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji2() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_damage_message_car1_km2 = 0;
  $.flag_player_damage_message_car2_km2 = 0;
  $.flag_player_damage_message_car3_km2 = 0;
  $.flag_player_damage_message_car4_km2 = 0;
  $.flag_player_damage_message_car5_km2 = 0;
  $.flag_car1_in_garage = 0;
  $.flag_car2_in_garage = 0;
  $.flag_car3_in_garage = 0;
  $.flag_car4_in_garage = 0;
  $.flag_car5_in_garage = 0;
  $.counter_number_of_cars_in_garage_km2 = 0;
  $.flag_blip_car1_on = 0;
  $.flag_blip_car2_on = 0;
  $.flag_blip_car3_on = 0;
  $.flag_blip_car4_on = 0;
  $.flag_blip_car5_on = 0;
  $.flag_car1_destroyed = 0;
  $.flag_car2_destroyed = 0;
  $.flag_car3_destroyed = 0;
  $.flag_car4_destroyed = 0;
  $.flag_car5_destroyed = 0;
  $.flag_garage_no_blip_car1_km2 = 0;
  $.flag_garage_no_blip_car2_km2 = 0;
  $.flag_garage_no_blip_car3_km2 = 0;
  $.flag_garage_no_blip_car4_km2 = 0;
  $.flag_garage_no_blip_car5_km2 = 0;
  $.flag_spray_blip_on_car1_km2 = 0;
  $.flag_spray_blip_on_car2_km2 = 0;
  $.flag_spray_blip_on_car3_km2 = 0;
  $.flag_spray_blip_on_car4_km2 = 0;
  //timer_km2 = 601000  //10 mins for Obbe, Les
  $.flag_spray_blip_on_car5_km2 = 0;
  //6 mins
  $.timer_km2 = 361000;
  $.flag_player_had_garage_car1_message = 0;
  $.flag_player_had_garage_car2_message = 0;
  $.flag_player_had_garage_car3_message = 0;
  $.flag_player_had_garage_car4_message = 0;
  $.flag_player_had_garage_car5_message = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, MINNOTE);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadAllModelsNow();
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 890.9 -416.9 15.0 6.0 backdoor FALSE
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k2_gis);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  //CREATE_CUTSCENE_OBJECT PED_GANG_YAKUZA_A cs_yakuza
  //SET_CUTSCENE_ANIM cs_yakuza gang07
  $.cs_kenji.setAnim($.kenji);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.setAnim($.kenji);
  $.cs_note = CutsceneObject.Create(hier`cutobj03`);
  $.cs_note.setAnim(MINNOTE);
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
  while ($.cs_time < 3902) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"It is impossible to over-estimate the importance of etiquette in this line of work."
  Text.PrintNow("KM2_A", 10000, 1);
  while ($.cs_time < 8570) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"To my eternal shame, a man once did me a favor and I have never had the opportunity to repay his kindness."
  Text.PrintNow("KM2_B", 10000, 1);
  while ($.cs_time < 15119) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"The man's weakness is motor cars and he has requested that we acquire him certain models for his collection."
  Text.PrintNow("KM2_C", 10000, 1);
  while ($.cs_time < 21459) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Needless to say, we must give him the cars as a gift, to repay the debt that is owed to him."
  Text.PrintNow("KM2_D", 10000, 1);
  while ($.cs_time < 27033) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"You must obtain the cars on the list and deliver them to a garage behind the car park in Newport. My honor demands it.
  Text.PrintNow("KM2_E", 10000, 1);
  while ($.cs_time < 33164) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"My honor demands it."
  Text.PrintNow("KM2_F", 10000, 1);
  while ($.cs_time < 34918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM2_F");
  while ($.cs_time < 39333) {
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
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  // **************************************END OF CUSTSCENE***********************************
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  //car1 to steal
  Streaming.RequestModel(car`CHEETAH`);
  // car3 to steal
  Streaming.RequestModel(car`STINGER`);
  // car4 to steal
  //REQUEST_MODEL CAR_BANSHEE // car2 to steal
  //REQUEST_MODEL CAR_LANDSTALKER  // car5 to steal
  Streaming.RequestModel(car`INFERNUS`);
  //OR NOT HAS_MODEL_LOADED CAR_LANDSTALKER
  //OR NOT HAS_MODEL_LOADED CAR_BANSHEE
  while (!(Streaming.HasModelLoaded(car`CHEETAH`)) || !(Streaming.HasModelLoaded(car`STINGER`)) || !(Streaming.HasModelLoaded(car`INFERNUS`))) {
    await asyncWait(0);
  }
  //"~g~Remember the ~r~cars~g~ have to be in mint condition to be accepted by the ~p~garage~g~."
  Text.PrintNow("KM2_3", 5000, 1);
  // creates car1 the testarossa
  $.radar_blip_coord1_km2 = Blip.AddForCoord(375.0, -506.9, -100.0);
  $.car_to_steal1_km2 = Car.Create(98 /* CAR_CHEETAH */, 348.3, -0.5, -100.0);
  $.car_to_steal1_km2.setHeading(270.0);
  $.car_to_steal1_km2.changeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal1_km2.setCanRespray(false /* FALSE */);
  $.radar_blip_car1_km2 = Blip.AddForCar($.car_to_steal1_km2);
  /*
  // creates car2 the viper
  CREATE_CAR CAR_BANSHEE 211.2 -312.4 15.5 car_to_steal2_km2
  CHANGE_CAR_COLOUR car_to_steal2_km2 CARCOLOUR_RED4 CARCOLOUR_RED4
  SET_CAN_RESPRAY_CAR car_to_steal2_km2 FALSE
  ADD_BLIP_FOR_CAR car_to_steal2_km2 radar_blip_car2_km2
  SET_CAR_HEADING car_to_steal2_km2 90.0
  flag_blip_car2_on = 1
  */
  // creates car3 the boxster
  $.flag_blip_car1_on = 1;
  $.car_to_steal3_km2 = Car.Create(85 /* CAR_STINGER */, -71.1, -1467.4, 25.1);
  $.car_to_steal3_km2.changeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal3_km2.setCanRespray(false /* FALSE */);
  $.radar_blip_car3_km2 = Blip.AddForCar($.car_to_steal3_km2);
  $.car_to_steal3_km2.setHeading(270.0);
  // creates car4 the Diablo
  $.flag_blip_car3_on = 1;
  $.car_to_steal4_km2 = Car.Create(94 /* CAR_INFERNUS */, -61.7, -358.4, 15.2);
  $.car_to_steal4_km2.changeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal4_km2.setCanRespray(false /* FALSE */);
  $.radar_blip_car4_km2 = Blip.AddForCar($.car_to_steal4_km2);
  $.car_to_steal4_km2.setHeading(90.0);
  /*
  // creates car5 the 4X4
  CREATE_CAR CAR_LANDSTALKER 200.7 -1006.2 25.1 car_to_steal5_km2
  CHANGE_CAR_COLOUR car_to_steal5_km2 CARCOLOUR_RED4 CARCOLOUR_RED4
  SET_CAN_RESPRAY_CAR car_to_steal5_km2 FALSE
  ADD_BLIP_FOR_CAR car_to_steal5_km2 radar_blip_car5_km2
  SET_CAR_HEADING car_to_steal5_km2 90.0
  flag_blip_car5_on = 1
  */
  $.flag_blip_car4_on = 1;
  // waiting for all 5 vehicles to be in the range
  Hud.DisplayTimer($.timer_km2);
  // if player in car checks for car damage and blip stuff
  // checks for car 1
  // Testarossa
  //"Car delivered"
  //"The vehicle's wrecked!"
  //You've flipped your wheels!"
  //"Get out of the vehicle and walk outside!"
  //"Get the car reapaired the boss wants it mint!"
  /*
  // checks for car 2
  IF flag_car2_in_garage = 0
  IF IS_CAR_IN_MISSION_GARAGE garage_km2 // Viper
  AND flag_garage_no_blip_car2_km2 = 1
  flag_car2_destroyed = 1
  ++ counter_number_of_cars_in_garage_km2
  ADD_ONE_OFF_SOUND 380.3 -506.8 26.1 SOUND_PART_MISSION_COMPLETE
  PRINT_NOW ( KM2_2 ) 5000 1 //"Car delivered"
  flag_car2_in_garage = 1
  ENDIF
  IF flag_car2_destroyed = 0
  IF IS_CAR_DEAD car_to_steal2_km2
  PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
  flag_car2_destroyed = 1
  GOTO mission_kenji2_failed
  ELSE
  IF IS_CAR_UPSIDEDOWN car_to_steal2_km2
  AND IS_CAR_STOPPED car_to_steal2_km2
  PRINT_NOW ( UPSIDE ) 5000 1 //You've flipped your wheels!"
  GOTO mission_kenji2_failed
  ENDIF
  ENDIF
  IF IS_CAR_STOPPED_IN_AREA_3D car_to_steal2_km2 377.3 -511.4 25.1132 383.7 -502.0 30.0 FALSE
  IF NOT IS_CAR_VISIBLY_DAMAGED car_to_steal2_km2
  flag_garage_no_blip_car2_km2 = 1
  ENDIF
  IF DOES_GARAGE_CONTAIN_CAR garage_km2 car_to_steal2_km2
  IF flag_player_had_garage_car2_message = 0
  PRINT_NOW ( GARAGE1 ) 5000 1 //"Get out of the vehicle and walk outside!"
  flag_player_had_garage_car2_message = 1
  ENDIF
  ELSE
  flag_player_had_garage_car2_message = 0
  ENDIF
  ELSE
  flag_garage_no_blip_car2_km2 = 0
  ENDIF
  IF IS_PLAYER_IN_CAR player car_to_steal2_km2
  IF flag_blip_car2_on = 1
  REMOVE_BLIP radar_blip_car2_km2
  flag_blip_car2_on = 0
  ENDIF
  IF IS_CAR_VISIBLY_DAMAGED car_to_steal2_km2
  IF flag_player_damage_message_car2_km2 = 0
  PRINT_NOW ( KM2_1 ) 7000 1 //"Get the car reapaired the boss wants it mint!"
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
  flag_player_damage_message_car2_km2 = 1
  ENDIF
  IF flag_spray_blip_on_car2_km2 = 0
  ADD_SPRITE_BLIP_FOR_COORD 379.0 -493.8 25.2 RADAR_SPRITE_SPRAY spray_blip_km2
  flag_spray_blip_on_car2_km2 = 1
  ENDIF
  ELSE
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 car_to_steal2_km2
  flag_player_damage_message_car2_km2 = 0
  IF flag_spray_blip_on_car2_km2 = 1
  REMOVE_BLIP spray_blip_km2
  flag_spray_blip_on_car2_km2 = 0
  ENDIF
  ENDIF
  ELSE
  flag_player_damage_message_car2_km2 = 0
  IF flag_spray_blip_on_car2_km2 = 1
  REMOVE_BLIP spray_blip_km2
  flag_spray_blip_on_car2_km2 = 0
  ENDIF
  IF flag_blip_car2_on = 0
  IF flag_garage_no_blip_car2_km2 = 0
  ADD_BLIP_FOR_CAR car_to_steal2_km2 radar_blip_car2_km2
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
  flag_blip_car2_on = 1
  ENDIF
  ENDIF
  ENDIF
  ENDIF
  ENDIF
  */
  // checks for car 3
  // Boxter
  // checks for car 4
  // Diablo
  /*
  // checks for car 5
  IF flag_car5_in_garage = 0
  IF IS_CAR_IN_MISSION_GARAGE garage_km2 // Offroad
  AND flag_garage_no_blip_car5_km2 = 1
  flag_car5_destroyed = 1
  ++ counter_number_of_cars_in_garage_km2
  ADD_ONE_OFF_SOUND 380.3 -506.8 26.1 SOUND_PART_MISSION_COMPLETE
  PRINT_NOW ( KM2_2 ) 5000 1 //"Car delivered"
  flag_car5_in_garage = 1
  ENDIF
  IF flag_car5_destroyed = 0
  IF IS_CAR_DEAD car_to_steal5_km2
  PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
  flag_car5_destroyed = 1
  GOTO mission_kenji2_failed
  ELSE
  IF IS_CAR_UPSIDEDOWN car_to_steal5_km2
  AND IS_CAR_STOPPED car_to_steal5_km2
  PRINT_NOW ( UPSIDE ) 5000 1 //You've flipped your wheels!"
  GOTO mission_kenji2_failed
  ENDIF
  ENDIF
  IF IS_CAR_STOPPED_IN_AREA_3D car_to_steal5_km2 377.3 -511.4 25.1132 383.7 -502.0 30.0 FALSE
  IF NOT IS_CAR_VISIBLY_DAMAGED car_to_steal5_km2
  flag_garage_no_blip_car5_km2 = 1
  ENDIF
  IF DOES_GARAGE_CONTAIN_CAR garage_km2 car_to_steal5_km2
  IF flag_player_had_garage_car5_message = 0
  PRINT_NOW ( GARAGE1 ) 5000 1 //"Get out of the vehicle and walk outside!"
  flag_player_had_garage_car5_message = 1
  ENDIF
  ELSE
  flag_player_had_garage_car5_message = 0
  ENDIF
  ELSE
  flag_garage_no_blip_car5_km2 = 0
  ENDIF
  IF IS_PLAYER_IN_CAR player car_to_steal5_km2
  IF flag_blip_car5_on = 1
  REMOVE_BLIP radar_blip_car5_km2
  flag_blip_car5_on = 0
  ENDIF
  IF IS_CAR_VISIBLY_DAMAGED car_to_steal5_km2
  IF flag_player_damage_message_car5_km2 = 0
  PRINT_NOW ( KM2_1 ) 7000 1 //"Get the car reapaired the boss wants it mint!"
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
  flag_player_damage_message_car5_km2 = 1
  ENDIF
  IF flag_spray_blip_on_car5_km2 = 0
  ADD_SPRITE_BLIP_FOR_COORD 379.0 -493.8 25.2 RADAR_SPRITE_SPRAY spray_blip_km2
  flag_spray_blip_on_car5_km2 = 1
  ENDIF
  ELSE
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 car_to_steal5_km2
  flag_player_damage_message_car5_km2 = 0
  IF flag_spray_blip_on_car5_km2 = 1
  REMOVE_BLIP spray_blip_km2
  flag_spray_blip_on_car5_km2 = 0
  ENDIF
  ENDIF
  ELSE
  flag_player_damage_message_car5_km2 = 0
  IF flag_spray_blip_on_car5_km2 = 1
  REMOVE_BLIP spray_blip_km2
  flag_spray_blip_on_car5_km2 = 0
  ENDIF
  IF flag_blip_car5_on = 0
  IF flag_garage_no_blip_car5_km2 = 0
  ADD_BLIP_FOR_CAR car_to_steal5_km2 radar_blip_car5_km2
  SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
  flag_blip_car5_on = 1
  ENDIF
  ENDIF
  ENDIF
  ENDIF
  ENDIF
  */
  while ($.timer_km2 > 0) {
    await asyncWait(0);
    // if player in car checks for car damage and blip stuff
    // checks for car 1
    if ($.counter_number_of_cars_in_garage_km2 == 3) {
      // SCM GOTO → mission_kenji2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji2_passed"); // fallback: would break linear control flow
    }
    // Testarossa
    //"Car delivered"
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get out of the vehicle and walk outside!"
    //"Get the car reapaired the boss wants it mint!"
    /*
    // checks for car 2
    IF flag_car2_in_garage = 0
    IF IS_CAR_IN_MISSION_GARAGE garage_km2 // Viper
    AND flag_garage_no_blip_car2_km2 = 1
    flag_car2_destroyed = 1
    ++ counter_number_of_cars_in_garage_km2
    ADD_ONE_OFF_SOUND 380.3 -506.8 26.1 SOUND_PART_MISSION_COMPLETE
    PRINT_NOW ( KM2_2 ) 5000 1 //"Car delivered"
    flag_car2_in_garage = 1
    ENDIF
    IF flag_car2_destroyed = 0
    IF IS_CAR_DEAD car_to_steal2_km2
    PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
    flag_car2_destroyed = 1
    GOTO mission_kenji2_failed
    ELSE
    IF IS_CAR_UPSIDEDOWN car_to_steal2_km2
    AND IS_CAR_STOPPED car_to_steal2_km2
    PRINT_NOW ( UPSIDE ) 5000 1 //You've flipped your wheels!"
    GOTO mission_kenji2_failed
    ENDIF
    ENDIF
    IF IS_CAR_STOPPED_IN_AREA_3D car_to_steal2_km2 377.3 -511.4 25.1132 383.7 -502.0 30.0 FALSE
    IF NOT IS_CAR_VISIBLY_DAMAGED car_to_steal2_km2
    flag_garage_no_blip_car2_km2 = 1
    ENDIF
    IF DOES_GARAGE_CONTAIN_CAR garage_km2 car_to_steal2_km2
    IF flag_player_had_garage_car2_message = 0
    PRINT_NOW ( GARAGE1 ) 5000 1 //"Get out of the vehicle and walk outside!"
    flag_player_had_garage_car2_message = 1
    ENDIF
    ELSE
    flag_player_had_garage_car2_message = 0
    ENDIF
    ELSE
    flag_garage_no_blip_car2_km2 = 0
    ENDIF
    IF IS_PLAYER_IN_CAR player car_to_steal2_km2
    IF flag_blip_car2_on = 1
    REMOVE_BLIP radar_blip_car2_km2
    flag_blip_car2_on = 0
    ENDIF
    IF IS_CAR_VISIBLY_DAMAGED car_to_steal2_km2
    IF flag_player_damage_message_car2_km2 = 0
    PRINT_NOW ( KM2_1 ) 7000 1 //"Get the car reapaired the boss wants it mint!"
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
    flag_player_damage_message_car2_km2 = 1
    ENDIF
    IF flag_spray_blip_on_car2_km2 = 0
    ADD_SPRITE_BLIP_FOR_COORD 379.0 -493.8 25.2 RADAR_SPRITE_SPRAY spray_blip_km2
    flag_spray_blip_on_car2_km2 = 1
    ENDIF
    ELSE
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 car_to_steal2_km2
    flag_player_damage_message_car2_km2 = 0
    IF flag_spray_blip_on_car2_km2 = 1
    REMOVE_BLIP spray_blip_km2
    flag_spray_blip_on_car2_km2 = 0
    ENDIF
    ENDIF
    ELSE
    flag_player_damage_message_car2_km2 = 0
    IF flag_spray_blip_on_car2_km2 = 1
    REMOVE_BLIP spray_blip_km2
    flag_spray_blip_on_car2_km2 = 0
    ENDIF
    IF flag_blip_car2_on = 0
    IF flag_garage_no_blip_car2_km2 = 0
    ADD_BLIP_FOR_CAR car_to_steal2_km2 radar_blip_car2_km2
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
    flag_blip_car2_on = 1
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    */
    // checks for car 3
    if ($.flag_car1_in_garage == 0) {
      // Testarossa
      //"Car delivered"
      if ($.garage_km2.isCarInMission() && $.flag_garage_no_blip_car1_km2 == 1) {
        $.flag_car1_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        //"Car delivered"
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal1_km2))) {
          $.car_to_steal1_km2.delete();
        }
        $.flag_car1_in_garage = 1;
      }
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      //"Get out of the vehicle and walk outside!"
      //"Get the car reapaired the boss wants it mint!"
      if ($.flag_car1_destroyed == 0) {
        //"The vehicle's wrecked!"
        //You've flipped your wheels!"
        if (Car.IsDead($.car_to_steal1_km2)) {
          //"The vehicle's wrecked!"
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car1_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          //You've flipped your wheels!"
          if ($.car_to_steal1_km2.isUpsidedown() && $.car_to_steal1_km2.isStopped()) {
            //You've flipped your wheels!"
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        //"Get out of the vehicle and walk outside!"
        if ($.car_to_steal1_km2.isStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, false /* FALSE */)) {
          if (!($.car_to_steal1_km2.isVisiblyDamaged())) {
            $.flag_garage_no_blip_car1_km2 = 1;
          }
          //"Get out of the vehicle and walk outside!"
          if ($.garage_km2.doesContainCar($.car_to_steal1_km2)) {
            //"Get out of the vehicle and walk outside!"
            if ($.flag_player_had_garage_car1_message == 0) {
              //"Get out of the vehicle and walk outside!"
              Text.PrintNow("GARAGE1", 5000, 1);
              $.flag_player_had_garage_car1_message = 1;
            }
          }
          else {
            $.flag_player_had_garage_car1_message = 0;
          }
        }
        else {
          $.flag_garage_no_blip_car1_km2 = 0;
        }
        //"Get the car reapaired the boss wants it mint!"
        if ($.player.isInCar($.car_to_steal1_km2)) {
          if ($.flag_blip_car1_on == 1) {
            $.radar_blip_car1_km2.remove();
            $.flag_blip_car1_on = 0;
          }
          //"Get the car reapaired the boss wants it mint!"
          if ($.car_to_steal1_km2.isVisiblyDamaged()) {
            //"Get the car reapaired the boss wants it mint!"
            if ($.flag_player_damage_message_car1_km2 == 0) {
              //"Get the car reapaired the boss wants it mint!"
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_player_damage_message_car1_km2 = 1;
            }
            if ($.flag_spray_blip_on_car1_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car1_km2 = 1;
            }
          }
          else {
            $.garage_km2.setTargetCarForMission($.car_to_steal1_km2);
            $.flag_player_damage_message_car1_km2 = 0;
            if ($.flag_spray_blip_on_car1_km2 == 1) {
              $.spray_blip_km2.remove();
              $.flag_spray_blip_on_car1_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car1_km2 = 0;
          if ($.flag_spray_blip_on_car1_km2 == 1) {
            $.spray_blip_km2.remove();
            $.flag_spray_blip_on_car1_km2 = 0;
          }
          if ($.flag_blip_car1_on == 0) {
            if ($.flag_garage_no_blip_car1_km2 == 0) {
              $.radar_blip_car1_km2 = Blip.AddForCar($.car_to_steal1_km2);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_blip_car1_on = 1;
            }
          }
        }
      }
    }
    // Boxter
    //"Car delivered"
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get out of the vehicle and walk outside!"
    //"Get the car reapaired the boss wants it mint!"
    // checks for car 4
    if ($.flag_car3_in_garage == 0) {
      // Boxter
      //"Car delivered"
      if ($.garage_km2.isCarInMission() && $.flag_garage_no_blip_car3_km2 == 1) {
        $.flag_car3_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        //"Car delivered"
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal3_km2))) {
          $.car_to_steal3_km2.delete();
        }
        $.flag_car3_in_garage = 1;
      }
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      //"Get out of the vehicle and walk outside!"
      //"Get the car reapaired the boss wants it mint!"
      if ($.flag_car3_destroyed == 0) {
        //"The vehicle's wrecked!"
        //You've flipped your wheels!"
        if (Car.IsDead($.car_to_steal3_km2)) {
          //"The vehicle's wrecked!"
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car3_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          //You've flipped your wheels!"
          if ($.car_to_steal3_km2.isUpsidedown() && $.car_to_steal3_km2.isStopped()) {
            //You've flipped your wheels!"
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        //"Get out of the vehicle and walk outside!"
        if ($.car_to_steal3_km2.isStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, false /* FALSE */)) {
          if (!($.car_to_steal3_km2.isVisiblyDamaged())) {
            $.flag_garage_no_blip_car3_km2 = 1;
          }
          //"Get out of the vehicle and walk outside!"
          if ($.garage_km2.doesContainCar($.car_to_steal3_km2)) {
            //"Get out of the vehicle and walk outside!"
            if ($.flag_player_had_garage_car3_message == 0) {
              //"Get out of the vehicle and walk outside!"
              Text.PrintNow("GARAGE1", 5000, 1);
              $.flag_player_had_garage_car3_message = 1;
            }
          }
          else {
            $.flag_player_had_garage_car3_message = 0;
          }
        }
        else {
          $.flag_garage_no_blip_car3_km2 = 0;
        }
        //"Get the car reapaired the boss wants it mint!"
        if ($.player.isInCar($.car_to_steal3_km2)) {
          if ($.flag_blip_car3_on == 1) {
            $.radar_blip_car3_km2.remove();
            $.flag_blip_car3_on = 0;
          }
          //"Get the car reapaired the boss wants it mint!"
          if ($.car_to_steal3_km2.isVisiblyDamaged()) {
            //"Get the car reapaired the boss wants it mint!"
            if ($.flag_player_damage_message_car3_km2 == 0) {
              //"Get the car reapaired the boss wants it mint!"
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_player_damage_message_car3_km2 = 1;
            }
            if ($.flag_spray_blip_on_car3_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car3_km2 = 1;
            }
          }
          else {
            $.garage_km2.setTargetCarForMission($.car_to_steal3_km2);
            $.flag_player_damage_message_car3_km2 = 0;
            if ($.flag_spray_blip_on_car3_km2 == 1) {
              $.spray_blip_km2.remove();
              $.flag_spray_blip_on_car3_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car3_km2 = 0;
          if ($.flag_spray_blip_on_car3_km2 == 1) {
            $.spray_blip_km2.remove();
            $.flag_spray_blip_on_car3_km2 = 0;
          }
          if ($.flag_blip_car3_on == 0) {
            if ($.flag_garage_no_blip_car3_km2 == 0) {
              $.radar_blip_car3_km2 = Blip.AddForCar($.car_to_steal3_km2);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_blip_car3_on = 1;
            }
          }
        }
      }
    }
    // Diablo
    //"Car delivered"
    //"The vehicle's wrecked!"
    //You've flipped your wheels!"
    //"Get out of the vehicle and walk outside!"
    //"Get the car reapaired the boss wants it mint!"
    /*
    // checks for car 5
    IF flag_car5_in_garage = 0
    IF IS_CAR_IN_MISSION_GARAGE garage_km2 // Offroad
    AND flag_garage_no_blip_car5_km2 = 1
    flag_car5_destroyed = 1
    ++ counter_number_of_cars_in_garage_km2
    ADD_ONE_OFF_SOUND 380.3 -506.8 26.1 SOUND_PART_MISSION_COMPLETE
    PRINT_NOW ( KM2_2 ) 5000 1 //"Car delivered"
    flag_car5_in_garage = 1
    ENDIF
    IF flag_car5_destroyed = 0
    IF IS_CAR_DEAD car_to_steal5_km2
    PRINT_NOW ( WRECKED ) 5000 1 //"The vehicle's wrecked!"
    flag_car5_destroyed = 1
    GOTO mission_kenji2_failed
    ELSE
    IF IS_CAR_UPSIDEDOWN car_to_steal5_km2
    AND IS_CAR_STOPPED car_to_steal5_km2
    PRINT_NOW ( UPSIDE ) 5000 1 //You've flipped your wheels!"
    GOTO mission_kenji2_failed
    ENDIF
    ENDIF
    IF IS_CAR_STOPPED_IN_AREA_3D car_to_steal5_km2 377.3 -511.4 25.1132 383.7 -502.0 30.0 FALSE
    IF NOT IS_CAR_VISIBLY_DAMAGED car_to_steal5_km2
    flag_garage_no_blip_car5_km2 = 1
    ENDIF
    IF DOES_GARAGE_CONTAIN_CAR garage_km2 car_to_steal5_km2
    IF flag_player_had_garage_car5_message = 0
    PRINT_NOW ( GARAGE1 ) 5000 1 //"Get out of the vehicle and walk outside!"
    flag_player_had_garage_car5_message = 1
    ENDIF
    ELSE
    flag_player_had_garage_car5_message = 0
    ENDIF
    ELSE
    flag_garage_no_blip_car5_km2 = 0
    ENDIF
    IF IS_PLAYER_IN_CAR player car_to_steal5_km2
    IF flag_blip_car5_on = 1
    REMOVE_BLIP radar_blip_car5_km2
    flag_blip_car5_on = 0
    ENDIF
    IF IS_CAR_VISIBLY_DAMAGED car_to_steal5_km2
    IF flag_player_damage_message_car5_km2 = 0
    PRINT_NOW ( KM2_1 ) 7000 1 //"Get the car reapaired the boss wants it mint!"
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
    flag_player_damage_message_car5_km2 = 1
    ENDIF
    IF flag_spray_blip_on_car5_km2 = 0
    ADD_SPRITE_BLIP_FOR_COORD 379.0 -493.8 25.2 RADAR_SPRITE_SPRAY spray_blip_km2
    flag_spray_blip_on_car5_km2 = 1
    ENDIF
    ELSE
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 car_to_steal5_km2
    flag_player_damage_message_car5_km2 = 0
    IF flag_spray_blip_on_car5_km2 = 1
    REMOVE_BLIP spray_blip_km2
    flag_spray_blip_on_car5_km2 = 0
    ENDIF
    ENDIF
    ELSE
    flag_player_damage_message_car5_km2 = 0
    IF flag_spray_blip_on_car5_km2 = 1
    REMOVE_BLIP spray_blip_km2
    flag_spray_blip_on_car5_km2 = 0
    ENDIF
    IF flag_blip_car5_on = 0
    IF flag_garage_no_blip_car5_km2 = 0
    ADD_BLIP_FOR_CAR car_to_steal5_km2 radar_blip_car5_km2
    SET_TARGET_CAR_FOR_MISSION_GARAGE garage_km2 -1
    flag_blip_car5_on = 1
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    ENDIF
    */
    if ($.flag_car4_in_garage == 0) {
      // Diablo
      //"Car delivered"
      if ($.garage_km2.isCarInMission() && $.flag_garage_no_blip_car4_km2 == 1) {
        $.flag_car4_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        //"Car delivered"
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal4_km2))) {
          $.car_to_steal4_km2.delete();
        }
        $.flag_car4_in_garage = 1;
      }
      //"The vehicle's wrecked!"
      //You've flipped your wheels!"
      //"Get out of the vehicle and walk outside!"
      //"Get the car reapaired the boss wants it mint!"
      if ($.flag_car4_destroyed == 0) {
        //"The vehicle's wrecked!"
        //You've flipped your wheels!"
        if (Car.IsDead($.car_to_steal4_km2)) {
          //"The vehicle's wrecked!"
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car4_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          //You've flipped your wheels!"
          if ($.car_to_steal4_km2.isUpsidedown() && $.car_to_steal4_km2.isStopped()) {
            //You've flipped your wheels!"
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        //"Get out of the vehicle and walk outside!"
        if ($.car_to_steal4_km2.isStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, false /* FALSE */)) {
          if (!($.car_to_steal4_km2.isVisiblyDamaged())) {
            $.flag_garage_no_blip_car4_km2 = 1;
          }
          //"Get out of the vehicle and walk outside!"
          if ($.garage_km2.doesContainCar($.car_to_steal4_km2)) {
            //"Get out of the vehicle and walk outside!"
            if ($.flag_player_had_garage_car4_message == 0) {
              //"Get out of the vehicle and walk outside!"
              Text.PrintNow("GARAGE1", 5000, 1);
              $.flag_player_had_garage_car4_message = 1;
            }
          }
          else {
            $.flag_player_had_garage_car4_message = 0;
          }
        }
        else {
          $.flag_garage_no_blip_car4_km2 = 0;
        }
        //"Get the car reapaired the boss wants it mint!"
        if ($.player.isInCar($.car_to_steal4_km2)) {
          if ($.flag_blip_car4_on == 1) {
            $.radar_blip_car4_km2.remove();
            $.flag_blip_car4_on = 0;
          }
          //"Get the car reapaired the boss wants it mint!"
          if ($.car_to_steal4_km2.isVisiblyDamaged()) {
            //"Get the car reapaired the boss wants it mint!"
            if ($.flag_player_damage_message_car4_km2 == 0) {
              //"Get the car reapaired the boss wants it mint!"
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_player_damage_message_car4_km2 = 1;
            }
            if ($.flag_spray_blip_on_car4_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car4_km2 = 1;
            }
          }
          else {
            $.garage_km2.setTargetCarForMission($.car_to_steal4_km2);
            $.flag_player_damage_message_car4_km2 = 0;
            if ($.flag_spray_blip_on_car4_km2 == 1) {
              $.spray_blip_km2.remove();
              $.flag_spray_blip_on_car4_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car4_km2 = 0;
          if ($.flag_spray_blip_on_car4_km2 == 1) {
            $.spray_blip_km2.remove();
            $.flag_spray_blip_on_car4_km2 = 0;
          }
          if ($.flag_blip_car4_on == 0) {
            if ($.flag_garage_no_blip_car4_km2 == 0) {
              $.radar_blip_car4_km2 = Blip.AddForCar($.car_to_steal4_km2);
              $.garage_km2.setTargetCarForMission(-1);
              $.flag_blip_car4_on = 1;
            }
          }
        }
      }
    }
  }
  //"Out of time!"
  Text.PrintNow("OUTTIME", 5000, 1);
  // Mission Kenji5 failed
  // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
}

async function mission_kenji2_failed() {
  //"Mission Failed!"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission Kenji5 passed
  return;
}

async function mission_kenji2_passed() {
  $.flag_kenji_mission2_passed = 1;
  Stat.RegisterMissionPassed("KM2");
  Stat.PlayerMadeProgress(1);
  //"Mission Passed!"
  Text.PrintWithNumberBig("m_pass", 25000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(25000);
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT kenji_mission3_loop
  // mission cleanup
  return;
}

async function mission_cleanup_kenji2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.garage_km2.setTargetCarForMission(-1);
  Hud.ClearTimer($.timer_km2);
  $.radar_blip_coord1_km2.remove();
  //REMOVE_BLIP radar_blip_car2_km2
  $.radar_blip_car1_km2.remove();
  $.radar_blip_car3_km2.remove();
  //REMOVE_BLIP radar_blip_car5_km2
  $.radar_blip_car4_km2.remove();
  $.spray_blip_km2.remove();
  //MARK_MODEL_AS_NO_LONGER_NEEDED CAR_BANSHEE
  Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`);
  Streaming.MarkModelAsNoLongerNeeded(car`STINGER`);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CAR_LANDSTALKER
  Streaming.MarkModelAsNoLongerNeeded(car`INFERNUS`);
  Mission.Finish();
  return;
  }
}

export async function kenji2() {
  // *****************************************************************************************
  // *****************************************Kenji mission 2*********************************
  // ****************************************Gone In 30 Seconds*******************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_kenji2
  await mission_start_kenji2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji2_failed
    await mission_kenji2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji2
  await mission_cleanup_kenji2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables For Mission
  // MissionBoundary
  //Testarossa
  // VAR_INT car_to_steal1_km2
  //Viper
  // VAR_INT car_to_steal2_km2
  //Boxter
  // VAR_INT car_to_steal3_km2
  //Diablo
  // VAR_INT car_to_steal4_km2
  //Offroad
  // VAR_INT car_to_steal5_km2
  // VAR_INT radar_blip_coord1_km2
  // VAR_INT radar_blip_car1_km2
  // VAR_INT radar_blip_car2_km2
  // VAR_INT radar_blip_car3_km2
  // VAR_INT radar_blip_car4_km2
  // VAR_INT radar_blip_car5_km2
  // VAR_INT timer_km2
  // VAR_INT flag_player_damage_message_car1_km2
  // VAR_INT flag_player_damage_message_car2_km2
  // VAR_INT flag_player_damage_message_car3_km2
  // VAR_INT flag_player_damage_message_car4_km2
  // VAR_INT flag_player_damage_message_car5_km2
  // VAR_INT flag_car1_in_garage
  // VAR_INT flag_car2_in_garage
  // VAR_INT flag_car3_in_garage
  // VAR_INT flag_car4_in_garage
  // VAR_INT flag_car5_in_garage
  // VAR_INT counter_number_of_cars_in_garage_km2
  // VAR_INT flag_blip_car1_on
  // VAR_INT flag_blip_car2_on
  // VAR_INT flag_blip_car3_on
  // VAR_INT flag_blip_car4_on
  // VAR_INT flag_blip_car5_on
  // VAR_INT flag_car1_destroyed
  // VAR_INT flag_car2_destroyed
  // VAR_INT flag_car3_destroyed
  // VAR_INT flag_car4_destroyed
  // VAR_INT flag_car5_destroyed
  // VAR_INT flag_garage_no_blip_car1_km2
  // VAR_INT flag_garage_no_blip_car2_km2
  // VAR_INT flag_garage_no_blip_car3_km2
  // VAR_INT flag_garage_no_blip_car4_km2
  // VAR_INT flag_garage_no_blip_car5_km2
  // VAR_INT flag_spray_blip_on_car1_km2
  // VAR_INT flag_spray_blip_on_car2_km2
  // VAR_INT flag_spray_blip_on_car3_km2
  // VAR_INT flag_spray_blip_on_car4_km2
  // VAR_INT flag_spray_blip_on_car5_km2
  // VAR_INT spray_blip_km2
  // VAR_INT flag_player_had_garage_car1_message
  // VAR_INT flag_player_had_garage_car2_message
  // VAR_INT flag_player_had_garage_car3_message
  // VAR_INT flag_player_had_garage_car4_message
  // ****************************************Mission Start************************************
  // VAR_INT flag_player_had_garage_car5_message
}
