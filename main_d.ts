// Generated from main_d.sc
// Imports: vars (../vars.mts), ide (../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../vars.mts";
import { car, ped, hier } from "../ide.ts";


async function mission_start() {
  // SCM GOTO → mission_start lowered to endless loop
  while (true) {
    await asyncWait(1000);
    //INDUSTRIAL BLOCK********************************************************************************************************
    //HOSPITAL INFO PICKUPS
    //hospital info cut
    //POLICE INFO PICKUPS
    //police info cut
    /*
    IF IS_PLAYER_IN_ZONE Player LITTLEI
    IF are_objects_targettable = 0
    MAKE_OBJECT_TARGETTABLE target1
    MAKE_OBJECT_TARGETTABLE target2
    MAKE_OBJECT_TARGETTABLE target3
    are_objects_targettable = 1
    ENDIF
    ELSE
    IF are_objects_targettable = 1
    are_objects_targettable = 0
    ENDIF
    ENDIF
    */
    //IS_PLAYER_IN_ZONE
    //	IF IS_PLAYER_PLAYING Player
    if ($.player.isPlaying()) {
      //HOSPITAL INFO PICKUPS
      //hospital info cut
      //POLICE INFO PICKUPS
      //police info cut
      /*
      IF IS_PLAYER_IN_ZONE Player LITTLEI
      IF are_objects_targettable = 0
      MAKE_OBJECT_TARGETTABLE target1
      MAKE_OBJECT_TARGETTABLE target2
      MAKE_OBJECT_TARGETTABLE target3
      are_objects_targettable = 1
      ENDIF
      ELSE
      IF are_objects_targettable = 1
      are_objects_targettable = 0
      ENDIF
      ENDIF
      */
      //IS_PLAYER_IN_ZONE
      if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
        //hospital info cut
        if ($.flag_player_on_mission == 0 && $.heal_info_trip == 0 && $.flag_health_info == 0) {
          //hospital info cut
          $.heal_info = Pickup.Create(1361 /* info */, 3 /* PICKUP_ONCE */, 1144.2, -596.9, 14.9);
          $.heal_info_trip = 1;
        }
        //hospital info cut
        //POLICE INFO PICKUPS
        if ($.flag_player_on_mission == 1 && $.heal_info_trip == 1) {
          //hospital info cut
          $.heal_info.remove();
          $.heal_info_trip = 0;
        }
        //police info cut
        if ($.flag_player_on_mission == 0 && $.wanted_info_trip == 0 && $.flag_wanted_info == 0) {
          //police info cut
          $.wanted_info = Pickup.Create(1361 /* info */, 3 /* PICKUP_ONCE */, 1143.9, -675.2, 15.0);
          $.wanted_info_trip = 1;
        }
        //police info cut
        /*
        IF IS_PLAYER_IN_ZONE Player LITTLEI
        IF are_objects_targettable = 0
        MAKE_OBJECT_TARGETTABLE target1
        MAKE_OBJECT_TARGETTABLE target2
        MAKE_OBJECT_TARGETTABLE target3
        are_objects_targettable = 1
        ENDIF
        ELSE
        IF are_objects_targettable = 1
        are_objects_targettable = 0
        ENDIF
        ENDIF
        */
        if ($.flag_player_on_mission == 1 && $.wanted_info_trip == 1) {
          //police info cut
          $.wanted_info.remove();
          $.wanted_info_trip = 0;
        }
      }
    }
  }
}

async function hospital_info_loop() {
  {
  await asyncWait(0);
  if ($.player.isPlaying()) {
    if ($.player.isInZone("S_VIEW") && $.flag_player_on_mission == 0 && $.heal_info_trip == 1) {
      if ($.heal_info.hasBeenCollected()) {
        $.player.setControl(false /* off */);
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
  if ($.player.isPlaying()) {
    if ($.player.isInZone("S_VIEW") && $.flag_player_on_mission == 0 && $.wanted_info_trip == 1) {
      if ($.wanted_info.hasBeenCollected()) {
        $.player.setControl(false /* off */);
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
  //SCRIPT_NAME rcloop
  await asyncWait(0);
  //	this doesn't have a fade - maybe should always be loaded?
  if ($.player.isPlaying() && $.flag_just_done_rc_mission == 0) {
    //	this doesn't have a fade - maybe should always be loaded?
    if ($.player.isInModel(142 /* CAR_TOYZ */)) {
      //	this doesn't have a fade - maybe should always be loaded?
      if ($.flag_player_on_mission == 0) {
        //	this doesn't have a fade - maybe should always be loaded?
        if ($.player.locateAnyMeans3D(1014.0, -120.0, 5.0, 5.0, 5.0, 5.0, false /* false */)) {
          Text.PrintBig("RC1", 15000, 2);
          await asyncWait(0);
          //	this doesn't have a fade - maybe should always be loaded?
          // LoadLaunchMission rc1.sc
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if ($.player.isPlaying()) {
          //	this doesn't have a fade - maybe should always be loaded?
          if ($.player.locateAnyMeans3D(1158.0, -309.0, 23.0, 5.0, 5.0, 5.0, false /* false */)) {
            Text.PrintBig("RC2", 15000, 2);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission rc2.sc
          }
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if ($.player.isPlaying()) {
          //	this doesn't have a fade - maybe should always be loaded?
          if ($.player.locateAnyMeans3D(-636.0, 65.0, 19.0, 5.0, 5.0, 5.0, false /* false */)) {
            Text.PrintBig("RC4", 15000, 2);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission rc3.sc
          }
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if ($.player.isPlaying()) {
          //	this doesn't have a fade - maybe should always be loaded?
          if ($.player.locateAnyMeans3D(366.0, -1312.0, 26.0, 5.0, 5.0, 5.0, false /* false */)) {
            Text.PrintBig("RC3", 15000, 2);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission rc4.sc
          }
        }
      }
    }
  }
  if ($.player.isPlaying()) {
    if (!($.player.isInModel(142 /* CAR_TOYZ */))) {
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
  //	ask James about the fades in this one?
  if ($.player.isPlaying()) {
    //	ask James about the fades in this one?
    if ($.flag_player_on_mission == 0 && $.player.isInZone("S_VIEW")) {
      if ($.player.isInModel(89 /* CAR_PATRIOT */) && !($.player.isInArea2D(1294.0, -656.0, 1316.0, -638.0, false /* false */))) {
        $.flag_4x4one_trigger = 1;
      }
      //	ask James about the fades in this one?
      if ($.player.isInModel(89 /* CAR_PATRIOT */) && $.flag_4x4one_trigger == 0) {
        Text.PrintBig("T4X4_1", 15000, 2);
        await asyncWait(0);
        //	ask James about the fades in this one?
        // LoadLaunchMission 4x4_1.sc
      }
      if ($.player.isPlaying()) {
        if (!($.player.isInAnyCar())) {
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
  //	ask James about the fades in this one?
  if ($.player.isPlaying()) {
    //	ask James about the fades in this one?
    if ($.flag_player_on_mission == 0 && $.player.isInZone("PARK")) {
      if ($.player.isInModel(83 /* CAR_LANDSTALKER */) && !($.player.isInArea2D(58.0, -585.0, 68.0, -595.0, false /* false */))) {
        $.flag_4x4two_trigger = 1;
      }
      //	ask James about the fades in this one?
      if ($.player.isInModel(83 /* CAR_LANDSTALKER */) && $.flag_4x4two_trigger == 0) {
        Text.PrintBig("T4X4_2", 15000, 2);
        await asyncWait(0);
        //	ask James about the fades in this one?
        // LoadLaunchMission 4x4_2.sc
      }
      if ($.player.isPlaying()) {
        if (!($.player.isInAnyCar())) {
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
  //	ask James about the fades in this one?
  if ($.player.isPlaying()) {
    //	ask James about the fades in this one?
    if ($.flag_player_on_mission == 0 && $.player.isInArea2D(-230.0, 255.0, -210.0, 275.0, false /* false */)) {
      if ($.player.isInModel(89 /* CAR_PATRIOT */) && !($.player.isInArea2D(-230.0, 255.0, -210.0, 275.0, false /* false */))) {
        $.flag_4x4three_trigger = 1;
      }
      //	ask James about the fades in this one?
      if ($.player.isInModel(89 /* CAR_PATRIOT */) && $.flag_4x4three_trigger == 0) {
        Text.PrintBig("T4X4_3", 15000, 2);
        await asyncWait(0);
        //	ask James about the fades in this one?
        // LoadLaunchMission 4x4_3.sc
      }
      if ($.player.isPlaying()) {
        if (!($.player.isInAnyCar())) {
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
  //	ask James about the fades in this one?
  if ($.player.isPlaying()) {
    //	ask James about the fades in this one?
    if ($.flag_player_on_mission == 0 && $.player.isInZone("COM_EAS")) {
      if ($.player.isInModel(122 /* CAR_STALLION */) && !($.player.isInArea2D(238.0, -612.0, 267.0, -469.0, false /* false */))) {
        $.flag_mayhem_trigger = 1;
      }
      //	ask James about the fades in this one?
      if ($.player.isInModel(122 /* CAR_STALLION */) && $.flag_mayhem_trigger == 0) {
        Text.PrintBig("MM_1", 15000, 2);
        await asyncWait(0);
        //	ask James about the fades in this one?
        // LoadLaunchMission mayhem1.sc
      }
      if ($.player.isPlaying()) {
        if (!($.player.isInAnyCar())) {
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
  //Press RIGHTSHOCK to start
  //Press SQUARE to start
  //	this doesn't have a fade - maybe should always be loaded?
  // not in an ambulance
  //	IF IS_PLAYER_IN_MODEL player CAR_AMBULANCE
  if ($.player.isPlaying()) {
    //Press RIGHTSHOCK to start
    //Press SQUARE to start
    //	this doesn't have a fade - maybe should always be loaded?
    // not in an ambulance
    //	IF IS_PLAYER_IN_MODEL player CAR_AMBULANCE
    if ($.player.isInModel(99 /* CAR_AMBULANCE */)) {
      //Press RIGHTSHOCK to start
      //Press SQUARE to start
      //	this doesn't have a fade - maybe should always be loaded?
      if ($.flag_player_on_mission == 0 && $.flag_player_on_ambulance_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        //Press RIGHTSHOCK to start
        //Press SQUARE to start
        if ($.been_in_ambulance_before == 0) {
          //Press RIGHTSHOCK to start
          //Press SQUARE to start
          if (!($.controlmode == 3)) {
            //Press RIGHTSHOCK to start
            Text.PrintHelp("ATUTOR");
          }
          else {
            //Press SQUARE to start
            Text.PrintHelp("ATUTOR3");
          }
          $.been_in_ambulance_before = 1;
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if (!($.controlmode == 3)) {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("AMBUL_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission ambulance.sc
            $.been_in_ambulance_before = 1;
          }
        }
        else {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → ambulance_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO ambulance_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("AMBUL_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
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
  //Press RIGHTSHOCK to start
  //Press SQUARE to start
  //	this doesn't have a fade - maybe should always be loaded?
  //	not in a firetruck
  //	IF IS_PLAYER_IN_MODEL Player CAR_FIRETRUCK
  if ($.player.isPlaying()) {
    //Press RIGHTSHOCK to start
    //Press SQUARE to start
    //	this doesn't have a fade - maybe should always be loaded?
    //	not in a firetruck
    //	IF IS_PLAYER_IN_MODEL Player CAR_FIRETRUCK
    if ($.player.isInModel(90 /* CAR_FIRETRUCK */)) {
      //Press RIGHTSHOCK to start
      //Press SQUARE to start
      //	this doesn't have a fade - maybe should always be loaded?
      if ($.flag_player_on_mission == 0 && $.flag_player_on_fire_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        //Press RIGHTSHOCK to start
        //Press SQUARE to start
        if ($.been_in_a_firetruk_before == 0) {
          //Press RIGHTSHOCK to start
          //Press SQUARE to start
          if (!($.controlmode == 3)) {
            //Press RIGHTSHOCK to start
            Text.PrintHelp("FTUTOR");
          }
          else {
            //Press SQUARE to start
            Text.PrintHelp("FTUTOR2");
          }
          $.been_in_a_firetruk_before = 1;
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if (!($.controlmode == 3)) {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("FIRE_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission firetruck.sc
            $.been_in_a_firetruk_before = 1;
          }
        }
        else {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → fire_truck_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO fire_truck_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("FIRE_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
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
  //Press RIGHTSHOCK to start
  //Press SQUARE to start
  //	this doesn't have a fade - maybe should always be loaded?
  //	not in a copcar
  // If in some kind of cop car
  if ($.player.isPlaying()) {
    //Press RIGHTSHOCK to start
    //Press SQUARE to start
    //	this doesn't have a fade - maybe should always be loaded?
    //	not in a copcar
    // If in some kind of cop car
    if ($.player.isInModel(109 /* CAR_POLICE */) || $.player.isInModel(110 /* CAR_ENFORCER */) || $.player.isInModel(115 /* CAR_RHINO */) || $.player.isInModel(100 /* CAR_FBI */)) {
      //Press RIGHTSHOCK to start
      //Press SQUARE to start
      //	this doesn't have a fade - maybe should always be loaded?
      if ($.flag_player_on_mission == 0 && $.flag_player_on_cop_mission == 0) {
        $.controlmode = Pad.GetControllerMode();
        //Press RIGHTSHOCK to start
        //Press SQUARE to start
        if ($.been_in_a_copcar_before == 0) {
          //Press RIGHTSHOCK to start
          //Press SQUARE to start
          if (!($.controlmode == 3)) {
            //Press RIGHTSHOCK to start
            Text.PrintHelp("CTUTOR");
          }
          else {
            //Press SQUARE to start
            Text.PrintHelp("CTUTOR2");
          }
          $.been_in_a_copcar_before = 1;
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if (!($.controlmode == 3)) {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("COP_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission copcar.sc
            $.been_in_a_copcar_before = 1;
          }
        }
        else {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → cop_mission_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO cop_mission_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("COP_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
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
  //Press RIGHTSHOCK to start
  //Press SQUARE to start
  //	this doesn't have a fade - maybe should always be loaded?
  // not in a taxi
  // IF IS_PLAYER_IN_TAXI Player
  if ($.player.isPlaying()) {
    //Press RIGHTSHOCK to start
    //Press SQUARE to start
    //	this doesn't have a fade - maybe should always be loaded?
    // not in a taxi
    // IF IS_PLAYER_IN_TAXI Player
    if ($.player.isInTaxi()) {
      //Press RIGHTSHOCK to start
      //Press SQUARE to start
      //	this doesn't have a fade - maybe should always be loaded?
      if ($.flag_player_on_mission == 0 && $.flag_taxi1_mission_launched == 0) {
        $.controlmode = Pad.GetControllerMode();
        //Press RIGHTSHOCK to start
        //Press SQUARE to start
        if ($.been_in_a_taxi_before == 0) {
          //Press RIGHTSHOCK to start
          //Press SQUARE to start
          if (!($.controlmode == 3)) {
            //Press RIGHTSHOCK to start
            Text.PrintHelp("TTUTOR");
          }
          else {
            //Press SQUARE to start
            Text.PrintHelp("TTUTOR2");
          }
          $.been_in_a_taxi_before = 1;
        }
        //	this doesn't have a fade - maybe should always be loaded?
        if (!($.controlmode == 3)) {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 19 /* RIGHTSHOCK */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("TAXI_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
            // LoadLaunchMission taxi1.sc
            $.flag_taxi1_mission_launched = 1;
          }
        }
        else {
          //	this doesn't have a fade - maybe should always be loaded?
          if (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
            while (Pad.IsButtonPressed(0 /* PAD1 */, 14 /* SQUARE */)) {
              await asyncWait(0);
              if (!($.player.isPlaying())) {
                // SCM GOTO → taxi_mission1_loop (not lowered; manual jump required)
                throw new Error("unresolved GOTO taxi_mission1_loop"); // fallback: would break linear control flow
              }
            }
            Text.PrintBig("TAXI_M", 4000, 5);
            await asyncWait(0);
            //	this doesn't have a fade - maybe should always be loaded?
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
  //flag_diablo_phone_ringing = 0
  if ($.flag_meat_mission1_passed == 1) {
    //flag_diablo_phone_ringing = 0
    $.meat_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.turnOn();
    }
    else {
      $.meat_phone.turnOff();
    }
  }
  else {
    $.meat_phone.turnOff();
  }
  //"THE CROOK"
  if ($.player.isPlaying()) {
    //"THE CROOK"
    if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"THE CROOK"
      if ($.flag_player_on_mission == 0) {
        //"THE CROOK"
        if ($.player.canStartMission()) {
          $.meat_phone.turnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          //"THE CROOK"
          if ($.hours >= 9 && $.hours < 19) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            //"THE CROOK"
            Text.PrintBig("MEA1", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat1.sc
          }
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → meat_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.meat_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.turnOn();
    }
    else {
      $.meat_phone.turnOff();
    }
  }
  else {
    $.meat_phone.turnOff();
  }
  //"THE THIEVES"
  if ($.player.isPlaying()) {
    //"THE THIEVES"
    if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"THE THIEVES"
      if ($.flag_player_on_mission == 0) {
        //"THE THIEVES"
        if ($.player.canStartMission()) {
          $.meat_phone.turnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          //"THE THIEVES"
          if ($.hours >= 9 && $.hours < 19) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            //"THE THIEVES"
            Text.PrintBig("MEA2", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat2.sc
          }
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → meat_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.meat_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.turnOn();
    }
    else {
      $.meat_phone.turnOff();
    }
  }
  else {
    $.meat_phone.turnOff();
  }
  //"THE WIFE"
  if ($.player.isPlaying()) {
    //"THE WIFE"
    if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"THE WIFE"
      if ($.flag_player_on_mission == 0) {
        //"THE WIFE"
        if ($.player.canStartMission()) {
          $.meat_phone.turnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          //"THE WIFE"
          if ($.hours >= 9 && $.hours < 19) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            //"THE WIFE"
            Text.PrintBig("MEA3", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat3.sc
          }
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → meat_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.meat_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    [$.hours, $.minutes] = Clock.GetTimeOfDay();
    if ($.hours >= 9 && $.hours < 19) {
      $.meat_phone.turnOn();
    }
    else {
      $.meat_phone.turnOff();
    }
  }
  else {
    $.meat_phone.turnOff();
  }
  //"HER LOVER"
  if ($.player.isPlaying()) {
    //"HER LOVER"
    if ($.player.locateStoppedOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"HER LOVER"
      if ($.flag_player_on_mission == 0) {
        //"HER LOVER"
        if ($.player.canStartMission()) {
          $.meat_phone.turnOff();
          [$.hours, $.minutes] = Clock.GetTimeOfDay();
          //"HER LOVER"
          if ($.hours >= 9 && $.hours < 19) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            //"HER LOVER"
            Text.PrintBig("MEA4", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission meat4.sc
          }
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → meat_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO meat_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1224.6, -840.3, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //	Don't know what to do about fades with this one
  if ($.player.isPlaying() && $.flag_eightball_mission_launched == 0 && $.flag_player_on_mission == 0) {
    //	Don't know what to do about fades with this one
    if ($.flag_reached_hideout == 0) {
      //	Don't know what to do about fades with this one
      if ($.player.locateOnFoot2D(811.90, -939.95, 3.5, 3.5, false /* FALSE */)) {
        //	Don't know what to do about fades with this one
        if ($.player.canStartMission()) {
          //	Don't know what to do about fades with this one
          // LoadLaunchMission 8ball.sc
          $.flag_eightball_mission_launched = 1;
        }
      }
    }
    else {
      //	Don't know what to do about fades with this one
      if ($.player.locateOnFoot2D(883.5, -308.2, 3.5, 3.5, false /* FALSE */)) {
        //	Don't know what to do about fades with this one
        if ($.player.canStartMission()) {
          //	Don't know what to do about fades with this one
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
  //"Don'a SPANK ma bitch up"
  if ($.player.isPlaying()) {
    //"Don'a SPANK ma bitch up"
    if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
      //"Don'a SPANK ma bitch up"
      if ($.flag_player_on_mission == 0) {
        //"Don'a SPANK ma bitch up"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Don'a SPANK ma bitch up"
          Text.PrintBig("LM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → luigi_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Drive Misty For Me."
  if ($.player.isPlaying()) {
    //"Drive Misty For Me."
    if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
      //"Drive Misty For Me."
      if ($.flag_player_on_mission == 0) {
        //"Drive Misty For Me."
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Drive Misty For Me."
          Text.PrintBig("LM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → luigi_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Pump Action Pimp"
  if ($.player.isPlaying()) {
    //"Pump Action Pimp"
    if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
      //"Pump Action Pimp"
      if ($.flag_player_on_mission == 0) {
        //"Pump Action Pimp"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Pump Action Pimp"
          Text.PrintBig("LM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → luigi_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Fuzz Ball"
  if ($.player.isPlaying()) {
    //"Fuzz Ball"
    if ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
      //"Fuzz Ball"
      if ($.flag_player_on_mission == 0) {
        //"Fuzz Ball"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Fuzz Ball"
          Text.PrintBig("LM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission luigi5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → luigi_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO luigi_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(892.8, -425.8, 13.9, 1.5, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Joey Mission 1"
  //" Wrong Time!"
  if ($.player.isPlaying()) {
    //"Joey Mission 1"
    //" Wrong Time!"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 1"
      //" Wrong Time!"
      if ($.flag_player_on_mission == 0) {
        [$.hours, $.minutes] = Clock.GetTimeOfDay();
        //"Joey Mission 1"
        //" Wrong Time!"
        if ($.hours >= 5 && $.hours < 21) {
          //"Joey Mission 1"
          if ($.player.canStartMission()) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            //"Joey Mission 1"
            Text.PrintBig("JM1", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission joey1.sc
          }
          if (!($.player.isPlaying())) {
            // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
          }
          while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
              // SCM GOTO → joey_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          //" Wrong Time!"
          Text.PrintNow("WRONGT1", 5000, 1);
          while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
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
  //"Joey Mission 2"
  if ($.player.isPlaying()) {
    //"Joey Mission 2"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Joey Mission 2"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Joey Mission 2"
          Text.PrintBig("JM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → joey_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Joey Mission 3"
  if ($.player.isPlaying()) {
    //"Joey Mission 3"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Joey Mission 3"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Joey Mission 3"
          Text.PrintBig("JM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → joey_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Joey Mission 4!"
  if ($.player.isPlaying()) {
    //"Joey Mission 4!"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 4!"
      if ($.flag_player_on_mission == 0) {
        //"Joey Mission 4!"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Joey Mission 4!"
          Text.PrintBig("JM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → joey_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Joey Mission 5"
  if ($.player.isPlaying()) {
    //"Joey Mission 5"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 5"
      if ($.flag_player_on_mission == 0) {
        //"Joey Mission 5"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Joey Mission 5"
          Text.PrintBig("JM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission joey5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → joey_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO joey_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Joey Mission 6"
  //" Wrong Time!"
  if ($.player.isPlaying()) {
    //"Joey Mission 6"
    //" Wrong Time!"
    if ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Joey Mission 6"
      //" Wrong Time!"
      if ($.flag_player_on_mission == 0) {
        [$.hours, $.minutes] = Clock.GetTimeOfDay();
        //"Joey Mission 6"
        //" Wrong Time!"
        if ($.hours >= 6 && $.hours < 14) {
          //"Joey Mission 6"
          if ($.player.canStartMission()) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            //"Joey Mission 6"
            Text.PrintBig("JM6", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission joey6.sc
          }
          if (!($.player.isPlaying())) {
            // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
          }
          while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
              // SCM GOTO → joey_mission6_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO joey_mission6_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          //" Wrong Time!"
          Text.PrintNow("WRONGT2", 5000, 1);
          while ($.player.locateOnFoot3D(1191.7, -870.0, 15.0, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
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
  //"Toni Mission 1"
  if ($.player.isPlaying()) {
    //"Toni Mission 1"
    if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
      //"Toni Mission 1"
      if ($.flag_player_on_mission == 0) {
        //"Toni Mission 1"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Toni Mission 1"
          Text.PrintBig("TM1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → toni_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Toni Mission 2"
  if ($.player.isPlaying()) {
    //"Toni Mission 2"
    if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
      //"Toni Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Toni Mission 2"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Toni Mission 2"
          Text.PrintBig("TM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → toni_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Toni Mission 3"
  if ($.player.isPlaying()) {
    //"Toni Mission 3"
    if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
      //"Toni Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Toni Mission 3"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Toni Mission 3"
          Text.PrintBig("TM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → toni_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Toni Mission 4"
  if ($.player.isPlaying()) {
    //"Toni Mission 4"
    if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
      //"Toni Mission 4"
      if ($.flag_player_on_mission == 0) {
        //"Toni Mission 4"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Toni Mission 4"
          Text.PrintBig("TM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → toni_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Toni Mission 5"
  if ($.player.isPlaying()) {
    //"Toni Mission 5"
    if ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
      //"Toni Mission 5"
      if ($.flag_player_on_mission == 0) {
        //"Toni Mission 5"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Toni Mission 5"
          Text.PrintBig("TM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission toni5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → toni_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO toni_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1219.8, -319.7, 27.4, 1.0, 2.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Pulp Friction"
  if ($.player.isPlaying()) {
    //"Pulp Friction"
    if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false /* FALSE */)) {
      //"Pulp Friction"
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        //"Pulp Friction"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Pulp Friction"
          Text.PrintBig(FM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → frankie_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Cuttin' The Grass"
  if ($.player.isPlaying()) {
    //"Cuttin' The Grass"
    if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false /* FALSE */)) {
      //"Cuttin' The Grass"
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        //"Cuttin' The Grass"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Cuttin' The Grass"
          Text.PrintBig("FM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → frankie_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Bomb Da Base Part 1"
  //"Frankie is not available at this time!"
  if ($.player.isPlaying()) {
    //"Bomb Da Base Part 1"
    //"Frankie is not available at this time!"
    if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false /* FALSE */)) {
      //"Bomb Da Base Part 1"
      //"Frankie is not available at this time!"
      if ($.flag_frankie_switched_off == 0) {
        //"Bomb Da Base Part 1"
        if ($.flag_player_on_mission == 0) {
          //"Bomb Da Base Part 1"
          if ($.player.canStartMission()) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            //"Bomb Da Base Part 1"
            Text.PrintBig("FM21", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission frank2.1.sc
          }
          if (!($.player.isPlaying())) {
            // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
          }
          while ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
              // SCM GOTO → frankie_mission2.1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO frankie_mission2.1_loop"); // fallback: would break linear control flow
            }
          }
        }
      }
      else {
        //"Frankie is not available at this time!"
        Text.PrintNow("FRANGO", 5000, 1);
        while ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Bomb Da Base"
  if ($.player.isPlaying()) {
    //"Bomb Da Base"
    if ($.player.locateOnFoot3D(1272.2, -92.9, 13.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Bomb Da Base"
      if ($.flag_eightball_switched_off == 0 && $.flag_player_on_mission == 0) {
        //"Bomb Da Base"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Bomb Da Base"
          Text.PrintBig("FM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → frankie_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1272.2, -92.9, 13.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Frankie Mission 4"
  if ($.player.isPlaying()) {
    //"Frankie Mission 4"
    if ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */) || $.player.isInAngledAreaOnFoot3D(1466.2, -175.0, 50.0, 1452.9, -172.1, 60.0, 11.6, false /* FALSE */)) {
      //"Frankie Mission 4"
      if ($.flag_frankie_switched_off == 0 && $.flag_player_on_mission == 0) {
        //"Frankie Mission 4"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Frankie Mission 4"
          Text.PrintBig("FM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission frank4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → frankie_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO frankie_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(1455.7, -187.3, 55.6, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.Diablo_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.turnOn();
  }
  else {
    $.Diablo_phone.turnOff();
  }
  //"Diablo Mission 1"
  if ($.player.isPlaying()) {
    //"Diablo Mission 1"
    if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Diablo Mission 1"
      if ($.flag_player_on_mission == 0) {
        //"Diablo Mission 1"
        if ($.player.canStartMission()) {
          $.Diablo_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Diablo Mission 1"
          Text.PrintBig("DIAB1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → diablo_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.Diablo_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.turnOn();
  }
  else {
    $.Diablo_phone.turnOff();
  }
  //"Diablo Mission 2"
  if ($.player.isPlaying()) {
    //"Diablo Mission 2"
    if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Diablo Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Diablo Mission 2"
        if ($.player.canStartMission()) {
          $.Diablo_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Diablo Mission 2"
          Text.PrintBig("DIAB2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → diablo_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.Diablo_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.turnOn();
  }
  else {
    $.Diablo_phone.turnOff();
  }
  //"Diablo Mission 3"
  if ($.player.isPlaying()) {
    //"Diablo Mission 3"
    if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Diablo Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Diablo Mission 3"
        if ($.player.canStartMission()) {
          $.Diablo_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Diablo Mission 3"
          Text.PrintBig("DIAB3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → diablo_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.Diablo_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.Diablo_phone.turnOn();
  }
  else {
    $.Diablo_phone.turnOff();
  }
  //"Diablo Mission 4"
  if ($.player.isPlaying()) {
    //"Diablo Mission 4"
    if ($.player.locateStoppedOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Diablo Mission 4"
      if ($.flag_player_on_mission == 0) {
        //"Diablo Mission 4"
        if ($.player.canStartMission()) {
          $.Diablo_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Diablo Mission 4"
          Text.PrintBig("DIAB4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission diablo4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → diablo_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO diablo_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(938.4, -230.5, 3.9, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig(AM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Asuka Mission 2"
  if ($.player.isPlaying()) {
    //"Asuka Mission 2"
    if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
      //"Asuka Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Asuka Mission 2"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Asuka Mission 2"
          Text.PrintBig("AM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Asuka Mission 3"
  if ($.player.isPlaying()) {
    //"Asuka Mission 3"
    if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
      //"Asuka Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Asuka Mission 3"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Asuka Mission 3"
          Text.PrintBig("AM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Asuka Mission 4"
  if ($.player.isPlaying()) {
    //"Asuka Mission 4"
    if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
      //"Asuka Mission 4"
      if ($.flag_player_on_mission == 0) {
        //"Asuka Mission 4"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Asuka Mission 4"
          Text.PrintBig("AM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Asuka Mission 5"
  if ($.player.isPlaying()) {
    //"Asuka Mission 5"
    if ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
      //"Asuka Mission 5"
      if ($.flag_player_on_mission == 0) {
        //"Asuka Mission 5"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Asuka Mission 5"
          Text.PrintBig("AM5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asuka5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(523.7, -639.0, 16.1, 1.0, 4.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Kanbu Bust out"
  if ($.player.isPlaying()) {
    //"Kanbu Bust out"
    if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
      //"Kanbu Bust out"
      if ($.flag_player_on_mission == 0) {
        //"Kanbu Bust out"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Kanbu Bust out"
          Text.PrintBig("KM1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → kenji_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Gone in Sixty"
  if ($.player.isPlaying()) {
    //"Gone in Sixty"
    if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
      //"Gone in Sixty"
      if ($.flag_player_on_mission == 0) {
        //"Gone in Sixty"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Gone in Sixty"
          Text.PrintBig("KM2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → kenji_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Kenji Mission 3"
  if ($.player.isPlaying()) {
    //"Kenji Mission 3"
    if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
      //"Kenji Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Kenji Mission 3"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Kenji Mission 3"
          Text.PrintBig("KM3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → kenji_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"SHIMA"
  if ($.player.isPlaying()) {
    //"SHIMA"
    if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
      //"SHIMA"
      if ($.flag_player_on_mission == 0) {
        //"SHIMA"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"SHIMA"
          Text.PrintBig("KM4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → kenji_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  // "SMACK DOWN"
  if ($.player.isPlaying()) {
    // "SMACK DOWN"
    if ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
      // "SMACK DOWN"
      if ($.flag_player_on_mission == 0) {
        // "SMACK DOWN"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          // "SMACK DOWN"
          Text.PrintBig(KM5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission kenji5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → kenji_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO kenji_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(459.1, -1413.0, 26.1, 1.5, 1.5, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Silence the sneak"
  if ($.player.isPlaying()) {
    //"Silence the sneak"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //"Silence the sneak"
      if ($.flag_player_on_mission == 0) {
        //"Silence the sneak"
        if ($.player.canStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Silence the sneak"
          Text.PrintBig(RM1, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //	used to be 250
  //"Arms Shortage"
  if ($.player.isPlaying()) {
    //	used to be 250
    //"Arms Shortage"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //	used to be 250
      //"Arms Shortage"
      if ($.flag_player_on_mission == 0) {
        //	used to be 250
        //"Arms Shortage"
        if ($.player.canStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          //	used to be 250
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Arms Shortage"
          Text.PrintBig(RM2, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Evidence Dash"
  if ($.player.isPlaying()) {
    //"Evidence Dash"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //"Evidence Dash"
      if ($.flag_player_on_mission == 0) {
        //"Evidence Dash"
        if ($.player.canStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Evidence Dash"
          Text.PrintBig(RM3, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Gone Fishing"
  if ($.player.isPlaying()) {
    //"Gone Fishing"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //"Gone Fishing"
      if ($.flag_player_on_mission == 0) {
        //"Gone Fishing"
        if ($.player.canStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Gone Fishing"
          Text.PrintBig(RM4, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //	used to be 250
  //"Plaster Blaster"
  if ($.player.isPlaying()) {
    //	used to be 250
    //"Plaster Blaster"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //	used to be 250
      //"Plaster Blaster"
      if ($.flag_player_on_mission == 0) {
        //	used to be 250
        //"Plaster Blaster"
        if ($.player.canStartMission()) {
          $.rays_cutscene_flag = 1;
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          //	used to be 250
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Plaster Blaster"
          Text.PrintBig(RM5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Marked Man"
  if ($.player.isPlaying()) {
    //"Marked Man"
    if ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
      //"Marked Man"
      if ($.flag_player_on_mission == 0) {
        //"Marked Man"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Marked Man"
          Text.PrintBig(RM6, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission ray6.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → ray_mission6_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO ray_mission6_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.2, 1.2, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Resue the Old Oriental Gentleman"
  if ($.player.isPlaying()) {
    //"Resue the Old Oriental Gentleman"
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      //"Resue the Old Oriental Gentleman"
      if ($.flag_player_on_mission == 0) {
        //"Resue the Old Oriental Gentleman"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Resue the Old Oriental Gentleman"
          Text.PrintBig("LOVE1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Love Mission 2"
  if ($.player.isPlaying()) {
    //"Love Mission 2"
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      //"Love Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Love Mission 2"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"Love Mission 2"
          Text.PrintBig("LOVE2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"love Mission 3"
  if ($.player.isPlaying()) {
    //"love Mission 3"
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      //"love Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"love Mission 3"
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          //"love Mission 3"
          Text.PrintBig(LOVE3, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.yardie_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.turnOn();
  }
  else {
    $.yardie_phone.turnOff();
  }
  //"Yardie Mission 1"
  if ($.player.isPlaying()) {
    //"Yardie Mission 1"
    if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Yardie Mission 1"
      if ($.flag_player_on_mission == 0) {
        //"Yardie Mission 1"
        if ($.player.canStartMission()) {
          $.yardie_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Yardie Mission 1"
          Text.PrintBig("YD1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → yardie_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.yardie_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.turnOn();
  }
  else {
    $.yardie_phone.turnOff();
  }
  //"Yardie Mission 2"
  if ($.player.isPlaying()) {
    //"Yardie Mission 2"
    if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Yardie Mission 2"
      if ($.flag_player_on_mission == 0) {
        //"Yardie Mission 2"
        if ($.player.canStartMission()) {
          $.yardie_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Yardie Mission 2"
          Text.PrintBig("YD2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → yardie_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.yardie_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.turnOn();
  }
  else {
    $.yardie_phone.turnOff();
  }
  //"Yardie Mission 3"
  if ($.player.isPlaying()) {
    //"Yardie Mission 3"
    if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Yardie Mission 3"
      if ($.flag_player_on_mission == 0) {
        //"Yardie Mission 3"
        if ($.player.canStartMission()) {
          $.yardie_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Yardie Mission 3"
          Text.PrintBig("YD3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → yardie_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.yardie_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.yardie_phone.turnOn();
  }
  else {
    $.yardie_phone.turnOff();
  }
  //"Yardie Mission 4"
  if ($.player.isPlaying()) {
    //"Yardie Mission 4"
    if ($.player.locateStoppedOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Yardie Mission 4"
      if ($.flag_player_on_mission == 0) {
        //"Yardie Mission 4"
        if ($.player.canStartMission()) {
          $.yardie_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Yardie Mission 4"
          Text.PrintBig("YD4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission yard4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → yardie_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO yardie_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(120.7, -272.1, 16.1, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig(LOVE4, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig(LOVE5, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig(LOVE6, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love6.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission6_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission6_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig(LOVE7, 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission love7.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → love_mission7_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO love_mission7_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(87.3, -1548.6, 28.3, 2.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  if ($.player.isPlaying()) {
    if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
      if ($.flag_player_on_mission == 0) {
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig("AS1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_suburban_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //	used to be 250
  if ($.player.isPlaying()) {
    //	used to be 250
    if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //	used to be 250
      if ($.flag_player_on_mission == 0) {
        //	used to be 250
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          //	used to be 250
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig("AS2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_suburban_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //	used to be 250
  if ($.player.isPlaying()) {
    //	used to be 250
    if ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //	used to be 250
      if ($.flag_player_on_mission == 0) {
        //	used to be 250
        if ($.player.canStartMission()) {
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          //	used to be 250
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          Streaming.Switch(false /* OFF */);
          Text.PrintBig("AS3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission asusb3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → asuka_suburban_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO asuka_suburban_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(367.3, -328.1, 19.5, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.hood_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.turnOn();
  }
  else {
    $.hood_phone.turnOff();
  }
  //"Uzi Driver"
  if ($.player.isPlaying()) {
    //"Uzi Driver"
    if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"Uzi Driver"
      if ($.flag_player_on_mission == 0) {
        //"Uzi Driver"
        if ($.player.canStartMission()) {
          $.hood_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"Uzi Driver"
          Text.PrintBig("HM_1", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood1.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → hood_mission1_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission1_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.hood_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.turnOn();
  }
  else {
    $.hood_phone.turnOff();
  }
  //"TOYMINATOR"
  if ($.player.isPlaying()) {
    //"TOYMINATOR"
    if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"TOYMINATOR"
      if ($.flag_player_on_mission == 0) {
        //"TOYMINATOR"
        if ($.player.canStartMission()) {
          $.hood_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"TOYMINATOR"
          Text.PrintBig("HM_2", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood2.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → hood_mission2_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission2_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
      $.hood_phone.turnOff();
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.turnOn();
  }
  else {
    $.hood_phone.turnOff();
  }
  //"RIGGED TO BLOW"
  if ($.player.isPlaying()) {
    //"RIGGED TO BLOW"
    if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"RIGGED TO BLOW"
      if ($.flag_player_on_mission == 0) {
        //"RIGGED TO BLOW"
        if ($.player.canStartMission()) {
          $.hood_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"RIGGED TO BLOW"
          Text.PrintBig("HM_3", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood3.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → hood_mission3_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission3_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.hood_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.turnOn();
  }
  else {
    $.hood_phone.turnOff();
  }
  //"GOLD GRAB"
  if ($.player.isPlaying()) {
    //"GOLD GRAB"
    if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"GOLD GRAB"
      if ($.flag_player_on_mission == 0) {
        //"GOLD GRAB"
        if ($.player.canStartMission()) {
          $.hood_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"GOLD GRAB"
          Text.PrintBig("HM_4", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood4.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → hood_mission4_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission4_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
    $.hood_phone.turnOff();
    return; // TERMINATE_THIS_SCRIPT
  }
  if ($.flag_player_on_mission == 0) {
    $.hood_phone.turnOn();
  }
  else {
    $.hood_phone.turnOff();
  }
  //"RUMBLE BLUES"
  if ($.player.isPlaying()) {
    //"RUMBLE BLUES"
    if ($.player.locateStoppedOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
      //"RUMBLE BLUES"
      if ($.flag_player_on_mission == 0) {
        //"RUMBLE BLUES"
        if ($.player.canStartMission()) {
          $.hood_phone.turnOff();
          $.player.makeSafeForCutscene();
          Camera.SetFadingColor(0, 0, 0);
          Camera.DoFade(1500, 0 /* FADE_OUT */);
          //"RUMBLE BLUES"
          Text.PrintBig("HM_5", 15000, 2);
          while (Camera.GetFadingStatus()) {
            await asyncWait(0);
          }
          // LoadLaunchMission hood5.sc
        }
        if (!($.player.isPlaying())) {
          // SCM GOTO → hood_mission5_loop (not lowered; manual jump required)
          throw new Error("unresolved GOTO hood_mission5_loop"); // fallback: would break linear control flow
        }
        while ($.player.locateOnFoot3D(-443.5, -6.1, 3.8, 1.0, 1.0, 2.0, false /* FALSE */)) {
          await asyncWait(0);
          if (!($.player.isPlaying())) {
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
  //"Catalina"
  //"You don't have enough money"
  if ($.player.isPlaying()) {
    //"Catalina"
    //"You don't have enough money"
    if ($.player.locateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, false /* FALSE */)) {
      //"Catalina"
      //"You don't have enough money"
      if ($.flag_player_on_mission == 0) {
        if ($.nicked_half_a_mil_before == 1) {
          // SCM GOTO → payed_before (not lowered; manual jump required)
          throw new Error("unresolved GOTO payed_before"); // fallback: would break linear control flow
        }
        //"Catalina"
        //"You don't have enough money"
        if ($.player.isScoreGreater(499999)) {
          // SCM label payed_before
          //"Catalina"
          if ($.player.canStartMission()) {
            $.player.makeSafeForCutscene();
            Camera.SetFadingColor(0, 0, 0);
            Camera.DoFade(1500, 0 /* FADE_OUT */);
            Streaming.Switch(false /* OFF */);
            //"Catalina"
            Text.PrintBig("CAT2", 15000, 2);
            while (Camera.GetFadingStatus()) {
              await asyncWait(0);
            }
            // LoadLaunchMission cat1.sc
          }
          if (!($.player.isPlaying())) {
            // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
            throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
          }
          while ($.player.locateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
              // SCM GOTO → cat_mission1_loop (not lowered; manual jump required)
              throw new Error("unresolved GOTO cat_mission1_loop"); // fallback: would break linear control flow
            }
          }
        }
        else {
          //"You don't have enough money"
          Text.PrintNow("CAT_MON", 5000, 1);
          while ($.player.locateOnFoot3D(-362.8, 246.5, 60.0, 4.5, 4.5, 2.0, false /* FALSE */)) {
            await asyncWait(0);
            if (!($.player.isPlaying())) {
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
  //SAVE HOUSE BLIP
  //SAVE HOUSE DOOR
  //INDUSTRIAL SAVE HOUSE
  // allowing the player to jump around inside
  //REAL ONE!!!!!!!
  //THE GAME SAVES/RE-LOADS HERE!!!!!
  /*
  LOAD_MISSION_AUDIO DOOR_2
  WHILE NOT HAS_MISSION_AUDIO_LOADED
  WAIT 0
  ENDWHILE
  PLAY_MISSION_AUDIO
  */
  //	IF CAN_PLAYER_START_MISSION Player
  // IF IS_PLAYER_IN_ZONE player REDLIGH
  // not in industrial
  //	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
  // IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    //SAVE HOUSE BLIP
    //SAVE HOUSE DOOR
    //INDUSTRIAL SAVE HOUSE
    // allowing the player to jump around inside
    //REAL ONE!!!!!!!
    //THE GAME SAVES/RE-LOADS HERE!!!!!
    /*
    LOAD_MISSION_AUDIO DOOR_2
    WHILE NOT HAS_MISSION_AUDIO_LOADED
    WAIT 0
    ENDWHILE
    PLAY_MISSION_AUDIO
    */
    //	IF CAN_PLAYER_START_MISSION Player
    // IF IS_PLAYER_IN_ZONE player REDLIGH
    // not in industrial
    //	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      //SAVE HOUSE DOOR
      if ($.created_ind_blip_before == 0) {
        $.industrail_save_blip.remove();
        $.industrail_save_blip = Blip.AddSpriteForContactPoint(870.0, -308.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.industrail_save_blip.changeDisplay(2 /* BLIP_ONLY */);
        $.created_ind_blip_before = 1;
      }
      //INDUSTRIAL SAVE HOUSE
      // allowing the player to jump around inside
      //REAL ONE!!!!!!!
      //THE GAME SAVES/RE-LOADS HERE!!!!!
      /*
      LOAD_MISSION_AUDIO DOOR_2
      WHILE NOT HAS_MISSION_AUDIO_LOADED
      WAIT 0
      ENDWHILE
      PLAY_MISSION_AUDIO
      */
      //	IF CAN_PLAYER_START_MISSION Player
      // IF IS_PLAYER_IN_ZONE player REDLIGH
      if ($.player.isInZone("REDLIGH")) {
        //INDUSTRIAL SAVE HOUSE
        if ($.flag_eightball_mission_passed == 1) {
          if ($.flag_player_on_mission == 0) {
            while (!($.playersdoor.rotate(210.0, 10.0, false /* FALSE */))) {
              await asyncWait(0);
            }
          }
          else {
            while (!($.playersdoor.rotate(0.0, 10.0, false /* FALSE */))) {
              await asyncWait(0);
            }
          }
        }
        // allowing the player to jump around inside
        //REAL ONE!!!!!!!
        //THE GAME SAVES/RE-LOADS HERE!!!!!
        /*
        LOAD_MISSION_AUDIO DOOR_2
        WHILE NOT HAS_MISSION_AUDIO_LOADED
        WAIT 0
        ENDWHILE
        PLAY_MISSION_AUDIO
        */
        //	IF CAN_PLAYER_START_MISSION Player
        if ($.player.isPlaying()) {
          // allowing the player to jump around inside
          //REAL ONE!!!!!!!
          //THE GAME SAVES/RE-LOADS HERE!!!!!
          /*
          LOAD_MISSION_AUDIO DOOR_2
          WHILE NOT HAS_MISSION_AUDIO_LOADED
          WAIT 0
          ENDWHILE
          PLAY_MISSION_AUDIO
          */
          //	IF CAN_PLAYER_START_MISSION Player
          if ($.player.canStartMission()) {
            //REAL ONE!!!!!!!
            //THE GAME SAVES/RE-LOADS HERE!!!!!
            /*
            LOAD_MISSION_AUDIO DOOR_2
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
            */
            if ($.flag_player_on_mission == 0) {
              //REAL ONE!!!!!!!
              //THE GAME SAVES/RE-LOADS HERE!!!!!
              /*
              LOAD_MISSION_AUDIO DOOR_2
              WHILE NOT HAS_MISSION_AUDIO_LOADED
              WAIT 0
              ENDWHILE
              PLAY_MISSION_AUDIO
              */
              if ($.player.isInAreaOnFoot3D(891.2, -309.7, 7.7, 899.3, -303.3, 12.7, false /* FALSE */)) {
                $.player.setControl(false /* Off */);
                Camera.SetFixedPosition(884.56, -305.35, 13.53, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(885.25, -305.85, 13.0, 2 /* JUMP_CUT */);
                Audio.LoadMissionAudio(DOOR_1);
                while (!(Audio.HasMissionAudioLoaded())) {
                  await asyncWait(0);
                }
                Audio.PlayMissionAudio();
                while (!($.playersdoor.rotate(0.0, 8.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                while (!(Audio.HasMissionAudioFinished())) {
                  await asyncWait(0);
                }
                //THE GAME SAVES/RE-LOADS HERE!!!!!
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.isPlaying()) {
                  $.player.setControl(false /* Off */);
                }
                /*
                LOAD_MISSION_AUDIO DOOR_2
                WHILE NOT HAS_MISSION_AUDIO_LOADED
                WAIT 0
                ENDWHILE
                PLAY_MISSION_AUDIO
                */
                await asyncWait(1000);
                while (!($.playersdoor.rotate(210.0, 10.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(888.6, -308.4, -100.0, 1.0, true /* TRUE */);
                if ($.player.isPlaying()) {
                  $.player.setCoordinates(888.6, -308.4, -100.0);
                  $.player.setHeading(90.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.isPlaying()) {
                  $.player.setControl(true /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_ind_blip_before == 1) {
        $.industrail_save_blip.remove();
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
  if ($.player.isPlaying()) {
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
  // Diablo Phone
  if ($.player.isPlaying()) {
    // Diablo Phone
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
  if ($.player.isPlaying()) {
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      if ($.blip_diablo_created_before == 0) {
        $.diablo_contact_blip.remove();
        $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
        $.blip_diablo_created_before = 1;
      }
    }
    else {
      if ($.blip_diablo_created_before == 1) {
        $.diablo_contact_blip.remove();
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
  //START JOEYS BUGGY GENERATOR AT MISTYS
  //misty and joey
  if ($.player.isPlaying()) {
    //START JOEYS BUGGY GENERATOR AT MISTYS
    //misty and joey
    if (Streaming.IsCollisionInMemory(1 /* LEVEL_INDUSTRIAL */)) {
      [$.hours, $.minutes] = Clock.GetTimeOfDay();
      //misty and joey
      if ($.hours > 17 && $.hours < 24) {
        //misty and joey
        if ($.started_buggy_generator_before == 0) {
          $.joeys_buggy.switch(101);
          //misty and joey
          $.misty_joey_loop = Sound.AddContinuous(937.1, -275.5, 8.9, 91 /* SOUND_MISTYS_HOUSE_LOOP_L */);
          $.started_buggy_generator_before = 1;
        }
      }
      else {
        if ($.started_buggy_generator_before == 1) {
          $.joeys_buggy.switch(0);
          $.misty_joey_loop.remove();
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
  //SWITCH OFF FLAMES AFTER TONI 5
  if ($.player.isPlaying()) {
    if (!($.player.isInZone("PORT_W"))) {
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
  //CONTACT BLOB HELP MESSAGE
  // Tells player about contact blobs
  if ($.player.isPlaying()) {
    // Tells player about contact blobs
    if ($.player.isInAreaOnFoot3D(895.3, -428.0, 12.0, 900.3, -423.2, 18.0, false /* FALSE */)) {
      // Tells player about contact blobs
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
  //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 4 IS NOT COMPLETED
  if ($.player.isPlaying()) {
    //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 4 IS NOT COMPLETED
    if ($.flag_player_on_mission == 0) {
      //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 4 IS NOT COMPLETED
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
  //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 5 IS NOT COMPLETED
  if ($.player.isPlaying()) {
    //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 5 IS NOT COMPLETED
    if ($.flag_player_on_mission == 0) {
      //ADD MESSAGE AFTER FRANKIE 2 IS PASSED AND TONI 5 IS NOT COMPLETED
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
      if (!(World.IsAreaOccupied(1008.0, -899.0, 14.0, 996.5, -886.5, 20.0, false /* FALSE */, true /* TRUE */, true /* TRUE */, false /* FALSE */, true /* TRUE */))) {
        if ($.fuzz_door1.rotate(180.0, 10.0, false /* FALSE */)) {
          $.flag_moved_door1_lm5 = 1;
        }
        if ($.fuzz_door2.rotate(0.0, 10.0, false /* FALSE */)) {
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
  //SAVE HOUSE BLIP
  //SAVE HOUSE DOORS
  //COMMERCIAL SAVE HOUSE
  //THE GAME SAVES/RE-LOADS HERE!!!!!
  /*
  LOAD_MISSION_AUDIO DOOR_4
  WHILE NOT HAS_MISSION_AUDIO_LOADED
  WAIT 0
  ENDWHILE
  PLAY_MISSION_AUDIO
  */
  //	IF CAN_PLAYER_START_MISSION Player
  // IF IS_PLAYER_IN_ZONE player PARK
  // not in commercial
  //	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  // IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    //SAVE HOUSE BLIP
    //SAVE HOUSE DOORS
    //COMMERCIAL SAVE HOUSE
    //THE GAME SAVES/RE-LOADS HERE!!!!!
    /*
    LOAD_MISSION_AUDIO DOOR_4
    WHILE NOT HAS_MISSION_AUDIO_LOADED
    WAIT 0
    ENDWHILE
    PLAY_MISSION_AUDIO
    */
    //	IF CAN_PLAYER_START_MISSION Player
    // IF IS_PLAYER_IN_ZONE player PARK
    // not in commercial
    //	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      //SAVE HOUSE DOORS
      if ($.created_com_blip_before == 0) {
        $.commercial_save_blip.remove();
        $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.3, -469.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.commercial_save_blip.changeDisplay(2 /* BLIP_ONLY */);
        $.created_com_blip_before = 1;
      }
      //COMMERCIAL SAVE HOUSE
      //THE GAME SAVES/RE-LOADS HERE!!!!!
      /*
      LOAD_MISSION_AUDIO DOOR_4
      WHILE NOT HAS_MISSION_AUDIO_LOADED
      WAIT 0
      ENDWHILE
      PLAY_MISSION_AUDIO
      */
      //	IF CAN_PLAYER_START_MISSION Player
      // IF IS_PLAYER_IN_ZONE player PARK
      if ($.player.isInZone("PARK")) {
        //COMMERCIAL SAVE HOUSE
        if ($.flag_player_on_mission == 0) {
          while (!($.plysav_lftdr_lft.slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)) || !($.plysav_lftdr_rght.slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
        }
        else {
          while (!($.plysav_lftdr_lft.slide(103.85, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)) || !($.plysav_lftdr_rght.slide(102.192, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
        }
        //THE GAME SAVES/RE-LOADS HERE!!!!!
        /*
        LOAD_MISSION_AUDIO DOOR_4
        WHILE NOT HAS_MISSION_AUDIO_LOADED
        WAIT 0
        ENDWHILE
        PLAY_MISSION_AUDIO
        */
        //	IF CAN_PLAYER_START_MISSION Player
        if ($.player.isPlaying()) {
          //THE GAME SAVES/RE-LOADS HERE!!!!!
          /*
          LOAD_MISSION_AUDIO DOOR_4
          WHILE NOT HAS_MISSION_AUDIO_LOADED
          WAIT 0
          ENDWHILE
          PLAY_MISSION_AUDIO
          */
          //	IF CAN_PLAYER_START_MISSION Player
          if ($.player.canStartMission()) {
            //THE GAME SAVES/RE-LOADS HERE!!!!!
            /*
            LOAD_MISSION_AUDIO DOOR_4
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
            */
            if ($.flag_player_on_mission == 0) {
              //THE GAME SAVES/RE-LOADS HERE!!!!!
              /*
              LOAD_MISSION_AUDIO DOOR_4
              WHILE NOT HAS_MISSION_AUDIO_LOADED
              WAIT 0
              ENDWHILE
              PLAY_MISSION_AUDIO
              */
              if ($.player.isInAreaOnFoot3D(105.7, -486.0, 15.0, 100.8, -483.4, 18.0, false /* FALSE */)) {
                $.player.setControl(false /* Off */);
                Camera.SetFixedPosition(98.53, -472.06, 19.84, 0.0, 0.0, 0.0);
                Camera.PointAtPoint(98.94, -472.90, 19.47, 2 /* JUMP_CUT */);
                Audio.LoadMissionAudio(DOOR_3);
                while (!(Audio.HasMissionAudioLoaded())) {
                  await asyncWait(0);
                }
                Audio.PlayMissionAudio();
                while (!($.plysav_lftdr_lft.slide(103.85, -482.8, 16.25, 0.0625, 0.0, 0.0, false /* FALSE */)) || !($.plysav_lftdr_rght.slide(102.192, -482.8, 16.25, 0.0625, 0.0, 0.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                while (!(Audio.HasMissionAudioFinished())) {
                  await asyncWait(0);
                }
                //THE GAME SAVES/RE-LOADS HERE!!!!!
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.isPlaying()) {
                  $.player.setControl(false /* OFF */);
                }
                /*
                LOAD_MISSION_AUDIO DOOR_4
                WHILE NOT HAS_MISSION_AUDIO_LOADED
                WAIT 0
                ENDWHILE
                PLAY_MISSION_AUDIO
                */
                await asyncWait(1000);
                while (!($.plysav_lftdr_lft.slide(105.35, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */)) || !($.plysav_lftdr_rght.slide(100.692, -482.8, 16.25, 0.1, 0.0, 0.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(103.0, -478.5, 14.9, 1.0, true /* TRUE */);
                if ($.player.isPlaying()) {
                  $.player.setCoordinates(103.0, -478.5, 14.9);
                  $.player.setHeading(0.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.isPlaying()) {
                  $.player.setControl(true /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_com_blip_before == 1) {
        $.commercial_save_blip.remove();
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
  if ($.player.isPlaying()) {
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
  // Yardie Phone
  //IS_PLAYER_IN_ZONE
  //IS PLAYER PLAYING
  if ($.player.isPlaying()) {
    // Yardie Phone
    //IS_PLAYER_IN_ZONE
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
  //FLASH_RADAR_BLIP yardie_contact_blip
  //			IF flag_yardie_mission4_passed = 0
  //			ENDIF
  if ($.player.isPlaying()) {
    //FLASH_RADAR_BLIP yardie_contact_blip
    //			IF flag_yardie_mission4_passed = 0
    //			ENDIF
    if (Streaming.IsCollisionInMemory(2 /* LEVEL_COMMERCIAL */)) {
      if ($.flag_yardie_mission4_passed == 1) {
        return; // TERMINATE_THIS_SCRIPT
      }
      //FLASH_RADAR_BLIP yardie_contact_blip
      if ($.blip_yardie_created_before == 0) {
        $.yardie_contact_blip.remove();
        //FLASH_RADAR_BLIP yardie_contact_blip
        $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
        $.blip_yardie_created_before = 1;
      }
    }
    else {
      //			ENDIF
      if ($.blip_yardie_created_before == 1) {
        $.yardie_contact_blip.remove();
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
  //IF NOT IS_PLAYER_IN_AREA_3D player 893.494 -417.093 14.943 894.934 -413.657 17.916 0
  if (Object.DoesExist($.backdoor)) {
    $.door_position_a1 = $.backdoor.getHeading();
    //IF NOT IS_PLAYER_IN_AREA_3D player 893.494 -417.093 14.943 894.934 -413.657 17.916 0
    if ($.door_crash_flag == 1) {
      //IF NOT IS_PLAYER_IN_AREA_3D player 893.494 -417.093 14.943 894.934 -413.657 17.916 0
      while (!($.door_position_a1 == 0.0)) {
        //IF NOT IS_PLAYER_IN_AREA_3D player 893.494 -417.093 14.943 894.934 -413.657 17.916 0
        if ($.player.isPlaying()) {
          //IF NOT IS_PLAYER_IN_AREA_3D player 893.494 -417.093 14.943 894.934 -413.657 17.916 0
          if (!($.player.isInArea3D(889.618, -418.098, 15.0, 895.151, -412.675, 18.0, false))) {
            if ($.door_position_a1 > -10.0 && $.door_position_a1 < 10.0) {
              $.door_position_a1 = 0.0;
            }
            else {
              $.door_position_a1 -= 10.0;
            }
            $.backdoor.setHeading($.door_position_a1);
          }
        }
        else {
          $.door_position_a1 = 0.0;
          $.backdoor.setHeading($.door_position_a1);
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
  //SAVE HOUSE BLIP
  //SAVE HOUSE DOOR
  //SUBURBAN SAVE HOUSE
  /*
  LOAD_MISSION_AUDIO DOOR_5
  WHILE NOT HAS_MISSION_AUDIO_LOADED
  WAIT 0
  ENDWHILE
  PLAY_MISSION_AUDIO
  */
  /*
  WHILE NOT HAS_MISSION_AUDIO_FINISHED
  WAIT 0
  ENDWHILE
  */
  //THE GAME SAVES/RE-LOADS HERE!!!!!
  /*
  LOAD_MISSION_AUDIO DOOR_6
  WHILE NOT HAS_MISSION_AUDIO_LOADED
  WAIT 0
  ENDWHILE
  PLAY_MISSION_AUDIO
  */
  //	IF CAN_PLAYER_START_MISSION Player
  // IF IS_PLAYER_IN_ZONE player PROJECT
  //	not in suburban
  //	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
  // IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    //SAVE HOUSE BLIP
    //SAVE HOUSE DOOR
    //SUBURBAN SAVE HOUSE
    /*
    LOAD_MISSION_AUDIO DOOR_5
    WHILE NOT HAS_MISSION_AUDIO_LOADED
    WAIT 0
    ENDWHILE
    PLAY_MISSION_AUDIO
    */
    /*
    WHILE NOT HAS_MISSION_AUDIO_FINISHED
    WAIT 0
    ENDWHILE
    */
    //THE GAME SAVES/RE-LOADS HERE!!!!!
    /*
    LOAD_MISSION_AUDIO DOOR_6
    WHILE NOT HAS_MISSION_AUDIO_LOADED
    WAIT 0
    ENDWHILE
    PLAY_MISSION_AUDIO
    */
    //	IF CAN_PLAYER_START_MISSION Player
    // IF IS_PLAYER_IN_ZONE player PROJECT
    //	not in suburban
    //	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      //SAVE HOUSE DOOR
      if ($.created_sub_blip_before == 0) {
        $.suburban_save_blip.remove();
        $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
        $.suburban_save_blip.changeDisplay(2 /* BLIP_ONLY */);
        $.created_sub_blip_before = 1;
      }
      //SUBURBAN SAVE HOUSE
      /*
      LOAD_MISSION_AUDIO DOOR_5
      WHILE NOT HAS_MISSION_AUDIO_LOADED
      WAIT 0
      ENDWHILE
      PLAY_MISSION_AUDIO
      */
      /*
      WHILE NOT HAS_MISSION_AUDIO_FINISHED
      WAIT 0
      ENDWHILE
      */
      //THE GAME SAVES/RE-LOADS HERE!!!!!
      /*
      LOAD_MISSION_AUDIO DOOR_6
      WHILE NOT HAS_MISSION_AUDIO_LOADED
      WAIT 0
      ENDWHILE
      PLAY_MISSION_AUDIO
      */
      //	IF CAN_PLAYER_START_MISSION Player
      // IF IS_PLAYER_IN_ZONE player PROJECT
      if ($.player.isInZone("PROJECT")) {
        //SUBURBAN SAVE HOUSE
        if ($.flag_player_on_mission == 0) {
          while (!($.newtowerdoor1.rotate(250.0, 10.0, false /* FALSE */))) {
            await asyncWait(0);
          }
        }
        else {
          while (!($.newtowerdoor1.rotate(180.0, 10.0, false /* FALSE */))) {
            await asyncWait(0);
          }
        }
        /*
        LOAD_MISSION_AUDIO DOOR_5
        WHILE NOT HAS_MISSION_AUDIO_LOADED
        WAIT 0
        ENDWHILE
        PLAY_MISSION_AUDIO
        */
        /*
        WHILE NOT HAS_MISSION_AUDIO_FINISHED
        WAIT 0
        ENDWHILE
        */
        //THE GAME SAVES/RE-LOADS HERE!!!!!
        /*
        LOAD_MISSION_AUDIO DOOR_6
        WHILE NOT HAS_MISSION_AUDIO_LOADED
        WAIT 0
        ENDWHILE
        PLAY_MISSION_AUDIO
        */
        //	IF CAN_PLAYER_START_MISSION Player
        if ($.player.isPlaying()) {
          /*
          LOAD_MISSION_AUDIO DOOR_5
          WHILE NOT HAS_MISSION_AUDIO_LOADED
          WAIT 0
          ENDWHILE
          PLAY_MISSION_AUDIO
          */
          /*
          WHILE NOT HAS_MISSION_AUDIO_FINISHED
          WAIT 0
          ENDWHILE
          */
          //THE GAME SAVES/RE-LOADS HERE!!!!!
          /*
          LOAD_MISSION_AUDIO DOOR_6
          WHILE NOT HAS_MISSION_AUDIO_LOADED
          WAIT 0
          ENDWHILE
          PLAY_MISSION_AUDIO
          */
          //	IF CAN_PLAYER_START_MISSION Player
          if ($.player.canStartMission()) {
            /*
            LOAD_MISSION_AUDIO DOOR_5
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
            */
            /*
            WHILE NOT HAS_MISSION_AUDIO_FINISHED
            WAIT 0
            ENDWHILE
            */
            //THE GAME SAVES/RE-LOADS HERE!!!!!
            /*
            LOAD_MISSION_AUDIO DOOR_6
            WHILE NOT HAS_MISSION_AUDIO_LOADED
            WAIT 0
            ENDWHILE
            PLAY_MISSION_AUDIO
            */
            if ($.flag_player_on_mission == 0) {
              /*
              LOAD_MISSION_AUDIO DOOR_5
              WHILE NOT HAS_MISSION_AUDIO_LOADED
              WAIT 0
              ENDWHILE
              PLAY_MISSION_AUDIO
              */
              /*
              WHILE NOT HAS_MISSION_AUDIO_FINISHED
              WAIT 0
              ENDWHILE
              */
              //THE GAME SAVES/RE-LOADS HERE!!!!!
              /*
              LOAD_MISSION_AUDIO DOOR_6
              WHILE NOT HAS_MISSION_AUDIO_LOADED
              WAIT 0
              ENDWHILE
              PLAY_MISSION_AUDIO
              */
              if ($.player.isInAreaOnFoot3D(-670.5, 3.9, 18.0, -660.0, 12.7, 22.0, false /* FALSE */)) {
                $.player.setControl(false /* Off */);
                Camera.SetFixedPosition(-678.15, -6.46, 24.49, 0.0, 0.0, 0.0);
                /*
                LOAD_MISSION_AUDIO DOOR_5
                WHILE NOT HAS_MISSION_AUDIO_LOADED
                WAIT 0
                ENDWHILE
                PLAY_MISSION_AUDIO
                */
                Camera.PointAtPoint(-677.39, -5.92, 24.11, 2 /* JUMP_CUT */);
                /*
                WHILE NOT HAS_MISSION_AUDIO_FINISHED
                WAIT 0
                ENDWHILE
                */
                while (!($.newtowerdoor1.rotate(180.0, 8.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                //THE GAME SAVES/RE-LOADS HERE!!!!!
                Game.ActivateSaveMenu();
                await asyncWait(0);
                while (!(Game.HasSaveGameFinished())) {
                  await asyncWait(0);
                }
                Camera.SetFadingColor(0, 0, 0);
                Camera.DoFade(1000, 0 /* FADE_OUT */);
                if ($.player.isPlaying()) {
                  $.player.setControl(false /* Off */);
                }
                /*
                LOAD_MISSION_AUDIO DOOR_6
                WHILE NOT HAS_MISSION_AUDIO_LOADED
                WAIT 0
                ENDWHILE
                PLAY_MISSION_AUDIO
                */
                await asyncWait(1000);
                while (!($.newtowerdoor1.rotate(250.0, 10.0, false /* FALSE */))) {
                  await asyncWait(0);
                }
                World.ClearArea(-666.8, -1.8, -100.0, 1.0, true /* TRUE */);
                if ($.player.isPlaying()) {
                  $.player.setCoordinates(-666.8, -1.8, -100.0);
                  $.player.setHeading(180.0);
                  Camera.DoFade(1000, 1 /* FADE_IN */);
                  Camera.RestoreJumpcut();
                  Camera.SetInFrontOfPlayer();
                }
                await asyncWait(1000);
                if ($.player.isPlaying()) {
                  $.player.setControl(true /* on */);
                }
              }
            }
          }
        }
      }
    }
    else {
      if ($.created_sub_blip_before == 1) {
        $.suburban_save_blip.remove();
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
  if ($.player.isPlaying()) {
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
  // Hood Phone
  //	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
  // IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Hood Phone
    //	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
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
  //IS_PLAYER_IN_ZONE
  //IS PLAYER PLAYING
  if ($.player.isPlaying()) {
    //IS_PLAYER_IN_ZONE
    if (Streaming.IsCollisionInMemory(3 /* LEVEL_SUBURBAN */)) {
      if ($.flag_hood_mission5_passed == 1) {
        return; // TERMINATE_THIS_SCRIPT
      }
      if ($.flag_blip_hood_created == 0) {
        $.hood_contact_blip.remove();
        $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
        $.flag_blip_hood_created = 1;
      }
    }
    else {
      if ($.flag_blip_hood_created == 1) {
        $.hood_contact_blip.remove();
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
  //"Work for Luigi or piss about!"
  //"To earn some extra cash, why not 'borrow' a taxi..."
  if ($.player.isPlaying()) {
    //"Work for Luigi or piss about!"
    if ($.flag_had_luigi_help_message == 0) {
      //"Work for Luigi or piss about!"
      if ($.flag_luigi_mission1_passed == 1) {
        //"Work for Luigi or piss about!"
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
    //"To earn some extra cash, why not 'borrow' a taxi..."
    if ($.flag_had_luigi_help_message == 2) {
      //"To earn some extra cash, why not 'borrow' a taxi..."
      if ($.flag_player_on_mission == 0) {
        //"To earn some extra cash, why not 'borrow' a taxi..."
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
  //AMMU NATION
  if ($.player.isPlaying()) {
    //AMMU NATION
    if ($.flag_player_on_mission == 0) {
      //AMMU NATION
      if ($.out_of_stock_pistol == 0) {
        $.SHOP_COLT45.remove();
        //AMMU NATION
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
  if ($.player.isPlaying()) {
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
    if ($.player.isPlaying()) {
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
    if ($.player.isPlaying()) {
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
    if ($.player.isPlaying()) {
      Pager.AddMessage(VANHSTP, 140, 2, 0);
      return; // TERMINATE_THIS_SCRIPT
    }
  }
  // SCM GOTO → van_heist_garage_pager (not lowered; manual jump required)
  throw new Error("unresolved GOTO van_heist_garage_pager"); // fallback: would break linear control flow
  }
}

export async function main_d() {
  // ScriptName
  // VAR_FLOAT one_sixteenth one_thirtysecond one_sixtyfourth
  $.one_sixteenth = 0.0625;
  $.one_thirtysecond = $.one_sixteenth / 2.0;
  $.one_sixtyfourth = $.one_thirtysecond / 2.0;
  // VAR_INT mission_trigger_wait_time
  // ***************************************Frankie 3 Warp Stuff******************************
  // ******************************************DO NOT REMOVE!*********************************
  $.mission_trigger_wait_time = 250;
  // VAR_INT flag_taken_money_off_fm3
  // ********************************************Help Message*********************************
  // ********************************************DO NOT REMOVE********************************
  $.flag_taken_money_off_fm3 = 0;
  // VAR_INT flag_player_had_gun_message
  // *********************************8Ball/Luigi Girls Warp Stuff****************************
  // ***************************************DO NOT REMOVE*************************************
  $.flag_player_had_gun_message = 0;
  // VAR_INT flag_reached_hideout
  $.flag_reached_hideout = 0;
  // VAR_INT flag_had_luigi_help_message
  // *************************************LOCATE BLOB VARIABLE STUFF**************************
  // ********************************************DO NOT REMOVE********************************
  $.flag_had_luigi_help_message = 0;
  // VAR_INT blob_flag
  // zero = false no blob displayed
  // one = true blob is displayed
  // before the loop set this flag to the way you want it displayed or nothing will happen
  // *********************************TOTAL NUMBER OF MISSIONS********************************
  // *****************************************************************************************
  $.blob_flag = 0;
  Stat.SetTotalNumberOfMissions(73);
  // ********************************Player name for Cut-scene stuff**************************
  Stat.SetProgressTotal(0);
  // VAR_INT script_controlled_player
  //Control Config variable
  // ********************************CREATE INDUSTRIAL OBJECTS********************************
  // VAR_INT controlmode
  //luigi_club_door
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
  $.playersdoor = Object.CreateNoOffset(1380 /* playersdoor */, 890.883, -307.74, 8.75);
  $.playersdoor.dontRemove();
  $.target1 = Object.CreateNoOffset(1385 /* faketarget */, 1078.7, -384.8, 15.4);
  $.target1.dontRemove();
  $.target2 = Object.CreateNoOffset(1385 /* faketarget */, 1080.5, -384.8, 15.4);
  $.target2.dontRemove();
  $.target3 = Object.CreateNoOffset(1385 /* faketarget */, 1082.3, -384.8, 15.4);
  $.target3.dontRemove();
  $.misty_door1 = Object.CreateNoOffset(382 /* Mistydoor */, 945.68, -272.31, 4.854);
  $.misty_door1.dontRemove();
  $.misty_door2 = Object.CreateNoOffset(382 /* Mistydoor */, 942.746, -273.712, 4.854);
  $.misty_door2.dontRemove();
  $.misty_door2.setHeading(180.0);
  $.laundrete_door1 = Object.CreateNoOffset(1326 /* laundrtdoor1 */, 845.773, -662.80, 15.07);
  $.laundrete_door1.dontRemove();
  $.laundrete_door2 = Object.CreateNoOffset(1326 /* laundrtdoor1 */, 845.773, -664.824, 15.07);
  $.laundrete_door2.dontRemove();
  $.laundrete_door2.setHeading(180.0);
  //The moving one
  $.joeys_garage_door2 = Object.CreateNoOffset(1375 /* joey_door1 */, 1192.23, -867.252, 14.124);
  $.joeys_garage_door2.dontRemove();
  $.joeys_garage_door2.setHeading(45.0);
  $.joeys_garage_door3 = Object.CreateNoOffset(1374 /* joey_door2 */, 1190.12, -869.339, 14.19);
  $.joeys_garage_door3.dontRemove();
  $.joeys_garage_door3.setHeading(45.0);
  $.dogfood_factory_gate = Object.CreateNoOffset(1278 /* electricgate */, 1250.4, -812.0, 13.97);
  $.dogfood_factory_gate.dontRemove();
  $.dogfood_factory_gate.setHeading(225.0);
  $.doggy_door = Object.CreateNoOffset(407 /* dogfoodoor01 */, 1205.298, -802.908, 15.0);
  $.doggy_door.dontRemove();
  $.doggy_door.setHeading(45.0);
  $.fish_factory_gate = Object.CreateNoOffset(1278 /* electricgate */, 1016.0, -1107.955, 12.294);
  $.fish_factory_gate.dontRemove();
  $.fish_factory_gate.setHeading(90.0);
  $.Bank_job_door = Object.CreateNoOffset(391 /* bankjobdoor */, 1087.523, -233.801, 11.012);
  $.Bank_job_door.dontRemove();
  //chnabankdoor 1035.479 -700.743 15.334
  $.bankdoor1 = Object.CreateNoOffset(1386 /* chnabankdoor */, 1035.6, -700.793, 15.334);
  $.bankdoor1.dontRemove();
  //chnabankdoor
  $.bankdoor2 = Object.CreateNoOffset(1386 /* chnabankdoor */, 1035.6, -699.408, 15.334);
  $.bankdoor2.dontRemove();
  $.bankdoor2.setHeading(180.0);
  $.backdoor = Object.CreateNoOffset(1376 /* backdoor */, 891.056, -416.4373, 14.955);
  $.backdoor.dontRemove();
  $.fuzz_door1 = Object.CreateNoOffset(1330 /* fuzballdoor */, 1001.673, -887.855, 15.775);
  $.fuzz_door1.setHeading(180.0);
  $.fuzz_door1.dontRemove();
  $.fuzz_door2 = Object.CreateNoOffset(1330 /* fuzballdoor */, 998.33, -887.94, 15.775);
  $.fuzz_door2.setHeading(0.0);
  $.fuzz_door2.dontRemove();
  $.subway_gate_industrial = Object.CreateNoOffset(1280 /* subwaygate */, 988.963, -471.778, 5.2);
  $.subway_gate_industrial.dontRemove();
  $.subway_gate_industrial.setHeading(90.0);
  $.tunnel_gate_industrial = Object.CreateNoOffset(1281 /* tunnelentrance */, 730.331, 172.467, -21.075);
  // ********************************CREATE COMMERCIAL OBJECTS********************************
  $.tunnel_gate_industrial.dontRemove();
  // VAR_INT plysav_lftdr_lft plysav_lftdr_rght
  // VAR_INT police_door_one police_door_two
  // VAR_INT colombian_gate helix_barrier
  // VAR_INT phils_compnd_gate flag_player_on_phil_mission
  // VAR_INT inside_fence outside_fence
  $.helix_barrier = Object.CreateNoOffset(1299 /* helix_barrier */, -73.137, -630.333, 25.932);
  $.helix_barrier.dontRemove();
  $.plysav_lftdr_lft = Object.CreateNoOffset(1252 /* plysav_lftdr_lft */, 103.85, -482.8, 16.25);
  $.plysav_lftdr_lft.dontRemove();
  $.plysav_lftdr_rght = Object.CreateNoOffset(1253 /* plysav_lftdr_rght */, 102.192, -482.8, 16.25);
  $.plysav_lftdr_rght.dontRemove();
  $.plysav_lftdr_rght.setHeading(180.0);
  $.police_door_one = Object.CreateNoOffset(1278 /* electricgate */, 366.158, -1128.522, 21.941);
  $.police_door_one.dontRemove();
  $.police_door_one.setHeading(180.0);
  $.police_door_two = Object.CreateNoOffset(1278 /* electricgate */, 326.3, -1128.522, 21.941);
  $.police_door_two.dontRemove();
  $.police_door_two.setHeading(180.0);
  $.colombian_gate = Object.CreateNoOffset(1278 /* electricgate */, 91.589, -318.592, 15.296);
  $.colombian_gate.dontRemove();
  $.colombian_gate.setHeading(270.0);
  $.phils_compnd_gate = Object.CreateNoOffset(1278 /* electricgate */, 147.249, 207.323, 10.599);
  $.phils_compnd_gate.dontRemove();
  $.phils_compnd_gate.setHeading(270.0);
  $.inside_fence = Object.CreateNoOffset(1409 /* fixed_inside */, 362.827, -341.883, 17.186);
  $.inside_fence.dontRemove();
  $.outside_fence = Object.CreateNoOffset(1412 /* fixed_outside */, 360.852, -391.405, 22.622);
  // ********************************CREATE SUBURBAN OBJECTS*********************************
  $.outside_fence.dontRemove();
  // VAR_INT newtowerdoor1 Columbian_gate2
  // VAR_INT airportdoor1 airportdoor2
  $.newtowerdoor1 = Object.CreateNoOffset(1286 /* newtowerdoor1 */, -664.313, 2.883, 19.51);
  $.newtowerdoor1.dontRemove();
  $.newtowerdoor1.setHeading(180.0);
  $.Columbian_gate2 = Object.CreateNoOffset(1284 /* Columbiangate */, -363.05, 250.455, 61.355);
  $.Columbian_gate2.dontRemove();
  $.Columbian_gate2.setHeading(180.0);
  $.airportdoor1 = Object.CreateNoOffset(1371 /* airportdoor1 */, -770.414, -599.292, 11.847);
  $.airportdoor1.dontRemove();
  $.airportdoor2 = Object.CreateNoOffset(1372 /* airportdoor2 */, -770.414, -601.369, 11.846);
  // ******************************************Police Levels**********************************
  $.airportdoor2.dontRemove();
  // **************************************Industrial Garages*********************************
  Game.SetMaxWantedLevel(4);
  // VAR_INT save_cars1 bombshop1 sprayshop1 collect_all_cars1 special_garage1 hours minutes
  // VAR_INT frankie_garage Garage_bank garage_lm2
  //Saves current car to memory
  $.save_cars1 = Garage.Create(891.3, -311.1, 7.7, 898.4, -315.5, 12.7, 16 /* GARAGE_HIDEOUT_INDUSTRIAL */);
  //Inport/Export garage industrial
  $.collect_all_cars1 = Garage.Create(1496.8, -686.2, 11.0, 1523.3, -666.8, 17.0, 8 /* GARAGE_COLLECTCARS_1 */);
  $.collect_all_cars1.noSpecialCameraForThisGarage();
  //bomb shop - once armed waits for ped to enter car before detonation
  $.bombshop1 = Garage.Create(1284.6, -100.5, 13.6, 1278.0, -111.0, 18.6, 3 /* GARAGE_BOMBSHOP2 */);
  //spray/repair shop
  $.sprayshop1 = Garage.Create(921.0, -367.5, 9.8, 928.7, -355.1, 14.8, 5 /* GARAGE_RESPRAY */);
  //Toni 3 and Frankie 1
  $.frankie_garage = Garage.Create(1428.8, -187.0, 49.7, 1442.5, -179.9, 54.7, 21 /* GARAGE_MISSION_KEEPCAR_REMAINCLOSED */);
  $.frankie_garage.setRotatingDoor();
  //Joey 3
  $.Garage_bank = Garage.Create(1440.7, -805.6, 10.9, 1449.8, -782.1, 15.9, 1 /* GARAGE_MISSION */);
  //Luigi 2
  // **************************************Commercial Garages*********************************
  $.garage_lm2 = Garage.Create(1074.0, -578.0, 13.0, 1085.0, -568.0, 17.0, 1 /* GARAGE_MISSION */);
  // VAR_INT save_cars2 bombshop2 sprayshop2 garage_yd3 garage1_love1 garage2_love1 garage3_love1 garage4_love1 garage5_love1
  // VAR_INT garage_km2 rays_prize_garage witsec_garage loves_garage
  // VAR_FLOAT garage_min_x_yd3 garage_min_y_yd3 garage_max_x_yd3 garage_max_y_yd3
  $.garage_min_x_yd3 = 257.0;
  $.garage_min_y_yd3 = -803.0;
  $.garage_max_x_yd3 = 263.0;
  $.garage_max_y_yd3 = -795.5;
  //Saves current cars to memory
  $.save_cars2 = Garage.Create(115.1, -475.3, 15.0, 106.9, -487.1, 19.0, 17 /* GARAGE_HIDEOUT_COMMERCIAL */);
  // bomb shop - once armed waits 5 seconds then detonates
  $.bombshop2 = Garage.Create(386.0, -573.0, 25.2, 376.6, -580.1, 30.2, 2 /* GARAGE_BOMBSHOP1 */);
  // Spray shop
  $.sprayshop2 = Garage.Create(386.0, -490.0, 25.2, 376.6, -497.0, 30.2, 5 /* GARAGE_RESPRAY */);
  //RAY 6 - MARKED MAN (BY SPRAYSHOP)
  $.rays_prize_garage = Garage.Create(245.4, -992.2, 20.0, 234.4, -1000.5, 24.0, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  $.rays_prize_garage.setRotatingDoor();
  //RAY 1 - SILENCE THE SNEAK (BEHIND CARPARK)
  $.witsec_garage = Garage.Create(375.0, -441.5, 20.0837, 386.0, -434.0, 25.0837, 11 /* GARAGE_FORCARTOCOMEOUTOF */);
  //Kenji 2
  $.garage_km2 = Garage.Create(377.3, -511.4, 25.1132, 383.7, -502.0, 30.0, 1 /* GARAGE_MISSION */);
  //Love 1
  $.garage1_love1 = Garage.Create(63.8, -307.9, 15.2, 70.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  //Love 1
  $.garage2_love1 = Garage.Create(53.0, -308.0, 15.2, 60.0, -316.7, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  //Love 1
  $.garage3_love1 = Garage.Create(24.9, -344.0, 15.2, 30.6, -337.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  //Love 1
  $.garage4_love1 = Garage.Create(24.5, -355.0, 15.2, 30.6, -346.0, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  //Love 1
  $.garage5_love1 = Garage.Create(52.5, -388.0, 15.2, 42.0, -374.1, 19.2, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  //Yardie 3
  // ****************************************Suburban Garages*********************************
  $.garage_yd3 = Garage.Create($.garage_min_x_yd3, $.garage_min_y_yd3, 26.8, $.garage_max_x_yd3, $.garage_max_y_yd3, 31.8, 1 /* GARAGE_MISSION */);
  // VAR_INT save_cars3 bombshop3 garage_hm3 garage_hm4 escort_garage collect_all_cars2 sprayshop3
  //Saves current car to memory
  $.save_cars3 = Garage.Create(-662.5, -47.4, 17.0, -670.7, -30.0, 22.0, 18 /* GARAGE_HIDEOUT_SUBURBAN */);
  $.save_cars3.setRotatingDoor();
  $.save_cars3.noSpecialCameraForThisGarage();
  // Spray shop
  $.sprayshop3 = Garage.Create(-1139.0, 37.8, 55.0, -1148.5, 32.1, 65.0, 5 /* GARAGE_RESPRAY */);
  // bomb shop - detonator
  $.bombshop3 = Garage.Create(-1078.9, 58.0, 56.0, -1086.0, 49.0, 65.0, 4 /* GARAGE_BOMBSHOP3 */);
  //Inport/Export garage industrial
  $.collect_all_cars2 = Garage.Create(-1117.5, 150.9, 55.0, -1097.7, 121.2, 65.0, 9 /* GARAGE_COLLECTCARS_2 */);
  $.collect_all_cars2.noSpecialCameraForThisGarage();
  //Hoods 3
  $.garage_hm3 = Garage.Create(1346.9, -315.5, 49.0, 1352.5, -310.7, 53.0, 14 /* GARAGE_MISSION_KEEPCAR */);
  //Hoods 4
  $.garage_hm4 = Garage.Create(-824.7, -165.5, 32.8, -843.5, -171.7, 37.0, 20 /* GARAGE_KEEPS_OPENING_FOR_SPECIFIC_CAR */);
  //LOVE 5 - ESCORT SERVICE (WAREHOUSE)
  $.escort_garage = Garage.Create(-1049.17, -77.47, 37.8, -1037.21, -69.17, 42.8, 19 /* GARAGE_FOR_SCRIPT_TO_OPEN_AND_CLOSE */);
  // ************************************Industrial Crane Positions***************************
  $.escort_garage.setRotatingDoor();
  //Docks crane for the Police cars onto boat height for area 10.8
  Crane.ActivateMilitary(1570.3, -675.4, 1565.7, -686.5, 1576.8, -706.6, 1639.9, -696.7, 26.0, 0.0);
  //Crusher crane 1135.8 56.1 -1.0 1149.8 46.3 7.0
  // ****************************************Restart Zones************************************
  // **************************************GLOBAL ZONES*****************************************
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
  // Gang1 in industrial = MAFIA
  // Gang2 in industrial = TRIADS
  // Gang3 in industrial = DIABLOS
  // Gang4 in commercial = YAKUZA
  // Gang5 in commercial = YARDDIES
  // Gang6 in commercial = COLUMBIANS
  // Gang7 in commercial = HOODS
  // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
  // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big
  //GANG ZONES
  Zone.SetGroup("SUB_ZON", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  //St Marks
  Zone.SetPedInfo("LITTLEI", 1 /* DAY */, 17, 300, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("LITTLEI", 0 /* NIGHT */, 11, 400, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("LITTLEI", 1 /* DAY */, 10, 100, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 350, 20, 0);
  Zone.SetCarInfo("LITTLEI", 0 /* NIGHT */, 8, 150, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 150, 0, 0);
  Zone.SetGroup("LITTLEI", 1 /* DAY */, 3 /* LITTLEITALY_PEDGRP */);
  Zone.SetGroup("LITTLEI", 0 /* NIGHT */, 4 /* LITTLEITALY_NIGHT_PEDGRP */);
  //China town
  Zone.SetPedInfo("CHINA", 1 /* DAY */, 20, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("CHINA", 0 /* NIGHT */, 12, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("CHINA", 1 /* DAY */, 10, 0, 100, 0, 0, 0, 0, 0, 10, 400, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("CHINA", 0 /* NIGHT */, 8, 0, 150, 0, 0, 0, 0, 0, 20, 550, 0, 0, 200, 0, 0);
  Zone.SetGroup("CHINA", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("CHINA", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  //Hepburn heoghts
  Zone.SetPedInfo("TOWERS", 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("TOWERS", 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("TOWERS", 1 /* DAY */, 8, 0, 0, 100, 0, 0, 0, 0, 20, 400, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("TOWERS", 0 /* NIGHT */, 6, 0, 0, 150, 0, 0, 0, 0, 10, 550, 0, 0, 200, 0, 0);
  Zone.SetGroup("TOWERS", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  Zone.SetGroup("TOWERS", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  //Redlight district
  Zone.SetPedInfo("REDLIGH", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("REDLIGH", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("REDLIGH", 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 10, 550, 0, 0, 350, 0, 0);
  Zone.SetCarInfo("REDLIGH", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 20, 600, 0, 0, 200, 0, 0);
  Zone.SetGroup("REDLIGH", 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
  //NAVIGATION ZONES
  Zone.SetGroup("REDLIGH", 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);
  //Trenton
  Zone.SetPedInfo("PORT_I", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_I", 0 /* NIGHT */, 7, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_I", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
  Zone.SetCarInfo("PORT_I", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_I", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_I", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Portland Harbour
  Zone.SetPedInfo("PORT_E", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_E", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_E", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 20, 0);
  Zone.SetCarInfo("PORT_E", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_E", 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
  Zone.SetGroup("PORT_E", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  //Atlantic Quays
  Zone.SetPedInfo("PORT_S", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_S", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_S", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 500, 20, 0);
  Zone.SetCarInfo("PORT_S", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_S", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_S", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Callahan Point
  Zone.SetPedInfo("PORT_W", 1 /* DAY */, 10, 0, 10, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("PORT_W", 0 /* NIGHT */, 5, 0, 10, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("PORT_W", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("PORT_W", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 400, 0, 0);
  Zone.SetGroup("PORT_W", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("PORT_W", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Harwood
  Zone.SetPedInfo("HARWOOD", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("HARWOOD", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("HARWOOD", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 0, 0);
  Zone.SetCarInfo("HARWOOD", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 600, 0, 0, 200, 0, 0);
  Zone.SetGroup("HARWOOD", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("HARWOOD", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Portland Beach
  Zone.SetPedInfo("EASTBAY", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("EASTBAY", 0 /* NIGHT */, 5, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("EASTBAY", 1 /* DAY */, 5, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 480, 0, 0);
  Zone.SetCarInfo("EASTBAY", 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 500, 0, 0, 490, 0, 0);
  Zone.SetGroup("EASTBAY", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("EASTBAY", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Portland View
  Zone.SetPedInfo("S_VIEW", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30);
  Zone.SetPedInfo("S_VIEW", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetCarInfo("S_VIEW", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 30, 400, 0, 0, 300, 100, 0);
  Zone.SetCarInfo("S_VIEW", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 200, 100, 0);
  Zone.SetGroup("S_VIEW", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  //OTHER ZONES
  Zone.SetGroup("S_VIEW", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Police station in Portland View
  Zone.SetPedInfo("COPS_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetPedInfo("COPS_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetCarInfo("COPS_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("COPS_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("COPS_1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("COPS_1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Hospital in Portland View
  Zone.SetPedInfo("HOSPI_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetPedInfo("HOSPI_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 60);
  Zone.SetCarInfo("HOSPI_1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("HOSPI_1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 90, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("HOSPI_1", 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
  Zone.SetGroup("HOSPI_1", 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);
  //com/ind bridge east side
  Zone.SetPedInfo("ROADBR1", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("ROADBR1", 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("ROADBR1", 1 /* DAY */, 12, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 400, 0, 100);
  Zone.SetCarInfo("ROADBR1", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 100);
  Zone.SetGroup("ROADBR1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("ROADBR1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Fish factory
  Zone.SetPedInfo("FISHFAC", 1 /* DAY */, 2, 0, 1000, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("FISHFAC", 0 /* NIGHT */, 2, 0, 1000, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("FISHFAC", 1 /* DAY */, 6, 0, 0, 0, 0, 0, 0, 0, 20, 200, 0, 0, 600, 0, 0);
  Zone.SetCarInfo("FISHFAC", 0 /* NIGHT */, 4, 0, 0, 0, 0, 0, 0, 0, 10, 200, 0, 0, 600, 0, 0);
  Zone.SetGroup("FISHFAC", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("FISHFAC", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //Fills a gap in the zones
  Zone.SetPedInfo("FILLIN1", 1 /* DAY */, 10, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("FILLIN1", 0 /* NIGHT */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("FILLIN1", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 500, 0, 0, 400, 0, 0);
  Zone.SetCarInfo("FILLIN1", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 400, 0, 0, 400, 0, 0);
  Zone.SetGroup("FILLIN1", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("FILLIN1", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //SOUTH CHINATOWN
  Zone.SetPedInfo("MAIN_D1", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  //P R X  W   S	B
  Zone.SetPedInfo("MAIN_D1", 0 /* NIGHT */, 10, 0, 500, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D1", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D1", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D1", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D1", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  //CHINATOWN
  Zone.SetPedInfo("MAIN_D2", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D2", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D2", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D2", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D2", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D2", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  //CHINATOWN
  Zone.SetPedInfo("MAIN_D3", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D3", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D3", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D3", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D3", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D3", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  //NORTH CHINATOWN
  Zone.SetPedInfo("MAIN_D4", 1 /* DAY */, 15, 0, 300, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D4", 0 /* NIGHT */, 10, 0, 400, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D4", 1 /* DAY */, 24, 0, 100, 0, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D4", 0 /* NIGHT */, 18, 0, 150, 0, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D4", 1 /* DAY */, 5 /* CHINATOWN_PEDGRP */);
  Zone.SetGroup("MAIN_D4", 0 /* NIGHT */, 6 /* CHINATOWN_NIGHT_PEDGRP */);
  //REDLIGHT
  Zone.SetPedInfo("MAIN_D5", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D5", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D5", 1 /* DAY */, 24, 0, 0, 0, 0, 0, 0, 0, 20, 400, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D5", 0 /* NIGHT */, 18, 0, 0, 0, 0, 0, 0, 0, 10, 300, 0, 0, 400, 20, 100);
  Zone.SetGroup("MAIN_D5", 1 /* DAY */, 1 /* REDLIGHT_PEDGRP */);
  Zone.SetGroup("MAIN_D5", 0 /* NIGHT */, 2 /* REDLIGHT_NIGHT_PEDGRP */);
  //TOWERS
  Zone.SetPedInfo("MAIN_D6", 1 /* DAY */, 15, 0, 0, 300, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("MAIN_D6", 0 /* NIGHT */, 10, 0, 0, 400, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("MAIN_D6", 1 /* DAY */, 24, 0, 0, 100, 0, 0, 0, 0, 20, 300, 0, 0, 300, 20, 100);
  Zone.SetCarInfo("MAIN_D6", 0 /* NIGHT */, 18, 0, 0, 150, 0, 0, 0, 0, 10, 300, 0, 0, 300, 20, 100);
  Zone.SetGroup("MAIN_D6", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  // ****************************Industrial switched off Road and Ped Nodes*******************
  Zone.SetGroup("MAIN_D6", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  //Industrial to commercial Bridge
  Path.SwitchRoadsOff(619.6, -911.5, 45.0, 834.3, -954.5, 32.0);
  Path.MarkRoadsBetweenLevels(619.6, -911.5, 45.0, 834.3, -954.5, 32.0);
  //Frankies Driveway
  Path.SwitchRoadsOff(1381.0, -293.7, 48.0, 1435.8, -140.1, 58.0);
  //Docks
  Path.SwitchRoadsOff(1358.9, -901.9, 10.0, 1609.6, -615.1, 16.0);
  //Tunnel
  Path.SwitchRoadsOff(659.6, 200.0, -20.0, 945.8, 147.5, 5.0);
  Path.MarkRoadsBetweenLevels(659.6, 200.0, -20.0, 945.8, 147.5, 5.0);
  //Tunnel
  Path.SwitchPedRoadsOff(659.6, 200.0, -25.0, 945.8, 147.5, 5.0);
  Path.MarkRoadsBetweenLevels(659.6, 200.0, -25.0, 945.8, 147.5, 5.0);
  //Tunnel
  Path.SwitchPedRoadsOff(773.6, 191.8, -25.0, 819.7, 182.8, 5.0);
  Path.MarkRoadsBetweenLevels(773.6, 191.8, -25.0, 819.7, 182.8, 5.0);
  //Colubian Boat
  Path.SwitchPedRoadsOff(1609.0, -896.0, 8.0, 1393.7, -967.4, 30.0);
  //Fish Factory
  Path.SwitchPedRoadsOff(1048.3, -1103.4, 5.0, 1040.0, -1074.4, 30.0);
  //Players hideout
  Path.SwitchPedRoadsOff(900.09, -297.05, 6.0, 842.83, -325.58, 15.0);
  //Luigis alleyway
  Path.SwitchPedRoadsOff(900.5, -427.1, 14.0, 879.1, -404.2, 17.0);
  //Toni2 alleyway
  Path.SwitchPedRoadsOff(847.9, -640.6, 10.0, 887.9, -685.8, 20.0);
  //Bitch'n Dog Food Factory
  Path.SwitchPedRoadsOffAngled(1222.9, -838.4, 13.5, 1256.3, -804.9, 16.0, 58.0);
  //Fuzz Ball
  Path.SwitchPedRoadsOff(1005.59, -880.96, 12.0, 995.9, -893.34, 20.0);
  //AMMUNATION
  // ***************************************Commercial City Zones*****************************
  // Gang1 in industrial = MAFIA
  // Gang2 in industrial = TRIADS
  // Gang3 in industrial = DIABLOS
  // Gang4 in commercial = YAKUZA
  // Gang5 in commercial = YARDDIES
  // Gang6 in commercial = COLUMBIANS
  // Gang7 in commercial = HOODS
  // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
  // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big
  //NAVIGATION ZONES
  Path.SwitchPedRoadsOff(1070.6, -401.6, 10.0, 1067.8, -397.2, 25.0);
  //Aspatria
  Zone.SetPedInfo("STADIUM", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("STADIUM", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("STADIUM", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
  Zone.SetCarInfo("STADIUM", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
  Zone.SetGroup("STADIUM", 1 /* DAY */, 15 /* STADIUM_PEDGRP */);
  Zone.SetGroup("STADIUM", 0 /* NIGHT */, 16 /* STADIUM_NIGHT_PEDGRP */);
  //Rockford
  Zone.SetPedInfo("HOSPI_2", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("HOSPI_2", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("HOSPI_2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 150, 0, 250, 0, 200);
  Zone.SetCarInfo("HOSPI_2", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 150, 0, 250, 0, 200);
  Zone.SetGroup("HOSPI_2", 1 /* DAY */, 17 /* HOSPITAL_PEDGRP */);
  Zone.SetGroup("HOSPI_2", 0 /* NIGHT */, 18 /* HOSPITAL_NIGHT_PEDGRP */);
  //Liberty Campus
  Zone.SetPedInfo("UNIVERS", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("UNIVERS", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("UNIVERS", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 20, 0);
  Zone.SetCarInfo("UNIVERS", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 20, 0);
  Zone.SetGroup("UNIVERS", 1 /* DAY */, 23 /* UNIVERSITY_PEDGRP */);
  Zone.SetGroup("UNIVERS", 0 /* NIGHT */, 24 /* UNIVERSITY_NIGHT_PEDGRP */);
  //Fort staunton
  Zone.SetPedInfo("CONSTRU", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 300, 0, 20);
  Zone.SetPedInfo("CONSTRU", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 400, 0, 10);
  Zone.SetCarInfo("CONSTRU", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 100, 0, 20, 300, 100, 0, 250, 0, 150);
  Zone.SetCarInfo("CONSTRU", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 150, 0, 10, 300, 100, 0, 250, 0, 150);
  Zone.SetGroup("CONSTRU", 1 /* DAY */, 19 /* CONSTRUCTION_PEDGRP */);
  Zone.SetGroup("CONSTRU", 0 /* NIGHT */, 20 /* CONSTRUCTION_NIGHT_PEDGRP */);
  //Belleville Park
  Zone.SetPedInfo("PARK", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("PARK", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("PARK", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("PARK", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("PARK", 1 /* DAY */, 25 /* PARK_PEDGRP */);
  Zone.SetGroup("PARK", 0 /* NIGHT */, 26 /* PARK_NIGHT_PEDGRP */);
  // Newport
  Zone.SetPedInfo("COM_EAS", 1 /* DAY */, 30, 0, 0, 0, 0, 300, 0, 0, 20);
  Zone.SetPedInfo("COM_EAS", 0 /* NIGHT */, 16, 0, 0, 0, 0, 400, 0, 0, 10);
  Zone.SetCarInfo("COM_EAS", 1 /* DAY */, 20, 0, 0, 0, 0, 100, 0, 0, 20, 400, 250, 0, 0, 0, 150);
  Zone.SetCarInfo("COM_EAS", 0 /* NIGHT */, 17, 0, 0, 0, 0, 150, 0, 0, 10, 400, 250, 0, 0, 0, 100);
  Zone.SetGroup("COM_EAS", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("COM_EAS", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  //Bedford Point
  Zone.SetPedInfo("SHOPING", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SHOPING", 0 /* NIGHT */, 16, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SHOPING", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
  Zone.SetCarInfo("SHOPING", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
  Zone.SetGroup("SHOPING", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  Zone.SetGroup("SHOPING", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  //Torrington
  Zone.SetPedInfo("YAKUSA", 1 /* DAY */, 30, 0, 0, 0, 300, 0, 0, 0, 20);
  Zone.SetPedInfo("YAKUSA", 0 /* NIGHT */, 16, 0, 0, 0, 400, 0, 0, 0, 10);
  Zone.SetCarInfo("YAKUSA", 1 /* DAY */, 20, 0, 0, 0, 100, 0, 0, 0, 40, 350, 200, 250, 0, 0, 0);
  Zone.SetCarInfo("YAKUSA", 0 /* NIGHT */, 17, 0, 0, 0, 150, 0, 0, 0, 20, 350, 200, 200, 0, 0, 0);
  Zone.SetGroup("YAKUSA", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  //OTHER ZONES
  Zone.SetGroup("YAKUSA", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  Zone.SetPedInfo("ROADBR2", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("ROADBR2", 0 /* NIGHT */, 20, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("ROADBR2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 30, 300, 250, 250, 0, 0, 100);
  Zone.SetCarInfo("ROADBR2", 0 /* NIGHT */, 17, 0, 0, 0, 0, 0, 0, 0, 20, 300, 250, 250, 0, 0, 100);
  Zone.SetGroup("ROADBR2", 1 /* DAY */, 21 /* SHOPPING_PEDGRP */);
  // ****************************Commercial switched off Road and Ped Nodes*******************
  Zone.SetGroup("ROADBR2", 0 /* NIGHT */, 22 /* SHOPPING_NIGHT_PEDGRP */);
  //Hyaku Dojo for Kenji one
  Path.SwitchPedRoadsOff(106.1, -1278.3, 24.0, 96.3, -1273.5, 27.0);
  //Phil's place
  Path.SwitchPedRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0);
  // Colombian compound
  Path.SwitchPedRoadsOff(31.0, -317.0, 14.0, 91.0, -394.0, 25.0);
  //Phil's place
  Path.SwitchRoadsOff(120.0, 170.0, 10.0, 190.0, 246.0, 25.0);
  //Ambulance
  Path.SwitchRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  //Ambulance
  Path.SwitchPedRoadsOff(121.814, -46.429, 14.0, 363.858, 54.312, 20.0);
  // Witness protection house
  Path.SwitchRoadsOff(353.5, -459.0, 18.0, 397.5, -431.6, 30.0);
  // By Asukas condo
  Path.SwitchRoadsOff(465.7, -634.3, 10.0, 429.9, -610.1, 25.0);
  //Commercial to Suburbia Bridge
  Path.SwitchRoadsOff(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  Path.MarkRoadsBetweenLevels(-46.8, -648.0, 39.0, -69.1, -614.0, 50.0);
  // Loves building
  Path.SwitchPedRoadsOff(56.5, -1544.2, 10.0, 87.9, -1556.0, 30.0);
  //ped island
  Path.SwitchPedRoadsOff(413.5, -480.2, 20.0, 420.9, -499.0, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(419.5, -708.1, 20.0, 412.5, -717.9, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(-76.9, -985.4, 20.0, -68.8, -992.6, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(-76.5, -934.4, 20.0, -70.4, -928.4, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(-55.9, -934.6, 20.0, -46.4, -927.2, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(-76.4, -999.6, 20.0, -68.8, -628.5, 36.0);
  //ped island
  Path.SwitchPedRoadsOff(199.3, -935.9, 20.0, 134.8, -927.4, 40.0);
  //tunnel from commercial to intersection for sub and ind
  // ****************************************Suburban City Zones******************************
  // Gang1 in industrial = MAFIA
  // Gang2 in industrial = TRIADS
  // Gang3 in industrial = DIABLOS
  // Gang4 in commercial = YAKUZA
  // Gang5 in commercial = YARDDIES
  // Gang6 in commercial = COLUMBIANS
  // Gang7 in commercial = HOODS
  // PedDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police
  // CarDensity Gang1 Gang2 Gang3 Gang4 Gang5 Gang6 Gang7 Police PoorFamily RichFamily Executive Worker Special Big
  //NAVIGATION ZONES
  Path.SwitchRoadsOff(529.6, 106.5, -30.0, 581.4, 65.7, 0.0);
  //FRANCIS INTI. AIRPORT
  Zone.SetPedInfo("AIRPORT", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("AIRPORT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("AIRPORT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 40, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("AIRPORT", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("AIRPORT", 1 /* DAY */, 27 /* AIRPORT_PEDGRP */);
  Zone.SetGroup("AIRPORT", 0 /* NIGHT */, 28 /* AIRPORT_NIGHT_PEDGRP */);
  //WICHITA GARDENS
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 300, 0);
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 400, 0);
  Zone.SetCarInfo("PROJECT", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 100, 20, 500, 150, 0, 150, 0, 0);
  Zone.SetCarInfo("PROJECT", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 150, 10, 500, 100, 0, 150, 0, 0);
  Zone.SetGroup("PROJECT", 1 /* DAY */, 9 /* PROJECTS_PEDGRP */);
  Zone.SetGroup("PROJECT", 0 /* NIGHT */, 10 /* PROJECTS_NIGHT_PEDGRP */);
  //PIKE CREEK
  Zone.SetPedInfo("SUB_IND", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_IND", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_IND", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 300, 0, 0, 0);
  Zone.SetCarInfo("SUB_IND", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 300, 0, 0, 0);
  Zone.SetGroup("SUB_IND", 1 /* DAY */, 7 /* DOCKS_PEDGRP */);
  Zone.SetGroup("SUB_IND", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  //CEDAR CROVE
  Zone.SetPedInfo("SWANKS", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 70, 0, 30);
  Zone.SetPedInfo("SWANKS", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 90, 0, 20);
  Zone.SetCarInfo("SWANKS", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 70, 0, 30, 0, 400, 400, 0, 20, 0);
  Zone.SetCarInfo("SWANKS", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 90, 0, 20, 0, 400, 400, 0, 20, 0);
  Zone.SetGroup("SWANKS", 1 /* DAY */, 29 /* SWANKSVILLE_PEDGRP */);
  Zone.SetGroup("SWANKS", 0 /* NIGHT */, 30 /* SWANKSVILLE_NIGHT_PEDGRP */);
  //COCHRANE DAM
  Zone.SetPedInfo("BIG_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetPedInfo("BIG_DAM", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 0);
  Zone.SetCarInfo("BIG_DAM", 1 /* DAY */, 8, 0, 0, 0, 0, 0, 0, 0, 20, 300, 300, 0, 300, 0, 0);
  Zone.SetCarInfo("BIG_DAM", 0 /* NIGHT */, 6, 0, 0, 0, 0, 0, 0, 0, 10, 300, 300, 0, 300, 0, 0);
  Zone.SetGroup("BIG_DAM", 1 /* DAY */, 11 /* INDUSTRIAL_PEDGRP */);
  Zone.SetGroup("BIG_DAM", 0 /* NIGHT */, 12 /* INDUSTRIAL_NIGHT_PEDGRP */);
  //SHORESIDE VALE
  Zone.SetPedInfo("SUB_ZO2", 1 /* DAY */, 20, 0, 0, 0, 0, 0, 0, 0, 20);
  Zone.SetPedInfo("SUB_ZO2", 0 /* NIGHT */, 10, 0, 0, 0, 0, 0, 0, 0, 10);
  Zone.SetCarInfo("SUB_ZO2", 1 /* DAY */, 15, 0, 0, 0, 0, 0, 0, 0, 20, 0, 500, 450, 0, 0, 0);
  Zone.SetCarInfo("SUB_ZO2", 0 /* NIGHT */, 13, 0, 0, 0, 0, 0, 0, 0, 10, 0, 500, 450, 0, 0, 0);
  Zone.SetGroup("SUB_ZO2", 1 /* DAY */, 0 /* DEFAULT_PEDGRP */);
  Zone.SetGroup("SUB_ZO2", 0 /* NIGHT */, 0 /* DEFAULT_PEDGRP */);
  //SHORESIDE VALE
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
  // ****************************Suburban switched off Road and Ped Nodes*********************
  Zone.SetGroup("WEE_DAM", 0 /* NIGHT */, 8 /* DOCKS_NIGHT_PEDGRP */);
  // warehouse in Suburbia
  Path.SwitchRoadsOff(-1052.6693, -78.0430, 50.0, -988.0153, -67.1608, 30.0);
  // warehouse in Suburbia
  Path.SwitchPedRoadsOff(-1052.6693, -78.0430, 50.0, -988.0153, -67.1608, 30.0);
  // DAM
  Path.SwitchRoadsOff(-952.5, 361.4, 10.0, -939.3, 374.0, 30.0);
  // park area (north east)
  Path.SwitchRoadsOff(-241.7, 251.8, 0.0, -256.2, 241.4, 20.0);
  // Airport
  Path.SwitchRoadsOff(-1367.7690, -731.4872, 20.0, -743.1906, -410.1961, 5.0);
  // Airport
  Path.SwitchRoadsOff(-1591.4, -931.5, 10.0, -1572.9, -914.6, 25.0);
  // Airport
  Path.SwitchPedRoadsOff(-1310.8053, -568.7556, 5.0, -1224.9248, -483.4936, 20.0);
  //tunnel to suburbia
  Path.SwitchRoadsOff(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);
  Path.MarkRoadsBetweenLevels(496.7, 75.5, -30.0, 484.0, 44.2, 0.0);
  //tunnel to Miami	(EAST)
  Path.SwitchRoadsOff(-287.8, 396.5, 70.0, -269.0, 418.0, 100.0);
  //tunnel to Miami	(WEST)
  Path.SwitchRoadsOff(-877.1, 545.9, 60.0, -901.3, 575.0, 100.0);
  // players savehouse
  Path.SwitchRoadsOff(-690.4, 101.2, 10.0, -704.4, 78.9, 30.0);
  //
  // **************************************CAR GENERATORS**********************************************
  Path.SwitchRoadsOff(-1194.1, 98.6, 50.0, -1234.0, 119.2, 80.0);
  //SPECIAL CAR GENERATORS****************************************************************************
  // GOSUB_FILE car_generators car_gen.sc
  //Joeys Buggy
  $.joeys_buggy = CarGenerator.Create(930.93, -267.63, -100.0, 340.0, 107 /* CAR_BFINJECT */, -1, -1, false, 100, 0, 0, 10000);
  $.joeys_buggy.switch(0);
  //Car park behind radio station
  $.swank_taxi = CarGenerator.Create(933.7, -65.6, -100.0, 0.0, 141 /* CAR_BORGNINE */, -1, -1, false, 50, 0, 0, 10000);
  // *****************************************PICK_UPS**************************************************
  $.swank_taxi.switch(0);
  //AMMU NATION*****************************************************************************************
  // GOSUB_FILE main_pickups pickups.sc
  // VAR_INT ammu_shop_bloke1
  // VAR_INT time_difference current_time time_since_murdering_shopkeeper1
  // VAR_INT SHOP_COLT45 SHOP_COLT45_2 SHOP_UZI SHOP_UZI2
  // VAR_INT SHOP_GRENADE2 SHOP_UZI_2 SHOP_SNIPER_2 SHOP_AK47_2 SHOP_ARMOUR
  //Industrial
  // VAR_INT out_of_stock_uzi out_of_stock_pistol SHOP_FLAME SHOP_MOLOTOV
  //AMMUNATION
  $.SHOP_COLT45 = Pickup.Create(154 /* WEAPON_COLT45 */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1068.5, -400.8, 15.2);
  //AMMUNATION
  //Commercial
  $.SHOP_UZI = Pickup.Create(159 /* WEAPON_UZI */, 6 /* PICKUP_IN_SHOP_OUT_OF_STOCK */, 1070.5, -400.8, 15.2);
  //AMMUNATION
  $.SHOP_AK47_2 = Pickup.Create(152 /* WEAPON_AK47 */, 1 /* PICKUP_IN_SHOP */, 342.5, -713.0, 26.4);
  //AMMUNATION
  $.SHOP_SNIPER_2 = Pickup.Create(158 /* WEAPON_SNIPER */, 1 /* PICKUP_IN_SHOP */, 342.5, -716.0, 26.4);
  //AMMUNATION
  $.SHOP_GRENADE2 = Pickup.Create(151 /* WEAPON_GRENADE */, 1 /* PICKUP_IN_SHOP */, 344.5, -719.0, 26.4);
  //AMMUNATION
  $.SHOP_UZI_2 = Pickup.Create(159 /* WEAPON_UZI */, 1 /* PICKUP_IN_SHOP */, 346.5, -719.0, 26.4);
  //AMMUNATION
  //Suburbia
  $.SHOP_ARMOUR = Pickup.Create(1364 /* bodyarmour */, 1 /* PICKUP_IN_SHOP */, 342.5, -719.0, 26.4);
  //AMMUNATION
  $.SHOP_FLAME = Pickup.Create(162 /* WEAPON_FLAME */, 1 /* PICKUP_IN_SHOP */, -1206.6, -6.6, 53.3);
  //AMMUNATION
  //BONUS PICKUPS**************************************************************************************
  $.SHOP_MOLOTOV = Pickup.Create(155 /* WEAPON_MOLOTOV */, 1 /* PICKUP_IN_SHOP */, -1210.6, -6.6, 53.3);
  //INDUSTRIAL*****************************************************************************************
  Game.SetCollectableTotal(0);
  //Trenton Sawmill (rooftop)
  Game.CreateCollectable(1105.3, -1020.0, 25.1);
  //chinatown (rooftop)
  Game.CreateCollectable(877.6, -788.0, 27.6);
  //Supasave (rooftop)
  Game.CreateCollectable(1254.0, -611.2, 22.8);
  //power plant
  Game.CreateCollectable(1045.8, -967.1, 16.0);
  //chinatown (alleyway)
  Game.CreateCollectable(942.1, -793.4, 14.9);
  //chinatown (market)
  Game.CreateCollectable(934.0, -718.9, 14.8);
  //Redlight (Luigi's)
  Game.CreateCollectable(898.1, -414.7, 26.5);
  //Redlight (rooftop)
  Game.CreateCollectable(846.9, -442.5, 23.2);
  //Redlight (rooftop opposite Luigis)
  Game.CreateCollectable(927.1, -404.4, 29.1);
  //Towers
  Game.CreateCollectable(864.3, -171.5, 3.5);
  //beach
  Game.CreateCollectable(1538.3, -174.4, 19.2);
  //Easy Credit Autos
  Game.CreateCollectable(1213.1, -127.1, 15.1);
  //Harwood
  Game.CreateCollectable(753.6, 137.0, 3.5);
  //petrol station
  Game.CreateCollectable(1162.0, -101.8, 12.0);
  //Back of building behind petrol station
  Game.CreateCollectable(1155.6, -191.5, 14.4);
  //little Italy (park)
  Game.CreateCollectable(1285.5, -247.5, 42.4);
  //Towers (Between trees)
  Game.CreateCollectable(1007.2, -219.6, 6.7);
  //little Italy (building site)
  Game.CreateCollectable(1138.2, -250.0, 24.3);
  //Redlight In building (smash glass)
  Game.CreateCollectable(1023.6, -423.7, 14.9);
  //Liberty Pharmaceuticals (roof)
  Game.CreateCollectable(1237.5, -854.1, 20.6);
  //docks	9 (pier)
  Game.CreateCollectable(1478.3, -1150.7, 12.0);
  //Radio station (Rooftop)
  Game.CreateCollectable(1018.9, -56.8, 21.0);
  //Frankies mansion
  Game.CreateCollectable(1465.7, -166.5, 55.5);
  //chinatown (near the bridge behind some buildings)
  Game.CreateCollectable(1120.2, -926.2, 16.0);
  //dogfood factory
  Game.CreateCollectable(1206.5, -821.5, 15.0);
  //Towers (in bushes)
  Game.CreateCollectable(940.2, -199.9, 5.0);
  //fishfactory
  Game.CreateCollectable(979.3, -1143.1, 13.1);
  //Trenton (in front of Joeys)
  Game.CreateCollectable(1195.5, -908.8, 14.9);
  //Docks (rooftop)
  Game.CreateCollectable(1470.4, -811.4, 22.4);
  //tramp tunnel
  Game.CreateCollectable(1320.5, -365.5, 15.2);
  //Subway Industrial side
  Game.CreateCollectable(932.6, -477.3, -10.8);
  //Little Italy (back alley)
  Game.CreateCollectable(1305.9, -380.9, 39.5);
  //Island south ofindustrial
  //COMMERCIAL********************************************************************************
  Game.CreateCollectable(938.2, -1258.3, 3.5);
  //Top of Uncle BJs deli & groceries under suburban bridge
  Game.CreateCollectable(36.8, -530.2, 26.0);
  //Building site (small building)
  Game.CreateCollectable(414.4, -279.3, 23.6);
  //Torrington (AMco Roof top)
  Game.CreateCollectable(203.5, -1252.6, 59.3);
  //Garage at save the OOG bit
  Game.CreateCollectable(77.7, -352.3, 16.1);
  //Far North of map (Phils bit)
  Game.CreateCollectable(120.9, 243.7, 11.4);
  //Behind Stadium
  Game.CreateCollectable(49.4, 36.3, 16.7);
  //Under bridge (In park)
  Game.CreateCollectable(68.1, -773.3, 22.8);
  //Behind Church
  Game.CreateCollectable(-4.0, -1129.1, 26.0);
  //Doorway Bedford point (South west)
  Game.CreateCollectable(-134.7, -1386.9, 26.2);
  //Underground carpark Bedford point (South west)
  Game.CreateCollectable(-23.5, -1472.4, 19.7);
  //Alley way (South central)
  Game.CreateCollectable(112.1, -1227.6, 26.0);
  //Underground carpark Torrington (South east)
  Game.CreateCollectable(218.3, -1237.8, 20.4);
  //Behind star statue logo (South east)
  Game.CreateCollectable(308.0, -1533.4, 23.6);
  //Top of Kenji's casino (heli Pad)
  Game.CreateCollectable(468.6, -1457.2, 44.3);
  //Behind Police station
  Game.CreateCollectable(355.1, -1085.7, 25.9);
  //Multi story carpark (1st floor)
  Game.CreateCollectable(312.4, -483.8, 29.0);
  //Garage next to multi story carpark
  Game.CreateCollectable(322.3, -447.1, 23.4);
  // Jetty (North of industrial bridge)
  Game.CreateCollectable(586.7, -795.0, 1.6);
  //Jetty (South of industrial bridge)
  Game.CreateCollectable(504.3, -1027.8, 1.7);
  //Upstairs in smashable glass building (Bedford point central)
  Game.CreateCollectable(174.1, -1259.5, 32.1);
  //L shaped alley way (Central near industrial bridge)
  Game.CreateCollectable(248.8, -958.3, 26.0);
  //Basketball court
  Game.CreateCollectable(54.8, -566.5, 26.1);
  //Behind building in Project like area (South)
  Game.CreateCollectable(-77.0, -1490.1, 26.0);
  //on top of small bridge (north east)
  Game.CreateCollectable(556.0, -231.4, 22.8);
  //on roof near poject area (south west)
  Game.CreateCollectable(-38.2, -1434.3, 31.8);
  //on top of hospital (north east)
  Game.CreateCollectable(194.8, -0.5, 19.8);
  //east side of university (north)
  Game.CreateCollectable(223.1, -272.2, 16.1);
  //Stadium entrance
  Game.CreateCollectable(-18.1, -222.3, 29.8);
  //alleyway south of stadium
  Game.CreateCollectable(-69.3, -469.2, 16.1);
  //commercial to suburban bridge
  Game.CreateCollectable(-270.7, -631.6, 72.3);
  //under road tunnel (far west) Bedford point
  Game.CreateCollectable(-59.2, -579.8, 15.9);
  //just outside Police station
  Game.CreateCollectable(392.8, -1135.6, 15.9);
  //ped walk way (south central)
  Game.CreateCollectable(145.0, -1584.0, 30.7);
  //Construction site
  Game.CreateCollectable(428.1, -340.4, 16.2);
  //museum
  Game.CreateCollectable(351.1, -980.5, 33.1);
  //Pier south west coast (behind rocks)
  //SUBURBIA************************************************************************************
  Game.CreateCollectable(-221.8, -1487.6, 5.8);
  //Industrial estate  (Behind Burke)
  Game.CreateCollectable(-1193.1, -75.8, 47.4);
  //Industrial estate  (Behind import/export garage)
  Game.CreateCollectable(-1090.5, 131.7, 58.7);
  //Industrial estate (Behind Liberty Pharmaceuticals)
  Game.CreateCollectable(-1015.5, -13.0, 49.1);
  //Industrial estate  (Behind Turtel Head Fish Co)
  Game.CreateCollectable(-821.8, -184.9, 33.8);
  //Industrial estate on roof (Behind Turtel Head Fish Co)
  Game.CreateCollectable(-849.1, -209.4, 41.8);
  //Behind the furthest west Swank house
  Game.CreateCollectable(-736.4, 304.7, 54.1);
  //Behind the 2nd furthest west Swank house
  Game.CreateCollectable(-678.1, 308.6, 59.8);
  //I front of 3rd furthest west Swank house
  Game.CreateCollectable(-609.2, 286.7, 65.1);
  //columbian mansion (swimming pool)
  Game.CreateCollectable(-329.6, 320.1, 60.7);
  //Left Dam dome
  Game.CreateCollectable(-1221.1, 562.8, 68.6);
  //right Dam dome
  Game.CreateCollectable(-1131.9, 605.4, 68.6);
  //First lower Dam Tower
  Game.CreateCollectable(-1098.4, 471.3, 35.5);
  //Just to the west of the Dam
  Game.CreateCollectable(-1208.1, 325.2, 3.4);
  //Lower dam (last mission heli pad bit)
  Game.CreateCollectable(-1216.2, 347.9, 30.4);
  //behind hospital
  Game.CreateCollectable(-1211.9, -166.9, 58.7);
  //behind cop station on roof
  Game.CreateCollectable(-1195.2, -7.7, 59.8);
  //Picnic Park (Shoreside vale)
  Game.CreateCollectable(-206.9, 328.8, 3.4);
  //in tunnel behind save house
  Game.CreateCollectable(-753.2, 142.0, 10.1);
  //under twisted bridge
  Game.CreateCollectable(-697.9, -182.1, 9.2);
  //Subway
  Game.CreateCollectable(-748.4, -807.0, -13.6);
  //Projects
  Game.CreateCollectable(-489.9, -44.9, 3.8);
  //Projects (behind save house)
  Game.CreateCollectable(-632.9, 67.6, 18.8);
  //Projects (door way)
  Game.CreateCollectable(-546.8, 10.7, 3.9);
  //Airport (west side of Dome)
  Game.CreateCollectable(-1032.6, -573.4, 10.9);
  //Airport (end of a runway)
  Game.CreateCollectable(-542.0, -1046.6, 3.4);
  //Airport (Heli Pad)
  Game.CreateCollectable(-1556.4, -905.8, 14.5);
  //Airport under plane (furthest west)
  Game.CreateCollectable(-1327.0, -624.7, 11.1);
  //In front of Airport (behind billbords)
  Game.CreateCollectable(-737.4, -745.4, 9.7);
  //Airport under plane (furthest south)
  Game.CreateCollectable(-1278.7, -776.0, 11.1);
  //Airport Far south by shore
  Game.CreateCollectable(-1494.7, -1097.3, 3.4);
  //Airport next to car park (firestation)
  // ********************************************AUDIO*********************************************
  Game.CreateCollectable(-837.8, -469.2, 10.8);
  // VAR_INT sound_loop1 sound_loop2 sound_loop3 sound_loop4 sound_loop5 sound_loop6 sound_loop7 sound_loop8 sound_loop9 sound_loop10
  // VAR_INT sound_loop11 sound_loop12 sound_loop13 sound_loop14 sound_loop15 sound_loop16 sound_loop17 sound_loop18 sound_loop19 sound_loop20
  //INDUSTRIAL
  //China Town
  // VAR_INT misty_joey_loop
  //Mr Wongs Laundrette
  $.sound_loop1 = Sound.AddContinuous(850.8, -663.7, 15.0, 41 /* SOUND_LAUNDERETTE_LOOP_L */);
  // Chinese Restaurant1
  $.sound_loop2 = Sound.AddContinuous(913.6, -805.5, 15.0, 42 /* SOUND_RESTAURANT_CHINATOWN_LOOP_S */);
  //China market
  $.sound_loop3 = Sound.AddContinuous(970.0, -674.8, 15.0, 53 /* SOUND_SHOP_LOOP_L */);
  //China market
  //Little Italy (St Marks)
  $.sound_loop4 = Sound.AddContinuous(975.1, -724.0, 15.0, 53 /* SOUND_SHOP_LOOP_L */);
  //Toni's Restaurant
  $.sound_loop5 = Sound.AddContinuous(1220.0, -310.0, 32.0, 44 /* SOUND_RESTAURANT_ITALY_LOOP_S */);
  //Lips Bistro
  //docks
  $.sound_loop6 = Sound.AddContinuous(1318.4, -463.6, 57.0, 48 /* SOUND_RESTAURANT_GENERIC_LOOP_2_S */);
  //Docks
  $.sound_loop13 = Sound.AddContinuous(1579.8, -655.2, 13.0, 57 /* SOUND_DOCKS_LOOP_L */);
  //Docks2
  //Towers
  $.sound_loop14 = Sound.AddContinuous(1504.8, -873.2, 19.0, 57 /* SOUND_DOCKS_LOOP_L */);
  //Tower Block1
  $.sound_loop15 = Sound.AddContinuous(962.3, -259.7, 10.0, 59 /* SOUND_HOME_LOOP_1_L */);
  //Tower Block2
  $.sound_loop16 = Sound.AddContinuous(952.5, -148.2, 8.0, 7 /* SOUND_CLUB_LOOP_2_L */);
  //Tower Block3
  //Unsecific Areas
  $.sound_loop17 = Sound.AddContinuous(861.5, -247.2, 8.0, 5 /* SOUND_CLUB_LOOP_1_L */);
  // Frankies Club
  $.sound_loop18 = Sound.AddContinuous(1469.0, -181.0, 56.0, 60 /* SOUND_PIANO_BAR_LOOP_1_S */);
  // Sawmills
  //COMMERCIAL
  //SUBURBIA
  $.sound_loop19 = Sound.AddContinuous(1120.7, -1023.3, 23.0, 37 /* SOUND_SAWMILL_LOOP_L */);
  //Airport
  // *****************************************SPECIAL CHARACTERS********************************
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
  // Cutscene stuff
  // VAR_INT joeys_ride
  // timer for cutscenes
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
  //Luigi club door
  // VAR_INT cs_ludoor
  //Joey door
  // VAR_INT cs_joedoor
  // Eightballs door
  // VAR_INT cs_eitdoor
  //Mafia goon to be standing a Sals club
  // VAR_INT cs_mafia
  // VAR_INT cs_ship
  // VAR_INT cs_gangplank
  // VAR_INT cs_catcar
  // VAR_INT cs_curly
  // Uncle BJ's shop door
  // VAR_INT cs_shopdoor
  //Rifle 8-ball gives player
  // VAR_INT cs_rifle
  //Bomb 8-ball places on boat
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
  //Don't remove
  // VAR_INT flag_failed_luigi1
  $.flag_failed_luigi1 = 0;
  // VAR_INT cs_asuka
  // VAR_INT cs_kenji
  // VAR_INT cs_ray
  // VAR_INT cs_love
  // VAR_INT cs_phil
  //Yakuza goon to be standing at kenji's in cutscenes
  // VAR_INT cs_yakuza
  // Loves butler
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
  // *****************************************CREATE PLAYER***************************************
  // VAR_INT cs_colub1 cs_colub2 cs_colub3 cs_colub4
  //8Ball mission
  $.player = Player.Create(0, 811.90, -939.95, 35.8);
  $.player.setHeading(180.0);
  // *****************************************Industrial Default Gangs****************************
  $.script_controlled_player = $.player.getChar();
  //The Mafia
  Gang.SetCarModel(0 /* GANG_MAFIA */, 127 /* CAR_MAFIA */);
  //The Triads
  Gang.SetCarModel(1 /* GANG_TRIAD */, 125 /* CAR_BELLYUP */);
  //The Diablos
  Gang.SetCarModel(2 /* GANG_DIABLO */, 130 /* CAR_DIABLOS */);
  //The Mafia
  Gang.SetWeapons(0 /* GANG_MAFIA */, 2 /* WEAPONTYPE_PISTOL */, 2 /* WEAPONTYPE_PISTOL */);
  //The Triads
  Gang.SetWeapons(1 /* GANG_TRIAD */, 2 /* WEAPONTYPE_PISTOL */, 1 /* WEAPONTYPE_BASEBALLBAT */);
  //The Diablos
  // *************************************Commercial Default Gangs****************************
  Gang.SetWeapons(2 /* GANG_DIABLO */, 1 /* WEAPONTYPE_BASEBALLBAT */, 0 /* WEAPONTYPE_UNARMED */);
  Game.SetThreatForPedType(12 /* PEDTYPE_GANG_COLOMBIAN */, 0 /* THREAT_PLAYER1 */);
  //The YAKUZA
  Gang.SetCarModel(3 /* GANG_YAKUZA */, 129 /* CAR_YAKUZA */);
  //The COLUMBIANS
  Gang.SetCarModel(5 /* GANG_COLOMBIAN */, 131 /* CAR_COLUMB */);
  //The YARDIES
  Gang.SetCarModel(4 /* GANG_YARDIE */, 128 /* CAR_YARDIE */);
  //The YAKUZA
  Gang.SetWeapons(3 /* GANG_YAKUZA */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */);
  //The COLUMBIANS
  Gang.SetWeapons(5 /* GANG_COLOMBIAN */, 2 /* WEAPONTYPE_PISTOL */, 3 /* WEAPONTYPE_UZI */);
  //The YARDIES
  // *************************************Suburban Default Gangs****************************
  Gang.SetWeapons(4 /* GANG_YARDIE */, 1 /* WEAPONTYPE_BASEBALLBAT */, 2 /* WEAPONTYPE_PISTOL */);
  //The HOODS
  Gang.SetCarModel(6 /* GANG_HOOD */, 132 /* CAR_HOODS */);
  //The HOODS
  // **************************************Game variables*************************************
  // Global variables for missions
  Gang.SetWeapons(6 /* GANG_HOOD */, 3 /* WEAPONTYPE_UZI */, 2 /* WEAPONTYPE_PISTOL */);
  // VAR_INT flag_player_on_mission
  // VAR_INT flag_industrial_passed
  // VAR_INT flag_commercial_passed
  // VAR_INT flag_suburban_passed
  $.flag_player_on_mission = 0;
  $.flag_industrial_passed = 0;
  $.flag_commercial_passed = 0;
  // Radar Contact Blips
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
  // Death Arrest Variables
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
  // Death Arrest Stuff
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
  // Death Arrest Setting
  // DECLARE_BASE_BRIEF_ID_FOR_CONTACT(15 /* CONTACT_HOODS */, 1000);
  // ***********************************Industrial Variables**********************************
  // 8ball Missions
  // SET_DEATHARREST_STATE(true /* ON */);
  // VAR_INT flag_eightball_mission_passed
  // VAR_INT flag_eightball_mission_launched
  // VAR_INT flag_eightball_switched_off
  $.flag_eightball_mission_passed = 0;
  $.flag_eightball_mission_launched = 0;
  // Luigi variables for missions
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
  // Joey variables for missions
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
  // Toni variables for missions
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
  // Frankie variables for missions
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
  // Final Industrial Mission
  $.flag_player_had_cut1_fm3 = 0;
  // VAR_INT flag_final_mission1_passed
  // VAR_INT flag_final_mission1_launched
  $.flag_final_mission1_passed = 0;
  // Diablo Industrial Missions
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
  // Dog Food Factory Mission
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
  // **************************Industrial phone Variables*************************************
  $.flag_meat4_phone_message = 0;
  // VAR_INT Diablo_phone
  // VAR_INT blip_diablo_created_before
  //So you can re-take the Diablo Race again
  // VAR_INT flag_diablo1_passed_before
  $.flag_diablo1_passed_before = 0;
  $.blip_diablo_created_before = 0;
  // Dog Food Phone
  $.Diablo_phone = Phone.Grab(937.9, -230.1);
  // VAR_INT meat_phone
  //--------------------YARDIE--------------------------------------------
  $.meat_phone = Phone.Grab(1224.46, -839.78);
  // VAR_INT yardie_phone pager_yardie_diplayed
  // VAR_INT blip_yardie_created_before
  $.pager_yardie_diplayed = 0;
  //-------------------PAY DAY FOR RAY PHONES-----------------------------
  $.yardie_phone = Phone.Grab(120.0, -272.0);
  //Ray_phone5 Ray_phone6 Ray_phone7 Ray_phone8 Ray_phone9
  // VAR_INT Ray_phone1 Ray_phone2 Ray_phone3 Ray_phone4
  $.Ray_phone1 = Phone.Grab(229.1, -1537.6);
  $.Ray_phone2 = Phone.Grab(-53.5, -699.0);
  $.Ray_phone3 = Phone.Grab(204.7, -135.1);
  // ********************************Suburban Phone Variables*********************************
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
  // ***********************************Commercial Variables**********************************
  // Asuka variables for missions
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
  // Ray variables for missions
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
  // Kenji variables for missions
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
  // love variables for missions
  $.flag_all_kenji_missions_passed = 0;
  // VAR_INT flag_love_mission1_passed
  // VAR_INT flag_love_mission2_passed
  // VAR_INT flag_love_mission3_passed
  // VAR_INT flag_love1_launched
  $.flag_love1_launched = 0;
  $.flag_love_mission1_passed = 0;
  $.flag_love_mission2_passed = 0;
  // Yardie Commercial Missions
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
  // ***************************************Suburban Variables********************************
  // Love Mission variables
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
  // Asuka Suburban variables for missions
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
  // Hood variables for missions
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
  //Final Strand variables
  $.flag_all_hood_missions_passed = 0;
  // VAR_INT flag_player_on_cat_mission
  // VAR_INT flag_cat_mission1_passed
  // VAR_INT flag_cat_mission2_passed
  $.flag_player_on_cat_mission = 0;
  $.flag_cat_mission1_passed = 0;
  // Odd job variables
  $.flag_cat_mission2_passed = 0;
  // Ambulance Missions
  // VAR_INT been_in_ambulance_before flag_player_on_ambulance_mission
  // Fire Truck Missions
  // VAR_INT been_in_a_firetruk_before flag_player_on_fire_mission
  // Cop Car Missions
  // VAR_INT been_in_a_copcar_before flag_player_on_cop_mission
  // Unique Stunt Jump Counter
  // VAR_INT passed_usj_counter
  // VAR_INT got_siren_help_before
  $.got_siren_help_before = 0;
  // 4x4/carpark Missions
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
  // Taxi mission
  $.flag_mayhem_trigger = 0;
  // VAR_INT taxi_passed been_in_a_taxi_before flag_taxi1_mission_launched been_in_taxi1_before new_taxi_created_before
  // VAR_INT spray_taxi done_taxi_help
  $.flag_taxi1_mission_launched = 0;
  $.been_in_a_taxi_before = 0;
  $.been_in_taxi1_before = 0;
  $.taxi_passed = 0;
  $.done_taxi_help = 0;
  // RC Demolition
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
  //OTHER STUFF
  $.flag_rc4_passed = 0;
  // VAR_INT phils_guns_created_before
  // VAR_INT started_buggy_generator_before
  // VAR_INT flag_joey_mission5_terminated flag_joey_mission6_terminated
  // VAR_INT flag_luigi_mission4_terminated flag_luigi_mission5_terminated
  // VAR_INT the_scripts_started_again
  //TIMER HELP MESSAGE
  // VAR_INT timer_help_message_displayed
  // VAR_INT nicked_half_a_mil_before
  // VAR_INT flag_done_radio_8ball
  // VAR_INT van_once_a_day
  // VAR_INT breakout_timer breakout_timer_start breakout_diff
  // VAR_INT maria_exists barriers_been_added
  //Variables used to close Luigis Door in Asuka 1
  // VAR_INT door_crash_flag
  // VAR_FLOAT door_position_a1
  // Makes rubble on bridge
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
  // ********************************************Odd Jobs*************************************
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
  // ********************************create and delete all the contact bips**************************
  await asyncWait(0);
  $.luigi_contact_blip = Blip.AddSpriteForContactPoint(892.8, -425.8, 13.9, 13 /* RADAR_SPRITE_LUIGI */);
  $.luigi_contact_blip.remove();
  $.joey_contact_blip = Blip.AddSpriteForContactPoint(1191.7, -870.0, -100.0, 10 /* RADAR_SPRITE_JOEY */);
  $.joey_contact_blip.remove();
  $.toni_contact_blip = Blip.AddSpriteForContactPoint(1219.6, -321.0, -100.0, 19 /* RADAR_SPRITE_TONY */);
  $.toni_contact_blip.remove();
  $.frankie_contact_blip = Blip.AddSpriteForContactPoint(1455.7, -187.3, -100.0, 16 /* RADAR_SPRITE_SAL */);
  $.frankie_contact_blip.remove();
  $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
  $.eightball_contact_blip.remove();
  $.diablo_contact_blip = Blip.AddSpriteForContactPoint(938.4, -230.5, -100.0, 8 /* RADAR_SPRITE_EL */);
  $.diablo_contact_blip.remove();
  $.asuka_contact_blip = Blip.AddSpriteForContactPoint(523.6, -639.4, 16.6, 1 /* RADAR_SPRITE_ASUKA */);
  $.asuka_contact_blip.remove();
  $.kenji_contact_blip = Blip.AddSpriteForContactPoint(459.1, -1413.0, 26.1, 11 /* RADAR_SPRITE_KENJI */);
  $.kenji_contact_blip.remove();
  $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
  $.ray_contact_blip.remove();
  $.love_contact_blip = Blip.AddSpriteForContactPoint(86.1, -1548.7, 28.3, 6 /* RADAR_SPRITE_DON */);
  $.love_contact_blip.remove();
  $.yardie_contact_blip = Blip.AddSpriteForContactPoint(120.7, -272.1, 16.1, 12 /* RADAR_SPRITE_LIZ */);
  $.yardie_contact_blip.remove();
  $.maria_contact_blip = Blip.AddSpriteForContactPoint(-363.7, 246.1, 60.0, 3 /* RADAR_SPRITE_CAT */);
  $.maria_contact_blip.remove();
  $.hood_contact_blip = Blip.AddSpriteForContactPoint(-443.5, -6.1, 3.8, 9 /* RADAR_SPRITE_ICE */);
  $.hood_contact_blip.remove();
  $.industrail_save_blip = Blip.AddSpriteForContactPoint(893.5, -306.1, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.industrail_save_blip.remove();
  $.commercial_save_blip = Blip.AddSpriteForContactPoint(103.0, -484.2, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.commercial_save_blip.remove();
  $.suburban_save_blip = Blip.AddSpriteForContactPoint(-665.0, -6.5, -100.0, 17 /* RADAR_SPRITE_SAVE */);
  $.suburban_save_blip.remove();
  $.spray_taxi = Blip.AddSpriteForCoord(925.0, -359.5, -100.0, 18 /* RADAR_SPRITE_SPRAY */);
  //Targettable objects
  $.spray_taxi.remove();
  $.target1.makeTargetable();
  $.target2.makeTargetable();
  $.target3.makeTargetable();
  World.SetVisibilityOfClosestObjectOfType(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, false /* FALSE */);
  World.SwapNearestBuildingModel(1027.26, -933.796, 15.042, 50.0, 855 /* indhelix_barrier */, 218 /* LOD_land014 */);
  if ($.player.isPlaying()) {
    $.player.setControl(false /* Off */);
  }
  Camera.SetFadingColor(0, 0, 0);
  //DEBUG SETUP*************************************************************************************
  Camera.DoFade(0, 0 /* FADE_OUT */);
  //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  World.SwitchProcessing(false /* OFF */);
  //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  await asyncWait(1500);
  //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  World.SwitchProcessing(true /* ON */);
  //START LUIGIS***************************************************************
  Streaming.LoadScene(916.3, -413.6, 15.0);
  //TEST SO SAVE HOUSE WORKS
  $.flag_eightball_mission_passed = 1;
  //SWAP BRIDGE FROM FIXED TO DAMAGED
  //FULL GAME LOAD***********************************************************************************************
  if ($.player.isPlaying()) {
    Game.SetIntroIsPlaying(false /* FALSE */);
    Clock.SetTimeOfDay(9, 00);
    $.player.setCoordinates(916.3, -413.6, -100.0);
    $.player.setHeading(140.0);
    Camera.SetBehindPlayer();
    // LaunchMission debug.sc
    Camera.DoFade(1000, 1 /* FADE_IN */);
    //SWAP BRIDGE FROM FIXED TO DAMAGED
    $.player.addScore(1000000);
    World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
    World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1141 /* nbbridgcabls01 */, 1140 /* nbbridgfk2 */);
    World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
    World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1143 /* nbbridgerdb */, 1147 /* damgbridgerdb */);
    World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
    World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1145 /* nbbridgerda */, 1146 /* damgbbridgerda */);
    World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
    World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, 1181 /* lodridgcabls01 */, 1187 /* lodridgfk2 */);
    World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
    World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, 1183 /* lodridgerdb */, 1185 /* lodgbridgerdb */);
    World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
    World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, 1184 /* lodridgerda */, 1186 /* lodgbbridgerda */);
    // GOSUB_FILE switch_car_generator switch.sc
    // START_NEW_SCRIPT ind_save_loop
    // START_NEW_SCRIPT sub_save_loop
    // START_NEW_SCRIPT com_save_loop
    // START_NEW_SCRIPT ind_restart
    // START_NEW_SCRIPT com_restart
    // START_NEW_SCRIPT sub_restart
    if ($.player.isPlaying()) {
      $.player.setControl(true /* on */);
    }
    // SCM GOTO → mission_start (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_start"); // fallback: would break linear control flow
  }
  // LoadLaunchMission intro.sc
  // START_NEW_SCRIPT ind_save_loop
  // START_NEW_SCRIPT com_save_loop
  // START_NEW_SCRIPT sub_save_loop
  // START_NEW_SCRIPT ind_restart
  // START_NEW_SCRIPT com_restart
  // START_NEW_SCRIPT sub_restart
  // START_NEW_SCRIPT hospital_info_loop
  // START_NEW_SCRIPT police_info_loop
  if ($.player.isPlaying()) {
    $.player.setControl(true /* on */);
  }
}
