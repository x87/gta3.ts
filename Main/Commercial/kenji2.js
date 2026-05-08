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
  $.flag_spray_blip_on_car5_km2 = 0;
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
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k2_gis);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.SetAnim($.kenji);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.SetAnim($.kenji);
  $.cs_note = CutsceneObject.Create(hier`cutobj03`);
  $.cs_note.SetAnim(MINNOTE);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(459.1, -1413.0, 25.11);
  $.player.SetHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3902) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM2_A", 10000, 1);
  while ($.cs_time < 8570) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM2_B", 10000, 1);
  while ($.cs_time < 15119) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM2_C", 10000, 1);
  while ($.cs_time < 21459) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM2_D", 10000, 1);
  while ($.cs_time < 27033) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM2_E", 10000, 1);
  while ($.cs_time < 33164) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
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
  World.SwitchRubbish(1 /* ON */);
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  Streaming.RequestModel(car`CHEETAH`);
  Streaming.RequestModel(car`STINGER`);
  Streaming.RequestModel(car`INFERNUS`);
  while (!(Streaming.HasModelLoaded(car`CHEETAH`)) || !(Streaming.HasModelLoaded(car`STINGER`)) || !(Streaming.HasModelLoaded(car`INFERNUS`))) {
    await asyncWait(0);
  }
  Text.PrintNow("KM2_3", 5000, 1);
  $.radar_blip_coord1_km2 = Blip.AddForCoord(375.0, -506.9, -100.0);
  $.car_to_steal1_km2 = Car.Create(98 /* CAR_CHEETAH */, 348.3, -0.5, -100.0);
  $.car_to_steal1_km2.SetHeading(270.0);
  $.car_to_steal1_km2.ChangeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal1_km2.SetCanRespray(0 /* FALSE */);
  $.radar_blip_car1_km2 = Blip.AddForCar($.car_to_steal1_km2);
  $.flag_blip_car1_on = 1;
  $.car_to_steal3_km2 = Car.Create(85 /* CAR_STINGER */, -71.1, -1467.4, 25.1);
  $.car_to_steal3_km2.ChangeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal3_km2.SetCanRespray(0 /* FALSE */);
  $.radar_blip_car3_km2 = Blip.AddForCar($.car_to_steal3_km2);
  $.car_to_steal3_km2.SetHeading(270.0);
  $.flag_blip_car3_on = 1;
  $.car_to_steal4_km2 = Car.Create(94 /* CAR_INFERNUS */, -61.7, -358.4, 15.2);
  $.car_to_steal4_km2.ChangeColor(13 /* CARCOLOUR_RED4 */, 13 /* CARCOLOUR_RED4 */);
  $.car_to_steal4_km2.SetCanRespray(0 /* FALSE */);
  $.radar_blip_car4_km2 = Blip.AddForCar($.car_to_steal4_km2);
  $.car_to_steal4_km2.SetHeading(90.0);
  $.flag_blip_car4_on = 1;
  Hud.DisplayTimer($.timer_km2);
  while ($.timer_km2 > 0) {
    await asyncWait(0);
    if ($.counter_number_of_cars_in_garage_km2 == 3) {
      // SCM GOTO → mission_kenji2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_kenji2_passed"); // fallback: would break linear control flow
    }
    if ($.flag_car1_in_garage == 0) {
      if ($.garage_km2.IsCarInMission() && $.flag_garage_no_blip_car1_km2 == 1) {
        $.flag_car1_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal1_km2))) {
          $.car_to_steal1_km2.Delete();
        }
        $.flag_car1_in_garage = 1;
      }
      if ($.flag_car1_destroyed == 0) {
        if (Car.IsDead($.car_to_steal1_km2)) {
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car1_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          if ($.car_to_steal1_km2.IsUpsidedown() && $.car_to_steal1_km2.IsStopped()) {
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        if ($.car_to_steal1_km2.IsStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 0 /* FALSE */)) {
          if (!($.car_to_steal1_km2.IsVisiblyDamaged())) {
            $.flag_garage_no_blip_car1_km2 = 1;
          }
          if ($.garage_km2.DoesContainCar($.car_to_steal1_km2)) {
            if ($.flag_player_had_garage_car1_message == 0) {
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
        if ($.player.IsInCar($.car_to_steal1_km2)) {
          if ($.flag_blip_car1_on == 1) {
            $.radar_blip_car1_km2.Remove();
            $.flag_blip_car1_on = 0;
          }
          if ($.car_to_steal1_km2.IsVisiblyDamaged()) {
            if ($.flag_player_damage_message_car1_km2 == 0) {
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_player_damage_message_car1_km2 = 1;
            }
            if ($.flag_spray_blip_on_car1_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car1_km2 = 1;
            }
          }
          else {
            $.garage_km2.SetTargetCarForMission($.car_to_steal1_km2);
            $.flag_player_damage_message_car1_km2 = 0;
            if ($.flag_spray_blip_on_car1_km2 == 1) {
              $.spray_blip_km2.Remove();
              $.flag_spray_blip_on_car1_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car1_km2 = 0;
          if ($.flag_spray_blip_on_car1_km2 == 1) {
            $.spray_blip_km2.Remove();
            $.flag_spray_blip_on_car1_km2 = 0;
          }
          if ($.flag_blip_car1_on == 0) {
            if ($.flag_garage_no_blip_car1_km2 == 0) {
              $.radar_blip_car1_km2 = Blip.AddForCar($.car_to_steal1_km2);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_blip_car1_on = 1;
            }
          }
        }
      }
    }
    if ($.flag_car3_in_garage == 0) {
      if ($.garage_km2.IsCarInMission() && $.flag_garage_no_blip_car3_km2 == 1) {
        $.flag_car3_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal3_km2))) {
          $.car_to_steal3_km2.Delete();
        }
        $.flag_car3_in_garage = 1;
      }
      if ($.flag_car3_destroyed == 0) {
        if (Car.IsDead($.car_to_steal3_km2)) {
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car3_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          if ($.car_to_steal3_km2.IsUpsidedown() && $.car_to_steal3_km2.IsStopped()) {
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        if ($.car_to_steal3_km2.IsStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 0 /* FALSE */)) {
          if (!($.car_to_steal3_km2.IsVisiblyDamaged())) {
            $.flag_garage_no_blip_car3_km2 = 1;
          }
          if ($.garage_km2.DoesContainCar($.car_to_steal3_km2)) {
            if ($.flag_player_had_garage_car3_message == 0) {
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
        if ($.player.IsInCar($.car_to_steal3_km2)) {
          if ($.flag_blip_car3_on == 1) {
            $.radar_blip_car3_km2.Remove();
            $.flag_blip_car3_on = 0;
          }
          if ($.car_to_steal3_km2.IsVisiblyDamaged()) {
            if ($.flag_player_damage_message_car3_km2 == 0) {
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_player_damage_message_car3_km2 = 1;
            }
            if ($.flag_spray_blip_on_car3_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car3_km2 = 1;
            }
          }
          else {
            $.garage_km2.SetTargetCarForMission($.car_to_steal3_km2);
            $.flag_player_damage_message_car3_km2 = 0;
            if ($.flag_spray_blip_on_car3_km2 == 1) {
              $.spray_blip_km2.Remove();
              $.flag_spray_blip_on_car3_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car3_km2 = 0;
          if ($.flag_spray_blip_on_car3_km2 == 1) {
            $.spray_blip_km2.Remove();
            $.flag_spray_blip_on_car3_km2 = 0;
          }
          if ($.flag_blip_car3_on == 0) {
            if ($.flag_garage_no_blip_car3_km2 == 0) {
              $.radar_blip_car3_km2 = Blip.AddForCar($.car_to_steal3_km2);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_blip_car3_on = 1;
            }
          }
        }
      }
    }
    if ($.flag_car4_in_garage == 0) {
      if ($.garage_km2.IsCarInMission() && $.flag_garage_no_blip_car4_km2 == 1) {
        $.flag_car4_destroyed = 1;
        ++$.counter_number_of_cars_in_garage_km2;
        Sound.AddOneOffSound(380.3, -506.8, 26.1, 94 /* SOUND_PART_MISSION_COMPLETE */);
        Text.PrintNow("KM2_2", 5000, 1);
        if (!(Car.IsDead($.car_to_steal4_km2))) {
          $.car_to_steal4_km2.Delete();
        }
        $.flag_car4_in_garage = 1;
      }
      if ($.flag_car4_destroyed == 0) {
        if (Car.IsDead($.car_to_steal4_km2)) {
          Text.PrintNow("WRECKED", 5000, 1);
          $.flag_car4_destroyed = 1;
          // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
        }
        else {
          if ($.car_to_steal4_km2.IsUpsidedown() && $.car_to_steal4_km2.IsStopped()) {
            Text.PrintNow("UPSIDE", 5000, 1);
            // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
            throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
          }
        }
        if ($.car_to_steal4_km2.IsStoppedInArea3D(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 0 /* FALSE */)) {
          if (!($.car_to_steal4_km2.IsVisiblyDamaged())) {
            $.flag_garage_no_blip_car4_km2 = 1;
          }
          if ($.garage_km2.DoesContainCar($.car_to_steal4_km2)) {
            if ($.flag_player_had_garage_car4_message == 0) {
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
        if ($.player.IsInCar($.car_to_steal4_km2)) {
          if ($.flag_blip_car4_on == 1) {
            $.radar_blip_car4_km2.Remove();
            $.flag_blip_car4_on = 0;
          }
          if ($.car_to_steal4_km2.IsVisiblyDamaged()) {
            if ($.flag_player_damage_message_car4_km2 == 0) {
              Text.PrintNow("KM2_1", 7000, 1);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_player_damage_message_car4_km2 = 1;
            }
            if ($.flag_spray_blip_on_car4_km2 == 0) {
              $.spray_blip_km2 = Blip.AddSpriteForCoord(379.0, -493.8, 25.2, 18 /* RADAR_SPRITE_SPRAY */);
              $.flag_spray_blip_on_car4_km2 = 1;
            }
          }
          else {
            $.garage_km2.SetTargetCarForMission($.car_to_steal4_km2);
            $.flag_player_damage_message_car4_km2 = 0;
            if ($.flag_spray_blip_on_car4_km2 == 1) {
              $.spray_blip_km2.Remove();
              $.flag_spray_blip_on_car4_km2 = 0;
            }
          }
        }
        else {
          $.flag_player_damage_message_car4_km2 = 0;
          if ($.flag_spray_blip_on_car4_km2 == 1) {
            $.spray_blip_km2.Remove();
            $.flag_spray_blip_on_car4_km2 = 0;
          }
          if ($.flag_blip_car4_on == 0) {
            if ($.flag_garage_no_blip_car4_km2 == 0) {
              $.radar_blip_car4_km2 = Blip.AddForCar($.car_to_steal4_km2);
              $.garage_km2.SetTargetCarForMission(-1);
              $.flag_blip_car4_on = 1;
            }
          }
        }
      }
    }
  }
  Text.PrintNow("OUTTIME", 5000, 1);
  // SCM GOTO → mission_kenji2_failed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji2_failed"); // fallback: would break linear control flow
}

async function mission_kenji2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_kenji2_passed() {
  $.flag_kenji_mission2_passed = 1;
  Stat.RegisterMissionPassed("KM2");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 25000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(25000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT kenji_mission3_loop
  return;
}

async function mission_cleanup_kenji2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.garage_km2.SetTargetCarForMission(-1);
  Hud.ClearTimer($.timer_km2);
  $.radar_blip_coord1_km2.Remove();
  $.radar_blip_car1_km2.Remove();
  $.radar_blip_car3_km2.Remove();
  $.radar_blip_car4_km2.Remove();
  $.spray_blip_km2.Remove();
  Streaming.MarkModelAsNoLongerNeeded(car`CHEETAH`);
  Streaming.MarkModelAsNoLongerNeeded(car`STINGER`);
  Streaming.MarkModelAsNoLongerNeeded(car`INFERNUS`);
  Mission.Finish();
  return;
  }
}

export async function kenji2() {
  // MissionBoundary
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
  // MissionBoundary
  // VAR_INT car_to_steal1_km2
  // VAR_INT car_to_steal2_km2
  // VAR_INT car_to_steal3_km2
  // VAR_INT car_to_steal4_km2
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
  // VAR_INT flag_player_had_garage_car5_message
}
