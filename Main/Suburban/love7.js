// Generated from Main/Suburban/love7.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_love7() {
  $.flag_player_on_mission = 1;
  $.flag_player_on_love_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  // ScriptName
  Streaming.RequestModel(tshrorckgrdn);
  Streaming.RequestModel(tshrorckgrdn_alfas);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasModelLoaded(tshrorckgrdn_alfas)) || !(Streaming.HasModelLoaded(tshrorckgrdn))) {
    await asyncWait(0);
  }
  Cutscene.Load(D7_MLD);
  Cutscene.SetOffset(85.2162, -1532.9093, 243.5422);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  World.ClearArea(82.44, -1548.49, 28.0, 2.0, 1 /* TRUE */);
  $.player.SetCoordinates(82.44, -1548.49, 28.0);
  $.player.SetHeading(90.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Cutscene.Start();
  World.SwitchRubbish(0 /* OFF */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 15000) {
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
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn);
  Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas);
  Camera.SetBehindPlayer();
  Camera.DoFade(1500, 1 /* FADE_IN */);
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }
  // SCM GOTO → mission_love7_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_love7_passed"); // fallback: would break linear control flow
}

async function mission_love7_failed() {
  return;
}

async function mission_love7_passed() {
  $.flag_love_mission7_passed = 1;
  Stat.PlayerMadeProgress(1);
  $.love_contact_blip.Remove();
  $.player.ClearWantedLevel();
  Audio.PlayMissionPassedTune(1);
  Stat.RegisterMissionPassed(LOVE7);
  return;
}

async function mission_cleanup_love7() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_love_mission = 0;
  Mission.Finish();
  return;
}

export async function love7() {
  // MissionBoundary
  // SCM GOSUB mission_start_love7
  await mission_start_love7();
  // fallback if label was not emitted as async function: no-op continues linearly
  // SCM GOSUB mission_cleanup_love7
  await mission_cleanup_love7();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
}
