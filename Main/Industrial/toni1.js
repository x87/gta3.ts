// Generated from Main/Industrial/toni1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_toni1() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_toni_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.picked_up_grenades = 0;
  $.counter1_toni1 = 0;
  $.dead_van1 = 0;
  $.dead_van2 = 0;
  $.dead_van3 = 0;
  $.in_van1 = 0;
  $.in_van2 = 0;
  $.in_van3 = 0;
  {
  Streaming.LoadSpecialCharacter(1, tony);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, TONYH);
  Streaming.RequestModel(ind_newrizzos);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(ind_newrizzos))) {
    await asyncWait(0);
  }
  Cutscene.Load(t1_tol);
  Cutscene.SetOffset(1218.42, -314.5, 28.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_tony = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_tony.SetAnim(tony);
  $.cs_tonyhead = CutsceneHead.Create($.cs_tony, hier`cutobj02`);
  $.cs_tonyhead.SetAnim(tony);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(1219.5, -321.1, 27.5, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1219.5, -321.1, 26.4);
  $.player.SetHeading(180.0);
  World.ClearArea(1216.1, -313.0, 29.9, 10.0, 1 /* TRUE */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 171) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_A", 10000, 1);
  while ($.cs_time < 3769) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_B", 10000, 1);
  while ($.cs_time < 5825) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_C", 10000, 1);
  while ($.cs_time < 8026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_D", 10000, 1);
  while ($.cs_time < 11500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 15961) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_G", 10000, 1);
  while ($.cs_time < 21005) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_H", 10000, 1);
  while ($.cs_time < 22997) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_I", 10000, 1);
  while ($.cs_time < 27589) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("TM1_J", 10000, 1);
  while ($.cs_time < 29796) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 31666) {
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
  Streaming.RequestModel(car`MRWONGS`);
  Streaming.RequestModel(ped`CT_MAN1`);
  World.SwitchRubbish(1 /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(ind_newrizzos);
  while (!(Streaming.HasModelLoaded(car`MRWONGS`)) || !(Streaming.HasModelLoaded(ped`CT_MAN1`))) {
    await asyncWait(0);
  }
  $.gen_car31.Switch(0);
  $.free_greandes = Pickup.CreateWithAmmo(151 /* WEAPON_GRENADE */, 3 /* PICKUP_ONCE */, 10, 1278.8, -81.5, 15.1);
  $.grenade_blip = Blip.AddSpriteForPickup($.free_greandes, 20 /* RADAR_SPRITE_WEAPON */);
  $.t1_triad_van1 = Car.Create(126 /* CAR_MRWONGS */, 854.0, -778.0, -100.0);
  $.vanman1 = Char.CreateInsideCar($.t1_triad_van1, 4 /* PEDTYPE_CIVMALE */, ped`CT_MAN1`);
  $.blip1_van1 = Blip.AddForCar($.t1_triad_van1);
  $.t1_triad_van1.SetCruiseSpeed(17.0);
  $.t1_triad_van1.SetDrivingStyle(0);
  $.t1_triad_van1.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.vanman1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.t1_triad_van2 = Car.Create(126 /* CAR_MRWONGS */, 1020.0, -677.0, -100.0);
  $.vanman2 = Char.CreateInsideCar($.t1_triad_van2, 4 /* PEDTYPE_CIVMALE */, ped`CT_MAN1`);
  $.blip2_van2 = Blip.AddForCar($.t1_triad_van2);
  $.t1_triad_van2.SetCruiseSpeed(17.0);
  $.t1_triad_van2.SetDrivingStyle(0);
  $.t1_triad_van2.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.vanman2.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
  $.t1_triad_van3 = Car.Create(126 /* CAR_MRWONGS */, 904.0, -579.0, -100.0);
  $.vanman3 = Char.CreateInsideCar($.t1_triad_van3, 4 /* PEDTYPE_CIVMALE */, ped`CT_MAN1`);
  $.blip3_van3 = Blip.AddForCar($.t1_triad_van3);
  $.t1_triad_van3.SetCruiseSpeed(17.0);
  $.t1_triad_van3.SetDrivingStyle(0);
  $.t1_triad_van3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.vanman3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  while (!($.counter1_toni1 == 3)) {
    await asyncWait(0);
    if (Car.IsDead($.t1_triad_van1) && $.dead_van1 == 0) {
      $.blip1_van1.Remove();
      $.dead_van1 = 1;
      ++$.counter1_toni1;
    }
    if (!(Car.IsDead($.t1_triad_van1))) {
      if (!($.t1_triad_van1.IsHealthGreater(999))) {
        if (!(Char.IsDead($.vanman1))) {
          if ($.vanman1.IsInCar($.t1_triad_van1)) {
            $.t1_triad_van1.SetCruiseSpeed(18.0);
            $.t1_triad_van1.SetDrivingStyle(2);
            $.t1_triad_van1.SetOnlyDamagedByPlayer(0 /* FALSE */);
          }
        }
      }
    }
    if (!(Car.IsDead($.t1_triad_van1))) {
      if ($.player.IsInCar($.t1_triad_van1) && $.in_van1 == 0) {
        $.t1_triad_van1.SetOnlyDamagedByPlayer(0 /* FALSE */);
        $.in_van1 = 1;
      }
    }
    if (Car.IsDead($.t1_triad_van2) && $.dead_van2 == 0) {
      $.blip2_van2.Remove();
      $.dead_van2 = 1;
      ++$.counter1_toni1;
    }
    if (!(Car.IsDead($.t1_triad_van2))) {
      if (!($.t1_triad_van2.IsHealthGreater(999))) {
        if (!(Char.IsDead($.vanman2))) {
          if ($.vanman2.IsInCar($.t1_triad_van2)) {
            $.t1_triad_van2.SetCruiseSpeed(17.0);
            $.t1_triad_van2.SetDrivingStyle(2);
            $.t1_triad_van2.SetOnlyDamagedByPlayer(0 /* FALSE */);
          }
        }
      }
    }
    if (!(Car.IsDead($.t1_triad_van2))) {
      if ($.player.IsInCar($.t1_triad_van2) && $.in_van2 == 0) {
        $.t1_triad_van2.SetOnlyDamagedByPlayer(0 /* FALSE */);
        $.in_van2 = 1;
      }
    }
    if (Car.IsDead($.t1_triad_van3) && $.dead_van3 == 0) {
      $.blip3_van3.Remove();
      $.dead_van3 = 1;
      ++$.counter1_toni1;
    }
    if (!(Car.IsDead($.t1_triad_van3))) {
      if (!($.t1_triad_van3.IsHealthGreater(999))) {
        if (!(Char.IsDead($.vanman3))) {
          if ($.vanman3.IsInCar($.t1_triad_van3)) {
            $.t1_triad_van3.SetCruiseSpeed(19.0);
            $.t1_triad_van3.SetDrivingStyle(2);
            $.t1_triad_van3.SetOnlyDamagedByPlayer(0 /* FALSE */);
          }
        }
      }
    }
    if (!(Car.IsDead($.t1_triad_van3))) {
      if ($.player.IsInCar($.t1_triad_van3) && $.in_van3 == 0) {
        $.t1_triad_van3.SetOnlyDamagedByPlayer(0 /* FALSE */);
        $.in_van3 = 1;
      }
    }
    if ($.free_greandes.HasBeenCollected() && $.picked_up_grenades == 0) {
      await asyncWait(1500);
      $.controlmode = Pad.GetControllerMode();
      if ($.controlmode == 0 || $.controlmode == 1) {
        Text.PrintHelp(GREN_1);
      }
      if ($.controlmode == 2) {
        Text.PrintHelp(GREN_2);
      }
      if ($.controlmode == 3) {
        Text.PrintHelp(GREN_3);
      }
      $.picked_up_grenades = 1;
    }
  }
  }
  // SCM GOTO → mission_toni1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_toni1_passed"); // fallback: would break linear control flow
}

async function mission_toni1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_toni1_passed() {
  $.flag_toni_mission1_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 20000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(20000);
  Stat.RegisterMissionPassed(TM1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT toni_mission2_loop
  return;
}

async function mission_cleanup_toni1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_toni_mission = 0;
  $.blip1_van1.Remove();
  $.blip2_van2.Remove();
  $.blip3_van3.Remove();
  $.grenade_blip.Remove();
  $.free_greandes.Remove();
  $.gen_car31.Switch(101);
  Streaming.MarkModelAsNoLongerNeeded(car`MRWONGS`);
  Streaming.MarkModelAsNoLongerNeeded(ped`CT_MAN1`);
  Mission.Finish();
  return;
}

export async function toni1() {
  // MissionBoundary
  // SCM GOSUB mission_start_toni1
  await mission_start_toni1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_toni1_failed
    await mission_toni1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_toni1
  await mission_cleanup_toni1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT t1_triad_van1 t1_triad_van2 t1_triad_van3
  // VAR_INT blip1_van1 blip2_van2 blip3_van3
  // VAR_INT counter1_toni1
  // VAR_INT vanman1 vanman2 vanman3 in_van1 in_van2 in_van3
  // VAR_INT dead_van1 dead_van2 dead_van3
  // VAR_INT grenade_blip picked_up_grenades
  // VAR_INT triad_hates_you free_greandes
}
