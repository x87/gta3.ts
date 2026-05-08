// Generated from Main/Commercial/love3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love3() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.drug_current_timer = 0;
  $.temporary_time_drug = 0;
  $.last_drug_dropped_timer = 0;
  $.package_numbers = 0;
  $.packages_collected = 0;
  $.police_boat_flag = 0;
  $.police_rating = 0;
  $.packge_01 = 0;
  $.packge_02 = 0;
  $.packge_03 = 0;
  $.packge_04 = 0;
  $.packge_05 = 0;
  $.packge_06 = 0;
  $.counter_display_flag = 0;
  $.PlaneX = 0.0;
  $.PlaneY = 0.0;
  $.PlaneZ = 0.0;
  Streaming.LoadSpecialCharacter(1, love2);
  Streaming.LoadSpecialCharacter(2, ojg2);
  Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH);
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(tshrorckgrdn))) {
    await asyncWait(0);
  }
  Cutscene.Load(D3_ADO);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.SetAnim(love2);
  $.cs_ojg = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_ojg.SetAnim(ojg2);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`);
  $.cs_lovehead.SetAnim($.love);
  World.ClearArea(82.44, -1548.49, 28.0, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(82.44, -1548.49, 28.0);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 12262) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE3_A, 5000, 1);
  while ($.cs_time < 16652) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE3_B, 5000, 1);
  while ($.cs_time < 20065) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE3_C, 5000, 1);
  while ($.cs_time < 22434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE3_D, 5000, 1);
  while ($.cs_time < 25333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Streaming.RequestModel(car`DEADDODO`);
  Streaming.RequestModel(car`SPEEDER`);
  Streaming.RequestModel(car`PREDATOR`);
  Streaming.LoadAllModelsNow();
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  while (!(Streaming.HasModelLoaded(car`DEADDODO`)) || !(Streaming.HasModelLoaded(car`SPEEDER`)) || !(Streaming.HasModelLoaded(car`PREDATOR`))) {
    await asyncWait(0);
  }
  $.players_boat = Car.Create(135 /* BOAT_SPEEDER */, 837.0, -1115.6, -0.2);
  $.players_boat.SetHeading(140.0);
  $.players_boat_blip = Blip.AddForCar($.players_boat);
  Text.PrintNow(LOVE3_1, 5000, 1);
  DrugDropOff.Start();
  if ($.flag_player_on_mission == 0) {
    $.plane_blip = Blip.AddForCoord($.PlaneX, $.PlaneY, $.PlaneZ);
  }
  await asyncWait(1000);
  $.plane_timer = 120000;
  Hud.DisplayTimer($.plane_timer);
}

async function plane_drop_loop() {
  // SCM GOTO → plane_drop_loop lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (DrugDropOff.HasPlaneBeenShotDown()) {
      Text.PrintNow(LOVE3_4, 5000, 1);
      // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
    }
    if ($.plane_timer == 0) {
      Hud.ClearTimer($.plane_timer);
      Text.PrintNow(LOVE3_5, 5000, 1);
      $.plane_timer = -1000;
    }
    if ($.player.IsInModel(113 /* BOAT_PREDATOR */) || $.player.IsInModel(135 /* BOAT_SPEEDER */) || $.player.IsInModel(136 /* BOAT_REEFER */)) {
      $.players_boat_blip.Remove();
    }
    $.plane_blip.Remove();
    if ($.package_numbers < 6) {
      [$.PlaneX, $.PlaneY, $.PlaneZ] = DrugDropOff.FindPlaneCoordinates();
      $.plane_blip = Blip.AddForCoordOld($.PlaneX, $.PlaneY, $.PlaneZ, 4, 2 /* BLIP_ONLY */);
      $.plane_blip.ChangeScale(3);
      $.drug_current_timer = Clock.GetGameTimer();
      $.temporary_time_drug = $.drug_current_timer - $.last_drug_dropped_timer;
      if ($.temporary_time_drug > 7000) {
        $.last_drug_dropped_timer = Clock.GetGameTimer();
        if ($.PlaneX < 750.0 && $.PlaneX > 615.0 && $.PlaneY < 650.0 && $.PlaneY > -1213.0) {
          $.last_drug_dropped_timer = Clock.GetGameTimer();
          if ($.package_numbers == 0) {
            $.float_packge_01 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_1_x = $.PlaneX;
            $.package_1_y = $.PlaneY;
            $.packge_01 = 1;
          }
          if ($.package_numbers == 1) {
            $.float_packge_02 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_2_x = $.PlaneX;
            $.package_2_y = $.PlaneY;
            $.packge_02 = 1;
          }
          if ($.package_numbers == 2) {
            $.float_packge_03 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_3_x = $.PlaneX;
            $.package_3_y = $.PlaneY;
            $.packge_03 = 1;
          }
          if ($.package_numbers == 3) {
            $.float_packge_04 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_4_x = $.PlaneX;
            $.package_4_y = $.PlaneY;
            $.packge_04 = 1;
          }
          if ($.package_numbers == 4) {
            $.float_packge_05 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_5_x = $.PlaneX;
            $.package_5_y = $.PlaneY;
            $.packge_05 = 1;
          }
          if ($.package_numbers == 5) {
            $.float_packge_06 = Pickup.CreateFloatingPackage($.PlaneX, $.PlaneY, $.PlaneZ);
            $.package_6_x = $.PlaneX;
            $.package_6_y = $.PlaneY;
            $.packge_06 = 1;
          }
          $.package_numbers++;
        }
      }
    }
    if ($.packge_01 > 0 && $.packages_collected < 6) {
      Text.PrintWithNumberNow(LOVE3_3, $.package_numbers, 5000, 1);
    }
    if ($.packge_01 == 1) {
      if ($.float_packge_01.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_01 = 2;
      }
    }
    if ($.packge_02 == 1) {
      if ($.float_packge_02.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_02 = 2;
      }
    }
    if ($.packge_03 == 1) {
      if ($.float_packge_03.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_03 = 2;
      }
    }
    if ($.packge_04 == 1) {
      if ($.float_packge_04.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_04 = 2;
      }
    }
    if ($.packge_05 == 1) {
      if ($.float_packge_05.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_05 = 2;
      }
    }
    if ($.packge_06 == 1) {
      if ($.float_packge_06.HasBeenCollected()) {
        Sound.AddOneOffSound(0.0, 0.0, 0.0, 82 /* SOUND_EVIDENCE_PICKUP */);
        ++$.packages_collected;
        if ($.counter_display_flag == 0) {
          Hud.DisplayCounterWithString($.packages_collected, 0 /* COUNTER_DISPLAY_NUMBER */, COLLECT);
          $.counter_display_flag = 1;
        }
        $.police_rating += 1;
        $.player.AlterWantedLevelNoDrop($.police_rating);
        $.packge_06 = 2;
      }
    }
    if ($.packge_06 > 0) {
      if ($.police_boat_flag == 0) {
        if (!(Camera.IsPointOnScreen(560.5223, -474.0232, -0.2, 5.0))) {
          $.police_boat = Car.Create(113 /* BOAT_PREDATOR */, 560.5223, -474.0232, -0.2);
          $.police_boat_driver = Char.CreateInsideCar($.police_boat, 4 /* PEDTYPE_CIVMALE */, ped`COP`);
          $.police_boat.SetHeading(179.7861);
          $.police_boat.Goto($.package_6_x, $.package_6_y, 0.0);
          $.police_boat_flag = 1;
        }
      }
      if (!(Car.IsDead($.police_boat))) {
        if ($.police_boat_flag == 1) {
          if ($.police_boat.Locate2D($.package_6_x, $.package_6_y, 4.0, 4.0, 0)) {
            if ($.packge_06 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto($.package_5_x, $.package_5_y, 0.0);
              $.police_boat_flag = 2;
            }
          }
        }
        if ($.police_boat_flag == 2) {
          if ($.police_boat.Locate2D($.package_5_x, $.package_5_y, 4.0, 4.0, 0)) {
            if ($.packge_05 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto($.package_4_x, $.package_4_y, 0.0);
              $.police_boat_flag = 3;
            }
          }
        }
        if ($.police_boat_flag == 3) {
          if ($.police_boat.Locate2D($.package_4_x, $.package_4_y, 4.0, 4.0, 0)) {
            if ($.packge_04 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto($.package_3_x, $.package_3_y, 0.0);
              $.police_boat_flag = 4;
            }
          }
        }
        if ($.police_boat_flag == 4) {
          if ($.police_boat.Locate2D($.package_3_x, $.package_3_y, 4.0, 4.0, 0)) {
            if ($.packge_03 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto($.package_2_x, $.package_2_y, 0.0);
              $.police_boat_flag = 5;
            }
          }
        }
        if ($.police_boat_flag == 5) {
          if ($.police_boat.Locate2D($.package_2_x, $.package_2_y, 4.0, 4.0, 0)) {
            if ($.packge_02 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto($.package_1_x, $.package_1_y, 0.0);
              $.police_boat_flag = 6;
            }
          }
        }
        if ($.police_boat_flag == 6) {
          if ($.police_boat.Locate2D($.package_1_x, $.package_1_y, 4.0, 4.0, 0)) {
            if ($.packge_01 == 1) {
              $.float_packge_01.Remove();
              $.float_packge_02.Remove();
              $.float_packge_03.Remove();
              $.float_packge_04.Remove();
              $.float_packge_05.Remove();
              $.float_packge_06.Remove();
              Text.PrintNow(LOVE3_6, 5000, 1);
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat.SetCruiseSpeed(100.0);
              // SCM GOTO → mission_love3_failed (not lowered; manual jump required)
              throw new Error("unresolved GOTO mission_love3_failed"); // fallback: would break linear control flow
            }
            else {
              $.police_boat.Goto(641.5550, 594.6697, 0.0);
              $.police_boat_flag = 99;
            }
          }
        }
      }
    }
    if ($.packages_collected == 6) {
      Text.PrintNow(LOVE3_2, 5000, 1);
      $.plane_blip.Remove();
      $.plane_blip = Blip.AddForCoord(87.3, -1548.6, 27.255);
      $.temporary_time_drug = 0;
      // SCM GOTO → garage_loop_l3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO garage_loop_l3"); // fallback: would break linear control flow
    }
  }
}

async function garage_loop_l3() {
  while (!(Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */))) {
    await asyncWait(0);
  }
  while (!($.player.LocateStoppedOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 1))) {
    await asyncWait(0);
  }
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
  $.player.ClearWantedLevel();
  Camera.SetFixedPosition(81.3343, -1540.0887, 27.7976, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(81.8719, -1540.9318, 27.8039, 2 /* JUMP_CUT */);
  Hud.SwitchWidescreen(1 /* ON */);
  $.script_controlled_player = $.player.GetChar();
  $.script_controlled_player.SetObjRunToCoord(87.4588, -1548.7035);
  {
  TIMERA = 0;
  while (!($.player.LocateOnFoot2D(87.4588, -1548.7035, 1.0, 1.0, 0))) {
    await asyncWait(0);
    if (TIMERA > 3000) {
      // SCM GOTO → get_out_of_loop_l3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_out_of_loop_l3"); // fallback: would break linear control flow
    }
  }
  }
}

async function get_out_of_loop_l3() {
  $.script_controlled_player.SetObjRunToCoord(98.7615, -1548.6489);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  World.ClearArea(87.3, -1548.6, 28.3, 2.0, 0);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.script_controlled_player.SetObjNoObj();
  $.script_controlled_player.SetIdle();
  $.script_controlled_player.SetObjRunToCoord(81.2603, -1548.9347);
  $.script_controlled_player.SetObjNoObj();
  $.script_controlled_player.SetIdle();
  await asyncWait(250);
  $.player.SetCoordinates(81.2603, -1548.9347, 27.4);
  $.player.SetHeading(90.0);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Camera.SetInFrontOfPlayer();
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  // SCM GOTO → mission_love3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love3_passed"); // fallback: would break linear control flow
}

async function mission_love3_failed() {
  Text.PrintBig(M_FAIL, 5000, 1);
  return;
}

async function mission_love3_passed() {
  $.flag_love_mission3_passed = 1;
  $.flag_commercial_passed = 1;
  Stat.SetCommercialPassed();
  if (Object.DoesExist($.subway_gate_suburban1)) {
    $.subway_gate_suburban1.Delete();
  }
  if (Object.DoesExist($.subway_gate_suburban2)) {
    $.subway_gate_suburban2.Delete();
  }
  if (Object.DoesExist($.tunnel_gate_suburban)) {
    $.tunnel_gate_suburban.Delete();
  }
  if (Object.DoesExist($.helix_barrier)) {
    $.helix_barrier.Delete();
  }
  Path.SwitchRoadsOn(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);
  Path.SwitchRoadsOn(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  if ($.flag_ray_mission5_passed == 1) {
    $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
    // START_NEW_SCRIPT ray_mission6_loop
  }
  Text.PrintWithNumberBig(M_PASS, 10000, 5000, 1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(LOVE3);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT love_mission4_loop
  // START_NEW_SCRIPT hood_phone_start
  return;
}

async function mission_cleanup_love3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  Hud.ClearTimer($.plane_timer);
  Hud.ClearCounter($.packages_collected);
  Streaming.MarkModelAsNoLongerNeeded(car`SPEEDER`);
  Streaming.MarkModelAsNoLongerNeeded(car`DEADDODO`);
  $.players_boat_blip.Remove();
  $.plane_blip.Remove();
  Mission.Finish();
  return;
}

export async function love3() {
  // MissionBoundary
  // SCM GOSUB mission_start_love3
  await mission_start_love3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love3_failed
    await mission_love3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love3
  await mission_cleanup_love3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT players_boat players_boat_blip police_boat_flag police_boat
  // VAR_INT plane_blip random_int_l3 counter_display_flag plane_timer police_boat_driver police_rating
  // VAR_INT float_packge_01 float_packge_02 float_packge_03 float_packge_04 float_packge_05 float_packge_06
  // VAR_INT drug_current_timer temporary_time_drug last_drug_dropped_timer package_numbers cs_ojg
  // VAR_INT packge_01 packge_02 packge_03 packge_04 packge_05 packge_06 packages_collected
  // VAR_FLOAT PlaneX PlaneY PlaneZ
  // VAR_FLOAT package_1_x package_1_y
  // VAR_FLOAT package_2_x package_2_y
  // VAR_FLOAT package_3_x package_3_y
  // VAR_FLOAT package_4_x package_4_y
  // VAR_FLOAT package_5_x package_5_y
  // VAR_FLOAT package_6_x package_6_y
}
