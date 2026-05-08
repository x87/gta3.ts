// Generated from Main/Commercial/ray1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.rays_cutscene_flag = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.wanted_lvl_flag_r1 = 0;
  $.game_timer_r1 = 0;
  $.game_timer_start_r1 = 0;
  $.car_moving_stuck_flag = 0;
  $.getaway_stuck_flag = 0;
  $.get_away_car_health = 1000;
  $.game_timer_current_r1 = 0;
  $.get_away_car_x = 0.0;
  $.get_away_car_y = 0.0;
  $.get_away_car_z = 0.0;
  $.mfail_timer = 0;
  $.mfail_timer_current = 0;
  $.mfail_timer_started = 0;
  $.mfail_timer_reset_flag = 0;
  $.carlock_flag = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.RequestModel(toilet);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }
  World.ClearArea(39.0, -723.5, 22.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(39.0, -723.5, 22.0);
  $.player.SetHeading(90.0);
  Cutscene.Load(r1_sw);
  Cutscene.SetOffset(39.424, -726.677, 21.692);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_ray.SetAnim($.ray);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.SetAnim($.ray);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetNearClip(0.2);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2070) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM1_A, 8000, 1);
  while ($.cs_time < 6097) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM1_B, 8000, 1);
  while ($.cs_time < 9509) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM1_C, 8000, 1);
  while ($.cs_time < 11019) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM1_D, 8000, 1);
  while ($.cs_time < 16109) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM1_E, 8000, 1);
  while ($.cs_time < 21333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  $.player.GiveWeapon(11 /* WEAPONTYPE_GRENADE */, 12);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetNearClip(0.9);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.RequestModel(ped`LI_MAN2`);
  Streaming.RequestModel(car`SENTINEL`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(ped`LI_MAN2`)) || !(Streaming.HasModelLoaded(car`SENTINEL`))) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.rays_cutscene_flag = 0;
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.RequestModel(safehouse);
  $.ray1_blip = Blip.AddForCoord(378.0, -443.2, 29.9);
  Text.PrintNow(RM1_1, 5000, 1);
  while (!($.player.IsStoppedInArea2D(330.35, -471.43, 375.982, -431.119, 0))) {
    await asyncWait(0);
  }
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  Camera.SetFixedPosition(373.29, -444.714, 28.537, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(374.1447, -444.2669, 28.8032, 1 /* INTERPOLATION */);
  await asyncWait(3000);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  Camera.Restore();
  Audio.LoadMissionAudio(R1_A);
  $.get_away_car = 0;
  $.police_guard1 = 0;
  $.police_guard2 = 0;
  while (!(World.IsProjectileInArea(376.5, -445.2, 28.1, 380.1, -441.2, 31.7))) {
    await asyncWait(0);
    $.get_away_car = $.player.GetAmmoInWeapon(11 /* WEAPONTYPE_GRENADE */);
    $.police_guard1 = $.player.GetAmmoInWeapon(8 /* WEAPONTYPE_ROCKET */);
    $.get_away_car += $.police_guard1;
    if ($.police_guard2 == 0) {
      if ($.get_away_car == 0) {
        Text.PrintNow(RM1_4, 5000, 1);
        $.ray1_blip.Remove();
        $.ray1_blip = Blip.AddSpriteForCoord(345.5, -713.5, 26.1, 20 /* RADAR_SPRITE_WEAPON */);
        $.police_guard2 = 1;
      }
    }
    if ($.police_guard2 == 1) {
      if ($.get_away_car > 0) {
        Text.PrintNow(RM1_5, 5000, 1);
        $.ray1_blip.Remove();
        $.ray1_blip = Blip.AddForCoord(378.0, -443.2, 29.9);
        $.police_guard2 = 0;
      }
    }
  }
  World.DestroyProjectilesInArea(376.1, -445.2, 28.1, 380.1, -441.2, 31.7);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  Camera.SetFixedPosition(373.29, -444.714, 28.537, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(374.1447, -444.2669, 28.8032, 1 /* INTERPOLATION */);
  await asyncWait(100);
  Fx.AddExplosion(378.0, -443.5, 28.9, 0 /* EXPLOSION_GRENADE */);
  await asyncWait(500);
  $.fire_1 = ScriptFire.Create(377.0, -444.0, 28.1);
  $.fire_2 = ScriptFire.Create(377.0, -443.0, 28.1);
  $.fire_3 = ScriptFire.Create(379.0, -444.0, 28.1);
  $.fire_4 = ScriptFire.Create(379.0, -443.0, 28.1);
  $.fire_1.SetAudio(1 /* TRUE */);
  $.fire_2.SetAudio(0 /* FALSE */);
  $.fire_3.SetAudio(0 /* FALSE */);
  $.fire_4.SetAudio(0 /* FALSE */);
  await asyncWait(250);
  $.burning_cop = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 378.0584, -444.7376, 28.3);
  await asyncWait(250);
  Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 377.0, -441.6, 28.9, 0);
  Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 378.0, -443.3, 28.9, 0);
  await asyncWait(800);
  Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -443.35, 30.0, 0);
  await asyncWait(500);
  Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -442.7, 30.0, 0);
  Fx.AddParticleEffect(4 /* POBJECT_DARK_SMOKE */, 376.0, -443.8, 30.0, 0);
  await asyncWait(1500);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  Camera.RestoreJumpcut();
  Camera.SetBehindPlayer();
  $.get_away_car = Car.Create(88 /* CAR_SENTINEL */, 380.0, -437.5, 21.1);
  $.get_away_car.SetHeading(90.0);
  $.get_away_car.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
  $.get_away_car.SetStrong(1 /* TRUE */);
  $.police_guard1 = Char.CreateInsideCar($.get_away_car, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
  $.the_witness = Char.CreateAsPassenger($.get_away_car, 4 /* PEDTYPE_CIVMALE */, ped`LI_MAN2`, 1);
  $.police_guard2 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 376.5428, -435.1743, 20.0837);
  $.police_guard2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
  $.police_guard2.SetObjGotoCoordOnFoot(374.0, -435.1743);
  $.police_guard3 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`COP`, 376.5428, -439.7169, 20.0837);
  $.police_guard3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
  $.police_guard3.SetObjGotoCoordOnFoot(374.0, -439.7169);
  $.witsec_garage.Deactivate();
  $.witsec_garage.Activate();
  $.ray1_blip.Remove();
  $.get_away_car.SetCruiseSpeed(20.0);
  $.get_away_car.SetDrivingStyle(2);
  $.get_away_car.WanderRandomly();
  $.get_away_car.SetAvoidLevelTransitions(1 /* TRUE */);
  Text.PrintNow(RM1_2, 5000, 1);
  $.game_timer_start_r1 = Clock.GetGameTimer();
  while (Char.IsStillAlive($.the_witness)) {
    if (!(Char.IsDead($.police_guard2))) {
      if (!($.police_guard2.IsInArea2D(375.0, -441.5, 386.0, -434.0, 0))) {
        $.police_guard2.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!(Char.IsDead($.police_guard3))) {
      if (!($.police_guard3.IsInArea2D(375.0, -441.5, 386.0, -434.0, 0))) {
        $.police_guard3.SetObjKillPlayerOnFoot($.player);
      }
    }
    if ($.wanted_lvl_flag_r1 == 0) {
      $.game_timer_current_r1 = Clock.GetGameTimer();
      $.game_timer_r1 = $.game_timer_current_r1 - $.game_timer_start_r1;
      if ($.game_timer_r1 > 3000) {
        $.player.AlterWantedLevelNoDrop(2);
        $.ray1_blip = Blip.AddForChar($.the_witness);
        if (Audio.HasMissionAudioLoaded()) {
          Audio.PlayMissionAudio();
        }
        $.wanted_lvl_flag_r1 = 1;
      }
    }
    if ($.wanted_lvl_flag_r1 == 1) {
      if (!($.player.LocateAnyMeansChar2D($.the_witness, 160.0, 160.0, 0)) && !($.the_witness.IsOnScreen())) {
        if ($.mfail_timer_reset_flag == 0) {
          $.ray1_blip.Remove();
          $.mfail_timer_started = Clock.GetGameTimer();
          $.mfail_timer_reset_flag = 1;
        }
        if ($.mfail_timer_reset_flag == 1) {
          $.mfail_timer_current = Clock.GetGameTimer();
          $.mfail_timer = $.mfail_timer_current - $.mfail_timer_started;
          if ($.mfail_timer > 4000) {
            if (!($.the_witness.IsOnScreen())) {
              $.mfail_timer_reset_flag = 0;
              $.the_witness.Delete();
              Text.PrintNow(RM1_3, 5000, 1);
              // SCM GOTO → mission_ray1_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_ray1_failed"); // fallback: would break linear control flow
            }
          }
        }
      }
      if ($.mfail_timer_reset_flag == 1) {
        if ($.player.LocateAnyMeansChar2D($.the_witness, 160.0, 160.0, 0) || $.the_witness.IsOnScreen()) {
          $.ray1_blip.Remove();
          $.ray1_blip = Blip.AddForChar($.the_witness);
          $.mfail_timer_reset_flag = 0;
        }
      }
    }
    if (!($.the_witness.IsInAnyCar())) {
      $.the_witness.SetObjFleePlayerOnFootAlways($.player);
    }
    if (!(Car.IsDead($.get_away_car))) {
      if ($.the_witness.IsInCar($.get_away_car)) {
        if ($.carlock_flag == 0) {
          if (!($.get_away_car.Locate2D(380.0, -437.5, 40.0, 40.0, 0))) {
            $.get_away_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
            $.get_away_car.SetCruiseSpeed(40.0);
            $.get_away_car.SetStrong(0 /* FALSE */);
            if ($.get_away_car.IsHealthGreater(800)) {
              $.get_away_car.SetHealth(800);
            }
            $.carlock_flag = 1;
          }
        }
        if ($.get_away_car.IsUpsidedown() && $.get_away_car.IsStopped()) {
          $.the_witness.SetObjLeaveCar($.get_away_car);
          if (!(Char.IsDead($.police_guard1))) {
            $.police_guard1.SetObjKillPlayerOnFoot($.player);
            $.police_guard1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
          }
        }
        if ($.player.IsInCar($.get_away_car)) {
          $.the_witness.SetObjLeaveCar($.get_away_car);
          if (!(Char.IsDead($.police_guard1))) {
            $.police_guard1.SetObjKillPlayerOnFoot($.player);
            $.police_guard1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
          }
        }
        $.get_away_car_health = $.get_away_car.GetHealth();
        if ($.get_away_car_health < 200) {
          $.the_witness.SetObjLeaveCar($.get_away_car);
          if (!(Char.IsDead($.police_guard1))) {
            $.police_guard1.SetObjKillPlayerOnFoot($.player);
            $.police_guard1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
          }
        }
        if ($.get_away_car.IsStopped()) {
          if ($.getaway_stuck_flag == 0) {
            TIMERA = 0;
            $.getaway_stuck_flag = 1;
          }
          if ($.getaway_stuck_flag == 1) {
            if (TIMERA > 5000) {
              $.the_witness.SetObjLeaveCar($.get_away_car);
              if (!(Char.IsDead($.police_guard1))) {
                $.police_guard1.SetObjKillPlayerOnFoot($.player);
                $.police_guard1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
              }
            }
          }
        }
        if (!($.get_away_car.IsStopped())) {
          $.getaway_stuck_flag = 0;
        }
        if ($.get_away_car.Locate2D($.get_away_car_x, $.get_away_car_y, 3.0, 3.0, 0)) {
          if ($.car_moving_stuck_flag == 0) {
            TIMERB = 0;
            $.car_moving_stuck_flag = 1;
          }
          if ($.car_moving_stuck_flag == 1) {
            if (TIMERB > 8000) {
              $.the_witness.SetObjLeaveCar($.get_away_car);
              if (!(Char.IsDead($.police_guard1))) {
                $.police_guard1.SetObjKillPlayerOnFoot($.player);
                $.police_guard1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 5000);
              }
            }
          }
        }
        else {
          [$.get_away_car_x, $.get_away_car_y, $.get_away_car_z] = $.get_away_car.GetCoordinates();
          $.car_moving_stuck_flag = 0;
        }
      }
    }
    await asyncWait(0);
  }
  // SCM GOTO → mission_ray1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_ray1_passed"); // fallback: would break linear control flow
  }
}

async function mission_ray1_failed() {
  Text.PrintBig(M_FAIL, 5000, 1);
  return;
}

async function mission_ray1_passed() {
  $.flag_ray_mission1_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 30000, 5000, 1);
  $.player.AddScore(30000);
  $.player.ClearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed(RM1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT ray_mission2_loop
  return;
}

async function mission_cleanup_ray1() {
  $.ray1_blip.Remove();
  World.RemoveParticleEffectsInArea(372.0, -449.0, 25.0, 383.0, -436.0, 33.0);
  Streaming.MarkModelAsNoLongerNeeded(ped`LI_MAN2`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(safehouse);
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  World.RemoveAllScriptFires();
  Mission.Finish();
  return;
}

export async function ray1() {
  // MissionBoundary
  // SCM GOSUB mission_start_ray1
  await mission_start_ray1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray1_failed
    await mission_ray1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray1
  await mission_cleanup_ray1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT get_away_car police_guard1 police_guard2 the_witness ray1_blip burning_cop
  // VAR_INT police_guard3 fire_1 fire_2 fire_3 fire_4 wanted_lvl_flag_r1 game_timer_r1 game_timer_start_r1
  // VAR_INT car_moving_stuck_flag getaway_stuck_flag get_away_car_health game_timer_current_r1
  // VAR_INT mfail_timer mfail_timer_current mfail_timer_started mfail_timer_reset_flag carlock_flag
  // VAR_FLOAT get_away_car_x get_away_car_y get_away_car_z
}
