// Generated from Main/Industrial/joey1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey1() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  $.mission_passed_for_lips_finished = 0;
  // ScriptName
  await asyncWait(0);
  $.flag_displayed_wanted_message_jm1 = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialCharacter(2, $.misty);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEDOOR);
  Streaming.LoadSpecialModel(hier`cutobj02`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj04`, MISTYH);
  Streaming.RequestModel(car`IDAHO`);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(car`IDAHO`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  Cutscene.Load(J1_LFL);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
  $.cut_car2_lm3 = Car.Create(84 /* CAR_IDAHO */, 1182.5, -857.0, 14.1);
  $.cut_car2_lm3.SetHeading(291.2);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.SetAnim($.joey);
  $.cs_misty = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_misty.SetAnim($.misty);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj02`);
  $.cs_joeyhead.SetAnim($.joey);
  $.cs_mistyhead = CutsceneHead.Create($.cs_misty, hier`cutobj04`);
  $.cs_mistyhead.SetAnim($.misty);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj03`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_joedoor = CutsceneObject.Create(hier`cutobj01`);
  $.cs_joedoor.SetAnim(JOEDOOR);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 0 /* FALSE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 0 /* FALSE */);
  World.ClearArea(1191.9, -870.4, 15.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1191.9, -870.4, -100.0);
  $.player.SetHeading(230.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 433) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_A", 10000, 2);
  while ($.cs_time < 2739) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_B", 10000, 2);
  while ($.cs_time < 6344) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_C", 10000, 2);
  while ($.cs_time < 8362) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_D", 10000, 2);
  while ($.cs_time < 10700) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_E", 10000, 2);
  while ($.cs_time < 12688) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_F", 10000, 2);
  while ($.cs_time < 15858) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_G", 10000, 2);
  while ($.cs_time < 19969) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_H", 10000, 2);
  while ($.cs_time < 21519) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_I", 3000, 2);
  while ($.cs_time < 24979) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_J", 10000, 2);
  while ($.cs_time < 27466) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM1_K", 10000, 2);
  while ($.cs_time < 29204) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 30000) {
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
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door1, 1 /* TRUE */);
  World.SetVisibilityOfClosestObjectOfType(1192.23, -867.252, 14.124, 6.0, joey_door2, 1 /* TRUE */);
  Camera.SetInFrontOfPlayer();
  $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */);
  $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
  $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0);
  $.blip2_jm1.Remove();
  $.blip3_jm1.Remove();
  $.blip4_jm1.Remove();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  $.cut_car2_lm3.Delete();
  Streaming.LoadSpecialCharacter(3, $.lips);
  Streaming.RequestModel(car`IDAHO`);
  while (!(Streaming.HasModelLoaded(car`IDAHO`)) || !(Streaming.HasSpecialCharacterLoaded(3))) {
    await asyncWait(0);
  }
  if ($.timer_help_message_displayed == 0) {
    Text.PrintHelp("TIMER");
    $.timer_help_message_displayed = 1;
  }
  $.mike_car = Car.Create(84 /* CAR_IDAHO */, 1336.2, -460.8, -100.0);
  $.mike_car.MakeABitStronger(1 /* TRUE */);
  $.mike_car.LockDoors(6 /* CARLOCK_FORCE_SHUT_DOORS */);
  $.mike_car.SetHeading(90.0);
  $.mike_car.SetCanRespray(0 /* OFF */);
  $.blip1_jm1 = Blip.AddForCar($.mike_car);
  $.countdown_jm1 = 361000;
  Hud.DisplayTimer($.countdown_jm1);
  if (Car.IsDead($.mike_car)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
  }
  while (!($.player.IsInCar($.mike_car))) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.countdown_jm1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
  }
  Text.PrintNow("JM1_1", 5000, 1);
  Game.SetFreeBombs(1 /* On */);
}

async function Go_to_8Balls() {
  $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
  while (!($.mike_car.IsArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) && !($.mike_car.IsArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */))) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.countdown_jm1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.mike_car)) {
      if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
        if (!($.mike_car.IsArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */)) || !($.mike_car.IsArmedWithBomb(2 /* CARBOMB_ONIGNITION */))) {
          $.blip2_jm1.Remove();
          $.blip2_jm1 = Blip.AddSpriteForCoord(1282.0, -104.0, -100.0, 2 /* RADAR_SPRITE_BOMB */);
          $.blip1_jm1.Remove();
        }
        $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.mike_car))) {
      if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
        $.blip1_jm1 = Blip.AddForCar($.mike_car);
        $.blip2_jm1.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
      }
    }
    if (!($.mike_car.IsHealthGreater(700)) || $.mike_car.IsVisiblyDamaged()) {
      Text.PrintSoon("JM1_4", 5000, 2);
      $.blip1_jm1.Remove();
      $.blip1_jm1 = Blip.AddForCar($.mike_car);
      $.blip1_jm1.ChangeDisplay(2 /* BLIP_ONLY */);
      $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
      while ($.mike_car.IsVisiblyDamaged()) {
        await asyncWait(0);
        if (Car.IsDead($.mike_car)) {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.mike_car.IsArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */) || $.mike_car.IsArmedWithBomb(2 /* CARBOMB_ONIGNITION */)) {
          $.blip2_jm1.Remove();
        }
        if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.countdown_jm1 == 0) {
          Text.PrintNow("OUTTIME", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.player.IsInCar($.mike_car)) {
          if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
            $.blip4_jm1.Remove();
            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
            $.blip1_jm1.Remove();
            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
          }
        }
        if (!($.player.IsInCar($.mike_car))) {
          if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
            $.blip1_jm1 = Blip.AddForCar($.mike_car);
            $.blip4_jm1.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
          }
        }
      }
      $.blip4_jm1.Remove();
      // SCM GOTO → Go_to_8Balls (not lowered; manual jump required)
      throw new Error("unresolved GOTO Go_to_8Balls"); // fallback: would break linear control flow
    }
  }
  await asyncWait(4000);
  Text.PrintNow("jm1_2", 5000, 2);
  $.blip1_jm1.Remove();
  $.blip2_jm1.Remove();
  $.blip4_jm1.Remove();
}

async function one_before_joey_label1() {
  Game.SetFreeBombs(0 /* Off */);
}

async function joey_label1() {
  await asyncWait(0);
  $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
  if (Car.IsDead($.mike_car)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
  }
  $.blob_flag = 1;
  while (!($.mike_car.IsStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, $.blob_flag)) || $.player.IsWantedLevelGreater(0) || $.mike_car.IsVisiblyDamaged()) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.countdown_jm1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.mike_car)) {
      if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
        $.blip3_jm1.Remove();
        $.blip3_jm1 = Blip.AddForCoord(1335.0, -455.0, -100.0);
        $.blip1_jm1.Remove();
        $.blob_flag = 1;
        $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
      }
    }
    if (!($.player.IsInCar($.mike_car))) {
      if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
        $.blip1_jm1 = Blip.AddForCar($.mike_car);
        $.blip3_jm1.Remove();
        Text.PrintNow("IN_VEH", 5000, 1);
        $.blob_flag = 0;
        $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
      }
    }
    if (!($.mike_car.IsHealthGreater(700)) || $.mike_car.IsVisiblyDamaged()) {
      Text.PrintSoon("JM1_4", 5000, 2);
      $.blip3_jm1.Remove();
      $.blip1_jm1.Remove();
      $.blip1_jm1 = Blip.AddForCar($.mike_car);
      $.blip1_jm1.ChangeDisplay(2 /* BLIP_ONLY */);
      $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
      while ($.mike_car.IsVisiblyDamaged()) {
        await asyncWait(0);
        if (Car.IsDead($.mike_car)) {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
          Text.PrintNow("WRECKED", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.countdown_jm1 == 0) {
          Text.PrintNow("OUTTIME", 5000, 1);
          // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
          throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
        }
        if ($.player.IsInCar($.mike_car)) {
          if ($.flag_car_blip_displayed_jm1 == 1 /* TRUE */) {
            $.blip4_jm1.Remove();
            $.blip4_jm1 = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
            $.blip1_jm1.Remove();
            $.blob_flag = 1;
            $.flag_car_blip_displayed_jm1 = 0 /* FALSE */;
          }
        }
        if (!($.player.IsInCar($.mike_car))) {
          if ($.flag_car_blip_displayed_jm1 == 0 /* FALSE */) {
            $.blip1_jm1 = Blip.AddForCar($.mike_car);
            $.blip4_jm1.Remove();
            Text.PrintNow("IN_VEH", 5000, 1);
            $.blob_flag = 0;
            $.flag_car_blip_displayed_jm1 = 1 /* TRUE */;
          }
        }
      }
      $.blip4_jm1.Remove();
      // SCM GOTO → joey_label1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO joey_label1"); // fallback: would break linear control flow
    }
    if ($.player.IsInAreaInCar3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, 0 /* FALSE */)) {
      if ($.player.IsWantedLevelGreater(0)) {
        if ($.flag_displayed_wanted_message_jm1 == 0) {
          Text.PrintNow("WANTED1", 4000, 1);
          $.flag_displayed_wanted_message_jm1 = 1;
        }
      }
    }
    else {
      if (!($.player.IsInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, 0 /* FALSE */))) {
        $.flag_displayed_wanted_message_jm1 = 0;
      }
    }
  }
  $.blip1_jm1.Remove();
  $.blip2_jm1.Remove();
  $.blip3_jm1.Remove();
  $.blip4_jm1.Remove();
  if ($.countdown_jm1 == 0) {
    Text.PrintNow("OUTTIME", 5000, 1);
    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
  }
  if (!(Car.IsDead($.mike_car))) {
    $.mikes_car_heading = $.mike_car.GetHeading();
    if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
      Text.PrintNow("JM1_6", 5000, 1);
      // SCM GOTO → joey_label1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO joey_label1"); // fallback: would break linear control flow
    }
    if ($.player.IsInCar($.mike_car)) {
      Text.PrintNow("JM1_3", 5000, 2);
    }
  }
}

async function cars_rigged() {
  await asyncWait(0);
  if (Car.IsDead($.mike_car)) {
    Text.PrintNow("WRECKED", 5000, 1);
    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
  }
  while (!($.mike_car.IsStoppedInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, 1 /* TRUE */)) || $.player.IsInArea3D(1306.0, -482.0, 49.0, 1350.0, -444.0, 59.0, 0 /* FALSE */) || !($.player.IsInArea3D(1306.0, -484.0, 49.0, 1370.0, -434.0, 69.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.countdown_jm1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if (!($.mike_car.IsInArea3D(1339.6, -459.5, 49.0, 1332.8, -462.8, 53.0, 0 /* FALSE */))) {
      Text.PrintNow("JM1_6", 5000, 1);
      // SCM GOTO → joey_label1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO joey_label1"); // fallback: would break linear control flow
    }
    $.mikes_car_heading = $.mike_car.GetHeading();
    if ($.mikes_car_heading > 100.0 || $.mikes_car_heading < 80.0) {
      Text.PrintNow("JM1_6", 5000, 1);
      // SCM GOTO → joey_label1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO joey_label1"); // fallback: would break linear control flow
    }
    if (!($.mike_car.IsHealthGreater(700)) || $.mike_car.IsVisiblyDamaged()) {
      // SCM GOTO → joey_label1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO joey_label1"); // fallback: would break linear control flow
    }
  }
  if ($.countdown_jm1 == 0) {
    Text.PrintNow("OUTTIME", 5000, 1);
    // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
  }
  if (!($.mike_car.IsArmedWithBomb(5 /* CARBOMB_ONIGNITIONACTIVE */))) {
    Text.PrintNow("JM1_5", 5000, 1);
    // SCM GOTO → cars_rigged (not lowered; manual jump required)
    throw new Error("unresolved GOTO cars_rigged"); // fallback: would break linear control flow
  }
  World.ClearArea(1325.5, -452.5, 54.0, 4.0, 1 /* TRUE */);
  World.ClearArea(1328.4, -453.0, 54.0, 4.0, 1 /* TRUE */);
  World.ClearArea(1330.0, -466.1, 49.0, 4.0, 1 /* TRUE */);
  World.ClearArea(1333.6, -465.3, 49.0, 4.0, 1 /* TRUE */);
  Hud.ClearTimer($.countdown_jm1);
  Game.SetPoliceIgnorePlayer($.player, 1 /* On */);
  $.player.SetControl(0 /* Off */);
  Hud.SwitchWidescreen(1 /* ON */);
  $.lips = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL3`, 1325.5, -452.5, -100.0);
  $.lips.SetHeading(270.0);
  Camera.SetFixedPosition(1337.814, -468.631, 49.774, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(1337.053, -468.016, 49.982, 2 /* JUMP_CUT */);
  $.lips.SetObjGotoCoordOnFoot(1328.4, -453.0);
  if (Char.IsDead($.lips)) {
    // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
  }
  TIMERB = 0;
  if (!(Char.IsDead($.lips))) {
    while (!($.lips.IsObjectivePassed())) {
      await asyncWait(0);
      if (Car.IsDead($.mike_car)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
      }
      if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.lips)) {
        // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
      }
      if (TIMERB > 10000) {
        if (!(Char.IsDead($.lips))) {
          $.lips.SetCoordinates(1328.4, -453.0, -100.0);
        }
      }
    }
  }
  TIMERB = 0;
  if (!(Char.IsDead($.lips))) {
    $.lips.SetObjGotoCoordOnFoot(1330.0, -466.1);
  }
  while (!($.lips.IsObjectivePassed())) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.lips)) {
      // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
    }
    if (TIMERB > 10000) {
      if (!(Char.IsDead($.lips))) {
        $.lips.SetCoordinates(1330.0, -466.1, -100.0);
      }
    }
  }
  TIMERB = 0;
  if (!(Char.IsDead($.lips))) {
    $.lips.SetObjGotoCoordOnFoot(1333.6, -465.3);
  }
  Camera.SetFixedPosition(1344.8, -471.2, 54.0, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.mike_car))) {
    Camera.PointAtCar($.mike_car, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  if (!(Char.IsDead($.lips))) {
    while (!($.lips.IsObjectivePassed())) {
      await asyncWait(0);
      if (Car.IsDead($.mike_car)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
      }
      if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
      }
      if (Char.IsDead($.lips)) {
        // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
      }
      if (TIMERB > 10000) {
        if (!(Char.IsDead($.lips))) {
          $.lips.SetCoordinates(1333.6, -465.3, -100.0);
        }
      }
    }
  }
  if (!(Char.IsDead($.lips)) && !(Car.IsDead($.mike_car))) {
    $.lips.SetObjEnterCarAsDriver($.mike_car);
  }
  while (!($.lips.IsInCar($.mike_car))) {
    await asyncWait(0);
    if (Car.IsDead($.mike_car)) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if ($.mike_car.IsUpsidedown() && $.mike_car.IsStopped()) {
      Text.PrintNow("WRECKED", 5000, 1);
      // SCM GOTO → mission_joey1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.lips)) {
      // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
    }
  }
  Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
  await asyncWait(2500);
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  $.player.AddScore(10000);
  $.mission_passed_for_lips_finished = 1;
  await asyncWait(5000);
  $.player.SetControl(1 /* On */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* Off */);
  }
  // SCM GOTO → mission_joey1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey1_passed"); // fallback: would break linear control flow
}

async function mission_joey1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_joey1_passed() {
  $.flag_joey_mission1_passed = 1;
  if ($.mission_passed_for_lips_finished == 0) {
    Audio.PlayMissionPassedTune(1);
    Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
    $.player.AddScore(10000);
    $.mission_passed_for_lips_finished = 1;
  }
  Stat.RegisterMissionPassed(JM1);
  Stat.PlayerMadeProgress(1);
  $.lips.RemoveElegantly();
  // START_NEW_SCRIPT joey_mission2_loop
  return;
}

async function mission_cleanup_joey1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.blip1_jm1.Remove();
  $.blip2_jm1.Remove();
  $.blip3_jm1.Remove();
  $.blip4_jm1.Remove();
  Streaming.MarkModelAsNoLongerNeeded(car`IDAHO`);
  Streaming.UnloadSpecialCharacter(3);
  Hud.ClearTimer($.countdown_jm1);
  if (!(Car.IsDead($.mike_car))) {
    $.mike_car.SetCanRespray(1 /* ON */);
    $.mike_car.LockDoors(1 /* CARLOCK_UNLOCKED */);
    $.mike_car.MakeABitStronger(0 /* FALSE */);
  }
  Game.SetFreeBombs(0 /* Off */);
  Mission.Finish();
  return;
}

export async function joey1() {
  // MissionBoundary
  // SCM GOSUB mission_start_joey1
  await mission_start_joey1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey1_failed
    await mission_joey1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey1
  await mission_cleanup_joey1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT mike_car
  // VAR_FLOAT mikes_car_heading
  // VAR_INT blip1_jm1 blip2_jm1 blip3_jm1 blip4_jm1
  // VAR_INT flag_player_got_joey1_message flag_car_blip_displayed_jm1
  // VAR_INT flag_displayed_wanted_message_jm1
  // VAR_INT countdown_jm1 mission_passed_for_lips_finished
}
