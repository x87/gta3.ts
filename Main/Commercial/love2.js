// Generated from Main/Commercial/love2.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function create_yakuza() {
  if ($.flag_yak_created_love2 == 0) {
    $.kenji_car_love2 = Car.Create(129 /* CAR_YAKUZA */, 302.0, -550.0, 37.0);
    $.kenji_car_love2.SetHeading(90.0);
    $.kenji_car_love2.SetIdle();
    $.kenji_car_love2.SetOnlyDamagedByPlayer(0 /* False */);
    $.yak_car_1_love2 = Car.Create(92 /* CAR_STRETCH */, 291.4, -547.0, 37.0);
    $.yak_car_1_love2.SetHeading(320.0);
    $.yak_car_1_love2.SetIdle();
    $.yak_car_1_love2.SetOnlyDamagedByPlayer(0 /* False */);
    $.yak_car_2_love2 = Car.Create(129 /* CAR_YAKUZA */, 294.6, -558.0, 37.0);
    $.yak_car_2_love2.SetHeading(96.0);
    $.yak_car_2_love2.SetIdle();
    $.yak_car_2_love2.SetOnlyDamagedByPlayer(0 /* False */);
    $.yak_car_1_love2 = Car.Create(92 /* CAR_STRETCH */, 299.4, -540.0, 37.0);
    $.yak_car_1_love2.SetHeading(296.0);
    $.yak_car_1_love2.SetIdle();
    $.yak_car_1_love2.SetOnlyDamagedByPlayer(0 /* False */);
    $.yak_1_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 286.4, -543.5, 37.0);
    $.yak_1_love2.SetHeading(180.0);
    $.yak_2_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 304.5, -544.3, 37.0);
    $.yak_2_love2.SetHeading(40.0);
    $.yak_2_love2.AddArmor(100);
    $.yak_3_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 299.25, -534.0, 37.0);
    $.yak_3_love2.SetHeading(20.0);
    $.yak_4_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 295.0, -562.0, 37.0);
    $.yak_4_love2.SetHeading(180.0);
    $.yak_5_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_A`, 295.0, -544.0, 37.0);
    $.yak_5_love2.SetHeading(15.0);
    $.yak_5_love2.AddArmor(100);
    $.yak_6_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 300.0, -556.0, 37.0);
    $.yak_6_love2.SetHeading(160.0);
    $.yak_7_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 301.0, -516.0, 37.0);
    $.yak_7_love2.SetHeading(45.0);
    $.yak_8_love2 = Char.Create(10 /* PEDTYPE_GANG_YAKUZA */, ped`GANG_YAKUZA_B`, 273.0, -570.0, 37.0);
    $.yak_8_love2.SetHeading(260.0);
    $.yak_1_love2.GiveWeapon(6 /* WEAPONTYPE_M16 */, 80);
    $.yak_2_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_3_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_3_love2.SetAccuracy(40);
    $.yak_4_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_4_love2.SetAccuracy(40);
    $.yak_5_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_5_love2.SetAccuracy(40);
    $.yak_6_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_7_love2.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 25);
    $.yak_8_love2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.yak_8_love2.SetAccuracy(40);
    $.yak_1_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_2_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_3_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_4_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_5_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_6_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_7_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.yak_8_love2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.kenji = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 304.2, -543.1, 36.3);
    $.kenji.SetHeading(140.0);
    $.kenji.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.kenji.GiveWeapon(3 /* WEAPONTYPE_UZI */, 60);
    $.kenji.AddArmor(100);
    $.blip_kenji_love2 = Blip.AddForChar($.kenji);
    $.kenji.SetStayInSamePlace(1 /* true */);
    $.flag_yak_created_love2 = 1;
  }
  return;
}

async function player_wanted_love2() {
  if ($.flag_yak_created_love2 == 1 && $.flag_wanted_love2 == 0) {
    if (Char.IsDead($.yak_1_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_2_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_3_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_4_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_5_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_6_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_7_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
    if (Char.IsDead($.yak_8_love2)) {
      $.player.AlterWantedLevelNoDrop(3);
      $.flag_wanted_love2 = 1;
    }
  }
  return;
}

async function mission_start_love2() {
  Stat.RegisterMissionGiven();
  // ScriptName
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  await asyncWait(0);
  $.flag_carpark_blip = 0;
  $.flag_kenji_dead = 0;
  $.flag_message = 0;
  $.flag_yak_created_love2 = 0;
  $.flag_wanted_love2 = 0;
  $.flag_yak_attack_love2 = 0;
  $.flag_player_clear = 0;
  $.flag_kenji_cut = 0;
  $.flag_kenji_look = 0;
  $.flag_1_dead_love2 = 0;
  $.flag_2_dead_love2 = 0;
  $.flag_3_dead_love2 = 0;
  $.flag_4_dead_love2 = 0;
  $.flag_5_dead_love2 = 0;
  $.flag_6_dead_love2 = 0;
  $.flag_7_dead_love2 = 0;
  $.flag_8_dead_love2 = 0;
  $.counter_kenji_guards_dead = 0;
  $.carpark_minx = 265.5;
  $.carpark_miny = -610.5;
  $.carpark_maxx = 345.5;
  $.carpark_maxy = -479.5;
  $.carpark_minz = 32.5;
  $.carpark_maxz = 50.0;
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  while (!(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(tshrorckgrdn))) {
    await asyncWait(0);
  }
  Streaming.LoadSpecialCharacter(1, $.love);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, LOVEH);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  Cutscene.Load(d2_kk);
  Streaming.Switch(1 /* ON */);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.SetAnim($.love);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj02`);
  $.cs_lovehead.SetAnim($.love);
  $.player.SetCoordinates(85.0, -1548.2, 28.3);
  $.player.SetHeading(90.0);
  Camera.DoFade(250, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5434) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_A", 4000, 1);
  while ($.cs_time < 9893) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_B", 4500, 1);
  while ($.cs_time < 14631) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_C", 4000, 1);
  while ($.cs_time < 18811) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_D", 3000, 1);
  while ($.cs_time < 21947) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_E", 3500, 1);
  while ($.cs_time < 26266) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_F", 3500, 1);
  while ($.cs_time < 30656) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_G", 3000, 1);
  while ($.cs_time < 33442) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE2_H", 4500, 1);
  while ($.cs_time < 41066) {
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
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  World.SwitchRubbish(1 /* ON */);
  Streaming.LoadSpecialCharacter(1, $.kenji);
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(ped`GANG_YAKUZA_B`);
  while (!(Streaming.HasModelLoaded(ped`GANG_YAKUZA_B`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`YAKUZA`);
  while (!(Streaming.HasModelLoaded(car`YAKUZA`))) {
    await asyncWait(0);
  }
  Streaming.RequestModel(car`STRETCH`);
  while (!(Streaming.HasModelLoaded(car`STRETCH`))) {
    await asyncWait(0);
  }
  Audio.LoadMissionAudio(LO2_A);
}

async function while_loop_1() {
  while ($.flag_kenji_dead == 0) {
    await asyncWait(0);
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 3;
      // SCM GOTO → while_loop_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_4"); // fallback: would break linear control flow
    }
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      $.flag_message = 1;
      // SCM GOTO → while_loop_2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_2"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 2;
      // SCM GOTO → while_loop_3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_3"); // fallback: would break linear control flow
    }
    if ($.flag_message == 0) {
      Text.PrintNow("LOVE2_1", 6000, 1);
      await asyncWait(3000);
      $.flag_message = 1;
    }
  }
}

async function while_loop_2() {
  while ($.flag_kenji_dead == 0) {
    await asyncWait(0);
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 3;
      // SCM GOTO → while_loop_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_4"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      $.flag_message = 0;
      // SCM GOTO → while_loop_1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_1"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 2;
      // SCM GOTO → while_loop_3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_3"); // fallback: would break linear control flow
    }
    if ($.flag_message == 1) {
      Text.PrintNow("LOVE2_2", 4000, 1);
      await asyncWait(3000);
      $.flag_message = 0;
    }
    if ($.flag_carpark_blip == 0) {
      $.blip_carpark = Blip.AddForCoord(305.0, -545.0, 30.0);
      $.flag_carpark_blip = 1;
    }
  }
}

async function while_loop_3() {
  if ($.flag_carpark_blip == 1) {
    $.blip_carpark.Remove();
    $.flag_carpark_blip = 0;
  }
  while ($.flag_kenji_dead == 0) {
    await asyncWait(0);
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 3;
      // SCM GOTO → while_loop_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_4"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      $.flag_message = 0;
      // SCM GOTO → while_loop_1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_1"); // fallback: would break linear control flow
    }
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      $.flag_message = 1;
      // SCM GOTO → while_loop_2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_2"); // fallback: would break linear control flow
    }
    if ($.flag_message == 2) {
      Text.PrintNow("LOVE2_3", 3000, 1);
      $.flag_message = 0;
    }
    if (!($.player.IsInAnyCar()) && $.player.IsInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      Text.PrintNow("LOVE2_4", 3000, 1);
      if ($.flag_yak_created_love2 == 1) {
        if (!(Char.IsDead($.kenji)) && !(Car.IsDead($.kenji_car_love2))) {
          $.kenji.SetObjEnterCarAsDriver($.kenji_car_love2);
        }
      }
      // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInArea3D($.carpark_minx, $.carpark_miny, 35.0, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      if (!($.player.IsInModel(131 /* CAR_COLUMB */))) {
        Text.PrintNow("LOVE2_4", 3000, 1);
        if ($.flag_yak_created_love2 == 1) {
          if (!(Char.IsDead($.kenji)) && !(Car.IsDead($.kenji_car_love2))) {
            $.kenji.SetObjEnterCarAsDriver($.kenji_car_love2);
          }
        }
        // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
      }
    }
    // SCM GOSUB create_yakuza
    await create_yakuza();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB player_wanted_love2
    await player_wanted_love2();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_wanted_love2 == 1) {
      Audio.PlayMissionAudio();
      $.flag_wanted_love2 = 2;
    }
  }
}

async function while_loop_4() {
  if ($.flag_carpark_blip == 1) {
    $.blip_carpark.Remove();
    $.flag_carpark_blip = 0;
  }
  while ($.flag_kenji_dead == 0) {
    await asyncWait(0);
    if ($.player.IsInModel(131 /* CAR_COLUMB */)) {
      $.player_car = $.player.StoreCarIsIn();
      $.player_car.SetStrong(1 /* true */);
    }
    if ($.flag_yak_attack_love2 == 0 && $.player.IsInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      if (!(Char.IsDead($.yak_7_love2))) {
        $.yak_7_love2.SetObjKillPlayerAnyMeans($.player);
      }
      if (!(Char.IsDead($.yak_8_love2))) {
        $.yak_8_love2.SetObjKillPlayerAnyMeans($.player);
      }
      $.flag_yak_attack_love2 = 1;
    }
    if (!($.player.IsInAnyCar()) && $.player.IsInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      Text.PrintNow("LOVE2_4", 3000, 1);
      if ($.flag_yak_created_love2 == 1) {
        if (!(Char.IsDead($.kenji)) && !(Car.IsDead($.kenji_car_love2))) {
          $.kenji.SetObjEnterCarAsDriver($.kenji_car_love2);
        }
      }
      // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
    }
    if ($.player.IsInArea3D($.carpark_minx, $.carpark_miny, 35.0, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      if (!($.player.IsInModel(131 /* CAR_COLUMB */))) {
        Text.PrintNow("LOVE2_4", 3000, 1);
        if ($.flag_yak_created_love2 == 1) {
          if (!(Char.IsDead($.kenji)) && !(Car.IsDead($.kenji_car_love2))) {
            $.kenji.SetObjEnterCarAsDriver($.kenji_car_love2);
          }
        }
        // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
      }
      else {
        if (!(Char.IsDead($.kenji))) {
          $.kenji.TurnToFacePlayer($.player);
        }
      }
    }
    if ($.player.IsInModel(131 /* CAR_COLUMB */) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      if (!(Char.IsDead($.yak_7_love2))) {
        $.yak_7_love2.SetObjNoObj();
      }
      if (!(Char.IsDead($.yak_8_love2))) {
        $.yak_8_love2.SetObjNoObj();
      }
      $.flag_yak_attack_love2 = 0;
      $.flag_message = 1;
      // SCM GOTO → while_loop_2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_2"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && !($.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */))) {
      $.flag_message = 0;
      // SCM GOTO → while_loop_1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_1"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && $.player.IsInArea2D($.carpark_minx, $.carpark_miny, $.carpark_maxx, $.carpark_maxy, 0 /* false */)) {
      $.flag_message = 2;
      // SCM GOTO → while_loop_3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO while_loop_3"); // fallback: would break linear control flow
    }
    if ($.flag_yak_created_love2 == 1 && $.flag_kenji_cut == 0 && $.player.IsInModel(131 /* CAR_COLUMB */)) {
      if ($.player.IsInArea3D(317.2, -603.5, 33.0, 332.0, -593.1, 35.0, 0 /* false */)) {
        $.flag_kenji_cut = 1;
        // SCM GOSUB kenji_cut
        await kenji_cut();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
      if ($.player.IsInArea3D(317.2, -506.3, 33.0, 332.0, -497.3, 35.0, 0 /* false */)) {
        $.flag_kenji_cut = 2;
        // SCM GOSUB kenji_cut
        await kenji_cut();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    // SCM GOSUB create_yakuza
    await create_yakuza();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB player_wanted_love2
    await player_wanted_love2();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.flag_wanted_love2 == 1) {
      Audio.PlayMissionAudio();
      $.flag_wanted_love2 = 2;
    }
    // SCM GOSUB yak_death_count
    await yak_death_count();
    // fallback if label was not emitted as async function: no-op continues linearly
    if (Char.IsDead($.kenji)) {
      $.flag_kenji_dead = 1;
      $.blip_kenji_love2.Remove();
    }
  }
  while ($.flag_player_clear == 0) {
    await asyncWait(0);
    if ($.flag_kenji_dead == 1) {
      Text.PrintNow("LOVE2_5", 3000, 1);
      $.flag_kenji_dead = 2;
    }
    // SCM GOSUB yak_death_count
    await yak_death_count();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.counter_kenji_guards_dead == 8) {
      Text.PrintNow("LOVE2_6", 3000, 1);
      // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && $.player.IsInArea3D($.carpark_minx, $.carpark_miny, $.carpark_minz, $.carpark_maxx, $.carpark_maxy, $.carpark_maxz, 0 /* false */)) {
      Text.PrintNow("LOVE2_4", 3000, 1);
      // SCM GOTO → mission_love2_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love2_failed"); // fallback: would break linear control flow
    }
    if (!($.player.IsInZone("COM_EAS")) && $.player.IsInModel(131 /* CAR_COLUMB */) && $.flag_kenji_dead == 2) {
      Text.PrintNow("LOVE2_7", 3000, 1);
      $.flag_kenji_dead = 3;
    }
    if ($.player.IsInZone("COM_EAS") && !($.player.IsInModel(131 /* CAR_COLUMB */)) && $.flag_kenji_dead == 2) {
      Text.PrintNow("LOVE2_8", 3000, 1);
      $.flag_kenji_dead = 3;
    }
    if (!($.player.IsInZone("COM_EAS")) && !($.player.IsInModel(131 /* CAR_COLUMB */))) {
      $.flag_player_clear = 1;
    }
  }
  // SCM GOTO → mission_love2_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love2_passed"); // fallback: would break linear control flow
}

async function mission_love2_failed() {
  Text.PrintBig("M_FAIL", 2000, 1);
  $.blip_kenji_love2.Remove();
  $.kenji.RemoveElegantly();
  return;
}

async function mission_love2_passed() {
  $.flag_love_mission2_passed = 1;
  Text.PrintWithNumberBig("M_PASS", 30000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.ClearWantedLevel();
  $.player.AddScore(30000);
  Stat.RegisterMissionPassed(LOVE2);
  Stat.PlayerMadeProgress(1);
  $.kenji_contact_blip.Remove();
  // START_NEW_SCRIPT love_mission3_loop
  return;
}

async function mission_cleanup_love2() {
  if ($.flag_carpark_blip == 1) {
    $.blip_carpark.Remove();
  }
  $.blip_kenji_love2.Remove();
  $.kenji.RemoveElegantly();
  Streaming.UnloadSpecialCharacter(1);
  Camera.RestoreJumpcut();
  $.player.SetControl(1 /* on */);
  Hud.SwitchWidescreen(0 /* off */);
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`);
  Streaming.MarkModelAsNoLongerNeeded(car`STRETCH`);
  Streaming.MarkModelAsNoLongerNeeded(car`YAKUZA`);
  Mission.Finish();
  return;
}

async function yak_death_count() {
  if (Char.IsDead($.yak_1_love2) && $.flag_1_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_1_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_2_love2) && $.flag_2_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_2_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_3_love2) && $.flag_3_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_3_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_4_love2) && $.flag_4_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_4_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_5_love2) && $.flag_5_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_5_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_6_love2) && $.flag_6_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_6_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_7_love2) && $.flag_7_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_7_dead_love2 = 1;
  }
  if (Char.IsDead($.yak_8_love2) && $.flag_8_dead_love2 == 0) {
    ++$.counter_kenji_guards_dead;
    $.flag_8_dead_love2 = 1;
  }
  return;
}

async function kenji_cut() {
  if ($.flag_kenji_cut == 1) {
    $.player.ApplyBrakesToCar(1 /* On */);
    Hud.SwitchWidescreen(1 /* on */);
    $.player.SetControl(0 /* off */);
    Camera.SetFixedPosition(303.11, -542.44, 37.1, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(303.67, -543.36, 36.92, 2 /* JUMP_CUT */);
    $.timer_kenji_cut_start = Clock.GetGameTimer();
    $.timer_kenji_cut_dif = $.timer_kenji_cut_start - $.timer_kenji_cut_start;
    while ($.timer_kenji_cut_dif < 7500) {
      await asyncWait(0);
      $.timer_kenji_cut_now = Clock.GetGameTimer();
      $.timer_kenji_cut_dif = $.timer_kenji_cut_now - $.timer_kenji_cut_start;
      if ($.timer_kenji_cut_dif > 1000 && $.flag_kenji_look == 0) {
        if (!(Char.IsDead($.kenji)) && !(Char.IsDead($.yak_2_love2))) {
          $.kenji.SetWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 4000);
          $.yak_2_love2.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 4000);
          $.flag_kenji_look = 1;
        }
      }
      if ($.timer_kenji_cut_dif > 2500 && $.flag_kenji_cut == 1) {
        if (!(Char.IsDead($.yak_3_love2))) {
          Camera.PointAtChar($.yak_3_love2, 15 /* FIXED */, 1 /* INTERPOLATION */);
        }
        $.flag_kenji_cut = 3;
      }
      if ($.timer_kenji_cut_dif > 5000 && $.flag_kenji_cut == 3) {
        if (!(Char.IsDead($.yak_1_love2))) {
          Camera.PointAtChar($.yak_1_love2, 15 /* FIXED */, 1 /* INTERPOLATION */);
          $.flag_kenji_cut = 4;
        }
      }
    }
    Camera.RestoreJumpcut();
    $.player.SetControl(1 /* on */);
    Hud.SwitchWidescreen(0 /* off */);
  }
  if ($.flag_kenji_cut == 2) {
    $.player.ApplyBrakesToCar(1 /* On */);
    Hud.SwitchWidescreen(1 /* on */);
    $.player.SetControl(0 /* off */);
    Camera.SetFixedPosition(303.32, -544.7, 37.09, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(303.83, -543.85, 36.96, 2 /* JUMP_CUT */);
    $.timer_kenji_cut_start = Clock.GetGameTimer();
    $.timer_kenji_cut_dif = $.timer_kenji_cut_start - $.timer_kenji_cut_start;
    while ($.timer_kenji_cut_dif < 7500) {
      await asyncWait(0);
      $.timer_kenji_cut_now = Clock.GetGameTimer();
      $.timer_kenji_cut_dif = $.timer_kenji_cut_now - $.timer_kenji_cut_start;
      if ($.timer_kenji_cut_dif > 1000 && $.flag_kenji_look == 0) {
        if (!(Char.IsDead($.kenji)) && !(Char.IsDead($.yak_2_love2))) {
          $.kenji.SetWaitState(3 /* WAITSTATE_CROSS_ROAD_LOOK */, 4000);
          $.yak_2_love2.SetWaitState(19 /* WAITSTATE_PLAYANIM_CHAT */, 4000);
          $.flag_kenji_look = 1;
        }
      }
      if ($.timer_kenji_cut_dif > 2500 && $.flag_kenji_cut == 2) {
        if (!(Char.IsDead($.yak_1_love2))) {
          Camera.PointAtChar($.yak_1_love2, 15 /* FIXED */, 1 /* INTERPOLATION */);
        }
        $.flag_kenji_cut = 3;
      }
      if ($.timer_kenji_cut_dif > 5000 && $.flag_kenji_cut == 3) {
        if (!(Char.IsDead($.yak_4_love2))) {
          Camera.PointAtChar($.yak_4_love2, 15 /* FIXED */, 1 /* INTERPOLATION */);
          $.flag_kenji_cut = 4;
        }
      }
    }
    Camera.RestoreJumpcut();
    $.player.SetControl(1 /* on */);
    Hud.SwitchWidescreen(0 /* off */);
  }
  return;
}

export async function love2() {
  // MissionBoundary
  // SCM GOSUB mission_start_love2
  await mission_start_love2();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love2_failed
    await mission_love2_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love2
  await mission_cleanup_love2();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_FLOAT carpark_minx carpark_miny carpark_maxx carpark_maxy
  // VAR_FLOAT carpark_minz carpark_maxz
  // VAR_INT blip_carpark blip_kenji_love2
  // VAR_INT flag_carpark_blip
  // VAR_INT flag_kenji_dead flag_yak_created_love2 flag_wanted_love2 flag_kenji_look
  // VAR_INT flag_message flag_yak_attack_love2 flag_player_clear flag_kenji_cut
  // VAR_INT timer_kenji_cut_start timer_kenji_cut_dif timer_kenji_cut_now
  // VAR_INT kenji_car_love2 yak_car_1_love2 yak_car_2_love2
  // VAR_INT yak_1_love2 yak_2_love2 yak_3_love2 yak_4_love2
  // VAR_INT yak_5_love2 yak_6_love2 yak_7_love2 yak_8_love2
  // VAR_INT counter_kenji_guards_dead
  // VAR_INT flag_1_dead_love2 flag_2_dead_love2 flag_3_dead_love2 flag_4_dead_love2
  // VAR_INT flag_5_dead_love2 flag_6_dead_love2 flag_7_dead_love2 flag_8_dead_love2
}
