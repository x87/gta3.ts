// Generated from Main/Industrial/frank2.1.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_frankie2_1() {
  $.flag_player_on_mission = 1;
  Stat.RegisterMissionGiven();
  await asyncWait(0);
  $.flag_player_on_frankie_mission = 1;
  {
  Streaming.LoadSpecialCharacter(1, $.frankie);
  Streaming.LoadSpecialModel(hier`cutobj01`, FRANKH);
  Streaming.RequestModel(ped`GANG_MAFIA_B`);
  Streaming.RequestModel(franksclb02);
  Streaming.RequestModel(salvsdetail);
  Streaming.RequestModel(swank_inside);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(ped`GANG_MAFIA_B`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(franksclb02)) || !(Streaming.HasModelLoaded(salvsdetail)) || !(Streaming.HasModelLoaded(swank_inside))) {
    await asyncWait(0);
  }
  Cutscene.Load(s3_rtc);
  Cutscene.SetOffset(1457.776, -185.348, 54.925);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim($.player);
  $.cs_frankie = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_frankie.SetAnim($.frankie);
  $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, hier`cutobj01`);
  $.cs_frankiehead.SetAnim(frank);
  $.cs_mafia = CutsceneObject.Create(ped`GANG_MAFIA_B`);
  $.cs_mafia.SetAnim(gang02);
  World.ClearArea(1455.1, -187.8, -100.0, 1.0, 1 /* TRUE */);
  $.player.SetCoordinates(1455.1, -187.8, -100.0);
  $.player.SetHeading(180.0);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  World.SwitchRubbish(0 /* OFF */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 5136) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_C", 10000, 1);
  while ($.cs_time < 8848) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_D", 10000, 1);
  while ($.cs_time < 12450) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_E", 10000, 1);
  while ($.cs_time < 15984) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_F", 10000, 1);
  while ($.cs_time < 20426) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_G", 10000, 1);
  while ($.cs_time < 27076) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_H", 10000, 1);
  while ($.cs_time < 32651) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow("FM3_I", 10000, 1);
  while ($.cs_time < 36233) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearThisPrint("FM3_I");
  while ($.cs_time < 38333) {
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
  World.SwitchRubbish(1 /* ON */);
  Camera.SetBehindPlayer();
  await asyncWait(500);
  Camera.DoFade(1500, 1 /* FADE_IN */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(ped`GANG_MAFIA_B`);
  Streaming.MarkModelAsNoLongerNeeded(franksclb02);
  Streaming.MarkModelAsNoLongerNeeded(salvsdetail);
  Streaming.MarkModelAsNoLongerNeeded(swank_inside);
  }
  // SCM GOTO → mission_frankie2.1_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_frankie2.1_passed"); // fallback: would break linear control flow
}

async function mission_frankie2_1_failed() {
  Text.PrintBig("M_FAIL", 5000, 1);
  return;
}

async function mission_frankie2_1_passed() {
  $.flag_frankie_mission2_1_passed = 1;
  $.flag_frankie_switched_off = 1;
  Stat.RegisterMissionPassed("FM21");
  Stat.PlayerMadeProgress(1);
  $.frankie_contact_blip.Remove();
  $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
  // START_NEW_SCRIPT frankie_mission3_loop
  return;
}

async function mission_cleanup_frankie2_1() {
  $.flag_player_on_mission = 0;
  $.flag_player_on_frankie_mission = 0;
  Mission.Finish();
  return;
}

export async function frank2_1() {
  // MissionBoundary
  // ScriptName
  // SCM GOSUB mission_start_frankie2.1
  await mission_start_frankie2_1();
  // fallback if label was not emitted as async function: no-op continues linearly
  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_frankie2.1_failed
    await mission_frankie2_1_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  // SCM GOSUB mission_cleanup_frankie2.1
  await mission_cleanup_frankie2_1();
  // fallback if label was not emitted as async function: no-op continues linearly
  // MissionBoundary
}
