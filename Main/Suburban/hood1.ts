// Generated from Main/Suburban/hood1.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_hood1() {
    $.flag_player_on_mission = 1

    $.flag_player_on_hood_mission = 1

    $.flag_blip_on_hm1 = 0

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    {
        // SET_DEATHARREST_STATE(false /* OFF */);

        Zone.SetPedInfo('PROJECT', 1 /* DAY */, 30, 0, 0, 0, 0, 0, 0, 800, 0) //WICHITA GARDENS
        Zone.SetPedInfo('PROJECT', 0 /* NIGHT */, 30, 0, 0, 0, 0, 0, 0, 800, 0)

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

        World.SetPedDensityMultiplier(0.0)

        World.ClearAreaOfChars(-414.57, 97.73, 1.0, -589.29, -101.77, 20.0)

        //LOAD_ALL_MODELS_NOW

        //WHILE NOT HAS_MODEL_LOADED cut_obj1

        //	WAIT 0

        //ENDWHILE

        Cutscene.Load(hd_ph1)
        Cutscene.SetOffset(-444.714, -6.321, 2.9)

        $.cs_player = CutsceneObject.Create(ped`PLAYER`)
        $.cs_player.setAnim($.player)

        //CREATE_CUTSCENE_HEAD cs_player CUT_OBJ1 cs_playerhead
        //SET_CUTSCENE_HEAD_ANIM cs_playerhead player

        Camera.DoFade(1500, 1 /* FADE_IN */)

        Streaming.Switch(true /* ON */)

        Cutscene.Start()

        // Displays cutscene text

        $.cs_time = Cutscene.GetTime()

        while ($.cs_time < 2096) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }
        Text.PrintNow('HM1_A', 10000, 1) //"Yo this is D-ice of the Red Jacks!"

        while ($.cs_time < 4887) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_B', 10000, 1) //"I got a problem that's messin' my rep."

        while ($.cs_time < 7511) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_C', 10000, 1) //"These yound punks..."

        while ($.cs_time < 12668) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_D', 10000, 1) //"Nine is their tag...."

        while ($.cs_time < 16765) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_G', 10000, 1) //"is another day the Jacks..."

        while ($.cs_time < 19026) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_E', 10000, 1) //I want you to show..."

        while ($.cs_time < 23017) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_H', 10000, 1) //"Mow those nines down."

        while ($.cs_time < 25018) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.PrintNow('HM1_F', 10000, 1) ///"Watch your back..."

        while ($.cs_time < 28865) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Text.ClearThisPrint('HM1_F')

        while ($.cs_time < 30000) {
            await asyncWait(0)
            $.cs_time = Cutscene.GetTime()
        }

        Camera.DoFade(1500, 0 /* FADE_OUT */)

        while (!Cutscene.HasFinished()) {
            await asyncWait(0)
        }

        Text.ClearPrints()

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
        }

        Cutscene.Clear()

        //SWITCH_STREAMING ON

        await asyncWait(500)

        Camera.DoFade(1500, 1 /* FADE_IN */)

        //MARK_MODEL_AS_NO_LONGER_NEEDED CUT_OBJ1

        World.SetPedDensityMultiplier(1.0)

        // ****************************************END OF CUTSCENE**********************************

        if (!$.player.isPlaying()) {
            Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
            // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
        }

        while (Camera.GetFadingStatus()) {
            await asyncWait(0)
            if (!$.player.isPlaying()) {
                Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
                // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
            }
        }

        // waiting for the player to get to the zone

        Text.PrintNow('HM1_2', 5000, 1) //"Get a vehicle!"

        if ($.flag_done_drive_by_help == 0) {
            $.controlmode = Pad.GetControllerMode()
            if ($.controlmode == 0) {
                Text.PrintHelp('DRIVE_A') //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                $.flag_done_drive_by_help = 1
            }
            if ($.controlmode == 1) {
                Text.PrintHelp('DRIVE_A') //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                $.flag_done_drive_by_help = 1
            }
            if ($.controlmode == 2) {
                Text.PrintHelp('DRIVE_A') //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~| button~w~ to fire."
                $.flag_done_drive_by_help = 1
            }
            if ($.controlmode == 3) {
                Text.PrintHelp('DRIVE_B') //"Have an Uzi selected when entering a vehicle then look left or right and press the ~h~R1 button~w~ to fire."
                $.flag_done_drive_by_help = 1
            }
        }

        while (!$.player.isInAnyCar()) {
            await asyncWait(0)
            if (!$.player.isPlaying()) {
                Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
                // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
            }
        }

        Text.PrintNow('HM1_3', 5000, 1) //"Get to the correct zone!"
        $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0)
        $.flag_blip_on_hm1 = 1

        while (!$.player.isInZone('PROJECT') && !$.player.isInAnyCar()) {
            await asyncWait(0)
            if (!$.player.isPlaying()) {
                Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
                // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
            }
        }

        $.radar_blip_coord_hm1.remove()
        $.flag_blip_on_hm1 = 0

        KillFrenzy.Start('HM1_1', 19 /* WEAPONTYPE_UZI_DRIVEBY */, 150000, 20, ped`GANG_HOOD_B`, -1, -1, -1, false /* FALSE */)

        $.frenzy_state = KillFrenzy.ReadStatus()

        while ($.frenzy_state == 1) {
            await asyncWait(0)
            $.frenzy_state = KillFrenzy.ReadStatus()
            if (!$.player.isPlaying()) {
                Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
                // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
                throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
            } else {
                if (!$.player.isInZone('PROJECT')) {
                    if ($.flag_blip_on_hm1 == 0) {
                        $.radar_blip_coord_hm1 = Blip.AddForCoord(-442.3, -6.8, -100.0)
                        Text.PrintNow('HM1_3', 5000, 1) //"Get to the correct zone!"
                        $.flag_blip_on_hm1 = 1
                    }
                } else {
                    if ($.flag_blip_on_hm1 == 1) {
                        $.radar_blip_coord_hm1.remove()
                        $.flag_blip_on_hm1 = 0
                    }
                }
            }
        }

        $.frenzy_state = KillFrenzy.ReadStatus()

        if ($.frenzy_state == 2) {
            // SCM GOTO → mission_hood1_passed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_hood1_passed') // fallback: would break linear control flow
        }

        if ($.frenzy_state == 3) {
            Text.PrintBig('M_FAIL', 5000, 1) //"Mission Failed!"
            // SCM GOTO → mission_hood1_failed (not lowered; manual jump required)
            throw new Error('unresolved GOTO mission_hood1_failed') // fallback: would break linear control flow
        }
    }

    // Mission hood1 failed
}

async function mission_hood1_failed() {
    if ($.player.hasBeenArrested()) {
        Restart.OverridePolice(3 /* LEVEL_SUBURBAN */)
    }

    if ($.player.isDead()) {
        Restart.OverrideHospital(3 /* LEVEL_SUBURBAN */)
    }

    return

    // mission hood1 passed
}

async function mission_hood1_passed() {
    $.flag_hood_mission1_passed = 1
    Stat.RegisterMissionPassed('HM_1')
    Stat.PlayerMadeProgress(1)
    Text.PrintWithNumberBig('M_PASS', 10000, 5000, 1) //Mission Passed!"
    Audio.PlayMissionPassedTune(1)
    $.player.addScore(10000)
    $.player.clearWantedLevel()
    // START_NEW_SCRIPT hood_mission2_loop
    return

    // mission cleanup
}

async function mission_cleanup_hood1() {
    $.flag_player_on_mission = 0
    $.flag_player_on_hood_mission = 0
    $.radar_blip_coord_hm1.remove()
    Zone.SetPedInfo('PROJECT', 1 /* DAY */, 13, 0, 0, 0, 0, 0, 0, 300, 20) //WICHITA GARDENS
    Zone.SetPedInfo('PROJECT', 0 /* NIGHT */, 9, 0, 0, 0, 0, 0, 0, 400, 10)
    Mission.Finish()
    return
}

export async function hood1() {
    // MissionBoundary
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *************************************Hood Mission 1****************************************
    // ****************************************Drive By*******************************************
    // *******************************************************************************************
    // *******************************************************************************************
    // *******************************************************************************************

    // SCRIPT_NAME hood1

    // Mission start stuff

    // SCM GOSUB mission_start_hood1
    await mission_start_hood1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // SCM GOSUB mission_cleanup_hood1
    await mission_cleanup_hood1()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // Variables for mission

    // VAR_INT frenzy_state

    // VAR_INT radar_blip_coord_hm1

    // VAR_INT flag_blip_on_hm1

    // ***************************************Mission Start*************************************
}
