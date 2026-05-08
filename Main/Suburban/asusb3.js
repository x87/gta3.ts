// Generated from Main/Suburban/asusb3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_as3() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_mission = 1;
  await asyncWait(0);
  $.timer_as3 = 210000;
  $.counter_charlie = 0;
  $.flag_commence_approach = 0;
  $.flag_counter_message = 0;
  $.flag_runway_blip = 0;
  $.flag_boat_blip = 0;
  $.flag_bouy_blip = 0;
  $.particle_time = 0;
  $.flag_particle = 0;
  $.flag_charlie_1 = 0;
  $.flag_charlie_2 = 0;
  $.flag_charlie_3 = 0;
  $.flag_charlie_4 = 0;
  $.flag_charlie_5 = 0;
  $.flag_charlie_6 = 0;
  $.flag_charlie_7 = 0;
  $.flag_charlie_8 = 0;
  $.flag_messages = 0;
  $.flag_created_baddies = 0;
  $.flag_mission_as3_failed = 0;
  $.flag_boat_message = 0;
  $.platform_x = -805.0;
  $.platform_y = -1310.0;
  $.killzone_min_x = -1460.0;
  $.killzone_min_y = -1050.0;
  $.killzone_max_x = -1450.0;
  $.killzone_max_y = -1040.0;
  Streaming.RequestModel(csitecutscene);
  Streaming.LoadSpecialCharacter(1, $.asuka);
  Streaming.LoadSpecialCharacter(2, $.miguel);
  Streaming.LoadSpecialCharacter(3, $.maria);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, ASUKAH);
  Streaming.LoadSpecialModel(hier`cutobj03`, MARIAH);
  Streaming.LoadSpecialModel(hier`cutobj04`, WHIP);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(csitecutscene))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  Cutscene.Load(a8_ps);
  Streaming.Switch(1 /* ON */);
  Cutscene.SetOffset(369.02, -327.5, 18.46);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_asuka.SetAnim($.asuka);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_miguel.SetAnim($.miguel);
  $.cs_maria = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_maria.SetAnim($.maria);
  $.cs_whip = CutsceneObject.Create(hier`cutobj04`);
  $.cs_whip.SetAnim(WHIP);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_mariahead = CutsceneHead.Create($.cs_maria, hier`cutobj03`);
  $.cs_mariahead.SetAnim($.maria);
  $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj02`);
  $.cs_asukahead.SetAnim($.asuka);
  $.player.SetCoordinates(373.7523, -327.2676, 17.1950);
  $.player.SetHeading(270.0);
  Camera.DoFade(250, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 459) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_A", 5000, 1);
  while ($.cs_time < 4401) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_B", 3000, 1);
  while ($.cs_time < 7348) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_C", 5000, 1);
  while ($.cs_time < 10448) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_C1", 5000, 1);
  while ($.cs_time < 11597) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_D", 2000, 1);
  while ($.cs_time < 13625) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_E", 3000, 1);
  while ($.cs_time < 16457) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_F", 5000, 1);
  while ($.cs_time < 19021) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_F1", 5000, 1);
  while ($.cs_time < 22389) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_G", 5000, 1);
  while ($.cs_time < 26064) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_G1", 5000, 1);
  while ($.cs_time < 28628) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_H", 5000, 1);
  while ($.cs_time < 33182) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_H1", 5000, 1);
  while ($.cs_time < 35785) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_I", 3000, 1);
  while ($.cs_time < 39765) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_J", 3000, 1);
  while ($.cs_time < 42026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AS3_K", 3000, 1);
  while ($.cs_time < 44333) {
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
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(csitecutscene);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  Hud.DisplayTimer($.timer_as3);
  Streaming.RequestModel(car`REEFER`);
  while (!(Streaming.HasModelLoaded(car`REEFER`))) {
    await asyncWait(0);
  }
  $.player_as3_boat = Car.Create(136 /* BOAT_REEFER */, -330.5, -1462.4, 0.0);
  $.player_as3_boat.SetHeading(95.0);
  $.blip_as3_boat = Blip.AddForCar($.player_as3_boat);
  $.flag_boat_blip = 1;
  $.rocket_as3 = Pickup.Create(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, -279.6, -1473.8, 6.2);
  Streaming.RequestModel(car`DEADDODO`);
  while (!(Streaming.HasModelLoaded(car`DEADDODO`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(packagelarge);
  while (!(Streaming.HasModelLoaded(packagelarge))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(bouy);
  while (!(Streaming.HasModelLoaded(bouy))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`DODO`);
  while (!(Streaming.HasModelLoaded(car`DODO`))) {
    await asyncWait(0);
  }
  $.bouy_1_as3 = Object.Create(bouy, -825.0, -1360.0, 2.0);
  $.bouy_3_as3 = Object.Create(bouy, -705.0, -1410.0, 2.0);
  $.bouy_5_as3 = Object.Create(bouy, -585.0, -1460.0, 2.0);
  $.bouy_6_as3 = Object.Create(bouy, -785.0, -1260.0, 2.0);
  $.bouy_8_as3 = Object.Create(bouy, -665.0, -1310.0, 2.0);
  $.bouy_10_as3 = Object.Create(bouy, -545.0, -1360.0, 2.0);
  $.bouy_2_as3 = Object.Create(bouy, -765.0, -1385.0, 2.0);
  $.bouy_4_as3 = Object.Create(bouy, -645.0, -1435.0, 2.0);
  $.bouy_7_as3 = Object.Create(bouy, -725.0, -1285.0, 2.0);
  $.bouy_9_as3 = Object.Create(bouy, -605.0, -1335.0, 2.0);
  $.bouy_point = Object.Create(bouy, $.platform_x, $.platform_y, 2.0);
  $.bouy_1_as3.SetCollision(1 /* true */);
  $.bouy_1_as3.SetDynamic(1 /* true */);
  $.bouy_2_as3.SetCollision(1 /* true */);
  $.bouy_2_as3.SetDynamic(1 /* true */);
  $.bouy_3_as3.SetCollision(1 /* true */);
  $.bouy_3_as3.SetDynamic(1 /* true */);
  $.bouy_4_as3.SetCollision(1 /* true */);
  $.bouy_4_as3.SetDynamic(1 /* true */);
  $.bouy_5_as3.SetCollision(1 /* true */);
  $.bouy_5_as3.SetDynamic(1 /* true */);
  $.bouy_6_as3.SetCollision(1 /* true */);
  $.bouy_6_as3.SetDynamic(1 /* true */);
  $.bouy_7_as3.SetCollision(1 /* true */);
  $.bouy_7_as3.SetDynamic(1 /* true */);
  $.bouy_8_as3.SetCollision(1 /* true */);
  $.bouy_8_as3.SetDynamic(1 /* true */);
  $.bouy_9_as3.SetCollision(1 /* true */);
  $.bouy_9_as3.SetDynamic(1 /* true */);
  $.bouy_10_as3.SetCollision(1 /* true */);
  $.bouy_10_as3.SetDynamic(1 /* true */);
  $.bouy_point.SetCollision(1 /* true */);
  $.bouy_point.SetDynamic(1 /* true */);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`COLUMB`);
  while (!(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  // SCM GOSUB baddies
  await baddies();
  // fallback if label was not emitted as async function: no-op continues linearly
}

async function loop_as3_1() {
  // SCM GOTO → loop_as3_1 lowered to endless loop
  while (true) {
    await asyncWait(0);
    if ($.flag_messages == 0) {
      if ($.flag_boat_message == 0) {
        Text.PrintNow("AS3_1", 4000, 1);
        $.flag_boat_message = 1;
        $.flag_messages = 1;
      }
    }
    if ($.flag_messages == 0) {
      if ($.flag_boat_message == 1) {
        Text.PrintNow("AS3_1A", 4000, 1);
        $.flag_boat_message = 2;
        $.flag_messages = 1;
      }
    }
    if ($.player.IsInModel(136 /* BOAT_REEFER */) || $.player.IsInModel(113 /* BOAT_PREDATOR */) || $.player.IsInModel(135 /* BOAT_SPEEDER */)) {
      if ($.flag_boat_blip == 1) {
        $.blip_as3_boat.Remove();
        $.flag_boat_blip = 0;
      }
      if ($.flag_bouy_blip == 0) {
        $.blip_as3_bouy = Blip.AddForObject($.bouy_point);
        $.flag_bouy_blip = 1;
        $.flag_messages = 0;
      }
    }
    if (!($.player.IsInModel(136 /* BOAT_REEFER */)) && !($.player.IsInModel(113 /* BOAT_PREDATOR */)) && !($.player.IsInModel(135 /* BOAT_SPEEDER */))) {
      if ($.flag_boat_blip == 0 && !(Car.IsDead($.player_as3_boat))) {
        $.blip_as3_boat = Blip.AddForCar($.player_as3_boat);
        $.flag_boat_blip = 1;
      }
      if ($.flag_bouy_blip == 1) {
        $.blip_as3_bouy.Remove();
        $.flag_bouy_blip = 0;
        $.flag_messages = 0;
      }
    }
    if ($.player.LocateAnyMeans2D($.platform_x, $.platform_y, 160.0, 160.0, 0 /* false */)) {
      if (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
        Streaming.LoadCollisionWithScreen(3 /* LEVEL_SUBURBAN */);
      }
    }
    if ($.player.LocateAnyMeans2D($.platform_x, $.platform_y, 15.0, 15.0, 0 /* false */)) {
      $.blip_as3_bouy.Remove();
      Text.ClearPrints();
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_3"); // fallback: would break linear control flow
    }
    if ($.timer_as3 < 91000) {
      if ($.flag_commence_approach == 0) {
        DrugRun.Start();
        $.flag_commence_approach = 1;
        [$.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z] = DrugRun.FindPlaneCoordinates();
        $.blip_as3_dodo = Blip.AddForCoordOld($.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z, 4, 2 /* blip_only */);
        $.blip_as3_dodo.ChangeScale(2);
      }
      Text.ClearPrints();
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_2"); // fallback: would break linear control flow
    }
    if ($.timer_as3 < 1) {
      Hud.ClearTimer($.timer_as3);
    }
    // SCM GOSUB baddies
    await baddies();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function loop_as3_2() {
  // SCM GOTO → loop_as3_2 lowered to endless loop
  while (true) {
    await asyncWait(0);
    $.blip_as3_dodo.Remove();
    if ($.flag_messages == 0) {
      if ($.flag_boat_message == 0) {
        Text.PrintNow("AS3_1", 4000, 1);
        $.flag_boat_message = 1;
        $.flag_messages = 1;
      }
    }
    if ($.flag_messages == 0) {
      if ($.flag_boat_message == 1) {
        Text.PrintNow("AS3_2", 4000, 1);
        $.flag_boat_message = 2;
        $.flag_messages = 1;
      }
    }
    if ($.player.IsInModel(136 /* BOAT_REEFER */) || $.player.IsInModel(113 /* BOAT_PREDATOR */) || $.player.IsInModel(135 /* BOAT_SPEEDER */)) {
      if ($.flag_boat_blip == 1) {
        $.blip_as3_boat.Remove();
        $.flag_boat_blip = 0;
      }
      if ($.flag_bouy_blip == 0) {
        $.blip_as3_bouy = Blip.AddForObject($.bouy_point);
        $.flag_bouy_blip = 1;
        $.flag_messages = 0;
        $.flag_boat_message = 1;
      }
    }
    if (!($.player.IsInModel(136 /* BOAT_REEFER */)) && !($.player.IsInModel(113 /* BOAT_PREDATOR */)) && !($.player.IsInModel(135 /* BOAT_SPEEDER */))) {
      if ($.flag_boat_blip == 0 && !(Car.IsDead($.player_as3_boat))) {
        $.blip_as3_boat = Blip.AddForCar($.player_as3_boat);
        $.flag_boat_blip = 1;
      }
      if ($.flag_bouy_blip == 1) {
        $.blip_as3_bouy.Remove();
        $.flag_bouy_blip = 0;
        $.flag_messages = 0;
        $.flag_boat_message = 1;
      }
    }
    if ($.player.LocateAnyMeans2D($.platform_x, $.platform_y, 160.0, 160.0, 0 /* false */)) {
      if (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
        Streaming.LoadCollisionWithScreen(3 /* LEVEL_SUBURBAN */);
      }
    }
    if ($.player.LocateAnyMeans2D($.platform_x, $.platform_y, 15.0, 15.0, 0 /* false */)) {
      $.blip_as3_bouy.Remove();
      Text.ClearPrints();
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_4"); // fallback: would break linear control flow
    }
    if (DrugRun.HasBeenCompleted()) {
      // SCM GOTO → mission_as3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as3_failed"); // fallback: would break linear control flow
    }
    if (DrugRun.HasPlaneBeenShotDown()) {
      Text.ClearPrints();
      Hud.ClearTimer($.timer_as3);
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_6 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_6"); // fallback: would break linear control flow
    }
    if ($.timer_as3 < 1) {
      Hud.ClearTimer($.timer_as3);
    }
    [$.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z] = DrugRun.FindPlaneCoordinates();
    $.blip_as3_dodo = Blip.AddForCoordOld($.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z, 4, 2 /* blip_only */);
    $.blip_as3_dodo.ChangeScale(3);
    // SCM GOSUB area_check
    await area_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_mission_as3_failed == 1) {
      // SCM GOTO → mission_as3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as3_failed"); // fallback: would break linear control flow
    }
    // SCM GOSUB baddies
    await baddies();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function loop_as3_3() {
  // SCM GOTO → loop_as3_3 lowered to endless loop
  while (true) {
    await asyncWait(0);
    if ($.flag_messages == 0) {
      Text.PrintNow("AS3_3", 4000, 1);
      $.flag_messages = 0;
    }
    if ($.player.IsInModel(136 /* BOAT_REEFER */) || $.player.IsInModel(113 /* BOAT_PREDATOR */) || $.player.IsInModel(135 /* BOAT_SPEEDER */)) {
      if ($.flag_boat_blip == 1) {
        $.blip_as3_boat.Remove();
        $.flag_boat_blip = 0;
      }
      if ($.flag_bouy_blip == 0) {
        $.blip_as3_bouy = Blip.AddForObject($.bouy_point);
        $.flag_bouy_blip = 1;
        $.flag_messages = 0;
      }
    }
    if (!($.player.IsInModel(136 /* BOAT_REEFER */)) && !($.player.IsInModel(113 /* BOAT_PREDATOR */)) && !($.player.IsInModel(135 /* BOAT_SPEEDER */))) {
      if ($.flag_boat_blip == 0 && !(Car.IsDead($.player_as3_boat))) {
        $.blip_as3_boat = Blip.AddForCar($.player_as3_boat);
        $.flag_boat_blip = 1;
      }
      if ($.flag_bouy_blip == 1) {
        $.blip_as3_bouy.Remove();
        $.flag_bouy_blip = 0;
        $.flag_messages = 0;
      }
    }
    if ($.timer_as3 < 91000) {
      if ($.flag_commence_approach == 0) {
        DrugRun.Start();
        $.flag_commence_approach = 1;
        [$.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z] = DrugRun.FindPlaneCoordinates();
        $.blip_as3_dodo = Blip.AddForCoordOld($.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z, 4, 2 /* blip_only */);
        $.blip_as3_dodo.ChangeScale(3);
      }
      Text.ClearPrints();
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_4"); // fallback: would break linear control flow
    }
    if ($.timer_as3 < 1) {
      Hud.ClearTimer($.timer_as3);
    }
    // SCM GOSUB baddies
    await baddies();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function loop_as3_4() {
  // SCM GOTO → loop_as3_4 lowered to endless loop
  while (true) {
    await asyncWait(0);
    $.blip_as3_dodo.Remove();
    if ($.flag_messages == 0) {
      Text.PrintNow("AS3_4", 4000, 1);
      $.flag_messages = 1;
    }
    if (!(Car.IsDead($.player_as3_boat))) {
      if ($.player.IsInCar($.player_as3_boat) && $.flag_boat_blip == 1) {
        $.blip_as3_boat.Remove();
        $.flag_boat_blip = 0;
      }
      if (!($.player.IsInCar($.player_as3_boat)) && $.flag_boat_blip == 0) {
        $.blip_as3_boat = Blip.AddForCar($.player_as3_boat);
        $.flag_boat_blip = 1;
        $.flag_messages = 0;
      }
    }
    if (DrugRun.HasBeenCompleted()) {
      // SCM GOTO → mission_as3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as3_failed"); // fallback: would break linear control flow
    }
    if (DrugRun.HasPlaneBeenShotDown()) {
      Text.ClearPrints();
      Hud.ClearTimer($.timer_as3);
      $.flag_messages = 0;
      // SCM GOTO → loop_as3_6 (not lowered; manual jump required)
      throw new Error("unresolved GOTO loop_as3_6"); // fallback: would break linear control flow
    }
    if ($.timer_as3 < 1) {
      Hud.ClearTimer($.timer_as3);
    }
    [$.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z] = DrugRun.FindPlaneCoordinates();
    $.blip_as3_dodo = Blip.AddForCoordOld($.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z, 4, 2 /* blip_only */);
    $.blip_as3_dodo.ChangeScale(2);
    // SCM GOSUB area_check
    await area_check();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_mission_as3_failed == 1) {
      // SCM GOTO → mission_as3_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_as3_failed"); // fallback: would break linear control flow
    }
    // SCM GOSUB baddies
    await baddies();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function loop_as3_6() {
  $.blip_as3_boat.Remove();
  $.blip_as3_bouy.Remove();
  $.dodo_as3 = Car.Create(119 /* PLANE_DODO */, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.dodo_as3.SetHealth(1);
  $.dodo_as3_x = $.dodo_as3_x + 1.0;
  $.charlie_1 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_1.Flash(1 /* On */);
  $.charlie_1.SetCollision(1 /* TRUE */);
  $.charlie_1.SetDynamic(1 /* TRUE */);
  $.blip_charlie_1 = Blip.AddForObject($.charlie_1);
  $.charlie_1.AddToVelocity(18.0, 12.0, 6.0);
  $.dodo_as3_y = $.dodo_as3_y - 1.0;
  $.charlie_2 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_2.Flash(1 /* On */);
  $.charlie_2.SetCollision(1 /* TRUE */);
  $.charlie_2.SetDynamic(1 /* TRUE */);
  $.blip_charlie_2 = Blip.AddForObject($.charlie_2);
  $.charlie_2.AddToVelocity(14.0, -19.0, 7.0);
  $.dodo_as3_x = $.dodo_as3_x - 1.0;
  $.charlie_3 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_3.Flash(1 /* On */);
  $.charlie_3.SetCollision(1 /* TRUE */);
  $.charlie_3.SetDynamic(1 /* TRUE */);
  $.blip_charlie_3 = Blip.AddForObject($.charlie_3);
  $.charlie_3.AddToVelocity(13.0, -15.0, 1.0);
  $.dodo_as3_x = $.dodo_as3_x - 1.0;
  $.charlie_4 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_4.Flash(1 /* On */);
  $.charlie_4.SetCollision(1 /* TRUE */);
  $.charlie_4.SetDynamic(1 /* TRUE */);
  $.blip_charlie_4 = Blip.AddForObject($.charlie_4);
  $.charlie_4.AddToVelocity(-18.0, -19.5, 4.0);
  $.dodo_as3_y = $.dodo_as3_y + 1.0;
  $.charlie_5 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_5.Flash(1 /* On */);
  $.charlie_5.SetCollision(1 /* TRUE */);
  $.charlie_5.SetDynamic(1 /* TRUE */);
  $.blip_charlie_5 = Blip.AddForObject($.charlie_5);
  $.charlie_5.AddToVelocity(-7.0, 11.0, 8.0);
  $.dodo_as3_y = $.dodo_as3_y + 1.0;
  $.charlie_6 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_6.Flash(1 /* On */);
  $.charlie_6.SetCollision(1 /* TRUE */);
  $.charlie_6.SetDynamic(1 /* TRUE */);
  $.blip_charlie_6 = Blip.AddForObject($.charlie_6);
  $.charlie_6.AddToVelocity(-17.0, 4.8, 7.0);
  $.dodo_as3_x = $.dodo_as3_x + 1.0;
  $.charlie_7 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_7.Flash(1 /* On */);
  $.charlie_7.SetCollision(1 /* TRUE */);
  $.charlie_7.SetDynamic(1 /* TRUE */);
  $.blip_charlie_7 = Blip.AddForObject($.charlie_7);
  $.charlie_7.AddToVelocity(-11.0, 12.0, 7.0);
  $.dodo_as3_x = $.dodo_as3_x + 1.0;
  $.charlie_8 = Object.CreateNoOffset(packagelarge, $.dodo_as3_x, $.dodo_as3_y, $.dodo_as3_z);
  $.charlie_8.Flash(1 /* On */);
  $.charlie_8.SetCollision(1 /* TRUE */);
  $.charlie_8.SetDynamic(1 /* TRUE */);
  $.blip_charlie_8 = Blip.AddForObject($.charlie_8);
  $.charlie_8.AddToVelocity(10.0, 10.0, 0.0);
  $.timer_as3_start = Clock.GetGameTimer();
}

async function loop_as3_7() {
  while ($.counter_charlie < 8) {
    await asyncWait(0);
    // SCM GOSUB baddies
    await baddies();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_counter_message == 0) {
      Text.PrintNow("AS3_5", 5000, 1);
      $.flag_counter_message = 1;
    }
    $.timer_as3_now = Clock.GetGameTimer();
    $.timer_as3_dif = $.timer_as3_now - $.timer_as3_start;
    if ($.timer_as3_dif > $.particle_time) {
      $.particle_time = $.timer_as3_dif + 200;
      $.flag_particle = 1;
    }
    if ($.flag_particle == 1) {
      if ($.flag_charlie_1 == 0) {
        [$.charlie_1_x, $.charlie_1_y, $.charlie_1_z] = $.charlie_1.GetCoordinates();
        if ($.timer_as3_dif < 6000) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_1_x, $.charlie_1_y, $.charlie_1_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 6000) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_1_x, $.charlie_1_y, $.charlie_1_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_2 == 0) {
        [$.charlie_2_x, $.charlie_2_y, $.charlie_2_z] = $.charlie_2.GetCoordinates();
        if ($.timer_as3_dif < 4000) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_2_x, $.charlie_2_y, $.charlie_2_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 4000) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_2_x, $.charlie_2_y, $.charlie_2_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_3 == 0) {
        [$.charlie_3_x, $.charlie_3_y, $.charlie_3_z] = $.charlie_3.GetCoordinates();
        if ($.timer_as3_dif < 7000) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_3_x, $.charlie_3_y, $.charlie_3_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 7000) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_3_x, $.charlie_3_y, $.charlie_3_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_4 == 0) {
        [$.charlie_4_x, $.charlie_4_y, $.charlie_4_z] = $.charlie_4.GetCoordinates();
        if ($.timer_as3_dif < 3500) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_4_x, $.charlie_4_y, $.charlie_4_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 3500) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_4_x, $.charlie_4_y, $.charlie_4_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_5 == 0) {
        [$.charlie_5_x, $.charlie_5_y, $.charlie_5_z] = $.charlie_5.GetCoordinates();
        if ($.timer_as3_dif < 8000) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_5_x, $.charlie_5_y, $.charlie_5_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 8000) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_5_x, $.charlie_5_y, $.charlie_5_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_6 == 0) {
        [$.charlie_6_x, $.charlie_6_y, $.charlie_6_z] = $.charlie_6.GetCoordinates();
        if ($.timer_as3_dif < 6000) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_6_x, $.charlie_6_y, $.charlie_6_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 6000) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_6_x, $.charlie_6_y, $.charlie_6_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_7 == 0) {
        [$.charlie_7_x, $.charlie_7_y, $.charlie_7_z] = $.charlie_7.GetCoordinates();
        if ($.timer_as3_dif < 7500) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_7_x, $.charlie_7_y, $.charlie_7_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 7500) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_7_x, $.charlie_7_y, $.charlie_7_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      if ($.flag_charlie_8 == 0) {
        [$.charlie_8_x, $.charlie_8_y, $.charlie_8_z] = $.charlie_8.GetCoordinates();
        if ($.timer_as3_dif < 4750) {
          Fx.AddMovingParticleEffect(13 /* POBJECT_FIRE_TRAIL */, $.charlie_8_x, $.charlie_8_y, $.charlie_8_z, 0.0, 0.0, 0.0, 0.4, 0, 0, 0, 200);
        }
        if ($.timer_as3_dif > 4750) {
          Fx.AddMovingParticleEffect(11 /* POBJECT_DRY_ICE */, $.charlie_8_x, $.charlie_8_y, $.charlie_8_z, 0.0, 0.0, 0.0, 0.3, 0, 0, 0, 200);
        }
      }
      $.flag_particle = 0;
    }
    if ($.player.IsInModel(136 /* BOAT_REEFER */) || $.player.IsInModel(113 /* BOAT_PREDATOR */) || $.player.IsInModel(135 /* BOAT_SPEEDER */)) {
      if ($.flag_charlie_1 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_1_x, $.charlie_1_y, $.charlie_1_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_1.Remove();
          $.charlie_1.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_1 = 1;
        }
      }
      if ($.flag_charlie_2 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_2_x, $.charlie_2_y, $.charlie_2_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_2.Remove();
          $.charlie_2.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_2 = 1;
        }
      }
      if ($.flag_charlie_3 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_3_x, $.charlie_3_y, $.charlie_3_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_3.Remove();
          $.charlie_3.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_3 = 1;
        }
      }
      if ($.flag_charlie_4 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_4_x, $.charlie_4_y, $.charlie_4_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_4.Remove();
          $.charlie_4.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_4 = 1;
        }
      }
      if ($.flag_charlie_5 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_5_x, $.charlie_5_y, $.charlie_5_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_5.Remove();
          $.charlie_5.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_5 = 1;
        }
      }
      if ($.flag_charlie_6 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_6_x, $.charlie_6_y, $.charlie_6_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_6.Remove();
          $.charlie_6.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_6 = 1;
        }
      }
      if ($.flag_charlie_7 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_7_x, $.charlie_7_y, $.charlie_7_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_7.Remove();
          $.charlie_7.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_7 = 1;
        }
      }
      if ($.flag_charlie_8 == 0) {
        if ($.player.LocateAnyMeans3D($.charlie_8_x, $.charlie_8_y, $.charlie_8_z, 4.0, 4.0, 4.0, 0 /* false */)) {
          $.blip_charlie_8.Remove();
          $.charlie_8.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_8 = 1;
        }
      }
    }
    else {
      if ($.flag_charlie_1 == 0) {
        if ($.player.IsTouchingObject($.charlie_1)) {
          $.blip_charlie_1.Remove();
          $.charlie_1.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_1 = 1;
        }
      }
      if ($.flag_charlie_2 == 0) {
        if ($.player.IsTouchingObject($.charlie_2)) {
          $.blip_charlie_2.Remove();
          $.charlie_2.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_2 = 1;
        }
      }
      if ($.flag_charlie_3 == 0) {
        if ($.player.IsTouchingObject($.charlie_3)) {
          $.blip_charlie_3.Remove();
          $.charlie_3.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_3 = 1;
        }
      }
      if ($.flag_charlie_4 == 0) {
        if ($.player.IsTouchingObject($.charlie_4)) {
          $.blip_charlie_4.Remove();
          $.charlie_4.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_4 = 1;
        }
      }
      if ($.flag_charlie_5 == 0) {
        if ($.player.IsTouchingObject($.charlie_5)) {
          $.blip_charlie_5.Remove();
          $.charlie_5.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_5 = 1;
        }
      }
      if ($.flag_charlie_6 == 0) {
        if ($.player.IsTouchingObject($.charlie_6)) {
          $.blip_charlie_6.Remove();
          $.charlie_6.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_6 = 1;
        }
      }
      if ($.flag_charlie_7 == 0) {
        if ($.player.IsTouchingObject($.charlie_7)) {
          $.blip_charlie_7.Remove();
          $.charlie_7.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_7 = 1;
        }
      }
      if ($.flag_charlie_8 == 0) {
        if ($.player.IsTouchingObject($.charlie_8)) {
          $.blip_charlie_8.Remove();
          $.charlie_8.Delete();
          ++$.counter_charlie;
          Text.PrintWithNumberNow("AS3_6", $.counter_charlie, 3000, 1);
          $.flag_charlie_8 = 1;
        }
      }
    }
  }
  Text.PrintNow("STASH", 4000, 1);
  $.blip_stash = Blip.AddForCoord(367.25, -328.0, 19.5);
  while (!($.player.LocateOnFoot3D(366.939, -328.025, 18.5, 1.0, 1.0, 4.0, 1 /* true */))) {
    await asyncWait(0);
  }
  $.blip_stash.Remove();
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
  Text.PrintBig("AS4", 15000, 2);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.RequestModel(csitecutscene);
  Streaming.LoadSpecialCharacter(1, $.asuka);
  Streaming.LoadSpecialCharacter(2, $.miguel);
  Streaming.LoadSpecialModel(hier`cutobj01`, whip);
  Streaming.LoadSpecialModel(hier`cutobj02`, note);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(csitecutscene))) {
    await asyncWait(0);
  }
  Cutscene.Load(a9_asd);
  Cutscene.SetOffset(369.02, -327.5, 18.46);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_asuka.SetAnim($.asuka);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_miguel.SetAnim($.miguel);
  $.cs_whip = CutsceneObject.Create(hier`cutobj01`);
  $.cs_whip.SetAnim(whip);
  $.cs_note = CutsceneObject.Create(hier`cutobj02`);
  $.cs_note.SetAnim(note);
  $.player.SetCoordinates(373.7523, -327.2676, 17.1950);
  $.player.SetHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT1_A", 5000, 1);
  while ($.cs_time < 8000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT1_B", 4000, 1);
  while ($.cs_time < 12444) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  Cutscene.Clear();
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(csitecutscene);
  World.SwitchRubbish(1 /* ON */);
  // SCM GOTO → mission_as3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_as3_passed"); // fallback: would break linear control flow
}

async function mission_as3_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  if ($.player.HasBeenArrested()) {
    Restart.OverridePolice(2 /* LEVEL_COMMERCIAL */);
  }
  if ($.player.IsDead()) {
    Restart.OverrideHospital(2 /* LEVEL_COMMERCIAL */);
  }
  return;
}

async function mission_as3_passed() {
  $.flag_asuka_suburban_mission3_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 45000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(45000);
  $.asuka_contact_blip.Remove();
  $.maria_contact_blip.Remove();
  $.maria_contact_blip = Blip.AddSpriteForContactPoint(-362.8, 245.9, 60.0, 3 /* RADAR_SPRITE_CAT */);
  // START_NEW_SCRIPT cat_mission1_loop
  Stat.RegisterMissionPassed(AS3);
  Stat.PlayerMadeProgress(1);
  return;
}

async function mission_cleanup_as3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_suburban_mission = 0;
  Hud.ClearTimer($.timer_as3);
  $.blip_as3_boat.Remove();
  $.blip_as3_dodo.Remove();
  $.blip_as3_bouy.Remove();
  $.blip_stash.Remove();
  if (!($.rocket_as3.HasBeenCollected())) {
    $.rocket_as3.Remove();
  }
  Streaming.MarkModelAsNoLongerNeeded(bouy);
  Streaming.MarkModelAsNoLongerNeeded(car`REEFER`);
  Streaming.MarkModelAsNoLongerNeeded(packagelarge);
  Streaming.MarkModelAsNoLongerNeeded(car`DEADDODO`);
  Streaming.MarkModelAsNoLongerNeeded(car`DODO`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Mission.Finish();
  return;
}

async function baddies() {
  if ($.flag_created_baddies == 0) {
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      $.kappa_cartel1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1015.0, -1269.0, -100.0);
      $.kappa_cartel1.SetHeading(265.0);
      $.kappa_cartel1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
      $.kappa_cartel1.AddArmor(100);
      $.kappa_cartel2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1013.0, -1260.7, -100.0);
      $.kappa_cartel2.SetHeading(300.0);
      $.kappa_cartel2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel2.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.kappa_cartel2.AddArmor(100);
      $.kappa_cartel3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1027.3, -1265.2, -100.0);
      $.kappa_cartel3.SetHeading(265.0);
      $.kappa_cartel3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
      $.kappa_cartel3.AddArmor(100);
      $.kappa_cartel4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1380.0, -1043.0, -100.0);
      $.kappa_cartel4.SetHeading(340.0);
      $.kappa_cartel4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel4.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.kappa_cartel4.AddArmor(100);
      $.kappa_cartel5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1392.0, -1043.3, -100.0);
      $.kappa_cartel5.SetHeading(240.0);
      $.kappa_cartel5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.kappa_cartel5.AddArmor(100);
      $.kappa_cartel6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1488.0, -1056.0, -100.0);
      $.kappa_cartel6.SetHeading(110.0);
      $.kappa_cartel6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel6.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.kappa_cartel6.AddArmor(100);
      $.kappa_cartel7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1473.0, -1062.0, -100.0);
      $.kappa_cartel7.SetHeading(280.0);
      $.kappa_cartel7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel7.GiveWeapon(6 /* WEAPONTYPE_M16 */, 100);
      $.kappa_cartel7.AddArmor(100);
      $.kappa_cartel8 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -849.0, -1235.0, -100.0);
      $.kappa_cartel8.SetHeading(250.0);
      $.kappa_cartel8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
      $.kappa_cartel8.AddArmor(100);
      $.kappa_cartel9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1478.0, -1055.0, -100.0);
      $.kappa_cartel9.SetHeading(250.0);
      $.kappa_cartel9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel9.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 100);
      $.kappa_cartel9.AddArmor(100);
      $.cartel_car_a_as1 = Car.Create(131 /* CAR_COLUMB */, -1019.0, -1263.0, -100.0);
      $.cartel_car_a_as1.SetHeading(50.0);
      $.cartel_car_b_as1 = Car.Create(131 /* CAR_COLUMB */, -1383.3, -1045.0, -100.0);
      $.cartel_car_b_as1.SetHeading(231.5);
      $.cartel_car_d_as1 = Car.Create(131 /* CAR_COLUMB */, -1478.3, -1062.8, -100.0);
      $.cartel_car_b_as1.SetHeading(250.0);
      $.kappa_cartel10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1385.3, -1035.0, -100.0);
      $.kappa_cartel10.SetHeading(231.0);
      $.kappa_cartel10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
      $.kappa_cartel10.GiveWeapon(8 /* WEAPONTYPE_ROCKET */, 5);
      $.kappa_cartel10.AddArmor(100);
      $.kappa_cartel1.SetStayInSamePlace(1 /* true */);
      $.flag_created_baddies = 1;
    }
  }
  if ($.flag_created_baddies == 1) {
    if ($.player.LocateAnyMeans2D(-1019.0, -1263.0, 60.0, 60.0, 0 /* false */)) {
      if (!(Char.IsDead($.kappa_cartel3))) {
        $.kappa_cartel3.SetObjKillPlayerAnyMeans($.player);
      }
    }
    if ($.player.LocateAnyMeans2D(-1385.3, -1035.0, 80.0, 80.0, 0 /* false */)) {
      if (!(Char.IsDead($.kappa_cartel4))) {
        $.kappa_cartel4.SetObjKillPlayerAnyMeans($.player);
      }
      if (!(Char.IsDead($.kappa_cartel5))) {
        $.kappa_cartel5.SetObjKillPlayerAnyMeans($.player);
      }
    }
    if ($.player.LocateAnyMeans2D(-1478.3, -1062.8, 80.0, 80.0, 0 /* false */)) {
      if (!(Char.IsDead($.kappa_cartel6))) {
        $.kappa_cartel6.SetObjKillPlayerAnyMeans($.player);
      }
      if (!(Char.IsDead($.kappa_cartel7))) {
        $.kappa_cartel7.SetObjKillPlayerAnyMeans($.player);
      }
      if (!(Char.IsDead($.kappa_cartel9))) {
        $.kappa_cartel9.SetObjKillPlayerAnyMeans($.player);
      }
    }
  }
  return;
}

async function area_check() {
  if ($.dodo_as3_x > $.killzone_min_x && $.dodo_as3_x < $.killzone_max_x) {
    if ($.dodo_as3_y > $.killzone_min_y && $.dodo_as3_y < $.killzone_max_y) {
      if ($.dodo_as3_z > 5.0 && $.dodo_as3_z < 30.0) {
        $.flag_mission_as3_failed = 1;
      }
    }
  }
  return;
}

export async function asusb3() {
  // MissionBoundary
  // SCM GOSUB mission_start_as3
  await mission_start_as3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_as3_failed
    await mission_as3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_as3
  await mission_cleanup_as3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT timer_as3 player_as3_boat dodo_as3
  // VAR_INT bouy_1_as3 bouy_2_as3 bouy_3_as3 bouy_4_as3 bouy_5_as3
  // VAR_INT bouy_6_as3 bouy_7_as3 bouy_8_as3 bouy_9_as3 bouy_10_as3
  // VAR_INT bouy_point
  // VAR_INT blip_as3_boat blip_as3_bouy blip_as3_dodo blip_stash
  // VAR_INT blip_charlie_1 blip_charlie_2 blip_charlie_3 blip_charlie_4
  // VAR_INT blip_charlie_5 blip_charlie_6 blip_charlie_7 blip_charlie_8
  // VAR_FLOAT platform_x platform_y
  // VAR_FLOAT dodo_as3_x dodo_as3_y dodo_as3_z
  // VAR_INT charlie_1 charlie_2 charlie_3 charlie_4
  // VAR_INT charlie_5 charlie_6 charlie_7 charlie_8
  // VAR_INT rocket_as3
  // VAR_FLOAT charlie_1_x charlie_1_y charlie_1_z
  // VAR_FLOAT charlie_2_x charlie_2_y charlie_2_z
  // VAR_FLOAT charlie_3_x charlie_3_y charlie_3_z
  // VAR_FLOAT charlie_4_x charlie_4_y charlie_4_z
  // VAR_FLOAT charlie_5_x charlie_5_y charlie_5_z
  // VAR_FLOAT charlie_6_x charlie_6_y charlie_6_z
  // VAR_FLOAT charlie_7_x charlie_7_y charlie_7_z
  // VAR_FLOAT charlie_8_x charlie_8_y charlie_8_z
  // VAR_FLOAT min_x max_x min_y max_y min_z max_z
  // VAR_INT counter_charlie flag_counter_message particle_time flag_particle flag_boat_message
  // VAR_INT flag_charlie_1 flag_charlie_2 flag_charlie_3 flag_charlie_4
  // VAR_INT flag_charlie_5 flag_charlie_6 flag_charlie_7 flag_charlie_8
  // VAR_INT flag_commence_approach flag_runway_blip flag_boat_blip flag_bouy_blip
  // VAR_INT timer_as3_start timer_as3_now timer_as3_dif
  // VAR_INT flag_created_baddies flag_mission_as3_failed
}
