// Generated from Main/Industrial/joey6.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey6() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  // ScriptName
  await asyncWait(0);
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, TROLL);
  Streaming.RequestModel(car`STALLION`);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  //LOAD_SCENE 1190.07 -869.86 13.97
  Streaming.LoadAllModelsNow();
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint)) || !(Streaming.HasModelLoaded(car`STALLION`))) {
    await asyncWait(0);
  }
  Cutscene.Load(J6_TBJ);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
  $.cut_car3_lm3 = Car.Create(122 /* CAR_STALLION */, 1192.9, -860.8, 14.0);
  $.cut_car3_lm3.setHeading(150.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.setAnim($.joey);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj01`);
  $.cs_joeyhead.setAnim($.joey);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.setAnim($.player);
  $.cs_troll = CutsceneObject.Create(hier`cutobj03`);
  $.cs_troll.setAnim(TROLL);
  World.ClearArea(1191.9, -870.4, 15.0, 1.0, true /* TRUE */);
  $.player.setCoordinates(1191.9, -870.4, -100.0);
  $.player.setHeading(230.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 4434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM6_A", 10000, 2);
  while ($.cs_time < 6704) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM6_B", 10000, 2);
  while ($.cs_time < 12000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM6_C", 10000, 2);
  while ($.cs_time < 14274) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM6_D", 10000, 2);
  while ($.cs_time < 17302) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM6_E", 10000, 2);
  while ($.cs_time < 21000) {
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
  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  $.cut_car3_lm3.delete();
  $.thugs_score = 0;
  $.sound_already_created_before = 0;
  $.flag_not_enough_seats = 0;
  Streaming.LoadSpecialCharacter(2, $.robber);
  // START OF MISSION
  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  $.blip1_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
  $.blip1_jm6.changeDisplay(2 /* BLIP_ONLY */);
  $.flag_displayed_horn_message_jm6 = 0;
  $.flag_displayed_wanted_message_jm6 = 0;
  $.thug1_is_dead = 0;
  $.thug2_is_dead = 0;
  $.thug3_is_dead = 0;
  $.blip_for_thug_added1 = 0;
  $.blip_for_thug_added2 = 0;
  //PICK UP THE THUGS
  $.blip_for_thug_added3 = 0;
}

async function pick_up_thugs() {
  await asyncWait(0);
  //"We need a getaway vehicle"
  while (!($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */)) || !($.player.isPressingHorn()) || $.player.isWantedLevelGreater(0)) {
    await asyncWait(0);
    if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
      if ($.player.isWantedLevelGreater(0)) {
        if ($.flag_not_enough_seats == 0) {
          Text.PrintNow("WANTED1", 5000, 1);
        }
      }
      else {
        if ($.flag_not_enough_seats == 0) {
          Text.PrintNow("HORN", 5000, 1);
        }
      }
    }
    else {
      $.flag_not_enough_seats = 0;
    }
    if (!($.player.isInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */))) {
      Text.ClearThisPrint("WANTED1");
      Text.ClearThisPrint("HORN");
    }
    //"We need a getaway vehicle"
    if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
      //"We need a getaway vehicle"
      Text.PrintNow("JM6_5", 5000, 1);
    }
    else {
      Text.ClearThisPrint("JM6_5");
    }
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 17) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
  }
  $.any_car_jm6 = $.player.storeCarIsIn();
  $.maxpassengers = $.any_car_jm6.getMaximumNumberOfPassengers();
  Text.ClearThisPrint("WANTED1");
  Text.ClearThisPrint("HORN");
  //	GSW - Changed this from a WHILE
  //Car not big enough
  if (!($.maxpassengers > 2)) {
    //Car not big enough
    Text.PrintNow("NODOORS", 5000, 1);
    $.flag_not_enough_seats = 1;
    // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
    throw new Error("unresolved GOTO pick_up_thugs"); // fallback: would break linear control flow
  }
  //Go and get a vehicle less conspicuous
  //PICK UP THUGS CUT_SCENE**************************************************************************************
  if ($.player.isInModel(120 /* CAR_COACH */) || $.player.isInModel(114 /* CAR_BUS */)) {
    //Go and get a vehicle less conspicuous
    Text.PrintNow("JM6_6", 5000, 1);
    $.flag_not_enough_seats = 1;
    // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
    throw new Error("unresolved GOTO pick_up_thugs"); // fallback: would break linear control flow
  }
  World.ClearArea(1087.7, -229.2, 8.0, 6.0, true /* TRUE */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.any_car_jm6.lockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }
  await asyncWait(500);
  $.player.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.any_car_jm6.lockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  $.blip1_jm6.remove();
  $.thug1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1086.5, -238.3, 9.0);
  $.thug1.turnToFacePlayer($.player);
  $.thug1.setIdle();
  $.thug2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1088.4, -237.9, 9.0);
  $.thug2.turnToFacePlayer($.player);
  $.thug2.setIdle();
  $.thug3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1090.4, -238.0, 9.0);
  $.thug3.turnToFacePlayer($.player);
  $.thug3.setIdle();
  $.thug1.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.thug2.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.thug3.giveWeapon(3 /* WEAPONTYPE_UZI */, 100);
  Camera.SetFixedPosition(1078.773, -232.474, 12.190, 0.0, 0.0, 0.0);
  //APPLY_BRAKES_TO_PLAYERS_CAR Player On
  Camera.PointAtPoint(1079.691, -232.132, 11.990, 2 /* JUMP_CUT */);
  $.thug1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug1.setThreatSearch(6 /* THREAT_COP */);
  $.thug2.setThreatSearch(6 /* THREAT_COP */);
  $.thug3.setThreatSearch(6 /* THREAT_COP */);
  await asyncWait(1000);
  while (!($.Bank_job_door.slide(1087.523, -233.801, 13.5, 0.0, 0.0, 0.07, false /* FALSE */))) {
    await asyncWait(0);
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 17) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
      Text.PrintNow("JM6_7", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.thug1))) {
    $.thug1.followPlayer($.player);
    $.thug1.setRunning(true /* TRUE */);
    await asyncWait(800);
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.followPlayer($.player);
    $.thug2.setRunning(true /* TRUE */);
    await asyncWait(800);
  }
  //WAIT 400
  if (!(Char.IsDead($.thug3))) {
    $.thug3.followPlayer($.player);
    //WAIT 400
    $.thug3.setRunning(true /* TRUE */);
  }
  if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug1)) && !(Char.IsDead($.thug2)) && !(Char.IsDead($.thug3))) {
    TIMERB = 0;
    while (!($.thug1.isInCar($.any_car_jm6)) || !($.thug2.isInCar($.any_car_jm6)) || !($.thug3.isInCar($.any_car_jm6))) {
      await asyncWait(0);
      if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
        Text.PrintNow("JM6_7", 5000, 1);
        // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
      }
      if (Car.IsDead($.any_car_jm6)) {
        // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
      }
      [$.hours, $.minutes] = Clock.GetTimeOfDay();
      if ($.hours >= 17) {
        Text.PrintNow("OUTTIME", 5000, 1);
        // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
      }
      if (TIMERB > 15000) {
        // SCM GOTO → next_robber_bit (not lowered; manual jump required)
        throw new Error("unresolved GOTO next_robber_bit"); // fallback: would break linear control flow
      }
    }
  }
}

async function next_robber_bit() {
  Audio.LoadMissionAudio(J6_A);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Camera.RestoreJumpcut();
  $.player.applyBrakesToCar(false /* OFF */);
  $.player.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  //END OF PICK UP THUGS CUT_SCENE*******************************************************************************
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  //"Lets go"
  Text.PrintNow("JM6_1", 5000, 1);
  while (!($.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.2, false /* FALSE */))) {
    await asyncWait(0);
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 17) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
      Text.PrintNow("JM6_7", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
  }
  //CHANGE_BLIP_DISPLAY blip3_jm6 BLIP_ONLY
  $.blip3_jm6 = Blip.AddForCoord(1038.0, -700.0, -100.0);
  //GET TO THE BANK
  $.flag_displayed_wanted_message_jm6 = 0;
}

async function get_to_the_bank() {
  await asyncWait(0);
  //Do nothing
  if (Car.IsDead($.any_car_jm6)) {
  }
  //GO GET ANOTHER ONE
  //"We need a getaway vehicle"
  while (!($.player.isStoppedInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, true /* TRUE */)) || !($.player.isInAnyCar()) || $.player.isWantedLevelGreater(0)) {
    await asyncWait(0);
    //GO GET ANOTHER ONE
    if (Car.IsDead($.any_car_jm6)) {
    }
    if ($.player.isInAnyCar()) {
      $.any_car_jm6 = $.player.storeCarIsIn();
    }
    if (!(Char.IsDead($.thug1))) {
      if (!($.thug1.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added1 == 0) {
          $.thug1_blip = Blip.AddForChar($.thug1);
          $.blip_for_thug_added1 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added1 == 1) {
            $.thug1.followPlayer($.player);
            $.thug1_blip.remove();
            $.blip_for_thug_added1 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug2))) {
      if (!($.thug2.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added2 == 0) {
          $.thug2_blip = Blip.AddForChar($.thug2);
          $.blip_for_thug_added2 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added2 == 1) {
            $.thug2.followPlayer($.player);
            $.thug2_blip.remove();
            $.blip_for_thug_added2 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug3))) {
      if (!($.thug3.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added3 == 0) {
          $.thug3_blip = Blip.AddForChar($.thug3);
          $.blip_for_thug_added3 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added3 == 1) {
            $.thug3.followPlayer($.player);
            $.thug3_blip.remove();
            $.blip_for_thug_added3 = 0;
          }
        }
      }
    }
    if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
      Text.PrintNow("JM6_7", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.player.isStoppedInAreaInCar3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */)) {
      if ($.player.isWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm6 == 0) {
          Text.PrintNow("WANTED1", 5000, 1);
          $.flag_displayed_wanted_message_jm6 = 1;
        }
      }
    }
    else {
      if (!($.player.isInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */))) {
        $.flag_displayed_wanted_message_jm6 = 0;
      }
    }
    //"We need a getaway vehicle"
    if ($.player.isInAreaOnFoot3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, false /* FALSE */)) {
      //"We need a getaway vehicle"
      Text.PrintNow("JM6_5", 5000, 1);
    }
    else {
      Text.ClearThisPrint("JM6_5");
    }
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 17) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
  }
  //Go and get a vehicle less conspicuous
  //WAIT 3000
  if ($.player.isInModel(120 /* CAR_COACH */) || $.player.isInModel(114 /* CAR_BUS */)) {
    //Go and get a vehicle less conspicuous
    //WAIT 3000
    Text.PrintNow("JM6_6", 5000, 1);
    // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_to_the_bank"); // fallback: would break linear control flow
  }
  if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
    Text.PrintNow("JM6_7", 5000, 1);
    // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
  }
  //Go and get a vehicle less conspicuous
  //WAIT 3000
  // BANK ROBBERY CUT SCENE**************************************************************************************
  if (!($.thug1.isInCar($.any_car_jm6)) || !($.thug2.isInCar($.any_car_jm6)) || !($.thug3.isInCar($.any_car_jm6))) {
    //Go and get a vehicle less conspicuous
    //WAIT 3000
    Text.PrintNow("JM6_7", 5000, 1);
    // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_to_the_bank"); // fallback: would break linear control flow
  }
  World.ClearArea(1037.3, -699.6, 15.0, 6.0, true /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  $.player.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  $.player.applyBrakesToCar(true /* ON */);
  Camera.SetFixedPosition(1036.448, -705.615, 14.512, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1036.637, -704.639, 14.624, 2 /* JUMP_CUT */);
  //SAMPLE2*********************************************************
  $.blip3_jm6.remove();
  Audio.LoadMissionAudio(J6_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  //"Wait here"
  Text.PrintNow("JM6_2", 5000, 1);
  $.any_car_jm6 = $.player.storeCarIsIn();
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug1))) {
      $.thug1.leaveGroup();
      $.thug1.setObjLeaveCar($.any_car_jm6);
    }
  }
  await asyncWait(400);
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug2))) {
      $.thug2.leaveGroup();
      $.thug2.setObjLeaveCar($.any_car_jm6);
    }
  }
  await asyncWait(400);
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug3))) {
      $.thug3.leaveGroup();
      $.thug3.setObjLeaveCar($.any_car_jm6);
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  //WAITING FOR THUGS TO GET OUT OF CAR
  $.objective_count_done_before3 = 0;
  //THUGS GO IN THE BANK
  /*
  IF NOT IS_CHAR_DEAD thug1
  SET_CHAR_OBJ_RUN_TO_COORD thug1 1037.4 -699.9
  WAIT 400
  ENDIF
  IF NOT IS_CHAR_DEAD thug2
  SET_CHAR_OBJ_RUN_TO_COORD thug2 1037.4 -699.9
  WAIT 400
  ENDIF
  IF NOT IS_CHAR_DEAD thug3
  SET_CHAR_OBJ_RUN_TO_COORD thug3 1037.4 -699.9
  ENDIF
  */
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.any_car_jm6)) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug1))) {
      if ($.thug1_is_dead == 0) {
        if (!($.thug1.isInCar($.any_car_jm6)) && $.objective_count_done_before1 == 0) {
          $.thug1.setObjRunToCoord(1037.4, -699.9);
          await asyncWait(300);
          $.objective_count++;
          $.objective_count_done_before1 = 1;
        }
      }
    }
    if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug2))) {
      if ($.thug2_is_dead == 0) {
        if (!($.thug2.isInCar($.any_car_jm6)) && $.objective_count_done_before2 == 0) {
          $.thug2.setObjRunToCoord(1037.4, -699.9);
          await asyncWait(300);
          $.objective_count++;
          $.objective_count_done_before2 = 1;
        }
      }
    }
    if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug3))) {
      if ($.thug3_is_dead == 0) {
        if (!($.thug3.isInCar($.any_car_jm6)) && $.objective_count_done_before3 == 0) {
          $.thug3.setObjRunToCoord(1037.4, -699.9);
          $.objective_count++;
          $.objective_count_done_before3 = 1;
        }
      }
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.getCoordinates();
  $.bankdoor_Y = $.bankdoor_Y - 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.getCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y + 1.0;
  while (!($.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */)) || !($.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  TIMERB = 0;
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.thug1_is_dead == 0) {
      if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.setObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.setObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.setObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.setCoordinates(1037.4, -699.9, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.setCoordinates(1037.4, -699.9, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.setCoordinates(1037.4, -699.9, 13.9);
      }
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  TIMERB = 0;
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.thug1_is_dead == 0) {
      if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.setCoordinates(1104.0, -792.0, 14.0);
        $.thug1.setObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.setCoordinates(1102.0, -792.0, 14.0);
        $.thug2.setObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.setCoordinates(1100.0, -792.0, 14.0);
        $.thug3.setObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.setCoordinates(1032.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.setCoordinates(1032.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.setCoordinates(1032.9, -700.2, 13.9);
      }
    }
  }
  Audio.LoadMissionAudio(J6_1);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.getCoordinates();
  $.bankdoor_Y = $.bankdoor_Y + 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.getCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y - 1.0;
  //WAIT 1000
  while (!($.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */)) || !($.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  //THUGS COME OUT OF BANK
  await asyncWait(1000);
  World.ClearArea(1037.3, -699.6, 15.0, 4.0, true /* TRUE */);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.getCoordinates();
  $.bankdoor_Y = $.bankdoor_Y - 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.getCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y + 1.0;
  while (!($.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */)) || !($.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  //SET_PLAYER_AS_LEADER thug1 player
  if (!(Char.IsDead($.thug1))) {
    $.thug1.setCoordinates(1032.9, -700.2, 15.0);
    //SET_PLAYER_AS_LEADER thug1 player
    $.thug1.setObjRunToCoord(1036.9, -700.2);
  }
  await asyncWait(800);
  if (!(Char.IsDead($.thug2))) {
    $.thug2.setCoordinates(1032.9, -700.2, 15.0);
    $.thug2.setObjRunToCoord(1036.9, -700.2);
  }
  await asyncWait(800);
  if (!(Char.IsDead($.thug3))) {
    $.thug3.setCoordinates(1032.9, -700.2, 15.0);
    $.thug3.setObjRunToCoord(1036.9, -700.2);
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  TIMERB = 0;
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.thug1_is_dead == 0) {
      if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.followPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.followPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.followPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.setCoordinates(1036.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.setCoordinates(1036.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.setCoordinates(1036.9, -700.2, 13.9);
      }
    }
  }
  $.joey_alarm_loop = Sound.AddContinuous(1034.8, -700.1, 15.0, 69 /* SOUND_BANK_ALARM_LOOP_L */);
  //SAMPLE3*********************************************************
  $.sound_already_created_before = 1;
  Audio.LoadMissionAudio(J6_D);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  $.player.alterWantedLevelNoDrop(3);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.getCoordinates();
  $.bankdoor_Y = $.bankdoor_Y + 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.getCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y - 1.0;
  while (!($.bankdoor1.slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, false /* FALSE */)) || !($.bankdoor2.slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, false /* FALSE */))) {
    await asyncWait(0);
  }
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  $.player.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  $.player.applyBrakesToCar(false /* Off */);
  World.SetPedDensityMultiplier(1.0);
  TIMERB = 0;
  //WAITING FOR THUGS TO GET BACK INTO CAR
  //	STORE_CAR_PLAYER_IS_IN player any_car_jm6
  //	maybe should stop player leaving this car while the thugs get in
  /*
  IF TIMERB > 15000
  IF NOT IS_CAR_DEAD any_car_jm6
  IF NOT IS_CHAR_DEAD	thug1
  //WARP_CHAR_INTO_CAR thug1 any_car_jm6
  //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
  ENDIF
  IF NOT IS_CHAR_DEAD	thug2
  //WARP_CHAR_INTO_CAR thug2 any_car_jm6
  //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
  ENDIF
  IF NOT IS_CHAR_DEAD	thug3
  //WARP_CHAR_INTO_CAR thug3 any_car_jm6
  //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
  ENDIF
  ENDIF
  ENDIF
  */
  //END OF BANK ROBBERY CUT SCENE********************************************************************************
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    //	STORE_CAR_PLAYER_IS_IN player any_car_jm6
    //	maybe should stop player leaving this car while the thugs get in
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.any_car_jm6)) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.thug1_is_dead == 0) {
      if ($.thug1.isInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.isInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    /*
    IF TIMERB > 15000
    IF NOT IS_CAR_DEAD any_car_jm6
    IF NOT IS_CHAR_DEAD	thug1
    //WARP_CHAR_INTO_CAR thug1 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    IF NOT IS_CHAR_DEAD	thug2
    //WARP_CHAR_INTO_CAR thug2 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    IF NOT IS_CHAR_DEAD	thug3
    //WARP_CHAR_INTO_CAR thug3 any_car_jm6
    //WARP_CHAR_INTO_CAR_AS_PASSERNGER thug1 any_car_jm6
    ENDIF
    ENDIF
    ENDIF
    */
    if ($.thug3_is_dead == 0) {
      if ($.thug3.isInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
  }
  $.blip2_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
  //SAMPLE4*********************************************************
  $.blip2_jm6.changeDisplay(2 /* BLIP_ONLY */);
  Audio.LoadMissionAudio(J6_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  //"get us out of here"
  //PRINT_SOON ( JM6_4 ) 5000 1 //"get us out of here"
  //Get back to warehouse
  Text.PrintNow("JM6_3", 3000, 1);
}

async function back_to_safe_house() {
  await asyncWait(0);
  //GO GET ANOTHER ONE
  if (Car.IsDead($.any_car_jm6)) {
  }
  //GO GET ANOTHER ONE
  //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************
  while (!($.player.isStoppedInArea2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */)) || !($.player.isInAnyCar()) || $.player.isWantedLevelGreater(0)) {
    await asyncWait(0);
    //GO GET ANOTHER ONE
    if (Car.IsDead($.any_car_jm6)) {
    }
    if ($.player.isInAnyCar()) {
      $.any_car_jm6 = $.player.storeCarIsIn();
    }
    if (Char.IsDead($.thug1) && Char.IsDead($.thug2) && Char.IsDead($.thug3)) {
      Text.PrintNow("JM6_8", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.thug1))) {
      if (!($.thug1.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added1 == 0) {
          $.thug1_blip = Blip.AddForChar($.thug1);
          $.blip_for_thug_added1 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added1 == 1) {
            $.thug1.followPlayer($.player);
            $.thug1_blip.remove();
            $.blip_for_thug_added1 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug2))) {
      if (!($.thug2.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added2 == 0) {
          $.thug2_blip = Blip.AddForChar($.thug2);
          $.blip_for_thug_added2 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added2 == 1) {
            $.thug2.followPlayer($.player);
            $.thug2_blip.remove();
            $.blip_for_thug_added2 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug3))) {
      if (!($.thug3.isInPlayersGroup($.player))) {
        if ($.blip_for_thug_added3 == 0) {
          $.thug3_blip = Blip.AddForChar($.thug3);
          $.blip_for_thug_added3 = 1;
        }
        if ($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */)) {
          if ($.blip_for_thug_added3 == 1) {
            $.thug3.followPlayer($.player);
            $.thug3_blip.remove();
            $.blip_for_thug_added3 = 0;
          }
        }
      }
    }
    if ($.player.isStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */)) {
      if ($.player.isWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm6 == 0) {
          Text.PrintNow("WANTED1", 5000, 1);
          $.flag_displayed_wanted_message_jm6 = 1;
        }
      }
    }
    else {
      if (!($.player.isInArea2D(1089.9, -223.9, 1084.5, -228.5, false /* FALSE */))) {
        $.flag_displayed_wanted_message_jm6 = 0;
      }
    }
    if ($.player.isInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, true /* TRUE */)) {
      Text.PrintNow("EBAL_5", 5000, 1);
    }
    else {
      Text.ClearThisPrint(EBAL_5);
    }
  }
  if (!(Char.IsDead($.thug1))) {
    if (!($.thug1.isInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.thug2))) {
    if (!($.thug2.isInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.thug3))) {
    if (!($.thug3.isInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  World.ClearArea(1087.7, -229.2, 8.0, 6.0, true /* TRUE */);
  $.player.setControl(false /* Off */);
  Hud.SwitchWidescreen(true /* ON */);
  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  Camera.SetFixedPosition(1098.781, -228.929, 16.723, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1098.005, -229.116, 16.12, 2 /* JUMP_CUT */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.player.applyBrakesToCar(true /* On */);
    if (!(Char.IsDead($.thug1))) {
      $.thug1.leaveGroup();
      if ($.thug1.isInAnyCar()) {
        $.any_car_jm6 = $.thug1.storeCarIsIn();
        $.thug1.setObjLeaveCar($.any_car_jm6);
      }
    }
    await asyncWait(400);
    if (!(Char.IsDead($.thug2))) {
      $.thug2.leaveGroup();
      if ($.thug2.isInAnyCar()) {
        $.any_car_jm6 = $.thug2.storeCarIsIn();
        $.thug2.setObjLeaveCar($.any_car_jm6);
      }
    }
    await asyncWait(400);
    if (!(Char.IsDead($.thug3))) {
      $.thug3.leaveGroup();
      if ($.thug3.isInAnyCar()) {
        $.any_car_jm6 = $.thug3.storeCarIsIn();
        $.thug3.setObjLeaveCar($.any_car_jm6);
      }
    }
  }
  //thug1_is_dead = 1
  if (!(Char.IsDead($.thug1))) {
    //thug1_is_dead = 1
    if (!($.player.locateAnyMeansChar2D($.thug1, 30.0, 30.0, false /* FALSE */))) {
      //thug1_is_dead = 1
      if (!(Char.IsDead($.thug1))) {
        $.thug1.markAsNoLongerNeeded();
      }
    }
  }
  //thug2_is_dead = 1
  if (!(Char.IsDead($.thug2))) {
    //thug2_is_dead = 1
    if (!($.player.locateAnyMeansChar2D($.thug2, 30.0, 30.0, false /* FALSE */))) {
      //thug2_is_dead = 1
      if (!(Char.IsDead($.thug2))) {
        $.thug2.markAsNoLongerNeeded();
      }
    }
  }
  //thug3_is_dead = 1
  if (!(Char.IsDead($.thug3))) {
    //thug3_is_dead = 1
    if (!($.player.locateAnyMeansChar2D($.thug3, 30.0, 30.0, false /* FALSE */))) {
      //thug3_is_dead = 1
      if (!(Char.IsDead($.thug3))) {
        $.thug3.markAsNoLongerNeeded();
      }
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  while (!($.Bank_job_door.slide(1087.523, -233.801, 14.012, 0.0, 0.0, 0.2, false /* FALSE */))) {
    await asyncWait(0);
  }
  //WAITING FOR THUGS TO GET OUT OF CAR
  //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
  //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
  //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1)) {
      if ($.objective_count_done_before1 == 0) {
        $.objective_count++;
        $.objective_count_done_before1 = 1;
        $.thug1_is_dead = 1;
      }
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
    //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
    //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
    if (!(Car.IsDead($.any_car_jm6))) {
      //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
      if ($.thug1_is_dead == 0) {
        //SET_CHAR_OBJ_WAIT_ON_FOOT thug1
        if (!($.thug1.isInCar($.any_car_jm6)) && $.objective_count_done_before1 == 0) {
          $.thug1.setObjRunToCoord(1087.0, -238.6);
          $.objective_count++;
          $.objective_count_done_before1 = 1;
        }
      }
      //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
      if ($.thug2_is_dead == 0) {
        //SET_CHAR_OBJ_WAIT_ON_FOOT thug2
        if (!($.thug2.isInCar($.any_car_jm6)) && $.objective_count_done_before2 == 0) {
          $.thug2.setObjRunToCoord(1087.5, -238.6);
          $.objective_count++;
          $.objective_count_done_before2 = 1;
        }
      }
      //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
      if ($.thug3_is_dead == 0) {
        //SET_CHAR_OBJ_WAIT_ON_FOOT thug3
        if (!($.thug3.isInCar($.any_car_jm6)) && $.objective_count_done_before3 == 0) {
          $.thug3.setObjRunToCoord(1088.0, -238.6);
          $.objective_count++;
          $.objective_count_done_before3 = 1;
        }
      }
    }
  }
  $.blip1_jm6.remove();
  if (!(Char.IsDead($.thug1))) {
    $.thug1.setObjRunToCoord(1087.0, -238.6);
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.setObjRunToCoord(1087.5, -238.6);
  }
  if (!(Char.IsDead($.thug3))) {
    $.thug3.setObjRunToCoord(1088.0, -238.6);
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  TIMERB = 0;
  // GSW - could maybe use objective_count_done_before1 here
  // GSW - could maybe use objective_count_done_before2 here
  // GSW - could maybe use objective_count_done_before3 here
  while (!($.objective_count == 3)) {
    await asyncWait(0);
    if (Char.IsDead($.thug1) && $.objective_count_done_before1 == 0) {
      $.objective_count++;
      $.objective_count_done_before1 = 1;
      $.thug1_is_dead = 1;
    }
    if (Char.IsDead($.thug2) && $.objective_count_done_before2 == 0) {
      $.objective_count++;
      $.objective_count_done_before2 = 1;
      $.thug2_is_dead = 1;
    }
    if (Char.IsDead($.thug3) && $.objective_count_done_before3 == 0) {
      $.objective_count++;
      $.objective_count_done_before3 = 1;
      $.thug3_is_dead = 1;
    }
    if ($.thug1_is_dead == 1 && $.thug2_is_dead == 1 && $.thug3_is_dead == 1) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    // GSW - could maybe use objective_count_done_before1 here
    if ($.thug1_is_dead == 0) {
      // GSW - could maybe use objective_count_done_before1 here
      if ($.thug1.isObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.objective_count++;
        // GSW - could maybe use objective_count_done_before1 here
        $.objective_count_done_before1 = 1;
      }
    }
    // GSW - could maybe use objective_count_done_before2 here
    if ($.thug2_is_dead == 0) {
      // GSW - could maybe use objective_count_done_before2 here
      if ($.thug2.isObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.objective_count++;
        // GSW - could maybe use objective_count_done_before2 here
        $.objective_count_done_before2 = 1;
      }
    }
    // GSW - could maybe use objective_count_done_before3 here
    if ($.thug3_is_dead == 0) {
      // GSW - could maybe use objective_count_done_before3 here
      if ($.thug3.isObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.objective_count++;
        // GSW - could maybe use objective_count_done_before3 here
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.setCoordinates(1087.0, -238.6, 10.0);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.setCoordinates(1087.5, -238.6, 10.0);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.setCoordinates(1088.0, -238.6, 10.0);
      }
    }
  }
  if (!(Char.IsDead($.thug1))) {
    $.thug1.setObjWaitOnFoot();
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.setObjWaitOnFoot();
  }
  if (!(Char.IsDead($.thug3))) {
    $.thug3.setObjWaitOnFoot();
  }
  while (!($.Bank_job_door.slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.1, false /* FALSE */))) {
    await asyncWait(0);
  }
  $.player.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  Camera.RestoreJumpcut();
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  //THUGS GO BACK INTO SAFEHOUSE CUT_SCENE***********************************************************************
  $.player.applyBrakesToCar(false /* Off */);
  }
  // Mission Joey6 failed
  // SCM GOTO → mission_joey6_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey6_passed"); // fallback: would break linear control flow
}

async function mission_joey6_failed() {
  //"Mission Failed"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission joey6 passed
  return;
}

async function mission_joey6_passed() {
  $.flag_joey_mission6_passed = 1;
  if (!(Char.IsDead($.thug1))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug1.delete();
  if (!(Char.IsDead($.thug2))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug2.delete();
  if (!(Char.IsDead($.thug3))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug3.delete();
  Audio.PlayMissionPassedTune(1);
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", $.thugs_score, 5000, 1);
  $.player.clearWantedLevel();
  $.player.addScore($.thugs_score);
  Stat.RegisterMissionPassed(JM6);
  Stat.PlayerMadeProgress(1);
  $.joey_contact_blip.remove();
  // mission cleanup
  return;
}

async function mission_cleanup_joey6() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  if ($.sound_already_created_before == 1) {
    $.joey_alarm_loop.remove();
  }
  $.blip1_jm6.remove();
  $.blip3_jm6.remove();
  $.blip2_jm6.remove();
  $.thug1_blip.remove();
  $.thug2_blip.remove();
  $.thug3_blip.remove();
  World.SetPedDensityMultiplier(1.0);
  Streaming.UnloadSpecialCharacter(2);
  Mission.Finish();
  return;
}

export async function joey6() {
  // *******************************************************************************************
  // **************************************Joey Mission 6***************************************
  // ****************************************Bank Job*******************************************
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_joey6
  await mission_start_joey6();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey6_failed
    await mission_joey6_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey6
  await mission_cleanup_joey6();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT thug1 thug2 thug3 thugs_score joey_alarm_loop flag_not_enough_seats
  // VAR_INT blip1_jm6 blip2_jm6 blip3_jm6 thug1_blip thug2_blip thug3_blip
  // VAR_INT any_car_jm6 maxpassengers sound_already_created_before
  // VAR_INT flag_displayed_horn_message_jm6 flag_displayed_wanted_message_jm6
  // VAR_INT thug1_is_dead thug2_is_dead thug3_is_dead blip_for_thug_added1 blip_for_thug_added2 blip_for_thug_added3
  // VAR_INT objective_count objective_count_done_before1 objective_count_done_before2 objective_count_done_before3
  // ***************************************Mission Start*************************************
  // VAR_FLOAT bankdoor_X bankdoor_Y bankdoor_Z bankdoor2_X bankdoor2_Y bankdoor2_Z
}
