// Generated from Main/Commercial/love1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_ojg_in_group = 0;
  $.flag_blip_on_ojg_love1 = 0;
  $.flag_baddie1_dead_love1 = 0;
  $.flag_baddie2_dead_love1 = 0;
  $.flag_baddie3_dead_love1 = 0;
  $.flag_baddie4_dead_love1 = 0;
  $.flag_baddie5_dead_love1 = 0;
  $.flag_baddie6_dead_love1 = 0;
  $.flag_garage_baddie1_dead_love1 = 0;
  $.flag_garage_baddie2_dead_love1 = 0;
  $.flag_garage_baddie3_dead_love1 = 0;
  $.flag_garage_baddie4_dead_love1 = 0;
  $.flag_garage_baddie5_dead_love1 = 0;
  $.flag_garage_baddie6_dead_love1 = 0;
  $.flag_garage1_open = 0;
  $.flag_garage2_open = 0;
  $.flag_garage3_open = 0;
  $.flag_garage4_open = 0;
  $.flag_garage5_open = 0;
  $.ogg_position = 0;
  $.flag_had_garage_message_love1 = 0;
  $.ojg_in_area = 0;
  $.flag_ojg_dead = 0;
  $.flag_player_in_area_love1 = 0;
  $.flag_player_got_car_message_love1 = 0;
  $.flag_message_car_again = 0;
  $.blob_flag = 1;
  $.flag_ojg_in_area = 0;
  $.flag_baddie1_in_area_love1 = 0;
  $.flag_baddie2_in_area_love1 = 0;
  $.flag_baddie3_in_area_love1 = 0;
  $.flag_baddie4_in_area_love1 = 0;
  $.flag_baddie5_in_area_love1 = 0;
  $.flag_baddie6_in_area_love1 = 0;
  {
  if ($.flag_failed_love1 == 1) {
    $.garage1_love1.Close();
    $.garage2_love1.Close();
    $.garage3_love1.Close();
    $.garage4_love1.Close();
    $.garage5_love1.Close();
  }
  $.flag_failed_love1 = 0;
  $.flag_kill_player_love1 = 0;
  Streaming.LoadSpecialCharacter(1, LOVE2);
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(tshrorckgrdn)) || !(Streaming.HasModelLoaded(tshrorckgrdn_alfas))) {
    await asyncWait(0);
  }
  Cutscene.Load(d1_stog);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.SetAnim(love2);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`);
  $.cs_lovehead.SetAnim($.love);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(83.1, -1548.7, 27.3, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(83.1, -1548.7, 27.3);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 4111) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_A", 10000, 1);
  while ($.cs_time < 7246) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_F", 10000, 1);
  while ($.cs_time < 10311) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_B", 10000, 1);
  while ($.cs_time < 14533) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_H", 10000, 1);
  while ($.cs_time < 17000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_C", 10000, 1);
  while ($.cs_time < 20000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_I", 10000, 1);
  while ($.cs_time < 23188) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_D", 10000, 1);
  while ($.cs_time < 28008) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_E", 10000, 1);
  while ($.cs_time < 32454) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("LOVE1_G", 10000, 1);
  while ($.cs_time < 35034) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("LOVE1_G");
  while ($.cs_time < 38333) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.RequestModel(car`COLUMB`);
  Streaming.LoadSpecialCharacter(2, $.ojg);
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(car`COLUMB`))) {
    await asyncWait(0);
  }
  Text.PrintNow("LOVE1_1", 7000, 1);
  while (!($.player.IsInModel(131 /* CAR_COLUMB */))) {
    await asyncWait(0);
  }
  $.radar_blip_coord2_love1 = Blip.AddForCoord(52.0, -343.0, -100.0);
  $.ogg_position = Math.RandomIntInRange(2, 6);
  if ($.ogg_position == 2) {
    $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 25.2, -340.3, 15.1);
    $.ojg_love1.ClearThreatSearch();
    $.ojg_love1.TurnToFaceCoord(57.0, -314.0, -100.0);
    $.ojg_love1.SetIdle();
  }
  if ($.ogg_position == 3) {
    $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 26.3, -339.7, 15.1);
    $.ojg_love1.ClearThreatSearch();
    $.ojg_love1.TurnToFaceCoord(29.0, -339.0, -100.0);
    $.ojg_love1.SetIdle();
  }
  if ($.ogg_position == 4) {
    $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 25.5, -350.4, 15.1);
    $.ojg_love1.ClearThreatSearch();
    $.ojg_love1.TurnToFaceCoord(29.0, -350.0, -100.0);
    $.ojg_love1.SetIdle();
  }
  if ($.ogg_position == 5) {
    $.ojg_love1 = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 47.0, -386.0, 15.1);
    $.ojg_love1.ClearThreatSearch();
    $.ojg_love1.TurnToFaceCoord(47.0, -381.0, 16.0);
    $.ojg_love1.SetIdle();
  }
  Text.PrintNow("LOVE1_2", 7000, 1);
  $.garage_car1_love1 = Car.Create(131 /* CAR_COLUMB */, 26.2, -365.5, 15.1);
  $.garage_car1_love1.SetHeading(270.0);
  $.garage_car2_love1 = Car.Create(131 /* CAR_COLUMB */, 73.6, -352.7, 15.1);
  $.garage_car2_love1.SetHeading(270.0);
  $.baddie1_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 71.0, -332.0, -100.0);
  $.baddie1_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie1_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie1_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie1_love1.TurnToFaceCoord(72.0, -318.0, -100.0);
  Path.AddRoutePoint(0, 71.0, -319.0, -100.0);
  Path.AddRoutePoint(0, 71.0, -332.0, -100.0);
  $.baddie1_love1.SetObjFollowRoute(0, 3 /* FOLLOW_ROUTE_LOOP */);
  $.baddie2_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 61.0, -318.0, -100.0);
  $.baddie2_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie2_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie2_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie2_love1.TurnToFaceCoord(61.0, -335.0, -100.0);
  Path.AddRoutePoint(1, 61.0, -318.0, -100.0);
  Path.AddRoutePoint(1, 61.0, -335.0, -100.0);
  $.baddie2_love1.SetObjFollowRoute(1, 3 /* FOLLOW_ROUTE_LOOP */);
  $.baddie3_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 42.0, -375.0, -100.0);
  $.baddie3_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie3_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie3_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie3_love1.TurnToFaceCoord(42.0, -373.0, -100.0);
  $.baddie4_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 52.0, -375.0, -100.0);
  $.baddie4_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie4_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie4_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie4_love1.TurnToFaceCoord(52.0, -371.0, -100.0);
  $.baddie5_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 32.0, -345.0, -100.0);
  $.baddie5_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie5_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie5_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie5_love1.TurnToFaceCoord(-30.0, -367.0, -100.0);
  $.baddie6_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 33.0, -328.0, -100.0);
  $.baddie6_love1.SetThreatSearch(0 /* threat_player1 */);
  $.baddie6_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.baddie6_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.baddie6_love1.TurnToFaceCoord(35.0, -328.0, -100.0);
  $.garage_baddie1_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 55.87, -312.77, 15.1);
  $.garage_baddie1_love1.ClearThreatSearch();
  $.garage_baddie1_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie1_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie1_love1.TurnToFaceCoord(56.0, -321.0, -100.0);
  $.garage_baddie2_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 58.24, -312.77, 15.1);
  $.garage_baddie2_love1.ClearThreatSearch();
  $.garage_baddie2_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie2_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie2_love1.TurnToFaceCoord(56.0, -321.0, -100.0);
  $.garage_baddie3_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 66.26, -309.99, 15.1);
  $.garage_baddie3_love1.ClearThreatSearch();
  $.garage_baddie3_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie3_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie3_love1.TurnToFaceCoord(65.37, -316.30, -100.0);
  $.garage_baddie4_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 28.64, -339.83, 15.1);
  $.garage_baddie4_love1.ClearThreatSearch();
  $.garage_baddie4_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie4_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie4_love1.TurnToFaceCoord(35.26, -339.72, -100.0);
  $.garage_baddie5_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 29.8, -350.5, 15.1);
  $.garage_baddie5_love1.ClearThreatSearch();
  $.garage_baddie5_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie5_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie5_love1.TurnToFaceCoord(34.6, -350.0, -100.0);
  $.garage_baddie6_love1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 46.7, -379.3, 15.1);
  $.garage_baddie6_love1.ClearThreatSearch();
  $.garage_baddie6_love1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 30000);
  $.garage_baddie6_love1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.garage_baddie6_love1.TurnToFaceCoord(47.1, -375.9, -100.0);
  $.blob_flag = 0;
  while (!($.ojg_love1.LocateStoppedAnyMeans2D(49.0, -1550.0, 3.0, 4.0, $.blob_flag))) {
    await asyncWait(0);
    if (Char.IsDead($.ojg_love1)) {
      Text.PrintNow("LOVE1_6", 5000, 1);
      // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love1_failed"); // fallback: would break linear control flow
    }
    if ($.flag_player_in_area_love1 == 0) {
      if (!($.player.IsInModel(131 /* CAR_COLUMB */))) {
        if ($.flag_player_got_car_message_love1 == 0) {
          Text.PrintNow("LOVE1_5", 5000, 1);
          $.radar_blip_coord2_love1.Remove();
          $.flag_player_got_car_message_love1 = 1;
        }
      }
      else {
        if ($.flag_player_got_car_message_love1 == 1) {
          $.radar_blip_coord2_love1 = Blip.AddForCoord(52.0, -343.0, -100.0);
          $.flag_player_got_car_message_love1 = 0;
        }
      }
    }
    if ($.flag_ojg_in_group == 0 && $.player.LocateAnyMeansChar2D($.ojg_love1, 3.0, 3.0, 0 /* FALSE */)) {
      $.ojg_love1.FollowPlayer($.player);
      Text.PrintNow("LOVE1_3", 7000, 1);
      $.radar_blip_coord2_love1.Remove();
      $.radar_blip_coord1_love1 = Blip.AddForCoord(49.1, -1550.5, -100.0);
      $.blob_flag = 1;
      $.flag_ojg_in_group = 1;
    }
    if ($.flag_ojg_in_group == 0) {
      if ($.player.IsInArea3D(92.2, -329.4, 15.0, 96.4, -315.8, 18.0, 0 /* FALSE */)) {
        if (!($.player.IsInModel(131 /* CAR_COLUMB */)) && $.flag_message_car_again == 0 && $.flag_player_in_area_love1 == 1) {
          Text.PrintNow("LOVE1_7", 5000, 1);
          $.flag_message_car_again = 1;
        }
      }
      else {
        $.flag_message_car_again = 0;
      }
    }
    if ($.flag_baddie1_dead_love1 == 0) {
      if (Char.IsDead($.baddie1_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie1_dead_love1 = 1;
      }
    }
    if ($.flag_baddie2_dead_love1 == 0) {
      if (Char.IsDead($.baddie2_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie2_dead_love1 = 1;
      }
    }
    if ($.flag_baddie3_dead_love1 == 0) {
      if (Char.IsDead($.baddie3_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie3_dead_love1 = 1;
      }
    }
    if ($.flag_baddie4_dead_love1 == 0) {
      if (Char.IsDead($.baddie4_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie4_dead_love1 = 1;
      }
    }
    if ($.flag_baddie5_dead_love1 == 0) {
      if (Char.IsDead($.baddie5_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie5_dead_love1 = 1;
      }
    }
    if ($.flag_baddie6_dead_love1 == 0) {
      if (Char.IsDead($.baddie6_love1)) {
        $.flag_kill_player_love1 = 1;
        $.flag_baddie6_dead_love1 = 1;
      }
    }
    if ($.flag_garage_baddie1_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie1_love1)) {
        $.flag_garage_baddie1_dead_love1 = 1;
      }
      else {
        if ($.flag_garage2_open == 1) {
          $.garage_baddie1_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie1_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.flag_garage_baddie2_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie2_love1)) {
        $.flag_garage_baddie2_dead_love1 = 1;
      }
      else {
        if ($.flag_garage2_open == 1) {
          $.garage_baddie2_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie2_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.flag_garage_baddie3_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie3_love1)) {
        $.flag_garage_baddie3_dead_love1 = 1;
      }
      else {
        if ($.flag_garage1_open == 1) {
          $.garage_baddie3_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie3_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.flag_garage_baddie4_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie4_love1)) {
        $.flag_garage_baddie4_dead_love1 = 1;
      }
      else {
        if ($.flag_garage3_open == 1) {
          $.garage_baddie4_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie4_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.flag_garage_baddie5_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie5_love1)) {
        $.flag_garage_baddie5_dead_love1 = 1;
      }
      else {
        if ($.flag_garage4_open == 1) {
          $.garage_baddie5_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie5_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.flag_garage_baddie6_dead_love1 == 0) {
      if (Char.IsDead($.garage_baddie6_love1)) {
        $.flag_garage_baddie6_dead_love1 = 1;
      }
      else {
        if ($.flag_garage5_open == 1) {
          $.garage_baddie6_love1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.garage_baddie6_love1.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
    if ($.player.IsInArea3D(31.0, -317.0, 14.0, 91.0, -394.0, 25.0, 0 /* FALSE */)) {
      $.flag_kill_player_love1 = 1;
    }
    if ($.flag_kill_player_love1 == 1) {
      $.flag_player_in_area_love1 = 1;
      if ($.flag_had_garage_message_love1 == 0) {
        Text.PrintNow("LOVE1_4", 7000, 1);
        $.flag_had_garage_message_love1 = 1;
      }
      if ($.flag_baddie1_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie1_love1))) {
          if ($.flag_baddie1_in_area_love1 == 0) {
            $.baddie1_love1.SetObjRunToCoord(72.5, -321.9);
            $.flag_baddie1_in_area_love1 = 1;
          }
          if ($.flag_baddie1_in_area_love1 == 1) {
            if ($.baddie1_love1.LocateAnyMeans2D(72.5, -321.9, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie1_love1.SetObjGuardSpot(72.5, -321.9, 15.17);
              $.baddie1_love1.TurnToFacePlayer($.player);
              $.baddie1_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.flag_baddie2_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie2_love1))) {
          if ($.flag_baddie2_in_area_love1 == 0) {
            $.baddie2_love1.SetObjRunToCoord(66.5, -332.0);
            $.flag_baddie2_in_area_love1 = 1;
          }
          if ($.flag_baddie2_in_area_love1 == 1) {
            if ($.baddie2_love1.LocateAnyMeans2D(66.5, -332.0, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie2_love1.SetObjGuardSpot(66.5, -332.0, 15.17);
              $.baddie2_love1.TurnToFacePlayer($.player);
              $.baddie2_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.flag_baddie3_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie3_love1))) {
          if ($.flag_baddie3_in_area_love1 == 0) {
            $.baddie3_love1.SetObjRunToCoord(44.4, -360.7);
            $.flag_baddie3_in_area_love1 = 1;
          }
          if ($.flag_baddie3_in_area_love1 == 1) {
            if ($.baddie3_love1.LocateAnyMeans2D(44.4, -360.7, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie3_love1.SetObjRunToCoord(47.9, -360.1);
              $.flag_baddie3_in_area_love1 = 2;
            }
          }
          if ($.flag_baddie3_in_area_love1 == 2) {
            if ($.baddie3_love1.LocateAnyMeans2D(47.9, -360.1, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie3_love1.SetObjGuardSpot(47.9, -360.1, 15.1);
              $.baddie3_love1.TurnToFacePlayer($.player);
              $.baddie3_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.flag_baddie4_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie4_love1))) {
          if ($.flag_baddie4_in_area_love1 == 0) {
            $.baddie4_love1.SetObjRunToCoord(57.0, -365.3);
            $.flag_baddie4_in_area_love1 = 1;
          }
          if ($.flag_baddie4_in_area_love1 == 1) {
            if ($.baddie4_love1.LocateAnyMeans2D(57.0, -365.3, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie4_love1.SetObjGuardSpot(57.0, -365.3, 15.1);
              $.baddie4_love1.TurnToFacePlayer($.player);
              $.baddie4_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.flag_baddie5_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie5_love1))) {
          if ($.flag_baddie5_in_area_love1 == 0) {
            $.baddie5_love1.SetObjRunToCoord(38.7, -345.1);
            $.flag_baddie5_in_area_love1 = 1;
          }
          if ($.flag_baddie5_in_area_love1 == 1) {
            if ($.baddie5_love1.LocateAnyMeans2D(38.7, -345.1, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie5_love1.SetObjRunToCoord(45.8, -344.3);
              $.flag_baddie5_in_area_love1 = 2;
            }
          }
          if ($.flag_baddie5_in_area_love1 == 2) {
            if ($.baddie5_love1.LocateAnyMeans2D(45.8, -344.3, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie5_love1.SetObjGuardSpot(45.8, -344.3, 15.1);
              $.baddie5_love1.TurnToFacePlayer($.player);
              $.baddie5_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.flag_baddie6_dead_love1 == 0) {
        if (!(Char.IsDead($.baddie6_love1))) {
          if ($.flag_baddie6_in_area_love1 == 0) {
            $.baddie6_love1.SetObjRunToCoord(37.3, -331.0);
            $.flag_baddie6_in_area_love1 = 1;
          }
          if ($.flag_baddie6_in_area_love1 == 1) {
            if ($.baddie6_love1.LocateAnyMeans2D(37.3, -331.0, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie6_love1.SetObjRunToCoord(42.5, -331.8);
              $.flag_baddie6_in_area_love1 = 2;
            }
          }
          if ($.flag_baddie6_in_area_love1 == 2) {
            if ($.baddie6_love1.LocateAnyMeans2D(42.5, -331.8, 0.5, 0.5, 0 /* FALSE */)) {
              $.baddie6_love1.SetObjGuardSpot(42.5, -331.8, 15.1);
              $.baddie6_love1.TurnToFacePlayer($.player);
              $.baddie6_love1.SetStayInSamePlace(1 /* TRUE */);
            }
          }
        }
      }
      if ($.player.IsInAreaOnFoot3D(63.01, -317.50, 13.0, 69.28, -321.73, 20.0, 0 /* FALSE */)) {
        if ($.flag_garage1_open == 0) {
          $.garage1_love1.Open();
          $.flag_garage1_open = 1;
        }
      }
      if ($.player.IsInAreaOnFoot3D(53.7, -317.56, 13.0, 61.0, -320.46, 20.0, 0 /* FALSE */)) {
        if ($.flag_garage2_open == 0) {
          $.garage2_love1.Open();
          $.flag_garage2_open = 1;
        }
      }
      if ($.player.IsInAreaOnFoot3D(31.8, -344.4, 13.0, 35.1, -335.6, 20.0, 0 /* FALSE */)) {
        if ($.flag_garage3_open == 0) {
          $.garage3_love1.Open();
          $.flag_garage3_open = 1;
        }
      }
      if ($.player.IsInAreaOnFoot3D(31.41, -355.6, 13.0, 34.21, -344.81, 20.0, 0 /* FALSE */)) {
        if ($.flag_garage4_open == 0) {
          $.garage4_love1.Open();
          $.flag_garage4_open = 1;
        }
      }
      if ($.player.IsInAreaOnFoot3D(52.9, -376.3, 13.0, 42.0, -373.2, 20.0, 0 /* FALSE */)) {
        if ($.flag_garage5_open == 0) {
          $.garage5_love1.Open();
          $.flag_garage5_open = 1;
        }
      }
    }
    if ($.flag_ojg_in_group == 1) {
      if (Char.IsDead($.ojg_love1)) {
        Text.PrintNow("LOVE1_6", 5000, 1);
        // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love1_failed"); // fallback: would break linear control flow
      }
      if (!($.ojg_love1.IsInPlayersGroup($.player)) && $.flag_blip_on_ojg_love1 == 0) {
        Text.PrintNow("HEY8", 5000, 1);
        $.radar_blip_ped1_love1 = Blip.AddForChar($.ojg_love1);
        $.radar_blip_coord1_love1.Remove();
        $.flag_blip_on_ojg_love1 = 1;
        $.blob_flag = 0;
      }
      if ($.player.LocateAnyMeansChar2D($.ojg_love1, 8.0, 8.0, 0 /* FALSE */) && $.flag_blip_on_ojg_love1 == 1) {
        $.ojg_love1.FollowPlayer($.player);
        Text.PrintNow("LOVE1_3", 7000, 1);
        $.radar_blip_ped1_love1.Remove();
        $.radar_blip_coord1_love1 = Blip.AddForCoord(49.1, -1550.5, -100.0);
        $.flag_blip_on_ojg_love1 = 0;
        $.blob_flag = 1;
      }
    }
  }
  $.radar_blip_coord1_love1.Remove();
  $.ojg_love1.LeaveGroup();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  if ($.ojg_love1.IsInAnyCar()) {
    $.car2_love1 = $.ojg_love1.StoreCarIsIn();
    $.ojg_love1.SetObjLeaveCar($.car2_love1);
    while ($.ojg_love1.IsInAnyCar()) {
      await asyncWait(0);
      if (Char.IsDead($.ojg_love1)) {
        Text.PrintNow("LOVe1_6", 5000, 1);
        // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love1_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.ojg_love1.SetObjRunToCoord(59.5, -1548.7);
  timerb = 0;
  while (timerb < 1500) {
    await asyncWait(0);
    if (Char.IsDead($.ojg_love1)) {
      Text.PrintNow("LOVe1_6", 5000, 1);
      // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love1_failed"); // fallback: would break linear control flow
    }
  }
  $.ojg_love1.SetCoordinates(82.9, -1548.9, 27.2);
  $.ojg_love1.SetHeading(270.0);
  $.ojg_love1.SetObjGotoCoordOnFoot(98.7, -1548.8);
  Camera.SetFixedPosition(77.5, -1548.8, 28.2, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(93.9, -1548.9, 28.3, 2 /* JUMP_CUT */);
  timerb = 0;
  while (!($.ojg_love1.LocateOnFoot3D(98.7, -1548.8, 27.3, 0.5, 0.5, 4.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if (Char.IsDead($.ojg_love1)) {
      Text.PrintNow("LOVe1_6", 5000, 1);
      // SCM GOTO → mission_love1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love1_failed"); // fallback: would break linear control flow
    }
    if (timerb >= 8000) {
      if (!($.ojg_love1.LocateOnFoot3D(98.7, -1548.8, 27.3, 0.5, 0.5, 4.0, 0 /* FALSE */))) {
        $.ojg_love1.RemoveElegantly();
        // SCM GOTO → mission_bloke_stuck_love1 (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_bloke_stuck_love1"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_bloke_stuck_love1() {
  $.ojg_love1.SetIdle();
  Camera.RestoreJumpcut();
  $.ojg_love1.RemoveElegantly();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  }
  // SCM GOTO → mission_love1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love1_passed"); // fallback: would break linear control flow
}

async function mission_love1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  $.flag_failed_love1 = 1;
  return;
}

async function mission_love1_passed() {
  $.flag_love_mission1_passed = 1;
  Stat.RegisterMissionPassed("LOVE1");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 40000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(40000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT love_mission2_loop
  return;
}

async function mission_cleanup_love1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  Path.RemoveRoute(0);
  Path.RemoveRoute(1);
  $.player.SetControl(1 /* ON */);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  $.radar_blip_ped1_love1.Remove();
  $.radar_blip_coord1_love1.Remove();
  $.radar_blip_coord2_love1.Remove();
  if (!(Char.IsDead($.baddie1_love1))) {
    $.baddie1_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.baddie2_love1))) {
    $.baddie2_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.baddie3_love1))) {
    $.baddie3_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.baddie4_love1))) {
    $.baddie4_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.baddie5_love1))) {
    $.baddie5_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  if (!(Char.IsDead($.baddie6_love1))) {
    $.baddie6_love1.SetStayInSamePlace(0 /* FALSE */);
  }
  Mission.Finish();
  return;
}

export async function love1() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_love1
  await mission_start_love1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love1_failed
    await mission_love1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love1
  await mission_cleanup_love1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT car_love1
  // VAR_INT car_love2
  // VAR_INT ojg_love1
  // VAR_INT baddie1_love1
  // VAR_INT baddie2_love1
  // VAR_INT baddie3_love1
  // VAR_INT baddie4_love1
  // VAR_INT baddie5_love1
  // VAR_INT baddie6_love1
  // VAR_INT garage_baddie1_love1
  // VAR_INT garage_baddie2_love1
  // VAR_INT garage_baddie3_love1
  // VAR_INT garage_baddie4_love1
  // VAR_INT garage_baddie5_love1
  // VAR_INT garage_baddie6_love1
  // VAR_INT radar_blip_ped1_love1
  // VAR_INT flag_ojg_in_group
  // VAR_INT radar_blip_coord1_love1
  // VAR_INT flag_blip_on_ojg_love1
  // VAR_INT car2_love1
  // VAR_INT flag_baddie1_dead_love1
  // VAR_INT flag_baddie2_dead_love1
  // VAR_INT flag_baddie3_dead_love1
  // VAR_INT flag_baddie4_dead_love1
  // VAR_INT flag_baddie5_dead_love1
  // VAR_INT flag_baddie6_dead_love1
  // VAR_INT flag_garage_baddie1_dead_love1
  // VAR_INT flag_garage_baddie2_dead_love1
  // VAR_INT flag_garage_baddie3_dead_love1
  // VAR_INT flag_garage_baddie4_dead_love1
  // VAR_INT flag_garage_baddie5_dead_love1
  // VAR_INT flag_garage_baddie6_dead_love1
  // VAR_INT flag_garage1_open
  // VAR_INT flag_garage2_open
  // VAR_INT flag_garage3_open
  // VAR_INT flag_garage4_open
  // VAR_INT flag_garage5_open
  // VAR_INT radar_blip_coord2_love1
  // VAR_INT ogg_position
  // VAR_INT garage_car1_love1
  // VAR_INT garage_car2_love1
  // VAR_INT flag_had_garage_message_love1
  // VAR_INT ojg_in_area
  // VAR_INT flag_ojg_dead
  // VAR_INT flag_player_in_area_love1
  // VAR_INT flag_player_got_car_message_love1
  // VAR_INT flag_message_car_again
  // VAR_INT flag_ojg_in_area
  // VAR_INT flag_kill_player_love1
  // VAR_INT flag_baddie3_in_area_love1
  // VAR_INT flag_baddie4_in_area_love1
  // VAR_INT flag_baddie5_in_area_love1
  // VAR_INT flag_baddie6_in_area_love1
  // VAR_INT flag_baddie1_in_area_love1
  // VAR_INT flag_baddie2_in_area_love1
}
