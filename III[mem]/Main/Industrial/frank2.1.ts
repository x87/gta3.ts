// Generated from Main/Industrial/frank2.1.sc
import { $ } from '../../vars.mts';
import { car, ped, hier } from '../../ide.mts';

async function mission_start_frankie2_1() {
    $.flag_player_on_mission = 1;

    Stat.RegisterMissionGiven();

    await asyncWait(0);

    $.flag_player_on_frankie_mission = 1;

    {
        // ****************************************START OF CUTSCENE********************************

        /*
  IF CAN_PLAYER_START_MISSION player
  MAKE_PLAYER_SAFE_FOR_CUTSCENE player
  ELSE
  GOTO mission_frankie2.1_failed
  ENDIF

  SET_FADING_COLOUR 0 0 0

  DO_FADE 1500 FADE_OUT

  PRINT_BIG ( FM21 ) 15000 2 //"Bomb Da Base Part 1"

  SWITCH_STREAMING OFF
  */

        Streaming.LoadSpecialCharacter(1, 'FRANKIE');
        Streaming.LoadSpecialModel(185 /* cut_obj1 */, 'FRANKH');
        //LOAD_SPECIAL_MODEL cut_obj2 PLAYERH

        Streaming.RequestModel(11 /* PED_GANG_MAFIA_B */);

        Streaming.RequestModel(541 /* franksclb02 */);
        Streaming.RequestModel(542 /* salvsdetail */);
        Streaming.RequestModel(540 /* swank_inside */);

        /*
  WHILE GET_FADING_STATUS

  WAIT 0

  ENDWHILE
  */

        Streaming.LoadAllModelsNow();

        // Cutscene stuff

        while (!Streaming.HasSpecialCharacterLoaded(1) || !Streaming.HasModelLoaded(185 /* cut_obj1 */) || !Streaming.HasModelLoaded(11 /* PED_GANG_MAFIA_B */)) {
            //OR NOT HAS_MODEL_LOADED cut_obj2

            await asyncWait(0);
        }

        while (!Streaming.HasModelLoaded(541 /* franksclb02 */) || !Streaming.HasModelLoaded(542 /* salvsdetail */) || !Streaming.HasModelLoaded(540 /* swank_inside */)) {
            await asyncWait(0);
        }

        Cutscene.Load('s3_rtc');

        Cutscene.SetOffset(1457.776, -185.348, 54.925);

        $.cs_player = CutsceneObject.Create(0 /* PED_PLAYER */);

        $.cs_player.setAnim('player');

        $.cs_frankie = CutsceneObject.Create(26 /* PED_SPECIAL1 */);

        $.cs_frankie.setAnim('frankie');

        $.cs_frankiehead = CutsceneHead.Create($.cs_frankie, 185 /* CUT_OBJ1 */);

        $.cs_frankiehead.setAnim('frank');

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ2 cs_playerhead

        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        $.cs_mafia = CutsceneObject.Create(11 /* PED_GANG_MAFIA_B */);

        $.cs_mafia.setAnim('gang02');

        World.ClearArea(1455.1, -187.8, -100.0, 1.0, true /* TRUE */);

        $.player.setCoordinates(1455.1, -187.8, -100.0);

        $.player.setHeading(180.0);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        World.SwitchRubbish(false /* OFF */);

        Streaming.Switch(true /* ON */);

        Cutscene.Start();

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime();

        /*
  WHILE cs_time < 27
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( FM3_A ) 10000 1 //"We should take these Colombian bastards out"

  WHILE cs_time < 1972
  WAIT 0
  GET_CUTSCENE_TIME cs_time
  ENDWHILE

  PRINT_NOW ( FM3_B ) 10000 1 //"but while we're at war with the Triads we just ain't strong enough"
  */

        while ($.cs_time < 5136) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_C', 10000, 1); //"The Cartel has got bottomless funds from pushing this SPANK crap."

        while ($.cs_time < 8848) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_D', 10000, 1); //"If we make an open attack on them, they'll wipe the floor with us."

        while ($.cs_time < 12450) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_E', 10000, 1); //"They must be making SPANK on that big boat that Curly lead you to."

        while ($.cs_time < 15984) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_F', 10000, 1); //"So we gotta use our heads -or rather one head. Your head."

        while ($.cs_time < 20426) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_G', 10000, 1); //"I'm asking you to destroy that SPANK factory as a personal favor to me, Salvatore Leone."

        while ($.cs_time < 27076) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_H', 10000, 1); //"If you do this for me, you will be a made man -anything you want."

        while ($.cs_time < 32651) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.PrintNow('FM3_I', 10000, 1); //"Go and see 8-Ball, you'll need his expertise to blow-up that boat."

        while ($.cs_time < 36233) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Text.ClearThisPrint('FM3_I');

        while ($.cs_time < 38333) {
            await asyncWait(0);
            $.cs_time = Cutscene.GetTime();
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */);

        while (!Cutscene.HasFinished()) {
            await asyncWait(0);
        }

        Text.ClearPrints();

        while (Camera.GetFadingStatus()) {
            await asyncWait(0);
        }

        Cutscene.Clear();

        World.SwitchRubbish(true /* ON */);

        Camera.SetBehindPlayer();

        await asyncWait(500);

        Camera.DoFade(1500, 1 /* FADE_IN */);

        Streaming.UnloadSpecialCharacter(1);
        Streaming.MarkModelAsNoLongerNeeded(185 /* CUT_OBJ1 */);
        Streaming.MarkModelAsNoLongerNeeded(11 /* PED_GANG_MAFIA_B */);
        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ2

        Streaming.MarkModelAsNoLongerNeeded(541 /* franksclb02 */);

        Streaming.MarkModelAsNoLongerNeeded(542 /* salvsdetail */);

        Streaming.MarkModelAsNoLongerNeeded(540 /* swank_inside */);

        // **************************************END OF CUTSCENE************************************
    }

    // SCM GOTO → mission_frankie2.1_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_frankie2.1_passed'); // fallback: would break linear control flow

    // Mission Frankie2.1 failed
}

async function mission_frankie2_1_failed() {
    Text.PrintBig('M_FAIL', 5000, 1); //"Mission Failed!"

    return;

    // mission Frankie2.1 passed
}

async function mission_frankie2_1_passed() {
    $.flag_frankie_mission2_1_passed = 1;
    $.flag_frankie_switched_off = 1;
    Stat.RegisterMissionPassed('FM21');
    Stat.PlayerMadeProgress(1);
    $.frankie_contact_blip.remove();
    $.eightball_contact_blip = Blip.AddSpriteForContactPoint(1272.2, -92.9, -100.0, 7 /* RADAR_SPRITE_EIGHT */);
    // START_NEW_SCRIPT frankie_mission3_loop
    return;

    // mission cleanup
}

async function mission_cleanup_frankie2_1() {
    $.flag_player_on_mission = 0;
    $.flag_player_on_frankie_mission = 0;
    Mission.Finish();
    return;
}

export async function frank2_1() {
    // MissionBoundary
    // *****************************************************************************************
    // *****************************************************************************************
    // *************************************Frankie Mission 2.1*********************************
    // ************************************Bomb Da Base Cash Wall*******************************
    // *****************************************************************************************
    // *****************************************************************************************
    // *****************************************************************************************

    // SCRIPT_NAME frank21

    // Mission start stuff

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

    // ***************************************Start Mission*************************************
}
