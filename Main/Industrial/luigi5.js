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
  $.flag_timer_prossie1_lm5 = 0;
  $.flag_timer_prossie2_lm5 = 0;
  $.flag_timer_prossie3_lm5 = 0;
  $.flag_timer_prossie4_lm5 = 0;
  $.flag_timer_prossie5_lm5 = 0;
  $.flag_timer_prossie6_lm5 = 0;
  $.flag_timer_prossie7_lm5 = 0;
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
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 0 /* FALSE */);
  Cutscene.Load(l5_tfb);
  Cutscene.SetOffset(900.782, -427.523, 13.829);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_luigi = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_luigi.SetAnim($.luigi);
  $.cs_micky = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_micky.SetAnim($.micky);
  $.cs_luigihead = CutsceneHead.Create($.cs_luigi, hier`cutobj02`);
  $.cs_luigihead.SetAnim($.luigi);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_mickyhead = CutsceneHead.Create($.cs_micky, hier`cutobj04`);
  $.cs_mickyhead.SetAnim($.micky);
  $.cs_ludoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_ludoor.SetAnim(LUDOOR);
  World.ClearArea(896.6, -426.2, 13.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(896.6, -426.2, 13.9);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 11950) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM5_A", 10000, 1);
  while ($.cs_time < 15702) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM5_B", 10000, 1);
  while ($.cs_time < 17617) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM5_C", 10000, 1);
  while ($.cs_time < 20281) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LM5_D", 10000, 1);
  while ($.cs_time < 22295) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
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
  World.SwitchRubbish(1 /* ON */);
  Streaming.Switch(1 /* ON */);
  Streaming.LoadScene(920.3, -425.4, 15.0);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetVisibilityOfClosestObjectOfType(890.9, -416.9, 15.0, 6.0, $.backdoor, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
  Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
  Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
  World.SetPedDensityMultiplier(1.0);
  $.gen_car28.Switch(0);
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
  $.cop_car1_lm5.SetHeading(90.0);
  $.cop_car1_lm5.LockDoors(1 /* CARLOCK_UNLOCKED */);
  $.cop_car2_lm5 = Car.Create(109 /* CAR_POLICE */, 998.68, -860.80, 14.5);
  $.cop_car2_lm5.SetHeading(90.0);
  $.cop_car2_lm5.LockDoors(1 /* CARLOCK_UNLOCKED */);
  $.fuzzball_sign = Object.CreateNoOffset(policeballsigns, 1010.74, -896.46, 24.161);
  $.ball_sounds = Sound.AddContinuous(999.9, -892.4, 16.0, 71 /* SOUND_POLICE_BALL_LOOP_L */);
  $.fuzz_door1.SetHeading(270.0);
  $.fuzz_door2.SetHeading(270.0);
  Hud.DisplayTimer($.timer_lm5);
  $.radar_blip_coord1_lm5 = Blip.AddForCoord(999.9, -879.3, -100.0);
  $.prossie1_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 870.0, -482.0, -100.0);
  $.prossie1_lm5.SetHeading(180.0);
  $.prossie1_lm5.ClearThreatSearch();
  $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
  $.flag_blip_on_prossie1_lm5 = 1;
  $.prossie1_lm5.SetRunning(1 /* TRUE */);
  $.prossie2_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 916.0, -90.0, -100.0);
  $.prossie2_lm5.SetHeading(180.0);
  $.prossie2_lm5.ClearThreatSearch();
  $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
  $.flag_blip_on_prossie2_lm5 = 1;
  $.prossie2_lm5.SetRunning(1 /* TRUE */);
  $.prossie3_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1203.0, 23.0, -100.0);
  $.prossie3_lm5.ClearThreatSearch();
  $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
  $.flag_blip_on_prossie3_lm5 = 1;
  $.prossie3_lm5.SetRunning(1 /* TRUE */);
  $.prossie4_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1240.0, -336.0, -100.0);
  $.prossie4_lm5.SetHeading(180.0);
  $.prossie4_lm5.ClearThreatSearch();
  $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
  $.flag_blip_on_prossie4_lm5 = 1;
  $.prossie4_lm5.SetRunning(1 /* TRUE */);
  $.prossie5_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1231.0, -511.0, -100.0);
  $.prossie5_lm5.ClearThreatSearch();
  $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
  $.flag_blip_on_prossie5_lm5 = 1;
  $.prossie5_lm5.SetRunning(1 /* TRUE */);
  $.prossie6_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 1360.0, -798.0, -100.0);
  $.prossie6_lm5.ClearThreatSearch();
  $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
  $.flag_blip_on_prossie6_lm5 = 1;
  $.prossie6_lm5.SetRunning(1 /* TRUE */);
  $.prossie7_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE2`, 1093.0, -973.0, -100.0);
  $.prossie7_lm5.ClearThreatSearch();
  $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
  $.flag_blip_on_prossie7_lm5 = 1;
  $.prossie7_lm5.SetRunning(1 /* TRUE */);
  $.prossie8_lm5 = Char.Create(20 /* PEDTYPE_PROSTITUTE */, ped`PROSTITUTE`, 975.0, -754.0, -100.0);
  $.prossie8_lm5.SetHeading(180.0);
  $.prossie8_lm5.ClearThreatSearch();
  $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
  $.flag_blip_on_prossie8_lm5 = 1;
  $.prossie8_lm5.SetRunning(1 /* TRUE */);
  if ($.timer_help_message_displayed == 0) {
    Text.PrintHelp("TIMER");
    $.timer_help_message_displayed = 1;
  }
  Text.PrintNow("LM5_7", 7000, 1);
  Hud.DisplayCounterWithString($.counter_no_of_girls_at_the_ball, 0 /* COUNTER_DISPLAY_NUMBER */, "LM5_9");
}

async function prossie_checks() {
  while ($.timer_lm5 > 0) {
    await asyncWait(0);
    World.ClearArea(1000.4, -886.7, 14.4, 6.0, 0 /* FALSE */);
    // SCM GOSUB check_for_dead_prossies
    await check_for_dead_prossies();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.number_of_dead_prossies > 0) {
      Text.PrintNow("LM5_2", 5000, 1);
      // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
    }
    if ($.counter_no_of_girls_at_the_ball == 8) {
      // SCM GOTO → mission_luigi5_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_luigi5_passed"); // fallback: would break linear control flow
    }
    if ($.player.IsInAnyCar()) {
      $.vehicle_lm5 = $.player.StoreCarIsIn();
      $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
      $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
    }
    $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
    if ($.flag_prossie1_at_ball == 0) {
      if ($.flag_prossie1_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message1_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message1_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message1_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie1_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie1_lm5_in_car == 0) {
            $.prossie1_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie1_lm5.FollowPlayer($.player);
              $.radarped_prossie1_lm5.Remove();
              $.flag_blip_on_prossie1_lm5 = 0;
              while (!($.prossie1_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie1_at_ball == 0) {
                  if (Char.IsDead($.prossie1_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie1_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie1_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
                      $.flag_blip_on_prossie1_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie1_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie1_lm5 == 1) {
                      $.prossie1_lm5.FollowPlayer($.player);
                      $.radarped_prossie1_lm5.Remove();
                      $.flag_blip_on_prossie1_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie1_lm5_in_car = 1;
              $.prossie1_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie1_lm5_in_car == 1) {
        if ($.flag_prossie1_in_car_park == 0) {
          if (!($.prossie1_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie1_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie1_lm5 = Blip.AddForChar($.prossie1_lm5);
            $.flag_blip_on_prossie1_lm5 = 1;
            $.flag_prossie1_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie1_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie1_lm5 == 1) {
            $.prossie1_lm5.FollowPlayer($.player);
            $.radarped_prossie1_lm5.Remove();
            $.flag_blip_on_prossie1_lm5 = 0;
          }
        }
        if ($.prossie1_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie1_at_ball == 0 && $.flag_prossie1_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie1_at_ball == 0) {
            if (Char.IsDead($.prossie1_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie1_lm5.LeaveGroup();
          if ($.prossie1_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie1_lm5.StoreCarIsIn();
            $.prossie1_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie1_in_car_park = 1;
        }
      }
      if ($.flag_prossie1_in_car_park == 1) {
        if (!($.prossie1_lm5.IsInAnyCar()) && $.flag_prossie1_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie1_at_ball == 0) {
            if (Char.IsDead($.prossie1_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie1_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie1_told_to_go_into_ball = 1;
        }
        if ($.prossie1_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie1_lm5.SetIdle();
          $.prossie1_lm5.RemoveElegantly();
          $.flag_prossie1_at_ball = 1;
        }
        if ($.flag_prossie1_told_to_go_into_ball == 1) {
          if ($.flag_prossie1_at_ball == 0) {
            if ($.flag_timer_prossie1_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie1_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie1_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie2_at_ball == 0) {
      if (Char.IsDead($.prossie2_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie2_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message2_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message2_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message2_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie2_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie2_lm5_in_car == 0) {
            $.prossie2_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie2_lm5.FollowPlayer($.player);
              $.radarped_prossie2_lm5.Remove();
              $.flag_blip_on_prossie2_lm5 = 0;
              while (!($.prossie2_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie2_at_ball == 0) {
                  if (Char.IsDead($.prossie2_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie2_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie2_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
                      $.flag_blip_on_prossie2_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie2_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie2_lm5 == 1) {
                      $.prossie2_lm5.FollowPlayer($.player);
                      $.radarped_prossie2_lm5.Remove();
                      $.flag_blip_on_prossie2_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie2_lm5_in_car = 1;
              $.prossie2_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie2_lm5_in_car == 1) {
        if ($.flag_prossie2_in_car_park == 0) {
          if (!($.prossie2_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie2_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie2_lm5 = Blip.AddForChar($.prossie2_lm5);
            $.flag_blip_on_prossie2_lm5 = 1;
            $.flag_prossie2_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie2_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie2_lm5 == 1) {
            $.prossie2_lm5.FollowPlayer($.player);
            $.radarped_prossie2_lm5.Remove();
            $.flag_blip_on_prossie2_lm5 = 0;
          }
        }
        if ($.prossie2_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie2_at_ball == 0 && $.flag_prossie2_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie2_at_ball == 0) {
            if (Char.IsDead($.prossie2_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie2_lm5.LeaveGroup();
          if ($.prossie2_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie2_lm5.StoreCarIsIn();
            $.prossie2_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie2_in_car_park = 1;
        }
      }
      if ($.flag_prossie2_in_car_park == 1) {
        if (!($.prossie2_lm5.IsInAnyCar()) && $.flag_prossie2_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie2_at_ball == 0) {
            if (Char.IsDead($.prossie2_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie2_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie2_told_to_go_into_ball = 1;
        }
        if ($.prossie2_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie2_lm5.SetIdle();
          $.prossie2_lm5.RemoveElegantly();
          $.flag_prossie2_at_ball = 1;
        }
        if ($.flag_prossie2_told_to_go_into_ball == 1) {
          if ($.flag_prossie2_at_ball == 0) {
            if ($.flag_timer_prossie2_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie2_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie2_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie3_at_ball == 0) {
      if (Char.IsDead($.prossie3_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie3_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message3_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message3_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message3_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie3_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie3_lm5_in_car == 0) {
            $.prossie3_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie3_lm5.FollowPlayer($.player);
              $.radarped_prossie3_lm5.Remove();
              $.flag_blip_on_prossie3_lm5 = 0;
              while (!($.prossie3_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie3_at_ball == 0) {
                  if (Char.IsDead($.prossie3_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie3_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie3_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
                      $.flag_blip_on_prossie3_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie3_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie3_lm5 == 1) {
                      $.prossie3_lm5.FollowPlayer($.player);
                      $.radarped_prossie3_lm5.Remove();
                      $.flag_blip_on_prossie3_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie3_lm5_in_car = 1;
              $.prossie3_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie3_lm5_in_car == 1) {
        if ($.flag_prossie3_in_car_park == 0) {
          if (!($.prossie3_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie3_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie3_lm5 = Blip.AddForChar($.prossie3_lm5);
            $.flag_blip_on_prossie3_lm5 = 1;
            $.flag_prossie3_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie3_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie3_lm5 == 1) {
            $.prossie3_lm5.FollowPlayer($.player);
            $.radarped_prossie3_lm5.Remove();
            $.flag_blip_on_prossie3_lm5 = 0;
          }
        }
        if ($.prossie3_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie3_at_ball == 0 && $.flag_prossie3_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie3_at_ball == 0) {
            if (Char.IsDead($.prossie3_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie3_lm5.LeaveGroup();
          if ($.prossie3_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie3_lm5.StoreCarIsIn();
            $.prossie3_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie3_in_car_park = 1;
        }
      }
      if ($.flag_prossie3_in_car_park == 1) {
        if (!($.prossie3_lm5.IsInAnyCar()) && $.flag_prossie3_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie3_at_ball == 0) {
            if (Char.IsDead($.prossie3_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie3_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie3_told_to_go_into_ball = 1;
        }
        if ($.prossie3_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie3_lm5.SetIdle();
          $.prossie3_lm5.RemoveElegantly();
          $.flag_prossie3_at_ball = 1;
        }
        if ($.flag_prossie3_told_to_go_into_ball == 1) {
          if ($.flag_prossie3_at_ball == 0) {
            if ($.flag_timer_prossie3_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie3_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie3_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie4_at_ball == 0) {
      if (Char.IsDead($.prossie4_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie4_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message4_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message4_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message4_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie4_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie4_lm5_in_car == 0) {
            $.prossie4_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie4_lm5.FollowPlayer($.player);
              $.radarped_prossie4_lm5.Remove();
              $.flag_blip_on_prossie4_lm5 = 0;
              while (!($.prossie4_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie4_at_ball == 0) {
                  if (Char.IsDead($.prossie4_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie4_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie4_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
                      $.flag_blip_on_prossie4_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie4_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie4_lm5 == 1) {
                      $.prossie4_lm5.FollowPlayer($.player);
                      $.radarped_prossie4_lm5.Remove();
                      $.flag_blip_on_prossie4_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie4_lm5_in_car = 1;
              $.prossie4_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie4_lm5_in_car == 1) {
        if ($.flag_prossie4_in_car_park == 0) {
          if (!($.prossie4_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie4_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie4_lm5 = Blip.AddForChar($.prossie4_lm5);
            $.flag_blip_on_prossie4_lm5 = 1;
            $.flag_prossie4_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie4_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie4_lm5 == 1) {
            $.prossie4_lm5.FollowPlayer($.player);
            $.radarped_prossie4_lm5.Remove();
            $.flag_blip_on_prossie4_lm5 = 0;
          }
        }
        if ($.prossie4_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie4_at_ball == 0 && $.flag_prossie4_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie4_at_ball == 0) {
            if (Char.IsDead($.prossie4_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie4_lm5.LeaveGroup();
          if ($.prossie4_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie4_lm5.StoreCarIsIn();
            $.prossie4_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie4_in_car_park = 1;
        }
      }
      if ($.flag_prossie4_in_car_park == 1) {
        if (!($.prossie4_lm5.IsInAnyCar()) && $.flag_prossie4_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie4_at_ball == 0) {
            if (Char.IsDead($.prossie4_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie4_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie4_told_to_go_into_ball = 1;
        }
        if ($.prossie4_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie4_lm5.SetIdle();
          $.prossie4_lm5.RemoveElegantly();
          $.flag_prossie4_at_ball = 1;
        }
        if ($.flag_prossie4_told_to_go_into_ball == 1) {
          if ($.flag_prossie4_at_ball == 0) {
            if ($.flag_timer_prossie4_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie4_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie4_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie5_at_ball == 0) {
      if (Char.IsDead($.prossie5_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie5_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message5_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message5_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message5_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie5_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie5_lm5_in_car == 0) {
            $.prossie5_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie5_lm5.FollowPlayer($.player);
              $.radarped_prossie5_lm5.Remove();
              $.flag_blip_on_prossie5_lm5 = 0;
              while (!($.prossie5_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie5_at_ball == 0) {
                  if (Char.IsDead($.prossie5_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie5_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie5_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
                      $.flag_blip_on_prossie5_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie5_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie5_lm5 == 1) {
                      $.prossie5_lm5.FollowPlayer($.player);
                      $.radarped_prossie5_lm5.Remove();
                      $.flag_blip_on_prossie5_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie5_lm5_in_car = 1;
              $.prossie5_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie5_lm5_in_car == 1) {
        if ($.flag_prossie5_in_car_park == 0) {
          if (!($.prossie5_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie5_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie5_lm5 = Blip.AddForChar($.prossie5_lm5);
            $.flag_blip_on_prossie5_lm5 = 1;
            $.flag_prossie5_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie5_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie5_lm5 == 1) {
            $.prossie5_lm5.FollowPlayer($.player);
            $.radarped_prossie5_lm5.Remove();
            $.flag_blip_on_prossie5_lm5 = 0;
          }
        }
        if ($.prossie5_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie5_at_ball == 0 && $.flag_prossie5_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie5_at_ball == 0) {
            if (Char.IsDead($.prossie5_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie5_lm5.LeaveGroup();
          if ($.prossie5_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie5_lm5.StoreCarIsIn();
            $.prossie5_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie5_in_car_park = 1;
        }
      }
      if ($.flag_prossie5_in_car_park == 1) {
        if (!($.prossie5_lm5.IsInAnyCar()) && $.flag_prossie5_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie5_at_ball == 0) {
            if (Char.IsDead($.prossie5_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie5_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          $.player.ClearWantedLevel();
          $.flag_prossie5_told_to_go_into_ball = 1;
        }
        if ($.prossie5_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie5_lm5.SetIdle();
          $.prossie5_lm5.RemoveElegantly();
          $.flag_prossie5_at_ball = 1;
        }
        if ($.flag_prossie5_told_to_go_into_ball == 1) {
          if ($.flag_prossie5_at_ball == 0) {
            if ($.flag_timer_prossie5_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie5_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie5_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie6_at_ball == 0) {
      if (Char.IsDead($.prossie6_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie6_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message6_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message6_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message6_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie6_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie6_lm5_in_car == 0) {
            $.prossie6_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie6_lm5.FollowPlayer($.player);
              $.radarped_prossie6_lm5.Remove();
              $.flag_blip_on_prossie6_lm5 = 0;
              while (!($.prossie6_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie6_at_ball == 0) {
                  if (Char.IsDead($.prossie6_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie6_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie6_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
                      $.flag_blip_on_prossie6_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie6_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie6_lm5 == 1) {
                      $.prossie6_lm5.FollowPlayer($.player);
                      $.radarped_prossie6_lm5.Remove();
                      $.flag_blip_on_prossie6_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie6_lm5_in_car = 1;
              $.prossie6_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie6_lm5_in_car == 1) {
        if ($.flag_prossie6_in_car_park == 0) {
          if (!($.prossie6_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie6_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie6_lm5 = Blip.AddForChar($.prossie6_lm5);
            $.flag_blip_on_prossie6_lm5 = 1;
            $.flag_prossie6_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie6_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie6_lm5 == 1) {
            $.prossie6_lm5.FollowPlayer($.player);
            $.radarped_prossie6_lm5.Remove();
            $.flag_blip_on_prossie6_lm5 = 0;
          }
        }
        if ($.prossie6_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie6_at_ball == 0 && $.flag_prossie6_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie6_at_ball == 0) {
            if (Char.IsDead($.prossie6_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie6_lm5.LeaveGroup();
          if ($.prossie6_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie6_lm5.StoreCarIsIn();
            $.prossie6_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie6_in_car_park = 1;
        }
      }
      if ($.flag_prossie6_in_car_park == 1) {
        if (!($.prossie6_lm5.IsInAnyCar()) && $.flag_prossie6_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie6_at_ball == 0) {
            if (Char.IsDead($.prossie6_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie6_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie6_told_to_go_into_ball = 1;
        }
        if ($.prossie6_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie6_lm5.SetIdle();
          $.prossie6_lm5.RemoveElegantly();
          $.flag_prossie6_at_ball = 1;
        }
        if ($.flag_prossie6_told_to_go_into_ball == 1) {
          if ($.flag_prossie6_at_ball == 0) {
            if ($.flag_timer_prossie6_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie6_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie6_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie7_at_ball == 0) {
      if (Char.IsDead($.prossie7_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie7_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message7_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message7_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message7_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie7_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie7_lm5_in_car == 0) {
            $.prossie7_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie7_lm5.FollowPlayer($.player);
              $.radarped_prossie7_lm5.Remove();
              $.flag_blip_on_prossie7_lm5 = 0;
              while (!($.prossie7_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie7_at_ball == 0) {
                  if (Char.IsDead($.prossie7_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie7_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie7_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
                      $.flag_blip_on_prossie7_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie7_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie7_lm5 == 1) {
                      $.prossie7_lm5.FollowPlayer($.player);
                      $.radarped_prossie7_lm5.Remove();
                      $.flag_blip_on_prossie7_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie7_lm5_in_car = 1;
              $.prossie7_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie7_lm5_in_car == 1) {
        if ($.flag_prossie7_in_car_park == 0) {
          if (!($.prossie7_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie7_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie7_lm5 = Blip.AddForChar($.prossie7_lm5);
            $.flag_blip_on_prossie7_lm5 = 1;
            $.flag_prossie7_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie7_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie7_lm5 == 1) {
            $.prossie7_lm5.FollowPlayer($.player);
            $.radarped_prossie7_lm5.Remove();
            $.flag_blip_on_prossie7_lm5 = 0;
          }
        }
        if ($.prossie7_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie7_at_ball == 0 && $.flag_prossie7_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie7_at_ball == 0) {
            if (Char.IsDead($.prossie7_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie7_lm5.LeaveGroup();
          if ($.prossie7_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie7_lm5.StoreCarIsIn();
            $.prossie7_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie7_in_car_park = 1;
        }
      }
      if ($.flag_prossie7_in_car_park == 1) {
        if (!($.prossie7_lm5.IsInAnyCar()) && $.flag_prossie7_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie7_at_ball == 0) {
            if (Char.IsDead($.prossie7_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie7_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie7_told_to_go_into_ball = 1;
        }
        if ($.prossie7_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie7_lm5.SetIdle();
          $.prossie7_lm5.RemoveElegantly();
          $.flag_prossie7_at_ball = 1;
        }
        if ($.flag_prossie7_told_to_go_into_ball == 1) {
          if ($.flag_prossie7_at_ball == 0) {
            if ($.flag_timer_prossie7_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie7_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie7_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
    if ($.flag_prossie8_at_ball == 0) {
      if (Char.IsDead($.prossie8_lm5)) {
        Text.PrintNow("LM5_2", 5000, 1);
        // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
      }
      if ($.flag_prossie8_lm5_in_car == 0) {
        if ($.player.LocateOnFootChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */) && $.flag_had_car_message8_lm5 == 0) {
          Text.PrintNow("LM5_3", 5000, 1);
          $.flag_had_car_message8_lm5 = 1;
        }
        if (!($.player.LocateAnyMeansChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */))) {
          $.flag_had_car_message8_lm5 = 0;
        }
        if ($.player.LocateInCarChar3D($.prossie8_lm5, 8.0, 8.0, 2.0, 0 /* FALSE */)) {
          if ($.flag_prossie8_lm5_in_car == 0) {
            $.prossie8_lm5.TurnToFacePlayer($.player);
          }
          if ($.player.IsStopped()) {
            if ($.player.IsInAnyCar()) {
              $.vehicle_lm5 = $.player.StoreCarIsIn();
              $.max_no_of_passengers_lm5 = $.vehicle_lm5.GetMaximumNumberOfPassengers();
              $.no_of_passengers_lm5 = $.vehicle_lm5.GetNumberOfPassengers();
              $.room_left_in_car_lm5 = $.max_no_of_passengers_lm5 - $.no_of_passengers_lm5;
            }
            if ($.room_left_in_car_lm5 > 0) {
              $.prossie8_lm5.FollowPlayer($.player);
              $.radarped_prossie8_lm5.Remove();
              $.flag_blip_on_prossie8_lm5 = 0;
              while (!($.prossie8_lm5.IsInCar($.vehicle_lm5))) {
                await asyncWait(0);
                // SCM GOSUB check_for_dead_prossies
                await check_for_dead_prossies();
                // fallback if label was not emitted as async function: no-op continues linearly
                if ($.number_of_dead_prossies > 0) {
                  Text.PrintNow("LM5_2", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if (Car.IsDead($.vehicle_lm5)) {
                  Text.PrintNow("WRECKED", 5000, 1);
                  // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                  throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                }
                if ($.flag_prossie8_at_ball == 0) {
                  if (Char.IsDead($.prossie8_lm5)) {
                    Text.PrintNow("LM5_2", 5000, 1);
                    // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
                    throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
                  }
                  else {
                    if (!($.prossie8_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie8_lm5 == 0) {
                      Text.PrintNow("HEY5", 5000, 1);
                      $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
                      $.flag_blip_on_prossie8_lm5 = 1;
                      // SCM GOTO → prossie_checks (not lowered; manual jump required)
                      throw new Error("unresolved GOTO prossie_checks"); // fallback: would break linear control flow
                    }
                    if ($.player.LocateAnyMeansChar2D($.prossie8_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie8_lm5 == 1) {
                      $.prossie8_lm5.FollowPlayer($.player);
                      $.radarped_prossie8_lm5.Remove();
                      $.flag_blip_on_prossie8_lm5 = 0;
                    }
                  }
                }
              }
              $.flag_prossie8_lm5_in_car = 1;
              $.prossie8_lm5.SetRunning(0 /* FALSE */);
            }
            else {
              if ($.flag_had_room_message_lm5 == 0) {
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
      if ($.flag_prossie8_lm5_in_car == 1) {
        if ($.flag_prossie8_in_car_park == 0) {
          if (!($.prossie8_lm5.IsInPlayersGroup($.player)) && $.flag_blip_on_prossie8_lm5 == 0) {
            Text.PrintNow("HEY5", 5000, 1);
            $.radarped_prossie8_lm5 = Blip.AddForChar($.prossie8_lm5);
            $.flag_blip_on_prossie8_lm5 = 1;
            $.flag_prossie8_lm5_in_car = 0;
          }
          if ($.player.LocateAnyMeansChar2D($.prossie8_lm5, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_prossie8_lm5 == 1) {
            $.prossie8_lm5.FollowPlayer($.player);
            $.radarped_prossie8_lm5.Remove();
            $.flag_blip_on_prossie8_lm5 = 0;
          }
        }
        if ($.prossie8_lm5.IsStoppedInArea3D(1003.5, -883.0, 13.9, 996.8, -876.4, 18.0, 0 /* FALSE */) && $.flag_prossie8_at_ball == 0 && $.flag_prossie8_in_car_park == 0) {
          await asyncWait(0);
          if ($.flag_prossie8_at_ball == 0) {
            if (Char.IsDead($.prossie8_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie8_lm5.LeaveGroup();
          if ($.prossie8_lm5.IsInAnyCar()) {
            $.vehicle_lm5 = $.prossie8_lm5.StoreCarIsIn();
            $.prossie8_lm5.SetObjLeaveCar($.vehicle_lm5);
          }
          $.flag_prossie8_in_car_park = 1;
        }
      }
      if ($.flag_prossie8_in_car_park == 1) {
        if (!($.prossie8_lm5.IsInAnyCar()) && $.flag_prossie8_told_to_go_into_ball == 0) {
          await asyncWait(0);
          if ($.flag_prossie8_at_ball == 0) {
            if (Char.IsDead($.prossie8_lm5)) {
              Text.PrintNow("LM5_2", 5000, 1);
              // SCM GOTO → mission_luigi5_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_luigi5_failed"); // fallback: would break linear control flow
            }
          }
          $.prossie8_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
          ++$.counter_no_of_girls_at_the_ball;
          Sound.AddOneOffSound(999.9, -879.3, 15.0, 94 /* SOUND_PART_MISSION_COMPLETE */);
          $.player.ClearWantedLevel();
          $.flag_prossie8_told_to_go_into_ball = 1;
        }
        if ($.prossie8_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie8_lm5.SetIdle();
          $.prossie8_lm5.RemoveElegantly();
          $.flag_prossie8_at_ball = 1;
        }
        if ($.flag_prossie8_told_to_go_into_ball == 1) {
          if ($.flag_prossie8_at_ball == 0) {
            if ($.flag_timer_prossie8_lm5 == 0) {
              timerb = 0;
              $.flag_timer_prossie8_lm5 = 1;
            }
            if (timerb > 20000) {
              $.prossie8_lm5.SetCoordinates(999.0, -891.0, 14.3);
            }
          }
        }
      }
    }
  }
  if ($.counter_no_of_girls_at_the_ball < 4) {
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
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_luigi5_passed() {
  Hud.FreezeTimer(1 /* TRUE */);
  // SCM GOSUB mission_end_cutscene
  await mission_end_cutscene();
  // fallback if label was not emitted as async function: no-op continues linearly
  if ($.counter_girls_trying_to_get_to_ball > 0) {
    $.sphere_lm5.Remove();
    Hud.SwitchWidescreen(1 /* ON */);
    $.player.SetControl(0 /* OFF */);
    Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
    Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
    World.ClearArea(1006.845, -885.5, 14.7, 2.0, 1 /* TRUE */);
    Camera.SetFixedPosition(1006.845, -885.5, 14.7, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(1005.9, -885.0, 14.6, 2 /* JUMP_CUT */);
    // SCM GOSUB mission_end_cutscene2
    await mission_end_cutscene2();
    // fallback if label was not emitted as async function: no-op continues linearly
    Hud.SwitchWidescreen(0 /* OFF */);
    Camera.RestoreJumpcut();
    $.player.SetControl(1 /* ON */);
    Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  }
  $.flag_luigi_mission5_passed = 1;
  $.flag_all_luigi_missions_passed = 1;
  Stat.RegisterMissionPassed("LM5");
  Stat.PlayerMadeProgress(1);
  Audio.PlayMissionPassedTune(1);
  $.score_lm5 = $.counter_no_of_girls_at_the_ball * 500;
  Text.PrintWithNumberBig("M_PASS", $.score_lm5, 10000, 1);
  $.player.AddScore($.score_lm5);
  $.player.ClearWantedLevel();
  if ($.counter_no_of_girls_at_the_ball == 8) {
    Text.PrintWithNumberNow("BONUS", 2000, 5000, 1);
    $.player.AddScore(2000);
  }
  $.luigi_contact_blip.Remove();
  return;
}

async function mission_cleanup_luigi5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  $.gen_car28.Switch(101);
  $.ball_sounds.Remove();
  $.sphere_lm5.Remove();
  $.fuzzball_sign.MarkAsNoLongerNeeded();
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE`);
  Streaming.MarkModelAsNoLongerNeeded(ped`PROSTITUTE2`);
  Hud.ClearTimer($.timer_lm5);
  Hud.FreezeTimer(0 /* FALSE */);
  Hud.ClearCounter($.counter_no_of_girls_at_the_ball);
  $.radar_blip_coord1_lm5.Remove();
  $.radarped_prossie1_lm5.Remove();
  $.radarped_prossie2_lm5.Remove();
  $.radarped_prossie3_lm5.Remove();
  $.radarped_prossie4_lm5.Remove();
  $.radarped_prossie5_lm5.Remove();
  $.radarped_prossie6_lm5.Remove();
  $.radarped_prossie7_lm5.Remove();
  $.radarped_prossie8_lm5.Remove();
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
        $.prossie1_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie2_at_ball == 0) {
    if ($.flag_prossie2_in_car_park == 1) {
      if (!(Char.IsDead($.prossie2_lm5))) {
        $.prossie2_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie3_at_ball == 0) {
    if ($.flag_prossie3_in_car_park == 1) {
      if (!(Char.IsDead($.prossie3_lm5))) {
        $.prossie3_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie4_at_ball == 0) {
    if ($.flag_prossie4_in_car_park == 1) {
      if (!(Char.IsDead($.prossie4_lm5))) {
        $.prossie4_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie5_at_ball == 0) {
    if ($.flag_prossie5_in_car_park == 1) {
      if (!(Char.IsDead($.prossie5_lm5))) {
        $.prossie5_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie6_at_ball == 0) {
    if ($.flag_prossie6_in_car_park == 1) {
      if (!(Char.IsDead($.prossie6_lm5))) {
        $.prossie6_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie7_at_ball == 0) {
    if ($.flag_prossie7_in_car_park == 1) {
      if (!(Char.IsDead($.prossie7_lm5))) {
        $.prossie7_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  if ($.flag_prossie8_at_ball == 0) {
    if ($.flag_prossie8_in_car_park == 1) {
      if (!(Char.IsDead($.prossie8_lm5))) {
        $.prossie8_lm5.SetObjGotoCoordOnFoot(999.0, -891.0);
        ++$.counter_girls_trying_to_get_to_ball;
      }
    }
  }
  return;
}

async function mission_end_cutscene2() {
  timerb = 0;
  while ($.counter_girls_trying_to_get_to_ball > 0) {
    await asyncWait(0);
    World.ClearArea(1000.4, -886.7, 14.4, 6.0, 0 /* FALSE */);
    if ($.flag_prossie1_at_ball == 0) {
      if (!(Char.IsDead($.prossie1_lm5))) {
        if (timerb > 20000) {
          $.prossie1_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie1_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie1_lm5.SetIdle();
          $.prossie1_lm5.RemoveElegantly();
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
          $.prossie2_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie2_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie2_lm5.SetIdle();
          $.prossie2_lm5.RemoveElegantly();
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
          $.prossie3_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie3_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie3_lm5.SetIdle();
          $.prossie3_lm5.RemoveElegantly();
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
          $.prossie4_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie4_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie4_lm5.SetIdle();
          $.prossie4_lm5.RemoveElegantly();
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
          $.prossie5_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie5_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie5_lm5.SetIdle();
          $.prossie5_lm5.RemoveElegantly();
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
          $.prossie6_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie6_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie6_lm5.SetIdle();
          $.prossie6_lm5.RemoveElegantly();
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
          $.prossie7_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie7_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie7_lm5.SetIdle();
          $.prossie7_lm5.RemoveElegantly();
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
          $.prossie8_lm5.SetCoordinates(999.0, -891.0, 14.3);
        }
        if ($.prossie8_lm5.LocateOnFoot2D(999.0, -891.0, 1.0, 1.0, 0 /* FALSE */)) {
          $.prossie8_lm5.SetIdle();
          $.prossie8_lm5.RemoveElegantly();
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
  // MissionBoundary
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
  // MissionBoundary
  // VAR_INT vehicle_lm5
  // VAR_INT flag_blip_on_prossie1_lm5
  // VAR_INT flag_blip_on_prossie2_lm5
  // VAR_INT flag_blip_on_prossie3_lm5
  // VAR_INT flag_blip_on_prossie4_lm5
  // VAR_INT flag_blip_on_prossie5_lm5
  // VAR_INT flag_blip_on_prossie6_lm5
  // VAR_INT flag_blip_on_prossie7_lm5
  // VAR_INT flag_blip_on_prossie8_lm5
  // VAR_INT radar_blip_coord1_lm5
  // VAR_INT radarped_prossie1_lm5
  // VAR_INT radarped_prossie2_lm5
  // VAR_INT radarped_prossie3_lm5
  // VAR_INT radarped_prossie4_lm5
  // VAR_INT radarped_prossie5_lm5
  // VAR_INT radarped_prossie6_lm5
  // VAR_INT radarped_prossie7_lm5
  // VAR_INT radarped_prossie8_lm5
  // VAR_INT timer_lm5
  // VAR_INT prossie1_lm5
  // VAR_INT prossie2_lm5
  // VAR_INT prossie3_lm5
  // VAR_INT prossie4_lm5
  // VAR_INT prossie5_lm5
  // VAR_INT prossie6_lm5
  // VAR_INT prossie7_lm5
  // VAR_INT prossie8_lm5
  // VAR_INT flag_prossie1_at_ball
  // VAR_INT flag_prossie2_at_ball
  // VAR_INT flag_prossie3_at_ball
  // VAR_INT flag_prossie4_at_ball
  // VAR_INT flag_prossie5_at_ball
  // VAR_INT flag_prossie6_at_ball
  // VAR_INT flag_prossie7_at_ball
  // VAR_INT flag_prossie8_at_ball
  // VAR_INT flag_prossie1_lm5_in_car
  // VAR_INT flag_prossie2_lm5_in_car
  // VAR_INT flag_prossie3_lm5_in_car
  // VAR_INT flag_prossie4_lm5_in_car
  // VAR_INT flag_prossie5_lm5_in_car
  // VAR_INT flag_prossie6_lm5_in_car
  // VAR_INT flag_prossie7_lm5_in_car
  // VAR_INT flag_prossie8_lm5_in_car
  // VAR_INT max_no_of_passengers_lm5
  // VAR_INT room_left_in_car_lm5
  // VAR_INT no_of_passengers_lm5
  // VAR_INT flag_had_room_message_lm5
  // VAR_INT counter_no_of_girls_at_the_ball
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
  // VAR_INT ball_sounds
  // VAR_INT flag_moved_door1_lm5
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
  // VAR_INT flag_timer_prossie1_lm5
  // VAR_INT flag_timer_prossie2_lm5
  // VAR_INT flag_timer_prossie3_lm5
  // VAR_INT flag_timer_prossie4_lm5
  // VAR_INT flag_timer_prossie5_lm5
  // VAR_INT flag_timer_prossie6_lm5
  // VAR_INT flag_timer_prossie7_lm5
  // VAR_INT flag_timer_prossie8_lm5
}
