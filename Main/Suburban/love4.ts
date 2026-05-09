// Generated from Main/Suburban/love4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.flag_result_1 = 0;
  $.reset_timera_flag = 0;
  $.goon_in_hangar1_flag = -1;
  $.goon_in_hangar2_flag = -1;
  $.goon_in_hangar3_flag = -1;
  $.goon_in_hangar4_flag = -1;
  $.goon_in_hangar1_ducking = -1;
  $.goon_in_hangar2_ducking = -1;
  $.goon_in_hangar3_ducking = -1;
  $.goon_in_hangar4_ducking = -1;
  $.goon_in_hangar1_waitstate = 0;
  $.goon_in_hangar2_waitstate = 0;
  $.goon_in_hangar3_waitstate = 0;
  $.goon_in_hangar4_waitstate = 0;
  $.goon_at_yard1_flag = 0;
  $.goon_at_yard1_duck = 0;
  $.goon_at_yard1_duck_timer = 0;
  $.goon_at_yard2_flag = 0;
  $.goon_at_yard2_duck = 0;
  $.goon_at_yard2_duck_timer = 0;
  $.goon_at_yard3_flag = 0;
  $.goon_at_yard3_duck = 0;
  $.goon_at_yard3_duck_timer = 0;
  $.goon_at_yard4_flag = 0;
  $.goon_at_yard4_duck = 0;
  $.goon_at_yard4_duck_timer = 0;
  $.goon_at_yard5_flag = 0;
  $.goon_at_yard6_flag = 0;
  $.goon_at_yard7_duck = 0;
  $.goon_at_yard7_duck_timer = 0;
  $.goon_at_yard8_flag = 0;
  $.goon_at_yard8_duck = 0;
  $.goon_at_yard8_duck_timer = 0;
  $.goon_at_yard9_flag = 0;
  $.goon_at_yard10_flag = 0;
  $.goon_at_yard10_duck = 0;
  $.goon_at_yard10_duck_timer = 0;
  $.goon_in_hangar1_blip_flag = 0;
  $.goon_in_hangar2_blip_flag = 0;
  $.goon_in_hangar3_blip_flag = 0;
  $.goon_in_hangar4_blip_flag = 0;
  $.ducking_flag = 0;
  $.c_site_area_flag = 0;
  $.hangar_route = 0;
  $.yard_route1 = 1;
  $.yard_route2 = 2;
  $.yard_route3 = 3;
  {
  Streaming.LoadSpecialCharacter(1, $.love);
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(tshrorckgrdn)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  Cutscene.Load(D4_GTA);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.setAnim($.love);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`);
  $.cs_lovehead.setAnim($.love);
  World.ClearArea(82.44, -1548.49, 28.0, 2.0, true /* TRUE */);
  $.player.setCoordinates(82.44, -1548.49, 28.0);
  $.player.setHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 765) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Thank you for retrieving those packages, but they were only a decoy."
  Text.PrintNow(LOVE4_A, 10000, 1);
  while ($.cs_time < 4000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Sorry about that, but that's sometimes the way in business."
  Text.PrintNow(LOVE4_B, 10000, 1);
  while ($.cs_time < 6851) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"My real objective was hidden on the plane all along."
  Text.PrintNow(LOVE4_C, 10000, 1);
  while ($.cs_time < 9951) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Unfortunately the port authorities seized the plane and were stripping it down"
  Text.PrintNow(LOVE4_D, 10000, 1);
  while ($.cs_time < 13204) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"until I intervened at great personal expense."
  Text.PrintNow(LOVE4_H, 10000, 1);
  while ($.cs_time < 16457) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Cross the bridge to and go to Francis International Airport."
  Text.PrintNow(LOVE4_E, 10000, 1);
  while ($.cs_time < 19710) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I've paid off the officials."
  Text.PrintNow(LOVE4_F, 10000, 1);
  while ($.cs_time < 21394) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"My property will be waiting for you at the customs hanger in the aircraft's fuselage."
  Text.PrintNow(LOVE4_G, 10000, 1);
  while ($.cs_time < 27666) {
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
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  Streaming.RequestModel(car`PANLANT`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.RequestModel(car`DODO`);
  Streaming.RequestModel(car`COLUMB`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`PANLANT`)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(car`DODO`)) || !(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Streaming.Switch(true /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // ******************************************END OF CUTSCENE********************************
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.love_4_blip = Blip.AddForCoordOld(-1268.4851, -528.6431, 9.8341, 0 /* RED */, 2 /* BLIP_ONLY */);
  $.love_4_blip.changeScale(3);
  //	IF IS_BUTTON_PRESSED PAD1 TRIANGLE
  //	AND IS_BUTTON_PRESSED PAD1 SQUARE
  //	AND IS_BUTTON_PRESSED PAD1 CIRCLE
  //		WAIT 500
  //		SET_PLAYER_COORDINATES player 338.2069 -274.6978 15.8
  //		GOTO second_cutscene
  //	ENDIF
  while (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
    //	IF IS_BUTTON_PRESSED PAD1 TRIANGLE
    //	AND IS_BUTTON_PRESSED PAD1 SQUARE
    //	AND IS_BUTTON_PRESSED PAD1 CIRCLE
    //		WAIT 500
    //		SET_PLAYER_COORDINATES player 338.2069 -274.6978 15.8
    //		GOTO second_cutscene
    //	ENDIF
    await asyncWait(0);
  }
  //-1276.983 -527.532 9.951 deadman1
  if (Game.IsNasty()) {
    //-1276.983 -527.532 9.951 deadman1
    $.deadman1 = Object.CreateNoOffset(2780 /* deadman1 */, -1276.834, -528.049, 10.568);
  }
  else {
    //-1276.983 -527.532 9.951 deadman1
    $.deadman1 = Object.CreateNoOffset(2799 /* deadmanoblood */, -1276.834, -528.049, 10.568);
  }
  while (!($.player.locateAnyMeans2D(-1268.4851, -528.6431, 200.0, 200.0, false))) {
    await asyncWait(0);
  }
  while (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
    await asyncWait(0);
  }
  $.car_van1_lm4 = Car.Create(137 /* CAR_PANLANT */, -1282.3678, -549.2936, 10.0782);
  $.car_van1_lm4.setHeading(110.3045);
  $.car_van3_lm4 = Car.Create(137 /* CAR_PANLANT */, -1281.3341, -561.8243, 10.0766);
  $.car_van3_lm4.setHeading(153.1196);
  $.wingless_cessna = Car.Create(119 /* PLANE_DODO */, -1268.2, -519.0, 10.0);
  $.wingless_cessna.setHeading(180.0);
  $.love_4_blip.remove();
  $.love_4_blip = Blip.AddForCar($.wingless_cessna);
  $.van1_driver = Char.CreateInsideCar($.car_van1_lm4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
  $.car_van1_lm4.setIdle();
  $.car_van3_lm4.setIdle();
  $.wingless_cessna.setIdle();
  $.car_van1_lm4.setCruiseSpeed(25.0);
  $.car_van1_lm4.setDrivingStyle(2);
  $.goon_in_hangar1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1271.8468, -511.2291, 10.0);
  $.goon_in_hangar2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1265.1578, -520.6526, 10.0);
  $.goon_in_hangar3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1263.0977, -520.3745, 10.0);
  $.goon_in_hangar4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1271.0814, -522.0176, 10.0);
  $.goon_in_hangar4.setHeading(170.5763);
  $.goon_in_hangar2.turnToFaceChar($.goon_in_hangar3);
  $.goon_in_hangar3.turnToFaceChar($.goon_in_hangar2);
  Path.AddRoutePoint($.hangar_route, -1271.8468, -511.2291, 9.7954);
  Path.AddRoutePoint($.hangar_route, -1263.3838, -510.6700, 9.7954);
  $.goon_in_hangar1.setObjFollowRoute($.hangar_route, 2 /* FOLLOW_ROUTE_BACKFORWARD */);
  $.goon_in_hangar1.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_in_hangar2.giveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
  $.goon_in_hangar4.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
  $.goon_in_hangar1.setThreatSearch(22 /* THREAT_FAST_CAR */);
  $.goon_in_hangar2.setThreatSearch(22 /* THREAT_FAST_CAR */);
  $.goon_in_hangar3.setThreatSearch(22 /* THREAT_FAST_CAR */);
  $.goon_in_hangar4.setThreatSearch(22 /* THREAT_FAST_CAR */);
  if ($.flag_player_on_mission == 0) {
    $.goon_in_hangar1_blip = Blip.AddForChar($.goon_in_hangar1);
    $.goon_in_hangar2_blip = Blip.AddForChar($.goon_in_hangar2);
    $.goon_in_hangar3_blip = Blip.AddForChar($.goon_in_hangar3);
    $.goon_in_hangar4_blip = Blip.AddForChar($.goon_in_hangar4);
  }
  // CESSNA
  while (!($.player.locateAnyMeans2D(-1281.3341, -561.8243, 90.0, 90.0, false))) {
    await asyncWait(0);
    if (Car.IsDead($.wingless_cessna)) {
      Text.PrintNow(LOVE4_9, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_van3_lm4)) {
      Text.PrintNow(LOV4_10, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
  }
  if (!(Car.IsDead($.car_van1_lm4))) {
    $.car_van1_lm4.gotoCoordinates(439.0, -198.0, 21.0);
  }
  if (!(Char.IsDead($.goon_in_hangar2)) || !(Char.IsDead($.goon_in_hangar3))) {
    Game.SetCharsChatting($.goon_in_hangar2, $.goon_in_hangar3, 1000000);
  }
  if (!(Char.IsDead($.goon_in_hangar4))) {
    $.goon_in_hangar4.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 1000000);
  }
  //OUT THE FRONT OF THE HANGAR (AREA1)
  //INSIDE HANGAR (AREA2)
  //INSIDE HANGAR (AREA3)
  //INSIDE HANGAR (AREA4)
  //-1256.4 -520.5
  while (!(Char.IsDead($.goon_in_hangar1)) || !(Char.IsDead($.goon_in_hangar2)) || !(Char.IsDead($.goon_in_hangar3)) || !(Char.IsDead($.goon_in_hangar4))) {
    await asyncWait(0);
    if (Car.IsDead($.wingless_cessna)) {
      Text.PrintNow(LOVE4_9, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_van3_lm4)) {
      Text.PrintNow(LOV4_10, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.goon_in_hangar1)) {
      $.goon_in_hangar1_flag = -100;
      $.goon_in_hangar1_ducking = -100;
      $.goon_in_hangar1_blip.remove();
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.goon_in_hangar2)) {
      $.goon_in_hangar2_flag = -100;
      $.goon_in_hangar2_ducking = -100;
      $.goon_in_hangar2_blip.remove();
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.goon_in_hangar3)) {
      $.goon_in_hangar3_flag = -100;
      $.goon_in_hangar3_ducking = -100;
      $.goon_in_hangar3_blip.remove();
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Char.IsDead($.goon_in_hangar4)) {
      $.goon_in_hangar4_flag = -100;
      $.goon_in_hangar4_ducking = -100;
      $.goon_in_hangar4_blip.remove();
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    //OUT THE FRONT OF THE HANGAR (AREA1)
    if ($.player.isInArea2D(-1285.05, -586.535, -1254.959, -542.262, false) && $.wingless_cessna.isOnScreen()) {
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    //INSIDE HANGAR (AREA2)
    if ($.player.isInArea2D(-1290.216, -542.262, -1244.057, -531.793, false)) {
      if (!(Char.IsDead($.goon_in_hangar2))) {
        $.goon_in_hangar2.setObjKillPlayerAnyMeans($.player);
      }
      $.goon_in_hangar2_flag = -100;
      $.goon_in_hangar2_ducking = -100;
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    //INSIDE HANGAR (AREA3)
    if ($.player.isInArea2D(-1290.216, -531.793, -1244.057, -522.926, false)) {
      if (!(Char.IsDead($.goon_in_hangar4))) {
        $.goon_in_hangar4.setObjKillPlayerAnyMeans($.player);
      }
      $.goon_in_hangar4_flag = -100;
      $.goon_in_hangar4_ducking = -100;
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    //INSIDE HANGAR (AREA4)
    if ($.player.isInArea2D(-1290.216, -522.926, -1244.057, -496.88, false)) {
      if (!(Char.IsDead($.goon_in_hangar1))) {
        $.goon_in_hangar1.setObjKillPlayerAnyMeans($.player);
      }
      $.goon_in_hangar1_flag = -100;
      $.goon_in_hangar1_ducking = -100;
      if (!(Char.IsDead($.goon_in_hangar3))) {
        $.goon_in_hangar3.setObjKillPlayerAnyMeans($.player);
      }
      $.goon_in_hangar3_flag = -100;
      $.goon_in_hangar3_ducking = -100;
      // SCM GOSUB set_death_flags
      await set_death_flags();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    // SCM GOSUB ducking_routine
    await ducking_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.goon_in_hangar1_ducking > -1) {
      if ($.goon_in_hangar1_flag == 0) {
        $.goon_in_hangar1.setIdle();
        $.goon_in_hangar1.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar1.setObjRunToCoord(-1280.2, -520.1);
        $.goon_in_hangar1_flag = 1;
      }
      if ($.goon_in_hangar1_flag == 1) {
        if ($.goon_in_hangar1.locateStoppedOnFoot2D(-1280.2, -520.1, 1.0, 1.0, false)) {
          $.goon_in_hangar1_flag = 2;
          $.goon_in_hangar1_ducking = 1;
        }
      }
    }
    //-1256.4 -520.5
    if ($.goon_in_hangar2_ducking > -1) {
      //-1256.4 -520.5
      if ($.goon_in_hangar2_flag == 0) {
        $.goon_in_hangar2.setIdle();
        $.goon_in_hangar2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        //-1256.4 -520.5
        $.goon_in_hangar2.setObjRunToCoord(-1256.4, -521.3);
        $.goon_in_hangar2_flag = 1;
      }
      if ($.goon_in_hangar2_flag == 1) {
        if ($.goon_in_hangar2.locateStoppedOnFoot2D(-1256.4, -521.3, 1.0, 1.0, false)) {
          $.goon_in_hangar2_flag = 2;
          $.goon_in_hangar2_ducking = 1;
        }
      }
    }
    if ($.goon_in_hangar3_ducking > -1) {
      if ($.goon_in_hangar3_flag == 0) {
        $.goon_in_hangar3.setIdle();
        $.goon_in_hangar3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar3.setObjRunToCoord(-1254.4, -521.3);
        $.goon_in_hangar3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
        $.goon_in_hangar3_flag = 1;
      }
      if ($.goon_in_hangar3_flag == 1) {
        if ($.goon_in_hangar3.locateStoppedOnFoot2D(-1254.4, -521.3, 1.0, 1.0, false)) {
          $.goon_in_hangar3_flag = 2;
          $.goon_in_hangar3_ducking = 1;
        }
      }
    }
    if ($.goon_in_hangar4_ducking > -1) {
      if ($.goon_in_hangar4_flag == 0) {
        $.goon_in_hangar4.setIdle();
        $.goon_in_hangar4.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar4.setObjRunToCoord(-1280.8, -529.2);
        $.goon_in_hangar4_flag = 1;
      }
      if ($.goon_in_hangar4_flag == 1) {
        if ($.goon_in_hangar4.locateStoppedOnFoot2D(-1280.8, -529.2, 1.0, 1.0, false)) {
          $.goon_in_hangar4_flag = 2;
          $.goon_in_hangar4_ducking = 1;
        }
      }
    }
  }
  $.goon_in_hangar1_blip.remove();
  $.goon_in_hangar2_blip.remove();
  $.goon_in_hangar3_blip.remove();
  $.goon_in_hangar4_blip.remove();
  $.goon_in_hangar1.markAsNoLongerNeeded();
  $.goon_in_hangar2.markAsNoLongerNeeded();
  $.goon_in_hangar3.markAsNoLongerNeeded();
  $.goon_in_hangar4.markAsNoLongerNeeded();
  $.script_controlled_player = $.player.getChar();
  //CHECK OUT THE CESSNA
  Text.PrintNow(LOVE4_5, 5000, 1);
  if (Car.IsDead($.wingless_cessna)) {
    Text.PrintNow(LOVE4_9, 5000, 1);
    // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
  }
  while (!($.player.isInCar($.wingless_cessna))) {
    await asyncWait(0);
    if (Car.IsDead($.wingless_cessna)) {
      Text.PrintNow(LOVE4_9, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
    if (Car.IsDead($.car_van3_lm4)) {
      Text.PrintNow(LOV4_10, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
  }
  await asyncWait(1000);
  // "The package is not here"
  Text.PrintNow(LOVE4_2, 3000, 1);
  $.love_4_blip.remove();
  if (Car.IsDead($.car_van3_lm4)) {
    Text.PrintNow(LOV4_10, 5000, 1);
    // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
  }
  $.love_4_blip = Blip.AddForCar($.car_van3_lm4);
  while (!($.player.locateOnFootCar2D($.car_van3_lm4, 6.0, 6.0, false))) {
    await asyncWait(0);
    if (Car.IsDead($.car_van3_lm4)) {
      Text.PrintNow(LOV4_10, 5000, 1);
      // SCM GOTO → mission_love4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love4_failed"); // fallback: would break linear control flow
    }
  }
  [$.van3_x, $.van3_y, $.van3_z] = $.car_van3_lm4.getCoordinates();
  $.x_component = $.car_van3_lm4.getForwardX();
  $.y_component = $.car_van3_lm4.getForwardY();
  //change both of these to move on the vehicles x axis
  $.temp_result_x = 2.8 * $.y_component;
  //
  $.temp_result_y = -2.8 * $.x_component;
  //change both of these to move on the vehicles y axis
  $.temp_var_x = 0.3 * $.x_component;
  //
  $.temp_var_y = 0.3 * $.y_component;
  $.result1_x = $.temp_result_x - $.temp_var_x;
  $.result1_y = $.temp_result_y - $.temp_var_y;
  $.result1_x = $.result1_x + $.van3_x;
  /////////////////
  $.result1_y = $.result1_y + $.van3_y;
  //change both of these to move on the vehicles x axis
  $.temp_result_x = -2.8 * $.y_component;
  //
  $.temp_result_y = 2.8 * $.x_component;
  //change both of these to move on the vehicles y axis
  $.temp_var_x = 0.3 * $.x_component;
  //
  $.temp_var_y = 0.3 * $.y_component;
  $.result2_x = $.temp_result_x - $.temp_var_x;
  $.result2_y = $.temp_result_y - $.temp_var_y;
  $.result2_x = $.result2_x + $.van3_x;
  $.result2_y = $.result2_y + $.van3_y;
  ////////////////////////////////////////////////////////////////////////////////
  $.van3_z += 0.15;
  $.player.setControl(false /* OFF */);
  Hud.SwitchWidescreen(true /* ON */);
  $.script_controlled_player.setObjWaitOnFoot();
  $.script_controlled_player.setIdle();
  $.love_4_blip.remove();
  [$.player_lo4_x, $.player_lo4_y, $.player_lo4_z] = $.player.getCoordinates();
  $.differ_x = $.player_lo4_x - $.result1_x;
  $.differ_y = $.player_lo4_y - $.result1_y;
  $.differ_x = $.differ_x * $.differ_x;
  $.differ_y = $.differ_y * $.differ_y;
  $.sum_difference = $.differ_x + $.differ_y;
  $.distance_result1 = Math.Sqrt($.sum_difference);
  $.differ_x = $.player_lo4_x - $.result2_x;
  $.differ_y = $.player_lo4_y - $.result2_y;
  $.differ_x = $.differ_x * $.differ_x;
  $.differ_y = $.differ_y * $.differ_y;
  $.sum_difference = $.differ_x + $.differ_y;
  $.distance_result2 = Math.Sqrt($.sum_difference);
  if ($.distance_result1 < $.distance_result2) {
    $.flag_result_1 = 1;
  }
  else {
    $.flag_result_1 = 0;
  }
  if ($.flag_result_1 == 1) {
    Camera.SetFixedPosition($.result1_x, $.result1_y, $.van3_z, 0.0, 0.0, 0.0);
    Camera.PointAtPoint($.result2_x, $.result2_y, $.van3_z, 1 /* INTERPOLATION */);
  }
  else {
    Camera.SetFixedPosition($.result2_x, $.result2_y, $.van3_z, 0.0, 0.0, 0.0);
    Camera.PointAtPoint($.result1_x, $.result1_y, $.van3_z, 1 /* INTERPOLATION */);
  }
  await asyncWait(1000);
  //Construction....yard!
  Text.PrintNow(LOVE4_3, 3000, 1);
  await asyncWait(2000);
  Camera.Restore();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  //GET THERE
  Text.Print(LOVE4_7, 5000, 1);
  // CONSTRUCTION SITE
  $.love_4_blip = Blip.AddForCoord(366.939, -328.025, 20.268);
  $.goon_in_hangar1.markAsNoLongerNeeded();
  $.goon_in_hangar2.markAsNoLongerNeeded();
  $.goon_in_hangar3.markAsNoLongerNeeded();
  $.goon_in_hangar4.markAsNoLongerNeeded();
  $.van1_driver.markAsNoLongerNeeded();
  $.car_van1_lm4.markAsNoLongerNeeded();
  ////////////////////////////////////////////////////////////////////////////////
  $.car_van3_lm4.markAsNoLongerNeeded();
  while (!(Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */))) {
    await asyncWait(0);
  }
}

async function second_cutscene() {
  $.car_van1_lm4 = Car.Create(137 /* CAR_PANLANT */, 352.8936, -308.3074, 15.8);
  $.car_van2_lm4 = Car.Create(137 /* CAR_PANLANT */, 359.3962, -307.2422, 15.8);
  $.car_van1_lm4.setHeading(180.6);
  $.car_van2_lm4.setHeading(222.9);
  $.colombian_car = Car.Create(131 /* CAR_COLUMB */, 346.8934, -298.4600, 15.8);
  $.colombian_car.setHeading(111.7);
  // area 1 chatting
  $.goon_at_yard1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 343.9994, -306.3081, 15.8);
  $.goon_at_yard1.clearThreatSearch();
  $.goon_at_yard1.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard1.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard1.setUsePednodeSeek(false /* FALSE */);
  // area 1 chatting
  $.goon_at_yard2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 341.5678, -306.8592, 15.8);
  $.goon_at_yard2.clearThreatSearch();
  $.goon_at_yard2.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard2.turnToFaceChar($.goon_at_yard1);
  $.goon_at_yard1.turnToFaceChar($.goon_at_yard2);
  Game.SetCharsChatting($.goon_at_yard2, $.goon_at_yard1, 10000000);
  $.goon_at_yard2.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard2.setUsePednodeSeek(false /* FALSE */);
  // by concrete area
  $.goon_at_yard3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 327.7796, -316.6461, 15.9);
  $.goon_at_yard3.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_at_yard3.clearThreatSearch();
  $.goon_at_yard3.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard3.setHeading(315.0);
  $.goon_at_yard3.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard3.setUsePednodeSeek(false /* FALSE */);
  // by pile of wood SW
  $.goon_at_yard4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 335.0769, -338.2184, 15.8);
  $.goon_at_yard4.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_at_yard4.clearThreatSearch();
  $.goon_at_yard4.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard4.setHeading(25.0);
  $.goon_at_yard4.setWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 10000000);
  $.goon_at_yard4.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard4.setUsePednodeSeek(false /* FALSE */);
  // by wooden steps
  $.goon_at_yard5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 348.7184, -320.0932, 15.8);
  $.goon_at_yard5.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_at_yard5.clearThreatSearch();
  $.goon_at_yard5.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard5.setHeading(250.0);
  $.goon_at_yard5.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard5.setUsePednodeSeek(false /* FALSE */);
  // by concrete steps
  $.goon_at_yard6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 357.1986, -319.7162, 15.9);
  $.goon_at_yard6.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_at_yard6.clearThreatSearch();
  $.goon_at_yard6.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard6.setHeading(250.0);
  $.goon_at_yard6.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard6.setUsePednodeSeek(false /* FALSE */);
  // behind last box
  $.goon_at_yard7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 358.6874, -340.7191, 16.0);
  $.goon_at_yard7.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  $.goon_at_yard7.clearThreatSearch();
  $.goon_at_yard7.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard7.setHeading(90.0);
  $.goon_at_yard7.setStayInSamePlace(true /* TRUE */);
  $.goon_at_yard7.setUsePednodeSeek(false /* FALSE */);
  // by last box
  $.goon_at_yard8 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 360.1730, -336.0494, 16.0);
  $.goon_at_yard8.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  Path.AddRoutePoint($.yard_route3, 360.1730, -336.0494, 16.0);
  Path.AddRoutePoint($.yard_route3, 372.2496, -335.3521, 17.0);
  $.goon_at_yard8.setObjFollowRoute($.yard_route3, 2 /* FOLLOW_ROUTE_BACKFORWARD */);
  $.goon_at_yard8.clearThreatSearch();
  $.goon_at_yard8.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard8.setUsePednodeSeek(false /* FALSE */);
  // behind lift
  $.goon_at_yard9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 374.7956, -340.4126, 16.0);
  $.goon_at_yard9.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
  Path.AddRoutePoint($.yard_route2, 374.7956, -340.4126, 16.0);
  Path.AddRoutePoint($.yard_route2, 375.2283, -316.6560, 18.3);
  $.goon_at_yard9.setObjFollowRoute($.yard_route2, 2 /* FOLLOW_ROUTE_BACKFORWARD */);
  $.goon_at_yard9.clearThreatSearch();
  $.goon_at_yard9.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard9.setUsePednodeSeek(false /* FALSE */);
  // on building near maze
  $.goon_at_yard10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 391.0353, -298.6616, 17.2);
  $.goon_at_yard10.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
  Path.AddRoutePoint($.yard_route1, 391.0353, -298.6616, 17.2);
  Path.AddRoutePoint($.yard_route1, 372.7149, -298.7406, 17.2);
  $.goon_at_yard10.setObjFollowRoute($.yard_route1, 2 /* FOLLOW_ROUTE_BACKFORWARD */);
  $.goon_at_yard10.clearThreatSearch();
  $.goon_at_yard10.setThreatSearch(0 /* THREAT_PLAYER1 */);
  $.goon_at_yard10.setHeedThreats(true /* TRUE */);
  $.goon_at_yard10.setUsePednodeSeek(false /* FALSE */);
  //LIFT
  // AREA 1
  // AREA 2
  // AREA 3
  // AREA 4
  // AREA 5
  // AREA 6
  //GET INTO THE LIFT
  while (!($.player.locateOnFoot3D(366.939, -328.025, 20.268, 1.0, 1.0, 2.0, true))) {
    await asyncWait(0);
    if ($.c_site_area_flag == 0) {
      if (Char.IsDead($.goon_at_yard1)) {
        $.c_site_area_flag = 1;
      }
      if (Char.IsDead($.goon_at_yard2)) {
        $.c_site_area_flag = 1;
      }
      if (Char.IsDead($.goon_at_yard3)) {
        $.c_site_area_flag = 2;
      }
      if (Char.IsDead($.goon_at_yard4)) {
        $.c_site_area_flag = 3;
      }
      if (Char.IsDead($.goon_at_yard5)) {
        $.c_site_area_flag = 5;
      }
      if (Char.IsDead($.goon_at_yard6)) {
        $.c_site_area_flag = 6;
      }
      if (Char.IsDead($.goon_at_yard7)) {
        $.c_site_area_flag = 4;
      }
      if (Char.IsDead($.goon_at_yard8)) {
        $.c_site_area_flag = 4;
      }
      if (Char.IsDead($.goon_at_yard9)) {
        $.c_site_area_flag = 5;
      }
    }
    // AREA 1
    if ($.c_site_area_flag == 0) {
      // AREA 1
      if ($.player.isInArea2D(331.8, -303.2, 354.5, -280.2, false)) {
        $.c_site_area_flag = 1;
      }
    }
    // AREA 2
    if ($.c_site_area_flag == 1) {
      // AREA 2
      if ($.player.isInArea2D(334.4, -314.6, 348.2, -303.2, false)) {
        $.c_site_area_flag = 2;
      }
    }
    // AREA 3
    if ($.c_site_area_flag == 2) {
      // AREA 3
      if ($.player.isInArea2D(326.4, -327.9, 334.4, -303.2, false)) {
        $.c_site_area_flag = 3;
      }
    }
    // AREA 4
    if ($.c_site_area_flag == 3) {
      // AREA 4
      if ($.player.isInArea2D(326.4, -341.8, 334.4, -327.9, false)) {
        $.c_site_area_flag = 4;
      }
    }
    // AREA 5
    if ($.c_site_area_flag == 4) {
      // AREA 5
      if ($.player.isInArea2D(334.4, -341.8, 355.9, -314.6, false)) {
        $.c_site_area_flag = 5;
      }
    }
    // AREA 6
    if ($.c_site_area_flag == 5) {
      // AREA 6
      if ($.player.isInArea2D(355.9, -341.8, 380.3, -314.6, false)) {
        $.c_site_area_flag = 6;
      }
    }
    $.game_timer_var = Clock.GetGameTimer();
    // SCM GOSUB goon_at_yard1_routine
    await goon_at_yard1_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard2_routine
    await goon_at_yard2_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard3_routine
    await goon_at_yard3_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard4_routine
    await goon_at_yard4_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard5_routine
    await goon_at_yard5_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard6_routine
    await goon_at_yard6_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard7_routine
    await goon_at_yard7_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard8_routine
    await goon_at_yard8_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard9_routine
    await goon_at_yard9_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB goon_at_yard10_routine
    await goon_at_yard10_routine();
    // fallback if label was not emitted as async function: no-op continues linearly
    //GET INTO THE LIFT
    if (Char.IsDead($.goon_at_yard1) && Char.IsDead($.goon_at_yard2) && Char.IsDead($.goon_at_yard3) && Char.IsDead($.goon_at_yard4) && Char.IsDead($.goon_at_yard5)) {
      //GET INTO THE LIFT
      if (Char.IsDead($.goon_at_yard6) && Char.IsDead($.goon_at_yard7) && Char.IsDead($.goon_at_yard8) && Char.IsDead($.goon_at_yard9)) {
        if ($.reset_timera_flag == 0) {
          TIMERA = 0;
          $.reset_timera_flag = 1;
        }
        //GET INTO THE LIFT
        if (TIMERA > 10000 && $.reset_timera_flag == 1) {
          //GET INTO THE LIFT
          Text.PrintNow(LOVE4_6, 10000, 1);
          $.reset_timera_flag = 2;
        }
      }
    }
  }
  // ****************************************START OF CUTSCENE********************************
  $.love_4_blip.remove();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  $.break_timer_start = Clock.GetGameTimer();
  $.break_timer = 0;
  //	If player is not in control after 5 secs do the cutscene anyway
  while (!($.player.canStartMission()) && $.break_timer < 5000) {
    await asyncWait(0);
    $.break_timer = Clock.GetGameTimer();
    $.break_timer = $.break_timer - $.break_timer_start;
  }
  $.player.makeSafeForCutscene();
  Streaming.LoadSpecialCharacter(1, cat);
  Streaming.LoadSpecialCharacter(2, $.miguel);
  Streaming.LoadSpecialCharacter(3, $.asuka);
  //lift
  Streaming.LoadSpecialModel(hier`cutobj01`, d4props);
  Streaming.LoadSpecialModel(hier`cutobj02`, cath);
  Streaming.LoadSpecialModel(hier`cutobj03`, asukah);
  Streaming.LoadSpecialModel(hier`cutobj04`, miguelh);
  Streaming.LoadSpecialModel(hier`cutobj05`, $.lift);
  Streaming.RequestModel(csitecutscene);
  Streaming.Switch(false /* OFF */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(hier`cutobj05`)) || !(Streaming.HasModelLoaded(csitecutscene))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(374.7956, -340.4126, 16.0, 16.0, 2002 /* scaffoldlift */, false /* FALSE */);
  Cutscene.Load(D4_GTA2);
  Cutscene.SetOffset(369.02, -327.5, 18.46);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);
  $.cs_catalina = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_catalina.setAnim(cat);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_miguel.setAnim($.miguel);
  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_asuka.setAnim($.asuka);
  $.cs_whip = CutsceneObject.Create(hier`cutobj01`);
  $.cs_whip.setAnim(d4props);
  $.cs_lift = CutsceneObject.Create(hier`cutobj05`);
  $.cs_lift.setAnim($.lift);
  $.cs_cathead = CutsceneHead.Create($.cs_catalina, hier`cutobj02`);
  $.cs_cathead.setAnim(cat);
  $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj03`);
  $.cs_asukahead.setAnim($.asuka);
  $.cs_mariahead = CutsceneHead.Create($.cs_miguel, hier`cutobj04`);
  //CREATE_CUTSCENE_OBJECT cut_obj2 cs_loot
  //SET_CUTSCENE_ANIM cs_loot cs_loot
  //
  //CREATE_CUTSCENE_OBJECT cut_obj3 cs_colt1
  //SET_CUTSCENE_ANIM cs_colt1 colt1
  //CREATE_CUTSCENE_OBJECT cut_obj4 cs_colt2
  //SET_CUTSCENE_ANIM cs_colt2 colt2
  //CREATE_CUTSCENE_OBJECT cut_obj5 cs_whip
  //SET_CUTSCENE_ANIM cs_whip whip
  $.cs_mariahead.setAnim($.miguel);
  $.player.setCoordinates(373.7523, -327.2676, 17.1950);
  $.player.setHeading(270.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 15386) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Hey, let's get this out of here. God knows what it is
  Text.PrintNow(GTAB_A, 15000, 1);
  while ($.cs_time < 18600) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //but he seems to want it badly enough so it must be worth something.
  Text.PrintNow(GTAB_B, 15000, 1);
  while ($.cs_time < 21318) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Who the Heck!
  Text.PrintNow(GTAB_C, 15000, 1);
  while ($.cs_time < 21933) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  $.particle_x = 369.02 - 0.0051;
  $.particle_y = -327.5 - 1.2746;
  $.particle_z = 18.46 + 48.3784;
  $.particle_target_x = 369.02 - 0.0489;
  $.particle_target_y = -327.5 - 1.4178;
  $.particle_target_z = 18.46 + 48.6197;
  $.temp_var = $.particle_target_x;
  $.particle_target_x = $.particle_x - $.temp_var;
  $.temp_var = $.particle_target_y;
  $.particle_target_y = $.particle_y - $.temp_var;
  $.temp_var = $.particle_target_z;
  $.particle_target_z = $.particle_z - $.temp_var;
  Fx.AddMovingParticleEffect(18 /* POBJECT_CATALINAS_GUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
  while ($.cs_time < 22167) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  $.particle_x = 369.02 + 0.2698;
  $.particle_y = -327.5 - 1.3691;
  $.particle_z = 18.46 + 48.2923;
  $.particle_target_x = 369.02 + 0.1917;
  $.particle_target_y = -327.5 - 1.5893;
  $.particle_target_z = 18.46 + 48.4539;
  $.temp_var = $.particle_target_x;
  $.particle_target_x = $.particle_x - $.temp_var;
  $.temp_var = $.particle_target_y;
  $.particle_target_y = $.particle_y - $.temp_var;
  $.temp_var = $.particle_target_z;
  $.particle_target_z = $.particle_z - $.temp_var;
  Fx.AddMovingParticleEffect(18 /* POBJECT_CATALINAS_GUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
  while ($.cs_time < 22428) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //YOU!
  Text.PrintNow(GTAB_D, 15000, 1);
  while ($.cs_time < 23270) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Hey take it easy amigo! De nada! De nada!
  Text.PrintNow(GTAB_E, 15000, 1);
  while ($.cs_time < 26829) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I left you pouring your heart out into the gutter!
  Text.PrintNow(GTAB_F, 15000, 1);
  while ($.cs_time < 29508) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Don't shoot amigo. No problem. We all friends. Here, take this.
  Text.PrintNow(GTAB_G, 15000, 1);
  while ($.cs_time < 33871) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Don't be such a pussy!
  Text.PrintNow(GTAB_H, 15000, 1);
  while ($.cs_time < 35408) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //We got no choice baby!
  Text.PrintNow(GTAB_I, 15000, 1);
  while ($.cs_time < 36700) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  $.particle_x = 369.02 + 2.467;
  $.particle_y = -327.5 - 3.9022;
  $.particle_z = 18.46 + 47.1884;
  $.particle_target_x = 369.02 + 2.577;
  $.particle_target_y = -327.5 - 3.6573;
  $.particle_target_z = 18.46 + 47.0965;
  $.temp_var = $.particle_target_x;
  $.particle_target_x = $.particle_x - $.temp_var;
  $.temp_var = $.particle_target_y;
  $.particle_target_y = $.particle_y - $.temp_var;
  $.temp_var = $.particle_target_z;
  $.particle_target_z = $.particle_z - $.temp_var;
  Fx.AddMovingParticleEffect(18 /* POBJECT_CATALINAS_GUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
  if (Game.IsNasty()) {
    $.particle_x = 369.02 + 2.4406;
    $.particle_y = -327.5 - 3.8711;
    $.particle_z = 18.46 + 47.2215;
    $.particle_target_x = 369.02 + 2.3762;
    $.particle_target_y = -327.5 - 4.065;
    $.particle_target_z = 18.46 + 47.3184;
    $.temp_var = $.particle_target_x;
    $.particle_target_x = $.particle_x - $.temp_var;
    $.temp_var = $.particle_target_y;
    $.particle_target_y = $.particle_y - $.temp_var;
    $.temp_var = $.particle_target_z;
    $.particle_target_z = $.particle_z - $.temp_var;
    $.particle_target_x -= $.particle_x;
    $.particle_target_y -= $.particle_y;
    $.particle_target_z -= $.particle_z;
    $.particle_target_x *= 0.05;
    $.particle_target_y *= 0.05;
    $.particle_target_z *= 0.05;
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(5 /* PARTICLE_BLOOD_SMALL */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 0.0);
    Fx.CreateSingleParticle(65 /* PARTICLE_TEST */, $.particle_x, $.particle_y, $.particle_z, 0.0, 0.0, 0.0, 0.2);
  }
  while ($.cs_time < 37627) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //We always got a choice you dumb bastard!
  Text.PrintNow(GTAB_J, 15000, 1);
  while ($.cs_time < 41684) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I'm sorry about that crazy bitch man, they all the same�..por favor??
  Text.PrintNow(GTAB_K, 15000, 1);
  while ($.cs_time < 46468) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //So the whore got away.
  Text.PrintNow(GTAB_L, 15000, 1);
  while ($.cs_time < 48918) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //But you've done me a favour,
  Text.PrintNow(GTAB_M, 15000, 1);
  while ($.cs_time < 50755) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //you're not the only one that has a score to settle with the Cartel -
  Text.PrintNow(GTAB_N, 15000, 1);
  while ($.cs_time < 54352) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //this worm killed my brother!
  Text.PrintNow(GTAB_O, 15000, 1);
  while ($.cs_time < 56266) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I never killed no Yakuza!
  Text.PrintNow(GTAB_P, 15000, 1);
  while ($.cs_time < 57299) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //LIAR! We all saw the Cartel assassin.
  Text.PrintNow(GTAB_Q, 15000, 1);
  while ($.cs_time < 60721) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //We are going to hunt down and kill all you Colombian dogs!
  Text.PrintNow(GTAB_R, 15000, 1);
  while ($.cs_time < 64778) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I'll be operating on our friend here to extract information and a little pleasure.
  Text.PrintNow(GTAB_S, 15000, 1);
  while ($.cs_time < 70710) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //You, drop by later, I'm sure I'll require your services.
  Text.PrintNow(GTAB_T, 15000, 1);
  while ($.cs_time < 75150) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //Please amigo, don't leave me with her, she psycho chica! Amigo? Hey AMEEEGO!!! ��.Aiiieeeeaaargghh!
  Text.PrintNow(GTAB_U, 15000, 1);
  while ($.cs_time < 86666) {
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
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.MarkModelAsNoLongerNeeded(csitecutscene);
  Streaming.RequestModel(car`YAKUZA`);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(car`YAKUZA`)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(374.7956, -340.4126, 16.0, 16.0, 2002 /* scaffoldlift */, true /* TRUE */);
  Camera.SetBehindPlayer();
  if (Object.DoesExist($.inside_fence)) {
    $.inside_fence.delete();
  }
  if (Object.DoesExist($.outside_fence)) {
    $.outside_fence.delete();
  }
  $.inside_fence = Object.CreateNoOffset(1410 /* broken_inside */, 362.827, -341.362, 17.375);
  $.inside_fence.dontRemove();
  $.outside_fence = Object.CreateNoOffset(1411 /* broken_outside */, 360.852, -390.891, 22.622);
  $.outside_fence.dontRemove();
  // out front
  $.yakuza_car1 = Car.Create(129 /* CAR_YAKUZA */, 339.8449, -290.6314, 16.0);
  // out front
  $.yakuza_car2 = Car.Create(129 /* CAR_YAKUZA */, 359.1079, -291.0880, 16.0);
  // smash fence car
  $.yakuza_car3 = Car.Create(129 /* CAR_YAKUZA */, 363.6012, -339.1167, 16.0);
  $.yakuza_car1.setHeading(158.2191);
  $.yakuza_car2.setHeading(146.8412);
  $.yakuza_car3.setHeading(339.3615);
  $.yakuza_guard1 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 367.3908, -334.2422, 16.1);
  $.yakuza_guard1.giveWeapon(3 /* WEAPONTYPE_UZI */, 300);
  $.yakuza_guard1.setHeedThreats(true /* TRUE */);
  $.yakuza_guard2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 367.6573, -337.8994, 16.1);
  $.yakuza_guard2.giveWeapon(3 /* WEAPONTYPE_UZI */, 300);
  $.yakuza_guard2.turnToFaceChar($.yakuza_guard1);
  $.yakuza_guard1.turnToFaceChar($.yakuza_guard2);
  $.yakuza_guard2.setHeedThreats(true /* TRUE */);
  Game.SetCharsChatting($.yakuza_guard1, $.yakuza_guard2, 10000000);
  $.yakuza_guard3 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 361.8262, -345.2548, 16.0);
  $.yakuza_guard3.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 300);
  $.yakuza_guard3.setHeading(170.0);
  $.yakuza_guard3.setHeedThreats(true /* TRUE */);
  $.yakuza_guard4 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 335.5756, -295.7485, 16.0);
  $.yakuza_guard4.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 300);
  $.yakuza_guard4.setHeading(237.0);
  $.yakuza_guard4.setHeedThreats(true /* TRUE */);
  $.yakuza_guard5 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 335.8966, -298.0577, 16.0);
  $.yakuza_guard5.giveWeapon(3 /* WEAPONTYPE_UZI */, 300);
  $.yakuza_guard5.setHeading(129.0);
  $.yakuza_guard5.setStayInSamePlace(true /* TRUE */);
  $.yakuza_guard5.setHeedThreats(true /* TRUE */);
  if (!(Char.IsDead($.goon_at_yard1))) {
    $.goon_at_yard1.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard2))) {
    $.goon_at_yard2.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard3))) {
    $.goon_at_yard3.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard4))) {
    $.goon_at_yard4.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard5))) {
    $.goon_at_yard5.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard6))) {
    $.goon_at_yard6.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard7))) {
    $.goon_at_yard7.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard8))) {
    $.goon_at_yard8.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard9))) {
    $.goon_at_yard9.explodeHead();
  }
  if (!(Char.IsDead($.goon_at_yard10))) {
    $.goon_at_yard10.explodeHead();
  }
  Streaming.Switch(true /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // ******************************************END OF CUTSCENE********************************
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  //"Take the package to Love."
  Text.PrintNow(LOVE4_4, 5000, 1);
  if (!(Car.IsDead($.colombian_car))) {
    if (!(Char.IsDead($.yakuza_guard5))) {
      $.colombian_car.setHealth(2500);
      $.yakuza_guard5.setObjDestroyCar($.colombian_car);
    }
  }
  // LOVES PAD
  $.love_4_blip = Blip.AddForCoord(87.3, -1548.6, 27.255);
  while (!($.player.locateStoppedOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, true))) {
    await asyncWait(0);
  }
  $.yakuza_car1.markAsNoLongerNeeded();
  $.yakuza_car2.markAsNoLongerNeeded();
  $.yakuza_car3.markAsNoLongerNeeded();
  $.car_van1_lm4.markAsNoLongerNeeded();
  $.car_van2_lm4.markAsNoLongerNeeded();
  $.colombian_car.markAsNoLongerNeeded();
  $.yakuza_guard1.markAsNoLongerNeeded();
  $.yakuza_guard2.markAsNoLongerNeeded();
  $.yakuza_guard3.markAsNoLongerNeeded();
  $.yakuza_guard4.markAsNoLongerNeeded();
  $.yakuza_guard5.markAsNoLongerNeeded();
  $.goon_at_yard1.markAsNoLongerNeeded();
  $.goon_at_yard2.markAsNoLongerNeeded();
  $.goon_at_yard3.markAsNoLongerNeeded();
  $.goon_at_yard4.markAsNoLongerNeeded();
  $.goon_at_yard5.markAsNoLongerNeeded();
  $.goon_at_yard6.markAsNoLongerNeeded();
  $.goon_at_yard7.markAsNoLongerNeeded();
  $.goon_at_yard8.markAsNoLongerNeeded();
  $.goon_at_yard9.markAsNoLongerNeeded();
  $.goon_at_yard10.markAsNoLongerNeeded();
  $.player.setControl(false /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, true /* ON */);
  Game.SetAllCarsCanBeDamaged(false /* FALSE */);
  $.player.clearWantedLevel();
  Camera.SetFixedPosition(81.3343, -1540.0887, 27.7976, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(81.8719, -1540.9318, 27.8039, 2 /* JUMP_CUT */);
  Hud.SwitchWidescreen(true /* ON */);
  $.script_controlled_player = $.player.getChar();
  $.script_controlled_player.setObjRunToCoord(87.4588, -1548.7035);
  TIMERA = 0;
  while (!($.player.locateOnFoot2D(87.4588, -1548.7035, 1.0, 1.0, false))) {
    await asyncWait(0);
    if (TIMERA > 3000) {
      // SCM GOTO → get_out_of_loop (not lowered; manual jump required)
      throw new Error("unresolved GOTO get_out_of_loop"); // fallback: would break linear control flow
    }
  }
}

async function get_out_of_loop() {
  $.script_controlled_player.setObjRunToCoord(98.7615, -1548.6489);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  World.ClearArea(87.3, -1548.6, 28.3, 2.0, false);
  $.script_controlled_player.setObjNoObj();
  $.script_controlled_player.setIdle();
  $.script_controlled_player.setObjRunToCoord(81.2603, -1548.9347);
  $.script_controlled_player.setObjNoObj();
  $.script_controlled_player.setIdle();
  await asyncWait(250);
  $.player.setCoordinates(81.2603, -1548.9347, 27.4);
  $.player.setHeading(90.0);
  Camera.RestoreJumpcut();
  Hud.SwitchWidescreen(false /* OFF */);
  $.player.setControl(true /* ON */);
  Camera.SetInFrontOfPlayer();
  Game.SetEveryoneIgnorePlayer($.player, false /* OFF */);
  Game.SetAllCarsCanBeDamaged(true /* TRUE */);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  // Mission Love 4 failed
  // SCM GOTO → mission_love4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love4_passed"); // fallback: would break linear control flow
}

async function mission_love4_failed() {
  Text.PrintBig(M_FAIL, 2000, 1);
  // mission Love 4 passed
  return;
}

async function mission_love4_passed() {
  $.flag_love_mission4_passed = 1;
  $.com_car37.switch(0);
  $.com_car38.switch(0);
  $.gen_car60.switch(101);
  $.gen_car61.switch(101);
  $.gen_car62.switch(101);
  $.gen_car63.switch(101);
  //Commercial to Suburbia Bridge
  Path.SwitchRoadsOn(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  $.asuka_contact_blip.remove();
  Text.PrintWithNumberBig(M_PASS, 50000, 2000, 1);
  $.player.addScore(50000);
  $.player.clearWantedLevel();
  Stat.RegisterMissionPassed(LOVE4);
  //Fort staunton
  Zone.SetPedInfo("CONSTRU", 1 /* DAY */, 30, 0, 0, 0, 250, 0, 50, 0, 20);
  Zone.SetPedInfo("CONSTRU", 0 /* NIGHT */, 15, 0, 0, 0, 300, 0, 70, 0, 10);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  $.asuka_contact_blip = Blip.AddSpriteForContactPoint(366.939, -328.025, 20.268, 1 /* RADAR_SPRITE_ASUKA */);
  // START_NEW_SCRIPT asuka_suburban_mission1_loop
  // START_NEW_SCRIPT love_mission5_loop
  // mission cleanup
  return;
}

async function mission_cleanup_love4() {
  $.love_4_blip.remove();
  $.goon_in_hangar1_blip.remove();
  $.goon_in_hangar2_blip.remove();
  $.goon_in_hangar3_blip.remove();
  $.goon_in_hangar4_blip.remove();
  Path.RemoveRoute($.hangar_route);
  Path.RemoveRoute($.yard_route1);
  Path.RemoveRoute($.yard_route2);
  Path.RemoveRoute($.yard_route3);
  Streaming.MarkModelAsNoLongerNeeded(car`PANLANT`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`DODO`);
  Streaming.MarkModelAsNoLongerNeeded(car`YAKUZA`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  $.deadman1.markAsNoLongerNeeded();
  //SET_TARGET_CAR_FOR_MISSION_GARAGE loves_garage -1
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  Mission.Finish();
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function set_death_flags() {
  if ($.goon_in_hangar1_flag == -1) {
    $.goon_in_hangar1_flag = 0;
  }
  if ($.goon_in_hangar1_ducking == -1) {
    $.goon_in_hangar1_ducking = 0;
  }
  if ($.goon_in_hangar2_flag == -1) {
    $.goon_in_hangar2_flag = 0;
  }
  if ($.goon_in_hangar2_ducking == -1) {
    $.goon_in_hangar2_ducking = 0;
  }
  if ($.goon_in_hangar3_flag == -1) {
    $.goon_in_hangar3_flag = 0;
  }
  if ($.goon_in_hangar3_ducking == -1) {
    $.goon_in_hangar3_ducking = 0;
  }
  if ($.goon_in_hangar4_flag == -1) {
    $.goon_in_hangar4_flag = 0;
  }
  if ($.goon_in_hangar4_ducking == -1) {
    $.goon_in_hangar4_ducking = 0;
  }
  //"KILL them all!!"
  if ($.goon_in_hangar1_blip_flag == 0) {
    //"KILL them all!!"
    if (!(Char.IsDead($.goon_in_hangar1))) {
      $.goon_in_hangar1_blip = Blip.AddForChar($.goon_in_hangar1);
      //"KILL them all!!"
      Text.PrintNow(LOVE4_1, 5000, 1);
      $.goon_in_hangar1_blip_flag = 1;
    }
  }
  //"KILL them all!!"
  if ($.goon_in_hangar2_blip_flag == 0) {
    //"KILL them all!!"
    if (!(Char.IsDead($.goon_in_hangar2))) {
      $.goon_in_hangar2_blip = Blip.AddForChar($.goon_in_hangar2);
      //"KILL them all!!"
      Text.PrintNow(LOVE4_1, 5000, 1);
      $.goon_in_hangar2_blip_flag = 1;
    }
  }
  //"KILL them all!!"
  if ($.goon_in_hangar3_blip_flag == 0) {
    //"KILL them all!!"
    if (!(Char.IsDead($.goon_in_hangar3))) {
      $.goon_in_hangar3_blip = Blip.AddForChar($.goon_in_hangar3);
      //"KILL them all!!"
      Text.PrintNow(LOVE4_1, 5000, 1);
      $.goon_in_hangar3_blip_flag = 1;
    }
  }
  //"KILL them all!!"
  if ($.goon_in_hangar4_blip_flag == 0) {
    //"KILL them all!!"
    if (!(Char.IsDead($.goon_in_hangar4))) {
      $.goon_in_hangar4_blip = Blip.AddForChar($.goon_in_hangar4);
      //"KILL them all!!"
      Text.PrintNow(LOVE4_1, 5000, 1);
      $.goon_in_hangar4_blip_flag = 1;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function ducking_routine() {
  if (TIMERA > 3000) {
    if ($.ducking_flag == 0) {
      $.ducking_flag = 1;
    }
    else {
      $.ducking_flag = 0;
    }
    TIMERA = 0;
  }
  if ($.goon_in_hangar1_ducking == 1) {
    if ($.ducking_flag == 0) {
      if ($.goon_in_hangar1.locateStoppedOnFoot2D(-1280.2, -520.1, 1.5, 1.5, false)) {
        $.goon_in_hangar1.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar1.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_in_hangar1.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_in_hangar1.setObjKillPlayerOnFoot($.player);
        }
        $.goon_in_hangar1_waitstate = 0;
      }
      else {
        $.goon_in_hangar1.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar1.setObjRunToCoord(-1280.2, -520.1);
      }
    }
    else {
      if ($.goon_in_hangar1.locateStoppedOnFoot2D(-1280.2, -520.1, 1.5, 1.5, false)) {
        if ($.goon_in_hangar1_waitstate == 0) {
          $.goon_in_hangar1.setStayInSamePlace(true /* TRUE */);
          $.goon_in_hangar1.setObjWaitOnFoot();
          $.goon_in_hangar1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
          $.goon_in_hangar1_waitstate = 1;
        }
      }
      else {
        $.goon_in_hangar1.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar1.setObjRunToCoord(-1280.2, -520.1);
      }
    }
  }
  if ($.goon_in_hangar2_ducking == 1) {
    if ($.ducking_flag == 0) {
      if ($.goon_in_hangar2.locateStoppedOnFoot2D(-1256.4, -521.3, 1.5, 1.5, false)) {
        $.goon_in_hangar2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar2.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_in_hangar2.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_in_hangar2.setObjKillPlayerOnFoot($.player);
        }
        $.goon_in_hangar2_waitstate = 0;
      }
      else {
        $.goon_in_hangar2.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar2.setObjRunToCoord(-1256.4, -521.3);
      }
    }
    else {
      if ($.goon_in_hangar2.locateStoppedOnFoot2D(-1256.4, -521.3, 1.5, 1.5, false)) {
        if ($.goon_in_hangar2_waitstate == 0) {
          $.goon_in_hangar2.setStayInSamePlace(true /* TRUE */);
          $.goon_in_hangar2.setObjWaitOnFoot();
          $.goon_in_hangar2.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
          $.goon_in_hangar2_waitstate = 1;
        }
      }
      else {
        $.goon_in_hangar2.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar2.setObjRunToCoord(-1256.4, -521.3);
      }
    }
  }
  if ($.goon_in_hangar3_ducking == 1) {
    if ($.ducking_flag == 1) {
      if ($.goon_in_hangar3.locateStoppedOnFoot2D(-1254.4, -521.3, 1.5, 1.5, false)) {
        $.goon_in_hangar3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar3.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_in_hangar3.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_in_hangar3.setObjKillPlayerOnFoot($.player);
        }
        $.goon_in_hangar3_waitstate = 0;
      }
      else {
        $.goon_in_hangar3.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar3.setObjRunToCoord(-1254.4, -521.3);
      }
    }
    else {
      if ($.goon_in_hangar3.locateStoppedOnFoot2D(-1254.4, -521.3, 1.5, 1.5, false)) {
        if ($.goon_in_hangar3_waitstate == 0) {
          $.goon_in_hangar3.setStayInSamePlace(true /* TRUE */);
          $.goon_in_hangar3.setObjWaitOnFoot();
          $.goon_in_hangar3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
          $.goon_in_hangar3_waitstate = 1;
        }
      }
      else {
        $.goon_in_hangar3.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar3.setObjRunToCoord(-1254.4, -521.3);
      }
    }
  }
  if ($.goon_in_hangar4_ducking == 1) {
    if ($.ducking_flag == 1) {
      if ($.goon_in_hangar4.locateStoppedOnFoot2D(-1280.8, -529.2, 1.5, 1.5, false)) {
        $.goon_in_hangar4.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_in_hangar4.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_in_hangar4.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_in_hangar4.setObjKillPlayerOnFoot($.player);
        }
        $.goon_in_hangar4_waitstate = 0;
      }
      else {
        $.goon_in_hangar4.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar4.setObjRunToCoord(-1280.8, -529.2);
      }
    }
    else {
      if ($.goon_in_hangar4.locateStoppedOnFoot2D(-1280.8, -529.2, 1.5, 1.5, false)) {
        if ($.goon_in_hangar4_waitstate == 0) {
          $.goon_in_hangar4.setStayInSamePlace(true /* TRUE */);
          $.goon_in_hangar4.setObjWaitOnFoot();
          $.goon_in_hangar4.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
          $.goon_in_hangar4_waitstate = 1;
        }
      }
      else {
        $.goon_in_hangar4.setStayInSamePlace(false /* FALSE */);
        $.goon_in_hangar4.setObjRunToCoord(-1280.8, -529.2);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard1_routine() {
  // IS_CHAR_DEAD goon_at_yard1
  if ($.c_site_area_flag > 0) {
    // IS_CHAR_DEAD goon_at_yard1
    if (!(Char.IsDead($.goon_at_yard1))) {
      if ($.goon_at_yard1_flag == 0) {
        $.goon_at_yard1.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard1.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard1.giveWeapon(6 /* WEAPONTYPE_M16 */, 9999);
        $.goon_at_yard1.setObjRunToCoord(345.0805, -309.6011);
        $.goon_at_yard1_flag = 1;
      }
      if ($.goon_at_yard1_flag == 1) {
        if ($.goon_at_yard1.locateOnFoot2D(345.0805, -309.6011, 1.0, 1.0, false)) {
          $.goon_at_yard1.setObjRunToCoord(345.3315, -313.2216);
          $.goon_at_yard1_flag = 2;
        }
      }
      if ($.goon_at_yard1_flag == 2) {
        if ($.goon_at_yard1.locateOnFoot2D(345.3315, -313.2216, 1.0, 1.0, false)) {
          $.goon_at_yard1.setObjRunToCoord(342.1783, -312.7577);
          $.goon_at_yard1_flag = 3;
        }
      }
      if ($.goon_at_yard1_flag == 3) {
        if ($.goon_at_yard1.locateStoppedOnFoot2D(342.1783, -312.7577, 1.0, 1.0, false)) {
          $.goon_at_yard1.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard1_flag = 4;
        }
      }
      if ($.goon_at_yard1_flag == 4) {
        if ($.game_timer_var > $.goon_at_yard1_duck_timer) {
          $.goon_at_yard1_duck_timer = $.game_timer_var + 3000;
          if ($.goon_at_yard1_duck == 0) {
            $.goon_at_yard1.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard1.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard1.setObjKillPlayerOnFoot($.player);
            }
            if ($.c_site_area_flag == 1) {
              $.goon_at_yard1_duck = 1;
            }
          }
          else {
            $.goon_at_yard1.setObjWaitOnFoot();
            $.goon_at_yard1.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
            $.goon_at_yard1_duck = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard2_routine() {
  // IS_CHAR_DEAD goon_at_yard2
  if ($.c_site_area_flag > 0) {
    // IS_CHAR_DEAD goon_at_yard2
    if (!(Char.IsDead($.goon_at_yard2))) {
      if ($.goon_at_yard2_flag == 0) {
        $.goon_at_yard2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard2.giveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
        $.goon_at_yard2.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_at_yard2.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_at_yard2.setObjKillPlayerOnFoot($.player);
        }
        $.goon_at_yard2_flag = 1;
        $.goon_at_yard2_duck_timer = $.game_timer_var + 2000;
      }
      if ($.goon_at_yard2_flag == 1) {
        if ($.game_timer_var > $.goon_at_yard2_duck_timer) {
          $.goon_at_yard2.setStayInSamePlace(false /* FALSE */);
          $.goon_at_yard2.setObjRunToCoord(333.6390, -307.5708);
          $.goon_at_yard2_flag = 2;
        }
      }
      if ($.goon_at_yard2_flag == 2) {
        if ($.goon_at_yard2.locateOnFoot2D(333.6390, -307.5708, 1.0, 1.0, false)) {
          $.goon_at_yard2.setObjRunToCoord(333.4980, -304.7924);
          $.goon_at_yard2_flag = 3;
        }
      }
      if ($.goon_at_yard2_flag == 3) {
        if ($.goon_at_yard2.locateStoppedOnFoot2D(333.4980, -304.7924, 1.0, 1.0, false)) {
          $.goon_at_yard2.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard2_flag = 4;
        }
      }
      if ($.goon_at_yard2_flag == 4) {
        if ($.game_timer_var > $.goon_at_yard2_duck_timer) {
          $.goon_at_yard2_duck_timer = $.game_timer_var + 3000;
          if ($.goon_at_yard2_duck == 0) {
            $.goon_at_yard2.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard2.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard2.setObjKillPlayerOnFoot($.player);
            }
            if ($.c_site_area_flag < 3) {
              $.goon_at_yard2_duck = 1;
            }
          }
          else {
            $.goon_at_yard2.setObjWaitOnFoot();
            $.goon_at_yard2.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
            $.goon_at_yard2_duck = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard3_routine() {
  if ($.c_site_area_flag > 1) {
    if (!(Char.IsDead($.goon_at_yard3))) {
      if ($.goon_at_yard3_flag == 0) {
        $.goon_at_yard3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard3.setStayInSamePlace(true /* TRUE */);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_at_yard3.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_at_yard3.setObjKillPlayerOnFoot($.player);
        }
        $.goon_at_yard3_flag = 1;
        $.goon_at_yard3_duck_timer = $.game_timer_var + 2000;
      }
      if ($.goon_at_yard3_flag == 1) {
        if ($.game_timer_var > $.goon_at_yard3_duck_timer) {
          $.goon_at_yard3.setStayInSamePlace(false /* FALSE */);
          $.goon_at_yard3.setObjRunToCoord(331.6994, -329.1375);
          $.goon_at_yard3_flag = 2;
        }
      }
      if ($.goon_at_yard3_flag == 2) {
        if ($.goon_at_yard3.locateOnFoot2D(331.6994, -329.1375, 1.0, 1.0, false)) {
          $.goon_at_yard3.setObjRunToCoord(327.6451, -329.1378);
          $.goon_at_yard3_flag = 3;
        }
      }
      if ($.goon_at_yard3_flag == 3) {
        if ($.goon_at_yard3.locateStoppedOnFoot2D(327.6451, -329.1378, 1.0, 1.0, false)) {
          $.goon_at_yard3.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard3_flag = 4;
        }
      }
      if ($.goon_at_yard3_flag == 4) {
        if ($.game_timer_var > $.goon_at_yard3_duck_timer) {
          $.goon_at_yard3_duck_timer = $.game_timer_var + 3000;
          if ($.goon_at_yard3_duck == 0) {
            $.goon_at_yard3.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard3.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard3.setObjKillPlayerOnFoot($.player);
            }
            if ($.c_site_area_flag < 4) {
              $.goon_at_yard3_duck = 1;
            }
          }
          else {
            $.goon_at_yard3.setObjWaitOnFoot();
            $.goon_at_yard3.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
            $.goon_at_yard3_duck = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard4_routine() {
  if ($.c_site_area_flag > 2) {
    if (!(Char.IsDead($.goon_at_yard4))) {
      if ($.goon_at_yard4_flag == 0) {
        $.goon_at_yard4.setStayInSamePlace(true /* TRUE */);
        $.goon_at_yard4.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        if ($.player.isInAnyCar()) {
          $.players_vehicle = $.player.storeCarIsIn();
          $.goon_at_yard4.setObjDestroyCar($.players_vehicle);
        }
        else {
          $.goon_at_yard4.setObjKillPlayerOnFoot($.player);
        }
        $.goon_at_yard4_flag = 1;
      }
      if ($.goon_at_yard4_flag == 1) {
        if ($.goon_at_yard4.hasSpottedPlayer($.player)) {
          $.goon_at_yard4_duck_timer = $.game_timer_var + 2000;
          $.goon_at_yard4_flag = 2;
        }
      }
      if ($.goon_at_yard4_flag == 2) {
        if ($.game_timer_var > $.goon_at_yard4_duck_timer) {
          $.goon_at_yard4.setStayInSamePlace(false /* FALSE */);
          $.goon_at_yard4.setObjRunToCoord(338.6765, -329.4054);
          $.goon_at_yard4_flag = 3;
        }
      }
      if ($.goon_at_yard4_flag == 3) {
        if ($.goon_at_yard4.locateStoppedOnFoot2D(338.6765, -329.4054, 1.0, 1.0, false)) {
          $.goon_at_yard4.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard4_flag = 4;
        }
      }
      if ($.goon_at_yard4_flag == 4) {
        if ($.game_timer_var > $.goon_at_yard4_duck_timer) {
          $.goon_at_yard4_duck_timer = $.game_timer_var + 3000;
          if ($.goon_at_yard4_duck == 0) {
            $.goon_at_yard4.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard4.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard4.setObjKillPlayerOnFoot($.player);
            }
            if ($.c_site_area_flag < 5) {
              $.goon_at_yard4_duck = 1;
            }
          }
          else {
            $.goon_at_yard4.setObjWaitOnFoot();
            $.goon_at_yard4.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
            $.goon_at_yard4_duck = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard5_routine() {
  if ($.c_site_area_flag > 3) {
    if (!(Char.IsDead($.goon_at_yard5))) {
      if ($.goon_at_yard5_flag == 0) {
        $.goon_at_yard5.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard5.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard5.setObjRunToCoord(354.6851, -325.3922);
        $.goon_at_yard5_flag = 1;
      }
      if ($.goon_at_yard5_flag == 1) {
        if ($.goon_at_yard5.locateOnFoot2D(354.6851, -325.3922, 1.0, 1.0, false)) {
          $.goon_at_yard5.setObjRunToCoord(345.9960, -325.4795);
          $.goon_at_yard5_flag = 2;
        }
      }
      if ($.goon_at_yard5_flag == 2) {
        if ($.goon_at_yard5.locateOnFoot2D(345.9960, -325.4795, 1.0, 1.0, false)) {
          $.goon_at_yard5.setObjRunToCoord(341.6781, -327.4943);
          $.goon_at_yard5_flag = 3;
        }
      }
      if ($.goon_at_yard5_flag == 3) {
        if ($.goon_at_yard5.locateStoppedOnFoot2D(341.6781, -327.4943, 1.0, 1.0, false)) {
          $.goon_at_yard5.setStayInSamePlace(true /* TRUE */);
          if ($.player.isInAnyCar()) {
            $.players_vehicle = $.player.storeCarIsIn();
            $.goon_at_yard5.setObjDestroyCar($.players_vehicle);
          }
          else {
            $.goon_at_yard5.setObjKillPlayerOnFoot($.player);
            $.goon_at_yard5_flag = 4;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard6_routine() {
  if ($.c_site_area_flag > 2) {
    if (!(Char.IsDead($.goon_at_yard6))) {
      if ($.goon_at_yard6_flag == 0) {
        $.goon_at_yard6.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard6.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard6.setObjRunToCoord(365.8858, -317.3099);
        $.goon_at_yard6_flag = 1;
      }
      if ($.goon_at_yard6_flag == 1) {
        if ($.goon_at_yard6.locateOnFoot2D(365.8858, -317.3099, 1.0, 1.0, false)) {
          $.goon_at_yard6.setObjRunToCoord(335.6921, -316.2758);
          $.goon_at_yard6_flag = 2;
        }
      }
      if ($.goon_at_yard6_flag == 2) {
        if ($.goon_at_yard6.locateStoppedOnFoot2D(335.6921, -316.2758, 1.0, 1.0, false)) {
          $.goon_at_yard6.setStayInSamePlace(true /* TRUE */);
          if ($.player.isInAnyCar()) {
            $.players_vehicle = $.player.storeCarIsIn();
            $.goon_at_yard6.setObjDestroyCar($.players_vehicle);
          }
          else {
            $.goon_at_yard6.setObjKillPlayerOnFoot($.player);
            $.goon_at_yard6_flag = 3;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard7_routine() {
  if ($.c_site_area_flag > 3) {
    if (!(Char.IsDead($.goon_at_yard7))) {
      if ($.game_timer_var > $.goon_at_yard7_duck_timer) {
        $.goon_at_yard7.setStayInSamePlace(true /* TRUE */);
        $.goon_at_yard7_duck_timer = $.game_timer_var + 3000;
        if ($.goon_at_yard7_duck == 0) {
          $.goon_at_yard7.setWaitState(0 /* WAITSTATE_FALSE */, 100);
          if ($.player.isInAnyCar()) {
            $.players_vehicle = $.player.storeCarIsIn();
            $.goon_at_yard7.setObjDestroyCar($.players_vehicle);
          }
          else {
            $.goon_at_yard7.setObjKillPlayerOnFoot($.player);
          }
          if ($.c_site_area_flag < 6) {
            $.goon_at_yard7_duck = 1;
          }
        }
        else {
          $.goon_at_yard7.setObjWaitOnFoot();
          $.goon_at_yard7.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
          $.goon_at_yard7_duck = 0;
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard8_routine() {
  //363.9961 -330.8928
  if ($.c_site_area_flag > 3) {
    //363.9961 -330.8928
    if (!(Char.IsDead($.goon_at_yard8))) {
      if ($.goon_at_yard8_flag == 0) {
        $.goon_at_yard8.setObjWaitOnFoot();
        $.goon_at_yard8.setIdle();
        Path.RemoveRoute($.yard_route3);
        $.goon_at_yard8.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard8.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard8.setObjRunToCoord(375.4750, -331.2);
        $.goon_at_yard8_flag = 1;
      }
      //363.9961 -330.8928
      if ($.goon_at_yard8_flag == 1) {
        //363.9961 -330.8928
        if ($.goon_at_yard8.locateOnFoot2D(375.4750, -331.2, 1.0, 1.0, false)) {
          //363.9961 -330.8928
          $.goon_at_yard8.setObjRunToCoord(363.7481, -330.9657);
          $.goon_at_yard8_flag = 2;
        }
      }
      if ($.goon_at_yard8_flag == 2) {
        if ($.goon_at_yard8.locateStoppedOnFoot2D(363.7481, -330.9657, 1.0, 1.0, false)) {
          $.goon_at_yard8.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard8_flag = 3;
        }
      }
      if ($.goon_at_yard8_flag == 3) {
        if ($.game_timer_var > $.goon_at_yard8_duck_timer) {
          $.goon_at_yard8_duck_timer = $.game_timer_var + 3000;
          if ($.goon_at_yard8_duck == 0) {
            $.goon_at_yard8.setWaitState(0 /* WAITSTATE_FALSE */, 100);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard8.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard8.setObjKillPlayerOnFoot($.player);
            }
            if ($.c_site_area_flag < 6) {
              $.goon_at_yard8_duck = 1;
            }
            if ($.goon_at_yard8_duck == 0) {
              $.goon_at_yard8.giveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 9999);
            }
          }
          else {
            $.goon_at_yard8.setObjWaitOnFoot();
            $.goon_at_yard8.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
            $.goon_at_yard8_duck = 0;
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard9_routine() {
  if ($.c_site_area_flag > 3) {
    if (!(Char.IsDead($.goon_at_yard9))) {
      if ($.goon_at_yard9_flag == 0) {
        $.goon_at_yard9.setObjWaitOnFoot();
        $.goon_at_yard9.setIdle();
        Path.RemoveRoute($.yard_route2);
        $.goon_at_yard9.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard9.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard9.setObjRunToCoord(374.9931, -311.8263);
        $.goon_at_yard9_flag = 1;
      }
      if ($.goon_at_yard9_flag == 1) {
        if ($.goon_at_yard9.locateOnFoot2D(374.9931, -311.8263, 1.0, 1.0, false)) {
          $.goon_at_yard9.setObjRunToCoord(348.1611, -301.9640);
          $.goon_at_yard9_flag = 2;
        }
      }
      if ($.goon_at_yard9_flag == 2) {
        if ($.goon_at_yard9.locateOnFoot2D(348.1611, -301.9640, 1.0, 1.0, false)) {
          $.goon_at_yard9.setObjRunToCoord(342.9392, -302.6671);
          $.goon_at_yard9_flag = 3;
        }
      }
      if ($.goon_at_yard9_flag == 3) {
        if ($.goon_at_yard9.locateOnFoot2D(342.9392, -302.6671, 1.0, 1.0, false)) {
          $.goon_at_yard9.setObjRunToCoord(327.6495, -317.2610);
          $.goon_at_yard9_flag = 4;
        }
      }
      if ($.goon_at_yard9_flag == 4) {
        if ($.goon_at_yard9.locateOnFoot2D(327.6495, -317.2610, 1.0, 1.0, false)) {
          if ($.c_site_area_flag == 4) {
            $.goon_at_yard9.setStayInSamePlace(true /* TRUE */);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard9.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard9.setObjKillPlayerOnFoot($.player);
            }
          }
          else {
            $.goon_at_yard9.setStayInSamePlace(false /* FALSE */);
            $.goon_at_yard9.setObjRunToCoord(335.2008, -334.9071);
            $.goon_at_yard9_flag = 5;
          }
        }
      }
      if ($.goon_at_yard9_flag == 5) {
        if ($.goon_at_yard9.locateOnFoot2D(335.2008, -334.9071, 1.0, 1.0, false)) {
          if ($.c_site_area_flag == 5) {
            $.goon_at_yard9.setStayInSamePlace(true /* TRUE */);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard9.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard9.setObjKillPlayerOnFoot($.player);
            }
          }
          else {
            $.goon_at_yard9.setStayInSamePlace(false /* FALSE */);
            $.goon_at_yard9.setObjRunToCoord(360.4199, -337.9403);
            $.goon_at_yard9_flag = 6;
          }
        }
      }
      if ($.goon_at_yard9_flag == 6) {
        if ($.goon_at_yard9.locateOnFoot2D(360.4199, -337.9403, 1.0, 1.0, false)) {
          $.goon_at_yard9.setStayInSamePlace(true /* TRUE */);
          if ($.player.isInAnyCar()) {
            $.players_vehicle = $.player.storeCarIsIn();
            $.goon_at_yard9.setObjDestroyCar($.players_vehicle);
          }
          else {
            $.goon_at_yard9.setObjKillPlayerOnFoot($.player);
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
}

async function goon_at_yard10_routine() {
  // IS_CHAR_DEAD goon_at_yard10
  if ($.c_site_area_flag > 0) {
    // IS_CHAR_DEAD goon_at_yard10
    if (!(Char.IsDead($.goon_at_yard10))) {
      if ($.goon_at_yard10_flag == 0) {
        $.goon_at_yard10.setHeedThreats(false /* FALSE */);
        $.goon_at_yard10.setObjWaitOnFoot();
        $.goon_at_yard10.setIdle();
        Path.RemoveRoute($.yard_route1);
        $.goon_at_yard10.setWaitState(0 /* WAITSTATE_FALSE */, 100);
        $.goon_at_yard10.setStayInSamePlace(false /* FALSE */);
        $.goon_at_yard10.setObjRunToCoord(372.5888, -298.4539);
        $.goon_at_yard10_flag = 1;
      }
      if ($.goon_at_yard10_flag == 1) {
        if ($.goon_at_yard10.locateStoppedOnFoot2D(372.5888, -298.4539, 1.0, 1.0, false)) {
          $.goon_at_yard10.setStayInSamePlace(true /* TRUE */);
          $.goon_at_yard10_flag = 2;
        }
      }
      if ($.goon_at_yard10_flag == 2) {
        if ($.c_site_area_flag == 1) {
          if ($.game_timer_var > $.goon_at_yard10_duck_timer) {
            $.goon_at_yard10_duck_timer = $.game_timer_var + 3000;
            if ($.goon_at_yard10_duck == 0) {
              $.goon_at_yard10.setWaitState(0 /* WAITSTATE_FALSE */, 100);
              if ($.player.isInAnyCar()) {
                $.players_vehicle = $.player.storeCarIsIn();
                $.goon_at_yard10.setObjDestroyCar($.players_vehicle);
              }
              else {
                $.goon_at_yard10.setObjKillPlayerOnFoot($.player);
              }
              $.goon_at_yard10_duck = 1;
            }
            else {
              $.goon_at_yard10.setObjWaitOnFoot();
              $.goon_at_yard10.setWaitState(14 /* WAITSTATE_PLAYANIM_DUCK */, 3000);
              $.goon_at_yard10_duck = 0;
            }
          }
        }
        else {
          $.goon_at_yard10.setStayInSamePlace(false /* FALSE */);
          $.goon_at_yard10.setWaitState(0 /* WAITSTATE_FALSE */, 100);
          $.goon_at_yard10.setObjRunToCoord(372.8152, -266.8551);
          $.goon_at_yard10_flag = 3;
        }
      }
      if ($.goon_at_yard10_flag == 3) {
        if ($.goon_at_yard10.locateOnFoot2D(372.8152, -266.8551, 1.0, 1.0, false)) {
          $.goon_at_yard10.setObjRunToCoord(363.9329, -266.5335);
          $.goon_at_yard10_flag = 4;
        }
      }
      if ($.goon_at_yard10_flag == 4) {
        if ($.goon_at_yard10.locateOnFoot2D(363.9329, -266.5335, 1.0, 1.0, false)) {
          $.goon_at_yard10.setObjRunToCoord(361.9770, -290.5143);
          $.goon_at_yard10_flag = 5;
        }
      }
      if ($.goon_at_yard10_flag == 5) {
        if ($.goon_at_yard10.locateOnFoot2D(361.9770, -290.5143, 1.0, 1.0, false)) {
          $.goon_at_yard10.setObjRunToCoord(341.3853, -298.2471);
          $.goon_at_yard10_flag = 6;
        }
      }
      if ($.goon_at_yard10_flag == 6) {
        if ($.goon_at_yard10.locateOnFoot2D(341.3853, -298.2471, 1.0, 1.0, false)) {
          $.goon_at_yard10.setObjRunToCoord(342.3168, -303.6481);
          $.goon_at_yard10_flag = 7;
        }
      }
      if ($.goon_at_yard10_flag == 7) {
        if ($.goon_at_yard10.locateStoppedOnFoot2D(342.3168, -303.6481, 1.0, 1.0, false)) {
          if ($.c_site_area_flag == 2) {
            $.goon_at_yard10.setStayInSamePlace(true /* TRUE */);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard10.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard10.setObjKillPlayerOnFoot($.player);
            }
          }
          else {
            $.goon_at_yard10.setStayInSamePlace(false /* FALSE */);
            $.goon_at_yard10.setObjRunToCoord(338.2401, -308.2155);
            $.goon_at_yard10_flag = 8;
          }
        }
      }
      if ($.goon_at_yard10_flag == 8) {
        if ($.goon_at_yard10.locateOnFoot2D(338.2401, -308.2155, 1.0, 1.0, false)) {
          $.goon_at_yard10.setObjRunToCoord(330.4936, -314.1106);
          $.goon_at_yard10_flag = 9;
        }
      }
      if ($.goon_at_yard10_flag == 9) {
        if ($.goon_at_yard10.locateStoppedOnFoot2D(330.4936, -314.1106, 1.0, 1.0, false)) {
          if ($.c_site_area_flag == 3 || $.c_site_area_flag == 4) {
            $.goon_at_yard10.setStayInSamePlace(true /* TRUE */);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard10.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard10.setObjKillPlayerOnFoot($.player);
            }
          }
          else {
            $.goon_at_yard10.setStayInSamePlace(false /* FALSE */);
            $.goon_at_yard10.setObjRunToCoord(334.6789, -338.7348);
            $.goon_at_yard10_flag = 10;
          }
        }
      }
      if ($.goon_at_yard10_flag == 10) {
        if ($.goon_at_yard10.locateStoppedOnFoot2D(334.6789, -338.7348, 1.0, 1.0, false)) {
          if ($.c_site_area_flag == 5) {
            $.goon_at_yard10.setStayInSamePlace(true /* TRUE */);
            if ($.player.isInAnyCar()) {
              $.players_vehicle = $.player.storeCarIsIn();
              $.goon_at_yard10.setObjDestroyCar($.players_vehicle);
            }
            else {
              $.goon_at_yard10.setObjKillPlayerOnFoot($.player);
            }
          }
          else {
            $.goon_at_yard10.setStayInSamePlace(false /* FALSE */);
            $.goon_at_yard10.setObjRunToCoord(360.2491, -336.6913);
            $.goon_at_yard10_flag = 11;
          }
        }
      }
      if ($.goon_at_yard10_flag == 11) {
        if ($.goon_at_yard10.locateStoppedOnFoot2D(360.2491, -336.6913, 1.0, 1.0, false)) {
          $.goon_at_yard10.setStayInSamePlace(true /* TRUE */);
          if ($.player.isInAnyCar()) {
            $.players_vehicle = $.player.storeCarIsIn();
            $.goon_at_yard10.setObjDestroyCar($.players_vehicle);
          }
          else {
            $.goon_at_yard10.setObjKillPlayerOnFoot($.player);
          }
        }
      }
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  return;
  }
}

export async function love4() {
  // *****************************************************************************************
  // *********************************  Love Mission 4  **************************************
  // ********************************* Grand Theft Aero **************************************
  // *** The real packages are still in the Cessna, which is at the airport. 				 ***
  // *** When the player arrives he will see a Palantic Construction vans drive away. 	 ***
  // *** As he gets closer there are some Colombians inside the hangar, seeing the player  ***
  // *** they will attack. After the player has killed them, he will go into the hangar to ***
  // *** find out that the package is not there. The player must go to to the building 	 ***
  // *** site. There the player will have to fight his way through the Colombians to 		 ***
  // *** Catalina & Miguel and the packages.                                               ***
  // Mission start stuff
  // MissionBoundary
  // SCM GOSUB mission_start_love4
  await mission_start_love4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love4_failed
    await mission_love4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love4
  await mission_cleanup_love4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  //VAR_INT flag_player_on_love_mission flag_love_mission4_passed// TEST VARS
  // MissionBoundary
  // VAR_INT love_4_blip goon_in_hangar1_blip goon_in_hangar2_blip goon_in_hangar3_blip goon_in_hangar4_blip
  // VAR_INT van1_driver goon_in_hangar1 goon_in_hangar2 goon_in_hangar3 goon_in_hangar4 ducking_flag
  // VAR_INT car_van1_lm4 car_van2_lm4 car_van3_lm4 wingless_cessna cs_cat cs_lift lift players_vehicle
  // VAR_INT deadman1 hangar_route
  // VAR_INT flag_result_1 reset_timera_flag player_car_l4 cs_whip
  // VAR_INT goon_at_yard1 goon_at_yard2 goon_at_yard3 goon_at_yard4 goon_at_yard5 goon_at_yard6 goon_at_yard7 goon_at_yard8 goon_at_yard9 goon_at_yard10
  // VAR_INT yard_route1 yard_route2 yard_route3 game_timer_var c_site_area_flag colombian_car
  // VAR_INT yakuza_car1 yakuza_car2 yakuza_guard1 yakuza_guard2 yakuza_guard3 yakuza_guard4 yakuza_guard5 yakuza_car3
  // VAR_INT goon_in_hangar1_flag goon_in_hangar2_flag goon_in_hangar3_flag goon_in_hangar4_flag
  // VAR_INT goon_in_hangar1_ducking goon_in_hangar2_ducking goon_in_hangar3_ducking goon_in_hangar4_ducking
  // VAR_INT goon_in_hangar1_waitstate goon_in_hangar2_waitstate goon_in_hangar3_waitstate goon_in_hangar4_waitstate
  // VAR_INT goon_in_hangar1_blip_flag goon_in_hangar2_blip_flag goon_in_hangar3_blip_flag goon_in_hangar4_blip_flag
  // VAR_INT goon_at_yard1_flag goon_at_yard1_duck goon_at_yard1_duck_timer
  // VAR_INT goon_at_yard2_flag goon_at_yard2_duck goon_at_yard2_duck_timer
  // VAR_INT goon_at_yard3_flag goon_at_yard3_duck goon_at_yard3_duck_timer
  // VAR_INT goon_at_yard4_flag goon_at_yard4_duck goon_at_yard4_duck_timer
  // VAR_INT goon_at_yard5_flag break_timer break_timer_start
  // VAR_INT goon_at_yard6_flag
  // VAR_INT goon_at_yard7_duck goon_at_yard7_duck_timer
  // VAR_INT goon_at_yard8_flag goon_at_yard8_duck goon_at_yard8_duck_timer
  // VAR_INT goon_at_yard9_flag
  // VAR_INT goon_at_yard10_flag goon_at_yard10_duck goon_at_yard10_duck_timer
  // VAR_FLOAT van3_x van3_y van3_z x_component y_component differ_x differ_y distance_result1 distance_result2 sum_difference
  // VAR_FLOAT temp_result_x temp_result_y result1_x result1_y result2_x result2_y
  // ****************************************Mission Start************************************
  // VAR_FLOAT player_lo4_x player_lo4_y player_lo4_z temp_var_x temp_var_y
}
