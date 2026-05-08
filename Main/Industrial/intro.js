// Generated from Main/Industrial/intro.sc
// Imports: vars (../../../vars.mts), ide (../../../ide.ts).
// Copy or re-point these paths if you move the output tree; repo copies live next to this converter.
import { $ } from "../../../vars.mts";
import { car, ped, hier } from "../../../ide.ts";


async function mission_start_intro() {
  $.flag_player_on_mission = 1;
  $.skip_flag = 0;
  await asyncWait(0);
  {
  // ScriptName
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(0, 0 /* FADE_OUT */);
  Game.SetEveryoneIgnorePlayer($.player, 1 /* TRUE */);
  $.player.SetControl(0 /* OFF */);
  $.player.SetVisible(0 /* FALSE */);
  Streaming.Switch(0 /* OFF */);
  World.SwitchRubbish(0 /* OFF */);
  $.player.MakeSafeForCutscene();
  Game.SetIntroIsPlaying(1 /* TRUE */);
  Streaming.LoadCollision(0 /* LEVEL_GENERIC */);
  Streaming.LoadSpecialCharacter(1, cat);
  Streaming.LoadSpecialCharacter(2, colrob);
  Streaming.LoadSpecialCharacter(3, $.miguel);
  Streaming.LoadSpecialCharacter(4, playerx);
  Streaming.LoadSpecialModel(hier`cutobj01`, cs_ban);
  Streaming.LoadSpecialModel(hier`cutobj02`, bankd);
  Streaming.LoadSpecialModel(hier`cutobj03`, $.cs_loot);
  Streaming.LoadSpecialModel(hier`cutobj04`, colt1);
  Streaming.LoadSpecialModel(hier`cutobj05`, cath);
  $.script_controlled_player = $.player.GetChar();
  if (!(Char.IsDead($.script_controlled_player))) {
    $.script_controlled_player.Undress($.player);
    while (!(Streaming.HasModelLoaded(ped`PLAYER`))) {
      await asyncWait(0);
    }
    if (!(Char.IsDead($.script_controlled_player))) {
      $.script_controlled_player.Dress();
    }
  }
  Camera.SetMotionBlur(5);
  Weather.ForceNow(3 /* WEATHER_FOGGY */);
  Clock.SetTimeOfDay(12, 00);
  World.SwitchProcessing(0 /* OFF */);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`)) || !(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`))) {
    await asyncWait(0);
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj05`)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4))) {
    await asyncWait(0);
  }
  Cutscene.Load(bet);
  Streaming.LoadScene(-559.65, 1030.56, 40.0);
  Cutscene.SetOffset(-537.42, 1051.204, 36.884);
  $.cs_player = CutsceneObject.Create(ped`SPECIAL4`);
  $.cs_player.SetAnim(playerx);
  $.cs_cat = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_cat.SetAnim(cat);
  $.cs_robb = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_robb.SetAnim(colrob);
  $.cs_miguel = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_miguel.SetAnim($.miguel);
  $.cs_cathead = CutsceneHead.Create($.cs_cat, hier`cutobj05`);
  $.cs_cathead.SetAnim(cat);
  $.cs_cs_ban = CutsceneObject.Create(hier`cutobj01`);
  $.cs_cs_ban.SetAnim(cs_ban);
  $.cs_bankd = CutsceneObject.Create(hier`cutobj02`);
  $.cs_bankd.SetAnim(bankd);
  $.cs_loot = CutsceneObject.Create(hier`cutobj03`);
  $.cs_loot.SetAnim($.cs_loot);
  $.cs_colt1 = CutsceneObject.Create(hier`cutobj04`);
  $.cs_colt1.SetAnim(colt1);
  $.cs_colt2 = CutsceneObject.Create(hier`cutobj04`);
  $.cs_colt2.SetAnim(colt2);
  $.cs_cs_ban.SetDrawLast(1 /* TRUE */);
  Streaming.Switch(1 /* ON */);
  Cutscene.Start();
  Camera.DoFade(2000, 1 /* FADE_IN */);
  $.cs_time = Cutscene.GetTime();
  while ($.cs_time < 17166) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetMotionBlur(3);
  while ($.cs_time < 18126) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Audio.SetMusicDoesFade(0 /* FALSE */);
  if (!(Cutscene.HasFinished())) {
    Camera.SetFadingColor(255, 255, 255);
    Camera.DoFade(100, 0 /* FADE_OUT */);
    $.particle_x = -537.42 + 1.759;
    $.particle_y = 1051.204 - 0.416;
    $.particle_z = 36.884 + 1.9891;
    $.particle_target_x = -537.42 + 2.08;
    $.particle_target_y = 1051.204 - 0.9842;
    $.particle_target_z = 36.884 + 2.6714;
    $.temp_var = $.particle_target_x;
    $.particle_target_x = $.particle_x - $.temp_var;
    $.temp_var = $.particle_target_y;
    $.particle_target_y = $.particle_y - $.temp_var;
    $.temp_var = $.particle_target_z;
    $.particle_target_z = $.particle_z - $.temp_var;
    Fx.AddMovingParticleEffect(19 /* POBJECT_CATALINAS_SHOTGUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      // SCM GOSUB skip_intro_button
      await skip_intro_button();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.skip_flag == 2) {
        // SCM GOTO → skip_intro_here (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
      }
    }
  }
  if (!(Cutscene.HasFinished())) {
    Hud.LoadSplash(NEWS);
  }
  if (!(Cutscene.HasFinished())) {
    Camera.SetFadingColor(1, 1, 1);
    Camera.DoFade(0, 0 /* FADE_OUT */);
  }
  while ($.cs_time < 18733) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  if (!(Cutscene.HasFinished())) {
    Camera.SetFadingColor(1, 1, 1);
    Camera.DoFade(0, 1 /* FADE_IN */);
  }
  Camera.SetMotionBlur(5);
  while ($.cs_time < 25249) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(BETRA_A, 4000, 1);
  while ($.cs_time < 26060) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(BETRA_B, 5000, 1);
  while ($.cs_time < 27000) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  $.particle_x = -537.42 - 1.3329;
  $.particle_y = 1051.204 + 25.8224;
  $.particle_z = 36.884 + 1.367;
  $.particle_target_x = -537.42 - 0.393;
  $.particle_target_y = 1051.204 + 25.8211;
  $.particle_target_z = 36.884 + 1.4532;
  $.temp_var = $.particle_target_x;
  $.particle_target_x = $.particle_x - $.temp_var;
  $.temp_var = $.particle_target_y;
  $.particle_target_y = $.particle_y - $.temp_var;
  $.temp_var = $.particle_target_z;
  $.particle_target_z = $.particle_z - $.temp_var;
  Fx.AddMovingParticleEffect(18 /* POBJECT_CATALINAS_GUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
  while ($.cs_time < 27030) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  $.particle_x = -537.42 - 1.813;
  $.particle_y = 1051.204 + 26.0638;
  $.particle_z = 36.884 + 1.369;
  $.particle_target_x = -537.42 - 0.4432;
  $.particle_target_y = 1051.204 + 25.9765;
  $.particle_target_z = 36.884 + 1.4258;
  $.temp_var = $.particle_target_x;
  $.particle_target_x = $.particle_x - $.temp_var;
  $.temp_var = $.particle_target_y;
  $.particle_target_y = $.particle_y - $.temp_var;
  $.temp_var = $.particle_target_z;
  $.particle_target_z = $.particle_z - $.temp_var;
  Fx.AddMovingParticleEffect(18 /* POBJECT_CATALINAS_GUNFLASH */, $.particle_x, $.particle_y, $.particle_z, $.particle_target_x, $.particle_target_y, $.particle_target_z, 1.0, 0, 0, 0, 0);
  while ($.cs_time < 27100) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetMotionBlur(8);
  if (!(Cutscene.HasFinished())) {
    Camera.SetFadingColor(255, 255, 255);
    Camera.DoFade(100, 0 /* FADE_OUT */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      // SCM GOSUB skip_intro_button
      await skip_intro_button();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.skip_flag == 2) {
        // SCM GOTO → skip_intro_here (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
      }
    }
  }
  if (!(Cutscene.HasFinished())) {
    Camera.DoFade(600, 1 /* FADE_IN */);
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
      // SCM GOSUB skip_intro_button
      await skip_intro_button();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.skip_flag == 2) {
        // SCM GOTO → skip_intro_here (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
      }
    }
  }
  Camera.SetFadingColor(0, 0, 0);
  while ($.cs_time < 28710) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(BETRA_C, 2282, 1);
  Audio.SetMusicDoesFade(1 /* TRUE */);
  while ($.cs_time < 29200) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetMotionBlur(5);
  while ($.cs_time < 30800) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetMotionBlur(8);
  while ($.cs_time < 30992) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  Text.ClearSmallPrints();
  while ($.cs_time < 33333) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(4000, 0 /* FADE_OUT */);
  $.text_alpha = 0;
  $.text_fading_flag = 0;
  Text.UseCommands(1 /* TRUE */);
  // SCM GOSUB draw_intro_text
  await draw_intro_text();
  // fallback if label was not emitted as async function: no-op continues linearly
  while (Camera.GetFadingStatus()) {
    await asyncWait(0);
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
  }
  Text.ClearPrints();
  Text.ClearSmallPrints();
  Cutscene.Clear();
  $.player.MakeSafeForCutscene();
  Weather.ForceNow(2 /* WEATHER_RAINY */);
  Weather.ForceRain(1 /* TRUE */);
  Streaming.UnloadSpecialCharacter(1);
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Streaming.Switch(0 /* OFF */);
  Streaming.LoadCollision(2 /* LEVEL_COMMERCIAL */);
  $.player.SetCoordinates(820.9, -941.1, -100.0);
  Camera.SetFadingColor(0, 0, 0);
  Camera.SetMotionBlur(6);
  Streaming.LoadSpecialCharacter(1, eight);
  Streaming.LoadSpecialCharacter(2, OJG_P);
  Streaming.LoadSpecialCharacter(3, col1);
  Streaming.LoadSpecialCharacter(4, col2);
  Streaming.LoadSpecialModel(hier`cutobj01`, CS_TRUK);
  Streaming.LoadSpecialModel(hier`cutobj02`, REBEL);
  Streaming.LoadSpecialModel(hier`cutobj03`, $.brbomb);
  Streaming.LoadSpecialModel(hier`cutobj04`, COL1H);
  Streaming.RequestModel(bridgefuka);
  Streaming.RequestModel(bridgefukb);
  Clock.SetTimeOfDay(2, 00);
  Streaming.RequestModel(trafficlight1);
  Streaming.RequestModel(rd_SrRoad2A50);
  Streaming.RequestModel(rd_SrRoad2A20);
  Streaming.RequestModel(rd_SrRoad2A10);
  Streaming.RequestModel(rd_CrossRda1rw22);
  Streaming.RequestModel(rd_CrossRoadsa24);
  Streaming.RequestModel(com_cust_roads25);
  Streaming.RequestModel(veg_tree3);
  Streaming.RequestModel(doublestreetlght1);
  Streaming.RequestModel(veg_treea3);
  Streaming.RequestModel(veg_treenew17);
  Streaming.RequestModel(Streetlamp1);
  Streaming.RequestModel(bollardlight);
  Streaming.RequestModel(kb_scrap_5);
  Streaming.RequestModel(policetenkb1);
  Streaming.RequestModel(scraperkb3_nit);
  Streaming.RequestModel(chunk5land);
  Streaming.RequestModel(policeally);
  Streaming.RequestModel(police_com);
  Streaming.RequestModel(rd_CrossRda1w22);
  Streaming.RequestModel(treepatchkb7);
  Streaming.RequestModel(roadplanterkb3);
  Streaming.RequestModel(roadplanterkb1);
  Streaming.RequestModel(rd_Road3A50);
  Streaming.RequestModel(amco_floor);
  Streaming.LoadAllModelsNow();
  while (!(Streaming.HasSpecialCharacterLoaded(1)) || !(Streaming.HasSpecialCharacterLoaded(2)) || !(Streaming.HasSpecialCharacterLoaded(3)) || !(Streaming.HasSpecialCharacterLoaded(4)) || !(Streaming.HasModelLoaded(hier`cutobj01`)) || !(Streaming.HasModelLoaded(hier`cutobj02`))) {
    await asyncWait(0);
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  while (!(Streaming.HasModelLoaded(hier`cutobj03`)) || !(Streaming.HasModelLoaded(hier`cutobj04`)) || !(Streaming.HasModelLoaded(bridgefuka)) || !(Streaming.HasModelLoaded(bridgefukb))) {
    await asyncWait(0);
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  $.script_controlled_player = $.player.GetChar();
  if (!(Char.IsDead($.script_controlled_player))) {
    $.script_controlled_player.Undress(playerp);
    while (!(Streaming.HasModelLoaded(ped`PLAYER`))) {
      await asyncWait(0);
      // SCM GOSUB draw_intro_text
      await draw_intro_text();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (!(Char.IsDead($.script_controlled_player))) {
      $.script_controlled_player.Dress();
    }
  }
  Cutscene.Load(JB);
  Cutscene.SetOffset(0.0, 0.0, 0.0);
  $.cs_player = CutsceneObject.Create(ped`PLAYER`);
  $.cs_player.SetAnim(playerp);
  $.cs_eight = CutsceneObject.Create(ped`SPECIAL1`);
  $.cs_eight.SetAnim(eight);
  $.cs_ojg = CutsceneObject.Create(ped`SPECIAL2`);
  $.cs_ojg.SetAnim(ojg_p);
  $.cs_colombian1 = CutsceneObject.Create(ped`SPECIAL3`);
  $.cs_colombian1.SetAnim(col1);
  $.cs_colombian2 = CutsceneObject.Create(ped`SPECIAL4`);
  $.cs_colombian2.SetAnim(col2);
  $.cs_cop1 = CutsceneObject.Create(ped`COP`);
  $.cs_cop1.SetAnim(cop);
  $.cs_cop2 = CutsceneObject.Create(ped`COP`);
  $.cs_cop2.SetAnim(male01);
  $.cs_colombian1head = CutsceneHead.Create($.cs_colombian1, hier`cutobj04`);
  $.cs_colombian1head.SetAnim(col1);
  $.cs_colt1 = CutsceneObject.Create(hier`cutobj01`);
  $.cs_colt1.SetAnim(CS_TRUK);
  $.cs_colt2 = CutsceneObject.Create(hier`cutobj02`);
  $.cs_colt2.SetAnim(REBEL);
  $.brbomb = CutsceneObject.Create(hier`cutobj03`);
  $.brbomb.SetAnim($.brbomb);
  $.cs_colt1.SetDrawLast(1 /* TRUE */);
  $.cs_colt2.SetDrawLast(1 /* TRUE */);
  Cutscene.Start();
  ChaseScene.Start(1.0);
  Text.ClearPrints();
  Text.ClearSmallPrints();
  Camera.DoFade(2000, 1 /* FADE_IN */);
  $.cs_time = Cutscene.GetTime();
  Streaming.RequestModel(rd_CrossRda1w22);
  Streaming.RequestModel(rd_Road2A20);
  Streaming.RequestModel(broadwaybuild2);
  Streaming.RequestModel(broadwaybuild);
  Streaming.RequestModel(area5build2);
  Streaming.RequestModel(comswcentralbld7);
  Streaming.RequestModel(papermachn01);
  Streaming.RequestModel(comswcentralbld6);
  Streaming.RequestModel(com_21way5);
  Streaming.RequestModel(com_21way50);
  Streaming.RequestModel(com_21way10);
  Streaming.RequestModel(cm1waycrosscom);
  Streaming.RequestModel(com_21way20);
  Streaming.RequestModel(tw_t_cafe);
  Streaming.RequestModel(veg_bush14);
  Streaming.RequestModel(treepatchttwrs);
  Streaming.RequestModel(flatiron1);
  Streaming.RequestModel(veg_tree3);
  Streaming.RequestModel(veg_treenew17);
  Streaming.RequestModel(block4_ground01);
  while ($.cs_time < 9500) {
    await asyncWait(0);
    $.text_fading_flag = 1;
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    Fx.DrawLight(196.077, -1126.984, 25.626, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A50);
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A20);
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A10);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRoadsa24);
  Streaming.MarkModelAsNoLongerNeeded(com_cust_roads25);
  Streaming.MarkModelAsNoLongerNeeded(veg_treea3);
  Streaming.MarkModelAsNoLongerNeeded(Streetlamp1);
  Streaming.MarkModelAsNoLongerNeeded(bollardlight);
  Streaming.MarkModelAsNoLongerNeeded(kb_scrap_5);
  Streaming.MarkModelAsNoLongerNeeded(policetenkb1);
  Streaming.MarkModelAsNoLongerNeeded(scraperkb3_nit);
  Streaming.MarkModelAsNoLongerNeeded(chunk5land);
  Streaming.MarkModelAsNoLongerNeeded(policeally);
  Streaming.MarkModelAsNoLongerNeeded(police_com);
  Streaming.MarkModelAsNoLongerNeeded(treepatchkb7);
  Streaming.MarkModelAsNoLongerNeeded(roadplanterkb3);
  Streaming.MarkModelAsNoLongerNeeded(roadplanterkb1);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road3A50);
  Streaming.MarkModelAsNoLongerNeeded(amco_floor);
  while ($.cs_time < 13007) {
    await asyncWait(0);
    // SCM GOSUB draw_intro_text
    await draw_intro_text();
    // fallback if label was not emitted as async function: no-op continues linearly
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    Fx.DrawLight(196.077, -1126.984, 25.626, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.UseCommands(0 /* FALSE */);
  Text.PrintNow(JAILB_V, 10000, 1);
  while ($.cs_time < 14500) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    Fx.DrawLight(196.077, -1126.984, 25.626, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_A, 10000, 1);
  while ($.cs_time < 15933) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    Fx.DrawLight(196.077, -1126.984, 25.626, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Streaming.RequestModel(planter_short);
  Streaming.RequestModel(com_rvroads52);
  Streaming.RequestModel(road_broadway04);
  Streaming.RequestModel(com_roadsrv);
  Streaming.RequestModel(rd_Road1A20);
  Streaming.RequestModel(rd_CrossRoads11);
  Streaming.RequestModel(doublestreetlght1);
  Streaming.RequestModel(ofis_bildkb_4);
  Streaming.RequestModel(rd_Road1A10);
  Streaming.RequestModel(com_roadkb23);
  Streaming.RequestModel(com_cust_roads57);
  Streaming.RequestModel(com_rvroads52);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRda1w22);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road2A20);
  Streaming.MarkModelAsNoLongerNeeded(broadwaybuild2);
  Streaming.MarkModelAsNoLongerNeeded(broadwaybuild);
  Streaming.MarkModelAsNoLongerNeeded(area5build2);
  Streaming.MarkModelAsNoLongerNeeded(papermachn01);
  Streaming.MarkModelAsNoLongerNeeded(com_21way5);
  Streaming.MarkModelAsNoLongerNeeded(tw_t_cafe);
  Streaming.MarkModelAsNoLongerNeeded(treepatchttwrs);
  Streaming.MarkModelAsNoLongerNeeded(flatiron1);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(veg_treenew17);
  Streaming.MarkModelAsNoLongerNeeded(block4_ground01);
  Streaming.MarkModelAsNoLongerNeeded(comswcentralbld7);
  Streaming.MarkModelAsNoLongerNeeded(papermachn01);
  while ($.cs_time < 17514) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    Fx.DrawLight(196.077, -1126.984, 25.626, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_B, 10000, 1);
  while ($.cs_time < 18933) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Streaming.RequestModel(com_roadkb23);
  Streaming.RequestModel(com_roadkb22);
  Streaming.RequestModel(kb_underpass);
  Streaming.RequestModel(museum);
  Streaming.RequestModel(nbcom_roadkb01);
  Streaming.RequestModel(bvbridgspprt01);
  Streaming.RequestModel(flatiron1b);
  Streaming.RequestModel(veg_tree3);
  Streaming.RequestModel(nbbridgcabls01);
  Streaming.RequestModel(nbbridgerdb);
  Streaming.RequestModel(nbbridgerda);
  Streaming.RequestModel(nbbridgcabls01);
  Streaming.RequestModel(bvbridgspprt01);
  Streaming.RequestModel(overpass_comse);
  Streaming.RequestModel(com_landnew221b);
  Streaming.RequestModel(nbcom_roadkb01);
  Streaming.RequestModel(com_landnew221);
  Streaming.RequestModel(flatiron1b);
  Streaming.RequestModel(LODtiron1b);
  Streaming.RequestModel(veg_tree3);
  Streaming.RequestModel(ofis_bildkb_4);
  Streaming.RequestModel(kb_ofis1);
  Streaming.RequestModel(comtreepatchprk);
  Streaming.RequestModel(Hotel2);
  Streaming.RequestModel(underground_over7);
  Streaming.RequestModel(rd_Road1A50);
  Streaming.RequestModel(kb_underpass);
  Streaming.RequestModel(kbplanter4);
  Streaming.RequestModel(block4_scraperl0);
  Streaming.RequestModel(com_roadkb12);
  Streaming.RequestModel(planterbtm_1);
  Streaming.RequestModel(LODridgspprt01);
  Streaming.RequestModel(LODom_roadkb01);
  Streaming.RequestModel(LODridgerda);
  Streaming.RequestModel(LODridgerdb);
  Streaming.RequestModel(LODridgcabls01);
  Streaming.MarkModelAsNoLongerNeeded(com_21way20);
  Streaming.MarkModelAsNoLongerNeeded(cm1waycrosscom);
  Streaming.MarkModelAsNoLongerNeeded(com_21way10);
  Streaming.MarkModelAsNoLongerNeeded(comswcentralbld7);
  Streaming.MarkModelAsNoLongerNeeded(comswcentralbld6);
  Camera.SetNearClip(2.5);
  while ($.cs_time < 20667) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_C, 10000, 1);
  while ($.cs_time < 22181) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetNearClip(4.5);
  while ($.cs_time < 24522) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_D, 10000, 1);
  while ($.cs_time < 27208) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_E, 10000, 1);
  while ($.cs_time < 29793) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_F, 10000, 1);
  while ($.cs_time < 30599) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetNearClip(5.5);
  Streaming.RequestModel(ind_customroad003);
  Streaming.MarkModelAsNoLongerNeeded(planter_short);
  Streaming.MarkModelAsNoLongerNeeded(com_rvroads52);
  Streaming.MarkModelAsNoLongerNeeded(road_broadway04);
  Streaming.MarkModelAsNoLongerNeeded(com_roadsrv);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A20);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRoads11);
  Streaming.MarkModelAsNoLongerNeeded(com_21way50);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A10);
  Streaming.MarkModelAsNoLongerNeeded(com_cust_roads57);
  while ($.cs_time < 32986) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_G, 10000, 1);
  while ($.cs_time < 34817) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_H, 10000, 1);
  while ($.cs_time < 38590) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_I, 10000, 1);
  while ($.cs_time < 40842) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_J, 10000, 1);
  while ($.cs_time < 42066) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetNearClip(4.5);
  Streaming.RequestModel(kmricndo01);
  Streaming.RequestModel(kmricndo02);
  Streaming.RequestModel(veg_treenew17);
  Streaming.RequestModel(com_docksaa);
  Streaming.RequestModel(com_pier3);
  Streaming.RequestModel(gRD_overpass19kb);
  Streaming.RequestModel(gRD_overpass19bkb);
  while ($.cs_time < 42535) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_W, 10000, 1);
  while ($.cs_time < 46683) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_K, 10000, 1);
  while ($.cs_time < 49483) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_L, 10000, 1);
  while ($.cs_time < 53406) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_O, 10000, 1);
  while ($.cs_time < 53666) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Camera.SetNearClip(0.9);
  while ($.cs_time < 56077) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_P, 5000, 1);
  while ($.cs_time < 64200) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  ChaseScene.RemoveCarFromChase(2);
  while ($.cs_time < 64333) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  ChaseScene.RemoveCarFromChase(1);
  while ($.cs_time < 64566) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Streaming.RequestModel(com_docksb);
  Streaming.RequestModel(newdockbuilding2);
  Streaming.RequestModel(newdockbuilding);
  Streaming.RequestModel(block4_scraperl0);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb22);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb23);
  Streaming.MarkModelAsNoLongerNeeded(nbcom_roadkb01);
  Streaming.MarkModelAsNoLongerNeeded(com_landnew221);
  Streaming.MarkModelAsNoLongerNeeded(doublestreetlght1);
  Streaming.MarkModelAsNoLongerNeeded(museum);
  Streaming.MarkModelAsNoLongerNeeded(ofis_bildkb_4);
  Streaming.MarkModelAsNoLongerNeeded(kb_ofis1);
  Streaming.MarkModelAsNoLongerNeeded(comtreepatchprk);
  Streaming.MarkModelAsNoLongerNeeded(Hotel2);
  Streaming.MarkModelAsNoLongerNeeded(underground_over7);
  Streaming.MarkModelAsNoLongerNeeded(trafficlight1);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A50);
  Streaming.MarkModelAsNoLongerNeeded(veg_bush14);
  Streaming.MarkModelAsNoLongerNeeded(kb_underpass);
  Streaming.MarkModelAsNoLongerNeeded(ofis_bildkb_4);
  Streaming.MarkModelAsNoLongerNeeded(kbplanter4);
  Streaming.MarkModelAsNoLongerNeeded(planterbtm_1);
  Streaming.MarkModelAsNoLongerNeeded(com_rvroads52);
  while ($.cs_time < 66171) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_Q, 1200, 1);
  while ($.cs_time < 69378) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_R, 1600, 1);
  while ($.cs_time < 71994) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_S, 2000, 1);
  while ($.cs_time < 75623) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_T, 1800, 1);
  while ($.cs_time < 79633) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo02);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(veg_treenew17);
  Streaming.MarkModelAsNoLongerNeeded(com_docksaa);
  Streaming.MarkModelAsNoLongerNeeded(com_pier3);
  Streaming.MarkModelAsNoLongerNeeded(gRD_overpass19kb);
  Streaming.MarkModelAsNoLongerNeeded(gRD_overpass19bkb);
  while ($.cs_time < 86089) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.PrintNow(JAILB_U, 1800, 1);
  while ($.cs_time < 87592) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 235, 255, 250);
    $.cs_time = Cutscene.GetTime();
  }
  Text.ClearPrints();
  Text.ClearSmallPrints();
  while ($.cs_time < 98766) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 205, 255, 230);
    $.cs_time = Cutscene.GetTime();
  }
  while ($.cs_time < 101866) {
    await asyncWait(0);
    // SCM GOSUB skip_intro_button
    await skip_intro_button();
    // fallback if label was not emitted as async function: no-op continues linearly
    if ($.skip_flag == 2) {
      // SCM GOTO → skip_intro_here (not lowered; manual jump required)
      throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
    }
    Fx.DrawLight(780.55, -942.901, 39.022, 205, 255, 230);
    $.cs_time = Cutscene.GetTime();
  }
  Audio.SetMusicDoesFade(0 /* FALSE */);
  Camera.SetMotionBlur(7);
  if (!(Cutscene.HasFinished())) {
    Camera.SetFadingColor(255, 255, 255);
    Camera.DoFade(100, 0 /* FADE_OUT */);
    Text.ClearPrints();
    while (Camera.GetFadingStatus()) {
      await asyncWait(0);
    }
  }
}

async function skip_intro_here() {
  Hud.LoadSplash(splash1);
  if ($.skip_flag == 2) {
    await asyncWait(0);
    Text.UseCommands(0 /* FALSE */);
    Audio.SetMusicDoesFade(1 /* TRUE */);
    Camera.SetFadingColor(0, 0, 0);
    Camera.DoFade(0, 0 /* FADE_OUT */);
  }
  Streaming.MarkModelAsNoLongerNeeded(trafficlight1);
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A50);
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A20);
  Streaming.MarkModelAsNoLongerNeeded(rd_SrRoad2A10);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRda1rw22);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRoadsa24);
  Streaming.MarkModelAsNoLongerNeeded(com_cust_roads25);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(doublestreetlght1);
  Streaming.MarkModelAsNoLongerNeeded(veg_treea3);
  Streaming.MarkModelAsNoLongerNeeded(veg_treenew17);
  Streaming.MarkModelAsNoLongerNeeded(Streetlamp1);
  Streaming.MarkModelAsNoLongerNeeded(bollardlight);
  Streaming.MarkModelAsNoLongerNeeded(kb_scrap_5);
  Streaming.MarkModelAsNoLongerNeeded(policetenkb1);
  Streaming.MarkModelAsNoLongerNeeded(scraperkb3_nit);
  Streaming.MarkModelAsNoLongerNeeded(chunk5land);
  Streaming.MarkModelAsNoLongerNeeded(policeally);
  Streaming.MarkModelAsNoLongerNeeded(police_com);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRda1w22);
  Streaming.MarkModelAsNoLongerNeeded(treepatchkb7);
  Streaming.MarkModelAsNoLongerNeeded(roadplanterkb3);
  Streaming.MarkModelAsNoLongerNeeded(roadplanterkb1);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road3A50);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRda1w22);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road2A20);
  Streaming.MarkModelAsNoLongerNeeded(broadwaybuild2);
  Streaming.MarkModelAsNoLongerNeeded(broadwaybuild);
  Streaming.MarkModelAsNoLongerNeeded(area5build2);
  Streaming.MarkModelAsNoLongerNeeded(comswcentralbld7);
  Streaming.MarkModelAsNoLongerNeeded(papermachn01);
  Streaming.MarkModelAsNoLongerNeeded(comswcentralbld6);
  Streaming.MarkModelAsNoLongerNeeded(com_21way5);
  Streaming.MarkModelAsNoLongerNeeded(com_21way50);
  Streaming.MarkModelAsNoLongerNeeded(com_21way10);
  Streaming.MarkModelAsNoLongerNeeded(cm1waycrosscom);
  Streaming.MarkModelAsNoLongerNeeded(com_21way20);
  Streaming.MarkModelAsNoLongerNeeded(tw_t_cafe);
  Streaming.MarkModelAsNoLongerNeeded(veg_bush14);
  Streaming.MarkModelAsNoLongerNeeded(treepatchttwrs);
  Streaming.MarkModelAsNoLongerNeeded(flatiron1);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(veg_treenew17);
  Streaming.MarkModelAsNoLongerNeeded(block4_ground01);
  Streaming.MarkModelAsNoLongerNeeded(planter_short);
  Streaming.MarkModelAsNoLongerNeeded(com_rvroads52);
  Streaming.MarkModelAsNoLongerNeeded(road_broadway04);
  Streaming.MarkModelAsNoLongerNeeded(com_roadsrv);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A20);
  Streaming.MarkModelAsNoLongerNeeded(rd_CrossRoads11);
  Streaming.MarkModelAsNoLongerNeeded(doublestreetlght1);
  Streaming.MarkModelAsNoLongerNeeded(ofis_bildkb_4);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A10);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb23);
  Streaming.MarkModelAsNoLongerNeeded(com_cust_roads57);
  Streaming.MarkModelAsNoLongerNeeded(com_rvroads52);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb23);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb22);
  Streaming.MarkModelAsNoLongerNeeded(kb_underpass);
  Streaming.MarkModelAsNoLongerNeeded(museum);
  Streaming.MarkModelAsNoLongerNeeded(nbcom_roadkb01);
  Streaming.MarkModelAsNoLongerNeeded(bvbridgspprt01);
  Streaming.MarkModelAsNoLongerNeeded(flatiron1b);
  Streaming.MarkModelAsNoLongerNeeded(LODtiron1b);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(nbbridgcabls01);
  Streaming.MarkModelAsNoLongerNeeded(nbbridgerdb);
  Streaming.MarkModelAsNoLongerNeeded(nbbridgerda);
  Streaming.MarkModelAsNoLongerNeeded(nbbridgcabls01);
  Streaming.MarkModelAsNoLongerNeeded(bvbridgspprt01);
  Streaming.MarkModelAsNoLongerNeeded(overpass_comse);
  Streaming.MarkModelAsNoLongerNeeded(com_landnew221b);
  Streaming.MarkModelAsNoLongerNeeded(nbcom_roadkb01);
  Streaming.MarkModelAsNoLongerNeeded(com_landnew221);
  Streaming.MarkModelAsNoLongerNeeded(flatiron1b);
  Streaming.MarkModelAsNoLongerNeeded(veg_tree3);
  Streaming.MarkModelAsNoLongerNeeded(museum);
  Streaming.MarkModelAsNoLongerNeeded(ofis_bildkb_4);
  Streaming.MarkModelAsNoLongerNeeded(kb_ofis1);
  Streaming.MarkModelAsNoLongerNeeded(comtreepatchprk);
  Streaming.MarkModelAsNoLongerNeeded(Hotel2);
  Streaming.MarkModelAsNoLongerNeeded(underground_over7);
  Streaming.MarkModelAsNoLongerNeeded(rd_Road1A50);
  Streaming.MarkModelAsNoLongerNeeded(kb_underpass);
  Streaming.MarkModelAsNoLongerNeeded(kbplanter4);
  Streaming.MarkModelAsNoLongerNeeded(block4_scraperl0);
  Streaming.MarkModelAsNoLongerNeeded(com_roadkb12);
  Streaming.MarkModelAsNoLongerNeeded(planterbtm_1);
  Streaming.MarkModelAsNoLongerNeeded(flatiron1b);
  Streaming.MarkModelAsNoLongerNeeded(ind_customroad003);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo01);
  Streaming.MarkModelAsNoLongerNeeded(kmricndo02);
  Streaming.MarkModelAsNoLongerNeeded(veg_treenew17);
  Streaming.MarkModelAsNoLongerNeeded(com_docksaa);
  Streaming.MarkModelAsNoLongerNeeded(com_pier3);
  Streaming.MarkModelAsNoLongerNeeded(gRD_overpass19kb);
  Streaming.MarkModelAsNoLongerNeeded(gRD_overpass19bkb);
  Streaming.MarkModelAsNoLongerNeeded(com_docksb);
  Streaming.MarkModelAsNoLongerNeeded(newdockbuilding2);
  Streaming.MarkModelAsNoLongerNeeded(newdockbuilding);
  Streaming.MarkModelAsNoLongerNeeded(block4_scraperl0);
  Streaming.MarkModelAsNoLongerNeeded(LODridgcabls01);
  World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, nbbridgcabls01, nbbridgfk2);
  World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, nbbridgcabls01, nbbridgfk2);
  World.SwapNearestBuildingModel(529.023, -920.098, 43.504, 20.0, nbbridgerdb, damgbridgerdb);
  World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, nbbridgerdb, damgbridgerdb);
  World.SwapNearestBuildingModel(529.023, -942.94, 43.504, 20.0, nbbridgerda, damgbbridgerda);
  World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, nbbridgerda, damgbbridgerda);
  World.SwapNearestBuildingModel(525.362, -927.066, 71.841, 20.0, lodridgcabls01, lodridgfk2);
  World.SwapNearestBuildingModel(706.432, -935.82, 67.071, 20.0, lodridgcabls01, lodridgfk2);
  World.SwapNearestBuildingModel(521.146, -922.94, 43.504, 20.0, lodridgerdb, lodgbridgerdb);
  World.SwapNearestBuildingModel(702.763, -939.963, 38.736, 20.0, lodridgerdb, lodgbridgerdb);
  World.SwapNearestBuildingModel(529.023, -940.098, 43.504, 20.0, lodridgerda, lodgbbridgerda);
  World.SwapNearestBuildingModel(702.764, -919.963, 38.736, 20.0, lodridgerda, lodgbbridgerda);
  $.damagea = Object.CreateNoOffset(bridgefuka, 715.746, -937.908, 40.194);
  $.damageb = Object.CreateNoOffset(bridgefukb, 787.835, -939.24, 38.971);
  $.player.SetCoordinates(811.90, -939.95, 35.8);
  $.player.SetHeading(180.0);
  World.SwitchProcessing(1 /* ON */);
  Streaming.Switch(1 /* ON */);
  Text.UseCommands(0 /* FALSE */);
  TIMERA = 6001;
  // SCM GOSUB do_bridge_particles
  await do_bridge_particles();
  // fallback if label was not emitted as async function: no-op continues linearly
  $.fire_sound_8ball = Sound.AddContinuous(790.537, -935.67, 38.005, 102 /* SOUND_PRETEND_FIRE_LOOP */);
  Text.UseCommands(0 /* FALSE */);
  if (!($.skip_flag == 2)) {
    $.player.SetVisible(1 /* TRUE */);
    Streaming.RequestModel(car`KURUMA`);
    Streaming.LoadAllModelsNow();
    while (!(Streaming.HasModelLoaded(car`KURUMA`))) {
      await asyncWait(0);
      // SCM GOSUB do_bridge_particles
      await do_bridge_particles();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    $.car_eightball = Car.Create(104 /* CAR_KURUMA */, 812.0131, -945.5528, 35.7889);
    $.car_eightball.ChangeColor(58, 1);
    $.car_eightball.SetHeading(262.3871);
    $.eightball = Char.Create(21 /* PEDTYPE_SPECIAL */, ped`SPECIAL1`, 811.90, -942.47, -100.0);
    $.eightball.SetAnimGroup(9 /* ANIM_GANG2_PED */);
    $.eightball.ClearThreatSearch();
    $.eightball.TurnToFaceCoord(811.90, -939.95, 35.8);
    $.eightball.LookAtPlayerAlways($.player);
    ChaseScene.Stop();
    Streaming.MarkModelAsNoLongerNeeded(LODridgspprt01);
    Streaming.MarkModelAsNoLongerNeeded(LODom_roadkb01);
    Streaming.MarkModelAsNoLongerNeeded(LODridgerda);
    Streaming.MarkModelAsNoLongerNeeded(LODridgerdb);
    while ($.cs_time < 107172) {
      await asyncWait(0);
      // SCM GOSUB do_bridge_particles
      await do_bridge_particles();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB skip_intro_button
      await skip_intro_button();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.skip_flag == 2) {
        // SCM GOTO → skip_intro_here (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
      }
      Fx.DrawLight(780.55, -942.901, 39.022, 205, 255, 230);
      $.cs_time = Cutscene.GetTime();
    }
    if (!(Cutscene.HasFinished())) {
      Camera.SetFadingColor(255, 255, 255);
      Camera.DoFade(6000, 1 /* FADE_IN */);
      Text.ClearPrints();
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        // SCM GOSUB do_bridge_particles
        await do_bridge_particles();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
    while ($.cs_time < 121666) {
      await asyncWait(0);
      // SCM GOSUB do_bridge_particles
      await do_bridge_particles();
      // fallback if label was not emitted as async function: no-op continues linearly
      // SCM GOSUB skip_intro_button
      await skip_intro_button();
      // fallback if label was not emitted as async function: no-op continues linearly
      if ($.skip_flag == 2) {
        // SCM GOTO → skip_intro_here (not lowered; manual jump required)
        throw new Error("unresolved GOTO skip_intro_here"); // fallback: would break linear control flow
      }
      Fx.DrawLight(780.55, -942.901, 39.022, 205, 255, 230);
      $.cs_time = Cutscene.GetTime();
    }
    if (!(Cutscene.HasFinished())) {
      Audio.SetMusicDoesFade(1 /* TRUE */);
      Camera.SetFadingColor(0, 0, 0);
      Camera.DoFade(500, 0 /* FADE_OUT */);
      Text.ClearPrints();
      while (Camera.GetFadingStatus()) {
        await asyncWait(0);
        // SCM GOSUB do_bridge_particles
        await do_bridge_particles();
        // fallback if label was not emitted as async function: no-op continues linearly
      }
    }
  }
  while (!(Cutscene.HasFinished())) {
    await asyncWait(0);
    // SCM GOSUB do_bridge_particles
    await do_bridge_particles();
    // fallback if label was not emitted as async function: no-op continues linearly
  }
  Audio.SetMusicDoesFade(1 /* TRUE */);
  Camera.SetMotionBlur(0);
  Camera.SetNearClip(0.9);
  ChaseScene.Stop();
  Cutscene.Clear();
  Text.ClearPrints();
  Text.ClearSmallPrints();
  Camera.SetFadingColor(0, 0, 0);
  Camera.DoFade(0, 0 /* FADE_OUT */);
  World.SwitchRubbish(1 /* ON */);
  World.SwitchProcessing(1 /* ON */);
  Streaming.Switch(1 /* ON */);
  Game.SetEveryoneIgnorePlayer($.player, 0 /* FALSE */);
  $.player.SetControl(1 /* ON */);
  $.player.SetVisible(1 /* TRUE */);
  Streaming.LoadCollision(1 /* LEVEL_INDUSTRIAL */);
  $.player.SetCoordinates(811.90, -939.95, 35.8);
  $.player.SetHeading(180.0);
  $.script_controlled_player = $.player.GetChar();
  if (!(Char.IsDead($.script_controlled_player))) {
    $.script_controlled_player.Undress(playerp);
    while (!(Streaming.HasModelLoaded(ped`PLAYER`))) {
      await asyncWait(0);
      // SCM GOSUB do_bridge_particles
      await do_bridge_particles();
      // fallback if label was not emitted as async function: no-op continues linearly
    }
    if (!(Char.IsDead($.script_controlled_player))) {
      $.script_controlled_player.Dress();
    }
  }
  Camera.SetBehindPlayer();
  Streaming.UnloadSpecialCharacter(2);
  Streaming.UnloadSpecialCharacter(3);
  Streaming.UnloadSpecialCharacter(4);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj01`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj02`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj03`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj04`);
  Streaming.MarkModelAsNoLongerNeeded(hier`cutobj05`);
  Game.SetIntroIsPlaying(0 /* FALSE */);
  Audio.SetMusicDoesFade(1 /* TRUE */);
  Weather.ForceRain(0 /* FALSE */);
  // START_NEW_SCRIPT eightball_mission_loop
  $.flag_player_on_mission = 0;
  Mission.Finish();
  // MissionBoundary
}

async function skip_intro_button() {
  if ($.skip_flag == 0) {
    if (!(Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */)) && !(Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */))) {
      $.skip_flag = 1;
    }
  }
  if ($.skip_flag == 1) {
    if (Pad.IsButtonPressed(0 /* PAD1 */, 16 /* CROSS */) || Pad.IsButtonPressed(0 /* PAD1 */, 12 /* START */)) {
      $.skip_flag = 2;
    }
  }
  return;
}

async function draw_intro_text() {
  Text.SetCenterSize(580.0);
  Text.SetFont(0 /* FONT_BANK */);
  Text.SetCenter(1 /* ON */);
  Text.SetColor(190, 190, 190, $.text_alpha);
  Text.SetScale(0.8, 1.0);
  Text.SetProportional(1 /* ON */);
  Text.SetBackgroundColor(0, 0, 0, $.text_alpha);
  Text.SetBackground(1 /* ON */);
  Text.Display(320.0, 400.0, PAPER1);
  if ($.text_fading_flag == 0) {
    $.text_alpha += 2;
    if ($.text_alpha > 255) {
      $.text_alpha = 255;
    }
  }
  else {
    $.text_alpha -= 3;
    if ($.text_alpha < 1) {
      $.text_alpha = 0;
    }
  }
  return;
}

async function do_bridge_particles() {
  if (TIMERA > 6000) {
    TIMERA = 0;
    Fx.AddMovingParticleEffect(10, 791.661, -936.916, 38.313, 0.0, 0.0, 0.0, 1.0, 0, 0, 0, 6000);
    Fx.AddMovingParticleEffect(10, 788.337, -938.467, 38.073, 0.0, 0.0, 0.0, 1.0, 0, 0, 0, 6000);
    Fx.AddMovingParticleEffect(10, 786.493, -942.398, 39.8, 0.0, 0.0, 0.0, 1.0, 0, 0, 0, 6000);
  }
  return;
  }
}

export async function intro() {
  // MissionBoundary
  // VAR_INT cs_cathead cs_robb robber cs_cs_ban cs_loot cs_colt1 cs_colt2 cs_bankd csbexpos skip_flag text_fading_flag
  // VAR_INT cs_colombian1 cs_colombian2 cs_cop1 cs_cop2 damagea damageb brbomb cs_colombian1head text_alpha
  // VAR_FLOAT particle_x particle_y particle_z particle_target_x particle_target_y particle_target_z temp_var
}
