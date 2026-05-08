// Generated from Main/Commercial/kenji4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_kenji4() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_kenji_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.counter_number_of_hispanics_dead = 0;
  $.flag_hispanic1_km4_dead = 0;
  $.flag_hispanic2_km4_dead = 0;
  $.flag_hispanic3_km4_dead = 0;
  $.flag_hispanic4_km4_dead = 0;
  $.flag_hispanic5_km4_dead = 0;
  $.flag_hispanic6_km4_dead = 0;
  $.flag_briefcase3_pickedup_km4 = 0;
  $.flag_hispanic1_hate_player_km4 = 0;
  $.flag_hispanic2_hate_player_km4 = 0;
  $.flag_hispanic3_hate_player_km4 = 0;
  $.flag_hispanic4_hate_player_km4 = 0;
  $.flag_hispanic5_hate_player_km4 = 0;
  $.switch_gang_diablo_off = 1;
  $.flag_player_had_message_km4 = 0;
  $.flag_briefcase1_created_km4 = 0;
  $.flag_briefcase2_created_km4 = 0;
  $.flag_briefcase3_created_km4 = 0;
  $.flag_briefcase1_collected_km4 = 0;
  $.flag_briefcase2_collected_km4 = 0;
  $.flag_briefcase3_collected_km4 = 0;
  World.SwapNearestBuildingModel(-88.371, -487.666, 15.166, 50.0, convstore01, convstre_dmge01);
  {
  Streaming.LoadSpecialCharacter(1, $.kenji);
  Streaming.RequestModel(ped`GANG_YAKUZA_A`);
  Streaming.LoadSpecialModel(hier`cutobj01`, KENJIH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.RequestModel(casino_garden);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(ped`GANG_YAKUZA_A`)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(casino_garden))) {
    await asyncWait(0);
  }
  Cutscene.Load(k4_shi);
  Cutscene.SetOffset(476.380, -1382.168, 67.347);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_kenji = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_kenji.SetAnim($.kenji);
  $.cs_yakuza = CutsceneObject.Create(ped`GANG_YAKUZA_A`);
  $.cs_yakuza.SetAnim(gang07);
  $.cs_kenjihead = CutsceneHead.Create($.cs_kenji, hier`cutobj01`);
  $.cs_kenjihead.SetAnim($.kenji);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(459.1, -1413.0, 25.11, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(459.1, -1413.0, 25.11);
  $.player.SetHeading(132.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 3580) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_A", 10000, 1);
  while ($.cs_time < 8316) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_B", 10000, 1);
  while ($.cs_time < 13513) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_C", 10000, 1);
  while ($.cs_time < 17808) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM4_C");
  while ($.cs_time < 18333) {
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
  World.SwitchRubbish(1 /* ON */);
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(casino_garden);
  Streaming.RequestModel(ped`GANG_DIABLO_A`);
  while (!(Streaming.HasModelLoaded(ped`GANG_DIABLO_A`))) {
    await asyncWait(0);
  }
  $.briefcase1_km4 = Pickup.Create(briefcase, 3 /* pickup_once */, 236.8, -1580.0, 25.7);
  $.flag_briefcase1_created_km4 = 1;
  $.radar_blip_coord2_km4 = Blip.AddForPickup($.briefcase1_km4);
  while (!($.briefcase1_km4.HasBeenCollected())) {
    await asyncWait(0);
  }
  $.flag_briefcase1_collected_km4 = 1;
  Text.PrintNow("KM4_8", 5000, 1);
  $.radar_blip_coord2_km4.Remove();
  $.briefcase2_km4 = Pickup.Create(briefcase, 3 /* pickup_once */, 119.56, -1110.51, 25.66);
  $.flag_briefcase2_created_km4 = 1;
  $.radar_blip_coord3_km4 = Blip.AddForPickup($.briefcase2_km4);
  $.hispanic6_km4 = Char.Create(4 /* PEDTYPE_CIVMALE */, ped`GANG_DIABLO_A`, 122.2, -1113.2, 25.2);
  $.hispanic6_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic6_km4.ClearThreatSearch();
  $.hispanic6_km4.TurnToFaceCoord(120.6, -1111.8, -100.0);
  Zone.SetPedDensity("park", 1 /* DAY */, 0);
  Zone.SetPedDensity("park", 0 /* NIGHT */, 0);
  while (!($.briefcase2_km4.HasBeenCollected())) {
    await asyncWait(0);
    if ($.flag_hispanic6_km4_dead == 0) {
      if (Char.IsDead($.hispanic6_km4)) {
        $.flag_hispanic6_km4_dead = 1;
      }
      else {
        if ($.player.LocateAnyMeansChar2D($.hispanic6_km4, 10.0, 10.0, 0 /* FALSE */)) {
          $.hispanic6_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.hispanic6_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.hispanic6_km4.SetObjKillPlayerAnyMeans($.player);
        }
      }
    }
  }
  $.flag_briefcase2_collected_km4 = 1;
  Text.PrintNow("KM4_8", 5000, 1);
  $.radar_blip_coord3_km4.Remove();
  $.radar_blip_coord5_km4 = Blip.AddForCoord(-91.5, -484.2, 15.2);
  while (!($.player.LocateStoppedAnyMeans3D(-91.5, -484.2, 15.2, 4.0, 4.0, 3.0, 1 /* TRUE */))) {
    await asyncWait(0);
  }
  Hud.SwitchWidescreen(1 /* ON */);
  $.radar_blip_coord5_km4.Remove();
  $.player.SetControl(0 /* OFF */);
  World.ClearArea(-91.0, -488.9, 18.7, 2.0, 1 /* TRUE */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Camera.SetFixedPosition(-87.33, -502.99, 21.33, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-87.37, -502.06, 20.97, 2 /* JUMP_CUT */);
  $.script_controlled_player = $.player.GetChar();
  if ($.player.IsInAnyCar()) {
    $.car_km4 = $.player.StoreCarIsIn();
    $.script_controlled_player.SetObjLeaveCar($.car_km4);
    while ($.script_controlled_player.IsInCar($.car_km4)) {
      await asyncWait(0);
      if (Car.IsDead($.car_km4)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_kenji4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji4_failed"); // fallback: would break linear control flow
      }
    }
  }
  $.script_controlled_player.SetObjGotoCoordOnFoot(-92.07, -488.84);
  timerb = 0;
  while (timerb < 1000) {
    await asyncWait(0);
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadSpecialCharacter(2, KEEPER);
  Streaming.LoadSpecialModel(hier`cutobj01`, KEEPERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj03`, SHDOOR);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.script_controlled_player.SetIdle();
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(-117.66, -565.7, 10.0, 12.34, -396.77, 20.0);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  World.SetVisibilityOfClosestObjectOfType(-88.3, -487.6, 15.1, 6.0, convstore01_door, 0 /* FALSE */);
  Cutscene.Load(k4_shi2);
  Cutscene.SetOffset(-88.1829, -491.4236, 15.1439);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_keeper = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_keeper.SetAnim(keeper);
  $.cs_shopdoor = CutsceneObject.Create(hier`cutobj03`);
  $.cs_shopdoor.SetAnim(shdoor);
  $.cs_keeperhead = CutsceneHead.Create($.cs_keeper, hier`cutobj01`);
  $.cs_keeperhead.SetAnim(keeper);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj02`);
  $.cs_playerhead.SetAnim($.player);
  World.ClearArea(-93.01, -489.43, 15.16, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(-93.01, -489.43, 15.16);
  $.player.SetHeading(101.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2690) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_1", 10000, 1);
  while ($.cs_time < 4898) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_9", 10000, 1);
  while ($.cs_time < 7467) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_2", 10000, 1);
  while ($.cs_time < 8511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("KM4_10", 10000, 1);
  while ($.cs_time < 10710) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("KM4_10");
  while ($.cs_time < 11000) {
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
  World.SwitchRubbish(1 /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Camera.SetBehindPlayer();
  World.SetVisibilityOfClosestObjectOfType(-88.3, -487.6, 15.1, 6.0, convstore01_door, 1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  World.SetPedDensityMultiplier(1.0);
  Hud.SwitchWidescreen(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Zone.SetPedDensity("park", 1 /* DAY */, 1);
  Zone.SetPedDensity("park", 0 /* NIGHT */, 1);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  $.radar_blip_coord1_km4 = Blip.AddForCoordOld(938.0, -180.0, -100.0, 5, 3 /* BOTH */);
  $.radar_blip_coord1_km4.ChangeScale(3);
  $.radar_blip_dummy1_km4 = Blip.AddForCoordOld(930.0, -190.0, -100.0, 1, 3 /* BOTH */);
  $.radar_blip_dummy1_km4.ChangeScale(3);
  $.radar_blip_dummy2_km4 = Blip.AddForCoordOld(931.0, -184.0, -100.0, 1, 3 /* BOTH */);
  $.radar_blip_dummy2_km4.ChangeScale(3);
  $.radar_blip_dummy3_km4 = Blip.AddForCoordOld(943.0, -182.0, -100.0, 1, 3 /* BOTH */);
  $.radar_blip_dummy3_km4.ChangeScale(3);
  $.radar_blip_dummy4_km4 = Blip.AddForCoordOld(943.0, -190.0, -100.0, 1, 3 /* BOTH */);
  $.radar_blip_dummy4_km4.ChangeScale(3);
  $.radar_blip_dummy5_km4 = Blip.AddForCoordOld(939.0, -183.0, -100.0, 1, 3 /* BOTH */);
  $.radar_blip_dummy5_km4.ChangeScale(3);
  Text.PrintNow("KM4_4", 7000, 1);
  while (!(Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */))) {
    await asyncWait(0);
  }
  $.briefcase3_km4 = Pickup.Create(briefcase, 3 /* pickup_once */, 938.0, -180.0, 4.5);
  $.flag_briefcase3_created_km4 = 1;
  $.radar_blip_coord4_km4 = Blip.AddForPickup($.briefcase3_km4);
  $.radar_blip_coord1_km4.Remove();
  $.hispanic1_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_A`, 930.0, -190.0, -100.0);
  $.radar_blip_diablo1_km4 = Blip.AddForChar($.hispanic1_km4);
  $.radar_blip_dummy1_km4.Remove();
  $.hispanic1_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic1_km4.ClearThreatSearch();
  $.hispanic1_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hispanic2_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_A`, 931.0, -184.0, -100.0);
  $.radar_blip_diablo2_km4 = Blip.AddForChar($.hispanic2_km4);
  $.radar_blip_dummy2_km4.Remove();
  $.hispanic2_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic2_km4.ClearThreatSearch();
  $.hispanic2_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hispanic3_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_A`, 943.0, -182.0, -100.0);
  $.radar_blip_diablo3_km4 = Blip.AddForChar($.hispanic3_km4);
  $.radar_blip_dummy3_km4.Remove();
  $.hispanic3_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic3_km4.ClearThreatSearch();
  $.hispanic3_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hispanic4_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_A`, 943.0, -190.0, -100.0);
  $.radar_blip_diablo4_km4 = Blip.AddForChar($.hispanic4_km4);
  $.radar_blip_dummy4_km4.Remove();
  $.hispanic4_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic4_km4.ClearThreatSearch();
  $.hispanic4_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.hispanic5_km4 = Char.Create(9 /* PEDTYPE_GANG_DIABLO */, ped`GANG_DIABLO_A`, 939.0, -183.0, -100.0);
  $.radar_blip_diablo5_km4 = Blip.AddForChar($.hispanic5_km4);
  $.radar_blip_dummy5_km4.Remove();
  $.hispanic5_km4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 30000);
  $.hispanic5_km4.ClearThreatSearch();
  $.hispanic5_km4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  while ($.flag_briefcase3_pickedup_km4 == 0 || $.counter_number_of_hispanics_dead < 5) {
    await asyncWait(0);
    if ($.flag_hispanic1_km4_dead == 0) {
      if (Char.IsDead($.hispanic1_km4)) {
        $.radar_blip_diablo1_km4.Remove();
        ++$.counter_number_of_hispanics_dead;
        $.flag_hispanic1_km4_dead = 1;
      }
    }
    if ($.flag_hispanic2_km4_dead == 0) {
      if (Char.IsDead($.hispanic2_km4)) {
        $.radar_blip_diablo2_km4.Remove();
        ++$.counter_number_of_hispanics_dead;
        $.flag_hispanic2_km4_dead = 1;
      }
    }
    if ($.flag_hispanic3_km4_dead == 0) {
      if (Char.IsDead($.hispanic3_km4)) {
        $.radar_blip_diablo3_km4.Remove();
        ++$.counter_number_of_hispanics_dead;
        $.flag_hispanic3_km4_dead = 1;
      }
    }
    if ($.flag_hispanic4_km4_dead == 0) {
      if (Char.IsDead($.hispanic4_km4)) {
        $.radar_blip_diablo4_km4.Remove();
        ++$.counter_number_of_hispanics_dead;
        $.flag_hispanic4_km4_dead = 1;
      }
    }
    if ($.flag_hispanic5_km4_dead == 0) {
      if (Char.IsDead($.hispanic5_km4)) {
        $.radar_blip_diablo5_km4.Remove();
        ++$.counter_number_of_hispanics_dead;
        $.flag_hispanic5_km4_dead = 1;
      }
    }
    if ($.flag_briefcase3_pickedup_km4 == 0) {
      if ($.briefcase3_km4.HasBeenCollected()) {
        $.radar_blip_coord4_km4.Remove();
        Text.PrintNow("KM4_8", 5000, 1);
        $.flag_briefcase3_collected_km4 = 1;
        $.flag_briefcase3_pickedup_km4 = 1;
      }
    }
    if ($.player.LocateAnyMeans3D(940.0, -185.0, 4.2, 25.0, 25.0, 10.0, 0 /* FALSE */)) {
      if ($.flag_hispanic1_km4_dead == 0 && $.flag_hispanic1_hate_player_km4 == 0) {
        $.hispanic1_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.hispanic1_km4.TurnToFacePlayer($.player);
        $.hispanic1_km4.SetObjKillPlayerAnyMeans($.player);
        $.flag_hispanic1_hate_player_km4 = 1;
      }
      if ($.flag_hispanic2_km4_dead == 0 && $.flag_hispanic2_hate_player_km4 == 0) {
        $.hispanic2_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.hispanic2_km4.TurnToFacePlayer($.player);
        $.hispanic2_km4.SetObjKillPlayerAnyMeans($.player);
        $.flag_hispanic2_hate_player_km4 = 1;
      }
      if ($.flag_hispanic3_km4_dead == 0 && $.flag_hispanic3_hate_player_km4 == 0) {
        $.hispanic3_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.hispanic3_km4.TurnToFacePlayer($.player);
        $.hispanic3_km4.SetObjKillPlayerAnyMeans($.player);
        $.flag_hispanic3_hate_player_km4 = 1;
      }
      if ($.flag_hispanic4_km4_dead == 0 && $.flag_hispanic4_hate_player_km4 == 0) {
        $.hispanic4_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.hispanic4_km4.TurnToFacePlayer($.player);
        $.hispanic4_km4.SetObjKillPlayerAnyMeans($.player);
        $.flag_hispanic4_hate_player_km4 = 1;
      }
      if ($.flag_hispanic5_km4_dead == 0 && $.flag_hispanic5_hate_player_km4 == 0) {
        $.hispanic5_km4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.hispanic5_km4.TurnToFacePlayer($.player);
        $.hispanic5_km4.SetObjKillPlayerAnyMeans($.player);
        $.flag_hispanic5_hate_player_km4 = 1;
      }
    }
  }
  Text.PrintNow("KM4_11", 5000, 1);
  $.radar_blip_coord6_km4 = Blip.AddForCoord(452.3, -1465.8, 17.6);
  $.blob_flag = 1;
  while (!($.player.LocateStoppedAnyMeans3D(452.3, -1465.8, 17.6, 4.0, 4.0, 4.0, $.blob_flag))) {
    await asyncWait(0);
  }
  $.radar_blip_coord6_km4.Remove();
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.SetControl(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.script_controlled_player = $.player.GetChar();
  if ($.player.IsInAnyCar()) {
    $.car_cut_km4 = $.player.StoreCarIsIn();
    $.script_controlled_player.SetObjLeaveCar($.car_cut_km4);
    while ($.player.IsInCar($.car_cut_km4)) {
      await asyncWait(0);
      if (Car.IsDead($.car_cut_km4)) {
        Text.PrintNow("WRECKED", 5000, 1);
        // SCM GOTO → mission_kenji4_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_kenji4_failed"); // fallback: would break linear control flow
      }
    }
  }
  Camera.SetFixedPosition(420.41, -1479.59, 26.13, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(420.87, -1478.75, 26.38, 2 /* JUMP_CUT */);
  $.player.SetCoordinates(425.85, -1477.16, -100.0);
  $.script_controlled_player.SetObjGotoCoordOnFoot(428.57, -1465.01);
  while (!($.script_controlled_player.IsObjectivePassed())) {
    await asyncWait(0);
  }
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.player.SetCoordinates(426.81, -1486.40, 17.64);
  $.player.SetHeading(180.0);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1000, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  }
  // SCM GOTO → mission_kenji4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_kenji4_passed"); // fallback: would break linear control flow
}

async function mission_kenji4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_kenji4_passed() {
  $.flag_kenji_mission4_passed = 1;
  Stat.RegisterMissionPassed("KM4");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("m_pass", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT kenji_mission5_loop
  return;
}

async function mission_cleanup_kenji4() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.switch_gang_diablo_off = 0;
  if ($.flag_briefcase1_created_km4 == 1) {
    if ($.flag_briefcase1_collected_km4 == 0) {
      $.briefcase1_km4.Remove();
    }
  }
  if ($.flag_briefcase2_created_km4 == 1) {
    if ($.flag_briefcase2_collected_km4 == 0) {
      $.briefcase2_km4.Remove();
    }
  }
  if ($.flag_briefcase3_created_km4 == 1) {
    if ($.flag_briefcase3_collected_km4 == 0) {
      $.briefcase3_km4.Remove();
    }
  }
  $.radar_blip_diablo1_km4.Remove();
  $.radar_blip_diablo2_km4.Remove();
  $.radar_blip_diablo3_km4.Remove();
  $.radar_blip_diablo4_km4.Remove();
  $.radar_blip_diablo5_km4.Remove();
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_DIABLO_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_YAKUZA_A`);
  $.radar_blip_coord2_km4.Remove();
  $.radar_blip_coord3_km4.Remove();
  $.radar_blip_coord4_km4.Remove();
  $.radar_blip_coord5_km4.Remove();
  $.radar_blip_coord1_km4.Remove();
  $.radar_blip_coord6_km4.Remove();
  $.radar_blip_dummy1_km4.Remove();
  $.radar_blip_dummy2_km4.Remove();
  $.radar_blip_dummy3_km4.Remove();
  $.radar_blip_dummy4_km4.Remove();
  $.radar_blip_dummy5_km4.Remove();
  Zone.SetPedDensity("park", 1 /* DAY */, 1);
  Zone.SetPedDensity("park", 0 /* NIGHT */, 1);
  Mission.Finish();
  return;
}

export async function kenji4() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_kenji4
  await mission_start_kenji4();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_kenji4_failed
    await mission_kenji4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_kenji4
  await mission_cleanup_kenji4();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT briefcase1_km4
  // VAR_INT briefcase2_km4
  // VAR_INT briefcase3_km4
  // VAR_INT hispanic1_km4
  // VAR_INT hispanic2_km4
  // VAR_INT hispanic3_km4
  // VAR_INT hispanic4_km4
  // VAR_INT hispanic5_km4
  // VAR_INT hispanic6_km4
  // VAR_INT radar_blip_coord2_km4
  // VAR_INT radar_blip_coord3_km4
  // VAR_INT radar_blip_coord4_km4
  // VAR_INT radar_blip_coord5_km4
  // VAR_INT radar_blip_ped_km4
  // VAR_INT radar_blip_coord1_km4
  // VAR_INT counter_number_of_hispanics_dead
  // VAR_INT flag_hispanic1_km4_dead
  // VAR_INT flag_hispanic2_km4_dead
  // VAR_INT flag_hispanic3_km4_dead
  // VAR_INT flag_hispanic4_km4_dead
  // VAR_INT flag_hispanic5_km4_dead
  // VAR_INT flag_hispanic6_km4_dead
  // VAR_INT flag_briefcase3_pickedup_km4
  // VAR_INT flag_hispanic1_hate_player_km4
  // VAR_INT flag_hispanic2_hate_player_km4
  // VAR_INT flag_hispanic3_hate_player_km4
  // VAR_INT flag_hispanic4_hate_player_km4
  // VAR_INT flag_hispanic5_hate_player_km4
  // VAR_INT radar_blip_diablo1_km4
  // VAR_INT radar_blip_diablo2_km4
  // VAR_INT radar_blip_diablo3_km4
  // VAR_INT radar_blip_diablo4_km4
  // VAR_INT radar_blip_diablo5_km4
  // VAR_INT radar_blip_dummy1_km4
  // VAR_INT radar_blip_dummy2_km4
  // VAR_INT radar_blip_dummy3_km4
  // VAR_INT radar_blip_dummy4_km4
  // VAR_INT radar_blip_dummy5_km4
  // VAR_INT flag_player_had_message_km4
  // VAR_INT car_km4
  // VAR_INT flag_briefcase1_created_km4
  // VAR_INT flag_briefcase2_created_km4
  // VAR_INT flag_briefcase3_created_km4
  // VAR_INT flag_briefcase1_collected_km4
  // VAR_INT flag_briefcase2_collected_km4
  // VAR_INT flag_briefcase3_collected_km4
  // VAR_INT radar_blip_coord6_km4
  // VAR_INT car_cut_km4
}
