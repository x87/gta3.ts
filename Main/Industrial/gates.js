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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("PORT_W")) {
      if ($.player.IsInArea3D(1025.2, -1108.4, 12.0, 1008.2, -1098.4, 16.0, 0 /* FALSE */)) {
        if ($.player.IsInModel(125 /* CAR_BELLYUP */) || $.player.IsInModel(91 /* CAR_TRASHMASTER */) || $.player.IsInArea3D(1015.6, -1100.5, 12.0, 1009.2, -1108.1, 16.0, 0 /* FALSE */)) {
          if ($.gate_sfx1_fish == 0) {
            Sound.AddOneOffSound(1016.0, -1107.955, 12.294, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1_fish = 1;
          }
          while (!($.fish_factory_gate.Slide(1016.0, -1099.455, 12.294, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
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
        while (!($.fish_factory_gate.Slide(1016.0, -1107.955, 12.294, 0.0, 0.1, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.fish_factory_gate.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("PORT_I")) {
      if ($.player.IsInAngledArea3D(1247.58, -822.0, 12.0, 1253.94, -815.0, 18.0, 14.0, 0 /* FALSE */)) {
        if ($.gate_sfx1_meat == 0) {
          Sound.AddOneOffSound(1250.4, -812.0, 13.97, 92 /* SOUND_GATE_START_CLUNK */);
          $.gate_sfx1_meat = 1;
        }
        while (!($.dogfood_factory_gate.Slide(1244.4, -818.0, 13.97, 0.1, 0.1, 0.0, 0 /* FALSE */))) {
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
        while (!($.dogfood_factory_gate.Slide(1250.4, -812.0, 13.97, 0.1, 0.1, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.dogfood_factory_gate.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("YAKUSA")) {
      if ($.player.IsInArea3D(358.0, -1138.0, 18.0, 366.0, -1121.0, 30.0, 0 /* FALSE */)) {
        if ($.player.IsInModel(109 /* CAR_POLICE */) || $.player.IsInArea3D(365.9, -1128.2, 21.9, 358.5, -1119.5, 26.0, 0 /* FALSE */)) {
          if ($.gate_sfx1 == 0) {
            Sound.AddOneOffSound(366.158, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1 = 1;
          }
          while (!($.police_door_one.Slide(358.158, -1128.522, 21.941, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
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
        while (!($.police_door_one.Slide(366.158, -1128.522, 21.941, 0.1, 0.0, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.police_door_one.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("YAKUSA")) {
      if ($.player.IsInArea3D(317.87, -1136.0, 18.0, 322.84, -1119.82, 30.0, 0 /* FALSE */)) {
        if ($.player.IsInModel(109 /* CAR_POLICE */) || $.player.IsInArea3D(322.7, -1128.1, 21.9, 318.0, -1119.3, 26.0, 0 /* FALSE */)) {
          if ($.gate2_sfx1 == 0) {
            Sound.AddOneOffSound(326.3, -1128.522, 21.941, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate2_sfx1 = 1;
          }
          while (!($.police_door_two.Slide(332.0, -1128.522, 21.941, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
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
        while (!($.police_door_two.Slide(326.3, -1128.522, 21.941, 0.1, 0.0, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.police_door_two.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("STADIUM")) {
      if ($.player.IsInArea3D(98.6, -337.53, 14.0, 81.9, -317.56, 20.0, 0 /* FALSE */)) {
        if ($.player.IsInModel(131 /* CAR_COLUMB */) || $.player.IsInArea3D(31.0, -317.0, 14.0, 91.0, -394.0, 25.0, 0 /* FALSE */)) {
          if ($.gate2_sfx1 == 0) {
            Sound.AddOneOffSound(91.589, -318.592, 15.296, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate2_sfx1 = 1;
          }
          while (!($.colombian_gate.Slide(91.589, -327.365, 15.296, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
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
        while (!($.colombian_gate.Slide(91.589, -318.592, 15.296, 0.0, 0.1, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.colombian_gate.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("HOSPI_2")) {
      $.open_phils_gate = 0 /* FALSE */;
      if ($.flag_ray_mission2_passed == 1) {
        if ($.player.IsInArea2D(134.0, 198.0, 156.0, 207.0, 0 /* FALSE */)) {
          $.open_phils_gate = 1 /* TRUE */;
        }
      }
      else {
        if ($.flag_player_on_phil_mission == 1) {
          // SCM GOTO → phils_gate_inner (not lowered; manual jump required)
          throw new Error("unresolved GOTO phils_gate_inner"); // fallback: would break linear control flow
        }
        if ($.player.IsInArea2D(138.0, 198.0, 146.0, 207.0, 0 /* FALSE */)) {
          $.open_phils_gate = 1 /* TRUE */;
        }
      }
      if ($.open_phils_gate == 1 /* TRUE */) {
        if ($.gate2_sfx1 == 0) {
          Sound.AddOneOffSound(147.249, 207.323, 10.599, 92 /* SOUND_GATE_START_CLUNK */);
          $.gate2_sfx1 = 1;
        }
        while (!($.phils_compnd_gate.Slide(147.249, 214.523, 10.599, 0.0, 0.1, 0.0, 0 /* FALSE */))) {
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
        while (!($.phils_compnd_gate.Slide(147.249, 207.323, 10.599, 0.0, 0.1, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.phils_compnd_gate.GetCoordinates();
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
  if ($.player.IsPlaying()) {
    if ($.player.IsInZone("SWANKS")) {
      if ($.player.IsInArea3D(-367.3, 241.0, 59.0, -358.8, 259.6, 65.0, 0 /* FALSE */)) {
        if ($.player.IsInModel(131 /* CAR_COLUMB */) || $.player.IsInArea3D(-367.3, 251.0, 59.0, -358.8, 259.6, 65.0, 0 /* FALSE */)) {
          if ($.gate_sfx1 == 0) {
            Sound.AddOneOffSound(-363.05, 250.455, 61.355, 92 /* SOUND_GATE_START_CLUNK */);
            $.gate_sfx1 = 1;
          }
          while (!($.Columbian_gate2.Slide(-370.05, 250.455, 61.355, 0.1, 0.0, 0.0, 0 /* FALSE */))) {
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
        while (!($.Columbian_gate2.Slide(-363.05, 250.455, 61.355, 0.1, 0.0, 0.0, 1 /* TRUE */))) {
          await asyncWait(0);
        }
        [$.objectx, $.objecty, $.objectz] = $.Columbian_gate2.GetCoordinates();
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
  // SET_DEATHARREST_STATE(0 /* OFF */);
}
