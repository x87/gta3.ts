// Generated from Main/Industrial/joey2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_joey2() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_joey_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.flag_gun_message_jm2 = 0;
  $.has_audio_been_activated = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, TROLL);
  Streaming.RequestModel(jogarageext);
  Streaming.RequestModel(jogarageint);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(jogarageext)) || !(Streaming.HasModelLoaded(jogarageint))) {
    await asyncWait(0);
  }
  Cutscene.Load(J2_KCL);
  Cutscene.SetOffset(1190.079, -869.861, 13.977);
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
  while ($.cs_time < 5118) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_A", 10000, 2);
  while ($.cs_time < 10669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_B", 10000, 2);
  while ($.cs_time < 13048) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_C", 10000, 2);
  while ($.cs_time < 15427) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_D", 10000, 2);
  while ($.cs_time < 17662) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_E", 10000, 2);
  while ($.cs_time < 18887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_F", 10000, 2);
  while ($.cs_time < 22708) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_G", 10000, 2);
  while ($.cs_time < 25159) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("JM2_H", 10000, 2);
  while ($.cs_time < 28982) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 31000) {
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
  Streaming.MarkModelAsNoLongerNeeded(jogarageext);
  Streaming.MarkModelAsNoLongerNeeded(jogarageint);
  Streaming.LoadSpecialCharacter(2, $.chunky);
  Streaming.RequestModel(ped`GANG_TRIAD_A`);
  Streaming.RequestModel(car`PERENNIAL`);
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(car`PERENNIAL`))) {
    await asyncWait(0);
  }
  $.gun_chunky = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 3 /* PICKUP_ONCE */, 45, 1080.5, -396.0, -100.0);
  $.blip2_jm2 = Blip.AddSpriteForPickup($.gun_chunky, 20 /* RADAR_SPRITE_WEAPON */);
  $.noodle_stand = Object.Create(noodlesbox, 975.0, -720.0, 14.0);
  $.chunkys_car = Car.Create(87 /* CAR_PERENNIAL */, 1007.1, -756.4, 14.5);
  $.chunkys_car.SetHeading(120.0);
  $.chunkys_car2 = Car.Create(87 /* CAR_PERENNIAL */, 912.3, -686.1, 14.5);
  $.chunkys_car2.SetHeading(90.0);
  $.chunky_mate1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 976.1, -715.3, 14.2);
  $.chunky_mate1.SetHeading(346.0);
  $.chunky_mate1.GiveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  $.chunky_mate1.SetObjGuardSpot(976.1, -715.3, 14.2);
  $.chunky_mate1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky_mate2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 975.7, -724.7, 14.2);
  $.chunky_mate2.SetHeading(222.0);
  $.chunky_mate2.GiveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  $.chunky_mate2.SetObjGuardSpot(975.7, -724.7, 14.2);
  $.chunky_mate2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky_mate3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 984.0, -727.7, 14.2);
  $.chunky_mate3.SetHeading(243.0);
  $.chunky_mate3.GiveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.chunky_mate3.SetObjGuardSpot(984.0, -727.7, 14.2);
  $.chunky_mate3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 975.3, -720.4, 14.2);
  $.chunky.SetHeading(270.0);
  $.blip1_jm2 = Blip.AddForChar($.chunky);
  $.chunky.SetObjWaitOnFoot();
  $.chunky.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
  $.chunky.SetRunning(1 /* TRUE */);
  $.chunky.AddArmor(100);
  $.blip1_jm2.ChangeDisplay(2 /* BLIP_ONLY */);
  $.chunky.SetAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
  while (!($.player.LocateAnyMeansChar3D($.chunky, 25.0, 26.0, 4.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
    if (!(Char.IsDead($.chunky))) {
      $.chunky.SetOnlyDamagedByPlayer(1 /* True */);
      $.chunkyhealth = $.chunky.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate1))) {
      $.chunky_mate1.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate1health = $.chunky_mate1.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate2))) {
      $.chunky_mate2.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate2health = $.chunky_mate2.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate3))) {
      $.chunky_mate3.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate3health = $.chunky_mate3.GetHealth();
    }
    if ($.mate1health < 99 || $.mate2health < 99 || $.mate3health < 99 || $.chunkyhealth < 99) {
      // SCM GOTO → kill_and_run (not lowered; manual jump required)
      throw new Error("unresolved GOTO kill_and_run"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chunky_mate1) || Char.IsDead($.chunky_mate2) || Char.IsDead($.chunky_mate3)) {
      // SCM GOTO → kill_and_run (not lowered; manual jump required)
      throw new Error("unresolved GOTO kill_and_run"); // fallback: would break linear control flow
    }
  }
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  World.SetPedDensityMultiplier(0.0);
  Camera.SetFixedPosition(984.819, -704.631, 21.468, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(984.279, -705.429, 21.202, 2 /* JUMP_CUT */);
  await asyncWait(3000);
  Camera.SetFixedPosition(978.135, -718.497, 15.642, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(977.293, -719.016, 15.794, 2 /* JUMP_CUT */);
  await asyncWait(3000);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Hud.SwitchWidescreen(0 /* OFF */);
  Camera.RestoreJumpcut();
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  while (!($.player.LocateAnyMeansChar3D($.chunky, 20.0, 18.0, 4.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
    if (!(Char.IsDead($.chunky))) {
      $.chunky.SetOnlyDamagedByPlayer(1 /* True */);
      $.chunkyhealth = $.chunky.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate1))) {
      $.chunky_mate1.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate1health = $.chunky_mate1.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate2))) {
      $.chunky_mate2.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate2health = $.chunky_mate2.GetHealth();
    }
    if (!(Char.IsDead($.chunky_mate3))) {
      $.chunky_mate3.SetOnlyDamagedByPlayer(1 /* True */);
      $.mate3health = $.chunky_mate3.GetHealth();
    }
    if ($.mate1health < 99 || $.mate2health < 99 || $.mate3health < 99 || $.chunkyhealth < 99) {
      // SCM GOTO → kill_and_run (not lowered; manual jump required)
      throw new Error("unresolved GOTO kill_and_run"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chunky_mate1) || Char.IsDead($.chunky_mate2) || Char.IsDead($.chunky_mate3)) {
      // SCM GOTO → kill_and_run (not lowered; manual jump required)
      throw new Error("unresolved GOTO kill_and_run"); // fallback: would break linear control flow
    }
  }
}

async function kill_and_run() {
  $.blip1_jm2.ChangeDisplay(3 /* BOTH */);
  if (!(Char.IsDead($.chunky_mate1))) {
    $.chunky_mate1.SetObjKillPlayerOnFoot($.player);
    $.chunky_mate1.SetOnlyDamagedByPlayer(0 /* false */);
    $.chunky_mate1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky_mate2))) {
    $.chunky_mate2.SetObjKillPlayerOnFoot($.player);
    $.chunky_mate2.SetOnlyDamagedByPlayer(0 /* false */);
    $.chunky_mate2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky_mate3))) {
    $.chunky_mate3.SetObjKillPlayerOnFoot($.player);
    $.chunky_mate3.SetOnlyDamagedByPlayer(0 /* false */);
    $.chunky_mate3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky))) {
    $.chunky.SetHeedThreats(0 /* False */);
    $.chunky.SetOnlyDamagedByPlayer(0 /* false */);
  }
  $.chunky.SetObjRunToCoord(975.5, -722.9);
  TIMERB = 0;
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if ($.player.IsInArea2D(974.2, -727.5, 1003.4, -748.8, 0 /* FALSE */)) {
    // SCM GOTO → run_the_other_way (not lowered; manual jump required)
    throw new Error("unresolved GOTO run_the_other_way"); // fallback: would break linear control flow
  }
  $.chunky.SetObjRunToCoord(985.1, -733.9);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.SetObjRunToCoord(1004.2, -736.9);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.SetObjRunToCoord(1006.3, -753.2);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.chunkys_car)) {
    // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
    throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
  }
  else {
    if (!($.chunkys_car.IsInArea2D(1004.0, -738.0, 1012.0, -763.0, 0 /* FALSE */)) || !($.chunkys_car.IsHealthGreater(300))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
  }
  $.chunky.SetObjEnterCarAsDriver($.chunkys_car);
  while (!($.chunky.IsInCar($.chunkys_car))) {
    await asyncWait(0);
    if (Car.IsDead($.chunkys_car)) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    else {
      if (!($.chunkys_car.IsInArea2D(1004.0, -738.0, 1012.0, -763.0, 0 /* FALSE */)) || !($.chunkys_car.IsHealthGreater(300))) {
        // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
  }
  if (!(Car.IsDead($.chunkys_car))) {
    $.chunkys_car.WanderRandomly();
    $.chunkys_car.SetDrivingStyle(2);
    $.chunkys_car.SetCruiseSpeed(20.0);
  }
  while ($.chunkys_car.IsHealthGreater(300)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Car.IsDead($.chunkys_car)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateAnyMeansChar2D($.chunky, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (!($.chunky.IsInCar($.chunkys_car))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.chunkys_car.IsUpsidedown() && $.chunkys_car.IsStopped()) {
      $.chunky.SetObjLeaveCar($.chunkys_car);
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  $.chunky.SetObjLeaveCar($.chunkys_car);
  while ($.chunky.IsInCar($.chunkys_car)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateAnyMeansChar2D($.chunky, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.chunkys_car)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
  }
  // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
  throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
}

async function run_the_other_way() {
  $.chunky.SetObjRunToCoord(979.1, -720.8);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.SetObjRunToCoord(976.7, -687.0);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.SetObjRunToCoord(943.5, -679.2);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.SetObjRunToCoord(920.3, -681.5);
  while (!($.chunky.IsObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.chunkys_car2)) {
    // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
    throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
  }
  else {
    if (!($.chunkys_car2.IsInArea2D(922.7, -673.9, 906.6, -698.0, 0 /* FALSE */)) || !($.chunkys_car2.IsHealthGreater(300))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
  }
  $.chunky.SetObjEnterCarAsDriver($.chunkys_car2);
  while (!($.chunky.IsInCar($.chunkys_car2))) {
    await asyncWait(0);
    if (Car.IsDead($.chunkys_car2)) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    else {
      if (!($.chunkys_car2.IsInArea2D(922.7, -673.9, 906.6, -698.0, 0 /* FALSE */)) || !($.chunkys_car2.IsHealthGreater(300))) {
        // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
      }
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
  }
  if (!(Car.IsDead($.chunkys_car2))) {
    $.chunkys_car2.WanderRandomly();
    $.chunkys_car2.SetDrivingStyle(2);
    $.chunkys_car2.SetCruiseSpeed(20.0);
  }
  while ($.chunkys_car2.IsHealthGreater(300)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Car.IsDead($.chunkys_car2)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateAnyMeansChar2D($.chunky, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (!($.chunky.IsInCar($.chunkys_car2))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.chunkys_car2.IsUpsidedown() && $.chunkys_car2.IsStopped()) {
      $.chunky.SetObjLeaveCar($.chunkys_car2);
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  $.chunky.SetObjLeaveCar($.chunkys_car2);
  while ($.chunky.IsInCar($.chunkys_car2)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if (!($.player.LocateAnyMeansChar2D($.chunky, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.chunkys_car2)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.Remove();
      $.been_in_shop_before = 1;
    }
  }
}

async function fuckin_run_for_it() {
  if (!(Char.IsDead($.chunky))) {
    $.chunky.SetObjFleePlayerOnFootAlways($.player);
  }
  while (!(Char.IsDead($.chunky))) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.HasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (!($.player.LocateAnyMeansChar2D($.chunky, 160.0, 160.0, 0 /* FALSE */))) {
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
  }
  }
  // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
}

async function mission_joey2_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_joey2_passed() {
  $.flag_joey_mission2_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  $.player.ClearWantedLevel();
  $.player.AddScore(10000);
  Stat.RegisterMissionPassed(JM2);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT joey_mission3_loop
  if ($.out_of_stock_pistol == 0) {
    // START_NEW_SCRIPT pistol_message
  }
  return;
}

async function mission_cleanup_joey2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.special_ammu_audio = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`);
  Streaming.UnloadSpecialCharacter(2);
  $.blip1_jm2.Remove();
  $.blip2_jm2.Remove();
  $.gun_chunky.Remove();
  if (!(Char.IsDead($.chunky))) {
    $.chunky.RemoveElegantly();
  }
  Mission.Finish();
  return;
}

async function controller_modes() {
  {
  if ($.flag_player_had_gun_message == 0) {
    if ($.player.IsInAreaOnFoot3D(1075.2, -384.8, 14.0, 1086.2, -403.3, 17.0, 0 /* FALSE */)) {
      $.controlmode = Pad.GetControllerMode();
      if ($.controlmode == 0) {
        if ($.flag_gun_message_jm2 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        if ($.flag_gun_message_jm2 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        if ($.flag_gun_message_jm2 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        if ($.flag_gun_message_jm2 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        if ($.flag_gun_message_jm2 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 1) {
        if ($.flag_gun_message_jm2 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        if ($.flag_gun_message_jm2 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        if ($.flag_gun_message_jm2 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        if ($.flag_gun_message_jm2 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        if ($.flag_gun_message_jm2 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 2) {
        if ($.flag_gun_message_jm2 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        if ($.flag_gun_message_jm2 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        if ($.flag_gun_message_jm2 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        if ($.flag_gun_message_jm2 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        if ($.flag_gun_message_jm2 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      if ($.controlmode == 3) {
        if ($.flag_gun_message_jm2 == 0) {
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        if ($.flag_gun_message_jm2 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2D");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        if ($.flag_gun_message_jm2 == 1) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        if ($.flag_gun_message_jm2 == 2) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_3B");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        if ($.flag_gun_message_jm2 == 3) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_4B");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        if ($.flag_gun_message_jm2 == 4) {
          if (timerb > 10000) {
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
    }
  }
  return;
  }
}

async function Ammu_bloke_audio() {
  {
  if ($.has_audio_been_activated == 0) {
    if ($.player.IsInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, 0 /* FALSE */)) {
      $.special_ammu_audio = 1;
      Audio.LoadMissionAudio(AMMU_B);
      if ($.camera_ammu1 == 1) {
        if (!(Char.IsDead($.ammu_shop_bloke1))) {
          while (!(Audio.HasMissionAudioLoaded())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.IsShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          Audio.PlayMissionAudio();
          Text.PrintNow("AMMU_B", 5000, 2);
          while (!(Audio.HasMissionAudioFinished())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.IsShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          Audio.LoadMissionAudio(AMMU_C);
          while (!(Audio.HasMissionAudioLoaded())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.IsShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          Audio.PlayMissionAudio();
          Text.PrintNow("AMMU_C", 5000, 2);
          // SCM label clear_audio
          $.has_audio_been_activated = 1;
          $.special_ammu_audio = 0;
        }
        else {
          $.special_ammu_audio = 0;
          Audio.ClearMissionAudio();
        }
      }
    }
    else {
      $.special_ammu_audio = 0;
      Audio.ClearMissionAudio();
    }
  }
  return;
  }
}

async function pickup_and_audio() {
  {
  if ($.gun_chunky.HasBeenCollected() && $.been_in_shop_before == 0) {
    $.blip2_jm2.Remove();
    $.been_in_shop_before = 1;
  }
  if (!(Char.IsDead($.chunky))) {
    if (TIMERB > 2500) {
      TIMERB = 0;
      $.chunky.SetSay(95 /* SOUND_CHUNKY_RUN_SHOUT */);
    }
  }
  return;
  }
}

export async function joey2() {
  // MissionBoundary
  // SCM GOSUB mission_start_joey2
  await mission_start_joey2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_joey2_failed
    await mission_joey2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_joey2
  await mission_cleanup_joey2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT chunkys_car chunkys_car2
  // VAR_INT blip1_jm2 blip2_jm2
  // VAR_INT chunky_mate1 chunky_mate2 chunky_mate3
  // VAR_INT mate1health mate2health mate3health chunkyhealth
  // VAR_INT been_in_shop_before noodle_stand gun_chunky
  // VAR_INT flag_gun_message_jm2 has_audio_been_activated
}
