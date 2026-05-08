// Generated from main.sc
// Imports: vars (../vars.mts), ide (../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../vars.mts";
import { car, ped, hier } from "../ide.ts";


async function mission_start() {
  // SCM GOTO → mission_start lowered to endless loop
  while (true) {
    await asyncWait(1000);
    if ($.player.IsPlaying()) {
      if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
        if ($.flag_player_on_mission == 0 && $.heal_info_trip == 0 && $.flag_health_info == 0) {
          $.heal_info = Pickup.Create(info, 3 /* PICKUP_ONCE */, 1144.2, -596.9, 14.9);
          $.heal_info_trip = 1;
        }
        if ($.flag_player_on_mission == 1 && $.heal_info_trip == 1) {
          $.heal_info.Remove();
          $.heal_info_trip = 0;
        }
        if ($.flag_player_on_mission == 0 && $.wanted_info_trip == 0 && $.flag_wanted_info == 0) {
          $.wanted_info = Pickup.Create(info, 3 /* PICKUP_ONCE */, 1143.9, -675.2, 15.0);
          $.wanted_info_trip = 1;
        }
        if ($.flag_player_on_mission == 1 && $.wanted_info_trip == 1) {
          $.wanted_info.Remove();
          $.wanted_info_trip = 0;
        }
      }
    }
  }
}

async function hospital_info_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("S_VIEW") && $.flag_player_on_mission == 0 && $.heal_info_trip == 1) {
      if ($.heal_info.HasBeenCollected()) {
        $.player.SetControl(0 /* off */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        // LoadLaunchMission health.sc
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → hospital_info_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hospital_info_loop"); // fallback: would break linear control flow
  }
}

async function police_info_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("S_VIEW") && $.flag_player_on_mission == 0 && $.wanted_info_trip == 1) {
      if ($.wanted_info.HasBeenCollected()) {
        $.player.SetControl(0 /* off */);
        while (Camera.GetFadingStatus()) {
          await asyncWait(0);
        }
        // LoadLaunchMission wanted.sc
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → police_info_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO police_info_loop"); // fallback: would break linear control flow
  }
}

async function rc_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying() && $.flag_just_done_rc_mission == 0) {
    if ($.player.IsInModel(142 /* CAR_TOYZ */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.LocateAnyMeans3D(1014.0, -120.0, 5.0, 5.0, 5.0, 5.0, 0 /* false */)) {
          Text.PrintBig("RC1", 15000, 2);
          await asyncWait(0);
          // LoadLaunchMission rc1.sc
        }
        if ($.player.IsPlaying()) {
          if ($.player.LocateAnyMeans3D(1158.0, -309.0, 23.0, 5.0, 5.0, 5.0, 0 /* false */)) {
            Text.PrintBig("RC2", 15000, 2);
            await asyncWait(0);
            // LoadLaunchMission rc2.sc
          }
        }
        if ($.player.IsPlaying()) {
          if ($.player.LocateAnyMeans3D(-636.0, 65.0, 19.0, 5.0, 5.0, 5.0, 0 /* false */)) {
            Text.PrintBig("RC4", 15000, 2);
            await asyncWait(0);
            // LoadLaunchMission rc3.sc
          }
        }
        if ($.player.IsPlaying()) {
          if ($.player.LocateAnyMeans3D(366.0, -1312.0, 26.0, 5.0, 5.0, 5.0, 0 /* false */)) {
            Text.PrintBig("RC3", 15000, 2);
            await asyncWait(0);
            // LoadLaunchMission rc4.sc
          }
        }
      }
    }
  }
  if ($.player.IsPlaying()) {
    if (!($.player.IsInModel(142 /* CAR_TOYZ */))) {
      $.flag_just_done_rc_mission = 0;
    }
  }
  // SCM GOTO → rc_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO rc_loop"); // fallback: would break linear control flow
  }
}

async function t4x4_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_4x4_mission1_passed == 0) {
    $.record_4x4_one = 300;
  }
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0 && $.player.IsInZone("S_VIEW")) {
      if ($.player.IsInModel(89 /* CAR_PATRIOT */) && !($.player.IsInArea2D(1294.0, -656.0, 1316.0, -638.0, 0 /* false */))) {
        $.flag_4x4one_trigger = 1;
      }
      if ($.player.IsInModel(89 /* CAR_PATRIOT */) && $.flag_4x4one_trigger == 0) {
        Text.PrintBig("T4X4_1", 15000, 2);
        await asyncWait(0);
        // LoadLaunchMission 4x4_1.sc
      }
      if ($.player.IsPlaying()) {
        if (!($.player.IsInAnyCar())) {
          $.flag_4x4one_trigger = 0;
        }
      }
    }
  }
  // SCM GOTO → t4x4_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO t4x4_mission1_loop"); // fallback: would break linear control flow
  }
}

async function t4x4_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_4x4_mission2_passed == 0) {
    $.record_4x4_two = 120;
  }
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0 && $.player.IsInZone("PARK")) {
      if ($.player.IsInModel(83 /* CAR_LANDSTALKER */) && !($.player.IsInArea2D(58.0, -585.0, 68.0, -595.0, 0 /* false */))) {
        $.flag_4x4two_trigger = 1;
      }
      if ($.player.IsInModel(83 /* CAR_LANDSTALKER */) && $.flag_4x4two_trigger == 0) {
        Text.PrintBig("T4X4_2", 15000, 2);
        await asyncWait(0);
        // LoadLaunchMission 4x4_2.sc
      }
      if ($.player.IsPlaying()) {
        if (!($.player.IsInAnyCar())) {
          $.flag_4x4two_trigger = 0;
        }
      }
    }
  }
  // SCM GOTO → t4x4_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO t4x4_mission2_loop"); // fallback: would break linear control flow
  }
}

async function t4x4_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_4x4_mission3_passed == 0) {
    $.record_4x4_three = 300;
  }
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0 && $.player.IsInArea2D(-230.0, 255.0, -210.0, 275.0, 0 /* false */)) {
      if ($.player.IsInModel(89 /* CAR_PATRIOT */) && !($.player.IsInArea2D(-230.0, 255.0, -210.0, 275.0, 0 /* false */))) {
        $.flag_4x4three_trigger = 1;
      }
      if ($.player.IsInModel(89 /* CAR_PATRIOT */) && $.flag_4x4three_trigger == 0) {
        Text.PrintBig("T4X4_3", 15000, 2);
        await asyncWait(0);
        // LoadLaunchMission 4x4_3.sc
      }
      if ($.player.IsPlaying()) {
        if (!($.player.IsInAnyCar())) {
          $.flag_4x4three_trigger = 0;
        }
      }
    }
  }
  // SCM GOTO → t4x4_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO t4x4_mission3_loop"); // fallback: would break linear control flow
  }
}

async function multistorey_mission_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_mayhem_mission1_passed == 0) {
    $.record_mayhem = 120;
  }
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0 && $.player.IsInZone("COM_EAS")) {
      if ($.player.IsInModel(122 /* CAR_STALLION */) && !($.player.IsInArea2D(238.0, -612.0, 267.0, -469.0, 0 /* false */))) {
        $.flag_mayhem_trigger = 1;
      }
      if ($.player.IsInModel(122 /* CAR_STALLION */) && $.flag_mayhem_trigger == 0) {
        Text.PrintBig("MM_1", 15000, 2);
        await asyncWait(0);
        // LoadLaunchMission mayhem1.sc
      }
      if ($.player.IsPlaying()) {
        if (!($.player.IsInAnyCar())) {
          $.flag_mayhem_trigger = 0;
        }
      }
    }
  }
  // SCM GOTO → multistorey_mission_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO multistorey_mission_loop"); // fallback: would break linear control flow
  }
}

async function ambulance_mission_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInModel(99 /* CAR_AMBULANCE */)) {
      if ($.flag_player_on_mission == 0 && $.flag_player_on_ambulance_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.been_in_ambulance_before == 0) {
          if (!($.controlmode == 3)) {
            Text.PrintHelp("ATUTOR");
          }
          else {
            Text.PrintHelp("ATUTOR3");
          }
          $.been_in_ambulance_before = 1;
        }
        if (!($.controlmode == 3)) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("AMBUL_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission ambulance.sc
            $.been_in_ambulance_before = 1;
          }
        }
        else {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("AMBUL_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission ambulance.sc
            $.been_in_ambulance_before = 1;
          }
        }
      }
    }
    else {
      if ($.been_in_ambulance_before == 1) {
        Text.ClearHelp();
        $.been_in_ambulance_before = 0;
      }
    }
  }
  // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
  }
}

async function fire_truck_mission_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInModel(90 /* CAR_FIRETRUCK */)) {
      if ($.flag_player_on_mission == 0 && $.flag_player_on_fire_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.been_in_a_firetruk_before == 0) {
          if (!($.controlmode == 3)) {
            Text.PrintHelp("FTUTOR");
          }
          else {
            Text.PrintHelp("FTUTOR2");
          }
          $.been_in_a_firetruk_before = 1;
        }
        if (!($.controlmode == 3)) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("FIRE_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission firetruck.sc
            $.been_in_a_firetruk_before = 1;
          }
        }
        else {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("FIRE_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission firetruck.sc
            $.been_in_a_firetruk_before = 1;
          }
        }
      }
    }
    else {
      if ($.been_in_a_firetruk_before == 1) {
        Text.ClearHelp();
        $.been_in_a_firetruk_before = 0;
      }
    }
  }
  // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
  }
}

async function cop_mission_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInModel(109 /* CAR_POLICE */) || $.player.IsInModel(110 /* CAR_ENFORCER */) || $.player.IsInModel(115 /* CAR_RHINO */) || $.player.IsInModel(100 /* CAR_FBI */)) {
      if ($.flag_player_on_mission == 0 && $.flag_player_on_cop_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.been_in_a_copcar_before == 0) {
          if (!($.controlmode == 3)) {
            Text.PrintHelp("CTUTOR");
          }
          else {
            Text.PrintHelp("CTUTOR2");
          }
          $.been_in_a_copcar_before = 1;
        }
        if (!($.controlmode == 3)) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("COP_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission copcar.sc
            $.been_in_a_copcar_before = 1;
          }
        }
        else {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("COP_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission copcar.sc
            $.been_in_a_copcar_before = 1;
          }
        }
      }
    }
    else {
      if ($.been_in_a_copcar_before == 1) {
        Text.ClearHelp();
        $.been_in_a_copcar_before = 0;
      }
    }
  }
  // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
  }
}

async function taxi_mission1_loop() {
  {
  await asyncWait(0);
  if ($.player.IsPlaying()) {
    if ($.player.IsInTaxi()) {
      if ($.flag_player_on_mission == 0 && $.flag_taxi1_mission_launched == 0) {
        $.controlmode = Pad.GetControllerMode();
        if ($.been_in_a_taxi_before == 0) {
          if (!($.controlmode == 3)) {
            Text.PrintHelp("TTUTOR");
          }
          else {
            Text.PrintHelp("TTUTOR2");
          }
          $.been_in_a_taxi_before = 1;
        }
        if (!($.controlmode == 3)) {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("TAXI_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission taxi1.sc
            $.flag_taxi1_mission_launched = 1;
          }
        }
        else {
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.IsPlaying())) {
                // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("TAXI_M", 4000, 5);
            await asyncWait(0);
            // LoadLaunchMission taxi1.sc
            $.flag_taxi1_mission_launched = 1;
          }
        }
      }
    }
    else {
      if ($.been_in_a_taxi_before == 1) {
        Text.ClearHelp();
        $.been_in_a_taxi_before = 0;
      }
    }
  }
  // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
  }
}

async function meat_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_meat_mission1_passed == 1) {
    $.meat_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.TurnOn();
    }
    else {
      $.meat_phone.TurnOff();
    }
  }
  else {
    $.meat_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.meat_phone.TurnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          if ($.hours >= 9 && $.hours < 19) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("MEA1", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat1.sc
          }
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → meat_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → meat_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO meat_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → meat_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO meat_mission1_loop"); // fallback: would break linear control flow
  }
}

async function meat_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_meat_mission2_passed == 1) {
    $.meat_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.TurnOn();
    }
    else {
      $.meat_phone.TurnOff();
    }
  }
  else {
    $.meat_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.meat_phone.TurnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          if ($.hours >= 9 && $.hours < 19) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("MEA2", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat2.sc
          }
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → meat_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → meat_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO meat_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → meat_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO meat_mission2_loop"); // fallback: would break linear control flow
  }
}

async function meat_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_meat_mission3_passed == 1) {
    $.meat_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.TurnOn();
    }
    else {
      $.meat_phone.TurnOff();
    }
  }
  else {
    $.meat_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.meat_phone.TurnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          if ($.hours >= 9 && $.hours < 19) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("MEA3", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat3.sc
          }
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → meat_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → meat_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO meat_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → meat_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO meat_mission3_loop"); // fallback: would break linear control flow
  }
}

async function meat_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_meat_mission4_passed == 1) {
    $.meat_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.TurnOn();
    }
    else {
      $.meat_phone.TurnOff();
    }
  }
  else {
    $.meat_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.meat_phone.TurnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          if ($.hours >= 9 && $.hours < 19) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Text.PrintBig("MEA4", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat4.sc
          }
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → meat_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → meat_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO meat_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → meat_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO meat_mission4_loop"); // fallback: would break linear control flow
  }
}

async function eightball_mission_loop() {
  {
  await asyncWait(0);
  if ($.flag_industrial_passed == 1 && $.flag_eightball_mission_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_eightball_mission_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying() && $.flag_eightball_mission_launched == 0 && $.flag_player_on_mission == 0) {
    if ($.flag_reached_hideout == 0) {
      if ($.player.LocateOnFoot2D(811.90, -939.95, 3.5, 3.5, 0 /* FALSE */)) {
        if ($.player.CanStartMission()) {
          // LoadLaunchMission 8ball.sc
          $.flag_eightball_mission_launched = 1;
        }
      }
    }
    else {
      if ($.player.LocateOnFoot2D(883.5, -308.2, 3.5, 3.5, 0 /* FALSE */)) {
        if ($.player.CanStartMission()) {
          // LoadLaunchMission 8ball.sc
          $.flag_eightball_mission_launched = 1;
        }
      }
    }
  }
  // SCM GOTO → eightball_mission_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO eightball_mission_loop"); // fallback: would break linear control flow
  }
}

async function luigi_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_luigi_mission2_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_luigi_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → luigi_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → luigi_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO luigi_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → luigi_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO luigi_mission2_loop"); // fallback: would break linear control flow
  }
}

async function luigi_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_luigi_mission3_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_luigi_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → luigi_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → luigi_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO luigi_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → luigi_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO luigi_mission3_loop"); // fallback: would break linear control flow
  }
}

async function luigi_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_luigi_mission4_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_luigi_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
    $.flag_luigi_mission4_terminated = 1;
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → luigi_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → luigi_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO luigi_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → luigi_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO luigi_mission4_loop"); // fallback: would break linear control flow
  }
}

async function luigi_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_luigi_mission5_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_luigi_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
    $.flag_luigi_mission5_terminated = 1;
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → luigi_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → luigi_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO luigi_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → luigi_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO luigi_mission5_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission1_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        [$.hours, $.minutes] = Clock.GetTimeOfDay();
        if ($.hours >= 5 && $.hours < 21) {
          if ($.player.CanStartMission()) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(0 /* OFF */);
            Text.PrintBig("JM1", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission joey1.sc
          }
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
          }
          while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          Text.PrintNow("WRONGT1", 5000, 1);
          while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
            }
            [$.hours, $.minutes] = Clock.GetTimeOfDay();
            if ($.hours >= 5 && $.hours < 21) {
              // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission2_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("JM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → joey_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission2_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission3_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("JM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → joey_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission3_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission4_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("JM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → joey_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission4_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission5_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
    $.flag_joey_mission5_terminated = 1;
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("JM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → joey_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission5_loop"); // fallback: would break linear control flow
  }
}

async function joey_mission6_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_joey_mission6_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_joey_mission6_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission3_passed == 1 && $.flag_frankie_mission1_passed == 0) {
    $.flag_joey_mission6_terminated = 1;
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        [$.hours, $.minutes] = Clock.GetTimeOfDay();
        if ($.hours >= 6 && $.hours < 14) {
          if ($.player.CanStartMission()) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(0 /* OFF */);
            Text.PrintBig("JM6", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission joey6.sc
          }
          if (!($.player.IsPlaying())) {
            // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
          }
          while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          Text.PrintNow("WRONGT2", 5000, 1);
          while ($.player.LocateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
            }
            [$.hours, $.minutes] = Clock.GetTimeOfDay();
            if ($.hours >= 6 && $.hours < 14) {
              // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
            }
          }
        }
      }
    }
  }
  // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
  }
}

async function toni_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_toni_mission1_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("TM1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → toni_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → toni_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO toni_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → toni_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni_mission1_loop"); // fallback: would break linear control flow
  }
}

async function toni_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_toni_mission2_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("TM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → toni_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → toni_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO toni_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → toni_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni_mission2_loop"); // fallback: would break linear control flow
  }
}

async function toni_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_toni_mission3_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("TM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → toni_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → toni_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO toni_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → toni_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni_mission3_loop"); // fallback: would break linear control flow
  }
}

async function toni_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_toni_mission4_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("TM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → toni_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → toni_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO toni_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → toni_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni_mission4_loop"); // fallback: would break linear control flow
  }
}

async function toni_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_toni_mission5_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_toni_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("TM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → toni_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → toni_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO toni_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → toni_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni_mission5_loop"); // fallback: would break linear control flow
  }
}

async function frankie_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_frankie_mission1_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */) || $.player.IsInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, 0 /* FALSE */)) {
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(FM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → frankie_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → frankie_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO frankie_mission1_loop"); // fallback: would break linear control flow
  }
}

async function frankie_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_frankie_mission2_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */) || $.player.IsInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, 0 /* FALSE */)) {
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("FM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → frankie_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → frankie_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO frankie_mission2_loop"); // fallback: would break linear control flow
  }
}

async function frankie_mission2_1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_frankie_mission2_1_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission2_1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */) || $.player.IsInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, 0 /* FALSE */)) {
      if ($.flag_frankie_switched_off == 0) {
        if ($.flag_player_on_mission == 0) {
          if ($.player.CanStartMission()) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(0 /* OFF */);
            Text.PrintBig("FM21", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission frank2.1.sc
          }
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
          }
          while ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
            }
          }
        }
      }
      else {
        Text.PrintNow("FRANGO", 5000, 1);
        while ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
  }
}

async function frankie_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_frankie_mission3_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission3_part2_launched == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1272.2, -92.9, 13.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_eightball_switched_off == 0 && $.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("FM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → frankie_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1272.2, -92.9, 13.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → frankie_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO frankie_mission3_loop"); // fallback: would break linear control flow
  }
}

async function frankie_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_industrial_passed == 1 && $.flag_frankie_mission4_passed == 0) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_frankie_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */) || $.player.IsInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, 0 /* FALSE */)) {
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("FM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → frankie_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → frankie_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → frankie_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO frankie_mission4_loop"); // fallback: would break linear control flow
  }
}

async function diablo_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_diablo_mission1_passed == 1) {
    $.Diablo_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.TurnOn();
  }
  else {
    $.Diablo_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.Diablo_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("DIAB1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → diablo_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → diablo_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO diablo_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → diablo_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_mission1_loop"); // fallback: would break linear control flow
  }
}

async function diablo_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_diablo_mission2_passed == 1) {
    $.Diablo_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.TurnOn();
  }
  else {
    $.Diablo_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.Diablo_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("DIAB2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → diablo_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → diablo_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO diablo_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → diablo_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_mission2_loop"); // fallback: would break linear control flow
  }
}

async function diablo_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_diablo_mission3_passed == 1) {
    $.Diablo_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.TurnOn();
  }
  else {
    $.Diablo_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.Diablo_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("DIAB3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → diablo_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → diablo_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO diablo_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → diablo_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_mission3_loop"); // fallback: would break linear control flow
  }
}

async function diablo_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_diablo_mission4_passed == 1) {
    $.Diablo_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.TurnOn();
  }
  else {
    $.Diablo_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.Diablo_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("DIAB4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → diablo_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → diablo_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO diablo_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → diablo_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_mission4_loop"); // fallback: would break linear control flow
  }
}

async function asuka_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(AM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_mission1_loop"); // fallback: would break linear control flow
  }
}

async function asuka_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_mission2_loop"); // fallback: would break linear control flow
  }
}

async function asuka_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_mission3_loop"); // fallback: would break linear control flow
  }
}

async function asuka_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_mission4_loop"); // fallback: would break linear control flow
  }
}

async function asuka_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_asuka_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_mission5_loop"); // fallback: would break linear control flow
  }
}

async function kenji_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_kenji_mission1_passed == 1 || $.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("KM1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → kenji_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → kenji_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO kenji_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → kenji_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO kenji_mission1_loop"); // fallback: would break linear control flow
  }
}

async function kenji_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_kenji_mission2_passed == 1 || $.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("KM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → kenji_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → kenji_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO kenji_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → kenji_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO kenji_mission2_loop"); // fallback: would break linear control flow
  }
}

async function kenji_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_kenji_mission3_passed == 1 || $.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("KM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → kenji_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → kenji_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO kenji_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → kenji_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO kenji_mission3_loop"); // fallback: would break linear control flow
  }
}

async function kenji_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_kenji_mission4_passed == 1 || $.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("KM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → kenji_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → kenji_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO kenji_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → kenji_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO kenji_mission4_loop"); // fallback: would break linear control flow
  }
}

async function kenji_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_kenji_mission5_passed == 1 || $.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(KM5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → kenji_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → kenji_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO kenji_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → kenji_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO kenji_mission5_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission1_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission1_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission2_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM2, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission2_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission3_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM3, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission3_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission4_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM4, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission4_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission5_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission5_loop"); // fallback: would break linear control flow
  }
}

async function ray_mission6_loop() {
  {
  await asyncWait(0);
  if ($.flag_ray_mission6_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(RM6, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray6.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → ray_mission6_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission6_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → ray_mission6_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO ray_mission6_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → ray_mission6_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO ray_mission6_loop"); // fallback: would break linear control flow
  }
}

async function love_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LOVE1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission1_loop"); // fallback: would break linear control flow
  }
}

async function love_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("LOVE2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission2_loop"); // fallback: would break linear control flow
  }
}

async function love_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(LOVE3, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission3_loop"); // fallback: would break linear control flow
  }
}

async function yardie_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_yardie_mission1_passed == 1) {
    $.yardie_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.TurnOn();
  }
  else {
    $.yardie_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.yardie_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("YD1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → yardie_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → yardie_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO yardie_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → yardie_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_mission1_loop"); // fallback: would break linear control flow
  }
}

async function yardie_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_yardie_mission2_passed == 1) {
    $.yardie_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.TurnOn();
  }
  else {
    $.yardie_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.yardie_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("YD2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → yardie_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → yardie_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO yardie_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → yardie_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_mission2_loop"); // fallback: would break linear control flow
  }
}

async function yardie_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_yardie_mission3_passed == 1) {
    $.yardie_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.TurnOn();
  }
  else {
    $.yardie_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.yardie_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("YD3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → yardie_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → yardie_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO yardie_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → yardie_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_mission3_loop"); // fallback: would break linear control flow
  }
}

async function yardie_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_yardie_mission4_passed == 1) {
    $.yardie_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.TurnOn();
  }
  else {
    $.yardie_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.yardie_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("YD4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → yardie_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → yardie_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO yardie_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → yardie_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_mission4_loop"); // fallback: would break linear control flow
  }
}

async function love_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission4_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(LOVE4, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission4_loop"); // fallback: would break linear control flow
  }
}

async function love_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission5_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(LOVE5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission5_loop"); // fallback: would break linear control flow
  }
}

async function love_mission6_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission6_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(LOVE6, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love6.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission6_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission6_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission6_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission6_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission6_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission6_loop"); // fallback: would break linear control flow
  }
}

async function love_mission7_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_love_mission7_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig(LOVE7, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love7.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → love_mission7_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission7_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → love_mission7_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO love_mission7_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → love_mission7_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO love_mission7_loop"); // fallback: would break linear control flow
  }
}

async function asuka_suburban_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_suburban_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AS1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_suburban_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_suburban_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_suburban_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_suburban_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_suburban_mission1_loop"); // fallback: would break linear control flow
  }
}

async function asuka_suburban_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_suburban_mission2_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AS2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_suburban_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_suburban_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_suburban_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_suburban_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_suburban_mission2_loop"); // fallback: would break linear control flow
  }
}

async function asuka_suburban_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_asuka_suburban_mission3_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(0 /* OFF */);
          Text.PrintBig("AS3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → asuka_suburban_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → asuka_suburban_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO asuka_suburban_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → asuka_suburban_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO asuka_suburban_mission3_loop"); // fallback: would break linear control flow
  }
}

async function hood_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_hood_mission1_passed == 1) {
    $.hood_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.TurnOn();
  }
  else {
    $.hood_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.hood_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("HM_1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood1.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → hood_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → hood_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO hood_mission1_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → hood_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_mission1_loop"); // fallback: would break linear control flow
  }
}

async function hood_mission2_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_hood_mission2_passed == 1) {
    $.hood_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.TurnOn();
  }
  else {
    $.hood_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.hood_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("HM_2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood2.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → hood_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → hood_mission2_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO hood_mission2_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → hood_mission2_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_mission2_loop"); // fallback: would break linear control flow
  }
}

async function hood_mission3_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_hood_mission3_passed == 1) {
    if ($.flag_hood_mission5_passed == 0) {
      $.hood_phone.TurnOff();
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.TurnOn();
  }
  else {
    $.hood_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.hood_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("HM_3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood3.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → hood_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → hood_mission3_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO hood_mission3_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → hood_mission3_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_mission3_loop"); // fallback: would break linear control flow
  }
}

async function hood_mission4_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_hood_mission4_passed == 1) {
    $.hood_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.TurnOn();
  }
  else {
    $.hood_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.hood_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("HM_4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood4.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → hood_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → hood_mission4_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO hood_mission4_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → hood_mission4_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_mission4_loop"); // fallback: would break linear control flow
  }
}

async function hood_mission5_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_hood_mission5_passed == 1) {
    $.hood_phone.TurnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.TurnOn();
  }
  else {
    $.hood_phone.TurnOff();
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.CanStartMission()) {
          $.hood_phone.TurnOff();
          $.player.MakeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Text.PrintBig("HM_5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood5.sc
        }
        if (!($.player.IsPlaying())) {
          // SCM GOTO → hood_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.LocateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, 0 /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.IsPlaying())) {
            // SCM GOTO → hood_mission5_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO hood_mission5_loop"); // fallback: would break linear control flow
          }
        }
      }
    }
  }
  // SCM GOTO → hood_mission5_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_mission5_loop"); // fallback: would break linear control flow
  }
}

async function cat_mission1_loop() {
  {
  await asyncWait($.mission_trigger_wait_time);
  if ($.flag_cat_mission1_passed == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.player.IsPlaying()) {
    if ($.player.LocateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, 0 /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.nicked_half_a_mil_before == 1) {
          // SCM GOTO → payed_before (not lowered; manual jump required)
          throw new Error("unresolved GOTO payed_before"); // fallback: would break linear control flow
        }
        if ($.player.IsScoreGreater(499999)) {
          // SCM label payed_before
          if ($.player.CanStartMission()) {
            $.player.MakeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(0 /* OFF */);
            Text.PrintBig("CAT2", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission cat1.sc
          }
          if (!($.player.IsPlaying())) {
            // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
          }
          while ($.player.LocateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          Text.PrintNow("CAT_MON", 5000, 1);
          while ($.player.LocateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, 0 /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.IsPlaying())) {
              // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
      }
    }
  }
  // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
  throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
  }
}

async function ind_save_loop() {
  {
  // ScriptName
}

async function ind_save_loop_inner() {
  await asyncWait(250);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      if ($.created_ind_blip_before == 0) {
        $.industrail_save_blip.Remove();
        $.industrail_save_blip = Blip.AddSpriteForContactPoint(870.0, -308.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.industrail_save_blip.ChangeDisplay(2 /* BLIP_ONLY */);
        $.created_ind_blip_before = 1;
      }
      if ($.player.IsInZone("REDLIGH")) {
        if ($.flag_eightball_mission_passed == 1) {
          if ($.flag_player_on_mission == 0) {
            while (!($.playersdoor.Rotate(210.0, 10.0, 0 /* FALSE */))) {
              await asyncWait(0);
            }
          }
          else {
            while (!($.playersdoor.Rotate(0.0, 10.0, 0 /* FALSE */))) {
              await asyncWait(0);
            }
          }
        }
        if ($.player.IsPlaying()) {
          if ($.player.CanStartMission()) {
            if ($.flag_player_on_mission == 0) {
              if ($.player.IsInAreaOnFoot3D(891.2, -309.7, 7.7, 899.3, -303.3, 12.7, 0 /* FALSE */)) {
                $.player.SetControl(0 /* Off */);
                Camera.SetFixedPosition(884.56, -305.35, 13.53, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(885.25, -305.85, 13.0, 2 /* JUMP_CUT */);
                Audio.LoadMissionAudio(DOOR_1);
                while (!(Audio.HasMissionAudioLoaded())) {
                  await asyncWait(0);
                }
                Audio.PlayMissionAudio();
                while (!($.playersdoor.Rotate(0.0, 8.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                while (!(Audio.HasMissionAudioFinished())) {
                  await asyncWait(0);
                }
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(0 /* Off */);
                }
                await asyncWait(1000);
                while (!($.playersdoor.Rotate(210.0, 10.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(888.6, -308.4, -100.0, 1.0, 1 /* TRUE */);
                if ($.player.IsPlaying()) {
                  $.player.SetCoordinates(888.6, -308.4, -100.0);
                  $.player.SetHeading(90.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(1 /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_ind_blip_before == 1) {
        $.industrail_save_blip.Remove();
        $.created_ind_blip_before = 0;
      }
    }
  }
  // SCM GOTO → ind_save_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO ind_save_loop_inner"); // fallback: would break linear control flow
  }
}

async function ind_restart() {
  {
  // ScriptName
}

async function ind_restart_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      Restart.AddHospital(1144.3, -596.9, 13.9, 90.0);
      Restart.AddPolice(1143.9, -675.2, -100.0, 90.0);
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → ind_restart_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO ind_restart_inner"); // fallback: would break linear control flow
  }
}

async function diablo_phone_start() {
  {
  // ScriptName
}

async function diablo_phone_start_inner() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      if ($.flag_player_on_mission == 0) {
        Pager.AddMessage("DIAB1_A", 140, 2, 0);
        // START_NEW_SCRIPT diablo_mission1_loop
        // START_NEW_SCRIPT diablo_blip_loop
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → diablo_phone_start_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_phone_start_inner"); // fallback: would break linear control flow
  }
}

async function diablo_blip_loop() {
  {
  // ScriptName
}

async function diablo_blip_loop_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      if ($.blip_diablo_created_before == 0) {
        $.diablo_contact_blip.Remove();
        $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
        $.blip_diablo_created_before = 1;
      }
    }
    else {
      if ($.blip_diablo_created_before == 1) {
        $.diablo_contact_blip.Remove();
        $.blip_diablo_created_before = 0;
      }
    }
  }
  // SCM GOTO → diablo_blip_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO diablo_blip_loop_inner"); // fallback: would break linear control flow
  }
}

async function joeys_buggy_loop() {
  {
  // ScriptName
}

async function joeys_buggy_loop_inner() {
  await asyncWait(500);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      [$.hours, $.minutes] = Clock.GetTimeOfDay();
      if ($.hours > 17 && $.hours < 24) {
        if ($.started_buggy_generator_before == 0) {
          $.joeys_buggy.Switch(101);
          $.misty_joey_loop = Sound.AddContinuous(937.1, -275.5, 8.9, 91 /* SOUND_MISTYS_HOUSE_LOOP_L */);
          $.started_buggy_generator_before = 1;
        }
      }
      else {
        if ($.started_buggy_generator_before == 1) {
          $.joeys_buggy.Switch(0);
          $.misty_joey_loop.Remove();
          $.started_buggy_generator_before = 0;
        }
      }
    }
  }
  // SCM GOTO → joeys_buggy_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO joeys_buggy_loop_inner"); // fallback: would break linear control flow
  }
}

async function toni5_flames_loop() {
  {
  // ScriptName
}

async function toni5_flames_loop_inner() {
  await asyncWait(500);
  if ($.player.IsPlaying()) {
    if (!($.player.IsInZone("PORT_W"))) {
      World.RemoveAllScriptFires();
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → toni5_flames_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni5_flames_loop_inner"); // fallback: would break linear control flow
  }
}

async function blob_help_loop() {
  {
  // ScriptName
}

async function blob_help_loop_inner() {
  await asyncWait(100);
  if ($.player.IsPlaying()) {
    if ($.player.IsInAreaOnFoot3D(895.3, -428.0, 12.0, 900.3, -423.2, 18.0, 0 /* FALSE */)) {
      Text.PrintHelp("HELP12");
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → blob_help_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO blob_help_loop_inner"); // fallback: would break linear control flow
  }
}

async function toni4_pager_loop() {
  {
  // ScriptName
}

async function toni4_pager_loop_inner() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0) {
      if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
        if ($.flag_toni_mission4_passed == 0) {
          Pager.AddMessage("TONI_P", 140, 2, 0);
        }
        // START_NEW_SCRIPT toni5_pager_loop
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → toni4_pager_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni4_pager_loop_inner"); // fallback: would break linear control flow
  }
}

async function toni5_pager_loop() {
  {
  // ScriptName
}

async function toni5_pager_loop_inner() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0) {
      if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
        if ($.flag_toni_mission4_passed == 1) {
          if ($.flag_toni_mission5_passed == 0) {
            Pager.AddMessage("TONI_P", 140, 2, 0);
          }
          return; // TERMINATE_THIS_SCRIPT
        }
      }
    }
  }
  // SCM GOTO → toni5_pager_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO toni5_pager_loop_inner"); // fallback: would break linear control flow
  }
}

async function close_fuzz_doors() {
  {
  // ScriptName
  while ($.flag_moved_door1_lm5 == 0 || $.flag_moved_door2_lm5 == 0) {
    await asyncWait(0);
    if ($.counter_girls_trying_to_get_to_ball == 0) {
      if (!(World.IsAreaOccupied(1008.0, -899.0, 14.0, 996.5, -886.5, 20.0, 0 /* FALSE */, 1 /* TRUE */, 1 /* TRUE */, 0 /* FALSE */, 1 /* TRUE */))) {
        if ($.fuzz_door1.Rotate(180.0, 10.0, 0 /* FALSE */)) {
          $.flag_moved_door1_lm5 = 1;
        }
        if ($.fuzz_door2.Rotate(0.0, 10.0, 0 /* FALSE */)) {
          $.flag_moved_door2_lm5 = 1;
        }
      }
    }
  }
  return; // TERMINATE_THIS_SCRIPT
  }
}

async function com_save_loop() {
  {
  // ScriptName
}

async function com_save_loop_inner() {
  await asyncWait(250);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.created_com_blip_before == 0) {
        $.commercial_save_blip.Remove();
        $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.3, -469.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.commercial_save_blip.ChangeDisplay(2 /* BLIP_ONLY */);
        $.created_com_blip_before = 1;
      }
      if ($.player.IsInZone("PARK")) {
        if ($.flag_player_on_mission == 0) {
          while (!($.plysav_lftdr_lft.Slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */)) || !($.plysav_lftdr_rght.Slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
            await asyncWait(0);
          }
        }
        else {
          while (!($.plysav_lftdr_lft.Slide(103.85, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */)) || !($.plysav_lftdr_rght.Slide(102.192, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
            await asyncWait(0);
          }
        }
        if ($.player.IsPlaying()) {
          if ($.player.CanStartMission()) {
            if ($.flag_player_on_mission == 0) {
              if ($.player.IsInAreaOnFoot3D(105.7, -486.0, 15.0, 100.8, -483.4, 18.0, 0 /* FALSE */)) {
                $.player.SetControl(0 /* Off */);
                Camera.SetFixedPosition(98.53, -472.06, 19.84, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(98.94, -472.90, 19.47, 2 /* JUMP_CUT */);
                Audio.LoadMissionAudio(DOOR_3);
                while (!(Audio.HasMissionAudioLoaded())) {
                  await asyncWait(0);
                }
                Audio.PlayMissionAudio();
                while (!($.plysav_lftdr_lft.Slide(103.85, -482.8, 16.25, 0.0625, 0.0, 0.0, 0 /* FALSE */)) || !($.plysav_lftdr_rght.Slide(102.192, -482.8, 16.25, 0.0625, 0.0, 0.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                while (!(Audio.HasMissionAudioFinished())) {
                  await asyncWait(0);
                }
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(0 /* OFF */);
                }
                await asyncWait(1000);
                while (!($.plysav_lftdr_lft.Slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */)) || !($.plysav_lftdr_rght.Slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(103.0, -478.5, 14.9, 1.0, 1 /* TRUE */);
                if ($.player.IsPlaying()) {
                  $.player.SetCoordinates(103.0, -478.5, 14.9);
                  $.player.SetHeading(0.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(1 /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_com_blip_before == 1) {
        $.commercial_save_blip.Remove();
        $.created_com_blip_before = 0;
      }
    }
  }
  // SCM GOTO → com_save_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO com_save_loop_inner"); // fallback: would break linear control flow
  }
}

async function com_restart() {
  {
  // ScriptName
}

async function com_restart_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.flag_industrial_passed == 1) {
        Restart.AddHospital(183.5, -17.8, 16.2, 180.0);
        Restart.AddPolice(340.3, -1123.4, 25.0, 180.0);
        Game.SetMaxWantedLevel(5);
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → com_restart_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO com_restart_inner"); // fallback: would break linear control flow
  }
}

async function yardie_phone_start() {
  {
  // ScriptName
}

async function yardie_phone_start_inner() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.flag_player_on_mission == 0) {
        Pager.AddMessage("YD_P", 140, 2, 0);
        // START_NEW_SCRIPT yardie_mission1_loop
        // START_NEW_SCRIPT yardie_blip_loop
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → yardie_phone_start_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_phone_start_inner"); // fallback: would break linear control flow
  }
}

async function yardie_blip_loop() {
  {
  // ScriptName
}

async function yardie_blip_loop_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.flag_yardie_mission4_passed == 1) {
        return; // TERMINATE_THIS_SCRIPT
      }
      if ($.blip_yardie_created_before == 0) {
        $.yardie_contact_blip.Remove();
        $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
        $.blip_yardie_created_before = 1;
      }
    }
    else {
      if ($.blip_yardie_created_before == 1) {
        $.yardie_contact_blip.Remove();
        $.blip_yardie_created_before = 0;
      }
    }
  }
  // SCM GOTO → yardie_blip_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO yardie_blip_loop_inner"); // fallback: would break linear control flow
  }
}

async function close_asuka1_door() {
  {
  // ScriptName
  if (Object.DoesExist($.backdoor)) {
    $.door_position_a1 = $.backdoor.GetHeading();
    if ($.door_crash_flag == 1) {
      while (!($.door_position_a1 == 0.0)) {
        if ($.player.IsPlaying()) {
          if (!($.player.IsInArea3D(889.618, -418.098, 15.0, 895.151, -412.675, 18.0, 0))) {
            if ($.door_position_a1 > -10.0 && $.door_position_a1 < 10.0) {
              $.door_position_a1 = 0.0;
            }
            else {
              $.door_position_a1 -= 10.0;
            }
            $.backdoor.SetHeading($.door_position_a1);
          }
        }
        else {
          $.door_position_a1 = 0.0;
          $.backdoor.SetHeading($.door_position_a1);
        }
        await asyncWait(0);
      }
    }
  }
  return; // TERMINATE_THIS_SCRIPT
  }
}

async function sub_save_loop() {
  {
  // ScriptName
}

async function sub_save_loop_inner() {
  await asyncWait(250);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.created_sub_blip_before == 0) {
        $.suburban_save_blip.Remove();
        $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.suburban_save_blip.ChangeDisplay(2 /* BLIP_ONLY */);
        $.created_sub_blip_before = 1;
      }
      if ($.player.IsInZone("PROJECT")) {
        if ($.flag_player_on_mission == 0) {
          while (!($.newtowerdoor1.Rotate(250.0, 10.0, 0 /* FALSE */))) {
            await asyncWait(0);
          }
        }
        else {
          while (!($.newtowerdoor1.Rotate(180.0, 10.0, 0 /* FALSE */))) {
            await asyncWait(0);
          }
        }
        if ($.player.IsPlaying()) {
          if ($.player.CanStartMission()) {
            if ($.flag_player_on_mission == 0) {
              if ($.player.IsInAreaOnFoot3D(-670.5, 3.9, 18.0, -660.0, 12.7, 22.0, 0 /* FALSE */)) {
                $.player.SetControl(0 /* Off */);
                Camera.SetFixedPosition(-678.15, -6.46, 24.49, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(-677.39, -5.92, 24.11, 2 /* JUMP_CUT */);
                while (!($.newtowerdoor1.Rotate(180.0, 8.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(0 /* Off */);
                }
                await asyncWait(1000);
                while (!($.newtowerdoor1.Rotate(250.0, 10.0, 0 /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(-666.8, -1.8, -100.0, 1.0, 1 /* TRUE */);
                if ($.player.IsPlaying()) {
                  $.player.SetCoordinates(-666.8, -1.8, -100.0);
                  $.player.SetHeading(180.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.IsPlaying()) {
                  $.player.SetControl(1 /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_sub_blip_before == 1) {
        $.suburban_save_blip.Remove();
        $.created_sub_blip_before = 0;
      }
    }
  }
  // SCM GOTO → sub_save_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO sub_save_loop_inner"); // fallback: would break linear control flow
  }
}

async function sub_restart() {
  {
  // ScriptName
}

async function sub_restart_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.flag_commercial_passed == 1) {
        Restart.AddHospital(-1253.0, -138.2, 57.8, 90.0);
        Restart.AddPolice(-1259.5, -44.5, 57.8, 90.0);
        Game.SetMaxWantedLevel(6);
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → sub_restart_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO sub_restart_inner"); // fallback: would break linear control flow
  }
}

async function hood_phone_start() {
  {
  // ScriptName
}

async function hood_phone_start_inner() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.flag_player_on_mission == 0) {
        Pager.AddMessage("HOOD1_A", 140, 2, 0);
        // START_NEW_SCRIPT hood_mission1_loop
        // START_NEW_SCRIPT hood_blip_loop
        return; // TERMINATE_THIS_SCRIPT
      }
    }
  }
  // SCM GOTO → hood_phone_start_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_phone_start_inner"); // fallback: would break linear control flow
  }
}

async function hood_blip_loop() {
  {
  // ScriptName
}

async function hood_blip_loop_inner() {
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.flag_hood_mission5_passed == 1) {
        return; // TERMINATE_THIS_SCRIPT
      }
      if ($.flag_blip_hood_created == 0) {
        $.hood_contact_blip.Remove();
        $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
        $.flag_blip_hood_created = 1;
      }
    }
    else {
      if ($.flag_blip_hood_created == 1) {
        $.hood_contact_blip.Remove();
        $.flag_blip_hood_created = 0;
      }
    }
  }
  // SCM GOTO → hood_blip_loop_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO hood_blip_loop_inner"); // fallback: would break linear control flow
  }
}

async function luigi_message() {
  {
  // ScriptName
  await asyncWait(1000);
  if ($.player.IsPlaying()) {
    if ($.flag_had_luigi_help_message == 0) {
      if ($.flag_luigi_mission1_passed == 1) {
        Text.PrintHelp("LM1_8");
        $.flag_had_luigi_help_message = 1;
      }
    }
    if ($.flag_had_luigi_help_message == 1) {
      timera = 0;
      $.flag_had_luigi_help_message = 2;
    }
    while (timera < 6000) {
      await asyncWait(0);
    }
    if ($.flag_had_luigi_help_message == 2) {
      if ($.flag_player_on_mission == 0) {
        Text.PrintHelp("LM1_8A");
        $.flag_had_luigi_help_message = 3;
      }
    }
  }
  return; // TERMINATE_THIS_SCRIPT
  }
}

async function pistol_message() {
  {
  // ScriptName
}

async function pistol_create() {
  await asyncWait(10000);
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0) {
      if ($.out_of_stock_pistol == 0) {
        $.SHOP_COLT45.Remove();
        $.SHOP_COLT45_2 = Pickup.Create(154 /* WEAPON_COLT45 */, 1 /* PICKUP_IN_SHOP */, 1068.5, -400.8, 15.2);
        Pager.AddMessage("COLT_IN", 140, 2, 0);
        $.out_of_stock_pistol = 1;
      }
    }
  }
  if ($.out_of_stock_pistol == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  // SCM GOTO → pistol_create (not lowered; manual jump required)
  throw new Error("unresolved GOTO pistol_create"); // fallback: would break linear control flow
  }
}

async function uzi_message() {
  {
  // ScriptName
}

async function uzi_create() {
  await asyncWait(5000);
  if ($.player.IsPlaying()) {
    if ($.flag_player_on_mission == 0) {
      if ($.out_of_stock_uzi == 0) {
        Pager.AddMessage("UZI_IN", 140, 2, 0);
        $.out_of_stock_uzi = 1;
      }
    }
  }
  if ($.out_of_stock_uzi == 1) {
    return; // TERMINATE_THIS_SCRIPT
  }
  // SCM GOTO → uzi_create (not lowered; manual jump required)
  throw new Error("unresolved GOTO uzi_create"); // fallback: would break linear control flow
  }
}

async function imp_exp_pager() {
  {
  await asyncWait(100000);
  if ($.flag_player_on_mission == 0) {
    if ($.player.IsPlaying()) {
      Pager.AddMessage(IMPEXPP, 140, 2, 0);
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → imp_exp_pager (not lowered; manual jump required)
  throw new Error("unresolved GOTO imp_exp_pager"); // fallback: would break linear control flow
  }
}

async function emergency_crane_pager() {
  {
  await asyncWait(200000);
  if ($.flag_player_on_mission == 0) {
    if ($.player.IsPlaying()) {
      Pager.AddMessage(EMVHPUP, 140, 2, 0);
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → emergency_crane_pager (not lowered; manual jump required)
  throw new Error("unresolved GOTO emergency_crane_pager"); // fallback: would break linear control flow
  }
}

async function van_heist_garage_pager() {
  {
  await asyncWait(300000);
  if ($.flag_player_on_mission == 0) {
    if ($.player.IsPlaying()) {
      Pager.AddMessage(VANHSTP, 140, 2, 0);
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → van_heist_garage_pager (not lowered; manual jump required)
  throw new Error("unresolved GOTO van_heist_garage_pager"); // fallback: would break linear control flow
  }
}

export async function main() {
  // ScriptName
  // VAR_FLOAT one_sixteenth one_thirtysecond one_sixtyfourth
  $.one_sixteenth = 0.0625;
  $.one_thirtysecond = $.one_sixteenth / 2.0;
  $.one_sixtyfourth = $.one_thirtysecond / 2.0;
  // VAR_INT mission_trigger_wait_time
  $.mission_trigger_wait_time = 250;
  // VAR_INT flag_taken_money_off_fm3
  $.flag_taken_money_off_fm3 = 0;
  // VAR_INT flag_player_had_gun_message
  $.flag_player_had_gun_message = 0;
  // VAR_INT flag_reached_hideout
  $.flag_reached_hideout = 0;
  // VAR_INT flag_had_luigi_help_message
  $.flag_had_luigi_help_message = 0;
  // VAR_INT blob_flag
  $.blob_flag = 0;
  Stat.SetTotalNumberOfMissions(73);
  Stat.SetProgressTotal(0);
  // VAR_INT script_controlled_player
  // VAR_INT controlmode
  // VAR_INT backdoor playersdoor
  // VAR_INT dogfood_factory_gate doggy_door
  // VAR_INT misty_door1 misty_door2
  // VAR_INT explosive_drum1 explosive_drum2
  // VAR_INT laundrete_door1 laundrete_door2
  // VAR_INT fish_factory_gate
  // VAR_INT Bank_job_door bankdoor1 bankdoor2
  // VAR_INT fuzz_door1 fuzz_door2
  // VAR_INT joeys_garage_door2 joeys_garage_door3
  // VAR_INT target1 target2 target3
  // VAR_INT subway_gate_industrial tunnel_gate_industrial
  // VAR_INT bridge_is_damaged
  // VAR_INT subway_gate_suburban1 subway_gate_suburban2 tunnel_gate_suburban
  // VAR_FLOAT joeydoor2_X joeydoor2_Y joeydoor2_Z joeydoor3_X joeydoor3_Y joeydoor3_Z
  $.playersdoor = Object.CreateNoOffset($.playersdoor, 890.883, -307.74, 8.75);
  $.playersdoor.DontRemove();
  $.target1 = Object.CreateNoOffset(faketarget, 1078.7, -384.8, 15.4);
  $.target1.DontRemove();
  $.target2 = Object.CreateNoOffset(faketarget, 1080.5, -384.8, 15.4);
  $.target2.DontRemove();
  $.target3 = Object.CreateNoOffset(faketarget, 1082.3, -384.8, 15.4);
  $.target3.DontRemove();
  $.misty_door1 = Object.CreateNoOffset(Mistydoor, 945.68, -272.31, 4.854);
  $.misty_door1.DontRemove();
  $.misty_door2 = Object.CreateNoOffset(Mistydoor, 942.746, -273.712, 4.854);
  $.misty_door2.DontRemove();
  $.misty_door2.SetHeading(180.0);
  $.laundrete_door1 = Object.CreateNoOffset(laundrtdoor1, 845.773, -662.80, 15.07);
  $.laundrete_door1.DontRemove();
  $.laundrete_door2 = Object.CreateNoOffset(laundrtdoor1, 845.773, -664.824, 15.07);
  $.laundrete_door2.DontRemove();
  $.laundrete_door2.SetHeading(180.0);
  $.joeys_garage_door2 = Object.CreateNoOffset(joey_door1, 1192.23, -867.252, 14.124);
  $.joeys_garage_door2.DontRemove();
  $.joeys_garage_door2.SetHeading(45.0);
  $.joeys_garage_door3 = Object.CreateNoOffset(joey_door2, 1190.12, -869.339, 14.19);
  $.joeys_garage_door3.DontRemove();
  $.joeys_garage_door3.SetHeading(45.0);
  $.dogfood_factory_gate = Object.CreateNoOffset(electricgate, 1250.4, -812.0, 13.97);
  $.dogfood_factory_gate.DontRemove();
  $.dogfood_factory_gate.SetHeading(225.0);
  $.doggy_door = Object.CreateNoOffset(dogfoodoor01, 1205.298, -802.908, 15.0);
  $.doggy_door.DontRemove();
  $.doggy_door.SetHeading(45.0);
  $.fish_factory_gate = Object.CreateNoOffset(electricgate, 1016.0, -1107.955, 12.294);
  $.fish_factory_gate.DontRemove();
  $.fish_factory_gate.SetHeading(90.0);
  $.Bank_job_door = Object.CreateNoOffset(bankjobdoor, 1087.523, -233.801, 11.012);
  $.Bank_job_door.DontRemove();
  $.bankdoor1 = Object.CreateNoOffset(chnabankdoor, 1035.6, -700.793, 15.334);
  $.bankdoor1.DontRemove();
  $.bankdoor2 = Object.CreateNoOffset(chnabankdoor, 1035.6, -699.408, 15.334);
  $.bankdoor2.DontRemove();
  $.bankdoor2.SetHeading(180.0);
  $.backdoor = Object.CreateNoOffset($.backdoor, 891.056, -416.4373, 14.955);
  $.backdoor.DontRemove();
  $.fuzz_door1 = Object.CreateNoOffset(fuzballdoor, 1001.673, -887.855, 15.775);
  $.fuzz_door1.SetHeading(180.0);
  $.fuzz_door1.DontRemove();
  $.fuzz_door2 = Object.CreateNoOffset(fuzballdoor, 998.33, -887.94, 15.775);
  $.fuzz_door2.SetHeading(0.0);
  $.fuzz_door2.DontRemove();
  $.subway_gate_industrial = Object.CreateNoOffset(subwaygate, 988.963, -471.778, 5.2);
  $.subway_gate_industrial.DontRemove();
  $.subway_gate_industrial.SetHeading(90.0);
  $.tunnel_gate_industrial = Object.CreateNoOffset(tunnelentrance, 730.331, 172.467, -21.075);
  $.tunnel_gate_industrial.DontRemove();
  // VAR_INT plysav_lftdr_lft plysav_lftdr_rght
  // VAR_INT police_door_one police_door_two
  // VAR_INT colombian_gate helix_barrier
  // VAR_INT phils_compnd_gate flag_player_on_phil_mission
  // VAR_INT inside_fence outside_fence
  $.helix_barrier = Object.CreateNoOffset($.helix_barrier, -73.137, -630.333, 25.932);
  $.helix_barrier.DontRemove();
  $.plysav_lftdr_lft = Object.CreateNoOffset($.plysav_lftdr_lft, 103.85, -482.8, 16.25);
  $.plysav_lftdr_lft.DontRemove();
  $.plysav_lftdr_rght = Object.CreateNoOffset($.plysav_lftdr_rght, 102.192, -482.8, 16.25);
  $.plysav_lftdr_rght.DontRemove();
  $.plysav_lftdr_rght.SetHeading(180.0);
  $.police_door_one = Object.CreateNoOffset(electricgate, 366.158, -1128.522, 21.941);
  $.police_door_one.DontRemove();
  $.police_door_one.SetHeading(180.0);
  $.police_door_two = Object.CreateNoOffset(electricgate, 326.3, -1128.522, 21.941);
  $.police_door_two.DontRemove();
  $.police_door_two.SetHeading(180.0);
  $.colombian_gate = Object.CreateNoOffset(electricgate, 91.589, -318.592, 15.296);
  $.colombian_gate.DontRemove();
  $.colombian_gate.SetHeading(270.0);
  $.phils_compnd_gate = Object.CreateNoOffset(electricgate, 147.249, 207.323, 10.599);
  $.phils_compnd_gate.DontRemove();
  $.phils_compnd_gate.SetHeading(270.0);
  $.inside_fence = Object.CreateNoOffset(fixed_inside, 362.827, -341.883, 17.186);
  $.inside_fence.DontRemove();
  $.outside_fence = Object.CreateNoOffset(fixed_outside, 360.852, -391.405, 22.622);
  $.outside_fence.DontRemove();
  // VAR_INT newtowerdoor1 Columbian_gate2
  // VAR_INT airportdoor1 airportdoor2
  $.newtowerdoor1 = Object.CreateNoOffset($.newtowerdoor1, -664.313, 2.883, 19.51);
  $.newtowerdoor1.DontRemove();
  $.newtowerdoor1.SetHeading(180.0);
  $.Columbian_gate2 = Object.CreateNoOffset(Columbiangate, -363.05, 250.455, 61.355);
  $.Columbian_gate2.DontRemove();
  $.Columbian_gate2.SetHeading(180.0);
  $.airportdoor1 = Object.CreateNoOffset($.airportdoor1, -770.414, -599.292, 11.847);
  $.airportdoor1.DontRemove();
  $.airportdoor2 = Object.CreateNoOffset($.airportdoor2, -770.414, -601.369, 11.846);
  $.airportdoor2.DontRemove();
  Game.SetMaxWantedLevel(4);
  // VAR_INT save_cars1 bombshop1 sprayshop1 collect_all_cars1 special_garage1 hours minutes
  // VAR_INT frankie_garage Garage_bank garage_lm2
  $.save_cars1 = Garage.Create(891.3, -311.1, 7.7, 898.4, -315.5, 12.7, 16 /* GARAGE_HIDEOUT_INDUSTRIAL */);
  $.collect_all_cars1 = Garage.Create(1496.8, -686.2, 11.0, 1523.3, -666.8, 17.0, 8 /* GARAGE_COLLECTCARS_1 */);
  $.collect_all_cars1.NoSpecialCameraForThisGarage();
  $.bombshop1 = Garage.Create(1284.6, -100.5, 13.6, 1278.0, -111.0, 18.6, 3 /* GARAGE_BOMBSHOP2 */);
  $.sprayshop1 = Garage.Create(921.0, -367.5, 9.8, 928.7, -355.1, 14.8, 5 /* GARAGE_RESPRAY */);
  $.frankie_garage = Garage.Create(1428.8, -187.0, 49.7, 1442.5, -179.9, 54.7, 21 /* GARAGE_MISSION_KEEPCAR_REMAINCLOSED */);
  $.frankie_garage.SetRotatingDoor();
  $.Garage_bank = Garage.Create(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 1 /* GARAGE_MISSION */);
  $.garage_lm2 = Garage.Create(1074.0, -578.0, 13.0, 1085.0, -568.0, 17.0, 1 /* GARAGE_MISSION */);
  // VAR_INT save_cars2 bombshop2 sprayshop2 garage_yd3 garage1_love1 garage2_love1 garage3_love1 garage4_love1 garage5_love1
  // VAR_INT garage_km2 rays_prize_garage witsec_garage loves_garage
  // VAR_FLOAT garage_min_x_yd3 garage_min_y_yd3 garage_max_x_yd3 garage_max_y_yd3
  $.garage_min_x_yd3 = 257.0;
  $.garage_min_y_yd3 = -803.0;
  $.garage_max_x_yd3 = 263.0;
  $.garage_max_y_yd3 = -795.5;
  $.save_cars2 = Garage.Create(115.1, -475.3, 15.0, 106.9, -487.1, 19.0, 17 /* GARAGE_HIDEOUT_COMMERCIAL */);
  $.bombshop2 = Garage.Create(386.0, -573.0, 25.2, 376.6, -580.1, 30.2, 2 /* GARAGE_BOMBSHOP1 */);
  $.sprayshop2 = Garage.Create(386.0, -490.0, 25.2, 376.6, -497.0, 30.2, 5 /* GARAGE_RESPRAY */);
  $.rays_prize_garage = Garage.Create(245.4, -992.2, 20.0, 234.4, -1000.5, 24.0, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.rays_prize_garage.SetRotatingDoor();
  $.witsec_garage = Garage.Create(375.0, -441.5, 20.0837, 386.0, -434.0, 25.0837, 11 /* GARAGE_FORCARTOCOMEOUTOF */);
  $.garage_km2 = Garage.Create(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 1 /* GARAGE_MISSION */);
  $.garage1_love1 = Garage.Create(63.8, -307.9, 15.2, 70.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.garage2_love1 = Garage.Create(53.0, -308.0, 15.2, 60.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.garage3_love1 = Garage.Create(24.9, -344.0, 15.2, 30.6, -337.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.garage4_love1 = Garage.Create(24.5, -355.0, 15.2, 30.6, -346.0, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.garage5_love1 = Garage.Create(52.5, -388.0, 15.2, 42.0, -374.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.garage_yd3 = Garage.Create($.garage_min_x_yd3, $.garage_min_y_yd3, 26.8, $.garage_max_x_yd3, $.garage_max_y_yd3, 31.8, 1 /* GARAGE_MISSION */);
  // VAR_INT save_cars3 bombshop3 garage_hm3 garage_hm4 escort_garage collect_all_cars2 sprayshop3
  $.save_cars3 = Garage.Create(-662.5, -47.4, 17.0, -670.7, -30.0, 22.0, 18 /* GARAGE_HIDEOUT_SUBURBAN */);
  $.save_cars3.SetRotatingDoor();
  $.save_cars3.NoSpecialCameraForThisGarage();
  $.sprayshop3 = Garage.Create(-1139.0, 37.8, 55.0, -1148.5, 32.1, 65.0, 5 /* GARAGE_RESPRAY */);
  $.bombshop3 = Garage.Create(-1078.9, 58.0, 56.0, -1086.0, 49.0, 65.0, 4 /* GARAGE_BOMBSHOP3 */);
  $.collect_all_cars2 = Garage.Create(-1117.5, 150.9, 55.0, -1097.7, 121.2, 65.0, 9 /* GARAGE_COLLECTCARS_2 */);
  $.collect_all_cars2.NoSpecialCameraForThisGarage();
  $.garage_hm3 = Garage.Create(1346.9, -315.5, 49.0, 1352.5, -310.7, 53.0, 14 /* GARAGE_MISSION_KEEPCAR */);
  $.garage_hm4 = Garage.Create(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 20 /* GARAGE_KEEPS_OPENING_FOR_SPECIFIC_CAR */);
  $.escort_garage = Garage.Create(-1049.17, -77.47, 37.8, -1037.21, -69.17, 42.8, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.escort_garage.SetRotatingDoor();
  Crane.ActivateMilitary(1570.3, -675.4, 1565.7, -686.5, 1576.8, -706.6, 1639.9, -696.7, 26.0, 0.0);
  Crane.ActivateCrusher(1119.8, 51.8, 1135.8, 56.1, 1149.8, 46.3, 1143.0, 59.9, 5.0, 180.0);
  Zone.SetPedInfo("CITYZON", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CITYZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CITYZON", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 240, 240, 240, 240, 0, 0);
  Zone.SetCarInfo("CITYZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 240, 240, 240, 240, 0, 0);
  Zone.SetGroup("CITYZON", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("CITYZON", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetPedInfo("IND_ZON", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("IND_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("IND_ZON", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 450, 0, 0);
  Zone.SetCarInfo("IND_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 450, 0, 0);
  Zone.SetGroup("IND_ZON", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("IND_ZON", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("COM_ZON", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("COM_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("COM_ZON", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 0, 300, 450, 150, 0, 0);
  Zone.SetCarInfo("COM_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 300, 450, 150, 0, 0);
  Zone.SetGroup("COM_ZON", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("COM_ZON", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetPedInfo("SUB_ZON", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_ZON", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
  Zone.SetCarInfo("SUB_ZON", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
  Zone.SetGroup("SUB_ZON", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("SUB_ZON", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetPedInfo("LITTLEI", 1 /* DAY */, 17, 300, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("LITTLEI", 0 /* NIGHT */, 11, 400, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("LITTLEI", 1 /* DAY */, 10, 100, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 350, 20, 0);
  Zone.SetCarInfo("LITTLEI", 0 /* NIGHT */, 8, 150, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 150, 0, 0);
  Zone.SetGroup("LITTLEI", 1 /* DAY */, 3 /* LITTLEITALY_PEDGRP */);
  Zone.SetGroup("LITTLEI", 0 /* NIGHT */, 4 /* LITTLEITALY_NIGHT_PEDGRP */);
  Zone.SetPedInfo("CHINA", 1 /* DAY */, 20, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CHINA", 0 /* NIGHT */, 12, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CHINA", 1 /* DAY */, 10, 0, 100, 0, 0, 0, 0, 0, 10, 400, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("CHINA", 0 /* NIGHT */, 8, 0, 150, 0, 0, 0, 0, 0, 20, 550, 0, 0, 200, 0, 0);
  Zone.SetGroup("CHINA", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("CHINA", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  Zone.SetPedInfo("TOWERS", 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("TOWERS", 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("TOWERS", 1 /* DAY */, 8, 0, 0, 100, 0, 0, 0, 0, 20, 400, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("TOWERS", 0 /* NIGHT */, 6, 0, 0, 150, 0, 0, 0, 0, 10, 550, 0, 0, 200, 0, 0);
  Zone.SetGroup("TOWERS", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  Zone.SetGroup("TOWERS", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  Zone.SetPedInfo("REDLIGH", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("REDLIGH", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("REDLIGH", 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("REDLIGH", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 20, 600, 0, 0, 200, 0, 0);
  Zone.SetGroup("REDLIGH", 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
  Zone.SetGroup("REDLIGH", 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PORT_I", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_I", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_I", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
  Zone.SetCarInfo("PORT_I", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_I", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_I", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_E", 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
  Zone.SetGroup("PORT_E", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PORT_S", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_S", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_S", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 500, 20, 0);
  Zone.SetCarInfo("PORT_S", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_S", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_S", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PORT_W", 1 /* DAY */, 10, 0, 10, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_W", 0 /* NIGHT */, 5, 0, 10, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_W", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("PORT_W", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_W", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_W", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("HARWOOD", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("HARWOOD", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("HARWOOD", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 0, 0);
  Zone.SetCarInfo("HARWOOD", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 600, 0, 0, 200, 0, 0);
  Zone.SetGroup("HARWOOD", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("HARWOOD", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("EASTBAY", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("EASTBAY", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("EASTBAY", 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 480, 0, 0);
  Zone.SetCarInfo("EASTBAY", 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 490, 0, 0);
  Zone.SetGroup("EASTBAY", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("EASTBAY", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("S_VIEW", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetPedInfo("S_VIEW", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("S_VIEW", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30, 400, 0, 0, 300, 100, 0);
  Zone.SetCarInfo("S_VIEW", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 200, 100, 0);
  Zone.SetGroup("S_VIEW", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("S_VIEW", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("COPS_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetPedInfo("COPS_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetCarInfo("COPS_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("COPS_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("COPS_1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("COPS_1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("HOSPI_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetPedInfo("HOSPI_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetCarInfo("HOSPI_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("HOSPI_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("HOSPI_1", 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
  Zone.SetGroup("HOSPI_1", 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("ROADBR1", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("ROADBR1", 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("ROADBR1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 400, 0, 100);
  Zone.SetCarInfo("ROADBR1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 100);
  Zone.SetGroup("ROADBR1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("ROADBR1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("FISHFAC", 1 /* DAY */, 2, 0, 1000, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("FISHFAC", 0 /* NIGHT */, 2, 0, 1000, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("FISHFAC", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20, 200, 0, 0, 600, 0, 0);
  Zone.SetCarInfo("FISHFAC", 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 200, 0, 0, 600, 0, 0);
  Zone.SetGroup("FISHFAC", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("FISHFAC", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("FILLIN1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("FILLIN1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("FILLIN1", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("FILLIN1", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("FILLIN1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("FILLIN1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D1", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D1", 0 /* NIGHT */, 10, 0, 500, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D1", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D1", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D1", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D1", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D2", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D2", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D2", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D2", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D2", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D2", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D3", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D3", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D3", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D3", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D3", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D3", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D4", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D4", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D4", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D4", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D4", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D4", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D5", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D5", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D5", 1 /* DAY */, 24, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D5", 0 /* NIGHT */, 18, 0, 0, 0, 0, 0, 0, 0, 10, 300, 0, 0, 400, 20, 100);
  Zone.SetGroup("MAIN_D5", 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
  Zone.SetGroup("MAIN_D5", 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);
  Zone.SetPedInfo("MAIN_D6", 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D6", 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D6", 1 /* DAY */, 24, 0, 0, 100, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D6", 0 /* NIGHT */, 18, 0, 0, 150, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D6", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  Zone.SetGroup("MAIN_D6", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  Path.SwitchRoadsOff(619.6, -911.5, 45.0, 834.3, -954.5, 32.0);
  Path.MarkRoadsBetweenLevels(619.6, -911.5, 45.0, 834.3, -954.5, 32.0);
  Path.SwitchRoadsOff(1381.0, -293.7, 48.0, 1435.8, -140.1, 58.0);
  Path.SwitchRoadsOff(1358.9, -901.9, 10.0, 1609.6, -615.1, 16.0);
  Path.SwitchRoadsOff(659.6, 200.0, -20.0, 945.8, 147.5, 5.0);
  Path.MarkRoadsBetweenLevels(659.6, 200.0, -20.0, 945.8, 147.5, 5.0);
  Path.SwitchPedRoadsOff(659.6, 200.0, -25.0, 945.8, 147.5, 5.0);
  Path.MarkRoadsBetweenLevels(659.6, 200.0, -25.0, 945.8, 147.5, 5.0);
  Path.SwitchPedRoadsOff(773.6, 191.8, -25.0, 819.7, 182.8, 5.0);
  Path.MarkRoadsBetweenLevels(773.6, 191.8, -25.0, 819.7, 182.8, 5.0);
  Path.SwitchPedRoadsOff(1609.0, -896.0, 8.0, 1393.7, -967.4, 30.0);
  Path.SwitchPedRoadsOff(1048.3, -1103.4, 5.0, 1040.0, -1074.4, 30.0);
  Path.SwitchPedRoadsOff(900.09, -297.05, 6.0, 842.83, -325.58, 15.0);
  Path.SwitchPedRoadsOff(900.5, -427.1, 14.0, 879.1, -404.2, 17.0);
  Path.SwitchPedRoadsOff(847.9, -640.6, 10.0, 887.9, -685.8, 20.0);
  Path.SwitchPedRoadsOffAngled(1222.9, -838.4, 13.5, 1256.3, -804.9, 16.0, 58.0);
  Path.SwitchPedRoadsOff(1005.59, -880.96, 12.0, 995.9, -893.34, 20.0);
  Path.SwitchPedRoadsOff(1070.6, -401.6, 10.0, 1067.8, -397.2, 25.0);
  Zone.SetPedInfo("STADIUM", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("STADIUM", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("STADIUM", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
  Zone.SetCarInfo("STADIUM", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
  Zone.SetGroup("STADIUM", 1 /* DAY */, 15 /* STADIUM_PEDGRP */);
  Zone.SetGroup("STADIUM", 0 /* NIGHT */, 16 /* STADIUM_NIGHT_PEDGRP */);
  Zone.SetPedInfo("HOSPI_2", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("HOSPI_2", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("HOSPI_2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
  Zone.SetCarInfo("HOSPI_2", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
  Zone.SetGroup("HOSPI_2", 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
  Zone.SetGroup("HOSPI_2", 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("UNIVERS", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("UNIVERS", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("UNIVERS", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 20, 0);
  Zone.SetCarInfo("UNIVERS", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 20, 0);
  Zone.SetGroup("UNIVERS", 1 /* DAY */, 23 /* UNIVERSITY_PEDGRP */);
  Zone.SetGroup("UNIVERS", 0 /* NIGHT */, 24 /* UNIVERSITY_NIGHT_PEDGRP */);
  Zone.SetPedInfo("CONSTRU", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 300, 0, 20);
  Zone.SetPedInfo("CONSTRU", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 400, 0, 10);
  Zone.SetCarInfo("CONSTRU", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 100, 0, 20, 300, 100, 0, 250, 0, 150);
  Zone.SetCarInfo("CONSTRU", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 150, 0, 10, 300, 100, 0, 250, 0, 150);
  Zone.SetGroup("CONSTRU", 1 /* DAY */, 19 /* CONSTRUCTION_PEDGRP */);
  Zone.SetGroup("CONSTRU", 0 /* NIGHT */, 20 /* CONSTRUCTION_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PARK", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("PARK", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("PARK", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("PARK", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("PARK", 1 /* DAY */, 25 /* PARK_PEDGRP */);
  Zone.SetGroup("PARK", 0 /* NIGHT */, 26 /* PARK_NIGHT_PEDGRP */);
  Zone.SetPedInfo("COM_EAS", 1 /* DAY */, 30, 0, 0, 0, 0, 300, 0, 0, 20);
  Zone.SetPedInfo("COM_EAS", 0 /* NIGHT */, 16, 0, 0, 0, 0, 400, 0, 0, 10);
  Zone.SetCarInfo("COM_EAS", 1 /* DAY */, 20, 0, 0, 0, 0, 100, 0, 0, 20, 400, 250, 0, 0, 0, 150);
  Zone.SetCarInfo("COM_EAS", 0 /* NIGHT */, 17, 0, 0, 0, 0, 150, 0, 0, 10, 400, 250, 0, 0, 0, 100);
  Zone.SetGroup("COM_EAS", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("COM_EAS", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  Zone.SetPedInfo("SHOPING", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SHOPING", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SHOPING", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
  Zone.SetCarInfo("SHOPING", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
  Zone.SetGroup("SHOPING", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("SHOPING", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  Zone.SetPedInfo("YAKUSA", 1 /* DAY */, 30, 0, 0, 0, 300, 0, 0, 0, 20);
  Zone.SetPedInfo("YAKUSA", 0 /* NIGHT */, 16, 0, 0, 0, 400, 0, 0, 0, 10);
  Zone.SetCarInfo("YAKUSA", 1 /* DAY */, 20, 0, 0, 0, 100, 0, 0, 0, 40, 350, 200, 250, 0, 0, 0);
  Zone.SetCarInfo("YAKUSA", 0 /* NIGHT */, 17, 0, 0, 0, 150, 0, 0, 0, 20, 350, 200, 200, 0, 0, 0);
  Zone.SetGroup("YAKUSA", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("YAKUSA", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  Zone.SetPedInfo("ROADBR2", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("ROADBR2", 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("ROADBR2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
  Zone.SetCarInfo("ROADBR2", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
  Zone.SetGroup("ROADBR2", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("ROADBR2", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  Path.SwitchPedRoadsOff(106.1, -1278.3, 24.0, 96.3, -1273.5, 27.0);
  Path.SwitchPedRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0);
  Path.SwitchPedRoadsOff(31.0, -317.0, 14.0, 91.0, -394.0, 25.0);
  Path.SwitchRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0);
  Path.SwitchRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  Path.SwitchPedRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  Path.SwitchRoadsOff(353.5, -459.0, 18.0, 397.5, -431.6, 30.0);
  Path.SwitchRoadsOff(465.7, -634.3, 10.0, 429.9, -610.1, 25.0);
  Path.SwitchRoadsOff(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  Path.MarkRoadsBetweenLevels(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  Path.SwitchPedRoadsOff(56.5, -1544.2, 10.0, 87.9, -1556.0, 30.0);
  Path.SwitchPedRoadsOff(413.5, -480.2, 20.0, 420.9, -499.0, 36.0);
  Path.SwitchPedRoadsOff(419.5, -708.1, 20.0, 412.5, -717.9, 36.0);
  Path.SwitchPedRoadsOff(-76.9, -985.4, 20.0, -68.8, -992.6, 36.0);
  Path.SwitchPedRoadsOff(-76.5, -934.4, 20.0, -70.4, -928.4, 36.0);
  Path.SwitchPedRoadsOff(-55.9, -934.6, 20.0, -46.4, -927.2, 36.0);
  Path.SwitchPedRoadsOff(-76.4, -999.6, 20.0, -68.8, -628.5, 36.0);
  Path.SwitchPedRoadsOff(199.3, -935.9, 20.0, 134.8, -927.4, 40.0);
  Path.SwitchRoadsOff(529.6, 106.5, -30.0, 581.4, 65.7, 0.0);
  Zone.SetPedInfo("AIRPORT", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("AIRPORT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("AIRPORT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 40, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("AIRPORT", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("AIRPORT", 1 /* DAY */, 27 /* AIRPORT_PEDGRP */);
  Zone.SetGroup("AIRPORT", 0 /* NIGHT */, 28 /* AIRPORT_NIGHT_PEDGRP */);
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 300, 0);
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 400, 0);
  Zone.SetCarInfo("PROJECT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 100, 20, 500, 150, 0, 150, 0, 0);
  Zone.SetCarInfo("PROJECT", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 150, 10, 500, 100, 0, 150, 0, 0);
  Zone.SetGroup("PROJECT", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  Zone.SetGroup("PROJECT", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  Zone.SetPedInfo("SUB_IND", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_IND", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_IND", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("SUB_IND", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("SUB_IND", 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
  Zone.SetGroup("SUB_IND", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  Zone.SetPedInfo("SWANKS", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 70, 0, 30);
  Zone.SetPedInfo("SWANKS", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 90, 0, 20);
  Zone.SetCarInfo("SWANKS", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 70, 0, 30, 0, 400, 400, 0, 20, 0);
  Zone.SetCarInfo("SWANKS", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 90, 0, 20, 0, 400, 400, 0, 20, 0);
  Zone.SetGroup("SWANKS", 1 /* DAY */, 29 /* SWANKSVILLE_PEDGRP */);
  Zone.SetGroup("SWANKS", 0 /* NIGHT */, 30 /* SWANKSVILLE_NIGHT_PEDGRP */);
  Zone.SetPedInfo("BIG_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("BIG_DAM", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("BIG_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 0, 300, 0, 0);
  Zone.SetCarInfo("BIG_DAM", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 0, 300, 0, 0);
  Zone.SetGroup("BIG_DAM", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("BIG_DAM", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  Zone.SetPedInfo("SUB_ZO2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_ZO2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_ZO2", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
  Zone.SetCarInfo("SUB_ZO2", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
  Zone.SetGroup("SUB_ZO2", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("SUB_ZO2", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetPedInfo("SUB_ZO3", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_ZO3", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_ZO3", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
  Zone.SetCarInfo("SUB_ZO3", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
  Zone.SetGroup("SUB_ZO3", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("SUB_ZO3", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetPedInfo("WEE_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 100, 0, 0);
  Zone.SetPedInfo("WEE_DAM", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 100, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 1 /* DAY */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("WEE_DAM", 0 /* NIGHT */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetGroup("WEE_DAM", 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
  Zone.SetGroup("WEE_DAM", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  Path.SwitchRoadsOff(-1052.6693, -78.0430, 50.0, -988.0153, -67.1608, 30.0);
  Path.SwitchPedRoadsOff(-1052.6693, -78.0430, 50.0, -988.0153, -67.1608, 30.0);
  Path.SwitchRoadsOff(-952.5, 361.4, 10.0, -939.3, 374.0, 30.0);
  Path.SwitchRoadsOff(-241.7, 251.8, 0.0, -256.2, 241.4, 20.0);
  Path.SwitchRoadsOff(-1367.7690, -731.4872, 20.0, -743.1906, -410.1961, 5.0);
  Path.SwitchRoadsOff(-1591.4, -931.5, 10.0, -1572.9, -914.6, 25.0);
  Path.SwitchPedRoadsOff(-1310.8053, -568.7556, 5.0, -1224.9248, -483.4936, 20.0);
  Path.SwitchRoadsOff(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);
  Path.MarkRoadsBetweenLevels(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);
  Path.SwitchRoadsOff(-287.8, 396.5, 70.0, -269.0, 418.0, 100.0);
  Path.SwitchRoadsOff(-877.1, 545.9, 60.0, -901.3, 575.0, 100.0);
  Path.SwitchRoadsOff(-690.4, 101.2, 10.0, -704.4, 78.9, 30.0);
  Path.SwitchRoadsOff(-1194.1, 98.6, 50.0, -1234.0, 119.2, 80.0);
  // GOSUB_FILE car_generators car_gen.sc
  $.joeys_buggy = CarGenerator.Create(930.93, -267.63, -100.0, 340.0, 107 /* CAR_BFINJECT */, -1, -1, 0, 100, 0, 0, 10000);
  $.joeys_buggy.Switch(0);
  $.swank_taxi = CarGenerator.Create(933.7, -65.6, -100.0, 0.0, 141 /* CAR_BORGNINE */, -1, -1, 0, 50, 0, 0, 10000);
  $.swank_taxi.Switch(0);
  // GOSUB_FILE main_pickups pickups.sc
  // VAR_INT ammu_shop_bloke1
  // VAR_INT time_difference current_time time_since_murdering_shopkeeper1
  // VAR_INT SHOP_COLT45 SHOP_COLT45_2 SHOP_UZI SHOP_UZI2
  // VAR_INT SHOP_GRENADE2 SHOP_UZI_2 SHOP_SNIPER_2 SHOP_AK47_2 SHOP_ARMOUR
  // VAR_INT out_of_stock_uzi out_of_stock_pistol SHOP_FLAME SHOP_MOLOTOV
  $.SHOP_COLT45 = Pickup.Create(154 /* WEAPON_COLT45 */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1068.5, -400.8, 15.2);
  $.SHOP_UZI = Pickup.Create(159 /* WEAPON_UZI */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1070.5, -400.8, 15.2);
  $.SHOP_AK47_2 = Pickup.Create(152 /* WEAPON_AK47 */, 1 /* PICKUP_IN_SHOP */, 342.5, -713.0, 26.4);
  $.SHOP_SNIPER_2 = Pickup.Create(158 /* WEAPON_SNIPER */, 1 /* PICKUP_IN_SHOP */, 342.5, -716.0, 26.4);
  $.SHOP_GRENADE2 = Pickup.Create(151 /* WEAPON_GRENADE */, 1 /* PICKUP_IN_SHOP */, 344.5, -719.0, 26.4);
  $.SHOP_UZI_2 = Pickup.Create(159 /* WEAPON_UZI */, 1 /* PICKUP_IN_SHOP */, 346.5, -719.0, 26.4);
  $.SHOP_ARMOUR = Pickup.Create(bodyarmour, 1 /* PICKUP_IN_SHOP */, 342.5, -719.0, 26.4);
  $.SHOP_FLAME = Pickup.Create(162 /* WEAPON_FLAME */, 1 /* PICKUP_IN_SHOP */, -1206.6, -6.6, 53.3);
  $.SHOP_MOLOTOV = Pickup.Create(155 /* WEAPON_MOLOTOV */, 1 /* PICKUP_IN_SHOP */, -1210.6, -6.6, 53.3);
  Game.SetCollectableTotal(0);
  Game.CreateCollectable(1105.3, -1020.0, 25.1);
  Game.CreateCollectable(877.6, -788.0, 27.6);
  Game.CreateCollectable(1254.0, -611.2, 22.8);
  Game.CreateCollectable(1045.8, -967.1, 16.0);
  Game.CreateCollectable(942.1, -793.4, 14.9);
  Game.CreateCollectable(934.0, -718.9, 14.8);
  Game.CreateCollectable(898.1, -414.7, 26.5);
  Game.CreateCollectable(846.9, -442.5, 23.2);
  Game.CreateCollectable(927.1, -404.4, 29.1);
  Game.CreateCollectable(864.3, -171.5, 3.5);
  Game.CreateCollectable(1538.3, -174.4, 19.2);
  Game.CreateCollectable(1213.1, -127.1, 15.1);
  Game.CreateCollectable(753.6, 137.0, 3.5);
  Game.CreateCollectable(1162.0, -101.8, 12.0);
  Game.CreateCollectable(1155.6, -191.5, 14.4);
  Game.CreateCollectable(1285.5, -247.5, 42.4);
  Game.CreateCollectable(1007.2, -219.6, 6.7);
  Game.CreateCollectable(1138.2, -250.0, 24.3);
  Game.CreateCollectable(1023.6, -423.7, 14.9);
  Game.CreateCollectable(1237.5, -854.1, 20.6);
  Game.CreateCollectable(1478.3, -1150.7, 12.0);
  Game.CreateCollectable(1018.9, -56.8, 21.0);
  Game.CreateCollectable(1465.7, -166.5, 55.5);
  Game.CreateCollectable(1120.2, -926.2, 16.0);
  Game.CreateCollectable(1206.5, -821.5, 15.0);
  Game.CreateCollectable(940.2, -199.9, 5.0);
  Game.CreateCollectable(979.3, -1143.1, 13.1);
  Game.CreateCollectable(1195.5, -908.8, 14.9);
  Game.CreateCollectable(1470.4, -811.4, 22.4);
  Game.CreateCollectable(1320.5, -365.5, 15.2);
  Game.CreateCollectable(932.6, -477.3, -10.8);
  Game.CreateCollectable(1305.9, -380.9, 39.5);
  Game.CreateCollectable(938.2, -1258.3, 3.5);
  Game.CreateCollectable(36.8, -530.2, 26.0);
  Game.CreateCollectable(414.4, -279.3, 23.6);
  Game.CreateCollectable(203.5, -1252.6, 59.3);
  Game.CreateCollectable(77.7, -352.3, 16.1);
  Game.CreateCollectable(120.9, 243.7, 11.4);
  Game.CreateCollectable(49.4, 36.3, 16.7);
  Game.CreateCollectable(68.1, -773.3, 22.8);
  Game.CreateCollectable(-4.0, -1129.1, 26.0);
  Game.CreateCollectable(-134.7, -1386.9, 26.2);
  Game.CreateCollectable(-23.5, -1472.4, 19.7);
  Game.CreateCollectable(112.1, -1227.6, 26.0);
  Game.CreateCollectable(218.3, -1237.8, 20.4);
  Game.CreateCollectable(308.0, -1533.4, 23.6);
  Game.CreateCollectable(468.6, -1457.2, 44.3);
  Game.CreateCollectable(355.1, -1085.7, 25.9);
  Game.CreateCollectable(312.4, -483.8, 29.0);
  Game.CreateCollectable(322.3, -447.1, 23.4);
  Game.CreateCollectable(586.7, -795.0, 1.6);
  Game.CreateCollectable(504.3, -1027.8, 1.7);
  Game.CreateCollectable(174.1, -1259.5, 32.1);
  Game.CreateCollectable(248.8, -958.3, 26.0);
  Game.CreateCollectable(54.8, -566.5, 26.1);
  Game.CreateCollectable(-77.0, -1490.1, 26.0);
  Game.CreateCollectable(556.0, -231.4, 22.8);
  Game.CreateCollectable(-38.2, -1434.3, 31.8);
  Game.CreateCollectable(194.8, -0.5, 19.8);
  Game.CreateCollectable(223.1, -272.2, 16.1);
  Game.CreateCollectable(-18.1, -222.3, 29.8);
  Game.CreateCollectable(-69.3, -469.2, 16.1);
  Game.CreateCollectable(-270.7, -631.6, 72.3);
  Game.CreateCollectable(-59.2, -579.8, 15.9);
  Game.CreateCollectable(392.8, -1135.6, 15.9);
  Game.CreateCollectable(145.0, -1584.0, 30.7);
  Game.CreateCollectable(428.1, -340.4, 16.2);
  Game.CreateCollectable(351.1, -980.5, 33.1);
  Game.CreateCollectable(-221.8, -1487.6, 5.8);
  Game.CreateCollectable(-1193.1, -75.8, 47.4);
  Game.CreateCollectable(-1090.5, 131.7, 58.7);
  Game.CreateCollectable(-1015.5, -13.0, 49.1);
  Game.CreateCollectable(-821.8, -184.9, 33.8);
  Game.CreateCollectable(-849.1, -209.4, 41.8);
  Game.CreateCollectable(-736.4, 304.7, 54.1);
  Game.CreateCollectable(-678.1, 308.6, 59.8);
  Game.CreateCollectable(-609.2, 286.7, 65.1);
  Game.CreateCollectable(-329.6, 320.1, 60.7);
  Game.CreateCollectable(-1221.1, 562.8, 68.6);
  Game.CreateCollectable(-1131.9, 605.4, 68.6);
  Game.CreateCollectable(-1098.4, 471.3, 35.5);
  Game.CreateCollectable(-1208.1, 325.2, 3.4);
  Game.CreateCollectable(-1216.2, 347.9, 30.4);
  Game.CreateCollectable(-1211.9, -166.9, 58.7);
  Game.CreateCollectable(-1195.2, -7.7, 59.8);
  Game.CreateCollectable(-206.9, 328.8, 3.4);
  Game.CreateCollectable(-753.2, 142.0, 10.1);
  Game.CreateCollectable(-697.9, -182.1, 9.2);
  Game.CreateCollectable(-748.4, -807.0, -13.6);
  Game.CreateCollectable(-489.9, -44.9, 3.8);
  Game.CreateCollectable(-632.9, 67.6, 18.8);
  Game.CreateCollectable(-546.8, 10.7, 3.9);
  Game.CreateCollectable(-1032.6, -573.4, 10.9);
  Game.CreateCollectable(-542.0, -1046.6, 3.4);
  Game.CreateCollectable(-1556.4, -905.8, 14.5);
  Game.CreateCollectable(-1327.0, -624.7, 11.1);
  Game.CreateCollectable(-737.4, -745.4, 9.7);
  Game.CreateCollectable(-1278.7, -776.0, 11.1);
  Game.CreateCollectable(-1494.7, -1097.3, 3.4);
  Game.CreateCollectable(-837.8, -469.2, 10.8);
  // VAR_INT sound_loop1 sound_loop2 sound_loop3 sound_loop4 sound_loop5 sound_loop6 sound_loop7 sound_loop8 sound_loop9 sound_loop10
  // VAR_INT sound_loop11 sound_loop12 sound_loop13 sound_loop14 sound_loop15 sound_loop16 sound_loop17 sound_loop18 sound_loop19 sound_loop20
  // VAR_INT misty_joey_loop
  $.sound_loop1 = Sound.AddContinuous(850.8, -663.7, 15.0, 41 /* SOUND_LAUNDERETTE_LOOP_L */);
  $.sound_loop2 = Sound.AddContinuous(913.6, -805.5, 15.0, 42 /* SOUND_RESTAURANT_CHINATOWN_LOOP_S */);
  $.sound_loop3 = Sound.AddContinuous(970.0, -674.8, 15.0, 53 /* SOUND_SHOP_LOOP_L */);
  $.sound_loop4 = Sound.AddContinuous(975.1, -724.0, 15.0, 53 /* SOUND_SHOP_LOOP_L */);
  $.sound_loop5 = Sound.AddContinuous(1220.0, -310.0, 32.0, 44 /* SOUND_RESTAURANT_ITALY_LOOP_S */);
  $.sound_loop6 = Sound.AddContinuous(1318.4, -463.6, 57.0, 48 /* SOUND_RESTAURANT_GENERIC_LOOP_2_S */);
  $.sound_loop13 = Sound.AddContinuous(1579.8, -655.2, 13.0, 57 /* SOUND_DOCKS_LOOP_L */);
  $.sound_loop14 = Sound.AddContinuous(1504.8, -873.2, 19.0, 57 /* SOUND_DOCKS_LOOP_L */);
  $.sound_loop15 = Sound.AddContinuous(962.3, -259.7, 10.0, 59 /* SOUND_HOME_LOOP_1_L */);
  $.sound_loop16 = Sound.AddContinuous(952.5, -148.2, 8.0, 7 /* SOUND_CLUB_LOOP_2_L */);
  $.sound_loop17 = Sound.AddContinuous(861.5, -247.2, 8.0, 5 /* SOUND_CLUB_LOOP_1_L */);
  $.sound_loop18 = Sound.AddContinuous(1469.0, -181.0, 56.0, 60 /* SOUND_PIANO_BAR_LOOP_1_S */);
  $.sound_loop19 = Sound.AddContinuous(1120.7, -1023.3, 23.0, 37 /* SOUND_SAWMILL_LOOP_L */);
  $.sound_loop20 = Sound.AddContinuous(-744.7, -604.1, 10.0, 51 /* SOUND_AIRPORT_LOOP_L */);
  // VAR_INT player
  // VAR_INT micky
  // VAR_INT luigi
  // VAR_INT joey
  // VAR_INT toni
  // VAR_INT frankie
  // VAR_INT maria
  // VAR_INT catalina
  // VAR_INT miguel
  // VAR_INT lips
  // VAR_INT chunky
  // VAR_INT misty
  // VAR_INT asuka
  // VAR_INT kenji
  // VAR_INT ray
  // VAR_INT love
  // VAR_INT joeys_ride
  // VAR_INT cs_time
  // VAR_INT cs_player
  // VAR_INT cs_eight
  // VAR_INT cs_micky
  // VAR_INT cs_luigi
  // VAR_INT cs_joey
  // VAR_INT cs_tony
  // VAR_INT cs_frankie
  // VAR_INT cs_maria
  // VAR_INT cs_catalina
  // VAR_INT cs_miguel
  // VAR_INT cs_misty
  // VAR_INT cs_ludoor
  // VAR_INT cs_joedoor
  // VAR_INT cs_eitdoor
  // VAR_INT cs_mafia
  // VAR_INT cs_ship
  // VAR_INT cs_gangplank
  // VAR_INT cs_catcar
  // VAR_INT cs_curly
  // VAR_INT cs_shopdoor
  // VAR_INT cs_rifle
  // VAR_INT cs_bomb
  // VAR_INT cs_note
  // VAR_INT cs_troll
  // VAR_INT cs_case
  // VAR_INT cs_mickyhead
  // VAR_INT cs_playerhead
  // VAR_INT cs_eighthead
  // VAR_INT cs_luigihead
  // VAR_INT cs_joeyhead
  // VAR_INT cs_tonyhead
  // VAR_INT cs_mistyhead
  // VAR_INT cs_frankiehead
  // VAR_INT cs_mariahead
  // VAR_INT flag_failed_luigi1
  $.flag_failed_luigi1 = 0;
  // VAR_INT cs_asuka
  // VAR_INT cs_kenji
  // VAR_INT cs_ray
  // VAR_INT cs_love
  // VAR_INT cs_phil
  // VAR_INT cs_yakuza
  // VAR_INT cs_butler
  // VAR_INT cs_keeper
  // VAR_INT cs_asukahead
  // VAR_INT cs_kenjihead
  // VAR_INT cs_rayhead
  // VAR_INT cs_lovehead
  // VAR_INT cs_philhead
  // VAR_INT cs_butlerhead
  // VAR_INT cs_catalinahead
  // VAR_INT cs_miguelhead
  // VAR_INT cs_curlyhead
  // VAR_INT cs_keeperhead
  // VAR_INT cs_colub1 cs_colub2 cs_colub3 cs_colub4
  $.player = Player.Create(0, 811.90, -939.95, 35.8);
  $.player.SetHeading(180.0);
  $.script_controlled_player = $.player.GetChar();
  Gang.SetCarModel(0 /* GANG_MAFIA */, 127 /* CAR_MAFIA */);
  Gang.SetCarModel(1 /* GANG_TRIAD */, 125 /* CAR_BELLYUP */);
  Gang.SetCarModel(2 /* GANG_DIABLO */, 130 /* CAR_DIABLOS */);
  Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 2 /* WEAPONTYPE_PISTOL */);
  Gang.SetWeapons(1 /* GANG_TRIAD */, 2 /* WEAPONTYPE_PISTOL */, 1 /* WEAPONTYPE_BASEBALLBAT */);
  Gang.SetWeapons(2 /* GANG_DIABLO */, 1 /* WEAPONTYPE_BASEBALLBAT */, 0 /* WEAPONTYPE_UNARMED */);
  Game.SetThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 0 /* THREAT_PLAYER1 */);
  Gang.SetCarModel(3 /* GANG_YAKUZA */, 129 /* CAR_YAKUZA */);
  Gang.SetCarModel(5 /* GANG_COLOMBIAN */, 131 /* CAR_COLUMB */);
  Gang.SetCarModel(4 /* GANG_YARDIE */, 128 /* CAR_YARDIE */);
  Gang.SetWeapons(3 /* GANG_YAKUZA */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */);
  Gang.SetWeapons(5 /* GANG_COLOMBIAN */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */);
  Gang.SetWeapons(4 /* GANG_YARDIE */, 1 /* WEAPONTYPE_BASEBALLBAT */, 2 /* WEAPONTYPE_PISTOL */);
  Gang.SetCarModel(6 /* GANG_HOOD */, 132 /* CAR_HOODS */);
  Gang.SetWeapons(6 /* GANG_HOOD */, 3 /* WEAPONTYPE_UZI */, 2 /* WEAPONTYPE_PISTOL */);
  // VAR_INT flag_player_on_mission
  // VAR_INT flag_industrial_passed
  // VAR_INT flag_commercial_passed
  // VAR_INT flag_suburban_passed
  $.flag_player_on_mission = 0;
  $.flag_industrial_passed = 0;
  $.flag_commercial_passed = 0;
  $.flag_suburban_passed = 0;
  // VAR_INT luigi_contact_blip
  // VAR_INT joey_contact_blip
  // VAR_INT toni_contact_blip
  // VAR_INT frankie_contact_blip
  // VAR_INT diablo_contact_blip
  // VAR_INT asuka_contact_blip
  // VAR_INT kenji_contact_blip
  // VAR_INT ray_contact_blip
  // VAR_INT love_contact_blip
  // VAR_INT yardie_contact_blip
  // VAR_INT maria_contact_blip
  // VAR_INT eightball_contact_blip
  // VAR_INT hood_contact_blip
  // VAR_INT meat_contact_blip
  // VAR_INT industrail_save_blip commercial_save_blip suburban_save_blip
  // VAR_INT created_ind_blip_before created_com_blip_before created_sub_blip_before
  $.created_ind_blip_before = 0;
  $.created_com_blip_before = 0;
  $.created_sub_blip_before = 0;
  // VAR_INT flag_player_on_eightball_mission
  // VAR_INT flag_player_on_luigi_mission
  // VAR_INT flag_player_on_joey_mission
  // VAR_INT flag_player_on_toni_mission
  // VAR_INT flag_player_on_frankie_mission
  // VAR_INT flag_player_on_diablo_mission
  // VAR_INT flag_player_on_asuka_mission
  // VAR_INT flag_player_on_kenji_mission
  // VAR_INT flag_player_on_love_mission
  // VAR_INT flag_player_on_yardie_mission
  // VAR_INT flag_player_on_ray_mission
  // VAR_INT flag_player_on_asuka_suburban_mission
  // VAR_INT flag_player_on_hood_mission
  // VAR_INT flag_player_on_meat_mission
  $.flag_player_on_eightball_mission = 0;
  $.flag_player_on_luigi_mission = 0;
  $.flag_player_on_joey_mission = 0;
  $.flag_player_on_toni_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  $.flag_player_on_diablo_mission = 0;
  $.flag_player_on_asuka_mission = 0;
  $.flag_player_on_kenji_mission = 0;
  $.flag_player_on_love_mission = 0;
  $.flag_player_on_yardie_mission = 0;
  $.flag_player_on_ray_mission = 0;
  $.flag_player_on_asuka_suburban_mission = 0;
  $.flag_player_on_hood_mission = 0;
  $.flag_player_on_meat_mission = 0;
  // DECLARE_MISSION_FLAG($.flag_player_on_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(12 /* CONTACT_8BALL */, $.flag_player_on_eightball_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(0 /* CONTACT_LUIGI */, $.flag_player_on_luigi_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(1 /* CONTACT_JOEY */, $.flag_player_on_joey_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(2 /* CONTACT_TONI */, $.flag_player_on_toni_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(3 /* CONTACT_FRANKIE */, $.flag_player_on_frankie_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(13 /* CONTACT_HISPANIC */, $.flag_player_on_diablo_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(4 /* CONTACT_ASUKA */, $.flag_player_on_asuka_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(5 /* CONTACT_KENJI */, $.flag_player_on_kenji_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(7 /* CONTACT_LOVE */, $.flag_player_on_love_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(14 /* CONTACT_YARDIE */, $.flag_player_on_yardie_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(6 /* CONTACT_RAY */, $.flag_player_on_ray_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(10 /* CONTACT_ASUKA_SUBURBAN */, $.flag_player_on_asuka_suburban_mission);
  // DECLARE_MISSION_FLAG_FOR_CONTACT(15 /* CONTACT_HOODS */, $.flag_player_on_hood_mission);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(12 /* CONTACT_8BALL */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(0 /* CONTACT_LUIGI */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(1 /* CONTACT_JOEY */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(2 /* CONTACT_TONI */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(3 /* CONTACT_FRANKIE */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(13 /* CONTACT_HISPANIC */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(4 /* CONTACT_ASUKA */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(5 /* CONTACT_KENJI */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(7 /* CONTACT_LOVE */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(14 /* CONTACT_YARDIE */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(6 /* CONTACT_RAY */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(10 /* CONTACT_ASUKA_SUBURBAN */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(9 /* CONTACT_RAY_SUBURBAN */, 1000);
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(15 /* CONTACT_HOODS */, 1000);
  // SET_DEATHARREST_STATE(1 /* ON */);
  // VAR_INT flag_eightball_mission_passed
  // VAR_INT flag_eightball_mission_launched
  // VAR_INT flag_eightball_switched_off
  $.flag_eightball_mission_passed = 0;
  $.flag_eightball_mission_launched = 0;
  $.flag_eightball_switched_off = 0;
  // VAR_INT flag_luigi_mission1_passed
  // VAR_INT flag_luigi_mission2_passed
  // VAR_INT flag_luigi_mission3_passed
  // VAR_INT flag_luigi_mission4_passed
  // VAR_INT flag_luigi_mission5_passed
  // VAR_INT flag_all_luigi_missions_passed
  $.flag_luigi_mission1_passed = 0;
  $.flag_luigi_mission2_passed = 0;
  $.flag_luigi_mission3_passed = 0;
  $.flag_luigi_mission4_passed = 0;
  $.flag_luigi_mission5_passed = 0;
  $.flag_all_luigi_missions_passed = 0;
  // VAR_INT flag_joey_mission1_passed
  // VAR_INT flag_joey_mission2_passed
  // VAR_INT flag_joey_mission3_passed
  // VAR_INT flag_joey_mission4_passed
  // VAR_INT flag_joey_mission5_passed
  // VAR_INT flag_joey_mission6_passed
  // VAR_INT flag_all_joey_missions_passed
  $.flag_joey_mission1_passed = 0;
  $.flag_joey_mission2_passed = 0;
  $.flag_joey_mission3_passed = 0;
  $.flag_joey_mission4_passed = 0;
  $.flag_joey_mission5_passed = 0;
  $.flag_joey_mission6_passed = 0;
  $.flag_all_joey_missions_passed = 0;
  // VAR_INT flag_toni_mission1_passed
  // VAR_INT flag_toni_mission2_passed
  // VAR_INT flag_toni_mission3_passed
  // VAR_INT flag_toni_mission4_passed
  // VAR_INT flag_toni_mission5_passed
  // VAR_INT flag_all_toni_missions_passed
  $.flag_toni_mission1_passed = 0;
  $.flag_toni_mission2_passed = 0;
  $.flag_toni_mission3_passed = 0;
  $.flag_toni_mission4_passed = 0;
  $.flag_toni_mission5_passed = 0;
  $.flag_all_toni_missions_passed = 0;
  // VAR_INT flag_frankie_mission1_passed
  // VAR_INT flag_frankie_mission2_passed
  // VAR_INT flag_frankie_mission2.1_passed
  // VAR_INT flag_frankie_mission3_passed
  // VAR_INT flag_frankie_mission4_passed
  // VAR_INT flag_frankie_switched_off
  // VAR_INT flag_all_frankie_missions_passed
  // VAR_INT flag_frankie_mission3_part2_launched
  // VAR_INT flag_player_had_cut1_fm3
  $.flag_frankie_mission3_part2_launched = 0;
  $.flag_frankie_mission1_passed = 0;
  $.flag_frankie_mission2_passed = 0;
  $.flag_frankie_mission2_1_passed = 0;
  $.flag_frankie_mission3_passed = 0;
  $.flag_frankie_mission4_passed = 0;
  $.flag_frankie_switched_off = 0;
  $.flag_all_frankie_missions_passed = 0;
  $.flag_player_had_cut1_fm3 = 0;
  // VAR_INT flag_final_mission1_passed
  // VAR_INT flag_final_mission1_launched
  $.flag_final_mission1_passed = 0;
  $.flag_final_mission1_launched = 0;
  // VAR_INT flag_diablo_mission1_passed
  // VAR_INT flag_diablo_mission2_passed
  // VAR_INT flag_diablo_mission3_passed
  // VAR_INT flag_diablo_mission4_passed
  // VAR_INT flag_diablo_switched_off
  // VAR_INT flag_all_diablo_missions_passed
  // VAR_INT switch_gang_diablo_off
  // VAR_INT flag_diablo1_phone_message
  // VAR_INT flag_diablo2_phone_message
  // VAR_INT flag_diablo3_phone_message
  // VAR_INT flag_diablo4_phone_message
  $.flag_diablo_mission1_passed = 0;
  $.flag_diablo_mission2_passed = 0;
  $.flag_diablo_mission3_passed = 0;
  $.flag_diablo_mission4_passed = 0;
  $.flag_diablo_switched_off = 0;
  $.flag_all_diablo_missions_passed = 0;
  $.flag_diablo1_phone_message = 0;
  $.flag_diablo2_phone_message = 0;
  $.flag_diablo3_phone_message = 0;
  $.flag_diablo4_phone_message = 0;
  // VAR_INT flag_meat_mission1_passed
  // VAR_INT flag_meat_mission2_passed
  // VAR_INT flag_meat_mission3_passed
  // VAR_INT flag_meat_mission4_passed
  // VAR_INT flag_meat_phone_ringing
  // VAR_INT flag_meat1_phone_message
  // VAR_INT flag_meat2_phone_message
  // VAR_INT flag_meat3_phone_message
  // VAR_INT flag_meat4_phone_message
  $.flag_meat_mission1_passed = 0;
  $.flag_meat_mission2_passed = 0;
  $.flag_meat_mission3_passed = 0;
  $.flag_meat_mission4_passed = 0;
  $.flag_meat_phone_ringing = 0;
  $.flag_meat1_phone_message = 0;
  $.flag_meat2_phone_message = 0;
  $.flag_meat3_phone_message = 0;
  $.flag_meat4_phone_message = 0;
  // VAR_INT Diablo_phone
  // VAR_INT blip_diablo_created_before
  // VAR_INT flag_diablo1_passed_before
  $.flag_diablo1_passed_before = 0;
  $.blip_diablo_created_before = 0;
  $.Diablo_phone = Phone.Grab(937.9, -230.1);
  // VAR_INT meat_phone
  $.meat_phone = Phone.Grab(1224.46, -839.78);
  // VAR_INT yardie_phone pager_yardie_diplayed
  // VAR_INT blip_yardie_created_before
  $.pager_yardie_diplayed = 0;
  $.yardie_phone = Phone.Grab(120.0, -272.0);
  // VAR_INT Ray_phone1 Ray_phone2 Ray_phone3 Ray_phone4
  $.Ray_phone1 = Phone.Grab(229.1, -1537.6);
  $.Ray_phone2 = Phone.Grab(-53.5, -699.0);
  $.Ray_phone3 = Phone.Grab(204.7, -135.1);
  $.Ray_phone4 = Phone.Grab(60.2, -964.8);
  // VAR_INT hood_phone
  // VAR_INT flag_blip_hood_created
  // VAR_INT flag_hood1_phone_message
  // VAR_INT flag_hood2_phone_message
  // VAR_INT flag_hood3_phone_message
  // VAR_INT flag_hood4_phone_message
  // VAR_INT flag_hood5_phone_message
  $.flag_blip_hood_created = 0;
  $.flag_hood1_phone_message = 0;
  $.flag_hood2_phone_message = 0;
  $.flag_hood3_phone_message = 0;
  $.flag_hood4_phone_message = 0;
  $.flag_hood5_phone_message = 0;
  $.hood_phone = Phone.Grab(-443.5, -6.6);
  // VAR_INT flag_asuka_mission1_passed
  // VAR_INT flag_asuka_mission2_passed
  // VAR_INT flag_asuka_mission3_passed
  // VAR_INT flag_asuka_mission4_passed
  // VAR_INT flag_asuka_mission5_passed
  // VAR_INT flag_all_asuka_missions_passed
  $.flag_asuka_mission1_passed = 0;
  $.flag_asuka_mission2_passed = 0;
  $.flag_asuka_mission3_passed = 0;
  $.flag_asuka_mission4_passed = 0;
  $.flag_asuka_mission5_passed = 0;
  $.flag_all_asuka_missions_passed = 0;
  // VAR_INT flag_ray_mission1_passed
  // VAR_INT flag_ray_mission2_passed
  // VAR_INT flag_ray_mission3_passed
  // VAR_INT flag_ray_mission4_passed
  // VAR_INT flag_ray_mission5_passed
  // VAR_INT flag_ray_mission6_passed
  // VAR_INT flag_all_ray_missions_passed
  $.flag_ray_mission1_passed = 0;
  $.flag_ray_mission2_passed = 0;
  $.flag_ray_mission3_passed = 0;
  $.flag_ray_mission4_passed = 0;
  $.flag_ray_mission5_passed = 0;
  $.flag_ray_mission6_passed = 0;
  $.flag_all_ray_missions_passed = 0;
  // VAR_INT flag_kenji_mission1_passed
  // VAR_INT flag_kenji_mission2_passed
  // VAR_INT flag_kenji_mission3_passed
  // VAR_INT flag_kenji_mission4_passed
  // VAR_INT flag_kenji_mission5_passed
  // VAR_INT flag_all_kenji_missions_passed
  $.flag_kenji_mission1_passed = 0;
  $.flag_kenji_mission2_passed = 0;
  $.flag_kenji_mission3_passed = 0;
  $.flag_kenji_mission4_passed = 0;
  $.flag_kenji_mission5_passed = 0;
  $.flag_all_kenji_missions_passed = 0;
  // VAR_INT flag_love_mission1_passed
  // VAR_INT flag_love_mission2_passed
  // VAR_INT flag_love_mission3_passed
  // VAR_INT flag_love1_launched
  $.flag_love1_launched = 0;
  $.flag_love_mission1_passed = 0;
  $.flag_love_mission2_passed = 0;
  $.flag_love_mission3_passed = 0;
  // VAR_INT flag_yardie_mission1_passed
  // VAR_INT flag_yardie_mission2_passed
  // VAR_INT flag_yardie_mission3_passed
  // VAR_INT flag_yardie_mission4_passed
  // VAR_INT flag_yardie_switched_off
  // VAR_INT flag_all_yardie_missions_passed
  // VAR_INT flag_yardie1_phone_message
  // VAR_INT flag_yardie2_phone_message
  // VAR_INT flag_yardie3_phone_message
  // VAR_INT flag_yardie4_phone_message
  $.flag_yardie_mission1_passed = 0;
  $.flag_yardie_mission2_passed = 0;
  $.flag_yardie_mission3_passed = 0;
  $.flag_yardie_mission4_passed = 0;
  $.flag_yardie_switched_off = 0;
  $.flag_all_yardie_missions_passed = 0;
  $.flag_yardie1_phone_message = 0;
  $.flag_yardie2_phone_message = 0;
  $.flag_yardie3_phone_message = 0;
  $.flag_yardie4_phone_message = 0;
  // VAR_INT flag_love_mission4_passed
  // VAR_INT flag_love_mission5_passed
  // VAR_INT flag_love_mission6_passed
  // VAR_INT flag_love_mission7_passed
  // VAR_INT flag_all_love_missions_passed
  $.flag_love_mission4_passed = 0;
  $.flag_love_mission5_passed = 0;
  $.flag_love_mission6_passed = 0;
  $.flag_love_mission7_passed = 0;
  $.flag_all_love_missions_passed = 0;
  // VAR_INT flag_asuka_suburban_mission1_passed
  // VAR_INT flag_asuka_suburban_mission2_passed
  // VAR_INT flag_asuka_suburban_mission3_passed
  // VAR_INT flag_asuka_suburban_mission4_passed
  // VAR_INT flag_all_asuka_suburban_missions_passed
  $.flag_asuka_suburban_mission1_passed = 0;
  $.flag_asuka_suburban_mission2_passed = 0;
  $.flag_asuka_suburban_mission3_passed = 0;
  $.flag_asuka_suburban_mission4_passed = 0;
  $.flag_all_asuka_suburban_missions_passed = 0;
  // VAR_INT flag_hood_mission1_passed
  // VAR_INT flag_hood_mission2_passed
  // VAR_INT flag_hood_mission3_passed
  // VAR_INT flag_hood_mission4_passed
  // VAR_INT flag_hood_mission5_passed
  // VAR_INT flag_hood_switched_off
  // VAR_INT flag_all_hood_missions_passed
  // VAR_INT flag_done_drive_by_help
  $.flag_done_drive_by_help = 0;
  $.flag_hood_mission1_passed = 0;
  $.flag_hood_mission2_passed = 0;
  $.flag_hood_mission3_passed = 0;
  $.flag_hood_mission4_passed = 0;
  $.flag_hood_mission5_passed = 0;
  $.flag_hood_switched_off = 0;
  $.flag_all_hood_missions_passed = 0;
  // VAR_INT flag_player_on_cat_mission
  // VAR_INT flag_cat_mission1_passed
  // VAR_INT flag_cat_mission2_passed
  $.flag_player_on_cat_mission = 0;
  $.flag_cat_mission1_passed = 0;
  $.flag_cat_mission2_passed = 0;
  // VAR_INT been_in_ambulance_before flag_player_on_ambulance_mission
  // VAR_INT been_in_a_firetruk_before flag_player_on_fire_mission
  // VAR_INT been_in_a_copcar_before flag_player_on_cop_mission
  // VAR_INT passed_usj_counter
  // VAR_INT got_siren_help_before
  $.got_siren_help_before = 0;
  $.passed_usj_counter = 0;
  // VAR_INT flag_4x4_mission1_passed flag_4x4_mission2_passed flag_4x4_mission3_passed flag_mayhem_mission1_passed
  // VAR_INT flag_4x4one_trigger flag_4x4two_trigger flag_4x4three_trigger flag_mayhem_trigger
  // VAR_INT record_4x4_one record_4x4_two record_4x4_three record_mayhem record_temp
  // VAR_INT flag_intro1_before flag_intro2_before flag_intro3_before flag_intro_mayhem_before
  $.flag_intro1_before = 0;
  $.flag_intro2_before = 0;
  $.flag_intro3_before = 0;
  $.flag_intro_mayhem_before = 0;
  $.flag_4x4_mission1_passed = 0;
  $.flag_4x4_mission2_passed = 0;
  $.flag_4x4_mission3_passed = 0;
  $.flag_mayhem_mission1_passed = 0;
  $.flag_4x4one_trigger = 0;
  $.flag_4x4two_trigger = 0;
  $.flag_4x4three_trigger = 0;
  $.flag_mayhem_trigger = 0;
  // VAR_INT taxi_passed been_in_a_taxi_before flag_taxi1_mission_launched been_in_taxi1_before new_taxi_created_before
  // VAR_INT spray_taxi done_taxi_help
  $.flag_taxi1_mission_launched = 0;
  $.been_in_a_taxi_before = 0;
  $.been_in_taxi1_before = 0;
  $.taxi_passed = 0;
  $.done_taxi_help = 0;
  $.new_taxi_created_before = 0;
  // VAR_INT rec_rc1 rec_rc2 rec_rc3 rec_rc4 rec_rc5 rec_rc6
  // VAR_INT flag_just_done_rc_mission flag_rc1_passed flag_rc2_passed flag_rc3_passed flag_rc4_passed
  $.flag_just_done_rc_mission = 0;
  $.rec_rc1 = 0;
  $.rec_rc2 = 0;
  $.rec_rc3 = 0;
  $.rec_rc4 = 0;
  $.rec_rc5 = 0;
  $.rec_rc6 = 0;
  $.flag_rc1_passed = 0;
  $.flag_rc2_passed = 0;
  $.flag_rc3_passed = 0;
  $.flag_rc4_passed = 0;
  // VAR_INT phils_guns_created_before
  // VAR_INT started_buggy_generator_before
  // VAR_INT flag_joey_mission5_terminated flag_joey_mission6_terminated
  // VAR_INT flag_luigi_mission4_terminated flag_luigi_mission5_terminated
  // VAR_INT the_scripts_started_again
  // VAR_INT timer_help_message_displayed
  // VAR_INT nicked_half_a_mil_before
  // VAR_INT flag_done_radio_8ball
  // VAR_INT van_once_a_day
  // VAR_INT breakout_timer breakout_timer_start breakout_diff
  // VAR_INT maria_exists barriers_been_added
  // VAR_INT door_crash_flag
  // VAR_FLOAT door_position_a1
  // VAR_INT flag_bridge_created_8ball
  // VAR_INT com_ammu_nation2 com_sprayshop2 ammu2_blip_added
  $.ammu2_blip_added = 0;
  $.flag_bridge_created_8ball = 0;
  $.flag_done_radio_8ball = 0;
  $.timer_help_message_displayed = 0;
  $.flag_joey_mission5_terminated = 0;
  $.flag_joey_mission6_terminated = 0;
  $.flag_luigi_mission4_terminated = 0;
  $.flag_luigi_mission5_terminated = 0;
  $.the_scripts_started_again = 0;
  $.phils_guns_created_before = 0;
  $.started_buggy_generator_before = 0;
  $.nicked_half_a_mil_before = 0;
  $.van_once_a_day = 0;
  $.breakout_timer = 0;
  $.breakout_timer_start = 0;
  $.breakout_diff = 0;
  $.maria_exists = 0;
  $.door_crash_flag = 0;
  $.door_position_a1 = 0.0;
  $.barriers_been_added = 0;
  // START_NEW_SCRIPT t4x4_mission1_loop
  // START_NEW_SCRIPT t4x4_mission2_loop
  // START_NEW_SCRIPT t4x4_mission3_loop
  // START_NEW_SCRIPT multistorey_mission_loop
  // START_NEW_SCRIPT taxi_mission1_loop
  // START_NEW_SCRIPT fire_truck_mission_loop
  // START_NEW_SCRIPT ambulance_mission_loop
  // START_NEW_SCRIPT cop_mission_loop
  // START_NEW_SCRIPT rc_loop
  // LaunchMission hj.sc
  // LaunchMission usj.sc
  // LaunchMission genstuf.sc
  // LaunchMission rampage.sc
  // LaunchMission import.sc
  // LaunchMission camera.sc
  // LaunchMission gates.sc
  await asyncWait(0);
  $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
  $.luigi_contact_blip.Remove();
  $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
  $.joey_contact_blip.Remove();
  $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, -100.0, 19 /* RADAR_SPRITE_TONY */);
  $.toni_contact_blip.Remove();
  $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
  $.frankie_contact_blip.Remove();
  $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
  $.eightball_contact_blip.Remove();
  $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
  $.diablo_contact_blip.Remove();
  $.asuka_contact_blip = Blip.AddSpriteForContactPoint(523.6, -639.4, 16.6, 1 /* RADAR_SPRITE_ASUKA */);
  $.asuka_contact_blip.Remove();
  $.kenji_contact_blip = Blip.AddSpriteForContactPoint(459.1, -1413.0, 26.1, 11 /* RADAR_SPRITE_KENJI */);
  $.kenji_contact_blip.Remove();
  $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
  $.ray_contact_blip.Remove();
  $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
  $.love_contact_blip.Remove();
  $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
  $.yardie_contact_blip.Remove();
  $.maria_contact_blip = Blip.AddSpriteForContactPoint(-363.7, 246.1, 60.0, 3 /* RADAR_SPRITE_CAT */);
  $.maria_contact_blip.Remove();
  $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
  $.hood_contact_blip.Remove();
  $.industrail_save_blip = Blip.AddSpriteForContactPoint(893.5, -306.1, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.industrail_save_blip.Remove();
  $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.0, -484.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.commercial_save_blip.Remove();
  $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.suburban_save_blip.Remove();
  $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
  $.spray_taxi.Remove();
  $.target1.MakeTargetable();
  $.target2.MakeTargetable();
  $.target3.MakeTargetable();
  World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, indhelix_barrier, 0 /* FALSE */);
  World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, indhelix_barrier, LOD_land014);
  if ($.player.IsPlaying()) {
    $.player.SetControl(0 /* Off */);
  }
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(0, 0 /* FADE_OUT */);
  // LoadLaunchMission intro.sc
  // START_NEW_SCRIPT ind_save_loop
  // START_NEW_SCRIPT com_save_loop
  // START_NEW_SCRIPT sub_save_loop
  // START_NEW_SCRIPT ind_restart
  // START_NEW_SCRIPT com_restart
  // START_NEW_SCRIPT sub_restart
  // START_NEW_SCRIPT hospital_info_loop
  // START_NEW_SCRIPT police_info_loop
  if ($.player.IsPlaying()) {
    $.player.SetControl(1 /* on */);
  }
}
