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
  $.cut_car3_lm3.SetHeading(150.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.SetAnim($.joey);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj01`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_troll = CutsceneObject.Create(hier`cutobj03`);
  $.cs_troll.SetAnim(TROLL);
  World.ClearArea(1191.9, -870.4, 15.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1191.9, -870.4, -100.0);
  $.player.SetHeading(230.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 4434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM6_A", 10000, 2);
  while ($.cs_time < 6704) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM6_B", 10000, 2);
  while ($.cs_time < 12000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM6_C", 10000, 2);
  while ($.cs_time < 14274) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM6_D", 10000, 2);
  while ($.cs_time < 17302) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
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
  World.SwitchRubbish(1 /* ON */);
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
  $.cut_car3_lm3.Delete();
  $.thugs_score = 0;
  $.sound_already_created_before = 0;
  $.flag_not_enough_seats = 0;
  Streaming.LoadSpecialCharacter(2, $.robber);
  while (!(Streaming.HasSpecialCharacterLoaded(2))) {
    await asyncWait(0);
  }
  $.blip1_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
  $.blip1_jm6.ChangeDisplay(2 /* BLIP_ONLY */);
  $.flag_displayed_horn_message_jm6 = 0;
  $.flag_displayed_wanted_message_jm6 = 0;
  $.thug1_is_dead = 0;
  $.thug2_is_dead = 0;
  $.thug3_is_dead = 0;
  $.blip_for_thug_added1 = 0;
  $.blip_for_thug_added2 = 0;
  $.blip_for_thug_added3 = 0;
}

async function pick_up_thugs() {
  await asyncWait(0);
  while (!($.player.IsStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, 1 /* TRUE */)) || !($.player.IsPressingHorn()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if ($.player.IsStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
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
    if (!($.player.IsInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, 0 /* FALSE */))) {
      Text.ClearThisPrint("WANTED1");
      Text.ClearThisPrint("HORN");
    }
    if ($.player.IsInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, 0 /* FALSE */)) {
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
  $.any_car_jm6 = $.player.StoreCarIsIn();
  $.maxpassengers = $.any_car_jm6.GetMaximumNumberOfPassengers();
  Text.ClearThisPrint("WANTED1");
  Text.ClearThisPrint("HORN");
  if (!($.maxpassengers > 2)) {
    Text.PrintNow("NODOORS", 5000, 1);
    $.flag_not_enough_seats = 1;
    // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
    throw new Error("unresolved GOTO pick_up_thugs"); // fallback: would break linear control flow
  }
  if ($.player.IsInModel(120 /* CAR_COACH */) || $.player.IsInModel(114 /* CAR_BUS */)) {
    Text.PrintNow("JM6_6", 5000, 1);
    $.flag_not_enough_seats = 1;
    // SCM GOTO → pick_up_thugs (not lowered; manual jump required)
    throw new Error("unresolved GOTO pick_up_thugs"); // fallback: would break linear control flow
  }
  World.ClearArea(1087.7, -229.2, 8.0, 6.0, 1 /* TRUE */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.any_car_jm6.LockDoors(4 /* CARLOCK_LOCKED_PLAYER_INSIDE */);
  }
  await asyncWait(500);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.any_car_jm6.LockDoors(1 /* CARLOCK_UNLOCKED */);
  }
  $.blip1_jm6.Remove();
  $.thug1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1086.5, -238.3, 9.0);
  $.thug1.TurnToFacePlayer($.player);
  $.thug1.SetIdle();
  $.thug2 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1088.4, -237.9, 9.0);
  $.thug2.TurnToFacePlayer($.player);
  $.thug2.SetIdle();
  $.thug3 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 1090.4, -238.0, 9.0);
  $.thug3.TurnToFacePlayer($.player);
  $.thug3.SetIdle();
  $.thug1.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.thug2.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 50);
  $.thug3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 100);
  Camera.SetFixedPosition(1078.773, -232.474, 12.190, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1079.691, -232.132, 11.990, 2 /* JUMP_CUT */);
  $.thug1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.thug1.SetThreatSearch(6 /* THREAT_COP */);
  $.thug2.SetThreatSearch(6 /* THREAT_COP */);
  $.thug3.SetThreatSearch(6 /* THREAT_COP */);
  await asyncWait(1000);
  while (!($.Bank_job_door.Slide(1087.523, -233.801, 13.5, 0.0, 0.0, 0.07, 0 /* FALSE */))) {
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
    $.thug1.FollowPlayer($.player);
    $.thug1.SetRunning(1 /* TRUE */);
    await asyncWait(800);
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.FollowPlayer($.player);
    $.thug2.SetRunning(1 /* TRUE */);
    await asyncWait(800);
  }
  if (!(Char.IsDead($.thug3))) {
    $.thug3.FollowPlayer($.player);
    $.thug3.SetRunning(1 /* TRUE */);
  }
  if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug1)) && !(Char.IsDead($.thug2)) && !(Char.IsDead($.thug3))) {
    TIMERB = 0;
    while (!($.thug1.IsInCar($.any_car_jm6)) || !($.thug2.IsInCar($.any_car_jm6)) || !($.thug3.IsInCar($.any_car_jm6))) {
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
  $.player.ApplyBrakesToCar(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Text.PrintNow("JM6_1", 5000, 1);
  while (!($.Bank_job_door.Slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.2, 0 /* FALSE */))) {
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
  $.blip3_jm6 = Blip.AddForCoord(1038.0, -700.0, -100.0);
  $.flag_displayed_wanted_message_jm6 = 0;
}

async function get_to_the_bank() {
  await asyncWait(0);
  if (Car.IsDead($.any_car_jm6)) {
  }
  while (!($.player.IsStoppedInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, 1 /* TRUE */)) || !($.player.IsInAnyCar()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if (Car.IsDead($.any_car_jm6)) {
    }
    if ($.player.IsInAnyCar()) {
      $.any_car_jm6 = $.player.StoreCarIsIn();
    }
    if (!(Char.IsDead($.thug1))) {
      if (!($.thug1.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added1 == 0) {
          $.thug1_blip = Blip.AddForChar($.thug1);
          $.blip_for_thug_added1 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug1, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added1 == 1) {
            $.thug1.FollowPlayer($.player);
            $.thug1_blip.Remove();
            $.blip_for_thug_added1 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug2))) {
      if (!($.thug2.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added2 == 0) {
          $.thug2_blip = Blip.AddForChar($.thug2);
          $.blip_for_thug_added2 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug2, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added2 == 1) {
            $.thug2.FollowPlayer($.player);
            $.thug2_blip.Remove();
            $.blip_for_thug_added2 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug3))) {
      if (!($.thug3.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added3 == 0) {
          $.thug3_blip = Blip.AddForChar($.thug3);
          $.blip_for_thug_added3 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug3, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added3 == 1) {
            $.thug3.FollowPlayer($.player);
            $.thug3_blip.Remove();
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
    if ($.player.IsStoppedInAreaInCar3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm6 == 0) {
          Text.PrintNow("WANTED1", 5000, 1);
          $.flag_displayed_wanted_message_jm6 = 1;
        }
      }
    }
    else {
      if (!($.player.IsInArea3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, 0 /* FALSE */))) {
        $.flag_displayed_wanted_message_jm6 = 0;
      }
    }
    if ($.player.IsInAreaOnFoot3D(1040.5, -691.5, 14.0, 1043.8, -698.5, 17.0, 0 /* FALSE */)) {
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
  if ($.player.IsInModel(120 /* CAR_COACH */) || $.player.IsInModel(114 /* CAR_BUS */)) {
    Text.PrintNow("JM6_6", 5000, 1);
    // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_to_the_bank"); // fallback: would break linear control flow
  }
  if (Char.IsDead($.thug1) || Char.IsDead($.thug2) || Char.IsDead($.thug3)) {
    Text.PrintNow("JM6_7", 5000, 1);
    // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
  }
  if (!($.thug1.IsInCar($.any_car_jm6)) || !($.thug2.IsInCar($.any_car_jm6)) || !($.thug3.IsInCar($.any_car_jm6))) {
    Text.PrintNow("JM6_7", 5000, 1);
    // SCM GOTO → get_to_the_bank (not lowered; manual jump required)
    throw new Error("unresolved GOTO get_to_the_bank"); // fallback: would break linear control flow
  }
  World.ClearArea(1037.3, -699.6, 15.0, 6.0, 1 /* TRUE */);
  World.SetPedDensityMultiplier(0.0);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* On */);
  $.player.ApplyBrakesToCar(1 /* ON */);
  Camera.SetFixedPosition(1036.448, -705.615, 14.512, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1036.637, -704.639, 14.624, 2 /* JUMP_CUT */);
  $.blip3_jm6.Remove();
  Audio.LoadMissionAudio(J6_B);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM6_2", 5000, 1);
  $.any_car_jm6 = $.player.StoreCarIsIn();
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug1))) {
      $.thug1.LeaveGroup();
      $.thug1.SetObjLeaveCar($.any_car_jm6);
    }
  }
  await asyncWait(400);
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug2))) {
      $.thug2.LeaveGroup();
      $.thug2.SetObjLeaveCar($.any_car_jm6);
    }
  }
  await asyncWait(400);
  if (!(Car.IsDead($.any_car_jm6))) {
    if (!(Char.IsDead($.thug3))) {
      $.thug3.LeaveGroup();
      $.thug3.SetObjLeaveCar($.any_car_jm6);
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
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
        if (!($.thug1.IsInCar($.any_car_jm6)) && $.objective_count_done_before1 == 0) {
          $.thug1.SetObjRunToCoord(1037.4, -699.9);
          await asyncWait(300);
          $.objective_count++;
          $.objective_count_done_before1 = 1;
        }
      }
    }
    if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug2))) {
      if ($.thug2_is_dead == 0) {
        if (!($.thug2.IsInCar($.any_car_jm6)) && $.objective_count_done_before2 == 0) {
          $.thug2.SetObjRunToCoord(1037.4, -699.9);
          await asyncWait(300);
          $.objective_count++;
          $.objective_count_done_before2 = 1;
        }
      }
    }
    if (!(Car.IsDead($.any_car_jm6)) && !(Char.IsDead($.thug3))) {
      if ($.thug3_is_dead == 0) {
        if (!($.thug3.IsInCar($.any_car_jm6)) && $.objective_count_done_before3 == 0) {
          $.thug3.SetObjRunToCoord(1037.4, -699.9);
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
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.GetCoordinates();
  $.bankdoor_Y = $.bankdoor_Y - 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.GetCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y + 1.0;
  while (!($.bankdoor1.Slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, 0 /* FALSE */)) || !($.bankdoor2.Slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
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
      if ($.thug1.IsObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.SetObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.IsObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.SetObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.IsObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.SetObjRunToCoord(1032.9, -700.2);
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.SetCoordinates(1037.4, -699.9, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.SetCoordinates(1037.4, -699.9, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.SetCoordinates(1037.4, -699.9, 13.9);
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
      if ($.thug1.IsObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.SetCoordinates(1104.0, -792.0, 14.0);
        $.thug1.SetObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.IsObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.SetCoordinates(1102.0, -792.0, 14.0);
        $.thug2.SetObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.IsObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.SetCoordinates(1100.0, -792.0, 14.0);
        $.thug3.SetObjWaitOnFoot();
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.SetCoordinates(1032.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.SetCoordinates(1032.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.SetCoordinates(1032.9, -700.2, 13.9);
      }
    }
  }
  Audio.LoadMissionAudio(J6_1);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.GetCoordinates();
  $.bankdoor_Y = $.bankdoor_Y + 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.GetCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y - 1.0;
  while (!($.bankdoor1.Slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, 0 /* FALSE */)) || !($.bankdoor2.Slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
    await asyncWait(0);
  }
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  await asyncWait(1000);
  World.ClearArea(1037.3, -699.6, 15.0, 4.0, 1 /* TRUE */);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.GetCoordinates();
  $.bankdoor_Y = $.bankdoor_Y - 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.GetCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y + 1.0;
  while (!($.bankdoor1.Slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, 0 /* FALSE */)) || !($.bankdoor2.Slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
    await asyncWait(0);
  }
  if (!(Char.IsDead($.thug1))) {
    $.thug1.SetCoordinates(1032.9, -700.2, 15.0);
    $.thug1.SetObjRunToCoord(1036.9, -700.2);
  }
  await asyncWait(800);
  if (!(Char.IsDead($.thug2))) {
    $.thug2.SetCoordinates(1032.9, -700.2, 15.0);
    $.thug2.SetObjRunToCoord(1036.9, -700.2);
  }
  await asyncWait(800);
  if (!(Char.IsDead($.thug3))) {
    $.thug3.SetCoordinates(1032.9, -700.2, 15.0);
    $.thug3.SetObjRunToCoord(1036.9, -700.2);
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
      if ($.thug1.IsObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.thug1.FollowPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.IsObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.thug2.FollowPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.IsObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.thug3.FollowPlayer($.player);
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.SetCoordinates(1036.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.SetCoordinates(1036.9, -700.2, 13.9);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.SetCoordinates(1036.9, -700.2, 13.9);
      }
    }
  }
  $.joey_alarm_loop = Sound.AddContinuous(1034.8, -700.1, 15.0, 69 /* SOUND_BANK_ALARM_LOOP_L */);
  $.sound_already_created_before = 1;
  Audio.LoadMissionAudio(J6_D);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  $.player.AlterWantedLevelNoDrop(3);
  [$.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z] = $.bankdoor1.GetCoordinates();
  $.bankdoor_Y = $.bankdoor_Y + 1.0;
  [$.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z] = $.bankdoor2.GetCoordinates();
  $.bankdoor2_Y = $.bankdoor2_Y - 1.0;
  while (!($.bankdoor1.Slide($.bankdoor_X, $.bankdoor_Y, $.bankdoor_Z, 0.0, 0.1, 0.0, 0 /* FALSE */)) || !($.bankdoor2.Slide($.bankdoor2_X, $.bankdoor2_Y, $.bankdoor2_Z, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
    await asyncWait(0);
  }
  while (!(Audio.HasMissionAudioFinished())) {
    await asyncWait(0);
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  $.player.ApplyBrakesToCar(0 /* Off */);
  World.SetPedDensityMultiplier(1.0);
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
    if (Car.IsDead($.any_car_jm6)) {
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if ($.thug1_is_dead == 0) {
      if ($.thug1.IsInCar($.any_car_jm6) && $.objective_count_done_before1 == 0) {
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.IsInCar($.any_car_jm6) && $.objective_count_done_before2 == 0) {
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.IsInCar($.any_car_jm6) && $.objective_count_done_before3 == 0) {
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
  }
  $.blip2_jm6 = Blip.AddForCoord(1086.0, -227.0, -100.0);
  $.blip2_jm6.ChangeDisplay(2 /* BLIP_ONLY */);
  Audio.LoadMissionAudio(J6_C);
  while (!(Audio.HasMissionAudioLoaded())) {
    await asyncWait(0);
  }
  Audio.PlayMissionAudio();
  Text.PrintNow("JM6_3", 3000, 1);
}

async function back_to_safe_house() {
  await asyncWait(0);
  if (Car.IsDead($.any_car_jm6)) {
  }
  while (!($.player.IsStoppedInArea2D(1089.9, -223.9, 1084.5, -228.5, 1 /* TRUE */)) || !($.player.IsInAnyCar()) || $.player.IsWantedLevelGreater(0)) {
    await asyncWait(0);
    if (Car.IsDead($.any_car_jm6)) {
    }
    if ($.player.IsInAnyCar()) {
      $.any_car_jm6 = $.player.StoreCarIsIn();
    }
    if (Char.IsDead($.thug1) && Char.IsDead($.thug2) && Char.IsDead($.thug3)) {
      Text.PrintNow("JM6_8", 5000, 1);
      // SCM GOTO → mission_joey6_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey6_failed"); // fallback: would break linear control flow
    }
    if (!(Char.IsDead($.thug1))) {
      if (!($.thug1.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added1 == 0) {
          $.thug1_blip = Blip.AddForChar($.thug1);
          $.blip_for_thug_added1 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug1, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added1 == 1) {
            $.thug1.FollowPlayer($.player);
            $.thug1_blip.Remove();
            $.blip_for_thug_added1 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug2))) {
      if (!($.thug2.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added2 == 0) {
          $.thug2_blip = Blip.AddForChar($.thug2);
          $.blip_for_thug_added2 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug2, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added2 == 1) {
            $.thug2.FollowPlayer($.player);
            $.thug2_blip.Remove();
            $.blip_for_thug_added2 = 0;
          }
        }
      }
    }
    if (!(Char.IsDead($.thug3))) {
      if (!($.thug3.IsInPlayersGroup($.player))) {
        if ($.blip_for_thug_added3 == 0) {
          $.thug3_blip = Blip.AddForChar($.thug3);
          $.blip_for_thug_added3 = 1;
        }
        if ($.player.LocateAnyMeansChar2D($.thug3, 30.0, 30.0, 0 /* FALSE */)) {
          if ($.blip_for_thug_added3 == 1) {
            $.thug3.FollowPlayer($.player);
            $.thug3_blip.Remove();
            $.blip_for_thug_added3 = 0;
          }
        }
      }
    }
    if ($.player.IsStoppedInAreaInCar2D(1089.9, -223.9, 1084.5, -228.5, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm6 == 0) {
          Text.PrintNow("WANTED1", 5000, 1);
          $.flag_displayed_wanted_message_jm6 = 1;
        }
      }
    }
    else {
      if (!($.player.IsInArea2D(1089.9, -223.9, 1084.5, -228.5, 0 /* FALSE */))) {
        $.flag_displayed_wanted_message_jm6 = 0;
      }
    }
    if ($.player.IsInAreaOnFoot2D(1089.9, -223.9, 1084.5, -228.5, 1 /* TRUE */)) {
      Text.PrintNow("EBAL_5", 5000, 1);
    }
    else {
      Text.ClearThisPrint(EBAL_5);
    }
  }
  if (!(Char.IsDead($.thug1))) {
    if (!($.thug1.IsInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.thug2))) {
    if (!($.thug2.IsInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  if (!(Char.IsDead($.thug3))) {
    if (!($.thug3.IsInPlayersGroup($.player))) {
      Text.PrintNow("HEY2", 4000, 1);
      // SCM GOTO → back_to_safe_house (not lowered; manual jump required)
      throw new Error("unresolved GOTO back_to_safe_house"); // fallback: would break linear control flow
    }
  }
  World.ClearArea(1087.7, -229.2, 8.0, 6.0, 1 /* TRUE */);
  $.player.SetControl(0 /* Off */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* On */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* On */);
  Camera.SetFixedPosition(1098.781, -228.929, 16.723, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1098.005, -229.116, 16.12, 2 /* JUMP_CUT */);
  if (!(Car.IsDead($.any_car_jm6))) {
    $.player.ApplyBrakesToCar(1 /* On */);
    if (!(Char.IsDead($.thug1))) {
      $.thug1.LeaveGroup();
      if ($.thug1.IsInAnyCar()) {
        $.any_car_jm6 = $.thug1.StoreCarIsIn();
        $.thug1.SetObjLeaveCar($.any_car_jm6);
      }
    }
    await asyncWait(400);
    if (!(Char.IsDead($.thug2))) {
      $.thug2.LeaveGroup();
      if ($.thug2.IsInAnyCar()) {
        $.any_car_jm6 = $.thug2.StoreCarIsIn();
        $.thug2.SetObjLeaveCar($.any_car_jm6);
      }
    }
    await asyncWait(400);
    if (!(Char.IsDead($.thug3))) {
      $.thug3.LeaveGroup();
      if ($.thug3.IsInAnyCar()) {
        $.any_car_jm6 = $.thug3.StoreCarIsIn();
        $.thug3.SetObjLeaveCar($.any_car_jm6);
      }
    }
  }
  if (!(Char.IsDead($.thug1))) {
    if (!($.player.LocateAnyMeansChar2D($.thug1, 30.0, 30.0, 0 /* FALSE */))) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.MarkAsNoLongerNeeded();
      }
    }
  }
  if (!(Char.IsDead($.thug2))) {
    if (!($.player.LocateAnyMeansChar2D($.thug2, 30.0, 30.0, 0 /* FALSE */))) {
      if (!(Char.IsDead($.thug2))) {
        $.thug2.MarkAsNoLongerNeeded();
      }
    }
  }
  if (!(Char.IsDead($.thug3))) {
    if (!($.player.LocateAnyMeansChar2D($.thug3, 30.0, 30.0, 0 /* FALSE */))) {
      if (!(Char.IsDead($.thug3))) {
        $.thug3.MarkAsNoLongerNeeded();
      }
    }
  }
  $.objective_count = 0;
  $.objective_count_done_before1 = 0;
  $.objective_count_done_before2 = 0;
  $.objective_count_done_before3 = 0;
  while (!($.Bank_job_door.Slide(1087.523, -233.801, 14.012, 0.0, 0.0, 0.2, 0 /* FALSE */))) {
    await asyncWait(0);
  }
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
    if (!(Car.IsDead($.any_car_jm6))) {
      if ($.thug1_is_dead == 0) {
        if (!($.thug1.IsInCar($.any_car_jm6)) && $.objective_count_done_before1 == 0) {
          $.thug1.SetObjRunToCoord(1087.0, -238.6);
          $.objective_count++;
          $.objective_count_done_before1 = 1;
        }
      }
      if ($.thug2_is_dead == 0) {
        if (!($.thug2.IsInCar($.any_car_jm6)) && $.objective_count_done_before2 == 0) {
          $.thug2.SetObjRunToCoord(1087.5, -238.6);
          $.objective_count++;
          $.objective_count_done_before2 = 1;
        }
      }
      if ($.thug3_is_dead == 0) {
        if (!($.thug3.IsInCar($.any_car_jm6)) && $.objective_count_done_before3 == 0) {
          $.thug3.SetObjRunToCoord(1088.0, -238.6);
          $.objective_count++;
          $.objective_count_done_before3 = 1;
        }
      }
    }
  }
  $.blip1_jm6.Remove();
  if (!(Char.IsDead($.thug1))) {
    $.thug1.SetObjRunToCoord(1087.0, -238.6);
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.SetObjRunToCoord(1087.5, -238.6);
  }
  if (!(Char.IsDead($.thug3))) {
    $.thug3.SetObjRunToCoord(1088.0, -238.6);
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
      if ($.thug1.IsObjectivePassed() && $.objective_count_done_before1 == 0) {
        $.objective_count++;
        $.objective_count_done_before1 = 1;
      }
    }
    if ($.thug2_is_dead == 0) {
      if ($.thug2.IsObjectivePassed() && $.objective_count_done_before2 == 0) {
        $.objective_count++;
        $.objective_count_done_before2 = 1;
      }
    }
    if ($.thug3_is_dead == 0) {
      if ($.thug3.IsObjectivePassed() && $.objective_count_done_before3 == 0) {
        $.objective_count++;
        $.objective_count_done_before3 = 1;
      }
    }
    if (TIMERB > 15000) {
      if (!(Char.IsDead($.thug1))) {
        $.thug1.SetCoordinates(1087.0, -238.6, 10.0);
      }
      if (!(Char.IsDead($.thug2))) {
        $.thug2.SetCoordinates(1087.5, -238.6, 10.0);
      }
      if (!(Char.IsDead($.thug3))) {
        $.thug3.SetCoordinates(1088.0, -238.6, 10.0);
      }
    }
  }
  if (!(Char.IsDead($.thug1))) {
    $.thug1.SetObjWaitOnFoot();
  }
  if (!(Char.IsDead($.thug2))) {
    $.thug2.SetObjWaitOnFoot();
  }
  if (!(Char.IsDead($.thug3))) {
    $.thug3.SetObjWaitOnFoot();
  }
  while (!($.Bank_job_door.Slide(1087.523, -233.801, 11.012, 0.0, 0.0, 0.1, 0 /* FALSE */))) {
    await asyncWait(0);
  }
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  $.player.ApplyBrakesToCar(0 /* Off */);
  }
  // SCM GOTO → mission_joey6_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey6_passed"); // fallback: would break linear control flow
}

async function mission_joey6_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_joey6_passed() {
  $.flag_joey_mission6_passed = 1;
  if (!(Char.IsDead($.thug1))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug1.Delete();
  if (!(Char.IsDead($.thug2))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug2.Delete();
  if (!(Char.IsDead($.thug3))) {
    $.thugs_score = $.thugs_score + 10000;
  }
  $.thug3.Delete();
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", $.thugs_score, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore($.thugs_score);
  Stat.RegisterMissionPassed(JM6);
  Stat.PlayerMadeProgress(1);
  $.joey_contact_blip.Remove();
  return;
}

async function mission_cleanup_joey6() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  if ($.sound_already_created_before == 1) {
    $.joey_alarm_loop.Remove();
  }
  $.blip1_jm6.Remove();
  $.blip3_jm6.Remove();
  $.blip2_jm6.Remove();
  $.thug1_blip.Remove();
  $.thug2_blip.Remove();
  $.thug3_blip.Remove();
  World.SetPedDensityMultiplier(1.0);
  Streaming.UnloadSpecialCharacter(2);
  Mission.Finish();
  return;
}

export async function joey6() {
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
  // MissionBoundary
  // VAR_INT thug1 thug2 thug3 thugs_score joey_alarm_loop flag_not_enough_seats
  // VAR_INT blip1_jm6 blip2_jm6 blip3_jm6 thug1_blip thug2_blip thug3_blip
  // VAR_INT any_car_jm6 maxpassengers sound_already_created_before
  // VAR_INT flag_displayed_horn_message_jm6 flag_displayed_wanted_message_jm6
  // VAR_INT thug1_is_dead thug2_is_dead thug3_is_dead blip_for_thug_added1 blip_for_thug_added2 blip_for_thug_added3
  // VAR_INT objective_count objective_count_done_before1 objective_count_done_before2 objective_count_done_before3
  // VAR_FLOAT bankdoor_X bankdoor_Y bankdoor_Z bankdoor2_X bankdoor2_Y bankdoor2_Z
}
