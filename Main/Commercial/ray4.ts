// Generated from Main/Commercial/ray4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_ray4() {


  $.flag_player_on_mission = 1;
  $.flag_player_on_ray_mission = 1;
  $.rays_cutscene_flag = 1;


  Stat.RegisterMissionGiven();


  await asyncWait(0);


  // ScriptName


  $.mine_current_timer = 0;
  $.last_mine_dropped_timer = 0;
  $.temporary_time_mine = 0;
  $.random_int = 0;
  $.boat_speed_flag = 0;
  $.boat_node_counter = 2;
  $.partners_car_is_dead = 0;
  $.shoot_at_player_flag = 0;
  $.gotaway_timer_reset_flag = 0;
  $.partner_on_foot_counter = 0;
  $.partner_on_foot_flag = 0;
  $.partner_on_foot_counter = 0;
  $.goto_mission_ray4_failed = 0;
  $.timer_reset_flag_r4 = 0;
  $.timerc_r4 = 0;
  $.timerc_current_r4 = 0;
  $.timerc_started_r4 = 0;
  $.timerc_reset_flag_r4 = 0;
  $.exit_boat_flag = 0;


  $.partner_stuck_x = 0.0;
  $.partner_stuck_y = 0.0;
  $.partner_stuck_z = 0.0;


  $.node_0_x = 1405.4507;
  $.node_0_y = -598.6941;


  $.node_1_x = 1710.1085;
  $.node_1_y = -371.7377;


  $.node_2_x = 1713.1384;
  $.node_2_y = -498.4113;


  $.node_3_x = 1632.3;
  $.node_3_y = -601.5;


  $.node_4_x = 1619.8263;
  $.node_4_y = -764.9598;


  $.node_5_x = 1653.3024;
  $.node_5_y = -822.3922;


  $.node_6_x = 1681.7670;
  $.node_6_y = -775.2837;


  $.node_7_x = 1682.8789;
  $.node_7_y = -590.4975;


  $.node_8_x = 1577.6987;
  $.node_8_y = -498.9852;


  $.node_9_x = 1576.3445;
  $.node_9_y = -361.7413;


  $.node_10_x = 1568.4171;
  $.node_10_y = -249.0114;


  $.node_11_x = 1628.1332;
  $.node_11_y = -195.5839;


  {

  // ****************************************START OF CUTSCENE********************************

  /*
  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_ray4_failed
  ENDIF

  SWITCH_STREAMING OFF

  PRINT_BIG RM4 15000 2 //"Gone Fishing"
  */


  Streaming.LoadSpecialCharacter(1, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);
  Streaming.LoadSpecialModel(hier`cutobj03`, BOGDOOR);
  Streaming.RequestModel(toilet);

  /*
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(toilet))) {
    await asyncWait(0);
  }


  World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */);


  $.player.setCoordinates(39.0, -723.5, 22.0);


  $.player.setHeading(90.0);


  World.SetVisibilityOfClosestObjectOfType(47.322, -732.055, 22.846, 4.0, 2300 /* toilet_cubicle_dr2 */, false /* FALSE */);


  Cutscene.Load(r4_gf);


  Cutscene.SetOffset(39.424, -726.677, 21.692);


  $.cs_player = CutsceneObject.Create(ped`PLAYER`);


  $.cs_player.setAnim($.player);


  $.cs_ray = CutsceneObject.Create(ped`SPECIAL1`);


  $.cs_ray.setAnim($.ray);


  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.setAnim($.player);


  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.setAnim($.ray);


  $.cs_ludoor = CutsceneObject.Create(hier`cutobj03`);
  $.cs_ludoor.setAnim(BOGDOOR);


  World.SwitchRubbish(false /* OFF */);
  Camera.DoFade(1500, 1 /* FADE_IN */);


  Streaming.Switch(true /* ON */);


  Camera.SetNearClip(0.2);


  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 4285) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM4_A, 4000, 1); //"I think my partner's a rat."


  while ($.cs_time < 6389) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM4_B, 4000, 1); //"We gotta shut him up permanently."


  while ($.cs_time < 8524) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM4_C, 4000, 1); //"He goes fishing out of his boat near the lighthouse on Portland Rock most nights."


  while ($.cs_time < 13026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM4_D, 4000, 1); //"Steal a police boat and make sure his back stabbing plans are sunk!"


  while ($.cs_time < 17497) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow(RM4_E, 4000, 1); //"I want him sleeping with the fishes not eating them."


  while ($.cs_time < 21000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }


  Streaming.Switch(true /* ON */);
  World.SwitchRubbish(true /* ON */);


  Text.ClearPrints();


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  Cutscene.Clear();


  Camera.DoFade(0, 0 /* FADE_OUT */);


  Camera.SetNearClip(0.9);


  Weather.ForceNow(0 /* WEATHER_SUNNY */);


  Camera.SetBehindPlayer();


  await asyncWait(500);


  $.rays_cutscene_flag = 0;


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SetVisibilityOfClosestObjectOfType(47.322, -732.055, 22.846, 4.0, 2300 /* toilet_cubicle_dr2 */, true /* TRUE */);


  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(toilet);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);

  // ******************************************END OF CUTSCENE********************************


  Streaming.RequestModel(car`PREDATOR`);
  Streaming.RequestModel(car`GHOST`);
  Streaming.RequestModel(car`SENTINEL`);
  Streaming.RequestModel(car`RCBANDIT`);


  while (!(Streaming.HasModelLoaded(car`PREDATOR`)) || !(Streaming.HasModelLoaded(car`GHOST`)) || !(Streaming.HasModelLoaded(car`SENTINEL`)) || !(Streaming.HasModelLoaded(car`RCBANDIT`))) {
    await asyncWait(0);
  }


  $.players_boat_with_guns = Car.Create(113 /* BOAT_PREDATOR */, 837.0, -1115.6, -0.2);


  $.players_boat_with_guns.setHeading(140.0);
  $.players_boat_with_guns_blip = Blip.AddForCar($.players_boat_with_guns);


  Text.PrintNow(RM4_1, 5000, 1); //"Go steal a boat."

  /////////////////////////
  /////////////////////////
  //SET_PLAYER_COORDINATES player 833.88 -1114.9 6.0
  //WAIT 1500
  //
  //IF NOT IS_CAR_DEAD players_boat_with_guns
  //ENDIF
  //
  //WARP_PLAYER_INTO_CAR player	players_boat_with_guns
  /////////////////////////
  /////////////////////////


  while (!($.player.isInModel(113 /* BOAT_PREDATOR */))) {
    await asyncWait(0);
  }


  $.players_boat_with_guns_blip.remove();

  //CREATE_CAR BOAT_GHOST 1695.0 -381.5 -1.3 partners_boat

  $.partners_boat = Car.Create(143 /* BOAT_GHOST */, 1695.0, -381.5, -1.4);
  $.partners_boat.setStrong(true /* TRUE */);


  $.barrel2_a = Object.Create(1336 /* barrel2 */, 837.0, -1115.6, 10.0);
  $.barrel2_b = Object.Create(1336 /* barrel2 */, 837.0, -1115.6, 20.0);
  //CREATE_OBJECT faketarget 837.0 -1115.6 30.0 sniper_object


  $.barrel2_a.setCollision(false /* OFF */);
  $.barrel2_b.setCollision(false /* OFF */);
  //SET_OBJECT_COLLISION sniper_object OFF

  $.barrel2_a.setDynamic(false /* FALSE */);
  $.barrel2_b.setDynamic(false /* FALSE */);
  //SET_OBJECT_DYNAMIC sniper_object FALSE


  $.barrel2_a.placeRelativeToCar($.partners_boat, -0.3, -2.5, 0.2);
  $.barrel2_b.placeRelativeToCar($.partners_boat, 0.3, -2.5, 0.2);


  Text.PrintNow(RM4_2, 5000, 1); //"Get to the lighthouse and 'rub out' Ray's partner!"


  $.partners_boat_health = $.partners_boat.getHealth();


  $.partners_blip = Blip.AddForCarOld($.partners_boat, 1 /* GREEN */, 3 /* BOTH */);
  $.partners_blip.changeScale(3);

  /////////////////////////
  /////////////////////////
  //SET_PLAYER_COORDINATES PLAYER 1694.0 -589.0 0.0
  /////////////////////////
  /////////////////////////


  while (!($.player.locateAnyMeans2D(1700.0, -383.0, 180.0, 180.0, false)) && !($.partners_boat_health < 980)) {
    await asyncWait(0);
    if (Car.IsDead($.partners_boat)) {
      // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
    }
    $.partners_boat_health = $.partners_boat.getHealth();
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly


  }


  $.distance_resultB = $.partners_boat.getHeading();
  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
  $.partners_boat_forward_x = $.partners_boat.getForwardX();
  $.partners_boat_forward_y = $.partners_boat.getForwardY();
  $.temp_dot_product_x = 0.0 * $.partners_boat_forward_y;
  $.temp_dot_product_y = 0.0 * $.partners_boat_forward_x;


  $.temp_x = 1.8 * $.partners_boat_forward_x;
  $.temp_y = 1.8 * $.partners_boat_forward_y;


  $.vector_x = $.temp_dot_product_x - $.temp_x;
  $.vector_y = $.temp_dot_product_y - $.temp_y;


  $.vector_x = $.vector_x + $.partner_x;
  $.vector_y = $.vector_y + $.partner_y;


  $.partner_z += 0.4;


  $.distance_resultB -= 90.0;


  if ($.distance_resultB < 0.0) {
    $.distance_resultB += 360.0;
  }


  $.partners_blip.remove();
  $.rays_partner = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`MALE1`, $.vector_x, $.vector_y, $.partner_z);
  $.rays_partner.setHeading($.distance_resultB);
  $.rays_partner.setStayInSamePlace(true /* TRUE */);
  $.rays_partner.clearThreatSearch();
  $.rays_partner.addArmor(100);
  $.rays_partner.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 1700);


  TIMERA = 0;
  while (TIMERA < 1200) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  Hud.SwitchWidescreen(true /* ON */);
  $.player.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  if ($.player.isInAnyCar()) {
    if ($.player.isInModel(113 /* BOAT_PREDATOR */) || $.player.isInModel(136 /* BOAT_REEFER */) || $.player.isInModel(143 /* BOAT_GHOST */)) {
      $.players_boat_with_guns.markAsNoLongerNeeded();
      $.players_boat_with_guns = $.player.storeCarIsIn();
      $.players_boat_with_guns.anchor(true /* TRUE */);
    }
    $.player.applyBrakesToCar(true /* ON */);
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
  $.partners_boat_forward_x = $.partners_boat.getForwardX();
  $.partners_boat_forward_y = $.partners_boat.getForwardY();
  $.temp_dot_product_x = -5.0 * $.partners_boat_forward_y;
  $.temp_dot_product_y = 5.0 * $.partners_boat_forward_x;


  $.temp_x = 3.8 * $.partners_boat_forward_x;
  $.temp_y = 3.8 * $.partners_boat_forward_y;


  $.vector_x = $.temp_dot_product_x - $.temp_x;
  $.vector_y = $.temp_dot_product_y - $.temp_y;


  $.vector_x = $.vector_x + $.partner_x;
  $.vector_y = $.vector_y + $.partner_y;


  $.partner_z += 2.0;


  Camera.SetFixedPosition($.vector_x, $.vector_y, $.partner_z, 0.0, 0.0, 0.0);
  Camera.PointAtChar($.rays_partner, 15 /* FIXED */, 2 /* JUMP_CUT */);


  TIMERA = 0;
  while (TIMERA < 1500) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }
  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  $.rays_partner.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 1600);


  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
  $.partners_boat_forward_x = $.partners_boat.getForwardX();
  $.partners_boat_forward_y = $.partners_boat.getForwardY();
  $.temp_dot_product_x = 25.0 * $.partners_boat_forward_y;
  $.temp_dot_product_y = -25.0 * $.partners_boat_forward_x;


  $.temp_x = 1.8 * $.partners_boat_forward_x;
  $.temp_y = 1.8 * $.partners_boat_forward_y;


  $.vector_x = $.temp_dot_product_x - $.temp_x;
  $.vector_y = $.temp_dot_product_y - $.temp_y;


  $.vector_x = $.vector_x + $.partner_x;
  $.vector_y = $.vector_y + $.partner_y;


  $.partner_z = -2.0;


  TIMERA = 0;
  while (TIMERA < 1600) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  $.fish_target = Car.Create(124 /* CAR_RCBANDIT */, $.vector_x, $.vector_y, $.partner_z);
  $.rays_partner.giveWeapon(11 /* WEAPONTYPE_GRENADE */, 20);
  $.rays_partner.setObjNoObj();
  $.rays_partner.setWaitState(0 /* WAITSTATE_FALSE */, 100);
  $.rays_partner.setObjDestroyCar($.fish_target);
  [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.fish_target.getCoordinates();


  $.partner_x = $.fish_target_x - 2.0;
  $.partner_y = $.fish_target_y - 2.0;
  $.partner_z = $.fish_target_z - 2.0;
  $.temp_x += 2.0;
  $.vector_x += 2.0;
  $.vector_y += 1.0;


  while (!(World.IsProjectileInArea($.partner_x, $.partner_y, $.partner_z, $.temp_x, $.vector_x, $.vector_y))) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.rays_partner)) {
      // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.partners_boat)) {
      // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.fish_target)) {
    }
    $.fish_target.setCoordinates($.fish_target_x, $.fish_target_y, $.fish_target_z);


  }


  $.rays_partner.setObjNoObj();
  World.DestroyProjectilesInArea($.partner_x, $.partner_y, $.partner_z, $.temp_x, $.vector_x, $.vector_y);


  [$.partner_x, $.partner_y, $.partner_z] = $.fish_target.getCoordinates();
  $.partner_z += 1.0;
  $.fish_target_x = $.partner_x;
  $.fish_target_y = $.partner_y;
  $.fish_target_z = $.partner_z;
  Camera.PointAtPoint($.fish_target_x, $.fish_target_y, $.fish_target_z, 1 /* INTERPOLATION */);
  $.fish_target.delete();


  TIMERA = 0;
  while (TIMERA < 300) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.partner_z = 0.0;
  Fx.AddExplosion($.partner_x, $.partner_y, $.partner_z, 0 /* EXPLOSION_GRENADE */);
  $.partner_z = 0.3;
  //ADD_PARTICLE_EFFECT POBJECT_CAR_WATER_SPLASH partner_x partner_y partner_z TRUE


  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
  $.partners_boat_forward_x = $.partners_boat.getForwardX();
  $.partners_boat_forward_y = $.partners_boat.getForwardY();
  $.temp_dot_product_x = 30.0 * $.partners_boat_forward_y;
  $.temp_dot_product_y = -30.0 * $.partners_boat_forward_x;


  $.temp_x = 2.2 * $.partners_boat_forward_x;
  $.temp_y = 2.2 * $.partners_boat_forward_y;


  $.vector_x = $.temp_dot_product_x - $.temp_x;
  $.vector_y = $.temp_dot_product_y - $.temp_y;


  $.vector_x = $.vector_x + $.partner_x;
  $.vector_y = $.vector_y + $.partner_y;


  $.partner_z += 1.5;


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.fish_target_z -= 0.2;
  Camera.SetFixedPosition($.vector_x, $.vector_y, $.partner_z, 0.0, 0.0, 0.0);
  Camera.PointAtPoint($.fish_target_x, $.fish_target_y, $.fish_target_z, 2 /* JUMP_CUT */);


  TIMERA = 0;
  while (TIMERA < 1500) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.fish_target_z = -0.5;
  $.partner_x = $.fish_target_x;
  $.partner_y = $.fish_target_y;
  $.partner_z = $.fish_target_z;


  $.fish_target_x = $.partner_x - 0.2;
  $.fish_target_y = $.partner_y - 0.2;
  $.fish_target_z = $.partner_z;


  $.fishy_1 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_1.setDynamic(true /* TRUE */);
  $.fishy_1.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_1.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 600) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.fish_target_x += 0.9;
  $.fish_target_y += 0.3;


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_2 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_2.setDynamic(true /* TRUE */);
  $.fishy_2.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_2.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 200) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_3 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_3.setDynamic(true /* TRUE */);
  $.fishy_3.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_3.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 400) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_4 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_4.setDynamic(true /* TRUE */);
  $.fishy_4.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_4.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 100) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_5 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_5.setDynamic(true /* TRUE */);
  $.fishy_5.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_5.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 300) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_6 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_6.setDynamic(true /* TRUE */);
  $.fishy_6.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_6.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 200) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_7 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_7.setDynamic(true /* TRUE */);
  $.fishy_7.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_7.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 120) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_8 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_8.setDynamic(true /* TRUE */);
  $.fishy_8.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_8.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 70) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_9 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_9.setDynamic(true /* TRUE */);
  $.fishy_9.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_9.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 35) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  $.temp_x = Math.RandomFloatInRange(-4.0, 2.0);
  $.fish_target_x = $.partner_x + $.temp_x;
  $.temp_x = Math.RandomFloatInRange(-3.0, 3.0);
  $.fish_target_y = $.partner_y + $.temp_x;


  $.fishy_10 = Object.Create(1413 /* fish01 */, $.fish_target_x, $.fish_target_y, $.fish_target_z);
  $.fishy_10.setDynamic(true /* TRUE */);
  $.fishy_10.addToVelocity(0.0, 0.0, 1.0);
  $.temp_x = Math.RandomFloatInRange(0.0, 359.9);
  $.fishy_10.setHeading($.temp_x);


  TIMERA = 0;
  while (TIMERA < 2500) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  Camera.PointAtChar($.rays_partner, 15 /* FIXED */, 1 /* INTERPOLATION */);


  TIMERA = 0;
  while (TIMERA < 200) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
  $.partners_boat_forward_x = $.partners_boat.getForwardX();
  $.partners_boat_forward_y = $.partners_boat.getForwardY();
  $.temp_dot_product_x = 10.0 * $.partners_boat_forward_y;
  $.temp_dot_product_y = -10.0 * $.partners_boat_forward_x;


  $.temp_x = 2.2 * $.partners_boat_forward_x;
  $.temp_y = 2.2 * $.partners_boat_forward_y;


  $.vector_x = $.temp_dot_product_x - $.temp_x;
  $.vector_y = $.temp_dot_product_y - $.temp_y;


  $.vector_x = $.vector_x + $.partner_x;
  $.vector_y = $.vector_y + $.partner_y;


  $.partner_z += 2.0;


  $.fish_target_z -= 0.2;
  Camera.SetFixedPosition($.vector_x, $.vector_y, $.partner_z, 0.0, 0.0, 0.0);


  TIMERA = 0;
  while (TIMERA < 800) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  $.rays_partner.lookAtPlayerAlways($.player);


  TIMERA = 0;
  while (TIMERA < 600) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  $.rays_partner.stopLooking();


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();


  $.rays_partner.setObjGotoCoordOnFoot($.partner_x, $.partner_y);


  TIMERA = 0;
  while (TIMERA < 1000) {
    await asyncWait(0);
    // SCM GOSUB object_placement
    await object_placement();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  if (Char.IsDead($.rays_partner)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  if (Car.IsDead($.partners_boat)) {
    // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
  }


  $.rays_partner.delete();
  $.rays_partner = Char.CreateInsideCar($.partners_boat, 4 /* PEDTYPE_CIVMALE */, ped`MALE1`);
  $.rays_partner.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.rays_partner.setPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.rays_partner.setHealth(300);
  $.partners_blip = Blip.AddForChar($.rays_partner);


  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, false /* FALSE */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  $.player.applyBrakesToCar(false /* OFF */);
  if (Car.IsStillAlive($.players_boat_with_guns)) {
    $.players_boat_with_guns.anchor(false /* FALSE */);
  }
  Camera.Restore();


  $.partners_car = Car.Create(88 /* CAR_SENTINEL */, 1329.8947, -641.7307, 11.1765);
  $.partners_car.setHeading(180.8517);


  $.partners_boat.goto($.node_2_x, $.node_2_y, 0.0);
  $.boat_node_x = $.node_2_x;
  $.boat_node_y = $.node_2_y;


  $.mine_current_timer = Clock.GetGameTimer();
  $.last_mine_dropped_timer = Clock.GetGameTimer();


  $.partners_boat_health = $.partners_boat.getHealth();
  $.partners_boat_health = $.partners_boat_health - 250;
  $.partners_boat_health = $.partners_boat_health * 100;
  $.partners_boat_health = $.partners_boat_health / 750;
  $.partners_boat_health2 = $.partners_boat_health;
  $.partners_boat_health = 100 - $.partners_boat_health2;
  Hud.DisplayCounterWithString($.partners_boat_health, 1 /* COUNTER_DISPLAY_BAR */, DAM);


}

async function boat_looop() {
  // SCM GOTO → boat_looop lowered to endless loop
  while (true) {


    await asyncWait(0);


    if (Char.IsDead($.rays_partner)) {
      if (Object.DoesExist($.barrel2_a)) {
        [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_a.getCoordinates();
        Fx.AddExplosion($.fish_target_x, $.fish_target_y, $.fish_target_z, 0 /* EXPLOSION_GRENADE */);
        $.barrel2_a.delete();
      }
      if (Object.DoesExist($.barrel2_b)) {
        [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_b.getCoordinates();
        Fx.AddExplosion($.fish_target_x, $.fish_target_y, $.fish_target_z, 0 /* EXPLOSION_GRENADE */);
        $.barrel2_b.delete();
      }
      // SCM GOTO → mission_ray4_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_ray4_passed"); // fallback: would break linear control flow
    }


    if ($.partner_on_foot_flag == -1) {
      if (!(Car.IsDead($.partners_boat))) {
        if (Object.DoesExist($.barrel2_a) && Object.DoesExist($.barrel2_b)) {
          // SCM GOSUB object_placement
          await object_placement();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
      }
      if (TIMERA > 500) {
        TIMERA = 0;
        if ($.player.isInAnyCar()) {
          $.players_boat_with_guns.markAsNoLongerNeeded();
          $.players_boat_with_guns = $.player.storeCarIsIn();
          $.rays_partner.setAccuracy(100);
          $.rays_partner.setObjDestroyCar($.players_boat_with_guns);
        }
        else {
          $.rays_partner.setObjKillPlayerOnFoot($.player);
        }
      }
    }


    if ($.partner_on_foot_flag == 0) {
      if (!(Car.IsDead($.partners_boat))) {
        if (Object.DoesExist($.barrel2_a) && Object.DoesExist($.barrel2_b)) {
          // SCM GOSUB object_placement
          await object_placement();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        // SCM GOSUB boat_health_counter
        await boat_health_counter();
        // fallback if label was not emitted as async function: no-op continues linearly
        if ($.boat_node_counter > 0) {
          // SCM GOSUB drop_mines
          await drop_mines();
          // fallback if label was not emitted as async function: no-op continues linearly
          if ($.boat_speed_flag == 1) {
            if (!($.player.locateAnyMeansCar2D($.partners_boat, 100.0, 100.0, false))) {
              $.partners_boat.setCruiseSpeed(25.0);
              $.boat_speed_flag = 0;
            }
          }
          if ($.boat_speed_flag == 0) {
            if ($.player.locateAnyMeansCar2D($.partners_boat, 80.0, 80.0, false)) {
              $.partners_boat.setCruiseSpeed(35.0);
              $.boat_speed_flag = 1;
            }
          }
        }
        if (!($.boat_node_counter == 0)) {
          if ($.partners_boat.locate2D($.boat_node_x, $.boat_node_y, 5.0, 5.0, false)) {
            // SCM GOSUB select_boat_node
            await select_boat_node();
            // fallback if label was not emitted as async function: no-op continues linearly
            $.partners_boat.goto($.boat_node_x, $.boat_node_y, 0.0);
          }
        }
        if ($.boat_node_counter == 0) {
          if (Object.DoesExist($.barrel2_a)) {
            [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_a.getCoordinates();
            $.barrel2_a.delete();
            Pickup.DropNauticalMine($.fish_target_x, $.fish_target_y, $.fish_target_z);
          }
          if (Object.DoesExist($.barrel2_b)) {
            [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_b.getCoordinates();
            $.barrel2_b.delete();
            Pickup.DropNauticalMine($.fish_target_x, $.fish_target_y, $.fish_target_z);
          }
          if ($.rays_partner.isStoppedInArea2D(1364.1, -614.512, 1473.801, -560.223, false)) {
            // SCM GOSUB exit_boat
            await exit_boat();
            // fallback if label was not emitted as async function: no-op continues linearly
            $.partner_on_foot_flag = 1;
          }
        }
        if ($.partners_boat.locate3D($.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z, 4.0, 4.0, 4.0, false)) {
          if ($.timerc_reset_flag_r4 == 0) {
            $.timerc_started_r4 = Clock.GetGameTimer();
            $.timerc_reset_flag_r4 = 1;
          }
          if ($.timerc_reset_flag_r4 == 1) {
            $.timerc_current_r4 = Clock.GetGameTimer();
            $.timerc_r4 = $.timerc_current_r4 - $.timerc_started_r4;
            if ($.timerc_r4 > 8000) {
              if ($.rays_partner.isInArea2D(1608.0, -536.0, 1684.0, -472.0, false)) {
                // SCM GOSUB exit_boat
                await exit_boat();
                // fallback if label was not emitted as async function: no-op continues linearly
                $.rays_partner.setStayInSamePlace(true /* TRUE */);
                if ($.player.isInAnyCar()) {
                  $.players_boat_with_guns.markAsNoLongerNeeded();
                  $.players_boat_with_guns = $.player.storeCarIsIn();
                  $.rays_partner.setAccuracy(100);
                  $.rays_partner.setObjDestroyCar($.players_boat_with_guns);
                }
                else {
                  $.rays_partner.setObjKillPlayerOnFoot($.player);
                }
                $.timerc_reset_flag_r4 = 1;
                $.partner_on_foot_flag = -1;
              }
              else {
                [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.partners_boat.getCoordinates();
                $.fish_target_z = World.GetGroundZFor3DCoord($.fish_target_x, $.fish_target_y, $.fish_target_z);
                if (!($.fish_target_z == 0.0000)) {
                  // SCM GOSUB exit_boat
                  await exit_boat();
                  // fallback if label was not emitted as async function: no-op continues linearly
                  $.rays_partner.setStayInSamePlace(true /* TRUE */);
                  if ($.player.isInAnyCar()) {
                    $.players_boat_with_guns.markAsNoLongerNeeded();
                    $.players_boat_with_guns = $.player.storeCarIsIn();
                    $.rays_partner.setAccuracy(100);
                    $.rays_partner.setObjDestroyCar($.players_boat_with_guns);
                  }
                  else {
                    $.rays_partner.setObjKillPlayerOnFoot($.player);
                  }
                  $.timerc_reset_flag_r4 = 1;
                  $.partner_on_foot_flag = -1;
                }
              }
            }
          }
        }
        if (!($.partners_boat.locate3D($.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z, 4.0, 4.0, 4.0, false))) {
          [$.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z] = $.partners_boat.getCoordinates();
          $.timerc_reset_flag_r4 = 0;
        }


      }
      else {
        if (Object.DoesExist($.barrel2_a)) {
          [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_a.getCoordinates();
          Fx.AddExplosion($.fish_target_x, $.fish_target_y, $.fish_target_z, 0 /* EXPLOSION_GRENADE */);
          $.barrel2_a.delete();
        }
        if (Object.DoesExist($.barrel2_b)) {
          [$.fish_target_x, $.fish_target_y, $.fish_target_z] = $.barrel2_b.getCoordinates();
          Fx.AddExplosion($.fish_target_x, $.fish_target_y, $.fish_target_z, 0 /* EXPLOSION_GRENADE */);
          $.barrel2_b.delete();
        }
      }
    }


    if ($.partner_on_foot_flag == 1) {
      // SCM GOSUB partner_escape_checks
      await partner_escape_checks();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.goto_mission_ray4_failed == 1) {
        // SCM GOTO → mission_ray4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_ray4_failed"); // fallback: would break linear control flow
      }
      if ($.partner_on_foot_counter == 0) {
        if (!($.player.isInArea2D(1364.1, -614.512, 1473.801, -560.223, false))) {
          $.rays_partner.setObjRunToCoord(1453.4, -583.39);
          $.shoot_at_player_flag = 1;
        }
        else {
          $.rays_partner.setObjRunToCoord(1365.7308, -617.1476);
        }
        $.partner_on_foot_counter = 1;
      }
      if ($.shoot_at_player_flag > 0) {
        if ($.shoot_at_player_flag == 1) {
          if ($.rays_partner.locateOnFoot2D(1453.4, -583.39, 1.0, 1.0, false)) {
            if (!($.player.isInArea2D(1364.1, -614.512, 1473.801, -560.223, false))) {
              if ($.player.isInAnyCar()) {
                $.players_boat_with_guns.markAsNoLongerNeeded();
                $.players_boat_with_guns = $.player.storeCarIsIn();
                $.rays_partner.setAccuracy(100);
                $.rays_partner.setStayInSamePlace(true /* TRUE */);
                //SET_CHAR_HEED_THREATS rays_partner TRUE
                $.rays_partner.setObjDestroyCar($.players_boat_with_guns);
              }
            }
            $.shoot_at_player_flag = 2;
          }
        }
        if ($.shoot_at_player_flag == 2) {
          if ($.player.isInArea2D(1364.1, -614.512, 1473.801, -560.223, false)) {
            $.rays_partner.setStayInSamePlace(false /* FALSE */);
            //SET_CHAR_HEED_THREATS rays_partner FALSE
            $.rays_partner.setObjRunToCoord(1365.7308, -617.1476);
            $.partner_on_foot_counter = 2;
            $.shoot_at_player_flag = 0;
          }
        }
      }
      if (!($.partners_boat_health == -1)) {
        $.partners_boat_health = $.rays_partner.getHealth();
        if ($.partners_boat_health < 250) {
          $.rays_partner.setHeedThreats(true /* TRUE */);
          $.partners_boat_health = -1;
        }
      }
      if ($.partner_on_foot_counter == 1) {
        if ($.shoot_at_player_flag == 0) {
          if ($.rays_partner.locateOnFoot2D(1365.7308, -617.1476, 1.0, 1.0, false)) {
            $.rays_partner.setObjRunToCoord(1344.5702, -617.2876);
            $.partner_on_foot_counter = 2;
          }
        }
      }
      if ($.partner_on_foot_counter == 2) {
        if ($.rays_partner.locateOnFoot2D(1344.5702, -617.2876, 1.0, 1.0, false)) {
          $.rays_partner.setObjRunToCoord(1340.5314, -614.0313);
          $.partner_on_foot_counter = 3;
        }
      }
      if ($.partner_on_foot_counter == 3) {
        if ($.rays_partner.locateOnFoot2D(1340.5314, -614.0313, 1.0, 1.0, false)) {
          $.rays_partner.setObjRunToCoord(1336.6632, -616.9997);
          $.partner_on_foot_counter = 4;
        }
      }
      if ($.partner_on_foot_counter == 4) {
        if ($.rays_partner.locateOnFoot2D(1336.6632, -616.9997, 1.0, 1.0, false)) {
          $.rays_partner.setObjRunToCoord(1333.7664, -631.9993);
          $.partner_on_foot_counter = 5;
        }
      }
      if ($.partner_on_foot_counter == 5) {
        if ($.rays_partner.locateOnFoot2D(1333.7664, -631.9993, 1.0, 1.0, false)) {
          $.rays_partner.setObjRunToCoord(1332.7195, -636.8160);
          $.partner_on_foot_counter = 6;
        }
      }
      if ($.partner_on_foot_counter == 6) {
        if ($.rays_partner.locateOnFoot2D(1332.7195, -636.8160, 1.0, 1.0, false)) {
          if (Car.IsDead($.partners_car)) {
            $.rays_partner.setObjRunToCoord(1331.7894, -678.1871);
            $.partners_car_is_dead = 1;
          }
          else {
            $.rays_partner.setObjEnterCarAsDriver($.partners_car);
            $.partners_car_is_dead = -1;
          }
          $.partner_on_foot_counter = 7;
        }
      }
      if ($.partners_car_is_dead == 1) {
        if ($.partner_on_foot_counter == 7) {
          if ($.rays_partner.locateOnFoot2D(1331.7894, -678.1871, 1.0, 1.0, false)) {
            $.rays_partner.setObjRunToCoord(1331.3925, -709.0771);
            $.partner_on_foot_counter = 8;
          }
        }
        if ($.partner_on_foot_counter == 8) {
          if ($.rays_partner.locateOnFoot2D(1331.3925, -709.0771, 1.0, 1.0, false)) {
            $.rays_partner.setObjRunToCoord(1325.6399, -710.9251);
            $.partner_on_foot_counter = 9;
          }
        }
        if ($.partner_on_foot_counter == 9) {
          if ($.rays_partner.locateOnFoot2D(1325.6399, -710.9251, 1.0, 1.0, false)) {
            $.rays_partner.setObjRunToCoord(1309.8854, -695.2979);
            $.partner_on_foot_counter = 10;
          }
        }
        if ($.partner_on_foot_counter == 10) {
          if ($.rays_partner.locateOnFoot2D(1309.8854, -695.2979, 1.0, 1.0, false)) {
            // SCM GOSUB steal_a_car
            await steal_a_car();
            // fallback if label was not emitted as async function: no-op continues linearly
            $.partner_on_foot_counter = 11;
          }
        }
        if ($.partner_on_foot_counter == 11) {
          if ($.rays_partner.isInAnyCar()) {
            $.partners_car.markAsNoLongerNeeded();
            $.partners_car = $.rays_partner.storeCarIsIn();
            $.partners_car.setOnlyDamagedByPlayer(true /* TRUE */);
            $.partners_car.setCruiseSpeed(50.0);
            $.partners_car.setDrivingStyle(2);
            $.partners_car.wanderRandomly();
            $.partners_car.setAvoidLevelTransitions(true /* TRUE */);
            $.partners_car.setUpsidedownNotDamaged(true /* TRUE */);
            $.partner_on_foot_flag = 2;
          }
        }
      }
      if ($.partners_car_is_dead == -1) {
        if ($.partner_on_foot_counter == 7) {
          if ($.rays_partner.isInAnyCar()) {
            $.partners_car.markAsNoLongerNeeded();
            $.partners_car = $.rays_partner.storeCarIsIn();
            $.partners_car.setOnlyDamagedByPlayer(true /* TRUE */);
            $.partners_car.setCruiseSpeed(30.0);
            $.partners_car.setDrivingStyle(3);
            $.partners_car.gotoCoordinatesAccurate(1331.2119, -662.4428, 11.0086);
            $.partner_on_foot_counter = 8;
          }
        }
        if (!(Car.IsDead($.partners_car))) {
          if ($.partner_on_foot_counter == 8) {
            if ($.rays_partner.locateInCar2D(1331.2119, -662.4428, 5.0, 5.0, false)) {
              $.partners_car.gotoCoordinatesAccurate(1331.2119, -685.2106, 11.3431);
              $.partner_on_foot_counter = 9;
            }
          }
          if ($.partner_on_foot_counter == 9) {
            if ($.rays_partner.locateInCar2D(1331.2119, -685.2106, 5.0, 5.0, false)) {
              $.partners_car.gotoCoordinatesAccurate(1331.0211, -696.5710, 12.2865);
              $.partner_on_foot_counter = 10;
            }
          }
          if ($.partner_on_foot_counter == 10) {
            if ($.rays_partner.locateInCar2D(1331.0211, -696.5710, 5.0, 5.0, false)) {
              $.partners_car.gotoCoordinatesAccurate(1331.3907, -715.4436, 14.2220);
              $.partner_on_foot_counter = 11;
            }
          }
          if ($.partner_on_foot_counter == 11) {
            if ($.rays_partner.locateInCar2D(1331.3907, -715.4436, 5.0, 5.0, false)) {
              $.partners_car.markAsNoLongerNeeded();
              $.partners_car = $.rays_partner.storeCarIsIn();
              $.partners_car.setOnlyDamagedByPlayer(true /* TRUE */);
              $.partners_car.setCruiseSpeed(50.0);
              $.partners_car.setDrivingStyle(2);
              $.partners_car.wanderRandomly();
              $.partners_car.setAvoidLevelTransitions(true /* TRUE */);
              $.partners_car.setUpsidedownNotDamaged(true /* TRUE */);
              $.partner_on_foot_flag = 2;
            }
          }
        }
      }
      if ($.rays_partner.isInAnyCar() && $.partner_on_foot_flag == 3) {
        $.partners_car.markAsNoLongerNeeded();
        $.partners_car = $.rays_partner.storeCarIsIn();
        $.partners_car.setOnlyDamagedByPlayer(true /* TRUE */);
        $.partners_car.setCruiseSpeed(50.0);
        $.partners_car.setDrivingStyle(2);
        $.partners_car.wanderRandomly();
        $.partners_car.setAvoidLevelTransitions(true /* TRUE */);
        $.partners_car.setUpsidedownNotDamaged(true /* TRUE */);
        $.partner_on_foot_flag = 2;
      }
      if ($.partner_on_foot_flag == 2) {
        if (!($.rays_partner.isInAnyCar())) {
          // SCM GOSUB steal_a_car
          await steal_a_car();
          // fallback if label was not emitted as async function: no-op continues linearly
          //SET_CHAR_HEED_THREATS rays_partner TRUE
          $.partner_on_foot_flag = 3;
        }
      }
      if ($.partner_on_foot_flag == 2) {
        if (!(Car.IsDead($.partners_car))) {
          if (TIMERB > 1000) {
            TIMERB = 0;
            if ($.player.locateAnyMeansChar2D($.rays_partner, 30.0, 30.0, false)) {
              $.partners_car.setCruiseSpeed(50.0);
            }
            else {
              if ($.player.locateAnyMeansChar2D($.rays_partner, 80.0, 80.0, false)) {
                $.partners_car.setCruiseSpeed(40.0);
              }
              else {
                $.partners_car.setCruiseSpeed(30.0);
              }
            }
          }
          if ($.partners_car.isStopped()) {
            if ($.timer_reset_flag_r4 == 0) {
              TIMERA = 0;
              $.timer_reset_flag_r4 = 1;
            }
            if (TIMERA > 8000 && $.timer_reset_flag_r4 == 1) {
              if ($.player.locateAnyMeansChar2D($.rays_partner, 120.0, 120.0, false)) {
                $.rays_partner.setObjLeaveCar($.partners_car);
                $.timer_reset_flag_r4 = 0;
              }
              else {
                if (!($.partners_car.isOnScreen())) {
                  [$.partner_x, $.partner_y, $.partner_z] = $.partners_car.getCoordinates();
                  [$.partner_x, $.partner_y, $.partner_z, $.distance_between_boats] = Path.GetClosestCarNodeWithHeading($.partner_x, $.partner_y, $.partner_z);
                  if (!(Camera.IsPointOnScreen($.partner_x, $.partner_y, $.partner_z, 4.0))) {
                    $.partners_car.setCoordinates($.partner_x, $.partner_y, $.partner_z);
                    $.partners_car.setHeading($.distance_between_boats);
                    $.timer_reset_flag_r4 = 0;
                  }
                }
              }
            }
          }
          if ($.partners_car.isUpsidedown() && $.partners_car.isStopped()) {
            if ($.player.locateAnyMeansChar2D($.rays_partner, 120.0, 120.0, false)) {
              $.rays_partner.setObjLeaveCar($.partners_car);
              $.partners_car.setUpsidedownNotDamaged(false /* FALSE */);
            }
            else {
              if (!($.partners_car.isOnScreen())) {
                [$.partner_x, $.partner_y, $.partner_z] = $.partners_car.getCoordinates();
                [$.partner_x, $.partner_y, $.partner_z, $.distance_between_boats] = Path.GetClosestCarNodeWithHeading($.partner_x, $.partner_y, $.partner_z);
                if (!(Camera.IsPointOnScreen($.partner_x, $.partner_y, $.partner_z, 4.0))) {
                  $.partners_car.setCoordinates($.partner_x, $.partner_y, $.partner_z);
                  $.partners_car.setHeading($.distance_between_boats);
                }
              }
            }
          }
          if ($.partners_car.locate3D($.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z, 4.0, 4.0, 4.0, false)) {
            if ($.timerc_reset_flag_r4 == 0) {
              $.timerc_started_r4 = Clock.GetGameTimer();
              $.timerc_reset_flag_r4 = 1;
            }
            if ($.timerc_reset_flag_r4 == 1) {
              $.timerc_current_r4 = Clock.GetGameTimer();
              $.timerc_r4 = $.timerc_current_r4 - $.timerc_started_r4;
              if ($.timerc_r4 > 8000) {
                if ($.player.locateAnyMeansChar2D($.rays_partner, 120.0, 120.0, false)) {
                  $.rays_partner.setObjLeaveCar($.partners_car);
                  $.timerc_reset_flag_r4 = 0;
                }
                else {
                  [$.partner_x, $.partner_y, $.partner_z] = $.partners_car.getCoordinates();
                  [$.partner_x, $.partner_y, $.partner_z, $.distance_between_boats] = Path.GetClosestCarNodeWithHeading($.partner_x, $.partner_y, $.partner_z);
                  if (!(World.IsPointObscuredByAMissionEntity($.partner_x, $.partner_y, $.partner_z, 4.0, 4.0, 4.0))) {
                    if (!(Camera.IsPointOnScreen($.partner_x, $.partner_y, $.partner_z, 4.0))) {
                      $.partners_car.setCoordinates($.partner_x, $.partner_y, $.partner_z);
                      $.partners_car.setHeading($.distance_between_boats);
                      $.timerc_reset_flag_r4 = 0;
                    }
                  }
                }
              }
            }
          }
          if (!($.partners_car.locate3D($.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z, 4.0, 4.0, 4.0, false))) {
            [$.partner_stuck_x, $.partner_stuck_y, $.partner_stuck_z] = $.partners_car.getCoordinates();
            $.timerc_reset_flag_r4 = 0;
          }
          if (!($.partners_car.isHealthGreater(400))) {
            $.rays_partner.setObjLeaveCar($.partners_car);
          }
        }
      }
    }




    // Mission Ray4 failed


  }
}

async function mission_ray4_failed() {
  Text.PrintBig(M_FAIL, 5000, 1);
  return;



  // mission Ray4 passed


}

async function mission_ray4_passed() {


  $.flag_ray_mission4_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 15000, 2000, 1);
  $.player.addScore(15000);
  $.player.clearWantedLevel();
  Stat.RegisterMissionPassed(RM4);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT ray_mission5_loop
  return;



  // mission cleanup


}

async function mission_cleanup_ray4() {


  $.partners_blip.remove();
  $.players_boat_with_guns_blip.remove();
  Hud.ClearCounter($.partners_boat_health);
  Streaming.MarkModelAsNoLongerNeeded(car`PREDATOR`);
  Streaming.MarkModelAsNoLongerNeeded(car`GHOST`);
  Streaming.MarkModelAsNoLongerNeeded(car`SENTINEL`);
  Streaming.MarkModelAsNoLongerNeeded(car`RCBANDIT`);
  $.flag_player_on_mission = 0;
  $.flag_player_on_ray_mission = 0;
  Mission.Finish();
  return;



}

async function object_placement() {


  if (!(Car.IsDead($.partners_boat))) {
    $.barrel2_a.placeRelativeToCar($.partners_boat, -0.5, -3.8, 1.1);
    $.barrel2_b.placeRelativeToCar($.partners_boat, 0.5, -3.8, 1.1);
  }


  return;



}

async function drop_mines() {


  $.mine_current_timer = Clock.GetGameTimer();
  $.temporary_time_mine = $.mine_current_timer - $.last_mine_dropped_timer;
  if ($.temporary_time_mine > 2000) {
    $.random_int = Math.RandomIntInRange(0, 4);
    $.last_mine_dropped_timer = Clock.GetGameTimer();
    if ($.random_int == 2) {
      $.partners_boat_speed = $.partners_boat.getSpeed();
      [$.player_X, $.player_Y, $.player_Z] = $.player.getCoordinates();
      [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
      if (!($.player.locateAnyMeansChar2D($.rays_partner, 5.0, 5.0, false))) {
        if ($.partners_boat_speed > 12.0) {
          $.vector_x = $.partner_x - $.player_X;
          $.vector_y = $.partner_y - $.player_Y;
          $.temp_vector_x = $.vector_x * $.vector_x;
          $.temp_vector_y = $.vector_y * $.vector_y;
          $.temp_distance = $.temp_vector_x + $.temp_vector_y;
          $.distance_between_boats = Math.Sqrt($.temp_distance);
          if ($.distance_between_boats < 60.0) {
            $.partners_boat_forward_x = $.partners_boat.getForwardX();
            $.partners_boat_forward_y = $.partners_boat.getForwardY();
            $.vector_x = $.vector_x / $.distance_between_boats;
            $.vector_y = $.vector_y / $.distance_between_boats;
            $.temp_dot_product_x = $.vector_x * $.partners_boat_forward_x;
            $.temp_dot_product_y = $.vector_y * $.partners_boat_forward_y;
            $.dot_product = $.temp_dot_product_x + $.temp_dot_product_y;
            if ($.dot_product > -0.5) {
              Pickup.DropNauticalMine($.partner_x, $.partner_y, $.partner_z);
              $.temp_x = $.partner_x;
              $.temp_y = $.partner_y;
            }
          }
        }
      }
    }
  }


  return;



}

async function exit_boat() {


  if ($.exit_boat_flag == 0) {
    $.partners_boat.stop();
    [$.partner_x, $.partner_y, $.partner_z] = $.partners_boat.getCoordinates();
    $.partners_boat_forward_x = $.partners_boat.getForwardX();
    $.partners_boat_forward_y = $.partners_boat.getForwardY();
    $.temp_dot_product_x = 3.0 * $.partners_boat_forward_y;
    $.temp_dot_product_y = -3.0 * $.partners_boat_forward_x;
    $.temp_x = 0.3 * $.partners_boat_forward_x;
    $.temp_y = 0.3 * $.partners_boat_forward_y;
    $.vector_x = $.temp_dot_product_x - $.temp_x;
    $.vector_y = $.temp_dot_product_y - $.temp_y;
    $.vector_x = $.vector_x + $.partner_x;
    $.vector_y = $.vector_y + $.partner_y;
    $.temp_dot_product_x = -3.0 * $.partners_boat_forward_y;
    $.temp_dot_product_y = 3.0 * $.partners_boat_forward_x;
    $.temp_x = 0.3 * $.partners_boat_forward_x;
    $.temp_y = 0.3 * $.partners_boat_forward_y;
    $.temp_vector_x = $.temp_dot_product_x - $.temp_x;
    $.temp_vector_y = $.temp_dot_product_y - $.temp_y;
    $.temp_vector_x = $.temp_vector_x + $.partner_x;
    $.temp_vector_y = $.temp_vector_y + $.partner_y;
    [$.sniper_object_a_x, $.sniper_object_a_y, $.dot_product] = $.player.getCoordinates();
    $.partner_x = $.sniper_object_a_x - $.vector_x;
    $.partner_y = $.sniper_object_a_y - $.vector_y;
    $.partner_x = $.partner_x * $.partner_x;
    $.partner_y = $.partner_y * $.partner_y;
    $.dot_product = $.partner_x + $.partner_y;
    $.distance_resultA = Math.Sqrt($.dot_product);
    $.partner_x = $.sniper_object_a_x - $.temp_vector_x;
    $.partner_y = $.sniper_object_a_y - $.temp_vector_y;
    $.partner_x = $.partner_x * $.partner_x;
    $.partner_y = $.partner_y * $.partner_y;
    $.dot_product = $.partner_x + $.partner_y;
    $.distance_resultB = Math.Sqrt($.dot_product);
    if ($.distance_resultA < $.distance_resultB) {
      $.dot_product = World.GetGroundZFor3DCoord($.vector_x, $.vector_y, $.partner_z); //temp_x
      $.temp_x = $.partner_z + 15.0;
      $.temp_x = World.GetGroundZFor3DCoord($.vector_x, $.vector_y, $.temp_x);
      if ($.temp_x > $.dot_product) {
        $.dot_product = $.temp_x + 1.0;
      }
      if (!($.dot_product == 0.0000)) {
        $.rays_partner.warpFromCarToCoord($.vector_x, $.vector_y, $.partner_z);
        $.rays_partner.setHeading(90.0);
      }
      else {
        $.rays_partner.warpFromCarToCoord($.temp_vector_x, $.temp_vector_y, $.partner_z);
        $.rays_partner.setHeading(90.0);
      }
    }
    else {
      $.dot_product = World.GetGroundZFor3DCoord($.temp_vector_x, $.temp_vector_y, $.partner_z);
      if (!($.dot_product == 0.0000)) {
        $.rays_partner.warpFromCarToCoord($.temp_vector_x, $.temp_vector_y, $.partner_z);
        $.rays_partner.setHeading(90.0);
      }
      else {
        $.rays_partner.warpFromCarToCoord($.vector_x, $.vector_y, $.partner_z);
        $.rays_partner.setHeading(90.0);
      }
    }
    $.rays_partner.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
    $.rays_partner.setRunning(true /* TRUE */);
    Hud.ClearCounter($.partners_boat_health);
    $.exit_boat_flag = 1;
  }


  return;



}

async function boat_health_counter() {


  $.partners_boat_health = $.partners_boat.getHealth();
  $.partners_boat_health = $.partners_boat_health - 250;
  $.partners_boat_health = $.partners_boat_health * 100;
  $.partners_boat_health = $.partners_boat_health / 750;
  $.partners_boat_health2 = $.partners_boat_health;
  $.partners_boat_health = 100 - $.partners_boat_health2;


  return;



}

async function steal_a_car() {


  if ($.player.locateAnyMeansChar2D($.rays_partner, 100.0, 100.0, false)) {
    $.rays_partner.setObjStealAnyCar();
  }
  else {
    [$.partner_x, $.partner_y, $.partner_z, $.dot_product] = Path.GetClosestCarNodeWithHeading(1309.8854, -695.2979, 15.3830);
    $.partners_car.markAsNoLongerNeeded();
    $.partners_car = Car.Create(88 /* CAR_SENTINEL */, $.partner_x, $.partner_y, $.partner_z);
    $.partners_car.setHeading($.dot_product);
    $.rays_partner.setObjEnterCarAsDriver($.partners_car);
  }


  return;


}

async function select_boat_node() {


  if ($.boat_node_counter == 1) {
    if ($.partners_boat_health < 50) {
      $.boat_node_x = $.node_11_x;
      $.boat_node_y = $.node_11_y;
      $.boat_node_counter = 11;
    }
    else {
      $.boat_node_x = $.node_2_x;
      $.boat_node_y = $.node_2_y;
      $.boat_node_counter = 2;
    }
    return;
  }


  if ($.boat_node_counter == 2) {
    $.boat_node_x = $.node_3_x;
    $.boat_node_y = $.node_3_y;
    $.boat_node_counter = 3;
    return;
  }


  if ($.boat_node_counter == 3) {
    if ($.partners_boat_health < 50) {
      $.boat_node_x = $.node_4_x;
      $.boat_node_y = $.node_4_y;
      $.boat_node_counter = 4;
    }
    else {
      $.boat_node_x = $.node_0_x;
      $.boat_node_y = $.node_0_y;
      $.boat_node_counter = 0;
      $.partners_boat.setCruiseSpeed(35.0);
      $.boat_speed_flag = -100;
    }
    return;
  }


  if ($.boat_node_counter == 4) {
    $.boat_node_x = $.node_5_x;
    $.boat_node_y = $.node_5_y;
    $.boat_node_counter = 5;
    return;
  }


  if ($.boat_node_counter == 5) {
    $.boat_node_x = $.node_6_x;
    $.boat_node_y = $.node_6_y;
    $.boat_node_counter = 6;
    return;
  }


  if ($.boat_node_counter == 6) {
    $.boat_node_x = $.node_7_x;
    $.boat_node_y = $.node_7_y;
    $.boat_node_counter = 7;
    return;
  }


  if ($.boat_node_counter == 7) {
    if ($.partners_boat_health < 50) {
      $.boat_node_x = $.node_8_x;
      $.boat_node_y = $.node_8_y;
      $.boat_node_counter = 8;
    }
    else {
      $.boat_node_x = $.node_3_x;
      $.boat_node_y = $.node_3_y;
      $.boat_node_counter = 3;
    }
    return;
  }


  if ($.boat_node_counter == 8) {
    if ($.partners_boat_health < 50) {
      $.boat_node_x = $.node_1_x;
      $.boat_node_y = $.node_1_y;
      $.boat_node_counter = 1;
    }
    else {
      $.boat_node_x = $.node_3_x;
      $.boat_node_y = $.node_3_y;
      $.boat_node_counter = 3;
    }
    return;
  }


  if ($.boat_node_counter == 9) {
    if ($.partners_boat_health < 50) {
      $.boat_node_x = $.node_2_x;
      $.boat_node_y = $.node_2_y;
      $.boat_node_counter = 2;
    }
    else {
      $.boat_node_x = $.node_8_x;
      $.boat_node_y = $.node_8_y;
      $.boat_node_counter = 8;
    }
    return;
  }


  if ($.boat_node_counter == 10) {
    $.boat_node_x = $.node_9_x;
    $.boat_node_y = $.node_9_y;
    $.boat_node_counter = 9;
    return;
  }


  if ($.boat_node_counter == 11) {
    $.boat_node_x = $.node_10_x;
    $.boat_node_y = $.node_10_y;
    $.boat_node_counter = 10;
    return;
  }


  return;



}

async function partner_escape_checks() {


  if (!($.player.locateAnyMeansChar2D($.rays_partner, 160.0, 160.0, false)) && !($.rays_partner.isOnScreen())) {
    if ($.gotaway_timer_reset_flag == 0) {
      $.partners_blip.remove();
      $.gotaway_timer_started = Clock.GetGameTimer();
      $.gotaway_timer_reset_flag = 1;
    }
    if ($.gotaway_timer_reset_flag == 1) {
      $.gotaway_timer_current = Clock.GetGameTimer();
      $.gotaway_timer = $.gotaway_timer_current - $.gotaway_timer_started;
      if ($.gotaway_timer > 8000) {
        if (!($.rays_partner.isOnScreen())) {
          $.gotaway_timer_reset_flag = 0;
          $.rays_partner.delete();
          Text.PrintNow(RM4_3, 5000, 1); //"Ray's partner has escaped!"
          $.goto_mission_ray4_failed = 1;
        }
      }
    }
  }


  if ($.gotaway_timer_reset_flag == 1) {
    if ($.player.locateAnyMeansChar2D($.rays_partner, 160.0, 160.0, false) || $.rays_partner.isOnScreen()) {
      $.partners_blip.remove();
      $.partners_blip = Blip.AddForChar($.rays_partner);
      $.gotaway_timer_reset_flag = 0;
    }
  }


  return;
  }
}

export async function ray4() {
  // MissionBoundary
  // *****************************************************************************************
  // *********************************** Ray Mission 4 ***************************************
  // *********************************** Gone Fishing	 ***************************************
  // *****************************************************************************************
  // *** Ray's partner is going to turn State's Evidence. He goes night fishing on the     ***
  // *** Lighthouse Rock. The player will have to use a boat to get to him.  This boat will***
  // *** have guns, and that is how the player must kill Ray's partner. Ray's partner will ***
  // *** also have a weapon of his own, as he flees he will be dropping barrels of 		 ***
  // *** explosives into the water and the path of the player.							 ***
  // *****************************************************************************************

  // Mission start stuff


  // SCM GOSUB mission_start_ray4
  await mission_start_ray4();
  // fallback if label was not emitted as async function: no-op continues linearly


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_ray4_failed
    await mission_ray4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  // SCM GOSUB mission_cleanup_ray4
  await mission_cleanup_ray4();
  // fallback if label was not emitted as async function: no-op continues linearly


  // MissionBoundary

  // Variables for mission


  // VAR_INT rays_partner partners_car partners_boat partners_blip players_boat_with_guns players_boat_with_guns_blip timer_reset_flag_r4
  // VAR_INT partners_boat_health random_int gotaway_timer gotaway_timer_current gotaway_timer_started partner_on_foot_counter
  // VAR_INT mine_current_timer last_mine_dropped_timer temporary_time_mine fish_target barrel2_a barrel2_b
  // VAR_INT gotaway_timer_reset_flag boat_speed_flag boat_node_counter partners_car_is_dead shoot_at_player_flag partner_on_foot_flag
  // VAR_INT fishy_1 fishy_2 fishy_3 fishy_4 fishy_5 fishy_6 fishy_7 fishy_8 fishy_9 fishy_10 partners_boat_health2 goto_mission_ray4_failed
  // VAR_INT timerc_r4 timerc_current_r4 timerc_started_r4 timerc_reset_flag_r4 exit_boat_flag


  // VAR_FLOAT partner_x partner_y partner_z partners_boat_speed player_x player_y player_z fish_target_x fish_target_y fish_target_z
  // VAR_FLOAT vector_x vector_y temp_vector_x temp_vector_y temp_distance distance_between_boats partners_boat_forward_x partners_boat_forward_y
  // VAR_FLOAT temp_dot_product_x temp_dot_product_y dot_product temp_x temp_y distance_resultA distance_resultB
  // VAR_FLOAT sniper_object_a_x sniper_object_a_y


  // VAR_FLOAT boat_node_x boat_node_y node_0_x node_0_y node_1_x node_1_y node_2_x node_2_y node_3_x node_3_y node_4_x node_4_y node_5_x node_5_y
  // VAR_FLOAT node_6_x node_6_y node_7_x node_7_y node_8_x node_8_y node_9_x node_9_y node_10_x node_10_y node_11_x node_11_y
  // VAR_FLOAT partner_stuck_x partner_stuck_y partner_stuck_z

  // ****************************************Mission Start************************************


}
