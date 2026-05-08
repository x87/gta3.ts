// Generated from Main/Commercial/asuka1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_asuka1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.hours_a1 = 0;
  $.mins_a1 = 0;
  $.time_left_a1 = 0;
  $.mafia_8_flag = 0;
  $.mafia_9_flag = 0;
  $.mafia_10_flag = 0;
  $.mafia_11_flag = 0;
  $.mafia_12_flag = 0;
  $.mafia_13_flag = 0;
  $.frankie_flag = 0;
  $.set_beamer_1_kill_player = 0;
  $.set_beamer_2_kill_player = 0;
  $.set_beamer_3_kill_player = 0;
  $.beamer1_health = 0;
  $.beamer2_health = 0;
  $.beamer3_health = 0;
  $.garage_door_close = 0;
  $.timera_reset_flag_a1 = 0;
  $.timerb_reset_flag_a1 = 0;
  $.timerc_reset_flag_a1 = 0;
  $.timerc_started_a1 = 0;
  $.timerc_current_a1 = 0;
  $.timerc_a1 = 0;
  $.door_crash_flag = 0;
  $.spotted_print = 0;
  $.frankies_ride = 0;
  $.beamer_1_dead_flag = 0;
  $.beamer_2_dead_flag = 0;
  $.beamer_3_dead_flag = 0;
  $.enter_car_flag = 0;
  $.fuckers_car = -1;
  $.frankie_exists_flag = 0;
  $.mafia_5_kill_player_flag = 0;
  $.mafia_7_kill_player_flag = 0;
  $.mafia_8_kill_player_flag = 0;
  $.mafia_9_kill_player_flag = 0;
  $.mafia_10_kill_player_flag = 0;
  $.mafia_11_kill_player_flag = 0;
  $.mafia_12_kill_player_flag = 0;
  $.mafia_13_kill_player_flag = 0;
  $.mafia_15_kill_player_flag = 0;
  $.timerx_reset_flag = 0;
  $.timery_reset_flag = 0;
  $.timerz_reset_flag = 0;
  $.beamer1_stuck_x = 0.0;
  $.beamer1_stuck_y = 0.0;
  $.beamer1_stuck_z = 0.0;
  $.beamer2_stuck_x = 0.0;
  $.beamer2_stuck_y = 0.0;
  $.beamer2_stuck_z = 0.0;
  $.beamer3_stuck_x = 0.0;
  $.beamer3_stuck_y = 0.0;
  $.beamer3_stuck_z = 0.0;
  {
  Streaming.LoadSpecialCharacter(1, $.asuka);
  Streaming.LoadSpecialCharacter(2, $.maria);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, ASUKAH);
  Streaming.LoadSpecialModel(hier`cutobj03`, MARIAH);
  Streaming.RequestModel(condo_ivy);
  Streaming.RequestModel(kmricndo01);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(condo_ivy)) || !(Streaming.HasModelLoaded(kmricndo01))) {
    await asyncWait(0);
  }
  Cutscene.Load(A1_SS0);
  Cutscene.SetOffset(523.102, -636.96, 15.616);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_asuka.SetAnim($.asuka);
  $.cs_maria = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_maria.SetAnim($.maria);
  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.SetAnim($.player);
  $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj02`);
  $.cs_asukahead.SetAnim($.asuka);
  $.cs_mariahead = CutsceneHead.Create($.cs_maria, hier`cutobj03`);
  $.cs_mariahead.SetAnim($.maria);
  World.ClearArea(523.6, -639.4, 16.6, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(523.6, -639.4, 16.0);
  $.player.SetHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5353) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_A, 15000, 1);
  while ($.cs_time < 9624) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_B, 15000, 1);
  while ($.cs_time < 13409) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_C, 15000, 1);
  while ($.cs_time < 17788) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_D, 15000, 1);
  while ($.cs_time < 20113) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_E, 15000, 1);
  while ($.cs_time < 25303) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  [$.hours_a1, $.mins_a1] = Clock.GetTimeOfDay();
  $.hours_a1 = $.hours_a1 + 3;
  if ($.hours_a1 > 23) {
    $.hours_a1 = $.hours_a1 - 24;
  }
  $.mins_a1 = 30;
  if ($.hours_a1 > 9) {
    Text.PrintWith2NumbersNow(AM1_F, $.hours_a1, $.mins_a1, 15000, 1);
  }
  else {
    Text.PrintWith2NumbersNow(AM1_K, $.hours_a1, $.mins_a1, 15000, 1);
  }
  while ($.cs_time < 29629) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_G, 15000, 1);
  while ($.cs_time < 32657) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_H, 15000, 1);
  while ($.cs_time < 37360) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_I, 15000, 1);
  while ($.cs_time < 40118) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(AM1_J, 15000, 1);
  while ($.cs_time < 41666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetInFrontOfPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(condo_ivy);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.LoadSpecialCharacter(1, $.frankie);
  Streaming.RequestModel(ped`GANG_MAFIA_A`);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.RequestModel(car`MAFIA`);
  while (!(Streaming.HasModelLoaded(car`MAFIA`)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_A`)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`)) || !(Streaming.HasSpecialCharacterLoaded(1))) {
    await asyncWait(0);
  }
  $.create_char_in_club_x = 894.0;
  $.create_char_in_club_y = -417.0;
  $.create_char_in_club_z = 15.3;
  $.mission_blip_am1 = Blip.AddForCoord($.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
  $.bottom_of_steps_x = 885.53;
  $.bottom_of_steps_y = -417.0;
  $.back_of_alley_x = 886.03;
  $.back_of_alley_y = -425.77;
  $.street_x = 902.72;
  $.street_y = -425.65;
  $.mafia_10_x = 902.72 - 1.0;
  $.mafia_10_y = -425.65 + 3.0;
  $.mafia_11_x = 902.72 + 1.0;
  $.mafia_11_y = -425.65 + 3.0;
  $.mafia_12_x = 902.72 + 1.0;
  $.mafia_12_y = -425.65 - 2.0;
  $.mafia_13_x = 902.72 - 1.0;
  $.mafia_13_y = -425.65 - 2.0;
  $.mafia_8_flag = 0;
  $.mafia_9_flag = 0;
  $.mafia_10_flag = 0;
  $.mafia_11_flag = 0;
  $.mafia_12_flag = 0;
  $.mafia_13_flag = 0;
  $.kill_player_now_flag = 0;
  Text.PrintNow(AM1_5, 5000, 1);
  if ($.hours_a1 > 9) {
    Text.PrintWith2NumbersSoon(AM1_8, $.hours_a1, $.mins_a1, 5000, 1);
  }
  else {
    Text.PrintWith2NumbersSoon(AM1_10, $.hours_a1, $.mins_a1, 5000, 1);
  }
  $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
  while (!($.time_left_a1 < 1)) {
    await asyncWait(0);
    $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
    if ($.garage_door_close == 0) {
      if ($.player.IsInZone("REDLIGH")) {
        Text.PrintNow(AM1_6, 5000, 1);
        $.mission_blip_am1.Remove();
        $.garage_door_close = 1;
      }
    }
  }
  if ($.garage_door_close == 0) {
    if ($.player.IsInZone("REDLIGH")) {
      Text.PrintNow(AM1_6, 5000, 1);
      $.mission_blip_am1.Remove();
      $.garage_door_close = 1;
    }
  }
  $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
  while (!(Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */))) {
    await asyncWait(0);
    $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
    if ($.time_left_a1 < 1) {
      Text.PrintNow(AM1_3, 5000, 1);
      // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka1_failed"); // fallback: would break linear control flow
    }
  }
  Path.SwitchRoadsOff(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
  $.frankie_garage.ChangeType(1 /* GARAGE_MISSION */);
  if (!($.player.LocateAnyMeans2D(908.3, -86.0, 100.0, 100.0, 0))) {
    $.working_x_a1 = 908.3;
    $.working_y_a1 = -86.0;
    $.working_z_a1 = 7.0;
    $.beamer1_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer_heading = $.beamer1_a1.GetHeading();
    $.beamer_heading = $.beamer_heading - 180.0;
    $.beamer1_a1.SetHeading($.beamer_heading);
    $.beamer1_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer1_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer1_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
    $.working_y_a1 = $.working_y_a1 + 11.0;
    $.beamer2_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer2_a1.SetHeading($.beamer_heading);
    $.beamer2_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer2_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer2_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
    $.working_y_a1 = $.working_y_a1 + 11.0;
    $.beamer3_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer3_a1.SetHeading($.beamer_heading);
    $.beamer3_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer3_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer3_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
  }
  else {
    $.working_x_a1 = 1123.67;
    $.working_y_a1 = -59.3;
    $.working_z_a1 = 7.0;
    $.beamer3_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer_heading = $.beamer3_a1.GetHeading();
    $.beamer_heading = $.beamer_heading - 180.0;
    $.beamer3_a1.SetHeading($.beamer_heading);
    $.beamer3_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer3_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer3_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
    $.working_y_a1 = $.working_y_a1 - 11.0;
    $.beamer2_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer2_a1.SetHeading($.beamer_heading);
    $.beamer2_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer2_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer2_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
    $.working_y_a1 = $.working_y_a1 - 11.0;
    $.beamer1_a1 = Car.Create(127 /* CAR_MAFIA */, $.working_x_a1, $.working_y_a1, $.working_z_a1);
    $.beamer1_a1.SetHeading($.beamer_heading);
    $.beamer1_a1.LockDoors(3 /* CARLOCK_LOCKOUT_PLAYER_ONLY */);
    $.beamer1_a1.SetOnlyDamagedByPlayer(1 /* TRUE */);
    $.beamer1_a1.SetUpsidedownNotDamaged(1 /* TRUE */);
  }
  $.mafia_1X = Char.CreateInsideCar($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`);
  $.mafia_2X = Char.CreateInsideCar($.beamer2_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`);
  $.mafia_3X = Char.CreateInsideCar($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`);
  $.mafia_4X = Char.CreateAsPassenger($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 0);
  $.mafia_5X = Char.CreateAsPassenger($.beamer3_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, 1);
  $.mafia_6X = Char.CreateAsPassenger($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, 0);
  $.mafia_7X = Char.CreateAsPassenger($.beamer1_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, 1);
  $.mafia_14X = Char.CreateAsPassenger($.beamer2_a1, 7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, 0);
  $.mafia_1X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_2X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_3X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_4X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_5X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_6X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_7X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_14X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.mafia_1X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_2X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_3X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_4X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_5X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_6X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_7X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_14X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
  $.mafia_1X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_2X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_3X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_4X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_5X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_6X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_7X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.mafia_14X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
  $.working_x_a1 = 908.0;
  $.working_y_a1 = -435.5;
  $.working_z_a1 = 14.56;
  $.beamer1_a1.GotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);
  $.working_y_a1 = $.working_y_a1 + 7.0;
  $.beamer2_a1.GotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);
  $.working_y_a1 = $.working_y_a1 + 7.0;
  $.beamer3_a1.GotoCoordinates($.working_x_a1, $.working_y_a1, $.working_z_a1);
  $.beamer1_a1.SetDrivingStyle(2);
  $.beamer2_a1.SetDrivingStyle(2);
  $.beamer3_a1.SetDrivingStyle(2);
  $.beamer1_a1.SetCruiseSpeed(15.0);
  $.beamer2_a1.SetCruiseSpeed(14.0);
  $.beamer3_a1.SetCruiseSpeed(13.0);
  if (Object.DoesExist($.backdoor)) {
    $.door_position_a1 = $.backdoor.GetHeading();
  }
  Audio.LoadMissionAudio(A1_A);
  if (!($.player.IsInArea2D(873.0, -443.0, 927.0, -378.0, 0))) {
    $.player.SetControl(0 /* OFF */);
    Game.SetEveryoneIgnorePlayer($.player, 1 /* ON */);
    Game.SetAllCarsCanBeDamaged(0 /* FALSE */);
    if ($.player.IsInAnyCar()) {
      $.player.ApplyBrakesToCar(1 /* ON */);
    }
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(0, 0 /* FADE_OUT */);
    await asyncWait(0);
    Hud.SwitchWidescreen(1 /* ON */);
    World.ClearArea(905.759, -419.944, 8.0, 8.0, 0 /* FALSE */);
    Streaming.RequestModel(indhibuild3);
    Streaming.RequestModel(luigiclubout);
    Streaming.RequestModel(luigiineerclub);
    Streaming.RequestModel(ind_customroad016);
    Streaming.LoadAllModelsNow();
    Streaming.Switch(0 /* OFF */);
    Camera.SetFixedPosition(881.36, -425.198, 19.727, 0.0, 0.0, 0.0);
    Camera.PointAtPoint(882.109, -424.825, 19.181, 2 /* JUMP_CUT */);
    TIMERB = 0;
    $.beamer1_health = 1;
  }
  TIMERA = 0;
  $.skip_flag = 0;
  while ($.mafia_8_flag < 3 || $.mafia_9_flag < 3 || $.mafia_10_flag < 3 || $.mafia_11_flag < 3 || $.mafia_12_flag < 3 || $.mafia_13_flag < 3) {
    await asyncWait(0);
    if ($.beamer1_health == 1) {
      if (TIMERB > 30000) {
        Hud.SwitchWidescreen(0 /* OFF */);
        $.player.SetControl(1 /* ON */);
        Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
        Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
        Streaming.Switch(1 /* ON */);
        if ($.player.IsInAnyCar()) {
          $.player.ApplyBrakesToCar(0 /* OFF */);
        }
        Camera.RestoreJumpcut();
        Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
        Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
        Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
        Streaming.MarkModelAsNoLongerNeeded(ind_customroad016);
        Camera.DoFade(250, 1 /* FADE_IN */);
        $.skip_flag = 2;
        $.beamer1_health = 0;
      }
      if ($.skip_flag == 0) {
        if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) && !(Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */))) {
          $.skip_flag = 1;
        }
      }
      if ($.skip_flag == 1) {
        if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
          Hud.SwitchWidescreen(0 /* OFF */);
          $.player.SetControl(1 /* ON */);
          Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
          Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
          Streaming.Switch(1 /* ON */);
          if ($.player.IsInAnyCar()) {
            $.player.ApplyBrakesToCar(0 /* OFF */);
          }
          Camera.RestoreJumpcut();
          Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
          Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
          Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
          Streaming.MarkModelAsNoLongerNeeded(ind_customroad016);
          Camera.DoFade(250, 1 /* FADE_IN */);
          $.beamer1_health = 0;
        }
      }
    }
    if (!($.time_left_a1 == 0)) {
      $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
    }
    if ($.garage_door_close == 0) {
      if ($.player.IsInZone("REDLIGH")) {
        Text.PrintNow(AM1_6, 5000, 1);
        $.mission_blip_am1.Remove();
        $.garage_door_close = 1;
      }
    }
    if (!($.door_position_a1 == 90.0)) {
      $.diff_heading_door = 90.0 - $.door_position_a1;
      if ($.diff_heading_door < 10.0) {
        $.door_position_a1 = 90.0;
      }
      else {
        $.door_position_a1 += 10.0;
      }
      $.backdoor.SetHeading($.door_position_a1);
      $.door_crash_flag = 1;
    }
    if ($.mafia_8_flag == 0) {
      $.mafia_8X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
      $.mafia_8X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
      $.mafia_8X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
      $.mafia_8X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
      $.mafia_8_flag = 1;
    }
    else {
      if (Char.IsDead($.mafia_8X)) {
        $.kill_player_now_flag = 1;
        $.mafia_8_flag = 4;
      }
    }
    if ($.mafia_8_flag == 1) {
      if ($.mafia_8X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_8X.SetObjGotoCoordOnFoot(887.6, -418.5);
        $.mafia_8_flag = 2;
      }
    }
    if ($.mafia_8_flag == 2) {
      if ($.mafia_8X.LocateStoppedOnFoot2D(887.6, -418.5, 0.5, 0.5, 0)) {
        $.mafia_8X.SetHeading(90.0);
        $.mafia_8X.SetIdle();
        $.mafia_8_flag = 3;
      }
    }
    if ($.mafia_8_flag > 0 && $.mafia_8_flag < 4) {
      if ($.mafia_8X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.mafia_8_flag > 0 && $.mafia_9_flag == 0) {
      if (Char.IsDead($.mafia_8X)) {
        $.mafia_9X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
        if ($.beamer1_health == 1) {
          Camera.DoFade(400, 1 /* FADE_IN */);
        }
        $.mafia_9X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_9X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_9X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_9_flag = 1;
      }
      else {
        if (!($.mafia_8X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, 0))) {
          $.mafia_9X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
          if ($.beamer1_health == 1) {
            Camera.DoFade(400, 1 /* FADE_IN */);
          }
          $.mafia_9X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.mafia_9X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
          $.mafia_9X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.mafia_9_flag = 1;
        }
      }
    }
    else {
      if ($.mafia_9_flag > 0) {
        if (Char.IsDead($.mafia_9X)) {
          $.kill_player_now_flag = 1;
          $.mafia_9_flag = 4;
        }
      }
    }
    if ($.mafia_9_flag == 1) {
      if ($.mafia_9X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_9X.SetObjGotoCoordOnFoot(887.6, -415.3);
        $.mafia_9_flag = 2;
      }
    }
    if ($.mafia_9_flag == 2) {
      if ($.mafia_9X.LocateStoppedOnFoot2D(887.6, -415.3, 0.5, 0.5, 0)) {
        $.mafia_9X.SetHeading(90.0);
        $.mafia_9X.SetIdle();
        $.mafia_9_flag = 3;
      }
    }
    if ($.mafia_9_flag > 0 && $.mafia_9_flag < 4) {
      if ($.mafia_9X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.mafia_9_flag > 0 && $.mafia_10_flag == 0) {
      if (Char.IsDead($.mafia_9X)) {
        $.mafia_10X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
        $.mafia_10X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.mafia_10X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_10X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_10X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_10_flag = 1;
      }
      else {
        if (!($.mafia_9X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, 0))) {
          $.mafia_10X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
          $.mafia_10X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.mafia_10X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.mafia_10X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
          $.mafia_10X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.mafia_10_flag = 1;
        }
      }
    }
    else {
      if ($.mafia_10_flag > 0) {
        if (Char.IsDead($.mafia_10X)) {
          $.kill_player_now_flag = 1;
          $.mafia_10_flag = 4;
        }
      }
    }
    if ($.mafia_10_flag == 1) {
      if ($.mafia_10X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_10X.SetObjGotoCoordOnFoot($.mafia_10_x, $.mafia_10_y);
        $.mafia_10_flag = 2;
      }
    }
    if ($.mafia_10_flag == 2) {
      if ($.mafia_10X.LocateStoppedOnFoot2D($.mafia_10_x, $.mafia_10_y, 0.5, 0.5, 0)) {
        $.mafia_10X.SetHeading(0.0);
        $.mafia_10X.SetIdle();
        $.mafia_10_flag = 3;
      }
    }
    if ($.mafia_10_flag > 0 && $.mafia_10_flag < 4) {
      if ($.mafia_10X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.mafia_10_flag > 0 && $.mafia_11_flag == 0) {
      if (Char.IsDead($.mafia_10X)) {
        $.mafia_11X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
        $.mafia_11X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.mafia_11X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_11X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
        $.mafia_11X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_11_flag = 1;
      }
      else {
        if (!($.mafia_10X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, 0))) {
          $.mafia_11X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
          $.mafia_11X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.mafia_11X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.mafia_11X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
          $.mafia_11X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.mafia_11_flag = 1;
        }
      }
    }
    else {
      if ($.mafia_11_flag > 0) {
        if (Char.IsDead($.mafia_11X)) {
          $.kill_player_now_flag = 1;
          $.mafia_11_flag = 4;
        }
      }
    }
    if ($.mafia_11_flag == 1) {
      if ($.mafia_11X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_11X.SetObjGotoCoordOnFoot($.mafia_11_x, $.mafia_11_y);
        $.mafia_11_flag = 2;
      }
    }
    if ($.mafia_11_flag == 2) {
      if ($.mafia_11X.LocateStoppedOnFoot2D($.mafia_11_x, $.mafia_11_y, 0.5, 0.5, 0)) {
        $.mafia_11X.SetHeading(0.0);
        $.mafia_11X.SetIdle();
        $.mafia_11_flag = 3;
      }
    }
    if ($.mafia_11_flag > 0 && $.mafia_11_flag < 4) {
      if ($.mafia_11X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.mafia_11_flag > 0 && $.mafia_12_flag == 0) {
      if (Char.IsDead($.mafia_11X)) {
        $.mafia_12X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
        $.mafia_12X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.mafia_12X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_12X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 999);
        $.mafia_12X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_12_flag = 1;
      }
      else {
        if (!($.mafia_11X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, 0))) {
          $.mafia_12X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
          $.mafia_12X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.mafia_12X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.mafia_12X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
          $.mafia_12X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.mafia_12_flag = 1;
        }
      }
    }
    else {
      if ($.mafia_12_flag > 0) {
        if (Char.IsDead($.mafia_12X)) {
          $.kill_player_now_flag = 1;
          $.mafia_12_flag = 4;
        }
      }
    }
    if ($.mafia_12_flag == 1) {
      if ($.mafia_12X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_12X.SetObjGotoCoordOnFoot($.mafia_12_x, $.mafia_12_y);
        $.mafia_12_flag = 2;
      }
    }
    if ($.mafia_12_flag == 2) {
      if ($.mafia_12X.LocateStoppedOnFoot2D($.mafia_12_x, $.mafia_12_y, 0.5, 0.5, 0)) {
        $.mafia_12X.SetHeading(180.0);
        $.mafia_12X.SetIdle();
        $.mafia_12_flag = 3;
      }
    }
    if ($.mafia_12_flag > 0 && $.mafia_12_flag < 4) {
      if ($.mafia_12X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.mafia_12_flag > 0 && $.mafia_13_flag == 0) {
      if (Char.IsDead($.mafia_12X)) {
        $.mafia_13X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
        $.mafia_13X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
        $.mafia_13X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_13X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
        $.mafia_13X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_13_flag = 1;
      }
      else {
        if (!($.mafia_12X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 2.0, 2.0, 0))) {
          $.mafia_13X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_A`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
          $.mafia_13X.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.mafia_13X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.mafia_13X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
          $.mafia_13X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.mafia_13_flag = 1;
        }
      }
    }
    else {
      if ($.mafia_13_flag > 0) {
        if (Char.IsDead($.mafia_13X)) {
          $.kill_player_now_flag = 1;
          $.mafia_13_flag = 4;
        }
      }
    }
    if ($.mafia_13_flag == 1) {
      if ($.mafia_13X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_13X.SetObjGotoCoordOnFoot($.mafia_13_x, $.mafia_13_y);
        if ($.beamer1_health == 1) {
          Hud.SwitchWidescreen(0 /* OFF */);
          $.player.SetControl(1 /* ON */);
          Game.SetEveryoneIgnorePlayer($.player, 0 /* OFF */);
          Game.SetAllCarsCanBeDamaged(1 /* TRUE */);
          Streaming.Switch(1 /* ON */);
          if ($.player.IsInAnyCar()) {
            $.player.ApplyBrakesToCar(0 /* OFF */);
          }
          Camera.RestoreJumpcut();
          Streaming.MarkModelAsNoLongerNeeded(indhibuild3);
          Streaming.MarkModelAsNoLongerNeeded(luigiclubout);
          Streaming.MarkModelAsNoLongerNeeded(luigiineerclub);
          Streaming.MarkModelAsNoLongerNeeded(ind_customroad016);
          $.beamer1_health = 0;
        }
        $.mafia_13_flag = 2;
      }
    }
    if ($.mafia_13_flag == 2) {
      if ($.mafia_13X.LocateStoppedOnFoot2D($.mafia_13_x, $.mafia_13_y, 0.5, 0.5, 0)) {
        $.mafia_13X.SetHeading(180.0);
        $.mafia_13X.SetIdle();
        $.mafia_13_flag = 3;
      }
    }
    if ($.mafia_13_flag > 0 && $.mafia_13_flag < 4) {
      if ($.mafia_13X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if ($.fuckers_car < 1) {
      $.fuckers_car = World.GetRandomCarOfTypeInArea(900.467, -431.884, 905.759, -419.944, -1);
    }
    if (Car.IsDead($.fuckers_car)) {
      $.fuckers_car.MarkAsNoLongerNeeded();
      $.fuckers_car = -1;
      $.enter_car_flag = 0;
    }
    if ($.enter_car_flag < 5) {
      if (!($.fuckers_car == -1)) {
        if ($.fuckers_car == $.beamer1_a1) {
          if (!(Car.IsDead($.beamer1_a1))) {
            $.beamer1_a1.GotoCoordinatesAccurate(904.9, -434.1, 15.0);
          }
          else {
            $.beamer1_a1.Delete();
          }
        }
        else {
          if ($.fuckers_car == $.beamer2_a1) {
            if (!(Car.IsDead($.beamer2_a1))) {
              $.beamer2_a1.GotoCoordinatesAccurate(904.9, -434.1, 15.0);
            }
            else {
              $.beamer2_a1.Delete();
            }
          }
          else {
            if ($.fuckers_car == $.beamer3_a1) {
              if (!(Car.IsDead($.beamer3_a1))) {
                $.beamer3_a1.GotoCoordinatesAccurate(904.9, -434.1, 15.0);
              }
              else {
                $.beamer3_a1.Delete();
              }
            }
            else {
              if ($.mafia_10_flag < 4) {
                if ($.mafia_10_flag > 1) {
                  if ($.mafia_10X.LocateOnFootCar2D($.fuckers_car, 4.0, 4.0, 0)) {
                    $.mafia_10X.SetObjEnterCarAsDriver($.fuckers_car);
                    TIMERA = 0;
                    $.enter_car_flag = 10;
                  }
                }
              }
              else {
                if ($.mafia_11_flag < 4) {
                  if ($.mafia_11_flag > 1) {
                    if ($.mafia_11X.LocateOnFootCar2D($.fuckers_car, 4.0, 4.0, 0)) {
                      $.mafia_11X.SetObjEnterCarAsDriver($.fuckers_car);
                      TIMERA = 0;
                      $.enter_car_flag = 11;
                    }
                  }
                }
                else {
                  if ($.mafia_12_flag < 4) {
                    if ($.mafia_12_flag > 1) {
                      if ($.mafia_12X.LocateOnFootCar2D($.fuckers_car, 4.0, 4.0, 0)) {
                        $.mafia_12X.SetObjEnterCarAsDriver($.fuckers_car);
                        TIMERA = 0;
                        $.enter_car_flag = 12;
                      }
                    }
                  }
                  else {
                    if ($.mafia_13_flag < 4) {
                      if ($.mafia_13_flag > 1) {
                        if ($.mafia_13X.LocateOnFootCar2D($.fuckers_car, 4.0, 4.0, 0)) {
                          $.mafia_13X.SetObjEnterCarAsDriver($.fuckers_car);
                          TIMERA = 0;
                          $.enter_car_flag = 13;
                        }
                      }
                    }
                    else {
                      if (Car.IsDead($.fuckers_car)) {
                        $.fuckers_car.MarkAsNoLongerNeeded();
                        $.kill_player_now_flag = 1;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if ($.enter_car_flag == 10) {
      if ($.mafia_10X.IsInCar($.fuckers_car)) {
        // SCM GOSUB move_fuckers_car
        await move_fuckers_car();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.mafia_10_flag = 4;
        $.enter_car_flag = 5;
      }
    }
    if ($.enter_car_flag == 11) {
      if ($.mafia_11X.IsInCar($.fuckers_car)) {
        // SCM GOSUB move_fuckers_car
        await move_fuckers_car();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.mafia_11_flag = 4;
        $.enter_car_flag = 5;
      }
    }
    if ($.enter_car_flag == 12) {
      if ($.mafia_12X.IsInCar($.fuckers_car)) {
        // SCM GOSUB move_fuckers_car
        await move_fuckers_car();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.mafia_12_flag = 4;
        $.enter_car_flag = 5;
      }
    }
    if ($.enter_car_flag == 13) {
      if ($.mafia_13X.IsInCar($.fuckers_car)) {
        // SCM GOSUB move_fuckers_car
        await move_fuckers_car();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.mafia_13_flag = 4;
        $.enter_car_flag = 5;
      }
    }
    if ($.enter_car_flag > 9) {
      if (TIMERA > 20000) {
        if (!(Car.IsDead($.fuckers_car))) {
          if (!($.player.IsInCar($.fuckers_car))) {
            $.fuckers_car.MarkAsNoLongerNeeded();
            $.enter_car_flag = 0;
            $.fuckers_car = -1;
          }
          else {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    if (TIMERA > 180000) {
      $.frankie_exists_flag = 1;
    }
    if ($.kill_player_now_flag == 1) {
      // SCM GOSUB kill_player_now_script
      await kill_player_now_script();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (!($.frankie_exists_flag == 0)) {
      // SCM GOTO → create_salvatore (not lowered; manual jump required)
      throw new Error("unresolved GOTO create_salvatore"); // fallback: would break linear control flow
    }
  }
  if ($.frankie_exists_flag == 0) {
    if ($.player.IsInArea2D(878.79, -427.4, 890.77, -403.89, 0) || $.player.IsInArea2D(878.79, -433.86, 890.77, -427.4, 0)) {
      $.frankie_exists_flag = 2;
    }
    else {
      $.frankie_exists_flag = 1;
    }
  }
}

async function create_salvatore() {
  if ($.frankie_exists_flag == 1) {
    $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, $.create_char_in_club_x, $.create_char_in_club_y, $.create_char_in_club_z);
    if ($.kill_player_now_flag == 0) {
      $.frankie.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
    }
    else {
      $.frankie.SetObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
    }
  }
  if ($.frankie_exists_flag == 2) {
    $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 900.2028, -416.9139, 14.0);
    $.frankie.SetObjRunToCoord($.street_x, $.street_y);
    $.frankie_flag = 5;
  }
  if ($.frankie_exists_flag == 3) {
    $.frankie = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 884.6421, -422.9535, 14.0);
    $.frankie.SetObjRunToCoord($.street_x, $.street_y);
    $.frankie_flag = 5;
  }
  $.frankie.SetThreatSearch(0 /* THREAT_PLAYER1 */);
  $.frankie.SetPersonality(14 /* PEDSTAT_GEEK_GUY */);
  $.frankie.SetOnlyDamagedByPlayer(1 /* TRUE */);
  $.mission_blip_am1.Remove();
  $.mission_blip_am1 = Blip.AddForChar($.frankie);
  Text.PrintNow(AM1_1, 5000, 1);
  $.garage_door_close = 0;
  while (!($.frankie.IsInAnyCar())) {
    await asyncWait(0);
    if (Char.IsDead($.frankie)) {
      // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka1_passed"); // fallback: would break linear control flow
    }
    if (!($.time_left_a1 == 0)) {
      $.time_left_a1 = Clock.GetMinutesToTimeOfDay($.hours_a1, $.mins_a1);
    }
    if ($.frankie.HasSpottedPlayer($.player)) {
      $.kill_player_now_flag = 1;
    }
    if (!(Char.IsDead($.mafia_8X))) {
      if ($.mafia_8X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_8_flag = 4;
    }
    if (!(Char.IsDead($.mafia_9X))) {
      if ($.mafia_9X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_9_flag = 4;
    }
    if (!(Char.IsDead($.mafia_10X))) {
      if ($.mafia_10X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_10_flag = 4;
    }
    if (!(Char.IsDead($.mafia_11X))) {
      if ($.mafia_11X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_11_flag = 4;
    }
    if (!(Char.IsDead($.mafia_12X))) {
      if ($.mafia_12X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_12_flag = 4;
    }
    if (!(Char.IsDead($.mafia_13X))) {
      if ($.mafia_13X.HasSpottedPlayer($.player)) {
        if (!($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0))) {
          if (!($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0))) {
            $.kill_player_now_flag = 1;
          }
        }
      }
    }
    else {
      $.kill_player_now_flag = 1;
      $.mafia_13_flag = 4;
    }
    if ($.kill_player_now_flag == 1) {
      // SCM GOSUB kill_player_now_script
      await kill_player_now_script();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (Car.IsDead($.beamer1_a1)) {
      $.beamer_1_dead_flag = 1;
    }
    if (Car.IsDead($.beamer2_a1)) {
      $.beamer_2_dead_flag = 1;
    }
    if (Car.IsDead($.beamer3_a1)) {
      $.beamer_3_dead_flag = 1;
    }
    if ($.frankie_flag == 0) {
      if ($.frankie.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        if ($.kill_player_now_flag == 0) {
          $.frankie.SetObjGotoCoordOnFoot($.street_x, $.street_y);
        }
        else {
          $.frankie.SetObjRunToCoord($.street_x, $.street_y);
        }
        $.frankie_flag = 5;
      }
    }
    if ($.frankie_flag == 5) {
      if ($.frankie.LocateOnFoot2D($.street_x, $.street_y, 1.0, 1.0, 0)) {
        if ($.beamer_2_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer2_a1, 30.0, 30.0, 0)) {
          $.frankie.SetObjEnterCarAsPassenger($.beamer2_a1);
          $.frankie_flag = 2;
        }
        else {
          if ($.beamer_3_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer3_a1, 30.0, 30.0, 0)) {
            $.frankie.SetObjEnterCarAsPassenger($.beamer3_a1);
            $.frankie_flag = 3;
          }
          else {
            if ($.beamer_1_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer1_a1, 30.0, 30.0, 0)) {
              $.frankie.SetObjEnterCarAsPassenger($.beamer1_a1);
              $.frankie_flag = 1;
            }
            else {
              $.frankie.SetObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
              $.frankie_flag = 4;
            }
          }
        }
      }
    }
    if ($.frankie_flag == 2) {
      if ($.beamer_2_dead_flag == 1) {
        if ($.beamer_1_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer1_a1, 30.0, 30.0, 0)) {
          $.frankie.SetObjEnterCarAsPassenger($.beamer1_a1);
          $.frankie_flag = 1;
        }
        else {
          if ($.beamer_3_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer3_a1, 30.0, 30.0, 0)) {
            $.frankie.SetObjEnterCarAsPassenger($.beamer3_a1);
            $.frankie_flag = 3;
          }
          else {
            $.frankie.SetObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
            $.frankie_flag = 4;
          }
        }
      }
    }
    if ($.frankie_flag == 3) {
      if ($.beamer_3_dead_flag == 1) {
        if ($.beamer_1_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer1_a1, 30.0, 30.0, 0)) {
          $.frankie.SetObjEnterCarAsPassenger($.beamer1_a1);
          $.frankie_flag = 1;
        }
        else {
          $.frankie.SetObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.frankie_flag = 4;
        }
      }
    }
    if ($.frankie_flag == 1) {
      if ($.beamer_1_dead_flag == 1) {
        if ($.beamer_3_dead_flag == 0 && $.frankie.LocateOnFootCar2D($.beamer3_a1, 30.0, 30.0, 0)) {
          $.frankie.SetObjEnterCarAsPassenger($.beamer3_a1);
          $.frankie_flag = 3;
        }
        else {
          $.frankie.SetObjRunToCoord($.bottom_of_steps_x, $.bottom_of_steps_y);
          $.frankie_flag = 4;
        }
      }
    }
    if ($.frankie_flag == 4) {
      if ($.frankie.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.frankie.SetObjRunToCoord($.create_char_in_club_x, $.create_char_in_club_y);
        $.frankie_flag = 6;
      }
    }
    if ($.frankie_flag == 6) {
      if ($.frankie.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 1.0, 1.0, 0)) {
        $.frankie.Delete();
        Text.PrintNow(AM1_9, 5000, 1);
        // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka1_failed"); // fallback: would break linear control flow
      }
    }
  }
  if (!(Car.IsDead($.beamer1_a1))) {
    if ($.frankie_flag == 1) {
      $.beamer1_a1.GotoCoordinates(1438.0, -183.4, 50.5);
      $.frankie_garage.SetTargetCarForMission($.beamer1_a1);
    }
    else {
      $.beamer1_a1.GotoCoordinates(1423.7, -168.1, 50.2);
    }
    if ($.kill_player_now_flag == 0) {
      $.beamer1_a1.SetCruiseSpeed(18.0);
    }
    else {
      $.beamer1_a1.SetCruiseSpeed(43.0);
    }
  }
  if (!(Car.IsDead($.beamer2_a1))) {
    if ($.frankie_flag == 2) {
      $.beamer2_a1.GotoCoordinates(1438.0, -183.4, 50.5);
      $.frankie_garage.SetTargetCarForMission($.beamer2_a1);
    }
    else {
      $.beamer2_a1.GotoCoordinates(1418.7, -168.1, 50.2);
    }
    if ($.kill_player_now_flag == 0) {
      $.beamer2_a1.SetCruiseSpeed(17.0);
    }
    else {
      $.beamer2_a1.SetCruiseSpeed(42.0);
    }
  }
  if (!(Car.IsDead($.beamer3_a1))) {
    if ($.frankie_flag == 3) {
      $.beamer3_a1.GotoCoordinates(1438.0, -183.4, 50.5);
      $.frankie_garage.SetTargetCarForMission($.beamer3_a1);
    }
    else {
      $.beamer3_a1.GotoCoordinates(1418.7, -168.1, 50.2);
    }
    if ($.kill_player_now_flag == 0) {
      $.beamer3_a1.SetCruiseSpeed(16.0);
    }
    else {
      $.beamer3_a1.SetCruiseSpeed(41.0);
    }
  }
  Path.SwitchRoadsOn(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
  $.frankie_garage.ChangeType(19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  if (!(Char.IsDead($.frankie))) {
    $.frankie.AddArmor(100);
  }
  $.beamer1_health = 0;
  $.timerb_reset_flag_a1 = 0;
  TIMERA = 0;
  TIMERB = 0;
}

async function cars_going_to_frankies() {
  // SCM GOTO → cars_going_to_frankies lowered to endless loop
  while (true) {
    await asyncWait(0);
    if (Char.IsDead($.frankie)) {
      // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka1_passed"); // fallback: would break linear control flow
    }
    if (!($.mafia_8_flag == 4)) {
      if (Char.IsDead($.mafia_8X)) {
        $.mafia_8_flag = 4;
      }
    }
    if ($.mafia_8_flag == 3) {
      $.mafia_8X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_8X.SetHeedThreats(1 /* TRUE */);
      $.mafia_8_flag = 5;
    }
    if ($.mafia_8_flag == 5) {
      if ($.mafia_8X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_8X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_8_flag = 6;
      }
    }
    if ($.mafia_8_flag == 6) {
      if ($.mafia_8X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_8X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_8_flag = 7;
      }
    }
    if ($.mafia_8_flag == 7) {
      if ($.mafia_8X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_8X.Delete();
        $.mafia_8_flag = 4;
      }
    }
    if (!($.mafia_9_flag == 4)) {
      if (Char.IsDead($.mafia_9X)) {
        $.mafia_9_flag = 4;
      }
    }
    if ($.mafia_9_flag == 3) {
      $.mafia_9X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_9X.SetHeedThreats(1 /* TRUE */);
      $.mafia_9_flag = 5;
    }
    if ($.mafia_9_flag == 5) {
      if ($.mafia_9X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_9X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_9_flag = 6;
      }
    }
    if ($.mafia_9_flag == 6) {
      if ($.mafia_9X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_9X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_9_flag = 7;
      }
    }
    if ($.mafia_9_flag == 7) {
      if ($.mafia_9X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_9X.Delete();
        $.mafia_9_flag = 4;
      }
    }
    if (!($.mafia_10_flag == 4)) {
      if (Char.IsDead($.mafia_10X)) {
        $.mafia_10_flag = 4;
      }
    }
    if ($.mafia_10_flag == 3) {
      $.mafia_10X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_10X.SetHeedThreats(1 /* TRUE */);
      $.mafia_10_flag = 5;
    }
    if ($.mafia_10_flag == 5) {
      if ($.mafia_10X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_10X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_10_flag = 6;
      }
    }
    if ($.mafia_10_flag == 6) {
      if ($.mafia_10X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_10X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_10_flag = 7;
      }
    }
    if ($.mafia_10_flag == 7) {
      if ($.mafia_10X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_10X.Delete();
        $.mafia_10_flag = 4;
      }
    }
    if (!($.mafia_11_flag == 4)) {
      if (Char.IsDead($.mafia_11X)) {
        $.mafia_11_flag = 4;
      }
    }
    if ($.mafia_11_flag == 3) {
      $.mafia_11X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_11X.SetHeedThreats(1 /* TRUE */);
      $.mafia_11_flag = 5;
    }
    if ($.mafia_11_flag == 5) {
      if ($.mafia_11X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_11X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_11_flag = 6;
      }
    }
    if ($.mafia_11_flag == 6) {
      if ($.mafia_11X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_11X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_11_flag = 7;
      }
    }
    if ($.mafia_11_flag == 7) {
      if ($.mafia_11X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_11X.Delete();
        $.mafia_11_flag = 4;
      }
    }
    if (!($.mafia_12_flag == 4)) {
      if (Char.IsDead($.mafia_12X)) {
        $.mafia_12_flag = 4;
      }
    }
    if ($.mafia_12_flag == 3) {
      $.mafia_12X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_12X.SetHeedThreats(1 /* TRUE */);
      $.mafia_12_flag = 5;
    }
    if ($.mafia_12_flag == 5) {
      if ($.mafia_12X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_12X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_12_flag = 6;
      }
    }
    if ($.mafia_12_flag == 6) {
      if ($.mafia_12X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_12X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_12_flag = 7;
      }
    }
    if ($.mafia_12_flag == 7) {
      if ($.mafia_12X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_12X.Delete();
        $.mafia_12_flag = 4;
      }
    }
    if (!($.mafia_13_flag == 4)) {
      if (Char.IsDead($.mafia_13X)) {
        $.mafia_13_flag = 4;
      }
    }
    if ($.mafia_13_flag == 3) {
      $.mafia_13X.SetObjGotoCoordOnFoot($.back_of_alley_x, $.back_of_alley_y);
      $.mafia_13X.SetHeedThreats(1 /* TRUE */);
      $.mafia_13_flag = 5;
    }
    if ($.mafia_13_flag == 5) {
      if ($.mafia_13X.LocateOnFoot2D($.back_of_alley_x, $.back_of_alley_y, 1.0, 1.0, 0)) {
        $.mafia_13X.SetObjGotoCoordOnFoot($.bottom_of_steps_x, $.bottom_of_steps_y);
        $.mafia_13_flag = 6;
      }
    }
    if ($.mafia_13_flag == 6) {
      if ($.mafia_13X.LocateOnFoot2D($.bottom_of_steps_x, $.bottom_of_steps_y, 1.0, 1.0, 0)) {
        $.mafia_13X.SetObjGotoCoordOnFoot($.create_char_in_club_x, $.create_char_in_club_y);
        $.mafia_13_flag = 7;
      }
    }
    if ($.mafia_13_flag == 7) {
      if ($.mafia_13X.LocateOnFoot2D($.create_char_in_club_x, $.create_char_in_club_y, 0.5, 0.5, 0)) {
        $.mafia_13X.Delete();
        $.mafia_13_flag = 4;
      }
    }
    if (Char.IsDead($.frankie)) {
      // SCM GOTO → mission_asuka1_passed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka1_passed"); // fallback: would break linear control flow
    }
    if ($.frankies_ride == 0) {
      if ($.frankie.LocateInCar2D(1371.0, -283.9, 50.0, 50.0, 0)) {
        $.frankies_ride = $.frankie.StoreCarIsIn();
        $.frankies_ride.SetCruiseSpeed(20.0);
      }
    }
    if (!(Car.IsDead($.beamer1_a1))) {
      $.beamer1_health = $.beamer1_a1.GetHealth();
      if ($.beamer1_health < 1000) {
        if (!($.frankies_ride == $.beamer1_a1)) {
          $.beamer1_a1.SetCruiseSpeed(51.0);
        }
        if (!(Car.IsDead($.beamer2_a1))) {
          if (!($.frankies_ride == $.beamer2_a1)) {
            $.beamer2_a1.SetCruiseSpeed(50.0);
          }
        }
        if (!(Car.IsDead($.beamer3_a1))) {
          if (!($.frankies_ride == $.beamer3_a1)) {
            $.beamer3_a1.SetCruiseSpeed(49.0);
            $.set_beamer_3_kill_player = 1;
          }
        }
      }
    }
    else {
      if (!(Car.IsDead($.beamer3_a1))) {
        if (!($.frankie_flag == 3)) {
          $.set_beamer_3_kill_player = 1;
        }
        else {
          if (!(Car.IsDead($.beamer2_a1))) {
            if (!($.frankie_flag == 2)) {
              $.set_beamer_2_kill_player = 1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.beamer3_a1))) {
      $.beamer3_health = $.beamer3_a1.GetHealth();
      if ($.beamer3_health < 1000) {
        if (!($.frankies_ride == $.beamer3_a1)) {
          $.beamer3_a1.SetCruiseSpeed(51.0);
        }
        if (!(Car.IsDead($.beamer1_a1))) {
          if (!($.frankies_ride == $.beamer1_a1)) {
            $.beamer1_a1.SetCruiseSpeed(50.0);
            $.set_beamer_1_kill_player = 1;
          }
        }
        if (!(Car.IsDead($.beamer2_a1))) {
          if (!($.frankies_ride == $.beamer2_a1)) {
            $.beamer2_a1.SetCruiseSpeed(49.0);
          }
        }
      }
    }
    else {
      if (!(Car.IsDead($.beamer1_a1))) {
        if (!($.frankie_flag == 1)) {
          $.set_beamer_1_kill_player = 1;
        }
        else {
          if (!(Car.IsDead($.beamer2_a1))) {
            if (!($.frankie_flag == 2)) {
              $.set_beamer_2_kill_player = 1;
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.beamer2_a1))) {
      $.beamer2_health = $.beamer2_a1.GetHealth();
      if ($.beamer2_health < 1000) {
        if (!($.frankies_ride == $.beamer2_a1)) {
          $.beamer2_a1.SetCruiseSpeed(51.0);
        }
        if (!(Car.IsDead($.beamer1_a1))) {
          if (!($.frankies_ride == $.beamer1_a1)) {
            $.beamer1_a1.SetCruiseSpeed(50.0);
            $.set_beamer_1_kill_player = 1;
          }
        }
        if (!(Car.IsDead($.beamer3_a1))) {
          if (!($.frankies_ride == $.beamer3_a1)) {
            $.beamer3_a1.SetCruiseSpeed(49.0);
            $.set_beamer_3_kill_player = 1;
          }
        }
      }
    }
    else {
      if (!(Car.IsDead($.beamer1_a1))) {
        if (!($.frankie_flag == 1)) {
          $.set_beamer_1_kill_player = 1;
        }
        else {
          if (!(Car.IsDead($.beamer3_a1))) {
            if (!($.frankie_flag == 3)) {
              $.set_beamer_3_kill_player = 1;
            }
          }
        }
      }
    }
    if ($.set_beamer_1_kill_player == 1) {
      if (!(Car.IsDead($.beamer1_a1))) {
        if (!($.frankies_ride == $.beamer1_a1)) {
          $.beamer1_a1.SetCruiseSpeed(100.0);
          $.beamer1_a1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
      }
    }
    if ($.set_beamer_2_kill_player == 1) {
      if (!(Car.IsDead($.beamer2_a1))) {
        if (!($.frankies_ride == $.beamer2_a1)) {
          $.beamer2_a1.SetCruiseSpeed(100.0);
          $.beamer2_a1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
      }
    }
    if ($.set_beamer_3_kill_player == 1) {
      if (!(Car.IsDead($.beamer3_a1))) {
        if (!($.frankies_ride == $.beamer3_a1)) {
          $.beamer3_a1.SetCruiseSpeed(100.0);
          $.beamer3_a1.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
        }
      }
    }
    if ($.set_beamer_1_kill_player == 1) {
      if (!(Char.IsDead($.mafia_1X)) || !(Car.IsDead($.beamer1_a1))) {
        if ($.player.IsInAnyCar()) {
          $.players_car_a1 = $.player.StoreCarIsIn();
          $.players_car_a1_speed = $.players_car_a1.GetSpeed();
          $.beamer1_a1_speed = $.beamer1_a1.GetSpeed();
          if ($.beamer1_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
            if ($.mafia_1X.LocateInCarCar2D($.players_car_a1, 10.0, 10.0, 0)) {
              if (!(Char.IsDead($.mafia_6X))) {
                $.mafia_6X.SetObjKillPlayerAnyMeans($.player);
                $.mafia_6X.SetRunning(1 /* TRUE */);
              }
              if (!(Char.IsDead($.mafia_7X))) {
                $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
                $.mafia_7X.SetRunning(1 /* TRUE */);
              }
            }
          }
        }
      }
    }
    if ($.set_beamer_2_kill_player == 1) {
      if (!(Char.IsDead($.mafia_2X)) || !(Car.IsDead($.beamer2_a1))) {
        if ($.player.IsInAnyCar()) {
          $.players_car_a1 = $.player.StoreCarIsIn();
          $.players_car_a1_speed = $.players_car_a1.GetSpeed();
          $.beamer2_a1_speed = $.beamer2_a1.GetSpeed();
          if ($.beamer2_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
            if ($.mafia_2X.LocateInCarCar2D($.players_car_a1, 10.0, 10.0, 0)) {
              if (!(Char.IsDead($.mafia_14X))) {
                $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
                $.mafia_14X.SetRunning(1 /* TRUE */);
              }
            }
          }
        }
      }
    }
    if ($.set_beamer_3_kill_player == 1) {
      if (!(Char.IsDead($.mafia_3X)) || !(Car.IsDead($.beamer3_a1))) {
        if ($.player.IsInAnyCar()) {
          $.players_car_a1 = $.player.StoreCarIsIn();
          $.players_car_a1_speed = $.players_car_a1.GetSpeed();
          $.beamer3_a1_speed = $.beamer3_a1.GetSpeed();
          if ($.beamer3_a1_speed < 10.0 && $.players_car_a1_speed < 6.0) {
            if ($.mafia_3X.LocateInCarCar2D($.players_car_a1, 10.0, 10.0, 0)) {
              if (!(Char.IsDead($.mafia_4X))) {
                $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
                $.mafia_4X.SetRunning(1 /* TRUE */);
              }
              if (!(Char.IsDead($.mafia_5X))) {
                $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
                $.mafia_5X.SetRunning(1 /* TRUE */);
              }
            }
          }
        }
      }
    }
    if (!(Car.IsDead($.beamer1_a1))) {
      if ($.beamer1_a1.IsUpsidedown() && $.beamer1_a1.IsStopped()) {
        if (!($.beamer1_a1.IsOnScreen())) {
          [$.a1_x, $.a1_y, $.a1_z] = $.beamer1_a1.GetCoordinates();
          [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
          if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
            $.beamer1_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
            $.beamer1_a1.TurnToFaceCoord(1438.0, -183.4);
          }
          else {
            if (!(Char.IsDead($.mafia_1X))) {
              $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_7X))) {
              $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
            }
            if ($.frankie_flag == 1) {
              if (!(Char.IsDead($.frankie))) {
                $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                $.frankie.SetObjKillPlayerAnyMeans($.player);
              }
            }
          }
        }
        else {
          if (!(Char.IsDead($.mafia_1X))) {
            $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
          }
          if (!(Char.IsDead($.mafia_7X))) {
            $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
          }
          if ($.frankie_flag == 1) {
            if (!(Char.IsDead($.frankie))) {
              $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
              $.frankie.SetObjKillPlayerAnyMeans($.player);
            }
          }
        }
      }
      if ($.timera_reset_flag_a1 == 1) {
        if (!($.beamer1_a1.IsStopped())) {
          $.timera_reset_flag_a1 = 0;
        }
      }
      if ($.beamer1_a1.IsStopped()) {
        if ($.timera_reset_flag_a1 == 0) {
          TIMERA = 0;
          $.timera_reset_flag_a1 = 1;
        }
        if (TIMERA > 4000 && $.timera_reset_flag_a1 == 1) {
          if (!($.beamer1_a1.IsOnScreen())) {
            [$.a1_x, $.a1_y, $.a1_z] = $.beamer1_a1.GetCoordinates();
            [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
            if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
              $.beamer1_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
              $.beamer1_a1.TurnToFaceCoord(1438.0, -183.4);
              $.timera_reset_flag_a1 = 0;
            }
            else {
              if (!(Char.IsDead($.mafia_1X))) {
                $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_7X))) {
                $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 1) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
          else {
            if (!(Char.IsDead($.mafia_1X))) {
              $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_7X))) {
              $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
            }
            if ($.frankie_flag == 1) {
              if (!(Char.IsDead($.frankie))) {
                $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                $.frankie.SetObjKillPlayerAnyMeans($.player);
              }
            }
          }
        }
      }
      if ($.beamer1_a1.Locate3D($.beamer1_stuck_x, $.beamer1_stuck_y, $.beamer1_stuck_z, 4.0, 4.0, 4.0, 0)) {
        if ($.timerx_reset_flag == 0) {
          $.timerx_started = Clock.GetGameTimer();
          $.timerx_reset_flag = 1;
        }
        if ($.timerx_reset_flag == 1) {
          $.timerx_current = Clock.GetGameTimer();
          $.timerx = $.timerx_current - $.timerx_started;
          if ($.timerx > 5000) {
            if (!($.beamer1_a1.IsOnScreen())) {
              [$.a1_x, $.a1_y, $.a1_z] = $.beamer1_a1.GetCoordinates();
              [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
              if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
                $.beamer1_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
                $.beamer1_a1.TurnToFaceCoord(1438.0, -183.4);
                $.timera_reset_flag_a1 = 0;
              }
              else {
                if (!(Char.IsDead($.mafia_1X))) {
                  $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_7X))) {
                  $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
                }
                if ($.frankie_flag == 1) {
                  if (!(Char.IsDead($.frankie))) {
                    $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                    $.frankie.SetObjKillPlayerAnyMeans($.player);
                  }
                }
              }
            }
            else {
              if (!(Char.IsDead($.mafia_1X))) {
                $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_7X))) {
                $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 1) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
        }
      }
      if (!($.beamer1_a1.Locate3D($.beamer1_stuck_x, $.beamer1_stuck_y, $.beamer1_stuck_z, 4.0, 4.0, 4.0, 0))) {
        [$.beamer1_stuck_x, $.beamer1_stuck_y, $.beamer1_stuck_z] = $.beamer1_a1.GetCoordinates();
        $.timerx_reset_flag = 0;
      }
    }
    if (!(Car.IsDead($.beamer2_a1))) {
      if ($.beamer2_a1.IsUpsidedown() && $.beamer2_a1.IsStopped()) {
        if (!($.beamer2_a1.IsOnScreen())) {
          [$.a1_x, $.a1_y, $.a1_z] = $.beamer2_a1.GetCoordinates();
          [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
          if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
            $.beamer2_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
            $.beamer2_a1.TurnToFaceCoord(1438.0, -183.4);
          }
          else {
            if (!(Char.IsDead($.mafia_2X))) {
              $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_14X))) {
              $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
            }
            if ($.frankie_flag == 2) {
              if (!(Char.IsDead($.frankie))) {
                $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                $.frankie.SetObjKillPlayerAnyMeans($.player);
              }
            }
          }
        }
        else {
          if (!(Char.IsDead($.mafia_2X))) {
            $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
          }
          if (!(Char.IsDead($.mafia_14X))) {
            $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
          }
          if ($.frankie_flag == 2) {
            if (!(Char.IsDead($.frankie))) {
              $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
              $.frankie.SetObjKillPlayerAnyMeans($.player);
            }
          }
        }
      }
      if ($.timerb_reset_flag_a1 == 1) {
        if (!($.beamer2_a1.IsStopped())) {
          $.timerb_reset_flag_a1 = 0;
        }
      }
      if ($.beamer2_a1.IsStopped()) {
        if ($.timerb_reset_flag_a1 == 0) {
          TIMERB = 0;
          $.timerb_reset_flag_a1 = 1;
        }
        if (TIMERB > 5000 && $.timerb_reset_flag_a1 == 1) {
          if (!($.beamer2_a1.IsOnScreen())) {
            [$.a1_x, $.a1_y, $.a1_z] = $.beamer2_a1.GetCoordinates();
            [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
            if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
              $.beamer2_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
              $.beamer2_a1.TurnToFaceCoord(1438.0, -183.4);
              $.timerb_reset_flag_a1 = 0;
            }
            else {
              if (!(Char.IsDead($.mafia_2X))) {
                $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_14X))) {
                $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 2) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
          else {
            if (!(Char.IsDead($.mafia_2X))) {
              $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_14X))) {
              $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
            }
            if ($.frankie_flag == 2) {
              if (!(Char.IsDead($.frankie))) {
                $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                $.frankie.SetObjKillPlayerAnyMeans($.player);
              }
            }
          }
        }
      }
      if ($.beamer2_a1.Locate3D($.beamer2_stuck_x, $.beamer2_stuck_y, $.beamer2_stuck_z, 4.0, 4.0, 4.0, 0)) {
        if ($.timery_reset_flag == 0) {
          $.timery_started = Clock.GetGameTimer();
          $.timery_reset_flag = 1;
        }
        if ($.timery_reset_flag == 1) {
          $.timery_current = Clock.GetGameTimer();
          $.timery = $.timery_current - $.timery_started;
          if ($.timery > 5000) {
            if (!($.beamer2_a1.IsOnScreen())) {
              [$.a1_x, $.a1_y, $.a1_z] = $.beamer2_a1.GetCoordinates();
              [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
              if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
                $.beamer2_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
                $.beamer2_a1.TurnToFaceCoord(1438.0, -183.4);
                $.timerb_reset_flag_a1 = 0;
              }
              else {
                if (!(Char.IsDead($.mafia_2X))) {
                  $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_14X))) {
                  $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
                }
                if ($.frankie_flag == 2) {
                  if (!(Char.IsDead($.frankie))) {
                    $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                    $.frankie.SetObjKillPlayerAnyMeans($.player);
                  }
                }
              }
            }
            else {
              if (!(Char.IsDead($.mafia_2X))) {
                $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_14X))) {
                $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 2) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
        }
      }
      if (!($.beamer2_a1.Locate3D($.beamer2_stuck_x, $.beamer2_stuck_y, $.beamer2_stuck_z, 4.0, 4.0, 4.0, 0))) {
        [$.beamer2_stuck_x, $.beamer2_stuck_y, $.beamer2_stuck_z] = $.beamer2_a1.GetCoordinates();
        $.timery_reset_flag = 0;
      }
    }
    if (!(Car.IsDead($.beamer3_a1))) {
      if ($.beamer3_a1.IsUpsidedown() && $.beamer3_a1.IsStopped()) {
        if (!($.beamer3_a1.IsOnScreen())) {
          [$.a1_x, $.a1_y, $.a1_z] = $.beamer3_a1.GetCoordinates();
          [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
          if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
            $.beamer3_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
            $.beamer3_a1.TurnToFaceCoord(1438.0, -183.4);
          }
          else {
            if (!(Char.IsDead($.mafia_3X))) {
              $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_4X))) {
              $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
            }
            if (!(Char.IsDead($.mafia_5X))) {
              $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
            }
            if ($.frankie_flag == 3) {
              if (!(Char.IsDead($.frankie))) {
                $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                $.frankie.SetObjKillPlayerAnyMeans($.player);
              }
            }
          }
        }
        else {
          if (!(Char.IsDead($.mafia_3X))) {
            $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
          }
          if (!(Char.IsDead($.mafia_4X))) {
            $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
          }
          if (!(Char.IsDead($.mafia_5X))) {
            $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
          }
          if ($.frankie_flag == 3) {
            if (!(Char.IsDead($.frankie))) {
              $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
              $.frankie.SetObjKillPlayerAnyMeans($.player);
            }
          }
        }
      }
      if ($.timerc_reset_flag_a1 == 1) {
        if (!($.beamer3_a1.IsStopped())) {
          $.timerc_reset_flag_a1 = 0;
        }
      }
      if ($.beamer3_a1.IsStopped()) {
        if ($.timerc_reset_flag_a1 == 0) {
          $.timerc_started_a1 = Clock.GetGameTimer();
          $.timerc_reset_flag_a1 = 1;
        }
        if ($.timerc_reset_flag_a1 == 1) {
          $.timerc_current_a1 = Clock.GetGameTimer();
          $.timerc_a1 = $.timerc_current_a1 - $.timerc_started_a1;
          if ($.timerc_a1 > 5000) {
            if (!($.beamer3_a1.IsOnScreen())) {
              [$.a1_x, $.a1_y, $.a1_z] = $.beamer3_a1.GetCoordinates();
              [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
              if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
                $.beamer3_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
                $.beamer3_a1.TurnToFaceCoord(1438.0, -183.4);
                $.timerc_reset_flag_a1 = 0;
              }
              else {
                if (!(Char.IsDead($.mafia_3X))) {
                  $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_4X))) {
                  $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_5X))) {
                  $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
                }
                if ($.frankie_flag == 3) {
                  if (!(Char.IsDead($.frankie))) {
                    $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                    $.frankie.SetObjKillPlayerAnyMeans($.player);
                  }
                }
              }
            }
            else {
              if (!(Char.IsDead($.mafia_3X))) {
                $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_4X))) {
                $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_5X))) {
                $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 3) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
        }
      }
      if ($.beamer3_a1.Locate3D($.beamer3_stuck_x, $.beamer3_stuck_y, $.beamer3_stuck_z, 4.0, 4.0, 4.0, 0)) {
        if ($.timerz_reset_flag == 0) {
          $.timerz_started = Clock.GetGameTimer();
          $.timerz_reset_flag = 1;
        }
        if ($.timerz_reset_flag == 1) {
          $.timerz_current = Clock.GetGameTimer();
          $.timerz = $.timerz_current - $.timerz_started;
          if ($.timerz > 5000) {
            if (!($.beamer3_a1.IsOnScreen())) {
              [$.a1_x, $.a1_y, $.a1_z] = $.beamer3_a1.GetCoordinates();
              [$.a1_x, $.a1_y, $.a1_z] = Path.GetClosestCarNode($.a1_x, $.a1_y, $.a1_z);
              if (!($.player.LocateAnyMeans2D($.a1_x, $.a1_y, 80.0, 80.0, 0))) {
                $.beamer3_a1.SetCoordinates($.a1_x, $.a1_y, $.a1_z);
                $.beamer3_a1.TurnToFaceCoord(1438.0, -183.4);
                $.timerc_reset_flag_a1 = 0;
              }
              else {
                if (!(Char.IsDead($.mafia_3X))) {
                  $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_4X))) {
                  $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
                }
                if (!(Char.IsDead($.mafia_5X))) {
                  $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
                }
                if ($.frankie_flag == 3) {
                  if (!(Char.IsDead($.frankie))) {
                    $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                    $.frankie.SetObjKillPlayerAnyMeans($.player);
                  }
                }
              }
            }
            else {
              if (!(Char.IsDead($.mafia_3X))) {
                $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_4X))) {
                $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
              }
              if (!(Char.IsDead($.mafia_5X))) {
                $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
              }
              if ($.frankie_flag == 3) {
                if (!(Char.IsDead($.frankie))) {
                  $.frankie.GiveWeapon(6 /* WEAPONTYPE_M16 */, 1000);
                  $.frankie.SetObjKillPlayerAnyMeans($.player);
                }
              }
            }
          }
        }
      }
      if (!($.beamer3_a1.Locate3D($.beamer3_stuck_x, $.beamer3_stuck_y, $.beamer3_stuck_z, 4.0, 4.0, 4.0, 0))) {
        [$.beamer3_stuck_x, $.beamer3_stuck_y, $.beamer3_stuck_z] = $.beamer3_a1.GetCoordinates();
        $.timerz_reset_flag = 0;
      }
    }
    if ($.garage_door_close == 0) {
      if ($.frankie.LocateAnyMeans3D(1426.0, -183.4, 50.5, 15.0, 12.0, 6.0, 0)) {
        $.frankie_garage.Open();
        $.garage_door_close = 1;
      }
    }
    if ($.garage_door_close == 1) {
      if (!($.player.IsInArea3D(1427.6, -187.3, 49.5, 1442.6, -179.0, 53.8, 0))) {
        if ($.frankie.IsInArea3D(1428.8, -187.0, 50.0, 1442.5, -179.9, 53.0, 0)) {
          $.frankie_garage.Close();
          $.garage_door_close = 2;
        }
      }
      else {
        $.frankie_garage.Open();
      }
    }
    if ($.garage_door_close == 2) {
      if ($.player.IsInArea3D(1427.6, -187.3, 49.5, 1442.6, -179.0, 53.8, 0)) {
        $.frankie_garage.Open();
        $.garage_door_close = 1;
      }
      if ($.frankie_garage.IsClosed()) {
        Text.PrintNow(AM1_7, 5000, 1);
        // SCM GOTO → mission_asuka1_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_asuka1_failed"); // fallback: would break linear control flow
      }
    }
  }
}

async function mission_asuka1_failed() {
  if (!(Char.IsDead($.mafia_1X))) {
    $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_2X))) {
    $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_3X))) {
    $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_4X))) {
    $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_5X))) {
    $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_6X))) {
    $.mafia_6X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_7X))) {
    $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_8X))) {
    $.mafia_8X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_9X))) {
    $.mafia_9X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_10X))) {
    $.mafia_10X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_11X))) {
    $.mafia_11X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_12X))) {
    $.mafia_12X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_13X))) {
    $.mafia_13X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_14X))) {
    $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
  }
  Text.PrintBig("m_fail", 5000, 1);
  return;
}

async function mission_asuka1_passed() {
  $.flag_asuka_mission1_passed = 1;
  if (!(Char.IsDead($.mafia_1X))) {
    $.mafia_1X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_2X))) {
    $.mafia_2X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_3X))) {
    $.mafia_3X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_4X))) {
    $.mafia_4X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_5X))) {
    $.mafia_5X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_6X))) {
    $.mafia_6X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_7X))) {
    $.mafia_7X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_8X))) {
    $.mafia_8X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_9X))) {
    $.mafia_9X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_10X))) {
    $.mafia_10X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_11X))) {
    $.mafia_11X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_12X))) {
    $.mafia_12X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_13X))) {
    $.mafia_13X.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.mafia_14X))) {
    $.mafia_14X.SetObjKillPlayerAnyMeans($.player);
  }
  Text.PrintWithNumberBig(m_pass, 25000, 5000, 1);
  $.player.AddScore(25000);
  Game.SetThreatForPedType(7 /* PEDTYPE_GANG_MAFIA */, 0 /* THREAT_PLAYER1 */);
  Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 4 /* WEAPONTYPE_SHOTGUN */);
  $.player.ClearWantedLevel();
  Stat.RegisterMissionPassed(AM1);
  Audio.PlayMissionPassedTune(1);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT asuka_mission2_loop
  // START_NEW_SCRIPT joeys_buggy_loop
  // START_NEW_SCRIPT yardie_phone_start
  return;
}

async function mission_cleanup_asuka1() {
  // START_NEW_SCRIPT close_asuka1_door
  $.frankie_garage.SetTargetCarForMission(-1);
  Streaming.MarkModelAsNoLongerNeeded(car`MAFIA`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_A`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.UnloadSpecialCharacter(1);
  $.mission_blip_am1.Remove();
  Path.SwitchRoadsOn(905.0, -448.6, 12.0, 916.0, -393.0, 20.0);
  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_mission = 0;
  Mission.Finish();
  return;
}

async function kill_player_now_script() {
  if ($.spotted_print == 0) {
    if (Audio.HasMissionAudioLoaded()) {
      Text.PrintNow(AM1_2, 5000, 1);
      Audio.PlayMissionAudio();
      $.spotted_print = 1;
    }
  }
  if (!(Char.IsDead($.frankie))) {
    $.frankie.SetRunning(1 /* TRUE */);
  }
  if ($.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0) || $.player.IsInArea2D(878.79, -433.86, 890.77, -427.4, 0) || $.player.IsInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, 0)) {
    if (!($.mafia_13_flag == 4)) {
      if (!($.mafia_13_flag == 0)) {
        if ($.mafia_13_flag > 1 && $.mafia_13_kill_player_flag == 0) {
          $.mafia_13X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_13X.SetObjRunToCoord(886.0037, -414.0266);
          $.mafia_13_kill_player_flag = 1;
        }
        if ($.mafia_13_kill_player_flag == 1) {
          if ($.mafia_13X.LocateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, 0)) {
            $.mafia_13X.SetUsePednodeSeek(0 /* FALSE */);
            $.mafia_13X.SetObjRunToCoord(888.8883, -409.8141);
            $.mafia_13_kill_player_flag = 2;
          }
        }
        if ($.mafia_13_kill_player_flag == 2) {
          if ($.mafia_13X.LocateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, 0)) {
            $.mafia_13X.SetObjRunToCoord(880.9434, -409.0293);
            $.mafia_13_kill_player_flag = 3;
          }
        }
        if ($.mafia_13_kill_player_flag == 3) {
          if ($.mafia_13X.LocateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, 0)) {
            $.mafia_13X.SetObjRunToCoord(880.9827, -406.0733);
            $.mafia_13_kill_player_flag = 4;
          }
        }
        if ($.mafia_13_kill_player_flag == 4) {
          if ($.mafia_13X.LocateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, 0)) {
            $.mafia_13X.SetObjRunToCoord(892.1010, -406.2053);
            $.mafia_13_kill_player_flag = 5;
          }
        }
        if ($.mafia_13_kill_player_flag == 5) {
          if ($.mafia_13X.LocateOnFoot2D(892.1010, -406.2053, 1.0, 1.0, 0)) {
            $.mafia_13X.SetObjRunToCoord(892.2498, -421.2303);
            $.mafia_13_kill_player_flag = 6;
          }
        }
        if ($.mafia_13_kill_player_flag == 6) {
          if ($.mafia_13X.LocateOnFoot2D(892.2498, -421.2303, 1.0, 1.0, 0)) {
            if ($.player.IsInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, 0)) {
              $.mafia_13X.SetObjRunToCoord(893.2559, -425.0609);
            }
            else {
              $.mafia_13X.SetObjRunToCoord(892.1462, -429.0872);
            }
            $.mafia_13_kill_player_flag = 7;
          }
        }
        if ($.mafia_13_kill_player_flag == 7) {
          if ($.player.IsInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, 0)) {
            $.mafia_13X.SetObjRunToCoord(893.2559, -425.0609);
            if ($.mafia_13X.LocateStoppedOnFoot2D(893.2559, -425.0609, 1.0, 1.0, 0)) {
              $.mafia_13X.SetUsePednodeSeek(1 /* TRUE */);
              $.mafia_13X.SetStayInSamePlace(1 /* TRUE */);
              $.mafia_13X.SetObjKillPlayerOnFoot($.player);
              $.mafia_13_kill_player_flag = 8;
            }
          }
          else {
            $.mafia_13X.SetObjRunToCoord(892.1462, -429.0872);
            if ($.mafia_13X.LocateStoppedOnFoot2D(892.1462, -429.0872, 1.0, 1.0, 0)) {
              $.mafia_13X.SetUsePednodeSeek(1 /* TRUE */);
              $.mafia_13X.SetStayInSamePlace(1 /* TRUE */);
              $.mafia_13X.SetObjKillPlayerOnFoot($.player);
              $.mafia_13_kill_player_flag = 8;
            }
          }
        }
      }
    }
    if (!($.mafia_12_flag == 4)) {
      if (!($.mafia_12_flag == 0)) {
        if ($.player.IsInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, 0)) {
          if ($.mafia_12_flag > 1 && $.mafia_12_kill_player_flag == 0) {
            $.mafia_12X.SetUsePednodeSeek(1 /* TRUE */);
            $.mafia_12X.SetObjRunToCoord(886.0037, -414.0266);
            $.mafia_12_kill_player_flag = 1;
          }
          if ($.mafia_12_kill_player_flag == 1) {
            if ($.mafia_12X.LocateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, 0)) {
              $.mafia_12X.SetUsePednodeSeek(0 /* FALSE */);
              $.mafia_12X.SetObjRunToCoord(888.8883, -409.8141);
              $.mafia_12_kill_player_flag = 2;
            }
          }
          if ($.mafia_12_kill_player_flag == 2) {
            if ($.mafia_12X.LocateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, 0)) {
              $.mafia_12X.SetObjRunToCoord(880.9434, -409.0293);
              $.mafia_12_kill_player_flag = 3;
            }
          }
          if ($.mafia_12_kill_player_flag == 3) {
            if ($.mafia_12X.LocateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, 0)) {
              $.mafia_12X.SetObjRunToCoord(880.9827, -406.0733);
              $.mafia_12_kill_player_flag = 4;
            }
          }
          if ($.mafia_12_kill_player_flag == 4) {
            if ($.mafia_12X.LocateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, 0)) {
              $.mafia_12X.SetObjRunToCoord(892.1010, -406.2053);
              $.mafia_12_kill_player_flag = 5;
            }
          }
          if ($.mafia_12_kill_player_flag == 5) {
            if ($.mafia_12X.LocateOnFoot2D(892.1010, -406.2053, 1.0, 1.0, 0)) {
              $.mafia_12X.SetObjRunToCoord(899.3036, -408.1849);
              $.mafia_12X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
              $.mafia_12_kill_player_flag = 6;
            }
          }
          if ($.mafia_12_kill_player_flag == 6) {
            if ($.mafia_12X.LocateStoppedOnFoot2D(899.3036, -408.1849, 1.0, 1.0, 0)) {
              $.mafia_12X.SetUsePednodeSeek(1 /* TRUE */);
              $.mafia_12X.SetStayInSamePlace(1 /* TRUE */);
              $.mafia_12X.SetObjKillPlayerOnFoot($.player);
              $.mafia_12_kill_player_flag = 7;
            }
          }
        }
        else {
          if ($.mafia_12_flag > 1 && $.mafia_12_kill_player_flag == 0) {
            $.mafia_12X.SetUsePednodeSeek(1 /* TRUE */);
            $.mafia_12X.SetObjRunToCoord(882.7668, -414.3651);
            $.mafia_12_kill_player_flag = 1;
          }
          if ($.mafia_12_kill_player_flag == 1) {
            if ($.mafia_12X.LocateStoppedOnFoot2D(882.7668, -414.3651, 1.0, 1.0, 0)) {
              $.mafia_12X.SetUsePednodeSeek(1 /* TRUE */);
              $.mafia_12X.SetStayInSamePlace(1 /* TRUE */);
              $.mafia_12X.SetObjKillPlayerOnFoot($.player);
              $.mafia_12_kill_player_flag = 7;
            }
          }
        }
      }
    }
    if (!($.mafia_11_flag == 4)) {
      if (!($.mafia_11_flag == 0)) {
        if ($.mafia_11_flag > 1 && $.mafia_11_kill_player_flag == 0) {
          $.mafia_11X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_11X.SetObjRunToCoord(886.0037, -414.0266);
          $.mafia_11_kill_player_flag = 1;
        }
        if ($.mafia_11_kill_player_flag == 1) {
          if ($.mafia_11X.LocateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, 0)) {
            $.mafia_11X.SetUsePednodeSeek(0 /* FALSE */);
            $.mafia_11X.SetObjRunToCoord(888.8883, -409.8141);
            $.mafia_11_kill_player_flag = 2;
          }
        }
        if ($.mafia_11_kill_player_flag == 2) {
          if ($.mafia_11X.LocateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, 0)) {
            $.mafia_11X.SetObjRunToCoord(880.9434, -409.0293);
            $.mafia_11_kill_player_flag = 3;
          }
        }
        if ($.mafia_11_kill_player_flag == 3) {
          if ($.mafia_11X.LocateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, 0)) {
            $.mafia_11X.SetObjRunToCoord(880.9827, -406.0733);
            $.mafia_11_kill_player_flag = 4;
          }
        }
        if ($.mafia_11_kill_player_flag == 4) {
          if ($.mafia_11X.LocateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, 0)) {
            $.mafia_11X.SetObjRunToCoord(892.1010, -406.2053);
            $.mafia_11_kill_player_flag = 5;
          }
        }
        if ($.mafia_11_kill_player_flag == 5) {
          if ($.mafia_11X.LocateOnFoot2D(892.1010, -406.2053, 1.0, 1.0, 0)) {
            $.mafia_11X.SetObjRunToCoord(892.2498, -421.2303);
            $.mafia_11X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
            $.mafia_11_kill_player_flag = 6;
          }
        }
        if ($.mafia_11_kill_player_flag == 6) {
          if ($.mafia_11X.LocateStoppedOnFoot2D(892.2498, -421.2303, 1.0, 1.0, 0)) {
            $.mafia_11X.SetUsePednodeSeek(1 /* TRUE */);
            $.mafia_11X.SetStayInSamePlace(1 /* TRUE */);
            $.mafia_11X.SetObjKillPlayerOnFoot($.player);
            $.mafia_11_kill_player_flag = 7;
          }
        }
      }
    }
    if (!($.mafia_10_flag == 4)) {
      if (!($.mafia_10_flag == 0)) {
        if ($.mafia_10_flag > 1 && $.mafia_10_kill_player_flag == 0) {
          $.mafia_10X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_10X.SetObjRunToCoord(886.0037, -414.0266);
          $.mafia_10_kill_player_flag = 1;
        }
        if ($.mafia_10_kill_player_flag == 1) {
          if ($.mafia_10X.LocateOnFoot2D(886.0037, -414.0266, 1.0, 1.0, 0)) {
            $.mafia_10X.SetUsePednodeSeek(0 /* FALSE */);
            $.mafia_10X.SetObjRunToCoord(888.8883, -409.8141);
            $.mafia_10_kill_player_flag = 2;
          }
        }
        if ($.mafia_10_kill_player_flag == 2) {
          if ($.mafia_10X.LocateOnFoot2D(888.8883, -409.8141, 1.0, 1.0, 0)) {
            $.mafia_10X.SetObjRunToCoord(880.9434, -409.0293);
            $.mafia_10_kill_player_flag = 3;
          }
        }
        if ($.mafia_10_kill_player_flag == 3) {
          if ($.mafia_10X.LocateOnFoot2D(880.9434, -409.0293, 1.0, 1.0, 0)) {
            $.mafia_10X.SetObjRunToCoord(880.9827, -406.0733);
            $.mafia_10_kill_player_flag = 4;
          }
        }
        if ($.mafia_10_kill_player_flag == 4) {
          if ($.mafia_10X.LocateOnFoot2D(880.9827, -406.0733, 1.0, 1.0, 0)) {
            $.mafia_10X.SetObjRunToCoord(892.1010, -406.2053);
            $.mafia_10X.GiveWeapon(3 /* WEAPONTYPE_UZI */, 9999);
            $.mafia_10_kill_player_flag = 5;
          }
        }
        if ($.mafia_10_kill_player_flag == 5) {
          if ($.mafia_10X.LocateStoppedOnFoot2D(892.1010, -406.2053, 1.0, 1.0, 0)) {
            $.mafia_10X.SetUsePednodeSeek(1 /* TRUE */);
            $.mafia_10X.SetStayInSamePlace(1 /* TRUE */);
            $.mafia_10X.SetObjKillPlayerOnFoot($.player);
            $.mafia_10_kill_player_flag = 6;
          }
        }
      }
    }
    if (!($.mafia_9_flag == 4)) {
      if (!($.mafia_9_flag == 0)) {
        if ($.mafia_9_flag > 1 && $.mafia_9_kill_player_flag == 0) {
          $.mafia_9X.SetStayInSamePlace(1 /* TRUE */);
          $.mafia_9X.SetObjKillPlayerOnFoot($.player);
          $.mafia_9_kill_player_flag = 1;
        }
      }
    }
    if (!($.mafia_8_flag == 4)) {
      if (!($.mafia_8_flag == 0)) {
        if ($.mafia_8_flag > 1 && $.mafia_8_kill_player_flag == 0) {
          $.mafia_8X.SetStayInSamePlace(1 /* TRUE */);
          $.mafia_8X.SetObjKillPlayerOnFoot($.player);
          $.mafia_8_kill_player_flag = 1;
        }
      }
    }
    if ($.frankie_exists_flag == 0) {
      if ($.timerb_reset_flag_a1 == 0) {
        TIMERB = 0;
        $.timerb_reset_flag_a1 = 1;
      }
      if ($.timerb_reset_flag_a1 == 1) {
        if (TIMERB > 30000) {
          if ($.time_left_a1 < 1) {
            $.frankie_exists_flag = 2;
          }
        }
      }
    }
    if ($.mafia_10_kill_player_flag == 6 || $.mafia_10_flag == 4) {
      if ($.mafia_11_kill_player_flag == 7 || $.mafia_11_flag == 4) {
        if ($.mafia_12_kill_player_flag == 7 || $.mafia_12_flag == 4) {
          if ($.mafia_13_kill_player_flag == 8 || $.mafia_13_flag == 4) {
            if ($.time_left_a1 < 1) {
              if ($.frankie_exists_flag == 0) {
                $.frankie_exists_flag = 2;
              }
            }
          }
        }
      }
    }
    return;
  }
  else {
    if (!($.mafia_8_flag == 4)) {
      if (!($.mafia_8_flag == 0)) {
        if ($.mafia_8_kill_player_flag == 1) {
          $.mafia_8X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_8X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_8_kill_player_flag = 0;
        }
      }
    }
    if (!($.mafia_9_flag == 4)) {
      if (!($.mafia_9_flag == 0)) {
        if ($.mafia_9_kill_player_flag == 1) {
          $.mafia_9X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_9X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_9_kill_player_flag = 0;
        }
      }
    }
    if (!($.mafia_10_flag == 4)) {
      if (!($.mafia_10_flag == 0)) {
        if ($.mafia_10_kill_player_flag == 6) {
          $.mafia_10X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_10X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_10_kill_player_flag = 0;
        }
      }
    }
    if (!($.mafia_11_flag == 4)) {
      if (!($.mafia_11_flag == 0)) {
        if ($.mafia_11_kill_player_flag == 7) {
          $.mafia_11X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_11X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_11_kill_player_flag = 0;
        }
      }
    }
    if (!($.mafia_12_flag == 4)) {
      if (!($.mafia_12_flag == 0)) {
        if ($.mafia_12_kill_player_flag == 7) {
          $.mafia_12X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_12X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_12_kill_player_flag = 0;
        }
      }
    }
    if (!($.mafia_13_flag == 4)) {
      if (!($.mafia_13_flag == 0)) {
        if ($.mafia_13_kill_player_flag == 8) {
          $.mafia_13X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_13X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_13_kill_player_flag = 0;
        }
      }
    }
  }
  if ($.player.IsInArea2D(920.0792, -408.8181, 931.3213, -398.101, 0)) {
    if (!($.mafia_5_kill_player_flag == -100)) {
      if (!(Char.IsDead($.mafia_5X))) {
        if ($.mafia_5_kill_player_flag == 0) {
          $.mafia_5X.SetObjRunToCoord(919.2639, -397.0023);
          $.mafia_5_kill_player_flag = 1;
        }
      }
      else {
        $.mafia_5_kill_player_flag = -100;
      }
      if ($.mafia_5_kill_player_flag == 1) {
        if ($.mafia_5X.LocateOnFoot2D(919.2639, -397.0023, 1.0, 1.0, 0)) {
          $.mafia_5X.SetObjRunToCoord(958.4280, -397.0979);
          $.mafia_5_kill_player_flag = 2;
        }
      }
      if ($.mafia_5_kill_player_flag == 2) {
        if ($.mafia_5X.LocateOnFoot2D(958.4280, -397.0979, 1.0, 1.0, 0)) {
          $.mafia_5X.SetUsePednodeSeek(0 /* FALSE */);
          $.mafia_5X.SetObjRunToCoord(958.0251, -416.7367);
          $.mafia_5_kill_player_flag = 3;
        }
      }
      if ($.mafia_5_kill_player_flag == 3) {
        if ($.mafia_5X.LocateOnFoot2D(958.0251, -416.7367, 1.0, 1.0, 0)) {
          $.mafia_5X.SetObjRunToCoord(949.0732, -416.6061);
          $.mafia_5_kill_player_flag = 4;
        }
      }
      if ($.mafia_5_kill_player_flag == 4) {
        if ($.mafia_5X.LocateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, 0)) {
          $.mafia_5X.SetObjRunToCoord(948.9913, -407.5764);
          $.mafia_5_kill_player_flag = 5;
        }
      }
      if ($.mafia_5_kill_player_flag == 5) {
        if ($.mafia_5X.LocateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, 0)) {
          $.mafia_5X.SetObjRunToCoord(929.8204, -404.7728);
          $.mafia_5_kill_player_flag = 6;
        }
      }
      if ($.mafia_5_kill_player_flag == 6) {
        if ($.mafia_5X.LocateOnFoot2D(929.8204, -404.7728, 1.0, 1.0, 0)) {
          $.mafia_5X.SetStayInSamePlace(1 /* TRUE */);
          $.mafia_5X.SetObjKillPlayerOnFoot($.player);
          $.mafia_5X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_5_kill_player_flag = 7;
        }
      }
    }
    if (!($.mafia_7_kill_player_flag == -100)) {
      if (!(Char.IsDead($.mafia_7X))) {
        if ($.mafia_7_kill_player_flag == 0) {
          $.mafia_7X.SetObjRunToCoord(919.2639, -397.0023);
          $.mafia_7_kill_player_flag = 1;
        }
      }
      else {
        $.mafia_7_kill_player_flag = -100;
      }
      if ($.mafia_7_kill_player_flag == 1) {
        if ($.mafia_7X.LocateOnFoot2D(919.2639, -397.0023, 1.0, 1.0, 0)) {
          $.mafia_7X.SetObjRunToCoord(958.4280, -397.0979);
          $.mafia_7_kill_player_flag = 2;
        }
      }
      if ($.mafia_7_kill_player_flag == 2) {
        if ($.mafia_7X.LocateOnFoot2D(958.4280, -397.0979, 1.0, 1.0, 0)) {
          $.mafia_7X.SetUsePednodeSeek(0 /* FALSE */);
          $.mafia_7X.SetObjRunToCoord(958.0251, -416.7367);
          $.mafia_7_kill_player_flag = 3;
        }
      }
      if ($.mafia_7_kill_player_flag == 3) {
        if ($.mafia_7X.LocateOnFoot2D(958.0251, -416.7367, 1.0, 1.0, 0)) {
          $.mafia_7X.SetObjRunToCoord(949.0732, -416.6061);
          $.mafia_7_kill_player_flag = 4;
        }
      }
      if ($.mafia_7_kill_player_flag == 4) {
        if ($.mafia_7X.LocateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, 0)) {
          $.mafia_7X.SetObjRunToCoord(948.9913, -407.5764);
          $.mafia_7_kill_player_flag = 5;
        }
      }
      if ($.mafia_7_kill_player_flag == 5) {
        if ($.mafia_7X.LocateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, 0)) {
          $.mafia_7X.SetObjRunToCoord(930.0654, -407.9679);
          $.mafia_7_kill_player_flag = 6;
        }
      }
      if ($.mafia_7_kill_player_flag == 6) {
        if ($.mafia_7X.LocateOnFoot2D(930.0654, -407.9679, 1.0, 1.0, 0)) {
          $.mafia_7X.SetStayInSamePlace(1 /* TRUE */);
          $.mafia_7X.SetObjKillPlayerOnFoot($.player);
          $.mafia_7X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_7_kill_player_flag = 7;
        }
      }
    }
    if ($.mafia_15_kill_player_flag == 0) {
      if (!(Camera.IsPointOnScreen(949.0732, -416.6061, 19.5, 2.0))) {
        $.mafia_15X = Char.Create(7 /* PEDTYPE_GANG_MAFIA */, ped`GANG_MAFIA_B`, 958.0251, -416.7367, 14.2);
        $.mafia_15X.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
        $.mafia_15X.GiveWeapon(4 /* WEAPONTYPE_SHOTGUN */, 999);
        $.mafia_15X.SetUsePednodeSeek(0 /* FALSE */);
        $.mafia_15X.SetObjGotoCoordOnFoot(949.0732, -416.6061);
        $.mafia_15_kill_player_flag = 1;
      }
    }
    if (!($.mafia_15_kill_player_flag == -100)) {
      if ($.mafia_15_kill_player_flag > 0) {
        if (Char.IsDead($.mafia_15X)) {
          $.mafia_15_kill_player_flag = -100;
        }
      }
      if ($.mafia_15_kill_player_flag == 1) {
        if ($.mafia_15X.LocateOnFoot2D(949.0732, -416.6061, 1.0, 1.0, 0)) {
          $.mafia_15X.SetObjRunToCoord(948.9913, -407.5764);
          $.mafia_15_kill_player_flag = 2;
        }
      }
      if ($.mafia_15_kill_player_flag == 2) {
        if ($.mafia_15X.LocateOnFoot2D(948.9913, -407.5764, 1.0, 1.0, 0)) {
          $.mafia_15X.SetObjRunToCoord(929.5118, -406.6480);
          $.mafia_15_kill_player_flag = 3;
        }
      }
      if ($.mafia_15_kill_player_flag == 3) {
        if ($.mafia_15X.LocateOnFoot2D(929.5118, -406.6480, 1.0, 1.0, 0)) {
          $.mafia_15X.SetStayInSamePlace(1 /* TRUE */);
          $.mafia_15X.SetObjKillPlayerOnFoot($.player);
          $.mafia_15X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_15_kill_player_flag = 4;
        }
      }
    }
    if ($.mafia_15_kill_player_flag == 4) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.mafia_5_kill_player_flag == 7) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.mafia_7_kill_player_flag == 7) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.mafia_5_kill_player_flag == -100) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.mafia_7_kill_player_flag == -100) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.mafia_15_kill_player_flag == -100) {
      if (!($.frankie_exists_flag == 0)) {
        $.frankie_exists_flag = 3;
      }
    }
    if ($.frankie_exists_flag == 0) {
      if ($.timerb_reset_flag_a1 == 0) {
        TIMERB = 0;
        $.timerb_reset_flag_a1 = 1;
      }
      if ($.timerb_reset_flag_a1 == 1) {
        if (TIMERB > 15000) {
          if ($.time_left_a1 < 1) {
            $.frankie_exists_flag = 3;
          }
        }
      }
    }
    return;
  }
  else {
    if (!($.mafia_5_kill_player_flag == -100)) {
      if (!($.mafia_5_kill_player_flag == 0)) {
        if (!(Char.IsDead($.mafia_5X))) {
          $.mafia_5X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_5X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_5_kill_player_flag = 0;
        }
        else {
          $.mafia_5_kill_player_flag = -100;
        }
      }
    }
    if (!($.mafia_7_kill_player_flag == -100)) {
      if (!($.mafia_7_kill_player_flag == 0)) {
        if (!(Char.IsDead($.mafia_7X))) {
          $.mafia_7X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_7X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_7_kill_player_flag = 0;
        }
        else {
          $.mafia_7_kill_player_flag = -100;
        }
      }
    }
    if (!($.mafia_15_kill_player_flag == -100)) {
      if (!($.mafia_15_kill_player_flag == 0)) {
        if (!(Char.IsDead($.mafia_15X))) {
          $.mafia_15X.SetUsePednodeSeek(1 /* TRUE */);
          $.mafia_15X.SetStayInSamePlace(0 /* FALSE */);
          $.mafia_15_kill_player_flag = -100;
        }
        else {
          $.mafia_15_kill_player_flag = -100;
        }
      }
    }
  }
  if ($.player.IsInArea2D(878.79, -427.4, 890.77, -403.89, 0) || $.player.IsInArea3D(890.77, -427.4, 13.0, 900.0, -423.82, 18.9, 0) || $.player.IsInArea2D(900.0, -443.0, 927.0, -378.0, 0)) {
    if (!($.mafia_8_flag == 4)) {
      if (!($.mafia_8_flag == 0)) {
        $.mafia_8X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!($.mafia_9_flag == 4)) {
      if (!($.mafia_9_flag == 0)) {
        $.mafia_9X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!($.mafia_10_flag == 4)) {
      if (!($.mafia_10_flag == 0)) {
        $.mafia_10X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!($.mafia_11_flag == 4)) {
      if (!($.mafia_11_flag == 0)) {
        $.mafia_11X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!($.mafia_12_flag == 4)) {
      if (!($.mafia_12_flag == 0)) {
        $.mafia_12X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if (!($.mafia_13_flag == 4)) {
      if (!($.mafia_13_flag == 0)) {
        $.mafia_13X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if ($.player.IsInArea2D(900.0, -443.0, 927.0, -378.0, 0)) {
      if (!(Char.IsDead($.mafia_5X))) {
        $.mafia_5X.SetObjKillPlayerOnFoot($.player);
      }
      if (!(Char.IsDead($.mafia_7X))) {
        $.mafia_7X.SetObjKillPlayerOnFoot($.player);
      }
    }
    if ($.frankie_exists_flag == 0) {
      if ($.timerb_reset_flag_a1 == 0) {
        TIMERB = 0;
        $.timerb_reset_flag_a1 = 1;
      }
      if ($.timerb_reset_flag_a1 == 1) {
        if (TIMERB > 25000) {
          if ($.time_left_a1 < 1) {
            $.frankie_exists_flag = 2;
          }
        }
      }
    }
    return;
  }
  $.kill_player_now_flag = 0;
  return;
}

async function move_fuckers_car() {
  $.fuckers_car.SetDrivingStyle(2);
  $.fuckers_car.SetCruiseSpeed(20.0);
  if ($.player.IsInArea2D(878.79, -427.4, 890.77, -403.89, 0) || $.player.IsInArea3D(890.77, -427.4, 13.0, 900.0, -423.82, 18.9, 0) || $.player.IsInArea2D(845.75, -443.85, 890.77, -433.86, 0) || $.player.IsInArea2D(878.79, -433.86, 890.77, -427.4, 0) || $.player.IsInArea3D(890.77, -433.71, 23.05, 900.78, -403.76, 46.0, 0)) {
    $.fuckers_car.WanderRandomly();
    $.fuckers_car.SetAvoidLevelTransitions(1 /* TRUE */);
  }
  else {
    $.fuckers_car.SetMission(2 /* MISSION_RAMPLAYER_FARAWAY */);
  }
  return;
  }
}

export async function asuka1() {
  // MissionBoundary
  // SCM GOSUB mission_start_asuka1
  await mission_start_asuka1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_asuka1_failed
    await mission_asuka1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_asuka1
  await mission_cleanup_asuka1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT hours_a1 mins_a1 time_left_a1 beamer1_a1 beamer2_a1 beamer3_a1 mission_blip_am1
  // VAR_INT mafia_1X mafia_2X mafia_3X mafia_4X mafia_5X mafia_6X mafia_7X mafia_8X mafia_9X mafia_10X mafia_11X mafia_12X mafia_13X mafia_14X mafia_15X
  // VAR_INT mafia_8_flag mafia_9_flag mafia_10_flag mafia_11_flag mafia_12_flag mafia_13_flag frankie_flag
  // VAR_INT set_beamer_1_kill_player set_beamer_2_kill_player set_beamer_3_kill_player
  // VAR_INT beamer1_health beamer2_health beamer3_health garage_door_close timera_reset_flag_a1 timerb_reset_flag_a1 timerc_reset_flag_a1
  // VAR_INT timerc_started_a1 timerc_current_a1 timerc_a1 frankies_ride fuckers_car beamer_1_dead_flag beamer_2_dead_flag beamer_3_dead_flag
  // VAR_INT players_car_a1 kill_player_now_flag spotted_print enter_car_flag frankie_exists_flag
  // VAR_INT mafia_8_kill_player_flag mafia_9_kill_player_flag mafia_10_kill_player_flag mafia_11_kill_player_flag mafia_12_kill_player_flag mafia_13_kill_player_flag
  // VAR_INT mafia_5_kill_player_flag mafia_7_kill_player_flag mafia_15_kill_player_flag
  // VAR_INT timerx timerx_started timerx_current timerx_reset_flag
  // VAR_INT timery timery_started timery_current timery_reset_flag
  // VAR_INT timerz timerz_started timerz_current timerz_reset_flag
  // VAR_FLOAT players_car_a1_speed beamer1_a1_speed beamer2_a1_speed beamer3_a1_speed
  // VAR_FLOAT create_char_in_club_x create_char_in_club_y create_char_in_club_z bottom_of_steps_x bottom_of_steps_y mafia_10_x mafia_10_y
  // VAR_FLOAT mafia_11_x mafia_11_y mafia_12_x mafia_12_y mafia_13_x mafia_13_y working_x_a1 working_y_a1 working_z_a1 beamer_heading
  // VAR_FLOAT street_x street_y back_of_alley_x back_of_alley_y a1_x a1_y a1_z diff_heading_door
  // VAR_FLOAT beamer1_stuck_x beamer1_stuck_y beamer1_stuck_z beamer2_stuck_x beamer2_stuck_y beamer2_stuck_z beamer3_stuck_x beamer3_stuck_y beamer3_stuck_z
}
