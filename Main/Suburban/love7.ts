// Generated from Main/Suburban/love7.sc
import { $ } from '../../../vars.mts'
import { car, ped, hier } from '../../../ide.ts'

async function mission_start_love7() {
    $.flag_player_on_mission = 1
    $.flag_player_on_love_mission = 1

    Stat.RegisterMissionGiven()

    await asyncWait(0)

    // SCRIPT_NAME love7

    // ****************************************START OF CUTSCENE********************************

    //SET_FADING_COLOUR 0 0 0
    //
    //DO_FADE 1500 FADE_OUT
    //
    //IF CAN_PLAYER_START_MISSION player
    //	MAKE_PLAYER_SAFE_FOR_CUTSCENE player
    //ELSE
    //	GOTO mission_love7_failed
    //ENDIF
    //
    //PRINT_BIG LOVE7	15000 2

    Streaming.RequestModel(tshrorckgrdn)
    Streaming.RequestModel(tshrorckgrdn_alfas)

    //WHILE GET_FADING_STATUS
    //	WAIT 0
    //ENDWHILE

    Streaming.LoadAllModelsNow()

    while (!Streaming.HasModelLoaded(tshrorckgrdn_alfas) || !Streaming.HasModelLoaded(tshrorckgrdn)) {
        await asyncWait(0)
    }

    Cutscene.Load(D7_MLD)

    Cutscene.SetOffset(85.2162, -1532.9093, 243.5422)

    $.cs_player = CutsceneObject.Create(ped`PLAYER`)
    $.cs_player.setAnim($.player)

    World.ClearArea(82.44, -1548.49, 28.0, 2.0, true /* TRUE */)

    $.player.setCoordinates(82.44, -1548.49, 28.0)

    $.player.setHeading(90.0)

    Camera.DoFade(1500, 1 /* FADE_IN */)

    Cutscene.Start()

    World.SwitchRubbish(false /* OFF */)

    $.cs_time = Cutscene.GetTime()

    while ($.cs_time < 15000) {
        await asyncWait(0)
        $.cs_time = Cutscene.GetTime()
    }

    Camera.DoFade(1500, 0 /* FADE_OUT */)

    while (!Cutscene.HasFinished()) {
        await asyncWait(0)
    }

    Streaming.Switch(true /* ON */)
    World.SwitchRubbish(true /* ON */)

    Text.ClearPrints()

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    Cutscene.Clear()

    Camera.DoFade(0, 0 /* FADE_OUT */)

    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn)
    Streaming.MarkModelAsNoLongerNeeded(tshrorckgrdn_alfas)

    Camera.SetBehindPlayer()

    Camera.DoFade(1500, 1 /* FADE_IN */)

    while (Camera.GetFadingStatus()) {
        await asyncWait(0)
    }

    // ******************************************END OF CUTSCENE********************************

    // SCM GOTO → mission_love7_passed (not lowered; manual jump required)
    throw new Error('unresolved GOTO mission_love7_passed') // fallback: would break linear control flow

    // Mission Love 7 failed
}

async function mission_love7_failed() {
    return

    // mission Love 7 passed
}

async function mission_love7_passed() {
    $.flag_love_mission7_passed = 1
    Stat.PlayerMadeProgress(1)
    $.love_contact_blip.remove()
    $.player.clearWantedLevel()
    Audio.PlayMissionPassedTune(1)
    Stat.RegisterMissionPassed('LOVE7')
    return

    // mission cleanup
}

async function mission_cleanup_love7() {
    $.flag_player_on_mission = 0
    $.flag_player_on_love_mission = 0

    Mission.Finish()
    return
}

export async function love7() {
    // MissionBoundary
    // *****************************************************************************************
    // *******************************    Donald Love 7    *************************************
    // *******************************    Left the Scene   *************************************
    // *****************************************************************************************
    // ***************************    	Love has disapeared!   *********************************
    // *****************************************************************************************

    // Mission start stuff

    // SCM GOSUB mission_start_love7
    await mission_start_love7()
    // fallback if label was not emitted as async function: no-op continues linearly

    // SCM GOSUB mission_cleanup_love7
    await mission_cleanup_love7()
    // fallback if label was not emitted as async function: no-op continues linearly

    // MissionBoundary

    // ****************************************Mission Start************************************
}
