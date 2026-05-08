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
  // SET_DEATHARREST_STATE(0 /* OFF */);
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 800, 0);
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 30, 0, 0, 0, 0, 0, 0, 800, 0);
  World.SetPedDensityMultiplier(0.0);
  World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0);
  Cutscene.Load(hd_ph1);
  Cutscene.SetOffset(-444.714, -6.321, 2.9);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 2096) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_A", 10000, 1);
  while ($.cs_time < 4887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_B", 10000, 1);
  while ($.cs_time < 7511) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_C", 10000, 1);
  while ($.cs_time < 12668) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_D", 10000, 1);
  while ($.cs_time < 16765) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_G", 10000, 1);
  while ($.cs_time < 19026) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_E", 10000, 1);
  while ($.cs_time < 23017) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("HM1_H", 10000, 1);
  while ($.cs_time < 25018) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
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
  Cutscene.Clear();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SetPedDensityMultiplier(1.0);
  if (!($.player.IsPlaying())) {
    Text.PrintBig("M_FAIL", 5000, 1);
    // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
  }
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  Text.PrintNow("HM1_2", 5000, 1);
  if ($.flag_done_drive_by_help == 0) {
    $.controlmode = Pad.GetControllerMode();
    if ($.controlmode == 0) {
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    if ($.controlmode == 1) {
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    if ($.controlmode == 2) {
      Text.PrintHelp("DRIVE_A");
      $.flag_done_drive_by_help = 1;
    }
    if ($.controlmode == 3) {
      Text.PrintHelp("DRIVE_B");
      $.flag_done_drive_by_help = 1;
    }
  }
  while (!($.player.IsInAnyCar())) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  Text.PrintNow("HM1_3", 5000, 1);
  $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0);
  $.flag_blip_on_hm1 = 1;
  while (!($.player.IsInZone("PROJECT")) && !($.player.IsInAnyCar())) {
    await asyncWait(0);
    if (!($.player.IsPlaying())) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
  }
  $.radar_blip_coord_hm1.Remove();
  $.flag_blip_on_hm1 = 0;
  KillFrenzy.Start("HM1_1", 19 /* WEAPONTYPE_UZI_DRIVEBY */, 150000, 20, ped`GANG_HOOD_B`, -1, -1, -1, 0 /* FALSE */);
  $.frenzy_state = KillFrenzy.ReadStatus();
  while ($.frenzy_state == 1) {
    await asyncWait(0);
    $.frenzy_state = KillFrenzy.ReadStatus();
    if (!($.player.IsPlaying())) {
      Text.PrintBig("M_FAIL", 5000, 1);
      // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
    }
    else {
      if (!($.player.IsInZone("PROJECT"))) {
        if ($.flag_blip_on_hm1 == 0) {
          $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0);
          Text.PrintNow("HM1_3", 5000, 1);
          $.flag_blip_on_hm1 = 1;
        }
      }
      else {
        if ($.flag_blip_on_hm1 == 1) {
          $.radar_blip_coord_hm1.Remove();
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
  if ($.frenzy_state == 3) {
    Text.PrintBig("M_FAIL", 5000, 1);
    // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
    throw new Error("unresolved GOTO mission_hood1_failed"); // fallback: would break linear control flow
  }
  }
}

async function mission_hood1_failed() {
  if ($.player.HasBeenArrested()) {
    Restart.OverridePolice(3 /* LEVEL_SUBURBAN */);
  }
  if ($.player.IsDead()) {
    Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */);
  }
  return;
}

async function mission_hood1_passed() {
  $.flag_hood_mission1_passed = 1;
  Stat.RegisterMissionPassed("HM_1");
  Stat.PlayerMadeProgress(1);
  Text.PrintWithNumberBig("M_PASS", 10000, 5000, 1);
  Audio.PlayMissionPassedTune(1);
  $.player.AddScore(10000);
  $.player.ClearWantedLevel();
  // START_NEW_SCRIPT hood_mission2_loop
  return;
}

async function mission_cleanup_hood1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_hood_mission = 0;
  $.radar_blip_coord_hm1.Remove();
  Zone.SetPedInfo("PROJECT", 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 300, 20);
  Zone.SetPedInfo("PROJECT", 0 /* NIGHT */, 9, 0, 0, 0, 0, 0, 0, 400, 10);
  Mission.Finish();
  return;
}

export async function hood1() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_hood1
  await mission_start_hood1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB mission_cleanup_hood1
  await mission_cleanup_hood1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
  // VAR_INT frenzy_state
  // VAR_INT radar_blip_coord_hm1
  // VAR_INT flag_blip_on_hm1
}
