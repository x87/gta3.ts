// Generated from Main/Industrial/gates.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_gates() {
  {
  // START_NEW_SCRIPT fish_factory_gate
  // START_NEW_SCRIPT dog_food_factory_gate
  // START_NEW_SCRIPT police_gate1
  // START_NEW_SCRIPT police_gate2
  // START_NEW_SCRIPT colombian_gate
  // START_NEW_SCRIPT phils_gate
  // START_NEW_SCRIPT colombian_gate2
  // MissionBoundary
  }
}

async function fish_factory_gate() {
  {
  // ScriptName
}

async function fish_factory_gate_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
  // Fish Factory Gate
  //					GET_OBJECT_COORDINATES fish_factory_gate objectx objecty objectz
  //	IF IS_PLAYER_IN_AREA_3D player 1025.2 -1108.4 12.0 1008.2 -1098.4 16.0 FALSE
  //	IF IS_PLAYER_IN_ZONE Player PORT_W
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Fish Factory Gate
    //					GET_OBJECT_COORDINATES fish_factory_gate objectx objecty objectz
    //	IF IS_PLAYER_IN_AREA_3D player 1025.2 -1108.4 12.0 1008.2 -1098.4 16.0 FALSE
    //	IF IS_PLAYER_IN_ZONE Player PORT_W
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
    if ($.player.isInZone("PORT_W")) {
      //					GET_OBJECT_COORDINATES fish_factory_gate objectx objecty objectz
      //	IF IS_PLAYER_IN_AREA_3D player 1025.2 -1108.4 12.0 1008.2 -1098.4 16.0 FALSE
      if ($.player.isInArea3D(1025.2, -1108.4, 12.0, 1008.2, -1098.4, 16.0, false /* FALSE */)) {
        if ($.player.isInModel(125 /* CAR_BELLYUP */) || $.player.isInModel(91 /* CAR_TRASHMASTER */) || $.player.isInArea3D(1015.6, -1100.5, 12.0, 1009.2, -1108.1, 16.0, false /* FALSE */)) {
          if ($.gate_sfx1_fish == 0) {
            Sound.AddOneOffSound(1016.0, -1107.955, 12.294, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1_fish = 1;
          }
          while (!($.fish_factory_gate.slide(1016.0, -1099.455, 12.294, 0.0, 0.1, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          if ($.not_clunked_yet == 1) {
            $.gate_sfx2_fish = 0;
            $.not_clunked_yet = 0;
          }
          if ($.gate_sfx2_fish == 0) {
            Sound.AddOneOffSound(1016.0, -1099.455, 12.294, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2_fish = 1;
          }
        }
      }
      else {
        if ($.gate_sfx1_fish == 1) {
          Sound.AddOneOffSound(1016.0, -1099.455, 12.294, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES fish_factory_gate objectx objecty objectz
        while (!($.fish_factory_gate.slide(1016.0, -1107.955, 12.294, 0.0, 0.1, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.fish_factory_gate.getCoordinates();
        if ($.gate_sfx2_fish == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 1016.0 && $.objecty == -1107.955 && $.objectz == 12.294) {
            Sound.AddOneOffSound(1016.0, -1107.955, 12.294, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2_fish = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate_sfx1_fish = 0;
      }
    }
  }
  // SCM GOTO → fish_factory_gate_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO fish_factory_gate_inner"); // fallback: would break linear control flow
  }
}

async function dog_food_factory_gate() {
  {
  // ScriptName
}

async function dog_food_factory_gate_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
  // Dog Food Factory Gate
  //GET_OBJECT_COORDINATES dogfood_factory_gate objectx objecty objectz
  //	IF IS_PLAYER_IN_ANGLED_AREA_3D player 1247.58 -822.0 12.0 1253.94 -815.0 18.0 14.0 FALSE
  //	IF IS_PLAYER_IN_ZONE Player PORT_I
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Dog Food Factory Gate
    //GET_OBJECT_COORDINATES dogfood_factory_gate objectx objecty objectz
    //	IF IS_PLAYER_IN_ANGLED_AREA_3D player 1247.58 -822.0 12.0 1253.94 -815.0 18.0 14.0 FALSE
    //	IF IS_PLAYER_IN_ZONE Player PORT_I
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_INDUSTRIAL
    if ($.player.isInZone("PORT_I")) {
      //GET_OBJECT_COORDINATES dogfood_factory_gate objectx objecty objectz
      //	IF IS_PLAYER_IN_ANGLED_AREA_3D player 1247.58 -822.0 12.0 1253.94 -815.0 18.0 14.0 FALSE
      if ($.player.isInAngledArea3D(1247.58, -822.0, 12.0, 1253.94, -815.0, 18.0, 14.0, false /* FALSE */)) {
        if ($.gate_sfx1_meat == 0) {
          Sound.AddOneOffSound(1250.4, -812.0, 13.97, 92 /* SOUND_GATE_START_CLUNK */);
          $.gate_sfx1_meat = 1;
        }
        while (!($.dogfood_factory_gate.slide(1244.4, -818.0, 13.97, 0.1, 0.1, 0.0, false /* FALSE */))) {
          await asyncWait(0);
        }
        if ($.not_clunked_yet == 1) {
          $.gate_sfx2_meat = 0;
          $.not_clunked_yet = 0;
        }
        if ($.gate_sfx2_meat == 0) {
          Sound.AddOneOffSound(1244.4, -818.0, 13.97, 93 /* SOUND_GATE_STOP_CLUNK */);
          $.gate_sfx2_meat = 1;
        }
      }
      else {
        if ($.gate_sfx1_meat == 1) {
          Sound.AddOneOffSound(1244.4, -818.0, 13.97, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //GET_OBJECT_COORDINATES dogfood_factory_gate objectx objecty objectz
        while (!($.dogfood_factory_gate.slide(1250.4, -812.0, 13.97, 0.1, 0.1, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.dogfood_factory_gate.getCoordinates();
        if ($.gate_sfx2_meat == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 1250.4 && $.objecty == -812.0 && $.objectz == 13.97) {
            Sound.AddOneOffSound(1250.4, -812.0, 13.97, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2_meat = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate_sfx1_meat = 0;
      }
    }
  }
  // SCM GOTO → dog_food_factory_gate_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO dog_food_factory_gate_inner"); // fallback: would break linear control flow
  }
}

async function police_gate1() {
  {
  // ScriptName
}

async function police_gate1_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  // Commercial Police Gate one
  //					GET_OBJECT_COORDINATES police_door_one objectx objecty objectz
  //	IF IS_PLAYER_IN_AREA_3D player 358.0 -1138.0 18.0 366.0 -1121.0 30.0 FALSE
  //	IF IS_PLAYER_IN_ZONE player YAKUSA
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Commercial Police Gate one
    //					GET_OBJECT_COORDINATES police_door_one objectx objecty objectz
    //	IF IS_PLAYER_IN_AREA_3D player 358.0 -1138.0 18.0 366.0 -1121.0 30.0 FALSE
    //	IF IS_PLAYER_IN_ZONE player YAKUSA
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
    if ($.player.isInZone("YAKUSA")) {
      //					GET_OBJECT_COORDINATES police_door_one objectx objecty objectz
      //	IF IS_PLAYER_IN_AREA_3D player 358.0 -1138.0 18.0 366.0 -1121.0 30.0 FALSE
      if ($.player.isInArea3D(358.0, -1138.0, 18.0, 366.0, -1121.0, 30.0, false /* FALSE */)) {
        if ($.player.isInModel(109 /* CAR_POLICE */) || $.player.isInArea3D(365.9, -1128.2, 21.9, 358.5, -1119.5, 26.0, false /* FALSE */)) {
          if ($.gate_sfx1 == 0) {
            Sound.AddOneOffSound(366.158, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1 = 1;
          }
          while (!($.police_door_one.slide(358.158, -1128.522, 21.941, 0.1, 0.0, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          if ($.not_clunked_yet == 1) {
            $.gate_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
          if ($.gate_sfx2 == 0) {
            Sound.AddOneOffSound(358.158, -1128.522, 21.941, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2 = 1;
          }
        }
      }
      else {
        if ($.gate_sfx1 == 1) {
          Sound.AddOneOffSound(358.158, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES police_door_one objectx objecty objectz
        while (!($.police_door_one.slide(366.158, -1128.522, 21.941, 0.1, 0.0, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.police_door_one.getCoordinates();
        if ($.gate_sfx2 == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 366.158 && $.objecty == -1128.522 && $.objectz == 21.941) {
            Sound.AddOneOffSound(366.158, -1128.522, 21.941, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate_sfx1 = 0;
      }
    }
  }
  // SCM GOTO → police_gate1_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO police_gate1_inner"); // fallback: would break linear control flow
  }
}

async function police_gate2() {
  {
  // ScriptName
}

async function police_gate2_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  // commercial police gate two
  //					GET_OBJECT_COORDINATES police_door_two objectx objecty objectz
  //	IF IS_PLAYER_IN_AREA_3D player 317.87 -1136.0 18.0 322.84 -1119.82 30.0 FALSE
  //	IF IS_PLAYER_IN_ZONE player YAKUSA
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // commercial police gate two
    //					GET_OBJECT_COORDINATES police_door_two objectx objecty objectz
    //	IF IS_PLAYER_IN_AREA_3D player 317.87 -1136.0 18.0 322.84 -1119.82 30.0 FALSE
    //	IF IS_PLAYER_IN_ZONE player YAKUSA
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
    if ($.player.isInZone("YAKUSA")) {
      //					GET_OBJECT_COORDINATES police_door_two objectx objecty objectz
      //	IF IS_PLAYER_IN_AREA_3D player 317.87 -1136.0 18.0 322.84 -1119.82 30.0 FALSE
      if ($.player.isInArea3D(317.87, -1136.0, 18.0, 322.84, -1119.82, 30.0, false /* FALSE */)) {
        if ($.player.isInModel(109 /* CAR_POLICE */) || $.player.isInArea3D(322.7, -1128.1, 21.9, 318.0, -1119.3, 26.0, false /* FALSE */)) {
          if ($.gate2_sfx1 == 0) {
            Sound.AddOneOffSound(326.3, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate2_sfx1 = 1;
          }
          while (!($.police_door_two.slide(332.0, -1128.522, 21.941, 0.1, 0.0, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          if ($.not_clunked_yet == 1) {
            $.gate2_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
          if ($.gate2_sfx2 == 0) {
            Sound.AddOneOffSound(332.0, -1128.522, 21.941, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate2_sfx2 = 1;
          }
        }
      }
      else {
        if ($.gate2_sfx1 == 1) {
          Sound.AddOneOffSound(332.0, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES police_door_two objectx objecty objectz
        while (!($.police_door_two.slide(326.3, -1128.522, 21.941, 0.1, 0.0, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.police_door_two.getCoordinates();
        if ($.gate2_sfx2 == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 326.3 && $.objecty == -1128.522 && $.objectz == 21.941) {
            Sound.AddOneOffSound(326.3, -1128.522, 21.941, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate2_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate2_sfx1 = 0;
      }
    }
  }
  // SCM GOTO → police_gate2_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO police_gate2_inner"); // fallback: would break linear control flow
  }
}

async function colombian_gate() {
  {
  // ScriptName
}

async function colombian_gate_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  // Colombian Compound Gate
  //					GET_OBJECT_COORDINATES colombian_gate objectx objecty objectz
  //	IF IS_PLAYER_IN_AREA_3D player 98.6 -337.53 14.0 81.9 -317.56 20.0 FALSE
  //	IF IS_PLAYER_IN_ZONE player STADIUM
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Colombian Compound Gate
    //					GET_OBJECT_COORDINATES colombian_gate objectx objecty objectz
    //	IF IS_PLAYER_IN_AREA_3D player 98.6 -337.53 14.0 81.9 -317.56 20.0 FALSE
    //	IF IS_PLAYER_IN_ZONE player STADIUM
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
    if ($.player.isInZone("STADIUM")) {
      //					GET_OBJECT_COORDINATES colombian_gate objectx objecty objectz
      //	IF IS_PLAYER_IN_AREA_3D player 98.6 -337.53 14.0 81.9 -317.56 20.0 FALSE
      if ($.player.isInArea3D(98.6, -337.53, 14.0, 81.9, -317.56, 20.0, false /* FALSE */)) {
        if ($.player.isInModel(131 /* CAR_COLUMB */) || $.player.isInArea3D(31.0, -317.0, 14.0, 91.0, -394.0, 25.0, false /* FALSE */)) {
          if ($.gate2_sfx1 == 0) {
            Sound.AddOneOffSound(91.589, -318.592, 15.296, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate2_sfx1 = 1;
          }
          while (!($.colombian_gate.slide(91.589, -327.365, 15.296, 0.0, 0.1, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          if ($.not_clunked_yet == 1) {
            $.gate_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
          if ($.gate2_sfx2 == 0) {
            Sound.AddOneOffSound(91.589, -327.365, 15.296, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate2_sfx2 = 1;
          }
        }
      }
      else {
        if ($.gate2_sfx1 == 1) {
          Sound.AddOneOffSound(91.589, -327.365, 15.296, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES colombian_gate objectx objecty objectz
        while (!($.colombian_gate.slide(91.589, -318.592, 15.296, 0.0, 0.1, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.colombian_gate.getCoordinates();
        if ($.gate2_sfx2 == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 91.589 && $.objecty == -318.592 && $.objectz == 15.296) {
            Sound.AddOneOffSound(91.589, -318.592, 15.296, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate2_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate2_sfx1 = 0;
      }
    }
  }
  // SCM GOTO → colombian_gate_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO colombian_gate_inner"); // fallback: would break linear control flow
  }
}

async function phils_gate() {
  {
  // ScriptName
}

async function phils_gate_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  //PHIL'S GATE
  //	If player is doing phil mission
  //	then this script doesn't move the gate at all.
  //	The phil script should do all gate moving.
  //					GET_OBJECT_COORDINATES phils_compnd_gate objectx objecty objectz
  //	IF open_phils_gate = TRUE
  //	IF IS_PLAYER_IN_ZONE player HOSPI_2
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    //PHIL'S GATE
    //	If player is doing phil mission
    //	then this script doesn't move the gate at all.
    //	The phil script should do all gate moving.
    //					GET_OBJECT_COORDINATES phils_compnd_gate objectx objecty objectz
    //	IF open_phils_gate = TRUE
    //	IF IS_PLAYER_IN_ZONE player HOSPI_2
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_COMMERCIAL
    if ($.player.isInZone("HOSPI_2")) {
      $.open_phils_gate = 0 /* FALSE */;
      //	If player is doing phil mission
      //	then this script doesn't move the gate at all.
      //	The phil script should do all gate moving.
      if ($.flag_ray_mission2_passed == 1) {
        if ($.player.isInArea2D(134.0, 198.0, 156.0, 207.0, false /* FALSE */)) {
          $.open_phils_gate = 1 /* TRUE */;
        }
      }
      else {
        //	If player is doing phil mission
        //	then this script doesn't move the gate at all.
        //	The phil script should do all gate moving.
        if ($.flag_player_on_phil_mission == 1) {
          //	then this script doesn't move the gate at all.
          // SCM GOTO → phils_gate_inner (not lowered; manual jump required)
          throw new Error("unresolved GOTO phils_gate_inner"); // fallback: would break linear control flow
        }
        if ($.player.isInArea2D(138.0, 198.0, 146.0, 207.0, false /* FALSE */)) {
          $.open_phils_gate = 1 /* TRUE */;
        }
      }
      //					GET_OBJECT_COORDINATES phils_compnd_gate objectx objecty objectz
      //	IF open_phils_gate = TRUE
      if ($.open_phils_gate == 1 /* TRUE */) {
        if ($.gate2_sfx1 == 0) {
          Sound.AddOneOffSound(147.249, 207.323, 10.599, 92 /* SOUND_GATE_START_CLUNK */);
          $.gate2_sfx1 = 1;
        }
        while (!($.phils_compnd_gate.slide(147.249, 214.523, 10.599, 0.0, 0.1, 0.0, false /* FALSE */))) {
          await asyncWait(0);
        }
        if ($.not_clunked_yet == 1) {
          $.gate_sfx2 = 0;
          $.not_clunked_yet = 0;
        }
        if ($.gate2_sfx2 == 0) {
          Sound.AddOneOffSound(147.249, 214.523, 10.599, 93 /* SOUND_GATE_STOP_CLUNK */);
          $.gate2_sfx2 = 1;
        }
      }
      else {
        if ($.gate2_sfx1 == 1) {
          Sound.AddOneOffSound(147.249, 214.523, 10.599, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES phils_compnd_gate objectx objecty objectz
        while (!($.phils_compnd_gate.slide(147.249, 207.323, 10.599, 0.0, 0.1, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.phils_compnd_gate.getCoordinates();
        if ($.gate2_sfx2 == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == 147.249 && $.objecty == 207.323 && $.objectz == 10.599) {
            Sound.AddOneOffSound(147.249, 207.323, 10.599, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate2_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate2_sfx1 = 0;
      }
    }
  }
  // SCM GOTO → phils_gate_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO phils_gate_inner"); // fallback: would break linear control flow
  }
}

async function colombian_gate2() {
  {
  // ScriptName
}

async function colombian_gate2_inner() {
  await asyncWait(1000);
  //IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
  // Columbian gate
  //					GET_OBJECT_COORDINATES Columbian_gate2 objectx objecty objectz
  //	IF IS_PLAYER_IN_AREA_3D player -367.3 241.0 59.0 -358.8 259.6 65.0 FALSE
  //	IF IS_PLAYER_IN_ZONE player SWANKS
  //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
  //	IF IS_PLAYER_PLAYING Player
  if ($.player.isPlaying()) {
    // Columbian gate
    //					GET_OBJECT_COORDINATES Columbian_gate2 objectx objecty objectz
    //	IF IS_PLAYER_IN_AREA_3D player -367.3 241.0 59.0 -358.8 259.6 65.0 FALSE
    //	IF IS_PLAYER_IN_ZONE player SWANKS
    //ENDIF	//	IF IS_COLLISION_IN_MEMORY LEVEL_SUBURBAN
    if ($.player.isInZone("SWANKS")) {
      //					GET_OBJECT_COORDINATES Columbian_gate2 objectx objecty objectz
      //	IF IS_PLAYER_IN_AREA_3D player -367.3 241.0 59.0 -358.8 259.6 65.0 FALSE
      if ($.player.isInArea3D(-367.3, 241.0, 59.0, -358.8, 259.6, 65.0, false /* FALSE */)) {
        if ($.player.isInModel(131 /* CAR_COLUMB */) || $.player.isInArea3D(-367.3, 251.0, 59.0, -358.8, 259.6, 65.0, false /* FALSE */)) {
          if ($.gate_sfx1 == 0) {
            Sound.AddOneOffSound(-363.05, 250.455, 61.355, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1 = 1;
          }
          while (!($.Columbian_gate2.slide(-370.05, 250.455, 61.355, 0.1, 0.0, 0.0, false /* FALSE */))) {
            await asyncWait(0);
          }
          if ($.not_clunked_yet == 1) {
            $.gate_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
          if ($.gate_sfx2 == 0) {
            Sound.AddOneOffSound(-370.05, 250.455, 61.355, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2 = 1;
          }
        }
      }
      else {
        if ($.gate_sfx1 == 1) {
          Sound.AddOneOffSound(-370.05, 250.455, 61.355, 92 /* SOUND_GATE_START_CLUNK */);
        }
        //					GET_OBJECT_COORDINATES Columbian_gate2 objectx objecty objectz
        while (!($.Columbian_gate2.slide(-363.05, 250.455, 61.355, 0.1, 0.0, 0.0, true /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.Columbian_gate2.getCoordinates();
        if ($.gate_sfx2 == 1) {
          $.not_clunked_yet = 1;
          if ($.objectx == -363.05 && $.objecty == 250.455 && $.objectz == 61.355) {
            Sound.AddOneOffSound(-363.05, 250.455, 61.355, 93 /* SOUND_GATE_STOP_CLUNK */);
            $.gate_sfx2 = 0;
            $.not_clunked_yet = 0;
          }
        }
        $.gate_sfx1 = 0;
      }
    }
  }
  // SCM GOTO → colombian_gate2_inner (not lowered; manual jump required)
  throw new Error("unresolved GOTO colombian_gate2_inner"); // fallback: would break linear control flow
  }
}

export async function gates() {
  // MissionBoundary
  // Checks for the sliding doors to tell them to close if an object is in the way
  // VAR_FLOAT objectx objecty objectz
  // VAR_INT gate_sfx1_fish gate_sfx2_fish not_clunked_yet
  // VAR_INT gate_sfx1_meat gate_sfx2_meat
  // VAR_INT gate_sfx1 gate_sfx2 gate2_sfx1 gate2_sfx2
  // VAR_INT open_phils_gate
  $.gate_sfx1 = 0;
  $.gate_sfx2 = 0;
  $.gate2_sfx1 = 0;
  $.gate2_sfx2 = 0;
  $.gate_sfx1_fish = 0;
  $.gate_sfx2_fish = 0;
  $.gate_sfx1_meat = 0;
  $.gate_sfx2_meat = 0;
  $.not_clunked_yet = 0;
  // ScriptName
  // SET_DEATHARREST_STATE(false /* OFF */);
}
