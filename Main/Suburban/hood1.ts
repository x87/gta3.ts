// Generated from Main/Suburban/hood1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_hood1() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_hood_mission = 1;
  $.flag_blip_on_hm1 = 0;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  {
  // SET_DEATHARREST_STATE(false /* OFF */);
  //WICHITA GARDENS
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 800, 0);
  // ****************************************START OF CUTSCENE********************************
  /*
  IF CAN_PLAYER_START_MISSION Player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE Player
  ELSE
  GOTO mission_hood1_failed
  ENDIF
  SET_FADING_COLOUR 0 0 0
  DO_FADE 1500 FADE_OUT
  PRINT_BIG ( HM_1 ) 15000 2 //"Uzi Driver"
  SWITCH_STREAMING OFF
  //LOAD_SPECIAL_MODEL cut_obj1 PLAYERH
  WHILE GET_FADING_STATUS
  WAIT 0
  ENDWHILE
  */
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 30, 0, 0, 0, 0, 0, 0, 800, 0);
  World.SetPedDensityMultiplier(0.0);
  //LOAD_ALL_MODELS_NOW
  //WHILE NOT HAS_MODEL_LOADED cut_obj1
  //	WAIT 0
  //ENDWHILE
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph1);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
  //SET_CUTSCENE_HEAD_ANIM cs_playerhead player
  $.cs_player.setAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(true /* ON */);
  // Displays cutscene text
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Yo this is D-ice of the Red Jacks!"
  Text.PrintNow("HM1_A", 10000, 1);
  while ($.cs_time < 4887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"I got a problem that's messin' my rep."
  Text.PrintNow("HM1_B", 10000, 1);
  while ($.cs_time < 7511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"These yound punks..."
  Text.PrintNow("HM1_C", 10000, 1);
  while ($.cs_time < 12668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Nine is their tag...."
  Text.PrintNow("HM1_D", 10000, 1);
  while ($.cs_time < 16765) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"is another day the Jacks..."
  Text.PrintNow("HM1_G", 10000, 1);
  while ($.cs_time < 19026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //I want you to show..."
  Text.PrintNow("HM1_E", 10000, 1);
  while ($.cs_time < 23017) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  //"Mow those nines down."
  Text.PrintNow("HM1_H", 10000, 1);
  while ($.cs_time < 25018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  ///"Watch your back..."
  Text.PrintNow("HM1_F", 10000, 1);
  while ($.cs_time < 28865) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("HM1_F");
  while ($.cs_time < 30000) {
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
  //SWITCH_STREAMING ON
  Cutscene.Clear();
  await asyncWait(500);
  //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1
  Camera.DoFade(1500, 1 /* FADE_IN */);
  // ****************************************END OF CUTSCENE**********************************
  World.SetPedDensityMultiplier(1.0);
  //"Mission Failed!"
  if (!($.player.isPlaying())) {
    //"Mission Failed!"
    Text.PrintBig("M_FAIL", 5000, 1);
    // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
  }
  //"Mission Failed!"
  // waiting for the player to get to the zone
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    //"Mission Failed!"
    if (!($.player.isPlaying())) {
      //"Mission Failed!"
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  //"Get a vehicle!"
  Text.PrintNow("HM1_2", 5000, 1);
  //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
  //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~R1 button~w~ to fire."
  if ($.flag_done_drive_by_help == 0) {
    $.controlmode = Pad.GetControllerMode();
    //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
    if ($.controlmode == 0) {
      //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
    if ($.controlmode == 1) {
      //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
    if ($.controlmode == 2) {
      //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~R1 button~w~ to fire."
    if ($.controlmode == 3) {
      //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~R1 button~w~ to fire."
      Text.PrintHelp("DRIVE_B");
      $.flag_done_drive_by_help = 1;
    }
  }
  //"Mission Failed!"
  while (!($.player.isInAnyCar())) {
    await asyncWait(0);
    //"Mission Failed!"
    if (!($.player.isPlaying())) {
      //"Mission Failed!"
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  //"Get to the correct zone!"
  Text.PrintNow("HM1_3", 5000, 1);
  $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0);
  $.flag_blip_on_hm1 = 1;
  //"Mission Failed!"
  while (!($.player.isInZone("PROJECT")) && !($.player.isInAnyCar())) {
    await asyncWait(0);
    //"Mission Failed!"
    if (!($.player.isPlaying())) {
      //"Mission Failed!"
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord_hm1.remove();
  $.flag_blip_on_hm1 = 0;
  KillFrenzy.Start("HM1_1", 19 /* WEAPONTYPE_UZI_DRIVEBY */, 150000, 20, ped`GANG_HOOD_B`, -1, -1, -1, false /* FALSE */);
  $.frenzy_state = KillFrenzy.ReadStatus();
  //"Mission Failed!"
  //"Get to the correct zone!"
  while ($.frenzy_state == 1) {
    await asyncWait(0);
    $.frenzy_state = KillFrenzy.ReadStatus();
    //"Mission Failed!"
    //"Get to the correct zone!"
    if (!($.player.isPlaying())) {
      //"Mission Failed!"
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
    else {
      //"Get to the correct zone!"
      if (!($.player.isInZone("PROJECT"))) {
        //"Get to the correct zone!"
        if ($.flag_blip_on_hm1 == 0) {
          $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0);
          //"Get to the correct zone!"
          Text.PrintNow("HM1_3", 5000, 1);
          $.flag_blip_on_hm1 = 1;
        }
      }
      else {
        if ($.flag_blip_on_hm1 == 1) {
          $.radar_blip_coord_hm1.remove();
          $.flag_blip_on_hm1 = 0;
        }
      }
    }
  }
  $.frenzy_state = KillFrenzy.ReadStatus();
  if ($.frenzy_state == 2) {
    // SCM GOTO → mission_hood1_passed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_hood1_passed"); // fallback: would break linear control flow
  }
  //"Mission Failed!"
  if ($.frenzy_state == 3) {
    //"Mission Failed!"
    Text.PrintBig("M_FAIL", 5000, 1);
    // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
  }
  }
}

async function mission_hood1_failed() {
  if ($.player.hasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.isDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  // mission hood1 passed
  return;
}

async function mission_hood1_passed() {
  $.flag_hood_mission1_passed = 1;
  Stat.RegisterMissionPassed("HM_1");
  Stat.PlayerMadeProgress(1);
  //Mission Passed!"
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.addScore(10000);
  $.player.clearWantedLevel();
  // START_NEW_SCRIPT hood_mission2_loop
  // mission cleanup
  return;
}

async function mission_cleanup_hood1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  $.radar_blip_coord_hm1.remove();
  //WICHITA GARDENS
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 300, 20);
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 9, 0, 0, 0, 0, 0, 0, 400, 10);
  Mission.Finish();
  return;
}

export async function hood1() {
  // *******************************************************************************************
  // *************************************Hood Mission 1****************************************
  // ****************************************Drive By*******************************************
  // MissionBoundary
  // Mission start stuff
  // ScriptName
  // SCM GOSUB mission_start_hood1
  await mission_start_hood1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB mission_cleanup_hood1
  await mission_cleanup_hood1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // Variables for mission
  // MissionBoundary
  // VAR_INT frenzy_state
  // VAR_INT radar_blip_coord_hm1
  // ***************************************Mission Start*************************************
  // VAR_INT flag_blip_on_hm1
}
