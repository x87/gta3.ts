// Generated from Main/Commercial/asuka4.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_asuka4() {


  Stat.RegisterMissionGiven();
  $.flag_player_on_mission = 1;
  $.flag_player_on_asuka_mission = 1;
  // ScriptName
  await asyncWait(0);



  {



  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, ASUKAH);
  Streaming.LoadSpecialModel(hier`cutobj03`, minnote);
  Streaming.LoadSpecialCharacter(1, $.asuka);
  Streaming.RequestModel(condo_ivy);
  Streaming.RequestModel(kmricndo01);



  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`))) {
    await asyncWait(0);


  }


  while (!(Streaming.HasModelLoaded(condo_ivy)) || !(Streaming.HasModelLoaded(kmricndo01))) {
    await asyncWait(0);


  }


  Cutscene.Load(A4_PDR);
  Cutscene.SetOffset(523.102, -636.96, 15.616);


  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);


  $.cs_asuka = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_asuka.setAnim($.asuka);


  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.setAnim($.player);


  $.cs_asukahead = CutsceneHead.Create($.cs_asuka, hier`cutobj02`);
  $.cs_asukahead.setAnim($.asuka);


  $.cs_note = CutsceneObject.Create(hier`cutobj03`);
  $.cs_note.setAnim(minnote);


  World.ClearArea(523.6, -639.4, 16.6, 1.0, true /* TRUE */);
  $.player.setCoordinates(523.6, -639.4, 16.0);


  $.player.setHeading(180.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text



  $.cs_time = Cutscene.GetTime();



  while ($.cs_time < 805) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_A", 10000, 1);


  while ($.cs_time < 3370) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_B", 10000, 1);


  while ($.cs_time < 6758) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_C", 10000, 1);


  while ($.cs_time < 12673) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_D", 10000, 1);


  while ($.cs_time < 15481) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_E", 10000, 1);


  while ($.cs_time < 18606) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_F", 10000, 1);


  while ($.cs_time < 21381) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_G", 10000, 1);


  while ($.cs_time < 25955) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 29333) {
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


  World.SwitchRubbish(true /* ON */);
  Cutscene.Clear();
  Camera.SetInFrontOfPlayer();


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(condo_ivy);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  Streaming.UnloadSpecialCharacter(1);

  //GOTO skip_to_ray_cut //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // MISSION START


  $.phone_1_obj = Object.CreateNoOffset(1385 /* faketarget */, 229.2, -1537.6, 26.0);
  $.phone_1_obj.dontRemove();


  $.phone_2_obj = Object.CreateNoOffset(1385 /* faketarget */, -53.5, -699.1, 26.0);
  $.phone_2_obj.dontRemove();


  $.phone_3_obj = Object.CreateNoOffset(1385 /* faketarget */, 204.8, -135.0, 16.0);
  $.phone_3_obj.dontRemove();


  $.phone_4_obj = Object.CreateNoOffset(1385 /* faketarget */, 60.3, -964.8, 26.1);
  $.phone_4_obj.dontRemove();


  $.countdown_as4 = 211000;
  Hud.DisplayTimer($.countdown_as4);
  $.blip1_as4 = Blip.AddForObject($.phone_1_obj);
  $.Ray_phone1.setMessage("AM4_1A");
  Audio.LoadMissionAudio(A4_A);


  while (!($.player.locateOnFoot3D(229.2, -1537.6, 26.0, 1.0, 1.0, 3.0, false /* FALSE */)) || !($.player.isLiftingAPhone())) {
    await asyncWait(0);
    if ($.countdown_as4 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_asuka4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka4_failed"); // fallback: would break linear control flow
    }


  }


  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  Hud.FreezeTimer(true /* TRUE */);
  Camera.SetFixedPosition(214.844, -1549.911, 32.448, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(215.507, -1549.246, 32.105, 2 /* JUMP_CUT */);


  while (!($.Ray_phone1.isDisplayingMessage())) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio();


  while ($.player.isLiftingAPhone()) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();
  Hud.FreezeTimer(false /* FALSE */);
  $.blip1_as4.remove();
  $.blip1_as4 = Blip.AddForObject($.phone_2_obj);
  $.Ray_phone2.setMessage("AM4_1B");
  Game.SetPoliceIgnorePlayer($.player, false /* off */);
  Game.SetEveryoneIgnorePlayer($.player, false /* off */);


  Audio.LoadMissionAudio(A4_B);


  while (!($.player.locateOnFoot3D(-53.5, -699.1, 26.0, 1.0, 1.0, 3.0, false /* FALSE */)) || !($.player.isLiftingAPhone())) {
    await asyncWait(0);
    if ($.countdown_as4 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_asuka4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka4_failed"); // fallback: would break linear control flow
    }


  }


  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  Hud.FreezeTimer(true /* TRUE */);
  Camera.SetFixedPosition(-77.442, -702.532, 33.574, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(-76.500, -702.391, 33.270, 2 /* JUMP_CUT */);


  while (!($.Ray_phone2.isDisplayingMessage())) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio();


  while ($.player.isLiftingAPhone()) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();
  Hud.FreezeTimer(false /* FALSE */);
  $.blip1_as4.remove();
  $.blip1_as4 = Blip.AddForObject($.phone_3_obj);
  $.Ray_phone3.setMessage("AM4_1C");
  Game.SetPoliceIgnorePlayer($.player, false /* off */);
  Game.SetEveryoneIgnorePlayer($.player, false /* off */);


  Audio.LoadMissionAudio(A4_C);


  while (!($.player.locateOnFoot3D(204.8, -135.0, 16.0, 1.0, 1.0, 3.0, false /* FALSE */)) || !($.player.isLiftingAPhone())) {
    await asyncWait(0);
    if ($.countdown_as4 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_asuka4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka4_failed"); // fallback: would break linear control flow
    }


  }


  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  Hud.FreezeTimer(true /* TRUE */);
  Camera.SetFixedPosition(191.656, -130.530, 20.037, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(192.560, -130.834, 19.734, 2 /* JUMP_CUT */);


  while (!($.Ray_phone3.isDisplayingMessage())) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio();


  while ($.player.isLiftingAPhone()) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();
  Hud.FreezeTimer(false /* FALSE */);
  $.blip1_as4.remove();
  $.blip1_as4 = Blip.AddForObject($.phone_4_obj);
  $.Ray_phone4.setMessage("AM4_1D");
  Game.SetPoliceIgnorePlayer($.player, false /* off */);
  Game.SetEveryoneIgnorePlayer($.player, false /* off */);


  Audio.LoadMissionAudio(A4_D);


  while (!($.player.locateOnFoot3D(60.3, -964.8, 26.1, 1.0, 1.0, 3.0, false /* FALSE */)) || !($.player.isLiftingAPhone())) {
    await asyncWait(0);
    if ($.countdown_as4 == 0) {
      Text.PrintNow("OUTTIME", 5000, 1);
      // SCM GOTO → mission_asuka4_failed (not lowered; manual jump required)
      throw new Error("unresolved GOTO mission_asuka4_failed"); // fallback: would break linear control flow
    }


  }


  Game.SetPoliceIgnorePlayer($.player, true /* On */);
  Game.SetEveryoneIgnorePlayer($.player, true /* On */);
  Hud.FreezeTimer(true /* TRUE */);
  Camera.SetFixedPosition(51.733, -973.067, 30.559, 0.0, 0.0, 0.0);
  Camera.PointAtPoint(52.418, -972.450, 30.172, 2 /* JUMP_CUT */);


  while (!($.Ray_phone4.isDisplayingMessage())) {
    await asyncWait(0);


  }


  Audio.PlayMissionAudio();


  while ($.player.isLiftingAPhone()) {
    await asyncWait(0);


  }


  Camera.RestoreJumpcut();
  Hud.ClearTimer($.countdown_as4);
  $.blip1_as4.remove();
  $.blip1_as4 = Blip.AddForCoord(38.8, -725.4, 22.8);
  Game.SetPoliceIgnorePlayer($.player, false /* off */);
  Game.SetEveryoneIgnorePlayer($.player, false /* off */);


  $.rays_cutscene_flag = 1;


  while (!($.player.locateOnFoot3D(38.8, -725.4, 22.8, 1.0, 1.0, 2.0, true /* TRUE */))) {
    await asyncWait(0);


  }


  $.blip1_as4.remove();


  //skip_to_ray_cut: //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //SET_PLAYER_COORDINATES player 44.2 -725.0 24.7 //TEST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  $.breakout_timer_start = Clock.GetGameTimer();
  $.breakout_diff = 0;


  while (!($.player.canStartMission()) && $.breakout_diff < 5000) {
    await asyncWait(0);
    $.breakout_timer = Clock.GetGameTimer();
    $.breakout_diff = $.breakout_timer - $.breakout_timer_start;
  }


  $.player.makeSafeForCutscene();

  //RAY CUT SCENE*************************************************************************

  $.player.clearWantedLevel();
  Camera.SetFadingColor(0, 0, 0);


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  Streaming.Switch(false /* OFF */);


  Streaming.LoadSpecialCharacter(2, $.ray);
  Streaming.LoadSpecialModel(hier`cutobj01`, PLAYERH);
  Streaming.LoadSpecialModel(hier`cutobj02`, RAYH);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);


  }


  Streaming.LoadAllModelsNow();


  while (!(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);


  }


  Cutscene.Load(R0_PDR2);
  Cutscene.SetOffset(39.424, -726.677, 21.692);


  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.setAnim($.player);


  $.cs_ray = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_ray.setAnim($.ray);


  $.cs_playerhead = CutsceneHead.Create($.cs_player, hier`cutobj01`);
  $.cs_playerhead.setAnim($.player);


  $.cs_rayhead = CutsceneHead.Create($.cs_ray, hier`cutobj02`);
  $.cs_rayhead.setAnim($.ray);


  World.ClearArea(39.0, -723.5, 22.0, 1.0, true /* TRUE */);


  $.player.setCoordinates(39.0, -723.5, 22.0);


  $.player.setHeading(90.0);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  World.SwitchRubbish(false /* OFF */);
  Streaming.Switch(true /* ON */);
  Cutscene.Start();

  // Displays cutscene text


  $.cs_time = Cutscene.GetTime();


  while ($.cs_time < 2887) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_3", 10000, 1);


  while ($.cs_time < 6583) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_4", 10000, 1);


  while ($.cs_time < 10279) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_5", 10000, 1);


  while ($.cs_time < 13282) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_6", 10000, 1);


  while ($.cs_time < 15014) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_7", 10000, 1);


  while ($.cs_time < 20212) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_8", 10000, 1);


  while ($.cs_time < 21944) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_9", 10000, 1);


  while ($.cs_time < 24716) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_10", 10000, 1);


  while ($.cs_time < 27719) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.PrintNow("AM4_11", 10000, 1);


  while ($.cs_time < 30611) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Text.ClearPrints();


  while ($.cs_time < 31666) {
    await asyncWait(0);
    $.cs_time = Cutscene.GetTime();
  }


  Camera.DoFade(1500, 0 /* FADE_OUT */);


  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
  }


  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);


  }


  World.SwitchRubbish(true /* ON */);
  Text.ClearPrints();
  Cutscene.Clear();
  Camera.SetBehindPlayer();


  await asyncWait(500);


  Camera.DoFade(1500, 1 /* FADE_IN */);


  Streaming.UnloadSpecialCharacter(2);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);


  }



  // SCM GOTO → mission_asuka4_passed (not lowered; manual jump required)
  throw new Error("unresolved GOTO mission_asuka4_passed"); // fallback: would break linear control flow


  // Mission asuka4 failed


}

async function mission_asuka4_failed() {
  Text.PrintBig("M_FAIL", 5000, 1); //"Mission Failed"
  return;



  // mission asuka4 passed


}

async function mission_asuka4_passed() {


  $.flag_asuka_mission4_passed = 1;
  Audio.PlayMissionPassedTune(1);
  Text.PrintWithNumberBig("M_PASS", 11000, 5000, 1); //"Mission Passed!"
  $.player.clearWantedLevel();
  $.player.addScore(11000);
  Stat.RegisterMissionPassed(AM4);
  Stat.PlayerMadeProgress(1);
  $.ray_contact_blip = Blip.AddSpriteForContactPoint(38.8, -725.4, -100.0, 15 /* RADAR_SPRITE_RAY */);
  Camera.SetBehindPlayer();
  // START_NEW_SCRIPT asuka_mission5_loop
  // START_NEW_SCRIPT ray_mission1_loop
  return;



  // mission cleanup


}

async function mission_cleanup_asuka4() {


  $.flag_player_on_mission = 0;
  $.flag_player_on_asuka_mission = 0;
  Hud.ClearTimer($.countdown_as4);
  $.blip1_as4.remove();
  $.Ray_phone1.turnOff();
  $.Ray_phone2.turnOff();
  $.Ray_phone3.turnOff();
  $.Ray_phone4.turnOff();
  $.phone_1_obj.delete();
  $.phone_2_obj.delete();
  $.phone_3_obj.delete();
  $.phone_4_obj.delete();
  $.rays_cutscene_flag = 0;
  Hud.FreezeTimer(false /* FALSE */);
  Mission.Finish();
  return;




}

export async function asuka4() {
  // MissionBoundary
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************************************************************
  // *****************************************asuka mission 4********************************
  // ******************************************Pay day for Ray********************************
  // *****************************************************************************************
  // *****************************************************************************************

  // Mission start stuff


  // SCM GOSUB mission_start_asuka4
  await mission_start_asuka4();
  // fallback if label was not emitted as async function: no-op continues linearly


  if (HAS_DEATHARREST_BEEN_EXECUTED()) {
    // SCM GOSUB mission_asuka4_failed
    await mission_asuka4_failed();
    // fallback if label was not emitted as async function: no-op continues linearly
  }


  // SCM GOSUB mission_cleanup_asuka4
  await mission_cleanup_asuka4();
  // fallback if label was not emitted as async function: no-op continues linearly


  // MissionBoundary

  // Variables for mission


  // VAR_INT blip1_as4 timer_frozen


  // VAR_INT countdown_as4 phone_1_obj phone_2_obj phone_3_obj phone_4_obj


  // ****************************************Mission Start************************************


}
