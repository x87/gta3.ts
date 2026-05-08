// Generated from Main/Commercial/ray3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.rays_cutscene_flag = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.ia_start_x = -53.0;
  $.ia_start_y = -1380.5;
  $.ia_start_z = 26.0;
  $.amount_damage_ia_drop_evidence = 1;
  $.wanted_level_change = 1;
  $.drop_one_flag = 0;
  $.drop_evidence = 0;
  $.green = 250;
  $.red = 0;
  $.red_increase_flag = 0;
  $.red_decrease_flag = 0;
  $.green_increase_flag = 0;
  $.green_decrease_flag = 0;
  $.timera_reset_flag = 0;
  $.ia_have_evidence_flag = 0;
  $.temporary_health_var = 0;
  $.ia_car_previous_health = 0;
  $.ia_car_current_health = 0;
  $.amount_of_evidence_player_has = 0;
  $.get_coords_flag = 0;
  $.timerc_reset_flag_r3 = 0;
  $.timerd_reset_flag_r3 = 0;
  $.timerd_current_r3 = 0;
  $.timerd_started_r3 = 0;
  $.timerd_r3 = 0;
  $.timer_for_speed = 0;
  $.reset_for_timer = 0;
  $.object_current_coords_x = 0.0;
  $.object_current_coords_y = 0.0;
  $.object_current_coords_z = 0.0;
  Streaming.LoadSpecialCharacter(1, $.ray);
  {
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
  Cutscene.Load(r3_ed);
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
  Streaming.Switch(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 10381) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_A, 10000, 1);
  while ($.cs_time < 13529) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_H, 10000, 1);
  while ($.cs_time < 17950) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_B, 10000, 1);
  while ($.cs_time < 23502) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_C, 10000, 1);
  while ($.cs_time < 26180) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_D, 10000, 1);
  while ($.cs_time < 29179) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_E, 10000, 1);
  while ($.cs_time < 34865) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_F, 10000, 1);
  while ($.cs_time < 39290) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(RM3_G, 10000, 1);
  while ($.cs_time < 41666) {
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
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetNearClip(0.9);
  $.player.SetHeading(90.0);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.RequestModel(files);
  Streaming.RequestModel(car`BOBCAT`);
  Streaming.RequestModel(ped`B_MAN3`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`BOBCAT`)) || !(Streaming.HasModelLoaded(ped`B_MAN3`)) || !(Streaming.HasModelLoaded(files))) {
    await asyncWait(0);
  }
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  $.rays_cutscene_flag = 0;
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.ia_car_rm3 = Car.Create(105 /* CAR_BOBCAT */, $.ia_start_x, $.ia_start_y, $.ia_start_z);
  $.ia_car_rm3.SetAvoidLevelTransitions(1 /* TRUE */);
  $.ia_car_rm3.SetWatertight(1 /* TRUE */);
  $.ia_car_driver_1 = Char.CreateInsideCar($.ia_car_rm3, 4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`);
  $.ia_car_driver_1.SetCantBeDraggedOut(1 /* TRUE */);
  $.ia_car_rm3.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.ia_car_rm3.SetUpsidedownNotDamaged(1 /* TRUE */);
  $.ia_car_rm3.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
  $.ia_car_rm3.SetCruiseSpeed(20.0);
  $.ia_car_rm3.SetDrivingStyle(2);
  $.ia_car_rm3.WanderRandomly();
  $.prosecution_car_blip = Blip.AddForCar($.ia_car_rm3);
  $.ia_car_rm3.LockDoors(2 /* CARLOCK_LOCKED */);
  if ($.flag_player_on_mission == 0) {
    $.rays_evidence_blip = Blip.AddForChar($.ia_car_driver_1);
  }
  [$.car_stuck_x, $.car_stuck_y, $.car_stuck_z] = $.ia_car_rm3.GetCoordinates();
  [$.ia_car_x, $.ia_car_y, $.ia_car_z] = $.ia_car_rm3.GetCoordinates();
  $.ia_car_z += 3.0;
  $.evidence_1 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.ia_car_z += 1.0;
  $.evidence_2 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.ia_car_z += 1.0;
  $.evidence_3 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.ia_car_z += 1.0;
  $.evidence_4 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.ia_car_z += 1.0;
  $.evidence_5 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.ia_car_z += 1.0;
  $.evidence_6 = Object.Create(files, $.ia_car_x, $.ia_car_y, $.ia_car_z);
  $.evidence_1.SetCollision(0 /* FALSE */);
  $.evidence_2.SetCollision(0 /* FALSE */);
  $.evidence_3.SetCollision(0 /* FALSE */);
  $.evidence_4.SetCollision(0 /* FALSE */);
  $.evidence_5.SetCollision(0 /* FALSE */);
  $.evidence_6.SetCollision(0 /* FALSE */);
  $.evidence_1.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.7, -0.1);
  $.evidence_2.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.2, -0.1);
  $.evidence_3.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.2, -0.1);
  $.evidence_4.PlaceRelativeToCar($.ia_car_rm3, 0.3, -0.7, -0.1);
  $.evidence_5.PlaceRelativeToCar($.ia_car_rm3, -0.3, -0.7, -0.1);
  $.evidence_6.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.7, -0.1);
  $.ia_have_evidence_flag = 1;
}

async function evidence_loop() {
  // SCM GOTO → evidence_loop lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (Car.IsDead($.ia_car_rm3)) {
      if ($.ia_car_rm3.IsInWater()) {
        if (!($.player.LocateAnyMeansCar2D($.ia_car_rm3, 50.0, 50.0, 0))) {
          if (!($.ia_car_rm3.IsOnScreen())) {
            [$.ia_car_x, $.ia_car_y, $.ia_car_z] = $.ia_car_rm3.GetCoordinates();
            [$.ia_car_x, $.ia_car_y, $.ia_car_z, $.warp_heading] = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
            if (!(Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 3.0))) {
              $.ia_car_rm3.SetCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
              $.ia_car_rm3.SetHeading($.warp_heading);
            }
          }
        }
        else {
          Text.PrintNow(RM3_6, 5000, 1);
          // SCM GOTO → mission_ray3_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_ray3_failed"); // fallback: would break linear control flow
        }
      }
      else {
        // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray3_passed"); // fallback: would break linear control flow
      }
    }
    if ($.ia_car_rm3.IsUpsidedown() && $.ia_car_rm3.IsStopped()) {
      if (!($.ia_car_rm3.IsOnScreen())) {
        [$.ia_car_x, $.ia_car_y, $.ia_car_z] = $.ia_car_rm3.GetCoordinates();
        [$.ia_car_x, $.ia_car_y, $.ia_car_z, $.warp_heading] = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
        if (!(Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 3.0))) {
          $.ia_car_rm3.SetCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
          $.ia_car_rm3.SetHeading($.warp_heading);
        }
      }
      else {
        if (!($.drop_evidence == 6)) {
          // SCM GOSUB create_another_car
          await create_another_car();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
    }
    if ($.timera_reset_flag == 1) {
      if (!($.ia_car_rm3.IsStopped())) {
        $.timera_reset_flag = 0;
      }
    }
    if ($.ia_car_rm3.IsStopped()) {
      if ($.timera_reset_flag == 0) {
        TIMERA = 0;
        $.timera_reset_flag = 1;
      }
      if (TIMERA > 5000 && $.timera_reset_flag == 1) {
        if (!($.ia_car_rm3.IsOnScreen())) {
          [$.ia_car_x, $.ia_car_y, $.ia_car_z] = $.ia_car_rm3.GetCoordinates();
          [$.ia_car_x, $.ia_car_y, $.ia_car_z, $.warp_heading] = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
          if (!(Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0))) {
            $.ia_car_rm3.SetCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
            $.ia_car_rm3.SetHeading($.warp_heading);
            $.timera_reset_flag = 0;
          }
        }
        else {
          if (!($.drop_evidence == 6)) {
            // SCM GOSUB create_another_car
            await create_another_car();
            // fallback if label was not emitted as async function: no-op continues linearly
          }
        }
      }
    }
    if ($.ia_car_rm3.Locate3D($.car_stuck_x, $.car_stuck_y, $.car_stuck_z, 4.0, 4.0, 4.0, 0)) {
      if ($.timerc_reset_flag_r3 == 0) {
        $.timerc_started_r3 = Clock.GetGameTimer();
        $.timerc_reset_flag_r3 = 1;
      }
      if ($.timerc_reset_flag_r3 == 1) {
        $.timerc_current_r3 = Clock.GetGameTimer();
        $.timerc_r3 = $.timerc_current_r3 - $.timerc_started_r3;
        if ($.timerc_r3 > 8000) {
          if (!($.ia_car_rm3.IsOnScreen())) {
            [$.ia_car_x, $.ia_car_y, $.ia_car_z] = $.ia_car_rm3.GetCoordinates();
            [$.ia_car_x, $.ia_car_y, $.ia_car_z, $.warp_heading] = Path.GetClosestCarNodeWithHeading($.ia_car_x, $.ia_car_y, $.ia_car_z);
            if (!(World.IsPointObscuredByAMissionEntity($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0, 4.0, 4.0))) {
              if (!(Camera.IsPointOnScreen($.ia_car_x, $.ia_car_y, $.ia_car_z, 4.0))) {
                $.ia_car_rm3.SetCoordinates($.ia_car_x, $.ia_car_y, $.ia_car_z);
                $.ia_car_rm3.SetHeading($.warp_heading);
                $.timerc_reset_flag_r3 = 0;
              }
            }
          }
          else {
            if (!($.drop_evidence == 6)) {
              // SCM GOSUB create_another_car
              await create_another_car();
              // fallback if label was not emitted as async function: no-op continues linearly
            }
          }
        }
      }
    }
    if (!($.ia_car_rm3.Locate3D($.car_stuck_x, $.car_stuck_y, $.car_stuck_z, 4.0, 4.0, 4.0, 0))) {
      [$.car_stuck_x, $.car_stuck_y, $.car_stuck_z] = $.ia_car_rm3.GetCoordinates();
      $.timerc_reset_flag_r3 = 0;
    }
    $.timer_for_speed = Clock.GetGameTimer();
    $.timer_for_speed -= $.reset_for_timer;
    if ($.timer_for_speed > 1000) {
      $.reset_for_timer = Clock.GetGameTimer();
      if ($.player.LocateAnyMeansCar2D($.ia_car_rm3, 20.0, 20.0, 0)) {
        $.ia_car_rm3.SetCruiseSpeed(50.0);
      }
      else {
        if ($.player.LocateAnyMeansCar2D($.ia_car_rm3, 50.0, 50.0, 0)) {
          $.ia_car_rm3.SetCruiseSpeed(41.0);
        }
        else {
          if ($.player.LocateAnyMeansCar2D($.ia_car_rm3, 90.0, 90.0, 0)) {
            $.ia_car_rm3.SetCruiseSpeed(34.0);
          }
          else {
            if ($.player.LocateAnyMeansCar2D($.ia_car_rm3, 130.0, 130.0, 0)) {
              $.ia_car_rm3.SetCruiseSpeed(28.0);
            }
            else {
              $.ia_car_rm3.SetCruiseSpeed(20.0);
            }
          }
        }
      }
    }
    if ($.ia_have_evidence_flag == 0) {
      if (TIMERB > 500) {
        if ($.player.LocateAnyMeans3D($.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z, 1.5, 1.5, 1.5, 0)) {
          // SCM GOSUB evidence_collected
          await evidence_collected();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
      if (TIMERB > 10000) {
        if ($.player.LocateAnyMeans2D($.object_current_coords_x, $.object_current_coords_y, 1.5, 1.5, 0)) {
          // SCM GOSUB evidence_collected
          await evidence_collected();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
      if (TIMERB > 120000) {
        if ($.player.LocateAnyMeans2D($.object_current_coords_x, $.object_current_coords_y, 30.0, 30.0, 0)) {
          // SCM GOSUB evidence_collected
          await evidence_collected();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
    }
    $.ia_car_previous_health = $.ia_car_current_health;
    $.ia_car_current_health = $.ia_car_rm3.GetHealth();
    if ($.ia_have_evidence_flag == 1) {
      if ($.ia_car_rm3.IsUpright()) {
        $.temporary_health_var = $.ia_car_previous_health - $.amount_damage_ia_drop_evidence;
        if ($.temporary_health_var > $.ia_car_current_health) {
          Text.PrintNow("RM3_4", 3000, 1);
          $.ia_car_rm3.SetHealth(1000);
          $.ia_car_current_health = 1000;
          $.ia_car_previous_health = 1000;
          $.ia_have_evidence_flag = 0;
          $.drop_one_flag = 0;
          $.get_coords_flag = 1;
        }
      }
    }
    if ($.ia_have_evidence_flag == 0 && $.drop_one_flag == 0) {
      $.drop_evidence++;
      $.rays_evidence_blip.Remove();
      if ($.drop_evidence == 1) {
        $.evidence_1.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.7, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_1);
        $.evidence_1.SetCollision(1 /* TRUE */);
        $.evidence_1.SetDynamic(1 /* TRUE */);
        $.evidence_1.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_1.MakeTargetable();
        $.player.AlterWantedLevelNoDrop(2);
        $.ia_car_rm3.SetCruiseSpeed(100.0);
        $.ia_car_rm3.SetDrivingStyle(2);
        TIMERB = 0;
      }
      if ($.drop_evidence == 2) {
        $.evidence_2.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.2, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_2);
        $.evidence_2.SetCollision(1 /* TRUE */);
        $.evidence_2.SetDynamic(1 /* TRUE */);
        $.evidence_2.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_2.MakeTargetable();
        TIMERB = 0;
      }
      if ($.drop_evidence == 3) {
        $.evidence_3.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.2, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_3);
        $.evidence_3.SetCollision(1 /* TRUE */);
        $.evidence_3.SetDynamic(1 /* TRUE */);
        $.evidence_3.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_3.MakeTargetable();
        TIMERB = 0;
      }
      if ($.drop_evidence == 4) {
        $.evidence_4.PlaceRelativeToCar($.ia_car_rm3, 0.3, -0.7, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_4);
        $.evidence_4.SetCollision(1 /* TRUE */);
        $.evidence_4.SetDynamic(1 /* TRUE */);
        $.evidence_4.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_4.MakeTargetable();
        TIMERB = 0;
      }
      if ($.drop_evidence == 5) {
        $.evidence_5.PlaceRelativeToCar($.ia_car_rm3, -0.3, -0.7, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_5);
        $.evidence_5.SetCollision(1 /* TRUE */);
        $.evidence_5.SetDynamic(1 /* TRUE */);
        $.evidence_5.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_5.MakeTargetable();
        TIMERB = 0;
      }
      if ($.drop_evidence == 6) {
        $.evidence_6.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.7, 0.2);
        $.rays_evidence_blip = Blip.AddForObject($.evidence_6);
        $.evidence_6.SetCollision(1 /* TRUE */);
        $.evidence_6.SetDynamic(1 /* TRUE */);
        $.evidence_6.AddToVelocity(0.0, 0.0, 16.0);
        $.evidence_6.MakeTargetable();
        $.prosecution_car_blip.Remove();
        TIMERB = 0;
      }
      $.drop_one_flag = 1;
    }
    if ($.get_coords_flag == 1) {
      if ($.drop_evidence == 1) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_1.GetCoordinates();
      }
      if ($.drop_evidence == 2) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_2.GetCoordinates();
      }
      if ($.drop_evidence == 3) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_3.GetCoordinates();
      }
      if ($.drop_evidence == 4) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_4.GetCoordinates();
      }
      if ($.drop_evidence == 5) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_5.GetCoordinates();
      }
      if ($.drop_evidence == 6) {
        [$.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z] = $.evidence_6.GetCoordinates();
      }
    }
    if ($.ia_have_evidence_flag == 0) {
      if (0 /* red */ == 0) {
        $.red_decrease_flag = 0;
        $.red_increase_flag = 1;
      }
      if (0 /* red */ == 250) {
        $.red_decrease_flag = 1;
        $.red_increase_flag = 0;
      }
      if ($.red_increase_flag == 1) {
        $.red = 0 /* red */ + 10;
      }
      if ($.red_decrease_flag == 1) {
        $.red = 0 /* red */ - 10;
      }
      if (1 /* green */ == 0) {
        $.green_decrease_flag = 0;
        $.green_increase_flag = 1;
      }
      if (1 /* green */ == 250) {
        $.green_decrease_flag = 1;
        $.green_increase_flag = 0;
      }
      if ($.green_increase_flag == 1) {
        $.green = 1 /* green */ + 10;
      }
      if ($.green_decrease_flag == 1) {
        $.green = 1 /* green */ - 10;
      }
      Fx.DrawCorona($.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z, 0.5, 6 /* CORONATYPE_CIRCLE */, 0 /* FLARETYPE_NONE */, 0 /* red */, 1 /* green */, 0);
    }
    if ($.drop_evidence < 1) {
      $.evidence_1.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.7, -0.1);
    }
    if ($.drop_evidence < 2) {
      $.evidence_2.PlaceRelativeToCar($.ia_car_rm3, 0.3, -1.2, -0.1);
    }
    if ($.drop_evidence < 3) {
      $.evidence_3.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.2, -0.1);
    }
    if ($.drop_evidence < 4) {
      $.evidence_4.PlaceRelativeToCar($.ia_car_rm3, 0.3, -0.7, -0.1);
    }
    if ($.drop_evidence < 5) {
      $.evidence_5.PlaceRelativeToCar($.ia_car_rm3, -0.3, -0.7, -0.1);
    }
    if ($.drop_evidence < 6) {
      $.evidence_6.PlaceRelativeToCar($.ia_car_rm3, -0.3, -1.7, -0.1);
    }
    if ($.amount_of_evidence_player_has == 6) {
      $.rays_evidence_blip.Remove();
      Text.PrintNow(RM3_1, 5000, 1);
      while (!($.player.IsInAnyCar())) {
        await asyncWait(0);
      }
      $.players_car = $.player.StoreCarIsIn();
      while ($.player.IsInAnyCar()) {
        await asyncWait(0);
      }
      if (!(Car.IsDead($.players_car))) {
        $.rays_evidence_blip = Blip.AddForCar($.players_car);
        Hud.ClearCounter($.amount_of_evidence_player_has);
        Text.PrintNow(RM3_7, 5000, 1);
        while (!(Car.IsDead($.players_car))) {
          await asyncWait(0);
        }
        // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray3_passed"); // fallback: would break linear control flow
      }
      else {
        // SCM GOTO → mission_ray3_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray3_passed"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_ray3_failed() {
  Text.PrintBig("m_fail", 5000, 1);
  return;
}

async function mission_ray3_passed() {
  $.flag_ray_mission3_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 10000, 5000, 1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(RM3);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
  // START_NEW_SCRIPT ray_mission4_loop
  // START_NEW_SCRIPT love_mission1_loop
  return;
}

async function mission_cleanup_ray3() {
  $.rays_evidence_blip.Remove();
  $.prosecution_car_blip.Remove();
  Hud.ClearCounter($.amount_of_evidence_player_has);
  Streaming.MarkModelAsNoLongerNeeded(car`BOBCAT`);
  Streaming.MarkModelAsNoLongerNeeded(ped`B_MAN3`);
  Streaming.MarkModelAsNoLongerNeeded(DONKEYMAG);
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  Mission.Finish();
  return;
}

async function create_another_car() {
  if ($.timerd_reset_flag_r3 == 0) {
    $.timerd_started_r3 = Clock.GetGameTimer();
    $.timerd_reset_flag_r3 = 1;
  }
  if ($.timerd_reset_flag_r3 == 1) {
    $.timerd_current_r3 = Clock.GetGameTimer();
    $.timerd_r3 = $.timerd_current_r3 - $.timerd_started_r3;
    if ($.timerd_r3 > 15000) {
      Text.PrintNow(RM3_8, 5000, 1);
      $.prosecution_car_blip.Remove();
      $.ia_car_rm3.MarkAsNoLongerNeeded();
      $.ia_car_driver_1.MarkAsNoLongerNeeded();
      if ($.player.LocateAnyMeans2D($.ia_start_x, $.ia_start_y, 150.0, 150.0, 0)) {
        $.ia_car_rm3 = Car.Create(105 /* CAR_BOBCAT */, 254.8355, -667.3972, 25.3);
      }
      else {
        $.ia_car_rm3 = Car.Create(105 /* CAR_BOBCAT */, $.ia_start_x, $.ia_start_y, $.ia_start_z);
      }
      $.ia_car_driver_1 = Char.CreateInsideCar($.ia_car_rm3, 4 /* PEDTYPE_CIVMALE */, ped`B_MAN3`);
      $.ia_car_rm3.SetWatertight(1 /* TRUE */);
      $.ia_car_driver_1.SetCantBeDraggedOut(1 /* TRUE */);
      $.ia_car_rm3.SetOnlyDamagedByPlayer(1 /* TRUE */);
      $.ia_car_rm3.SetUpsidedownNotDamaged(1 /* TRUE */);
      $.ia_car_rm3.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */);
      $.ia_car_rm3.SetCruiseSpeed(100.0);
      $.ia_car_rm3.SetDrivingStyle(2);
      $.ia_car_rm3.WanderRandomly();
      $.prosecution_car_blip = Blip.AddForCar($.ia_car_rm3);
      $.ia_car_rm3.LockDoors(2 /* CARLOCK_LOCKED */);
      $.ia_car_rm3.SetAvoidLevelTransitions(1 /* TRUE */);
      $.timerd_reset_flag_r3 = 0;
    }
  }
  return;
}

async function evidence_collected() {
  $.rays_evidence_blip.Remove();
  $.get_coords_flag = 0;
  Sound.AddOneOffSound($.object_current_coords_x, $.object_current_coords_y, $.object_current_coords_z, 82 /* SOUND_EVIDENCE_PICKUP */);
  if ($.drop_evidence == 1) {
    $.evidence_1.Delete();
    Hud.DisplayCounterWithString($.amount_of_evidence_player_has, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
  }
  if ($.drop_evidence == 2) {
    $.evidence_2.Delete();
  }
  if ($.drop_evidence == 3) {
    $.evidence_3.Delete();
  }
  if ($.drop_evidence == 4) {
    $.evidence_4.Delete();
  }
  if ($.drop_evidence == 5) {
    $.evidence_5.Delete();
  }
  if ($.drop_evidence == 6) {
    $.evidence_6.Delete();
  }
  ++$.amount_of_evidence_player_has;
  Text.PrintWithNumberNow(RM3_5, $.amount_of_evidence_player_has, 5000, 1);
  $.ia_have_evidence_flag = 1;
  TIMERB = 0;
  return;
  }
}

export async function ray3() {
  // MissionBoundary
  // SCM GOSUB mission_start_ray3
  await mission_start_ray3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray3_failed
    await mission_ray3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_ray3
  await mission_cleanup_ray3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT rays_evidence_blip timera_reset_flag evidence_1 evidence_2 evidence_3 evidence_4 evidence_5 evidence_6
  // VAR_INT ia_car_rm3 ia_car_driver_1 wanted_level_change stored_wanted_level
  // VAR_INT ia_have_evidence_flag players_car prosecution_car_blip timer_for_speed reset_for_timer
  // VAR_INT temporary_health_var ia_car_previous_health ia_car_current_health
  // VAR_INT red green red_increase_flag red_decrease_flag green_increase_flag green_decrease_flag
  // VAR_INT amount_of_evidence_player_has amount_damage_ia_drop_evidence drop_one_flag drop_evidence get_coords_flag
  // VAR_INT timerc_reset_flag_r3 timerc_current_r3 timerc_started_r3 timerc_r3
  // VAR_INT timerd_reset_flag_r3 timerd_current_r3 timerd_started_r3 timerd_r3
  // VAR_FLOAT ia_start_x ia_start_y ia_start_z ia_car_x ia_car_y ia_car_z warp_heading
  // VAR_FLOAT object_current_coords_x object_current_coords_y object_current_coords_z car_stuck_x car_stuck_y car_stuck_z
}
