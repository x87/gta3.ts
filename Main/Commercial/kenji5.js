// Generated from Main/Commercial/kenji5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji5() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.number_of_peds = 0;
  $.ped_2_exists = 0;
  $.delete_oldest_ped_time = 0;
  $.on_screen_counter_flag = 0;
  $.ped_3_exists = 0;
  $.ped_4_exists = 0;
  $.dead_peds = 0;
  $.minimum_kills = 0;
  $.ped_1_time = 0;
  $.ped_2_time = 0;
  $.ped_3_time = 0;
  $.ped_4_time = 0;
  $.oldest_ped_time = 0;
  $.oldest_ped = 0;
  $.random_direction = 0;
  $.ped_1_exists = 0;
  $.ped_5_exists = 0;
  $.ped_5_time = 0;
  $.ped_6_exists = 0;
  $.ped_6_time = 0;
  $.ped_7_exists = 0;
  $.ped_7_time = 0;
  $.ped_8_exists = 0;
  $.ped_8_time = 0;
  $.ped_9_exists = 0;
  $.ped_9_time = 0;
  $.ped_10_exists = 0;
  $.ped_10_time = 0;
  $.ped_11_exists = 0;
  $.ped_11_time = 0;
  $.ped_12_exists = 0;
  $.ped_12_time = 0;
  $.ped_13_exists = 0;
  $.ped_13_time = 0;
  $.ped_14_exists = 0;
  $.ped_14_time = 0;
  $.ped_15_exists = 0;
  $.ped_15_time = 0;
  $.minimum_kills = 8;
  {
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.RequestModel(ped`GANG_YAKUZA_B`);
  Streaming.RequestModel(ped`GANG_YARDIE_A`);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_B`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(K5_SD);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.SetAnim($.kenji);
  $.cs_yakuza = CutsceneObject.Create(ped`GANG_YAKUZA_A`);
  $.cs_yakuza.SetAnim(gang07);
  $.cs_yakuza2 = CutsceneObject.Create(ped`GANG_YAKUZA_B`);
  $.cs_yakuza2.SetAnim(gang08);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.SetAnim($.kenji);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(459.1, -1413.0, 25.11);
  $.player.SetHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 6121) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_A, 7000, 1);
  while ($.cs_time < 11088) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_B, 7000, 1);
  while ($.cs_time < 13770) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_B1, 7000, 1);
  while ($.cs_time < 17324) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_C, 7000, 1);
  while ($.cs_time < 22060) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_D, 7000, 1);
  while ($.cs_time < 24716) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_E, 7000, 1);
  while ($.cs_time < 29220) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(KM5_F, 7000, 1);
  while ($.cs_time < 33666) {
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
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetInFrontOfPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_B`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  while (!(Streaming.HasModelLoaded(ped`GANG_YARDIE_A`))) {
    await asyncWait(0);
  }
  // SCM GOTO → main_part_of_script (not lowered; manual jump required)
  throw new Error("unresolved GOTO main_part_of_script"); // fallback: would break linear control flow
}

async function create_random_ped() {
  if ($.delete_oldest_ped_time > 10000) {
    $.delete_oldest_ped_time = $.delete_oldest_ped_time - 5000;
  }
  if ($.ped_1_exists == 0) {
    // SCM label generate_coord_ped_1
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_1_x, $.ped_1_y, $.ped_1_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_1_x;
    $.difference_y = $.garbage_y - $.ped_1_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_1 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_1"); // fallback: would break linear control flow
    }
    $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_1_blip.ChangeScale(3);
    $.ped_1_exists = 1;
    $.ped_1_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_2_exists == 0) {
    // SCM label generate_coord_ped_2
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_2_x, $.ped_2_y, $.ped_2_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_2_x;
    $.difference_y = $.garbage_y - $.ped_2_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_2 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_2"); // fallback: would break linear control flow
    }
    $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_2_blip.ChangeScale(3);
    $.ped_2_exists = 1;
    $.ped_2_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_3_exists == 0) {
    // SCM label generate_coord_ped_3
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_3_x, $.ped_3_y, $.ped_3_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_3_x;
    $.difference_y = $.garbage_y - $.ped_3_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_3 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_3"); // fallback: would break linear control flow
    }
    $.ped_3_blip = Blip.AddForCoordOld($.ped_3_x, $.ped_3_y, $.ped_3_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_3_blip.ChangeScale(3);
    $.ped_3_exists = 1;
    $.ped_3_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_4_exists == 0) {
    // SCM label generate_coord_ped_4
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_4_x, $.ped_4_y, $.ped_4_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_4_x;
    $.difference_y = $.garbage_y - $.ped_4_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_4 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_4"); // fallback: would break linear control flow
    }
    $.ped_4_blip = Blip.AddForCoordOld($.ped_4_x, $.ped_4_y, $.ped_4_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_4_blip.ChangeScale(3);
    $.ped_4_exists = 1;
    $.ped_4_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_5_exists == 0) {
    // SCM label generate_coord_ped_5
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_5_x, $.ped_5_y, $.ped_5_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_5_x;
    $.difference_y = $.garbage_y - $.ped_5_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_5 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_5"); // fallback: would break linear control flow
    }
    $.ped_5_blip = Blip.AddForCoordOld($.ped_5_x, $.ped_5_y, $.ped_5_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_5_blip.ChangeScale(3);
    $.ped_5_exists = 1;
    $.ped_5_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_6_exists == 0) {
    // SCM label generate_coord_ped_6
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_6_x, $.ped_6_y, $.ped_6_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_6_x;
    $.difference_y = $.garbage_y - $.ped_6_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_6 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_6"); // fallback: would break linear control flow
    }
    $.ped_6_blip = Blip.AddForCoordOld($.ped_6_x, $.ped_6_y, $.ped_6_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_6_blip.ChangeScale(3);
    $.ped_6_exists = 1;
    $.ped_6_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_7_exists == 0) {
    // SCM label generate_coord_ped_7
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_7_x, $.ped_7_y, $.ped_7_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_7_x;
    $.difference_y = $.garbage_y - $.ped_7_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_7 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_7"); // fallback: would break linear control flow
    }
    $.ped_7_blip = Blip.AddForCoordOld($.ped_7_x, $.ped_7_y, $.ped_7_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_7_blip.ChangeScale(3);
    $.ped_7_exists = 1;
    $.ped_7_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_8_exists == 0) {
    // SCM label generate_coord_ped_8
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_8_x, $.ped_8_y, $.ped_8_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_8_x;
    $.difference_y = $.garbage_y - $.ped_8_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_8 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_8"); // fallback: would break linear control flow
    }
    $.ped_8_blip = Blip.AddForCoordOld($.ped_8_x, $.ped_8_y, $.ped_8_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_8_blip.ChangeScale(3);
    $.ped_8_exists = 1;
    $.ped_8_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_9_exists == 0) {
    // SCM label generate_coord_ped_9
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_9_x, $.ped_9_y, $.ped_9_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_9_x;
    $.difference_y = $.garbage_y - $.ped_9_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_9 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_9"); // fallback: would break linear control flow
    }
    $.ped_9_blip = Blip.AddForCoordOld($.ped_9_x, $.ped_9_y, $.ped_9_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_9_blip.ChangeScale(3);
    $.ped_9_exists = 1;
    $.ped_9_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_10_exists == 0) {
    // SCM label generate_coord_ped_10
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_10_x, $.ped_10_y, $.ped_10_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_10_x;
    $.difference_y = $.garbage_y - $.ped_10_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_10 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_10"); // fallback: would break linear control flow
    }
    $.ped_10_blip = Blip.AddForCoordOld($.ped_10_x, $.ped_10_y, $.ped_10_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_10_blip.ChangeScale(3);
    $.ped_10_exists = 1;
    $.ped_10_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_11_exists == 0) {
    // SCM label generate_coord_ped_11
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_11_x, $.ped_11_y, $.ped_11_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_11_x;
    $.difference_y = $.garbage_y - $.ped_11_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_11 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_11"); // fallback: would break linear control flow
    }
    $.ped_11_blip = Blip.AddForCoordOld($.ped_11_x, $.ped_11_y, $.ped_11_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_11_blip.ChangeScale(3);
    $.ped_11_exists = 1;
    $.ped_11_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_12_exists == 0) {
    // SCM label generate_coord_ped_12
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_12_x, $.ped_12_y, $.ped_12_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_12_x;
    $.difference_y = $.garbage_y - $.ped_12_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_12 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_12"); // fallback: would break linear control flow
    }
    $.ped_12_blip = Blip.AddForCoordOld($.ped_12_x, $.ped_12_y, $.ped_12_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_12_blip.ChangeScale(3);
    $.ped_12_exists = 1;
    $.ped_12_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_13_exists == 0) {
    // SCM label generate_coord_ped_13
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_13_x, $.ped_13_y, $.ped_13_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_13_x;
    $.difference_y = $.garbage_y - $.ped_13_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_13 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_13"); // fallback: would break linear control flow
    }
    $.ped_13_blip = Blip.AddForCoordOld($.ped_13_x, $.ped_13_y, $.ped_13_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_13_blip.ChangeScale(3);
    $.ped_13_exists = 1;
    $.ped_13_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_14_exists == 0) {
    // SCM label generate_coord_ped_14
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_14_x, $.ped_14_y, $.ped_14_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_14_x;
    $.difference_y = $.garbage_y - $.ped_14_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_14 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_14"); // fallback: would break linear control flow
    }
    $.ped_14_blip = Blip.AddForCoordOld($.ped_14_x, $.ped_14_y, $.ped_14_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_14_blip.ChangeScale(3);
    $.ped_14_exists = 1;
    $.ped_14_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  if ($.ped_15_exists == 0) {
    // SCM label generate_coord_ped_15
    $.random_commercial_x = Math.RandomFloatInRange(-173.0, 460.0);
    $.random_commercial_y = Math.RandomFloatInRange(-1627.0, 100.0);
    [$.garbage_x, $.garbage_y, $.garbage_z] = $.player.GetCoordinates();
    [$.ped_15_x, $.ped_15_y, $.ped_15_z] = Path.GetClosestCharNode($.random_commercial_x, $.random_commercial_y, $.garbage_z);
    $.difference_x = $.garbage_x - $.ped_15_x;
    $.difference_y = $.garbage_y - $.ped_15_y;
    $.difference_x = $.difference_x * $.difference_x;
    $.difference_y = $.difference_y * $.difference_y;
    $.sum_diff = $.difference_x + $.difference_y;
    $.distance = Math.Sqrt($.sum_diff);
    if ($.distance < 110.0) {
      // SCM GOTO → generate_coord_ped_15 (not lowered; manual jump required)
      throw new Error("unresolved GOTO generate_coord_ped_15"); // fallback: would break linear control flow
    }
    $.ped_15_blip = Blip.AddForCoordOld($.ped_15_x, $.ped_15_y, $.ped_15_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
    $.ped_15_blip.ChangeScale(3);
    $.ped_15_exists = 1;
    $.ped_15_time = Clock.GetGameTimer();
    ++$.number_of_peds;
    return;
  }
  return;
}

async function main_part_of_script() {
  $.ped_1_x = 39.3;
  $.ped_1_y = -880.6;
  $.ped_1_z = 34.0;
  $.ped_2_x = -55.4331;
  $.ped_2_y = -974.3467;
  $.ped_2_z = 25.4;
  $.delete_oldest_ped_time = 80000;
  $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
  $.ped_1_blip.ChangeScale(3);
  $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
  $.ped_2_blip.ChangeScale(3);
  Text.PrintNow(KM5_6, 5000, 1);
  Text.PrintSoon(KM5_7, 6000, 1);
  Hud.DisplayCounterWithString($.dead_peds, 0 /* COUNTER_DISPLAY_NUMBER */, KILLS);
  $.ped_1_exists = 1;
  $.ped_2_exists = 1;
  $.number_of_peds = 2;
  TIMERA = 0;
  while ($.number_of_peds > 0) {
    await asyncWait(0);
    if ($.dead_peds > 0) {
      if (TIMERA > $.delete_oldest_ped_time) {
        TIMERA = 0;
        // SCM GOSUB delete_oldest_ped
        await delete_oldest_ped();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    if ($.ped_1_exists > 0) {
      if ($.ped_1_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_1_x, $.ped_1_y, 90.0, 90.0, 0)) {
          $.ped_1 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_1_x, $.ped_1_y, $.ped_1_z);
          $.ped_1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_1.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_1.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_1.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_1.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_1.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_1.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_1.WanderDir($.random_direction);
          $.ped_1_blip.Remove();
          $.ped_1_blip = Blip.AddForCharOld($.ped_1, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_1_blip.ChangeScale(3);
          $.ped_1_exists = 2;
        }
      }
      if ($.ped_1_exists == 2) {
        if (Char.IsDead($.ped_1)) {
          $.ped_1_blip.Remove();
          $.ped_1.MarkAsNoLongerNeeded();
          $.ped_1_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          if ($.on_screen_counter_flag == 0) {
            Text.PrintSoon(KM5_7, 6000, 1);
            TIMERA = 0;
            $.on_screen_counter_flag = 1;
          }
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_1_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_1, 90.0, 90.0, 0))) {
            [$.ped_1_x, $.ped_1_y, $.ped_1_z] = $.ped_1.GetCoordinates();
            $.ped_1_blip.Remove();
            $.ped_1_blip = Blip.AddForCoordOld($.ped_1_x, $.ped_1_y, $.ped_1_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_1_blip.ChangeScale(3);
            $.ped_1.Delete();
            $.ped_1_exists = 1;
          }
        }
      }
    }
    if ($.ped_2_exists > 0) {
      if ($.ped_2_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_2_x, $.ped_2_y, 90.0, 90.0, 0)) {
          $.ped_2 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_2_x, $.ped_2_y, $.ped_2_z);
          $.ped_2.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_2.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_2.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_2.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_2.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_2.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_2.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.ped_2_blip.Remove();
          $.ped_2_blip = Blip.AddForCharOld($.ped_2, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_2_blip.ChangeScale(3);
          $.ped_2_exists = 2;
        }
      }
      if ($.ped_2_exists == 2) {
        if (Char.IsDead($.ped_2)) {
          $.ped_2_blip.Remove();
          $.ped_2.MarkAsNoLongerNeeded();
          $.ped_2_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          if ($.on_screen_counter_flag == 0) {
            Text.PrintSoon(KM5_7, 6000, 1);
            TIMERA = 0;
            $.on_screen_counter_flag = 1;
          }
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_2_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_2, 90.0, 90.0, 0))) {
            [$.ped_2_x, $.ped_2_y, $.ped_2_z] = $.ped_2.GetCoordinates();
            $.ped_2_blip.Remove();
            $.ped_2_blip = Blip.AddForCoordOld($.ped_2_x, $.ped_2_y, $.ped_2_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_2_blip.ChangeScale(3);
            $.ped_2.Delete();
            $.ped_2_exists = 1;
          }
        }
      }
    }
    if ($.ped_3_exists > 0) {
      if ($.ped_3_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_3_x, $.ped_3_y, 90.0, 90.0, 0)) {
          $.ped_3 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_3_x, $.ped_3_y, $.ped_3_z);
          $.ped_3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_3.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_3.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_3.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_3.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_3.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_3.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_3.WanderDir($.random_direction);
          $.ped_3_blip.Remove();
          $.ped_3_blip = Blip.AddForCharOld($.ped_3, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_3_blip.ChangeScale(3);
          $.ped_3_exists = 2;
        }
      }
      if ($.ped_3_exists == 2) {
        if (Char.IsDead($.ped_3)) {
          $.ped_3_blip.Remove();
          $.ped_3.MarkAsNoLongerNeeded();
          $.ped_3_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_3_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_3, 90.0, 90.0, 0))) {
            [$.ped_3_x, $.ped_3_y, $.ped_3_z] = $.ped_3.GetCoordinates();
            $.ped_3_blip.Remove();
            $.ped_3_blip = Blip.AddForCoordOld($.ped_3_x, $.ped_3_y, $.ped_3_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_3_blip.ChangeScale(3);
            $.ped_3.Delete();
            $.ped_3_exists = 1;
          }
        }
      }
    }
    if ($.ped_4_exists > 0) {
      if ($.ped_4_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_4_x, $.ped_4_y, 90.0, 90.0, 0)) {
          $.ped_4 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_4_x, $.ped_4_y, $.ped_4_z);
          $.ped_4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_4.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_4.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_4.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_4.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_4.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_4.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_4.WanderDir($.random_direction);
          $.ped_4_blip.Remove();
          $.ped_4_blip = Blip.AddForCharOld($.ped_4, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_4_blip.ChangeScale(3);
          $.ped_4_exists = 2;
        }
      }
      if ($.ped_4_exists == 2) {
        if (Char.IsDead($.ped_4)) {
          $.ped_4_blip.Remove();
          $.ped_4.MarkAsNoLongerNeeded();
          $.ped_4_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_4_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_4, 90.0, 90.0, 0))) {
            [$.ped_4_x, $.ped_4_y, $.ped_4_z] = $.ped_4.GetCoordinates();
            $.ped_4_blip.Remove();
            $.ped_4_blip = Blip.AddForCoordOld($.ped_4_x, $.ped_4_y, $.ped_4_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_4_blip.ChangeScale(3);
            $.ped_4.Delete();
            $.ped_4_exists = 1;
          }
        }
      }
    }
    if ($.ped_5_exists > 0) {
      if ($.ped_5_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_5_x, $.ped_5_y, 90.0, 90.0, 0)) {
          $.ped_5 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_5_x, $.ped_5_y, $.ped_5_z);
          $.ped_5.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_5.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_5.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_5.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_5.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_5.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_5.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_5.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_5.WanderDir($.random_direction);
          $.ped_5_blip.Remove();
          $.ped_5_blip = Blip.AddForCharOld($.ped_5, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_5_blip.ChangeScale(3);
          $.ped_5_exists = 2;
        }
      }
      if ($.ped_5_exists == 2) {
        if (Char.IsDead($.ped_5)) {
          $.ped_5_blip.Remove();
          $.ped_5.MarkAsNoLongerNeeded();
          $.ped_5_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_5_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_5, 90.0, 90.0, 0))) {
            [$.ped_5_x, $.ped_5_y, $.ped_5_z] = $.ped_5.GetCoordinates();
            $.ped_5_blip.Remove();
            $.ped_5_blip = Blip.AddForCoordOld($.ped_5_x, $.ped_5_y, $.ped_5_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_5_blip.ChangeScale(3);
            $.ped_5.Delete();
            $.ped_5_exists = 1;
          }
        }
      }
    }
    if ($.ped_6_exists > 0) {
      if ($.ped_6_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_6_x, $.ped_6_y, 90.0, 90.0, 0)) {
          $.ped_6 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_6_x, $.ped_6_y, $.ped_6_z);
          $.ped_6.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_6.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_6.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_6.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_6.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_6.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_6.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_6.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_6.WanderDir($.random_direction);
          $.ped_6_blip.Remove();
          $.ped_6_blip = Blip.AddForCharOld($.ped_6, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_6_blip.ChangeScale(3);
          $.ped_6_exists = 2;
        }
      }
      if ($.ped_6_exists == 2) {
        if (Char.IsDead($.ped_6)) {
          $.ped_6_blip.Remove();
          $.ped_6.MarkAsNoLongerNeeded();
          $.ped_6_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_6_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_6, 90.0, 90.0, 0))) {
            [$.ped_6_x, $.ped_6_y, $.ped_6_z] = $.ped_6.GetCoordinates();
            $.ped_6_blip.Remove();
            $.ped_6_blip = Blip.AddForCoordOld($.ped_6_x, $.ped_6_y, $.ped_6_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_6_blip.ChangeScale(3);
            $.ped_6.Delete();
            $.ped_6_exists = 1;
          }
        }
      }
    }
    if ($.ped_7_exists > 0) {
      if ($.ped_7_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_7_x, $.ped_7_y, 90.0, 90.0, 0)) {
          $.ped_7 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_7_x, $.ped_7_y, $.ped_7_z);
          $.ped_7.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_7.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_7.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_7.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_7.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_7.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_7.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_7.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_7.WanderDir($.random_direction);
          $.ped_7_blip.Remove();
          $.ped_7_blip = Blip.AddForCharOld($.ped_7, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_7_blip.ChangeScale(3);
          $.ped_7_exists = 2;
        }
      }
      if ($.ped_7_exists == 2) {
        if (Char.IsDead($.ped_7)) {
          $.ped_7_blip.Remove();
          $.ped_7.MarkAsNoLongerNeeded();
          $.ped_7_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_7_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_7, 90.0, 90.0, 0))) {
            [$.ped_7_x, $.ped_7_y, $.ped_7_z] = $.ped_7.GetCoordinates();
            $.ped_7_blip.Remove();
            $.ped_7_blip = Blip.AddForCoordOld($.ped_7_x, $.ped_7_y, $.ped_7_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_7_blip.ChangeScale(3);
            $.ped_7.Delete();
            $.ped_7_exists = 1;
          }
        }
      }
    }
    if ($.ped_8_exists > 0) {
      if ($.ped_8_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_8_x, $.ped_8_y, 90.0, 90.0, 0)) {
          $.ped_8 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_8_x, $.ped_8_y, $.ped_8_z);
          $.ped_8.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_8.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_8.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_8.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_8.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_8.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_8.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_8.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_8.WanderDir($.random_direction);
          $.ped_8_blip.Remove();
          $.ped_8_blip = Blip.AddForCharOld($.ped_8, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_8_blip.ChangeScale(3);
          $.ped_8_exists = 2;
        }
      }
      if ($.ped_8_exists == 2) {
        if (Char.IsDead($.ped_8)) {
          $.ped_8_blip.Remove();
          $.ped_8.MarkAsNoLongerNeeded();
          $.ped_8_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_8_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_8, 90.0, 90.0, 0))) {
            [$.ped_8_x, $.ped_8_y, $.ped_8_z] = $.ped_8.GetCoordinates();
            $.ped_8_blip.Remove();
            $.ped_8_blip = Blip.AddForCoordOld($.ped_8_x, $.ped_8_y, $.ped_8_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_8_blip.ChangeScale(3);
            $.ped_8.Delete();
            $.ped_8_exists = 1;
          }
        }
      }
    }
    if ($.ped_9_exists > 0) {
      if ($.ped_9_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_9_x, $.ped_9_y, 90.0, 90.0, 0)) {
          $.ped_9 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_9_x, $.ped_9_y, $.ped_9_z);
          $.ped_9.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_9.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_9.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_9.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_9.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_9.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_9.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_9.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_9.WanderDir($.random_direction);
          $.ped_9_blip.Remove();
          $.ped_9_blip = Blip.AddForCharOld($.ped_9, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_9_blip.ChangeScale(3);
          $.ped_9_exists = 2;
        }
      }
      if ($.ped_9_exists == 2) {
        if (Char.IsDead($.ped_9)) {
          $.ped_9_blip.Remove();
          $.ped_9.MarkAsNoLongerNeeded();
          $.ped_9_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_9_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_9, 90.0, 90.0, 0))) {
            [$.ped_9_x, $.ped_9_y, $.ped_9_z] = $.ped_9.GetCoordinates();
            $.ped_9_blip.Remove();
            $.ped_9_blip = Blip.AddForCoordOld($.ped_9_x, $.ped_9_y, $.ped_9_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_9_blip.ChangeScale(3);
            $.ped_9.Delete();
            $.ped_9_exists = 1;
          }
        }
      }
    }
    if ($.ped_10_exists > 0) {
      if ($.ped_10_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_10_x, $.ped_10_y, 90.0, 90.0, 0)) {
          $.ped_10 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_10_x, $.ped_10_y, $.ped_10_z);
          $.ped_10.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_10.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_10.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_10.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_10.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_10.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_10.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_10.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_10.WanderDir($.random_direction);
          $.ped_10_blip.Remove();
          $.ped_10_blip = Blip.AddForCharOld($.ped_10, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_10_blip.ChangeScale(3);
          $.ped_10_exists = 2;
        }
      }
      if ($.ped_10_exists == 2) {
        if (Char.IsDead($.ped_10)) {
          $.ped_10_blip.Remove();
          $.ped_10.MarkAsNoLongerNeeded();
          $.ped_10_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_10_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_10, 90.0, 90.0, 0))) {
            [$.ped_10_x, $.ped_10_y, $.ped_10_z] = $.ped_10.GetCoordinates();
            $.ped_10_blip.Remove();
            $.ped_10_blip = Blip.AddForCoordOld($.ped_10_x, $.ped_10_y, $.ped_10_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_10_blip.ChangeScale(3);
            $.ped_10.Delete();
            $.ped_10_exists = 1;
          }
        }
      }
    }
    if ($.ped_11_exists > 0) {
      if ($.ped_11_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_11_x, $.ped_11_y, 90.0, 90.0, 0)) {
          $.ped_11 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_11_x, $.ped_11_y, $.ped_11_z);
          $.ped_11.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_11.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_11.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_11.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_11.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_11.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_11.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_11.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_11.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_11.WanderDir($.random_direction);
          $.ped_11_blip.Remove();
          $.ped_11_blip = Blip.AddForCharOld($.ped_11, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_11_blip.ChangeScale(3);
          $.ped_11_exists = 2;
        }
      }
      if ($.ped_11_exists == 2) {
        if (Char.IsDead($.ped_11)) {
          $.ped_11_blip.Remove();
          $.ped_11.MarkAsNoLongerNeeded();
          $.ped_11_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_11_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_11, 90.0, 90.0, 0))) {
            [$.ped_11_x, $.ped_11_y, $.ped_11_z] = $.ped_11.GetCoordinates();
            $.ped_11_blip.Remove();
            $.ped_11_blip = Blip.AddForCoordOld($.ped_11_x, $.ped_11_y, $.ped_11_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_11_blip.ChangeScale(3);
            $.ped_11.Delete();
            $.ped_11_exists = 1;
          }
        }
      }
    }
    if ($.ped_12_exists > 0) {
      if ($.ped_12_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_12_x, $.ped_12_y, 90.0, 90.0, 0)) {
          $.ped_12 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_12_x, $.ped_12_y, $.ped_12_z);
          $.ped_12.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_12.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_12.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_12.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_12.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_12.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_12.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_12.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_12.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_12.WanderDir($.random_direction);
          $.ped_12_blip.Remove();
          $.ped_12_blip = Blip.AddForCharOld($.ped_12, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_12_blip.ChangeScale(3);
          $.ped_12_exists = 2;
        }
      }
      if ($.ped_12_exists == 2) {
        if (Char.IsDead($.ped_12)) {
          $.ped_12_blip.Remove();
          $.ped_12.MarkAsNoLongerNeeded();
          $.ped_12_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_12_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_12, 90.0, 90.0, 0))) {
            [$.ped_12_x, $.ped_12_y, $.ped_12_z] = $.ped_12.GetCoordinates();
            $.ped_12_blip.Remove();
            $.ped_12_blip = Blip.AddForCoordOld($.ped_12_x, $.ped_12_y, $.ped_12_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_12_blip.ChangeScale(3);
            $.ped_12.Delete();
            $.ped_12_exists = 1;
          }
        }
      }
    }
    if ($.ped_13_exists > 0) {
      if ($.ped_13_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_13_x, $.ped_13_y, 90.0, 90.0, 0)) {
          $.ped_13 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_13_x, $.ped_13_y, $.ped_13_z);
          $.ped_13.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_13.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_13.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_13.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_13.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_13.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_13.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_13.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_13.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_13.WanderDir($.random_direction);
          $.ped_13_blip.Remove();
          $.ped_13_blip = Blip.AddForCharOld($.ped_13, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_13_blip.ChangeScale(3);
          $.ped_13_exists = 2;
        }
      }
      if ($.ped_13_exists == 2) {
        if (Char.IsDead($.ped_13)) {
          $.ped_13_blip.Remove();
          $.ped_13.MarkAsNoLongerNeeded();
          $.ped_13_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_13_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_13, 90.0, 90.0, 0))) {
            [$.ped_13_x, $.ped_13_y, $.ped_13_z] = $.ped_13.GetCoordinates();
            $.ped_13_blip.Remove();
            $.ped_13_blip = Blip.AddForCoordOld($.ped_13_x, $.ped_13_y, $.ped_13_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_13_blip.ChangeScale(3);
            $.ped_13.Delete();
            $.ped_13_exists = 1;
          }
        }
      }
    }
    if ($.ped_14_exists > 0) {
      if ($.ped_14_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_14_x, $.ped_14_y, 90.0, 90.0, 0)) {
          $.ped_14 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_14_x, $.ped_14_y, $.ped_14_z);
          $.ped_14.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_14.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_14.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_14.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_14.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_14.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_14.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_14.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_14.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_14.WanderDir($.random_direction);
          $.ped_14_blip.Remove();
          $.ped_14_blip = Blip.AddForCharOld($.ped_14, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_14_blip.ChangeScale(3);
          $.ped_14_exists = 2;
        }
      }
      if ($.ped_14_exists == 2) {
        if (Char.IsDead($.ped_14)) {
          $.ped_14_blip.Remove();
          $.ped_14.MarkAsNoLongerNeeded();
          $.ped_14_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_14_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_14, 90.0, 90.0, 0))) {
            [$.ped_14_x, $.ped_14_y, $.ped_14_z] = $.ped_14.GetCoordinates();
            $.ped_14_blip.Remove();
            $.ped_14_blip = Blip.AddForCoordOld($.ped_14_x, $.ped_14_y, $.ped_14_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_14_blip.ChangeScale(3);
            $.ped_14.Delete();
            $.ped_14_exists = 1;
          }
        }
      }
    }
    if ($.ped_15_exists > 0) {
      if ($.ped_15_exists == 1) {
        if ($.player.LocateAnyMeans2D($.ped_15_x, $.ped_15_y, 90.0, 90.0, 0)) {
          $.ped_15 = Char.Create(11 /* PEDTYPE_GANG_YARDIE */, ped`GANG_YARDIE_A`, $.ped_15_x, $.ped_15_y, $.ped_15_z);
          $.ped_15.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.ped_15.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.ped_15.SetThreatSearch(20 /* THREAT_GUN */);
          $.ped_15.SetThreatSearch(22 /* THREAT_FAST_CAR */);
          $.ped_15.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.ped_15.SetThreatSearch(1 /* THREAT_PLAYER2 */);
          $.ped_15.SetThreatSearch(2 /* THREAT_PLAYER3 */);
          $.ped_15.SetThreatSearch(3 /* THREAT_PLAYER4 */);
          $.ped_15.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.random_direction = Math.RandomIntInRange(0, 8);
          $.ped_15.WanderDir($.random_direction);
          $.ped_15_blip.Remove();
          $.ped_15_blip = Blip.AddForCharOld($.ped_15, 1 /* GREEN */, 3 /* BOTH */);
          $.ped_15_blip.ChangeScale(3);
          $.ped_15_exists = 2;
        }
      }
      if ($.ped_15_exists == 2) {
        if (Char.IsDead($.ped_15)) {
          $.ped_15_blip.Remove();
          $.ped_15.MarkAsNoLongerNeeded();
          $.ped_15_exists = 0;
          ++$.dead_peds;
          --$.number_of_peds;
          Text.PrintNow(KM5_1, 2000, 1);
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
          // SCM GOSUB create_random_ped
          await create_random_ped();
          // fallback if label was not emitted as async function: no-op continues linearly
        }
        if ($.ped_15_exists == 2) {
          if (!($.player.LocateAnyMeansChar2D($.ped_15, 90.0, 90.0, 0))) {
            [$.ped_15_x, $.ped_15_y, $.ped_15_z] = $.ped_15.GetCoordinates();
            $.ped_15_blip.Remove();
            $.ped_15_blip = Blip.AddForCoordOld($.ped_15_x, $.ped_15_y, $.ped_15_z, 1 /* GREEN */, 2 /* BLIP_ONLY */);
            $.ped_15_blip.ChangeScale(3);
            $.ped_15.Delete();
            $.ped_15_exists = 1;
          }
        }
      }
    }
  }
  if ($.dead_peds > $.minimum_kills || $.dead_peds == $.minimum_kills) {
    // SCM GOTO → mission_kenji5_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kenji5_passed"); // fallback: would break linear control flow
  }
  else {
    // SCM GOTO → mission_kenji5_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_kenji5_failed"); // fallback: would break linear control flow
  }
}

async function delete_oldest_ped() {
  $.oldest_ped = 0;
  $.oldest_ped_time = Clock.GetGameTimer();
  if ($.ped_1_exists == 1 && $.ped_1_time < $.oldest_ped_time) {
    $.oldest_ped = 1;
    $.oldest_ped_time = $.ped_1_time;
  }
  if ($.ped_2_exists == 1 && $.ped_2_time < $.oldest_ped_time) {
    $.oldest_ped = 2;
    $.oldest_ped_time = $.ped_2_time;
  }
  if ($.ped_3_exists == 1 && $.ped_3_time < $.oldest_ped_time) {
    $.oldest_ped = 3;
    $.oldest_ped_time = $.ped_3_time;
  }
  if ($.ped_4_exists == 1 && $.ped_4_time < $.oldest_ped_time) {
    $.oldest_ped = 4;
    $.oldest_ped_time = $.ped_4_time;
  }
  if ($.ped_5_exists == 1 && $.ped_5_time < $.oldest_ped_time) {
    $.oldest_ped = 5;
    $.oldest_ped_time = $.ped_5_time;
  }
  if ($.ped_6_exists == 1 && $.ped_6_time < $.oldest_ped_time) {
    $.oldest_ped = 6;
    $.oldest_ped_time = $.ped_6_time;
  }
  if ($.ped_7_exists == 1 && $.ped_7_time < $.oldest_ped_time) {
    $.oldest_ped = 7;
    $.oldest_ped_time = $.ped_7_time;
  }
  if ($.ped_8_exists == 1 && $.ped_8_time < $.oldest_ped_time) {
    $.oldest_ped = 8;
    $.oldest_ped_time = $.ped_8_time;
  }
  if ($.ped_9_exists == 1 && $.ped_9_time < $.oldest_ped_time) {
    $.oldest_ped = 9;
    $.oldest_ped_time = $.ped_9_time;
  }
  if ($.ped_10_exists == 1 && $.ped_10_time < $.oldest_ped_time) {
    $.oldest_ped = 10;
    $.oldest_ped_time = $.ped_10_time;
  }
  if ($.ped_11_exists == 1 && $.ped_11_time < $.oldest_ped_time) {
    $.oldest_ped = 11;
    $.oldest_ped_time = $.ped_11_time;
  }
  if ($.ped_12_exists == 1 && $.ped_12_time < $.oldest_ped_time) {
    $.oldest_ped = 12;
    $.oldest_ped_time = $.ped_12_time;
  }
  if ($.ped_13_exists == 1 && $.ped_13_time < $.oldest_ped_time) {
    $.oldest_ped = 13;
    $.oldest_ped_time = $.ped_13_time;
  }
  if ($.ped_14_exists == 1 && $.ped_14_time < $.oldest_ped_time) {
    $.oldest_ped = 14;
    $.oldest_ped_time = $.ped_14_time;
  }
  if ($.ped_15_exists == 1 && $.ped_15_time < $.oldest_ped_time) {
    $.oldest_ped = 15;
    $.oldest_ped_time = $.ped_15_time;
  }
  if ($.oldest_ped == 1) {
    $.ped_1_blip.Remove();
    $.ped_1.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_1_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 2) {
    $.ped_2_blip.Remove();
    $.ped_2.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_2_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 3) {
    $.ped_3_blip.Remove();
    $.ped_3.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_3_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 4) {
    $.ped_4_blip.Remove();
    $.ped_4.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_4_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 5) {
    $.ped_5_blip.Remove();
    $.ped_5.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_5_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 6) {
    $.ped_6_blip.Remove();
    $.ped_6.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_6_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 7) {
    $.ped_7_blip.Remove();
    $.ped_7.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_7_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 8) {
    $.ped_8_blip.Remove();
    $.ped_8.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_8_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 9) {
    $.ped_9_blip.Remove();
    $.ped_9.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_9_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 10) {
    $.ped_10_blip.Remove();
    $.ped_10.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_10_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 11) {
    $.ped_11_blip.Remove();
    $.ped_11.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_11_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 12) {
    $.ped_12_blip.Remove();
    $.ped_12.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_12_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 13) {
    $.ped_13_blip.Remove();
    $.ped_13.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_13_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 14) {
    $.ped_14_blip.Remove();
    $.ped_14.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_14_exists = 0;
    --$.number_of_peds;
  }
  if ($.oldest_ped == 15) {
    $.ped_15_blip.Remove();
    $.ped_15.MarkAsNoLongerNeeded();
    Text.PrintNow(KM5_2, 2000, 1);
    $.ped_15_exists = 0;
    --$.number_of_peds;
  }
  return;
  }
}

async function mission_kenji5_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  Text.PrintWithNumberNow(KM5_3, $.minimum_kills, 3000, 1);
  return;
}

async function mission_kenji5_passed() {
  $.flag_kenji_mission5_passed = 1;
  Text.PrintWithNumberBig(m_pass, 10000, 5000, 1);
  $.player.AddScore(10000);
  if ($.dead_peds == 8) {
    Text.PrintWithNumberNow(KM5_4, $.dead_peds, 3000, 1);
  }
  else {
    $.reward_kills = $.dead_peds - $.minimum_kills;
    $.reward_kills = $.reward_kills * 1000;
    Text.PrintWith2NumbersNow(KM5_5, $.dead_peds, $.reward_kills, 3000, 1);
  }
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(KM5);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  $.kenji_contact_blip.Remove();
  return;
}

async function mission_cleanup_kenji5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.ped_1_blip.Remove();
  $.ped_2_blip.Remove();
  $.ped_3_blip.Remove();
  $.ped_4_blip.Remove();
  $.ped_5_blip.Remove();
  $.ped_6_blip.Remove();
  $.ped_7_blip.Remove();
  $.ped_8_blip.Remove();
  $.ped_9_blip.Remove();
  $.ped_10_blip.Remove();
  $.ped_11_blip.Remove();
  $.ped_12_blip.Remove();
  $.ped_13_blip.Remove();
  $.ped_14_blip.Remove();
  $.ped_15_blip.Remove();
  Hud.ClearCounter($.dead_peds);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YARDIE_A`);
  Mission.Finish();
  return;
}

export async function kenji5() {
  // MissionBoundary
  // SCM GOSUB mission_start_kenji5
  await mission_start_kenji5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji5_failed
    await mission_kenji5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji5
  await mission_cleanup_kenji5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT number_of_peds ped_2_exists ped_2_blip ped_2 delete_oldest_ped_time on_screen_counter_flag
  // VAR_INT ped_3_exists ped_3_blip ped_3 ped_4_exists ped_4_blip ped_4 dead_peds minimum_kills reward_kills
  // VAR_INT ped_1_time ped_2_time ped_3_time ped_4_time oldest_ped_time oldest_ped random_direction
  // VAR_INT ped_1_blip ped_1_exists ped_1
  // VAR_INT ped_5_blip ped_5_exists ped_5 ped_5_time
  // VAR_INT ped_6_blip ped_6_exists ped_6 ped_6_time
  // VAR_INT ped_7_blip ped_7_exists ped_7 ped_7_time cs_yakuza2
  // VAR_INT ped_8_blip ped_8_exists ped_8 ped_8_time
  // VAR_INT ped_9_blip ped_9_exists ped_9 ped_9_time
  // VAR_INT ped_10_blip ped_10_exists ped_10 ped_10_time
  // VAR_INT ped_11_blip ped_11_exists ped_11 ped_11_time
  // VAR_INT ped_12_blip ped_12_exists ped_12 ped_12_time
  // VAR_INT ped_13_blip ped_13_exists ped_13 ped_13_time
  // VAR_INT ped_14_blip ped_14_exists ped_14 ped_14_time
  // VAR_INT ped_15_blip ped_15_exists ped_15 ped_15_time
  // VAR_FLOAT ped_15_x ped_15_y ped_15_z
  // VAR_FLOAT ped_14_x ped_14_y ped_14_z
  // VAR_FLOAT ped_13_x ped_13_y ped_13_z
  // VAR_FLOAT ped_12_x ped_12_y ped_12_z
  // VAR_FLOAT ped_11_x ped_11_y ped_11_z
  // VAR_FLOAT ped_10_x ped_10_y ped_10_z
  // VAR_FLOAT ped_9_x ped_9_y ped_9_z
  // VAR_FLOAT ped_8_x ped_8_y ped_8_z
  // VAR_FLOAT ped_7_x ped_7_y ped_7_z
  // VAR_FLOAT ped_6_x ped_6_y ped_6_z
  // VAR_FLOAT ped_5_x ped_5_y ped_5_z
  // VAR_FLOAT ped_1_x ped_1_y ped_1_z
  // VAR_FLOAT ped_2_x ped_2_y ped_2_z ped_3_x ped_3_y ped_3_z
  // VAR_FLOAT ped_4_x ped_4_y ped_4_z random_commercial_x random_commercial_y garbage_x garbage_y garbage_z
  // VAR_FLOAT difference_x difference_y sum_diff distance
}
