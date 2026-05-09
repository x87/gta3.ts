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
  /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_joey2_failed
  ENDIF
  SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  SWITCH_STREAMING OFF
  PRINT_BIG ( JM2 ) 15000 2 //"Joey Mission 2"
  */
  $.has_audio_been_activated = 0;
  {
  Streaming.LoadSpecialCharacter(1, $.joey);
  Streaming.LoadSpecialModel(hier`cutobj01`, JOEYH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, TROLL);
  Streaming.RequestModel(jogarageext);
  /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */
  //LOAD_SCENE 1190.07 -869.86 13.97
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
  $.cs_player.setAnim($.player);
  $.cs_joey = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_joey.setAnim($.joey);
  $.cs_joeyhead = CutsceneHead.Create($.cs_joey, hier`cutobj01`);
  $.cs_joeyhead.setAnim($.joey);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.setAnim($.player);
  $.cs_troll = CutsceneObject.Create(hier`cutobj03`);
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door1 FALSE
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door2 FALSE
  $.cs_troll.setAnim(TROLL);
  World.ClearArea(1191.9, -870.4, 15.0, 1.0, true /* TRUE */);
  $.player.setCoordinates(1191.9, -870.4, -100.0);
  $.player.setHeading(230.0);
  //SWITCH_WORLD_PROCESSING OFF
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5118) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_A", 10000, 2);
  while ($.cs_time < 10669) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_B", 10000, 2);
  while ($.cs_time < 13048) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_C", 10000, 2);
  while ($.cs_time < 15427) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_D", 10000, 2);
  while ($.cs_time < 17662) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_E", 10000, 2);
  while ($.cs_time < 18887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_F", 10000, 2);
  while ($.cs_time < 22708) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
  Text.PrintNow("JM2_G", 10000, 2);
  while ($.cs_time < 25159) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  // Mission brief
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
  //SWITCH_WORLD_PROCESSING ON
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  World.SwitchRubbish(true /* ON */);
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door1 TRUE
  //SET_VISIBILITY_OF_CLOSEST_OBJECT_OF_TYPE 1192.23 -867.252 14.124 6.0 joey_door2 TRUE
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
  //ADD_BLIP_FOR_COORD 1080.0 -397.0 -100.0 blip2_jm2
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(ped`GANG_TRIAD_A`)) || !(Streaming.HasModelLoaded(car`PERENNIAL`))) {
    await asyncWait(0);
  }
  $.gun_chunky = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 3 /* PICKUP_ONCE */, 45, 1080.5, -396.0, -100.0);
  $.blip2_jm2 = Blip.AddSpriteForPickup($.gun_chunky, 20 /* RADAR_SPRITE_WEAPON */);
  // START OF MISSION
  $.noodle_stand = Object.Create(1406 /* noodlesbox */, 975.0, -720.0, 14.0);
  $.chunkys_car = Car.Create(87 /* CAR_PERENNIAL */, 1007.1, -756.4, 14.5);
  //LOCK_CAR_DOORS chunkys_car CARLOCK_LOCKOUT_PLAYER_ONLY
  $.chunkys_car.setHeading(120.0);
  $.chunkys_car2 = Car.Create(87 /* CAR_PERENNIAL */, 912.3, -686.1, 14.5);
  //LOCK_CAR_DOORS chunkys_car2 CARLOCK_LOCKOUT_PLAYER_ONLY
  $.chunkys_car2.setHeading(90.0);
  $.chunky_mate1 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 976.1, -715.3, 14.2);
  $.chunky_mate1.setHeading(346.0);
  $.chunky_mate1.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  $.chunky_mate1.setObjGuardSpot(976.1, -715.3, 14.2);
  $.chunky_mate1.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky_mate2 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 975.7, -724.7, 14.2);
  $.chunky_mate2.setHeading(222.0);
  $.chunky_mate2.giveWeapon(1 /* WEAPONTYPE_BASEBALLBAT */, 0);
  $.chunky_mate2.setObjGuardSpot(975.7, -724.7, 14.2);
  $.chunky_mate2.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky_mate3 = Char.Create(8 /* PEDTYPE_GANG_TRIAD */, ped`GANG_TRIAD_A`, 984.0, -727.7, 14.2);
  $.chunky_mate3.setHeading(243.0);
  $.chunky_mate3.giveWeapon(2 /* WEAPONTYPE_PISTOL */, 100);
  $.chunky_mate3.setObjGuardSpot(984.0, -727.7, 14.2);
  $.chunky_mate3.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.chunky = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 975.3, -720.4, 14.2);
  $.chunky.setHeading(270.0);
  $.blip1_jm2 = Blip.AddForChar($.chunky);
  $.chunky.setObjWaitOnFoot();
  $.chunky.setPersonality(14 /* PEDSTAT_GEEK_GUY */);
  //SET_CHAR_HEALTH chunky 100
  $.chunky.setRunning(true /* TRUE */);
  $.chunky.addArmor(100);
  $.blip1_jm2.changeDisplay(2 /* BLIP_ONLY */);
  $.chunky.setAnimGroup(18 /* ANIM_PANIC_CHUNKYPED */);
  while (!($.player.locateAnyMeansChar3D($.chunky, 25.0, 26.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if (!($.gun_chunky.hasBeenCollected())) {
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
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
    if (!(Char.IsDead($.chunky))) {
      $.chunky.setOnlyDamagedByPlayer(true /* True */);
      $.chunkyhealth = $.chunky.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate1))) {
      $.chunky_mate1.setOnlyDamagedByPlayer(true /* True */);
      $.mate1health = $.chunky_mate1.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate2))) {
      $.chunky_mate2.setOnlyDamagedByPlayer(true /* True */);
      $.mate2health = $.chunky_mate2.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate3))) {
      $.chunky_mate3.setOnlyDamagedByPlayer(true /* True */);
      $.mate3health = $.chunky_mate3.getHealth();
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
  Game.SetPoliceIgnorePlayer($.player, true /* ON */);
  $.player.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  //SET_FIXED_CAMERA_POSITION 977.756 -719.673 16.206 0.0 0.0 0.0
  World.SetPedDensityMultiplier(0.0);
  Camera.SetFixedPosition(984.819, -704.631, 21.468, 0.0, 0.0, 0.0);
  //IF NOT IS_CHAR_DEAD	chunky
  //	POINT_CAMERA_AT_CHAR chunky FIXED JUMP_CUT
  //ENDIF
  Camera.PointAtPoint(984.279, -705.429, 21.202, 2 /* JUMP_CUT */);
  await asyncWait(3000);
  Camera.SetFixedPosition(978.135, -718.497, 15.642, 0.0, 0.0, 0.0);
  //SET_FIXED_CAMERA_POSITION 984.1 -714.9 17.4 0.0 0.0 0.0
  //IF NOT IS_CHAR_DEAD	chunky
  //	POINT_CAMERA_AT_CHAR chunky FIXED INTERPOLATION
  //ENDIF
  Camera.PointAtPoint(977.293, -719.016, 15.794, 2 /* JUMP_CUT */);
  await asyncWait(3000);
  World.SetPedDensityMultiplier(1.0);
  Game.SetPoliceIgnorePlayer($.player, false /* OFF */);
  $.player.setControl(true /* ON */);
  Hud.SwitchWidescreen(false /* OFF */);
  //REMOVE_BLIP blip3_jm2
  Camera.RestoreJumpcut();
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  while (!($.player.locateAnyMeansChar3D($.chunky, 20.0, 18.0, 4.0, false /* FALSE */))) {
    await asyncWait(0);
    if (!($.gun_chunky.hasBeenCollected())) {
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
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
    if (!(Char.IsDead($.chunky))) {
      $.chunky.setOnlyDamagedByPlayer(true /* True */);
      $.chunkyhealth = $.chunky.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate1))) {
      $.chunky_mate1.setOnlyDamagedByPlayer(true /* True */);
      $.mate1health = $.chunky_mate1.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate2))) {
      $.chunky_mate2.setOnlyDamagedByPlayer(true /* True */);
      $.mate2health = $.chunky_mate2.getHealth();
    }
    if (!(Char.IsDead($.chunky_mate3))) {
      $.chunky_mate3.setOnlyDamagedByPlayer(true /* True */);
      $.mate3health = $.chunky_mate3.getHealth();
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
  $.blip1_jm2.changeDisplay(3 /* BOTH */);
  if (!(Char.IsDead($.chunky_mate1))) {
    $.chunky_mate1.setObjKillPlayerOnFoot($.player);
    $.chunky_mate1.setOnlyDamagedByPlayer(false /* false */);
    $.chunky_mate1.setThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky_mate2))) {
    $.chunky_mate2.setObjKillPlayerOnFoot($.player);
    $.chunky_mate2.setOnlyDamagedByPlayer(false /* false */);
    $.chunky_mate2.setThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky_mate3))) {
    $.chunky_mate3.setObjKillPlayerOnFoot($.player);
    $.chunky_mate3.setOnlyDamagedByPlayer(false /* false */);
    $.chunky_mate3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.chunky))) {
    $.chunky.setHeedThreats(false /* False */);
    $.chunky.setOnlyDamagedByPlayer(false /* false */);
  }
  $.chunky.setObjRunToCoord(975.5, -722.9);
  TIMERB = 0;
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  if ($.player.isInArea2D(974.2, -727.5, 1003.4, -748.8, false /* FALSE */)) {
    // SCM GOTO → run_the_other_way (not lowered; manual jump required)
    throw new Error("unresolved GOTO run_the_other_way"); // fallback: would break linear control flow
  }
  $.chunky.setObjRunToCoord(985.1, -733.9);
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.setObjRunToCoord(1004.2, -736.9);
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.setObjRunToCoord(1006.3, -753.2);
  while (!($.chunky.isObjectivePassed())) {
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
    if (!($.chunkys_car.isInArea2D(1004.0, -738.0, 1012.0, -763.0, false /* FALSE */)) || !($.chunkys_car.isHealthGreater(300))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
  }
  $.chunky.setObjEnterCarAsDriver($.chunkys_car);
  while (!($.chunky.isInCar($.chunkys_car))) {
    await asyncWait(0);
    if (Car.IsDead($.chunkys_car)) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    else {
      if (!($.chunkys_car.isInArea2D(1004.0, -738.0, 1012.0, -763.0, false /* FALSE */)) || !($.chunkys_car.isHealthGreater(300))) {
        // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
      }
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
  }
  //LOCK_CAR_DOORS chunkys_car CARLOCK_UNLOCKED
  //DISPLAY_ONSCREEN_COUNTER test_car_health_counter //TEST STUFF!!!!!!!!!!!!!
  if (!(Car.IsDead($.chunkys_car))) {
    $.chunkys_car.wanderRandomly();
    $.chunkys_car.setDrivingStyle(2);
    //LOCK_CAR_DOORS chunkys_car CARLOCK_UNLOCKED
    $.chunkys_car.setCruiseSpeed(20.0);
  }
  // Mission brief
  while ($.chunkys_car.isHealthGreater(300)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.hasBeenCollected())) {
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
    // Mission brief
    if (!($.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false /* FALSE */))) {
      // Mission brief
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (!($.chunky.isInCar($.chunkys_car))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.chunkys_car.isUpsidedown() && $.chunkys_car.isStopped()) {
      $.chunky.setObjLeaveCar($.chunkys_car);
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  $.chunky.setObjLeaveCar($.chunkys_car);
  // Mission brief
  while ($.chunky.isInCar($.chunkys_car)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.hasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // Mission brief
    if (!($.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false /* FALSE */))) {
      // Mission brief
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.chunkys_car)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
  }
  // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
  throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
}

async function run_the_other_way() {
  $.chunky.setObjRunToCoord(979.1, -720.8);
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.setObjRunToCoord(976.7, -687.0);
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.setObjRunToCoord(943.5, -679.2);
  while (!($.chunky.isObjectivePassed())) {
    await asyncWait(0);
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // SCM GOSUB pickup_and_audio
    await pickup_and_audio();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.chunky.setObjRunToCoord(920.3, -681.5);
  while (!($.chunky.isObjectivePassed())) {
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
    if (!($.chunkys_car2.isInArea2D(922.7, -673.9, 906.6, -698.0, false /* FALSE */)) || !($.chunkys_car2.isHealthGreater(300))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
  }
  $.chunky.setObjEnterCarAsDriver($.chunkys_car2);
  while (!($.chunky.isInCar($.chunkys_car2))) {
    await asyncWait(0);
    if (Car.IsDead($.chunkys_car2)) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    else {
      if (!($.chunkys_car2.isInArea2D(922.7, -673.9, 906.6, -698.0, false /* FALSE */)) || !($.chunkys_car2.isHealthGreater(300))) {
        // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
        throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
      }
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
  }
  //LOCK_CAR_DOORS chunkys_car2 CARLOCK_UNLOCKED
  //DISPLAY_ONSCREEN_COUNTER test_car_health_counter //TEST STUFF!!!!!!!!!!!!!
  if (!(Car.IsDead($.chunkys_car2))) {
    $.chunkys_car2.wanderRandomly();
    $.chunkys_car2.setDrivingStyle(2);
    //LOCK_CAR_DOORS chunkys_car2 CARLOCK_UNLOCKED
    $.chunkys_car2.setCruiseSpeed(20.0);
  }
  // Mission brief
  while ($.chunkys_car2.isHealthGreater(300)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.hasBeenCollected())) {
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
    // Mission brief
    if (!($.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false /* FALSE */))) {
      // Mission brief
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (!($.chunky.isInCar($.chunkys_car2))) {
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.chunkys_car2.isUpsidedown() && $.chunkys_car2.isStopped()) {
      $.chunky.setObjLeaveCar($.chunkys_car2);
      // SCM GOTO → fuckin_run_for_it (not lowered; manual jump required)
      throw new Error("unresolved GOTO fuckin_run_for_it"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
  }
  if (Char.IsDead($.chunky)) {
    // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
  }
  $.chunky.setObjLeaveCar($.chunkys_car2);
  // Mission brief
  while ($.chunky.isInCar($.chunkys_car2)) {
    await asyncWait(0);
    // SCM GOSUB controller_modes
    await controller_modes();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (!($.gun_chunky.hasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.chunky)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    // Mission brief
    if (!($.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false /* FALSE */))) {
      // Mission brief
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.chunkys_car2)) {
      // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
    }
    if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
      $.blip2_jm2.remove();
      $.been_in_shop_before = 1;
    }
  }
}

async function fuckin_run_for_it() {
  //CHANGE_BLIP_DISPLAY blip1_jm2 BOTH
  if (!(Char.IsDead($.chunky))) {
    $.chunky.setObjFleePlayerOnFootAlways($.player);
  }
  // Mission brief
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
    if (!($.gun_chunky.hasBeenCollected())) {
      // SCM GOSUB Ammu_bloke_audio
      await Ammu_bloke_audio();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // Mission brief
    if (!($.player.locateAnyMeansChar2D($.chunky, 160.0, 160.0, false /* FALSE */))) {
      // Mission brief
      Text.PrintNow("AWAY", 5000, 2);
      // SCM GOTO → mission_joey2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_joey2_failed"); // fallback: would break linear control flow
    }
  }
  }
  // Mission joey2 failed
  // SCM GOTO → mission_joey2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_joey2_passed"); // fallback: would break linear control flow
}

async function mission_joey2_failed() {
  //"Mission Failed"
  Text.PrintBig("M_FAIL", 5000, 1);
  // mission joey2 passed
  return;
}

async function mission_joey2_passed() {
  $.flag_joey_mission2_passed = 1;
  Audio.PlayMissionPassedTune(1);
  //"Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  $.player.clearWantedLevel();
  $.player.addScore(10000);
  Stat.RegisterMissionPassed(JM2);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT joey_mission3_loop
  if ($.out_of_stock_pistol == 0) {
    // START_NEW_SCRIPT pistol_message
  }
  // mission cleanup
  return;
}

async function mission_cleanup_joey2() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.special_ammu_audio = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_TRIAD_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`PERENNIAL`);
  Streaming.UnloadSpecialCharacter(2);
  $.blip1_jm2.remove();
  $.blip2_jm2.remove();
  $.gun_chunky.remove();
  if (!(Char.IsDead($.chunky))) {
    $.chunky.removeElegantly();
  }
  Mission.Finish();
  return;
}

async function controller_modes() {
  {
  // Control Mode 0
  //"Use R2 and L2 to cycle through your weapons."
  //"Hold R1 to auto-target, press circle to fire!"
  //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
  //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
  //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
  // Control Mode 1
  // Control Mode 2
  // Control Mode 3
  //	flag_player_had_gun_message = 1
  if ($.flag_player_had_gun_message == 0) {
    // Control Mode 0
    //"Use R2 and L2 to cycle through your weapons."
    //"Hold R1 to auto-target, press circle to fire!"
    //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
    //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
    //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
    // Control Mode 1
    // Control Mode 2
    // Control Mode 3
    //	flag_player_had_gun_message = 1
    if ($.player.isInAreaOnFoot3D(1075.2, -384.8, 14.0, 1086.2, -403.3, 17.0, false /* FALSE */)) {
      // Control Mode 0
      $.controlmode = Pad.GetControllerMode();
      //"Use R2 and L2 to cycle through your weapons."
      //"Hold R1 to auto-target, press circle to fire!"
      //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
      //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
      //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
      // Control Mode 1
      if ($.controlmode == 0) {
        //"Use R2 and L2 to cycle through your weapons."
        if ($.flag_gun_message_jm2 == 0) {
          //"Use R2 and L2 to cycle through your weapons."
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        //"Hold R1 to auto-target, press circle to fire!"
        if ($.flag_gun_message_jm2 == 1) {
          //"Hold R1 to auto-target, press circle to fire!"
          if (timerb > 10000) {
            //"Hold R1 to auto-target, press circle to fire!"
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
        if ($.flag_gun_message_jm2 == 2) {
          //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
        if ($.flag_gun_message_jm2 == 3) {
          //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
        if ($.flag_gun_message_jm2 == 4) {
          //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
          if (timerb > 10000) {
            //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      //"Use R2 and L2 to cycle through your weapons."
      //"Hold R1 to auto-target, press circle to fire!"
      //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
      //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
      //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
      // Control Mode 2
      if ($.controlmode == 1) {
        //"Use R2 and L2 to cycle through your weapons."
        if ($.flag_gun_message_jm2 == 0) {
          //"Use R2 and L2 to cycle through your weapons."
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        //"Hold R1 to auto-target, press circle to fire!"
        if ($.flag_gun_message_jm2 == 1) {
          //"Hold R1 to auto-target, press circle to fire!"
          if (timerb > 10000) {
            //"Hold R1 to auto-target, press circle to fire!"
            Text.PrintHelp("GUN_2A");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
        if ($.flag_gun_message_jm2 == 2) {
          //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
        if ($.flag_gun_message_jm2 == 3) {
          //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
        if ($.flag_gun_message_jm2 == 4) {
          //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
          if (timerb > 10000) {
            //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      //"Use R2 and L2 to cycle through your weapons."
      //"Hold R1 to auto-target, press circle to fire!"
      //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
      //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
      //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
      // Control Mode 3
      if ($.controlmode == 2) {
        //"Use R2 and L2 to cycle through your weapons."
        if ($.flag_gun_message_jm2 == 0) {
          //"Use R2 and L2 to cycle through your weapons."
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        //"Hold R1 to auto-target, press circle to fire!"
        if ($.flag_gun_message_jm2 == 1) {
          //"Hold R1 to auto-target, press circle to fire!"
          if (timerb > 10000) {
            //"Hold R1 to auto-target, press circle to fire!"
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
        if ($.flag_gun_message_jm2 == 2) {
          //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
            Text.PrintHelp("GUN_3A");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
        if ($.flag_gun_message_jm2 == 3) {
          //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
            Text.PrintHelp("GUN_4A");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
        if ($.flag_gun_message_jm2 == 4) {
          //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
          if (timerb > 10000) {
            //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
            Text.PrintHelp("GUN_5");
            $.flag_gun_message_jm2 = 5;
            $.flag_player_had_gun_message = 1;
          }
        }
      }
      //"Use R2 and L2 to cycle through your weapons."
      //"Hold R1 to auto-target, press circle to fire!"
      //	flag_player_had_gun_message = 1
      //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
      //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
      //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
      if ($.controlmode == 3) {
        //"Use R2 and L2 to cycle through your weapons."
        if ($.flag_gun_message_jm2 == 0) {
          //"Use R2 and L2 to cycle through your weapons."
          Text.PrintHelp("GUN_1A");
          timerb = 0;
          $.flag_gun_message_jm2 = 1;
        }
        //"Hold R1 to auto-target, press circle to fire!"
        //	flag_player_had_gun_message = 1
        if ($.flag_gun_message_jm2 == 1) {
          //"Hold R1 to auto-target, press circle to fire!"
          //	flag_player_had_gun_message = 1
          if (timerb > 10000) {
            //"Hold R1 to auto-target, press circle to fire!"
            Text.PrintHelp("GUN_2D");
            timerb = 0;
            //	flag_player_had_gun_message = 1
            $.flag_gun_message_jm2 = 2;
          }
        }
        //"Hold R1 to auto-target, press circle to fire!"
        if ($.flag_gun_message_jm2 == 1) {
          //"Hold R1 to auto-target, press circle to fire!"
          if (timerb > 10000) {
            //"Hold R1 to auto-target, press circle to fire!"
            Text.PrintHelp("GUN_2C");
            timerb = 0;
            $.flag_gun_message_jm2 = 2;
          }
        }
        //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
        if ($.flag_gun_message_jm2 == 2) {
          //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button,~w~ press the ~h~L2 button~w~ or the ~h~R2 button to switch target."
            Text.PrintHelp("GUN_3B");
            timerb = 0;
            $.flag_gun_message_jm2 = 3;
          }
        }
        //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
        if ($.flag_gun_message_jm2 == 3) {
          //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
          if (timerb > 10000) {
            //"While holding the ~h~R1 button~w~ you can walk or run while remaining locked onto a target."
            Text.PrintHelp("GUN_4B");
            timerb = 0;
            $.flag_gun_message_jm2 = 4;
          }
        }
        //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
        if ($.flag_gun_message_jm2 == 4) {
          //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
          if (timerb > 10000) {
            //"You can practice targeting and shooting on these paper targets, when you are finished resume the mission."
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
  //AMMU_B
  // Mission brief
  //AMMU_C
  //CLEAR_MISSION_AUDIO
  if ($.has_audio_been_activated == 0) {
    //AMMU_B
    // Mission brief
    //AMMU_C
    //CLEAR_MISSION_AUDIO
    if ($.player.isInArea3D(1066.6, -403.5, 14.0, 1072.8, -394.0, 18.0, false /* FALSE */)) {
      $.special_ammu_audio = 1;
      //AMMU_B
      Audio.LoadMissionAudio(AMMU_B);
      // Mission brief
      //AMMU_C
      //CLEAR_MISSION_AUDIO
      if ($.camera_ammu1 == 1) {
        // Mission brief
        //AMMU_C
        //CLEAR_MISSION_AUDIO
        if (!(Char.IsDead($.ammu_shop_bloke1))) {
          while (!(Audio.HasMissionAudioLoaded())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          Audio.PlayMissionAudio();
          // Mission brief
          Text.PrintNow("AMMU_B", 5000, 2);
          while (!(Audio.HasMissionAudioFinished())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          //AMMU_C
          Audio.LoadMissionAudio(AMMU_C);
          while (!(Audio.HasMissionAudioLoaded())) {
            await asyncWait(0);
            if (Char.IsDead($.ammu_shop_bloke1) || $.player.isShooting()) {
              // SCM GOTO → clear_audio (not lowered; manual jump required)
              throw new Error("unresolved GOTO clear_audio"); // fallback: would break linear control flow
            }
          }
          Audio.PlayMissionAudio();
          // Mission brief
          Text.PrintNow("AMMU_C", 5000, 2);
          // SCM label clear_audio
          //CLEAR_MISSION_AUDIO
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
  if ($.gun_chunky.hasBeenCollected() && $.been_in_shop_before == 0) {
    $.blip2_jm2.remove();
    $.been_in_shop_before = 1;
  }
  if (!(Char.IsDead($.chunky))) {
    if (TIMERB > 2500) {
      TIMERB = 0;
      $.chunky.setSay(95 /* SOUND_CHUNKY_RUN_SHOUT */);
    }
  }
  return;
  }
}

export async function joey2() {
  // *******************************************************************************************
  // *************************************Joey mission 2****************************************
  // ************************************Kill Chunky Dave***************************************
  // Mission start stuff
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
  // Variables for mission
  // MissionBoundary
  // mission specific ped
  // VAR_INT chunkys_car chunkys_car2
  //blip3_jm2
  // VAR_INT blip1_jm2 blip2_jm2
  // VAR_INT chunky_mate1 chunky_mate2 chunky_mate3
  // VAR_INT mate1health mate2health mate3health chunkyhealth
  // VAR_INT been_in_shop_before noodle_stand gun_chunky
  //VAR_INT test_car_health_counter
  //VAR_INT flag_player_got_joey2_message
  // ***************************************Mission Start*************************************
  // VAR_INT flag_gun_message_jm2 has_audio_been_activated
}
