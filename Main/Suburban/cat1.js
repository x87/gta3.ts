// Generated from Main/Suburban/cat1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_cat1() {
  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_cat_mission = 1;
  // ScriptName
  await asyncWait(0);
  $.added_the_blip_for_maria = 0;
  $.been_on_heli_pad = 0;
  $.set_as_leader_before = 0;
  $.maria_created_before = 0;
  $.flag_player_on_mission = 1;
  $.camera_cut = 0;
  Zone.SetPedInfo("WEE_DAM", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("WEE_DAM", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  {
  $.player.ClearWantedLevel();
  Streaming.LoadSpecialCharacter(1, $.maria);
  Streaming.LoadSpecialCharacter(2, cat);
  Streaming.LoadSpecialCharacter(3, col2);
  Streaming.LoadSpecialCharacter(4, colrob);
  Streaming.LoadSpecialModel(hier`cutobj01`, fulcase);
  Streaming.LoadSpecialModel(hier`cutobj02`, cath);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_B`);
  Streaming.RequestModel(car`COLUMB`);
  Streaming.RequestModel(car`FLATBED`);
  Streaming.RequestModel(New_Colmansn);
  Streaming.RequestModel(landpart15);
  Streaming.RequestModel(Security_Hut);
  Streaming.RequestModel(columansion_wall);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_B`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(car`COLUMB`)) || !(Streaming.HasModelLoaded(New_Colmansn)) || !(Streaming.HasModelLoaded(landpart15)) || !(Streaming.HasModelLoaded(Security_Hut)) || !(Streaming.HasModelLoaded(columansion_wall))) {
    await asyncWait(0);
  }
  Streaming.LoadScene(-363.5, 243.5, 59.3);
  Cutscene.Load(C1_TEX);
  Cutscene.SetOffset(-358.553, 249.189, 59.329);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_maria = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_maria.SetAnim($.maria);
  $.cs_cat = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_cat.SetAnim(cat);
  $.cs_colub2 = CutsceneObject.Create(ped`SPECIAL4`);
  $.cs_colub2.SetAnim(colrob);
  $.cs_colub3 = CutsceneObject.Create(ped`GANG_COLOMBIAN_A`);
  $.cs_colub3.SetAnim(gang11);
  $.cs_colub4 = CutsceneObject.Create(ped`GANG_COLOMBIAN_B`);
  $.cs_colub4.SetAnim(gang12);
  $.cs_case = CutsceneObject.Create(hier`cutobj01`);
  $.cs_case.SetAnim(fulcase);
  $.cs_cathead = CutsceneHead.Create($.cs_cat, hier`cutobj02`);
  $.cs_cathead.SetAnim(cat);
  $.colubian_car1 = Car.Create(131 /* CAR_COLUMB */, -422.9, 291.8, 61.8);
  $.colubian_car1.SetHeading(226.0);
  $.colubian_guard1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -395.4, 293.4, -100.0);
  $.colubian_guard1.GiveWeapon(3 /* WEAPONTYPE_UZI */, 200);
  $.colubian_guard3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -368.1, 252.4, -100.0);
  $.colubian_guard3.GiveWeapon(3 /* WEAPONTYPE_UZI */, 200);
  $.colubian_guard3.SetHeading(0.0);
  $.colubian_guard4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -358.0, 251.8, -100.0);
  $.colubian_guard4.GiveWeapon(3 /* WEAPONTYPE_UZI */, 200);
  $.colubian_guard4.SetHeading(0.0);
  $.colubian_guard12 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -392.4, 301.0, 70.7);
  $.colubian_guard12.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 200);
  $.colubian_guard12.SetHeading(0.0);
  $.colubian_guard12.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard13 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -374.0, 301.0, 70.7);
  $.colubian_guard13.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 200);
  $.colubian_guard13.SetHeading(0.0);
  $.colubian_guard13.SetStayInSamePlace(1 /* TRUE */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  $.colubian_guard1.TurnToFacePlayer($.player);
  $.colubian_guard12.TurnToFacePlayer($.player);
  $.colubian_guard13.TurnToFacePlayer($.player);
  World.ClearArea(-362.8, 246.5, 60.0, 4.5, 1 /* TRUE */);
  $.colubian_guard2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -380.1, 282.6, -100.0);
  $.colubian_guard2.SetHeading(229.0);
  $.colubian_guard2.SetHealth(0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 22000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  $.player.SetCoordinates(-363.3, 253.0, -100.0);
  while ($.cs_time < 32166) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_A", 10000, 2);
  while ($.cs_time < 38548) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_B", 10000, 2);
  while ($.cs_time < 40043) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_B2", 10000, 2);
  while ($.cs_time < 43684) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_C", 10000, 2);
  while ($.cs_time < 45711) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_D", 10000, 2);
  while ($.cs_time < 52048) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_E", 10000, 2);
  while ($.cs_time < 54527) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_E2", 10000, 2);
  while ($.cs_time < 57558) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("CAT2_E3", 10000, 2);
  while ($.cs_time < 58661) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  while ($.cs_time < 65000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  $.Dead_guards_gun = Pickup.CreateWithAmmo(154 /* WEAPON_COLT45 */, 3 /* PICKUP_ONCE */, 48, -380.1, 282.6, 62.6);
  World.ClearArea(-381.8, 284.0, 62.9, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(-381.8, 284.0, -100.0);
  $.player.SetHeading(232.0);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Cutscene.Clear();
  Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
  Camera.SetBehindPlayer();
  $.player.RemoveAllWeapons();
  if ($.nicked_half_a_mil_before == 0) {
    $.player.AddScore(-500000);
    $.nicked_half_a_mil_before = 1;
  }
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(New_Colmansn);
  Streaming.MarkModelAsNoLongerNeeded(landpart15);
  Streaming.MarkModelAsNoLongerNeeded(Security_Hut);
  Streaming.MarkModelAsNoLongerNeeded(columansion_wall);
  while (!(Streaming.HasModelLoaded(car`FLATBED`))) {
    await asyncWait(0);
  }
  Text.PrintNow("CATINF1", 5000, 2);
  await asyncWait(1000);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  $.countdown_cat1 = 421000;
  Hud.DisplayTimer($.countdown_cat1);
  if (!(Char.IsDead($.colubian_guard1)) && !(Char.IsDead($.colubian_guard2)) && !(Char.IsDead($.colubian_guard12)) && !(Char.IsDead($.colubian_guard13))) {
    $.colubian_guard1.SetObjKillPlayerAnyMeans($.player);
    $.colubian_guard1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colubian_guard2.SetObjKillPlayerAnyMeans($.player);
    $.colubian_guard2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colubian_guard12.SetObjKillPlayerAnyMeans($.player);
    $.colubian_guard12.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colubian_guard13.SetObjKillPlayerAnyMeans($.player);
    $.colubian_guard13.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  if (!(Char.IsDead($.colubian_guard3)) && !(Char.IsDead($.colubian_guard4))) {
    $.colubian_guard3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
    $.colubian_guard4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  }
  Path.SwitchPedRoadsOff(-942.6, 337.0, 10.0, -953.6, 361.4, 30.0);
  while ($.player.IsInArea3D(-448.0, 241.7, 50.0, -292.4, 365.2, 90.0, 0 /* FALSE */)) {
    await asyncWait(0);
    if ($.countdown_cat1 == 0) {
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    $.player.ClearWantedLevel();
  }
  CatalinaHeli.Start();
  $.escape_chopper = -1;
  while ($.escape_chopper == -1) {
    await asyncWait(0);
    $.escape_chopper = CatalinaHeli.Grab();
  }
  await asyncWait(1000);
  if (!(Car.IsDead($.escape_chopper))) {
    $.blip1_cat1 = Blip.AddForCar($.escape_chopper);
    $.blip1_cat1.ChangeDisplay(2 /* BLIP_ONLY */);
    Camera.SetFixedPosition(-364.5, 243.7, 62.7, 0.0, 0.0, 0.0);
    Camera.PointAtCar($.escape_chopper, 15 /* FIXED */, 1 /* INTERPOLATION */);
    Hud.SwitchWidescreen(1 /* ON */);
    $.player.SetControl(0 /* Off */);
    Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
    Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
    $.escape_chopper.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  }
  if ($.player.IsInAnyCar()) {
    $.player.ApplyBrakesToCar(1 /* ON */);
  }
  await asyncWait(5000);
  Camera.Restore();
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  $.player.ApplyBrakesToCar(0 /* OFF */);
  Game.SetPoliceIgnorePlayer($.player, 0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  if ($.player.IsInAnyCar()) {
    $.player.ApplyBrakesToCar(0 /* OFF */);
  }
  Text.PrintNow("CATINF2", 5000, 2);
  while (!($.player.IsInZone("BIG_DAM"))) {
    await asyncWait(0);
    if ($.countdown_cat1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (CatalinaHeli.HasBeenShotDown()) {
      // SCM GOTO → end_of_game (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_game"); // fallback: would break linear control flow
    }
    $.player.ClearWantedLevel();
  }
  Game.SetThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 0 /* THREAT_PLAYER1 */);
  Gang.SetWeapons(5 /* GANG_COLOMBIAN */, 3 /* WEAPONTYPE_UZI */, 5 /* WEAPONTYPE_CHAINGUN */);
  $.colubian_guard1.MarkAsNoLongerNeeded();
  $.colubian_guard2.MarkAsNoLongerNeeded();
  $.colubian_guard3.MarkAsNoLongerNeeded();
  $.colubian_guard4.MarkAsNoLongerNeeded();
  $.colubian_car6 = Car.Create(131 /* CAR_COLUMB */, -946.8, 310.0, -100.0);
  $.colubian_car6.SetHeading(104.7);
  $.colubian_car7 = Car.Create(131 /* CAR_COLUMB */, -952.3, 310.3, -100.0);
  $.colubian_car7.SetHeading(78.8);
  $.colubian_guard14 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -955.5, 309.7, -100.0);
  $.colubian_guard14.SetHeading(220.0);
  $.colubian_guard14.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard14.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_guard15 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -943.0, 311.0, -100.0);
  $.colubian_guard15.SetHeading(176.0);
  $.colubian_guard15.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard15.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_car2 = Car.Create(131 /* CAR_COLUMB */, -1035.7, 464.1, -100.0);
  $.colubian_car2.SetHeading(194.0);
  $.colubian_car3 = Car.Create(131 /* CAR_COLUMB */, -1033.8, 458.9, -100.0);
  $.colubian_car3.SetHeading(330.8);
  $.rocket_launch = Pickup.CreateWithAmmo(156 /* WEAPON_ROCKET */, 3 /* PICKUP_ONCE */, 3, -1149.7, 347.7, 30.4);
  while (!($.player.IsInZone("WEE_DAM"))) {
    await asyncWait(0);
    if ($.countdown_cat1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (CatalinaHeli.HasBeenShotDown()) {
      // SCM GOTO → end_of_game (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_game"); // fallback: would break linear control flow
    }
    $.player.ClearWantedLevel();
  }
  Game.SetPoliceIgnorePlayer($.player, 1 /* ON */);
  while (!($.player.IsInArea3D(-927.4, 391.5, 50.0, -1124.3, 485.1, 0.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if ($.countdown_cat1 == 0) {
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (CatalinaHeli.HasBeenShotDown()) {
      // SCM GOTO → end_of_game (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_game"); // fallback: would break linear control flow
    }
    $.player.ClearWantedLevel();
  }
  $.colubian_guard14.MarkAsNoLongerNeeded();
  $.colubian_guard15.MarkAsNoLongerNeeded();
  $.colubian_car6.MarkAsNoLongerNeeded();
  $.colubian_car7.MarkAsNoLongerNeeded();
  $.colubian_guard5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1037.2, 467.9, -100.0);
  $.colubian_guard5.SetHeading(272.0);
  $.colubian_guard5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard5.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1035.0, 454.8, -100.0);
  $.colubian_guard6.SetHeading(247.0);
  $.colubian_guard6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard6.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1087.8, 472.0, -100.0);
  $.colubian_guard7.SetHeading(237.0);
  $.colubian_guard7.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard7.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard7.SetAccuracy(40);
  $.colubian_guard8 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1142.3, 445.3, -100.0);
  $.colubian_guard8.SetHeading(287.0);
  $.colubian_guard8.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard8.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard8.SetAccuracy(40);
  $.colubian_car4 = Car.Create(138 /* CAR_FLATBED */, -1086.1, 464.4, -100.0);
  $.colubian_car4.SetHeading(215.0);
  $.colubian_car5 = Car.Create(138 /* CAR_FLATBED */, -1174.8, 406.9, -100.0);
  $.colubian_car5.SetHeading(322.0);
  $.colubian_car8 = Car.Create(138 /* CAR_FLATBED */, -1164.2, 393.7, -100.0);
  $.colubian_car8.SetHeading(23.8);
  $.colubian_guard16 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1065.3, 453.8, -100.0);
  $.colubian_guard16.SetHeading(289.0);
  $.colubian_guard16.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard16.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_guard16.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard17 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1066.3, 475.8, -100.0);
  $.colubian_guard17.SetHeading(224.0);
  $.colubian_guard17.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard17.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_guard18 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1104.9, 440.1, -100.0);
  $.colubian_guard18.SetHeading(292.0);
  $.colubian_guard18.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard18.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard19 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1125.4, 448.8, -100.0);
  $.colubian_guard19.SetHeading(272.0);
  $.colubian_guard19.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard19.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard19.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard22 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1159.5, 424.2, -100.0);
  $.colubian_guard22.SetHeading(278.0);
  $.colubian_guard22.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard22.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_guard23 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1170.0, 379.9, -100.0);
  $.colubian_guard23.SetHeading(309.0);
  $.colubian_guard23.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard23.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 500);
  $.colubian_guard24 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1171.7, 384.8, -100.0);
  $.colubian_guard24.SetHeading(309.0);
  $.colubian_guard24.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard24.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  $.colubian_guard26 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1156.8, 407.5, -100.0);
  $.colubian_guard26.SetHeading(319.0);
  $.colubian_guard26.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard26.GiveWeapon(6 /* WEAPONTYPE_M16 */, 500);
  while (!($.player.IsInArea3D(-1111.2, 446.0, 20.0, -1221.7, 366.6, 30.0, 0 /* FALSE */))) {
    await asyncWait(0);
    if ($.countdown_cat1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (CatalinaHeli.HasBeenShotDown()) {
      // SCM GOTO → end_of_game (not lowered; manual jump required)
      throw new Error("unresolved GOTO end_of_game"); // fallback: would break linear control flow
    }
    $.player.ClearWantedLevel();
  }
  $.colubian_car2.MarkAsNoLongerNeeded();
  $.colubian_car3.MarkAsNoLongerNeeded();
  $.colubian_guard9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1183.0, 370.9, -100.0);
  $.colubian_guard9.SetHeading(342.0);
  $.colubian_guard9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard9.GiveWeapon(9 /* WEAPONTYPE_FLAMETHROWER */, 1000);
  $.colubian_guard9.SetAccuracy(30);
  $.colubian_guard10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`, -1204.9, 343.0, -100.0);
  $.colubian_guard10.SetHeading(342.0);
  $.colubian_guard10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard10.GiveWeapon(9 /* WEAPONTYPE_FLAMETHROWER */, 1000);
  $.colubian_guard10.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard20 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1188.5, 368.0, -100.0);
  $.colubian_guard20.SetHeading(7.0);
  $.colubian_guard20.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard20.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
  $.colubian_guard20.SetAccuracy(30);
  $.colubian_guard20.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard21 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1176.3, 357.1, -100.0);
  $.colubian_guard21.SetHeading(58.0);
  $.colubian_guard21.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard21.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 1000);
  $.colubian_guard21.SetAccuracy(30);
  $.colubian_guard21.SetStayInSamePlace(1 /* TRUE */);
  $.colubian_guard25 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -1199.4, 334.1, -100.0);
  $.colubian_guard25.SetHeading(3.0);
  $.colubian_guard21.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.colubian_guard25.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 1000);
  $.colubian_guard25.SetAccuracy(30);
  $.colubian_guard25.SetStayInSamePlace(1 /* TRUE */);
  $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, -1201.6, 338.6, -100.0);
  $.maria.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  $.maria.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  $.maria.LookAtPlayerAlways($.player);
  $.maria.SetHeading(339.0);
  $.maria_created_before = 1;
  $.catalina = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, -1182.0, 346.1, -100.0);
  $.catalina.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
  $.catalina.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
  if (!(Char.IsDead($.catalina))) {
    Camera.SetFixedPosition(-1190.6, 334.4, 32.1, 0.0, 0.0, 0.0);
    Camera.PointAtChar($.maria, 15 /* FIXED */, 2 /* JUMP_CUT */);
    $.player.SetControl(0 /* OFF */);
    Hud.SwitchWidescreen(1 /* ON */);
    Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
    if ($.player.IsInAnyCar()) {
      $.player.ApplyBrakesToCar(1 /* ON */);
    }
    Audio.LoadMissionAudio(C_1);
    await asyncWait(3000);
    if (!(Char.IsDead($.catalina))) {
      Camera.PointAtChar($.catalina, 15 /* FIXED */, 1 /* INTERPOLATION */);
      $.catalina.SetObjRunToCoord(-1163.3, 341.2);
      Text.PrintNow("CAT2_J", 3000, 2);
    }
    while (!(Audio.HasMissionAudioLoaded())) {
      await asyncWait(0);
    }
    Audio.PlayMissionAudio();
  }
  await asyncWait(3000);
  Hud.SwitchWidescreen(0 /* OFF */);
  $.player.SetControl(1 /* ON */);
  Camera.RestoreJumpcut();
  $.catalina.Delete();
  Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
  if ($.player.IsInAnyCar()) {
    $.player.ApplyBrakesToCar(0 /* OFF */);
  }
  await asyncWait(1000);
  if (!(Char.IsDead($.maria))) {
    $.maria.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
  }
  if (!(Car.IsDead($.escape_chopper))) {
    $.escape_chopper.SetProofs(0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */, 0 /* FALSE */);
    CatalinaHeli.TakeOff();
  }
  if (!(Car.IsDead($.colubian_car5))) {
    $.colubian_guard11 = Char.CreateInsideCar($.colubian_car5, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_B`);
    $.colubian_guard11.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 300);
    $.colubian_car5.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
    $.colubian_car5.SetCruiseSpeed(40.0);
    $.colubian_car5.SetDrivingStyle(3);
  }
  while (!(CatalinaHeli.HasBeenShotDown())) {
    await asyncWait(0);
    [$.playerx_cat, $.playery_cat, $.playerz_cat] = $.player.GetCoordinates();
    if ($.countdown_cat1 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (Char.IsDead($.maria)) {
      Text.PrintNow("BITCH_D", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if ($.player.LocateOnFootChar3D($.maria, 10.0, 10.0, 3.0, 0 /* FALSE */)) {
      if ($.set_as_leader_before == 0) {
        $.maria.StopLooking();
        $.maria.FollowPlayer($.player);
        $.set_as_leader_before = 1;
      }
    }
    else {
      if ($.set_as_leader_before == 1) {
        $.set_as_leader_before = 0;
      }
    }
    if ($.player.IsInArea3D(-1142.0, 327.8, 29.0, -1215.6, 368.4, 40.0, 0 /* FALSE */)) {
      if ($.been_on_heli_pad == 0) {
        if (!(Char.IsDead($.colubian_guard10))) {
          $.colubian_guard10.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard10.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard20))) {
          $.colubian_guard20.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard20.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard21))) {
          $.colubian_guard21.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard21.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard25))) {
          $.colubian_guard25.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard25.SetObjKillPlayerAnyMeans($.player);
        }
        $.been_on_heli_pad = 1;
      }
    }
    $.player.ClearWantedLevel();
  }
}

async function end_of_game() {
  Camera.SetFadingColor(255, 255, 255);
  Camera.DoFade(500, 0 /* FADE_OUT */);
  Hud.ClearTimer($.countdown_cat1);
  CatalinaHeli.Remove();
  if ($.maria_created_before == 0) {
    $.maria = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, -1201.6, 338.6, -100.0);
    $.maria.SetProofs(1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */, 1 /* TRUE */);
    $.maria.SetAnimGroup(15 /* ANIM_SEXY_WOMANPED */);
    $.maria.LookAtPlayerAlways($.player);
    $.maria.SetHeading(339.0);
  }
  Camera.DoFade(500, 1 /* FADE_IN */);
  while (!($.maria.IsInPlayersGroup($.player))) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow("BITCH_D", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    if (!($.maria.IsInPlayersGroup($.player))) {
      if ($.added_the_blip_for_maria == 0) {
        $.marias_blip = Blip.AddForChar($.maria);
        $.added_the_blip_for_maria = 1;
      }
    }
    else {
      if ($.added_the_blip_for_maria == 1) {
        $.marias_blip.Remove();
        $.added_the_blip_for_maria = 0;
      }
    }
    if ($.player.LocateOnFootChar3D($.maria, 10.0, 10.0, 3.0, 0 /* FALSE */)) {
      if ($.set_as_leader_before == 0) {
        $.maria.StopLooking();
        $.maria.FollowPlayer($.player);
        $.set_as_leader_before = 1;
      }
    }
    else {
      if ($.set_as_leader_before == 1) {
        $.set_as_leader_before = 0;
      }
    }
    if ($.player.IsInArea3D(-1142.0, 327.8, 29.0, -1215.6, 368.4, 40.0, 0 /* FALSE */)) {
      if ($.been_on_heli_pad == 0) {
        if (!(Char.IsDead($.colubian_guard10))) {
          $.colubian_guard10.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard10.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard20))) {
          $.colubian_guard20.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard20.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard21))) {
          $.colubian_guard21.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard21.SetObjKillPlayerAnyMeans($.player);
        }
        if (!(Char.IsDead($.colubian_guard25))) {
          $.colubian_guard25.SetStayInSamePlace(0 /* FALSE */);
          $.colubian_guard25.SetObjKillPlayerAnyMeans($.player);
        }
        $.been_on_heli_pad = 1;
      }
    }
    $.player.ClearWantedLevel();
  }
  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;
  while (!($.player.CanStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    if (Char.IsDead($.maria)) {
      Text.PrintNow("BITCH_D", 5000, 1);
      // SCM GOTO → mission_cat1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_cat1_failed"); // fallback: would break linear control flow
    }
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }
  $.player.MakeSafeForCutscene();
  $.player.ClearWantedLevel();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  TIMERA = 0;
  Weather.ForceNow(0 /* WEATHER_SUNNY */);
  while (TIMERA < 1500) {
    await asyncWait(0);
  }
  Streaming.LoadSpecialCharacter(1, $.maria);
  while (!(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  Cutscene.Load(END);
  Audio.LoadEndOfGameTune();
  Cutscene.SetOffset(-1031.7601, 451.7612, 22.5624);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_maria = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_maria.SetAnim($.maria);
  if (!(Char.IsDead($.colubian_guard8))) {
    $.colubian_guard8.SetHealth(0);
  }
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Cutscene.Start();
  Audio.PlayEndOfGameTune();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5507) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_A", 10000, 2);
  while ($.cs_time < 7855) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_B", 10000, 2);
  while ($.cs_time < 10313) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_C", 10000, 2);
  while ($.cs_time < 13610) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_D", 10000, 2);
  while ($.cs_time < 16428) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_E", 10000, 2);
  while ($.cs_time < 20514) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_F", 10000, 2);
  while ($.cs_time < 22827) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_G", 10000, 2);
  while ($.cs_time < 26173) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_H", 10000, 2);
  while ($.cs_time < 28028) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_I", 10000, 2);
  while ($.cs_time < 29276) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_J", 10000, 2);
  while ($.cs_time < 31901) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_K", 10000, 2);
  while ($.cs_time < 35772) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_L", 10000, 2);
  while ($.cs_time < 38820) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_M", 10000, 2);
  while ($.cs_time < 42136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_N", 10000, 2);
  while ($.cs_time < 44646) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_O", 10000, 2);
  while ($.cs_time < 46971) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_P", 10000, 2);
  while ($.cs_time < 49254) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_Q", 10000, 2);
  while ($.cs_time < 51621) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_R", 10000, 2);
  while ($.cs_time < 54000) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_S", 10000, 2);
  while ($.cs_time < 56584) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_T", 10000, 2);
  while ($.cs_time < 59278) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("END_U", 4000, 2);
  while ($.cs_time < 66666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Audio.SetMusicDoesFade(0 /* FALSE */);
  Camera.SetFadingColor(1, 1, 1);
  Camera.DoFade(2000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Text.ClearPrints();
  Cutscene.Clear();
  // SCM GOSUB mission_start_credits
  await mission_start_credits();
  // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOTO → mission_cat1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_cat1_passed"); // fallback: would break linear control flow
}

async function mission_cat1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  if (!(Char.IsDead($.maria))) {
    $.maria.RemoveElegantly();
  }
  return;
}

async function mission_cat1_passed() {
  $.flag_cat_mission1_passed = 1;
  $.flag_suburban_passed = 1;
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(CAT2);
  Stat.PlayerMadeProgress(1);
  $.maria_contact_blip.Remove();
  $.special_tank.Switch(101);
  Stat.SetSuburbanPassed();
  return;
}

async function mission_cleanup_cat1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_cat_mission = 0;
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_B`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Streaming.MarkModelAsNoLongerNeeded(car`FLATBED`);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Hud.ClearTimer($.countdown_cat1);
  Path.SwitchPedRoadsOn(-942.6, 337.0, 10.0, -953.6, 361.4, 30.0);
  $.blip1_cat1.Remove();
  $.marias_blip.Remove();
  $.catalina.Delete();
  CatalinaHeli.Remove();
  $.rocket_launch.Remove();
  $.Dead_guards_gun.Remove();
  Zone.SetPedInfo("WEE_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 100, 0, 0);
  Zone.SetPedInfo("WEE_DAM", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 100, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Mission.Finish();
  return;
}

async function mission_start_credits() {
  {
  await asyncWait(0);
  $.player.SetControl(0 /* OFF */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  $.player.SetVisible(0 /* FALSE */);
  World.SwitchRubbish(0 /* OFF */);
  Hud.SwitchWidescreen(1 /* ON */);
  $.player.AddScore(1000000);
  Credits.Start();
  TIMERA = 0;
  Clock.SetTimeOfDay(2, 40);
  // SCM GOTO → first_credits_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO first_credits_loop"); // fallback: would break linear control flow
  while (!(Credits.AreFinished())) {
    await asyncWait(0);
    if ($.camera_cut == 0) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (TIMERA > 40000) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → final_final_scene (not lowered; manual jump required)
            throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
          }
        }
      }
      // SCM label first_credits_loop
      $.player.SetCoordinates(-361.9, 248.0, -100.0);
      Camera.SetFixedPosition(-364.393, 265.064, 82.87, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-363.973, 264.189, 82.632, 2 /* JUMP_CUT */);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (TIMERA > 40000) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → final_final_scene (not lowered; manual jump required)
            throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
          }
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 30000) {
        await asyncWait(0);
        if (TIMERA > 40000) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
            // SCM GOTO → final_final_scene (not lowered; manual jump required)
            throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
          }
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 1;
    }
    if ($.camera_cut == 1) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.player.SetCoordinates(-1174.25, -7.017, -100.0);
      Camera.SetFixedPosition(-1176.481, -17.694, 75.992, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-1175.726, -17.055, 75.847, 2 /* JUMP_CUT */);
      Clock.SetTimeOfDay(5, 40);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 30000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 2;
    }
    if ($.camera_cut == 2) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.player.SetCoordinates(-468.7, -3.3, -100.0);
      Camera.SetFixedPosition(-413.07, 19.261, 54.403, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-413.942, 18.976, 54.006, 2 /* JUMP_CUT */);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 30000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 3;
    }
    if ($.camera_cut == 3) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.player.SetCoordinates(-855.7, -717.3, -100.0);
      Camera.SetFixedPosition(-959.517, -656.414, 55.464, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-958.668, -656.912, 55.288, 2 /* JUMP_CUT */);
      Clock.SetTimeOfDay(22, 0);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 30000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 4;
    }
    if ($.camera_cut == 4) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.player.SetCoordinates(-532.7, -611.7, 43.3);
      Camera.SetFixedPosition(-571.592, -611.137, 67.566, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-570.697, -611.579, 67.493, 2 /* JUMP_CUT */);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 30000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 5;
    }
    if ($.camera_cut == 5) {
      Camera.DoFade(1500, 0 /* FADE_OUT */);
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.player.SetCoordinates(-671.6, -155.9, -100.0);
      Camera.SetFixedPosition(-706.590, -219.085, 25.797, 0.0, 0.0, 0.0);
      Camera.PointAtPoint(-706.155, -218.190, 25.696, 2 /* JUMP_CUT */);
      Clock.SetTimeOfDay(1, 20);
      Weather.ForceNow(2 /* WEATHER_RAINY */);
      TIMERB = 0;
      while (TIMERB < 20000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      Camera.DoFade(1500, 1 /* FADE_IN */);
      TIMERB = 0;
      while (TIMERB < 40000) {
        await asyncWait(0);
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
        if (Credits.AreFinished()) {
          // SCM GOTO → final_final_scene (not lowered; manual jump required)
          throw new Error("unresolved GOTO final_final_scene"); // fallback: would break linear control flow
        }
      }
      $.camera_cut = 0;
    }
  }
}

async function final_final_scene() {
  Credits.Stop();
  Clock.SetTimeOfDay(7, 00);
  Audio.SetMusicDoesFade(1 /* TRUE */);
  Camera.DoFade(2000, 0 /* FADE_OUT */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  $.player.SetVisible(1 /* TRUE */);
  $.player.SetHealth(100);
  World.ClearArea(-666.8, -1.8, 18.8, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(-666.8, -1.8, -100.0);
  Streaming.LoadScene(-666.8, -1.8, 19.0);
  $.player.SetHeading(180.0);
  Camera.RestoreJumpcut();
  Camera.SetInFrontOfPlayer();
  Hud.SwitchWidescreen(0 /* OFF */);
  TIMERB = 0;
  $.flag_player_on_mission = 0;
  $.flag_player_on_cat_mission = 0;
  TIMERB = 0;
  while (TIMERB < 2500) {
    await asyncWait(0);
  }
  Camera.DoFade(2000, 1 /* FADE_IN */);
  Audio.StopEndOfGameTune();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  return;
  }
}

export async function cat1() {
  // MissionBoundary
  // SCM GOSUB mission_start_cat1
  await mission_start_cat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_cat1_failed
    await mission_cat1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_cat1
  await mission_cleanup_cat1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT blip1_cat1 marias_blip
  // VAR_INT colubian_guard1 colubian_guard2 colubian_guard3 colubian_guard4 colubian_guard5 colubian_guard6 colubian_guard7 colubian_guard8
  // VAR_INT colubian_guard9 colubian_guard10 colubian_guard11 colubian_guard12 colubian_guard13 colubian_guard14 colubian_guard15 colubian_guard16
  // VAR_INT colubian_guard17 colubian_guard18 colubian_guard19 colubian_guard20 colubian_guard21 colubian_guard22 colubian_guard23 colubian_guard24
  // VAR_INT colubian_guard25 colubian_guard26
  // VAR_INT colubian_car1 colubian_car2 colubian_car3 colubian_car4 colubian_car5 colubian_car6 colubian_car7 colubian_car8
  // VAR_INT escape_chopper set_as_leader_before been_on_heli_pad Dead_guards_gun
  // VAR_INT countdown_cat1 rocket_launch added_the_blip_for_maria maria_created_before
  // VAR_INT camera_cut first_credits_loop
  // VAR_INT shaggin_waggin maria_prossie
  // VAR_FLOAT playerx_cat playery_cat playerz_cat
}
