// Generated from Main/Commercial/asuka3.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_asuka3() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_mission = 1;
  $.help1_displayed = 0;
  $.help2_displayed = 0;
  // ScriptName
  await asyncWait(0);
  $.been_in_cop_boat_before = 0;
  {
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, NOTE);
  Streaming.RequestModel(ped`MALE1`);
  Streaming.RequestModel(car`REEFER`);
  Streaming.RequestModel(car`SPEEDER`);
  Streaming.RequestModel(car`PREDATOR`);
  Streaming.RequestModel(car`STALLION`);
  Streaming.RequestModel(condo_ivy);
  Streaming.RequestModel(kmricndo01);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(condo_ivy)) || !(Streaming.HasModelLoaded(kmricndo01))) {
    await asyncWait(0);
  }
  Cutscene.Load(A2_PP);
  Cutscene.SetOffset(523.102, -636.96, 15.616);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_note = CutsceneObject.Create(hier`cutobj02`);
  $.cs_note.SetAnim(NOTE);
  World.ClearArea(523.6, -639.4, 16.6, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(523.6, -639.4, 16.0);
  $.player.SetHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3406) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM3_A", 10000, 1);
  while ($.cs_time < 5677) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM3_B", 10000, 1);
  while ($.cs_time < 11354) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("AM3_C", 10000, 1);
  while ($.cs_time < 16000) {
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
  await asyncWait(1000);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(condo_ivy);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  while (!(Streaming.HasModelLoaded(ped`MALE1`)) || !(Streaming.HasModelLoaded(car`SPEEDER`)) || !(Streaming.HasModelLoaded(car`STALLION`)) || !(Streaming.HasModelLoaded(car`PREDATOR`)) || !(Streaming.HasModelLoaded(car`REEFER`))) {
    await asyncWait(0);
  }
  World.ClearArea(640.0, -608.0, 0.0, 6.0, 1 /* TRUE */);
  $.spy_boat = Car.Create(135 /* BOAT_SPEEDER */, 612.0, -597.0, 0.0);
  $.spy_boat.SetHeading(0.0);
  $.spy_boat.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.spy_boat.SetHealth(1500);
  $.spy_boat.SetStrong(1 /* TRUE */);
  $.spy_bloke = Char.CreateInsideCar($.spy_boat, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  World.ClearArea(568.0, -686.0, 0.0, 6.0, 1 /* TRUE */);
  $.asuka_boat = Car.Create(136 /* BOAT_REEFER */, 568.0, -686.0, 0.0);
  $.asuka_boat.SetHeading(180.0);
  World.ClearArea(554.8, -767.6, 0.0, 6.0, 1 /* TRUE */);
  $.cop_boat = Car.Create(113 /* BOAT_PREDATOR */, 554.8, -767.6, 0.0);
  $.blip1_as3 = Blip.AddForCar($.cop_boat);
  if (!(Char.IsDead($.spy_bloke))) {
    $.blip2_as3 = Blip.AddForChar($.spy_bloke);
    $.blip2_as3.ChangeDisplay(1 /* MARKER_ONLY */);
  }
  await asyncWait(1500);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  Camera.SetFixedPosition(526.0, -643.3, 19.6, 0.0, 0.0, 0.0);
  if (!(Car.IsDead($.spy_boat))) {
    Camera.PointAtCar($.spy_boat, 15 /* FIXED */, 2 /* JUMP_CUT */);
  }
  await asyncWait(3000);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.Restore();
  if (!(Car.IsDead($.spy_boat))) {
    $.boat_health = $.spy_boat.GetHealth();
    Hud.DisplayCounterWithString($.boat_health, 1 /* COUNTER_DISPLAY_BAR */, "DAM");
    // SCM GOSUB boat_health
    await $.boat_health();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  TIMERB = 0;
  while (!($.player.LocateAnyMeansCar2D($.spy_boat, 55.0, 55.0, 0 /* FALSE */)) && $.spy_boat.IsHealthGreater(1499)) {
    await asyncWait(0);
    if ($.help1_displayed == 0) {
      if (TIMERB > 4000) {
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 3) {
          Text.PrintHelp(BOATIN3);
        }
        else {
          Text.PrintHelp(BOATIN1);
        }
        $.help1_displayed = 1;
      }
    }
    if ($.help2_displayed == 0) {
      if (TIMERB > 11000) {
        $.controlmode = Pad.GetControllerMode();
        if ($.controlmode == 3) {
          Text.PrintHelp(BOATIN4);
        }
        else {
          Text.PrintHelp(BOATIN2);
        }
        $.help2_displayed = 1;
      }
    }
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.SetOnlyDamagedByPlayer(0 /* FALSE */);
    $.spy_boat.SetCruiseSpeed(48.0);
  }
  await asyncWait(0);
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(744.8, -350.1, 0.0);
  }
  while (!($.spy_boat.Locate3D(744.8, -350.1, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(728.9, -133.7, 0.0);
    $.spy_boat.SetCruiseSpeed(45.0);
  }
  while (!($.spy_boat.Locate3D(728.9, -133.7, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(635.5, 24.7, 0.0);
  }
  while (!($.spy_boat.Locate3D(635.5, 24.7, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(746.6, 252.9, 0.0);
  }
  while (!($.spy_boat.Locate3D(746.6, 252.9, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(872.1, 335.9, 0.0);
  }
  while (!($.spy_boat.Locate3D(872.1, 335.9, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1064.5, 180.8, 0.0);
  }
  while (!($.spy_boat.Locate3D(1064.5, 180.8, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1262.0, 166.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1262.0, 166.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1566.0, 52.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1566.0, 52.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1595.0, -154.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1595.0, -154.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1555.0, -299.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1555.0, -299.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1617.0, -600.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1617.0, -600.0, 0.0, 5.0, 5.0, 5.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1617.0, -762.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1617.0, -762.0, 0.0, 5.0, 5.0, 5.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1637.0, -950.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1637.0, -950.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1535.0, -1173.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1535.0, -1173.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(1268.0, -1273.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(1268.0, -1273.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.Goto(938.1, -1226.4, 0.0);
  }
  while (!($.spy_boat.Locate3D(938.1, -1226.4, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.SetCruiseSpeed(45.0);
    $.spy_boat.Goto(618.0, -1083.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(618.0, -1083.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.SetCruiseSpeed(35.0);
    $.spy_boat.Goto(560.0, -899.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(560.0, -899.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  if (!(Car.IsDead($.spy_boat))) {
    $.spy_boat.SetCruiseSpeed(20.0);
    $.spy_boat.Goto(548.0, -795.0, 0.0);
  }
  while (!($.spy_boat.Locate3D(548.0, -795.0, 0.0, 6.0, 6.0, 6.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_boat)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_boat))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_boat, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_boat.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!(Car.IsDead($.spy_boat))) {
      // SCM GOSUB boat_health
      await $.boat_health();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
  }
  await asyncWait(1000);
  if (!(Car.IsDead($.spy_boat)) && !(Char.IsDead($.spy_bloke))) {
    $.spy_boat.Stop();
    $.spy_boat.Anchor(1 /* TRUE */);
    $.spy_bloke.WarpFromCarToCoord(547.3, -778.4, -100.0);
    Hud.ClearCounter($.boat_health);
  }
  $.spy_car = Car.Create(122 /* CAR_STALLION */, 499.7, -734.4, -100.0);
  $.spy_car.SetHeading(90.0);
  $.spy_bloke.SetRunning(1 /* TRUE */);
  $.spy_bloke.SetObjRunToCoord(510.0, -775.6);
  while (!($.spy_bloke.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.spy_bloke.SetObjRunToCoord(505.2, -751.1);
  while (!($.spy_bloke.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.spy_bloke.SetObjRunToCoord(501.1, -749.5);
  while (!($.spy_bloke.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Car.IsDead($.spy_car))) {
    $.spy_bloke.SetObjEnterCarAsDriver($.spy_car);
  }
  while (!($.spy_bloke.IsInCar($.spy_car))) {
    await asyncWait(0);
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.spy_car) && !(Char.IsDead($.spy_bloke))) {
      // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
      throw new Error("unresolved GOTO is_he_dead_yet"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Car.IsDead($.spy_car))) {
    $.spy_car.GotoCoordinatesAccurate(463.0, -727.4, 16.1);
    $.spy_car.SetMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
    $.spy_car.SetDrivingStyle(1);
    $.spy_car.SetCruiseSpeed(15.0);
  }
  while (!($.spy_car.Locate3D(463.0, -727.4, 16.1, 3.0, 3.0, 3.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_car)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!($.spy_bloke.IsInCar($.spy_car))) {
      // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
      throw new Error("unresolved GOTO is_he_dead_yet"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_car))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_car, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_car)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_car.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Car.IsDead($.spy_car))) {
    $.spy_car.GotoCoordinatesAccurate(456.0, -707.1, 16.0);
    $.spy_car.SetMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
  }
  while (!($.spy_car.Locate3D(456.0, -707.1, 16.0, 3.0, 3.0, 3.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_car)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!($.spy_bloke.IsInCar($.spy_car))) {
      // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
      throw new Error("unresolved GOTO is_he_dead_yet"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_car))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_car, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_car)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_car.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Car.IsDead($.spy_car))) {
    $.spy_car.GotoCoordinatesAccurate(459.0, -678.1, 16.0);
    $.spy_car.SetMission(13 /* MISSION_GOTOCOORDS_STRAIGHT_ACCURATE */);
  }
  while (!($.spy_car.Locate3D(459.0, -678.1, 16.0, 3.0, 3.0, 3.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Car.IsDead($.spy_car)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.spy_bloke)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!($.spy_bloke.IsInCar($.spy_car))) {
      // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
      throw new Error("unresolved GOTO is_he_dead_yet"); // fallback: would break linear control flow
    }
    if (!(Car.IsDead($.spy_car))) {
      if (!($.player.LocateAnyMeansCar2D($.spy_car, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Car.IsDead($.spy_car)) && !(Char.IsDead($.spy_bloke))) {
          $.spy_car.Delete();
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (!(Car.IsDead($.spy_car))) {
    $.spy_car.WanderRandomly();
    $.spy_car.SetDrivingStyle(2);
    $.spy_car.SetCruiseSpeed(25.0);
  }
  while (!(Char.IsDead($.spy_bloke))) {
    await asyncWait(0);
    if (!(Char.IsDead($.spy_bloke))) {
      if (!($.player.LocateAnyMeansChar2D($.spy_bloke, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Char.IsDead($.spy_bloke))) {
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    if (Car.IsDead($.spy_car)) {
      // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
    }
    if (!($.spy_bloke.IsInCar($.spy_car))) {
      // SCM GOTO → is_he_dead_yet (not lowered; manual jump required)
      throw new Error("unresolved GOTO is_he_dead_yet"); // fallback: would break linear control flow
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
}

async function is_he_dead_yet() {
  $.spy_bloke.SetObjFleePlayerOnFootAlways($.player);
  while (!(Char.IsDead($.spy_bloke))) {
    await asyncWait(0);
    if (!(Char.IsDead($.spy_bloke))) {
      if (!($.player.LocateAnyMeansChar2D($.spy_bloke, 160.0, 160.0, 0 /* FALSE */))) {
        Text.PrintNow("AWAY", 5000, 2);
        if (!(Char.IsDead($.spy_bloke))) {
          $.spy_bloke.Delete();
        }
        // SCM GOTO → mission_asuka3_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka3_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB check_boats_dead
    await check_boats_dead();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOTO → mission_asuka3_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_asuka3_passed"); // fallback: would break linear control flow
  }
}

async function mission_asuka3_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_asuka3_passed() {
  Hud.ClearCounter($.boat_health);
  $.flag_asuka_mission3_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(AM3);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT asuka_mission4_loop
  return;
}

async function mission_cleanup_asuka3() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_mission = 0;
  $.blip1_as3.Remove();
  $.blip2_as3.Remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`MALE1`);
  Streaming.MarkModelAsNoLongerNeeded(car`SPEEDER`);
  Streaming.MarkModelAsNoLongerNeeded(car`REEFER`);
  Streaming.MarkModelAsNoLongerNeeded(car`PREDATOR`);
  Streaming.MarkModelAsNoLongerNeeded(car`STALLION`);
  Hud.ClearCounter($.boat_health);
  Mission.Finish();
  return;
}

async function boat_health() {
  {
  $.boat_health = $.spy_boat.GetHealth();
  $.boat_health2 = 1500 - $.boat_health;
  if ($.boat_health2 > 1500) {
    $.boat_health2 = 1500;
  }
  $.boat_health = $.boat_health2 / 15;
  return;
  }
}

async function check_boats_dead() {
  {
  if (!(Car.IsDead($.cop_boat))) {
    if ($.player.IsInCar($.cop_boat) && $.been_in_cop_boat_before == 0) {
      $.controlmode = Pad.GetControllerMode();
      if (!($.controlmode == 3)) {
        Text.PrintHelp(PBOAT_1);
      }
      else {
        Text.PrintHelp(PBOAT_2);
      }
      $.blip1_as3.Remove();
      $.been_in_cop_boat_before = 1;
    }
  }
  else {
    if ($.been_in_cop_boat_before == 0) {
      $.blip1_as3.Remove();
      $.been_in_cop_boat_before = 1;
    }
  }
  return;
  }
}

export async function asuka3() {
  // MissionBoundary
  // SCM GOSUB mission_start_asuka3
  await mission_start_asuka3();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_asuka3_failed
    await mission_asuka3_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_asuka3
  await mission_cleanup_asuka3();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip1_as3 blip2_as3 cop_boat been_in_cop_boat_before
  // VAR_INT spy_boat spy_bloke spy_car
  // VAR_INT spy_blokes_car asuka_boat
  // VAR_INT boat_coord_number boat_health boat_health2
  // VAR_INT help1_displayed help2_displayed
}
