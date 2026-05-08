// Generated from Main/Suburban/love5.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love5() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  $.car1_attacking_flag = 0;
  $.car2_attacking_flag = 0;
  $.car3_attacking_flag = 0;
  $.car4_attacking_flag = 0;
  $.escort_truck_flag = 0;
  $.colombian_1_flag = 0;
  $.colombian_2_flag = 0;
  $.colombian_3_flag = 0;
  $.colombian_4_flag = 0;
  $.dummy_health = 2000;
  Streaming.LoadSpecialCharacter(1, $.love);
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadSpecialModel(hier`cutobj01`, LOVEH);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(tshrorckgrdn)) || !(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(hier`cutobj01`))) {
    await asyncWait(0);
  }
  Cutscene.Load(D5_ES);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_love = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_love.SetAnim($.love);
  $.cs_lovehead = CutsceneHead.Create($.cs_love, hier`cutobj01`);
  $.cs_lovehead.SetAnim($.love);
  World.ClearArea(82.44, -1548.49, 28.0, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(82.44, -1548.49, 28.0);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 1324) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(LOVE5_A, 5000, 1);
  while ($.cs_time < 6061) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.Print(LOVE5_B, 5000, 1);
  while ($.cs_time < 10660) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.Print(LOVE5_C, 5000, 1);
  while ($.cs_time < 17500) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Camera.DoFade(1500, 0 /* FADE_OUT */);
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
  }
  World.SwitchRubbish(1 /* ON */);
  Text.ClearPrints();
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  Cutscene.Clear();
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.RequestModel(car`SECURICAR`);
  Streaming.RequestModel(car`COLUMB`);
  Streaming.RequestModel(ped`GANG_COLOMBIAN_A`);
  Streaming.LoadSpecialCharacter(2, $.ojg);
  Streaming.LoadSpecialCharacter(3, S_GUARD);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(ped`GANG_COLOMBIAN_A`)) || !(Streaming.HasModelLoaded(car`COLUMB`)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasModelLoaded(car`SECURICAR`))) {
    await asyncWait(0);
  }
  Streaming.Switch(1 /* ON */);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  $.escort_truck = Car.Create(111 /* CAR_SECURICAR */, 83.6, -1592.3, 25.1);
  $.escort_truck.ChangeColor(0, 0);
  if (Car.IsDead($.escort_truck)) {
    Text.PrintNow(LOVE5_5, 5000, 1);
    // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_love5_failed"); // fallback: would break linear control flow
  }
  $.truck_driver = Char.CreateInsideCar($.escort_truck, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL3`);
  $.ojg = Char.CreateAsPassenger($.escort_truck, 21 /* PEDTYPE_SPECIAL */, ped`SPECIAL2`, 0);
  $.truck_driver.SetCantBeDraggedOut(1 /* TRUE */);
  $.escort_truck.LockDoors(2 /* CARLOCK_LOCKED */);
  $.escort_truck.SetHeading(180.0);
  $.escort_truck.SetDrivingStyle(2);
  $.escort_truck.SetCruiseSpeed(18.0);
  $.escort_truck.SetIdle();
  $.escort_truck.SetStrong(1 /* TRUE */);
  $.escort_truck.SetProofs(0 /* FALSE */, 0 /* FALSE */, 1 /* TRUE */, 0 /* FALSE */, 0 /* FALSE */);
  $.escort_truck_blip = Blip.AddForCar($.escort_truck);
  $.tank_weapon = Pickup.CreateWithAmmo(161 /* WEAPON_M16 */, 3 /* PICKUP_ONCE */, 600, 77.6708, -1589.0255, 27.5);
  while (!($.player.LocateInCarCar2D($.escort_truck, 15.0, 15.0, 0)) || !(Camera.IsPointOnScreen(83.6, -1592.3, 25.1, 4.0))) {
    await asyncWait(0);
    if (Car.IsDead($.escort_truck)) {
      Text.PrintNow(LOVE5_5, 5000, 1);
      // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love5_failed"); // fallback: would break linear control flow
    }
    if ($.player.LocateOnFootCar2D($.escort_truck, 15.0, 15.0, 0)) {
      Text.PrintNow(LOVE5_2, 5000, 1);
    }
    if ($.player.LocateOnFootCar2D($.escort_truck, 1.0, 1.0, 0) && $.player.IsStopped()) {
      // SCM GOTO → car_goto_bit (not lowered; manual jump required)
      throw new Error("unresolved GOTO car_goto_bit"); // fallback: would break linear control flow
    }
  }
}

async function car_goto_bit() {
  $.escort_truck.GotoCoordinates(173.4898, 76.3099, 14.9781);
  Text.PrintNow(LOVE5_1, 5000, 1);
  $.escort_truck_health = $.escort_truck.GetHealth();
  if ($.dummy_health > 499) {
    if ($.escort_truck_health < 500) {
      $.escort_truck_health += 500;
      $.escort_truck.SetHealth($.escort_truck_health);
      $.dummy_health -= 500;
    }
  }
  $.escort_truck_health = $.escort_truck.GetHealth();
  $.escort_truck_health += $.dummy_health;
  $.escort_truck_health = $.escort_truck_health / 3;
  $.escort_truck_health = $.escort_truck_health - 250;
  $.escort_truck_health = $.escort_truck_health * 100;
  $.escort_truck_health = $.escort_truck_health / 750;
  $.escort_truck_health2 = $.escort_truck_health;
  $.escort_truck_health = 100 - $.escort_truck_health2;
  Hud.DisplayCounterWithString($.escort_truck_health, 1 /* COUNTER_DISPLAY_BAR */, DAM);
  while (!($.escort_truck_flag == 11)) {
    await asyncWait(0);
    if (Car.IsDead($.escort_truck)) {
      Text.PrintNow(LOVE5_5, 5000, 1);
      // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_love5_failed"); // fallback: would break linear control flow
    }
    else {
      if ($.escort_truck.IsUpsidedown() && $.escort_truck.IsStopped()) {
        // SCM GOTO → mission_love5_failed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love5_failed"); // fallback: would break linear control flow
      }
    }
    $.escort_truck_health = $.escort_truck.GetHealth();
    if ($.dummy_health > 499) {
      if ($.escort_truck_health < 500) {
        $.escort_truck_health += 500;
        $.escort_truck.SetHealth($.escort_truck_health);
        $.dummy_health -= 500;
      }
    }
    $.escort_truck_health = $.escort_truck.GetHealth();
    $.escort_truck_health += $.dummy_health;
    $.escort_truck_health = $.escort_truck_health / 3;
    $.escort_truck_health = $.escort_truck_health - 250;
    $.escort_truck_health = $.escort_truck_health * 100;
    $.escort_truck_health = $.escort_truck_health / 750;
    $.escort_truck_health2 = $.escort_truck_health;
    $.escort_truck_health = 100 - $.escort_truck_health2;
    if ($.escort_truck_health > 100) {
      $.escort_truck_health = 100;
    }
    if ($.escort_truck_flag == 0) {
      if ($.escort_truck.Locate2D(173.4898, 76.3099, 10.0, 10.0, 0)) {
        $.escort_truck.GotoCoordinates(559.5281, 88.7876, -21.0725);
        $.escort_truck_flag = 1;
      }
    }
    if ($.escort_truck_flag == 1) {
      if ($.escort_truck.Locate2D(302.0435, -12.4083, 10.0, 10.0, 0)) {
        $.escort_truck.SetIgnoreLevelTransitions(1 /* TRUE */);
        if (!(Char.IsDead($.ojg))) {
          $.ojg.SetStaysInCurrentLevel(0 /* FALSE */);
        }
        if (!(Char.IsDead($.truck_driver))) {
          $.truck_driver.SetStaysInCurrentLevel(0 /* FALSE */);
        }
        $.escort_truck.SetDrivingStyle(1);
        World.SetCarDensityMultiplier(0.5);
      }
    }
    if ($.escort_truck_flag == 1) {
      if ($.escort_truck.Locate2D(559.5281, 88.7876, 10.0, 10.0, 0)) {
        $.escort_truck.GotoCoordinates(-320.4337, 87.1647, -21.0725);
        $.escort_truck_flag = 2;
      }
    }
    if ($.escort_truck_flag == 2) {
      if ($.escort_truck.Locate2D(-320.4337, 87.1647, 10.0, 10.0, 0)) {
        $.escort_truck.GotoCoordinates(-573.8346, -426.376, -5.76);
        $.escort_truck_flag = 3;
      }
    }
    if ($.escort_truck_flag == 3) {
      if ($.escort_truck.Locate2D(-573.8346, -426.376, 10.0, 10.0, 0)) {
        if (!(Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */))) {
          Text.PrintNow(LOVE5_3, 200, 1);
        }
        else {
          $.escort_truck_flag = 4;
        }
      }
    }
    if ($.escort_truck_flag == 4) {
      if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
        $.escort_truck.GotoCoordinates(-634.9936, -491.1914, 16.1379);
        $.escort_truck_flag = 5;
      }
    }
    if ($.escort_truck_flag == 5) {
      if ($.escort_truck.Locate2D(-634.9936, -491.1914, 10.0, 10.0, 0)) {
        $.escort_truck.GotoCoordinates(-864.45, -282.45, 32.5);
        $.escort_truck.SetIgnoreLevelTransitions(0 /* FALSE */);
        $.escort_truck.SetStaysInCurrentLevel(1 /* TRUE */);
        if (!(Char.IsDead($.ojg))) {
          $.ojg.SetStaysInCurrentLevel(1 /* TRUE */);
        }
        if (!(Char.IsDead($.truck_driver))) {
          $.truck_driver.SetStaysInCurrentLevel(1 /* TRUE */);
        }
        $.escort_truck.SetDrivingStyle(2);
        World.SetCarDensityMultiplier(1.0);
        $.escort_truck_flag = 6;
      }
    }
    if ($.escort_truck_flag == 6) {
      if ($.escort_truck.Locate2D(-864.45, -282.45, 10.0, 10.0, 0)) {
        $.escort_truck.GotoCoordinates(-975.1670, -74.5367, 36.9677);
        $.escort_truck_flag = 7;
      }
    }
    if ($.escort_truck_flag == 7) {
      if ($.escort_truck.Locate2D(-975.1670, -74.5367, 10.0, 10.0, 0)) {
        // SCM GOSUB call_off_the_attackers
        await call_off_the_attackers();
        // fallback if label was not emitted as async function: no-op continues linearly
        $.escort_truck.GotoCoordinatesAccurate(-1044.0, -73.4361, 37.8615);
        $.escort_truck.SetCruiseSpeed(12.0);
        $.escort_truck_flag = 8;
      }
    }
    if ($.escort_truck_flag == 8) {
      if ($.escort_truck.IsInArea2D(-1022.11, -78.28, -1037.21, -69.17, 0)) {
        $.escort_garage.Open();
        $.escort_truck.SetCruiseSpeed(5.0);
        $.escort_truck_flag = 9;
      }
    }
    if ($.escort_truck_flag == 9) {
      if ($.escort_truck.IsStoppedInArea2D(-1049.17, -77.47, -1037.21, -69.17, 0)) {
        if (!($.player.IsInArea2D(-1049.17, -77.47, -1037.21, -69.17, 0))) {
          $.escort_garage.Close();
          $.escort_truck_flag = 10;
        }
      }
    }
    if ($.escort_truck_flag == 10) {
      if ($.player.IsInArea2D(-1049.17, -77.47, -1037.21, -69.17, 0)) {
        $.escort_garage.Open();
        $.escort_truck_flag = 9;
      }
      if ($.escort_garage.IsClosed()) {
        $.escort_truck.Delete();
        // SCM GOTO → mission_love5_passed (not lowered; manual jump required)
        throw new Error("unresolved GOTO mission_love5_passed"); // fallback: would break linear control flow
        $.escort_truck_flag = 11;
      }
    }
    if ($.escort_truck_flag < 9) {
      if ($.colombian_1_flag == 0) {
        if ($.player.LocateAnyMeans2D(-13.0, -464.0, 220.0, 220.0, 0) || $.escort_truck.Locate2D(-13.0, -464.0, 220.0, 220.0, 0)) {
          $.colombian_1 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -13.0, -464.0, 17.0);
          $.colombian_1.SetHeading(270.0);
          $.colombian_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_1.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_1.SetIdle();
          $.colombian_1.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_1.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_1.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_1_flag = 1;
        }
      }
      if ($.colombian_1_flag == 1) {
        if (!($.player.LocateAnyMeans2D(-13.0, -464.0, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(-13.0, -464.0, 220.0, 220.0, 0))) {
          $.colombian_1.Delete();
          $.colombian_1_flag = 0;
        }
      }
      if ($.colombian_1_flag == 1) {
        if (Char.IsDead($.colombian_1)) {
          $.colombian_1_flag = 2;
        }
        else {
          if ($.colombian_1.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_1.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_2_flag == 0) {
        if ($.player.LocateAnyMeans2D(3.7, -467.7, 220.0, 220.0, 0) || $.escort_truck.Locate2D(3.7, -467.7, 220.0, 220.0, 0)) {
          $.colombian_2 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 3.7, -467.7, 17.0);
          $.colombian_2.SetHeading(85.0);
          $.colombian_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_2.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_2.SetIdle();
          $.colombian_2.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_2.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_2.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_2_flag = 1;
        }
      }
      if ($.colombian_2_flag == 1) {
        if (!($.player.LocateAnyMeans2D(3.7, -467.7, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(3.7, -467.7, 220.0, 220.0, 0))) {
          $.colombian_2.Delete();
          $.colombian_2_flag = 0;
        }
      }
      if ($.colombian_2_flag == 1) {
        if (Char.IsDead($.colombian_2)) {
          $.colombian_2_flag = 2;
        }
        else {
          if ($.colombian_2.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_2.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_3_flag == 0) {
        if ($.player.LocateAnyMeans2D(124.4, -111.2, 220.0, 220.0, 0) || $.escort_truck.Locate2D(124.4, -111.2, 220.0, 220.0, 0)) {
          $.colombian_3 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 124.4, -111.2, 16.0);
          $.colombian_3.SetHeading(85.0);
          $.colombian_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_3.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_3.SetIdle();
          $.colombian_3.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_3.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_3.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_3_flag = 1;
        }
      }
      if ($.colombian_3_flag == 1) {
        if (!($.player.LocateAnyMeans2D(124.4, -111.2, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(124.4, -111.2, 220.0, 220.0, 0))) {
          $.colombian_3.Delete();
          $.colombian_3_flag = 0;
        }
      }
      if ($.colombian_3_flag == 1) {
        if (Char.IsDead($.colombian_3)) {
          $.colombian_3_flag = 2;
        }
        else {
          if ($.colombian_3.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_3.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_4_flag == 0) {
        if ($.player.LocateAnyMeans2D(8.65, -262.74, 220.0, 220.0, 0) || $.escort_truck.Locate2D(8.65, -262.74, 220.0, 220.0, 0)) {
          $.colombian_4 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 8.65, -262.74, 16.0);
          $.colombian_4.SetHeading(163.0);
          $.colombian_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_4.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_4.SetIdle();
          $.colombian_4.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_4.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_4.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_4_flag = 1;
        }
      }
      if ($.colombian_4_flag == 1) {
        if (!($.player.LocateAnyMeans2D(8.65, -262.74, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(8.65, -262.74, 220.0, 220.0, 0))) {
          $.colombian_4.Delete();
          $.colombian_4_flag = 0;
        }
      }
      if ($.colombian_4_flag == 1) {
        if (Char.IsDead($.colombian_4)) {
          $.colombian_4_flag = 2;
        }
        else {
          if ($.colombian_4.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_4.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_5_flag == 0) {
        if ($.player.LocateAnyMeans2D(287.5946, 17.6184, 220.0, 220.0, 0) || $.escort_truck.Locate2D(287.5946, 17.6184, 220.0, 220.0, 0)) {
          $.colombian_5 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 287.5946, 17.6184, 19.0714);
          $.colombian_5.SetHeading(0.0);
          $.colombian_5.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_5.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_5.SetIdle();
          $.colombian_5.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_5.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_5.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_5_flag = 1;
        }
      }
      if ($.colombian_5_flag == 1) {
        if (!($.player.LocateAnyMeans2D(287.5946, 17.6184, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(287.5946, 17.6184, 220.0, 220.0, 0))) {
          $.colombian_5.Delete();
          $.colombian_5_flag = 0;
        }
      }
      if ($.colombian_5_flag == 1) {
        if (Char.IsDead($.colombian_5)) {
          $.colombian_5_flag = 2;
        }
        else {
          if ($.colombian_5.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_5.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_6_flag == 0) {
        if ($.player.LocateAnyMeans2D(537.7727, 119.5505, 220.0, 220.0, 0) || $.escort_truck.Locate2D(537.7727, 119.5505, 220.0, 220.0, 0)) {
          $.colombian_6 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 537.7727, 119.5505, -20.3699);
          $.colombian_6.SetHeading(238.1071);
          $.colombian_6.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_6.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_6.SetIdle();
          $.colombian_6.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_6.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_6.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_6_flag = 1;
        }
      }
      if ($.colombian_6_flag == 1) {
        if (!($.player.LocateAnyMeans2D(537.7727, 119.5505, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(537.7727, 119.5505, 220.0, 220.0, 0))) {
          $.colombian_6.Delete();
          $.colombian_6_flag = 0;
        }
      }
      if ($.colombian_6_flag == 1) {
        if (Char.IsDead($.colombian_6)) {
          $.colombian_6_flag = 2;
        }
        else {
          if ($.colombian_6.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_6.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.escort_truck_flag > 4) {
        if ($.colombian_7_flag == 0) {
          if ($.player.LocateAnyMeans2D(-632.9545, -499.5869, 220.0, 220.0, 0) || $.escort_truck.Locate2D(-632.9545, -499.5869, 220.0, 220.0, 0)) {
            $.colombian_7 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -632.9545, -499.5869, 22.3742);
            $.colombian_7.SetHeading(15.2319);
            $.colombian_7.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
            $.colombian_7.SetOnlyDamagedByPlayer(1 /* TRUE */);
            $.colombian_7.SetIdle();
            $.colombian_7.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.colombian_7.SetThreatSearch(0 /* THREAT_PLAYER1 */);
            $.colombian_7.SetStayInSamePlace(1 /* TRUE */);
            $.colombian_7_flag = 1;
          }
        }
      }
      if ($.colombian_7_flag == 1) {
        if (!($.player.LocateAnyMeans2D(-632.9545, -499.5869, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(-632.9545, -499.5869, 220.0, 220.0, 0))) {
          $.colombian_7.Delete();
          $.colombian_7_flag = 0;
        }
      }
      if ($.colombian_7_flag == 1) {
        if (Char.IsDead($.colombian_7)) {
          $.colombian_7_flag = 2;
        }
        else {
          if ($.colombian_7.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_7.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_8_flag == 0) {
        if ($.player.LocateAnyMeans2D(-982.5755, -115.7109, 220.0, 220.0, 0) || $.escort_truck.Locate2D(-982.5755, -115.7109, 220.0, 220.0, 0)) {
          $.colombian_8 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -982.5755, -115.7109, 33.0045);
          $.colombian_8.SetHeading(234.9669);
          $.colombian_8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_8.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_8.SetIdle();
          $.colombian_8.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_8.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_8.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_8_flag = 1;
        }
      }
      if ($.colombian_8_flag == 1) {
        if (!($.player.LocateAnyMeans2D(-982.5755, -115.7109, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(-982.5755, -115.7109, 220.0, 220.0, 0))) {
          $.colombian_8.Delete();
          $.colombian_8_flag = 0;
        }
      }
      if ($.colombian_8_flag == 1) {
        if (Char.IsDead($.colombian_8)) {
          $.colombian_8_flag = 2;
        }
        else {
          if ($.colombian_8.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_8.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.colombian_9_flag == 0) {
        if ($.player.LocateAnyMeans2D(-967.8587, -103.2732, 220.0, 220.0, 0) || $.escort_truck.Locate2D(-967.8587, -103.2732, 220.0, 220.0, 0)) {
          $.colombian_9 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -967.8587, -103.2732, 34.2468);
          $.colombian_9.SetHeading(110.3819);
          $.colombian_9.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
          $.colombian_9.SetOnlyDamagedByPlayer(1 /* TRUE */);
          $.colombian_9.SetIdle();
          $.colombian_9.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
          $.colombian_9.SetThreatSearch(0 /* THREAT_PLAYER1 */);
          $.colombian_9.SetStayInSamePlace(1 /* TRUE */);
          $.colombian_9_flag = 1;
        }
      }
      if ($.colombian_9_flag == 1) {
        if (!($.player.LocateAnyMeans2D(-967.8587, -103.2732, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(-967.8587, -103.2732, 220.0, 220.0, 0))) {
          $.colombian_9.Delete();
          $.colombian_9_flag = 0;
        }
      }
      if ($.colombian_9_flag == 1) {
        if (Char.IsDead($.colombian_9)) {
          $.colombian_9_flag = 2;
        }
        else {
          if ($.colombian_9.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_9.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.escort_truck_flag > 4) {
        if ($.colombian_10_flag == 0) {
          if ($.player.LocateAnyMeans2D(-655.9044, -405.6324, 220.0, 220.0, 0) || $.escort_truck.Locate2D(-655.9044, -405.6324, 220.0, 220.0, 0)) {
            $.colombian_10 = Char.Create(12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, -655.9044, -405.6324, 17.8121);
            $.colombian_10.SetHeading(234.7831);
            $.colombian_10.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 9999);
            $.colombian_10.SetOnlyDamagedByPlayer(1 /* TRUE */);
            $.colombian_10.SetIdle();
            $.colombian_10.SetPersonality(16 /* PEDSTAT_TOUGH_GUY */);
            $.colombian_10.SetThreatSearch(0 /* THREAT_PLAYER1 */);
            $.colombian_10.SetStayInSamePlace(1 /* TRUE */);
            $.colombian_10_flag = 1;
          }
        }
      }
      if ($.colombian_10_flag == 1) {
        if (!($.player.LocateAnyMeans2D(-655.9044, -405.6324, 220.0, 220.0, 0)) || !($.escort_truck.Locate2D(-655.9044, -405.6324, 220.0, 220.0, 0))) {
          $.colombian_10.Delete();
          $.colombian_10_flag = 0;
        }
      }
      if ($.colombian_10_flag == 1) {
        if (Char.IsDead($.colombian_10)) {
          $.colombian_10_flag = 2;
        }
        else {
          if ($.colombian_10.LocateAnyMeansCar2D($.escort_truck, 40.0, 40.0, 0)) {
            $.colombian_10.SetObjDestroyCar($.escort_truck);
          }
        }
      }
      if ($.car1_attacking_flag == 0) {
        if ($.escort_truck.Locate2D(41.0, -1070.0, 40.0, 40.0, 0)) {
          if (!(Camera.IsPointOnScreen(122.0, -1099.0, 26.0, 4.0))) {
            $.columbian_humvee1 = Car.Create(131 /* CAR_COLUMB */, 122.0, -1099.0, 26.0);
            $.columbian_humvee1.SetHeading(65.0);
          }
          else {
            $.columbian_humvee1 = Car.Create(131 /* CAR_COLUMB */, -50.0, -1021.0, 26.0);
            $.columbian_humvee1.SetHeading(240.0);
          }
          $.columbian_humvee1.SetStaysInCurrentLevel(0 /* FALSE */);
          $.columbian_driver_1 = Char.CreateInsideCar($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
          $.columbian_hitman_1 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
          $.columbian_hitman_3 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
          $.columbian_hitman_5 = Char.CreateAsPassenger($.columbian_humvee1, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
          $.columbian_humvee1.SetCruiseSpeed(40.0);
          $.columbian_humvee1.SetHealth(650);
          $.columbian_humvee1.SetDrivingStyle(2);
          $.escort_truck.SetDrivingStyle(2);
          $.escort_truck.SetCruiseSpeed(25.0);
          $.columbian_humvee1.SetIdle();
          $.columbian_humvee1.SetBlockCar($.escort_truck);
          $.car1_attacking_flag = 1;
        }
      }
      if ($.car1_attacking_flag > 0) {
        if (Car.IsDead($.columbian_humvee1)) {
          $.car1_attacking_flag = -100;
        }
        else {
          if (!(Char.IsDead($.columbian_driver_1))) {
            if (!($.columbian_driver_1.IsInCar($.columbian_humvee1))) {
              $.columbian_driver_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_1.SetObjDestroyCar($.escort_truck);
            }
          }
          if ($.player.IsInCar($.columbian_humvee1)) {
            if (!(Char.IsDead($.columbian_hitman_1))) {
              $.columbian_hitman_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_1.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_3))) {
              $.columbian_hitman_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_3.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_5))) {
              $.columbian_hitman_5.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_5.SetObjKillPlayerOnFoot($.player);
            }
          }
          if ($.columbian_humvee1.IsUpsidedown() && $.columbian_humvee1.IsStopped()) {
            if (!(Char.IsDead($.columbian_driver_1))) {
              $.columbian_driver_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_1.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_1))) {
              $.columbian_hitman_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_1.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_3))) {
              $.columbian_hitman_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_3.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_5))) {
              $.columbian_hitman_5.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_5.SetObjDestroyCar($.escort_truck);
            }
          }
        }
      }
      if ($.car1_attacking_flag == 1) {
        if (!(Char.IsDead($.columbian_hitman_1))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee1_speed = $.columbian_humvee1.GetSpeed();
          if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_1.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_1.SetObjLeaveCar($.columbian_humvee1);
              $.columbian_hitman_1.SetRunning(1 /* TRUE */);
              $.car1_attacking_flag = 2;
            }
          }
        }
        else {
          $.car1_attacking_flag = 2;
        }
      }
      if ($.car1_attacking_flag == 2) {
        if (!(Char.IsDead($.columbian_hitman_1))) {
          if (!($.columbian_hitman_1.IsInAnyCar())) {
            $.columbian_hitman_1.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_1.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee1.SetCruiseSpeed(40.0);
            $.columbian_humvee1.SetBlockCar($.escort_truck);
            $.car1_attacking_flag = 3;
          }
        }
        else {
          $.car1_attacking_flag = 3;
        }
      }
      if ($.car1_attacking_flag == 3) {
        if (!(Char.IsDead($.columbian_hitman_3))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee1_speed = $.columbian_humvee1.GetSpeed();
          if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_3.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_3.SetObjLeaveCar($.columbian_humvee1);
              $.columbian_hitman_3.SetRunning(1 /* TRUE */);
              $.car1_attacking_flag = 4;
            }
          }
        }
        else {
          $.car1_attacking_flag = 4;
        }
      }
      if ($.car1_attacking_flag == 4) {
        if (!(Char.IsDead($.columbian_hitman_3))) {
          if (!($.columbian_hitman_3.IsInAnyCar())) {
            $.columbian_hitman_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_3.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee1.SetCruiseSpeed(40.0);
            $.columbian_humvee1.SetBlockCar($.escort_truck);
            $.car1_attacking_flag = 5;
          }
        }
        else {
          $.car1_attacking_flag = 5;
        }
      }
      if ($.car1_attacking_flag == 5) {
        if (!(Char.IsDead($.columbian_hitman_5))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee1_speed = $.columbian_humvee1.GetSpeed();
          if ($.columbian_humvee1_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_5.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_5.SetObjLeaveCar($.columbian_humvee1);
              $.columbian_hitman_5.SetRunning(1 /* TRUE */);
              $.car1_attacking_flag = 6;
            }
          }
        }
        else {
          $.car1_attacking_flag = 6;
        }
      }
      if ($.car1_attacking_flag == 6) {
        if (!(Char.IsDead($.columbian_hitman_5))) {
          if (!($.columbian_hitman_5.IsInAnyCar())) {
            $.columbian_hitman_5.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_5.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee1.SetCruiseSpeed(40.0);
            $.columbian_humvee1.SetBlockCar($.escort_truck);
            $.car1_attacking_flag = 7;
          }
        }
        else {
          $.car1_attacking_flag = 7;
        }
      }
      if ($.car1_attacking_flag == 7) {
        $.columbian_humvee1.SetCruiseSpeed(40.0);
        $.columbian_humvee1.SetRamCar($.escort_truck);
        $.car1_attacking_flag = 8;
      }
      if ($.car2_attacking_flag == 0) {
        if ($.escort_truck.Locate2D(2.0, -405.0, 40.0, 40.0, 0)) {
          if (!(Camera.IsPointOnScreen(-86.0, -409.0, 16.0, 4.0))) {
            $.columbian_humvee2 = Car.Create(131 /* CAR_COLUMB */, -86.0, -409.0, 16.0);
            $.columbian_humvee2.SetHeading(270.0);
          }
          else {
            $.columbian_humvee2 = Car.Create(131 /* CAR_COLUMB */, -100.0, -409.0, 16.0);
            $.columbian_humvee2.SetHeading(90.0);
          }
          $.columbian_humvee2.SetStaysInCurrentLevel(0 /* FALSE */);
          $.columbian_driver_2 = Char.CreateInsideCar($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
          $.columbian_hitman_2 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
          $.columbian_hitman_4 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
          $.columbian_hitman_6 = Char.CreateAsPassenger($.columbian_humvee2, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
          $.columbian_humvee2.SetCruiseSpeed(40.0);
          $.columbian_humvee2.SetDrivingStyle(2);
          $.columbian_humvee2.SetHealth(650);
          $.columbian_humvee2.SetIdle();
          $.columbian_humvee2.SetBlockCar($.escort_truck);
          $.car2_attacking_flag = 1;
        }
      }
      if ($.car2_attacking_flag > 0) {
        if (Car.IsDead($.columbian_humvee2)) {
          $.car2_attacking_flag = -100;
        }
        else {
          if (!(Char.IsDead($.columbian_driver_2))) {
            if (!($.columbian_driver_2.IsInCar($.columbian_humvee2))) {
              $.columbian_driver_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_2.SetObjDestroyCar($.escort_truck);
            }
          }
          if ($.player.IsInCar($.columbian_humvee2)) {
            if (!(Char.IsDead($.columbian_hitman_2))) {
              $.columbian_hitman_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_2.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_4))) {
              $.columbian_hitman_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_4.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_6))) {
              $.columbian_hitman_6.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_6.SetObjKillPlayerOnFoot($.player);
            }
          }
          if ($.columbian_humvee2.IsUpsidedown() && $.columbian_humvee2.IsStopped()) {
            if (!(Char.IsDead($.columbian_driver_2))) {
              $.columbian_driver_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_2.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_2))) {
              $.columbian_hitman_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_2.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_4))) {
              $.columbian_hitman_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_4.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_6))) {
              $.columbian_hitman_6.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_6.SetObjDestroyCar($.escort_truck);
            }
          }
        }
      }
      if ($.car2_attacking_flag == 1) {
        if (!(Char.IsDead($.columbian_hitman_2))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee2_speed = $.columbian_humvee2.GetSpeed();
          if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_2.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_2.SetObjLeaveCar($.columbian_humvee2);
              $.columbian_hitman_2.SetRunning(1 /* TRUE */);
              $.car2_attacking_flag = 2;
            }
          }
        }
        else {
          $.car2_attacking_flag = 2;
        }
      }
      if ($.car2_attacking_flag == 2) {
        if (!(Char.IsDead($.columbian_hitman_2))) {
          if (!($.columbian_hitman_2.IsInAnyCar())) {
            $.columbian_hitman_2.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_2.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee2.SetCruiseSpeed(40.0);
            $.columbian_humvee2.SetBlockCar($.escort_truck);
            $.car2_attacking_flag = 3;
          }
        }
        else {
          $.car2_attacking_flag = 3;
        }
      }
      if ($.car2_attacking_flag == 3) {
        if (!(Char.IsDead($.columbian_hitman_4))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee2_speed = $.columbian_humvee2.GetSpeed();
          if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_4.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_4.SetObjLeaveCar($.columbian_humvee2);
              $.columbian_hitman_4.SetRunning(1 /* TRUE */);
              $.car2_attacking_flag = 4;
            }
          }
        }
        else {
          $.car2_attacking_flag = 4;
        }
      }
      if ($.car2_attacking_flag == 4) {
        if (!(Char.IsDead($.columbian_hitman_4))) {
          if (!($.columbian_hitman_4.IsInAnyCar())) {
            $.columbian_hitman_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_4.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee2.SetCruiseSpeed(40.0);
            $.columbian_humvee2.SetBlockCar($.escort_truck);
            $.car2_attacking_flag = 5;
          }
        }
        else {
          $.car2_attacking_flag = 5;
        }
      }
      if ($.car2_attacking_flag == 5) {
        if (!(Char.IsDead($.columbian_hitman_6))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee2_speed = $.columbian_humvee2.GetSpeed();
          if ($.columbian_humvee2_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_6.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_6.SetObjLeaveCar($.columbian_humvee2);
              $.columbian_hitman_6.SetRunning(1 /* TRUE */);
              $.car2_attacking_flag = 6;
            }
          }
        }
        else {
          $.car2_attacking_flag = 6;
        }
      }
      if ($.car2_attacking_flag == 6) {
        if (!(Char.IsDead($.columbian_hitman_6))) {
          if (!($.columbian_hitman_6.IsInAnyCar())) {
            $.columbian_hitman_6.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_6.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee2.SetCruiseSpeed(40.0);
            $.columbian_humvee2.SetBlockCar($.escort_truck);
            $.car2_attacking_flag = 7;
          }
        }
        else {
          $.car2_attacking_flag = 7;
        }
      }
      if ($.car2_attacking_flag == 7) {
        $.columbian_humvee2.SetCruiseSpeed(40.0);
        $.columbian_humvee2.SetRamCar($.escort_truck);
        $.car2_attacking_flag = 8;
      }
      if ($.escort_truck_flag > 4) {
        if ($.car3_attacking_flag == 0) {
          if ($.escort_truck.Locate2D(-645.8259, -435.9940, 40.0, 40.0, 0)) {
            if (!(Camera.IsPointOnScreen(-823.6705, -435.0647, 10.0779, 4.0))) {
              $.columbian_humvee3 = Car.Create(131 /* CAR_COLUMB */, -823.6705, -435.0647, 10.0779);
              $.columbian_humvee3.SetHeading(272.1213);
            }
            else {
              $.columbian_humvee3 = Car.Create(131 /* CAR_COLUMB */, -735.5045, -577.3362, 7.6714);
              $.columbian_humvee3.SetHeading(7.8079);
            }
            $.columbian_humvee3.SetStaysInCurrentLevel(0 /* FALSE */);
            $.columbian_driver_3 = Char.CreateInsideCar($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
            $.columbian_hitman_7 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
            $.columbian_hitman_8 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
            $.columbian_hitman_9 = Char.CreateAsPassenger($.columbian_humvee3, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
            $.columbian_humvee3.SetCruiseSpeed(40.0);
            $.columbian_humvee3.SetHealth(650);
            $.columbian_humvee3.SetDrivingStyle(2);
            $.columbian_humvee3.SetIdle();
            $.columbian_humvee3.SetBlockCar($.escort_truck);
            $.car3_attacking_flag = 1;
          }
        }
      }
      if ($.car3_attacking_flag > 0) {
        if (Car.IsDead($.columbian_humvee3)) {
          $.car3_attacking_flag = -100;
        }
        else {
          if (!(Char.IsDead($.columbian_driver_3))) {
            if (!($.columbian_driver_3.IsInCar($.columbian_humvee3))) {
              $.columbian_driver_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_3.SetObjDestroyCar($.escort_truck);
            }
          }
          if ($.player.IsInCar($.columbian_humvee3)) {
            if (!(Char.IsDead($.columbian_hitman_7))) {
              $.columbian_hitman_7.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_7.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_8))) {
              $.columbian_hitman_8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_8.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_9))) {
              $.columbian_hitman_9.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_9.SetObjKillPlayerOnFoot($.player);
            }
          }
          if ($.columbian_humvee3.IsUpsidedown() && $.columbian_humvee3.IsStopped()) {
            if (!(Char.IsDead($.columbian_driver_3))) {
              $.columbian_driver_3.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_3.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_7))) {
              $.columbian_hitman_7.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_7.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_8))) {
              $.columbian_hitman_8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_8.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_9))) {
              $.columbian_hitman_9.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_9.SetObjDestroyCar($.escort_truck);
            }
          }
        }
      }
      if ($.car3_attacking_flag == 1) {
        if (!(Char.IsDead($.columbian_hitman_7))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee3_speed = $.columbian_humvee3.GetSpeed();
          if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_7.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_7.SetObjLeaveCar($.columbian_humvee3);
              $.columbian_hitman_7.SetRunning(1 /* TRUE */);
              $.car3_attacking_flag = 2;
            }
          }
        }
        else {
          $.car3_attacking_flag = 2;
        }
      }
      if ($.car3_attacking_flag == 2) {
        if (!(Char.IsDead($.columbian_hitman_7))) {
          if (!($.columbian_hitman_7.IsInAnyCar())) {
            $.columbian_hitman_7.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_7.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee3.SetCruiseSpeed(40.0);
            $.columbian_humvee3.SetBlockCar($.escort_truck);
            $.car3_attacking_flag = 3;
          }
        }
        else {
          $.car3_attacking_flag = 3;
        }
      }
      if ($.car3_attacking_flag == 3) {
        if (!(Char.IsDead($.columbian_hitman_8))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee3_speed = $.columbian_humvee3.GetSpeed();
          if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_8.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_8.SetObjLeaveCar($.columbian_humvee3);
              $.columbian_hitman_8.SetRunning(1 /* TRUE */);
              $.car3_attacking_flag = 4;
            }
          }
        }
        else {
          $.car3_attacking_flag = 4;
        }
      }
      if ($.car3_attacking_flag == 4) {
        if (!(Char.IsDead($.columbian_hitman_8))) {
          if (!($.columbian_hitman_8.IsInAnyCar())) {
            $.columbian_hitman_8.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_8.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee3.SetCruiseSpeed(40.0);
            $.columbian_humvee3.SetBlockCar($.escort_truck);
            $.car3_attacking_flag = 5;
          }
        }
        else {
          $.car3_attacking_flag = 5;
        }
      }
      if ($.car3_attacking_flag == 5) {
        if (!(Char.IsDead($.columbian_hitman_9))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee3_speed = $.columbian_humvee3.GetSpeed();
          if ($.columbian_humvee3_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_9.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_9.SetObjLeaveCar($.columbian_humvee3);
              $.columbian_hitman_9.SetRunning(1 /* TRUE */);
              $.car3_attacking_flag = 6;
            }
          }
        }
        else {
          $.car3_attacking_flag = 6;
        }
      }
      if ($.car3_attacking_flag == 6) {
        if (!(Char.IsDead($.columbian_hitman_9))) {
          if (!($.columbian_hitman_9.IsInAnyCar())) {
            $.columbian_hitman_9.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_9.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee3.SetCruiseSpeed(40.0);
            $.columbian_humvee3.SetBlockCar($.escort_truck);
            $.car3_attacking_flag = 7;
          }
        }
        else {
          $.car3_attacking_flag = 7;
        }
      }
      if ($.car3_attacking_flag == 7) {
        $.columbian_humvee3.SetCruiseSpeed(40.0);
        $.columbian_humvee3.SetRamCar($.escort_truck);
        $.car3_attacking_flag = 8;
      }
      if ($.car4_attacking_flag == 0) {
        if ($.escort_truck.Locate2D(-645.8259, -435.9940, 40.0, 40.0, 0)) {
          if (!(Camera.IsPointOnScreen(-1017.6605, -226.1589, 37.9967, 4.0))) {
            $.columbian_humvee4 = Car.Create(131 /* CAR_COLUMB */, -1017.6605, -226.1589, 37.9967);
            $.columbian_humvee4.SetHeading(284.9633);
          }
          else {
            $.columbian_humvee4 = Car.Create(131 /* CAR_COLUMB */, -878.8591, -229.1282, 28.1703);
            $.columbian_humvee4.SetHeading(84.5748);
          }
          $.columbian_humvee4.SetStaysInCurrentLevel(0 /* FALSE */);
          $.columbian_driver_4 = Char.CreateInsideCar($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`);
          $.columbian_hitman_10 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 0);
          $.columbian_hitman_11 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 1);
          $.columbian_hitman_12 = Char.CreateAsPassenger($.columbian_humvee4, 12 /* PEDTYPE_GANG_COLOMBIAN */, ped`GANG_COLOMBIAN_A`, 2);
          $.columbian_humvee4.SetCruiseSpeed(40.0);
          $.columbian_humvee4.SetHealth(650);
          $.columbian_humvee4.SetDrivingStyle(2);
          $.columbian_humvee4.SetIdle();
          $.columbian_humvee4.SetBlockCar($.escort_truck);
          $.car4_attacking_flag = 1;
        }
      }
      if ($.car4_attacking_flag > 0) {
        if (Car.IsDead($.columbian_humvee4)) {
          $.car4_attacking_flag = -100;
        }
        else {
          if (!(Char.IsDead($.columbian_driver_4))) {
            if (!($.columbian_driver_4.IsInCar($.columbian_humvee4))) {
              $.columbian_driver_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_4.SetObjDestroyCar($.escort_truck);
            }
          }
          if ($.player.IsInCar($.columbian_humvee4)) {
            if (!(Char.IsDead($.columbian_hitman_10))) {
              $.columbian_hitman_10.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_10.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_11))) {
              $.columbian_hitman_11.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_11.SetObjKillPlayerOnFoot($.player);
            }
            if (!(Char.IsDead($.columbian_hitman_12))) {
              $.columbian_hitman_12.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_12.SetObjKillPlayerOnFoot($.player);
            }
          }
          if ($.columbian_humvee4.IsUpsidedown() && $.columbian_humvee4.IsStopped()) {
            if (!(Char.IsDead($.columbian_driver_4))) {
              $.columbian_driver_4.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_driver_4.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_10))) {
              $.columbian_hitman_10.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_10.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_11))) {
              $.columbian_hitman_11.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_11.SetObjDestroyCar($.escort_truck);
            }
            if (!(Char.IsDead($.columbian_hitman_12))) {
              $.columbian_hitman_12.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
              $.columbian_hitman_12.SetObjDestroyCar($.escort_truck);
            }
          }
        }
      }
      if ($.car4_attacking_flag == 1) {
        if (!(Char.IsDead($.columbian_hitman_10))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee4_speed = $.columbian_humvee4.GetSpeed();
          if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_10.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_10.SetObjLeaveCar($.columbian_humvee4);
              $.columbian_hitman_10.SetRunning(1 /* TRUE */);
              $.car4_attacking_flag = 2;
            }
          }
        }
        else {
          $.car4_attacking_flag = 2;
        }
      }
      if ($.car4_attacking_flag == 2) {
        if (!(Char.IsDead($.columbian_hitman_10))) {
          if (!($.columbian_hitman_10.IsInAnyCar())) {
            $.columbian_hitman_10.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_10.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee4.SetCruiseSpeed(40.0);
            $.columbian_humvee4.SetBlockCar($.escort_truck);
            $.car4_attacking_flag = 3;
          }
        }
        else {
          $.car4_attacking_flag = 3;
        }
      }
      if ($.car4_attacking_flag == 3) {
        if (!(Char.IsDead($.columbian_hitman_11))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee4_speed = $.columbian_humvee4.GetSpeed();
          if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_11.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_11.SetObjLeaveCar($.columbian_humvee4);
              $.columbian_hitman_11.SetRunning(1 /* TRUE */);
              $.car4_attacking_flag = 4;
            }
          }
        }
        else {
          $.car4_attacking_flag = 4;
        }
      }
      if ($.car4_attacking_flag == 4) {
        if (!(Char.IsDead($.columbian_hitman_11))) {
          if (!($.columbian_hitman_11.IsInAnyCar())) {
            $.columbian_hitman_11.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_11.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee4.SetCruiseSpeed(40.0);
            $.columbian_humvee4.SetBlockCar($.escort_truck);
            $.car4_attacking_flag = 5;
          }
        }
        else {
          $.car4_attacking_flag = 5;
        }
      }
      if ($.car4_attacking_flag == 5) {
        if (!(Char.IsDead($.columbian_hitman_12))) {
          $.escort_truck_speed = $.escort_truck.GetSpeed();
          $.columbian_humvee4_speed = $.columbian_humvee4.GetSpeed();
          if ($.columbian_humvee4_speed < 10.0 && $.escort_truck_speed < 4.0) {
            if ($.columbian_hitman_12.LocateInCarCar2D($.escort_truck, 10.0, 10.0, 0)) {
              $.columbian_hitman_12.SetObjLeaveCar($.columbian_humvee4);
              $.columbian_hitman_12.SetRunning(1 /* TRUE */);
              $.car4_attacking_flag = 6;
            }
          }
        }
        else {
          $.car4_attacking_flag = 6;
        }
      }
      if ($.car4_attacking_flag == 6) {
        if (!(Char.IsDead($.columbian_hitman_12))) {
          if (!($.columbian_hitman_12.IsInAnyCar())) {
            $.columbian_hitman_12.GiveWeapon(5 /* WEAPONTYPE_CHAINGUN */, 999);
            $.columbian_hitman_12.SetObjDestroyCar($.escort_truck);
            $.columbian_humvee4.SetCruiseSpeed(40.0);
            $.columbian_humvee4.SetBlockCar($.escort_truck);
            $.car4_attacking_flag = 7;
          }
        }
        else {
          $.car4_attacking_flag = 7;
        }
      }
      if ($.car4_attacking_flag == 7) {
        $.columbian_humvee4.SetCruiseSpeed(40.0);
        $.columbian_humvee4.SetRamCar($.escort_truck);
        $.car4_attacking_flag = 8;
      }
    }
    else {
      $.columbian_humvee1.MarkAsNoLongerNeeded();
      $.columbian_humvee2.MarkAsNoLongerNeeded();
      $.columbian_humvee3.MarkAsNoLongerNeeded();
      $.columbian_driver_1.MarkAsNoLongerNeeded();
      $.columbian_driver_2.MarkAsNoLongerNeeded();
      $.columbian_driver_3.MarkAsNoLongerNeeded();
      $.columbian_hitman_1.MarkAsNoLongerNeeded();
      $.columbian_hitman_2.MarkAsNoLongerNeeded();
      $.columbian_hitman_3.MarkAsNoLongerNeeded();
      $.columbian_hitman_4.MarkAsNoLongerNeeded();
      $.columbian_hitman_5.MarkAsNoLongerNeeded();
      $.columbian_hitman_6.MarkAsNoLongerNeeded();
      $.columbian_hitman_7.MarkAsNoLongerNeeded();
      $.columbian_hitman_8.MarkAsNoLongerNeeded();
      $.columbian_hitman_9.MarkAsNoLongerNeeded();
      $.colombian_1.MarkAsNoLongerNeeded();
      $.colombian_2.MarkAsNoLongerNeeded();
      $.colombian_3.MarkAsNoLongerNeeded();
      $.colombian_4.MarkAsNoLongerNeeded();
      $.colombian_5.MarkAsNoLongerNeeded();
      $.colombian_6.MarkAsNoLongerNeeded();
      $.colombian_7.MarkAsNoLongerNeeded();
      $.colombian_8.MarkAsNoLongerNeeded();
      $.colombian_9.MarkAsNoLongerNeeded();
      $.colombian_10.MarkAsNoLongerNeeded();
    }
  }
  // SCM GOTO → mission_love5_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love5_passed"); // fallback: would break linear control flow
}

async function mission_love5_failed() {
  Text.PrintBig(M_FAIL, 2000, 1);
  return;
}

async function mission_love5_passed() {
  $.flag_love_mission5_passed = 1;
  Text.PrintWithNumberBig(M_PASS, 40000, 2000, 1);
  $.player.AddScore(40000);
  $.player.ClearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed(LOVE5);
  Stat.PlayerMadeProgress(1);
  // START_NEW_SCRIPT love_mission6_loop
  return;
}

async function mission_cleanup_love5() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  if (!($.tank_weapon.HasBeenCollected())) {
    $.tank_weapon.Remove();
  }
  Hud.ClearCounter($.escort_truck_health);
  Streaming.MarkModelAsNoLongerNeeded(car`SECURICAR`);
  Streaming.MarkModelAsNoLongerNeeded(car`COLUMB`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_COLOMBIAN_A`);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  World.SetCarDensityMultiplier(1.0);
  $.escort_truck_blip.Remove();
  Mission.Finish();
  return;
}

async function call_off_the_attackers() {
  if (!(Car.IsDead($.columbian_humvee1))) {
    $.columbian_humvee1.WanderRandomly();
  }
  if (!(Car.IsDead($.columbian_humvee2))) {
    $.columbian_humvee2.WanderRandomly();
  }
  if (!(Car.IsDead($.columbian_humvee3))) {
    $.columbian_humvee3.WanderRandomly();
  }
  if (!(Car.IsDead($.columbian_humvee4))) {
    $.columbian_humvee4.WanderRandomly();
  }
  if (!(Char.IsDead($.columbian_hitman_1))) {
    $.columbian_hitman_1.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_2))) {
    $.columbian_hitman_2.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_3))) {
    $.columbian_hitman_3.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_4))) {
    $.columbian_hitman_4.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_5))) {
    $.columbian_hitman_5.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_6))) {
    $.columbian_hitman_6.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_7))) {
    $.columbian_hitman_7.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_8))) {
    $.columbian_hitman_8.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_9))) {
    $.columbian_hitman_9.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_10))) {
    $.columbian_hitman_10.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_11))) {
    $.columbian_hitman_11.SetObjKillPlayerAnyMeans($.player);
  }
  if (!(Char.IsDead($.columbian_hitman_12))) {
    $.columbian_hitman_12.SetObjKillPlayerAnyMeans($.player);
  }
  $.columbian_humvee1.MarkAsNoLongerNeeded();
  $.columbian_humvee2.MarkAsNoLongerNeeded();
  $.columbian_humvee3.MarkAsNoLongerNeeded();
  $.columbian_humvee4.MarkAsNoLongerNeeded();
  $.columbian_hitman_1.MarkAsNoLongerNeeded();
  $.columbian_hitman_2.MarkAsNoLongerNeeded();
  $.columbian_hitman_3.MarkAsNoLongerNeeded();
  $.columbian_hitman_4.MarkAsNoLongerNeeded();
  $.columbian_hitman_5.MarkAsNoLongerNeeded();
  $.columbian_hitman_6.MarkAsNoLongerNeeded();
  $.columbian_hitman_7.MarkAsNoLongerNeeded();
  $.columbian_hitman_8.MarkAsNoLongerNeeded();
  $.columbian_hitman_9.MarkAsNoLongerNeeded();
  $.columbian_hitman_10.MarkAsNoLongerNeeded();
  $.columbian_hitman_11.MarkAsNoLongerNeeded();
  $.columbian_hitman_12.MarkAsNoLongerNeeded();
  $.car1_attacking_flag = -100;
  $.car2_attacking_flag = -100;
  $.car3_attacking_flag = -100;
  $.car4_attacking_flag = -100;
  return;
}

export async function love5() {
  // MissionBoundary
  // SCM GOSUB mission_start_love5
  await mission_start_love5();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_love5_failed
    await mission_love5_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_love5
  await mission_cleanup_love5();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT escort_truck truck_driver escort_truck_blip escort_truck_health escort_truck_flag ojg
  // VAR_INT columbian_humvee1 columbian_humvee2 columbian_humvee3 columbian_driver_1 columbian_driver_2 columbian_driver_3
  // VAR_INT car1_attacking_flag car2_attacking_flag car3_attacking_flag tank_weapon escort_truck_health2
  // VAR_INT colombian_1 colombian_2 colombian_3 colombian_4 colombian_5 colombian_6 colombian_7 colombian_8 colombian_9 colombian_10
  // VAR_INT colombian_1_flag colombian_2_flag colombian_3_flag colombian_4_flag colombian_5_flag colombian_6_flag colombian_7_flag colombian_8_flag colombian_9_flag colombian_10_flag
  // VAR_INT columbian_hitman_1 columbian_hitman_2 columbian_hitman_3 columbian_hitman_4 columbian_hitman_5
  // VAR_INT columbian_hitman_6 columbian_hitman_7 columbian_hitman_8 columbian_hitman_9 dummy_health
  // VAR_INT car4_attacking_flag columbian_driver_4 columbian_hitman_10 columbian_hitman_11 columbian_hitman_12 columbian_humvee4
  // VAR_FLOAT escort_truck_speed columbian_humvee1_speed columbian_humvee2_speed columbian_humvee3_speed columbian_humvee4_speed
}
